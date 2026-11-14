from lib import *
S1B=[]
S1B.append(V('Alt',"""Sophia Chang is the head of alternative investments at a defined benefit pension plan. Chang is considering an investment in liquid alternatives and identifies two requirements the investment must meet:
Requirement 1: Have a lower incentive fee than the industry average for traditional hedge funds
Requirement 2: Allow more frequent redemptions than traditional hedge funds

Chang is also evaluating hedge funds as potential additions to the portfolio. She identifies the following strategies and considers their returns, leverage, and liquidity:
Strategy 1: Multi-strategy funds
Strategy 2: Fund of funds
Strategy 3: Long/short equity funds

Chang identifies a skillful manager who deploys Strategy 3. She determines which of the following factors is likely the primary source of outperformance for this manager: market timing, stock selection, or use of leverage.

The pension plan has an objective to limit drawdowns. Chang considers what individual hedge fund strategy would best meet that objective when combined with the pension plan's stock and bond portfolio.""",[
Q("Do liquid alternative investments most likely meet Chang's requirements?",["Yes","No, they fail to meet Requirement 1","No, they fail to meet Requirement 2"],'A',[
"Liquid alts are in most countries prohibited from charging an incentive fee and offer daily redemptions, so they meet both requirements.",
"Incorrect: liquid alts do not typically have incentive fees, so Requirement 1 is met.",
"Incorrect: liquid alts can be redeemed daily, more liquid than traditional hedge funds, so Requirement 2 is met."]),
Q("Compared to Strategy 2, Strategy 1 most likely has:",["higher returns.","lower leverage.","fewer gates on redemptions."],'A',[
"Multi-strategy funds have generally outperformed funds of funds, but with more variance and occasional large losses linked to higher leverage; flexibility and fast tactical allocation help.",
"Incorrect: multi-strategy funds use significantly more leverage than most funds of funds.",
"Incorrect: multi-strategy funds often impose investor-level or fund-level gates, unlike funds of funds."]),
Q("Which factor is most likely the primary source of outperformance for the Strategy 3 manager?",["Market timing","Stock selection","Use of leverage"],'B',[
"Incorrect: most long/short managers are poor at portfolio-level market timing (they are too net long at highs or not net long enough at lows).",
"Stock selection defines manager skill for most long/short equity managers; market timing is an additive but secondary consideration.",
"Incorrect: leverage can be applied to increase positions, but stock selection defines skill (high leverage is used mostly by quantitative managers)."]),
Q("Which of the following hedge fund strategies is best suited to meet the plan's drawdown objective?",["Event-driven","Global macro","Relative value"],'B',[
"Incorrect: event-driven/distressed strategies show high maximum drawdowns when combined with a stock and bond portfolio and little risk reduction.",
"The opportunistic strategies (global macro, systematic futures, merger arbitrage, equity market-neutral) give the smallest maximum drawdowns when combined with a traditional portfolio and have low serial autocorrelation (good liquidity).",
"Incorrect: relative value/convertible arbitrage strategies show high maximum drawdowns and high standard deviations when combined."])]))
S1B.append(V('Quant',"""Sebastian Moreno is an analyst at an asset management firm. He is analyzing the probabilities of default for bond issuers and the drivers of ROE for selected companies.

Moreno is tasked with a new project that looks to classify bond issuers based on their probability of default within the next 12 months. He gathers a large sample of financial and accounting metrics for 1,000 issuers and observes that the issuers are not linearly separable. He compares non-linear support vector machine (SVM), unconstrained classification and regression tree (CART), and SVM with soft margin classification. He wants to use a machine-learning algorithm that addresses non-linear separability and is not prone to overfitting.

Moreno also creates Model 1, a logistic regression model that uses two factors, profit margin (PROFIT) and leverage ratio (LEVER), to predict the probability of default. The binary dependent variable is 1 for companies that defaulted within the subsequent 12 months and 0 otherwise. Using the regression results in Exhibit 1, Moreno calculates the predicted probability of default for the average distressed company, which has PROFIT = –2.0 and LEVER = 3.0.

Exhibit 1
# | Coefficient
Intercept | –1.7878
PROFIT | –0.0185
LEVER | 0.3876

To analyze the drivers of ROE for software companies, Moreno collects fundamental data and compares two linear regression models. Model 2 uses profit margin (PROFIT) and interest coverage (COVER). Model 3 extends Model 2 by adding a third factor, the quick ratio (QUICK).
Model 2: ROEi = b0 + b1PROFITi + b2COVERi + εi
Model 3: ROEi = b0 + b1PROFITi + b2COVERi + b3QUICKi + εi

Moreno compares the R-squared and adjusted R-squared measures of the two models. The regression results for Model 3 are given in Exhibit 2.

Exhibit 2
# | Coefficient | t-Statistic | p-Value
Intercept | –1.4411 | –3.4888 | 0.0000
PROFIT | 0.4840 | 49.5319 | 0.0000
COVER | 0.7487 | 27.9215 | 0.0000
QUICK | 0.0919 | 1.9204 | 0.0558

Finally, Moreno wants to test if last-12-month sales (SALES) are a good predictor of ROE. He runs Model 4, which has the following specification:
Model 4: ROEi = b0 + b1SALESi + εi

A plot of the regression residuals against SALES is presented in Exhibit 3.

Exhibit 3
Note: Exhibit 3 was an image in the original paper (file KL3.png) and was not in the pasted text. From the answer explanation: in the plot of the Model 4 residuals against SALES, the variance of the residuals increases as SALES increase.""",[
Q("Which of the following machine-learning algorithms is most suitable for Moreno's bond issuer classification model?",["Non-linear SVM","Unconstrained CART","SVM with soft margin classification"],'C',[
"Incorrect: non-linear SVM with more advanced boundaries reduces training misclassifications but is complex and prone to overfitting.",
"Incorrect: unconstrained CART can perfectly learn the training data and overfit unless regularization parameters are added.",
"SVM with soft margin classification adds a penalty for misclassified training observations and trades off a wider margin against total error, handling non-linear separability without overfitting."]),
Q("For the average distressed company, the probability of default predicted by Model 1 is closest to:",["36%.","56%.","77%."],'A',[
"P = 1/[1 + exp(−(−1.7878 − 0.0185 × (−2.0) + 0.3876 × 3.0))] = 1/(1 + 1.8004) = 0.357, about 36%.",
"Incorrect: 0.56 is exp(b0 + b1PROFIT + b2LEVER) = exp(−0.5880), the odds, not the probability.",
"Incorrect: 77% omits the intercept."]),
Q("Compared to Model 2, Model 3 most likely has a:",["lower R-squared and a higher adjusted R-squared.","higher R-squared and a lower adjusted R-squared.","higher R-squared and a higher adjusted R-squared."],'C',[
"Incorrect: R² never decreases when a variable is added.",
"Incorrect: adjusted R² rises when the added coefficient's |t| > 1.0, and QUICK's t-statistic is 1.9204.",
"R² increases or stays the same when a variable is added, and adjusted R² increases if the new coefficient's |t-statistic| is above 1.0 (QUICK: 1.9204)."]),
Q("The most appropriate conclusion to draw from the residual plot for Model 4 is that:",["the model suffers from unconditional heteroskedasticity.","there is a non-linear relationship between ROE and SALES.","the F-test for the overall regression significance is unreliable."],'C',[
"Incorrect: the residual variance increases with SALES, so it is correlated with an independent variable: conditional, not unconditional, heteroskedasticity.",
"Incorrect: a residual plot does not show the form of the relationship between target and feature.",
"With conditional heteroskedasticity the MSE is a biased estimator, so the F-test for overall significance is unreliable (and Type I errors rise)."])]))
S1B.append(V('Equity',"""Terry McCormick is a US-equity analyst working for a large wealth management firm. He is currently working on DCF valuations of various publicly traded firms, which report under the US GAAP.

Firm A
McCormick wants to identify the most appropriate approach to value Firm A, which consistently had positive FCFE during the past decade. Management is about to start an aggressive growth strategy primarily financed with debt. McCormick expects highly fluctuating amounts of net borrowing for the next three years. McCormick also expects annual earnings growth rate to fluctuate between 25% and 35% during the next three years before it gradually declines to long-run sustainable rate of 2%.

Firm B
McCormick calculates FCFE for the most recent fiscal year and gathers the selected financial information in Exhibit 1 (in $ millions).

Exhibit 1
CFO | 535
Investment in fixed capital | 110
Interest expense | 70
Net borrowing | 65
Tax rate | 30%

Firm C
McCormick reviews his FCFE valuation model for Firm C. Firm C's management has just announced that they will issue new common stock during the next year. McCormick evaluates the potential effect of this change on next year's FCFE forecast.

Firm D
McCormick estimates the intrinsic value of Firm E's common equity using the FCFF approach. McCormick calculates the present value of the firm's future FCFF as $800 million. McCormick estimates that $75 million of the firm's cash holdings is not necessary to generate operating cash flows. Current market values of the firm's debt and preferred stock are $250 million and $150 million respectively.""",[
Q("Which of the following is the most appropriate approach to use for valuing Firm A?",["Two-stage FCFE model","Three-stage FCFE model","Three-stage FCFF model"],'C',[
"Incorrect: growth has three stages (high, declining, stable) and FCFF is preferred when the capital structure is changing.",
"Incorrect: FCFE is not appropriate when the capital structure is expected to change (fluctuating net borrowing).",
"Growth is 25%-35% for three years, then declines gradually to 2%: three stages. With highly fluctuating net borrowing (a changing capital structure) FCFF is preferred over FCFE."]),
Q("Firm B's FCFE (in $ millions) is closest to:",["425.","474.","490."],'C',[
"Incorrect: 425 = CFO − FCInv is an approximation of FCFF.",
"Incorrect: 474 is FCFF = CFO + interest × (1 − t) − FCInv = 535 + 49 − 110.",
"FCFE = CFO − FCInv + net borrowing = 535 − 110 + 65 = 490."]),
Q("Given Firm C's announced change, next year's FCFE forecast will most likely:",["decrease.","remain unchanged.","increase."],'B',[
"Incorrect: transactions between the company and its shareholders (dividends, repurchases, issuances) do not affect free cash flow.",
"Share issuances are a use of FCFE, not a determinant of it, so the forecast is unchanged.",
"Incorrect: share issuance does not affect free cash flow."]),
Q("The intrinsic value of Firm D's equity based on FCFF approach is closest to:",["$400 million.","$475 million.","$550 million."],'B',[
"Incorrect: this leaves out the $75 million of non-operating cash.",
"Equity = value of operating assets + non-operating assets − debt − preferred stock = 800 + 75 − 250 − 150 = $475 million.",
"Incorrect: this leaves out both the non-operating assets and the preferred stock."])]))
S1B.append(V('PM',"""Martin Chu is a portfolio manager for actively managed, long-only fixed-income accounts.

Chu examines the potential impact of GDP growth and inflation on the yields of default-free government bonds in Countries A, B, and C. Chu uses her forecasts in Exhibit 1 to identify the bond market with the largest expected increase in real yields.

Exhibit 1
# Country | Forecast Change in Nominal GDP Growth Rate | Forecast Change in Inflation Rate
A | +50 bps | +10 bps
B | +65 bps | +30 bps
C | –40 bps | +12 bps

In Country D, the YTM of zero-coupon, inflation-protected government bonds is 0.8% for the 1-year maturity and 1.0% for the 2-year maturity. In the same market, the YTM of a 2-year zero-coupon nominal government bond is 3.0%. Chu calculates the expected 2-year average inflation rate in Country D.

Chu reviews a diversified US bond portfolio, Portfolio A. His objective is to determine which of the following three sectors' spreads can be expected to narrow the most if the economy recovers from a business downturn.
Sector A: Investment grade consumer cyclical
Sector B: Speculative grade consumer cyclical
Sector C: Speculative grade consumer noncyclical

For Portfolio B, in addition to the long-only constraint, the client proposes adding a second constraint specifying maximum overweights and underweights of 10% relative to the portfolio's benchmark. Chu and the client discuss whether this policy change would impact the portfolio's optimal level of active risk.""",[
Q("Based on Chu's forecasts, which of the following bond markets should experience the largest increase in real yields?",["Country A","Country B","Country C"],'A',[
"Real GDP growth change = nominal − inflation: A: 50 − 10 = +40 bps, larger than B (+35 bps) and C (−52 bps). Higher real growth raises the real default-free rate.",
"Incorrect: B's real growth increase is 65 − 30 = 35 bps, smaller than A's; the larger nominal change is irrelevant.",
"Incorrect: C's real growth falls by 52 bps, implying a lower real rate."]),
Q("The expected 2-year average inflation rate in Country D is most likely:",["less than 2%.","equal to 2%.","greater than 2%."],'A',[
"Breakeven inflation (3% − 1% = 2%) includes a positive inflation uncertainty risk premium, so expected average inflation is below 2%.",
"Incorrect: 2% ignores the positive inflation uncertainty premium and is too high.",
"Incorrect: expected inflation is below the breakeven (using the 0.9% average of the real yields would give 2.1%, a mistake)."]),
Q("For Portfolio A, which of the following sectors most likely satisfies Chu's objective concerning credit spreads?",["Sector A","Sector B","Sector C"],'B',[
"Incorrect: investment grade cyclical spreads narrow less than speculative grade cyclical spreads.",
"Sector B is both speculative grade and cyclical, so it is the most sensitive to an improving economy and its spreads narrow the most.",
"Incorrect: noncyclical issuers are less sensitive to the business cycle than cyclical issuers."]),
Q("If the client's proposal regarding Portfolio B's constraints is implemented, the portfolio's optimal level of active risk would most likely:",["decrease.","remain the same.","increase."],'A',[
"The extra constraint lowers the transfer coefficient and so the expected information ratio. Optimal active risk σA = TC × (IR*/SRB) × σB falls.",
"Incorrect: the reduced TC would have to be offset by a proportional increase in IR, but skill is constant.",
"Incorrect: the constraint reduces the TC and so lowers the optimal active risk."])]))
