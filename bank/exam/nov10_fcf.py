# 10 Nov: Module 3 Free Cash Flow Valuation quiz (portal paste, 48/73). Reading 19.
# Q14 and Q15 (essays on two textbook definitions of "free cash flow") were left out on the user's request.
# Already stored and skipped: Izzo (vignettes.js, Q7-13), Leigh/Holt (Q23-28) and Singh/Sienna (Q33-38) in oct28_vignettes.json.
# Real vignettes: Porto (Q53-56), Nilsen (Q57-60), Pegham (Q61-62), Hester/FDF (Q63), Yee/McLaughlin (Q64-69), Baker/Wadgett (Q70-73).
# The essay problems (Q1-6, 16-22, 29-32, 39-52) were turned into multiple choice by the assistant (fcf-mcq-*, created=true).
import sys
sys.path.insert(0, '/home/user/jimin/bank/exam')
from nov10_ts_real import tab, Q
SRC = "10 Nov Module 3 Free Cash Flow Valuation quiz (48/73, 66%)"
SRC2 = "10 Nov Module 3 Free Cash Flow Valuation quiz: essay problems rewritten as multiple choice by the assistant"
V = []

V.append(dict(id='fcf-porto', source=SRC, readings=[19], title="FCFF/FCFE · Porto (Barco, Vela): FCFF from components, single-stage FCFF value per share, discount rate for FCFE, share repurchase", body=tab("""Juan Porto is an equity analyst preparing a research report for retail clients. He is valuing two Spanish publicly traded companies, Barco S.A. and Vela S.A. Both companies report under IFRS.

Porto chooses the FCFF approach to value Barco's shares. He summarizes Barco's financial information (in EUR millions) for the most recent year in Exhibit 1.

Exhibit 1
Net income | 2,542
Net non-cash charges | 432
Interest expense after taxes | 650
Investment in working capital | 532
Investment in fixed capital | 896
Net borrowing | 1,035

Porto estimates the value of a Barco share using a single-stage FCFF model with a discount rate of 8%, and an annual growth rate of 4%. He projects Barco's FCFF for next year to be EUR 3,360 million. Barco has 512 million of outstanding shares and EUR 16,840 million of debt outstanding.

Porto compiles information about Vela's capital structure in Exhibit 2. Vela's effective tax rate is 25%.

Exhibit 2
# | Weight | Required Return
Debt | 30% | 4.0% (before tax)
Preferred stock | 10% | 7.0%
Common stock | 60% | 10.0%
Total | 100% | ---

When analyzing Vela's cash flows, Porto notices that the company repurchased common shares during the most recent year. He considers the effect of this transaction on Vela's FCFE."""),
 questions=[
 Q(53, "Barco's FCFF (in EUR millions) for the most recent year is:", ["1,546.", "2,196.", "3,231."], 'B',
   "B is correct. FCFF = NI + NCC + Int(1 − Tax rate) − FCInv − WCInv = 2,542 + 432 + 650 − 532 − 896 = 2,196. A ignores the after-tax interest (1,546); C includes net borrowing instead of the interest (3,231)."),
 Q(54, "The estimated value (in EUR) of a Barco share is closest to:", ["131.17.", "137.73.", "164.06."], 'A',
   "A is correct. FCFF1 (3,360) is already next year's cash flow: firm value = 3,360 ÷ (8% − 4%) = 84,000. Equity = 84,000 − 16,840 = 67,160; per share = 67,160 ÷ 512 = 131.17. B grows FCFF1 again by (1 + 4%) (137.73); C does not deduct the debt (164.06)."),
 Q(55, "The discount rate Porto should use to value Vela's equity is closest to:", ["7.6%.", "9.6%.", "10.0%."], 'C',
   "C is correct. FCFE is the cash flow to common stockholders, so it is discounted at the required return on common equity, 10.0%. A is the after-tax WACC (0.3 × 4% × 0.75 + 0.1 × 7% + 0.6 × 10% = 7.6%); B is a weighted cost of preferred and common equity."),
 Q(56, "If the transaction noticed by Porto (the share repurchase) had not taken place, Vela's FCFE in the most recent year would have been:", ["lower.", "the same.", "higher."], 'B',
   "B is correct. A repurchase of shares is a use of FCFE, not a source. Transactions between the company and its shareholders (dividends, repurchases, issuances) do not affect free cash flow."),
 ]))

V.append(dict(id='fcf-nilsen', source=SRC, readings=[19], title="FCFF/FCFE · Nilsen (Laksgård): why FCFF, FCFF equity value with preferred stock, ESG adjustment, three-stage model", body=tab("""Magnus Nilsen is an equity analyst valuing the shares of Laksgård asa, a Norwegian company that uses sustainable fish farming practices to produce salmon and generates revenue from the global sale of its production.

Nilsen decides to use the FCFF model rather than the FCFE for the following reasons:

Reason 1: FCFF is a simpler and more direct valuation approach than FCFE.
Reason 2: The target debt/equity ratio is expected to remain consistent for the foreseeable future.
Reason 3: Laksgård has announced a series of preferred share issues that will take place over the next five years.

He computes Laksgård's FCFF for the most recent year which amounts to NOK 2.1 billion. Nilsen expects the FCFF to grow at a stable growth rate of 3.7%. Laksgård has a WACC of 12.5%, outstanding debt of NOK 11.7 billion and preferred stock of NOK 1.8 billion. Using this information, Nilsen calculates the value of Laksgård's total common equity.

Nilsen realizes he has not considered the following ESG points in his analysis and wonders how they will affect his previously calculated value.

Laksgård correctly anticipated the costly containment regulations recently imposed on the industry. Compared to its competitors, the company's future costs of compliance will be significantly lower.
The risk associated with farmed salmon escaping and contaminating the wild population has been over estimated. Escapes will be less likely under the new containment regulations and recent studies show the wild salmon are not threatened by the non-native breeds raised by Laksgård.

At the industry level, Nilsen notes that the demand for sustainably farmed fish is likely to outpace the population growth through 2055 when the global population is expected to peak. He decides to further refine his FCFF model to separate out the following stages:

Stage 1: Rapid growth for the first 3 years
Stage 2: Declining growth at a lower rate for the next 3 years
Stage 3: Stable growth thereafter"""),
 questions=[
 Q(57, "Which of the following reasons best supports Nilsen's decision to use the FCFF model?", ["Reason 1", "Reason 2", "Reason 3"], 'C',
   "C is correct. FCFF is appropriate for companies with changing capital structures: it is unaffected by the fluctuating borrowing (including a series of preferred issues). FCFE is the simpler, more direct model (Reason 1 is wrong) and is preferred when the capital structure is stable (Reason 2)."),
 Q(58, "Laksgård's total common equity (in NOK billions) calculated using FCFF is closest to:", ["10.4.", "11.2.", "13.0."], 'B',
   "B is correct. Firm value = FCFF0 × (1 + g) ÷ (WACC − g) = 2.1 × 1.037 ÷ (0.125 − 0.037) = 24.7. Common equity = 24.7 − 11.7 (debt) − 1.8 (preferred) = 11.2. A does not grow FCFF0 (10.4); C does not deduct the preferred shares (13.0)."),
 Q(59, "After adjusting for the ESG points, Nilsen's valuation of Laksgård will most likely:", ["decrease.", "remain unchanged.", "increase."], 'C',
   "C is correct. Both ESG points are positive for Laksgård (lower compliance cost than competitors, lower escape risk), which supports a higher valuation. Quantitative ESG information is easier to put in the cash flows; qualitative information can be reflected by adjusting the cost of equity."),
 Q(60, "Nilsen's refined FCFF model will most likely feature:", ["a decrease in operating assets in Stage 2.", "the use of a growth rate slightly lower than the GDP growth rate for Stage 3.", "a heavier proportion of the valuation attributable to Stage 3 than Stages 1 and 2."], 'C',
   "C is correct. Stage 3 is the terminal value from year 7 forward, which is usually the largest part of the value. Operating assets still grow in Stage 2 (growth is lower, not negative). Because the industry is expected to grow faster than the economy, the Stage 3 growth rate could be slightly higher than GDP growth, not lower."),
 ]))

