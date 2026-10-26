// Wrong-answer notes: condensed versions of questions missed in practice papers.
// Each note: reading (CFA reading number), stem (facts), ask, options [value, why], answer, mine (the pick that was wrong),
// formula, why (steps), general (what to apply elsewhere), x (optional extra table as HTML).
const NOTE_READINGS = {
  1: "Multiple Regression", 2: "Time-Series Analysis", 3: "Machine Learning", 4: "Big Data Projects",
  5: "Currency Exchange Rates", 6: "Economic Growth", 7: "Intercorporate Investments", 8: "Employee Compensation",
  9: "Multinational Operations", 10: "Analysis of Financial Institutions", 11: "Evaluating Quality of Financial Reports",
  12: "Integration of FSA Techniques", 13: "Dividends and Share Repurchases", 14: "ESG Considerations",
  15: "Cost of Capital: Advanced Topics", 16: "Corporate Restructuring", 17: "Equity Valuation: Applications and Processes",
  18: "Discounted Dividend Valuation", 19: "Free Cash Flow Valuation", 20: "Market-Based Valuation", 21: "Residual Income Valuation",
  22: "Private Company Valuation", 23: "Term Structure and Interest Rate Dynamics", 24: "Arbitrage-Free Valuation Framework",
  25: "Bonds with Embedded Options", 26: "Credit Analysis Models", 27: "Credit Default Swaps",
  28: "Pricing and Valuation of Forward Commitments", 29: "Valuation of Contingent Claims",
  30: "Commodities and Commodity Derivatives", 31: "Types of Real Estate Investment", 32: "Real Estate through Publicly Traded Securities",
  33: "Hedge Fund Strategies", 34: "Economics and Investment Markets", 35: "Analysis of Active Portfolio Management",
  36: "Exchange-Traded Funds", 37: "Using Multifactor Models", 38: "Measuring and Managing Market Risk", 39: "Backtesting and Simulation",
  40: "Code of Ethics and Standards of Professional Conduct", 41: "Guidance for Standards I–VII", 42: "Application of the Code and Standards"
};
const NOTE_SESSIONS = [
  { id: "2026-10-24-s1", date: "2026-10-24", name: "Session 1", label: "Practice exam · Paper 1" },
  { id: "2026-10-24-s2", date: "2026-10-24", name: "Session 2", label: "Practice exam · Paper 2" },
  { id: "2026-10-25-cds", date: "2026-10-25", name: "CFAI 27 CDS", label: "CFA Institute · 27 Credit Default Swaps (34 Qs, 19 correct)" },
  { id: "2026-10-26-corp1", date: "2026-10-26", name: "Corp TB 1–21", label: "Test bank · Corporate Issuers topic 2 (21 Qs, 14 correct)" },
  { id: "2026-10-26-s1", date: "2026-10-26", name: "PM1 Session 1", label: "Mixed readings · 38 graded Qs, 25 correct" },
  { id: "2026-10-26-s2", date: "2026-10-26", name: "PM1 Session 2", label: "Mixed readings · 44 Qs, 27 correct" },
  { id: "2026-10-26-drill", date: "2026-10-26", name: "Formula drills", label: "Pick the formula with full numbers · 30 formula (symbol options) + 11 concept + 5 frequency checks" }
];
const NOTES = (() => {
  const N = (mock, num, reading, subject, title, stem, ask, opts, answer, mine, formula, why, general, x) =>
    ({ id: `m${mock}q${num}`, set: `2026-10-24-s${mock}`, tag: `Mock ${mock} · Q${num}`, session: mock, mock, num, reading, subject, title, stem, ask, options: opts.map(([t, n]) => ({ t, n })), answer, mine, formula, why, general, x: x || "" });
  // CFA Institute 27 Credit Default Swaps, 25 Oct. G = answered correctly but by guessing (or closely related): same fields, flagged.
  const G = (num, title, ...r) => ({ ...C(num, title, ...r), guess: true });
  const C = (num, title, ...r) => ({ ...N(0, num, 27, "Fixed Income", title, ...r), id: `c${num}`, set: "2026-10-25-cds", tag: `CDS · Q${num}`, session: 3, mock: 0 });
  // Test bank, Corporate Issuers topic 2 (26 Oct, session 1). reading = CFA reading the question belongs to.
  const T = (num, reading, title, ...r) => ({ ...N(0, num, reading, "Corporate Issuers", title, ...r), id: `tbc${num}`, set: "2026-10-26-corp1", tag: `Corp TB · Q${num}`, session: 4, mock: 0 });
  // 26 Oct PM1 Session 1 (CFAI, mixed readings). key = unique suffix, num = the question number shown in the portal.
  const U = (key, num, tag, reading, subject, title, ...r) => ({ ...N(0, num, reading, subject, title, ...r), id: `s1${key}`, set: "2026-10-26-s1", tag, session: 5, mock: 0 });
  const UG = (...a) => ({ ...U(...a), guess: true });
  // 26 Oct Session 2 (CFAI, mixed readings). num = order inside the set; the portal number is in the tag.
  const V = (key, num, tag, reading, subject, title, ...r) => ({ ...N(0, num, reading, subject, title, ...r), id: `s2${key}`, set: "2026-10-26-s2", tag, session: 6, mock: 0 });
  const VG = (...a) => ({ ...V(...a), guess: true });
  // Formula drills with full numbers (options are formulas) + concept checks from our chats. Not from a mock: no 'mine'.
  const Y = (key, num, tag, reading, subject, title, ...r) => ({ ...N(0, num, reading, subject, title, ...r), id: `dr${key}`, set: "2026-10-26-drill", tag, session: 7, mock: 0, drill: true });
  return [
    // ---------------- Paper 1 ----------------
    N(1, 3, 27, "Fixed Income", "CDS settlement & cheapest-to-deliver",
      ["Jackson owns <b>$20m face of Bond X</b> and bought protection on a <b>$20m CDS</b>.", "Deliverable: Bond X or Bond Y. After default: <b>X = 40%</b>, <b>Y = 35%</b> of face."],
      "Total proceeds from Bond X + CDS at settlement?",
      [["$19m", "Swapped the prices: valued the bond you own at Y's 35% ($7m) and paid the CDS on X's 40% ($12m)."],
       ["$20m", "CDS paid on Bond X (60%). Ignores the cheapest-to-deliver option."],
       ["$21m", "Bond X at its own price ($8m) + CDS paid on the cheapest bond, Y ($13m)."]], 2, 0,
      ["CDS payout = notional × (1 – recovery rate of the CTD bond)", "CTD = the deliverable bond with the <b>lowest</b> price"],
      ["Bond you hold: $20m × 40% = <b>$8m</b>.", "CTD = Y (35% &lt; 40%) → payout = $20m × 65% = <b>$13m</b>.", "Total = <b>$21m</b>."],
      ["The protection buyer holds the CTD option: the payout always uses the <b>cheapest</b> deliverable bond.", "Value the two legs separately: your bond at its own price, the CDS on the CTD.", "Payout ratio = 1 – RR = loss given default."]),
    N(1, 4, 27, "Fixed Income", "CDS curve trades: flattener vs steepener",
      ["Crispy Chips CDS curve is <b>upward sloping</b>; Jackson expects it to <b>flatten</b>. Contracts: 1y, 3y, 5y, equal notional.", "S1: sell 1y, buy 5y protection · S2: buy 3y, sell 5y · S3: buy 1y, sell 5y."],
      "Which strategy profits most from the flattening?",
      [["Strategy 1", "A <b>steepener</b>: the opposite view."],
       ["Strategy 2", "A flattener, but 3y–5y spans less of the curve than 1y–5y."],
       ["Strategy 3", "Buy short-dated, sell long-dated protection over the widest gap."]], 2, 0,
      ["<b>Buy protection</b> → gains when spreads <b>widen</b>", "<b>Sell protection</b> → gains when spreads <b>tighten</b>"],
      ["Flattening: short-end spreads rise and/or long-end spreads fall.", "Short end → <b>buy</b> protection (1y). Long end → <b>sell</b> protection (5y).", "1y–5y covers more of the curve than 3y–5y."],
      ["<b>Flattener</b> = buy short / sell long protection. <b>Steepener</b> = the reverse.", "Negative view on a name → buy protection; positive view → sell.", "Spreads widen → the CDS gains value for the buyer."]),
    N(1, 6, 9, "FSA", "Current rate method on the income statement",
      ["Salto (US subsidiary) is translated with the <b>current rate method</b>.", "Revenue USD 120m, cost of sales USD 65m. Rates (UYU/USD): <b>average 43.26</b>; inventory-purchase average 42.81; year-end 44.63."],
      "Salto's contribution to consolidated gross profit (UYU m)?",
      [["2,379", "Revenue and cost of sales both at the average rate."],
       ["2,409", "Cost of sales at the inventory-purchase rate: that is the <b>temporal</b> method."],
       ["2,455", "Both at the year-end rate, as if balance-sheet items."]], 0, 1,
      ["Current rate method: gross profit = (revenue – cost of sales) × <b>average</b> rate"],
      ["Every income-statement item uses the average rate, <b>including cost of sales</b>.", "(120 – 65) × 43.26 = <b>2,379</b>.", "The inventory-purchase rate was a decoy (temporal method only)."],
      ["Functional currency = local currency → current rate; = parent currency → temporal.", "Highly inflationary: US GAAP → temporal; IFRS → restate for inflation (IAS 29), then translate at the current rate."],
      "<table class='mini'><tr><th>Item</th><th>Current rate</th><th>Temporal</th></tr><tr><td>Monetary assets &amp; liabilities</td><td>Current</td><td>Current</td></tr><tr><td>Inventory, PP&amp;E</td><td>Current</td><td>Historical</td></tr><tr><td>Revenue, SG&amp;A</td><td>Average</td><td>Average</td></tr><tr><td><b>Cost of sales, depreciation</b></td><td><b>Average</b></td><td><b>Historical</b></td></tr><tr><td>Translation gain/loss</td><td>Equity (CTA)</td><td>Net income</td></tr></table>"),
    N(1, 11, 37, "Portfolio", "Active return attribution (multifactor)",
      ["Factor 1: manager –1.00, benchmark –0.60, factor return –2.00%.", "Factor 2: manager 0.50, benchmark 0.25, factor return 3.50%.", "Active return from <b>security selection = 1%</b> (stated in the text, not the exhibit)."],
      "Which contributed most to the manager's active return?",
      [["Tilt on Factor 1", "+0.80%: the smallest."], ["Tilt on Factor 2", "+0.875%: bigger than Factor 1 but below selection."], ["Security selection", "+1.00%: the largest."]], 2, 1,
      ["Active return = Σ (β<sub>port</sub> – β<sub>bench</sub>) × factor return + security selection"],
      ["Factor 1: (–1.00 – (–0.60)) × (–2.00%) = <b>+0.80%</b>.", "Factor 2: (0.50 – 0.25) × 3.50% = <b>+0.875%</b>.", "Security selection = <b>1.00%</b> → total 2.675%; selection is largest."],
      ["Always include the security-selection piece in the comparison.", "Negative active exposure × negative factor return = a <b>positive</b> contribution."]),
    N(1, 13, 6, "Economics", "Neoclassical steady-state growth",
      ["Country A: labor force growth <b>n = 0.9%</b>; labor share <b>(1 – α) = 55.2%</b>; TFP growth <b>θ = 2.1%</b>."],
      "Steady-state growth rate (neoclassical model)?",
      [["3.8%", "Per-worker growth only: forgot to add n."], ["4.7%", "θ / (1 – α) + n."], ["5.6%", "Used 1 – 0.552 as the denominator (labor share treated as α)."]], 1, 0,
      ["Total output: ΔY/Y = θ / (1 – α) + n", "Per worker: θ / (1 – α)"],
      ["2.1% ÷ 0.552 = 3.80% (per worker).", "Add n: 3.80% + 0.9% = <b>4.70%</b>."],
      ["Ask first: total output or per capita? Total = per capita + n.", "'Labor cost in total factor cost' = labor share = 1 – α.", "Neoclassical: capital deepening and trade raise growth only temporarily; endogenous growth: permanently."]),
    N(1, 18, 29, "Derivatives", "Gamma of a delta-hedged position",
      ["Wu <b>sold</b> 10 call contracts (100 shares each) and delta-hedges by <b>buying 544 shares</b>.", "Call gamma = 0.050."],
      "Gamma of the delta-hedged position?",
      [["Negative", "Short calls = negative gamma; shares add zero."], ["Zero", "A delta hedge zeroes <b>delta</b>, not gamma."], ["Positive", "True for a <b>long</b> call; Wu is short."]], 0, 2,
      ["Position gamma = –1,000 × 0.050 + shares × 0 = <b>–50</b>"],
      ["Long options → positive gamma; short options → negative; stock/forwards → zero.", "Short calls + long stock → <b>negative</b> gamma."],
      ["Short gamma: you lose on big moves either way (and earn theta).", "Shares cannot change gamma: add options first, then fix delta.", "Delta hedge for short calls: buy N(d<sub>1</sub>) shares per option."]),
    N(1, 19, 29, "Derivatives", "Theta (time decay)",
      ["BSM call value $3.305; daily theta = <b>–0.018</b>; gamma 0.050; all else constant."],
      "Call value one day later?",
      [["$3.255", "Subtracted gamma instead of theta."], ["$3.287", "3.305 + (–0.018)."], ["$3.323", "Added 0.018: counted the sign twice."]], 1, 2,
      ["New value ≈ old value + θ × Δt (Δt in days)", "ΔC ≈ Δ·ΔS + ½Γ(ΔS)² + θ·Δt"],
      ["3.305 + (–0.018 × 1) = <b>3.287</b>."],
      ["Theta already carries its sign: just add it.", "Annual theta → multiply by Δt in years.", "Option sellers earn theta."]),
    N(1, 27, 21, "Equity", "Residual income persistence factor",
      ["PrimaNet's persistence factor is <b>0.12</b>, a quarter of the industry average (0.48): <b>much lower</b>."],
      "Low persistence is most consistent with PrimaNet having:",
      [["Lower dividend payouts", "Low payout goes with <b>higher</b> persistence."], ["Lower accounting returns", "It is <b>extreme (high)</b> ROE that lowers persistence."], ["Higher accounting accruals", "High accruals = lower earnings quality → RI fades faster."]], 2, 1,
      ["V<sub>0</sub> = B<sub>0</sub> + Σ PV(RI) + terminal RI / (1 + r – ω)", "ω = 0: RI stops after year T · ω = 1: RI continues forever"],
      ["Lower persistence ← high/extreme ROE, large special items, <b>high accruals</b>.", "Higher persistence ← low dividend payout, high industry persistence."],
      ["High ROE attracts competition; accruals and one-offs do not repeat → RI fades quickly.", "Look the clue up in the table above: no calculation needed."]),
    N(1, 29, 34, "Portfolio", "Business cycle & sector performance",
      ["Nominal GDP growth 5.00% → 4.50%; inflation 3.00% → 5.00%; unemployment 3.75% → 5.25%."],
      "Which sector has the smallest decrease in profitability?",
      [["Durable goods", "Cyclical: earnings fall sharply."], ["Staple goods", "Non-cyclical: demand stays stable."], ["Discretionary goods", "Cyclical: cut first in a recession."]], 1, 2,
      ["Real GDP growth ≈ nominal GDP growth – inflation"],
      ["Current real growth: 5.00 – 3.00 = +2.0%. Forecast: 4.50 – 5.00 = <b>–0.5%</b>.", "Real GDP shrinking, unemployment rising → recession → defensive sector (<b>staples</b>)."],
      ["Convert nominal to real before judging the cycle.", "Recession: staples, utilities, healthcare beat cyclicals; credit spreads widen; government yields fall."]),
    N(1, 31, 35, "Portfolio", "Fundamental law: optimal active weights",
      ["Souza wants <b>smaller optimal active weights</b>. He can change the information coefficient (IC) and the target active risk (σ<sub>A</sub>)."],
      "Which change gives smaller optimal active weights?",
      [["IC ↓ and σ<sub>A</sub> ↓", "Lower σ<sub>A</sub> helps, but lower IC makes weights <b>larger</b>."], ["IC ↑ and σ<sub>A</sub> ↓", "Both changes shrink the weights."], ["IC ↓ and σ<sub>A</sub> ↑", "Both changes enlarge the weights."]], 1, 0,
      ["Δw<sub>i</sub>* = (μ<sub>i</sub> / σ<sub>i</sub>²) × σ<sub>A</sub> / (IC × √BR)"],
      ["σ<sub>A</sub> is in the <b>numerator</b> → lower target risk = smaller weights.", "IC is in the <b>denominator</b> → higher IC = smaller weights."],
      ["μ<sub>i</sub> = expected active return of asset i; σ<sub>i</sub>² = its active variance; BR = breadth.", "E(R<sub>A</sub>) = TC × IC × √BR × σ<sub>A</sub>; IR = TC × IC × √BR.", "Constraints (long-only, max over/underweight) reduce <b>TC</b>, not IC or breadth.", "IR = active return ÷ active risk; Sharpe uses the risk-free rate and total risk."]),
    N(1, 33, 23, "Fixed Income", "YTM vs spot rates",
      ["Spot rates: r(1) = 0.75%, r(2) = 1.20%, <b>r(3) = 1.45%</b>; forward f(3,1) = 2.25%.", "Bond: default-free, <b>1.2% annual coupon, 3 years</b>."],
      "The bond's current YTM is closest to:",
      [["1.2%", "The coupon. YTM equals the coupon only at par."], ["1.45%", "Exactly 1.445%, close to the 3-year spot rate."], ["2.25%", "A forward rate, not a YTM."]], 1, 0,
      ["Price = Σ CF<sub>t</sub> / (1 + z<sub>t</sub>)<sup>t</sup>, then solve Price = Σ CF<sub>t</sub> / (1 + y)<sup>t</sup> for y"],
      ["Price = 1.2/1.0075 + 1.2/1.012² + 101.2/1.0145³ = <b>99.285</b>.", "N = 3, PMT = 1.2, FV = 100, PV = –99.285 → <b>1.445%</b>."],
      ["YTM is a weighted average of the spot rates, dominated by the last cash flow, so it is close to the maturity spot rate.", "Upward-sloping curve → YTM slightly <b>below</b> the maturity spot rate."]),
    N(1, 34, 23, "Fixed Income", "Rolling down the yield curve",
      ["Eng expects spot rates in one year to be <b>the same as today</b>.", "r(1) = 0.75%, r(2) = 1.20%, r(3) = 1.45%; f(1,1) = 1.65%, <b>f(2,1) = 1.95%</b>."],
      "First-year return on a 3-year zero-coupon bond?",
      [["0.75%", "The 1-year spot rate: earned only if forward rates are realized."], ["1.45%", "The 3-year spot rate: an average over 3 years, not the first-year return."], ["1.95%", "= f(2,1): rolling down an unchanged curve earns the forward rate."]], 2, 0,
      ["Spot curve unchanged → 1-year return on an N-year zero = f(N – 1, 1)"],
      ["Price today: 1/1.0145³ = 0.957732.", "In one year it is a 2-year zero at the unchanged 1.20%: 1/1.012² = 0.976425.", "Return = 0.976425 / 0.957732 – 1 = <b>1.95%</b>."],
      ["Future spot rates = today's forwards → every bond earns the 1-year spot rate.", "Curve unchanged and upward sloping → longer bonds earn more (rolling down).", "Notation: f(2,1) = a 1-year rate starting 2 years from now."]),
    N(1, 35, 23, "Fixed Income", "Term structure theories",
      ["Client 1 only allows bonds of <b>3 years or less</b>. Eng expects 5-year bonds to return more but <b>still buys only 3-year bonds</b>."],
      "The restriction is most consistent with which theory?",
      [["Preferred habitat", "Investors <b>would leave</b> their habitat for enough extra return."], ["Liquidity preference", "About a term premium rising with maturity; not in the vignette."], ["Segmented markets", "Investors are unwilling or unable to leave their maturity segment."]], 2, 0,
      ["Test: <b>would they move for enough extra return?</b> No → segmented markets. Yes → preferred habitat."],
      ["A mandate or restriction that keeps the investor in one maturity → segmented markets."],
      ["Pure expectations: forwards = expected spot rates, no risk premium.", "Local expectations: every bond earns the short-term risk-free rate over a short horizon.", "Liquidity preference: term premium grows with maturity."],
      "<table class='mini'><tr><th>Theory</th><th>Clue words</th></tr><tr><td>Segmented markets</td><td>restricted, mandate, regulation, asset–liability matching</td></tr><tr><td>Preferred habitat</td><td>deviates if compensated</td></tr><tr><td>Liquidity preference</td><td>compensation for interest-rate risk</td></tr></table>"),
    N(1, 36, 23, "Fixed Income", "Key rate duration",
      ["Client 2: 1-, 3- and 5-year zeros; <b>effective duration 3.20</b>; key rate durations: <b>1-year 0.25</b>, <b>3-year 1.10</b>."],
      "The 5-year key rate duration is closest to:",
      [["1.60", "No basis (1.10 + 0.25 + 0.25); ignores the effective duration."], ["1.85", "3.20 – 0.25 – 1.10."], ["1.95", "Assumed a straight line: 1.10 + (1.10 – 0.25)."]], 1, 0,
      ["Σ key rate durations = effective duration", "%ΔP ≈ –Σ KRD<sub>k</sub> × Δr<sub>k</sub>"],
      ["5-year KRD = 3.20 – 0.25 – 1.10 = <b>1.85</b>."],
      ["A parallel shift moves all key rates equally, so the total equals the effective duration.", "Example: 1y –10bp, 5y +10bp → %ΔP ≈ –[0.25 × (–0.10%) + 1.85 × 0.10%] = –0.16%.", "A single zero's duration sits entirely in its own maturity's key rate."]),
    N(1, 37, 2, "Quant", "Unit roots & cointegration",
      ["H1: ln(PRIV) has a unit root. H2: ln(PUBL) has a unit root.", "H3: the error term of the regression between them has a unit root."],
      "The series are cointegrated if the tests:",
      [["Reject only H3", "Both series have unit roots, but the residual is stationary."], ["Reject all three", "Then neither series has a unit root."], ["Reject none", "The residual also has a unit root → not cointegrated (spurious)."]], 0, 2,
      ["Cointegrated = both series have a unit root (fail to reject H1, H2) <b>and</b> the residual is stationary (reject H3, Engle–Granger test)"],
      ["Dickey–Fuller null = 'has a unit root'. Reject → stationary.", "Both unit roots + stationary residual = cointegration.", "Reject none = both unit roots + residual unit root = spurious regression."],
      ["A single series with a unit root: first-difference it.", "AR(1) mean-reverting level = b<sub>0</sub> / (1 – b<sub>1</sub>).", "ARCH test: regress squared residuals on lagged squared residuals; a significant slope → ARCH."]),
    N(1, 40, 4, "Quant", "Feature selection (text data)",
      ["Silva wants to <b>remove noise features</b> and keep tokens that <b>occur more often in one class</b> (hot / medium / cold)."],
      "Which tokens should she select?",
      [["Lowest TF", "Rare tokens are noise to <b>remove</b>."], ["Highest MI", "High mutual information = concentrated in one class."], ["Highest DF", "Tokens in almost every document (stop words): also noise."]], 1, 0,
      ["Mutual information: 0 if a token appears equally across classes; → 1 if it appears mostly in one class"],
      ["TF / DF: vocabulary pruning removes very high and very low frequencies.", "Chi-square: tests token–class independence; high = keep.", "<b>MI</b>: how much a token says about a class; high = keep."],
      ["'More often in one class' → MI or chi-square. 'Noise / extremes' → TF, DF.", "Do not confuse selection with feature <b>engineering</b> (N-grams, NER, number replacement)."]),
    N(1, 42, 41, "Ethics", "VI(C) Referral fees",
      ["Lynch refers clients to Denton; she <b>declined</b> his offers of referral fees.", "Each year Denton <b>pays for both plane tickets</b> on their vacation. He discloses neither the offer nor the tickets."],
      "Does Denton comply with the Standards on the referrals?",
      [["Yes", "The tickets are a benefit and must be disclosed."], ["No: travel payments not disclosed", "Correct."], ["No: offer of fees not disclosed", "A declined offer is not compensation."]], 1, 0,
      ["VI(C): disclose to employer, clients and prospects any <b>compensation, consideration or benefit</b> paid to or received from others for referrals"],
      ["The tickets are consideration paid to the referrer → disclose before the clients sign.", "A declined offer involves no flow → nothing to disclose."],
      ["'Consideration' is broad: cash, gifts, trips, tickets, free services.", "Disclose to the employer <b>and</b> the referred clients, before the agreement, with nature and value."]),
    N(1, 43, 41, "Ethics", "VI(A) disclosure vs III(E) confidentiality",
      ["Denton joins XLR's pension investment committee (<b>unpaid</b>) and recommends XLR to clients.", "XLR's CEO Hunter (also a client) recommended him. Denton discloses neither the seat nor that Hunter is a client."],
      "Does Denton violate the Standards regarding the committee position?",
      [["No", "Committee service is a conflict to disclose, paid or not."], ["Yes: Hunter's client status not disclosed", "That is <b>confidential</b> (III(E)); disclosing it would be the violation."], ["Yes: appointment not disclosed", "The seat could impair objectivity (VI(A))."]], 2, 1,
      ["VI(A): avoid or fully disclose anything that could impair independence and objectivity"],
      ["Board or committee seats create three conflicts: duties to the company vs clients; pay in company securities; access to material non-public information."],
      ["Disclose <b>your own</b> conflicts; never disclose <b>another client's</b> information (III(E) exceptions: illegal activity, required by law, client permits).", "Unpaid does not mean no conflict."]),
    N(1, 44, 41, "Ethics", "VI(B) Priority of transactions",
      ["Denton recommends Bio13 to Hunter; it is <b>not suitable for other clients</b>.", "Hunter <b>asks him to wait 30 days</b> (bonus). Denton buys for himself at once (price rises temporarily), then for Hunter 30 days later."],
      "Did Denton comply when buying for his own account?",
      [["Yes", "No client trade was pending and nobody was disadvantaged."], ["No: market manipulation", "No intent to mislead; the price impact was temporary."], ["No: priority of transactions", "Hunter chose the timing; Denton did not trade ahead of him."]], 0, 2,
      ["VI(B): client trades take priority over personal trades. The violation is trading <b>ahead of a pending client trade</b> that disadvantages the client."],
      ["Ask: (1) was a client trade ready to go? (2) was the client hurt? If not, no violation."],
      ["Market manipulation (II(B)) needs <b>intent</b> to mislead or distort prices; price impact alone is not enough."]),
    // ---------------- Paper 2 ----------------
    N(2, 1, 25, "Fixed Income", "Convertible bond minimum value",
      ["Doredum convertible: par $100, <b>25 shares</b> per bond; share price <b>$3.80</b>.", "A comparable option-free bond is worth <b>$105</b>."],
      "The minimum value of the convertible today is:",
      [["$95", "The conversion value only, below the straight value."], ["$100", "Par plays no part in the minimum value."], ["$105", "The greater of conversion value ($95) and straight value ($105)."]], 2, 1,
      ["Minimum value = max(conversion value, straight bond value)", "Conversion value = share price × conversion ratio"],
      ["3.80 × 25 = $95; straight value = $105 → <b>$105</b>."],
      ["Convertible = straight bond + call option on the shares.", "Market conversion price = convertible price ÷ ratio; premium = that – share price.", "Share price far below the conversion price (busted convertible) → behaves like a bond."]),
    N(2, 2, 25, "Fixed Income", "Putable bond on a binomial tree",
      ["3% annual, 2-year, default-free bond, <b>putable at par ($100) at the end of Year 1</b>.", "Tree: Year 0 = <b>2.00%</b>; Year 1 = <b>4.64%</b> (up) or <b>3.44%</b> (down), equal probability."],
      "The value of the putable bond is closest to:",
      [["$98.04", "Left out the $3 Year-1 coupon."], ["$100.00", "Par: also the value of the same bond without the put."], ["$100.98", "Put-adjusted node values + coupon, discounted at 2%."]], 2, 0,
      ["Node value = [½(V<sub>up</sub> + C) + ½(V<sub>down</sub> + C)] ÷ (1 + r)", "Putable: V = max(value, put price) · Callable: V = min(value, call price)"],
      ["Up node: 103/1.0464 = 98.43 → put → <b>100</b>.", "Down node: 103/1.0344 = 99.57 → put → <b>100</b>.", "Year 0: (½ × 103 + ½ × 103) ÷ 1.02 = <b>100.98</b>."],
      ["Count the coupons: the Year-1 coupon must be added before discounting to Year 0.", "Test the put/call on the value <b>without</b> that node's coupon, then add the coupon.", "Value of the put = putable – straight = 100.98 – 100.00 = 0.98.", "Higher volatility → every embedded option is worth more: putable ↑, callable ↓."]),
    N(2, 6, 20, "Equity", "Normalized EPS: average ROE method",
      ["EPS (Years 1–4): 3.19, 2.21, 0.37, 2.56. BVPS: 10.90, 12.50, 12.60, <b>13.30</b> (latest).", "Years 1–4 are a full business cycle."],
      "Normalized EPS using the average ROE method?",
      [["$2.08", "The average of the four EPS figures: a different method."], ["$2.13", "Average ROE × <b>average</b> BVPS; the method uses current BVPS."], ["$2.30", "Average ROE × current BVPS."]], 2, 0,
      ["Average ROE method: normalized EPS = average ROE × <b>current</b> BVPS", "Historical average EPS method: average EPS over the cycle"],
      ["ROE = EPS ÷ BVPS: 29.3%, 17.7%, 2.9%, 19.2% → average 17.28%.", "× current BVPS 13.30 = <b>$2.30</b>."],
      ["The average ROE method reflects growth in book value.", "Normalizing matters for cyclical firms: P/E is misleading at the peak or trough.", "Rising earnings → forward P/E below trailing P/E."]),
    N(2, 8, 20, "Equity", "Relative strength",
      ["Garc: <b>27.95 → 31.05</b>, dividend $1.24. Index: <b>550.40 → 602.21</b>, dividend yield 3.4%."],
      "Garc's relative strength versus the index over the year?",
      [["1.0153", "A price-only ratio."], ["1.0168", "1 + (11.09% – 9.41%): a difference, not a ratio."], ["1.0241", "Included dividends."]], 0, 1,
      ["Relative strength = (stock ÷ index)<sub>end</sub> ÷ (stock ÷ index)<sub>start</sub> = (1 + stock price return) ÷ (1 + index price return)"],
      ["27.95 ÷ 550.40 = 0.050781; 31.05 ÷ 602.21 = 0.051560.", "0.051560 ÷ 0.050781 = <b>1.0153</b>."],
      ["Prices only, and a ratio. Above 1 = the stock beat the index.", "SUE = (actual – expected EPS) ÷ standard deviation of past forecast errors."]),
    N(2, 10, 13, "Corporate Issuers", "Target payout adjustment model",
      ["Minskar: target payout <b>75%</b>, adjustment period <b>4 years</b>, last dividend <b>$0.25</b>.", "EPS: <b>$1.30</b> (Year 1), <b>$1.10</b> (Year 2)."],
      "Expected increase in DPS in <u>Year 2</u>?",
      [["$0.10", "The Year-2 increase, starting from the Year-1 dividend."], ["$0.15", "Used a 100% payout instead of 75%."], ["$0.18", "The Year-1 increase: stopped a year early."]], 0, 2,
      ["Increase = (expected EPS × target payout – previous DPS) × adjustment factor", "Adjustment factor = 1 ÷ adjustment period = 0.25"],
      ["Year 1: (1.30 × 0.75 – 0.25) × 0.25 = 0.18125 → DPS = 0.43125.", "Year 2: (1.10 × 0.75 – 0.43125) × 0.25 = <b>0.098 ≈ $0.10</b>."],
      ["Multi-year models are a chain: each year's 'previous dividend' is the one just computed. Underline the year asked.", "Debt-funded buyback: EPS after = (earnings – after-tax interest) ÷ remaining shares; EPS rises if E/P &gt; after-tax cost of debt.", "Higher payout reduces manager–shareholder conflict but worsens shareholder–bondholder conflict."]),
    N(2, 13, 38, "Portfolio", "Parametric VaR",
      ["Fund <b>$175m</b>; expected annual return <b>8.80%</b>, standard deviation <b>14.25%</b>; 250 trading days.", "5% VaR = <b>1.65</b> standard deviations below the expected value."],
      "The 5% daily parametric VaR is closest to:",
      [["$1.52m", "Used 1 standard deviation instead of 1.65."], ["$2.54m", "(1.65σ – μ) × value, with daily figures."], ["$2.66m", "<b>Added</b> μ instead of subtracting it."]], 1, 2,
      ["VaR = (z × σ<sub>daily</sub> – μ<sub>daily</sub>) × value", "μ<sub>daily</sub> = μ ÷ 250 · σ<sub>daily</sub> = σ ÷ √250"],
      ["μ = 0.000352; σ = 0.1425 ÷ 15.811 = 0.009012.", "0.000352 – 1.65 × 0.009012 = –0.014519 → VaR = 0.014519 × $175m = <b>$2.54m</b>."],
      ["A positive expected return makes the loss <b>smaller</b>: VaR must be below zσ × value.", "The mean scales with T, the standard deviation with √T. z: 5% → 1.65, 1% → 2.33.", "Incremental VaR = change in VaR from changing a position; conditional VaR = average loss beyond VaR."]),
    N(2, 17, 5, "Economics", "Cross rates & triangular arbitrage",
      ["Interbank USD/EUR: <b>1.1416 / 1.1421</b>; JPY/USD: <b>104.62 / 104.68</b>.", "Dealer JPY/EUR: <b>119.38 / 119.40</b>."],
      "Is there an arbitrage opportunity?",
      [["No", "There is: the dealer's offer is below the interbank bid."], ["Buy EUR interbank, sell to the dealer", "Reversed: buys at 119.555 and sells at 119.38, a loss."], ["Buy EUR from the dealer, sell interbank", "Buy at the dealer's offer 119.40, sell at the implied bid 119.43."]], 2, 1,
      ["Implied JPY/EUR bid = 1.1416 × 104.62 = 119.434", "Implied JPY/EUR offer = 1.1421 × 104.68 = 119.555"],
      ["Interbank 119.434 / 119.555; dealer 119.38 / 119.40.", "Dealer <b>offer</b> (119.40) &lt; interbank <b>bid</b> (119.434) → buy EUR from the dealer, sell interbank."],
      ["Arbitrage exists only when one market's bid is above the other's offer: buy at the low offer, sell at the high bid.", "Cross rates: multiply bid × bid and offer × offer. Inverting a quote swaps bid and offer."]),
    N(2, 19, 5, "Economics", "Carry trade all-in return",
      ["Borrow USD at <b>1.00%</b>, invest in BRL at <b>9.75%</b> for 1 year.", "BRL/USD: <b>5.1300</b> now, <b>5.2000</b> in one year."],
      "The all-in return in USD terms is closest to:",
      [["7.27%", "BRL proceeds converted back, minus the loan <b>with interest</b>."], ["8.27%", "Forgot the 1% borrowing cost."], ["8.75%", "The interest differential only: ignores the currency move."]], 0, 1,
      ["All-in = (1 + i<sub>BRL</sub>) × (S<sub>0</sub> / S<sub>1</sub>) – (1 + i<sub>USD</sub>), with S quoted as BRL/USD"],
      ["$1,000 → BRL 5,130 → × 1.0975 = BRL 5,630.18 → ÷ 5.20 = $1,082.73.", "Repay $1,010 → profit $72.73 = <b>7.27%</b>."],
      ["Quick check: 9.75% – 1.00% – 1.36% (BRL depreciation) ≈ 7.4%.", "A carry trade profits when the high-yield currency falls by less than the interest differential.", "Risk: negative skew; carry trades crash in risk-off periods."]),
    N(2, 20, 5, "Economics", "Currency crisis warning signs",
      ["Condition 1: <b>slight decline</b> in foreign investment in equities.", "Condition 2: broad money growth and a <b>decline</b> in M2 / bank reserves.", "Condition 3: <b>sizable decline</b> in FX reserves relative to daily FX turnover."],
      "Which is most likely a warning sign of a currency crisis?",
      [["Condition 1", "The warning sign is <b>large inflows</b> of foreign capital beforehand."], ["Condition 2", "Right indicator, wrong direction: M2 / bank reserves <b>rises</b> before a crisis."], ["Condition 3", "FX reserves fall sharply as a crisis approaches."]], 2, 1,
      ["Warning signs: large capital inflows · FX reserves falling · M2 / bank reserves rising · overvalued currency · worsening terms of trade · fixed exchange rate · banking crisis · higher inflation"],
      ["Check both the indicator <b>and its direction</b>."],
      ["These questions often list the right indicator moving the wrong way."]),
    N(2, 22, 8, "FSA", "Tax effect of share-based pay (US GAAP)",
      ["A large restricted stock grant vested. <b>Settlement price &gt; grant-date price</b>. Sigmar reports under <b>US GAAP</b>."],
      "The price difference will most likely:",
      [["Decrease income tax expense", "The tax deduction exceeds the book expense: an excess tax benefit."], ["Have no effect", "Under US GAAP the difference goes through the income statement."], ["Increase income tax expense", "True only if the settlement price were below the grant price."]], 0, 2,
      ["Book expense = value at <b>grant</b> · Tax deduction = value at <b>settlement</b>", "Settlement &gt; grant → excess tax benefit → tax expense ↓"],
      ["Deduction larger than the cumulative expense → taxable income and tax expense fall."],
      ["IFRS: an excess tax benefit goes to <b>equity</b>, not income tax expense.", "Price down between grant and settlement → shortfall → tax expense ↑."]),
    N(2, 25, 28, "Derivatives", "Equity swap value after initiation",
      ["Receive-equity, pay-fixed 3-year swap, annual reset; notional <b>€1,000,000</b>; fixed rate set at <b>2.3%</b>.", "6 months later the index is <b>104.8</b> (was 100). The market fixed rate of 1.8% is a decoy.", "PV factors: 0.5y 0.99108 · 1.5y 0.97371 · 2.5y 0.95694."],
      "The no-arbitrage value of the swap position is closest to:",
      [["–19,200", "Treated the €1m notional as worth €1m today instead of discounting it."], ["23,860", "Equity leg minus the fixed leg valued as a bond."], ["33,262", "Compared with a new par swap rate: not how an existing swap is valued."]], 1, 0,
      ["V = NA × (S<sub>t</sub> / S<sub>reset</sub>) – [FS × NA × ΣPV + NA × PV<sub>last</sub>]"],
      ["Fixed leg = 22,795 + 22,395 + 978,950 = <b>1,024,140</b>.", "Equity leg = 1,000,000 × 104.8 ÷ 100 = <b>1,048,000</b>.", "Value = <b>+23,860</b>."],
      ["After initiation the fixed rate never changes; new rates enter only through the new PV factors.", "Value each leg as a bond <b>including</b> the notional.", "At initiation the fixed rate = (1 – last PV factor) ÷ ΣPV factors, annualized."]),
    N(2, 28, 28, "Derivatives", "Value of a forward after initiation",
      ["9-month forward on Furblag at <b>F<sub>0</sub> = €123</b>.", "6 months later: the dividend has been paid, <b>S<sub>t</sub> = €131</b>; rate 1.6% (annual compounding); <b>3 months remain</b>."],
      "The forward's value six months after initiation is closest to:",
      [["7.97", "Discounted the whole (S<sub>t</sub> – F<sub>0</sub>); the spot price is already today's value."], ["8.49", "S<sub>t</sub> – PV(F<sub>0</sub>) over the 3 months left."], ["8.97", "Discounted over the 6 months elapsed."]], 1, 0,
      ["V<sub>t</sub> (long) = S<sub>t</sub> – PV(remaining dividends) – F<sub>0</sub> / (1 + r)<sup>T–t</sup>"],
      ["No dividends remain. PV(F<sub>0</sub>) = 123 ÷ 1.016<sup>0.25</sup> = 122.51.", "V = 131 – 122.51 = <b>8.49</b>."],
      ["Only F<sub>0</sub> is discounted, over the time <b>remaining</b> (T – t).", "Short forward value = –(long value).", "Market forward above the no-arbitrage price → sell forward, borrow, buy spot; below → reverse."]),
    N(2, 33, 41, "Ethics", "III(D) Performance presentation",
      ["The composite return <b>includes terminated accounts</b>, but the report does <b>not state when they were terminated</b>. No GIPS claim."],
      "Does Brown violate the Standards?",
      [["No", "Missing termination dates make the presentation incomplete."], ["Yes: termination dates", "Terminated accounts are fine with clear termination dates."], ["Yes: accounts included", "Including them is <b>allowed</b> (it avoids survivorship bias)."]], 1, 2,
      ["III(D): performance information must be <b>fair, accurate and complete</b>"],
      ["Including terminated accounts is fine only with a clear indication of when they were terminated."],
      ["III(D) applies even without a GIPS claim.", "Typical breaches: showing only the best accounts, unlabeled simulated results, gross vs net unclear."]),
    N(2, 35, 41, "Ethics", "III(A) Directed brokerage & soft dollars",
      ["Cliff directs trades to Brinkman; Brown <b>tells Cliff in writing</b> that Brinkman may not give best execution.", "Brinkman gives soft dollars on Cliff's trades; Brown uses them for <b>Metulla's institutional clients</b>."],
      "Brown violates the Standards due to:",
      [["Soft dollars only", "Commissions are Cliff's asset: soft dollars must benefit Cliff."], ["Best execution only", "Cliff chose the broker and was told in writing."], ["Both", "Only the soft-dollar use is a breach."]], 0, 1,
      ["III(A): brokerage is the client's asset. Directed brokerage is fine with disclosure of the best-execution risk; soft dollars must benefit the client who generated them."],
      ["Disclosure covers the best-execution issue; using Cliff's commissions for other clients breaches loyalty."],
      ["Directed brokerage = client's choice → disclose, then follow it.", "Using one client's commissions to benefit other clients or the firm = breach."]),
    N(2, 39, 41, "Ethics", "IV(C) Supervisors' compliance procedures",
      ["Initiative 1: periodically update procedures · Initiative 2: educate personnel <b>only when they join</b> · Initiative 3: issue periodic reminders."],
      "Which initiative is <u>not</u> consistent with the Standards?",
      [["Initiative 1", "Recommended practice."], ["Initiative 2", "Education must be <b>continual</b>, not one-off."], ["Initiative 3", "Periodic reminders are recommended."]], 1, 2,
      ["IV(C): the supervisor should distribute the program, update it, <b>continually educate</b>, issue reminders, review conduct and discipline"],
      ["'Only when they join' fails the 'continually educate' requirement."],
      ["Words like 'only', 'once', 'when they join' are red flags.", "No adequate system → decline supervisory responsibility in writing.", "Underline 'not' in the stem before reading the options."]),
    N(2, 42, 30, "Alternatives", "Commodity futures total return",
      ["Fully collateralized long 3-month cocoa future at <b>$3,294</b>.", "3 months later the old contract is at <b>$3,285</b>; rolled into a new 3-month contract at <b>$3,260</b>. Collateral earns <b>5.0% annualized</b>."],
      "The 3-month total return is closest to:",
      [["0.2%", "Roll return with the sign reversed."], ["1.7%", "Price + roll + collateral for 3 months."], ["5.5%", "Used the full annual collateral return."]], 1, 2,
      ["Total return = price return + roll return + collateral return", "Roll = (near price – new far price) ÷ near price · Collateral = rate × months ÷ 12"],
      ["Price: (3,285 – 3,294) ÷ 3,294 = –0.27%.", "Roll: (3,285 – 3,260) ÷ 3,285 = +0.76%.", "Collateral: 5.0% × 3/12 = 1.25% → total <b>1.74%</b>."],
      ["Convert annual rates to the holding period.", "Backwardation → positive roll for longs; contango → negative.", "Basis = spot – futures; calendar spread = near – far."])
    ,
    // ---------------- CFAI 27 Credit Default Swaps ----------------
    C(2, "Shape of the credit curve",
      ["Watt: 'There is severe near-term stress in the financial markets, and UNAB's credit curve clearly reflects the difficult environment.'"],
      "The shape of UNAB's credit curve is most likely:",
      [["Flat", "A flat curve means a constant hazard rate."], ["Upward-sloping", "Default probability is higher in the <b>later</b> years: the normal shape, not stress."], ["Downward-sloping", "Default probability is higher in the <b>earlier</b> years: near-term stress."]], 2, 1,
      ["Upward-sloping: default risk higher in later years (normal)", "Downward-sloping: default risk higher in earlier years (near-term stress)", "Flat: constant hazard rate"],
      ["'Severe near-term stress' → short-dated spreads exceed long-dated spreads → <b>downward-sloping</b>."],
      ["A normal credit curve slopes up: more time, more uncertainty.", "Downward-sloping curves are rare and follow a near-term crisis.", "The slope compares short-term and long-term credit risk, not the level of spreads."]),
    C(12, "Long/short trade from economic outlooks",
      ["Outlook 1: the European economy will weaken.", "Outlook 2: the US economy will strengthen relative to Canada.", "Outlook 3: credit quality of electric car makers will improve relative to traditional car makers."],
      "A profitable long/short trade would be to:",
      [["Sell protection on Canadian CDX IG, buy protection on US CDX IG", "Reversed against Outlook 2: the US is the stronger one."], ["Buy protection on iTraxx Crossover, sell protection on iTraxx Main", "Weaker Europe: high-yield spreads widen more than investment-grade ones."], ["Buy protection on an electric car CDS, sell protection on a traditional car CDS", "Reversed against Outlook 3."]], 1, 0,
      ["<b>Sell</b> protection on the credit expected to improve; <b>buy</b> protection on the one expected to weaken", "Economy weakens → buy high-yield index protection, sell investment-grade index protection (reverse if it strengthens)"],
      ["Outlook 1 (Europe weakens) → buy iTraxx Crossover (high yield), sell iTraxx Main (investment grade).", "A and C each reverse the direction implied by Outlook 2 and Outlook 3."],
      ["Check the direction of every option against the outlook before choosing.", "Index families: CDX = North America, iTraxx = Europe/Asia; Main = investment grade, Crossover = high-yield-like."]),
    C(13, "Curve trade for a steepening view",
      ["Chan expects a <b>steepening</b> of the US credit curve in the short term."],
      "The best curve trade is:",
      [["Buy protection on 20y CDX and buy protection on 2y CDX", "Not a curve trade: both legs are bought."], ["Buy protection on 20y CDX and sell protection on 2y CDX", "Short the long end, long the short end: gains when long-term risk rises relative to short-term."], ["Sell protection on 20y CDX and buy protection on 2y CDX", "That is a flattener: the opposite view."]], 1, 2,
      ["Steepening: <b>buy</b> long-dated, <b>sell</b> short-dated protection", "Flattening: <b>sell</b> long-dated, <b>buy</b> short-dated protection"],
      ["A steeper curve = long-term credit risk rises relative to short-term.", "Buy 20-year protection (gains as long spreads widen), sell 2-year protection."],
      ["Same rule as Mock 1 Q4: flattener = buy short / sell long protection.", "A curve trade uses opposite positions at two maturities of the same entity or index."]),
    C(14, "Equity-versus-credit trade (debt-funded bid)",
      ["Delta may bid, at a premium, for all of Zega's shares. Both are highly levered.", "Delta will fund it with new equity and 5- and 10-year senior debt, <b>raising its debt ratio significantly</b>."],
      "A profitable equity-versus-credit trade involving Delta and Zega is to:",
      [["Short Zega shares and buy protection on Delta (10y CDS)", "A premium bid pushes Zega's shares <b>up</b>: the short loses."], ["Go long Zega shares and buy protection on Delta (5y CDS)", "Target shares rise; the acquirer's added debt widens its CDS spread."], ["Go long Delta shares and buy protection on Delta (5y CDS)", "The profit leg is Zega's shares; nothing here makes Delta's shares rise."]], 1, 2,
      ["Target's shares ↑ (bid at a premium)", "Acquirer's debt ↑ → default risk ↑ → CDS spread ↑ → protection buyer gains"],
      ["Zega (target): premium bid → share price ↑ → <b>go long Zega</b>.", "Delta (acquirer): much more debt → credit worsens → <b>buy protection on Delta</b>."],
      ["Debt-funded acquisition: the target's equity gains, the acquirer's credit deteriorates.", "Equity-versus-credit: pair the entity expected to gain (equity) with the one expected to weaken (credit)."]),
    C(16, "Profit from a CDS spread move",
      ["Wallace bought AUD100m of 5-year protection (coupon 5%, spread 600 bps, <b>duration 4</b>).", "One month later the spread <b>widens by 400 bps</b>."],
      "The estimated profit (AUD m) is closest to:",
      [["10", "Added the 400 bps change to the 600 bps spread (10%)."], ["16", "400 bps × 4 = 16%; × AUD100m."], ["20", "Used the maturity (5) instead of the duration (4)."]], 1, 0,
      ["Price change ≈ Δ spread × duration", "Profit ≈ Δ spread × duration × notional (buyer gains when spreads widen)"],
      ["0.04 × 4 = 16% of AUD100m = <b>AUD16m</b>."],
      ["Use the <b>change</b> in spread, never the sum of spreads.", "Use the CDS <b>duration</b>, not the maturity.", "Same formula as the Orion trade: 50 bps × 3.9 × £6m = £117,000."]),
    C(18, "LBO: both legs in the same direction",
      ["Wallace expects Devotion to do a leveraged buyout: it issues large amounts of debt to buy back all of its public shares."],
      "Which trade is most profitable?",
      [["Sell protection and buy the stock", "The stock gains but the CDS leg loses as the spread widens."], ["Buy protection and sell the stock", "The CDS leg gains but the short stock loses (price rises in the buyout)."], ["Buy protection and buy the stock", "Both legs gain: stock rises, spread widens."]], 2, 1,
      ["LBO: share price ↑ (buyout premium) <b>and</b> credit spread ↑ (much more debt)"],
      ["Shareholders are bought out at a premium → buy the stock.", "Debt rises sharply → default risk ↑ → buy protection."],
      ["Unlike the usual pairing, both legs move together here, so go long both.", "Evaluate each leg separately: does it gain or lose?"]),
    C(19, "Reading a curve trade from the positions",
      ["Tundra entered CDS 1 and CDS 2 on the same date for the same reference entity.", "CDS 1: protection <b>buyer</b>, remaining maturity <b>2 years</b>. CDS 2: protection <b>seller</b>, <b>5 years</b>."],
      "Tundra's view on the reference entity's credit curve was that it would:",
      [["Flatten", "Buy short-dated + sell long-dated protection = flattener."], ["Remain unchanged", "A curve trade expresses a view on the curve changing."], ["Steepen", "A steepener needs buy long / sell short."]], 0, 2,
      ["Buy <b>short</b> + sell <b>long</b> protection = flattener", "Buy <b>long</b> + sell <b>short</b> protection = steepener"],
      ["CDS 1 (2y): bought. CDS 2 (5y): sold → short end bought, long end sold → expects <b>flattening</b>."],
      ["Read buyer/seller and the maturity of each leg, then apply the rule.", "Same rule as Mock 1 Q4, CDS Q13 and Q33."]),
    C(25, "Naked CDS: where the profit comes from",
      ["Bregen expects Apollo's credit to <b>improve</b> over five years.", "Apollo 5y bond spread 200 bps; 5y CDS upfront premium 400 bps, coupon 1.00%, duration 4. Priore proposes a naked CDS: FIQ buys, <b>BLB sells</b> protection."],
      "If Bregen's view is right, will the trade be profitable for BLB?",
      [["No", "The protection seller gains when the credit improves."], ["Yes, because of valuation disparities", "No disparity: (200 – 100) × 4 = 400 bps, equal to the premium."], ["Yes, because of changing expectations about credit risk", "Improving credit makes the CDS worth less, which helps the seller."]], 2, 1,
      ["Upfront premium ≈ (credit spread – coupon) × duration = (200 – 100) × 4 = 400 bps"],
      ["BLB is the protection <b>seller</b> = long the credit.", "If Apollo improves, spreads tighten and the CDS value falls: BLB gains.", "No basis here, so the profit comes from the credit view."],
      ["A naked CDS takes a credit view without owning the bond.", "Seller profits when credit improves; buyer when it worsens.", "Two sources of profit: a valuation disparity (basis) or a change in credit expectations. Check which one applies."]),
    C(27, "Basis: is the bond's credit compensation too low?",
      ["MRR = 2.00%. Three-year bond yield / CDS spread: Webster 5.00% / 3.00%; Hamsco 5.50% / 3.25%; Levrom 5.25% / 3.50%."],
      "For which company's bond is the credit risk compensation too low?",
      [["Webster", "Bond spread 3.00% = CDS 3.00%: fair."], ["Hamsco", "Bond spread 3.50% &gt; CDS 3.25%: compensation too <b>high</b>."], ["Levrom", "Bond spread 3.25% &lt; CDS 3.50%: compensation too low."]], 2, 1,
      ["Bond credit spread = bond yield – MRR", "Basis = CDS spread – bond spread"],
      ["Webster: 5.00 – 2.00 = 3.00% = CDS → fair.", "Hamsco: 5.50 – 2.00 = 3.50% &gt; 3.25% → bond pays too much (negative basis).", "Levrom: 5.25 – 2.00 = 3.25% &lt; 3.50% → bond pays too little (positive basis)."],
      ["Negative basis (bond spread &gt; CDS): buy the bond and buy protection (CDS Q6 and Q22).", "Positive basis: short the bond and sell protection (CDS Q34).", "Always subtract MRR from the bond yield first."]),
    C(29, "Types of CDS: single-name",
      ["Vasquez: 'A single-name CDS is on <b>any obligation</b> of a specific reference entity.' She also describes index CDSs (multiple companies) and tranche CDSs (losses covered only up to a specific level)."],
      "Vasquez is least likely correct about:",
      [["Index CDSs", "Described correctly."], ["Tranche CDSs", "Described correctly."], ["Single-name CDSs", "Wrong: only obligations ranking <b>equally</b> with the reference obligation are covered."]], 2, 1,
      ["Single-name CDS covers the entity's obligations that rank <b>equal</b> in priority to the reference obligation (typically senior unsecured)"],
      ["Vasquez ignored seniority: a subordinated bond is not covered by a CDS on a senior unsecured reference obligation."],
      ["Index CDS (CDX, iTraxx): hedges multiple exposures fully. Tranche CDS: only partially, up to a level.", "The cheapest-to-deliver bond is chosen among equally ranking obligations."]),
    C(30, "Credit events in the United States",
      ["Vasquez: bankruptcy is a credit event. Gorman: failure to pay is a credit event. Kumar: a <b>change in seniority</b> (restructuring) triggers a payment by the seller."],
      "Who is least likely correct (credit events in the US)?",
      [["Kumar", "Restructuring is not a credit event in the US."], ["Gorman", "Failure to pay is a credit event everywhere."], ["Vasquez", "Bankruptcy is a credit event everywhere."]], 0, 2,
      ["Credit events: bankruptcy · failure to pay · restructuring", "Restructuring counts as a credit event <b>outside</b> the US, not in the US"],
      ["Kumar: a change in seniority does not trigger the CDS in the US.", "Bankruptcy and failure to pay trigger a payment in the US and elsewhere."],
      ["Failure to pay needs no bankruptcy filing and works even on a subordinated bond (CDS Q3).", "Restructuring is the one that differs by region."]),
    C(31, "CDS price per 100 par",
      ["Company A 5-year single-name CDS: credit spread <b>194 bps</b>, coupon <b>100 bps</b>, duration <b>4.57</b>."],
      "The price per 100 par is closest to:",
      [["95.70", "100 – (1.94 – 1.00) × 4.57."], ["99.06", "Forgot to multiply by the duration."], ["104.29", "Reversed the sign: (coupon – spread)."]], 0, 1,
      ["Upfront premium ≈ (credit spread – coupon) × duration", "CDS price per 100 par = 100 – upfront premium"],
      ["(1.94% – 1.00%) × 4.57 = 4.30%.", "Price = 100 – 4.30 = <b>95.70</b>."],
      ["Spread above the coupon → protection buyer pays upfront → price below 100.", "Spread below the coupon → price above 100 (buyer receives upfront)."]),
    C(32, "Long/short with index CDS in a stronger economy",
      ["The US economy is expected to strengthen: high-yield CDS spreads tighten by <b>100 bps</b>, investment-grade by <b>8 bps</b>.", "CDX NA IG: duration 4.76. CDX NA HY: duration 4.34."],
      "An appropriate long/short trade is to:",
      [["Sell CDX NA IG and buy CDX NA HY", "Right only if the economy weakens."], ["Sell CDX NA HY and buy CDX NA IG", "HY tightens far more, so the HY seller gains more than the IG buyer loses."], ["Sell Company A CDS and buy Company B CDS", "A is investment grade (100 bp coupon), B high yield (500 bp): this fits a weakening economy."]], 1, 0,
      ["Sell protection → gains when spreads tighten: gain ≈ Δ spread × duration × notional", "Strong economy: sell HY protection, buy IG protection · weak economy: the reverse"],
      ["Sell HY: 1.00% × 4.34 = +4.34% of notional.", "Buy IG: 0.08% × 4.76 = –0.38% of notional.", "Net ≈ <b>+3.96%</b>."],
      ["The coupon shows the class: 100 bp ≈ investment grade, 500 bp ≈ high yield.", "Same logic as Q12, reversed direction for the economic view."]),
    C(33, "Checking each leg of a curve trade",
      ["Company A's credit curve is expected to <b>flatten</b>; Company B's to <b>steepen</b>.", "Kumar: sell A 10y and buy A 5y; buy B 10y and sell B 5y."],
      "Is Kumar's response most likely correct?",
      [["Yes", "Both legs follow the rules."], ["No: wrong about Company A", "Selling 10y and buying 5y is a flattener: correct for A."], ["No: wrong about Company B", "Buying 10y and selling 5y is a steepener: correct for B."]], 0, 1,
      ["Flattener: <b>sell</b> long-dated, <b>buy</b> short-dated protection", "Steepener: <b>buy</b> long-dated, <b>sell</b> short-dated protection"],
      ["Company A flattens → sell 10y, buy 5y ✓.", "Company B steepens → buy 10y, sell 5y ✓."],
      ["Test each leg against the rule before doubting the statement.", "Same rule as Mock 1 Q4, CDS Q13 and Q19."]),
    C(34, "Basis trade: which side to take",
      ["Company A 5y bond credit risk premium <b>85.40 bps</b>; Company B <b>205.60 bps</b>.", "The 5y CDS spreads (from the exhibit, as converted in the solution): A ≈ <b>193.45 bps</b>, B ≈ <b>165.29 bps</b>."],
      "Which trade is most appropriate? Go long:",
      [["Company B 5y CDS and short Company B 5y bonds", "Backwards: B's bond spread is above its CDS spread, so buy the bond and buy protection."], ["Company A 5y CDS and short Company A 5y bonds", "A's bond spread is below its CDS spread: short the bond, sell protection."], ["Company A bonds and CDS, short Company B bonds and CDS", "Reversed on both companies."]], 1, 0,
      ["Bond spread &gt; CDS spread (negative basis): buy the bond, buy protection", "Bond spread &lt; CDS spread (positive basis): short the bond, sell protection"],
      ["Company A: 85.40 &lt; 193.45 → short the A bond and go long the A CDS (sell protection).", "Company B: 205.60 &gt; 165.29 → buy the B bond and buy protection."],
      ["'Go long a CDS' = <b>sell</b> protection; 'go short a CDS' = <b>buy</b> protection. Watch the wording.", "Same comparison as Q27 (bond spread vs CDS spread)."])
    ,
    // ---- answered correctly, but guessed or closely related ----
    G(1, "Cash vs physical settlement",
      ["Deem owns a $10m senior unsecured UNAB bond (Bond 2) and bought $10m of protection on it. A credit event occurs.", "Bond 1: 2y senior unsecured, <b>40%</b> of par · Bond 2: 5y senior unsecured, <b>50%</b> (Deem's bond) · Bond 3: 5y subordinated, 20%."],
      "Which settlement should Watt recommend?",
      [["Cash settlement", "Cash: (1 – 40%) × $10m = $6m, plus selling Bond 2 at 50% = $5m → <b>$11m</b>."], ["Physical settlement", "Deliver Bond 2 and receive only par: $10m."], ["Indifferent", "Cash is $1m better."]], 0, 0,
      ["Cash payout = notional × (1 – recovery rate of the cheapest-to-deliver bond)", "Physical settlement: deliver a bond, receive par"],
      ["CTD = Bond 1 (40%, senior unsecured). Bond 3 is subordinated, so it is not eligible.", "Cash: $6m + sale of Bond 2 at $5m = <b>$11m</b>. Physical: <b>$10m</b>."],
      ["Own bond trades <b>above</b> the CTD → cash settlement is better. Own bond is the CTD → indifferent.", "Compare total proceeds under each route."]),
    G(3, "Is it a credit event?",
      ["On 1 July UNAB fails to pay scheduled interest on its <b>subordinated</b> unsecured obligation after the grace period. It has <b>not</b> filed for bankruptcy."],
      "Did UNAB experience a credit event?",
      [["Yes", "Failure to pay is a credit event, with or without a bankruptcy filing."], ["No: it did not file for bankruptcy", "Any one of the credit events is enough."], ["No: it was a subordinated bond", "Failure to pay on <b>any</b> outstanding obligation counts after the grace period."]], 0, 0,
      ["Credit events: bankruptcy · failure to pay · restructuring"],
      ["A missed payment after the grace period = failure to pay → credit event."],
      ["Failure to pay needs no bankruptcy filing.", "The recovery rate for a senior CDS is still set by the cheapest-to-deliver <b>senior</b> bond (CDS Q1)."]),
    G(5, "Closing out a protection purchase",
      ["Deem bought 10-year protection on Kand (spread 700 bps, coupon 5%). Two months later the spread has <b>increased by 200 bps</b>; Deem closes out with an offsetting contract."],
      "The offsetting contract will most likely result in:",
      [["A loss on the CDS", "A loss would need the spread to tighten."], ["A profit on the CDS", "Protection buyer = short credit; the spread widened → gain."], ["Neither a loss nor a profit", "The spread moved, so there is a gain."]], 1, 1,
      ["Protection buyer gains when spreads widen, loses when they tighten", "Close out = enter the opposite trade (sell protection) and lock in the gain"],
      ["Bought protection at 700 bps; now sells it at 900 bps → receives more premium than it pays.", "Profit ≈ Δ spread × duration × notional = 2% × 7 = about 14% of notional."],
      ["Same profit formula as CDS Q16.", "Closing a position means doing the opposite trade."]),
    G(6, "Basis trade profit on convergence",
      ["Tollunt 5-year bond yields <b>7%</b>; a comparable CDS has a spread of <b>4.25%</b>; MRR = <b>2.5%</b>.", "The basis trade buys both the bond and the protection."],
      "If the bond and CDS markets converge, the profit is closest to:",
      [["0.25%", "Bond spread 4.50% – CDS spread 4.25%."], ["1.75%", "Subtracted MRR from the CDS spread (4.25 – 2.50)."], ["2.75%", "Subtracted the CDS spread from the bond <b>yield</b> (7.00 – 4.25)."]], 0, 0,
      ["Bond credit spread = bond yield – MRR", "Profit on convergence = |bond spread – CDS spread|"],
      ["7.00% – 2.50% = 4.50% bond spread.", "4.50% – 4.25% = <b>0.25%</b>."],
      ["Never compare a bond yield with a CDS spread: subtract MRR first.", "Bond spread &gt; CDS spread (negative basis): buy the bond and buy protection (Q22, Q27, Q34)."]),
    G(7, "Compliance requirement for trading CDS",
      ["The Fund wants to trade CDS with SGS, which follows ISDA protocols. The Fund must first satisfy compliance requirements."],
      "The Fund is most likely required to:",
      [["Set a notional amount", "A term of each trade, not a compliance requirement."], ["Post an upfront payment", "Depends on the spread and coupon of each trade."], ["Sign an ISDA master agreement", "Signed once, before any CDS transaction."]], 2, 2,
      ["ISDA master agreement: signed before the first trade; every CDS then follows ISDA specifications"],
      ["The compliance requirement is the legal agreement that governs all trades."],
      ["Standardized CDS have a standard fixed coupon (usually 100 or 500 bps); the gap to the market spread is settled with an upfront payment.", "Notional and upfront premium are per-trade terms."]),
    G(8, "Which type of CDS hedges many exposures",
      ["Smith wants to <b>fully hedge multiple fixed-income exposures at the same time</b> across a large, diversified fund."],
      "Which CDS should Chan recommend?",
      [["CDS index", "Covers many names: a full hedge (CDX, iTraxx)."], ["Tranche CDS", "Covers many names, but only up to a loss level: a partial hedge."], ["Single-name CDS", "One reference entity only."]], 0, 0,
      ["Single-name: one entity · Index: many entities, full cover · Tranche: many entities, losses between set levels only"],
      ["Many exposures + full hedge → index."],
      ["CDX = North America, iTraxx = Europe/Asia.", "A single-name CDS covers only obligations ranking equal to the reference obligation (Q29)."]),
    G(22, "Basis trade: bond spread above CDS spread",
      ["A local company is expected to do an LBO (debt-funded buyback of its shares). Its 5y senior unsecured bond spread has risen to <b>450 bps</b>; a comparable 5y CDS trades at <b>400 bps</b>.", "Pereira expects the two spreads to <b>converge</b>."],
      "Which trade is consistent with his belief?",
      [["Buy bonds and sell protection", "Long credit on both legs: not a basis trade; the profit would not come from convergence."], ["Buy bonds and buy protection", "Buy the cheap bond, buy the cheap protection; capture the 50 bps gap."], ["Sell bonds and buy protection", "Reversed: shorts the cheap bond."]], 1, 1,
      ["Bond spread &gt; CDS spread (negative basis): buy the bond and buy protection"],
      ["Bond spread 450 bps → bond price too low → buy.", "CDS spread 400 bps → protection too cheap → buy.", "If the spreads converge, the trade captures the difference."],
      ["The trade is largely credit-neutral: the profit comes from convergence.", "Same as Q6, Q27, Q34."])
    ,
    // ---------------- Test bank: Corporate Issuers 1–21 ----------------
    T(2, 14, "Ownership and voting: which conflict arises",
      ["SunnyWay Energy: 1 million shares, 80% owned by dispersed investors (none above 5%). Ruling family owns 20% of the shares.", "Class A shares (ruling family) carry <b>5 votes</b> each, Class B shares 1 vote: the family holds 55% of the votes. The CEO is a shareholder (an insider)."],
      "Which conflict is most likely to arise?",
      [["Principal-principal: the CEO position is held by a shareholder", "A shareholder-CEO (insider) has an incentive to improve long-term performance, so interests are aligned."], ["Principal-agent: shareholders cannot exercise enough control over managers", "Controlling shareholders have strong, concentrated voting power, so they do control managers."], ["Principal-principal: controlling shareholders' interests may differ from other shareholders'", "Dispersed ownership but concentrated voting power."]], 2, 0,
      ["Dispersed ownership + dispersed voting → principal-agent conflict (managers vs shareholders)", "Concentrated voting power (e.g. dual-class shares) → principal-principal conflict (controlling vs minority shareholders)"],
      ["Votes: 200,000 Class A shares × 5 = 1,000,000 of 1,800,000 votes = 55%.", "Ownership is dispersed (20% owned by the family) but voting power is concentrated.", "Control over managers is strong → principal-agent conflict is small; the issue is controlling vs other shareholders."],
      ["Share ownership % does not show who has control: dual-class structures give a minority class the votes.", "An insider-shareholder CEO is usually aligned with other shareholders, not a source of conflict."]),
    T(3, 14, "Which committee composition undermines governance",
      ["SunnyWay's board: 7 members, 5 nonexecutive, chaired by an independent director (no CEO duality). CEO and CFO sit on the board.", "Remuneration committee: 2 nonexecutive directors + the <b>CEO</b>. Governance committee: 2 nonexecutive directors + the <b>CFO</b>."],
      "Which most likely undermines SunnyWay's governance practices?",
      [["The composition of the remuneration committee", "The CEO sits on the committee that sets pay: its independence is (or appears) compromised."], ["The composition of the remuneration and governance committees", "The governance committee's work does not require full independence, so the CFO there does not undermine it."], ["The presence of executive directors on the board and the composition of both committees", "A board needs a minimum number of independent directors, not all; executive directors add insight, and the board is well balanced."]], 0, 2,
      ["Remuneration, audit and nomination committees should be independent: they decide on matters where management has a conflict of interest", "Board: a minimum number of independent directors, not necessarily all"],
      ["CEO on the remuneration committee → the CEO helps decide executive pay: independence compromised.", "CFO on the governance committee: its focus does not require full independence.", "5 of 7 nonexecutive and an independent chair: no CEO duality, balanced board."],
      ["CEO duality = the CEO also chairs the board: a red flag, but not present here.", "Executive directors on a board are normal and useful."]),
    T(5, 14, "What an activist shareholder tries to do",
      ["FoodShop has dispersed ownership and equal voting shares. Star Fund, a large mutual fund and activist shareholder, has aggressively built a <b>5%</b> stake."],
      "Which is most accurate about shareholder activism?",
      [["Star Fund will try to influence the company to adopt better governance practices", "The objective of an activist is to influence the company to act in a desired way."], ["Star Fund will try to accumulate majority ownership to control board decisions", "It owns only 5% with no sign of seeking a majority; activists do not need a majority to influence decisions."], ["Star Fund will try to get a board representative and push for decisions that maximize the fund's value", "An activist wants to influence the company, not to maximize the fund's value at the company's expense."]], 0, 2,
      ["Activist shareholder: uses a minority stake and engagement to influence the company (governance, strategy, value drivers)"],
      ["Activists need resources and experience to form an informed judgment when using shareholder rights.", "They do not need majority ownership; their aim is to change how the company acts."],
      ["Institutional investors (mutual funds, pension funds, insurers, hedge funds) promote good governance by monitoring the board and management."]),
    T(6, 14, "Steps in integrating ESG factors",
      ["Grand tells Johansberg to look at quantitative and qualitative factors, analyze historical and forecasted trends, consider industry-specific factors, and undertake a peer analysis."],
      "Which is most accurate about Grand's statement on ESG analysis factors?",
      [["The statement is correct", "Each element is part of ESG integration."], ["Incorrect: peer analysis is not relevant", "Peer analysis positions the company against competitors and the industry and shows risks."], ["Incorrect: qualitative factors and historical trends are not relevant", "Qualitative factors and historical analysis are important parts of the integration."]], 0, 1,
      ["ESG integration: identify material quantitative and qualitative factors → analyze them historically, going forward and relative to peers → adjust the financial statements and valuation"],
      ["Step 1: material quantitative and qualitative ESG factors for the company and its industry.", "Step 2: analyze on a historical and future basis and relative to industry peers.", "Step 3: make the necessary adjustments to financials and valuation."],
      ["Peer analysis is part of the integration, not an optional extra.", "In equity analysis the factors help find opportunities and avoid downside risk; in debt analysis they are used to avoid downside risk."]),
    T(7, 14, "ESG disclosure vs governance disclosure",
      ["Johansberg: 'This would be a challenging task because, <b>just like governance information</b>, it might prove difficult to find any ESG information. There are no specific standards for disclosures.'"],
      "Which is most accurate regarding his statement on ESG information?",
      [["The statement is correct", "The ESG half is right, but the comparison with governance information is wrong."], ["Incorrect: listed companies must follow specific ESG disclosure rules set by regulators", "ESG disclosure is voluntary; regulators do not set specific ESG disclosures."], ["Incorrect: governance information is more widely and consistently available than ESG information", "Regulators often require specific governance disclosures, so governance data are widely and consistently available."]], 2, 0,
      ["Governance information: widely available, consistent, regulator-required", "ESG information: voluntary, inconsistent between companies, no specific standards"],
      ["'No specific standards' for ESG disclosure is correct.", "Equating it with governance information is wrong: governance disclosure is required and consistent."],
      ["Companies may choose not to disclose ESG information that could hurt their financial position or valuation."]),
    T(9, 15, "Required return from the dividend growth model",
      ["Freedom: expected payout ratio 40%; EPS next year <b>$3.00</b>; earnings growth <b>6%</b> a year.", "Market capitalization <b>$15 billion</b>, 375 million shares. Market value = intrinsic value."],
      "Freedom's required rate of return on equity is closest to:",
      [["3%", "Only the dividend yield."], ["6%", "Only the growth rate: forgot the dividend yield."], ["9%", "D<sub>1</sub> / P<sub>0</sub> + g = 3% + 6%."]], 2, 1,
      ["r = D<sub>1</sub> / P<sub>0</sub> + g", "D<sub>1</sub> = next-year EPS × payout ratio · P<sub>0</sub> = market cap ÷ shares"],
      ["D<sub>1</sub> = $3.00 × 0.40 = $1.20.", "P<sub>0</sub> = $15,000m ÷ 375m = $40.", "r = 1.20 ÷ 40 + 0.06 = 0.03 + 0.06 = <b>9%</b>."],
      ["Use next year's dividend (D<sub>1</sub>), not today's.", "A constant payout ratio means dividend growth = earnings growth.", "Priced fairly (market value = intrinsic value) → the required return can be backed out of the price."]),
    T(11, 15, "Shadow banking and legal systems",
      ["Statement 1: In less-developed countries that lack corporate debt markets, businesses rely on bank lending known as the <b>shadow banking system</b>.", "Statement 2: Countries with common law-based legal systems offer lower risk premiums than civil law-based countries."],
      "Are Miller's statements correct?",
      [["Only Statement 1 is correct", "Statement 1 is wrong, Statement 2 is right."], ["Only Statement 2 is correct", "Shadow banking relies on unregulated, non-bank sources; common law gives stronger investor protection → lower risk premium."], ["Both are correct", "Statement 1 is wrong: shadow banking is not bank lending."]], 1, 2,
      ["Shadow banking = lending from unregulated, <b>non-bank</b> sources", "Common law → stronger investor protection → lower risk premium than civil law"],
      ["Statement 1: wrong: the shadow banking system is non-bank.", "Statement 2: correct: stronger investor protection under common law lowers the country risk premium."],
      ["Where corporate debt markets are weak, firms rely on banks, and the shadow banking system fills gaps.", "Weaker investor protection → higher risk premium → higher cost of capital."])
    ,
    // ---------------- 26 Oct PM1 Session 1 ----------------
    U("q2", 4, "Quant 2 · Q4", 2, "Quant", "Covariance stationarity of oil prices",
      ["WTI oil prices, 181 months. Martinez finds that the <b>mean and variance of the series are not constant over time</b>.", "Conclusion 1: the WTI series is covariance stationary."],
      "Conclusion 1 is:",
      [["Correct", "A covariance-stationary series needs a constant, finite mean and variance. Martinez found neither."], ["Incorrect: the mean and variance are not constant over time", "Two of the three requirements fail."], ["Incorrect: the Durbin–Watson statistic of the AR(2) model is above 1.75", "Durbin–Watson tests serial correlation in regression errors, not stationarity."]], 1, 0,
      ["Covariance stationary: constant, finite mean · constant, finite variance · constant, finite covariance with its own lags"],
      ["Mean and variance not constant → requirements 1 and 2 fail → not covariance stationary.", "The Durbin–Watson value is unrelated to this conclusion."],
      ["A trending series such as prices is usually not covariance stationary.", "Durbin–Watson below the critical value (1.75) → positive serial correlation in the errors (here 0.10 and 0.08 for the trend models)."]),
    U("c1", 1, "Corp 15 · Q1", 15, "Corporate Issuers", "Backfilled index returns and the ERP",
      ["An equity index starts in Year 1 in a country that has just become a market economy. The vendor built returns for the 4 years before Year 1 using <b>the companies that make up the Year-1 index</b>."],
      "Including the pre-Year-1 returns would be expected to:",
      [["Bias the historical ERP estimate upward", "Backfilling with companies that survived to Year 1 adds survivorship bias to the returns."], ["Bias the historical ERP estimate downward", "Survivorship bias raises returns, it does not lower them."], ["Have no effect on the historical ERP estimate", "The backfilled returns are biased, so they do matter."]], 0, 2,
      ["Historical ERP = average equity return – average risk-free return", "Survivorship bias: failed firms are missing from the data → returns too high → ERP biased <b>up</b>"],
      ["Only firms that survived to Year 1 are in the backfilled years.", "Losers are missing → average return too high → ERP biased upward."],
      ["Other historical-ERP biases: a poor period that will not recur (e.g. military confrontations) → biased down; ERP measured over a short-term rate when the curve slopes up → biased up."]),
    U("c4", 4, "Corp 15 · Q4", 15, "Corporate Issuers", "Grinold–Kroner equity risk premium",
      ["Long-term inflation 4% · real GDP growth 4% · market P/E growth 1% a year · index dividend yield 1% · 10-year government yield 7% (the short-term rate is 9%: the curve is inverted).", "Public-company earnings growth is forecast at 5% a year."],
      "An ERP estimate consistent with the Grinold–Kroner model is closest to:",
      [["2.7%", "Not what the model gives with these inputs."], ["3.0%", "(1.0 + 1.0 + 4.0 + 4.0) – 7.0."], ["4.3%", "Not what the model gives with these inputs."]], 1, 2,
      ["Grinold–Kroner expected equity return = dividend yield + ΔP/E + inflation + real growth (± share count change)", "ERP = expected equity return – <b>long-term</b> risk-free rate"],
      ["Expected return = 1.0 + 1.0 + 4.0 + 4.0 = 10.0%.", "ERP = 10.0% – 7.0% = <b>3.0%</b>."],
      ["Use the long-term yield (7%), not the 9% short-term rate.", "Inflation + real growth stand in for nominal earnings growth; do not swap in the 5% earnings forecast.", "With rf = 7%, β = 1 and any ERP from these data, the required return is at least 9%."]),
    U("e54", 54, "Equity 20 · Q54", 20, "Equity", "Trailing P/E with recurring costs only",
      ["Cratt: reported EPS 2017 = <b>$1.03</b>; Core EPS = $1.31, which leaves out acquisition charges ($0.18) and a one-off lawsuit settlement ($0.10). Price = $11.31.", "Zhang: acquisition costs will keep recurring (keep them in); the legal settlement will not (take it out)."],
      "Zhang's trailing P/E is closest to:",
      [["8.64", "Used Core EPS of $1.31, which excludes the recurring acquisition costs."], ["10.01", "EPS = 1.03 + 0.10 = 1.13; 11.31 ÷ 1.13."], ["10.98", "Used reported EPS of $1.03, which includes the one-off legal cost."]], 1, 2,
      ["Trailing P/E = price ÷ EPS adjusted for <b>non-recurring items only</b>", "Add back one-offs; keep costs that recur"],
      ["Reported EPS $1.03 includes the $0.10 lawsuit cost → add it back: $1.13.", "Acquisition charges recur (growth-by-acquisition strategy) → leave them in.", "11.31 ÷ 1.13 = <b>10.01</b>."],
      ["Company 'core' or non-GAAP EPS may drop costs that really recur: check each adjustment."]),
    U("e55", 55, "Equity 20 · Q55", 20, "Equity", "What a high P/E says about growth and risk",
      ["Lane Foods has a high P/E (21.1) compared with similar companies.", "Zhang: Lane must have both a higher-than-average growth rate and <b>higher-than-average risk</b> to justify it."],
      "Zhang's observation is best described as:",
      [["Correct", "Right about growth, wrong about risk."], ["Incorrect with respect to the risk", "Higher risk lowers the P/E."], ["Incorrect with respect to the growth rate", "Higher growth does raise the P/E."]], 1, 0,
      ["P/E rises with growth and falls with risk (operating or financial)"],
      ["A high P/E can be justified by high growth or by low risk.", "Higher-than-average risk would push the P/E down, not up."],
      ["Justified P/E goes up with g and down with the required return r."]),
    U("e56", 56, "Equity 20 · Q56", 20, "Equity", "Weighted harmonic mean of P/Es",
      ["Index of 5 companies (market cap $m / P/E): FAF 5.81 / 12.9 · Mila 26.21 / 12.4 · Watson 545.62 / 5.2 · Lane 700.15 / 21.1 · Delta 575.53 / 18.4.", "Total market cap $1,853.32m; weights = market cap ÷ total."],
      "The weighted harmonic mean of the P/Es is closest to:",
      [["10.8", "Weighted average of the reciprocals (E/P), then flip."], ["11.1", "Harmonic mean with equal weights (20% each), not market-cap weights."], ["15.4", "Weighted correctly, but averaged the P/Es themselves instead of their reciprocals."]], 0, 2,
      ["Weighted harmonic mean P/E = 1 ÷ Σ [ w<sub>i</sub> × (1 / P/E<sub>i</sub>) ]", "w<sub>i</sub> = market cap<sub>i</sub> ÷ total market cap"],
      ["Weights: 0.3%, 1.4%, 29.4%, 37.8%, 31.1%.", "Σ w × (1/PE) = 0.0002 + 0.0011 + 0.0566 + 0.0179 + 0.0169 = 0.0928.", "1 ÷ 0.0928 = <b>10.8</b>."],
      ["Average the earnings yields (E/P) with the weights, then take the reciprocal.", "A weighted average of the P/Es themselves (15.4) is pulled up by the big, high P/E companies."]),
    U("e57", 57, "Equity 20 · Q57", 20, "Equity", "What the harmonic mean does to outliers",
      ["Zhang: 'The harmonic mean can be used to mitigate the effects of <b>both large and small</b> outliers.'"],
      "Zhang's statement is best described as:",
      [["Correct", "It only mitigates large outliers."], ["Incorrect with respect to large outliers", "It does reduce the impact of large outliers."], ["Incorrect with respect to small outliers", "It may aggravate small outliers (which are bounded by zero)."]], 2, 0,
      ["Harmonic mean: mitigates <b>large</b> outliers, may aggravate <b>small</b> ones"],
      ["Large P/Es turn into small reciprocals, so they barely move the average.", "Small P/Es turn into large reciprocals, so they pull the average more."],
      ["The harmonic mean suits averaging price multiples such as P/E."]),
    U("e59", 59, "Equity 20 · Q59", 20, "Equity", "Which P/E comparison supports a buy",
      ["KPK: trailing P/E 14.6 · forward P/E 13.7 · <b>justified (fundamental) trailing P/E 15.0</b> · Consumer Goods index P/E 14.8.", "Kaminski recommends buying KPK."],
      "Which best supports the recommendation? The justified P/E is greater than the:",
      [["Index P/E", "The index is a general comparable, not a measure of KPK's own value."], ["Trailing P/E", "Like with like: 15.0 &gt; 14.6 → undervalued by 2.7%."], ["Forward P/E", "Not based on company fundamentals, and not the same type of P/E."]], 1, 0,
      ["Undervalued if the justified P/E &gt; the actual P/E of the <b>same type</b> (trailing vs trailing)", "Undervaluation = (15.0 – 14.6) ÷ 14.6 = 2.7%"],
      ["The justified trailing P/E comes from KPK's own forecasts (DCF).", "15.0 &gt; 14.6 → the market price is below fundamental value → buy."],
      ["Compare like with like: justified trailing with trailing, justified forward with forward."]),
    U("r61", 61, "Equity 21 · Q61", 21, "Equity", "Residual income uses beginning equity",
      ["DongSun 2013: net income KRW105,000m; dividends KRW42,000m. Equity KRW750,000m at end-2013 and <b>KRW687,000m at end-2012</b>. Required return on equity 12%."],
      "2013 residual income (KRW m) is closest to:",
      [["15,000", "Equity charge on end-of-year equity (750,000)."], ["22,560", "105,000 – 0.12 × 687,000."], ["63,000", "Net income – dividends: no equity charge at all."]], 1, 2,
      ["RI = net income – equity charge", "Equity charge = required return on equity × <b>beginning-of-year</b> book value"],
      ["Equity charge = 0.12 × 687,000 = 82,440.", "RI = 105,000 – 82,440 = <b>22,560</b>."],
      ["Dividends play no part in residual income.", "Beginning, not ending, book value."]),
    U("r62", 62, "Equity 21 · Q62", 21, "Equity", "Justified P/B from residual income",
      ["Forecasts at end-2013: long-term ROE <b>15%</b>, growth after 2014 <b>9%</b>, required return on equity <b>12%</b>.", "(Reported 2013 ROE = 14%; market price KRW62,000; book value per share KRW25,000.)"],
      "The single-stage justified P/B is closest to:",
      [["1.66", "Used the historical 2013 ROE of 14%."], ["2.00", "(15% – 9%) ÷ (12% – 9%)."], ["2.48", "The current market P/B (62,000 ÷ 25,000), not a justified value."]], 1, 2,
      ["Justified P/B = (ROE – g) ÷ (r – g)", "Use the <b>forecast</b> long-term ROE"],
      ["(0.15 – 0.09) ÷ (0.12 – 0.09) = 0.06 ÷ 0.03 = <b>2.00</b>."],
      ["Justified P/B &gt; 1 when ROE &gt; r.", "The market P/B (2.48) is above the justified 2.00 → the shares look overvalued on this model."]),
    U("r63", 63, "Equity 21 · Q63", 21, "Equity", "Clean surplus violations",
      ["Item 1: available-for-sale securities. Item 2: foreign-currency transactions with customers and suppliers. Item 3: translation adjustments from self-sustaining foreign subsidiaries."],
      "Which item is least likely to violate clean surplus accounting?",
      [["Item 1", "Unrealized AFS gains and losses bypass the income statement (OCI)."], ["Item 2", "Ordinary foreign-currency transactions run through income."], ["Item 3", "Translation adjustments go to OCI, bypassing income."]], 1, 2,
      ["Clean surplus: ending book value = beginning book value + earnings – dividends (excluding ownership transactions)", "Violation = a gain or loss that goes straight to equity (OCI) without passing through income"],
      ["Items 1 and 3 go to other comprehensive income → violations.", "Item 2 is recorded in income → no violation."],
      ["Typical violations: AFS unrealized gains/losses and translation adjustments of self-sustaining subsidiaries (current rate method)."]),
    U("r65", 65, "Equity 21 · Q65", 21, "Equity", "Residual income model: adjustments and weaknesses",
      ["Kim's supervisor asks why he prefers the residual income model."],
      "Which is the most appropriate response?",
      [["Need not adjust book value for off-balance-sheet items", "You do need to adjust for off-balance-sheet items."], ["Need not adjust book value for non-recurring items", "Adjust income for them; book value already reflects them in asset values."], ["Interest expense in the RI model correctly captures the cost of debt", "A weakness: interest expense may not reflect the true cost of debt capital."]], 1, 2,
      ["Adjust <b>book value</b> for off-balance-sheet items · adjust <b>income</b> (not book value) for non-recurring items"],
      ["Non-recurring items are already reflected in the value of the assets, so book value needs no adjustment.", "RI weakness: interest expense may not equal the true cost of debt."],
      ["Other RI weaknesses: accounting-based inputs and clean surplus violations (Q63)."]),
    U("f39", 39, "FI 26 · Q39", 26, "Fixed Income", "ABS: financing cost and investor appeal",
      ["Wong on an auto-loan ABS (granular, homogeneous pool): the originator sold the loans to a special purpose entity (SPE), which <b>'typically leads to higher financing costs'</b> than the originator's direct obligations; investors want diversification and stable cash flows."],
      "Wong is most likely correct on:",
      [["Both financing costs and investor preferences", "Wrong on financing costs."], ["Investor preferences, but incorrect on financing costs", "Isolating assets in an SPE generally lowers financing cost."], ["Financing costs, but incorrect on investor preferences", "Investor preferences are right."]], 1, 0,
      ["Securitization via an SPE: assets isolated from the originator → <b>lower</b> financing cost than a general obligation of the originator"],
      ["The SPE protects the assets from the originator's creditors → cheaper financing.", "Investors like diversification, more stable and predictable cash flows, and a return above similarly rated securities."],
      ["Granular, homogeneous pools are analysed with portfolio statistics rather than loan by loan."]),
    UG("e13", 13, "Ethics 41 · Q13", 41, "Ethics", "Sending a model to the company's CFO",
      ["Fitzgerald (research analyst) emailed his earnings model for LeffMarc and HorizonGale to each company's CFO before publishing, to elicit comments.", "He sent only the model, not his recommendation."],
      "Did he most likely violate the Standards by emailing the CFOs?",
      [["No", "He asked for comments on a model; no evidence of preferential treatment or an unsupported estimate."], ["Yes: III(B) Fair Dealing", "No evidence any investor got preferential treatment."], ["Yes: V(A) Diligence and Reasonable Basis", "No evidence the estimates do not reflect his own view."]], 0, 0,
      ["Sharing a model with a company to check facts and get comments is acceptable if the estimates and recommendation stay the analyst's own and nobody gets preferential access"],
      ["III(B) needs unfair treatment of clients: not shown.", "V(A) needs an unsupported analysis or recommendation: not shown (only the model was sent)."],
      ["Look for the concrete breach: preferential access to a recommendation, MNPI, gifts, or a rating changed without a basis.", "In this case the real breaches are the request for the CEO's Paris home (I(B), III(A)) and the rating change without a basis (V(A))."])
    ,
    // ---------------- 26 Oct Session 2 ----------------
    VG("f27", 1, "FI 23 · Q27", 23, "Fixed Income", "Riding the yield curve with swap spreads",
      ["Government spot rates: 2-year 2.70%, 4-year 4.05%. Swap spreads: 2-year 0.30%, 4-year 0.70%. The curve and the spreads stay unchanged.", "Investment 2: buy a 4-year zero-coupon corporate bond and sell it after 2 years. The swap rate is the proxy for the corporate yield."],
      "Annual return closest to:",
      [["4.31%", "Does not follow from buying at the 4-year yield and selling at the 2-year yield."], ["5.42%", "Does not follow from buying at the 4-year yield and selling at the 2-year yield."], ["6.53%", "Buy at 4.75%, sell at 3.00%: the price rises as the bond rolls down the curve."]], 2, 2,
      ["Rolling down: buy at the N-year yield, sell at the (N – 2) yield, annualise over the 2 years held", "Corporate yield = government spot + swap spread"],
      ["Buy: 4-year yield = 4.05% + 0.70% = 4.75% → P = 100 ÷ 1.0475<sup>4</sup> = 83.058.", "Sell after 2 years: 2-year yield = 2.70% + 0.30% = 3.00% → P = 100 ÷ 1.03<sup>2</sup> = 94.260.", "Return = (94.260 ÷ 83.058)<sup>1/2</sup> – 1 = <b>6.53%</b>."],
      ["Curve and spreads unchanged → the bond is sold at the shorter-maturity yield read off today's curve.", "Use the spread for the shorter maturity too (0.30%, not 0.70%).", "Do not price the bond you sell at the 4-year yield."]),
    VG("f28", 2, "FI 23 · Q28", 23, "Fixed Income", "Pricing a bond with a Z-spread",
      ["Investment 3: a 2-year corporate bond, annual coupon 4.15%, Z-spread 65 bps.", "Government spot rates: 1-year 2.25%, 2-year 2.70%."],
      "The bond most likely trades at:",
      [["100.97", "Not what discounting at spot + Z gives."], ["101.54", "Each cash flow discounted at its own spot rate plus 65 bps."], ["104.09", "Not what discounting at spot + Z gives."]], 1, 1,
      ["Price = Σ CF<sub>t</sub> ÷ (1 + spot<sub>t</sub> + Z)<sup>t</sup>: the spread is added to <b>every</b> spot rate", "Coupon above the discount rates → price above par"],
      ["Add 65 bps: z<sub>1</sub> = 2.25% + 0.65% = 2.90%; z<sub>2</sub> = 2.70% + 0.65% = 3.35%.", "P = 4.15 ÷ 1.029 + 104.15 ÷ 1.0335<sup>2</sup> = 4.03 + 97.51 = <b>101.54</b>."],
      ["Sanity check: coupon (4.15%) above the discount rates (about 3%) → price above 100.", "Discount each cash flow at its own spot + Z, not one yield for all."]),
    V("f29", 3, "FI 23 · Q29", 23, "Fixed Income", "Which spread shows money-market risk and liquidity",
      ["Mathews is confused by the various spread measures. She asks which one is a good indicator of the risk and liquidity of money market securities in the recent past."],
      "The most appropriate spread is the:",
      [["Z-spread", "A bond's constant spread over the whole spot curve: a bond measure, not a money-market indicator."], ["TED spread", "3-month MRR minus the T-bill rate: perceived credit risk in the general economy, not the money market's risk and liquidity."], ["MRR–OIS spread, formerly Libor–OIS", "The difference between MRR and the overnight index swap rate: the indicator of risk and liquidity of money market securities."]], 2, 1,
      ["MRR–OIS spread = indicator of risk and liquidity in the money market", "TED spread = 3-month MRR – 3-month T-bill rate: credit risk in the general economy"],
      ["The question asks about the risk and liquidity of money market securities → MRR–OIS.", "A wider spread means more stress in short-term funding markets."],
      ["Match the phrase to the spread: 'risk and liquidity of money market securities' = MRR–OIS; 'credit risk in the general economy' = TED; 'spread over the whole spot curve' = Z-spread."]),
    V("d26", 4, "Deriv 28 · Q26", 28, "Derivatives", "Value of an equity index forward after initiation",
      ["Long 60-day S&P 500 forward entered 30 days ago at F<sub>0</sub> = 3,402.49. Today: index 3,450.82; risk-free rate 1.19% and dividend yield 0.75% (both continuously compounded). 360-day year."],
      "The value of the forward today (30 days left) is closest to:",
      [["49.55", "New forward price less old forward price, discounted over the 30 days left."], ["50.19", "Did not use T – t = 0.0833 and discounted with the wrong sign."], ["51.70", "Left out the dividend yield: F<sub>t</sub> = 3,454.24 instead of 3,452.09."]], 0, 2,
      ["F<sub>t</sub>(T) = S<sub>t</sub> × e<sup>(r – δ)(T – t)</sup>", "V<sub>t</sub> = (F<sub>t</sub>(T) – F<sub>0</sub>(T)) × e<sup>–r(T – t)</sup>", "T = original maturity (60/360) · t = time elapsed (30/360) · T – t = time left", "Continuous rates and dividend yield → e<sup>x</sup> form. Annual or periodic rates and dollar dividends → V<sub>t</sub> = (F<sub>t</sub> – F<sub>0</sub>) ÷ (1 + r)<sup>T – t</sup> with F<sub>t</sub> = (S<sub>t</sub> – PV of dividends)(1 + r)<sup>T – t</sup>"],
      ["T – t = 60/360 – 30/360 = 30/360 = 0.0833.", "F<sub>t</sub> = 3,450.82 × e<sup>(0.0119 – 0.0075) × 0.0833</sup> = 3,452.09.", "V = (3,452.09 – 3,402.49) × e<sup>–0.0119 × 0.0833</sup> = 49.60 × 0.99901 = <b>49.55</b>."],
      ["The dividend yield lowers the carry: use r – δ in the forward price.", "Time left is T – t = 60/360 – 30/360 (30 days), not the original 60 (0.1667).", "Long forward gains when the new forward price is above the old one."]),
    V("d28", 5, "Deriv 28 · Q28", 28, "Derivatives", "Value of a pay-fixed swap after initiation",
      ["Swap entered a year ago: 4-year, annual resets, 30/360, notional $50m, fixed rate 1.89%. Three years remain.", "PV factors: 360 days 0.9832 · 720 days 0.9604 · 1,080 days 0.9326."],
      "The market value of the pay-fixed, receive-floating swap is closest to:",
      [["–$221,220", "Used only the first PV factor, and the wrong sign: pay-fixed gains when the market rate is above 1.89%."], ["$79,271", "Used only the last PV factor: the remaining payments need the sum of all three."], ["$647,145", "Rate difference × sum of the PV factors × notional."]], 2, 0,
      ["Current fixed rate = (1 – last PV factor) ÷ Σ PV factors", "Pay-fixed value = notional × (new fixed – old fixed) × Σ PV; receive-fixed is the negative"],
      ["Σ PV = 0.9832 + 0.9604 + 0.9326 = 2.8762.", "New 3-year fixed rate = (1 – 0.9326) ÷ 2.8762 = 2.34%.", "Paying 1.89% when the market pays 2.34% is a gain: 50,000,000 × (0.0234 – 0.0189) × 2.8762 = <b>$647,145</b>."],
      ["The remaining payments are an annuity: multiply by the sum of the PV factors, not one factor.", "Market fixed rate above your contract rate → pay-fixed gains, receive-fixed loses.", "Answer for the side the question names (pay-fixed here), not the side in the vignette."]),
    V("a2", 6, "Alt 33 · Q2", 33, "Alternatives", "Which hedge fund statement is incorrect",
      ["Statement 1: equity market-neutral strategies use a relative value approach.", "Statement 2: event-driven strategies are not exposed to equity market beta risk.", "Statement 3: opportunistic strategies have risk exposure to market directionality."],
      "Which statement is incorrect?",
      [["Statement 1", "Correct: balanced long and short equity exposure, pairs expected to mean-revert."], ["Statement 2", "Incorrect: event-driven strategies carry some natural equity beta, and deals fail more often in market stress (left-tail risk)."], ["Statement 3", "Correct: macro and managed futures strategies rely on trends and directional views."]], 1, 2,
      ["Equity market neutral = relative value, beta ≈ 0", "Event-driven (merger arbitrage) = some equity beta and left-tail risk", "Opportunistic (macro, managed futures) = directional, trend exposure"],
      ["Market stress makes deals fail: the long target falls and the short acquirer rises.", "So event-driven strategies have market sensitivity, and 'not exposed to beta' is wrong."],
      ["In 'which is incorrect' questions, watch for absolutes ('not exposed', 'never').", "Event-driven is not the same as market neutral."]),
    V("a4", 7, "Alt 33 · Q4", 33, "Alternatives", "Protecting a stock-for-stock merger arbitrage",
      ["AA (acquirer) offers its shares for TT (target) shares. The fund buys TT and shorts AA at the exchange ratio.", "The IC fears a loss if the deal fails."],
      "Which derivative positions satisfy the IC?",
      [["Long OTM puts on AA, long OTM calls on TT", "Reversed: puts protect a long position, calls protect a short one."], ["Long OTM calls on AA, long OTM puts on TT", "Calls cover the short AA leg; puts cover the long TT leg."], ["Long risk-free bonds, short OTM puts on AA, long OTM calls on TT", "That is the payoff profile of the merger arbitrage trade itself, not a hedge against deal failure."]], 1, 0,
      ["Protect each leg against the move that hurts it: long leg → buy puts; short leg → buy calls"],
      ["Long TT loses if the deal fails and the target falls back → buy OTM puts on TT.", "Short AA loses if the deal fails and the acquirer rises back → buy OTM calls on AA."],
      ["Merger arbitrage payoff ≈ risk-free bond + short put on the acquirer + long call on the target.", "Hedge = the opposite option on each leg."]),
    V("a6", 8, "Alt 33 · Q6", 33, "Alternatives", "Cross-sectional vs time-series momentum",
      ["The manager picks 12 AAA corporate bond futures with similar durations, ranks them by the 30-day change in yield spread, goes long the futures with the greatest spread narrowing and short those with the greatest widening.", "The net position is market neutral."],
      "The strategy is best described as:",
      [["Global macro", "Top-down views on global trends, not a ranking inside one asset class."], ["Time-series momentum", "Each asset is judged on its own past trend, and the book can be net long or net short. Here the rank against the others decides."], ["Cross-sectional momentum", "Rank within one asset class: long the best, short the worst, net about zero."]], 2, 1,
      ["Cross-sectional momentum: rank assets inside one class; long the best, short the worst → net ≈ 0", "Time-series momentum: each asset on its own trend → net long or net short"],
      ["Each position depends on the bond's performance relative to the others → cross-sectional.", "Longs and shorts offset → market neutral."],
      ["'Ranks … relative to the others' and 'market neutral' → cross-sectional.", "'Each asset's own past return, independent of the others' → time-series."]),
    V("a9", 9, "Alt 33 · Q9", 33, "Alternatives", "Choosing a hedge fund strategy: Sortino over Sharpe",
      ["Current portfolio: SD 7.95%. Add a 20% hedge fund allocation. Combined SD / Sharpe / Sortino / max drawdown: Merger arbitrage 7.22 / 0.73 / 1.35 / 5.60 · Systematic futures 6.94 / 0.83 / 1.68 / 8.04 · Equity market neutral 7.17 / 0.73 / 1.80 / 10.72.", "IC: (1) variance below 90% of the current portfolio's; (2) maximise risk-adjusted return given the expectation of large negative events."],
      "Which combined portfolio is the most suitable?",
      [["Merger arbitrage", "Passes the variance test and has the lowest drawdown, but Sortino is only 1.35."], ["Systematic futures", "Highest Sharpe (0.83), but Sharpe counts upside volatility as risk. Its Sortino (1.68) is below equity market neutral."], ["Equity market neutral", "Passes the variance test and has the highest Sortino (1.80)."]], 2, 1,
      ["Max SD = SD × √0.90 = 7.95 × 0.9487 = 7.54%", "Large negative events expected → rank by <b>Sortino</b> (downside deviation), not Sharpe"],
      ["Variance cap → SD below 7.54%: all three pass (7.22, 6.94, 7.17).", "Among them the highest Sortino is equity market neutral at 1.80."],
      ["A cap on variance as a percentage: take the square root to cap the SD.", "Sharpe penalises upside and downside; Sortino only downside. Use it when the question mentions negative events or skewed returns.", "Max drawdown is not the risk-adjusted measure."]),
    V("p24", 10, "Port 34 · Q24", 34, "Portfolio", "Large equity risk premium and consumption",
      ["Risk-averse investors demand a large equity risk premium."],
      "They most likely expect future consumption outcomes and equity returns to be:",
      [["Uncorrelated", "A large premium needs a link between equity returns and bad times."], ["Positively correlated", "Equities pay off in good times and fall in bad times, when extra consumption is worth most: a poor hedge, so a large premium."], ["Negatively correlated", "That would make equities a hedge, and investors would accept a low premium."]], 1, 2,
      ["Equities positively correlated with consumption → poor hedge → high risk premium", "Equities negatively correlated with consumption → hedge → low or negative premium"],
      ["Good times: consumption is high, the marginal value of consumption is low, and equities pay off.", "Bad times: the marginal value of consumption is high and equities pay off least.", "Investors need compensation for an asset that fails when they most need money."],
      ["The more an asset pays in bad times, the more it works as a hedge and the lower its premium."]),
    VG("p25", 11, "Port 34 · Q25", 34, "Portfolio", "The best hedge against bad consumption outcomes",
      ["Bad consumption outcomes come in recessions, when income and consumption fall."],
      "Which asset is likely to offer the most effective hedge?",
      [["Equities", "Positively correlated with consumption: they fall when consumption is bad."], ["Short-dated, default-free government bonds", "A near-certain real payoff: little default risk, and little interest-rate or inflation risk over a short horizon."], ["Long-dated, default-free government bonds", "No default risk, but over a long horizon the real payoff is uncertain: inflation and rate changes move the price a lot."]], 1, 1,
      ["Best hedge for bad consumption outcomes = the asset with the most certain real payoff", "Short-dated + default-free = least credit, rate and inflation risk"],
      ["A hedge must hold its value when consumption is bad, with a payoff you can count on.", "Short-dated government bonds mature soon at face value, so the real amount is almost known.", "Long-dated bonds can lose real value to inflation or higher rates before maturity."],
      ["Order as hedges: short-dated default-free bonds, then long-dated default-free bonds, then equities (positively correlated with consumption).", "Commercial real estate is not a hedge either (see Q28)."]),
    V("p28", 12, "Port 34 · Q28", 34, "Portfolio", "Commercial real estate vs equities",
      ["Statement A: rental income from commercial real estate is generally unstable across business cycles.", "Statement B: commercial real estate generally offers a good hedge against bad consumption outcomes.", "Statement C: the key difference between the discount rates for equities and commercial real estate is liquidity."],
      "Which statement is correct?",
      [["A", "Rent is contractual and relatively stable across the cycle (the bond-like part)."], ["B", "Property values fall in bad times, like equities: not a good hedge."], ["C", "The real estate discount rate = the equity discount rate + a liquidity premium, for the risk of being illiquid in bad times."]], 2, 1,
      ["Commercial real estate discount rate = equity discount rate + liquidity premium", "Rent: bond-like and stable · property value: equity-like and cyclical"],
      ["Equities and real estate share the same economic risk; real estate adds illiquidity.", "So the extra discount rate component is the liquidity premium."],
      ["Real estate is not a hedge against bad consumption outcomes.", "Rent is bond-like; changes in property value are the equity-like part."]),
    V("p29", 13, "Port 34 · Q29", 34, "Portfolio", "Equities and the business cycle",
      ["Observation 1: toward the end of a recession, corporate profit growth increases, resulting in a negative risk premium.", "Observation 2: the earnings of cyclical companies are a leading indicator for broader economic growth.", "Observation 3: during recessions, equities offer a good hedge against bad consumption outcomes."],
      "Which observation is most likely correct?",
      [["Observation 1", "Profit growth does jump late in a recession (costs already cut), but that does not make the risk premium negative."], ["Observation 2", "Cyclical profits pick up before the broader recovery shows: a leading indicator."], ["Observation 3", "Recessions are bad consumption outcomes, and equities fall then: not a hedge."]], 1, 0,
      ["Cyclical earnings: fall hardest in recessions, rebound fastest out of them, and lead the economy"],
      ["Observation 1 confuses a profit rebound with the risk premium, which stays positive.", "Observation 3 is wrong because equities are poor hedges for bad consumption outcomes.", "Observation 2 matches the leading-indicator role of cyclical earnings."],
      ["Coming out of a recession, forecast higher earnings growth for cyclical than for non-cyclical companies.", "Do not turn an earnings rebound into a negative risk premium."]),
    V("p30", 14, "Port 34 · Q30", 34, "Portfolio", "What raises P/E multiples",
      ["Ferguson lists three changes that could contribute to higher market P/E multiples: an increase in the equity risk premium, decreasing volatility of real GDP growth, and an increase in uncertainty regarding future inflation."],
      "Ferguson is most likely correct regarding:",
      [["Risk premium", "A higher equity risk premium raises the required return and lowers P/E."], ["GDP volatility", "Lower volatility of real GDP growth means less uncertainty, so investors accept a higher P/E."], ["Future inflation", "More uncertainty about inflation needs more compensation, so P/E falls."]], 1, 0,
      ["P/E up ← lower equity risk premium, lower GDP growth volatility, less inflation uncertainty, lower real rates", "P/E down ← the opposite, including higher expected inflation"],
      ["Higher equity risk premium → higher required return → lower P/E.", "Lower GDP volatility → less uncertainty → higher P/E.", "More inflation uncertainty → more compensation required → lower P/E."],
      ["Anything that raises the required return or the uncertainty lowers P/E; anything that lowers them raises P/E.", "Expected inflation up → equilibrium P/E down."]),
    VG("p32", 15, "Port 34 · Q32", 34, "Portfolio", "Present value of commercial real estate: numerator",
      ["McKenna: 'The numerator of the present value formula is the sum of future expected rent payments.'", "Discount rate for a government tenant paying inflation-indexed rent: real default-free rate + a premium for the uncertainty of the property value at the end of the lease + an illiquidity premium.", "For a commercial tenant paying fixed nominal rent: also expected inflation, a premium for inflation uncertainty and a credit-risk premium."],
      "She is least likely correct regarding her description of the:",
      [["Numerator", "It should be net rental income: rent less the owner's expenses."], ["Discount rate for a commercial lease", "Correct as described."], ["Discount rate for a government lease", "Correct as described."]], 0, 0,
      ["Value = Σ net rental income (rent – expenses) ÷ (1 + discount rate)<sup>t</sup>", "Indexed rent → real default-free rate + premiums · fixed nominal rent → add expected inflation, an inflation-uncertainty premium and credit risk"],
      ["The owner pays property expenses, so the cash flow valued is net rent, not gross rent.", "Both discount rate descriptions match: indexed rent needs no inflation add-on, fixed nominal rent from a commercial tenant does."],
      ["For the numerator, look for 'net' (after expenses).", "Indexed rent removes the inflation components from the discount rate."]),
    V("b18", 16, "Port 39 · Q18", 39, "Portfolio", "Reading a flatter return distribution",
      ["Historical scenario analysis: the probability density plot of a strategy's returns is flatter in a non-recession environment than in a recession environment."],
      "All else equal, in non-recession periods the return distribution has:",
      [["Negative skewness", "A flatter curve says nothing about the direction of the skew."], ["Fewer extreme outcomes", "Flatter means fatter tails: extreme outcomes are more likely, not fewer."], ["A higher standard deviation", "A flatter, wider curve means more dispersion."]], 2, 1,
      ["Flatter / wider density = more dispersion = higher standard deviation, fatter tails", "Taller / narrower density = lower SD, fewer extreme outcomes"],
      ["A flatter distribution spreads probability into the tails.", "More probability in the tails → more extreme outcomes → higher standard deviation."],
      ["'Flatter' means wider, not calmer.", "Skewness needs asymmetry; width alone does not show it."]),
    V("b19", 17, "Port 39 · Q19", 39, "Portfolio", "What backtesting is and assumes",
      ["Statement 1: backtesting can be used as a rejection or acceptance criterion for an investment strategy, depending on the manager's process.", "Statement 2: backtesting is based on the implicit assumption that the future will somewhat resemble the past."],
      "Which statements are correct?",
      [["Statement 1 only", "Statement 2 is also correct."], ["Statement 2 only", "Statement 1 is also correct."], ["Both statements", "Backtests can accept or reject a strategy, and they assume the future resembles the past."]], 2, 1,
      ["Backtest = an accept or reject criterion for a strategy; it assumes the future at least somewhat resembles the past"],
      ["Statement 1 is true: the result can accept or reject the strategy, depending on the process.", "Statement 2 is true: the method only works if the past is informative about the future."],
      ["Check each statement on its own before choosing an 'only' option."]),
    V("e19", 18, "Ethics 41 · Q19", 41, "Ethics", "Finder's fees: which action is least required",
      ["O'Connor's fund pays a finder's fee to third-party agents for investments they present. One agent, Make-a-Difference Consultants, has adopted the CFA Institute Code and Standards."],
      "Which action should O'Connor least likely take to comply with the required or recommended procedures?",
      [["Monitor the consultants' compliance policy execution", "She should: she must not knowingly assist others in violating the Standards (I(A)), so she checks that they disclose referral fees too."], ["Disclose the finder's fee arrangement in the fund prospectus", "She should: VI(C) requires disclosure of referral fees."], ["Notify clients of the finder's fee policy semiannually", "The recommended procedure is to notify clients at least quarterly, so semiannual is the action to avoid."]], 2, 0,
      ["VI(C) Referral Fees: disclose compensation paid for referrals to employer, clients and prospective clients", "Recommended: notify clients at least quarterly"],
      ["'Least likely' means: pick the action that is not recommended.", "Monitoring the agents and disclosing in the prospectus both follow I(A) and VI(C).", "Semiannual is less often than the recommended quarterly notice."],
      ["Read 'least likely' before the options: you picked an action she should take.", "In procedure questions, check the recommended frequency (quarterly here)."]),
    // ---------------- Formula drills ----------------
    Y("01", 1, "Drill · F1", 23, "Fixed Income", "Rolling down: annual return with swap spreads",
      ["A 4-year zero-coupon corporate bond is bought and sold after 2 years. Government spot rates: 2-year 2.70%, 4-year 4.05%. Swap spreads: 2-year 0.30%, 4-year 0.70%. The curve and spreads stay unchanged."],
      "Which formula gives the annual return?",
      [["(<span class=\"fr\"><span>P<sub>sell</sub></span><span>P<sub>buy</sub></span></span>)<sup>1/years held</sup> – 1", "Buy at the 4-year yield (4.05% + 0.70%), sell at the 2-year yield (2.70% + 0.30%), annualised over the 2 years held: 6.53%."], ["<span class=\"fr\"><span><span class=\"fr\"><span>P<sub>sell</sub></span><span>P<sub>buy</sub></span></span> – 1</span><span>years held</span></span>", "Dividing the total return by 2 ignores compounding: 6.74%."], ["(<span class=\"fr\"><span>P<sub>sell</sub></span><span>P<sub>buy</sub></span></span>)<sup>1/years remaining</sup> – 1", "The power is the years held (2), not the years remaining (4): 3.21%."]], 0, 0,
      ["Annual return = (<span class=\"fr\"><span>P<sub>sell</sub></span><span>P<sub>buy</sub></span></span>)<sup>1/years held</sup> – 1", "P<sub>buy</sub>: yield for the original maturity · P<sub>sell</sub>: yield for the maturity left (spot + spread for each)"],
      ["Buy: 4.05% + 0.70% = 4.75% → P = 100 ÷ 1.0475<sup>4</sup> = 83.058.", "Sell: 2.70% + 0.30% = 3.00% → P = 100 ÷ 1.03<sup>2</sup> = 94.260.", "Return = (94.260 ÷ 83.058)<sup>1/2</sup> – 1 = <b>6.53%</b>."],
      ["Curve and spreads unchanged → sell at the shorter maturity's yield from today's curve.", "Use each maturity's own spread (0.70% to buy, 0.30% to sell)."]),
    Y("02", 2, "Drill · F2", 23, "Fixed Income", "Annual return from a total gain",
      ["A zero-coupon bond bought at 75.00 is sold three years later at 90.00."],
      "Which formula gives the annual return?",
      [["(<span class=\"fr\"><span>end</span><span>start</span></span>)<sup>1/n</sup> – 1", "Undo the compounding with the 1/3 power: 6.27%."], ["<span class=\"fr\"><span><span class=\"fr\"><span>end</span><span>start</span></span> – 1</span><span>n</span></span>", "Averages the total gain and ignores compounding: 6.67%."], ["(<span class=\"fr\"><span>end</span><span>start</span></span>)<sup>n</sup> – 1", "Compounds the price ratio three more times: 72.8%."]], 0, 0,
      ["Annual return = (<span class=\"fr\"><span>end</span><span>start</span></span>)<sup>1/n</sup> – 1, n = years held"],
      ["Ratio = 90 ÷ 75 = 1.2000 (a 20% total gain).", "1.2<sup>1/3</sup> = 1.0627.", "Annual return = <b>6.27%</b>. Check: 1.0627<sup>3</sup> ≈ 1.20."],
      ["The power is 1 ÷ years held: a positive fraction, not –n."]),
    Y("03", 3, "Drill · F3", 23, "Fixed Income", "Pricing a bond with a Z-spread",
      ["A 2-year corporate bond pays an annual coupon of 5.00% on 100 par. Government spot rates: 1-year 2.00%, 2-year 2.60%. The Z-spread is 0.80%."],
      "Which formula prices the bond?",
      [["Σ <span class=\"fr\"><span>CF<sub>t</sub></span><span>(1 + spot<sub>t</sub> + Z)<sup>t</sup></span></span>", "Add Z to each spot rate and discount each cash flow at its own rate: 103.07."], ["Σ <span class=\"fr\"><span>CF<sub>t</sub></span><span>(1 + spot<sub>N</sub> + Z)<sup>t</sup></span></span>", "Uses the 2-year rate for the year-1 cash flow: 103.04."], ["Σ <span class=\"fr\"><span>CF<sub>t</sub> + Z</span><span>(1 + spot<sub>t</sub>)<sup>t</sup></span></span>", "Adds the spread to the cash flows instead of the discount rates: 106.19."]], 0, 0,
      ["Price = Σ <span class=\"fr\"><span>CF<sub>t</sub></span><span>(1 + spot<sub>t</sub> + Z)<sup>t</sup></span></span>"],
      ["z<sub>1</sub> = 2.00% + 0.80% = 2.80%; z<sub>2</sub> = 2.60% + 0.80% = 3.40%.", "P = 5 ÷ 1.028 + 105 ÷ 1.034<sup>2</sup> = 4.86 + 98.21 = <b>103.07</b>."],
      ["The spread goes on every spot rate; each cash flow keeps its own rate."]),
    Y("04", 4, "Drill · F4", 28, "Derivatives", "Forward price with a dividend yield (continuous)",
      ["An index stands at 2,100. The continuously compounded risk-free rate is 2.0% and the dividend yield is 1.2%. The forward contract has 90 days to expiry (360-day year)."],
      "Which formula gives the forward price?",
      [["S × e<sup>(r – δ)(T – t)</sup>", "The dividend yield lowers the carry: F = 2104.20."], ["S × e<sup>r(T – t)</sup>", "Leaves out the dividend yield: 2110.53."], ["S × e<sup>(r + δ)(T – t)</sup>", "Adds the yield instead of subtracting it: 2116.87."]], 0, 0,
      ["F = S × e<sup>(r – δ)(T – t)</sup>"],
      ["T – t = 90 ÷ 360 = 0.25.", "F = 2,100 × e<sup>0.008 × 0.25</sup> = <b>2104.20</b>."],
      ["Dividend yield δ is subtracted from r."]),
    Y("05", 5, "Drill · F5", 28, "Derivatives", "Value of a long forward after initiation (continuous)",
      ["A 180-day forward was entered 90 days ago at F0 = 2,080. The index is now 2,100. Continuously compounded risk-free rate 2.0%, dividend yield 1.2%. 360-day year, 90 days left."],
      "Which formula gives the value of the long forward today?",
      [["(S × e<sup>(r – δ)(T – t)</sup> – F<sub>0</sub>) × e<sup>–r(T – t)</sup>", "New forward price less old, discounted over the time left: 24.08."], ["(S – F<sub>0</sub>) × e<sup>–r(T – t)</sup>", "Uses the spot instead of the forward price: 19.90."], ["(S × e<sup>(r – δ)(T – t)</sup> – F<sub>0</sub>) × e<sup>–rT</sup>", "Discounts over the original 180 days: 23.96."]], 0, 0,
      ["V<sub>t</sub> = (F<sub>t</sub>(T) – F<sub>0</sub>(T)) × e<sup>–r(T – t)</sup>", "T – t = time left"],
      ["F<sub>t</sub> = 2,100 × e<sup>0.008 × 0.25</sup> = 2104.20.", "V = (2104.20 – 2,080) × e<sup>–0.02 × 0.25</sup> = 24.20 × 0.99501 = <b>24.08</b>."],
      ["Discount over T – t (90 days), not the original maturity."]),
    Y("06", 6, "Drill · F6", 28, "Derivatives", "Value of a long forward after initiation (discrete)",
      ["A 6-month forward was entered 3 months ago at F0 = 102.00. The asset now trades at 105.00 and will pay a dividend of 1.00 in 1 month. The risk-free rate is 4.0% a year (annual compounding). 3 months (0.25 years) remain."],
      "Which formula gives the value of the long forward?",
      [["S – PV(dividends) – <span class=\"fr\"><span>F<sub>0</sub></span><span>(1 + r)<sup>T – t</sup></span></span>", "Spot minus the PV of dividends minus the PV of F0: 3.00."], ["S – dividends – F<sub>0</sub>", "No discounting: 2.00."], ["<span class=\"fr\"><span>S</span><span>(1 + r)<sup>T – t</sup></span></span> – PV(dividends) – F<sub>0</sub>", "Discounts the spot instead of F0: 0.98."]], 0, 0,
      ["V<sub>t</sub> = S<sub>t</sub> – PV(remaining dividends) – <span class=\"fr\"><span>F<sub>0</sub></span><span>(1 + r)<sup>T – t</sup></span></span>"],
      ["PV of the dividend = 1.00 ÷ 1.04<sup>1/12</sup> = 0.997.", "PV of F0 = 102.00 ÷ 1.04<sup>0.25</sup> = 101.005.", "V = 105.00 – 0.997 – 101.005 = <b>3.00</b>."],
      ["Discount F0 over the time left; never discount the spot."]),
    Y("42", 7, "Drill · E1", 41, "Ethics", "Referral fee notice: how often",
      ["A fund pays finder's fees to third-party agents for investments they present."],
      "How often should clients be notified of the referral fee policy?",
      [["At least quarterly", "The recommended procedure for VI(C)."], ["Semiannually", "Less often than recommended: the usual wrong answer."], ["Annually", "Far less often than recommended."]], 0, 0,
      ["VI(C) Referral fees: notify clients at least quarterly"],
      ["Disclose to the employer, clients and prospective clients any compensation paid or received for referrals.", "Recommended notice: at least quarterly."],
      ["Semiannual and annual are the traps."]),
    Y("07", 8, "Drill · F7", 28, "Derivatives", "Fixed rate of an interest rate swap",
      ["Annual-pay 4-year swap. PV factors: 1-year 0.9900, 2-year 0.9780, 3-year 0.9640, 4-year 0.9480."],
      "Which formula gives the swap fixed rate?",
      [["<span class=\"fr\"><span>1 – PV<sub>N</sub></span><span>Σ PV<sub>t</sub></span></span>", "1.340%."], ["<span class=\"fr\"><span>1 – PV<sub>1</sub></span><span>Σ PV<sub>t</sub></span></span>", "Uses the first PV factor in the numerator: 0.258%."], ["<span class=\"fr\"><span>1 – PV<sub>N</sub></span><span>PV<sub>N</sub></span></span>", "Divides by one PV factor only: 5.485%."]], 0, 0,
      ["Swap fixed rate = <span class=\"fr\"><span>1 – last PV factor</span><span>Σ PV factors</span></span>"],
      ["Σ PV = 3.8800.", "Rate = (1 – 0.9480) ÷ 3.8800 = <b>1.340%</b>."],
      ["Last PV factor on top, the sum of all factors below."]),
    Y("08", 9, "Drill · F8", 28, "Derivatives", "Value of a pay-fixed swap after initiation",
      ["A pay-fixed swap has a fixed rate of 1.50%, notional $10,000,000, and 3 annual payments left. PV factors: 0.9850, 0.9660, 0.9440. The current 3-year swap rate is higher than 1.50%."],
      "Which formula gives the value of the pay-fixed side?",
      [["Notional × (new fixed – old fixed) × Σ PV", "New fixed = (1 – 0.9440) ÷ 2.8950 = 1.934%. Value = $125,750."], ["Notional × (new fixed – old fixed) × PV<sub>N</sub>", "One PV factor instead of the sum: $41,004."], ["Notional × (old fixed – new fixed) × Σ PV", "Wrong sign (that's the receive-fixed value): $-125,750."]], 0, 0,
      ["Pay-fixed value = notional × (new fixed – old fixed) × Σ PV", "Receive-fixed is the negative"],
      ["Σ PV = 2.8950; new fixed = (1 – 0.9440) ÷ 2.8950 = 1.934%.", "Value = 10,000,000 × (1.934% – 1.50%) × 2.8950 = <b>$125,750</b>."],
      ["Market rate above your contract rate → pay-fixed gains."]),
    Y("09", 10, "Drill · F9", 33, "Alternatives", "Maximum SD from a variance limit",
      ["The current portfolio has a standard deviation of 9.00%. The combined portfolio's variance must be below 80% of the current portfolio's."],
      "Which formula gives the maximum standard deviation?",
      [["SD × √(variance limit)", "8.05%."], ["SD × variance limit", "7.20%: applies the percentage to SD, not variance."], ["SD<sup>2</sup> × variance limit", "64.8: that is a variance, not an SD."]], 0, 0,
      ["Max SD = current SD × √(variance limit as a decimal)"],
      ["Variance limit = 0.80 × 9.00<sup>2</sup>.", "Take the square root: 9.00 × √0.80 = <b>8.05%</b>."],
      ["If the limit is on SD itself (for example SD 10% lower) multiply by 0.90, no root."]),
    Y("10", 11, "Drill · F10", 20, "Equity", "Weighted harmonic mean P/E",
      ["An index has three holdings with weights 40%, 35% and 25% and P/Es of 12, 18 and 30."],
      "Which formula gives the weighted harmonic mean P/E?",
      [["<span class=\"fr\"><span>1</span><span>Σ (w × <span class=\"fr\"><span>1</span><span>P/E</span></span>)</span></span>", "16.36."], ["Σ (w × P/E)", "That is the weighted arithmetic mean: 18.60."], ["<span class=\"fr\"><span>1</span><span>Σ (w × P/E)</span></span>", "Takes the reciprocal of the weighted P/Es: 0.04."]], 0, 0,
      ["Weighted harmonic mean = <span class=\"fr\"><span>1</span><span>Σ (w × <span class=\"fr\"><span>1</span><span>P/E</span></span>)</span></span>"],
      ["Earnings yields: 1/12 = 0.0833, 1/18 = 0.0556, 1/30 = 0.0333.", "Weighted sum = 0.0333 + 0.0194 + 0.0083 = 0.0611.", "1 ÷ 0.0611 = <b>16.36</b>."],
      ["Average the earnings yields with the weights, then flip."]),
    Y("11", 12, "Drill · F11", 15, "Corporate Issuers", "Grinold–Kroner equity risk premium",
      ["Dividend yield 2.0%, expected P/E change 0.5% a year, inflation 3.0%, real earnings growth 2.5%, net share count change –1.0% (net buybacks). 10-year government yield 4.5%; 3-month bill rate 5.0%."],
      "Which formula gives the equity risk premium?",
      [["dy + ΔP/E + inflation + real growth – ΔS – long-term R<sub>f</sub>", "= 4.5%."], ["dy + ΔP/E + inflation + real growth – ΔS – short-term R<sub>f</sub>", "Uses the short-term rate: 4.0%."], ["dy + ΔP/E + inflation + real growth + ΔS – long-term R<sub>f</sub>", "Adds ΔS instead of subtracting it: 2.5%."]], 0, 0,
      ["E(R) = dy + ΔP/E + inflation + real growth – ΔS", "ERP = E(R) – long-term risk-free rate"],
      ["E(R) = 2.0 + 0.5 + 3.0 + 2.5 – (–1.0) = 9.0%.", "ERP = 9.0% – 4.5% = <b>4.5%</b>."],
      ["Net buybacks make ΔS negative, which adds to the return."]),
    Y("12", 13, "Drill · F12", 27, "Fixed Income", "CDS upfront premium",
      ["A 5-year CDS has a credit spread of 600 bps, a standard coupon of 500 bps and a duration of 4.5."],
      "Which formula gives the approximate upfront premium (percent of notional)?",
      [["(spread – coupon) × duration", "= 4.5% of notional."], ["spread – coupon", "Leaves out the duration: 1.0%."], ["<span class=\"fr\"><span>spread</span><span>coupon</span></span> × duration", "Divides instead of subtracts: 5.4%."]], 0, 0,
      ["Upfront ≈ (spread – coupon) × duration"],
      ["(6.00% – 5.00%) = 1.00%.", "1.00% × 4.5 = <b>4.5%</b>."],
      ["Spread above the coupon: the protection buyer pays upfront."]),
    Y("13", 14, "Drill · F13", 27, "Fixed Income", "CDS price per 100 par",
      ["A CDS has a credit spread of 400 bps, a coupon of 500 bps and a duration of 5. Protection is quoted per 100 par."],
      "Which formula gives the CDS price?",
      [["100 – (spread – coupon) × duration × 100", "= 105."], ["100 – (spread – coupon) × 100", "Leaves out the duration: 101."], ["100 + (spread – coupon) × duration × 100", "Wrong sign: 95."]], 0, 0,
      ["Price = 100 – upfront premium (%), with upfront ≈ (spread – coupon) × duration"],
      ["Upfront = (4.00% – 5.00%) × 5 = –5%.", "Price = 100 – (–5) = <b>105</b>: the buyer is paid, since the coupon exceeds the spread."],
      ["Spread below the coupon → price above 100."]),
    Y("43", 15, "Drill · E2", 41, "Ethics", "Record retention period",
      ["A member keeps the records that support her investment recommendations and actions."],
      "For how long should the records be kept?",
      [["At least 7 years", "V(C) Record Retention: the recommended minimum."], ["At least 3 years", "Shorter than the recommended period."], ["Only while the client relationship lasts", "Records are kept after the relationship ends."]], 0, 0,
      ["V(C): keep records for at least 7 years, unless the local rule is stricter"],
      ["The stricter of local law and the Standards applies.", "Check the exact wording in Schweser."],
      ["Electronic or paper: the records must be retained."]),
    Y("14", 16, "Drill · F14", 27, "Fixed Income", "Profit on a CDS position",
      ["A fund buys protection on a $10,000,000 notional. The CDS spread rises from 250 bps to 310 bps. The CDS duration is 4."],
      "Which formula gives the approximate profit?",
      [["Δspread × duration × notional", "= $240,000."], ["Δspread × notional", "Leaves out the duration: $60,000."], ["<span class=\"fr\"><span>Δspread</span><span>duration</span></span> × notional", "Divides by duration: $15,000."]], 0, 0,
      ["Profit ≈ Δspread × duration × notional (buyer gains when spreads widen)"],
      ["Δspread = 0.60%.", "0.60% × 4 × 10,000,000 = <b>$240,000</b>."],
      ["Protection buyer gains when spreads widen."]),
    Y("15", 17, "Drill · F15", 27, "Fixed Income", "CDS cash settlement proceeds",
      ["A fund holds $10,000,000 face of a bond now trading at 45% of face and owns $10,000,000 of CDS protection. The cheapest-to-deliver bond trades at 35%. A credit event occurs and the CDS is cash settled."],
      "Which formula gives the fund's total proceeds if it sells its bond?",
      [["Notional × (1 – CTD price) + Notional × own bond price", "= $11,000,000."], ["Notional × (1 – own bond price) + Notional × own bond price", "Pays the CDS on your own bond's price: $10,000,000."], ["Notional × (1 – CTD price) + Notional × CTD price", "Values your bond at the CTD price: $10,000,000."]], 0, 0,
      ["CDS payout = notional × (1 – CTD price) · your bond sells at its own price"],
      ["CDS payout = 10,000,000 × 0.65 = 6,500,000.", "Bond sale = 10,000,000 × 0.45 = 4,500,000.", "Total = <b>$11,000,000</b>, more than the $10,000,000 from physical delivery."],
      ["Cash settlement is better when your bond is worth more than the CTD."]),
    Y("16", 18, "Drill · F16", 27, "Fixed Income", "Basis trade profit on convergence",
      ["A bond yields 6.50% and the market reference rate is 2.00%. A comparable CDS has a credit spread of 4.10%."],
      "Which formula gives the profit if the two spreads converge?",
      [["(bond yield – MRR) – CDS spread", "= 0.40%."], ["bond yield – CDS spread", "Leaves out the MRR: 2.40%."], ["CDS spread – MRR", "Ignores the bond: 2.10%."]], 0, 0,
      ["Bond spread = bond yield – MRR · profit = |bond spread – CDS spread|"],
      ["Bond spread = 6.50% – 2.00% = 4.50%.", "Gap to CDS = 4.50% – 4.10% = <b>0.40%</b>."],
      ["Bond spread above CDS: buy the bond and buy protection."]),
    Y("17", 19, "Drill · F17", 21, "Equity", "Residual income",
      ["Net income 120, beginning-of-year equity 800, end-of-year equity 880, dividends 40, required return 10%."],
      "Which formula gives residual income?",
      [["NI – r × beginning equity", "= 40."], ["NI – r × ending equity", "Uses ending equity: 32."], ["NI – r × dividends", "Uses dividends: 116."]], 0, 0,
      ["RI = net income – r × beginning equity"],
      ["Equity charge = 10% × 800 = 80.", "RI = 120 – 80 = <b>40</b>."],
      ["Dividends play no part in RI."]),
    Y("18", 20, "Drill · F18", 21, "Equity", "Justified P/B",
      ["Forecast ROE 14%, historical ROE 11%, growth rate 4%, required return 10%."],
      "Which formula gives the justified P/B?",
      [["<span class=\"fr\"><span>forecast ROE – g</span><span>r – g</span></span>", "= 1.67."], ["<span class=\"fr\"><span>historical ROE – g</span><span>r – g</span></span>", "Uses the historical ROE: 1.17."], ["<span class=\"fr\"><span>forecast ROE – r</span><span>r – g</span></span>", "Subtracts r in the numerator: 0.67."]], 0, 0,
      ["Justified P/B = <span class=\"fr\"><span>forecast ROE – g</span><span>r – g</span></span>"],
      ["Numerator = 0.14 – 0.04 = 0.10; denominator = 0.10 – 0.04 = 0.06.", "P/B = <b>1.67</b>."],
      ["Use the forecast ROE."]),
    Y("19", 21, "Drill · F19", 21, "Equity", "Single-stage residual income value",
      ["Book value per share 50, ROE 12%, required return 9%, growth 3%."],
      "Which formula gives the intrinsic value per share?",
      [["B<sub>0</sub> + <span class=\"fr\"><span>(ROE – r) × B<sub>0</sub></span><span>r – g</span></span>", "= 75.00."], ["B<sub>0</sub> + <span class=\"fr\"><span>(ROE – r) × B<sub>0</sub></span><span>ROE – g</span></span>", "Divides by ROE – g: 66.67."], ["<span class=\"fr\"><span>(ROE – r) × B<sub>0</sub></span><span>r – g</span></span>", "Leaves out the book value: 25.00."]], 0, 0,
      ["V<sub>0</sub> = B<sub>0</sub> + <span class=\"fr\"><span>(ROE – r) × B<sub>0</sub></span><span>r – g</span></span>"],
      ["RI = (0.12 – 0.09) × 50 = 1.50.", "PV of RI = 1.50 ÷ (0.09 – 0.03) = 25.", "V<sub>0</sub> = 50 + 25 = <b>75</b>."],
      ["Start from book value, then add PV of residual income."]),
    Y("20", 22, "Drill · F20", 20, "Equity", "Normalized EPS: average ROE method",
      ["A cyclical firm's ROE over the cycle was 9%, 12% and 15%. Current book value per share is 25.00, and the average over the cycle was 22.33."],
      "Which formula gives normalized EPS?",
      [["average ROE × current BVPS", "= 3.00."], ["latest ROE × current BVPS", "Uses the latest ROE: 3.75."], ["average ROE × average BVPS", "Uses the average book value: 2.68."]], 0, 0,
      ["Normalized EPS = average ROE × current book value per share"],
      ["Average ROE = (9 + 12 + 15) ÷ 3 = 12%.", "EPS = 12% × 25.00 = <b>3.00</b>."],
      ["Average the ROE, use the current book value."]),
    Y("44", 23, "Drill · E3", 41, "Ethics", "How often to update a client's IPS",
      ["A member manages a client's account under an investment policy statement (IPS)."],
      "How often should the client's profile be updated?",
      [["At least annually, and after major life changes", "III(C) Suitability: the client's circumstances change."], ["Only when the account is opened", "Circumstances change over time."], ["Every 5 years", "Far too infrequent."]], 0, 0,
      ["III(C): update the client profile at least annually and after major changes"],
      ["Suitability depends on current objectives and constraints.", "Check the exact wording in Schweser."],
      ["Look for a trigger such as a change in risk tolerance."]),
    Y("21", 24, "Drill · F21", 13, "Corporate Issuers", "Target payout: dividend increase",
      ["Expected EPS 4.00, target payout ratio 40%, previous dividend 1.20 per share. The firm adjusts over 4 years."],
      "Which formula gives the expected dividend increase this year?",
      [["<span class=\"fr\"><span>EPS × target payout – previous DPS</span><span>years to adjust</span></span>", "= 0.10."], ["EPS × target payout – previous DPS", "No adjustment factor: 0.40."], ["<span class=\"fr\"><span>previous DPS – EPS × target payout</span><span>years to adjust</span></span>", "Sign reversed: –0.10."]], 0, 0,
      ["Increase = (EPS × target payout – previous DPS) × (1 ÷ years to adjust)"],
      ["Target dividend = 4.00 × 0.40 = 1.60.", "Gap = 1.60 – 1.20 = 0.40; × 1/4 = <b>0.10</b>."],
      ["Chain it for later years using the new dividend."]),
    Y("22", 25, "Drill · F22", 5, "Economics", "Implied cross rate (bid)",
      ["USD/EUR (USD per EUR) is quoted 1.1416 bid / 1.1421 offer. JPY/USD (JPY per USD) is quoted 104.62 bid / 104.68 offer."],
      "Which formula gives the implied JPY/EUR bid?",
      [["bid(USD/EUR) × bid(JPY/USD)", "= 119.43."], ["bid(USD/EUR) × offer(JPY/USD)", "Mixes bid and offer: 119.50."], ["offer(USD/EUR) × offer(JPY/USD)", "Both offers, that is the implied offer: 119.56."]], 0, 0,
      ["Implied bid = bid × bid · implied offer = offer × offer"],
      ["Both legs at the bid.", "1.1416 × 104.62 = <b>119.43</b> JPY per EUR."],
      ["Arbitrage buys at the low offer and sells at the high bid."]),
    Y("23", 26, "Drill · F23", 5, "Economics", "Carry trade all-in return",
      ["An investor borrows USD at 2% and converts to BRL at 5.00 BRL/USD. The BRL deposit pays 10%. At the end of the year the rate is 5.20 BRL/USD."],
      "Which formula gives the all-in return as a share of the loan?",
      [["(1 + i<sub>BRL</sub>) × <span class=\"fr\"><span>S<sub>0</sub></span><span>S<sub>1</sub></span></span> – (1 + i<sub>USD</sub>)", "= 3.77%."], ["(1 + i<sub>BRL</sub>) × <span class=\"fr\"><span>S<sub>1</sub></span><span>S<sub>0</sub></span></span> – (1 + i<sub>USD</sub>)", "Converts back the wrong way: 12.40%."], ["i<sub>BRL</sub> – i<sub>USD</sub>", "Ignores the currency move: 8.00%."]], 0, 0,
      ["All-in = (1 + i<sub>BRL</sub>) × (S<sub>0</sub> ÷ S<sub>1</sub>) – (1 + i<sub>USD</sub>), S in BRL per USD"],
      ["BRL end value = 1.10 per 1 BRL invested; converted back at 5.20 per USD.", "1.10 × (5.00 ÷ 5.20) = 1.0577; minus 1.02 = <b>3.77%</b>."],
      ["A depreciating BRL eats the interest gain."]),
    Y("24", 27, "Drill · F24", 5, "Economics", "Covered interest rate parity",
      ["Spot USD/EUR is 1.2500 (USD per EUR). The 6-month USD rate is 3.0% and the 6-month EUR rate is 1.0% (annual rates, simple interest)."],
      "Which formula gives the 6-month forward USD/EUR?",
      [["S × <span class=\"fr\"><span>1 + i<sub>USD</sub> × t</span><span>1 + i<sub>EUR</sub> × t</span></span>", "= 1.2624."], ["S × <span class=\"fr\"><span>1 + i<sub>EUR</sub> × t</span><span>1 + i<sub>USD</sub> × t</span></span>", "Rates inverted: 1.2377."], ["S × <span class=\"fr\"><span>1 + i<sub>USD</sub></span><span>1 + i<sub>EUR</sub></span></span>", "Ignores the 6-month period: 1.2748."]], 0, 0,
      ["F = S × <span class=\"fr\"><span>1 + i<sub>price currency</sub> × t</span><span>1 + i<sub>base currency</sub> × t</span></span>"],
      ["Price currency = USD (3.0%), base currency = EUR (1.0%).", "F = 1.2500 × 1.0150 ÷ 1.0050 = <b>1.2624</b>."],
      ["The higher-rate currency trades at a forward discount; here USD is the price currency, so the forward rises."]),
    Y("25", 28, "Drill · F25", 38, "Portfolio", "Parametric one-day VaR",
      ["A $200,000,000 portfolio has an expected annual return of 6% and an annual standard deviation of 15%. Use 250 trading days and z = 1.65 for 5% VaR."],
      "Which formula gives the one-day VaR?",
      [["(z × <span class=\"fr\"><span>σ</span><span>√250</span></span> – <span class=\"fr\"><span>μ</span><span>250</span></span>) × value", "= $3,082,655."], ["(z × <span class=\"fr\"><span>σ</span><span>√250</span></span> + <span class=\"fr\"><span>μ</span><span>250</span></span>) × value", "Adds the mean: $3,178,655."], ["<span class=\"fr\"><span>z × σ – μ</span><span>250</span></span> × value", "Scales both by 250: $150,000."]], 0, 0,
      ["VaR = (z × σ<sub>daily</sub> – μ<sub>daily</sub>) × value", "σ<sub>daily</sub> = <span class=\"fr\"><span>σ</span><span>√250</span></span> · μ<sub>daily</sub> = <span class=\"fr\"><span>μ</span><span>250</span></span>"],
      ["σ<sub>daily</sub> = 15% ÷ √250 = 0.9487%; μ<sub>daily</sub> = 6% ÷ 250 = 0.024%.", "VaR = (1.65 × 0.9487% – 0.024%) × 200,000,000 = <b>$3,082,655</b>."],
      ["The mean reduces VaR; volatility scales with the square root of time."]),
    Y("26", 29, "Drill · F26", 35, "Portfolio", "Expected active return (fundamental law)",
      ["A manager has a transfer coefficient of 0.80, an information coefficient of 0.05, breadth of 100 independent bets a year and active risk of 4%."],
      "Which formula gives the expected active return?",
      [["TC × IC × √BR × σ<sub>A</sub>", "= 1.60%."], ["IC × √BR × σ<sub>A</sub>", "Leaves out the transfer coefficient: 2.00%."], ["TC × IC × BR × σ<sub>A</sub>", "Uses BR instead of √BR: 16.00%."]], 0, 0,
      ["E(R<sub>A</sub>) = TC × IC × √BR × σ<sub>A</sub>"],
      ["√100 = 10.", "0.80 × 0.05 × 10 × 4% = <b>1.60%</b>."],
      ["Constraints reduce TC and so reduce the active return."]),
    Y("27", 30, "Drill · F27", 30, "Alternatives", "Commodity futures total return",
      ["A commodity futures position earns a price return of 1.5% over 3 months. It is rolled from the near contract at 82.00 to the far contract at 80.00. Collateral earns 3.6% a year."],
      "Which formula gives the 3-month total return?",
      [["price return + <span class=\"fr\"><span>near – far</span><span>near</span></span> + rate × <span class=\"fr\"><span>months</span><span>12</span></span>", "= 4.84%."], ["price return + <span class=\"fr\"><span>near – far</span><span>near</span></span> + rate", "Full-year collateral: 7.54%."], ["price return – <span class=\"fr\"><span>near – far</span><span>near</span></span> + rate × <span class=\"fr\"><span>months</span><span>12</span></span>", "Roll sign reversed: -0.04%."]], 0, 0,
      ["Total = price return + roll return + collateral return", "Roll = (near – far) ÷ near · collateral = rate × months ÷ 12"],
      ["Roll = (82 – 80) ÷ 82 = 2.44% (backwardation, positive for a long).", "Collateral = 3.6% × 3 ÷ 12 = 0.90%.", "Total = 1.5% + 2.44% + 0.90% = <b>4.84%</b>."],
      ["Scale collateral to the period."]),
    Y("45", 31, "Drill · E4", 41, "Ethics", "Personal trading reports",
      ["An employer sets up compliance for employees' personal trading under VI(B) Priority of Transactions."],
      "What reporting frequency is recommended?",
      [["Holdings annually; transactions quarterly", "Recommended compliance procedure."], ["Holdings quarterly; transactions annually", "The frequencies are swapped."], ["Both only at hiring", "Reports must be ongoing."]], 0, 0,
      ["VI(B): personal holdings reports annually, transaction reports quarterly"],
      ["Duplicate trade confirmations and pre-clearance support the same aim.", "Check the exact wording in Schweser."],
      ["Client trades have priority over employer and personal trades."]),
    Y("28", 32, "Drill · F28", 19, "Equity", "FCFF from net income",
      ["Net income 80, depreciation 20, interest expense 10, tax rate 30%, fixed capital investment 35, working capital investment 5."],
      "Which formula gives FCFF?",
      [["NI + Dep + Int × (1 – t) – FCInv – WCInv", "= 67."], ["NI + Dep + Int – FCInv – WCInv", "Interest not after tax: 70."], ["NI + Dep – FCInv – WCInv", "Interest not added back: 60."]], 0, 0,
      ["FCFF = NI + Dep + Int × (1 – t) – FCInv – WCInv"],
      ["After-tax interest = 10 × 0.70 = 7.", "FCFF = 80 + 20 + 7 – 35 – 5 = <b>67</b>."],
      ["FCFF is before debt service, so add back after-tax interest."]),
    Y("29", 33, "Drill · F29", 11, "FSA", "Cash-flow-based accruals ratio",
      ["Net income 120, cash flow from operations 90, cash flow from investing –60. Net operating assets: 400 at the start, 440 at the end."],
      "Which formula gives the cash-flow-based accruals ratio?",
      [["<span class=\"fr\"><span>NI – (CFO + CFI)</span><span>average NOA</span></span>", "= 21.4%."], ["<span class=\"fr\"><span>NI – CFO</span><span>average NOA</span></span>", "Leaves out the investing cash flow: 7.1%."], ["<span class=\"fr\"><span>NI – (CFO + CFI)</span><span>ending NOA</span></span>", "Uses ending NOA: 20.5%."]], 0, 0,
      ["Accruals ratio = <span class=\"fr\"><span>NI – (CFO + CFI)</span><span>average NOA</span></span>"],
      ["CFO + CFI = 90 – 60 = 30; NI – 30 = 90.", "Average NOA = 420; ratio = 90 ÷ 420 = <b>21.4%</b>."],
      ["A high ratio flags low earnings quality."]),
    Y("30", 34, "Drill · F30", 20, "Equity", "Relative strength",
      ["A stock rose from 40 to 46 over the year. The index rose from 1,000 to 1,080. Both are price indices."],
      "Which formula gives the stock's relative strength?",
      [["<span class=\"fr\"><span><span class=\"fr\"><span>stock<sub>end</sub></span><span>index<sub>end</sub></span></span></span><span><span class=\"fr\"><span>stock<sub>start</sub></span><span>index<sub>start</sub></span></span></span></span>", "= 1.0648."], ["<span class=\"fr\"><span>Δstock</span><span>Δindex</span></span>", "A ratio of point changes: 0.075."], ["<span class=\"fr\"><span>stock<sub>end</sub></span><span>stock<sub>start</sub></span></span> – <span class=\"fr\"><span>index<sub>end</sub></span><span>index<sub>start</sub></span></span>", "A difference of price ratios: 0.07."]], 0, 0,
      ["Relative strength = (stock ÷ index)<sub>end</sub> ÷ (stock ÷ index)<sub>start</sub>"],
      ["Start ratio = 40 ÷ 1,000 = 0.04; end ratio = 46 ÷ 1,080 = 0.04259.", "Relative strength = 0.04259 ÷ 0.04 = <b>1.0648</b>."],
      ["Prices only: no dividends."]),
    Y("31", 35, "Drill · C1", 33, "Alternatives", "Momentum: ranking vs own trend",
      ["A manager ranks 12 bond futures by 30-day spread change, goes long the best and short the worst. The net position is market neutral."],
      "Which strategy is this?",
      [["Cross-sectional momentum", "Assets are ranked against each other, so longs and shorts balance."], ["Time-series momentum", "Each asset is judged on its own past trend; the book can be net long or net short."], ["Global macro", "Top-down views on global trends, not a ranking inside one asset class."]], 0, 0,
      ["Cross-sectional: rank within the class, long the best and short the worst → net ≈ 0", "Time-series: each asset on its own trend → net long or short"],
      ["The position in one bond depends on the others' performance → cross-sectional.", "Equal longs and shorts → market neutral."],
      ["'Ranks relative to the others' is the cross-sectional tell."]),
    Y("32", 36, "Drill · C2", 33, "Alternatives", "Sortino or Sharpe?",
      ["Three combined portfolios all pass the variance limit. The investment committee expects large negative events."],
      "Which measure picks the best portfolio?",
      [["The highest Sortino ratio", "Sortino counts only downside deviation, the risk that matters when large negative events are expected."], ["The highest Sharpe ratio", "Sharpe counts upside swings as risk too."], ["The lowest maximum drawdown", "Drawdown is not a risk-adjusted ratio."]], 0, 0,
      ["Large negative events expected → rank by Sortino (downside deviation)"],
      ["First filter by the variance (SD) limit, then pick the highest Sortino."],
      ["Mentions of tail risk or skewed returns point to Sortino."]),
    Y("33", 37, "Drill · C3", 34, "Portfolio", "Equity risk premium over the cycle",
      ["Risk-averse investors, a recession and a boom."],
      "Which is right for the equity risk premium?",
      [["Recession ERP is higher than boom ERP", "Equities fall when consumption is poor and money is most valuable, so investors want more compensation."], ["Boom ERP is higher than recession ERP", "In a boom investors worry less and need less."], ["The ERP is the same in both", "The premium moves with the cycle."]], 0, 0,
      ["ERP is higher in recessions; higher ERP → lower prices and P/E"],
      ["Poor hedge in bad times → bigger premium."],
      ["Averse means dislikes: risk-averse investors dislike risk."]),
    Y("34", 38, "Drill · C4", 33, "Alternatives", "Hedging a failed merger arbitrage",
      ["A fund is long the target (TT) and short the acquirer (AA) in a stock-for-stock deal. If the deal fails, TT falls back and AA rises back."],
      "Which hedge protects the fund?",
      [["Buy OTM puts on TT and OTM calls on AA", "Puts protect the long leg and calls protect the short leg."], ["Buy OTM calls on TT and OTM puts on AA", "Reversed: protects the wrong direction on both legs."], ["Buy AA shares and sell TT shares", "That cancels the arbitrage position instead of hedging it."]], 0, 0,
      ["Protect a long with puts and a short with calls"],
      ["Long TT loses if TT falls → buy puts on TT.", "Short AA loses if AA rises → buy calls on AA."],
      ["Options give protection and keep the profit if the deal succeeds."]),
    Y("46", 39, "Drill · E5", 41, "Ethics", "Professional Conduct Statement",
      ["A CFA Institute member is asked to confirm compliance with the Code and Standards."],
      "How often is the Professional Conduct Statement completed?",
      [["Annually", "Required each year."], ["Only when joining", "It is repeated."], ["Every 5 years", "Too infrequent."]], 0, 0,
      ["PCS: completed annually by members"],
      ["It confirms compliance and discloses any investigations or complaints.", "Check the exact wording in Schweser."],
      ["Do not confuse it with the candidate's one-time pledge."]),
    Y("35", 40, "Drill · C5", 28, "Derivatives", "Which time in T – t?",
      ["A forward with 60 days to expiry was entered 30 days ago. Value it today."],
      "Which time do you discount over?",
      [["T – t = 60/360 – 30/360 = 30/360", "T is the original maturity and t the time elapsed; T – t is the time left."], ["60/360", "That is the original maturity, not the time left."], ["90/360", "Adds the elapsed time instead of subtracting it."]], 0, 0,
      ["T – t = time left"],
      ["Time left = original maturity – elapsed time."],
      ["Exponent in both the forward price and the discounting."]),
    Y("36", 41, "Drill · C6", 23, "Fixed Income", "Which maturities for a roll-down?",
      ["An investor buys a 7-year zero and sells it after 3 years. The curve and spreads are unchanged."],
      "Which yields set the buy and sell prices?",
      [["Buy at the 7-year yield, sell at the 4-year yield", "After 3 years, 4 years remain."], ["Buy at the 7-year yield, sell at the 3-year yield", "3 years is the holding period, not the remaining maturity."], ["Buy at the 7-year yield, sell at the 10-year yield", "Time makes the bond shorter, not longer."]], 0, 0,
      ["Sell at the maturity left = original – years held"],
      ["Remaining maturity = 7 – 3 = 4 years."],
      ["Years held is the power in the annual return."]),
    Y("37", 42, "Drill · C7", 27, "Fixed Income", "CDS and an LBO",
      ["A company becomes an LBO target: the buyer pays a premium and loads the company with debt."],
      "Which trade fits both effects?",
      [["Buy the stock and buy protection", "The share price rises with the premium, and the debt widens the credit spread."], ["Buy the stock and sell protection", "Selling protection loses when the spread widens."], ["Short the stock and buy protection", "The stock rises in an LBO."]], 0, 0,
      ["Share price up and credit spread wider"],
      ["Both legs go the same way, so the trades are in the same direction."],
      ["Buy protection when credit risk rises."]),
    Y("38", 43, "Drill · C8", 27, "Fixed Income", "Bond spread above CDS spread",
      ["A bond's credit spread (yield – MRR) is above the CDS spread."],
      "Which basis trade fits?",
      [["Buy the bond and buy protection", "The bond is cheap relative to the CDS; you gain as the spreads converge."], ["Sell the bond and sell protection", "The reverse."], ["Buy the bond and sell protection", "Doubles the credit risk."]], 0, 0,
      ["Bond spread > CDS spread → buy bond + buy protection"],
      ["Bond credit risk is paid more than the CDS prices it."],
      ["Bond spread < CDS spread → short bond + sell protection."]),
    Y("39", 44, "Drill · C9", 27, "Fixed Income", "What a single-name CDS covers",
      ["A CDS names a reference obligation."],
      "Which obligations does it cover?",
      [["Obligations ranking equal to the reference obligation", "Same seniority as the reference obligation."], ["Any obligation of the company", "Not covered if it ranks differently."], ["Only the reference bond itself", "Other equal-ranking debt is covered too."]], 0, 0,
      ["Reference obligation sets the seniority covered"],
      ["A senior unsecured reference covers senior unsecured debt, not subordinated."],
      ["The cheapest-to-deliver is chosen among covered obligations."]),
    Y("40", 45, "Drill · C10", 14, "Corporate Issuers", "Conflicts of interest from the ownership structure",
      ["A firm has dispersed ownership and concentrated voting power."],
      "Which conflict arises?",
      [["Principal-principal", "Controlling shareholders' interests may differ from minority shareholders'."], ["Principal-agent", "This is dispersed ownership and dispersed voting."], ["No conflict", "Control without ownership creates a conflict."]], 0, 0,
      ["Dispersed ownership and dispersed voting → principal-agent", "Concentrated voting → principal-principal"],
      ["The controlling shareholder can steer the company against minorities."],
      ["A CEO on the remuneration committee is a red flag."]),
    Y("41", 46, "Drill · C11", 27, "Fixed Income", "Cash or physical settlement",
      ["You own a bond worth more than the cheapest-to-deliver."],
      "Which settlement do you prefer?",
      [["Cash settlement", "You collect the CDS payout on the CTD price and sell your own bond at its higher price."], ["Physical settlement", "You would deliver your bond at par and lose its extra value."], ["Indifferent", "The two give different proceeds."]], 0, 0,
      ["Own bond above CTD → prefer cash settlement"],
      ["Cash: CDS payout (1 – CTD price) plus your bond's own price."],
      ["Own bond below CTD → physical."])
  ].sort((a, b) => a.session - b.session || a.num - b.num);
})();

