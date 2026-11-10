# 10 Nov: Module 5 Time-Series Analysis quiz (portal paste). Real vignettes with their answer keys (reading 2).
# Martinez (Q1-7) was already stored as s1a-martinez, so it is not repeated here.
def tab(s):
    out = []
    for l in s.split('\n'):
        if l.startswith('# '):
            l = l[2:]
            if l.startswith('| '): l = ' ' + l
        out.append(l.replace(' | ', '\t') if ' | ' in l else l)
    return '\n'.join(out)
def Q(n, q, opts, ans, why): return dict(n=n, q=q, options=opts, answer=ans, why=why)
SRC = "10 Nov Module 5 Time-Series Analysis quiz (9/73: answers mostly not given, opened to copy the questions)"
V = []

V.append(dict(id='ts-busse', source=SRC, readings=[2], title="Time series · Busse: random walk, unit root, Dickey–Fuller, seasonal lag, ARCH, cointegration", body=tab("""Max Busse is an analyst in the research department of a large hedge fund. He was recently asked to develop a model to predict the future exchange rate between two currencies. Busse gathers monthly exchange rate data from the most recent 10-year period and runs a regression based on the following AR(1) model specification:

Regression 1: xt = b0 + b1xt−1 + εt, where xt is the exchange rate at time t.

Based on his analysis of the time series and the regression results, Busse reaches the following conclusions:

Conclusion 1: The variance of xt increases over time.
Conclusion 2: The mean-reverting level is undefined.
Conclusion 3: b0 does not appear to be significantly different from 0.

Busse decides to do additional analysis by first-differencing the data and running a new regression.

Regression 2: yt = b0 + b1yt−1 + εt, where yt = xt − xt−1.

Exhibit 1 shows the regression results.

Exhibit 1
First-Differenced Exchange Rate AR(1) Model: Month-End Observations, Last 10 Years
Regression Statistics
R2 | 0.0017 |
Standard error | 7.3336 |
Observations | 118 |
Durbin–Watson | 1.9937 |
# | Coefficient | Standard Error | t-Statistic
Intercept | −0.8803 | 0.6792 | −1.2960
xt−1 − xt−2 | 0.0412 | 0.0915 | 0.4504
Autocorrelations of the Residual
# Lag | Autocorrelation | Standard Error | t-Statistic
1 | 0.0028 | 0.0921 | 0.0300
2 | 0.0205 | 0.0921 | 0.2223
3 | 0.0707 | 0.0921 | 0.7684
4 | 0.0485 | 0.0921 | 0.5271
Note: The critical t-statistic at the 5% significance level is 1.98.

Busse decides that he will need to test the data for nonstationarity using a Dickey–Fuller test. To do so, he knows he must model a transformed version of Regression 1.

Busse's next assignment is to develop a model to predict future quarterly sales for PoweredUP, Inc., a major electronics retailer. He begins by running the following regression:

Regression 3: ln Salest − ln Salest−1 = b0 + b1(ln Salest−1 − ln Salest−2) + εt.

Exhibit 2 presents the results of this regression.

Exhibit 2
Log Differenced Sales AR(1) Model: PoweredUP, Inc., Last 10 Years of Quarterly Sales
Regression Statistics
R2 | 0.2011 |
Standard error | 0.0651 |
Observations | 38 |
Durbin–Watson | 1.9677 |
# | Coefficient | Standard Error | t-Statistic
Intercept | 0.0408 | 0.0112 | 3.6406
ln Salest−1 − ln Salest−2 | −0.4311 | 0.1432 | −3.0099
Autocorrelations of the Residual
# Lag | Autocorrelation | Standard Error | t-Statistic
1 | 0.0146 | 0.1622 | 0.0903
2 | −0.1317 | 0.1622 | −0.8119
3 | −0.1123 | 0.1622 | −0.6922
4 | 0.6994 | 0.1622 | 4.3111
Note: The critical t-statistic at the 5% significance level is 2.02.

Because the regression output from Exhibit 2 raises some concerns, Busse runs a different regression. These regression results, along with quarterly sales data for the past five quarters, are presented in Exhibit 3 and Exhibit 4, respectively.

Exhibit 3
Log Differenced Sales AR(1) Model with Seasonal Lag: PoweredUP, Inc., Last 10 Years of Quarterly Sales
Regression Statistics
R2 | 0.6788 |
Standard error | 0.0424 |
Observations | 35 |
Durbin–Watson | 1.8799 |
# | Coefficient | Standard Error | t-Statistic
Intercept | 0.0092 | 0.0087 | 1.0582
ln Salest−1 − ln Salest−2 | −0.1279 | 0.1137 | −1.1252
ln Salest−4 − ln Salest−5 | 0.7239 | 0.1093 | 6.6209
Autocorrelations of the Residual
# Lag | Autocorrelation | Standard Error | t-Statistic
1 | 0.0574 | 0.1690 | 0.3396
2 | 0.0440 | 0.1690 | 0.2604
3 | 0.1923 | 0.1690 | 1.1379
4 | −0.1054 | 0.1690 | −0.6237
Note: The critical t-statistic at the 5% significance level is 2.03.

Exhibit 4
Most Recent Quarterly Sales Data (in billions)
Dec 2015 (Salest−1) | $3.868
Sep 2015 (Salest−2) | $3.780
June 2015 (Salest−3) | $3.692
Mar 2015 (Salest−4) | $3.836
Dec 2014 (Salest−5) | $3.418

After completing his work on PoweredUP, Busse is asked to analyze the relationship of oil prices and the stock prices of three transportation companies. His firm wants to know whether the stock prices can be predicted by the price of oil. Exhibit 5 shows selected information from the results of his analysis.

Exhibit 5
Analysis Summary of Stock Prices for Three Transportation Stocks and the Price of Oil
# | Unit Root? | Linear or Exponential Trend? | Serial Correlation of Residuals in Trend Model? | ARCH(1)? | Comments
Company 1 | Yes | Exponential | Yes | Yes | Not cointegrated with oil price
Company 2 | Yes | Linear | Yes | No | Cointegrated with oil price
Company 3 | No | Exponential | Yes | No | Not cointegrated with oil price
Oil Price | Yes |  |  |  |

To assess the relationship between oil prices and stock prices, Busse runs three regressions using the time series of each company's stock prices as the dependent variable and the time series of oil prices as the independent variable."""),
 questions=[
 Q(27, "Which of Busse's conclusions regarding the exchange rate time series is consistent with both the properties of a covariance-stationary time series and the properties of a random walk?", ["Conclusion 1", "Conclusion 2", "Conclusion 3"], 'C',
   "C is correct. A random walk is xt = b0 + b1xt−1 + εt with b0 = 0 and b1 = 1, so b0 = 0 is a property of a random walk. b0 = 0 does not break any of the three requirements of covariance stationarity (constant finite mean, constant finite variance, constant finite covariance with its own lags), so it is consistent with both."),
 Q(28, "Based on the regression output in Exhibit 1, the first-differenced series used to run Regression 2 is consistent with:", ["a random walk.", "covariance stationarity.", "a random walk with drift."], 'B',
   "B is correct. At the 5% level (critical t = 1.98) neither the intercept nor the slope differs significantly from zero, and the residual autocorrelations do not differ from zero. Regression 2 reduces to yt = εt with mean-reverting level b0/(1 − b1) = 0 and constant variance σ², so yt is covariance stationary."),
 Q(29, "Based on the regression results in Exhibit 1, the original time series of exchange rates:", ["has a unit root.", "exhibits stationarity.", "can be modeled using linear regression."], 'A',
   "A is correct. If the exchange rate is a random walk, the first-differenced series gives b0 = 0 and b1 = 0 with uncorrelated errors. Exhibit 1 shows exactly that (all t-statistics are below 1.98), so the original series has a unit root. All random walks have unit roots."),
 Q(30, "In order to perform the nonstationarity test, Busse should transform the Regression 1 equation by:", ["adding the second lag to the equation.", "changing the regression's independent variable.", "subtracting the independent variable from both sides of the equation."], 'C',
   "C is correct. The Dickey–Fuller test subtracts xt−1 from both sides: xt − xt−1 = b0 + (b1 − 1)xt−1 + εt. The dependent variable changes (xt − xt−1) and the slope becomes b1 − 1, but the independent variable does not change."),
 Q(31, "Based on the regression output in Exhibit 2, what should lead Busse to conclude that the Regression 3 equation is not correctly specified?", ["The Durbin–Watson statistic", "The t-statistic for the slope coefficient", "The t-statistics for the autocorrelations of the residual"], 'C',
   "C is correct. The fourth residual autocorrelation is 0.6994 with t = 4.3111, above the critical value 2.02, so the null of no autocorrelation is rejected. This is strong seasonal autocorrelation: Regression 3 is misspecified."),
 Q(32, "Based on the regression output in Exhibit 3 and sales data in Exhibit 4, the forecasted value of quarterly sales for March 2016 for PoweredUP is closest to:", ["$4.193 billion.", "$4.205 billion.", "$4.231 billion."], 'C',
   "C is correct. ln Salest − ln 3.868 = 0.0092 − 0.1279(ln 3.868 − ln 3.780) + 0.7239(ln 3.836 − ln 3.418) = 0.0092 − 0.1279(0.02301) + 0.7239(0.11538). So ln Salest = 1.35274 + 0.0092 − 0.00294 + 0.08352 = 1.44251 and Salest = e^1.44251 = 4.231."),
 Q(33, "Based on Exhibit 5, Busse should conclude that the variance of the error terms for Company 1:", ["is constant.", "can be predicted.", "is homoskedastic."], 'B',
   "B is correct. Company 1 is ARCH(1), i.e. heteroskedastic: the variance of the error in one period depends on the variance in the previous period, so the variance of the error in t + 1 can be predicted in period t."),
 Q(34, "Based on Exhibit 5, for which company would the regression of stock prices on oil prices be expected to yield valid coefficients that could be used to estimate the long-term relationship between stock price and oil price?", ["Company 1", "Company 2", "Company 3"], 'B',
   "B is correct. When two series both have a unit root and are cointegrated, the regression error is covariance stationary, so the coefficients and standard errors are consistent. Company 2 and the oil price both have a unit root and are cointegrated. Company 1 is not cointegrated and Company 3 has no unit root."),
 Q(35, "Based on Exhibit 5, which single time-series model would most likely be appropriate for Busse to use in predicting the future stock price of Company 3?", ["Log-linear trend model", "First-differenced AR(2) model", "First-differenced log AR(1) model"], 'C',
   "C is correct. Company 3 has an exponential trend, so take the natural log and first-difference it. The residuals of the trend model are serially correlated, so a more complex model such as an autoregressive model is needed."),
 ]))

