from lib import *
# ---------------- FSA: INTERCORPORATE ----------------
add("Financial Statement Analysis","""Clara Weiss, CFA, analyses the investments of Montclair Holdings, which reports under IFRS.

Investment 1: On 1 January, Montclair bought 12% of Pell Foods for $66 million and classified it at fair value through profit or loss (FVPL). On 31 December, the fair value of 100% of Pell's equity was $610 million. Pell reported net income of $45 million and paid dividends of $25 million during the year.

Investment 2: On 1 January, Montclair bought 30% of Rosen AG for €360 million and uses the equity method. Rosen's book value of net assets was €900 million. The fair value of Rosen's plant and equipment exceeded its book value by €100 million; the plant has a remaining life of 10 years (straight line). Any remaining excess is goodwill. Rosen reported net income of €120 million and paid dividends of €50 million.

During the year Rosen also sold inventory to Montclair at a profit; half of that inventory was still held by Montclair at year-end.""",[
 Q("The pre-tax income Montclair reports from Investment 1 is closest to:","$10.2 million",["$3.0 million","$7.2 million"],
   "FVPL: income = holding gain + dividends received.\nYear-end value = 12% × 610 = $73.2m → holding gain = 73.2 − 66 = $7.2m\nDividends = 12% × 25 = $3.0m\nPre-tax income = 7.2 + 3.0 = $10.2m (Pell's net income is not recognised under FVPL)."),
 Q("The goodwill included in Investment 2 is closest to:","€60 million",["€90 million","€0"],
   "Goodwill = purchase price − % × book value of net assets − % × (FV − BV) of identifiable assets\n= 360 − 0.30 × 900 − 0.30 × 100 = 360 − 270 − 30 = €60m."),
 Q("The carrying value of Investment 2 at 31 December is closest to:","€378 million",["€381 million","€396 million"],
   "Investment account = purchase price + % × net income − % × dividends − amortisation of excess purchase price\n= 360 + 0.30 × 120 − 0.30 × 50 − (0.30 × 100)/10\n= 360 + 36 − 15 − 3 = €378m."),
 Q("Montclair's equity income from Rosen (contribution to net earnings), before any adjustment for the inventory sale, is closest to:","€33 million",["€36 million","€18 million"],
   "Contribution to earnings = % × net income − amortisation of the excess = 36 − 3 = €33m.\nDividends reduce the investment account but are not part of earnings."),
 Q("Regarding Rosen's sale of inventory to Montclair, Montclair should:","defer its share of the unrealised profit on the inventory still held until it is sold to third parties",["recognise its full share of the profit immediately, because the sale is upstream","eliminate 100% of the profit, because the companies are under common control"],
   "Under the equity method, the investor's share of unrealised profits on intercompany (upstream or downstream) sales is deferred until the goods are sold to outside parties.")])

add("Financial Statement Analysis","""Montclair Holdings acquires 80% of Tessaro SpA for €800 million in cash. The fair value of Tessaro's identifiable net assets is €850 million. Montclair's analyst compares the full goodwill and partial goodwill methods.

The analyst also considers a different deal in which the entire excess of the purchase price over book value is allocated to identifiable assets.""",[
 Q("Goodwill under the full goodwill method is closest to:","€150 million",["€120 million","€50 million"],
   "Full goodwill = purchase price / % owned − FV of identifiable net assets = 800/0.80 − 850 = 1,000 − 850 = €150m."),
 Q("Under the partial goodwill method, goodwill and the non-controlling interest are closest to:","€120 million and €170 million",["€150 million and €200 million","€120 million and €200 million"],
   "Partial goodwill = 800 − 0.80 × 850 = €120m.\nNCI (partial) = % not owned × identifiable net assets = 0.20 × 850 = €170m.\n(Full method: NCI = 0.20 × 1,000 = €200m.)"),
 Q("Compared with the full goodwill method, the partial goodwill method most likely reports:","higher ROE and higher ROA",["lower ROE and lower ROA","the same ROE and ROA"],
   "Partial goodwill gives smaller goodwill (lower assets) and smaller NCI (lower equity), with the same net income → higher ROA and ROE."),
 Q("In the deal where the entire excess is allocated to identifiable assets, goodwill is:","zero under both the full and partial goodwill methods",["positive under the full method only","equal to the excess of fair value over book value"],
   "If all of the excess goes to identifiable assets, nothing is left for goodwill under either method.")])

