# Quantitative Methods: key notes

## Time series
- Dickey–Fuller null = **unit root** (non-stationary). Reject → stationary.
- Regressing two series is valid only if both are stationary, or both have unit roots **and** are cointegrated (Engle–Granger rejects a unit root in the residuals).
- One unit root only → invalid. Both unit roots, residual also unit root → spurious.
- AR(1) mean-reverting level = b0 / (1 – b1), only if |b1| < 1.
- Serially correlated residuals → add lags. ARCH: regress ε² on lagged ε²; significant slope → ARCH → use GLS.

## Big data (text)
- Feature selection: TF/DF prune the extremes (stop words and rare tokens); chi-square and **mutual information** keep class-specific tokens (MI 0 = equal across classes, → 1 = one class).
- Feature engineering ≠ selection (N-grams, NER, parts of speech, number tokens).

## Your traps
- Cointegration: needs "reject only the residual test", not "fail to reject all".
- Lowest TF is noise, not signal.
