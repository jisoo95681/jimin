from lib15 import *
# ===== Deriv (M16): Reiter / family office, equity swap, currency swap, forward arbitrage, equity forward value [from m2-7] =====
N=1_000_000; fx=0.021; idx=103.6
pv=[0.99215,0.97620,0.95910]
fixleg=fx*N*pv[0]+fx*N*pv[1]+(N+fx*N)*pv[2]; eq=N*idx/100; val=eq-fixleg
A=(eq-N)-sum(pv)*fx*N; eqr=(1-pv[2])/sum(pv); C=((idx/100-1)-eqr)*N
assert (round(val),round(A),round(C))==(15424,-25476,22029),(val,A,C)
apv=[0.99620,0.99130,0.98410,0.97720]; sp=sum(apv)
assert round(sp,4)==3.9488
a_ok=(1-apv[3])/sp*4; a_a=(1-apv[0])/sp*4; a_b=(1-sum(apv)/4)/sp*4
assert (round(a_ok*100,2),round(a_a*100,2),round(a_b*100,2))==(2.31,0.38,1.30),(a_ok,a_a,a_b)
F,S,rr=118,125,0.014
v_ok=S-F/(1+rr)**0.25; v_a=(S-F)/(1+rr)**0.25; v_c=S-F/(1+rr)**0.5
assert (round(v_ok,2),round(v_a,2),round(v_c,2))==(7.41,6.98,7.82),(v_ok,v_a,v_c)
body="""Maximilian Reiter manages the equity exposure for a family office. All of the office's investment returns are measured in EUR, while equity holdings in foreign currencies are usually hedged to eliminate exchange rate risk. Six months ago, Reiter entered a 3-year receive-equity, pay-fixed, annual-reset equity swap with a notional amount of EUR 1,000,000. At initiation, the fixed rate was 2.1% and the equity index was trading at 100. Now the fixed rate has declined to 1.7% and the equity index is trading at 103.6. Reiter determines the no-arbitrage value of the equity swap based on the present value (PV) factors in Exhibit 1.

Exhibit 1: PV Factors for the Equity Swap
# Maturity (in Years) | PV Factor
0.5 | 0.99215
1.5 | 0.97620
2.5 | 0.95910

Over the next year, Reiter expects regular cash inflows denominated in Australian dollar (AUD) from the family office's Australian equity portfolio. He hedges the currency exposure by entering into a one-year fixed-for-fixed currency swap with quarterly payments and notional amounts exchanged at initiation and at maturity. Reiter calculates the interest rate on the AUD leg that results in a contract value of zero at initiation, based on the present value factors in Exhibit 2.

Exhibit 2: PV Factors for the AUD Leg
# Maturity (in Years) | PV Factor
0.25 | 0.99620
0.50 | 0.99130
0.75 | 0.98410
1.00 | 0.97720
Sum of PV factors | 3.9488

Reiter next identifies an arbitrage opportunity in shares of Dantel, a publicly traded company. A forward contract on Dantel is trading in the market at EUR 41.20, while the theoretical arbitrage-free price is EUR 40.85.

Finally, Reiter evaluates a 9-month forward contract on Marlow, another equity holding. He enters into the 9-month forward contract on Marlow at a price of EUR 118. Six months after initiation of the contract, the dividend has been paid and Marlow shares are trading at EUR 125. The annually compounded interest rate is 1.4%."""
add('M16','Derivatives',body,[
 q("The no-arbitrage value (in EUR) of Reiter's position in the equity swap is closest to:",["−25,476.","15,424.","22,029."],1,
  ["This multiplies the sum of the PV factors by the coupon only and subtracts it from the equity return: 36,000 − 2.92745 × 21,000 = −25,476.","Fixed leg = 21,000 × 0.99215 + 21,000 × 0.97620 + 1,021,000 × 0.95910 = 1,020,576; equity leg = 1,000,000 × 103.6 ÷ 100 = 1,036,000; value = 1,036,000 − 1,020,576 = 15,424.","This uses the initiation fixed rate formula (1 − last PV factor) ÷ sum of PV factors = 1.397% and takes 3.6% − 1.397% = 2.203%, times the notional = 22,029."],
  ["receive-equity, pay-fixed","the equity index is trading at 103.6","@row:2.5"],"Equity swap value (receive equity, pay fixed) = equity leg value − PV of the fixed payments (include the notional at the last date).",fixed=True),
 q("The interest rate on the AUD leg that results in a contract value of zero at swap initiation is closest to:",["0.38%.","1.30%.","2.31%."],2,
  ["This uses PV(0.25) in the numerator instead of PV(1.00): (1 − 0.99620) ÷ 3.9488 × 4 = 0.38%.","This uses the average of the four PV factors in the numerator: (1 − 0.9872) ÷ 3.9488 × 4 = 1.30%.","Fixed rate per period = (1 − PV of the last date) ÷ sum of PV factors = (1 − 0.97720) ÷ 3.9488 = 0.5774%; annualised × 4 = 2.31%."],
  ["@row:1.00","@row:Sum of PV factors"],"Fixed swap rate = (1 − final PV factor) ÷ Σ PV factors, then multiply by the number of periods per year (quarterly: × 4).",fixed=True),
 q("Exploiting the arbitrage opportunity in Dantel shares involves:",["buying the forward contract, selling the underlying short, and investing the proceeds at the risk-free interest rate.","selling the forward contract and purchasing the underlying with borrowed funds.","selling the forward contract and investing the proceeds at the risk-free interest rate."],1,
  ["Incorrect. This is reverse carry arbitrage, used when the market forward price is BELOW the theoretical price.","Correct. The market forward price (EUR 41.20) is above the arbitrage-free price (EUR 40.85), so sell the forward, buy the underlying with borrowed funds and deliver it at maturity (carry arbitrage).","Incorrect. Selling the forward and investing the proceeds at the risk-free rate leaves price risk, so it is not an arbitrage strategy."],
  ["trading in the market at EUR 41.20","theoretical arbitrage-free price is EUR 40.85"],"Forward overpriced (market > theoretical) → sell forward, buy underlying with borrowed money; underpriced → buy forward, short the underlying and lend.",fixed=False),
 q("Six months after initiation, the value (in EUR) of the forward contract on Marlow shares is closest to:",["6.98.","7.41.","7.82."],1,
  ["This discounts the difference between the price and the forward price: (125 − 118) ÷ 1.014^0.25 = 6.98.","V = S − PV(F0), with PV(F0) discounted over the remaining 3 months (0.25 years): 125 − 118 ÷ 1.014^0.25 = 7.41.","This discounts over the six months already passed instead of the three months remaining: 125 − 118 ÷ 1.014^0.5 = 7.82."],
  ["enters into the 9-month forward contract on Marlow at a price of EUR 118","Six months after initiation","The annually compounded interest rate is 1.4%"],"Forward value after t: V = S(t) − F0 ÷ (1 + r)^(time REMAINING); discount only the contract price.",fixed=True),
])