V.append(dict(id='fcf-pegham', source=SRC, readings=[19, 22], title="FCFF/FCFE · Pegham (Horzak Digital): EBITDA as a proxy for FCFE, normalizing net income for noncash items", body=tab("""Daniel Pegham is a mergers and acquisitions analyst currently advising Horzak Digital, a privately owned, rapidly growing satellite dish manufacturer that reports in USD.

Pegham wants to use FCFE to value the company and recalls that some peers have used EBITDA as a proxy for FCFE. He concludes that EBITDA is not a good proxy for Horzak's FCFE for two reasons. First, EBITDA fails to account for cash flows from new borrowings. Second, EBITDA understates cash flows for growth companies such as Horzak.

Instead, Pegham uses the indirect method to calculate FCFE, starting with Horzak's previous year's net income. Horzak had two unusual noncash items in the previous year: a USD 5 million after-tax reversal of noncash restructuring charges taken in the previous year, and a USD 2 million after-tax gain.

Horzak is entirely family-owned, and the president is the largest shareholder. Horzak is subject to a 30% tax rate. Pegham determines that, in the event of a takeover, his valuation should reflect two additional adjustments to normalize net income.

Board compensation was USD 1,500,000 in the previous year, compared to USD 800,000 at comparable companies.
Horzak has had free use of storage facilities owned by the company's president for warehousing inventory. This benefit would otherwise have cost USD 150,000 in the previous year.

Lastly, Pegham evaluates Horzak using the capitalized cash flow method under the following assumptions.

Normalized FCFE in the current period (FCFE0) is USD 4.0 million.
The long-term growth rate of FCFE is 5%.
The market value of debt is USD 6.6 million.
The cost of equity is 17.5%."""),
 questions=[
 Q(61, "Are Pegham's reasons for rejecting EBITDA as a proxy for FCFE correct?", ["Yes", "No, his first reason is incorrect", "No, his second reason is incorrect"], 'C',
   "C is correct. EBITDA does not account for new borrowing, so the first reason is right. But EBITDA also ignores capital spending: a fast-growth company invests more than its depreciation, so EBITDA overstates (not understates) the cash flow available to shareholders."),
 Q(62, "To properly account for the two unusual noncash items when calculating FCFE, Horzak's previous year's net income should be:", ["reduced by USD 7 million.", "reduced by USD 3 million.", "increased by USD 3 million."], 'A',
   "A is correct. The reversal of a restructuring charge (USD 5 million) and the gain (USD 2 million) both boosted net income without cash, so both are subtracted: a reduction of USD 7 million."),
 ]))

V.append(dict(id='fcf-hester', source=SRC, readings=[19, 22], title="FCFF/FCFE · Hester (Fargo Durum Farms): normalization, excess earnings method, two-stage FCFE (only Q63 was in the quiz)", body=tab("""Minneapolis Viking Arbitrageurs, LLC (MVA), is a fledgling US-based hedge fund having slightly more than $50 million in assets under management. MVA specializes in owning and managing small-sized properties in agriculture, forestry, and mining.

Jim Hester, MVA's merger and acquisition (M&A) analyst is evaluating Fargo Durum Farms, Inc. (FDF) for a potential acquisition. FDF owns 1,500 acres of fertile land, farm buildings, machinery, residential quarters, livestock, cattle feed, seeds, grain, significant amounts of intangible assets, and so on. Selected data from FDF's income statement for the previous year ended and additional estimates compiled by Hester are presented in Exhibits 1 and 2.

Exhibit 1
FDF's Select Financial Data for the Previous Year Ended
Gross revenues from crops, livestock, feed, and so on | $2,500,000
Cost of goods sold | 1,000,000
Selling, general, and administrative expenses (SG&A) | 900,000
Depreciation and amortization | 200,000
Tax rate | 30%

Notes:
1) FDF carries debt in the amount of $750,000 at an interest rate of 8%, and it comprises 30% of total assets on a book value basis. Debt will be a part of the acquisition transaction.
2) FDF holds $200,000 in cash and short-term investments, but it will not be a part of the assets under acquisition transaction.

Exhibit 2
Additional Data and Hester's Estimates for Normalization
1. The cost of goods sold ratio should be higher at 45%.
2. SG&A includes $400,000 in owners' compensation. According to Hester's research, owners' compensation expense for similar sized farms is $200,000.
3. A ranch and living quarters are not required for the farm's core operations. The reported SG&A expenses include $100,000 for operating expenses relating to those properties. The ranch and living quarters will be kept by the current owners and are not a part of FDF's farming operations being considered for purchase by the hedge fund.
4. For pro forma estimations, Hester will consider depreciation and amortization at 10% of gross revenues. He thinks the current tax rate of 30% is reasonable.

First, Hester assesses FDF's normalized operating income after tax. Next, Hester values FDF's equity starting with the free cash flow to the firm (FCFF) with the data and assumptions in Exhibit 3.

Exhibit 3
FDF's Data and Estimates for Valuing Its Equity
FCFF for Current Year | $336,250
FCFF annual growth rate for the foreseeable future | 5%
FDF's debt holding at an interest rate of 8.0% per year | $750,000
FDF's weighted average cost of capital (WACC) | 11.50%
FDF's cost of equity | 14.00%

Hester presents his initial assessment and valuation of FDF to MVA's investment committee. The following are comments and suggestions from some members on the committee.

Xavier Moreno, commodities analyst, suggests the use of the excess earnings method (EEM) for valuing FDF and makes the following three statements in support of his preference:

EEM involves estimating the earnings remaining before deducting amounts that reflect the required returns to the tangible assets.
EEM is a widely-used method for valuing entire private businesses similar to FDF.
EEM is especially useful for valuing FDF because it allows for valuing working capital, fixed assets, and intangibles using different discount rates.

Jamal Bahrami, the external consultant on the committee, differs from Hester and prefers the use of the free cash flow to equity (FCFE) model. Furthermore, he develops his own estimates for valuing FDF's equity, shown in Exhibit 4.

Exhibit 4
Bahrami's Estimates for Valuing FDF's Equity
1. In current year, FDF will: realize $1,000,000 in cash flow from operations; require $400,000 in new capital investment; need additional borrowing in the amount of $250,000 at an interest cost of 8%.
2. Because of the continued strength in the global demand for wheat, FDF will experience a higher annual growth rate of 10% for the following year; thereafter, it will grow at a constant rate of 6% per year.
3. Because of illiquidity and small-firm risk premiums, the appropriate WACC and required return on equity will be higher at 12.9% and 16%, respectively."""),
 questions=[
 Q(63, "According to the approach preferred by Bahrami and using the estimates developed by him in Exhibit 4, the value of FDF's equity as of the previous year end is closest to:", ["$8,554,891.", "$8,793,104.", "$12,755,292."], 'B',
   "B is correct. FCFE for the current year = 1,000,000 − 400,000 + 250,000 = 850,000. FCFE next year = 850,000 × 1.10 = 935,000; the year after = 935,000 × 1.06 = 991,100; TV = 991,100 ÷ (0.16 − 0.06) = 9,911,000. Value at the previous year end = 850,000/1.16 + 935,000/1.16² + 9,911,000/1.16² = 732,759 + 694,857 + 7,365,488 = 8,793,104. A treats the current year's FCFE as the previous year's; C uses the WACC instead of the cost of equity."),
 ]))

