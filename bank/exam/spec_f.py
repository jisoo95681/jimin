import math
from lib import *
# ---------------- CORPORATE ISSUERS ----------------
add("Corporate Issuers","""Petra Lindgren, CFO of Halvard Industries, reviews payout policy. Halvard's net income is SEK 900 million, its share price is SEK 120 and its EPS is SEK 9. It has 100 million shares and total equity of SEK 4,800 million.

Proposal 1: Borrow SEK 1,200 million at an after-tax cost of 5% and use it to repurchase shares at the market price.
Proposal 2: Pay a 10% stock dividend instead of cash.
Proposal 3: Raise the cash dividend from SEK 3.00 to SEK 3.60 per share.

A board member says Halvard's payout ratio is low because the company has high growth prospects, high flotation costs on new equity and shareholders face high tax rates on dividends.""",[
 Q("Based on Proposal 1, the debt-financed repurchase will most likely:","increase EPS, because the earnings yield is higher than the after-tax cost of debt",["decrease EPS, because the earnings yield is lower than the after-tax cost of debt","leave EPS unchanged, because shareholder wealth is unchanged"],
   "Earnings yield = E/P = 9/120 = 7.5% (or 1 ÷ P/E). 7.5% > 5% after-tax cost of debt → EPS rises.\nCheck: new EPS = (900 − 0.05 × 1,200)/90 = 840/90 = 9.33 > 9.00. If earnings yield < cost of debt, EPS falls."),
 Q("After the repurchase in Proposal 1, Halvard's book value per share is closest to:","SEK 40.00",["SEK 48.00","SEK 54.55"],
   "Shares bought = 1,200/120 = 10 million → 90 million left.\nEquity = 4,800 − 1,200 = 3,600\nBVPS = equity ÷ shares = 3,600/90 = SEK 40.00 (it falls because the price paid, 120, is above BVPS of 48)."),
 Q("After the stock dividend in Proposal 2, Halvard's share price is most likely closest to:","SEK 109.09",["SEK 108.00","SEK 120.00"],
   "New price = old price / (1 + stock dividend %) = 120/1.10 = SEK 109.09. A scrip (stock) dividend does not change shareholder wealth."),
 Q("The market will most likely interpret Proposal 3 as:","a positive signal, because managers raise dividends only when they expect to sustain them",["a negative signal, because cash leaves the company instead of funding growth","no signal, because dividend policy is irrelevant to firm value"],
   "Initiating or increasing a dividend → positive signal; cutting or omitting → negative signal. Firms avoid raising dividends they cannot maintain."),
 Q("Which of the board member's reasons is consistent with a low payout ratio?","All three",["High growth prospects only","High tax rates on dividends only"],
   "Low payout is consistent with high growth opportunities, high flotation costs of new issues and high taxes on dividends.")])

add("Corporate Issuers","""Lindgren compares dividend policies and repurchase methods.

Company A pays a dividend of SEK 2.00 per share every year, whatever its earnings.
Company B pays out 40% of earnings every year.

Method 1: Buy shares in the open market over time.
Method 2: A fixed-price tender offer or Dutch auction.
Method 3: A direct negotiation with a large shareholder.

A hedge fund has bought a large stake in Halvard and threatens a takeover unless Halvard buys its shares back at a premium.""",[
 Q("The dividend policies of Companies A and B are, respectively:","stable and constant payout",["constant payout and stable","residual and stable"],
   "Stable dividend: the amount stays the same (or grows smoothly). Constant payout: the percentage of earnings stays the same (sometimes a target range)."),
 Q("Which statement about the repurchase methods is most accurate?","Method 1 is the most flexible; Methods 2 usually buy at a premium; Method 3 may be done at a discount",["Method 1 usually buys at a premium; Method 2 is the most flexible; Method 3 is always done at a premium","Method 1 is the least flexible; Method 2 always buys at a discount; Method 3 is done at the market price"],
   "Open market = flexible. Fixed-price tender / Dutch auction → premium to market. Negotiated (direct) → can be at a discount, or at a premium in greenmail."),
 Q("The hedge fund's demand is best described as:","greenmail",["a Dutch auction","a liquidating dividend"],
   "Greenmail = buying back a hostile bidder's shares at a premium to stop a takeover."),
 Q("Compared with paying the same amount as a cash dividend, a share repurchase leaves shareholder wealth:","the same, unless taxes or signalling differ",["higher, because the share count falls","lower, because the shares are bought at market price"],
   "With equal amounts and no taxes or signalling effects, shareholders' wealth is the same under a repurchase and a cash dividend.")])

