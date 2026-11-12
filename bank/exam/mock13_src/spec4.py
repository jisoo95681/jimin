import math
from lib13 import *
# ===== Mock 5 =====
# --- centralino (Equity Q1)
px=48.00; eps=(4.60,5.05,4.20,5.30); e20=5.70
tr=px/eps[3]; fw=px/e20; av=px/(sum(eps)/4)
assert round(tr,2)==9.06 and round(fw,2)==8.42 and round(av,2)==10.03
body="""Isabella Moretti is a junior analyst with RiveraEquity, an independent equity research firm. Moretti's supervisor asks her to update, as of 1 January 2020, a quarterly research report for Casalmare S.p.A., a telecommunications company headquartered in Italy. On that date, Casalmare's common share price is €48.

Moretti gathers information on Casalmare. Exhibit 1 presents earnings data.

Exhibit 1: Earnings for Casalmare, 2016–2020
# | 2016 | 2017 | 2018 | 2019 | 2020(E)
Earnings per share (EPS, €) | 4.60 | 5.05 | 4.20 | 5.30 | 5.70
The data for 2016–2019 are actual and for 2020 are estimated."""
part('Equity Valuation','centralino',body,[],[],[
 Nq("Based on Exhibit 1, the trailing P/E for Casalmare as of 1 January 2020, ignoring any business-cycle influence, is closest to:","9.1.",["8.4.","10.0."],
   ["Trailing P/E = current price ÷ most recent four quarters' EPS = €48 ÷ €5.30 = 9.1.","8.4 is the forward P/E (€48 ÷ €5.70), which uses the estimate for 2020.","10.0 uses the 2016–19 average EPS of €4.79 (€48 ÷ €4.79); that would be a normalized P/E, not the trailing P/E."],
   ["trailing P/E","@row:Earnings per share (EPS, €)","common share price is €48"],
   "Trailing P/E = price ÷ the most recent actual EPS (no averaging, no estimates); averaging several years = normalized; estimate for next year = forward."),
 ][:1])
# --- sobhani (Ethics Q6)
pairs=[("Lantern Investments","Cobalt Wealth Advisors"),("Arlo Sandoval","Vincent Moretz"),("Sandoval","Moretz"),("Shiro Murakami","Elias Fontaine"),("Murakami","Fontaine"),("Stanley Pruitt","Walter Osei"),("Pruitt","Osei"),("twin sons","twin daughters"),("his sale proceeds","the sale proceeds")]
part('Ethical and Professional Standards','eth6-sobhani',R(0,4,6),pairs,[],[K(6)])
# --- watson (Ethics Q29-Q32)
pairs=[("Alden Weston","Gavin Okonkwo"),("Weston","Okonkwo")]
part('Ethical and Professional Standards','eth6-watson',R(0,2,4,6,7,8,10,11,12,13,15,16,17),pairs,[("states, “I'm really struggling","states that he is really struggling"),("personal investment policies.”","personal investment policies.")],[K(29),K(30),K(31),K(32)])
# --- eastern (PM Q9)
p1,p2=46.2,63.8; tot=p1+p2; floor=0.40*tot
assert abs(tot-110.0)<1e-9 and abs(floor-44.0)<1e-9
def share(sell): return (p2-sell)/tot
assert share(19)>=0.40>share(30) and 0.40<share(8)<0.5+0.01 and round(share(19)*100,1)==40.7 and round(share(30)*100,1)==30.7 and round(share(8)*100,1)==50.7
body="""Pierre Delacroix is the portfolio manager of the proprietary fixed-income portfolio of Coastal Regional Bank. The portfolio is structured as a barbell portfolio: About half of the portfolio is invested in zero-coupon Treasuries with maturities in the 3- to 5-year range (Portfolio P1), and the remainder is invested in zero-coupon Treasuries with maturities in the 10- to 15-year range (Portfolio P2). Delacroix has discretion to allocate between 40% and 60% of the assets to each maturity "bucket." He must remain fully invested at all times. Exhibit 1 shows details of this portfolio.

Exhibit 1: US Treasury Barbell Portfolio
# | P1 (3–5 Years) | P2 (10–15 Years)
Average duration | 3.30 | 11.07
Market value | $46.2 million | $63.8 million"""
part('Portfolio Management','eastern',body,[],[],[
 Nq("If Delacroix is expecting a 50 bp increase in yields at all points along the yield curve, which of the following trades is he most likely to execute to minimize his risk?","Sell $19 million of P2 and reinvest the proceeds in three-year bonds",["Sell $30 million of P2 and reinvest the proceeds in three-year bonds","Sell $8 million of P2 and reinvest the proceeds in three-year bonds"],
   ["To cut interest rate risk before yields rise, shorten duration, within the 40%–60% limit per bucket. Total = 46.2 + 63.8 = $110.0m. Selling $19m of P2 leaves 44.8 / 110.0 = 40.7% in P2 (just above the 40% minimum), with the proceeds at the shortest permitted maturity (3 years).","Selling $30m would leave P2 at 33.8 / 110.0 = 30.7%, below the 40% floor.","Selling only $8m stays within the limits (50.7% in P2) but cuts duration far less than selling $19m."],
   ["Delacroix has discretion to allocate between 40% and 60% of the assets to each maturity \"bucket.\"","@row:Market value","50 bp increase in yields"],
   "Yields up → shorten duration; use the most the limits allow (here P2 can fall to 40% of the total), reinvesting in the shortest permitted maturity.",fixed=False)])
