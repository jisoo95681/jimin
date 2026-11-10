# 10 Nov: the essay (free-response) problems of the Module 5 Time-Series quiz turned into multiple choice by the assistant.
# Graphs cannot be copied, so each plot is described in words (from the portal's own text description of the graph) and the key points are given.
# Every question keeps the idea and the answer of the original essay; options and wording are new.
import sys
sys.path.insert(0, '/home/user/jimin/bank/exam')
from nov10_ts_real import tab, Q
SRC = "10 Nov Module 5 Time-Series Analysis quiz: essay problems rewritten as multiple choice by the assistant"
V = []

V.append(dict(id='ts-mcq-vehicles', source=SRC + " (essays Q8, 12, 16, 17, 36, 37)", readings=[2], created=True,
 title="Time series · Lightweight vehicle sales: constant growth, unit root and differencing, residual autocorrelations, next model step",
 body=tab("""You have been assigned to analyze automobile manufacturers, and as a first step in your analysis, you model monthly sales of lightweight vehicles to determine sales growth in that part of the industry. The data are monthly, January 1992 to December 2000 (108 observations).

Exhibit 1
Description of the plot of lightweight vehicle sales (annualized millions of units): sales rise unevenly over the nine years, from about 12.5 in 1992 to about 18 in 2000, with zigzags along the way. The pattern suggests that the growth rate of monthly sales is relatively constant.

Exhibit 2
Description of the plot of ln(Salest): the natural log of sales trends steadily upward over time, from about 2.5 in 1992 to about 2.9 in 2000, with small declines (for example around 1995).

Exhibit 3
Description of the plot of the first difference of the log of sales, Δln(Salest) = ln(Salest) − ln(Salest−1): the series moves back and forth around zero (between about −0.20 and +0.15), with no visible trend and with roughly the same size of swings throughout the period.

An AR(1) model Δln(Salest) = b0 + b1Δln(Salest−1) + εt is estimated on the differenced series. Exhibit 4 gives the autocorrelations of its residuals.

Exhibit 4
Autocorrelations of the Residuals of the AR(1) Model
# Lag | Autocorrelation | Standard Error | t-Statistic
1 | 0.9358 | 0.0962 | 9.7247
2 | 0.8565 | 0.0962 | 8.9005
3 | 0.8083 | 0.0962 | 8.4001
4 | 0.7723 | 0.0962 | 8.0257
5 | 0.7476 | 0.0962 | 7.7696
6 | 0.7326 | 0.0962 | 7.6137
7 | 0.6941 | 0.0962 | 7.2138
8 | 0.6353 | 0.0962 | 6.6025
9 | 0.5867 | 0.0962 | 6.0968
10 | 0.5378 | 0.0962 | 5.5892
11 | 0.4745 | 0.0962 | 4.9315
12 | 0.4217 | 0.0962 | 4.3827"""),
 questions=[
 Q(8, "Using Exhibit 1, the simplest time-series model for Salest that is consistent with a relatively constant growth rate is:", ["Salest = b0 + b1t + εt.", "ln(Salest) = b0 + b1t + εt.", "Salest = b0 + b1Salest−1 + εt."], 'B',
   "B is correct. A log-linear trend model, ln(Salest) = b0 + b1t + εt, captures growth at a constant rate. A linear trend (A) is for constant growth in amount. The regression assumptions would still have to be checked before accepting the model."),
 Q(36, "Using Exhibit 2, the specification ln(Salest) = b0 + b1 ln(Salest−1) + εt is most likely:", ["appropriate, because taking logs removes any trend.", "not appropriate, because a series that trends upward over time often has a unit root and is not covariance stationary.", "appropriate, because an AR(1) model can always capture a trend."], 'B',
   "B is correct. A series that trends upward or downward often has a unit root and is not covariance stationary, so an AR(1) regression on the undifferenced series is probably not correct. In practice the regression statistics should confirm the visual impression."),
 Q(37, "An appropriate transformation of the ln(Salest) series is to:", ["take the first difference: Δln(Salest) = ln(Salest) − ln(Salest−1).", "take the natural log of the series a second time.", "add a seasonal lag, ln(Salest−12), to the equation."], 'A',
   "A is correct. The most common way to turn a series with a unit root into a covariance-stationary series is to difference it."),
 Q(12, "Based on Exhibit 3, the differenced series Δln(Salest) is most likely:", ["covariance stationary, because it fluctuates around a constant mean with constant volatility.", "not covariance stationary, because its mean trends upward.", "a random walk, because it changes every month."], 'A',
   "A is correct. The plot fluctuates around a constant mean and its volatility seems constant throughout the period, so differencing appears to have made the series covariance stationary."),
 Q(16, "Using Exhibit 4, the AR(1) specification is most likely:", ["appropriate, because all the autocorrelations are positive.", "inappropriate, because the residual autocorrelations are significantly different from zero (every t-statistic is far above the critical value).", "impossible to assess without a Durbin–Watson statistic."], 'B',
   "B is correct. In a correctly specified model the residuals must be serially uncorrelated. With 108 observations the standard error is 1/√108 = 0.0962, and each t-statistic is significant even at the 0.01 level, so the model specification must be changed. A Durbin–Watson statistic cannot be used for an autoregressive model."),
 Q(17, "Because the AR(1) residuals are serially correlated, the best next step is to:", ["estimate an AR(2) model and test its residuals for serial correlation, then test for seasonality and ARCH once the residuals are uncorrelated.", "test for ARCH immediately and ignore the serial correlation.", "add a seasonal lag at once and stop."], 'A',
   "A is correct. Keep adding lags (AR(2), AR(3), ...) until the residuals are serially uncorrelated; only then test for seasonality and ARCH behavior."),
 ]))

