import math
from lib import *
# ---------------- DERIVATIVES ----------------
# V1 bond futures
c3=0.020; clean=100.80; ds=50
ai=ds/180*c3/2*100; full=clean+ai; wrong_ai=130/180*c3/2*100
dirty=105.20; c10=0.025; ds10=40; T=90; rf=0.018; cf=0.7550; qf=136.00
fv=dirty*(1+rf)**(T/360); aiT=(ds10+T)/180*c10/2*100; ai0=ds10/180*c10/2*100
qfp=(fv-aiT)/cf; qfp_w1=(fv-ai0)/cf; qfp_w2=fv/cf
add("Derivatives",f"""Anika Feld is a fixed-income derivatives trader at Rhinebeck Capital. She and her colleague Tomas Lindgren review two Treasury note futures contracts.

Five-Year Note Futures
The underlying 2.0% semi-annual Treasury note is quoted at a clean price of {clean:.2f}. It has been {ds} days since the last coupon payment and the next coupon is payable in 130 days. Feld asks Lindgren to calculate the full spot price of the note.

Ten-Year Note Futures
The underlying 2.5% semi-annual Treasury note has a dirty price of {dirty:.2f}. It has been {ds10} days since the last coupon payment, and the futures contract expires in {T} days. No coupon is paid before expiration. The quoted futures price is {qf:.2f}, the annualised three-month risk-free rate is {rf*100:.2f}%, and the conversion factor is {cf:.4f}.""",[
 Q("The full spot price of the five-year note is closest to:",f"{full:.2f}",[f"{clean:.2f}",f"{clean+wrong_ai:.2f}"],
   f"Accrued interest uses the days since the last coupon over the 180-day period.\nAI = {ds}/180 × 1.00 = {ai:.4f}\nFull price = {clean:.2f} + {ai:.4f} = {full:.2f}\n{clean+wrong_ai:.2f} wrongly uses the 130 days to the next coupon; {clean:.2f} is the clean price."),
 Q("The equilibrium quoted futures price of the ten-year note is closest to:",f"{qfp:.2f}",[f"{qfp_w1:.2f}",f"{qfp_w2:.2f}"],
   f"Everything is measured at expiration.\nFV of full price = {dirty:.2f} × 1.{int(rf*1000):03d}^(90/360) = {fv:.4f}\nAccrued interest at expiration = ({ds10} + {T})/180 × 1.25 = {aiT:.4f}\nQFP = ({fv:.4f} − {aiT:.4f}) / {cf} = {qfp:.2f}\n{qfp_w1:.2f} subtracts today's accrued interest ({ai0:.4f}) instead of the accrued interest at expiration; {qfp_w2:.2f} subtracts no accrued interest."),
 Q("Based on the equilibrium price, the arbitrage strategy for the ten-year note futures is to:","buy the futures, short sell the note and lend the proceeds",["sell the futures, buy the note with borrowed funds","take no position, because the contract is fairly priced"],
   f"Market price {qf:.2f} < model price {qfp:.2f}, so the futures is undervalued.\nUndervalued → reverse cash-and-carry: Buy futures, Short the bond, Lend (BSL).\nOvervalued (market > model) would be cash-and-carry: Sell futures, Buy bond, Borrow (SBB).")])

