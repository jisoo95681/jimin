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
TITLES={
'Mock 6 Q43':"Least-likely-violated: mark every Standard, pick the clean one",'Mock 6 Q23':"Earnings quality red flag: CFO persistently below operating income",'Mock 6 Q25':"MVA = market value of the whole firm − book value of capital",'Mock 6 Q26':"Intrinsic value > book value → PV of future RI is positive",'Mock 6 Q40':"Tree calibration inputs: volatility, rate model, benchmark bonds (not the bond itself)",'Mock 6 Q36':"Implied vol comes from market prices; the surface spans strikes AND maturities",'Mock 6 Q31':"ETF completion = fill a gap in benchmark exposure",'Mock 6 Q19':"Growth channels: capital deepening and technology, not a cheap currency",'Mock 6 Q16':"Poor governance and social risk → wider credit spread",'Mock 6 Q2':"REIT = pass-through (no double tax); REOC = taxable company",
'Mock 7 Q12':"Multistage RI: B0 + PV(RI) + PV(continuing RI)",'Mock 7 Q38':"High growth ↑ P/E, high risk ↓ P/E",'Mock 7 Q39':"Index P/E = weighted harmonic mean",'Mock 7 Q30':"Credit migration: E(R) = YTM + Σ p × (−MD × Δspread)",'Mock 7 Q31':"Credit spread via CVA: VND → CVA → YTM(VND − CVA) − benchmark",'Mock 7 Q23':"Currency swap: each fixed rate from its own country's PV factors",'Mock 7 Q33':"Significance: |t| vs the critical t (n − k − 1 df)",'Mock 7 Q41':"Macro factor model: expected return = intercept (surprises = 0)",'Mock 7 Q43':"Macro model: surprises, sensitivities last. Fundamental: attributes, sensitivities first",'Mock 7 Q44':"Multifactor models serve active AND passive management",'Mock 7 Q20':"Inflation threat → central bank SELLS securities, raises rates",
'Mock 8 Q1':"Bond futures arbitrage: carry the bond forward, compare with CF × futures + AI",'Mock 8 Q6':"Break-even inflation = nominal − real yield; more uncertainty → higher BEI",'Mock 8 Q8':"Spreads narrow → weaker credits improve most",'Mock 8 Q10':"LGD = 1 − recovery; spread = YTM(VND − CVA) − benchmark",'Mock 8 Q11':"Risk-neutral PD ↓ → CVA ↓ → credit spread ↓",'Mock 8 Q15':"ARCH test: squared residuals on lagged squared residuals",'Mock 8 Q20':"H-model: linear fade only; long or large growth gap → multistage",'Mock 8 Q25':"FCFF for intangible-heavy firms with only special dividends",'Mock 8 Q30':"Pension discount rate above peers = aggressive",'Mock 8 Q31':"Recurring losses on asset sales = understated depreciation",'Mock 8 Q32':"Lower pension discount rate → liabilities ↑, equity ↓, D/E ↑",'Mock 8 Q34':"ESG scoring: score every feature, then add",'Mock 8 Q39':"VI(C) referral fees: notify clients at least QUARTERLY",'Mock 8 Q43':"Merger arbitrage gain = short proceeds − cost of the target shares",'Mock 8 Q44':"Merger arbitrage main risk = the deal fails",
'Mock 9 Q6':"Pure expectations: forward rates = expected future spot rates",'Mock 9 Q8':"Flight to quality + bullish flattening: extend duration, barbell",'Mock 9 Q9':"Retiring debt → better rating → LOWER cost of capital",'Mock 9 Q12':"Spin-off = shares to existing holders, no cash raised",'Mock 9 Q15':"High leverage + brand intangibles → EV/sales",'Mock 9 Q25':"Basel III: more equity vs RWA and stable funding, not earnings quality",'Mock 9 Q26':"P&C hard market → new entrants → softer market",'Mock 9 Q28':"Combined ratio = loss ratio + expense ratio (> 100% = underwriting loss)",'Mock 9 Q34':"SEE = std dev of errors of the DEPENDENT variable",'Mock 9 Q36':"One slope → t-test; all slopes → F-test",'Mock 9 Q40':"Storage REIT risk = new competing facilities",'Mock 9 Q41':"VaR advantage: performance evaluation (not a worst case)",'Mock 9 Q43':"Parametric VaR assumes normality: weak for fat tails and options",
'Mock 10 Q1':"DuPont: check the column order, rebuild assets and equity",'Mock 10 Q9':"I(B): no paid travel; only token gifts",'Mock 10 Q13':"Random walk as AR(1): b0 ≈ 0, b1 ≈ 1",'Mock 10 Q14':"Random walk: best forecast = the current value",'Mock 10 Q15':"ARCH(1): slope c1 significantly different from 0",'Mock 10 Q23':"Option value tomorrow = today + theta",'Mock 10 Q24':"American option: take max(continuation, exercise) at EVERY node",'Mock 10 Q37':"Unreimbursed expenses as a % of EGI",'Mock 10 Q38':"High vacancy = oversupply / recession phase",'Mock 10 Q40':"Direct cap uses a normalized NOI when NOI is disrupted"}
cards=[]
SUBJ_ORDER=['Ethics','FSA','Equity','Fixed Income','Derivatives','Quant','Portfolio Management','Economics','Corporate Issuers','Alternative Investments']
for s,tag,pick,key,mis,fix,fx in NOTES:
    src='mock'+tag.split()[1]; n=int(tag.split('Q')[1]); topic,q=getq(src,n)
    cards.append(dict(h=TITLES[tag],s=s,tag=tag,q=q['q'],ans=q['options'][q['answer']],pick=pick,key=key,mis=mis,fix=fix,fx=fx,tb=TB.get(tag,[])))
def strip(t): return re.sub(r'^(Your pick:\s*|Correct( \(your pick\))?:\s*)','',t)
def tags(t): return re.sub(r'<[^>]+>','',t)
# practice sets (cards written earlier for the wrong-answer PDFs)
g12=runpy.run_path('/tmp/gen/pq12/build.py'); g3=runpy.run_path('/tmp/gen/pq3/build.py'); g4=runpy.run_path('/tmp/gen/pq4/build.py')
def prac(sid,n,Nd,ans,title):
    topic,q=getpq(sid,n); me='ABC'.index(ans[n-1]); key='ABC'[q['answer']]
    d=Nd; on=d['on']; sub=TOPIC[topic]
    mis=strip(on[me]) if me!=q['answer'] else 'Right, but unsure.'
    mis=mis[0].upper()+mis[1:]
    cards.append(dict(h=title,s=sub,tag='Set %s Q%d'%(sid[2:],n),q=q['q'],ans=q['options'][q['answer']],pick='ABC'[me],key=key,mis=mis,fix=d['rule'],fx='\n'.join(tags(f) for f in d['formula']),tb=TB.get('Set %s Q%d'%(sid[2:],n),[])))
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
open('/home/user/jimin/flash.js','w').write('// Flash cards: wrong questions of Mock 6-10 and Practice sets 1-4 (built by bank/flash_src/build.py).\n// h = headline, s = subject, q = question, ans = correct answer, mis = why it went wrong, fix = rule, fx = formula, tb = titles of tables in the key notes (KEYQ type "table").\nconst FLASH = '+json.dumps(cards,ensure_ascii=False,indent=1)+';\n')
print(len(cards),collections.Counter(c['s'] for c in cards))
