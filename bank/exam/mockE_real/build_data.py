import json,re
def clean_txt(t):
    t=t.replace('Practice Topics','')
    t='\n'.join(l for l in t.split('\n') if l.strip()!='Correct answer:' and not l.startswith('CFA-26-11-LII-A') and not re.match(r'^2026 CFA LII Mock \d Session \d',l))
    t=re.sub(r'\s*Correct answer:\s*$','',t)
    return re.sub(r'(?m)^([ABC]\. (?:Correct|Incorrect)\.)[ \t]+$',r'\1',t).strip()
sets=json.load(open('/home/user/jimin/bank/exam/mockE_real/parsed.json'))
FIX=[
 (0,4,"Factor | Factor Sensitivity for Portfolio 1 | Factor Sensitivity for Benchmark | Factor Surprise (Most Recent Year)","# Factor | Factor Sensitivity for Portfolio 1 | Factor Sensitivity for Benchmark | Factor Surprise (Most Recent Year)"),
 (0,7,"#  | Actual Training Labels\nUp (Class \"1\") | Down (Class \"0\")\nPredicted Results | Up (Class \"1\") | 350 | 533\nDown (Class \"0\") | 246 | 941","# | Actual Up (Class \"1\") | Actual Down (Class \"0\")\nPredicted Up (Class \"1\") | 350 | 533\nPredicted Down (Class \"0\") | 246 | 941"),
 (0,8,"A binomial diagram with three column headings: Year zero, year 1, and year 2.","Exhibit 1 Binomial Interest Rate Tree (1-year rates)\n# | Year 0 | Year 1 | Year 2\nUpper node |  | 4.89% | 7.46%\nMiddle node | 3.00% |  | 6.11%\nLower node |  | 4.00% | 5.00%\nNote: This exhibit was a binomial diagram in the original paper. Its figure was not in the pasted text: the rates are taken from the answer explanation of Question 33 (Year 0: 3.00%; Year 1: 4.89% and 4.00%; Year 2: 7.46%, 6.11% and 5.00%); their placement in the table is a reconstruction."),
 (1,9,"Change 1: | The unemployment rate will decline.","Change 1: The unemployment rate will decline."),
 (1,9,"Change 2: | The female labor force participation rate will rise.","Change 2: The female labor force participation rate will rise."),
 (1,9,"Change 3: | A greater proportion of the workforce will receive on-the-job training.","Change 3: A greater proportion of the workforce will receive on-the-job training."),
]
for si,vi,a,b in FIX:
    v=sets[si][vi]; assert a in v['body'],(si,vi,a[:50]); v['body']=v['body'].replace(a,b)
TOP=[['Equity','Corp','FSA','FI','PM','PM','Ethics','Quant','FI','FSA','Alt'],
     ['Ethics','Equity','FI','Alt','Ethics','FSA','Deriv','PM','Corp','Econ','Equity']]
def mk(i,title):
    vs=[dict(topic=TOP[i][k],body=v['body'],questions=[dict(q=clean_txt(q['q']),options=q['options'],answer=q['answer'],why=clean_txt(q['why'])) for q in v['questions']]) for k,v in enumerate(sets[i])]
    return dict(id=f'mockE{i+1}',rev=1,resetHl=[],title=title,kind='mockb',group='E',minutes=132,
      desc=f'Real CFA Institute Level II Mock 3, Session {i+1}: vignettes, questions and explanations as published (44 questions, 2 h 12 min).',vignettes=vs)
out=[mk(0,'Mock E · Paper 1'),mk(1,'Mock E · Paper 2')]
key={s['id']:''.join('ABC'[q['answer']] for v in s['vignettes'] for q in v['questions']) for s in out}
for s in out:
    assert sum(len(v['questions']) for v in s['vignettes'])==44
    for v in s['vignettes']:
        for q in v['questions']: assert len(set(q['options']))==3
json.dump(dict(sets=out,key=key),open('/home/user/jimin/bank/exam/mockE_real/mockE.json','w'),ensure_ascii=False,indent=1)
print(key)
import collections
print(collections.Counter(v['topic'] for s in out for v in s['vignettes']))
