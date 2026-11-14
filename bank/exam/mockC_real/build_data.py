import json,re
sets=json.load(open('/home/user/jimin/bank/exam/mockC_real/parsed.json'))
FIX=[
(0,0,"#  | Exchange Rate Data (USD/AUD)\nMaturity | Bid | Offer","Exchange Rate Data (USD/AUD)\n# Maturity | Bid | Offer"),
(0,0," | Other Data\nInterest Rate | US | Australia","Other Data\n# Interest Rate | US | Australia"),
(0,1,"#  | Revenue\n(in $ Millions) | EV/Sales","#  | Revenue (in $ Millions) | EV/Sales"),
(0,3,"Maturity (years) | 1 | 2 | 3","# Maturity (years) | 1 | 2 | 3"),
(0,7,"# Variable | Acquired\nCompany 1 | Acquired\nCompany 2 | Acquired\nCompany 3","# Variable | Acquired Company 1 | Acquired Company 2 | Acquired Company 3"),
(1,3,"# Factor | Factor Price (%) | ETF\nFactor Sensitivity","# Factor | Factor Price (%) | ETF Factor Sensitivity"),
(0,6,"A binomial diagram with three column headings: Year zero, year 1, and year 2.","Exhibit 1 Binomial Interest Rate Tree (1-year rates)\n# | Year 0 | Year 1 | Year 2\nUpper node |  | 3.8784% | 5.3534%\nMiddle node | 2.4500% |  | 4.3830%\nLower node |  | 3.1754% | 3.5885%\nNote: This exhibit was a binomial diagram in the original paper. Its figure was not in the pasted text: the rates are taken from the answer explanation of Question 25 (Year 0: 2.45%; Year 1: 3.8784% and 3.1754%; Year 2: 5.3534%, 4.3830% and 3.5885%); their placement in the table is a reconstruction."),
]
for si,vi,a,b in FIX:
    v=sets[si][vi]; assert a in v['body'],(si,vi,a[:40]); v['body']=v['body'].replace(a,b)
TOP=[['Econ','Equity','FSA','FI','PM','FSA','FI','Corp','Quant','Alt','Ethics'],
     ['Equity','Econ','FI','PM','FSA','PM','Corp','Equity','Deriv','Ethics','Ethics']]
def mk(i,title):
    vs=[dict(topic=TOP[i][k],body=v['body'],questions=[dict(q=q['q'],options=q['options'],answer=q['answer'],why=q['why']) for q in v['questions']]) for k,v in enumerate(sets[i])]
    return dict(id=f'mockC{i+1}',rev=1,resetHl=[],title=title,kind='mockb',group='C',minutes=132,
      desc=f'Real CFA Institute Level II Mock 1, Session {i+1}: vignettes, questions and explanations as published (44 questions, 2 h 12 min).',vignettes=vs)
out=[mk(0,'Mock C · Paper 1'),mk(1,'Mock C · Paper 2')]
key={s['id']:''.join('ABC'[q['answer']] for v in s['vignettes'] for q in v['questions']) for s in out}
for s in out:
    assert sum(len(v['questions']) for v in s['vignettes'])==44
    for v in s['vignettes']:
        for q in v['questions']: assert len(set(q['options']))==3
json.dump(dict(sets=out,key=key),open('/home/user/jimin/bank/exam/mockC_real/mockC.json','w'),ensure_ascii=False,indent=1)
print(key)
