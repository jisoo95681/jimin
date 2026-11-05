// Key notes questions: the user's own handwritten study notes turned into recall questions.
// Each "*" bullet of the notebook can give several short items. Types:
//   mc      multiple choice, 3 options (o), answer index a, optional fig (a drawing shown above the options)
//   table   skeleton table: header row and first column are shown, the rest is blank to write on paper; the full table shows after Submit
//   formula "Formula: ... =" prompt only; the user writes the formula on paper, the answer shows after Submit
// Fractions are written [[numerator|denominator]]. Subjects hold the readings (CFA reading numbers) of each topic.
const KEYQ_SUBJECTS = [
  ["Quantitative Methods", [1, 2, 3, 4]],
  ["Economics", [5, 6]],
  ["Financial Statement Analysis", [7, 8, 9, 10, 11, 12]],
  ["Corporate Issuers", [13, 14, 15, 16]],
  ["Equity Valuation", [17, 18, 19, 20, 21, 22]],
  ["Fixed Income", [23, 24, 25, 26, 27]],
  ["Derivatives", [28, 29]],
  ["Alternative Investments", [30, 31, 32, 33]],
  ["Portfolio Management", [34, 35, 36, 37, 38, 39]],
  ["Ethics", [40, 41, 42]]
];
const KEYQ = [];
(function () {
  const cnt = {};
  const nid = r => `kq${r}-${String((cnt[r] = (cnt[r] || 0) + 1)).padStart(2, "0")}`;
  const mc = (r, q, o, a, why, fig) => KEYQ.push({ id: nid(r), reading: r, type: "mc", q, o, a, why: why || "", fig: fig || "" });
  const tb = (r, title, head, rows, note) => KEYQ.push({ id: nid(r), reading: r, type: "table", q: title, head, rows, note: note || "" });
  const fm = (r, q, a, note) => KEYQ.push({ id: nid(r), reading: r, type: "formula", q, a, note: note || "" });

  // ================= 23 Term Structure and Interest Rate Dynamics =================
  fm(23, "Formula: expanded forward rate formula, (1 + S_n)^n =", "(1 + S_1)(1 + f_{1,1})(1 + f_{2,1})(1 + f_{3,1}) ... (1 + f_{n−1,1})");
  fm(23, "Formula: swap spread =", "swap rate − government (on-the-run) bond yield of the same maturity", "The first-page note wrote floating minus fixed; the textbook definition is swap rate minus government yield.");
  mc(23, "Swap spread is measured against which government yield?", ["On-the-run yield of the same maturity", "Off-the-run yield of the same maturity", "The average of the on- and off-the-run yields"], 0, "The swap spread is the swap rate over the on-the-run (most recently issued) government bond of the same maturity.");
  tb(23, "Projected spot curve vs current forward curve", ["Projected spot curve vs current forward curve", "Valuation", "Action"], [["Above the forward curve", "Overvalued", "Sell"], ["Below the forward curve", "Undervalued", "Buy"]]);
  mc(23, "Your projected spot curve is below the current forward curve. The bond is:", ["Undervalued: buy", "Overvalued: sell", "Fairly valued: hold"], 0, "Lower future spot rates than the forward rates the market uses means the market discounts too heavily, so the price is too low.");
  fm(23, "Formula: annual return from rolling down the yield curve (H = years held) =", "( [[PV from sell year|PV from buy year]] )^(1/H) − 1", "PV (buy) = 100 ÷ (1 + spot_n,buy + spread_n,buy)^n_buy. PV (sell) = 100 ÷ (1 + spot_n,sell + spread_n,sell)^n_sell. Use the spread only if the question gives one.");
  mc(23, "In the rolling down return formula, the exponent 1/H uses H =", ["The number of years you hold the security", "The maturity of the bond you buy", "The maturity of the bond at the sale date"], 0, "H is the holding period in years. A 6-year bond held 5 years uses 1/5 = 0.2.");
  mc(23, "Buy a 4-year zero and sell it after 2 years. The sale price is the PV of a bond with maturity:", ["2 years, priced at the 2-year rate", "4 years, priced at the 4-year rate", "6 years, priced at the 6-year rate"], 0, "After 2 years the 4-year bond has 2 years left, so it is priced on the 2-year part of the (unchanged) curve.");
  mc(23, "Bootstrapping is a process of:", ["Forward substitution only", "Backward substitution only", "Both forward and backward substitution"], 0, "Spot rates are solved one at a time from the shortest maturity to the longest.");
  mc(23, "Curve move shown (blue line before, red after):", ["Bullish steepening", "Bearish flattening", "Bullish flattening"], 0, "Both yields fall, but short-term yields fall more, so the curve steepens.", "yc-bullstp");
  mc(23, "Curve move shown (blue line before, red after):", ["Bearish flattening", "Bullish steepening", "Bullish flattening"], 0, "Both yields rise, but short-term yields rise more, so the curve flattens.", "yc-bearflat");
  mc(23, "Curve move shown (blue line before, red after):", ["Bullish flattening", "Bearish flattening", "Bullish steepening"], 0, "Both yields fall, but long-term yields fall more, so the curve flattens.", "yc-bullflat");
  tb(23, "Yield curve moves and the situation they usually go with", ["Move", "Usual situation"], [["Bullish steepening", "Recession"], ["Bearish flattening", "Expansion"], ["Bullish flattening", "Flight to safety (quality)"]]);
  mc(23, "Flight to quality is most often associated with:", ["Bullish flattening", "Bearish flattening", "Bullish steepening"], 0, "Long-term yields fall by more than short-term yields; a barbell with extended duration is the usual response.");
  tb(23, "Theories of the term structure", ["Theory", "Key idea"], [
    ["Unbiased / pure expectations", "No premium; long-term rates are the average of expected short-term rates (risk-free assets only)"],
    ["Local expectations", "Short holding period: no difference in return; long holding period: risk premium"],
    ["Liquidity preference", "Premium increases with maturity"],
    ["Segmented markets", "Investors do not move; they hold only their own maturity"],
    ["Preferred habitat", "Has a preferred maturity but moves if paid extra"]]);
  mc(23, "Which theory says investors stay in their own maturity segment even for extra profit?", ["Segmented markets", "Preferred habitat", "Local expectations"], 0, "Preferred habitat investors will move maturity for compensation; segmented market investors will not.");
  mc(23, "Liquidity preference theory says the premium:", ["Increases with maturity", "Is zero for all maturities", "Decreases with maturity"], 0, "Investors want more compensation for longer maturities (more interest rate risk).");
  mc(23, "Which is NOT an assumption behind the yield to maturity?", ["Coupons are reinvested at the risk-free rate", "The bond is held to maturity", "There is no default"], 0, "YTM assumes coupons are reinvested at the YTM itself.");
  mc(23, "If coupons are reinvested at a rate below the YTM, the realized return is:", ["Likely below the YTM", "Likely above the YTM", "Exactly the YTM"], 0, "The YTM assumes reinvestment at the YTM; a lower reinvestment rate lowers the realized return.");
  mc(23, "In countries with low-liquidity government bond markets, the better benchmark is the:", ["Swap curve", "Government spot curve", "Corporate par curve"], 0, "An active swap market gives more points for a curve when government bonds are illiquid.");
  tb(23, "Spreads and related risks", ["Spread", "Definition", "What it shows"], [
    ["TED spread", "MRR − T-bill rate (same maturity)", "Liquidity and credit risk of the banking sector; economy-wide, not one government bond"],
    ["Swap spread", "Swap rate − treasury (government) yield", "How much the swap rate exceeds the government bond yield"],
    ["I-spread", "Yield on bond − swap rate", "How much a credit-risky bond exceeds the swap rate"],
    ["Z-spread", "Constant spread added to each spot rate so PV of all payments = market price", "Credit and liquidity compensation using the whole spot curve"],
    ["MRR–OIS spread", "MRR − OIS rate", "Liquidity and credit risk of the banking system"],
    ["SOFR", "Secured overnight financing rate", "Barometer of the repo market"]]);
  mc(23, "The MRR–OIS spread is considered an indicator of:", ["Risk and liquidity of money market securities", "Credit risk of a single corporate bond", "The slope of the government yield curve"], 0, "OIS is almost risk free; MRR carries bank credit and liquidity risk.");
  mc(23, "The TED spread is:", ["MRR − T-bill rate of the same maturity", "Swap rate − government yield", "Yield on bond − swap rate"], 0, "TED = 3-month MRR − 3-month T-bill rate.");
  mc(23, "I-spread is:", ["Yield on the bond − swap rate", "Swap rate − government yield", "MRR − OIS rate"], 0, "I-spread measures a credit-risky bond over the swap curve.");
  mc(23, "SOFR is a rate for the:", ["Repo market (secured, overnight)", "Unsecured interbank market", "Treasury bill auction"], 0, "Secured overnight financing rate, collateralized by Treasuries.");
  fm(23, "Formula: forward price F(j,k) in terms of the forward rate f(j,k) =", "[[1|(1 + f(j,k))^k]]");
  fm(23, "Formula: interpolated yield for maturity m_i between a shorter maturity m_s and a longer maturity m_l =", "y_s + [[y_l − y_s|m_l − m_s]] × (m_i − m_s)", "Check that the result lies between y_s and y_l.");
  mc(23, "Interpolating a yield for 3.86 years uses which two maturities?", ["3 years and 4 years", "2 years and 5 years", "4 years and 5 years"], 0, "Use the maturities on each side of 3.86; the weight on the longer one is 0.86.");
  tb(23, "Sources of rate volatility", ["Rate", "Mostly linked to"], [["Short-term rate volatility", "Monetary policy (more volatile)"], ["Long-term rate volatility", "The economy and inflation"]]);

  // ================= 24 Arbitrage-Free Valuation Framework =================
  mc(24, "A question says a bond is mispriced and gives the par curve, the coupon and N. The first step is to:", ["Bootstrap the par curve into a spot curve", "Discount the cash flows at the bond's YTM", "Use the forward rates only"], 0, "Spot rates are needed to discount each cash flow separately.");
  mc(24, "After finding the spot curve, the next step is to:", ["Discount the coupons and principal with the spot rates to get the PV", "Average the spot rates", "Solve for the YTM first"], 0, "PV = Σ cash flow ÷ (1 + spot)^t.");
  mc(24, "With N, FV, PV and PMT known, the calculator gives:", ["I/Y (the YTM)", "The spot rate of the last year", "The forward rate"], 0, "The remaining input I/Y is the yield to maturity.");
  mc(24, "If the bond is mispriced, you find the answer by comparing:", ["The PV from spot rates with the given market price", "The YTM with the coupon rate", "Two forward rates"], 0, "Value below price: overpriced; value above price: underpriced.");
  tb(24, "Term structure models: equilibrium vs arbitrage-free", ["Type", "Models", "Based on"], [
    ["Equilibrium", "CIR, Vasicek", "Macroeconomic (fundamental) variables"],
    ["Arbitrage-free", "Ho–Lee, KWF", "Observed market prices; benchmark bonds assumed correctly priced"]]);
  tb(24, "Term structure models: dynamics (dr_t) and features", ["Model", "Dynamics", "Feature"], [
    ["CIR", "dr = a(b − r)dt + σ√r dz", "Volatility rises with the rate; rate cannot be negative"],
    ["Vasicek", "dr = a(b − r)dt + σ dz", "Constant volatility; rate can be negative"],
    ["Ho–Lee", "dr = θ dt + σ dz", "Constant volatility; no mean reversion"],
    ["KWF", "d ln(r) = θ dt + σ dz", "Like Ho–Lee but for ln(r); constant volatility"]]);
  mc(24, "Which type of term structure model needs fewer parameters to estimate?", ["Equilibrium models", "Arbitrage-free models", "Both need the same number"], 0, "Arbitrage-free models allow time-varying parameters, so they have more parameters and fit the curve more precisely.");
  mc(24, "Which model assumes bonds are correctly priced (calibrated to market prices)?", ["Ho–Lee", "Vasicek", "CIR"], 0, "Arbitrage-free models (Ho–Lee, KWF) use market prices of a reference set of instruments.");
  mc(24, "Asset A costs 500 and pays 525 in one year; Asset B costs 1,000 and pays 1,100 (both risk free). The arbitrage is to:", ["Sell two units of A, buy one unit of B: $50 profit in one year", "Buy two units of A, sell one unit of B", "Buy A and B equally"], 0, "B is cheap relative to A (10% vs 5% implied return). Sell 2A for 1,000, buy B: receive 1,100, pay 1,050.");
  mc(24, "If the YTM is lower, the bond price is:", ["Higher", "Lower", "Unchanged"], 0, "Price and yield move in opposite directions.");
  mc(24, "For an option-free bond, valuation with spot rates and valuation with a calibrated binomial tree give:", ["The same value whatever the volatility", "Different values; the tree is higher", "Different values; the tree is lower"], 0, "Volatility matters only when there is an embedded option.");
  fm(24, "Formula: pathwise value of a 3-year bond on one path (coupon C, face FV, rates S1, S2, S3 on the path) =", "[[C|(1 + S_1)]] + [[C|(1 + S_1)(1 + S_2)]] + [[FV + C|(1 + S_1)(1 + S_2)(1 + S_3)]]", "Each cash flow is discounted by the rates of that path, not by spot rates.");
  mc(24, "A zero-coupon yield curve is the same thing as the:", ["Spot rate curve", "Par curve", "Forward curve"], 0, "Zero-coupon yields are spot rates.");
  mc(24, "To value a 3-year bond on the tree, which columns of interest rates do you use?", ["t0, t1 and t2 only", "t0, t1, t2 and t3", "t1, t2 and t3"], 0, "The t3 column would discount a fourth-year cash flow, so it is not needed.", "tree3");
  mc(24, "Calibrating the interest rate tree needs a volatility assumption, an interest rate model and:", ["The observed market value of the benchmark bond", "The market value of the bond being valued", "The yield to maturity of the bond being valued"], 0, "The tree is fitted to benchmark bonds, then used to value the target bond.");
  mc(24, "The interest rate movements on a binomial tree are:", ["Unpredictable (stochastic)", "Predictable", "Constant"], 0, "The interest rate factors are random; the tree captures this with up and down moves.");

  // ================= 25 Bonds with Embedded Options =================
  fm(25, "Formula: conversion price =", "[[par (issue) value of the convertible bond|conversion ratio]]");
  fm(25, "Formula: conversion value =", "market price of the stock × conversion ratio");
  fm(25, "Formula: minimum value of a convertible bond =", "max(conversion value, straight value), where straight value = option-free value of the bond");
  mc(25, "When the stock price falls by x%, the convertible bond price falls by:", ["Less than x%", "The same x%", "More than x%"], 0, "The straight value is a floor under the convertible bond price.");
  tb(25, "Effect on option and bond values", ["", "Call", "Callable", "Put", "Putable"], [
    ["r ↑", "↓", "↓", "↑", "↓"], ["r ↓", "↑", "↑", "↓", "↑"],
    ["Volatility ↑", "↑", "↓", "↑", "↑"], ["Volatility ↓", "↓", "↑", "↓", "↓"],
    ["Yield curve flatter", "↑", "↓", "↓", "↓"], ["Yield curve steeper", "↓", "↑", "↑", "↑"]],
    "Callable bond = straight − call; putable bond = straight + put. The bond columns show the net direction.");
  tb(25, "OAS and volatility", ["", "OAS (callable bond)", "OAS (putable bond)"], [["Volatility ↑", "↓", "↑"], ["Volatility ↓", "↑", "↓"]]);
  mc(25, "Rank the prices of otherwise identical bonds:", ["Callable < straight < putable (and convertible)", "Straight < callable < putable", "Putable < straight < callable"], 0, "Investor-held options add value, the issuer's call subtracts value.");
  mc(25, "OAS can be compared across bonds only if they have the same:", ["Credit rating", "Coupon", "Maturity date"], 0, "A larger OAS reflects compensation for credit risk as well.");
  mc(25, "For two bonds with the same credit rating, the one with the larger OAS is:", ["Underpriced (cheap)", "Overpriced (rich)", "Fairly priced"], 0, "Higher OAS means more spread over the benchmark for the same risk.");
  fm(25, "Formula: OAS is the constant spread that, added to every one-period forward rate on the tree, makes ... =", "the present value of the bond's cash flows (model value) equal to the bond's market price");
  mc(25, "A floating-rate coupon is the one-year reference rate with a cap of 5% and a floor of 4%. At a node where the rate is 6.78% the coupon is:", ["5%", "6.78%", "4%"], 0, "The cap limits the coupon: coupon = min(rate, cap).");
  mc(25, "Same bond, node where the rate is 3.945%. The coupon is:", ["4%", "3.945%", "5%"], 0, "The floor stops the coupon from going below 4%: coupon = max(rate, floor).");
  mc(25, "A cap on a floating-rate coupon is, for the investor:", ["Unfavourable (limits the coupon)", "Favourable", "Neutral"], 0, "It limits the coupon when rates rise; it benefits the issuer.");
  fm(25, "Formula: convertible bond (non-callable) =", "straight bond + value of the call option on the stock");
  fm(25, "Formula: callable convertible bond =", "straight bond + value of the call option on the stock − value of the issuer call option");
  fm(25, "Formula: callable and putable convertible bond =", "straight bond + call option on the stock − issuer call option + investor put option");
  tb(25, "Convertible bond: whose risk and return it carries", ["Condition", "Risk and return"], [
    ["Conversion price > market share price", "Bond: interest rate and credit spread"],
    ["Conversion price < market share price", "Stock: stock price movement"],
    ["Conversion price = market share price", "Hybrid"]]);
  mc(25, "The effective duration of a floating-rate bond is close to:", ["The time to the next reset", "Its maturity", "Zero always"], 0, "The coupon resets, so only the time until the next reset matters.");
  mc(25, "A floating-rate bond resets annually. Its effective duration is about:", ["1", "The years to maturity", "0.5"], 0, "Time to next reset = 1 year at most.");
  fm(25, "Formula: market conversion price =", "[[market price of the convertible bond|conversion ratio]]");
  fm(25, "Formula: market conversion premium per share =", "market conversion price − stock market price of the share");
  fm(25, "Formula: market conversion premium ratio =", "[[market conversion premium per share|market price of common stock]]");
  fm(25, "Formula: premium over straight value =", "( [[market price of the convertible bond|straight value]] ) − 1");
  mc(25, "If the actual dividend is higher than the threshold dividend, the conversion price:", ["Is adjusted down (conversion ratio up)", "Is adjusted up", "Is not adjusted"], 0, "The adjustment compensates holders who give up the extra dividend, so more shares per bond.");
  tb(25, "Effective duration and convexity vs interest rates", ["", "Rates ↑", "Rates ↓"], [
    ["Straight: duration", "↓", "↑"], ["Straight: convexity", "+ve", "+ve"],
    ["Callable: duration", "↑ (= straight)", "↓ (< straight)"], ["Callable: convexity", "+ve", "↓ (can turn −ve)"],
    ["Putable: duration", "↓ (< straight)", "↑ (= straight)"], ["Putable: convexity", "+ve", "+ve"]],
    "= straight: about the same as the straight bond's duration; < straight: lower.");
  tb(25, "One-sided duration", ["Bond", "Up vs down duration"], [["Straight", "Up = down"], ["Callable", "Up > down"], ["Putable", "Up < down"]]);
  tb(25, "Key rate duration: where it is largest", ["Bond", "Largest key rate duration at"], [["Option-free", "Maturity"], ["Callable or putable", "Exercise date"]],
    "For a callable or putable bond with the option in the money.");
  mc(25, "Share price rises from S0 to S1, still below the conversion price (see chart). The convertible bond price:", ["Rises, but by less than the share price", "Rises by the same % as the share price", "Falls"], 0, "The option is still out of the money, so the straight bond part moves little.", "conv");
  mc(25, "Share price rises from S0 to S2, above the conversion price (see chart). The convertible bond:", ["Behaves like the stock: the price tracks the share price", "Still rises much less than the stock", "Falls because it is in the money"], 0, "In the money, the minimum value is the conversion value, so the bond follows the share.", "conv");
  mc(25, "A convertible bond is a straight bond plus:", ["A call option on the common stock", "A put option on the common stock", "A put option on the bond"], 0, "The conversion option is a call on the issuer's stock.");

  // ================= 27 Credit Default Swaps =================
  tb(27, "CDS position when the credit changes", ["Credit", "CDS position", "Credit exposure"], [["Credit improves", "Sell protection", "Long credit"], ["Credit deteriorates", "Buy protection", "Short credit"]]);
  mc(27, "You expect the credit quality of the reference entity to improve. You should:", ["Sell protection (long credit)", "Buy protection (short credit)", "Buy protection (long credit)"], 0, "The protection seller gains when the spread tightens.");
  mc(27, "Buying protection gives you what credit exposure?", ["Short credit", "Long credit", "No exposure"], 0, "You profit if the credit gets worse.");
  mc(27, "Upward sloping CDS curve (see chart): the trade in your notes is to:", ["Sell protection at A (short maturity), buy protection at B (long maturity)", "Buy protection at A, sell protection at B", "Buy protection at both"], 0, "Per the notebook: sell the short maturity, buy the long maturity on the upward sloping curve.", "cds-up");
  mc(27, "Flat CDS curve (see chart): the trade in your notes is to:", ["Buy protection at A (short), sell protection at B (long)", "Sell protection at A, buy protection at B", "Sell protection at both"], 0, "Per the notebook: buy the short maturity, sell the long maturity on the flat curve.", "cds-flat");
  tb(27, "Economy improves: high yield vs investment grade", ["Economy improves", "Position"], [["High yield", "Sell (protection)"], ["Investment grade", "Buy (protection)"]]);
  mc(27, "The economy improves. Which CDS trade does your note suggest?", ["Sell protection on high yield, buy protection on investment grade", "Buy protection on high yield, sell protection on investment grade", "Buy protection on both"], 0, "High yield spreads tighten more than investment grade spreads.");
  tb(27, "Bond spread vs CDS spread", ["", "Bond", "CDS"], [["Bond spread > CDS spread", "Buy", "Buy"], ["Bond spread < CDS spread", "Sell", "Sell"]], "Buying the CDS means buying protection.");
  mc(27, "Bond spread is greater than the CDS spread. The trade is to:", ["Buy the bond and buy the CDS (protection)", "Sell the bond and sell the CDS", "Buy the bond and sell the CDS"], 0, "The bond's yield is too high relative to the cost of protection.");
  fm(27, "Formula: bond spread =", "yield on the bond − MRR");
  fm(27, "Formula: CDS price per 100 par =", "100 − upfront premium");
  fm(27, "Formula: upfront premium =", "(credit spread − coupon) × duration");
  mc(27, "If the credit spread is above the CDS coupon, the CDS price per 100 par is:", ["Below 100", "Above 100", "Exactly 100"], 0, "The upfront premium is positive and is subtracted from 100.");
  tb(27, "Upfront premium: who pays and who receives", ["Trade", "Side I take", "Spread > coupon", "Spread < coupon"], [
    ["Open new: buy protection", "Buyer", "Pay", "Receive"],
    ["Close an existing seller position (buy protection to close)", "Buyer", "Pay", "Receive"],
    ["Open new: sell protection", "Seller", "Receive", "Pay"],
    ["Close an existing buyer position (sell protection to close)", "Seller", "Receive", "Pay"]],
    "Closing puts you on the opposite side of the position you hold. Spread > coupon: the buyer pays, the seller receives.");
  tb(27, "Gain or loss on an existing CDS position", ["My position", "Spread narrows (credit improves)", "Spread widens (credit worsens)"], [["Protection seller", "Gain", "Loss"], ["Protection buyer", "Loss", "Gain"]],
    "Gain/loss compares the current spread with the ORIGINAL spread. Paying or receiving the upfront premium compares the current spread with the COUPON.");
  mc(27, "You hold a protection seller position (coupon 5%, original spread 650 bps) and the spread is now 600 bps. If you close it today, you:", ["Pay an upfront premium and realize a gain", "Receive an upfront premium and realize a gain", "Pay an upfront premium and realize a loss"], 0, "Closing means buying protection; spread 600 > coupon 500, so you pay. The spread narrowed (650 to 600), so the seller gains.");
  mc(27, "A protection buyer enters a new CDS when the current spread (200 bps) is below the coupon (500 bps). The buyer:", ["Receives an upfront premium", "Pays an upfront premium", "Pays nothing"], 0, "Spread below coupon: the buyer receives and the seller pays.");
})();
