# Mock 15 + Mock 16 (13 Nov): one pair like Mock 11 + 12 (22 vignettes = 88 Q, 11 per mock). Allocation: Ethics 3, FSA 3, Equity 3, FI 3, Quant 2, Econ 2, Corp 2, Deriv 2, Alt 1, PM 1.
# Never-used real vignettes (OS random draw, different readings within a subject); Equity takes the unsolved residual income vignettes first; Econ has no unused vignette left, so its 2 slots are
# re-skins of the Econ vignettes with the user's mistakes (eg29-amaral = growth, Mock 6 Q19; golden-island = Sengupta, Mock 7 Q20).
import json,importlib.util as iu,random
R=random.SystemRandom()
sp=iu.spec_from_file_location('p','/home/user/jimin/bank/exam/mock1112_pick.py'); p=iu.module_from_spec(sp); sp.loader.exec_module(p)
BANK=p.BANK; pool=p.pool
sel=json.load(open('/home/user/jimin/bank/exam/mock1112_pick.json'))
taken={x['id'] for k in sel for x in sel[k]}|{'eq6-brady'}
for k in list(pool):
    pool[k]=[i for i in pool[k] if i not in taken]
    if not pool[k]: del pool[k]
unsolved=[u for u in json.load(open('/home/user/jimin/bank/unsolved_priority.json'))['equity_residual_income_module5']['unsolved'] if u in BANK and u not in taken and p.ok(BANK[u])]
def pick(s,ex=()):
    keys=[k for k in pool if k[0]==s and k[1] not in ex] or [k for k in pool if k[0]==s]
    k=R.choice(keys); i=R.choice(pool[k]); pool[k].remove(i)
    if not pool[k]: del pool[k]
    return dict(id=i,subject=s,reading=k[1])
P=[]
# Equity: unsolved RI first (one in each mock), plus one more from another reading
ri=R.sample(unsolved,2)
for u in ri:
    P.append(dict(id=u,subject='Equity',reading=BANK[u]['readings'][0]))
    for k in list(pool):
        if u in pool[k]: pool[k].remove(u)
P.append(pick('Equity',ex=[x['reading'] for x in P]))
for s,n in (('FSA',3),('FI',3),('Quant',2),('Corp',2),('Deriv',2)):
    rs=[]
    for _ in range(n): x=pick(s,ex=rs); rs.append(x['reading']); P.append(x)
P.append(pick('Alt')); P.append(pick('PM'))
P.append(dict(id='eg29-amaral',subject='Econ',reading=6,reskin=True)); P.append(dict(id='golden-island',subject='Econ',reading=6,reskin=True))
# split: each mock 9 non-Ethics vignettes + Ethics (M15: 1... M15 gets 1 Ethics, M16 gets 2)
want={'M15':dict(FSA=2,Equity=2,FI=1,Quant=1,Econ=1,Corp=1,Deriv=1,PM=1),'M16':dict(FSA=1,Equity=1,FI=2,Quant=1,Econ=1,Corp=1,Deriv=1,Alt=1)}
by={}
for x in P: by.setdefault(x['subject'],[]).append(x)
out={'M15':[],'M16':[]}
for s,l in by.items():
    R.shuffle(l)
    for k in out:
        for _ in range(want[k].get(s,0)): out[k].append(l.pop())
for k in out: R.shuffle(out[k])
assert len(out['M15'])==10 and len(out['M16'])==9,(len(out['M15']),len(out['M16']))
json.dump(out,open('/home/user/jimin/bank/exam/mock1516_pick.json','w'),indent=1)
for k in out:
    print(k,len(out[k]))
    for x in out[k]: print('  ',x,BANK[x['id']]['body'][:70].replace('\n',' '),'|',len([q for q in BANK[x['id']]['questions'] if p.m.good(q)]),'Q')
