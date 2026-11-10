# 10 Nov: Mock 8 change requested by the user. V1 (Derivatives) becomes an options vignette (Athena/Messer, drawn at random) and
# V4 (Quantitative Methods) becomes a time-series vignette (Taylor/Maclaurin, drawn at random). Every other vignette, its question order
# and its option order stay exactly as they were (saved progress is keyed by question number).
# Disguise pass as for the other vignettes: listed items renumbered, concept answer choices reordered, one definition question swapped
# for another concept of the same reading, text that only served dropped questions cut.
import json,sys,itertools,collections,re
sys.path.insert(0,'/home/user/jimin/bank/exam')
from mock7 import convert,BANK,clean_why
from mock7_tweak import perm
M=json.load(open('/home/user/jimin/bank/exam/mock8.json'))
OLDKEY=''.join('ABC'[q['answer']] for v in M['vignettes'] for q in v['questions'])
def Q(q,opts,ans,why): return dict(q=q,options=opts,answer=ans,why=why)
def cut(b,x,y=''):
    assert x in b,x[:70]; return b.replace(x,y)
# ---------------- options: Athena (Messer) ----------------
b=BANK['opt-athena']['body']
b=cut(b,'Of course, with the index moving down 10% in the last 12 months, the payoffs with these options could have been replicated without using options." Szillat responds, "My understanding is that the payoff would have been the same as the call option if you had purchased 0.5697 index units and lent EUR 356.79 at the one-year interest rate."','Of course, the index has moved down 10% in the last 12 months."')
b=cut(b,'Hedge ratio\t.5697\n'); b=cut(b,'C–\t0\n')            # only used by the dropped replication question
b=cut(b,'two-year puts with a strike price of EUR750','two-year American-style puts with a strike price of EUR750')
b=cut(b,'''Assumption 1: Trading is possible at every instant.
Assumption 2: Volatility can be predicted with certainty.
Assumption 3: The annualized returns on the underlying follow a normal distribution.''','''Assumption 1: The annualized returns on the underlying follow a normal distribution.
Assumption 2: Trading is possible at every instant.
Assumption 3: Volatility can be predicted with certainty.''')
b=cut(b,'''Szillat then asks, "How do you utilize the BSM model?"

Messer answers, "We use the BSM model to calculate estimates on a wide array of comparative option variables, such as how much the option value will change for a change in a particular parameter. For example, we can estimate how the rate of change of an option price speeds up or slows down for a given change in the price of the underlying index."

Messer concludes, "We also use''','''Messer concludes, "We also use''')
ath=dict(topic='Derivatives',group='new',body=convert(b),questions=[
 Q("Using the binomial valuation method and the data in Exhibit 1, the price Messer paid one year ago for the call option with a strike price of EUR750 is closest to:",
   ["EUR47.57.","EUR51.54.","EUR102.08."],1,
   "B. Correct. S++ = 720 × 1.15² = 952.2, so c++ = 952.2 − 750 = 202.2; the other two terminal payoffs are zero. c+ = 0.52 × 202.2 ÷ 1.03 = 102.08 and c0 = 0.52 × 102.08 ÷ 1.03 = EUR51.54.\nA. Incorrect. It reverses the probabilities of c+ and c−: 0.48 × 102.08 ÷ 1.03 = 47.57.\nC. Incorrect. EUR102.08 is the value of c+ one year later, not the price at purchase."),
 Q("Does the put option with a strike price of EUR750 currently offer an arbitrage opportunity?",
   ["Yes","No, because the put is deep in the money","No, because the market has bid up the price of the put"],0,
   "A. Correct. The index has fallen 10% to 648, so exercising the American-style put now gives 750 − 648 = EUR102, more than its price of EUR92. Buying the put and exercising it while buying the index locks in a profit of 10.\nB. Incorrect. Being deep in the money does not remove the arbitrage; the test is whether the price is below the exercise value.\nC. Incorrect. The put's price of EUR92 is still below its exercise value of EUR102."),
 Q("Which of Szillat's assumptions is least consistent with the BSM model?",
   ["Assumption 1","Assumption 2","Assumption 3"],0,
   "A. Correct. The BSM model assumes that the continuously compounded (logarithmic) return, not the annualized return, is normally distributed.\nB. Incorrect. Assumption 2 is part of the BSM model: trading is continuous.\nC. Incorrect. Assumption 3 is part of the BSM model: volatility is assumed to be known."),
 Q("Exhibit 2 shows that the implied volatility of the EUR700 option (18.7) is higher than that of the EUR800 option (11.09), and falls steadily as the strike price rises. This pattern is best described as:",
   ["a volatility skew, in which implied volatility is higher for lower strike prices.","a volatility smile, in which implied volatility is higher at both low and high strike prices.","the term structure of volatility, in which implied volatility differs by time to expiration."],0,
   "A. Correct. Implied volatility that varies with the strike price and falls steadily as the strike rises is a volatility skew; out-of-the-money puts (low strikes) are then more expensive than out-of-the-money calls.\nB. Incorrect. A smile is U-shaped: higher implied volatility at both ends of the strike range. Exhibit 2 falls steadily.\nC. Incorrect. The term structure of volatility is implied volatility across times to expiration; Exhibit 2 keeps the expiry at one year and changes the strike."),
])
# ---------------- time series: Taylor (Maclaurin) ----------------
t=BANK['ts-taylor']
qs={q['n']:q for q in t['questions']}
def real(n):
    q=qs[n]; return Q(q['q'],list(q['options']),'ABC'.index(q['answer']),None)
