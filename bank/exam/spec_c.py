import math
from lib import *
# ---------------- FIXED INCOME (rest) ----------------
add("Fixed Income","""Bettina Kral teaches a term structure workshop at Danube Fixed Income. She describes four models of the short-term interest rate r:

Model 1 (Cox–Ingersoll–Ross): dr = a(b − r)dt + σ√r dz
Model 2 (Vasicek): dr = a(b − r)dt + σ dz
Model 3 (Ho–Lee): dr = θ(t)dt + σ dz
Model 4 (Kalotay–Williams–Fabozzi): d ln(r) = θ(t)dt + σ dz

A participant asks which models are calibrated so that they reproduce current market prices of benchmark bonds.""",[
 Q("Which of Models 1 and 2 can produce negative interest rates?","Model 2 only",["Model 1 only","Both Model 1 and Model 2"],
   "In CIR, volatility is σ√r, so it shrinks to zero as r approaches zero: rates cannot become negative.\nIn Vasicek, volatility σ is constant and does not depend on r, so rates can become negative."),
 Q("In which model does interest rate volatility increase as the level of rates rises?","Model 1",["Model 2","Model 3"],
   "CIR: the volatility term σ√r grows with r. Vasicek and Ho–Lee have constant volatility σ."),
 Q("Models 3 and 4 are best described as:","arbitrage-free models, which take current bond prices as given and assume they are correctly priced",["equilibrium models, which are built from macroeconomic assumptions and need fewer parameters","equilibrium models that allow rates to drift to a long-run level b"],
   "Arbitrage-free models (Ho–Lee, KWF) use a time-dependent drift θ(t) calibrated to market prices, assuming those bonds are correctly priced.\nEquilibrium models (CIR, Vasicek) describe the economy, mean-revert to b and need fewer parameters to estimate."),
 Q("Compared with Model 3, a key feature of Model 4 is that:","rates cannot become negative, because the model describes the logarithm of r",["volatility rises with the level of rates through √r","the model is an equilibrium model with mean reversion"],
   "KWF models ln(r), so r = e^(ln r) is always positive (log-normal rates). Ho–Lee models r itself with constant volatility, so rates can go negative.")])

add("Fixed Income","""Kral gives the class a two-asset example. Both assets are risk free and mature at time 1.

Exhibit 1: Two Risk-Free Assets
# Asset | Price today | Payoff at time 1
A | 500 | 520
B | 1,000 | 1,060""",[
 Q("Based on the dominance principle, the arbitrage strategy and its profit at time 1 are:","short sell two units of A, buy one unit of B: profit of 20",["buy two units of A, short sell one unit of B: profit of 20","buy one unit of A, short sell one unit of B: profit of 60"],
   "Price per 1 of payoff: A = 500/520 = 0.9615; B = 1,000/1,060 = 0.9434. B is cheaper.\nBuy the cheap asset, sell the expensive one at zero net cost: short 2 A (+1,000), buy 1 B (−1,000).\nTime 1: receive 1,060 from B, pay 2 × 520 = 1,040 on A → profit 20.")])

