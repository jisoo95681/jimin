import json,sys
sys.path.insert(0,'/home/user/jimin/bank/exam/mockB_real')
import s1a,s1b,s1c,s2a,s2b,s2c
S1=s1a.S1A+s1b.S1B+s1c.S1C; S2=s2a.S2A+s2b.S2B+s2c.S2C
def mk(id,n,title,vs):
    return dict(id=id,rev=1,resetHl=[],title=title,kind='mockb',minutes=132,
      desc=f'Real CFA Institute Level II Mock B, Session {n}: vignettes and questions as published (44 questions, 2 h 12 min).',vignettes=vs)
sets=[mk('mockB1',1,'Mock B · Paper 1',S1),mk('mockB2',2,'Mock B · Paper 2',S2)]
key={s['id']:''.join('ABC'[q['answer']] for v in s['vignettes'] for q in v['questions']) for s in sets}
for s in sets:
    n=sum(len(v['questions']) for v in s['vignettes']); assert n==44,n
    for v in s['vignettes']:
        for q in v['questions']: assert len(set(q['options']))==3
json.dump(dict(sets=sets,key=key),open('/home/user/jimin/bank/exam/mockB_real/mockB.json','w'),ensure_ascii=False,indent=1)
print(key)