V.append(dict(id='fcf-yee', source=SRC, readings=[19], title="FCFF/FCFE · Yee (McLaughlin): FCFF, FCFE from FCFF, base case FCFF value per share, FCFE value, effects of financial actions, which model", body=tab("""Chan Mei Yee is valuing McLaughlin Corporation common shares using a free cash flow approach. Yee gathered information about McLaughlin from several sources. She begins her analysis by determining free cash flow to the firm (FCFF) and free cash flow to equity (FCFE) for the 2012 fiscal year, using the financial statements in Exhibits 1 and 2. McLaughlin's fiscal year ends 31 December.

Exhibit 1
McLaughlin Corporation Selected Financial Data ($ millions, except per share amounts)
# For Year Ending 31 December | 2012
Revenues | $6,456
Earnings before interest, taxes, depreciation, and amortization (EBITDA) | 1,349
Depreciation expense | 243
Operating income | 1,106
Interest expense | 186
Pretax income | 920
Income tax (32%) | 294
Net income | $626
Number of outstanding shares (millions) | 411
2012 earnings per share | $1.52
2012 dividends paid (millions) | 148
2012 dividends per share | 0.36
2012 fixed capital investment (millions) | 535
Cost of equity | 12.0%
Weighted average cost of capital (WACC) | 9.0%

Exhibit 2
McLaughlin Corporation Consolidated Balance Sheets ($ millions)
# | 2012 | 2011
Cash and cash equivalents | $32 | $21
Accounts receivable | 413 | 417
Inventories | 709 | 638
Other current assets | 136 | 123
Total current assets | $1,290 | $1,199
Current liabilities | $2,783 | $2,678
Long-term debt | 2,249 | 2,449
Common stockholders' equity | 1,072 | 594
Total liabilities and stockholders' equity | $6,104 | $5,721

Yee plans to perform two different valuations of McLaughlin, which she calls the "base case" valuation and the "alternative" valuation. Critical assumptions for each are given in the following lists.

Base case valuation

2013 FCFF will be $600 million.
Beyond 2013, FCFF will grow in perpetuity at 4% annually.
The market value and book value of McLaughlin's long-term debt are approximately equal.

Alternative valuation

2013 earnings per share (EPS) will be $1.80.
EPS will grow forever at 6% annually.
For 2013 and beyond: Net capital expenditures (fixed capital expenditures minus depreciation) will be 30% of EPS. Investments in working capital will be 10% of EPS. Of future investments, 60% will be financed with equity and 40% will be financed with debt.

Yee is also concerned about the effects on McLaughlin's 2013 FCFE of the following three possible financial actions by McLaughlin during the year 2013:

Increasing common stock cash dividends by $110 million
Repurchasing $60 million of common shares
Reducing its outstanding long-term debt by $100 million

Melissa Nicosia, Yee's supervisor, reviews McLaughlin's valuations. Specifically, Nicosia makes the following three statements:

Statement 1: The free cash flow valuation approach is superior to the discounted dividend valuation approach because the company's dividends have been substantially different from its FCFE.
Statement 2: Because the company's capital structure seems unstable, the FCFE valuation approach is superior to the FCFF valuation approach.
Statement 3: If there is a change in control at McLaughlin, the discounted dividend valuation approach would be superior to a free cash flow valuation approach."""),
 questions=[
 Q(64, "McLaughlin's FCFF ($ millions) for 2012 is closest to:", ["$418.", "$460.", "$485."], 'C',
   "C is correct. Working capital (current assets excluding cash − current liabilities) went from −1,500 to −1,525, so WCInv = −25 (an inflow). FCFF = 626 + 243 + 186(1 − 0.32) − 535 − (−25) = 485. A uses the tax rate instead of (1 − t); B ignores the working capital investment."),
 Q(65, "Assuming 2012 FCFF equals $500 million, McLaughlin's FCFE ($ millions) for 2012 is closest to:", ["$114.", "$174.", "$574."], 'B',
   "B is correct. Net borrowing = 2,249 − 2,449 = −200. FCFE = FCFF − Int(1 − t) + net borrowing = 500 − 186 × 0.68 − 200 = 174. A ignores the tax effect on interest; C switches the sign of net borrowing."),
 Q(66, "Using Yee's base case valuation assumptions and the FCFF valuation approach, the year-end 2012 value per share of McLaughlin common stock is closest to:", ["$12.78.", "$23.73.", "$29.20."], 'B',
   "B is correct. Firm value = 600 ÷ (0.09 − 0.04) = 12,000. Equity = 12,000 − 2,249 = 9,751; per share = 9,751 ÷ 411 = $23.73. A uses the cost of equity instead of the WACC; C does not deduct the debt."),
 Q(67, "Using Yee's alternative valuation assumptions and the FCFE valuation approach, the year-end 2012 value per share of McLaughlin's common stock is closest to:", ["$18.00.", "$22.80.", "$24.17."], 'B',
   "B is correct. FCFE1 = EPS − (1 − DR)(FCInv − Dep) − (1 − DR)(WCInv) with DR = 40%: 1.80 − 0.6 × 0.54 − 0.6 × 0.18 = 1.368. Value = 1.368 ÷ (0.12 − 0.06) = $22.80. A is the FCFF-style calculation (1.80 − 0.54 − 0.18); C grows FCFE1 again by (1 + g)."),
 Q(68, "The most likely combined effect of the three possible financial actions identified by Yee will reduce McLaughlin's 2013 FCFE ($ millions) by:", ["$100.", "$160.", "$270."], 'A',
   "A is correct. Dividends ($110 million) and share repurchases ($60 million) are uses of FCFE and do not change it. Repaying $100 million of debt reduces FCFE by the full amount. C adds all three; B adds the repurchase and the debt repayment."),
 Q(69, "Which of Nicosia's three statements pertaining to McLaughlin's valuation is the most accurate? Statement:", ["1", "2", "3"], 'A',
   "A is correct. FCFE is preferred when dividends differ significantly from the capacity to pay them or when a change of control is anticipated; FCFF is preferred when the capital structure is unstable or changing. So Statement 1 is right, Statement 2 is wrong (FCFF is preferred for an unstable structure) and Statement 3 is wrong (with control, free cash flow valuation is superior to a dividend approach)."),
 ]))

