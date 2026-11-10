# Mock 10 (10 Nov): vignettes never used in any mock or paper given to the user (Mocks 1-8, Retry 1-2, Papers C/D/E, GA), drawn at random
# with the OS random source, with a SUB-TOPIC (reading) different from the one Mock 8 used for the same subject. No re-dos this time (Mock 8 not marked yet).
import json,glob,random,re
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
used|=set("eq2-dobson eq2-daniel leigh-holt singh-fcff".split())
used|=set("d28-johnson fsa4-takahashi m2-2 fcf-yee jupiter-saturn ts-brown tb1-brent mr-citadel re-hui-lin eg29-sagara".split())   # Mock 9
used|=set("eq2-jackson eq1-dormier fsa5-coleridge m2-11 s2a-oconnor esg31-3 em-simmons ts-taylor opt-athena d28-troubadour m1-10".split())   # Mock 8 (and the two vignettes it had before the swap)
def good(q): return q.get('answer') in ('A','B','C') and len(q.get('options',[]))==3 and bool(q.get('why'))
def ok(v):
    if v.get('created') or v['id'].startswith(('etf-set','hf4-sa','opt-set','ts-mcq','fcf-mcq')): return False
    return len([q for q in v['questions'] if good(q)])>=4
ALLOWED=dict(Deriv=[29],Econ=[5],FI=[24,25,27],Quant=[2],Equity=[17,18,21],PM=[35,36],FSA=[7,8,9,12],Corp=[13],Alt=[31,33])
pool={}
for i,v in BANK.items():
    if i in used or not ok(v): continue
    r=v['readings'][0]
    for t,rs in ALLOWED.items():
        if r in rs: pool.setdefault((t,r),[]).append(i)
if __name__=='__main__':
    for k in sorted(pool): print(k,len(pool[k]),pool[k])
def draw():
    sel=[]
    def pick(t,reading=None):
        keys=[k for k in pool if k[0]==t and (reading is None or k[1]==reading)]
        k=R.choice(keys); i=R.choice(pool[k]); return t,k[1],i
    picks=[pick(t) for t in ('Deriv','Econ','FI','Quant','PM','FSA','Corp','Alt')]
    eq_r=[21,R.choice([17,18])]
    picks+= [pick('Equity',r) for r in eq_r]
    out=[]
    for t,r,i in picks:
        qs=[q for q in BANK[i]['questions'] if good(q)]
        ns=sorted(R.sample([q['n'] for q in qs],4))
        out.append(dict(id=i,topic=t,reading=r,ns=ns))
    R.shuffle(out)
    json.dump(out,open('/home/user/jimin/bank/exam/mock10_pick.json','w'),indent=1)
    for o in out: print(o)
if __name__=='__main__': draw()