V.append(dict(id='ts-mcq-uer', source=SRC + " (essays Q9, 10, 11, 13, 26)", readings=[2], created=True,
 title="Time series · Civilian unemployment rate: linear trend forecast, Durbin–Watson, graph of the errors, differencing, length of the data",
 body=tab("""The civilian unemployment rate (UER) is an important component of many economic models. Exhibit 1 gives regression statistics from estimating a linear trend model of the unemployment rate, UERt = b0 + b1t + εt, with monthly observations from January 2013 to August 2019.

Exhibit 1
Estimating a Linear Trend in the Civilian Unemployment Rate
Regression Statistics
R2 | 0.9316 |
Standard error | 0.3227 |
Observations | 80 |
Durbin–Watson | 0.1878 |
# | Coefficient | Standard Error | t-Statistic
Intercept | 7.2237 | 0.0728 | 99.1704
Trend | −0.0510 | 0.0016 | −32.6136

Note: For the Durbin–Watson test with one independent variable and 80 observations, the lower critical value at the 5% significance level is dl = 1.55.

Exhibit 2
Description of the plot of the actual unemployment rate (UER) and the rate predicted by the linear trend (PRED), 2013 to 2019: the actual rate falls from about 8 in 2013 to about 5 in 2016 and about 4 in 2019, while the predicted straight line falls from about 7 to about 3. The actual rate is above the line at first, below the line from 2014 until 2017, and above the line again after 2017.

Exhibit 3
Description of the plot of the first difference of the unemployment rate, ΔUERt = UERt − UERt−1, January 2013 to August 2019: the changes fluctuate around zero (between about −0.5 and +0.2) with no trend, and the size of the swings looks similar through the period."""),
 questions=[
 Q(9, "Using Exhibit 1, the model's prediction of the unemployment rate for July 2013 (the data begin in January 2013) is closest to:", ["6.82%.", "6.87%.", "7.17%."], 'B',
   "B is correct. July 2013 is period 7: UER7 = 7.2237 − 0.0510 × 7 = 6.8667, about 6.9%. A uses t = 8 (August); C uses t = 1."),
 Q(10, "The Durbin–Watson statistic in Exhibit 1 most likely indicates that:", ["there is no serial correlation, because the statistic is positive.", "positive serial correlation is present, and the standard errors are biased downward so t-tests on the coefficients cannot be relied on.", "positive serial correlation is present, but the coefficient estimates and t-statistics remain fully valid."], 'B',
   "B is correct. Under the null of no positive serial correlation the statistic is about 2.0. 0.1878 is clearly below dl = 1.55, so the null is rejected. Serial correlation violates a regression assumption and biases the standard errors downward, so hypothesis tests on the coefficients are not valid."),
 Q(11, "Based on Exhibit 2, the linear trend model is:", ["appropriate, because the errors are randomly distributed around the regression line.", "not appropriate, because the forecast errors are persistent, which suggests positive serial correlation.", "appropriate, because the R² is high."], 'B',
   "B is correct. In a well-specified model the forecast errors are randomly distributed around the line with constant variance. Here the errors stay above the line, then below, then above again, so they are persistent: positively serially correlated. A high R² does not fix that."),
 Q(13, "Based on Exhibit 3, differencing the unemployment rate has most likely made the new series ΔUERt:", ["covariance stationary, because it fluctuates around a constant mean with constant volatility.", "non-stationary, because the changes are sometimes negative.", "a unit root process, because it changes every month."], 'A',
   "A is correct. The plot of ΔUERt fluctuates around a constant mean and its volatility appears constant, so the differenced series is judged to be covariance stationary."),
 Q(26, "For estimating a predictive equation, a drawback of using 30 years of unemployment data instead of only 5 years is that:", ["the longer the sample, the higher the risk that the series has more than one regime, which can make even the differenced series nonstationary.", "a longer sample always lowers the number of observations in the regression.", "the Durbin–Watson statistic can no longer be calculated."], 'A',
   "A is correct. As we go further back, the series is more likely to have more than one regime (true model), and fitting one model to all of it would be incorrect. (If a series is known to be stationary, a longer sample is generally desirable.)"),
 ]))

