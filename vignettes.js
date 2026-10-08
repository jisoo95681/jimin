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
        why: "D8 = 0.175 × 1.14⁸ = C$0.4992. Terminal value at the end of year 8: V8 = [[D9|r − g]] = 0.4992 × 1.07 / (0.0872 − 0.07) = C$31.0550. Dividends D1–D8: 0.1995, 0.2274, 0.2593, 0.2956, 0.3369, 0.3841, 0.4379, 0.4992; their PVs at 8.72% sum to C$1.7433. PV of V8 = 31.0550 / 1.0872⁸ = C$15.9095. Total value V0 = C$17.6528. Trap: C$17.65 is the stock's value today, not the terminal value."
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
        why: "H-model: V0 = [[D0(1 + gL)|r − gL]] + [[D0 × H × (gS − gL)|r − gL]], with D0 = 0.175, r = 0.0872, gS = 0.14, gL = 0.07 and H = 8/2 = 4 (half the 8-year period of declining growth). V0 = 0.175 × 1.07 / 0.0172 + 0.175 × 4 × 0.07 / 0.0172 = 10.8866 + 2.8488 = C$13.7355. The market price of C$17 is above C$13.74, so the stock is overvalued."
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
        why: "P/S = [[price per share|annual net sales per share]]. Sales per share = $67.44 billion / 1.638821 billion shares = $41.15. P/S = $37.23 / $41.15 = 0.90."
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
        why: "PEG = [[P/E|expected growth (in percent)]]. Delite forward P/E = $65.50 / $3.50 = 18.71 (forward earnings because of the acquisition); PEG = 18.71 / 12.41 = 1.51. Fresh Iced Tea 16.59 / 9.52 = 1.74; Nonutter Soda 15.64 / 11.94 = 1.31; sector average 16.40 / 10.80 = 1.52. Delite's PEG is in the middle of the range and very close to the sector average, so the shares appear fairly valued."
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
        why: "Trailing P/E = [[current price|most recent four quarters' EPS]] = €50 / €5.64 = 8.9. Traps: 8.3 is the forward P/E (€50 / €6.00); 9.9 uses the 2016–19 average EPS of €5.07."
      },
      {
        q: "Based on Exhibit 1 and Risso's estimates of return and dividend growth, Centralino's justified forward P/E based on the Gordon growth dividend discount model is closest to:",
        options: ["5.4.", "5.7.", "8.3."],
        answer: 0,
        why: "Justified forward P/E = [[D1/E1|r − g]]. Payout = €2.91 / €6.00 = 0.485. P0/E1 = 0.485 / (0.15 − 0.06) = 5.39 ≈ 5.4. Trap: 5.7 is the justified TRAILING P/E, [[p(1 + g)|r − g]] = (2.75/5.64)(1.06)/0.09 = 5.74. 8.3 is the actual forward P/E."
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
        why: "Harmonic mean = [[n|Σ(1 / P/E)]] = 5 / (1/5.9 + 1/8.3 + 1/3.0 + 1/15.0 + 1/4.6) = 5 / (0.1695 + 0.1205 + 0.3333 + 0.0667 + 0.2174) = 5 / 0.9074 = 5.51. Centralino's forward P/E = €50 / €6.00 = 8.3, which is above 5.51, so the shares appear relatively overvalued."
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
        why: "F − S = S(f/d) × [[(i_f − i_d) × (Actual/360)|1 + i_d × (Actual/360)]]. In INR/GBP, GBP is the base (d) and INR the price currency (f). = 79.5093 × (0.0752 − 0.0543) / (1 + 0.0543) = 79.5093 × 0.0209 / 1.0543 = 1.6617 / 1.0543 = 1.576. The premium is positive because the price currency (INR) has the higher interest rate. Trap: 1.546 divides by 1 + i_f (1.0752) instead of 1 + i_d."
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
  },
  {
    "id": "wagner-growth",
    "title": "Haus Builders (Luca Wagner)",
    "topic": "Economics",
    "reading": "Economic Growth",
    "body": [
      [
        "p",
        "Luca Wagner is the CEO of Haus Builders and Finance, based in Germany. The company specializes in building low-income housing in developing countries, using new, highly specialized technology that lowers labor costs. Wagner is considering an investment in three neighboring African countries. To fund the investment, he wants to invite both foreign and local institutional investors to participate as equity and debt investors. Wagner knows that the availability of mortgages for low-income earners increases home ownership. As a result, he intends to finance 30-year mortgages through a Special Purpose Vehicle, issuing tranches of publicly traded 30-year bonds. He collects the following information related to economic factors:"
      ],
      [
        "table",
        {
          "title": "Exhibit 1",
          "head": [
            "",
            "Country A",
            "Country B",
            "Country C"
          ],
          "rows": [
            [
              "Gross savings as % of GDP",
              "8",
              "30",
              "36"
            ],
            [
              "Market capitalization as a % of GDP (%)",
              "5.3",
              "N/A - no securities exchange",
              "0.7"
            ],
            [
              "Political stability",
              "Mostly stable",
              "Civil war in outer regions",
              "Stable"
            ],
            [
              "Regulatory",
              "Good investor protection environment but slow court system",
              "Uncertain investor protection rights",
              "Improving investor protection rights"
            ],
            [
              "Receptiveness to foreign investment",
              "Open - no restrictions with free flow of capital, local investor participation encouraged",
              "Restricted to certain sectors",
              "Open subject to currency restrictions regarding repatriation of funds"
            ]
          ]
        }
      ],
      [
        "p",
        "Wagner travels to each of the three African countries to meet with their Government officials for the purposes of further due diligence. In one of Wagner's meetings with a Minister of Finance, he asks about the long-term growth forecasts of the country's economy that will help him attract debt and equity investors. The Minister responds with the following statements:"
      ],
      [
        "h",
        "Statement 1"
      ],
      [
        "p",
        "We are already seeing a boost in productivity as a result of our investment in public sector infrastructure over the last two years. We expect private sector productivity to make even bigger gains this year as the full impact of these investments are realized."
      ],
      [
        "h",
        "Statement 2"
      ],
      [
        "p",
        "Corporate earnings growth over the last five years has been strong and the ratio of corporate profits to GDP is on an upward trend. We acknowledge this level of growth will likely not last forever, but real earnings growth can exceed the growth rate of potential GDP over the long term."
      ],
      [
        "h",
        "Statement 3"
      ],
      [
        "p",
        "We are confident our long-term growth forecasts are well-founded. When we extrapolate our GDP growth over the last ten years into the future, we predict growth will be above 3% over the long-term."
      ],
      [
        "p",
        "Afterwards, Wagner attends a regional capital market development conference regarding the planned future introduction of a regional securities exchange. He wants to understand his options for raising the debt needed for the mortgage funding in each country. Wagner meets with the regulators attending the conference, including the CEO of the Financial Markets Authority (FMA). The FMA CEO says, “I firmly believe in absolute convergence whereby all countries within the region will benefit from steadily improving investment rates via technological advances provided by the new electronic trading. With access to this technology, we expect each of our country's per capita income growth rates to catch up to those of developed countries over time. We should eventually also get to the same per capita income levels as developed countries.”"
      ],
      [
        "p",
        "Prior to leaving the region, Wagner meets again with the Minister of Finance to ask for tax incentives to make his investment in that country. He makes the following justifications:"
      ],
      [
        "h",
        "Justification 1"
      ],
      [
        "p",
        "As a result of my successful investments, more and more foreign investors will be attracted to the country. Therefore, the country will no longer be considered capital poor."
      ],
      [
        "h",
        "Justification 2"
      ],
      [
        "p",
        "My high-tech investment will likely cause the local housing industry to become more efficient; some local companies will become more innovative but some will leave the industry."
      ],
      [
        "h",
        "Justification 3"
      ],
      [
        "p",
        "My investment will cause capital growth to rise more quickly and will result in higher productivity growth, causing per capita incomes to converge."
      ]
    ],
    "questions": [
      {
        "q": "Based only on the information provided in Exhibit 1, which country has the most favorable economic factors to support Wagner's proposed project?",
        "options": [
          "Country A",
          "Country B",
          "Country C"
        ],
        "answer": 0,
        "why": "Wagner should invest where the factors limiting growth are weakest. Limiting factors: low saving and investment; poorly developed financial markets; weak or corrupt legal systems and failure to enforce laws; lack of property rights and political instability; poor public education and health; tax and regulatory policies discouraging entrepreneurship; restrictions on trade and capital flows. Country A has a higher market cap/GDP than C (B has no exchange), stronger investor rights than B or C, and no restrictions on foreign capital, unlike B (sector restrictions, civil war) and C (repatriation restrictions). A's savings rate is lower than C's, but since funding comes from foreign and domestic institutional investors, the investment environment matters more. So Country A is most favorable."
      },
      {
        "q": "Which of the statements made by the Minister of Finance about the country's growth prospects is most likely correct?",
        "options": [
          "Statement 1",
          "Statement 2",
          "Statement 3"
        ],
        "answer": 0,
        "why": "Statement 1 is correct: infrastructure investment is an important source of productivity growth and belongs in the production function. Like R&D, public infrastructure boosts the productivity of private investment beyond the projects' direct benefits. Statement 2 is wrong: in the long run real earnings growth cannot exceed potential GDP growth, because that would require the profit share of GDP to rise forever. Statement 3 is wrong: simply extrapolating past GDP growth can mislead; growth rates change over time (Japan slowed after 1990; Brazil sped up after 1999), and small changes in potential growth have large effects on living standards."
      },
      {
        "q": "Which convergence hypothesis best supports the FMA CEO's belief?",
        "options": [
          "Club convergence",
          "Absolute convergence",
          "Conditional convergence"
        ],
        "answer": 0,
        "why": "Club convergence: countries that are members of the “club” (rich and middle-income countries) converge to the income LEVEL of the richest countries, with the poorest members growing fastest; countries outside the club fall behind, but poor countries can join by making the appropriate institutional changes (here, the new regional exchange and electronic trading). It allows the same per capita income level. Despite the CEO using the words “absolute convergence”, absolute convergence means developing countries catch up REGARDLESS of their particular characteristics, not because of favorable changes. Conditional convergence requires the same saving rate, population growth rate and production function."
      },
      {
        "q": "Which of Wagner's justifications most likely reflects the neoclassical growth model?",
        "options": [
          "Justification 1",
          "Justification 2",
          "Justification 3"
        ],
        "answer": 2,
        "why": "Neoclassical model: in an open economy, capital flows from capital-rich (high K/L) to capital-poor countries seeking higher returns, so the capital stock of developing countries grows faster than in rich countries even with low saving; faster capital growth raises productivity growth and per capita incomes converge (Justification 3). Justification 1 is wrong: as foreign capital flows in and the country becomes less capital poor, returns fall and global savers slow their investment. Justification 2 describes the selection effect from endogenous growth models: foreign competition forces less efficient domestic firms to exit and others to innovate."
      }
    ]
  },
  {
    "id": "schwalke",
    "title": "Ulrich Schwalke (Private Equity)",
    "topic": "Equity Valuation",
    "reading": "Private Company Valuation",
    "body": [
      [
        "p",
        "Ulrich Schwalke has been recently hired as an analyst at a private equity firm that specializes in buying and restructuring private companies to be taken public within five years. Given his background with valuing public firms, this role will provide him his first experiences in valuing private companies."
      ],
      [
        "p",
        "Before starting his new position, Schwalke meets with a former classmate who works as an associate focused on private company valuations in order to resolve legal disputes. During the meeting, Schwalke’s classmate mentions that private business valuation often requires normalizing certain expense items on a company’s income statement before taking next steps."
      ],
      [
        "p",
        "On his first assignment, Schwalke is asked to estimate a WACC for a potential private target company. The partner has commented that the private target has a far lower debt ratio than would be considered optimal."
      ],
      [
        "p",
        "Schwalke’s firm recently announced plans to buy one of the private companies that Schwalke has valued. Schwalke spent considerable time assessing the validity of different control premiums in analyzing a possible offer price."
      ]
    ],
    "questions": [
      {
        "q": "Which valuation feature will Schwalke find different in valuing private companies versus public companies?",
        "options": [
          "Using FCFF to value companies",
          "Using market multiples to value companies",
          "Assessing discounts to account for illiquidity"
        ],
        "answer": 2,
        "why": "An issue with private versus public company valuations is the need to adjust the valuation downward for a lack of liquidity (marketability). A and B are incorrect: FCFF and market multiples are used in both private and public company valuations."
      },
      {
        "q": "During Schwalke’s meeting with his former classmate, they discuss how their approaches to private company valuation vary given the different uses of their analysis. Which of the following best characterizes how Schwalke’s approach differs from that of his former classmate?",
        "options": [
          "Schwalke usually incorporates a DLOM.",
          "Schwalke usually adjusts the investment value as a minority interest.",
          "Schwalke’s approach usually considers a synergistic control premium."
        ],
        "answer": 2,
        "why": "Schwalke’s firm buys and restructures private companies to take them public, so as a strategic buyer acquiring control it will consider a control premium. A DLOM and a minority-interest adjustment fit valuing a non-controlling, non-marketable stake (e.g. for litigation or tax), not his firm’s strategy of controlling and restructuring companies over five years."
      },
      {
        "q": "Which of the following statements best describes the meaning of “normalizing earnings” in the context of private business valuation?",
        "options": [
          "Adjustments to revenues and/or costs necessary to allow comparison of private company financial results to comparable public companies",
          "Adjustments to offset the cyclicality of revenues and/or costs for private companies",
          "Adjustments that allow comparisons due to the lack of marketability for private companies"
        ],
        "answer": 0,
        "why": "Private companies, especially when a controlling owner is also a senior manager, may have non-market transactions (e.g. above- or below-market owner compensation, personal expenses, related-party rent) that distort earnings versus comparable public companies; normalizing removes them. Cyclicality adjustments apply to public companies too, and lack of marketability affects the discount, not earnings."
      },
      {
        "q": "Which statement best describes a possible bias in the WACC of the private target with a suboptimal debt ratio?",
        "options": [
          "Private companies are likely to have WACC estimates below their optimal WACC because of a lower weight on debt.",
          "Private companies are likely to have WACC estimates above their optimal WACC because of a higher weight on equity.",
          "Private companies are likely to have WACC estimates above their optimal WACC because of a higher weight on debt."
        ],
        "answer": 1,
        "why": "WACC = w_d r_d + w_e r_e (with after-tax r_d). Weights sum to one and r_e > r_d, so a lower debt weight (higher equity weight) pushes WACC up towards r_e. A suboptimally low debt ratio therefore gives a higher-than-optimal WACC (and a lower value). A is wrong: less debt does not lower WACC. C is wrong: a higher debt weight would likely lower WACC."
      },
      {
        "q": "Schwalke learns that his firm intends to combine the new target company with an existing portfolio company prior to taking it public. Should Schwalke apply a financial or synergistic control premium, and how does this level of control premium compare to the other?",
        "options": [
          "Financial; higher",
          "Financial; lower",
          "Synergistic; higher"
        ],
        "answer": 2,
        "why": "Combining the target with an existing portfolio company aims to realize synergies, so the firm acts like a strategic buyer and would consider a synergistic premium, which exceeds the control premium a pure financial buyer would pay."
      }
    ]
  },
  {
    "id": "schwalke2",
    "title": "Ulrich Schwalke: JNK Corporation",
    "topic": "Equity Valuation",
    "reading": "Private Company Valuation",
    "body": [
      [
        "p",
        "Ulrich Schwalke continues his work in valuing private companies, taking specific interest in transactions involving public companies buying private company targets. As he has seen in his work, private company discount rates are often biased because private firms typically have less access to debt capital."
      ],
      [
        "p",
        "While Schwalke has experience using CAPM for public companies, he has rarely used it for private firms, instead relying on the expanded CAPM or a build-up approach to estimate required return on equity. When using the expanded CAPM for a private company, JNK Corporation, Schwalke gathered beta estimates from publicly traded comparable companies. On a recent engagement, he found the average beta from public comparables of 1.20. The average debt ratio of the public comparables exceeded that of JNK, while tax rates were equal between the public comparables and JNK."
      ],
      [
        "p",
        "Continuing in his role, Schwalke completed many private company valuations for entire businesses. As a result, certain methods of calculating terminal values seemed to be more useful for his work than other methods."
      ],
      [
        "p",
        "Schwalke had initially struggled with applying discounts in private company valuation but became more comfortable with different estimation methods. In particular, he finds an option-based approach to quantifying the lack of marketability quite useful. In his recent work on valuing JNK, he estimated the value of three put options with three months until expiration on the most similar public comparable company to JNK. The public comparable was trading at a stock price of EUR 29.70. The three-month risk-free rate is 4%. The put option valuation results are summarized as follows:"
      ],
      [
        "table",
        {
          "title": "JNK Put Option Exercise Prices and Values",
          "head": [
            "Exercise price",
            "Put option value"
          ],
          "rows": [
            [
              "EUR 25",
              "EUR 1.25"
            ],
            [
              "EUR 30",
              "EUR 3.75"
            ],
            [
              "EUR 35",
              "EUR 6.95"
            ]
          ]
        }
      ]
    ],
    "questions": [
      {
        "q": "Which statement best reflects how discount rate biases may affect offer prices in transactions involving public company buyers and private company targets?",
        "options": [
          "Public company buyers pay offer prices for private firms that reflect improvements the buyer will make after a successful acquisition.",
          "Public company buyers pay offer prices for private firms that reflect the higher discount rates that apply to private companies.",
          "Public company buyers pay offer prices for private companies that do not reflect any control premium."
        ],
        "answer": 0,
        "why": "A public buyer has better access to debt and can make improvements (e.g. cutting expenses, a better capital structure), so its offer price reflects the value after those improvements, not the private firm's higher stand-alone discount rate. B contradicts this. C is wrong: a buyer gaining control is likely to pay a control premium."
      },
      {
        "q": "Which statement best explains why the CAPM may be inappropriate for estimating required return on equity for private firms?",
        "options": [
          "The CAPM was only designed for publicly traded stocks.",
          "The CAPM does not utilize a company-specific risk premium.",
          "The CAPM assumes investors are well diversified."
        ],
        "answer": 2,
        "why": "CAPM prices only systematic (market) risk because it assumes investors hold diversified portfolios. Private company owners are rarely well diversified: much of their wealth is tied up in the company, so they bear its total risk. A is wrong: the CAPM can be applied to any asset, traded or not. B: the absence of a separate company-specific premium follows from the diversification assumption; the expanded CAPM adds such premiums (size, company-specific risk) precisely because that assumption fails for private owners."
      },
      {
        "q": "Which statement is most correct regarding Schwalke’s estimation of JNK’s beta?",
        "options": [
          "Schwalke estimates JNK’s beta to be less than 1.20.",
          "Schwalke estimates JNK’s beta to be 1.20.",
          "Schwalke estimates JNK’s beta to be greater than 1.20."
        ],
        "answer": 0,
        "why": "Betas observed for public comparables are levered. First unlever: βu = [[βL|1 + (1 − t)(D/E)]] (the higher the comparables' debt ratio, the lower the unlevered beta). Then relever at JNK's capital structure: βL(JNK) = βu [1 + (1 − t)(D/E)JNK]. Tax rates are equal and JNK has less debt than the comparables, so JNK's relevered beta is below 1.20."
      },
      {
        "q": "Which terminal value estimation method is least useful for Schwalke?",
        "options": [
          "CCM",
          "EEM",
          "Market multiple method"
        ],
        "answer": 1,
        "why": "Schwalke values entire businesses. The excess earnings method (EEM) uses several discount rates for different asset classes and is mainly used to value intangible assets, so it is least useful. The capitalized cash flow method (CCM) and the market multiple method are more useful for valuing whole businesses."
      },
      {
        "q": "Which amount most closely estimates the DLOM for JNK?",
        "options": [
          "12.4%",
          "12.6%",
          "12.5%"
        ],
        "answer": 1,
        "why": "The put option approach uses an at-the-money put based on the forward price. Forward = 29.70 × e^(0.04 × 0.25) = EUR 30.00, so use the EUR 30 put. DLOM = [[put value|stock price]] = 3.75 / 29.70 = 12.63% ≈ 12.6%. Trap: 12.5% divides by the EUR 30 exercise price instead of the stock price."
      }
    ]
  },
  {
    "id": "carlyle",
    "title": "Barbara Carlyle: Avignon & SpeedyPro",
    "topic": "Corporate Issuers",
    "reading": "Analysis of Dividends and Share Repurchases",
    "body": [
      [
        "p",
        "Barbara Carlyle is a financial adviser to high-net-worth individuals. She is currently reviewing the equity portfolio of a client and is considering adding new securities to it, as the client has indicated a preference for more income-producing securities. With this in mind, Carlyle takes a closer look at Avignon Corporation (“Avignon”), a chain of Canadian boutiques that has recently registered unusually high sales, resulting in large increases in the company’s cash balance. Avignon’s current stock price is C$47.33. Exhibit 1 shows earnings and dividends for the preceding four years."
      ],
      [
        "table",
        {
          "title": "Exhibit 1: Avignon Corporation Earnings and Dividend History",
          "head": [
            "",
            "2013",
            "2014",
            "2015",
            "2016"
          ],
          "rows": [
            [
              "EPS",
              "C$1.38",
              "C$1.39",
              "C$1.37",
              "C$1.44"
            ],
            [
              "DPS",
              "C$0.20",
              "C$0.22",
              "C$0.22",
              "C$0.22"
            ]
          ]
        }
      ],
      [
        "p",
        "Carlyle reviews analysts’ reports. She notes the significant change in cash due to the high sales volume and wonders whether that will prompt a dividend increase. However, most analysts have stated that because the industry is cyclical, the increase in sales is believed to be temporary."
      ],
      [
        "p",
        "Carlyle asks her assistant, Richard Lee, to investigate whether Avignon might use its surplus cash for a share repurchase rather than for dividends. Lee, a junior analyst, comments that share repurchases can be beneficial for several reasons:"
      ],
      [
        "h",
        "Statement 1"
      ],
      [
        "p",
        "The distribution of cash among shareholders is equivalent to what would have otherwise been distributed to them as dividends."
      ],
      [
        "h",
        "Statement 2"
      ],
      [
        "p",
        "Share repurchases provide greater flexibility to management than the payment of cash dividends."
      ],
      [
        "h",
        "Statement 3"
      ],
      [
        "p",
        "When directly negotiated, share repurchases can be used to purchase stock for less than the current market price."
      ],
      [
        "p",
        "Lee believes that looking at other companies that have completed share repurchases could be helpful to his analysis. He looks at the history of SpeedyPro Inc. (“SpeedyPro”), a US-based industrial services company whose business depends heavily on the petroleum exploration and production sector. SpeedyPro made its first share repurchase in early 2017 using surplus cash. SpeedyPro’s selected financial information just prior to the repurchase is shown in Exhibit 2."
      ],
      [
        "table",
        {
          "title": "Exhibit 2: SpeedyPro, Inc. Selected Financial Information as of Year-End 2016",
          "head": [
            "",
            ""
          ],
          "rows": [
            [
              "Net income",
              "$124 million"
            ],
            [
              "EPS",
              "$1.24"
            ],
            [
              "Shares outstanding",
              "100 million"
            ],
            [
              "Details of share repurchase",
              ""
            ],
            [
              " Cash available for repurchase",
              "$836 million"
            ],
            [
              " Share price at the time of repurchase",
              "$38.00"
            ],
            [
              " Premium over current share price for repurchase",
              "10.0%"
            ]
          ]
        }
      ],
      [
        "p",
        "Lee returns to Carlyle to continue the discussion. Carlyle explains to Lee that a complete analysis of the impact of a share repurchase should also include an evaluation of the effects on leverage. She points out that Avignon’s most recent bond issue includes a covenant that limits the company’s debt-to-equity ratio to 35%. She asks Lee to prepare an analysis for Avignon, using the information in Exhibit 3, to see if the debt covenant will be violated if the company repurchases shares."
      ],
      [
        "table",
        {
          "title": "Exhibit 3: Avignon Corporation Selected Financial Information as of Year-End 2016",
          "head": [
            "",
            ""
          ],
          "rows": [
            [
              "Book value of equity",
              "C$3,600 million"
            ],
            [
              "Shares outstanding",
              "200 million"
            ],
            [
              "Cash available for repurchase",
              "C$155 million"
            ],
            [
              "Debt-to-equity ratio",
              "30.0%"
            ],
            [
              "After-tax cost of debt",
              "5.0%"
            ]
          ]
        }
      ]
    ],
    "questions": [
      {
        "q": "Based on Exhibit 1, Avignon’s current dividend policy is best described as a:",
        "options": [
          "stable dividend policy.",
          "residual dividend policy.",
          "constant dividend payout ratio policy."
        ],
        "answer": 0,
        "why": "Avignon has paid the same C$0.22 for three years while EPS moved up and down, so its policy is stable. A residual policy pays out whatever internally generated funds are left after capital expenditures, which gives volatile dividends and is rarely used. A constant payout ratio policy pays a fixed percentage of earnings, so the dividend would have risen with EPS in 2016 (payout fell from 16.1% to 15.3%)."
      },
      {
        "q": "If the analysts’ beliefs about the increase in sales are correct, the change in dividend policy that Avignon would most likely make would be to:",
        "options": [
          "declare a special dividend.",
          "increase the quarterly dividend amount.",
          "cut the quarterly dividend in anticipation of next year’s sales forecast."
        ],
        "answer": 0,
        "why": "If the extra sales are temporary, the company would most likely pay a special (extra) dividend: companies, especially in cyclical industries, use special dividends to distribute more in strong years without committing to a higher regular dividend. Firms raise the regular dividend only if they expect to sustain it, and they try hard not to cut dividends, since a consistent record signals profitability."
      },
      {
        "q": "Which of Lee’s statements to Carlyle about share repurchases is least accurate?",
        "options": [
          "Statement 1",
          "Statement 2",
          "Statement 3"
        ],
        "answer": 0,
        "why": "Statement 1 is least accurate: the total cash distributed may be the same, but only shareholders who sell their shares to the company receive cash, unlike a dividend paid pro rata to everyone. Statement 2 is correct: management is not obliged to complete an announced buyback, whereas a declared dividend must be paid. Statement 3 is correct: research found that about 45% of private (negotiated) repurchases from 1984 to 2001 were at discounts, often because large holders needing liquidity had weak bargaining positions."
      },
      {
        "q": "If SpeedyPro had used all of its surplus cash to repurchase its shares, based on Exhibit 2, the percentage increase in EPS would have been closest to:",
        "options": [
          "10%.",
          "25%.",
          "28%."
        ],
        "answer": 1,
        "why": "Repurchase price = $38.00 × 1.10 = $41.80. Shares bought = $836m / $41.80 = 20m. Shares after = 100m − 20m = 80m. New EPS = $124m / 80m = $1.55. Increase = ($1.55 − $1.24) / $1.24 = 25%. (Using surplus cash, net income is unchanged.) Traps: 10% applies the premium to EPS; 28% ignores the premium (836/38 = 22m shares, EPS = 124/78 = $1.59)."
      },
      {
        "q": "Based on Exhibit 2, SpeedyPro most likely repurchased shares using:",
        "options": [
          "open market purchases.",
          "a fixed-price tender offer.",
          "a negotiated purchase agreement."
        ],
        "answer": 1,
        "why": "A fixed-price tender offer normally requires a premium over the market price, consistent with SpeedyPro’s 10% premium. Open market purchases are made at market prices and can be timed to avoid price impact. Negotiated (direct) purchases are almost as likely to occur below the market price as above it, especially when sellers need liquidity."
      },
      {
        "q": "The best answer to Carlyle’s question about the potential violation of the debt covenants is that the covenant:",
        "options": [
          "is not violated if Avignon repurchases shares.",
          "will be violated if Avignon uses debt to finance the repurchase.",
          "will be violated if Avignon uses the surplus cash to finance the repurchase."
        ],
        "answer": 1,
        "why": "Debt = 30% × C$3,600m = C$1,080m. A repurchase reduces equity by C$155m to C$3,445m. Cash-financed: D/E = 1,080 / 3,445 = 31.3% (below 35%). Debt-financed: D/E = (1,080 + 155) / 3,445 = 35.8%, above the 35% limit, so the covenant is violated only if the buyback is financed with debt."
      }
    ]
  },
  {
    "id": "carlisle",
    "title": "Julie Carlisle: Esteban Blake",
    "topic": "Portfolio Management",
    "reading": "Economics and Investment Markets",
    "body": [
      [
        "p",
        "Julie Carlisle is a financial planner at a large wealth management firm. One of her clients, Esteban Blake, just received a sizable inheritance. He invests a portion of the inheritance in an annuity that will immediately increase his income by a substantial amount. He enlists Carlisle’s help to invest the remaining amount of the inheritance."
      ],
      [
        "p",
        "Blake informs Carlisle that he would like some short-term bonds in his portfolio. Carlisle proposes purchasing a one-year domestic government zero-coupon bond. It has a face value of $100 and is currently priced at $96.37. Carlisle estimates the one-year real risk-free rate at 1.15% and expects inflation over the next year to be 2.25%."
      ],
      [
        "p",
        "In an effort to provide Blake with some exposure to international markets, Carlisle proposes three countries to look for investment opportunities. Selected data on the three countries are presented in Exhibit 1."
      ],
      [
        "table",
        {
          "title": "Exhibit 1: Selected Macroeconomic Data",
          "head": [
            "",
            "Nominal GDP Growth",
            "Inflation Rate",
            "Volatility of Real GDP Growth",
            "Yield Curve Shape",
            "Trailing 12-Month Equity Index P/E"
          ],
          "rows": [
            [
              "Country #1",
              "6.5%",
              "4.0%",
              "Low",
              "Flat",
              "16.5"
            ],
            [
              "Country #2",
              "5.0%",
              "2.5%",
              "High",
              "Upward slope",
              "17.3"
            ],
            [
              "Country #3",
              "3.5%",
              "2.0%",
              "Low",
              "Flat",
              "18.2"
            ]
          ]
        }
      ],
      [
        "p",
        "In her analysis, Carlisle observes that the spread between the three-year default-free nominal bond and the default-free real zero-coupon bond in Country #3 is 2.0%."
      ],
      [
        "p",
        "Blake expresses concern that stocks may be currently overvalued in Country 3 given its 20-year historical equity index P/E of 16.0. Carlisle comments, “I think the equilibrium P/E in Country #3 has increased because of changes in market conditions.”"
      ],
      [
        "p",
        "Carlisle predicts that Country #3 will slip into a recession next quarter. She thinks it will be short-lived, lasting only 12 months or so, and considers the impact of such a recession on the performance of the country’s stocks and bonds."
      ],
      [
        "table",
        {
          "title": "Exhibit 2: Three-Year Corporate Bonds from Country #3",
          "head": [
            "Corporate Bond",
            "Moody’s Investors Service Rating",
            "Spread*"
          ],
          "rows": [
            [
              "Bond A",
              "Aaa",
              "1.4%"
            ],
            [
              "Bond B",
              "Baa1",
              "3.2%"
            ],
            [
              "Bond C",
              "B3",
              "5.3%"
            ]
          ],
          "note": "*Spread versus three-year sovereign bond"
        }
      ]
    ],
    "questions": [
      {
        "q": "Holding all else constant, the change in Blake’s income will most likely result in:",
        "options": [
          "an increase in his marginal utility of consumption.",
          "an increase in his inter-temporal rate of substitution.",
          "a decrease in his required risk premium for investing in risky assets."
        ],
        "answer": 2,
        "why": "The annuity substantially raises Blake’s income and wealth, which DECREASES his marginal utility of consumption (diminishing marginal utility: each extra dollar adds less satisfaction when you already have more). So the average loss of marginal utility from taking risk is smaller as wealth rises; he requires a lower risk premium and is willing to buy more risky assets. A is the opposite. B is wrong: with more current income, an extra unit of consumption today is worth less relative to the future, but the higher income also applies to future periods; the clear, testable effect is on the risk premium."
      },
      {
        "q": "The implied premium for inflation uncertainty for the one-year government zero-coupon bond proposed by Carlisle is closest to:",
        "options": [
          "0.23%.",
          "0.37%.",
          "1.10%."
        ],
        "answer": 1,
        "why": "Pricing a default-free nominal zero: P = [[Face|1 + l + θ + π]], where l = real risk-free rate, θ = expected inflation and π = premium for inflation uncertainty. So 1 + l + θ + π = [[100|96.37]] = 1.0377. With l = 1.15% and θ = 2.25%: π = 1.0377 − 1.0340 = 0.0037 = 0.37%."
      },
      {
        "q": "Based on the data in Exhibit 1, current real short-term interest rates would most likely be highest in:",
        "options": [
          "Country #1.",
          "Country #2.",
          "Country #3."
        ],
        "answer": 1,
        "why": "Real short-term rates rise with real GDP growth and with the volatility of real GDP growth. Real growth ≈ nominal growth − inflation: Country 1 = 6.5% − 4.0% = 2.5%, Country 2 = 5.0% − 2.5% = 2.5%, Country 3 = 3.5% − 2.0% = 1.5%. Countries 1 and 2 tie on growth, but Country 2 has HIGH growth volatility, so its real short-term rate is most likely the highest."
      },
      {
        "q": "The recent change in Country #3’s break-even inflation rate suggests that the expected rate of inflation over the next three years is:",
        "options": [
          "less than 2.0%.",
          "equal to 2.0%.",
          "greater than 2.0%."
        ],
        "answer": 0,
        "why": "The 2.0% spread between the nominal and real default-free yields is the break-even inflation rate (BEI) = expected inflation + a premium for uncertainty about future inflation. That premium is most likely positive (investors can’t predict inflation with confidence), so expected inflation must be below 2.0%."
      },
      {
        "q": "Which of the following changes in market conditions best supports Carlisle’s comment regarding the equilibrium P/E for Country #3?",
        "options": [
          "An increase in the equity risk premium",
          "A decrease in uncertainty about future inflation",
          "A decrease in expectation of future real earnings growth"
        ],
        "answer": 1,
        "why": "Stock prices are expected cash flows discounted at rates that include expected inflation, a premium for inflation uncertainty and the equity risk premium. Less uncertainty about future inflation lowers the discount rate, raising valuations and the equilibrium P/E, which would justify the current 18.2 P/E above the 16.0 historical average. A higher equity risk premium (A) or lower expected real earnings growth (C) would both LOWER the P/E."
      },
      {
        "q": "If Carlisle’s prediction about the economy of Country #3 is realized, the yield curve in Country #3 will most likely:",
        "options": [
          "remain flat.",
          "become upward sloping.",
          "become downward sloping."
        ],
        "answer": 1,
        "why": "The curve is flat now. In a recession central banks cut policy rates, pulling short-term yields down; long-term yields fall less because the central bank is expected to bring short rates back to normal as the recession ends. Short rates falling more than long rates makes the curve upward sloping."
      },
      {
        "q": "Based on Exhibit 2, if Carlisle’s prediction for Country #3 is realized, then over the next 12 months:",
        "options": [
          "Bond A would be expected to outperform Bond C.",
          "Bond B would be expected to outperform Bond A.",
          "Bond C would be expected to outperform Bond B."
        ],
        "answer": 0,
        "why": "In a recession credit spreads widen, and they widen most for low-quality issuers as investors sell high default-risk debt and trade up to quality. So higher-rated bonds outperform lower-rated ones: Aaa Bond A should outperform B3 Bond C. B and C have the ranking the wrong way round (lower quality outperforming)."
      }
    ]
  },
  {
    "id": "frazee",
    "title": "James Frazee: H&F Capital",
    "topic": "Portfolio Management",
    "reading": "Analysis of Active Portfolio Management",
    "body": [
      [
        "p",
        "James Frazee is chief investment officer at H&F Capital Investors. Frazee hires a third-party adviser to develop a custom benchmark for three actively managed balanced funds he oversees: Fund X, Fund Y, and Fund Z. (Balanced funds are funds invested in equities and bonds.) The benchmark needs to be composed of 60% global equities and 40% global bonds. The third-party adviser submits the proposed benchmark to Frazee, who rejects the benchmark based on the following concerns:"
      ],
      [
        "h",
        "Concern 1"
      ],
      [
        "p",
        "Many securities he wants to purchase are not included in the benchmark portfolio."
      ],
      [
        "h",
        "Concern 2"
      ],
      [
        "p",
        "One position in the benchmark portfolio will be somewhat costly to replicate."
      ],
      [
        "h",
        "Concern 3"
      ],
      [
        "p",
        "The benchmark portfolio is a float-adjusted, capitalization-weighted portfolio."
      ],
      [
        "p",
        "After the third-party adviser makes adjustments to the benchmark to alleviate Frazee’s concerns, Frazee accepts the benchmark portfolio. He then asks his research staff to develop risk and expected return forecasts for Funds X, Y, and Z as well as for the benchmark. The forecasts are presented in Exhibit 1."
      ],
      [
        "table",
        {
          "title": "Exhibit 1: Forecasted Portfolio Statistics for Funds X, Y, and Z and the Benchmark",
          "head": [
            "",
            "Fund X",
            "Fund Y",
            "Fund Z",
            "Benchmark"
          ],
          "rows": [
            [
              "Portfolio weights:",
              "",
              "",
              "",
              ""
            ],
            [
              " Global equities (%)",
              "60.0",
              "65.0",
              "68.0",
              "60.0"
            ],
            [
              " Global bonds (%)",
              "40.0",
              "35.0",
              "32.0",
              "40.0"
            ],
            [
              "Expected return (%)",
              "10.0",
              "11.6",
              "13.2",
              "9.4"
            ],
            [
              "Expected volatility (%)",
              "17.1",
              "18.7",
              "22.2",
              "16.3"
            ],
            [
              "Active risk (%)",
              "5.2",
              "9.2",
              "15.1",
              "N/A"
            ],
            [
              "Sharpe ratio (SR)",
              "0.45",
              "0.50",
              "0.49",
              "0.44"
            ]
          ],
          "note": "Data are based on a risk-free rate of 2.3%."
        }
      ],
      [
        "p",
        "Frazee decides to add a fourth offering to his group of funds, Fund W, which will use the same benchmark as in Exhibit 1. Frazee estimates Fund W’s information ratio to be 0.35. He is considering adding the following constraint to his portfolio construction model: Fund W would now have maximum over- and underweight constraints of 7% on single-country positions."
      ],
      [
        "p",
        "Frazee conducts a search to hire a manager for the global equity portion of Fund W and identifies three candidates. He asks the candidates to prepare risk and return forecasts relative to Fund W’s benchmark based on their investment strategy, with the only constraint being no short selling. Each candidate develops independent annual forecasts with active return projections that are uncorrelated and constructs a portfolio made up of stocks that are diverse both geographically and across economic sectors. Selected data for the three candidates’ portfolios are presented in Exhibit 2."
      ],
      [
        "table",
        {
          "title": "Exhibit 2: Forecasted Portfolio Data for Equity Portion of Fund W",
          "head": [
            "",
            "Candidate A",
            "Candidate B",
            "Candidate C"
          ],
          "rows": [
            [
              "Rebalancing",
              "Annually",
              "Annually",
              "Annually"
            ],
            [
              "Number of securities",
              "100",
              "64",
              "36"
            ],
            [
              "Information ratio (IR)",
              "0.582",
              "0.746",
              "0.723"
            ],
            [
              "Transfer coefficient (TC)",
              "0.832",
              "0.777",
              "0.548"
            ],
            [
              "Information coefficient*",
              "0.07",
              "0.12",
              "0.22"
            ]
          ],
          "note": "*Information coefficient based on previously managed funds."
        }
      ],
      [
        "p",
        "Frazee asks Candidate C to re-evaluate portfolio data given the following changes:"
      ],
      [
        "h",
        "Change 1"
      ],
      [
        "p",
        "Fix the number of securities to 50."
      ],
      [
        "h",
        "Change 2"
      ],
      [
        "p",
        "Rebalance on a semi-annual basis."
      ],
      [
        "h",
        "Change 3"
      ],
      [
        "p",
        "Add maximum over- or underweight constraints on sector weightings."
      ]
    ],
    "questions": [
      {
        "q": "Which of Frazee’s concerns best justifies his decision to reject the proposed benchmark?",
        "options": [
          "Concern 1",
          "Concern 2",
          "Concern 3"
        ],
        "answer": 0,
        "why": "A valid benchmark should be representative of the manager’s investment approach. If many securities Frazee wants to buy are not in it, it isn’t representative. Concern 2 is weaker: “somewhat costly” to replicate one position doesn’t make the benchmark unusable. Concern 3 describes a generally POSITIVE feature (float-adjusted cap weighting is investable and reflects the market)."
      },
      {
        "q": "Based on Exhibit 1, the expected active return from asset allocation for Fund X is:",
        "options": [
          "negative.",
          "zero.",
          "positive."
        ],
        "answer": 1,
        "why": "Active return from asset allocation = Σ Δwⱼ × R_B,j, where Δwⱼ is the portfolio weight minus the benchmark weight in asset class j and R_B,j is the benchmark return of that class: here Δw_equities × R_B,e + Δw_bonds × R_B,b. Fund X holds exactly the benchmark weights (60% equities, 40% bonds), so both Δw are zero and the return from asset allocation is zero. Its active return must come from security selection."
      },
      {
        "q": "Based on Exhibit 1, which fund is expected to produce the greatest consistency of active return?",
        "options": [
          "Fund X",
          "Fund Y",
          "Fund Z"
        ],
        "answer": 2,
        "why": "The information ratio measures the consistency of active return: IR = [[R_P − R_B|σ(R_A)]]. Fund X: (10.0 − 9.4) / 5.2 = 0.12. Fund Y: (11.6 − 9.4) / 9.2 = 0.24. Fund Z: (13.2 − 9.4) / 15.1 = 0.25. Fund Z has the highest IR. Don’t confuse with the Sharpe ratio (Fund Y is highest on SR) or with lowest active risk (Fund X)."
      },
      {
        "q": "Based on Exhibit 1, combining Fund W with a fund that replicates the benchmark would produce a Sharpe ratio closest to:",
        "options": [
          "0.44.",
          "0.56.",
          "0.89."
        ],
        "answer": 1,
        "why": "With the optimal amount of active risk, SR_P² = SR_B² + IR². So SR_P = √(0.44² + 0.35²) = √(0.1936 + 0.1225) = √0.3161 = 0.56. Trap: 0.79 / 0.89 come from adding the ratios instead of their squares; 0.44 is just the benchmark."
      },
      {
        "q": "If Frazee added the assumption he is considering in Fund W’s portfolio construction, it would most likely result in:",
        "options": [
          "a decrease in the optimal aggressiveness of the active strategy.",
          "the information ratio becoming invariant to the level of active risk.",
          "an increase in the transfer of active return forecasts into active weights."
        ],
        "answer": 0,
        "why": "Country over/underweight limits are constraints, and constraints REDUCE the transfer coefficient (TC). Optimal active risk is σ_A* = TC × [[IR*|SR_B]] × σ_B, so a lower TC lowers the optimal active risk: the strategy should be less aggressive. B is wrong: the IR is invariant to the level of active risk only for an UNCONSTRAINED portfolio; for a constrained one, the IR generally falls as aggressiveness rises. C is the opposite effect."
      },
      {
        "q": "Based on the data presented in Exhibit 2, the candidate with the greatest skill at achieving active returns appears to be:",
        "options": [
          "Candidate A.",
          "Candidate B.",
          "Candidate C."
        ],
        "answer": 1,
        "why": "The IR measures the consistency of active return generation on a risk-adjusted basis; a higher IR generally indicates more skill. Candidate B has the highest IR (0.746) vs. Candidate C (0.723) and Candidate A (0.582). Trap: Candidate C has the highest IC (0.22), but its low TC (0.548) and small breadth (36 stocks) mean less of that forecasting skill turns into active return."
      },
      {
        "q": "Which proposed change to Fund W would most likely decrease Candidate C’s information ratio?",
        "options": [
          "Change 1",
          "Change 2",
          "Change 3"
        ],
        "answer": 2,
        "why": "Fundamental law: IR = TC × IC × √BR, where BR is breadth (the number of independent active bets per year). Change 3 adds sector over/underweight caps, a constraint that reduces the correlation between optimal and actual active weights, i.e. lowers TC, so the IR falls. Change 1 (36 → 50 securities) and Change 2 (annual → semi-annual rebalancing) both increase breadth, which RAISES the IR."
      }
    ]
  },
  {
    "id": "cadler",
    "title": "Maria Cadler: Voeltz Asset Management",
    "topic": "Ethical and Professional Standards",
    "reading": "Guidance for Standards I–VII",
    "body": [
      [
        "p",
        "Over the last 15 years, Maria Cadler, CFA, was the Director of Research at Voeltz Asset Management, supervising more than 10 research analysts. Her team was responsible for making investment recommendations to the portfolio managers who determined which investment recommendations to implement. Voeltz’s annual investment performance was always in the top quartile when compared to other investment firms managing similar portfolios. However, over the last 6 months, their rolling 12-month performance had dropped to the fourth quartile. Voeltz’s clients were losing money despite the market rising. As a result, she and several others were terminated. To prepare for her employment search, she updates her LinkedIn profile by adding the following statement, “I was part of a team of investment professionals with a successful investment performance track record, with investment returns consistently ranking in the top quartile when compared to similar investment managers. As a result of our success, I was offered and subsequently accepted a board seat for a local charitable organization. Working with them has been so rewarding, despite taking a considerable amount of my time during evenings and weekends.”"
      ],
      [
        "p",
        "In preparation for job interviews, Cadler reaches out to Voeltz’s clients, former colleagues, and vendors to ask if they would write her a letter of recommendation. She makes the following requests to:"
      ],
      [
        "h",
        "Abby"
      ],
      [
        "p",
        "“Each year, you have given my team lots of kudos for our investment research and investment recommendations. I’m wondering if you wouldn’t mind writing a letter of recommendation for me. I can give you the details of my role as team leader so you can include them.”"
      ],
      [
        "h",
        "Robert"
      ],
      [
        "p",
        "“Since we both find ourselves looking for a job, how about we provide letters of recommendation for each other? I can provide some key points I would like for you to highlight, and you’re welcome to provide points for me to include in my recommendation of you.”"
      ],
      [
        "h",
        "Fredrica"
      ],
      [
        "p",
        "“When I get a new position, I’d love to recommend your services, as I appreciate the independent economic research reports you provided to my team. In the meantime, could you please write me a recommendation that mentions what great equity research reports my team provided to our clients?”"
      ],
      [
        "p",
        "During an interview with a potential employer, Cadler describes a time when quick thinking was rewarded with big returns for her clients: “We did our own extensive research and also received broker-sponsored company research. One time, we had just completed a research report on a large-cap company offering a competing product to one of the small-cap companies in which we had heavily invested. We determined it was time to sell the small-cap company, as it would likely lose considerable market share on its most popular product. In order to execute as quickly as we could before the market made the same determination, we sold 100% of the holdings in the small-cap company and bought the large-cap company for all of our discretionary clients. To expedite the small-cap trades, we utilized a few stockbrokers not yet on our approved broker list because our existing brokers told us they were unable to complete all of the trades requested in a timely manner. We found that it is critical to act fast when trading in small-cap shares. As a result, we were able to obtain incredible returns for most of our clients.”"
      ],
      [
        "p",
        "The potential employer stated, “From your description of the large-cap trade, it sounds as if you may not have treated your non-discretionary clients equitably. If you were to work for us, how would you ensure all clients are treated fairly?” Cadler responded, “While I could make multiple recommendations, here are three:"
      ],
      [
        "h",
        "Recommendation 1"
      ],
      [
        "p",
        "Make sure any changes to investment recommendations are communicated equitably to all clients, making sure those clients who acted on any prior recommendations are notified."
      ],
      [
        "h",
        "Recommendation 2"
      ],
      [
        "p",
        "Ask all clients to sign a waiver stating they acknowledge that when trading illiquid shares, fair dealing will not be possible as allocation will be on a first-come, first-served basis. We want to ensure clients have full disclosure of our trade allocation process."
      ],
      [
        "h",
        "Recommendation 3"
      ],
      [
        "p",
        "Prorate trades, both when buying and selling, in those times when 100% of the orders can’t be executed so all clients are able to benefit. To facilitate this, block trading should be utilized when available and company policies should reflect best execution procedures.”"
      ]
    ],
    "questions": [
      {
        "q": "In the initial update of her LinkedIn profile, Cadler most likely complied with which of the Standards?",
        "options": [
          "Misrepresentation",
          "Disclosure of Conflicts",
          "Performance Presentation"
        ],
        "answer": 1,
        "why": "Standard VI(A) Disclosure of Conflicts: she disclosed the charity board seat and that it takes considerable evening and weekend time. That could reasonably interfere with duties to a future employer, and disclosing it lets the employer discuss it with her. She VIOLATED I(C) Misrepresentation and III(D) Performance Presentation by citing only the top-quartile record and omitting the recent fourth-quartile performance: performance information must be fair, accurate and complete."
      },
      {
        "q": "Which of Cadler’s recommendation requests most likely complies with Standard I(B): Independence and Objectivity now and/or in the future? Her request to:",
        "options": [
          "Abby",
          "Robert",
          "Fredrica"
        ],
        "answer": 0,
        "why": "Abby is a Voeltz client with first-hand experience of the team’s work and no conflict that would compromise her objectivity. Robert: an exchange of favorable letters gives both something to gain, so neither is independent or objective. Fredrica: Cadler implies she will recommend Fredrica’s services to her next employer in return for a favorable letter, a benefit that could compromise Cadler’s future independence in selecting research providers; Fredrica also likely has no first-hand knowledge of the equity research reports she’d be praising."
      },
      {
        "q": "Cadler’s quick-thinking action most likely violated Standard V(A): Diligence and Reasonable Basis because:",
        "options": [
          "outside parties influenced their investment action.",
          "of the timing and execution of the small-cap share trades.",
          "of an inappropriate swap of small-cap to large-cap shares."
        ],
        "answer": 1,
        "why": "Using brokers not on the approved list skipped the firm’s due-diligence process for brokers and exposed clients to the risk of poor or untimely execution: a lack of diligence in taking investment action. The decision itself had a reasonable basis (their own extensive research on the competing product), so the swap (C) wasn’t inappropriate, and there is no sign they relied solely on outside (broker-sponsored) research (A)."
      },
      {
        "q": "Which of Cadler’s responses to the question regarding non-discretionary clients would most likely violate the Standards of Professional Conduct?",
        "options": [
          "Recommendation 1",
          "Recommendation 2",
          "Recommendation 3"
        ],
        "answer": 1,
        "why": "Standard III(B) Fair Dealing: a waiver accepting first-come, first-served allocation does not remove the duty to treat clients fairly; client consent can never override the duty of fairness and loyalty to patently unfair allocation procedures. Recommendation 1 (communicate changed recommendations to all clients, especially those who acted on the earlier advice) and Recommendation 3 (pro-rate partially filled orders, use block trades, best execution) are recommended procedures under III(B)."
      }
    ]
  },
  {
    "id": "thorpe",
    "title": "Lucas Thorpe: Savanna Honey",
    "topic": "Ethical and Professional Standards",
    "reading": "Guidance for Standards I–VII",
    "body": [
      [
        "p",
        "One month ago, Lucas Thorpe, a portfolio manager for an investment management firm and a CFA Program Level II candidate, received a letter from Keiko Okada, CFA, the designated officer for the CFA Institute Professional Conduct Program (PCP). The letter explained that the PCP had received a complaint, accusing him of violating the CFA Institute Code of Ethics and Standards of Professional Conduct. Okada requested Thorpe’s cooperation, asking him to explain why he sold publicly traded Savanna Honey Products (Savanna) shares for both his personal and client accounts. Okada noted the anonymous complaint she received indicated that sales were executed one day after his research visit to Savanna and the day before Savanna released an earnings warning due to an expected significant drop in profit margins."
      ],
      [
        "p",
        "In his defense, Thorpe responded in a letter to Okada as follows: “I arranged the research visit to Savanna as part of my routine review of the company. We’re a small firm, so the portfolio managers do their own analysis. The earnings warning information I received from the chief financial officer (CFO) of Savanna was freely given; I didn’t ask for it. The CFO even stated he had been giving the same information to any analyst who had visited in the last two days. My clients would have been harmed if I had not sold, because other managers would be selling before me. Besides, what I did is not illegal in my market. I treated my clients fairly; I sold Savanna shares for all my clients before I sold my own.”"
      ],
      [
        "p",
        "Concerned about the strength of his defense and to avoid any additional violations, Thorpe consulted with the firm’s compliance officer. Consequently, to support his claim that he did not violate Standard III(B), Fair Dealing, and without violating his firm’s policies or any applicable local laws, Thorpe provided Okada copies of documents for all the trades executed for his clients, including contact details and the percentage of assets under management (AUM) the trades represented."
      ],
      [
        "p",
        "Thorpe further stated in his letter to Okada that he received from the CFO six very large gift baskets full of high-end honey products worth USD100 per basket. He explained his firm has a very strict policy about accepting gifts valued at more than USD100 per gift. Thorpe accepted and distributed the gift baskets on behalf of himself and his five colleagues. However, he noted that the gifts in no way influenced his investment decision."
      ],
      [
        "p",
        "Following Thorpe’s submission to the CFA Institute Professional Conduct Program, Okada informs him he has been found in violation of the CFA Institute Standards of Professional Conduct and will be publicly sanctioned and prohibited from future participation in the CFA Program exams. Thorpe contests the sanction and asks to present his case to a Disciplinary Review Committee Hearing Panel. While presenting his case, Thorpe mentions he regularly collects information he finds in the public domain when determining investment recommendations for his clients’ portfolios. He states that for “fast-moving consumer goods” (FMCG), he collects data by talking to industry experts who are former consultants of competing firms, making his own observations of the number of times grocery store shelves are restocked as well as gathering information from open specialty social media sites."
      ]
    ],
    "questions": [
      {
        "q": "As a result of Thorpe’s admission he traded in Savanna shares, which Standard will Okada least likely investigate for a possible violation?",
        "options": [
          "Knowledge of the Law",
          "Loyalty, Prudence, and Care",
          "Material Nonpublic Information"
        ],
        "answer": 1,
        "why": "III(A) Loyalty, Prudence, and Care is least likely at issue: he put clients’ interests ahead of his own by selling for all clients before himself. II(A) Material Nonpublic Information is the obvious issue: the earnings warning was material (would move the price) and not yet public, and being “freely given” or shared with a few visiting analysts doesn’t make it public. I(A) Knowledge of the Law is also at issue: even though insider trading is legal in his market, he must follow the stricter CFA Standards."
      },
      {
        "q": "Should Thorpe revise how he submitted his defense of the Standard relating to fair dealing to avoid violating the Standard relating to preservation of confidentiality?",
        "options": [
          "No",
          "Yes, he must delete the contact details",
          "Yes, he must remove the AUM percentage details"
        ],
        "answer": 0,
        "why": "Information provided to the Professional Conduct Program as evidence in an investigation is kept in the strictest confidence, so a member or candidate who gives confidential client information to the PCP does not violate III(E) Preservation of Confidentiality. No need to remove contact or AUM details."
      },
      {
        "q": "Did Thorpe most likely violate the Standards by accepting the CFO’s six gift packages?",
        "options": [
          "No",
          "Yes, he violated the Standard relating to misconduct",
          "Yes, he violated the Standard relating to independence and objectivity"
        ],
        "answer": 0,
        "why": "No violation. I(D) Misconduct: he complied with his firm’s policy (no gifts over USD100 per gift); the six USD100 baskets were shared among six people, one each. I(B) Independence and Objectivity: the gifts were unlikely to compromise his objectivity; his decision was driven by protecting clients ahead of the expected price drop."
      },
      {
        "q": "Which of Thorpe’s information sources described to the Hearing Panel is most susceptible to resulting in Thorpe violating the Standard relating to material nonpublic information?",
        "options": [
          "Social media",
          "Industry experts",
          "Grocery turnover observations"
        ],
        "answer": 1,
        "why": "Expert networks are the risk: former consultants to competitors may still hold confidential, material nonpublic information, and members and candidates are responsible for not requesting or acting on such information from experts. Open specialty social media sites are public. His own observations of shelf restocking are public, non-material pieces of a mosaic, which is allowed under the mosaic theory."
      }
    ]
  },
  {
    "id": "sedgwick",
    "title": "Kyra Johnson: Sedgwick Investment Management",
    "topic": "Ethical and Professional Standards",
    "reading": "Guidance for Standards I–VII",
    "body": [
      [
        "p",
        "Kyra Johnson, CFA, was recently hired by Sedgwick Investment Management (Sedgwick) as its new chief executive officer. Sedgwick’s parent company owns several subsidiaries in the financial services industry. Although there are currently no outstanding compliance issues, Sedgwick’s employees have a history of unethical behavior and always seem to be on the brink of additional violations. Sedgwick’s board of directors has tasked Johnson with bringing the firm’s policies and procedures into compliance with the CFA Institute Code of Ethics and Standards of Professional Conduct."
      ],
      [
        "p",
        "Shortly after Johnson was hired, the following announcement appeared in a major financial newspaper:"
      ],
      [
        "p",
        "“The board of directors of Sedgwick Investment Management is pleased to announce the hiring of Ms. Kyra Johnson, CFA, as the company’s new chief executive officer. She has demonstrated the ability to successfully complete a rigorous and comprehensive study program demanded by the CFA designation. The credibility of her CFA charter and the skills the CFA Program cultivates are key assets Ms. Johnson brings to Sedgwick. As a CFA charterholder, Ms. Johnson has superior qualities to manage our clients’ investments and guide the investment process. We are thrilled to have Ms. Kyra Johnson, CFA, as a member of the Sedgwick Investment Management team.”"
      ],
      [
        "p",
        "One of the first things Johnson did after arriving at the firm was to meet with Corey Tao, CFA, the firm’s chief compliance officer. Tao had been with the firm only a few months. He told Johnson the previous violations had primarily related to equity research, equity trading, and client confidentiality. After reviewing the summary of violations and the firm’s existing handbook, Johnson and Tao decided to submit the following recommendations regarding the firm’s trade allocation procedures for block trades to the board of directors for approval:"
      ],
      [
        "h",
        "Recommendation 1"
      ],
      [
        "p",
        "All accounts participating in a block trade should receive the same execution price and pay the same commission rate."
      ],
      [
        "h",
        "Recommendation 2"
      ],
      [
        "p",
        "Orders will be executed on a first-in, first-out basis, with consideration given to bundling orders for efficiency."
      ],
      [
        "p",
        "During the meeting Tao also mentioned to Johnson that the company handbook fails to address an area where he has some concerns and suggested the following policy addition, breaking it down into three points:"
      ],
      [
        "h",
        "Point 1"
      ],
      [
        "p",
        "Traders are prohibited from engaging in communication with brokers or dealers that would artificially cause a stock’s price to rise or fall."
      ],
      [
        "h",
        "Point 2"
      ],
      [
        "p",
        "Research analysts are not allowed to communicate unrealistic expectations regarding a company’s results that may affect the market price of a stock."
      ],
      [
        "h",
        "Point 3"
      ],
      [
        "p",
        "Portfolio managers are not allowed to enter into an agreement to promote the stock of any publicly listed company."
      ],
      [
        "p",
        "Tao later received a call from a news reporter who requested an interview. Tao is one of several people at the firm authorized to speak with the press. The reporter was interested in writing a piece about Johnson and the circumstances behind her joining the firm. They scheduled a time for the call and Tao forwarded to the reporter a copy of the board’s press release. Prior to the interview, Johnson told Tao to address the reporter’s questions truthfully but not to provide any details. When asked during the interview about the firm’s history of unethical behavior, Tao responded, “One of Ms. Johnson’s first acts was to strengthen the firm’s Code of Ethics, and although there had been a few prior incidences of questionable conduct, they were exaggerated in the press and happen in most investment firms.”"
      ]
    ],
    "questions": [
      {
        "q": "Which statement in Sedgwick’s hiring announcement is most likely an incorrect reference to the CFA Program or the CFA designation? The statement referencing:",
        "options": [
          "the skills the program cultivates.",
          "her ability to manage investments and guide the process.",
          "the demands of the study program for the CFA designation."
        ],
        "answer": 1,
        "why": "Standard VII(B): the designation must not be used in a way that misrepresents or exaggerates its meaning. Claiming that, as a charterholder, she “has superior qualities to manage our clients’ investments” is a claim of superiority, an exaggeration. Describing the rigorous study program and the credibility and skills the program cultivates are acceptable references."
      },
      {
        "q": "Are the recommendations submitted to the board of directors most likely consistent with the CFA Institute Recommended Procedures for Compliance with Standard III(B): Fair Dealing?",
        "options": [
          "Yes",
          "No with regard to Recommendation 1",
          "No with regard to Recommendation 2"
        ],
        "answer": 0,
        "why": "Both are recommended procedures for fair trade allocation under III(B): all accounts in a block trade get the same execution price and commission (Recommendation 1), and orders are executed first-in, first-out with bundling for efficiency (Recommendation 2). Other recommended procedures: pro-rata allocation of partial fills, written allocation policies, disclosure of the procedures."
      },
      {
        "q": "When considering the three points of Tao’s new policy as a whole, which CFA Institute Standard of Professional Conduct is he most likely addressing?",
        "options": [
          "Standard VI: Conflict of Interest",
          "Standard II: Integrity of Capital Markets",
          "Standard V: Investment Analysis, Recommendations, and Actions"
        ],
        "answer": 1,
        "why": "All three points target market manipulation, Standard II(B) (under Standard II, Integrity of Capital Markets): no communications that artificially move a stock’s price (Point 1), no misleading or unrealistic information that distorts prices (Point 2), and no agreements to promote a stock with intent to mislead (Point 3). Standard II(B) covers both information-based and transaction-based manipulation."
      },
      {
        "q": "Who has most likely violated the CFA Institute Standards of Professional Conduct regarding the newspaper interview?",
        "options": [
          "Tao",
          "Johnson",
          "Both Tao and Johnson"
        ],
        "answer": 0,
        "why": "Tao violated I(D) Misconduct. Downplaying the prior incidents alone might not be a violation (we don’t know the facts), but claiming such conduct “happens in most investment firms” is untrue and not something he could know; it reflects adversely on his integrity and competence. Johnson did nothing wrong: telling him to answer truthfully without giving details supports confidentiality (III(E)) and her supervisory duty."
      }
    ]
  },
  {
    "id": "flusk",
    "title": "Tina Ming: Flusk Pension Fund",
    "topic": "Portfolio Management",
    "reading": "Measuring and Managing Market Risk",
    "body": [
      [
        "p",
        "Tina Ming is a senior portfolio manager at Flusk Pension Fund (Flusk). Flusk’s portfolio is composed of fixed-income instruments structured to match Flusk’s liabilities. Ming works with Shrikant McKee, Flusk’s risk analyst."
      ],
      [
        "p",
        "Ming and McKee discuss the latest risk report. McKee calculated value at risk (VaR) for the entire portfolio using the historical method and assuming a lookback period of five years and 250 trading days per year. McKee presents VaR measures in Exhibit 1."
      ],
      [
        "table",
        {
          "title": "Exhibit 1: Flusk Portfolio VaR (in $ millions)",
          "head": [
            "Confidence Interval",
            "Daily VaR",
            "Monthly VaR"
          ],
          "rows": [
            [
              "95%",
              "1.10",
              "5.37"
            ]
          ]
        }
      ],
      [
        "p",
        "After reading McKee’s report, Ming asks why the number of daily VaR breaches over the last year is zero even though the portfolio has accumulated a substantial loss."
      ],
      [
        "p",
        "Next, Ming requests that McKee perform the following two risk analyses on Flusk’s portfolio:"
      ],
      [
        "h",
        "Analysis 1"
      ],
      [
        "p",
        "Use scenario analysis to evaluate the impact on risk and return of a repeat of the last financial crisis."
      ],
      [
        "h",
        "Analysis 2"
      ],
      [
        "p",
        "Estimate over one year, with a 95% level of confidence, how much Flusk’s assets could underperform its liabilities."
      ],
      [
        "p",
        "Ming recommends purchasing newly issued emerging market corporate bonds that have embedded options. Prior to buying the bonds, Ming wants McKee to estimate the effect of the purchase on Flusk’s VaR. McKee suggests running a stress test using a historical period specific to emerging markets that encompassed an extreme change in credit spreads."
      ],
      [
        "p",
        "At the conclusion of their conversation, Ming asks the following question about risk management tools: “What are the advantages of VaR compared with other risk measures?”"
      ]
    ],
    "questions": [
      {
        "q": "Based on Exhibit 1, Flusk’s portfolio is expected to experience:",
        "options": [
          "a minimum daily loss of $1.10 million over the next year.",
          "a loss over one month equal to or exceeding $5.37 million 5% of the time.",
          "an average daily loss of $1.10 million 5% of the time during the next 250 trading days."
        ],
        "answer": 1,
        "why": "VaR is the MINIMUM loss expected a given percentage of the time over a given period. A 5% VaR (95% confidence) of $5.37 million monthly means a loss of at least $5.37 million is expected in 5% of months; 95% of the time the loss should not exceed it. A drops the probability (it isn’t a loss every day). C is wrong because VaR is a minimum loss in the tail, not an average loss (that would be conditional VaR)."
      },
      {
        "q": "The number of Flusk’s VaR breaches most likely resulted from:",
        "options": [
          "using a standard normal distribution in the VaR model.",
          "using a 95% confidence interval instead of a 99% confidence interval.",
          "lower market volatility during the last year compared with the lookback period."
        ],
        "answer": 2,
        "why": "VaR is vulnerable to changes in volatility regime. If last year was calmer than the five-year lookback, VaR (built on the more volatile history) stays high, so daily losses can stay below it every day while still adding up to a large total loss. A: historical simulation uses actual past changes in risk factors, not a normal distribution (that’s the parametric method). B: a 99% level gives a LARGER VaR, so with zero breaches at 95% there would still be zero breaches."
      },
      {
        "q": "To perform Analysis 1, McKee should use historical bond:",
        "options": [
          "prices.",
          "yields.",
          "durations."
        ],
        "answer": 1,
        "why": "To replay a past crisis on today’s holdings, reprice the current bonds using historical yields of bonds with similar maturities; yields drive bond prices. Historical prices of today’s bonds may not exist, or may not reflect their current characteristics (e.g. maturity). Durations change with the passage of time, so past durations don’t describe the current bonds."
      },
      {
        "q": "The limitation of the approach requested for Analysis 1 is that it:",
        "options": [
          "omits asset correlations.",
          "precludes incorporating portfolio manager actions.",
          "assumes no deviation from historical market events."
        ],
        "answer": 2,
        "why": "A historical scenario replays one past period exactly; history will not repeat in exactly the same way. It is complementary to VaR but needs other measures (e.g. hypothetical scenarios, reverse stress tests). It does capture the correlations of that period (A is wrong)."
      },
      {
        "q": "The estimate requested in Analysis 2 is best described as:",
        "options": [
          "liquidity gap.",
          "surplus at risk.",
          "maximum drawdown."
        ],
        "answer": 1,
        "why": "Surplus at risk applies VaR to assets minus liabilities: how much the assets might underperform the liabilities at a given confidence level, usually over one year, which is exactly Analysis 2. Maximum drawdown is the largest peak-to-trough fall in value; a liquidity gap compares the timing of asset and liability cash flows."
      },
      {
        "q": "Which measure should McKee use to estimate the effect on Flusk’s VaR from Ming’s portfolio recommendation?",
        "options": [
          "Relative VaR",
          "Incremental VaR",
          "Conditional VaR"
        ],
        "answer": 1,
        "why": "Incremental VaR = VaR with the position − VaR without it: the change in portfolio VaR from adding, removing or resizing a position. Relative VaR (ex ante tracking error) measures risk versus a benchmark; conditional VaR is the average loss beyond the VaR level."
      },
      {
        "q": "When measuring the portfolio impact of the stress test suggested by McKee, which of the following is most likely to produce an accurate result?",
        "options": [
          "Marginal VaR",
          "Full revaluation of securities",
          "The use of sensitivity risk measures"
        ],
        "answer": 1,
        "why": "For an extreme credit-spread shock on option-embedded bonds, fully revaluing each security under the scenario’s rate and spread changes is most accurate, since it captures the non-linear option payoffs. Marginal VaR is the change in VaR for a tiny change in a position, not a scenario result. Sensitivity measures (duration/convexity, delta/gamma) are local approximations that break down for large moves and embedded options."
      },
      {
        "q": "The risk management tool referenced in Ming’s question:",
        "options": [
          "is widely accepted by regulators.",
          "takes into account asset liquidity.",
          "usually incorporates right-tail events."
        ],
        "answer": 0,
        "why": "VaR’s advantages: simple single number, comparable across portfolios and units, widely used in annual reports, and required or encouraged by global banking regulators. It does NOT capture liquidity risk, and it focuses on the left tail (losses), not right-tail (gain) events."
      }
    ]
  },
  {
    "id": "eastern",
    "title": "Randy Gorver: Eastern Regional Bank",
    "topic": "Portfolio Management",
    "reading": "Measuring and Managing Market Risk",
    "body": [
      [
        "p",
        "Randy Gorver, chief risk officer at Eastern Regional Bank, and John Abell, assistant risk officer, are currently conducting a risk assessment of several of the bank’s independent investment functions. These reviews include the bank’s fixed-income investment portfolio and an equity fund managed by the bank’s trust department. Gorver and Abell are also assessing Eastern Regional’s overall risk exposure."
      ],
      [
        "h",
        "Eastern Regional Bank Fixed-Income Investment Portfolio"
      ],
      [
        "p",
        "The bank’s proprietary fixed-income portfolio is structured as a barbell portfolio: About half of the portfolio is invested in zero-coupon Treasuries with maturities in the 3- to 5-year range (Portfolio P1), and the remainder is invested in zero-coupon Treasuries with maturities in the 10- to 15-year range (Portfolio P2). Georges Montes, the portfolio manager, has discretion to allocate between 40% and 60% of the assets to each maturity “bucket.” He must remain fully invested at all times. Exhibit 1 shows details of this portfolio."
      ],
      [
        "table",
        {
          "title": "Exhibit 1: US Treasury Barbell Portfolio",
          "head": [
            "",
            "P1 (3–5 Years)",
            "P2 (10–15 Years)"
          ],
          "rows": [
            [
              "Average duration",
              "3.30",
              "11.07"
            ],
            [
              "Average yield to maturity",
              "1.45%",
              "2.23%"
            ],
            [
              "Market value",
              "$50.3 million",
              "$58.7 million"
            ]
          ]
        }
      ],
      [
        "h",
        "Trust Department’s Equity Fund"
      ],
      [
        "p",
        "Use of Options: The trust department of Eastern Regional Bank manages an equity fund called the Index Plus Fund, with $325 million in assets. This fund’s objective is to track the S&P 500 Index price return while producing an income return 1.5 times that of the S&P 500. The bank’s chief investment officer (CIO) uses put and call options on S&P 500 stock index futures to adjust the risk exposure of certain client accounts that have an investment in this fund. The portfolio of a 60-year-old widow with a below-average risk tolerance has an investment in this fund, and the CIO has asked his assistant, Janet Ferrell, to propose an options strategy to bring the portfolio’s delta to 0.90."
      ],
      [
        "p",
        "Value at Risk: The Index Plus Fund has a value at risk (VaR) of $6.5 million at 5% for one day. Gorver asks Abell to write a brief summary of the portfolio VaR for the report he is preparing on the fund’s risk position."
      ],
      [
        "h",
        "Combined Bank Risk Exposures"
      ],
      [
        "p",
        "The bank has adopted a new risk policy, which requires forward-looking risk assessments in addition to the measures that look at historical risk characteristics. Management has also become very focused on tail risk since the subprime crisis and is evaluating the bank’s capital allocation to certain higher-risk lines of business. Gorver must determine what additional risk metrics to include in his risk reporting to address the new policy. He asks Abell to draft a section of the risk report that will address the risk measures’ adequacy for capital allocation decisions."
      ]
    ],
    "questions": [
      {
        "q": "If Montes is expecting a 50 bp increase in yields at all points along the yield curve, which of the following trades is he most likely to execute to minimize his risk?",
        "options": [
          "Sell $35 million of P2 and reinvest the proceeds in three-year bonds",
          "Sell $15 million of P2 and reinvest the proceeds in three-year bonds",
          "Reduce the duration of P2 to 10 years and reduce the duration of P1 to 3 years"
        ],
        "answer": 1,
        "why": "To cut interest rate risk before yields rise, shorten duration, within the 40%–60% limit per bucket. Total = 50.3 + 58.7 = $109.0m. Selling $15m of P2 leaves 43.7 / 109.0 = 40.1% in P2 (the minimum allowed), with the proceeds at the shortest permitted maturity (3 years). Selling $35m would leave P2 at 23.7 / 109.0 = 21.7%, below the 40% floor. C cuts duration far less."
      },
      {
        "q": "Which of the following options strategies is Ferrell most likely to recommend for the client’s portfolio?",
        "options": [
          "Long calls",
          "Short calls",
          "Short puts"
        ],
        "answer": 1,
        "why": "An index-tracking portfolio has delta 1. To reach 0.90 the options must add negative delta. Long calls have delta 0 to +1, so short calls have delta 0 to −1: they lower the portfolio delta. Short puts have POSITIVE delta (long puts are 0 to −1), so they would raise it."
      },
      {
        "q": "Which of the following statements regarding the VaR of the Index Plus Fund is correct?",
        "options": [
          "The expected maximum loss for the portfolio is $6.5 million.",
          "Five percent of the time, the portfolio can be expected to experience a loss of at least $6.5 million.",
          "Ninety-five percent of the time, the portfolio can be expected to experience a one-day loss of no more than $6.5 million."
        ],
        "answer": 1,
        "why": "VaR is a minimum loss in the tail: on 5% of days the loss will be at least $6.5 million. It is not a maximum loss (A); losses can be far larger. C implies the fund has a LOSS on 95% of days; correctly, returns will be ≥ −$6.5 million on 95% of days, and those returns include gains."
      },
      {
        "q": "To comply with the new bank policy on risk assessment, which of the following is the best set of risk measures to add to the chief risk officer’s risk reporting?",
        "options": [
          "Conditional VaR, stress test, and scenario analysis",
          "Monte Carlo VaR, incremental VaR, and stress test",
          "Parametric VaR, marginal VaR, and scenario analysis"
        ],
        "answer": 0,
        "why": "The policy wants forward-looking measures and a focus on tail risk. Conditional VaR (expected loss beyond VaR) measures the tail; stress tests and scenario analysis apply historical or hypothetical extreme events to current holdings. The other sets mix in VaR variants and position-change measures (incremental, marginal VaR) that don’t address the tail or forward-looking requirement."
      },
      {
        "q": "Which of the following statements should not be included in Abell’s report to management regarding the use of risk measures in capital allocation decisions?",
        "options": [
          "VaR measures capture the increased liquidity risk during stress periods.",
          "Stress tests and scenario analysis can be used to evaluate the effect of outlier events on each line of business.",
          "VaR approaches that can accommodate a non-normal distribution are critical to understand relative risk across lines of business."
        ],
        "answer": 0,
        "why": "Statement A is false: VaR does not capture liquidity risk. With illiquid assets VaR can be understated even in normal markets, and liquidity squeezes often come with tail events, making it worse. B and C are valid points to include."
      }
    ]
  },
  {
    "id": "ima",
    "title": "Carol Kynnersley: Investment Management Advisers",
    "topic": "Portfolio Management",
    "reading": "Measuring and Managing Market Risk",
    "body": [
      [
        "p",
        "Carol Kynnersley is the chief risk officer at Investment Management Advisers (IMA). Kynnersley meets with IMA’s portfolio management team and investment advisers to discuss the methods used to measure and manage market risk and how risk metrics are presented in client reports."
      ],
      [
        "p",
        "The three most popular investment funds offered by IMA are the Equity Opportunities, the Diversified Fixed Income, and the Alpha Core Equity. The Equity Opportunities Fund is composed of two exchange-traded funds: a broadly diversified large-cap equity product and one devoted to energy stocks. Kynnersley makes the following statements regarding the risk management policies established for the Equity Opportunities portfolio:"
      ],
      [
        "h",
        "Statement 1"
      ],
      [
        "p",
        "IMA’s preferred approach to model value at risk (VaR) is to estimate expected returns, volatilities, and correlations under the assumption of a normal distribution."
      ],
      [
        "h",
        "Statement 2"
      ],
      [
        "p",
        "In last year’s annual client performance report, IMA stated that a hypothetical $6 million Equity Opportunities Fund account had a daily 5% VaR of approximately 1.5% of portfolio value."
      ],
      [
        "p",
        "Kynnersley informs the investment advisers that the risk management department recently updated the model for estimating the Equity Opportunities Fund VaR based on the information presented in Exhibit 1."
      ],
      [
        "table",
        {
          "title": "Exhibit 1: Equity Opportunities Fund—VaR Model Input Assumptions",
          "head": [
            "",
            "Large-Cap ETF",
            "Energy ETF",
            "Total Portfolio"
          ],
          "rows": [
            [
              "Portfolio weight",
              "65.0%",
              "35.0%",
              "100.0%"
            ],
            [
              "Expected annual return",
              "12.0%",
              "18.0%",
              "14.1%"
            ],
            [
              "Standard deviation",
              "20.0%",
              "40.0%",
              "26.3%"
            ]
          ],
          "note": "Correlation between ETFs: 0.90. Number of trading days/year: 250."
        }
      ],
      [
        "p",
        "For clients interested in fixed-income products, IMA offers the Diversified Fixed-Income Fund. Kynnersley explains that the portfolio’s bonds are all subject to interest rate risk. To demonstrate how fixed-income exposure measures can be used to identify and manage interest rate risk, Kynnersley distributes two exhibits featuring three hypothetical Treasury coupon bonds (Exhibit 2) under three interest rate scenarios (Exhibit 3)."
      ],
      [
        "table",
        {
          "title": "Exhibit 2: Fixed-Income Risk Measure",
          "head": [
            "Hypothetical Bond",
            "Duration"
          ],
          "rows": [
            [
              "Bond 1",
              "1.3"
            ],
            [
              "Bond 2",
              "3.7"
            ],
            [
              "Bond 3",
              "10.2"
            ]
          ]
        }
      ],
      [
        "table",
        {
          "title": "Exhibit 3: Interest Rate Scenarios",
          "head": [
            "Scenario",
            "Interest Rate Environment"
          ],
          "rows": [
            [
              "Scenario 1",
              "Rates increase 25 bps"
            ],
            [
              "Scenario 2",
              "Rates increase 10 bps"
            ],
            [
              "Scenario 3",
              "Rates decrease 20 bps"
            ]
          ]
        }
      ],
      [
        "p",
        "One of the investment advisers comments that a client recently asked about the performance of the Diversified Fixed-Income Fund relative to its benchmark, a broad fixed-income index. Kynnersley informs the adviser as follows:"
      ],
      [
        "h",
        "Statement 3"
      ],
      [
        "p",
        "The Diversified Fixed-Income Fund manager monitors the historical deviation between portfolio returns and benchmark returns. The fund prospectus stipulates a target deviation from the benchmark of no more than 5 bps."
      ],
      [
        "p",
        "Kynnersley concludes the meeting by reviewing the constraints IMA imposes on securities included in the Alpha Core Equity Fund. The compliance department conducts daily oversight using numerous risk screens and, when indicated, notifies portfolio managers to make adjustments. Kynnersley makes the following statement:"
      ],
      [
        "h",
        "Statement 4"
      ],
      [
        "p",
        "It is important that all clients investing in the fund be made aware of IMA’s compliance measures. The Alpha Core Equity Fund restricts the exposure of individual securities to 1.75% of the total portfolio."
      ]
    ],
    "questions": [
      {
        "q": "Based on Statement 1, IMA’s VaR estimation approach is best described as the:",
        "options": [
          "parametric method.",
          "historical simulation method.",
          "Monte Carlo simulation method."
        ],
        "answer": 0,
        "why": "The parametric (variance–covariance) method assumes normally distributed risk-factor returns and estimates VaR from expected returns, standard deviations and correlations. Historical simulation uses actual past changes in risk factors; Monte Carlo draws random outcomes from specified distributions (which need not be normal)."
      },
      {
        "q": "In Statement 2, Kynnersley implies that the portfolio:",
        "options": [
          "is at risk of losing $4,500 each trading day.",
          "value is expected to decline by $90,000 or more once in 20 trading days.",
          "has a 5% chance of falling in value by a maximum of $90,000 on a single trading day."
        ],
        "answer": 1,
        "why": "VaR = $6,000,000 × 1.5% = $90,000 is the MINIMUM loss expected on 5% of days. 5% of days ≈ 1 day in 20 (about once a month). A is wrong ($4,500 = 5% of $90,000, a meaningless figure); C wrongly calls VaR a maximum loss."
      },
      {
        "q": "Based only on Statement 2, the risk measurement approach:",
        "options": [
          "ignores right-tail events in the return distribution.",
          "is similar to the Sharpe ratio because it is backward looking.",
          "provides a relatively accurate risk estimate in both trending and volatile regimes."
        ],
        "answer": 0,
        "why": "VaR focuses on the left tail (losses), so right-tail events (potential gains) are ignored. B: VaR is forward looking (current holdings, potential loss), unlike the backward-looking, return-based Sharpe ratio. C: VaR is unreliable across regimes; a portfolio can lose close to VaR every day without a breach, and in low-volatility periods VaR looks low and understates losses when volatility returns."
      },
      {
        "q": "Based on Exhibit 1, the daily 5% VaR estimate is closest to:",
        "options": [
          "1.61%.",
          "2.42%.",
          "2.69%."
        ],
        "answer": 2,
        "why": "Convert annual to daily: mean = [[0.141|250]] = 0.000564; σ = [[0.263|√250]] = 0.016634. 5% VaR = E(R) − 1.65σ = 0.000564 − 1.65 × 0.016634 = −0.026882, a minimum loss of 2.69% on 5% of days. (The 26.3% total SD already reflects the 0.90 correlation: √(0.65²×0.20² + 0.35²×0.40² + 2×0.65×0.35×0.90×0.20×0.40) = 26.3%.)"
      },
      {
        "q": "Based only on Exhibits 2 and 3, it is most likely that under:",
        "options": [
          "Scenario 1, Bond 2 outperforms Bond 1.",
          "Scenario 2, Bond 1 underperforms Bond 3.",
          "Scenario 3, Bond 3 is the best performing security."
        ],
        "answer": 2,
        "why": "Percentage price change ≈ −D × [[Δy|1 + y]]. When rates fall 20 bps (Scenario 3), the highest-duration bond, Bond 3 (10.2), gains the most. When rates rise (Scenarios 1 and 2), the LOWEST-duration bond does best, so Bond 2 underperforms Bond 1 (A wrong) and Bond 1 outperforms Bond 3 (B wrong)."
      },
      {
        "q": "The risk measure referred to in Statement 3 is:",
        "options": [
          "active share.",
          "beta sensitivity",
          "ex post tracking error."
        ],
        "answer": 2,
        "why": "Ex post tracking error is the standard deviation of the HISTORICAL differences between portfolio and benchmark returns, used by traditional managers to monitor deviation from the benchmark (here a 5 bp target). Active share measures how much holdings differ from the benchmark (not returns); beta measures sensitivity to market moves."
      },
      {
        "q": "In Statement 4, Kynnersley describes a constraint associated with a:",
        "options": [
          "risk budget.",
          "position limit.",
          "stop-loss limit."
        ],
        "answer": 1,
        "why": "Position limits cap the market value of any one investment (in currency or % of net assets), controlling overconcentration: here 1.75% per security. A risk budget allocates total risk across activities or managers; a stop-loss limit forces action when losses reach a set level."
      }
    ]
  },
  {
    "id": "gwp",
    "title": "Kata Rom: Gimingham Wealth Partners",
    "topic": "Portfolio Management",
    "reading": "Backtesting and Simulation",
    "body": [
      [
        "p",
        "Kata Rom is an equity analyst working for Gimingham Wealth Partners (GWP), a large investment advisory company. Rom meets with Goran Galic, a Canadian private wealth client, to explain investment strategies used by GWP to generate portfolio alpha for its clients."
      ],
      [
        "p",
        "Rom states that GWP is recognized in the Canadian investment industry as a leading factor-based value portfolio manager and describes how GWP creates relevant investment strategies and explains GWP’s backtesting process. Rom notes the following:"
      ],
      [
        "h",
        "Statement 1"
      ],
      [
        "p",
        "Using historical data, backtesting approximates a real-life investment process to illustrate the risk–return tradeoff of a particular proposed investment strategy."
      ],
      [
        "h",
        "Statement 2"
      ],
      [
        "p",
        "Backtesting is used almost exclusively by quantitative investment managers and rarely by fundamental investment managers, who are more concerned with information such as forward estimates of company earnings, macroeconomic factors, and intrinsic values."
      ],
      [
        "p",
        "Galic, who is 62 years old, decides to allocate C$2 million (representing 10% of his net worth) to an account with GWP and stipulates that portfolio assets be restricted exclusively to domestic securities. Although GWP has not backtested its strategies with such a restriction, it has backtested its strategies using a global index that includes domestic securities. Rom shows the following risk measures to Galic for three factor portfolios."
      ],
      [
        "table",
        {
          "title": "Exhibit 1: Downside Risk Measures for Model Factors",
          "head": [
            "Risk Measure",
            "Factor 1",
            "Factor 2",
            "Factor 3"
          ],
          "rows": [
            [
              "Value at risk (VaR) (95%)",
              "(6.49%)",
              "(0.77%)",
              "(2.40%)"
            ],
            [
              "Conditional VaR (CVaR) (95%)",
              "(15.73%)",
              "(4.21%)",
              "(3.24%)"
            ],
            [
              "Maximum drawdown",
              "35.10%",
              "38.83%",
              "45.98%"
            ]
          ]
        }
      ],
      [
        "p",
        "Galic asks Rom, “What happens if the future is different from the past?” Rom gives the following replies:"
      ],
      [
        "h",
        "Statement 3"
      ],
      [
        "p",
        "Although backtesting can offer some comfort, you are correct that it does have a weakness: Backtesting generally does not capture the dynamic nature of financial markets and in particular may not capture extreme downside risk."
      ],
      [
        "h",
        "Statement 4"
      ],
      [
        "p",
        "As a result, we have captured extreme downside risk and the dynamic nature of financial markets by using the Value-at-Risk and Conditional Value-at-Risk measures."
      ],
      [
        "p",
        "In an effort to make Galic fully aware of the risks inherent in GWP’s strategies, Rom describes a recent study that investigated the return distributions of value and momentum factors that GWP uses to construct portfolios. The study found that these distributions were non-normal based on their negative skewness, excess kurtosis, and tail dependence. Rom indicated that investment strategies based on this type of data are prone to significantly higher downside risk. Rom informs Galic that GWP also uses a technique commonly referred to as scenario analysis to examine how strategies perform in different structural regimes. Exhibit 2 compares the performance of two of GWP’s factor allocation strategies in different regimes:"
      ],
      [
        "table",
        {
          "title": "Exhibit 2: Scenario Analysis Using the Sharpe Ratio",
          "head": [
            "Strategy/Regime",
            "High Volatility",
            "Low Volatility",
            "Recession",
            "Non-recession"
          ],
          "rows": [
            [
              "Strategy I",
              "0.88",
              "0.64",
              "0.20",
              "1.00"
            ],
            [
              "Strategy II",
              "1.56",
              "1.60",
              "1.76",
              "1.52"
            ]
          ]
        }
      ],
      [
        "p",
        "Galic is surprised to see that some of the backtest results are unfavorable. He asks, “Why has GWP not considered strategies that perform better in backtesting?” Galic recently met with Fastlane Wealth Managers, who showed much better performance results. The portfolio manager at Fastlane told Galic that the company selects the top-performing strategies after performing thousands of backtests."
      ]
    ],
    "questions": [
      {
        "q": "Which of Rom’s statements concerning backtesting is correct?",
        "options": [
          "Only Statement 1",
          "Only Statement 2",
          "Both Statement 1 and Statement 2"
        ],
        "answer": 0,
        "why": "Statement 1 is correct: backtesting approximates the real-life investment process with historical data to show a strategy’s risk–return trade-off. Statement 2 is wrong: backtesting fits quantitative and systematic styles most naturally, but fundamental managers also use it heavily."
      },
      {
        "q": "Which key parameter needs to be changed for a new backtest that includes Galic’s restrictions?",
        "options": [
          "Start and end dates",
          "Consideration of transaction costs",
          "Investment universe"
        ],
        "answer": 2,
        "why": "The investment universe is the set of securities the strategy may hold. Galic allows domestic securities only, so the backtest must use a domestic rather than global universe. His restriction doesn’t affect the start and end dates or whether transaction costs are included."
      },
      {
        "q": "Galic’s concern embedded in the question “What happens if the future is different from the past?” is a problem most relevant for which investment strategy evaluation technique?",
        "options": [
          "Sensitivity analysis",
          "Backtesting",
          "Monte Carlo simulation"
        ],
        "answer": 1,
        "why": "Backtesting implicitly assumes past returns are a guide to future returns, so a future unlike the past is its key weakness. Monte Carlo simulation does not rely on historical data (it draws from specified distributions), and sensitivity analysis varies those assumptions (e.g. the distributions) to test robustness."
      },
      {
        "q": "Which of the following conclusions of Exhibit 1 is least likely to be true?",
        "options": [
          "5% of the time, losses from Factor 1 would be at least 6.49%.",
          "When the VaR is exceeded in Factor 1, we should expect an average loss of 15.73%.",
          "5% of the time, losses from Factor 2 are likely to be worse than losses from Factor 1."
        ],
        "answer": 2,
        "why": "A correctly reads VaR (at least 6.49% loss 5% of the time). B correctly reads CVaR (average of losses beyond VaR = 15.73%). C is untrue: Factor 2’s VaR (0.77%) and CVaR (4.21%) are both SMALLER than Factor 1’s (6.49% and 15.73%), so its tail losses are less severe."
      },
      {
        "q": "Based on the statistical study performed by GWP, which of the following represents a suggested course of action if GWP were to conduct Monte Carlo simulation analyses on the factor strategies?",
        "options": [
          "Inverse transformation",
          "Bootstrapping",
          "Sensitivity analysis"
        ],
        "answer": 2,
        "why": "Factor returns are non-normal (negative skew, excess kurtosis, tail dependence), so best practice is sensitivity analysis: rerun the simulation with distributions that relax normality (e.g. fat-tailed, multivariate skewed t) to see how results change. Inverse transformation is just a way of generating random draws; bootstrapping (sampling with replacement) belongs to historical simulation."
      },
      {
        "q": "Based on Exhibit 1, which factor has the smallest downside risk as measured by the weighted average of all losses that exceed a threshold?",
        "options": [
          "Factor 1",
          "Factor 2",
          "Factor 3"
        ],
        "answer": 2,
        "why": "“Weighted average of all losses beyond a threshold” is the definition of CVaR (expected shortfall). Lowest CVaR: Factor 3 at 3.24% (vs 4.21% and 15.73%). Trap: Factor 2 has the smallest VaR (0.77%), but VaR is the threshold, not the average loss beyond it."
      },
      {
        "q": "The approach used by Fastlane Wealth Managers most likely incorporates:",
        "options": [
          "risk parity.",
          "data snooping.",
          "cross-validation."
        ],
        "answer": 1,
        "why": "Running thousands of backtests and presenting only the best performers is data snooping, a form of selection bias: some strategies look good by chance and are unlikely to repeat. Risk parity is a portfolio construction method (equal risk contributions using volatilities and correlations); cross-validation partitions data into training and test sets and actually helps guard against overfitting."
      },
      {
        "q": "Comparing the two strategies in Exhibit 2, the best risk-adjusted performance is demonstrated by:",
        "options": [
          "Strategy II in periods of low volatility and recession.",
          "Strategy I in periods of high volatility and non-recession.",
          "Strategy II in periods of high volatility and non-recession."
        ],
        "answer": 0,
        "why": "Strategy II has the higher Sharpe ratio in every regime. Its edge is largest in low volatility (1.60 − 0.64 = 0.96) and recession (1.76 − 0.20 = 1.56), vs only 0.68 in high volatility and 0.52 in non-recession. Strategy I never beats Strategy II."
      }
    ]
  },
  {
    "id": "fabc",
    "title": "Gabriela Torres: Fabricantes Conchos",
    "topic": "Derivatives",
    "reading": "Forward Commitments",
    "body": [
      [
        "p",
        "Gabriela Torres is the CFO of Fabricantes Conchos (FabC), an automobile parts manufacturer located in Chihuahua, Mexico. She is currently evaluating the firm’s debt structure and anticipated financing needs."
      ],
      [
        "p",
        "FabC sells most of its product to US auto companies and their suppliers through long-term contracts priced in US dollars. FabC’s debt is denominated in US dollars. Torres actively manages the firm’s interest rate risk profile using interest rate and fixed-income derivatives, specifically OTC forwards, futures, and swap contracts."
      ],
      [
        "p",
        "Torres explains to her deputy, Alejandro Gutiérrez, “The derivatives contracts we enter into are typically priced using a carry arbitrage model to have zero cost to us at origination. In addition to requiring current interest rates and coupon payments of the underlying bonds, the model makes three assumptions: (1) There are no transaction costs for buying and selling securities; (2) short-selling proceeds become available when the short is covered; and (3) we can borrow and lend at the same risk-free rate of interest.”"
      ],
      [
        "p",
        "Gutiérrez mentions a major new contract requiring FabC to increase its working capital by borrowing USD35 million in six months. Torres states she is concerned interest rates will rise substantially in the near future and is considering entering a long position (pay fixed) in a 6 × 24 forward rate agreement to lock in the price of the new loan. She asks Gutiérrez what the fixed rate would be using a 30/360 convention and the spot interest rates found in Exhibit 1."
      ],
      [
        "table",
        {
          "title": "Exhibit 1: USD Interest Rates",
          "head": [
            "Months",
            "Spot Interest Rate",
            "PV Factor"
          ],
          "rows": [
            [
              "6",
              "2.10%",
              "0.9896"
            ],
            [
              "12",
              "2.64%",
              "0.9743"
            ],
            [
              "18",
              "3.07%",
              "0.9560"
            ],
            [
              "24",
              "3.35%",
              "0.9372"
            ],
            [
              "30",
              "3.56%",
              "0.9183"
            ],
            [
              "36",
              "3.81%",
              "0.8974"
            ],
            [
              "42",
              "3.92%",
              "0.8794"
            ],
            [
              "48",
              "3.98%",
              "0.8627"
            ],
            [
              "54",
              "4.02%",
              "0.8468"
            ],
            [
              "60",
              "4.03%",
              "0.8323"
            ]
          ]
        }
      ],
      [
        "p",
        "Torres tells Gutiérrez, “If we issue a long-term bond, it makes more sense to enter a bond futures contract in order to hedge interest rate changes. Typically, bond futures are quoted with pricing that reflects interest accrued since the last coupon payment. Therefore, in markets where spot prices are quoted “clean” rather than “dirty,” there can be some disconnect between spot and futures prices. In addition, a conversion factor must be applied to quoted bond prices because more than one bond can be delivered to fulfill the terms of the contract. The short (selling) counterparty to the contract will always want to deliver the cheapest bond when the forward contract matures. The conversion factor attempts to adjust for differences in pricing between the bonds that can be delivered to fulfill a particular contract.”"
      ],
      [
        "p",
        "Torres continues, “We are about to enter into a five-year loan with semi-annual interest payments based on prevailing six-month MRR. I think it might make sense to simultaneously enter into a pay-fixed five-year interest rate swap with semi-annual payments to effectively convert that to a fixed-rate loan. Based on the interest rates shown in Exhibit 1, what would the fixed rate be?”"
      ]
    ],
    "questions": [
      {
        "q": "When discussing the assumptions of the carry arbitrage model, Torres is least likely correct regarding:",
        "options": [
          "borrowing costs.",
          "transaction costs.",
          "short-sale proceeds."
        ],
        "answer": 2,
        "why": "The carry arbitrage model assumes short-sale proceeds are available immediately to buy other securities, not only when the short is covered. A is wrong: borrowing and lending at the same risk-free rate is a real assumption of the model. B is wrong: no transaction costs (no market frictions) is also a real assumption."
      },
      {
        "q": "Gutiérrez’s fixed-rate calculation for the forward rate agreement should be closest to:",
        "options": [
          "3.73%.",
          "3.88%.",
          "5.59%."
        ],
        "answer": 0,
        "why": "A 6 × 24 FRA covers the 18-month period that starts in 6 months. With the 6-month spot rate (2.10%) and the 24-month spot rate (3.35%), 30/360:\nFRA = ([[1 + 0.0335 × (720/360)|1 + 0.0210 × (180/360)]] − 1) ÷ (540/360)\n= ([[1.0670|1.0105]] − 1) ÷ 1.5 = 0.05591 ÷ 1.5 = 3.73%.\nB (3.88%) wrongly treats the FRA as ending at month 30 (6 + 24), using the 30-month rate (3.56%) over a 24-month period; compounding geometrically instead of using MRR's simple-interest convention gives a similar wrong answer. C (5.59%) forgets to divide by the 1.5-year length of the period."
      },
      {
        "q": "Is Torres most likely correct in her description of bond forward pricing issues?",
        "options": [
          "Yes.",
          "No, she is incorrect with respect to accrued interest.",
          "No, she is incorrect with respect to the conversion factor."
        ],
        "answer": 1,
        "why": "Bond futures are generally quoted the same way as the spot bond market: clean (without accrued interest) where spot is clean, dirty where spot is dirty. So her claim that futures prices reflect accrued interest, creating a disconnect with clean spot prices, is wrong. C is wrong: she describes the conversion factor correctly. Several bonds can be delivered, and the factor puts their prices on an equal footing; the short will deliver the cheapest-to-deliver bond."
      },
      {
        "q": "Gutiérrez’s calculation of the annual fixed rate for the five-year swap should be closest to:",
        "options": [
          "3.45%.",
          "3.69%.",
          "4.03%."
        ],
        "answer": 1,
        "why": "The periodic swap rate = [[1 − last PV factor|sum of all PV factors]] = [[1 − 0.8323|9.0940]] = [[0.1677|9.0940]] = 1.844% per half-year. The sum adds the 10 semi-annual PV factors in Exhibit 1 (0.9896 + 0.9743 + … + 0.8323 = 9.0940). Annualize it with 2 payments a year: 1.844% × 2 = 3.69%. A (3.45%) is just the simple average of the 10 spot rates. C (4.03%) wrongly sets the swap rate equal to the 60-month spot rate; the swap rate is a par rate that weights every payment date, so it sits below the 5-year spot rate when the curve slopes upward."
      }
    ]
  },
  {
    "id": "troubadour",
    "title": "Donald Troubadour: Southern Shores Investments",
    "topic": "Derivatives",
    "reading": "Forward Commitments",
    "body": [
      [
        "p",
        "Donald Troubadour is a derivatives trader for Southern Shores Investments. The firm seeks arbitrage opportunities in the forward and futures markets using the carry arbitrage model."
      ],
      [
        "p",
        "Troubadour identifies an arbitrage opportunity relating to a fixed-income futures contract and its underlying bond. Current data on the futures contract and underlying bond are presented in Exhibit 1. The current annual compounded risk-free rate is 0.30%."
      ],
      [
        "table",
        {
          "title": "Exhibit 1: Current Data for Futures and Underlying Bond",
          "head": [
            "Futures Contract",
            "",
            "Underlying Bond",
            ""
          ],
          "rows": [
            [
              "Quoted futures price",
              "125.00",
              "Quoted bond price",
              "112.00"
            ],
            [
              "Conversion factor",
              "0.90",
              "Accrued interest since last coupon payment",
              "0.08"
            ],
            [
              "Time remaining to contract expiration",
              "Three months",
              "Accrued interest at futures contract expiration",
              "0.20"
            ],
            [
              "Accrued interest over life of futures contract",
              "0.00",
              "",
              ""
            ]
          ]
        }
      ],
      [
        "p",
        "Troubadour next gathers information on a Japanese equity index futures contract, the Nikkei 225 Futures Contract:"
      ],
      [
        "p",
        "Troubadour holds a long position in a Nikkei 225 futures contract that has a remaining maturity of three months. The continuously compounded dividend yield on the Nikkei 225 Stock Index is 1.1%, and the current stock index level is 16,080. The continuously compounded annual interest rate is 0.2996%."
      ],
      [
        "p",
        "Troubadour next considers an equity forward contract for Texas Steel, Inc. (TSI). Information regarding TSI common shares and a TSI equity forward contract is presented in Exhibit 2."
      ],
      [
        "h",
        "Exhibit 2: Selected Information for TSI"
      ],
      [
        "p",
        "The price per share of TSI’s common shares is $250."
      ],
      [
        "p",
        "The forward price per share for a nine-month TSI equity forward contract is $250.562289."
      ],
      [
        "p",
        "Assume annual compounding."
      ],
      [
        "p",
        "Troubadour takes a short position in the TSI equity forward contract. His supervisor asks, “Under which scenario would our position experience a loss?”"
      ],
      [
        "p",
        "Three months after contract initiation, Troubadour gathers information on TSI and the risk-free rate, which is presented in Exhibit 3."
      ],
      [
        "h",
        "Exhibit 3: Selected Data on TSI and the Risk-Free Rate (Three Months Later)"
      ],
      [
        "p",
        "The price per share of TSI’s common shares is $245."
      ],
      [
        "p",
        "The risk-free rate is 0.325% (quoted on an annual compounding basis)."
      ],
      [
        "p",
        "TSI recently announced its regular semiannual dividend of $1.50 per share that will be paid exactly three months before contract expiration."
      ],
      [
        "p",
        "The market price of the TSI equity forward contract is equal to the no-arbitrage forward price."
      ]
    ],
    "questions": [
      {
        "q": "Based on Exhibit 1 and assuming annual compounding, the arbitrage profit on the bond futures contract is closest to:",
        "options": [
          "0.4158.",
          "0.5356.",
          "0.6195."
        ],
        "answer": 1,
        "why": "1) No-arbitrage futures price = FV of (bond price + accrued interest today − PV of coupons) = (1.003)^0.25 × (112.00 + 0.08 − 0) = 112.1640.\n2) What the futures actually delivers = conversion factor × quoted futures price + accrued interest at expiration = 0.90 × 125 + 0.20 = 112.50 + 0.20 = 112.70.\n3) The futures is overpriced by 112.70 − 112.1640 = 0.5360 at expiration, so sell the futures and buy the bond (carry arbitrage). Profit today = PV = [[0.5360|(1.003)^0.25]] = 0.5356.\nA (0.4158) adds today's accrued interest (0.08) instead of the 0.20 accrued at expiration. C (0.6195) forgets to carry the bond's price forward at the risk-free rate (it uses 112.08 instead of 112.1640)."
      },
      {
        "q": "The current no-arbitrage futures price of the Nikkei 225 futures contract is closest to:",
        "options": [
          "15,951.81.",
          "16,047.86.",
          "16,112.21."
        ],
        "answer": 1,
        "why": "With continuous compounding, F0 = S0 × e^((r − δ) × T) = 16,080 × e^((0.002996 − 0.011) × 3/12) = 16,080 × e^(−0.002001) = 16,047.86. The dividend yield (1.1%) is above the interest rate (0.2996%), so the futures price is below the index level. A (15,951.81) uses a full year (T = 1) instead of three months. C (16,112.21) gets the sign wrong, adding the dividend yield's effect instead of subtracting it."
      },
      {
        "q": "Based on Exhibit 2, Troubadour should find that an arbitrage opportunity relating to TSI shares is",
        "options": [
          "not available.",
          "available based on carry arbitrage.",
          "available based on reverse carry arbitrage."
        ],
        "answer": 0,
        "why": "Carry arbitrage model price = S0 × (1 + r)^T = $250 × (1.003)^0.75 = $250.562289, using the 0.30% annual rate from the vignette. The market forward price is exactly $250.562289, so there is no mispricing. Carry arbitrage (B) would need the forward to be above the model price (sell forward, buy shares); reverse carry (C) would need it below (buy forward, short shares)."
      },
      {
        "q": "The most appropriate response to Troubadour’s supervisor’s question regarding the TSI forward contract is:",
        "options": [
          "a decrease in TSI’s share price, all else equal.",
          "an increase in the risk-free rate, all else equal",
          "a decrease in the market price of the forward contract, all else equal."
        ],
        "answer": 1,
        "why": "For the long, value = PV of (Ft − F0), where the new forward price Ft = FV(St + carry costs − carry benefits). A higher risk-free rate raises Ft, so the long gains and the short (Troubadour) loses. A is wrong: a lower share price lowers Ft, which is a gain for the short. C is wrong: a lower forward price is also a gain for the short."
      },
      {
        "q": "Based on Exhibits 2 and 3, and assuming annual compounding, the per share value of Troubadour’s short position in the TSI forward contract three months after contract initiation is closest to:",
        "options": [
          "$1.6549.",
          "$5.1561.",
          "$6.6549."
        ],
        "answer": 2,
        "why": "Six months remain on the contract, and the $1.50 dividend comes in three months.\n1) New no-arbitrage forward price: F0.25 = [$245 − [[$1.50|(1.00325)^0.25]]] × (1.00325)^0.5 = ($245 − $1.4988) × 1.001623 = $243.8966.\n2) Value to the LONG = [[F0.25 − F0|(1.00325)^0.5]] = [[$243.8966 − $250.562289|1.001623]] = −$6.6549.\n3) Troubadour is SHORT, so his position is worth +$6.6549 (the forward price fell from $250.56 to $243.90).\nB ($5.1561) ignores the dividend, which lowers the forward price. A ($1.6549) does not match the correct forward price of $243.8966 (it is off by exactly $5)."
      }
    ]
  },
  {
    "id": "factor-models",
    "title": "Portfolio Return Drivers: Models 1–3",
    "topic": "Quantitative Methods",
    "reading": "Multiple Regression",
    "body": [
      [
        "p",
        "You are a junior analyst at an asset management firm. Your supervisor asks you to analyze the return drivers for one of the firm’s portfolios. She asks you to construct a regression model of the portfolio’s monthly excess returns (RET) against three factors: the market excess return (MRKT), a value factor (HML), and the monthly percentage change in a volatility index (VIX). You collect the data and run the regression. After completing the first regression (Model 1), you review the ANOVA results with your supervisor."
      ],
      [
        "p",
        "Then, she asks you to create two more models by adding two more explanatory variables: a size factor (SMB) and a momentum factor (MOM). Your three models are as follows:"
      ],
      [
        "p",
        "Model 1: RETi = b0 + bMRKT MRKTi + bHML HMLi + bVIX VIXi + εi."
      ],
      [
        "p",
        "Model 2: RETi = b0 + bMRKT MRKTi + bHML HMLi + bVIX VIXi + bSMB SMBi + εi."
      ],
      [
        "p",
        "Model 3: RETi = b0 + bMRKT MRKTi + bHML HMLi + bVIX VIXi + bSMB SMBi + bMOM MOMi + εi."
      ],
      [
        "p",
        "The regression statistics and ANOVA results for the three models are shown in Exhibit 1, Exhibit 2, and Exhibit 3."
      ],
      [
        "table",
        {
          "title": "Exhibit 1: ANOVA Table for Model 1 — Regression Statistics",
          "head": [
            "",
            "Model 1"
          ],
          "rows": [
            [
              "Multiple R",
              "0.907"
            ],
            [
              "R-Squared",
              "0.823"
            ],
            [
              "Adjusted R-Sq.",
              "0.817"
            ],
            [
              "Standard Error",
              "3.438"
            ],
            [
              "Observations",
              "96.000"
            ]
          ]
        }
      ],
      [
        "table",
        {
          "title": "Exhibit 1 (continued): Model 1 Coefficients",
          "head": [
            "",
            "Coefficient",
            "Std. Error",
            "t-Stat.",
            "P-Value"
          ],
          "rows": [
            [
              "Intercept",
              "–0.999",
              "0.414",
              "–2.411",
              "0.018"
            ],
            [
              "MRKT",
              "1.817",
              "0.124",
              "14.683",
              "0.000"
            ],
            [
              "HML",
              "0.489",
              "0.118",
              "4.133",
              "0.000"
            ],
            [
              "VIX",
              "0.037",
              "0.018",
              "2.122",
              "0.037"
            ]
          ]
        }
      ],
      [
        "table",
        {
          "title": "Exhibit 1 (continued): Model 1 ANOVA",
          "head": [
            "",
            "Df",
            "SS",
            "MS",
            "F",
            "Significance F"
          ],
          "rows": [
            [
              "Regression",
              "3",
              "5058.430",
              "1686.143",
              "142.628",
              "0.000"
            ],
            [
              "Residual",
              "92",
              "1087.618",
              "11.822",
              "",
              ""
            ],
            [
              "Total",
              "95",
              "6146.048",
              "",
              "",
              ""
            ]
          ]
        }
      ],
      [
        "table",
        {
          "title": "Exhibit 2: ANOVA Table for Model 2 — Regression Statistics",
          "head": [
            "",
            "Model 2"
          ],
          "rows": [
            [
              "Multiple R",
              "0.923"
            ],
            [
              "R-Squared",
              "0.852"
            ],
            [
              "Adjusted R-Sq.",
              "0.846"
            ],
            [
              "Standard Error",
              "3.161"
            ],
            [
              "Observations",
              "96.000"
            ]
          ]
        }
      ],
      [
        "table",
        {
          "title": "Exhibit 2 (continued): Model 2 Coefficients",
          "head": [
            "",
            "Coefficient",
            "Std. Error",
            "t-Stat.",
            "P-Value"
          ],
          "rows": [
            [
              "Intercept",
              "–0.820",
              "0.383",
              "–2.139",
              "0.035"
            ],
            [
              "MRKT",
              "1.649",
              "0.121",
              "13.683",
              "0.000"
            ],
            [
              "HML",
              "0.434",
              "0.109",
              "3.970",
              "0.000"
            ],
            [
              "VIX",
              "0.025",
              "0.016",
              "1.516",
              "0.133"
            ],
            [
              "SMB",
              "0.563",
              "0.133",
              "4.223",
              "0.000"
            ]
          ]
        }
      ],
      [
        "table",
        {
          "title": "Exhibit 2 (continued): Model 2 ANOVA",
          "head": [
            "",
            "Df",
            "SS",
            "MS",
            "F",
            "Significance F"
          ],
          "rows": [
            [
              "Regression",
              "4",
              "5236.635",
              "1309.159",
              "131.000",
              "0.000"
            ],
            [
              "Residual",
              "91",
              "909.413",
              "9.994",
              "",
              ""
            ],
            [
              "Total",
              "95",
              "6146.048",
              "",
              "",
              ""
            ]
          ]
        }
      ],
      [
        "table",
        {
          "title": "Exhibit 3: ANOVA Table for Model 3 — Regression Statistics",
          "head": [
            "",
            "Model 3"
          ],
          "rows": [
            [
              "Multiple R",
              "0.923"
            ],
            [
              "R-Squared",
              "0.852"
            ],
            [
              "Adjusted R-Sq.",
              "0.844"
            ],
            [
              "Standard Error",
              "3.177"
            ],
            [
              "Observations",
              "96.000"
            ]
          ]
        }
      ],
      [
        "table",
        {
          "title": "Exhibit 3 (continued): Model 3 Coefficients",
          "head": [
            "",
            "Coefficient",
            "Std. Error",
            "t-Stat.",
            "P-Value"
          ],
          "rows": [
            [
              "Intercept",
              "–0.823",
              "0.385",
              "−2.136",
              "0.035"
            ],
            [
              "MRKT",
              "1.719",
              "0.280",
              "6.130",
              "0.000"
            ],
            [
              "HML",
              "0.412",
              "0.138",
              "2.989",
              "0.004"
            ],
            [
              "VIX",
              "0.026",
              "0.017",
              "1.532",
              "0.129"
            ],
            [
              "SMB",
              "0.553",
              "0.139",
              "3.987",
              "0.000"
            ],
            [
              "MOM",
              "–0.067",
              "0.242",
              "–0.276",
              "0.783"
            ]
          ]
        }
      ],
      [
        "table",
        {
          "title": "Exhibit 3 (continued): Model 3 ANOVA",
          "head": [
            "",
            "Df",
            "SS",
            "MS",
            "F",
            "Significance F"
          ],
          "rows": [
            [
              "Regression",
              "5",
              "5237.402",
              "1047.480",
              "103.751",
              "0.000"
            ],
            [
              "Residual",
              "90",
              "908.647",
              "10.096",
              "",
              ""
            ],
            [
              "Total",
              "95",
              "6146.048",
              "",
              "",
              ""
            ]
          ]
        }
      ],
      [
        "p",
        "Your supervisor asks for your assessment of the model that provides the best fit as well as the model that is best for predicting values of the monthly portfolio return. So, you calculate Akaike’s information criterion (AIC) and Schwarz’s Bayesian information criterion (BIC) for all three models, as shown in Exhibit 4."
      ],
      [
        "table",
        {
          "title": "Exhibit 4: Goodness-of-Fit Measures",
          "head": [
            "",
            "AIC",
            "BIC"
          ],
          "rows": [
            [
              "Model 1",
              "241.03",
              "251.29"
            ],
            [
              "Model 2",
              "225.85",
              "238.67"
            ],
            [
              "Model 3",
              "227.77",
              "243.16"
            ]
          ]
        }
      ]
    ],
    "questions": [
      {
        "q": "Determine which one of the following reasons for the change in adjusted R2 from Model 2 to Model 3 is most likely to be correct.",
        "options": [
          "Adjusted R2 decreases since adding MOM does not improve the overall explanatory power of Model 3.",
          "Adjusted R2 increases since adding SMB improves the overall explanatory power of Model 2.",
          "Adjusted R2 decreases since adding MOM improves the overall explanatory power of Model 3."
        ],
        "answer": 0,
        "why": "Model 3 is Model 2 plus MOM. Adjusted R² falls from 0.846 (Model 2) to 0.844 (Model 3), while R² stays at 0.852. Adding a variable never lowers R², but adjusted R² only rises if the new variable's |t-statistic| is above 1. MOM's t-statistic is −0.276, so it adds nothing and the penalty for the extra variable lowers adjusted R². B is wrong: the question is about the move from Model 2 to Model 3, and adjusted R² did not increase. C is wrong: a fall in adjusted R² means MOM did not improve explanatory power."
      },
      {
        "q": "Identify the model that provides the best fit.",
        "options": [
          "Model 1",
          "Model 2",
          "Model 3"
        ],
        "answer": 1,
        "why": "BIC is the preferred measure of goodness of fit, and lower is better. Model 2 has the lowest BIC (238.67, vs 251.29 for Model 1 and 243.16 for Model 3). BIC penalizes extra variables more heavily than AIC, so Model 3's useless MOM variable costs it here."
      },
      {
        "q": "Identify the model that should be used for prediction purposes.",
        "options": [
          "Model 1",
          "Model 2",
          "Model 3"
        ],
        "answer": 1,
        "why": "AIC is the preferred measure for choosing a model for prediction (forecasting), and lower is better. Model 2 has the lowest AIC (225.85, vs 241.03 for Model 1 and 227.77 for Model 3). Remember: AIC → prediction, BIC → best fit; with both, lower wins."
      },
      {
        "q": "Calculate the predicted RET for Model 3 given the assumed factor values: MRKT = 3, HML = –2, VIX = –5, SMB = 1, MOM = 3.",
        "options": [
          "3.732",
          "3.992",
          "4.555"
        ],
        "answer": 0,
        "why": "Model 3: RET = −0.823 + 1.719 MRKT + 0.412 HML + 0.026 VIX + 0.553 SMB − 0.067 MOM.\n= −0.823 + (1.719)(3) + (0.412)(−2) + (0.026)(−5) + (0.553)(1) − (0.067)(3)\n= −0.823 + 5.157 − 0.824 − 0.130 + 0.553 − 0.201 = 3.732.\nB (3.992) adds the VIX term (+0.130) instead of subtracting it. C (4.555) leaves out the intercept (−0.823). Use every coefficient in the model, even insignificant ones such as MOM."
      },
      {
        "q": "Calculate the joint F-statistic and determine whether SMB and MOM together contribute to explaining RET in Model 3 at a 1% significance level (use a critical value of 4.849).",
        "options": [
          "2.216, so SMB and MOM together do not contribute to explaining RET",
          "8.863, so SMB and MOM together do contribute to explaining RET",
          "9.454, so SMB and MOM together do contribute to explaining RET"
        ],
        "answer": 1,
        "why": "H0: bSMB = bMOM = 0; Ha: at least one is not zero. Model 1 (without SMB and MOM) is the restricted model; Model 3 is the unrestricted model.\nF = [[(SSE restricted − SSE unrestricted) ÷ q|SSE unrestricted ÷ (n − k − 1)]], with q = 2 restrictions and n − k − 1 = 96 − 5 − 1 = 90.\nF = [[(1,087.618 − 908.647) ÷ 2|908.647 ÷ 90]] = [[89.486|10.096]] = 8.863.\nThe test is one-tailed (right side). 8.863 > 4.849, so reject H0: SMB and MOM together help explain RET (driven by SMB, since MOM alone is insignificant). A and C don't follow from the correct formula."
      }
    ]
  },
  {
    "id": "aries-bigdata",
    "title": "Aaliyah Schultz: Aries Investments",
    "topic": "Quantitative Methods",
    "reading": "Big Data Projects",
    "body": [
      [
        "p",
        "Aaliyah Schultz is a fixed-income portfolio manager at Aries Investments. Schultz supervises Ameris Steele, a junior analyst."
      ],
      [
        "p",
        "A few years ago, Schultz developed a proprietary machine learning (ML) model that aims to predict downgrades of publicly-traded firms by bond rating agencies. The model currently relies only on structured financial data collected from different sources. Schultz thinks the model’s predictive power may be improved by incorporating sentiment data derived from textual analysis of news articles and Twitter content relating to the subject companies."
      ],
      [
        "p",
        "Schultz and Steele meet to discuss plans for incorporating the sentiment data into the model. They discuss the differences in the steps between building ML models that use traditional structured data and building ML models that use textual big data. Steele tells Schultz:"
      ],
      [
        "h",
        "Statement 1"
      ],
      [
        "p",
        "The second step in building text-based ML models is text preparation and wrangling, whereas the second step in building ML models using structured data is data collection."
      ],
      [
        "h",
        "Statement 2"
      ],
      [
        "p",
        "The fourth step in building both types of models encompasses data/text exploration."
      ],
      [
        "p",
        "Steele expresses concern about using Twitter content in the model, noting that research suggests that as much as 10%–15% of social media content is from fake accounts. Schultz tells Steele that she understands her concern but thinks the potential for model improvement outweighs the concern."
      ],
      [
        "p",
        "Steele begins building a model that combines the structured financial data and the sentiment data. She starts with cleansing and wrangling the raw structured financial data. Exhibit 1 presents a small sample of the raw dataset before cleansing: Each row represents data for a particular firm."
      ],
      [
        "table",
        {
          "title": "Exhibit 1: Sample of Raw Structured Data Before Cleansing",
          "head": [
            "ID",
            "Ticker",
            "IPO Date",
            "Industry (NAICS)",
            "EBIT",
            "Interest Expense",
            "Total Debt"
          ],
          "rows": [
            [
              "1",
              "ABC",
              "4/6/17",
              "44",
              "9.4",
              "0.6",
              "10.1"
            ],
            [
              "2",
              "BCD",
              "November 15, 2004",
              "52",
              "5.5",
              "0.4",
              "6.2"
            ],
            [
              "3",
              "HIJ",
              "26-Jun-74",
              "54",
              "8.9",
              "1.2",
              "15.8"
            ],
            [
              "4",
              "KLM",
              "14-Mar-15",
              "72",
              "5.7",
              "1.5",
              "0.0"
            ]
          ]
        }
      ],
      [
        "p",
        "After cleansing the data, Steele then preprocesses the dataset. She creates two new variables: an “Age” variable based on the firm’s IPO date and an “Interest Coverage Ratio” variable equal to EBIT divided by interest expense. She also deletes the “IPO Date” variable from the dataset. After applying these transformations, Steele scales the financial data using normalization. She notes that over the full sample dataset, the “Interest Expense” variable ranges from a minimum of 0.2 and a maximum of 12.2, with a mean of 1.1 and a standard deviation of 0.4."
      ],
      [
        "p",
        "Steele and Schultz then discuss how to preprocess the raw text data. Steele tells Schultz that the process can be completed in the following three steps:"
      ],
      [
        "h",
        "Step 1"
      ],
      [
        "p",
        "Cleanse the raw text data."
      ],
      [
        "h",
        "Step 2"
      ],
      [
        "p",
        "Split the cleansed data into a collection of words for them to be normalized."
      ],
      [
        "h",
        "Step 3"
      ],
      [
        "p",
        "Normalize the collection of words from Step 2 and create a distinct set of tokens from the normalized words."
      ],
      [
        "p",
        "With respect to Step 1, Steele tells Schultz:"
      ],
      [
        "p",
        "“I believe I should remove all html tags, punctuations, numbers, and extra white spaces from the data before normalizing them.”"
      ],
      [
        "p",
        "After properly cleansing the raw text data, Steele completes Steps 2 and 3. She then performs exploratory data analysis. To assist in feature selection, she wants to create a visualization that shows the most informative words in the dataset based on their term frequency (TF) values. After creating and analyzing the visualization, Steele is concerned that some tokens are likely to be noise features for ML model training; therefore, she wants to remove them."
      ],
      [
        "p",
        "Steele and Schultz discuss the importance of feature selection and feature engineering in ML model training. Steele tells Schultz:"
      ],
      [
        "p",
        "“Appropriate feature selection is a key factor in minimizing model overfitting, whereas feature engineering tends to prevent model underfitting.”"
      ],
      [
        "p",
        "Once satisfied with the final set of features, Steele selects and runs a model on the training set that classifies the text as having positive sentiment (Class “1” or negative sentiment (Class “0”). She then evaluates its performance using error analysis. The resulting confusion matrix is presented in Exhibit 2."
      ],
      [
        "table",
        {
          "title": "Exhibit 2: Confusion Matrix",
          "head": [
            "Predicted ↓ / Actual →",
            "Actual Class 1",
            "Actual Class 0"
          ],
          "rows": [
            [
              "Predicted Class 1",
              "TP = 182",
              "FP = 52"
            ],
            [
              "Predicted Class 0",
              "FN = 31",
              "TN = 96"
            ]
          ]
        }
      ]
    ],
    "questions": [
      {
        "q": "Which of Steele’s statements relating to the steps in building structured data-based and text-based ML models is correct?",
        "options": [
          "Only Statement 1 is correct.",
          "Only Statement 2 is correct.",
          "Statement 1 and Statement 2 are correct."
        ],
        "answer": 1,
        "why": "Structured data: 1) conceptualization of the modeling task, 2) data collection, 3) data preparation and wrangling, 4) data exploration, 5) model training.\nText data: 1) text problem formulation, 2) data (text) curation, 3) text preparation and wrangling, 4) text exploration, 5) model training.\nStatement 1 is wrong: text preparation and wrangling is the THIRD step for text models; the second is text curation (it is right that data collection is second for structured data). Statement 2 is right: step 4 is exploration for both."
      },
      {
        "q": "Steele’s concern about using Twitter data in the model best relates to:",
        "options": [
          "volume.",
          "velocity.",
          "veracity."
        ],
        "answer": 2,
        "why": "Veracity is about the credibility and reliability of a data source. Fake accounts (10%–15% of social media content) make Twitter data less reliable. Volume is the quantity of data and velocity is the speed at which it is created; neither is Steele's concern. (The fourth V, variety, is the range of data types and sources.)"
      },
      {
        "q": "What type of error appears to be present in the IPO Date column of Exhibit 1?",
        "options": [
          "invalidity error.",
          "inconsistency error.",
          "non-uniformity error."
        ],
        "answer": 2,
        "why": "Non-uniformity: the data are not in one identical format. Every IPO date is a valid date, but they are written differently (4/6/17, November 15, 2004, 26-Jun-74, 14-Mar-15). A is wrong: an invalidity error is a value outside a meaningful range (e.g. an impossible date). B is wrong: an inconsistency error is a value that conflicts with other data or with reality."
      },
      {
        "q": "What type of error is most likely present in the last row of data (ID #4) in Exhibit 1?",
        "options": [
          "Inconsistency error",
          "Incompleteness error",
          "Non-uniformity error"
        ],
        "answer": 0,
        "why": "Firm KLM (ID #4) shows interest expense of 1.5 but total debt of 0.0. A firm paying interest should have debt, so the two values conflict: an inconsistency error. One of them is wrong and should be checked against another data source. B is wrong: nothing is missing (0.0 is a value, not a blank). C is wrong: the row's formats match the other rows."
      },
      {
        "q": "During the preprocessing of the data in Exhibit 1, what type of data transformation did Steele perform during the data preprocessing step?",
        "options": [
          "Extraction",
          "Conversion",
          "Aggregation"
        ],
        "answer": 0,
        "why": "Extraction creates a new variable from existing ones: Age from the IPO date, and the interest coverage ratio from EBIT ÷ interest expense. (Deleting the IPO Date column is a separate transformation called selection.) B is wrong: conversion changes a variable's data type (e.g. text to numbers). C is wrong: aggregation combines two or more variables into one, which she did not do."
      },
      {
        "q": "Based on Exhibit 1, for the firm with ID #3, Steele should compute the scaled value for the “Interest Expense” variable as:",
        "options": [
          "0.008.",
          "0.083.",
          "0.250."
        ],
        "answer": 1,
        "why": "Normalization rescales a variable to [0, 1]: [[Xi − Xmin|Xmax − Xmin]]. Firm HIJ (ID #3) has interest expense of 1.2, and over the full sample the minimum is 0.2 and the maximum 12.2:\n[[1.2 − 0.2|12.2 − 0.2]] = [[1.0|12.0]] = 0.083.\nC (0.250) is standardization, [[Xi − mean|SD]] = [[1.2 − 1.1|0.4]], which she did not use. A (0.008) wrongly subtracts the mean (1.1) instead of the minimum."
      },
      {
        "q": "Is Steele’s statement regarding Step 1 of the preprocessing of raw text data correct?",
        "options": [
          "Yes.",
          "No, because her suggested treatment of punctuation is incorrect.",
          "No, because her suggested treatment of extra white spaces is incorrect."
        ],
        "answer": 1,
        "why": "Most punctuation can be removed, but some carries meaning (percentage signs, currency symbols, question marks). These should be replaced with annotations such as /percentSign/, /dollarSign/ and /questionMark/, not deleted. Removing html tags, numbers (or replacing them with /number/) and extra white spaces is correct, so C is wrong."
      },
      {
        "q": "Steele’s Step 2 can be best described as:",
        "options": [
          "tokenization.",
          "lemmatization.",
          "standardization."
        ],
        "answer": 0,
        "why": "Tokenization splits cleansed text into separate tokens (words). B is wrong: lemmatization is a normalization step that reduces words to their base form (lemma), part of Step 3. C is wrong: standardization is a scaling method for numeric data."
      },
      {
        "q": "The output created in Steele’s Step 3 can be best described as a:",
        "options": [
          "bag-of-words.",
          "set of n-grams.",
          "document term matrix."
        ],
        "answer": 0,
        "why": "After normalizing the tokens, the distinct set of tokens across all the texts is the bag-of-words (BOW). B is wrong: n-grams are sequences of n adjacent words, used to keep word order. C is wrong: a document term matrix is built later from the BOW (rows = documents, columns = tokens)."
      },
      {
        "q": "Given her objective, the visualization that Steele should create in the exploratory data analysis step is a:",
        "options": [
          "scatter plot.",
          "word cloud.",
          "document term matrix."
        ],
        "answer": 1,
        "why": "A word cloud shows the most informative words, with font size (and colour) reflecting term frequency. A is wrong: a scatter plot shows the relationship between two numeric variables. C is wrong: a document term matrix is a data structure, not a visualization."
      },
      {
        "q": "To address her concern in her exploratory data analysis, Steele should focus on those tokens that have:",
        "options": [
          "low chi-square statistics.",
          "low mutual information (ML) values.",
          "very low and very high term frequency (TF) values."
        ],
        "answer": 2,
        "why": "Noise features are the most frequent tokens (e.g. stop words present in every text, which cause underfitting) and the rarest tokens (present in very few texts, which cause overfitting). Vocabulary pruning removes tokens with very high and very low TF. A and B are feature-selection measures of how strongly a token is linked to a class; they don't target the frequent and rare noise tokens."
      },
      {
        "q": "Is Steele’s statement regarding the relationship between feature selection/feature engineering and model fit correct?",
        "options": [
          "Yes.",
          "No, because she is incorrect with respect to feature selection.",
          "No, because she is incorrect with respect to feature engineering."
        ],
        "answer": 0,
        "why": "Too many features complicate the model and lower degrees of freedom, causing overfitting, so good feature selection limits overfitting. Feature engineering creates new, better features that capture relationships the raw data miss, which helps prevent underfitting. Both halves of her statement are correct."
      },
      {
        "q": "Based on Exhibit 2, the model’s precision metric is closest to:",
        "options": [
          "78%.",
          "81%.",
          "85%."
        ],
        "answer": 0,
        "why": "Precision = correctly predicted positives ÷ all predicted positives = [[TP|TP + FP]] = [[182|182 + 52]] = 0.778 (78%). C (85%) is recall, [[TP|TP + FN]] = [[182|213]]. B (81%) is the F1 score."
      },
      {
        "q": "Based on Exhibit 2, the model’s F1 score is closest to:",
        "options": [
          "77%.",
          "81%.",
          "85%."
        ],
        "answer": 1,
        "why": "F1 is the harmonic mean of precision (P) and recall (R).\nP = [[182|182 + 52]] = 0.7778; R = [[182|182 + 31]] = 0.8545.\nF1 = [[2 × P × R|P + R]] = [[2 × 0.7778 × 0.8545|0.7778 + 0.8545]] = 0.814 (81%).\nA (77%) is accuracy and C (85%) is recall."
      },
      {
        "q": "Based on Exhibit 2, the model’s accuracy metric is closest to:",
        "options": [
          "77%.",
          "81%.",
          "85%."
        ],
        "answer": 0,
        "why": "Accuracy = correct predictions ÷ all predictions = [[TP + TN|TP + FP + TN + FN]] = [[182 + 96|182 + 52 + 96 + 31]] = [[278|361]] = 0.770 (77%). B (81%) is the F1 score and C (85%) is recall."
      }
    ]
  },
  {
    "id": "jubilacion",
    "title": "Carlos Martin: Jubilación S.L.",
    "topic": "Quantitative Methods",
    "reading": "Machine Learning",
    "body": [
      [
        "p",
        "Carlos Martin, a recent graduate of the financial engineering program at a well-known university, has just been hired by Jubilación S.L., a Madrid-based firm that specializes in retirement planning. He has been asked to develop a machine learning (ML) tool to help assign each client to one of the firm’s five strategic investment portfolios."
      ],
      [
        "p",
        "To build the training set with 50 defined features, 300 randomly selected working-age clients will be asked a set of open-ended questions by Lucia Fernandez, a market researcher. The resulting answers will include demographic data, information about risk preferences, and other retirement details. A Jubilación analyst will assign each individual in the sample to one of the five portfolios. Martin initially plans to perform machine learning analysis and use the model to assign new clients to the appropriate portfolio based on their responses to the questions."
      ],
      [
        "p",
        "Fernandez brings a sample set of responses back to Martin for further discussion. She tells him that in the interview sessions, many of the responses she has obtained are complex and subjective. For example, most individuals she interviews are not clear about the concept of risk tolerance and provide comparisons or abstract concepts rather than specific numbers or levels. In some cases, their fear of loss seems to increase at an increasing rate when some scenarios are presented. Martin decides he will have to review these risk tolerance responses and use a model that groups them into risk categories."
      ],
      [
        "p",
        "Fernandez delivers the completed set of interview data to Martin. After some preliminary analysis, Martin decides that he is ready to develop the algorithm the chatbot will use to advise clients as to which of its five strategic investment portfolios is best for meeting their retirement goals. Martin notes that the final dataset has 50 features, and he is concerned that some of them are likely to be correlated, which may lead to model misstatement. He considers three methods to address this issue:"
      ],
      [
        "p",
        "Method 1: Combine variables using the ensemble model."
      ],
      [
        "p",
        "Method 2: Use the bootstrap aggregating (bagging) method."
      ],
      [
        "p",
        "Method 3: Employ principal components analysis."
      ]
    ],
    "questions": [
      {
        "q": "Martin’s initial planned machine learning analysis is best described as a form of:",
        "options": [
          "categorical learning.",
          "supervised learning.",
          "unsupervised learning."
        ],
        "answer": 1,
        "why": "An analyst labels each of the 300 training clients with the right portfolio, and the model learns to map the inputs (interview answers) to that known output for new clients. Learning from labeled data with a target is supervised learning. A is wrong: 'categorical learning' is not an ML method. C is wrong: unsupervised learning has no labels or target; it only finds structure in the data."
      },
      {
        "q": "If Martin were to use a k–means neighbor model to analyze the client responses, the value for k would be closest to:",
        "options": [
          "5.",
          "50.",
          "300."
        ],
        "answer": 0,
        "why": "k is the number of groups the clients are sorted into: the firm's five strategic portfolios, so k = 5. B (50) is the number of features per client and C (300) is the number of clients interviewed (observations), not the number of groups."
      },
      {
        "q": "The most appropriate model for Martin to use in analyzing the responses to the risk tolerance questions is a:",
        "options": [
          "neural network (NN) model.",
          "penalized regression model.",
          "least absolute shrinkage and selection operator (LASSO) model."
        ],
        "answer": 0,
        "why": "The risk-tolerance answers are complex and non-linear (fear of loss rising at an increasing rate). Neural networks are built for non-linear relationships and complex interactions. B and C are wrong: penalized regression and LASSO (a type of penalized regression) assume linear relationships and are mainly used for regression, not for grouping clients into categories."
      },
      {
        "q": "Which of the methods Martin considers to address potential feature correlation is the most suitable?",
        "options": [
          "Method 1",
          "Method 2",
          "Method 3"
        ],
        "answer": 2,
        "why": "Principal components analysis (Method 3) turns many correlated features into a few uncorrelated composite variables, reducing dimensions. Method 1 is wrong: ensemble learning combines the predictions of several models, not features. Method 2 is wrong: bagging creates many new training sets by sampling with replacement; the number of features doesn't change."
      }
    ]
  },
  {
    "id": "alef",
    "title": "Alef Associates",
    "topic": "Quantitative Methods",
    "reading": "Machine Learning",
    "body": [
      [
        "p",
        "Alef Associates manages a long-only fund specializing in global smallcap equities. Since its founding a decade ago, Alef maintains a portfolio of 100 stocks (out of an eligible universe of about 10,000 stocks). Some of these holdings are the result of screening the universe for attractive stocks based on several ratios that use readily available market and accounting data; others are the result of investment ideas generated by Alef’s professional staff of five securities analysts and two portfolio managers."
      ],
      [
        "p",
        "Although Alef’s investment performance has been good, its Chief Investment Officer, Paul Moresanu, is contemplating a change in the investment process aimed at achieving even better returns. After attending multiple workshops and being approached by data vendors, Moresanu feels that data science should play a role in the way Alef selects its investments. He has also noticed that much of Alef’s past outperformance is due to stocks that became takeover targets. After some research and reflection, Moresanu writes the following email to the Alef’s CEO."
      ],
      [
        "h",
        "Exhibit 1"
      ],
      [
        "p",
        "Subject: Investment Process Reorganization"
      ],
      [
        "p",
        "I have been thinking about modernizing the way we select stock investments. Given that our past success has put Alef Associates in an excellent financial position, now seems to be a good time to invest in our future. What I propose is that we continue managing a portfolio of 100 global small-cap stocks but restructure our process to benefit from machine learning (ML). Importantly, the new process will still allow a role for human insight, for example, in providing domain knowledge. In addition, I think we should make a special effort to identify companies that are likely to be acquired. Specifically, I suggest following the four steps which would be repeated every quarter."
      ],
      [
        "p",
        "Step 1: We apply ML techniques to a model including fundamental and technical variables (features) to predict next quarter’s return for each of the 100 stocks currently in our portfolio. Then, the 20 stocks with the lowest estimated return are identified for replacement."
      ],
      [
        "p",
        "Step 2: We utilize ML techniques to divide our investable universe of about 10,000 stocks into 20 different groups, based on a wide variety of the most relevant financial and non-financial characteristics. The idea is to prevent unintended portfolio concentration by selecting stocks from each of these distinct groups."
      ],
      [
        "p",
        "Step 3: For each of the 20 different groups, we use labeled data to train a model that will predict the five stocks (in any given group) that are most likely to become acquisition targets in the next one year."
      ],
      [
        "p",
        "Step 4: Our five experienced securities analysts are each assigned four of the groups, and then each analyst selects their one best stock pick from each of their assigned groups. These 20 “high-conviction” stocks will be added to our portfolio (in replacement of the 20 relatively underperforming stocks to be sold in Step 1)."
      ],
      [
        "p",
        "A couple of additional comments related to the above:"
      ],
      [
        "p",
        "Comment 1: The ML algorithms will require large amounts of data. We would first need to explore using free or inexpensive historical datasets and then evaluate their usefulness for the ML-based stock selection processes before deciding on using data that requires subscription."
      ],
      [
        "p",
        "Comment 2: As time passes, we expect to find additional ways to apply ML techniques to refine Alef’s investment processes."
      ],
      [
        "p",
        "What do you think?"
      ],
      [
        "p",
        "Paul Moresanu"
      ]
    ],
    "questions": [
      {
        "q": "The machine learning techniques appropriate for executing Step 1 are most likely to be based on:",
        "options": [
          "regression",
          "classification",
          "clustering"
        ],
        "answer": 0,
        "why": "Step 1 predicts next quarter's return, a continuous target, so it needs supervised learning with a regression model. B is wrong: classification predicts categorical or ordinal targets. C is wrong: clustering is unsupervised and has no target variable at all."
      },
      {
        "q": "Assuming regularization is utilized in the machine learning technique used for executing Step 1, which of the following ML models would be least appropriate:",
        "options": [
          "Regression tree with pruning.",
          "LASSO with lambda (λ) equal to 0.",
          "LASSO with lambda (λ) between 0.5 and 1."
        ],
        "answer": 1,
        "why": "In LASSO, λ sets the size of the penalty for each extra feature. With λ = 0 the penalty disappears, so there is no regularization at all and LASSO becomes plain OLS. A is wrong: pruning is a form of regularization for regression trees (it removes branches that add little). C is wrong: a λ between 0.5 and 1 is a meaningful penalty, so features must earn their place."
      },
      {
        "q": "Which of the following machine learning techniques is most appropriate for executing Step 2:",
        "options": [
          "K-Means Clustering",
          "Principal Components Analysis (PCA)",
          "Classification and Regression Trees (CART)"
        ],
        "answer": 0,
        "why": "Step 2 splits 10,000 unlabeled stocks into 20 groups by similarity: unsupervised clustering, and k-means partitions data into a fixed number k of non-overlapping clusters. B is wrong: PCA reduces many correlated features to a few uncorrelated ones; it does not group observations. C is wrong: CART is supervised and needs labeled data."
      },
      {
        "q": "The hyperparameter in the ML model to be used for accomplishing Step 2 is:",
        "options": [
          "100, the number of small-cap stocks in Alef’s portfolio.",
          "10,000, the eligible universe of small-cap stocks in which Alef can potentially invest.",
          "20, the number of different groups (i.e. clusters) into which the eligible universe of small-cap stocks will be divided."
        ],
        "answer": 2,
        "why": "A hyperparameter is set by the researcher before learning starts. In k-means it is k, the number of clusters: 20. A (100 stocks in the portfolio) and B (10,000 stocks in the universe) are just sizes of datasets, not settings of the model."
      },
      {
        "q": "The target variable for the labelled training data to be used in Step 3 is most likely which one of the following?",
        "options": [
          "A continuous target variable.",
          "A categorical target variable.",
          "An ordinal target variable."
        ],
        "answer": 1,
        "why": "Each stock is labeled as either an acquisition target (1) or not (0): two categories, so the target is categorical. A is wrong: it is not a continuous number like a return. C is wrong: ordinal targets are ranked categories (1st, 2nd, 3rd); 'target / not target' has no ranking."
      },
      {
        "q": "Comparing two ML models that could be used to accomplish Step 3, which statement(s) best describe(s) the advantages of using Classification and Regression Trees (CART) instead of K-Nearest Neighbor (KNN)?\nStatement 1: For CART there is no requirement to specify an initial hyperparameter (like K).\nStatement 2: For CART there is no requirement to specify a similarity (or distance) measure.\nStatement 3: For CART the output provides a visual explanation for the prediction.",
        "options": [
          "Statement 1 only.",
          "Statement 3 only.",
          "Statements 1, 2, and 3."
        ],
        "answer": 2,
        "why": "All three are advantages of CART over KNN. KNN needs K chosen in advance and a distance measure to define 'nearest'; CART needs neither. CART's tree also shows visually which features and cut-off values led to each prediction, which KNN does not."
      },
      {
        "q": "Assuming a Classification and Regression Tree (CART) model is used to accomplish Step 3, which of the following is most likely to result in model overfitting?",
        "options": [
          "Using the k-fold cross validation method.",
          "Including an overfitting penalty (i.e., regularization term).",
          "Using a fitting curve to select a model with low bias error and high variance error."
        ],
        "answer": 2,
        "why": "Low bias error with high variance error is the definition of an overfit model: it fits the training data closely but does badly out of sample. A and B are the two standard ways to REDUCE overfitting: k-fold cross-validation estimates out-of-sample error directly, and a regularization penalty stops the model becoming too complex."
      },
      {
        "q": "Assuming a Classification and Regression Tree (CART) model is initially used to accomplish Step 3, as a further step which of the following techniques is most likely to result in more accurate predictions?",
        "options": [
          "Discarding CART and using the predictions of a Support Vector Machine (SVM) model instead.",
          "Discarding CART and using the predictions of a K-Nearest Neighbor (KNN) model instead.",
          "Combining the predictions of the CART model with the predictions of other models – such as logistic regression, SVM, and KNN – via ensemble learning."
        ],
        "answer": 2,
        "why": "Ensemble learning combines the predictions of several models. Their individual errors partly cancel, so the combined prediction is usually more accurate and more stable than the best single model. A and B just swap one single model for another, which still has its own error rate and noisy predictions."
      },
      {
        "q": "Regarding Comment #2, Moresanu has been thinking about the applications of neural networks (NNs) and deep learning (DL) to investment management. Which statement(s) best describe(s) the tasks for which NNs and DL are well-suited?\nStatement 1: NNs and DL are well-suited for image and speech recognition, and natural language processing.\nStatement 2: NNs and DL are well-suited for developing single variable ordinary least squares regression models.\nStatement 3: NNs and DL are well-suited for modelling non-linearities and complex interactions among many features.",
        "options": [
          "Statement 2 only.",
          "Statements 1 and 3.",
          "Statements 1, 2 and 3."
        ],
        "answer": 1,
        "why": "NNs and deep learning suit highly complex tasks with non-linearities and many interacting features: image, face and speech recognition and natural language processing (Statements 1 and 3). Statement 2 is wrong: a single-variable OLS regression is a simple linear model and needs no neural network, which rules out A and C."
      },
      {
        "q": "Regarding neural networks (NNs) that Alef might potentially implement, which of the following statements is least accurate?",
        "options": [
          "NNs must have at least 10 hidden layers to be considered deep learning nets.",
          "The activation function in a node operates like a light dimmer switch since it decreases or increases the strength of the total net input.",
          "The summation operator receives input values, multiplies each by a weight, sums up the weighted values into the total net input, and passes it to the activation function."
        ],
        "answer": 0,
        "why": "Deep learning nets have many hidden layers: at least 2, and often more than 20. There is no 10-layer rule, so A is inaccurate. B and C are accurate: the summation operator weights and adds the inputs into the total net input, and the activation function then scales its strength up or down like a dimmer switch."
      }
    ]
  },
  {
    "id": "reg-diagnostics",
    "title": "Portfolio Return Drivers: Regression Diagnostics",
    "topic": "Quantitative Methods",
    "reading": "Multiple Regression",
    "body": [
      [
        "p",
        "You are a junior analyst at an asset management firm. Your supervisor asks you to analyze the return drivers for one of the firm’s portfolios. She asks you to construct a regression model of the portfolio’s monthly excess returns (RET) against three factors: the market excess return (MRKT), a value factor (HML), and the monthly percentage change in a volatility index (VIX)."
      ],
      [
        "p",
        "You collect the data and run the regression, and the resulting model is"
      ],
      [
        "p",
        "YRET = –0.999 + 1.817XMRKT + 0.489XHML + 0.037XVIX."
      ],
      [
        "p",
        "You then create some diagnostic charts to help determine the model fit."
      ],
      [
        "h",
        "Chart 1: RET vs. VIX"
      ],
      [
        "p",
        "Percent change in volatility factor (VIX) from negative 60 to 160 on x-axis and portfolio excess returns (RET) from negative 40 to 30 on y-axis. A line falls from (negative 40, 10), (40, negative 5), to (120, negative 15). Dots surround the origin."
      ],
      [
        "h",
        "Chart 2: RET vs. MRKT"
      ],
      [
        "p",
        "A scatterplot for market excess returns (MRKT) versus portfolio excess returns (RET). A rising line intersects points (negative 11, negative 20), (0,0) and (10, 15). Dots are scattered on and around the line between 0 to 5 for market excess returns."
      ],
      [
        "h",
        "Chart 3: HML vs. MRKT"
      ],
      [
        "p",
        "A scatterplot for market excess returns (MRKT) versus HML values. A flatter line intersects points (negative 5, negative 3), (0,0) and (10, 1). Dots are scattered on and around the line between 0 to 5 for HML values."
      ],
      [
        "h",
        "Chart 4: RET residuals vs. RET predicted values"
      ],
      [
        "p",
        "A scatterplot for RET predicted values on x-axis versus RET residuals on y-axis. A horizontal dotted line overlaps x-axis at (-30, 0), (0, 0), (10, 0) and (20, 0). Dots are scattered on and around the line between -5 and 10 for predicted values."
      ]
    ],
    "questions": [
      {
        "q": "Determine the type of regression model you should use.",
        "options": [
          "Logistic regression",
          "Simple linear regression",
          "Multiple linear regression"
        ],
        "answer": 2,
        "why": "The dependent variable (monthly excess return) is continuous and there are three explanatory variables, so it is a multiple linear regression. A is wrong: logistic regression is for a discrete (e.g. yes/no) dependent variable. B is wrong: simple linear regression has only one explanatory variable."
      },
      {
        "q": "Determine which one of the following statements about the coefficient of the volatility factor (VIX) is true.",
        "options": [
          "A 1.0% increase in XVIX would result in a –0.962% decrease in YRET.",
          "A 0.037% increase in XVIX would result in a 1.0% increase in YRET.",
          "A 1.0% increase in XVIX, holding all the other independent variables constant, would result in a 0.037% increase in YRET."
        ],
        "answer": 2,
        "why": "A slope coefficient in a multiple regression is a partial effect: a one-unit (1%) change in VIX, holding MRKT and HML constant, changes RET by the coefficient, 0.037%. A is wrong: −0.962 adds the intercept (−0.999 + 0.037), and the intercept is not part of the slope. B is wrong: it reverses the direction of the relationship."
      },
      {
        "q": "Identify the regression assumption that may be violated based on Chart 1, RET vs. VIX.",
        "options": [
          "Independence of errors",
          "Independence of independent variables",
          "Linearity between dependent variable and explanatory variables"
        ],
        "answer": 2,
        "why": "Chart 1 plots RET against VIX, and the points follow a curve (quadratic) more than the straight fitted line. Linear regression assumes a linear relationship between the dependent and independent variables. A is wrong: independence of errors is checked with residuals over time, not a plot of RET vs one X. B is wrong: that compares two independent variables with each other, like Chart 3."
      },
      {
        "q": "Identify which chart, among Charts 2, 3, and 4, is most likely to be used to assess homoskedasticity.",
        "options": [
          "Chart 2",
          "Chart 3",
          "Chart 4"
        ],
        "answer": 2,
        "why": "Homoskedasticity means the residuals have the same variance for every observation. Chart 4 plots the residuals against the predicted values, so you can see whether the spread of residuals stays constant or forms clusters (a sign of heteroskedasticity). Chart 2 (RET vs MRKT) checks linearity with one variable; Chart 3 (HML vs MRKT) checks whether two independent variables are related."
      },
      {
        "q": "Identify which chart, among Charts 2, 3, and 4, is most likely to be used to assess independence of independent variables.",
        "options": [
          "Chart 2",
          "Chart 3",
          "Chart 4"
        ],
        "answer": 1,
        "why": "Chart 3 plots two independent variables against each other (HML vs MRKT). A clear relationship between them would point to multicollinearity, breaking the 'independent variables are independent' assumption. Chart 2 plots the dependent variable against MRKT; Chart 4 plots residuals for homoskedasticity."
      }
    ]
  },
  {
    "id": "cpsr",
    "title": "Andrew Omandi: CPSR Partners",
    "topic": "Quantitative Methods",
    "reading": "Multiple Regression",
    "body": [
      [
        "p",
        "Andrew Omandi works as a senior analyst at investment firm CPSR Partners. He and junior analysts, Emmanuel Katangole, Takasongo Kasongo and Peter Mensah, have been tasked with investigating the use of multi factor models to help explain portfolio returns. After conducting some research, they identify a three-factor model described below, and are meeting to finalize their presentation to the firm's investment committee."
      ],
      [
        "p",
        "Rit − Rft = interceptit + BM(RMt − Rft) + BSMB(SMBt) + BHML(HMLt) + eit"
      ],
      [
        "p",
        "Where:"
      ],
      [
        "p",
        "Rit = portfolio return\nRft = risk free rate, one-month T-bill return\nBM = market regression coefficient\nRMt = return on market portfolio\nRMt − Rft = market risk premium\nBSMB = SMB regression coefficient\nSMBt = return difference between small cap stocks and large cap stocks (size premium)\nBHML = HML regression coefficient\nHMLt = return difference between high book to market stocks and low book to market stocks (value premium)\neit = error term"
      ],
      [
        "p",
        "Omandi states: \"This model indicates that the main factors driving expected portfolio excess returns are premiums for market risk (RMt − Rft), size (SMBt) and value (HMLt). I also believe that there is a positive relationship between portfolio excess return and each of the independent variables, market risk, size and value premiums. Based on this we can formulate the following hypotheses:"
      ],
      [
        "p",
        "Hypothesis 1: Ho: BM = 0; Ha: BM ≠ 0"
      ],
      [
        "p",
        "Hypothesis 2: Ho: BSMB ≤ 0; Ha: BSMB > 0"
      ],
      [
        "p",
        "Hypothesis 3: Ho: BHML > 0; Ha: BHML ≤ 0\""
      ],
      [
        "p",
        "The analysts test the model and the regression results of excess portfolio returns on Mkt-Rf, SMB and HML are presented below in Exhibit 1."
      ],
      [
        "table",
        {
          "title": "Exhibit 1: Regression Statistics",
          "head": [
            "",
            ""
          ],
          "rows": [
            [
              "Multiple R2",
              "0.6235"
            ],
            [
              "Standard error",
              "0.0774"
            ],
            [
              "Observations",
              "60"
            ]
          ]
        }
      ],
      [
        "table",
        {
          "title": "Exhibit 1 (continued): ANOVA",
          "head": [
            "",
            "Degrees of Freedom (df)",
            "Sum of Squares (SS)",
            "Mean Squares (MSS)",
            "F",
            "Significance F"
          ],
          "rows": [
            [
              "Regression",
              "3",
              "0.2138",
              "0.0713",
              "11.871",
              "0"
            ],
            [
              "Residual",
              "56",
              "0.3362",
              "0.0060",
              "---",
              "---"
            ],
            [
              "Total",
              "59",
              "0.55",
              "---",
              "---",
              "---"
            ]
          ]
        }
      ],
      [
        "table",
        {
          "title": "Exhibit 1 (continued): Coefficients",
          "head": [
            "",
            "Coefficient",
            "Standard Error",
            "t-Statistic",
            "p-value"
          ],
          "rows": [
            [
              "Intercept",
              "0.09219",
              "0.0109",
              "8.4577",
              "<0.00001"
            ],
            [
              "Mkt-Rf",
              "0.01348",
              "0.00248",
              "5.4354",
              "<0.00001"
            ],
            [
              "SMB",
              "0.0077",
              "0.004534",
              "1.6982",
              "0.04829"
            ],
            [
              "HML",
              "0.0043",
              "0.00323",
              "1.3312",
              "0.09445"
            ]
          ]
        }
      ],
      [
        "p",
        "Kasango states that it is important to emphasize that the multiple linear regression model makes a number of assumptions, three of which are:"
      ],
      [
        "p",
        "Assumption 1: The regression residuals are normally distributed"
      ],
      [
        "p",
        "Assumption 2: The variance of the regression residuals is the same for all observations."
      ],
      [
        "p",
        "Assumption 3: The regression residuals are correlated across observations."
      ],
      [
        "p",
        "Katangole asks how one can assess the goodness of fit of the estimated regression to the data. Mensah responds, \"One measure, the R2 can be defined as the ratio of the variation in the dependent variable explained by the independent variables to the total variation of the dependent variable. However, e R2 stays the same or increases when independent variables are added to the regression. A better measure is the adjusted R2 which does not automatically increase when independent variables are added to the regression.\""
      ]
    ],
    "questions": [
      {
        "q": "Kasango is least likely correct with regard to which assumption?",
        "options": [
          "Assumption 1",
          "Assumption 2",
          "Assumption 3"
        ],
        "answer": 2,
        "why": "Multiple regression assumes the residuals are UNcorrelated across observations (independence of errors), so Assumption 3 is wrong. Assumption 1 (residuals normally distributed) and Assumption 2 (constant variance of residuals, i.e. homoskedasticity) are both correct. The other assumptions are linearity, independence of the independent variables (no exact linear relation among them), and a zero expected error term."
      }
    ]
  },
  {
    "id": "markham",
    "title": "Matthew Markham: Regression Training",
    "topic": "Quantitative Methods",
    "reading": "Multiple Regression",
    "body": [
      [
        "p",
        "Matthew Markham is a recently hired analyst at an equity research firm. Markham joins several other new employees for a training session hosted by Alexandra Garcia, a senior analyst, on the firm's approach to utilizing multiple regression in their portfolio and investment analysis."
      ],
      [
        "p",
        "To open the training session, Garcia explains the relationship between the dependent and independent variables in a regression model. She explains the multiple linear regression model and asks the analysts to demonstrate their understanding by confirming the assumptions for the classical model. The analysts provide the following responses about the assumptions:"
      ],
      [
        "p",
        "Assumption 1: The regression residuals are normally distributed."
      ],
      [
        "p",
        "Assumption 2: The independent variables are not random."
      ],
      [
        "p",
        "Assumption 3: The regression residuals are correlated across observations."
      ],
      [
        "p",
        "Garcia shares an example of a regression model completed at the company, which was based on 650 observations and 11 independent variables, and advises that a specific variable with a coefficient of 1.25 has a t-statistic of 2.39. She shares that the critical values for a two-sided t-test is 1.96 at the 0.05 significance level. Based on this information, she asks Markham to confirm if they should reject or fail to reject the null hypothesis."
      ],
      [
        "p",
        "In completing their review of the previous model, Garcia cautions the analysts to be aware of the various types of uncertainty that can arise when predicting the dependent variable using a linear regression model. She identifies two errors that result in the forecast of the dependent variable having a standard error larger than the standard error of the regression:"
      ],
      [
        "p",
        "Error 1: Model error"
      ],
      [
        "p",
        "Error 2: Sampling error"
      ],
      [
        "p",
        "Garcia advises that the firm prefers to use the F-test to evaluate the overall significance of a multiple regression model and asks Markham to calculate the F-statistic for a recent model that is summarized in Exhibit 1."
      ],
      [
        "table",
        {
          "title": "Exhibit 1",
          "head": [
            "ANOVA",
            "Degrees of freedom",
            "Sum of Squares",
            "Mean squares"
          ],
          "rows": [
            [
              "Regression",
              "2",
              "1,924.01",
              "962.01"
            ],
            [
              "Residual",
              "122",
              "1,683.87",
              "13.80"
            ],
            [
              "Total",
              "124",
              "3,607.88",
              "--"
            ],
            [
              "Residual standard error",
              "--",
              "--",
              "0.798"
            ],
            [
              "Multiple R2",
              "--",
              "--",
              "0.815"
            ],
            [
              "Observations",
              "--",
              "--",
              "125"
            ]
          ]
        }
      ]
    ],
    "questions": [
      {
        "q": "Regarding the classical normal multiple linear regression model, which of the following assumptions provided by the analysts is incorrect?",
        "options": [
          "Assumption 1",
          "Assumption 2",
          "Assumption 3"
        ],
        "answer": 2,
        "why": "The classical model assumes the error term is UNcorrelated across observations, so Assumption 3 is wrong. Assumption 1 is correct: the residuals are normally distributed. Assumption 2 is correct in the classical model: the independent variables are not random (they are fixed and known)."
      },
      {
        "q": "In the multiple regression equation Yi = 2.710 + 0.828 X1i + 0.182 X2i + εi (i = 1, ..., n), for a one-unit change in X1, the change in Y is closest to:",
        "options": [
          "0.828.",
          "3.538.",
          "3.720."
        ],
        "answer": 0,
        "why": "A partial slope coefficient is the change in Y for a one-unit change in that X, holding the other X's constant: b1 = 0.828. B (3.538) wrongly adds the intercept (2.710 + 0.828). C (3.720) adds the intercept and both slopes (2.710 + 0.828 + 0.182). The intercept never enters a change in Y."
      },
      {
        "q": "Which of the following is an assumption of multiple linear regression?",
        "options": [
          "The regression residuals are normally distributed",
          "The variance of the independent variables is the same for all observations",
          "There is a linear relationship between two or more of the independent variables"
        ],
        "answer": 0,
        "why": "Normality: the residuals are normally distributed. B is wrong: homoskedasticity is about the variance of the RESIDUALS being constant, not the independent variables. C is wrong: linearity is between the dependent variable and the independent variables; the independent variables should have NO exact linear relationship with each other (otherwise multicollinearity)."
      }
    ]
  },
  {
    "id": "stigwood",
    "title": "Roger Stigwood: Private Equity Valuation Model",
    "topic": "Quantitative Methods",
    "reading": "Machine Learning",
    "body": [
      [
        "p",
        "Roger Stigwood is a partner at a private equity advisory firm. He is meeting with a data analysis consultant, Cindy Emerson. Upon meeting Emerson, Stigwood states that his firm has structured data from private equity transactions that had been conducted over the past year. He desires to merge that data with related publicly traded firm data to find factors that can be used to predict future firm valuations."
      ],
      [
        "p",
        "Stigwood suggests a support vector machine algorithm because the target variable is continuous and the algorithm does not require a user defined hyperparameter. Instead, Emerson suggests using an algorithm with a least absolute shrinkage and selection operator."
      ],
      [
        "p",
        "Stigwood then expresses concerns about the model overfitting problem. Emerson responds that managing overfitting is a tradeoff between cost and complexity. She suggests using k-fold cross-validation to mitigate overfitting."
      ]
    ],
    "questions": [
      {
        "q": "Stigwood's suggested algorithm is most likely:",
        "options": [
          "correct.",
          "incorrect in regard to the continuous target variable.",
          "incorrect in regard to the user define hyperparameter."
        ],
        "answer": 1,
        "why": "A support vector machine (SVM) is a linear classifier: it finds the hyperplane that best separates the observations into two groups, so it needs a binary (categorical) target. Firm valuation is continuous, so the SVM is the wrong tool. A is wrong for that reason. C is wrong: Stigwood is right that the SVM does not need a user-defined hyperparameter, so that part of his reasoning is not the problem."
      },
      {
        "q": "The algorithm suggested by Emerson is a:",
        "options": [
          "k-nearest neighbor algorithm.",
          "penalized regression algorithm.",
          "classification and regression tree algorithm."
        ],
        "answer": 1,
        "why": "LASSO (least absolute shrinkage and selection operator) is the best-known penalized regression: it adds a penalty for each included feature, shrinking weak coefficients to zero. It also suits a continuous target like firm valuation. A (KNN) and C (CART) are different algorithms that don't use a LASSO penalty."
      },
      {
        "q": "What is most likely the cost referenced by Emerson in regard to managing overfitting?",
        "options": [
          "The variance error less the base error",
          "Computational time and resource expenses",
          "The difference between the in- and out-of-sample error rates"
        ],
        "answer": 2,
        "why": "Data scientists frame overfitting as a trade-off between cost and complexity, where cost is the gap between in-sample and out-of-sample error rates. A more complex model fits the training data better but generalizes worse, so the gap widens. A is wrong: variance error and base error are components of out-of-sample error, not the 'cost'. B is wrong: computing time and resources are not the cost meant here."
      },
      {
        "q": "The overfitting mitigation technique suggested by Emerson most likely requires:",
        "options": [
          "the target variable not being specified.",
          "having different validation samples applied within the execution of the technique.",
          "having the same training sample, but in a random sequence within the execution of the technique."
        ],
        "answer": 1,
        "why": "In k-fold cross-validation the data (excluding the test sample) are shuffled and split into k equal parts (k is typically 5 or 10). Each round trains on k − 1 parts and validates on the remaining one, repeated k times, so every data point is validated once and trained on k − 1 times. The validation sample changes every round. A is wrong: it is used in supervised learning, which needs a specified target. C is wrong: the training sample itself changes each round, not just its order."
      }
    ]
  },
  {
    "id": "safegrowth",
    "title": "Avery White: SafeGrowth Investments",
    "topic": "Quantitative Methods",
    "reading": "Machine Learning",
    "body": [
      [
        "p",
        "Avery White is a financial analyst at SafeGrowth Investments (SGI), an asset management firm based in the US. The portfolio management team at SGI gives White a list of public firms that experienced financial distress and asks her to help with two tasks. The first task is to develop machine-learning based models to predict bankruptcy by grouping these firms into two categories: \"bankrupt\" or \"not bankrupt\". White first collects 25 fundamental and technical features of 800 firms that experienced financial distress, of which 100 filed bankruptcy in the last ten years. She then splits the 800 observations into three non-overlapping, homogeneous datasets with different purposes in mind:"
      ],
      [
        "p",
        "Dataset 1: Used to infer the pattern (or model) between the target and features."
      ],
      [
        "p",
        "Dataset 2: Used to assess the fit of the model from Dataset 1 and tune the model hyperparameters if necessary."
      ],
      [
        "p",
        "Dataset 3: Used to evaluate the accuracy of the final model."
      ],
      [
        "p",
        "After training her first model, White discovers that the model can identify \"bankrupt\" and \"not bankrupt\" firms with low error in the training dataset, but does not perform well on the validation and test datasets."
      ],
      [
        "p",
        "White then considers other machine learning algorithms and wants to choose one that meets the following requirements:"
      ],
      [
        "p",
        "Requirement 1: There is no need to specify an initial hyperparameter. However, regularization parameters can be added to avoid a potential overfitting problem;"
      ],
      [
        "p",
        "Requirement 2: The algorithm can provide a visual explanation and rationale for the prediction."
      ],
      [
        "p",
        "After the \"not bankrupt\" firms are identified, the second task that the portfolio management team asks White to perform is to divide those firms into six distinct groups based on 25 fundamental and technical features, with the intention to select a stock from each group to add to a portfolio to diversify risk."
      ]
    ],
    "questions": [
      {
        "q": "White's initial task requested by the management team is best described as a:",
        "options": [
          "clustering problem.",
          "regression problem.",
          "classification problem."
        ],
        "answer": 2,
        "why": "Sorting firms into \"bankrupt\" or \"not bankrupt\" means predicting a binary (categorical) target, which is a classification problem. A is wrong: clustering is unsupervised and has no target variable (that fits her SECOND task, splitting firms into six groups). B is wrong: regression is for a continuous target."
      },
      {
        "q": "In the split of the 800 observations, Dataset 2 is best described as a:",
        "options": [
          "test dataset.",
          "training dataset.",
          "validation dataset."
        ],
        "answer": 2,
        "why": "The three non-overlapping samples are: training (Dataset 1, to fit the model), validation (Dataset 2, to check the fit and tune hyperparameters) and test (Dataset 3, to measure the final model on new data). A is wrong: the test set evaluates the final model, which is Dataset 3. B is wrong: the training set is Dataset 1."
      },
      {
        "q": "White's first model is most likely subject to:",
        "options": [
          "overfitting and bias error.",
          "underfitting and bias error.",
          "overfitting and variance error."
        ],
        "answer": 2,
        "why": "Low error on the training data but poor results on validation and test data is overfitting: the model learned noise. That shows up as high variance error (results change a lot on new data). Bias error is how badly the model fits the training data, and here that fit is good, so bias is LOW, ruling out A. B is wrong: underfitting would mean poor results even on the training data."
      },
      {
        "q": "Which of the following machine learning algorithms meets both of White's requirements?",
        "options": [
          "K-nearest neighbor",
          "Support vector machine",
          "Classification and regression tree"
        ],
        "answer": 2,
        "why": "CART needs no initial hyperparameter, regularization (e.g. limits on tree depth, or pruning) can be added to stop overfitting, and the tree itself is a visual explanation of each prediction. A is wrong: KNN needs k chosen in advance and gives no visual rationale. B is wrong: an SVM needs no initial hyperparameter (a cost penalty can be added), but it gives no visual explanation, failing Requirement 2."
      }
    ]
  },
  {
    "id": "ebdc",
    "title": "Amandeep Jain: EBDC Default Model",
    "topic": "Quantitative Methods",
    "reading": "Machine Learning",
    "body": [
      [
        "p",
        "Amandeep Jain is a credit analyst at the Entrepreneurship Business Development Corporation (EBDC), a government-backed entity that specializes in providing loans and consulting services to growing small and medium-sized enterprises."
      ],
      [
        "p",
        "Jain sits down with her colleague, Peiran Zhang, a recently hired data scientist. They have been asked to work together to develop a machine learning model to improve EBDC’s predictive ability of identifying potential defaults. The current model is a k-nearest neighbor (k-NN) model, which is used to identify similarities in default companies and was originally created when the entire portfolio of EBDC loans was about 60% of its current level."
      ],
      [
        "p",
        "Jain suggests to Zhang that the following small changes to the current model could increase its overall predictive ability:"
      ],
      [
        "p",
        "• automating feature selection to improve model performance,\n• adjusting hyperparameter k on the basis of the increased portfolio size, and\n• adding additional non-financial metrics to identify new relationships."
      ],
      [
        "p",
        "Jain tells Zhang that the “goal” has been and continues to be predicting what is stored in the system in a field called Default_Status, which records whether a loan is either <In Default> or <Not In Default>. Jain indicates that eventually the model should generate a “Probability of Default” between 0% and 100% as the final output for each client in the firm’s portfolio."
      ],
      [
        "p",
        "Zhang develops an initial prototype and shares with Jian the results based on a subset of the portfolio that was segmented for the purpose of training the model. Exhibit 1 compares predicted and actual defaults from the model."
      ],
      [
        "h",
        "Exhibit 1: Predicted vs. Actual Default"
      ],
      [
        "p",
        "A graph showing data on Not in default and In default. The X axis runs from zero to 30 in increments of 5. The Y axis runs from zero to 25 in increments of 5."
      ]
    ],
    "questions": [
      {
        "q": "For the current model, which of Jain’s suggested changes will most likely improve the model’s accuracy?",
        "options": [
          "Adjust the hyperparameter.",
          "Automate feature selection.",
          "Add additional non-financial metrics."
        ],
        "answer": 0,
        "why": "The portfolio is now much larger (the model was built at about 60% of today's size), so k, the number of neighbours, should be reviewed. Resetting k (e.g. lowering it) reduces dilution of the results and can raise accuracy. B and C are wrong: k-NN is sensitive to irrelevant or correlated features and works best with a small number of features, so automatically adding features or extra non-financial metrics would more likely hurt performance."
      },
      {
        "q": "The Default_Status field is best described as:",
        "options": [
          "a feature.",
          "the target.",
          "the labeled data."
        ],
        "answer": 1,
        "why": "Default_Status is the 'goal' the model predicts (In Default / Not In Default), so it is the target (dependent) variable. A is wrong: features are the independent variables used to predict the target. C is wrong: labeled data is the whole training dataset, where each observation's features come with its known target value."
      },
      {
        "q": "Given the eventual predictive goal of the model, the best model is:",
        "options": [
          "the current model.",
          "a random forest model.",
          "a support vector model."
        ],
        "answer": 1,
        "why": "The final output is a Probability of Default from 0% to 100%, a continuous value, and there is a known target (Default_Status), so a supervised model that can handle regression is needed. Random forests, built from many decision trees, can do this. A is wrong: the k-NN model here classifies loans into categories. C is wrong: a support vector machine is a classifier for categorical targets, giving a class, not a probability."
      }
    ]
  },
  {
    "id": "misspec",
    "title": "Portfolio Return Drivers: Model Diagnostics",
    "topic": "Quantitative Methods",
    "reading": "Multiple Regression",
    "body": [
      [
        "p",
        "You are a junior analyst at an asset management firm. Your supervisor asks you to analyze the return drivers for one of the firm’s portfolios. She asks you to construct three regression models of the portfolio’s monthly excess returns (RET), starting with the following factors: the market excess return (MRKT), a value factor (HML), and the monthly percentage change in a volatility index (VIX). Next you add a size factor (SMB), and finally you add a momentum factor (MOM). Your three models are as follows:"
      ],
      [
        "p",
        "Model 1: RETi = b0 + bMRKT MRKTi + bHML HMLi + bVIX VIXi + εi."
      ],
      [
        "p",
        "Model 2: RETi = b0 + bMRKT MRKTi + bHML HMLi + bVIX VIXi + bSMB SMBi + εi."
      ],
      [
        "p",
        "Model 3: RETi = b0 + bMRKT MRKTi + bHML HMLi + bVIX VIXi + bSMB SMBi + bMOM MOMi + εi."
      ],
      [
        "p",
        "Your supervisor is concerned about conditional heteroskedasticity in Model 3 and asks you to perform the Breusch–Pagan (BP) test. At a 5% confidence level, the BP critical value is 11.07. You run the regression for the BP test; the results are shown in Exhibit 1."
      ],
      [
        "table",
        {
          "title": "Exhibit 1: Testing for Conditional Heteroskedasticity — Regression Statistics",
          "head": [
            "",
            ""
          ],
          "rows": [
            [
              "Multiple R",
              "0.25517"
            ],
            [
              "R-Squared",
              "0.06511"
            ],
            [
              "Adjusted R-Squared",
              "0.01317"
            ],
            [
              "Standard Error",
              "18.22568"
            ],
            [
              "Observations",
              "96"
            ]
          ]
        }
      ],
      [
        "p",
        "Now the chief investment officer (CIO) joins the meeting and asks you to analyze two regression models (A and B) for the portfolio he manages. He gives you the test results for each of the models, shown in Exhibit 2."
      ],
      [
        "table",
        {
          "title": "Exhibit 2: Breusch–Godfrey and Durbin-Watson Test Results",
          "head": [
            "",
            "Test Type",
            "Test Statistic",
            "Critical Value",
            "Independent Variable Is Lagged Value of Dependent Variable"
          ],
          "rows": [
            [
              "Model A",
              "Breusch–Godfrey",
              "12.124",
              "3.927",
              "Yes"
            ],
            [
              "Model B",
              "Durbin–Watson",
              "3.088",
              "2.387",
              "No"
            ]
          ]
        }
      ],
      [
        "p",
        "The CIO also asks you to test a factor model for multicollinearity among its four explanatory variables. You calculate the variance inflation factor (VIF) for each of the four factors; the results are shown in Exhibit 3."
      ],
      [
        "table",
        {
          "title": "Exhibit 3: Multicollinearity Test Results",
          "head": [
            "Variable",
            "R2",
            "VIF"
          ],
          "rows": [
            [
              "X1",
              "0.748",
              "3.968"
            ],
            [
              "X2",
              "0.451",
              "1.820"
            ],
            [
              "X3",
              "0.942",
              "17.257"
            ],
            [
              "X4",
              "0.926",
              "13.434"
            ]
          ]
        }
      ]
    ],
    "questions": [
      {
        "q": "Calculate the BP test statistic using the data in Exhibit 1 and determine whether there is evidence of heteroskedasticity.",
        "options": [
          "1.264, so there is no evidence of heteroskedasticity",
          "6.251, so there is no evidence of heteroskedasticity",
          "81.792, so there is evidence of heteroskedasticity"
        ],
        "answer": 1,
        "why": "The BP test regresses the squared residuals of Model 3 on its independent variables. Test statistic = n × R² of that BP regression = 96 × 0.06511 = 6.251 (chi-square, one-tailed). 6.251 < 11.07, so we cannot reject the null of no conditional heteroskedasticity.\nA (1.264) wrongly uses the adjusted R² (96 × 0.01317). C (81.792) uses Model 3's own R² (96 × 0.852) instead of the R² from the BP regression."
      },
      {
        "q": "Identify the type of error and its impacts on regression Model A indicated by the data in Exhibit 2.",
        "options": [
          "Serial correlation, invalid coefficient estimates, and deflated standard errors.",
          "Heteroskedasticity, valid coefficient estimates, and deflated standard errors.",
          "Serial correlation, valid coefficient estimates, and inflated standard errors."
        ],
        "answer": 0,
        "why": "The Breusch–Godfrey test checks for serial correlation. For Model A the BG statistic (12.124) is above the critical value (3.927), so serial correlation is present. Because Model A uses a lagged value of the dependent variable as an independent variable, the coefficient estimates are INVALID (inconsistent), and the standard errors are deflated, so t-statistics are inflated.\nB is wrong: BG tests serial correlation, not heteroskedasticity. C is wrong: with a lagged dependent variable the coefficients are not valid, and the standard errors are understated, not inflated. (Without a lagged dependent variable, positive serial correlation leaves the coefficients consistent but still deflates the standard errors.)"
      },
      {
        "q": "Determine using Exhibit 3 which one of the following statements is most likely to be correct. Multicollinearity issues exist for variables:",
        "options": [
          "X1 and X2.",
          "X2 and X3.",
          "X3 and X4."
        ],
        "answer": 2,
        "why": "VIF = [[1|1 − R²]], where R² comes from regressing that variable on the other independent variables. A VIF above 5 calls for investigation and above 10 signals serious multicollinearity. X3 (17.257) and X4 (13.434) are both above 10. X1 (3.968) and X2 (1.820) are below 5, so A and B are wrong."
      },
      {
        "q": "Identify the correct answer related to the following statement.\nPossible solutions for addressing the multicollinearity issues identified in Exhibit 3 include:\n1. excluding one or more of the regression variables.\n2. using a different proxy for one of the variables.\n3. increasing the sample size.",
        "options": [
          "Only Solution 1 is correct.",
          "Only Solution 2 is correct.",
          "Solutions 1, 2, and 3 are each correct."
        ],
        "answer": 2,
        "why": "All three are standard fixes for multicollinearity: drop one or more of the correlated variables, replace one with a different proxy that is less correlated with the others, or use a larger sample (more data lowers the standard errors that multicollinearity inflates)."
      }
    ]
  },
  {
    "id": "elite-rivera",
    "title": "Alwyn Rivera: Elite Investments",
    "topic": "Quantitative Methods",
    "reading": "Multiple Regression",
    "body": [
      [
        "p",
        "Alwyn Rivera is a portfolio manager at Elite Investments (EI) based in the US. Rivera has a shortlist of 50 US public firms and wants to better understand the factors that may explain the cross-sectional variation in these stocks' returns. Based on the finance literature, Rivera believes that firm size and book-to-market ratio are important factors that need to be included in his model. He also thinks that being included in the Dow Jones Industrial Average Index (DJIA) can help a firm get more media attention and potentially attract more investors, which in turn may affect a stock's return."
      ],
      [
        "p",
        "To test his theory, Rivera collects the annual returns (r) of these 50 stocks in the year that just ended, as well as their market capitalizations (Size, in billions of dollars) and book-to-market ratios (BMRatio) at the end of the previous year. He also creates a dummy variable (Dow) that is coded 1 if a stock is included in the DJIA and 0 otherwise, and then runs the following regression:"
      ],
      [
        "p",
        "ri = b0 + b1 lnSizei + b2 BMRatioi + b3 Dowi + εi"
      ],
      [
        "p",
        "where lnSizei is the natural log of the market capitalization of company i in billions of dollars and Dowi is the dummy variable. The output from the regression model is shown in Exhibit 1."
      ],
      [
        "table",
        {
          "title": "Exhibit 1",
          "head": [
            "",
            "Coefficient",
            "t-statistic",
            "p-value"
          ],
          "rows": [
            [
              "Intercept",
              "-0.6483",
              "-3.8773",
              "0.0003"
            ],
            [
              "Size",
              "0.1777",
              "5.1125",
              "<0.0001"
            ],
            [
              "BMRatio",
              "0.0433",
              "2.9346",
              "0.0052"
            ],
            [
              "InDow",
              "-0.1641",
              "-1.8362",
              "0.0728"
            ]
          ]
        }
      ],
      [
        "table",
        {
          "title": "Exhibit 1 (continued)",
          "head": [
            "",
            ""
          ],
          "rows": [
            [
              "R2",
              "0.3700"
            ],
            [
              "Adjusted R2",
              "0.3289"
            ],
            [
              "Standard Error",
              "0.2827"
            ],
            [
              "Observations",
              "50"
            ]
          ]
        }
      ],
      [
        "table",
        {
          "title": "Exhibit 1 (continued): ANOVA",
          "head": [
            "",
            "Degrees of freedom",
            "Sum of squares",
            "Mean squares",
            "F-statistic",
            "Significance F"
          ],
          "rows": [
            [
              "Regression",
              "3",
              "2.1593",
              "0.7198",
              "9.006",
              "<0.0001"
            ],
            [
              "Residual",
              "46",
              "3.6766",
              "0.0799",
              "",
              ""
            ],
            [
              "Total",
              "49",
              "5.8359",
              "",
              "",
              ""
            ]
          ]
        }
      ],
      [
        "p",
        "Rivera shows his model and results to a summer intern, and asks whether he should use the reported R2 or adjusted R2 to measure the goodness of fit of his model. The intern replies, \"Adjusted R2 would be more appropriate in this case because the model has more than one independent variable. Adjusted R2 is adjusted for degrees of freedom and nondecreasing in the number of independent variables.\""
      ]
    ],
    "questions": [
      {
        "q": "Based on the results in Exhibit 1, which of the following interpretations regarding the coefficient of the variable BMRatio is most accurate?",
        "options": [
          "A stock's annual return is expected to increase by 1% for each 0.043% increase in its book-to-market ratio.",
          "Holding MCap and InDow variables constant, a stock's annual return is expected to increase by 0.043% for each 1% increase in its book-to-market ratio.",
          "Assuming MCap and InDow variables are both zero, a stock's annual return is expected to increase by 0.043% for each 1% increase in its book-to-market ratio."
        ],
        "answer": 1,
        "why": "A slope coefficient in multiple regression is a partial effect: the change in the dependent variable for a one-unit change in that variable, holding all the other independent variables constant. So 0.043 is the expected rise in return per unit rise in BMRatio, with size and DJIA membership held constant. A reverses the relationship. C is wrong: the coefficient means 'holding the others constant', not 'when the others are zero'; setting them to zero would be a different (simple) regression with a different coefficient."
      },
      {
        "q": "Using two-tailed t-tests to determine if the coefficients of the independent variables are equal to zero at the 0.05 significance level, the null hypotheses are most likely rejected for the coefficients of:",
        "options": [
          "Size and InDow only.",
          "Size and BMRatio only.",
          "InDow and BMRatio only."
        ],
        "answer": 1,
        "why": "Reject H0 (coefficient = 0) when the p-value is below 0.05. Size (p < 0.0001) and BMRatio (p = 0.0052) qualify. InDow (p = 0.0728) does not, so it is not significant at 5% (it would be at 10%). That rules out A and C, which both include InDow."
      },
      {
        "q": "The predicted annual return for a stock that is included in the DJIA, has a market capitalization of $52 billion and a book-to-market ratio of 0.45 is closest to:",
        "options": [
          "−9.08%.",
          "3.59%.",
          "7.33%."
        ],
        "answer": 0,
        "why": "r = −0.6483 + 0.1777 × ln(Size in $ billions) + 0.0433 × BMRatio − 0.1641 × Dow, with Size = 52, BMRatio = 0.45 and Dow = 1 (in the DJIA):\n= −0.6483 + 0.1777 × ln(52) + 0.0433 × 0.45 − 0.1641 × 1\n= −0.6483 + 0.1777 × 3.9512 + 0.0195 − 0.1641 = −0.0908 = −9.08%.\nB (3.59%) plugs in ln(52,000,000,000) instead of ln(52), and then mislabels 3.59 as a percentage. C (7.33%) sets Dow = 0, which is the prediction for a stock NOT in the DJIA."
      },
      {
        "q": "The intern’s response to Rivera's question regarding the adjusted R2 measure is:",
        "options": [
          "correct.",
          "incorrect with regard to the nondecreasing feature.",
          "incorrect with regard to its appropriateness for Rivera's model."
        ],
        "answer": 1,
        "why": "Adjusted R² is the right measure for a model with several independent variables, so that part is correct and C is wrong. But adjusted R² is NOT nondecreasing: it can fall when a new variable adds only a little to R² (|t| < 1), and it can even be negative. It is plain R² that never decreases when variables are added."
      }
    ]
  },
  {
    "id": "sousa",
    "title": "Bruno Sousa: Binomial Option Valuation",
    "topic": "Derivatives",
    "reading": "Valuation of Contingent Claims",
    "body": [
      [
        "p",
        "Bruno Sousa has been hired recently to work with senior analyst Camila Rocha. Rocha gives him three option valuation tasks."
      ],
      [
        "h",
        "Alpha Company"
      ],
      [
        "p",
        "Sousa’s first task is to illustrate how to value a call option on Alpha Company with a one-period binomial option pricing model. It is a non-dividend-paying stock, and the inputs are as follows."
      ],
      [
        "p",
        "The current stock price is 50, and the call option exercise price is 50."
      ],
      [
        "p",
        "In one period, the stock price will either rise to 56 or decline to 46."
      ],
      [
        "p",
        "The risk-free rate of return is 5% per period."
      ],
      [
        "p",
        "Based on the model, Rocha asks Sousa to estimate the hedge ratio, the risk-neutral probability of an up move, and the price of the call option. In the illustration, Sousa is also asked to describe related arbitrage positions to use if the call option is overpriced relative to the model."
      ],
      [
        "h",
        "Beta Company"
      ],
      [
        "p",
        "Next, Sousa uses the two-period binomial model to estimate the value of a European-style call option on Beta Company’s common shares. The inputs are as follows."
      ],
      [
        "p",
        "The current stock price is 38, and the call option exercise price is 40."
      ],
      [
        "p",
        "The up factor (u) is 1.300, and the down factor (d) is 0.800."
      ],
      [
        "p",
        "The risk-free rate of return is 3% per period."
      ],
      [
        "p",
        "Sousa then analyzes a put option on the same stock. All of the inputs, including the exercise price, are the same as for the call option. He estimates that the value of a European-style put option is 4.53. Exhibit 1 summarizes his analysis. Sousa next must determine whether an American-style put option would have the same value."
      ],
      [
        "table",
        {
          "title": "Exhibit 1: Two-Period Binomial European-Style Put Option on Beta Company",
          "head": [
            "Time",
            "Node",
            "Underlying",
            "Put",
            "Hedge ratio"
          ],
          "rows": [
            [
              "0",
              "—",
              "38",
              "4.5346",
              "−0.4307"
            ],
            [
              "1",
              "Up",
              "49.40",
              "0.2517",
              ""
            ],
            [
              "1",
              "Down",
              "30.40",
              "8.4350",
              ""
            ],
            [
              "2",
              "Up-up",
              "64.22",
              "0",
              ""
            ],
            [
              "2",
              "Up-down",
              "39.52",
              "0.48",
              ""
            ],
            [
              "2",
              "Down-down",
              "24.32",
              "15.68",
              ""
            ]
          ],
          "note": "Your copy shows only the Time 0 node (38; put 4.5346; hedge ratio −0.4307). The Time 1 and Time 2 values are taken from the solution."
        }
      ],
      [
        "p",
        "Sousa makes two statements with regard to the valuation of a European-style option under the expectations approach."
      ],
      [
        "h",
        "Statement 1"
      ],
      [
        "p",
        "The calculation involves discounting at the risk-free rate."
      ],
      [
        "h",
        "Statement 2"
      ],
      [
        "p",
        "The calculation uses risk-neutral probabilities instead of true probabilities."
      ],
      [
        "p",
        "Rocha asks Sousa whether it is ever profitable to exercise American options prior to maturity. Sousa answers, “I can think of two possible cases. The first case is the early exercise of an American call option on a dividend-paying stock. The second case is the early exercise of an American put option.”"
      ],
      [
        "h",
        "Interest Rate Option"
      ],
      [
        "p",
        "The final option valuation task involves an interest rate option. Sousa must value a two-year, European-style call option on a one-year spot rate. The notional value of the option is 1 million, and the exercise rate is 2.75%. The risk-neutral probability of an up move is 0.50. The current and expected one-year interest rates are shown in Exhibit 2, along with the values of a one-year zero-coupon bond of 1 notional value for each interest rate."
      ],
      [
        "table",
        {
          "title": "Exhibit 2: Two-Year Interest Rate Lattice for an Interest Rate Option",
          "head": [
            "Time",
            "Node",
            "One-year rate",
            "Value of 1-year zero (1 notional)"
          ],
          "rows": [
            [
              "0",
              "—",
              "3%",
              "0.970874"
            ],
            [
              "1",
              "Up",
              "4%",
              "0.961538"
            ],
            [
              "1",
              "Down",
              "2%",
              "0.980392"
            ],
            [
              "2",
              "Up-up",
              "5%",
              "0.952381"
            ],
            [
              "2",
              "Up-down",
              "3%",
              "0.970874"
            ],
            [
              "2",
              "Down-down",
              "1%",
              "0.990099"
            ]
          ],
          "note": "Your copy shows only the Time 0 node (3%, 0.970874). The Time 1 and Time 2 rates are taken from the solution."
        }
      ],
      [
        "p",
        "Rocha asks Sousa why the value of a similar in-the-money interest rate call option decreases if the exercise price is higher. Sousa provides two reasons."
      ],
      [
        "h",
        "Reason 1"
      ],
      [
        "p",
        "The exercise value of the call option is lower."
      ],
      [
        "h",
        "Reason 2"
      ],
      [
        "p",
        "The risk-neutral probabilities are changed."
      ]
    ],
    "questions": [
      {
        "q": "The optimal hedge ratio for the Alpha Company call option using the one-period binomial model is closest to:",
        "options": [
          "0.60.",
          "0.67.",
          "1.67."
        ],
        "answer": 0,
        "why": "Payoffs: up, c+ = Max(0, 56 − 50) = 6; down, c− = Max(0, 46 − 50) = 0.\nh = [[c+ − c−|S+ − S−]] = [[6 − 0|56 − 46]] = 0.60 shares per call.\nC (1.67) flips the ratio (10 ÷ 6). A call's hedge ratio always lies between 0 and 1."
      },
      {
        "q": "The risk-neutral probability of the up move for the Alpha Company stock is closest to:",
        "options": [
          "0.06.",
          "0.40.",
          "0.65."
        ],
        "answer": 2,
        "why": "u = 56 ÷ 50 = 1.12 and d = 46 ÷ 50 = 0.92.\nπ = [[1 + r − d|u − d]] = [[1.05 − 0.92|1.12 − 0.92]] = [[0.13|0.20]] = 0.65.\nIt depends only on r, u and d, not on the option or anyone's risk preferences."
      },
      {
        "q": "The value of the Alpha Company call option is closest to:",
        "options": [
          "3.71.",
          "5.71.",
          "6.19."
        ],
        "answer": 0,
        "why": "Expectations approach: c = [[π × c+ + (1 − π) × c−|1 + r]] = [[0.65 × 6 + 0.35 × 0|1.05]] = [[3.9|1.05]] = 3.714.\nNo-arbitrage approach: c = hS − PV(hS− − c−) = 0.60 × 50 − [[0.60 × 46|1.05]] = 30 − 26.286 = 3.714. Both approaches give the same value.\nB (5.71) is 6 ÷ 1.05: it wrongly assumes the up move is certain."
      },
      {
        "q": "For the Alpha Company option, the positions to take advantage of the arbitrage opportunity are to write the call and:",
        "options": [
          "short shares of Alpha stock and lend.",
          "buy shares of Alpha stock and borrow.",
          "short shares of Alpha stock and borrow."
        ],
        "answer": 1,
        "why": "If the call is overpriced, sell it and buy the replicating portfolio: buy h = 0.60 shares (cost 30) and borrow the PV of hS− − c− = [[0.60 × 46|1.05]] = 26.287. The replicating portfolio costs 30 − 26.287 = 3.713. Selling the call at, say, 4.50 locks in 4.50 − 3.713 = 0.787 today, with zero net cash flow in both the up and down states.\nA is the hedge for an UNDERpriced call (buy the call, short shares, lend). C mixes the two."
      },
      {
        "q": "The value of the European-style call option on Beta Company shares is closest to:",
        "options": [
          "4.83.",
          "5.12.",
          "7.61."
        ],
        "answer": 0,
        "why": "π = [[1.03 − 0.80|1.30 − 0.80]] = 0.46.\nTerminal payoffs: c++ = Max(0, 1.30² × 38 − 40) = 24.22; c+− = Max(0, 1.30 × 0.80 × 38 − 40) = Max(0, 39.52 − 40) = 0; c−− = 0.\nc = [[π² × c++ + 2π(1 − π) × c+− + (1 − π)² × c−−|1.03²]] = [[0.46² × 24.22|1.03²]] = [[5.1250|1.0609]] = 4.8308.\nB (5.12) forgets to discount the expected payoff back two periods."
      },
      {
        "q": "The value of the American-style put option on Beta Company shares is closest to:",
        "options": [
          "4.53.",
          "5.15.",
          "9.32."
        ],
        "answer": 1,
        "why": "An American put can be exercised early, so at each Time 1 node compare holding (from Exhibit 1) with exercising now:\n• Up node (S = 49.40): exercise value 40 − 49.40 < 0, so hold: 0.2517.\n• Down node (S = 30.40): exercise value 40 − 30.40 = 9.60 > holding value 8.4350, so exercise early: use 9.60.\np = [[0.46 × 0.2517 + 0.54 × 9.60|1.03]] = 5.145.\nA (4.53) is the European value, which ignores early exercise. C (9.32) is just 9.60 ÷ 1.03, the down-node value alone."
      },
      {
        "q": "Which of Sousa’s statements about binomial models is correct?",
        "options": [
          "Statement 1 only",
          "Statement 2 only",
          "Both Statement 1 and Statement 2"
        ],
        "answer": 2,
        "why": "Under the expectations approach, the expected payoff is computed with risk-neutral probabilities (not true probabilities) and then discounted at the risk-free rate. Both statements are correct."
      },
      {
        "q": "Based on Exhibit 2 and the parameters used by Sousa, the value of the interest rate option is closest to:",
        "options": [
          "5,251.",
          "6,236.",
          "6,429."
        ],
        "answer": 2,
        "why": "Payoff per 1 of notional at Time 2 = Max(0, rate − 2.75%): up-up 5% → 0.0225; up-down 3% → 0.0025; down-down 1% → 0.\nWork backwards, discounting each node at that node's OWN one-year rate (its zero value), with π = 0.50:\n• Time 1 up (4%): 0.961538 × (0.5 × 0.0225 + 0.5 × 0.0025) = 0.012019.\n• Time 1 down (2%): 0.980392 × (0.5 × 0.0025 + 0.5 × 0) = 0.001225.\n• Time 0 (3%): 0.970874 × (0.5 × 0.012019 + 0.5 × 0.001225) = 0.006429.\n× 1,000,000 notional = 6,429."
      },
      {
        "q": "Which of Sousa’s reasons for the decrease in the value of the interest rate option is correct?",
        "options": [
          "Reason 1 only",
          "Reason 2 only",
          "Both Reason 1 and Reason 2"
        ],
        "answer": 0,
        "why": "Reason 1 is correct: a higher exercise rate lowers the call's payoff, Max(0, rate − exercise rate), at expiry. Reason 2 is wrong: risk-neutral probabilities come from the market's interest rate paths (the tree), not from the terms of one particular option, so they don't change."
      }
    ]
  },
  {
    "id": "trident",
    "title": "Alice Lee: Trident Advisory Group",
    "topic": "Derivatives",
    "reading": "Valuation of Contingent Claims",
    "body": [
      [
        "p",
        "Trident Advisory Group manages assets for high-net-worth individuals and family trusts."
      ],
      [
        "p",
        "Alice Lee, chief investment officer, is meeting with a client, Noah Solomon, to discuss risk management strategies for his portfolio. Solomon is concerned about recent volatility and has asked Lee to explain options valuation and the use of options in risk management."
      ],
      [
        "h",
        "Options on Stock"
      ],
      [
        "p",
        "Lee uses the BSM model to price TCB, which is one of Solomon’s holdings. Exhibit 1 provides the current stock price (S), exercise price (X), risk-free interest rate (r), volatility (σ), and time to expiration (T) in years as well as selected outputs from the BSM model. TCB does not pay a dividend."
      ],
      [
        "table",
        {
          "title": "Exhibit 1: BSM Model for European Options on TCB — BSM Inputs",
          "head": [
            "S",
            "X",
            "r",
            "σ",
            "T"
          ],
          "rows": [
            [
              "$57.03",
              "55",
              "0.22%",
              "32%",
              "0.25"
            ]
          ]
        }
      ],
      [
        "table",
        {
          "title": "Exhibit 1 (continued): BSM Outputs",
          "head": [
            "d1",
            "N(d1)",
            "d2",
            "N(d2)",
            "BSM Call Price",
            "BSM Put Price"
          ],
          "rows": [
            [
              "0.3100",
              "0.6217",
              "0.1500",
              "0.5596",
              "$4.695",
              "$2.634"
            ]
          ]
        }
      ],
      [
        "h",
        "Options on Futures"
      ],
      [
        "p",
        "The Black model valuation and selected outputs for options on another of Solomon’s holdings, the GPX 500 Index (GPX), are shown in Exhibit 2. The spot index level for the GPX is 187.95, and the index is assumed to pay a continuous dividend at a rate of 2.2% (δ) over the life of the options being valued, which expire in 0.36 years. A futures contract on the GPX also expiring in 0.36 years is currently priced at 186.73."
      ],
      [
        "table",
        {
          "title": "Exhibit 2: Black Model for European Options on the GPX Index — Black Model Inputs",
          "head": [
            "GPX Index",
            "X",
            "r",
            "σ",
            "T",
            "δ Yield"
          ],
          "rows": [
            [
              "187.95",
              "180",
              "0.39%",
              "24%",
              "0.36",
              "2.2%"
            ]
          ]
        }
      ],
      [
        "table",
        {
          "title": "Exhibit 2 (continued): Values and Prices",
          "head": [
            "Black Model Call Value",
            "Black Model Put Value",
            "Market Call Price",
            "Market Put Price"
          ],
          "rows": [
            [
              "$14.2089",
              "$7.4890",
              "$14.26",
              "$7.20"
            ]
          ]
        }
      ],
      [
        "table",
        {
          "title": "Exhibit 2 (continued): Option Greeks",
          "head": [
            "Delta (call)",
            "Delta (put)",
            "Gamma (call or put)",
            "Theta (call) daily",
            "Rho (call) per %",
            "Vega per % (call or put)"
          ],
          "rows": [
            [
              "0.6232",
              "–0.3689",
              "0.0139",
              "–0.0327",
              "0.3705",
              "0.4231"
            ]
          ]
        }
      ],
      [
        "p",
        "After reviewing Exhibit 2, Solomon asks Lee which option Greek letter best describes the changes in an option’s value as time to expiration declines."
      ],
      [
        "p",
        "Solomon observes that the market price of the put option in Exhibit 2 is $7.20. Lee responds that she used the historical volatility of the GPX of 24% as an input to the BSM model, and she explains the implications for the implied volatility for the GPX."
      ],
      [
        "h",
        "Options on Interest Rates"
      ],
      [
        "p",
        "Solomon forecasts the three-month MRR will exceed 0.85% in six months and is considering using options to reduce the risk of rising rates. He asks Lee to value an interest rate call with a strike price of 0.85%. The current three-month MRR is 0.60%, and an FRA for a three-month MRR loan beginning in six months is currently 0.75%."
      ],
      [
        "h",
        "Hedging Strategy for the Equity Index"
      ],
      [
        "p",
        "Solomon’s portfolio currently holds 10,000 shares of an exchange-traded fund (ETF) that tracks the GPX. He is worried the index will decline. He remarks to Lee, “You have told me how the BSM model can provide useful information for reducing the risk of my GPX position.” Lee suggests a delta hedge as a strategy to protect against small moves in the GPX Index."
      ],
      [
        "p",
        "Lee also indicates that a long position in puts could be used to hedge larger moves in the GPX. She notes that although hedging with either puts or calls can result in a delta-neutral position, they would need to consider the resulting gamma."
      ]
    ],
    "questions": [
      {
        "q": "Based on Exhibit 1 and the BSM valuation approach, the initial portfolio required to replicate the long call option payoff is:",
        "options": [
          "long 0.3100 shares of TCB stock and short 0.5596 shares of a zero-coupon bond.",
          "long 0.6217 shares of TCB stock and short 0.1500 shares of a zero-coupon bond.",
          "long 0.6217 shares of TCB stock and short 0.5596 shares of a zero-coupon bond."
        ],
        "answer": 2,
        "why": "A BSM call = long N(d1) shares + short N(d2) zero-coupon bonds, each bond worth the PV of the exercise price, e^(−rT)X = e^(−0.0022 × 0.25) × 55 = $54.97.\nSo: long N(d1) = 0.6217 shares, short N(d2) = 0.5596 bonds. Check: 0.6217 × 57.03 − 0.5596 × 54.97 ≈ $4.694, the call price.\nA and B use d1 or d2 themselves (0.3100, 0.1500) instead of the probabilities N(d1) and N(d2)."
      },
      {
        "q": "To determine the long put option value on TCB stock in Exhibit 1, the correct BSM valuation approach is to compute:",
        "options": [
          "0.4404 times the present value of the exercise price minus 0.6217 times the price of TCB stock.",
          "0.4404 times the present value of the exercise price minus 0.3783 times the price of TCB stock.",
          "0.5596 times the present value of the exercise price minus 0.6217 times the price of TCB stock."
        ],
        "answer": 1,
        "why": "BSM put: p = e^(−rT) X × N(−d2) − S × N(−d1).\nN(−d2) = 1 − N(d2) = 1 − 0.5596 = 0.4404; N(−d1) = 1 − N(d1) = 1 − 0.6217 = 0.3783.\nSo the put = long 0.4404 bonds (PV of X = $54.97) and short 0.3783 shares: 0.4404 × 54.97 − 0.3783 × 57.03 ≈ $2.634.\nA and C wrongly use the call's N(d1) = 0.6217 for the shares (and C also the call's N(d2))."
      },
      {
        "q": "What are the correct spot value (S) and the risk-free rate (r) that Lee should use as inputs for the Black model?",
        "options": [
          "186.73 and 0.39%, respectively",
          "186.73 and 2.20%, respectively",
          "187.95 and 2.20%, respectively"
        ],
        "answer": 0,
        "why": "The Black model values options on FUTURES: c = e^(−rT) [F0(T) N(d1) − X N(d2)]. The underlying is the futures price, 186.73 (not the spot index of 187.95), and the discount rate is the risk-free rate, 0.39%. The 2.2% dividend yield is already reflected in the futures price, so it is not the discount rate."
      },
      {
        "q": "Which of the following is the correct answer to Solomon’s question regarding the option Greek letter?",
        "options": [
          "Vega",
          "Theta",
          "Gamma"
        ],
        "answer": 1,
        "why": "Theta measures how an option's value changes as time to expiration passes (time decay); Exhibit 2's call theta is −0.0327 a day. Vega is sensitivity to volatility; gamma is how much delta changes when the underlying moves."
      },
      {
        "q": "Based on Solomon’s observation about the model price and market price for the put option in Exhibit 2, the implied volatility for the GPX is most likely:",
        "options": [
          "less than the historical volatility.",
          "equal to the historical volatility.",
          "greater than the historical volatility."
        ],
        "answer": 0,
        "why": "Option values rise with volatility (positive vega). Using 24% historical volatility, the model values the put at $7.4890, above the market price of $7.20. For the model to match the lower market price, the volatility input must be lower, so the implied volatility is below 24%."
      },
      {
        "q": "The valuation inputs used by Lee to price a call reflecting Solomon’s interest rate views should include an underlying FRA rate of:",
        "options": [
          "0.60% with six months to expiration.",
          "0.75% with nine months to expiration.",
          "0.75% with six months to expiration."
        ],
        "answer": 2,
        "why": "An interest rate option is valued with the Black model using the FRA (forward) rate for the period that starts when the option expires. Solomon's view is about three-month MRR in six months, so the underlying is the 6-month FRA rate of 0.75%, with six months to expiration. A uses today's spot MRR (0.60%), not the forward rate. B uses nine months, the END of the loan period, rather than when the option expires."
      },
      {
        "q": "The strategy suggested by Lee for hedging small moves in Solomon’s ETF position would most likely involve:",
        "options": [
          "selling put options.",
          "selling call options.",
          "buying call options."
        ],
        "answer": 1,
        "why": "Solomon's 10,000 ETF shares have a delta of +10,000 (each share has delta +1). To make the position delta-neutral he needs negative delta: SELL calls (each short call has delta −0.6232). Number of calls = [[portfolio delta|call delta]] = [[10,000|0.6232]] ≈ 16,046 calls.\nA (selling puts) and C (buying calls) both ADD positive delta, increasing his exposure to a fall. (Buying puts would also work.)"
      },
      {
        "q": "Lee’s put-based hedge strategy for Solomon’s ETF position would most likely result in a portfolio gamma that is:",
        "options": [
          "negative.",
          "neutral.",
          "positive."
        ],
        "answer": 2,
        "why": "Shares have gamma 0 (their delta is always +1). Long options always have positive gamma, and a put's gamma equals the call's gamma (put–call parity). So adding LONG puts makes the portfolio gamma positive. A delta hedge built by selling calls would instead give negative gamma."
      }
    ]
  },
  {
    "id": "princeton",
    "title": "Arnie Burr: Princeton Capital",
    "topic": "Derivatives",
    "reading": "Valuation of Contingent Claims",
    "body": [
      [
        "p",
        "Arnie Burr is CEO and chief investment officer of Princeton Capital, a registered investment advisory firm. He is working with Tom Jeffinsin, head trader, and Jim Madisox, a new analyst. They meet to discuss option valuation methodologies in the context of the firm’s use of derivatives to manage client portfolios."
      ],
      [
        "p",
        "Burr begins the discussion by stating that the Black–Scholes–Merton (BSM) model is a relatively straightforward tool for valuing options despite its rigorous computational components. Burr writes the BSM model on the firm’s whiteboard, presented as Exhibit 1."
      ],
      [
        "h",
        "Exhibit 1: BSM Model for Options on Non-Dividend Paying Stocks"
      ],
      [
        "p",
        "c = SN(d1) – e^(–rT)XN(d2),\nand\np = e^(–rT)XN(–d2) – SN(–d1),\nwhere\nd1 = [[ln(S/X) + (r + σ²/2)T|σ√T]] and d2 = d1 − σ√T."
      ],
      [
        "p",
        "(The definitions of d1 and d2 were missing from the copied text; the standard BSM definitions are shown.)"
      ],
      [
        "p",
        "Burr wants to assess Madisox’s comprehension of the components of the BSM. Madisox states that a call option can be viewed as a leveraged position in the underlying stock. To replicate a call option, the appropriate strategy is to purchase N(d1) shares and simultaneously borrow an amount e^(–rT)XN(–d2)."
      ],
      [
        "p",
        "Jeffinsin introduces option Greeks into the conversation, stating, “The BSM model contains six inputs: the stock price, the option’s exercise price, dividends, the risk-free interest rate, time to maturity, and implied volatility. The effect of the BSM model inputs on the price of an option can be measured by the option Greeks. Delta and gamma are measures of the relationship between a change in the stock price and the option price. Theta is a measure that typically approaches zero at an increasing rate as the option approaches maturity. Holding all other factors constant, Vega is a measure that typically is higher whenever an option is “out of the money.”"
      ],
      [
        "p",
        "Burr states that a client would like to sell calls on 1,000 shares of Weehawkin stock. Stock and option information on Weehawkin stock is presented in Exhibit 2."
      ],
      [
        "table",
        {
          "title": "Exhibit 2: Option Information on Weehawkin Corporation Stock",
          "head": [
            "",
            ""
          ],
          "rows": [
            [
              "Stock Price",
              "$100"
            ],
            [
              "Call Option Exercise Price",
              "$100"
            ],
            [
              "Call Option Value",
              "$9.23"
            ],
            [
              "Call Option Delta",
              "0.587"
            ],
            [
              "Call Option Gamma",
              "0.019"
            ]
          ]
        }
      ],
      [
        "p",
        "Burr asks Madisox to outline an appropriate hedging strategy. Madisox replies that to be fully hedged, an option trader will need to consider how changes in the stock price relative to the option exercise price affect the value of the call options. To be fully hedged against a small change in the stock price, Madisox suggests that the proper strategy to construct the hedge is to use call option delta and add the call option gamma to arrive at the number of shares required."
      ],
      [
        "p",
        "Madisox notes that the implied volatility for the Weehawkin call option outlined in Exhibit 2 is 30%. With respect to other call options on Weehawkin stock, Madisox states the volatility surface provides a visualization of how implied volatility varies across both exercise price and time to maturity. Burr adds that implied volatility is useful in assessing the market price of risk since it is calculated on the basis of the historical volatility in the stock price. Jeffinsin concurs and adds that the volatility smile and skew typically have identical shapes whenever the market price of hedging is rising."
      ]
    ],
    "questions": [
      {
        "q": "Madisox’s statement about the BSM model is least likely correct with respect to:",
        "options": [
          "purchasing (d1) shares.",
          "the leveraged position in a stock.",
          "borrowing an amount e–rTXN(–d2)."
        ],
        "answer": 2,
        "why": "A call is a leveraged stock position: buy N(d1) shares and BORROW e^(−rT) X N(d2), which is exactly the second term of c = S N(d1) − e^(−rT) X N(d2). The amount e^(−rT) X N(−d2) is what is LENT when replicating a put (p = e^(−rT) X N(−d2) − S N(−d1)). A and B are correct parts of his statement."
      },
      {
        "q": "Jeffinsin’s statement about option Greeks is least likely correct with respect to:",
        "options": [
          "vega.",
          "theta.",
          "delta and gamma."
        ],
        "answer": 0,
        "why": "Vega (sensitivity to volatility) is HIGHEST for options at or near the money and lower when they are deep in or out of the money, so his vega claim is wrong. B is wrong: theta (time decay) does behave as he describes, changing at an increasing rate as expiry nears. C is wrong: delta and gamma do both measure how the option responds to changes in the stock price."
      },
      {
        "q": "Is Madisox’s suggested hedging strategy for Weehawkin options most likely correct?",
        "options": [
          "Yes",
          "No, he should only use delta",
          "No, he should subtract gamma"
        ],
        "answer": 0,
        "why": "Per the source answer: delta (0.587) shows how many shares hedge one call now, and gamma (0.019) shows how much delta changes for a $1 move in the stock. Adding them, 0.587 + 0.019 = 0.606 shares per call, anticipates the new delta after a small rise in the stock. C is wrong: gamma is added, not subtracted.\nNote: in the standard curriculum a plain delta hedge uses delta alone, and gamma risk is neutralized with other options, not shares. Treat this answer as specific to this question."
      },
      {
        "q": "Whose comment regarding implied volatility is most likely correct?",
        "options": [
          "Burr’s",
          "Madisox’s",
          "Jeffinsin’s"
        ],
        "answer": 1,
        "why": "Madisox is right: the volatility surface shows implied volatility across both exercise prices and maturities. A is wrong: implied volatility is backed out from MARKET option prices and reflects expected FUTURE volatility; it is not calculated from historical volatility. C is wrong: when demand for hedging rises, the skew steepens, so its shape differs from the smile; they don't become identical."
      }
    ]
  },
  {
    "id": "northside",
    "title": "Brian Patrick: Northside Capital Advisers",
    "topic": "Ethical and Professional Standards",
    "reading": "Guidance for Standards I–VII",
    "body": [
      [
        "p",
        "Brian Patrick, CFA, has recently joined Northside Capital Advisers (Northside) as the firm’s assistant compliance officer. Northside manages individual accounts with conservative mandates for a variety of retirements funds, as well as individual accounts for high-net-worth investors with long investment horizons. Kyle Sang, CFA, is Northside’s chief compliance officer and Patrick’s supervisor. Sang has been with the firm since its inception and wrote the firm’s original Code of Ethics and Compliance Manual. Sang provides Patrick with a copy of both documents and asks Patrick to review them. He instructs Patrick to highlight any areas he feels should be revised or enhanced. Patrick lists the items that need to be addressed."
      ],
      [
        "p",
        "The first item Patrick adds to his list concerns the responsibilities of supervisors. Although the information contained in the Compliance Manual is accurate, he believes it needs to be augmented so the firm’s supervisors have a clear understanding of their responsibilities. He advises adding the following items to the firm’s Compliance Manual, recommending Supervisors should do the following:"
      ],
      [
        "p",
        "Recommendation 1: Conduct an initial review of the firm’s Policies and Procedures, and review as necessary to ensure they are consistent with applicable laws and regulations."
      ],
      [
        "p",
        "Recommendation 2: Incorporate a professional conduct evaluation as part of the employee’s performance review."
      ],
      [
        "p",
        "Recommendation 3: Review the actions of all the firm’s employees, and identify violators."
      ],
      [
        "p",
        "Patrick believes he needs a better understanding of the investment process before he makes any investment-policy-related recommendations. He meets with Staci Canton, the firm’s chief investment officer. Following his meeting with Canton, Patrick suggests the following enhancements to the firm’s Compliance Manual related to investment research:"
      ],
      [
        "p",
        "Proposal 1: Develop criteria for assessing analysts’ research quality and contribution, including the accuracy and timing of their recommendations."
      ],
      [
        "p",
        "Proposal 2: Appoint a supervisor to review and approve communication material."
      ],
      [
        "p",
        "Proposal 3: Develop detailed, written guidance that establishes the due diligence procedures."
      ],
      [
        "p",
        "Patrick asks Canton to provide him with a copy of a recent research report that would have been distributed to the firm’s clients. Patrick is provided a copy of the PT Matias (PT) report, written by Amanda Burt, CFA. PT is involved in the manufacture of aluminum cans supplied to the soft drink industry. She mentions that PT has recently gone through a reorganization and is in a turnaround situation, so the potential returns are quite large. The shares were recently purchased for all client portfolios in a block trade. After reviewing the report, Patrick meets with Burt to discuss her approach to researching companies, meeting with company management, and determining earnings estimates. Burt explains to Patrick how carefully she documents her meetings with management and shares her notes with him. He compares the meeting notes with Burt’s recent report and notices she has included management’s guidance for earnings and margins along with her own estimates."
      ],
      [
        "p",
        "Patrick’s review of the firm’s Code and Compliance Policies and Procedures is almost complete. The final item to review is how the firm handles employees’ trading. He notices the current Policies and Procedures are lacking. He notes that the firm currently restricts employee participation in IPOs, has a very narrow blackout period for employees trading securities on their buy list, and ensures personal trading policies are kept confidential. Sang tells Patrick of the difficulty he experienced in trying to get more robust personal trading policies and procedures approved. The board has historically been reluctant to put restrictions in place that limit the staff’s ability to invest their personal funds."
      ]
    ],
    "questions": [
      {
        "q": "Which of Patrick’s recommendations is most likely insufficient to comply with the Standard relating to responsibilities of supervisors?",
        "options": [
          "Recommendation 1",
          "Recommendation 2",
          "Recommendation 3"
        ],
        "answer": 0,
        "why": "Standard IV(C), Responsibilities of Supervisors: once a compliance program exists, supervisors must review and update it PERIODICALLY (and whenever laws change) so it stays adequate. An initial review plus reviews 'as necessary' does not commit to periodic reviews, so Recommendation 1 falls short. Recommendations 2 (including professional conduct in performance reviews) and 3 (reviewing employees' actions and identifying violators) are appropriate supervisory procedures."
      },
      {
        "q": "To indicate the area of the investment research process he wants to address, Patrick should most likely label the proposals as follows:",
        "options": [
          "Proposal 1 = Compensation, Proposal 2 = Reasonable Basis, Proposal 3 = Distribution.",
          "Proposal 1 = Reasonable Basis, Proposal 2 = Distribution, Proposal 3 = Compensation.",
          "Proposal 1 = Compensation, Proposal 2 = Distribution, Proposal 3 = Reasonable Basis."
        ],
        "answer": 2,
        "why": "These are Standard V(A), Diligence and Reasonable Basis, recommended procedures:\n• Compensation (Proposal 1): measurable criteria for the quality, contribution and accuracy of analysts' research, used in evaluating and paying them.\n• Distribution (Proposal 2): a supervisory analyst reviews and approves material before it goes out.\n• Reasonable Basis (Proposal 3): written due diligence procedures for judging whether a recommendation has a reasonable and adequate basis.\nA swaps Distribution and Reasonable Basis; B swaps Compensation and Reasonable Basis."
      },
      {
        "q": "Which of the following Standards has most likely been violated in relation to the research report and purchase of PT Matias?",
        "options": [
          "Suitability",
          "Fair Dealing",
          "Misrepresentation"
        ],
        "answer": 0,
        "why": "Standard III(C), Suitability: a high-risk turnaround stock was bought for ALL client portfolios, including the retirement accounts with conservative mandates, so it was not consistent with those portfolios' objectives and constraints. B is wrong: buying for everyone in one block trade treats clients fairly (no one was favoured). C is wrong: Burt cited management's guidance alongside her own estimates, so she did not present others' work as her own."
      },
      {
        "q": "Which of Northside’s current personal trading policies is least consistent with the recommended procedures for the Standard relating to priority of transactions?",
        "options": [
          "IPO restriction",
          "Policy confidentiality",
          "Blackout trading window"
        ],
        "answer": 1,
        "why": "Standard VI(B), Priority of Transactions, recommends that firms disclose their personal-investing policies to investors on request; keeping them confidential goes against this. A is wrong: restricting employees from IPOs is a recommended procedure (it avoids taking opportunities from clients or appearing to receive favours). C is wrong: a blackout period, even a narrow one, is recommended to stop front-running client trades."
      }
    ]
  }
];


// Link each question back to its vignette and topic (used by the wrong-answers notebook), and number them in order (1–23 match the original PDF).
let qNum = 0;
VIGNETTES.forEach(v => v.questions.forEach(q => { q.vignette = v; q.topic = v.topic; q.reading = v.reading; q.num = ++qNum; }));

if (typeof module !== "undefined") module.exports = VIGNETTES;
