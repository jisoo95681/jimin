from lib17 import *
# ===== Equity-A (Mock 17, from Mock 9 Q15 and Mock 7 Q38, Q39): metric choice, P/E drivers, weighted harmonic mean =====
cap=[8.20,31.40,480.00,690.50,520.10]; pe=[14.5,10.6,6.2,21.8,16.3]
tot=sum(cap); hm=tot/sum(c/p for c,p in zip(cap,pe)); am=sum(pe)/5; cw=sum(c*p for c,p in zip(cap,pe))/tot
assert (round(hm,1),round(am,1),round(cw,1))==(12.0,13.9,15.6) and round(tot,1)==1730.2
body="""Part 1
Colm Rafferty is an equity analyst at an investment bank. He is preparing updated research reports on two companies, Orlan Incorporated and Dunmore Company.

Dunmore Company
Rafferty next reviews Dunmore, which operates in a previously mature industry that now has high growth potential due to a recent technological innovation. Dunmore's debt-to-equity ratio is significantly higher than the average of its competitors. Dunmore spent heavily on advertising to create and maintain its brand, which is an important asset. The company is favored by many investors because its dividend payout ratio is the highest in its industry. Rafferty considers several potential metrics to use in valuing Dunmore.

Part 2
The Westfield Club is a small US investment club formed by a group of friends who recently graduated from university. At today's regular bimonthly meeting, two members present new companies for the club to analyse. The club uses a combination of comparables and forecasted fundamentals to make its investment decisions.

Using NYSE data, Quinn finds the average P/E for the Household Goods Index (14.8) and for its Packaged Foods sector (29.6). She then screens that sector for other small packaged foods producers to build her own index. Partial results are shown in Exhibit 1.

Exhibit 1: Partial Results of Market Screen: Quinn's Index
# Company | Market cap (US$ millions) | P/E
Alder Inc. | 8.20 | 14.5
Brant Industries Inc. | 31.40 | 10.6
Cobb Brothers Co. | 480.00 | 6.2
Dyer Foods Ltd. | 690.50 | 21.8
Elm Delights Inc. | 520.10 | 16.3

Quinn observes that Dyer Foods must have both a higher-than-average growth rate and lower-than-average risk to justify its high P/E, and suggests the club look at Dyer at its next meeting.

The members discuss the wide range of market capitalisations and P/Es in Quinn's index and whether the arithmetic mean is the best value to use. Quinn decides to calculate the weighted harmonic mean of the index and says:

"The harmonic mean can be used to mitigate the effects of both large and small outliers.\""""
add('M17','Equity Valuation',body,[
 q("Which of the following is the most appropriate metric for Rafferty to use in valuing Dunmore?",["Price to book ratio","Enterprise value to sales ratio","Dividend yield"],1,
  ["Incorrect. Book value ignores Dunmore's brand, an internally generated intangible asset built by advertising that is not on the balance sheet.","Correct. EV/sales uses the total value of debt and equity, so it suits Dunmore's high debt-to-equity ratio; sales are stable and hard to manipulate.","Incorrect. Dividend yield ignores capital gains, which matter with the growth potential, and the highest payout in the industry may not be safe."],
  ["debt-to-equity ratio is significantly higher than the average of its competitors","spent heavily on advertising to create and maintain its brand"],"Metric choice: high leverage / different capital structures → EV multiples; intangible brand not on the balance sheet → avoid P/B; growth → avoid dividend yield.",fixed=False),
 q("Quinn's observation about Dyer Foods' high P/E is best described as:",["correct.","incorrect with respect to the growth rate.","incorrect with respect to the risk."],2,
  ["Incorrect. Higher expected growth does justify a higher P/E, but the risk part is wrong.","Incorrect. She is right on growth: higher expected growth justifies a higher P/E.","Correct. A LOWER-than-average risk (lower required return) would justify a higher P/E; higher risk raises the required return and justifies a lower P/E. She is wrong on the risk."],
  ["higher-than-average growth rate and lower-than-average risk to justify its high P/E"],"P/E ↑ with higher growth and LOWER risk (lower required return); higher risk → lower P/E.",fixed=False),
 q("The weighted harmonic mean of the P/Es in Quinn's index (Exhibit 1) is closest to:",["12.0.","13.9.","15.6."],0,
  ["Weighted harmonic mean = total market cap ÷ Σ(market cap ÷ P/E) = 1,730.2 ÷ 144.53 = 12.0.","This is the simple arithmetic mean of the five P/Es: 13.9.","This is the market-cap weighted arithmetic mean: 15.6."],
  ["@row:Cobb Brothers Co.","@row:Dyer Foods Ltd.","weighted harmonic mean of the index"],"Weighted harmonic mean = Σ weights ÷ Σ(weight ÷ P/E); it is below the arithmetic mean and dampens large P/E outliers.",fixed=True),
])
# ===== Equity-B (Mock 17, from Mock 6 Q25, Q26 and Mock 7 Q12): market value added, RI conclusion, multistage RI =====
sh,px,bv,debt,cap_=40,31.80,24.50,70,880
mva=debt+sh*px-cap_; mvaA=sh*px-cap_; mvaC=(px-bv)*sh
assert (round(mva),round(mvaA),round(mvaC))==(462,392,292)
B0,r=38.40,0.092; eps=[6.55,6.90,7.28]; dps=[1.20,1.28,1.35]
B=[B0]; 
for e,d in zip(eps,dps): B.append(B[-1]+e-d)
ri=[eps[i]-r*B[i] for i in range(3)]
tv=ri[2]/r
V=B0+ri[0]/(1+r)+ri[1]/(1+r)**2+tv/(1+r)**2
Va=B0+ri[0]/(1+r)+ri[1]/(1+r)**2; Vb=B0+ri[0]/(1+r)+ri[1]/(1+r)**2+tv/(1+r)**3
print(round(V,2),round(Va,2),round(Vb,2),[round(x,4) for x in ri])
assert (round(V,2),round(Va,2),round(Vb,2))==(68.53,43.57,66.43)
body="""Part 1
Thandi Mokoena, CFA, a senior equity analyst with Karoo Capital, South Africa, has been assigned a recent graduate, Lerato Sithole, to assist in valuations. Sithole is interested in pursuing a career in equity analysis. In their first meeting, Mokoena and Sithole discuss the concept of residual income and its commercial applications. Mokoena asks Sithole to determine the market value added for a hypothetical South African firm using the data provided in Exhibit 1.

Exhibit 1: Hypothetical Firm Data (amounts in South African rand)
# Item | Value
Current share price | R31.80
Book value per share | R24.50
Total shares outstanding | 40 million
Market value of debt | R70 million
Accounting book value of total capital | R880 million
Intrinsic share value of equity derived from residual income model | R21.60

Mokoena also shares her valuation report of the hypothetical firm with Sithole. Her report concludes that the intrinsic value of the hypothetical firm, based on the residual income model, is R21.60 per share. To assess Sithole's knowledge of residual income valuation, Mokoena asks Sithole a question about the hypothetical firm:

Question 1:
What conclusion can we make about future residual earnings given the current book value per share and my estimate of intrinsic value per share?

Part 2
Elise Brandt is a junior analyst with Corvale Capital, a long-only equity investment manager. She has been asked to value a stock on Corvale's watch list, Tavistock Ltd. (TVK), using a multistage residual income model. Selected data and assumptions for TVK are presented in Exhibit 2.

Exhibit 2: Tavistock Ltd. (TVK) Selected Financial Data and Assumptions
# Item | Value
Book value per share | €38.40
Cost of equity | 9.20%

Brandt forecasts TVK's ROE to be higher than its long-term ROE for the first three years. Forecasted earnings per share and dividends per share for TVK are presented in Exhibit 3. The terminal value is based on an assumption that residual income per share will be constant from Year 3 into perpetuity.

Exhibit 3: Tavistock Ltd. (TVK) Forecasts of Earnings and Dividends
# Item | Year 1 | Year 2 | Year 3
Earnings per share (€) | 6.55 | 6.90 | 7.28
Dividends per share (€) | 1.20 | 1.28 | 1.35"""
add('M17','Equity Valuation',body,[
 q("Based on the information in Exhibit 1, the market value added of the hypothetical firm is closest to:",["R292 million.","R392 million.","R462 million."],2,
  ["This is (price − book value per share) × shares: (31.80 − 24.50) × 40 = R292 million; it is not the market value added.","This leaves out the market value of debt: 40 × 31.80 − 880 = R392 million.","Market value added = market value of the firm − accounting book value of total capital. Market value of the firm = R70 million + 40 million × R31.80 = R1,342 million; MVA = 1,342 − 880 = R462 million."],
  ["@row:Current share price","@row:Market value of debt","@row:Accounting book value of total capital"],"MVA = (market value of debt + market value of equity) − book value of total capital.",fixed=True),
 q("The most appropriate response to Mokoena's Question 1 would be that the present value of future residual earnings is expected to be:",["positive.","negative.","zero."],1,
  ["Incorrect. Intrinsic value is below book value per share, so the present value of future residual income cannot be positive.","Correct. The intrinsic value of R21.60 is lower than the book value of R24.50. Intrinsic value = book value per share + PV of expected residual income, so the PV of expected residual income is negative.","Incorrect. Zero residual income would make intrinsic value equal to book value."],
  ["Intrinsic share value of equity derived from residual income model","@row:Book value per share"],"V0 = B0 + PV(RI): V0 > B0 → PV(RI) positive; V0 < B0 → negative; V0 = B0 → zero.",fixed=False),
 q("Based on Exhibits 2 and 3 and the multistage RI model, Brandt should estimate the intrinsic value of TVK to be closest to:",["€43.57.","€66.43.","€68.53."],2,
  ["This leaves out the terminal value: 38.40 + 2.76 + 2.41 = €43.57.","This discounts the terminal value over three years instead of two: €66.43.","RI = EPS − 9.2% × beginning book value: Year 1 3.02, Year 2 2.88 (book value 43.75), Year 3 2.74 (book value 49.37). PV of terminal value = (2.74 ÷ 0.092) ÷ 1.092² = 24.96. V0 = 38.40 + 3.02 ÷ 1.092 + 2.88 ÷ 1.092² + 24.96 = €68.53."],
  ["@row:Earnings per share (€)","@row:Dividends per share (€)","residual income per share will be constant from Year 3 into perpetuity"],"Multistage RI: B(t) = B(t−1) + EPS − DPS; RI = EPS − r × beginning B; terminal value at year 2 = RI3 ÷ r (persistence 1), discounted 2 years.",fixed=True),
])
