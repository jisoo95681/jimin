from lib import *
S1A=[]
S1A.append(V('Corp',"""Pinku Singh is the chief financial officer (CFO) of Axiom, a publicly traded conglomerate that is split into three divisions. Singh wants to optimize the corporate and financing structure of the company and begins by determining which division has the lowest cost of capital based on the asset profiles presented in Exhibit 1.

Exhibit 1
# | Division A | Division B | Division C
Nature of assets | Mostly tangible | Mostly tangible | Mostly intangible
Fungibility of assets | Non-fungible | Fungible | Non-fungible

Singh employs the build-up approach to estimate the specific-company risk premium (SCRP) for Axiom. The firm's cost of equity is 13.5%. Singh estimates the market equity risk premium to be 7.0%, the industry risk premium to be 0.0% and the size premium for Axiom to be 1.2%. The risk-free rate is 3.0% and Axiom has a beta of 1.5.

Singh would like to take advantage of the under-leveraged balance sheet of Axiom while ensuring that the company's current shareholders retain control. Singh considers what corporate actions could achieve these objectives.

Division B generated an EBITDA of $10.8 million last year and is valued at 6.0x EV/EBITDA. Division B has two segments:
A wholesale segment which contributed 20% to the division's EBITDA. Comparable wholesale retailers are valued at 7.0x EV/EBITDA.
A consumer segment which contributed 80% to the division's EBITDA. Comparable consumer retailers are valued at 5.1x EV/EBITDA.

Singh evaluates if spinning off Division B's wholesale segment would have a material impact on shareholder value, which she defines as a change in shareholder value of greater than 5%.""",[
Q("Based on their asset profiles, which of Axiom's divisions most likely has the lowest cost of capital?",["Division A","Division B","Division C"],'B',[
"Division A's assets are mostly tangible but non-fungible, so on fungibility alone its cost of capital is expected to be higher than Division B's.",
"Division B's assets are mostly tangible and fungible. Tangible assets can be pledged as collateral and fungible, liquid assets give access to cheaper capital, so Division B has the lowest cost of capital.",
"Division C's assets are mostly intangible and non-fungible, so its cost of capital is expected to be higher than Division A's and Division B's."]),
Q("Based on the build-up approach, the SCRP for Axiom is:",["2.3%.","3.0%.","3.5%."],'A',[
"re = rf + ERP + SP + SCRP, so SCRP = 13.5% − (3.0% + 7.0% + 1.2%) = 2.3%.",
"Incorrect: SCRP is wrongly calculated as re − Beta × ERP = 13.5% − 1.5 × 7.0% = 3.0%.",
"Incorrect: the size premium is missing: SCRP = 13.5% − (3.0% + 7.0%) = 3.5%."]),
Q("Which of the following corporate actions would best meet Singh's objectives?",["Reorganization","Leveraged buyout","Dividend recapitalization"],'C',[
"A reorganization is a court-supervised restructuring of an insolvent company. Axiom is under-leveraged and Singh wants to add debt, so this does not fit.",
"An LBO is an acquirer-led strategy that uses a lot of debt to buy a target. Singh wants the current shareholders to keep control, so this does not fit.",
"A dividend recapitalization restructures the mix from equity to debt through debt-financed dividends or repurchases. It replaces expensive equity with cheaper debt, does not dilute shareholders' stakes and can increase value to shareholders."]),
Q("Based on Singh's analysis, spinning off the wholesale segment for Division B would lead to:",["a material decrease in shareholder wealth.","no material impact on shareholder wealth.","a material increase in shareholder wealth."],'A',[
"Sum of the parts: 7.0 × 20% × 10.8 = 15.120 and 5.1 × 80% × 10.8 = 44.064, total 59.184. Division B is valued at 6 × 10.8 = 64.800, so the change is (59.184 − 64.800)/64.800 = −8.7%, a material decrease (the market values synergies between the segments).",
"Incorrect: this averages the two multiples ((7.0 + 5.1)/2 = 6.05), giving 65.340 and a change of only +0.8%.",
"Incorrect: this swaps the multiples (5.1 × 20% × 10.8 + 7.0 × 80% × 10.8 = 71.496), giving +10.3%."])]))
S1A.append(V('FSA',"""Jules Clerc is an equity analyst at an asset management firm. Clerc is evaluating Lonza Credit Inc., a bank that prepares its financial statements under IFRS and has a 31 December year end. The bank is subject to the Basel III regulatory framework.

Lonza offers a defined benefit pension plan to its employees. To evaluate the pension plan, Clerc uses the data (in EUR millions) for the most recent year in Exhibit 1.

Exhibit 1
Benefit obligations at beginning of year | 1,415
Benefit obligations at end of year | 1,440
Fair value of plan assets at beginning of year | 1,470
Fair value of plan assets at end of year | 1,480

Based on the data from Exhibit 1, Clerc calculates the pension plan's funded status for the most recent year as part of her valuation of Lonza.

On 1 January of the current year, Lonza granted 4 million stock options to employees. The options vest 3 years after the grant date and expire 6 years after the grant date. The fair value per option was EUR 1.8 on the grant date.

Lonza is planning to issue 5 million restricted stock units (RSUs) to its employees. The RSUs will vest two years after issuance. Clerc uses a profitability measure – free cash flow as a percentage of revenues – to analyze Lonza. He considers how this measure would be affected immediately after the issuance of the RSUs.

Clerc uses the CAMELS (capital adequacy, asset quality, management, earnings, liquidity, and sensitivity) approach to evaluate Lonza. Clerc gathers Lonza's liquidity ratios over the past two years in Exhibit 2.

Exhibit 2
# | Most Recent Year | Prior Year
Liquidity Coverage Ratio | 95% | 110%
Net Stable Funding Ratio | 95% | 90%""",[
Q("What is the funded status of Lonza's pension plan at the end of the most recent year?",["Underfunded by EUR 15 million","Overfunded by EUR 10 million","Overfunded by EUR 40 million"],'C',[
"Incorrect: this is the change in funded status during the year: 40 − 55 = −15.",
"Incorrect: this is the increase in plan assets during the year (1,480 − 1,470 = 10).",
"Funded status = fair value of plan assets − benefit obligations = 1,480 − 1,440 = EUR 40 million overfunded."]),
Q("For the current year, Lonza's compensation expense related to its stock options will be:",["EUR 1.2 million.","EUR 2.4 million.","EUR 7.2 million."],'B',[
"Incorrect: this divides the total fair value by the 6-year term to expiry instead of the vesting period.",
"Expense = (4 million × EUR 1.8) / 3-year vesting period = EUR 2.4 million.",
"Incorrect: this recognizes the whole grant-date fair value in one year, without spreading it over the vesting period."]),
Q("After the issuance of Lonza's RSUs, the profitability measure used by Clerc would:",["decrease.","remain the same.","increase."],'B',[
"Incorrect: the RSU issuance is a non-cash event, so it would only decrease if it were treated as a cash event.",
"The issuance has no effect on cash flows or revenues, so free cash flow to revenue is unchanged.",
"Incorrect: neither free cash flow nor revenues are affected by the issuance."]),
Q("Based on Lonza's liquidity ratios at the end of the most recent year, which of the following is correct?",["Lonza's Net Stable Funding Ratio has deteriorated from the prior year","Lonza's required stable funding is higher than its available stable funding","Lonza can withstand cash outflows 5% higher than its 30-day liquidity needs in a stress scenario"],'B',[
"Incorrect: a higher NSFR is an improvement and it rose from 90% to 95%.",
"NSFR = available stable funding / required stable funding. At 95% (below 100%), required stable funding is higher than available stable funding.",
"Incorrect: an LCR of 95% means Lonza can cover only 95% of its 30-day stress outflows, i.e. 5% less, not 5% more."])]))
S1A.append(V('PM',"""Aaron Grap is an investment manager at a hedge fund. He is assessing a new absolute return trading strategy that combines ten different investment factors and is to be used by an equity market-neutral fund.

Grap backtests the strategy using a model with the following parameters:
• Investment universe: the TOP100 Index, which includes the 100 largest listed companies in the country;
• Backtesting period: the past ten years;
• Rebalancing frequency: monthly (simulated using rolling windows);
• Formation of factor portfolios: for each factor, buy the top 20% of stocks and sell the bottom 20% of stocks ranked by the factor over the previous 12 months;
• Weighting of factor portfolios: risk parity.

The TOP100 Index is updated regularly and, as a result, its composition has significantly changed over the 10-year backtesting period. Grap wants to ensure that survivorship bias is mitigated and compares three alternative methods to form factor portfolios in each rolling window:
• Method A only uses the companies that were in the TOP100 Index at any given point in time t.
• Method B only uses the companies that were in the TOP100 Index at the end of the 10-year period.
• Method C only uses the companies that have been in the TOP100 Index for the entire 10-year period.

Based on the backtesting analysis, Grap estimates that the absolute return trading strategy has a mean monthly return of 0.5% and a standard deviation of monthly returns of 7.1%. Grap assumes the statistical properties of the return distribution are constant over the year and calculates the annual 5% parametric VaR of the strategy, which is 1.65 standard deviations below the expected value.

Grap performs a complementary risk analysis using a risk measure that can give him a better understanding of the downside risk of the absolute return trading strategy to be employed by the equity market-neutral fund. The strategy is benchmarked against cash.""",[
Q("Which of the following will Grap's backtesting model require?",["Non-overlapping rolling windows","Two iterations of the rolling-window procedure","A 13-month in-sample period for each rolling window"],'B',[
"Incorrect: rolling windows overlap (each has a 12-month in-sample period, 11 months of which overlap with the previous window).",
"One rolling-window iteration builds the factor portfolios and a second one over the same time span estimates the covariance matrix for risk parity weights, which avoids look-ahead bias.",
"Incorrect: the in-sample period is the previous 12 months (not 13) with a 1-month out-of-sample period."]),
Q("To mitigate survivorship bias, which method should Grap use when forming factor portfolios?",["Method A","Method B","Method C"],'A',[
"Point-in-time data: in each rolling window use only the companies that were in the index at that time (casualties as well as survivors).",
"Incorrect: only companies in the index at the end of the period are survivors, which creates survivorship bias.",
"Incorrect: only companies in the index for the entire 10 years are survivors, which creates survivorship bias."]),
Q("The annual 5% parametric VaR of the absolute return trading strategy is closest to:",["11.2%.","34.6%.","38.8%."],'B',[
"Incorrect: this is the monthly VaR: −[0.5% − 1.65 × 7.1%] = 11.2%.",
"Annualize first: E(R) = 12 × 0.5% = 6.0% and σ = √12 × 7.1% = 24.6%. VaR = −[6.0% − 1.65 × 24.6%] = 34.6%.",
"Incorrect: this multiplies the monthly VaR by √12 (38.8%)."]),
Q("For his complementary risk analysis, which of the following risk measures should Grap use?",["Relative VaR","Surplus at risk","Maximum drawdown"],'C',[
"Incorrect: with a cash benchmark (zero volatility) relative VaR equals VaR, so it adds no information.",
"Incorrect: surplus at risk is for pension funds with liabilities, not for a hedge fund.",
"For an absolute return, equity market-neutral strategy, maximum drawdown (worst peak-to-trough decline) complements standard deviation and beta as a downside risk measure."])]))
S1A.append(V('Equity',"""Julia Kassam is a portfolio manager who is reviewing public and private equity investments for her clients.

Erebor Limited
Kassam values a manufacturing company, Erebor, using the EV/EBIDTA ratio. The company's last reported EBIDTA is $90 million. Kassam collects relevant financial information (in $ millions) in Exhibit 1.

Exhibit 1
# | Debt | Common Stock | Preferred Stock | Cash and Cash Equivalents
Market Value | 880 | 550 | 210 | 375
Book Value | 630 | 280 | 270 | 375

Biotechnology Sector
One of Kassam's clients wants to increase their exposure to growth stocks in the biotechnology sector. The sector currently has a median P/E ratio of 10.7 and is expected to grow at 7%. Kassam uses the PEG ratio to identify overvalued stocks from her list of three selected biotechnology stocks in Exhibit 2.

Exhibit 2
# | Price per Share | Earnings per Share | Annual Growth Rate
Company A | $49.75 | $5.42 | 6.00%
Company B | $12.63 | $1.71 | 8.24%
Company C | $31.28 | $2.93 | 4.50%

Altair Corp.
Kassam evaluates the stock of Altair, which is a recently listed, high growth, biotechnology company. She is considering a stable market-based multiple to value the stock and does not want to make any adjustments to the reported financial statements. After reviewing recent analyst reports, Kassam notices that Altair has internally generated brands that are not shown as intangible assets on Altair's balance sheet. Further, she notes that certain discretionary accounting decisions about expenses have led to an inaccurate representation of Altair's economic performance.

Becq Inc.
Kassam values Becq, a small private company, using the excess earnings method. Relevant financial information is shown in Exhibit 3.

Exhibit 3
Fixed assets | $725,000
Working capital | $315,000
Last reported earnings | $191,290
Residual income growth rate | 2.50%
Required return on fixed assets | 8.50%
Required return on working capital | 3.25%
Discount rate | 11.25%""",[
Q("Erebor's EV/EBIDTA ratio is closest to:",["9.","14.","22."],'B',[
"Incorrect: this uses book values (280 + 270 + 630 − 375 = 805; 805/90 = 8.9).",
"EV = market value of common + preferred + debt − cash = 550 + 210 + 880 − 375 = 1,265; 1,265/90 = 14.1.",
"Incorrect: cash is added instead of subtracted (2,015/90 = 22.4)."]),
Q("Based on the PEG ratio, which company is overvalued compared to the industry?",["Company A","Company B","Company C"],'C',[
"Incorrect: P/E 9.18 and PEG 1.53, equal to the sector median PEG of 1.53 (10.7/7): fairly valued.",
"Incorrect: P/E 7.39 and PEG 0.90, below 1.53: undervalued.",
"P/E 10.7 and PEG 10.7/4.50 = 2.37, above the sector median of 1.53: overvalued."]),
Q("Which of the following valuation ratios is most suitable for Kassam to value Altair?",["Price-to-book ratio","Price-to-sales ratio","Price-to-earnings ratio"],'B',[
"Incorrect: P/B misses internally generated intangibles such as brands, which are not on the balance sheet.",
"Sales are less subject to distortion or manipulation than EPS or book value and are more stable than EPS, so P/S is suitable without adjusting reported financials.",
"Incorrect: earnings are prone to manipulation through discretionary expense decisions and distort EPS."]),
Q("Based on Exhibit 3, the value of Becq using the excess earnings method is closest to:",["$1,400,000.","$2,440,000.","$3,080,000."],'B',[
"Incorrect: this is only the value of the intangibles (1,399,008); tangible assets must be added.",
"Residual earnings = 191,290 − 315,000 × 3.25% − 725,000 × 8.50% = 119,427.50. Intangibles = 119,427.50 × 1.025/(11.25% − 2.50%) = 1,399,008. Total = 1,399,008 + 315,000 + 725,000 = about 2,440,000.",
"Incorrect: the required return on fixed assets (8.50%) is used as the capitalization rate instead of the discount rate."])]))
S1A.append(V('FI',"""Sandra Plessinger is evaluating several bonds for the fixed-income portfolios she manages.

She first considers the following 2-year, default-free bonds with embedded options:
Bond A is a 5% annual pay coupon bond and is callable at par ($100) at the end of year 1.
Bond B is a 5% annual pay coupon bond and is putable at par ($100) at the end of year 1.

To analyze these bonds, Plessinger creates a binomial interest rate tree using the rates in Exhibit 1, assuming an interest rate volatility of 20%, with branching from each node to a high state and a low state occurring with equal probability. Plessinger also considers the effective convexity of Bond B.

Exhibit 1 Binomial Interest Rate Tree (1-year rates)
# | Year 0 | Year 1 | Year 2
Upper node |  | 6.09% | 7.32%
Middle node | 2.00% |  | 4.91%
Lower node |  | 4.08% | 3.29%
Note: This exhibit was a binomial diagram in the original paper. Its figure was not in the pasted text: the Year 0 and Year 1 rates come from the answer explanations, the Year 2 nodes are reconstructed from them (4.08% × e^0.4 = 6.09%, 3.29% × e^0.4 = 4.91% and 3.29% × e^0.8 = 7.32%).

Plessinger next evaluates a 3-year maturity, callable investment-grade corporate bond. She computes an OAS of 51 bps using the same binomial interest rate tree in Exhibit 1. Plessinger considers the impact on the bond's OAS under a scenario where the bond's price is unchanged and interest rate volatility increases from 20% to 25%.

Finally, still using the binomial interest rate tree in Exhibit 1, Plessinger analyzes a 3-year, default-free capped floating rate bond with a par value of $100. The bond pays an annual coupon equal to the 1-year reference rate, is set in arrears, and is capped at 5.0%.""",[
Q("Based on the binomial interest rate tree, the value of Bond A is closest to:",["$102.44.","$102.87.","$103.37."],'A',[
"Work backwards: at 6.09% the value is 105/1.0609 = 98.97; at 4.08% it is 105/1.0408 = 100.88, which exceeds par so the bond is called at 100. Year 0: (100 + 5)/1.02 = 102.9412 and (98.97 + 5)/1.02 = 101.9339; the average is 102.44.",
"Incorrect: this ignores the call (uses 100.88 instead of 100): 102.87.",
"Incorrect: this treats the bond as putable instead of callable (103.37)."]),
Q("The effective convexity of Bond B:",["cannot be negative.","will become negative if the rate in Year 1 is less than the bond's coupon.","will become negative if the rate in Year 1 is greater than the bond's coupon."],'A',[
"An option-free bond has positive convexity and the put right reinforces it, so a putable bond's effective convexity cannot be negative (unlike a callable bond's).",
"Incorrect: if the Year 1 rate is below the coupon the bond trades at a premium, the put is not exercised and it behaves like a straight bond (positive convexity).",
"Incorrect: if the Year 1 rate is above the coupon the put is in the money and only provides a price floor."]),
Q("Under Plessinger's scenario, the OAS of the corporate bond will:",["decrease.","not change.","increase."],'A',[
"Higher volatility raises the value of the embedded call. With the price (and Z-spread) fixed, and Z-spread = OAS + option cost, the OAS must decline.",
"Incorrect: higher volatility decreases the OAS of a callable bond.",
"Incorrect: higher volatility decreases the OAS of a callable bond."]),
Q("The value of the capped floating rate bond analyzed by Plessinger is:",["less than its par value.","equal to its par value.","greater than its par value."],'A',[
"The cap of 5% binds when rates are above 5% (the 6.09% Year 1 rate and the 7.32% Year 2 rate), so there are paths where the floater's coupon is limited and its value is below par.",
"Incorrect: without the cap a floater sells at par on each reset date, but the cap binds on some paths in the tree even though the spot rates are below 5%.",
"Incorrect: a cap can only reduce the value of a floater."])]))
