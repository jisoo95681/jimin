# Mock 8 for the Exam section: 9 vignettes drawn at random from the never-used bank (mock8_pick.json)
# + 2 re-skins of vignettes missed in Mock 7 (mock8_reskin.py), then the disguise pass (renumber listed items,
# reorder concept answer choices, swap four definition questions for other concepts of the same reading).
import json,random,re,sys
sys.path.insert(0,'/home/user/jimin/bank/exam')
from mock7 import convert,clean_why,BANK
from mock7_tweak import renum,perm
from mock8_reskin import RESKIN
def good(q): return q.get('answer') in ('A','B','C')
# explanations that were garbled or written for the user's own pick in the portal paste: rewritten here
WHY={
 ('eq2-jackson',54):"B. Correct. DDL pays no dividend in the first three years, so use a two-stage DDM: Gordon growth value at the end of year 3 = D4 ÷ (r − g) = 0.50 ÷ (0.0725 − 0.02) = $9.52. Discount it 3 years: 9.52 ÷ 1.0725³ = $7.72.\nA. Incorrect. It discounts the $9.52 for four periods instead of three: 9.52 ÷ 1.0725⁴ = $7.20.\nC. Incorrect. It discounts $9.52 for three years at r − g (5.25%): 9.52 ÷ 1.0525³ = $8.17.",
 ('eq2-jackson',55):"A. Correct. H-model: V0 = [D0 × (1 + gL) + D0 × H × (gS − gL)] ÷ (r − gL), with H = 6 ÷ 2 = 3.\nFirst term: 2.00 × 1.04 ÷ (0.12 − 0.04) = $26.00.\nSecond term: 2.00 × 3 × (0.08 − 0.04) ÷ (0.12 − 0.04) = $3.00.\nValue = 26.00 + 3.00 = $29.00.\nB. Incorrect. It grows the first dividend at the higher rate (8%): 27.00 + 3.00 = $30.00.\nC. Incorrect. It uses the full six years instead of the half-life H = 3: second term 6.00, total 26.00 + 6.00 = $32.00.",
 ('m2-11',41):"B. Correct. For cocoa the spot price (3,318) is above the 3-month futures price (3,264), which is above the 6-month price (3,233): the futures curve slopes down, so the market is in backwardation.\nA. Incorrect. The crude oil basis = spot − near-term futures = 75.02 − 74.25 = 0.77, not zero. It is the calendar spread (near-term minus farther-term futures, 74.25 − 74.25) that is zero.\nC. Incorrect. Gold: near-term futures 1,929.3 − farther-term futures 1,935.6 = −6.3, so the calendar spread is negative (gold is in contango).",
 ('m2-11',42):"B. Correct. Total return = price return + roll return + collateral return.\nPrice return = (3,285 − 3,294) ÷ 3,294 = −0.2732%.\nRoll return = (near-term contract price − new contract price) ÷ near-term contract price = (3,285 − 3,260) ÷ 3,285 = +0.7610%.\nCollateral return for 3 months = 5.0% ÷ 4 = 1.25%.\nTotal = −0.2732 + 0.7610 + 1.25 = 1.7378%, about 1.7%.\nA. Incorrect. 0.2% subtracts the roll return instead of adding it (−0.2732 − 0.7610 + 1.25).\nC. Incorrect. 5.5% adds the annualised collateral return of 5.0% instead of the 3-month return of 1.25%.",
 ('m2-11',43):"B. Correct. If the merger closes, the 30,000 TC shares bought at $11 (cost $330,000) convert into 30,000 ÷ 3 = 10,000 AC shares, which cover the short position sold at $35 (proceeds $350,000). Gain = 350,000 − 330,000 = $20,000.\nA. Incorrect. It computes the payoff as ($35 ÷ 3 − $11) × 10,000 = $6,667, about $7,000.\nC. Incorrect. It uses the pre-announcement prices: 10,000 × $39 − 30,000 × $10 = $90,000.",
 ('esg31-3',12):"B. Correct. Scoring (1 point for each good-governance feature): independent directors 12 ÷ 19 = 63% is a majority for ChemiKa (1) but 4 ÷ 8 = 50% is not for PlastiKa (0); two-tiered board: ChemiKa no (0), PlastiKa yes (1); CEO duality: ChemiKa yes (0), PlastiKa no (1); average board tenure: ChemiKa 8 years (1), PlastiKa 14 years (0); audit committee: ChemiKa yes (1), PlastiKa no (0); compensation committee: both yes (1 each); director selection committee: ChemiKa no (0), PlastiKa yes (1). Ownership, voting power and the number of directors are not scored. Each company totals 4 points, so they rank the same.\nA. Incorrect. Both companies score 4 points.\nC. Incorrect. Both companies score 4 points.",
 ('m1-10',37):"A. Correct. Two time series are cointegrated only if both have a unit root (Null Hypothesis 2 and Null Hypothesis 1 are NOT rejected by a Dickey-Fuller test) and the residuals of the regression between them do NOT have a unit root (Null Hypothesis 3 is rejected by the Engle-Granger test). So Silva rejects only Null Hypothesis 3.\nB. Incorrect. Rejecting Null Hypothesis 1 and Null Hypothesis 2 would mean neither series has a unit root, so cointegration is not relevant.\nC. Incorrect. Failing to reject Null Hypothesis 3 means the residuals have a unit root, so the series are not cointegrated.",
 ('m1-10',38):"B. Correct. Mean-reverting level of an AR(1) model = b0 ÷ (1 − b1) = 0.00259 ÷ (1 − 0.38616) = 0.0042, about 0.004.\nA. Incorrect. It uses a plus sign in the denominator: 0.00259 ÷ (1 + 0.38616) = 0.0019.\nC. Incorrect. It swaps b0 and b1: 0.38616 ÷ (1 − 0.00259) = 0.387.",
 ('m1-10',39):"C. Correct. Residual Regression 2 regresses the squared residuals on their own lag; its slope t-statistic of 2.94 exceeds the critical value of 1.97, so there is autoregressive conditional heteroskedasticity (ARCH) and the AR(1) model is misspecified.\nA. Incorrect. The model is misspecified because of the ARCH effect.\nB. Incorrect. Residual Regression 1 (residuals on their own lag) has a t-statistic of 0.70, below 1.97, so there is no significant serial correlation.",
}
REPLACED={('m2-11',44),('m1-10',40),('fsa5-coleridge',20),('em-simmons',35)}   # questions swapped for another concept in tweak()
def real(id_,topic,ns):
    v=BANK[id_]; qs=[]
    for q in v['questions']:
        if q['n'] in ns:
            opts=[re.sub(r'^[ABC][.)]\s*','',o) for o in q['options']]
            w=WHY.get((id_,q['n'])) or clean_why(q['why'])
            if (id_,q['n']) not in REPLACED: assert 'Answer Feedback' not in w,(id_,q['n'])
            qs.append(dict(q=q['q'],options=opts,answer='ABC'.index(q['answer']),why=w))
    assert len(qs)==4,(id_,len(qs))
    return dict(id=id_,topic=topic,group="new",body=convert(v['body']),questions=qs)