add("Financial Statement Analysis","""Montclair and Quint Corp. each own 50% of a joint venture. Montclair's analyst compares reporting the joint venture with the equity method and with proportionate consolidation, and then compares these with the acquisition method used for a controlled subsidiary.""",[
 Q("Compared with the equity method, proportionate consolidation of the joint venture reports:","higher revenue and assets, but the same net income and equity",["the same revenue, but higher net income","higher revenue, net income and equity"],
   "Proportionate consolidation adds the venturer's share of revenues, expenses, assets and liabilities line by line. Net income and equity are the same as under the equity method."),
 Q("Ranking the three methods for total assets, liabilities and revenue gives:","acquisition > proportionate consolidation > equity method",["equity method > proportionate consolidation > acquisition","proportionate consolidation > acquisition > equity method"],
   "Acquisition adds 100% of the subsidiary; proportionate adds only the owned share; the equity method adds one line (investment) and one income line. Net income (to the parent) is the same under all three.")])

add("Financial Statement Analysis","""Montclair creates a special purpose entity (SPE) and sells it $200 million of receivables. The SPE pays for the receivables with money borrowed from an outside bank. Montclair absorbs the SPE's losses, so it must consolidate the SPE.

Montclair also holds bonds classified at amortised cost and equity securities at fair value through OCI. Management plans to change its business model for the bonds and asks whether they can be reclassified.""",[
 Q("Because Montclair consolidates the SPE, the sale of receivables most likely:","increases consolidated cash, because the money came from outside the group",["leaves consolidated cash unchanged, because intercompany sales are eliminated","reduces consolidated debt"],
   "The intercompany sale is eliminated, but the bank loan is new money from outside the group: consolidated cash and debt both rise. If the SPE had been funded by Montclair itself, consolidated cash would be unchanged."),
 Q("Which statement about IFRS 9 and the reclassification is most accurate?","Amortised-cost securities are carried at historical cost; reclassification is allowed after a significant change in the business model and prior statements are not restated",["FVOCI securities are carried at historical cost; reclassification is allowed at any time but requires restating prior periods","FVPL securities are carried at amortised cost; reclassification of financial assets is never allowed under IFRS 9"],
   "FVPL and FVOCI → carried at fair (market) value; amortised cost → historical cost.\nReclassification of debt securities is allowed only when the business model changes significantly; it applies prospectively, with no restatement.")])

# ---------------- EMPLOYEE COMPENSATION ----------------
add("Financial Statement Analysis","""Sven Aalto analyses the share-based compensation of Kiruna Tech, a US GAAP reporter with a 25% tax rate.

During the year 30,000 RSUs vested. They were granted at the start of the year with a grant-date fair value of $24 per RSU, and Kiruna's share price on the vesting date was $31. In the same year, 2,000 unvested RSUs from an earlier grant (grant-date fair value $22) were forfeited, and the full expense previously recognised for them ($22 per RSU) is reversed this year.

Kiruna also grants stock options. Aalto considers how changes in valuation inputs affect the options' fair value and Kiruna's reported earnings.""",[
 Q("Kiruna's RSU compensation expense for the year is closest to:","$676,000",["$720,000","$930,000"],
   "RSU expense = vested × grant-date FV − forfeited × their FV = 30,000 × 24 − 2,000 × 22 = 720,000 − 44,000 = $676,000.\nThe vesting-date price ($31) does not affect the expense."),
 Q("The tax effect of the RSU vesting and its accounting under US GAAP is closest to:","a $52,500 windfall that reduces income tax expense",["a $52,500 windfall recorded in equity","a $52,500 shortfall that increases income tax expense"],
   "Tax effect = units vested × (settlement price − grant-date value) × tax rate = 30,000 × (31 − 24) × 25% = $52,500.\nPositive → windfall. US GAAP: through the income statement (lower tax expense). IFRS: excess goes to equity."),
 Q("Because of the windfall, Kiruna's effective tax rate under US GAAP compared with what it would be under IFRS is:","lower",["higher","the same"],
   "US GAAP: the windfall reduces income tax expense → lower effective tax rate. IFRS: excess goes to equity → no effect on the rate, so IFRS shows a higher rate for a windfall (and a lower one for a shortfall)."),
 Q("The vesting of the RSUs increases Kiruna's basic shares outstanding by:","30,000 shares",["28,000 shares","0 shares, because RSUs are only potentially dilutive"],
   "Once RSUs vest they become common shares: basic shares rise by the number vested (30,000). Unvested RSUs are potentially dilutive."),
 Q("Holding other inputs constant, which change in the option valuation inputs would increase Kiruna's reported net income?","A higher expected dividend yield",["A higher risk-free rate","A longer expected option life"],
   "Option value ↑ with higher risk-free rate, longer life and higher volatility → higher compensation expense → lower net income (bad for the company).\nHigher dividend yield → lower call value → lower expense → higher net income."),
 Q("If expected share price volatility rises, the fair value of RSUs and of stock options at grant will most likely:","stay the same for RSUs and increase for options",["increase for both","increase for RSUs and stay the same for options"],
   "RSU fair value = share price at grant, not affected by volatility. Option value rises with volatility → higher expense and lower net income.")])

