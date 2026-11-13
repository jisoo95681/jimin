import sys,json,random,collections,re,copy,importlib
sys.path.insert(0,'.'); sys.path.insert(0,'/home/user/jimin/bank/exam')
from lib17 import V
for n in range(1,11): importlib.import_module(f'f{n}')
from mock7_tweak import perm
R=random.SystemRandom()
def order(vs):
    for _ in range(50000):
        o=vs[:]; R.shuffle(o)
        if all(a['topic']!=b['topic'] for a,b in zip(o,o[1:])): return o
    raise SystemExit('no order')
vs=order(V); qs=[q for v in vs for q in v['questions']]; assert len(qs)==45 and len(vs)==13,(len(qs),len(vs))
base=copy.deepcopy(qs); free=[i for i,x in enumerate(qs) if not x['_fixed']]
best=None
for _ in range(100000):
    perms={i:R.sample(range(3),3) for i in free}
    ans=[(perms[i].index(base[i]['answer']) if i in perms else base[i]['answer']) for i in range(45)]
    c=collections.Counter(ans)
    if min(c.get(k,0) for k in range(3))<13 or max(c.values())>17: continue
    s=''.join('ABC'[a] for a in ans)
    if any(s[i]==s[i+1]==s[i+2]==s[i+3] for i in range(len(s)-3)): continue
    best=perms;break
assert best
for i in free: perm(qs[i],best[i])
key=''.join('ABC'[x['answer']] for x in qs)
hints={};n=0;vout=[]
for v in vs:
    qq=[]
    for x in v['questions']:
        n+=1; hints[f'mock17:{n}']=x['hint']
        mm=re.findall(r'(?m)^([ABC])\. Correct\.',x['why']); assert mm==['ABC'[x['answer']]],(n,mm,x['answer'])
        qq.append(dict(q=x['q'],options=x['options'],answer=x['answer'],why=x['why']))
    vout.append(dict(topic=v['topic'],body=v['body'],questions=qq))
st=dict(id='mock17',rev=1,resetHl=[],title='Mock 17',kind='mock',minutes=135,
 desc='The questions you got wrong in Mocks 6-10, rebuilt with new names and numbers (45 questions, 13 vignettes, 2 h 15 min)',vignettes=vout)
json.dump(dict(set=st,hints=hints,key=key,topics=[v['topic'] for v in vs]),open('/home/user/jimin/bank/exam/mock17.json','w'),ensure_ascii=False,indent=1)
print(key,collections.Counter(key)); print([v['topic'][:6] for v in vs])
