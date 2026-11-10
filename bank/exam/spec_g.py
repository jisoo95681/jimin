# Practice set 7 (10 Nov, user request): relationship questions from the "Main tables to remember" of the key notes, plus theory questions
# without calculations (the user's notebook notes), plus theory questions the user got wrong in Mocks 1-8 / Retry Papers / practice sets 1-2.
# Vignettes are based on bank vignettes with names changed; every question has a hint (hl = exact words that point to the answer, rule = the relationship to apply).
from lib import *
def Qh(q, correct, wrong, why, hl, rule):
    d = Q(q, correct, wrong, why); d['hint'] = dict(hl=hl, rule=rule); return d

# ---------------- V1 Quant: regression problems (main tables: error type/test/fix, effect on SE/t/F, multicollinearity signals, DW zones) ----------------
add("Quantitative Methods", """Yuna Park, an analyst at Seabright Funds, tests three regression models that explain monthly fund returns. Exhibit 1 summarises what she sees in each model.

Exhibit 1: Diagnostics for Three Models
# Model | What Park observes
Model A | R² is large and the F-statistic is significant, but no slope t-statistic is significant and the standard errors are inflated
Model B | The variance of the residuals rises with the size of the fund's assets
Model C | The Durbin–Watson statistic is 1.12; the lower limit is 1.35 and the upper limit is 1.59

Park wants to name each problem and decide on a test and a fix.""", [
 Qh("Model A most likely suffers from:", "multicollinearity.", ["heteroskedasticity.", "serial correlation."],
    "Signals of multicollinearity: R² large, F-statistic significant, t-statistics low or insignificant, standard errors inflated. All four are in Model A.",
    ["R² is large", "no slope t-statistic is significant", "standard errors are inflated"],
    "Large R² + significant F + insignificant t-statistics + inflated standard errors = multicollinearity."),
 Qh("For the problem in Model A, the main danger in the t-tests is:", "Type II errors (failing to reject a false null), because the standard errors are too high; the F-test is not affected.",
    ["Type I errors, because the standard errors are too low; the F-test is unreliable.", "Type I errors, because the standard errors are too low; the F-test is too high."],
    "Multicollinearity: standard errors High, t-test Low (Type II error), F-test not affected.",
    ["standard errors are inflated"],
    "Multicollinearity: standard errors ↑, t ↓ (Type II), F not affected."),
 Qh("Model B is best handled by:", "testing with Breusch–Pagan and using robust (White) standard errors.",
    ["testing with the VIF and dropping a variable.", "testing with Breusch–Godfrey and using Newey–West standard errors."],
    "Heteroskedasticity (variance of the residuals changes with a variable): test = Breusch–Pagan, fix = robust (White) standard errors, error type = Type I. The VIF is for multicollinearity; Breusch–Godfrey and Newey–West are for serial correlation.",
    ["variance of the residuals rises"],
    "Heteroskedasticity → Breusch–Pagan test, White robust standard errors."),
 Qh("Model C's Durbin–Watson statistic most likely indicates:", "positive serial correlation, with standard errors too low and t-tests and the F-test too high.",
    ["an inconclusive result, because the statistic lies between the limits.", "negative serial correlation, with standard errors too high and t-tests too low."],
    "1.12 is below the lower limit of 1.35, so reject: positive serial correlation. Serial correlation: standard errors Low, t-test High, F-test High (Type I errors).",
    ["Durbin–Watson statistic is 1.12", "lower limit is 1.35"],
    "DW below the lower limit = positive serial correlation (reject); SE low, t high, F high."),
])