V.append(dict(id='fcf-baker', source=SRC, readings=[19], title="FCFF/FCFE · Baker (Wadgett): building FCFF, single-stage FCFE value, FCFF vs FCFE with changing leverage, sensitivity analysis", body=tab("""Tom Baker, director of equity investments at Private Wealth Fund, instructs his recently hired junior equity analysts Ida Paschel and Lyle Covey to review and evaluate opportunities in the automotive parts industry for a possible addition to the equity portfolio. Baker encourages the two analysts to consider Wadgett Manufacturing Inc., a rapidly growing maker of what it calls "smart mirrors."

Covey: We could compare the value to that of the value of a subsidiary of a large technology conglomerate that also works on "smart mirrors." However, the value of a subsidiary tends to be higher than if it were a stand-alone entity.

Paschel: Ask all clients to sign a waiver stating they acknowledge that when trading illiquid shares, fair dealing will not be possible as allocation will be on a first-come, first-served basis. We want to ensure clients have full disclosure of our trade allocation process.

Baker: Pairs trading analysis would help determine whether Wadgett's market price seemed to be below its intrinsic value

Since Wadgett has no plan to begin paying a dividend, Baker asks the analysts to calculate the free cash flow to the firm (FCFF). The two analysts discuss how to go about it, and they make the following comments:

Paschel: If we begin with cash flow from operations (CFO), we do not have to make adjustments for working capital.

Covey: We should begin with earnings before interest, taxes, depreciation, and amortization (EBITDA) but will have to add in all the non-cash charges on the income statement.

Paschel: Regardless of whether we start with net income, CFO, or EBITDA, we will have to add in net borrowing.

Wadgett's ambitious growth projections will likely require a substantial investment in manufacturing facilities. In order to finance the project, Wadgett expects to borrow substantially more than it has in the past and intends to retire the debt within the next 10 years. During a discussion of how this debt may influence the valuation, the analysts make the following statements:

Statement 1: Because the capital structure seems very likely to change significantly, it would be best to use free cash flow to equity (FCFE) because the value to equity is more direct.
Statement 2: I would select FCFF over FCFE. When we look forward, the required return on equity may be more sensitive to changes in financial leverage than just the changes in weighted average cost of capital (WACC).
Statement 3: With either model, we should discount future cash flows by the required return on equity because we are considering buying the stock.

Baker asks his team to determine how sensitive the value of Wadgett's common shares is to model parameters by using the single-stage FCFE growth model for valuation. Baker instructs Paschel to calculate the current intrinsic value of the shares using the base case information. The valuation is shown in Exhibit 1.

Exhibit 1
Valuation of Wadgett's Common Shares
Normalized FCFE | $1.38
FCFE growth rate | 0.08
Equity risk premium | 0.075
Beta | 1.40
Risk-free rate | 1.2%

Baker informs Covey that the highest and lowest reasonable alternative estimates of the valuation model parameters are as follows: 15% for beta, 20% for equity risk premium, and 25% for growth rate. He asks Covey to perform a sensitivity analysis for each of these parameters while keeping all other inputs at the base case level. Covey's results are shown in Exhibit 2.

Exhibit 2
Sensitivity Analysis to Model Parameters in Valuation of Wadgett's Common Shares
# Parameter | Per-Share Valuation with Low Estimate | Per-Share Valuation with High Estimate
FCFE growth rate | $25.67 | $89.29
Equity risk premium | $93.15 | $25.70
Beta | $70.14 | $28.25

Note: The risk-free rate is 1.2% in all cases."""),
 questions=[
 Q(70, "In regard to calculating Wadgett's FCFF, the comment that is most appropriate is the one dealing with:", ["treatment of net borrowing.", "working capital adjustments.", "treatment of all non-cash charges."], 'B',
   "B is correct. CFO already reflects changes in working capital items, so Paschel's first comment is right. EBITDA has depreciation and amortization added back but other noncash charges may remain, so Covey's 'all non-cash charges' is wrong. Net borrowing is added for FCFE, not FCFF."),
 Q(71, "Using the data for the base case in Exhibit 1, the intrinsic value of Wadgett's common shares is closest to:", ["$37.30.", "$40.28.", "$73.78."], 'B',
   "B is correct. r = 0.012 + 1.4 × 0.075 = 11.7%. V0 = FCFE0 × (1 + g) ÷ (r − g) = 1.38 × 1.08 ÷ (0.117 − 0.08) = $40.28. A forgets to grow FCFE0; C subtracts the risk-free rate from the equity risk premium."),
 Q(72, "In discussing Wadgett's growth projections and the influence they may have on the FCFE and FCFF valuation process, which of the analysts' statements is most accurate?", ["Statement 1", "Statement 2", "Statement 3"], 'B',
   "B is correct. FCFF is preferred when a leveraged company expects a change in capital structure: FCFF growth reflects fundamentals more clearly than FCFE growth, which reflects fluctuating net borrowing. Statement 3 is wrong because FCFF is discounted at the WACC."),
 Q(73, "Using the data in Exhibit 2, the parameter that causes the greatest sensitivity in valuing Wadgett's common shares is the:", ["beta.", "growth rate.", "equity risk premium."], 'C',
   "C is correct. The range of value for each parameter: equity risk premium $93.15 − $25.70 = $67.45; growth rate $89.29 − $25.67 = $63.62; beta $70.14 − $28.25 = $41.89. The equity risk premium has the largest range."),
 ]))

# ---------------- essay problems turned into multiple choice ----------------
V.append(dict(id='fcf-mcq-firm', source=SRC2 + " (essays Q1-6)", readings=[19], created=True,
 title="FCFF/FCFE · Shimotsuke (FCFF vs FCFE value) and BCC (WACC, firm value, equity value, value per share)",
 body=tab("""Part 1. Shimotsuke Co. LTD. has FCFF of 1.7 billion Japanese yen (JPY) and FCFE of JPY1.3 billion. Shimotsuke Co.'s WACC is 11%, and its required rate of return for equity is 13%. FCFF is expected to grow forever at 7%, and FCFE is expected to grow forever at 7.5%. Shimotsuke Co. has debt outstanding of JPY15 billion.

Part 2. Elina Kuznetsova is planning to value BCC Corporation, a provider of a variety of industrial metals and minerals. Kuznetsova uses a single-stage FCFF approach. The financial information Kuznetsova has assembled for her valuation is as follows:

The company has 1,852 million shares outstanding.
The market value of its debt is $3.192 billion.
The FCFF is currently $1.1559 billion.
The equity beta is 0.90; the equity risk premium is 5.5%; the risk-free rate is 5.5%.
The before-tax cost of debt is 7.0%.
The tax rate is 40%.
To calculate WACC, she will assume the company is financed 25% with debt.
The FCFF growth rate is 4%."""),
 questions=[
 Q(1, "Using the FCFF valuation approach, the total value of Shimotsuke Co.'s equity (JPY billions) is closest to:", ["25.409.", "30.475.", "45.475."], 'B',
   "B is correct. Firm value = FCFF0 × (1 + g) ÷ (WACC − g) = 1.7 × 1.07 ÷ (0.11 − 0.07) = 45.475. Equity = firm value − debt = 45.475 − 15 = 30.475. C is the firm value; A is the FCFE value."),
 Q(2, "Using the FCFE valuation approach, the total value of Shimotsuke Co.'s equity (JPY billions) is closest to:", ["23.64.", "25.41.", "45.48."], 'B',
   "B is correct. Equity = FCFE0 × (1 + g) ÷ (r − g) = 1.3 × 1.075 ÷ (0.13 − 0.075) = 25.409, discounted at the required return on equity. No debt is deducted because FCFE is already after debt payments. A forgets to grow FCFE0; C is the FCFF firm value."),
 Q(3, "BCC's WACC is closest to:", ["8.89%.", "9.59%.", "10.45%."], 'A',
   "A is correct. Required return on equity = 5.5% + 0.90 × 5.5% = 10.45%. WACC = 0.25 × 7.0% × (1 − 0.40) + 0.75 × 10.45% = 1.05% + 7.84% = 8.89%. B leaves out the tax shield; C is the cost of equity."),
 Q(4, "BCC's firm value ($ billions) is closest to:", ["18.64.", "23.65.", "24.58."], 'C',
   "C is correct. Firm value = FCFF0 × (1 + g) ÷ (WACC − g) = 1.1559 × 1.04 ÷ (0.0889 − 0.04) = 24.58. B does not grow FCFF0; A discounts at the cost of equity."),
 Q(5, "BCC's total market value of equity ($ billions) is closest to:", ["21.39.", "24.58.", "27.78."], 'A',
   "A is correct. Equity = firm value − market value of debt = 24.583 − 3.192 = 21.391. B is the firm value; C adds the debt."),
 Q(6, "BCC's value per share ($) is closest to:", ["11.55.", "13.27.", "15.00."], 'A',
   "A is correct. Value per share = equity value ÷ shares = 21.391 ÷ 1.852 = $11.55. B divides the firm value by the shares; C adds the debt to the firm value."),
 ]))

