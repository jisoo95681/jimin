# Build big-subject mocks A1.. from mockA_pick.json: real vignettes, names changed (a_names_map.py), concept-question options shuffled (explanations rewritten per option), tables converted. Numbers are NOT changed.
import json,re,random,io,contextlib,sys,importlib.util as iu
sys.path.insert(0,'/home/user/jimin/bank/exam')
from a_names_map import rename
R=random.SystemRandom()
sp=iu.spec_from_file_location('p','/home/user/jimin/bank/exam/mock1112_pick.py'); p=iu.module_from_spec(sp)
with contextlib.redirect_stdout(io.StringIO()): sp.loader.exec_module(p)
BANK=p.BANK; m=p.m
def isnum(s): return bool(re.fullmatch(r'[\s$–\-+]*[\d,\.]+\s*%?',s))
def body(t):
    L=[l for l in t.split('\n') if 'Expand / Collapse Extended Description' not in l]
    out=[];prev=False
    for l in L:
        if '\t' in l:
            c=[x.strip() for x in l.split('\t')]
            hdr=(not prev) and (c[0]=='' or not any(isnum(x) for x in c[1:]))
            out.append(('# ' if hdr else '')+' | '.join(c)); prev=True
        else: out.append(l); prev=(' | ' in l)
    return '\n'.join(out)
def blocks(why):
    parts=re.split(r'(?:In)?[Cc]orrect Answer Feedback:\s*',why)
    heads=re.findall(r'((?:In)?[Cc]orrect) Answer Feedback:',why)
    return heads,[x.strip() for x in parts[1:]]
def conv(q):
    opts=list(q['options']); a='ABC'.index(q['answer']); why=q['why']
    heads,txt=blocks(why)
    num=any(re.search(r'\d',o) for o in opts)
    ok=len(heads)==3 and heads.count('Correct')==1 and heads.index('Correct')==a and not any(re.search(r'\b(answer|option|choice|statement)s?\s+[ABC]\b',t,re.I) for t in txt)
    if ok and not num and not any(re.search(r'\b(Both|Neither|All|None)\b|\bonly\b',o) for o in opts):
        perm=list(range(3)); R.shuffle(perm)
        opts=[opts[i] for i in perm]; txt=[txt[i] for i in perm]; heads=[heads[i] for i in perm]; a=perm.index(a)
    if ok: w='\n'.join(f"{'ABC'[i]}. {txt[i]}" for i in range(3))
    else:
        w=why
        parts=re.split(r'(?m)^([ABC])\. ',why)
        if len(parts)==7 and parts[1::2]==['A','B','C'] and not num and not any(re.search(r'\b(Both|Neither|All|None)\b|\bonly\b|^Comment|^Statement',o) for o in opts):
            body_=[x.strip() for x in parts[2::2]]
            if not any(re.search(r'\b(answer|option|choice|statement)s?\s+[ABC]\b|\b[ABC] (is|are) (correct|incorrect)',t,re.I) for t in body_):
                perm=list(range(3)); R.shuffle(perm)
                opts=[q['options'][i] for i in perm]; a='ABC'.index(q['answer']); a=perm.index(a)
                w='\n'.join(f"{'ABC'[i]}. {body_[perm[i]]}" for i in range(3))
    return dict(q=q['q'],options=opts,answer=a,why=w)
def build(k):
    vig=[];key=''
    for x in json.load(open('/home/user/jimin/bank/exam/mockA_pick.json'))[k-1]:
        v=BANK[x['id']]; qs=[q for q in v['questions'] if m.good(q)][:4]; assert len(qs)==4,x['id']
        b=body(v['body']); out=[]
        for q in qs:
            c=conv(q); c['q']=rename(c['q']); c['options']=[rename(o) for o in c['options']]; c['why']=rename(c['why']); out.append(c); key+='ABC'[c['answer']]
        vig.append(dict(topic=x['subject'],body=rename(b),questions=out))
    st=dict(id=f'mockA{k}',rev=1,resetHl=[],title=f'Mock A{k}',kind='mock',minutes=132,
      desc='Big subjects (Equity, FSA, Fixed Income, Portfolio Management): 11 vignettes, 44 questions, 132 minutes. No Ethics.',vignettes=vig)
    json.dump({'set':st,'hints':{},'key':key},open(f'/home/user/jimin/bank/exam/mockA{k}.json','w'),ensure_ascii=False,indent=1)
    return key
if __name__=='__main__':
    for k in map(int,sys.argv[1:]): print('A%d'%k,build(k))