V.append(dict(id='ts-mcq-duer', source=SRC + " (essays Q14, 15, 18, 19, 20, 21, 25, 44)", readings=[2], created=True,
 title="Time series · Changes in the unemployment rate: AR(1) steps, Durbin–Watson, mean reversion, chain rule forecast, long horizon, ARCH test",
 body=tab("""The change in the civilian unemployment rate, ΔUERt, appears to be covariance stationary, and the following AR(1) model is estimated on it with monthly data from February 2013 to August 2019.

Exhibit 1
Estimating an AR(1) Model of Changes in the Civilian Unemployment Rate
Regression Statistics
R2 | 0.0546 |
Standard error | 0.1309 |
Observations | 79 |
Durbin–Watson | 2.0756 |
# | Coefficient | Standard Error | t-Statistic
Intercept | −0.0668 | 0.0158 | −4.2278
ΔUERt–1 | −0.2320 | 0.1100 | −2.191

The estimated model is ΔUERt = −0.0668 − 0.2320ΔUERt−1. The most recent change in the unemployment rate is 0.0300. Assume that changes in the unemployment rate are covariance stationary and that this AR(1) model describes them well."""),
 questions=[
 Q(14, "To determine the appropriate autoregressive specification for ΔUERt, the analyst should:", ["start with an AR(1) model, test the residuals for serial correlation, and add lags only until the residuals are uncorrelated.", "start with a high-order AR model and drop lags until the Durbin–Watson statistic equals 2.", "use the first estimated AR(1) model without testing, because the series is stationary."], 'A',
   "A is correct. Estimate an AR(1) and test whether its residuals have significant serial correlation. If they do, try AR(2), and so on, until the errors of the final AR(p) are serially uncorrelated."),
 Q(15, "The Durbin–Watson statistic of 2.0756 in Exhibit 1 should be interpreted as:", ["evidence of no serial correlation in the errors, because it is close to 2.", "not valid for this regression, because the model has a lagged dependent variable; serial correlation must be tested with the residual autocorrelations.", "evidence of ARCH, because it is above 2."], 'B',
   "B is correct. The Durbin–Watson statistic cannot be used for a regression that has a lagged value of the dependent variable as an explanatory variable. Examine the autocorrelations of the residuals instead."),
 Q(18, "The mean-reverting level to which changes in the unemployment rate converge in this model is closest to:", ["−0.0542.", "−0.0870.", "−0.0668."], 'A',
   "A is correct. At the mean-reverting level ΔUERt = ΔUERt−1, so x = b0/(1 − b1) = −0.0668/(1 + 0.2320) = −0.0542. B uses (1 − 0.2320) in the denominator; C is just the intercept."),
 Q(19, "Using the model and the most recent change of 0.0300, the best prediction of the next change is closest to:", ["−0.0598.", "−0.0738.", "−0.2988."], 'B',
   "B is correct. −0.0668 − 0.2320 × 0.0300 = −0.0738. A uses a plus sign on the slope term; C adds the intercept and slope without multiplying by 0.03."),
 Q(20, "The prediction of the change following the next change (two periods ahead) is closest to:", ["−0.0738.", "−0.0497.", "−0.0598."], 'B',
   "B is correct. Chain rule: use the one-step forecast (−0.0738), not an actual value, as the input: −0.0668 − 0.2320 × (−0.0738) = −0.0497. A is just the one-step forecast; C comes from a plus sign on the slope term."),
 Q(21, "The two-period forecast of −0.0497 is close to the mean-reverting level of −0.0542 because:", ["a covariance-stationary series moves toward its mean-reverting level, although it may need many periods to reach it.", "the residuals of the model are zero in every period.", "the Durbin–Watson statistic is close to 2."], 'A',
   "A is correct. A stationary time series tends toward its equilibrium (mean-reverting) level, which can take many periods."),
 Q(25, "A drawback of using this AR(1) model to predict changes in the unemployment rate 12 months or more ahead, compared with 1 month ahead, is that:", ["long-range forecasts can be nonsensical, for example predicting a falling unemployment rate for ever, so the model suits short-term forecasting.", "the longer forecast has a smaller standard error.", "the intercept must be set to zero for long horizons."], 'A',
   "A is correct. Predictions too far ahead can be implausible: unemployment cannot fall below 0% and probably not below frictional unemployment. Such models are designed for short-term forecasting."),
 Q(44, "To test for autoregressive conditional heteroskedasticity (ARCH) in the residuals of this AR(1) regression, the analyst should:", ["regress the squared residuals on a constant and the lagged squared residuals, and test whether the slope is significantly different from zero.", "regress the residuals on their own lag and test the intercept.", "calculate the Durbin–Watson statistic and compare it with 2."], 'A',
   "A is correct. Save the residuals, square them, regress the squared residuals on their lag (ε²t = a0 + a1ε²t−1 + ut) and test whether a1 differs from 0."),
 ]))

