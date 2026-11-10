# Mock 9 for the Exam section (10 Nov, user request): 10 vignettes from the bank that were never used in any mock or paper given to the user,
# drawn at random (mock9_pick.py), each from a SUB-TOPIC (reading) different from the one Mock 8 used for that subject, plus 1 Ethics unit (4 key-notes
# Ethics questions, added by build.py). No re-dos this time (Mock 8 was not marked yet). Disguise pass as for Mock 8: listed items renumbered, concept
# answer choices reordered, some simple definition questions swapped for other concepts of the same reading, text no question uses cut.
import json,sys,itertools,collections,random,re
sys.path.insert(0,'/home/user/jimin/bank/exam')
from mock7 import convert,BANK
from mock7_tweak import perm
def cut(b,x,y=''):
    assert x in b,x[:80]; return b.replace(x,y,1)
def mkq(q,opts,ans,whys,hl,rule,fixed=False):
    why='\n'.join(f"{'ABC'[i]}. {'Correct' if i==ans else 'Incorrect'}. {w}" for i,w in enumerate(whys))
    return dict(q=q,options=opts,answer=ans,why=why,hint=dict(hl=hl,rule=rule),_fixed=fixed)
V=[]
def _c(b,x,y=''):
    assert x in b,x[:60]; return b.replace(x,y)
def post(b):
    if 'Exhibit 6' in b and 'Johnson' in b:
        i=b.index('\nExhibit 4. Based on her')+1; j=b.index('Exhibit 4\nCurrent MRR')
        b=b[:i]+b[j:]
        b=_c(b,'new positions in 1 × 4 and 2 × 5 FRAs','a new position in a 2 × 5 FRA')
        b=_c(b,'# Days to Maturity | Yen Spot Interest Rates | US Dollar Spot Interest Rates','# Days to Maturity | Yen Spot Interest Rates')
        for a,c in [('90','0.05%'),('180','0.10%'),('270','0.15%'),('360','0.25%')]:
            import re
            b=re.sub(r'^'+a+r' \| '+re.escape(c)+r' \| [0-9.]+%$',a+' | '+c,b,flags=re.M)
    b=b.replace('Selected Japanese and US Interest Rate Data','Selected Japanese Interest Rate Data')
    if 'USD40 million' in b: b=_c(b,'USD40 million','USD44 million')
    if 'hedging activities' in b:
        b=_c(b,'a 5-day, 1% VaR limit of $10 million, and the fund will undertake hedging activities, including the purchase of protective put options, if its cumulative 30-day loss ever exceeds $15 million. In addition, the magnitude of the hedge shall be designed to increase as losses increase.','a 5-day, 1% VaR limit of $10 million and a cumulative 30-day loss limit of $15 million.')
    return b
def add(topic,body,qs): body=post(body); V.append(dict(topic=topic,group="new",body=body.strip(),questions=qs))

# ---------------- Derivatives: Johnson (forward commitments, reading 28) ----------------
b=convert(BANK['d28-johnson']['body'])
s1=b.index('Johnson next reviews an equity swap'); e7=b.index('Exhibit 7'); end7=b.index('Three months later')
b=b[:s1]+"Johnson reviews current MRR data in Exhibit 4. Based on her interest rate forecast, Johnson also considers whether the bank should enter into new positions in 1 × 4 and 2 × 5 FRAs.\n\n"+b[e7:end7].replace('Exhibit 7','Exhibit 4').rstrip()
add("Derivatives",b,[
 mkq("Based on Exhibit 1, Johnson should price the three-year MRR-based interest rate swap at a fixed rate closest to:",["0.34%.","1.16%.","1.19%."],2,
  ["It does not follow from the swap pricing formula.","It does not follow from the swap pricing formula.","Fixed swap rate = (1 − final-year PV factor) ÷ (sum of the PV factors) = (1 − 0.965136) ÷ (0.990099 + 0.977876 + 0.965136) = 0.034864 ÷ 2.933111 = 1.19%."],
  ["three-year MRR-based interest rate swap with annual resets"],"Fixed swap rate = (1 − last PV factor) ÷ sum of the PV factors.",True),
 mkq("From the bank's perspective, using data from Exhibit 1, the current value of the swap described in Exhibit 2 is closest to:",["–$2,951,963.","–$1,849,897.","–$1,943,000."],1,
  ["It does not follow from the swap valuation formula.","Two years remain, so the sum of the PV factors is 0.990099 + 0.977876 = 1.967975. For the receive-fixed party the value is (0.0300 − 0.0112) × 1.967975 × $50,000,000 = $1,849,897. The bank pays fixed, and the fixed rate it pays is above today's equilibrium rate, so its value is −$1,849,897.","It does not follow from the swap valuation formula."],
  ["entered into one year ago as the pay-fixed (receive-floating) party","current equilibrium two-year fixed swap rate is 1.12%"],"Swap value = (old fixed rate − current fixed rate) × sum of the remaining PV factors × notional; the pay-fixed party loses when the old rate is above the current rate.",True),
 mkq("Based on Exhibit 3, Johnson should determine that the annualized equilibrium fixed swap rate for Japanese yen is closest to:",["0.0624%.","0.1375%.","0.2496%."],2,
  ["0.0624% is the quarterly (periodic) rate, not the annualized rate.","It does not follow from the swap pricing formula.","Yen PV factors = 1 ÷ [1 + rate × (days ÷ 360)]: 0.999875, 0.999500, 0.998876, 0.997506 (sum 3.995757). Periodic rate = (1 − 0.997506) ÷ 3.995757 = 0.0624%. Annualized = 0.0624% × (360 ÷ 90) = 0.2496%."],
  ["one-year fixed-for-fixed currency swap involving yen and US dollars","with a quarterly reset"],"Currency swap fixed rate for one currency: PV factors from that currency's spot rates, periodic rate = (1 − last PV) ÷ sum of PV, then multiply by 4 for quarterly resets.",True),
 mkq("Based on Exhibit 4, the fixed rate on a new 2 × 5 FRA is closest to:",["0.61%.","1.02%.","1.71%."],1,
  ["It does not follow from the FRA pricing formula.","FRA rate = {[1 + L150 × (150/360)] ÷ [1 + L60 × (60/360)] − 1} ÷ (90/360) = {1.003917 ÷ 1.001367 − 1} × 4 = 1.02%, using the 60-day MRR of 0.82% and the 150-day MRR of 0.94%.","It does not follow from the FRA pricing formula."],
  ["a new position in a 2 × 5 FRA"],"2 × 5 FRA: use the 60-day and 150-day rates: [(1 + L150 × 150/360) ÷ (1 + L60 × 60/360) − 1] ÷ (90/360).",True),
])

# ---------------- FSA: Takahashi (financial institutions, reading 10) ----------------
b=convert(BANK['fsa4-takahashi']['body'])
b=cut(b,"Enhancement 1: Additional measures to ensure sufficient earnings quality, thereby strengthening banks’ regulatory capital.\nEnhancement 2: More stringent capital requirements that prevent banks from taking on excessive financial leverage.\nEnhancement 3: Increased funding stability by giving preference to interbank deposits over those from consumers.",
 "Enhancement 1: More stringent capital requirements that prevent banks from taking on excessive financial leverage.\nEnhancement 2: Increased funding stability by giving preference to interbank deposits over those from consumers.\nEnhancement 3: Additional measures to ensure sufficient earnings quality, thereby strengthening banks’ regulatory capital.")