add("Corporate Issuers","""Oskar Brandt reviews governance and ESG for Fennica Group.

Fact 1: Fennica and Saarinen Oy each own 10% of the other's shares.
Fact 2: Fennica's parent controls it through a chain of majority holdings.
Fact 3: Fennica's CEO sits on Saarinen's board, and Saarinen's CEO sits on Fennica's board.
Fact 4: Fennica's controlling family owns 25% of the shares but holds 60% of the votes through dual-class shares.
Fact 5: Brandt uses ESG ratings from a data vendor and Fennica's own sustainability report.
Fact 6: Fennica's green bond trades at a lower spread than a conventional Fennica bond with the same rating and maturity.""",[
 Q("Facts 1, 2 and 3 describe, respectively:","a horizontal (cross-holding) structure, a vertical structure and interlocking directorships",["a vertical structure, a horizontal structure and a voting cap","interlocking directorships, a pyramid and a cross-holding"],
   "Cross-holdings between companies → horizontal structure. One company controlling another down a chain → vertical (pyramid) structure. Executives on each other's boards → interlocking directorships (a governance issue)."),
 Q("Fact 4 most likely creates which governance problem, and what is one remedy?","A principal–principal conflict between controlling and minority shareholders; a voting cap",["A principal–agent conflict between managers and shareholders; a voting cap","A principal–agent conflict; more independent directors only"],
   "Dispersed ownership and voting → principal–agent problem. Concentrated voting power (votes > ownership) → principal–principal problem. A voting cap limits how much any holder can vote."),
 Q("Regarding Fact 5, which statement is most accurate?","Vendor data involve subjective analysis of sources and rankings; company-reported data can be inconsistent and voluntary",["Vendor data are objective and fully comparable across vendors; company-reported data are mandatory","Company-reported data are audited and standardised across firms; vendor data are based only on public filings"],
   "ESG data vendors: subjective methods and rankings. Company-reported data (10-K, annual and sustainability reports, proprietary methods): inconsistent and voluntary."),
 Q("The tighter spread on the green bond in Fact 6 is best explained by:","strong investor demand, which raises the price and lowers the yield",["lower credit risk, because green projects never default","shorter duration"],
   "Same issuer, rating and maturity → the difference comes from demand: more buyers → higher price → lower yield → tighter spread.")])

ys,yl,ms,ml,mi=0.042,0.051,5,10,7
ymid=ys+(yl-ys)/(ml-ms)*(mi-ms)
add("Corporate Issuers",f"""Mara Kovacs, an analyst at Danubia Capital, estimates the cost of capital for several projects.

Project 1: A private domestic company. Kovacs uses an expanded CAPM with size and company-specific premiums.
Project 2: A subsidiary in an emerging market. She adds a country risk premium using an extended CAPM with global and country factors.
Project 3: She needs a pre-tax cost of debt for a company with no traded bonds, rated BBB, and with debt maturing in {mi} years. Comparable BBB bonds yield {ys*100:.1f}% at {ms} years and {yl*100:.1f}% at {ml} years.
Project 4: A multinational. Kovacs uses an international CAPM: risk-free rate 2.5%, global market premium 5.0%, global beta 1.1, foreign currency risk premium 1.5% and currency beta 0.4.""",[
 Q("For Project 3, the interpolated pre-tax cost of debt is closest to:",pct(ymid),[pct((ys+yl)/2),pct(yl)],
   f"YTM = YTM_S + (YTM_L − YTM_S)/(M_L − M_S) × (M_i − M_S) = 4.2% + (5.1% − 4.2%)/5 × 2 = {ymid*100:.2f}%"),
 Q("For Project 4, the cost of equity is closest to:","8.6%",["8.0%","9.1%"],
   "ICAPM: E(Re) = Rf + βG[E(RGM) − Rf] + βC[E(RC) − Rf] = 2.5% + 1.1 × 5.0% + 0.4 × 1.5% = 2.5 + 5.5 + 0.6 = 8.6%"),
 Q("Which matching of models to projects is most appropriate?","Expanded CAPM for Project 1; extended CAPM with a country risk premium for Project 2",["Extended CAPM for Project 1; expanded CAPM for Project 2","International CAPM for Project 1; expanded CAPM for Project 4"],
   "Expanded CAPM (size and company-specific premiums) → domestic private companies. Country risk premium / extended CAPM (global and country) → foreign operations in riskier countries.")])

