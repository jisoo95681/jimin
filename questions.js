// Concept questions from the CFA L2 practice sets:
// Intercorporate Investments (FSA), Pricing & Valuation of Forward Commitments (Derivatives),
// and Hedge Fund Strategies (Alternative Investments).
// Each question: topic (one of the 10 CFA L2 topics), reading, q, options (A/B/C), answer (index into options), why.
const QUESTIONS = [
  // ---------- Intercorporate Investments ----------
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "An investor that has CONTROL over an investee (usually >50% of voting shares) accounts for it using:",
    options: ["The equity method", "The acquisition method (full consolidation)", "Fair value through profit or loss"],
    answer: 1,
    why: "Control → consolidate 100% of the subsidiary's assets, liabilities, revenues and expenses line by line, and show a non-controlling interest for the part not owned."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "An investor owns only 16% of a company but has a seat on its board and takes part in policy-making. Its influence is best described as:",
    options: ["Passive (no influence)", "Significant influence", "Control"],
    answer: 1,
    why: "20–50% is only a guideline. Board representation and participation in policy-making show significant influence even below 20% → equity method."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Under the equity method, dividends received from the investee:",
    options: ["Are reported as income", "Increase the investment's carrying value", "Decrease the investment's carrying value"],
    answer: 2,
    why: "The investor already recognised its share of the investee's net income. A dividend is a return OF investment, so it reduces the carrying value."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Holding the ownership stake constant, net income attributable to the parent's shareholders under the equity method vs. full consolidation is:",
    options: ["Higher under full consolidation", "Higher under the equity method", "The same under both"],
    answer: 2,
    why: "Only the presentation differs. Consolidation adds 100% of the investee's net income, then subtracts the non-controlling interest's share, so the parent ends up with the same number."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Compared with full consolidation, the equity method usually reports:",
    options: ["Higher total assets and revenue", "Lower total assets and revenue, with a higher net profit margin and ROA", "The same assets and revenue"],
    answer: 1,
    why: "The equity method shows one investment line and one income line. Net income is the same, but assets and revenue are smaller, so margins and ROA look better."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Under proportionate consolidation, the investor:",
    options: ["Adds 100% of the investee's line items and shows a non-controlling interest", "Adds its % share of each asset, liability, revenue and expense, with no non-controlling interest", "Reports a single investment line on the balance sheet"],
    answer: 1,
    why: "Only the investor's share of each line item is included, so there is no non-controlling interest. Adding 100% would be full consolidation."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "A held-to-maturity (amortized cost) bond bought at a PREMIUM. Over time, its carrying value:",
    options: ["Moves to fair value each period", "Falls toward par using the effective interest method", "Stays at the purchase price"],
    answer: 1,
    why: "Interest income = market rate × carrying value, which is less than the coupon. The difference amortizes the premium, so the carrying value falls toward par. Fair value is ignored."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "A company consolidates an SPE that borrows money to buy the company's receivables. The consolidated balance sheet looks like:",
    options: ["The receivables were sold and removed from the books", "The company borrowed directly against its receivables (assets and liabilities both rise)", "Nothing changed"],
    answer: 1,
    why: "After consolidation the receivables stay on the books, cash rises and debt rises by the SPE's borrowing. It looks the same as a secured loan."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Under the equity method, goodwill is:",
    options: ["Purchase price minus the investor's share of the investee's BOOK value", "The residual: purchase price minus the investor's share of the FAIR value of identifiable net assets", "Always zero"],
    answer: 1,
    why: "First, the excess over book value is assigned to identifiable assets (e.g. PP&E fair value above book). Whatever is left is goodwill. It stays inside the investment account and is not amortized."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "The part of the purchase price assigned to PP&E fair value above book value is:",
    options: ["Never amortized, like goodwill", "Depreciated over the asset's remaining life, which reduces equity income", "Expensed right away"],
    answer: 1,
    why: "It is depreciated over the remaining useful life (e.g. 48 / 10 = 4.8 per year). That lowers the investor's share of income and the carrying value."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Under IFRS, the goodwill impairment loss equals:",
    options: ["Carrying value of the cash-generating unit minus its recoverable amount", "Carrying value of the reporting unit minus its fair value", "All of the goodwill on the books"],
    answer: 0,
    why: "IFRS uses one step: CGU carrying value minus recoverable amount (the higher of fair value less costs to sell and value in use), capped at the goodwill. Comparing with fair value is the US GAAP approach."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Under the PARTIAL goodwill method, the non-controlling interest is measured at:",
    options: ["Its share of the subsidiary's fair value (share price)", "Its share of the fair value of identifiable net assets", "Its share of book value"],
    answer: 1,
    why: "Partial goodwill: NCI = NCI % × identifiable net assets, so only the parent's goodwill is recognised. Full goodwill (required under US GAAP): NCI = NCI % × fair value of the whole subsidiary, which gives more goodwill and a larger NCI."
  },

  // ---------- Forward Commitments ----------
  {
    topic: "Derivatives",
    reading: "Forward Commitments",
    q: "The market futures price is BELOW the carry-arbitrage model price. The arbitrage is:",
    options: ["Sell futures and buy the underlying (carry arbitrage)", "Buy futures and short the underlying (reverse carry arbitrage)", "No action; futures prices can differ from the model"],
    answer: 1,
    why: "The futures is cheap, so buy it. Short-sell the underlying and invest the cash at the risk-free rate. That is reverse carry arbitrage."
  },
  {
    topic: "Derivatives",
    reading: "Forward Commitments",
    q: "Carry benefits (coupons, dividends) paid on the underlying during the contract's life:",
    options: ["Increase the forward price", "Decrease the forward price", "Have no effect"],
    answer: 1,
    why: "F0 = (S0 − PV of benefits) × (1+r)^T. The long does not receive the benefits, so the forward price is lower. A later payment has a smaller effect, so the forward price is higher."
  },
  {
    topic: "Derivatives",
    reading: "Forward Commitments",
    q: "The full (dirty) price of a bond is:",
    options: ["Clean price − accrued interest", "Clean price + accrued interest", "The same as the quoted price"],
    answer: 1,
    why: "Full price = clean (quoted) price + accrued interest. Accrued interest = (days since last coupon / days in period) × coupon."
  },
  {
    topic: "Derivatives",
    reading: "Forward Commitments",
    q: "In bond futures pricing, the quoted futures price is found by:",
    options: ["Compounding the clean price at the risk-free rate", "Taking the future value of the full price, subtracting accrued interest at expiration and any FV of coupons, then dividing by the conversion factor", "Multiplying the full price by the conversion factor"],
    answer: 1,
    why: "Q0 = [FV(full price) − AI at expiration − FV(coupons)] / CF. The conversion factor adjusts for the fact that different bonds can be delivered."
  },
  {
    topic: "Derivatives",
    reading: "Forward Commitments",
    q: "The value of a forward contract at initiation and during its life is:",
    options: ["Zero at initiation; later, the PV of (current forward price − original forward price) for the long", "Always equal to the forward price", "Zero at initiation and at every point after"],
    answer: 0,
    why: "At initiation the forward price is set so that value = 0. Later, for the long: Vt = (Ft − F0) / (1+r)^(T−t). Remember to discount."
  },
  {
    topic: "Derivatives",
    reading: "Forward Commitments",
    q: "A LONG forward position loses value when:",
    options: ["The underlying's price falls", "The risk-free rate rises", "The underlying's price rises"],
    answer: 0,
    why: "The forward price moves in the same direction as the spot price. A lower spot price means a lower Ft, so the long loses. A higher risk-free rate raises Ft, which helps the long."
  },
  {
    topic: "Derivatives",
    reading: "Forward Commitments",
    q: "The fixed rate on a plain vanilla interest rate swap is set so that:",
    options: ["It equals the longest spot rate", "The swap's value is zero at initiation: rate = (1 − last PV factor) / sum of PV factors", "It equals the average of the spot rates"],
    answer: 1,
    why: "The fixed rate makes PV(fixed leg) = PV(floating leg). Per period: (1 − B_N) / ΣB_i. Annualize it by the payment frequency (e.g. ÷ 0.25 for quarterly)."
  },
  {
    topic: "Derivatives",
    reading: "Forward Commitments",
    q: "You pay fixed on a swap at 0.16%. Current swap rates for the remaining term have FALLEN to 0.12%. Your position's value is:",
    options: ["Positive", "Negative", "Zero"],
    answer: 1,
    why: "You are locked into paying more than the current market rate, so the value is negative. Value = (current rate − locked rate) × ΣPV factors × notional."
  },
  {
    topic: "Derivatives",
    reading: "Forward Commitments",
    q: "Equity index futures with a continuous dividend yield δ and rate r: F0 = S0 × e^((r − δ)T). If δ > r, then:",
    options: ["The futures price is above the spot", "The futures price is below the spot", "The futures price equals the spot"],
    answer: 1,
    why: "A negative (r − δ) exponent pulls F0 below S0. Common mistakes: ignoring the dividend yield, or adding it instead of subtracting it."
  },
  {
    topic: "Derivatives",
    reading: "Forward Commitments",
    q: "The market forward price exactly equals the no-arbitrage model price. Then:",
    options: ["Carry arbitrage is available", "Reverse carry arbitrage is available", "No arbitrage opportunity exists"],
    answer: 2,
    why: "Arbitrage exists only when the market price differs from the model price. Too high → carry arbitrage (sell forward, buy underlying). Too low → reverse carry."
  },
  {
    topic: "Derivatives",
    reading: "Forward Commitments",
    q: "The main difference between valuing futures and forwards during their life:",
    options: ["Futures are marked to market daily, so their value resets to zero after each settlement", "Forwards are marked to market daily", "There is no difference"],
    answer: 0,
    why: "Daily settlement moves gains and losses into the margin account, so a futures contract's value goes back to zero each day. A forward builds up value until expiration."
  },

  // ---------- Hedge Fund Strategies ----------
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "Equity market-neutral strategies are best described as using:",
    options: ["A relative value approach", "A directional (trend) approach", "An event-driven approach"],
    answer: 0,
    why: "They hold balanced long and short equity positions so net exposure to the market, sector and size is near zero. Returns come from pairs whose prices are out of line and are expected to revert to their usual relationship."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "An equity market-neutral manager builds the portfolio so that its expected beta is:",
    options: ["About 1", "About 0", "Negative"],
    answer: 1,
    why: "Market risk is neutralized by targeting a portfolio beta of about zero. The manager wants returns from security selection, not from market direction."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "Equity market-neutral strategies are generally most useful for portfolio allocation during:",
    options: ["Strongly trending bull markets", "Non-trending or declining markets", "Periods of rising inflation only"],
    answer: 1,
    why: "They are well diversified and deliver steadier, less volatile returns than many strategies, so they help most when markets are flat or falling."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "The main exception to the low volatility of equity market-neutral strategies is:",
    options: ["Use of significant leverage, which can force portfolio downsizing", "Holding too many pairs", "Low trading turnover"],
    answer: 0,
    why: "Their conservative, constrained approach usually gives low volatility. Heavy leverage can force the manager to cut positions at bad prices, which makes returns much more volatile."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "Event-driven merger arbitrage strategies are exposed to equity market beta because:",
    options: ["They hold only long equity positions", "Deals are more likely to fail in market stress, which creates left-tail risk", "They are not exposed to equity beta"],
    answer: 1,
    why: "Broad market stress can disrupt a deal. Because failures cluster in bad markets, merger arbitrage has market sensitivity and left-tail risk. With high hedge fund fees, this is an expensive form of embedded beta."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "Opportunistic (global macro) strategies have risk exposure to:",
    options: ["Market directionality (\"trendiness\")", "Only idiosyncratic company risk", "No market factors"],
    answer: 0,
    why: "Global macro is based on macro themes and multi-asset relationships. Its key return source is correctly spotting and riding trends in global markets (e.g. inflation), so market direction matters a lot."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "Global macro strategies are typically:",
    options: ["Bottom-up, based on single-company analysis", "Top-down, using macroeconomic and fundamental models", "Purely statistical pairs trades"],
    answer: 1,
    why: "They are top-down. Managers use macro and fundamental models to take a view on the direction or relative value of an asset or asset class."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "A long/short equity manager typically aims for:",
    options: ["About long-only returns with roughly 50% lower standard deviation", "Twice long-only returns with the same volatility", "Negative correlation with equities"],
    answer: 0,
    why: "The goal is returns roughly equal to a long-only approach with about half the standard deviation, which makes it a lower-volatility strategy."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "Dedicated short selling and short-biased strategies offer:",
    options: ["High returns and low volatility", "Negative correlation to equities, but lower return goals and higher volatility", "Zero beta and steady returns"],
    answer: 1,
    why: "Their return goals are lower than most hedge fund strategies, but they have a negative correlation benefit. The short beta exposure makes them more volatile than a typical long/short equity fund."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "An investor ranks LOW VOLATILITY above negative correlation for equity strategies. Which strategy should it most likely avoid?",
    options: ["Long/short equity", "Equity market neutral", "Dedicated short selling / short biased"],
    answer: 2,
    why: "Short-biased strategies are the high-volatility choice (short beta). Long/short equity and equity market neutral are both lower-volatility strategies."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "In a stock-for-stock merger arbitrage, the manager typically:",
    options: ["Buys the acquirer and shorts the target", "Buys the target and shorts the acquirer in the offer ratio", "Buys both companies"],
    answer: 1,
    why: "Long the target and short the acquirer, in the same ratio as the share-exchange offer. The manager earns the spread when the deal completes."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "When a merger is announced, prices usually move like this:",
    options: ["Target rises toward the offer price; acquirer falls", "Target falls; acquirer rises", "Both fall"],
    answer: 0,
    why: "The target rises toward the deal price. The acquirer tends to fall because of possible dilution or the use of cash. If the deal fails, both moves typically reverse, hurting the long target / short acquirer position."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "To protect a merger arbitrage position against the deal failing, the manager should:",
    options: ["Buy OTM puts on the acquirer and OTM calls on the target", "Buy OTM calls on the acquirer and OTM puts on the target", "Sell OTM puts on the target"],
    answer: 1,
    why: "Calls on the acquirer cover the short position if its price jumps back up. Puts on the target protect the long position if its price drops back down."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "The payoff profile of a merger arbitrage strategy resembles:",
    options: ["A riskless bond + a short put on the acquirer + a long call on the target", "A long straddle", "A riskless bond + a long put on the target"],
    answer: 0,
    why: "It pays like a riskless bond if the deal closes. The short put on the acquirer reflects needing to cover the short if the acquirer's price rises. The long call on the target pays if a rival bidder makes a higher offer."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "In merger arbitrage, the 'long call on the target' part of the payoff becomes valuable when:",
    options: ["The deal fails", "Another bidder (a \"white knight\") offers a higher price for the target", "The acquirer's price falls"],
    answer: 1,
    why: "A higher competing bid lifts the target's price above the original deal terms, giving extra upside."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "Buying off-the-run government bonds and shorting duration-matched on-the-run bonds is a:",
    options: ["Carry trade", "Yield curve trade", "Long/short credit trade"],
    answer: 0,
    why: "It is the classic fixed-income arbitrage carry trade: long the higher-yielding, less liquid bond and short the lower-yielding, more liquid bond, earning positive carry until the mispricing reverts."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "In the off-the-run vs. on-the-run carry trade, the main remaining risk is:",
    options: ["Interest rate risk", "Credit risk", "Liquidity risk"],
    answer: 2,
    why: "Matching durations and issuer hedges interest rate and credit risk. What is left is liquidity risk."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "A yield curve (calendar spread) trade using bonds of the SAME issuer mainly carries:",
    options: ["Interest rate risk", "Credit risk", "Currency risk"],
    answer: 0,
    why: "Long and short positions at different points on the curve bet on flattening or steepening. With the same issuer, most credit and liquidity risk is hedged, so interest rate risk is the main concern."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "A long/short credit trade profits from:",
    options: ["Differences in credit quality across issuers (e.g. investment grade vs. high yield)", "On-the-run vs. off-the-run liquidity", "Curve steepening only"],
    answer: 0,
    why: "It trades relative credit risk across issuers. It is naturally more volatile than exploiting small pricing gaps within sovereign debt."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "Going long the assets that rose MOST relative to the others and short those that fell the most is:",
    options: ["Time-series momentum", "Cross-sectional momentum", "Global macro"],
    answer: 1,
    why: "Cross-sectional momentum ranks assets against each other, usually within one asset class. It generally results in a net zero, market-neutral position."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "In time-series momentum, each position is based on:",
    options: ["The asset's own past trend, so the fund can be net long or net short", "Its ranking against the other assets", "Macroeconomic forecasts"],
    answer: 0,
    why: "Positions are set independently: long if the asset is trending up, short if down. The overall portfolio can be net long or net short."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "Which specialist strategy best protects the Sharpe ratio in an equity crisis?",
    options: ["Selling equity volatility", "Buying longer-dated OTM options on VIX futures (long volatility)", "Cross-asset volatility trading"],
    answer: 1,
    why: "Equity volatility is about 80% negatively correlated with equity returns. Long volatility spikes in a crash, lowering portfolio standard deviation and raising the Sharpe ratio, at the cost of the option premium."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "Why buy LONGER-dated, OUT-of-the-money VIX options for a volatility hedge?",
    options: ["They are cheaper in every way", "Longer-dated options have more vega exposure; OTM options trade at higher implied volatility", "They have no time decay"],
    answer: 1,
    why: "Longer-dated options have more absolute exposure to volatility levels (vega). OTM options typically trade at higher implied volatilities than ATM options."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "A seller of equity volatility:",
    options: ["Benefits most in a crisis", "Earns the volatility risk premium for providing crash insurance, with steadier returns in normal markets", "Has no exposure to crises"],
    answer: 1,
    why: "The volatility seller is the insurance provider, not the insured. It collects premium in calm markets and loses when volatility spikes."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "Cross-asset volatility trading (e.g. US vs. Japan) is a poor crisis hedge because:",
    options: ["It always loses money", "It can carry idiosyncratic, macro-oriented risks that hurt in an equity crisis", "It is illegal in most markets"],
    answer: 1,
    why: "It is relative value volatility trading. Its idiosyncratic macro risks can go wrong exactly when equities crash."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "Which is TRUE about fees in a fund of funds (FoF)?",
    options: ["Investors pay one layer of fees", "Investors pay two layers of fees and can't net performance fees across managers", "The general partner absorbs netting risk"],
    answer: 1,
    why: "FoF investors pay the underlying funds' fees plus the FoF's fees. They pay incentive fees to winning managers even if the FoF overall is flat or down. This is netting risk."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "In a standard multi-strategy fund (MSF), netting risk is borne by:",
    options: ["The investor", "The general partner (GP)", "The underlying fund managers"],
    answer: 1,
    why: "The GP absorbs netting risk. Investors pay incentive fees only on total fund performance after netting winning and losing teams."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "Under an MSF 'pass-through' fee model, the investor:",
    options: ["Bears none of the netting risk", "Implicitly pays for part of the netting risk", "Pays no fees at all"],
    answer: 1,
    why: "The fund passes through each team's costs (salaries and incentive fees) and then charges a fund-level incentive fee, so the investor implicitly pays part of the netting risk."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "Which structure has the tactical allocation advantage?",
    options: ["Fund of funds (FoF)", "Multi-strategy fund (MSF)", "Neither"],
    answer: 1,
    why: "An MSF can move capital between strategies faster and more efficiently, with better strategy transparency. This makes it more resilient in preserving capital."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "Which structure has HIGHER manager-specific operational risk?",
    options: ["Fund of funds (FoF)", "Multi-strategy fund (MSF)", "They are the same"],
    answer: 1,
    why: "In an MSF, all teams share operational and risk systems under one roof, so operational risk isn't diversified. In an FoF, each underlying fund runs its own operations."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "When large negative events are expected, the better risk-adjusted return measure is:",
    options: ["Sharpe ratio", "Sortino ratio", "Maximum drawdown"],
    answer: 1,
    why: "The Sortino ratio uses downside deviation (it penalizes only returns below a target). The Sharpe ratio penalizes upside and downside volatility alike. Maximum drawdown is not a risk-adjusted return measure."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "The new portfolio's VARIANCE must be below 90% of the current one. The maximum standard deviation is:",
    options: ["90% × current SD", "√0.90 × current SD (≈ 94.9%)", "0.90² × current SD"],
    answer: 1,
    why: "Variance = SD². Max variance = 0.90 × SD², so max SD = √0.90 × SD. Example: 7.95% → √(0.90 × 63.20) = 7.54%."
  },

  // ---------- Financial Statement Analysis: Pensions ----------
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions (Post-Employment Benefits)",
    q: "The defined benefit obligation (DBO) is:",
    options: ["Plan assets minus the obligation", "The present value of future benefits earned to date (the gross liability)", "The fair value of plan assets"],
    answer: 1,
    why: "The DBO is the gross liability: the present value of the benefits employees have earned so far. It is shown before netting plan assets."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions (Post-Employment Benefits)",
    q: "A DB plan's funded status equals:",
    options: ["Fair value of plan assets − DBO", "DBO − service cost", "Employer contributions − benefits paid"],
    answer: 0,
    why: "Funded status = plan assets − obligation. A negative number (e.g. 24,105 − 28,879 = −4,774) is a net pension liability on the balance sheet; a positive number is a net asset."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions (Post-Employment Benefits)",
    q: "Under IFRS, where does each part of periodic pension cost go?",
    options: ["All of it goes to operating expense", "Service cost → P&L (operating); net interest → P&L (financing); remeasurements → OCI", "Service cost → OCI; net interest → P&L; remeasurements → P&L"],
    answer: 1,
    why: "Service cost is an operating expense. Net interest expense/income is recognized in profit or loss below operating income. Remeasurements go to OCI and are not reclassified to profit or loss."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions (Post-Employment Benefits)",
    q: "Under IFRS, net interest expense on a DB plan is calculated as:",
    options: ["Discount rate × beginning net pension liability (funded status)", "Expected return × plan assets", "Discount rate × ending DBO"],
    answer: 0,
    why: "Net interest = discount rate × beginning funded status. Equivalently, (discount rate × DBO) − (discount rate × plan assets): interest cost on the obligation minus interest income on the assets, both at the same discount rate."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions (Post-Employment Benefits)",
    q: "Interest cost on the DBO is 1,557 but net interest expense in P&L is only 273. The 1,284 difference is:",
    options: ["The actual return on plan assets", "Interest income on plan assets at the discount rate", "Benefits paid during the year"],
    answer: 1,
    why: "1,284 = 5.48% × 23,432 (beginning plan assets). IFRS nets interest income on plan assets, at the discount rate, against interest cost. The actual return is not used in P&L."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions (Post-Employment Benefits)",
    q: "Under IFRS, remeasurements of a DB plan include:",
    options: ["Service cost and past service cost", "Actuarial gains/losses and the actual return on plan assets minus interest income at the discount rate", "Employer contributions"],
    answer: 1,
    why: "Remeasurements = actuarial gains and losses on the obligation, plus the difference between the actual return on plan assets and interest income at the discount rate. They are recognized in OCI and never recycled to profit or loss."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions (Post-Employment Benefits)",
    q: "In the cash flow statement, the sponsor's cash outflow for a DB plan is:",
    options: ["Service cost", "Benefits paid to retirees", "Employer contributions to the plan (operating activities)"],
    answer: 2,
    why: "The company's cash outflow is what it pays into the plan: employer contributions, in operating activities. Benefits are paid by the plan out of plan assets, not by the company."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions (Post-Employment Benefits)",
    q: "Benefits paid to retirees affect the funded status by:",
    options: ["Increasing the net liability", "Nothing: they reduce both the DBO and plan assets by the same amount", "Decreasing the net liability"],
    answer: 1,
    why: "Benefits paid come out of plan assets and reduce the obligation equally, so the funded status is unchanged."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions (Post-Employment Benefits)",
    q: "A DB plan's net pension liability decreases over the year when:",
    options: ["Service cost + interest cost > benefits paid", "Actual return on assets + employer contributions > service cost + interest cost (with no actuarial losses)", "The discount rate is above the actual return on assets"],
    answer: 1,
    why: "Assets grow by actual return + contributions; the obligation grows by service + interest cost (+ actuarial losses). Benefits paid cancel out. If assets grow by more, the net liability shrinks. Example: 1,302 + 693 = 1,995 > 228 + 1,557 = 1,785."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions (Post-Employment Benefits)",
    q: "When valuing equity from enterprise value in a DCF, an analyst treats an underfunded DB plan by:",
    options: ["Deducting the gross DBO", "Deducting the most recent net pension liability, as if it were debt", "Ignoring it; it is non-operating"],
    answer: 1,
    why: "Deduct the latest net pension liability (DBO − plan assets) as a debt-like claim. Deducting the gross DBO would ignore plan assets held solely to pay beneficiaries; using last year's figure would be stale."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions (Post-Employment Benefits)",
    q: "If bond yields (and so the discount rate) fall 100 bp, the funded status may worsen by LESS than the rise in the DBO because:",
    options: ["Remeasurements go to OCI", "Service cost falls", "Plan assets, especially long-duration bonds, may rise in value at the same time"],
    answer: 2,
    why: "A lower discount rate raises the DBO, but falling yields also lift the value of fixed-income plan assets (more so for longer duration), partly offsetting it. Where remeasurements are recorded doesn't change the funded status."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions (Post-Employment Benefits)",
    q: "Plan assets start the year at 23,432 and earn an actual return of 1,302. The actual rate of return is closest to:",
    options: ["5.48%", "5.56%", "5.94%"],
    answer: 1,
    why: "1,302 / 23,432 = 5.56%. That is 8 bp above a 5.48% discount rate, and the excess (1,302 − 1,284 = 18) is the remeasurement gain in OCI."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions and Share-Based Compensation",
    q: "Under IFRS, past service cost (from a plan amendment) is recognized:",
    options: ["In OCI, then amortized", "Immediately in P&L as part of service cost (operating expense)", "Only in the notes"],
    answer: 1,
    why: "IFRS: service cost = current service cost + past service cost, both recognized in P&L straight away as an operating expense. Example: 200 + 120 = 320."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions and Share-Based Compensation",
    q: "Under US GAAP, past service cost is:",
    options: ["Expensed immediately in P&L", "Recognized in OCI and amortized into P&L over time", "Never recognized"],
    answer: 1,
    why: "US GAAP puts past service cost in OCI and amortizes it into pension expense over the remaining service period. IFRS expenses it immediately."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions and Share-Based Compensation",
    q: "Under US GAAP, periodic pension cost in P&L (before amortization) is:",
    options: ["Service cost + net interest at the discount rate", "Current service cost + interest cost − EXPECTED return on plan assets", "Employer contributions"],
    answer: 1,
    why: "US GAAP P&L pension cost = current service cost + interest cost (discount rate × beginning DBO) − expected return on plan assets (+ amortization of past service cost and actuarial gains/losses). Example: 200 + 2,940 − 3,120 = 20."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions and Share-Based Compensation",
    q: "A key IFRS vs US GAAP difference in pension cost is the return on plan assets used in P&L:",
    options: ["IFRS: the discount rate × plan assets; US GAAP: the expected rate of return × plan assets", "Both use the actual return", "IFRS: the expected return; US GAAP: the discount rate"],
    answer: 0,
    why: "IFRS nets interest income on plan assets at the discount rate (as part of net interest). US GAAP subtracts the expected return on plan assets. Under either standard, the difference from the actual return goes to OCI."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions and Share-Based Compensation",
    q: "To forecast next year's IFRS pension cost in P&L, use:",
    options: ["Service cost + discount rate × this year's ENDING net pension liability", "Service cost + discount rate × this year's beginning DBO", "Employer contributions + service cost"],
    answer: 0,
    why: "Next year's net interest = discount rate × net pension liability at the start of next year (= this year's end). Example: 320 + 7% × (41,720 − 38,700) = 320 + 211 ≈ 531."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions and Share-Based Compensation",
    q: "Employer contributions to a DB plan are:",
    options: ["An operating expense in P&L", "A cash outflow; they are not the pension expense", "Recognized in OCI"],
    answer: 1,
    why: "Contributions move cash into the plan (an operating cash outflow) and raise plan assets. The P&L expense is the periodic pension cost, not the contribution."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions and Share-Based Compensation",
    q: "A LOWER expected volatility assumption for stock option grants leads to:",
    options: ["A higher option fair value and higher compensation expense", "A lower option fair value, lower compensation expense and higher net income", "No change to the expense"],
    answer: 1,
    why: "Option value rises with volatility. Lower volatility → lower grant-date fair value → less expense as the award vests → higher net income."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions and Share-Based Compensation",
    q: "The grant-date fair value of a restricted stock unit (RSU) is based on:",
    options: ["An option-pricing model using volatility", "The share price (possibly adjusted for expected dividends)", "The exercise price"],
    answer: 1,
    why: "An RSU is a promise of shares, with no exercise price, so it is valued at the share price (adjusted for expected dividends if holders don't receive them). Volatility doesn't affect it."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions and Share-Based Compensation",
    q: "Stock option compensation expense is:",
    options: ["Measured at grant-date fair value and recognized over the vesting period", "Remeasured at fair value every year", "Recognized only when the options are exercised"],
    answer: 0,
    why: "Equity-settled options are measured once at grant-date fair value, and that amount is expensed over the vesting (service) period. Later changes in the share price don't change it."
  },

  // ---------- Equity Valuation: Discounted Dividend Valuation ----------
  {
    topic: "Equity Valuation",
    reading: "Discounted Dividend Valuation",
    q: "Using the CAPM, the required return for a stock with beta 0.84, a risk-free rate of 4.1% and an equity risk premium of 5.5% is:",
    options: ["8.72%", "9.60%", "4.62%"],
    answer: 0,
    why: "r = rf + β × ERP = 4.1% + 0.84 × 5.5% = 4.1% + 4.62% = 8.72%."
  },
  {
    topic: "Equity Valuation",
    reading: "Discounted Dividend Valuation",
    q: "A two-stage DDM is most appropriate for a company that expects:",
    options: ["Constant growth forever", "A period of extraordinary growth followed by stable (normal) growth", "Growth that declines smoothly forever"],
    answer: 1,
    why: "A two-stage DDM values an initial high-growth period dividend by dividend, then a terminal value for stable growth after it. Constant growth fits the Gordon growth model; a smooth decline fits the H-model."
  },
  {
    topic: "Equity Valuation",
    reading: "Discounted Dividend Valuation",
    q: "In a two-stage DDM with an n-year first stage, the Gordon-growth terminal value at time n is:",
    options: ["Dn / (r − gL)", "Dn × (1 + gL) / (r − gL) = Dn+1 / (r − gL)", "Dn / r"],
    answer: 1,
    why: "The terminal value at time n uses the NEXT dividend: Vn = Dn+1 / (r − gL) = Dn(1 + gL)/(r − gL). Example: 0.4992 × 1.07 / (0.0872 − 0.07) = 31.06. It is then discounted back n years."
  },
  {
    topic: "Equity Valuation",
    reading: "Discounted Dividend Valuation",
    q: "In a two-stage DDM, the present value of the terminal value is typically:",
    options: ["A small part of total value", "A large share of total value (e.g. about 90%)", "Exactly half of total value"],
    answer: 1,
    why: "Most value comes from the stable-growth stage. Example: PV of V8 = 15.9095 out of 17.6528 total, about 0.90. That is why terminal-value assumptions matter so much."
  },
  {
    topic: "Equity Valuation",
    reading: "Discounted Dividend Valuation",
    q: "Using a trailing P/E to estimate the terminal value Vn, you first find earnings as:",
    options: ["En = Dn / (1 − b), where b is the retention ratio", "En = Dn × b", "En = Dn / b"],
    answer: 0,
    why: "Payout ratio = 1 − b = Dn/En, so En = Dn / (1 − b). Then Vn = trailing P/E × En. Example: E8 = 0.4992 / 0.30 = 1.664; V8 = 17 × 1.664 = 28.29."
  },
  {
    topic: "Equity Valuation",
    reading: "Discounted Dividend Valuation",
    q: "The H-model value of a stock is:",
    options: ["D0(1 + gL)/(r − gL) + D0 × H × (gS − gL)/(r − gL)", "D1/(r − gS)", "D0 × H / (r − gL)"],
    answer: 0,
    why: "The H-model is a Gordon growth value at the long-run rate gL plus a premium for the extra, linearly declining early growth: D0 × H × (gS − gL)/(r − gL)."
  },
  {
    topic: "Equity Valuation",
    reading: "Discounted Dividend Valuation",
    q: "In the H-model, H equals:",
    options: ["The full length of the high-growth period", "Half the length of the period over which growth declines", "The long-run growth rate"],
    answer: 1,
    why: "H is the half-life of the high-growth period: if growth falls linearly from gS to gL over 8 years, H = 8/2 = 4."
  },
  {
    topic: "Equity Valuation",
    reading: "Discounted Dividend Valuation",
    q: "If intrinsic value (e.g. C$13.74) is BELOW the market price (C$17), the stock is:",
    options: ["Undervalued", "Fairly valued", "Overvalued"],
    answer: 2,
    why: "Market price above intrinsic value means the stock is overvalued (sell/avoid). Intrinsic value above price means it is undervalued."
  },
  {
    topic: "Equity Valuation",
    reading: "Discounted Dividend Valuation",
    q: "If the high-growth first stage is assumed to last LONGER (e.g. 11 years instead of 8), all else equal:",
    options: ["The stock's value falls and the terminal value's share rises", "The stock's value rises and the terminal value's share of total value falls", "Nothing changes"],
    answer: 1,
    why: "More years of extraordinary growth add value. The terminal value is reached later, so its PV is smaller, while the first stage contributes more, so the second stage's share of total value falls."
  }
];


if (typeof module !== "undefined") module.exports = QUESTIONS;
