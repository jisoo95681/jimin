import math
from lib import *
add("Quantitative Methods","""Maya Lindqvist explains unsupervised and deep learning methods to new hires at Fjord Analytics.

Method 1 groups 2,000 stocks. It starts with each stock as its own cluster and repeatedly merges the two closest clusters until one cluster remains.
Method 2 also groups stocks, but the analyst must choose the number of clusters, k, before running it.
Method 3 is a neural network with many hidden layers that learns to recognise patterns in satellite images.

Lindqvist warns that including a very large number of features can cause the model to fit noise. She plots a learning curve to check the problem.""",[
 Q("Method 1 is best described as:","agglomerative (bottom-up) hierarchical clustering",["divisive (top-down) hierarchical clustering","k-means clustering"],
   "Agglomerative = bottom-up: start with each observation as its own cluster and merge similar clusters over time.\nDivisive = top-down: start with one cluster and split it over time.\nk-means needs k (a hyperparameter) chosen in advance: that is Method 2."),
 Q("A neural network such as Method 3 is classified as a deep learning network when it has:","at least two hidden layers (often more than 20)",["exactly one hidden layer","no hidden layers but many input nodes"],
   "Deep learning nets (DLNs) have at least 2 hidden layers, and in practice often more than 20."),
 Q("Which statement about Lindqvist's warning is most accurate?","Overfitting is a concern for supervised learning; a learning curve plots accuracy in the validation or test sample against the size of the training sample",["Overfitting is mainly a concern for unsupervised learning; a learning curve plots the number of clusters against accuracy","Overfitting cannot occur when many features are used; a learning curve plots training time against the number of features"],
   "Overfitting (fitting noise, often with too many features) is a problem for supervised learning, not unsupervised learning.\nLearning curve: accuracy in the validation/test sample versus the size of the training sample.")])

# ---------------- BIG DATA ----------------
add("Quantitative Methods","""Rosa Delgado leads a big data project at Calloway Credit to predict loan defaults from structured borrower data. Her team follows five steps but has written them in the wrong order: data exploration; data collection; model training; conceptualisation of the modelling task; data preparation and wrangling.

During data preparation the team finds the following problems in the raw data:
Problem 1: Some borrowers have no income recorded.
Problem 2: Dates of birth are recorded as DD/MM/YYYY for some borrowers and as YYYY-MM-DD for others.
Problem 3: The same borrower appears twice with identical records.

The team then transforms the data. It creates an "age" variable from date of birth and replaces extreme income values with the value at the 99th percentile. Finally it rescales income so that its values lie between 0 and 1.""",[
 Q("The correct order of the five steps for a structured data project is:","conceptualisation, data collection, data preparation and wrangling, data exploration, model training",["data collection, conceptualisation, data exploration, data preparation and wrangling, model training","conceptualisation, data exploration, data collection, model training, data preparation and wrangling"],
   "Structured data: conceptualisation of the modelling task → data collection → data preparation and wrangling → data exploration → model training."),
 Q("Problems 1, 2 and 3 are, respectively, examples of:","missing values, non-uniformity and duplication errors",["invalid values, inaccuracy and duplication errors","missing values, invalid values and non-uniformity errors"],
   "Data cleansing deals with errors in raw data: missing values, invalid values, inaccurate values, non-uniformity (same data in different formats) and duplicates."),
 Q("Creating age from date of birth and replacing extreme incomes with the 99th-percentile value are best described as:","extraction and winsorisation",["aggregation and trimming","selection and standardisation"],
   "Data wrangling transformations: extraction (create a new variable from an existing one), aggregation, filtration (remove rows), selection (remove columns).\nOutliers: trimming removes them; winsorisation replaces them with the value at a set percentile."),
 Q("The final rescaling of income is best described as:","normalisation, which is sensitive to outliers",["standardisation, which centres the variable at a mean of 0","winsorisation, which removes outliers"],
   "Normalisation rescales to the range 0 to 1 (sensitive to outliers).\nStandardisation centres at mean 0 with standard deviation 1 (assumes roughly normal data).")])

