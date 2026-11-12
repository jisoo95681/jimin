from lib14 import *
# ================= 4 Equity-A: NFAB =================
B0,eps1,pay,r=80.0,11.20,0.40,0.09
d1=eps1*pay; B1=B0+eps1-d1; ri1=eps1-r*B0; riEnd=eps1-r*B1
eps2=0.125*B1; ri2=eps2-r*B1; w=0.60
cont=ri2*w/(1+r-w); V=B0+ri1/(1+r)+ri2/(1+r)**2+cont/(1+r)**2; Vn=B0+ri1/(1+r)+ri2/(1+r)**2
cont1=ri2/(1+r-1.0); V1=B0+ri1/(1+r)+ri2/(1+r)**2+cont1/(1+r)**2
assert (round(ri1,2),round(riEnd,2),round(eps1-d1,2))==(4.00,3.40,6.72) and round(V,2)==89.35 and round(Vn,2)==86.22 and round(V1,2)==114.61
body="""Marta Kowalczyk, CFA, is an equity analyst at Baltic Ridge Securities. She is valuing the common shares of Norden Freight AB (NFAB), a Swedish shipping company, as of 31 December 2024. NFAB pays small and irregular dividends. Its free cash flow to equity has been negative in each of the last three years because of a large fleet expansion program. NFAB's financial statements are of high quality, and Kowalczyk expects the clean surplus relationship to hold in the forecast period.

Kowalczyk collects the data in Exhibit 1 (amounts in Swedish krona, SEK).

Exhibit 1: Selected Data for Norden Freight AB
# Item | Value
Book value per share, 31 December 2024 | SEK80.00
Expected earnings per share (EPS), 2025 | SEK11.20
Expected dividend payout ratio, 2025 | 40%
Cost of equity | 9.0%
Expected return on equity (ROE), 2026 | 12.5%
Reported ROE, 2024 | 21.0%
Industry median ROE, 2024 | 11.0%
One-time gain on vessel sales as a percentage of 2024 net income | 30%

Kowalczyk uses a multistage residual income model. She forecasts residual income for 2025 and 2026 explicitly. From 2027 onward she assumes that residual income declines each year at a rate determined by a persistence factor of 0.60."""
add('Equity Valuation',body,[
 q("Based on the information provided, the most appropriate model for Kowalczyk to use in valuing NFAB is the:",["free cash flow to equity model.","residual income model.","dividend discount model."],1,
  ["FCFE has been negative for three years, so a free cash flow model would give unreliable values.","NFAB pays small and irregular dividends, its FCFE is negative and its accounting is of high quality with clean surplus expected to hold, which makes the residual income model the most appropriate.","Dividends are small and irregular, so a dividend discount model would not reflect value."],
  ["pays small and irregular dividends","free cash flow to equity has been negative","clean surplus relationship to hold"],"Residual income suits companies with irregular dividends and negative FCFE when accounting quality is high (clean surplus holds).",fixed=False),
 q("Based on Exhibit 1, NFAB's residual income per share for 2025 is closest to:",["SEK3.40.","SEK6.72.","SEK4.00."],2,
  ["This charges the cost of equity on the END-of-year book value (86.72): 11.20 − 0.09 × 86.72 = 3.40.","This is EPS minus dividends per share (11.20 − 4.48), which is unrelated to the equity charge.","Residual income = EPS − cost of equity × BEGINNING book value = 11.20 − 0.09 × 80.00 = SEK4.00."],
  ["@row:Book value per share, 31 December 2024","@row:Cost of equity","@row:Expected earnings per share (EPS), 2025"],"RI = EPS − r × beginning book value per share."),
 q("Based on Exhibit 1 and Kowalczyk's assumptions, the intrinsic value per share of NFAB is closest to:",["SEK89.35.","SEK86.22.","SEK114.61."],0,
  ["B1 = 80.00 + 11.20 − 4.48 = 86.72; RI2026 = (0.125 − 0.09) × 86.72 = 3.04. Continuing RI at the end of 2026 = 3.04 × 0.60 ÷ (1.09 − 0.60) = 3.72. V0 = 80.00 + 4.00/1.09 + 3.04/1.09² + 3.72/1.09² = SEK89.35.","This leaves out the value of the residual income after 2026: 80.00 + 4.00/1.09 + 3.04/1.09² = SEK86.22.","This uses a persistence factor of 1.0 (constant residual income forever) instead of 0.60: SEK114.61."],
  ["persistence factor of 0.60","@row:Expected return on equity (ROE), 2026"],"Multistage RI: V0 = B0 + PV(explicit RI) + PV(continuing RI), with continuing RI = RI_T × ω ÷ (1 + r − ω)."),
 q("Kowalczyk's choice of a persistence factor of 0.60 rather than 1.00 is best supported by NFAB's:",["low dividend payout ratio.","high 2024 ROE and the one-time gain included in 2024 earnings.","expected application of the clean surplus relationship."],1,
  ["The payout ratio does not determine how long abnormal returns last.","A ROE far above the industry median and a large one-time gain are exactly the factors that make high residual income fade; they argue for a persistence factor below 1.","Clean surplus is a condition for using the model, not a reason for faster decay of residual income."],
  ["Reported ROE, 2024 | 21.0%","One-time gain on vessel sales as a percentage of 2024 net income | 30%"][:0] or ["@row:Reported ROE, 2024","@row:One-time gain on vessel sales as a percentage of 2024 net income","@row:Industry median ROE, 2024"],"Low persistence: extreme ROE, high accruals and one-time (special) items; stable, high-quality earnings → persistence near 1.",fixed=False),
])
# ================= 5 Equity-B: private company =================
cp,dlom=0.30,0.15
dloc=1-1/(1+cp); tot=1-(1-dloc)*(1-dlom); totA=dloc+dlom
ni,dep,cap,dwc,nb=54.0,20.0,36.0,8.0,10.0
fcfe=ni+dep-cap-dwc+nb; fcfeA=ni+dep-cap-dwc; fcfeC=ni-cap-dwc+nb
assert (round(dloc*100,1),round(tot*100,1),round(totA*100,1))==(23.1,34.6,38.1) and (fcfe,fcfeA,fcfeC)==(40.0,30.0,20.0)
body="""Ilse Wagner, CFA, advises a private equity fund that is considering buying a minority stake in Valmont Brewery GmbH, a private company. Wagner's valuation of Valmont is a controlling-interest value. The fund would hold a non-controlling interest. Wagner has found that comparable controlling transactions took place at a control premium of 30%, and she applies a discount for lack of marketability (DLOM) of 15%.

Wagner also estimates free cash flow to equity (FCFE) for Valmont for the last year (EUR millions):

Exhibit 1: Selected Data for Valmont Brewery
# Item | Amount
Net income | 54
Depreciation | 20
Fixed capital investment | 36
Increase in net working capital (excluding cash) | 8
Net borrowing | 10"""
add('Equity Valuation',body,[
 q("The discount for lack of control (DLOC) that corresponds to the control premium of 30% is closest to:",["30.0%.","23.1%.","18.0%."],1,
  ["30% is the control PREMIUM; the discount is calculated on the higher controlling value, so it is smaller.","DLOC = 1 − 1 ÷ (1 + control premium) = 1 − 1 ÷ 1.30 = 23.1%.","18.0% has no basis in the data."],
  ["control premium of 30%"],"DLOC = 1 − 1 ÷ (1 + control premium); a premium of 30% is NOT a 30% discount."),
 q("The total discount that Wagner should apply to the controlling value of Valmont is closest to:",["34.6%.","38.1%.","15.0%."],0,
  ["Total discount = 1 − (1 − DLOC)(1 − DLOM) = 1 − (1 − 0.231)(1 − 0.15) = 34.6%.","This adds the two discounts (23.1% + 15%); they must be combined multiplicatively.","15.0% is only the marketability discount; the minority stake also lacks control."],
  ["a non-controlling interest","DLOM) of 15%"],"Total discount = 1 − (1 − DLOC)(1 − DLOM), never DLOC + DLOM.",fixed=True),
 q("Valmont's FCFE for the last year is closest to:",["EUR20 million.","EUR30 million.","EUR40 million."],2,
  ["This also leaves out depreciation: 54 − 36 − 8 + 10 = 20.","This leaves out net borrowing (10): 54 + 20 − 36 − 8 = 30.","FCFE = net income + depreciation − fixed capital investment − increase in net working capital + net borrowing = 54 + 20 − 36 − 8 + 10 = EUR40 million."],
  ["@row:Depreciation","@row:Net borrowing","@row:Increase in net working capital (excluding cash)"],"FCFE = NI + depreciation − FCInv − ΔWC + net borrowing."),
])
