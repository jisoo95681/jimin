from lib import *
S2B=[]
S2B.append(V('FI',"""Xiao Li is a private wealth manager who focuses on fixed income markets.

He is reviewing the term structure of interest rates for his domestic market. Li observes that lender and borrower preferences strongly influence yield curve shape, especially for longer-term maturities. For example, Li has detected that the curve has a persistent dip at the 10-year maturity, and that investors in 10-year bonds are not willing to shift to 8- or 12-year bonds even when yields in those maturities are relatively high.

Li reviews Exhibit 1, which contains current shorter-term government bond spot rates.

Exhibit 1
# Maturity | Spot Rate
1-year | 2.02%
2-year | 2.20%
3-year | 2.38%
4-year | 2.52%
5-year | 2.64%

Using the spot curve, Li computes forward rates. He then forecasts that in three years the 2-year spot rate will equal 2.20%, the current 2-year spot rate, but that the remainder of the spot rate curve will be consistent with current forward rates. Li evaluates what his forecast implies about the valuation of a 5-year zero-coupon bond today.

Li is assisting Client A to select an appropriate investment strategy, who has a 2-year investment horizon. The client expects the yield curve to remain unchanged over the 2-year horizon. Li recommends implementing a ride the yield curve strategy using government bonds for Client A.

Li studies the characteristics and effects of yield curve volatility. He uses the 3.25% monthly standard deviation of the 15-year government-bond yield to estimate an annual yield volatility of 11.26%. Li also calculates key rate durations for various maturities. He concludes that the higher key rate durations associated with longer-term rates leads to higher long-term annualized term structure volatility.""",[
Q("Li's observations about the shape of the yield curve are most consistent with the:",["preferred habitat theory.","liquidity preference theory.","segmented markets theory."],'C',[
"Incorrect: under preferred habitat, investors migrate to other maturities if yields are attractive enough.",
"Incorrect: liquidity preference says forward rates are biased by a liquidity premium that rises with maturity, which is inconsistent with borrower and lender preferences shaping the curve.",
"Segmented markets: investors stay in specific maturity ranges and will not move even when yields elsewhere are more attractive."]),
Q("Given his forecast, Li should consider a 5-year zero-coupon bond today to be:",["undervalued.","fairly valued.","overvalued."],'A',[
"The forecasted future 2-year spot rate (2.20%) is below the implied forward rate for those last two years, so the bond's cash flows are currently discounted at too high a rate: the bond is undervalued.",
"Incorrect: a bond is fairly valued only if future spot rates equal today's implied forward rates.",
"Incorrect: it would be overvalued only if future spot rates exceed the implied forward rates."]),
Q("To implement the strategy for Client A, Li should buy a:",["1-year government bond.","2-year government bond.","3-year government bond."],'C',[
"Incorrect: riding the yield curve means buying a maturity longer than the horizon (2 years).",
"Incorrect: a 2-year bond matches the horizon and does not ride the curve.",
"With an upward-sloping curve expected to stay unchanged, buy a bond with a maturity longer than the 2-year horizon (3 years) and sell it at the horizon: it rolls down the curve and earns extra return."]),
Q("Are Li's calculation and conclusion related to key rate duration and term structure volatility correct?",["Yes","No, only his annualized volatility estimate is correct","No, only his conclusion related to key rate duration and term structure volatility is correct"],'B',[
"Incorrect: the annualized volatility estimate is right but the key rate duration statement is wrong.",
"Annual volatility = 3.25% × √12 = 11.26% is correct. Key rate duration measures price sensitivity to a yield change at one maturity, not how volatile rates are; the volatility term structure typically shows short-term rates more volatile than long-term rates.",
"Incorrect: the key rate duration conclusion is the incorrect part."])]))
S2B.append(V('FSA',"""Carol McAndrew, an equity analyst, specializes in evaluating manufacturing companies. McAndrew is currently evaluating Acme Industries, a large, diversified manufacturing company that reports under IFRS.

During a recent conference call, Acme management disclosed its intent to raise EUR 40 million to fund new investments by borrowing against Acme's EUR 50 million of receivables. Management indicated that it is evaluating two different options to accomplish this objective:
Option 1: Borrow directly against the receivables of EUR 50 million;
Option 2: Create a special purpose entity (SPE), invest EUR 10 million in the SPE, have the SPE borrow EUR 40 million, and then use the funds to purchase EUR 50 million of receivables from Acme.

McAndrew considers the potential impact of these options on Acme's consolidated debt-to-assets ratio, assuming that Acme will be able to influence the financial and operating policy of the SPE, and will be expected to absorb any losses that the SPE may incur.

Next, McAndrew examines whether there are any accounting warning signs related to the overstatement of Acme's net income. After reviewing Acme's financial reports and industry data for the most recent year, McAndrew makes the following observations:
Observation 1: Receivables growth is lower than revenue growth.
Observation 2: Management compensation is largely tied to financial results.
Observation 3: Depreciable lives of Acme's fixed assets are shorter than those of industry peers.

McAndrew also reviews Acme's Beneish M-scores and Altman Z-scores for the past three years and notes that both scores have steadily declined during this time.

Finally, after making any necessary adjustments, McAndrew uses the following data (in EUR millions) to compute Acme's cash-flow-based accruals ratio for the most recent year:
Net income: 7,050
Operating cash flow: 9,826
Investing cash flow: –8,410
Financing cash flow: 5,390
Average net operating assets: 45,894""",[
Q("Acme's consolidated debt-to-assets ratio would most likely be:",["lower under Option 1 compared to Option 2.","the same under either Option 1 or Option 2.","higher under Option 1 compared to Option 2."],'B',[
"Incorrect: Acme controls the SPE (influence over policies and exposure to variable returns), so it consolidates it and the balance sheet looks the same as borrowing directly.",
"Under IFRS 10 / SIC-12, control (influence over financial and operating policy and exposure to variable returns) requires consolidation, so the consolidated ratio is the same under both options.",
"Incorrect: consolidation makes the two options identical on the balance sheet."]),
Q("Which observation is most likely a potential accounting warning sign related to the overstatement of net income?",["Observation 1","Observation 2","Observation 3"],'B',[
"Incorrect: a warning sign is receivables growing faster than revenue (accelerated revenue recognition), not slower.",
"Management compensation largely tied to financial results is an incentive for overstating net income: a warning sign.",
"Incorrect: depreciable lives that are longer (not shorter) than peers would be the warning sign."]),
Q("The trend in Beneish M-scores and Altman Z-scores most likely indicates that:",["the likelihood of misreporting and the likelihood of bankruptcy have both increased.","the likelihood of misreporting has increased, but the likelihood of bankruptcy has decreased.","the likelihood of misreporting has decreased, but the likelihood of bankruptcy has increased."],'C',[
"Incorrect: a falling M-score means less likely manipulation, so misreporting has not increased.",
"Incorrect: a falling Z-score means higher bankruptcy risk, so bankruptcy likelihood has not decreased.",
"A higher M-score (less negative) means more likely manipulation, so a decline means lower misreporting likelihood; a lower Z-score means higher likelihood of bankruptcy."]),
Q("Acme's cash-flow-based accruals ratio for the most recent year is closest to:",["12.3%.","14.8%.","18.4%."],'A',[
"Ratio = [NI − (CFO + CFI)]/average NOA = [7,050 − (9,826 − 8,410)]/45,894 = 12.3%.",
"Incorrect: this leaves out net income and nets all cash flows ([9,826 − 8,410 + 5,390]/45,894).",
"Incorrect: this adds the net cash flow instead of subtracting it ([7,050 + 1,416]/45,894)."])]))
S2B.append(V('Equity',"""Ulu Bala, an analyst for ValEwe Consulting, has been hired to provide valuations for several firm clients.

Firm A is a rapidly growing automotive parts distributor that has asked Bala to provide an estimated fair value of its common stock. Bala selects the appropriate valuation model based on the following information about Firm A:
The firm's dividend payout ratio has been stable over the last 10 years and is expected to remain stable, regardless of future profitability.
Planned expansion into new markets will require significant annual capital expenditures, which will result in dividends exceeding free cash flow to equity.
Compared with peers, the firm has an aggressive policy with respect to reported earnings, as well as a lower quality of accounting disclosure.

Firm B is a regional utilities provider. Firm B's current stock price is $19.00 and Bala uses the dividend discount model to value the stock. In Exhibit 1, Bala forecasts Firm B's earnings for the next three years. He assumes a required return on equity of 8% and a 60% retention ratio. By the end of Year 3, Bala expects Firm B's stock price to be $21.50. ValEwe's approach is to consider a stock to be fairly valued if its price is within 2% of its estimated fair value.

Exhibit 1
# | Year 1 | Year 2 | Year 3
Forecasted EPS | $1.27 | $1.62 | $1.91

Firm C is a power generation company. Bala forecasts that Firm C's earnings will grow by 8% per year and the cost of equity will remain at 11% for the foreseeable future. Using the DuPont model and the information in Exhibit 2, Bala estimates Firm C's sustainable growth rate.

Exhibit 2
Last year's EPS | $3.20
Dividend payout ratio | 45.0%
Net profit margin | 11.5%
Total assets/equity | 2.25
Total asset turnover | 0.65

Bala then values Firm C's stock using the Gordon growth model. He evaluates the sensitivity of the stock price from the model under a scenario where both the forecasted cost of equity and the earnings growth rate increase by 50 bps.""",[
Q("Which of the following valuation models is most appropriate for Firm A?",["Free cash flow model","Residual income model","Dividend discount model"],'A',[
"Dividends will exceed FCFE because of the expansion capex, which is when a free cash flow model is most suitable.",
"Incorrect: residual income relies on good-quality accounting, but Firm A's disclosure quality is lower and earnings aggressive.",
"Incorrect: the DDM suits stable dividend policies tied to profitability; the stable payout ratio history is not relevant going forward."]),
Q("Based on the dividend discount model, Bala should consider Firm B's common stock to be:",["undervalued.","fairly valued.","overvalued."],'B',[
"Incorrect: the $19.00 price is only 1.6% above the $18.70 fair value, within the 2% band.",
"Payout = 40%: D1 = 0.51, D2 = 0.65, D3 = 0.76. V0 = 0.51/1.08 + 0.65/1.08² + 0.76/1.08³ + 21.50/1.08³ = $18.70. The price of $19.00 is 1.6% above, within 2%, so fairly valued.",
"Incorrect: the price is within the 2% band, so the stock is fairly valued."]),
Q("Based on the DuPont model, the sustainable growth rate for Firm C is closest to:",["5.14%.","7.57%.","9.25%."],'C',[
"Incorrect: this uses debt/equity (1.25) instead of total assets/equity.",
"Incorrect: this uses the payout ratio (45%) instead of the retention ratio.",
"g = (1 − payout) × net profit margin × asset turnover × leverage = 0.55 × 11.5% × 0.65 × 2.25 = 9.25%."]),
Q("Under Bala's sensitivity scenario, Firm C's estimated share price is expected to:",["decrease.","stay the same.","increase."],'C',[
"Incorrect: the spread r − g is unchanged but next year's dividend D0 × (1 + g) rises.",
"Incorrect: the numerator increases, so the value is not unchanged.",
"V0 = D0 × (1 + g)/(r − g): both r and g rise by 50 bps so the denominator is unchanged while the numerator (1 + g) increases, raising the price."])]))
S2B.append(V('FI',"""Cathryn Kehoe is the senior credit analyst for the State Teachers' Pension Fund. She is conducting credit analysis of an ABS held in the fund's portfolio. The ABS is backed by a large number of short-term credit card receivables that are homogeneous. Each receivable is small relative to the total value of the pool.

Kehoe proposes purchasing a 3-year corporate bond issued by Valisker, Inc. The YTM on the Valisker bond is 2.60%. The bond has a credit rating of AA and a modified duration of 2.82. The relevant portion of a 1-year corporate transition matrix, along with corresponding credit spreads, is presented in Exhibit 1. In the matrix, for example, the probability of an AAA-rated bond becoming an A-rated bond at the end of the year is 1.2%.

Exhibit 1
From/To (Entries are in %)
# | AAA | AA | A | BBB | BB
AAA | 90.0 | 8.6 | 1.2 | 0.2 | 0.0
AA | 2.0 | 88.0 | 8.0 | 1.4 | 0.6
A | 0.1 | 1.5 | 87.5 | 7.5 | 1.0
BBB | 0.0 | 0.5 | 4.5 | 85.0 | 7.0
BB | 0.0 | 0.0 | 0.2 | 7.7 | 80.0
Credit spread | 0.65% | 0.95% | 1.20% | 1.80% | 3.60%

The fund owns $5 million of a 7-year senior unsecured bond issued by Gonk Industries. Kehoe recommends the fund buy $5 million of credit protection on Gonk using a 5-year CDS. The CDS has a 5-year senior unsecured bond as its reference obligation. Summary data for the CDS are presented in Exhibit 2.

Exhibit 2
Credit spread | 4.0%
Duration | 4.5 years
Coupon rate | 5.0%

Two months later, a major accounting scandal is uncovered at Gonk and the firm quickly files for bankruptcy. Gonk has three series of bonds outstanding:
3-year subordinated unsecured bonds trading at 20% of par value
5-year senior unsecured bonds trading at 40% of par value
7-year senior unsecured bonds trading at 30% of par value""",[
Q("Based on the characteristics of the receivables backing the ABS, which credit analysis approach is most appropriate?",["Loan-by-loan","Portfolio-based","Statistics-based"],'C',[
"Incorrect: loan-by-loan suits non-granular, heterogeneous portfolios.",
"Incorrect: portfolio-based suits medium-term horizons with a changing portfolio.",
"Short-term structured finance vehicles with granular, homogeneous assets are evaluated with a statistics-based approach (mean default probability, recovery rate and variance of the portfolio)."]),
Q("Based on the 1-year corporate transition matrix, the expected 1-year total return on the Valisker bond is closest to:",["2.48%.","2.56%.","2.65%."],'A',[
"Price change = −modified duration × change in spread, weighted by the AA ROW probabilities: 0.02 × 0.846% + 0.88 × 0 + 0.08 × (−0.705%) + 0.014 × (−2.397%) + 0.006 × (−7.473%) = −0.118%. Return = 2.60% − 0.118% = 2.48%.",
"Incorrect: this leaves out the modified duration (uses only the spread changes).",
"Incorrect: this uses the AA column of the matrix instead of the AA row."]),
Q("The upfront premium the fund would receive for purchasing the CDS protection on Gonk Industries is closest to:",["$200,000.","$225,000.","$250,000."],'B',[
"Incorrect: this multiplies the credit spread by the notional.",
"Upfront premium % ≈ (credit spread − fixed coupon) × duration = (4.0% − 5.0%) × 4.5 = −4.5%; × $5 million = −$225,000. The spread is below the coupon, so the protection seller pays the upfront premium to the buyer.",
"Incorrect: this uses maturity (5 years) instead of duration (4.5)."]),
Q("The cash settlement amount for the fund from the Gonk Industries CDS is closest to:",["$3,000,000.","$3,500,000.","$4,000,000."],'B',[
"Incorrect: the reference (5-year) bond is not the cheapest-to-deliver; the 7-year senior bond is.",
"The payout uses the cheapest-to-deliver deliverable of equal or higher seniority than the reference obligation: the 7-year senior unsecured bond at 30%. LGD = 70%; 70% × $5 million = $3.5 million.",
"Incorrect: the 3-year bond (20% of par) is cheaper but subordinated, so it is not deliverable."])]))