add("Quantitative Methods","""Kenji Arai is building a sentiment model from 50,000 web news articles at Okubo Advisors. The steps of a text project are text problem formulation, data curation, text preparation and wrangling, text exploration, and model training.

Arai's raw text contains HTML tags, punctuation, numbers and extra white space. He then applies four wrangling steps to the cleansed tokens: converting to lower case, removing words such as "the" and "is", reducing "integrated", "integrating" and "integration" to "integr", and converting "better" to "good" using a dictionary.

After wrangling, Arai builds a bag of words and computes document frequency (DF) and mutual information (MI) for each token. He also converts the categorical feature "sector" into binary columns.""",[
 Q("Removing HTML tags, punctuation, numbers and white space is part of:","text cleansing",["text wrangling (preprocessing)","text exploration"],
   "Text cleansing: remove HTML tags, punctuation (keeping meaningful symbols such as % or $, replaced with tokens), numbers and white spaces.\nText wrangling (preprocessing) then works on tokens: lowercasing, stop-word removal, stemming, lemmatisation."),
 Q("Reducing words to \"integr\" and converting \"better\" to \"good\" are, respectively:","stemming and lemmatisation",["lemmatisation and stemming","tokenisation and stemming"],
   "Stemming cuts words to a common base (\"integr\"), which may not be a real word.\nLemmatisation uses morphology and a dictionary to get the real base word (lemma): \"better\" → \"good\". It is more computationally expensive."),
 Q("Converting \"sector\" into binary columns is called:","one-hot encoding",["bag of words","n-gram creation"],
   "One-hot encoding turns a categorical feature into binary dummy variables."),
 Q("Which statement about DF and MI is most accurate?","Stop words have a high DF, and MI measures how much a token contributes to identifying a class",["Rare names have a high DF, and MI measures how often a token appears in a document","Stop words have a low DF, and MI measures the number of documents in the corpus"],
   "DF = number of documents containing the token ÷ total documents. Stop words → high DF; important words → medium DF; rare words such as names → low DF.\nMI = how much a token contributes to a class (0 = not informative, 1 = strongly linked to one class)."),
 Q("Arai's four wrangling steps are completed. The next step is most likely to:","create a bag of words from the normalised tokens",["return to text problem formulation","remove HTML tags from the tokens"],
   "After cleansing and wrangling (normalisation), the tokens are collected into a bag of words (BOW), and then a document term matrix is built.")])

# ---------------- FIXED INCOME ----------------
add("Fixed Income","""Nadia Rahman manages credit strategies at Belcourt Partners and discusses five trade ideas with her analyst, Leo Fischer.

Idea 1: Fischer expects the credit quality of Varga Steel to improve.
Idea 2: The CDS curve of Delmont Telecom is upward sloping, and Fischer expects it to steepen.
Idea 3: Rahman expects the economy to strengthen. She wants to trade high-yield and investment-grade CDS indexes against each other.
Idea 4: Hollis Retail's bonds yield a spread over MRR that is larger than its CDS spread for the same maturity.
Idea 5: Fischer believes Pratt Foods will be taken over in a leveraged buyout financed mostly with new debt.""",[
 Q("For Idea 1, Belcourt should:","sell protection on Varga Steel",["buy protection on Varga Steel","buy protection on a CDS index that includes Varga Steel"],
   "Credit improves → CDS spread falls → protection seller gains: sell protection = long credit.\nCredit deteriorates → buy protection = short credit."),
 Q("For Idea 2, the most appropriate trade is to:","sell protection on short-maturity CDS and buy protection on long-maturity CDS",["buy protection on short-maturity CDS and sell protection on long-maturity CDS","buy protection at both maturities"],
   "Steepening = long-maturity spreads rise relative to short-maturity spreads.\nBuy protection (short credit) at the long end, sell protection (long credit) at the short end."),
 Q("For Idea 3, Rahman should:","sell protection on the high-yield index and buy protection on the investment-grade index",["buy protection on the high-yield index and sell protection on the investment-grade index","buy protection on both indexes"],
   "A stronger economy narrows high-yield spreads more than investment-grade spreads.\nHigh yield: sell protection. Investment grade: buy protection."),
 Q("For Idea 4, the basis trade is to:","buy the bond and buy CDS protection",["sell the bond and sell CDS protection","buy the bond and sell CDS protection"],
   "Bond spread > CDS spread (negative basis) → buy the bond and buy protection (earn the bond spread, pay the smaller CDS spread).\nBond spread < CDS spread → sell the bond and sell protection.\nBond spread = bond yield − MRR, a credit risk premium."),
 Q("For Idea 5, the most appropriate strategy is to:","buy Pratt Foods shares and buy CDS protection on Pratt Foods",["sell Pratt Foods shares and sell CDS protection on Pratt Foods","buy Pratt Foods shares and sell CDS protection on Pratt Foods"],
   "In an LBO the target's shares usually rise (takeover premium), while its heavy new debt weakens its credit, so its CDS spread widens: buy shares and buy protection.")])

