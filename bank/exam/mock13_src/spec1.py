import math
from lib13 import *
# ===== Mock 1 =====
# --- xyz (FSA): DB plan under US GAAP + volatility
sv,pcs,dr,bo,be,ao,ae,aret,er,loss=215,80,0.06,48000,47700,44000,43500,2700,0.07,430
us=sv+dr*bo-er*ao; ifrs=sv+pcs+dr*(bo-ao); wrong1=us+pcs
assert round(us)==15 and round(ifrs)==535 and round(wrong1)==95
body="""Lanvik AB is a fictional company that uses a DB pension plan and stock option grants as part of its compensation to qualified employees. Lanvik AB prepares its financial statements under IFRS.

Information on Lanvik's DB plan and volatility assumptions used to value stock option grants were as follows:

Lanvik AB Defined Benefit Plan Information, Fiscal Year 2024
# | FY2024
Employer contributions | 1,150
Current service costs | 215
Past service costs | 80
Discount rate used to estimate plan liabilities at beginning of year | 6.00%
Benefit obligation at beginning of year | 48,000
Benefit obligation at end of year | 47,700
Actuarial loss due to increase in plan obligation | 430
Plan assets at beginning of year | 44,000
Plan assets at end of year | 43,500
Actual return on plan assets | 2,700
Expected rate of return on plan assets | 7.00%

Volatility Assumptions Used to Value Stock Option Grants
# Grant year | Weighted average expected volatility
2024 valuation assumptions |
2020–2024 | 22.00%
2023 valuation assumptions |
2019–2023 | 25.00%"""
part('Financial Statement Analysis','xyz',body,[],[],[
 Nq("If Lanvik prepared its financial statements under US GAAP, the total amount recognized by Lanvik on the income statement related to its DB plan for fiscal year 2024 (assuming the company chooses not to immediately recognize the actuarial loss and assuming there is no amortization of past service costs or actuarial gains and losses) would be closest to:",
    "15.",["95.","535."],
    ["US GAAP, no amortization: current service cost 215 + interest cost 6.0% × 48,000 = 2,880 − expected return 7.0% × 44,000 = 3,080 → 15. The past service cost goes to OCI.","This adds the past service cost (80) to the P&L, but with no amortization it stays in OCI: 15 + 80 = 95.","This is the IFRS-type figure: current service 215 + past service 80 + net interest 6.0% × (48,000 − 44,000) = 240 → 535."],
    ["Current service costs | 215","Expected rate of return on plan assets | 7.00%","Discount rate used to estimate plan liabilities at beginning of year | 6.00%"][:0] or ["assuming there is no amortization of past service costs or actuarial gains and losses"],
    "US GAAP P&L pension cost = service cost + interest cost on the beginning obligation − EXPECTED return on assets (past service cost and actuarial items stay in OCI without amortization)."),
 Nq("If Lanvik had used the same volatility assumption for its FY2024 option grants that it had used in FY2023, its FY2024 net income would have been:",
    "lower.",["higher.","the same."],
    ["Lanvik used a lower volatility in FY2024 (22.00% vs 25.00% in FY2023). A lower volatility lowers the option fair value and the expense. Using the FY2023 volatility would raise the expense and lower net income.","A higher volatility raises the fair value of the options and the compensation expense, which lowers (not raises) net income.","Volatility is an input to the option valuation, so changing it changes the expense and net income."],
    ["Weighted average expected volatility","FY2023"][:0] or ["Volatility Assumptions Used to Value Stock Option Grants"],
    "Higher volatility → higher option value → higher compensation expense → lower net income.",fixed=False)])
