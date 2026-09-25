// Concept (개념) questions from the CFA L2 practice sets:
// Intercorporate Investments (FSA), Pricing & Valuation of Forward Commitments (Derivatives),
// and Hedge Fund Strategies (Alternative Investments).
// Each question: topic, q, options (A/B/C), answer (index into options), why.
const QUESTIONS = [
  // ---------- Intercorporate Investments ----------
  {
    topic: "Intercorporate Investments",
    q: "An investor that has CONTROL over an investee (usually >50% of voting shares) accounts for it using:",
    options: ["The equity method", "The acquisition method (full consolidation)", "Fair value through profit or loss"],
    answer: 1,
    why: "Control → consolidate 100% of the subsidiary's assets, liabilities, revenues and expenses line by line, and show a non-controlling interest for the part not owned."
  },
  {
    topic: "Intercorporate Investments",
    q: "An investor owns only 16% of a company but has a seat on its board and takes part in policy-making. Its influence is best described as:",
    options: ["Passive (no influence)", "Significant influence", "Control"],
    answer: 1,
    why: "20–50% is only a guideline. Board representation and participation in policy-making show significant influence even below 20% → equity method."
  },
  {
    topic: "Intercorporate Investments",
    q: "Under the equity method, dividends received from the investee:",
    options: ["Are reported as income", "Increase the investment's carrying value", "Decrease the investment's carrying value"],
    answer: 2,
    why: "The investor already recognised its share of the investee's net income. A dividend is a return OF investment, so it reduces the carrying value."
  },
  {
    topic: "Intercorporate Investments",
    q: "Holding the ownership stake constant, net income attributable to the parent's shareholders under the equity method vs. full consolidation is:",
    options: ["Higher under full consolidation", "Higher under the equity method", "The same under both"],
    answer: 2,
    why: "Only the presentation differs. Consolidation adds 100% of the investee's net income, then subtracts the non-controlling interest's share, so the parent ends up with the same number."
  },
  {
    topic: "Intercorporate Investments",
    q: "Compared with full consolidation, the equity method usually reports:",
    options: ["Higher total assets and revenue", "Lower total assets and revenue, with a higher net profit margin and ROA", "The same assets and revenue"],
    answer: 1,
    why: "The equity method shows one investment line and one income line. Net income is the same, but assets and revenue are smaller, so margins and ROA look better."
  },
  {
    topic: "Intercorporate Investments",
    q: "Under proportionate consolidation, the investor:",
    options: ["Adds 100% of the investee's line items and shows a non-controlling interest", "Adds its % share of each asset, liability, revenue and expense, with no non-controlling interest", "Reports a single investment line on the balance sheet"],
    answer: 1,
    why: "Only the investor's share of each line item is included, so there is no non-controlling interest. Adding 100% would be full consolidation."
  },
  {
    topic: "Intercorporate Investments",
    q: "A held-to-maturity (amortized cost) bond bought at a PREMIUM. Over time, its carrying value:",
    options: ["Moves to fair value each period", "Falls toward par using the effective interest method", "Stays at the purchase price"],
    answer: 1,
    why: "Interest income = market rate × carrying value, which is less than the coupon. The difference amortizes the premium, so the carrying value falls toward par. Fair value is ignored."
  },
  {
    topic: "Intercorporate Investments",
    q: "A company consolidates an SPE that borrows money to buy the company's receivables. The consolidated balance sheet looks like:",
    options: ["The receivables were sold and removed from the books", "The company borrowed directly against its receivables (assets and liabilities both rise)", "Nothing changed"],
    answer: 1,
    why: "After consolidation the receivables stay on the books, cash rises and debt rises by the SPE's borrowing. It looks the same as a secured loan."
  },
  {
    topic: "Intercorporate Investments",
    q: "Under the equity method, goodwill is:",
    options: ["Purchase price minus the investor's share of the investee's BOOK value", "The residual: purchase price minus the investor's share of the FAIR value of identifiable net assets", "Always zero"],
    answer: 1,
    why: "First, the excess over book value is assigned to identifiable assets (e.g. PP&E fair value above book). Whatever is left is goodwill. It stays inside the investment account and is not amortized."
  },
  {
    topic: "Intercorporate Investments",
    q: "The part of the purchase price assigned to PP&E fair value above book value is:",
    options: ["Never amortized, like goodwill", "Depreciated over the asset's remaining life, which reduces equity income", "Expensed right away"],
    answer: 1,
    why: "It is depreciated over the remaining useful life (e.g. 48 / 10 = 4.8 per year). That lowers the investor's share of income and the carrying value."
  },
  {
    topic: "Intercorporate Investments",
    q: "Under IFRS, the goodwill impairment loss equals:",
    options: ["Carrying value of the cash-generating unit minus its recoverable amount", "Carrying value of the reporting unit minus its fair value", "All of the goodwill on the books"],
    answer: 0,
    why: "IFRS uses one step: CGU carrying value minus recoverable amount (the higher of fair value less costs to sell and value in use), capped at the goodwill. Comparing with fair value is the US GAAP approach."
  },
  {
    topic: "Intercorporate Investments",
    q: "Under the PARTIAL goodwill method, the non-controlling interest is measured at:",
    options: ["Its share of the subsidiary's fair value (share price)", "Its share of the fair value of identifiable net assets", "Its share of book value"],
    answer: 1,
    why: "Partial goodwill: NCI = NCI % × identifiable net assets, so only the parent's goodwill is recognised. Full goodwill (required under US GAAP): NCI = NCI % × fair value of the whole subsidiary, which gives more goodwill and a larger NCI."
  },

  // ---------- Forward Commitments ----------
  {
    topic: "Forward Commitments",
    q: "The market futures price is BELOW the carry-arbitrage model price. The arbitrage is:",
    options: ["Sell futures and buy the underlying (carry arbitrage)", "Buy futures and short the underlying (reverse carry arbitrage)", "No action; futures prices can differ from the model"],
    answer: 1,
    why: "The futures is cheap, so buy it. Short-sell the underlying and invest the cash at the risk-free rate. That is reverse carry arbitrage."
  },
  {
    topic: "Forward Commitments",
    q: "Carry benefits (coupons, dividends) paid on the underlying during the contract's life:",
    options: ["Increase the forward price", "Decrease the forward price", "Have no effect"],
    answer: 1,
    why: "F0 = (S0 − PV of benefits) × (1+r)^T. The long does not receive the benefits, so the forward price is lower. A later payment has a smaller effect, so the forward price is higher."
  },
  {
    topic: "Forward Commitments",
    q: "The full (dirty) price of a bond is:",
    options: ["Clean price − accrued interest", "Clean price + accrued interest", "The same as the quoted price"],
    answer: 1,
    why: "Full price = clean (quoted) price + accrued interest. Accrued interest = (days since last coupon / days in period) × coupon."
  },
  {
    topic: "Forward Commitments",
    q: "In bond futures pricing, the quoted futures price is found by:",
    options: ["Compounding the clean price at the risk-free rate", "Taking the future value of the full price, subtracting accrued interest at expiration and any FV of coupons, then dividing by the conversion factor", "Multiplying the full price by the conversion factor"],
    answer: 1,
    why: "Q0 = [FV(full price) − AI at expiration − FV(coupons)] / CF. The conversion factor adjusts for the fact that different bonds can be delivered."
  },
  {
    topic: "Forward Commitments",
    q: "The value of a forward contract at initiation and during its life is:",
    options: ["Zero at initiation; later, the PV of (current forward price − original forward price) for the long", "Always equal to the forward price", "Zero at initiation and at every point after"],
    answer: 0,
    why: "At initiation the forward price is set so that value = 0. Later, for the long: Vt = (Ft − F0) / (1+r)^(T−t). Remember to discount."
  },
  {
    topic: "Forward Commitments",
    q: "A LONG forward position loses value when:",
    options: ["The underlying's price falls", "The risk-free rate rises", "The underlying's price rises"],
    answer: 0,
    why: "The forward price moves in the same direction as the spot price. A lower spot price means a lower Ft, so the long loses. A higher risk-free rate raises Ft, which helps the long."
  },
  {
    topic: "Forward Commitments",
    q: "The fixed rate on a plain vanilla interest rate swap is set so that:",
    options: ["It equals the longest spot rate", "The swap's value is zero at initiation: rate = (1 − last PV factor) / sum of PV factors", "It equals the average of the spot rates"],
    answer: 1,
    why: "The fixed rate makes PV(fixed leg) = PV(floating leg). Per period: (1 − B_N) / ΣB_i. Annualize it by the payment frequency (e.g. ÷ 0.25 for quarterly)."
  },
  {
    topic: "Forward Commitments",
    q: "You pay fixed on a swap at 0.16%. Current swap rates for the remaining term have FALLEN to 0.12%. Your position's value is:",
    options: ["Positive", "Negative", "Zero"],
    answer: 1,
    why: "You are locked into paying more than the current market rate, so the value is negative. Value = (current rate − locked rate) × ΣPV factors × notional."
  },
  {
    topic: "Forward Commitments",
    q: "Equity index futures with a continuous dividend yield δ and rate r: F0 = S0 × e^((r − δ)T). If δ > r, then:",
    options: ["The futures price is above the spot", "The futures price is below the spot", "The futures price equals the spot"],
    answer: 1,
    why: "A negative (r − δ) exponent pulls F0 below S0. Common mistakes: ignoring the dividend yield, or adding it instead of subtracting it."
  },
  {
    topic: "Forward Commitments",
    q: "The market forward price exactly equals the no-arbitrage model price. Then:",
    options: ["Carry arbitrage is available", "Reverse carry arbitrage is available", "No arbitrage opportunity exists"],
    answer: 2,
    why: "Arbitrage exists only when the market price differs from the model price. Too high → carry arbitrage (sell forward, buy underlying). Too low → reverse carry."
  },
  {
    topic: "Forward Commitments",
    q: "The main difference between valuing futures and forwards during their life:",
    options: ["Futures are marked to market daily, so their value resets to zero after each settlement", "Forwards are marked to market daily", "There is no difference"],
    answer: 0,
    why: "Daily settlement moves gains and losses into the margin account, so a futures contract's value goes back to zero each day. A forward builds up value until expiration."
  },

  // ---------- Hedge Fund Strategies ----------
  {
    topic: "Hedge Fund Strategies",
    q: "Equity market-neutral strategies are best described as using:",
    options: ["A relative value approach", "A directional (trend) approach", "An event-driven approach"],
    answer: 0,
    why: "They hold balanced long and short equity positions so net exposure to the market, sector and size is near zero. Returns come from pairs whose prices are out of line and are expected to revert to their usual relationship."
  },
  {
    topic: "Hedge Fund Strategies",
    q: "An equity market-neutral manager builds the portfolio so that its expected beta is:",
    options: ["About 1", "About 0", "Negative"],
    answer: 1,
    why: "Market risk is neutralized by targeting a portfolio beta of about zero. The manager wants returns from security selection, not from market direction."
  },
  {
    topic: "Hedge Fund Strategies",
    q: "Equity market-neutral strategies are generally most useful for portfolio allocation during:",
    options: ["Strongly trending bull markets", "Non-trending or declining markets", "Periods of rising inflation only"],
    answer: 1,
    why: "They are well diversified and deliver steadier, less volatile returns than many strategies, so they help most when markets are flat or falling."
  },
  {
    topic: "Hedge Fund Strategies",
    q: "The main exception to the low volatility of equity market-neutral strategies is:",
    options: ["Use of significant leverage, which can force portfolio downsizing", "Holding too many pairs", "Low trading turnover"],
    answer: 0,
    why: "Their conservative, constrained approach usually gives low volatility. Heavy leverage can force the manager to cut positions at bad prices, which makes returns much more volatile."
  },
  {
    topic: "Hedge Fund Strategies",
    q: "Event-driven merger arbitrage strategies are exposed to equity market beta because:",
    options: ["They hold only long equity positions", "Deals are more likely to fail in market stress, which creates left-tail risk", "They are not exposed to equity beta"],
    answer: 1,
    why: "Broad market stress can disrupt a deal. Because failures cluster in bad markets, merger arbitrage has market sensitivity and left-tail risk. With high hedge fund fees, this is an expensive form of embedded beta."
  },
  {
    topic: "Hedge Fund Strategies",
    q: "Opportunistic (global macro) strategies have risk exposure to:",
    options: ["Market directionality (\"trendiness\")", "Only idiosyncratic company risk", "No market factors"],
    answer: 0,
    why: "Global macro is based on macro themes and multi-asset relationships. Its key return source is correctly spotting and riding trends in global markets (e.g. inflation), so market direction matters a lot."
  },
  {
    topic: "Hedge Fund Strategies",
    q: "Global macro strategies are typically:",
    options: ["Bottom-up, based on single-company analysis", "Top-down, using macroeconomic and fundamental models", "Purely statistical pairs trades"],
    answer: 1,
    why: "They are top-down. Managers use macro and fundamental models to take a view on the direction or relative value of an asset or asset class."
  },
  {
    topic: "Hedge Fund Strategies",
    q: "A long/short equity manager typically aims for:",
    options: ["About long-only returns with roughly 50% lower standard deviation", "Twice long-only returns with the same volatility", "Negative correlation with equities"],
    answer: 0,
    why: "The goal is returns roughly equal to a long-only approach with about half the standard deviation, which makes it a lower-volatility strategy."
  },
  {
    topic: "Hedge Fund Strategies",
    q: "Dedicated short selling and short-biased strategies offer:",
    options: ["High returns and low volatility", "Negative correlation to equities, but lower return goals and higher volatility", "Zero beta and steady returns"],
    answer: 1,
    why: "Their return goals are lower than most hedge fund strategies, but they have a negative correlation benefit. The short beta exposure makes them more volatile than a typical long/short equity fund."
  },
  {
    topic: "Hedge Fund Strategies",
    q: "An investor ranks LOW VOLATILITY above negative correlation for equity strategies. Which strategy should it most likely avoid?",
    options: ["Long/short equity", "Equity market neutral", "Dedicated short selling / short biased"],
    answer: 2,
    why: "Short-biased strategies are the high-volatility choice (short beta). Long/short equity and equity market neutral are both lower-volatility strategies."
  },
  {
    topic: "Hedge Fund Strategies",
    q: "In a stock-for-stock merger arbitrage, the manager typically:",
    options: ["Buys the acquirer and shorts the target", "Buys the target and shorts the acquirer in the offer ratio", "Buys both companies"],
    answer: 1,
    why: "Long the target and short the acquirer, in the same ratio as the share-exchange offer. The manager earns the spread when the deal completes."
  },
  {
    topic: "Hedge Fund Strategies",
    q: "When a merger is announced, prices usually move like this:",
    options: ["Target rises toward the offer price; acquirer falls", "Target falls; acquirer rises", "Both fall"],
    answer: 0,
    why: "The target rises toward the deal price. The acquirer tends to fall because of possible dilution or the use of cash. If the deal fails, both moves typically reverse, hurting the long target / short acquirer position."
  },
  {
    topic: "Hedge Fund Strategies",
    q: "To protect a merger arbitrage position against the deal failing, the manager should:",
    options: ["Buy OTM puts on the acquirer and OTM calls on the target", "Buy OTM calls on the acquirer and OTM puts on the target", "Sell OTM puts on the target"],
    answer: 1,
    why: "Calls on the acquirer cover the short position if its price jumps back up. Puts on the target protect the long position if its price drops back down."
  },
  {
    topic: "Hedge Fund Strategies",
    q: "The payoff profile of a merger arbitrage strategy resembles:",
    options: ["A riskless bond + a short put on the acquirer + a long call on the target", "A long straddle", "A riskless bond + a long put on the target"],
    answer: 0,
    why: "It pays like a riskless bond if the deal closes. The short put on the acquirer reflects needing to cover the short if the acquirer's price rises. The long call on the target pays if a rival bidder makes a higher offer."
  },
  {
    topic: "Hedge Fund Strategies",
    q: "In merger arbitrage, the 'long call on the target' part of the payoff becomes valuable when:",
    options: ["The deal fails", "Another bidder (a \"white knight\") offers a higher price for the target", "The acquirer's price falls"],
    answer: 1,
    why: "A higher competing bid lifts the target's price above the original deal terms, giving extra upside."
  },
  {
    topic: "Hedge Fund Strategies",
    q: "Buying off-the-run government bonds and shorting duration-matched on-the-run bonds is a:",
    options: ["Carry trade", "Yield curve trade", "Long/short credit trade"],
    answer: 0,
    why: "It is the classic fixed-income arbitrage carry trade: long the higher-yielding, less liquid bond and short the lower-yielding, more liquid bond, earning positive carry until the mispricing reverts."
  },
  {
    topic: "Hedge Fund Strategies",
    q: "In the off-the-run vs. on-the-run carry trade, the main remaining risk is:",
    options: ["Interest rate risk", "Credit risk", "Liquidity risk"],
    answer: 2,
    why: "Matching durations and issuer hedges interest rate and credit risk. What is left is liquidity risk."
  },
  {
    topic: "Hedge Fund Strategies",
    q: "A yield curve (calendar spread) trade using bonds of the SAME issuer mainly carries:",
    options: ["Interest rate risk", "Credit risk", "Currency risk"],
    answer: 0,
    why: "Long and short positions at different points on the curve bet on flattening or steepening. With the same issuer, most credit and liquidity risk is hedged, so interest rate risk is the main concern."
  },
  {
    topic: "Hedge Fund Strategies",
    q: "A long/short credit trade profits from:",
    options: ["Differences in credit quality across issuers (e.g. investment grade vs. high yield)", "On-the-run vs. off-the-run liquidity", "Curve steepening only"],
    answer: 0,
    why: "It trades relative credit risk across issuers. It is naturally more volatile than exploiting small pricing gaps within sovereign debt."
  },
  {
    topic: "Hedge Fund Strategies",
    q: "Going long the assets that rose MOST relative to the others and short those that fell the most is:",
    options: ["Time-series momentum", "Cross-sectional momentum", "Global macro"],
    answer: 1,
    why: "Cross-sectional momentum ranks assets against each other, usually within one asset class. It generally results in a net zero, market-neutral position."
  },
  {
    topic: "Hedge Fund Strategies",
    q: "In time-series momentum, each position is based on:",
    options: ["The asset's own past trend, so the fund can be net long or net short", "Its ranking against the other assets", "Macroeconomic forecasts"],
    answer: 0,
    why: "Positions are set independently: long if the asset is trending up, short if down. The overall portfolio can be net long or net short."
  },
  {
    topic: "Hedge Fund Strategies",
    q: "Which specialist strategy best protects the Sharpe ratio in an equity crisis?",
    options: ["Selling equity volatility", "Buying longer-dated OTM options on VIX futures (long volatility)", "Cross-asset volatility trading"],
    answer: 1,
    why: "Equity volatility is about 80% negatively correlated with equity returns. Long volatility spikes in a crash, lowering portfolio standard deviation and raising the Sharpe ratio, at the cost of the option premium."
  },
  {
    topic: "Hedge Fund Strategies",
    q: "Why buy LONGER-dated, OUT-of-the-money VIX options for a volatility hedge?",
    options: ["They are cheaper in every way", "Longer-dated options have more vega exposure; OTM options trade at higher implied volatility", "They have no time decay"],
    answer: 1,
    why: "Longer-dated options have more absolute exposure to volatility levels (vega). OTM options typically trade at higher implied volatilities than ATM options."
  },
  {
    topic: "Hedge Fund Strategies",
    q: "A seller of equity volatility:",
    options: ["Benefits most in a crisis", "Earns the volatility risk premium for providing crash insurance, with steadier returns in normal markets", "Has no exposure to crises"],
    answer: 1,
    why: "The volatility seller is the insurance provider, not the insured. It collects premium in calm markets and loses when volatility spikes."
  },
  {
    topic: "Hedge Fund Strategies",
    q: "Cross-asset volatility trading (e.g. US vs. Japan) is a poor crisis hedge because:",
    options: ["It always loses money", "It can carry idiosyncratic, macro-oriented risks that hurt in an equity crisis", "It is illegal in most markets"],
    answer: 1,
    why: "It is relative value volatility trading. Its idiosyncratic macro risks can go wrong exactly when equities crash."
  },
  {
    topic: "Hedge Fund Strategies",
    q: "Which is TRUE about fees in a fund of funds (FoF)?",
    options: ["Investors pay one layer of fees", "Investors pay two layers of fees and can't net performance fees across managers", "The general partner absorbs netting risk"],
    answer: 1,
    why: "FoF investors pay the underlying funds' fees plus the FoF's fees. They pay incentive fees to winning managers even if the FoF overall is flat or down. This is netting risk."
  },
  {
    topic: "Hedge Fund Strategies",
    q: "In a standard multi-strategy fund (MSF), netting risk is borne by:",
    options: ["The investor", "The general partner (GP)", "The underlying fund managers"],
    answer: 1,
    why: "The GP absorbs netting risk. Investors pay incentive fees only on total fund performance after netting winning and losing teams."
  },
  {
    topic: "Hedge Fund Strategies",
    q: "Under an MSF 'pass-through' fee model, the investor:",
    options: ["Bears none of the netting risk", "Implicitly pays for part of the netting risk", "Pays no fees at all"],
    answer: 1,
    why: "The fund passes through each team's costs (salaries and incentive fees) and then charges a fund-level incentive fee, so the investor implicitly pays part of the netting risk."
  },
  {
    topic: "Hedge Fund Strategies",
    q: "Which structure has the tactical allocation advantage?",
    options: ["Fund of funds (FoF)", "Multi-strategy fund (MSF)", "Neither"],
    answer: 1,
    why: "An MSF can move capital between strategies faster and more efficiently, with better strategy transparency. This makes it more resilient in preserving capital."
  },
  {
    topic: "Hedge Fund Strategies",
    q: "Which structure has HIGHER manager-specific operational risk?",
    options: ["Fund of funds (FoF)", "Multi-strategy fund (MSF)", "They are the same"],
    answer: 1,
    why: "In an MSF, all teams share operational and risk systems under one roof, so operational risk isn't diversified. In an FoF, each underlying fund runs its own operations."
  },
  {
    topic: "Hedge Fund Strategies",
    q: "When large negative events are expected, the better risk-adjusted return measure is:",
    options: ["Sharpe ratio", "Sortino ratio", "Maximum drawdown"],
    answer: 1,
    why: "The Sortino ratio uses downside deviation (it penalizes only returns below a target). The Sharpe ratio penalizes upside and downside volatility alike. Maximum drawdown is not a risk-adjusted return measure."
  },
  {
    topic: "Hedge Fund Strategies",
    q: "The new portfolio's VARIANCE must be below 90% of the current one. The maximum standard deviation is:",
    options: ["90% × current SD", "√0.90 × current SD (≈ 94.9%)", "0.90² × current SD"],
    answer: 1,
    why: "Variance = SD². Max variance = 0.90 × SD², so max SD = √0.90 × SD. Example: 7.95% → √(0.90 × 63.20) = 7.54%."
  }
];


if (typeof module !== "undefined") module.exports = QUESTIONS;
