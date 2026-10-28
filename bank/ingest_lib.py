import json,re
T='/root/.claude/projects/-home-user-jimin/3ca69864-b01c-5531-878a-ddb0029696c7.jsonl'
def msg(i):
    for n,l in enumerate(open(T)):
        if n==i:
            o=json.loads(l);c=o['message']['content']
            return ''.join(x.get('text','') for x in c if isinstance(x,dict) and x.get('type')=='text') if isinstance(c,list) else c
QS=re.compile(r'^(\d+)\s*Multiple Choice\s*[\d/ ]*points?\s*$',re.M)
def parse_q_letterless(block,n):
    lines=[x.rstrip() for x in block.split('\n')]
    first=None
    for i,x in enumerate(lines):
        if re.match(r'^(Incorrect|Correct) [Aa]nswer:\s*$',x.strip()) or x.strip()=='' and False: first=i;break
    # find first option: a non-empty non-label line directly followed (skipping blanks) by a feedback line
    def nxt(i):
        j=i+1
        while j<len(lines) and not lines[j].strip(): j+=1
        return j
    FB=re.compile(r'^(Incorrect|Correct) [Aa]nswer Feedback:\s*(.*)$')
    opt_idx=[]
    for i,x in enumerate(lines):
        s=x.strip()
        if not s or FB.match(s) or re.match(r'^(Incorrect|Correct) [Aa]nswer:\s*$',s) or s in('Not Selected','Feedback'): continue
        j=nxt(i)
        if j<len(lines) and FB.match(lines[j].strip()): opt_idx.append(i)
    if not opt_idx: return None
    stem_end=opt_idx[0]
    # stem ends at first label or option
    for i,x in enumerate(lines[:stem_end+1]):
        if re.match(r'^(Incorrect|Correct) [Aa]nswer:\s*$',x.strip()): stem_end=i;break
    stem='\n'.join(lines[:stem_end]).strip()
    opts=[];keyi=None
    for k,i in enumerate(opt_idx):
        end=opt_idx[k+1] if k+1<len(opt_idx) else len(lines)
        # cut at label line preceding next option
        seg=lines[i+1:end]
        while seg and (not seg[-1].strip() or re.match(r'^(Incorrect|Correct) [Aa]nswer:\s*$',seg[-1].strip())): seg=seg[:-1]
        fb=' '.join(x.strip() for x in seg if x.strip())
        fb=FB.sub(lambda m:m.group(2),fb,count=1) if FB.match(fb) else fb
        corr = bool(re.search(r'^Correct [Aa]nswer:\s*$',lines[max(0,i-2):i][-1].strip() if i>=1 and lines[i-1].strip() else (lines[i-2].strip() if i>=2 else ''))) or fb.startswith('Correct because') or 'Correct Answer Feedback' in lines[nxt(i)]
        opts.append((lines[i].strip(),fb,corr))
    ans=[i for i,(a,b,c) in enumerate(opts) if c]
    key='ABC'[ans[0]] if ans else None
    return dict(n=int(n),q=stem,options=[o[0] for o in opts][:3],answer=key,why=' | '.join(f"{'ABC'[i]}. {o[1]}" for i,o in enumerate(opts)))
def parse_q(block,n):
    r=_parse_q(block,n)
    if r['answer'] is None or '' in r['options']:
        r2=parse_q_letterless(block,n)
        if r2 and r2['answer']: return r2
    return r
def _parse_q(block,n):
    # stem until first marker
    m=re.search(r'^(Incorrect [Aa]nswer:|Correct [Aa]nswer:|A\. )',block,re.M)
    stem=block[:m.start()].strip() if m else block.strip()
    rest=block[m.start():] if m else ''
    opts={}
    for om in re.finditer(r'^([ABC])\.\s*(.+)$',rest,re.M):
        L=om.group(1)
        if L not in opts: opts[L]=om.group(2).strip()
    cm=re.search(r'Correct [Aa]nswer:\s*\n+\s*([ABC])\.',rest)
    key=cm.group(1) if cm else None
    # feedback
    fm=re.search(r'^Feedback\s*$',rest,re.M)
    if fm: fb=rest[fm.end():].strip()
    else:
        fb=re.sub(r'^(Not Selected|Incorrect [Aa]nswer:|Correct [Aa]nswer:)\s*$','',rest,flags=re.M)
        fb=re.sub(r'^[ABC]\.\s*.+$','',fb,flags=re.M); fb=re.sub(r'\n{3,}','\n\n',fb).strip()
    if key is None:
        km=re.search(r'(?m)^(?:Correct Answer Feedback:.*?)?\b([ABC]) is correct',rest) or re.search(r'\b([ABC]) is correct',rest)
        key=km.group(1) if km else None
    return dict(n=int(n),q=stem,options=[opts.get(x,'') for x in 'ABC'],answer=key,why=fb)
def parse_msg(txt,first_marker=None):
    """return list of vignettes [dict(body,questions)]"""
    parts=re.split(r'^Vignette\s*$',txt,flags=re.M)
    segs=[]
    if first_marker:
        k=txt.find(first_marker)
        head=txt[k:parts_first_end(txt)] if k>=0 else ''
        segs.append(head)
    segs+=parts[1:]
    out=[]
    for s in segs:
        s=re.sub(r'^(?:Module \d+:.*\n)?(?:[\d:]+\s*\nTime Elapsed\s*\n)?','',s.lstrip('\n'))
        qm=list(QS.finditer(s))
        if not qm: 
            out.append(dict(body=s.strip(),questions=[]));continue
        body=s[:qm[0].start()].strip()
        qs=[]
        for i,m in enumerate(qm):
            end=qm[i+1].start() if i+1<len(qm) else len(s)
            blk=s[m.end():end]
            blk=re.split(r'^Module \d+:.*$',blk,flags=re.M)[0]  # cut trailing module header
            qs.append(parse_q(blk,m.group(1)))
        out.append(dict(body=body,questions=qs))
    return out
def parts_first_end(txt):
    m=re.search(r'^Vignette\s*$',txt,re.M); return m.start() if m else len(txt)

def segment(txt,header_positions):
    """header_positions: sorted list of (pos,label). Returns list of dict(label,body,questions)."""
    segs=[]
    ps=sorted(header_positions)
    for i,(pos,label) in enumerate(ps):
        end=ps[i+1][0] if i+1<len(ps) else len(txt)
        s=txt[pos:end]
        s=s[len(label):] if s.startswith(label) else s
        qm=list(QS.finditer(s))
        if not qm:
            segs.append(dict(label=label.strip(),body=s.strip(),questions=[]));continue
        body=s[:qm[0].start()].strip()
        qs=[]
        for k,m in enumerate(qm):
            e=qm[k+1].start() if k+1<len(qm) else len(s)
            qs.append(parse_q(s[m.end():e],m.group(1)))
        segs.append(dict(label=label.strip(),body=body,questions=qs))
    return segs
