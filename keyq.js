// Key notes questions: the user's own handwritten study notes turned into recall questions.
// Each "*" bullet of the notebook can give several short items. Types:
//   mc      multiple choice, 3 options (o), answer index a, optional fig (a drawing shown above the options)
//   table   skeleton table: header row and first column are shown, the rest is blank to write on paper; the full table shows after Submit
//   formula "Formula: ... =" prompt only; the user writes the formula on paper, the answer shows after Submit
// Fractions are written [[numerator|denominator]]. Subjects hold the readings (CFA reading numbers) of each topic.
const KEYQ_SUBJECTS = [
  ["Quantitative Methods", [1, 2, 3, 4]],
  ["Economics", [5, 6]],
  ["Financial Statement Analysis", [7, 8, 9, 10, 11, 12]],
  ["Corporate Issuers", [13, 14, 15, 16]],
  ["Equity Valuation", [17, 18, 19, 20, 21, 22]],
  ["Fixed Income", [23, 24, 25, 26, 27]],
  ["Derivatives", [28, 29]],
  ["Alternative Investments", [30, 31, 32, 33]],
  ["Portfolio Management", [34, 35, 36, 37, 38, 39]],
  ["Ethics", [40, 41, 42]]
];
const KEYQ = [];
(function () {
  const cnt = {};
  const nid = r => `kq${r}-${String((cnt[r] = (cnt[r] || 0) + 1)).padStart(2, "0")}`;
  const mc = (r, q, o, a, why, fig) => KEYQ.push({ id: nid(r), reading: r, type: "mc", q, o, a, why: why || "", fig: fig || "" });
  const tb = (r, title, head, rows, note) => KEYQ.push({ id: nid(r), reading: r, type: "table", q: title, head, rows, note: note || "" });
  const fm = (r, q, a, note) => KEYQ.push({ id: nid(r), reading: r, type: "formula", q, a, note: note || "" });

  // ================= 1 Multiple Regression =================
  fm(1, "Formula: standard error of the estimate (SEE) =", "√MSE = √[[SSE|n − k − 1]]");
  fm(1, "Formula: R² =", "[[RSS|SST]]", "RSS = regression (explained) sum of squares; SST = total sum of squares.");
  fm(1, "Formula: adjusted R² =", "1 − ( [[n − 1|n − k − 1]] × (1 − R²) )");
  fm(1, "Formula: multiple R =", "√R²");
  mc(1, "Compared with R², adjusted R² can:", ["Be negative and fall when a variable is added", "Never be negative and never fall", "Rise every time a variable is added"], 0, "Only adjusted R² can fall (and go below zero) when a variable adds little explanatory power.");
  tb(1, "Regression problems: error type, test and fix", ["Problem", "Error type", "Test", "Fix"], [
    ["Heteroskedasticity", "Type I", "Breusch-Pagan (BP)", "Robust (White) standard errors"],
    ["Multicollinearity", "Type II", "VIF", "Swap, drop or add variables; increase N"],
    ["Serial correlation", "Type I", "Breusch-Godfrey (BG)", "Robust (Newey-West) standard errors"]],
    "Error type = the error the problem tends to cause in the t-tests.");
  tb(1, "Regression problems: effect on standard errors, t-test and F-test", ["Problem", "Standard errors", "t-test", "F-test"], [
    ["Heteroskedasticity", "Low", "High", "Unreliable"],
    ["Multicollinearity", "High", "Low", "Not affected"],
    ["Serial correlation", "Low", "High", "High"]]);
  mc(1, "Multicollinearity makes the standard errors and the t-statistics:", ["Standard errors high, t-statistics low", "Standard errors low, t-statistics high", "Standard errors low, t-statistics low"], 0, "Inflated standard errors give low t-statistics and Type II errors.");
  mc(1, "Which test is used to detect heteroskedasticity?", ["Breusch-Pagan", "Variance inflation factor", "Breusch-Godfrey"], 0, "VIF is for multicollinearity and Breusch-Godfrey is for serial correlation.");
  mc(1, "The F-test is unreliable when the regression has:", ["Heteroskedasticity", "Multicollinearity", "A large R²"], 0, "Multicollinearity does not affect the F-test.");
  tb(1, "Signals of multicollinearity", ["Statistic", "What you see"], [["R²", "Large"], ["F-statistic", "Significant"], ["t-statistics", "Low or insignificant"], ["Standard errors", "Inflated"]]);
  tb(1, "Durbin-Watson test zones", ["DW statistic", "Conclusion"], [
    ["Below the lower limit", "Positive serial correlation (reject)"],
    ["Between lower limit and upper limit", "Inconclusive"],
    ["Between upper limit and 4 − upper limit", "No serial correlation"],
    ["Between 4 − upper limit and 4 − lower limit", "Inconclusive"],
    ["Above 4 − lower limit", "Negative serial correlation (reject)"]],
    "A question gives you the limits and the t-statistic; build this table with the limits.");
  tb(1, "Model selection tests", ["Test", "Formula", "Purpose"], [
    ["F-test (nested models)", "[[(SSE_{R} − SSE_{U}) ÷ q|SSE_{U} ÷ (n − k − 1)]]", "Do the q added independent variables significantly reduce SSE?"],
    ["F-test (overall)", "[[RSS_{U} ÷ k|SSE_{U} ÷ (n − k − 1)]]", "Does at least one independent variable explain a significant part of the dependent variable?"],
    ["AIC", "n × ln([[SSE|n]]) + 2(k + 1)", "Better forecast"],
    ["BIC", "n × ln([[SSE|n]]) + ln(n)(k + 1)", "Better goodness of fit"]],
    "AIC comes before BIC alphabetically and has the simpler formula.");
  mc(1, "Which criterion is used to choose the model with the better forecast?", ["AIC", "BIC", "R²"], 0, "BIC is used for goodness of fit; both prefer the lower value.");
  mc(1, "The correct ordering of the three means is:", ["Harmonic ≤ geometric ≤ arithmetic", "Arithmetic ≤ geometric ≤ harmonic", "Geometric ≤ harmonic ≤ arithmetic"], 0, "They are equal only when all observations are the same.");
  mc(1, "If ln(1 + x) = 0.7, then x equals:", ["e^{0.7} − 1", "ln(0.7) − 1", "e^{0.7}"], 0, "Take e to the power of both sides: 1 + x = e^{0.7}.");

  // ================= 2 Time-Series Analysis =================
  mc(2, "In an AR(1) model, to decide whether the next value will rise or fall you compare:", ["The current value and the mean-reverting level", "The slope coefficient and the value 1", "The residual and the value zero"], 0, "If the current value is above the mean-reverting level b_{0} ÷ (1 − b_{1}), the next value is expected to fall.");
  tb(2, "Seasonality: which lag to check", ["Data", "Lag"], [["Quarterly", "4th lag"], ["Monthly", "12th lag"]], "Only the last lag of each cycle needs checking.");
  mc(2, "The seasonal lag has a p-value below the level of significance. This means:", ["Seasonality is present", "Seasonality is absent", "The series has a unit root"], 0, "Reject the null that the seasonal autocorrelation is zero.");
  tb(2, "Covariance stationarity: three constants", ["Constant", "Over time"], [["Mean", "Constant"], ["Variance", "Constant"], ["Covariance with its own lags", "Constant"]]);
  mc(2, "Which is NOT required for covariance stationarity?", ["A positive autocorrelation", "A constant mean", "A constant variance"], 0, "The covariance with its own lags must be constant, not positive.");
  tb(2, "Regressing one time series on another", ["Regression 1", "Regression 2", "Residuals", "Regression result"], [
    ["No unit root", "No unit root", "Not tested", "Valid"],
    ["Unit root", "No unit root", "Not tested", "Invalid"],
    ["Unit root", "Unit root", "Cointegrated", "Valid"],
    ["Unit root", "Unit root", "Unit root", "Invalid"]],
    "Regression 1 and 2 are the two time series tested for a unit root; the residual test only matters when both have a unit root.");

  // ================= 3 Machine Learning =================
  mc(3, "LASSO is a:", ["Penalised regression algorithm", "Clustering algorithm", "Classification algorithm"], 0, "Least absolute shrinkage and selection operator: it penalises the number of features.");
  mc(3, "A support vector machine (SVM) is a:", ["Linear classification algorithm for two classes", "Clustering algorithm for many groups", "Penalised regression algorithm"], 0, "It separates the data into one of two classifiers.");
  tb(3, "Clustering (unsupervised learning)", ["Algorithm", "How it works"], [
    ["K-means", "Hyperparameter k (number of clusters) is set before running"],
    ["Hierarchical, bottom-up (agglomerative)", "Start with single observations; similar ones are merged as time passes"],
    ["Hierarchical, top-down (divisive)", "Start with one big group; it is split as time passes"]]);
  mc(3, "K-means clustering needs which input before it runs?", ["The number of clusters", "A labelled target variable", "The number of hidden layers"], 0, "That number is a hyperparameter.");
  mc(3, "A deep learning network is a neural network with:", ["Many hidden layers, often over 20", "Exactly one hidden layer", "Two hidden layers, never more"], 0, "Your note: at least two layers but mostly more than 20.");
  mc(3, "Overfitting is mainly a problem for:", ["Supervised learning with many features", "Unsupervised learning with many clusters", "Unsupervised learning with few features"], 0, "It is not a concern for unsupervised learning.");
  mc(3, "A learning curve plots:", ["Validation and test accuracy vs training size", "Training error vs number of features", "Cluster size vs elapsed time"], 0, "Used to see whether more training data would improve the model.");
  mc(3, "CART is suited to a relationship between independent and dependent variables that is:", ["Non-linear", "Linear", "Absent"], 0, "It splits the data in two at each node, for example into buy and sell.");

  // ---- Reject or not: hypothesis tests in regression (reading 1) ----
  mc(1, "A Breusch-Pagan test gives a p-value below the level of significance. You conclude:", ["Conditional heteroskedasticity is present", "Conditional heteroskedasticity is absent", "Multicollinearity is present"], 0, "H0 is no conditional heteroskedasticity; rejecting it means the problem is present.");
  mc(1, "A Breusch-Pagan statistic of 5.2 is compared with a critical value of 7.81. You:", ["Fail to reject; no evidence of heteroskedasticity", "Reject; heteroskedasticity is present", "Reject; serial correlation is present"], 0, "5.2 is below 7.81, so H0 (no conditional heteroskedasticity) stands.");
  mc(1, "A Breusch-Pagan statistic of 11.4 is compared with a critical value of 7.81. You:", ["Reject; heteroskedasticity is present", "Fail to reject; no evidence of heteroskedasticity", "Reject; there is no heteroskedasticity"], 0, "The statistic is above the critical value, so reject H0.");
  mc(1, "The Breusch-Pagan statistic is compared with a chi-square critical value. The test is:", ["One-tailed, right side", "One-tailed, left side", "Two-tailed"], 0, "A large statistic signals heteroskedasticity.");
  mc(1, "Durbin-Watson statistic 1.1, lower critical value 1.5, upper critical value 1.7. You:", ["Reject H0; positive serial correlation is present", "Fail to reject; there is no serial correlation", "The test is inconclusive"], 0, "DW below the lower limit rejects the null of no positive serial correlation.");
  mc(1, "Durbin-Watson statistic 1.6, lower critical value 1.5, upper critical value 1.7. The test is:", ["Inconclusive", "Reject H0; positive serial correlation is present", "Fail to reject; there is no serial correlation"], 0, "The value lies between the lower and upper limits.");
  mc(1, "Durbin-Watson statistic 1.95, lower critical value 1.5, upper critical value 1.7. You:", ["Fail to reject; no evidence of serial correlation", "Reject H0; positive serial correlation is present", "The test is inconclusive"], 0, "1.95 is above the upper limit and below 4 minus the upper limit.");
  mc(1, "Durbin-Watson statistic 2.7, lower critical value 1.5, upper critical value 1.7. You conclude:", ["Negative serial correlation is present", "Positive serial correlation is present", "There is no serial correlation"], 0, "2.7 is above 4 minus the lower limit (2.5).");
  mc(1, "The null hypothesis of the one-sided Durbin-Watson test is:", ["No positive serial correlation", "No heteroskedasticity", "No unit root"], 0, "Rejecting it means positive serial correlation is present.");
  mc(1, "A Breusch-Godfrey test has a p-value above the level of significance. You:", ["Fail to reject; no evidence of serial correlation", "Reject; serial correlation is present", "Reject; heteroskedasticity is present"], 0, "H0 is no serial correlation.");
  mc(1, "In a regression with a lagged dependent variable as a regressor, which test do you use for serial correlation?", ["Breusch-Godfrey", "Durbin-Watson", "Breusch-Pagan"], 0, "Durbin-Watson is not valid when a lagged dependent variable is an independent variable.");
  mc(1, "In a joint F-test of all slope coefficients, F = 5.0 and the critical value is 3.0. You conclude:", ["At least one slope coefficient differs from zero", "Every slope coefficient differs from zero", "No slope coefficient differs from zero"], 0, "Reject H0 that all slopes are zero; this does not say every slope is significant.");
  mc(1, "In a joint F-test of all slope coefficients, F = 2.0 and the critical value is 3.0. You:", ["Fail to reject; no slope is shown to differ from zero", "Reject; at least one slope differs from zero", "Reject; every slope differs from zero"], 0, "The F-statistic is below the critical value.");
  mc(1, "A nested F-test of two added variables rejects H0. You conclude:", ["The added variables improve the fit", "The added variables add nothing", "The added variables cause multicollinearity"], 0, "H0 is that the added variables have zero coefficients.");
  mc(1, "A nested F-test of two added variables fails to reject H0. You:", ["Keep the smaller (restricted) model", "Keep the larger (unrestricted) model", "Drop only one of the two variables"], 0, "The added variables do not significantly reduce SSE.");
  mc(1, "A coefficient has t-statistic 1.8 and the critical value is 2.0. You:", ["Fail to reject H0; the variable is not significant", "Reject H0; the variable is significant", "Reject H0; the variable is zero"], 0, "|t| is below the critical value.");
  mc(1, "A coefficient has t-statistic −2.6 and the critical value is 2.0. You:", ["Reject H0; the variable is significant", "Fail to reject H0; the variable is not significant", "Fail to reject H0; the coefficient is zero"], 0, "Use the absolute value; a negative t can still be significant.");
  mc(1, "A coefficient has a p-value of 0.03 and the level of significance is 5%. You:", ["Reject H0 that the coefficient is zero", "Fail to reject H0 that the coefficient is zero", "Conclude the coefficient equals zero"], 0, "p-value below α means reject.");
  mc(1, "A coefficient has a p-value of 0.07. It is:", ["Not significant at 5% but significant at 10%", "Significant at 5% and at 10%", "Not significant at 5% or at 10%"], 0, "Reject only when p is below the level of significance.");
  mc(1, "Which statement about rejecting H0 in a regression diagnostic test is most accurate?", ["Rejecting signals that a problem exists", "Rejecting signals that the model is fine", "Rejecting signals that the sample is too small"], 0, "Their null hypotheses say there is no problem.");
  mc(1, "A model has conditional heteroskedasticity. The F-test is:", ["Unreliable", "Not affected", "Too low"], 0, "Heteroskedasticity makes the F-test unreliable.");
  mc(1, "A model has multicollinearity. The F-test is:", ["Not affected", "Unreliable", "Too high"], 0, "Multicollinearity inflates the standard errors, not the F-test.");
  mc(1, "A model has positive serial correlation and no lagged dependent variable. The t-statistics are:", ["Too high", "Too low", "Unaffected"], 0, "Standard errors are too low.");

  // ---- Reject or not: time-series tests (reading 2) ----
  mc(2, "A Dickey-Fuller test rejects its null hypothesis. You conclude the series:", ["The series has no unit root", "The series has a unit root", "The series is cointegrated"], 0, "The null of a Dickey-Fuller test is that a unit root is present.");
  mc(2, "A Dickey-Fuller test fails to reject its null hypothesis. You conclude the series:", ["The series has a unit root", "The series has no unit root", "The series is stationary"], 0, "Failing to reject keeps the unit root.");
  mc(2, "The null hypothesis of a Dickey-Fuller test is that:", ["A unit root is present", "No unit root is present", "The series is cointegrated"], 0, "Rejecting it is the good outcome.");
  mc(2, "In an AR model, a residual autocorrelation has t-statistic 3.1 and the critical value is 1.97. You conclude:", ["Serial correlation is present; the model is misspecified", "No serial correlation; the model is well specified", "The series has a unit root"], 0, "|t| above the critical value rejects zero autocorrelation.");
  mc(2, "In an AR model, no residual autocorrelation is significant. You conclude:", ["The model is correctly specified", "The model is misspecified", "The model has ARCH"], 0, "Serial correlation in the residuals is absent.");
  mc(2, "A quarterly AR model has a significant residual autocorrelation at the 4th lag. This indicates:", ["Seasonality; add a seasonal lag", "A unit root; take first differences", "ARCH; use generalized least squares"], 0, "For quarterly data check the 4th lag.");
  mc(2, "A monthly AR model has an insignificant residual autocorrelation at the 12th lag. This indicates:", ["No evidence of seasonality", "Seasonality is present", "A unit root is present"], 0, "Fail to reject zero autocorrelation at the seasonal lag.");
  mc(2, "In the ARCH test, the squared residuals are regressed on one lag of the squared residuals. The estimate a₁ is statistically significant. You conclude:", ["ARCH is present", "ARCH is absent", "The series has a unit root"], 0, "H0 is a₁ = 0.");
  mc(2, "ARCH is present in the residuals of an AR model. The AR model is:", ["Misspecified", "Correctly specified", "Unaffected"], 0, "The error variance depends on past squared errors.");
  mc(2, "Both series have a unit root. The Engle-Granger test on the residuals rejects its null. The series are:", ["Cointegrated, so the regression is valid", "Not cointegrated, so the regression is invalid", "Stationary, so the regression is valid"], 0, "Cointegrated series share a stable relationship.");
  mc(2, "Both series have a unit root and the Engle-Granger test fails to reject its null. The regression is:", ["Invalid, as the residuals have a unit root", "Valid, as the series are cointegrated", "Valid, as both series are stationary"], 0, "No cointegration means a spurious regression risk.");
  mc(2, "Only one of the two series has a unit root. Regressing one on the other is:", ["Invalid", "Valid", "Valid if the residuals are cointegrated"], 0, "The error term is not covariance stationary.");
  mc(2, "Neither series has a unit root. Regressing one on the other:", ["Is valid in levels", "Needs a cointegration test", "Is invalid"], 0, "No unit root means no cointegration test is needed.");
  mc(2, "Which of these tests has a null hypothesis that describes a problem, so rejecting it is the good outcome?", ["Dickey-Fuller", "Breusch-Pagan", "Durbin-Watson"], 0, "Engle-Granger flips in the same way.");
  mc(2, "A seasonal lag test has a p-value above the level of significance. You:", ["Fail to reject; no seasonality", "Reject; seasonality is present", "Reject; the series is stationary"], 0, "H0 is that the seasonal autocorrelation is zero.");

  // ================= 7 Intercorporate Investments =================
  fm(7, "Formula: equity method goodwill =", "purchase price − % ownership × (FV of identifiable net assets)", "Same as partial goodwill. Long form: purchase price − % × BV of net assets − % × (FV − BV of total assets). Use FV, not BV.");
  fm(7, "Formula: equity method investment account at year end =", "purchase price + % × net income − % × dividends − [[% × (FV − BV) of identifiable assets|N]]", "The last term is the amortisation of the excess purchase price over N years.");
  fm(7, "Formula: equity method contribution to net earnings =", "% × net income − [[% × (FV − BV) of identifiable assets|N]]");
  mc(7, "How do the investment account and the contribution to net earnings differ under the equity method?", ["The investment account includes the purchase price and dividends; net earnings does not", "Net earnings includes the purchase price and dividends; the investment account does not", "Both include the purchase price but not dividends"], 0, "Net earnings only picks up the share of net income less the amortisation.");
  mc(7, "Fair value of identifiable assets is not given. You can estimate it as:", ["Book value plus excess fair value", "Book value less depreciation", "Purchase price times % owned"], 0, "Then use it for equity method or acquisition method goodwill.");
  mc(7, "Under the equity method, unrealised profit on upstream and downstream sales is:", ["Initially deferred", "Recognised immediately", "Eliminated permanently"], 0, "It is recognised when the goods are sold to a third party.");
  fm(7, "Formula: impairment loss under IFRS =", "carrying amount − recoverable amount", "Your note wrote RA − CA, which would be negative for an impairment. A loss arises when the carrying amount is above the recoverable amount.");
  fm(7, "Formula: non-controlling interest under the partial goodwill method (IFRS) =", "% not owned × FV of identifiable net assets");
  fm(7, "Formula: full goodwill =", "[[purchase price|% ownership]] − FV of identifiable assets", "Also: purchase price + FV of NCI − FV of identifiable assets.");
  fm(7, "Formula: partial goodwill =", "purchase price − % ownership × FV of identifiable assets", "Same as the equity method goodwill. Use FV, not BV.");
  mc(7, "A question says the whole excess goes to identifiable assets. Then:", ["No goodwill; both computed the same way", "Goodwill equals the whole excess", "Only full goodwill is zero"], 0, "Full and partial goodwill are both zero, so everything else is computed with them.");
  tb(7, "IFRS 9 measurement", ["Category", "Carried at"], [["FVPL and FVOCI", "Market (fair) value"], ["Amortised cost", "Historical cost"]]);
  tb(7, "Special purpose entity (SPE)", ["", "Treatment"], [["IFRS", "Always consolidated; cannot be classified as a qualifying SPE"], ["US GAAP", "A qualifying SPE needs no consolidation"]]);
  mc(7, "Under which standard does a qualifying SPE not need to be consolidated?", ["US GAAP", "IFRS", "Both"], 0, "IFRS has no qualifying SPE.");
  tb(7, "Cash of a consolidated SPE", ["Source of the SPE's money", "Consolidated cash"], [
    ["Money from a bank outside the company", "Increases"],
    ["Money from the parent", "Eliminated: no change"],
    ["No money from outside", "Unchanged"]]);
  mc(7, "After an SPE is consolidated, revenue from transactions between the SPE and the parent:", ["Is eliminated and adds nothing to revenue", "Adds to consolidated revenue", "Moves to other comprehensive income"], 0, "The parent absorbing the SPE's losses is what forces consolidation.");
  tb(7, "Joint venture: equity method vs proportionate consolidation", ["", "Equity method", "Proportionate"], [
    ["Revenue", "Unchanged", "Increases"],
    ["Net income", "Increases", "Increases by the same amount"],
    ["Assets", "Unchanged", "Increases"],
    ["Equity", "Increases", "Increases by the same amount"]]);
  tb(7, "Comparing the three methods", ["Item", "Ranking"], [
    ["Assets, liabilities, expenses, revenue", "Acquisition > proportionate > equity"],
    ["Net income", "Same under all three"],
    ["Equity", "Same under proportionate and equity method"]],
    "Net income = parent net income + % ownership × subsidiary net income; do not just use the parent figure.");
  mc(7, "Under the equity method versus the acquisition method, net profit margin, ROE and ROA are:", ["Higher", "Lower", "The same"], 0, "Your note: revenue, assets and equity are lower under the equity method.");
  mc(7, "ROE, ROA and D/E are higher under:", ["Partial goodwill than full goodwill", "Full goodwill than partial goodwill", "Neither: they are the same"], 0, "Partial goodwill gives smaller assets and equity.");
  mc(7, "A holds a 10% stake classified as FVPL, bought for 90m. At year end the stake is worth 97m and a dividend of 4m was received. Pre-tax income from the stake:", ["11m", "7m", "12m"], 0, "Holding gain 7m + dividend (40m × 10%) 4m.");
  mc(7, "A buys 75% of B by issuing shares. A's debt-to-assets ratio:", ["Falls", "Rises", "Stays the same"], 0, "The acquisition only adds assets and equity; debt is unchanged.");
  tb(7, "Reclassification of an investment", ["Rule", "Detail"], [["When allowed", "If there are significant changes in operations"], ["Prior statements", "No need to change"]]);

  // ================= 8 Employee Compensation =================
  mc(8, "Employer contributions to a defined benefit plan are shown in the cash flow statement as:", ["Cash outflows in operating activities", "Cash outflows in financing activities", "Cash outflows in investing activities"], 0, "They are an operating cash outflow.");
  tb(8, "Higher volatility (σ) and stock compensation", ["Instrument", "Fair value", "Operating expense", "Net income"], [["RSU", "Same", "Same", "Same"], ["Stock option", "Increase", "Increase", "Decrease"]]);
  mc(8, "Volatility of the share price increases. Which grant is NOT affected?", ["Restricted stock units", "Stock options", "Both"], 0, "RSU value depends on the share price, not volatility.");

  // ================= 9 Multinational Operations =================
  fm(9, "Formula: foreign transaction gain =", "$ amount × (end-of-year currency − currency used in the transaction)");
  mc(9, "In translating a balance sheet, the plug number is:", ["CTA or residual income, depending on the method", "Retained earnings, under both methods", "Goodwill, under both methods"], 0, "After translating at mixed rates, the balance sheet does not balance.");
  tb(9, "Translating a balance sheet: three steps", ["Step", "What to do"], [
    ["1", "Translate the old balance sheet with the correct method (current rate or temporal)"],
    ["2", "Items now use different rates, so assets ≠ liabilities + equity"],
    ["3", "Fill the gap with CTA (current rate) or residual income (temporal)"]]);
  mc(9, "In your balance sheet exercise, the only monetary assets are:", ["Cash and accounts receivable", "Inventory and PPE", "Goodwill and inventory"], 0, "Monetary items are remeasured at the current rate under the temporal method.");
  tb(9, "Functional currency, method and the plug", ["Functional currency", "Method", "Foreign currency ↑", "Foreign currency ↓"], [
    ["Presentation currency", "Temporal", "Residual income ↓", "Residual income ↑"],
    ["Local currency", "Current rate", "CTA ↑", "CTA ↓"]],
    "The arrows hold for a net monetary liability exposure under temporal and a net asset exposure under the current rate method.");
  tb(9, "Which translation method or inventory method gives the higher gross margin?", ["Situation", "Higher margin"], [
    ["Foreign (local) currency appreciating", "Temporal"],
    ["Foreign (local) currency depreciating", "Current rate"],
    ["Inflation rising", "FIFO"],
    ["Inflation falling", "LIFO"]]);
  tb(9, "Finding the functional currency (in ranking order)", ["Rank", "Check"], [["1", "Currency of revenue"], ["2", "Currency of operating costs"], ["3", "Currency of financing costs"]]);
  mc(9, "A company earns all revenue in GBP, but all costs are paid in EUR. Its functional currency is:", ["GBP", "EUR", "The parent's currency"], 0, "Revenue ranks above operating costs.");
  tb(9, "Reducing balance sheet exposure", ["Step", "What to do"], [
    ["1", "Find the net exposure with the translation method (only items translated at the current rate count)"],
    ["2", "Choose the option that moves that number towards zero"]],
    "Net asset exposure: reduce assets. Net liability exposure: reduce liabilities.");
  mc(9, "A subsidiary has a net asset exposure under the current rate method. To reduce the exposure the company should:", ["Reduce assets", "Reduce liabilities", "Increase assets"], 0, "Move the net exposure towards zero.");

  // ================= 10 Analysis of Financial Institutions =================
  fm(10, "Formula: underwriting loss ratio =", "[[claims paid + change in loss reserves|net premiums earned]]", "Measures the relative efficiency of the company's underwriting standards.");
  fm(10, "Formula: expense ratio =", "[[underwriting expenses including commissions|net premiums written]]", "Measures the efficiency of the company's operations.");
  tb(10, "Bank: stable funding is assessed by", ["Check", "More stable"], [["Length of deposits", "Long-term deposits (vs short)"], ["Who deposits", "Consumers (vs interbank)"]]);
  mc(10, "Which source of bank deposits is the more stable funding?", ["Consumer deposits", "Interbank deposits", "Both are equally stable"], 0, "Consumers are less likely to withdraw quickly.");

  // ================= 11 Evaluating Quality of Financial Reports =================
  tb(11, "Warning signs of profitability", ["Warning sign"], [
    ["Revenue growth higher than peers"],
    ["Receivables growth higher than revenue growth"],
    ["Higher rate of customer returns"],
    ["High proportion of revenue in the final quarter"]]);
  mc(11, "Which is a warning sign when comparing net income with CFO?", ["Net income above CFO", "Net income below CFO", "Net income equal to CFO"], 0, "Net income below CFO is fine.");
  mc(11, "A higher Altman Z-score means:", ["Lower bankruptcy risk", "Higher bankruptcy risk", "Higher earnings manipulation"], 0, "Above the high critical value is safe; below the low value signals bankruptcy.");
  mc(11, "A Beneish M-score above −1.78 suggests:", ["Likely earnings manipulation", "No manipulation", "Bankruptcy risk"], 0, "A higher M-score is bad.");
  mc(11, "Growth through acquisition most directly increases:", ["Goodwill", "Inventory turnover", "Receivables turnover"], 0, "Look at goodwill when a company grows by acquisitions.");
  mc(11, "DuPont analysis is used for:", ["Commenting on ROE", "Detecting earnings manipulation", "Estimating bankruptcy risk"], 0, "Cash flow ratio analysis is the tool for earnings manipulation.");
  mc(11, "High accruals are:", ["A bad sign for earnings quality", "A good sign for earnings quality", "Irrelevant to earnings quality"], 0, "Accruals can be split into discretionary and non-discretionary.");
  tb(11, "Accruals", ["Type", "Meaning"], [
    ["Non-discretionary", "Comes from operating the business; explained by the regression"],
    ["Discretionary", "Comes from management choices and can manipulate earnings; the residual (noise)"]]);
  mc(11, "An increase in operating margin is:", ["An accounting warning sign", "A sign of better quality", "Neutral"], 0, "Check why the margin improved.");
  mc(11, "Bill-and-hold and channel stuffing both:", ["Increase accounts receivable and decrease receivables turnover", "Decrease accounts receivable and increase receivables turnover", "Increase inventory turnover"], 0, "Revenue is booked early, so receivables grow.");
  mc(11, "A company reports interest paid in CFF under IFRS. Restating it to CFO for comparison:", ["Raises CFF and lowers CFO", "Lowers CFF and raises CFO", "Does not change CFO"], 0, "The cost moves into operating cash flow.");

  // ================= 12 Integration of FSA Techniques =================
  fm(12, "Formula: ratio of operating cash flow before interest and taxes to operating income =", "[[operating cash flow before interest and taxes|operating income]]", "A high ratio means earnings are backed by cash flow.");
  tb(12, "Where interest and dividends appear in the cash flow statement", ["Item", "IFRS", "US GAAP"], [
    ["Interest paid", "CFO or CFF", "CFO"],
    ["Interest received", "CFO or CFI", "CFO"],
    ["Dividends received", "CFO or CFI", "CFO"]],
    "If IFRS interest paid is already in CFF, you do not need to add it back for the ratio.");
  fm(12, "Formula: segment % of total capital expenditures ÷ segment % of total assets: above 1 means", "The segment is growing; below 1 means it is shrinking.");
  fm(12, "Formula: three-step DuPont ROE =", "[[net income|revenue]] × [[revenue|assets]] × [[assets|equity]]");
  fm(12, "Formula: five-step DuPont ROE =", "[[net income|EBT]] × [[EBT|EBIT]] × [[EBIT|revenue]] × [[revenue|assets]] × [[assets|equity]]");
  mc(12, "When comparing company A with the market average, A's PPE depreciable lives are 20% longer. To adjust to the market you:", ["Raise depreciation; net income, equity fall; D/E rises", "Lower depreciation; net income, equity rise; D/E falls", "Keep depreciation; adjust the tax rate instead"], 0, "Shorter lives mean more depreciation each year.");

  // ================= 28 Pricing and Valuation of Forward Commitments =================
  fm(28, "Formula: value of a long forward at time t =", "PV (F_{t} − F_{0}) = [[FP_{t} − FP_{0}|(1 + r)^{T − t}]]", "FP_{t} = S_{t} × (1 + r)^{T − t} (less the FV of dividends). F_{0} does not change.");
  fm(28, "Formula: value of a short forward at time t =", "PV (F_{0} − F_{t}) = −(value of the long)");
  mc(28, "A 9-month forward was agreed at 123. Six months later the share price is 131 (no dividends, r = 1.6%, annual compounding). The value of the long forward is:", ["$8.49", "$8.52", "$8.00"], 0, "FP_{t} = 131 × 1.016^{0.25} = 131.52. Value = (131.52 − 123) ÷ 1.016^{0.25}.");
  mc(28, "When valuing an equity forward at time t, which price do you carry forward to the expiry date?", ["The spot price at time t", "The spot price when the contract started", "The original forward price"], 0, "Use S_{t}, then discount only the difference with the original forward price.");
  fm(28, "Formula: forward price with remaining dividends =", "S × (1 + r)^{T} − (FV of dividends to T)", "If the problem says the dividends are already accumulated to expiry, subtract them without discounting.");
  mc(28, "The problem says dividends are accumulated to the expiry date. You:", ["Subtract them as given, undiscounted", "Discount them back to today first", "Ignore them completely"], 0, "An accumulated dividend is already a future value.");
  fm(28, "Formula: present value of the forward price with continuous compounding =", "FP × e^{−r(T − t)}");
  fm(28, "Formula: forward price with continuous compounding and dividend yield δ =", "S_{t} × e^{(r − δ)(T − t)}", "Use T − t in the exponent, not T.");
  mc(28, "With continuous compounding, the exponent in the forward formula uses:", ["T − t, the time remaining", "T, the full life", "t, the time elapsed"], 0, "T − t is the remaining life of the forward.");
  tb(28, "Forward or futures mispricing: Q = quoted (market) price, F = fair (model) price", ["Q compared with F", "The forward is", "Action: first letter = what you do with the forward"], [
    ["Q above F", "Expensive", "SBB, cash-and-carry: Sell forward, Borrow, Buy the asset"],
    ["Q below F", "Cheap", "BSL, reverse cash-and-carry: Buy forward, Short the asset, Lend"]],
    "Name the two prices first: Q is the price quoted in the market, F is the price from the carry model. Whatever the question calls them (MP, FP, market, fair), decide which is Q and which is F.");
  mc(28, "The quoted forward price is below the fair price from the carry model. The forward is cheap, so you:", ["Buy the forward, short the asset, lend", "Sell the forward, borrow, buy the asset", "Buy the forward, borrow, buy the asset"], 0, "BSL: Buy forward, Short the asset, Lend (reverse cash-and-carry).");
  mc(28, "The quoted forward price is above the fair price from the carry model. You:", ["Sell the forward, borrow, buy the asset", "Buy the forward, short the asset, lend", "Sell the forward, short the asset, lend"], 0, "SBB: Sell forward, Borrow, Buy the asset (cash-and-carry).");
  mc(28, "In the abbreviations SBB and BSL, the first letter tells you:", ["What you do with the forward", "What you do with the asset", "Whether you borrow or lend"], 0, "S = sell the (expensive) forward; B = buy the (cheap) forward.");
  mc(28, "Cash-and-carry is the trade you make when the quoted forward price is:", ["Higher than the fair price", "Lower than the fair price", "Equal to the fair price"], 0, "You carry the asset (buy it with borrowed money) and sell the expensive forward.");
  mc(28, "Reverse cash-and-carry is the trade you make when the quoted forward price is:", ["Lower than the fair price", "Higher than the fair price", "Equal to the fair price"], 0, "You buy the cheap forward and short the asset.");
  mc(28, "When valuing a bond futures contract, accrued interest for the quoted futures price is measured at:", ["The expiration date", "Today", "The last coupon date"], 0, "A last coupon 30 days ago with 90 days to expiry gives 120 days of accrual.");
  mc(28, "A bond paid its last coupon 30 days ago and the futures contract expires in 90 days. Days of accrued interest at expiry:", ["120", "90", "30"], 0, "30 + 90 = 120.");
  fm(28, "Formula: value of a pay-fixed swap (new vs old fixed rate) =", "Σ Z × (SFR_{new} − SFR_{old}) × [[n|360]] × NP", "Z = discount factors for the remaining payments only. n = days in the period; 360 for annual periods.");
  mc(28, "To get SFR_{new} for the swap valuation, which discount factors do you use?", ["Only those of the remaining payments", "All discount factors in the table", "Only the first one"], 0, "If the table has more factors than payments left, ignore the extra ones.");
  fm(28, "Formula: FRA settlement value at T (the FRA is at h, m days loan) =", "(MRR_{h} − FRA_{0}) × [[m|360]] × NP", "Settlement is at T; the value at h is this amount discounted.");
  fm(28, "Formula: FRA settlement value at h =", "[[settlement value at T|1 + MRR_{h} × [[m|360]]]]");
  fm(28, "Formula: FRA value for the party that pays fixed (at date g) =", "[[(FRA_{g} − FRA_{0}) × t_{m}|1 + D_{T − g} × t_{T − g}]]", "The value for the party that pays floating is the negative of this.");
  tb(28, "Equity swap: two kinds of question", ["Question", "Calculation"], [
    ["Total value", "Receive equity, pay fixed: NP × [[Index_{1}|Index_{0}]] − (Σ Z × coupon + Z_{last} × NP)"],
    ["Total value", "Receive fixed, pay equity: (Σ Z × coupon + Z_{last} × NP) − NP × [[Index_{1}|Index_{0}]]"],
    ["Cash flow of one quarter", "NP × fixed % − NP × equity return % (divide annual fixed % by 4)"]],
    "If the coupon % is not given, use the discount factors to find the swap fixed rate first.");
  tb(28, "Currency swap: keep this order", ["Step", "What to do"], [
    ["1", "Find the notional principal in each currency"],
    ["2", "Value the foreign currency leg: coupons plus final NP, each discounted with its discount factor, and add up"],
    ["3", "Value the own currency leg: next floating payment plus NP, discounted at MRR for the days remaining"],
    ["4", "Convert one leg at the current exchange rate and take the difference"]],
    "Coupon per period = rate ÷ 2 for semi-annual payments.");
  tb(28, "Dividend types", ["Type", "Meaning"], [
    ["Liquidating dividend", "The company sells assets and pays the cash out"],
    ["Scrip dividend", "Stock dividend"],
    ["Special dividend", "Cash dividend in excess of the regular dividend"]]);

  // ================= 29 Valuation of Contingent Claims =================
  tb(29, "Option Greek signs", ["", "Delta", "Gamma", "Vega", "Theta", "Rho"], [
    ["Long call", "+", "+", "+", "−", "+"],
    ["Short call", "−", "−", "−", "+", "−"],
    ["Long put", "−", "+", "+", "−", "−"],
    ["Short put", "+", "−", "−", "+", "+"]]);
  mc(29, "Which positions have negative gamma?", ["Short call and short put", "Long call and short put", "Long put and short call"], 0, "Long options have positive gamma; short options negative.");
  mc(29, "You hold a long stock position and want to hedge it with an option. You:", ["Buy a put", "Buy a call", "Sell a put"], 0, "Then pick the right Greek for the question.");
  mc(29, "Interest rates are expected to rise. The profitable position is:", ["A payer swap or a payer swaption", "A receiver swap or a receiver swaption", "A short payer swaption"], 0, "The payer pays the fixed rate and receives floating.");

  // ================= 5 Currency Exchange Rates =================
  fm(5, "Formula: mark-to-market value of a currency forward at time t =", "[[(FP_{t} − FP_{0}) × NP|1 + R_{price} × [[days remaining|360]]]]", "FP_{t} = the forward price now for the remaining term, FP_{0} = the price agreed earlier. Discount with the price currency rate.");
  mc(5, "In the mark-to-market value of a forward, the discount rate is:", ["The interest rate of the price currency", "The interest rate of the base currency", "The average of the two rates"], 0, "The settlement amount is in the price currency.");
  mc(5, "The interbank FX market is most liquid at which time and trade size?", ["8am to 11am ET, small amounts", "8am to 11am ET, big amounts", "Midnight ET, small amounts"], 0, "Both conditions together give the best liquidity.");
  mc(5, "For an all-in forward rate, which currency do you use?", ["The currency you will be buying", "The currency you will be selling", "Always the base currency"], 0, "Use the offer side for the currency you buy.");
  tb(5, "UIRP: sign of the interest rate difference", ["R_{price} − R_{base}", "What happens to the base currency"], [["Positive", "Base appreciates by the difference"], ["Negative", "Base depreciates by the difference"]], "Applied, the base currency investment generates a return equal to R_{base}.");
  mc(5, "Spot NZD/EUR is 1.5541, 1-year MRR is 0.53% for EUR and 3.39% for NZD. Under UIRP the EUR (base):", ["Appreciates by 2.86%", "Depreciates by 2.86%", "Appreciates by 3.92%"], 0, "3.39% − 0.53% = 2.86%, so a EUR investor in NZD earns about 0.53%.");
  tb(5, "Carry trade: JPY/EUR example", ["Terms", "Return formula"], [
    ["EUR terms (your base)", "[S_{0} × (1 + R_{JPY}) × [[1|S_{1}]]] − 1 − R_{EUR}"],
    ["JPY terms", "[S_{1} × (1 + R_{EUR}) × [[1|S_{0}]]] − 1 − R_{JPY}"]],
    "To get a cross rate, always use offer quotes only.");
  mc(5, "A country runs a consistent current account surplus. Its currency over time:", ["Appreciates", "Depreciates", "Stays constant"], 0, "A consistent deficit means the currency depreciates over time.");
  tb(5, "Currency crisis signals (CRRIB M2)", ["Letter", "Signal"], [
    ["C", "Capital inflows up (free capital movement market)"],
    ["R", "Reserves down"],
    ["R", "Real exchange rate overvalued"],
    ["I", "Inflation up"],
    ["B", "Banking stress up"],
    ["M2", "M2 / reserves increases quickly"]],
    "Also: exports and imports falling.");
  mc(5, "Which is a currency crisis signal?", ["Rising M2 relative to reserves", "Rising reserves", "An undervalued real exchange rate"], 0, "Reserves fall and the real exchange rate is overvalued before a crisis.");
  tb(5, "Mundell-Fleming model: what it evaluates", ["Variable", "Evaluated?"], [["Interest rate", "Yes"], ["Exchange rate", "Yes"], ["Inflation", "No"]], "It evaluates the short-term effect of monetary and fiscal policy.");
  tb(5, "Mundell-Fleming under flexible exchange rates", ["Policy", "Currency"], [["Expansionary monetary", "Depreciation"], ["Expansionary fiscal", "Appreciation"]],
    "Flexible regime: the exchange rate is determined by foreign supply and demand for the currency.");
  tb(5, "Mundell-Fleming: monetary / fiscal mix (E = expansionary, R = restrictive)", ["Monetary / fiscal", "High mobility (developed)", "Low mobility (emerging)"], [
    ["E / E", "Ambiguous", "Depreciation"],
    ["E / R", "Depreciation", "Ambiguous"],
    ["R / E", "Appreciation", "Ambiguous"],
    ["R / R", "Ambiguous", "Appreciation"]]);
  tb(5, "Fixed exchange rate regimes: pressure on the currency", ["Policy", "Pressure"], [
    ["Expansionary monetary", "Depreciation"],
    ["Restrictive monetary", "Appreciation"],
    ["Expansionary fiscal", "Depreciation"],
    ["Restrictive fiscal", "Appreciation"]],
    "Under a fixed regime the government decides the rate; these are only pressures. It cannot counter a depreciation if it lacks USD reserves.");
  mc(5, "The central bank wants to counter a depreciation under a fixed exchange rate regime but cannot because:", ["It lacks enough foreign reserves", "The rate is set by supply and demand", "Capital mobility is too low"], 0, "Defending a peg needs reserves.");
  tb(5, "Monetary approach to exchange rate determination", ["Model", "Key idea"], [
    ["Pure monetary model", "PPP holds constantly: an x% rise in money supply raises the price level x% and the currency depreciates x%"],
    ["Dornbusch overshooting model", "Prices are sticky, so there is no immediate price effect; the currency overshoots the long-run PPP level"]],
    "Fixed output; only monetary policy is considered.");
  tb(5, "Dornbusch overshooting: path of the exchange rate", ["Policy", "Path"], [
    ["Expansionary monetary", "Depreciates, then appreciates slowly"],
    ["Restrictive monetary", "Appreciates, then depreciates slowly"]]);
  mc(5, "Prices are sticky in which monetary exchange rate model?", ["Dornbusch overshooting model", "Pure monetary model", "Portfolio balance approach"], 0, "The pure monetary model holds PPP all the time.");
  tb(5, "Portfolio balance approach (fiscal policy, long run)", ["Step", "What happens"], [
    ["1", "A fiscal deficit means the government borrows from (foreign) investors"],
    ["2", "Investors compare the risk and return of holding the currency"],
    ["3", "Risk > return: they stop investing, so the currency depreciates"],
    ["4", "Risk < return: they keep investing"]]);
  mc(5, "A government runs a growing fiscal deficit. Investors judge the risk to be greater than the return. The currency:", ["Depreciates", "Appreciates", "Stays stable"], 0, "Portfolio balance approach: investors stop buying the government's debt.");
  mc(5, "Combining Mundell-Fleming and portfolio balance, the exchange rate after a fiscal expansion most likely:", ["Appreciates in the short term, then depreciates in the long term", "Depreciates in the short term, then appreciates in the long term", "Appreciates in both the short and long term"], 0, "Free cash flows first attract capital; later the fiscal deficit worries investors.");

  // ================= 6 Economic Growth =================
  fm(6, "Formula: growth in potential GDP =", "ΔY = ΔT + αΔK + (1 − α)ΔL", "T = technology (total factor productivity), α = capital's share of output.");
  fm(6, "Formula (neoclassical): sustainable growth rate of output per capita =", "[[θ|1 − α]]", "θ = technology growth; α = capital's share.");
  fm(6, "Formula (neoclassical): sustainable growth rate of output =", "[[θ|1 − α]] + ΔL", "The per capita formula is shorter because labour force growth drops out.");
  mc(6, "Which sustainable growth rate has the shorter formula?", ["Output per capita", "Total output", "Both are the same"], 0, "Per capita growth excludes the growth of the labour force.");
  mc(6, "The steady state growth rate of output equals:", ["TFP growth scaled by labour's share, plus labour force growth", "TFP growth scaled by capital's share, plus capital growth", "Capital growth minus labour force growth"], 0, "θ ÷ (1 − α) + ΔL.");
  fm(6, "Formula: in the steady state, α =", "[[r × K|Y]]", "α is the share of capital in output; (1 − α) is labour's contribution.");
  fm(6, "Formula: in the steady state, MPK = rental price of capital r, so r =", "[[α × Y|K]]", "MPK = marginal product of capital = marginal cost of capital.");
  mc(6, "A higher α means:", ["A bigger capital deepening effect", "A smaller capital deepening effect", "No capital deepening effect"], 0, "A developing country also gets a bigger capital deepening effect.");

  // ================= 10 Analysis of Financial Institutions =================
  tb(10, "Loan loss ratios", ["Ratio", "How to read it"], [
    ["Allowance for loan losses ÷ net loan charge-offs", "Increasing: cushion up; decreasing: cushion down"],
    ["Provision for loan losses ÷ net loan charge-offs", "Above 1: conservative; equal to 1: flat allowance; below 1: aggressive accounting"],
    ["Allowance for loan losses ÷ non-performing loans", "Increasing (above 1): sufficient provision; decreasing: not sufficient"]]);
  mc(10, "A bank's provision for loan losses ÷ net loan charge-offs is 0.8. This suggests:", ["Aggressive accounting", "Conservative accounting", "A flat allowance"], 0, "Below 1 is aggressive.");
  mc(10, "Allowance for loan losses ÷ non-performing loans is decreasing. The provision is:", ["Becoming insufficient", "Becoming more than sufficient", "Unaffected"], 0, "Rising or above 1 means sufficient.");
  mc(10, "Asked which bank has the better trading revenue as a contribution to total revenue, choose:", ["The lower figure", "The higher figure", "The same figure"], 0, "Trading revenue is volatile, so it is not sustainable.");
  mc(10, "When the yield curve inverts, a bank's net interest revenue:", ["Falls", "Rises", "Is unchanged"], 0, "It borrows short at higher rates and lends long at lower rates.");
  tb(10, "Asset quality ratios", ["Ratio", "If it increases", "If it decreases"], [["Liquid assets ÷ total assets", "Good", "Bad"], ["Loans ÷ total assets", "Bad", "Good"]]);
  tb(10, "Bank capital tiers", ["Tier", "Components"], [
    ["Common equity tier 1", "Common stock, additional paid-in capital, retained earnings, OCI, less intangibles and DTA"],
    ["Other tier 1", "Preferred stock with discretionary dividends"],
    ["Tier 2", "Convertible bonds"]]);
  mc(10, "Preferred stock with discretionary dividends counts as:", ["Other tier 1 capital", "Common equity tier 1", "Tier 2 capital"], 0, "Common equity tier 1 is common stock based.");
  mc(10, "Which item is deducted from common equity tier 1?", ["Intangibles", "Retained earnings", "Additional paid-in capital"], 0, "Deferred tax assets are deducted as well.");
  tb(10, "P&C insurance cycle", ["Stage", "What follows"], [
    ["High competition: new businesses suffer (soft period)", "Capital base shrinks"],
    ["Shrinking capital base", "Reduced competition, healthy prices (hard pricing)"],
    ["Hard pricing", "Attracts new businesses"],
    ["New businesses start to increase competition", "Back to a soft period"]]);
  mc(10, "Reduced competition and healthy prices in the P&C insurance cycle is called:", ["Hard pricing", "Soft pricing", "A shrinking capital base"], 0, "Hard pricing follows the shrinking capital base.");
  mc(10, "Which insurers mainly do international (cross-border) business?", ["Reinsurers", "Life and health insurers", "P&C insurers"], 0, "Life, health and P&C insurers do little cross-border business.");
  mc(10, "Maturity transformation means a bank:", ["Borrows on shorter terms than it lends", "Borrows on longer terms than it lends", "Lends and borrows on the same terms"], 0, "It creates value by lending at a higher rate.");

  // ================= 8 Employee Compensation =================
  fm(8, "Formula: net pension asset or liability =", "ending plan assets − ending PBO");
  tb(8, "Roll-forward of plan assets and PBO", ["Plan assets", "PBO"], [
    ["Beginning plan assets", "Beginning PBO"],
    ["+ employer contributions", "+ service cost"],
    ["+ actual return on plan assets", "+ interest cost"],
    ["− benefits paid", "+ actuarial losses (− gains) − benefits paid"],
    ["Ending plan assets", "Ending PBO"]],
    "Your notes wrote employee contribution and actuarial gains. The employer contributes to the plan, and actuarial losses increase the PBO.");
  fm(8, "Formula: interest cost under US GAAP =", "beginning PBO × discount rate");
  fm(8, "Formula: interest under IFRS =", "beginning funded status × discount rate", "Positive = net interest income; negative = net interest expense.");
  mc(8, "Under IFRS, net interest on an underfunded plan (negative funded status) is:", ["Net interest expense", "Net interest income", "Zero"], 0, "Funded status = plan assets − PBO.");
  tb(8, "Pension costs in the income statement", ["", "IFRS", "US GAAP"], [
    ["Service cost", "Current and past", "Current only"],
    ["Interest", "Interest cost on funded status", "Interest cost"],
    ["Expected return on plan assets", "Not deducted separately", "Deducted"]]);
  mc(8, "Past service cost is part of the service cost recognised in income under:", ["IFRS", "US GAAP", "Both"], 0, "US GAAP recognises only current service cost in the cost.");
  fm(8, "Formula: RSU expense for a year =", "(number of RSUs vested × FV) − (number of RSUs forfeited × FV)", "Vested and forfeited units may have different fair values, so check each.");
  mc(8, "RSUs add to the basic shares of a year by:", ["The number of RSUs that vested that year", "The number of RSUs granted that year", "The number of unvested RSUs"], 0, "Vested RSUs have been converted into common shares.");
  tb(8, "Windfall and shortfall", ["", "Settlement-date price vs grant-date value", "Tax deduction", "Result"], [
    ["Windfall", "Higher", "Larger", "Tax lower than expected"],
    ["Shortfall", "Lower", "Smaller", "Tax higher than expected"]]);
  fm(8, "Formula: tax effect amount =", "[units vested × (settlement price − grant-date value)] × tax rate", "Positive = windfall; negative = shortfall.");
  tb(8, "Where the windfall or shortfall goes", ["", "Windfall", "Shortfall"], [
    ["US GAAP", "Reduces income tax expense", "Increases income tax expense"],
    ["IFRS", "Equity", "Equity"]]);
  tb(8, "Effect on the effective tax rate", ["", "US GAAP", "IFRS", "IFRS vs US GAAP"], [
    ["Windfall", "↓", "No effect", "IFRS higher"],
    ["Shortfall", "↑", "No effect", "IFRS lower"]],
    "Under IFRS the windfall or shortfall goes straight to equity, so the tax rate is not affected.");
  fm(8, "Formula: diluted shares (treasury stock method with stock grants) =", "basic shares + potentially dilutive shares − [[cash proceeds + average unrecognised expense|average share price]]");
  fm(8, "Formula: average unrecognised compensation expense =", "[[unrecognised expense at t = 0 + unrecognised expense at t = 1|2]]");
  fm(8, "Formula: cash proceeds from options =", "number of options × exercise price", "RSUs and stock grants have zero cash proceeds.");
  mc(8, "Potentially dilutive shares include:", ["Unvested RSUs and in-the-money options", "All options, whether in or out of the money", "Vested RSUs only"], 0, "Out-of-the-money options are antidilutive.");
  tb(8, "Stock option inputs, from the company's point of view", ["Change", "Option value", "Result for the company"], [
    ["Higher risk-free rate", "↑", "Bad"],
    ["Higher expected life", "↑", "Bad"],
    ["Higher dividend yield", "↓", "Good"]],
    "A higher option value means a higher compensation expense.");

  // ================= 18 Discounted Dividend Valuation =================
  mc(18, "The payout ratio can be written as:", ["DPS ÷ EPS", "EPS ÷ DPS", "1 + b"], 0, "b is the retention ratio and 1 − b is the payout ratio.");
  fm(18, "Formula: preferred stock value =", "[[D_{0}|r_{e}]] = [[D_{0}|ERP + R_{f}]]", "Check whether the given rate is r_{e} or only the equity risk premium. Never use the ERP on its own as the required return.");
  mc(18, "A question gives the equity risk premium and the risk-free rate (beta = 1). To discount the preferred dividend you use:", ["R_{f} + ERP", "ERP alone", "R_{f} alone"], 0, "The required rate of return, not the risk premium.");

  // ================= 19 Free Cash Flow Valuation =================
  fm(19, "Formula: ΔWC =", "Δ current assets − Δ current liabilities", "Exclude cash and cash equivalents.");
  fm(19, "Formula: FCFE from net income (DR = debt ratio) =", "NI − (1 − DR)(FCInv − Depn) − (1 − DR)(WCInv)", "Your notes show 1 − [...] with a minus inside the bracket. It is NI, and both reinvestment terms are subtracted.");
  mc(19, "FCFE is preferred to DDM when:", ["Dividends differ greatly from FCFE", "Dividends equal FCFE", "The firm pays no dividend and never will"], 0, "FCFE shows the ability to pay dividends; if dividends differ, use FCFE.");

  // ================= 21 Residual Income Valuation =================
  fm(21, "Formula: residual income =", "net income − r_{e} × (beginning amount of equity)", "Always use the beginning equity.");

  // ================= 22 Private Company Valuation =================
  fm(22, "Formula: discount for lack of control (DLOC) =", "1 − ( [[1|1 + control premium]] )");
  fm(22, "Formula: total discount =", "1 − (1 − DLOC)(1 − DLOM)");
  tb(22, "Factors affecting the DLOM", ["Factor", "DLOM"], [
    ["Impending IPO or firm sale", "↓"],
    ["Restrictions on selling shares", "↑"],
    ["Large pool of buyers", "↓"],
    ["Greater ownership concentration", "↑"]]);
  mc(22, "An impending IPO or firm sale makes the DLOM:", ["Lower", "Higher", "Unchanged"], 0, "The shares become easier to sell.");
  mc(22, "Which factor increases the DLOM?", ["Restrictions on selling shares", "A large pool of buyers", "An impending IPO"], 0, "Less marketability means a higher discount.");
  tb(22, "Methods of estimating the DLOM", ["Method", "Detail"], [
    ["Private vs public shares", "Compare private shares to public shares"],
    ["Pre-IPO vs post-IPO", "Compare the price before and after the IPO"],
    ["Public company option", "[[at-the-money put option value|stock price]]"]]);
  fm(22, "Formula: reinvestment rate b =", "[[g|WACC]]", "Your note. In general b = g ÷ the return on new investment; the two are equal when that return equals WACC.");
  fm(22, "Formula: value of the firm (private firm, constant growth) =", "[[EBIT(1 − T)(1 − b)|WACC − g]]");

  // ================= 30 Commodities and Commodity Derivatives =================
  tb(30, "Convenience yield and storage cost", ["Condition", "Curve", "Inventory"], [
    ["Convenience yield > storage cost", "Backwardation", "Falls"],
    ["Convenience yield < storage cost", "Contango", "Rises"]]);
  mc(30, "Convenience yield is below storage cost. The futures curve is in:", ["Contango", "Backwardation", "Neither"], 0, "Inventory builds up.");

  // ================= 32 Real Estate through Publicly Traded Securities =================
  mc(32, "NAVPS of a REIT is estimated with:", ["Direct capitalisation", "Depreciated historical cost", "Book value of equity"], 0, "Depreciated historical cost is not used.");
  mc(32, "A REIT has high leverage and trades at a discount to NAVPS. Refinancing its maturing debt is likely to be:", ["Difficult", "Easy", "Unaffected"], 0, "It cannot easily raise equity or sell assets at a good price.");

  // ================= 33 Hedge Fund Strategies =================
  tb(33, "Short strategies", ["Strategy", "Positions"], [
    ["Dedicated short", "Only short positions: 60% to 120% short, the rest in cash"],
    ["Short-biased", "Short and long positions: net short 30% to 60%"]],
    "Both trade single equities (individual stocks), not indices.");
  mc(33, "A dedicated short fund holds:", ["Only short positions", "Short and long positions", "Only index futures"], 0, "A short-biased fund holds both.");
  tb(33, "Life settlements: what the buyer wants", ["Characteristic", "Wanted"], [
    ["Purchase price", "Low"],
    ["Premium payments", "Low"],
    ["Insured's life", "Dies earlier than expected"]],
    "Your notes wrote low surrender value; the textbook says low purchase price.");

  // ================= 23 Term Structure and Interest Rate Dynamics =================
  fm(23, "Formula: expanded forward rate formula, (1 + S_n)^n =", "(1 + S_1)(1 + f_{1,1})(1 + f_{2,1})(1 + f_{3,1}) ... (1 + f_{n−1,1})");
  fm(23, "Formula: swap spread =", "swap rate − government (on-the-run) bond yield of the same maturity", "The first-page note wrote floating minus fixed; the textbook definition is swap rate minus government yield.");
  mc(23, "Swap spread is measured against which government yield?", ["On-the-run yield of the same maturity", "Off-the-run yield of the same maturity", "The average of the on- and off-the-run yields"], 0, "The swap spread is the swap rate over the on-the-run (most recently issued) government bond of the same maturity.");
  tb(23, "Projected spot curve vs current forward curve", ["Projected spot curve vs current forward curve", "Valuation", "Action"], [["Above the forward curve", "Overvalued", "Sell"], ["Below the forward curve", "Undervalued", "Buy"]]);
  mc(23, "Your projected spot curve is below the current forward curve. The bond is:", ["Undervalued: buy", "Overvalued: sell", "Fairly valued: hold"], 0, "Lower future spot rates than the forward rates the market uses means the market discounts too heavily, so the price is too low.");
  fm(23, "Formula: annual return from rolling down the yield curve (H = years held) =", "( [[PV from sell year|PV from buy year]] )^(1/H) − 1", "PV (buy) = 100 ÷ (1 + spot_n,buy + spread_n,buy)^n_buy. PV (sell) = 100 ÷ (1 + spot_n,sell + spread_n,sell)^n_sell. Use the spread only if the question gives one.");
  mc(23, "In the rolling down return formula, the exponent 1/H uses H =", ["The number of years you hold the security", "The maturity of the bond you buy", "The maturity of the bond at the sale date"], 0, "H is the holding period in years. A 6-year bond held 5 years uses 1/5 = 0.2.");
  mc(23, "Buy a 4-year zero and sell it after 2 years. The sale price is the PV of a bond with maturity:", ["2 years, priced at the 2-year rate", "4 years, priced at the 4-year rate", "6 years, priced at the 6-year rate"], 0, "After 2 years the 4-year bond has 2 years left, so it is priced on the 2-year part of the (unchanged) curve.");
  mc(23, "Bootstrapping is a process of:", ["Forward substitution only", "Backward substitution only", "Both forward and backward substitution"], 0, "Spot rates are solved one at a time from the shortest maturity to the longest.");
  mc(23, "Curve move shown (blue line before, red after):", ["Bullish steepening", "Bearish flattening", "Bullish flattening"], 0, "Both yields fall, but short-term yields fall more, so the curve steepens.", "yc-bullstp");
  mc(23, "Curve move shown (blue line before, red after):", ["Bearish flattening", "Bullish steepening", "Bullish flattening"], 0, "Both yields rise, but short-term yields rise more, so the curve flattens.", "yc-bearflat");
  mc(23, "Curve move shown (blue line before, red after):", ["Bullish flattening", "Bearish flattening", "Bullish steepening"], 0, "Both yields fall, but long-term yields fall more, so the curve flattens.", "yc-bullflat");
  tb(23, "Yield curve moves and the situation they usually go with", ["Move", "Usual situation"], [["Bullish steepening", "Recession"], ["Bearish flattening", "Expansion"], ["Bullish flattening", "Flight to safety (quality)"]]);
  mc(23, "Flight to quality is most often associated with:", ["Bullish flattening", "Bearish flattening", "Bullish steepening"], 0, "Long-term yields fall by more than short-term yields; a barbell with extended duration is the usual response.");
  tb(23, "Theories of the term structure", ["Theory", "Key idea"], [
    ["Unbiased / pure expectations", "No premium; long-term rates are the average of expected short-term rates (risk-free assets only)"],
    ["Local expectations", "Short holding period: no difference in return; long holding period: risk premium"],
    ["Liquidity preference", "Premium increases with maturity"],
    ["Segmented markets", "Investors do not move; they hold only their own maturity"],
    ["Preferred habitat", "Has a preferred maturity but moves if paid extra"]]);
  mc(23, "Which theory says investors stay in their own maturity segment even for extra profit?", ["Segmented markets", "Preferred habitat", "Local expectations"], 0, "Preferred habitat investors will move maturity for compensation; segmented market investors will not.");
  mc(23, "Liquidity preference theory says the premium:", ["Increases with maturity", "Is zero for all maturities", "Decreases with maturity"], 0, "Investors want more compensation for longer maturities (more interest rate risk).");
  mc(23, "Which is NOT an assumption behind the yield to maturity?", ["Coupons earn the risk-free rate", "The bond is held until maturity", "No default occurs"], 0, "YTM assumes coupons are reinvested at the YTM itself.");
  mc(23, "If coupons are reinvested at a rate below the YTM, the realized return is:", ["Likely below the YTM", "Likely above the YTM", "Exactly the YTM"], 0, "The YTM assumes reinvestment at the YTM; a lower reinvestment rate lowers the realized return.");
  mc(23, "In countries with low-liquidity government bond markets, the better benchmark is the:", ["Swap curve", "Government spot curve", "Corporate par curve"], 0, "An active swap market gives more points for a curve when government bonds are illiquid.");
  tb(23, "Spreads and related risks", ["Spread", "Definition", "What it shows"], [
    ["TED spread", "MRR − T-bill rate (same maturity)", "Liquidity and credit risk of the banking sector; economy-wide, not one government bond"],
    ["Swap spread", "Swap rate − treasury (government) yield", "How much the swap rate exceeds the government bond yield"],
    ["I-spread", "Yield on bond − swap rate", "How much a credit-risky bond exceeds the swap rate"],
    ["Z-spread", "Constant spread added to each spot rate so PV of all payments = market price", "Credit and liquidity compensation using the whole spot curve"],
    ["MRR–OIS spread", "MRR − OIS rate", "Liquidity and credit risk of the banking system"],
    ["SOFR", "Secured overnight financing rate", "Barometer of the repo market"]]);
  mc(23, "The MRR–OIS spread is considered an indicator of:", ["Risk and liquidity of money market securities", "Credit risk of a single corporate bond", "The slope of the government yield curve"], 0, "OIS is almost risk free; MRR carries bank credit and liquidity risk.");
  mc(23, "The TED spread is:", ["MRR − T-bill rate of the same maturity", "Swap rate − government yield", "Yield on bond − swap rate"], 0, "TED = 3-month MRR − 3-month T-bill rate.");
  mc(23, "I-spread is:", ["Yield on the bond − swap rate", "Swap rate − government yield", "MRR − OIS rate"], 0, "I-spread measures a credit-risky bond over the swap curve.");
  mc(23, "SOFR is a rate for the:", ["Repo market, secured overnight", "Unsecured interbank lending, overnight", "Treasury bill auctions, weekly"], 0, "Secured overnight financing rate, collateralized by Treasuries.");
  fm(23, "Formula: forward price F(j,k) in terms of the forward rate f(j,k) =", "[[1|(1 + f(j,k))^k]]");
  fm(23, "Formula: interpolated yield for maturity m_i between a shorter maturity m_s and a longer maturity m_l =", "y_s + [[y_l − y_s|m_l − m_s]] × (m_i − m_s)", "Check that the result lies between y_s and y_l.");
  mc(23, "Interpolating a yield for 3.86 years uses which two maturities?", ["3 years and 4 years", "2 years and 5 years", "4 years and 5 years"], 0, "Use the maturities on each side of 3.86; the weight on the longer one is 0.86.");
  tb(23, "Sources of rate volatility", ["Rate", "Mostly linked to"], [["Short-term rate volatility", "Monetary policy (more volatile)"], ["Long-term rate volatility", "The economy and inflation"]]);

  // ================= 24 Arbitrage-Free Valuation Framework =================
  mc(24, "A question says a bond is mispriced and gives the par curve, the coupon and N. The first step is to:", ["Bootstrap the par curve into a spot curve", "Discount the cash flows at the bond's YTM", "Use the forward rates only"], 0, "Spot rates are needed to discount each cash flow separately.");
  mc(24, "After finding the spot curve, the next step is to:", ["Discount cash flows at spot rates", "Average the spot rates", "Solve for the YTM first"], 0, "PV = Σ cash flow ÷ (1 + spot)^t.");
  mc(24, "With N, FV, PV and PMT known, the calculator gives:", ["The YTM", "The last spot rate", "The last forward rate"], 0, "The remaining input I/Y is the yield to maturity.");
  mc(24, "If the bond is mispriced, you find the answer by comparing:", ["PV from spot rates vs the market price", "YTM vs the coupon rate", "One forward rate vs another"], 0, "Value below price: overpriced; value above price: underpriced.");
  tb(24, "Term structure models: equilibrium vs arbitrage-free", ["Type", "Models", "Based on"], [
    ["Equilibrium", "CIR, Vasicek", "Macroeconomic (fundamental) variables"],
    ["Arbitrage-free", "Ho–Lee, KWF", "Observed market prices; benchmark bonds assumed correctly priced"]]);
  tb(24, "Term structure models: dynamics (dr_t) and features", ["Model", "Dynamics", "Feature"], [
    ["CIR", "dr = a(b − r)dt + σ√r dz", "Volatility rises with the rate; rate cannot be negative"],
    ["Vasicek", "dr = a(b − r)dt + σ dz", "Constant volatility; rate can be negative"],
    ["Ho–Lee", "dr = θ dt + σ dz", "Constant volatility; no mean reversion"],
    ["KWF", "d ln(r) = θ dt + σ dz", "Like Ho–Lee but for ln(r); constant volatility"]]);
  mc(24, "Which type of term structure model needs fewer parameters to estimate?", ["Equilibrium models", "Arbitrage-free models", "Both need the same number"], 0, "Arbitrage-free models allow time-varying parameters, so they have more parameters and fit the curve more precisely.");
  mc(24, "Which model assumes bonds are correctly priced (calibrated to market prices)?", ["Ho–Lee", "Vasicek", "CIR"], 0, "Arbitrage-free models (Ho–Lee, KWF) use market prices of a reference set of instruments.");
  mc(24, "Asset A costs 500 and pays 525 in one year; Asset B costs 1,000 and pays 1,100 (both risk free). The arbitrage is to:", ["Sell two units of A, buy one of B", "Buy two units of A, sell one of B", "Buy one unit of each"], 0, "B is cheap relative to A (10% vs 5% implied return). Sell 2A for 1,000, buy B: receive 1,100, pay 1,050.");
  mc(24, "If the YTM is lower, the bond price is:", ["Higher", "Lower", "Unchanged"], 0, "Price and yield move in opposite directions.");
  mc(24, "For an option-free bond, valuation with spot rates and valuation with a calibrated binomial tree give:", ["The same value whatever the volatility", "Different values; the tree is higher", "Different values; the tree is lower"], 0, "Volatility matters only when there is an embedded option.");
  fm(24, "Formula: pathwise value of a 3-year bond on one path (coupon C, face FV, rates S1, S2, S3 on the path) =", "[[C|(1 + S_1)]] + [[C|(1 + S_1)(1 + S_2)]] + [[FV + C|(1 + S_1)(1 + S_2)(1 + S_3)]]", "Each cash flow is discounted by the rates of that path, not by spot rates.");
  mc(24, "A zero-coupon yield curve is the same thing as the:", ["Spot rate curve", "Par curve", "Forward curve"], 0, "Zero-coupon yields are spot rates.");
  mc(24, "To value a 3-year bond on the tree, which columns of interest rates do you use?", ["t0, t1 and t2 only", "t0, t1, t2 and t3", "t1, t2 and t3"], 0, "The t3 column would discount a fourth-year cash flow, so it is not needed.", "tree3");
  mc(24, "Calibrating the interest rate tree needs a volatility assumption, an interest rate model and:", ["The observed market value of the benchmark bond", "The market value of the bond being valued", "The yield to maturity of the bond being valued"], 0, "The tree is fitted to benchmark bonds, then used to value the target bond.");
  mc(24, "The interest rate movements on a binomial tree are:", ["Random (stochastic)", "Predictable (deterministic)", "Constant (fixed)"], 0, "The interest rate factors are random; the tree captures this with up and down moves.");

  // ================= 25 Bonds with Embedded Options =================
  fm(25, "Formula: conversion price =", "[[par (issue) value of the convertible bond|conversion ratio]]");
  fm(25, "Formula: conversion value =", "market price of the stock × conversion ratio");
  fm(25, "Formula: minimum value of a convertible bond =", "max(conversion value, straight value), where straight value = option-free value of the bond");
  mc(25, "When the stock price falls by x%, the convertible bond price falls by:", ["Less than x%", "The same x%", "More than x%"], 0, "The straight value is a floor under the convertible bond price.");
  tb(25, "Effect on option and bond values", ["", "Call", "Callable", "Put", "Putable"], [
    ["r ↑", "↓", "↓", "↑", "↓"], ["r ↓", "↑", "↑", "↓", "↑"],
    ["Volatility ↑", "↑", "↓", "↑", "↑"], ["Volatility ↓", "↓", "↑", "↓", "↓"],
    ["Yield curve flatter", "↑", "↓", "↓", "↓"], ["Yield curve steeper", "↓", "↑", "↑", "↑"]],
    "Callable bond = straight − call; putable bond = straight + put. The bond columns show the net direction.");
  tb(25, "OAS and volatility", ["", "OAS (callable bond)", "OAS (putable bond)"], [["Volatility ↑", "↓", "↑"], ["Volatility ↓", "↑", "↓"]]);
  mc(25, "Rank the prices of otherwise identical bonds:", ["Callable < straight < putable", "Straight < callable < putable", "Putable < straight < callable"], 0, "Investor-held options add value, the issuer's call subtracts value.");
  mc(25, "OAS can be compared across bonds only if they have the same:", ["Credit rating", "Coupon", "Maturity date"], 0, "A larger OAS reflects compensation for credit risk as well.");
  mc(25, "For two bonds with the same credit rating, the one with the larger OAS is:", ["Underpriced (cheap)", "Overpriced (rich)", "Fairly priced"], 0, "Higher OAS means more spread over the benchmark for the same risk.");
  fm(25, "Formula: OAS is the constant spread that, added to every one-period forward rate on the tree, makes ... =", "the present value of the bond's cash flows (model value) equal to the bond's market price");
  mc(25, "A floating-rate coupon is the one-year reference rate with a cap of 5% and a floor of 4%. At a node where the rate is 6.78% the coupon is:", ["5%", "6.78%", "4%"], 0, "The cap limits the coupon: coupon = min(rate, cap).");
  mc(25, "Same bond, node where the rate is 3.945%. The coupon is:", ["4%", "3.945%", "5%"], 0, "The floor stops the coupon from going below 4%: coupon = max(rate, floor).");
  mc(25, "A cap on a floating-rate coupon is, for the investor:", ["Unfavourable, it limits the coupon", "Favourable, it adds to the coupon", "Neutral, it has no effect"], 0, "It limits the coupon when rates rise; it benefits the issuer.");
  fm(25, "Formula: convertible bond (non-callable) =", "straight bond + value of the call option on the stock");
  fm(25, "Formula: callable convertible bond =", "straight bond + value of the call option on the stock − value of the issuer call option");
  fm(25, "Formula: callable and putable convertible bond =", "straight bond + call option on the stock − issuer call option + investor put option");
  tb(25, "Convertible bond: whose risk and return it carries", ["Condition", "Risk and return"], [
    ["Conversion price > market share price", "Bond: interest rate and credit spread"],
    ["Conversion price < market share price", "Stock: stock price movement"],
    ["Conversion price = market share price", "Hybrid"]]);
  mc(25, "The effective duration of a floating-rate bond is close to:", ["The time to the next reset", "Its time to maturity", "Zero, always"], 0, "The coupon resets, so only the time until the next reset matters.");
  mc(25, "A floating-rate bond resets annually. Its effective duration is about:", ["1", "The years to maturity", "0.5"], 0, "Time to next reset = 1 year at most.");
  fm(25, "Formula: market conversion price =", "[[market price of the convertible bond|conversion ratio]]");
  fm(25, "Formula: market conversion premium per share =", "market conversion price − stock market price of the share");
  fm(25, "Formula: market conversion premium ratio =", "[[market conversion premium per share|market price of common stock]]");
  fm(25, "Formula: premium over straight value =", "( [[market price of the convertible bond|straight value]] ) − 1");
  mc(25, "If the actual dividend is higher than the threshold dividend, the conversion price:", ["Adjusted down, conversion ratio up", "Adjusted up, conversion ratio down", "Not adjusted at all"], 0, "The adjustment compensates holders who give up the extra dividend, so more shares per bond.");
  tb(25, "Effective duration and convexity vs interest rates", ["", "Rates ↑", "Rates ↓"], [
    ["Straight: duration", "↓", "↑"], ["Straight: convexity", "+ve", "+ve"],
    ["Callable: duration", "↑ (= straight)", "↓ (< straight)"], ["Callable: convexity", "+ve", "↓ (can turn −ve)"],
    ["Putable: duration", "↓ (< straight)", "↑ (= straight)"], ["Putable: convexity", "+ve", "+ve"]],
    "= straight: about the same as the straight bond's duration; < straight: lower.");
  tb(25, "One-sided duration", ["Bond", "Up vs down duration"], [["Straight", "Up = down"], ["Callable", "Up > down"], ["Putable", "Up < down"]]);
  tb(25, "Key rate duration: where it is largest", ["Bond", "Largest key rate duration at"], [["Option-free", "Maturity"], ["Callable or putable", "Exercise date"]],
    "For a callable or putable bond with the option in the money.");
  mc(25, "Share price rises from S0 to S1, still below the conversion price (see chart). The convertible bond price:", ["Rises, but by less than the share price", "Rises by the same % as the share price", "Falls"], 0, "The option is still out of the money, so the straight bond part moves little.", "conv");
  mc(25, "Share price rises from S0 to S2, above the conversion price (see chart). The convertible bond:", ["Tracks the share price closely", "Rises much less than the stock", "Falls as the stock rises"], 0, "In the money, the minimum value is the conversion value, so the bond follows the share.", "conv");
  mc(25, "A convertible bond is a straight bond plus:", ["A call option on the common stock", "A put option on the common stock", "A put option on the bond"], 0, "The conversion option is a call on the issuer's stock.");

  fm(25, "Formula: convertible bond, callable (issuer can call the bond) =", "straight bond + value of call option on the stock − value of call option on the bond", "The issuer's call on the bond belongs to the issuer, so it reduces the value to the holder.");
  fm(25, "Formula: convertible bond that is both callable and putable =", "straight bond + value of call option on the stock − value of call option on the bond + value of put option on the bond");
  mc(25, "Which option is SUBTRACTED from the value of a callable convertible bond?", ["The issuer's call option on the bond", "The holder's call option on the stock", "The holder's put option on the bond"], 0, "Holder-owned options (stock call, bond put) are added; the issuer-owned bond call is subtracted.");

  // ================= 26 Credit Analysis Models =================
  fm(26, "Formula: fair value of a risky bond =", "VND − CVA", "VND = value assuming no default, from the tree without any default adjustment.");
  fm(26, "Formula: credit spread (from a credit value analysis) =", "YTM (credit risky bond) − YTM (risk-free bond, from VND)", "Credit risky bond: price = VND − CVA. Risk-free bond: price = VND.");
  mc(26, "To get the YTM of the risk-free bond for the credit spread, which price do you use?", ["The VND (value assuming no default)", "The market value", "The fair value (VND − CVA)"], 0, "The market value is often given to confuse you. Use VND, FV, coupon (PMT) and N to solve the YTM on the calculator.");
  tb(26, "Current price of the bond vs VND − CVA", ["Current price of the bond", "Valuation"], [["Above VND − CVA", "Overvalued"], ["Below VND − CVA", "Undervalued"]]);
  mc(26, "The market price of a bond is 98 and its VND − CVA is 96.3. The bond is:", ["Overvalued", "Undervalued", "Fairly valued"], 0, "The price is above the model fair value.");
  fm(26, "Formula: expected exposure at each date in the credit value analysis tree =", "Σ (node value × node probability) + coupon", "Add the coupon once per date. At maturity the exposure is par plus the last coupon.");
  fm(26, "Formula: risk-neutral probability of default p* (one period), price of 100 =", "100 = [[ (expected payment without default) × (1 − p*) + (expected payment with default) × p* | 1 + r ]]", "Solve for p*. r is the risk-free rate.");
  fm(26, "Formula: expected future value of a bond with a chance of default =", "(principal + coupon) × (% it makes the full payment) + (principal + coupon) × recovery rate × (% default)");
  mc(26, "A decrease in the risk-neutral probability of default makes the credit spread:", ["Decrease", "Increase", "Stay the same"], 0, "A lower probability of default lowers the CVA, raises the fair value and lowers the YTM and credit spread.");
  mc(26, "Besides credit risk, the observed spread over a risk-free bond in practice also includes:", ["Liquidity and tax effects", "Only the recovery rate", "Only inflation compensation"], 0, "Observed spread: liquidity, tax and credit.");
  mc(26, "Which statement is correct about default risk premium?", ["Actual rates exclude the premium, risk-neutral include it", "Actual rates include the premium, risk-neutral exclude it", "Both include the premium"], 0, "Using the actual default rate in the model understates the credit risk priced by the market.");
  tb(26, "Hazard rate: survival and default probabilities", ["", "Hazard rate constant (h)", "Hazard rate varies (h_{t})"], [
    ["PS_{t}", "(1 − h)^{t}", "(1 − h_{1})(1 − h_{2})...(1 − h_{t})"],
    ["PD_{t}", "PS_{t−1} × h", "PS_{t−1} × h_{t}"],
    ["PS_{0}", "1", "1"],
    ["PD_{1}", "1 × h", "1 × h_{1}"]],
    "Your notebook wrote the varying PS as 1 − (1 − h_{1})...(1 − h_{n}). That is the cumulative probability of default; PS has no leading 1 −.");
  mc(26, "Hazard rate is the same as:", ["The conditional probability of default", "The unconditional probability of default in year t", "The cumulative probability of default"], 0, "Conditional on surviving to the start of the period.");
  mc(26, "In real life the hazard rate:", ["Changes every year", "Is constant for ever", "Is zero in year 1"], 0, "Many textbook cases use a constant hazard rate for simplicity.");
  mc(26, "A bond has a constant hazard rate of 2%. The probability of default in year 2 is:", ["0.98 × 2% = 1.96%", "2%", "0.98² × 2% = 1.92%"], 0, "PD_{2} = PS_{1} × h = 0.98 × 2%.");
  fm(26, "Formula: expected return with credit rating migration over one year (bond at par, YTM = coupon) =", "coupon − Σ [ modified duration × (new spread − original spread) × probability ]", "If a YTM is given, use the YTM in place of the coupon.");
  mc(26, "In the migration table, a rating upgrade (spread narrows) adds what to the expected return?", ["A positive price change", "A negative price change", "No change"], 0, "Upgrade = positive, downgrade = negative.");
  mc(26, "Credit rating migration typically has what effect on the expected return?", ["Reduces it", "Increases it", "No effect"], 0, "Two reasons: the probabilities are skewed toward downgrades, and spreads widen far more on downgrades than they narrow on upgrades.");
  tb(26, "Why migration reduces the expected return", ["Reason", "Detail"], [["Probability distribution", "Skewed negatively toward downgrades"], ["Spread change", "Increase in credit spread for downgrades is much larger than the decrease for upgrades"]]);
  tb(26, "Credit scoring", ["Factor", "High credit score means"], [["Credit history", "Longer"], ["Delinquencies", "Absence of delinquencies"], ["Utilisation", "Lower"], ["Credit inquiries", "Fewer"], ["Types of credit used", "Wider variety"]],
    "Credit scoring is for individuals and small businesses.");
  tb(26, "Credit rating", ["Item", "Detail"], [
    ["Applies to", "Corporate debt, ABS, government / quasi-government debt"],
    ["Rates", "Senior unsecured debt"],
    ["Other classes", "Notching"],
    ["Higher loss given default", "Lower seniority"]],
    "Notching: a bond that ranks lower in the capital structure has its rating lowered by one step (or more).");
  mc(26, "Notching adjusts the issuer rating for:", ["The priority of the claim", "The probability of default", "The bond's coupon rate"], 0, "Lower seniority means higher loss given default, so the bond rating is notched down.");
  tb(26, "Structural model (balance sheet + option pricing)", ["", "Detail"], [
    ["Strengths", "Provides an economic rationale for default and explains why it happens; uses option pricing models to value risky debt"],
    ["Weaknesses", "Complex balance sheets; assumes the company assets are traded in the market; burdensome to implement; measuring the default barrier can be challenging"]]);
  tb(26, "Reduced-form model (macroeconomic + company-specific data)", ["", "Detail"], [
    ["Input", "Default intensity = probability of default over the next time period, estimated with regression"],
    ["Strengths", "Does not assume company assets trade; default intensity can vary as company fundamentals and the economy change"],
    ["Disadvantages", "Does not explain why default happens; default is treated as a random event (a surprise), when that is never true"]]);
  mc(26, "In a structural model, equity is analogous to:", ["A call on the assets, strike = debt face value", "A put on the assets, strike = debt face value", "A call on the debt, strike = asset value"], 0, "Assets above the debt: equity holders keep the excess. Below: equity is worth zero (default).");
  mc(26, "Which model assumes that the company assets are traded in the market?", ["Structural model", "Reduced-form model", "Both"], 0, "A weakness of the structural model.");
  mc(26, "Which model estimates the default intensity using regression on macroeconomic and company-specific variables?", ["Reduced-form model", "Structural model", "Neither"], 0, "Reduced-form models use observable variables.");
  mc(26, "Which is a weakness of reduced-form models?", ["They do not explain why default happens", "They need the market value of company assets", "They need the default barrier"], 0, "Default is treated as a random event.");
  tb(26, "Credit analysis approach for an ABS asset pool", ["Asset pool", "Approach"], [
    ["Static book of loans", "Statistics-based"],
    ["Auto loans: granular, homogeneous, dynamic pool", "Portfolio-based"],
    ["Large, discrete, heterogeneous loans", "Loan-by-loan"]]);
  mc(26, "A dynamic pool of many small, similar auto loans calls for which approach?", ["Portfolio-based", "Statistics-based", "Loan-by-loan"], 0, "Granular and homogeneous means portfolio-based; static means statistics-based.");

  // ================= 27 Credit Default Swaps =================
  tb(27, "CDS position when the credit changes", ["Credit", "CDS position", "Credit exposure"], [["Credit improves", "Sell protection", "Long credit"], ["Credit deteriorates", "Buy protection", "Short credit"]]);
  mc(27, "You expect the credit quality of the reference entity to improve. You should:", ["Sell protection (long credit)", "Buy protection (short credit)", "Buy protection (long credit)"], 0, "The protection seller gains when the spread tightens.");
  mc(27, "Buying protection gives you what credit exposure?", ["Short credit", "Long credit", "No exposure"], 0, "You profit if the credit gets worse.");
  mc(27, "Upward sloping CDS curve (see chart): the trade in your notes is to:", ["Sell protection at A, buy protection at B", "Buy protection at A, sell protection at B", "Buy protection at both A and B"], 0, "Per the notebook: sell the short maturity, buy the long maturity on the upward sloping curve.", "cds-up");
  mc(27, "Flat CDS curve (see chart): the trade in your notes is to:", ["Buy protection at A, sell protection at B", "Sell protection at A, buy protection at B", "Sell protection at both A and B"], 0, "Per the notebook: buy the short maturity, sell the long maturity on the flat curve.", "cds-flat");
  tb(27, "Economy improves: high yield vs investment grade", ["Economy improves", "Position"], [["High yield", "Sell (protection)"], ["Investment grade", "Buy (protection)"]]);
  mc(27, "The economy improves. Which CDS trade does your note suggest?", ["Sell protection on high yield, buy protection on investment grade", "Buy protection on high yield, sell protection on investment grade", "Buy protection on both"], 0, "High yield spreads tighten more than investment grade spreads.");
  tb(27, "Bond spread vs CDS spread", ["", "Bond", "CDS"], [["Bond spread > CDS spread", "Buy", "Buy"], ["Bond spread < CDS spread", "Sell", "Sell"]], "Buying the CDS means buying protection.");
  mc(27, "Bond spread is greater than the CDS spread. The trade is to:", ["Buy the bond and buy protection", "Sell the bond and sell protection", "Buy the bond and sell protection"], 0, "The bond's yield is too high relative to the cost of protection.");
  fm(27, "Formula: bond spread =", "yield on the bond − MRR");
  fm(27, "Formula: CDS price per 100 par =", "100 − upfront premium");
  fm(27, "Formula: upfront premium =", "(credit spread − coupon) × duration");
  mc(27, "If the credit spread is above the CDS coupon, the CDS price per 100 par is:", ["Below 100", "Above 100", "Exactly 100"], 0, "The upfront premium is positive and is subtracted from 100.");
  tb(27, "Upfront premium: who pays and who receives", ["Trade", "Side I take", "Spread > coupon", "Spread < coupon"], [
    ["Open new: buy protection", "Buyer", "Pay", "Receive"],
    ["Close an existing seller position (buy protection to close)", "Buyer", "Pay", "Receive"],
    ["Open new: sell protection", "Seller", "Receive", "Pay"],
    ["Close an existing buyer position (sell protection to close)", "Seller", "Receive", "Pay"]],
    "Closing puts you on the opposite side of the position you hold. Spread > coupon: the buyer pays, the seller receives.");
  tb(27, "Gain or loss on an existing CDS position", ["My position", "Spread narrows (credit improves)", "Spread widens (credit worsens)"], [["Protection seller", "Gain", "Loss"], ["Protection buyer", "Loss", "Gain"]],
    "Gain/loss compares the current spread with the ORIGINAL spread. Paying or receiving the upfront premium compares the current spread with the COUPON.");
  mc(27, "You hold a protection seller position (coupon 5%, original spread 650 bps) and the spread is now 600 bps. If you close it today, you:", ["Pay an upfront premium and realize a gain", "Receive an upfront premium and realize a gain", "Pay an upfront premium and realize a loss"], 0, "Closing means buying protection; spread 600 > coupon 500, so you pay. The spread narrowed (650 to 600), so the seller gains.");
  mc(27, "A protection buyer enters a new CDS when the current spread (200 bps) is below the coupon (500 bps). The buyer:", ["Receives an upfront premium", "Pays an upfront premium", "Pays nothing"], 0, "Spread below coupon: the buyer receives and the seller pays.");
})();