# ---------------- V2 Quant: text preparation, model selection, unit root ----------------
add("Quantitative Methods", """Naoko Ebisu, an analyst at Quill Analytics, prepares text from 20,000 broker reports for a sentiment model. Her raw text contains HTML tags, punctuation, numbers and extra white space.

Ebisu also compares two candidate regression models of fund flows in Exhibit 1.

Exhibit 1: Candidate Models
# Model | AIC | BIC
Model 1 | 412 | 431
Model 2 | 405 | 438

Finally, she tests a price series for a unit root, and the Dickey–Fuller test does not reject its null hypothesis.""", [
 Qh("Removing HTML tags, punctuation, numbers and extra white space from the raw text is part of:", "text cleansing.", ["text wrangling (preprocessing).", "text exploration."],
    "Cleansing removes noise from the raw text: HTML tags, punctuation, numbers, white space. Wrangling works on tokens (lowercasing, stop words, stemming, lemmatisation). Exploration (bag of words, DF, MI) comes after.",
    ["HTML tags, punctuation, numbers and extra white space"],
    "Raw characters to remove = cleansing; tokens to normalise = wrangling."),
 Qh("Which statement about choosing between the two models is correct?", "Model 2 is better for forecasting (lower AIC) and Model 1 is better for goodness of fit (lower BIC).",
    ["Model 1 is better for forecasting (lower AIC) and Model 2 is better for goodness of fit (lower BIC).", "Model 2 is better for both purposes because its AIC is lower."],
    "AIC: better forecast; BIC: better goodness of fit. Lower is better for both. Model 2 has the lower AIC (405 vs 412); Model 1 has the lower BIC (431 vs 438).",
    ["AIC", "BIC"],
    "AIC → forecasting; BIC → goodness of fit; pick the lowest value."),
 Qh("Because the Dickey–Fuller test does not reject its null hypothesis, the price series:", "has a unit root, is not covariance stationary and should be first-differenced before an autoregressive model is used.",
    ["is covariance stationary and can be modelled directly with an AR(1) model.", "has no unit root, so adding a second lag will remove the trend."],
    "The Dickey–Fuller null hypothesis is that the series has a unit root. Failing to reject means a unit root: not covariance stationary, so transform it (usually first differences).",
    ["does not reject its null hypothesis"],
    "Fail to reject Dickey–Fuller = unit root = not stationary → difference the series."),
])

# ---------------- V3 Economics: crisis signals, carry trade, Mundell-Fleming ----------------
add("Economics", """Ingrid Solberg, an economist at Fjord Capital, reviews the emerging country of Maravia, whose government opened its capital market.

Exhibit 1: Maravia Indicators over the Past Two Years
# Indicator | Change
Capital inflows | Surged
Official reserves | Fell
Real exchange rate | Overvalued
Inflation | Rose
Banking stress | Rose
M2 to reserves | Increased quickly

Solberg also considers a carry trade. A euro-based investor borrows euros, converts them into yen at today's rate S0 (yen per euro), invests in yen and converts back at maturity at S1 (yen per euro).

Maravia has low capital mobility and is thinking of tightening both monetary and fiscal policy. A developed country with high capital mobility is expanding monetary policy while restricting fiscal policy.""", [
 Qh("The indicators in Exhibit 1 are most consistent with:", "a rising risk of a currency crisis.", ["an economy with improving fundamentals and a stable currency.", "a currency that is about to appreciate because of tight policy."],
    "Currency crisis signals (CRRIB M2): Capital inflows up, Reserves down, Real exchange rate overvalued, Inflation up, Banking stress up, M2/reserves increasing quickly. All six are in Exhibit 1.",
    ["Capital inflows", "Official reserves", "M2 to reserves"],
    "CRRIB M2: inflows ↑, reserves ↓, real rate overvalued, inflation ↑, banking stress ↑, M2/reserves ↑ = crisis warning."),
 Qh("In euro terms, the return of the carry trade is most likely reduced by:", "the yen depreciating against the euro (S1 rises).",
    ["the yen appreciating against the euro (S1 falls).", "a fall in the euro borrowing rate."],
    "EUR terms: return = S0 × (1 + R_JPY) × 1/S1 − 1 − R_EUR. A higher S1 (more yen per euro, so a weaker yen) lowers the return. A lower euro rate raises the return and a yen appreciation raises it.",
    ["S1 (yen per euro)"],
    "Euro-based carry trade: return falls when S1 rises (yen weakens) or the euro funding rate rises."),
 Qh("Using the Mundell–Fleming relationships, Maravia's planned policy mix most likely leads its currency to:", "appreciate.", ["depreciate.", "have an ambiguous effect."],
    "Restrictive monetary / restrictive fiscal with low capital mobility (emerging): Appreciation. (With high mobility the mix is ambiguous.)",
    ["low capital mobility", "tightening both monetary and fiscal policy"],
    "R/R: high mobility ambiguous, low mobility appreciation."),
 Qh("For the developed country, the policy mix most likely leads its currency to:", "depreciate.", ["appreciate.", "have an ambiguous effect."],
    "Expansionary monetary / restrictive fiscal with high capital mobility (developed): Depreciation. (With low mobility it is ambiguous.)",
    ["high capital mobility", "expanding monetary policy while restricting fiscal policy"],
    "E/R: high mobility depreciation, low mobility ambiguous."),
])