b=cut(b,"The group is scheduled to review two insurance companies: Yatabe Holdings (YH) and Sapporo Hoken (SH). Takahashi focuses first on YH, a property and casualty insurer.","The group is scheduled to review an insurance company, Yatabe Holdings (YH), a property and casualty insurer.")
i=b.index('Glancing at her watch'); b=b[:i].rstrip()
add("Financial Statement Analysis",b,[
 mkq("Which of the enhancements Suzuki describes regarding the Basel III regulatory framework is most accurate?",["Enhancement 1","Enhancement 2","Enhancement 3"],0,
  ["After the 2008 crisis, Basel III raised the required equity funding of banks' risk-weighted assets, which prevents banks from taking on excessive financial leverage.","Basel III did increase requirements for stable funding, but consumer deposits are considered more stable than interbank deposits, so the preference is for consumer deposits.","Earnings quality was not a focus of Basel III, although its changes will likely improve earnings quality."],
  ["Basel III"],"Basel III: more equity against risk-weighted assets (less leverage), stable funding from consumer deposits.",True),
 mkq("If Takahashi's interpretation of the current phase of the property and casualty market is correct, a cyclical shift is most likely to result in:",["additional competitors entering the market.","a tightening of underwriting standards.","capital adequacy being easier to achieve."],0,
  ["In a hard market premiums, profits and underwriting standards are high; this attracts competitors that offer lower premiums, which softens the market and weakens underwriting standards.","In a hard market underwriting standards are already high; as the market softens they drop, not tighten.","Hard markets help insurers maintain adequate capital; capital depletes as the market softens, making capital adequacy harder to achieve."],
  ["“hard” phase for a few years now"],"Hard market: high premiums and profits → new competitors → soft market: lower premiums, weaker underwriting standards, capital harder to maintain."),
 mkq("Based on Exhibit 1, YH's combined ratio is closest to:",["61.1%.","109.8%.","126.8%."],1,
  ["61.1% is only the loss ratio (38,467 ÷ 62,939).","Combined ratio = loss ratio + underwriting expense ratio = 38,467 ÷ 62,939 + 23,960 ÷ 49,241 = 61.1% + 48.7% = 109.8% (loss expense is divided by net premiums earned, underwriting expense by net premiums written).","126.8% uses net premiums written for the loss ratio too (78.1% + 48.7%)."],
  ["calculate YH’s combined ratio"],"Combined ratio = loss & LAE ÷ net premiums earned + underwriting expense ÷ net premiums written.",True),
 mkq("YH's combined ratio indicates that its underwriting business, before investment income, is:",["unprofitable, because claims and expenses exceed the premiums earned.","profitable, because the loss ratio is below 100%.","break-even, because the combined ratio is measured on net premiums written."],0,
  ["A combined ratio above 100% means claims, loss adjustment expenses and underwriting expenses exceed the premiums, so the underwriting is a loss that investment income must cover.","The loss ratio alone ignores the underwriting expense ratio; the combined ratio adds both.","The combined ratio is not defined on net premiums written alone."],
  ["combined ratio"],"Combined ratio > 100% = underwriting loss (covered only by investment income)."),
])

# ---------------- Equity: Albertson (market-based valuation, reading 20) ----------------
b=convert(BANK['m2-2']['body'])
b=cut(b,"In Albertson's previous report on Xita, the stock had a forward P/E ratio of 14.9 and a trailing P/E ratio of 15.7. He considers a likely explanation for the difference in the P/E ratios.\n")
add("Equity Valuation",b,[
 mkq("Albertson finds that Xita's profits are cyclical. Compared with the latest reported EPS, normalized EPS is used because it:",["estimates the earnings Xita would earn at mid-cycle, removing the effect of the business cycle.","adjusts reported earnings for the effect of share repurchases.","uses forecast earnings, which are always available for cyclical companies."],0,
  ["Normalized EPS removes the influence of the business cycle by estimating mid-cycle earnings (here average ROE over a full cycle times current book value per share).","Share repurchases are not what normalizing is for.","Forecast earnings give a forward P/E; normalized earnings are an estimate of average earnings over a full cycle."],
  ["Xita's profits are cyclical"],"Cyclical profits → use normalized (mid-cycle) EPS, e.g. average ROE × current BVPS."),
 mkq("Xita's normalized EPS based on the average ROE method is closest to:",["$2.08.","$2.13.","$2.30."],2,
  ["$2.08 is the average EPS of Years 1 to 4.","$2.13 multiplies the average ROE (17.3%) by the AVERAGE book value per share ($12.325) instead of the current one.","ROE by year: 29.3%, 17.7%, 2.9% and 19.2%, average 17.3%. Normalized EPS = average ROE × current (Year 4) book value per share = 0.1728 × $13.30 = $2.30."],
  ["average ROE method","Year 1 through Year 4 (the most recent year) constitutes a full business cycle"],"Normalized EPS = average ROE of a full cycle × CURRENT book value per share.",True),
 mkq("Which of the following is the most appropriate metric for Albertson to use in valuing Garc?",["Dividend yield","Price to book ratio","Enterprise value to sales ratio"],2,
  ["Dividend yield ignores capital gains, which are likely important with the industry's growth potential, and the highest payout in the industry may not be safe.","Book value ignores Garc's brand, an internally generated intangible asset built by advertising that is not on the balance sheet.","EV/sales uses the total value of debt and equity, so it suits Garc's high debt-to-equity ratio and diverse capital structures; sales are stable and hard to manipulate."],
  ["debt-to-equity ratio is significantly higher than the average of its competitors","spent heavily on advertising to create and maintain its brand"],"High leverage + valuable internal brand → enterprise value to sales, not P/B or dividend yield."),
 mkq("Garc's relative strength compared to the market index over the past year is closest to:",["1.0153.","1.0168.","1.0241."],0,
  ["Relative strength = (Garc price ÷ index) at the end divided by the same ratio at the start = (31.05 ÷ 602.21) ÷ (27.95 ÷ 550.40) = 0.051560 ÷ 0.050781 = 1.0153. Dividends are not included.","It does not follow from the relative strength calculation (dividends are not part of it).","It does not follow from the relative strength calculation (dividends are not part of it)."],
  ["relative strength"],"Relative strength = (stock ÷ index) now ÷ (stock ÷ index) at the start; price only, no dividends.",True),
])

# ---------------- Equity: Yee (free cash flow valuation, reading 19) ----------------
b=convert(BANK['fcf-yee']['body'])
i=b.index('Yee is also concerned'); j=b.index('Melissa Nicosia')
b=b[:i]+b[j:]
b=cut(b,"Statement 1: The free cash flow valuation approach is superior to the discounted dividend valuation approach because the company's dividends have been substantially different from its FCFE.\nStatement 2: Because the company's capital structure seems unstable, the FCFE valuation approach is superior to the FCFF valuation approach.\nStatement 3: If there is a change in control at McLaughlin, the discounted dividend valuation approach would be superior to a free cash flow valuation approach.",
 "Statement 1: Because the company's capital structure seems unstable, the FCFE valuation approach is superior to the FCFF valuation approach.\nStatement 2: If there is a change in control at McLaughlin, the discounted dividend valuation approach would be superior to a free cash flow valuation approach.\nStatement 3: The free cash flow valuation approach is superior to the discounted dividend valuation approach because the company's dividends have been substantially different from its FCFE.")
add("Equity Valuation",b,[
 mkq("McLaughlin's FCFF ($ millions) for 2012 is closest to:",["$418.","$460.","$485."],2,
  ["It uses the tax rate instead of (1 − tax rate) on interest.","It ignores the working capital investment.","Working capital (current assets excluding cash − current liabilities) went from −1,500 to −1,525, so WCInv = −25 (an inflow). FCFF = 626 + 243 + 186 × (1 − 0.32) − 535 − (−25) = 485."],
  ["free cash flow to the firm (FCFF)"],"FCFF = NI + NCC + Int(1 − t) − FCInv − WCInv; working capital excludes cash.",True),
 mkq("Using Yee's base case valuation assumptions and the FCFF valuation approach, the year-end 2012 value per share of McLaughlin common stock is closest to:",["$12.78.","$23.73.","$29.20."],1,
  ["It discounts at the cost of equity instead of the WACC.","Firm value = 600 ÷ (0.09 − 0.04) = 12,000. Equity = 12,000 − 2,249 (debt) = 9,751. Per share = 9,751 ÷ 411 = $23.73.","It does not deduct the debt."],
  ["2013 FCFF will be $600 million","FCFF will grow in perpetuity at 4% annually"],"FCFF value = FCFF1 ÷ (WACC − g); subtract debt for equity, divide by shares.",True),
 mkq("Using Yee's alternative valuation assumptions and the FCFE valuation approach, the year-end 2012 value per share of McLaughlin's common stock is closest to:",["$18.00.","$22.80.","$24.17."],1,
  ["It is the FCFF-style calculation: 1.80 − 0.54 − 0.18 = 1.08 ÷ 0.06.","FCFE1 = EPS − (1 − DR) × net capex − (1 − DR) × WCInv = 1.80 − 0.6 × 0.54 − 0.6 × 0.18 = 1.368. Value = 1.368 ÷ (0.12 − 0.06) = $22.80.","It grows FCFE1 again by (1 + g)."],
  ["EPS will grow forever at 6% annually","Of future investments, 60% will be financed with equity and 40% will be financed with debt"],"FCFE = EPS − (1 − DR)(net capex + WCInv); value = FCFE1 ÷ (r − g).",True),
 mkq("Which of Nicosia's three statements pertaining to McLaughlin's valuation is the most accurate? Statement:",["1","2","3"],2,
  ["FCFF, not FCFE, is preferred when the capital structure is unstable or changing.","With a change in control, the new owner has discretion over free cash flow and can change the dividend, so a free cash flow approach is superior to a dividend approach.","FCFE or FCFF is preferred to the dividend approach when dividends differ significantly from the capacity to pay them (and when control may change)."],
  ["capital structure seems unstable","change in control"],"Unstable capital structure → FCFF; dividends unrelated to FCFE or change of control → free cash flow, not DDM.",True),
])