# --- beauregard (Econ Q33, Q36)
usd_aud=(0.6980,0.7012); usd_eur=(1.0790,1.0815)
bid=usd_aud[0]/usd_eur[1]; trapA=usd_aud[0]*usd_eur[0]; trapC=usd_aud[0]/usd_eur[0]
assert round(bid,4)==0.6454 and round(trapA,4)==0.7531 and round(trapC,4)==0.6469,(bid,trapA,trapC)
body=f"""Camille Dubois was recently hired as an analyst at HarborFX Partners, a US-based currency trading firm that maintains offices in major financial centers around the world. Dubois assists HarborFX foreign currency strategist Hugo Lindgren. The firm executes trades for clients and manages a foreign currency investment fund. Dubois is meeting with Lindgren to discuss the characteristics of the foreign exchange markets.

Lindgren explains that knowing what establishes a currency's real long-term equilibrium value helps investors manage risk exposure. He notes that current account trends influence the path of exchange rates over time through several mechanisms.

"Of the three mechanisms that economists identify, I have the most confidence in the one that assumes there are long-run limits on current account deficits."

Lindgren and Dubois discuss some of HarborFX's recent trades using the currency quotes provided in Exhibit 1. (For all currency pairs provided, the notation used is, for example, USD/AUD: US dollars per Australian dollar.)

Exhibit 1 Interbank Currency Quotes
# Currency Pair | Bid (Spot) | Offer (Spot)
USD/AUD | {usd_aud[0]:.4f} | {usd_aud[1]:.4f}
USD/EUR | {usd_eur[0]:.4f} | {usd_eur[1]:.4f}"""
part('Economics','fx29-beauregard',body,[("Thiessen","Lindgren")],[],[
 K(33),
 Nq("Based on the data in Exhibit 1, the bid EUR/AUD cross-rate implied by the interbank market is closest to:",f"{bid:.4f}.",[f"{trapA:.4f}.",f"{trapC:.4f}."],
   [f"The bid EUR/AUD is calculated as follows: Sell EUR/Buy AUD = Sell EUR/Buy USD × Sell USD/Buy AUD, which requires the inversion of USD/EUR to EUR/USD. Given the USD/EUR quotes of {usd_eur[0]:.4f}/{usd_eur[1]:.4f}, take the inverse of each and interchange bid and offer: (1/{usd_eur[1]:.4f})/(1/{usd_eur[0]:.4f}) = {1/usd_eur[1]:.4f}/{1/usd_eur[0]:.4f}. Then multiply by the USD/AUD bid: {1/usd_eur[1]:.5f} × {usd_aud[0]:.4f} = {bid:.4f}.",f"This multiplies the two bid rates ({usd_aud[0]:.4f} × {usd_eur[0]:.4f} = {trapA:.4f}) without inverting USD/EUR.",f"This inverts the USD/EUR quote but does not interchange the bid and the offer, so it uses the wrong side: {1/usd_eur[0]:.5f} × {usd_aud[0]:.4f} = {trapC:.4f}."],
   ["@row:USD/AUD","@row:USD/EUR","bid EUR/AUD cross-rate"],
   "Cross rate: write the chain you need (EUR/USD × USD/AUD), invert a quote by swapping bid and offer (bid = 1 ÷ offer), then multiply bid with bid.")])