# V2 equity forward with dividend
S=62.0; r=0.03; D=1.20
F0=S*(1+r)**0.5-D*(1+r)**0.25
St=58.50; Ft=St*(1+r)**0.25; val=(Ft-F0)/(1+r)**0.25; val_w1=St-F0; val_w2=(Ft-D*(1+r)**0.25-F0)/(1+r)**0.25
add("Derivatives",f"""Hanna Moberg manages equity hedges for Silverlake Pension Fund. On 1 March she enters a long six-month forward contract on 100,000 shares of Torvik AB. Torvik's share price is SEK{S:.2f}, and Torvik will pay a dividend of SEK{D:.2f} per share in three months. The risk-free rate is {r*100:.1f}% a year (annual compounding).

On 1 June, just after the dividend is paid, Torvik's share price is SEK{St:.2f}. The risk-free rate is unchanged.

Moberg's assistant notes that Torvik is considering selling one of its divisions and paying the cash out to shareholders as a one-off liquidating dividend.""",[
 Q("The forward price agreed on 1 March is closest to:",f"SEK{F0:.2f}",[f"SEK{S*(1+r)**0.5:.2f}",f"SEK{S*(1+r)**0.5+D*(1+r)**0.25:.2f}"],
   f"F0 = S0 × (1 + r)^T − FV of dividends\n= {S:.2f} × 1.03^0.5 − {D:.2f} × 1.03^0.25\n= {S*(1+r)**0.5:.4f} − {D*(1+r)**0.25:.4f} = {F0:.2f}\nThe dividend is compounded to expiration (3 months left after it is paid)."),
 Q("On 1 June, the value of the long forward position per share is closest to:",f"−SEK{abs(val):.2f}",[f"−SEK{abs(val_w1):.2f}",f"−SEK{abs(val_w2):.2f}"],
   f"F0 does not change: {F0:.4f}.\nThe dividend has already been paid, so nothing is subtracted now.\nFt = {St:.2f} × 1.03^0.25 = {Ft:.4f}\nValue (long) = (Ft − F0) / 1.03^0.25 = ({Ft:.4f} − {F0:.4f}) / {1.03**0.25:.6f} = {val:.2f}\n{val_w1:.2f} is just S − F0; {val_w2:.2f} subtracts the dividend again even though it was paid."),
 Q("The dividend the assistant describes is best described as a:","liquidating dividend: a payout funded by selling assets, which returns capital to shareholders",["scrip dividend: a dividend paid in new shares instead of cash","special dividend: extra cash paid on top of the regular dividend from earnings"],
   "Liquidating dividend = sell part of the business and pay the proceeds out (return of capital).\nScrip dividend = stock dividend.\nSpecial dividend = extra cash above the regular dividend.")])

# V3 simple equity forward value
F0b=88.40; Sb=94.10; rb=0.022; tl=4/12
valb=(Sb*(1+rb)**tl-F0b)/(1+rb)**tl
add("Derivatives",f"""Ten months ago, Marco Bellini entered a long 14-month forward contract on one share of Lumen Foods, a stock that pays no dividends, at a forward price of €{F0b:.2f}. Today Lumen's share price is €{Sb:.2f}, so four months remain until expiration. The risk-free rate is {rb*100:.1f}% a year with annual compounding.""",[
 Q("The current value of Bellini's forward position is closest to:",f"€{valb:.2f}",[f"€{Sb-F0b:.2f}",f"€{Sb*(1+rb)**tl-F0b:.2f}"],
   f"Value (long) = (FPt − FP0) / (1 + r)^(T−t), with T − t = 4/12.\nFPt = {Sb:.2f} × 1.022^(4/12) = {Sb*(1+rb)**tl:.4f}\nValue = ({Sb*(1+rb)**tl:.4f} − {F0b:.2f}) / 1.022^(4/12) = {valb:.2f}\nEquivalently S − F0/(1+r)^(T−t). €{Sb-F0b:.2f} forgets discounting F0; €{Sb*(1+rb)**tl-F0b:.2f} is not discounted to today.")])

# V4 continuous compounding index forward
I0=4250; d=0.018; rc=0.035; T4=0.75
F04=I0*math.exp((rc-d)*T4)
It=4410; tt=0.5
Ft4=It*math.exp((rc-d)*tt); v4=(Ft4-F04)*math.exp(-rc*tt)
v4w=(It*math.exp((rc-d)*T4)-F04)*math.exp(-rc*T4)
add("Derivatives",f"""Priya Natarajan uses equity index forwards at Kestrel Advisors. She enters a long nine-month forward on the Alba 100 index when the index is at {I0:,}. The index has a continuously compounded dividend yield of {d*100:.1f}% and the continuously compounded risk-free rate is {rc*100:.1f}%.

Three months later the index is at {It:,}. Rates and the dividend yield are unchanged.""",[
 Q("The initial forward price is closest to:",f"{F04:,.2f}",[f"{I0*math.exp(rc*T4):,.2f}",f"{I0*math.exp((rc+d)*T4):,.2f}"],
   f"F0 = S0 × e^((r − δ)T) = {I0:,} × e^((0.035 − 0.018) × 0.75) = {F04:,.2f}\n{I0*math.exp(rc*T4):,.2f} ignores the dividend yield; {I0*math.exp((rc+d)*T4):,.2f} adds it."),
 Q("Three months after initiation, the value of the long forward is closest to:",f"{v4:,.2f}",[f"{v4w:,.2f}",f"{Ft4-F04:,.2f}"],
   f"Use T − t = 0.5 everywhere (not T).\nFt = {It:,} × e^(0.017 × 0.5) = {Ft4:,.2f}\nValue = (Ft − F0) × e^(−0.035 × 0.5) = ({Ft4:,.2f} − {F04:,.2f}) × {math.exp(-rc*tt):.6f} = {v4:,.2f}\n{v4w:,.2f} wrongly uses 0.75 years; {Ft4-F04:,.2f} is not discounted.")])

