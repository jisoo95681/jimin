# Mock 10 for the Exam section (10 Nov, user request): 10 bank vignettes never used in a mock or paper given to the user, drawn at random
# (mock10_pick.py) from sub-topics (readings) away from Mock 8 and Mock 9 wherever the subject has enough readings, plus 1 Ethics unit (build.py).
# Names and numbers are changed in every vignette (all calculations recomputed below), listed items are renumbered, concept answer choices are
# reordered (balance search at the end), some definition questions are replaced by other concepts of the same reading, and text that no
# question uses is cut. Questions flagged fixed=True (calculations) keep their option order.
import json,sys,itertools,collections,random,re,copy
sys.path.insert(0,'/home/user/jimin/bank/exam')
from mock7_tweak import perm
def mkq(q,opts,ans,whys,hl,rule,fixed=False):
    why='\n'.join(f"{'ABC'[i]}. {'Correct' if i==ans else 'Incorrect'}. {w}" for i,w in enumerate(whys))
    return dict(q=q,options=opts,answer=ans,why=why,hint=dict(hl=hl,rule=rule),_fixed=fixed)
def put(correct,wrongs,idx):
    o=wrongs[:]; o.insert(idx,correct); return o
V=[]
def add(topic,body,qs):
    body=body.strip()
    for q in qs:
        for h in q['hint']['hl']:
            if not h.startswith('@row:'): assert h in body or h in q['q'],(topic,h)
        assert len(set(q['options']))==3,q['options']
    V.append(dict(topic=topic,group="new",body=body,questions=qs))
def m(x): return f"${x:,.0f}"
# ===================== 1. Alternative Investments: Martins (real estate, reading 31) =====================
P=[("Downtown Office","New York City","10 years",.88,4_400_000,220_000,290_000,410_000,.04,1_720_000),
   ("Grocery-Anchored Retail Center","Miami","7 years",.94,1_950_000,80_000,462_000,20_000,.0,0),
   ("Multi-Family Building","Boston","5 years",.96,3_300_000,165_000,0,52_000,.04,1_240_000)]
R=[]
for t,loc,age,occ,gpr,ltl,reimb,oth,pmf,opx in P:
    gri=gpr-ltl; vac=round(gri*(1-occ)); nri=gri-vac; egi=nri+reimb+oth
    if t.startswith('Grocery'): pm,ox=84_000,378_000
    else: pm,ox=round(egi*pmf),opx
    noi=egi-pm-ox; R.append(dict(t=t,loc=loc,age=age,occ=occ,gpr=gpr,ltl=ltl,gri=gri,vac=vac,nri=nri,reimb=reimb,oth=oth,egi=egi,pm=pm,ox=ox,noi=noi,ratio=(pm+ox-reimb)/egi))