# ---------------- Corporate Issuers: Chang (restructuring, reading 16) ----------------
b=convert(BANK['jupiter-saturn']['body'])
i=b.index('During an internal discussion'); b=b[:i].rstrip()
add("Corporate Issuers",b,[
 mkq("Which of the following statements about Jupiter's motivations for the strategic real estate plan is incorrect?",["The expected change in Jupiter's credit rating after the transactions will increase the firm's costs of capital.","The transactions will enable Jupiter to sell a non-core business.","The transactions will allow Jupiter to unlock the value of its real estate assets."],0,
  ["Retiring debt should improve the credit rating, which lowers (not raises) the cost of capital, so this statement is incorrect.","Real estate ownership is not Jupiter's core business (operating grocery stores), so this statement is correct.","Sale-leasebacks unlock the value in the real estate: Jupiter receives cash and records a lease liability."],
  ["pursue a separation of all its owned assets","speculative-grade credit rating","retire approximately USD600 million of debt"],"Less debt → better credit rating → lower cost of capital; real estate is a non-core business for a grocer."),
 mkq("Which of the following statements best describes Jupiter's average capitalization rate for the sale-leaseback transactions? Jupiter's average capitalization rate:",["is supported by the comparable transactions.","compares favorably to the comparable transactions.","compares unfavorably to the comparable transactions."],0,
  ["The average cap rate of 5.50% equals the median (50th percentile) of comparable transactions (5.00%, 5.50%, 6.00%), so it is supported.","5.50% is not better than the median of comparable transactions.","5.50% is not worse than the median of comparable transactions."],
  ["average capitalization rate of 5.50%","5.00%, 5.50%, and 6.00%"],"Cap rate equal to the median of comparables = supported by the market.",True),
 mkq("Based on Exhibit 1 and the peer median EV/EBITDA multiples, Saturn's estimated enterprise value is closest to:",["USD392,000 million.","USD408,000 million.","USD421,440 million."],2,
  ["It uses the average of the peer multiples (16.33) for every segment.","USD408,000 million is Saturn's current enterprise value, not the estimate.","Sum of the parts: Upstream 14,400 × 19 = 273,600; Midstream 5,760 × 17 = 97,920; Downstream 3,840 × 13 = 49,920; total 421,440."],
  ["multiples of 19, 17, and 13"],"Sum of the parts: each segment's EBITDA × its own peer median multiple.",True),
 mkq("A spin-off of the Downstream segment would most likely:",["distribute shares of the Downstream business to Saturn's existing shareholders.","sell shares of the Downstream business to new investors in a public offering, giving Saturn cash.","sell the Downstream segment to another company for cash."],0,
  ["In a spin-off the parent distributes the shares of the subsidiary pro rata to its own shareholders; no cash is raised.","That describes an equity carve-out, which raises cash for the parent.","That describes a divestiture (sale) of the segment, not a spin-off."],
  ["A spin off of the Downstream segment"],"Spin-off = shares distributed to existing shareholders, no cash; carve-out = IPO of a minority stake; divestiture = sale."),
])

# ---------------- Fixed Income: Brown (term structure, reading 23) ----------------
b=convert(BANK['ts-brown']['body'])
b=cut(b,' One of Brown\'s analysts disagrees with his view and proposes a "rolling down the yield curve" strategy. Brown\'s investment horizon is seven years.')
add("Fixed Income",b,[
 mkq("If Brown's view of spot rates one year from today is accurate, the 1-year total return of the 10-year bond will be:",["equal to the total return of the 1-year bond.","less than the total return of the 1-year bond.","greater than the total return of the 1-year bond."],0,
  ["If spot rates evolve as the current forward curve implies, bonds of every maturity earn the one-year (risk-free) rate over the year.","It would be lower only if spot rates rose above those implied by the forward curve.","It would be higher only if spot rates fell below those implied by the forward curve."],
  ["spot curve one year from today will reflect the current forward curve"],"Spot curve evolves as the forward curve implies → every bond earns the one-year spot rate."),
 mkq("Brown's view that the spot curve one year from today will reflect the current forward curve is most consistent with:",["the pure expectations theory.","the liquidity preference theory.","the segmented markets theory."],0,
  ["Pure expectations: forward rates are unbiased predictors of future spot rates, so the future spot curve equals today's forward curve.","Liquidity preference adds a premium for longer maturities, so forward rates overstate expected future spot rates.","Segmented markets: each maturity is priced by its own supply and demand; forward rates are not forecasts."],
  ["spot curve one year from today will reflect the current forward curve"],"Future spot = today's forward rates is the pure expectations theory."),
 mkq("The 3-month TED spread that Brown calculates should equal:",["5 bps.","11 bps.","13 bps."],1,
  ["It subtracts the T-bill rate from the MRR–OIS spread (9 − 4).","3-month MRR = OIS + (MRR − OIS spread) = 6 + 9 = 15 bps. TED spread = MRR − T-bill rate = 15 − 4 = 11 bps.","It adds the T-bill rate to the MRR–OIS spread (9 + 4)."],
  ["3-month TED spread"],"TED = MRR − T-bill; MRR = OIS + (MRR − OIS spread).",True),
 mkq("The strategy best suited to exploit the second analyst's expected changes to the current fixed-income environment is to:",["extend duration and construct a bullet portfolio.","extend duration and construct a barbell portfolio.","keep duration constant and construct a barbell portfolio."],1,
  ["Extending duration is right (flight to quality lowers yields) but a bullet suits a parallel shift or a steepening, not a bullish flattening.","Flight to quality: government yields fall, so extend duration. Bullish flattening: long rates fall more than short rates, so shift from a bullet to a barbell.","Duration should be extended when yields are expected to fall."],
  ["flight to quality and a bullish flattening of the yield curve"],"Yields fall (flight to quality) → extend duration; bullish flattening → barbell."),
])

# ---------------- Quantitative Methods: Brent (multiple regression, reading 1) ----------------
b=convert(BANK['tb1-brent']['body'])
add("Quantitative Methods",b,[
 mkq("In regard to their conversation about the regression equation:",["Brent's statement is correct; Johnson's statement is correct.","Brent's statement is correct; Johnson's statement is incorrect.","Brent's statement is incorrect; Johnson's statement is correct."],2,
  ["Brent says the independent variable rises by $1.6 million, but expected sales is the dependent variable, so he is wrong.","Brent is wrong because expected sales is the dependent variable.","Johnson is right: 12.6 is the intercept, the expected sales (in millions) when all independent variables are zero."],
  ["increase the independent variable by $1.6 million","sales will equal $12.6 million if all independent variables are equal to zero"],"Slope: change in the DEPENDENT variable per unit of the independent variable; intercept: dependent variable when all independent variables are zero.",True),
 mkq("Brent explains the standard error of estimate (SEE) to Johnson with three points. Point 1: If there is a strong relationship between the variables and the SEE is small, the individual estimation errors will also be small. Point 2: The SEE is the standard deviation of the differences between the estimated values for the independent variables and the actual observations for the independent variable. Point 3: Any violation of the basic assumptions of a multiple regression model is going to affect the SEE. How many of Brent's points are most accurate?",["2 of Brent's points are correct.","All 3 of Brent's points are correct.","1 of Brent's points is correct."],0,
  ["Point 2 is wrong: the SEE measures differences between estimated and actual values of the DEPENDENT variable. Points 1 and 3 are correct, so two points are correct.","Point 2 is incorrect, so not all three are correct.","Points 1 and 3 are also correct, so more than one point is correct."],
  ["standard error of estimate (SEE)"],"SEE = standard deviation of the residuals (dependent variable); small SEE = strong fit; violations of assumptions affect it."),
 mkq("Assuming that next year's marketing expenditures are $3,500,000 and there are five salespeople, predicted sales for Mega Flowers should be:",["$24,200,000.","$11,600,000.","$24,000,000."],0,
  ["The equation is in millions of dollars: 12.6 + 1.6 × 3.5 + 1.2 × 5 = 24.2, i.e. $24,200,000.","It does not follow from the equation (it leaves out the intercept).","It does not follow from the equation."],
  ["stated in millions of dollars"],"Plug the values into the equation and keep the units (millions).",True),
 mkq("Brent wants to test whether the marketing coefficient of 1.6 is still significantly different from zero after a year of flat revenues. He should compare:",["the t-statistic (the coefficient divided by its standard error) with the critical t-value.","the F-statistic of the whole regression with the critical F-value.","the R² of the regression with the SEE."],0,
  ["The significance of one slope coefficient is tested with a t-test.","The F-test checks whether at least one independent variable explains a significant part of the variation, not one specific coefficient.","R² and the SEE describe fit, they do not test a single coefficient."],
  ["revenues have been flat","marketing expenditures increased slightly"],"One coefficient → t-test; all coefficients together (at least one ≠ 0) → F-test."),
])