# V5 pay-fixed swap value
Z=[0.9732,0.9441,0.9135,0.8820]; NP=60e6; old=0.021
sfr=(1-Z[2])/sum(Z[:3]); sfrw=(1-Z[3])/sum(Z)
v5=sum(Z[:3])*(sfr-old)*NP; v5w=sum(Z)*(sfrw-old)*NP
add("Derivatives",f"""One year ago, Aldren Manufacturing entered a four-year interest rate swap with annual payments to pay a fixed rate of {old*100:.2f}% and receive MRR on a notional principal of $60 million. Aldren's treasurer, Gwen Ashby, wants to know the swap's value today, exactly one year after initiation, just after the first settlement. Exhibit 1 shows current present value factors.

Exhibit 1: Present Value Factors
# Maturity (years) | Present value factor
1 | {Z[0]:.4f}
2 | {Z[1]:.4f}
3 | {Z[2]:.4f}
4 | {Z[3]:.4f}""",[
 Q("The fixed rate on a new swap that matches the remaining term of Aldren's swap is closest to:",pct(sfr),[pct(sfrw),pct((1-Z[2])/3)],
   f"Three annual payments remain, so use only Z1, Z2 and Z3.\nSFR = (1 − Z3) / (Z1 + Z2 + Z3) = (1 − {Z[2]}) / {sum(Z[:3]):.4f} = {sfr*100:.4f}%\n{pct(sfrw)} wrongly uses all four factors."),
 Q("The value of the swap to Aldren (the fixed-rate payer) is closest to:",f"${v5:,.0f}",[f"−${v5:,.0f}",f"${v5w:,.0f}"],
   f"Value (pay fixed) = ΣZ × (SFRnew − SFRold) × NP (annual payments, so the period factor is 1)\n= {sum(Z[:3]):.4f} × ({sfr*100:.4f}% − 2.10%) × 60,000,000 = ${v5:,.0f}\nRates rose above the old fixed rate, so the payer of fixed gains.")])

# V6 FRA
NPf=25e6; fra0=0.024; mrr=0.0285
sT=(mrr-fra0)*90/360*NPf; sh=sT/(1+mrr*90/360)
frag=0.027; d180=0.026; v6=(frag-fra0)*0.25*NPf/(1+d180*180/360)
add("Derivatives",f"""Kaito Mori, a treasury analyst at Shirane Bank, entered a long 6 × 9 FRA (pay fixed, receive three-month MRR) on a notional of €25 million at an FRA rate of {fra0*100:.2f}%. The FRA is settled in advance: the settlement amount is paid at FRA expiration, discounted at the three-month MRR.

Situation 1: Ninety days after initiation, the rate on a new 3 × 6 FRA is {frag*100:.2f}% and the 180-day discount rate is {d180*100:.2f}%.
Situation 2: At FRA expiration (month 6), three-month MRR is {mrr*100:.2f}%.""",[
 Q("In Situation 1, the value of Mori's FRA is closest to:",f"€{v6:,.0f}",[f"€{(frag-fra0)*0.25*NPf:,.0f}",f"−€{v6:,.0f}"],
   f"Value (pay fixed) = (FRAg − FRA0) × tm × NP / (1 + D(T−g) × t(T−g))\n= (2.70% − 2.40%) × 90/360 × 25,000,000 / (1 + 0.026 × 180/360)\n= 18,750 / 1.013 = €{v6:,.0f}\nRates rose, so the fixed payer (long FRA) has a positive value."),
 Q("In Situation 2, the settlement amount Mori receives at FRA expiration is closest to:",f"€{sh:,.0f}",[f"€{sT:,.0f}",f"€{(mrr-fra0)*NPf:,.0f}"],
   f"Interest difference paid at T (month 9) = (2.85% − 2.40%) × 90/360 × 25,000,000 = €{sT:,.0f}\nSettled at month 6, so discount for 90 days at MRR: {sT:,.0f} / (1 + 0.0285 × 90/360) = €{sh:,.0f}")])

