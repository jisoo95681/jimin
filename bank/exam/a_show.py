import json,sys
k=int(sys.argv[1]); idx=[int(x) for x in sys.argv[2:]]
d=json.load(open(f'mockA{k}.json'))['set']
for i in idx:
    v=d['vignettes'][i]; print(f'##### A{k} V{i} ({v["topic"]}) {len(v["body"].split())}w'); print(v['body'])
    for j,q in enumerate(v['questions']): print(f'  Q{j}: {q["q"]} | '+' / '.join(f'{"ABC"[n]}{"*" if n==q["answer"] else ""}) {o}' for n,o in enumerate(q['options'])))