V.append(dict(id='ts-mcq-cisco', source=SRC + " (essays Q22, 23, 24, 45, 46, 47)", readings=[2], created=True,
 title="Time series · Cisco quarterly sales: trend, mean reversion, chain-rule forecasts of sales, RMSE out of sample",
 body=tab("""Part 1. An analyst studies the quarterly sales of Cisco Systems from the third quarter of 1991 to the fourth quarter of 2000.

Exhibit 1
Description of the plot of quarterly sales (millions of dollars): sales rise slowly at first and then faster and faster, from close to zero in 1991 to about 2,000 in 1998, 4,000 in 2000 and about 6,000 by the end of the period. The rise looks like steady exponential growth.

Exhibit 2 gives the regression statistics from estimating the model Δln(Salest) = b0 + b1Δln(Salest−1) + εt on the data of Exhibit 1.

Exhibit 2
Change in the Natural Log of Sales for Cisco, Quarterly Observations, 3Q 1991–4Q 2000
Regression Statistics
R2 | 0.2899 |
Standard error | 0.0408 |
Observations | 38 |
Durbin–Watson | 1.5707 |
# | Coefficient | Standard Error | t-Statistic
Intercept | 0.0661 | 0.0175 | 3.7840
Δln(Salest–1) | 0.4698 | 0.1225 | 3.8339

Part 2. A second model, estimated on quarterly data from 1Q 2001 to 4Q 2018, is Δln(Salest) = 0.0068 + 0.2633Δln(Salest−1). The observations after the fourth quarter of 2018 are out of sample. Exhibit 3 shows the actual sales of Cisco for 2019 and Exhibit 4 compares the actual change in the log of sales with the forecast.

Exhibit 3
# Date | Actual Sales ($ millions) | Log of Sales | Change in Log of Sales
1Q 2019 | 13,072 | 9.4782 | 0.0176
2Q 2019 | 12,446 | 9.4292 | −0.0491
3Q 2019 | 12,958 | 9.4695 | 0.0403
4Q 2019 | 13,428 | 9.5051 | 0.0356

Exhibit 4
# Date | Actual Change in Log of Sales | Forecast Change in Log of Sales
1Q 2019 | 0.0176 | 0.0147
2Q 2019 | −0.0491 | 0.0107
3Q 2019 | 0.0403 | 0.0096
4Q 2019 | 0.0356 | 0.0093"""),
 questions=[
 Q(45, "Based on Exhibit 1, the salient feature of the quarterly sales series is:", ["a steady upward trend of growth that looks exponential, which suggests taking the natural log and differencing the data.", "a repeating annual cycle, which calls for a seasonal lag.", "a series that fluctuates around a constant level, which is already covariance stationary."], 'A',
   "A is correct. Steady exponential growth calls for the natural-log transformation and then first differencing."),
 Q(46, "To determine whether the AR(1) specification in Exhibit 2 is correct, the analyst should first:", ["test whether the residuals are serially uncorrelated; if they are not, try AR(2) and so on, then look for seasonality and finally ARCH.", "test for ARCH first and, if it is absent, conclude that the model is correct.", "check that R² is above 50%."], 'A',
   "A is correct. Check the residual autocorrelations; if serially correlated, try AR(2), and continue until the residuals are uncorrelated. Then look for seasonality (add a seasonal lag if present) and test for ARCH. If ARCH is absent the model is correctly specified."),
 Q(47, "Assuming the model in Exhibit 2 is correctly specified, the long-run change in the log of sales toward which the series will converge is closest to:", ["0.0450.", "0.1247.", "0.1407."], 'B',
   "B is correct. If the model is correct, Δln(Salest) is covariance stationary and tends to b0/(1 − b1) = 0.0661/(1 − 0.4698) = 0.1247. A uses (1 + b1); C is b0/b1."),
 Q(22, "Using the Part 2 model and Exhibit 3, the forecast of first-quarter 2020 sales is closest to:", ["$13,520 million.", "$13,647 million.", "$13,915 million."], 'B',
   "B is correct. Δln(Salest) = 0.0068 + 0.2633 × 0.0356 = 0.0162, so the log of sales = 9.5051 + 0.0162 = 9.5213 and sales = e^9.5213 = 13,647. A uses only the intercept (0.0068); C repeats last quarter's change of 0.0356."),
 Q(122, "Using the same model, the forecast of second-quarter 2020 sales is closest to:", ["$13,612 million.", "$13,800 million.", "$14,419 million."], 'B',
   "B is correct. Beyond the sample, use the forecast (0.0162), not an actual value: Δln(Salest) = 0.0068 + 0.2633 × 0.0162 = 0.0111, so the log of sales = 9.5213 + 0.0111 = 9.5324 and sales = e^9.5324 = 13,800."),
 Q(23, "The root mean squared error (RMSE) of the out-of-sample forecasts in Exhibit 4 is closest to:", ["0.13%.", "3.6%.", "5.2%."], 'B',
   "B is correct. Errors (actual − forecast): 0.0029, −0.0598, 0.0307, 0.0263. Squared errors sum to 0.0052; the mean is 0.0013; the square root is 0.036, i.e. 3.6%. A stops at the mean squared error; C uses the sum of squared errors."),
 Q(24, "Another model has an out-of-sample RMSE of 2%. Compared with the model in Part 2 (RMSE 3.6%), its forecasting accuracy is:", ["greater, because a lower RMSE means more accurate forecasts.", "lower, because a lower RMSE means a worse fit.", "the same, because RMSE cannot be compared across models."], 'A',
   "A is correct. The lower the out-of-sample RMSE, the more accurate the forecasts, so the 2% model is the better forecaster."),
 ]))