V.append(dict(id='ts-namibia', source=SRC, readings=[2], title="Time series · Namibia GDP (New Markets): log-linear trend, three-step AR check, mean reversion, seasonality (Q48 units flawed in the portal)", body=tab("""New Markets Inc. is an investment firm focusing on frontier developing market investments for institutional clients seeking opportunities in high-growth economies. Portfolio manager, Jan Haag is meeting with the firm's junior analyst, Peer Olsen, who is studying the Gross Domestic Product (GDP) of countries in Africa. Haag is interested in identifying countries, which could profit from rising agricultural prices and increased demand for precious metals in the next 3 to 5 years. He believes increasing rates of future GDP growth will also indicate attractive investment opportunities.

He has asked Olsen to share the results of his preliminary analysis of the GDP of Namibia. Olsen explains to Haag some of the results of his analysis citing where he is still uncertain whether his model is correctly specified:

"My model uses quarterly data from the last 3 years. My first attempt to estimate an equation for predicting the size of the Namibian GDP each quarter produced the following equation ignoring the error term:

yt = b0 + b1t

where:

yt = the size of GDP in Namibia in USD billions at time t
b0 = the intercept coefficient
b1 = the trend coefficient

In plotting the results of the equation from this model, I made the following three observations:

Observation 1: The level of GDP in USD is constantly growing over time
Observation 2: The residuals from successive periods do not appear to be correlated
Observation 3: The trend from the model alternates between periods when it is persistently above or persistently below GDP

I then decided a log-linear trend regression model would be more appropriate for predicting the quarterly GDP level for Namibia in USD. Exhibit 1 shows regression statistics from estimating this equation."

Exhibit 1
R2 | .967 |
Standard error | .129 |
Observations | 12 |
Durbin-Watson | .274 |
# | Coefficient | Standard Error | t-Statistic
Intercept | 8.9673 | .3754 | 206.80
T (Trend) | 0.0851 | .0019 | 35.875

Haag comments: "A key assumption in time-series analysis is that the time series must be covariance stationary and one of your Observations indicates to me that this is not the case. I think your current model will also show that the USD level of GDP in one quarter is related to the level in the previous quarter. Therefore, I think you should consider focusing on the annualized growth rate of GDP from quarter to quarter and use an autoregressive model for this time series."

Olsen replies: "I can develop an AR model focusing on the growth rate of GDP, using the following three step method:"

Step 1: Estimate a specific autoregressive model
Step 2: Compute the correlations of the series with its own past values
Step 3: Test to ensure that the autocorrelations differ significantly from 0 using the Durbin-Watson statistic

Haag points out to Olsen: "Since you are analyzing the quarterly rate of GDP growth, please also test for mean reversion and seasonality."

Olsen states: "I have presented some of the results in my estimating AR(1) this model in Exhibit 2."

Exhibit 2
R2 | .934 |
Standard error | .158 |
Observations | 12 |
Durbin-Watson | 0.37 |
# | Coefficient | Standard Error | t-Statistic
Intercept | .0778 | .0586 | 2.8039
T (Trend) | 0.00551 | .3731 | 7.875
Autocorrelations of the Residual
# Lag | Autocorrelation | Standard Error | t-Statistic
1 | 0.0845 | .1790 | 1.2365
2 | –0.1389 | .1790 | –2.3143
3 | –0.1253 | .1790 | –1.5498
4 | 0.7849 | .1790 | 5.9730"""),
 questions=[
 Q(48, "Based on the data in Exhibit 1, Olsen's model predicts the value of Namibia's GDP at t = 13 will be closest to:", ["USD 8.54 billion.", "USD 12.43 billion.", "USD 23.71 billion."], 'C',
   "C is correct (portal key). In a log-linear trend model the predicted value is e^(b0 + b1t) = e^(8.9673 + 0.0851 × 13). Note: the vignette's units are inconsistent (the formula gives about 23,709 in the units of the series); the portal's key is 23.71. Do not use this question in a mock."),
 Q(49, "In organizing his three-step method to determine whether his AR model is correctly specified, Olsen is least likely correct about:", ["Step 1.", "Step 2.", "Step 3."], 'C',
   "C is correct. The method is: 1) estimate an autoregressive model, 2) compute the autocorrelations of the residuals, 3) test whether the residual autocorrelations differ significantly from 0. If they do, the model is misspecified. Step 3 as stated (use the Durbin–Watson statistic, ensure autocorrelations differ from 0) is wrong: Durbin–Watson is not valid for an AR model."),
 Q(50, "Based on the data in Exhibit 2, the mean-reverting GDP growth rate Olsen calculates would be closest to:", ["7.74%.", "7.82%.", "8.33%."], 'B',
   "B is correct. In an AR(1) model the mean-reverting level is b0/(1 − b1) = 0.0778/(1 − 0.00551) = 0.0782. A (0.0778/(1 + 0.00551)) uses a plus sign; C (0.0778 + 0.00551) adds the coefficients."),
 Q(51, "If Olsen's new equation makes an adjustment for seasonality it would most likely include the:", ["second quarter lag variable.", "third quarter lag variable.", "fourth quarter lag variable."], 'C',
   "C is correct. With quarterly data the seasonal lag is the fourth. The fourth residual autocorrelation in Exhibit 2 is strongly positive (0.7849, t = 5.97), so a fourth-lag variable should be added."),
 ]))

