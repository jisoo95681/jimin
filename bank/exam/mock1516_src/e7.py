from lib15 import *
# ===== Quant (M16): Brandt / ClearView Electronics and three transportation stocks (residual autocorrelation, ARCH, cointegration, trend models) [from ts-busse] =====
n=40; se=1/n**0.5
ac=[0.0178,-0.1021,-0.0866,0.6613]; t=[round(a/0.1581,4) for a in ac]
assert round(se,4)==0.1581 and t==[0.1126,-0.6458,-0.5478,4.1828],t
assert round(0.0361/0.0105,4)==3.4381 and round(-0.3892/0.1371,4)==-2.8388
body="""Leon Brandt is an analyst in the research department of a large hedge fund. He is asked to develop a model to predict future quarterly sales for ClearView Electronics, a major electronics retailer. He begins by running the following regression:

Regression 1: ln Salest − ln Salest−1 = b0 + b1(ln Salest−1 − ln Salest−2) + εt.

Exhibit 1 presents the results of this regression.

Exhibit 1: Log Differenced Sales AR(1) Model: ClearView Electronics, Last 10 Years of Quarterly Sales
Regression Statistics
# Item | Value
R2 | 0.1864
Standard error | 0.0583
Observations | 40
Durbin–Watson | 1.9420
# Item | Coefficient | Standard Error | t-Statistic
Intercept | 0.0361 | 0.0105 | 3.4381
ln Salest−1 − ln Salest−2 | −0.3892 | 0.1371 | −2.8388
Autocorrelations of the Residual
# Lag | Autocorrelation | Standard Error | t-Statistic
1 | 0.0178 | 0.1581 | 0.1126
2 | −0.1021 | 0.1581 | −0.6458
3 | −0.0866 | 0.1581 | −0.5478
4 | 0.6613 | 0.1581 | 4.1828
Note: The critical t-statistic at the 5% significance level is 2.03.

After completing his work on ClearView, Brandt is asked to analyze the relationship of oil prices and the stock prices of three transportation companies. His firm wants to know whether the stock prices can be predicted by the price of oil. Exhibit 2 shows selected information from the results of his analysis.

Exhibit 2: Analysis Summary of Stock Prices for Three Transportation Stocks and the Price of Oil
# Item | Unit Root? | Linear or Exponential Trend? | Serial Correlation of Residuals in Trend Model? | ARCH(1)? | Comments
Company 1 | No | Exponential | Yes | No | Not cointegrated with oil price
Company 2 | Yes | Exponential | Yes | Yes | Not cointegrated with oil price
Company 3 | Yes | Linear | Yes | No | Cointegrated with oil price
Oil Price | Yes | | | |

To assess the relationship between oil prices and stock prices, Brandt runs three regressions using the time series of each company's stock prices as the dependent variable and the time series of oil prices as the independent variable."""
add('M16','Quantitative Methods',body,[
 q("Based on the regression output in Exhibit 1, what should lead Brandt to conclude that the Regression 1 equation is not correctly specified?",["The Durbin–Watson statistic","The t-statistic for the slope coefficient","The t-statistics for the autocorrelations of the residual"],2,
  ["Incorrect. The Durbin–Watson statistic is not valid when a lagged dependent variable is a regressor (and 1.9420 is near 2 anyway).","Incorrect. A significant slope (|t| = 2.84 > 2.03) shows the lag has explanatory power; it does not signal misspecification.","Correct. The 4th residual autocorrelation is 0.6613 with t = 4.1828, above the critical 2.03: the null of no autocorrelation is rejected, which signals seasonality and a misspecified model."],
  ["@row:4","Autocorrelations of the Residual","correctly specified"],"AR model: check the t-statistics of the residual autocorrelations; any lag above the critical t → misspecified (add that lag, e.g. lag 4 for seasonality).",fixed=False),
 q("Based on Exhibit 2, Brandt should conclude that the variance of the error terms for Company 2:",["is constant.","can be predicted.","is homoskedastic."],1,
  ["Incorrect. Company 2 has ARCH(1) errors, so the variance is not constant.","Correct. With ARCH(1) the variance of the error in one period depends on the previous period's error, so the variance of the error in t + 1 can be predicted in period t.","Incorrect. ARCH(1) means heteroskedastic errors, not homoskedastic."],
  ["@row:Company 2"],"ARCH(1) = Yes → conditional heteroskedasticity → error variance depends on the previous period and is predictable (use GARCH).",fixed=False),
 q("Based on Exhibit 2, for which company would the regression of stock prices on oil prices be expected to yield valid coefficients that could be used to estimate the long-term relationship between stock price and oil price?",["Company 1","Company 2","Company 3"],2,
  ["Incorrect. Company 1 has no unit root, so the pair is not both unit-root series and is not cointegrated.","Incorrect. Both series have a unit root but they are not cointegrated, so the regression is spurious.","Correct. Company 3 and the oil price both have a unit root and are cointegrated: the regression error is covariance stationary, so the coefficients and standard errors are valid."],
  ["@row:Company 3","@row:Oil Price"],"Two unit-root series: regression valid only if cointegrated; not cointegrated → spurious regression.",fixed=False),
 q("Based on Exhibit 2, which single time-series model would most likely be appropriate for Brandt to use in predicting the future stock price of Company 1?",["Log-linear trend model","First-differenced AR(2) model","First-differenced log AR(1) model"],2,
  ["Incorrect. The trend-model residuals are serially correlated, so a trend model alone is not appropriate.","Incorrect. The series has an exponential trend, so the log must be taken before differencing.","Correct. Company 1 has an exponential trend: take the natural log and first-difference it. The trend-model residuals are serially correlated, so an autoregressive model is needed."],
  ["@row:Company 1"],"Exponential trend + serial correlation in trend-model residuals → log, first difference, then an AR model.",fixed=False),
])