V.append(dict(id='ts-mcq-season', source=SRC + " (essays Q38, 39, 40, 41, 42, 43)", readings=[2], created=True,
 title="Time series · Seasonality (Avon, Home Depot, Johnson & Johnson) and a regression of one T-bill yield on another",
 body=tab("""Part 1. Quarterly sales of Avon Products from 1Q 1992 to 2Q 2002.
Exhibit 1
Description of the plot of Avon quarterly sales (millions of dollars): sales rise from about 800 in 1992 to about 1,700 in 2001, but the line goes up and down in the same inverted-V shape every year, with a peak in the same quarter of each year.

Part 2. Home Depot. Exhibit 2 shows the autocorrelations of the residuals from an AR(1) model fit to the changes in the gross profit margin, ΔGPMt = 0.0006 − 0.3330ΔGPMt–1 + εt, 1Q 1992–4Q 2001 (40 observations). Exhibit 3 shows the output after the specification was changed.

Exhibit 2
Autocorrelations of the Residuals
# Lag | Autocorrelation
1 | −0.1106
2 | −0.5981
3 | −0.1525
4 | 0.8496
5 | −0.1099

Exhibit 3
Change in Gross Profit Margin for Home Depot, 1Q 1992–4Q 2001
Regression Statistics
R2 | 0.9155 |
Standard error | 0.0057 |
Observations | 40 |
Durbin–Watson | 2.6464 |
# | Coefficient | Standard Error | t-Statistic
Intercept | −0.0001 | 0.0009 | −0.0610
ΔGPMt−1 | −0.0608 | 0.0687 | −0.8850
ΔGPMt−4 | 0.8720 | 0.0678 | 12.8683

Part 3. Johnson & Johnson. Because of seasonal autocorrelation, an AR model with a seasonal lag is estimated on quarterly data: (ln Salest − ln Salest−1) = b0 + b1(ln Salest−1 − ln Salest−2) + b2(ln Salest−4 − ln Salest−5) + εt.

Exhibit 4
Log Differenced Sales: AR(1) Model with Seasonal Lag, Johnson & Johnson, Quarterly Observations, January 1985–December 2001
Regression Statistics
R2 | 0.4220 |
Standard error | 0.0318 |
Observations | 68 |
Durbin–Watson | 1.8784 |
# | Coefficient | Standard Error | t-Statistic
Intercept | 0.0121 | 0.0053 | 2.3055
Lag 1 | −0.0839 | 0.0958 | −0.8757
Lag 4 | 0.6292 | 0.0958 | 6.5693
Autocorrelations of the Residual
# Lag | Autocorrelation | Standard Error | t-Statistic
1 | 0.0572 | 0.1213 | 0.4720
2 | −0.0700 | 0.1213 | −0.5771
3 | 0.0065 | 0.1213 | −0.0532
4 | −0.0368 | 0.1213 | −0.3033
Note: the critical t-statistic at the 5% significance level is about 2.0.

Part 4. An analyst wants to predict the annualized return of the five-year T-bill from the annualized return of the three-month T-bill, using monthly observations from January 1993 to December 2002.

Exhibit 5
Regression with the Three-Month T-Bill as the Independent Variable and the Five-Year T-Bill as the Dependent Variable
Regression Statistics
R2 | 0.5829 |
Standard error | 0.6598 |
Observations | 120 |
Durbin–Watson | 0.1130 |
# | Coefficient | Standard Error | t-Statistic
Intercept | 3.0530 | 0.2060 | 14.8181
Three-month | 0.5722 | 0.0446 | 12.8408"""),
 questions=[
 Q(39, "The salient features of the Avon sales series in Exhibit 1 are:", ["an upward trend and a clear seasonal pattern.", "an upward trend only.", "no trend and a seasonal pattern."], 'A',
   "A is correct. Sales trend upward and repeat the same regular cycle every year, which indicates seasonality."),
 Q(40, "Comparing Exhibit 3 with the AR(1) model of Exhibit 2, the change made to the regression model was to:", ["add a second explanatory variable, ΔGPMt−4.", "drop the intercept.", "replace ΔGPMt−1 with ΔGPMt−2."], 'A',
   "A is correct. The model was augmented with a second explanatory variable, the change in gross profit margin lagged four quarters (ΔGPMt−4)."),
 Q(41, "The rationale for the change is most likely that:", ["the fourth-lag residual autocorrelation (0.8496, t = 5.37) is significant, which indicates seasonality in quarterly data.", "the second-lag residual autocorrelation (−0.5981) is the largest in absolute value.", "the Durbin–Watson statistic of the AR(1) model was below 2."], 'A',
   "A is correct. The standard error of an autocorrelation is 1/√40 = 0.1581, so t = 0.8496/0.1581 = 5.37 at lag 4: with quarterly data a significant fourth-lag autocorrelation signals seasonality, so ΔGPMt−4 was added. (The second lag is also significant, but the seasonal fourth lag is the key one.)"),
 Q(42, "Using Exhibit 4, the Johnson & Johnson model with the seasonal lag is most likely:", ["correctly specified, because none of the residual autocorrelations is significantly different from zero.", "misspecified, because the lag 1 coefficient is not significant.", "misspecified, because the Durbin–Watson statistic is not 2."], 'A',
   "A is correct. With 65 degrees of freedom the critical t is about 2.0 and every residual autocorrelation has an absolute t-statistic below 0.6, so the null of no serial correlation cannot be rejected: the model is correctly specified."),
 Q(43, "If sales grew by 1% last quarter and by 2% four quarters ago, the Johnson & Johnson model predicts sales growth this quarter closest to:", ["1.2%.", "1.7%.", "2.4%."], 'C',
   "C is correct. 0.0121 − 0.0839 × ln(1.01) + 0.6292 × ln(1.02) = 0.02372, so growth = e^0.02372 − 1 = 2.40%. A leaves out the intercept; B swaps the two growth rates."),
 Q(38, "Based on Exhibit 5, can the analyst rely on the regression to produce meaningful predictions?", ["Yes, because the R² is 0.58 and the t-statistics are large.", "No, because the series must first be tested for unit roots: if both have a unit root, they must also be cointegrated; the very low Durbin–Watson statistic is a warning.", "No, because a regression of one interest rate on another is never valid."], 'B',
   "B is correct. Before regressing one time series on another, test each for a unit root. If neither has one, regression is fine; if both have a unit root, the results are valid only if they are cointegrated; if only one has a unit root, the results are not valid. The very low Durbin–Watson statistic (0.113) hints at a spurious regression."),
 ]))
