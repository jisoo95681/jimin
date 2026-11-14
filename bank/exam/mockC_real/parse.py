import re,json
T=open('/home/user/jimin/bank/exam/mockC_real/paste.txt').read().replace('​','').replace('﻿','')
def isnum(s): return bool(re.fullmatch(r'[\s$–\-+]*[\d,\.]+\s*%?',s))
def body(lines):
    L=[l for l in lines if 'Expand / Collapse Extended Description' not in l]
    out=[];prev=False
    for l in L:
        if '\t' in l:
            c=[x.strip() for x in l.split('\t')]
            hdr=(not prev) and (c[0]=='' or not any(re.search(r'\d',x) for x in c))
            out.append(('# ' if hdr else '')+' | '.join(c)); prev=True
        else: out.append(l.rstrip()); prev=False
    # drop blank lines duplicates
    return '\n'.join(out).strip()
sess=T.split('Quiz review.')
sets=[]
for si,blk in enumerate(sess[1:],1):
    lines=blk.split('\n')
    # start after 'Your Answers:'
    st=next(i for i,l in enumerate(lines) if l.strip()=='Your Answers:')+1
    lines=lines[st:]
    vig=[];cur=None;i=0
    # split into vignettes
    idx=[k for k,l in enumerate(lines) if l.strip()=='Vignette']
    idx.append(len(lines))
    for a,b in zip(idx,idx[1:]):
        seg=lines[a+1:b]
        qs=[k for k,l in enumerate(seg) if re.match(r'^\d+Multiple Choice',l)]
        bodyl=seg[:qs[0]]
        questions=[]
        qs.append(len(seg))
        for qa,qb in zip(qs,qs[1:]):
            qn=int(re.match(r'^(\d+)Multiple Choice',seg[qa]).group(1))
            qb_=seg[qa+1:qb]
            # question text until first option line
            oi=[k for k,l in enumerate(qb_) if re.match(r'^[ABC]\. ',l)]
            stem=' '.join(l.strip() for l in qb_[:oi[0]] if l.strip())
            opts={};fb={};corr=None
            oi.append(len(qb_))
            order=[]
            for oa,ob in zip(oi,oi[1:]):
                chunk=qb_[oa:ob]; L=chunk[0][0]; txt=chunk[0][3:].strip()
                # feedback lines: everything after the option line until markers
                rest=[]
                for l in chunk[1:]:
                    if l.strip() in ('Incorrect answer:','(no answer)','Correct Answer:'): break
                    rest.append(l)
                opts[L]=txt; fb[L]='\n'.join(rest).strip()
                # was it preceded by 'Correct answer:' marker?
                prev=[l.strip() for l in qb_[max(0,oa-3):oa]]
                if 'Correct answer:' in prev: corr=L
            m=re.search(r'Correct Answer:\s*\n([ABC])\.',  '\n'.join(qb_))
            if m: corr=m.group(1)
            assert corr and set(opts)=={'A','B','C'},(si,qn,corr,list(opts))
            def clean(x):
                x=re.sub(r'^(Correct|Incorrect) Answer Feedback:\s*','',x).strip()
                return x
            why='\n'.join(f"{L}. {'Correct' if L==corr else 'Incorrect'}. {clean(fb[L])}".rstrip() for L in 'ABC')
            questions.append(dict(n=qn,q=stem,options=[opts[L] for L in 'ABC'],answer='ABC'.index(corr),why=why))
        vig.append(dict(body=body(bodyl),questions=questions))
    sets.append(vig)
for s in sets:
    print(len(s),[len(v['questions']) for v in s],''.join('ABC'[q['answer']] for v in s for q in v['questions']))
json.dump(sets,open('/home/user/jimin/bank/exam/mockC_real/parsed.json','w'),ensure_ascii=False,indent=1)