ops=200000-(200000*18+600000)/30; rsu=60000-900000/30
add("Financial Statement Analysis",f"""Aalto computes Kiruna's diluted shares. Basic weighted-average shares are 5,000,000 and the average share price is $30.

Exhibit 1: Potentially Dilutive Securities
# Security | Number | Exercise price | Average unrecognised compensation expense
Stock options | 200,000 | $18 | $600,000
Unvested RSUs | 60,000 | – | $900,000

Average unrecognised expense is the average of the beginning and ending unrecognised compensation expense.""",[
 Q("Kiruna's diluted shares are closest to:",f"{5000000+ops+rsu:,.0f}",[f"{5000000+ops+60000:,.0f}",f"{5000000+200000+60000:,.0f}"],
   f"Treasury stock method: dilutive shares = number − (cash proceeds + average unrecognised expense) / average price\nOptions: 200,000 − (200,000 × 18 + 600,000)/30 = 200,000 − 140,000 = {ops:,.0f}\nRSUs (no cash proceeds): 60,000 − 900,000/30 = {rsu:,.0f}\nDiluted = 5,000,000 + {ops:,.0f} + {rsu:,.0f} = {5000000+ops+rsu:,.0f}")])

add("Financial Statement Analysis","""Sven Aalto reviews the defined benefit pension plan of Kiruna Tech. Exhibit 1 shows plan data for the year (in $ millions).

Exhibit 1: Pension Plan Data
# Item | Amount
Beginning PBO | 500.0
Beginning plan assets | 440.0
Current service cost | 30.0
Past service cost (plan amendment this year) | 10.0
Discount rate | 4.5%
Expected return on plan assets | 6.0%
Actual return on plan assets | 20.0
Actuarial loss | 8.0
Employer contributions | 35.0
Benefits paid | 25.0

Aalto asks which assumption change would most reduce Kiruna's pension cost under US GAAP.""",[
 Q("The interest cost under US GAAP and the net interest expense under IFRS are closest to:","$22.5 million and $2.7 million",["$22.5 million and $22.5 million","$2.7 million and $19.8 million"],
   "US GAAP interest cost = beginning PBO × r = 500 × 4.5% = 22.5\nIFRS net interest = beginning funded status × r = (440 − 500) × 4.5% = −2.7 → net interest expense of 2.7"),
 Q("Pension cost reported in profit or loss under IFRS is closest to:","$42.7 million",["$26.1 million","$32.7 million"],
   "IFRS P&L: service cost (current + past) + net interest = 30 + 10 + 2.7 = 42.7.\n(US GAAP P&L: current service cost + interest cost − expected return = 30 + 22.5 − 26.4 = 26.1, with past service cost amortised from OCI.)"),
 Q("Kiruna's net pension liability at year-end is closest to:","$75.5 million",["$60.0 million","$65.5 million"],
   "Ending PBO = 500 + 30 + 10 + 22.5 + 8 − 25 = 545.5\nEnding plan assets = 440 + 35 + 20 − 25 = 470\nNet pension liability = 545.5 − 470 = 75.5"),
 Q("Which change in assumptions would most likely reduce Kiruna's pension cost under US GAAP?","A decrease in the estimated rate of future salary increases",["A decrease in the discount rate","A decrease in the expected return on plan assets"],
   "Lower salary growth → lower PBO and service cost → lower pension cost.\nA lower discount rate usually raises PBO and service cost; a lower expected return raises US GAAP pension cost.")])

