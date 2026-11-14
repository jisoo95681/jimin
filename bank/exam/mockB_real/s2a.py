from lib import *
S2A=[]
S2A.append(V('FSA',"""Alex Tay is an analyst researching Buttery Ranch International. Buttery is a Hong Kong SAR-based retail company reporting under IFRS. Buttery and its subsidiaries have fiscal years ending on 31 December. Buttery's functional and presentation currency is the USD.

Tay collects components of Buttery's net sales growth from various markets of the most recent year in Exhibit 1.

Exhibit 1
# Market | Volume Growth | Price Growth | Foreign Currency Exchange
Thailand | 5% | 0% | 4%
Malaysia | 4% | 5% | –4%
Hong Kong SAR | –4% | 8% | 0%

Creamy Meadows is a subsidiary of Buttery. Creamy began operations in Indonesia on 1 January of the most recent year and uses the Indonesian Rupiah (IDR) as its functional currency. Buttery uses the temporal method to translate Creamy's financial results. For the most recent year, Creamy had a net monetary liability and the IDR strengthened against the USD. Tay believes that the translation method may distort the financial and operating measures of the international subsidiary. To verify this, Tay compares Creamy's translated ratios to the ratios calculated under the local currency by using the exchange rates of the most recent year in Exhibit 2

Exhibit 2
# Date | IDR per USD (Amount of IDR per 1 USD)
1 January of the most recent year | 15,000
Average for the most recent year | 14,700
Weighted average rate when inventory was purchased | 14,700
31 December of the most recent year | 14,000

Finally, Tay analyzes another subsidiary of Buttery, Dairy Barn. Dairy uses the local currency of its home market as its functional currency. Buttery used the current rate method to translate Dairy's financial statements in the most recent year. Dairy's home market has been experiencing high inflation and Tay expects it to be classified as a hyperinflationary economy beginning in the current year.""",[
Q("The market with the highest sustainable sales growth rate is:",["Thailand.","Malaysia.","Hong Kong SAR."],'B',[
"Incorrect: Thailand's organic growth is only 5% + 0% = 5%; 4% came from exchange rates, which is less sustainable.",
"Sustainable growth comes from volume and price, not exchange rates. Malaysia: 4% + 5% = 9%, above Thailand (5%) and Hong Kong SAR (−4% + 8% = 4%).",
"Incorrect: Hong Kong SAR's volume and price growth is −4% + 8% = 4%, lower than Malaysia's 9%."]),
Q("For the most recent year, as a result of consolidating Creamy's results, Buttery would recognize a:",["translation loss in the income statement.","translation gain in the income statement.","negative translation adjustment in the balance sheet."],'A',[
"Under the temporal method, a net monetary liability position with the foreign currency (IDR) strengthening produces a translation loss in the income statement.",
"Incorrect: the temporal method gives a loss, not a gain, in these conditions.",
"Incorrect: a translation adjustment in the balance sheet (equity) arises under the current rate method, not the temporal method."]),
Q("Which of the following ratios for Creamy most likely remains unchanged after translation for the most recent year?",["Current ratio","COGS to sales ratio","Sales to receivables ratio"],'B',[
"Incorrect: current assets include inventory translated at the historical rate (14,700) and monetary items at the year-end rate (14,000), while liabilities are at 14,000, so the ratio changes.",
"Under the temporal method sales are translated at the average rate and COGS at the rate when the inventory was purchased; both are 14,700, so the translated ratio equals the local-currency ratio.",
"Incorrect: sales use the average rate (14,700) and receivables the year-end rate (14,000), so the ratio changes."]),
Q("If Tay's expectation is correct, when translating Dairy's current year financial statements, Buttery is required to restate Dairy's:",["inventory.","accounts payable.","accounts receivable."],'A',[
"Under IAS 29 non-monetary items such as inventory (at historical cost) are restated with the general price index before translation at the current rate.",
"Incorrect: monetary items such as accounts payable are already in current monetary units and are not restated.",
"Incorrect: monetary items such as accounts receivable are not restated."])]))
S2A.append(V('Quant',"""Danny Aoun is an equity portfolio manager at Betterflow Investments. He is developing sentiment indicators for forecasting stock price movements. Aoun gathers textual data from the internet to build machine-learning models. He extracts raw content from a variety of online sources and then trains the models for sentiment prediction. Each text item is labelled as either positive sentiment or negative sentiment. Aoun is more concerned about the models producing false negatives than false positives. He computes selected performance metrics for three models using confusion matrices and presents the metrics in Exhibit 1.

Exhibit 1
# Model | Precision | Recall | F1 Score | Accuracy
X | 0.87 | 0.94 | 0.90 | 0.88
Y | 0.93 | 0.90 | 0.91 | 0.92
Z | 0.96 | 0.82 | 0.88 | 0.86

Aoun then applies his models to determine investor sentiment towards two semiconductor company stocks, Bytewave and Circuitcraft. He also attempts to predict their stock prices using historical data in a regression model.

For Bytewave, Aoun estimates a first-order autoregressive model (AR(1)) on the stock price. From the results, he concludes that the time-series model exhibits autoregressive conditional heteroskedasticity and has ARCH(1) errors.

For Circuitcraft, Aoun considers company fundamentals and predicts the growth in quarterly sales. He gathers quarterly sales data for the past 13 years and runs a regression using the first difference of quarterly sales growth in an AR(2) model. After reviewing the first-differenced time-series data, Aoun determines that the mean and the variance are constant over time. Aoun concludes that the time series does not have a unit root. Circuitcraft's historical quarterly sales growth for the most recent quarters has been as follows: Sales Growth50 = 18.9%, Sales Growth49 = 2.0%, and Sales Growth48 = –11.5%. The critical value for the t-statistic in this model is 2.0 at the 5% significance level. Exhibit 2 shows the results from this regression model.

Exhibit 2
Regression Statistics
R2 | 0.2951
Standard error | 0.1270
Observations | 50
Durbin–Watson statistic | 2.2887

# | Coefficient | Standard Error | t-Statistic
Intercept | 0.0024 | 0.0180 | 0.1325
Sales Growtht–1 – Sales Growtht–2 | –0.2021 | 0.1229 | –1.6443
Sales Growtht–2 – Sales Growtht–3 | –0.5272 | 0.1215 | –4.3411

Autocorrelations of the Residual
# Lag | Autocorrelation | Standard Error | t-Statistic
1 | –0.1825 | 0.1414 | –1.2907
2 | –0.0716 | 0.1414 | –0.5061
3 | –0.2606 | 0.1414 | –1.8424
4 | 0.0609 | 0.1414 | 0.4306""",[
Q("Which machine-learning model should Aoun choose given his concern about false negatives?",["Model X","Model Y","Model Z"],'A',[
"Recall (correctly predicted positives / all actual positives) is the metric to use when false negatives are costly. Model X has the highest recall (0.94).",
"Incorrect: Model Y has the highest accuracy and F1 score, which weight false positives and false negatives equally.",
"Incorrect: Model Z has the highest precision, which matters when false positives are costly."]),
Q("Based on Aoun's conclusion regarding the time-series model for Bytewave, the variance of the error term is:",["not constant but predictable.","both constant and predictable.","neither constant nor predictable."],'A',[
"With ARCH(1) errors the variance in period t + 1 depends on the squared error of period t, so it is not constant but predictable.",
"Incorrect: ARCH errors have a non-constant variance.",
"Incorrect: ARCH(1) makes the variance depend linearly on the previous squared error, so it is predictable."]),
Q("The first-differenced time series for Circuitcraft's growth in quarterly sales:",["is a random walk.","exhibits seasonality.","is covariance stationary."],'C',[
"Incorrect: b2 = −0.5272 is significant (t = −4.34) and less than 1 in absolute value, so it is not a random walk.",
"Incorrect: none of the residual autocorrelations is significant (the largest |t| is 1.84 below 2.0), so there is no seasonality (the 4th-lag autocorrelation is not significant).",
"Residuals are uncorrelated, Aoun found a constant mean and variance and no unit root: the three conditions of covariance stationarity hold."]),
Q("Based on the regression results for Circuitcraft, the 1-period-ahead sales growth forecast is closest to:",["–4.6%.","8.6%.","29.7%."],'B',[
"Incorrect: this forgets to add back the latest growth rate (the regression forecasts the change in growth).",
"ΔSG51 = 0.0024 − 0.2021 × (0.189 − 0.020) − 0.5272 × (0.020 − (−0.115)) = −0.1029, so Sales Growth51 = 0.189 − 0.1029 = 0.0861, about 8.6%.",
"Incorrect: this reverses the growth percentages in the formula."])]))
S2A.append(V('Econ',"""Richard Smith is the chief economist at BMT Consulting and is conducting a training program devoted to economic growth. New analysts are organized into teams to analyze various issues regarding the topic. Each team is then required to provide a short presentation of the key points resulting from their discussions.

Smith begins with a framework for explaining the percentage change in stock market value as the sum of three factors: the percentage change in GDP, the percentage change in the ratio of earnings to GDP, and the percentage change in the price-to-earnings multiple.

Smith shows that the growth accounting equation decomposes the percentage change in output into components attributable to capital, labor, and technology. Team Blue is asked to calculate the economy's potential growth rate using the growth accounting method, based on the following information.
Growth rate of capital = 2.0%
Growth rate of labor = 0.5%
Growth rate of total factor productivity = 1.0%
Share of capital in GDP = 30%

Team Green is asked to discuss how investment in physical capital, human capital, and technological development affects economic growth. As a summary of the discussion, Team Green presents a number of points including the following three:
Point 1: Since technology results in an upward shift in the production function, the relationship between economic growth and R&D spending is positive in the short run.
Point 2: Total factor productivity reflects the state of technology, and can be measured by the contribution of capital deepening plus the growth rates of labor productivity.
Point 3: Although long-term sustainable growth cannot rely on pure capital deepening, the impact of investment spending on available capital depends on the existing physical capital stock.

Smith introduces three main paradigms with respect to per capita growth in an economy: the classical, neoclassical, and endogenous growth models. Comparing those models, Smith emphasizes that the factors that drive long-term economic growth are the subject of much debate. Team Yellow is asked to analyze the impact of the various parameters on the steady state in the neoclassical growth model. Team Yellow reports that the following factors permanently change the growth rate of output per worker.
Factor 1: Growth rate of labor force
Factor 2: Growth rate of total factor productivity

Team Purple is asked to investigate whether the per capita income of a developing country should converge toward that of developed countries over time. Team Purple reviews various determinants of per capital incomes: saving rate, population growth rate, the shape of production function, and the externalities associated with human capital. After a debate among team members, Team Purple concludes that the externalities associated with human capital is the most important determinant in predicting the occurrence of convergence.

Smith presents the expected impact of removing trade barriers to economic growth. Referring to the neoclassical growth model, Smith concludes that opening up the economy should increase the rate at which countries' capital-to-labor ratios converge. Team Orange is asked to describe the dynamic adjustment process consistent with Smith's conclusion. Team Orange provides the following descriptions:
Description 1: The growth in the capital-exporting countries will be above the steady state.
Description 2: Developed countries will tend to run trade deficits as they export capital.
Description 3: The rate of return on investments will be lower in countries with high capital-to-labor ratios.""",[
Q("Based on the information given to Team Blue, the estimate of the economy's potential growth rate is closest to:",["1.95%.","2.55%.","3.50%."],'A',[
"Growth = TFP growth + α × capital growth + (1 − α) × labor growth = 1.0% + 0.30 × 2.0% + 0.70 × 0.5% = 1.95%.",
"Incorrect: this swaps the weights (70% on capital and 30% on labor).",
"Incorrect: this simply adds the three growth rates (1.0% + 2.0% + 0.5%)."]),
Q("Which of the points raised by Team Green is most likely correct?",["Point 1","Point 2","Point 3"],'C',[
"Incorrect: the relationship between R&D spending and growth is not clear-cut in the short run (creative destruction can slow growth cyclically).",
"Incorrect: labor productivity growth equals the contribution of capital deepening plus TFP growth, so TFP is not capital deepening plus labor productivity growth.",
"The impact of investment on available capital depends on the existing capital stock (large in developing countries), even though sustainable long-term growth cannot rely on capital deepening alone."]),
Q("Which of the following convergence concepts is most compatible with Team Purple's conclusion?",["Non-convergence","Absolute convergence","Conditional convergence"],'A',[
"Externalities from human capital (endogenous growth) remove diminishing returns, so rich countries can keep their lead; the model makes no prediction that convergence occurs.",
"Incorrect: absolute convergence assumes diminishing marginal returns to capital and the same technology.",
"Incorrect: conditional convergence also assumes diminishing returns to capital (the neoclassical model)."]),
Q("Which of the following descriptions provided by Team Orange is consistent with Smith's conclusion?",["Description 1","Description 2","Description 3"],'C',[
"Incorrect: growth in the capital-exporting countries will be below the steady state (capital flows out to the capital-poor country).",
"Incorrect: capital-poor countries run trade deficits while developed countries run trade surpluses as they export capital.",
"Marginal product of capital is lower where capital per worker is high, so returns are lower in high capital-to-labor countries and higher in low capital-to-labor countries."])]))
S2A.append(V('PM',"""Li Guoqing is a fund manager who is reviewing four similar ETFs. He calculates the expected 1-year holding period cost for ETF 1 based on the information in Exhibit 1.

Exhibit 1
# | ETF 1
Annual management fee | 0.50%
One-way trading commission | 0.10%
Bid–ask spread on purchase and sale | 0.20%

Li believes that the four ETFs share the same factor. He believes that there are arbitrage opportunities among the four ETFs, based on the data in Exhibit 2.

Exhibit 2
# | ETF 1 | ETF 2 | ETF 3 | ETF 4
Expected return | 2.60% | 3.00% | 3.50% | 4.00%
Factor sensitivity | 0.6 | 1.0 | 1.6 | 2.0

Using arbitrage pricing theory (APT), Li considers the following trading strategies to exploit the arbitrage opportunity:
Strategy 1: Sell short $6 million of ETF 1 and $4 million of ETF 3; buy $10 million of ETF 2.
Strategy 2: Sell short $6 million of ETF 2 and $4 million of ETF 4; buy $10 million of ETF 3.
Strategy 3: Buy $4 million of ETF 2 and $6 million of ETF 4; sell short $10 million of ETF 3.

Li uses a two-factor model to analyze the returns of one of the equity portfolios in his fund. He examines how fund returns, RP, are related to surprises in inflation, FINFL, and GDP growth, FGDP, as shown below:
RP = aP + bP1FINFL + bP2FGDP + εP

Li estimates the expected return of the portfolio to be 1.8% and uses an error term of 0.2%. The actual and expected values of inflation and GDP growth, as well as the estimated portfolio's sensitivities to these factors, are presented in Exhibit 3.

Exhibit 3
# Variable | Actual Value (%) | Predicted Value (%) | Factor Sensitivity
Inflation | 1.2 | 0.8 | 3.0
GDP growth | –3.5 | –4.0 | 0.8""",[
Q("Excluding any compounding effects, the expected 1-year holding period cost for investing in ETF 1 is:",["0.80%.","0.90%.","1.10%."],'B',[
"Incorrect: this uses a one-way commission instead of round-trip (0.10% + 0.20% = 0.30%; + 0.50% = 0.80%).",
"Round-trip trading cost = 2 × 0.10% commission + 2 × ½ × 0.20% spread = 0.40%. Holding cost = 0.40% + 0.50% fee = 0.90%.",
"Incorrect: this uses the full bid-ask spread twice instead of half the spread each way (0.60% + 0.50%)."]),
Q("The most profitable strategy to exploit the arbitrage opportunities is:",["Strategy 1.","Strategy 2.","Strategy 3."],'C',[
"Incorrect: Strategy 1 has zero factor risk but earns only $4,000.",
"Incorrect: Strategy 2 earns $10,000 but leaves a factor risk of 0.2, so it is not an arbitrage.",
"Strategy 3 earns $10,000 (4 × 3.0% + 6 × 4.0% − 10 × 3.5% = 0.01m) with a factor sensitivity of 4/10 × 1.0 + 6/10 × 2.0 − 1.6 = 0: the highest return with zero factor risk."]),
Q("Li's two-factor model is best categorized as a:",["statistical factor model.","fundamental factor model.","macroeconomic factor model."],'C',[
"Incorrect: statistical models extract factors (portfolios) from historical returns.",
"Incorrect: fundamental factors are company attributes (book-to-price, size, P/E, leverage).",
"The factors are surprises in macroeconomic variables (inflation, GDP growth), so it is a macroeconomic factor model."]),
Q("Based on the two-factor model, the return on Li's portfolio is:",["1.8%.","2.8%.","3.6%."],'C',[
"Incorrect: this omits the expected return aP (3.0 × 0.4% + 0.8 × 0.5% + 0.2% = 1.8%).",
"Incorrect: this uses the actual values instead of the surprises.",
"RP = 1.8% + 3.0 × (1.2% − 0.8%) + 0.8 × (−3.5% − (−4.0%)) + 0.2% = 1.8% + 1.2% + 0.4% + 0.2% = 3.6%."])]))