# ---------------- V4 Economics: growth theories and monetary policy ----------------
add("Economics", """Elias Brandt, an economist at Northwind Capital, summarises three views presented at a seminar on long-run growth.

View 1: Population rises when income is high and pushes income per person back down to subsistence.
View 2: Capital has diminishing returns, technology comes from outside the model and income per person reaches a steady state.
View 3: Investment in human capital and research has no diminishing returns, so income per person keeps growing.

Brandt also studies Tarland, where strong growth raises the threat of inflation. The central bank says it will use its monetary tools to prevent the inflation.""", [
 Qh("The three views correspond to which growth theories?", "View 1 classical, View 2 neoclassical, View 3 endogenous.",
    ["View 1 neoclassical, View 2 endogenous, View 3 classical.", "View 1 endogenous, View 2 classical, View 3 neoclassical."],
    "Classical: population growth pushes income per capita back to subsistence. Neoclassical: diminishing returns to capital, exogenous technology, steady state. Endogenous: no diminishing returns (human capital, R&D), income per capita grows permanently.",
    ["back down to subsistence", "technology comes from outside the model", "no diminishing returns"],
    "Classical = subsistence; neoclassical = steady state; endogenous = permanent growth."),
 Qh("According to the theory in View 2, a permanent increase in the saving rate most likely:", "raises the level of income per person in the steady state but not its long-run growth rate.",
    ["raises the long-run growth rate of income per person permanently.", "has no effect, because technology comes from outside the model."],
    "Neoclassical: capital has diminishing returns, so more saving gives only a temporary boost to growth; income per capita reaches a new, higher steady-state level, while long-run growth is set by technology.",
    ["has diminishing returns", "reaches a steady state"],
    "Neoclassical: higher saving raises the level, not the long-run growth rate."),
 Qh("A policy that subsidises research and education is most consistent with:", "the theory in View 3, because it can raise long-run growth permanently.",
    ["the theory in View 1, because it raises income per person permanently.", "the theory in View 2, because technology is determined inside the model."],
    "Endogenous growth: investment in human capital and R&D is not subject to diminishing returns, so such policies can permanently raise the growth rate. Classical and neoclassical theories do not give that result.",
    ["no diminishing returns"],
    "Endogenous: invest and it keeps going."),
 Qh("To prevent the inflation, Tarland's central bank will most likely:", "sell securities to the private sector.", ["buy securities from the private sector.", "lower its policy rate."],
    "To fight inflation, reduce the money supply: sell securities (money out), raise the policy rate, raise reserve requirements. Buying securities or lowering the rate adds money and fuels inflation.",
    ["prevent the inflation"],
    "Fighting inflation = contractionary: sell securities, raise rates."),
])