// Bed mode: one short concept check per note. [question, right option, wrong option, wrong option]; the app shuffles the options.
const NOTE_QUICK = {
 "m1q3": ["A CDS payout uses the recovery rate of which bond?", "The cheapest-to-deliver bond (lowest price)", "The bond you own", "The most expensive deliverable bond"],
 "m1q4": ["The CDS curve is upward sloping and expected to flatten. Which trade?", "Buy short-dated protection, sell long-dated protection", "Buy long-dated protection, sell short-dated protection", "Sell both short- and long-dated protection"],
 "m1q6": ["Current rate method: at which rate is each income statement line translated?", "Every line at the average rate", "Every line at the year-end rate", "Cost of sales at the historical rate, revenue at the average rate"],
 "m1q11": ["Active return from factors is:", "Σ (portfolio β – benchmark β) × factor return, plus security selection", "Σ portfolio β × factor return, with no benchmark", "Σ (benchmark β – portfolio β) × factor return, minus security selection"],
 "m1q13": ["Neoclassical growth per worker in the steady state (θ = TFP growth, α = capital share):", "θ ÷ (1 – α)", "θ ÷ α", "θ + labor-force growth"],
 "m1q18": ["Gamma of a delta-hedged position that is short options and long shares:", "Negative", "Positive", "Zero"],
 "m1q19": ["New option value after a day, using theta:", "Old value + theta × days (theta is already negative)", "Old value – theta × days", "Old value, ignoring theta"],
 "m1q27": ["Which earnings are least persistent for residual income?", "High accruals and extreme ROE: persistence is low", "Low accruals and stable ROE: persistence is low", "High accruals and extreme ROE: persistence is high"],
 "m1q29": ["Real GDP growth is negative. Which sector holds up best?", "Recession: staples (defensives)", "Recession: cyclicals", "Expansion: staples"],
 "m1q31": ["In Δw* = (μ ÷ σ²) × σA ÷ (IC × √BR), what raises the active weights?", "A higher target active risk σA", "A higher IC", "A higher breadth"],
 "m1q33": ["A coupon bond's YTM is closest to:", "The spot rate of its maturity", "Its coupon rate", "The 1-year spot rate"],
 "m1q34": ["Curve unchanged: the 1-year return on an N-year zero is:", "The forward rate f(N – 1, 1): rolling down", "The 1-year spot rate", "The N-year spot rate"],
 "m1q35": ["Investors will not leave their maturity segment, even for extra return:", "Segmented markets", "Preferred habitat", "Liquidity preference"],
 "m1q36": ["Key rate durations add up to:", "Effective duration", "Macaulay duration", "Convexity"],
 "m1q37": ["Regressing two unit-root series is valid when:", "They are cointegrated: the residual is stationary", "They both drift upward", "The residual has a unit root"],
 "m1q40": ["Which tokens does mutual information keep for classifying text?", "Those that appear mostly in one class", "Those that appear most often overall", "Those that appear equally across classes"],
 "m1q42": ["Referral fees (VI(C)): what must be disclosed?", "Any benefit paid or received for a referral, travel and tickets included", "Only cash fees received", "Only offers you accepted and were paid for"],
 "m1q43": ["VI(A) and III(E): what do you disclose?", "Your own committee seat; never the client's identity", "Both the seat and the client", "Neither"],
 "m1q44": ["Priority of transactions (VI(B)) is violated when:", "A personal trade goes ahead of a pending client trade and disadvantages the client", "Any personal trade in the same stock", "A personal trade is made when no client trade is pending"],
 "m2q1": ["Minimum value of a convertible bond:", "The greater of conversion value and straight bond value", "The lesser of conversion value and straight bond value", "Conversion value only"],
 "m2q2": ["Putable bond on a binomial tree, at each node:", "Add the coupon, then take the max of value and put price", "Add the coupon, then take the min of value and put price", "Take the max of value and call price"],
 "m2q6": ["Normalized EPS, average ROE method:", "Average ROE × current book value per share", "Average ROE × current EPS", "Current ROE × average book value per share"],
 "m2q8": ["Relative strength is:", "A ratio of stock to index prices, prices only", "A ratio of total returns including dividends", "The stock return minus the index return"],
 "m2q10": ["Target payout model: the dividend increase is:", "(EPS × target payout – previous dividend) ÷ years to adjust", "(EPS × target payout) ÷ years to adjust", "(previous dividend – EPS × target payout) ÷ years to adjust"],
 "m2q13": ["Parametric VaR for one day:", "(z × daily σ – daily mean) × value", "(z × daily σ + daily mean) × value", "(z × annual σ – annual mean) × value"],
 "m2q17": ["Triangular arbitrage with a dealer and an interbank market:", "Buy at the low offer, sell at the high bid", "Buy at the high bid, sell at the low offer", "Trade both legs at the mid rate"],
 "m2q19": ["Carry trade all-in return:", "Convert back at the new spot rate, then repay the loan with interest", "Add up the interest rate differential only", "Convert back at the starting spot rate"],
 "m2q20": ["A currency crisis warning sign:", "FX reserves falling", "FX reserves rising", "An undervalued currency"],
 "m2q22": ["Share-based pay: the value at settlement is above the value at grant:", "Excess tax benefit: tax expense falls (US GAAP)", "Tax expense rises", "The excess benefit goes to equity under US GAAP"],
 "m2q25": ["Equity swap value after initiation:", "Equity leg minus fixed leg, both valued as bonds including notional", "Equity leg minus fixed leg, leaving out the notional", "The fixed leg only"],
 "m2q28": ["Value of a long forward after initiation:", "S_t – PV(dividends) – F0 ÷ (1 + r)^(T – t)", "S_t – F0, undiscounted", "S_t ÷ (1 + r)^(T – t) – F0"],
 "m2q33": ["Performance presentation with terminated accounts:", "Fine if the accounts and their termination dates are shown", "Terminated accounts must be dropped", "Fine without showing the dates"],
 "m2q35": ["Directed brokerage and soft dollars (III(A)):", "Directed brokerage is fine if disclosed; soft dollars must benefit the client who generated them", "Both always breach III(A)", "Soft dollars may benefit any client"],
 "m2q39": ["Supervisor's compliance education (IV(C)):", "Continual, not only at hiring", "Only at hiring", "Only after a violation"],
 "m2q42": ["Commodity futures total return:", "Price + roll + collateral (rate × months ÷ 12)", "Price + roll + a full year of collateral", "Price + collateral, no roll"],
 "c1": ["You own a bond worth more than the cheapest-to-deliver. Which settlement?", "Prefer cash settlement", "Prefer physical settlement", "Indifferent"],
 "c2": ["Severe near-term stress gives a credit curve that is:", "Downward-sloping", "Upward-sloping", "Flat"],
 "c3": ["Missed interest on a subordinated bond after the grace period, no bankruptcy:", "A credit event (failure to pay)", "Not a credit event: bankruptcy is needed", "Not a credit event: only senior debt counts"],
 "c5": ["Protection buyer, spreads have widened:", "Profit: close out by selling protection", "Loss: close out by selling protection", "Profit: close out by buying more protection"],
 "c6": ["Basis trade profit on convergence:", "Bond spread (yield – MRR) minus CDS spread", "Bond yield minus CDS spread", "CDS spread minus MRR"],
 "c7": ["Compliance step before trading CDS:", "Sign an ISDA master agreement", "Sign a new agreement for every trade", "Post the full notional"],
 "c8": ["A full hedge of many exposures:", "CDS index", "Single-name CDS", "Tranche CDS"],
 "c12": ["Economy weakening: which index trade?", "Buy high-yield protection, sell investment-grade protection", "Sell high-yield protection, buy investment-grade protection", "Buy protection on both"],
 "c13": ["A steepening view on the credit curve:", "Buy long-dated protection, sell short-dated protection", "Buy short-dated protection, sell long-dated protection", "Sell protection on both"],
 "c14": ["Debt-funded takeover: equity versus credit trade:", "Long the target's shares, buy protection on the acquirer", "Long the acquirer's shares, buy protection on the target", "Short the target's shares, sell protection on the acquirer"],
 "c16": ["CDS profit is about:", "Spread change × duration × notional", "Spread change × notional", "Spread change ÷ duration × notional"],
 "c18": ["A company becomes an LBO target. Which trade?", "Buy the stock and buy protection", "Buy the stock and sell protection", "Short the stock and buy protection"],
 "c19": ["Bought 1-year protection and sold 5-year protection:", "A flattener", "A steepener", "A parallel shift trade"],
 "c22": ["Bond spread above CDS spread:", "Buy the bond and buy protection", "Sell the bond and sell protection", "Buy the bond and sell protection"],
 "c25": ["A naked CDS seller profits when credit improves. That profit is:", "A credit view, not an arbitrage", "An arbitrage, locked in", "A loss: spreads widen"],
 "c27": ["Bond spread below CDS spread:", "The bond's credit compensation is too low", "The bond's credit compensation is too high", "The two are fairly priced"],
 "c29": ["A single-name CDS covers obligations that rank:", "Equal to the reference obligation", "Any obligation of the company", "Only the reference bond itself"],
 "c30": ["Credit events in the United States:", "Bankruptcy and failure to pay (not restructuring)", "Bankruptcy, failure to pay and restructuring", "Restructuring only"],
 "c31": ["CDS price per 100 par:", "100 – upfront premium, with upfront ≈ (spread – coupon) × duration", "100 + upfront premium", "100 – (spread – coupon), ignoring duration"],
 "c32": ["Stronger economy: which index trade?", "Sell high-yield protection, buy investment-grade protection", "Buy high-yield protection, sell investment-grade protection", "Sell protection on both"],
 "c33": ["Flattener legs:", "Sell long-dated protection, buy short-dated protection", "Buy long-dated protection, sell short-dated protection", "Buy protection on both"],
 "c34": ["Bond spread below CDS spread: which trade?", "Short the bond and sell protection", "Buy the bond and buy protection", "Short the bond and buy protection"],
 "tbc2": ["Dispersed ownership with concentrated voting power:", "Principal-principal conflict", "Principal-agent conflict", "No conflict"],
 "tbc3": ["Which committee composition is a governance red flag?", "The CEO on the remuneration committee", "An executive director on the board", "Independent members on the audit committee"],
 "tbc5": ["An activist shareholder:", "Takes a minority stake to influence governance", "Takes a controlling stake to run the company", "Stays passive and votes with management"],
 "tbc6": ["Integrating ESG factors:", "Identify material factors, analyse history, forecasts and peers, then adjust the valuation", "Adjust the valuation first, then identify factors", "Use only qualitative factors"],
 "tbc7": ["ESG versus governance disclosure:", "Governance is regulated and consistent; ESG is voluntary", "ESG is regulated and consistent; governance is voluntary", "Both are equally consistent"],
 "tbc9": ["Required return, dividend growth model:", "D1 ÷ P0 + g", "D0 ÷ P0 + g", "D1 ÷ P0 – g"],
 "tbc11": ["Shadow banking and legal systems:", "Non-bank lending; common law lowers the risk premium", "Bank lending; common law lowers the risk premium", "Non-bank lending; common law raises the risk premium"],
 "s1c1": ["An index backfilled with Year-1 constituents: the ERP bias is:", "Upward (survivorship bias)", "Downward", "None"],
 "s1q2": ["Mean and variance are not constant:", "Not covariance stationary", "Still covariance stationary", "Durbin–Watson decides"],
 "s1c4": ["Grinold–Kroner ERP:", "dy + ΔP/E + inflation + real growth – ΔS – long-term Rf", "dy + ΔP/E + inflation + real growth – ΔS – short-term Rf", "dy + ΔP/E + inflation + real growth + ΔS – long-term Rf"],
 "s1e13": ["An analyst sends his model, not his recommendation, to a company's CFO for comments:", "No breach", "A breach of Fair Dealing", "A breach of Diligence and Reasonable Basis"],
 "s1f39": ["Securitization via an SPE:", "Lower financing cost; investors gain diversification and stable cash flows", "Higher financing cost; investors gain diversification and stable cash flows", "Lower financing cost; investors lose diversification"],
 "s1e54": ["Trailing P/E: which items do you adjust in EPS?", "Non-recurring items only", "Every cost the company excludes from core EPS", "None"],
 "s1e55": ["A high P/E implies:", "Higher growth, lower risk", "Higher growth, higher risk", "Lower growth, lower risk"],
 "s1e56": ["Weighted harmonic mean P/E:", "The reciprocal of the weighted average earnings yield", "The weighted average of the P/Es", "The reciprocal of the weighted average P/E"],
 "s1e57": ["The harmonic mean and outliers:", "Reduces large outliers, can aggravate small ones", "Reduces small outliers, can aggravate large ones", "Mitigates both"],
 "s1e59": ["A buy signal compares:", "The justified trailing P/E with the trailing P/E", "The justified trailing P/E with the forward P/E", "The justified P/E with the index P/E"],
 "s1r61": ["Residual income = net income – r ×", "Beginning-of-year equity", "End-of-year equity", "Dividends"],
 "s1r62": ["Justified P/B from residual income:", "(forecast ROE – g) ÷ (r – g)", "(historical ROE – g) ÷ (r – g)", "(forecast ROE – r) ÷ (r – g)"],
 "s1r63": ["Clean surplus is violated by:", "Gains that bypass income, such as AFS gains and translation of self-sustaining subsidiaries", "Ordinary FX transactions", "Dividends"],
 "s1r65": ["Residual income adjustments:", "Adjust income, not book value, for non-recurring items", "Adjust book value, not income, for non-recurring items", "Make no adjustments"],
 "s2f27": ["Riding the curve with swap spreads, curve unchanged:", "Buy at the long maturity's spot + spread, sell at the shorter maturity's spot + spread", "Buy and sell at the long maturity's spot + spread", "Use the government spots and ignore spreads"],
 "s2f28": ["Pricing with a Z-spread:", "Add Z to every spot rate and discount each cash flow at its own rate", "Add Z to the last spot rate only", "Discount every cash flow at the coupon rate"],
 "s2f29": ["Which spread shows risk and liquidity in the money market?", "MRR–OIS spread", "TED spread", "Z-spread"],
 "s2d26": ["Value of a long forward after initiation (continuous):", "(F_t – F_0) discounted over T – t, with F_t = S × e^((r – δ)(T – t))", "(F_t – F_0) discounted, but with the dividend yield left out of F_t", "(F_t – F_0) left undiscounted"],
 "s2d28": ["Pay-fixed swap when the market rate is above the contract rate:", "Gain: notional × rate difference × sum of all PV factors", "Loss: notional × rate difference × sum of all PV factors", "Gain: notional × rate difference × last PV factor only"],
 "s2a2": ["Event-driven strategies:", "Carry some equity beta and left-tail risk", "Have no equity beta", "Are market neutral"],
 "s2a4": ["Protecting a stock-for-stock merger arbitrage against deal failure:", "Buy calls on the short acquirer, puts on the long target", "Buy puts on the short acquirer, calls on the long target", "Sell puts on the acquirer, buy calls on the target"],
 "s2a6": ["Rank bonds within one asset class, long the best and short the worst:", "Cross-sectional momentum", "Time-series momentum", "Global macro"],
 "s2a9": ["Large negative events are expected: rank portfolios by:", "Sortino ratio", "Sharpe ratio", "Maximum drawdown"],
 "s2p24": ["A large equity risk premium means equity returns and consumption are:", "Positively correlated: equities are a poor hedge", "Negatively correlated: equities are a hedge", "Uncorrelated"],
 "s2p25": ["Best hedge against bad consumption outcomes:", "Short-dated, default-free government bonds", "Long-dated, default-free government bonds", "Equities"],
 "s2p28": ["Commercial real estate discount rate versus equities:", "Equity rate + a liquidity premium", "Equity rate – a liquidity premium", "The same rate"],
 "s2p29": ["Cyclical earnings and the risk premium:", "Cyclical earnings lead the economy; the risk premium stays positive", "Cyclical earnings lag the economy", "Cyclical earnings lead; the risk premium turns negative late in recessions"],
 "s2p30": ["Which change raises market P/E multiples?", "Lower volatility of real GDP growth", "A higher equity risk premium", "More uncertainty about inflation"],
 "s2p32": ["Numerator of the real estate present value formula:", "Net rental income (rent less expenses)", "Gross rent payments", "Net income after tax"],
 "s2b18": ["A flatter return distribution has:", "A higher standard deviation and fatter tails", "A lower standard deviation and fewer extreme outcomes", "A higher standard deviation and fewer extreme outcomes"],
 "s2b19": ["Backtesting:", "Can accept or reject a strategy, and assumes the future resembles the past", "Can accept or reject a strategy, with no assumption about the future", "Assumes the future resembles the past, but never rejects a strategy"],
 "s2e19": ["Notice to clients of a finder's fee policy:", "At least quarterly", "Semiannually", "Annually"]
};

