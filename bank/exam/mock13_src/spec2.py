import math
from lib13 import *
# ===== Mock 2 =====
# --- sedgwick (Ethics Q10): fair dealing procedures
pairs=[("Nadia Weber","Helena Voss"),("Weber","Voss"),("Halston Investment Management","Brandon Investment Management"),("Halston","Brandon"),("Dale Ito","Owen Takeda"),("Ito","Takeda")]
part('Ethical and Professional Standards','sedgwick',R(0,6,8,10,12,14),pairs,[],[K(10)])
# --- suess (FI Q20): credit spread term structure
pairs=[("Ingrid Falk","Marit Solberg"),("Falk","Solberg"),("Summit Multi-Asset Capital","Northgate Multi-Asset Capital"),("Victor Lau","Erik Dahl"),("Lau","Dahl"),("Beacon Financial","Carrick Financial"),("Beacon","Carrick")]
part('Fixed Income','s1a-suess',R(0,4,10,12),pairs,[(" Dahl examines the market reaction and states:","")],[K(20)])
# --- frazee (PM Q23): information ratio and skill
IR=lambda tc,ic,n: tc*ic*math.sqrt(n)
a,b,c=IR(0.82,0.09,100),IR(0.74,0.11,64),IR(0.50,0.21,36)
assert round(a,3)==0.738 and round(b,3)==0.651 and round(c,3)==0.630
body="""Gareth Armitage is chief investment officer at Crown & Vale Capital. Armitage decides to add a fourth offering to his group of balanced funds, Fund W, which will use a custom benchmark of 60% global equities and 40% global bonds.

Armitage conducts a search to hire a manager for the global equity portion of Fund W and identifies three candidates. He asks the candidates to prepare risk and return forecasts relative to Fund W's benchmark based on their investment strategy, with the only constraint being no short selling. Each candidate develops independent annual forecasts with active return projections that are uncorrelated and constructs a portfolio made up of stocks that are diverse both geographically and across economic sectors. Selected data for the three candidates' portfolios are presented in Exhibit 1.

Exhibit 1: Forecasted Portfolio Data for Equity Portion of Fund W
# | Candidate A | Candidate B | Candidate C
Rebalancing | Annually | Annually | Annually
Number of securities | 100 | 64 | 36
Information ratio (IR) | 0.738 | 0.651 | 0.630
Transfer coefficient (TC) | 0.820 | 0.740 | 0.500
Information coefficient* | 0.09 | 0.11 | 0.21
*Information coefficient based on previously managed funds."""
part('Portfolio Management','frazee',body,[],[],[
 Nq("Based on the data presented in Exhibit 1, the candidate with the greatest skill at achieving active returns appears to be:","Candidate A.",["Candidate B.","Candidate C."],
   ["The IR measures the consistency of active return on a risk-adjusted basis; a higher IR generally indicates more skill. Candidate A has the highest IR (0.738) vs. Candidate B (0.651) and Candidate C (0.630). Candidate C has the highest IC (0.21), but its low TC (0.500) and small breadth (36 stocks) offset it.","Candidate B has a higher IC (0.11) than Candidate A, but its IR (0.651) is lower than that of Candidate A (0.738).","Candidate C has the highest IC (0.21), but its low TC (0.500) and small breadth (36 securities) give it the lowest IR (0.630)."],
   ["@row:Information ratio (IR)","greatest skill at achieving active returns"],
   "Skill in achieving active returns = highest information ratio (IR = TC × IC × √breadth); the highest IC alone does not make the most skilled manager.",fixed=False)])
# --- thornhill (Corp Q26): stock dividend
px=21.00; s=1.05
assert round(px/s,2)==20.00 and round(px*0.95,2)==19.95 and round(px*1.05,2)==22.05
body="""Marcus Delgado is CFO at Northfield Industrial Components Corporation (NIC), an industrial manufacturer that specializes in engine components in a number of established product lines. He is preparing for a meeting with members of the executive committee to discuss and prepare recommendations for the board to determine if NIC should make any changes to its dividend policy and structure over the next fiscal year.

NIC's share price closed at $21.00 yesterday. The Chief Operating Officer (COO) highlights that the company has a number of potential investments options and suggests that the company consider a 5% stock dividend instead. Delgado agrees to prepare a summary of the effect the stock dividend would have on the company's results assuming a purchase price per share based on the current market price."""
part('Corporate Issuers','corp1-thornhill',body,[],[],[
 Nq("If NIC follows the COO's suggestion, the expected share price after the stock dividend is closest to:","$20.00.",["$19.95.","$22.05."],
   ["A stock dividend leaves total market value unchanged and increases the share count, so the price falls by dividing: 21.00 ÷ 1.05 = $20.00.","This subtracts 5% from the price (21.00 × 0.95 = $19.95); the 5% applies to the number of shares, so the price is divided by 1.05.","This multiplies the price by 1.05 (21.00 × 1.05 = $22.05), which would raise the price instead of lowering it."],
   ["5% stock dividend","closed at $21.00"],"Stock dividend: total value unchanged, shares × (1 + %), so new price = old price ÷ (1 + %)."),
 ][:1])