# --- kim (Equity): residual income and justified P/B
ni,div,sh,eq13,eq12=126000,50000,30000000,812000,748000
r_,roe_,g_=0.12,0.18,0.09
ri=ni-r_*eq12; riB=ni-r_*eq13; riC=ni-div
pb=(roe_-g_)/(r_-g_); bvps=eq13*1e6/sh; pbA=69000/bvps; pbB=((ni/eq13)-g_)/(r_-g_)
assert round(ri)==36240 and round(riB)==28560 and riC==76000 and round(pb,2)==3.00 and round(pbA,2)==2.55 and round(pbB,2)==2.17,(ri,riB,pb,pbA,pbB)
body="""Choi Min-jae is an equity analyst with Busan Securities. Choi is writing a research report on SeoHan Electronics, a South Korean company that is dual-listed on a US exchange and complies with US GAAP. As part of his analysis, Choi wants to determine the intrinsic value of SeoHan's common shares under residual income valuation.

Choi assembles in Exhibit 1 selected financial information from SeoHan's 2013 and 2012 audited financial statements (values stated in South Korean won [KRW]). Other financial data pertaining to the valuation of SeoHan's shares at 31 December 2013 are shown in Exhibit 2.

Exhibit 1 Selected Information from SeoHan's 2013 and 2012 Financial Statements (KRW millions, except where noted)
# | Year Ended 31 December 2013
Net income | 126,000
Dividends | 50,000
Number of common shares outstanding (actual) | 30,000,000
# | KRW at 31 December 2013 | KRW at 31 December 2012
Total stockholders' equity | 812,000 | 748,000

Exhibit 2 Other Financial Data for SeoHan Electronics
Required return on equity | 12%
Market price per share at 31 December 2013 | KRW69,000

At 31 December 2013, Choi provided the following forecasted fundamentals for SeoHan:
* expected long-term return on equity (ROE) is 18%; and
* after 2014, earnings and dividends will grow at 9% per year."""
part('Equity Valuation','s1a-kim',body,[],[],[
 Nq("Using the information in Exhibits 1 and 2, SeoHan's residual income (in millions) in 2013 is closest to:","KRW36,240.",["KRW28,560.","KRW76,000."],
   ["Residual income = net income − equity charge on BEGINNING equity = 126,000 − 0.12 × 748,000 = 36,240.","This charges the cost of equity on end-of-year equity: 126,000 − 0.12 × 812,000 = 28,560.","This is net income − dividends = 126,000 − 50,000 = 76,000; it has nothing to do with the equity charge."],
   ["Net income | 126,000","Required return on equity | 12%","Total stockholders' equity | 812,000 | 748,000"][:0] or ["@row:Net income","@row:Required return on equity","@row:Total stockholders' equity"],
   "RI = net income − required return × BEGINNING book value of equity."),
 Nq("Using the information in Exhibits 1 and 2, Choi's forecasts, and the single-stage (constant growth) residual income approach, the justified price-to-book ratio (P/B) at 31 December 2013 for SeoHan common stock is closest to:","3.00.",["2.55.","2.17."],
   ["Justified P/B = (ROE − g) ÷ (r − g) = (0.18 − 0.09) ÷ (0.12 − 0.09) = 3.00.","2.55 is the market price ÷ book value per share (69,000 ÷ 27,067), not the justified P/B.","2.17 uses the historical ROE 126,000 ÷ 812,000 = 15.5% instead of the expected long-term ROE of 18%."],
   ["expected long-term return on equity (ROE) is 18%","after 2014, earnings and dividends will grow at 9% per year","@row:Required return on equity"],
   "Justified P/B (single stage) = (ROE − g) ÷ (r − g) with the EXPECTED long-term ROE.")])