assert R[1]['reimb']==R[1]['pm']+R[1]['ox']
sqft=["100,000 sf","205,000 sf","360,000 sf"]
def row(lbl,f): return f"{lbl} | "+" | ".join(f(r) for r in R)
body=f"""Sofia Martins is an alternative investment analyst for a US investment management firm, Orion Brothers. Orion's chief investment officer, Daniel Cho, has informed Martins that he wants to reduce the amount invested in traditional asset classes and gain exposure to the real estate sector by acquiring commercial property in the United States. Martins is asked to analyze potential commercial real estate investments for Orion Brothers. Selected data on three commercial real estate properties are shown in Exhibit 1.

Exhibit 1
Selected Property Data
# Property | Property 1 | Property 2 | Property 3
Property type | Downtown Office | Grocery-Anchored Retail Center | Multi-Family Building
Location | New York City | Miami | Boston
Age | 10 years | 7 years | 5 years
Occupancy | 88.00% | 94.00% | 96.00%
Gross potential rental income | {' | '.join(m(r['gpr']) for r in R)}
Loss to lease | {' | '.join('('+m(r['ltl'])+')' for r in R)}
Gross rental income | {' | '.join(m(r['gri']) for r in R)}
Vacancy loss | {' | '.join('('+m(r['vac'])+')' for r in R)}
Net rental income | {' | '.join(m(r['nri']) for r in R)}
Expense reimbursement revenue | {' | '.join(m(r['reimb']) for r in R)}
Other income (includes % rent) | {' | '.join(m(r['oth']) for r in R)}
Effective gross income | {' | '.join(m(r['egi']) for r in R)}
Property management fees | {' | '.join('('+m(r['pm'])+')' for r in R)}
Other operating expenses | {' | '.join('('+m(r['ox'])+')' for r in R)}
Net operating income | {' | '.join(m(r['noi']) for r in R)}
Martins asks Cho about the relative magnitudes of operating expenses in determining property NOI. Cho explains that the retail center in Miami is able to be fully reimbursed for its operating expenses but that the office property in New York City and the multi-family property in Boston must absorb considerable unreimbursed operating expenses.

Cho comments to Martins that these three properties may be in different phases of the real estate cycle. He specifically cites the differences between gross potential rental income and gross rental income in making his argument. In response to Cho’s comments, Martins makes the two following statements about the office building in New York City:

Statement 1:
I believe that the high vacancy rates indicate that the net operating income of the office building has the potential to improve within two years.

Statement 2:
I believe that the office market in New York City is likely to enter the recovery stage of the real estate cycle within two years.

Cho continues the conversation by commenting about the relative riskiness of various types of real estate given such developments as the COVID-19 pandemic, the movement toward remote working, and the evolution of internet-based retail.

Martins asks Cho about the appropriateness of various valuation methods on these three properties. Cho suggests that the sales comparison approach is likely to be useful, but he is particularly interested in seeing the valuation results from an income approach for each of the three properties.
"""
r1,r3=R[0],R[2]
add("Alternative Investments",body,[
 mkq("Which of the following statements is most accurate regarding the effect of unreimbursed operating expenses on the NOI of the New York City and Boston properties?",
  ["The NOI of the office property in New York City is more negatively affected by unreimbursed operating expenses than is the NOI of the multi-family property in Boston.","The NOI of the multi-family property in Boston is more negatively affected by unreimbursed operating expenses than is the NOI of the office property in New York City.","The NOIs of both properties are affected similarly by unreimbursed operating expenses."],1,
  [f"The New York City property has larger expenses in dollars, but it also has a larger income base: ({m(r1['pm']+r1['ox'])} − {m(r1['reimb'])}) ÷ {m(r1['egi'])} = {r1['ratio']*100:.1f}%.",f"Unreimbursed expenses as a share of effective gross income: Boston ({m(r3['pm']+r3['ox'])} − 0) ÷ {m(r3['egi'])} = {r3['ratio']*100:.1f}%, against {r1['ratio']*100:.1f}% for New York City, so Boston is hit harder.","The two ratios are clearly different."],
  ["must absorb considerable unreimbursed operating expenses"],"Compare unreimbursed expenses (total expenses minus reimbursement revenue) as a share of effective gross income, not in dollars.",True),
 mkq("Which of the following responses is most accurate regarding Martins’s Statement 1 and Statement 2?",
  ["Statements 1 and 2 are both accurate statements.","Statement 1 is more accurate than Statement 2.","Statement 2 is more accurate than Statement 1."],2,
  ["The statements are inconsistent in terms of the real estate cycle phase they imply, so they cannot both be accurate.","Statement 1 says NOI can improve within two years, which implies a move into the expansion phase. High vacancy points to oversupply or recession, so a short recession followed by recovery (Statement 2) is the consistent reading.","High vacancy likely means the office market is in the oversupply or recession phase. Statement 2 (recovery within two years) is consistent with that; Statement 1 (NOI already improving, expansion) skips the recovery stage."],
  ["high vacancy rates indicate","recovery stage of the real estate cycle within two years"],"High vacancy = oversupply/recession; recovery comes before expansion, so a recovery call is more accurate than an expanding-NOI call."),
 mkq("Which of the three property types faces the lowest level of relative risk factors associated with structural and technological changes in the real estate market?",
  ["Retail center in Miami","Multi-family property in Boston","Office property in New York City"],1,
  ["Retail centers face difficulties from technological change and the rise of internet-based retail.","Residential housing is more of a necessity than the other two types, so the multi-family property has the lowest risk from these structural changes.","Office properties are hurt by the structural shift toward remote working."],
  ["remote working","internet-based retail"],"Structural change hurts office (remote work) and retail (e-commerce) most; residential is a necessity."),
 mkq("Given Martins’s comment in Statement 2 about the office property in New York City, which of the following approaches to estimating property value is most appropriate?",
  ["Direct capitalization method using last year’s NOI","Direct capitalization method using a normalized NOI forecast","Sales comparison approach"],1,
  ["Last year’s NOI is not a normalized NOI when NOI is being disrupted by the real estate cycle.","Direct capitalization uses a single-period cash flow, so a property with short-term NOI disruption from the cycle needs a normalized NOI (or a DCF).","The sales comparison approach is less appropriate while a market recovery is still expected."],
  ["recovery stage of the real estate cycle within two years","income approach"],"Direct capitalization = one period of NOI: normalize NOI when the property is in a cycle disruption (or use DCF)."),
])
# ===================== 2. Equity: Hale (DDM and FCF, reading 18) =====================
D0,gS,gL,H,rr=1.80,.09,.04,5,.085
hm_t=D0*(1+gL)/(rr-gL); hm_s=D0*H*(gS-gL)/(rr-gL); hm=hm_t+hm_s; hmA=hm_t; hmC=D0*(1+gL)/(rr-gL)+D0*2*H*(gS-gL)/(rr-gL)
pay,roa,em=.40,.06,1.50; roe=roa*em; g=(1-pay)*roe; gA=(1-pay)*roa/em; gB=pay*roe
body=f"""Rebecca Hale is an analyst for a global equity mutual fund. The fund is well-diversified and holds both dividend-paying and non-dividend-paying shares. She is evaluating three of the fund's holdings.

One holding is Canada-based Brisa, a profitable non-dividend-paying company that is viewed by the market as an acquisition target. Hale expects Brisa's level of corporate debt to change significantly over time. Because Brisa reports a number of items through other comprehensive income, its net income does not always fully reflect underlying economic conditions. Hale considers the type of model she should use to value Brisa.

A second holding, UK-based Orlin, currently pays an annual dividend of £{D0:.2f} per share. Dividends are initially expected to grow at an annual rate of {gS*100:.0f}%, but then decline linearly during a {2*H}-year period to a final and perpetual annual growth rate of {gL*100:.0f}%. Orlin's required return on equity is {rr*100:.2f}%. Hale uses the H-model to value Orlin.

A third holding, France-based Tamsen, is in a mature growth phase. Tamsen has a dividend payout ratio of {pay*100:.0f}%, a return on assets of {roa*100:.2f}%, and an equity multiplier of {em:.2f}. Upon further analysis, Hale concludes that Tamsen is over valued."""
add("Equity Valuation",body,[
 mkq("Which of the following is the most appropriate model for Hale to use in valuing Brisa?",["Free cash flow to equity","Free cash flow to the firm","Residual income"],1,
  ["FCFE suits a stable capital structure; Brisa's debt level is expected to change significantly, which makes FCFF the better choice.","Brisa is profitable, non-dividend-paying and an acquisition target (a control perspective), and its debt will change significantly: FCFF is the most appropriate model.","Residual income is less appropriate here because Brisa reports a number of items through other comprehensive income, which distorts reported net income."],
  ["viewed by the market as an acquisition target","level of corporate debt to change significantly"],"Control perspective + changing leverage → FCFF; residual income is distorted by OCI items."),
 mkq("Based on the H-model, Orlin's value per share is closest to:",[f"£{hm_t:.2f}.",f"£{hm:.2f}.",f"£{hmC:.2f}."],1,
  [f"It is only the first term, the value if dividends grew at {gL*100:.0f}% forever: {D0:.2f} × {1+gL:.2f} ÷ ({rr:.4f} − {gL:.2f}) = £{hm_t:.2f}. The extra value from the high-growth years is missing.",f"V0 = D0(1 + gL)/(r − gL) + D0 × H × (gS − gL)/(r − gL), with H = {2*H} ÷ 2 = {H}: {D0:.2f} × {1+gL:.2f} ÷ {rr-gL:.3f} + {D0:.2f} × {H} × {gS-gL:.2f} ÷ {rr-gL:.3f} = {hm_t:.2f} + {hm_s:.2f} = £{hm:.2f}.",f"It uses the full {2*H}-year period as H instead of half of it ({H}): {hm_t:.2f} + {D0:.2f} × {2*H} × {gS-gL:.2f} ÷ {rr-gL:.3f} = £{hmC:.2f}."],
  ["decline linearly during a 10-year period","uses the H-model"],"H-model: V0 = D0(1 + gL)/(r − gL) + D0 × H × (gS − gL)/(r − gL), where H is HALF the length of the transition.",True),
 mkq("Tamsen's sustainable dividend growth rate is closest to:",[f"{gA*100:.1f}%.",f"{gB*100:.1f}%.",f"{g*100:.1f}%."],2,
  [f"The equity multiplier was divided into ROA instead of multiplied: {roa*100:.1f}% ÷ {em:.2f} = {roa/em*100:.1f}%, then × {1-pay:.2f} = {gA*100:.1f}%.",f"It uses the payout ratio instead of the retention ratio: {pay:.2f} × {roe*100:.1f}% = {gB*100:.1f}%.",f"ROE = ROA × equity multiplier = {roa*100:.2f}% × {em:.2f} = {roe*100:.1f}%. Retention ratio = 1 − {pay:.2f} = {1-pay:.2f}. g = {1-pay:.2f} × {roe*100:.1f}% = {g*100:.1f}%."],
  ["dividend payout ratio of 40%","equity multiplier of 1.50"],"g = retention ratio × ROE, with ROE = ROA × equity multiplier.",True),
 mkq("Based on Hale's analysis, the share price of Tamsen would be expected to grow at:",["the same rate as its dividends.","a slower rate than its dividends.","a faster rate than its dividends."],1,
  ["The price grows at the dividend growth rate only when it equals its value; Tamsen is overvalued, not fairly valued.","An overvaluation is corrected by the price growing more slowly than dividends.","A faster rate would correct an undervaluation, not an overvaluation."],
  ["Tamsen is over valued"],"Mispricing is corrected through the growth rate: overvalued → price grows slower than dividends; undervalued → faster."),
])
# ===================== 3. Economics: Weston (exchange rates, reading 5) =====================
usd_b,usd_o=1.0860,1.0866; jpy_b,jpy_o=148.20,148.28
imp_b,imp_o=usd_b*jpy_b,usd_o*jpy_o
dl_b,dl_o=161.30,161.34
assert dl_b>imp_o
sp,rus,rnz=0.6214,0.012,0.024
f_ok=sp*(1+rus/2)/(1+rnz/2); f_ann=sp*(1+rus)/(1+rnz); f_inv=sp*(1+rnz/2)/(1+rus/2)
b0,rus1,rbr,s1=5.0200,.015,.1025,5.1000
cc=(1000*b0*(1+rbr)/s1-1000*(1+rus1))/1000; cc_noborrow=(1000*b0*(1+rbr)/s1-1000)/1000
body=f"""Clara Weston is a currency trader for a US-based hedge fund. She reviews interbank bid-offer quotes in Exhibit 1 (USD/EUR is the number of USD per 1 EUR; JPY/USD is the number of JPY per 1 USD). Weston determines if an arbitrage profit is possible for the fund based on a dealer's bid/offer rate quote of {dl_b:.2f}/{dl_o:.2f} in JPY/EUR.
Exhibit 1
# Currency Pair | Interbank Bid | Interbank Offer
USD/EUR | {usd_b:.4f} | {usd_o:.4f}
JPY/USD | {jpy_b:.2f} | {jpy_o:.2f}
The hedge fund considers hedging a New Zealand dollar (NZD) 1,000,000 coupon payment it will receive in six months. Weston calculates the 6-month forward USD/NZD (number of USD per 1 NZD) exchange rate implied by covered interest rate parity. Note that MRR is the market reference rate.
6-month annualized MRR in the US is {rus*100:.2f}%
6-month annualized MRR in New Zealand is {rnz*100:.2f}%
The spot mid-market currency quote for USD/NZD is {sp:.4f}
Weston next considers a 1-year carry trade that involves borrowing the USD and investing in the Brazilian real (BRL). She computes the all-in return (measured in USD terms) of the carry trade using the following information:
Spot mid-market quote for the BRL/USD is {b0:.4f}
1-year MRR in the US is {rus1*100:.2f}%
1-year MRR in Brazil is {rbr*100:.2f}%
The BRL/USD exchange rate in one year is {s1:.4f}
Finally, Weston is concerned about a currency crisis in emerging market Country K. She notes the following conditions about the country:
Condition 1: A sizable decline in the ratio of foreign exchange (FX) reserve holdings to average daily FX turnover in their domestic currency
Condition 2: A slight decline of foreign investment in its equity market
Condition 3: Broad money growth and a decline in the ratio of M2 (a measure of money supply) to bank reserves"""
add("Economics",body,[
 mkq("Based on the dealer's JPY/EUR quote, is there an arbitrage opportunity for the hedge fund?",["Yes, by purchasing EUR from the dealer and selling EUR in the interbank market","Yes, by purchasing EUR in the interbank market and selling EUR to the dealer","No"],1,
  [f"The dealer sells EUR at JPY{dl_o:.2f}, above the interbank bid ({imp_b:.2f}), so buying from the dealer loses money; the arbitrage runs the opposite way.",f"Implied interbank JPY/EUR: bid {usd_b:.4f} × {jpy_b:.2f} = {imp_b:.2f}; offer {usd_o:.4f} × {jpy_o:.2f} = {imp_o:.2f}. The dealer's bid ({dl_b:.2f}) is above the interbank offer ({imp_o:.2f}), so buy EUR in the interbank market at {imp_o:.2f} and sell them to the dealer at {dl_b:.2f}.","The dealer's bid is above the implied interbank offer, so there is an arbitrage opportunity."],
  ["dealer's bid/offer rate quote"],"Cross rate: JPY/EUR = USD/EUR × JPY/USD (bid × bid, offer × offer). Arbitrage when the dealer's bid is above the interbank offer or the dealer's offer is below the interbank bid.",True),
 mkq("Based on covered interest rate parity, the 6-month forward USD/NZD exchange rate is closest to:",[f"{f_ann:.4f}.",f"{f_ok:.4f}.",f"{f_inv:.4f}."],1,
  [f"It uses the annual rates instead of the 6-month rates: {sp:.4f} × (1 + {rus:.3f}) ÷ (1 + {rnz:.3f}) = {f_ann:.4f}.",f"F = S0 × (1 + r_US/2) ÷ (1 + r_NZD/2) = {sp:.4f} × (1 + {rus/2:.4f}) ÷ (1 + {rnz/2:.4f}) = {f_ok:.4f}.",f"The ratio of interest rates is inverted: {sp:.4f} × (1 + {rnz/2:.4f}) ÷ (1 + {rus/2:.4f}) = {f_inv:.4f}."],
  ["6-month forward USD/NZD","covered interest rate parity"],"F(price/base) = S × (1 + r_price)/(1 + r_base), with the rates for the actual period (6 months = half the annual rate). Higher-rate currency trades at a forward discount.",True),
 mkq("The all-in return for the carry trade, measured in USD terms, is closest to:",[f"{cc*100:.2f}%.",f"{cc_noborrow*100:.2f}%.",f"{rbr*100:.2f}%."],0,
  [f"Borrow $1,000 at {rus1*100:.2f}%: owe $1,015. Convert at {b0:.4f}: BRL {1000*b0:,.0f}. Invest at {rbr*100:.2f}%: BRL {1000*b0*(1+rbr):,.2f}. Convert at {s1:.4f}: ${1000*b0*(1+rbr)/s1:,.2f}. Net = {1000*b0*(1+rbr)/s1:,.2f} − 1,015.00 = ${1000*b0*(1+rbr)/s1-1015:,.2f}, or {cc*100:.2f}%.",f"It does not deduct the cost of borrowing USD: ({1000*b0*(1+rbr)/s1:,.2f} − 1,000) ÷ 1,000 = {cc_noborrow*100:.2f}%.",f"{rbr*100:.2f}% is only the Brazilian interest rate; it ignores the currency move and the USD borrowing cost."],
  ["borrowing the USD and investing in the Brazilian real"],"Carry trade return in the funding currency = (end value of the foreign investment converted back) − (loan with interest).",True),
 mkq("Which of the following conditions would most likely be a warning sign of a currency crisis in Country K?",["Condition 1","Condition 2","Condition 3"],0,
  ["Foreign exchange reserves tend to fall sharply as a crisis approaches; Condition 1 describes exactly that, and the vignette says it applies to Country K.","A large inflow of foreign capital typically precedes a crisis; a slight decline of foreign investment is not the warning sign.","Broad money growth and the ratio of M2 to bank reserves tend to RISE before a crisis; here they declined, which is not a warning."],
  ["sizable decline in the ratio of foreign exchange (FX) reserve holdings"],"Crisis warnings: FX reserves falling, M2/reserves rising, strong prior capital inflows and credit growth, overvalued currency."),
])
# ===================== 4. Portfolio Management: Hale-ETF (ETFs, reading 36) =====================
fee,hm_,comm,spr=.40,7,.16,.08
tot=hm_/12*fee+comm+spr; totA=fee+comm+spr; totB=hm_/12*fee+comm+2*spr
body=f"""Marcus Pryce is a senior portfolio strategist for an endowment fund. Pryce meets with recently hired junior analyst Peter Lind to review the fund’s holdings.

Lind is evaluating three ETFs for potential investment. He notes that the ETFs have different portfolio characteristics that are likely to affect each ETF’s tracking error. A summary of the characteristics for the ETFs is presented in Exhibit 1.

Exhibit 1
ETF Characteristics Affecting Tracking Error
#   | ETF 1 | ETF 2 | ETF 3
Portfolio Construction Approach | Representative Sampling | Full Replication | Full Replication
Type of Foreign Holdings | ADRs* | Local shares | ADRs*
Engagement in Securities Lending | Yes | Yes | No
*ADRs are American Depositary Receipts.
Pryce and Lind discuss the factors that influence ETF bid–ask spreads. Lind tells Pryce that quoted bid–ask spreads for a particular transaction size are (1) positively related to the costs and risks for the ETF liquidity provider, (2) positively related to the amount of competition among market makers for the ETF, and (3) negatively related to the amount of the ongoing order flow in the ETF.

As ETF shares may trade at prices that are different from the NAV, Pryce examines selected data in Exhibit 2 for three ETFs that might have this problem.

Exhibit 2
Selected Data on ETFs
#   | ETF 4 | ETF 5 | ETF 6
Percentage of Foreign Holdings | 85% | 45% | 15%
Trading Frequency | Low | Low | High
Pryce considers a new ETF investment for the fund. He plans to own the ETF for {hm_} months. The ETF has the following trading costs and management fees:

Annual management fee of {fee:.2f}%

Round-trip trading commissions of {comm:.2f}%

Bid–offer spread of {spr:.2f}% on purchase and sale

Pryce asks Lind to compute the expected total holding period cost for investing in the ETF."""
add("Portfolio Management",body,[
 mkq("Which ETF in Exhibit 1 is most likely to have the lowest tracking error?",["ETF 1","ETF 2","ETF 3"],1,
  ["Representative sampling and ADRs both add tracking error.","Full replication, local shares (no trading-hour mismatch with ADRs) and securities lending income that offsets part of the fund expenses give ETF 2 the lowest expected tracking error.","ETF 3 uses full replication but holds ADRs, whose different trading hours create discrepancies, and it earns no lending income."],
  ["Full Replication","Local shares"],"Lower tracking error: full replication, local shares instead of ADRs, securities lending income."),
 mkq("Lind’s statement about quoted bid–ask spreads is incorrect with respect to the:",["amount of competition among market makers for the ETF.","amount of the ongoing order flow in the ETF.","costs and risks for the ETF liquidity providers."],0,
  ["More competition among market makers narrows the spread: the relation is NEGATIVE, so Lind's statement (2) is incorrect.","More order flow lowers spreads (negative relation); Lind is right.","Higher costs and risks for the liquidity provider widen the spread (positive relation); Lind is right."],
  ["(2) positively related to the amount of competition among market makers for the ETF"],"Bid–ask spread: negative with order flow, negative with competition among market makers, positive with the liquidity provider's costs and risks."),
 mkq("Which ETF in Exhibit 2 is most likely to trade at the largest premium or discount relative to NAV?",["ETF 4","ETF 5","ETF 6"],0,
  ["ETF 4 trades infrequently and has the highest percentage of foreign holdings, so NAV is stale and mismatched with the ETF's trading hours: the largest premium or discount.","ETF 5 has low trading frequency but a smaller share of foreign holdings than ETF 4.","ETF 6 trades frequently and has the lowest share of foreign holdings."],
  ["Percentage of Foreign Holdings","Trading Frequency"],"Premium/discount to NAV is larger for infrequently traded ETFs and ETFs with many foreign holdings (closing-time differences)."),
 mkq("Excluding the compounding effect, the expected total holding period cost for investing in the ETF over a seven-month holding period is closest to:",[f"{tot:.2f}%.",f"{totB:.2f}%.",f"{totA:.2f}%."],0,
  [f"Total cost = ({hm_}/12) × {fee:.2f}% + {comm:.2f}% + {spr:.2f}% = {hm_/12*fee:.4f}% + {comm:.2f}% + {spr:.2f}% = {tot:.2f}%.",f"It counts the bid–offer spread twice ({2*spr:.2f}%): {hm_/12*fee:.4f}% + {comm:.2f}% + {2*spr:.2f}% = {totB:.2f}%.",f"It does not prorate the annual management fee for {hm_} months: {fee:.2f}% + {comm:.2f}% + {spr:.2f}% = {totA:.2f}%."],
  ["Annual management fee of 0.40%","Round-trip trading commissions of 0.16%"],"Holding cost = (months ÷ 12) × annual fee + round-trip commissions + bid–offer spread (the round-trip spread already covers purchase and sale).",True),
])
# ===================== 5. Corporate Issuers: Ferrara (dividends and repurchases, reading 13) =====================
sp_ni,sp_sh,sp_cash,sp_px,sp_pr=150,100,720,30.0,.12
rp=sp_px*(1+sp_pr); nb=sp_cash/rp; eps0=sp_ni/sp_sh; eps1=sp_ni/(sp_sh-nb); inc=eps1/eps0-1
nb0=sp_cash/sp_px; inc0=sp_ni/(sp_sh-nb0)/eps0-1
be,cashA,de=4200,210,.30; debt=be*de; de_c=debt/(be-cashA); de_d=(debt+cashA)/(be-cashA)
body=f"""Nina Ferrara is a financial adviser to high-net-worth individuals. She is currently reviewing the equity portfolio of a client and is considering adding new securities to it, as the client has indicated a preference for more income-producing securities. With this in mind, Ferrara takes a closer look at Belmont Corporation (“Belmont”), a chain of Canadian boutiques that has recently registered unusually high sales, resulting in large increases in the company’s cash balance. Belmont’s current stock price is C$52.10. Exhibit 1 shows earnings and dividends for the preceding four years.

Exhibit 1 Belmont Corporation Earnings and Dividend History
#   | 2013 | 2014 | 2015 | 2016
EPS | C$1.52 | C$1.55 | C$1.49 | C$1.58
DPS | C$0.30 | C$0.32 | C$0.32 | C$0.32
Ferrara reviews analysts’ reports. She notes the significant change in cash due to the high sales volume and wonders whether that will prompt a dividend increase. However, most analysts have stated that because the industry is cyclical, the increase in sales is believed to be temporary.

Ferrara asks her assistant, Tom Reyes, to investigate whether Belmont might use its surplus cash for a share repurchase rather than for dividends. Reyes believes that looking at other companies that have completed share repurchases could be helpful to his analysis. He looks at the history of RapidServ Inc. (“RapidServ”), a US-based industrial services company whose business depends heavily on the petroleum exploration and production sector. RapidServ made its first share repurchase in early 2017 using surplus cash. RapidServ’s selected financial information just prior to the repurchase is shown in Exhibit 2.

Exhibit 2 RapidServ, Inc. Selected Financial Information as of Year-End 2016
Net income | ${sp_ni} million
EPS | ${eps0:.2f}
Shares outstanding | {sp_sh} million
Details of shares repurchase |
Cash available for repurchase | ${sp_cash} million
Share price at the time of repurchase | ${sp_px:.2f}
Premium over current share price for repurchase | {sp_pr*100:.1f}%
Reyes returns to Ferrara to continue the discussion. Ferrara explains to Reyes that a complete analysis of the impact of a share repurchase should also include an evaluation of the effects on leverage. She points out that Belmont’s most recent bond issue includes a covenant that limits the company’s debt-to-equity ratio to 35%. She asks Reyes to prepare an analysis for Belmont, using the information in Exhibit 3, to see if the debt covenant will be violated if the company repurchases shares.

Exhibit 3 Belmont Corporation Selected Financial Information as of Year-End 2016
# Book value of equity | C${be:,} million
Cash available for repurchase | C${cashA} million
Debt-to-equity ratio | {de*100:.1f}%"""
add("Corporate Issuers",body,[
 mkq("Based on Exhibit 1, Belmont’s current dividend policy is best described as a:",["residual dividend policy.","stable dividend policy.","constant dividend payout ratio policy."],1,
  ["A residual policy pays out whatever is left after capital spending and leads to volatile dividends; Belmont's dividend is not volatile.","The dividend has been held at C$0.32 for three years although EPS moved up and down: a stable dividend policy.","A constant payout ratio would make the dividend rise and fall with EPS."],
  ["Exhibit 1 shows earnings and dividends"],"Dividend flat while earnings vary = stable policy; dividend moving with earnings = constant payout; dividend = leftover cash = residual."),
 mkq("If the analysts’ beliefs about the increase in sales are correct, the change in dividend policy that Belmont would most likely make would be to:",["increase the quarterly dividend amount.","declare a special dividend.","cut the quarterly dividend in anticipation of next year’s sales forecast."],1,
  ["Companies avoid raising the regular dividend unless they can keep paying at or above that level, and the sales increase is temporary.","A temporary increase in cash is best handled with a special (extra) dividend, especially in a cyclical industry.","Cutting the dividend would signal weakness; the company has surplus cash."],
  ["the increase in sales is believed to be temporary"],"Temporary extra cash → special dividend or repurchase, not a higher regular dividend."),
 mkq("If RapidServ had used all of its surplus cash to repurchase its shares, based on Exhibit 2, the percentage increase in EPS would have been closest to:",[f"{sp_pr*100:.0f}%.",f"{inc*100:.0f}%.",f"{inc0*100:.0f}%."],1,
  [f"It applies the price premium ({sp_pr*100:.0f}%) to EPS.",f"Repurchase price = ${sp_px:.2f} × {1+sp_pr:.2f} = ${rp:.2f}; shares repurchased = ${sp_cash} million ÷ ${rp:.2f} = {nb:.2f} million; shares after = {sp_sh-nb:.2f} million; EPS after = ${sp_ni} million ÷ {sp_sh-nb:.2f} million = ${eps1:.2f}; increase = {eps1:.2f} ÷ {eps0:.2f} − 1 = {inc*100:.0f}%.",f"It ignores the repurchase premium (buys at ${sp_px:.2f}): {nb0:.2f} million shares, EPS ${sp_ni/(sp_sh-nb0):.2f}, +{inc0*100:.0f}%."],
  ["Premium over current share price for repurchase","Cash available for repurchase"],"Repurchase price = price × (1 + premium); shares retired = cash ÷ repurchase price; new EPS = net income ÷ remaining shares.",True),
 mkq("The best answer to Ferrara’s question about the potential violation of the debt covenants is that the covenant:",["is not violated if Belmont repurchases shares.","will be violated if Belmont uses surplus cash to finance the repurchase.","will be violated if Belmont uses debt to finance the repurchase."],2,
  ["The covenant is violated when the repurchase is financed with debt.",f"With cash, D/E = C${debt:,.0f} ÷ (C${be:,} − C${cashA}) = {de_c*100:.1f}%, below the 35% limit.",f"Debt = {de*100:.0f}% × C${be:,} = C${debt:,.0f} million. With a debt-financed repurchase D/E = (C${debt:,.0f} + C${cashA}) ÷ (C${be:,} − C${cashA}) = {de_d*100:.1f}%, above 35%: violated."],
  ["limits the company’s debt-to-equity ratio to 35%"],"Cash repurchase: debt unchanged, equity falls. Debt-financed repurchase: debt rises and equity falls, so D/E rises more.",True),
])
# ===================== 6. FSA: Walsh (financial reporting quality, reading 12) =====================
rev=[820,740,660]; turn=[1.40,1.35,1.30]; liab=[270,245,220]
assets=[r/t for r,t in zip(rev,turn)]; eqy=[a-l for a,l in zip(assets,liab)]; lev=[a/e for a,e in zip(assets,eqy)]
assert lev[0]>lev[1]>lev[2] and lev[0]/lev[2]>1.04
cap=[24.8,37.4,37.8]; aset=[27.1,30.5,42.4]; ratio=[c/a for c,a in zip(cap,aset)]
body=f"""Greta Walsh is a financial analyst who is examining the most recent annual report of Westbrook Inc., a US-based company that complies with US GAAP. Walsh wants to determine Westbrook's ROE as well as the trend in its ROE components by using DuPont analysis. Data used for this purpose is presented in Exhibit 1.
Exhibit 1
#   | Most Recent Year | Previous Year | Two Years Ago
Revenue (USD million) | {rev[0]} | {rev[1]} | {rev[2]}
Total liabilities (USD million) | {liab[0]} | {liab[1]} | {liab[2]}
Total asset turnover ratio | {turn[0]:.2f} | {turn[1]:.2f} | {turn[2]:.2f}
Walsh also wants to evaluate Westbrook's three geographic operating segments to assess their ROI and growth during the most recent year. For this purpose, she prepares the data presented in Exhibit 2 for the most recent year.
Exhibit 2
#   | Europe | Asia | Americas
Segment EBIT margin % | 11.9 | 12.6 | 13.4
Segment % of total assets | {aset[0]} | {aset[1]} | {aset[2]}
Segment % of total capital expenditures | {cap[0]} | {cap[1]} | {cap[2]}
Next, while reading the notes to the financial statements in the annual report, Walsh observes that Westbrook's property, plant and equipment have depreciable lives that are 25% longer than its industry competitors' average. For comparison purposes, Walsh adjusts the financial statements to determine the effect of the difference on the company's financial ratios and information.
Finally, in order to assess Westbrook's accruals and earnings quality, Walsh calculates the balance-sheet-based accruals ratio presented in Exhibit 3.
Exhibit 3
#   | Most Recent Year | Previous Year | Two Years Ago
Balance-sheet-based accruals ratio (%) | 8.4 | 5.2 | 3.6"""
add("Financial Statement Analysis",body,[
 mkq("Based on the 3 years of data provided for DuPont analysis, Westbrook's financial leverage has been:",["stable.","trending higher.","trending lower."],1,
  ["The ratio is clearly moving in one direction, so it is not stable.",f"Total assets = revenue ÷ asset turnover: {rev[0]}/{turn[0]:.2f} = {assets[0]:.1f}; {rev[1]}/{turn[1]:.2f} = {assets[1]:.1f}; {rev[2]}/{turn[2]:.2f} = {assets[2]:.1f}. Equity = assets − liabilities: {eqy[0]:.1f}; {eqy[1]:.1f}; {eqy[2]:.1f}. Financial leverage = assets ÷ equity: {lev[0]:.3f}; {lev[1]:.3f}; {lev[2]:.3f}: trending higher.","The ratio rises over the three years, so it is not trending lower."],
  ["Total asset turnover ratio","Total liabilities"],"Financial leverage = total assets ÷ equity; assets = revenue ÷ asset turnover, equity = assets − liabilities.",True),
 mkq("Based on the segment information, Westbrook is growing its business the most in:",["Europe.","Asia.","Americas."],1,
  [f"Europe: capital expenditures % ÷ assets % = {cap[0]}/{aset[0]} = {ratio[0]:.2f}, below 1.",f"Asia has the highest ratio of capital expenditures % to total assets %: {cap[1]}/{aset[1]} = {ratio[1]:.2f}. A ratio above 1 means the segment receives more investment than its share of assets, a sign of growth.",f"Americas: {cap[2]}/{aset[2]} = {ratio[2]:.2f}, below 1."],
  ["Segment % of total capital expenditures","Segment % of total assets"],"Segment growth = capital expenditures % ÷ total assets %; highest ratio = fastest growing, not the highest EBIT margin.",True),
 mkq("After Walsh makes the adjustment for Westbrook's treatment of its property, plant and equipment, which of the following will increase?",["Book value per share","Operating profit margin","Debt-to-equity ratio"],2,
  ["Longer depreciable lives mean lower depreciation than peers; adjusting to peer lives raises depreciation, lowers net income and equity, so book value per share decreases.","The adjustment raises depreciation expense, so operating profit margin decreases.","Shareholders' equity falls while total debt is unchanged, so the debt-to-equity ratio increases."],
  ["depreciable lives that are 25% longer than its industry competitors' average"],"Depreciation raised to peer lives → lower income, lower equity: D/E and leverage up; BVPS and margins down."),
 mkq("Based on Walsh's calculations, Westbrook's balance-sheet-based accruals ratio is:",["trending lower and improving.","trending higher and deteriorating.","trending lower and deteriorating."],1,
  ["The ratio rises (3.6, 5.2, 8.4), it does not fall.","The ratio increases over the three years, which means accruals are an increasing factor in earnings: deteriorating earnings quality.","The ratio is rising, not falling."],
  ["balance-sheet-based accruals ratio"],"Rising accruals ratio = more of earnings from accruals (not cash) = deteriorating earnings quality."),
])
# ===================== 7. Equity: Moretti (residual income, reading 21) =====================
ta,td,ebit,tax,kd,ke=4800,2400,650,.20,.05,.125
intr=td*kd; pt=ebit-intr; ni=pt*(1-tax); eqb=ta-td; ri=ni-eqb*ke; roe_=ni/eqb
price,pb=62.00,1.60; b0_=price/pb; ig=ke-((roe_-ke)*b0_)/(price-b0_); ig_a=roe_-ke; ig_c=ke
nopat=ebit*(1-tax); wacc_=(td*kd*(1-tax)+eqb*ke)/ta; ri_c=nopat-wacc_*ta
B0,ri1,ri2,BT,PT,kE,wc=21.40,2.60,2.30,27.10,30.20,.115,.07
v0=B0+ri1+ri2+(PT-BT)/(1+kE)**2; v0A=B0+ri1+ri2+(PT-BT)/(1+wc)**2; v0C=B0+ri1+ri2+(PT-BT)
body=f"""Alina Moretti, an equity analyst, is reviewing preliminary research reports developed by her team for two wireless telecommunications companies: WaveLink and NetSphere.
WaveLink
After reviewing the preliminary report for WaveLink, Moretti decides to revise it slightly. She notes that interest expense is tax-deductible and collects the selected financial data for WaveLink shown in Exhibit 1.
Exhibit 1
Book value of total assets at beginning of the year (millions) | €{ta:,}
Book value of total debt at beginning of the year (millions) | €{td:,}
EBIT (millions) | €{ebit}
Corporate tax rate | {tax*100:.1f}%
ROE | {roe_*100:.1f}%
Cost of equity | {ke*100:.1f}%
Pretax cost of debt | {kd*100:.1f}%
Market price per share | €{price:.2f}
P/B ratio | {pb:.2f}
Assuming the clean surplus relation holds, Moretti uses the data in Exhibit 1 to calculate residual income for the year and then estimates the implied growth rate of earnings for WaveLink based on the current market price.
NetSphere
Moretti first notes that the team's preliminary report on NetSphere uses a multistage residual income model with a persistence factor of 0.18, one-third of the industry average of 0.54.
Moretti next assumes the clean surplus relation holds, and uses the data in Exhibit 2 to update the report based on a finite-horizon multistage residual income model.
Exhibit 2
Current book value per share | €{B0:.2f}
Present value of residual income per share for Year 1 | €{ri1:.2f}
Present value of residual income per share for Year 2 | €{ri2:.2f}
Forecasted book value per share at end of Year 2 | €{BT:.2f}
Forecasted market price per share at end of Year 2 | €{PT:.2f}
Cost of equity | {kE*100:.1f}%
WACC | {wc*100:.1f}%"""
add("Equity Valuation",body,[
 mkq("The residual income for WaveLink is closest to:",[f"€{ri-100:,.0f} million.",f"€{ri:,.0f} million.",f"€{ri+120:,.0f} million."],1,
  [f"It does not follow from either residual income method.",f"Net income = (EBIT − interest) × (1 − t) = ({ebit} − {intr:.0f}) × {1-tax:.2f} = {ni:,.0f}. Equity = {ta:,} − {td:,} = {eqb:,}; equity charge = {eqb:,} × {ke:.3f} = {eqb*ke:,.0f}. Residual income = {ni:,.0f} − {eqb*ke:,.0f} = €{ri:,.0f} million.","It does not follow from either residual income method."],
  ["calculate residual income for the year"],"Residual income = net income − equity charge (cost of equity × beginning book value of equity).",True),
 mkq("Based on the single-stage residual income model, the implied growth rate of earnings for WaveLink is closest to:",[f"{ig_a*100:.1f}%.",f"{ig*100:.1f}%.",f"{ig_c*100:.1f}%."],1,
  [f"{ig_a*100:.1f}% is only the difference between ROE and the cost of equity.",f"Book value per share B0 = {price:.2f} ÷ {pb:.2f} = {b0_:.2f}. Solving V0 = B0 + B0(ROE − r)/(r − g) for g: g = r − [(ROE − r) × B0] ÷ (V0 − B0) = {ke:.3f} − [({roe_:.4f} − {ke:.3f}) × {b0_:.2f}] ÷ ({price:.2f} − {b0_:.2f}) = {ig*100:.1f}%.",f"{ig_c*100:.1f}% is the cost of equity; growth must be below it."],
  ["implied growth rate of earnings"],"Implied g from the single-stage RI model: g = r − [(ROE − r) × B0] ÷ (V0 − B0).",True),
 mkq("Relative to the industry, the persistence factor used in the preliminary report on NetSphere is most consistent with the firm having:",["higher levels of accounting accruals.","lower levels of dividend payouts.","lower levels of accounting returns."],0,
  ["A persistence factor below the industry average is consistent with high or extreme accounting accruals.","Low dividend payout is associated with HIGHER residual income persistence.","High or extreme accounting returns (ROE) are associated with lower persistence; low returns are not."],
  ["persistence factor of 0.18","industry average of 0.54"],"Low persistence: extreme ROE, high accruals, high dividend payout; high persistence: low payout, stable accounting returns."),
 mkq("Based on the finite-horizon multistage residual income model, NetSphere's intrinsic value per share is closest to:",[f"€{v0:.2f}.",f"€{v0A:.2f}.",f"€{v0C:.2f}."],0,
  [f"V0 = B0 + PV(RI1) + PV(RI2) + (PT − BT) ÷ (1 + r)² = {B0:.2f} + {ri1:.2f} + {ri2:.2f} + ({PT:.2f} − {BT:.2f}) ÷ {1+kE:.3f}² = €{v0:.2f}.",f"It discounts the premium over book value at the WACC ({wc*100:.1f}%) instead of the cost of equity: €{v0A:.2f}.",f"It does not discount the terminal premium over book value: €{v0C:.2f}."],
  ["finite-horizon multistage residual income model","Cost of equity"],"Finite-horizon RI: V0 = B0 + PV of residual incomes + PV of (terminal price − terminal book value), all discounted at the cost of equity.",True),
])
# ===================== 8. Quantitative Methods: Duarte (time series, reading 2) =====================
body="""Rafael Duarte, a research analyst at Lisbon Securities, is studying the time-series behavior of price-to-earnings ratios (P/Es) computed with trailing 12-month earnings (Etrailing). He and his assistant, Priya Nair, are reviewing the results of the ordinary least squares time series regression shown in Exhibit 1.

Exhibit 1
Results of Regression of P/E on Lagged P/E (P/Et = b0 + b1P/Et–1 + εt)
#   | Coefficient | Standard Error | t | Significance of t
Constant (b0) | 0.118 | 0.162 | 0.728 | 0.234
Lagged P/E (b1) | 0.994 | 0.003 | 331.333 | 0
R2 | Standard Error of the Estimate | Durbin–Watson | F | Significance of F
0.082 | 1.51204 | 2.067 | 142.410 | 0

Duarte states: "This regression is a special case of a first-order autoregressive [AR(1)] model in which the value for b0 is close to zero and the value of b1 is close to 1. These values suggest that the time series is a random walk."

Nair replies: "I'm convinced the P/E series based on trailing earnings truly is a random walk."

Nair and Duarte next examine the behavior of P/Es calculated using forward 12-month earnings (Eforward). Nair estimates another AR(1) model but uses the forward P/E values this time. She denotes the errors from this second regression as ηt. She states: "The presence of first-order autoregressive conditional heteroskedasticity [ARCH(1)] errors in this regression is highly likely given the results reported in Exhibit 2."

Exhibit 2
Results of Regression of Squared Residuals, ηt², on Lagged Squared Residuals, ηt−1² (ηt² = c0 + c1ηt−1² + ut)
#   | Coefficient | Standard Error | t | Significance of t
Constant (c0) | 0.312 | 0.041 | 7.610 | 0
Lag 1 (c1) | 0.241 | 0.025 | 9.640 | 0
R2 | Standard Error of the Estimate | Durbin–Watson | F | Significance of F
0.058 | 1.51204 | 2.067 | 92.930 | 0

After further discussion, Duarte proposes that he and Nair incorporate more variables into the analysis. He suggests they use a variation of the Fed model, in which the earnings-to-price ratio (E/P) is regressed on long-term interest rates.

Duarte cautions Nair: "Remember that when we analyze two time series in regression analysis, we need to ensure that:

Condition 1: both series have a unit root and are not cointegrated, or
Condition 2: neither the dependent variable series nor the independent variable series has a unit root.

Unless Condition 1 or Condition 2 holds, we cannot rely on the validity of the estimated regression coefficients."
"""
add("Quantitative Methods",body,[
 mkq("Duarte's statement that the coefficients depicted in Exhibit 1 are consistent with a random walk is most likely:",["incorrect because b1 should be close to 0.","correct.","incorrect because b0 should be close to 1."],1,
  ["For a random walk, the slope on the lagged value is close to 1, not 0.","A random walk estimated as an AR(1) has an intercept near zero and a slope near 1; b0 = 0.118 and b1 = 0.994 fit.","For a random walk the intercept is near 0, not 1."],
  ["value for b0 is close to zero and the value of b1 is close to 1"],"Random walk as AR(1): b0 ≈ 0, b1 ≈ 1."),
 mkq("If Nair is correct regarding the trailing P/E time series, the best forecast of next period's trailing P/E is most likely to be the:",["forecast derived from applying the AR(1) model depicted in Exhibit 1 to the data.","current period's trailing P/E.","average P/E of the time series."],1,
  ["A random walk is not covariance stationary, so an AR(1) forecast is not appropriate.","For a random walk, the best forecast of the next value is the current value.","A random walk has no mean-reverting level, so the average is not the best forecast."],
  ["truly is a random walk"],"Random walk: best forecast of x(t+1) = x(t); no mean reversion, not covariance stationary."),
 mkq("The results depicted in Exhibit 2 are best described as consistent with a regression that has ARCH(1) errors because:",["c0 is significantly different from 0.","c1 is significantly different from 0.","c1 is significantly different from 1."],1,
  ["The intercept's significance does not test ARCH.","ARCH(1) is tested by regressing squared residuals on their own lag; if the slope c1 is significantly different from 0, ARCH(1) errors are present (t = 9.64).","The ARCH test checks whether c1 differs from 0, not 1."],
  ["Regression of Squared Residuals"],"ARCH(1) test: squared residuals on lagged squared residuals; slope significantly different from 0 → ARCH."),
 mkq("Duarte's caution given in Condition 1 is best described as:",["correct.","incorrect because the regression results are valid whether cointegration exists or does not exist.","incorrect because if both series have unit roots, they must exhibit cointegration for the results of the regression to be valid."],2,
  ["If both series have a unit root, the regression is valid only when they are cointegrated, so 'not cointegrated' is wrong.","Validity depends on cointegration when both series have unit roots.","Both series with unit roots must be cointegrated for the regression to be valid; Condition 1 says they are not cointegrated, which is the invalid case."],
  ["both series have a unit root and are not cointegrated"],"Two time series in a regression: both stationary (no unit root), or both unit roots AND cointegrated. Unit roots without cointegration = spurious regression."),
])
# ===================== 9. Derivatives: Liu (options, reading 29) =====================
S,Kc,d1,d2,Nd1,Nd2,gam,theta,bsm=62,60,0.231,0.082,0.591,0.533,0.041,-0.021,4.512; nc=12
sh=Nd1*100*nc; shA=(1-Nd1)*100*nc; shB=Nd2*100*nc
Sm,Kp,rf,u,dd=80,84,.04,1.25,.80; qq=(1+rf-dd)/(u-dd)
Suu,Sud,Sdd=Sm*u*u,Sm*u*dd,Sm*dd*dd
Puu,Pud,Pdd=max(Kp-Suu,0),max(Kp-Sud,0),max(Kp-Sdd,0)
Pu=(qq*Puu+(1-qq)*Pud)/(1+rf); Pd_e=(qq*Pud+(1-qq)*Pdd)/(1+rf); Pd=max(Pd_e,Kp-Sm*dd)
P0=(qq*Pu+(1-qq)*Pd)/(1+rf); P0e=(qq*Pu+(1-qq)*Pd_e)/(1+rf); P0half=(0.5*Pu+0.5*Pd)/(1+rf)
assert Kp-Sm*dd>Pd_e
body=f"""Karen Liu is a US-based hedge fund manager. To value the options in her fund, Liu uses both the Black–Scholes–Merton (BSM) and binomial option pricing models.
Liu sells {nc} call option contracts on a non-dividend-paying stock, Hillcrest Corporation, at the value determined by the BSM model, and considers delta-hedging the position using Hillcrest shares. Each call option contract is for 100 shares. Liu collects the information in Exhibit 1 for a call option on Hillcrest.
Exhibit 1
Current share price of Hillcrest | ${S}
Exercise price of Hillcrest call option | ${Kc}
d1 | {d1}
d2 | {d2}
N(d1) | {Nd1}
N(d2) | {Nd2}
Gamma | {gam}
Theta (daily) | –{-theta}
BSM call value | ${bsm}
Liu next considers an American-style put option on Marlow Corporation that matures in two years. She values it with a two-period binomial option pricing model and collects the relevant information in Exhibit 2. Marlow does not pay dividends.

Exhibit 2
Current share price of Marlow | ${Sm}
Exercise price of Marlow put option | ${Kp}
Risk-free rate (compounded annually) | {rf*100:.0f}%
Up factor (u) | {u:.2f}
Down factor (d) | {dd:.2f}
Stock prices in one year | S+ = ${Sm*u:.0f}, S- = ${Sm*dd:.0f}
Stock prices in two years | S++ = ${Suu:.0f}, S+- = ${Sud:.0f}, S-- = ${Sdd:.1f}"""
add("Derivatives",body,[
 mkq("To delta hedge her call option position on Hillcrest, how many shares of Hillcrest should Liu buy?",[f"{shA:.0f}",f"{shB:.0f}",f"{sh:.0f}"],2,
  [f"This is based on 1 − N(d1) = {1-Nd1:.3f}: {1-Nd1:.3f} × 100 × {nc} = {shA:.0f} shares.",f"This is based on N(d2) = {Nd2} instead of N(d1): {Nd2} × 100 × {nc} = {shB:.0f} shares.",f"For a non-dividend-paying stock the number of shares per option sold is N(d1) = {Nd1}: {Nd1} × 100 × {nc} = {sh:.1f}, about {sh:.0f} shares."],
  ["delta-hedging the position","Each call option contract is for 100 shares"],"Delta hedge of a short call = buy N(d1) shares per option; scale by 100 shares per contract and the number of contracts.",True),
 mkq("The gamma of Liu's delta-hedged position would be:",["positive.","zero.","negative."],2,
  ["The position is short the call; short options have negative gamma.","The stock has zero gamma, but the short call does not.","The long stock has zero gamma and the short call has negative gamma (a long call has positive gamma), so the overall position has negative gamma."],
  ["sells 12 call option contracts"],"Delta-hedged short call: stock gamma = 0, short call gamma < 0 → negative gamma."),
 mkq("Holding all else constant, the value of the call on Hillcrest one day after Liu's sale will be closest to:",[f"${bsm+theta*(-1):.3f}.".replace(f"{bsm-theta:.3f}",f"{bsm-gam:.3f}"),f"${bsm+theta:.3f}.",f"${bsm-theta:.3f}."],1,
  [f"It uses gamma in place of theta: {bsm} − {gam} = ${bsm-gam:.3f}.",f"Daily theta = {theta}: the value after one day = {bsm} − {-theta} = ${bsm+theta:.3f}.",f"It adds the theta instead of subtracting it: {bsm} + {-theta} = ${bsm-theta:.3f}."],
  ["Theta (daily)","BSM call value"],"Time decay: value tomorrow = value today + theta (theta is negative for a long call).",True),
 mkq("Using the two-period binomial option pricing model, the value of the American put on Marlow Corporation is closest to:",[f"${P0e:.2f}.",f"${P0:.2f}.",f"${P0half:.2f}."],1,
  [f"This is the European put price: {P0e:.2f} (no early exercise at the down node).",f"Risk-neutral probability = (1 + r − d) ÷ (u − d) = {qq:.4f}. Puts at T = 2: Puu = 0, Pud = {Pud:.0f}, Pdd = {Pdd:.1f}. At T = 1: P+ = {Pu:.4f}; down node: the binomial value is {Pd_e:.4f}, but early exercise gives {Kp} − {Sm*dd:.0f} = {Kp-Sm*dd:.0f}, so P− = {Pd:.0f}. P0 = [{qq:.4f} × {Pu:.4f} + {1-qq:.4f} × {Pd:.0f}] ÷ 1.04 = ${P0:.2f}.",f"It uses risk-neutral probabilities of 0.5 instead of {qq:.4f}: ${P0half:.2f}."],
  ["American-style put option","two-period binomial option pricing model"],"American put: at each node take the larger of the binomial (continuation) value and the exercise value K − S.",True),
])
# ===================== 10. Fixed Income: Hart (credit default swaps, reading 27) =====================
sprd,dur,cpn=650,6,500; up=(sprd-cpn)*dur/100; upA=(sprd-cpn)/100; upB=sprd/cpn*dur
body="""Diana Hart is the chief investment officer at Pace Advisors, and Ben Cole is a derivatives analyst at the firm.

VORN Corporation
Cole makes the following statement on the credit quality of VORN Corporation, whose debt Pace Advisors holds: “There is severe near-term stress in the financial markets, and VORN’s credit curve clearly reflects the difficult environment.”

On 1 July 20X3, VORN fails to make a scheduled interest payment on the outstanding subordinated unsecured obligation after a grace period; however, the company does not file for bankruptcy. Hart asks Cole to determine if VORN experienced a credit event and, if so, to recommend a settlement preference.

Jorvik Corporation
Hart is considering purchasing protection on Jorvik Corporation debt to hedge the portfolio’s position in Jorvik. She instructs Cole to determine if an upfront payment would be required and, if so, the amount of the premium. Cole presents the information for the CDS in Exhibit 1.

Exhibit 1
Summary Data for 10-year CDS on Jorvik Corporation
Credit spread | 650 bps
Duration | 6 years
Coupon rate | 5%
Hart purchases 10-year protection on Jorvik Corporation debt. Two months later the credit spread for Jorvik Corporation has increased by 200 bps. Hart asks Cole to close out the firm’s CDS position on Jorvik Corporation by entering into a new, offsetting contract."""
add("Fixed Income",body,[
 mkq("According to Cole’s statement, the shape of VORN’s credit curve is most likely:",["upward-sloping.","flat.","downward-sloping."],2,
  ["An upward-sloping curve implies greater default probability in later years, the normal shape in calm markets.","A flat curve implies a constant hazard rate.","Severe near-term stress means the default probability is greatest in the early years: a downward-sloping credit curve."],
  ["severe near-term stress in the financial markets"],"Near-term stress → downward-sloping (inverted) credit curve; calm markets → upward-sloping; constant hazard rate → flat."),
 mkq("Should Cole conclude that VORN experienced a credit event?",["No, because the failure to pay occurred on a subordinated unsecured bond","Yes","No, because VORN did not file for bankruptcy"],1,
  ["Failure to pay on any outstanding obligation counts, whatever its seniority.","A failure to make a scheduled interest payment after the grace period is a credit event even without a bankruptcy filing.","The three common credit events are bankruptcy, failure to pay and restructuring; bankruptcy is not required."],
  ["fails to make a scheduled interest payment","does not file for bankruptcy"],"Credit events: bankruptcy, failure to pay (after the grace period), restructuring; any one of them is enough."),
 mkq("Based on Exhibit 1, the upfront premium as a percent of the notional for the CDS protection on Jorvik Corporation would be closest to:",[f"{upA:.1f}%.",f"{upB:.1f}%.",f"{up:.1f}%."],2,
  [f"It is the simple difference between spread and coupon ({sprd} − {cpn} = {sprd-cpn} bps = {upA:.1f}%), ignoring the duration.",f"It divides the spread by the coupon and multiplies by the duration: ({sprd}/{cpn}) × {dur} = {upB:.1f}%.",f"Upfront premium ≈ (credit spread − fixed coupon) × duration = ({sprd} − {cpn}) × {dur} = {(sprd-cpn)*dur:,} bps = {up:.1f}% of the notional."],
  ["Credit spread","Coupon rate"],"Upfront premium ≈ (CDS spread − standard coupon) × duration; the protection buyer pays it when the spread exceeds the coupon.",True),
 mkq("If Pace Advisors enters into a new offsetting contract two months after purchasing protection on Jorvik Corporation, this action will most likely result in:",["a loss on the CDS position.","neither a loss nor a profit on the CDS position.","a profit on the CDS position."],2,
  ["A fall (not a rise) in the spread would cause a loss to the protection buyer.","The protection buyer benefits from a spread increase, so it does not break even.","The protection buyer is economically short credit; the spread rose by 200 bps, so closing out by selling protection at the higher premium locks in a profit."],
  ["increased by 200 bps","offsetting contract"],"Buying protection = short credit: profit when the spread widens, loss when it narrows."),
])
# ---------------- order, balance, write ----------------
rng=random.Random(10)
while True:
    rng.shuffle(V)
    if all(a['topic']!=b['topic'] for a,b in zip(V,V[1:])): break
