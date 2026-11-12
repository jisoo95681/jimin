import sys,json,random,collections,re,copy,importlib,os
sys.path.insert(0,'.')
from lib15 import V
for n in range(1,19): importlib.import_module(f'e{n}')
from mock7_tweak import perm
R=random.SystemRandom()
# ---- Ethics units from the key notes (3 unused 4-question vignette units; FIX replaces the "Answer A/B/C" letters in explanations) ----
src=open('/home/user/jimin/bank/exam/ethics_sets.py').read()
ns={}
exec('import re,html as H,json\n'+src[src.index('def hdr'):src.index('\n# The key notes')],ns)
fix={}
exec(src[src.index('FIX={'):src.index('\nfor q in ETH')],{},fix)
FIX=fix['FIX']
ETH={q['id']:q for q in json.load(open('/home/user/jimin/bank/exam/ethics_keyq.json'))}
for q in ETH.values():
    for a,b in FIX.get(q['id'],[]): q['why']=q['why'].replace(a,b)
    assert not re.search(r'\b(Answer|answer) [ABC]\b',q['why']),q['id']
used=set()
u=json.load(open('/home/user/jimin/bank/exam/ethics_used.json'))
for k,v in u.items():
    if isinstance(v,list): used|=set(v)
figs=collections.OrderedDict()
for q in ETH.values():
    if q['fig']: figs.setdefault(q['fig'],[]).append(q['id'])
usedb=json.load(open('/tmp/used_bodies.json'))
def seen(ids):
    b=ns['fig_body'](ETH[ids[0]]['fig'])[:120]
    return any(b[:80]==u[:80] for u in usedb)
free=[v for v in figs.values() if len(v)==4 and not any(i in used for i in v) and not seen(v)]
print('free ethics units',len(free))
units=R.sample(free,3)
def eunit(ids):
    qs=[]
    for i in ids:
        q=ETH[i]; qs.append(dict(q=q['q'],options=list(q['o']),answer=q['a'],why=q['why'],hint=None,_fixed=False))
    return dict(paper=None,topic='Ethical and Professional Standards',body=ns['fig_body'](ETH[ids[0]]['fig']),questions=qs,ids=ids)
EV=[eunit(x) for x in units]
EV[0]['paper']='M15'; EV[1]['paper']='M16'; EV[2]['paper']='M16'
allv=V+EV
def order(vs):
    for _ in range(20000):
        o=vs[:]; R.shuffle(o)
        if all(a['topic']!=b['topic'] for a,b in zip(o,o[1:])): return o
    raise SystemExit('no order')
out={}
for paper,mid,title in (('M15','mock15','Mock 15'),('M16','mock16','Mock 16')):
    vs=order([v for v in allv if v['paper']==paper])
    qs=[q for v in vs for q in v['questions']]; assert len(qs)==44,(paper,len(qs))
    base=copy.deepcopy(qs); free_=[i for i,x in enumerate(qs) if not x['_fixed']]
    best=None
    for _ in range(50000):
        perms={i:R.sample(range(3),3) for i in free_}
        ans=[(perms[i].index(base[i]['answer']) if i in perms else base[i]['answer']) for i in range(44)]
        c=collections.Counter(ans)
        if min(c.get(k,0) for k in range(3))<13 or max(c.values())>16: continue
        s=''.join('ABC'[a] for a in ans)
        if any(s[i]==s[i+1]==s[i+2]==s[i+3] for i in range(len(s)-3)): continue
        best=perms;break
    assert best
    # apply perms on the real question objects (perm needs lettered why lines; Ethics why is plain text, so reorder options manually)
    for i in free_:
        q=qs[i]
        if q['why'].startswith('A.'): perm(q,best[i])
        else:
            old=q['options']; order_=best[i]; q['options']=[old[k] for k in order_]; q['answer']=order_.index(q['answer'])
    key=''.join('ABC'[x['answer']] for x in qs)
    hints={};n=0;vout=[]
    for v in vs:
        qq=[]
        for x in v['questions']:
            n+=1
            if x['hint']: hints[f'{mid}:{n}']=x['hint']
            qq.append(dict(q=x['q'],options=x['options'],answer=x['answer'],why=x['why']))
        vout.append(dict(topic=v['topic'],body=v['body'],questions=qq))
    desc={'mock15':'Real vignettes never used before plus the Econ growth vignette you missed (names and numbers changed), 44 questions, 11 vignettes, 2 h 12 min',
          'mock16':'Real vignettes never used before plus the Econ vignette you missed (names and numbers changed), 44 questions, 11 vignettes, 2 h 12 min'}[mid]
    st=dict(id=mid,rev=1,resetHl=[],title=title,kind='mock',minutes=132,desc=desc,vignettes=vout)
    json.dump(dict(set=st,hints=hints,key=key,topics=[v['topic'] for v in vs]),open(f'/home/user/jimin/bank/exam/{mid}.json','w'),ensure_ascii=False,indent=1)
    print(mid,key,collections.Counter(key)); print([v['topic'][:6] for v in vs])
    out[mid]=[i for v in vs if v.get('ids') for i in v['ids']]
u['used_in_mock15']=out['mock15']; u['used_in_mock16']=out['mock16']
json.dump(u,open('/home/user/jimin/bank/exam/ethics_used.json','w'),indent=1)