# --- torres (Deriv): carry arbitrage assumptions
body="""Carla Ibáñez is the CFO of Manufacturas Andes (MAn), an automobile parts manufacturer located in Guadalajara, Mexico. She is currently evaluating the firm's debt structure and anticipated financing needs.

Ibáñez explains to her deputy, Tomás Beltrán, "The derivatives contracts we enter into are typically priced using a carry arbitrage model to have zero cost to us at origination. In addition to requiring current interest rates and coupon payments of the underlying bonds, the model makes three assumptions: (1) There are no transaction costs for buying and selling securities; (2) short-selling proceeds become available when the short is covered; and (3) we can borrow and lend at the same risk-free rate of interest.\""""
part('Derivatives','d28-torres',body,[],[],[K(17,[("Vega","Ibáñez")])])
# --- kaur (Econ): flow supply/demand channel
body="""Ananya Rao is an analyst who works in the finance department of Silverline Entertainment Group (SEG), a global entertainment company based in London, United Kingdom. SEG creates digital and film media content as well as maintaining a number of theme parks around the world.

Rao notes that Country A is currently experiencing positive economic growth, low unemployment, a high level of debt relative to GDP, and consistently maintains a current account surplus due to the demand for its commodities. Based on these factors and according to the flow supply/demand channel, Rao asserts in her analysis that Country A's currency should appreciate over time and that SEG should consider a longer-term hedging strategy."""
s=S('fx29-kaur'); L=s['v']['body'].split('\n'); assert L[17].startswith('Nair notes')
part('Economics','fx29-kaur',body,[("Nair","Rao")],[],[K(24)])
# --- rivera (Quant): multiple regression and adjusted R2
b0,b1,b2,b3=-0.6510,0.1987,0.0745,-0.0933
pred=b0+b1*math.log(48)+b2*0.45+b3*1
predB=pred-b3; predC=pred-2*b3
assert round(pred*100,2)==5.84 and round(predB*100,2)==15.17 and round(predC*100,2)==24.50,(pred,predB,predC)
body="""Priya Menon is a portfolio manager at Meridian Capital (MC) based in the US. Menon has a shortlist of 50 US public firms and wants to better understand the factors that may explain the cross-sectional variation in these stocks' returns. Based on the finance literature, Menon believes that firm size and book-to-market ratio are important factors that need to be included in her model. She also thinks that being included in the Dow Jones Industrial Average Index (DJIA) can help a firm get more media attention and potentially attract more investors, which in turn may affect a stock's return.

To test her theory, Menon collects the annual returns (r) of these 50 stocks in the year that just ended, as well as their market capitalizations (Size, in billions of dollars) and book-to-market ratios (BMRatio) at the end of the previous year. She also creates a dummy variable (Dow) that is coded 1 if a stock is included in the DJIA and 0 otherwise, and then runs the following regression:

ri = b0 + b1 lnSizei + b2 BMRatioi + b3 Dowi + εi

where lnSizei is the natural log of the market capitalization of company i in billions of dollars and Dowi is the dummy variable. The output from the regression model is shown in Exhibit 1.

Exhibit 1
# | Coefficient | t-statistic | p-value
Intercept | -0.6510 | -3.8820 | 0.0004
Size | 0.1987 | 5.1203 | <0.0001
BMRatio | 0.0745 | 3.3317 | 0.0017
InDow | -0.0933 | -1.4120 | 0.1648

Menon shows her model and results to a summer intern, and asks whether she should use the reported R2 or adjusted R2 to measure the goodness of fit of her model. The intern replies, "Adjusted R2 would be more appropriate in this case because the model has more than one independent variable. Adjusted R2 is adjusted for degrees of freedom and nondecreasing in the number of independent variables.\""""
part('Quantitative Methods','elite-rivera',body,[],[],[
 Nq("The predicted annual return for a stock that is included in the DJIA, has a market capitalization of $48 billion and a book-to-market ratio of 0.45 is closest to:","5.84%",["15.17%","24.50%"],
   ["r = −0.6510 + 0.1987 × ln(48) + 0.0745 × 0.45 + (−0.0933) × 1 = 5.84%.","This sets Dow = 0, which is a stock that is NOT in the DJIA: 15.17%.","This adds the dummy coefficient instead of subtracting it (+0.0933 instead of −0.0933): 24.50%."],
   ["included in the DJIA","@row:Size","@row:InDow"],"Prediction = intercept + each coefficient × its value; a stock in the index has Dow = 1 and size enters as the natural log (ln) of billions."),
 K(32,[("Marsh","Menon")])])
