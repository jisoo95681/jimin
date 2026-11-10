# Writes bank/nov10_timeseries.json and bank/nov10_options.json from the nov10_* data files.
import sys,json
sys.path.insert(0,'/home/user/jimin/bank/exam')
import nov10_ts_real as tr, nov10_ts_mcq as tm, nov10_opt_real as op
def clean(v):
    v=dict(v); v['readings']=list(v['readings']); return v
ts=[clean(v) for v in tr.V+tm.V]; opt=[clean(v) for v in op.V]
for v in ts+opt:
    ns=[q['n'] for q in v['questions']]; assert len(ns)==len(set(ns)),v['id']
    for q in v['questions']:
        assert q['answer'] in 'ABC' and len(q['options'])==3 and q['why'],(v['id'],q['n'])
json.dump(ts,open('/home/user/jimin/bank/nov10_timeseries.json','w'),ensure_ascii=False,indent=1)
json.dump(opt,open('/home/user/jimin/bank/nov10_options.json','w'),ensure_ascii=False,indent=1)
print(len(ts),'time series vignettes',sum(len(v['questions']) for v in ts),'questions;',len(opt),'options vignettes',sum(len(v['questions']) for v in opt),'questions')
import collections
for name,vs in (('ts',ts),('opt',opt)):
    print(name,collections.Counter(q['answer'] for v in vs for q in v['questions']))