r1,r2,r3=0.020,0.031,0.038
pv=4/(1+r1)+4/((1+r1)*(1+r2))+104/((1+r1)*(1+r2)*(1+r3))
pvw=4/(1+r1)+4/(1+r2)**2+104/(1+r3)**3
add("Fixed Income",f"""Kral then shows one interest rate path generated from a calibrated binomial tree. The tree has nodes at times 0, 1, 2 and 3. Along the path the one-year rates are {r1*100:.1f}% (time 0 to 1), {r2*100:.1f}% (time 1 to 2), {r3*100:.1f}% (time 2 to 3) and 4.4% (time 3 to 4).

She values a three-year, 4% annual-coupon, option-free bond along this path using the pathwise method.""",[
 Q("The value of the bond along this path is closest to:",f"{pv:.2f}",[f"{pvw:.2f}",f"{4/(1+r1)+4/((1+r1)*(1+r2))+4/((1+r1)*(1+r2)*(1+r3))+104/((1+r1)*(1+r2)*(1+r3)*1.044):.2f}"],
   f"Pathwise: discount each cash flow by the product of the one-year rates along the path (not by spot rates).\n4/1.020 + 4/(1.020 × 1.031) + 104/(1.020 × 1.031 × 1.038) = {pv:.2f}\nA three-year bond needs only the first three rates; the 4.4% rate (time 3 to 4) is not used.\n{pvw:.2f} wrongly treats the path rates as spot rates."),
 Q("For an option-free bond, the value found by discounting at spot rates compared with the value from a calibrated binomial tree is:","the same, whatever volatility is assumed",["higher when the assumed volatility is higher","lower when the assumed volatility is higher"],
   "A calibrated tree reprices the benchmark bonds, so an option-free bond has the same value from the tree as from spot rates, regardless of the volatility used. Volatility matters only for bonds with embedded options.")])

add("Fixed Income","""Before valuing callable bonds, Danube's analysts calibrate a binomial interest rate tree. A trainee lists the inputs he thinks are needed:

Input 1: An assumed interest rate volatility.
Input 2: An interest rate model, such as a log-normal model.
Input 3: The observed market values of benchmark bonds.
Input 4: Analysts' forecasts of future interest rates.""",[
 Q("Which inputs are needed to calibrate the tree?","Inputs 1, 2 and 3 only",["Inputs 1, 2, 3 and 4","Inputs 1 and 4 only"],
   "Calibration needs volatility, an interest rate model (for example log-normal rates) and the market values of benchmark bonds. Rates in the tree are not forecasts; they are random (stochastic) paths consistent with today's prices.")])

add("Fixed Income","""Marta Quiroga, an analyst at Solaris Bank, writes a note for clients on yields and spreads.

Statement 1: "A bond's yield to maturity is the return an investor earns only if the bond is held to maturity, there is no default, and all coupons are reinvested at the yield to maturity."
Statement 2: "In countries where government bonds trade with low liquidity, the swap curve is often a better benchmark than the government curve."
Statement 3: "The TED spread and the MRR–OIS spread both measure liquidity and credit risk in the banking system."

Quiroga also describes a measure of the spread that, when added to each spot rate on the benchmark curve, makes the present value of a bond's cash flows equal to its market price. She notes that SOFR is a secured overnight rate based on the repo market.""",[
 Q("If the coupons of a bond held to maturity are reinvested at a rate below its yield to maturity, the realised return will be:","below the yield to maturity",["equal to the yield to maturity","above the yield to maturity"],
   "One YTM assumption is that coupons are reinvested at the YTM. A lower reinvestment rate gives a realised return below the YTM."),
 Q("Which of Quiroga's statements are correct?","Statements 1, 2 and 3",["Statements 1 and 2 only","Statement 3 only"],
   "All three are correct. TED = three-month MRR − T-bill yield; MRR–OIS = MRR − overnight indexed swap rate; both reflect bank credit and liquidity risk. Where government bonds are illiquid, swap curves are a superior benchmark."),
 Q("The spread measure Quiroga describes is the:","Z-spread",["I-spread","swap spread"],
   "Z-spread: constant spread added to each benchmark spot rate so that PV of cash flows = market price.\nI-spread = bond yield − swap rate of the same maturity.\nSwap spread = swap rate − government bond yield.")])