# ---------------- V5 FSA: joint venture, translation (main tables) ----------------
add("Financial Statement Analysis", """Nadia Corsi, an analyst at Lakeview Partners, analyses Brightmill Foods, which owns 50% of a joint venture and two foreign subsidiaries. The joint venture is reported under the equity method; Corsi wants to see the effect of proportionate consolidation.

Subsidiary A is in Mexico and uses the Mexican peso as its functional currency. Brightmill's presentation currency is the US dollar, and Subsidiary A has a net asset exposure. The peso is depreciating.

Subsidiary B is in Poland and uses the US dollar as its functional currency, with a net monetary liability exposure in zloty. The zloty is appreciating.""", [
 Qh("Compared with the equity method, proportionate consolidation of the joint venture will most likely:", "increase revenue and total assets, with the same net income and equity.",
    ["increase revenue, total assets and net income.", "increase total assets only, leaving revenue unchanged."],
    "Equity method: revenue unchanged, assets unchanged. Proportionate: revenue and assets increase. Net income and equity increase by the same amount under both methods.",
    ["proportionate consolidation"],
    "Proportionate consolidation: revenue and assets ↑; net income and equity same as equity method."),
 Qh("Because the peso is depreciating, Subsidiary A's translation adjustment (CTA) in equity most likely:", "decreases.", ["increases.", "is not affected, because translation gains and losses go to net income."],
    "Local functional currency → current rate method. With a net asset exposure, a depreciating foreign currency makes CTA decrease (and an appreciating one makes it increase).",
    ["net asset exposure", "depreciating"],
    "Current rate method, net asset exposure: foreign currency ↓ → CTA ↓."),
 Qh("For Subsidiary B, the zloty's appreciation most likely causes:", "a remeasurement loss that reduces net income.", ["a gain in other comprehensive income.", "a decrease in CTA."],
    "Presentation currency as functional currency → temporal method, where the remeasurement gain or loss goes to net income (the plug). With a net monetary liability, an appreciating foreign currency produces a loss.",
    ["net monetary liability exposure", "appreciating"],
    "Temporal method, net monetary liability: foreign currency ↑ → remeasurement loss in net income."),
 Qh("Because the peso is depreciating, the higher gross margin for the Mexican subsidiary is reported under:", "the current rate method.", ["the temporal method.", "either method, because the margins are equal."],
    "Foreign currency appreciating → temporal gives the higher margin. Foreign currency depreciating → current rate gives the higher margin.",
    ["The peso is depreciating"],
    "Local currency depreciating → current rate method shows the higher gross margin."),
])

# ---------------- V6 FSA: stock compensation, pension, taxes ----------------
add("Financial Statement Analysis", """Mateo Ruiz, an analyst at Granite Research, studies Corvane Systems, which grants stock options and restricted stock units (RSUs) and sponsors a defined benefit pension plan. Corvane reports under US GAAP; its closest peer reports under IFRS.

Corvane's advisor says that expected share price volatility at the grant date has risen. Ruiz also compares how the two frameworks treat the expected return on plan assets. Finally, employees recently exercised options when the share price was well above the grant-date fair value.""", [
 Qh("Higher expected volatility at the grant date will most likely:", "raise the fair value and expense of the options and lower net income, with no effect on the RSUs.",
    ["raise the fair value of the options and of the RSUs, and lower net income.", "lower the fair value and expense of the options and raise net income."],
    "Higher volatility: stock option fair value ↑, operating expense ↑, net income ↓. RSU fair value, expense and net income are the same.",
    ["volatility at the grant date has risen"],
    "Volatility ↑: options cost more (net income ↓); RSUs unaffected."),
 Qh("Which statement about the expected return on plan assets is correct?", "Under US GAAP it is deducted in the pension cost; under IFRS it is not deducted separately.",
    ["Under IFRS it is deducted in the pension cost; under US GAAP it is not deducted separately.", "It is deducted under both frameworks."],
    "Pension cost: US GAAP deducts the expected return on plan assets; IFRS does not deduct it separately (interest cost on the funded status instead).",
    ["expected return on plan assets"],
    "US GAAP deducts the expected return; IFRS uses net interest on the funded status."),
 Qh("The recent option exercises at a share price well above the grant-date fair value are most likely to:", "lower Corvane's effective tax rate under US GAAP, but not under IFRS.",
    ["lower the effective tax rate under both frameworks.", "raise the effective tax rate under US GAAP and lower it under IFRS."],
    "Windfall (settlement-date price higher than grant-date value): larger tax deduction, tax lower than expected. US GAAP: effective tax rate ↓. IFRS: the windfall goes straight to equity, so the rate is not affected.",
    ["well above the grant-date fair value"],
    "Windfall: US GAAP tax rate ↓; IFRS no effect (goes to equity)."),
])