# V7 equity swap
Zq=[0.9950,0.9896,0.9838,0.9775]; NPe=40e6
cpn=(1-Zq[3])/sum(Zq)
ret=-0.016; pay=NPe*ret; fixedcf=cpn*NPe; net=fixedcf-pay
Zn=[0.9985,0.9930,0.9870,0.9805]; fixleg=cpn*sum(Zn)+Zn[3]; eq=1025/1000; v7=(eq-fixleg)*NPe
add("Derivatives",f"""Liang Wu, a portfolio manager at Corwen Asset Management, enters a one-year equity swap with quarterly settlement on a notional of $40 million. Corwen receives the total return on the Meridian 500 index and pays a fixed rate. No fixed rate is quoted, so Wu must set it at initiation from the present value factors in Exhibit 1 (90-day periods, 360-day year).

Exhibit 1: Present Value Factors at Initiation
# Days | Present value factor
90 | {Zq[0]:.4f}
180 | {Zq[1]:.4f}
270 | {Zq[2]:.4f}
360 | {Zq[3]:.4f}

During the first quarter the Meridian 500 total return is −1.6%.

Sixty days after initiation (before the first settlement) the index has risen from 1,000 to 1,025. Exhibit 2 shows present value factors at that date.

Exhibit 2: Present Value Factors 60 Days After Initiation
# Days | Present value factor
30 | {Zn[0]:.4f}
120 | {Zn[1]:.4f}
210 | {Zn[2]:.4f}
300 | {Zn[3]:.4f}""",[
 Q("The annualised fixed rate on the equity swap is closest to:",pct(cpn*4),[pct(cpn),pct(cpn*2)],
   f"Periodic fixed rate = (1 − Z4) / ΣZ = (1 − {Zq[3]}) / {sum(Zq):.4f} = {cpn*100:.4f}% per quarter\nAnnualised = × 4 = {cpn*400:.3f}%\n{pct(cpn)} is the quarterly rate."),
 Q("For the first quarter, Corwen's net settlement is closest to:",f"Corwen pays ${net:,.0f}",[f"Corwen pays ${-pay-fixedcf:,.0f}",f"Corwen receives ${-pay-fixedcf:,.0f}"],
   f"Corwen pays fixed: {cpn*100:.4f}% × 40,000,000 = ${fixedcf:,.0f}\nCorwen receives the equity return, which is negative: −1.6% × 40,000,000 = −$640,000, so Corwen also pays $640,000.\nNet = {fixedcf:,.0f} + 640,000 = Corwen pays ${net:,.0f}"),
 Q("Sixty days after initiation, the value of the swap to Corwen (receive equity, pay fixed) is closest to:",f"${v7:,.0f}",[f"−${v7:,.0f}",f"${(eq-1)*NPe:,.0f}"],
   f"Fixed leg per $1 = coupon × ΣZ + last Z = {cpn:.6f} × {sum(Zn):.4f} + {Zn[3]} = {fixleg:.6f}\nEquity leg per $1 = Index now / Index at start = 1,025 / 1,000 = 1.025\nValue (receive equity) = (1.025 − {fixleg:.6f}) × 40,000,000 = ${v7:,.0f}")])