s3,s4,o3,o4,f3,f4=1.38,1.51,0.62,0.78,0.70,0.86; t=0.40
sw=s3+t*(s4-s3); on=o3+t*(o4-o3); of=f3+t*(f4-f3)
add("Fixed Income",f"""Quiroga needs the swap spread for a corporate bond that matures in 3.40 years. Exhibit 1 gives the data she has.

Exhibit 1: Yields and Swap Rates (%)
# | 3 years | 4 years
Off-the-run government yield | {f3:.2f} | {f4:.2f}
On-the-run government yield | {o3:.2f} | {o4:.2f}
Swap rate | {s3:.2f} | {s4:.2f}""",[
 Q("Using linear interpolation, the swap spread for 3.40 years is closest to:",f"{(sw-on)*100:.0f} bps",[f"{(sw-of)*100:.0f} bps",f"{sw*100:.0f} bps"],
   f"Swap spread = swap rate − on-the-run government yield, both interpolated to 3.40 years.\nSwap rate = {s3} + 0.40 × ({s4} − {s3}) = {sw:.3f}%\nOn-the-run = {o3} + 0.40 × ({o4} − {o3}) = {on:.3f}%\nSpread = {sw:.3f} − {on:.3f} = {sw-on:.3f}% ≈ {(sw-on)*100:.0f} bps\n{(sw-of)*100:.0f} bps uses the off-the-run yield; {sw*100:.0f} bps is the swap rate, not the spread.")])

f=0.032; fp=1/(1+f)**3
add("Fixed Income",f"""Quiroga's colleague, Diego Navas, computes forward prices. The three-year forward rate two years from now, f(2,3), is {f*100:.1f}% (annual compounding).

Navas also comments on interest rate volatility: "Volatility of short-term rates is driven mainly by monetary policy, while volatility of long-term rates is driven mainly by expectations for the economy and inflation." """,[
 Q("The forward price, two years from now, of a zero-coupon bond paying 1 at year 5 is closest to:",f"{fp:.4f}",[f"{1/(1+f):.4f}",f"{1/(1+f)**5:.4f}"],
   f"Forward price F(j,k) = 1 / (1 + f(j,k))^k = 1 / 1.032³ = {fp:.4f}\nThe exponent is k (the 3-year length of the forward period), not j or j + k."),
 Q("Regarding Navas's comment, short-term rates are generally:","more volatile than long-term rates, and the drivers he names are correct",["less volatile than long-term rates, because monetary policy is predictable","equally volatile, and the drivers he names are reversed"],
   "Short-term volatility comes from monetary policy and is usually higher; long-term volatility reflects the economy and inflation expectations.")])

sp5,sp3=0.030,0.024; buy=100/(1+sp5)**5; sell=100/(1+sp3)**3; H=2; ret=(sell/buy)**(1/H)-1
add("Fixed Income",f"""Navas considers rolling down the yield curve. He would buy a five-year zero-coupon government bond and sell it after two years. The five-year spot rate is {sp5*100:.1f}% and the three-year spot rate is {sp3*100:.1f}%. He assumes the yield curve stays stable.

Navas also compares his projected spot curve with the current forward curve. For a two-year bond, he expects future spot rates to be below the current forward rates.""",[
 Q("Navas's annualised return from rolling down the curve is closest to:",pct(ret),[pct(sell/buy-1),pct(sp5)],
   f"Buy price = 100 / 1.030⁵ = {buy:.4f}\nSell price after 2 years (now a 3-year bond) = 100 / 1.024³ = {sell:.4f}\nAnnualised return = (sell / buy)^(1/H) − 1 with H = 2 = ({sell:.4f}/{buy:.4f})^(1/2) − 1 = {ret*100:.2f}%\n{pct(sell/buy-1)} is the two-year total return, not annualised."),
 Q("If the projected spot curve is below the current forward curve, the bond is:","undervalued, so Navas should buy it",["overvalued, so Navas should sell it","fairly valued, because forward rates are unbiased"],
   "Projected spot below forward → future prices higher than the forward prices imply → bond undervalued → buy.\nProjected spot above forward → overvalued → sell.")])

