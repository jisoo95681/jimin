# 10 Nov: Mock 8 change requested by the user: the Quantitative vignette must be on time series and the Derivatives vignette on options.
# Draw both at random (OS random source) from the never-used real vignettes of those topics; 4 questions each.
import json,random
R=random.SystemRandom()
TS=['ts-busse','ts-rudall','ts-taylor','ts-sumner','ts-hall','ts-demolay','s1a-martinez']   # ts-namibia left out: its Q48 has inconsistent units
OPT=['opt-athena','opt-ist']
out={}
for k,pool in (('Quant',TS),('Deriv',OPT)):
    i=R.choice(pool); out[k]=i
bank={}
import glob
for f in glob.glob('/home/user/jimin/bank/*.json'):
    try:d=json.load(open(f))
    except: continue
    if isinstance(d,list):
        for v in d:
            if isinstance(v,dict) and 'questions' in v and 'id' in v: bank.setdefault(v['id'],v)
sel={}
for k,i in out.items():
    ns=[q['n'] for q in bank[i]['questions']]
    sel[k]=dict(id=i,ns=sorted(R.sample(ns,4)))
json.dump(sel,open('/home/user/jimin/bank/exam/mock8_swap_pick.json','w'),indent=1)
print(sel)
