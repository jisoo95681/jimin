# Flash cards from the wrong questions of Mock 6-10 and Practice sets 1-4 (12 Nov): writes /home/user/jimin/flash.js
import json,re,sys,runpy,collections
sys.path.insert(0,'/tmp/gen/retry'); sys.path.insert(0,'/home/user/jimin/bank/notes_src')
from extract import SETS
from content import N as NOTES
S2={'Ethics':'Ethics','FSA':'FSA','Equity':'Equity','Fixed Income':'Fixed Income','Derivatives':'Derivatives','Quant':'Quant','Portfolio Management':'Portfolio Management','Economics':'Economics','Corporate Issuers':'Corporate Issuers','Alternative Investments':'Alternative Investments'}
TOPIC={'Ethical and Professional Standards':'Ethics','Financial Statement Analysis':'FSA','Equity Valuation':'Equity','Fixed Income':'Fixed Income','Derivatives':'Derivatives','Quantitative Methods':'Quant','Portfolio Management':'Portfolio Management','Economics':'Economics','Corporate Issuers':'Corporate Issuers','Alternative Investments':'Alternative Investments'}
def getq(src,n):
    k=0
    for v in SETS[src]['vignettes']:
        for q in v['questions']:
            k+=1
            if k==n: return v['topic'],q
S=open('/home/user/jimin/exam.js').read(); PQ={s['id']:s for s in json.loads(S[S.index('EXAM_SETS = ')+12:].rstrip().rstrip(';'))}
def getpq(sid,n):
    k=0
    for v in PQ[sid]['vignettes']:
        for q in v['questions']:
            k+=1
            if k==n: return v['topic'],q
# tables from the notes (exact titles of KEYQ table items)
TB={'Mock 6 Q23':['Accruals','Warning signs of profitability'],'Mock 6 Q36':['Implied volatility, volatility surface, smile and skew'],'Mock 6 Q31':['Mutual funds versus ETFs','ETF types and their risks'],'Mock 6 Q19':['Growth theories: capital returns, technology, population, per capita income'],'Mock 6 Q2':['REIT vs REOC'],
'Mock 7 Q23':['Currency swap: keep this order'],'Mock 7 Q30':['Why migration reduces the expected return'],'Mock 7 Q31':['Current price of the bond vs VND − CVA','Hazard rate: survival and default probabilities'],'Mock 7 Q33':['Regression problems: effect on standard errors, t-test and F-test'],'Mock 7 Q41':['Expected return vs active return in a factor model'],'Mock 7 Q43':['Macroeconomic vs fundamental factor models'],'Mock 7 Q44':['Uses of multifactor models and their trigger words'],
'Mock 8 Q1':['Forward or futures mispricing: Q = quoted (market) price, F = fair (model) price'],'Mock 8 Q8':['Economy improves: high yield vs investment grade'],'Mock 8 Q10':['Current price of the bond vs VND − CVA','Hazard rate: survival and default probabilities'],'Mock 8 Q11':['Current price of the bond vs VND − CVA'],'Mock 8 Q30':['PBO and its assumptions'],'Mock 8 Q32':['PBO and its assumptions','Roll-forward of plan assets and PBO'],
'Mock 9 Q6':['Theories of the term structure'],'Mock 9 Q8':['Yield curve moves and the situation they usually go with'],'Mock 9 Q25':['Bank capital tiers'],'Mock 9 Q26':['P&C insurance cycle'],'Mock 9 Q28':['P&C insurance cycle'],'Mock 9 Q36':['Regression problems: effect on standard errors, t-test and F-test'],'Mock 9 Q41':['VaR methods: key idea and when to use'],'Mock 9 Q43':['VaR methods: key idea and when to use'],
'Mock 10 Q13':['Covariance stationarity: three constants'],'Mock 10 Q14':['Covariance stationarity: three constants'],'Mock 10 Q23':['Option Greek signs'],
'Set 1 Q16':['FCFF and FCFE: how to build each one'],'Set 1 Q17':['FCFF and FCFE: how to build each one'],'Set 1 Q30':['Forward or futures mispricing: Q = quoted (market) price, F = fair (model) price'],'Set 1 Q33':['Accruals'],'Set 1 Q42':['Methods of estimating the DLOM'],
'Set 2 Q10':['Reading investment style from factor sensitivity signs'],'Set 2 Q12':['Effective duration and convexity vs interest rates'],'Set 2 Q29':['Forward or futures mispricing: Q = quoted (market) price, F = fair (model) price'],
'Set 3 Q39':['Model selection tests'],'Set 3 Q43':['Real estate discount rate components'],
'Set 4 Q6':['Bank: stable funding is assessed by'],'Set 4 Q19':['Option Greek signs'],'Set 4 Q21':['Windfall and shortfall','Where the windfall or shortfall goes'],'Set 4 Q40':['Functional currency, method and the plug'],'Set 4 Q41':['Which translation method or inventory method gives the higher gross margin?']}
cards=[]
SUBJ_ORDER=['Ethics','FSA','Equity','Fixed Income','Derivatives','Quant','Portfolio Management','Economics','Corporate Issuers','Alternative Investments']
for s,tag,pick,key,mis,fix,fx in NOTES:
    src='mock'+tag.split()[1]; n=int(tag.split('Q')[1]); topic,q=getq(src,n)
    cards.append(dict(s=s,tag=tag,q=q['q'],ans=q['options'][q['answer']],pick=pick,key=key,mis=mis,fix=fix,fx=fx,tb=TB.get(tag,[])))
