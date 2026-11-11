# Mock 11 + Mock 12 (11 Nov, user request): ONE exam in two sessions (22 vignettes = 88 Q, 44 Q / 132 min each), taken back to back on 12 Nov.
# Topic weights are measured over the 88 questions (CFA ranges: Ethics, FSA, Equity, FI 10-15%; Quant, Econ, Corp, Deriv, Alt, PM 5-10%).
# Allocation (vignettes of 4 Q): Ethics 3, FSA 3, Equity 3, FI 3, Quant 2, Econ 2, Corp 2, Deriv 2, Alt 1, PM 1  (Alt and PM are 4.5%, 0.5 pt under 5%: whole 4-Q vignettes cannot do better).
# Mock 11: Ethics 2, FSA 1, Equity 2, FI 1, Quant 1, Econ 1, Corp 1, Deriv 1, PM 1.  Mock 12: Ethics 1, FSA 2, Equity 1, FI 2, Quant 1, Econ 1, Corp 1, Deriv 1, Alt 1.
# Real vignettes never used in any paper; Equity: Brady (fixed, private company valuation) + one UNSOLVED residual income vignette (bank/unsolved_priority.json) + one of readings 17-20.
import json,glob,random,re,importlib.util as iu
R=random.SystemRandom()
sp=iu.spec_from_file_location('m10','/home/user/jimin/bank/exam/mock10_pick.py'); m=iu.module_from_spec(sp); sp.loader.exec_module(m)
BANK=m.BANK; used=set(m.used)|{o['id'] for o in json.load(open('/home/user/jimin/bank/exam/mock10_pick.json'))}|{'eq5-parker'}
def subj(r):
    if 1<=r<=4: return 'Quant'
    if r==5: return 'Econ'
    if 6<=r<=12: return 'FSA'
    if 13<=r<=16: return 'Corp'
    if 17<=r<=22: return 'Equity'
    if 23<=r<=27: return 'FI'
    if r in (28,29): return 'Deriv'
    if 34<=r<=37: return 'PM'
    if r in (30,31,32,33,38,39): return 'Alt'
    return 'Ethics'
def ok(v):   # like m.ok but allows the Equity essays-turned-MCQ ('created') and the unsolved ones
    if v['id'].startswith(('etf-set','hf4-sa','opt-set','ts-mcq','fcf-mcq')): return False
    return len([q for q in v['questions'] if m.good(q)])>=4
pool={}
for i,v in BANK.items():
    if i in used or not v.get('readings') or not ok(v): continue
    pool.setdefault((subj(v['readings'][0]),v['readings'][0]),[]).append(i)
def pick(s,exclude_readings=(),readings=None):
    keys=[k for k in pool if k[0]==s and k[1] not in exclude_readings and (readings is None or k[1] in readings)]
    k=R.choice(keys); i=R.choice(pool[k]); pool[k].remove(i)
    if not pool[k]: del pool[k]
    return dict(id=i,subject=s,reading=k[1])
def draw():
    P=[]
    # Equity: Brady (fixed), one unsolved RI vignette, one more from readings 17-20
    unsolved=json.load(open('/home/user/jimin/bank/unsolved_priority.json'))['equity_residual_income_module5']['unsolved']
    ri=R.choice([u for u in unsolved if u in BANK and ok(BANK[u])])
    P.append(dict(id='eq6-brady',subject='Equity',reading=BANK['eq6-brady']['readings'][0]))
    P.append(dict(id=ri,subject='Equity',reading=BANK[ri]['readings'][0]))
    P.append(pick('Equity',readings=(17,18,19,20)))
    # FSA 3 different readings, FI 3 different readings
    for s,n in (('FSA',3),('FI',3)):
        rs=[]
        for _ in range(n):
            p=pick(s,exclude_readings=rs); rs.append(p['reading']); P.append(p)
    # Quant 2 different readings, Corp 2 different readings, Deriv 2 different readings, Econ 2 (both left)
    for s,n in (('Quant',2),('Corp',2),('Deriv',2),('Econ',2)):
        rs=[]
        for _ in range(n):
            try: p=pick(s,exclude_readings=rs)
            except IndexError: p=pick(s)
            rs.append(p['reading']); P.append(p)
    P.append(pick('Alt')); P.append(pick('PM'))
    return P
if __name__=='__main__':
    P=draw()
    # split into the two papers
    want={'M11':dict(FSA=1,Equity=2,FI=1,Quant=1,Econ=1,Corp=1,Deriv=1,PM=1),'M12':dict(FSA=2,Equity=1,FI=2,Quant=1,Econ=1,Corp=1,Deriv=1,Alt=1)}
    by={}
    for p in P: by.setdefault(p['subject'],[]).append(p)
    out={'M11':[],'M12':[]}
    for s,lst in by.items():
        R.shuffle(lst)
        if s=='Equity':   # Brady goes to Mock 11 with one more Equity; the remaining one to Mock 12
            b=[p for p in lst if p['id']=='eq6-brady'][0]; rest=[p for p in lst if p is not b]
            out['M11']+= [b,rest[0]]; out['M12']+=[rest[1]]; continue
        for k in ('M11','M12'):
            for _ in range(want[k].get(s,0)): out[k].append(lst.pop())
    for k in out: R.shuffle(out[k])
    assert len(out['M11'])==9 and len(out['M12'])==10,(len(out['M11']),len(out['M12']))
    json.dump(out,open('/home/user/jimin/bank/exam/mock1112_pick.json','w'),indent=1)
    for k in out:
        print(k,len(out[k])+(2 if k=='M11' else 1),'vignettes incl. Ethics')
        for p in out[k]: print('  ',p, BANK[p['id']]['body'][:60].replace('\n',' '))