# --- ic1-4 (FSA Q33, Q35): joint venture accounting
body="""Fairhaven Clinics, Inc. operates a chain of hospitals throughout the United States. The company has been expanding by acquiring local hospitals. Fairhaven complies with US GAAP.

Fairhaven is currently forming a 50/50 joint venture with Lakeside Care under which the companies will share control of several hospitals. Fairhaven plans to use the equity method to account for the joint venture. Lakeside Care complies with IFRS and will use the proportionate consolidation method to account for the joint venture.

Daniel Whitaker is an equity analyst who covers both companies. He has estimated the joint venture's financial information for 2018 in order to prepare his estimates of each company's earnings and financial performance. This information is presented in Exhibit 1.

Exhibit 1
Selected Financial Statement Forecasts for Joint Venture ($ Millions)
# Year ending 31 December | 2018
Revenue | 1,380
# 31 December | 2018
Total assets | 1,540"""
part('Financial Statement Analysis','ic1-4',body,[],[],[
 Nq("Based on Whitaker's estimates, the amount of joint venture revenue (in $ millions) included on Fairhaven's consolidated 2018 financial statements should be closest to:","$0.",["$690.","$1,380."],
   ["Under the equity method, Fairhaven would record its interest in the joint venture's net profit as a single line item, but would show no line-by-line contribution to revenues or expenses.","$690 is 50% of the joint venture's revenue, which is what the proportionate consolidation method (Lakeside Care) would include, not the equity method.","$1,380 is 100% of the joint venture's revenue, which would be the full consolidation of a controlled subsidiary."],
   ["Fairhaven plans to use the equity method","@row:Revenue"],"Equity method: one line (share of net income), no line-by-line revenue or assets; proportionate consolidation: your % of every line; full consolidation: 100% plus a non-controlling interest.",fixed=True),
 Nq("Based on Whitaker's estimates, the amount of the joint venture's 31 December 2018 total assets (in $ millions) that will be included on Lakeside Care's consolidated financial statements will be closest to:","$770.",["$0.","$1,540."],
   ["Under the proportionate consolidation method, Lakeside Care's consolidated financial statements will include its 50 percent share of the joint venture's total assets: 0.50 × 1,540 = 770.","$0 would be the line-by-line contribution under the equity method, which Fairhaven uses; Lakeside Care uses proportionate consolidation.","$1,540 is 100% of the joint venture's assets, which would be full consolidation."],
   ["Lakeside Care complies with IFRS and will use the proportionate consolidation method","@row:Total assets"],"Proportionate consolidation: include your ownership % of every line (assets, liabilities, revenue, expenses).",fixed=True)])