V.append(dict(id='fcf-mcq-laforge', source=SRC2 + " (essays Q16-20)", readings=[19], created=True,
 title="FCFF/FCFE · LaForge Systems: FCFF and FCFE from net income, CFO, EBIT and EBITDA",
 body=tab("""LaForge Systems, Inc., has net income of $285 million for the year 2020.

LaForge Systems, Inc., Balance Sheet (in Millions)
# Years Ended 31 December | 2019 | 2020
Cash and equivalents | $210 | $248
Accounts receivable | 474 | 513
Inventory | 520 | 564
Total current assets | 1,204 | 1,325
Gross fixed assets | 2,501 | 2,850
Accumulated depreciation | (604) | (784)
Net fixed assets | 1,897 | 2,066
Total assets | $3,101 | $3,391
Accounts payable | $295 | $317
Notes payable | 300 | 310
Accrued taxes and expenses | 76 | 99
Total current liabilities | 671 | 726
Long-term debt | 1,010 | 1,050
Common stock | 50 | 50
Additional paid-in capital | 300 | 300
Retained earnings | 1,070 | 1,265
Total shareholders' equity | 1,420 | 1,615
Total liabilities and shareholders' equity | $3,101 | $3,391

Statement of Income
# In Millions, except Per-Share Data | 31 December 2020
Total revenues | $2,215
Operating costs and expenses | 1,430
EBITDA | 785
Depreciation | 180
EBIT | 605
Interest expense | 130
Income before tax | 475
Taxes (at 40%) | 190
Net income | 285
Dividends | 90
Addition to retained earnings | 195

Statement of Cash Flows
# In Millions | 31 December 2020
Net income | $285
Depreciation | 180
Accounts receivable | (39)
Inventories | (44)
Accounts payable | 22
Accrued taxes and expenses | 23
Cash provided by operating activities | $427
Purchases of fixed assets | 349
Cash used for investing activities | $349
Notes payable | $(10)
Long-term financing issuances | (40)
Common stock dividends | 90
Cash used for financing activities | $40
Cash and equivalents increase (decrease) | 38
Cash and equivalents at beginning of year | 210
Cash and equivalents at end of year | $248
Interest paid | $130
Income taxes paid | $190

Note: The statement of cash flows shows the use of a convention by which the positive numbers of $349 and $40 for cash used for investing activities and cash used for financing activities, respectively, are understood to be subtractions, because "cash used" is an outflow. Net borrowing is the $50 million increase in notes payable and long-term debt."""),
 questions=[
 Q(16, "LaForge's FCFF ($ millions) from net income is closest to:", ["156.", "194.", "208."], 'A',
   "A is correct. FCFF = NI + NCC + Int(1 − t) − FCInv − WCInv = 285 + 180 + 130 × 0.6 − 349 − 38 = 156 (WCInv = 39 + 44 − 22 − 23 = 38). B leaves out working capital; C uses pretax interest."),
 Q(17, "LaForge's FCFE ($ millions) from net income is closest to:", ["28.", "78.", "128."], 'C',
   "C is correct. FCFE = NI + NCC − FCInv − WCInv + net borrowing = 285 + 180 − 349 − 38 + 50 = 128. B leaves out net borrowing; A subtracts it."),
 Q(18, "To go from LaForge's FCFF to its FCFE, the adjustments are to:", ["subtract after-tax interest of 78 and add net borrowing of 50.", "subtract pretax interest of 130 and add net borrowing of 50.", "add after-tax interest of 78 and subtract net borrowing of 50."], 'A',
   "A is correct. FCFE = FCFF − Int(1 − t) + net borrowing = 156 − 78 + 50 = 128."),
 Q(19, "Starting from EBITDA of $785 million, LaForge's FCFF ($ millions) is closest to:", ["156.", "264.", "398."], 'A',
   "A is correct. FCFF = EBITDA(1 − t) + Dep × t − FCInv − WCInv = 785 × 0.6 + 180 × 0.4 − 349 − 38 = 471 + 72 − 349 − 38 = 156. B adds the full depreciation instead of the tax shield on it; C ignores the taxes."),
 Q(20, "Starting from CFO of $427 million, LaForge's FCFE ($ millions) is closest to:", ["78.", "128.", "206."], 'B',
   "B is correct. FCFE = CFO − FCInv + net borrowing = 427 − 349 + 50 = 128. A leaves out net borrowing; C adds after-tax interest as if it were FCFF."),
 ]))

V.append(dict(id='fcf-mcq-phaneuf', source=SRC2 + " (essays Q21, 22, 30, 31, 32)", readings=[19], created=True,
 title="FCFF/FCFE · Phaneuf (value per share by FCFF and FCFE) and Sundanci (FCFE, two-stage value, limitations)",
 body=tab("""Part 1. Do Pham is evaluating Phaneuf Accelerateur by using the FCFF and FCFE valuation approaches. Pham has collected the following information (currency in euros):

Phaneuf has net income of €250 million, depreciation of €90 million, capital expenditures of €170 million, and an increase in working capital of €40 million.
Phaneuf will finance 40% of the increase in net fixed assets (capital expenditures less depreciation) and 40% of the increase in working capital with debt financing.
Interest expenses are €150 million. The current market value of Phaneuf's outstanding debt is €1,800 million.
FCFF is expected to grow at 6.0% indefinitely, and FCFE is expected to grow at 7.0%.
The tax rate is 30%.
Phaneuf is financed with 40% debt and 60% equity. The before-tax cost of debt is 9%, and the before-tax cost of equity is 13%.
Phaneuf has 10 million outstanding shares.

Part 2. The management of Telluride, an international diversified conglomerate, has announced that it will divest its wholly owned medical supply subsidiary, Sundanci, in a tax-free spin-off. Sue Carroll is director of research at Kesson and Associates. In developing an investment recommendation for Sundanci, Carroll has gathered the information shown in Exhibit 1 and Exhibit 2.

Exhibit 1
Sundanci Actual 2019 and 2020 Financial Statements for Fiscal Years Ending 31 May (Dollars in Millions except Per-Share Data)
# Income Statement | 2019 | 2020
Revenue | $474 | $598
Depreciation | 20 | 23
Other operating costs | 368 | 460
Income before taxes | 86 | 115
Taxes | 26 | 35
Net income | 60 | 80
Dividends | 18 | 24
EPS | $0.714 | $0.952
Dividends per share | $0.214 | $0.286
Common shares outstanding | 84.0 | 84.0
# Balance Sheet | 2019 | 2020
Current assets (includes $5 cash in 2019 and 2020) | $201 | $326
Net property, plant, and equipment | 474 | 489
Total assets | 675 | 815
Current liabilities (all non-interest-bearing) | 57 | 141
Long-term debt | 0 | 0
Total liabilities | 57 | 141
Shareholders' equity | 618 | 674
Total liabilities and equity | 675 | 815
Capital expenditures | 34 | 38

Exhibit 2
Selected Financial Information
Required rate of return on equity | 14%
Industry growth rate | 13%
Industry P/E | 26

Abbey Naylor has been directed by Carroll to determine the value of Sundanci's stock by using the FCFE model. Naylor believes that Sundanci's FCFE will grow at 27% for two years and at 13% thereafter. Capital expenditures, depreciation, and working capital are all expected to increase proportionately with FCFE."""),
 questions=[
 Q(21, "Using the FCFF valuation approach, Phaneuf's per-share value of equity (€) is closest to:", ["363.98.", "396.62.", "576.62."], 'B',
   "B is correct. FCFF = 250 + 90 + 150 × 0.7 − 170 − 40 = 235. WACC = 0.4 × 9% × 0.7 + 0.6 × 13% = 10.32%. Firm value = 235 × 1.06 ÷ (0.1032 − 0.06) = 5,766.2. Equity = 5,766.2 − 1,800 = 3,966.2, i.e. €396.62 per share. A does not grow FCFF; C forgets to deduct the debt."),
 Q(22, "Using the FCFE valuation approach, Phaneuf's per-share value of equity (€) is closest to:", ["296.67.", "317.43.", "396.62."], 'B',
   "B is correct. Net borrowing = 40% × (170 − 90 + 40) = 48; FCFE = 250 + 90 − 170 − 40 + 48 = 178. Equity = 178 × 1.07 ÷ (0.13 − 0.07) = 3,174.3, i.e. €317.43 per share. A does not grow FCFE; C is the FCFF-based value."),
 Q(30, "Sundanci's FCFE per share for 2020 ($) is closest to:", ["0.286.", "0.774.", "0.952."], 'A',
   "A is correct. FCFE = NI + depreciation − capital expenditures − investment in working capital = 80 + 23 − 38 − 41 = 24 (working capital investment = increase in current assets excluding cash, 321 − 196 = 125, less the increase in current liabilities, 84, = 41). Per share = 24 ÷ 84 = 0.286. B leaves out working capital; C is EPS."),
 Q(31, "Based on the two-stage FCFE model (27% growth for two years, then 13%), the current value of a Sundanci share ($) is closest to:", ["40.47.", "40.79.", "52.59."], 'B',
   "B is correct. FCFE per share: 2021 0.3632, 2022 0.4613, 2023 0.5213. Terminal value in 2022 = 0.5213 ÷ (0.14 − 0.13) = 52.13. Present value = 0.3632/1.14 + (0.4613 + 52.13)/1.14² = 0.3186 + 40.4673 = 40.79. A is the discounted value of the last year only; C is the undiscounted total of 2022."),
 Q(32, "A limitation that the two-stage DDM and the two-stage FCFE model have in common is that:", ["the value is very sensitive to the stable growth assumption, and a sudden shift from high to stable growth is unrealistic.", "they ignore the company's investment and financing policies.", "they cannot be used when a change of corporate control is possible."], 'A',
   "A is correct. Both two-stage models need a high-growth period of uncertain length, assume an abrupt shift to stable growth and are very sensitive to the steady-state growth rate; estimating the required return is also difficult. B and C are weaknesses of the DDM that the FCFE model fixes."),
 ]))