# ---------------- MULTINATIONAL ----------------
add("Financial Statement Analysis","""Hector Ruiz analyses Atlas Industrial, a US company, and its subsidiary in Mexico.

Transaction: On 1 November, Atlas sold goods to a German customer on credit for €1,000,000, when the exchange rate was $1.10/€. On 31 December, the rate was $1.15/€ and the receivable was still outstanding.

Subsidiary: The Mexican subsidiary earns all of its revenue and incurs most of its costs in Mexican pesos, buys some materials in US dollars and borrows in euros.""",[
 Q("Atlas's foreign currency transaction gain or loss at 31 December is closest to:","a gain of $50,000",["a loss of $50,000","a gain of $1,150,000"],
   "Gain = foreign currency amount × (year-end rate − transaction-date rate) = 1,000,000 × (1.15 − 1.10) = $50,000.\nA receivable in a currency that appreciates gives a gain (a payable would give a loss)."),
 Q("The functional currency of the Mexican subsidiary is most likely the:","Mexican peso",["US dollar","euro"],
   "The primary indicators are the currency of revenues and the currency of operating costs; financing is a secondary indicator. Revenue and most costs are in pesos → peso is the functional currency.")])

add("Financial Statement Analysis","""Ruiz compares two foreign subsidiaries of Atlas. Both have net monetary liabilities and positive net assets.

Subsidiary A's functional currency is the US dollar (the parent's presentation currency), so it is remeasured with the temporal method.
Subsidiary B's functional currency is its local currency, so it is translated with the current rate method.

During the year both local currencies appreciate against the dollar. Prices in both countries are rising, and Subsidiary B uses FIFO.

Ruiz notes that in both cases the translated balance sheet does not balance until a plug figure is added. He also wants to reduce Atlas's balance sheet translation exposure for Subsidiary B.""",[
 Q("Which statement about the plug figure is most accurate?","For A the plug is translation gain or loss in net income; for B it is the cumulative translation adjustment in equity",["For A the plug is the cumulative translation adjustment; for B it is a gain or loss in net income","For both subsidiaries the plug is recorded in net income"],
   "Temporal method: remeasurement gain/loss goes to net income (and so to retained earnings).\nCurrent rate method: the translation adjustment goes to OCI as the CTA in equity. Both are the balancing (plug) figures."),
 Q("Because the local currency appreciated, Subsidiary A's remeasurement result and Subsidiary B's CTA are most likely:","a loss in income for A and a positive CTA for B",["a gain in income for A and a negative CTA for B","a loss for both"],
   "A: exposure = net monetary liabilities; foreign currency ↑ → liabilities worth more in dollars → loss in net income.\nB: exposure = net assets (positive); foreign currency ↑ → positive translation adjustment (CTA ↑)."),
 Q("For a subsidiary with an appreciating local currency and rising prices, which choices give the higher translated gross margin?","Temporal method and FIFO",["Current rate method and LIFO","Temporal method and LIFO"],
   "Temporal method: COGS at older (lower) historical rates while sales are at the average rate → higher margin when the foreign currency appreciates (current rate method is better when it depreciates).\nRising prices: FIFO uses older, cheaper costs → higher margin (LIFO when prices fall)."),
 Q("To reduce the balance sheet exposure of Subsidiary B, Atlas should most likely:","reduce B's net assets, for example by paying B's local cash to the parent as a dividend",["increase B's local currency receivables, for example by extending longer credit terms to local customers","convert B's local currency borrowings into equity issued to the parent, reducing its local liabilities"],
   "Find the net exposure under the method used, then choose the action that moves it toward zero. B's exposure is net assets (positive), so reduce exposed assets without reducing liabilities (for example a dividend paid out of local cash) or increase exposed liabilities. Paying down local liabilities with local cash leaves net assets unchanged, and converting debt to equity would increase net assets.")])