add("Corporate Issuers","""Kovacs evaluates a merger between Danubia's client Velkor and a competitor. Velkor expects (1) revenue gains from cross-selling, (2) cost savings from closing duplicate offices, (3) some customers leaving because of overlap and (4) one-time integration costs.

To value the competitor she gathers the P/E ratios of five comparable companies: 14, 16, 18, 21 and 31. The competitor's EPS is €2.50.""",[
 Q("Which items increase the combined company's operating income?","Items 1 and 2 only",["Items 1, 2 and 3","Items 3 and 4 only"],
   "Revenue synergies and cost synergies raise operating income. Revenue dis-synergies (lost customers), cost dis-synergies and one-time integration costs reduce it. Think of where each hits operating income."),
 Q("Using comparable companies, the competitor's value per share is closest to:","€45.00",["€50.00","€52.50"],
   "Use the median P/E, not the mean: median of 14, 16, 18, 21, 31 = 18. Value = 18 × 2.50 = €45.00. (Mean = 20 → €50; the outlier 31 distorts it.)")])

# ---------------- EQUITY ----------------
add("Equity Valuation","""Tobias Weller values Grünwald AG with free cash flow models. Exhibit 1 shows data for the year (in € millions).

Exhibit 1: Grünwald AG Data
# Item | Amount
Net income | 420
Depreciation | 150
Fixed capital investment | 310
Increase in current assets (including a €30 million increase in cash) | 110
Increase in current liabilities | 40
Target debt ratio | 40%

Grünwald pays dividends that are far below its FCFE, and its dividends have little relation to its ability to pay.""",[
 Q("The investment in working capital used to calculate FCFE is closest to:","€40 million",["€70 million","€150 million"],
   "ΔWC = Δ current assets (excluding cash and cash equivalents) − Δ current liabilities = (110 − 30) − 40 = €40m."),
 Q("Grünwald's FCFE, assuming investment is financed at the target debt ratio, is closest to:","€300 million",["€236 million","€260 million"],
   "FCFE = NI − (1 − DR)(FCInv − Dep) − (1 − DR)(WCInv)\n= 420 − 0.60 × (310 − 150) − 0.60 × 40 = 420 − 96 − 24 = €300m"),
 Q("Weller should most likely value Grünwald with:","an FCFE model, because dividends differ greatly from the capacity to pay them",["a dividend discount model, because Grünwald pays dividends","a residual income model, because FCFE is positive"],
   "Use FCFE instead of DDM when dividends differ significantly from FCFE (dividend-paying capacity), when the company pays no dividends, or when an investor takes a control perspective.")])

