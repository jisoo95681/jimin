// Flash cards: wrong questions of Mock 6-10 and Practice sets 1-4 (built by bank/flash_src/build.py).
// s = subject, q = question, ans = correct answer, mis = why it went wrong, fix = rule, fx = formula, tb = titles of tables in the key notes (KEYQ type "table").
const FLASH = [
 {
  "s": "Ethics",
  "tag": "Set 1 Q21",
  "q": "Which statement in Vass's brochure complies with Standard VII(B): Reference to CFA Institute, the CFA Designation and the CFA Program?",
  "ans": "\"Henrik Vass is a CFA charterholder.\"",
  "pick": "A",
  "key": "C",
  "mis": "Promises higher returns because of the charter. That is a guarantee/superiority claim: not allowed.",
  "fix": "You may say you hold the designation. You may not link it to better returns or to being a better analyst.",
  "fx": "Allowed: “John Doe is a CFA charterholder”\nNot allowed: higher returns, better analyst, superior skill, or a promised result because of the CFA",
  "tb": []
 },
 {
  "s": "Ethics",
  "tag": "Set 3 Q9",
  "q": "Scott works for a regional brokerage firm. He estimates that Walkton Industries will increase its dividend by US$1.50 a share during the next year. He realizes that this increase is contingent on pending legislation that would, if enacted, give Walkton a substantial tax break. The US representative for Walkton’s home district has told Scott that, although she is lobbying hard for the bill and prospects for its passage are favorable, concern of the US Congress over the federal deficit could cause the tax bill to be voted down. Walkton Industries has not made any statements about a change in dividend policy. Scott writes in his research report, “We expect Walkton’s stock price to rise by at least US$8.00 a share by the end of the year because the dividend will increase by US$1.50 a share. Investors buying the stock at the current time should expect to realize a total return of at least 15% on the stock.” According to the Standards:",
  "ans": "Scott violated the Standards because he failed to separate opinion from fact.",
  "pick": "C",
  "key": "B",
  "mis": "Basing research on an uncertain prediction of government action is allowed. The violation is how it was communicated.",
  "fix": "A forecast that depends on an uncertain event must not be written as if it were certain. V(B): separate fact from opinion and disclose the uncertainty. Relying on a prediction is fine; presenting it without the conditions is the violation.",
  "fx": "V(B): distinguish fact from opinion; include the important factors and limits of the analysis\nWords that signal a V(B) problem: “will”, “at least”, “guaranteed” attached to an uncertain event",
  "tb": []
 },
 {
  "s": "Ethics",
  "tag": "Mock 6 Q43",
  "q": "In relation to Kowalski’s handling of the Talkwave stock recommendation, which of the following CFA Institute Standards of Professional Conduct did he least likely violate?",
  "ans": "Fair Dealing",
  "pick": "A",
  "key": "C",
  "mis": "In a 'least likely violated' question I picked a Standard that WAS violated (Communication with Clients).",
  "fix": "Mark every option violated / not violated first, then pick the one not violated. Here Fair Dealing was the one not breached; V(B) (fact vs opinion, disclose the process) and VI(B) (clients before own trades) were.",
  "fx": "",
  "tb": []
 },
 {
  "s": "Ethics",
  "tag": "Mock 8 Q39",
  "q": "Given O’Connor’s second statement to Jensen, which further action should O’Connor least likely take to comply with required or recommended procedures for the CFA Institute Standards of Professional Conduct?",
  "ans": "Notify clients of the finder’s fee policy on a semiannual basis.",
  "pick": "C",
  "key": "A",
  "mis": "Treated 'disclose the finder's fee in the prospectus' as the wrong action.",
  "fix": "VI(C) Referral Fees: disclose to employer, clients and prospects BEFORE the service, and the recommended update is at least QUARTERLY, not semiannually. Disclosure in the prospectus is fine.",
  "fx": "",
  "tb": []
 },
 {
  "s": "Ethics",
  "tag": "Mock 10 Q9",
  "q": "Does Darko violate the Standards regarding the Bloom conference?",
  "ans": "Yes, by accepting the travel arrangement only",
  "pick": "A",
  "key": "B",
  "mis": "Thought paid travel from a company I cover is acceptable when it does not change my decision.",
  "fix": "I(B) Independence and Objectivity: always use commercial transport at your own or your firm's expense. A token gift is fine; paid travel is the violation (the appearance of compromise counts). Exception: remote site with no commercial transport.",
  "fx": "",
  "tb": []
 },
 {
  "s": "FSA",
  "tag": "Set 1 Q33",
  "q": "The residual from Lindahl's accruals regression represents:",
  "ans": "discretionary accruals, which may signal earnings manipulation",
  "pick": "C",
  "key": "A",
  "mis": "Non-discretionary accruals are the part the regression EXPLAINS, not the residual.",
  "fix": "Explained by the regression = normal (non-discretionary). Residual = unusual (discretionary), the warning sign of manipulation.",
  "fx": "Non-discretionary accruals = explained by business activity (normal)\nDiscretionary accruals = the residual (management choices, possible manipulation)",
  "tb": [
   "Accruals"
  ]
 },
 {
  "s": "FSA",
  "tag": "Set 2 Q42",
  "q": "Kiruna's diluted shares are closest to:",
  "ans": "5,090,000",
  "pick": "B",
  "key": "A",
  "mis": "5,120,000 adds all 60,000 RSUs without applying the treasury stock method.",
  "fix": "RSUs have no exercise price, but the unrecognised expense still counts as proceeds: dilutive shares = 60,000 − 900,000 ÷ 30 = 30,000.",
  "fx": "Dilutive shares = number − (exercise proceeds + average unrecognised expense) ÷ average price",
  "tb": []
 },
 {
  "s": "FSA",
  "tag": "Set 4 Q6",
  "q": "Which bank has the more stable funding, and what effect would an inverted yield curve most likely have on bank net interest revenue?",
  "ans": "Bank X; net interest revenue would fall",
  "pick": "A",
  "key": "B",
  "mis": "Bank X is the right bank, but an inverted curve lowers, not raises, net interest revenue.",
  "fix": "Stable funding = long-term, retail (consumer) deposits. An inverted curve (short rates above long rates) squeezes a bank that borrows short and lends long, so net interest revenue falls.",
  "fx": "Stable funding: retail and long-term deposits; unstable: short-term wholesale or interbank funding\nBanks: borrow short, lend long. Steeper curve → NIR up; flatter or inverted curve → NIR down",
  "tb": [
   "Bank: stable funding is assessed by"
  ]
 },
 {
  "s": "FSA",
  "tag": "Set 4 Q14",
  "q": "Under the partial goodwill method, goodwill and the non-controlling interest are closest to:",
  "ans": "€120 million and €170 million",
  "pick": "C",
  "key": "A",
  "mis": "Goodwill €120m is partial, but NCI €200m is the full-method NCI. The two numbers must come from the same method.",
  "fix": "Partial goodwill: the NCI is measured at its share of the FAIR VALUE OF NET ASSETS only (no goodwill in the NCI). Full goodwill: NCI at its fair value, which includes its share of goodwill.",
  "fx": "Partial: goodwill = price paid − % acquired × FV of net assets; NCI = % not owned × FV of net assets\nFull: implied value of 100% = price ÷ % acquired; goodwill = that value − FV of net assets; NCI = % not owned × that value",
  "tb": []
 },
 {
  "s": "FSA",
  "tag": "Set 4 Q21",
  "q": "Kiruna's RSU compensation expense for the year is closest to:",
  "ans": "$676,000",
  "pick": "B",
  "key": "A",
  "mis": "$930,000 = 30,000 × $31 uses the vesting-date price, and it also ignores the forfeitures.",
  "fix": "Expense uses the GRANT-DATE fair value, never the vesting-date price. A forfeiture reverses the expense already recognised (at its own grant-date value).",
  "fx": "RSU expense = vested × grant-date FV − forfeited × their grant-date FV\nVesting-date price → tax deduction (windfall or shortfall = (vesting price − grant FV) × RSUs × tax rate), not expense",
  "tb": [
   "Windfall and shortfall",
   "Where the windfall or shortfall goes"
  ]
 },
 {
  "s": "FSA",
  "tag": "Set 4 Q24",
  "q": "The vesting of the RSUs increases Kiruna's basic shares outstanding by:",
  "ans": "30,000 shares",
  "pick": "C",
  "key": "B",
  "mis": "0 shares treats vested RSUs as still potentially dilutive. That is only true while they are unvested.",
  "fix": "When RSUs vest they turn into shares: basic shares rise by the number vested. Unvested RSUs are potentially dilutive (treasury stock method).",
  "fx": "Basic shares ↑ by the number of RSUs that vest\nUnvested RSUs: diluted shares only, using the treasury stock method (unrecognised expense counts as proceeds)",
  "tb": []
 },
 {
  "s": "FSA",
  "tag": "Set 4 Q40",
  "q": "Because the local currency appreciated, Subsidiary A's remeasurement result and Subsidiary B's CTA are most likely:",
  "ans": "a loss in income for A and a positive CTA for B",
  "pick": "B",
  "key": "C",
  "mis": "This is the result for a FALLING foreign currency (liabilities worth less → gain; net assets worth less → negative CTA). The direction is reversed.",
  "fix": "“Local currency” is the subsidiary's currency, i.e. the FOREIGN currency. Local currency appreciates = foreign currency up. Net monetary liabilities (temporal) then cost more in dollars → loss. Net assets (current rate) are worth more in dollars → positive CTA.",
  "fx": "Temporal: exposed item = net monetary assets (liabilities if net liabilities); FC ↑ → net monetary asset gain, net monetary liability LOSS (goes to net income)\nCurrent rate: exposed item = net assets; FC ↑ → positive CTA, FC ↓ → negative CTA (goes to equity)",
  "tb": [
   "Functional currency, method and the plug"
  ]
 },
 {
  "s": "FSA",
  "tag": "Set 4 Q41",
  "q": "For a subsidiary with an appreciating local currency and rising prices, which choices give the higher translated gross margin?",
  "ans": "Temporal method and FIFO",
  "pick": "A",
  "key": "B",
  "mis": "Temporal is right, but LIFO in rising prices puts the newest, highest costs into COGS and lowers the margin.",
  "fix": "Temporal: COGS is translated at old (lower) historical rates while sales use the average rate, so margin rises when the foreign currency appreciates. In rising prices FIFO puts the older, cheaper costs into COGS.",
  "fx": "FC ↑: temporal gives the higher gross margin; FC ↓: current rate gives the higher gross margin\nRising prices: FIFO → higher margin; falling prices: LIFO → higher margin",
  "tb": [
   "Which translation method or inventory method gives the higher gross margin?"
  ]
 },
 {
  "s": "FSA",
  "tag": "Mock 6 Q23",
  "q": "Which of the following reasons best supports Wexford's disagreement with her team about DB's overall performance?",
  "ans": "Reason 3",
  "pick": "C",
  "key": "B",
  "mis": "Picked 'low fluctuation of the cash-flow accruals ratio' as a sign of poor performance quality.",
  "fix": "Red flags are: accruals ratio trending UP or erratic, and operating income consistently ABOVE cash from operations (Reason 3). Steady or falling accruals are not a concern.",
  "fx": "Balance-sheet accruals = (NOA end − NOA begin) ÷ average NOA\nCash-flow accruals = (NI − CFO − CFI) ÷ average NOA",
  "tb": [
   "Accruals",
   "Warning signs of profitability"
  ]
 },
 {
  "s": "FSA",
  "tag": "Mock 8 Q30",
  "q": "Compared with its industry competitors, Coleridge's pension discount rate assumption is most likely:",
  "ans": "aggressive, because it lowers the reported pension obligation.",
  "pick": "B",
  "key": "C",
  "mis": "Said a pension discount rate above peers is conservative.",
  "fix": "Higher discount rate → lower PV of the obligation and lower expense → AGGRESSIVE (deficit understated). Lower rate = conservative.",
  "fx": "PBO = Σ benefit_t ÷ (1 + discount rate)^t: rate ↑ → PBO ↓",
  "tb": [
   "PBO and its assumptions"
  ]
 },
 {
  "s": "FSA",
  "tag": "Mock 8 Q31",
  "q": "With respect to the sale of its long-term assets, Coleridge most likely displays:",
  "ans": "both low earnings quality and low financial reporting quality.",
  "pick": "A",
  "key": "A",
  "mis": "Right, but unsure why both quality labels apply.",
  "fix": "Consistent losses on asset sales mean depreciation was understated in earlier years: operating income was overstated (low earnings quality) and the bias was deliberate and lagged (low financial reporting quality).",
  "fx": "",
  "tb": []
 },
 {
  "s": "FSA",
  "tag": "Mock 8 Q32",
  "q": "With respect to the defined benefit pension plan assumption, which of the following will decrease after Thorsell's adjustment?",
  "ans": "Book value per share",
  "pick": "C",
  "key": "B",
  "mis": "Said the debt-to-equity ratio decreases after cutting the pension discount rate by 0.5%.",
  "fix": "Lower discount rate → larger obligation → liabilities ↑, equity ↓ (via AOCI), assets unchanged. So D/E ↑, financial leverage ↑ and book value per share ↓.",
  "fx": "D/E = total debt ÷ equity: numerator ↑, denominator ↓ → ↑",
  "tb": [
   "PBO and its assumptions",
   "Roll-forward of plan assets and PBO"
  ]
 },
 {
  "s": "FSA",
  "tag": "Mock 9 Q25",
  "q": "Which of the enhancements Mori describes regarding the Basel III regulatory framework is most accurate?",
  "ans": "Enhancement 1",
  "pick": "C",
  "key": "A",
  "mis": "Linked Basel III to earnings quality.",
  "fix": "Basel III raised the equity funding required against risk-weighted assets (limits leverage) and favours stable funding: consumer deposits are more stable than interbank. Earnings quality was not its target.",
  "fx": "",
  "tb": [
   "Bank capital tiers"
  ]
 },
 {
  "s": "FSA",
  "tag": "Mock 9 Q26",
  "q": "If Ishikawa's interpretation of the current phase of the property and casualty market is correct, a cyclical shift is most likely to result in:",
  "ans": "additional competitors entering the market.",
  "pick": "C",
  "key": "A",
  "mis": "Expected underwriting standards to tighten after a hard market.",
  "fix": "Hard market: high premiums and profits attract new competitors, the market softens, underwriting standards fall and capital is depleted (capital adequacy gets harder).",
  "fx": "",
  "tb": [
   "P&C insurance cycle"
  ]
 },
 {
  "s": "FSA",
  "tag": "Mock 9 Q28",
  "q": "KH's combined ratio indicates that its underwriting business, before investment income, is:",
  "ans": "unprofitable, because claims and expenses exceed the premiums earned.",
  "pick": "B",
  "key": "C",
  "mis": "Looked only at the loss ratio below 100%.",
  "fix": "Combined ratio adds the loss ratio and the underwriting expense ratio. Above 100% = underwriting loss that investment income must cover.",
  "fx": "Combined ratio = (claims + loss adj. expenses) ÷ net premiums earned + underwriting expenses ÷ net premiums written",
  "tb": [
   "P&C insurance cycle"
  ]
 },
 {
  "s": "FSA",
  "tag": "Mock 10 Q1",
  "q": "Based on the 3 years of data provided for DuPont analysis, Westbrook's financial leverage has been:",
  "ans": "trending higher.",
  "pick": "C",
  "key": "B",
  "mis": "Read the DuPont trend in the wrong direction (columns were newest year first).",
  "fix": "Check the column order of the years before judging a trend. Rebuild assets and equity first, then compare leverage across years.",
  "fx": "Total assets = revenue ÷ asset turnover\nEquity = assets − liabilities\nFinancial leverage = assets ÷ equity",
  "tb": []
 },
 {
  "s": "Equity",
  "tag": "Set 1 Q16",
  "q": "Grünwald's FCFE, assuming investment is financed at the target debt ratio, is closest to:",
  "ans": "€300 million",
  "pick": "C",
  "key": "B",
  "mis": "€236m = 420 − 160 − 24 takes the full net fixed investment without (1 − DR); only the working capital term was multiplied by 0.60.",
  "fix": "Cash is not working capital: take it out of the current assets increase. Then multiply BOTH the net fixed investment and the working capital investment by (1 − DR).",
  "fx": "FCFE = NI − (1 − DR)(FCInv − Dep) − (1 − DR)(WCInv)\nWCInv = Δ(current assets excluding cash) − Δ(current liabilities)",
  "tb": [
   "FCFF and FCFE: how to build each one"
  ]
 },
 {
  "s": "Equity",
  "tag": "Set 1 Q17",
  "q": "Weller should most likely value Grünwald with:",
  "ans": "an FCFE model, because dividends differ greatly from the capacity to pay them",
  "pick": "B",
  "key": "A",
  "mis": "A residual income model is chosen when FCFE is negative or there are no dividends or the cash flows are hard to forecast. A positive FCFE is not a reason for it.",
  "fix": "Dividends far from FCFE and unrelated to capacity: use FCFE, not a dividend discount model.",
  "fx": "DDM: stable dividends linked to earnings, minority view\nFCFE: dividends differ from capacity to pay, or control perspective\nResidual income: no dividends or negative free cash flow",
  "tb": [
   "FCFF and FCFE: how to build each one"
  ]
 },
 {
  "s": "Equity",
  "tag": "Set 1 Q42",
  "q": "The total discount applied to a controlling value to value Hallberg's minority, non-marketable stake is closest to:",
  "ans": "36%",
  "pick": "B",
  "key": "A",
  "mis": "40% = 20% + 20% adds the two discounts. They multiply.",
  "fix": "The 25% is a control PREMIUM. Convert it: DLOC = 1 − 1/1.25 = 20%. Then total = 1 − (1 − DLOC)(1 − DLOM).",
  "fx": "DLOC = 1 − 1/(1 + control premium)\nTotal discount = 1 − (1 − DLOC)(1 − DLOM)",
  "tb": [
   "Methods of estimating the DLOM"
  ]
 },
 {
  "s": "Equity",
  "tag": "Set 4 Q49",
  "q": "Using the method that deducts an equity charge, OPG's residual income is closest to:",
  "ans": "$41,800.",
  "pick": "A",
  "key": "B",
  "mis": "$107,800 is the net income. The equity charge of $66,000 still has to be deducted.",
  "fix": "“Deducts an equity charge” means RI = net income − cost of equity × equity. Net income is after interest and tax, so first work out the debt and the interest.",
  "fx": "RI = NI − r × beginning book value of equity\nNI = (EBIT − interest) × (1 − t)\n3 times as much debt as equity → debt = 3/4, equity = 1/4 of total assets",
  "tb": []
 },
 {
  "s": "Equity",
  "tag": "Set 4 Q50",
  "q": "Using the residual income model, with the residual income expected to continue indefinitely, OPG's intrinsic value per share is closest to:",
  "ans": "$24.50.",
  "pick": "C",
  "key": "C",
  "mis": "Right, but unsure.",
  "fix": "Indefinite constant RI is a perpetuity: PV = RI ÷ r. Intrinsic value is book value PLUS that PV.",
  "fx": "V0 = B0 + RI1 ÷ r (RI constant forever)\nRI per share = total RI ÷ shares",
  "tb": []
 },
 {
  "s": "Equity",
  "tag": "Set 4 Q53",
  "q": "Are Parker's statements comparing residual income models with different present value approaches both correct?",
  "ans": "No, only statement 2 is correct",
  "pick": "B",
  "key": "C",
  "mis": "It is Statement 1 that is wrong, not Statement 2. RI recognises value earlier, not later.",
  "fix": "The book value is already in the starting value, so RI recognises value earlier (a larger part of the value sits in book value). Under the same assumptions all the models give the same value.",
  "fx": "RI: value = B0 + PV(RI), so book value is recognised at once: earlier than DDM or FCF\nTheory: DDM, FCFE and RI agree if the inputs are consistent (clean surplus)",
  "tb": []
 },
 {
  "s": "Equity",
  "tag": "Set 4 Q54",
  "q": "Based on the information given, Parker should conclude that Company D’s share is:",
  "ans": "undervalued.",
  "pick": "A",
  "key": "A",
  "mis": "Right, but unsure.",
  "fix": "Year 1: RI = EPS − r × B0. Terminal value at year-end = (P/B − 1) × ending book value (the excess over book). Add B0 + PV(RI1) + PV(terminal premium) and compare with the price.",
  "fx": "B1 = B0 + EPS − DPS\nRI1 = EPS1 − r × B0\nV0 = B0 + RI1 ÷ (1 + r) + (P/B − 1) × B1 ÷ (1 + r)",
  "tb": []
 },
 {
  "s": "Equity",
  "tag": "Mock 6 Q25",
  "q": "Based on the information in Exhibit 1, the market value added of the hypothetical firm is closest to:",
  "ans": "R168 million.",
  "pick": "B",
  "key": "A",
  "mis": "Picked R65m: MVA must use the market value of the WHOLE firm (debt and equity) against total book capital.",
  "fix": "MVA = market value of the firm − book value of total capital (market value of the firm includes the debt).",
  "fx": "MVA = (MV debt + shares × price) − total book capital\n= 55 + 30 × 25.43 − 650 = R168m",
  "tb": []
 },
 {
  "s": "Equity",
  "tag": "Mock 6 Q26",
  "q": "The most appropriate response to Ncube’s Question 1 would be that the present value of future residual earnings is expected to be:",
  "ans": "positive.",
  "pick": "A",
  "key": "B",
  "mis": "Said residual income is zero although intrinsic value (R22) is above book value (R20).",
  "fix": "V0 > B0 → PV of future RI is positive; V0 = B0 → zero; V0 < B0 → negative.",
  "fx": "V0 = B0 + PV(residual income)",
  "tb": []
 },
 {
  "s": "Equity",
  "tag": "Mock 7 Q12",
  "q": "Based on Exhibits 2 and 3 and the multistage RI model, Castovan should estimate the intrinsic value of TTCI to be closest to:",
  "ans": "€85.71.",
  "pick": "B",
  "key": "C",
  "mis": "Multistage residual income value came out at €83.01 instead of €85.71 (the continuing value of RI was not built right).",
  "fix": "Build RI year by year, then add the value of RI after the last year. Persistence factor 1 means RI stays constant forever.",
  "fx": "RI_t = EPS_t − r × B_{t−1}\nV0 = B0 + Σ RI_t ÷ (1 + r)^t + PV(continuing RI)\nContinuing RI at T = RI_T × ω ÷ (1 + r − ω)",
  "tb": []
 },
 {
  "s": "Equity",
  "tag": "Mock 7 Q38",
  "q": "Ferro's observation about Corbin Foods' high P/E is best described as:",
  "ans": "incorrect with respect to the risk.",
  "pick": "B",
  "key": "C",
  "mis": "Believed a high P/E is also justified by high risk.",
  "fix": "High growth justifies a higher P/E, but higher risk raises the required return and justifies a LOWER P/E.",
  "fx": "Justified P/E = payout ÷ (r − g): g ↑ → P/E ↑, r ↑ → P/E ↓",
  "tb": []
 },
 {
  "s": "Equity",
  "tag": "Mock 7 Q39",
  "q": "The weighted harmonic mean of the P/Es in Ferro's index (Exhibit 2) is closest to:",
  "ans": "11.3.",
  "pick": "B",
  "key": "A",
  "mis": "Used the simple average (13.8) for an index P/E.",
  "fix": "Index P/E uses the weighted HARMONIC mean (average the earnings yields). Order: harmonic < geometric < arithmetic.",
  "fx": "Weighted harmonic = Σ weights ÷ Σ(weight ÷ P/E) = total market cap ÷ Σ(cap ÷ P/E) = 11.3",
  "tb": []
 },
 {
  "s": "Equity",
  "tag": "Mock 8 Q20",
  "q": "Jackson’s understanding of when he would switch from an H-model to a spreadsheet model is best described as:",
  "ans": "correct.",
  "pick": "B",
  "key": "B",
  "mis": "Right, but unsure when the H-model stops working.",
  "fix": "H-model fits a LINEAR fade from high to low growth; use a spreadsheet multistage model for a long high-growth period or a large gap between growth rates.",
  "fx": "V0 = D0(1 + gL) ÷ (r − gL) + D0 × H × (gS − gL) ÷ (r − gL),   H = half-life = t ÷ 2",
  "tb": []
 },
 {
  "s": "Equity",
  "tag": "Mock 8 Q25",
  "q": "Based on Company A’s characteristics, which of the following absolute valuation models is most appropriate for valuing that company?",
  "ans": "Free cash flow to the firm",
  "pick": "B",
  "key": "B",
  "mis": "Right, but unsure how to choose the model.",
  "fix": "FCFF when assets are largely intangible and dividends are only occasional or special. DDM needs a consistent dividend; asset-based needs marketable assets.",
  "fx": "",
  "tb": []
 },
 {
  "s": "Equity",
  "tag": "Mock 9 Q15",
  "q": "Which of the following is the most appropriate metric for Ashworth to use in valuing Harlan?",
  "ans": "Enterprise value to sales ratio",
  "pick": "A",
  "key": "B",
  "mis": "Chose P/B for a company whose value is its brand.",
  "fix": "P/B ignores internally built intangibles. High leverage and mixed capital structures → EV/sales. Dividend yield ignores capital gains.",
  "fx": "EV = market cap + debt + preferred − cash",
  "tb": []
 },
 {
  "s": "Fixed Income",
  "tag": "Set 1 Q35",
  "q": "The forward price, two years from now, of a zero-coupon bond paying 1 at year 5 is closest to:",
  "ans": "0.9098",
  "pick": "A",
  "key": "C",
  "mis": "0.8543 = 1 ÷ 1.032⁵ uses j + k = 5 as the exponent.",
  "fix": "F(j,k) = 1 ÷ (1 + f(j,k))^k. The exponent is k, the 3 years the bond still has after the forward date.",
  "fx": "F(j,k) = 1 ÷ (1 + f(j,k))^k\nf(j,k) is quoted per year; k = years of the bond after the forward date",
  "tb": []
 },
 {
  "s": "Fixed Income",
  "tag": "Set 2 Q12",
  "q": "If interest rates fall sharply, compared with Bond S, Bond Q's effective duration most likely:",
  "ans": "falls and its convexity becomes negative",
  "pick": "C",
  "key": "B",
  "mis": "The callable matches the straight bond only when rates RISE (the call is far out of the money).",
  "fix": "Rates fall + callable = the call will be exercised: duration shortens, convexity turns negative (price compression).",
  "fx": "Callable: rates fall → duration falls, negative convexity; rates rise → like straight\nPutable: rates rise → duration falls; rates fall → like straight, positive convexity",
  "tb": [
   "Effective duration and convexity vs interest rates"
  ]
 },
 {
  "s": "Fixed Income",
  "tag": "Set 2 Q22",
  "q": "For an option-free bond, the value found by discounting at spot rates compared with the value from a calibrated binomial tree is:",
  "ans": "the same, whatever volatility is assumed",
  "pick": "B",
  "key": "C",
  "mis": "Higher when volatility is higher is also wrong: no option, so no volatility effect.",
  "fix": "A calibrated tree reprices the benchmark bonds, so an option-free bond is worth the same as with spot rates. Volatility only matters for embedded options.",
  "fx": "Option-free bond: tree value = spot-rate value\nVolatility ↑: callable value ↓, putable value ↑, straight value unchanged",
  "tb": []
 },
 {
  "s": "Fixed Income",
  "tag": "Set 4 Q47",
  "q": "The value of the capped floater is closest to:",
  "ans": "99.72",
  "pick": "C",
  "key": "A",
  "mis": "100.00 is the value of the UNCAPPED floater. The cap lowers the value.",
  "fix": "Rate 5.40% is above the 4.80% cap, so the upper node pays 4.80 only. The coupon is set at the start and paid at the end, so the node's own rate is both the coupon (capped) and the discount rate.",
  "fx": "Node value = (next values + coupon) ÷ (1 + node rate); coupon = min(node rate, cap)\nTime-0 value = average of the two time-1 values plus the time-0 coupon, ÷ (1 + r0)",
  "tb": []
 },
 {
  "s": "Fixed Income",
  "tag": "Mock 6 Q40",
  "q": "When describing calibrating the interest rate tree, Hollis is least likely correct with respect to the:",
  "ans": "value of the bond being evaluated.",
  "pick": "B",
  "key": "C",
  "mis": "Said log-normality is not an input of tree calibration.",
  "fix": "Calibration uses a volatility assumption, an interest rate model (log-normal) and the market values of the benchmark bonds. The bond being valued is NOT an input (it is valued afterwards on the tree).",
  "fx": "",
  "tb": []
 },
 {
  "s": "Fixed Income",
  "tag": "Mock 7 Q30",
  "q": "Based on Exhibit 1, the one-year expected return on the Entre Corp. bond is closest to:",
  "ans": "3.73%.",
  "pick": "C",
  "key": "A",
  "mis": "Added the migration effect to the yield (sign flipped).",
  "fix": "Expected return = YTM + expected % price change. A spread widening lowers the price.",
  "fx": "E(R) = YTM + Σ prob_i × [−MD × (spread_i − spread_0)]\n= 5.50% − 1.77% = 3.73%",
  "tb": [
   "Why migration reduces the expected return"
  ]
 },
 {
  "s": "Fixed Income",
  "tag": "Mock 7 Q31",
  "q": "Based on Kowalski’s assumptions and Exhibit 2 and Exhibit 3, the credit spread on the VraiRive bond is closest to:",
  "ans": "1.4082%.",
  "pick": "B",
  "key": "C",
  "mis": "Got 0.9388% instead of 1.4082%: one step of the CVA chain was off.",
  "fix": "Always do three steps: VND from the tree, then CVA, then the yield of (VND − CVA) minus the benchmark yield.",
  "fx": "CVA = Σ DF(benchmark) × PD × LGD × expected exposure\nFair value = VND − CVA\nSpread = YTM(fair value) − benchmark YTM",
  "tb": [
   "Current price of the bond vs VND − CVA",
   "Hazard rate: survival and default probabilities"
  ]
 },
 {
  "s": "Fixed Income",
  "tag": "Mock 8 Q10",
  "q": "Based on Brandt's assumptions and Exhibits 2 and 3, the credit spread on the Norvalle bond is closest to:",
  "ans": "1.1782%.",
  "pick": "A",
  "key": "B",
  "mis": "Used the wrong loss given default (0.7796% is what LGD 50% gives).",
  "fix": "Recovery of one-quarter means LGD = 75%. Convert recovery to LGD before anything else.",
  "fx": "LGD = 1 − recovery rate\nPD_t = h × (1 − h)^(t−1)\nCVA = Σ DF × PD × LGD × exposure",
  "tb": [
   "Current price of the bond vs VND − CVA",
   "Hazard rate: survival and default probabilities"
  ]
 },
 {
  "s": "Fixed Income",
  "tag": "Mock 8 Q11",
  "q": "The most appropriate response to Brandt's question relating to the credit spread is:",
  "ans": "a decrease in the risk-neutral probability of default.",
  "pick": "C",
  "key": "C",
  "mis": "Right, but unsure of the direction.",
  "fix": "Credit spread falls when the risk-neutral PD falls (CVA ↓ → fair value ↑ → yield ↓). A higher PD or higher LGD widens the spread.",
  "fx": "",
  "tb": [
   "Current price of the bond vs VND − CVA"
  ]
 },
 {
  "s": "Fixed Income",
  "tag": "Mock 9 Q6",
  "q": "Fischer's view that the spot curve one year from today will reflect the current forward curve is most consistent with:",
  "ans": "the pure expectations theory.",
  "pick": "B",
  "key": "C",
  "mis": "Confused liquidity preference with pure expectations.",
  "fix": "Pure expectations: forward rates are unbiased predictors of future spot rates (the future curve = today's forward curve). Liquidity preference: forward = expected spot + liquidity premium. Segmented markets: each maturity has its own supply and demand.",
  "fx": "",
  "tb": [
   "Theories of the term structure"
  ]
 },
 {
  "s": "Fixed Income",
  "tag": "Mock 9 Q8",
  "q": "The strategy best suited to exploit the second analyst's expected changes to the current fixed-income environment is to:",
  "ans": "extend duration and construct a barbell portfolio.",
  "pick": "A",
  "key": "A",
  "mis": "Right, but unsure how the two views combine.",
  "fix": "Flight to quality → yields fall → extend duration. Bullish flattening (long rates fall more than short) → barbell rather than bullet.",
  "fx": "",
  "tb": [
   "Yield curve moves and the situation they usually go with"
  ]
 },
 {
  "s": "Derivatives",
  "tag": "Set 1 Q30",
  "q": "The current value of Bellini's forward position is closest to:",
  "ans": "€6.34",
  "pick": "A",
  "key": "C",
  "mis": "€6.39 = 94.10 × 1.022^(4/12) − 88.40 is the value at expiration, not today. It is not discounted.",
  "fix": "Long forward value = S₀ − F₀ ÷ (1 + r)^(T − t), using the time left (4/12). The result is a value today, so the forward price is discounted.",
  "fx": "V_t(long) = S_t − F₀ ÷ (1 + r)^(T − t)  (no dividends)\nSame value: (F_t − F₀) ÷ (1 + r)^(T − t), with F_t = S_t × (1 + r)^(T − t)",
  "tb": [
   "Forward or futures mispricing: Q = quoted (market) price, F = fair (model) price"
  ]
 },
 {
  "s": "Derivatives",
  "tag": "Set 1 Q37",
  "q": "To meet Brandt's objective, Harlow should enter into a swap in which it:",
  "ans": "pays floating and receives fixed",
  "pick": "C",
  "key": "B",
  "mis": "Pay fixed, receive floating makes Harlow pay fixed twice. Its liabilities become MORE rate sensitive, the opposite of the goal.",
  "fix": "The bonds already make Harlow PAY fixed. To end up floating, the swap must RECEIVE fixed (cancels the bond coupon) and pay floating.",
  "fx": "Fixed-rate liability → floating: swap that receives fixed and pays floating\nFloating-rate liability → fixed: swap that pays fixed and receives floating",
  "tb": []
 },
 {
  "s": "Derivatives",
  "tag": "Set 2 Q29",
  "q": "Based on the equilibrium price, the arbitrage strategy for the ten-year note futures is to:",
  "ans": "buy the futures, short sell the note and lend the proceeds",
  "pick": "C",
  "key": "B",
  "mis": "Sell futures, buy the note with borrowed funds is cash-and-carry, used when the futures is OVERPRICED.",
  "fix": "Market 136.00 < model ≈ 138.76: the futures is cheap. Cheap futures = buy futures, short the note, lend (reverse cash-and-carry).",
  "fx": "Model price = [(S + AI₀)(1 + r)^T − AI_T − FV(coupons)] ÷ CF\nMarket > model: sell futures, buy bond, borrow\nMarket < model: buy futures, short bond, lend",
  "tb": [
   "Forward or futures mispricing: Q = quoted (market) price, F = fair (model) price"
  ]
 },
 {
  "s": "Derivatives",
  "tag": "Set 4 Q19",
  "q": "Which Greeks are negative for a long put?",
  "ans": "Delta and rho",
  "pick": "C",
  "key": "A",
  "mis": "Gamma and vega are the two Greeks that are POSITIVE for any long option.",
  "fix": "Gamma and vega are positive for EVERY long option (call or put) and negative for every short option. Delta and rho have the sign of the option: negative for a put.",
  "fx": "Long call: delta +, gamma +, vega +, theta −, rho +\nLong put: delta −, gamma +, vega +, theta −, rho −\nShort = flip every sign",
  "tb": [
   "Option Greek signs"
  ]
 },
 {
  "s": "Derivatives",
  "tag": "Set 4 Q28",
  "q": "In Situation 2, the settlement amount Mori receives at FRA expiration is closest to:",
  "ans": "€27,926",
  "pick": "A",
  "key": "C",
  "mis": "€28,125 is the interest difference at month 9 and is not yet discounted.",
  "fix": "The interest difference belongs to month 9, but the FRA settles at month 6, so you must discount it back 90 days at the then-current MRR.",
  "fx": "Payment (long FRA) = (MRR − FRA rate) × (days/360) × notional ÷ (1 + MRR × days/360)\nLong FRA = pay fixed: gains when MRR rises above the FRA rate",
  "tb": []
 },
 {
  "s": "Derivatives",
  "tag": "Mock 6 Q36",
  "q": "Whose comment regarding implied volatility is most likely correct?",
  "ans": "Maddox’s",
  "pick": "A",
  "key": "B",
  "mis": "Accepted Jeffries' claim that the smile and the skew take the same shape.",
  "fix": "Implied volatility is backed out of market option prices and is forward-looking. The volatility surface shows IV across strikes AND maturities. Smile and skew do not have the same shape (hedging demand steepens the skew).",
  "fx": "",
  "tb": [
   "Implied volatility, volatility surface, smile and skew"
  ]
 },
 {
  "s": "Derivatives",
  "tag": "Mock 7 Q23",
  "q": "Based on the information in Exhibit 1, the interest rate that the Foundation would receive in the proposed currency swap is closest to:",
  "ans": "1.54%.",
  "pick": "C",
  "key": "B",
  "mis": "Took the fixed rate of the wrong currency (the Korean rate, which the Foundation pays).",
  "fix": "Decide which leg is received and which is paid by currency first. Compute each fixed rate from its own country's discount factors.",
  "fx": "Swap fixed rate = (1 − PV_n) ÷ Σ PV_i  (that country's factors)\n= (1 − 0.9260) ÷ 4.7995 = 1.54%",
  "tb": [
   "Currency swap: keep this order"
  ]
 },
 {
  "s": "Derivatives",
  "tag": "Mock 8 Q1",
  "q": "Based on Exhibit 1 and assuming annual compounding, the arbitrage profit on the bond futures contract is closest to:",
  "ans": "0.5356.",
  "pick": "C",
  "key": "B",
  "mis": "Left the bond cost uncompounded in the bond futures arbitrage.",
  "fix": "Carry the bond price plus accrued interest forward to expiry. Futures side = CF × futures price + accrued interest at expiry. Discount only the final difference.",
  "fx": "F0 = (1 + r)^T × (B0 + AI0)\nImplied = CF × Q0 + AI_T\nProfit = (implied − F0) ÷ (1 + r)^T",
  "tb": [
   "Forward or futures mispricing: Q = quoted (market) price, F = fair (model) price"
  ]
 },
 {
  "s": "Derivatives",
  "tag": "Mock 10 Q23",
  "q": "Holding all else constant, the value of the call on Hillcrest one day after Liu's sale will be closest to:",
  "ans": "$4.491.",
  "pick": "B",
  "key": "B",
  "mis": "Right, but unsure which Greek to use.",
  "fix": "'All else equal, one day later' means only time decay: value falls by theta.",
  "fx": "New value = old value + theta × days  (theta is negative)\nFull: ΔC ≈ Δ·ΔS + ½Γ·ΔS² + Θ·Δt",
  "tb": [
   "Option Greek signs"
  ]
 },
 {
  "s": "Derivatives",
  "tag": "Mock 10 Q24",
  "q": "Using the two-period binomial option pricing model, the value of the American put on Marlow Corporation is closest to:",
  "ans": "$9.89.",
  "pick": "A",
  "key": "B",
  "mis": "Gave the European put value (8.45); forgot early exercise at the down node.",
  "fix": "American option: at EVERY node take the larger of the binomial value and the exercise value. Down node: 20 > 16.77, so use 20.",
  "fx": "π = (1 + r − d) ÷ (u − d)\nV = [π V_u + (1 − π) V_d] ÷ (1 + r)\nAmerican: V = max(V, K − S)",
  "tb": []
 },
 {
  "s": "Quant",
  "tag": "Set 2 Q16",
  "q": "Removing HTML tags, punctuation, numbers and white space is part of:",
  "ans": "text cleansing",
  "pick": "B",
  "key": "A",
  "mis": "Wrangling (preprocessing) is the next step on the cleansed tokens (lowercase, stop words, stemming, lemmatisation).",
  "fix": "Removing HTML tags, punctuation, numbers and white space = cleansing. Lowercasing, stop words, stemming and lemmatisation = wrangling.",
  "fx": "Cleansing: remove HTML tags, punctuation, numbers, white space\nWrangling: lowercase, stop words, stemming, lemmatisation, n-grams\nExploration: bag of words, DF, MI",
  "tb": []
 },
 {
  "s": "Quant",
  "tag": "Set 3 Q39",
  "q": "Based on AIC and BIC, which model is preferred for forecasting and which for goodness of fit?",
  "ans": "Model B for forecasting; Model A for goodness of fit",
  "pick": "C",
  "key": "B",
  "mis": "Model B wins on AIC only. On BIC, Model A is lower.",
  "fix": "AIC → forecasting (prediction), BIC → goodness of fit. Lower is better for both, and −314 is lower than −310.",
  "fx": "AIC (lighter penalty for extra variables): better for forecasting\nBIC: heavier penalty for extra variables: better for goodness of fit\nChoose the model with the LOWEST value (with negative numbers, the more negative one)",
  "tb": [
   "Model selection tests"
  ]
 },
 {
  "s": "Quant",
  "tag": "Mock 7 Q33",
  "q": "Based on her regression results in Exhibit 2, using a 5% level of significance, Smith should conclude that:",
  "ans": "stimulus packages do not have significant effects on foreclosure percentages, but housing crises do have significant effects on foreclosure percentages.",
  "pick": "B",
  "key": "A",
  "mis": "Called the variable significant although |t| was below the critical value.",
  "fix": "Compare |t| with the critical value for n − k − 1 degrees of freedom: STIM |−2.10| < 2.12 (not significant), CRISIS 2.35 > 2.12 (significant).",
  "fx": "t = coefficient ÷ standard error",
  "tb": [
   "Regression problems: effect on standard errors, t-test and F-test"
  ]
 },
 {
  "s": "Quant",
  "tag": "Mock 8 Q15",
  "q": "Do the estimates of the residual regression parameters indicate that the AR(1) model on Δln(PUBLt) is misspecified?",
  "ans": "Yes, because there is evidence of autoregressive conditional heteroskedasticity (ARCH)",
  "pick": "C",
  "key": "C",
  "mis": "Right, but unsure how ARCH is tested.",
  "fix": "Regress SQUARED residuals on their own lag: t above the critical value → ARCH. Residuals on their own lag test serial correlation.",
  "fx": "ε²_t = a0 + a1 ε²_{t−1}",
  "tb": []
 },
 {
  "s": "Quant",
  "tag": "Mock 9 Q34",
  "q": "Dunn explains the standard error of estimate (SEE) to Larsen with three points. Point 1: If there is a strong relationship between the variables and the SEE is small, the individual estimation errors will also be small. Point 2: The SEE is the standard deviation of the differences between the estimated values for the independent variables and the actual observations for the independent variable. Point 3: Any violation of the basic assumptions of a multiple regression model is going to affect the SEE. How many of Dunn's points are most accurate?",
  "ans": "2 of Dunn's points are correct.",
  "pick": "C",
  "key": "A",
  "mis": "Accepted that SEE measures errors of an independent variable.",
  "fix": "SEE is the standard deviation of the differences between actual and estimated values of the DEPENDENT variable. Small SEE means strong fit.",
  "fx": "SEE = √[SSE ÷ (n − k − 1)]",
  "tb": []
 },
 {
  "s": "Quant",
  "tag": "Mock 9 Q36",
  "q": "Dunn wants to test whether the marketing coefficient of 2.1 is still significantly different from zero after a year of flat revenues. He should compare:",
  "ans": "the t-statistic (the coefficient divided by its standard error) with the critical t-value.",
  "pick": "B",
  "key": "B",
  "mis": "Right, but unsure which test applies.",
  "fix": "One slope coefficient: t-test. All slopes together: F-test. R² and SEE describe the fit, not a single coefficient.",
  "fx": "",
  "tb": [
   "Regression problems: effect on standard errors, t-test and F-test"
  ]
 },
 {
  "s": "Quant",
  "tag": "Mock 10 Q13",
  "q": "Duarte's statement that the coefficients depicted in Exhibit 1 are consistent with a random walk is most likely:",
  "ans": "correct.",
  "pick": "C",
  "key": "A",
  "mis": "Expected the slope of a random walk to be near 0.",
  "fix": "Random walk as an AR(1): b0 ≈ 0 and b1 ≈ 1 (unit root).",
  "fx": "x_t = b0 + b1 x_{t−1} + ε:  b0 ≈ 0, b1 ≈ 1",
  "tb": [
   "Covariance stationarity: three constants"
  ]
 },
 {
  "s": "Quant",
  "tag": "Mock 10 Q14",
  "q": "If Nair is correct regarding the trailing P/E time series, the best forecast of next period's trailing P/E is most likely to be the:",
  "ans": "current period's trailing P/E.",
  "pick": "A",
  "key": "A",
  "mis": "Right, but unsure.",
  "fix": "For a random walk the best forecast of the next value is the CURRENT value (no mean reversion, not covariance stationary).",
  "fx": "",
  "tb": [
   "Covariance stationarity: three constants"
  ]
 },
 {
  "s": "Quant",
  "tag": "Mock 10 Q15",
  "q": "The results depicted in Exhibit 2 are best described as consistent with a regression that has ARCH(1) errors because:",
  "ans": "c1 is significantly different from 0.",
  "pick": "C",
  "key": "C",
  "mis": "Right, but unsure.",
  "fix": "ARCH(1) is present when the slope c1 on the lagged squared residual is significantly different from 0.",
  "fx": "",
  "tb": []
 },
 {
  "s": "Portfolio Management",
  "tag": "Set 2 Q10",
  "q": "Based on its sensitivities, the fund's style relative to the benchmark is best described as:",
  "ans": "high beta, small-cap and growth",
  "pick": "B",
  "key": "A",
  "mis": "High beta is right, but large-cap and value reverse the signs of the size and value differences.",
  "fix": "Style = fund sensitivity minus benchmark sensitivity: market +0.15 (high beta), size +0.30 (small cap), value −0.30 (growth).",
  "fx": "Active sensitivity = portfolio − benchmark\n+ market = high beta; + size = small cap; + value = value; − value = growth; − momentum = contrarian",
  "tb": [
   "Reading investment style from factor sensitivity signs"
  ]
 },
 {
  "s": "Portfolio Management",
  "tag": "Set 2 Q34",
  "q": "The information ratio of the index fund in Point 1 is most likely:",
  "ans": "zero",
  "pick": "A",
  "key": "C",
  "mis": "Indeterminate but positive is wrong: active return is zero.",
  "fix": "Meets its objective exactly = tracks the benchmark: active return 0, so the information ratio is 0.",
  "fx": "IR = active return ÷ active risk\nIndex fund meeting its objective: IR = 0",
  "tb": []
 },
 {
  "s": "Portfolio Management",
  "tag": "Set 3 Q34",
  "q": "Based on Point 3, real interest rates are most likely higher in:",
  "ans": "Country 2, because real growth is the same but growth is more volatile",
  "pick": "B",
  "key": "A",
  "mis": "Country 1 has higher NOMINAL growth, but nominal growth includes inflation and says nothing about the real rate.",
  "fix": "Convert to real growth first: nominal − inflation. If real growth is equal, the country with more volatile growth has the higher real interest rate.",
  "fx": "Real growth ≈ nominal growth − inflation\nReal rate ↑ with higher expected real growth and with higher volatility of real growth\nITRS ↓ (better off in the future) → real rates ↑",
  "tb": []
 },
 {
  "s": "Portfolio Management",
  "tag": "Set 3 Q43",
  "q": "For Observation 3, the commercial building's rental income should most likely be discounted at:",
  "ans": "a higher rate, because it includes a credit risk premium for the tenants",
  "pick": "C",
  "key": "A",
  "mis": "Rents rising faster would raise the cash flows (the numerator), not lower the discount rate.",
  "fix": "Same building, different tenant credit quality: the commercial lease carries an extra credit risk premium φ, so its rents are discounted at a HIGHER rate.",
  "fx": "Discount rate = Rf + π + θ + φ (inflation, inflation uncertainty, other risks such as default)\nValue = net rental income ÷ (1 + r)^t",
  "tb": [
   "Real estate discount rate components"
  ]
 },
 {
  "s": "Portfolio Management",
  "tag": "Mock 6 Q31",
  "q": "Sorensen’s explanation of benchmark exposure most likely describes portfolio:",
  "ans": "completion strategies.",
  "pick": "A",
  "key": "B",
  "mis": "Called filling a temporary benchmark gap 'rebalancing'.",
  "fix": "ETF uses: completion = fill a gap in benchmark exposure; rebalancing = return to target weights after market moves; liquidity management = equitize cash for inflows and outflows.",
  "fx": "",
  "tb": [
   "Mutual funds versus ETFs",
   "ETF types and their risks"
  ]
 },
 {
  "s": "Portfolio Management",
  "tag": "Mock 7 Q41",
  "q": "Assuming that the information in Exhibit 1 reflects the analyst's view, the expected return for Portfolio 1 is closest to:",
  "ans": "2.58%.",
  "pick": "C",
  "key": "A",
  "mis": "Picked 6.00% instead of the model intercept (2.58%).",
  "fix": "In a macro factor model the factors are SURPRISES; expected return is the intercept when all surprises are zero.",
  "fx": "R_i = a_i + b_i1 F1 + b_i2 F2 + … + ε;   E(R_i) = a_i",
  "tb": [
   "Expected return vs active return in a factor model"
  ]
 },
 {
  "s": "Portfolio Management",
  "tag": "Mock 7 Q43",
  "q": "Which of Lam’s statements regarding macroeconomic factor models and fundamental factor models is correct?",
  "ans": "Both Statements 1 and 2",
  "pick": "A",
  "key": "C",
  "mis": "Judged one statement wrong although both were true.",
  "fix": "Macro model: factors = surprises in economic variables, sensitivities estimated LAST. Fundamental model: factors = company attributes, sensitivities specified FIRST.",
  "fx": "",
  "tb": [
   "Macroeconomic vs fundamental factor models"
  ]
 },
 {
  "s": "Portfolio Management",
  "tag": "Mock 7 Q44",
  "q": "Whose statement regarding the use of multifactor models in active and passive portfolio management is correct?",
  "ans": "Cheung only",
  "pick": "A",
  "key": "C",
  "mis": "Agreed that multifactor models are useless for passive management.",
  "fix": "Multifactor models serve BOTH active management (tilts, risk) and passive management (replicate an index's factor exposures).",
  "fx": "",
  "tb": [
   "Uses of multifactor models and their trigger words"
  ]
 },
 {
  "s": "Portfolio Management",
  "tag": "Mock 9 Q41",
  "q": "Whitfield's comments on the advantages of VaR are most likely correct regarding:",
  "ans": "performance evaluation.",
  "pick": "B",
  "key": "C",
  "mis": "Called VaR 'subjective' as an advantage.",
  "fix": "VaR advantages: basis for risk-adjusted performance evaluation, comparable across portfolios. Its limits: not a worst case, subjective inputs.",
  "fx": "",
  "tb": [
   "VaR methods: key idea and when to use"
  ]
 },
 {
  "s": "Portfolio Management",
  "tag": "Mock 9 Q43",
  "q": "A limitation of the parametric method that Whitfield used to estimate VaR is that it:",
  "ans": "assumes returns are normally distributed, which fits poorly with fat tails and options.",
  "pick": "A",
  "key": "B",
  "mis": "Described historical simulation, not the parametric method.",
  "fix": "Parametric VaR assumes normally distributed returns: poor for fat tails and options. Historical uses past data; Monte Carlo needs many random scenarios.",
  "fx": "VaR = (μ − z × σ) × portfolio value",
  "tb": [
   "VaR methods: key idea and when to use"
  ]
 },
 {
  "s": "Economics",
  "tag": "Mock 6 Q19",
  "q": "The channel that is least likely to help India overcome its challenge of lacking significant natural resources is:",
  "ans": "Channel 3.",
  "pick": "A",
  "key": "C",
  "mis": "Counted a low exchange rate as a growth channel on the supply side.",
  "fix": "Capital deepening and investment in technology raise potential growth. A low currency supports export demand and has little direct effect on supply capacity.",
  "fx": "",
  "tb": [
   "Growth theories: capital returns, technology, population, per capita income"
  ]
 },
 {
  "s": "Economics",
  "tag": "Mock 7 Q20",
  "q": "Which of the following will Sengupta most likely use to address the monetary issues relating to greater growth of the island’s economy? The central bank will:",
  "ans": "sell domestic securities to the private sector.",
  "pick": "B",
  "key": "C",
  "mis": "Chose a central bank action that expands money when inflation is the threat.",
  "fix": "Inflation threat → contract money: sell domestic securities (open market), raise rates.",
  "fx": "",
  "tb": []
 },
 {
  "s": "Economics",
  "tag": "Mock 8 Q6",
  "q": "Which of Simmons’ statements concerning inflation-linked bonds is most likely correct?",
  "ans": "Statement 3",
  "pick": "A",
  "key": "C",
  "mis": "Accepted a false inflation-linked bond statement.",
  "fix": "Break-even inflation = nominal yield − real yield (same maturity). More inflation uncertainty → HIGHER break-even (inflation risk premium). It does not compare long and short linkers.",
  "fx": "BEI = y(nominal) − y(inflation-linked)",
  "tb": []
 },
 {
  "s": "Economics",
  "tag": "Mock 8 Q8",
  "q": "Which of Redfield’s comments regarding the Australian corporate bonds in Exhibit 2 is most likely correct?",
  "ans": "Comment 2",
  "pick": "C",
  "key": "B",
  "mis": "Misread credit spreads over the business cycle.",
  "fix": "In a downturn spreads widen and high-rated bonds outperform. When spreads narrow, weaker credits improve MORE.",
  "fx": "",
  "tb": [
   "Economy improves: high yield vs investment grade"
  ]
 },
 {
  "s": "Corporate Issuers",
  "tag": "Mock 6 Q16",
  "q": "After integrating the ESG factors, the credit spread on KT Hotels’ bonds is most likely to:",
  "ans": "increase.",
  "pick": "B",
  "key": "A",
  "mis": "Said ESG integration lowers the credit spread for a company with poor governance.",
  "fix": "Few independent directors, weak diversity and high social risk → higher risk perception → credit spread INCREASES.",
  "fx": "",
  "tb": []
 },
 {
  "s": "Corporate Issuers",
  "tag": "Mock 8 Q34",
  "q": "Based on the ESG data analysis firm's scoring system and Exhibit 1, compared to PlastiKa, ChemiKa most likely ranks:",
  "ans": "the same.",
  "pick": "C",
  "key": "A",
  "mis": "Compared the companies without scoring each feature.",
  "fix": "Score every feature separately (1 point per good-governance feature), then add: here the totals were the same.",
  "fx": "",
  "tb": []
 },
 {
  "s": "Corporate Issuers",
  "tag": "Mock 9 Q9",
  "q": "Which of the following statements about Mercury's motivations for the strategic real estate plan is incorrect?",
  "ans": "The expected change in Mercury's credit rating after the transactions will increase the firm's costs of capital.",
  "pick": "B",
  "key": "A",
  "mis": "In an 'INCORRECT statement' question I picked a correct statement.",
  "fix": "Retiring debt improves the rating and LOWERS the cost of capital. Sale-leasebacks unlock real estate value. Re-read whether the question asks for correct or incorrect.",
  "fx": "",
  "tb": []
 },
 {
  "s": "Corporate Issuers",
  "tag": "Mock 9 Q12",
  "q": "A spin-off of the Downstream segment would most likely:",
  "ans": "distribute shares of the Downstream business to Neptune's existing shareholders.",
  "pick": "A",
  "key": "A",
  "mis": "Right, but unsure.",
  "fix": "Spin-off: shares of the subsidiary go to existing shareholders, no cash. Equity carve-out: sells shares to new investors, cash to the parent. Divestiture: sells the segment.",
  "fx": "",
  "tb": []
 },
 {
  "s": "Alternative Investments",
  "tag": "Set 3 Q21",
  "q": "Alpenhaus's NAVPS is closest to:",
  "ans": "CHF 22.80",
  "pick": "C",
  "key": "A",
  "mis": "CHF 50.00 = 500 ÷ 10 is the property value per share. Cash and debt were left out.",
  "fix": "NAV is the equity value: property value (NOI ÷ cap rate) + cash and other assets − debt. Only then divide by the shares.",
  "fx": "Property value = NOI ÷ market cap rate (direct capitalisation, not depreciated cost)\nNAV = property value + other assets − liabilities; NAVPS = NAV ÷ shares",
  "tb": []
 },
 {
  "s": "Alternative Investments",
  "tag": "Mock 6 Q2",
  "q": "Compared to Investment 1 recommended by Ricci, Investment 2 most likely:",
  "ans": "avoids double taxation on dividends received by investors.",
  "pick": "C",
  "key": "A",
  "mis": "Thought a REIT needs less expertise than a REOC.",
  "fix": "REIT is a pass-through (no corporate tax, no double taxation). A REOC is taxed as a company and can hold properties under development.",
  "fx": "",
  "tb": [
   "REIT vs REOC"
  ]
 },
 {
  "s": "Alternative Investments",
  "tag": "Mock 8 Q43",
  "q": "If the merger between AC and TC closes successfully, Fund 2's merger arbitrage trade will result in a gain closest to:",
  "ans": "$20,000.",
  "pick": "B",
  "key": "B",
  "mis": "Right, but unsure how the merger arbitrage gain works.",
  "fix": "Long target, short acquirer. If the deal closes, the target shares convert into acquirer shares that cover the short.",
  "fx": "Gain = short proceeds − cost of the target shares\n= 350,000 − 330,000 = $20,000",
  "tb": []
 },
 {
  "s": "Alternative Investments",
  "tag": "Mock 8 Q44",
  "q": "The main risk of Fund 2's merger arbitrage trade is that:",
  "ans": "the merger is cancelled and the TC shares fall back toward their pre-announcement price.",
  "pick": "B",
  "key": "B",
  "mis": "Right, but unsure of the main risk.",
  "fix": "The main risk is deal failure: the target falls back to its pre-announcement price while the short position no longer offsets it.",
  "fx": "",
  "tb": []
 },
 {
  "s": "Alternative Investments",
  "tag": "Mock 9 Q40",
  "q": "The risk factor most likely to adversely affect an investment in REIT B is:",
  "ans": "new competitive facilities.",
  "pick": "B",
  "key": "A",
  "mis": "Matched obsolescence of space to a storage REIT.",
  "fix": "Storage REIT → new competing facilities (easy entry). Office REIT → obsolescence. Retail REIT → tenants' sales per square foot.",
  "fx": "",
  "tb": []
 },
 {
  "s": "Alternative Investments",
  "tag": "Mock 10 Q37",
  "q": "Which of the following statements is most accurate regarding the effect of unreimbursed operating expenses on the NOI of the New York City and Boston properties?",
  "ans": "The NOI of the multi-family property in Boston is more negatively affected by unreimbursed operating expenses than is the NOI of the office property in New York City.",
  "pick": "A",
  "key": "B",
  "mis": "Compared dollar amounts of unreimbursed expenses.",
  "fix": "Compare unreimbursed expenses as a % of effective gross income: Boston 44.5% vs New York 36.7%, so Boston is hit harder.",
  "fx": "Unreimbursed expenses % = (operating expenses − reimbursements) ÷ EGI",
  "tb": []
 },
 {
  "s": "Alternative Investments",
  "tag": "Mock 10 Q38",
  "q": "Which of the following responses is most accurate regarding Martins’s Statement 1 and Statement 2?",
  "ans": "Statement 2 is more accurate than Statement 1.",
  "pick": "A",
  "key": "C",
  "mis": "Thought both statements could describe the same cycle phase.",
  "fix": "High vacancy = oversupply or recession phase, so only a recovery within two years (Statement 2) fits. The two statements imply different phases.",
  "fx": "",
  "tb": []
 },
 {
  "s": "Alternative Investments",
  "tag": "Mock 10 Q40",
  "q": "Given Martins’s comment in Statement 2 about the office property in New York City, which of the following approaches to estimating property value is most appropriate?",
  "ans": "Direct capitalization method using a normalized NOI forecast",
  "pick": "A",
  "key": "A",
  "mis": "Right, but unsure.",
  "fix": "Direct capitalisation uses one period's NOI. If NOI is temporarily disrupted, use a NORMALIZED NOI. Sales comparison is less suited while a recovery is expected.",
  "fx": "Value = NOI ÷ cap rate",
  "tb": []
 }
];