# ---------------- Portfolio Management: Citadel (market risk, reading 38) ----------------
b=convert(BANK['mr-citadel']['body'])
b=cut(b,"(1) can be used for performance evaluation, (2) provides an estimate of downside exposure during a worst-case scenario, and (3) avoids subjectivity","(1) provides an estimate of downside exposure during a worst-case scenario, (2) avoids subjectivity, and (3) can be used for performance evaluation")
i=b.index('Alexander then asks Jun Lee'); j=b.index('Alexander receives a call')
b=b[:i]+b[j:]
add("Portfolio Management",b,[
 mkq("Woolridge's comments on the advantages of VaR are most likely correct regarding:",["performance evaluation.","subjectivity.","downside exposure."],0,
  ["VaR can be the basis for risk adjustment of returns, which is needed in performance evaluation.","VaR relies on subjective inputs: the confidence level, the time horizon and the estimation method.","VaR is not a worst-case scenario; losses can and will exceed VaR."],
  ["advantages of using VaR","can be used for performance evaluation"],"VaR: useful for risk-adjusted performance; subjective inputs; NOT a worst case."),
 mkq("Using the inputs in Exhibit 1, Woolridge's estimate of VaR is most likely closest to:",["$6.5 million.","$10.5 million.","$18.9 million."],1,
  ["It multiplies the portfolio value by the daily volatility only ($500 million × 1.3%).","Parametric 5% VaR: 1.65 × 1.30% = 2.145%; subtract the expected return of 0.04%: 2.105% (about 2.11%); × $500 million = about $10.5 million.","It uses 4% instead of 0.04% for the expected return."],
  ["parametric method (assuming normal distribution)"],"Parametric VaR = (z × volatility − expected return) × portfolio value; 5% → z = 1.65.",True),
 mkq("A limitation of the parametric method that Woolridge used to estimate VaR is that it:",["assumes returns are normally distributed, which fits poorly with fat tails and options.","uses actual past returns, so it cannot capture new risks.","requires a large number of random scenarios to be generated."],0,
  ["The parametric method assumes a normal distribution, which understates tail risk and does not suit portfolios with options.","Using actual past returns describes the historical simulation method.","Generating random scenarios describes Monte Carlo simulation."],
  ["parametric method (assuming normal distribution)"],"Parametric = normal distribution assumption (weak for fat tails and options); historical = past data; Monte Carlo = random scenarios."),
 mkq("Patterson's comments to Citadel's investors are least likely accurate with regard to her:",["discussion of limiting losses.","use of confidence levels.","implied percentage declines from dollar VaR limits."],0,
  ["VaR is a minimum loss for a given confidence level; it does not limit losses (the loss can be the whole portfolio value), so she is wrong to say the fund limits losses.","A 1% VaR is appropriately a 99% level of confidence.","VaR can be expressed in percentages: $10 million on $500 million is 2%, and $15 million is 3%."],
  ["5-day, 1% VaR limit of $10 million","limit fund losses to 2% of assets with a 99% level of confidence"],"VaR = minimum loss at a confidence level, not a loss limit."),
])

# ---------------- Alternatives: Lin (real estate through publicly traded securities, reading 32) ----------------
body9="""Hui Lin, CFA, is an investment manager looking to diversify his portfolio by adding equity real estate investments. Lin and his investment analyst, Maria Nowak, are discussing whether they should invest in publicly traded real estate investment trusts or public real estate operating companies. Nowak expresses a strong preference for investing in public REITs in taxable accounts.

Lin schedules a meeting to discuss this matter, and for the meeting, Lin asks Nowak to gather data on two specific REITs and come prepared to explain her preference for public REITs over public REOCs. At the meeting, Lin asks Nowak,

“Why do you prefer to invest in public REITs over public REOCs for taxable accounts?”

Nowak provides Lin with an explanation for her preference of public REITs and provides Lin with data on the two REITs shown in Exhibit 1 and Exhibit 2.

The meeting concludes with Lin directing Nowak to identify the key investment characteristics along with the principal risks of each REIT and to investigate the valuation of the two REITs. Specifically, Lin asks Nowak to value REIT A using two different methodologies:

Valuation Method 1: Relative valuation using property subsector average P/AFFO multiple
Valuation Method 2: Net asset value

Exhibit 1
Select REIT Financial Information
# | REIT A | REIT B
Property subsector | Office | Storage
Estimated 12-month cash net operating income | $350,000 | $267,000
Funds from operations | $316,965 | $290,612
Cash and equivalents | $308,700 | $230,850
Accounts receivable | $205,800 | $282,150
Debt and other liabilities | $2,014,000 | $2,013,500
Non-cash rents | $25,991 | $24,702
Recurring maintenance–type capital expenditures | $63,769 | $60,852
Shares outstanding | 56,100 | 67,900

Exhibit 2
REIT A Assumptions and Average Price Multiple
Assumed cap rate | 7.0%
Property subsector average P/AFFO multiple | 18.3×"""
add("Alternative Investments",body9,[
 mkq("Nowak's most likely response to Lin's question is that the type of real estate security she prefers:",["provides dividend income that is exempt from double taxation.","offers a high degree of operating flexibility.","has below-average correlations with overall stock market returns."],0,
  ["REITs are tax-advantaged entities: in jurisdictions such as the United States they avoid the double taxation of income (corporate level and again on dividends), while REOCs are not typically tax-advantaged.","Operating flexibility is an advantage of REOCs, not REITs (REITs have restrictions on their activities).","REITs do not have below-average correlation with the stock market; that is not the reason for the preference in taxable accounts."],
  ["preference for investing in public REITs in taxable accounts"],"REIT: tax-advantaged (no double taxation); REOC: operating flexibility, no payout requirement."),
 mkq("Based on Exhibit 1 and Exhibit 2, the value per share for REIT A using valuation Method 2 is closest to:",["$51.26.","$62.40.","$98.30."],1,
  ["It does not follow from the NAV steps.","NAV: operating real estate = 350,000 ÷ 0.07 = 5,000,000; plus cash and receivables 514,500; less debt and other liabilities 2,014,000 = 3,500,500; ÷ 56,100 shares = $62.40.","It does not follow from the NAV steps."],
  ["Net asset value","Assumed cap rate"],"NAV per share = (cash NOI ÷ cap rate + cash + receivables − liabilities) ÷ shares.",True),
 mkq("Based on Exhibit 1 and Exhibit 2, the value per share of REIT A using valuation Method 1 is closest to:",["$58.32.","$74.12.","$103.40."],1,
  ["It does not follow from the P/AFFO steps.","AFFO = FFO − non-cash rents − recurring maintenance-type capex = 316,965 − 25,991 − 63,769 = 227,205. AFFO per share = 227,205 ÷ 56,100 = $4.05. Value = 4.05 × 18.3 = $74.12.","It does not follow from the P/AFFO steps."],
  ["P/AFFO multiple","Non-cash rents"],"AFFO = FFO − non-cash rents − recurring capex; value = AFFO per share × P/AFFO multiple.",True),
 mkq("The risk factor most likely to adversely affect an investment in REIT B is:",["new competitive facilities.","tenants' sales per square foot.","obsolescence of existing space."],0,
  ["REIT B is a storage REIT; entry into self-storage is easy, so overbuilding and new competing facilities are the main risk.","Tenants' sales per square foot is a risk measure for retail (shopping center) REITs.","Obsolescence of existing space is a typical concern for office REITs."],
  ["@row:Property subsector"],"Match the property subsector to its main risk: storage = new competitive facilities (easy entry)."),
])

