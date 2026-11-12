import math
from lib13 import *
# ===== Mock 3 =====
# --- corp4-lee (Corp Q9, Q12)
rev=(19404,4080); opx=(14994,2480); syn3,cost3=220,250
oi=(rev[0]+rev[1])-(opx[0]+opx[1]); right=oi+syn3-cost3
assert oi==6010 and right==5980
body="""Lena Hartmann is an analyst at an investment bank covering the energy sector. She and her junior analyst are analyzing Cedarbrook Energy Corporation (CEC).

Cedarbrook Energy Corporation is a publicly traded, US-based energy company that just announced its acquisition of Tidewater Energy Corporation, a smaller US-based energy company. Cedarbrook's current trading enterprise value just prior to the announcement was USD146 billion.

Cedarbrook expects to realize annual recurring cost synergies of USD220 million (pre-tax), primarily from efficiencies in exploration and production activities and savings in corporate costs. The achievement of the full USD220 million in synergies is expected by the end of the third year after the acquisition closes. Synergies are realized in the amounts of USD60 million, USD150 million, and USD220 million in Years 1–3, respectively, and cash costs of USD110 million, USD180 million, and USD250 million are incurred in Years 1–3, respectively.

Expectations for revenues and total operating expenses for Cedarbrook and Tidewater for the next three years prior to the acquisition announcement are shown in Exhibit 1.

Exhibit 1
Cedarbrook and Tidewater Year 1–3 Figures, Prior to Acquisition (USD millions)
# Cedarbrook | Year 1 | Year 2 | Year 3
Revenues | 17,600 | 18,480 | 19,404
Operating expenses | 13,600 | 14,280 | 14,994
# Tidewater | Year 1 | Year 2 | Year 3
Revenues | 3,700 | 3,885 | 4,080
Operating expenses | 2,250 | 2,360 | 2,480

Hartmann conducted a sum-of-the-parts valuation of Cedarbrook's three segments and calculated an estimated enterprise value of USD142 billion just prior to the announcement."""
part('Corporate Issuers','corp4-lee',body,[],[],[
 Nq("Based on Exhibit 1, the forecasted operating income in Year 3 for the combined Cedarbrook and Tidewater is closest to:","USD5,980.",["USD5,760.","USD6,230."],
   ["Combined Year 3 revenues = 19,404 + 4,080 = 23,484. Combined operating expenses = 14,994 + 2,480 = 17,474. Operating income before deal effects = 6,010. Add the Year 3 synergies of 220 and subtract the Year 3 cash costs of 250: 6,010 + 220 − 250 = 5,980.","This leaves out the synergies (6,010 − 250 = 5,760).","This leaves out the costs to achieve the synergies (6,010 + 220 = 6,230)."],
   ["Synergies are realized in the amounts of USD60 million, USD150 million, and USD220 million in Years 1–3","cash costs of USD110 million, USD180 million, and USD250 million are incurred in Years 1–3"],
   "Combined operating income = revenues − operating expenses of BOTH companies, plus the synergies of the year, minus the cash costs of achieving them in that year."),
 Nq("Cedarbrook's estimated conglomerate discount just prior to the announcement is:","–USD4 billion.",["USD0.","USD4 billion."],
   ["Estimated conglomerate discount = sum-of-the-parts enterprise value − current trading enterprise value = USD142 billion − USD146 billion = −USD4 billion. The sign is negative: the market values Cedarbrook ABOVE the sum of its parts, so there is a premium, not a discount.","The sum-of-the-parts value (142) and the trading value (146) differ, so the estimate is not zero.","A positive figure would mean the market values the company BELOW the sum of its parts; here the trading value is higher, so the result is negative."],
   ["current trading enterprise value just prior to the announcement was USD146 billion","enterprise value of USD142 billion"],
   "Conglomerate discount = SOTP enterprise value − trading enterprise value; negative = premium (market above the parts).")])
