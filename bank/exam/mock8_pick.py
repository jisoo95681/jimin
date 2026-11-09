# Mock 8: random draw of 9 never-used bank vignettes (topic quota below), seeded from the OS random source.
import json,glob,random,re,sys
R=random.SystemRandom()
BANK={}
for f in glob.glob('/home/user/jimin/bank/*.json'):
    b=f.split('/')[-1]
    if b.startswith(('mock_','assistant_','standalone')): continue
    try:d=json.load(open(f))
    except: continue
    if isinstance(d,list):
        for v in d:
            if isinstance(v,dict) and 'questions' in v and 'id' in v: BANK.setdefault(v['id'],v)
used=set()
for f in glob.glob('/home/user/jimin/bank/mock_paper[1-6].json')+['/home/user/jimin/bank/mock_ga.json']:
    for v in json.load(open(f)): used.add(v['origin'].split(':')[-1])
used|=set("pinho northside flusk elite-rivera ic1-4 izzo sam mercer fx29-wagener esg31-1 ec-ski re-eastland s1b-beaumont ts-gfc corp4-lee eg29-klymchuk fsa5-miland schwalke2 m1-8 d28-doyle cds-2 regal".split())
used|=set("eth6-cheng re-wang castovan golden-island d28-pak ca-lebedeva tb1-smith mf-cheung corp1-larsen fsa6-dorado s1a-stratton".split())
used|=set("eq2-dobson eq2-daniel leigh-holt singh-fcff".split())   # = charmed / tasty (used) and Retry 2 sources
def topic(r):
    if r in (40,41,42):return 'Ethics'
    if r<=4:return 'Quant'
    if r in(5,6,34):return 'Econ'
    if r<=12:return 'FSA'
    if r<=16:return 'Corp'
    if r<=22:return 'Equity'
    if r<=27:return 'FI'
    if r in(28,29):return 'Deriv'
    if r in(30,31,32,33):return 'Alt'
    return 'PM'
def good(q): return q.get('answer') in ('A','B','C') and len(q.get('options',[]))==3 and bool(q.get('why'))
def ok(v):
    if v.get('created') or v['id'].startswith(('etf-set','hf4-sa')): return False
    return len([q for q in v['questions'] if good(q)])>=4
pool={}
for i,v in BANK.items():
    if i in used or not ok(v): continue
    pool.setdefault(topic(v['readings'][0]),[]).append(i)
QUOTA=dict(Ethics=1,Alt=1,Equity=2,Quant=1,Econ=1,Deriv=1,FSA=1,Corp=1)
pick={}
for t,n in QUOTA.items():
    pick[t]=R.sample(pool[t],n)
order=[(t,i) for t,l in pick.items() for i in l]
R.shuffle(order)
sel=[]
for t,i in order:
    qs=[q for q in BANK[i]['questions'] if good(q)]
    ns=sorted(R.sample([q['n'] for q in qs],4))
    sel.append(dict(id=i,topic=t,ns=ns))
json.dump(sel,open('/home/user/jimin/bank/exam/mock8_pick.json','w'),indent=1)
for s in sel: print(s)