add("Fixed Income","""Ilse Brandt, a portfolio strategist, describes three past changes in the yield curve.

Episode 1: Short-term yields fell much more than long-term yields during a recession.
Episode 2: During an economic expansion, short-term yields rose more than long-term yields as the central bank tightened.
Episode 3: During a market panic, long-term yields fell much more than short-term yields as investors rushed into long-dated government bonds.""",[
 Q("Episode 1 is best described as a:","bullish steepening",["bearish flattening","bullish flattening"],
   "Bullish = yields fall (prices rise). Short yields fall more → curve steepens → bullish steepening (typical in recessions when the central bank cuts)."),
 Q("Episode 2 is best described as a:","bearish flattening",["bearish steepening","bullish flattening"],
   "Bearish = yields rise. Short yields rise more than long → curve flattens → bearish flattening (expansion, tightening)."),
 Q("Episode 3 is a bullish flattening, also called a flight to quality. A manager who expected it should have:","extended duration and used a barbell",["shortened duration and used a bullet","bought short-term bills only"],
   "Long yields fall most → long bonds gain most → extend duration, using a barbell with long bonds.")])

add("Fixed Income","""Brandt summarises theories of the term structure for clients.

Theory A: Long-term rates are the average of expected future short-term rates; there is no risk premium. It applies only to risk-free assets.
Theory B: Over short holding periods all bonds earn the same return, but long holding periods include a risk premium.
Theory C: Investors demand a premium for holding longer maturities, and the premium rises with maturity.
Theory D: Investors and borrowers stay in their own maturity segments and never move to other maturities.
Theory E: Investors prefer certain maturities but will move to another maturity if the extra yield is large enough.""",[
 Q("Theory B is best described as the:","local expectations theory",["unbiased (pure) expectations theory","liquidity preference theory"],
   "Local expectations: short-term holding returns are the same for all bonds (the risk-free rate); a risk premium appears only over longer holding periods. Theory A is the unbiased (pure) expectations theory."),
 Q("Theory C is best described as the:","liquidity preference theory",["preferred habitat theory","segmented markets theory"],
   "Liquidity preference: a liquidity (term) premium that increases with maturity."),
 Q("Which theory says investors leave their preferred maturity when they are paid enough to do so?","Theory E, the preferred habitat theory",["Theory D, the segmented markets theory","Theory A, the pure expectations theory"],
   "Preferred habitat: investors have favourite maturities but move if compensated. Segmented markets: they never move.")])

add("Fixed Income","""Yusuf Demir measures the interest rate risk of three bonds with the same issuer and maturity: Bond X (option free), Bond Y (callable, with the call option near the money) and Bond Z (putable, with the put option near the money). He computes one-sided durations (up = rates rise, down = rates fall) and key rate durations.""",[
 Q("Which statement about one-sided durations is most accurate?","For Bond Y the one-sided up-duration is greater than the down-duration; for Bond Z it is the reverse",["For Bond Y the down-duration is greater than the up-duration; for Bond Z it is the reverse","For all three bonds the up- and down-durations are equal"],
   "Callable near the money: when rates fall the call caps the price, so down-duration is small → up > down.\nPutable near the money: when rates rise the put floors the price, so up-duration is small → up < down.\nOption-free: up ≈ down."),
 Q("Compared with Bond X, the one-sided down-duration of Bond Y is most likely:","lower",["higher","the same"],
   "When the call is at or near the money, a fall in rates barely raises the callable bond's price, so its down-duration is lower than that of the comparable option-free bond."),
 Q("For Bond X, the key rate duration is most likely highest at:","the bond's maturity",["the one-year key rate","the first coupon date"],
   "An option-free bond's largest key rate duration is at its maturity, where the principal is paid. For a callable or putable bond, the key rate near the likely exercise date can be the largest."),
 Q("The effective durations of Bonds Y and Z compared with Bond X are:","less than or equal to that of Bond X",["greater than or equal to that of Bond X","greater for Bond Y and less for Bond Z"],
   "Both embedded options shorten the effective duration: effective duration of a callable or putable bond ≤ effective duration of the option-free bond.")])

