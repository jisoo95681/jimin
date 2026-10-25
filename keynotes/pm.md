# Portfolio Management: key notes

## Factor models
- Macro model: the intercept is the expected return; sensitivities don't change it.
- Active return = Σ (β_port – β_bench) × factor return + security selection. Watch negative × negative.
- APT arbitrage: zero net investment, zero factor sensitivity, positive return.

## Active management
- Δw* = (μ / σ²) × σ_A / (IC × √BR): σ_A up → bigger weights; IC up → smaller.
- E(R_A) = TC × IC × √BR × σ_A; IR = TC × IC × √BR. Constraints cut TC.
- IR = active return / active risk (vs Sharpe: risk-free rate and total risk). SR_P² = SR_B² + IR².

## Economics and markets
- Real GDP ≈ nominal – inflation. Recession → staples/defensives hold up, spreads widen.
- Potential GDP up → long-term equity returns up; actual below potential → inflation down.

## Risk
- VaR = (z × σ – μ) × value; daily: μ / 250, σ / √250. z 5% = 1.65, 1% = 2.33.
- Historical simulation can weight recent data more. Incremental VaR = effect of changing a position; conditional VaR = average loss beyond VaR.
- ETF holding cost = round-trip trading + spread + annual fee × months / 12.
- Backtest choice for downside control: positive skew, low kurtosis.

## Your traps
- Adding μ in VaR; where IC sits in the active-weight formula.
