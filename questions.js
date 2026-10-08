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
    options: ["The equity method, recognizing its share of the investee's net income", "The acquisition method, consolidating 100% of the investee's line items", "Fair value through profit or loss, remeasured each period"],
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
    options: ["Higher total assets and revenue, because it adds the investee's line items", "Lower total assets and revenue, with a higher net margin and ROA", "The same assets and revenue, since net income is identical either way"],
    answer: 1,
    why: "The equity method shows one investment line and one income line. Net income is the same, but assets and revenue are smaller, so margins and ROA look better."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Under proportionate consolidation, the investor:",
    options: ["Adds 100% of the investee's line items and shows a non-controlling interest", "Adds its % share of each line item, with no non-controlling interest", "Reports one investment line on the balance sheet and its share of profit"],
    answer: 1,
    why: "Only the investor's share of each line item is included, so there is no non-controlling interest. Adding 100% would be full consolidation."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "A held-to-maturity (amortized cost) bond bought at a PREMIUM. Over time, its carrying value:",
    options: ["Is remeasured to fair value each period through profit or loss", "Falls toward par using the effective interest method", "Stays at the purchase price until the bond matures"],
    answer: 1,
    why: "Interest income = market rate × carrying value, which is less than the coupon. The difference amortizes the premium, so the carrying value falls toward par. Fair value is ignored."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "A company consolidates an SPE that borrows money to buy the company's receivables. The consolidated balance sheet looks like:",
    options: ["The receivables were sold to the SPE, so they leave the balance sheet and cash rises", "Assets and liabilities both rise, as if it borrowed against them", "Nothing changes, because the SPE is a separate legal entity with its own debt"],
    answer: 1,
    why: "After consolidation the receivables stay on the books, cash rises and debt rises by the SPE's borrowing. It looks the same as a secured loan."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Under the equity method, goodwill is:",
    options: ["Purchase price minus the investor's share of the investee's BOOK value", "Purchase price minus its share of the FAIR value of identifiable net assets", "Always zero, because goodwill is only recognized on full consolidation"],
    answer: 1,
    why: "First, the excess over book value is assigned to identifiable assets (e.g. PP&E fair value above book). Whatever is left is goodwill. It stays inside the investment account and is not amortized."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "The part of the purchase price assigned to PP&E fair value above book value is:",
    options: ["Never amortized, just like goodwill, and only tested for impairment", "Depreciated over the asset's remaining life, reducing equity income", "Expensed right away in the year of acquisition as a one-off charge"],
    answer: 1,
    why: "It is depreciated over the remaining useful life (e.g. 48 / 10 = 4.8 per year). That lowers the investor's share of income and the carrying value."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Under IFRS, the goodwill impairment loss equals:",
    options: ["Carrying value of the cash-generating unit minus its recoverable amount", "Carrying value of the reporting unit minus the reporting unit's fair value", "All of the goodwill on the books, written off in a single step"],
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
    options: ["Sell futures and buy the underlying, financing it at the risk-free rate", "Buy futures and short the underlying, lending the proceeds (reverse carry)", "No action, because futures prices can drift away from the model price"],
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
    why: "Full price = clean (quoted) price + accrued interest. Accrued interest = [[days since last coupon|days in period]] × coupon."
  },
  {
    topic: "Derivatives",
    reading: "Forward Commitments",
    q: "In bond futures pricing, the quoted futures price is found by:",
    options: ["Compound the clean price at the risk-free rate to expiry, then divide by the conversion factor", "FV of full price − accrued interest at expiry − FV of coupons, ÷ conversion factor", "Multiply today's full price by the conversion factor, then subtract the accrued interest at expiry"],
    answer: 1,
    why: "Q0 = [[FV(full price) − AI at expiration − FV(coupons)|CF]]. The conversion factor adjusts for the fact that different bonds can be delivered."
  },
  {
    topic: "Derivatives",
    reading: "Forward Commitments",
    q: "The value of a forward contract at initiation and during its life is:",
    options: ["Zero at initiation; later, PV of (current − original forward price) for the long", "Always equal to the forward price agreed when the contract was signed, for both parties", "Zero at initiation and zero at every point after, since no cash changes hands until expiry"],
    answer: 0,
    why: "At initiation the forward price is set so that value = 0. Later, for the long: Vt = [[Ft − F0|(1 + r)^(T−t)]]. Remember to discount."
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
    options: ["Rate = [[1 − first PV factor|last PV factor]], from the first and last spot rates", "Rate = [[1 − last PV factor|sum of all PV factors]]", "The simple average of the spot rates over the swap's life"],
    answer: 1,
    why: "The fixed rate makes PV(fixed leg) = PV(floating leg). Per period: [[1 − B_N|ΣB_i]]. Annualize it by the payment frequency (e.g. ÷ 0.25 for quarterly)."
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
    options: ["Futures are marked to market daily, so their value resets to zero each day", "Forwards are marked to market daily, so their value resets to zero each day", "None: both are valued as the PV of the change in the forward price"],
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
    options: ["Significant leverage, which can force sudden portfolio downsizing in stress", "Holding too many long/short pairs, which raises transaction costs sharply", "Low trading turnover, which leaves positions exposed to stale prices"],
    answer: 0,
    why: "Their conservative, constrained approach usually gives low volatility. Heavy leverage can force the manager to cut positions at bad prices, which makes returns much more volatile."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "Event-driven merger arbitrage strategies are exposed to equity market beta because:",
    options: ["They hold only long equity positions in the target companies", "Deals are more likely to fail in market stress (left-tail risk)", "They are not exposed to equity beta at all, by design of the trade"],
    answer: 1,
    why: "Broad market stress can disrupt a deal. Because failures cluster in bad markets, merger arbitrage has market sensitivity and left-tail risk. With high hedge fund fees, this is an expensive form of embedded beta."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "Opportunistic (global macro) strategies have risk exposure to:",
    options: ["Market directionality (\"trendiness\") across asset classes", "Only idiosyncratic company risk from security selection", "No market factors, because positions are fully hedged"],
    answer: 0,
    why: "Global macro is based on macro themes and multi-asset relationships. Its key return source is correctly spotting and riding trends in global markets (e.g. inflation), so market direction matters a lot."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "Global macro strategies are typically:",
    options: ["Bottom-up, built on detailed single-company analysis", "Top-down, using macroeconomic and fundamental models", "Purely statistical pairs trades within one industry"],
    answer: 1,
    why: "They are top-down. Managers use macro and fundamental models to take a view on the direction or relative value of an asset or asset class."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "A long/short equity manager typically aims for:",
    options: ["About long-only returns with roughly 50% lower standard deviation", "About twice long-only returns with roughly the same volatility", "Strongly negative correlation with equities and steady positive returns"],
    answer: 0,
    why: "The goal is returns roughly equal to a long-only approach with about half the standard deviation, which makes it a lower-volatility strategy."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "Dedicated short selling and short-biased strategies offer:",
    options: ["High returns with low volatility, plus negative correlation to equities", "Negative correlation to equities, but lower returns and higher volatility", "Zero beta to equities with steady, bond-like returns in all markets"],
    answer: 1,
    why: "Their return goals are lower than most hedge fund strategies, but they have a negative correlation benefit. The short beta exposure makes them more volatile than a typical long/short equity fund."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "An investor ranks LOW VOLATILITY above negative correlation for equity strategies. Which strategy should it most likely avoid?",
    options: ["Long/short equity, which keeps some net long exposure", "Equity market neutral, which targets zero beta", "Dedicated short selling / short biased"],
    answer: 2,
    why: "Short-biased strategies are the high-volatility choice (short beta). Long/short equity and equity market neutral are both lower-volatility strategies."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "In a stock-for-stock merger arbitrage, the manager typically:",
    options: ["Buys the acquirer and shorts the target in the offer ratio", "Buys the target and shorts the acquirer in the offer ratio", "Buys both companies and hedges with index futures"],
    answer: 1,
    why: "Long the target and short the acquirer, in the same ratio as the share-exchange offer. The manager earns the spread when the deal completes."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "When a merger is announced, prices usually move like this:",
    options: ["Target rises toward the offer price; acquirer falls", "Target falls toward the offer price; acquirer rises", "Both fall, as the market prices in deal risk"],
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
    options: ["A riskless bond + a short put on the acquirer + a long call on the target", "A long straddle on the target, paying off if the price moves either way", "A riskless bond + a long put on the target + a short call on the acquirer"],
    answer: 0,
    why: "It pays like a riskless bond if the deal closes. The short put on the acquirer reflects needing to cover the short if the acquirer's price rises. The long call on the target pays if a rival bidder makes a higher offer."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "In merger arbitrage, the 'long call on the target' part of the payoff becomes valuable when:",
    options: ["The deal fails and the target falls back to its pre-deal price", "Another bidder (a \"white knight\") offers more for the target", "The acquirer's share price falls while the deal is still pending"],
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
    options: ["Interest rate risk", "Credit risk of that issuer", "Currency risk"],
    answer: 0,
    why: "Long and short positions at different points on the curve bet on flattening or steepening. With the same issuer, most credit and liquidity risk is hedged, so interest rate risk is the main concern."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "A long/short credit trade profits from:",
    options: ["Credit quality differences across issuers (e.g. IG vs. high yield)", "Liquidity differences between on-the-run and off-the-run bonds of one issuer", "A steepening of the yield curve of a single government issuer over time"],
    answer: 0,
    why: "It trades relative credit risk across issuers. It is naturally more volatile than exploiting small pricing gaps within sovereign debt."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "Going long the assets that rose MOST relative to the others and short those that fell the most is:",
    options: ["Time-series momentum", "Cross-sectional momentum", "Global macro trend following"],
    answer: 1,
    why: "Cross-sectional momentum ranks assets against each other, usually within one asset class. It generally results in a net zero, market-neutral position."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "In time-series momentum, each position is based on:",
    options: ["The asset's own past trend, so the fund can be net long or net short", "Its ranking against the other assets, so the book stays market neutral", "Macroeconomic forecasts of growth and inflation for each asset's market"],
    answer: 0,
    why: "Positions are set independently: long if the asset is trending up, short if down. The overall portfolio can be net long or net short."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "Which specialist strategy best protects the Sharpe ratio in an equity crisis?",
    options: ["Selling equity volatility to earn the variance risk premium", "Buying longer-dated out-of-the-money options on VIX futures", "Cross-asset volatility trading between two equity markets"],
    answer: 1,
    why: "Equity volatility is about 80% negatively correlated with equity returns. Long volatility spikes in a crash, lowering portfolio standard deviation and raising the Sharpe ratio, at the cost of the option premium."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "Why buy LONGER-dated, OUT-of-the-money VIX options for a volatility hedge?",
    options: ["They are cheaper in every way, so more protection can be bought per dollar", "Longer-dated options have more vega; OTM options trade at higher implied vol", "They have no time decay, so the hedge does not bleed while waiting"],
    answer: 1,
    why: "Longer-dated options have more absolute exposure to volatility levels (vega). OTM options typically trade at higher implied volatilities than ATM options."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "A seller of equity volatility:",
    options: ["Benefits most in a crisis, because volatility spikes raise its profits", "Earns the volatility risk premium for providing crash insurance", "Has no exposure to crises once positions are delta-hedged each day"],
    answer: 1,
    why: "The volatility seller is the insurance provider, not the insured. It collects premium in calm markets and loses when volatility spikes."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "Cross-asset volatility trading (e.g. US vs. Japan) is a poor crisis hedge because:",
    options: ["It always loses money in calm markets, so the carry cost is too high", "It can carry idiosyncratic, macro-oriented risks that hurt in a crisis", "It is restricted in most markets, so positions cannot be sized properly"],
    answer: 1,
    why: "It is relative value volatility trading. Its idiosyncratic macro risks can go wrong exactly when equities crash."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "Which is TRUE about fees in a fund of funds (FoF)?",
    options: ["Investors pay one layer of fees, because the FoF manager waives its own", "Two layers of fees, and performance fees can't be netted across managers", "The general partner absorbs netting risk, so investors pay only on net gains"],
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
    options: ["Bears none of the netting risk, which stays with the fund's GP", "Implicitly pays for part of the netting risk through the fee structure", "Pays no fees at all, since costs are passed to the underlying managers"],
    answer: 1,
    why: "The fund passes through each team's costs (salaries and incentive fees) and then charges a fund-level incentive fee, so the investor implicitly pays part of the netting risk."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "Which structure has the tactical allocation advantage?",
    options: ["Fund of funds (FoF)", "Multi-strategy fund (MSF)", "Neither; both are equal in this respect"],
    answer: 1,
    why: "An MSF can move capital between strategies faster and more efficiently, with better strategy transparency. This makes it more resilient in preserving capital."
  },
  {
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    q: "Which structure has HIGHER manager-specific operational risk?",
    options: ["Fund of funds (FoF)", "Multi-strategy fund (MSF)", "They are the same for both structures"],
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
    options: ["90% × current standard deviation", "√0.90 × current SD (≈ 94.9%)", "0.90² × current SD (≈ 81%)"],
    answer: 1,
    why: "Variance = SD². Max variance = 0.90 × SD², so max SD = √0.90 × SD. Example: current SD 7.95% (variance 7.95² = 63.20): max SD = √(0.90 × 63.20) = 7.54%."
  },

  // ---------- Financial Statement Analysis: Pensions ----------
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions (Post-Employment Benefits)",
    q: "The defined benefit obligation (DBO) is:",
    options: ["Plan assets minus the obligation, i.e. the plan's funded status", "PV of future benefits earned to date (the gross liability)", "The fair value of plan assets set aside to pay future benefits"],
    answer: 1,
    why: "The DBO is the gross liability: the present value of the benefits employees have earned so far. It is shown before netting plan assets."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions (Post-Employment Benefits)",
    q: "A DB plan's funded status equals:",
    options: ["Fair value of plan assets − DBO", "DBO − service cost", "Employer contributions − benefits paid"],
    answer: 0,
    why: "Funded status = plan assets − obligation. A negative number (e.g. plan assets 24,105 − DBO 28,879 = −4,774) is a net pension liability on the balance sheet; a positive number is a net asset."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions (Post-Employment Benefits)",
    q: "Under IFRS, where does each part of periodic pension cost go?",
    options: ["All of it goes to operating expense in profit or loss", "Service cost → P&L; net interest → P&L; remeasurements → OCI", "Service cost → OCI; net interest → P&L; remeasurements → P&L"],
    answer: 1,
    why: "Service cost is an operating expense. Net interest expense/income is recognized in profit or loss below operating income. Remeasurements go to OCI and are not reclassified to profit or loss."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions (Post-Employment Benefits)",
    q: "Under IFRS, net interest expense on a DB plan is calculated as:",
    options: ["Discount rate × beginning net pension liability (funded status)", "Expected return on plan assets × beginning fair value of plan assets", "Discount rate × ending DBO, after benefits paid during the year"],
    answer: 0,
    why: "Net interest = discount rate × beginning funded status. Equivalently, (discount rate × DBO) − (discount rate × plan assets): interest cost on the obligation minus interest income on the assets, both at the same discount rate."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions (Post-Employment Benefits)",
    q: "Under IFRS, a DB plan has beginning plan assets of 23,432 and a discount rate of 5.48%. Interest cost on the DBO is 1,557 but net interest expense in P&L is only 273. The 1,284 difference is:",
    options: ["The actual return on plan assets earned during the year", "Interest income on plan assets at the discount rate", "Benefits paid to retirees during the year"],
    answer: 1,
    why: "1,557 − 273 = 1,284, and 1,284 = 5.48% discount rate × 23,432 beginning plan assets. IFRS nets interest income on plan assets, at the discount rate, against interest cost. The actual return is not used in P&L."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions (Post-Employment Benefits)",
    q: "Under IFRS, remeasurements of a DB plan include:",
    options: ["Service cost and past service cost arising from plan amendments", "Actuarial gains/losses; return on assets beyond the discount rate", "Employer contributions paid into the plan during the reporting year"],
    answer: 1,
    why: "Remeasurements = actuarial gains and losses on the obligation, plus the difference between the actual return on plan assets and interest income at the discount rate. They are recognized in OCI and never recycled to profit or loss."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions (Post-Employment Benefits)",
    q: "In the cash flow statement, the sponsor's cash outflow for a DB plan is:",
    options: ["Service cost, the benefits earned by employees this year", "Benefits paid to retirees out of the plan assets", "Employer contributions to the plan (operating)"],
    answer: 2,
    why: "The company's cash outflow is what it pays into the plan: employer contributions, in operating activities. Benefits are paid by the plan out of plan assets, not by the company."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions (Post-Employment Benefits)",
    q: "Benefits paid to retirees affect the funded status by:",
    options: ["Increasing the net liability, since cash leaves the plan", "Nothing: DBO and plan assets fall by the same amount", "Decreasing the net liability, since the DBO falls"],
    answer: 1,
    why: "Benefits paid come out of plan assets and reduce the obligation equally, so the funded status is unchanged."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions (Post-Employment Benefits)",
    q: "A DB plan's net pension liability decreases over the year when:",
    options: ["Service cost + interest cost exceed the benefits paid to retirees", "Asset returns + contributions exceed service + interest cost", "The discount rate is above the actual return on plan assets"],
    answer: 1,
    why: "Assets grow by actual return + contributions; the obligation grows by service + interest cost (+ actuarial losses). Benefits paid cancel out. If assets grow by more, the net liability shrinks. Example: actual return 1,302 + employer contributions 693 = 1,995, which exceeds service cost 228 + interest cost 1,557 = 1,785, so the net liability falls."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions (Post-Employment Benefits)",
    q: "When valuing equity from enterprise value in a DCF, an analyst treats an underfunded DB plan by:",
    options: ["Deducting the gross DBO, ignoring the plan assets set aside", "Deducting the latest net pension liability, as if it were debt", "Ignoring it, because pension items are non-operating"],
    answer: 1,
    why: "Deduct the latest net pension liability (DBO − plan assets) as a debt-like claim. Deducting the gross DBO would ignore plan assets held solely to pay beneficiaries; using last year's figure would be stale."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions (Post-Employment Benefits)",
    q: "If bond yields (and so the discount rate) fall 100 bp, the funded status may worsen by LESS than the rise in the DBO because:",
    options: ["Remeasurements go to OCI, so they do not reach the funded status", "Service cost falls when the discount rate is lower", "Plan assets, especially long-duration bonds, may rise too"],
    answer: 2,
    why: "A lower discount rate raises the DBO, but falling yields also lift the value of fixed-income plan assets (more so for longer duration), partly offsetting it. Where remeasurements are recorded doesn't change the funded status."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions and Share-Based Compensation",
    q: "Under IFRS, past service cost (from a plan amendment) is recognized:",
    options: ["In OCI, then amortized into P&L over the remaining service period", "Immediately in P&L as part of service cost, an operating expense", "Only in the notes, without affecting the financial statements"],
    answer: 1,
    why: "IFRS: service cost = current service cost + past service cost, both recognized in P&L straight away as an operating expense. Example: current service cost 200 + past service cost 120 = total service cost of 320 in P&L."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions and Share-Based Compensation",
    q: "Under US GAAP, past service cost is:",
    options: ["Expensed immediately in P&L as part of service cost", "Recognized in OCI and amortized into P&L over time", "Never recognized, only disclosed in the pension notes"],
    answer: 1,
    why: "US GAAP puts past service cost in OCI and amortizes it into pension expense over the remaining service period. IFRS expenses it immediately."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions and Share-Based Compensation",
    q: "Under US GAAP, periodic pension cost in P&L (before amortization) is:",
    options: ["Service cost + net interest on the net liability at the discount rate", "Service cost + interest cost − EXPECTED return on plan assets", "Employer contributions made to the plan during the year"],
    answer: 1,
    why: "US GAAP P&L pension cost = current service cost + interest cost (discount rate × beginning DBO) − expected return on plan assets (+ amortization of past service cost and actuarial gains/losses). Example: service cost 200 + interest cost 2,940 − expected return on assets 3,120 = pension cost of 20."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions and Share-Based Compensation",
    q: "A key IFRS vs US GAAP difference in pension cost is the return on plan assets used in P&L:",
    options: ["IFRS: discount rate × assets; US GAAP: expected return × assets", "Both use the actual return earned on plan assets during the year", "IFRS: expected return × assets; US GAAP: discount rate × assets"],
    answer: 0,
    why: "IFRS nets interest income on plan assets at the discount rate (as part of net interest). US GAAP subtracts the expected return on plan assets. Under either standard, the difference from the actual return goes to OCI."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions and Share-Based Compensation",
    q: "To forecast next year's IFRS pension cost in P&L, use:",
    options: ["Service cost + discount rate × this year's ENDING net pension liability", "Service cost + discount rate × this year's beginning gross DBO balance", "Employer contributions + the service cost expected for next year combined"],
    answer: 0,
    why: "Next year's net interest = discount rate × net pension liability at the start of next year (= this year's end). Example: service cost 320, discount rate 7%, ending DBO 41,720 and ending plan assets 38,700: 320 + 7% × (41,720 − 38,700) = 320 + 211 ≈ 531."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions and Share-Based Compensation",
    q: "Employer contributions to a DB plan are:",
    options: ["An operating expense in P&L in the year they are paid", "A cash outflow; they are not the pension expense", "Recognized in OCI as part of remeasurements"],
    answer: 1,
    why: "Contributions move cash into the plan (an operating cash outflow) and raise plan assets. The P&L expense is the periodic pension cost, not the contribution."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions and Share-Based Compensation",
    q: "A LOWER expected volatility assumption for stock option grants leads to:",
    options: ["A higher option fair value and a higher compensation expense", "A lower option value, a lower compensation expense and higher net income", "No change to the expense, because volatility only affects disclosure"],
    answer: 1,
    why: "Option value rises with volatility. Lower volatility → lower grant-date fair value → less expense as the award vests → higher net income."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions and Share-Based Compensation",
    q: "The grant-date fair value of a restricted stock unit (RSU) is based on:",
    options: ["An option-pricing model using volatility and the exercise price", "The share price (adjusted for expected dividends)", "The exercise price set in the grant agreement"],
    answer: 1,
    why: "An RSU is a promise of shares, with no exercise price, so it is valued at the share price (adjusted for expected dividends if holders don't receive them). Volatility doesn't affect it."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Pensions and Share-Based Compensation",
    q: "Stock option compensation expense is:",
    options: ["Measured at grant-date fair value and spread over the vesting period", "Remeasured at fair value every year until the options are exercised", "Recognized only when the options are exercised, at intrinsic value"],
    answer: 0,
    why: "Equity-settled options are measured once at grant-date fair value, and that amount is expensed over the vesting (service) period. Later changes in the share price don't change it."
  },

  // ---------- Equity Valuation: Discounted Dividend Valuation ----------
  {
    topic: "Equity Valuation",
    reading: "Discounted Dividend Valuation",
    q: "A two-stage DDM is most appropriate for a company that expects:",
    options: ["Constant growth forever at a rate below the required return", "Extraordinary growth for a while, then stable growth", "Growth that declines smoothly in a straight line forever"],
    answer: 1,
    why: "A two-stage DDM values an initial high-growth period dividend by dividend, then a terminal value for stable growth after it. Constant growth fits the Gordon growth model; a smooth decline fits the H-model."
  },
  {
    topic: "Equity Valuation",
    reading: "Discounted Dividend Valuation",
    q: "In a two-stage DDM with an n-year first stage, the Gordon-growth terminal value at time n is:",
    options: ["[[Dn|r − gL]], using the last first-stage dividend", "[[Dn × (1 + gL)|r − gL]]", "[[Dn × (1 + gS)|r − gS]], using the first-stage growth rate"],
    answer: 1,
    why: "The terminal value at time n uses the NEXT dividend: Vn = [[Dn+1|r − gL]] = [[Dn(1 + gL)|r − gL]]. Example: last first-stage dividend D8 = 0.4992, long-run growth gL = 7%, required return r = 8.72%: V8 = 0.4992 × 1.07 / (0.0872 − 0.07) = 31.06. It is then discounted back n years."
  },
  {
    topic: "Equity Valuation",
    reading: "Discounted Dividend Valuation",
    q: "In a two-stage DDM, the present value of the terminal value is typically:",
    options: ["A small part of total value, as it is discounted over many years", "A large share of total value, often around 90% of it", "Exactly half of total value in a typical two-stage model"],
    answer: 1,
    why: "Most value comes from the stable-growth stage. Example: in one two-stage valuation the PV of the terminal value was 15.91 out of a total value of 17.65, about 90%. That is why terminal-value assumptions matter so much."
  },
  {
    topic: "Equity Valuation",
    reading: "Discounted Dividend Valuation",
    q: "Using a trailing P/E to estimate the terminal value Vn, you first find earnings as:",
    options: ["En = [[Dn|1 − b]], where b is the retention ratio", "En = Dn × b, where b is the retention ratio", "En = [[Dn|b]], where b is the retention ratio"],
    answer: 0,
    why: "Payout ratio = 1 − b = Dn/En, so En = [[Dn|1 − b]]. Then Vn = trailing P/E × En. Example: D8 = 0.4992 and retention b = 0.70 (payout 0.30): E8 = 0.4992 / 0.30 = 1.664; with a trailing P/E of 17, V8 = 17 × 1.664 = 28.29."
  },
  {
    topic: "Equity Valuation",
    reading: "Discounted Dividend Valuation",
    q: "The H-model value of a stock is:",
    options: ["[[D0(1 + gL)|r − gL]] + [[D0 × H × (gS − gL)|r − gL]]", "[[D0(1 + gS)|r − gS]] + [[D0 × H × (gS + gL)|r − gS]]", "[[D0 × H × (1 + gL)|r − gL]] + [[D0 × (gS − gL)|r − gS]]"],
    answer: 0,
    why: "The H-model is a Gordon growth value at the long-run rate gL plus a premium for the extra, linearly declining early growth: [[D0 × H × (gS − gL)|r − gL]]."
  },
  {
    topic: "Equity Valuation",
    reading: "Discounted Dividend Valuation",
    q: "In the H-model, H equals:",
    options: ["The full length of the high-growth period in years", "Half the length of the growth-decline period", "The long-run growth rate the firm settles into"],
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
    options: ["The stock's value falls and the terminal value's share of total value rises", "The stock's value rises and the terminal value's share of total value falls", "Nothing changes, because the terminal value is discounted at the same rate"],
    answer: 1,
    why: "More years of extraordinary growth add value. The terminal value is reached later, so its PV is smaller, while the first stage contributes more, so the second stage's share of total value falls."
  },
  {
    topic: "Equity Valuation",
    reading: "Market-Based Valuation: Price and Enterprise Value Multiples",
    q: "A company just made a major acquisition that will significantly change its future results. Which P/E is most appropriate?",
    options: ["Trailing P/E", "Forward (leading) P/E", "P/E on normalized historical earnings"],
    answer: 1,
    why: "After a major change such as an acquisition or divestiture, trailing earnings no longer represent the business. Forward EPS estimates include the acquired business, so the forward (leading, prospective) P/E is most appropriate."
  },
  {
    topic: "Equity Valuation",
    reading: "Market-Based Valuation: Price and Enterprise Value Multiples",
    q: "For a cyclical company whose current earnings are depressed by a downturn and restructuring charges, the best P/E approach is:",
    options: ["P/E on trailing earnings, which reflect the latest four quarters", "P/E on normalized (mid-cycle) earnings the firm could earn today", "P/B only, since book value is never affected by the cycle"],
    answer: 1,
    why: "Normalized earnings estimate the EPS the company could achieve under mid-cyclical conditions, removing the distortion of cyclically depressed or unusual earnings."
  },
  {
    topic: "Equity Valuation",
    reading: "Market-Based Valuation: Price and Enterprise Value Multiples",
    q: "Which is a valid reason to prefer the P/E over the P/S?",
    options: ["Earnings are more stable than sales over the business cycle", "Earnings are harder for management to manipulate than sales", "Earnings reflect financial leverage; sales are pre-financing"],
    answer: 2,
    why: "Share price reflects the effect of debt; sales does not (it is before financing and ignores cost structure). Earnings reflect operating and financial leverage. Sales are actually MORE stable and LESS easily manipulated than earnings, which is the P/S's advantage."
  },
  {
    topic: "Equity Valuation",
    reading: "Market-Based Valuation: Price and Enterprise Value Multiples",
    q: "Which cash flow measure accounts for working capital and noncash revenues AND is after interest, so it matches share price?",
    options: ["EBITDA", "Earnings plus noncash charges (CF)", "Free cash flow to equity (FCFE)"],
    answer: 2,
    why: "FCFE is after operating expenses, interest and debt payments, and investment in working and fixed capital. CF ignores working capital and noncash revenues; EBITDA is before interest, so it is mismatched with equity price (better paired with EV)."
  },
  {
    topic: "Equity Valuation",
    reading: "Market-Based Valuation: Price and Enterprise Value Multiples",
    q: "To reduce the impact of LARGE outliers but not small outliers (near zero) in a peer P/E, use the:",
    options: ["Median", "Harmonic mean", "Arithmetic mean"],
    answer: 1,
    why: "The harmonic mean dampens large outliers but can aggravate small ones (which are bounded by zero). The median reduces the effect of both large and small outliers; the arithmetic mean is pulled by large outliers."
  },
  {
    topic: "Equity Valuation",
    reading: "Market-Based Valuation: Price and Enterprise Value Multiples",
    q: "How is the PEG ratio calculated, and how is it read?",
    options: ["[[Growth|P/E]]; a higher value means the stock is cheaper", "[[P/E|expected growth (%)]]; lower is more attractive", "P/E × growth; a higher value means the stock is cheaper"],
    answer: 1,
    why: "PEG = P/E ÷ expected earnings growth (in percentage points, e.g. 18.71 / 12.41 = 1.51). A lower PEG than comparables suggests the stock is relatively undervalued. It assumes a linear P/E–growth relation and ignores risk and growth duration."
  },
  {
    topic: "Equity Valuation",
    reading: "Market-Based Valuation: Price and Enterprise Value Multiples",
    q: "Justified forward P/E from the Gordon growth model is:",
    options: ["[[p(1 + g)|r − g]]", "[[D1/E1|r − g]]", "[[r − g|payout]]"],
    answer: 1,
    why: "P0/E1 = [[D1/E1|r − g]], the forward payout ratio over (r − g). The justified TRAILING P/E is P0/E0 = [[p(1 + g)|r − g]]. E.g. payout 0.485, r = 15%, g = 6%: 0.485 / 0.09 = 5.4."
  },
  {
    topic: "Equity Valuation",
    reading: "Market-Based Valuation: Price and Enterprise Value Multiples",
    q: "When computing book value per share for P/B, what do you do with preferred stock?",
    options: ["Include it in book value, since it is part of total equity", "Subtract it from total shareholders' equity", "Add its market value to common book value"],
    answer: 1,
    why: "P/B uses common shareholders' equity: total shareholders' equity − preferred equity, divided by common shares outstanding. Forgetting to subtract preferred overstates BVPS and understates P/B."
  },
  {
    topic: "Equity Valuation",
    reading: "Market-Based Valuation: Price and Enterprise Value Multiples",
    q: "Enterprise value is:",
    options: ["Market value of common equity − cash and short-term investments", "Market value of common + preferred + debt − cash and investments", "Book value of equity + book value of debt, with no cash adjustment"],
    answer: 1,
    why: "EV = market value of common equity + market value of preferred stock + market value of debt − cash, cash equivalents and short-term investments. Leaving out preferred stock is a common mistake."
  },
  {
    topic: "Equity Valuation",
    reading: "Market-Based Valuation: Price and Enterprise Value Multiples",
    q: "Normalized EPS by the average ROE method equals:",
    options: ["Average EPS over the most recent full business cycle", "Average ROE over the last full cycle × current BVPS", "Current ROE × average book value per share over the cycle"],
    answer: 1,
    why: "Average ROE method: average ROE over the full business cycle × CURRENT BVPS. It reflects changes in company size, which the historical average EPS method does not."
  },
  {
    topic: "Equity Valuation",
    reading: "Market-Based Valuation: Price and Enterprise Value Multiples",
    q: "Why is the average ROE method often preferred to the historical average EPS method for normalizing earnings?",
    options: ["It ignores the business cycle and uses only the latest year", "It reflects changes in the company's size through current book value", "It uses forecast data only, so it is forward-looking"],
    answer: 1,
    why: "Average EPS from earlier years does not account for growth in the business. Multiplying average ROE by current BVPS scales normalized earnings to the company's current size."
  },
  {
    topic: "Economics",
    reading: "Currency Exchange Rates: Understanding Equilibrium Value",
    q: "In an f/d quote, the base currency trades at a forward premium when:",
    options: ["The base currency (d) has the higher interest rate", "The price currency (f) has the higher interest rate", "Interest rates are equal in both of the countries"],
    answer: 1,
    why: "[[F|S]] = [[1 + i_f|1 + i_d]]. If the price currency's rate i_f is higher, F > S: the base currency is at a forward premium (and the high-yield price currency at a forward discount)."
  },
  {
    topic: "Economics",
    reading: "Currency Exchange Rates: Understanding Equilibrium Value",
    q: "A dealer bids 0.2355 CHF per BRL while the interbank implied CHF/BRL is 0.23498/0.23505. The arbitrage is:",
    options: ["Buy BRL from the dealer at 0.2358 and sell it interbank", "Buy BRL interbank at 0.23505, sell to the dealer at 0.2355", "No arbitrage exists, because the quotes overlap"],
    answer: 1,
    why: "Arbitrage exists when a dealer's bid is above the interbank offer (or the dealer's offer below the interbank bid). Buy low interbank, sell high to the dealer: profit 0.0045 CHF per BRL."
  },
  {
    topic: "Economics",
    reading: "Currency Exchange Rates: Understanding Equilibrium Value",
    q: "Carry trade: borrow USD at 0.80%, invest in EUR at 2.20%. The EUR is expected to depreciate slightly so the unhedged EUR deposit returns 1.632% in USD. The all-in return is:",
    options: ["0.83%", "1.40%", "1.63%"],
    answer: 0,
    why: "All-in carry return = foreign deposit return in domestic currency − domestic borrowing cost = 1.632% − 0.80% = 0.83%. Don't forget to subtract the funding cost."
  },
  {
    topic: "Economics",
    reading: "Currency Exchange Rates: Understanding Equilibrium Value",
    q: "A carry trade (borrow low-yield, invest high-yield) profits when:",
    options: ["Uncovered interest rate parity holds exactly over the holding period", "The high-yield currency doesn't depreciate by more than the rate gap", "Covered interest rate parity fails, so forward points are mispriced"],
    answer: 1,
    why: "Under UIP the high-yield currency would depreciate by exactly the rate differential, wiping out the gain. Carry trades bet that UIP fails in the short run. They carry crash risk: sharp reversals in risk-off periods (negatively skewed, fat-tailed returns)."
  },
  {
    topic: "Economics",
    reading: "Currency Exchange Rates: Understanding Equilibrium Value",
    q: "For a spot FX trade, which factor is LEAST likely to narrow the bid–offer spread?",
    options: ["Trading during the London–New York overlap", "A liquid major currency pair", "The client's high (AA vs A) credit rating"],
    answer: 2,
    why: "Spot trades settle in two days, so credit risk is small and a better rating barely changes the spread. Spreads depend more on time of day (liquidity), the currency pair, trade size, the client relationship and market volatility. Credit matters more for longer-dated forwards."
  },
  {
    topic: "Economics",
    reading: "Currency Exchange Rates: Understanding Equilibrium Value",
    q: "If both covered and uncovered interest rate parity hold, the best forecast of the future spot rate is:",
    options: ["The current spot rate", "The forward rate", "The inflation differential"],
    answer: 1,
    why: "CIP: forward premium = interest differential. UIP: expected spot change = interest differential. Together: F = expected future spot, so the forward rate is an unbiased predictor. If all parity conditions hold, it is called forward rate parity."
  },
  {
    topic: "Economics",
    reading: "Economic Growth",
    q: "Which factor is LEAST likely to limit a developing country's growth?",
    options: ["Restrictions on the flow of foreign capital", "A high domestic saving rate", "Weak investor protection and slow courts"],
    answer: 1,
    why: "Low saving and investment limit growth; a high saving rate supports it. Other limiting factors: poorly developed financial markets, weak legal systems, lack of property rights, political instability, poor education and health, anti-entrepreneurship tax/regulation, and restrictions on trade and capital flows."
  },
  {
    topic: "Economics",
    reading: "Economic Growth",
    q: "Public infrastructure investment affects growth mainly by:",
    options: ["Only through the direct benefits of the projects themselves", "Raising the productivity of private investment as well", "Crowding out private investment, which lowers potential growth"],
    answer: 1,
    why: "Like R&D, infrastructure investment is a source of productivity growth whose full impact extends beyond the projects themselves, because better infrastructure boosts the productivity of private capital."
  },
  {
    topic: "Economics",
    reading: "Economic Growth",
    q: "Can real corporate earnings grow faster than potential GDP over the long run?",
    options: ["Yes, if companies keep becoming more profitable every year", "No, because the share of profits in GDP cannot rise forever", "Yes, as long as inflation stays low and stable over time"],
    answer: 1,
    why: "Earnings growth above GDP growth requires the profit/GDP ratio to trend upward, which cannot continue indefinitely. In the long run, real earnings growth is bounded by potential GDP growth."
  },
  {
    topic: "Economics",
    reading: "Economic Growth",
    q: "Why is extrapolating the past 10 years of GDP growth a poor long-term forecast?",
    options: ["GDP data are unreliable and revised too often to extrapolate", "Potential growth rates change over time (e.g. Japan after 1990)", "GDP growth always mean-reverts to about 3% in the long run"],
    answer: 1,
    why: "A country's growth rate can slow down or accelerate as its factors and policies change. Small changes in potential growth compound into large differences in living standards, so forecasts should be based on the drivers, not past trends."
  },
  {
    topic: "Economics",
    reading: "Economic Growth",
    q: "Countries that make the right institutional changes can join a group of countries converging to the income LEVEL of the richest countries. This is:",
    options: ["Absolute convergence", "Conditional convergence", "Club convergence"],
    answer: 2,
    why: "Club convergence: club members (rich and middle-income) converge to the richest countries' income level, poorest members growing fastest; non-members fall behind but can join via institutional changes. Absolute: all developing countries catch up regardless of characteristics. Conditional: convergence only among countries with the same saving rate, population growth and production function."
  },
  {
    topic: "Economics",
    reading: "Economic Growth",
    q: "Conditional convergence requires countries to have the same:",
    options: ["Institutions, legal system and political system", "Saving rate, population growth, production function", "Current per capita income and capital stock per worker"],
    answer: 1,
    why: "Under the neoclassical model, countries with the same saving rate, population growth and production function converge to the same steady-state per capita income. Differences in these lead to different steady states."
  },
  {
    topic: "Economics",
    reading: "Economic Growth",
    q: "In the neoclassical model, opening a capital-poor country to foreign investment leads to:",
    options: ["Capital outflows to rich countries, which offer safer returns", "Faster capital growth, higher productivity and income convergence", "A permanent increase in the steady-state growth rate of output"],
    answer: 1,
    why: "Capital flows from high to low K/L countries seeking higher returns, so the poor country's capital stock grows faster even with low saving, raising productivity and causing convergence. The effect on growth is transitional: long-run steady-state growth depends only on TFP growth."
  },
  {
    topic: "Economics",
    reading: "Economic Growth",
    q: "Increased foreign competition forces less efficient domestic firms to exit while others innovate. Which model predicts this selection effect?",
    options: ["Classical (Malthusian) model", "Neoclassical (Solow) model", "Endogenous growth model"],
    answer: 2,
    why: "Endogenous growth models argue that openness raises growth permanently through larger markets, spillovers and the selection effect: competition pushes out inefficient firms and spurs innovation."
  },
  {
    topic: "Equity Valuation",
    reading: "Private Company Valuation",
    q: "Which valuation step is specific to private companies (not used for public ones)?",
    options: ["Discounting free cash flow to the firm at the WACC", "Applying a discount for lack of marketability (DLOM)", "Using P/E multiples of guideline public comparables"],
    answer: 1,
    why: "Private equity interests cannot be sold easily, so their value is adjusted down with a DLOM (and a DLOC for minority stakes). DCF and market multiples are used for both private and public companies."
  },
  {
    topic: "Equity Valuation",
    reading: "Private Company Valuation",
    q: "A strategic buyer acquiring 100% of a private company would most likely value it:",
    options: ["As a minority interest with discounts for lack of control and marketability", "Including a control premium (synergistic if synergies are expected)", "At book value, since there is no market price for the shares"],
    answer: 1,
    why: "Control lets the buyer change strategy, financing and costs, so its investment value includes a control premium; with synergies, a strategic buyer pays a higher synergistic premium than a financial buyer. Minority-interest discounts fit non-controlling stakes, e.g. in tax or litigation valuations."
  },
  {
    topic: "Equity Valuation",
    reading: "Private Company Valuation",
    q: "Normalizing earnings in private company valuation mainly means:",
    options: ["Smoothing revenues and costs over the business cycle", "Removing non-market, non-recurring items (e.g. owner pay)", "Applying the marketability discount directly to the earnings"],
    answer: 1,
    why: "Owner-managers often pay themselves above or below market, run personal costs through the business or use related-party leases. Normalized earnings restate these at market levels, which is what a buyer would actually earn."
  },
  {
    topic: "Equity Valuation",
    reading: "Private Company Valuation",
    q: "A private firm uses far less debt than optimal. Its WACC is likely:",
    options: ["Lower than optimal, because the firm carries less risky debt", "Higher than optimal, because costlier equity has a larger weight", "Unaffected, because WACC does not depend on capital structure"],
    answer: 1,
    why: "WACC = w_d r_d(1 - t) + w_e r_e and r_e > r_d, so a low debt weight raises WACC toward r_e. Analysts often use the optimal or industry capital structure instead of the actual one."
  },
  {
    topic: "Equity Valuation",
    reading: "Private Company Valuation",
    q: "Which buyer typically pays the higher control premium?",
    options: ["Financial buyer (e.g. a PE fund holding the company stand-alone)", "Strategic buyer expecting synergies", "Both pay the same"],
    answer: 1,
    why: "A strategic buyer can capture synergies (cost savings, revenue gains) and so can justify a synergistic premium above the financial premium a stand-alone financial buyer would pay."
  },
  {
    topic: "Equity Valuation",
    reading: "Private Company Valuation",
    q: "Why can a private company's cost of equity be higher than a comparable public company's?",
    options: ["Private firms always have higher betas than public companies do", "Extra premiums for size and specific risk, and costlier debt", "Because CAPM cannot be applied to a firm without a share price"],
    answer: 1,
    why: "Analysts often add a size premium and company-specific risk premium (e.g. in the build-up method) and private firms may face higher borrowing costs; this raises the discount rate and lowers value."
  },
  {
    topic: "Equity Valuation",
    reading: "Private Company Valuation",
    q: "Why might a public company pay more for a private firm than the private firm's own DCF value?",
    options: ["Public buyers use higher discount rates than private owners do", "The offer reflects improvements the buyer will make (e.g. synergies)", "Control premiums do not apply, so the buyer pays the full DCF value"],
    answer: 1,
    why: "Private firms have less access to debt, so their stand-alone discount rates are higher. A public acquirer values the firm after the improvements it will make, so its offer reflects those gains (and usually a control premium)."
  },
  {
    topic: "Equity Valuation",
    reading: "Private Company Valuation",
    q: "The main reason CAPM may be inappropriate for private companies is that it:",
    options: ["Can only be applied to stocks that trade on an exchange", "Assumes investors are well diversified, unlike private owners", "Ignores the risk-free rate when estimating the cost of equity"],
    answer: 1,
    why: "CAPM rewards only systematic risk. Private owners hold concentrated positions, so analysts use the expanded CAPM or build-up method, adding size and company-specific risk premiums."
  },
  {
    topic: "Equity Valuation",
    reading: "Private Company Valuation",
    q: "Comparable public firms have beta 1.20 and more debt than the private target (same tax rate). The target's relevered beta is:",
    options: ["Below 1.20", "Exactly 1.20", "Above 1.20"],
    answer: 0,
    why: "Unlever: βu = [[βL|1 + (1 − t)D/E]]; relever at the target's lower D/E: βL = βu[1 + (1 − t)D/E]. Less debt gives a lower levered beta."
  },
  {
    topic: "Equity Valuation",
    reading: "Private Company Valuation",
    q: "The expanded CAPM for a private firm adds which premiums to the CAPM?",
    options: ["A liquidity premium and an inflation risk premium", "A size premium and a company-specific premium", "A control premium and a marketability discount"],
    answer: 1,
    why: "Expanded CAPM: r = rf + β(ERP) + size premium + company-specific risk premium. The build-up method (no beta) is rf + ERP + size premium + (industry risk premium) + company-specific risk premium."
  },
  {
    topic: "Equity Valuation",
    reading: "Private Company Valuation",
    q: "Which income method is mainly used to value intangible assets rather than whole businesses?",
    options: ["Capitalized cash flow method (CCM)", "Excess earnings method (EEM)", "Free cash flow method"],
    answer: 1,
    why: "The EEM values intangibles as the capitalized earnings in excess of required returns on working capital and fixed assets, using several discount rates. The CCM (a single-stage, Gordon-type model) and the FCF method value whole businesses."
  },
  {
    topic: "Corporate Issuers",
    reading: "Analysis of Dividends and Share Repurchases",
    q: "A company paid C$0.22 per share for three years while EPS rose and fell. Its policy is:",
    options: ["Stable dividend policy", "Constant payout ratio policy", "Residual dividend policy"],
    answer: 0,
    why: "Stable: the dividend stays steady (or grows gradually toward a target payout) regardless of short-term earnings swings. Constant payout: dividend = fixed % of earnings, so it moves with EPS. Residual: pay what is left after funding capital spending, very volatile."
  },
  {
    topic: "Corporate Issuers",
    reading: "Analysis of Dividends and Share Repurchases",
    q: "A cyclical company has an unusually strong but temporary year. It will most likely:",
    options: ["Raise its regular quarterly dividend permanently", "Pay a one-off special (extra) dividend at the end of the year", "Cut the dividend to rebuild cash for weaker years"],
    answer: 1,
    why: "Special dividends let firms share temporary windfalls without committing to a higher regular dividend that they might later have to cut, which markets punish."
  },
  {
    topic: "Corporate Issuers",
    reading: "Analysis of Dividends and Share Repurchases",
    q: "Which statement about share repurchases versus cash dividends is FALSE?",
    options: ["Management is not obliged to complete an announced buyback", "Every shareholder receives cash in a buyback, just as with a dividend", "Negotiated repurchases can be made below the market price"],
    answer: 1,
    why: "Only shareholders who sell receive cash in a buyback; the others see their ownership share rise. Buybacks give flexibility (no obligation), and negotiated deals are often at a discount when large holders need liquidity."
  },
  {
    topic: "Corporate Issuers",
    reading: "Analysis of Dividends and Share Repurchases",
    q: "A buyback is debt-financed. EPS rises if:",
    options: ["The after-tax cost of debt is above the earnings yield", "The after-tax cost of debt is below the earnings yield", "Always, because fewer shares remain outstanding"],
    answer: 1,
    why: "Each share bought removes earnings of E/P per dollar spent but adds after-tax interest of r_d(1 − t). If r_d(1 − t) < E/P, EPS rises; if greater, EPS falls; if equal, no change."
  },
  {
    topic: "Corporate Issuers",
    reading: "Analysis of Dividends and Share Repurchases",
    q: "Which repurchase method most typically involves a premium to the market price?",
    options: ["Open market purchases", "Fixed-price tender offer", "Direct negotiation with a holder"],
    answer: 1,
    why: "Fixed-price tender offers (and Dutch auctions) offer a premium to attract sellers quickly. Open market buys are at market prices; negotiated deals may be at a premium or a discount."
  },
  {
    topic: "Portfolio Management",
    reading: "Economics and Investment Markets",
    q: "An investor's wealth rises substantially (e.g. a new annuity). Holding all else equal, his required risk premium for risky assets:",
    options: ["Rises, because he now has more to lose in a downturn", "Falls, because extra consumption gives him less marginal utility", "Is unchanged, because risk premiums depend only on the asset"],
    answer: 1,
    why: "Diminishing marginal utility: the richer you are, the less an extra dollar is worth to you, so losing some in a bad state hurts less. Lower marginal utility of consumption means a lower required risk premium and more willingness to hold risky assets."
  },
  {
    topic: "Portfolio Management",
    reading: "Economics and Investment Markets",
    q: "Real short-term interest rates tend to be highest in an economy with:",
    options: ["Low real GDP growth and low growth volatility", "High real GDP growth and high growth volatility", "High inflation and a flat yield curve"],
    answer: 1,
    why: "Real short rates are positively related to both trend real GDP growth (higher expected future consumption) and the volatility of real growth. Inflation affects nominal, not real, rates."
  },
  {
    topic: "Portfolio Management",
    reading: "Economics and Investment Markets",
    q: "The spread between nominal and real (inflation-linked) default-free yields of the same maturity is 2.0%. Expected inflation is most likely:",
    options: ["Above 2.0%, because inflation risk premiums are negative", "Exactly 2.0%, since the spread is pure expected inflation", "Below 2.0%, since the spread also holds an inflation-risk premium"],
    answer: 2,
    why: "Break-even inflation (BEI) = expected inflation + premium for inflation uncertainty. With a positive premium, expected inflation < BEI. For longer maturities the BEI is a cleaner but still upward-biased measure."
  },
  {
    topic: "Portfolio Management",
    reading: "Economics and Investment Markets",
    q: "Which change would justify a HIGHER equilibrium P/E for an equity market?",
    options: ["A rise in the equity risk premium demanded by investors", "Lower uncertainty about future inflation, cutting discount rates", "Weaker expected growth in future real earnings"],
    answer: 1,
    why: "P/E rises when discount rates fall or growth expectations rise. Lower inflation uncertainty reduces the discount rate; a higher ERP or weaker growth would reduce the P/E."
  },
  {
    topic: "Portfolio Management",
    reading: "Economics and Investment Markets",
    q: "A short recession begins and the central bank cuts its policy rate. The yield curve most likely:",
    options: ["Flattens or inverts, as long yields fall the most", "Steepens (becomes more upward sloping), as short yields fall the most", "Shifts in parallel, since all maturities fall equally"],
    answer: 1,
    why: "Policy cuts push short-term yields down sharply; long yields fall less because markets expect rates to normalize after the recession. The curve steepens."
  },
  {
    topic: "Portfolio Management",
    reading: "Economics and Investment Markets",
    q: "Heading into a recession, which corporate bond is expected to perform best over the next year?",
    options: ["A B3-rated high-yield bond with the widest spread", "An Aaa-rated bond with a narrow spread", "A Baa1-rated bond with a medium spread"],
    answer: 1,
    why: "Credit spreads widen in recessions, most for low-quality issuers (flight to quality), so high-rated bonds outperform low-rated ones. In early recovery the reverse tends to happen."
  },
  {
    topic: "Portfolio Management",
    reading: "Economics and Investment Markets",
    q: "Default-free real interest rates tend to be relatively high in countries with high expected economic growth because investors:",
    options: ["increase current borrowing.", "have high inter-temporal rates of substitution.", "have high uncertainty about levels of future consumption."],
    answer: 0,
    why: "Average default-free real rates rise with expected economic growth (and with its volatility). When strong growth is expected, investors worry less about future consumption: their inter-temporal rate of substitution (MU of future consumption ÷ MU of current consumption) is LOW, so they borrow more today and save less. Real rates are related to the reciprocal of the rate of substitution, so they end up higher in high-growth economies and lower in lower, more stable-growth ones. B has it backwards (high growth means a LOW rate of substitution). C describes volatility of growth, not the reason growth itself raises rates."
  },
  {
    topic: "Portfolio Management",
    reading: "Analysis of Active Portfolio Management",
    q: "A benchmark is LEAST valid when:",
    options: ["It is float-adjusted and capitalization weighted", "Many securities the manager buys are not in it", "One position is slightly costly to replicate"],
    answer: 1,
    why: "A valid benchmark should be representative of the manager's approach (and also unambiguous, investable, measurable, specified in advance). If it misses much of what the manager buys, it isn't representative. Cap weighting is a positive feature."
  },
  {
    topic: "Portfolio Management",
    reading: "Analysis of Active Portfolio Management",
    q: "A balanced fund holds exactly the benchmark's asset-class weights. Its active return from asset allocation is:",
    options: ["Positive if equities beat bonds", "Zero", "Equal to its total active return"],
    answer: 1,
    why: "Asset allocation return = Σ Δwⱼ × R_B,j. With Δw = 0 for every class it is zero; any active return comes from security selection."
  },
  {
    topic: "Portfolio Management",
    reading: "Analysis of Active Portfolio Management",
    q: "The optimal level of active risk for an unconstrained portfolio is:",
    options: ["[[IR|SR_B]] × σ_B", "[[SR_B|IR]] × σ_B", "IR × SR_B × σ_B"],
    answer: 0,
    why: "σ_A* = [[IR|SR_B]] × σ_B. With constraints, multiply by the transfer coefficient: σ_A* = TC × [[IR*|SR_B]] × σ_B, so constraints lower optimal aggressiveness."
  },
  {
    topic: "Portfolio Management",
    reading: "Analysis of Active Portfolio Management",
    q: "Adding over/underweight limits (constraints) to a portfolio most likely:",
    options: ["Raises the transfer coefficient", "Lowers the transfer coefficient and optimal active risk", "Leaves the IR unchanged at every level of active risk"],
    answer: 1,
    why: "Constraints stop forecasts from being fully reflected in active weights, so TC falls; optimal active risk (TC × IR*/SR_B × σ_B) falls too, and the IR of a constrained portfolio declines as aggressiveness rises."
  },
  {
    topic: "Portfolio Management",
    reading: "Analysis of Active Portfolio Management",
    q: "By the fundamental law of active management, which change would most likely RAISE a manager's IR?",
    options: ["Adding sector weight caps", "Rebalancing more often (more independent bets)", "Holding fewer securities"],
    answer: 1,
    why: "IR = TC × IC × √BR. More frequent independent decisions or more securities raise breadth (BR); caps lower TC; fewer securities lower BR."
  },
  {
    topic: "Portfolio Management",
    reading: "Analysis of Active Portfolio Management",
    q: "Manager C has the highest information coefficient (IC) but a low transfer coefficient (TC) and few securities. Compared with peers, its realized IR is:",
    options: ["Necessarily the highest, because IC measures skill", "Not necessarily the highest, since IR = TC × IC × √BR", "Unrelated to IC"],
    answer: 1,
    why: "IC is forecasting skill, but the IR also depends on how well forecasts become weights (TC) and on breadth. A high IC with low TC and small BR can give a lower IR than a peer with a lower IC."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "A job candidate's profile cites a team's long top-quartile record but omits that recent 12-month performance fell to the fourth quartile. This most likely violates:",
    options: ["Standard VI(A) Disclosure of Conflicts", "Standard III(D) Performance Presentation and I(C) Misrepresentation", "Standard V(B) Communication with Clients"],
    answer: 1,
    why: "Performance information must be fair, accurate and complete (III(D)); selectively citing only good periods is also a misrepresentation (I(C))."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "A member discloses on her profile that a charity board seat takes much of her evenings and weekends. This is most consistent with:",
    options: ["Standard VI(A) Disclosure of Conflicts", "Standard I(B) Independence and Objectivity", "Standard IV(A) Loyalty to Employer"],
    answer: 0,
    why: "VI(A) requires full and fair disclosure of matters that could reasonably interfere with duties to clients, prospective clients and the employer; time-consuming outside roles qualify."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Two job-seeking former colleagues agree to write favorable recommendation letters for each other. Under Standard I(B), this is:",
    options: ["Acceptable if both had worked together for years", "Likely a violation: each has something to gain, so neither letter is objective", "Acceptable if the letters are disclosed as reciprocal"],
    answer: 1,
    why: "Offering or accepting a benefit (a favorable letter in exchange) that could compromise independence and objectivity is prohibited."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "A manager, in a hurry, routes trades through brokers not yet on the firm's approved list. The main concern is Standard:",
    options: ["V(A) Diligence and Reasonable Basis", "II(B) Market Manipulation", "VII(A) Conduct as Participants in CFA Programs"],
    answer: 0,
    why: "Skipping the firm's broker due-diligence process and risking poor execution shows a lack of diligence in taking investment action (and raises best-execution concerns under III(A))."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Clients sign a waiver accepting first-come, first-served allocation of illiquid shares. Under Standard III(B) Fair Dealing:",
    options: ["The waiver satisfies the Standard because it is disclosed", "The waiver does not remove the duty to treat all clients fairly", "It is acceptable only for institutional clients"],
    answer: 1,
    why: "Client consent can never override the duty of fairness and loyalty when allocation procedures are patently unfair. Use pro-rata allocation of partially filled block trades."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "An analyst receives a company's unannounced earnings warning from the CFO, who says he has told several visiting analysts. Trading on it is:",
    options: ["Allowed, since it was freely given and shared with others", "A violation of II(A), because the information is material and not yet public", "Allowed if insider trading is legal locally"],
    answer: 1,
    why: "Selective disclosure to a few analysts does not make information public. Even where local law permits, the Standards (stricter) prohibit acting on MNPI (I(A) also applies)."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "A member under investigation sends confidential client trade details to the CFA Institute Professional Conduct Program. This:",
    options: ["Violates III(E) Preservation of Confidentiality", "Does not violate III(E), since the PCP keeps such information confidential", "Is allowed only with written client consent"],
    answer: 1,
    why: "Providing information to the PCP for an investigation is an explicit exception: the PCP keeps it in the strictest confidence."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Which research source carries the greatest risk of obtaining material nonpublic information?",
    options: ["Personal observation of store shelf restocking", "Expert-network calls with former consultants of competitors", "Posts on an open specialty social media site"],
    answer: 1,
    why: "Experts may pass on confidential, material information from current or former engagements; members are responsible for not soliciting or acting on it. The other two are public mosaic inputs."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "A firm announces that its new CEO, \"as a CFA charterholder, has superior qualities to manage clients' investments.\" Under VII(B) this is:",
    options: ["Acceptable, since the charter shows competence", "An improper reference: it exaggerates what the designation means", "Acceptable if the CEO passed all levels on the first attempt"],
    answer: 1,
    why: "Claims of superior performance or ability because of the designation are exaggerations. Referring to the rigor of the program or the skills it cultivates is acceptable."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Which policy best addresses Standard II(B) Market Manipulation?",
    options: ["Allocating block trades pro rata among accounts", "Prohibiting agreements to promote a stock and communications meant to move its price", "Requiring pre-clearance of personal trades"],
    answer: 1,
    why: "II(B) prohibits information-based manipulation (spreading false or misleading information, promotion agreements to mislead) and transaction-based manipulation (artificial prices or volume). The others relate to III(B) and VI(B)."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "A compliance officer tells a reporter that unethical incidents \"happen in most investment firms.\" This most likely violates:",
    options: ["I(D) Misconduct", "III(E) Preservation of Confidentiality", "IV(C) Responsibilities of Supervisors"],
    answer: 0,
    why: "The statement is untrue and unknowable, reflecting adversely on his professional integrity and competence (I(D))."
  },
  {
    topic: "Portfolio Management",
    reading: "Measuring and Managing Market Risk",
    q: "A portfolio's 5% monthly VaR is $5.37 million. This means:",
    options: ["A loss of at least $5.37 million is expected in about 5% of months", "The largest monthly loss possible is $5.37 million", "The average loss in the worst 5% of months is $5.37 million"],
    answer: 0,
    why: "VaR is a minimum loss at a given probability over a period. It is not a maximum; the average loss beyond VaR is conditional VaR (expected shortfall)."
  },
  {
    topic: "Portfolio Management",
    reading: "Measuring and Managing Market Risk",
    q: "A portfolio had zero daily VaR breaches last year but a large cumulative loss. The most likely reason is:",
    options: ["The VaR used a 95% rather than 99% confidence level", "Last year's volatility was lower than in the VaR lookback period", "The VaR was computed by historical simulation"],
    answer: 1,
    why: "VaR depends on the volatility regime of its data; in calm periods daily losses can stay just under a VaR estimated on more volatile history yet still add up. A 99% level would give a larger VaR and still no breaches."
  },
  {
    topic: "Portfolio Management",
    reading: "Measuring and Managing Market Risk",
    q: "To replay a past crisis on today's bond holdings, the analyst should reprice the bonds using:",
    options: ["The bonds' own historical prices", "Historical yields for similar maturities", "Their durations at the time of the crisis"],
    answer: 1,
    why: "Yields drive bond prices and apply to today's maturities; old prices may not exist or reflect other maturities, and durations change with time."
  },
  {
    topic: "Portfolio Management",
    reading: "Measuring and Managing Market Risk",
    q: "How much a pension fund's assets could underperform its liabilities over a year at 95% confidence is called:",
    options: ["Maximum drawdown", "Surplus at risk", "Relative VaR"],
    answer: 1,
    why: "Surplus at risk is VaR applied to the surplus (assets − liabilities). Relative VaR is risk against a benchmark (ex ante tracking error)."
  },
  {
    topic: "Portfolio Management",
    reading: "Measuring and Managing Market Risk",
    q: "The change in portfolio VaR from adding a new bond position is measured by:",
    options: ["Incremental VaR", "Marginal VaR", "Conditional VaR"],
    answer: 0,
    why: "Incremental VaR = VaR(with position) − VaR(without). Marginal VaR is the change for a very small change in the position; CVaR is the average loss beyond VaR."
  },
  {
    topic: "Portfolio Management",
    reading: "Measuring and Managing Market Risk",
    q: "For an extreme spread shock on bonds with embedded options, the most accurate stress-test method is:",
    options: ["Duration and convexity approximations", "Full revaluation of each security", "Marginal VaR"],
    answer: 1,
    why: "Sensitivity measures are local approximations and miss non-linear option payoffs in large moves; full revaluation reprices each instrument under the scenario."
  },
  {
    topic: "Portfolio Management",
    reading: "Measuring and Managing Market Risk",
    q: "An index fund (delta 1) wants a portfolio delta of 0.90 using index options. It should:",
    options: ["Buy calls", "Sell calls", "Sell puts"],
    answer: 1,
    why: "Short calls have delta between 0 and −1, lowering portfolio delta. Long calls and short puts both add positive delta. (Buying puts would also lower delta.)"
  },
  {
    topic: "Portfolio Management",
    reading: "Measuring and Managing Market Risk",
    q: "Which is NOT a limitation of VaR?",
    options: ["It does not capture liquidity risk", "It is easy to understand and widely accepted by regulators", "It can underestimate the frequency of extreme events"],
    answer: 1,
    why: "Simplicity, comparability and regulatory acceptance are advantages. Limitations: ignores liquidity, sensitive to correlation and volatility regimes, underestimates tail events, says nothing about losses beyond VaR, and ignores right-tail outcomes."
  },
  {
    topic: "Portfolio Management",
    reading: "Measuring and Managing Market Risk",
    q: "A bank focused on tail risk and forward-looking assessment should add:",
    options: ["Parametric VaR and marginal VaR", "Conditional VaR, stress tests and scenario analysis", "Monte Carlo VaR and incremental VaR"],
    answer: 1,
    why: "CVaR measures the size of tail losses; stress tests and scenarios apply extreme historical or hypothetical events to current holdings."
  },
  {
    topic: "Portfolio Management",
    reading: "Measuring and Managing Market Risk",
    q: "A VaR model that estimates expected returns, volatilities and correlations assuming normal distributions is the:",
    options: ["Historical simulation method", "Parametric (variance–covariance) method", "Monte Carlo simulation method"],
    answer: 1,
    why: "Parametric VaR relies on normality and the mean–variance inputs. Historical simulation re-uses past risk-factor changes; Monte Carlo draws random scenarios from chosen distributions."
  },
  {
    topic: "Portfolio Management",
    reading: "Measuring and Managing Market Risk",
    q: "A $6 million account has a daily 5% VaR of 1.5%. This implies:",
    options: ["A loss of $90,000 or more on about 1 day in 20", "A maximum one-day loss of $90,000", "A loss of $90,000 every day 5% of the year"],
    answer: 0,
    why: "$6m × 1.5% = $90,000, a minimum loss expected on 5% of days ≈ once every 20 trading days."
  },
  {
    topic: "Portfolio Management",
    reading: "Measuring and Managing Market Risk",
    q: "Rates fall 20 bps. Bonds have durations 1.3, 3.7 and 10.2. The best performer is the bond with duration:",
    options: ["1.3", "3.7", "10.2"],
    answer: 2,
    why: "%ΔP ≈ −D × Δy / (1 + y): with Δy negative, the highest duration gains most. When rates rise, the lowest duration loses least."
  },
  {
    topic: "Portfolio Management",
    reading: "Measuring and Managing Market Risk",
    q: "A fund monitors the historical standard deviation of its returns minus benchmark returns. This is:",
    options: ["Active share", "Ex post tracking error", "Beta"],
    answer: 1,
    why: "Ex post tracking error is backward looking (realized active returns); ex ante tracking error (relative VaR) is forward looking. Active share compares holdings, not returns."
  },
  {
    topic: "Portfolio Management",
    reading: "Measuring and Managing Market Risk",
    q: "Capping any single security at 1.75% of the portfolio is an example of a:",
    options: ["Risk budget", "Position limit", "Stop-loss limit"],
    answer: 1,
    why: "Position limits restrict the size of individual holdings to prevent overconcentration. Stop-loss limits trigger action after losses; risk budgets allocate total risk."
  },
  {
    topic: "Portfolio Management",
    reading: "Backtesting and Simulation",
    q: "Which statement about backtesting is FALSE?",
    options: ["It approximates a real-life investment process using historical data", "It is used almost only by quantitative managers, rarely by fundamental ones", "It implicitly assumes the past is a guide to the future"],
    answer: 1,
    why: "Backtesting fits quant/systematic styles most naturally, but fundamental managers use it heavily too."
  },
  {
    topic: "Portfolio Management",
    reading: "Backtesting and Simulation",
    q: "A client restricts holdings to domestic stocks. Which backtest parameter must change?",
    options: ["The start and end dates", "The investment universe", "The treatment of transaction costs"],
    answer: 1,
    why: "The investment universe defines which securities the strategy may hold; a domestic-only mandate needs a domestic universe."
  },
  {
    topic: "Portfolio Management",
    reading: "Backtesting and Simulation",
    q: "\"What if the future is different from the past?\" is the key weakness of:",
    options: ["Backtesting", "Monte Carlo simulation", "Sensitivity analysis"],
    answer: 0,
    why: "Backtesting relies on history repeating. Monte Carlo draws from assumed distributions, and sensitivity analysis varies those assumptions."
  },
  {
    topic: "Portfolio Management",
    reading: "Backtesting and Simulation",
    q: "Factor 2: VaR 0.77%, CVaR 4.21%. Factor 3: VaR 2.40%, CVaR 3.24%. Which has the smaller expected loss beyond the threshold?",
    options: ["Factor 2, because its VaR is lower", "Factor 3, because its CVaR is lower", "They are equal"],
    answer: 1,
    why: "CVaR (expected shortfall) is the average of losses beyond VaR. Lower VaR does not mean lower tail losses."
  },
  {
    topic: "Portfolio Management",
    reading: "Backtesting and Simulation",
    q: "Factor returns show negative skewness, excess kurtosis and tail dependence. In Monte Carlo simulation, best practice is to:",
    options: ["Assume normal distributions for simplicity", "Run sensitivity analysis with fatter-tailed, non-normal distributions", "Bootstrap a single historical path"],
    answer: 1,
    why: "Sensitivity analysis tests how results change under distributions that capture fat tails and skew, revealing downside risk the normal model would miss."
  },
  {
    topic: "Portfolio Management",
    reading: "Backtesting and Simulation",
    q: "A manager runs thousands of backtests and shows clients only the best strategies. This is:",
    options: ["Cross-validation", "Data snooping (selection bias)", "Risk parity"],
    answer: 1,
    why: "Data snooping overstates expected performance; remedies include out-of-sample tests, cross-validation and a higher t-stat hurdle (e.g. above 3.0)."
  },
  {
    topic: "Portfolio Management",
    reading: "Backtesting and Simulation",
    q: "Strategy I Sharpe ratios: low-vol 0.64, recession 0.20. Strategy II: low-vol 1.60, recession 1.76. Strategy II's edge is largest in:",
    options: ["Recessions (by 1.56)", "Low volatility (by 0.96)", "Both equally"],
    answer: 0,
    why: "1.76 − 0.20 = 1.56 in recessions vs 1.60 − 0.64 = 0.96 in low volatility. Scenario analysis compares strategies across structural regimes."
  },
  {
    topic: "Derivatives",
    reading: "Forward Commitments",
    q: "The carry arbitrage model assumes the proceeds from a short sale are:",
    options: ["Available only when the short position is covered", "Immediately available to invest in other securities", "Held as collateral and earning no return at all"],
    answer: 1,
    why: "The model assumes no frictions: you can borrow and lend at the risk-free rate, there are no transaction costs, and short-sale proceeds can be used straight away."
  },
  {
    topic: "Derivatives",
    reading: "Forward Commitments",
    q: "Bond futures prices are generally quoted:",
    options: ["The same way as the spot bond market, clean or dirty", "Always dirty, even where spot bonds are quoted clean", "Always clean, whatever the spot market convention is"],
    answer: 0,
    why: "Futures follow the spot market's convention, so there is no clean/dirty disconnect between them. Accrued interest is handled in the pricing formula instead."
  },
  {
    topic: "Derivatives",
    reading: "Forward Commitments",
    q: "Bond futures use a conversion factor because:",
    options: ["Futures are quoted dirty while spot bonds are quoted clean", "It converts a futures yield quote into a price quote", "Several bonds are deliverable, so their prices must be put on an equal footing"],
    answer: 2,
    why: "Many bonds can be delivered into one contract. The conversion factor adjusts each bond's price so they are roughly comparable; the short then delivers the cheapest-to-deliver bond."
  },
  {
    topic: "Derivatives",
    reading: "Forward Commitments",
    q: "In a bond futures contract, who chooses which bond to deliver, and which one?",
    options: ["The long; the bond with the highest coupon", "The short; the cheapest-to-deliver bond", "The exchange; the most recently issued bond"],
    answer: 1,
    why: "The short (seller) has the delivery option and picks the bond that is cheapest to deliver after the conversion factor."
  },
  {
    topic: "Derivatives",
    reading: "Forward Commitments",
    q: "A firm will borrow at a floating rate in six months and fears rates will rise. To lock in its rate it should:",
    options: ["Take the long (pay-fixed) side of an FRA", "Take the short (receive-fixed) side of an FRA", "Buy bond futures, which gain when rates rise"],
    answer: 0,
    why: "The long FRA pays fixed and receives the floating rate, so it gains if rates rise, offsetting the higher loan cost. Bond futures prices FALL when rates rise, so buying them would add to the loss."
  },
  {
    topic: "Derivatives",
    reading: "Forward Commitments",
    q: "In a 6 × 24 FRA, the underlying interest rate covers:",
    options: ["A 24-month period starting in 6 months", "A 6-month period starting in 24 months", "An 18-month period starting in 6 months"],
    answer: 2,
    why: "The FRA settles in 6 months and the period ends at month 24, so it covers months 6 to 24: an 18-month rate. Treating it as ending at month 30 (6 + 24) is a classic mistake."
  },
  {
    topic: "Derivatives",
    reading: "Forward Commitments",
    q: "The fixed rate on a 5-year interest rate swap is:",
    options: ["The 5-year spot rate, the rate for the swap's maturity", "A par rate from all the PV factors, below the 5-year spot in a rising curve", "The simple average of the spot rates for each payment date"],
    answer: 1,
    why: "Swap rate = [[1 − last PV factor|sum of all PV factors]] per period. It weights every payment date, so with an upward-sloping curve it sits below the longest spot rate. It is not a simple average either."
  },
  {
    topic: "Derivatives",
    reading: "Forward Commitments",
    q: "A SHORT equity forward position loses value, all else equal, when:",
    options: ["The share price falls", "The company announces a larger dividend", "The risk-free rate rises"],
    answer: 2,
    why: "A higher risk-free rate raises the new forward price, which helps the long and hurts the short. A lower share price or a bigger dividend both lower the forward price, which helps the short."
  },
  {
    topic: "Derivatives",
    reading: "Forward Commitments",
    q: "A borrower with a floating-rate MRR loan enters a pay-fixed swap on the same terms. Its net position is:",
    options: ["Effectively a fixed-rate loan", "A floating-rate loan with twice the rate exposure", "A floating-rate asset that gains if rates fall"],
    answer: 0,
    why: "It pays MRR on the loan, receives MRR on the swap and pays the swap's fixed rate. The floating legs cancel, leaving a fixed-rate loan."
  },
  {
    topic: "Derivatives",
    reading: "Forward Commitments",
    q: "A futures contract is mispriced at expiration by some amount. The arbitrage profit measured TODAY is:",
    options: ["The full mispricing, undiscounted", "The present value of the mispricing", "The mispricing compounded at the risk-free rate"],
    answer: 1,
    why: "The gain is locked in today but received at expiration, so discount it back at the risk-free rate."
  },

  // ---------- Quantitative Methods (concepts, no calculator) ----------
  {
    topic: "Quantitative Methods",
    reading: "Multiple Regression",
    q: "Adding a new variable to a regression raises adjusted R² only if:",
    options: ["The new variable's |t-statistic| is greater than 1", "The new variable's p-value is below 0.05", "The regression's F-statistic also rises"],
    answer: 0,
    why: "Adjusted R² rises only when the new variable's |t| exceeds 1. Plain R² never falls when a variable is added, which is why adjusted R² is the better comparison."
  },
  {
    topic: "Quantitative Methods",
    reading: "Multiple Regression",
    q: "When choosing between regression models, AIC and BIC are used as follows:",
    options: ["Higher AIC for prediction; higher BIC for best fit", "Lower AIC for best fit; lower BIC for prediction", "Lower AIC for prediction; lower BIC for best fit"],
    answer: 2,
    why: "AIC → prediction (forecasting), BIC → goodness of fit. For both, lower is better. BIC penalizes extra variables more heavily than AIC."
  },
  {
    topic: "Quantitative Methods",
    reading: "Multiple Regression",
    q: "In a joint F-test of whether two added variables matter, the restricted model is the one that:",
    options: ["Includes every variable, the two being tested too", "Leaves out the two variables being tested", "Has the higher R² of the two models compared"],
    answer: 1,
    why: "The restricted model sets the tested coefficients to zero, i.e. drops them. F = [[(SSE restricted − SSE unrestricted) ÷ q|SSE unrestricted ÷ (n − k − 1)]], where q is the number of variables tested. The test is one-tailed (right side)."
  },
  {
    topic: "Quantitative Methods",
    reading: "Multiple Regression",
    q: "A slope coefficient in a multiple regression measures the change in Y for a one-unit change in that X:",
    options: ["Holding all the other independent variables constant", "Plus the intercept, which is added to every change in that X", "Averaged across all the independent variables"],
    answer: 0,
    why: "A partial slope coefficient is a ceteris paribus effect. The intercept is the predicted Y when every X is zero; it never enters a change in Y."
  },
  {
    topic: "Quantitative Methods",
    reading: "Multiple Regression",
    q: "Which is NOT an assumption of multiple linear regression?",
    options: ["The residuals are normally distributed", "The variance of the residuals is the same for all observations", "The residuals are correlated across observations"],
    answer: 2,
    why: "The residuals must be UNcorrelated across observations (independence of errors). The other assumptions: linearity, homoskedasticity, normality, and no exact linear relation among the independent variables."
  },
  {
    topic: "Quantitative Methods",
    reading: "Multiple Regression",
    q: "To check visually for heteroskedasticity, the most useful chart is:",
    options: ["The dependent variable against one independent variable", "The residuals against the predicted values", "One independent variable against another"],
    answer: 1,
    why: "Homoskedasticity means the residual variance is constant. Plotting residuals against predicted values shows whether the spread stays even or fans out/clusters."
  },
  {
    topic: "Quantitative Methods",
    reading: "Multiple Regression",
    q: "A scatterplot of one independent variable against another is mainly used to check:",
    options: ["Linearity between the dependent variable and that X", "Homoskedasticity of the regression residuals across observations", "Multicollinearity between the independent variables"],
    answer: 2,
    why: "A visible relationship between two X's suggests multicollinearity. Linearity is checked by plotting Y against each X; homoskedasticity by plotting residuals against predicted values."
  },
  {
    topic: "Quantitative Methods",
    reading: "Multiple Regression",
    q: "A plot of Y against one X shows a clear curve rather than a straight line. Which assumption may be violated?",
    options: ["Linearity", "Homoskedasticity", "Normality of the residuals"],
    answer: 0,
    why: "A curved (e.g. quadratic) relationship breaks the assumption that Y is linearly related to the independent variables. A transformation or squared term may be needed."
  },
  {
    topic: "Quantitative Methods",
    reading: "Multiple Regression",
    q: "An analyst expects a POSITIVE relationship and wants to test it. The correct hypotheses are:",
    options: ["H0: b > 0 versus Ha: b ≤ 0", "H0: b ≤ 0 versus Ha: b > 0", "H0: b = 0 versus Ha: b ≠ 0"],
    answer: 1,
    why: "What you hope to show goes in the alternative hypothesis, and the null always contains the equality. So for a positive effect: H0: b ≤ 0, Ha: b > 0 (one-tailed). H0: b > 0 is wrongly specified."
  },
  {
    topic: "Quantitative Methods",
    reading: "Multiple Regression",
    q: "The standard error of a forecast is larger than the standard error of the regression because of:",
    options: ["Model error and sampling error", "Multicollinearity among the independent variables in the model", "Too few independent variables in the model used"],
    answer: 0,
    why: "A forecast carries the regression's own error (model error) plus the uncertainty from estimating the coefficients from a sample (sampling error)."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "The five steps of a TEXT-based ML project, in order, are:",
    options: ["Curation, formulation, wrangling, exploration, model training", "Formulation, wrangling, curation, exploration, training", "Formulation, curation, wrangling, exploration, training"],
    answer: 2,
    why: "Text: 1) problem formulation, 2) data (text) curation, 3) text preparation and wrangling, 4) text exploration, 5) model training. Structured data: conceptualization, collection, preparation and wrangling, exploration, training."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "Concern that some social media posts come from fake accounts relates to which V of big data?",
    options: ["Volume", "Veracity", "Velocity"],
    answer: 1,
    why: "Veracity is the credibility and reliability of the data. Volume is the quantity, velocity the speed of creation, variety the range of data types and sources."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "A date column holds valid dates written as 4/6/17, 26-Jun-74 and November 15, 2004. This is a:",
    options: ["Non-uniformity error", "Invalidity error", "Inconsistency error"],
    answer: 0,
    why: "Non-uniformity: data not presented in one identical format. Invalidity is a value outside a meaningful range; inconsistency is a value that conflicts with other data or reality."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "A firm shows interest expense of 1.5 but total debt of 0.0. This is most likely a(n):",
    options: ["Incompleteness error", "Non-uniformity error", "Inconsistency error"],
    answer: 2,
    why: "The two values conflict (interest implies debt), so one is wrong: an inconsistency error. Incompleteness is missing data; non-uniformity is mixed formats."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "Creating an 'Age' variable from a firm's IPO date is which data transformation?",
    options: ["Aggregation", "Extraction", "Conversion"],
    answer: 1,
    why: "Extraction creates a new variable from an existing one (age from a date, a ratio from two items). Aggregation combines variables into one; conversion changes the data type; selection deletes unneeded columns."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "Normalization and standardization differ in that:",
    options: ["Normalization uses the min and max; standardization uses the mean and SD", "Normalization uses the mean and SD; standardization uses the min and max", "Both rescale every variable to the same range, from 0 to 1, using the mean"],
    answer: 0,
    why: "Normalization: [[X − Xmin|Xmax − Xmin]], giving values in [0, 1]. Standardization: [[X − mean|SD]], centring on 0. Normalization is more sensitive to outliers."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "When cleansing raw text, useful symbols such as % and $ should be:",
    options: ["Removed along with all other punctuation", "Kept exactly as they are, since all punctuation is useful to the model", "Replaced with annotations such as /percentSign/"],
    answer: 2,
    why: "Most punctuation is removed, but meaningful symbols are replaced with annotations (/percentSign/, /dollarSign/, /questionMark/) to keep their meaning."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "Splitting cleansed text into separate words is called:",
    options: ["Lemmatization", "Tokenization", "Stemming"],
    answer: 1,
    why: "Tokenization splits text into tokens. Lemmatization and stemming are normalization steps that reduce words to a base form."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "The distinct set of normalized tokens from all the texts in a dataset is the:",
    options: ["Bag-of-words (BOW)", "Document term matrix", "Set of n-grams"],
    answer: 0,
    why: "The BOW is the collection of distinct tokens. The document term matrix is built from it (documents × tokens); n-grams are sequences of n adjacent words."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "To show the most informative words by term frequency, the best visualization is a:",
    options: ["Scatter plot of the token counts", "Word cloud", "Document term matrix"],
    answer: 1,
    why: "A word cloud sizes (and colours) words by frequency. A document term matrix is a data structure, not a chart."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "Noise features to prune from a text dataset are tokens with:",
    options: ["Very high and very low term frequency", "The highest chi-square statistics", "The highest mutual information values"],
    answer: 0,
    why: "Very frequent tokens (stop words) are in every text and cause underfitting; very rare tokens cause overfitting. Both are removed by vocabulary pruning."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "Feature selection and feature engineering mainly help to prevent, respectively:",
    options: ["Underfitting, then overfitting", "Overfitting, then underfitting", "Overfitting in both of the two cases"],
    answer: 1,
    why: "Too many features cause overfitting, so good selection limits it. Engineering better features captures relationships the data miss, preventing underfitting."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "Precision and recall in a confusion matrix are:",
    options: ["Precision = TP ÷ (TP + FP); recall = TP ÷ (TP + FN)", "Precision = TP ÷ (TP + FN); recall = TP ÷ (TP + FP)", "Precision = (TP + TN) ÷ all predictions; recall = TP ÷ all predictions"],
    answer: 0,
    why: "Precision = [[TP|TP + FP]]: of the predicted positives, how many were right. Recall = [[TP|TP + FN]]: of the actual positives, how many were found. Accuracy = [[TP + TN|all]]; F1 = harmonic mean of precision and recall."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "A model that wrongly flags good loans as bad is costly. Which metric matters most?",
    options: ["Recall, since false negatives are the costly errors", "Accuracy, since it covers every outcome in the confusion matrix", "Precision, since false positives are the costly errors"],
    answer: 2,
    why: "Precision focuses on false positives (FP). Recall focuses on false negatives (FN). Use precision when FP are costly, recall when FN are costly."
  },
  {
    topic: "Quantitative Methods",
    reading: "Machine Learning",
    q: "Training a model on data labeled with the correct output (e.g. the right portfolio) is:",
    options: ["Supervised learning", "Unsupervised learning", "Reinforcement learning"],
    answer: 0,
    why: "Supervised learning learns from labeled inputs and outputs. Unsupervised learning has no labels and finds structure (e.g. clustering, PCA)."
  },
  {
    topic: "Quantitative Methods",
    reading: "Machine Learning",
    q: "In k-means clustering, k is:",
    options: ["The number of observations in the sample", "The number of features for each observation", "A hyperparameter: the number of clusters"],
    answer: 2,
    why: "k is set by the researcher before learning: how many non-overlapping clusters to form. It is not the sample size or the number of features."
  },
  {
    topic: "Quantitative Methods",
    reading: "Machine Learning",
    q: "Many features in a dataset are highly correlated. The best tool to reduce them is:",
    options: ["Bagging (bootstrap aggregating)", "Principal components analysis", "Ensemble learning"],
    answer: 1,
    why: "PCA turns correlated features into a few uncorrelated composite variables. Bagging resamples observations; ensembles combine model predictions. Neither reduces features."
  },
  {
    topic: "Quantitative Methods",
    reading: "Machine Learning",
    q: "LASSO with λ = 0 is equivalent to:",
    options: ["Ordinary least squares regression", "A model with every coefficient set to zero", "A pruned regression tree"],
    answer: 0,
    why: "λ sets the penalty on extra features. With λ = 0 there is no penalty, hence no regularization: plain OLS. A larger λ forces features to earn their place."
  },
  {
    topic: "Quantitative Methods",
    reading: "Machine Learning",
    q: "Predicting next quarter's stock return (a continuous number) calls for:",
    options: ["Classification into return categories", "Clustering", "Supervised regression"],
    answer: 2,
    why: "A continuous target needs regression. Classification predicts categories; clustering is unsupervised and has no target."
  },
  {
    topic: "Quantitative Methods",
    reading: "Machine Learning",
    q: "Grouping 10,000 unlabeled stocks into similar groups calls for:",
    options: ["CART", "K-means clustering", "Penalized regression"],
    answer: 1,
    why: "Unlabeled data and a grouping goal mean unsupervised clustering. CART and penalized regression are supervised and need a target."
  },
  {
    topic: "Quantitative Methods",
    reading: "Machine Learning",
    q: "A model with LOW bias error and HIGH variance error is:",
    options: ["Overfit", "Underfit", "A good fit"],
    answer: 0,
    why: "It fits the training data closely but generalizes badly. Underfit models have high bias. Cross-validation and regularization reduce overfitting."
  },
  {
    topic: "Quantitative Methods",
    reading: "Machine Learning",
    q: "Compared with KNN, CART does NOT require:",
    options: ["A labeled training dataset to learn from", "Choosing K or a distance measure in advance", "Any features to split the data on"],
    answer: 1,
    why: "KNN needs K and a distance measure. CART needs neither, and its tree shows visually why it made each prediction. Both are supervised, so both need labeled data."
  },
  {
    topic: "Quantitative Methods",
    reading: "Machine Learning",
    q: "Combining the predictions of several different models (e.g. CART, SVM, KNN) usually:",
    options: ["Gives more accurate and stable predictions", "Is no better than the best single model", "Only reduces bias error, while adding much more variance error"],
    answer: 0,
    why: "That is ensemble learning: individual errors partly cancel, so the average beats the best single model on accuracy and stability."
  },
  {
    topic: "Quantitative Methods",
    reading: "Machine Learning",
    q: "Deep learning nets are neural networks with:",
    options: ["At least 10 hidden layers, by definition", "Many hidden layers: at least 2, often more than 20", "A single hidden layer with many nodes"],
    answer: 1,
    why: "Deep learning nets have many hidden layers, at least 2 and often 20+. There is no 10-layer rule."
  },
  {
    topic: "Quantitative Methods",
    reading: "Machine Learning",
    q: "In a neural network node, the activation function:",
    options: ["Multiplies each input by a weight and sums them", "Sets the number of hidden layers in the network", "Scales the total net input up or down, like a dimmer switch"],
    answer: 2,
    why: "The summation operator weights and sums the inputs; the activation function then scales that total net input, like a light dimmer switch."
  },
  {
    topic: "Quantitative Methods",
    reading: "Machine Learning",
    q: "For complex, non-linear relationships among many features, the best-suited model is a:",
    options: ["Neural network", "LASSO regression", "Simple linear regression"],
    answer: 0,
    why: "Neural networks and deep learning handle non-linearities and complex interactions (image, speech, language). LASSO and linear regression assume linear relationships."
  },
  {
    topic: "Quantitative Methods",
    reading: "Machine Learning",
    q: "A support vector machine (SVM) is best suited to a target variable that is:",
    options: ["Continuous, such as a firm's valuation", "Binary: one of two categories", "Unlabeled, as in clustering problems"],
    answer: 1,
    why: "An SVM is a linear classifier that finds the hyperplane best separating observations into two groups. It needs a labeled, binary target, so it suits classification, not continuous prediction."
  },
  {
    topic: "Quantitative Methods",
    reading: "Machine Learning",
    q: "In the cost–complexity trade-off for overfitting, 'cost' means:",
    options: ["The computing time needed to train the model", "The gap between in-sample and out-of-sample error rates", "The bias error of the model on its training data"],
    answer: 1,
    why: "As complexity rises, in-sample error falls but out-of-sample error rises, so the gap (the cost) widens. Data scientists use this trade-off to find the point between under- and overfitting."
  },
  {
    topic: "Quantitative Methods",
    reading: "Machine Learning",
    q: "In k-fold cross-validation, each data point is used:",
    options: ["Once for validation and k − 1 times for training", "Only for training, since validation uses fresh data", "k times for validation and once for training"],
    answer: 0,
    why: "The data are shuffled and split into k parts (usually 5 or 10). Each round validates on one part and trains on the other k − 1, so the validation sample changes every round and each point is validated exactly once."
  },
  {
    topic: "Quantitative Methods",
    reading: "Machine Learning",
    q: "The dataset used to check a model's fit and tune its hyperparameters is the:",
    options: ["Training set", "Validation set", "Test set, used once the model is final"],
    answer: 1,
    why: "Training set → fit the model; validation set → check the fit and tune hyperparameters; test set → evaluate the final model on new data. The three must not overlap."
  },
  {
    topic: "Quantitative Methods",
    reading: "Machine Learning",
    q: "A model has low error on training data but high error on validation and test data. It has:",
    options: ["Overfitting with high variance error", "Underfitting with high bias error", "Overfitting with high bias error"],
    answer: 0,
    why: "Fitting the training data well means low bias; doing badly on new data means high variance. That combination is overfitting."
  },
  {
    topic: "Quantitative Methods",
    reading: "Machine Learning",
    q: "Which algorithm needs no initial hyperparameter AND gives a visual explanation of its predictions?",
    options: ["K-nearest neighbor (KNN)", "Support vector machine (SVM)", "Classification and regression tree (CART)"],
    answer: 2,
    why: "CART's tree shows why each prediction was made, and regularization can be added against overfitting. KNN needs k set in advance; an SVM gives no visual rationale."
  },
  {
    topic: "Quantitative Methods",
    reading: "Machine Learning",
    q: "k-NN models tend to work best with:",
    options: ["A small number of relevant features", "As many features as can be collected", "Features that are highly correlated"],
    answer: 0,
    why: "k-NN is sensitive to irrelevant and correlated features, which distort the distance measure. Adding features automatically usually hurts it."
  },
  {
    topic: "Quantitative Methods",
    reading: "Machine Learning",
    q: "In a default-prediction model, the field recording 'In Default / Not In Default' is the:",
    options: ["Feature", "Target", "Hyperparameter"],
    answer: 1,
    why: "The target (dependent) variable is what the model predicts. Features are the inputs; labeled data is the training set with known targets; a hyperparameter (like k) is set before training."
  },
  {
    topic: "Quantitative Methods",
    reading: "Machine Learning",
    q: "A model must output a probability between 0% and 100% for each borrower. Which fits best?",
    options: ["A support vector machine, which assigns each borrower to a class", "A k-NN classifier, which assigns a class from its neighbours", "A random forest, a supervised model that can output a continuous value"],
    answer: 2,
    why: "A continuous output with a known target calls for a supervised model that can do regression, such as a random forest. SVM and k-NN classifiers output a category."
  },
  {
    topic: "Quantitative Methods",
    reading: "Multiple Regression",
    q: "The Breusch–Pagan test statistic is calculated as:",
    options: ["n × R² from regressing the squared residuals on the independent variables", "The model's own R² × the number of independent variables", "n × adjusted R² from the original regression model"],
    answer: 0,
    why: "BP = n × R² of the regression of squared residuals on the X's. It is chi-square with k degrees of freedom, one-tailed. A large value means conditional heteroskedasticity."
  },
  {
    topic: "Quantitative Methods",
    reading: "Multiple Regression",
    q: "Conditional heteroskedasticity in a regression mainly causes:",
    options: ["Biased coefficients, but correct standard errors", "Unreliable standard errors, so t-tests can mislead", "No problems as long as the sample size is large"],
    answer: 1,
    why: "The coefficients stay consistent, but standard errors are usually understated, so t-statistics are inflated and you may find false significance. Fix with robust (White-corrected) standard errors."
  },
  {
    topic: "Quantitative Methods",
    reading: "Multiple Regression",
    q: "The Breusch–Godfrey test is used to detect:",
    options: ["Heteroskedasticity", "Multicollinearity", "Serial correlation"],
    answer: 2,
    why: "BG tests for serial correlation of the residuals (at several lags). BP tests heteroskedasticity; VIF checks multicollinearity."
  },
  {
    topic: "Quantitative Methods",
    reading: "Multiple Regression",
    q: "Serial correlation in a model whose independent variable is a LAGGED value of the dependent variable makes the coefficient estimates:",
    options: ["Invalid (inconsistent)", "Valid, with only the standard errors affected", "Valid, and the standard errors unaffected"],
    answer: 0,
    why: "With a lagged dependent variable as a regressor, serial correlation makes the coefficients inconsistent. Without one, coefficients remain consistent but (positive) serial correlation deflates the standard errors."
  },
  {
    topic: "Quantitative Methods",
    reading: "Multiple Regression",
    q: "A variable's VIF is 17. This indicates:",
    options: ["No multicollinearity issue at all", "Serious multicollinearity (VIF above 10)", "Mild multicollinearity worth ignoring"],
    answer: 1,
    why: "VIF = [[1|1 − R²]]. A VIF above 5 warrants investigation; above 10 means serious multicollinearity. A VIF of 1 means no correlation with the other X's."
  },
  {
    topic: "Quantitative Methods",
    reading: "Multiple Regression",
    q: "Which is NOT a remedy for multicollinearity?",
    options: ["Dropping one of the correlated variables", "Using robust (White-corrected) standard errors", "Increasing the sample size"],
    answer: 1,
    why: "Remedies: drop a variable, use a different proxy, or get more data. Robust standard errors fix heteroskedasticity, not multicollinearity."
  },
  {
    topic: "Quantitative Methods",
    reading: "Multiple Regression",
    q: "A dummy variable (1 if a stock is in an index, 0 otherwise) with a coefficient of −0.16 means that, all else equal, index members' predicted returns are:",
    options: ["16 percentage points lower than non-members'", "16% higher, since the dummy equals 1 for members", "The same, because dummies only shift the slope"],
    answer: 0,
    why: "An intercept dummy shifts the predicted value for the group coded 1 by its coefficient, holding the other variables constant."
  },
  {
    topic: "Quantitative Methods",
    reading: "Multiple Regression",
    q: "Which statement about adjusted R² is correct?",
    options: ["It never falls when variables are added", "It can fall, and it can even be negative", "It is always higher than the plain R²"],
    answer: 1,
    why: "Adjusted R² falls when a new variable adds too little (|t| < 1) and can be negative. Plain R² never falls when variables are added, and adjusted R² is always ≤ R²."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "In a one-period binomial model, the hedge ratio for a call is:",
    options: ["[[S+ − S−|c+ − c−]], the stock move per unit change in the call's value", "The risk-neutral probability of an up move in the stock price", "[[c+ − c−|S+ − S−]], call change per stock change"],
    answer: 2,
    why: "h = [[c+ − c−|S+ − S−]]. For a call it lies between 0 and 1; for a put it is negative (between −1 and 0)."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "The risk-neutral probability of an up move is:",
    options: ["[[u − (1 + r)|u − d]]", "[[(1 + r) − d|u − d]]", "[[1 + r|u + d]]"],
    answer: 1,
    why: "π = [[1 + r − d|u − d]]. It uses only the risk-free rate and the up/down factors, never investors' risk preferences or true probabilities."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "A call option is OVERPRICED relative to the binomial model. The arbitrage is to write the call and:",
    options: ["Short h shares and lend the proceeds", "Buy h shares and borrow", "Buy the call back and short the shares"],
    answer: 1,
    why: "Sell the expensive call and buy its replicating portfolio: long h shares financed partly by borrowing. The profit is locked in today."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "A call option is UNDERPRICED relative to the binomial model. The arbitrage is to buy the call and:",
    options: ["Short h shares and lend the proceeds", "Buy h shares and borrow the rest", "Write a put and buy the stock outright"],
    answer: 0,
    why: "Buy the cheap call and sell its replicating portfolio: short h shares and lend (invest) the proceeds at the risk-free rate."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "The expectations approach to valuing a European option:",
    options: ["Uses true probabilities, discounted at a risk-adjusted rate", "Uses risk-neutral probabilities and the stock's expected return", "Uses risk-neutral probabilities and the risk-free rate"],
    answer: 2,
    why: "Expected payoff under risk-neutral probabilities, discounted at the risk-free rate. It gives the same value as the no-arbitrage (replication) approach."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "When can early exercise of an American option be worthwhile?",
    options: ["A call on a non-dividend-paying stock, and any put at all", "Never, because American and European options are always worth the same", "A call on a dividend-paying stock, and a put"],
    answer: 2,
    why: "A call on a non-dividend stock should never be exercised early. A call may be exercised just before a dividend, and a deep in-the-money put may be exercised early."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "To value an American put in a binomial tree, at each node you use:",
    options: ["The European value at that node, ignoring early exercise", "The higher of exercising now or holding", "The lower of the exercise value and the value of holding on"],
    answer: 1,
    why: "At every node take Max(exercise value, hold value) and roll back. An American put is therefore worth at least as much as the European put."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "In a two-period binomial model, the middle terminal payoff (up then down, or down then up) is weighted by:",
    options: ["π(1 − π), because there is only one path that leads to it", "π², exactly the same weight as the up-up node", "2π(1 − π), as two paths lead to it"],
    answer: 2,
    why: "Two paths (up-down and down-up) reach the middle node, so its weight is 2π(1 − π). The ends get π² and (1 − π)²."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "The hedge ratio for a put option in a binomial model is:",
    options: ["Negative, between −1 and 0", "Positive, between 0 and 1", "Always exactly −1"],
    answer: 0,
    why: "Put values fall as the stock rises, so h = [[p+ − p−|S+ − S−]] is negative. The put's replicating portfolio is short shares plus lending."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "For an interest rate call option, the payoff at expiry per 1 of notional is:",
    options: ["Max(0, exercise rate − underlying rate)", "The underlying rate multiplied by the exercise rate", "Max(0, underlying rate − exercise rate)"],
    answer: 2,
    why: "An interest rate call pays when rates rise above the exercise rate. (An interest rate put pays Max(0, exercise rate − underlying rate).)"
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "When valuing an option on an interest rate tree, each node's expected value is discounted at:",
    options: ["The same flat rate for every node in the tree", "That node's own one-year rate", "The option's exercise rate"],
    answer: 1,
    why: "Backward induction discounts at the rate prevailing at each node, which is why the tree shows a zero-coupon value for every node."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "Raising the exercise rate of an interest rate call lowers its value because:",
    options: ["The risk-neutral probabilities of up moves in rates fall", "The payoff falls; π is unchanged", "Every interest rate in the tree shifts lower as well"],
    answer: 1,
    why: "A higher exercise rate cuts Max(0, rate − exercise rate). The tree and its risk-neutral probabilities come from the market, not from one option's terms."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "For the binomial model to be arbitrage-free, the up factor u, down factor d and risk-free rate r must satisfy:",
    options: ["d < 1 + r < u", "1 + r < d < u", "d < u < 1 + r"],
    answer: 0,
    why: "If 1 + r were outside the range from d to u, one asset would dominate the other. That also keeps π between 0 and 1."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "In BSM, a call option is replicated by:",
    options: ["Long N(d1) shares and short N(d2) bonds worth PV(X)", "Long N(d2) shares and short N(d1) bonds worth PV(X)", "Long d1 shares and short d2 bonds worth the exercise price"],
    answer: 0,
    why: "c = S N(d1) − e^(−rT) X N(d2): long N(d1) shares (the call's delta) financed by borrowing N(d2) × PV(X)."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "In BSM, a put option is replicated by:",
    options: ["Long N(d1) shares and long N(d2) bonds", "Short N(−d1) shares and long N(−d2) bonds", "Short N(d1) shares and short N(d2) zero-coupon bonds"],
    answer: 1,
    why: "p = e^(−rT) X N(−d2) − S N(−d1): lend N(−d2) × PV(X) and short N(−d1) shares, where N(−d) = 1 − N(d)."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "The delta of a European call in BSM (no dividends) is:",
    options: ["N(d2)", "N(−d1)", "N(d1)"],
    answer: 2,
    why: "Call delta = N(d1), between 0 and 1. Put delta = N(d1) − 1 = −N(−d1), between −1 and 0."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "The Black model for options on futures uses:",
    options: ["The spot price, discounted at the dividend yield", "The futures price, discounted at the risk-free rate", "The futures price, discounted at the index's dividend yield"],
    answer: 1,
    why: "c = e^(−rT)[F0 N(d1) − X N(d2)]. The futures price replaces the spot, and any dividend yield is already in the futures price."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "Which Greek measures how an option's value changes as time to expiration passes?",
    options: ["Theta", "Vega", "Rho"],
    answer: 0,
    why: "Theta is time decay and is usually negative for long options. Vega = sensitivity to volatility; rho = sensitivity to the risk-free rate."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "The model price (using historical volatility) is ABOVE the market price. The implied volatility is:",
    options: ["Above the historical volatility", "Equal to the historical volatility", "Below the historical volatility"],
    answer: 2,
    why: "Option values rise with volatility. A market price below the model price means the market is using a lower volatility."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "An interest rate option on 3-month MRR in 6 months is valued (Black model) using:",
    options: ["Today's spot 3-month MRR, with 6 months to expiry", "The 6-month FRA rate, with 6 months to expiry", "The FRA rate, with 9 months to expiry"],
    answer: 1,
    why: "The underlying is the forward (FRA) rate for the period starting when the option expires; time to expiry is when the option expires, not when the loan ends."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "An investor owns shares and wants a delta-neutral hedge using calls. He should:",
    options: ["Buy calls; number of calls = share delta × call delta", "Sell calls; number = [[portfolio delta|call delta]]", "Sell puts; number = [[portfolio delta|put delta]]"],
    answer: 1,
    why: "Each short call has negative delta, offsetting the shares' positive delta. Buying calls or selling puts adds positive delta."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "The gamma of a stock position is:",
    options: ["Zero, because its delta is always +1", "Positive, like a long call's gamma", "Equal to the stock's beta against the market index"],
    answer: 0,
    why: "Gamma is the change in delta. A share's delta is always 1, so its gamma is 0. Only options add gamma."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "Compared with the gamma of a call, the gamma of a put with the same terms is:",
    options: ["Always negative, the opposite sign of the call's gamma", "The same, and positive for a long position", "Equal to the call's delta minus 1"],
    answer: 1,
    why: "Put–call parity: the put and call deltas differ by a constant (1), so their gammas are equal. Long options always have positive gamma."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "Hedging long shares with LONG puts gives a portfolio gamma that is:",
    options: ["Positive", "Negative", "Zero (gamma-neutral)"],
    answer: 0,
    why: "Shares add no gamma; long puts add positive gamma. Hedging by SELLING calls instead gives negative gamma, which hurts when the market moves sharply."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "Vega (sensitivity to volatility) for a long call and a long put is:",
    options: ["Positive for the call, negative for the put", "Negative for both, since volatility hurts long options", "Positive for both, and equal for the same terms"],
    answer: 2,
    why: "Higher volatility raises both call and put values, and call and put vegas are equal (put–call parity)."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "Rho (sensitivity to the risk-free rate) is usually:",
    options: ["Positive for calls, negative for puts", "Negative for calls, positive for puts", "Positive for both calls and puts, like vega"],
    answer: 0,
    why: "A higher rate lowers the PV of the exercise price, which helps calls (the price paid) and hurts puts (the price received)."
  }
];


if (typeof module !== "undefined") module.exports = QUESTIONS;