sp=0.032; cp=0.01; dur=4.6; up=(sp-cp)*dur
add("Fixed Income",f"""Irene Castell, a credit analyst at Duvall Bank, reviews two CDS positions.

Position 1: A five-year CDS on Kessler Chemicals has a standard coupon of 1.00%. The current CDS spread is {sp*100:.2f}% and the CDS duration is {dur}.

Position 2: Duvall owns €10 million par of Rocher SA bonds and bought €10 million of CDS protection on Rocher. Rocher has just defaulted. Duvall's bonds now trade at 40% of par, and the cheapest-to-deliver Rocher bond trades at 32% of par. The CDS is cash settled.""",[
 Q("The CDS price per 100 of par for Position 1 is closest to:",f"{100-up*100:.2f}",[f"{100+up*100:.2f}",f"{100-sp*dur*100:.2f}"],
   f"Upfront premium ≈ (CDS spread − coupon) × duration = (3.20% − 1.00%) × {dur} = {up*100:.2f}% of notional (paid by the protection buyer).\nCDS price per 100 par = 100 − upfront premium = 100 − {up*100:.2f} = {100-up*100:.2f}"),
 Q("For Position 2, the total value of Duvall's bonds plus the CDS payoff is closest to:","€10.8 million",["€10.0 million","€9.2 million"],
   "Bonds: €10m × 40% = €4.0m\nCDS payoff (cash settled on the cheapest-to-deliver): €10m × (1 − 32%) = €6.8m\nTotal = €10.8m. The payoff is based on the cheapest-to-deliver bond, not on the bond Duvall holds.")])

md=5.2; p={"AA":0.04,"BBB":0.05,"BB":0.01}; ds={"AA":-0.0045,"BBB":0.0060,"BB":0.02}
mig=sum(p[x]*(-md*ds[x]) for x in p); y=0.043
add("Fixed Income",f"""Tobias Lang evaluates a single-A rated corporate bond for Ostend Fixed Income Fund. The bond has a yield to maturity of {y*100:.2f}% and a modified duration of {md}. Exhibit 1 shows one-year rating transition probabilities for an A-rated bond and the change in credit spread if the rating changes.

Exhibit 1: One-Year Transition Probabilities and Spread Changes
# New rating | Probability | Change in spread
AA | 4% | −45 bps
A | 90% | 0 bps
BBB | 5% | +60 bps
BB | 1% | +200 bps""",[
 Q("The expected percentage price change from credit migration over the year is closest to:",f"−{abs(mig)*100:.2f}%",[f"+{abs(mig)*100:.2f}%",f"−{(0.05*md*0.006+0.01*md*0.02)*100:.2f}%"],
   f"Each rating: probability × (−modified duration × change in spread).\nUpgrade (spread falls) → positive; downgrade → negative.\nAA: 0.04 × (−5.2 × −0.0045) = +{0.04*5.2*0.0045*100:.4f}%\nBBB: 0.05 × (−5.2 × 0.0060) = −{0.05*5.2*0.006*100:.4f}%\nBB: 0.01 × (−5.2 × 0.0200) = −{0.01*5.2*0.02*100:.4f}%\nSum = {mig*100:.3f}%"),
 Q("Taking credit migration into account, the bond's expected one-year return is closest to:",f"{(y+mig)*100:.2f}%",[f"{y*100:.2f}%",f"{(y-mig)*100:.2f}%"],
   f"Expected return ≈ yield + expected migration effect = {y*100:.2f}% + ({mig*100:.2f}%) = {(y+mig)*100:.2f}%\nCredit migration usually lowers the expected return, because downgrades are larger and more likely than upgrades.")])

par=[0.020,0.025,0.029]
s1=par[0]
s2=((1+par[1])/(1-par[1]/(1+s1)))**0.5-1
s3=((1+par[2])/(1-par[2]/(1+s1)-par[2]/(1+s2)**2))**(1/3)-1
cpn=4.0; mkt=102.60
val=cpn/(1+s1)+cpn/(1+s2)**2+(100+cpn)/(1+s3)**3
def ytm(pv):
    lo,hi=0.0,0.2
    for _ in range(100):
        m=(lo+hi)/2; v=sum(cpn/(1+m)**t for t in (1,2,3))+100/(1+m)**3
        lo,hi=(m,hi) if v>pv else (lo,m)
    return m