V.append(dict(id='ts-rudall', source=SRC, readings=[2], title="Time series · Rudall Hardware (Knight): log-linear trend, Durbin–Watson, AR(1) forecast, seasonal lag, RMSE", body=tab("""Thomas Knight, an analyst with Wanjarri Investment Management, is tasked with forecasting future sales for Rudall Hardware, a publicly traded retail business specializing in home improvements. Using 25 quarters of sales data ending with the most recent quarter-end date, Knight estimates a log-linear trend with an intercept of 9.464 million and a trend coefficient of 0.003 million. Based on this model, he creates a forecast of sales for the next four quarters to discuss with his supervisor, Rory Johnson.

Johnson reviews Knight's forecast and states:

Statement 1) As long as the R2 is high, we can be comfortable that the model is a good fit for our analysis.
Statement 2) A statistically meaningful low Durbin-Watson statistic indicates that the errors in the model may exhibit positive serial correlation.
Statement 3) If Rudall Hardware's sales are growing at a constant rate, a linear trend model may be a better fit than a log-linear model.

Next, Johnson asks Knight to forecast Rudall Hardware's net margin (net income/sales) for the next four quarters. Knight agrees and explains that he will use a first-order autoregressive model since each quarter's net margin appears related to the prior quarter's net margin. Knight also mentions that he will use an intercept of 0.0415 and a coefficient on the first lag of the net margin of 0.8295.

When applying the first-order autoregressive model, Knight wants to conduct some tests to ensure the model is producing meaningful results. In order to do this, Knight comments that he must test whether the:

Test 1: Durbin-Watson statistic differs significantly from 2.
Test 2: residual autocorrelations differ significantly from 0.
Test 3: intercept and coefficient on the first lag differ significantly from 0.

In reviewing the quarterly net margin forecast, Johnson points out that the autocorrelation of the residuals for the 4th lag is significantly different than 0, while lags 1 through 3 are not significantly different than 0, indicating an issue with seasonality. Johnson asks Knight to build a first-order autoregressive model to forecast earnings per share for the next four quarters, but to account for seasonality in this model.

Knight reviews the company's earnings per share data and determines that he can create a first-order autoregressive model to account for the seasonality using the information in Exhibit 1.

Exhibit 1
Intercept | 0.2360
1 Quarter Lag Coefficient | 0.4264
4 Quarter Lag Coefficient | 0.6285
Earnings Per Share Last Quarter | $3.75
Earnings Per Share 4 Quarters Prior | $3.15

After the models Knight created are in use for several quarters, Johnson asks Knight to put together a report assessing the accuracy of the models in forecasting out-of-sample forecasts. Knight reports to Johnson that the root mean squared error for each model is:

Exhibit 2
# Model | Average Squared Error | Root Mean Squared Error | Durbin-Watson
Sales Model | 1.6626 | 1.2894 | 2.0225
Net Margin Model | 1.7575 | 1.3257 | 2.0030
Earnings Per Share Model | 1.3851 | 1.1769 | 2.0187"""),
 questions=[
 Q(52, "Which of Johnson's statements relating to Knight's forecasted future sales for Rudall Hardware is most likely correct?", ["Statement 1", "Statement 2", "Statement 3"], 'B',
   "B is correct. A statistically significant low Durbin–Watson statistic indicates the errors may have positive serial correlation. Statement 1 is wrong: a high R² does not help if the errors are serially correlated. Statement 3 is wrong: constant dollar growth fits a linear trend, constant rate of growth fits a log-linear model."),
 Q(53, "If Rudall Hardware's net margin is 15% this quarter, Knight's first-order autoregressive model will predict the net margin two quarters from now to be closest to:", ["15.88%.", "17.91%.", "20.74%."], 'B',
   "B is correct. Apply the model twice: 0.0415 + 0.8295 × 0.15 = 16.59%, then 0.0415 + 0.8295 × 0.1659 = 17.91%. A adds the margin to the intercept before multiplying; C adds the intercept twice."),
 Q(54, "Of the three tests Knight indicates he would like to conduct for the first-order autoregressive model, which is most likely appropriate to test for serial correlation in the model?", ["Test 1", "Test 2", "Test 3"], 'B',
   "B is correct. Serial correlation in an autoregressive model is tested through the residual autocorrelations. Test 1 is invalid because the Durbin–Watson statistic cannot be used when a lagged dependent variable is an independent variable. Test 3 tests the coefficients, not the residuals."),
 Q(55, "Once adjusted for seasonality, based on data in Exhibit 1, the forecasted earnings per share for the current quarter is closest to:", ["$3.58.", "$3.81.", "$3.94."], 'B',
   "B is correct. 0.2360 + 0.4264 × 3.75 + 0.6285 × 3.15 = $3.81. A leaves out the intercept; C matches the coefficients with the wrong lags."),
 ]))