# ---------------- FINANCIAL INSTITUTIONS ----------------
add("Financial Statement Analysis","""Leah Morgan, a bank analyst, compares two banks. Exhibit 1 shows selected ratios for the last two years.

Exhibit 1: Selected Ratios
# Ratio | Bank X last year | Bank X this year | Bank Y last year | Bank Y this year
Allowance for loan losses / net charge-offs | 2.8 | 3.4 | 2.6 | 2.1
Provision for loan losses / net charge-offs | 1.0 | 1.3 | 1.0 | 0.8
Allowance for loan losses / nonperforming loans | 1.1 | 1.3 | 1.2 | 0.9
Liquid assets / total assets | 0.18 | 0.21 | 0.20 | 0.17
Loans / total assets | 0.62 | 0.60 | 0.61 | 0.66
Trading revenue / total revenue | 0.08 | 0.07 | 0.15 | 0.24

Bank X funds itself mainly with long-term consumer deposits; Bank Y relies on short-term interbank borrowing. Morgan expects the yield curve to invert next year.""",[
 Q("Based on the loan loss ratios, which bank is accounting more conservatively and building a larger cushion?","Bank X",["Bank Y","Neither, because both provision ratios equal 1 last year"],
   "Allowance/charge-offs rising → bigger cushion. Provision/charge-offs > 1 → conservative; = 1 → flat allowance; < 1 → aggressive. Allowance/NPLs rising → sufficient provisioning. All three improve for Bank X and worsen for Bank Y."),
 Q("Based on asset quality and earnings quality, which statement is most accurate?","Bank X is better: higher liquid assets, lower loans to assets and a smaller share of volatile trading revenue",["Bank Y is better, because higher trading revenue means more diversified earnings","Bank Y is better, because a higher loans-to-assets ratio means more interest income"],
   "Liquid assets/total assets ↑ = good; loans/total assets ↑ = more credit risk (bad). Trading revenue is volatile and not sustainable, so a lower share of revenue is better."),
 Q("Which bank has the more stable funding, and what effect would an inverted yield curve most likely have on bank net interest revenue?","Bank X; net interest revenue would fall",["Bank Y; net interest revenue would rise","Bank X; net interest revenue would rise"],
   "Stable funding: longer-term and consumer (retail) deposits are stickier than short-term interbank funding.\nBanks borrow short and lend long (maturity transformation). An inverted curve raises short-term funding costs relative to long-term lending rates → lower net interest revenue."),
 Q("Which item is included in Common Equity Tier 1 capital?","Retained earnings",["Preferred stock with discretionary dividends","Subordinated convertible bonds"],
   "CET1: common stock, additional paid-in capital, retained earnings, OCI, less intangibles and deferred tax assets.\nOther Tier 1: preferred stock with discretionary dividends. Tier 2: subordinated debt such as convertible bonds.")])

add("Financial Statement Analysis","""Leah Morgan, an insurance analyst, analyses Harbour Mutual, a property and casualty (P&C) insurer, for the year (in $ millions).

Exhibit 1: Harbour Mutual Underwriting Data
# Item | Amount
Net premiums written | 1,250
Net premiums earned | 1,200
Claims paid | 690
Increase in loss reserves | 90
Underwriting expenses, including commissions | 350

Morgan notes that after several years of intense competition and weak pricing, many P&C insurers have lost capital and some have left the market.""",[
 Q("Harbour's loss ratio and expense ratio are closest to:","65.0% and 28.0%",["57.5% and 29.2%","62.4% and 28.0%"],
   "Loss ratio = (claims paid + increase in loss reserves) / net premiums earned = (690 + 90)/1,200 = 65.0% (efficiency of underwriting standards).\nExpense ratio = underwriting expenses incl. commissions / net premiums written = 350/1,250 = 28.0% (efficiency of operations)."),
 Q("Based on Morgan's note, the P&C cycle is most likely moving into a:","hard market, with reduced competition and higher premiums",["soft market, with more competition and lower premiums","soft market, because capital is shrinking"],
   "Cycle: soft market (high competition, weak prices) → capital shrinks and firms exit → reduced competition and higher prices (hard market) → higher profits attract new entrants → soft market again.")])