# --- izzo (Equity Q15): FCFE from the cash flow statement
ni,dep,onc=4860,470,760; ar,ap,ocl=-360,-190,500; sale=1700; notes,ltd,divs=60,-1150,-950
cfo=ni+dep+onc+ar+ap+ocl; cfi=sale; cff=notes+ltd+divs; chg=cfo+cfi+cff
fcfe=cfo+sale+notes+ltd; fcfeA=cfo+notes+ltd
assert (cfo,cff,chg,fcfe,fcfeA)==(6040,-2040,5700,6650,4950),(cfo,cff,chg,fcfe,fcfeA)
body="""Katrine Vestergaard manages a dividend growth strategy for a large asset management firm. Vestergaard meets with her investment team to discuss a potential investment in Company A.

Exhibit 1: Statement of Cash Flow for Company A, Most Recent Fiscal Year End (Amounts in Millions of Dollars)
Cash Flow from Operating Activities |
Net Income | 4,860
Adjustments |
  Depreciation | 470
  Other noncash expenses | 760
  Changes in working capital |
    (Increase) Decrease accounts receivable | (360)
    Increase (Decrease) accounts payable | (190)
    Increase (Decrease) other current liabilities | 500
      Net cash from operating activities | 6,040
Cash Flow from Investing Activities |
(Purchase) Sale of fixed assets | 1,700
      Net cash from investing activities | 1,700
Cash Flow from Financing Activities |
Increase (Decrease) notes payable | 60
Increase (Decrease) long-term debt | (1,150)
Payment of common stock dividends | (950)
      Net cash from financing activities | (2,040)
Net change in cash and cash equivalents | 5,700"""
part('Equity Valuation','izzo',body,[],[],[
 Nq("Based on Exhibit 1, Company A's FCFE for the most recent year is closest to:","$6,650 million.",["$4,950 million.","$5,700 million."],
   ["FCFE = cash flow from operations − fixed capital investment + net borrowing. Net cash from operating activities is 6,040. The sale of fixed assets is a net divestment, so fixed capital investment is −1,700 (it adds 1,700). Net borrowing = notes +60 and long-term debt −1,150 = −1,090. FCFE = 6,040 + 1,700 − 1,090 = 6,650.","This leaves out the proceeds from the sale of fixed assets: 6,040 − 1,090 = 4,950.","This is the net change in cash (5,700), which also deducts the dividends paid; dividends are not deducted to get FCFE."],
   ["@row:Net cash from operating activities","@row:(Purchase) Sale of fixed assets","@row:Increase (Decrease) long-term debt"],
   "FCFE = CFO − FCInv + net borrowing (a SALE of fixed assets adds to FCFE; dividends are not deducted).")])
# --- mercer (Ethics Q31)
body="""Renata Cole, CFA, is currently working as a capital market adviser in a developing country. While attending a regional securities exchange conference, she introduces herself to Marcus Webb, CFA. Webb is one of several partners at Southern Cross Advisory Partners, a consulting firm specializing in capital market expansion in developing countries.

Cole says to Webb, "I'm wondering how you would respond to a situation whereby a regulator chooses not to implement extensive policies and regulations regarding the integrity of capital markets I recommended. They say my suggested policies and regulations related to market manipulation, material nonpublic information, and protecting client interests are too complicated, and they do not have the judicial competency to back them up. Consequently, they have requested I recommend just one primary rule.\""""
part('Ethical and Professional Standards','mercer',body,[("Lam","Webb"),("Hale","Cole")],[],[K(31)])
# --- xyzbank (FSA Q35): loan loss analysis
body="""Elena Fraser is a financial sector analyst writing an industry report. Part of Fraser's analysis focuses on Company PTV, a global commercial bank, and its risk management practices. To assess Company PTV's risk management practices, Fraser reviews the loan loss analysis in Exhibit 1.

Exhibit 1: Company PTV: Loan Loss Analysis Data
# At 31 December | 2017 $m | 2016 $m | 2015 $m
Consumer loans | | |
   Allowance for loan losses | 11,300 | 12,000 | 12,200
   Provision for loan losses | 1,650 | 2,400 | 3,100
   Charge-offs | 3,450 | 3,650 | 3,800
   Recoveries | 1,150 | 1,100 | 1,100
   Net charge-offs | 2,300 | 2,550 | 2,700
Commercial loans | | |
   Allowance for loan losses | 1,200 | 880 | 520
   Provision for loan losses | 760 | 640 | 410
   Charge-offs | 960 | 820 | 700
   Recoveries | 600 | 510 | 490
   Net charge-offs | 360 | 310 | 210"""