# V8 currency swap
eur=30e6; s0=1.10; usd=eur*s0; cu=0.04/2*usd
Zu=[0.9810,0.9620,0.9425,0.9230]; pvusd=cu*sum(Zu)+usd*Zu[3]
pveur=(eur+0.031/2*eur)*0.9885; s1=1.15; v8=pveur-pvusd/s1; v8w=pveur-pvusd/s0
add("Derivatives",f"""Two years ago, Vasquez Industrial, a eurozone company, entered a four-year currency swap with a US bank. At initiation, Vasquez exchanged €30 million for US dollars at the then spot rate of USD{s0:.2f}/EUR. Vasquez pays a fixed USD rate of 4.0% (semi-annual) and receives floating EUR MRR (semi-annual) on the euro notional. Notional amounts are exchanged again at maturity.

Today, four USD payments remain, at 6, 12, 18 and 24 months. The next EUR floating payment is due in 135 days and was set at 3.10% (annualised) for the current 180-day period. Spot is USD{s1:.2f}/EUR.

Exhibit 1: Present Value Factors
# Payment | USD factor | EUR factor
135 days | – | 0.9885
6 months | {Zu[0]:.4f} | –
12 months | {Zu[1]:.4f} | –
18 months | {Zu[2]:.4f} | –
24 months | {Zu[3]:.4f} | –""",[
 Q("The present value of the remaining USD fixed payments, including the notional, is closest to:",f"USD{pvusd:,.0f}",[f"USD{cu*sum(Zu):,.0f}",f"USD{0.04*usd*sum(Zu)+usd*Zu[3]:,.0f}"],
   f"Step 1: USD notional = 30,000,000 × 1.10 = USD{usd:,.0f}\nStep 2: semi-annual coupon = 4%/2 × {usd:,.0f} = USD{cu:,.0f}\nPV = {cu:,.0f} × ({'+'.join(str(z) for z in Zu)}) + {usd:,.0f} × {Zu[3]} = USD{pvusd:,.0f}"),
 Q("The value of the swap to Vasquez, in euros, is closest to:",f"€{v8:,.0f}",[f"€{v8w:,.0f}",f"−€{v8:,.0f}"],
   f"Step 3: EUR floating leg = (30,000,000 + 3.10%/2 × 30,000,000) × 0.9885 = €{pveur:,.0f} (a floating leg is worth par plus the known coupon at the next reset)\nStep 4: convert USD leg at TODAY's spot: {pvusd:,.0f} / 1.15 = €{pvusd/s1:,.0f}\nValue (receive EUR, pay USD) = {pveur:,.0f} − {pvusd/s1:,.0f} = €{v8:,.0f}\n€{v8w:,.0f} wrongly uses the old spot rate 1.10.")])

# V9 option greeks
add("Derivatives","""Ruth Okafor supervises the options desk at Tellis Securities. She reviews four positions: a long call, a short call, a long put and a short put, all on Ardent Mining shares. A client who owns 50,000 Ardent shares asks Okafor how buying put options on Ardent would change the risk of the client's position.""",[
 Q("Which of the four positions has negative gamma and positive theta?","Short put",["Long put","Long call"],
   "Long options (call or put): gamma +, vega +, theta −.\nShort options (call or put): gamma −, vega −, theta +.\nSo the short put (and the short call) has negative gamma and positive theta."),
 Q("Compared with holding the shares alone, the client's position after buying the puts will most likely have:","lower delta and positive gamma",["higher delta and negative gamma","lower delta and negative vega"],
   "Long stock delta = +1. A long put has delta between −1 and 0, so total delta falls.\nA long put has gamma + and vega +, and the stock has none, so the position gains positive gamma and positive vega."),
 Q("Which Greeks are negative for a long put?","Delta and rho",["Gamma and vega","Delta and gamma"],
   "Long put signs: delta −, gamma +, vega +, theta −, rho −.\nHigher rates lower put values, so rho is negative.")])

# V10 swaps for interest rate views
add("Derivatives","""Harlow Utilities has issued fixed-rate bonds. Its CFO, Lena Brandt, says: "I want our debt to behave like floating-rate debt so that the market value of our liabilities is less sensitive to changes in interest rates."

Separately, Harlow's pension consultant, Omar Haddad, expects interest rates to rise sharply over the next year and wants a position that gains if they do, while limiting the loss if he is wrong.""",[
 Q("To meet Brandt's objective, Harlow should enter into a swap in which it:","pays floating and receives fixed",["pays fixed and receives floating","pays fixed and receives an equity return"],
   "Harlow pays fixed on its bonds. Receiving fixed and paying floating on a swap cancels the fixed payments and leaves floating-rate debt, whose value is much less sensitive to rate changes.\nTo reduce interest rate risk of fixed-rate debt: pay-floating interest rate swap."),
 Q("Haddad's view is best expressed with a:","payer swaption",["receiver swaption","receive-fixed interest rate swap"],
   "If rates rise, the right to PAY fixed (and receive floating) at the old, lower rate becomes valuable: payer swap or payer swaption.\nThe swaption limits the loss to the premium if rates do not rise.")])

