from lib17 import *
# ===== Quant (Mock 17, from Mock 7 Q33, Mock 9 Q34, Mock 10 Q13): t-tests of regression coefficients, standard error of estimate points, random walk coefficients =====
assert round(-1.98,2)==-1.98 and abs(0.62/0.058-10.69)<0.01 and abs(0.131/0.140-0.936)<0.001
body="""Part 1
Credit industry analyst Nora Blake has been assigned the task of forecasting auto loan defaults. Specifically, Blake is asked to forecast the percentage of outstanding auto loans that will default in the coming quarter. Blake decides to employ multiple linear regression and time series analysis.

Research Question: Is the default share significantly affected by government relief policies?

To measure the effects of government relief in the research question, Blake uses a dummy variable that equals 1 whenever the Federal government enacted a relief package that exceeded 1% of annual Gross Domestic Product. Blake sets the dummy variable equal to 1 for four quarters starting with the quarter in which the package is enacted and extending through the following 3 quarters. Otherwise, the dummy variable equals zero. Blake uses quarterly data over the past 5 years to derive her regression. Blake's regression equation is provided in Exhibit 1:

Exhibit 1: Default Share Regression Equation
default share = b0 + b1(dUNEM) + b2(RELIEF) + b3(SHOCK) + e
where: default share = the percentage of all outstanding auto loans in default during the quarter; dUNEM = the quarterly change in the unemployment rate (e.g., dUNEM = 2 for a two percentage point increase); RELIEF = 1 for quarters in which a Federal relief package was in place; SHOCK = 1 for quarters in which the median used-car price is one standard deviation below its 5-year moving average.

The results of Blake's regression are provided in Exhibit 2:

Exhibit 2: Default Share Regression Results
# Variable | Coefficient | t-statistic
Intercept | 2.50 | 2.10
dUNEM | 1.20 | 2.30
RELIEF | -1.80 | -1.98
SHOCK | 3.50 | 2.55

The ANOVA results from Blake's regression are provided in Exhibit 3:

Exhibit 3: Default Share Regression ANOVA Table
# Source | Degrees of Freedom | Sum of Squares | Mean Sum of Squares
Regression | 3 | 18 | 6.0000
Error | 16 | 4 | 0.2500
Total | 19 | 22 |

Exhibit 4: Critical Values for Student's t-Distribution (Area in Both Tails Combined)
# Degrees of Freedom | 20% | 10% | 5% | 1%
16 | 1.337 | 1.746 | 2.120 | 2.921
17 | 1.333 | 1.740 | 2.110 | 2.898
18 | 1.330 | 1.734 | 2.101 | 2.878
19 | 1.328 | 1.729 | 2.093 | 2.861
20 | 1.325 | 1.725 | 2.086 | 2.845

Part 2
Frank Mercer, CFA, is the chief financial officer for Sunrise Orchards, one of the largest producers of fruit and nuts in the Western United States. Mercer gathers information regarding quarterly sales revenue and marketing expenditures for the past five years and derives a regression equation for Sunrise Orchards. Mercer explains the standard error of estimate (SEE) to his colleague Larsen with three points:

Point 1: The SEE is the standard deviation of the differences between the estimated values for the independent variables and the actual observations for the independent variable.
Point 2: If there is a strong relationship between the variables and the SEE is small, the individual estimation errors will also be small.
Point 3: The SEE is equal to the standard deviation of the dependent variable.

Part 3
Lucas Ferreira, a research analyst at Porto Securities, is studying the time-series behavior of price-to-earnings ratios (P/Es) computed with trailing 12-month earnings (Etrailing). He and his assistant, Ana Costa, are reviewing the results of the ordinary least squares time series regression shown in Exhibit 5.

Exhibit 5: Results of Regression of P/E on Lagged P/E (P/Et = b0 + b1P/Et-1 + εt)
# | Coefficient | Standard Error | t | Significance of t
Constant (b0) | 0.131 | 0.140 | 0.936 | 0.176
Lagged P/E (b1) | 0.620 | 0.058 | 10.690 | 0

Ferreira states: "This regression is a special case of a first-order autoregressive [AR(1)] model in which the value for b0 is close to zero and the value of b1 is close to 1. These values suggest that the time series is a random walk." """
add('M17','Quantitative Methods',body,[
 q("Based on her regression results in Exhibit 2, using a 5% level of significance, Blake should conclude that:",["relief packages have significant effects on default percentages, but used-car price shocks do not have significant effects on default percentages.","both relief packages and used-car price shocks have significant effects on default percentages.","relief packages do not have significant effects on default percentages, but used-car price shocks do have significant effects on default percentages."],2,
  ["Incorrect. RELIEF has t = −1.98, whose absolute value is below the critical value of 2.120, so it is not significant; SHOCK is significant.","Incorrect. RELIEF is not significant at the 5% level.","Correct. Degrees of freedom = error df = 16 (20 observations − 3 slopes − 1); the critical t at the 5% level is 2.120. |−1.98| < 2.120, so RELIEF is not significant; 2.55 > 2.120, so SHOCK is significant."],
  ["@row:RELIEF","@row:SHOCK","@row:Error"],"t-test: compare |t| with the critical t (df = n − k − 1, from the ANOVA error df); |t| > critical → reject H0 → variable matters.",fixed=False),
 q("How many of Mercer's points about the standard error of estimate are most accurate?",["2 of Mercer's points are correct.","1 of Mercer's points is correct.","All 3 of Mercer's points are correct."],1,
  ["Incorrect. Only Point 2 is correct.","Correct. Point 2 is correct. Point 1 is wrong: the SEE measures the differences between estimated and actual values of the DEPENDENT variable. Point 3 is wrong: the SEE is the standard deviation of the regression residuals, not of the dependent variable.","Incorrect. Points 1 and 3 are wrong."],
  ["The SEE is the standard deviation of the differences between the estimated values for the independent variables","The SEE is equal to the standard deviation of the dependent variable."],"SEE = standard deviation of the residuals (estimated vs actual DEPENDENT variable); small SEE with a strong relationship → small errors.",fixed=False),
 q("Ferreira's statement that the coefficients depicted in Exhibit 5 are consistent with a random walk is most likely:",["correct.","incorrect because b1 should be close to 1.","incorrect because b0 should be close to 1."],1,
  ["Incorrect. A random walk requires b0 close to 0 AND b1 close to 1; here b1 = 0.62.","Correct. For a random walk estimated as an AR(1), the intercept is near zero and the slope on the lagged value is near 1. b1 = 0.62 is far from 1 (a mean-reverting AR(1)), so the statement is incorrect.","Incorrect. For a random walk the intercept should be close to 0, not 1 (and here it is already close to 0)."],
  ["@row:Lagged P/E (b1)","the value of b1 is close to 1"],"Random walk: b0 = 0 (or drift), b1 = 1; |b1| < 1 → covariance stationary, mean reverting.",fixed=False),
])