# ---------------- V7 FI: embedded options ----------------
add("Fixed Income", """Gabriela Silva, a portfolio manager at Tamsin Fixed Income, compares a callable bond, a putable bond and a convertible bond. The callable and putable bonds have the same issuer, maturity and coupon as a straight bond. She prices them on a binomial tree and computes their option-adjusted spreads (OAS) with the same volatility assumption.

Silva expects interest rate volatility to rise. The convertible bond's conversion price is well above the current share price of the issuer.""", [
 Qh("If interest rate volatility rises, the value of the callable bond will most likely:", "fall and the value of the putable bond will rise.", ["rise and the value of the putable bond will fall.", "fall and the value of the putable bond will fall."],
    "Callable bond = straight bond − call; putable bond = straight bond + put. Higher volatility raises the value of the option: callable ↓, putable ↑.",
    ["interest rate volatility rises"],
    "Volatility ↑: callable value ↓, putable value ↑."),
 Qh("If Silva raises the volatility assumption in the tree, the OAS of the callable bond will most likely:", "fall and the OAS of the putable bond will rise.", ["rise and the OAS of the putable bond will fall.", "fall and the OAS of the putable bond will fall."],
    "Higher volatility raises the value of the call, so the callable bond's model value falls below its market price; to match the market price the OAS must fall. For the putable bond the put is worth more, the model value rises and the OAS must rise. Volatility ↑: OAS of the callable ↓, OAS of the putable ↑.",
    ["same volatility assumption"],
    "Volatility ↑: OAS of callable ↓, OAS of putable ↑."),
 Qh("The risk and return of the convertible bond most likely resemble those of:", "a bond, driven by interest rates and the credit spread.", ["a stock, driven by the share price.", "a hybrid of a bond and a stock."],
    "Conversion price above the share price: the bond-like case: interest rate and credit spread risk. Conversion price below the share price: stock-like. Equal: hybrid.",
    ["conversion price is well above the current share price"],
    "Conversion price > share price = bond; < = stock; = hybrid."),
])