# --- schwalke (Equity): private company valuation
body="""Mikael Strand has been recently hired as an analyst at a private equity firm that specializes in buying and restructuring private companies to be taken public within five years. Given his background with valuing public firms, this role will provide him his first experiences in valuing private companies."""
part('Equity Valuation','schwalke',body,[("Holm","Strand")],[],[K(33)])
# --- pwpf (Alt): hedge fund strategies and combined portfolio
sd0=8.60; maxsd=math.sqrt(0.90*sd0**2)
assert 8.35>maxsd>7.65 and round(maxsd,2)==8.16
body="""Ellis Marwood is a portfolio analyst for the Harbor-Ridge Pension Fund (HRPF). HRPF's investment committee (IC) asks Marwood to research adding hedge funds to the HRPF portfolio.

Marwood also plans to recommend a specialist hedge fund strategy that would allow HRPF to maintain a high Sharpe ratio even during a financial crisis when equity markets fall.

Finally, Marwood creates a model to simulate adding selected individual hedge fund strategies to the current portfolio with a 20% allocation. The IC's primary considerations for a combined portfolio are (1) that the variance of the combined portfolio must be less than 90% of that of the current portfolio and (2) that the combined portfolio maximize the risk-adjusted return with the expectation of large negative events. Exhibit 1 provides historical performance and risk metrics for three simulated portfolios.

Exhibit 1: Performance of Various Combined Portfolios
# Hedge fund strategy | Standard deviation (%) | Sharpe ratio | Sortino ratio | Maximum drawdown (%)
Current portfolio |
NA | 8.60 | 0.50 | 1.05 | 16.40
Three potential portfolios with a 20% hedge fund allocation |
Merger arbitrage | 8.35 | 0.73 | 1.88 | 6.30
Systematic futures | 7.30 | 0.80 | 1.74 | 9.10
Equity market neutral | 7.65 | 0.69 | 1.86 | 11.80"""
part('Alternative Investments','pwpf',body,[("Ridgeway","Marwood"),("COPF","HRPF"),("Kent","Ellis"),("Cascade-Olympic Pension Fund","Harbor-Ridge Pension Fund")],[],[
 K(43),
 Nq("Based on the IC's primary considerations for a combined portfolio, which simulated hedge fund strategy portfolio in Exhibit 1 creates the most suitable combined portfolio?","Equity market neutral",["Merger arbitrage","Systematic futures"],
   ["Maximum variance = 0.90 × 8.60² = 66.56, so maximum SD = 8.16%. Merger arbitrage (8.35) breaks the variance limit even though it has a high Sortino ratio. Systematic futures (7.30) and equity market neutral (7.65) pass. With large negative events expected, use the Sortino ratio: equity market neutral 1.86 beats systematic futures 1.74.","Merger arbitrage has the highest Sortino ratio (1.88), but its standard deviation (8.35%) is above the maximum of 8.16% allowed by the variance condition.","Systematic futures passes the variance condition, but its Sortino ratio (1.74) is lower than that of equity market neutral (1.86)."],
   ["variance of the combined portfolio must be less than 90% of that of the current portfolio","expectation of large negative events","@row:Equity market neutral"],
   "Step 1: variance screen (SD ≤ √0.90 × current SD). Step 2: among the survivors, large negative events → Sortino ratio (downside risk only).",fixed=False)])