// Extra definition checks split from existing notes (max 25 notes a set). Placed right after the parent note.
(function () {
  const EXTRAS = [
 {
  "parent": "m1q3",
  "key": "cd",
  "reading": 27,
  "subject": "Fixed Income",
  "title": "Who holds the cheapest-to-deliver option",
  "ask": "In a CDS, who chooses which deliverable bond is delivered?",
  "options": [
   {
    "t": "The protection buyer",
    "n": "The buyer receives par for whichever bond it delivers, so it delivers the cheapest."
   },
   {
    "t": "The protection seller",
    "n": "The seller pays against what is delivered."
   },
   {
    "t": "The reference entity",
    "n": "It plays no role in settlement."
   }
  ],
  "formula": [
   "Protection buyer delivers; the cheapest deliverable bond sets the payout"
  ],
  "why": [
   "The buyer is paid par for the bond it hands over.",
   "So it hands over the lowest-priced deliverable bond."
  ],
  "general": [
   "Payout = notional × (1 – CTD price)."
  ]
 },
 {
  "parent": "m1q4",
  "key": "pr",
  "reading": 27,
  "subject": "Fixed Income",
  "title": "What buying protection means",
  "ask": "Buying CDS protection makes you economically:",
  "options": [
   {
    "t": "Short the credit: you gain when the spread widens",
    "n": "Protection is worth more as credit risk rises."
   },
   {
    "t": "Long the credit: you gain when the spread tightens",
    "n": "That is the protection seller."
   },
   {
    "t": "Neutral to credit spreads",
    "n": "A CDS position moves with the spread."
   }
  ],
  "formula": [
   "Buy protection = short credit risk · sell protection = long credit risk"
  ],
  "why": [
   "Spread widens → the protection you hold gains value.",
   "Spread tightens → the seller gains."
  ],
  "general": [
   "Negative view on a name → buy protection."
  ]
 },
 {
  "parent": "m1q6",
  "key": "ct",
  "reading": 9,
  "subject": "FSA",
  "title": "Where the translation adjustment goes",
  "ask": "Under the current rate method, where is the translation gain or loss reported?",
  "options": [
   {
    "t": "In equity (cumulative translation adjustment)",
    "n": "It stays out of net income."
   },
   {
    "t": "In net income",
    "n": "That is the temporal method."
   },
   {
    "t": "In operating income",
    "n": "Neither method puts it there."
   }
  ],
  "formula": [
   "Current rate: translation adjustment in equity · temporal: gain or loss in net income"
  ],
  "why": [
   "The current rate method translates the whole balance sheet at one rate, so the exposure sits in equity."
  ],
  "general": [
   "Remeasurement under temporal hits net income."
  ]
 },
 {
  "parent": "m1q35",
  "key": "ph",
  "reading": 23,
  "subject": "Fixed Income",
  "title": "Preferred habitat vs segmented markets",
  "ask": "Which theory says investors will leave their preferred maturity if paid enough extra return?",
  "options": [
   {
    "t": "Preferred habitat",
    "n": "Investors have a preferred maturity but will move for compensation."
   },
   {
    "t": "Segmented markets",
    "n": "Investors never leave their segment, whatever the return."
   },
   {
    "t": "Pure expectations",
    "n": "No maturity preference: forward rates equal expected spot rates."
   }
  ],
  "formula": [
   "Move if paid → preferred habitat · never move → segmented markets"
  ],
  "why": [
   "The key phrase is 'if paid enough'."
  ],
  "general": [
   "Segmented = rigid, preferred habitat = flexible."
  ]
 },
 {
  "parent": "m1q13",
  "key": "tp",
  "reading": 6,
  "subject": "Economics",
  "title": "What drives per-worker growth in the neoclassical model",
  "ask": "In the neoclassical growth model, what drives long-run growth in output per worker?",
  "options": [
   {
    "t": "Technological progress (TFP)",
    "n": "The only source of permanent per-capita growth."
   },
   {
    "t": "Capital accumulation",
    "n": "Diminishing returns stop it from being permanent."
   },
   {
    "t": "Labor force growth",
    "n": "It raises total output, not output per worker."
   }
  ],
  "formula": [
   "Neoclassical: permanent per-capita growth comes only from TFP"
  ],
  "why": [
   "Capital deepening hits diminishing returns.",
   "Per-worker growth = θ ÷ (1 – α)."
  ],
  "general": [
   "Endogenous growth adds R&D and human capital."
  ]
 },
 {
  "parent": "m2q1",
  "key": "cv",
  "reading": 25,
  "subject": "Fixed Income",
  "title": "Conversion value",
  "ask": "Conversion value of a convertible bond is:",
  "options": [
   {
    "t": "Share price × conversion ratio",
    "n": "What you would get by converting now."
   },
   {
    "t": "Bond price ÷ conversion ratio",
    "n": "That is the conversion price idea, not the value."
   },
   {
    "t": "Par value × coupon rate",
    "n": "That is the annual coupon."
   }
  ],
  "formula": [
   "Conversion value = share price × conversion ratio"
  ],
  "why": [
   "Minimum value = max(conversion value, straight bond value)."
  ],
  "general": [
   "Check which is larger before choosing."
  ]
 },
 {
  "parent": "m2q2",
  "key": "pv",
  "reading": 25,
  "subject": "Fixed Income",
  "title": "Putable vs straight bond",
  "ask": "Compared with an otherwise identical straight bond, a putable bond is worth:",
  "options": [
   {
    "t": "More: the investor also holds a put option",
    "n": "Putable = straight + put."
   },
   {
    "t": "Less",
    "n": "That is a callable bond."
   },
   {
    "t": "The same",
    "n": "The option has value."
   }
  ],
  "formula": [
   "Putable = straight + put · callable = straight – call"
  ],
  "why": [
   "The put protects the investor, so it adds value."
  ],
  "general": [
   "Callable bond value is capped near the call price."
  ]
 },
 {
  "parent": "m2q13",
  "key": "z",
  "reading": 38,
  "subject": "Portfolio",
  "title": "VaR z-scores",
  "ask": "Which z-score goes with a 5% one-tailed VaR?",
  "options": [
   {
    "t": "1.65",
    "n": "One-tailed 5%."
   },
   {
    "t": "1.96",
    "n": "Two-tailed 5%."
   },
   {
    "t": "2.33",
    "n": "One-tailed 1%."
   }
  ],
  "formula": [
   "z: 5% one-tailed = 1.65 · 1% one-tailed = 2.33"
  ],
  "why": [
   "VaR looks at one tail only."
  ],
  "general": [
   "Two-tailed 5% would be 1.96."
  ]
 },
 {
  "parent": "m2q22",
  "key": "ib",
  "reading": 8,
  "subject": "FSA",
  "title": "Excess tax benefit under IFRS",
  "ask": "Under IFRS, where does the excess tax benefit from share-based pay go?",
  "options": [
   {
    "t": "Equity",
    "n": "IFRS books the excess to equity."
   },
   {
    "t": "Tax expense",
    "n": "That is US GAAP."
   },
   {
    "t": "Revenue",
    "n": "It is not revenue."
   }
  ],
  "formula": [
   "Settlement value above grant value: US GAAP → lower tax expense · IFRS → equity"
  ],
  "why": [
   "The tax deduction is based on the settlement value."
  ],
  "general": [
   "Book expense stays at the grant-date value."
  ]
 },
 {
  "parent": "m2q42",
  "key": "bw",
  "reading": 30,
  "subject": "Alternatives",
  "title": "Backwardation",
  "ask": "Backwardation means the futures price is:",
  "options": [
   {
    "t": "Below the spot price (positive roll for a long)",
    "n": "The curve slopes down."
   },
   {
    "t": "Above the spot price",
    "n": "That is contango."
   },
   {
    "t": "Equal to the spot price",
    "n": "That is a flat curve."
   }
  ],
  "formula": [
   "Backwardation: spot above futures · positive roll return for a long"
  ],
  "why": [
   "Roll = (near – far) ÷ near is positive when far < near."
  ],
  "general": [
   "Contango gives a negative roll."
  ]
 },
 {
  "parent": "m2q35",
  "key": "sd",
  "reading": 41,
  "subject": "Ethics",
  "title": "Who soft dollars must benefit",
  "ask": "Soft dollar commissions must benefit:",
  "options": [
   {
    "t": "The client who generated them",
    "n": "Brokerage belongs to the client (III(A))."
   },
   {
    "t": "The firm's own research budget",
    "n": "The firm may not keep the benefit."
   },
   {
    "t": "Any client of the firm",
    "n": "Only the client who generated them."
   }
  ],
  "formula": [
   "III(A): soft dollars benefit the client who generated the commissions"
  ],
  "why": [
   "Brokerage is the client's asset."
  ],
  "general": [
   "Directed brokerage needs disclosure of the best-execution risk."
  ]
 },
 {
  "parent": "c2",
  "key": "up",
  "reading": 27,
  "subject": "Fixed Income",
  "title": "Upward-sloping credit curve",
  "ask": "An upward-sloping credit curve means default risk is higher in:",
  "options": [
   {
    "t": "The later years",
    "n": "The normal shape."
   },
   {
    "t": "The earlier years",
    "n": "That is a downward-sloping curve (near-term stress)."
   },
   {
    "t": "All years equally",
    "n": "That is a flat curve (constant hazard rate)."
   }
  ],
  "formula": [
   "Upward: later risk · downward: near-term stress · flat: constant hazard"
  ],
  "why": [
   "Longer maturities carry more cumulative default risk."
  ],
  "general": [
   "Downward-sloping curves are unusual."
  ]
 },
 {
  "parent": "c3",
  "key": "ev",
  "reading": 27,
  "subject": "Fixed Income",
  "title": "The three credit events",
  "ask": "Which are the three most common credit events?",
  "options": [
   {
    "t": "Bankruptcy, failure to pay, restructuring",
    "n": "The standard list."
   },
   {
    "t": "Bankruptcy, downgrade, restructuring",
    "n": "A downgrade is not a credit event."
   },
   {
    "t": "Failure to pay, spread widening, merger",
    "n": "Neither a spread move nor a merger is a credit event."
   }
  ],
  "formula": [
   "Credit events: bankruptcy · failure to pay · restructuring"
  ],
  "why": [
   "Restructuring is not a credit event in the US."
  ],
  "general": [
   "Missed payment after the grace period counts, even on one bond."
  ]
 },
 {
  "parent": "c31",
  "key": "up2",
  "reading": 27,
  "subject": "Fixed Income",
  "title": "Who pays the upfront premium",
  "ask": "When the CDS spread is above the standard coupon, who pays the upfront premium?",
  "options": [
   {
    "t": "The protection buyer",
    "n": "The buyer pays upfront for the extra spread."
   },
   {
    "t": "The protection seller",
    "n": "The seller receives it."
   },
   {
    "t": "Nobody",
    "n": "The upfront compensates for the gap."
   }
  ],
  "formula": [
   "Spread > coupon: buyer pays upfront · spread < coupon: seller pays upfront"
  ],
  "why": [
   "Upfront ≈ (spread – coupon) × duration."
  ],
  "general": [
   "Price = 100 – upfront."
  ]
 },
 {
  "parent": "tbc2",
  "key": "pa",
  "reading": 14,
  "subject": "Corporate Issuers",
  "title": "Principal-agent conflict",
  "ask": "A principal-agent conflict is between:",
  "options": [
   {
    "t": "Shareholders (principals) and managers (agents)",
    "n": "Dispersed ownership and voting."
   },
   {
    "t": "Controlling and minority shareholders",
    "n": "That is principal-principal."
   },
   {
    "t": "Shareholders and bondholders",
    "n": "That is a different conflict."
   }
  ],
  "formula": [
   "Principal-agent: shareholders vs managers · principal-principal: controlling vs minority"
  ],
  "why": [
   "Dispersed ownership with dispersed voting gives principal-agent."
  ],
  "general": [
   "Concentrated voting power points to principal-principal."
  ]
 },
 {
  "parent": "tbc3",
  "key": "ic",
  "reading": 14,
  "subject": "Corporate Issuers",
  "title": "Independent committees",
  "ask": "Which board committees should have independent members?",
  "options": [
   {
    "t": "Audit, remuneration and nomination",
    "n": "Each needs independence."
   },
   {
    "t": "Only the audit committee",
    "n": "Remuneration and nomination matter too."
   },
   {
    "t": "None: management sets them",
    "n": "Independence is the point."
   }
  ],
  "formula": [
   "Audit, remuneration and nomination committees should be independent"
  ],
  "why": [
   "A CEO on the remuneration committee sets their own pay."
  ],
  "general": [
   "An executive director on the board is acceptable."
  ]
 },
 {
  "parent": "tbc5",
  "key": "ac",
  "reading": 14,
  "subject": "Corporate Issuers",
  "title": "What an activist holds",
  "ask": "An activist shareholder usually holds:",
  "options": [
   {
    "t": "A minority stake and tries to influence the company",
    "n": "Influence without control."
   },
   {
    "t": "A controlling stake",
    "n": "That would be an acquirer."
   },
   {
    "t": "Only bonds",
    "n": "Activists buy equity."
   }
  ],
  "formula": [
   "Activist: minority stake, aims to influence governance"
  ],
  "why": [
   "Activists push for changes in strategy, governance or capital allocation."
  ],
  "general": [
   "Do not confuse with a controlling shareholder."
  ]
 },
 {
  "parent": "tbc7",
  "key": "dv",
  "reading": 14,
  "subject": "Corporate Issuers",
  "title": "ESG disclosure",
  "ask": "Compared with governance information, ESG disclosure is mostly:",
  "options": [
   {
    "t": "Voluntary and less consistent",
    "n": "Few rules force it."
   },
   {
    "t": "Regulated and consistent",
    "n": "That is governance information."
   },
   {
    "t": "Audited and mandatory",
    "n": "Not generally."
   }
  ],
  "formula": [
   "Governance info: regulated, consistent · ESG disclosure: voluntary"
  ],
  "why": [
   "Quality of ESG data varies by company."
  ],
  "general": [
   "Material ESG factors still feed into valuation."
  ]
 },
 {
  "parent": "tbc11",
  "key": "sb",
  "reading": 15,
  "subject": "Corporate Issuers",
  "title": "Shadow banking",
  "ask": "Shadow banking is:",
  "options": [
   {
    "t": "Lending outside the regulated banking system",
    "n": "Non-bank lenders."
   },
   {
    "t": "Illegal lending",
    "n": "It is not necessarily illegal."
   },
   {
    "t": "Central bank lending to banks",
    "n": "That is regulated."
   }
  ],
  "formula": [
   "Shadow banking = unregulated non-bank lending"
  ],
  "why": [
   "It fills gaps where corporate bond markets are weak."
  ],
  "general": [
   "It is more common where debt markets are thin."
  ]
 },
 {
  "parent": "tbc11",
  "key": "cl",
  "reading": 15,
  "subject": "Corporate Issuers",
  "title": "Legal system and risk premium",
  "ask": "Which legal system tends to give a lower country risk premium?",
  "options": [
   {
    "t": "Common law",
    "n": "Stronger investor protection."
   },
   {
    "t": "Civil law",
    "n": "Weaker protection tends to mean a higher premium."
   },
   {
    "t": "Neither: it makes no difference",
    "n": "It does matter."
   }
  ],
  "formula": [
   "Stronger investor protection → lower risk premium (common law)"
  ],
  "why": [
   "Weaker protection raises the cost of capital."
  ],
  "general": [
   "Applies to the country risk premium in the cost of equity."
  ]
 },
 {
  "parent": "s1q2",
  "key": "cs",
  "reading": 2,
  "subject": "Quant",
  "title": "Covariance stationarity",
  "ask": "Covariance stationarity requires a constant, finite:",
  "options": [
   {
    "t": "Mean, variance and covariance with its own lags",
    "n": "All three."
   },
   {
    "t": "Mean only",
    "n": "Variance and covariances must be constant too."
   },
   {
    "t": "Trend and seasonality",
    "n": "Those would violate stationarity."
   }
  ],
  "formula": [
   "Covariance stationary: constant finite mean, variance and covariance with lags"
  ],
  "why": [
   "A trending price series usually fails."
  ],
  "general": [
   "Durbin–Watson is not a stationarity test."
  ]
 },
 {
  "parent": "s1c4",
  "key": "rf",
  "reading": 15,
  "subject": "Corporate Issuers",
  "title": "Risk-free rate for the ERP",
  "ask": "In the Grinold–Kroner ERP, which risk-free rate do you subtract?",
  "options": [
   {
    "t": "The long-term government yield",
    "n": "Matches the long horizon of equities."
   },
   {
    "t": "The short-term bill rate",
    "n": "Not the long-run comparison."
   },
   {
    "t": "The inflation rate",
    "n": "Inflation is a separate input."
   }
  ],
  "formula": [
   "ERP = expected equity return – long-term risk-free rate"
  ],
  "why": [
   "Use the 10-year yield, even when the curve is inverted."
  ],
  "general": [
   "Short rates can mislead the premium."
  ]
 },
 {
  "parent": "s1e56",
  "key": "hm",
  "reading": 20,
  "subject": "Equity",
  "title": "What a harmonic mean P/E averages",
  "ask": "A harmonic mean P/E is the reciprocal of the weighted average of:",
  "options": [
   {
    "t": "Earnings yields (E/P)",
    "n": "Average the yields, then flip."
   },
   {
    "t": "P/E ratios",
    "n": "That is the arithmetic mean."
   },
   {
    "t": "Prices",
    "n": "Prices are not averaged."
   }
  ],
  "formula": [
   "Harmonic mean P/E = 1 ÷ Σ (w × E/P)"
  ],
  "why": [
   "Reduces large outliers; can aggravate small ones."
  ],
  "general": [
   "Use it for portfolio or index P/E."
  ]
 },
 {
  "parent": "s1r63",
  "key": "cs",
  "reading": 21,
  "subject": "Equity",
  "title": "Clean surplus",
  "ask": "Clean surplus accounting means:",
  "options": [
   {
    "t": "All changes in book value other than owner transactions pass through net income",
    "n": "Ending book = beginning + NI – dividends."
   },
   {
    "t": "Net income is excluded from book value",
    "n": "The opposite."
   },
   {
    "t": "Dividends pass through net income",
    "n": "Dividends are paid from equity."
   }
  ],
  "formula": [
   "Clean surplus: ΔBV = NI – dividends"
  ],
  "why": [
   "OCI items such as AFS gains bypass income and break it."
  ],
  "general": [
   "Residual income models assume it."
  ]
 },
 {
  "parent": "s1f39",
  "key": "sp",
  "reading": 26,
  "subject": "Fixed Income",
  "title": "What the SPE does",
  "ask": "In an ABS, the special purpose entity (SPE):",
  "options": [
   {
    "t": "Holds the assets legally apart from the originator",
    "n": "Protects investors from the originator's creditors."
   },
   {
    "t": "Is the originator's bank",
    "n": "It is a separate legal vehicle."
   },
   {
    "t": "Guarantees the securities",
    "n": "It issues the securities; it does not guarantee them."
   }
  ],
  "formula": [
   "SPE: legally separate owner of the pooled assets → lower financing cost"
  ],
  "why": [
   "Assets sit outside the originator's bankruptcy."
  ],
  "general": [
   "Granular, homogeneous pools are analysed with portfolio statistics."
  ]
 },
 {
  "parent": "s1e59",
  "key": "bs",
  "reading": 20,
  "subject": "Equity",
  "title": "Reading justified vs actual P/E",
  "ask": "If the justified P/E is above the actual P/E (same type), the signal is:",
  "options": [
   {
    "t": "Buy: the stock looks undervalued",
    "n": "The market pays less than the fundamentals justify."
   },
   {
    "t": "Sell",
    "n": "That is the reverse."
   },
   {
    "t": "Hold",
    "n": "There is a clear gap."
   }
  ],
  "formula": [
   "Justified P/E > actual P/E (same type) → buy"
  ],
  "why": [
   "Compare a trailing justified P/E with the trailing P/E."
  ],
  "general": [
   "Like with like."
  ]
 },
 {
  "parent": "s2f29",
  "key": "td",
  "reading": 23,
  "subject": "Fixed Income",
  "title": "TED spread",
  "ask": "The TED spread is the difference between:",
  "options": [
   {
    "t": "3-month MRR and the T-bill rate",
    "n": "Credit risk in the general economy."
   },
   {
    "t": "MRR and OIS",
    "n": "That is the MRR–OIS spread."
   },
   {
    "t": "A bond's yield and its swap rate",
    "n": "That is a swap spread idea."
   }
  ],
  "formula": [
   "TED = 3-month MRR – T-bill rate"
  ],
  "why": [
   "MRR–OIS is the money-market risk and liquidity indicator."
  ],
  "general": [
   "Z-spread is a spread over the whole spot curve."
  ]
 },
 {
  "parent": "s2a2",
  "key": "ed",
  "reading": 33,
  "subject": "Alternatives",
  "title": "An event-driven strategy",
  "ask": "Which is an event-driven strategy?",
  "options": [
   {
    "t": "Merger arbitrage",
    "n": "Trades around corporate events."
   },
   {
    "t": "Global macro",
    "n": "An opportunistic strategy."
   },
   {
    "t": "Equity market neutral",
    "n": "A relative value strategy."
   }
  ],
  "formula": [
   "Event-driven: merger arbitrage, distressed, activist"
  ],
  "why": [
   "It carries some equity beta and left-tail risk."
  ],
  "general": [
   "Deals fail more often in market stress."
  ]
 },
 {
  "parent": "s2p24",
  "key": "av",
  "reading": 34,
  "subject": "Portfolio",
  "title": "What risk-averse means",
  "ask": "A risk-averse investor:",
  "options": [
   {
    "t": "Dislikes risk and needs a premium to bear it",
    "n": "Averse means dislikes."
   },
   {
    "t": "Seeks risk",
    "n": "That is risk-seeking."
   },
   {
    "t": "Is indifferent to risk",
    "n": "That is risk-neutral."
   }
  ],
  "formula": [
   "Risk-averse: dislikes risk, demands a premium"
  ],
  "why": [
   "Not to be confused with adverse (harmful)."
  ],
  "general": [
   "High premium ↔ poor hedge in bad times."
  ]
 },
 {
  "parent": "s2b18",
  "key": "sv",
  "reading": 39,
  "subject": "Portfolio",
  "title": "Avoiding survivorship bias",
  "ask": "To avoid survivorship bias, a backtest should use:",
  "options": [
   {
    "t": "Point-in-time data including firms that failed",
    "n": "Realistic view of the past."
   },
   {
    "t": "Only today's index members",
    "n": "That builds in the bias."
   },
   {
    "t": "Only the most recent five years",
    "n": "Does not address it."
   }
  ],
  "formula": [
   "Survivorship bias: using only the firms that survived to today"
  ],
  "why": [
   "Include the casualties as well as the survivors."
  ],
  "general": [
   "Other biases: look-ahead, data snooping."
  ]
 },
 {
  "parent": "s2a9",
  "key": "so",
  "reading": 33,
  "subject": "Alternatives",
  "title": "Sortino denominator",
  "ask": "The Sortino ratio divides excess return by:",
  "options": [
   {
    "t": "Downside deviation",
    "n": "Only returns below the target."
   },
   {
    "t": "Total standard deviation",
    "n": "That is the Sharpe ratio."
   },
   {
    "t": "Maximum drawdown",
    "n": "That is a different ratio."
   }
  ],
  "formula": [
   "Sortino = excess return ÷ downside deviation"
  ],
  "why": [
   "Use it when negative events matter."
  ],
  "general": [
   "Sharpe counts upside swings as risk too."
  ]
 }
];
  const seen = {};
  EXTRAS.forEach(e => {
    const p = NOTES.find(n => n.id === e.parent);
    seen[e.parent] = (seen[e.parent] || 0) + 1;
    NOTES.push({ id: `x_${e.parent}_${e.key}`, set: p.set, tag: `${p.tag} · definition`, session: p.session, mock: p.mock, num: p.num + 0.1 * seen[e.parent],
      reading: e.reading, subject: e.subject, title: e.title, stem: [], ask: e.ask, options: e.options, answer: 0, mine: 0,
      formula: e.formula, why: e.why, general: e.general, drill: true });
  });
  NOTES.sort((a, b) => a.session - b.session || a.num - b.num);
})();

// Drills: the question carries the full numbers, the options are the candidate formulas. First option is the right one.
NOTES.filter(n => n.drill).forEach(n => { NOTE_QUICK[n.id] = [(n.stem.join(" ") + " " + n.ask).trim(), ...n.options.map(o => o.t)]; });