V.append(dict(id='fcf-mcq-values', source=SRC2 + " (essays Q39, 40, 41)", readings=[19], created=True,
 title="FCFF/FCFE · PHB (value per share and underpricing) and NewMarket (two-stage FCFE, EBITDA over the risk-free rate)",
 body=tab("""Part 1. PHB Company currently sells for £32.50 per share. In an attempt to determine whether PHB is fairly priced, an analyst has assembled the following information:

The before-tax required rates of return on PHB debt, preferred stock, and common stock are, respectively, 7.0%, 6.8%, and 11.0%.
The company's target capital structure is 30% debt, 15% preferred stock, and 55% common stock.
The market value of the company's debt is £145 million, and its preferred stock is valued at £65 million.
PHB's FCFF for the year just ended is £28 million. FCFF is expected to grow at a constant rate of 4% for the foreseeable future.
The tax rate is 35%.
PHB has 8 million outstanding common shares.

Part 2. An aggressive financial planner who claims to have a superior method for picking undervalued stocks is trying to steal one of your clients. The planner claims that the best way to find the value of a stock is to divide EBITDA by the risk-free bond rate. The planner is urging your client to invest in NewMarket, Inc. The planner says that NewMarket's EBITDA of $1,580 million divided by the long-term government bond rate of 7% gives a total value of $22,571.4 million. With 318 million outstanding shares, NewMarket's value per share found by using this method is $70.98. Shares of NewMarket currently trade for $36.50.

You provide an alternative estimate of NewMarket's value per share based on a two-stage FCFE valuation approach, with these assumptions:

Net income is currently $600 million. Net income will grow by 20% annually for the next three years.
The net investment in operating assets (capital expenditures less depreciation plus investment in working capital) will be $1,150 million next year and grow at 15% for the following two years.
40% of the net investment in operating assets will be financed with net new debt financing.
NewMarket's beta is 1.3; the risk-free bond rate is 7%; the equity risk premium is 4%.
After three years, the growth rate of net income will be 8% and the net investment in operating assets each year will drop to 30% of net income.
Debt is, and will continue to be, 40% of total assets.
NewMarket has 318 million shares outstanding."""),
 questions=[
 Q(39, "PHB's estimated value per share, and whether the stock is underpriced at £32.50, is closest to:", ["£55.82, so the stock appears underpriced.", "£63.95, so the stock appears underpriced.", "£82.08, so the stock appears underpriced."], 'A',
   "A is correct. WACC = 0.30 × 7% × 0.65 + 0.15 × 6.8% + 0.55 × 11% = 8.435%. Firm value = 28 × 1.04 ÷ (0.08435 − 0.04) = £656.6 million. Equity = 656.6 − 145 − 65 = £446.6 million, or £55.82 per share, above £32.50. B does not deduct the preferred stock; C deducts neither the debt nor the preferred stock."),
 Q(40, "NewMarket's value per share from the two-stage FCFE model ($) is closest to:", ["48.67.", "49.21.", "70.98."], 'B',
   "B is correct. r = 7% + 1.3 × 4% = 12.2%. FCFE = NI − net investment + new debt: 30.00, 70.50, 124.27 in years 1–3, and 918.19 in year 4. PV of the first three years = 170.72; V3 = 918.19 ÷ (0.122 − 0.08), PV = 15,477.64; total = 15,648.36, divided by 318 = $49.21. A counts only the terminal value; C is the planner's EBITDA value."),
 Q(41, "The best criticism of the planner's method of dividing EBITDA by the risk-free bond rate is that:", ["EBITDA ignores taxes, interest and reinvestment needs and the capital structure, and the risk-free rate is not the required return on risky equity cash flows.", "EBITDA is always lower than FCFE, so the planner understates the value.", "the method is acceptable if the bond rate is above the growth rate."], 'A',
   "A is correct. Taxes and interest have a prior claim on cash flow, EBITDA ignores reinvestment in operating assets (so it overstates the funds for stockholders of a growing company) and the capital structure, and dividing by a fixed rate treats a growing company's cash flow as a non-growing perpetuity. The risk-free rate is not the proper discount rate for equity."),
 ]))

V.append(dict(id='fcf-mcq-effects', source=SRC2 + " (essay Q29, split into six questions)", readings=[19], created=True,
 title="FCFF/FCFE · Effect on FCFF and FCFE of a $100 change in an item (tax rate 40%)",
 body="A company pays tax at a rate of 40%. For each question, assume a $100 increase in the item and nothing else changes except what follows from the item itself.",
 questions=[
 Q(29, "A $100 increase in cash operating expenses changes this period's FCFF and FCFE by:", ["FCFF −$100 and FCFE −$100.", "FCFF −$60 and FCFE −$60.", "FCFF −$60 and FCFE 0."], 'B',
   "B is correct. Higher operating expenses cut pretax income by 100 and taxes by 40, so net income and EBIT(1 − t) fall by 60; FCFF and FCFE both fall by 60."),
 Q(129, "A $100 increase in depreciation changes this period's FCFF and FCFE by:", ["FCFF −$60 and FCFE −$60.", "FCFF +$40 and FCFE +$40.", "FCFF +$100 and FCFE +$100."], 'B',
   "B is correct. Depreciation is a noncash charge: net income falls by 60 but 100 is added back, so cash flow rises by the tax shield, 0.40 × 100 = 40, for both FCFF and FCFE."),
 Q(229, "A $100 increase in interest expense changes this period's FCFF and FCFE by:", ["FCFF 0 and FCFE −$60.", "FCFF −$60 and FCFE −$60.", "FCFF 0 and FCFE 0."], 'A',
   "A is correct. FCFF adds back after-tax interest, so it is unchanged. FCFE is after interest: net income falls by 100 × (1 − 0.40) = 60."),
 Q(329, "A $100 increase in notes payable changes this period's FCFF and FCFE by:", ["FCFF +$100 and FCFE +$100.", "FCFF 0 and FCFE +$100.", "FCFF 0 and FCFE 0."], 'B',
   "B is correct. Net borrowing is part of FCFE (cash available to equity holders) but is not part of FCFF, which is before financing flows."),
 Q(429, "A $100 increase in accounts receivable changes this period's FCFF and FCFE by:", ["FCFF −$100 and FCFE −$100.", "FCFF −$60 and FCFE −$60.", "FCFF +$100 and FCFE +$100."], 'A',
   "A is correct. An increase in accounts receivable is an investment in working capital that uses cash: FCFF and FCFE both fall by 100, before any tax effect."),
 Q(529, "Cash dividends paid of $100 or a repurchase of $100 of common shares changes this period's FCFF and FCFE by:", ["FCFF 0 and FCFE −$100.", "FCFF 0 and FCFE 0.", "FCFF −$100 and FCFE −$100."], 'B',
   "B is correct. Dividends and share repurchases (and share issues) are transactions between the company and its shareholders, i.e. uses of free cash flow, so they do not change FCFF or FCFE."),
 ]))