add("Equity Valuation","""Tobias Weller values the preferred shares and estimates growth for Ostmark AG.

Ostmark's non-callable, non-convertible perpetual preferred shares pay €4.50 a year. The risk-free rate is 3.0% and the equity risk premium applicable to the preferred shares is 4.5%.

Ostmark expects EPS of €6.00 next year with a target payout of 45%. Its most recent dividend was €2.40, and it expects to move to the target payout over three years in equal annual steps.

Ostmark's ROE is 12% and its retention ratio is 55%.""",[
 Q("The value of Ostmark's preferred shares is closest to:","€60.00",["€100.00","€150.00"],
   "Preferred value = D / r, with r = Rf + ERP = 3.0% + 4.5% = 7.5% (check whether you are given r or only the ERP).\nValue = 4.50 / 0.075 = €60.00. (€100 uses only the ERP; €150 uses only Rf.)"),
 Q("Next year's expected dividend is closest to:","€2.50",["€2.70","€2.40"],
   "Expected growth in dividend = [(expected EPS × target payout) − previous dividend] / n = (6.00 × 0.45 − 2.40)/3 = (2.70 − 2.40)/3 = 0.10\nNext dividend = 2.40 + 0.10 = €2.50"),
 Q("Ostmark's sustainable growth rate is closest to:","6.6%",["5.4%","12.0%"],
   "g = b × ROE = 0.55 × 12% = 6.6%, where b = retention ratio = 1 − payout ratio (payout = DPS/EPS).")])

add("Equity Valuation","""Weller values a small private company, Hallberg GmbH, for a minority investor. A controlling interest would command a control premium of 25%, and the discount for lack of marketability is 20%.

Weller also computes the residual income for a public company with net income of €80 million, beginning equity of €600 million, ending equity of €640 million and a cost of equity of 10%.""",[
 Q("The total discount applied to a controlling value to value Hallberg's minority, non-marketable stake is closest to:","36%",["45%","40%"],
   "DLOC = 1 − 1/(1 + control premium) = 1 − 1/1.25 = 20%.\nTotal discount = 1 − (1 − DLOC)(1 − DLOM) = 1 − 0.80 × 0.80 = 36% (the discounts multiply, they are not added)."),
 Q("Residual income for the year is closest to:","€20 million",["€16 million","€18 million"],
   "RI = NI − r × beginning book value of equity = 80 − 0.10 × 600 = €20m. Use beginning equity, not ending or average.")])

# ---------------- ECONOMICS ----------------
add("Economics","""Sofia Marin, a currency strategist at Iberia Capital, reviews FX positions.

Position 1: Three months ago Iberia sold EUR 10 million forward against USD for six months at USD 1.1050/EUR. Today the three-month forward rate is USD 1.0950/EUR and the three-month USD interest rate is 4.0% (annualised).
Position 2: A client wants a one-year forward on USD/MXN. Spot is 17.20 MXN/USD and the dealer quotes forward points of +850 (in units of 0.0001).""",[
 Q("The mark-to-market value of Position 1 to Iberia is closest to:","USD 99,010 gain",["USD 100,000 gain","USD 99,010 loss"],
   "Iberia sold EUR forward at 1.1050. To close, it buys EUR forward at 1.0950: gain = (1.1050 − 1.0950) × 10m = USD 100,000 at settlement.\nDiscount for 3 months: 100,000 / (1 + 0.04 × 90/360) = 100,000 / 1.01 = USD 99,010."),
 Q("The all-in one-year forward rate for Position 2 is closest to:","17.2850 MXN/USD",["18.0500 MXN/USD","17.1150 MXN/USD"],
   "All-in forward = spot + forward points/10,000 = 17.2000 + 0.0850 = 17.2850 MXN/USD.")])

add("Economics","""Marin explains growth theory to junior staff.

Statement 1: "In the neoclassical model, in the steady state, growth of output per worker equals the rate of technological progress divided by labour's share, and total output grows at that rate plus labour force growth."
Statement 2: "In the steady state, the marginal product of capital equals the real interest rate, and MPK = α × Y/K."
Statement 3: "Capital deepening raises output per worker but runs into diminishing returns, so it cannot raise growth permanently."
Statement 4: "In the neoclassical model, capital flows from rich to poor countries, helping convergence." """,[
 Q("Which of Marin's statements are correct?","All four",["Statements 1 and 3 only","Statements 2 and 4 only"],
   "Neoclassical steady state: growth per capita = θ/(1 − α); total output growth = θ/(1 − α) + labour force growth. Steady state: MPK = r = αY/K. Capital deepening has diminishing returns. Open-economy neoclassical model: capital flows to poorer, capital-scarce countries with higher returns → convergence.")])