add("Fixed Income","""Demir also analyses a callable, putable convertible bond issued by Ostrava Motors. The conversion price is well above Ostrava's current share price. Over the next month Ostrava's share price rises 6% but remains below the conversion price.""",[
 Q("The value of the callable, putable convertible bond is best expressed as:","straight bond + call option on the stock − call option on the bond + put option on the bond",["straight bond + call option on the stock + call option on the bond − put option on the bond","straight bond − call option on the stock − call option on the bond + put option on the bond"],
   "Investor owns the conversion option (call on stock) and the put on the bond, and is short the issuer's call on the bond:\nstraight + call(stock) − call(bond) + put(bond)."),
 Q("After the 6% rise in Ostrava's share price, the convertible's price most likely:","rises only slightly, because the conversion option is still out of the money",["rises by about 6%, because it tracks the share price","falls, because the issuer is more likely to call the bond"],
   "With the share price below the conversion price the bond behaves like a straight bond, so share price moves pass through only weakly. Only when the share price exceeds the conversion price does the bond start to track the stock.")])

add("Fixed Income","""Ana Petrova trades standardised CDS contracts at Vistula Bank. The Lark Corp. CDS has a standard coupon of 1%, and its current spread is 1.8%. The Mosel Inc. CDS has a standard coupon of 5%, and its current spread is 3.6%.""",[
 Q("If Petrova buys protection on Lark Corp., at initiation she will most likely:","pay an upfront premium to the protection seller",["receive an upfront premium from the protection seller","pay nothing upfront, because standard contracts trade at par"],
   "Spread > coupon → the coupon is too low for the risk → the protection buyer pays the difference upfront (CDS price below 100)."),
 Q("If Petrova sells protection on Mosel Inc., at initiation she will most likely:","pay an upfront premium to the protection buyer",["receive an upfront premium from the protection buyer","receive the full 5% coupon in advance"],
   "Spread < coupon → the buyer pays a coupon that is too high → the protection seller pays the buyer upfront (CDS price above 100).")])

# ---------------- CREDIT ANALYSIS MODELS ----------------
P=95.80; rf=0.02; R=0.40; p=(100-P*(1+rf))/(100*(1-R))
h=0.03; ev=105*(1-h)+105*R*h
add("Fixed Income",f"""Lukas Brenner, a credit analyst at Alder Bank, values short-term debt of Fenwick Ltd. A one-year Fenwick zero-coupon bond trades at {P:.2f} per 100 of par. The one-year risk-free rate is {rf*100:.1f}%, and the recovery rate if Fenwick defaults is {R*100:.0f}%.

Brenner also values a Fenwick bond that matures in one year and pays a final coupon of 5 with the principal of 100. He estimates the hazard rate for the year at {h*100:.0f}% and the same {R*100:.0f}% recovery rate on the amount owed.""",[
 Q("The risk-neutral probability of default implied by the zero-coupon bond is closest to:",pct(p),[pct((100-P)/100),pct((100-P*(1+rf))/100)],
   f"100-par bond: {P} = [100 × (1 − p) + 40 × p] / 1.02\n{P} × 1.02 = {P*1.02:.3f} = 100 − 60p\np = {100-P*1.02:.3f} / 60 = {p*100:.2f}%"),
 Q("The expected value at maturity of the coupon bond is closest to:",f"{ev:.2f}",["105.00",f"{105*(1-h):.2f}"],
   f"Expected value = (principal + coupon) × (1 − hazard rate) + (principal + coupon) × recovery rate × hazard rate\n= 105 × 0.97 + 105 × 0.40 × 0.03 = {105*0.97:.2f} + {105*0.4*0.03:.2f} = {ev:.2f}"),
 Q("If the risk-neutral probability of default on Fenwick debt falls, Fenwick's credit spread will most likely:","decrease",["increase","not change, because the spread includes only liquidity risk"],
   "A lower risk-neutral PD means lower expected loss, so the credit spread falls. In practice, the observed spread over the risk-free yield also includes liquidity and tax effects, not only credit risk.")])

