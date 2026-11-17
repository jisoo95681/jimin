import json,re
def clean_txt(t):
    t=t.replace('Practice Topics','')
    t='\n'.join(l for l in t.split('\n') if l.strip()!='Correct answer:' and not l.startswith('CFA-26-11-LII-A') and not re.match(r'^2026 CFA LII Mock \d Session \d',l))
    t=re.sub(r'\s*Correct answer:\s*$','',t)
    return re.sub(r'(?m)^([ABC]\. (?:Correct|Incorrect)\.)[ \t]+$',r'\1',t).strip()
sets=json.load(open('/home/user/jimin/bank/exam/mockF_real/parsed.json'))
FIX=[
 (0,3,"Criterion 1: | ","Criterion 1: "),(0,3,"Criterion 2 | ","Criterion 2: "),(0,3,"Criterion 3: | ","Criterion 3: "),
 (0,3,"Statement 1: | ","Statement 1: "),(0,3,"Statement 2: | ","Statement 2: "),(0,3,"Statement 3: | ","Statement 3: "),
 (0,7,"Actual Training Labels\nClass \"1\" | Class \"0\"\nPredicted Results | Class \"1\" | 546 | 182\nClass \"0\" | 140 | 384","# | Actual Class \"1\" | Actual Class \"0\"\nPredicted Class \"1\" | 546 | 182\nPredicted Class \"0\" | 140 | 384"),
 (0,10,"#  | Most Recent Year | \nTwo Years\nAgo\nThree Years\nAgo","# | Most Recent Year | Two Years Ago | Three Years Ago"),
 (1,3,"Variable 1: | ","Variable 1: "),(1,3,"Variable 2: | ","Variable 2: "),(1,3,"Variable 3: | ","Variable 3: "),
 (1,3,"\n | \n","\n"),
 (1,8,"\nModel | Factors | AIC | BIC | R2","\n# Model | Factors | AIC | BIC | R2"),
 (1,10,"She uses the Monte Carlo method to\nsimulate","She uses the Monte Carlo method to simulate"),
 (1,10,"A binomial diagram with three column headings: Year zero, year 1, and year 2.","Exhibit 1 Binomial Interest Rate Tree (1-year rates)\n# | Year 0 | Year 1 | Year 2\nUpper node |  | 4.2530% | 10.4577%\nMiddle node | 6.10% |  | 7.7472%\nLower node |  | 3.1507% | 5.7393%\nNote: This exhibit was a binomial diagram in the original paper. Its figure was not in the pasted text: the rates are taken from the answer explanation of Question 41 (Year 0: 6.10%; Year 1: 4.2530% and 3.1507%; Year 2: 10.4577%, 7.7472% and 5.7393%); their placement in the table is a reconstruction."),
]
for si,vi,a,b in FIX:
    v=sets[si][vi]; assert a in v['body'],(si,vi,a[:50]); v['body']=v['body'].replace(a,b)
TOP=[['Alt','FI','Equity','Ethics','Equity','PM','Ethics','Quant','Econ','Corp','FSA'],
     ['PM','Econ','FI','Equity','Ethics','FSA','Deriv','FSA','Quant','PM','FI']]
def mk(i,title):
    vs=[dict(topic=TOP[i][k],body=v['body'],questions=[dict(q=clean_txt(q['q']),options=q['options'],answer=q['answer'],why=clean_txt(q['why'])) for q in v['questions']]) for k,v in enumerate(sets[i])]
    return dict(id=f'mockF{i+1}',rev=1,resetHl=[],title=title,kind='mockb',group='F',minutes=132,
      desc=f'Real CFA Institute Level II Mock 4, Session {i+1}: vignettes, questions and explanations as published (44 questions, 2 h 12 min).',vignettes=vs)
out=[mk(0,'Mock F · Paper 1'),mk(1,'Mock F · Paper 2')]
key={s['id']:''.join('ABC'[q['answer']] for v in s['vignettes'] for q in v['questions']) for s in out}
for s in out:
    assert sum(len(v['questions']) for v in s['vignettes'])==44
    for v in s['vignettes']:
        for q in v['questions']: assert len(set(q['options']))==3
json.dump(dict(sets=out,key=key),open('/home/user/jimin/bank/exam/mockF_real/mockF.json','w'),ensure_ascii=False,indent=1)
print(key)
import collections
print(collections.Counter(v['topic'] for s in out for v in s['vignettes']))
for s in out:
    for v in s['vignettes']:
        assert 'Correct answer' not in v['body'] and 'Practice Topics' not in json.dumps(v)