add("Economics","""Marin turns to exchange rates and capital flows.

Fact 1: The Canadian dollar has depreciated against the US dollar.
Fact 2: Over the past decade, inflation in Country X averaged 6% and in Country Y 2%. Over the past quarter, the X/Y exchange rate barely moved.
Fact 3: New Zealand's one-year rate is 5.5% and the euro area's is 3.0%. Spot is 0.5500 EUR/NZD.
Fact 4: A fund borrows in yen at 0.2% and invests in euro deposits at 3.0%.
Fact 5: Country Z has a large current account deficit, falling foreign reserves, a sharply appreciated real exchange rate, rapid credit growth and rising M2 relative to reserves.""",[
 Q("Based on Fact 1, the USD/CAD quote (USD per CAD) has most likely:","fallen",["risen","not changed"],
   "USD/CAD = USD per 1 CAD. If CAD depreciates, one CAD buys fewer USD → USD/CAD falls."),
 Q("Fact 2 is most consistent with:","relative PPP holding in the long run but not in the short run",["absolute PPP holding in the short run but not in the long run","relative PPP failing in the long run but holding in the short run"],
   "Relative PPP: currency of the higher-inflation country depreciates by the inflation difference. It works poorly in the short run but reasonably over long periods."),
 Q("Under uncovered interest rate parity, the expected EUR/NZD spot rate in one year is closest to:","0.5370",["0.5634","0.5500"],
   "Expected spot (EUR per NZD) = 0.5500 × (1 + i_EUR)/(1 + i_NZD) = 0.5500 × 1.030/1.055 = 0.5370. The high-yield currency (NZD) is expected to depreciate by the rate difference."),
 Q("The strategy in Fact 4 is best described as a:","carry trade, which profits if the yen does not appreciate by more than the rate difference",["covered interest arbitrage, which locks in a riskless profit from the rate difference","carry trade, which profits only if the yen appreciates against the euro"],
   "Carry trade: borrow the low-yield currency (JPY), invest in the high-yield currency (EUR). It earns the rate difference unless the funding currency appreciates enough, i.e. it bets that UIRP fails."),
 Q("Fact 5 most likely signals:","a high risk of a currency crisis",["a low risk of crisis, because credit growth supports the economy","a current account surplus"],
   "Warning signs of currency crises: large current account deficit, falling reserves, overvalued (appreciated) real exchange rate, rapid credit growth, rising M2 relative to reserves, and capital inflows that reverse.")])

add("Economics","""Marin compares exchange rate models and policy mixes.

Model 1: The pure monetary approach, in which PPP holds at all times.
Model 2: The Dornbusch model, in which prices are sticky in the short run.
Model 3: The portfolio balance approach, which focuses on long-run fiscal policy and government debt.

Country H has high capital mobility and adopts an expansionary monetary policy with a restrictive fiscal policy.""",[
 Q("After an unexpected monetary expansion, which model predicts that the domestic currency first depreciates by more than its long-run amount?","Model 2",["Model 1","Model 3"],
   "Dornbusch overshooting: with sticky prices, the currency initially depreciates more than PPP implies, then partly recovers. In the pure monetary approach, it depreciates in line with prices at once."),
 Q("Under the Mundell–Fleming model, Country H's currency will most likely:","depreciate",["appreciate","be unaffected"],
   "High capital mobility: expansionary monetary policy → lower rates → depreciation; restrictive fiscal policy → lower rates → depreciation. Both push the same way."),
 Q("Under Model 3, sustained fiscal deficits financed by rising government debt most likely cause the currency to:","depreciate in the long run, as investors demand a lower price or a higher return to hold more of the country's debt",["appreciate permanently, because higher interest rates keep attracting foreign capital","stay unchanged, because in the long run only monetary policy affects the exchange rate"],
   "Portfolio balance: short run, fiscal expansion may raise rates and the currency (Mundell–Fleming); long run, continuous deficits raise the supply of the country's bonds and investors require compensation → currency depreciates.")])

