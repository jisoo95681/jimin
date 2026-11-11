# Practice set 8 (11 Nov, user request): the questions the user got wrong in Mocks 5-9 (Ethics excluded, those live in the key sessions), as very short
# vignettes that keep only the key words and the relationship behind the answer (no calculations). Names changed; every question has a hint.
# Sources: Mock 5 Q1, 9, 33, 36, 38, 40, 43, 44; Mock 6 Q2, 16, 19, 23, 25, 26, 31, 36, 40; Mock 7 Q12, 20, 23, 30, 31, 33, 38, 39, 41, 43, 44;
# Mock 8 Q1 (version the user sat), 6, 8, 10, 30, 32, 34; Mock 9 Q6, 9, 15, 25, 26, 28, 34, 40, 41, 43.
from lib import *
def Qh(q, correct, wrong, why, hl, rule):
    d = Q(q, correct, wrong, why); d['hint'] = dict(hl=hl, rule=rule); return d

add("Equity Valuation", """Rosa Varela values Aldeia S.A. on 1 January. She has the price, the earnings per share of the last four quarters, the analysts' EPS forecast for the next four quarters, and the average EPS of the last full business cycle.""", [
 Qh("Aldeia's trailing P/E, ignoring any business-cycle influence, is the price divided by:", "the EPS of the last four quarters.",
    ["the analysts' EPS forecast for the next four quarters.", "the average EPS of the last full business cycle."],
    "Trailing P/E = price ÷ EPS of the most recent four quarters. Forward (leading) P/E uses expected EPS; the cycle average gives a normalized P/E.",
    ["last four quarters", "ignoring any business-cycle influence"],
    "Trailing = last four quarters; forward = next four quarters; normalized = cycle average."),
])
add("Portfolio Management", """Lucas Mendes manages a government bond portfolio split into a short bucket and a long bucket. The mandate keeps each bucket between 40% and 60% of the portfolio. He expects yields to rise by 50 bp at all points along the yield curve.""", [
 Qh("To minimize his risk, Mendes should most likely:", "move money out of the long bucket into short maturities, but only until the long bucket reaches its 40% minimum.",
    ["move all of the long bucket into three-year bonds to avoid every rate risk, even below the 40% minimum.", "lengthen the duration of both buckets, because higher yields raise the income on longer bonds."],
    "Yields rising means prices fall, so shorten duration. The 40%–60% limit per bucket still has to be respected, so the shift stops at the limit.",
    ["expects yields to rise by 50 bp", "between 40% and 60%"],
    "Expect yields to rise → shorten duration, but stay inside the mandate limits."),
])
add("Economics", """Anke Thiessen reviews three ways in which current account and capital flows can move exchange rates: the flow supply/demand channel, the portfolio balance channel and the debt sustainability channel.""", [
 Qh("The mechanism that best explains the LONG-run equilibrium value of an exchange rate is the:", "debt sustainability channel: a deficit financed by growing external debt forces the currency to adjust.",
    ["flow supply/demand channel: the current flow of currency supply and demand sets the long-run equilibrium value.", "portfolio balance channel: shifts in global asset preferences move the exchange rate until the current account balances."],
    "Flow supply/demand is a short-term effect; the portfolio balance channel works through medium-term wealth shifts; the debt sustainability channel drives the long-run equilibrium because external debt cannot grow without limit.",
    ["debt sustainability channel", "LONG-run equilibrium value of an exchange rate"],
    "Short run: flows; medium run: portfolio balance; long run: debt sustainability."),
])
add("Economics", """Henrik Dahl needs the bid EUR/AUD cross rate. The interbank market quotes EUR/USD and AUD/USD with bid and offer prices.""", [
 Qh("The bid EUR/AUD cross rate is obtained by:", "multiplying the bid EUR/USD by the inverse of the offer AUD/USD.",
    ["multiplying the bid EUR/USD by the bid AUD/USD.", "multiplying the offer EUR/USD by the inverse of the bid AUD/USD."],
    "Selling EUR for AUD means: sell EUR for USD (bid EUR/USD), then sell USD to buy AUD, which uses the AUD/USD OFFER (1/offer). Multiplying the two bids is the common mistake.",
    ["bid EUR/AUD cross rate", "AUD/USD"],
    "Bid cross: sell the base currency at the bid, then buy the other leg at its offer: bid × (1 ÷ offer)."),
])
add("Corporate Issuers", """Fjord Mining has surplus cash. It compares paying its usual dividend plus a one-time special dividend with raising its regular dividend permanently. It is also thinking about repurchasing shares with the surplus cash.""", [
 Qh("A special dividend differs from a higher regular dividend because it:", "is a one-time payment and does not commit the company to a higher dividend in the future.",
    ["is paid every quarter at a permanently higher level once earnings improve.", "is a stock dividend that leaves total cash paid unchanged."],
    "A special (extra) dividend is paid once, usually after unusually good earnings, so the regular dividend is not raised. A stock dividend pays no cash.",
    ["one-time special dividend", "raising its regular dividend permanently"],
    "Special dividend = one-time cash; regular dividend increase = permanent commitment."),
 Qh("If Fjord repurchases shares with surplus cash, which item most likely DECREASES?", "total book value.",
    ["the debt-to-assets ratio.", "the debt-to-equity ratio."],
    "Cash is paid out, so assets and shareholders' equity fall; debt is unchanged, so the leverage ratios (debt-to-assets, debt-to-equity) rise.",
    ["repurchasing shares with the surplus cash"],
    "Buyback with cash: assets ↓, equity ↓, leverage ratios ↑."),
])
add("Financial Statement Analysis", """Tierra Dorada reports a defined benefit plan. From 20X2 to 20X3 it lowered its estimated future salary increases, its expected long-term return on plan assets and its discount rate, and it raised its inflation estimate.""", [
 Qh("Which change most favorably affects 20X3 pension cost and earnings?", "the lower estimated future salary increases.",
    ["the lower expected long-term return on plan assets.", "the lower discount rate."],
    "Lower salary growth reduces the service cost. A lower expected return on assets raises the periodic cost; a lower discount rate raises the obligation and usually the interest cost.",
    ["lowered its estimated future salary increases", "its expected long-term return on plan assets", "its discount rate"],
    "Pension cost down: lower salary growth, higher expected return, higher discount rate."),
 Qh("Which pair of 20X3 assumptions is most likely internally inconsistent?", "a higher inflation estimate with lower estimated salary increases.",
    ["a lower discount rate with a lower expected return on plan assets.", "a lower discount rate with lower estimated salary increases."],
    "Salary increases normally move with inflation (positive relation). The discount rate and the expected return on assets both depend on market rates and move in the same direction.",
    ["raised its inflation estimate", "lowered its estimated future salary increases"],
    "Inflation ↑ ⇒ salary growth ↑ (positive relationship); discount rate and expected return move together."),
])
add("Alternative Investments", """Marta Ricci compares Investment 1, a real estate operating company (REOC), with Investment 2, a real estate investment trust (REIT), for a taxable client.""", [
 Qh("Compared with the REOC, the REIT most likely:", "avoids double taxation of the income received by investors.",
    ["is better able to hold properties under development.", "requires less expertise in real estate investing."],
    "REITs are tax-advantaged pass-through structures: no corporate income tax, only the investor pays tax on dividends. REOCs are ordinary taxable companies and have more operating flexibility (development, no payout requirement).",
    ["real estate operating company (REOC)", "real estate investment trust (REIT)"],
    "REIT: tax-advantaged, high payout. REOC: flexibility (development), but taxed at the company level."),
])
add("Corporate Issuers", """Karl Voss integrates ESG factors into the credit analysis of KT Hotels. The board has only 1 independent member out of 15, only 2 women among its members, and only 20% of its members have hotel industry experience.""", [
 Qh("After integrating the ESG factors, the credit spread on KT Hotels' bonds is most likely to:", "increase.",
    ["decrease.", "remain unchanged."],
    "Weak governance (few independent directors, little diversity, little industry experience) and social risk raise the credit risk, so investors ask for a higher spread.",
    ["only 1 independent member out of 15", "only 20% of its members have hotel industry experience"],
    "Worse ESG/governance → higher credit risk → wider spread."),
])
add("Economics", """Priya Nair studies how a country with few natural resources can raise its potential growth. Channel 1 is investment in human capital, Channel 2 is adopting leading technology, Channel 3 is keeping the currency low to support export demand.""", [
 Qh("The channel least likely to raise the growth rate of aggregate SUPPLY is:", "Channel 3: keeping the currency low.",
    ["Channel 1: human capital.", "Channel 2: leading technology."],
    "Human capital and technology raise potential output directly. A low exchange rate is a demand-side policy for exports; it affects supply only indirectly.",
    ["keeping the currency low to support export demand"],
    "Supply-side growth: capital, labor quality, technology. Export demand policies are demand-side."),
])
add("Financial Statement Analysis", """Anna Wexford reviews the earnings quality of DB. The balance-sheet accruals relative to operating assets are small and trending downward over the last years.""", [
 Qh("Which accruals trend would most strongly raise a concern that management manipulates reported performance?", "accruals that trend upward relative to operating assets.",
    ["accruals that trend downward relative to operating assets.", "a small absolute level of accruals."],
    "Upward-trending accruals give management room to manipulate earnings; downward-trending accruals leave less room, which supports DB's performance.",
    ["trending downward"],
    "Rising accruals ratio = lower earnings quality; falling accruals ratio = fewer opportunities to manipulate."),
])
add("Equity Valuation", """Thabo Ndlovu analyses a firm with book value per share of R20 and intrinsic value per share of R22 from a residual income model. He also computes market value added using the market value and book value of its capital.""", [
 Qh("The intrinsic value of R22 against a book value of R20 means that the present value of future residual income is:", "positive.",
    ["zero.", "negative."],
    "Intrinsic value = book value per share + PV of future residual income. 22 > 20, so the PV of residual income is positive.",
    ["intrinsic value per share of R22", "book value per share of R20"],
    "V0 > B0 ⇒ PV(RI) > 0; V0 = B0 ⇒ ROE = r; V0 < B0 ⇒ PV(RI) < 0."),
 Qh("Market value added is the difference between:", "the market value of the firm (equity plus debt) and the book value of its total capital.",
    ["the market value of equity only and the book value of equity, leaving debt out of both.", "the intrinsic value and the market price of the shares, as an estimate of mispricing."],
    "MVA = market value of the company (equity + debt) − accounting book value of total capital (equity + debt). Leaving debt out is the common trap.",
    ["market value added", "market value and book value of its capital"],
    "MVA = market value of capital (debt + equity) − book value of capital."),
])
add("Portfolio Management", """Nils Sorensen explains how an investor uses ETFs to obtain exposure to parts of the benchmark that the portfolio does not hold, so that the whole portfolio matches the benchmark.""", [
 Qh("Sorensen's explanation of benchmark exposure describes:", "completion strategies.",
    ["portfolio rebalancing.", "liquidity management."],
    "Completion: ETFs fill the gaps so that overall exposures match the benchmark. Rebalancing restores target weights after market moves; liquidity management uses ETFs to stay invested while holding cash needs.",
    ["parts of the benchmark that the portfolio does not hold"],
    "Completion = fill benchmark gaps; rebalancing = back to target weights; liquidity management = stay invested with cash."),
])
add("Derivatives", """Three analysts comment on implied volatility. Maddox says the volatility surface shows implied volatility across exercise prices and maturities. Jeffries says the skew keeps the same shape whatever the demand for hedging is. Birch says implied volatility is computed from historical volatility.""", [
 Qh("Whose comment is most likely correct?", "Maddox's.",
    ["Jeffries's.", "Birch's."],
    "The surface plots implied volatility against both strike and maturity. The skew steepens when hedging demand rises. Implied volatility is backed out of market option prices and reflects expected future volatility, not historical volatility.",
    ["across exercise prices and maturities", "computed from historical volatility"],
    "Implied volatility: from market prices, forward-looking; surface = strike × maturity."),
])
add("Fixed Income", """Sam Hollis describes calibrating a binomial interest rate tree: it uses a volatility assumption, a log-normal interest rate model and the observed market prices of benchmark bonds.""", [
 Qh("Which of the following is NOT an input to the calibration of the tree?", "the value of the bond being evaluated.",
    ["the volatility assumption.", "the assumption of log-normality."],
    "The tree is calibrated to benchmark bonds so that it reproduces their market prices. The bond being valued is priced afterwards on the calibrated tree.",
    ["observed market prices of benchmark bonds"],
    "Calibrate the tree on benchmark bonds first, then value the bond on it."),
])
add("Equity Valuation", """Ines Moreau values a stock with a multistage residual income model. She assumes residual income stays at its last forecast level forever. Her supervisor suggests that residual income fades quickly because the firm has extreme accounting returns.""", [
 Qh("Compared with Moreau's assumption, a persistence factor close to zero gives an estimate of the stock's value that is:", "lower, because residual income vanishes soon after the forecast horizon.",
    ["higher, because residual income grows faster.", "the same, because the persistence factor only affects book value."],
    "Constant residual income forever means a persistence factor of 1. A factor near zero means residual income fades at once, so the terminal value and the stock value are lower.",
    ["stays at its last forecast level forever", "fades quickly"],
    "Persistence factor: 1 = RI stays forever; 0 = RI disappears right after the horizon. Extreme ROE or high accruals → low persistence."),
])
add("Economics", """The central bank of Golden Island says it will use monetary tools to stop the inflation that comes from faster growth.""", [
 Qh("To fight the inflation, the central bank will most likely:", "sell securities to the private sector.",
    ["lower the interest rate on loans to banks.", "buy securities from the private sector."],
    "Fighting inflation means tightening: reduce the money supply by selling securities, raising the policy rate or raising reserve requirements. Buying securities or cutting rates adds money.",
    ["stop the inflation"],
    "Inflation: tighten (sell, raise rate, raise reserves). Recession: ease (buy, cut rate, lower reserves)."),
])
add("Derivatives", """A foundation needs US dollars for its supply contracts. It enters a fixed-for-fixed currency swap in which it pays won and receives dollars. Present value factors are given for both currencies.""", [
 Qh("The fixed rate the foundation RECEIVES on the swap is calculated with:", "the US dollar present value factors.",
    ["the won present value factors, because it pays won.", "the average of the dollar and won factors."],
    "Each leg is priced with its own currency's factors. The foundation receives dollars, so the rate it receives comes from the dollar factors; the won rate is the one it pays.",
    ["pays won and receives dollars", "needs US dollars"],
    "Fixed swap rate = (1 − final-year factor) ÷ sum of factors, using the factors of the currency of that leg."),
])
add("Fixed Income", """Ana Costa studies a BBB bond. Expected return over the next year must include credit migration. A second bond is valued on a binomial tree: the value without default (VND) is reduced by the credit valuation adjustment (CVA) to get the fair value, whose yield exceeds the benchmark yield. The recovery rate of the bond is one-quarter of the exposure.""", [
 Qh("Including credit migration, the expected one-year return of the BBB bond is:", "lower than its yield to maturity, because downgrades cost more than upgrades gain.",
    ["higher than its yield to maturity, because upgrades and downgrades cancel out.", "equal to its yield to maturity if spreads stay stable."],
    "Expected return ≈ YTM − Σ probability × modified duration × (change in spread). Downgrades widen spreads (larger price loss) and are more likely to matter than upgrades.",
    ["credit migration"],
    "Credit migration lowers the expected return below the YTM."),
 Qh("The credit spread of the second bond is the:", "yield on the bond valued at VND − CVA minus the benchmark yield.",
    ["yield on the bond valued at VND minus the benchmark yield.", "CVA divided by the VND."],
    "Fair value = VND − CVA; its yield is higher than the benchmark yield by the credit spread. The yield at VND is the benchmark yield itself.",
    ["value without default (VND) is reduced by the credit valuation adjustment (CVA)"],
    "Credit spread = YTM(VND − CVA) − benchmark YTM."),
 Qh("With a recovery rate of one-quarter of the exposure, the loss given default used in the CVA is:", "75% of the exposure.",
    ["25% of the exposure.", "50% of the exposure."],
    "LGD = 1 − recovery rate. Using the recovery rate (or 50%) as the loss understates the CVA and the spread.",
    ["recovery rate of the bond is one-quarter of the exposure"],
    "LGD = 1 − recovery rate; expected loss = PD × LGD."),
])
add("Quantitative Methods", """Leo Park tests a regression with 20 observations and 3 independent variables. He compares the t-statistics of two slope coefficients with the critical t-value at the 5% level.""", [
 Qh("A slope coefficient is statistically significant when:", "the absolute value of its t-statistic exceeds the critical t-value.",
    ["its t-statistic is positive.", "its t-statistic exceeds 1.96, whatever the sample size."],
    "Reject H0 (coefficient = 0) when |t| > critical t, with df = n − k − 1 = 20 − 3 − 1 = 16. The sign does not matter and the critical value for a small sample is larger than 1.96.",
    ["20 observations and 3 independent variables", "critical t-value"],
    "|t| > critical t(df = n − k − 1) ⇒ significant."),
])
add("Equity Valuation", """Greta Lund compares price multiples. She states that higher expected growth and higher risk both raise a high P/E. She also averages P/Es of an index with market-cap weights, using the weighted harmonic mean.""", [
 Qh("According to the constant growth model, a justified P/E is:", "higher for higher expected growth and lower for higher risk (a higher required return).",
    ["higher for higher expected growth and also higher for higher risk (a higher required return).", "lower for higher expected growth and lower for higher risk (a lower required return)."],
    "P/E = payout ÷ (r − g): growth g up raises it, risk (r) up lowers it.",
    ["higher expected growth and higher risk both raise a high P/E"],
    "Growth ↑ → P/E ↑; risk ↑ (r ↑) → P/E ↓."),
 Qh("Compared with the weighted arithmetic mean, the weighted harmonic mean of the P/Es is:", "lower, because it gives more weight to the low P/Es.",
    ["higher, because it gives more weight to the high P/Es.", "the same, because both use the same weights."],
    "The harmonic mean averages the E/P (inverse) values, so it reduces the effect of large outliers and is below the arithmetic mean.",
    ["weighted harmonic mean"],
    "Harmonic < geometric < arithmetic mean; harmonic limits large outliers but not small ones."),
])
add("Portfolio Management", """Ben Lam uses factor models. In a macroeconomic factor model the factors are surprises in economic variables and have an expected value of zero. In fundamental models the sensitivities come from company attributes. Lam claims that multifactor models are useful for active management but not for passive management.""", [
 Qh("In a macroeconomic factor model with surprise factors, a stock's expected return equals:", "the intercept of the model.",
    ["the intercept plus the average of the factor sensitivities.", "the actual return of the last year."],
    "Every surprise has an expected value of zero, so E(R) = a (the intercept). Actual return minus the intercept is the effect of the surprises.",
    ["factors are surprises in economic variables", "expected value of zero"],
    "Macro model: E(R) = intercept."),
 Qh("Which statement about estimating factor sensitivities is correct?", "In fundamental models the sensitivities come first from company attributes; in macroeconomic models they are estimated last.",
    ["In both models the sensitivities are estimated last by regression of the returns on the factors.", "In macroeconomic models the sensitivities come first from company attributes; in fundamental models they are estimated last."],
    "Fundamental: attributes give the sensitivities, factor returns are estimated. Macroeconomic: surprises are the factors, the sensitivities come from the regression.",
    ["sensitivities come from company attributes"],
    "Fundamental = sensitivities first; macro = sensitivities last."),
 Qh("Lam's claim about multifactor models is:", "incorrect: they are useful for both active and passive management.",
    ["correct: passive managers replicate an index and do not need factor exposures.", "incorrect: they are useful only for passive management, where tracking error is controlled."],
    "Active: factor tilts and active risk analysis. Passive: replicating an index's factor exposures and controlling tracking error.",
    ["but not for passive management"],
    "Factor models serve active and passive portfolios (risk and attribution)."),
])
add("Fixed Income", """Peter Marlow explains forward pricing. A bond futures contract is compared with the underlying bond. The cost of holding the bond until the futures expiry must be considered, and the futures-side price must include the accrued interest at expiry.""", [
 Qh("To find the no-arbitrage price of the bond futures, the bond price plus accrued interest today is:", "carried forward to the expiry date at the risk-free rate.",
    ["discounted back from the expiry date at the risk-free rate.", "left unchanged, because the bond pays coupons."],
    "No-arbitrage futures price = (bond price + accrued interest) × (1 + r)^T (less the future value of coupons). Only the final profit is discounted to today.",
    ["cost of holding the bond until the futures expiry"],
    "Carry the bond cost forward to expiry, compare, then discount the profit."),
])
add("Economics", """Lisa Park explains inflation-linked bonds. The break-even inflation rate is the difference between the yields of nominal and inflation-linked bonds of the same maturity. Investors are uncertain about future inflation.""", [
 Qh("An increase in the uncertainty about future inflation is associated with:", "a higher break-even inflation rate.",
    ["a lower break-even inflation rate.", "no change, because the break-even rate reflects only expected inflation."],
    "Break-even inflation = expected inflation + a premium for inflation uncertainty (inflation risk premium); more uncertainty raises it.",
    ["uncertainty about future inflation", "same maturity"],
    "Break-even = nominal yield − real yield; includes the inflation risk premium."),
])
add("Fixed Income", """Chloe Brandt ranks three bonds. In a recession that is turning into a recovery, credit spreads narrow. One of her colleagues states that the expected loss of a bond equals the probability of default times its recovery rate.""", [
 Qh("When credit spreads narrow in an economic recovery, the improvement is likely to be greatest for:", "the bonds with the lowest credit rating and the widest spread.",
    ["the bonds with the highest credit rating and the narrowest spread.", "all bonds equally, whatever their rating."],
    "Weaker credits have more spread to give back; in a recession the good credits outperform and spreads between low and high quality widen.",
    ["credit spreads narrow", "recovery"],
    "Recession: spreads widen, more for low quality. Recovery: spreads narrow, more for low quality."),
 Qh("The expected loss of a bond is the probability of default times:", "the loss given default (1 minus the recovery rate).",
    ["the recovery rate of the bond.", "one plus the recovery rate of the bond."],
    "Expected loss = PD × LGD = PD × (1 − recovery rate). Multiplying by the recovery rate is the colleague's mistake.",
    ["probability of default times its recovery rate"],
    "Expected loss = PD × (1 − RR)."),
])
add("Financial Statement Analysis", """Alex Thorne adjusts the financial statements of Coleridge Ltd. Its pension discount rate is 0.5% higher than its industry competitors' discount rates, and a higher discount rate lowers the estimated pension obligation. Thorne lowers the discount rate to the peers' level.""", [
 Qh("Compared with its peers, Coleridge's higher pension discount rate is:", "aggressive, because it lowers the reported pension obligation and expense.",
    ["conservative, because it raises the reported pension expense and obligation.", "neutral, because the plan is underfunded in any case, so the assumption does not matter."],
    "PBO is the present value of future benefits, so a higher discount rate means a smaller PBO and a smaller deficit. Higher than peers = aggressive.",
    ["0.5% higher than its industry competitors'", "lowers the estimated pension obligation"],
    "Discount rate ↑ → PBO ↓, expense ↓, deficit looks smaller (aggressive)."),
 Qh("After Thorne lowers the discount rate to the peers' level, which ratio DECREASES?", "book value per share.",
    ["the debt-to-equity ratio.", "the financial leverage ratio."],
    "The obligation rises, the deficit grows, shareholders' equity falls (through accumulated other comprehensive income). Equity falls, so BVPS falls while debt-to-equity and leverage rise.",
    ["lowers the discount rate to the peers' level"],
    "Lower discount rate: obligation ↑, equity ↓, BVPS ↓, D/E ↑, leverage ↑."),
])
add("Corporate Issuers", """An ESG data firm gives one point for each favorable governance feature. A two-tiered board is favorable. In a one-tiered board, which is considered unfavorable, independent directors must make up at least 60% to be favorable. CEO duality absent, average board tenure below ten years, and each independent committee (audit, compensation, director selection) are one point each.""", [
 Qh("Under this scoring system, a board structure earns the independence point when:", "the board is two-tiered, or it is one-tiered with at least 60% independent directors.",
    ["the board is one-tiered with a simple majority of independent directors, the general rule.", "the board has fewer than ten directors with an average tenure above ten years."],
    "Two-tiered is favorable by structure; a one-tiered board needs the higher 60% threshold because that structure is considered unfavorable.",
    ["A two-tiered board is favorable", "independent directors must make up at least 60%"],
    "Independence point: two-tiered, or one-tiered with ≥ 60% independent directors."),
])
add("Financial Statement Analysis", """Aiko Ishikawa reviews KH, a property and casualty insurer, and Basel III for banks. The P&C market has been in a hard phase for a few years. KH's loss ratio is below 100%, but its combined ratio is above 100%.""", [
 Qh("Which statement about Basel III is most accurate?", "It raised the equity capital required against risk-weighted assets.",
    ["It prefers interbank deposits to consumer deposits as a source of stable funding.", "It aims mainly at improving the earnings quality of banks' reported profits."],
    "Basel III: more and better capital against risk-weighted assets, plus liquidity and stable funding requirements where consumer deposits are considered MORE stable than interbank funding.",
    ["Basel III"],
    "Basel III: higher capital (less leverage), stable consumer funding."),
 Qh("After a long hard phase in the P&C market, a cyclical shift most likely brings:", "new competitors entering and weaker underwriting standards.",
    ["tighter underwriting standards and fewer competitors.", "capital adequacy that becomes easier to achieve as premiums rise."],
    "Hard market: high premiums and profits attract competitors; premiums fall and standards weaken (soft market); capital is depleted.",
    ["hard phase for a few years"],
    "Hard market → entry → soft market."),
 Qh("A combined ratio above 100% means that the insurer's underwriting is:", "unprofitable: claims and expenses exceed the premiums.",
    ["profitable, because the loss ratio is below 100%.", "break-even, because the combined ratio uses premiums written."],
    "Combined ratio = loss ratio + expense ratio. Above 100% = underwriting loss; below 100% = underwriting profit. Judging on the loss ratio alone ignores the expense ratio.",
    ["combined ratio is above 100%"],
    "Combined ratio > 100% = underwriting loss."),
])
add("Quantitative Methods", """Walter Dunn explains the standard error of estimate (SEE) of a regression. He says the SEE is the standard deviation of the differences between the estimated values for the independent variables and the actual observations for the independent variable. A strong relationship gives a small SEE, and violations of the model assumptions affect it.""", [
 Qh("The SEE is the standard deviation of the differences between:", "the estimated and the actual values of the DEPENDENT variable.",
    ["the estimated and the actual values of the independent variables.", "the mean and the actual values of the independent variable."],
    "SEE = standard deviation of the regression residuals (actual minus predicted dependent variable). A small SEE means a close fit.",
    ["estimated values for the independent variables"],
    "SEE concerns the dependent variable's residuals."),
])
add("Alternative Investments", """Daniel Kwon reviews a storage REIT and an office REIT. Entry into self-storage is easy, while office buildings can become obsolete. Retail REITs depend on their tenants' sales per square foot.""", [
 Qh("The risk factor most likely to hurt an investment in the storage REIT is:", "new competing facilities.",
    ["obsolescence of existing space.", "the tenants' sales per square foot."],
    "Match the risk to the sub-sector: storage = overbuilding and new competing facilities (easy entry); office = obsolescence and remote work; retail = tenants' sales per square foot.",
    ["Entry into self-storage is easy"],
    "Storage → new competing facilities; office → obsolescence; retail → tenants' sales."),
])
add("Portfolio Management", """Joanna Whitfield says the advantages of VaR are that it estimates the downside exposure in a worst-case scenario, avoids subjectivity and can be used for performance evaluation. She estimates VaR with the parametric method, which assumes a normal distribution.""", [
 Qh("Of Whitfield's three claims, the correct one is that VaR:", "can be used for performance evaluation (risk-adjusted returns).",
    ["avoids subjectivity.", "estimates the downside exposure in a worst-case scenario."],
    "VaR needs subjective inputs (confidence level, horizon, method) and is a minimum loss at a given confidence level, not a worst case; losses can exceed it.",
    ["avoids subjectivity", "worst-case scenario"],
    "VaR: subjective inputs; not a worst case; useful for risk-adjusted performance."),
 Qh("A limitation of the parametric VaR method is that it:", "assumes normally distributed returns, a poor fit for fat tails and options.",
    ["uses actual past returns, so it cannot capture risks that are new.", "requires a very large number of random scenarios generated by a model."],
    "Historical simulation uses past returns; Monte Carlo generates random scenarios. Parametric assumes a normal distribution.",
    ["assumes a normal distribution"],
    "Parametric = normal assumption; historical = past data; Monte Carlo = simulated scenarios."),
])
add("Fixed Income", """Leon Fischer believes that the spot curve one year from today will reflect the current forward curve. He also expects a flight to quality and a bullish flattening of the yield curve.""", [
 Qh("Fischer's view that the future spot curve equals the current forward curve is most consistent with:", "the pure expectations theory.",
    ["the liquidity preference theory.", "the segmented markets theory."],
    "Pure expectations: forward rates are unbiased predictors of future spot rates, no premium. Liquidity preference adds a premium; segmented markets price each maturity separately.",
    ["spot curve one year from today will reflect the current forward curve"],
    "Future spot = forward → pure expectations."),
])
add("Corporate Issuers", """Helen Marsh explains a sale-leaseback plan of Mercury Corp.: the company sells its real estate, rents it back and uses the cash to retire debt. It expects an investment-grade rating after the transactions.""", [
 Qh("Which statement about Mercury's motivations is INCORRECT?", "The expected credit rating upgrade will increase the cost of capital.",
    ["The transactions unlock the value of the company's real estate assets.", "The transactions allow the company to sell a business that is not its core business."],
    "Less debt and a better rating lower, not raise, the cost of capital. Sale-leasebacks unlock real estate value and real estate is not a grocer's core business.",
    ["retire debt", "investment-grade rating"],
    "Better rating → lower cost of capital."),
])
add("Equity Valuation", """Daniel Ashworth chooses a valuation metric for Harlan Company: its debt-to-equity ratio is much higher than its competitors', and it spent heavily on advertising to build a brand that is not on the balance sheet.""", [
 Qh("The most appropriate metric for Harlan is:", "enterprise value to sales.",
    ["price to book.", "dividend yield."],
    "Very different leverage → use an enterprise value multiple. An internally generated brand is missing from book value, so price to book is poor. Dividend yield ignores growth.",
    ["debt-to-equity ratio is much higher", "brand that is not on the balance sheet"],
    "High leverage and off-balance-sheet intangibles → EV/sales."),
])