f21=(1+s3)**3/(1+s2)**2-1
add("Fixed Income",f"""Charlotte Reyes, a fixed-income analyst at Penrose Capital, uses the arbitrage-free framework. Exhibit 1 shows the current par curve for annual-pay government bonds.

Exhibit 1: Par Curve
# Maturity (years) | Par rate
1 | {par[0]*100:.2f}%
2 | {par[1]*100:.2f}%
3 | {par[2]*100:.2f}%

Reyes is asked whether a three-year, {cpn:.1f}% annual-coupon government bond trading at {mkt:.2f} is mispriced. Her steps are: (1) bootstrap spot rates from the par curve; (2) discount the bond's cash flows at the spot rates; (3) compare the value with the market price.""",[
 Q("The three-year spot rate is closest to:",pct(s3,3),[pct(par[2],3),pct((par[0]+par[1]+par[2])/3,3)],
   f"Bootstrapping: s1 = {s1*100:.2f}%.\nTwo years: {par[1]*100:.2f}/(1.02) + {100+par[1]*100:.2f}/(1 + s2)² = 100 → s2 = {s2*100:.4f}%\nThree years: {par[2]*100:.2f}/1.02 + {par[2]*100:.2f}/(1 + s2)² + {100+par[2]*100:.2f}/(1 + s3)³ = 100 → s3 = {s3*100:.4f}%"),
 Q("The arbitrage-free value of the bond is closest to:",f"{val:.2f}",[f"{sum(cpn/(1+s1)**t for t in (1,2,3))+100/(1+s1)**3:.2f}",f"{mkt:.2f}"],
   f"Value = 4/1.02 + 4/(1 + {s2*100:.4f}%)² + 104/(1 + {s3*100:.4f}%)³ = {val:.2f}\nEach cash flow is discounted at its own spot rate, not at one rate."),
 Q("Based on Reyes's analysis, the bond is:",f"{'undervalued, so it should be bought' if val>mkt else 'overvalued, so it should be sold'}",[f"{'overvalued, so it should be sold' if val>mkt else 'undervalued, so it should be bought'}","fairly priced, because its coupon is above the par rate"],
   f"Arbitrage-free value {val:.2f} vs market price {mkt:.2f}. {'Value > price → undervalued → buy.' if val>mkt else 'Value < price → overvalued → sell.'}"),
 Q("The bond's yield to maturity at its arbitrage-free value is closest to:",pct(ytm(val),3),[pct(ytm(mkt),3),"4.000%"],
   f"N = 3, PMT = 4, FV = 100, PV = −{val:.4f} → I/Y = {ytm(val)*100:.3f}%\nThe YTM is a single blended rate, slightly below the 3-year spot rate for a coupon bond on an upward-sloping curve."),
 Q("The one-year forward rate two years from now, f(2,1), is closest to:",pct(f21,3),[pct((1+s2)**2/(1+s1)-1,3),pct(s3,3)],
   f"(1 + s3)³ = (1 + s2)² × (1 + f(2,1))  (expanded: (1 + s_n)^n = (1 + s1)(1 + f1,1)…(1 + f n−1,1))\nf(2,1) = (1 + {s3*100:.4f}%)³ / (1 + {s2*100:.4f}%)² − 1 = {f21*100:.3f}%")])

add("Fixed Income","""Ines Moreau compares money market and swap spreads for Galloway Treasury Services.

Exhibit 1: Selected Rates
# Instrument | Rate
Three-year swap fixed rate | 3.45%
Three-year government bond yield | 3.10%
Three-month MRR | 2.95%
Three-month Treasury bill yield | 2.60%""",[
 Q("The three-year swap spread is closest to:","35 bps",["50 bps","85 bps"],
   "Swap spread = swap fixed rate − government bond yield of the same maturity = 3.45% − 3.10% = 0.35% = 35 bps."),
 Q("The TED spread is closest to:","35 bps (three-month MRR minus the three-month T-bill yield)",["15 bps (three-year swap rate minus three-month MRR)","85 bps (three-year swap rate minus the three-month T-bill yield)"],
   "TED spread = three-month MRR − three-month Treasury bill yield = 2.95% − 2.60% = 35 bps. It reflects credit and liquidity risk in the banking system.")])