# V11 implied volatility
add("Derivatives","""Elena Vidal, an options strategist at Bruma Capital, presents three charts of implied volatility for options on the Iberia 35 index.

Chart 1 plots implied volatility against both exercise price and time to expiration.
Chart 2 shows that implied volatility is higher for deep in-the-money and deep out-of-the-money options than for at-the-money options.
Chart 3 shows implied volatility falling steadily as the exercise price rises, and Vidal notes that the slope became steeper during last month's sell-off.""",[
 Q("Implied volatility is best described as the volatility that:","is backed out of market option prices and reflects expected future volatility",["is measured from past returns of the underlying index","the dealer sets so that all exercise prices have the same option price"],
   "Implied volatility = the volatility that makes the model price equal the market option price. It is forward-looking (expected future volatility), unlike historical volatility."),
 Q("Chart 1 is best described as a volatility:","surface",["smile","skew"],
   "Volatility surface = implied volatility across both exercise prices and maturities (a 3-D plot)."),
 Q("Which statement about Charts 2 and 3 is most accurate?","Chart 2 is a volatility smile; Chart 3 is a skew, which steepens when demand for downside hedging rises",["Chart 2 is a volatility skew; Chart 3 is a smile, which flattens when demand for hedging rises","Both charts show a smile, because implied volatility varies with exercise price"],
   "Smile = implied volatility higher for ITM and OTM than ATM (U shape).\nSkew = implied volatility varies with exercise price in one direction (higher for low strikes); it steepens when demand for protective puts rises, so it does not have the shape of a smile.")])

# ---------------- QUANT ----------------
n=60;k=3;SST=0.1250;SSE=0.0480;RSS=SST-SSE
see=math.sqrt(SSE/(n-k-1)); r2=RSS/SST; adj=1-(n-1)/(n-k-1)*(1-r2); F=(RSS/k)/(SSE/(n-k-1))
SSEr=0.0560; Fn=((SSEr-SSE)/2)/(SSE/(n-k-1))
add("Quantitative Methods",f"""Sofia Greco, an analyst at Aurelio Research, regresses the monthly excess return of a consumer-goods portfolio on three factors (market, size and value) using {n} monthly observations. Exhibit 1 shows the ANOVA results.

Exhibit 1: ANOVA for the Three-Factor Model
# Source | Degrees of freedom | Sum of squares
Regression | {k} | {RSS:.4f}
Error | {n-k-1} | {SSE:.4f}
Total | {n-1} | {SST:.4f}

Greco then estimates a restricted model that drops the size and value factors. Its sum of squared errors is {SSEr:.4f}.

Greco also compares two candidate models. Model A has AIC −310 and BIC −298. Model B has AIC −314 and BIC −296.

Greco's colleague states: "Adding another factor will always increase the adjusted R², so we should keep adding factors." """,[
 Q("The standard error of estimate of the three-factor model is closest to:",f"{see:.4f}",[f"{SSE/(n-k-1):.6f}",f"{math.sqrt(RSS/(n-k-1)):.4f}"],
   f"SEE = √MSE = √(SSE / (n − k − 1)) = √({SSE} / 56) = {see:.4f}\n{SSE/(n-k-1):.6f} is the MSE (no square root)."),
 Q("The adjusted R² of the three-factor model is closest to:",f"{adj:.3f}",[f"{r2:.3f}",f"{1-r2:.3f}"],
   f"R² = RSS / SST = {RSS:.4f} / {SST} = {r2:.4f}\nAdjusted R² = 1 − [(n − 1)/(n − k − 1)] × (1 − R²) = 1 − (59/56) × {1-r2:.4f} = {adj:.3f}"),
 Q("The F-statistic for testing whether size and value are jointly zero is closest to:",f"{Fn:.2f}",[f"{F:.2f}",f"{((SSEr-SSE)/2)/(SSEr/(n-1-1)):.2f}"],
   f"Nested F = [(SSE_R − SSE_U)/q] / [SSE_U/(n − k − 1)] with q = 2\n= [({SSEr} − {SSE})/2] / [{SSE}/56] = {Fn:.2f}\n{F:.2f} is the overall F-test (RSS/k ÷ SSE/(n−k−1)), which asks whether at least one factor explains Y."),
 Q("Based on AIC and BIC, which model is preferred for forecasting and which for goodness of fit?","Model B for forecasting; Model A for goodness of fit",["Model A for forecasting; Model B for goodness of fit","Model B for both"],
   "Lower is better for both.\nAIC (better forecast): Model B (−314 < −310).\nBIC (better goodness of fit, heavier penalty for extra variables): Model A (−298 < −296)."),
 Q("Greco's colleague's statement is:","incorrect, because adjusted R² can fall when a variable is added and can even be negative",["correct, because R² never falls when a variable is added","correct, because adjusted R² always lies between 0 and 1"],
   "R² never falls when a variable is added, but adjusted R² penalises extra variables: it falls when the new variable adds little, and it can be negative.")])