# ---------------- V8 FI: term structure models, callable duration, spreads, calibrated tree ----------------
add("Fixed Income", """Bettina Kral, a fixed-income analyst at Danube Capital, presents two short-rate models, which she writes with r as the short rate and dz as the random term:

Model 1: dr = a(b − r)dt + σ√r dz
Model 2: dr = θ dt + σ dz

She also values an option-free bond on a binomial tree calibrated to the current benchmark curve, studies a callable bond, and reads a quoted spread between the money market rate and the T-bill rate for the same maturity.""", [
 Qh("Which statement about the two models is correct?", "Model 1 has volatility that rises with the level of rates and cannot produce negative rates; Model 2 has constant volatility and no mean reversion.",
    ["Model 1 has constant volatility and can produce negative rates; Model 2 has volatility that rises with the level of rates.", "Both models have constant volatility and mean reversion."],
    "Model 1 is Cox–Ingersoll–Ross: volatility σ√r rises with the rate, rates cannot be negative. Model 2 is Ho–Lee: constant volatility, no mean reversion (θ is time-dependent).",
    ["σ√r dz", "θ dt + σ dz"],
    "CIR: volatility rises with r, no negative rates; Ho–Lee: constant volatility, no mean reversion."),
 Qh("If interest rates fall sharply, compared with the straight bond, the callable bond's effective duration will most likely:", "fall, and its convexity can turn negative.",
    ["rise, and its convexity stays positive.", "stay the same as the straight bond's duration."],
    "Callable bond when rates fall: the call is likely to be exercised, so duration is lower than the straight bond's and convexity falls (can turn negative). When rates rise, it behaves like the straight bond.",
    ["callable bond"],
    "Callable: rates ↓ → duration < straight, convexity can be negative; rates ↑ → like straight."),
 Qh("The spread between the money market rate and the T-bill rate for the same maturity is the:", "TED spread, which shows liquidity and credit risk of the banking sector.",
    ["I-spread, which shows how much a credit-risky bond yield exceeds the swap rate.", "Z-spread, which shows the constant spread added to each spot rate."],
    "TED spread = MRR − T-bill rate (same maturity): liquidity and credit risk of the banking sector, an economy-wide measure rather than one government bond.",
    ["between the money market rate and the T-bill rate"],
    "TED = MRR − T-bill: banking-sector liquidity and credit risk."),
 Qh("If Kral raises the volatility assumption of the calibrated tree, the value of the option-free bond will:", "stay the same.", ["rise.", "fall."],
    "A calibrated tree reprices the benchmark bonds, so an option-free bond has the same value whatever volatility is assumed. Volatility matters only for bonds with embedded options.",
    ["option-free bond", "calibrated to the current benchmark curve"],
    "Calibrated tree + option-free bond: volatility has no effect on value."),
])

# ---------------- V9 FI: credit models and CDS ----------------
add("Fixed Income", """Sol Park, a credit analyst at Hanover Credit Partners, reviews a risky corporate bond and the CDS market.

Park compares two credit models. Model X relies on the company's balance sheet and option pricing. Model Y relies on macroeconomic and company-specific data to estimate a default intensity with a regression.

Exhibit 1: Five-Year Market Data for the Company
# Item | Spread over the benchmark
Bond | 240 bps
CDS | 210 bps

Park expects the economy to improve and considers trades on a high-yield index and an investment-grade index. A client sold protection on the company last year, when its CDS spread was 150 bps, and asks about the position today.""", [
 Qh("A weakness of Model Y compared with Model X is that Model Y:", "does not explain why default happens and treats default as a random surprise.",
    ["assumes the company's assets are traded in the market.", "is burdensome because of complex balance sheets."],
    "Reduced-form model (Y): disadvantages: does not explain why default happens; default is treated as a random event. Strengths: does not assume assets trade, default intensity changes with fundamentals. The structural model (X) has the weaknesses in the other two options.",
    ["macroeconomic and company-specific data", "default intensity"],
    "Reduced-form: no economic rationale for default; structural: complex, needs traded assets."),
 Qh("Given the spreads in Exhibit 1, the arbitrage trade is most likely to:", "buy the bond and buy protection through the CDS.", ["sell the bond and sell protection through the CDS.", "buy the bond and sell protection through the CDS."],
    "Bond spread (240) > CDS spread (210): buy the bond and buy the CDS (protection). If the bond spread were below the CDS spread: sell both.",
    ["240 bps", "210 bps"],
    "Bond spread > CDS spread → buy bond, buy CDS."),
 Qh("Expecting the economy to improve, Park should most likely:", "sell protection on the high-yield index and buy protection on the investment-grade index.",
    ["buy protection on the high-yield index and sell protection on the investment-grade index.", "sell protection on both indexes."],
    "Economy improves: high yield → sell protection; investment grade → buy protection.",
    ["economy to improve"],
    "Economy improves: HY sell protection, IG buy protection."),
 Qh("Compared with the original spread, the client's position today most likely shows:", "a loss, because the spread has widened.", ["a gain, because the spread has widened.", "a gain, because the spread is above the coupon."],
    "Protection seller: spread narrows → gain; spread widens → loss. Today's spread (210 bps) is above the original 150 bps, so the seller has a loss. Gain or loss compares the current spread with the ORIGINAL spread.",
    ["150 bps", "210 bps"],
    "Seller loses when the spread widens versus the original spread."),
])

