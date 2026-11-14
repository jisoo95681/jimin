# Trimmed bodies for A1-A4 (target ~300 words per vignette, like the real Mock Paper 2). key (k,i)=(mock number, vignette index). repl={question index: bank question number} swaps a question whose exhibit was lost; qrepl = text replacements in question stems.
T={}
T[(1,5)]=dict(repl={2:44},body="""Sarah Pemberly is the head of trading at Ravenwood Arbitrage Opportunities, LLP, a hedge fund specializing in fixed-income strategies that exploit small price differences across similar or identical securities. Pemberly has asked Chester Vane to develop an automated trading system that will allow traders to identify opportunities in the market.

Vane begins development on an algorithm that will evaluate government bonds that have been stripped. He tests his logic by evaluating a dollar-denominated Zelanda government bond with a 3.20%, annual pay coupon maturing in three years, using data in Exhibit 1. The bond is quoted in the market at $103.50.

Exhibit 1 Spot, Par, and Forward Rates
#  | Year 1 | Year 2 | Year 3
Spot Rate | 1.10% | 1.50% | 2.01%
Par Rate | 1.10% | 1.50% | 2.00%
Forward Rate | 1.10% | 1.91% | 3.04%

Vane develops a framework for valuing bonds using a binomial interest rate tree and asks Pemberly for counsel on the correct data to use. Pemberly makes the following comments to Vane:

Comment 1: In the valuation process, the interest rate tree generates cash flows that are interest rate dependent but does not provide the interest rates used to discount those cash flows.
Comment 2: Two assumptions must be made to create a binomial tree. The first is an interest rate model such as a lognormal model of interest rates. The second is a volatility of interest rates.
Comment 3: Volatility can be measured relative to the current level of rates. By using a lognormal distribution, interest rate movements are proportional to the level of rates and are bounded at the low end by zero.

Pemberly tells Vane that he needs to calibrate the binomial interest rate tree to match a term structure of interest rates. Pemberly says, “Calibrating an interest rate tree requires an iterative process that ensures that the upper and lower rates are consistent with the volatility assumption, the interest rate model, and the observed market value of the benchmark bond. The cash flows of the bond are discounted using the interest rate tree, and if this doesn’t produce the correct price, another pair of forward rates is selected and the process is repeated.”

Pemberly wants Vane to develop a program for pricing securities that are interest rate path dependent, such as mortgage-backed securities (MBS). He believes that using the Monte Carlo method and employing 2,000 simulations will provide an average present value across all scenarios equal to the actual market value of the securities. Vane runs a simulation and uses it to value a benchmark bond. He finds that the value generated does not equal the market price of the bond.""")
T[(1,6)]=dict(body="""Ingrid AG is a European-based manufacturing firm that prepares its financial statements according to International Financial Reporting Standards (IFRS). Two members of Ingrid’s treasury group, Anders Lindqvist and Elise Brandt, are reviewing Ingrid’s portfolio of investments.

On July 1 the company purchased €4,000 of 10-year bonds of Solheim AG. The bonds have a 5% coupon payable annually and cost €3,705.60, reflecting the effective market rate of 6%. Ingrid is expecting to collect the interest and principal payments but if liquidity needs arise will sell the bonds.

The company also holds bonds issued by Rosendal AG with a face value of €5 million and a coupon rate of 8%, payable semi-annually. The bonds have been held for 10 years and are classified as amortized cost.

The final investment is Ingrid’s longstanding holding of Aldera AG common shares. Aldera has been profitable and paid a consistent dividend every year since it was acquired. Additional details are available in Exhibit 1.

Exhibit 1 Additional Information Investment in Aldera AG (All € figures in 000s except per share data)
At the date of acquisition (February 28, 2008)
# shares purchased | 1.8 million
Total shares outstanding | 6.0 million
Price paid | €17 per share
Total net book value of Aldera | €90,000
Excess of fair market value of plant and equipment above book value | €5,250
Expected useful life remaining on plant and equipment | 15 years
Aldera uses straight-line depreciation for all of its tangible assets
Ingrid classified Aldera as an associate company
At December 31, 2019
Book value of investment on Ingrid’s statement of financial position | €59,022
Net income reported by Aldera for 2019 | €12,375
Dividends paid by Aldera in 2019 | €0.50 per share

Lindqvist says: “Let us calculate the amount Aldera will contribute to Ingrid’s net earnings this year.”

Turning to the Rosendal bonds, Brandt says:

“If we’re looking for contributions to net earnings, I see an opportunity with the Rosendal bonds. The decline in interest rates over the years since the original purchase has significantly increased their market value. IFRS allows us to reclassify these bonds to fair value as a way to increase reported income in the period. It works well because the standards don’t require us to restate the prior periods when we reclassify.”""")
T[(1,7)]=dict(topic='Econ',qrepl={'Exhibit 2':'Exhibit 1'},body="""Marovia is a medium sized developing country. Government policies have opened the borders for international trade and the flow of capital, and capital now flows freely. Trade is substantial with members of the EU and is often denominated in Euros (€). A new free-floating currency, the Dornan (DRN), was created in the early 2000s. Foreign currency reserves are sizable in comparison to the average daily turnover of the DRN.

Nadim Sarkis, Minister of Finance for Marovia, and his colleague Zafer Ilgaz discuss a recent increase in inflation and appreciation in the exchange rate. Should these trends accelerate, the country’s present prosperity could be threatened. They discuss policy alternatives.

Sarkis states: “Since Marovia allows capital to flow freely, the clearest choice is to implement expansionary monetary and fiscal policies to stop the appreciation of the currency according to the Mundell–Fleming model.”
Ilgaz replies: “The long run solution to the problem, at least according to the portfolio balance approach, would be a policy choice by the Marovian government to run large budget deficits on a sustained basis.”
Sarkis adds: “There is also a timing dimension to consider. According to Dornbusch, with inflexible domestic prices in the short run, any decrease in nominal money supply will induce an increase in the domestic interest rate. This will encourage capital inflows and cause the exchange rate to overshoot to the upside in the short run, until domestic prices have a chance to react.”

Sarkis wants to be on the lookout for situations which might trigger a currency crisis. He and Ilgaz discuss recent economic developments that might provide potential warning signs.
Sarkis: “Moving our currency to a floating exchange rate has reduced our susceptibility to a currency crisis.”
Ilgaz: “Banking crises often precede currency crises, but our banking sector has grown and strengthened substantially by offering foreign denominated savings accounts to foreign investors and lending those funds for domestic infrastructure investments.”
Ilgaz: “I’m concerned that the ratio of exports to imports has been increasing recently and the ratio of M2 to bank reserves has been falling.”

Sarkis is concerned that local currency dealers are being taken advantage of by arbitrageurs from Europe. He analyzes the rate quotes in Exhibit 1 for evidence of triangular arbitrage and carry trade opportunities by European hedge funds attempting to exploit the DNR currency.

Exhibit 1 Interbank and Dealer Currency Quotes and Rates
# Currency Pair | Bid (spot) | Offer (spot) | Projected Spot in one year | One-Year MRR Rates
Interbank Market: |  |  |  | 
EUR/USD | 0.8045 | 0.8065 | 0.8200 | EUR 0.8%
DNR/USD | 1.2050 | 1.2100 | 1.2280 | USD 0.9%
Marovian Dealer: |  |  |  | 
DNR/EUR | 1.5140 | 1.5190 | --- | DNR 3.0%""")
T[(1,8)]=dict(body="""Francesca Verdello is an equity portfolio manager at Gruppo Sangiove, Spa, an investment management firm in Verona, Italy. She is meeting with Luca Brunello, the equity research manager at Grechetto Partners, to receive a buy rating on her funds. Verdello tells Brunello that she firmly believes in active management and her ability to add value relative to a benchmark because markets are inefficient.

Verdello starts the meeting by stating that the criteria for benchmark selection is as follows: “It should be market capitalization weighted and should reflect the opportunity set available. The positions can be replicated at a low cost, weights are known ex ante, and return data are timely on an ex post basis. Value added is calculated as the sum of the active asset allocation decisions and the weighted sum of the value added from security selection. The firm conducts performance attribution based on a decomposition of value added into several sources, which include asset allocation, sector selection, and security selection.”

The meeting then moves to the risk and return measures presented in Exhibit 1. Verdello notes that during this period, the risk-free rate was 1.75%, and the benchmark return was 9.00%.

Exhibit 1 Data for the Sangiove Funds
#  | Portfolio Return | Active Risk
Fund A | 10.10% | 4.00%
Fund B | 10.50% | 6.25%
Fund C | 11.85% | 7.30%

Brunello tells Verdello that he likes to measure the consistency of active returns when reviewing and comparing managers. Because Verdello manages three funds, he was going to rank them in his analysis.

Verdello says that she is a firm believer in the fundamental law of active management and makes the following three points:

Point 1: The productivity of an active portfolio manager depends on both the skill level and how many opportunities are identified and put to use in the funds. The information ratio measures how much active return has been earned for the level of active risk taken.
Point 2: The information coefficient is the correlation between forecasted active returns and realized active returns. The transfer coefficient measures the degree to which a fund manager’s forecast is translated into active weights.
Point 3: Breadth is important and represents the number of independent decisions a fund manager makes in constructing the portfolio. Mathematically, breadth can be expressed as the number of independent investment opportunities squared.

Verdello then gives her view of the strengths and limitations of the fundamental law: “The strength is that it provides a framework for evaluating and comparing managers based on skill. It can even produce operational measurements of the essential elements of an active management strategy. However, it also has some limitations. First, it does not consider covariances in calculating breadth. Second, it cannot measure ex ante value added.”""")
T[(1,9)]=dict(body="""Thornfeld is currently valuing LPE, a private furniture manufacturing company based in France. Paul Duvall is the current CEO and owns 25% of LPE stock. LPE’s most recent income statement as part of its reviewed financial statements is as follows:

# As of 31 December (in EUR) | As Reported
Revenues | 30,000,000
Cost of goods sold | 18,000,000
Gross profit | 12,000,000
SG&A expenses | 8,000,000
EBITDA | 4,000,000
Depreciation and amortization | 2,400,000
Earnings before interest and taxes | 1,600,000
Pro forma taxes (at 25%) | 400,000
Operating income after taxes | 1,200,000

As Thornfeld reviews compensation expenses, he learns that Paul Duvall’s annual compensation is EUR 300,000 and that CEOs of similarly sized consumer durable goods companies earn EUR 600,000 on average.

To estimate LPE’s required return on equity, Thornfeld gathers betas from public furniture manufacturing companies, and after making appropriate adjustments, estimates LPE’s beta at 0.80. He uses an equity risk premium of 6%, a small-cap stock premium of 2%, a company-specific stock premium of 1.5%, and an industry risk premium of 1%.

After making other normalizing assumptions to LPE’s income statement and deducting the change in long-term assets of EUR 600,000 (equal to EUR 3,000,000 in capital expenditures less EUR 2,400,000 in depreciation), Thornfeld estimates FCFF for the base year to be EUR 600,000. He decides to use the CCM in his income approach to valuing LPE with a WACC of 8% and perpetual growth of 4%.

Given the availability of similar publicly traded furniture manufacturing companies, Thornfeld also uses a market approach to value LPE. He finds an average EV/Sales multiple of 0.60 from these public comparable companies. Thornfeld notes that LPE’s debt is currently EUR 6 million.""")
T[(2,0)]=dict(body="""Mark Pellham is updating research reports on two well-established consumer companies before first quarter 2021 earnings reports are released. His supervisor, Sheila Rooney, has asked Pellham to use market-based valuations when updating the reports.

Bravia Beverage is a manufacturer and distributor of soft drinks and recently acquired a major water bottling company in order to offer a broader product line. The acquisition will have a significant impact on Bravia’s future results.

Fix Pro is a US retail distributor of products for home improvement, primarily for those consumers who choose to do the work themselves. The home improvement industry is cyclical; the industry was adversely affected by the recent downturn in the economy, the level of foreclosures, and slow home sales. Although sales and earnings at Fix Pro weakened, same store sales are beginning to improve as consumers undertake more home improvement projects. Poor performing stores were closed, resulting in significant restructuring charges in 2020.

Before approving Pellham’s work, Rooney wants to discuss the calculations and choices of ratios used in the valuation of Bravia and Fix Pro. The data used by Pellham in his analysis are summarized in Exhibit 1.

Exhibit 1
Select Financial Data for Bravia Beverage and Fix Pro
#  | Bravia Beverage | Fix Pro
2020 earnings per share (EPS) | $3.44 | $1.77
2021 estimated EPS | $3.50 | $1.99
Book value per share end of year | $62.05 | $11.64
Current share price | $65.50 | $37.23
Sales (billions) | $32.13 | $67.44
Free cash flow per share | $2.68 | $0.21
Shares outstanding end of year | 2,322,034,000 | 1,638,821,000

Pellham advises Rooney that he is considering three different approaches to value the shares of Fix Pro:

Approach 1: Price-to-book ratio (P/B)
Approach 2: Price-to-earnings ratio (P/E) using trailing earnings
Approach 3: Price-to-earnings ratio using normalized earnings

Pellham tells Rooney that he calculated the price-to-sales ratio (P/S) for Fix Pro but chose not to use it in the valuation of the shares. Pellham states to Rooney that it is more appropriate to use the P/E than the P/S because

Reason 1: Earnings are more stable than sales.
Reason 2: Earnings are less easily manipulated than sales.
Reason 3: The P/E reflects financial leverage, whereas the P/S does not.""")
T[(2,1)]=dict(body="""Matthew Lawton is a senior consultant at Hale & Associates (Hale), which advises institutional clients on asset manager selection and evaluates the fund managers in its database. Lawton was recently engaged by the retirement fund of a large municipality that has ten managers, each specializing in a particular asset class or style. He meets the fund’s investment committee to review the three-year performance and value-added statistics of the ten managers.

David Ames, a new committee member, asks Lawton how to interpret value added statistics. Lawton responds with the following statements.

Statement 1: The measurement is derived from the various sources that make up the contribution from active management decisions, including asset allocation and security selection.
Statement 2: It appraises active management decisions and further compares the portfolio’s return in excess of the benchmark with the risk-free rate and relative to the standard deviation of returns.
Statement 3: The statistic is a useful tool for comparing relative returns, but it is most applicable in comparing active management decisions of equity portfolios.

Lawton is particularly concerned about the risk statistics for Denver Asset Management. The statistics have him questioning whether the manager is actually adding value by following an active management strategy. He provides the committee with data presented in Exhibit 1.

Exhibit 1 Selected Data for Denver Asset Management
Benchmark return | –9.0%
Portfolio return | –11.0%
Risk-free rate | 2.00%
Standard deviation of portfolio returns | 5.75%
Standard deviation of benchmark returns | 4.75%
Active risk | 3.75%
Portfolio Sharpe ratio | –2.26
Benchmark Sharpe ratio | –2.32

Lawton has asked a colleague, Janet Ward, to prepare a performance attribution analysis showing the various components of the fundamental law of active management. Ward comments to the members that there is a low probability of a manager adding value if its forecast of active returns does not correlate with its realized active return over time.

Lawton is also worried about one of the fund’s small-cap managers whose portfolio has been underperforming its benchmark for the past few years. He has recommended the fund consider replacing the manager and has provided the committee with a list of several alternative managers. Ames reviews the handout containing the expected information ratio and active risk measures and asks whether one statistic is more relevant than the other. Lawton responds, “They are both equally important.”""")
T[(2,2)]=dict(body="""Bill Tulsa is Director of Research at Brazos Fixed Income Advisors. Each year he adds six new analysts and trains them in six modules covering key fixed-income concepts. In each module, Tulsa starts out by outlining a lesson.

Module 1:

“A good place to start a fixed-income program is with a discussion of the yield curve and the information it conveys. I want to present three theories that explain the shape of the yield curve. First is the pure expectations theory, which states that the forward rate is an unbiased predictor of the future spot rate. This theory assumes investors are affected by uncertainty and require a risk premium. Second is the liquidity preference theory, which postulates that investors are willing to take on more risk by investing in longer maturity bonds if they are paid a liquidity premium. Its explanation for an upward sloping yield curve, even if spot rates are expected to be unchanged, is the liquidity premium. A third explanation of the shape of the yield curve is the segmented markets theory, which says that yields are a function of supply and demand for funds in a specific maturity segment. This last theory is very similar to the preferred habitat theory and is premised on investors and borrowers having strong preferences for particular maturities.”

Module 2:

“Use the data in Exhibit 1 to determine whether a 4% coupon Treasury bond, maturing in four years and offered by a dealer at a yield-to maturity of 7.89% is cheap (buy recommendation), fairly valued (hold recommendation), or rich (sell recommendation) based on arbitrage opportunities.”

Exhibit 1 Select Spot and Forward Rates
#  | Year 1 | Year 2 | Year 3 | Year 4
Spot Rate | 0.055 | --- | --- | 0.0825
Discount Factor | --- | --- | 0.8163 | ---
Forward Rate f(2,1) | --- | --- | 0.0852 | ---

Module 3:

“Many of our portfolio managers like to use a portfolio management strategy called riding the yield curve. This strategy can enhance total return in two ways. First, it increases the yield of the portfolio by buying bonds with maturities longer than their investment horizon whenever the yield curve is upward sloping and expected to maintain the same level and whenever the shape and spot rates rise as predicted by forward rates. Second, even if interest rates increase unexpectedly, since the bonds roll down the yield curve, the bonds will appreciate in price.”

Module 4:

“Today I want to go over several spread measures used in fixed-income markets. The Z-spread provides a useful measure of risk for credit instruments such as corporate bonds. It uses the implied spot yield curve and adds the spread necessary to discount the bond’s cash flows and derive its current market price. The TED spread is used for the valuation of government bonds and is calculated as the difference between MRR and the yield on a T-bill of equal maturity. The MRR–OIS spread incorporates unsecured lending between banks. It serves as a good measure of the risk and liquidity of money market securities.”""")
T[(2,3)]=dict(body="""BJL Financial provides clients with professional investment management services. The firm’s portfolio manager, Anika Mbeki, has called a meeting with the senior analyst, Sana Qureshi, to discuss the quarterly rebalancing of client portfolios. The valuation model used in the analyses is the discounted dividend model.

Qureshi has identified two utilities (ABC and XYZ) for possible inclusion in Client 1’s portfolio, which has significant exposure to dividend-paying stocks. She uses a discount rate of 7% for both common stocks.

ABC is a publicly traded utility with an expected constant growth rate for earnings and dividends of 3.5%. The most recent year’s dividend payout is 70%. The expected dividend payout in future years is 60%. The common stock price is $14.49 per share.

XYZ is a publicly traded utility with several unregulated business subsidiaries. The company generates 3% growth in dividends and has an annual dividend payout of 80%. No changes in dividend growth or payout are expected. The common stock price is $10 per share. The current year earnings are $0.45 per share, and next year’s earnings are expected to be $0.50 per share.

Mbeki asks Qureshi to investigate the most appropriate models for valuing utility companies. She tells Qureshi about the following points mentioned in various research reports on the utilities sector.

Report 1: A resurgence in domestic manufacturing activity will generate long-term growth in earnings and dividends that exceeds the cost of equity.
Report 2: Share repurchases are expected to increase. The report expresses confidence in the forecasts regarding the magnitude and timing of these repurchases.
Report 3: The report forecasts earnings growth of 4.5%. The key growth drivers are increases in population and business creation associated with stable GDP growth of 2.75%.

For Client 2’s portfolio, which is interested in preferred stock, Qureshi looks at the non-callable perpetual preferred stock of Keystone Company. It has a par value of $50 per share and pays an annual dividend of 5.5%. Qureshi estimates a capitalization rate at 6%. The current market price of Keystone Company preferred stock is $42.""")
T[(2,7)]=dict(qrepl={"Based on Exhibit 1 and Exhibit 2,":"Based on Exhibit 1 and the information on the two interest rate scenarios,"},body="""Jules Ferretti is a bond analyst for Calder Investments, Inc. Ferretti gathers data on three corporate bonds, as shown in Exhibit 1.

Exhibit 1
Selected Bond Data
# Issuer | Coupon Rate | Price | Bond Description
Dumont, Inc. (AI) | 5.25% | 100.200 | Callable at par in one year and two years from today
Kessel, Inc. (BI) | 5.25% | 101.300 | Option-free
Dalbert Enterprises (CE) | 5.25% | 102.100 | Putable at par in one year from today
Note: Each bond has a remaining maturity of three years, annual coupon payments, and a credit rating of BBB.

To assess the interest rate risk of the three bonds, Ferretti constructs two binomial interest rate trees based on a 10% interest rate volatility assumption and a current one-year rate of 4%. The first tree assumes the benchmark yield curve shifts down by 30 bps, and the second assumes it shifts up by 30 bps. Ferretti determines that the AI bond is currently trading at an option-adjusted spread (OAS) of 13.95 bps relative to the benchmark yield curve. Using the trees, the value of the AI bond is 100.78 if the benchmark yield curve shifts down by 30 bps and 99.487 if it shifts up by 30 bps.""")
T[(2,10)]=dict(body="""Sasha Hollis, a successful entrepreneur, is preparing for retirement and considering selling off her businesses. She is meeting with Ervin Goldfarb, an independent valuation consultant, to discuss the process and her options.

Hollis owns 100% of two chains of spas and wellness centers. Hollis explains: "I initially owned and operated two full-service spas as a chain under the banner of Hollis Spa Days (DSD). The outlets have done well since established ten years ago and the company has a good reputation in the area. I believe in offering an exceptional customer experience supported by a full complement of well-trained staff. Five years ago, a chain of four urban spas became available for sale. Although the chain appeared able to survive for the next 12 months, it was undercapitalized and in financial distress, so I was able to acquire it at a good price. By converting those spas to the Hollis banner and adding my management skills I was able to quickly offer, and keep offering, good quality services at industry average prices while keeping costs lower than competitors in this segment."

Goldfarb explains that spas and personal service businesses are usually valued using a multiple of gross revenue model. He makes the following note for his file: Due to the competitive strategies of the two chains, I will be able to apply a higher multiple than the industry average to value both businesses.

Before calculating a value for the chain of full-service spas, Goldfarb asks Hollis about that company's financial performance. "It seems like the most recent year was very successful, revenue is up 20% but your operating costs are generally the same or lower, can you explain that discrepancy to me?"

Hollis gives three explanations:

Explanation 1: People buy a lot of spa packages as gifts, but not all packages get used on a timely basis, so we changed to recording them as revenue when we are paid.
Explanation 2: Some of the costs we incur maintaining and growing our customer base are really investments in the future, therefore, we started recording one-half of our marketing costs as customer acquisition assets.
Explanation 3: We did not record any depreciation expense this past year for some of our smaller assets because they are already fully depreciated.""")
T[(3,0)]=dict(qrepl={'Statement 2':'Statement 1','Statements 3 and 4':'Statements 2 and 3','Statement 4':'Statement 3','Statement 5':'Statement 4'},body="""Summit-Anchor Capital is a rapidly growing international investment firm. The firm’s research team is responsible for identifying undervalued and overvalued publicly-traded equities that have a market capitalization greater than $500 million.

Due to the rapid growth of assets under management, Summit-Anchor Capital recently hired a new analyst, Jim Ruddock, to support the research process. At the new analyst orientation meeting, the director of research made the following statements about equity valuation at the firm:

Statement 1:
“An active investment manager attempts to capture positive alpha. But mispricing of assets is not directly observable. It is therefore important that you understand the possible sources of perceived mispricing.”

Statement 2:
“For its distressed securities fund, Summit-Anchor Capital screens its investable universe of securities for companies in financial distress.”

Statement 3:
“For its core equity fund, Summit-Anchor Capital selects financially sound companies that are expected to generate significant positive free cash flow from core business operations within a multiyear forecast horizon.”

Statement 4:
“Summit-Anchor Capital’s research process requires analysts to evaluate the reasonableness of the expectations implied by the market price by comparing the market’s implied expectations to his or her own expectations.”""")
T[(3,1)]=dict(body="""Gianna Hendry is an investment analyst who focuses on dividend-paying stocks. Hendry uses a DCF approach to stock selection. She is meeting with her staff to evaluate portfolio holdings based on a bottom-up screening of stocks listed in the United States and Canada. Hendry and her staff begin by reviewing the characteristics of the following portfolio candidates.

Company ABC

A Canadian company in the consumer staples sector with a required rate of return of 7.35%. Recent media reports suggest that ABC might be a takeover candidate. Hendry and her team estimate that if the incumbent Canadian prime minister’s party retains its power, the company’s current annual dividend of C$0.65 per share will grow 12% a year for the next four years and then stabilize at a 3.5% growth rate a year indefinitely. If a new government takes office in Canada, however, then the team estimates that ABC will likely not experience the elevated 12% short-run growth because of new regulatory and tax changes, and instead it will grow by 3.5% indefinitely.

Company XYZ

A mid-sized US company in the utilities sector with a required rate of return of 10%. Hendry and her team believe that because of a recent restructuring, the company is unlikely to pay dividends for the next three years. The team expects XYZ to pay an annual dividend of US$1.72 per share beginning four years from now, however.

Company JZY

A large US company in the telecom sector with a required rate of return of 8%. Hendry believes that because JZY is mature and has a stable capital structure, the company will grow at its sustainable growth rate. Over the past 10 years, the company’s return on equity (ROE) has averaged 8.17% and its payout ratio has averaged 40%.

Hendry asks a newly hired analyst, Karl Tobin, to comment on the evaluation approach for these three stocks. Tobin makes the following statements:

Statement 1: A free cash flow valuation model would not be appropriate to evaluate Company ABC if the firm becomes a takeover candidate.
Statement 2: A dividend discount model cannot be applied to Company XYZ if dividends are suspended for a few years.
Statement 3: A dividend discount model is suitable for evaluating the stock of Company JZY because of the historically consistent payout ratio.""")
T[(3,2)]=dict(body="""Dea Yoon is a senior portfolio manager for Baekdu Capital, an investment management firm located in Jeonju, South Korea. Baekdu specializes in using multifactor models to build and manage global investment portfolios for institutional clients.

Min-Ho Park works for Yoon as a research analyst. Yoon asks Park what he knows about the arbitrage pricing theory (APT). Park explains that while both the APT and capital asset pricing model (CAPM) provide an expression of the expected return of an asset, the APT provides an alternative framework to CAPM and cites three key attributes of APT:

Attribute 1: The APT model makes stronger assumptions than the CAPM.
Attribute 2: APT makes the assumption that investors can form portfolios that eliminate asset-specific risk.
Attribute 3: APT makes the assumption that arbitrage opportunities exist among well-diversified portfolios.

Baekdu manages a global equity strategy for Jeonju Electric, an institutional client. This portfolio is managed to overweight or underweight certain factors. These factors include small minus big (SMB), high minus low book value (HML), and winners minus losers (WML). Exhibit 1 provides information regarding the portfolio sensitivities to these factors, the premiums of these factors, and the return of the value-weighted equity index in excess of the 1-month T-bill rate (RMRF). The risk-free rate is currently 1.5%.

Exhibit 1 Portfolio Sensitivities and Factor Premiums
# Risk Factor | RMRF | SMB | HML | WML
Jeonju Electric Portfolio Factor Sensitivity | 1.01 | 0.45 | 0.95 | 0.09
Factor Premium | 3.11% | 2.11% | 3.75% | 1.56%

Following the conclusion of a performance reporting period, Yoon asks Park to evaluate the risk attributes and results of two of Baekdu’s institutional portfolios relative to a global equity benchmark over the previous year. Park compiles the data in Exhibit 2.

Exhibit 2 1-Year Portfolio Performance Data
# Portfolio | Active Specific Risk (%) | Active Factor Risk (%) | Active Risk Squared | Information Ratio
City of Gwangju | 10 | 90 | 0.38% | 0.70
Chungcheong Pension Plan | 75 | 25 | 0.09% | 0.62

Park responds that Gwangju’s portfolio appears to have had the largest active return and Chungcheong’s portfolio appears to have the highest contribution of active risk from stock selection.""")
T[(3,3)]=dict(repl={2:5,3:6},qrepl={'Task 4':'Task 2','forward rates shown in Exhibit 3':'interest rates shown in the tree'},body="""Katrina Black, a portfolio manager at Opal Bond Management, Ltd., is conducting a training session with Alan Sung, a junior analyst in the fixed-income department. Black wants to explain to Sung the arbitrage-free valuation framework used by the firm. Black presents Sung with Exhibit 1, showing a fictitious bond being traded on three exchanges, and asks Sung to identify the arbitrage opportunity of the bond. Sung agrees to ignore transaction costs in his analysis.

Exhibit 1
Three-Year, €100 par, 3.00% Coupon, Annual Pay Option-Free Bond
#  | Eurex | NYSE Euronext | Frankfurt
Price | €103.7956 | €103.7815 | €103.7565

Black also shows Sung the yield-to-maturity par rates in Exhibit 2 and a binomial lognormal interest rate tree that is fit to that yield curve (volatility = 10%).

Exhibit 2
Yield-to-Maturity Par Rates for One-, Two-, and Three-Year Annual Pay Option-Free Bonds
# One-year | Two-year | Three-year
1.25% | 1.50% | 1.70%

Black directs Sung to complete the following tasks related to the tree:

Task 1: Test that the binomial interest tree has been properly calibrated to be arbitrage free.
Task 2: Update the tree to reflect the current volatility, which is now 15%.""")
T[(4,0)]=dict(body="""Ivan Valdric, an analyst at a large wealth management firm, meets with his supervisor to discuss adding financial institution equity securities to client portfolios. Valdric focuses on Scarlet Insurance (Scarlet), a property and casualty company, and Indigo Life Insurance (Indigo). To evaluate Scarlet further, Valdric compiles the information presented in Exhibit 1.

Exhibit 1
Select Financial Ratios for Scarlet Insurance
# Ratio | 2017 | 2016
Loss and loss adjustment expense | 59.1% | 61.3%
Underwriting expense | 36.3% | 35.8%
Combined | 95.4% | 97.1%
Dividend | 2.8% | 2.6%

In addition to the insurance companies, Valdric gathers data on three national banks that meet initial selection criteria but require further review. This information is shown in Exhibits 2 and 3.

Exhibit 2
Select Balance Sheet Data for National Banks—Trading: Contribution to Total Revenues
# Bank | 2017 | 2013 | 2009 | 2005
N-bank | 4.2% | 7.0% | 10.1% | 8.9%
R-bank | 8.3% | 9.1% | 17.0% | 7.9%
T-bank | 5.0% | 5.0% | 11.9% | 6.8%

Focusing on N-bank and T-bank, Valdric prepares the following data.

Exhibit 3
2017 Select Data for N-bank and T-bank
# | N-bank 2017 | N-bank 2016 | T-bank 2017 | T-bank 2016
Average daily trading VaR ($ millions) | 11.3 | 12.6 | 21.4 | 20.5
Annual trading revenue/average daily trading VaR | 160× | 134× | 80× | 80×""")
T[(4,2)]=dict(body="""SCAI is a registered investment adviser based in Louisville, Kentucky, providing investment and private wealth management advice to endowments, retirement plans, and corporations. Dieter Fenwick, a portfolio manager, is meeting with analysts Nasir Qadri and Laura Ibanez to discuss fixed-income investment opportunities and portfolio management strategies. Fenwick presents the group with the information on spot rates shown in Exhibit 1:

Exhibit 1 Spot Rates for Zero-Coupon Bonds
# Maturity (Years) | Spot Rate
1 | 2.041%
2 | 2.598%
3 | 2.818%
4 | 2.956%
5 | 3.304%

Qadri is currently evaluating a corporate bond and makes the following statements:

Statement 1: “The value of a bond calculated by discounting its future cash flows by their corresponding spot rates will be the same as the value obtained by discounting future cash flows by the yield-to-maturity of a bond, as long as the yield-to-maturity is some weighted average of the spot rates.”
Statement 2: “Yield-to-maturity is a good estimate of the expected return on a bond assuming coupons are reinvested at the prevailing spot rates.”
Statement 3: “If the yield curve remains flat during the holding period, the realized rate of return on a bond will be the same as the expected rate of return.”

Qadri asks Fenwick to explain the spot curve in Exhibit 1. Fenwick responds that the spot rate curve in Exhibit 1 is derived from the par curve using a process called bootstrapping. The par rates are yields-to-maturity, at various maturities, for on-the-run, coupon-paying government bonds priced at par. Bootstrapping is a process of forward substitution, where successive spot rates are derived from par rates one at a time. The process begins with recognizing that the one-year spot rate is the same as the one-year par rate. The two-year spot rate, r(2), is then calculated by solving the following equation, where PMT is the two-year par rate: 100 = PMT / (1 + r(2)) + (100 + PMT) / (1 + r(2))². This process continues until all spot rates are derived.

Fenwick then asks Ibanez how the spot curve can be used in fixed-income analysis. Ibanez responds, “Our expectations regarding the evolution of future spot rates compared to the forward curve allow for an evaluation of the relative value of a bond and the identification of appropriate bond trading strategies. Interest rate scenarios and corresponding appropriate strategies are outlined here”:

Scenario 1: If we expect future spot rates to be lower than current forward rates, then we should short the bond since it is likely to be overvalued.
Scenario 2: If the spot curve is expected to be above the forward curve and our expectations turn out to be correct, the bond should be purchased since the one-year return will be more than the one-year risk-free rate.
Scenario 3: If the yield curve is upward sloping and we expect it to remain static, then a strategy of buying bonds with maturities longer than the investment holding period will allow us to earn a return greater than a maturity matching strategy.""")
T[(4,3)]=dict(body="""Andrew Whitlock is a fixed-income analyst with Vertex Credit Advisers, an institutional investment management company. Vertex offers a variety of fixed-income oriented investment strategies, including a core-plus-bond strategy as well as a popular long–short credit hedge fund. Whitlock participates in Vertex’s weekly fixed-income committee meetings.

A macro topic for this week’s fixed-income committee is the possibility that the US Federal Reserve Board (Fed) will raise the federal funds rate (FFR) 25 bps at their next meeting. Vertex’s committee believes that the Fed is likely to hold off raising the FFR for at least six months because of weak economic data, and that weakness will be seen in the upcoming payroll numbers. Vertex expects the monthly non-farm payroll report to show that the US labor market added only 90,000 jobs this month, roughly in line with consensus expectations. The committee is debating what will happen to the short end of the US yield curve (and what will happen subsequently to short-dated bond prices) if the payroll report comes in at the level they expect.

Vertex’s committee forecasts weaker-than-expected GDP growth in the future and expects that GDP growth will be more volatile as the economy ultimately adjusts to a changing interest rate policy. Whitlock believes these factors will exert downward pressure on short-term Treasury Inflation-Protected Securities (TIPS) rates.

As part of Whitlock’s analysis, he forecasts the real one-year risk-free rate to be 0.25% and average inflation over the next year to be 1.5%. A zero-coupon nominal Treasury bond with 1-year to maturity and a par value of $100 is currently trading at $98.05. Whitlock notes the discrepancy in market pricing relative to his forecasts.

Dora Kemp is a senior credit analyst at Vertex. Based on the GDP outlook from the committee, she evaluates three bonds from different sectors (shown in Exhibit 1) for a potential new short position in the company’s hedge fund. All three bonds mature in five years.

Exhibit 1 Credit Market Observations
# | Economic Sector | Debt/Capital | Enterprise Value/EBITDA | Spread to Treasuries (bps) | Credit Rating
Bond 1 | Pharmaceutical | 52.2% | 7.2 | 255 | Baa2
Bond 2 | Consumer Discretionary | 48.3% | 7.8 | 220 | Baa1
Bond 3 | Soft Drinks | 32.3% | 8.5 | 210 | A3""")
T[(4,4)]=dict(body="""Andrea Bellini is a junior analyst with AquistareFianco, an independent equity research firm. Bellini’s supervisor asks her to update, as of 1 January 2020, a quarterly research report for Corsaro S.p.A., a telecommunications company headquartered in Italy. On that date, Corsaro’s common share price is €50 and its preferred shares trade for €5.25 per share.

Bellini gathers information on Corsaro. Exhibit 1 presents earnings and dividend data, and Exhibit 2 presents balance sheet data. Net sales were €3.182 billion in 2019. Bellini estimates a required return of 15% for Corsaro and forecasts growth in dividends of 6% into perpetuity.

Exhibit 1
Earnings and Dividends for Corsaro, 2016–2020
#  | 2016 | 2017 | 2018 | 2019 | 2020(E)
Earnings per share (EPS, €) | 4.93 | 5.25 | 4.46 | 5.64 | 6.00
Dividends per share (DPS, €) | 2.45 | 2.60 | 2.60 | 2.75 | 2.91
Return on equity (ROE) | 13.01% | 13.71% | 11.58% | 14.21% | 14.96%
Note: The data for 2016–2019 are actual and for 2020 are estimated.

Exhibit 2
Summary Balance Sheet for Corsaro, Year Ended 31 December 2019
# Assets (€ millions) |  | Liabilities and Shareholders’ Equity (€ millions) | 
Cash and cash equivalents | 102 | Current liabilities | 259
Accounts receivable | 305 | Long-term debt | 367
Inventory | 333 | Total liabilities | 626
Total current assets | 740 | Preferred shares | 80
Property and equipment, net | 913 | Common shares | 826
Total assets | 1,653 | Retained earnings | 121
 |  | Total shareholders’ equity | 1,027
 |  | Total liabilities and shareholders’ equity | 1,653
Note: The market value of long-term debt is equal to its book value. Shares outstanding are 41.94 million common shares and 16.00 million preferred shares.""")
T[(4,6)]=dict(body="""FIQ Bank is a highly rated corporate and institutional bank that operates a client-facing credit default swap (CDS) desk. Larry Ahlgren is a CDS client strategist. Mark Montrose is FIQ’s chief CDS trader. Ahlgren and Montrose are meeting with Brent Haldane, a portfolio manager for BLB Fund, to discuss investment and trading strategies for bonds, CDSs, and equities.

Haldane begins the discussion by asking for a refresher on basic CDS concepts and parameters. Ahlgren replies that a CDS includes both a premium leg and a payment leg and that expected loss is among the functions that affect its price. Ahlgren provides information for a bond issued by Helios Company.

Exhibit 1 Information for Helios Bond
Amount | $1,000.00
Coupon | 5.00%
Maturity | 3 years
Probability of Default | Year 1: 2.0%. Year 2: 2.5%. Year 3: 3.0%
Recovery Rate | 40%

Haldane reviews the data and opines that the market is incorrectly assessing Helios’s credit risk. He believes that Helios’s conditional probability of default is 2.0% for Year 1, Year 2, and Year 3. Montrose reviews Helios’s CDSs and adds that the market is pricing no basis between Helios’s bonds and its CDSs.

Haldane expresses confidence in Helios’s credit condition over a longer cycle, stating that Helios is likely to experience improving credit fundamentals over the next five years. Montrose compares Helios’s bonds with its CDSs. Montrose notes that Helios’s five-year bond has a 200 bp credit spread and that Helios’s five-year CDS has a 400 bp up-front premium. The CDS is based on a 1.00% fixed coupon and has duration of four years. Montrose suggests that FIQ and BLB execute a five-year naked CDS in which FIQ buys the CDS and BLB sells the CDS.

In building credit portfolios, Haldane conducts fundamental credit research on companies. He discusses observations on three separate companies that he has been researching. Haldane states that Dalton has low leverage and that its free cash flow will increase because of its new product pipeline. Haldane describes Corbin as being highly leveraged following an acquisition whose integration, he believes, will be more complex than originally expected. Haldane shares his view that Tarvell may potentially be affected by environmental litigation following its recent purchase of a manufacturing facility that contains unremediated hazardous materials.""")
T[(4,7)]=dict(body="""Halimah Hakim is a portfolio manager at VSL Asset Management (VSLAM), based in Singapore. VSLAM provides customized portfolio management and investment consulting services to institutional clients. Hakim is meeting with new analysts, Joel Cardin, Elaine Tay, and Ishan Rao, to review the firm’s portfolio management models and techniques.

Hakim welcomes everyone to the meeting and begins by stating, “We use multifactor models for portfolio construction as well as return and risk attribution.” She asks, “Can anyone tell me how arbitrage pricing theory (APT) is related to these multifactor models?”
Tay responds, “APT helps us determine the appropriate number of factors to use in a multifactor model; however, it does not specify the identity of those factors.”

Hakim continues, “Multifactor models fall into one of three categories: macroeconomic factor models, fundamental factor models, and statistical factor models. For macroeconomic factor models, the factors are the value, or level, of selected macroeconomic variables. For fundamental factor models, the factors are company share attributes, such as price-to-earnings ratio and market capitalization. Finally, when using statistical factor models, we apply statistical techniques, such as factor analysis or principal component analysis, to derive factors that are portfolios of securities that best explain historical return covariances and variances.”

To explain the use of multifactor models for portfolio return attribution, Hakim presents the group with portfolio and benchmark information in Exhibit 1. She also notes the risk-free rate of return is 1.3%.

Exhibit 1 Multifactor Model Data
# Factor | Portfolio Sensitivity | Benchmark Sensitivity | Factor Return
Market | 1.05 | 1 | 3.5%
Small-Cap | 0.5 | 0.3 | 4.7%
Value | –0.6 | 0.2 | –4.5%
Momentum | 0.5 | 0.1 | 5.1%

Hakim asks the group to use Exhibit 1 to characterize the portfolio manager’s investment style. Cardin responds, “This manager has a large-cap orientation and follows a contrarian strategy with a growth bias.”""")
T[(4,8)]=dict(topic="Econ",body="KEEP")
T[(4,9)]=dict(body="""Emmitt Mercer is a portfolio manager for Omega Advisers. Mercer meets with Sonia Dalton, the firm’s analyst responsible for the machinery industry, to discuss three established companies: BIG Industrial, Builders Supply, and Vector Production. Dalton provides Mercer with research notes for each company that reflect trends during the last three years:

BIG Industrial:
Note 1: Operating income has been much lower than operating cash flow (OCF).
Note 2: Accounts payable has increased, while accounts receivable and inventory have substantially decreased.
Note 3: Although OCF was positive, it was just sufficient to cover capital expenditures, dividends, and debt repayments.

Builders Supply:
Note 4: Operating margins have been relatively constant.
Note 5: The growth rate in revenue has exceeded the growth rate in receivables.
Note 6: OCF was stable and positive, close to its reported net income, and just sufficient to cover capital expenditures, dividends, and debt repayments.

Vector Production:
Note 7: OCF has been more volatile than that of other industry participants.
Note 8: OCF has fallen short of covering capital expenditures, dividends, and debt repayments.

Mercer asks Dalton about the use of quantitative tools to assess the likelihood of misreporting. Dalton tells Mercer she uses the Beneish model, and she presents the estimated M-scores for each company in Exhibit 1.

Exhibit 1
Beneish Model M-scores
# Company | 2017 | 2016 | Change in M-score
BIG Industrial | −1.54 | −1.82 | 0.28
Builders Supply | −2.60 | −2.51 | −0.09
Vector Production | −1.86 | −1.12 | −0.74""")
T[(4,10)]=dict(qrepl={"Under her Scenario 1 and based on Exhibit 2,":"Under her Scenario 1,"},body="""June Pruitt is analyzing stocks in the processed food industry as of 31 December 2019. All stocks pay a dividend at the end of each year.

Orlan Corporation

Pruitt estimates a required rate of return for Orlan Corporation of 8% and notes that the dividend for 2019 was EUR 2.315 per share. Her first valuation approach is a basic two-stage DDM, with dividends growing at a rate of 5% from 2020 through 2023, after which time dividends will grow at a sustainable rate of 3%. Her second valuation approach is the H-model, assuming that dividend growth of 5% in 2020 declines linearly during the years 2021 through 2023 to the 3% growth rate after 2023. Exhibit 1 summarizes Pruitt’s dividend growth assumptions.

Exhibit 1
Orlan Corporation Dividend Growth Assumptions, by Model
# Model | Period | Rate
Two-stage DDM | 2020 through 2023 | 5%
Two-stage DDM | Beginning 2024 | 3%
H-model | 2020 | 5%
H-model | 2021 through 2023 | Declining linearly to 3.5%
H-model | Beginning 2024 | 3%

Hermes Company

Pruitt predicts that Hermes Company will lose market share because of new entrants but will stabilize within a few years. The required rate of return for Hermes Company is not given. Beginning with a per-share dividend of USD3.15 in 2019, in Scenario 1 she assumes that the growth rate will fall in a linear manner over the years 2020 through 2023 from 8% to 4%, remaining stable at 4% beginning 2024. Using the H-model, Pruitt calculates a value of USD58.79 per share of Hermes Company stock.""")