add("Quantitative Methods","""Arjun Mehta reviews three regressions built by junior analysts at Kittering Partners.

Regression 1 explains bank loan growth. A Breusch–Pagan test is significant at the 1% level.
Regression 2 explains housing starts with five macroeconomic variables. Its R² is 0.91 and the F-statistic is significant at the 1% level, but none of the five t-statistics is significant at the 5% level.
Regression 3 is a time-series regression of monthly sales. A Breusch–Godfrey test is significant. Mehta also reports a Durbin–Watson statistic of 1.20; with this sample size, the lower and upper critical values are 1.39 and 1.60.""",[
 Q("In Regression 1, the most likely consequence of the test result is that the t-statistics are:","too high, so the analyst may wrongly reject true null hypotheses; robust (White) standard errors fix this",["too low, so significant variables look insignificant; adding variables fixes this","unaffected, because only the F-test is affected"],
   "Breusch–Pagan significant → conditional heteroskedasticity.\nStandard errors too low → t-statistics too high → Type I errors. The F-test is unreliable.\nFix: robust (White-corrected) standard errors."),
 Q("Regression 2 most likely suffers from:","multicollinearity, which can be checked with variance inflation factors",["serial correlation, which can be checked with the Durbin–Watson test","heteroskedasticity, which can be checked with the Breusch–Pagan test"],
   "Signals of multicollinearity: large R², significant F, but low or insignificant t-statistics (inflated standard errors).\nDetect with VIF; fix by dropping or combining variables or increasing the sample."),
 Q("Based on the Durbin–Watson statistic, Regression 3 shows:","positive serial correlation",["no serial correlation","an inconclusive result"],
   "Zones: 0 to dl = reject, positive serial correlation; dl to du = inconclusive; du to 4 − du = no serial correlation; then inconclusive; 4 − dl to 4 = negative serial correlation.\n1.20 < dl = 1.39 → positive serial correlation."),
 Q("The most appropriate correction for Regression 3 is to use:","Newey–West (serial-correlation consistent) standard errors",["White standard errors only","a smaller number of independent variables"],
   "Serial correlation: test with Breusch–Godfrey (or DW), correct with robust Newey–West standard errors. White standard errors correct heteroskedasticity only.")])