# ---------------- Economics: Sagara (economic growth, reading 6) ----------------
b=convert(BANK['eg29-sagara']['body'])
i=b.index('N’Diarra, who has studied the Cobb–Douglas'); j=b.index('Banantoumou believes that the Sagara economy')
b=b[:i]+b[j:]
i=b.index('N\'Diarra is not as optimistic');
if i<0: raise SystemExit
j=b.index('N’Diarra believes that according to the classical growth theory')
b=b[:i]+b[j:]
add("Economics",b,[
 mkq("N'Diarra's understanding of the two growth theories is most accurate with regard to:",["classical growth theory.","endogenous growth theory.","both classical growth theory and endogenous growth theory."],0,
  ["Her view of classical theory is right: gains in per capita GDP are temporary because the resulting population growth pushes income back to subsistence.","Her description of endogenous theory is wrong: a steady state of growth and diminishing marginal returns are features of neoclassical theory; endogenous theory has no diminishing returns to capital (R&D, human capital).","Her understanding of endogenous growth theory is incorrect."],
  ["gains in per capita GDP are temporary","steady state rate of growth is achieved"],"Classical = temporary gains (population); neoclassical = steady state, diminishing returns; endogenous = no diminishing returns.",True),
 mkq("Which of the following factors favors economic growth?",["Limited regulations in order to encourage entrepreneurial activity","Low rates of saving","Limited foreign capital and trade flows"],0,
  ["Limited regulation encourages new companies, which are strongly correlated with higher productivity.","Low saving and investment limit growth.","Foreign investment and trade can raise the capital stock, productivity, employment and wages."],
  ["enforcement of substantive laws, restrictions on imports, and low rates of saving"],"Growth helped by savings, open trade and capital flows, entrepreneurship; hurt by import restrictions and weak law enforcement."),
 mkq("According to the neoclassical growth model, when trade barriers are removed, convergence of per capita income levels between developed and developing countries should:",["occur more slowly.","remain unaffected.","occur more quickly."],2,
  ["Opening up speeds up, not slows down, convergence.","Opening up affects the rate of growth and convergence.","With open trade and capital flows, capital moves to poorer countries and their capital-to-labor ratios rise faster, so productivity and per capita incomes converge more quickly."],
  ["when trade barriers are removed"],"Neoclassical + open economy: capital flows to the poor country → faster convergence.",True),
 mkq("Opening an economy to trade and financial flows will most likely:",["discourage domestic spending on research and development.","not impact domestic spending on research and development.","encourage domestic spending on research and development."],2,
  ["Open trade encourages, not discourages, R&D spending.","Open trade affects innovation by encouraging R&D and human capital spending.","Open trade gives access to larger markets and a greater flow of ideas, so firms invest more in R&D and human capital, raising the return on new investment and growth (though small, lagging countries can lose domestic innovation)."],
  ["Opening an economy to trade and financial flows"],"Open economy: larger markets and idea flow → more R&D and human capital investment.",True),
])

# ---------------- reskin (10 Nov, user request): names and numbers changed in every vignette, calculations recomputed ----------------
def walk(v,pairs,regex=()):
    def f(s):
        for a,b in pairs:
            s=s.replace(a,b)
        for a,b in regex: s=re.sub(a,b,s)
        return s
    v['body']=f(v['body'])
    for q in v['questions']:
        q['q']=f(q['q']); q['options']=[f(o) for o in q['options']]; q['why']=f(q['why'])
        h=q['hint']; h['hl']=[f(x) for x in h['hl']]; h['rule']=f(h['rule'])
def body_sub(v,pairs):
    for a,b in pairs:
        assert a in v['body'],a[:70]; v['body']=v['body'].replace(a,b)
def put(correct,wrongs,idx):
    o=wrongs[:]; o.insert(idx,correct); return o
def newq(v,i,q,opts,ans,whys,hl,rule):
    nq=mkq(q,opts,ans,whys,hl,rule,True); old=v['questions'][i]
    v['questions'][i]=nq
    for h in hl:
        if not h.startswith('@row:'): assert h in v['body'] or h in q,('hint',h)
def f2(x): return f"{x:.2f}"
# ===== 0 Derivatives (Menon) =====
v=V[0]
sp=[0.0150,0.0180,0.0210]; DF=[round(1/(1+s)**(i+1),6) for i,s in enumerate(sp)]
Sm=sum(DF); swap=(1-DF[2])/Sm
fx=0.0275; N=40_000_000; eq=round((1-DF[1])/(DF[0]+DF[1]),4)
S2=DF[0]+DF[1]; val=(fx-eq)*S2*N
body_sub(v,[('0.990099',f"{DF[0]:.6f}"),('0.977876',f"{DF[1]:.6f}"),('0.965136',f"{DF[2]:.6f}"),('$50,000,000','$40,000,000'),('Fixed swap rate (since initiation) | 3.00%','Fixed swap rate (since initiation) | 2.75%'),('two-year fixed swap rate is 1.12%',f"two-year fixed swap rate is {eq*100:.2f}%"),
 ('90 | 0.05%','90 | 0.08%'),('180 | 0.10%','180 | 0.14%'),('270 | 0.15%','270 | 0.20%'),('360 | 0.25%','360 | 0.30%'),
 ('30-day MRR | 0.75%','30-day MRR | 0.78%'),('60-day MRR | 0.82%','60-day MRR | 0.85%'),('90-day MRR | 0.90%','90-day MRR | 0.92%'),('120-day MRR | 0.92%','120-day MRR | 0.95%'),('150-day MRR | 0.94%','150-day MRR | 0.98%'),('180-day MRR | 0.95%','180-day MRR | 1.00%'),('210-day MRR | 0.97%','210-day MRR | 1.02%'),('270-day MRR | 1.00%','270-day MRR | 1.06%')])
walk(v,[('Sonal Johnson','Priya Menon'),('Johnson','Menon')])
s3=(1/DF[2])**(1/3)-1
Ax=(1-DF[2])/(DF[0]+DF[1]); Bx=1-DF[2]
newq(v,0,v['questions'][0]['q'],put(f"{swap*100:.2f}%.",[f"{Ax*100:.2f}%.",f"{Bx*100:.2f}%."],0),0,
 [f"Fixed swap rate = (1 − final-year PV factor) ÷ (sum of the PV factors) = (1 − {DF[2]:.6f}) ÷ ({DF[0]:.6f} + {DF[1]:.6f} + {DF[2]:.6f}) = {1-DF[2]:.6f} ÷ {Sm:.6f} = {swap*100:.2f}%.",f"It leaves the final-year PV factor out of the denominator: {1-DF[2]:.6f} ÷ ({DF[0]:.6f} + {DF[1]:.6f}) = {Ax*100:.2f}%.",f"It does not divide by the sum of the PV factors: 1 − {DF[2]:.6f} = {Bx*100:.2f}%."],
 ["three-year MRR-based interest rate swap with annual resets"],"Fixed swap rate = (1 − last PV factor) ÷ sum of the PV factors.")
# order: A,B wrong, C correct -> reorder so wrong options ascending
o=v['questions'][0]; 
Ai=(1-DF[2])/3; 
A=-(fx-eq)*2*N; C=-(fx-eq)*(Sm)*N; B=-val
opts=[f"${abs(round(val)):,.0f}.",f"–${abs(round(val)):,.0f}.",f"–${abs(round(C)):,.0f}."]
newq(v,1,v['questions'][1]['q'],opts,1,
 [f"The size is right but the sign is wrong: ${abs(round(val)):,.0f} would be the value to the receive-fixed party.",f"Two years remain, so the sum of the PV factors is {DF[0]:.6f} + {DF[1]:.6f} = {S2:.6f}. For the receive-fixed party the value is ({fx*100:.2f}% − {eq*100:.2f}%) × {S2:.6f} × $40,000,000 = ${abs(round(val)):,.0f}. The bank pays fixed, and the fixed rate it pays is above today's equilibrium rate, so its value is −${abs(round(val)):,.0f}.",f"It uses all three PV factors (sum {Sm:.6f}), but only two years remain: ${abs(round(C)):,.0f}."],
 ["entered into one year ago as the pay-fixed (receive-floating) party",f"current equilibrium two-year fixed swap rate is {eq*100:.2f}%"],"Swap value = (old fixed rate − current fixed rate) × sum of the remaining PV factors × notional; the pay-fixed party loses when the old rate is above the current rate.")