V.append(dict(id='fcf-mcq-mackinac', source=SRC2 + " (essays Q42, 43, 44)", readings=[19], created=True,
 title="FCFF/FCFE · Mackinac: two-stage DDM, two-stage FCFE, which model for a 70% acquirer",
 body=tab("""John Jones is head of the research department of Peninsular Research and is estimating the value of Mackinac Inc. The company has released its June 2019 financial statements, shown in Exhibit 1, Exhibit 2, and Exhibit 3.

Exhibit 1
Mackinac Inc. Annual Income Statement, 30 June 2019 (in Thousands, except Per-Share Data)
Sales | $250,000
Cost of goods sold | 125,000
Gross operating profit | 125,000
Selling, general, and administrative expenses | 50,000
EBITDA | 75,000
Depreciation and amortization | 10,500
EBIT | 64,500
Interest expense | 11,000
Pretax income | 53,500
Income taxes | 16,050
Net income | $37,450
Shares outstanding | 13,000
EPS | $2.88

Exhibit 2
Mackinac Inc. Balance Sheet, 30 June 2019 (in Thousands)
Cash and equivalents | $20,000
Receivables | 40,000
Inventories | 29,000
Other current assets | 23,000
Total current assets | $112,000
Property, plant, and equipment | $145,000
Less: Accumulated depreciation | 43,000
Net property, plant, and equipment | 102,000
Investments | 70,000
Other noncurrent assets | 36,000
Total noncurrent assets | 208,000
Total assets | $320,000
Accounts payable | $41,000
Short-term debt | 12,000
Other current liabilities | 17,000
Total current liabilities | $70,000
Long-term debt | 100,000
Total liabilities | 170,000
Common equity | 40,000
Retained earnings | 110,000
Total equity | 150,000
Total liabilities and equity | $320,000

Exhibit 3
Mackinac Inc. Statement of Cash Flows, 30 June 2019 (in Thousands)
Net income | $37,450
Depreciation and amortization | 10,500
(Increase) decrease in receivables | ($5,000)
(Increase) decrease in inventories | (8,000)
Increase (decrease) in payables | 6,000
Increase (decrease) in other current liabilities | 1,500
Net change in working capital | (5,500)
Net cash from operating activities | $42,450
Purchase of property, plant, and equipment | ($15,000)
Net cash from investing activities | ($15,000)
Change in debt outstanding | $4,000
Payment of cash dividends | (22,470)
Net cash from financing activities | (18,470)
Net change in cash and cash equivalents | $8,980
Cash at beginning of period | 11,020
Cash at end of period | $20,000

Mackinac has announced that it has finalized an agreement to handle North American production of a successful product currently marketed by a company headquartered outside North America. Jones decides to value Mackinac by using the DDM and FCFE models. After reviewing Mackinac's financial statements and forecasts related to the new production agreement, Jones concludes the following:

Mackinac's earnings and FCFE are expected to grow 17% a year over the next three years before stabilizing at an annual growth rate of 9%.
Mackinac will maintain the current payout ratio.
Mackinac's beta is 1.25.
The government bond yield is 6%, and the market equity risk premium is 5%."""),
 questions=[
 Q(42, "Using the two-stage DDM, the value of a share of Mackinac's common stock ($) is closest to:", ["65.64.", "71.28.", "99.77."], 'B',
   "B is correct. r = 6% + 1.25 × 5% = 12.25%. DPS0 = 22,470 ÷ 13,000 = 1.7285; DPS1 = 2.0223, DPS2 = 2.3661, DPS3 = 2.7683, DPS4 = 3.0175. Value = 2.0223/1.1225 + 2.3661/1.1225² + 2.7683/1.1225³ + [3.0175 ÷ (0.1225 − 0.09)]/1.1225³ = 1.80 + 1.88 + 1.96 + 65.64 = $71.28. A is only the present value of the terminal value; C is the FCFE value."),
 Q(43, "Using the two-stage FCFE model, the value of a share of Mackinac's common stock ($) is closest to:", ["71.28.", "87.08.", "99.77."], 'C',
   "C is correct. FCFE0 = 37,450 + 10,500 − 15,000 − 5,500 + 4,000 (net borrowing) = 31,450, or 2.4192 per share. Growing it at 17% for three years and then 9%, and discounting at 12.25%, gives $99.77. A is the DDM value; B leaves out net borrowing (FCFE0 of 27,450)."),
 Q(44, "A corporate client considers acquiring a 70% interest in Mackinac. For its valuation, the most appropriate model is:", ["the FCFE model, because a controlling owner can change the dividend policy and cares about the maximum residual cash flow after obligations and investment needs.", "the DDM, because the owner will receive only the dividends.", "the DDM, because the FCFE model cannot be used for a company that pays dividends."], 'A',
   "A is correct. The FCFE model is best for takeovers or a reasonable chance of a change of control, because controlling stockholders can change the dividend policy. The DDM assumes the only cash flows to stockholders are dividends."),
 ]))

