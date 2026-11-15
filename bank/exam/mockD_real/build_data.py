import json,re
sets=json.load(open('/home/user/jimin/bank/exam/mockD_real/parsed.json'))
def clean_txt(t):
    t=t.replace('Practice Topics','')
    t='\n'.join(l for l in t.split('\n') if l.strip()!='Correct answer:' and not l.startswith('Practice Topics') and not l.startswith('CFA-26-11-LII-A') and not re.match(r'^2026 CFA LII Mock \d Session \d',l))
    return re.sub(r'\s*Correct answer:\s*$','',t).strip()
FIX=[
 (0,4,"Exhibit 1\nMost Recent\n# Year | Average Over Most\nRecent Business Cycle | Long-Term Historical\nAverage\nBVPS","Exhibit 1\n# | Most Recent Year | Average Over Most Recent Business Cycle | Long-Term Historical Average\nBVPS"),
 (0,7,"Exhibit 1\n\nFactor Sensitivity\nFactor Return\nMarket risk (RMRF)\n  1.0\n  2.5%\nCapitalization (SMB)\n–1.8\n–1.7%\nBook-to-market (HML)\n  0.7\n 2.1%\nMomentum (WML)\n  0.2\n  2.8%","Exhibit 1\n# | Factor Sensitivity | Factor Return\nMarket risk (RMRF) | 1.0 | 2.5%\nCapitalization (SMB) | –1.8 | –1.7%\nBook-to-market (HML) | 0.7 | 2.1%\nMomentum (WML) | 0.2 | 2.8%"),
 (1,0,"#  | Actual Training Labels\nBuy (Class \"1\") | Sell (Class \"0\")\nPredicted\nResults | Buy (Class \"1\") | 70 | 40\nSell (Class \"0\") | 20 | 70","# | Actual Buy (Class \"1\") | Actual Sell (Class \"0\")\nPredicted Buy (Class \"1\") | 70 | 40\nPredicted Sell (Class \"0\") | 20 | 70"),
 (1,1,"CFA-IS-2022.11-FIIN-Lamy 1_5010P1786416.png","Exhibit 1 Binomial Interest Rate Tree (1-year rates)\n# | Year 0 | Year 1\nUpper node |  | 4.96%\nMiddle node | 1.25% |  \nLower node |  | 3.68%\nNote: This exhibit was a binomial diagram in the original paper. Its figure was not in the pasted text: the rates are taken from the answer explanation of Question 5 (Year 0: 1.25%; Year 1: 4.96% and 3.68%); their placement in the table is a reconstruction.\n"),
 (1,4,"Exhibit 1\n1-year | 2-year | 3-year\nSwap rates","Exhibit 1\n# | 1-year | 2-year | 3-year\nSwap rates"),
 (1,6,"# Standard Deviation | Sharpe Ratio | Sortino Ratio","#  | Standard Deviation | Sharpe Ratio | Sortino Ratio"),
 (1,8,"#  | Portfolio | Benchmark\nReturn | Allocation | Return | Allocation\nEquities | 10% | 70% | 8% | 60%\nFixed income | 4% | 30% | 5% | 40%\nActive return | 1.40% | ---\nActive risk | 10.00% | ---\nStandard deviation | 21% | 17%\nSharpe ratio | 0.29 | 0.28","# | Portfolio Return | Portfolio Allocation | Benchmark Return | Benchmark Allocation\nEquities | 10% | 70% | 8% | 60%\nFixed income | 4% | 30% | 5% | 40%\nPerformance statistics\n# | Portfolio | Benchmark\nActive return | 1.40% | ---\nActive risk | 10.00% | ---\nStandard deviation | 21% | 17%\nSharpe ratio | 0.29 | 0.28"),
 (1,9,"#  | Company C | Company D | Company E\nYear | Payout Ratio | Dividend (USD) | Payout Ratio | Dividend (USD) | Payout Ratio | Dividend (USD)","# Year | Company C Payout Ratio | Company C Dividend (USD) | Company D Payout Ratio | Company D Dividend (USD) | Company E Payout Ratio | Company E Dividend (USD)"),
]
for si,vi,a,b in FIX:
    v=sets[si][vi]; assert a in v['body'],(si,vi,a[:50]); v['body']=v['body'].replace(a,b)
TOP=[['Deriv','Equity','PM','Alt','Equity','FSA','Ethics','PM','Econ','FI','Ethics'],
     ['Quant','FI','Ethics','Corp','FI','FSA','Alt','Deriv','PM','Equity','FSA']]
def mk(i,title):
    vs=[dict(topic=TOP[i][k],body=v['body'],questions=[dict(q=clean_txt(q['q']),options=q['options'],answer=q['answer'],why=clean_txt(q['why'])) for q in v['questions']]) for k,v in enumerate(sets[i])]
    return dict(id=f'mockD{i+1}',rev=1,resetHl=[],title=title,kind='mockb',group='D',minutes=132,
      desc=f'Real CFA Institute Level II Mock 2, Session {i+1}: vignettes, questions and explanations as published (44 questions, 2 h 12 min).',vignettes=vs)
out=[mk(0,'Mock D · Paper 1'),mk(1,'Mock D · Paper 2')]
key={s['id']:''.join('ABC'[q['answer']] for v in s['vignettes'] for q in v['questions']) for s in out}
for s in out:
    assert sum(len(v['questions']) for v in s['vignettes'])==44
    for v in s['vignettes']:
        for q in v['questions']: assert len(set(q['options']))==3
json.dump(dict(sets=out,key=key),open('/home/user/jimin/bank/exam/mockD_real/mockD.json','w'),ensure_ascii=False,indent=1)
print(key)
