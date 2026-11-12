import json,sys
d=json.load(open('/home/user/jimin/bank/exam/mock13.json')); sm=d['srcmap']; n=0
rng=range(int(sys.argv[1]),int(sys.argv[2]))
for vi,v in enumerate(d['set']['vignettes']):
    if vi not in rng:
        n+=len(v['questions']); continue
    print('########## V%d %s'%(vi+1,v['topic'])); print(v['body'])
    for q in v['questions']:
        n+=1; print(f"--- Q{n} [{sm[str(n)]}] {q['q'][:260]}")
        for i,o in enumerate(q['options']): print('   ','ABC'[i],'*' if i==q['answer'] else ' ',o[:100])
