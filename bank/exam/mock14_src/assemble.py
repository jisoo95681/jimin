import sys,json,random,collections,copy
sys.path.insert(0,'.')
from lib14 import *
import p1,p2,p3,p4,p5
from mock7_tweak import perm
vs=V
order_topics=['Ethical and Professional Standards','Financial Statement Analysis','Equity Valuation','Derivatives','Fixed Income','Corporate Issuers','Financial Statement Analysis','Alternative Investments','Equity Valuation','Quantitative Methods','Derivatives','Economics','Portfolio Management']
pool=list(vs); out=[]
for t in order_topics:
    for v in pool:
        if v['topic']==t: out.append(v); pool.remove(v); break
    else: raise SystemExit('missing '+t)
assert not pool
for a,b in zip(out,out[1:]): assert a['topic']!=b['topic']
# prefer larger vignettes for variety: fine
qs=[x for v in out for x in v['questions']]; assert len(qs)==44,len(qs)
base=copy.deepcopy(qs)
def keystr(qq): return ''.join('ABC'[x['answer']] for x in qq)
rng=random.SystemRandom()
free=[i for i,x in enumerate(qs) if not x['_fixed']]
best=None
for _ in range(20000):
    perms={i:rng.sample(range(3),3) for i in free}
    ans=[ (perms[i].index(base[i]['answer']) if i in perms else base[i]['answer']) for i in range(44)]
    c=collections.Counter(ans)
    if min(c.values())<13 or max(c.values())>16: continue
    s=''.join('ABC'[a] for a in ans)
    if any(s[i]==s[i+1]==s[i+2]==s[i+3] for i in range(len(s)-3)): continue
    best=perms;break
assert best
for i in free: perm(qs[i],best[i])
for x in qs: x.pop('_fixed')
key=keystr(qs); print(key,collections.Counter(key))
hints={};n=0
for v in out:
    for x in v['questions']:
        n+=1; hints[f'mock14:{n}']=x.pop('hint')
st=dict(id='mock14',rev=1,resetHl=[],title='Mock 14',kind='mock',minutes=132,
 desc='Newly written in CFA style, focused on your weak areas (44 questions, 13 vignettes, 2 h 12 min)',vignettes=out)
json.dump(dict(set=st,hints=hints,key=key),open('../mock14.json','w'),ensure_ascii=False,indent=1)