cr=25; prc=1080; S0=38.0; sv=960
add("Fixed Income",f"""Ferdinand Osei analyses a convertible bond issued by Brightwater Energy for Cathay Ridge Capital. Each bond has a par value of $1,000 and can be converted into {cr} Brightwater shares. The convertible trades at ${prc:,}, Brightwater shares trade at ${S0:.2f}, and the value of an otherwise identical straight bond is ${sv}.""",[
 Q("The conversion price of the bond is closest to:","$40.00",[f"${prc/cr:.2f}",f"${S0:.2f}"],
   f"Conversion price = par value of the convertible ÷ conversion ratio = 1,000 / {cr} = $40.00 (fixed at issue).\n${prc/cr:.2f} is the market conversion price (market price ÷ conversion ratio)."),
 Q("The minimum value of the convertible bond is closest to:",f"${sv}",[f"${S0*cr:,.0f}",f"${prc:,}"],
   f"Conversion value = share price × conversion ratio = {S0:.2f} × {cr} = ${S0*cr:,.0f}\nMinimum value = max(conversion value, straight value) = max({S0*cr:,.0f}, {sv}) = ${sv}"),
 Q("The market conversion premium ratio is closest to:",pct((prc/cr-S0)/S0),[pct(prc/sv-1),pct((prc-S0*cr)/prc)],
   f"Market conversion price = {prc} / {cr} = ${prc/cr:.2f}\nMarket conversion premium per share = {prc/cr:.2f} − {S0:.2f} = ${prc/cr-S0:.2f}\nPremium ratio = {prc/cr-S0:.2f} / {S0:.2f} = {pct((prc/cr-S0)/S0)}"),
 Q("The premium over straight value is closest to:",pct(prc/sv-1),[pct((prc/cr-S0)/S0),pct((prc-sv)/prc)],
   f"Premium over straight value = (market price of convertible / straight value) − 1 = {prc}/{sv} − 1 = {pct(prc/sv-1)}")])

add("Fixed Income","""Osei analyses a convertible bond issued by Brightwater Energy. The conversion price is above Brightwater's current share price. The bond's terms include a threshold dividend: if Brightwater pays dividends above the threshold, the conversion ratio is adjusted.

Osei also notes that over the past month Brightwater's share price fell 12%, while the convertible's price fell only 4%.""",[
 Q("Because the conversion price is above the current share price, the convertible's risk and return are most likely driven by:","interest rates and credit spreads, like a straight bond",["the share price, like the common stock","neither, because the bond is a hybrid"],
   "Conversion price > share price (option out of the money) → behaves like a bond: interest rate and credit spread risk.\nConversion price < share price → behaves like the stock.\nRoughly equal → hybrid."),
 Q("If Brightwater pays a dividend above the threshold, the conversion ratio most likely:","increases, so the conversion price falls and the conversion value rises",["decreases, so the conversion price rises and the conversion value falls","stays the same, but the straight value of the bond rises to compensate holders"],
   "Dividends above the threshold → conversion ratio rises to compensate holders.\nConversion price = par / conversion ratio → falls.\nConversion value = share price × conversion ratio → rises."),
 Q("The convertible fell less than the share price mainly because:","its straight value sets a floor under its price",["its conversion ratio rose when the share price fell","the call option on the shares gained value as the share price fell"],
   "Convertible = straight bond + call option on the stock. As the share price falls, the bond's straight value (the floor) limits the decline, so the convertible falls by a smaller percentage than the stock.")])