# fix ordering of options ascending in magnitude: A smaller? keep as built
yr=[0.0008,0.0014,0.0020,0.0030]; days=[90,180,270,360]
pv=[1/(1+r*d/360) for r,d in zip(yr,days)]; per=(1-pv[3])/sum(pv); ann=per*4
newq(v,2,v['questions'][2]['q'],[f"{per*100:.4f}%.",f"{sum(yr)/4*100:.4f}%.",f"{ann*100:.4f}%."],2,
 [f"{per*100:.4f}% is the quarterly (periodic) rate, not the annualized rate.",f"{sum(yr)/4*100:.4f}% is just the average of the yen spot rates, not a swap rate.",f"Yen PV factors = 1 ÷ [1 + rate × (days ÷ 360)]: {pv[0]:.6f}, {pv[1]:.6f}, {pv[2]:.6f}, {pv[3]:.6f} (sum {sum(pv):.6f}). Periodic rate = (1 − {pv[3]:.6f}) ÷ {sum(pv):.6f} = {per*100:.4f}%. Annualized = {per*100:.4f}% × (360 ÷ 90) = {ann*100:.4f}%."],
 ["one-year fixed-for-fixed currency swap involving yen and US dollars","with a quarterly reset"],"Currency swap fixed rate for one currency: PV factors from that currency's spot rates, periodic rate = (1 − last PV) ÷ sum of PV, then multiply by 4 for quarterly resets.")
L60,L150=0.0085,0.0098
r=((1+L150*150/360)/(1+L60*60/360)-1)
fra=r/(90/360); fA=r/(150/360); fC=r/(60/360)
newq(v,3,v['questions'][3]['q'],[f"{fA*100:.2f}%.",f"{fra*100:.2f}%.",f"{fC*100:.2f}%."],1,
 [f"It divides by 150/360 instead of the 90-day FRA period: {fA*100:.2f}%.",f"FRA rate = {{[1 + L150 × (150/360)] ÷ [1 + L60 × (60/360)] − 1}} ÷ (90/360) = {{{1+L150*150/360:.6f} ÷ {1+L60*60/360:.6f} − 1}} × 4 = {fra*100:.2f}%, using the 60-day MRR of 0.85% and the 150-day MRR of 0.98%.",f"It divides by 60/360 instead of the 90-day FRA period: {fC*100:.2f}%."],
 ["a new position in a 2 × 5 FRA"],"2 × 5 FRA: use the 60-day and 150-day rates: [(1 + L150 × 150/360) ÷ (1 + L60 × 60/360) − 1] ÷ (90/360).")
print('DERIV',swap,val,ann,fra)
# ===== 1 Takahashi (Ishikawa) =====
v=V[1]
body_sub(v,[('38,467','41,208'),('62,939','58,420'),('49,241','52,130'),('23,960','21,874')])
walk(v,[('Aiko Takahashi','Mariko Ishikawa'),('Takahashi','Ishikawa'),('Haruto Suzuki','Kenji Mori'),('Suzuki','Mori'),('Yatabe Holdings','Kitano Holdings')],[(r'\bYH\b','KH')])
lr=41208/58420; er=21874/52130; cr=lr+er; lrw=41208/52130
newq(v,2,"Based on Exhibit 1, KH's combined ratio is closest to:",[f"{lr*100:.1f}%.",f"{cr*100:.1f}%.",f"{(lrw+er)*100:.1f}%."],1,
 [f"{lr*100:.1f}% is only the loss ratio (41,208 ÷ 58,420).",f"Combined ratio = loss ratio + underwriting expense ratio = 41,208 ÷ 58,420 + 21,874 ÷ 52,130 = {lr*100:.1f}% + {er*100:.1f}% = {cr*100:.1f}% (loss expense is divided by net premiums earned, underwriting expense by net premiums written).",f"{(lrw+er)*100:.1f}% uses net premiums written for the loss ratio too ({lrw*100:.1f}% + {er*100:.1f}%)."],
 ["calculate KH’s combined ratio"],"Combined ratio = loss & LAE ÷ net premiums earned + underwriting expense ÷ net premiums written.")
print('FSA',cr)
# ===== 2 Albertson (Ashworth) =====
v=V[2]
body_sub(v,[('$3.19 | $2.21 | $0.37 | $2.56','$2.84 | $1.96 | $0.52 | $2.31'),('$10.90 | $12.50 | $12.60 | $13.30','$11.40 | $12.20 | $12.90 | $13.60'),('from $27.95 to $31.05','from $24.60 to $28.35'),('$1.24 per share','$1.10 per share'),('550.40 to 602.21','488.30 to 521.90'),('3.4%','3.1%')])
walk(v,[('David Albertson','Daniel Ashworth'),('Albertson','Ashworth'),('Xita','Zorin'),('Garc','Harlan')])
E=[2.84,1.96,0.52,2.31]; B=[11.40,12.20,12.90,13.60]; roe=[e/b for e,b in zip(E,B)]; ar=sum(roe)/4; ne=ar*B[3]; avgE=sum(E)/4; ne2=ar*sum(B)/4
newq(v,1,v['questions'][1]['q'].replace('Xita','Zorin'),[f"${avgE:.2f}.",f"${ne2:.2f}.",f"${ne:.2f}."],2,
 [f"${avgE:.2f} is the average EPS of Years 1 to 4.",f"${ne2:.2f} multiplies the average ROE ({ar*100:.1f}%) by the AVERAGE book value per share (${sum(B)/4:.3f}) instead of the current one.",f"ROE by year: {roe[0]*100:.1f}%, {roe[1]*100:.1f}%, {roe[2]*100:.1f}% and {roe[3]*100:.1f}%, average {ar*100:.1f}%. Normalized EPS = average ROE × current (Year 4) book value per share = {ar:.4f} × $13.60 = ${ne:.2f}."],
 ["average ROE method","Year 1 through Year 4 (the most recent year) constitutes a full business cycle"],"Normalized EPS = average ROE of a full cycle × CURRENT book value per share.")
g0,g1,i0,i1=24.60,28.35,488.30,521.90; rs=(g1/i1)/(g0/i0); idx_tr=i1/i0+0.031; Bq=(g1/g0)/idx_tr; Cq=((g1+1.10)/g0)/idx_tr
newq(v,3,v['questions'][3]['q'].replace('Garc','Harlan'),[f"{rs:.4f}.",f"{Bq:.4f}.",f"{Cq:.4f}."],0,
 [f"Relative strength = (Harlan price ÷ index) at the end divided by the same ratio at the start = ({g1} ÷ {i1}) ÷ ({g0} ÷ {i0}) = {g1/i1:.6f} ÷ {g0/i0:.6f} = {rs:.4f}. Dividends are not included.",f"{Bq:.4f} compares Harlan's price return with the index's total return (price change plus the 3.1% yield); relative strength uses prices only.",f"{Cq:.4f} compares total returns (adds Harlan's $1.10 dividend and the index yield); relative strength uses prices only."],
 ["relative strength"],"Relative strength = (stock ÷ index) now ÷ (stock ÷ index) at the start; price only, no dividends.")
print('EQ',ne,rs,Bq,Cq)
# ===== 3 Yee (Voss) =====
v=V[3]
body_sub(v,[('Revenues | $6,456','Revenues | $6,102'),('| 1,349','| 1,262'),('Depreciation expense | 243','Depreciation expense | 231'),('Operating income | 1,106','Operating income | 1,031'),('Interest expense | 186','Interest expense | 172'),('Pretax income | 920','Pretax income | 859'),('Income tax (32%) | 294','Income tax (32%) | 275'),('Net income | $626','Net income | $584'),('(millions) | 411','(millions) | 395'),('earnings per share | $1.52','earnings per share | $1.48'),('dividends paid (millions) | 148','dividends paid (millions) | 142'),('capital investment (millions) | 535','capital investment (millions) | 502'),('Cost of equity | 12.0%','Cost of equity | 11.5%'),('(WACC) | 9.0%','(WACC) | 8.5%'),
 ('Cash and cash equivalents | $32 | $21','Cash and cash equivalents | $28 | $19'),('Accounts receivable | 413 | 417','Accounts receivable | 398 | 404'),('Inventories | 709 | 638','Inventories | 655 | 601'),('Other current assets | 136 | 123','Other current assets | 129 | 117'),('Total current assets | $1,290 | $1,199','Total current assets | $1,210 | $1,141'),('Current liabilities | $2,783 | $2,678','Current liabilities | $2,640 | $2,545'),('Long-term debt | 2,249 | 2,449','Long-term debt | 2,105 | 2,305'),("equity | 1,072 | 594","equity | 1,008 | 566"),('Total liabilities and stockholders\' equity | $6,104 | $5,721','Total liabilities and stockholders\' equity | $5,753 | $5,416'),
 ('2013 FCFF will be $600 million.','2013 FCFF will be $520 million.'),('grow in perpetuity at 4% annually','grow in perpetuity at 3.5% annually'),('2013 earnings per share (EPS) will be $1.80.','2013 earnings per share (EPS) will be $1.65.'),('EPS will grow forever at 6% annually','EPS will grow forever at 5% annually'),('will be 30% of EPS','will be 35% of EPS'),('will be 10% of EPS','will be 15% of EPS'),('60% will be financed with equity and 40% will be financed with debt','65% will be financed with equity and 35% will be financed with debt')])