TOPIC=dict(Ethics='Ethical and Professional Standards',Alt='Alternative Investments',Equity='Equity Valuation',Quant='Quantitative Methods',
 Econ='Economics',Deriv='Derivatives',FSA='Financial Statement Analysis',Corp='Corporate Issuers')
PICK=json.load(open('/home/user/jimin/bank/exam/mock8_pick.json'))
V={s['id']:real(s['id'],TOPIC[s['topic']],s['ns']) for s in PICK}
def fix_bodies():
    t=V['d28-troubadour']; b=t['body']
    i=b.index('# Futures Contract | Underlying Bond'); j=b.index('Troubadour next gathers information on a Japanese')
    t['body']=b[:i]+'''Futures contract |  
Quoted futures price | 125.00
Conversion factor | 0.90
Time remaining to contract expiration | Three months
Accrued interest over life of futures contract | 0.00
Underlying bond |  
Quoted bond price | 112.00
Accrued interest since last coupon payment | 0.08
Accrued interest at futures contract expiration | 0.20

'''+b[j:]
    # vignette text that pointed at questions not in this mock is cut (Exhibit 3 of Troubadour, yield-curve factors, feature selection, turnover/M-score, fund-of-funds options)
    b=t['body']; t['body']=b[:b.index('Three months after contract initiation')].rstrip()
    m=V['em-simmons']; b=m['body']
    x=" and the government bond curve to change from its currently flat state to an upward sloping state. Simmons believes the future upward slope of the yield curve will be influenced by investor expectations for declining policy rates, increasing inflation premiums for longer dated bonds, and bond risk premiums that are negatively related to consumption hedging benefits."
    assert x in b; m['body']=b.replace(x,".")
    q=V['m1-10']; b=q['body']
    x="she performs feature selection. She wants to remove noise features and only select the tokens that tend to occur more often in a particular class of text."
    assert x in b; q['body']=b.replace(x,"she turns the listings into text features for a classifier.")
    c=V['fsa5-coleridge']; b=c['body']
    x="Next, Thorsell notes that Coleridge's receivables turnover ratio, inventory turnover ratio, and Beneish M-scores have all increased each year during the preceding 3-year period. She also notes that consistent"
    assert x in b; c['body']=b.replace(x,"Next, Thorsell notes that, consistent")
    a=V['m2-11']; b=a['body']; a['body']=b[:b.index('Pasco is evaluating the benefits')].rstrip()
    b=a['body']
    i=b.index('Exhibit 1\n\nCrude Oil'); j=b.index('Spot price | 75.02')
    a['body']=b[:i]+'Exhibit 1\n# Item | Crude oil—Brent ($ per barrel) | Cocoa ($ per metric tonne) | Gold ($ per troy ounce)\n'+b[j:]
