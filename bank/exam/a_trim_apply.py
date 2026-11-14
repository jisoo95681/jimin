import json,sys,re
sys.argv=[sys.argv[0]]+sys.argv[1:]; sys.path.insert(0,'/home/user/jimin/bank/exam')
import mockA_build as b
from a_trim import T
from a_names_map import rename
done=set()
for (k,i),s in sorted(T.items()):
    f=f'/home/user/jimin/bank/exam/mockA{k}.json'; d=json.load(open(f)); st=d['set']; v=st['vignettes'][i]
    if (k,i) in done: continue
    if s['body']!='KEEP': v['body']=s['body'].strip()
    if 'topic' in s: v['topic']=s['topic']
    if 'repl' in s:
        src=[x for x in json.load(open('/home/user/jimin/bank/exam/mockA_pick.json'))[k-1]]
        # vignette order in json == pick order; find its bank id
        bid=src[i]['id']; bq={q['n']:q for q in b.BANK[bid]['questions']}
        for qi,n in s['repl'].items():
            c=b.conv(bq[n]); c['q']=rename(c['q']); c['options']=[rename(o) for o in c['options']]; c['why']=rename(c['why'])
            v['questions'][qi]=c
    for a,r in s.get('qrepl',{}).items():
        for q in v['questions']: q['q']=q['q'].replace(a,r); q['why']=q['why'].replace(a,r)
    st['rev']=st.get('rev',1) if not s else st['rev']
    d['key']=''.join('ABC'[q['answer']] for vv in st['vignettes'] for q in vv['questions'])
    json.dump(d,open(f,'w'),ensure_ascii=False,indent=1)
for k in range(1,5):
    d=json.load(open(f'/home/user/jimin/bank/exam/mockA{k}.json')); w=[len(v['body'].split()) for v in d['set']['vignettes']]; print(k,sum(w)//11,w,d['key'])