# --- ec-terra (FSA Q43, Q44): pension assumptions
body="""Montclair Retail is a retailer that compensates employees with a DB pension plan and stock options in addition to short-term benefits and a DC plan. Montclair prepares its financial statements in accordance with US GAAP.

Peter Lindholm, CFA, is an equity analyst concerned with earnings quality. He is particularly interested in whether the discretionary assumptions the company is making regarding its DB plan are aggressive or conservative. Lindholm gathers the assumptions in the table below.

Assumptions Used for Montclair DB Plan
# | 20X3 | 20X2 | 20X1
Expected long-term rate of return on plan assets | 6.10% | 6.35% | 6.80%
Discount rate used to estimate pension obligation at beginning of year | 4.70% | 4.85% | 5.20%
Estimated salary growth rate | 3.50% | 4.10% | 4.00%
Estimated inflation rate | 3.20% | 2.80% | 2.60%"""
part('Financial Statement Analysis','ec-terra',body,[],[],[
 Nq("Compared to the assumptions Montclair used to compute its periodic pension cost in 20X1, earnings in 20X3 were most favorably affected by the change in the:","estimated future salary increases.",["expected long-term rate of return on plan assets.","discount rate."],
   ["All three assumptions were lower in 20X3 than in 20X1. Lower expected salary increases (4.00% → 3.50%) reduce the service cost, which raises earnings. A lower discount rate (5.20% → 4.70%) increases the obligation and, in most cases, the interest cost; a lower expected return on plan assets (6.80% → 6.10%) typically increases the periodic pension cost.","A lower expected return on plan assets means less return is credited against the pension cost, so the cost rises and earnings fall.","A lower discount rate raises the pension obligation and, in most cases, the interest cost, which lowers earnings."],
   ["@row:Expected long-term rate of return on plan assets","@row:Discount rate used to estimate pension obligation at beginning of year","@row:Estimated salary growth rate"],
   "Pension cost drivers: lower salary growth → lower service cost (favorable); lower discount rate → higher obligation and interest cost (unfavorable); lower expected return → higher pension cost (unfavorable).",fixed=False),
 Nq("Compared to the pension assumptions Montclair used in 20X2, which of the following pairs of assumptions used in 20X3 is most likely internally inconsistent?","Estimated future salary increases, inflation",["Expected long-term rate of return on plan assets, discount rate","Discount rate, estimated future salary increases"],
   ["The inflation estimate rose from 2.80% to 3.20% in 20X3 but the estimate of future salary increases was lowered from 4.10% to 3.50%. Normally, salary increases are positively related to inflation, so this pair is inconsistent.","Both the expected return (6.35% → 6.10%) and the discount rate (4.85% → 4.70%) were lowered, which is consistent with each other.","The discount rate and the salary growth rate both fell (4.85% → 4.70% and 4.10% → 3.50%), which is not an inconsistency between those two."],
   ["@row:Estimated salary growth rate","@row:Estimated inflation rate"],
   "Consistency check: salary growth and inflation should move together; expected return on assets and the discount rate should move in the same direction.",fixed=False)])