h1=0.02; ps2=(1-h1)**2; pd3=ps2*h1; hs=[0.015,0.025,0.035]; ps2v=(1-hs[0])*(1-hs[1]); pd3v=ps2v*hs[2]; ps3v=ps2v*(1-hs[2])
add("Fixed Income",f"""Brenner models default risk for two issuers over three years.

Issuer 1 has a constant annual hazard rate of {h1*100:.1f}%.
Issuer 2 has hazard rates of {hs[0]*100:.1f}% in year 1, {hs[1]*100:.1f}% in year 2 and {hs[2]*100:.1f}% in year 3. Brenner notes that hazard rates that change every year are more realistic.""",[
 Q("For Issuer 1, the probability of default in year 3 (PD3) is closest to:",pct(pd3,3),[pct(h1,3),pct(1-(1-h1)**3,3)],
   f"PD_t = PS_(t−1) × hazard rate, with PS_t = (1 − h)^t\nPS2 = 0.98² = {ps2:.4f}\nPD3 = {ps2:.4f} × 0.02 = {pd3*100:.3f}%\n{pct(1-(1-h1)**3,3)} is the cumulative PD over three years."),
 Q("For Issuer 2, the probability of survival to the end of year 3 is closest to:",pct(ps3v,2),[pct(1-sum(hs),2),pct((1-hs[2])**3,2)],
   f"Varying hazard rates: PS_t = (1 − h1)(1 − h2)…(1 − ht)\nPS3 = 0.985 × 0.975 × 0.965 = {ps3v*100:.2f}%\n(PD3 = PS2 × h3 = {ps2v:.4f} × 0.035 = {pd3v*100:.3f}%)")])

vnd=104.20; cva=3.10; mp=102.40
def ytm(pv,c=4,n=3):
    lo,hi=-0.05,0.3
    for _ in range(200):
        m=(lo+hi)/2; v=sum(c/(1+m)**t for t in range(1,n+1))+100/(1+m)**n
        lo,hi=(m,hi) if v>pv else (lo,m)
    return m
yrf=ytm(vnd); yr=ytm(vnd-cva); ym=ytm(mp)
add("Fixed Income",f"""Brenner values a three-year, 4% annual-coupon bond issued by Harrow Logistics. The value of the bond assuming no default (VND), using the benchmark government spot curve, is {vnd:.2f}. His credit valuation adjustment (CVA), computed with risk-neutral probabilities of default, is {cva:.2f}. The bond trades at {mp:.2f}.""",[
 Q("Based on Brenner's analysis, the Harrow bond is:","overvalued, because its price is above VND − CVA",["undervalued, because its price is below VND","fairly valued, because the CVA uses risk-neutral probabilities"],
   f"Fair value = VND − CVA = {vnd} − {cva} = {vnd-cva:.2f}\nPrice {mp} > {vnd-cva:.2f} → overvalued (sell).\nPrice < VND − CVA would mean undervalued."),
 Q("The credit spread on the Harrow bond implied by Brenner's fair value is closest to:",f"{(yr-yrf)*10000:.0f} bps",[f"{(ym-yrf)*10000:.0f} bps",f"{yr*10000:.0f} bps"],
   f"Credit spread = YTM of the credit-risky bond − YTM of the benchmark.\nBenchmark YTM: N = 3, PMT = 4, FV = 100, PV = −{vnd} (use VND, not the market price) → {yrf*100:.3f}%\nRisky YTM: PV = −{vnd-cva:.2f} → {yr*100:.3f}%\nSpread = {(yr-yrf)*10000:.0f} bps. {(ym-yrf)*10000:.0f} bps uses the market price instead of the fair value.")])

