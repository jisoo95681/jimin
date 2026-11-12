from lib14 import *
# ================= 6 Deriv-A =================
L60,L240,fra,N=0.010,0.028,0.021,40_000_000
newr=((1+L240*240/360)/(1+L60*60/360)-1)*360/180
undis=(newr-fra)*(180/360)*N; val=undis/(1+L240*240/360); dis180=undis/(1+L240*180/360)
assert len({round(val),round(undis),round(dis180)})==3 and round(newr*100,3)==3.394
S6,F0,rr=44.80,41.30,0.02
vf=S6-F0/(1+rr)**0.5; vfA=S6-F0; vfC=S6/(1+rr)**0.5-F0
assert (round(vf,2),round(vfA,2),round(vfC,2))==(3.91,3.50,3.06)
S0,rate,T=2000.0,0.024,0.5; D1,D2=11.0,13.0
Feq=S0*(1+rate)**T-D1*(1+rate)**0.25-D2; Fm=2014.50
assert round(Feq,1)==1999.8 and Fm>Feq
pv=[0.9964,0.9921,0.9866,0.9801]; sw=(1-pv[-1])/sum(pv)*4; swA=(1-pv[-1])/sum(pv); swC=(1-pv[-1])/sum(pv[:3])*4
assert (round(sw*100,2),round(swA*100,2),round(swC*100,2))==(2.01,0.50,2.68)
fm=lambda x:f"€{x:,.0f}"
body=f"""Tomás Ferreira, CFA, is a derivatives specialist at Costa Azul Capital. He is preparing a review for four clients.

Client 1 entered a pay-fixed 3 × 9 forward rate agreement (FRA) 30 days ago on a notional amount of €40,000,000 at a fixed rate of 2.10%. The FRA settles in advance at expiration and uses a 360-day year. Today, the 60-day MRR is 1.00% and the 240-day MRR is 2.80%.

Client 2 entered a 12-month forward contract on a non-dividend-paying share 180 days ago at a forward price of €41.30. The share now trades at €44.80, and 180 days remain until expiration. The annual risk-free rate is 2.00% (annual compounding, 360-day year basis; use a time of 0.5 for 180 days).

Client 3 monitors a six-month futures contract on an equity index. The index is at 2,000. It is expected to pay dividends of 11 index points in three months and 13 index points in six months (at expiration). The annual risk-free rate is 2.40% with annual compounding, and the futures contract is currently quoted at 2,014.50.

Client 4 wants to pay a fixed rate on a one-year plain vanilla interest rate swap with quarterly payments. Exhibit 1 shows present value factors from the current term structure.

Exhibit 1: Present Value Factors
# Days to Maturity | Present Value Factor
90 | 0.9964
180 | 0.9921
270 | 0.9866
360 | 0.9801"""
add('Derivatives',body,[
 q("The current value of Client 1's FRA is closest to:",[fm(round(val)),fm(round(dis180)),fm(round(undis))],0,
  [f"New 3 × 9 rate (after 30 days a 2 × 8 rate) = [(1 + 0.028 × 240/360) ÷ (1 + 0.010 × 60/360) − 1] × 360/180 = {newr*100:.3f}%. The pay-fixed party gains (3.394% − 2.10%) × 180/360 × 40,000,000 = €{undis:,.0f} at the end of the underlying period, so the value today discounts that amount over 240 days: €{undis:,.0f} ÷ (1 + 0.028 × 240/360) = €{val:,.0f}.",f"This discounts over 180 days, the length of the underlying period, instead of the 240 days from today to its end: €{dis180:,.0f}.",f"This leaves the settlement undiscounted: €{undis:,.0f}."],
  ["pay-fixed 3 × 9 forward rate agreement","the 60-day MRR is 1.00% and the 240-day MRR is 2.80%"],"FRA value: new FRA rate from the two MRRs; value = (new − contract rate) × days/360 × notional, discounted over the days from TODAY to the end of the underlying period.",fixed=True),
 q("The current value of Client 2's forward contract (long position) is closest to:",["€3.06.","€3.50.","€3.91."],2,
  [f"This discounts the share price instead of the forward price: 44.80 ÷ 1.02^0.5 − 41.30 = €{vfC:.2f}.","This is the undiscounted difference between the share price and the forward price (44.80 − 41.30).",f"Value = S − F0 ÷ (1 + r)^(T − t) = 44.80 − 41.30 ÷ 1.02^0.5 = €{vf:.2f}."],
  ["180 days remain until expiration","forward price of €41.30"],"Forward value after initiation (no dividends): V = S_t − F0 ÷ (1 + r)^(T − t); only the forward price is discounted."),
 q("Based on the cost of carry model, the most appropriate arbitrage strategy for Client 3's futures contract is to:",["sell the futures contract, buy the index and borrow at the risk-free rate.","buy the futures contract, sell the index short and lend at the risk-free rate.","take no position, because the futures price is fairly valued."],0,
  [f"The model futures price = 2,000 × 1.024^0.5 − 11 × 1.024^0.25 − 13 = {Feq:.1f}. The quoted price (2,014.50) is above it, so the futures contract is overpriced: sell the futures and replicate by buying the index with borrowed money (cash-and-carry).","This is the reverse cash-and-carry strategy, used when the futures contract is underpriced (quoted below the model price).",f"The quoted price (2,014.50) differs from the model price ({Feq:.1f}), so there is an arbitrage."],
  ["currently quoted at 2,014.50","expected to pay dividends of 11 index points in three months and 13 index points"],"Futures price > model price (Q > F) → sell futures, buy the underlying with borrowed funds; Q < F → the reverse.",fixed=False),
 q("The fixed rate that Client 4 would pay on the swap is closest to:",["0.50%.","2.01%.","2.68%."],1,
  ["This is the rate per quarterly period; it has not been annualized (× 4).",f"Fixed rate = (1 − 0.9801) ÷ (0.9964 + 0.9921 + 0.9866 + 0.9801) × 4 = 0.0199 ÷ 3.9552 × 4 = {sw*100:.2f}%.","This leaves the final present value factor (0.9801) out of the sum of the factors: 0.0199 ÷ 2.9751 × 4 = 2.68%."],
  ["quarterly payments","@row:360"],"Swap fixed rate = (1 − final PV factor) ÷ sum of the PV factors, then annualize (× payments per year)."),
])
# ================= 7 Deriv-B: American put =================
S0,X,u,d,r=50.0,54.0,1.20,0.80,0.05
pi=(1+r-d)/(u-d); Su,Sd=S0*u,S0*d
Puu,Pud,Pdd=0.0,max(X-S0*u*d,0),max(X-S0*d*d,0)
Pu_c=(pi*Puu+(1-pi)*Pud)/(1+r); Pu=max(Pu_c,X-Su)
Pd_c=(pi*Pud+(1-pi)*Pdd)/(1+r); Pd=max(Pd_c,X-Sd)
Pam=(pi*Pu+(1-pi)*Pd)/(1+r); Peu=(pi*Pu_c+(1-pi)*Pd_c)/(1+r)
Pwrong=(0.5*Pu+0.5*Pd)/(1+r)
delta=(Pu-Pd)/(Su-Sd)
assert Pd>Pd_c and Pu==Pu_c and len({round(Pam,2),round(Peu,2),round(Pwrong,2)})==3
assert (round(Pam,2),round(Peu,2),round(Pwrong,2),round(delta,4))==(6.28,5.36,7.69,-0.5929)
body=f"""Nadia Solheim, CFA, values options for a Norwegian asset manager. She uses a two-period binomial model for an American-style put option on Fjell Energy ASA, a non-dividend-paying share.

Exhibit 1: Inputs for the Fjell Energy Put Option
# Item | Value
Current share price | NOK50.00
Exercise price | NOK54.00
Up factor (u) | 1.20
Down factor (d) | 0.80
Risk-free rate per period | 5.0%
Number of periods | 2

Solheim holds 10,000 of these put options and wants to hedge the position with the underlying shares for the first period. She also compares the American put with an otherwise identical European put."""
add('Derivatives',body,[
 q("The value of the American put option on Fjell Energy is closest to:",["NOK5.36.","NOK6.28.","NOK7.69."],1,
  [f"This is the value of the European put, where no early exercise is allowed at the down node (continuation value {Pd_c:.2f} instead of the exercise value 14.00): NOK{Peu:.2f}.",f"π = (1 + r − d) ÷ (u − d) = 0.625. Terminal puts: uu = 0, ud = 6, dd = 22. Up node: 2.14 (exercise value 0). Down node: continuation value 11.43, but exercising gives 54 − 40 = 14, so the node value is 14.00. P0 = [0.625 × 2.14 + 0.375 × 14.00] ÷ 1.05 = NOK{Pam:.2f}.","This uses risk-neutral probabilities of 0.5 instead of 0.625."],
  ["Exercise price | NOK54.00","@row:Up factor (u)","@row:Risk-free rate per period","American-style put option"],"American option: at EVERY node take the larger of the continuation value and the exercise value; π = (1 + r − d) ÷ (u − d).",fixed=True),
 q("To hedge the 10,000 put options for the first period, Solheim should most likely:",["sell 5,929 shares.","buy 4,071 shares.","buy 5,929 shares."],2,
  [f"The put delta is negative, so the hedge requires BUYING shares; selling would add to the exposure.","4,071 would result from using 1 + delta instead of the absolute value of delta.",f"Delta = (P_u − P_d) ÷ (S_u − S_d) = (2.14 − 14.00) ÷ (60 − 40) = {delta:.4f}. A long put position of 10,000 options has a delta of about −5,929 shares, so she buys 5,929 shares."],
  ["hedge the position with the underlying shares for the first period","holds 10,000 of these put options"],"Put delta is negative: a long put is hedged by BUYING |delta| shares per option; delta = (P_u − P_d) ÷ (S_u − S_d).",fixed=False),
 q("The American put is worth more than the European put in this model because early exercise is optimal at the:",["up node, where the put is out of the money.","down node, where the exercise value exceeds the continuation value.","initial node, because the option is always exercised immediately."],1,
  ["At the up node (share price 60) the put is out of the money and its exercise value is zero.","At the down node (share price 40) the exercise value (14.00) exceeds the continuation value (11.43), so early exercise is optimal; this extra value is what the American put has over the European put.","At the initial node the exercise value (4.00) is lower than the value of keeping the option (6.28)."],
  ["American-style put option","@row:Exercise price"],"American put: early exercise is worth it at nodes where the stock is low and the exercise value exceeds the continuation value (deep in the money).",fixed=False),
])
