// Exam-style vignette sets from the CFA L2 practice set.
// Each vignette: id, title, topic (one of the 10 CFA L2 topics), reading, body (blocks), questions.
// Body blocks: ["h", text] subheading, ["p", text] paragraph,
//              ["table", { title, head, rows, note }] exhibit.
// Question: q, options (A/B/C, shown in this order), answer (index), why.
const VIGNETTES = [
  {
    id: "brannock",
    title: "Brannock plc",
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
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
    topic: "Financial Statement Analysis",
    reading: "Intercorporate Investments",
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
    topic: "Derivatives",
    reading: "Forward Commitments",
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
    topic: "Derivatives",
    reading: "Forward Commitments",
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
  },
  {
    id: "pwpf",
    title: "Puyallup-Wenatchee Pension Fund",
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    body: [
      ["p", "Snohomish Mukilteo is a portfolio analyst for the Puyallup-Wenatchee Pension Fund (PWPF). PWPF's investment committee (IC) asks Mukilteo to research adding hedge funds to the PWPF portfolio."],
      ["p", "A member of the IC meets with Mukilteo to discuss hedge fund strategies. During the meeting, the IC member admits that her knowledge of hedge fund strategies is fairly limited but tells Mukilteo she believes the following:"],
      ["p", "Statement 1: Equity market-neutral strategies use a relative value approach."],
      ["p", "Statement 2: Event-driven strategies are not exposed to equity market beta risk."],
      ["p", "Statement 3: Opportunistic strategies have risk exposure to market directionality."],
      ["p", "The IC member also informs Mukilteo that for equity-related strategies, the IC considers low volatility to be more important than negative correlation."],
      ["p", "Mukilteo researches various hedge fund strategies. First, Mukilteo analyzes an event-driven strategy involving two companies, Algona Applications (AA) and Tukwila Technologies (TT). AA's management, believing that its own shares are overvalued, uses its shares to acquire TT. The IC has expressed concern about this type of strategy because of the potential for loss if the acquisition unexpectedly fails. Mukilteo's research reveals a way to use derivatives to protect against this loss, and he believes that such protection will satisfy the IC's concern."],
      ["p", "Next, while researching relative value strategies, Mukilteo considers a government bond strategy that involves buying lower-liquidity, off-the-run bonds and selling higher-liquidity, duration-matched, on-the-run bonds."],
      ["p", "Mukilteo examines an opportunistic strategy implemented by one of the hedge funds under consideration. The hedge fund manager selects 12 AAA rated corporate bonds with actively traded futures contracts and approximately equal durations. For each corporate bond, the manager calculates the 30-day change in the yield spread over a constant risk-free rate. He then ranks the bonds according to this spread change. For the bonds that show the greatest spread narrowing (widening), the hedge fund will take long (short) positions in their futures contracts. The net holding for this strategy is market neutral."],
      ["p", "Mukilteo also plans to recommend a specialist hedge fund strategy that would allow PWPF to maintain a high Sharpe ratio even during a financial crisis when equity markets fall."],
      ["p", "The IC has been considering the benefits of allocating to a fund of funds (FoF) or to a multi-strategy fund (MSF). Mukilteo receives the following email from a member of the IC:"],
      ["p", "\"From my perspective, an FoF is superior even though it entails higher manager-specific operational risk and will require us to pay a double layer of fees without being able to net performance fees on individual managers. I especially like the tactical allocation advantage of FoFs—that they are more likely to be well informed about when to tactically reallocate to a particular strategy and more capable of shifting capital between strategies quickly.\""],
      ["p", "Finally, Mukilteo creates a model to simulate adding selected individual hedge fund strategies to the current portfolio with a 20% allocation. The IC's primary considerations for a combined portfolio are (1) that the variance of the combined portfolio must be less than 90% of that of the current portfolio and (2) that the combined portfolio maximize the risk-adjusted return with the expectation of large negative events. Exhibit 1 provides historical performance and risk metrics for three simulated portfolios."],
      ["table", {
        title: "Exhibit 1: Performance of Various Combined Portfolios",
        head: ["Hedge fund strategy", "Standard deviation (%)", "Sharpe ratio", "Sortino ratio", "Maximum drawdown (%)"],
        rows: [
          ["Current portfolio"],
          ["NA", "7.95", "0.58", "1.24", "14.18"],
          ["Three potential portfolios with a 20% hedge fund allocation"],
          ["Merger arbitrage", "7.22", "0.73", "1.35", "5.60"],
          ["Systematic futures", "6.94", "0.83", "1.68", "8.04"],
          ["Equity market neutral", "7.17", "0.73", "1.80", "10.72"]
        ]
      }]
    ],
    questions: [
      {
        q: "Which of the IC member's statements regarding hedge fund strategies is incorrect?",
        options: ["Statement 1", "Statement 2", "Statement 3"],
        answer: 1,
        why: "Statement 2 is incorrect: event-driven strategies such as merger arbitrage have some natural equity market beta. Market stress can disrupt a deal, and deals are more likely to fail in stress periods, so merger arbitrage has market sensitivity and left-tail risk (and high fees make it an expensive form of embedded beta). A is wrong: equity market neutral does use a relative value approach (balanced longs and shorts, near-zero net market exposure, betting on mean reversion of mispriced pairs). C is wrong: opportunistic/global macro strategies depend on spotting global trends, so they are exposed to market directionality (\"trendiness\")."
      },
      {
        q: "Based on what the IC considers important for equity-related strategies, which strategy should Mukilteo most likely avoid?",
        options: ["Long/short equity", "Equity market neutral", "Dedicated short selling and short biased"],
        answer: 2,
        why: "The IC ranks low volatility above negative correlation. Dedicated short / short-biased strategies offer negative correlation but lower return goals and higher volatility (short beta exposure), so avoid them. A is wrong: long/short equity targets about 50% lower standard deviation than long-only with similar returns. B is wrong: equity market neutral is well diversified with steadier, lower-volatility returns (beta ≈ 0), except when heavy leverage forces downsizing."
      },
      {
        q: "Which of the following set of derivative positions will most likely satisfy the IC's concern about the event-driven strategy involving AA and TT?",
        options: ["Long out-of-the-money puts on AA shares and long out-of-the-money calls on TT shares", "Long out-of-the-money calls on AA shares and long out-of-the-money puts on TT shares", "Long risk-free bonds, short out-of-the-money puts on AA shares, and long out-of-the-money calls on TT shares"],
        answer: 1,
        why: "This is stock-for-stock merger arbitrage: long TT (target), short AA (acquirer) in the offer ratio. If the deal fails, TT falls back and AA rises back. OTM calls on AA cover the short; OTM puts on TT protect the long. A has the options reversed. C is the payoff PROFILE of merger arbitrage (riskless bond + short put on acquirer + long call on target, which pays if a white knight bids higher), not protection."
      },
      {
        q: "The government bond strategy that Mukilteo considers is best described as a:",
        options: ["carry trade.", "yield curve trade.", "long/short credit trade."],
        answer: 0,
        why: "Long lower-liquidity off-the-run, short higher-liquidity duration-matched on-the-run is the classic fixed-income carry trade: long the higher yielder, short the lower yielder. Duration and credit are matched, so the key risk is liquidity. B is wrong: yield curve (calendar spread) trades take positions at different curve points to profit from flattening/steepening; interest rate risk is the main risk. C is wrong: long/short credit trades exploit credit quality differences across issuers and are more volatile."
      },
      {
        q: "The opportunistic strategy that Mukilteo considers is most likely to be described as a:",
        options: ["global macro strategy.", "time-series momentum strategy.", "cross-sectional momentum strategy."],
        answer: 2,
        why: "It is a managed futures, cross-sectional momentum strategy: within one asset class (AAA corporate bonds), go long the relative winners (spreads narrowing) and short the relative losers (spreads widening), ending net zero / market neutral. A is wrong: global macro is top-down and trades global trends. B is wrong: time-series momentum sets each position from the asset's own trend, independent of the others, and can be net long or short."
      },
      {
        q: "The specialist hedge fund strategy that Mukilteo plans to recommend is most likely:",
        options: ["cross-asset volatility trading between the US and Japanese markets.", "selling equity volatility and collecting the volatility risk premium.", "buying longer-dated out-of-the-money options on VIX index futures."],
        answer: 2,
        why: "Long equity volatility is a crisis hedge: volatility is about 80% negatively correlated with equity returns, so it lowers portfolio standard deviation and supports the Sharpe ratio (at the cost of premium). Longer-dated options have more vega; OTM options trade at higher implied volatility. A is wrong: cross-asset volatility trading can carry idiosyncratic macro risks that hurt in a crisis. B is wrong: the volatility seller provides crash insurance and loses in a crisis."
      },
      {
        q: "Based on the email that Mukilteo received, the IC member's perspective is correct with regard to:",
        options: ["layering and netting of fees.", "tactical allocation capabilities.", "manager-specific operational risks."],
        answer: 0,
        why: "FoFs do have a double layer of fees and investors can't net performance fees: they pay incentive fees to winning managers even if the FoF is flat or down (netting risk). In an MSF the GP absorbs netting risk (except under a pass-through fee model, where investors implicitly pay part). B is wrong: MSFs have the tactical advantage (faster reallocation, better transparency). C is wrong: MSFs have HIGHER manager-specific operational risk because all teams share systems under one roof."
      },
      {
        q: "Based on the IC's primary considerations for a combined portfolio, which simulated hedge fund strategy portfolio in Exhibit 1 creates the most suitable combined portfolio?",
        options: ["Merger arbitrage", "Systematic futures", "Equity market neutral"],
        answer: 2,
        why: "Max variance = 0.90 × 7.95² = 0.90 × 63.20 = 56.88, so max SD = √56.88 = 7.54%. All three portfolios (7.22, 6.94, 7.17) pass. With large negative events expected, use the Sortino ratio (downside deviation only), not Sharpe. Highest Sortino: equity market neutral, 1.80. A is wrong: lowest max drawdown (5.60) but Sortino only 1.35. B is wrong: highest Sharpe (0.83), but Sortino 1.68 < 1.80."
      }
    ]
  },
  {
    id: "ctrf",
    title: "Cascadia Teachers' Retirement Fund (practice variant)",
    topic: "Alternative Investments",
    reading: "Hedge Fund Strategies",
    body: [
      ["p", "Talia Moreno is an investment analyst for the Cascadia Teachers' Retirement Fund (CTRF). CTRF's investment committee (IC) has asked Moreno to evaluate a hedge fund allocation."],
      ["p", "At an initial meeting, an IC member shares the following beliefs:"],
      ["p", "Statement 1: Event-driven merger arbitrage strategies have left-tail risk because deals are more likely to fail during periods of market stress."],
      ["p", "Statement 2: Global macro strategies are typically bottom-up and depend little on trends in markets."],
      ["p", "Statement 3: Equity market-neutral managers construct portfolios with an expected beta of approximately zero."],
      ["p", "The IC member adds that, because CTRF's existing portfolio is heavily weighted toward equities, for equity-related strategies the IC considers negative correlation with the existing portfolio to be more important than low volatility."],
      ["p", "Moreno first reviews an event-driven opportunity. Brixton Robotics (BR) has announced it will acquire Halden Sensors (HS) in exchange for BR shares. A hedge fund under consideration has bought HS shares and sold BR shares in the ratio of the offer. The IC is worried about losses if the deal collapses and asks Moreno to identify an option-based hedge."],
      ["p", "Next, Moreno reviews a fixed-income relative value fund that buys 2-year government notes and sells duration-weighted 10-year government notes of the same issuer, expecting the yield curve to steepen."],
      ["p", "Moreno then examines a managed futures fund. The manager follows 15 liquid commodity futures. Each month, for each contract separately, the manager goes long if the contract's own trailing 12-month return is positive and short if it is negative. Because each position is set independently, the fund's net exposure can be long or short."],
      ["p", "The IC also wants a specialist strategy that is expected to produce steady returns in normal market environments by collecting a premium for providing insurance against market crises. The IC accepts that this strategy may suffer losses in a crisis."],
      ["p", "Moreno receives an email from an IC member: \"I prefer a multi-strategy fund (MSF) to a fund of funds (FoF). An MSF can shift capital between strategies more quickly and efficiently, its operational risk is better diversified than an FoF's, and under a pass-through fee model we would bear none of the netting risk.\""],
      ["p", "Finally, Moreno simulates adding a 20% allocation to individual hedge fund strategies. The IC requires (1) that the variance of the combined portfolio be less than 85% of the current portfolio's variance and (2) that the combined portfolio maximize risk-adjusted return, given that large negative events are expected. Exhibit 1 shows the results."],
      ["table", {
        title: "Exhibit 1: Simulated Combined Portfolios",
        head: ["Hedge fund strategy", "Standard deviation (%)", "Sharpe ratio", "Sortino ratio", "Maximum drawdown (%)"],
        rows: [
          ["Current portfolio"],
          ["NA", "9.20", "0.52", "1.10", "16.40"],
          ["Three potential portfolios with a 20% hedge fund allocation"],
          ["Merger arbitrage", "8.30", "0.66", "1.52", "7.10"],
          ["Systematic futures", "8.05", "0.74", "1.61", "9.30"],
          ["Equity market neutral", "8.60", "0.70", "1.75", "11.20"]
        ]
      }]
    ],
    questions: [
      {
        q: "Which of the IC member's statements is incorrect?",
        options: ["Statement 1", "Statement 2", "Statement 3"],
        answer: 1,
        why: "Statement 2 is incorrect: global macro is TOP-DOWN, and its key return source is discerning and capitalizing on trends in global markets, so it is exposed to market directionality. Statement 1 is correct: merger deals fail more often in stress, giving market sensitivity and left-tail risk. Statement 3 is correct: equity market-neutral managers target a portfolio beta of about zero."
      },
      {
        q: "Given the IC's priority for equity-related strategies, which strategy is most appropriate?",
        options: ["Dedicated short selling and short biased", "Long/short equity", "Equity market neutral"],
        answer: 0,
        why: "Here the IC ranks NEGATIVE CORRELATION above low volatility (the reverse of the PWPF case). Dedicated short / short-biased strategies provide the negative correlation benefit, even though they are more volatile and have lower return goals. Long/short equity keeps positive net beta, and equity market neutral is roughly uncorrelated (beta ≈ 0), not negatively correlated."
      },
      {
        q: "Which option positions would best hedge the merger arbitrage position against the deal collapsing?",
        options: ["Long OTM puts on HS and long OTM calls on BR", "Long OTM calls on HS and long OTM puts on BR", "Long risk-free bonds, short OTM puts on BR, and long OTM calls on HS"],
        answer: 0,
        why: "The fund is long HS (target) and short BR (acquirer). If the deal fails, HS drops and BR rises. Puts on HS protect the long; calls on BR cover the short. B reverses the options. C is the payoff profile of merger arbitrage, not a hedge."
      },
      {
        q: "The fixed-income relative value strategy Moreno reviews is best described as a:",
        options: ["long/short credit trade.", "carry trade.", "yield curve trade."],
        answer: 2,
        why: "Long and short positions at different maturities of the same issuer, betting on steepening, is a yield curve (calendar spread) trade. Because the issuer is the same, credit and liquidity risk are largely hedged and interest rate risk is the main concern. A carry trade would be off-the-run vs. on-the-run at the same duration; a long/short credit trade exploits credit quality differences across issuers."
      },
      {
        q: "The managed futures strategy Moreno examines is best described as:",
        options: ["time-series momentum.", "cross-sectional momentum.", "global macro."],
        answer: 0,
        why: "Each position depends only on that contract's own trend, set independently of the others, and the fund can be net long or net short: time-series momentum. Cross-sectional momentum would rank the contracts against each other and end up near market neutral."
      },
      {
        q: "The specialist strategy that fits the IC's description is most likely:",
        options: ["selling equity volatility to collect the volatility risk premium.", "buying longer-dated OTM options on VIX futures.", "cross-asset volatility trading between two markets."],
        answer: 0,
        why: "The volatility SELLER provides insurance against crises and earns the volatility risk premium, with steadier returns in normal markets but losses in a crisis, which matches what the IC accepts. Buying VIX options is the opposite (crisis protection, paying premium). Cross-asset volatility trading carries idiosyncratic macro risk."
      },
      {
        q: "The IC member's email is correct with regard to:",
        options: ["operational risk.", "netting risk under a pass-through fee model.", "tactical allocation."],
        answer: 2,
        why: "MSFs can reallocate capital between strategies faster and more efficiently, so the tactical point is right. Operational risk is HIGHER (less diversified) in an MSF because all teams share one set of systems. Under a pass-through fee model the investor DOES implicitly pay part of the netting risk."
      },
      {
        q: "The maximum standard deviation the IC allows for the combined portfolio is closest to:",
        options: ["7.82%", "8.74%", "8.48%"],
        answer: 2,
        why: "The limit is on VARIANCE: max variance = 0.85 × 9.20² = 0.85 × 84.64 = 71.94, so max SD = √71.94 = 8.48% (equivalently √0.85 × 9.20). Trap: 7.82% applies 85% to the standard deviation directly (0.85 × 9.20)."
      },
      {
        q: "Based on the IC's two requirements, which simulated portfolio in Exhibit 1 is most suitable?",
        options: ["Merger arbitrage", "Systematic futures", "Equity market neutral"],
        answer: 1,
        why: "Max SD = 8.48%. Equity market neutral (8.60%) FAILS the variance test despite the highest Sortino ratio (1.75). Of the two that pass, use the Sortino ratio because large negative events are expected: systematic futures 1.61 > merger arbitrage 1.52. Merger arbitrage's lower max drawdown (7.10) is not the measure the IC asked for."
      }
    ]
  },
  {
    id: "kensington",
    title: "Kensington plc",
    topic: "Financial Statement Analysis",
    reading: "Pensions (Post-Employment Benefits)",
    body: [
      ["p", "Kensington plc, a fictional company based in the United Kingdom, sponsors a DB pension plan for qualifying employees. Kensington prepares its financial statements under IFRS. The discount rate that the company used in estimating the present value of its pension obligation was 5.48%. Disclosures on Kensington's pension plan in the company's notes to financial statements for the year ended 31 December 20X1 included the following."],
      ["table", {
        title: "Pension plan disclosures (£ millions)",
        head: ["", "20X1"],
        rows: [
          ["Components of periodic benefit cost"],
          ["Service cost", "£228"],
          ["Net interest (income) expense", "273"],
          ["Remeasurements", "−18"],
          ["Periodic pension cost", "£483"],
          ["Change in benefit obligation"],
          ["Benefit obligations at beginning of year", "£28,416"],
          ["Service cost", "228"],
          ["Interest cost", "1,557"],
          ["Benefits paid", "−1,322"],
          ["Actuarial gain or loss", "0"],
          ["Benefit obligations at end of year", "£28,879"],
          ["Change in plan assets"],
          ["Fair value of plan assets at beginning of year", "£23,432"],
          ["Actual return on plan assets", "1,302"],
          ["Employer contributions", "693"],
          ["Benefits paid", "−1,322"],
          ["Fair value of plan assets at end of year", "£24,105"],
          ["Funded status"],
          ["Funded status at beginning of year", "−£4,984"],
          ["Funded status at end of year", "−£4,774"]
        ]
      }]
    ],
    questions: [
      {
        q: "At 31 December 20X1, GBP 28,879 million represents:",
        options: ["the funded status of the plan.", "the DB obligation.", "the fair value of the plan's assets."],
        answer: 1,
        why: "GBP 28,879 million is the present value of future benefits as at 31 December 20X1. This is the \"gross\" liability, before netting the fair value of plan assets to calculate the funded status (24,105 − 28,879 = −4,774)."
      },
      {
        q: "The GBP 1,284 million difference in interest expense reported on the income statement and the interest cost on the benefit obligation in 20X1 is a result of:",
        options: ["interest income on plan assets.", "the actual return on plan assets.", "different assumed discount rates."],
        answer: 0,
        why: "The interest expense on the income statement is a \"net\" amount: discount rate × beginning funded status, i.e. (discount rate × benefit obligation) − (discount rate × fair value of plan assets). 1,557 − 273 = 1,284 = 5.48% × 23,432, the interest income on plan assets at the discount rate. Trap: the actual return (1,302) is not used; the gap between actual return and interest income goes to remeasurements (OCI)."
      },
      {
        q: "The amount recognized by Kensington as an operating expense on the income statement for the year ended 31 December 20X1 is closest to:",
        options: ["210.", "228.", "483."],
        answer: 1,
        why: "Service cost (228) is an operating expense, representing the increase in the benefit obligation from current and past service. Net interest expense/income is financing expense/income recognized below the operating income line. Remeasurements are recognized in OCI, not in earnings. Trap: 483 is the total periodic pension cost."
      },
      {
        q: "The cash outflow recognized by Kensington in cash flows from operating activities for the year ended 31 December 20X1 is closest to:",
        options: ["228.", "693.", "1,322."],
        answer: 1,
        why: "The employer's plan contributions (693) are the cash outflows in operating activities. Trap: benefits paid (1,322) are paid by the plan out of plan assets, not by the company."
      },
      {
        q: "The amount recognized on the balance sheet decreased from 31 December 20X0 to 31 December 20X1 because:",
        options: ["the sum of service cost and interest cost exceeded benefits paid.", "the discount rate used in estimating the pension obligation exceeded the actual rate of return of plan assets for the year.", "the sum of the actual return on plan assets and employer contributions exceeded the sum of service and interest cost on the benefit obligation."],
        answer: 2,
        why: "The net pension liability fell (4,984 → 4,774) because plan assets rose by more than the obligation: actual return + contributions (1,302 + 693 = 1,995) > service + interest cost (228 + 1,557 = 1,785). A is wrong: benefits paid reduce both the obligation and the plan assets, so they don't change the funded status. B is wrong: the actual return was 1,302 / 23,432 = 5.56%, 8 basis points ABOVE the 5.48% discount rate, not below."
      },
      {
        q: "An analyst preparing a discounted cash flow model on 14 January 20X2 to value Kensington's equity should deduct which of the following from the estimate of enterprise value to arrive at equity value?",
        options: ["4,774", "4,984", "28,879"],
        answer: 0,
        why: "Deduct the net pension liability as of 31 December 20X1 (4,774) from enterprise value, as if it were debt. B is wrong: 4,984 is the net pension liability at the beginning of 20X1. C is wrong: 28,879 is the gross benefit obligation; deducting it would ignore plan assets that exist only to pay the plan's beneficiaries."
      },
      {
        q: "A 100 basis point decrease in investment grade corporate bond yields may affect Kensington's plan funded status by less than the increase in the benefit obligation because:",
        options: ["remeasurements from changes in assumptions are recognized in OCI, not in earnings.", "a decrease in service cost will partially offset the increase.", "the fair value of plan assets may simultaneously increase."],
        answer: 2,
        why: "Lower yields mean a lower discount rate, which raises the benefit obligation, but the fair value of plan assets may rise at the same time and offset it, especially plan assets invested in longer-duration fixed-income securities. A is wrong: where remeasurements are recognized doesn't change the funded status. B is wrong: a lower discount rate increases, not decreases, service cost."
      }
    ]
  },
  {
    id: "xyz",
    title: "XYZ SA",
    topic: "Financial Statement Analysis",
    reading: "Pensions and Share-Based Compensation",
    body: [
      ["p", "XYZ SA is a fictional company that uses a DB pension plan and stock option grants as part of its compensation to qualified employees. XYZ SA prepares its financial statements under IFRS."],
      ["p", "Information on XYZ's DB plan and volatility assumptions used to value stock option grants were as follows:"],
      ["table", {
        title: "XYZ SA Defined Benefit Plan Information, Fiscal Year 2024",
        head: ["", "FY2024"],
        rows: [
          ["Employer contributions", "1,000"],
          ["Current service costs", "200"],
          ["Past service costs", "120"],
          ["Discount rate used to estimate plan liabilities at beginning of year", "7.00%"],
          ["Benefit obligation at beginning of year", "42,000"],
          ["Benefit obligation at end of year", "41,720"],
          ["Actuarial loss due to increase in plan obligation", "460"],
          ["Plan assets at beginning of year", "39,000"],
          ["Plan assets at end of year", "38,700"],
          ["Actual return on plan assets", "2,700"],
          ["Expected rate of return on plan assets", "8.00%"]
        ]
      }],
      ["table", {
        title: "Volatility Assumptions Used to Value Stock Option Grants",
        head: ["Grant year", "Weighted average expected volatility"],
        rows: [
          ["2024 valuation assumptions"],
          ["2020–2024", "21.50%"],
          ["2023 valuation assumptions"],
          ["2019–2023", "23.00%"]
        ]
      }]
    ],
    questions: [
      {
        q: "The amount recognized by XYZ as operating expense on the income statement related to its DB plan for fiscal year 2024 is closest to:",
        options: ["200.", "320.", "1,000."],
        answer: 1,
        why: "Service cost, made up of current service cost (200) and past service cost (120), is recognized on the income statement as an operating expense: 200 + 120 = 320. Trap: 200 leaves out past service cost; 1,000 is employer contributions, a cash flow, not an expense."
      },
      {
        q: "If XYZ prepared its financial statements under US GAAP, the total amount recognized by XYZ on the income statement related to its DB plan for fiscal year 2024 (assuming the company chooses not to immediately recognize the actuarial loss and assuming there is no amortization of past service costs or actuarial gains and losses) would be closest to:",
        options: ["20.", "59.", "530."],
        answer: 0,
        why: "Under US GAAP (no immediate recognition of the actuarial loss, no amortization), P&L pension cost = current service cost 200 + interest cost 7.0% × 42,000 = 2,940 − expected return on plan assets 8.0% × 39,000 = 3,120 → 200 + 2,940 − 3,120 = 20. Past service cost goes to OCI under US GAAP and is amortized later, so it is not in this year's P&L."
      },
      {
        q: "An analyst is building a financial statement model for XYZ SA. The analyst assumes that service cost and the discount rate in FY2025 will be the same as in the previous year. The analyst's estimate of pension cost recognized on the income statement in FY2025 is closest to:",
        options: ["320.", "404.", "531."],
        answer: 2,
        why: "IFRS P&L pension cost = service cost + net interest. Service cost stays at 200 + 120 = 320. Net interest = discount rate × net pension liability at the beginning of FY2025 (= end of FY2024): (41,720 − 38,700) × 7% = 3,020 × 7% = 211. Total ≈ 320 + 211 = 531. Trap: 320 leaves out net interest."
      },
      {
        q: "If XYZ had used the same volatility assumption for its FY2024 option grants that it had used in FY2023, its FY2024 net income would have been:",
        options: ["lower.", "higher.", "the same."],
        answer: 0,
        why: "In FY2024 XYZ used a lower volatility (21.50% vs 23.00%). Lower volatility reduces an option's fair value and therefore the expense recognized as the award vests. Using the higher FY2023 volatility would have meant a higher option value, higher compensation expense and lower net income."
      },
      {
        q: "If XYZ SA also granted RSUs to employees in fiscal 2024, the decrease in XYZ SA's share price volatility assumption would:",
        options: ["increase the grant-date fair value of the RSUs.", "decrease the grant-date fair value of the RSUs.", "not affect the grant-date fair value of the RSUs."],
        answer: 2,
        why: "The grant-date fair value of an RSU is the share price, which may be adjusted for expected dividends. Unlike an option, an RSU has no exercise price, so the volatility assumption is not relevant to its valuation."
      }
    ]
  },
  {
    id: "charmed",
    title: "Charmed Energy",
    topic: "Equity Valuation",
    reading: "Discounted Dividend Valuation",
    body: [
      ["p", "Brian Dobson, an analyst at a UK-based globally diversified equity mutual fund, has been assigned the task of estimating a fair value of the common stock of Charmed Energy. Dobson is aware of several approaches that could be used for this purpose. After carefully considering the characteristics of the company and its competitors, he believes Charmed will have extraordinary growth for the next few years and normal growth thereafter. So, he has concluded that a two-stage DDM is the most appropriate for valuing the stock."],
      ["p", "Charmed pays semi-annual dividends. The total dividends during 2016, 2017, and 2018 have been C$0.114, C$0.15, and C$0.175, respectively. These imply a growth rate of 32% in 2017 and 17% in 2018. Dobson believes that the growth rate will be 14% in the next year. He has estimated that the first stage will include the next eight years."],
      ["p", "Dobson is using the CAPM to estimate the required return on equity for Charmed. He has estimated that the company's beta, as measured against the S&P/TSX Composite Index (formerly TSE 300 Composite Index), is 0.84. The Canadian risk-free rate, as measured by the annual yield on the 10-year government bond, is 4.1%. The equity risk premium for the Canadian market is estimated at 5.5%. Based on these data, Dobson has estimated that the required return on Charmed Energy's stock is 0.041 + 0.84(0.055) = 0.0872, or 8.72%. Dobson is doing the analysis in January 2019, and the stock price at that time is C$17."],
      ["p", "Dobson realizes that even within the two-stage DDM, there could be some variations in the approach. He would like to explore how these variations affect the stock's valuation. Specifically, he wants to estimate the value of the stock for each of the following approaches separately."],
      ["h", "Approach 1"],
      ["p", "The dividend growth rate will be 14% throughout the first stage of eight years. The dividend growth rate thereafter will be 7%."],
      ["h", "Approach 2"],
      ["p", "Instead of using the estimated stable growth rate of 7% in the second stage, Dobson wants to use his estimate that eight years later, Charmed Energy's stock will be worth 17 times its earnings per share (trailing P/E of 17). He expects that the earnings retention ratio at that time will be 0.70."],
      ["h", "Approach 3"],
      ["p", "In contrast to the first approach, in which the growth rate declines abruptly from 14% in the eighth year to 7% in the ninth, the growth rate would decline linearly from 14% in the first year to 7% in the ninth."]
    ],
    questions: [
      {
        q: "What is the terminal value of the stock based on the first approach?",
        options: ["C$17.65.", "C$31.06.", "C$33.09."],
        answer: 1,
        why: "D8 = 0.175 × 1.14⁸ = C$0.4992. Terminal value at the end of year 8: V8 = D9 / (r − g) = 0.4992 × 1.07 / (0.0872 − 0.07) = C$31.0550. Dividends D1–D8: 0.1995, 0.2274, 0.2593, 0.2956, 0.3369, 0.3841, 0.4379, 0.4992; their PVs at 8.72% sum to C$1.7433. PV of V8 = 31.0550 / 1.0872⁸ = C$15.9095. Total value V0 = C$17.6528. Trap: C$17.65 is the stock's value today, not the terminal value."
      },
      {
        q: "In the first approach, what proportion of the stock's total value is represented by the value of second stage?",
        options: ["0.10.", "0.52.", "0.90."],
        answer: 2,
        why: "Value of the second stage = PV of V8 = C$15.9095. Total value = C$17.6528. Proportion = 15.9095 / 17.6528 = 0.90. The terminal value usually dominates a multistage DDM."
      },
      {
        q: "What is the stock's terminal value based on the second approach (earnings multiple)?",
        options: ["C$12.12.", "C$28.29.", "C$33.09."],
        answer: 1,
        why: "V8/E8 = 17 and the payout ratio D8/E8 = 1 − 0.70 = 0.30. With D8 = C$0.4992, E8 = 0.4992 / 0.30 = C$1.6640. So V8 = 17 × 1.6640 = C$28.2880."
      },
      {
        q: "What is the stock's current value based on the second approach?",
        options: ["C$16.24.", "C$17.65.", "C$28.29."],
        answer: 0,
        why: "V8 = 17 × 1.6640 = C$28.2880. PV of V8 = 28.2880 / 1.0872⁸ = C$14.4919. Add the PV of D1 through D8 (C$1.7433): V0 = 14.4919 + 1.7433 = C$16.2352. Trap: C$17.65 is the value from the first approach; C$28.29 is the terminal value."
      },
      {
        q: "Based on the third approach (the H-model), the stock is:",
        options: ["undervalued.", "fairly valued.", "overvalued."],
        answer: 2,
        why: "H-model: V0 = D0(1 + gL)/(r − gL) + D0 × H × (gS − gL)/(r − gL), with D0 = 0.175, r = 0.0872, gS = 0.14, gL = 0.07 and H = 8/2 = 4 (half the 8-year period of declining growth). V0 = 0.175 × 1.07 / 0.0172 + 0.175 × 4 × 0.07 / 0.0172 = 10.8866 + 2.8488 = C$13.7355. The market price of C$17 is above C$13.74, so the stock is overvalued."
      },
      {
        q: "Dobson is wondering what the consequences would be if the duration of the first stage was assumed to be 11 years instead of 8, with all the other assumptions and estimates remaining the same. Considering this change, which of the following is true?",
        options: ["In the second approach, the proportion of the total value of the stock represented by the second stage would not change.", "The total value estimated using the third approach would increase.", "Using this new assumption and the first approach will lead Dobson to conclude that the stock is overvalued."],
        answer: 1,
        why: "If the extraordinary growth rate is expected to last longer, the stock's value increases (in the H-model, H rises from 4 to 5.5). A is false: the terminal value would be calculated at a later point, so its PV would be smaller, and the longer first stage contributes more, so the second stage's share would fall. C is false: the intrinsic value would be higher, so under the first approach the stock would look undervalued by an even larger margin."
      }
    ]
  },
  {
    id: "cannan",
    title: "Delite Beverage & You Fix It",
    topic: "Equity Valuation",
    reading: "Market-Based Valuation: Price and Enterprise Value Multiples",
    body: [
      ["p", "Mark Cannan is updating research reports on two well-established consumer companies before first quarter 2021 earnings reports are released. His supervisor, Sharolyn Ritter, has asked Cannan to use market-based valuations when updating the reports."],
      ["p", "Delite Beverage is a manufacturer and distributor of soft drinks and recently acquired a major water bottling company in order to offer a broader product line. The acquisition will have a significant impact on Delite's future results."],
      ["p", "You Fix It is a US retail distributor of products for home improvement, primarily for those consumers who choose to do the work themselves. The home improvement industry is cyclical; the industry was adversely affected by the recent downturn in the economy, the level of foreclosures, and slow home sales. Although sales and earnings at You Fix It weakened, same store sales are beginning to improve as consumers undertake more home improvement projects. Poor performing stores were closed, resulting in significant restructuring charges in 2020."],
      ["p", "Before approving Cannan's work, Ritter wants to discuss the calculations and choices of ratios used in the valuation of Delite and You Fix It. The data used by Cannan in his analysis are summarized in Exhibit 1."],
      ["table", {
        title: "Exhibit 1: Select Financial Data for Delite Beverage and You Fix It",
        head: ["", "Delite Beverage", "You Fix It"],
        rows: [
          ["2020 earnings per share (EPS)", "$3.44", "$1.77"],
          ["2021 estimated EPS", "$3.50", "$1.99"],
          ["Book value per share end of year", "$62.05", "$11.64"],
          ["Current share price", "$65.50", "$37.23"],
          ["Sales (billions)", "$32.13", "$67.44"],
          ["Free cash flow per share", "$2.68", "$0.21"],
          ["Shares outstanding end of year", "2,322,034,000", "1,638,821,000"]
        ]
      }],
      ["p", "Cannan advises Ritter that he is considering three different approaches to value the shares of You Fix It:"],
      ["h", "Approach 1"],
      ["p", "Price-to-book ratio (P/B)"],
      ["h", "Approach 2"],
      ["p", "Price-to-earnings ratio (P/E) using trailing earnings"],
      ["h", "Approach 3"],
      ["p", "Price-to-earnings ratio using normalized earnings"],
      ["p", "Cannan tells Ritter that he calculated the price-to-sales ratio (P/S) for You Fix It but chose not to use it in the valuation of the shares. Cannan states to Ritter that it is more appropriate to use the P/E than the P/S because"],
      ["h", "Reason 1"],
      ["p", "Earnings are more stable than sales."],
      ["h", "Reason 2"],
      ["p", "Earnings are less easily manipulated than sales."],
      ["h", "Reason 3"],
      ["p", "The P/E reflects financial leverage, whereas the P/S does not."],
      ["p", "Cannan also informs Ritter that he did not use a price-to-cash-flow multiple in valuing the shares of Delite or You Fix It. The reason is that he could not identify a cash flow measure that would both account for working capital and noncash revenues and be after interest expense and thus not be mismatched with share price. Ritter advises Cannan that such a cash flow measure does exist."],
      ["p", "Ritter provides Cannan with financial data on three close competitors as well as the overall beverage sector, which includes other competitors, in Exhibit 2. She asks Cannan to determine, based on the P/E-to-growth (PEG) ratio, whether Delite shares are overvalued, fairly valued, or undervalued."],
      ["table", {
        title: "Exhibit 2: Beverage Sector Data",
        head: ["", "Forward P/E", "Earnings Growth"],
        rows: [
          ["Delite", "—", "12.41%"],
          ["Fresh Iced Tea Company", "16.59", "9.52%"],
          ["Nonutter Soda", "15.64", "11.94%"],
          ["Tasty Root Beer", "44.10", "20%"],
          ["Beverage sector average", "16.40", "10.80%"]
        ]
      }],
      ["p", "After providing Ritter his answer, Cannan is concerned about the inclusion of Tasty Root Beer in the comparables analysis. Specifically, Cannan says to Ritter: \u201cI feel we should mitigate the effect of large outliers but not the impact of small outliers (i.e., those close to zero) when calculating the beverage sector P/E. What measure of central tendency would you suggest we use to address this concern?\u201d"],
      ["p", "Ritter requests that Cannan incorporate their discussion points before submitting the reports for final approval."]
    ],
    questions: [
      {
        q: "Based on the information in Exhibit 1, the most appropriate price-to-earnings ratio to use in the valuation of Delite is closest to:",
        options: ["18.71.", "19.04.", "24.44."],
        answer: 0,
        why: "The forward P/E should be used given the recent significant acquisition of the water bottling company. A major change such as an acquisition or divestiture affects results, so the forward (leading, prospective) P/E is most appropriate: 2021 estimates should include the water bottling business. Forward P/E = $65.50 / $3.50 = 18.71. Trap: 19.04 is the trailing P/E ($65.50 / $3.44)."
      },
      {
        q: "Based on the information in Exhibit 1, the price-to-sales ratio for You Fix It is closest to:",
        options: ["0.28.", "0.55.", "0.90."],
        answer: 2,
        why: "P/S = price per share / annual net sales per share. Sales per share = $67.44 billion / 1.638821 billion shares = $41.15. P/S = $37.23 / $41.15 = 0.90."
      },
      {
        q: "Which valuation approach would be most appropriate in valuing shares of You Fix It?",
        options: ["Approach 1", "Approach 2", "Approach 3"],
        answer: 2,
        why: "You Fix It is in the cyclical home improvement industry (and had large 2020 restructuring charges). Normalized earnings address cyclicality by estimating the EPS the company could achieve currently under mid-cyclical conditions."
      },
      {
        q: "Cannan's preference to use the P/E over the P/S is best supported by:",
        options: ["Reason 1.", "Reason 2.", "Reason 3."],
        answer: 2,
        why: "Sales is a pre-financing income measure and does not reflect the impact of debt in the capital structure (or differences in cost structures), while share price does reflect debt financing. Earnings reflect operating and financial leverage, so the P/E incorporates the effect of debt. Reasons 1 and 2 are backwards: sales are generally more stable and harder to manipulate than earnings."
      },
      {
        q: "The cash flow measure that Ritter would most likely recommend to address Cannan's concern is:",
        options: ["free cash flow to equity.", "earnings plus noncash charges.", "earnings before interest, tax, depreciation, and amortization."],
        answer: 0,
        why: "FCFE is cash flow available to shareholders after all operating expenses, interest and debt payments, and investments in working and fixed capital. It accounts for working capital and noncash revenues and is after interest, so it matches share price. Earnings plus noncash charges ignores working capital and noncash revenues; EBITDA is before interest (a pre-financing measure mismatched with equity price)."
      },
      {
        q: "Based on the information in Exhibits 1 and 2, Cannan would most likely conclude that Delite's shares are:",
        options: ["overvalued.", "undervalued.", "fairly valued."],
        answer: 2,
        why: "PEG = P/E / expected growth (in percent). Delite forward P/E = $65.50 / $3.50 = 18.71 (forward earnings because of the acquisition); PEG = 18.71 / 12.41 = 1.51. Fresh Iced Tea 16.59 / 9.52 = 1.74; Nonutter Soda 15.64 / 11.94 = 1.31; sector average 16.40 / 10.80 = 1.52. Delite's PEG is in the middle of the range and very close to the sector average, so the shares appear fairly valued."
      },
      {
        q: "The measure of central tendency that Ritter will most likely recommend is the:",
        options: ["median.", "harmonic mean.", "arithmetic mean."],
        answer: 1,
        why: "The harmonic mean reduces the impact of large outliers (the main problem with the arithmetic mean multiple) but not the impact of small outliers close to zero; it may even aggravate small outliers, but those are bounded by zero on the downside. The median reduces the impact of both large and small outliers."
      }
    ]
  },
  {
    id: "centralino",
    title: "Centralino S.p.A.",
    topic: "Equity Valuation",
    reading: "Market-Based Valuation: Price and Enterprise Value Multiples",
    body: [
      ["p", "Andrea Risso is a junior analyst with AquistareFianco, an independent equity research firm. Risso's supervisor asks her to update, as of 1 January 2020, a quarterly research report for Centralino S.p.A., a telecommunications company headquartered in Italy. On that date, Centralino's common share price is €50 and its preferred shares trade for €5.25 per share."],
      ["p", "Risso gathers information on Centralino. Exhibit 1 presents earnings and dividend data, and Exhibit 2 presents balance sheet data. Net sales were €3.182 billion in 2019. Risso estimates a required return of 15% for Centralino and forecasts growth in dividends of 6% into perpetuity."],
      ["table", {
        title: "Exhibit 1: Earnings and Dividends for Centralino, 2016–2020",
        head: ["", "2016", "2017", "2018", "2019", "2020(E)"],
        rows: [
          ["Earnings per share (EPS, €)", "4.93", "5.25", "4.46", "5.64", "6.00"],
          ["Dividends per share (DPS, €)", "2.45", "2.60", "2.60", "2.75", "2.91"],
          ["Return on equity (ROE)", "13.01%", "13.71%", "11.58%", "14.21%", "14.96%"]
        ],
        note: "The data for 2016–2019 are actual and for 2020 are estimated."
      }],
      ["table", {
        title: "Exhibit 2: Summary Balance Sheet for Centralino, Year Ended 31 December 2019 (€ millions)",
        head: ["Assets", "", "Liabilities and Shareholders' Equity", ""],
        rows: [
          ["Cash and cash equivalents", "102", "Current liabilities", "259"],
          ["Accounts receivable", "305", "Long-term debt", "367"],
          ["Inventory", "333", "Total liabilities", "626"],
          ["Total current assets", "740", "Preferred shares", "80"],
          ["Property and equipment, net", "913", "Common shares", "826"],
          ["Total assets", "1,653", "Retained earnings", "121"],
          ["", "", "Total shareholders' equity", "1,027"],
          ["", "", "Total liabilities and shareholders' equity", "1,653"]
        ],
        note: "The market value of long-term debt is equal to its book value. Shares outstanding are 41.94 million common shares and 16.00 million preferred shares."
      }],
      ["p", "Exhibit 3 presents forward price-to-earnings ratios (P/Es) for Centralino's peer group. Risso assumes no differences in fundamentals among the peer-group companies."],
      ["table", {
        title: "Exhibit 3: Peer Group Forward P/Es",
        head: ["Company", "Forward P/E"],
        rows: [["Brinaregalo", "5.9"], ["Camporio", "8.3"], ["Esperto", "3.0"], ["Fornodissione", "15.0"], ["Radoresto", "4.6"]]
      }],
      ["p", "Risso also wants to calculate normalized EPS using the average return on equity method. She determines that the 2016–19 time period in Exhibit 1 represents a full business cycle for Centralino."]
    ],
    questions: [
      {
        q: "Based on Exhibit 1, the trailing P/E for Centralino as of 1 January 2020, ignoring any business-cycle influence, is closest to:",
        options: ["8.3.", "8.9.", "9.9."],
        answer: 1,
        why: "Trailing P/E = current price / most recent four quarters' EPS = €50 / €5.64 = 8.9. Traps: 8.3 is the forward P/E (€50 / €6.00); 9.9 uses the 2016–19 average EPS of €5.07."
      },
      {
        q: "Based on Exhibit 1 and Risso's estimates of return and dividend growth, Centralino's justified forward P/E based on the Gordon growth dividend discount model is closest to:",
        options: ["5.4.", "5.7.", "8.3."],
        answer: 0,
        why: "Justified forward P/E = (D1/E1) / (r − g). Payout = €2.91 / €6.00 = 0.485. P0/E1 = 0.485 / (0.15 − 0.06) = 5.39 ≈ 5.4. Trap: 5.7 is the justified TRAILING P/E, p(1 + g)/(r − g) = (2.75/5.64)(1.06)/0.09 = 5.74. 8.3 is the actual forward P/E."
      },
      {
        q: "Based on Exhibit 2, the price-to-book multiple for Centralino is closest to:",
        options: ["2.0.", "2.2.", "2.5."],
        answer: 1,
        why: "Book value per share uses COMMON equity: total shareholders' equity − preferred = €1,027 − €80 = €947 million. BVPS = €947 million / 41.94 million = €22.58. P/B = €50 / €22.58 = 2.2. Trap: 2.0 forgets to subtract the preferred shares (€1,027m / 41.94m = €24.49)."
      },
      {
        q: "Based on Exhibit 2, the multiple of enterprise value to sales for Centralino as of 31 December 2019 is closest to:",
        options: ["0.67.", "0.74.", "0.77."],
        answer: 2,
        why: "EV = market value of common + market value of preferred + market value of debt − cash = (€50 × 41.94m) + (€5.25 × 16.00m) + €367m − €102m = €2,097m + €84m + €367m − €102m = €2,446 million. EV/sales = €2.446 billion / €3.182 billion = 0.77. Trap: 0.74 leaves out the preferred shares."
      },
      {
        q: "Based on Exhibit 1 and using the harmonic mean of the peer group forward P/Es shown in Exhibit 3 as a valuation indicator, the common shares of Centralino are:",
        options: ["undervalued.", "fairly valued.", "overvalued."],
        answer: 2,
        why: "Harmonic mean = n / Σ(1/P/E) = 5 / (1/5.9 + 1/8.3 + 1/3.0 + 1/15.0 + 1/4.6) = 5 / (0.1695 + 0.1205 + 0.3333 + 0.0667 + 0.2174) = 5 / 0.9074 = 5.51. Centralino's forward P/E = €50 / €6.00 = 8.3, which is above 5.51, so the shares appear relatively overvalued."
      },
      {
        q: "Based on Exhibits 1 and 2, the normalized earnings per share for Centralino as calculated by Risso should be closest to:",
        options: ["€2.96.", "€3.21.", "€5.07."],
        answer: 0,
        why: "Average ROE method: normalized EPS = average ROE over the full cycle × CURRENT book value per share. Average ROE 2016–19 = (13.01% + 13.71% + 11.58% + 14.21%) / 4 = 13.13%. BVPS = (€1,027m − €80m) / 41.94m = €22.58. Normalized EPS = 0.1313 × €22.58 = €2.96. Traps: €3.21 uses only the 2019 ROE (14.21%); €5.07 is the historical average EPS method."
      }
    ]
  },
  {
    id: "smith-fx",
    title: "Ed Smith: FX Services",
    topic: "Economics",
    reading: "Currency Exchange Rates: Understanding Equilibrium Value",
    body: [
      ["p", "Ed Smith is a new trainee in the foreign exchange (FX) services department of a major global bank. Smith's focus is to assist senior FX trader Feliz Mehmet, CFA. Mehmet mentions that an Indian corporate client exporting to the United Kingdom wants to estimate the potential hedging cost for a sale closing in one year. Smith is to determine the premium/discount for an annual (360-day) forward contract using the exchange rate data presented in Exhibit 1."],
      ["table", {
        title: "Exhibit 1: Select Currency Data for GBP and INR",
        head: ["", ""],
        rows: [
          ["Spot (INR/GBP)", "79.5093"],
          ["Annual (360-day) MRR (GBP)", "5.43%"],
          ["Annual (360-day) MRR (INR)", "7.52%"]
        ]
      }],
      ["p", "Mehmet is also looking at two possible trades to determine their profit potential. The first trade involves a possible triangular arbitrage trade using the Swiss, US, and Brazilian currencies, to be executed based on a dealer's bid/offer rate quote of 0.2355/0.2358 in CHF/BRL and the interbank spot rate quotes presented in Exhibit 2."],
      ["table", {
        title: "Exhibit 2: Interbank Market Quotes",
        head: ["Currency Pair", "Bid/Offer"],
        rows: [["CHF/USD", "0.9799/0.9801"], ["BRL/USD", "4.1698/4.1702"]]
      }],
      ["p", "Mehmet is also considering a carry trade involving the USD and the EUR. He anticipates it will generate a higher return than buying a one-year domestic note at the current market quote due to low US interest rates and his predictions of exchange rates in one year. To help Mehmet assess the carry trade, Smith provides Mehmet with selected current market data and his one-year forecasts in Exhibit 3."],
      ["table", {
        title: "Exhibit 3: Spot Rates and Interest Rates for Proposed Carry Trade",
        head: ["Today's One-Year MRR", "", "Currency Pair (Price/Base)", "Spot Rate Today", "Projected Spot Rate in One Year"],
        rows: [
          ["USD", "0.80%", "CAD/USD", "1.3200", "1.3151"],
          ["CAD", "1.71%", "EUR/CAD", "0.6506", "0.6567"],
          ["EUR", "2.20%", "", "", ""]
        ]
      }],
      ["p", "Finally, Mehmet asks Smith to assist with a trade involving a US multinational customer operating in Europe and Japan. The customer is a very cost-conscious industrial company with an AA credit rating and strives to execute its currency trades at the most favorable bid–offer spread. Because its Japanese subsidiary is about to close on a major European acquisition in three business days, the client wants to lock in a trade involving the Japanese yen and the euro as early as possible the next morning, preferably by 8:05 a.m. New York time."],
      ["p", "At lunch, Smith and other FX trainees discuss how best to analyze currency market volatility from ongoing financial crises. The group agrees that a theoretical explanation of exchange rate movements, such as the framework of the international parity conditions, should be applicable across all trading environments. They note such analysis should enable traders to anticipate future spot exchange rates. But they disagree on which parity condition best predicts exchange rates, voicing several different assessments. Smith concludes the discussion on parity conditions by stating to the trainees, \u201cI believe that in the current environment both covered and uncovered interest rate parity conditions are in effect.\u201d"]
    ],
    questions: [
      {
        q: "Based on Exhibit 1, the forward premium (discount) for a 360-day INR/GBP forward contract is closest to:",
        options: ["–1.546.", "1.546.", "1.576."],
        answer: 2,
        why: "F − S = S(f/d) × [(i_f − i_d) × (Actual/360)] / [1 + i_d × (Actual/360)]. In INR/GBP, GBP is the base (d) and INR the price currency (f). = 79.5093 × (0.0752 − 0.0543) / (1 + 0.0543) = 79.5093 × 0.0209 / 1.0543 = 1.6617 / 1.0543 = 1.576. The premium is positive because the price currency (INR) has the higher interest rate. Trap: 1.546 divides by 1 + i_f (1.0752) instead of 1 + i_d."
      },
      {
        q: "Based on Exhibit 2, the most appropriate recommendation regarding the triangular arbitrage trade is to:",
        options: ["decline the trade, because no arbitrage profits are possible.", "execute the trade, buy BRL in the interbank market, and sell BRL to the dealer.", "execute the trade, buy BRL from the dealer, and sell BRL in the interbank market."],
        answer: 1,
        why: "Implied CHF/BRL = CHF/USD × USD/BRL. Invert BRL/USD: USD/BRL bid = 1/4.1702 = 0.23980, offer = 1/4.1698 = 0.23982. Interbank CHF/BRL bid = 0.9799 × 0.23980 = 0.23498; offer = 0.9801 × 0.23982 = 0.23505. The dealer's bid for BRL (0.2355) is above the interbank offer (0.23505), so buy BRL interbank at 0.23505 and sell to the dealer at 0.2355: a profit of 0.0045 CHF per BRL."
      },
      {
        q: "Based on Exhibit 3, the potential all-in USD return on the carry trade is closest to:",
        options: ["0.83%.", "1.23%.", "1.63%."],
        answer: 0,
        why: "Borrow the low-yield USD (0.80%), invest in the high-yield EUR (2.20%). EUR/USD today = 1.3200 × 0.6506 = 0.8588; in one year = 1.3151 × 0.6567 = 0.8636. Unhedged EUR return in USD = 0.8588 × 1.022 × (1/0.8636) − 1 = 1.632%. Net of USD borrowing cost: 1.632% − 0.80% = 0.83%. Trap: 1.63% is the gross return before funding costs."
      },
      {
        q: "The factor least likely to lead to a narrow bid–offer spread for the industrial company's needed currency trade is the:",
        options: ["timing of its trade.", "company's credit rating.", "pair of currencies involved."],
        answer: 1,
        why: "The trade is a spot trade (settles T+2), so counterparty credit risk is minimal: an AA rating will not tighten the spread much versus a somewhat lower (still high-quality) rating. Timing matters (8:05 a.m. New York is when London and New York overlap, the most liquid time), and the currency pair matters (JPY/EUR is a liquid major pair). Relationship, trade size and market volatility also matter more than credit rating here."
      },
      {
        q: "If Smith's statement on parity conditions is correct, future spot exchange rates are most likely to be forecast by:",
        options: ["current spot rates.", "forward exchange rates.", "inflation rate differentials."],
        answer: 1,
        why: "Covered interest rate parity makes the forward premium equal the interest rate differential; uncovered interest rate parity makes the expected change in spot equal the same differential. With both holding, F(f/d) = S^e(f/d): the forward rate is an unbiased forecast of the future spot rate. Current spot would be the forecast only if interest rates were equal (random walk); inflation differentials relate to relative PPP."
      }
    ]
  }
];


// Link each question back to its vignette and topic (used by the wrong-answers notebook), and number them in order (1–23 match the original PDF).
let qNum = 0;
VIGNETTES.forEach(v => v.questions.forEach(q => { q.vignette = v; q.topic = v.topic; q.reading = v.reading; q.num = ++qNum; }));

if (typeof module !== "undefined") module.exports = VIGNETTES;
