from lib17 import *
# ===== Deriv (Mock 17, from Mock 7 Q23, Mock 6 Q36, Mock 10 Q24, Mock 8 Q1): currency swap rate received, implied volatility comments, American put, bond futures arbitrage profit =====
chf=[0.45,0.60,0.72,0.85,0.96]; us=[3.10,3.25,3.38,3.50,3.60]
pc=[1/(1+y/100)**(i+1) for i,y in enumerate(chf)]; pu=[1/(1+y/100)**(i+1) for i,y in enumerate(us)]
rus=(1-pu[4])/sum(pu); rch=(1-pc[4])/sum(pc); geo=1
for y in us: geo*=1+y/100
geo=geo**0.2-1
assert (round(rus*100,2),round(rch*100,2),round(geo*100,2))==(3.58,0.96,3.37)
assert [round(x,4) for x in pu]==[0.9699,0.938,0.9051,0.8714,0.8379] and [round(x,4) for x in pc]==[0.9955,0.9881,0.9787,0.9667,0.9534]
S,X,r,u,d=90,95,0.03,1.20,0.85; pi=(1+r-d)/(u-d)
Puu,Pud,Pdd=0,X-S*u*d,X-S*d*d
Pu=(pi*Puu+(1-pi)*Pud)/(1+r); Pdc=(pi*Pud+(1-pi)*Pdd)/(1+r); Pd=max(Pdc,X-S*d)
P0=(pi*Pu+(1-pi)*Pd)/(1+r); Pe=(pi*Pu+(1-pi)*Pdc)/(1+r)
Pd5=max((0.5*Pud+0.5*Pdd)/(1+r),X-S*d); Pu5=(0.5*Pud)/(1+r); P5=(0.5*Pu5+0.5*Pd5)/(1+r)
assert (round(P0,2),round(Pe,2),round(P5,2))==(9.48,8.17,9.73) and Pd>Pdc
rf,T,B0,AI0,AIT,Q,CF=0.005,0.5,108.20,0.10,0.32,114.40,0.95
F0=(1+rf)**T*(B0+AI0); adj=CF*Q+AIT
prof=(adj-F0)/(1+rf)**T; nodisc=adj-F0; noai=(adj-(1+rf)**T*B0)/(1+rf)**T
assert (round(prof,4),round(nodisc,4),round(noai,4))==(0.4285,0.4296,0.5285),(prof,nodisc,noai)
body="""Part 1
Beat Hofmann is the CEO of the Rhine Foundation ("the Foundation"), an organization located in Zurich, Switzerland, whose mission is to support rural healthcare initiatives. The Foundation has a CHF220 million portfolio consisting entirely of actively managed Swiss equities. The portfolio manager, Anja Keller, is permitted to use derivatives to control risks within the portfolio and to synthetically alter positions without trading the underlying securities, many of which are somewhat illiquid.

Keller tells Hofmann she is considering entering into a currency swap because the Foundation has a number of long-term contracts to purchase supplies and equipment for rural clinics and these contracts are priced in US dollars. She explains, "A fixed-for-fixed currency swap would help reduce the risk from fluctuating USD/CHF exchange rates by providing fixed US dollar payments in exchange for fixed Swiss franc payments. I'm looking at a five-year swap with annual payments. I've done some analysis of this swap based on current Swiss and US interest rates and present value factors, which I'm providing to you in Exhibit 1."

Exhibit 1: Swiss and US Interest Rates and PV Factors
# T | Swiss Treasury Yield (%) | Present Value CHF1 | US Treasury Yield (%) | Present Value USD1
1 | 0.45 | 0.9955 | 3.10 | 0.9699
2 | 0.60 | 0.9881 | 3.25 | 0.9380
3 | 0.72 | 0.9787 | 3.38 | 0.9051
4 | 0.85 | 0.9667 | 3.50 | 0.8714
5 | 0.96 | 0.9534 | 3.60 | 0.8379

Part 2
Ines Berger is CEO and chief investment officer of Hollis Capital, a registered investment advisory firm. She is working with Marco Tillman, head trader, and Priya Das, a new analyst. They meet to discuss option valuation methodologies in the context of the firm's use of derivatives to manage client portfolios.

Das notes that the implied volatility of one call option on Weston stock is a given market input. With respect to other call options on Weston stock, Das states the volatility surface provides a visualization of how implied volatility varies across both exercise price and time to maturity. Berger adds that implied volatility is useful in assessing the market price of risk since it is calculated on the basis of the historical volatility in the stock price. Tillman concurs and adds that the volatility smile and skew typically have identical shapes whenever the market price of hedging is rising.

Part 3
Berger next considers an American-style put option on Dunmore Corporation that matures in two years. She values it with a two-period binomial option pricing model and collects the relevant information in Exhibit 2. Dunmore does not pay dividends.

Exhibit 2: Binomial Inputs for the Dunmore Put
# Item | Value
Current share price of Dunmore | $90
Exercise price of Dunmore put option | $95
Risk-free rate (compounded annually) | 3%
Up factor (u) | 1.20
Down factor (d) | 0.85

Part 4
Tomas Lindgren is a derivatives trader for Northern Shores Investments. The firm seeks arbitrage opportunities in the forward and futures markets using the carry arbitrage model.

Lindgren identifies an arbitrage opportunity relating to a fixed-income futures contract and its underlying bond. Current data on the futures contract and underlying bond are presented in Exhibit 3. The current annual compounded risk-free rate is 0.50%.

Exhibit 3: Current Data for Futures and Underlying Bond
# Item | Value
Futures contract |
Quoted futures price | 114.40
Conversion factor | 0.95
Time remaining to contract expiration | Six months
Accrued interest over life of futures contract | 0.00
Underlying bond |
Quoted bond price | 108.20
Accrued interest since last coupon payment | 0.10
Accrued interest at futures contract expiration | 0.32"""
add('M17','Derivatives',body,[
 q("Based on the information in Exhibit 1, the interest rate that the Foundation would receive in the proposed currency swap is closest to:",["0.96%.","3.37%.","3.58%."],2,
  ["Incorrect. This is the Swiss franc fixed rate, which the Foundation pays, not receives.","Incorrect. This is the geometric average of the US interest rates, not the swap fixed rate.","Correct. The Foundation's contracts are priced in US dollars, so it receives the US dollar fixed rate: (1 − PV5) ÷ ΣPV = (1 − 0.8379) ÷ (0.9699 + 0.9380 + 0.9051 + 0.8714 + 0.8379) = 0.1621 ÷ 4.5223 = 3.58%."],
  ["these contracts are priced in US dollars","providing fixed US dollar payments in exchange for fixed Swiss franc payments","@row:5"],"Currency swap: decide which currency you RECEIVE (the one your liabilities are priced in) and use that currency's PV factors: fixed rate = (1 − final PV) ÷ ΣPV.",fixed=True),
 q("Whose comment regarding implied volatility is most likely correct?",["Berger's","Tillman's","Das's"],2,
  ["Incorrect. Implied volatility is backed out of market option prices and is forward looking; it is not calculated from historical volatility.","Incorrect. When demand for hedging rises the skew steepens, so skew and smile do not have identical shapes.","Correct. The volatility surface shows implied volatility across both exercise prices and maturities."],
  ["volatility surface provides a visualization of how implied volatility varies across both exercise price and time to maturity","calculated on the basis of the historical volatility"],"Implied volatility = market price of options, forward looking; volatility surface = exercise price × maturity.",fixed=False),
 q("Using the two-period binomial option pricing model, the value of the American put on Dunmore Corporation is closest to:",["$8.17.","$9.48.","$9.73."],1,
  ["This is the European put value: it ignores early exercise at the down node.","Risk-neutral probability = (1 + 0.03 − 0.85) ÷ (1.20 − 0.85) = 0.5143. Put payoffs at T = 2: 0 (129.6), 3.20 (91.8), 29.975 (65.025). Up node: 1.509. Down node: continuation value 15.73 but early exercise gives 95 − 76.5 = 18.50, so use 18.50. P0 = [0.5143 × 1.509 + 0.4857 × 18.50] ÷ 1.03 = $9.48.","This uses risk-neutral probabilities of 0.5 instead of 0.5143: $9.73."],
  ["@row:Current share price of Dunmore","@row:Exercise price of Dunmore put option","@row:Up factor (u)","American-style put option"],"American put: at each node compare continuation value with immediate exercise value; use risk-neutral probability (1 + r − d) ÷ (u − d).",fixed=True),
 q("Based on Exhibit 3 and assuming annual compounding, the arbitrage profit on the bond futures contract is closest to:",["0.4285.","0.4296.","0.5285."],0,
  ["No-arbitrage futures price = FV[B0 + AI0] = 1.005^0.5 × (108.20 + 0.10) = 108.5704. Adjusted futures price = 0.95 × 114.40 + 0.32 = 109.00. The contract is overpriced by 0.4296; the arbitrage profit is its present value: 0.4296 ÷ 1.005^0.5 = 0.4285.","This does not discount the difference to today.","This leaves out the accrued interest since the last coupon (0.10) when computing the no-arbitrage price."],
  ["@row:Quoted futures price","@row:Conversion factor","@row:Accrued interest at futures contract expiration"],"Bond futures arbitrage: fair price = FV[bond + AI0 − PV coupons]; compare with CF × quoted price + AI at expiration; profit = PV of the difference.",fixed=True),
])