cp=[3100/2700,2400/2550,1650/2300]; cm=[410/210,640/310,760/360]; al=[520/210,880/310,1200/360]
assert cp[0]>1>cp[2] and all(x>1 for x in cm) and al[0]<al[1]<al[2]
part('Financial Statement Analysis','xyzbank',body,[],[],[
 Nq("Based on Exhibit 1, a loan loss analysis for the last three years indicates that:","Company PTV has become less conservative in its provisioning for consumer loans.",["the cushion between the allowance and the net commercial loan charge-offs has declined.","the provision for commercial loan losses has trailed the actual net charge-off experience."],
   ["Consumer provision ÷ net charge-offs: 3,100 ÷ 2,700 = 1.15 (2015) → 2,400 ÷ 2,550 = 0.94 (2016) → 1,650 ÷ 2,300 = 0.72 (2017). The provision has fallen below net charge-offs, so PTV has become LESS conservative in provisioning for consumer loans.","Commercial allowance ÷ net charge-offs: 520 ÷ 210 = 2.48 → 880 ÷ 310 = 2.84 → 1,200 ÷ 360 = 3.33. The cushion has increased, not declined.","Commercial provision ÷ net charge-offs: 410 ÷ 210 = 1.95 → 640 ÷ 310 = 2.06 → 760 ÷ 360 = 2.11. The provision has stayed above the net charge-offs, so it has not trailed them."],
   ["@row:Provision for loan losses","@row:Net charge-offs","@row:Allowance for loan losses"],
   "Loan loss analysis: provision ÷ net charge-offs below 1 = less conservative; allowance ÷ net charge-offs shows the cushion (rising = bigger cushion).",fixed=False)])
# ===== Mock 4 =====
# --- cannan (Equity Q1): forward vs trailing P/E
px,e20,e21,fcf=73.50,3.40,3.85,2.70
fw,tr,pf=px/e21,px/e20,px/fcf
assert round(fw,2)==19.09 and round(tr,2)==21.62 and round(pf,2)==27.22
body="""Oliver Grant is updating a research report on a well-established consumer company before first quarter 2021 earnings reports are released. His supervisor, Karen Ashworth, has asked Grant to use market-based valuations when updating the report.

Harborview Beverage is a manufacturer and distributor of soft drinks and recently acquired a major water bottling company in order to offer a broader product line. The acquisition will have a significant impact on Harborview's future results.

Exhibit 1: Select Financial Data for Harborview Beverage
2020 earnings per share (EPS) | $3.40
2021 estimated EPS | $3.85
Current share price | $73.50
Free cash flow per share | $2.70"""
part('Equity Valuation','cannan',body,[],[],[
 Nq("Based on the information in Exhibit 1, the most appropriate price-to-earnings ratio to use in the valuation of Harborview is closest to:","19.09.",["21.62.","27.22."],
   ["The forward P/E should be used because the recent acquisition of the water bottling company will have a significant impact on future results; 2021 estimated EPS includes the new business. Forward P/E = $73.50 ÷ $3.85 = 19.09.","This is the trailing P/E ($73.50 ÷ $3.40 = 21.62); past earnings do not include the acquisition.","This is price ÷ free cash flow per share ($73.50 ÷ $2.70 = 27.22), a price-to-cash-flow ratio, not a P/E."],
   ["The acquisition will have a significant impact on Harborview's future results","@row:2021 estimated EPS"],
   "Acquisition (or other big change) → past EPS no longer describes the company: use the FORWARD P/E on estimated EPS.")])
# --- ctrf (Alt Q8): variance limit and Sortino
sd0=9.20; maxsd=math.sqrt(0.85)*sd0
assert 8.30<maxsd and 8.40<maxsd and 8.75>maxsd and round(maxsd,2)==8.48
body="""Rosa Almeida is an investment analyst for the Atlantic Teachers' Retirement Fund (ATRF). ATRF's investment committee (IC) has asked Almeida to evaluate a hedge fund allocation. Almeida simulates adding a 20% allocation to individual hedge fund strategies. The IC requires (1) that the variance of the combined portfolio be less than 85% of that of the current portfolio and (2) that the combined portfolio maximize the risk-adjusted return with the expectation of large negative events. Exhibit 1 provides the simulated results.

Exhibit 1: Simulated Combined Portfolios
# Hedge fund strategy | Standard deviation (%) | Sharpe ratio | Sortino ratio | Maximum drawdown (%)
Current portfolio | | | |
NA | 9.20 | 0.46 | 1.00 | 18.10
Three potential portfolios with a 20% hedge fund allocation | | | |
Merger arbitrage | 8.30 | 0.60 | 1.66 | 8.20
Systematic futures | 8.75 | 0.72 | 1.81 | 10.40
Equity market neutral | 8.40 | 0.65 | 1.57 | 12.10"""
part('Alternative Investments','ctrf',body,[],[],[
 Nq("Based on the IC's two requirements, which simulated portfolio in Exhibit 1 is most suitable?","Merger arbitrage",["Systematic futures","Equity market neutral"],
   ["Maximum variance = 0.85 × 9.20² = 71.94, so maximum SD = 8.48%. Systematic futures (8.75%) breaks the variance limit even though it has the highest Sortino ratio (1.81). Merger arbitrage (8.30%) and equity market neutral (8.40%) both pass. With large negative events expected, use the Sortino ratio (downside risk only): merger arbitrage 1.66 beats equity market neutral 1.57.","Systematic futures has the highest Sortino ratio, but its standard deviation (8.75%) is above the 8.48% allowed by the variance requirement.","Equity market neutral passes the variance requirement, but its Sortino ratio (1.57) is lower than that of merger arbitrage (1.66)."],
   ["variance of the combined portfolio be less than 85% of that of the current portfolio","expectation of large negative events"],
   "Step 1: variance screen (SD ≤ √limit × current SD). Step 2: among the survivors, large negative events → Sortino ratio.",fixed=False)])