fix_bodies()
# ---- disguise pass -------------------------------------------------------------------------------
def Q(q,opts,ans,why): return dict(q=q,options=opts,answer=ans,why=why)
def tweak():
    c=V['fsa5-coleridge']; renum(c,'Observation',{1:2,2:3,3:1})
    c['questions'][1]=Q("Compared with its industry competitors, Coleridge's pension discount rate assumption is most likely:",
      ["aggressive, because it lowers the reported pension obligation.","conservative, because it raises the reported pension expense.","neutral, because the plan is underfunded in any case."],0,
      "A. Correct. A higher discount rate than peers lowers the present value of the pension obligation (and the reported expense), so the underfunding is understated: the assumption is aggressive.\nB. Incorrect. A higher discount rate lowers, not raises, the reported obligation and expense.\nC. Incorrect. The assumption changes the measured size of the deficit, so the plan being underfunded does not make it neutral.")
    s=V['m1-10']; renum(s,'Null Hypothesis',{1:3,2:1,3:2}); renum(s,'Residual Regression',{1:2,2:1})
    s['body']=re.sub(r'(?m)^(Residual Regression \d: .*u t)$',r'\1.',s['body'])
    s['questions'][3]=Q("Silva notices that the phrase \"sold quickly\" carries a meaning that the single tokens \"sold\" and \"quickly\" do not capture. To keep this information in the text features, she should most likely use:",
      ["bigrams (n-grams with n = 2).","stemming of each token.","a lower document frequency (DF) cutoff."],0,
      "A. Correct. N-grams (here bigrams) keep word-order and phrase information that a bag of single tokens loses.\nB. Incorrect. Stemming reduces words to their root forms; it shrinks the vocabulary but does not preserve phrases.\nC. Incorrect. A DF cutoff removes very frequent or very rare tokens (noise); it does not capture phrases.")
    p=V['m2-11']; renum(p,'Option',{1:2,2:1})
    p['questions'][3]=Q("The main risk of Fund 2's merger arbitrage trade is that:",
      ["the merger is cancelled and the TC shares fall back toward their pre-announcement price.","the AC share price rises after the merger closes, which hurts the short AC position.","the TC shares are converted into AC shares at the announced ratio, which locks in a loss."],0,
      "A. Correct. The position is long TC and short AC; it earns the spread if the stock-for-stock deal closes. If the deal fails, TC falls back toward its pre-announcement price while the short AC hedge no longer offsets it, causing a loss.\nB. Incorrect. After closing, the TC shares convert into AC shares that offset the short AC position, so a higher AC price does not hurt the closed trade.\nC. Incorrect. Conversion at the announced ratio is the expected outcome that produces the gain, not a loss.")
    m=V['em-simmons']; renum(m,'Statement',{1:2,2:3,3:1}); renum(m,'Comment',{1:3,2:1,3:2})
    m['questions'][2]=Q("Bond C's spread of 650 bps over government bonds in Exhibit 2 most likely compensates investors for:",
      ["the expected credit loss only, because the spread equals default probability times loss.","the expected credit loss plus a premium for bearing credit and liquidity risk.","a term premium for holding a longer-maturity bond than the benchmark government bond."],1,
      "B. Correct. A credit spread covers the expected loss (here 3.5% × (1 − 45%) = 1.925%, i.e. 192.5 bps) plus a risk premium for bearing credit and liquidity risk; 650 bps is much larger than the expected loss.\nA. Incorrect. The spread is far larger than the expected loss alone.\nC. Incorrect. The three bonds have the same five-year maturity, and the spread is measured against a government bond of similar maturity, so it is not a term premium.")