V.append(dict(id='ts-taylor', source=SRC, readings=[2], title="Time series · Taylor (Maclaurin): log-linear forecast, mean reversion, Dickey–Fuller transformation, random walk with drift", body=tab("""Xyrees Taylor is an equity analyst evaluating the stock of Maclaurin Corporation. Taylor undertakes quantitative analysis to get a better understanding of how relevant valuation parameters have changed over time.

First, Taylor examines the quarterly sales (in $ millions) of the company for the past six years (24 observations) to forecast sales for the current quarter. Taylor uses Model A, a log-linear model (ln yt = b0 + b1t + εt) where yt represents quarterly sales for quarter t. The regression estimates for the intercept and the trend coefficient are 5.74820 and 0.03795, respectively.

Maclaurin's earnings are substantially export-driven. To understand the impact of foreign exchange rates on earnings, Taylor builds Model B, an autoregressive AR(1) model, for the exchange rate between Maclaurin's domestic currency and that of its primary export market. The regression estimates for the intercept and the coefficient of the first lag are 0.3000 and 0.9093, respectively.

Taylor builds another AR(1) model (Model C) for the exchange rate between Maclaurin's domestic currency and that of its secondary export market. Taylor suspects that the time series used for Model C may have a unit root and he runs a Dickey–Fuller test.

Before making his recommendation on the stock, Taylor also wants to model the movement of Maclaurin's share price (in natural logs). He uses an AR(1) model (Model D). After performing the relevant necessary transformations and reviewing the regression statistics, Taylor concludes that the intercept is 0.25 and the coefficient of the first lag is 1."""),
 questions=[
 Q(56, "Based on Model A, the predicted value of Maclaurin's sales for the current quarter is closest to:", ["$326 million.", "$780 million.", "$810 million."], 'C',
   "C is correct. Six years = 24 observations, so the current quarter is t = 25: exp(5.74820 + 0.03795 × 25) = 809.93, about $810 million. A uses t = 1 (326); B uses t = 24 (780)."),
 Q(57, "For Model B, the mean-reverting level is closest to:", ["1.30.", "3.03.", "3.31."], 'C',
   "C is correct. Mean-reverting level = b0/(1 − b1) = 0.3000/(1 − 0.9093) = 3.31. A swaps the coefficients (b1/(1 − b0)); B uses b1/b0."),
 Q(58, "In order to run his test on Model C, Taylor should:", ["take the first difference of the time series.", "subtract the first lag of the time series from both sides of the model equation.", "take the natural logarithms of both the independent and dependent variables."], 'B',
   "B is correct. The Dickey–Fuller test subtracts xt−1 from both sides of the AR(1) model: xt − xt−1 = b0 + (b1 − 1)xt−1 + εt, i.e. g1 = b1 − 1, and a unit root means g1 = 0. First-differencing the series would introduce a second lag instead."),
 Q(59, "Taylor's regression estimates for Model D indicate that the time series of Maclaurin's share price (in natural logs) is most likely:", ["covariance stationary.", "a simple random walk.", "a random walk with drift."], 'C',
   "C is correct. b1 = 1 means a unit root (undefined mean reversion, not covariance stationary), and b0 = 0.25 ≠ 0, so it is a random walk with drift. A simple random walk has b0 = 0."),
 ]))