# ---------------- ALTERNATIVES ----------------
add("Alternative Investments","""Rhea Castell, an alternatives analyst at Lucerne Advisors, reviews three strategies.

Strategy 1: A fund that is always net short, with little or no long exposure.
Strategy 2: A fund that has a short bias but holds some long positions, usually 30–60% net short.
Strategy 3: A fund that buys life insurance policies from policyholders (life settlements).""",[
 Q("Strategies 1 and 2 are best described as, respectively:","dedicated short bias and short-biased",["short-biased and dedicated short bias","equity market neutral and short-biased"],
   "Dedicated short: mostly 60–120% short, little long exposure. Short-biased: net short but with some long positions (roughly 30–60% net short)."),
 Q("Strategy 3 is most attractive when the policy has:","a low surrender value, low ongoing premiums and an insured person likely to die sooner than the insurer expects",["a high surrender value, high ongoing premiums and an insured person likely to live longer than expected","a high surrender value, low ongoing premiums and an insured person likely to live longer than expected"],
   "The fund pays the premiums and receives the death benefit. It looks for low surrender value (cheap to buy), low premiums and earlier-than-expected death.")])

noi=32.0; cap=0.064; other=18; debt=290; sh=10
nav=(noi/cap+other-debt)/sh
add("Alternative Investments",f"""Castell values Alpenhaus REIT. Next year's net operating income is CHF {noi:.0f} million and the market capitalisation rate for similar properties is {cap*100:.1f}%. Alpenhaus also holds CHF {other} million of cash and other tangible assets, and has CHF {debt} million of debt. It has {sh} million shares.

Castell notes that Alpenhaus is highly leveraged and trades at a large discount to NAVPS, and that its debt matures next year.""",[
 Q("Alpenhaus's NAVPS is closest to:",f"CHF {nav:.2f}",[f"CHF {(noi/cap)/sh:.2f}",f"CHF {(noi/cap+other)/sh:.2f}"],
   f"Property value by direct capitalisation (not depreciated book cost) = NOI / cap rate = {noi}/{cap} = CHF {noi/cap:.1f}m\nNAV = {noi/cap:.1f} + {other} − {debt} = {noi/cap+other-debt:.1f}m\nNAVPS = {noi/cap+other-debt:.1f}/{sh} = CHF {nav:.2f}"),
 Q("Castell's concern about Alpenhaus most likely relates to:","refinancing risk, because a highly leveraged REIT trading below NAVPS may struggle to raise new capital",["inflation risk, because its long leases have fixed rents that do not rise with prices","an advantage, because the discount to NAVPS makes it cheap to issue new equity"],
   "High leverage plus a deep discount to NAVPS signals market concern; issuing equity below NAV is dilutive and lenders are cautious, so refinancing maturing debt is hard.")])

S=82.0; st=2.5; cy=4.0
add("Alternative Investments",f"""Castell analyses commodity futures. The spot price of crude oil is ${S:.2f} per barrel. Storage costs are ${st:.2f} per barrel for the period, and the convenience yield is ${cy:.2f} per barrel (expressed in the same terms). Ignore financing costs.""",[
 Q("The futures price is closest to:",f"${S+st-cy:.2f}",[f"${S+st+cy:.2f}",f"${S-st+cy:.2f}"],
   f"Futures price = spot + storage costs − convenience yield = {S} + {st} − {cy} = ${S+st-cy:.2f}"),
 Q("The oil futures market is most likely in:","backwardation, because the convenience yield exceeds storage costs",["contango, because storage costs are positive","contango, because the convenience yield is high"],
   "Convenience yield > storage cost (low inventories) → futures below spot → backwardation. Storage costs > convenience yield (ample inventories) → contango.")])

add("Alternative Investments","""Castell compares a REIT with a real estate operating company (REOC) for a client.""",[
 Q("Compared with a REOC, a REIT most likely:","must distribute most of its taxable income and is exempt from corporate income tax, which limits its ability to reinvest",["can freely reinvest earnings and develop properties for sale, but pays corporate tax","has more flexible capital structure and lower dividend yields"],
   "REIT: tax exempt if it distributes most income → high dividend yield, less retained capital, limits on development. REOC: ordinary taxable company, more freedom to reinvest, develop and use leverage; lower yield.")])