add("Fixed Income","""Sanne de Vries compares credit models at Kestrel Bank.

Model M treats a company's equity as a long call option on the company's assets, and its debt as a riskless bond plus a short put option on the assets. It uses balance sheet data and option pricing.
Model N uses historical variables, financial ratios and macroeconomic data. Its key input is the default intensity: the probability of default over the next period, estimated with regression.""",[
 Q("A strength of Model M is that it:","provides an economic explanation of why default happens",["does not require the company's assets to be traded","allows default intensity to change with the economy"],
   "Structural model strengths: economic rationale for default; uses option pricing to value risky debt.\nWeaknesses: assumes assets are traded, hard for complex balance sheets, burdensome to implement, default barrier hard to measure."),
 Q("A weakness of Model N is that it:","does not explain why default happens and treats default as a random event",["assumes the company's assets trade in the market","cannot use macroeconomic variables"],
   "Reduced-form strengths: no need for traded assets; default intensity can vary with company fundamentals and the economy.\nWeaknesses: does not explain the cause of default; treats it as a surprise."),
 Q("In Model M, the value of risky debt equals:","the value of riskless debt minus the value of a put option on the company's assets",["the value of riskless debt plus a call option on the company's assets","the value of the company's assets plus a put option"],
   "Debt = riskless bond − put on assets (bondholders are short the put). Equity = call on assets.")])

add("Fixed Income","""De Vries also reviews retail and securitised credit.

Applicant 1 has a long credit history, no late payments, low use of available credit, few recent credit enquiries and uses many types of credit.
Bond 2 is a subordinated bond of a company whose senior unsecured debt is rated A.
Pool 3 is a large pool of short-term, homogeneous and granular credit card receivables.
Pool 4 is a pool of medium-term, homogeneous and granular auto loans.""",[
 Q("Applicant 1 most likely has a high credit score, and Bond 2 is most likely rated:","below A, because ratings are notched down for lower-priority debt",["A, because all debt of an issuer has the same rating","above A, because subordinated bonds pay higher coupons"],
   "Credit scores rise with long histories, no delinquencies, low utilisation, few enquiries and a wide variety of credit.\nRatings apply to senior unsecured debt; other classes are notched (lower priority → higher loss given default → lower rating)."),
 Q("The most appropriate approaches to analyse Pools 3 and 4 are, respectively:","statistical and portfolio approaches",["portfolio and statistical approaches","loan-by-loan analysis for both"],
   "Short-term, homogeneous and granular (e.g. credit cards) → statistical approach.\nMedium-term, homogeneous and granular (e.g. auto loans) → portfolio approach.\nNon-granular pools need loan-by-loan analysis.")])

ee=0.25*101.40+0.5*103.10+0.25*104.60+3
add("Fixed Income","""Brenner builds a two-year binomial tree to compute the CVA of a 3% annual-coupon corporate bond. At the end of year 2 the tree has three nodes with bond values (before the coupon) of 101.40, 103.10 and 104.60, reached with probabilities of 25%, 50% and 25%. The coupon of 3 is paid at every node at the end of year 2.

Brenner's manager remarks that when the expected return of a bond is adjusted for possible rating changes over the year, the adjustment is usually negative.""",[
 Q("The expected exposure at the end of year 2 is closest to:",f"{ee:.2f}",[f"{ee-3:.2f}",f"{(101.40+103.10+104.60)/3+3:.2f}"],
   f"Expected exposure = Σ (node value × node probability) + coupon\n= 0.25 × 101.40 + 0.50 × 103.10 + 0.25 × 104.60 + 3 = {ee-3:.2f} + 3 = {ee:.2f}\nUse the node probabilities, not a simple average."),
 Q("The manager's remark is best explained by the fact that:","rating changes are skewed toward downgrades, and spreads widen far more on downgrades than they narrow on upgrades",["upgrades are more likely than downgrades, but have smaller price effects","modified duration rises after a downgrade, which always lowers the coupon"],
   "Credit migration typically reduces expected returns because (1) the transition distribution is skewed toward downgrades and (2) the spread increase for a downgrade is much larger than the spread decrease for an upgrade.")])