V.append(dict(id='ts-sumner', source=SRC, readings=[2], title="Time series · Sumner (UK house prices): first differences, AR(1) forecast, mean reversion, cointegration tests", body=tab("""Janice Sumner is an analyst at a UK-based investment management firm that focuses on alternative asset classes. Sumner is analyzing a number of real estate investments and wants to develop a time-series model to understand recent house price dynamics and to forecast price movements.

Sumner collects 10 years of quarterly data of a UK House Price Index (HPI, scaled to be 100 in the first quarter). After her initial analysis of the data, Sumner makes the following observations:

Observation 1: Each consecutive value in the time series appears to increase by approximately the same positive amount, irrespective of the level of the index.
Observation 2: A plot of the first-difference of the index shows roughly the same variance over time.

Given these observations, Sumner decides to compute the difference in the HPI over each quarter, denoted ΔHPI, and proposes Model 1, an AR(1) model:

Model 1: ΔHPIt = b0 + b1ΔHPIt–1 + εt

The results from estimating Model 1 are summarized in Exhibit 1.

Exhibit 1
# | Coefficient | Standard Error | t-Statistic
Intercept | 0.7457 | 0.2069 | 3.6032
ΔHPIt–1 | 0.5369 | 0.1327 | 4.0466

The HPI was 156.26 two quarters ago, 158.07 one quarter ago, and it currently stands at 160.23. Sumner wants to forecast next quarter's HPI.

Lastly, Sumner wants to investigate the relationship between UK house prices and the UK Consumer Price Index (CPI). To do so, she plans to regress the quarterly values of the HPI on a time series of quarterly values of the CPI for the same period. Before doing so, she performs the following preliminary statistical tests:

Test 1: A Dickey–Fuller test on the times series of HPI;
Test 2: A Dickey–Fuller test on the times series of CPI;
Test 3: An (Engle–Granger) Dickey–Fuller test on the error term when regressing HPI on CPI."""),
 questions=[
 Q(60, "Observations 1 and 2 most likely indicate that the first difference of the time series:", ["has a unit root.", "is covariance stationary.", "is a random walk with drift."], 'B',
   "B is correct. Observation 1 (the index rises by about the same amount each quarter, a linear trend) means the first-differenced series has a constant mean; Observation 2 says its variance is constant. So the first difference is covariance stationary, and cannot have a unit root."),
 Q(61, "The mean-reverting level for ΔHPI implied by Model 1 is closest to:", ["0.75.", "1.61.", "2.11."], 'B',
   "B is correct. Mean-reverting level = b0/(1 − b1) = 0.7457/(1 − 0.5369) = 1.61. A is just the intercept; C swaps the coefficients."),
 Q(62, "Based on Model 1, the next-quarter forecast for the HPI is closest to:", ["161.51.", "161.95.", "162.14."], 'C',
   "C is correct. The latest change is 160.23 − 158.07 = 2.16, so ΔHPIt+1 = 0.7457 + 0.5369 × 2.16 = 1.9054 and the forecast is 160.23 + 1.9054 = 162.14. A adds the two coefficients; B uses the change of one quarter earlier (1.81)."),
 Q(63, "The results of regressing HPI on CPI are most likely valid if the null hypothesis is rejected in:", ["Test 1 only.", "Test 2 only.", "Test 3 only."], 'C',
   "C is correct. If neither null of a unit root is rejected in Tests 1 and 2, both series have a unit root. The regression is then valid only if they are cointegrated, i.e. the Engle–Granger test (Test 3) rejects a unit root in the error term, so the error is covariance stationary."),
 ]))