tweak()
# ---- assemble, order, balance --------------------------------------------------------------------
VIG=[V[s['id']] for s in PICK]+[RESKIN['pm'],RESKIN['fi']]
rng=random.Random(8)
while True:
    rng.shuffle(VIG)
    if all(a['topic']!=b['topic'] for a,b in zip(VIG,VIG[1:])): break
CALC={('eq2-jackson',1),('eq2-jackson',2),('m2-11',1),('m2-11',2),('m1-10',1),('d28-troubadour',0),('d28-troubadour',1)}
def label_type(opts): return all(re.match(r'^(Only |Both |Statement|Comment|Observation|Portfolio|Option|Neither)',o) for o in opts)
def permutable(v,i):
    q=v['questions'][i]; vid=v.get('id')
    if vid is None and v['topic']=='Fixed Income' and i<2: return False
    if (vid,i) in CALC: return False
    if label_type(q['options']): return False
    return True
def key_for(orders):
    k=[]
    for vi,v in enumerate(VIG):
        for i,q in enumerate(v['questions']):
            o=orders.get((vi,i))
            k.append('ABC'[o.index(q['answer'])] if o else 'ABC'[q['answer']])
    return ''.join(k)
def maxrun(k):
    m=c=1
    for a,b in zip(k,k[1:]): c=c+1 if a==b else 1; m=max(m,c)
    return m
import itertools,collections
PERMS=[p for p in itertools.permutations(range(3)) if p!=(0,1,2)]
best=None
for t in range(20000):
    r=random.Random(t)
    orders={(vi,i):list(r.choice(PERMS)) for vi,v in enumerate(VIG) for i in range(4) if permutable(v,i)}
    k=key_for(orders); c=collections.Counter(k)
    if maxrun(k)<=3 and max(c.values())<=17 and min(c.values())>=12: best=orders; break
assert best,'no balanced order'
for (vi,i),o in best.items(): perm(VIG[vi]['questions'][i],o)
for v in VIG: v.pop('id',None)
MOCK=dict(id="mock8",rev=3,resetHl=[i for i,v in enumerate(VIG) if v['topic'] in ('Derivatives','Economics','Quantitative Methods','Financial Statement Analysis','Alternative Investments')],title="Mock 8",kind="mock",minutes=132,desc="9 new vignettes + 2 re-done (names and numbers changed); scored separately",vignettes=VIG)
if __name__=='__main__':
    json.dump(MOCK,open('/home/user/jimin/bank/exam/mock8.json','w'),ensure_ascii=False,indent=1)
    k=''.join('ABC'[q['answer']] for v in VIG for q in v['questions'])
    print(len(k),k,collections.Counter(k)); print([ (v['topic'],v['group']) for v in VIG])