PERMS=[p for p in itertools.permutations(range(3)) if p!=(0,1,2)]
def key(): return ''.join('ABC'[q['answer']] for v in V for q in v['questions'])
def maxrun(k):
    m_=c=1
    for a,b in zip(k,k[1:]): c=c+1 if a==b else 1; m_=max(m_,c)
    return m_
free=[(vi,i) for vi,v in enumerate(V) for i,q in enumerate(v['questions']) if not q['_fixed']]
base=[copy.deepcopy(V[vi]['questions'][i]) for vi,i in free]
found=None
for t in range(40000):
    r=random.Random(t); ch=[list(r.choice(PERMS)) for _ in free]
    for (vi,i),b0,o in zip(free,base,ch):
        q=copy.deepcopy(b0); perm(q,o); V[vi]['questions'][i]=q
    k=key(); c=collections.Counter(k)
    if maxrun(k)<=3 and min(c.values())>=9 and max(c.values())<=14: found=k; break
if not found:
    k=key(); print(k,collections.Counter(k),len(free)); raise SystemExit('no balanced order')
for v in V:
    for q in v['questions']: q.pop('_fixed',None)
MOCK=dict(id="mock10",rev=2,resetHl=[],title="Mock 10",kind="mock",minutes=132,desc="10 new vignettes from sub-topics different from Mocks 8 and 9, plus 1 Ethics vignette",vignettes=V)
if __name__=='__main__':
    json.dump(MOCK,open('/home/user/jimin/bank/exam/mock10_core.json','w'),ensure_ascii=False,indent=1)
    print(len(found),found,collections.Counter(found)); print([v['topic'] for v in V])
    print('hm',hm,'g',g,'cc',cc,'tot',tot,'inc',inc,'de',de_c,de_d,'lev',lev,'ratio',ratio,'ri',ri,'ig',ig,'v0',v0,'sh',sh,'P0',P0,P0e,'up',up,'f',f_ok)