walk(v,[('Chan Mei Yee','Lena Voss'),('Yee','Voss'),('McLaughlin','Hartwell'),('Melissa Nicosia','Greta Lindqvist'),('Nicosia','Lindqvist')])
fc=584+231+172*0.68-502+35; fcA=584+231+172*0.32-502+35; fcB=584+231+172*0.68-502
newq(v,0,v['questions'][0]['q'].replace('McLaughlin','Hartwell'),[f"${fcA:.0f}.",f"${fcB:.0f}.",f"${fc:.0f}."],2,
 [f"It uses the tax rate instead of (1 − tax rate) on interest.","It ignores the working capital investment.",f"Working capital (current assets excluding cash − current liabilities) went from −1,423 to −1,458, so WCInv = −35 (an inflow). FCFF = 584 + 231 + 172 × (1 − 0.32) − 502 − (−35) = {fc:.0f}."],
 ["free cash flow to the firm (FCFF)"],"FCFF = NI + NCC + Int(1 − t) − FCInv − WCInv; working capital excludes cash.")
firm=520/(0.085-0.035); eqv=firm-2105; ps=eqv/395; psA=(520/(0.115-0.035)-2105)/395; psC=firm/395
newq(v,1,v['questions'][1]['q'].replace('McLaughlin','Hartwell'),[f"${psA:.2f}.",f"${ps:.2f}.",f"${psC:.2f}."],1,
 ["It discounts at the cost of equity instead of the WACC.",f"Firm value = 520 ÷ (0.085 − 0.035) = {firm:,.0f}. Equity = {firm:,.0f} − 2,105 (debt) = {eqv:,.0f}. Per share = {eqv:,.0f} ÷ 395 = ${ps:.2f}.","It does not deduct the debt."],
 ["2013 FCFF will be $520 million","FCFF will grow in perpetuity at 3.5% annually"],"FCFF value = FCFF1 ÷ (WACC − g); subtract debt for equity, divide by shares.")
fe=1.65-0.65*0.35*1.65-0.65*0.15*1.65; fv=fe/(0.115-0.05); fA3=(1.65-0.35*1.65-0.15*1.65)/0.065; fC3=fv*1.05
newq(v,2,v['questions'][2]['q'].replace('McLaughlin','Hartwell'),[f"${fA3:.2f}.",f"${fv:.2f}.",f"${fC3:.2f}."],1,
 [f"It is the FCFF-style calculation: 1.65 − 0.5775 − 0.2475 = {1.65-0.5775-0.2475:.3f} ÷ 0.065.",f"FCFE1 = EPS − (1 − DR) × net capex − (1 − DR) × WCInv = 1.65 − 0.65 × 0.5775 − 0.65 × 0.2475 = {fe:.5f}. Value = {fe:.5f} ÷ (0.115 − 0.05) = ${fv:.2f}.","It grows FCFE1 again by (1 + g)."],
 ["EPS will grow forever at 5% annually","Of future investments, 65% will be financed with equity and 35% will be financed with debt"],"FCFE = EPS − (1 − DR)(net capex + WCInv); value = FCFE1 ÷ (r − g).")
print('YEE',fc,ps,fv)
# ===== 4 Jupiter/Saturn (Mercury/Neptune) =====
v=V[4]
body_sub(v,[('2,800 physical','3,100 physical'),('associated with 100 physical','associated with 120 physical'),('sell its 100 owned','sell its 120 owned'),('15-year terms','20-year terms'),('USD44 million','USD54 million'),('USD800 million','USD1,000 million'),('USD600 million of debt','USD700 million of debt'),('repurchase 4 million','repurchase 5 million'),('value the 100 assets','value the 120 assets'),('5.00%, 5.50%, and 6.00%','4.90%, 5.40%, and 5.90%'),('5.50%','5.40%'),
 ('Upstream | 14,400','Upstream | 12,600'),('Midstream | 5,760','Midstream | 4,200'),('Downstream | 3,840','Downstream | 2,800'),('Consolidated | 24,000','Consolidated | 19,600'),('USD408,000 million, or an EV/EBITDA multiple of 17','USD313,600 million, or an EV/EBITDA multiple of 16'),('multiples of 19, 17, and 13','multiples of 18, 15, and 12')])
walk(v,[('Jane Chang','Helen Marsh'),('Chang','Marsh'),('Alpha Fund','Beacon Fund'),('Jupiter','Mercury'),('Saturn','Neptune'),('USD600 million of debt','USD700 million of debt'),('average capitalization rate of 5.50%','average capitalization rate of 5.40%'),('5.00%, 5.50%, and 6.00%','4.90%, 5.40%, and 5.90%'),('5.00%, 5.50%, 6.00%','4.90%, 5.40%, 5.90%'),('5.50%','5.40%'),('5.00% ','4.90% ')])
sop=12600*18+4200*15+2800*12
newq(v,2,v['questions'][2]['q'].replace('Saturn','Neptune'),[f"USD{19600*15:,} million.","USD313,600 million.",f"USD{sop:,} million."],2,
 ["It uses the average of the peer multiples (15) for every segment.","USD313,600 million is Neptune's current enterprise value, not the estimate.",f"Sum of the parts: Upstream 12,600 × 18 = {12600*18:,}; Midstream 4,200 × 15 = {4200*15:,}; Downstream 2,800 × 12 = {2800*12:,}; total {sop:,}."],
 ["multiples of 18, 15, and 12"],"Sum of the parts: each segment's EBITDA × its own peer median multiple.")
print('CORP',sop)
# ===== 5 Brown (Fischer) =====
v=V[5]
s=[0.025,0.034,0.043]; f1=(1+s[1])**2/(1+s[0])-1; f2=(1+s[2])**3/(1+s[1])**2-1
body_sub(v,[('3.00% | 4.00% | 5.00%',f"{s[0]*100:.2f}% | {s[1]*100:.2f}% | {s[2]*100:.2f}%"),('f0,1 = 3.00% | f1,1 = 5.01% | f2,1 = 7.03%',f"f0,1 = {s[0]*100:.2f}% | f1,1 = {f1*100:.2f}% | f2,1 = {f2*100:.2f}%"),('4 bps | 6 bps | 9 bps','7 bps | 9 bps | 12 bps')])
walk(v,[('Tony Brown','Leon Fischer'),('Brown','Fischer'),('Institutional Investments','Summit Asset Partners')])
newq(v,2,v['questions'][2]['q'],["5 bps.","14 bps.","19 bps."],1,
 ["It subtracts the T-bill rate from the MRR–OIS spread (12 − 7).","3-month MRR = OIS + (MRR − OIS spread) = 9 + 12 = 21 bps. TED spread = MRR − T-bill rate = 21 − 7 = 14 bps.","It adds the T-bill rate to the MRR–OIS spread (12 + 7)."],
 ["3-month TED spread"],"TED = MRR − T-bill; MRR = OIS + (MRR − OIS spread).")
# ===== 6 Brent (Dunn) =====
v=V[6]
body_sub(v,[('12.6 + 1.6 (Marketing Expenditures) + 1.2 (# of Salespeople)','9.8 + 2.1 (Marketing Expenditures) + 0.9 (# of Salespeople)'),('by $1.6 million','by $2.1 million'),('equal $12.6 million','equal $9.8 million')])
walk(v,[('William Brent','Walter Dunn'),('Brent','Dunn'),('David Johnson','David Larsen'),('Johnson','Larsen'),('Mega Flowers','Green Valley Nurseries'),('$1.6 million','$2.1 million'),('equal $12.6 million','equal $9.8 million'),('12.6 is the intercept','9.8 is the intercept'),('coefficient of 1.6','coefficient of 2.1')])
pr=9.8+2.1*2.8+0.9*6
newq(v,2,"Assuming that next year's marketing expenditures are $2,800,000 and there are six salespeople, predicted sales for Green Valley Nurseries should be:",[f"${(9.8+2.1*2.8+0)*1e6:,.0f}.".replace(f"{(9.8+2.1*2.8)*1e6:,.0f}","15,680,000"),"$11,280,000.",f"${pr*1e6:,.0f}."],2,
 ["It leaves out the salespeople term: 9.8 + 2.1 × 2.8 = 15.68, i.e. $15,680,000.","It leaves out the intercept: 2.1 × 2.8 + 0.9 × 6 = 11.28, i.e. $11,280,000.",f"The equation is in millions of dollars: 9.8 + 2.1 × 2.8 + 0.9 × 6 = {pr:.2f}, i.e. ${pr*1e6:,.0f}."],
 ["stated in millions of dollars"],"Plug the values into the equation and keep the units (millions).")
