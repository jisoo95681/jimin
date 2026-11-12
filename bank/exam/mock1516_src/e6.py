from lib15 import *
# ===== Quant (M15): Reeve / Corrin Investment Management, Harlow Tools (trend models, AR(1), seasonality) [from ts-rudall] =====
a0,a1,m0=0.0380,0.7640,0.12
s1=a0+a1*m0; two=a0+a1*s1; A=(a0+m0)*a1; C=a0+a0+a1*m0
assert (round(two*100,2),round(A*100,2),round(C*100,2))==(13.71,12.07,16.77),(two,A,C)
i0,l1,l4,e1,e4=0.1980,0.3720,0.5430,2.90,2.45
f=i0+l1*e1+l4*e4; fA=l1*e1+l4*e4; fC=i0+l1*e4+l4*e1
assert (round(f,2),round(fA,2),round(fC,2))==(2.61,2.41,2.68),(f,fA,fC)
body=f"""Oliver Reeve, an analyst with Corrin Investment Management, is tasked with forecasting future sales for Harlow Tools, a publicly traded retail business specializing in home improvements. Using 25 quarters of sales data ending with the most recent quarter-end date, Reeve estimates a log-linear trend model and creates a forecast of sales for the next four quarters to discuss with his supervisor, Gail Pearce.

Pearce reviews Reeve's forecast and states:

Statement 1) A statistically meaningful low Durbin-Watson statistic indicates that the errors in the model may exhibit positive serial correlation.
Statement 2) If Harlow Tools' sales are growing at a constant rate, a linear trend model may be a better fit than a log-linear model.
Statement 3) As long as the R2 is high, we can be comfortable that the model is a good fit for our analysis.

Next, Pearce asks Reeve to forecast Harlow Tools' net margin (net income/sales) for the next four quarters. Reeve agrees and explains that he will use a first-order autoregressive model since each quarter's net margin appears related to the prior quarter's net margin. Reeve also mentions that he will use an intercept of 0.0380 and a coefficient on the first lag of the net margin of 0.7640.

When applying the first-order autoregressive model, Reeve wants to conduct some tests to ensure the model is producing meaningful results. In order to do this, Reeve comments that he must test whether the:

Test 1: residual autocorrelations differ significantly from 0.
Test 2: intercept and coefficient on the first lag differ significantly from 0.
Test 3: Durbin-Watson statistic differs significantly from 2.

In reviewing the quarterly net margin forecast, Pearce points out that the autocorrelation of the residuals for the 4th lag is significantly different than 0, while lags 1 through 3 are not significantly different than 0, indicating an issue with seasonality. Pearce asks Reeve to build a first-order autoregressive model to forecast earnings per share for the next four quarters, but to account for seasonality in this model.

Reeve reviews the company's earnings per share data and determines that he can create a first-order autoregressive model to account for the seasonality using the information in Exhibit 1.

Exhibit 1: Seasonal Autoregressive Model Inputs
# Item | Value
Intercept | 0.1980
1 Quarter Lag Coefficient | 0.3720
4 Quarter Lag Coefficient | 0.5430
Earnings Per Share Last Quarter | $2.90
Earnings Per Share 4 Quarters Prior | $2.45"""
add('M15','Quantitative Methods',body,[
 q("Which of Pearce's statements relating to Reeve's forecasted future sales for Harlow Tools is most likely correct?",["Statement 1","Statement 2","Statement 3"],0,
  ["Correct. A statistically significant low Durbin-Watson statistic indicates that the errors may have positive serial correlation.","Incorrect. A constant RATE of growth fits a log-linear model; a constant AMOUNT of growth fits a linear trend model.","Incorrect. A high R2 does not make the model a good fit when the errors are serially correlated."],
  ["A statistically meaningful low Durbin-Watson statistic","most likely correct"],"Low DW → positive serial correlation; constant growth rate → log-linear; high R2 alone says nothing about serial correlation.",fixed=False),
 q("If Harlow Tools' net margin is 12% this quarter, Reeve's first-order autoregressive model will predict the net margin two quarters from now to be closest to:",["12.07%.","13.71%.","16.77%."],1,
  ["This adds the margin to the intercept before multiplying: (0.0380 + 0.12) × 0.7640 = 12.07%.","Apply the model twice: 0.0380 + 0.7640 × 0.12 = 12.97%, then 0.0380 + 0.7640 × 0.1297 = 13.71%.","This adds the intercept twice: 0.0380 + 0.0380 + 0.7640 × 0.12 = 16.77%."],
  ["an intercept of 0.0380 and a coefficient on the first lag of the net margin of 0.7640","net margin is 12% this quarter","two quarters from now"],"Multi-step AR(1) forecast: iterate x(t+1) = b0 + b1 × x(t) using the previous forecast each time.",fixed=True),
 q("Of the three tests Reeve indicates he would like to conduct for the first-order autoregressive model, which is most likely appropriate to test for serial correlation in the model?",["Test 2","Test 3","Test 1"],2,
  ["Incorrect. This tests the coefficients, not the residuals.","Incorrect. The Durbin-Watson statistic cannot be used when a lagged dependent variable is an independent variable.","Correct. Serial correlation in an autoregressive model is tested through the residual autocorrelations (t-tests of each lag)."],
  ["residual autocorrelations differ significantly from 0","Durbin-Watson statistic differs significantly from 2"],"AR model (lagged Y as regressor): test residual autocorrelations; DW is not valid.",fixed=False),
 q("Once adjusted for seasonality, based on data in Exhibit 1, the forecasted earnings per share for the current quarter is closest to:",["$2.41.","$2.61.","$2.68."],1,
  ["This leaves out the intercept: 0.3720 × 2.90 + 0.5430 × 2.45 = $2.41.","0.1980 + 0.3720 × 2.90 + 0.5430 × 2.45 = $2.61.","This matches the coefficients with the wrong lags: 0.1980 + 0.3720 × 2.45 + 0.5430 × 2.90 = $2.68."],
  ["@row:1 Quarter Lag Coefficient","@row:4 Quarter Lag Coefficient","@row:Earnings Per Share Last Quarter","@row:Earnings Per Share 4 Quarters Prior"],"Seasonal AR(1): EPS(t) = b0 + b1 × EPS(t−1) + b4 × EPS(t−4); match each coefficient with its own lag.",fixed=True),
])
