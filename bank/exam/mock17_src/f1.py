from lib17 import *
# ===== FSA-A (Mock 17, from Mock 10 Q1 and Mock 8 Q30, Q32): Westbrook-type DuPont trend and a pension discount rate vignette (names and numbers changed) =====
rev=[840,800,767]; turn=[1.20,1.25,1.30]; liab=[350,340,340]
A=[r/t for r,t in zip(rev,turn)]; E_=[a-l for a,l in zip(A,liab)]; lev=[a/e for a,e in zip(A,E_)]
assert [round(x) for x in A]==[700,640,590] and [round(x) for x in E_]==[350,300,250] and lev[0]<lev[1]<lev[2],(A,E_,lev)
body="""Part 1
Linnea Strand, a financial analyst, is examining the most recent annual financial report of Harcourt Ltd., a mature U.K.-based company that complies with IFRS. Strand wants to evaluate the quality of the company's financial reports for the purpose of making an investment recommendation to her firm.

Strand next examines Harcourt's underfunded defined benefit pension plan and observes that the plan's discount rate assumption is 0.6% higher than its industry competitors' discount rates. For comparison purposes, Strand adjusts Harcourt's financial statements before computing the company's financial ratios.

Part 2
Oskar Brandt is a financial analyst who is examining the most recent annual report of Pellworth Inc., a US-based company that complies with US GAAP. Brandt wants to determine Pellworth's ROE as well as the trend in its ROE components by using DuPont analysis. Data used for this purpose is presented in Exhibit 1.

Exhibit 1: DuPont Data for Pellworth
# Item | Most Recent Year | Previous Year | Two Years Ago
Revenue (USD million) | 840 | 800 | 767
Total liabilities (USD million) | 350 | 340 | 340
Total asset turnover ratio | 1.20 | 1.25 | 1.30"""
add('M17','Financial Statement Analysis',body,[
 q("Compared with its industry competitors, Harcourt's pension discount rate assumption is most likely:",["aggressive, because it lowers the reported pension obligation.","neutral, because the plan is underfunded in any case.","conservative, because it raises the reported pension expense."],0,
  ["Correct. A discount rate above peers lowers the present value of the pension obligation (and the reported expense), so the underfunding is understated: the assumption is aggressive.","Incorrect. The assumption changes the measured size of the deficit, so the plan being underfunded does not make it neutral.","Incorrect. A higher discount rate lowers, not raises, the reported obligation and expense."],
  ["discount rate assumption is 0.6% higher than its industry competitors' discount rates"],"Higher discount rate than peers → lower obligation and expense → aggressive; lower discount rate → conservative.",fixed=False),
 q("With respect to the defined benefit pension plan assumption, which of the following will decrease after Strand's adjustment?",["Debt-to-equity ratio","Book value per share","Financial leverage ratio"],1,
  ["Incorrect. Strand lowers the discount rate by 0.6%: the obligation rises, total debt rises and equity falls, so debt-to-equity increases.","Correct. A lower discount rate raises the obligation and deepens the underfunding; equity (through accumulated other comprehensive income) falls while the number of shares is unchanged, so book value per share decreases.","Incorrect. Total assets are unchanged and equity falls, so assets ÷ equity (financial leverage) increases."],
  ["Strand adjusts Harcourt's financial statements before computing the company's financial ratios","discount rate assumption is 0.6% higher"],"Adjusting an aggressive (too high) discount rate down raises the obligation: debt-based leverage ratios up, equity and book value per share down.",fixed=False),
 q("Based on the 3 years of data provided for DuPont analysis, Pellworth's financial leverage has been:",["trending higher.","trending lower.","stable."],1,
  ["Incorrect. Assets ÷ equity falls from 2.36 two years ago to 2.00 in the most recent year.","Correct. Total assets = revenue ÷ asset turnover: 840 ÷ 1.20 = 700; 800 ÷ 1.25 = 640; 767 ÷ 1.30 = 590. Equity = assets − liabilities: 350; 300; 250. Financial leverage = assets ÷ equity: 2.00; 2.13; 2.36 (most recent to oldest), so leverage has been trending lower over time.","Incorrect. The ratio moves in one direction every year, so it is not stable."],
  ["@row:Revenue (USD million)","@row:Total liabilities (USD million)","@row:Total asset turnover ratio","Most Recent Year"],"Columns run NEWEST FIRST: read the trend from right (oldest) to left (newest). Assets = revenue ÷ turnover; equity = assets − liabilities; leverage = assets ÷ equity.",fixed=False),
])
# ===== FSA-B (Mock 17, from Mock 6 Q23 and Mock 9 Q25, 26, 28): accruals reasons, Basel III, insurance market cycle, combined ratio =====
body="""Part 1
Nina Falkner is an analyst working for Brightwave Investments, which manages a variety of investment funds. She analyzes the recent performance of Valmora Beverages SA, a multinational brewer of carbonated beverages that recently entered the energy drinks market. As a core holding, Valmora's prominence in Europe provides geographic diversification for Brightwave, which tends to be North-America-centric.

Falkner and her team assess the quality of Valmora's overall performance. The consensus is positive, but Falkner disagrees with her team for the following reasons:
Reason 1: Income from operations is consistently higher than cash generated from operations.
Reason 2: The rate of fluctuation in the cash-flow-based accruals ratio is low.
Reason 3: Balance-sheet-based accruals are trending down relative to total assets.

Part 2
Rosa Delgado works as a senior examiner for the Financial Supervisory Agency (FSA), and Tomas Weber is one of the analysts who reports to her. Weber is a new hire who previously worked at an investment firm that specialized in manufacturing companies. His first two weeks at the FSA were spent in training sessions focused on the Basel III regulatory framework for banks to prepare him for his new analyst role.

At today's weekly meeting, Delgado and her analysts are conducting a preliminary review of some of their assigned insurance institutions. Weber arrives early, so Delgado takes the opportunity to ask him to explain his understanding of the Basel III framework. Weber describes three enhancements that Basel III incorporated as part of its transition from the previous iteration:

Enhancement 1: Additional measures to ensure sufficient earnings quality, thereby strengthening banks' regulatory capital.
Enhancement 2: Increased funding stability by giving preference to interbank deposits over those from consumers.
Enhancement 3: More stringent capital requirements that prevent banks from taking on excessive financial leverage.
The other analysts arrive, and the meeting gets underway. The group is scheduled to review an insurance company, Nordheim Holdings (NH), a property and casualty insurer. Delgado notes that the property and casualty market has been in a "hard" phase for a few years now, and she wonders whether the results will show the beginning of a cyclical shift.

The group reviews NH's profitability information that Weber has provided in Exhibit 1. Delgado asks Weber to calculate NH's combined ratio:

Exhibit 1: Excerpts from NH's Financial Statements (¥ billions)
# Item | Value
Loss expense and loss adjustment expense | 38,760
Net premiums earned | 55,300
Net premiums written | 49,800
Underwriting expense | 19,950"""
lr=38760/55300; er=19950/49800; assert abs(lr+er-1.1017)<0.001
add('M17','Financial Statement Analysis',body,[
 q("Which of the following reasons best supports Falkner's disagreement with her team about Valmora's overall performance?",["Reason 2","Reason 3","Reason 1"],2,
  ["Incorrect. A steady cash-flow-based accruals ratio is unlikely to raise concerns; erratic or rising accruals would.","Incorrect. Downward-trending accruals give less opportunity for manipulation.","Correct. Income from operations is higher quality when it is backed by cash flow; operating income consistently above operating cash flow calls its quality into question."],
  ["Income from operations is consistently higher than cash generated from operations."],"Earnings quality: operating income should be backed by operating cash flow; stable or falling accruals are reassuring.",fixed=False),
 q("Which of the enhancements Weber describes regarding the Basel III regulatory framework is most accurate?",["Enhancement 2","Enhancement 3","Enhancement 1"],1,
  ["Incorrect. Basel III raised stable-funding requirements, but consumer deposits are considered more stable than interbank deposits.","Correct. After the 2008 crisis Basel III raised the equity funding required against risk-weighted assets, which prevents banks from taking on excessive financial leverage.","Incorrect. Earnings quality was not a focus of Basel III."],
  ["More stringent capital requirements that prevent banks from taking on excessive financial leverage."],"Basel III: higher capital and liquidity/stable-funding requirements (consumer deposits are the more stable funding), leverage limits.",fixed=False),
 q("If Delgado's interpretation of the current phase of the property and casualty market is correct, a cyclical shift is most likely to result in:",["additional competitors entering the market.","a tightening of underwriting standards.","capital adequacy being easier to achieve."],0,
  ["Correct. In a hard market premiums, profits and underwriting standards are high; this attracts competitors offering lower premiums, which softens the market.","Incorrect. In a hard market underwriting standards are already high; as the market softens they loosen.","Incorrect. Hard markets help insurers keep adequate capital; capital depletes as the market softens."],
  ["has been in a \"hard\" phase for a few years now"],"Insurance cycle: hard market (high premiums and profits) → new competitors → soft market (lower premiums, looser standards, weaker capital).",fixed=False),
 q("NH's combined ratio indicates that its underwriting business, before investment income, is:",["profitable, because the loss ratio is below 100%.","unprofitable, because claims and expenses exceed the premiums.","break-even, because the combined ratio is measured on net premiums written."],1,
  ["Incorrect. The loss ratio alone ignores the underwriting expense ratio; the combined ratio adds both.","Correct. Loss ratio = 38,760 ÷ 55,300 = 70.1% (premiums earned); expense ratio = 19,950 ÷ 49,800 = 40.1% (premiums written); combined ratio = 110.2% > 100%, so claims and expenses exceed premiums and investment income must cover the loss.","Incorrect. The combined ratio is not defined on net premiums written alone, and a figure above 100% is not break-even."],
  ["@row:Loss expense and loss adjustment expense","@row:Underwriting expense","calculate NH's combined ratio"],"Combined ratio = loss ratio (losses ÷ premiums EARNED) + expense ratio (underwriting expense ÷ premiums WRITTEN); above 100% = underwriting loss.",fixed=False),
])
