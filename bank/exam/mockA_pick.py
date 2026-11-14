# Big-subject mocks A1-A8 (14 Nov): no Ethics, 11 vignettes each. Real never-used vignettes (random), unsolved RI first; re-skin slots (FSA 3, FI 7) filled later from missed concepts.
import json,io,contextlib,importlib.util as iu,random
R=random.SystemRandom()
sp=iu.spec_from_file_location('p','/home/user/jimin/bank/exam/mock1112_pick.py'); p=iu.module_from_spec(sp)
with contextlib.redirect_stdout(io.StringIO()): sp.loader.exec_module(p)
BANK=p.BANK; pool={k:list(v) for k,v in p.pool.items()}
taken={'eq6-brady'}
for f in ('mock1112_pick.json','mock1516_pick.json'):
    s=json.load(open(f)); taken|={x['id'] for k in s for x in s[k]}
taken|={i for l in pool.values() for i in l if i.startswith('m2-')}
uns=[u for u in json.load(open('/home/user/jimin/bank/unsolved_priority.json'))['equity_residual_income_module5']['unsolved'] if u in BANK and u not in taken]
rows=[(5,3,2,1),(5,2,2,2),(5,2,3,1),(4,3,2,2),(4,3,2,2),(4,3,2,2),(4,2,3,2),(4,2,3,2)]
S=['Equity','FSA','FI','PM']
byS={s:{} for s in S}
seen=set()
for k,l in pool.items():
    if k[0] in S:
        for i in l:
            if i not in taken and i not in seen: seen.add(i); byS[k[0]].setdefault(k[1],[]).append((i))
for s in S:
    for r in byS[s]: R.shuffle(byS[s][r])
out=[[] for _ in rows]
need={s:[r[j] for r in rows] for j,s in enumerate(S)}
for s in S:
    # deal real vignettes round-robin by reading so one mock avoids repeating a reading
    items=[(r,i) for r,l in byS[s].items() for i in l]
    if s=='Equity':
        items=[x for x in items if x[1] in uns]+[x for x in items if x[1] not in uns]
        R.shuffle(items[len(uns):])
    else: R.shuffle(items)
    slots=[(m,j) for m in range(8) for j in range(need[s][m])]
    # place unsolved in mock 0 first
    if s=='Equity':
        for u in [x for x in items if x[1] in uns]:
            out[0].append(dict(id=u[1],subject=s,reading=u[0])); items.remove(u); slots.remove((0,slots[0][1]))
    cnt={m:[x['reading'] for x in out[m] if x['subject']==s] for m in range(8)}
    for m in range(8):
        for _ in range(need[s][m]-len([x for x in out[m] if x['subject']==s])):
            if items:
                c=[x for x in items if x[0] not in cnt[m]] or items
                x=c[0]; items.remove(x); cnt[m].append(x[0]); out[m].append(dict(id=x[1],subject=s,reading=x[0]))
            else: out[m].append(dict(id=None,subject=s,reskin=True))
for m in range(8): R.shuffle(out[m])
json.dump(out,open('/home/user/jimin/bank/exam/mockA_pick.json','w'),indent=1)
for m,l in enumerate(out): print('A%d'%(m+1),len(l),[ (x['subject'],x.get('reading')) if x['id'] else (x['subject'],'RESKIN') for x in l])