# --- stigwood (Quant): machine learning
body="""Sven Halvorsen is a partner at a private equity advisory firm. He is meeting with a data analysis consultant, Nora Berglund. Upon meeting Berglund, Halvorsen states that his firm has structured data from private equity transactions that had been conducted over the past year. He desires to merge that data with related publicly traded firm data to find factors that can be used to predict future firm valuations.

Halvorsen suggests a support vector machine algorithm because the target variable is continuous and the algorithm does not require a user defined hyperparameter. Instead, Berglund suggests using an algorithm with a least absolute shrinkage and selection operator."""
part('Quantitative Methods','stigwood',body,[("Peter Lindqvist","Sven Halvorsen"),("Lindqvist","Halvorsen"),("Karin Ahlberg","Nora Berglund"),("Ahlberg","Berglund")],[],[K(2)])
# --- hamilton-nevis (Deriv): two-period binomial
S0,K0,u,d,rf=75,75,1.20,0.90,0.04
pi=(1+rf-d)/(u-d); uu=S0*u*u-K0; ud=S0*u*d-K0; dd=max(S0*d*d-K0,0)
v2=(pi**2*uu+2*pi*(1-pi)*ud)/(1+rf)**2; vA=(pi**2*uu+2*pi*(1-pi)*ud)/(1+rf); vB=(0.25*uu+0.5*ud)/(1+rf)**2
v1=pi*(S0*u-K0)/(1+rf)
assert round(v2,2)==9.41 and round(vA,2)==9.78 and round(vB,2)==10.40 and round(v1,3)==6.731
body=f"""Reginald Pryor is CEO and CIO of Summit Peak Capital, a Registered Investment Advisory firm. He is meeting with Victor Lang, head trader, and Adrian Kessler, a recently hired analyst, to discuss option valuation methodologies in the context of the firm's use of derivatives to manage client portfolios.

Lang describes the two-period binomial model to Kessler and provides information related to Birchwood Corporation's common stock and options on that stock (presented in Exhibit 1). Birchwood stock does not pay a dividend.

Exhibit 1 Information on Birchwood Corporation Stock and Options
Stock price | $75
Call strike | $75
Risk-free interest rate | 4.00%
Up factor | 1.20
Down factor | 0.90

The price of a one-year call option on Birchwood Corporation common stock is $5.60. Based on this price and on information provided in Exhibit 1, Pryor, Kessler, and Lang believe that an arbitrage opportunity may exist, which arbitrageurs could exploit based on the binomial model no-arbitrage approach. Pryor states the arbitrageurs should buy call options using borrowed funds. Kessler disagrees, stating that arbitrageurs should short-sell shares and lend the proceeds. Lang also disagrees, stating that arbitrageurs should buy shares using borrowed funds."""
part('Derivatives','hamilton-nevis',body,[],[],[
 Nq("The value of a two-year European call option on Birchwood Corporation shares is likely closest to:","$9.41.",["$9.78.","$10.40."],
   ["Risk-neutral probability π = (1 + r − d) ÷ (u − d) = (1.04 − 0.90) ÷ 0.30 = 0.4667. Payoffs: uu = 33, ud = 6, dd = 0. Value = [π² × 33 + 2π(1 − π) × 6] ÷ 1.04² = $9.41.","This discounts the expected payoff only once (÷ 1.04) instead of for two periods: $9.78.","This uses probabilities of 0.5 instead of the risk-neutral probability 0.4667: $10.40."],
   ["Risk-free interest rate | 4.00%","Up factor | 1.20","Down factor | 0.90"][:0] or ["@row:Risk-free interest rate","@row:Up factor","@row:Down factor","@row:Call strike"],
   "Two-period binomial: π = (1 + r − d) ÷ (u − d); value = [π² × C_uu + 2π(1 − π) × C_ud + (1 − π)² × C_dd] ÷ (1 + r)²."),
 Nq("With respect to the one-year call option on Birchwood stock, whose strategy is most likely correct?","Kessler's",["Lang's","Pryor's"],
   ["The one-year model value is π × (90 − 75) ÷ 1.04 = $6.73, above the market price of $5.60, so the call is underpriced: buy the call and short the replicating portfolio, i.e. short-sell shares and lend the proceeds (Kessler's strategy).","Buying shares with borrowed funds is the replicating portfolio of a LONG call; it would be used when the call is overpriced and sold, not when it is underpriced.","Buying calls with borrowed funds takes the right side (long call) but borrows to pay for it; the hedge needs short shares with the proceeds lent, not extra borrowing."],
   ["The price of a one-year call option on Birchwood Corporation common stock is $5.60","@row:Up factor","@row:Stock price"],
   "Compare the model value with the market price: market price < model value → buy the call and short the replicating portfolio (short shares, lend); market price > model value → sell the call, buy shares with borrowed funds.",fixed=False)])