V.append(dict(id='fcf-mcq-sens', source=SRC2 + " (essays Q45, 46, 47, 48)", readings=[19], created=True,
 title="FCFF/FCFE · McInish (single-stage FCFE and sensitivity) and KMobile (real required return, real-terms FCFE value)",
 body=tab("""Part 1. James Smith is valuing McInish Corporation and performing a sensitivity analysis on his valuation. He uses a single-stage FCFE growth model. The base-case values for each of the parameters in the model are given, together with possible low and high estimates for each variable, in the following table.

# Variable | Base-Case Value | Low Estimate | High Estimate
Normalized FCFE0 | £0.88 | £0.70 | £1.14
Risk-free rate | 5.08% | 5.00% | 5.20%
Equity risk premium | 5.50% | 4.50% | 6.50%
Beta | 0.70 | 0.60 | 0.80
FCFE growth rate | 6.40% | 4.00% | 7.00%

The estimated price of a McInish share using the base-case value for every variable except the one being changed is:

# Variable | Price with Low Value (£) | Price with High Value (£)
Normalized FCFE0 | 29.44 | 47.94
Risk-free rate | 38.22 | 35.33
Equity risk premium | 51.17 | 28.99
Beta | 47.29 | 30.40
FCFE growth rate | 18.56 | 48.79

Part 2. KMobile Telecom is an Asian mobile network operator headquartered in Seoul, South Korea. Sol Kim has estimated the normalized FCFE per share for KMobile to be 1,300 Korean won (KRW) for the year just ended. The real country return for South Korea is 6.50%. To estimate the required return for KMobile, Kim makes the following adjustments to the real country return: an industry adjustment of +0.60%, a size adjustment of –0.10%, and a leverage adjustment of +0.25%. The long-term real growth rate for South Korea is estimated to be 3.5%, and Kim expects the real growth rate of KMobile to track the country rate."""),
 questions=[
 Q(45, "Using the base-case values, the current value of a McInish share (£) is closest to:", ["22.40.", "34.78.", "37.01."], 'C',
   "C is correct. r = 5.08% + 0.70 × 5.50% = 8.93%. V0 = FCFE0 × (1 + g) ÷ (r − g) = 0.88 × 1.064 ÷ (0.0893 − 0.064) = £37.01. B does not grow FCFE0; A leaves out the beta."),
 Q(46, "Based on the ranges of price in the table, the stock price is most sensitive to:", ["the FCFE growth rate.", "the equity risk premium.", "the normalized FCFE0."], 'A',
   "A is correct. The ranges are: growth rate 30.23, equity risk premium 22.18, normalized FCFE0 18.50, beta 16.89, risk-free rate 2.89. The FCFE growth rate has the widest range."),
 Q(146, "Based on the ranges of price in the table, the stock price is least sensitive to:", ["the risk-free rate.", "beta.", "the normalized FCFE0."], 'A',
   "A is correct. The range for the risk-free rate is only 2.89 (38.22 − 35.33), the smallest of the five."),
 Q(47, "The real required rate of return for KMobile is closest to:", ["7.00%.", "7.25%.", "7.45%."], 'B',
   "B is correct. 6.50% + 0.60% − 0.10% + 0.25% = 7.25%. A leaves out the leverage adjustment; C adds the size adjustment instead of subtracting it."),
 Q(48, "Using the single-stage FCFE model with real values for the discount rate and the growth rate, the value of one KMobile share (KRW) is closest to:", ["34,667.", "35,880.", "37,136."], 'B',
   "B is correct. V0 = FCFE0 × (1 + g_real) ÷ (r_real − g_real) = 1,300 × 1.035 ÷ (0.0725 − 0.035) = KRW 35,880. A does not grow FCFE0; C grows it twice."),
 ]))

V.append(dict(id='fcf-mcq-stages', source=SRC2 + " (essays Q49, 50, 51, 52)", readings=[19], created=True,
 title="FCFF/FCFE · NYL, Bron and QuickChange multistage FCFE values, Gothenburg value per share with non-operating assets",
 body=tab("""Part 1. Hugo Dubois is evaluating NYL Manufacturing Company, Ltd. In 2020 the company is unprofitable and NYL pays no dividends on its common shares. Dubois decides to value NYL by using his forecasts of FCFE. He gathers the following facts and assumptions:

The company has 17.0 billion shares outstanding.
Sales will be €5.5 billion in 2021, increasing at 28% annually for the next four years (through 2025).
Net income will be 32% of sales.
Investment in fixed assets will be 35% of sales; investment in working capital will be 6% of sales; depreciation will be 9% of sales.
20% of the net investment in assets will be financed with debt.
Interest expenses will be only 2% of sales.
The tax rate will be 10%. NYL Manufacturing's beta is 2.1; the risk-free government bond rate is 6.4%; the equity risk premium is 5.0%.
At the end of 2025, Dubois projects NYL terminal stock value at 18 times earnings.

The resulting forecasts (all data in billions of euros) are:

# | 2021 | 2022 | 2023 | 2024 | 2025
Sales (growing at 28%) | 5.500 | 7.040 | 9.011 | 11.534 | 14.764
Net income = 32% of sales | 1.760 | 2.253 | 2.884 | 3.691 | 4.724
FCFE | 0.352 | 0.451 | 0.577 | 0.738 | 0.945

Part 2. Bron has EPS of $3.00 in 2019 and expects EPS to increase by 21% in 2020. EPS are expected to grow at a decreasing rate for the following five years, as shown in the following table.

# | 2020 | 2021 | 2022 | 2023 | 2024 | 2025
Growth rate for EPS | 21% | 18% | 15% | 12% | 9% | 6%
Net capital expenditures per share | $5.00 | $5.00 | $4.50 | $4.00 | $3.50 | $1.50

In 2025, the growth rate will be 6%, and it is expected to stay at that rate thereafter. Net capital expenditures (capital expenditures minus depreciation) will be $5.00 per share in 2019 and then follow the pattern predicted in the table. In 2025, net capital expenditures are expected to be $1.50, and they will then grow at 6% annually. The investment in working capital parallels the increase in net capital expenditures and is predicted to equal 25% of net capital expenditures each year. In 2025, investment in working capital will be $0.375, and it is predicted to grow at 6% thereafter. Bron will use debt financing to fund 40% of net capital expenditures and 40% of the investment in working capital. The required rate of return for Bron is 12%. The FCFE per share for 2020 to 2025 is −0.120, 0.533, 1.551, 2.517, 3.389 and 5.249, and the present value of 2020 to 2024 FCFE is 4.944 per share.

Part 3. Minsuh Park is preparing a valuation of QuickChange Auto Centers, Inc. Park has decided to use a three-stage FCFE valuation model and the following estimates. The FCFE per share for the current year is $0.75. The FCFE is expected to grow at 10% for next year, then at 26% annually for the following three years, and then at 6% in Year 5 and thereafter. QuickChange's estimated beta is 2.00, and Park believes that current market conditions dictate a 4.5% risk-free rate of return and a 5.0% equity risk premium.

Part 4. Astrid Nilsson has valued the operating assets of Gothenburg Extrusion AB at 720 million Swedish kronor (SEK). The company also has short-term cash and securities with a market value of SEK60 million that are not needed for Gothenburg's operations. The noncurrent investments have a book value of SEK30 million and a market value of SEK45 million. The company also has an overfunded pension plan, with plan assets of SEK210 million and plan liabilities of SEK170 million. Gothenburg Extrusion has SEK215 million of notes and bonds outstanding and 100 million outstanding shares."""),
 questions=[
 Q(49, "The value of one ordinary share of NYL Manufacturing (€) is closest to:", ["2.29.", "2.40.", "5.00."], 'B',
   "B is correct. r = 6.4% + 2.1 × 5.0% = 16.9%. The terminal value in 2025 = 18 × 4.724 = 85.03, with a present value of 38.95; the present value of the first five years' FCFE is 1.82. Equity = 40.77 billion, divided by 17 billion shares = €2.398. A leaves out the FCFE of the first five years; C does not discount the terminal value."),
 Q(50, "The value of a Bron share using the two-stage FCFE approach ($) is closest to:", ["49.64.", "54.58.", "92.43."], 'B',
   "B is correct. FCFE in 2025 grows at 6% forever, so the value at the end of 2024 = 5.249 ÷ (0.12 − 0.06) = 87.483, with a present value of 87.483/1.12⁵ = 49.64. Add the 4.944 of the first five years: $54.58. A is only the terminal value; C does not discount it."),
 Q(51, "The value of a QuickChange share using the three-stage FCFE model ($) is closest to:", ["3.35.", "11.97.", "15.32."], 'C',
   "C is correct. r = 4.5% + 2.0 × 5.0% = 14.5%. FCFE for years 1–4 is 0.825, 1.040, 1.310, 1.650 (present value 3.35) and TV4 = 1.749 ÷ (0.145 − 0.06) = 20.58 (present value 11.97). Total = 3.35 + 11.97 = $15.32."),
 Q(52, "The value per share of Gothenburg Extrusion stock (SEK) is closest to:", ["5.05.", "6.50.", "8.20."], 'B',
   "B is correct. Non-operating assets = 60 (securities) + 45 (investments at market value) + 40 (pension surplus: 210 − 170) = 145. Firm value = 720 + 145 = 865; equity = 865 − 215 = 650; per share = 650 ÷ 100 = SEK 6.50. A ignores the non-operating assets; C counts the whole pension plan assets instead of the surplus."),
 ]))
