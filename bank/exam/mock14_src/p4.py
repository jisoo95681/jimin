from lib14 import *
# ================= 8 FI: credit analysis =================
z1=0.02; z2=((103)/(100-3/1.02))**0.5-1
df1=1/(1+z1); df2=1/(1+z2)**2; f11=(1+z2)**2/(1+z1)-1
exp1=3+103/(1+f11); exp2=103.0
h=0.018; pd1=h; pd2=(1-h)*h; rec=0.40; lgd=1-rec
cva=df1*pd1*lgd*exp1+df2*pd2*lgd*exp2; fv=100-cva
def ytm(p):
    lo,hi=0,0.5
    for _ in range(200):
        y=(lo+hi)/2; v=3/(1+y)+103/(1+y)**2
        if v>p: lo=y
        else: hi=y
    return y
sp=(ytm(fv)-0.03)*100
cvaB=df1*pd1*rec*exp1+df2*pd2*rec*exp2; spB=(ytm(100-cvaB)-0.03)*100
cvaC=df1*pd1*lgd*100+df2*pd2*lgd*100
assert (round(cva,2),round(cvaB,2),round(cvaC,2))==(2.11,1.41,2.06) and round(sp,2)==1.12 and round(spB,2)==0.74,(cva,cvaB,cvaC,sp,spB)
# higher recovery check
cva_hi=df1*pd1*(1-0.60)*exp1+df2*pd2*(1-0.60)*exp2; assert cva_hi<cva
body=f"""Karin Dalgaard, CFA, is a credit analyst at a Nordic asset manager. She values a two-year, 3.0% annual-coupon corporate bond issued by Havn Logistics A/S, using the arbitrage-free framework and assuming zero interest rate volatility so that the no-default value (VND) is calculated with the benchmark spot curve.

Exhibit 1: Benchmark Government Par Curve and Credit Assumptions
# Item | Value
One-year par rate (spot rate) | 2.00%
Two-year par rate | 3.00%
Annual hazard rate (constant probability of default each year, conditional on survival) | 1.80%
Recovery rate (percent of the exposure recovered in default) | 40%

The two-year spot rate implied by the par curve is {z2*100:.2f}%, and the one-year forward rate one year from now is {f11*100:.2f}%. The expected exposure to default is the bond's value including the coupon, which is {exp1:.2f} at the end of Year 1 and {exp2:.2f} at the end of Year 2. The VND of the bond is 100.0000.

Dalgaard also reviews a callable bond of Havn Logistics with no call protection. She expects interest rates to fall sharply."""
add('Fixed Income',body,[
 q("The credit valuation adjustment (CVA) for the Havn Logistics bond is closest to:",[f"{cvaB:.2f}.",f"{cva:.2f}.",f"{cvaC:.2f}."],1,
  [f"This uses the recovery rate (40%) in place of the loss given default (60%): {cvaB:.2f}.",f"LGD = 1 − recovery = 60%. PD Year 1 = 1.80%; PD Year 2 = (1 − 0.018) × 0.018 = 1.7676%. CVA = 0.980392 × 1.80% × 60% × {exp1:.2f} + {df2:.6f} × 1.7676% × 60% × 103.00 = {cva:.2f}.",f"This applies a flat exposure of 100 in both years instead of the expected exposures ({exp1:.2f} and 103.00): {cvaC:.2f}."],
  ["Recovery rate (percent of the exposure recovered in default) | 40%","@row:Annual hazard rate"],"CVA = Σ DF × PD × LGD × expected exposure, with LGD = 1 − recovery rate and PD_t = h × (1 − h)^(t − 1).",fixed=True),
 q("The credit spread on the bond, derived from the CVA, is closest to:",["0.74%.","1.12%.","1.80%."],1,
  [f"This results from using the recovery rate instead of LGD in the CVA ({cvaB:.2f}), which understates the CVA and the spread.",f"Fair value = VND − CVA = 100.0000 − {cva:.4f} = {fv:.4f}. The yield to maturity of a 3.0% two-year bond priced at {fv:.2f} is {ytm(fv)*100:.2f}%. Credit spread = {ytm(fv)*100:.2f}% − 3.00% = {sp:.2f}%.","This is the annual hazard rate; the credit spread is the yield difference after taking recovery and discounting into account, so it is lower."],
  ["The VND of the bond is 100.0000","@row:Two-year par rate"],"Credit spread = YTM(VND − CVA) − benchmark YTM (here the 3.0% par rate).",fixed=True),
 q("Compared with the 40% recovery rate, a recovery rate of 60% would most likely cause the CVA and the credit spread to:",["both decrease.","both increase.","both stay the same."],0,
  ["Higher recovery lowers LGD (from 60% to 40%), which lowers the CVA, raises the fair value and lowers the yield: both decrease.","A lower, not higher, recovery would raise both.","LGD enters the CVA directly, so a change in the recovery rate changes the CVA and the spread."],
  ["Recovery rate (percent of the exposure recovered in default) | 40%"],"Higher recovery → lower LGD → lower CVA → higher fair value → lower credit spread.",fixed=False),
 q("If interest rates fall sharply, the effective duration and convexity of the callable bond will most likely:",["rise, and its convexity will become more positive.","fall, and its convexity will become negative.","be the same as those of an otherwise identical option-free bond."],1,
  ["A callable bond's price is capped near the call price when rates fall, which shortens its effective duration and gives negative convexity, not more positive.","With no call protection and a sharp fall in rates, the call becomes likely to be exercised: the effective duration falls and the convexity turns negative (price compression).","Compared with an option-free bond, the callable bond behaves differently when rates fall because the issuer's call option is in the money."],
  ["callable bond of Havn Logistics with no call protection","expects interest rates to fall sharply"],"Callable bond when rates fall: price compression → lower effective duration, negative convexity; when rates rise it behaves like a straight bond.",fixed=False),
])
# ================= 9 Quant: time series =================
b0,b1=0.052,0.991
c1,tc=0.31,3.90; crit=1.98
bb0,bb1=0.45,0.85; mr=bb0/(1-bb1) if bb1!=1 else None; cur=3.8; fc=bb0+bb1*cur
assert round(mr,2)==3.00 and round(fc,2)==3.68
body="""Ronja Nilsen, a quantitative analyst, studies monthly closing prices of a commodity index. She regresses the price on its previous month's price (P_t = b0 + b1 P_{t−1} + ε_t) using 120 monthly observations.

Exhibit 1: Regression of P_t on P_{t−1}
# | Coefficient | t-statistic
Intercept (b0) | 0.052 | 0.90
Slope (b1) | 0.991 | 214.00

Nilsen then regresses the squared residuals of this model on their own lagged values (ε_t² = c0 + c1 ε_{t−1}² + u_t). The estimate of c1 is 0.31 with a t-statistic of 3.90. The critical t-value at the 5% significance level is 1.98.

For a second series, the monthly yield spread, Nilsen estimates an AR(1) model: S_t = 0.45 + 0.85 S_{t−1}. The current value of the spread is 3.80."""
add('Quantitative Methods',body,[
 q("Based on Exhibit 1, the price series is most likely:",["a random walk, because b0 is close to 0 and b1 is close to 1.","covariance stationary, because b1 is significantly different from zero.","a random walk, because b0 is significantly different from zero."],0,
  ["A random walk implies an AR(1) intercept near zero and a slope near one (a unit root); the estimates (0.052 and 0.991) fit, and the intercept is not significantly different from zero (t = 0.90).","The slope is close to 1, which indicates a unit root, so the series is not covariance stationary; the large t-statistic for b1 only tests whether it differs from zero, not from one.","The intercept is not significantly different from zero (t = 0.90), so this reasoning does not hold."],
  ["@row:Intercept (b0)","@row:Slope (b1)"],"Random walk as AR(1): b0 ≈ 0 and b1 ≈ 1 (unit root, not covariance stationary).",fixed=False),
 q("Based on the regression of the squared residuals, Nilsen should conclude that the price model:",["has no evidence of ARCH, because c1 is below 1.","has serial correlation in the residuals, because c1 is positive.","shows autoregressive conditional heteroskedasticity (ARCH), because c1 is significantly different from zero."],2,
  ["The test is whether c1 differs from ZERO, not from 1.","Serial correlation is tested by regressing residuals (not squared residuals) on their own lag.","The t-statistic of 3.90 exceeds the critical value of 1.98, so c1 is significantly different from zero: there is ARCH, and the variance of the errors depends on past squared errors."],
  ["The estimate of c1 is 0.31 with a t-statistic of 3.90","critical t-value at the 5% significance level is 1.98"],"ARCH test: regress squared residuals on their lagged values; |t| > critical value → ARCH present.",fixed=False),
 q("Using the AR(1) model, the forecast of the spread for the next month is closest to:",["3.00.","3.68.","3.80."],1,
  ["3.00 is the mean-reverting level, b0 ÷ (1 − b1) = 0.45 ÷ 0.15; the one-period forecast is not the mean-reverting level.","Forecast = b0 + b1 × S_t = 0.45 + 0.85 × 3.80 = 3.68. It lies between the current value (3.80) and the mean-reverting level (3.00).","The forecast is not equal to the current value; that is true only for a random walk."],
  ["S_t = 0.45 + 0.85 S_{t−1}","The current value of the spread is 3.80"],"AR(1) forecast = b0 + b1 × current value; the series moves from the current value toward the mean-reverting level b0 ÷ (1 − b1).",fixed=True),
])
# ================= 10 Econ =================
N,fwd0=5_000_000,1.3400
spot_bid,spot_off=1.3520,1.3524; pts_bid,pts_off=0.0018,0.0022
rcad=0.016
close=spot_off+pts_off; loss=(close-fwd0)*N; loss_pv=loss/(1+rcad*180/360)
lossB=((spot_bid+pts_bid)-fwd0)*N/(1+rcad*180/360)
assert round(close,4)==1.3546 and round(loss)==73000 and round(loss_pv)==72421 and round(lossB)==68452
iC,iU=0.021,0.033; S=(spot_bid+spot_off)/2; E=S*(1+iC)/(1+iU)
assert round(E,4)==1.3365
EC=S*(1+iU)/(1+iC)
assert round(EC,4)==1.3681,EC
body=f"""Henrik Lund works in the treasury department of Maple Valley Exports, a Canadian company that invoices its customers in US dollars. The market quotes use the convention CAD/USD (Canadian dollars per US dollar).

Six months ago Maple Valley sold USD5,000,000 forward for delivery in 12 months at a forward rate of 1.3400. Today Lund collects the following quotes.

Exhibit 1: Current Quotes
# Item | Bid | Offer
Spot CAD/USD | 1.3520 | 1.3524
Six-month forward points | +18 | +22

The six-month CAD market reference rate is 1.60% (annualized, 360-day year). Lund also notes that the one-year interest rate is 2.10% in Canada and 3.30% in the United States, and he assumes that uncovered interest rate parity holds.

Lund is asked about the currency of a country in which monetary policy is expansionary and fiscal policy is restrictive. The exchange rate floats, and capital is highly mobile."""
add('Economics',body,[
 q("The mark-to-market value of Maple Valley's forward position is closest to:",["a loss of CAD68,452.","a loss of CAD72,421.","a loss of CAD73,000."],1,
  ["This offsets with the BID side (1.3520 + 0.0018 = 1.3538); to close a short USD forward Maple Valley must BUY USD forward at the offer.","To offset, Maple Valley buys USD forward at the offer: 1.3524 + 0.0022 = 1.3546. At settlement the position loses (1.3546 − 1.3400) × 5,000,000 = CAD73,000. The loss is received/paid in six months, so discount at the CAD rate: 73,000 ÷ (1 + 0.016 × 180/360) = CAD72,421.","This is the undiscounted loss at settlement; the mark-to-market value is a present value."],
  ["@row:Six-month forward points","sold USD5,000,000 forward"],"Mark-to-market of a forward: offset with an opposite forward at the dealer's side you must trade (buy at the offer, sell at the bid), then discount the difference to today.",fixed=True),
 q("Assuming uncovered interest rate parity, the expected spot CAD/USD rate in one year, using the midpoint of the current spot quotes, is closest to:",["1.3365.","1.3522.","1.3681."],0,
  ["E(S) = S × (1 + i_CAD) ÷ (1 + i_USD) = 1.3522 × 1.021 ÷ 1.033 = 1.3365. The higher US rate implies that the USD is expected to depreciate against the CAD.","1.3522 is today's spot rate (the expectation of no change), which would hold only if the two interest rates were equal.","This inverts the ratio ((1 + i_USD) ÷ (1 + i_CAD)), which would imply that the USD appreciates."],
  ["uncovered interest rate parity holds","2.10% in Canada and 3.30% in the United States"],"UIRP: the currency with the higher interest rate is expected to depreciate; E(S) = S × (1 + i_price currency) ÷ (1 + i_base currency).",fixed=True),
 q("Based on the Mundell–Fleming model, the currency of the country described by Lund will most likely:",["depreciate.","appreciate.","change in an ambiguous direction."],0,
  ["Expansionary monetary policy lowers interest rates and, with a floating rate and high capital mobility, depreciates the currency; restrictive fiscal policy lowers domestic demand and interest rates, which also pushes the currency down. Both effects point the same way: depreciation.","Appreciation would require restrictive monetary policy or expansionary fiscal policy.","The effect is ambiguous only when monetary and fiscal policies push in opposite directions (both expansionary or both restrictive)."],
  ["monetary policy is expansionary and fiscal policy is restrictive","floats, and capital is highly mobile"],"Mundell–Fleming (floating, high capital mobility): expansionary monetary → currency down; expansionary fiscal → currency up; restrictive reverses; opposite effects → ambiguous.",fixed=False),
])
