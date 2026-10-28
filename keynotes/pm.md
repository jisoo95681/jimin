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
- High equity risk premium ← equity returns positively correlated with consumption (poor hedge). Best hedge for bad consumption = short-dated default-free bonds.
- P/E up ← lower ERP, lower GDP volatility, less inflation uncertainty; expected inflation up → P/E down. Cyclical earnings lead the economy and rebound fastest.
- Commercial real estate: rent bond-like, value equity-like; discount rate = equity rate + liquidity premium; numerator = net rental income.
- Potential GDP up → long-term equity returns up; actual below potential → inflation down.

## Risk
- VaR = (z × σ – μ) × value; daily: μ / 250, σ / √250. z 5% = 1.65, 1% = 2.33.
- Historical simulation can weight recent data more. Incremental VaR = effect of changing a position; conditional VaR = average loss beyond VaR.
- Risk tools: stop-loss limit (loss trigger, liquidate) · position limit (cap on exposure size) · risk budgeting (top-down tracking error budgets). Relative VaR = ex-ante tracking error · surplus at risk = assets vs liabilities (pensions) · maximum drawdown = historical peak-to-trough.
- ETFs: tactical trading → the most liquid ETF (highest volume). Roles: market maker (secondary), authorized participant (creation/redemption), sponsor. ETN = unsecured issuer debt (credit risk); synthetic ETF = swaps (counterparty + settlement); leveraged/inverse = daily reset. Transition management = changing managers or allocations.
- ETF holding cost = round-trip trading + spread + annual fee × months / 12.
- Backtesting: survivorship bias from using today's index members (use point-in-time data). Sensitivity analysis = effect of changing the input distribution; bootstrapping = resampling. A flatter return density = higher SD, fatter tails.
- Backtest choice for downside control: positive skew, low kurtosis.

## Your traps
- Adding μ in VaR; where IC sits in the active-weight formula.