add("Fixed Income","""Gabriela Silva, a portfolio manager at Tamsin Fixed Income, compares bonds with embedded options. All bonds have the same issuer, maturity and coupon unless stated otherwise.

Bond P is a floating-rate note whose coupon resets once a year; the next reset is in one year.
Bond Q is callable, Bond R is putable and Bond S is an option-free (straight) bond.

Silva expects interest-rate volatility to rise. She also expects the upward-sloping yield curve to flatten while the level of rates is unchanged.""",[
 Q("The effective duration of Bond P is closest to:","1",["0","the bond's years to maturity"],
   "A floating-rate bond's effective duration is close to the time to the next reset. With annual resets and the next reset in one year, effective duration ≈ 1."),
 Q("If interest rates fall sharply, compared with Bond S, Bond Q's effective duration most likely:","falls and its convexity becomes negative",["rises and its convexity stays positive","stays the same as Bond S's duration"],
   "Callable bond when rates fall: the call is likely to be exercised, so duration falls below that of the straight bond and convexity becomes negative (price compression).\nWhen rates rise, the callable behaves like the straight bond."),
 Q("Which ordering of prices is most likely correct?","Bond Q < Bond S < Bond R",["Bond R < Bond S < Bond Q","Bond S < Bond Q < Bond R"],
   "Callable = straight − call option (investor is short the call) → cheapest.\nPutable = straight + put option (investor is long the put) → most expensive."),
 Q("If interest-rate volatility rises, the values of Bond Q and Bond R most likely:","fall and rise, respectively",["rise and fall, respectively","both rise"],
   "Higher volatility raises the value of both options.\nCallable = straight − call → falls. Putable = straight + put → rises."),
 Q("If the upward-sloping yield curve flattens, the value of the call option in Bond Q and the value of Bond R most likely:","rise and fall, respectively",["fall and rise, respectively","both rise"],
   "Upward-sloping curve flattens → long-term forward rates fall → the call is more likely to be exercised: call value rises and the callable bond falls.\nThe put is less likely to be exercised: put value falls, so the putable bond falls.")])

add("Fixed Income","""Silva compares two option-adjusted spreads (OAS) calculated with the same interest rate tree. Bond T has an OAS of 85 bps and Bond U has an OAS of 60 bps. Both bonds are callable, have similar terms and have the same credit rating.

A junior analyst states: "The rates in the binomial tree are our forecasts of future interest rates." """,[
 Q("Based on the OAS, Silva should conclude that:","Bond T is cheaper than Bond U",["Bond U is cheaper than Bond T","the OAS cannot be compared because the bonds are callable"],
   "OAS can be compared only for bonds with the same credit rating (and the same tree). A larger OAS means the bond is cheaper (underpriced), so buy Bond T."),
 Q("The junior analyst's statement is:","incorrect, because the rates in the tree are not forecasts but stochastic paths consistent with the volatility assumption and current prices",["correct, because the tree is calibrated to the expected future short-term rates implied by analysts' forecasts","correct, because each node gives the most likely rate at that date, based on the volatility assumption and economic forecasts"],
   "The binomial tree's interest rate movements are not predictions: they are random (stochastic) paths calibrated to today's par curve and an assumed volatility, so the tree is arbitrage-free.")])

r0=0.032; hi=0.054; lo=0.038; cap=0.048
vh=(100+cap*100)/(1+hi); vl=(100+lo*100)/(1+lo)
v0=(0.5*(vh+r0*100)+0.5*(vl+r0*100))/(1+r0)
add("Fixed Income",f"""Silva values a two-year floating-rate note with an annual coupon equal to the one-year reference rate set at the start of each year, paid at the end of the year. The coupon is capped at {cap*100:.1f}%. Exhibit 1 shows the calibrated binomial interest rate tree (equal probabilities).

Exhibit 1: One-Year Rates
# Node | Rate
Time 0 | {r0*100:.2f}%
Time 1, upper node | {hi*100:.2f}%
Time 1, lower node | {lo*100:.2f}%""",[
 Q("The value of the capped floater is closest to:",f"{v0:.2f}",["100.00",f"{vh:.2f}"],
   f"Time 1 upper: rate {hi*100:.2f}% > cap → coupon {cap*100:.1f}: value = {100+cap*100:.2f}/1.054 = {vh:.4f}\nTime 1 lower: coupon = rate {lo*100:.2f}%: value = {100+lo*100:.2f}/1.038 = {vl:.4f}\nTime 0: coupon {r0*100:.2f} (below cap): value = [0.5 × ({vh:.4f} + 3.20) + 0.5 × ({vl:.4f} + 3.20)] / 1.032 = {v0:.2f}\nAn uncapped floater would be worth 100."),
 Q("The cap in this note most likely benefits:","the issuer, and the value of the embedded cap is about "+f"{100-v0:.2f} per 100",["the investor, and the value of the cap is about "+f"{100-v0:.2f} per 100","the investor, because a floor also applies"],
   f"A cap limits the coupon the issuer pays when rates rise, so it benefits the issuer; the investor is short the cap.\nCap value = straight floater − capped floater = 100 − {v0:.2f} = {100-v0:.2f}\nA floor (minimum coupon) would benefit the investor.")])
