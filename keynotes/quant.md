# Quantitative Methods: key notes

## Multiple regression and ML
- Residual assumptions: mean zero · constant variance (else heteroskedasticity) · **uncorrelated** across observations (else serial correlation) · normal. Also linearity and no multicollinearity among the X's.
- Slope and intercept act on the **dependent** variable (a 1-unit rise in X moves Y by b; Y = b0 when all X = 0). Plug each input in its own definition and sign ("3% below average" = –3).
- Output: R² = RSS/SST · multiple-R = √R² · adjusted R² < R² when k > 1 · SEE = √MSE = √[SSE/(n – k – 1)] · t test: |t| > critical t, df = n – k – 1.
- Effects: heteroskedasticity → SE too low → t too high · multicollinearity → SE too high → t too low, F not affected.
- ML: continuous target → supervised regression · categorical target → classification · no target → clustering / PCA. LASSO with λ = 0 is plain OLS (no regularization); trees are regularized by pruning. Deep learning = at least 2 hidden layers.

## Time series
- Covariance stationary = constant finite mean, variance and covariance with own lags. A trending price series usually isn't. Durbin–Watson below the critical value → positive serial correlation in the errors; it does not test stationarity.
- Dickey–Fuller null = **unit root** (non-stationary). Reject → stationary.
- Regressing two series is valid only if both are stationary, or both have unit roots **and** are cointegrated (Engle–Granger rejects a unit root in the residuals).
- One unit root only → invalid. Both unit roots, residual also unit root → spurious.
- AR(1) mean-reverting level = b0 / (1 – b1), only if |b1| < 1.
- Serially correlated residuals → add lags. ARCH: regress ε² on lagged ε²; significant slope → ARCH → use GLS.

## Big data (text)
- Feature selection: TF/DF prune the extremes (stop words and rare tokens); chi-square and **mutual information** keep class-specific tokens (MI 0 = equal across classes, → 1 = one class).
- TF-IDF = TF at the **sentence** level × IDF; IDF = log(1/DF). Useful sentiment tokens have intermediate TF.
- Feature engineering ≠ selection (N-grams, NER, parts of speech, number tokens).

## Your traps
- Cointegration: needs "reject only the residual test", not "fail to reject all".
- Lowest TF is noise, not signal.