V.append(dict(id='ts-hall', source=SRC, readings=[2], title="Time series · Hall (copper and gold): covariance stationarity, linear trend forecast, misspecification, Dickey–Fuller", body=tab("""John Hall is examining the time series behavior of copper and gold prices over the last year. Hall knows that, to make a valid statistical inference, the time series needs to be covariance stationary. He lists three requirements that he believes are necessary for a time series to be stationary.

Requirement 1: The mean must be zero and finite in all periods.
Requirement 2: The variance must be constant and finite in all periods.
Requirement 3: The covariance of the time series with its lagged values must be constant and finite in all periods.

Hall plots weekly copper prices (in $ per pound) over a year (52 observations) and notices an apparent upward trend. He runs Model A, a linear trend model, by regressing copper prices against a trend, with results reported in Exhibit 1. He then uses the results to forecast future copper prices.

Exhibit 1
# | Coefficient | Standard Error | t-Statistic
Intercept | 2.5768 | 0.0417 | 61.83
t (Trend) | 0.0383 | 0.0014 | 27.99

Next, Hall uses Model B, a first-order autoregressive model, AR(1), for the gold price series. He determines that the coefficient of the first lag of the original weekly gold price series is significantly different from zero. He also calculates the autocorrelations of the residuals up to four lags and determines that only the residual autocorrelation at the third lag is significantly different from zero.

Hall then conducts a Dickey–Fuller test for the gold price series using the regression equation Pt − Pt–1 = b0 + g1Pt–1 + εt, where Pt denotes the gold price at time t. The results are shown in Exhibit 2.

Exhibit 2
# | Coefficient | Standard Error | t-Statistic | p-Value
Intercept | 9.3724 | 48.2508 | 0.1942 | 0.8467
Pt–1 | 0.0003 | 0.0332 | 0.0093 | 0.9926"""),
 questions=[
 Q(64, "Which requirement listed by Hall is not necessary for a time series to be stationary?", ["Requirement 1", "Requirement 2", "Requirement 3"], 'A',
   "A is correct. A zero mean is not required: the expected value must be constant and finite in all periods, the variance must be constant and finite, and the covariance with its own lags must be constant and finite."),
 Q(65, "Based on Model A, the predicted (out-of-sample) price of copper five weeks ahead is closest to:", ["$2.18.", "$2.77.", "$4.76."], 'C',
   "C is correct. 52 observations in the sample, so five weeks ahead is t = 57: 2.5768 + 0.0383 × 57 = $4.76. A leaves out the intercept; B uses t = 5."),
 Q(66, "Model B is most likely:", ["correctly specified.", "misspecified based on the statistical results observed in the model's residuals.", "misspecified based on the coefficient of the first lag of the original weekly gold price series."], 'B',
   "B is correct. A correctly specified model has residual autocorrelations not different from zero. The third-lag autocorrelation is significant, so the AR(1) model is misspecified. A significant first-lag coefficient is expected in an AR(1) process."),
 Q(67, "Based on Exhibit 2, the test that Hall conducts for the gold price series:", ["is inconclusive.", "indicates that the series is stationary.", "indicates that the series exhibits a unit root."], 'C',
   "C is correct. The Dickey–Fuller null hypothesis is g1 = 0 (unit root, nonstationary) against g1 < 0. The t-statistic for g1 is 0.0093 and its p-value is 0.9926, so the null is not rejected: the gold price series has a unit root."),
 ]))