# --- wagner-growth (Econ Q12)
body="""Dieter Kaufmann is the CEO of Rhein Builders and Finance, based in Germany. The company specializes in building low-income housing in developing countries, using new, highly specialized technology that lowers labor costs. Kaufmann is considering an investment in three neighboring African countries.

Prior to leaving the region, Kaufmann meets again with the Minister of Finance to ask for tax incentives to make his investment in that country. He makes the following justifications:"""
s=S('wagner-growth'); L=s['v']['body'].split('\n')
part('Economics','wagner-growth',body+"\n\n"+render(s['v']['body'],R(28,30,32,34,36,38)),[("Felix Brandt","Dieter Kaufmann"),("Brandt","Kaufmann")],[],[K(12)])
# --- costcap (Corp Q15, Q16): equity risk premium
dy,inf,gr,pe=1.8,3.2,2.8,0.4; rf10,rfs=6.0,7.5
er=dy+inf+gr+pe; erp=er-rf10; erpC=er-rfs; erpB=dy+inf+gr-rf10
assert round(erp,1)==2.2 and round(erpC,1)==0.7 and round(erpB,1)==1.8
body="""An equity index is established in Year 1 for a country that has recently moved to a market economy. The index vendor constructed returns for the four years prior to Year 1 based on the initial group of companies constituting the index in Year 1. From Year 12 to Year 16, a series of military confrontations concerning a disputed border disrupted the economy and financial markets. The dispute is conclusively arbitrated at the end of Year 16. In total, 20 years of equity market return history is available. Other selected data are in the following table.

Selected Data
Geometric mean return relative to 10-year government bond returns (over a 20-year period) | 1.7% per year
Arithmetic mean return relative to 10-year government bond returns (over a 20-year period) | 2.0% per year
Index forward dividend yield | 1.8%
Forecasted public company earnings growth | 4% per year
Forecasted market P/E growth | 0.4% per year
Forecasted real GDP growth rate (by Year 19) | 2.8%
Current vs. long-term inflation forecast | 5.0% vs. 3.2% per year
Current yield curve (inversion) | Short maturities: 7.5%
 | 10-year maturities: 6.0%"""
part('Corporate Issuers','s1a-costcap',body,[],[],[
 Nq("In the current interest rate environment, using a required return on equity estimate based on the short-term government bond rate and a historical ERP defined in terms of a short-term government bond rate would be expected to:","bias long-term required return on equity estimates upward.",["bias long-term required return on equity estimates downward.","have no effect on long-term required return on equity estimates."],
   ["The historical ERP is generally higher when it is measured against a short-term rate (the normal upward-sloping curve makes short rates lower). In addition the short-term rate is currently higher (7.5%) than the long-term rate (6.0%), which also increases the estimate. Both effects push the long-term required return up.","Both effects (a larger ERP and a higher risk-free rate) increase, not decrease, the estimate.","The choice of risk-free rate matters: using the short-term rate in an inverted curve changes both parts of the required return."],
   ["Current yield curve (inversion) | Short maturities: 7.5%","@row:Current yield curve (inversion)"],"Required return = risk-free rate + beta × ERP: a short-term rate gives a bigger historical ERP and (inverted curve) a bigger risk-free rate → upward bias for long-term estimates.",fixed=False),
 Nq("An estimate of the ERP consistent with the Grinold–Kroner model is closest to:","2.2%.",["0.7%.","1.8%."],
   ["Grinold–Kroner: expected equity return = dividend yield + inflation + real growth + change in P/E (no share-count change) = 1.8% + 3.2% + 2.8% + 0.4% = 8.2%. ERP = 8.2% − risk-free rate (10-year, 6.0%) = 2.2%.","This subtracts the 7.5% short-term rate instead of the 10-year rate: 8.2% − 7.5% = 0.7%.","This omits the 0.4% P/E growth: (7.8% − 6.0%) = 1.8%."],
   ["@row:Index forward dividend yield","@row:Forecasted market P/E growth","@row:Forecasted real GDP growth rate (by Year 19)"],
   "Grinold–Kroner: E(R) = dividend yield + long-term inflation + real growth + P/E change; ERP = E(R) − the long-term (10-year) risk-free rate.",fixed=True)])