# --- sam (FI Q30, Q32): bootstrapping spot rates and binomial tree
z2=(104/(100-4/1.03))**0.5-1; z3=(105/(100-5/1.03-5/(1+z2)**2))**(1/3)-1
cp=4.5
pv=cp/1.03+cp/(1+z2)**2+(100+cp)/(1+z3)**3; pvB=cp/1.03+cp/1.04**2+(100+cp)/1.05**3; pvC=cp/1.05+cp/1.05**2+(100+cp)/1.05**3
P=round(pv+0.74,4); mis=P-pv; misB=P-pvB; misC=P-pvC
assert abs(mis-0.74)<0.0001 and len({round(mis,4),round(misB,4),round(misC,4)})==3
C=5.0
v2=[(100+C)/(1+r) for r in (0.06,0.05,0.04)]; v1u=(0.5*(v2[0]+v2[1])+C)/1.04; v1l=(0.5*(v2[1]+v2[2])+C)/1.03; v0=(0.5*(v1u+v1l)+C)/1.02
vB=v0+C; vA=C/1.02+C/1.02**2+(100+C)/1.02**3
f=lambda x:f"{x:.4f}"
body=f"""Mira Castellano is a fixed-income analyst with the hedge fund Lakeshore Asset Management (LAM). LAM invests in a variety of global fixed-income strategies, including fixed-income arbitrage. Castellano is responsible for pricing individual investments and analyzing market data to assess the opportunity for arbitrage. She uses two methods to value bonds:

Method 1: Discount each year's cash flow separately using the appropriate interest rate curve.

Method 2: Build and use a binomial interest rate tree.

Castellano uses the benchmark yield curve provided in Exhibit 1 to consider arbitrage opportunities of corporate bonds. The benchmark bonds in Exhibit 1 pay coupons annually, and the bonds are priced at par.

Exhibit 1: Benchmark Par Curve
# Maturity (years) | Yield-to-Maturity (YTM)
1 | 3.0%
2 | 4.0%
3 | 5.0%

Castellano then identifies a mispriced three-year annual coupon bond and compiles data on the bond (see Exhibit 2).

Exhibit 2: Market Data of an Annual Pay Corporate Bond
# Company | Coupon | Market Price
Whitcombe Industries Inc. | 4.5% | {f(P)}

Lastly, Castellano identifies a mispriced Norwegian bond, Bond X, a three-year bond with a 5.0% annual coupon. To calculate the bond's value, Castellano devises the first three years of the interest rate lognormal tree presented in Exhibit 3 using historical interest rate volatility data.

Exhibit 3: Interest Rate Tree—Forward Rates Based on Norwegian Market
# Node | Time 0 | Time 1 | Time 2
Upper | | 4.0% | 6.0%
Middle | 2.0% | | 5.0%
Lower | | 3.0% | 4.0%
An interest rate tree at time 0, 1 and 2. Time 0, 2.0% followed by 4.0% and 3.0% in time 1. 4.0% is followed by 6.0% and 5.0% in time 2. 3.0% is followed by 5.0% and 4.0%."""
part('Fixed Income','sam',body,[],[],[
 Nq("Based on Exhibits 1 and 2 and using Method 1, the amount (in absolute terms) by which the Whitcombe Industries Inc. corporate bond is mispriced is closest to:",f"{f(mis)} per 100 of par value.",[f"{f(misB)} per 100 of par value.",f"{f(misC)} per 100 of par value."],
   [f"Bootstrap spot rates from the par curve: z1 = 3.0%, z2 = {z2*100:.4f}%, z3 = {z3*100:.4f}%. Value of the 4.5% three-year bond = 4.5 ÷ 1.03 + 4.5 ÷ (1 + z2)² + 104.5 ÷ (1 + z3)³ = {f(pv)}. Mispricing = {f(P)} − {f(pv)} = {f(mis)}.",f"This discounts each cash flow at the par yield of its own maturity (3.0%, 4.0%, 5.0%) instead of the spot rates: value {f(pvB)}, mispricing {f(misB)}.",f"This discounts every cash flow at the flat three-year par yield of 5.0%: value {f(pvC)}, mispricing {f(misC)}."],
   ["Method 1: Discount each year's cash flow separately using the appropriate interest rate curve.","@row:2","@row:3"],
   "Method 1 with a par curve: bootstrap the SPOT rates first, then discount each cash flow at its own spot rate; compare with the market price."),
 Nq("Based on Exhibit 3 and using Method 2, the correct price for Bond X is closest to:",f"{f(v0)}",[f(vB),f(vA)],
   [f"Work backward through the tree (probability ½ each, 5.0% coupon). Time 2: 105 ÷ (1 + 6.0%, 5.0%, 4.0%) = {f(v2[0])}, {f(v2[1])}, {f(v2[2])}. Time 1: 4.0% node = {f(v1u)}; 3.0% node = {f(v1l)}. Time 0 = {f(v0)}.",f"This adds the coupon again at time 0 ({f(v0)} + 5.0), which is not part of the price today.",f"This discounts all cash flows at the current 2.0% rate instead of working through the tree: {f(vA)}."],
   ["Method 2: Build and use a binomial interest rate tree.","5.0% annual coupon","@row:Middle"],
   "Binomial tree valuation: work backward; at each node value = [½ × (V_up + V_down) + coupon] ÷ (1 + node rate); the time-0 value is the price.",fixed=True)])
# --- beaumont (PM Q37, Q39): ETFs
pairs=[("Camille Fournier","Sophie Lambert"),("Fournier","Lambert"),("Lyon Funds, LLC in Burlington, VT","Rhône Funds, LLC in Portland, ME"),("Lucas Morel","Gabriel Moreau"),("Morel","Moreau")]
part('Portfolio Management','s1b-beaumont',R(0,5,6,7),pairs,[("Lambert then asks Moreau to analyze","Lambert then asks Moreau, an analyst on her team, to analyze")],[K(37),K(39)])