V.append(dict(id='ts-demolay', source=SRC, readings=[2], title="Time series · DeMolay and Kamini (P/E): random walk, ARCH(1), generalized least squares, unit roots and cointegration", body=tab("""Eduardo DeMolay, a research analyst at Mumbai Securities, is studying the time-series behavior of price-to-earnings ratios (P/Es) computed with trailing 12-month earnings (Etrailing). He and his assistant, Deepa Kamini, are reviewing the results of the ordinary least squares time series regression shown in Exhibit 1.

Exhibit 1
Results of Regression of P/E on Lagged P/E (P/Et = b0 + b1P/Et–1 + εt)
# | Coefficient | Standard Error | t | Significance of t
Constant (b0) | 0.143 | 0.153 | 0.935 | 0.176
Lagged P/E (b1) | 0.991 | 0.003 | 292.958 | 0
# R2 | Standard Error of the Estimate | Durbin–Watson | F | Significance of F
0.075 | 1.48978 | 2.094 | 130.066 | 0

DeMolay states: "This regression is a special case of a first-order autoregressive [AR(1)] model in which the value for b0 is close to zero and the value of b1 is close to 1. These values suggest that the time series is a random walk."

Kamini replies: "I'm convinced the P/E series based on trailing earnings truly is a random walk."

Kamini and DeMolay next examine the behavior of P/Es calculated using forward 12-month earnings (Eforward). Kamini estimates another AR(1) model but uses the forward P/E values this time. She denotes the errors from this second regression as ηt. She states: "The presence of first-order autoregressive conditional heteroskedasticity [ARCH(1)] errors in this regression is highly likely given the results reported in Exhibit 2."

Exhibit 2
Results of Regression of Squared Residuals, ηt², on Lagged Squared Residuals, ηt−1² (ηt² = c0 + c1ηt−1² + ut)
# | Coefficient | Standard Error | t | Significance of t
Constant (c0) | 0.339 | 0.039 | 8.768 | 0
Lag 1 (c1) | 0.273 | 0.024 | 11.405 | 0
# R2 | Standard Error of the Estimate | Durbin–Watson | F | Significance of F
0.075 | 1.48978 | 2.094 | 130.066 | 0

After further discussion, DeMolay proposes that he and Kamini incorporate more variables into the analysis. He suggests they use a variation of the Fed model, in which the earnings-to-price ratio (E/P) is regressed on long-term interest rates.

DeMolay cautions Kamini: "Remember that when we analyze two time series in regression analysis, we need to ensure that:

Condition 1: neither the dependent variable series nor the independent variable series has a unit root, or
Condition 2: both series have a unit root and are not cointegrated.

Unless Condition 1 or Condition 2 holds, we cannot rely on the validity of the estimated regression coefficients.\""""),
 questions=[
 Q(68, "DeMolay's statement that the coefficients depicted in Exhibit 1 are consistent with a random walk is most likely:", ["correct.", "incorrect because b1 should be close to 0.", "incorrect because b0 should be close to 1."], 'A',
   "A is correct. A random walk estimated as an AR(1) has an intercept near zero and a slope on the first lag near 1."),
 Q(69, "If Kamini is correct regarding the trailing P/E time series, the best forecast of next period's trailing P/E is most likely to be the:", ["current period's trailing P/E.", "average P/E of the time series.", "forecast derived from applying the AR(1) model depicted in Exhibit 1 to the data."], 'A',
   "A is correct. For a random walk the best forecast of xt made in t − 1 is xt−1. A random walk has no mean-reverting level, and it is not covariance stationary, so an AR(1) model is not appropriate."),
 Q(70, "The results depicted in Exhibit 2 are best described as consistent with a regression that has ARCH(1) errors because:", ["c1 is significantly different from 0.", "c1 is significantly different from 1.", "c0 is significantly different from 0."], 'A',
   "A is correct. ARCH(1) is tested by regressing the squared residuals on one lag of the squared residuals; if the slope c1 is significantly different from 0, the series is ARCH(1)."),
 Q(71, "Based on the results depicted in Exhibit 2, DeMolay and Kamini should most likely model the forward P/E data using a(n):", ["AR(1) model.", "random walk model.", "generalized least squares model."], 'C',
   "C is correct. If ARCH exists, the standard errors of the regression parameters are not correct, so generalized least squares (or another method that corrects for heteroskedasticity) is needed."),
 Q(72, "DeMolay's caution given in Condition 1 is best described as:", ["correct.", "incorrect because only the independent variable series needs to be tested for the absence of a unit root.", "incorrect because only the dependent variable series needs to be tested for the absence of a unit root."], 'A',
   "A is correct. Both series must be tested for a unit root; if neither has one, linear regression can be used safely. If only one has a unit root, regression is not valid."),
 Q(73, "DeMolay's caution given in Condition 2 is best described as:", ["correct.", "incorrect because the regression results are valid whether cointegration exists or does not exist.", "incorrect because if both series have unit roots, they must exhibit cointegration for the results of the regression to be valid."], 'C',
   "C is correct. If both series have a unit root, the regression results are consistent only if the two series are cointegrated, so Condition 2 (not cointegrated) is wrong."),
 ]))