# ---------------- V10 Derivatives and Alternatives ----------------
add("Derivatives", """Tomas Berg, a derivatives analyst at Oslo Capital, answers four questions.

Lakeshore Utilities has issued fixed-rate bonds. Its CFO says: "I want our debt to behave like floating-rate debt so that the market value of our liabilities is less sensitive to changes in interest rates."

A three-month forward contract on a stock is quoted in the market at 52.40, while the carry model gives a fair forward price of 51.10.

A client sells a call option on an index.

A commodity has a convenience yield that is higher than its storage cost.""", [
 Qh("To meet the CFO's objective, Lakeshore should enter into a swap in which it:", "pays floating and receives fixed.", ["pays fixed and receives floating.", "pays fixed and receives an equity return."],
    "Lakeshore already pays fixed on its bonds. Receiving fixed and paying floating cancels the fixed payments and leaves floating-rate debt, whose value is much less sensitive to rates.",
    ["behave like floating-rate debt", "fixed-rate bonds"],
    "Fixed liability → floating: receive fixed, pay floating."),
 Qh("The forward contract is most likely:", "expensive, so the arbitrage is to sell the forward, borrow and buy the stock (cash-and-carry).",
    ["cheap, so the arbitrage is to buy the forward, short the stock and lend.", "fairly priced, so there is no arbitrage."],
    "Quoted price (Q = 52.40) above the model price (F = 51.10): the forward is expensive → Sell forward, Borrow, Buy the asset (cash-and-carry). Q below F: Buy forward, Short, Lend.",
    ["quoted in the market at 52.40", "fair forward price of 51.10"],
    "Q above F → sell forward, borrow, buy asset; Q below F → buy forward, short, lend."),
 Qh("The signs of the Greeks of the call option the client sold are most likely:", "negative gamma and negative vega, with positive theta.",
    ["positive gamma and positive vega, with negative theta.", "negative gamma and positive vega, with positive theta."],
    "Long call: delta +, gamma +, vega +, theta −, rho +. Short call: all signs reversed: delta −, gamma −, vega −, theta +, rho −.",
    ["sells a call option"],
    "Short option reverses the long option signs: gamma −, vega −, theta +."),
 Qh("The commodity's futures curve is most likely in:", "backwardation, with inventories falling.", ["contango, with inventories rising.", "backwardation, with inventories rising."],
    "Convenience yield > storage cost: backwardation and inventory falls. Convenience yield < storage cost: contango and inventory rises.",
    ["convenience yield that is higher than its storage cost"],
    "Convenience yield > storage → backwardation, inventories fall."),
])

