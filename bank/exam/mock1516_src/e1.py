from lib15 import *
# ===== Equity: Han Seung-woo / Daegu Securities, HanSol Electronics (residual income, clean surplus, EVA) [from s1a-kim] =====
NI,DIV,SH=96000,38400,30_000_000; E13,E12=720000,660000; re_=0.10; ROE=0.13; g=0.06
RI=NI-re_*E12; RIa=NI-re_*E13; RIc=NI-DIV
assert (RI,RIa,RIc)==(30000.0,24000.0,57600.0)
pb=(ROE-g)/(re_-g); pbA=(NI/E13-g)/(re_-g); bvps=E13*1e6/SH; pbC=58000/bvps
assert round(pb,2)==1.75 and round(pbA,2)==1.83 and round(pbC,2)==2.42,(pb,pbA,pbC)
body=f"""Han Seung-woo is an equity analyst with Daegu Securities. Han is writing a research report on HanSol Electronics, a South Korean company that is dual-listed on a US exchange and complies with US GAAP. As part of his analysis, Han wants to determine the intrinsic value of HanSol's common shares under both residual income and comparable valuation methods.
To support the valuation process, Han assembles in Exhibit 1 selected financial information from HanSol's 2013 and 2012 audited financial statements (values stated in South Korean won [KRW]). Other financial data pertaining to the valuation of HanSol's shares at 31 December 2013 are shown in Exhibit 2.

Exhibit 1: Selected Information from HanSol's 2013 and 2012 Financial Statements (KRW millions, except where noted)
# Item | 2013 | 2012
Net income | 96,000 |
Dividends | 38,400 |
Number of common shares outstanding (actual) | 30,000,000 |
Total stockholders' equity at 31 December | 720,000 | 660,000

Exhibit 2: Other Financial Data for HanSol Electronics
Required return on equity | 10%
Market price per share at 31 December 2013 | KRW58,000

At 31 December 2013, Han provided the following forecasted fundamentals for HanSol:
*  expected long-term return on equity (ROE) is 13%; and
*  after 2014, earnings and dividends will grow at 6% per year.
Han's supervisor is concerned that the residual income model may not apply, and she asks Han to investigate possible clean surplus violations. Looking at HanSol's financial statement information, Han considers three items with possible violations to clean surplus accounting:
Item 1: Non-domestic currency translation adjustments from the consolidation of any self-sustaining subsidiary companies (for which the local currency is the functional currency)
Item 2: Marketable securities classified as available-for-sale
Item 3: Non-domestic currency transactions with customers and suppliers
Upon completing the analysis, Han concludes that the net effects are not material to the financial statements and, accordingly, makes no adjustments to the information in Exhibit 1.
In a recent conference call, HanSol's management presented its plan to improve future profitability, particularly the economic value added (EVA), by focusing on the following three strategic company goals:
Goal 1: Reduce research and development (R&D) expenses.
Goal 2: Adjust financial leverage to the optimal level.
Goal 3: Implement efficiencies in administrative functions."""
add('M15','Equity Valuation',body,[
 q("Using the information in Exhibits 1 and 2, HanSol's residual income (in KRW millions) in 2013 is closest to:",["KRW24,000.","KRW30,000.","KRW57,600."],1,
  ["This calculates the equity charge on end-of-year equity: 96,000 − (0.10 × 720,000) = 24,000.","Residual income = net income − equity charge based on start-of-year equity: 96,000 − (0.10 × 660,000) = KRW30,000 million.","This ignores the equity charge: net income − dividends = 96,000 − 38,400 = 57,600."],
  ["@row:Net income","Total stockholders' equity at 31 December","Required return on equity"],"Residual income = net income − (required return × BEGINNING-of-year equity).",fixed=True),
 q("Using the information in Exhibits 1 and 2, Han's forecasts, and the single-stage (constant growth) residual income approach, the justified price-to-book ratio (P/B) at 31 December 2013 is closest to:",["1.75.","1.83.","2.42."],0,
  ["Justified P/B = (ROE − g) ÷ (r − g) = (0.13 − 0.06) ÷ (0.10 − 0.06) = 1.75.","This uses the historical 2013 ROE (96,000 ÷ 720,000 = 13.33%) instead of the expected long-term ROE of 13%.","This is the market price divided by book value per share: 58,000 ÷ (720,000 ÷ 30) = 2.42."],
  ["expected long-term return on equity (ROE) is 13%","after 2014, earnings and dividends will grow at 6% per year","Required return on equity"],"Single-stage justified P/B = (ROE − g) ÷ (r − g), with the long-term ROE given in the forecast, not the historical one.",fixed=True),
 q("With respect to the three items that Han examined, which item is least likely to result in a clean surplus accounting violation?",["Item 3","Item 1","Item 2"],0,
  ["Correct. Foreign currency transactions with customers and suppliers are accounted for in both the income statement and balance sheet at fair value, so they do not violate clean surplus accounting.","Incorrect. Translation adjustments of self-sustaining subsidiaries bypass the income statement and go to other comprehensive income, which violates clean surplus.","Incorrect. Unrealized gains and losses on available-for-sale securities bypass the income statement and go to other comprehensive income, which violates clean surplus."],
  ["Non-domestic currency transactions with customers and suppliers","least likely to result in a clean surplus accounting violation"],"Clean surplus is violated when a change in equity bypasses net income (OCI items: AFS securities, translation adjustments of subsidiaries); ordinary foreign currency transactions go through net income.",fixed=False),
 q("Which of management's three strategic goals will least likely result in a higher EVA for HanSol?",["Goal 2","Goal 1","Goal 3"],1,
  ["Incorrect. Adjusting financial leverage to the optimal level lowers the cost of capital and raises EVA.","Correct. R&D costs are added back to NOPAT when calculating EVA, so cutting R&D lowers NOPAT and EVA.","Incorrect. Administrative efficiencies lower operating expenses, raise NOPAT and raise EVA."],
  ["Reduce research and development (R&D) expenses.","least likely result in a higher EVA"],"EVA = NOPAT − WACC × capital: lower cost of capital or higher NOPAT raises it; R&D is added back to NOPAT, so cutting R&D lowers it.",fixed=False),
])
# ===== Equity: Choi Min-jun / Seoul Capital, Eldor Telecom (RI vs DDM, RI, EVA) [from eq5-sparrow] =====
bv0,eps1,div1,bv1=44.00,6.90,1.80,49.10; r=0.12; g2=0.05; roe=0.14
assert abs(bv0+eps1-div1-bv1)<1e-9
RI=eps1-r*bv0; RIa=eps1-r*bv1; V=bv0+bv0*(roe-r)/(r-g2); Vc=bv0+bv0*(roe-g2)/(r-g2)
assert (round(RI,2),round(RIa,2),round(V,2),round(Vc,2),round(bv0+RI/(r-g2),2))==(1.62,1.01,56.57,100.57,67.14),(RI,RIa,V,Vc)
debt,eq,ebit,tax,wacc=3_850_000,1_960_000,580_000,0.25,0.065
nopat=ebit*(1-tax); cap=debt+eq; eva=nopat-wacc*cap; evaB=ebit-wacc*cap; 
assert (round(nopat),cap,round(eva),round(evaB))==(435000,5810000,57350,202350),(nopat,cap,eva,evaB)
body=f"""Choi Min-jun and Sandra Lee, junior analysts at Seoul Capital, are valuing Eldor Telecom (Eldor), a regional telecom provider. Their supervisor instructed them to use residual income models for the valuation.

Lee starts the meeting by saying she wants to be sure Choi understands the difference between the residual income approach and the dividend discount approach and makes the following statements:

Statement 1: The residual income model has more of its value determined in the current time period, whereas the dividend discount model has more of its value determined in later periods.
Statement 2: The residual income model makes assumptions about future earnings and dividend growth, whereas the dividend discount model makes assumptions only about dividend growth.
Statement 3: If there is clean surplus accounting, the residual income model and the dividend discount model will yield the same results.
To start their analysis, the analysts gather the information in Exhibit 1 for Eldor and calculate the forecasted residual income for the current fiscal year ending 30 June.

Exhibit 1: Forecasted Residual Income
# Item | Per share
Book value per share 30 June previous year | $44.00
Forecasted earnings for year-end 30 June current year | $6.90
Book value per share 30 June current fiscal year | $49.10
Required rate of return = re | 12%
Long-term growth rate | 5%
Return on equity (ROE) | 14%

They continue by selecting the single-stage residual income model to calculate the intrinsic value of Eldor.

Next, the analysts decide to calculate the economic value added (EVA) for Eldor and gather some additional data (Exhibit 2):

Exhibit 2: Eldor Telecom Additional Information (US$, thousands)
# Item | Value
Total debt, 30 June previous fiscal year | $3,850,000
Total equity, 30 June previous fiscal year | $1,960,000
Earnings before interest and taxes | $580,000
Tax rate | 25%
Weighted average cost of capital (WACC) | 6.5%"""
add('M15','Equity Valuation',body,[
 q("In Lee's comparison of the residual income and dividend discount models, which of her statements is least accurate?",["Statement 3","Statement 1","Statement 2"],2,
  ["Incorrect. With clean surplus accounting the two models give the same results: this statement is accurate.","Incorrect. The residual income model recognizes more of the value in the current period (book value): this statement is accurate.","Correct. The residual income model does NOT make separate assumptions about future earnings and dividend growth, so this statement is the least accurate."],
  ["makes assumptions about future earnings and dividend growth","least accurate"],"RI and DDM give the same value under clean surplus; RI puts more value in the current book value; RI does not need separate earnings and dividend growth assumptions.",fixed=False),
 q("Using Exhibit 1, the forecasted residual income per share for the current fiscal year is closest to:",["$1.01.","$1.62.","$5.28."],1,
  ["This uses the ending book value: 6.90 − 0.12 × 49.10 = $1.01.","RI = EPS − equity charge on beginning book value = 6.90 − 0.12 × 44.00 = $1.62.","This is only the equity charge: 0.12 × 44.00 = $5.28."],
  ["@row:Book value per share 30 June previous year","@row:Forecasted earnings for year-end 30 June current year","@row:Required rate of return = re"],"RI per share = EPS − required return × BEGINNING book value per share.",fixed=True),
 q("Using Exhibit 1 and the single-stage residual income model, the intrinsic value of Eldor is closest to:",["$56.57.","$67.14.","$100.57."],0,
  ["V0 = B0 + B0 × (ROE − r) ÷ (r − g) = 44.00 + 44.00 × (0.14 − 0.12) ÷ (0.12 − 0.05) = $56.57.","This capitalizes the forecast residual income of $1.62 instead of the ROE-based residual income: 44.00 + 1.62 ÷ (0.12 − 0.05) = $67.14.","This subtracts g instead of r in the numerator: 44.00 + 44.00 × (0.14 − 0.05) ÷ (0.12 − 0.05) = $100.57."],
  ["Long-term growth rate","Return on equity (ROE)"],"Single-stage RI value: V0 = B0 + B0 × (ROE − r) ÷ (r − g).",fixed=True),
 q("Using Exhibit 2, the EVA for Eldor is closest to:",["$57,350.","$202,350.","$435,000."],0,
  ["NOPAT = 580,000 × 0.75 = 435,000; total capital = 3,850,000 + 1,960,000 = 5,810,000; EVA = 435,000 − 6.5% × 5,810,000 = $57,350.","This uses pre-tax EBIT: 580,000 − 6.5% × 5,810,000 = $202,350.","This is NOPAT only, with no capital charge."],
  ["@row:Earnings before interest and taxes","@row:Tax rate","@row:Weighted average cost of capital (WACC)"],"EVA = NOPAT − WACC × (debt + equity); NOPAT = EBIT × (1 − tax).",fixed=True),
])
