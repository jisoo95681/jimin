// Exam-style vignette sets from the CFA L2 practice set.
// Each vignette: id, title, topic, body (blocks), questions.
// Body blocks: ["h", text] subheading, ["p", text] paragraph,
//              ["table", { title, head, rows, note }] exhibit.
// Question: q, options (A/B/C, shown in this order), answer (index), why.
const VIGNETTES = [
  {
    id: "brannock",
    title: "Brannock plc",
    topic: "Intercorporate Investments",
    body: [
      ["p", "Brannock plc is a packaged-goods manufacturer headquartered in the United Kingdom. It complies with IFRS. In 2019, Brannock held a 5 percent passive stake in Delmar SA. In December 2019, Brannock announced that it would increase its ownership to 50 percent effective 1 January 2020."],
      ["p", "Helena Voss, an analyst following both companies, wants to know how the larger stake will affect Brannock's consolidated financial statements. Because Voss is uncertain how the company will account for the stake, she uses her existing forecasts to compare the alternative outcomes (Exhibits 1 and 2)."],
      ["table", {
        title: "Exhibit 1: Selected Financial Statement Estimates for Brannock plc (£ millions)",
        head: ["Year ending 31 December", "2019", "2020*"],
        rows: [
          ["Revenue", "2,400", "2,640"],
          ["Operating income", "216", "238"],
          ["Net income", "108", "120"],
          ["31 December", "2019", "2020*"],
          ["Total assets", "2,010", "2,190"],
          ["Shareholders' equity", "1,050", "1,150"]
        ],
        note: "* Estimates made before the announcement of the increased stake."
      }],
      ["table", {
        title: "Exhibit 2: Selected Financial Statement Estimates for Delmar SA (£ millions)",
        head: ["Year ending 31 December", "2019", "2020*"],
        rows: [
          ["Revenue", "1,800", "2,000"],
          ["Operating income", "162", "180"],
          ["Net income", "90", "100"],
          ["Dividends paid", "30", "34"],
          ["31 December", "2019", "2020*"],
          ["Total assets", "1,500", "1,640"],
          ["Shareholders' equity", "800", "860"]
        ],
        note: "* Estimates made before the announcement of the increased stake."
      }]
    ],
    questions: [
      {
        q: "At 31 December 2020, Brannock's total assets would most likely be:",
        options: ["unaffected by the accounting method used for the investment in Delmar.", "highest if Brannock is deemed to have control of Delmar.", "highest if Brannock is deemed to have significant influence over Delmar."],
        answer: 1,
        why: "Under control, Brannock consolidates 100% of Delmar's assets line by line, so total assets are highest. Under the equity method only a single investment line appears on the balance sheet."
      },
      {
        q: "Based on Voss's estimates, if Brannock is deemed to have significant influence over Delmar, its 2020 net income (in £ millions) would be closest to:",
        options: ["£120.", "£170.", "£220."],
        answer: 1,
        why: "Equity method: investor net income = own net income + ownership % × investee net income = 120 + 0.5(100) = £170 million. The £50 million is a single equity-income line. Trap: £220 million is consolidated net income before the non-controlling interest's share."
      },
      {
        q: "Based on Voss's estimates, if Brannock is deemed to have joint control of Delmar and uses the proportionate consolidation method, its 31 December 2020 total liabilities (in £ millions) will most likely be closest to:",
        options: ["£1,430.", "£1,040.", "£1,820."],
        answer: 0,
        why: "Proportionate consolidation: Brannock's own liabilities of 2,190 − 1,150 = 1,040, plus 50% of Delmar's liabilities of 1,640 − 860 = 780, i.e. 390. Total = 1,040 + 390 = £1,430 million. Trap: £1,820 million adds 100% of Delmar's liabilities (full consolidation)."
      },
      {
        q: "Based on Voss's estimates, if Brannock is deemed to have control over Delmar, its 2020 consolidated sales (in £ millions) will be closest to:",
        options: ["£2,640.", "£3,640.", "£4,640."],
        answer: 2,
        why: "Under control, Brannock reports its own sales plus 100% of Delmar's: 2,640 + 2,000 = £4,640 million. Trap: £3,640 million adds only 50%, which is proportionate consolidation."
      },
      {
        q: "Based on Voss's estimates, and holding the size of the stake constant, Brannock's 2020 net income attributable to its shareholders will most likely be:",
        options: ["highest if Brannock is deemed to have control of Delmar.", "highest if Brannock is deemed to have significant influence over Delmar.", "independent of the accounting method used for the investment in Delmar."],
        answer: 2,
        why: "Net income attributable to the parent is the same under all three methods; only presentation differs. Equity method: 120 + 50 = 170. Full consolidation: 120 + 100 = 220 consolidated, less 50 attributable to the non-controlling interest = 170 attributable to Brannock's shareholders."
      }
    ]
  },
  {
    id: "halvorsen",
    title: "Halvorsen Group",
    topic: "Intercorporate Investments",
    body: [
      ["p", "Tomas Ekwall is an analyst at an international securities firm. He is preparing a research report on Halvorsen Group, a publicly traded company that complies with IFRS. Ekwall reviews two recent transactions, in Cirrus Co. and Norden Co."],
      ["h", "Investment in Cirrus Co."],
      ["p", "On 1 January 2020, Halvorsen invested $9 million in Cirrus Co. debt securities (6.0% stated coupon on par value, payable each 31 December). The par value is $8 million, and the market interest rate in effect when the bonds were purchased was 5.0%. Halvorsen designates the investment as held-to-maturity. On 31 December 2020, the fair value of the securities was $9.8 million."],
      ["p", "Cirrus plans to raise $60 million by borrowing against its financial receivables. Cirrus will create a special purpose entity (SPE), invest $15 million in the SPE, have the SPE borrow $60 million, and then use the total funds to purchase $75 million of receivables from Cirrus. Cirrus meets the definition of control and plans to consolidate the SPE. Cirrus's current balance sheet is in Exhibit 1."],
      ["table", {
        title: "Exhibit 1: Cirrus Co. Balance Sheet at 31 December 2020 ($ millions)",
        head: ["Assets", "", "Liabilities and equity", ""],
        rows: [
          ["Cash", "30", "Current liabilities", "40"],
          ["Accounts receivable", "75", "Noncurrent liabilities", "45"],
          ["Other assets", "45", "Shareholders' equity", "65"],
          ["Total assets", "150", "Total liabilities and equity", "150"]
        ]
      }],
      ["h", "Investment in Norden Co."],
      ["p", "On 1 January 2020, Halvorsen acquired a 16% equity interest with voting power in Norden Co. for $300 million. Exhibit 2 gives selected financial information for Norden on the acquisition date. The plant and equipment are depreciated straight-line and have 10 years of remaining life. Halvorsen has representation on Norden's board of directors and participates in its policy-making process."],
      ["table", {
        title: "Exhibit 2: Selected Financial Data for Norden Co., 1 January 2020 ($ millions)",
        head: ["", "Book value", "Fair value"],
        rows: [
          ["Current assets", "300", "300"],
          ["Plant and equipment", "3,200", "3,500"],
          ["Total assets", "3,500", "3,800"],
          ["Liabilities", "2,000", "2,000"],
          ["Net assets", "1,500", "1,800"]
        ]
      }],
      ["p", "For fiscal year 2020, Norden reported revenue of $2,100 million and net income of $400 million, and paid dividends of $250 million."],
      ["p", "Ekwall is concerned about goodwill impairment because of industry changes expected at the end of 2021. He calculates the impairment loss from the projected consolidated data in Exhibit 3, assuming the cash-generating unit and the reporting unit are the same."],
      ["table", {
        title: "Exhibit 3: Selected Financial Data for Halvorsen Group, Estimated Year Ending 31 December 2021 ($ millions)",
        head: ["", ""],
        rows: [
          ["Carrying value of cash-generating unit/reporting unit", "12,600"],
          ["Recoverable amount of cash-generating unit/reporting unit", "12,250"],
          ["Fair value of reporting unit", "12,300"],
          ["Identifiable net assets", "11,900"],
          ["Goodwill", "430"]
        ]
      }],
      ["p", "Finally, Halvorsen announces that it will increase its ownership interest in Norden to 75% effective 1 January 2022 and will use the partial goodwill method. Ekwall estimates the fair value of Norden's shares at the expected exchange date at $2.4 billion, with identifiable net assets valued at $2.0 billion."]
    ],
    questions: [
      {
        q: "The carrying value of Halvorsen's investment in Cirrus's debt securities reported on the balance sheet at 31 December 2020 is:",
        options: ["$8.97 million.", "$9.00 million.", "$9.80 million."],
        answer: 0,
        why: "Held-to-maturity debt is carried at amortized cost using the effective interest method. Coupon = 6% × 8.0 = $0.48 million. Interest income = 5% × 9.0 = $0.45 million. Amortization = 0.48 − 0.45 = $0.03 million. Carrying value = 9.00 − 0.03 = $8.97 million. Trap: $9.80 million is fair value, which is not used for amortized cost."
      },
      {
        q: "Based on Exhibit 1 and Cirrus's plan to borrow against its receivables, the new consolidated balance sheet will show total assets of:",
        options: ["$75 million.", "$210 million.", "$225 million."],
        answer: 1,
        why: "SPE: receivables $75 million, debt $60 million, equity $15 million. Consolidated: Cirrus's cash rises by $60 million (75 received for the receivables, less the 15 invested in the SPE), so cash = 30 + 60 = 90. Receivables stay at 75 (now held by the SPE). Noncurrent liabilities rise by 60 to 105. Total assets = 90 + 75 + 45 = $210 million; liabilities and equity = 40 + 105 + 65 = 210. It looks the same as if Cirrus had borrowed directly against the receivables."
      },
      {
        q: "Based on Exhibit 2, Halvorsen's investment in Norden resulted in goodwill of:",
        options: ["$12 million.", "$48 million.", "$60 million."],
        answer: 0,
        why: "Purchase price 300, less 16% × 1,500 (book value) = 240, gives an excess of 60. Attributable to plant and equipment: 16% × (3,500 − 3,200) = 48. Goodwill (residual) = 60 − 48 = $12 million."
      },
      {
        q: "Halvorsen's influence on Norden's business activities can be best described as:",
        options: ["controlling.", "significant.", "shared control."],
        answer: 1,
        why: "Board representation and participation in policy-making indicate significant influence even though the stake is below the usual 20% threshold."
      },
      {
        q: "Using only the information from Exhibit 2, the carrying value of Halvorsen's investment in Norden at the end of 2020 is closest to:",
        options: ["$319 million.", "$324 million.", "$359 million."],
        answer: 0,
        why: "Equity method: 300 + 16% × 400 (= 64) − 16% × 250 dividends (= 40) − amortization of the plant and equipment excess (48 / 10 = 4.8) = $319.2 million. Trap: $324 million skips the amortization; $359 million skips the dividends, which reduce the carrying value because they are a return of investment, not income."
      },
      {
        q: "Based on Exhibit 3, Halvorsen's goodwill impairment loss under IFRS is:",
        options: ["$300 million.", "$350 million.", "$430 million."],
        answer: 1,
        why: "Under IFRS the loss is the carrying value of the cash-generating unit less its recoverable amount: 12,600 − 12,250 = $350 million (below goodwill of 430, so no cap applies). Trap: $300 million uses fair value (12,600 − 12,300), a US GAAP style comparison."
      },
      {
        q: "Based on Ekwall's estimates for 1 January 2022, the value of the non-controlling interest in Norden under the partial goodwill method will be:",
        options: ["$400 million.", "$500 million.", "$600 million."],
        answer: 1,
        why: "Under the partial goodwill method the non-controlling interest is measured at its proportionate share of identifiable net assets: 25% × $2.0 billion = $500 million. Trap: $600 million (25% × $2.4 billion) is the full goodwill method, which uses the fair value of the shares."
      }
    ]
  },
  {
    id: "crestpoint",
    title: "Crestpoint Capital",
    topic: "Forward Commitments",
    body: [
      ["p", "Sarah Whitfield is a portfolio manager at Crestpoint Capital, a hedge fund that frequently uses derivatives to hedge or speculate. She works with Marcus Lee, a junior analyst."],
      ["h", "Carry Arbitrage Model"],
      ["p", "Whitfield and Lee discuss a futures contract in which the underlying bond is expected to make an interest payment in three months."],
      ["p", "Statement 1: If the futures price is less than the price suggested by the carry arbitrage model, the futures contract should be purchased."],
      ["p", "Statement 2: Based on the cost of carry model, the futures price would be higher if the underlying bond's upcoming interest payment was expected in six months instead of three."],
      ["h", "Four-Year Treasury Note"],
      ["p", "Lee's first idea is to purchase a four-year Treasury note futures contract. The underlying 2.0%, semi-annual four-year Treasury note is quoted at a clean price of 99. It has been 45 days since the note's last coupon payment, and the coupon period is 180 days."],
      ["h", "10-Year Treasury Note"],
      ["p", "Lee's second idea involves a 10-year Treasury note futures contract. The underlying 2.5%, semi-annual 10-year Treasury note has a dirty price of 106.30. It has been 45 days since the last coupon payment. The futures contract expires in 60 days. The current annualized two-month risk-free rate is 1.20%. The conversion factor is 0.7400."],
      ["h", "UK Gilt Forward"],
      ["p", "Six months ago, Crestpoint took a long position in five 10-year UK Gilt forward contracts, each with a contract notional value of £2,000,000. The contracts had a price of GBP 148 (quoted as a % of par) when purchased. Now, the contracts have four months left to expiration and have a price of GBP 150. The annualized four-month interest rate is 0.18%."],
      ["h", "Interest Rate Swaps"],
      ["p", "Whitfield asks Lee to price a one-year plain vanilla swap using Exhibit 1."],
      ["table", {
        title: "Exhibit 1: Selected Spot Rate Data",
        head: ["Days to maturity", "Spot interest rate (%)"],
        rows: [["90", "1.50"], ["180", "1.65"], ["270", "1.80"], ["360", "1.95"]]
      }],
      ["p", "Two years ago, Crestpoint entered into a EUR 6 billion five-year interest rate swap, paying the fixed rate, at a fixed rate of 0.16%. Three years remain until maturity. The current term structure for EUR cash flows is presented in Exhibit 2."],
      ["table", {
        title: "Exhibit 2: Selected EUR Interest Rate Data",
        head: ["Maturity (years)", "Spot rate (%)", "PV factor"],
        rows: [["1", "0.05", "0.9995"], ["2", "0.09", "0.9982"], ["3", "0.12", "0.9964"], ["Sum", "", "2.9941"]]
      }]
    ],
    questions: [
      {
        q: "Which of Whitfield's statements is correct?",
        options: ["Only Statement 1", "Only Statement 2", "Both Statement 1 and Statement 2"],
        answer: 2,
        why: "Statement 1 is correct: a futures price below the carry-arbitrage price is underpriced, so buy the futures (reverse carry arbitrage). Statement 2 is correct: a later interest payment means the future value of the coupon benefit is smaller, so the futures price is higher."
      },
      {
        q: "The full spot price of the four-year Treasury note is closest to:",
        options: ["99.00", "99.25", "99.75"],
        answer: 1,
        why: "Full price = clean price + accrued interest. AI = (45/180) × (2.0/2) = 0.25, so full price = 99 + 0.25 = 99.25. Trap: 99.00 is the clean price."
      },
      {
        q: "The equilibrium quoted futures price of the 10-year Treasury note is closest to:",
        options: ["142.95", "143.93", "144.39"],
        answer: 0,
        why: "The dirty price already includes accrued interest, so compound it: 106.30 × (1.012)^(60/360) = 106.5116. Accrued interest at expiration = (105/180) × 1.25 = 0.7292 (45 + 60 = 105 days). Futures price = (106.5116 − 0.7292) / 0.74 = 142.95. No coupon is paid during the 60 days."
      },
      {
        q: "The value of the long Gilt forward position is closest to:",
        options: ["GBP 199,640", "GBP 199,880", "GBP 200,000"],
        answer: 1,
        why: "Value per 100 of par = (150 − 148) / (1.0018)^(4/12) = 1.9988. Total notional = 5 × 2,000,000 = 10,000,000, so value = 1.9988% × 10,000,000 = GBP 199,880. Trap: GBP 200,000 ignores discounting."
      },
      {
        q: "Based on Exhibit 1, the fixed rate of the one-year plain vanilla swap is closest to:",
        options: ["0.38%", "1.93%", "2.57%"],
        answer: 1,
        why: "PV factors: 0.9963, 0.9918, 0.9867, 0.9809 (sum 3.9556). Fixed rate = (1 − 0.9809) / (0.25 × 3.9556) = 1.93%."
      },
      {
        q: "Based on Exhibit 2, the value of the pay-fixed interest rate swap is closest to:",
        options: ["–EUR 13,171,200", "–EUR 7,140,900", "–EUR 2,385,000"],
        answer: 1,
        why: "Current fixed rate for the remaining three years = (1 − 0.9964) / 2.9941 = 0.1202%. The pay-fixed side is paying 0.16%, above the current 0.12%, so the value is negative: (0.1202% − 0.16%) × 2.9941 × 6,000,000,000, about −EUR 7.14 million (about −7,143,000 with the rounded factors in Exhibit 2; option B is the closest)."
      }
    ]
  },
  {
    id: "meridian",
    title: "Meridian Capital Partners",
    topic: "Forward Commitments",
    body: [
      ["p", "Priya Nandan is a derivatives trader at Meridian Capital Partners."],
      ["h", "Fixed-Income Futures"],
      ["p", "Nandan identifies a possible mispricing in a bond futures contract. The current annual compounding risk-free rate is 0.40%."],
      ["table", {
        title: "Exhibit 1: Bond Futures Contract and Underlying Bond",
        head: ["Futures contract", "", "Underlying bond", ""],
        rows: [
          ["Quoted futures price", "118.00", "Quoted bond price", "106.00"],
          ["Conversion factor", "0.85", "Accrued interest since last coupon", "0.10"],
          ["Time to expiration", "Four months", "Accrued interest at expiration", "0.35"],
          ["", "", "Accrued interest over life of contract", "0.00"]
        ]
      }],
      ["h", "Equity Index Futures"],
      ["p", "Nandan holds a position in an S&P/ASX 200 futures contract with remaining maturity of six months. The continuously compounded dividend yield on the index is 1.8%, the current index level is 7,200, and the continuously compounded annual interest rate is 0.45%."],
      ["h", "Equity Forward: Oakridge Materials (OKM)"],
      ["p", "The price per share of OKM's common shares is $180. The forward price per share for a six-month OKM equity forward contract is $180.539. Assume annual compounding and a risk-free rate of 0.60%."],
      ["p", "Nandan takes a long position in the OKM equity forward contract. Her colleague asks, \"Under which scenario would our position experience a loss?\""],
      ["p", "Three months after contract initiation, Nandan gathers updated data: the price per share of OKM is now $172; the risk-free rate is 0.65% (annual compounding); OKM announced a dividend of $1.20 per share, payable exactly two months before contract expiration; and the market price of the forward contract equals the no-arbitrage forward price."]
    ],
    questions: [
      {
        q: "Based on Exhibit 1, the arbitrage profit available on the bond futures contract is closest to:",
        options: ["5.58", "5.93", "12.09"],
        answer: 0,
        why: "Model futures price: FV of the full bond price = 106.10 × (1.004)^(4/12) = 106.2413. Adjusted futures = 0.85 × 118.00 + 0.35 = 100.65. Difference = 5.5913, discounted: 5.5913 / (1.004)^(4/12) = 5.58. The futures is underpriced, so buy futures and short the bond (reverse carry)."
      },
      {
        q: "The current no-arbitrage futures price of the equity index futures contract is closest to:",
        options: ["7,151.57", "7,216.22", "7,281.46"],
        answer: 0,
        why: "F0 = 7,200 × exp[(0.0045 − 0.018) × 0.5] = 7,200 × exp(−0.00675) = 7,151.57. Trap: 7,216.22 ignores dividends; 7,281.46 adds the dividend yield instead of subtracting it."
      },
      {
        q: "Based on the OKM forward data, an arbitrage opportunity relating to OKM shares is:",
        options: ["not available", "available based on carry arbitrage", "available based on reverse carry arbitrage"],
        answer: 0,
        why: "Model price = 180 × (1.006)^0.5 = 180.539, equal to the market forward price, so there is no arbitrage opportunity."
      },
      {
        q: "The most appropriate response to Nandan's colleague's question is:",
        options: ["a decrease in OKM's share price, all else equal", "an increase in the risk-free rate, all else equal", "a decrease in the market price of the forward contract, all else equal"],
        answer: 0,
        why: "Nandan is long. The forward price is positively related to the spot price, so a lower share price lowers the forward price and causes a loss to the long. A higher risk-free rate raises the forward price and helps the long. Option C only restates the loss rather than naming a scenario that causes it."
      },
      {
        q: "The per-share value of Nandan's long position in the OKM forward contract three months after contract initiation is closest to:",
        options: ["–$8.25", "–$9.45", "+$9.45"],
        answer: 1,
        why: "PV of the dividend (one month from now) = 1.20 / (1.0065)^(1/12) = 1.1994. Ft = (172 − 1.1994) × (1.0065)^0.25 = 171.0776. Vt = (171.0776 − 180.539) / (1.0065)^0.25 = −$9.45."
      }
    ]
  }
];

// Link each question back to its vignette and topic (used by the 오답 노트), and number them 1–23 as in the PDF.
let qNum = 0;
VIGNETTES.forEach(v => v.questions.forEach(q => { q.vignette = v; q.topic = v.topic; q.num = ++qNum; }));

if (typeof module !== "undefined") module.exports = VIGNETTES;
