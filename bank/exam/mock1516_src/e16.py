from lib15 import *
# ===== FI (M16): Gruber / Corvello Fund, credit risk metrics (CVA, credit spread, credit curve, ABS approach) [from ca-wong] =====
par,c,g,pd,R=1000,0.025,0.012,0.014,0.35
cf=[c*par]*3+[par*(1+c)]
E1=[sum(cf[j]/(1+g)**(j-t) for j in range(t,4)) for t in range(4)]
def cva(exps,disc=True):
    return sum(exps[t]*(1-R)*pd*(1-pd)**t*(1/(1+g)**(t+1) if disc else 1) for t in range(4))
okc=cva(E1); b=cva([sum(cf[t:]) for t in range(4)]); cc=cva(E1,False)
assert (round(okc,2),round(b,2),round(cc,2))==(36.15,36.80,37.22),(okc,b,cc)
mv,vnd,cv=905.40,951.30,62.15; fv=vnd-cv
yy=lambda v:(1000/v)**0.2-1
sp=(yy(fv)-yy(vnd))*1e4; spB=(yy(mv)-yy(vnd))*1e4; spC=yy(mv)*1e4
assert (round(sp),round(spB),round(spC))==(137,100,201),(sp,spB,spC)
body="""Marta Gruber is a quantitative analyst modeling the credit risk of a fixed-income fund (the Fund) to support portfolio management. Tobias Klein, the portfolio manager, asks Gruber to calculate certain metrics on the Fund's positions to measure the credit risk of the Fund. Gruber analyzes the following fixed-income instruments held by the Fund.

Bond 1 is an A rated corporate bond maturing in 4 years, with details presented in Exhibit 1 below:

Exhibit 1: Bond 1 Details
# Item | Value
Par value | $1,000
Coupon rate | 2.50%
Government bond yield | 1.20%
Risk-neutral probability of default | 1.40%
Recovery rate | 35%

Gruber calculates the Credit Valuation Adjustment of Bond 1 as requested by Klein.

Per Klein's request, Gruber calculates the credit spread of Bond 2, a BBB rated zero-coupon bond maturing in 5 years, in order to compare its valuation relative to other zero-coupon bonds with similar credit rating and maturity. Bond 2's details are presented in Exhibit 2 below:

Exhibit 2: Bond 2 Details
# Item | Value
Par value | $1,000.00
Market value | $905.40
Value assuming no default | $951.30
Credit valuation adjustment | $62.15

While reviewing the Fund's investment grade portfolio, Gruber examines Bond 3, an AAA rated bond.

Gruber analyzes the ABS positions held by the Fund, and considers the appropriate credit analysis approach for ABS 1. ABS 1's underlying collateral pool comprises medium-term automobile loans which are considered both granular and homogenous."""
add('M16','Fixed Income',body,[
 q("Assuming no interest rate volatility and a flat benchmark yield curve, Bond 1's Credit Valuation Adjustment is closest to:",["$36.15.","$36.80.","$37.22."],0,
  ["Exposure each year = PV (at the 1.20% government yield) of the remaining cash flows; LGD = (1 − 35%) × exposure; probability of default in year t = 1.40% × survival to t − 1; CVA = Σ LGD × probability × discount factor = $36.15.","This uses the undiscounted remaining cash flows as the exposures (1,085 / 1,060 / 1,035 / 1,025): $36.80.","This does not discount the expected losses: $37.22."],
  ["@row:Government bond yield","@row:Risk-neutral probability of default","@row:Recovery rate"],"CVA = Σ [exposure (PV of remaining flows) × LGD (1 − recovery) × probability of default in year t × discount factor].",fixed=True),
 q("The credit spread of Bond 2 is closest to:",["100 bps.","137 bps.","201 bps."],1,
  ["This uses the market value instead of the value assuming no default for the risk-free yield: 100 bps.","Fair value = VND − CVA = 951.30 − 62.15 = 889.15; its YTM = (1,000 ÷ 889.15)^(1/5) − 1 = 2.38%; the YTM of VND is 1.00%; spread = 2.38% − 1.00% = 137 bps.","This is the YTM of the market value alone (2.01%), not a spread."],
  ["@row:Market value","@row:Value assuming no default","@row:Credit valuation adjustment"],"Credit spread = YTM of (VND − CVA) − YTM of VND (both on the same par value and maturity).",fixed=True),
 q("The term structure of Bond 3's credit spread is most likely:",["steeply upward sloping.","flat or slightly upward.","steeply inverted."],1,
  ["Incorrect. A steeply upward sloping credit curve applies to lower credit quality.","Correct. For the highest-rated bonds spreads are very low with a lower bound of zero, so the credit term structure is flat or slightly upward sloping.","Incorrect. A steeply inverted credit curve applies to distressed high-yield issuers."],
  ["an AAA rated bond"],"AAA: spreads near the floor → flat or slightly upward credit curve; distressed credits → inverted; weaker investment grade/high yield → steeper upward.",fixed=False),
 q("Given the description of ABS 1's asset pool, Gruber would most appropriately adopt a:",["statistics-based approach.","portfolio-based approach.","loan-by-loan approach."],1,
  ["Incorrect. A statistics-based approach suits a static book of loans.","Correct. Granular and homogeneous auto loans in a dynamic pool support a portfolio-based approach.","Incorrect. A loan-by-loan approach suits a small number of large, heterogeneous loans."],
  ["both granular and homogenous"],"Granular + homogeneous pool → portfolio-based; discrete large heterogeneous loans → loan-by-loan; static pools → statistics-based.",fixed=False),
])