# ---------------- V11 Portfolio Management ----------------
add("Portfolio Management", """Dev Menon, a portfolio manager at Meridian Wealth, evaluates the Titan Equity Fund with a three-factor model. Exhibit 1 shows the fund's factor sensitivities.

Exhibit 1: Titan Equity Fund Factor Sensitivities
# Factor | Fund sensitivity
Market | 1.15
Size | 0.40
Value | −0.10

Menon's assistant, Lena Voss, uses a macroeconomic factor model whose factors are surprises with an expected value of zero. For Portfolio 1 the intercept is 2.58% and last year's return was 6.00%.

Voss compares fundamental and macroeconomic factor models, and Menon asks about an index fund that meets its investment objective exactly.""", [
 Qh("Based on Exhibit 1, the fund's style is best described as:", "aggressive (beta above 1), small-cap and growth.", ["defensive (beta below 1), large-cap and value.", "aggressive (beta above 1), large-cap and value."],
    "Market 1.15 > 1: aggressive. Size positive: small-cap orientation. Value negative: growth orientation.",
    ["@row:Market", "@row:Size", "@row:Value"],
    "Market > 1 aggressive; + size = small cap; − value = growth."),
 Qh("In Voss's macroeconomic factor model, the expected return of Portfolio 1 is:", "2.58%, the intercept.", ["6.00%, last year's return.", "3.42%, the part of last year's return explained by the surprises."],
    "In a macroeconomic factor model the factors are surprises with an expected value of zero, so the expected return is the intercept. Last year's 6.00% is an actual return that includes the factor surprises.",
    ["factors are surprises", "intercept is 2.58%"],
    "Surprise factors have zero expected value → expected return = intercept."),
 Qh("In which type of model are the factor sensitivities estimated last?", "the macroeconomic factor model (in the fundamental model they are determined first).",
    ["the fundamental factor model (in the macroeconomic model they are determined first).", "both, because sensitivities are always estimated by regression."],
    "Fundamental model: sensitivities (company attributes) are determined first, then factor returns are estimated. Macroeconomic model: the surprises are given and the sensitivities are estimated last by regression.",
    ["fundamental and macroeconomic factor models"],
    "Fundamental: sensitivities first; macroeconomic: sensitivities last."),
 Qh("The information ratio of an index fund that meets its objective exactly is most likely:", "zero.", ["positive but indeterminate.", "equal to its Sharpe ratio."],
    "An index fund that tracks its benchmark exactly has zero active return, so the information ratio (active return ÷ active risk) is zero.",
    ["index fund that meets its investment objective exactly"],
    "Index fund meeting its objective: active return 0 → IR = 0."),
])

# ---------------- V12 Equity valuation, earnings quality ----------------
add("Equity Valuation", """Anja Lindqvist, an analyst at Fjell Research, answers three questions.

Ostmark Glass pays dividends that are far below its FCFE, and its dividends have little relation to its ability to pay. Lindqvist must choose a valuation model.

A colleague says that Corbin Foods must have both a higher-than-average growth rate and a higher-than-average risk to justify its high P/E.

Lindqvist also screens Company R for earnings quality. She separates its accruals into normal accruals, explained by a regression on business activity, and the residual.""", [
 Qh("Lindqvist should most likely value Ostmark Glass with:", "an FCFE model, because dividends differ greatly from the capacity to pay them.",
    ["a residual income model, because FCFE is positive.", "a dividend discount model, because Ostmark pays dividends."],
    "Use FCFE instead of a DDM when dividends differ significantly from FCFE (the capacity to pay), when there are no dividends, or from a control perspective. A residual income model is chosen when free cash flow is negative or hard to forecast.",
    ["far below its FCFE", "little relation to its ability to pay"],
    "Dividends unrelated to the capacity to pay → FCFE model."),
 Qh("The colleague's statement about Corbin Foods is:", "incorrect with respect to risk, because higher risk lowers the justified P/E.",
    ["incorrect with respect to growth, because higher growth lowers the justified P/E.", "correct, because a high P/E needs both higher growth and higher risk."],
    "Higher expected growth justifies a higher P/E; higher risk (a higher required return) justifies a lower P/E.",
    ["both a higher-than-average growth rate and a higher-than-average risk"],
    "Growth ↑ → P/E ↑; risk ↑ → P/E ↓."),
 Qh("The residual of Lindqvist's accruals regression represents:", "discretionary accruals, which may signal earnings manipulation.",
    ["non-discretionary accruals, which arise from normal operations.", "cash earnings."],
    "The part explained by the regression is normal (non-discretionary) accruals. The residual comes from unusual choices: discretionary accruals, a warning sign of manipulation.",
    ["the residual"],
    "Residual of the accruals regression = discretionary accruals = suspicious."),
])