def strip(t): return re.sub(r'^(Your pick:\s*|Correct( \(your pick\))?:\s*)','',t)
def tags(t): return re.sub(r'<[^>]+>','',t)
# practice sets (cards written earlier for the wrong-answer PDFs)
g12=runpy.run_path('/tmp/gen/pq12/build.py'); g3=runpy.run_path('/tmp/gen/pq3/build.py'); g4=runpy.run_path('/tmp/gen/pq4/build.py')
def prac(sid,n,Nd,ans,title):
    topic,q=getpq(sid,n); me='ABC'.index(ans[n-1]); key='ABC'[q['answer']]
    d=Nd; on=d['on']; sub=TOPIC[topic]
    mis=strip(on[me]) if me!=q['answer'] else 'Right, but unsure.'
    mis=mis[0].upper()+mis[1:]
    cards.append(dict(s=sub,tag='Set %s Q%d'%(sid[2:],n),q=q['q'],ans=q['options'][q['answer']],pick='ABC'[me],key=key,mis=mis,fix=d['rule'],fx='\n'.join(tags(f) for f in d['formula']),tb=TB.get('Set %s Q%d'%(sid[2:],n),[])))
for (sid,n),d in g12['N'].items(): prac(sid,n,d,g12['A'][sid],d['topic'])
for n,d in g3['N'].items():
    if n==50: continue
    prac('pq3',n,d,g3['ANS'],d['title'])
for n,d in g4['N'].items(): prac('pq4',n,d,g4['ANS'],d['title'])
cards.sort(key=lambda c:(SUBJ_ORDER.index(c['s']),int(re.search(r'(\d+) Q',c['tag'].replace('Mock ','M').replace('Set ','S')) and 0),c['tag']))
def order(c):
    m=re.match(r'(Mock|Set) (\d+) Q(\d+)',c['tag']); return (SUBJ_ORDER.index(c['s']),0 if m.group(1)=='Set' else 1,int(m.group(2)),int(m.group(3)))
cards.sort(key=order)
# check tables exist
node=json.loads(__import__('subprocess').run(['node','-e',"global.window={};eval(require('fs').readFileSync('/home/user/jimin/keyq.js','utf8')+';global.K=KEYQ');console.log(JSON.stringify(K.filter(q=>q.type==='table').map(q=>q.q)))"],capture_output=True,text=True).stdout)
for c in cards:
    for t in c['tb']: assert t in node,(c['tag'],t)
open('/home/user/jimin/flash.js','w').write('// Flash cards: wrong questions of Mock 6-10 and Practice sets 1-4 (built by bank/flash_src/build.py).\n// s = subject, q = question, ans = correct answer, mis = why it went wrong, fix = rule, fx = formula, tb = titles of tables in the key notes (KEYQ type "table").\nconst FLASH = '+json.dumps(cards,ensure_ascii=False,indent=1)+';\n')
print(len(cards),collections.Counter(c['s'] for c in cards))