# ---------------- QUALITY OF FINANCIAL REPORTS ----------------
add("Financial Statement Analysis","""Nora Lindahl screens companies for earnings quality.

Company P: revenue growth well above peers; receivables growing faster than revenue; a rising share of revenue booked in the fourth quarter; net income greater than cash flow from operations for three years. Its receivables turnover has fallen, and Lindahl suspects bill-and-hold sales and channel stuffing.
Company Q: an Altman Z-score of 3.4 and a Beneish M-score of −2.6.
Company R: a Beneish M-score of −1.2 and a high level of accruals. Lindahl separates accruals into normal accruals explained by a regression on business activity, and the residual.

Company S reports under IFRS and classifies interest paid in financing activities. To compare it with peers, Lindahl reclassifies interest paid into operating activities.""",[
 Q("Company P's pattern is most consistent with:","aggressive revenue recognition that inflates receivables",["conservative accounting that defers revenue to later periods","high-quality earnings that are well supported by operating cash flow"],
   "Warning signs: revenue growth above peers, receivables growing faster than revenue, high share of revenue in the final quarter, net income > CFO. Bill-and-hold and channel stuffing raise receivables and lower receivables turnover."),
 Q("Which company is most likely to be manipulating earnings?","Company R",["Company Q","Neither, because both M-scores are negative"],
   "M-score above −1.78 → higher probability of manipulation: R (−1.2) is above, Q (−2.6) below. A higher Altman Z-score means lower bankruptcy risk."),
 Q("The residual from Lindahl's accruals regression represents:","discretionary accruals, which may signal earnings manipulation",["non-discretionary accruals, which arise from normal operations","cash earnings"],
   "Non-discretionary accruals come from normal business activity (explained by the regression). Discretionary accruals (the residual) come from unusual choices and can signal manipulation; high accruals mean lower earnings quality."),
 Q("After Lindahl's reclassification, Company S's CFO and CFF will be, respectively:","lower and higher",["higher and lower","unchanged and lower"],
   "Interest paid is a cash outflow. Moving it from CFF to CFO lowers CFO and raises (makes less negative) CFF.")])

# ---------------- INTEGRATION ----------------
add("Financial Statement Analysis","""Jonas Berg compares Norvik AB with its industry. Exhibit 1 gives selected data (in SEK millions).

Exhibit 1: Norvik Financial Data
# Item | Amount
Revenue | 4,800
EBIT | 720
Earnings before tax (EBT) | 600
Net income | 450
Average total assets | 6,000
Average equity | 2,500

Berg also notes:
Note 1: Norvik's ratio of operating cash flow before interest and taxes to operating income is well above 1.
Note 2: The Nordic segment accounts for 30% of total assets and 45% of total capital expenditures.
Note 3: Norvik's depreciable lives for PP&E are 20% longer than the industry average.""",[
 Q("Using the five-step DuPont analysis, Norvik's interest burden and ROE are closest to:","0.833 and 18.0%",["0.750 and 18.0%","0.833 and 7.5%"],
   "Tax burden = NI/EBT = 450/600 = 0.75\nInterest burden = EBT/EBIT = 600/720 = 0.833\nEBIT margin = 720/4,800 = 0.15\nAsset turnover = 4,800/6,000 = 0.80\nLeverage = 6,000/2,500 = 2.40\nROE = 0.75 × 0.833 × 0.15 × 0.80 × 2.40 = 18.0% (= 450/2,500)"),
 Q("Note 1 most likely indicates that Norvik's earnings:","are backed by cash flow",["are inflated by accruals","include large one-time gains"],
   "Operating cash flow before interest and taxes ÷ operating income well above 1 → earnings are supported by cash (higher quality). When computing it, adjust for where interest and taxes paid are classified (IFRS allows CFO or CFF/CFI)."),
 Q("Based on Note 2, the Nordic segment is most likely:","growing, because its capex share is greater than its asset share",["shrinking, because it holds only 30% of assets","being run for cash"],
   "Segment capex % ÷ segment asset % = 45/30 = 1.5 > 1 → the company is investing more there: growing. Below 1 → being reduced."),
 Q("If Berg adjusts Norvik's depreciation to the industry's shorter lives, Norvik's debt-to-equity ratio will most likely:","increase",["decrease","stay the same"],
   "Shorter lives → higher depreciation → lower net income → lower retained earnings and equity → higher D/E.\n(If a company's figure is above the market's, adjust it down; if below, adjust it up.)")])
