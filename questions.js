// Concept (개념) questions from the CFA L2 practice set:
// Intercorporate Investments (FSA) and Pricing & Valuation of Forward Commitments (Derivatives).
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
  }
];

if (typeof module !== "undefined") module.exports = QUESTIONS;
