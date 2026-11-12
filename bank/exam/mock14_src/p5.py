from lib14 import *
# ================= 11 Corp =================
px,sd=36.45,0.08
pn=px/(1+sd); pA=px*(1-sd); pC=px*(1+sd)
assert (round(pn,2),round(pA,2),round(pC,2))==(33.75,33.53,39.37)
eps,price,kd=2.40,40.0,0.045; ey=eps/price
assert ey>kd and round(ey*100,1)==6.0
body="""Elin Sjöberg, CFO of Skogen Timber ASA, is preparing recommendations for the board on how to return cash to shareholders. Skogen's share price is NOK36.45 and its earnings per share (EPS) are NOK2.40, so the earnings yield is 6.0% at a price of NOK40.00 (the price used for buyback calculations).

Two proposals are on the table:

Proposal 1: A stock dividend of 8%.

Proposal 2: A share repurchase funded entirely with new debt at an after-tax cost of 4.5%, executed at a price of NOK40.00 per share.

Skogen's largest shareholder is the founding family, which holds 55% of the capital through a class of shares carrying 10 votes per share. The remaining shares carry one vote each, and the family controls 92% of the votes."""
add('Corporate Issuers',body,[
 q("Assuming a total market value that does not change, the expected share price after Proposal 1 is closest to:",["NOK33.53.","NOK33.75.","NOK39.37."],1,
  ["This subtracts 8% from the price (36.45 × 0.92); the stock dividend increases the number of shares by 8%, so the price is divided by 1.08.","A stock dividend leaves total market value unchanged and increases the share count by 8%: 36.45 ÷ 1.08 = NOK33.75.","This multiplies the price by 1.08, which would raise the price."],
  ["stock dividend of 8%","share price is NOK36.45"],"Stock dividend: total value unchanged, shares × (1 + %), so new price = old price ÷ (1 + %)."),
 q("If Skogen implements Proposal 2 at NOK40.00 per share, its EPS will most likely:",["decrease.","increase.","not change."],1,
  ["EPS would fall only if the after-tax cost of debt were above the earnings yield; here it is below.","The earnings yield (EPS ÷ price = 2.40 ÷ 40.00 = 6.0%) exceeds the after-tax cost of borrowing (4.5%), so replacing equity with debt increases EPS.","EPS is unchanged only if the earnings yield equals the after-tax cost of debt."],
  ["after-tax cost of 4.5%","the earnings yield is 6.0%"],"Debt-financed buyback: EPS rises if the earnings yield (EPS ÷ price) is above the after-tax cost of debt, falls if it is below.",fixed=False),
 q("Skogen's share structure most likely creates a governance conflict between:",["controlling shareholders and minority shareholders (principal–principal).","shareholders and managers (principal–agent).","shareholders and bondholders."],0,
  ["The family controls 92% of the votes with 55% of the capital, so the conflict is between a controlling owner and the minority shareholders: a principal–principal problem.","The principal–agent problem arises when ownership is dispersed and managers are strong; here control is concentrated.","The structure of votes is about control among shareholders, not about creditors."],
  ["10 votes per share","controls 92% of the votes"],"Concentrated control through multi-voting shares → principal–principal (controlling vs minority shareholders); dispersed ownership → principal–agent.",fixed=False),
])
# ================= 12 Alt =================
egiA,opA,reA=2400.0,980.0,300.0; egiB,opB,reB=3100.0,1330.0,0.0
rA=(opA-reA)/egiA; rB=(opB-reB)/egiB
assert (round(rA*100,1),round(rB*100,1))==(28.3,42.9)
noi,cap,cash,debt,sh=18.0,0.06,10.0,140.0,8.0
nav=(noi/cap+cash-debt)/sh; navA=(noi/cap+cash)/sh; navC=(noi/cap-debt)/sh
assert (round(nav,2),round(navA,2),round(navC,2))==(21.25,38.75,20.00)
p0,pn_,pf,coll=80.0,83.0,81.5,0.012
pr=(pn_-p0)/p0; rr=(pn_-pf)/pn_; cr=coll*3/12; tr=pr+rr+cr; trB=pr+cr; trC=pr-rr+cr
assert (round(tr*100,2),round(trB*100,2),round(trC*100,2))==(5.86,4.05,2.24),(tr,trB,trC)
body="""Sofia Brandt, CFA, an alternative investments analyst at a Danish pension fund, reviews three investments.

Property comparison. Brandt compares two properties, which have the following annual data (DKK thousands).

Exhibit 1: Property Data
# Item | Property A (office) | Property B (apartments)
Effective gross income | 2,400 | 3,100
Operating expenses | 980 | 1,330
Expense reimbursements from tenants | 300 | 0

REIT valuation. Brandt values Hallmark Real Estate Trust using the net asset value approach. Next year's net operating income is expected to be DKK18 million, and the market capitalization rate for similar properties is 6.0%. Hallmark also holds DKK10 million in cash and other tangible assets, has DKK140 million of debt and 8 million shares outstanding.

Commodity position. Brandt buys a futures contract on a commodity at 80.00. Three months later the near contract that she holds trades at 83.00 and the next contract trades at 81.50, so she rolls into the next contract. The collateral earns 1.2% per year."""
add('Alternative Investments',body,[
 q("Based on Exhibit 1, which statement about unreimbursed operating expenses is most accurate?",["Property A's NOI is more affected, because its expenses are lower than those of Property B.","Property B's NOI is more affected, because unreimbursed expenses are a larger percentage of its effective gross income.","Both properties are affected similarly, because both have expenses between 28% and 43% of EGI."],1,
  ["Lower expenses in dollars do not mean a smaller effect; the comparison is made as a percentage of effective gross income.",f"Unreimbursed expenses ÷ EGI: Property A = (980 − 300) ÷ 2,400 = {rA*100:.1f}%; Property B = 1,330 ÷ 3,100 = {rB*100:.1f}%. Property B is affected more.","The two percentages (28.3% and 42.9%) are clearly different."],
  ["@row:Expense reimbursements from tenants","@row:Effective gross income","@row:Operating expenses"],"Unreimbursed expenses as a % of effective gross income = (operating expenses − reimbursements) ÷ EGI; compare ratios, not dollar amounts.",fixed=False),
 q("Hallmark's net asset value per share is closest to:",["DKK20.00.","DKK21.25.","DKK38.75."],1,
  [f"This leaves out the cash and other assets (+10 million): (300 − 140) ÷ 8 = DKK{navC:.2f}.",f"Property value = NOI ÷ cap rate = 18 ÷ 0.06 = DKK300 million. NAV = 300 + 10 − 140 = 170; per share = 170 ÷ 8 = DKK{nav:.2f}.",f"This does not subtract the debt: (300 + 10) ÷ 8 = DKK{navA:.2f}."],
  ["market capitalization rate for similar properties is 6.0%","DKK140 million of debt"],"NAVPS = (NOI ÷ cap rate + cash and other assets − debt) ÷ shares."),
 q("The three-month total return on the commodity position is closest to:",["2.24%.","4.05%.","5.86%."],2,
  [f"This subtracts the roll return, but the market is in backwardation (near price above next price), so the roll return is positive: {trC*100:.2f}%.",f"This leaves out the roll return: price return {pr*100:.2f}% + collateral return {cr*100:.2f}% = {trB*100:.2f}%.",f"Total return = price return + roll return + collateral return. Price return = (83.00 − 80.00) ÷ 80.00 = {pr*100:.2f}%. Roll return = (83.00 − 81.50) ÷ 83.00 = {rr*100:.2f}% (backwardation: positive). Collateral return = 1.2% × 3/12 = {cr*100:.2f}%. Total = {tr*100:.2f}%."],
  ["the near contract that she holds trades at 83.00 and the next contract trades at 81.50","The collateral earns 1.2% per year"],"Commodity futures total return = price return + roll return + collateral return; roll return = (near − next) ÷ near (positive in backwardation).",fixed=True),
])
# ================= 13 PM =================
a,b1,F1,b2,F2=2.10,0.90,0.60,-0.40,0.50
er=a+b1*F1+b2*F2; erA=a; erC=a+b1*F1-b2*F2
assert (round(er,2),round(erA,2),round(erC,2))==(2.44,2.10,2.84)
TC,IC,BR=0.60,0.08,64
ir=TC*IC*math.sqrt(BR); irA=IC*math.sqrt(BR); irC=TC*IC*BR
assert (round(ir,3),round(irA,2),round(irC,2))==(0.384,0.64,3.07)
V,mu,sg,z=500.0,0.0004,0.012,1.65
var=(z*sg-mu)*V; varA=z*sg*V; varB=(2.33*sg-mu)*V
assert (round(var,2),round(varA,2),round(varB,2))==(9.70,9.90,13.78),(var,varA,varB)
body="""Tomas Eklund, CFA, is a portfolio manager at a Swedish asset manager.

Macroeconomic factor model. Eklund uses a two-factor macroeconomic model for an equity portfolio:

R = a + b_GDP × F_GDP + b_INF × F_INF + ε

The intercept a is 2.10%, the sensitivity to GDP growth surprises (b_GDP) is 0.90 and the sensitivity to inflation surprises (b_INF) is −0.40. Eklund's view is that the surprises will be +0.60% for GDP growth and +0.50% for inflation.

Active manager skill. Eklund evaluates an active equity manager who has a transfer coefficient of 0.60 and an information coefficient of 0.08. The manager makes 64 independent bets a year.

Risk. The portfolio is worth SEK500 million. Its expected daily return is 0.04% and the daily standard deviation is 1.20%. Eklund estimates the one-day 5% value at risk (VaR) with the parametric method, assuming normally distributed returns, and uses a z-score of 1.65."""
add('Portfolio Management',body,[
 q("Based on Eklund's view of the factor surprises, the expected return of the portfolio is closest to:",["2.10%.","2.44%.","2.84%."],1,
  ["This is the intercept, which is the expected return only if all factor surprises are zero.","Expected return = 2.10% + 0.90 × 0.60% + (−0.40) × 0.50% = 2.44%.","This treats the inflation sensitivity as positive: 2.10 + 0.54 + 0.20 = 2.84%."],
  ["The intercept a is 2.10%","the surprises will be +0.60% for GDP growth and +0.50% for inflation"],"Macro factor model: R = a + Σ b × (factor SURPRISE); a is the expected return only when all surprises are zero.",fixed=True),
 q("The manager's expected information ratio is closest to:",["0.38.","0.64.","3.07."],0,
  ["IR = TC × IC × √BR = 0.60 × 0.08 × √64 = 0.384.","This leaves out the transfer coefficient (0.08 × 8 = 0.64).","This uses breadth (64) instead of its square root: 0.60 × 0.08 × 64 = 3.07."],
  ["transfer coefficient of 0.60","makes 64 independent bets a year"],"Fundamental law (with transfer coefficient): IR = TC × IC × √BR.",fixed=True),
 q("The one-day 5% parametric VaR of the portfolio is closest to:",["SEK9.70 million.","SEK9.90 million.","SEK13.78 million."],0,
  ["VaR = (z × σ − expected return) × portfolio value = (1.65 × 1.20% − 0.04%) × 500 = SEK9.70 million.","This ignores the expected return: 1.65 × 1.20% × 500 = SEK9.90 million.","This uses a z-score of 2.33, which belongs to a 1% VaR, not a 5% VaR."],
  ["expected daily return is 0.04%","uses a z-score of 1.65"],"Parametric VaR = (z × σ − μ) × portfolio value (the expected return reduces the loss).",fixed=True),
])