q56,q57,q59=real(56),real(57),real(59)
q56['why']="C. Correct. Six years of quarterly data is 24 observations, so the current quarter is t = 25: exp(5.74820 + 0.03795 × 25) = exp(6.69695) = 809.93, about $810 million.\nA. Incorrect. It uses t = 1 (the first out-of-sample quarter) instead of t = 25: exp(5.74820 + 0.03795) = 325.76.\nB. Incorrect. It uses t = 24: exp(5.74820 + 0.03795 × 24) = 779.77."
q57['why']="C. Correct. For an AR(1) model the mean-reverting level is b0 ÷ (1 − b1) = 0.3000 ÷ (1 − 0.9093) = 3.31.\nA. Incorrect. It swaps b0 and b1: b1 ÷ (1 − b0) = 0.9093 ÷ 0.7000 = 1.30.\nB. Incorrect. It uses the ratio b1 ÷ b0 = 3.03, which is not a formula."
q59['options']=["a covariance stationary series.","a simple random walk.","a random walk with drift."]; q59['answer']=2
q59['why']="C. Correct. A random walk with drift is the AR(1) special case with b1 = 1 and b0 ≠ 0. Here b1 = 1 and b0 = 0.25, so the series has a unit root and is not covariance stationary.\nA. Incorrect. b1 = 1 means an undefined mean-reverting level, so the series is not covariance stationary.\nB. Incorrect. A simple random walk has b0 = 0. Here b0 = 0.25 ≠ 0, so it has drift."
q58=Q("Taylor suspects that the exchange rate series used for Model C may have a unit root. If his Dickey–Fuller test does not reject its null hypothesis, he should most likely:",
   ["first-difference the series before estimating an autoregressive model.","estimate the AR(1) model on the original series, because a unit root makes the estimates more precise.","add a second lag to Model C, which removes the unit root."],0,
   "A. Correct. The null hypothesis of the Dickey–Fuller test is that the series has a unit root. If it is not rejected, the series is not covariance stationary, so it should be transformed, most commonly by first-differencing, before an AR model is estimated.\nB. Incorrect. Autoregressive estimates on a series with a unit root are unreliable because a random walk is not covariance stationary.\nC. Incorrect. Adding lags does not remove a unit root.")
qm=dict(topic='Quantitative Methods',group='new',body=convert(t['body']),questions=[q56,q57,q58,q59])
# ---------------- splice in place ----------------
V=M['vignettes']; assert V[0]['topic']=='Derivatives' and V[3]['topic']=='Quantitative Methods'
V[0]=ath; V[3]=qm
CONC=[(0,1),(0,3),(3,2),(3,3)]            # concept questions whose answer choices are reordered (Assumption labels and the two calculations are not)
PERMS=[p for p in itertools.permutations(range(3)) if p!=(0,1,2)]
def key():
    return ''.join('ABC'[q['answer']] for v in V for q in v['questions'])
def maxrun(k):
    m=c=1
    for a,b in zip(k,k[1:]): c=c+1 if a==b else 1; m=max(m,c)
    return m
import copy
base=copy.deepcopy([(V[0]['questions'][1],V[0]['questions'][3],V[3]['questions'][2],V[3]['questions'][3])])[0]
found=None
for choice in itertools.product(PERMS,repeat=4):
    qq=[copy.deepcopy(x) for x in base]
    for q,o in zip(qq,choice): perm(q,list(o))
    V[0]['questions'][1],V[0]['questions'][3],V[3]['questions'][2],V[3]['questions'][3]=qq
    k=key(); c=collections.Counter(k)
    if maxrun(k)<=3 and max(c.values())<=17 and min(c.values())>=12 and sum(1 for a,b in zip(k,OLDKEY) if a!=b)<=8: found=k; break
assert found,'no balanced order'
M['rev']=4
M['resetHl']=sorted(set(M['resetHl'])|{0,3})
M['resetAns']=[1,2,3,4,13,14,15,16]
M['desc']="9 new vignettes + 2 re-done (names and numbers changed); scored separately"
json.dump(M,open('/home/user/jimin/bank/exam/mock8.json','w'),ensure_ascii=False,indent=1)
print('old',OLDKEY); print('new',found, collections.Counter(found), 'maxrun',maxrun(found))
