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
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "In BSM, the amount e^(−rT) X N(−d2) represents:",
    options: ["The amount borrowed to replicate a call", "The amount lent to replicate a put", "The value of the call's exercise right"],
    answer: 1,
    why: "Put = lend e^(−rT) X N(−d2) and short N(−d1) shares. A call borrows e^(−rT) X N(d2) to buy N(d1) shares."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "A call option can be viewed as:",
    options: ["A leveraged long position in the stock", "A short stock position plus lending", "A risk-free bond with no stock exposure"],
    answer: 0,
    why: "Buying N(d1) shares partly financed by borrowing makes a call a leveraged long stock position. A put is short stock plus lending."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "Vega is typically highest for options that are:",
    options: ["Deep in the money, with high intrinsic value", "At or near the money", "Far out of the money"],
    answer: 1,
    why: "Volatility matters most when the option could easily finish either in or out of the money, i.e. near the money. Deep in- or out-of-the-money options have low vega."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "As an option approaches expiration, theta typically:",
    options: ["Stays constant every day until expiry", "Shrinks steadily to zero at a slowing rate", "Grows in size, so time decay speeds up"],
    answer: 2,
    why: "Time decay accelerates near expiry, especially for at-the-money options."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "Implied volatility is:",
    options: ["The volatility backed out from market option prices", "The standard deviation of the stock's past daily returns", "The volatility set by the exchange for each option"],
    answer: 0,
    why: "Implied volatility is the input that makes the model price equal the market price. It reflects the market's expected FUTURE volatility, unlike historical volatility."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "A volatility surface shows implied volatility across:",
    options: ["Exercise prices only", "Both exercise prices and times to maturity", "Times to maturity only, for one fixed strike price"],
    answer: 1,
    why: "The smile/skew shows implied volatility across exercise prices; the term structure shows it across maturities; the surface combines both in 3D."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "When demand for downside hedging rises, the volatility skew typically:",
    options: ["Flattens into a symmetric smile", "Disappears, since all implied vols equal", "Steepens: low-strike puts get pricier"],
    answer: 2,
    why: "Investors pay up for protective out-of-the-money puts, raising their implied volatility and steepening the skew."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "Gamma measures:",
    options: ["The change in delta for a small change in the stock price", "The change in option value as time passes", "The change in option value for a change in volatility"],
    answer: 0,
    why: "Gamma is the rate of change of delta. Theta is time decay; vega is volatility sensitivity."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Under Standard IV(C), supervisors' compliance procedures should be reviewed:",
    options: ["Once, when the compliance program is first adopted", "Periodically, and whenever laws or regulations change", "Only after a violation has been discovered and reported"],
    answer: 1,
    why: "Supervisors must keep procedures adequate over time: periodic reviews and updates, plus revisions when new laws or regulations arrive."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Under Standard V(A), setting measurable criteria for the quality and accuracy of analysts' research falls under:",
    options: ["Compensation", "Distribution", "Reasonable basis"],
    answer: 0,
    why: "V(A) recommended procedures: compensation (criteria for research quality and accuracy), distribution (a supervisory analyst approves material before release), reasonable basis (written due diligence procedures)."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Having a supervisory analyst approve research before it is sent to clients is the V(A) procedure for:",
    options: ["Reasonable basis", "Distribution", "Compensation"],
    answer: 1,
    why: "Distribution: review and approval before external circulation, to check the firm's criteria are met."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "A high-risk turnaround stock is bought in one block trade for all accounts, including conservative retirement mandates. The main violation is:",
    options: ["Fair Dealing, since every account received the trade", "Misrepresentation, since the risk was not mentioned", "Suitability, since it conflicts with the conservative mandates"],
    answer: 2,
    why: "III(C) requires actions consistent with each portfolio's mandate. A block trade itself is fair; the problem is buying it for accounts it doesn't suit."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "An analyst includes management's earnings guidance in her report alongside her own estimates, clearly attributed. This is:",
    options: ["Acceptable: attributed sources are not misrepresentation", "A violation of Misrepresentation (plagiarism)", "A violation of Material Nonpublic Information"],
    answer: 0,
    why: "Citing others' views with attribution is fine under I(C). Plagiarism means presenting others' work as your own."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Under Standard VI(B), a firm's personal trading policies should be:",
    options: ["Kept confidential to protect employees' privacy", "Disclosed to investors when they ask for them", "Approved by clients before employees may trade"],
    answer: 1,
    why: "Members should fully disclose the firm's personal-investing policies to investors on request. Recommended procedures also include IPO restrictions and blackout periods."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Which is a recommended procedure under Standard VI(B), Priority of Transactions?",
    options: ["Allowing employees first access to IPOs", "Letting staff trade on buy-list stocks just before clients", "Blackout periods around client trades"],
    answer: 2,
    why: "Blackout periods stop front-running. Recommended procedures also restrict IPO participation, require pre-clearance and reporting of holdings, and disclose policies on request."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Standard VI(B), Priority of Transactions, is engaged when a member:",
    options: ["Tells a relative about trades the firm is executing", "Trades in an account in which they have a beneficial interest", "Recommends a broker to a prospective client during a presentation"],
    answer: 1,
    why: "VI(B) puts client and employer trades ahead of trades where the member is a beneficial owner. Just talking about trades is a loyalty/confidentiality issue instead."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Telling a relative which stocks your firm is researching and trading most likely violates:",
    options: ["Loyalty and Preservation of Confidentiality", "Priority of Transactions and Fair Dealing", "Independence and Objectivity only, as the relative may trade"],
    answer: 0,
    why: "Divulging the employer's confidential information breaks IV(A) Loyalty; revealing client trades breaks III(E) Preservation of Confidentiality."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "A broker pays for a trader's full three-day conference at an exclusive resort, and the trader discloses it to clients. This is:",
    options: ["Acceptable, because the benefit was disclosed", "A breach of Independence and Objectivity", "Fine if the conference is educational in any way"],
    answer: 1,
    why: "I(B): lavish benefits that could compromise objectivity should be refused. Disclosure doesn't cure it; only modest gifts and entertainment are acceptable."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Under Standard IV(C), periodic reminders of compliance procedures should be sent to:",
    options: ["Only employees who have broken the rules before", "All employees to whom the procedures apply", "Only supervisors, who then decide which of their staff to tell"],
    answer: 1,
    why: "Reminders go to all relevant staff. When a violation is found, supervision of that person is also increased."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Once a supervisor learns of a possible violation, IV(C) suggests:",
    options: ["Waiting for the employee's next annual performance review to raise it", "Increasing supervision or restricting the person pending investigation", "Reporting it to the local CFA society straight away"],
    answer: 1,
    why: "Respond promptly: investigate, and increase supervision or place limits on the person while it is resolved."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "After filing a complaint with CFA Institute's Professional Conduct Program, the firm should:",
    options: ["Inform the local CFA society about the complaint", "Wait for the PCP to report back on the outcome", "Consult its legal and compliance advisers"],
    answer: 2,
    why: "The PCP process is confidential and between the member and CFA Institute; it won't update the complainant. Telling the local society risks breaching confidentiality."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Under the Code and Standards, members must report violations to regulators:",
    options: ["Only when the law requires it, though it may be prudent", "Always, as soon as a violation is discovered", "Never, since all reporting goes through CFA Institute"],
    answer: 0,
    why: "I(A) requires dissociating from violations. Reporting to regulators isn't required by the Standards unless the law requires it, but can be prudent."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "A partner at a consulting firm is offered a project as an individual. To comply with Standard IV, he should first:",
    options: ["Accept it, as long as he works on it in his own time", "Take the opportunity to his firm and partners", "Refer the client to another independent adviser"],
    answer: 1,
    why: "IV(A) Loyalty and IV(B) Additional Compensation: work that competes with the employer must go to the employer first. Referring it elsewhere also deprives the firm."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Spreading an unverified rumour that a fellow professional has a drinking problem most likely violates:",
    options: ["Standard I(D), Misconduct", "Standard I(C), Misrepresentation", "Standard III(E), Confidentiality"],
    answer: 0,
    why: "Misconduct covers conduct reflecting adversely on professional reputation, integrity or competence, such as maligning others on rumours."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Offering introductions to influential people to win a consulting assignment most likely violates:",
    options: ["Standard I(B), Independence and Objectivity", "Standard VI(A), Disclosure of Conflicts", "Standard I(C), Misrepresentation"],
    answer: 0,
    why: "Offering benefits that could reasonably compromise someone's independence in choosing an adviser breaches I(B)."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "A regulator can adopt only ONE broad capital-market rule. The best choice is to:",
    options: ["Ban only information-based price manipulation", "Require that all material information be published within 24 hours", "Require that investors' interests be given priority"],
    answer: 2,
    why: "Putting investors first covers loyalty and makes insider trading and manipulation unacceptable. Banning one kind of manipulation is too narrow; forcing all material information public could harm investors."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "A sole fund manager's prospectus omits key-person risk. This most likely violates:",
    options: ["Only V(B), Communication with Clients", "Only I(C), Misrepresentation", "Both I(C) and V(B)"],
    answer: 2,
    why: "Omitting a significant risk is a misrepresentation by omission (I(C)) and a failure to disclose significant risks of the investment process (V(B))."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "A fraud stays hidden despite a thorough audit and a clean regulatory inspection. The diligent auditor has most likely:",
    options: ["Not violated the Standards", "Violated IV(C), Responsibilities of Supervisors", "Violated V(A), Diligence and Reasonable Basis"],
    answer: 0,
    why: "The Standards require reasonable efforts, not perfect detection. Missing a well-concealed fraud after diligent work isn't a violation."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Before anyone is charged, a firm's press release about alleged wrongdoing should:",
    options: ["Name the suspects so investors can judge the risk", "State that illegal activity caused the problem", "Avoid naming anyone or implying guilt"],
    answer: 2,
    why: "Naming people or implying guilt before charges harms the employer and its client (IV(A), III(A)) and risks defamation. Refer to 'alleged' activity pending investigation."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "New laws took effect before the firm's policies were updated. The best fix is to:",
    options: ["Review all compliance policies once a year", "Set up a process to learn about legal changes promptly", "Train client service staff on the new laws"],
    answer: 1,
    why: "Procedures must be updated before laws take effect, so the firm needs timely information on legal changes. An annual review can miss mid-year laws."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Client accounts in which staff are beneficiaries (e.g. family accounts) should be:",
    options: ["Traded after all other client accounts", "Treated like any other client account", "Traded first, since staff know the clients best"],
    answer: 1,
    why: "Under VI(B), family accounts that are client accounts are neither favoured nor disadvantaged. Trading them last is unfair to those clients."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "A complete ban on staff investing in private placements is:",
    options: ["Consistent with VI(B), which recommends strict limits", "A violation, because staff have a right to invest", "Required by law under the Standards for every firm"],
    answer: 0,
    why: "VI(B) recommends strict limits on private placements and IPOs; a full ban goes further but is allowed."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "After leaving a firm with no noncompete, simply knowing the names of its clients is:",
    options: ["Generally not confidential information", "Confidential, so using them breaches III(E)", "Usable only after a cooling-off period"],
    answer: 0,
    why: "Knowing that former clients exist is generally not confidential under IV(A) or III(E), unless a confidentiality agreement or the law says otherwise."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "A former employee may contact clients of their previous firm as long as:",
    options: ["The previous firm gives its written consent to each contact first", "They wait until those clients reach out to them on their own", "Contact details don't come from the old firm's records"],
    answer: 2,
    why: "IV(A) allows it if the contact information isn't taken from the former employer's records and no noncompete agreement is breached."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Skills and experience gained at a former employer are:",
    options: ["Confidential property of the former employer", "Not confidential once the employee has left", "Usable only with the former employer's consent"],
    answer: 1,
    why: "Under IV(A), general skills and experience belong to the employee after leaving; only confidential information (e.g. client lists, records) stays with the firm."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Still employed, you meet a client of your firm who asks how to reach a former colleague's new firm. Best action:",
    options: ["Give the client the name of the new firm", "Phone the former colleague with the details", "Keep the card until you join the new firm"],
    answer: 0,
    why: "Giving the name serves the client (III(A)) and leaves contact in the client's hands, without you actively diverting business from your employer (IV(A))."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "While still employed, personally passing your firm's client to a former colleague's competing firm mainly conflicts with:",
    options: ["III(E) Preservation of Confidentiality", "IV(A) Loyalty to the employer", "VI(A) Disclosure of Conflicts"],
    answer: 1,
    why: "Actively steering a client to a competitor could cause the client to move assets, harming your current employer: IV(A) Loyalty."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Ignoring a client's request until it suits your own job move mainly conflicts with:",
    options: ["IV(A) Loyalty to the employer", "I(B) Independence and Objectivity", "III(A) Loyalty, Prudence, and Care"],
    answer: 2,
    why: "III(A) requires putting the client's interests before your employer's and your own. Delaying the client's request for personal timing fails that."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Under III(A), when interests compete, a member's order of priority is:",
    options: ["Clients, then employer, then self", "Employer, then clients, then self", "Clients and employer equally, then self"],
    answer: 0,
    why: "III(A): act for the benefit of clients and place their interests before the employer's or your own."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "While still employed, giving your employer's daily market commentary to another firm most likely violates:",
    options: ["III(B) Fair Dealing", "IV(A) Loyalty", "V(B) Communication with Clients"],
    answer: 1,
    why: "The commentary reflects how you manage money for your employer and its clients; handing it to another firm harms the employer: IV(A) Loyalty."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Offering your employer's research to another firm in hope of a future job and equity stake there also breaches:",
    options: ["I(B) Independence and Objectivity", "VII(B) Reference to CFA Institute", "III(C) Suitability and client objectives"],
    answer: 0,
    why: "The hoped-for job and equity are a benefit that could compromise objectivity: I(B) forbids offering or accepting such consideration."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Under IV(B), written consent for an outside paid arrangement must come from:",
    options: ["The member's former employer only", "All parties involved, incl. the employer", "The member's clients and prospects"],
    answer: 1,
    why: "IV(B) Additional Compensation Arrangements requires written consent from all parties involved, which always includes the member's current employer."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "A written IV(B) agreement for outside compensation should state:",
    options: ["Only the total fee and the schedule of payments", "Which of the firm's client accounts might be affected", "Nature, approximate amount and duration of pay"],
    answer: 2,
    why: "Recommended procedure: describe the nature of the compensation, its approximate amount and how long the arrangement lasts."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "If an employee's outside paid arrangement could affect clients, the firm should also:",
    options: ["Disclose it to clients and prospects (VI(A))", "Ask the CFA Institute to approve it first", "Only keep the signed contract on file"],
    answer: 0,
    why: "VI(A) Disclosure of Conflicts: matters that could impair independence or interfere with duties to clients must be fully and fairly disclosed."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Asking a current client with first-hand experience of your work for a reference letter is:",
    options: ["A violation, since clients can't be asked", "Generally consistent with I(B)", "Allowed only after you leave the firm"],
    answer: 1,
    why: "A client who knows your work and has nothing to gain can give an objective reference, so I(B) isn't compromised."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Hinting you will recommend a research provider to your next employer in return for a reference most likely violates:",
    options: ["I(B) Independence and Objectivity", "III(B) Fair Dealing among all clients", "IV(B) Additional Compensation"],
    answer: 0,
    why: "The promised business is a benefit that could compromise your future independence in choosing research providers: I(B)."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Under III(B) Fair Dealing, when a recommendation changes, the firm should notify:",
    options: ["Only clients who still hold the security", "Only clients who later ask about the change", "All clients, especially those who acted on it"],
    answer: 2,
    why: "Changed recommendations should go to all clients, with priority to those who acted on the earlier advice."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Under III(B), a partially filled block order should be allocated:",
    options: ["First-come, first-served", "Pro rata across the accounts", "To the largest accounts first"],
    answer: 1,
    why: "Pro-rata allocation of partial fills is a recommended fair-dealing procedure; it treats every participating client equally."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Insider trading is legal where a member works. Under I(A), the member must:",
    options: ["Follow the stricter rule: the CFA Standards", "Follow local law, since it applies there", "Follow whichever rule the employer picks"],
    answer: 0,
    why: "I(A) Knowledge of the Law: when local law and the Standards differ, follow the stricter one."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Combining public data with your own non-material observations (e.g. how fast shelves are restocked) is:",
    options: ["A II(A) violation if the conclusion is material", "Allowed under the mosaic theory", "Allowed only with management's consent"],
    answer: 1,
    why: "The mosaic theory lets analysts combine public and non-material nonpublic pieces, even if the conclusion is material."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "A firm caps gifts at USD100 each. A CFO sends six USD100 baskets, shared one per team member. This is:",
    options: ["A breach of firm policy and I(D)", "Acceptable only if reported to clients", "Consistent with policy: no violation"],
    answer: 2,
    why: "Each person receives one gift within the limit, so firm policy is followed and objectivity is unlikely to be compromised."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Selling a stock for all clients before selling your own holding is consistent with:",
    options: ["III(A) and putting clients first", "II(A) Material Nonpublic Information", "III(D) Performance Presentation"],
    answer: 0,
    why: "Putting client trades before your own shows loyalty to clients (III(A)) and respects priority of transactions (VI(B))."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Which is an acceptable reference to the CFA Program?",
    options: ["Charterholders have superior management skills", "Describing the program's rigorous study demands", "Charterholders achieve better client returns"],
    answer: 1,
    why: "VII(B) allows factual statements about the program's rigour and the skills it develops, but not claims of superiority or better performance."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Under III(B), all accounts in the same block trade should receive:",
    options: ["The same price and commission", "The price in the order they were entered", "Prices that reflect each account's size"],
    answer: 0,
    why: "Fair allocation: every account in a block trade gets the same execution price and is charged the same commission."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Standard II(B) Market Manipulation covers:",
    options: ["Only spreading false information", "Only trades that create false prices", "Both information- and transaction-based"],
    answer: 2,
    why: "II(B) covers distorting prices with misleading information AND trades that create false liquidity or price levels."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Telling a colleague to answer a reporter truthfully, without giving details of past incidents, supports:",
    options: ["III(E) Preservation of Confidentiality", "I(C) Misrepresentation of the firm's record", "V(B) Communication with Clients"],
    answer: 0,
    why: "Answering truthfully avoids misrepresentation, and withholding details protects confidential information."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Written due-diligence procedures for judging whether a recommendation has adequate support relate to:",
    options: ["Distribution", "Reasonable Basis", "Compensation"],
    answer: 1,
    why: "V(A) recommended procedures: Reasonable Basis = written due-diligence standards; Distribution = supervisory approval; Compensation = measurable quality criteria."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Buying a stock for every client in one block trade, favouring no one, satisfies Fair Dealing but may still breach:",
    options: ["III(C) Suitability", "II(B) Market Manipulation", "VI(B) Priority of Transactions"],
    answer: 0,
    why: "Treating everyone the same is fair, but the stock must still fit each account's objectives and constraints."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Restricting employees from buying IPOs is recommended mainly because it:",
    options: ["Lowers the firm's trading costs", "Stops staff missing good deals", "Avoids taking deals from clients"],
    answer: 2,
    why: "VI(B): staff buying IPOs could take opportunities from clients or look like favours from the issuer or broker."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Under I(B), accepting gifts or entertainment from a broker is generally acceptable when they are:",
    options: ["Modest and of nominal value", "Disclosed to clients afterwards", "Approved by the broker's compliance"],
    answer: 0,
    why: "Modest gifts are fine. Lavish ones (e.g. a resort conference) compromise objectivity even if disclosed."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "After a firm files a complaint about a former employee with the CFA Institute PCP:",
    options: ["The PCP will report its final outcome back to the firm", "The firm must also inform its local CFA society", "The matter is between the member and CFA Institute"],
    answer: 2,
    why: "The PCP process is confidential; the firm shouldn't expect updates, and telling others could breach that confidentiality."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Requiring staff to report membership of an investment club before joining is:",
    options: ["A breach of staff privacy", "A reasonable IV(C) preventive step", "Only needed if the club trades IPOs"],
    answer: 1,
    why: "Supervisors should have procedures that help prevent and detect violations; advance reporting does both."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "By firing an employee who violated the Standards, a firm has:",
    options: ["Dissociated itself from the violation", "Fully met any legal reporting duty", "Removed the need to consult counsel"],
    answer: 0,
    why: "Firing achieves dissociation (I(A)). Whether to report to regulators is a separate legal question, so consult legal and compliance advisers."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Repeating a client's own description of your reputation as 'stellar' is:",
    options: ["I(C) Misrepresentation", "VII(B) misuse of the designation", "Not a misrepresentation"],
    answer: 2,
    why: "You're only repeating what the client said, not making a false or exaggerated claim."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "A rule banning the 'pumping up' of prices only targets:",
    options: ["Transaction-based manipulation", "Information-based manipulation", "Trading on nonpublic information"],
    answer: 1,
    why: "Pumping up prices with misleading information is information-based manipulation; trade-based manipulation and insider trading stay uncovered."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Requiring ALL material information to be made public within 24 hours could:",
    options: ["Harm investors, e.g. by revealing trade secrets", "Fully prevent insider trading in all markets", "Replace the need for a duty of loyalty to clients"],
    answer: 0,
    why: "Some material information, like competitive secrets, shouldn't be public; forcing disclosure could hurt the company's investors."
  },
  {
    topic: "Ethical and Professional Standards",
    reading: "Guidance for Standards I–VII",
    q: "Training only client-service staff on new anti-money-laundering laws is:",
    options: ["Sufficient, since they deal with clients", "Too narrow: train all relevant staff", "Required only for the compliance team"],
    answer: 1,
    why: "Compliance training should reach all employees the procedures apply to, and the firm also needs a process to learn of legal changes promptly."
  },
  {
    topic: "Equity Valuation",
    reading: "Discounted Dividend Valuation",
    q: "In the Gordon growth model, the numerator of [[D1|r − g]] should be:",
    options: ["D0, the dividend that was just paid", "D0 × (1 + g), next year's dividend", "Current EPS times the latest payout ratio"],
    answer: 1,
    why: "Gordon values the NEXT dividend: D1 = D0(1 + g). Using D0 understates value, a classic distractor."
  },
  {
    topic: "Equity Valuation",
    reading: "Discounted Dividend Valuation",
    q: "If a stock is fairly priced under the Gordon growth model, its expected capital gains yield equals:",
    options: ["The dividend growth rate g", "The required return r", "The dividend yield D1/P0"],
    answer: 0,
    why: "Price grows at the same rate as dividends, so price appreciation = g. Total return r = dividend yield + g."
  },
  {
    topic: "Equity Valuation",
    reading: "Discounted Dividend Valuation",
    q: "In the Gordon growth model, the required return r splits into:",
    options: ["Dividend yield + capital gains yield", "Risk-free rate + capital gains yield", "Payout ratio + growth rate"],
    answer: 0,
    why: "r = D1/P0 + g: the dividend yield plus the capital gains yield (g)."
  },
  {
    topic: "Equity Valuation",
    reading: "Discounted Dividend Valuation",
    q: "The justified trailing P/E is:",
    options: ["Market price ÷ next year's EPS", "Intrinsic value ÷ latest EPS", "Market price ÷ latest EPS"],
    answer: 1,
    why: "'Justified' means based on fundamentals: V0/E0. Price/E0 is the actual trailing P/E; dividing by E1 gives a leading P/E."
  },
  {
    topic: "Equity Valuation",
    reading: "Discounted Dividend Valuation",
    q: "In terms of fundamentals, the justified trailing P/E is:",
    options: ["[[1 − b|r − g]]", "[[(1 − b)(1 + g)|r − g]]", "[[b × (1 + g)|r − g]]"],
    answer: 1,
    why: "P0/E0 = [[D0(1 + g)/E0|r − g]] = [[(1 − b)(1 + g)|r − g]], with 1 − b the payout ratio. The leading P/E drops the (1 + g)."
  },
  {
    topic: "Equity Valuation",
    reading: "Discounted Dividend Valuation",
    q: "Using a higher beta in the CAPM, all else equal, makes the Gordon growth value:",
    options: ["Higher, since riskier stocks tend to grow faster", "Unchanged, since the dividends stay the same", "Lower, because the required return rises"],
    answer: 2,
    why: "Higher beta → higher r → larger denominator r − g → lower value."
  },
  {
    topic: "Equity Valuation",
    reading: "Discounted Dividend Valuation",
    q: "Solving the Gordon growth model for g using the current market price gives:",
    options: ["The implied (market) dividend growth rate", "The sustainable growth rate, b × ROE, of the firm", "The historical average dividend growth rate"],
    answer: 0,
    why: "Setting P0 = D1/(r − g) and solving for g shows the growth the market price implies; compare it with your own forecast."
  },
  {
    topic: "Equity Valuation",
    reading: "Discounted Dividend Valuation",
    q: "If the implied growth rate in the market price is BELOW your growth forecast, the stock is likely:",
    options: ["Overvalued", "Fairly valued", "Undervalued"],
    answer: 2,
    why: "The market prices in less growth than you expect, so your value exceeds the price: undervalued."
  },
  {
    topic: "Equity Valuation",
    reading: "Discounted Dividend Valuation",
    q: "A dividend discount model is most appropriate when the company:",
    options: ["Pays no dividends but has strong free cash flow", "Pays dividends linked clearly to earnings", "Is being valued by a buyer seeking control of it"],
    answer: 1,
    why: "DDM fits when there is a dividend record and the policy bears an understandable relationship to earnings, and for minority (non-control) investors."
  },
  {
    topic: "Equity Valuation",
    reading: "Discounted Dividend Valuation",
    q: "The Gordon growth model is best suited to a company whose growth is:",
    options: ["Stable and moderate, below r", "Very high for several years", "Negative and highly volatile"],
    answer: 0,
    why: "Gordon assumes constant growth forever, and g must be below r. Mature, steady companies fit; high growth needs multistage models."
  },
  {
    topic: "Equity Valuation",
    reading: "Discounted Dividend Valuation",
    q: "Betas estimated with daily returns over 5 years and monthly returns over 10 years:",
    options: ["Must be identical if data are correct", "Can differ, changing r and the value", "Differ only for non-US stocks"],
    answer: 1,
    why: "Beta depends on return frequency and sample period. A different beta changes the CAPM r, and so the DDM value."
  },
  {
    topic: "Equity Valuation",
    reading: "Discounted Dividend Valuation",
    q: "A stock trades below the lower end of a ±10% band around its intrinsic value. It is:",
    options: ["Undervalued", "Fairly valued", "Overvalued"],
    answer: 0,
    why: "Below the band = price well under value = undervalued. Inside the band = fairly valued; above it = overvalued."
  },
  {
    topic: "Fixed Income",
    reading: "The Arbitrage-Free Valuation Framework",
    q: "The arbitrage-free value of an option-free bond is found by:",
    options: ["Discounting all cash flows at the bond's YTM", "Discounting each cash flow at its own spot rate", "Discounting all cash flows at the 1-year rate"],
    answer: 1,
    why: "Each cash flow is a zero-coupon bond; value it at the spot rate for its date and add them up (Method 1)."
  },
  {
    topic: "Fixed Income",
    reading: "The Arbitrage-Free Valuation Framework",
    q: "A bond trades BELOW the sum of its cash flows valued at spot rates. The arbitrage is to:",
    options: ["Buy the bond and sell its stripped cash flows", "Sell the bond and buy the stripped cash flows", "Buy the bond and hold it to maturity"],
    answer: 0,
    why: "Buy the cheap whole (the bond), sell the expensive parts (zeros). This is stripping."
  },
  {
    topic: "Fixed Income",
    reading: "The Arbitrage-Free Valuation Framework",
    q: "A bond trades ABOVE the value of its cash flows at spot rates. The arbitrage is to:",
    options: ["Buy the bond and sell zero-coupon bonds", "Buy both the bond and the zero-coupon bonds", "Sell the bond and buy the matching zeros"],
    answer: 2,
    why: "Short the overpriced bond and buy the zeros that replicate it (reconstitution), locking in the difference."
  },
  {
    topic: "Fixed Income",
    reading: "The Arbitrage-Free Valuation Framework",
    q: "For a bond priced at par, the coupon rate equals:",
    options: ["Its yield to maturity", "Its 1-year spot rate", "Its 1-year forward rate"],
    answer: 0,
    why: "Price = par only when the coupon rate equals the YTM. For a 1-year par bond, that YTM is also the 1-year spot rate."
  },
  {
    topic: "Fixed Income",
    reading: "The Arbitrage-Free Valuation Framework",
    q: "Bootstrapping spot rates from a par curve means:",
    options: ["Averaging the par yields across all maturities", "Solving each maturity in turn, using earlier spot rates", "Using the longest bond's coupon for every year"],
    answer: 1,
    why: "Start with z1 = 1-year par yield, then solve for z2 using z1, then z3 using z1 and z2, each time using that par bond's own coupon."
  },
  {
    topic: "Fixed Income",
    reading: "The Arbitrage-Free Valuation Framework",
    q: "Discounting a coupon bond's cash flows at the par YTMs for each maturity (instead of spot rates) is wrong because:",
    options: ["Par yields ignore the bond's credit risk", "Par yields are already forward rates", "A par yield blends several spot rates"],
    answer: 2,
    why: "A par YTM is a single average rate for all of a coupon bond's cash flows; a cash flow at year t needs the year-t spot rate."
  },
  {
    topic: "Fixed Income",
    reading: "The Arbitrage-Free Valuation Framework",
    q: "When the par curve slopes upward, the longer-maturity spot rates are:",
    options: ["Slightly above the par yields", "Slightly below the par yields", "Exactly equal to the par yields"],
    answer: 0,
    why: "Par yields average in the lower early spot rates, so the long spot rate must be higher than the long par yield."
  },
  {
    topic: "Fixed Income",
    reading: "The Arbitrage-Free Valuation Framework",
    q: "Discounting fixed cash flows at spot rates (no tree) is unsuitable for a bond with an embedded option because:",
    options: ["Spot rates can't be bootstrapped for it", "Its cash flows depend on future rates", "Its credit risk is always higher"],
    answer: 1,
    why: "Whether a call or put is exercised depends on future interest rates, so cash flows aren't fixed; a binomial tree lets rates vary with volatility."
  },
  {
    topic: "Fixed Income",
    reading: "The Arbitrage-Free Valuation Framework",
    q: "For an option-free bond, a calibrated binomial tree and spot-rate discounting give:",
    options: ["A higher value from the tree", "A lower value from the tree", "The same value"],
    answer: 2,
    why: "A tree calibrated to the benchmark curve is arbitrage-free, so it reproduces spot-rate values for option-free bonds."
  },
  {
    topic: "Fixed Income",
    reading: "The Arbitrage-Free Valuation Framework",
    q: "In a binomial tree, the value at a node equals:",
    options: ["Average of the next two values plus the coupon, discounted at the node's rate", "Average of the next two values, discounted at the 1-year spot rate", "The higher of the next two values plus the coupon, discounted at the node's rate"],
    answer: 0,
    why: "Backward induction with ½ probability on each branch: [[½(V_up + C) + ½(V_down + C)|1 + node rate]]."
  },
  {
    topic: "Fixed Income",
    reading: "The Arbitrage-Free Valuation Framework",
    q: "Two common errors when valuing a bond with a binomial tree are:",
    options: ["Using equal branch probabilities", "Discounting at each node's own rate", "Subtracting coupons, or adding one at Time 0"],
    answer: 2,
    why: "Coupons are ADDED at each future node; none is paid at Time 0. Equal ½ probabilities and node-specific rates are correct."
  },
  {
    topic: "Fixed Income",
    reading: "The Arbitrage-Free Valuation Framework",
    q: "In a lognormal interest rate tree, the higher rate at a node date relates to the lower one by:",
    options: ["Higher = lower × e^(2σ)", "Higher = lower + 2σ", "Higher = lower × (1 + σ)"],
    answer: 0,
    why: "Adjacent rates at a date differ by the factor e^(2σ). Lognormal rates also can't turn negative, and their spread grows with the rate level."
  },
  {
    topic: "Fixed Income",
    reading: "The Arbitrage-Free Valuation Framework",
    q: "If Tatton uses implied volatility (higher than historical) to build the tree, the value of an option-free bond:",
    options: ["Rises, as wider rates add value", "Is unchanged", "Falls, as wider rates add risk"],
    answer: 1,
    why: "Option-free values don't depend on volatility: the recalibrated tree still matches the benchmark curve. Volatility matters only for bonds with embedded options."
  },
  {
    topic: "Fixed Income",
    reading: "The Arbitrage-Free Valuation Framework",
    q: "Higher interest rate volatility in the tree makes a CALLABLE bond's value:",
    options: ["Lower, since the issuer's call is worth more", "Higher, since the investor's option gains", "Unchanged, since the coupon is fixed"],
    answer: 0,
    why: "Callable = straight bond − call. More volatility raises the call's value, so the callable bond is worth less. (A putable bond is worth more.)"
  },
  {
    topic: "Economics",
    reading: "Currency Exchange Rates: Understanding Equilibrium Value",
    q: "A client converting yen into pounds with a JPY/GBP quote pays:",
    options: ["The dealer's bid", "The dealer's offer", "The bid–offer midpoint"],
    answer: 1,
    why: "GBP is the base currency. Buying the base currency means paying the dealer's offer, the higher price."
  },
  {
    topic: "Economics",
    reading: "Currency Exchange Rates: Understanding Equilibrium Value",
    q: "In a price/base quote, the dealer's BID is the price at which the dealer:",
    options: ["Buys the base currency", "Sells the base currency", "Buys the price currency"],
    answer: 0,
    why: "Bid = dealer buys the base (client sells it); offer = dealer sells the base (client buys it)."
  },
  {
    topic: "Economics",
    reading: "Currency Exchange Rates: Understanding Equilibrium Value",
    q: "Which is most likely to WIDEN a dealer's bid–offer spread?",
    options: ["Both major centres being open", "Lower market volatility", "A much larger trade size"],
    answer: 2,
    why: "Large trades are harder to offset in the interbank market. Overlapping trading hours and calm markets narrow spreads."
  },
  {
    topic: "Economics",
    reading: "Currency Exchange Rates: Understanding Equilibrium Value",
    q: "A dealer's posted FX quote typically applies to about:",
    options: ["1 million units of the base currency", "10 million units of the price currency", "Any size the client wants"],
    answer: 0,
    why: "Posted quotes are for standard-size trades (around 1 million base units); bigger trades get wider quotes."
  },
  {
    topic: "Economics",
    reading: "Currency Exchange Rates: Understanding Equilibrium Value",
    q: "To build a cross rate A/C from A/B and B/C quotes, the cross bid equals:",
    options: ["Bid(A/B) × Offer(B/C)", "Bid(A/B) × Bid(B/C)", "Offer(A/B) × Bid(B/C)"],
    answer: 1,
    why: "When the middle currency cancels (A/B × B/C), multiply bids for the bid and offers for the offer."
  },
  {
    topic: "Economics",
    reading: "Currency Exchange Rates: Understanding Equilibrium Value",
    q: "Inverting a quote from A/B to B/A, the new bid is:",
    options: ["1 / the old bid", "The old offer, unchanged", "1 / the old offer"],
    answer: 2,
    why: "The bid and offer swap sides: B/A bid = 1/(A/B offer); B/A offer = 1/(A/B bid)."
  },
  {
    topic: "Economics",
    reading: "Currency Exchange Rates: Understanding Equilibrium Value",
    q: "Triangular arbitrage exists only if:",
    options: ["One dealer's bid exceeds another's offer", "The two dealers' midpoints differ at all", "Both bid–offer spreads are wider than 4 pips"],
    answer: 0,
    why: "You need to buy at one quote's offer and sell at a HIGHER bid elsewhere. Different midpoints alone aren't enough."
  },
  {
    topic: "Economics",
    reading: "Currency Exchange Rates: Understanding Equilibrium Value",
    q: "Positive forward points in a price/base quote mean the base currency trades at:",
    options: ["A forward discount", "A forward premium", "Neither, it is at par"],
    answer: 1,
    why: "Forward = spot + points; F > S means the base currency is worth more forward: a premium."
  },
  {
    topic: "Economics",
    reading: "Currency Exchange Rates: Understanding Equilibrium Value",
    q: "With covered interest parity, the base currency trades at a forward premium when:",
    options: ["The base currency's rate is higher", "Both rates are exactly equal", "The price currency's rate is higher"],
    answer: 2,
    why: "F/S = (1 + i_price τ)/(1 + i_base τ). A higher price-currency rate makes F > S."
  },
  {
    topic: "Economics",
    reading: "Currency Exchange Rates: Understanding Equilibrium Value",
    q: "To mark a short-EUR forward (EUR sold forward) to market, you price an offsetting trade that:",
    options: ["Sells EUR forward at the bid side", "Buys EUR forward at the offer side", "Buys EUR in the spot market at the midpoint"],
    answer: 1,
    why: "Closing a short means buying EUR for the same settlement date, so use the offer: spot offer + offer points."
  },
  {
    topic: "Economics",
    reading: "Currency Exchange Rates: Understanding Equilibrium Value",
    q: "The mark-to-market gain on a forward is discounted at:",
    options: ["The price currency's rate, for the time left", "The base currency's rate, for the full term", "No rate at all, since it only settles later"],
    answer: 0,
    why: "The gain is in the price currency and is received at settlement, so discount it at that currency's rate for the remaining period."
  },
  {
    topic: "Economics",
    reading: "Currency Exchange Rates: Understanding Equilibrium Value",
    q: "Forward points are usually quoted:",
    options: ["As a percentage of the spot rate", "Scaled to the 4th decimal (÷ 10,000)", "In whole units of the base currency"],
    answer: 1,
    why: "For most pairs, 15 points = 0.0015. (For JPY pairs it's usually ÷ 100.)"
  },
  {
    topic: "Economics",
    reading: "Currency Exchange Rates: Understanding Equilibrium Value",
    q: "Which parity condition is enforced by arbitrage?",
    options: ["Uncovered interest rate parity", "Relative purchasing power parity", "Covered interest rate parity"],
    answer: 2,
    why: "CIP ties spot, forward and the two rates through a riskless trade. UIP and PPP are expectations that often fail in the short run."
  },
  {
    topic: "Economics",
    reading: "Currency Exchange Rates: Understanding Equilibrium Value",
    q: "Uncovered interest rate parity says a currency with a HIGHER interest rate is expected to:",
    options: ["Depreciate by about the rate gap", "Appreciate by about the rate gap", "Stay at today's spot rate on average"],
    answer: 0,
    why: "Expected returns are equalised: the high-yield currency's extra interest is offset by its expected depreciation."
  },
  {
    topic: "Economics",
    reading: "Currency Exchange Rates: Understanding Equilibrium Value",
    q: "Relative PPP is a poor choice for a 90-day exchange rate forecast because it:",
    options: ["Only holds when exchange rates are fixed", "Needs inflation data and works long-run", "Requires a forward rate to be quoted"],
    answer: 1,
    why: "Relative PPP links exchange rate changes to inflation differentials and tends to hold only over long horizons."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "In a text ML project, the curation step is:",
    options: ["Cleansing text into a structured format", "Gathering raw text, e.g. by web spidering", "Choosing and engineering the features"],
    answer: 1,
    why: "Curation = obtaining the data (web spiders, APIs). Cleansing and converting to a DTM is preparation and wrangling."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "Converting cleansed text into a document term matrix happens in the:",
    options: ["Text preparation and wrangling step", "Text curation step, via web spidering", "Model training and evaluation step"],
    answer: 0,
    why: "Preparation and wrangling cleans the text, tokenizes it and builds the structured DTM used for training."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "For both structured and text data, feature selection and engineering happen in the:",
    options: ["Curation step", "Wrangling step", "Exploration"],
    answer: 2,
    why: "Step 4 (data/text exploration) covers exploratory analysis, feature selection and feature engineering for both."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "Which task applies to numeric (structured) data but NOT to raw text?",
    options: ["Removing html tags", "Winsorization", "Lowercasing"],
    answer: 1,
    why: "Winsorization (and scaling) work on numeric values. Tags, lowercasing and punctuation are text tasks."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "In text cleansing, numbers in the text are usually:",
    options: ["Kept as separate tokens in the DTM", "Converted into words such as 'ten'", "Removed or replaced with /number/"],
    answer: 2,
    why: "Digits rarely help sentiment, so they are dropped or annotated as /number/."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "Stemming differs from lemmatization in that stemming:",
    options: ["Uses a dictionary to find the root word", "Cuts words to a base form that may not be a word", "Is used only for numeric, structured data"],
    answer: 1,
    why: "Stemming applies rules ('increased' → 'increas'); lemmatization finds the dictionary root ('increased' → 'increase') and is more costly."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "Stemming and lemmatization mainly help by:",
    options: ["Reducing data sparseness", "Increasing the vocabulary size", "Keeping every word form distinct"],
    answer: 0,
    why: "Merging inflected forms into one token makes the DTM less sparse and the model simpler."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "Tokens like 'not_increas_market' (n-grams) are useful in sentiment analysis because they:",
    options: ["Remove all of the stop words in the text", "Keep negations with their words", "Replace numbers with an /number/ annotation"],
    answer: 1,
    why: "'not' + 'increase' as one token keeps the negative meaning that separate tokens would lose."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "Very high-frequency words such as 'the' and 'and' should usually be removed because they:",
    options: ["Make the model overfit to rare cases", "Carry strong positive or negative sentiment", "Push the model towards underfitting"],
    answer: 2,
    why: "They appear in nearly every text, so they don't help separate classes and blur the decision boundary."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "Very rare words in a corpus should usually be removed because they:",
    options: ["Push the model towards underfitting", "Can make the model overfit", "Are always spelling mistakes"],
    answer: 1,
    why: "A rare word may happen to appear in one class only, so the model learns a spurious rule."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "Collection (term) frequency of a token is:",
    options: ["Its count in all texts ÷ total tokens", "The number of documents that contain it", "Its font size in a word cloud"],
    answer: 0,
    why: "Collection frequency = occurrences of the token across the corpus ÷ total tokens in the corpus."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "To fix class imbalance in training data, you can randomly:",
    options: ["Oversample the majority class", "Undersample the minority class", "Oversample the minority class"],
    answer: 2,
    why: "Either oversample the minority or undersample the majority, so both classes are better represented."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "An AUC of about 50% on both training and cross-validation data means the model is:",
    options: ["Overfitting the training data", "Little better than random guessing", "Performing well and fitting nicely"],
    answer: 1,
    why: "AUC 0.5 = random classifier. AUC near 1 = excellent."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "A much higher AUC on training data than on cross-validation data indicates:",
    options: ["Overfitting", "Underfitting", "Class imbalance"],
    answer: 0,
    why: "The model learned noise in the training set and generalises worse to new data."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "In a grid search, small training error but large cross-validation error suggests:",
    options: ["Heavy regularization and high bias error", "Slight regularization, high variance", "A well-fitted model with low total error"],
    answer: 1,
    why: "Too little regularization leaves the model too complex: high variance (overfitting). Increase regularization."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "In a grid search, LARGE errors on both training and cross-validation data suggest:",
    options: ["Slight regularization and overfitting", "A model with high variance", "Heavy regularization and underfitting"],
    answer: 2,
    why: "Too much regularization oversimplifies the model: high bias error on both datasets."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "The cross-validation set (as opposed to the test set) is used to:",
    options: ["Tune hyperparameters and compare models", "Train the model's coefficients", "Give the final, unbiased performance check"],
    answer: 0,
    why: "Training set fits the model, CV set tunes it, test set gives the final out-of-sample evaluation."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "In a collection frequency analysis, tokens most useful for telling sentiment apart have TF values that are:",
    options: ["The highest", "The lowest", "Intermediate"],
    answer: 2,
    why: "Highest = stop words; lowest = rare or proper nouns. The middle carries the signal."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "Inverse document frequency (IDF) is calculated as:",
    options: ["log(1 ÷ document frequency)", "1 ÷ document frequency", "Collection TF × document frequency"],
    answer: 0,
    why: "IDF = log(1/DF), where DF = documents containing the word ÷ total documents. The log damps extreme values."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "TF–IDF is calculated as:",
    options: ["Collection-level TF × IDF", "Sentence-level TF × IDF", "Document frequency × IDF"],
    answer: 1,
    why: "TF at the sentence (document) level, multiplied by IDF. It's high for words frequent in one document but rare across the corpus."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "A word that appears in almost every document has an IDF that is:",
    options: ["Close to zero", "Very large", "Exactly one"],
    answer: 0,
    why: "DF ≈ 1, so log(1/1) ≈ 0. Common words get little weight in TF–IDF."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "TF–IDF values can be unreliable when the dataset has:",
    options: ["Very many documents", "Only a few documents", "Balanced sentiment classes"],
    answer: 1,
    why: "IDF depends on the number of documents, so with few documents the values (and model performance) are unstable."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "A dataset with no ground truth (no labels) calls for:",
    options: ["Supervised learning with a 60/20/20 split", "Unsupervised learning, with no data split", "Reinforcement learning on the test set"],
    answer: 1,
    why: "With no target variable there is nothing to train or validate against, so the data isn't split."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "For supervised ML, a typical master-dataset split is:",
    options: ["60% training, 20% CV, 20% test", "20% training, 40% CV, 40% test", "100% training, no CV or test set"],
    answer: 0,
    why: "Most data goes to training; the rest is kept for tuning (CV) and the final check (test)."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "When classes are unequal and false positives and false negatives matter equally, the best metric is:",
    options: ["Accuracy", "Precision", "F1 score"],
    answer: 2,
    why: "F1 balances precision and recall and copes with class imbalance. Accuracy suits balanced data."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "If the cost of Type I errors (false positives) is high, focus on:",
    options: ["Recall", "Precision", "Accuracy"],
    answer: 1,
    why: "Precision = TP ÷ (TP + FP): of everything predicted positive, how much really was."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "If the cost of Type II errors (false negatives) is high, focus on:",
    options: ["Recall", "Precision", "Specificity of the test set"],
    answer: 0,
    why: "Recall = TP ÷ (TP + FN): of all actual positives, how many were caught."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "The F1 score is the:",
    options: ["Arithmetic mean of precision and recall", "Ratio of correct predictions to all predictions", "Harmonic mean of precision and recall"],
    answer: 2,
    why: "F1 = 2PR ÷ (P + R). It is pulled toward the lower of the two."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "With a threshold p-value of 0.65, a sentence with target p = 0.64 is predicted as:",
    options: ["Class 1 (positive)", "Class 0 (negative)", "Unclassified, so dropped"],
    answer: 1,
    why: "Only p above the threshold is classed positive. If it's actually positive, that's a false negative."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "Raising the classification threshold p-value, all else equal, tends to:",
    options: ["Raise precision and lower recall", "Raise recall and lower precision", "Leave precision and recall unchanged"],
    answer: 0,
    why: "Fewer positives are predicted, so fewer false positives (higher precision) but more misses (lower recall)."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "The three tasks of ML model training, in order, are:",
    options: ["Tuning, method selection, evaluation", "Method selection, evaluation, tuning", "Evaluation, tuning, method selection"],
    answer: 1,
    why: "Pick the method, evaluate its fit, then tune it."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "Bias and variance errors are mainly used in which model-training task?",
    options: ["Method selection", "Performance evaluation", "Tuning"],
    answer: 2,
    why: "Tuning balances bias and variance (e.g. via grid search). Evaluation uses error analysis, ROC and RMSE."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "Which is NOT a performance evaluation technique?",
    options: ["Error analysis with a confusion matrix", "Comparing bias and variance errors", "ROC curves and RMSE"],
    answer: 1,
    why: "Comparing bias and variance error belongs to tuning, not performance evaluation."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "Random sampling within each class label when splitting data is used to:",
    options: ["Keep class proportions similar in each split", "Remove stop words from every one of the splits", "Make the test set larger than the training set"],
    answer: 0,
    why: "This is stratified random sampling; it keeps imbalanced classes represented consistently across training, CV and test sets."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Under the equity method, the investee's assets and liabilities appear on the investor's balance sheet as:",
    options: ["Each line item, at 100% of its amount", "Each line item at the % owned by it", "One line: 'Investment in associate'"],
    answer: 2,
    why: "The equity method nets everything into a single investment account; no individual assets or liabilities are added."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "A parent with control over a 50%-owned subsidiary consolidates:",
    options: ["50% of each of the assets and liabilities", "100% of every line item, plus NCI", "Only the subsidiary's net income for the year"],
    answer: 1,
    why: "Consolidation adds 100% of every line item; the outside owners' share shows as non-controlling interest in equity."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Under consolidation, non-controlling interest is reported:",
    options: ["Within shareholders' equity", "As a long-term liability", "As a deduction from total assets"],
    answer: 0,
    why: "Under IFRS (and US GAAP), NCI is part of equity, so consolidated equity is larger than the parent's own."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "When the purchase price exceeds the book value of the investee's net assets, the excess is first assigned to:",
    options: ["Goodwill, before anything else is done", "Identifiable assets, up to fair value", "An expense in the year of the purchase"],
    answer: 1,
    why: "First identifiable assets (e.g. licenses, PP&E) are written up to fair value; only what's left is goodwill."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "An excess purchase price assigned to licenses with a finite life is:",
    options: ["Amortized over the licenses' life", "Never amortized, only tested for impairment", "Added to goodwill and kept indefinitely"],
    answer: 0,
    why: "Finite-life intangibles are amortized, reducing income. Goodwill isn't amortized; it's tested for impairment."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "If the whole excess purchase price is assigned to identifiable assets, goodwill is:",
    options: ["Higher under full goodwill", "Lower under partial goodwill", "Zero under both methods"],
    answer: 2,
    why: "With no goodwill, full vs partial goodwill make no difference to assets, NCI or ratios."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Under the FULL goodwill method, the non-controlling interest is measured at:",
    options: ["Its share of the identifiable net assets", "Fair value, including its share of goodwill", "The book value of the subsidiary's equity"],
    answer: 1,
    why: "Full goodwill grosses up goodwill to 100%, so NCI is at fair value. Partial goodwill uses its share of identifiable net assets."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Net income attributable to the parent's shareholders under the equity method vs consolidation is:",
    options: ["Higher under consolidation", "Higher under the equity method", "Usually the same under both"],
    answer: 2,
    why: "The parent's share of the investee's profit is included either way; consolidation also shows the NCI's share, which is then deducted."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Compared with consolidation, the equity method usually shows a net profit margin that is:",
    options: ["Higher, as sales are smaller", "Lower, as costs are higher", "The same, since profit is equal"],
    answer: 0,
    why: "Same parent profit but the investee's sales aren't added, so the margin is higher."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Compared with consolidation, the equity method usually shows leverage (debt/equity) that is:",
    options: ["Higher, since the equity figure is smaller", "Lower, as investee debt is excluded", "The same, as the debt figure is unchanged"],
    answer: 1,
    why: "The investee's debt stays off the balance sheet, so the equity method looks less leveraged (often more than smaller equity offsets)."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Compared with consolidation, return on equity under the equity method is usually:",
    options: ["Lower, since profit is smaller", "The same, since profit is equal", "Higher, as equity excludes NCI"],
    answer: 2,
    why: "Same parent profit ÷ smaller equity (no non-controlling interest) gives a higher ROE."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Total asset turnover under the equity method vs consolidation:",
    options: ["Is always higher under the equity method", "Depends on the investee's own turnover", "Is always the same under both methods"],
    answer: 1,
    why: "Consolidation adds the investee's sales AND assets; whichever ratio is bigger decides the direction."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "The implied fair value of 100% of a company bought in a 50% stake for £320m (no control premium) is:",
    options: ["Twice the price paid", "Equal to the price paid", "Half of the price paid"],
    answer: 0,
    why: "Price ÷ ownership %: the paid price represents half the whole."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Proportionate consolidation (share of each line item, no NCI) is closest to which reporting for joint ventures under IFRS?",
    options: ["It is required for all joint ventures", "Not allowed: use the equity method", "It is required for all associates instead"],
    answer: 1,
    why: "IFRS 11 requires the equity method for joint ventures; proportionate consolidation is generally not permitted."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Owning 50% of the voting shares and having CONTROL leads to:",
    options: ["The equity method, as for any 50% stake", "Fair value through profit or loss", "Consolidation"],
    answer: 2,
    why: "Control, not just the percentage held, decides consolidation. Significant influence without control → equity method."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "An investor owns 18% but has board representation and significant influence. It should use:",
    options: ["Fair value through OCI", "The equity method", "Fair value through profit or loss"],
    answer: 1,
    why: "Significant influence, not the 20% guide, decides. Below 20% with influence → equity method."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Under the equity method, the investor's income from the investee is:",
    options: ["Its % share of the investee's net income", "The cash dividends it receives in the year", "Investee net income minus dividends received"],
    answer: 0,
    why: "Equity income = ownership % × investee net income. Dividends don't count as income here."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Dividends are recognised as INCOME from an investee only when the investment is:",
    options: ["Accounted for by the equity method", "A passive (fair value) investment", "A consolidated subsidiary"],
    answer: 1,
    why: "For passive financial assets, dividends hit income. Under the equity method they reduce the carrying value."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "The year-end carrying value of an equity-method investment equals:",
    options: ["Cost plus all the dividends received to date", "Fair value at the reporting date, always", "Start + share of NI − share of dividends"],
    answer: 2,
    why: "Income increases the investment; dividends (a return of part of it) decrease it."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Two companies with a joint control agreement over a venture account for it using:",
    options: ["Consolidation by both", "Proportionate consolidation", "The equity method"],
    answer: 2,
    why: "A joint venture is accounted for with the equity method under both IFRS and US GAAP."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "On consolidation, the subsidiary's own shareholders' equity is:",
    options: ["Eliminated, except the NCI's share", "Added in full to the parent's equity", "Added at the parent's ownership %"],
    answer: 0,
    why: "The parent's investment is eliminated against the subsidiary's equity; outside owners' share appears as non-controlling interest."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "A consolidated subsidiary's long-term debt appears on the parent's balance sheet at:",
    options: ["The parent's ownership % of it", "100% of the subsidiary's debt", "Zero, as it's the subsidiary's"],
    answer: 1,
    why: "Consolidation adds 100% of every asset and liability, even when the parent owns less than 100%."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Moving from consolidation to the equity method (control → joint control), the parent's net income:",
    options: ["Falls, as revenue is removed", "Is unchanged", "Rises, as NCI is removed"],
    answer: 1,
    why: "Its share of the investee's profit is the same; only the presentation changes."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Moving from consolidation to the equity method, net profit margin, ROA and ROE all tend to:",
    options: ["Rise", "Fall", "Stay the same"],
    answer: 0,
    why: "Same parent net income over smaller revenue, assets and equity."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "A subsidiary's functional currency is set by:",
    options: ["The parent company's reporting currency", "The country in which it is located", "Its primary economic environment"],
    answer: 2,
    why: "E.g. a Peruvian gold miner whose output is priced globally in USD has the US dollar as its functional currency."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "If assets contributed to a new venture have fair value equal to book value, the investors record:",
    options: ["Large goodwill on the investment", "No excess purchase price to amortize", "A gain equal to the fair value"],
    answer: 1,
    why: "No fair-value uplift means no extra depreciation or amortization adjustments under the equity method."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Control of an investee is generally indicated by:",
    options: ["Owning 20%–50% of the voting shares", "Any seat on its board of directors", "The power to direct its activities"],
    answer: 2,
    why: "Control = power over the investee's relevant activities, usually but not always >50% of voting rights."
  },
  {
    topic: "Equity Valuation",
    reading: "Free Cash Flow Valuation",
    q: "A DDM is LEAST appropriate when a company:",
    options: ["Pays dividends that differ a lot from its capacity to pay", "Has paid steady dividends that track its free cash flow", "Is valued by a minority investor with no control"],
    answer: 0,
    why: "When dividends ≠ capacity to pay (FCFE), free cash flow models give a better value than a DDM."
  },
  {
    topic: "Equity Valuation",
    reading: "Free Cash Flow Valuation",
    q: "Why does a controlling investor favour a free cash flow model over a DDM?",
    options: ["Control removes the need for any discount rate", "Control means dividends must equal net income", "Control gives discretion over how free cash flow is used"],
    answer: 2,
    why: "A controlling owner can change the dividend policy, so value rests on the capacity to pay (free cash flow), not current dividends."
  },
  {
    topic: "Equity Valuation",
    reading: "Free Cash Flow Valuation",
    q: "With a stable capital structure, the more direct way to value equity is:",
    options: ["FCFF discounted at the WACC, minus debt", "FCFE discounted at the cost of equity", "Net income discounted at the WACC"],
    answer: 1,
    why: "FCFE values equity directly. FCFF is preferred when leverage is changing or FCFE is negative."
  },
  {
    topic: "Equity Valuation",
    reading: "Free Cash Flow Valuation",
    q: "A loss on the sale of equipment is treated in FCFE by:",
    options: ["Adding it back to net income", "Subtracting it from net income", "Ignoring it, as it is already cash"],
    answer: 0,
    why: "The loss reduced net income without any cash outflow, so it is added back (the cash proceeds are counted in investing)."
  },
  {
    topic: "Equity Valuation",
    reading: "Free Cash Flow Valuation",
    q: "An impairment of intangibles is treated in FCFE by:",
    options: ["Subtracting it as an investment", "Adding it back to net income", "Treating it as a working capital use"],
    answer: 1,
    why: "An impairment is a noncash charge that reduced net income, so it is added back."
  },
  {
    topic: "Equity Valuation",
    reading: "Free Cash Flow Valuation",
    q: "A reversal of a previously recorded restructuring charge is treated in FCFE by:",
    options: ["Adding it back as a noncash charge", "Treating it as new borrowing", "Subtracting it from net income"],
    answer: 2,
    why: "The reversal RAISED net income with no cash inflow, so it is subtracted. Noncash gains are subtracted; noncash losses are added back."
  },
  {
    topic: "Equity Valuation",
    reading: "Free Cash Flow Valuation",
    q: "Proceeds from selling fixed assets affect FCFE by:",
    options: ["Reducing it, like capital spending", "Increasing it, as negative FCInv", "Leaving it unchanged as noncash"],
    answer: 1,
    why: "FCInv = capex − proceeds from asset sales, so a net sale is a cash inflow that raises FCFE."
  },
  {
    topic: "Equity Valuation",
    reading: "Free Cash Flow Valuation",
    q: "A repayment of long-term debt affects FCFE by:",
    options: ["Reducing it, as negative net borrowing", "Increasing it, as a financing inflow", "Leaving it unchanged, as FCFF only"],
    answer: 0,
    why: "FCFE = FCFF − Int(1 − t) + net borrowing; a repayment is negative net borrowing."
  },
  {
    topic: "Equity Valuation",
    reading: "Free Cash Flow Valuation",
    q: "Common stock dividends paid are, in FCFE terms:",
    options: ["A deduction in arriving at FCFE", "A use of FCFE, not a deduction", "An addition, as cash to shareholders"],
    answer: 1,
    why: "FCFE is the cash AVAILABLE to shareholders; dividends are how some of it is used. That's why the net change in cash is not FCFE."
  },
  {
    topic: "Equity Valuation",
    reading: "Free Cash Flow Valuation",
    q: "Net income is a poor proxy for FCFE when a company has:",
    options: ["Depreciation roughly equal to capex", "No net borrowing in the year", "Large net borrowing in the year"],
    answer: 2,
    why: "Net borrowing adds to FCFE but not to net income (e.g. $2,000m of net borrowing pushed FCFE well above NI)."
  },
  {
    topic: "Equity Valuation",
    reading: "Free Cash Flow Valuation",
    q: "The sales-based formula FCFE = NI − (1 − DR)(FCInv − Dep) − (1 − DR)(WCInv) assumes:",
    options: ["Depreciation is the only noncash charge", "There is no target debt ratio at all", "Working capital never changes"],
    answer: 0,
    why: "Companies with large other noncash charges (e.g. restructuring) need each FCFE component forecast separately."
  },
  {
    topic: "Equity Valuation",
    reading: "Free Cash Flow Valuation",
    q: "In the formula FCFE = NI − (1 − DR)(FCInv − Dep) − (1 − DR)(WCInv), DR is:",
    options: ["The dividend payout ratio", "The target debt ratio", "The depreciation rate"],
    answer: 1,
    why: "DR = the share of new investment financed with debt, so equity funds only (1 − DR) of net investment."
  },
  {
    topic: "Equity Valuation",
    reading: "Free Cash Flow Valuation",
    q: "In a two-stage model, the terminal value at the end of year 4 is discounted back:",
    options: ["4 periods, as it's a year-4 value", "5 periods, using the year-5 cash flow", "Not at all, as it's a present value"],
    answer: 0,
    why: "TV₄ = FCFE₅ / (r − g) is already a value at the end of year 4, so it's discounted 4 periods."
  },
  {
    topic: "Equity Valuation",
    reading: "Free Cash Flow Valuation",
    q: "FCFF must be discounted at:",
    options: ["The cost of equity", "The before-tax cost of debt", "The WACC"],
    answer: 2,
    why: "FCFF goes to all capital providers, so it is discounted at the WACC. Discounting it at the cost of equity mixes the cash flow and the rate."
  },
  {
    topic: "Equity Valuation",
    reading: "Free Cash Flow Valuation",
    q: "Interest expense is added back to get FCFF from net income at:",
    options: ["Its full pre-tax amount", "Its amount × (1 − tax rate)", "Zero, as interest is noncash"],
    answer: 1,
    why: "FCFF = NI + NCC + Int(1 − t) − FCInv − WCInv. Only the after-tax cost of interest is added back."
  },
  {
    topic: "Equity Valuation",
    reading: "Free Cash Flow Valuation",
    q: "To get equity value from an FCFF model, you:",
    options: ["Subtract the market value of debt from firm value", "Divide firm value by the debt ratio", "Add the value of debt to firm value"],
    answer: 0,
    why: "Firm value − debt = equity. With a target debt ratio, debt = ratio × firm value."
  },
  {
    topic: "Equity Valuation",
    reading: "Market-Based Valuation: Price and Enterprise Value Multiples",
    q: "When some companies have negative EPS, the better multiple for ranking is:",
    options: ["P/E, ranked from lowest to highest", "E/P, with earnings in the numerator", "P/B, since book value is never negative"],
    answer: 1,
    why: "A negative P/E is meaningless; E/P puts negative EPS in the numerator, so the ranking still works (higher E/P = cheaper)."
  },
  {
    topic: "Equity Valuation",
    reading: "Market-Based Valuation: Price and Enterprise Value Multiples",
    q: "Underlying (persistent) EPS for a trailing P/E starts from:",
    options: ["Diluted EPS, removing nonrecurring items", "Basic EPS, removing all depreciation", "Diluted EPS, removing recurring costs"],
    answer: 0,
    why: "Diluted EPS is the standard base; take out one-off gains and add back one-off costs."
  },
  {
    topic: "Equity Valuation",
    reading: "Market-Based Valuation: Price and Enterprise Value Multiples",
    q: "A nonrecurring gain from a lawsuit is treated in underlying EPS by:",
    options: ["Adding it to reported EPS", "Leaving it in, since it was received", "Subtracting it from reported EPS"],
    answer: 2,
    why: "One-off gains inflate reported EPS, so they are removed to get underlying earnings."
  },
  {
    topic: "Equity Valuation",
    reading: "Market-Based Valuation: Price and Enterprise Value Multiples",
    q: "A recurring increase in depreciation from a factory integration should be:",
    options: ["Added back, as it is noncash", "Left in underlying EPS", "Removed, as it relates to a merger"],
    answer: 1,
    why: "Recurring costs are part of persistent earnings, so no adjustment is made."
  },
  {
    topic: "Equity Valuation",
    reading: "Market-Based Valuation: Price and Enterprise Value Multiples",
    q: "Forward P/E is based on:",
    options: ["Expected EPS for the next four quarters", "Diluted EPS for the last four quarters", "Average EPS over the business cycle"],
    answer: 0,
    why: "Forward (leading) P/E = price / next year's forecast EPS; trailing P/E uses the last four quarters."
  },
  {
    topic: "Equity Valuation",
    reading: "Market-Based Valuation: Price and Enterprise Value Multiples",
    q: "On the PEG ratio, the more attractively priced stock has:",
    options: ["The highest expected growth rate", "The highest forward P/E", "The lowest PEG ratio"],
    answer: 2,
    why: "PEG = P/E ÷ growth (in % points). A lower PEG means paying less per unit of growth."
  },
  {
    topic: "Equity Valuation",
    reading: "Market-Based Valuation: Price and Enterprise Value Multiples",
    q: "A key drawback of the PEG ratio is that it:",
    options: ["Can't be computed with forward P/E", "Assumes a linear P/E–growth link", "Always ranks high-growth stocks cheapest"],
    answer: 1,
    why: "PEG treats P/E and growth as linearly related and ignores differences in risk and the length of the growth period."
  },
  {
    topic: "Equity Valuation",
    reading: "Market-Based Valuation: Price and Enterprise Value Multiples",
    q: "An advantage of P/S over P/E is that sales are:",
    options: ["Less distorted by expense accounting", "Unaffected by revenue recognition", "Always positive and adjusted for leverage"],
    answer: 0,
    why: "Sales are the top line, so depreciation and other expense choices don't distort them."
  },
  {
    topic: "Equity Valuation",
    reading: "Market-Based Valuation: Price and Enterprise Value Multiples",
    q: "A weakness of P/S is that sales can be distorted by:",
    options: ["Depreciation policy choices", "Aggressive revenue recognition", "Changes in the dividend payout"],
    answer: 1,
    why: "Practices that speed up revenue recognition inflate sales; P/S also ignores cost structure."
  },
  {
    topic: "Equity Valuation",
    reading: "Market-Based Valuation: Price and Enterprise Value Multiples",
    q: "Under the Fed model, equities are undervalued when:",
    options: ["The 10-year Treasury yield exceeds the earnings yield", "The P/E is above its long-run average", "The earnings yield exceeds the 10-year Treasury yield"],
    answer: 2,
    why: "Fed model: compare forward E/P of the S&P 500 with the 10-year T-bond yield."
  },
  {
    topic: "Equity Valuation",
    reading: "Market-Based Valuation: Price and Enterprise Value Multiples",
    q: "The Yardeni model adds which variable missing from the Fed model?",
    options: ["Consensus five-year earnings growth forecast", "The dividend payout ratio of the index", "The market's historical average P/E"],
    answer: 0,
    why: "Yardeni uses the A-rated corporate bond yield and the consensus long-term earnings growth forecast."
  },
  {
    topic: "Equity Valuation",
    reading: "Market-Based Valuation: Price and Enterprise Value Multiples",
    q: "Enterprise value is calculated as:",
    options: ["Equity value plus cash and short-term investments", "Debt + common + preferred − cash and investments", "Market value of common equity minus debt"],
    answer: 1,
    why: "EV is the value of the whole firm net of cash; preferred equity is included, cash and short-term investments are deducted."
  },
  {
    topic: "Equity Valuation",
    reading: "Market-Based Valuation: Price and Enterprise Value Multiples",
    q: "Short-term investments are treated in EV by:",
    options: ["Adding them, like cash", "Ignoring them, as they are not cash", "Deducting them, like cash"],
    answer: 2,
    why: "Short-term investments are cash equivalents, so they are subtracted along with cash."
  },
  {
    topic: "Equity Valuation",
    reading: "Market-Based Valuation: Price and Enterprise Value Multiples",
    q: "EV/EBITDA is preferred over P/E for comparing companies with:",
    options: ["Different financial leverage", "The same capital structure", "Identical tax rates and depreciation"],
    answer: 0,
    why: "EBITDA is before interest, so EV/EBITDA compares firms regardless of how they are financed."
  },
  {
    topic: "Equity Valuation",
    reading: "Market-Based Valuation: Price and Enterprise Value Multiples",
    q: "Relative strength indicators compare a stock's performance with:",
    options: ["Its analysts' consensus forecast", "A group of stocks or its own past performance", "The yield on government bonds"],
    answer: 1,
    why: "Relative strength is a price momentum indicator."
  },
  {
    topic: "Equity Valuation",
    reading: "Market-Based Valuation: Price and Enterprise Value Multiples",
    q: "Standardized unexpected earnings (SUE) scales unexpected earnings by:",
    options: ["The σ of past unexpected earnings", "The σ of analysts' EPS forecasts", "The current share price"],
    answer: 0,
    why: "Scaling by the dispersion of analysts' forecasts gives the scaled earnings surprise, a different indicator."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "In the binomial model, the risk-neutral probability of an up move is:",
    options: ["(U − D) / (1 + r − D)", "(1 + r − D) / (U − D)", "(U − 1 − r) / (U − D)"],
    answer: 1,
    why: "π = (1 + r − D)/(U − D). The third option is the down probability, 1 − π."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "The no-arbitrage and expectations approaches to the binomial model give:",
    options: ["Identical option values", "Values that differ by the risk premium", "Values that depend on investor views"],
    answer: 0,
    why: "The expectations approach is a variation of the no-arbitrage approach; both use risk-neutral probabilities."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "Which valuation approach depends on the investor's own expectations of the stock's future price?",
    options: ["The no-arbitrage approach", "The expectations approach", "The discounted cash flow approach"],
    answer: 2,
    why: "DCF uses expected cash flows and a risk-adjusted rate; the binomial approaches use risk-neutral probabilities."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "In the binomial model, the actual (real-world) probability of an up move:",
    options: ["Determines the discount rate used", "Is not needed to value the option", "Must equal the risk-neutral probability"],
    answer: 1,
    why: "Option value comes from the no-arbitrage hedge, so the real-world probability never enters."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "A two-period binomial lattice can be viewed as:",
    options: ["Two separate one-period lattices", "Four independent one-period lattices", "Three one-period binomial lattices"],
    answer: 2,
    why: "One lattice at time 0 and one at each of the two year-1 nodes."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "In a two-period lattice with constant U and D, the up-down and down-up paths:",
    options: ["End at the same stock price", "Give different stock prices", "Have different probabilities each"],
    answer: 0,
    why: "S+− = S × U × D = S−+; the middle node is reached two ways, so its probability is 2π(1 − π)."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "The probability of reaching the middle node of a two-period lattice is:",
    options: ["π(1 − π)", "2π(1 − π)", "π² + (1 − π)²"],
    answer: 1,
    why: "Two paths (up-down and down-up) each have probability π(1 − π)."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "In the no-arbitrage approach, the hedge ratio for a call is:",
    options: ["(c+ − c−) / (S+ − S−)", "(S+ − S−) / (c+ − c−)", "c / S, the call price over the stock price"],
    answer: 0,
    why: "h = (c+ − c−)/(S+ − S−): shares of stock per call that make the portfolio riskless."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "The hedge ratio for a put is:",
    options: ["Positive, between 0 and 1", "Negative, between −1 and 0", "Always exactly −1"],
    answer: 1,
    why: "Put payoffs fall as the stock rises, so (p+ − p−)/(S+ − S−) is negative."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "A call is replicated by:",
    options: ["Short stock and lending", "Buying bonds only", "Long stock and borrowing"],
    answer: 2,
    why: "A call behaves like a levered long stock position: buy h shares, partly financed by borrowing."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "If a call trades ABOVE its binomial value, the arbitrage is to:",
    options: ["Sell the call, buy h shares, borrow", "Buy the call, sell h shares, lend", "Buy the call, buy h shares, borrow"],
    answer: 0,
    why: "Sell the overpriced call and buy the cheaper replicating portfolio (long stock financed by borrowing)."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "If a call trades BELOW its binomial value, the arbitrage is to:",
    options: ["Sell the call, buy h shares, borrow", "Buy the call, short h shares, lend", "Buy the call, buy h shares, lend"],
    answer: 1,
    why: "Buy the cheap call and sell the replicating portfolio: short the shares and lend the proceeds."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "At each node, an American put is worth:",
    options: ["Only its exercise value", "Only its discounted hold value", "The higher of hold and exercise values"],
    answer: 2,
    why: "Early exercise is checked at every node: max(intrinsic value, value of holding)."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "Early exercise of an American put is most likely worthwhile when:",
    options: ["The put is deep in the money", "The stock pays a large dividend", "Interest rates are close to zero"],
    answer: 0,
    why: "Exercising a deep in-the-money put early earns interest on the strike sooner; dividends make early exercise LESS attractive for puts."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "Without dividends, an American call on a stock is worth:",
    options: ["More than the European call", "The same as the European call", "Less than the European call"],
    answer: 1,
    why: "Early exercise of a call on a non-dividend-paying stock is never optimal, so there's no early exercise premium."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "The early exercise premium of an American put equals:",
    options: ["American put value − European put value", "Intrinsic value − European put value", "Strike − American put value"],
    answer: 0,
    why: "E.g. a two-period put worth $13.48 American vs $12.72 European has a $0.76 premium."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "The BSM model can be viewed as a continuous-time version of:",
    options: ["The binomial option pricing model", "The constant-growth dividend discount model", "Put–call–forward parity only"],
    answer: 0,
    why: "BSM replicates the option with continuously rebalanced positions in the stock and a zero-coupon bond."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "A long call is replicated in BSM by:",
    options: ["Short N(d1) shares, buy N(d2) bonds", "Buy N(d1) shares, short N(d2) bonds", "Buy N(d2) shares, short N(d1) bonds"],
    answer: 1,
    why: "c = S·N(d1) − Xe^(−rT)·N(d2): a leveraged long stock position."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "A long put is replicated in BSM by:",
    options: ["Buy N(−d1) shares, short N(−d2) bonds", "Buy N(d1) shares, short N(d2) bonds", "Short N(−d1) shares, buy N(−d2) bonds"],
    answer: 2,
    why: "p = Xe^(−rT)·N(−d2) − S·N(−d1): short stock, invest in bonds."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "In BSM, N(d2) is the risk-neutral probability that:",
    options: ["A call expires in the money", "A put expires in the money", "The stock price will fall"],
    answer: 0,
    why: "N(d2) = Prob(S_T > X). For a put, N(−d2) = Prob(S_T < X), the chance it finishes in the money."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "N(−d2) represents the risk-neutral probability that a put expires:",
    options: ["Out of the money", "In the money", "Exactly at the money"],
    answer: 1,
    why: "So 1 − N(−d2) = N(d2) is the probability the put expires out of the money."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "The delta of a call option in BSM (no dividends) is:",
    options: ["N(d2)", "N(d1) − 1", "N(d1)"],
    answer: 2,
    why: "Call delta = N(d1), between 0 and 1. Put delta = N(d1) − 1, between −1 and 0."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "The delta of a put option in BSM (no dividends) is:",
    options: ["N(d1) − 1", "N(−d2)", "1 − N(d2)"],
    answer: 0,
    why: "Put delta = N(d1) − 1 = −N(−d1), always negative."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "To delta-hedge a WRITTEN put, the writer:",
    options: ["Buys shares equal to the put delta", "Short sells |delta| × shares", "Buys more puts on the same stock"],
    answer: 1,
    why: "A short put has positive delta, so it is offset by shorting stock."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "To delta-hedge a WRITTEN call, the writer:",
    options: ["Buys N(d1) × number of shares", "Short sells N(d1) shares", "Short sells N(d2) zero-coupon bonds"],
    answer: 0,
    why: "A short call has negative delta, so it is offset by buying stock."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "A delta-neutral portfolio must be rebalanced because:",
    options: ["The option's strike price resets over time", "Delta changes as S and time change", "Interest rates are fixed in BSM"],
    answer: 1,
    why: "Delta changes with the stock price (that's gamma) and with time, so the hedge only holds for small moves."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "Rho measures an option's sensitivity to:",
    options: ["Volatility", "Time to expiration", "The risk-free rate"],
    answer: 2,
    why: "Higher r → call value up, put value down."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "A higher risk-free rate makes a put option:",
    options: ["Less valuable", "More valuable", "Unchanged in value"],
    answer: 0,
    why: "The put's replication invests the short-sale proceeds in bonds; a higher r lowers the PV of the strike received."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "Vega measures an option's sensitivity to volatility. Higher volatility:",
    options: ["Raises calls, lowers puts", "Raises both calls and puts", "Lowers both calls and puts"],
    answer: 1,
    why: "Options have limited downside, so more volatility means more upside for both calls and puts."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "Which BSM input is NOT directly observable?",
    options: ["The risk-free interest rate", "The exercise price", "Volatility of the underlying"],
    answer: 2,
    why: "Volatility must be estimated, either historically or implied from option prices."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "Theta measures:",
    options: ["The change in option value as time passes", "The change in delta for a change in S", "The change in value for a change in r"],
    answer: 0,
    why: "Theta is time decay. More time to expiration generally means higher call AND put values."
  },
  {
    topic: "Derivatives",
    reading: "Valuation of Contingent Claims",
    q: "Gamma measures:",
    options: ["The change in option value per unit of time", "The change in delta for a small change in S", "The change in value for a change in σ"],
    answer: 1,
    why: "Gamma is highest for at-the-money options close to expiration; it shows how quickly a delta hedge drifts."
  },
  {
    topic: "Fixed Income",
    reading: "Valuation and Analysis of Bonds with Embedded Options",
    q: "An embedded option that can be exercised only on a set of specified dates is:",
    options: ["Bermudan style", "American style", "European style"],
    answer: 0,
    why: "European = one date; American = any time after the first call date; Bermudan = several set dates."
  },
  {
    topic: "Fixed Income",
    reading: "Valuation and Analysis of Bonds with Embedded Options",
    q: "An American-style call can be exercised:",
    options: ["Only on the single expiration date", "Any time after the first call date", "Only on a few predetermined dates"],
    answer: 1,
    why: "The first option describes European style; the third describes Bermudan style."
  },
  {
    topic: "Fixed Income",
    reading: "Valuation and Analysis of Bonds with Embedded Options",
    q: "Value of a callable bond equals:",
    options: ["Straight bond + value of call", "Value of call − straight bond", "Straight bond − value of call"],
    answer: 2,
    why: "The investor is short the call (the issuer owns it)."
  },
  {
    topic: "Fixed Income",
    reading: "Valuation and Analysis of Bonds with Embedded Options",
    q: "Value of a putable bond equals:",
    options: ["Straight bond + value of put", "Straight bond − value of put", "Value of put − straight bond"],
    answer: 0,
    why: "The investor owns the put, so it adds to value."
  },
  {
    topic: "Fixed Income",
    reading: "Valuation and Analysis of Bonds with Embedded Options",
    q: "Which bond best protects an investor against rising interest rates?",
    options: ["A callable bond", "A putable bond", "An option-free bond"],
    answer: 1,
    why: "The holder can sell it back at par and reinvest at the higher rates."
  },
  {
    topic: "Fixed Income",
    reading: "Valuation and Analysis of Bonds with Embedded Options",
    q: "In a binomial tree, at a CALL date the node value is:",
    options: ["max(computed value, call price)", "The computed value only", "min(computed value, call price)"],
    answer: 2,
    why: "The issuer calls when the bond is worth more than the call price, capping value."
  },
  {
    topic: "Fixed Income",
    reading: "Valuation and Analysis of Bonds with Embedded Options",
    q: "In a binomial tree, at a PUT date the node value is:",
    options: ["max(computed value, put price)", "min(computed value, put price)", "The put price at every node"],
    answer: 0,
    why: "Holders put when the bond is worth less than the put price, so value never goes below it."
  },
  {
    topic: "Fixed Income",
    reading: "Valuation and Analysis of Bonds with Embedded Options",
    q: "Higher interest rate volatility makes a callable bond's value:",
    options: ["Rise", "Fall", "Stay unchanged"],
    answer: 1,
    why: "The embedded call is worth more, and the investor is short it."
  },
  {
    topic: "Fixed Income",
    reading: "Valuation and Analysis of Bonds with Embedded Options",
    q: "Higher interest rate volatility makes a putable bond's value:",
    options: ["Rise", "Fall", "Stay unchanged"],
    answer: 0,
    why: "The embedded put is worth more, and the investor owns it."
  },
  {
    topic: "Fixed Income",
    reading: "Valuation and Analysis of Bonds with Embedded Options",
    q: "Higher interest rate volatility makes an option-free bond's value:",
    options: ["Rise, as the option-free bond gains", "Fall, as the call is worth more", "Stay unchanged"],
    answer: 2,
    why: "A tree calibrated to the same par curve prices an option-free bond the same at any volatility."
  },
  {
    topic: "Fixed Income",
    reading: "Valuation and Analysis of Bonds with Embedded Options",
    q: "As the yield curve flattens from upward sloping, an embedded call option's value:",
    options: ["Increases", "Decreases", "Is unaffected"],
    answer: 0,
    why: "Lower forward rates at more nodes mean more chances to call."
  },
  {
    topic: "Fixed Income",
    reading: "Valuation and Analysis of Bonds with Embedded Options",
    q: "An embedded put option is worth more when the yield curve is:",
    options: ["Flat or inverted", "Upward sloping", "Humped in the middle"],
    answer: 1,
    why: "Higher forward rates mean more nodes where the bond falls below par and is put."
  },
  {
    topic: "Fixed Income",
    reading: "Valuation and Analysis of Bonds with Embedded Options",
    q: "As interest rates fall, a putable bond's effective duration:",
    options: ["Falls as the put gets more valuable", "Stays the same, as the put caps it", "Rises toward a straight bond's"],
    answer: 2,
    why: "The put is less likely to be used, so the bond behaves like an option-free bond."
  },
  {
    topic: "Fixed Income",
    reading: "Valuation and Analysis of Bonds with Embedded Options",
    q: "Which bond can show NEGATIVE effective convexity?",
    options: ["A callable bond when rates are low", "A putable bond when rates are high", "An option-free bond at any rate"],
    answer: 0,
    why: "Price gains are capped near the call price. Putable bonds always have positive convexity."
  },
  {
    topic: "Fixed Income",
    reading: "Valuation and Analysis of Bonds with Embedded Options",
    q: "Which bond has more upside when rates fall?",
    options: ["A callable bond", "A putable bond", "Both have equal upside"],
    answer: 1,
    why: "The call caps a callable bond's price gains; the putable bond's upside is not capped."
  },
  {
    topic: "Fixed Income",
    reading: "Valuation and Analysis of Bonds with Embedded Options",
    q: "Conversion price of a convertible bond equals:",
    options: ["Par value ÷ conversion ratio", "Stock price × conversion ratio", "Straight value ÷ conversion ratio"],
    answer: 0,
    why: "Stock price × conversion ratio is the conversion value, not the conversion price."
  },
  {
    topic: "Fixed Income",
    reading: "Valuation and Analysis of Bonds with Embedded Options",
    q: "Conversion value of a convertible bond equals:",
    options: ["Par value ÷ conversion ratio", "Conversion ratio × stock price", "Straight value + call option"],
    answer: 1,
    why: "E.g. 31 shares × $37.50 = $1,162.50."
  },
  {
    topic: "Fixed Income",
    reading: "Valuation and Analysis of Bonds with Embedded Options",
    q: "The minimum value of a convertible bond is:",
    options: ["Its par value, repaid at maturity", "Its conversion price times the conversion ratio", "The higher of conversion value and straight value"],
    answer: 2,
    why: "A convertible is worth at least what it's worth as a bond or as shares, whichever is higher."
  },
  {
    topic: "Fixed Income",
    reading: "Valuation and Analysis of Bonds with Embedded Options",
    q: "When conversion value is well above straight value, a convertible bond behaves mostly like:",
    options: ["A straight bond", "The underlying stock", "A money market fund"],
    answer: 1,
    why: "It moves with the stock, but by less on the way down because the straight value acts as a floor."
  },
  {
    topic: "Fixed Income",
    reading: "Credit Analysis Models",
    q: "Expected exposure to default loss is measured:",
    options: ["After deducting expected recovery", "Before factoring in any recovery", "Net of the probability of default"],
    answer: 1,
    why: "Exposure = what's owed at the time of default (e.g. par + coupon), before recovery."
  },
  {
    topic: "Fixed Income",
    reading: "Credit Analysis Models",
    q: "Loss given default (LGD) equals:",
    options: ["Exposure × (1 − recovery rate)", "Exposure × probability of default", "Exposure − probability of survival"],
    answer: 0,
    why: "Two bonds with the same exposure: the one with the lower recovery rate has the higher LGD."
  },
  {
    topic: "Fixed Income",
    reading: "Credit Analysis Models",
    q: "Expected loss equals:",
    options: ["LGD × probability of survival", "Exposure × recovery rate", "LGD × probability of default"],
    answer: 2,
    why: "Expected loss = PD × LGD."
  },
  {
    topic: "Fixed Income",
    reading: "Credit Analysis Models",
    q: "A bond's credit valuation adjustment (CVA) is:",
    options: ["The sum of undiscounted expected losses", "The sum of the PVs of expected losses", "The cumulative probability of default"],
    answer: 1,
    why: "CVA = Σ PV(expected loss); value of a risky bond = value if risk-free − CVA."
  },
  {
    topic: "Fixed Income",
    reading: "Credit Analysis Models",
    q: "The value of a risky bond equals:",
    options: ["Risk-free value − CVA", "Risk-free value + CVA", "CVA × probability of survival"],
    answer: 0,
    why: "CVA is the discount for credit risk."
  },
  {
    topic: "Fixed Income",
    reading: "Credit Analysis Models",
    q: "With conditional default probabilities, the probability of default in year 2 is:",
    options: ["The hazard rate alone", "Hazard rate × probability of default in year 1", "Hazard rate × probability of survival to year 1"],
    answer: 2,
    why: "E.g. 2% × 98% = 1.96%: you can only default in year 2 if you survived year 1."
  },
  {
    topic: "Fixed Income",
    reading: "Credit Analysis Models",
    q: "Risk-neutral default probabilities are typically:",
    options: ["Lower than actual default rates", "Higher than actual default rates", "Equal to actual default rates"],
    answer: 1,
    why: "They're implied from prices, so they include a risk premium for default timing uncertainty, plus liquidity and tax effects."
  },
  {
    topic: "Fixed Income",
    reading: "Credit Analysis Models",
    q: "The default risk premium for uncertainty about the timing of default is included in:",
    options: ["Risk-neutral default probabilities", "Actual historical default rates", "Recovery rate estimates"],
    answer: 0,
    why: "Actual (historical) default rates don't include any premium."
  },
  {
    topic: "Fixed Income",
    reading: "Credit Analysis Models",
    q: "Besides credit risk, the observed spread over a risk-free bond also reflects:",
    options: ["Only the bond's coupon rate level", "The bond's duration and convexity", "Liquidity and tax considerations"],
    answer: 2,
    why: "So risk-neutral PDs implied from spreads overstate pure default risk."
  },
  {
    topic: "Fixed Income",
    reading: "Credit Analysis Models",
    q: "A risk-neutral default probability is found by:",
    options: ["Taking the average historical default rate of similar bonds", "Setting price = PV of risk-neutral expected payoff", "Dividing the credit spread by the bond's coupon rate"],
    answer: 1,
    why: "Discount the probability-weighted payoffs at the risk-free rate and solve for P*."
  },
  {
    topic: "Fixed Income",
    reading: "Credit Analysis Models",
    q: "The expected percentage price change from a credit rating migration is approximately:",
    options: ["−ModDur × change in credit spread", "−ModDur × new credit spread", "−Migration probability × ModDur"],
    answer: 0,
    why: "Only the CHANGE in spread matters, e.g. 1.00% → 1.75% = 0.75%."
  },
  {
    topic: "Fixed Income",
    reading: "Credit Analysis Models",
    q: "In a transition matrix, the AA → A entry represents:",
    options: ["The price change on a downgrade", "The spread on A-rated bonds", "The probability of a downgrade"],
    answer: 2,
    why: "The bottom row gives spreads; matrix entries are migration probabilities."
  },
  {
    topic: "Fixed Income",
    reading: "Credit Analysis Models",
    q: "A credit model that uses option pricing and treats equity as a call on the firm's assets is a:",
    options: ["Reduced-form model", "Structural model", "Term structure model"],
    answer: 1,
    why: "Structural models need a traded market for the issuer's equity and information about the firm's assets."
  },
  {
    topic: "Fixed Income",
    reading: "Credit Analysis Models",
    q: "A credit model that estimates default intensity from financial ratios and macro variables is a:",
    options: ["Reduced-form model", "Structural model", "Binomial pricing model"],
    answer: 0,
    why: "Reduced-form models use observable company and economic variables; they don't need asset values."
  },
  {
    topic: "Fixed Income",
    reading: "Credit Analysis Models",
    q: "A key advantage of reduced-form models over structural models is that they:",
    options: ["Explain WHY a firm defaults", "Use the firm's unobservable asset value", "Need only observable variables"],
    answer: 2,
    why: "Structural models explain why default happens but depend on unobservable asset values."
  },
  {
    topic: "Fixed Income",
    reading: "Credit Analysis Models",
    q: "For a zero-coupon bond in a CVA table, exposure at each earlier date is:",
    options: ["Always the full face value", "The bond's value at that date", "Face value × (1 − recovery rate)"],
    answer: 1,
    why: "E.g. 100 / 1.03² = 94.26 one year in, for a three-year zero at a flat 3%."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "Removing HTML tags, punctuation, numbers and white space happens in:",
    options: ["Text preparation (cleansing)", "Text wrangling (preprocessing)", "Feature engineering only"],
    answer: 0,
    why: "Cleansing comes first; normalization steps like lowercasing and stop-word removal come after, in wrangling."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "Lowercasing and removing stop words happen in:",
    options: ["Text preparation (cleansing)", "Text wrangling (preprocessing)", "Model training and tuning"],
    answer: 1,
    why: "These are normalization steps, applied after the raw text has been cleansed."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "If ALL-CAPS words and spelling mistakes are useful signals, preprocessing should:",
    options: ["Lowercase and correct them like any other words", "Remove them as noise in the cleansing step", "Keep them with an annotation such as /AllCaps/"],
    answer: 2,
    why: "Same idea as replacing numbers with /number/: keep the information the model needs."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "The Porter stemmer would most likely reduce “needing” to:",
    options: ["need", "needing", "needi"],
    answer: 0,
    why: "Stemming removes suffixes; repeated stems such as “need” appear only once in the BOW."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "A bag of words (BOW) contains:",
    options: ["Every token, kept in its original order", "The distinct tokens, without word order", "Only the n-grams of two or more words"],
    answer: 1,
    why: "BOW loses sequence; n-grams are used to keep some word order."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "Tokens such as “your_help” and “loan_because” are examples of:",
    options: ["Stop words removed in wrangling", "Lemmas from lemmatization", "Bigrams (n-grams)"],
    answer: 2,
    why: "N-grams join adjacent words so phrases with meaning are kept together."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "Splitting word clouds by class (default vs non-default) helps to:",
    options: ["Show which words separate the two classes", "Reduce the number of training examples", "Replace the need for a test set"],
    answer: 0,
    why: "E.g. pleading words in defaulters vs future-oriented words in non-defaulters."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "A loan predicted NOT to default that actually defaults is a:",
    options: ["Type I error (false positive)", "Type II error (false negative)", "True negative"],
    answer: 1,
    why: "Class 1 = default. Predicted 0, actual 1 → false negative."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "A loan predicted to default that actually does NOT default is a:",
    options: ["Type II error (false negative)", "True positive", "Type I error (false positive)"],
    answer: 2,
    why: "Predicted 1, actual 0 → false positive."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "With a Class 1 threshold of 0.60, an applicant with p = 0.41 is classified as:",
    options: ["Class 0", "Class 1", "Unclassified"],
    answer: 0,
    why: "p must reach the threshold to be Class 1."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "Precision is calculated as:",
    options: ["TP / (TP + FP)", "TP / (TP + FN)", "(TP + TN) / all"],
    answer: 0,
    why: "Of everything predicted positive, how much was right."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "Recall (sensitivity) is calculated as:",
    options: ["TP / (TP + FP)", "TP / (TP + FN)", "TN / (TN + FP)"],
    answer: 1,
    why: "Of all actual positives, how many the model caught."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "Accuracy can be misleading when:",
    options: ["Precision and recall are exactly equal", "The test set is far larger than usual", "One class is much smaller than the other"],
    answer: 2,
    why: "Many true negatives in the big class inflate accuracy; use F1 instead."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "The F1 score is preferred over accuracy when:",
    options: ["Classes are balanced and errors cost the same", "Classes are unequal in size", "Only true negatives matter to the lender"],
    answer: 1,
    why: "F1 = 2PR / (P + R) balances precision and recall."
  },
  {
    topic: "Quantitative Methods",
    reading: "Big Data Projects",
    q: "Logistic regression in a text classifier outputs:",
    options: ["A probability between 0 and 1 for Class 1", "A count of each token in the bag of words", "The document term matrix for the corpus"],
    answer: 0,
    why: "The probability is compared with the threshold to assign a class."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Under the equity method, goodwill on the investment is:",
    options: ["Shown as a separate intangible asset on the balance sheet", "Included in the investment's carrying amount", "Written off immediately to income"],
    answer: 1,
    why: "Goodwill is part of the single-line investment account, not shown separately."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Goodwill on an equity-method investment is calculated as:",
    options: ["Price − share of FAIR value of net assets", "Price − share of BOOK value of net assets", "Share of fair value − share of book value"],
    answer: 0,
    why: "Price − share of book value lumps the fair-value uplift and goodwill together."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Under the equity method, the investor's share of a fair-value uplift on the investee's PLANT is:",
    options: ["Ignored after acquisition, as it is a one-off", "Added to goodwill and tested for impairment", "Depreciated, reducing equity income"],
    answer: 2,
    why: "The excess over book value on depreciable assets is amortized over their useful lives."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Under the equity method, the investor's share of a fair-value uplift on the investee's LAND is:",
    options: ["Not depreciated", "Depreciated over 20 years", "Expensed in the first year"],
    answer: 0,
    why: "Land isn't depreciated, so the uplift stays in the investment account until the land is sold or impaired."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "An equity-method investment is tested for impairment:",
    options: ["By testing its goodwill separately", "As a single asset, in its entirety", "Only if the investee pays no dividends"],
    answer: 1,
    why: "Recoverable amount vs carrying amount for the whole investment."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "An impairment loss on an equity-method investment is recognized:",
    options: ["Directly in other comprehensive income", "Only in the notes, never in the accounts", "On the income statement"],
    answer: 2,
    why: "The same under IFRS and US GAAP; the carrying amount is written down."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Allocating impairment losses beyond goodwill pro rata to other assets applies to:",
    options: ["A consolidated subsidiary's cash-generating unit", "An equity-method investment in an associate company", "A financial asset measured at fair value through profit"],
    answer: 0,
    why: "The equity-method investment is impaired as one asset, so there is no such allocation."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "When an investor sells goods to its associate (downstream), unrealized profit is:",
    options: ["Eliminated in full, as with a subsidiary", "Eliminated to the extent of the investor's ownership", "Not eliminated at all, as it is an arm's-length sale"],
    answer: 1,
    why: "E.g. with a 25% stake, 25% of the unsold profit is deferred until the goods are sold to third parties."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "A special purpose entity (SPE) is often able to borrow at lower rates because it is:",
    options: ["Bankruptcy-remote from the sponsor", "Exempt from consolidation rules", "Backed by the sponsor's whole balance sheet"],
    answer: 0,
    why: "Lenders have a direct claim on the SPE's assets (e.g. receivables)."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "If a sponsor CONTROLS its SPE, the SPE must be:",
    options: ["Accounted for at cost, less any impairment", "Accounted for by the equity method as an associate", "Consolidated into the sponsor's statements"],
    answer: 2,
    why: "Its assets and debt come back onto the sponsor's balance sheet."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Securitizing receivables through a controlled, consolidated SPE affects the sponsor's balance sheet ratios:",
    options: ["Improves them, as debt moves off-balance-sheet", "Leaves them the same as direct borrowing", "Worsens them, as assets are removed"],
    answer: 1,
    why: "After consolidation the result matches borrowing against the receivables."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Selling €75m of receivables to an SPE for cash (after investing €5m in it) leaves the sponsor's own current assets:",
    options: ["Higher by €75m, as the cash comes in from the SPE", "Higher by €5m, from the investment in the SPE", "Lower, as receivables fall more than cash rises"],
    answer: 2,
    why: "Receivables −75, cash +75 −5 = net −5 on the sponsor's own books."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "An investor with 25% of the votes but no board seat can still have significant influence through:",
    options: ["Material transactions with the investee", "Owning more than 50% of the votes only", "Holding non-voting preferred shares too"],
    answer: 0,
    why: "Other signs: taking part in policy-making, exchange of managers, technological dependency."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Under FVPL, income from an equity investment includes:",
    options: ["Dividends only, with gains going to OCI", "Dividends plus realized and unrealized gains", "The investor's share of investee net income"],
    answer: 1,
    why: "All fair value changes go through profit or loss."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Under FVOCI (equity securities), unrealized gains are reported in:",
    options: ["Profit or loss", "Other comprehensive income", "Retained earnings directly at once"],
    answer: 1,
    why: "Only dividends hit profit or loss; fair value changes go to OCI."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Taking a share of the investee's net income into the investor's income is the:",
    options: ["Equity method", "FVPL method", "FVOCI method"],
    answer: 0,
    why: "The equity method needs significant influence (typically 20%–50%)."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Under the equity method, dividends received from the associate:",
    options: ["Are reported as dividend income", "Increase the investment account", "Reduce the investment account"],
    answer: 2,
    why: "They're treated as a return of the investment, not as income."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Under the equity method, the share of a fair-value uplift on depreciable equipment:",
    options: ["Reduces equity income through extra depreciation", "Increases equity income each year it is held", "Is added to goodwill and is never amortized"],
    answer: 0,
    why: "E.g. 25% × €40m / 5 years = €2m a year."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "When an acquired subsidiary's inventory is undervalued, under FIFO the uplift:",
    options: ["Is depreciated over the inventory's useful life", "Goes to cost of sales as that inventory is sold", "Is added to goodwill on acquisition"],
    answer: 1,
    why: "Under FIFO the old inventory is usually sold in the first year, so the uplift is expensed then."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Under US GAAP, goodwill on acquiring a subsidiary must use the:",
    options: ["Partial goodwill method", "Full goodwill method", "Either partial or full, by choice"],
    answer: 1,
    why: "IFRS allows either; US GAAP requires full goodwill."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Under the partial goodwill method, NCI is measured at its share of the subsidiary's:",
    options: ["Total fair value, including goodwill", "Book value of net assets", "Fair value of identifiable net assets"],
    answer: 2,
    why: "So NCI has no claim on goodwill under partial goodwill."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Under the full goodwill method, NCI is measured at its share of the subsidiary's:",
    options: ["Total fair value, including goodwill", "Fair value of identifiable net assets only", "Book value at the acquisition date"],
    answer: 0,
    why: "So NCI and goodwill are both higher than under partial goodwill."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Compared with partial goodwill, the full goodwill method gives:",
    options: ["Lower total assets and lower equity", "Higher total assets and higher equity", "The same assets but higher net income"],
    answer: 1,
    why: "Higher goodwill (asset) and higher NCI (equity)."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Compared with partial goodwill, full goodwill makes ROA and asset turnover:",
    options: ["Higher, as more goodwill is recorded", "Unchanged, as goodwill is not amortized", "Lower, as total assets are higher"],
    answer: 2,
    why: "Net income and revenue are the same; only the asset base is bigger."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Paying for an acquisition by issuing shares, before consolidation, makes debt-to-assets:",
    options: ["Fall, as assets rise and debt stays the same", "Stay the same, as one asset swaps for another", "Rise, as the new investment adds more risk"],
    answer: 0,
    why: "Paying cash would swap one asset for another and leave the ratio unchanged."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
    q: "Paying for an acquisition with cash, before consolidation, makes debt-to-assets:",
    options: ["Fall, as the new investment is recorded", "Stay the same, as one asset replaces another", "Rise, as the cash leaves the balance sheet"],
    answer: 1,
    why: "+ investment, − cash: total assets don't change."
  },
  {
    topic: "Portfolio Management",
    reading: "Backtesting and Simulation",
    q: "Using point-in-time data in a backtest mainly reduces:",
    options: ["Look-ahead bias", "Transaction costs", "Data snooping by the analyst"],
    answer: 0,
    why: "It ensures only data that was actually available at each date is used."
  },
  {
    topic: "Portfolio Management",
    reading: "Backtesting and Simulation",
    q: "Assuming a reporting lag much longer than companies actually take introduces:",
    options: ["Survivorship bias", "Stale data", "Look-ahead bias"],
    answer: 1,
    why: "E.g. a 4-month lag when most large firms report within 30–50 days."
  },
  {
    topic: "Portfolio Management",
    reading: "Backtesting and Simulation",
    q: "Including only companies that still exist today in a backtest causes:",
    options: ["Survivorship bias", "Stale data", "A rolling-window error"],
    answer: 0,
    why: "Use point-in-time constituents, including delisted firms."
  },
  {
    topic: "Portfolio Management",
    reading: "Backtesting and Simulation",
    q: "Data snooping (p-hacking) is best described as:",
    options: ["A feature added to a dataset by adjusting it", "Using a rolling window to rebalance monthly", "Searching data until a result looks significant"],
    answer: 2,
    why: "It's a flaw in the research process, not a property of the data."
  },
  {
    topic: "Portfolio Management",
    reading: "Backtesting and Simulation",
    q: "Maximum drawdown measures:",
    options: ["The volatility of returns in both directions", "The worst cumulative loss from peak to trough", "The average loss beyond the VaR threshold"],
    answer: 1,
    why: "Standard deviation is volatility; CVaR is the average loss beyond VaR."
  },
  {
    topic: "Portfolio Management",
    reading: "Backtesting and Simulation",
    q: "Standard deviation and maximum drawdown are:",
    options: ["Different measures that complement each other", "Perfect substitutes, so only one is needed", "Both measures of portfolio turnover and cost"],
    answer: 0,
    why: "Volatility vs downside risk; especially different when returns are skewed or fat-tailed."
  },
  {
    topic: "Portfolio Management",
    reading: "Backtesting and Simulation",
    q: "A rolling-window backtest:",
    options: ["Uses the whole sample once to fit and test the model", "Rebalances only once, at the very end of the sample", "Re-fits on a moving window, then tests on the next period"],
    answer: 2,
    why: "It mimics how the strategy would actually have been run over time."
  },
  {
    topic: "Portfolio Management",
    reading: "Backtesting and Simulation",
    q: "Historical simulation draws random variables from:",
    options: ["A specified statistical distribution and its parameters", "Past data, with equal probability per draw", "Analysts' consensus forecasts of future returns"],
    answer: 1,
    why: "It assumes the past is a sufficient guide to the future."
  },
  {
    topic: "Portfolio Management",
    reading: "Backtesting and Simulation",
    q: "A Monte Carlo simulation, unlike historical simulation, requires:",
    options: ["A functional form for each variable's distribution", "At least 30 years of past monthly return data", "No assumptions at all about future returns"],
    answer: 0,
    why: "E.g. multivariate normal or skewed Student's t, plus its parameters."
  },
  {
    topic: "Portfolio Management",
    reading: "Backtesting and Simulation",
    q: "When the number of simulation trials exceeds the historical dataset, use:",
    options: ["Interpolation to create new monthly returns", "A shorter rolling window to add more periods", "Bootstrapping (sampling with replacement)"],
    answer: 2,
    why: "Interpolation would create observations that never happened."
  },
  {
    topic: "Portfolio Management",
    reading: "Backtesting and Simulation",
    q: "For correlated assets in a Monte Carlo simulation, you should:",
    options: ["Model each asset on its own, then combine", "Specify a multivariate distribution", "Drop the correlated assets from the model"],
    answer: 1,
    why: "Calibrate means, standard deviations and the full covariance matrix."
  },
  {
    topic: "Portfolio Management",
    reading: "Backtesting and Simulation",
    q: "The number of distinct covariance terms for n assets is:",
    options: ["n(n − 1) / 2", "n(n + 1)", "2n − 1"],
    answer: 0,
    why: "E.g. 9 assets → 36; 6 assets → 15."
  },
  {
    topic: "Portfolio Management",
    reading: "Backtesting and Simulation",
    q: "Negative skewness plus excess kurtosis implies:",
    options: ["Returns cluster tightly around the mean", "More frequent large positive surprises", "More frequent large negative surprises"],
    answer: 2,
    why: "Fat tails = more extremes; negative skew = extremes skew to the downside."
  },
  {
    topic: "Portfolio Management",
    reading: "Backtesting and Simulation",
    q: "Risk-averse investors generally prefer return distributions with:",
    options: ["Negative skew and high (excess) kurtosis", "Positive skew and low to moderate kurtosis", "Negative skew and very low kurtosis overall"],
    answer: 1,
    why: "They want upside surprises and few extreme losses."
  },
  {
    topic: "Portfolio Management",
    reading: "Backtesting and Simulation",
    q: "Re-running a simulation with a different input distribution to see how results change is:",
    options: ["Inverse transformation", "Data snooping", "Sensitivity analysis"],
    answer: 2,
    why: "E.g. swapping the normal for a skewed Student's t-distribution."
  },
  {
    topic: "Portfolio Management",
    reading: "Backtesting and Simulation",
    q: "The inverse transformation method:",
    options: ["Turns a random uniform number into a simulated value", "Removes look-ahead bias from vendor databases by lagging", "Converts a strategy's VaR into its maximum drawdown"],
    answer: 0,
    why: "A step inside Monte Carlo simulation."
  },
  {
    topic: "Portfolio Management",
    reading: "Backtesting and Simulation",
    q: "In a benchmark (equal-weighted) factor portfolio, each factor gets equal:",
    options: ["Risk contribution", "Weight", "Expected return"],
    answer: 1,
    why: "Risk parity gives each factor an equal RISK contribution instead."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Multinational Operations",
    q: "A subsidiary's functional currency is the currency of:",
    options: ["Its primary economic environment", "The parent's financial statements", "Its largest single customer"],
    answer: 0,
    why: "Key sign: the currency that mainly influences its sales prices."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Multinational Operations",
    q: "The currency in which a parent presents its consolidated statements is its:",
    options: ["Functional currency", "Local currency", "Presentation currency"],
    answer: 2,
    why: "Subsidiaries' statements are translated into it."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Multinational Operations",
    q: "The temporal method is used when the subsidiary's functional currency is:",
    options: ["Its own local currency", "The parent's presentation currency", "Any currency except the parent's"],
    answer: 1,
    why: "Remeasurement: the subsidiary is treated as an extension of the parent."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Multinational Operations",
    q: "The current rate method is used when the subsidiary's functional currency is:",
    options: ["Its own local currency", "The parent's presentation currency", "The US dollar in all cases"],
    answer: 0,
    why: "Translation: the subsidiary is a self-contained foreign entity."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Multinational Operations",
    q: "Under the temporal method, monetary assets and liabilities are translated at the:",
    options: ["Historical rate", "Average rate for the period", "Current rate"],
    answer: 2,
    why: "E.g. cash, receivables, notes payable."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Multinational Operations",
    q: "Under the temporal method, inventory carried at cost is translated at the:",
    options: ["Historical rate when it was acquired", "Current rate at the balance sheet date", "Rate on the day the parent was formed"],
    answer: 0,
    why: "Non-monetary items at cost use historical rates."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Multinational Operations",
    q: "Under the current rate method, all assets and liabilities are translated at the:",
    options: ["Historical rate", "Current rate", "Weighted-average rate"],
    answer: 1,
    why: "Common stock stays at the historical rate; income items use the average rate."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Multinational Operations",
    q: "Under the temporal method, translation (remeasurement) gains and losses go to:",
    options: ["Other comprehensive income", "Net income", "Retained earnings at year-end only"],
    answer: 1,
    why: "Under the current rate method they go to OCI (the cumulative translation adjustment)."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Multinational Operations",
    q: "Under the current rate method, translation adjustments are reported in:",
    options: ["Net income, as a remeasurement gain", "Cost of sales, as a currency cost", "Other comprehensive income"],
    answer: 2,
    why: "They build up in the cumulative translation adjustment in equity."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Multinational Operations",
    q: "If the foreign currency weakens, a net monetary LIABILITY position under the temporal method gives a:",
    options: ["Translation gain", "Translation loss", "No translation effect"],
    answer: 0,
    why: "The liabilities are worth less in the parent's currency."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Multinational Operations",
    q: "If the foreign currency weakens, a net ASSET exposure under the current rate method gives a:",
    options: ["Positive adjustment", "Negative adjustment", "No adjustment"],
    answer: 1,
    why: "Net assets are worth less in the parent's currency."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Multinational Operations",
    q: "An economy is generally considered highly inflationary when cumulative 3-year inflation exceeds about:",
    options: ["50%", "25%", "100%"],
    answer: 2,
    why: "This triggers special translation rules."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Multinational Operations",
    q: "Under IFRS, a subsidiary in a highly inflationary economy is handled by:",
    options: ["Restating for inflation, then translating at the current rate", "Using the temporal method with the parent's currency as functional", "Translating at historical rates with no inflation restatement"],
    answer: 0,
    why: "US GAAP instead uses the temporal method, as if the parent's currency were functional."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Multinational Operations",
    q: "Under US GAAP, a subsidiary in a highly inflationary economy uses:",
    options: ["Inflation restatement and the current rate", "The temporal method", "The current rate method only"],
    answer: 1,
    why: "The parent's currency is treated as the functional currency."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Multinational Operations",
    q: "A multinational's effective tax rate is LOWER than its domestic rate when foreign profits are taxed at:",
    options: ["Higher rates than at home", "Lower rates than at home", "The same rate as at home"],
    answer: 1,
    why: "E.g. a large share of income taxed at 0% abroad."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Multinational Operations",
    q: "Sustainable (organic) sales growth excludes:",
    options: ["Growth in sales volume", "Growth in selling prices", "Foreign currency effects"],
    answer: 2,
    why: "Currency moves are outside management's control."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Multinational Operations",
    q: "Translating a foreign subsidiary's revenue when its currency strengthens against the parent's makes reported growth:",
    options: ["Higher than organic growth", "Lower than organic growth", "Equal to organic growth"],
    answer: 0,
    why: "A stronger foreign currency adds a positive FX contribution."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Multinational Operations",
    q: "Under the current rate method, a subsidiary's translated gross margin:",
    options: ["Equals its margin in local currency", "Is always lower than in local currency", "Depends on historical inventory rates"],
    answer: 0,
    why: "Sales and COGS are both translated at the same average rate."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Multinational Operations",
    q: "Under the temporal method, COGS is translated at:",
    options: ["The current rate at the balance sheet date", "Historical rates when inventory was bought", "The average rate for the period, like sales"],
    answer: 1,
    why: "Sales use the average rate, so the margin can differ from local currency."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Multinational Operations",
    q: "When the foreign currency is weakening, the temporal method (vs current rate) gives a gross margin that is:",
    options: ["Higher", "The same", "Lower"],
    answer: 2,
    why: "COGS is translated at older, stronger rates while sales use the weaker average rate."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Multinational Operations",
    q: "In an inflationary environment, FIFO (vs weighted-average cost) gives:",
    options: ["Higher COGS and lower gross profit", "Lower COGS and higher gross profit", "The same gross profit"],
    answer: 1,
    why: "FIFO charges the older, cheaper costs to COGS."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Multinational Operations",
    q: "Under the temporal method, depreciation expense is translated at:",
    options: ["The historical rate of the related asset", "The average rate for the reporting period", "The current rate at the period-end date"],
    answer: 0,
    why: "Same rate as the fixed asset itself."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Multinational Operations",
    q: "Under the current rate method, common stock is translated at:",
    options: ["The current rate", "The average rate", "The historical rate"],
    answer: 2,
    why: "Equity stays at historical rates; the CTA keeps the balance sheet in balance."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Multinational Operations",
    q: "Under the current rate method, the balance sheet exposure is:",
    options: ["Net monetary assets", "Net assets", "Total liabilities"],
    answer: 1,
    why: "Under the temporal method it's net monetary assets (or liabilities)."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Multinational Operations",
    q: "Under the temporal method, the balance sheet exposure is:",
    options: ["Net monetary assets or liabilities", "Net assets (total equity) of the subsidiary", "Total fixed assets and inventory held"],
    answer: 0,
    why: "Only items translated at the current rate are exposed."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Multinational Operations",
    q: "Accounts receivable are translated at the current rate under:",
    options: ["The temporal method only", "The current rate method only", "Both methods"],
    answer: 2,
    why: "Monetary items always use the current rate."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Multinational Operations",
    q: "When a foreign subsidiary is sold, its cumulative translation adjustment is:",
    options: ["Left in equity permanently", "Reclassified to net income", "Written off directly to retained earnings"],
    answer: 1,
    why: "The accumulated OCI amount is recycled into profit on disposal."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Multinational Operations",
    q: "A positive net asset exposure plus a weakening foreign currency, under the current rate method, gives:",
    options: ["A translation gain in net income", "A negative translation adjustment", "No effect on equity or net income"],
    answer: 1,
    why: "Net assets are worth less in the parent's currency; the loss goes to the CTA."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Multinational Operations",
    q: "If the parent's currency is the subsidiary's functional currency, the method used is the:",
    options: ["Current rate method", "Temporal method", "Inflation restatement method"],
    answer: 1,
    why: "Remeasurement; gains and losses go to net income."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Analysis of Financial Institutions",
    q: "Banks are more likely than non-financial companies to be systemically important because they:",
    options: ["Create financial linkages across the whole economy", "Hold mostly tangible fixed assets such as branches", "Are not subject to any capital or liquidity rules"],
    answer: 0,
    why: "One failure can spread to others: financial contagion."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Analysis of Financial Institutions",
    q: "Most of a bank's ASSETS are:",
    options: ["Customer deposits and other borrowings", "Loans and securities (financial assets)", "Property, plant and equipment like branches"],
    answer: 1,
    why: "Deposits are mainly liabilities."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Analysis of Financial Institutions",
    q: "Basel III's minimum share of risk-weighted assets funded with equity is a:",
    options: ["Liquidity requirement", "Stable funding requirement", "Capital requirement"],
    answer: 2,
    why: "It limits leverage so losses can be absorbed."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Analysis of Financial Institutions",
    q: "The liquidity coverage ratio (LCR) compares high-quality liquid assets with:",
    options: ["Expected cash outflows over 30 days of stress", "Total risk-weighted assets on the balance sheet", "Required stable funding over a one-year horizon"],
    answer: 0,
    why: "LCR ≥ 100% is the minimum."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Analysis of Financial Institutions",
    q: "The net stable funding ratio (NSFR) compares available stable funding with:",
    options: ["Cash outflows over 30 days of stress", "Required stable funding over one year", "Common equity Tier 1 capital held"],
    answer: 1,
    why: "Long-term assets should be funded by stable sources."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Analysis of Financial Institutions",
    q: "CAMELS stands for Capital, Asset quality, Management, Earnings, Liquidity and:",
    options: ["Solvency of the holding company", "Size of the bank's loan book", "Sensitivity to market risk"],
    answer: 2,
    why: "Six components in total."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Analysis of Financial Institutions",
    q: "Which is NOT covered by the CAMELS approach?",
    options: ["The bank's competitive environment", "The bank's capital adequacy", "The bank's liquidity position"],
    answer: 0,
    why: "Also missing: government support, culture, off-balance-sheet items, ESG."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Analysis of Financial Institutions",
    q: "Common equity Tier 1 capital mainly consists of:",
    options: ["Subordinated debt with long maturities", "Common stock and retained earnings", "Loan loss reserves and preferred shares"],
    answer: 1,
    why: "The highest-quality capital that absorbs losses first."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Analysis of Financial Institutions",
    q: "CET1 and Tier 1 ratios falling while the total capital ratio is flat suggests:",
    options: ["Improving capital adequacy over time", "More reliance on Tier 2 capital", "Better liquidity from stable deposits"],
    answer: 1,
    why: "Lower-quality capital is replacing Tier 1."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Analysis of Financial Institutions",
    q: "A falling VaR trend for a bank indicates:",
    options: ["Lower sensitivity to market risk", "Worsening liquidity coverage over time", "Higher capital adequacy from retained profits"],
    answer: 0,
    why: "VaR measures potential loss from market moves."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Analysis of Financial Institutions",
    q: "The P&C underwriting expense ratio measures:",
    options: ["The quality of underwriting (risk pricing)", "Efficiency of spending to obtain new premiums", "Overall underwriting profitability"],
    answer: 1,
    why: "The loss ratio measures underwriting quality; the combined ratio measures overall profitability."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Analysis of Financial Institutions",
    q: "The P&C loss and loss adjustment expense ratio measures:",
    options: ["Efficiency of spending to obtain new premiums", "Investment returns earned on the insurance float", "Quality of underwriting: how well risks were estimated"],
    answer: 2,
    why: "Losses + LAE ÷ net premiums earned."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Analysis of Financial Institutions",
    q: "A P&C combined ratio above 100% indicates:",
    options: ["An underwriting profit", "An underwriting loss", "A strong investment return"],
    answer: 1,
    why: "Combined ratio = loss ratio + expense ratio."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Analysis of Financial Institutions",
    q: "Compared with P&C insurers, L&H insurers' claims are:",
    options: ["More predictable, based on mortality", "More variable and lumpy over time", "Usually settled within about a year"],
    answer: 0,
    why: "P&C claims arise from accidents and catastrophes."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Analysis of Financial Institutions",
    q: "Compared with L&H insurers, P&C insurers usually have:",
    options: ["Lower capital needs and riskier investments for higher returns", "Longer-term policies lasting several decades", "Higher capital needs and more conservative investments"],
    answer: 2,
    why: "Their claims are less predictable."
  },
  {
    topic: "Financial Statement Analysis",
    reading: "Analysis of Financial Institutions",
    q: "P&C insurance policies are usually:",
    options: ["Long-term, often lasting several decades", "Short-term, with costs known within about a year", "Priced mainly from actuarial mortality tables"],
    answer: 1,
    why: "L&H policies are long-term."
  }
];


if (typeof module !== "undefined") module.exports = QUESTIONS;