# --- victory (Ethics Q17)
pairs=[("Vanessa Pruitt","Clara Whitfield"),("Pruitt","Whitfield"),("Brightmoor Investment Advisors (Brightmoor)","Eastgate Investment Advisors (Eastgate)"),("Brightmoor","Eastgate"),("Summit Investment Management (Summit)","Crestline Investment Management (Crestline)"),("Summit","Crestline"),("Monica Reyes","Marta Santos"),("Reyes","Santos")]
part('Ethical and Professional Standards','victory',R(0),pairs,[],[K(17)])
# --- prostar (FI Q23)
pairs=[("Harper & Gale","Hartley & Grant"),("Warren Pike","Wesley Park"),("Pike","Park"),("Bright Line, Inc.","Clearwater, Inc."),("Bright Line","Clearwater")]
part('Fixed Income','prostar',R(0,2,3,4,5,6),pairs,[],[K(23)])
# --- crestpoint (Deriv Q37, Q38): Treasury note futures
D,cpn,d1,d2,r,cf=103.40,1.25,45,60,0.012,0.78
fv=D*(1+r)**(d2/360); ai=(d1+d2)/180*cpn; q=(fv-ai)/cf; qB=(fv-d1/180*cpn)/cf; qC=fv/cf
print('crest',fv,ai,q,qB,qC)
assert len({round(q,2),round(qB,2),round(qC,2)})==3 and q<qB<qC
body=f"""Ingrid Hale is a portfolio manager at Lakecrest Capital, a hedge fund that frequently uses derivatives to hedge or speculate. She works with Lars Nilsen, a junior analyst.

Carry Arbitrage Model

Hale and Nilsen discuss a futures contract in which the underlying bond is expected to make an interest payment in three months.

Statement 1: If the futures price is less than the price suggested by the carry arbitrage model, the futures contract should be purchased.

Statement 2: Based on the cost of carry model, the futures price would be higher if the underlying bond's upcoming interest payment was expected in six months instead of three.

10-Year Treasury Note

Nilsen's second idea involves a 10-year Treasury note futures contract. The underlying 2.5%, semi-annual 10-year Treasury note has a dirty price of 103.40. It has been 45 days since the last coupon payment. The futures contract expires in 60 days. The current annualized risk-free rate is 1.20%. The conversion factor is 0.7800. Assume a 180-day coupon period."""
part('Derivatives','crestpoint',body,[],[],[
 K(37,[("Marlowe","Hale")]),
 Nq("The equilibrium quoted futures price of the 10-year Treasury note is closest to:",f"{q:.2f}",[f"{qB:.2f}",f"{qC:.2f}"],
   [f"The dirty price already includes accrued interest, so compound it to expiry: 103.40 × (1.012)^(60/360) = {fv:.4f}. Accrued interest at expiry = (45 + 60)/180 × 1.25 = {ai:.4f}. No coupon is paid during the 60 days. Quoted futures price = ({fv:.4f} − {ai:.4f}) ÷ 0.78 = {q:.2f}.",f"This subtracts only today's accrued interest (45/180 × 1.25 = {d1/180*cpn:.4f}) instead of the accrued interest at expiry: {qB:.2f}.",f"This forgets to subtract the accrued interest at expiry: {fv:.4f} ÷ 0.78 = {qC:.2f}."],
   ["has a dirty price of 103.40","The futures contract expires in 60 days","The conversion factor is 0.7800"],
   "Quoted futures = [dirty price × (1 + r)^T − accrued interest at expiry − FV of coupons] ÷ conversion factor.",fixed=True)])
# --- carlisle (PM Q43, Q44)
pairs=[("Janet Whitcombe","Julia Whitmore"),("Whitcombe","Whitmore"),("Tomas Hargreave","Tobias Hartwell"),("Hargreave","Hartwell")]
part('Portfolio Management','carlisle',R(0,(6,10),12,16),pairs,[],[K(43),K(44)])