b0=0.96;b1=0.60;mr=b0/(1-b1); xt=3.10
add("Quantitative Methods",f"""Claire Dubois models quarterly time series at Nordhavn Bank.

Model 1 is an AR(1) model of a quarterly inflation measure (in %): x(t) = {b0:.2f} + {b1:.2f} x(t−1). The latest value of x is {xt:.2f}.

Model 2 is an AR(1) model of quarterly retail sales growth. The autocorrelations of its residuals are insignificant at lags 1 to 3, but the residual autocorrelation at lag 4 has a p-value of 0.012.

Model 3 is a log-linear trend model of annual revenue (in millions): ln(revenue) = 4.20 + 0.035t. The next period is t = 41.

Dubois also wants to regress one series on another. Both series have a unit root, and an Engle–Granger test shows they are cointegrated.""",[
 Q("Based on Model 1, the inflation measure next quarter is most likely to:",f"fall, because {xt:.2f} is above the mean-reverting level of {mr:.2f}",[f"rise, because {xt:.2f} is below the mean-reverting level of {b0/(1+b1):.2f}","stay the same, because the slope coefficient is less than 1"],
   f"Mean-reverting level = b0 / (1 − b1) = {b0} / {1-b1:.2f} = {mr:.2f}\nCurrent value {xt} > {mr:.2f} → the series is expected to fall toward the mean.\nCheck: forecast = {b0} + {b1} × {xt} = {b0+b1*xt:.2f} < {xt}."),
 Q("Based on Model 2, Dubois should conclude that the model:","shows seasonality, and a lag-4 term should be added",["is correctly specified, because the first three lags are insignificant","has a unit root, so the series should be first-differenced"],
   "Quarterly data → check the 4th lag (monthly data → the 12th lag).\np-value 0.012 < 0.05 → significant seasonal autocorrelation → add x(t−4)."),
 Q("Based on Model 3, forecast revenue for t = 41 is closest to:",f"{math.exp(4.20+0.035*41):.1f} million",[f"{4.20+0.035*41:.2f} million",f"{math.exp(4.20)*1.035*41/41:.1f} million"],
   f"ln(revenue) = 4.20 + 0.035 × 41 = {4.20+0.035*41:.3f}\nRevenue = e^{4.20+0.035*41:.3f} = {math.exp(4.20+0.035*41):.1f}\nIf ln(1 + x) = a, then 1 + x = e^a: undo the log with e."),
 Q("Regarding the regression of one unit-root series on the other, the results are:","valid, because the two series are cointegrated",["invalid, because both series have a unit root","valid only if each series is first-differenced into its own AR(1) model"],
   "Neither has a unit root → valid. Only one has a unit root → invalid. Both have unit roots and are cointegrated → valid. Both have unit roots and are not cointegrated → invalid."),
 Q("A time series is covariance stationary if:","its mean, variance and covariance with its own lags are constant and finite",["its values never move away from their mean","its slope coefficient in an AR(1) model is greater than 1"],
   "Covariance stationarity: constant and finite expected value, constant and finite variance, and constant and finite covariance with leading or lagged values.")])

add("Quantitative Methods","""An analyst invests a fixed amount of money each month in a fund (cost averaging). Over five months the fund's unit price changes each month. She computes the arithmetic, geometric and harmonic means of the unit prices.""",[
 Q("For a set of positive unit prices that are not all equal, the relationship between the three means is:","harmonic < geometric < arithmetic",["geometric < harmonic < arithmetic","arithmetic < geometric < harmonic"],
   "For positive values that are not all equal: harmonic mean < geometric mean < arithmetic mean. They are equal only if all values are the same. The harmonic mean gives the average cost per unit under cost averaging.")])

add("Quantitative Methods","""Jonas Weber is building trading models at Halcyon Quant.

Model X: Weber has 120 candidate features to predict monthly returns and wants an algorithm that shrinks the coefficients of unimportant features toward zero and removes some of them.

Model Y: Weber wants to sort companies into "likely default" and "unlikely default" using a linear boundary that separates the two classes with the widest margin.

Model Z: Weber wants to classify stocks as "buy" or "sell". The relationships between the features and the classification are non-linear and include interactions.""",[
 Q("The algorithm best suited to Model X is:","LASSO, a penalised regression",["k-means clustering","principal components analysis"],
   "LASSO (least absolute shrinkage and selection operator) is a penalised regression: it adds a penalty on the size of coefficients, shrinking some to zero and so selecting features. It is supervised."),
 Q("The algorithm best suited to Model Y is a:","support vector machine",["hierarchical clustering algorithm","deep learning network with unlabelled data"],
   "SVM = linear classification algorithm that separates the data into one of two classes with the widest margin. Logit/probit models are also classification models for two classes."),
 Q("The algorithm best suited to Model Z is:","classification and regression tree (CART)",["LASSO","simple linear regression"],
   "Two classes (buy/sell) with non-linear relationships and interactions between features → CART.")])
