# Writes bank/nov10_fcf.json from nov10_fcf.py (Module 3 Free Cash Flow Valuation quiz, 10 Nov).
import sys,json,collections
sys.path.insert(0,'/home/user/jimin/bank/exam')
import nov10_fcf as f
vs=[dict(v,readings=list(v['readings'])) for v in f.V]
for v in vs:
    ns=[q['n'] for q in v['questions']]; assert len(ns)==len(set(ns)),v['id']
    for q in v['questions']:
        assert q['answer'] in 'ABC' and len(q['options'])==3 and q['why'],(v['id'],q['n'])
json.dump(vs,open('/home/user/jimin/bank/nov10_fcf.json','w'),ensure_ascii=False,indent=1)
print(len(vs),'vignettes',sum(len(v['questions']) for v in vs),'questions',collections.Counter(q['answer'] for v in vs for q in v['questions']))