v['questions'][2]['options']=["$11,280,000.","$15,680,000.",f"${pr*1e6:,.0f}."]; 
v['questions'][2]['why']=f"A. Incorrect. It leaves out the intercept: 2.1 × 2.8 + 0.9 × 6 = 11.28, i.e. $11,280,000.\nB. Incorrect. It leaves out the salespeople term: 9.8 + 2.1 × 2.8 = 15.68, i.e. $15,680,000.\nC. Correct. The equation is in millions of dollars: 9.8 + 2.1 × 2.8 + 0.9 × 6 = {pr:.2f}, i.e. ${pr*1e6:,.0f}."
# ===== 7 Citadel (Sterling) =====
v=V[7]
body_sub(v,[('Portfolio value | $500 million','Portfolio value | $800 million'),('Daily expected return | 0.04%','Daily expected return | 0.05%'),('Daily expected volatility | 1.30%','Daily expected volatility | 1.10%'),('$500 million multi-asset fund','$600 million multi-asset fund'),('VaR limit of $10 million and a cumulative 30-day loss limit of $15 million','VaR limit of $12 million and a cumulative 30-day loss limit of $18 million')])
walk(v,[('Citadel Investment Partners','Sterling Investment Partners'),('Citadel','Sterling'),('Simon Alexander','Victor Almeida'),('Alexander','Almeida'),('Jennifer Woolridge','Joanna Whitfield'),('Woolridge','Whitfield'),('Sandra Patterson','Sandra Hollis'),('Patterson','Hollis'),('VaR limit of $10 million','VaR limit of $12 million'),('$10 million on $500 million is 2%, and $15 million is 3%','$12 million on $600 million is 2%, and $18 million is 3%')])
var=(1.65*0.011-0.0005)*800; varA=800*0.011; varC=(2.33*0.011-0.0005)*800
newq(v,1,v['questions'][1]['q'],[f"${varA:.1f} million.",f"${var:.1f} million.",f"${varC:.1f} million."],1,
 [f"It multiplies the portfolio value by the daily volatility only ($800 million × 1.1%).",f"Parametric 5% VaR: 1.65 × 1.10% = 1.815%; subtract the expected return of 0.05%: 1.765%; × $800 million = about ${var:.1f} million.",f"It uses the 1% z-score (2.33) instead of the 5% z-score (1.65): (2.33 × 1.10% − 0.05%) × $800 million = ${varC:.1f} million."],
 ["parametric method (assuming normal distribution)"],"Parametric VaR = (z × volatility − expected return) × portfolio value; 5% → z = 1.65.")
print('PM',var,varC)
# ===== 8 Lin (Kwon) =====
v=V[8]
body_sub(v,[('$350,000 | $267,000','$420,000 | $295,000'),('$316,965 | $290,612','$388,420 | $301,880'),('$308,700 | $230,850','$275,300 | $214,300'),('$205,800 | $282,150','$188,600 | $301,700'),('$2,014,000 | $2,013,500','$2,386,000 | $2,097,000'),('$25,991 | $24,702','$31,204 | $27,015'),('$63,769 | $60,852','$72,415 | $58,430'),('56,100 | 67,900','63,800 | 71,200'),('Assumed cap rate | 7.0%','Assumed cap rate | 6.5%'),('multiple | 18.3×','multiple | 16.8×')])
walk(v,[('Hui Lin','Daniel Kwon'),('Lin','Kwon'),('Maria Nowak','Elena Varga'),('Nowak','Varga')])
cs=420000/0.065; nav=cs+275300+188600-2386000; navps=nav/63800; navA=(cs-2386000)/63800; navC=(cs+275300+188600)/63800
newq(v,1,v['questions'][1]['q'],[f"${navA:.2f}.",f"${navps:.2f}.",f"${navC:.2f}."],1,
 [f"It leaves out cash and receivables: ({cs:,.0f} − 2,386,000) ÷ 63,800 = ${navA:.2f}.",f"NAV: operating real estate = 420,000 ÷ 0.065 = {cs:,.0f}; plus cash and receivables 463,900; less debt and other liabilities 2,386,000 = {nav:,.0f}; ÷ 63,800 shares = ${navps:.2f}.",f"It does not deduct the debt and other liabilities: ({cs:,.0f} + 463,900) ÷ 63,800 = ${navC:.2f}."],
 ["Net asset value","Assumed cap rate"],"NAV per share = (cash NOI ÷ cap rate + cash + receivables − liabilities) ÷ shares.")
aff=388420-31204-72415; ap=aff/63800; val1=ap*16.8; v1A=(388420-31204)/63800*16.8; v1C=388420/63800*16.8
newq(v,2,v['questions'][2]['q'],[f"${val1:.2f}.",f"${v1A:.2f}.",f"${v1C:.2f}."],0,
 [f"AFFO = FFO − non-cash rents − recurring maintenance-type capex = 388,420 − 31,204 − 72,415 = {aff:,}. AFFO per share = {aff:,} ÷ 63,800 = ${ap:.2f}. Value = ${ap:.2f} × 16.8 = ${val1:.2f}.",f"It forgets to deduct the recurring maintenance-type capex: (388,420 − 31,204) ÷ 63,800 × 16.8 = ${v1A:.2f}.",f"It applies the multiple to FFO per share instead of AFFO per share: 388,420 ÷ 63,800 × 16.8 = ${v1C:.2f}."],
 ["P/AFFO multiple","Non-cash rents"],"AFFO = FFO − non-cash rents − recurring capex; value = AFFO per share × P/AFFO multiple.")
print('ALT',navps,val1)
# ===== 9 Sagara (Marovia) =====
v=V[9]
walk(v,[('Fatima N’Diarra','Aminata Camara'),('N’Diarra','Camara'),("N'Diarra",'Camara'),('Benjamin Banantoumou','Emmanuel Kessogo'),('Banantoumou','Kessogo'),('Sagara','Marovia')])
for vv in V:
    for q in vv['questions']:
        assert len(set(q['options']))==3,q['options']

# ---------------- order, balance, write ----------------
rng=random.Random(9)
while True:
    rng.shuffle(V)
    if all(a['topic']!=b['topic'] for a,b in zip(V,V[1:])): break
PERMS=[p for p in itertools.permutations(range(3)) if p!=(0,1,2)]
def key(extra=None):
    return ''.join('ABC'[q['answer']] for v in V for q in v['questions'])
def maxrun(k):
    m=c=1
    for a,b in zip(k,k[1:]): c=c+1 if a==b else 1; m=max(m,c)
    return m
import copy
free=[(vi,i) for vi,v in enumerate(V) for i,q in enumerate(v['questions']) if not q['_fixed']]
base=[copy.deepcopy(V[vi]['questions'][i]) for vi,i in free]
found=None
for t in range(20000):
    r=random.Random(t)
    ch=[list(r.choice(PERMS)) for _ in free]
    for (vi,i),b0,o in zip(free,base,ch):
        q=copy.deepcopy(b0); perm(q,o); V[vi]['questions'][i]=q
    k=key(); c=collections.Counter(k)
    if maxrun(k)<=3 and min(c.values())>=8 and max(c.values())<=14: found=k; break
if not found:
    k=key(); print(k, collections.Counter(k), len(free)); raise SystemExit('no balanced')
for v in V:
    for q in v['questions']: q.pop('_fixed',None)
MOCK=dict(id="mock9",rev=2,resetHl=[],title="Mock 9",kind="mock",minutes=132,desc="10 new vignettes from sub-topics different from Mock 8, plus 1 Ethics vignette",vignettes=V)
if __name__=='__main__':
    json.dump(MOCK,open('/home/user/jimin/bank/exam/mock9_core.json','w'),ensure_ascii=False,indent=1)
    print(len(found),found,collections.Counter(found)); print([v['topic'] for v in V])
