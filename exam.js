// Exam section data: practice sets built from the notebook key notes (re-skinned vignettes), later mocks.
// answer = index of the correct option (0 = A). Built by /tmp/gen/exam/build.py.
const EXAM_SETS = [
 {
  "id": "ps1",
  "title": "Practice set 1",
  "kind": "practice",
  "minutes": 132,
  "desc": "Derivatives, Quantitative Methods",
  "vignettes": [
   {
    "topic": "Derivatives",
    "body": "Anika Feld is a fixed-income derivatives trader at Rhinebeck Capital. She and her colleague Tomas Lindgren review two Treasury note futures contracts.\n\nFive-Year Note Futures\nThe underlying 2.0% semi-annual Treasury note is quoted at a clean price of 100.80. It has been 50 days since the last coupon payment and the next coupon is payable in 130 days. Feld asks Lindgren to calculate the full spot price of the note.\n\nTen-Year Note Futures\nThe underlying 2.5% semi-annual Treasury note has a dirty price of 105.20. It has been 40 days since the last coupon payment, and the futures contract expires in 90 days. No coupon is paid before expiration. The quoted futures price is 136.00, the annualised three-month risk-free rate is 1.80%, and the conversion factor is 0.7550.",
    "questions": [
     {
      "q": "The full spot price of the five-year note is closest to:",
      "options": [
       "101.52",
       "100.80",
       "101.08"
      ],
      "answer": 2,
      "why": "Accrued interest uses the days since the last coupon over the 180-day period.\nAI = 50/180 × 1.00 = 0.2778\nFull price = 100.80 + 0.2778 = 101.08\n101.52 wrongly uses the 130 days to the next coupon; 100.80 is the clean price."
     },
     {
      "q": "The equilibrium quoted futures price of the ten-year note is closest to:",
      "options": [
       "139.59",
       "139.96",
       "138.76"
      ],
      "answer": 2,
      "why": "Everything is measured at expiration.\nFV of full price = 105.20 × 1.018^(90/360) = 105.6702\nAccrued interest at expiration = (40 + 90)/180 × 1.25 = 0.9028\nQFP = (105.6702 − 0.9028) / 0.755 = 138.76\n139.59 subtracts today's accrued interest (0.2778) instead of the accrued interest at expiration; 139.96 subtracts no accrued interest."
     },
     {
      "q": "Based on the equilibrium price, the arbitrage strategy for the ten-year note futures is to:",
      "options": [
       "buy the futures, short sell the note and lend the proceeds",
       "take no position, because the contract is fairly priced",
       "sell the futures, buy the note with borrowed funds"
      ],
      "answer": 0,
      "why": "Market price 136.00 < model price 138.76, so the futures is undervalued.\nUndervalued → reverse cash-and-carry: Buy futures, Short the bond, Lend (BSL).\nOvervalued (market > model) would be cash-and-carry: Sell futures, Buy bond, Borrow (SBB)."
     }
    ]
   },
   {
    "topic": "Derivatives",
    "body": "Hanna Moberg manages equity hedges for Silverlake Pension Fund. On 1 March she enters a long six-month forward contract on 100,000 shares of Torvik AB. Torvik's share price is SEK62.00, and Torvik will pay a dividend of SEK1.20 per share in three months. The risk-free rate is 3.0% a year (annual compounding).\n\nOn 1 June, just after the dividend is paid, Torvik's share price is SEK58.50. The risk-free rate is unchanged.\n\nMoberg's assistant notes that Torvik is considering selling one of its divisions and paying the cash out to shareholders as a one-off liquidating dividend.",
    "questions": [
     {
      "q": "The forward price agreed on 1 March is closest to:",
      "options": [
       "SEK64.13",
       "SEK61.71",
       "SEK62.92"
      ],
      "answer": 1,
      "why": "F0 = S0 × (1 + r)^T − FV of dividends\n= 62.00 × 1.03^0.5 − 1.20 × 1.03^0.25\n= 62.9231 − 1.2089 = 61.71\nThe dividend is compounded to expiration (3 months left after it is paid)."
     },
     {
      "q": "On 1 June, the value of the long forward position per share is closest to:",
      "options": [
       "−SEK2.76",
       "−SEK3.21",
       "−SEK3.96"
      ],
      "answer": 0,
      "why": "F0 does not change: 61.7142.\nThe dividend has already been paid, so nothing is subtracted now.\nFt = 58.50 × 1.03^0.25 = 58.9339\nValue (long) = (Ft − F0) / 1.03^0.25 = (58.9339 − 61.7142) / 1.007417 = -2.76\n-3.21 is just S − F0; -3.96 subtracts the dividend again even though it was paid."
     },
     {
      "q": "The dividend the assistant describes is best described as a:",
      "options": [
       "liquidating dividend: a payout funded by selling assets, which returns capital to shareholders",
       "scrip dividend: a dividend paid in new shares instead of cash",
       "special dividend: extra cash paid on top of the regular dividend from earnings"
      ],
      "answer": 0,
      "why": "Liquidating dividend = sell part of the business and pay the proceeds out (return of capital).\nScrip dividend = stock dividend.\nSpecial dividend = extra cash above the regular dividend."
     }
    ]
   },
   {
    "topic": "Derivatives",
    "body": "Ten months ago, Marco Bellini entered a long 14-month forward contract on one share of Lumen Foods, a stock that pays no dividends, at a forward price of €88.40. Today Lumen's share price is €94.10, so four months remain until expiration. The risk-free rate is 2.2% a year with annual compounding.",
    "questions": [
     {
      "q": "The current value of Bellini's forward position is closest to:",
      "options": [
       "€6.39",
       "€5.70",
       "€6.34"
      ],
      "answer": 2,
      "why": "Value (long) = (FPt − FP0) / (1 + r)^(T−t), with T − t = 4/12.\nFPt = 94.10 × 1.022^(4/12) = 94.7851\nValue = (94.7851 − 88.40) / 1.022^(4/12) = 6.34\nEquivalently S − F0/(1+r)^(T−t). €5.70 forgets discounting F0; €6.39 is not discounted to today."
     }
    ]
   },
   {
    "topic": "Derivatives",
    "body": "Priya Natarajan uses equity index forwards at Kestrel Advisors. She enters a long nine-month forward on the Alba 100 index when the index is at 4,250. The index has a continuously compounded dividend yield of 1.8% and the continuously compounded risk-free rate is 3.5%.\n\nThree months later the index is at 4,410. Rates and the dividend yield are unchanged.",
    "questions": [
     {
      "q": "The initial forward price is closest to:",
      "options": [
       "4,422.34",
       "4,304.53",
       "4,363.04"
      ],
      "answer": 1,
      "why": "F0 = S0 × e^((r − δ)T) = 4,250 × e^((0.035 − 0.018) × 0.75) = 4,304.53\n4,363.04 ignores the dividend yield; 4,422.34 adds it."
     },
     {
      "q": "Three months after initiation, the value of the long forward is closest to:",
      "options": [
       "143.11",
       "140.63",
       "157.85"
      ],
      "answer": 1,
      "why": "Use T − t = 0.5 everywhere (not T).\nFt = 4,410 × e^(0.017 × 0.5) = 4,447.64\nValue = (Ft − F0) × e^(−0.035 × 0.5) = (4,447.64 − 4,304.53) × 0.982652 = 140.63\n157.85 wrongly uses 0.75 years; 143.11 is not discounted."
     }
    ]
   },
   {
    "topic": "Derivatives",
    "body": "One year ago, Aldren Manufacturing entered a four-year interest rate swap with annual payments to pay a fixed rate of 2.10% and receive MRR on a notional principal of $60 million. Aldren's treasurer, Gwen Ashby, wants to know the swap's value today, exactly one year after initiation, just after the first settlement. Exhibit 1 shows current present value factors.\n\nExhibit 1: Present Value Factors\n# Maturity (years) | Present value factor\n1 | 0.9732\n2 | 0.9441\n3 | 0.9135\n4 | 0.8820",
    "questions": [
     {
      "q": "The fixed rate on a new swap that matches the remaining term of Aldren's swap is closest to:",
      "options": [
       "3.06%",
       "2.88%",
       "3.18%"
      ],
      "answer": 0,
      "why": "Three annual payments remain, so use only Z1, Z2 and Z3.\nSFR = (1 − Z3) / (Z1 + Z2 + Z3) = (1 − 0.9135) / 2.8308 = 3.0557%\n3.18% wrongly uses all four factors."
     },
     {
      "q": "The value of the swap to Aldren (the fixed-rate payer) is closest to:",
      "options": [
       "$2,401,872",
       "−$1,623,192",
       "$1,623,192"
      ],
      "answer": 2,
      "why": "Value (pay fixed) = ΣZ × (SFRnew − SFRold) × NP (annual payments, so the period factor is 1)\n= 2.8308 × (3.0557% − 2.10%) × 60,000,000 = $1,623,192\nRates rose above the old fixed rate, so the payer of fixed gains."
     }
    ]
   },
   {
    "topic": "Derivatives",
    "body": "Kaito Mori, a treasury analyst at Shirane Bank, entered a long 6 × 9 FRA (pay fixed, receive three-month MRR) on a notional of €25 million at an FRA rate of 2.40%. The FRA is settled in advance: the settlement amount is paid at FRA expiration, discounted at the three-month MRR.\n\nSituation 1: Ninety days after initiation, the rate on a new 3 × 6 FRA is 2.70% and the 180-day discount rate is 2.60%.\nSituation 2: At FRA expiration (month 6), three-month MRR is 2.85%.",
    "questions": [
     {
      "q": "In Situation 1, the value of Mori's FRA is closest to:",
      "options": [
       "€18,509",
       "€18,750",
       "−€18,509"
      ],
      "answer": 0,
      "why": "Value (pay fixed) = (FRAg − FRA0) × tm × NP / (1 + D(T−g) × t(T−g))\n= (2.70% − 2.40%) × 90/360 × 25,000,000 / (1 + 0.026 × 180/360)\n= 18,750 / 1.013 = €18,509\nRates rose, so the fixed payer (long FRA) has a positive value."
     },
     {
      "q": "In Situation 2, the settlement amount Mori receives at FRA expiration is closest to:",
      "options": [
       "€28,125",
       "€112,500",
       "€27,926"
      ],
      "answer": 2,
      "why": "Interest difference paid at T (month 9) = (2.85% − 2.40%) × 90/360 × 25,000,000 = €28,125\nSettled at month 6, so discount for 90 days at MRR: 28,125 / (1 + 0.0285 × 90/360) = €27,926"
     }
    ]
   },
   {
    "topic": "Derivatives",
    "body": "Liang Wu, a portfolio manager at Corwen Asset Management, enters a one-year equity swap with quarterly settlement on a notional of $40 million. Corwen receives the total return on the Meridian 500 index and pays a fixed rate. No fixed rate is quoted, so Wu must set it at initiation from the present value factors in Exhibit 1 (90-day periods, 360-day year).\n\nExhibit 1: Present Value Factors at Initiation\n# Days | Present value factor\n90 | 0.9950\n180 | 0.9896\n270 | 0.9838\n360 | 0.9775\n\nDuring the first quarter the Meridian 500 total return is −1.6%.\n\nSixty days after initiation (before the first settlement) the index has risen from 1,000 to 1,025. Exhibit 2 shows present value factors at that date.\n\nExhibit 2: Present Value Factors 60 Days After Initiation\n# Days | Present value factor\n30 | 0.9985\n120 | 0.9930\n210 | 0.9870\n300 | 0.9805",
    "questions": [
     {
      "q": "The annualised fixed rate on the equity swap is closest to:",
      "options": [
       "2.28%",
       "1.14%",
       "0.57%"
      ],
      "answer": 0,
      "why": "Periodic fixed rate = (1 − Z4) / ΣZ = (1 − 0.9775) / 3.9459 = 0.5702% per quarter\nAnnualised = × 4 = 2.281%\n0.57% is the quarterly rate."
     },
     {
      "q": "For the first quarter, Corwen's net settlement is closest to:",
      "options": [
       "Corwen receives $411,915",
       "Corwen pays $868,085",
       "Corwen pays $411,915"
      ],
      "answer": 1,
      "why": "Corwen pays fixed: 0.5702% × 40,000,000 = $228,085\nCorwen receives the equity return, which is negative: −1.6% × 40,000,000 = −$640,000, so Corwen also pays $640,000.\nNet = 228,085 + 640,000 = Corwen pays $868,085"
     },
     {
      "q": "Sixty days after initiation, the value of the swap to Corwen (receive equity, pay fixed) is closest to:",
      "options": [
       "$1,000,000",
       "−$877,012",
       "$877,012"
      ],
      "answer": 2,
      "why": "Fixed leg per $1 = coupon × ΣZ + last Z = 0.005702 × 3.9590 + 0.9805 = 1.003075\nEquity leg per $1 = Index now / Index at start = 1,025 / 1,000 = 1.025\nValue (receive equity) = (1.025 − 1.003075) × 40,000,000 = $877,012"
     }
    ]
   },
   {
    "topic": "Derivatives",
    "body": "Two years ago, Vasquez Industrial, a eurozone company, entered a four-year currency swap with a US bank. At initiation, Vasquez exchanged €30 million for US dollars at the then spot rate of USD1.10/EUR. Vasquez pays a fixed USD rate of 4.0% (semi-annual) and receives floating EUR MRR (semi-annual) on the euro notional. Notional amounts are exchanged again at maturity.\n\nToday, four USD payments remain, at 6, 12, 18 and 24 months. The next EUR floating payment is due in 135 days and was set at 3.10% (annualised) for the current 180-day period. Spot is USD1.15/EUR.\n\nExhibit 1: Present Value Factors\n# Payment | USD factor | EUR factor\n135 days | – | 0.9885\n6 months | 0.9810 | –\n12 months | 0.9620 | –\n18 months | 0.9425 | –\n24 months | 0.9230 | –",
    "questions": [
     {
      "q": "The present value of the remaining USD fixed payments, including the notional, is closest to:",
      "options": [
       "USD35,486,220",
       "USD2,513,610",
       "USD32,972,610"
      ],
      "answer": 2,
      "why": "Step 1: USD notional = 30,000,000 × 1.10 = USD33,000,000\nStep 2: semi-annual coupon = 4%/2 × 33,000,000 = USD660,000\nPV = 660,000 × (0.981+0.962+0.9425+0.923) + 33,000,000 × 0.923 = USD32,972,610"
     },
     {
      "q": "The value of the swap to Vasquez, in euros, is closest to:",
      "options": [
       "€1,442,818",
       "€139,552",
       "−€1,442,818"
      ],
      "answer": 0,
      "why": "Step 3: EUR floating leg = (30,000,000 + 3.10%/2 × 30,000,000) × 0.9885 = €30,114,652 (a floating leg is worth par plus the known coupon at the next reset)\nStep 4: convert USD leg at TODAY's spot: 32,972,610 / 1.15 = €28,671,835\nValue (receive EUR, pay USD) = 30,114,652 − 28,671,835 = €1,442,818\n€139,552 wrongly uses the old spot rate 1.10."
     }
    ]
   },
   {
    "topic": "Derivatives",
    "body": "Ruth Okafor supervises the options desk at Tellis Securities. She reviews four positions: a long call, a short call, a long put and a short put, all on Ardent Mining shares. A client who owns 50,000 Ardent shares asks Okafor how buying put options on Ardent would change the risk of the client's position.",
    "questions": [
     {
      "q": "Which of the four positions has negative gamma and positive theta?",
      "options": [
       "Long call",
       "Short put",
       "Long put"
      ],
      "answer": 1,
      "why": "Long options (call or put): gamma +, vega +, theta −.\nShort options (call or put): gamma −, vega −, theta +.\nSo the short put (and the short call) has negative gamma and positive theta."
     },
     {
      "q": "Compared with holding the shares alone, the client's position after buying the puts will most likely have:",
      "options": [
       "lower delta and positive gamma",
       "lower delta and negative vega",
       "higher delta and negative gamma"
      ],
      "answer": 0,
      "why": "Long stock delta = +1. A long put has delta between −1 and 0, so total delta falls.\nA long put has gamma + and vega +, and the stock has none, so the position gains positive gamma and positive vega."
     },
     {
      "q": "Which Greeks are negative for a long put?",
      "options": [
       "Delta and gamma",
       "Delta and rho",
       "Gamma and vega"
      ],
      "answer": 1,
      "why": "Long put signs: delta −, gamma +, vega +, theta −, rho −.\nHigher rates lower put values, so rho is negative."
     }
    ]
   },
   {
    "topic": "Derivatives",
    "body": "Harlow Utilities has issued fixed-rate bonds. Its CFO, Lena Brandt, says: \"I want our debt to behave like floating-rate debt so that the market value of our liabilities is less sensitive to changes in interest rates.\"\n\nSeparately, Harlow's pension consultant, Omar Haddad, expects interest rates to rise sharply over the next year and wants a position that gains if they do, while limiting the loss if he is wrong.",
    "questions": [
     {
      "q": "To meet Brandt's objective, Harlow should enter into a swap in which it:",
      "options": [
       "pays fixed and receives an equity return",
       "pays floating and receives fixed",
       "pays fixed and receives floating"
      ],
      "answer": 1,
      "why": "Harlow pays fixed on its bonds. Receiving fixed and paying floating on a swap cancels the fixed payments and leaves floating-rate debt, whose value is much less sensitive to rate changes.\nTo reduce interest rate risk of fixed-rate debt: pay-floating interest rate swap."
     },
     {
      "q": "Haddad's view is best expressed with a:",
      "options": [
       "receiver swaption",
       "payer swaption",
       "receive-fixed interest rate swap"
      ],
      "answer": 1,
      "why": "If rates rise, the right to PAY fixed (and receive floating) at the old, lower rate becomes valuable: payer swap or payer swaption.\nThe swaption limits the loss to the premium if rates do not rise."
     }
    ]
   },
   {
    "topic": "Derivatives",
    "body": "Elena Vidal, an options strategist at Bruma Capital, presents three charts of implied volatility for options on the Iberia 35 index.\n\nChart 1 plots implied volatility against both exercise price and time to expiration.\nChart 2 shows that implied volatility is higher for deep in-the-money and deep out-of-the-money options than for at-the-money options.\nChart 3 shows implied volatility falling steadily as the exercise price rises, and Vidal notes that the slope became steeper during last month's sell-off.",
    "questions": [
     {
      "q": "Implied volatility is best described as the volatility that:",
      "options": [
       "is measured from past returns of the underlying index",
       "the dealer sets so that all exercise prices have the same option price",
       "is backed out of market option prices and reflects expected future volatility"
      ],
      "answer": 2,
      "why": "Implied volatility = the volatility that makes the model price equal the market option price. It is forward-looking (expected future volatility), unlike historical volatility."
     },
     {
      "q": "Chart 1 is best described as a volatility:",
      "options": [
       "skew",
       "surface",
       "smile"
      ],
      "answer": 1,
      "why": "Volatility surface = implied volatility across both exercise prices and maturities (a 3-D plot)."
     },
     {
      "q": "Which statement about Charts 2 and 3 is most accurate?",
      "options": [
       "Chart 2 is a volatility smile; Chart 3 is a skew, which steepens when demand for downside hedging rises",
       "Chart 2 is a volatility skew; Chart 3 is a smile, which flattens when demand for hedging rises",
       "Both charts show a smile, because implied volatility varies with exercise price"
      ],
      "answer": 0,
      "why": "Smile = implied volatility higher for ITM and OTM than ATM (U shape).\nSkew = implied volatility varies with exercise price in one direction (higher for low strikes); it steepens when demand for protective puts rises, so it does not have the shape of a smile."
     }
    ]
   },
   {
    "topic": "Quantitative Methods",
    "body": "Sofia Greco, an analyst at Aurelio Research, regresses the monthly excess return of a consumer-goods portfolio on three factors (market, size and value) using 60 monthly observations. Exhibit 1 shows the ANOVA results.\n\nExhibit 1: ANOVA for the Three-Factor Model\n# Source | Degrees of freedom | Sum of squares\nRegression | 3 | 0.0770\nError | 56 | 0.0480\nTotal | 59 | 0.1250\n\nGreco then estimates a restricted model that drops the size and value factors. Its sum of squared errors is 0.0560.\n\nGreco also compares two candidate models. Model A has AIC −310 and BIC −298. Model B has AIC −314 and BIC −296.\n\nGreco's colleague states: \"Adding another factor will always increase the adjusted R², so we should keep adding factors.\"",
    "questions": [
     {
      "q": "The standard error of estimate of the three-factor model is closest to:",
      "options": [
       "0.0293",
       "0.0371",
       "0.000857"
      ],
      "answer": 0,
      "why": "SEE = √MSE = √(SSE / (n − k − 1)) = √(0.048 / 56) = 0.0293\n0.000857 is the MSE (no square root)."
     },
     {
      "q": "The adjusted R² of the three-factor model is closest to:",
      "options": [
       "0.384",
       "0.616",
       "0.595"
      ],
      "answer": 2,
      "why": "R² = RSS / SST = 0.0770 / 0.125 = 0.6160\nAdjusted R² = 1 − [(n − 1)/(n − k − 1)] × (1 − R²) = 1 − (59/56) × 0.3840 = 0.595"
     },
     {
      "q": "The F-statistic for testing whether size and value are jointly zero is closest to:",
      "options": [
       "29.94",
       "4.14",
       "4.67"
      ],
      "answer": 2,
      "why": "Nested F = [(SSE_R − SSE_U)/q] / [SSE_U/(n − k − 1)] with q = 2\n= [(0.056 − 0.048)/2] / [0.048/56] = 4.67\n29.94 is the overall F-test (RSS/k ÷ SSE/(n−k−1)), which asks whether at least one factor explains Y."
     },
     {
      "q": "Based on AIC and BIC, which model is preferred for forecasting and which for goodness of fit?",
      "options": [
       "Model B for forecasting; Model A for goodness of fit",
       "Model B for both",
       "Model A for forecasting; Model B for goodness of fit"
      ],
      "answer": 0,
      "why": "Lower is better for both.\nAIC (better forecast): Model B (−314 < −310).\nBIC (better goodness of fit, heavier penalty for extra variables): Model A (−298 < −296)."
     },
     {
      "q": "Greco's colleague's statement is:",
      "options": [
       "correct, because R² never falls when a variable is added",
       "correct, because adjusted R² always lies between 0 and 1",
       "incorrect, because adjusted R² can fall when a variable is added and can even be negative"
      ],
      "answer": 2,
      "why": "R² never falls when a variable is added, but adjusted R² penalises extra variables: it falls when the new variable adds little, and it can be negative."
     }
    ]
   },
   {
    "topic": "Quantitative Methods",
    "body": "Arjun Mehta reviews three regressions built by junior analysts at Kittering Partners.\n\nRegression 1 explains bank loan growth. A Breusch–Pagan test is significant at the 1% level.\nRegression 2 explains housing starts with five macroeconomic variables. Its R² is 0.91 and the F-statistic is significant at the 1% level, but none of the five t-statistics is significant at the 5% level.\nRegression 3 is a time-series regression of monthly sales. A Breusch–Godfrey test is significant. Mehta also reports a Durbin–Watson statistic of 1.20; with this sample size, the lower and upper critical values are 1.39 and 1.60.",
    "questions": [
     {
      "q": "In Regression 1, the most likely consequence of the test result is that the t-statistics are:",
      "options": [
       "unaffected, because only the F-test is affected",
       "too high, so the analyst may wrongly reject true null hypotheses; robust (White) standard errors fix this",
       "too low, so significant variables look insignificant; adding variables fixes this"
      ],
      "answer": 1,
      "why": "Breusch–Pagan significant → conditional heteroskedasticity.\nStandard errors too low → t-statistics too high → Type I errors. The F-test is unreliable.\nFix: robust (White-corrected) standard errors."
     },
     {
      "q": "Regression 2 most likely suffers from:",
      "options": [
       "serial correlation, which can be checked with the Durbin–Watson test",
       "multicollinearity, which can be checked with variance inflation factors",
       "heteroskedasticity, which can be checked with the Breusch–Pagan test"
      ],
      "answer": 1,
      "why": "Signals of multicollinearity: large R², significant F, but low or insignificant t-statistics (inflated standard errors).\nDetect with VIF; fix by dropping or combining variables or increasing the sample."
     },
     {
      "q": "Based on the Durbin–Watson statistic, Regression 3 shows:",
      "options": [
       "positive serial correlation",
       "no serial correlation",
       "an inconclusive result"
      ],
      "answer": 0,
      "why": "Zones: 0 to dl = reject, positive serial correlation; dl to du = inconclusive; du to 4 − du = no serial correlation; then inconclusive; 4 − dl to 4 = negative serial correlation.\n1.20 < dl = 1.39 → positive serial correlation."
     },
     {
      "q": "The most appropriate correction for Regression 3 is to use:",
      "options": [
       "Newey–West (serial-correlation consistent) standard errors",
       "a smaller number of independent variables",
       "White standard errors only"
      ],
      "answer": 0,
      "why": "Serial correlation: test with Breusch–Godfrey (or DW), correct with robust Newey–West standard errors. White standard errors correct heteroskedasticity only."
     }
    ]
   },
   {
    "topic": "Quantitative Methods",
    "body": "Claire Dubois models quarterly time series at Nordhavn Bank.\n\nModel 1 is an AR(1) model of a quarterly inflation measure (in %): x(t) = 0.96 + 0.60 x(t−1). The latest value of x is 3.10.\n\nModel 2 is an AR(1) model of quarterly retail sales growth. The autocorrelations of its residuals are insignificant at lags 1 to 3, but the residual autocorrelation at lag 4 has a p-value of 0.012.\n\nModel 3 is a log-linear trend model of annual revenue (in millions): ln(revenue) = 4.20 + 0.035t. The next period is t = 41.\n\nDubois also wants to regress one series on another. Both series have a unit root, and an Engle–Granger test shows they are cointegrated.",
    "questions": [
     {
      "q": "Based on Model 1, the inflation measure next quarter is most likely to:",
      "options": [
       "stay the same, because the slope coefficient is less than 1",
       "rise, because 3.10 is below the mean-reverting level of 0.60",
       "fall, because 3.10 is above the mean-reverting level of 2.40"
      ],
      "answer": 2,
      "why": "Mean-reverting level = b0 / (1 − b1) = 0.96 / 0.40 = 2.40\nCurrent value 3.1 > 2.40 → the series is expected to fall toward the mean.\nCheck: forecast = 0.96 + 0.6 × 3.1 = 2.82 < 3.1."
     },
     {
      "q": "Based on Model 2, Dubois should conclude that the model:",
      "options": [
       "has a unit root, so the series should be first-differenced",
       "shows seasonality, and a lag-4 term should be added",
       "is correctly specified, because the first three lags are insignificant"
      ],
      "answer": 1,
      "why": "Quarterly data → check the 4th lag (monthly data → the 12th lag).\np-value 0.012 < 0.05 → significant seasonal autocorrelation → add x(t−4)."
     },
     {
      "q": "Based on Model 3, forecast revenue for t = 41 is closest to:",
      "options": [
       "280.1 million",
       "69.0 million",
       "5.63 million"
      ],
      "answer": 0,
      "why": "ln(revenue) = 4.20 + 0.035 × 41 = 5.635\nRevenue = e^5.635 = 280.1\nIf ln(1 + x) = a, then 1 + x = e^a: undo the log with e."
     },
     {
      "q": "Regarding the regression of one unit-root series on the other, the results are:",
      "options": [
       "valid, because the two series are cointegrated",
       "invalid, because both series have a unit root",
       "valid only if each series is first-differenced into its own AR(1) model"
      ],
      "answer": 0,
      "why": "Neither has a unit root → valid. Only one has a unit root → invalid. Both have unit roots and are cointegrated → valid. Both have unit roots and are not cointegrated → invalid."
     },
     {
      "q": "A time series is covariance stationary if:",
      "options": [
       "its slope coefficient in an AR(1) model is greater than 1",
       "its values never move away from their mean",
       "its mean, variance and covariance with its own lags are constant and finite"
      ],
      "answer": 2,
      "why": "Covariance stationarity: constant and finite expected value, constant and finite variance, and constant and finite covariance with leading or lagged values."
     }
    ]
   },
   {
    "topic": "Quantitative Methods",
    "body": "An analyst invests a fixed amount of money each month in a fund (cost averaging). Over five months the fund's unit price changes each month. She computes the arithmetic, geometric and harmonic means of the unit prices.",
    "questions": [
     {
      "q": "For a set of positive unit prices that are not all equal, the relationship between the three means is:",
      "options": [
       "arithmetic < geometric < harmonic",
       "harmonic < geometric < arithmetic",
       "geometric < harmonic < arithmetic"
      ],
      "answer": 1,
      "why": "For positive values that are not all equal: harmonic mean < geometric mean < arithmetic mean. They are equal only if all values are the same. The harmonic mean gives the average cost per unit under cost averaging."
     }
    ]
   },
   {
    "topic": "Quantitative Methods",
    "body": "Jonas Weber is building trading models at Halcyon Quant.\n\nModel X: Weber has 120 candidate features to predict monthly returns and wants an algorithm that shrinks the coefficients of unimportant features toward zero and removes some of them.\n\nModel Y: Weber wants to sort companies into \"likely default\" and \"unlikely default\" using a linear boundary that separates the two classes with the widest margin.\n\nModel Z: Weber wants to classify stocks as \"buy\" or \"sell\". The relationships between the features and the classification are non-linear and include interactions.",
    "questions": [
     {
      "q": "The algorithm best suited to Model X is:",
      "options": [
       "principal components analysis",
       "k-means clustering",
       "LASSO, a penalised regression"
      ],
      "answer": 2,
      "why": "LASSO (least absolute shrinkage and selection operator) is a penalised regression: it adds a penalty on the size of coefficients, shrinking some to zero and so selecting features. It is supervised."
     },
     {
      "q": "The algorithm best suited to Model Y is a:",
      "options": [
       "deep learning network with unlabelled data",
       "support vector machine",
       "hierarchical clustering algorithm"
      ],
      "answer": 1,
      "why": "SVM = linear classification algorithm that separates the data into one of two classes with the widest margin. Logit/probit models are also classification models for two classes."
     },
     {
      "q": "The algorithm best suited to Model Z is:",
      "options": [
       "LASSO (least absolute shrinkage and selection operator)",
       "principal components analysis (PCA)",
       "classification and regression tree (CART)"
      ],
      "answer": 2,
      "why": "Two classes (buy/sell) with non-linear relationships and interactions between features → CART."
     }
    ]
   }
  ]
 },
 {
  "id": "ps2",
  "title": "Practice set 2",
  "kind": "practice",
  "minutes": 132,
  "desc": "Quantitative Methods (ML, Big Data), Fixed Income",
  "vignettes": [
   {
    "topic": "Quantitative Methods",
    "body": "Maya Lindqvist explains unsupervised and deep learning methods to new hires at Fjord Analytics.\n\nMethod 1 groups 2,000 stocks. It starts with each stock as its own cluster and repeatedly merges the two closest clusters until one cluster remains.\nMethod 2 also groups stocks, but the analyst must choose the number of clusters, k, before running it.\nMethod 3 is a neural network with many hidden layers that learns to recognise patterns in satellite images.\n\nLindqvist warns that including a very large number of features can cause the model to fit noise. She plots a learning curve to check the problem.",
    "questions": [
     {
      "q": "Method 1 is best described as:",
      "options": [
       "divisive (top-down) hierarchical clustering",
       "k-means clustering",
       "agglomerative (bottom-up) hierarchical clustering"
      ],
      "answer": 2,
      "why": "Agglomerative = bottom-up: start with each observation as its own cluster and merge similar clusters over time.\nDivisive = top-down: start with one cluster and split it over time.\nk-means needs k (a hyperparameter) chosen in advance: that is Method 2."
     },
     {
      "q": "A neural network such as Method 3 is classified as a deep learning network when it has:",
      "options": [
       "at least two hidden layers (often more than 20)",
       "exactly one hidden layer",
       "no hidden layers but many input nodes"
      ],
      "answer": 0,
      "why": "Deep learning nets (DLNs) have at least 2 hidden layers, and in practice often more than 20."
     },
     {
      "q": "Which statement about Lindqvist's warning is most accurate?",
      "options": [
       "Overfitting is mainly a concern for unsupervised learning; a learning curve plots the number of clusters against accuracy",
       "Overfitting is a concern for supervised learning; a learning curve plots accuracy in the validation or test sample against the size of the training sample",
       "Overfitting cannot occur when many features are used; a learning curve plots training time against the number of features"
      ],
      "answer": 1,
      "why": "Overfitting (fitting noise, often with too many features) is a problem for supervised learning, not unsupervised learning.\nLearning curve: accuracy in the validation/test sample versus the size of the training sample."
     }
    ]
   },
   {
    "topic": "Quantitative Methods",
    "body": "Rosa Delgado leads a big data project at Calloway Credit to predict loan defaults from structured borrower data. Her team follows five steps but has written them in the wrong order: data exploration; data collection; model training; conceptualisation of the modelling task; data preparation and wrangling.\n\nDuring data preparation the team finds the following problems in the raw data:\nProblem 1: Some borrowers have no income recorded.\nProblem 2: Dates of birth are recorded as DD/MM/YYYY for some borrowers and as YYYY-MM-DD for others.\nProblem 3: The same borrower appears twice with identical records.\n\nThe team then transforms the data. It creates an \"age\" variable from date of birth and replaces extreme income values with the value at the 99th percentile. Finally it rescales income so that its values lie between 0 and 1.",
    "questions": [
     {
      "q": "The correct order of the five steps for a structured data project is:",
      "options": [
       "conceptualisation, data collection, data preparation and wrangling, data exploration, model training",
       "conceptualisation, data exploration, data collection, model training, data preparation and wrangling",
       "data collection, conceptualisation, data exploration, data preparation and wrangling, model training"
      ],
      "answer": 0,
      "why": "Structured data: conceptualisation of the modelling task → data collection → data preparation and wrangling → data exploration → model training."
     },
     {
      "q": "Problems 1, 2 and 3 are, respectively, examples of:",
      "options": [
       "missing values, non-uniformity and duplication errors",
       "missing values, invalid values and non-uniformity errors",
       "invalid values, inaccuracy and duplication errors"
      ],
      "answer": 0,
      "why": "Data cleansing deals with errors in raw data: missing values, invalid values, inaccurate values, non-uniformity (same data in different formats) and duplicates."
     },
     {
      "q": "Creating age from date of birth and replacing extreme incomes with the 99th-percentile value are best described as:",
      "options": [
       "selection and standardisation",
       "extraction and winsorisation",
       "aggregation and trimming"
      ],
      "answer": 1,
      "why": "Data wrangling transformations: extraction (create a new variable from an existing one), aggregation, filtration (remove rows), selection (remove columns).\nOutliers: trimming removes them; winsorisation replaces them with the value at a set percentile."
     },
     {
      "q": "The final rescaling of income is best described as:",
      "options": [
       "winsorisation, which removes outliers",
       "standardisation, which centres the variable at a mean of 0",
       "normalisation, which is sensitive to outliers"
      ],
      "answer": 2,
      "why": "Normalisation rescales to the range 0 to 1 (sensitive to outliers).\nStandardisation centres at mean 0 with standard deviation 1 (assumes roughly normal data)."
     }
    ]
   },
   {
    "topic": "Quantitative Methods",
    "body": "Kenji Arai is building a sentiment model from 50,000 web news articles at Okubo Advisors. The steps of a text project are text problem formulation, data curation, text preparation and wrangling, text exploration, and model training.\n\nArai's raw text contains HTML tags, punctuation, numbers and extra white space. He then applies four wrangling steps to the cleansed tokens: converting to lower case, removing words such as \"the\" and \"is\", reducing \"integrated\", \"integrating\" and \"integration\" to \"integr\", and converting \"better\" to \"good\" using a dictionary.\n\nAfter wrangling, Arai builds a bag of words and computes document frequency (DF) and mutual information (MI) for each token. He also converts the categorical feature \"sector\" into binary columns.",
    "questions": [
     {
      "q": "Removing HTML tags, punctuation, numbers and white space is part of:",
      "options": [
       "text wrangling (preprocessing)",
       "text exploration",
       "text cleansing"
      ],
      "answer": 2,
      "why": "Text cleansing: remove HTML tags, punctuation (keeping meaningful symbols such as % or $, replaced with tokens), numbers and white spaces.\nText wrangling (preprocessing) then works on tokens: lowercasing, stop-word removal, stemming, lemmatisation."
     },
     {
      "q": "Reducing words to \"integr\" and converting \"better\" to \"good\" are, respectively:",
      "options": [
       "lemmatisation and stemming",
       "stemming and lemmatisation",
       "tokenisation and stemming"
      ],
      "answer": 1,
      "why": "Stemming cuts words to a common base (\"integr\"), which may not be a real word.\nLemmatisation uses morphology and a dictionary to get the real base word (lemma): \"better\" → \"good\". It is more computationally expensive."
     },
     {
      "q": "Converting \"sector\" into binary columns is called:",
      "options": [
       "n-gram creation",
       "bag of words",
       "one-hot encoding"
      ],
      "answer": 2,
      "why": "One-hot encoding turns a categorical feature into binary dummy variables."
     },
     {
      "q": "Which statement about DF and MI is most accurate?",
      "options": [
       "Stop words have a low DF, and MI measures the number of documents in the corpus",
       "Stop words have a high DF, and MI measures how much a token contributes to identifying a class",
       "Rare names have a high DF, and MI measures how often a token appears in a document"
      ],
      "answer": 1,
      "why": "DF = number of documents containing the token ÷ total documents. Stop words → high DF; important words → medium DF; rare words such as names → low DF.\nMI = how much a token contributes to a class (0 = not informative, 1 = strongly linked to one class)."
     },
     {
      "q": "Arai's four wrangling steps are completed. The next step is most likely to:",
      "options": [
       "remove HTML tags from the tokens",
       "create a bag of words from the normalised tokens",
       "return to text problem formulation"
      ],
      "answer": 1,
      "why": "After cleansing and wrangling (normalisation), the tokens are collected into a bag of words (BOW), and then a document term matrix is built."
     }
    ]
   },
   {
    "topic": "Fixed Income",
    "body": "Nadia Rahman manages credit strategies at Belcourt Partners and discusses five trade ideas with her analyst, Leo Fischer.\n\nIdea 1: Fischer expects the credit quality of Varga Steel to improve.\nIdea 2: The CDS curve of Delmont Telecom is upward sloping, and Fischer expects it to steepen.\nIdea 3: Rahman expects the economy to strengthen. She wants to trade high-yield and investment-grade CDS indexes against each other.\nIdea 4: Hollis Retail's bonds yield a spread over MRR that is larger than its CDS spread for the same maturity.\nIdea 5: Fischer believes Pratt Foods will be taken over in a leveraged buyout financed mostly with new debt.",
    "questions": [
     {
      "q": "For Idea 1, Belcourt should:",
      "options": [
       "buy protection on Varga Steel",
       "buy protection on a CDS index that includes Varga Steel",
       "sell protection on Varga Steel"
      ],
      "answer": 2,
      "why": "Credit improves → CDS spread falls → protection seller gains: sell protection = long credit.\nCredit deteriorates → buy protection = short credit."
     },
     {
      "q": "For Idea 2, the most appropriate trade is to:",
      "options": [
       "buy protection at both maturities",
       "buy protection on short-maturity CDS and sell protection on long-maturity CDS",
       "sell protection on short-maturity CDS and buy protection on long-maturity CDS"
      ],
      "answer": 2,
      "why": "Steepening = long-maturity spreads rise relative to short-maturity spreads.\nBuy protection (short credit) at the long end, sell protection (long credit) at the short end."
     },
     {
      "q": "For Idea 3, Rahman should:",
      "options": [
       "sell protection on the high-yield index and buy protection on the investment-grade index",
       "buy protection on the high-yield index and sell protection on the investment-grade index",
       "buy protection on both indexes"
      ],
      "answer": 0,
      "why": "A stronger economy narrows high-yield spreads more than investment-grade spreads.\nHigh yield: sell protection. Investment grade: buy protection."
     },
     {
      "q": "For Idea 4, the basis trade is to:",
      "options": [
       "buy the bond and buy CDS protection",
       "buy the bond and sell CDS protection",
       "sell the bond and sell CDS protection"
      ],
      "answer": 0,
      "why": "Bond spread > CDS spread (negative basis) → buy the bond and buy protection (earn the bond spread, pay the smaller CDS spread).\nBond spread < CDS spread → sell the bond and sell protection.\nBond spread = bond yield − MRR, a credit risk premium."
     },
     {
      "q": "For Idea 5, the most appropriate strategy is to:",
      "options": [
       "buy Pratt Foods shares and sell CDS protection on Pratt Foods",
       "buy Pratt Foods shares and buy CDS protection on Pratt Foods",
       "sell Pratt Foods shares and sell CDS protection on Pratt Foods"
      ],
      "answer": 1,
      "why": "In an LBO the target's shares usually rise (takeover premium), while its heavy new debt weakens its credit, so its CDS spread widens: buy shares and buy protection."
     }
    ]
   },
   {
    "topic": "Fixed Income",
    "body": "Irene Castell, a credit analyst at Duvall Bank, reviews two CDS positions.\n\nPosition 1: A five-year CDS on Kessler Chemicals has a standard coupon of 1.00%. The current CDS spread is 3.20% and the CDS duration is 4.6.\n\nPosition 2: Duvall owns €10 million par of Rocher SA bonds and bought €10 million of CDS protection on Rocher. Rocher has just defaulted. Duvall's bonds now trade at 40% of par, and the cheapest-to-deliver Rocher bond trades at 32% of par. The CDS is cash settled.",
    "questions": [
     {
      "q": "The CDS price per 100 of par for Position 1 is closest to:",
      "options": [
       "85.28",
       "89.88",
       "110.12"
      ],
      "answer": 1,
      "why": "Upfront premium ≈ (CDS spread − coupon) × duration = (3.20% − 1.00%) × 4.6 = 10.12% of notional (paid by the protection buyer).\nCDS price per 100 par = 100 − upfront premium = 100 − 10.12 = 89.88"
     },
     {
      "q": "For Position 2, the total value of Duvall's bonds plus the CDS payoff is closest to:",
      "options": [
       "€9.2 million",
       "€10.0 million",
       "€10.8 million"
      ],
      "answer": 2,
      "why": "Bonds: €10m × 40% = €4.0m\nCDS payoff (cash settled on the cheapest-to-deliver): €10m × (1 − 32%) = €6.8m\nTotal = €10.8m. The payoff is based on the cheapest-to-deliver bond, not on the bond Duvall holds."
     }
    ]
   },
   {
    "topic": "Fixed Income",
    "body": "Tobias Lang evaluates a single-A rated corporate bond for Ostend Fixed Income Fund. The bond has a yield to maturity of 4.30% and a modified duration of 5.2. Exhibit 1 shows one-year rating transition probabilities for an A-rated bond and the change in credit spread if the rating changes.\n\nExhibit 1: One-Year Transition Probabilities and Spread Changes\n# New rating | Probability | Change in spread\nAA | 4% | −45 bps\nA | 90% | 0 bps\nBBB | 5% | +60 bps\nBB | 1% | +200 bps",
    "questions": [
     {
      "q": "The expected percentage price change from credit migration over the year is closest to:",
      "options": [
       "−0.26%",
       "+0.17%",
       "−0.17%"
      ],
      "answer": 2,
      "why": "Each rating: probability × (−modified duration × change in spread).\nUpgrade (spread falls) → positive; downgrade → negative.\nAA: 0.04 × (−5.2 × −0.0045) = +0.0936%\nBBB: 0.05 × (−5.2 × 0.0060) = −0.1560%\nBB: 0.01 × (−5.2 × 0.0200) = −0.1040%\nSum = -0.166%"
     },
     {
      "q": "Taking credit migration into account, the bond's expected one-year return is closest to:",
      "options": [
       "4.30%",
       "4.47%",
       "4.13%"
      ],
      "answer": 2,
      "why": "Expected return ≈ yield + expected migration effect = 4.30% + (-0.17%) = 4.13%\nCredit migration usually lowers the expected return, because downgrades are larger and more likely than upgrades."
     }
    ]
   },
   {
    "topic": "Fixed Income",
    "body": "Charlotte Reyes, a fixed-income analyst at Penrose Capital, uses the arbitrage-free framework. Exhibit 1 shows the current par curve for annual-pay government bonds.\n\nExhibit 1: Par Curve\n# Maturity (years) | Par rate\n1 | 2.00%\n2 | 2.50%\n3 | 2.90%\n\nReyes is asked whether a three-year, 4.0% annual-coupon government bond trading at 102.60 is mispriced. Her steps are: (1) bootstrap spot rates from the par curve; (2) discount the bond's cash flows at the spot rates; (3) compare the value with the market price.",
    "questions": [
     {
      "q": "The three-year spot rate is closest to:",
      "options": [
       "2.917%",
       "2.467%",
       "2.900%"
      ],
      "answer": 0,
      "why": "Bootstrapping: s1 = 2.00%.\nTwo years: 2.50/(1.02) + 102.50/(1 + s2)² = 100 → s2 = 2.5063%\nThree years: 2.90/1.02 + 2.90/(1 + s2)² + 102.90/(1 + s3)³ = 100 → s3 = 2.9167%"
     },
     {
      "q": "The arbitrage-free value of the bond is closest to:",
      "options": [
       "103.13",
       "102.60",
       "105.77"
      ],
      "answer": 0,
      "why": "Value = 4/1.02 + 4/(1 + 2.5063%)² + 104/(1 + 2.9167%)³ = 103.13\nEach cash flow is discounted at its own spot rate, not at one rate."
     },
     {
      "q": "Based on Reyes's analysis, the bond is:",
      "options": [
       "overvalued, so it should be sold",
       "undervalued, so it should be bought",
       "fairly priced, because its coupon is above the par rate"
      ],
      "answer": 1,
      "why": "Arbitrage-free value 103.13 vs market price 102.60. Value > price → undervalued → buy."
     },
     {
      "q": "The bond's yield to maturity at its arbitrage-free value is closest to:",
      "options": [
       "3.079%",
       "2.894%",
       "4.000%"
      ],
      "answer": 1,
      "why": "N = 3, PMT = 4, FV = 100, PV = −103.1344 → I/Y = 2.894%\nThe YTM is a single blended rate, slightly below the 3-year spot rate for a coupon bond on an upward-sloping curve."
     },
     {
      "q": "The one-year forward rate two years from now, f(2,1), is closest to:",
      "options": [
       "2.917%",
       "3.742%",
       "3.015%"
      ],
      "answer": 1,
      "why": "(1 + s3)³ = (1 + s2)² × (1 + f(2,1))  (expanded: (1 + s_n)^n = (1 + s1)(1 + f1,1)…(1 + f n−1,1))\nf(2,1) = (1 + 2.9167%)³ / (1 + 2.5063%)² − 1 = 3.742%"
     }
    ]
   },
   {
    "topic": "Fixed Income",
    "body": "Ines Moreau compares money market and swap spreads for Galloway Treasury Services.\n\nExhibit 1: Selected Rates\n# Instrument | Rate\nThree-year swap fixed rate | 3.45%\nThree-year government bond yield | 3.10%\nThree-month MRR | 2.95%\nThree-month Treasury bill yield | 2.60%",
    "questions": [
     {
      "q": "The three-year swap spread is closest to:",
      "options": [
       "50 bps",
       "85 bps",
       "35 bps"
      ],
      "answer": 2,
      "why": "Swap spread = swap fixed rate − government bond yield of the same maturity = 3.45% − 3.10% = 0.35% = 35 bps."
     },
     {
      "q": "The TED spread is closest to:",
      "options": [
       "35 bps (three-month MRR minus the three-month T-bill yield)",
       "15 bps (three-year swap rate minus three-month MRR)",
       "85 bps (three-year swap rate minus the three-month T-bill yield)"
      ],
      "answer": 0,
      "why": "TED spread = three-month MRR − three-month Treasury bill yield = 2.95% − 2.60% = 35 bps. It reflects credit and liquidity risk in the banking system."
     }
    ]
   },
   {
    "topic": "Fixed Income",
    "body": "Ferdinand Osei analyses a convertible bond issued by Brightwater Energy for Cathay Ridge Capital. Each bond has a par value of $1,000 and can be converted into 25 Brightwater shares. The convertible trades at $1,080, Brightwater shares trade at $38.00, and the value of an otherwise identical straight bond is $960.",
    "questions": [
     {
      "q": "The conversion price of the bond is closest to:",
      "options": [
       "$43.20",
       "$40.00",
       "$38.00"
      ],
      "answer": 1,
      "why": "Conversion price = par value of the convertible ÷ conversion ratio = 1,000 / 25 = $40.00 (fixed at issue).\n$43.20 is the market conversion price (market price ÷ conversion ratio)."
     },
     {
      "q": "The minimum value of the convertible bond is closest to:",
      "options": [
       "$950",
       "$960",
       "$1,080"
      ],
      "answer": 1,
      "why": "Conversion value = share price × conversion ratio = 38.00 × 25 = $950\nMinimum value = max(conversion value, straight value) = max(950, 960) = $960"
     },
     {
      "q": "The market conversion premium ratio is closest to:",
      "options": [
       "12.04%",
       "12.50%",
       "13.68%"
      ],
      "answer": 2,
      "why": "Market conversion price = 1080 / 25 = $43.20\nMarket conversion premium per share = 43.20 − 38.00 = $5.20\nPremium ratio = 5.20 / 38.00 = 13.68%"
     },
     {
      "q": "The premium over straight value is closest to:",
      "options": [
       "12.50%",
       "13.68%",
       "11.11%"
      ],
      "answer": 0,
      "why": "Premium over straight value = (market price of convertible / straight value) − 1 = 1080/960 − 1 = 12.50%"
     }
    ]
   },
   {
    "topic": "Fixed Income",
    "body": "Osei continues his analysis of the Brightwater convertible. The conversion price is above Brightwater's current share price. The bond's terms include a threshold dividend: if Brightwater pays dividends above the threshold, the conversion ratio is adjusted.\n\nOsei also notes that over the past month Brightwater's share price fell 12%, while the convertible's price fell only 4%.",
    "questions": [
     {
      "q": "Because the conversion price is above the current share price, the convertible's risk and return are most likely driven by:",
      "options": [
       "interest rates and credit spreads, like a straight bond",
       "the share price, like the common stock",
       "neither, because the bond is a hybrid"
      ],
      "answer": 0,
      "why": "Conversion price > share price (option out of the money) → behaves like a bond: interest rate and credit spread risk.\nConversion price < share price → behaves like the stock.\nRoughly equal → hybrid."
     },
     {
      "q": "If Brightwater pays a dividend above the threshold, the conversion ratio most likely:",
      "options": [
       "decreases, so the conversion price rises and the conversion value falls",
       "stays the same, but the straight value of the bond rises to compensate holders",
       "increases, so the conversion price falls and the conversion value rises"
      ],
      "answer": 2,
      "why": "Dividends above the threshold → conversion ratio rises to compensate holders.\nConversion price = par / conversion ratio → falls.\nConversion value = share price × conversion ratio → rises."
     },
     {
      "q": "The convertible fell less than the share price mainly because:",
      "options": [
       "its straight value sets a floor under its price",
       "the call option on the shares gained value as the share price fell",
       "its conversion ratio rose when the share price fell"
      ],
      "answer": 0,
      "why": "Convertible = straight bond + call option on the stock. As the share price falls, the bond's straight value (the floor) limits the decline, so the convertible falls by a smaller percentage than the stock."
     }
    ]
   },
   {
    "topic": "Fixed Income",
    "body": "Gabriela Silva, a portfolio manager at Tamsin Fixed Income, compares bonds with embedded options. All bonds have the same issuer, maturity and coupon unless stated otherwise.\n\nBond P is a floating-rate note whose coupon resets once a year; the next reset is in one year.\nBond Q is callable, Bond R is putable and Bond S is an option-free (straight) bond.\n\nSilva expects interest-rate volatility to rise. She also expects the upward-sloping yield curve to flatten while the level of rates is unchanged.",
    "questions": [
     {
      "q": "The effective duration of Bond P is closest to:",
      "options": [
       "1",
       "the bond's years to maturity",
       "0"
      ],
      "answer": 0,
      "why": "A floating-rate bond's effective duration is close to the time to the next reset. With annual resets and the next reset in one year, effective duration ≈ 1."
     },
     {
      "q": "If interest rates fall sharply, compared with Bond S, Bond Q's effective duration most likely:",
      "options": [
       "stays the same as Bond S's duration",
       "rises and its convexity stays positive",
       "falls and its convexity becomes negative"
      ],
      "answer": 2,
      "why": "Callable bond when rates fall: the call is likely to be exercised, so duration falls below that of the straight bond and convexity becomes negative (price compression).\nWhen rates rise, the callable behaves like the straight bond."
     },
     {
      "q": "Which ordering of prices is most likely correct?",
      "options": [
       "Bond S < Bond Q < Bond R",
       "Bond Q < Bond S < Bond R",
       "Bond R < Bond S < Bond Q"
      ],
      "answer": 1,
      "why": "Callable = straight − call option (investor is short the call) → cheapest.\nPutable = straight + put option (investor is long the put) → most expensive."
     },
     {
      "q": "If interest-rate volatility rises, the values of Bond Q and Bond R most likely:",
      "options": [
       "rise and fall, respectively",
       "fall and rise, respectively",
       "both rise"
      ],
      "answer": 1,
      "why": "Higher volatility raises the value of both options.\nCallable = straight − call → falls. Putable = straight + put → rises."
     },
     {
      "q": "If the upward-sloping yield curve flattens, the value of the call option in Bond Q and the value of Bond R most likely:",
      "options": [
       "fall and rise, respectively",
       "both rise",
       "rise and fall, respectively"
      ],
      "answer": 2,
      "why": "Upward-sloping curve flattens → long-term forward rates fall → the call is more likely to be exercised: call value rises and the callable bond falls.\nThe put is less likely to be exercised: put value falls, so the putable bond falls."
     }
    ]
   },
   {
    "topic": "Fixed Income",
    "body": "Silva compares two option-adjusted spreads (OAS) calculated with the same interest rate tree. Bond T has an OAS of 85 bps and Bond U has an OAS of 60 bps. Both bonds are callable, have similar terms and have the same credit rating.\n\nA junior analyst states: \"The rates in the binomial tree are our forecasts of future interest rates.\"",
    "questions": [
     {
      "q": "Based on the OAS, Silva should conclude that:",
      "options": [
       "Bond T is cheaper than Bond U",
       "the OAS cannot be compared because the bonds are callable",
       "Bond U is cheaper than Bond T"
      ],
      "answer": 0,
      "why": "OAS can be compared only for bonds with the same credit rating (and the same tree). A larger OAS means the bond is cheaper (underpriced), so buy Bond T."
     },
     {
      "q": "The junior analyst's statement is:",
      "options": [
       "incorrect, because the rates in the tree are not forecasts but stochastic paths consistent with the volatility assumption and current prices",
       "correct, because each node gives the most likely rate at that date, based on the volatility assumption and economic forecasts",
       "correct, because the tree is calibrated to the expected future short-term rates implied by analysts' forecasts"
      ],
      "answer": 0,
      "why": "The binomial tree's interest rate movements are not predictions: they are random (stochastic) paths calibrated to today's par curve and an assumed volatility, so the tree is arbitrage-free."
     }
    ]
   },
   {
    "topic": "Fixed Income",
    "body": "Silva values a two-year floating-rate note with an annual coupon equal to the one-year reference rate set at the start of each year, paid at the end of the year. The coupon is capped at 4.8%. Exhibit 1 shows the calibrated binomial interest rate tree (equal probabilities).\n\nExhibit 1: One-Year Rates\n# Node | Rate\nTime 0 | 3.20%\nTime 1, upper node | 5.40%\nTime 1, lower node | 3.80%",
    "questions": [
     {
      "q": "The value of the capped floater is closest to:",
      "options": [
       "100.00",
       "99.72",
       "99.43"
      ],
      "answer": 1,
      "why": "Time 1 upper: rate 5.40% > cap → coupon 4.8: value = 104.80/1.054 = 99.4307\nTime 1 lower: coupon = rate 3.80%: value = 103.80/1.038 = 100.0000\nTime 0: coupon 3.20 (below cap): value = [0.5 × (99.4307 + 3.20) + 0.5 × (100.0000 + 3.20)] / 1.032 = 99.72\nAn uncapped floater would be worth 100."
     },
     {
      "q": "The cap in this note most likely benefits:",
      "options": [
       "the investor, and the value of the cap is about 0.28 per 100",
       "the investor, because a floor also applies",
       "the issuer, and the value of the embedded cap is about 0.28 per 100"
      ],
      "answer": 2,
      "why": "A cap limits the coupon the issuer pays when rates rise, so it benefits the issuer; the investor is short the cap.\nCap value = straight floater − capped floater = 100 − 99.72 = 0.28\nA floor (minimum coupon) would benefit the investor."
     }
    ]
   }
  ]
 },
 {
  "id": "ps3",
  "title": "Practice set 3",
  "kind": "practice",
  "minutes": 132,
  "desc": "Fixed Income (term structure, embedded options, CDS), Credit Analysis Models",
  "vignettes": [
   {
    "topic": "Fixed Income",
    "body": "Bettina Kral teaches a term structure workshop at Danube Fixed Income. She describes four models of the short-term interest rate r:\n\nModel 1 (Cox–Ingersoll–Ross): dr = a(b − r)dt + σ√r dz\nModel 2 (Vasicek): dr = a(b − r)dt + σ dz\nModel 3 (Ho–Lee): dr = θ(t)dt + σ dz\nModel 4 (Kalotay–Williams–Fabozzi): d ln(r) = θ(t)dt + σ dz\n\nA participant asks which models are calibrated so that they reproduce current market prices of benchmark bonds.",
    "questions": [
     {
      "q": "Which of Models 1 and 2 can produce negative interest rates?",
      "options": [
       "Model 1 only",
       "Model 2 only",
       "Both Model 1 and Model 2"
      ],
      "answer": 1,
      "why": "In CIR, volatility is σ√r, so it shrinks to zero as r approaches zero: rates cannot become negative.\nIn Vasicek, volatility σ is constant and does not depend on r, so rates can become negative."
     },
     {
      "q": "In which model does interest rate volatility increase as the level of rates rises?",
      "options": [
       "Model 1",
       "Model 2",
       "Model 3"
      ],
      "answer": 0,
      "why": "CIR: the volatility term σ√r grows with r. Vasicek and Ho–Lee have constant volatility σ."
     },
     {
      "q": "Models 3 and 4 are best described as:",
      "options": [
       "equilibrium models that allow rates to drift to a long-run level b",
       "arbitrage-free models, which take current bond prices as given and assume they are correctly priced",
       "equilibrium models, which are built from macroeconomic assumptions and need fewer parameters"
      ],
      "answer": 1,
      "why": "Arbitrage-free models (Ho–Lee, KWF) use a time-dependent drift θ(t) calibrated to market prices, assuming those bonds are correctly priced.\nEquilibrium models (CIR, Vasicek) describe the economy, mean-revert to b and need fewer parameters to estimate."
     },
     {
      "q": "Compared with Model 3, a key feature of Model 4 is that:",
      "options": [
       "rates cannot become negative, because the model describes the logarithm of r",
       "the model is an equilibrium model with mean reversion",
       "volatility rises with the level of rates through √r"
      ],
      "answer": 0,
      "why": "KWF models ln(r), so r = e^(ln r) is always positive (log-normal rates). Ho–Lee models r itself with constant volatility, so rates can go negative."
     }
    ]
   },
   {
    "topic": "Fixed Income",
    "body": "Kral gives the class a two-asset example. Both assets are risk free and mature at time 1.\n\nExhibit 1: Two Risk-Free Assets\n# Asset | Price today | Payoff at time 1\nA | 500 | 520\nB | 1,000 | 1,060",
    "questions": [
     {
      "q": "Based on the dominance principle, the arbitrage strategy and its profit at time 1 are:",
      "options": [
       "short sell two units of A, buy one unit of B: profit of 20",
       "buy one unit of A, short sell one unit of B: profit of 60",
       "buy two units of A, short sell one unit of B: profit of 20"
      ],
      "answer": 0,
      "why": "Price per 1 of payoff: A = 500/520 = 0.9615; B = 1,000/1,060 = 0.9434. B is cheaper.\nBuy the cheap asset, sell the expensive one at zero net cost: short 2 A (+1,000), buy 1 B (−1,000).\nTime 1: receive 1,060 from B, pay 2 × 520 = 1,040 on A → profit 20."
     }
    ]
   },
   {
    "topic": "Fixed Income",
    "body": "Kral then shows one interest rate path generated from a calibrated binomial tree. The tree has nodes at times 0, 1, 2 and 3. Along the path the one-year rates are 2.0% (time 0 to 1), 3.1% (time 1 to 2), 3.8% (time 2 to 3) and 4.4% (time 3 to 4).\n\nShe values a three-year, 4% annual-coupon, option-free bond along this path using the pathwise method.",
    "questions": [
     {
      "q": "The value of the bond along this path is closest to:",
      "options": [
       "103.00",
       "102.65",
       "100.68"
      ],
      "answer": 0,
      "why": "Pathwise: discount each cash flow by the product of the one-year rates along the path (not by spot rates).\n4/1.020 + 4/(1.020 × 1.031) + 104/(1.020 × 1.031 × 1.038) = 103.00\nA three-year bond needs only the first three rates; the 4.4% rate (time 3 to 4) is not used.\n100.68 wrongly treats the path rates as spot rates."
     },
     {
      "q": "For an option-free bond, the value found by discounting at spot rates compared with the value from a calibrated binomial tree is:",
      "options": [
       "lower when the assumed volatility is higher",
       "the same, whatever volatility is assumed",
       "higher when the assumed volatility is higher"
      ],
      "answer": 1,
      "why": "A calibrated tree reprices the benchmark bonds, so an option-free bond has the same value from the tree as from spot rates, regardless of the volatility used. Volatility matters only for bonds with embedded options."
     }
    ]
   },
   {
    "topic": "Fixed Income",
    "body": "Before valuing callable bonds, Danube's analysts calibrate a binomial interest rate tree. A trainee lists the inputs he thinks are needed:\n\nInput 1: An assumed interest rate volatility.\nInput 2: An interest rate model, such as a log-normal model.\nInput 3: The observed market values of benchmark bonds.\nInput 4: Analysts' forecasts of future interest rates.",
    "questions": [
     {
      "q": "Which inputs are needed to calibrate the tree?",
      "options": [
       "Inputs 1 and 4 only",
       "Inputs 1, 2, 3 and 4",
       "Inputs 1, 2 and 3 only"
      ],
      "answer": 2,
      "why": "Calibration needs volatility, an interest rate model (for example log-normal rates) and the market values of benchmark bonds. Rates in the tree are not forecasts; they are random (stochastic) paths consistent with today's prices."
     }
    ]
   },
   {
    "topic": "Fixed Income",
    "body": "Marta Quiroga, an analyst at Solaris Bank, writes a note for clients on yields and spreads.\n\nStatement 1: \"A bond's yield to maturity is the return an investor earns only if the bond is held to maturity, there is no default, and all coupons are reinvested at the yield to maturity.\"\nStatement 2: \"In countries where government bonds trade with low liquidity, the swap curve is often a better benchmark than the government curve.\"\nStatement 3: \"The TED spread and the MRR–OIS spread both measure liquidity and credit risk in the banking system.\"\n\nQuiroga also describes a measure of the spread that, when added to each spot rate on the benchmark curve, makes the present value of a bond's cash flows equal to its market price. She notes that SOFR is a secured overnight rate based on the repo market.",
    "questions": [
     {
      "q": "If the coupons of a bond held to maturity are reinvested at a rate below its yield to maturity, the realised return will be:",
      "options": [
       "below the yield to maturity",
       "equal to the yield to maturity",
       "above the yield to maturity"
      ],
      "answer": 0,
      "why": "One YTM assumption is that coupons are reinvested at the YTM. A lower reinvestment rate gives a realised return below the YTM."
     },
     {
      "q": "Which of Quiroga's statements are correct?",
      "options": [
       "Statements 1 and 2 only",
       "Statements 1, 2 and 3",
       "Statement 3 only"
      ],
      "answer": 1,
      "why": "All three are correct. TED = three-month MRR − T-bill yield; MRR–OIS = MRR − overnight indexed swap rate; both reflect bank credit and liquidity risk. Where government bonds are illiquid, swap curves are a superior benchmark."
     },
     {
      "q": "The spread measure Quiroga describes is the:",
      "options": [
       "swap spread",
       "I-spread",
       "Z-spread"
      ],
      "answer": 2,
      "why": "Z-spread: constant spread added to each benchmark spot rate so that PV of cash flows = market price.\nI-spread = bond yield − swap rate of the same maturity.\nSwap spread = swap rate − government bond yield."
     }
    ]
   },
   {
    "topic": "Fixed Income",
    "body": "Quiroga needs the swap spread for a corporate bond that matures in 3.40 years. Exhibit 1 gives the data she has.\n\nExhibit 1: Yields and Swap Rates (%)\n# | 3 years | 4 years\nOff-the-run government yield | 0.70 | 0.86\nOn-the-run government yield | 0.62 | 0.78\nSwap rate | 1.38 | 1.51",
    "questions": [
     {
      "q": "Using linear interpolation, the swap spread for 3.40 years is closest to:",
      "options": [
       "75 bps",
       "143 bps",
       "67 bps"
      ],
      "answer": 0,
      "why": "Swap spread = swap rate − on-the-run government yield, both interpolated to 3.40 years.\nSwap rate = 1.38 + 0.40 × (1.51 − 1.38) = 1.432%\nOn-the-run = 0.62 + 0.40 × (0.78 − 0.62) = 0.684%\nSpread = 1.432 − 0.684 = 0.748% ≈ 75 bps\n67 bps uses the off-the-run yield; 143 bps is the swap rate, not the spread."
     }
    ]
   },
   {
    "topic": "Fixed Income",
    "body": "Quiroga's colleague, Diego Navas, computes forward prices. The three-year forward rate two years from now, f(2,3), is 3.2% (annual compounding).\n\nNavas also comments on interest rate volatility: \"Volatility of short-term rates is driven mainly by monetary policy, while volatility of long-term rates is driven mainly by expectations for the economy and inflation.\"",
    "questions": [
     {
      "q": "The forward price, two years from now, of a zero-coupon bond paying 1 at year 5 is closest to:",
      "options": [
       "0.8543",
       "0.9098",
       "0.9690"
      ],
      "answer": 1,
      "why": "Forward price F(j,k) = 1 / (1 + f(j,k))^k = 1 / 1.032³ = 0.9098\nThe exponent is k (the 3-year length of the forward period), not j or j + k."
     },
     {
      "q": "Regarding Navas's comment, short-term rates are generally:",
      "options": [
       "more volatile than long-term rates, and the drivers he names are correct",
       "less volatile than long-term rates, because monetary policy is predictable",
       "equally volatile, and the drivers he names are reversed"
      ],
      "answer": 0,
      "why": "Short-term volatility comes from monetary policy and is usually higher; long-term volatility reflects the economy and inflation expectations."
     }
    ]
   },
   {
    "topic": "Fixed Income",
    "body": "Navas considers rolling down the yield curve. He would buy a five-year zero-coupon government bond and sell it after two years. The five-year spot rate is 3.0% and the three-year spot rate is 2.4%. He assumes the yield curve stays stable.\n\nNavas also compares his projected spot curve with the current forward curve. For a two-year bond, he expects future spot rates to be below the current forward rates.",
    "questions": [
     {
      "q": "Navas's annualised return from rolling down the curve is closest to:",
      "options": [
       "3.00%",
       "7.97%",
       "3.91%"
      ],
      "answer": 2,
      "why": "Buy price = 100 / 1.030⁵ = 86.2609\nSell price after 2 years (now a 3-year bond) = 100 / 1.024³ = 93.1323\nAnnualised return = (sell / buy)^(1/H) − 1 with H = 2 = (93.1323/86.2609)^(1/2) − 1 = 3.91%\n7.97% is the two-year total return, not annualised."
     },
     {
      "q": "If the projected spot curve is below the current forward curve, the bond is:",
      "options": [
       "fairly valued, because forward rates are unbiased",
       "undervalued, so Navas should buy it",
       "overvalued, so Navas should sell it"
      ],
      "answer": 1,
      "why": "Projected spot below forward → future prices higher than the forward prices imply → bond undervalued → buy.\nProjected spot above forward → overvalued → sell."
     }
    ]
   },
   {
    "topic": "Fixed Income",
    "body": "Ilse Brandt, a portfolio strategist, describes three past changes in the yield curve.\n\nEpisode 1: Short-term yields fell much more than long-term yields during a recession.\nEpisode 2: During an economic expansion, short-term yields rose more than long-term yields as the central bank tightened.\nEpisode 3: During a market panic, long-term yields fell much more than short-term yields as investors rushed into long-dated government bonds.",
    "questions": [
     {
      "q": "Episode 1 is best described as a:",
      "options": [
       "bearish flattening",
       "bullish flattening",
       "bullish steepening"
      ],
      "answer": 2,
      "why": "Bullish = yields fall (prices rise). Short yields fall more → curve steepens → bullish steepening (typical in recessions when the central bank cuts)."
     },
     {
      "q": "Episode 2 is best described as a:",
      "options": [
       "bearish steepening",
       "bullish flattening",
       "bearish flattening"
      ],
      "answer": 2,
      "why": "Bearish = yields rise. Short yields rise more than long → curve flattens → bearish flattening (expansion, tightening)."
     },
     {
      "q": "Episode 3 is a bullish flattening, also called a flight to quality. A manager who expected it should have:",
      "options": [
       "extended duration and used a barbell",
       "shortened duration and used a bullet",
       "bought short-term bills only"
      ],
      "answer": 0,
      "why": "Long yields fall most → long bonds gain most → extend duration, using a barbell with long bonds."
     }
    ]
   },
   {
    "topic": "Fixed Income",
    "body": "Brandt summarises theories of the term structure for clients.\n\nTheory A: Long-term rates are the average of expected future short-term rates; there is no risk premium. It applies only to risk-free assets.\nTheory B: Over short holding periods all bonds earn the same return, but long holding periods include a risk premium.\nTheory C: Investors demand a premium for holding longer maturities, and the premium rises with maturity.\nTheory D: Investors and borrowers stay in their own maturity segments and never move to other maturities.\nTheory E: Investors prefer certain maturities but will move to another maturity if the extra yield is large enough.",
    "questions": [
     {
      "q": "Theory B is best described as the:",
      "options": [
       "liquidity preference theory",
       "unbiased (pure) expectations theory",
       "local expectations theory"
      ],
      "answer": 2,
      "why": "Local expectations: short-term holding returns are the same for all bonds (the risk-free rate); a risk premium appears only over longer holding periods. Theory A is the unbiased (pure) expectations theory."
     },
     {
      "q": "Theory C is best described as the:",
      "options": [
       "preferred habitat theory",
       "liquidity preference theory",
       "segmented markets theory"
      ],
      "answer": 1,
      "why": "Liquidity preference: a liquidity (term) premium that increases with maturity."
     },
     {
      "q": "Which theory says investors leave their preferred maturity when they are paid enough to do so?",
      "options": [
       "Theory D, the segmented markets theory",
       "Theory E, the preferred habitat theory",
       "Theory A, the pure expectations theory"
      ],
      "answer": 1,
      "why": "Preferred habitat: investors have favourite maturities but move if compensated. Segmented markets: they never move."
     }
    ]
   },
   {
    "topic": "Fixed Income",
    "body": "Yusuf Demir measures the interest rate risk of three bonds with the same issuer and maturity: Bond X (option free), Bond Y (callable, with the call option near the money) and Bond Z (putable, with the put option near the money). He computes one-sided durations (up = rates rise, down = rates fall) and key rate durations.",
    "questions": [
     {
      "q": "Which statement about one-sided durations is most accurate?",
      "options": [
       "For Bond Y the down-duration is greater than the up-duration; for Bond Z it is the reverse",
       "For Bond Y the one-sided up-duration is greater than the down-duration; for Bond Z it is the reverse",
       "For all three bonds the up- and down-durations are equal"
      ],
      "answer": 1,
      "why": "Callable near the money: when rates fall the call caps the price, so down-duration is small → up > down.\nPutable near the money: when rates rise the put floors the price, so up-duration is small → up < down.\nOption-free: up ≈ down."
     },
     {
      "q": "Compared with Bond X, the one-sided down-duration of Bond Y is most likely:",
      "options": [
       "lower",
       "higher",
       "the same"
      ],
      "answer": 0,
      "why": "When the call is at or near the money, a fall in rates barely raises the callable bond's price, so its down-duration is lower than that of the comparable option-free bond."
     },
     {
      "q": "For Bond X, the key rate duration is most likely highest at:",
      "options": [
       "the first coupon date",
       "the bond's maturity",
       "the one-year key rate"
      ],
      "answer": 1,
      "why": "An option-free bond's largest key rate duration is at its maturity, where the principal is paid. For a callable or putable bond, the key rate near the likely exercise date can be the largest."
     },
     {
      "q": "The effective durations of Bonds Y and Z compared with Bond X are:",
      "options": [
       "less than or equal to that of Bond X",
       "greater than or equal to that of Bond X",
       "greater for Bond Y and less for Bond Z"
      ],
      "answer": 0,
      "why": "Both embedded options shorten the effective duration: effective duration of a callable or putable bond ≤ effective duration of the option-free bond."
     }
    ]
   },
   {
    "topic": "Fixed Income",
    "body": "Demir also analyses a callable, putable convertible bond issued by Ostrava Motors. The conversion price is well above Ostrava's current share price. Over the next month Ostrava's share price rises 6% but remains below the conversion price.",
    "questions": [
     {
      "q": "The value of the callable, putable convertible bond is best expressed as:",
      "options": [
       "straight bond − call option on the stock − call option on the bond + put option on the bond",
       "straight bond + call option on the stock + call option on the bond − put option on the bond",
       "straight bond + call option on the stock − call option on the bond + put option on the bond"
      ],
      "answer": 2,
      "why": "Investor owns the conversion option (call on stock) and the put on the bond, and is short the issuer's call on the bond:\nstraight + call(stock) − call(bond) + put(bond)."
     },
     {
      "q": "After the 6% rise in Ostrava's share price, the convertible's price most likely:",
      "options": [
       "rises by about 6%, because it tracks the share price",
       "falls, because the issuer is more likely to call the bond",
       "rises only slightly, because the conversion option is still out of the money"
      ],
      "answer": 2,
      "why": "With the share price below the conversion price the bond behaves like a straight bond, so share price moves pass through only weakly. Only when the share price exceeds the conversion price does the bond start to track the stock."
     }
    ]
   },
   {
    "topic": "Fixed Income",
    "body": "Ana Petrova trades standardised CDS contracts at Vistula Bank. The Lark Corp. CDS has a standard coupon of 1%, and its current spread is 1.8%. The Mosel Inc. CDS has a standard coupon of 5%, and its current spread is 3.6%.",
    "questions": [
     {
      "q": "If Petrova buys protection on Lark Corp., at initiation she will most likely:",
      "options": [
       "receive an upfront premium from the protection seller",
       "pay an upfront premium to the protection seller",
       "pay nothing upfront, because standard contracts trade at par"
      ],
      "answer": 1,
      "why": "Spread > coupon → the coupon is too low for the risk → the protection buyer pays the difference upfront (CDS price below 100)."
     },
     {
      "q": "If Petrova sells protection on Mosel Inc., at initiation she will most likely:",
      "options": [
       "receive an upfront premium from the protection buyer",
       "pay an upfront premium to the protection buyer",
       "receive the full 5% coupon in advance"
      ],
      "answer": 1,
      "why": "Spread < coupon → the buyer pays a coupon that is too high → the protection seller pays the buyer upfront (CDS price above 100)."
     }
    ]
   },
   {
    "topic": "Fixed Income",
    "body": "Lukas Brenner, a credit analyst at Alder Bank, values short-term debt of Fenwick Ltd. A one-year Fenwick zero-coupon bond trades at 95.80 per 100 of par. The one-year risk-free rate is 2.0%, and the recovery rate if Fenwick defaults is 40%.\n\nBrenner also values a Fenwick bond that matures in one year and pays a final coupon of 5 with the principal of 100. He estimates the hazard rate for the year at 3% and the same 40% recovery rate on the amount owed.",
    "questions": [
     {
      "q": "The risk-neutral probability of default implied by the zero-coupon bond is closest to:",
      "options": [
       "2.28%",
       "4.20%",
       "3.81%"
      ],
      "answer": 2,
      "why": "100-par bond: 95.8 = [100 × (1 − p) + 40 × p] / 1.02\n95.8 × 1.02 = 97.716 = 100 − 60p\np = 2.284 / 60 = 3.81%"
     },
     {
      "q": "The expected value at maturity of the coupon bond is closest to:",
      "options": [
       "105.00",
       "103.11",
       "101.85"
      ],
      "answer": 1,
      "why": "Expected value = (principal + coupon) × (1 − hazard rate) + (principal + coupon) × recovery rate × hazard rate\n= 105 × 0.97 + 105 × 0.40 × 0.03 = 101.85 + 1.26 = 103.11"
     },
     {
      "q": "If the risk-neutral probability of default on Fenwick debt falls, Fenwick's credit spread will most likely:",
      "options": [
       "not change, because the spread includes only liquidity risk",
       "increase",
       "decrease"
      ],
      "answer": 2,
      "why": "A lower risk-neutral PD means lower expected loss, so the credit spread falls. In practice, the observed spread over the risk-free yield also includes liquidity and tax effects, not only credit risk."
     }
    ]
   },
   {
    "topic": "Fixed Income",
    "body": "Brenner models default risk for two issuers over three years.\n\nIssuer 1 has a constant annual hazard rate of 2.0%.\nIssuer 2 has hazard rates of 1.5% in year 1, 2.5% in year 2 and 3.5% in year 3. Brenner notes that hazard rates that change every year are more realistic.",
    "questions": [
     {
      "q": "For Issuer 1, the probability of default in year 3 (PD3) is closest to:",
      "options": [
       "2.000%",
       "5.881%",
       "1.921%"
      ],
      "answer": 2,
      "why": "PD_t = PS_(t−1) × hazard rate, with PS_t = (1 − h)^t\nPS2 = 0.98² = 0.9604\nPD3 = 0.9604 × 0.02 = 1.921%\n5.881% is the cumulative PD over three years."
     },
     {
      "q": "For Issuer 2, the probability of survival to the end of year 3 is closest to:",
      "options": [
       "89.86%",
       "92.68%",
       "92.50%"
      ],
      "answer": 1,
      "why": "Varying hazard rates: PS_t = (1 − h1)(1 − h2)…(1 − ht)\nPS3 = 0.985 × 0.975 × 0.965 = 92.68%\n(PD3 = PS2 × h3 = 0.9604 × 0.035 = 3.361%)"
     }
    ]
   },
   {
    "topic": "Fixed Income",
    "body": "Brenner values a three-year, 4% annual-coupon bond issued by Harrow Logistics. The value of the bond assuming no default (VND), using the benchmark government spot curve, is 104.20. His credit valuation adjustment (CVA), computed with risk-neutral probabilities of default, is 3.10. The bond trades at 102.40.",
    "questions": [
     {
      "q": "Based on Brenner's analysis, the Harrow bond is:",
      "options": [
       "overvalued, because its price is above VND − CVA",
       "fairly valued, because the CVA uses risk-neutral probabilities",
       "undervalued, because its price is below VND"
      ],
      "answer": 0,
      "why": "Fair value = VND − CVA = 104.2 − 3.1 = 101.10\nPrice 102.4 > 101.10 → overvalued (sell).\nPrice < VND − CVA would mean undervalued."
     },
     {
      "q": "The credit spread on the Harrow bond implied by Brenner's fair value is closest to:",
      "options": [
       "108 bps",
       "361 bps",
       "62 bps"
      ],
      "answer": 0,
      "why": "Credit spread = YTM of the credit-risky bond − YTM of the benchmark.\nBenchmark YTM: N = 3, PMT = 4, FV = 100, PV = −104.2 (use VND, not the market price) → 2.529%\nRisky YTM: PV = −101.10 → 3.607%\nSpread = 108 bps. 62 bps uses the market price instead of the fair value."
     }
    ]
   },
   {
    "topic": "Fixed Income",
    "body": "Sanne de Vries compares credit models at Kestrel Bank.\n\nModel M treats a company's equity as a long call option on the company's assets, and its debt as a riskless bond plus a short put option on the assets. It uses balance sheet data and option pricing.\nModel N uses historical variables, financial ratios and macroeconomic data. Its key input is the default intensity: the probability of default over the next period, estimated with regression.",
    "questions": [
     {
      "q": "A strength of Model M is that it:",
      "options": [
       "provides an economic explanation of why default happens",
       "allows default intensity to change with the economy",
       "does not require the company's assets to be traded"
      ],
      "answer": 0,
      "why": "Structural model strengths: economic rationale for default; uses option pricing to value risky debt.\nWeaknesses: assumes assets are traded, hard for complex balance sheets, burdensome to implement, default barrier hard to measure."
     },
     {
      "q": "A weakness of Model N is that it:",
      "options": [
       "assumes the company's assets trade in the market",
       "cannot use macroeconomic variables",
       "does not explain why default happens and treats default as a random event"
      ],
      "answer": 2,
      "why": "Reduced-form strengths: no need for traded assets; default intensity can vary with company fundamentals and the economy.\nWeaknesses: does not explain the cause of default; treats it as a surprise."
     },
     {
      "q": "In Model M, the value of risky debt equals:",
      "options": [
       "the value of riskless debt minus the value of a put option on the company's assets",
       "the value of the company's assets plus a put option",
       "the value of riskless debt plus a call option on the company's assets"
      ],
      "answer": 0,
      "why": "Debt = riskless bond − put on assets (bondholders are short the put). Equity = call on assets."
     }
    ]
   },
   {
    "topic": "Fixed Income",
    "body": "De Vries also reviews retail and securitised credit.\n\nApplicant 1 has a long credit history, no late payments, low use of available credit, few recent credit enquiries and uses many types of credit.\nBond 2 is a subordinated bond of a company whose senior unsecured debt is rated A.\nPool 3 is a large pool of short-term, homogeneous and granular credit card receivables.\nPool 4 is a pool of medium-term, homogeneous and granular auto loans.",
    "questions": [
     {
      "q": "Applicant 1 most likely has a high credit score, and Bond 2 is most likely rated:",
      "options": [
       "above A, because subordinated bonds pay higher coupons",
       "A, because all debt of an issuer has the same rating",
       "below A, because ratings are notched down for lower-priority debt"
      ],
      "answer": 2,
      "why": "Credit scores rise with long histories, no delinquencies, low utilisation, few enquiries and a wide variety of credit.\nRatings apply to senior unsecured debt; other classes are notched (lower priority → higher loss given default → lower rating)."
     },
     {
      "q": "The most appropriate approaches to analyse Pools 3 and 4 are, respectively:",
      "options": [
       "statistical and portfolio approaches",
       "loan-by-loan analysis for both",
       "portfolio and statistical approaches"
      ],
      "answer": 0,
      "why": "Short-term, homogeneous and granular (e.g. credit cards) → statistical approach.\nMedium-term, homogeneous and granular (e.g. auto loans) → portfolio approach.\nNon-granular pools need loan-by-loan analysis."
     }
    ]
   },
   {
    "topic": "Fixed Income",
    "body": "Brenner builds a two-year binomial tree to compute the CVA of a 3% annual-coupon corporate bond. At the end of year 2 the tree has three nodes with bond values (before the coupon) of 101.40, 103.10 and 104.60, reached with probabilities of 25%, 50% and 25%. The coupon of 3 is paid at every node at the end of year 2.\n\nBrenner's manager remarks that when the expected return of a bond is adjusted for possible rating changes over the year, the adjustment is usually negative.",
    "questions": [
     {
      "q": "The expected exposure at the end of year 2 is closest to:",
      "options": [
       "106.03",
       "103.05",
       "106.05"
      ],
      "answer": 2,
      "why": "Expected exposure = Σ (node value × node probability) + coupon\n= 0.25 × 101.40 + 0.50 × 103.10 + 0.25 × 104.60 + 3 = 103.05 + 3 = 106.05\nUse the node probabilities, not a simple average."
     },
     {
      "q": "The manager's remark is best explained by the fact that:",
      "options": [
       "upgrades are more likely than downgrades, but have smaller price effects",
       "modified duration rises after a downgrade, which always lowers the coupon",
       "rating changes are skewed toward downgrades, and spreads widen far more on downgrades than they narrow on upgrades"
      ],
      "answer": 2,
      "why": "Credit migration typically reduces expected returns because (1) the transition distribution is skewed toward downgrades and (2) the spread increase for a downgrade is much larger than the spread decrease for an upgrade."
     }
    ]
   }
  ]
 },
 {
  "id": "ps4",
  "title": "Practice set 4",
  "kind": "practice",
  "minutes": 132,
  "desc": "Financial Statement Analysis",
  "vignettes": [
   {
    "topic": "Financial Statement Analysis",
    "body": "Clara Weiss, CFA, analyses the investments of Montclair Holdings, which reports under IFRS.\n\nInvestment 1: On 1 January, Montclair bought 12% of Pell Foods for $66 million and classified it at fair value through profit or loss (FVPL). On 31 December, the fair value of 100% of Pell's equity was $610 million. Pell reported net income of $45 million and paid dividends of $25 million during the year.\n\nInvestment 2: On 1 January, Montclair bought 30% of Rosen AG for €360 million and uses the equity method. Rosen's book value of net assets was €900 million. The fair value of Rosen's plant and equipment exceeded its book value by €100 million; the plant has a remaining life of 10 years (straight line). Any remaining excess is goodwill. Rosen reported net income of €120 million and paid dividends of €50 million.\n\nDuring the year Rosen also sold inventory to Montclair at a profit; half of that inventory was still held by Montclair at year-end.",
    "questions": [
     {
      "q": "The pre-tax income Montclair reports from Investment 1 is closest to:",
      "options": [
       "$7.2 million",
       "$10.2 million",
       "$3.0 million"
      ],
      "answer": 1,
      "why": "FVPL: income = holding gain + dividends received.\nYear-end value = 12% × 610 = $73.2m → holding gain = 73.2 − 66 = $7.2m\nDividends = 12% × 25 = $3.0m\nPre-tax income = 7.2 + 3.0 = $10.2m (Pell's net income is not recognised under FVPL)."
     },
     {
      "q": "The goodwill included in Investment 2 is closest to:",
      "options": [
       "€0",
       "€90 million",
       "€60 million"
      ],
      "answer": 2,
      "why": "Goodwill = purchase price − % × book value of net assets − % × (FV − BV) of identifiable assets\n= 360 − 0.30 × 900 − 0.30 × 100 = 360 − 270 − 30 = €60m."
     },
     {
      "q": "The carrying value of Investment 2 at 31 December is closest to:",
      "options": [
       "€396 million",
       "€381 million",
       "€378 million"
      ],
      "answer": 2,
      "why": "Investment account = purchase price + % × net income − % × dividends − amortisation of excess purchase price\n= 360 + 0.30 × 120 − 0.30 × 50 − (0.30 × 100)/10\n= 360 + 36 − 15 − 3 = €378m."
     },
     {
      "q": "Montclair's equity income from Rosen (contribution to net earnings), before any adjustment for the inventory sale, is closest to:",
      "options": [
       "€18 million",
       "€36 million",
       "€33 million"
      ],
      "answer": 2,
      "why": "Contribution to earnings = % × net income − amortisation of the excess = 36 − 3 = €33m.\nDividends reduce the investment account but are not part of earnings."
     },
     {
      "q": "Regarding Rosen's sale of inventory to Montclair, Montclair should:",
      "options": [
       "recognise its full share of the profit immediately, because the sale is upstream",
       "defer its share of the unrealised profit on the inventory still held until it is sold to third parties",
       "eliminate 100% of the profit, because the companies are under common control"
      ],
      "answer": 1,
      "why": "Under the equity method, the investor's share of unrealised profits on intercompany (upstream or downstream) sales is deferred until the goods are sold to outside parties."
     }
    ]
   },
   {
    "topic": "Financial Statement Analysis",
    "body": "Montclair later acquires 80% of Tessaro SpA for €800 million in cash. The fair value of Tessaro's identifiable net assets is €850 million. Montclair's analyst compares the full goodwill and partial goodwill methods.\n\nThe analyst also considers a different deal in which the entire excess of the purchase price over book value is allocated to identifiable assets.",
    "questions": [
     {
      "q": "Goodwill under the full goodwill method is closest to:",
      "options": [
       "€150 million",
       "€50 million",
       "€120 million"
      ],
      "answer": 0,
      "why": "Full goodwill = purchase price / % owned − FV of identifiable net assets = 800/0.80 − 850 = 1,000 − 850 = €150m."
     },
     {
      "q": "Under the partial goodwill method, goodwill and the non-controlling interest are closest to:",
      "options": [
       "€120 million and €200 million",
       "€120 million and €170 million",
       "€150 million and €200 million"
      ],
      "answer": 1,
      "why": "Partial goodwill = 800 − 0.80 × 850 = €120m.\nNCI (partial) = % not owned × identifiable net assets = 0.20 × 850 = €170m.\n(Full method: NCI = 0.20 × 1,000 = €200m.)"
     },
     {
      "q": "Compared with the full goodwill method, the partial goodwill method most likely reports:",
      "options": [
       "higher ROE and higher ROA",
       "the same ROE and ROA",
       "lower ROE and lower ROA"
      ],
      "answer": 0,
      "why": "Partial goodwill gives smaller goodwill (lower assets) and smaller NCI (lower equity), with the same net income → higher ROA and ROE."
     },
     {
      "q": "In the deal where the entire excess is allocated to identifiable assets, goodwill is:",
      "options": [
       "zero under both the full and partial goodwill methods",
       "equal to the excess of fair value over book value",
       "positive under the full method only"
      ],
      "answer": 0,
      "why": "If all of the excess goes to identifiable assets, nothing is left for goodwill under either method."
     }
    ]
   },
   {
    "topic": "Financial Statement Analysis",
    "body": "Montclair and Quint Corp. each own 50% of a joint venture. Montclair's analyst compares reporting the joint venture with the equity method and with proportionate consolidation, and then compares these with the acquisition method used for a controlled subsidiary.",
    "questions": [
     {
      "q": "Compared with the equity method, proportionate consolidation of the joint venture reports:",
      "options": [
       "the same revenue, but higher net income",
       "higher revenue and assets, but the same net income and equity",
       "higher revenue, net income and equity"
      ],
      "answer": 1,
      "why": "Proportionate consolidation adds the venturer's share of revenues, expenses, assets and liabilities line by line. Net income and equity are the same as under the equity method."
     },
     {
      "q": "Ranking the three methods for total assets, liabilities and revenue gives:",
      "options": [
       "equity method > proportionate consolidation > acquisition",
       "acquisition > proportionate consolidation > equity method",
       "proportionate consolidation > acquisition > equity method"
      ],
      "answer": 1,
      "why": "Acquisition adds 100% of the subsidiary; proportionate adds only the owned share; the equity method adds one line (investment) and one income line. Net income (to the parent) is the same under all three."
     }
    ]
   },
   {
    "topic": "Financial Statement Analysis",
    "body": "Montclair creates a special purpose entity (SPE) and sells it $200 million of receivables. The SPE pays for the receivables with money borrowed from an outside bank. Montclair absorbs the SPE's losses, so it must consolidate the SPE.\n\nMontclair also holds bonds classified at amortised cost and equity securities at fair value through OCI. Management plans to change its business model for the bonds and asks whether they can be reclassified.",
    "questions": [
     {
      "q": "Because Montclair consolidates the SPE, the sale of receivables most likely:",
      "options": [
       "reduces consolidated debt",
       "leaves consolidated cash unchanged, because intercompany sales are eliminated",
       "increases consolidated cash, because the money came from outside the group"
      ],
      "answer": 2,
      "why": "The intercompany sale is eliminated, but the bank loan is new money from outside the group: consolidated cash and debt both rise. If the SPE had been funded by Montclair itself, consolidated cash would be unchanged."
     },
     {
      "q": "Which statement about IFRS 9 and the reclassification is most accurate?",
      "options": [
       "FVPL securities are carried at amortised cost; reclassification of financial assets is never allowed under IFRS 9",
       "Amortised-cost securities are carried at historical cost; reclassification is allowed after a significant change in the business model and prior statements are not restated",
       "FVOCI securities are carried at historical cost; reclassification is allowed at any time but requires restating prior periods"
      ],
      "answer": 1,
      "why": "FVPL and FVOCI → carried at fair (market) value; amortised cost → historical cost.\nReclassification of debt securities is allowed only when the business model changes significantly; it applies prospectively, with no restatement."
     }
    ]
   },
   {
    "topic": "Financial Statement Analysis",
    "body": "Sven Aalto analyses the share-based compensation of Kiruna Tech, a US GAAP reporter with a 25% tax rate.\n\nDuring the year 30,000 RSUs vested. Their grant-date fair value was $24 per RSU and Kiruna's share price on the vesting date was $31. In the same year, 2,000 unvested RSUs from an earlier grant (grant-date fair value $22) were forfeited, and the expense previously recognised for them is reversed this year.\n\nKiruna also grants stock options. Aalto considers how changes in valuation inputs affect the options' fair value and Kiruna's reported earnings.",
    "questions": [
     {
      "q": "Kiruna's RSU compensation expense for the year is closest to:",
      "options": [
       "$676,000",
       "$930,000",
       "$720,000"
      ],
      "answer": 0,
      "why": "RSU expense = vested × grant-date FV − forfeited × their FV = 30,000 × 24 − 2,000 × 22 = 720,000 − 44,000 = $676,000.\nThe vesting-date price ($31) does not affect the expense."
     },
     {
      "q": "The tax effect of the RSU vesting and its accounting under US GAAP is closest to:",
      "options": [
       "a $52,500 windfall recorded in equity",
       "a $52,500 windfall that reduces income tax expense",
       "a $52,500 shortfall that increases income tax expense"
      ],
      "answer": 1,
      "why": "Tax effect = units vested × (settlement price − grant-date value) × tax rate = 30,000 × (31 − 24) × 25% = $52,500.\nPositive → windfall. US GAAP: through the income statement (lower tax expense). IFRS: excess goes to equity."
     },
     {
      "q": "Because of the windfall, Kiruna's effective tax rate under US GAAP compared with what it would be under IFRS is:",
      "options": [
       "the same",
       "higher",
       "lower"
      ],
      "answer": 2,
      "why": "US GAAP: the windfall reduces income tax expense → lower effective tax rate. IFRS: excess goes to equity → no effect on the rate, so IFRS shows a higher rate for a windfall (and a lower one for a shortfall)."
     },
     {
      "q": "The vesting of the RSUs increases Kiruna's basic shares outstanding by:",
      "options": [
       "28,000 shares",
       "30,000 shares",
       "0 shares, because RSUs are only potentially dilutive"
      ],
      "answer": 1,
      "why": "Once RSUs vest they become common shares: basic shares rise by the number vested (30,000). Unvested RSUs are potentially dilutive."
     },
     {
      "q": "Holding other inputs constant, which change in the option valuation inputs would increase Kiruna's reported net income?",
      "options": [
       "A longer expected option life",
       "A higher risk-free rate",
       "A higher expected dividend yield"
      ],
      "answer": 2,
      "why": "Option value ↑ with higher risk-free rate, longer life and higher volatility → higher compensation expense → lower net income (bad for the company).\nHigher dividend yield → lower call value → lower expense → higher net income."
     },
     {
      "q": "If expected share price volatility rises, the fair value of RSUs and of stock options at grant will most likely:",
      "options": [
       "increase for RSUs and stay the same for options",
       "increase for both",
       "stay the same for RSUs and increase for options"
      ],
      "answer": 2,
      "why": "RSU fair value = share price at grant, not affected by volatility. Option value rises with volatility → higher expense and lower net income."
     }
    ]
   },
   {
    "topic": "Financial Statement Analysis",
    "body": "Aalto computes Kiruna's diluted shares. Basic weighted-average shares are 5,000,000 and the average share price is $30.\n\nExhibit 1: Potentially Dilutive Securities\n# Security | Number | Exercise price | Average unrecognised compensation expense\nStock options | 200,000 | $18 | $600,000\nUnvested RSUs | 60,000 | – | $900,000\n\nAverage unrecognised expense is the average of the beginning and ending unrecognised compensation expense.",
    "questions": [
     {
      "q": "Kiruna's diluted shares are closest to:",
      "options": [
       "5,120,000",
       "5,260,000",
       "5,090,000"
      ],
      "answer": 2,
      "why": "Treasury stock method: dilutive shares = number − (cash proceeds + average unrecognised expense) / average price\nOptions: 200,000 − (200,000 × 18 + 600,000)/30 = 200,000 − 140,000 = 60,000\nRSUs (no cash proceeds): 60,000 − 900,000/30 = 30,000\nDiluted = 5,000,000 + 60,000 + 30,000 = 5,090,000"
     }
    ]
   },
   {
    "topic": "Financial Statement Analysis",
    "body": "Aalto then reviews Kiruna's defined benefit pension plan. Exhibit 1 shows plan data for the year (in $ millions).\n\nExhibit 1: Pension Plan Data\n# Item | Amount\nBeginning PBO | 500.0\nBeginning plan assets | 440.0\nCurrent service cost | 30.0\nPast service cost (plan amendment this year) | 10.0\nDiscount rate | 4.5%\nExpected return on plan assets | 6.0%\nActual return on plan assets | 20.0\nActuarial loss | 8.0\nEmployer contributions | 35.0\nBenefits paid | 25.0\n\nAalto notes that employer contributions are cash outflows from operating activities. He also asks which assumption change would most reduce Kiruna's pension cost under US GAAP.",
    "questions": [
     {
      "q": "The interest cost under US GAAP and the net interest expense under IFRS are closest to:",
      "options": [
       "$22.5 million and $2.7 million",
       "$22.5 million and $22.5 million",
       "$2.7 million and $19.8 million"
      ],
      "answer": 0,
      "why": "US GAAP interest cost = beginning PBO × r = 500 × 4.5% = 22.5\nIFRS net interest = beginning funded status × r = (440 − 500) × 4.5% = −2.7 → net interest expense of 2.7"
     },
     {
      "q": "Pension cost reported in profit or loss under IFRS is closest to:",
      "options": [
       "$32.7 million",
       "$26.1 million",
       "$42.7 million"
      ],
      "answer": 2,
      "why": "IFRS P&L: service cost (current + past) + net interest = 30 + 10 + 2.7 = 42.7.\n(US GAAP P&L: current service cost + interest cost − expected return = 30 + 22.5 − 26.4 = 26.1, with past service cost amortised from OCI.)"
     },
     {
      "q": "Kiruna's net pension liability at year-end is closest to:",
      "options": [
       "$75.5 million",
       "$65.5 million",
       "$60.0 million"
      ],
      "answer": 0,
      "why": "Ending PBO = 500 + 30 + 10 + 22.5 + 8 − 25 = 545.5\nEnding plan assets = 440 + 35 + 20 − 25 = 470\nNet pension liability = 545.5 − 470 = 75.5"
     },
     {
      "q": "Which change in assumptions would most likely reduce Kiruna's pension cost under US GAAP?",
      "options": [
       "A decrease in the estimated rate of future salary increases",
       "A decrease in the expected return on plan assets",
       "A decrease in the discount rate"
      ],
      "answer": 0,
      "why": "Lower salary growth → lower PBO and service cost → lower pension cost.\nA lower discount rate usually raises PBO and service cost; a lower expected return raises US GAAP pension cost."
     }
    ]
   },
   {
    "topic": "Financial Statement Analysis",
    "body": "Hector Ruiz analyses Atlas Industrial, a US company, and its subsidiary in Mexico.\n\nTransaction: On 1 November, Atlas sold goods to a German customer on credit for €1,000,000, when the exchange rate was $1.10/€. On 31 December, the rate was $1.15/€ and the receivable was still outstanding.\n\nSubsidiary: The Mexican subsidiary earns all of its revenue in Mexican pesos, buys most of its materials in US dollars, and borrows in euros.",
    "questions": [
     {
      "q": "Atlas's foreign currency transaction gain or loss at 31 December is closest to:",
      "options": [
       "a gain of $1,150,000",
       "a loss of $50,000",
       "a gain of $50,000"
      ],
      "answer": 2,
      "why": "Gain = foreign currency amount × (year-end rate − transaction-date rate) = 1,000,000 × (1.15 − 1.10) = $50,000.\nA receivable in a currency that appreciates gives a gain (a payable would give a loss)."
     },
     {
      "q": "The functional currency of the Mexican subsidiary is most likely the:",
      "options": [
       "US dollar",
       "euro",
       "Mexican peso"
      ],
      "answer": 2,
      "why": "The primary indicators are ranked: (1) currency of revenues, (2) currency of operating costs, (3) currency of financing. Revenue is all in pesos → peso is the functional currency."
     }
    ]
   },
   {
    "topic": "Financial Statement Analysis",
    "body": "Ruiz compares two foreign subsidiaries of Atlas. Both have net monetary liabilities and positive net assets.\n\nSubsidiary A's functional currency is the US dollar (the parent's presentation currency), so it is remeasured with the temporal method.\nSubsidiary B's functional currency is its local currency, so it is translated with the current rate method.\n\nDuring the year both local currencies appreciate against the dollar. Prices in both countries are rising, and Subsidiary B uses FIFO.\n\nRuiz notes that in both cases the translated balance sheet does not balance until a plug figure is added. He also wants to reduce Atlas's balance sheet translation exposure for Subsidiary B.",
    "questions": [
     {
      "q": "Which statement about the plug figure is most accurate?",
      "options": [
       "For A the plug is the cumulative translation adjustment; for B it is a gain or loss in net income",
       "For both subsidiaries the plug is recorded in net income",
       "For A the plug is translation gain or loss in net income; for B it is the cumulative translation adjustment in equity"
      ],
      "answer": 2,
      "why": "Temporal method: remeasurement gain/loss goes to net income (and so to retained earnings).\nCurrent rate method: the translation adjustment goes to OCI as the CTA in equity. Both are the balancing (plug) figures."
     },
     {
      "q": "Because the local currency appreciated, Subsidiary A's remeasurement result and Subsidiary B's CTA are most likely:",
      "options": [
       "a gain in income for A and a negative CTA for B",
       "a loss in income for A and a positive CTA for B",
       "a loss for both"
      ],
      "answer": 1,
      "why": "A: exposure = net monetary liabilities; foreign currency ↑ → liabilities worth more in dollars → loss in net income.\nB: exposure = net assets (positive); foreign currency ↑ → positive translation adjustment (CTA ↑)."
     },
     {
      "q": "For a subsidiary with an appreciating local currency and rising prices, which choices give the higher translated gross margin?",
      "options": [
       "Temporal method and LIFO",
       "Temporal method and FIFO",
       "Current rate method and LIFO"
      ],
      "answer": 1,
      "why": "Temporal method: COGS at older (lower) historical rates while sales are at the average rate → higher margin when the foreign currency appreciates (current rate method is better when it depreciates).\nRising prices: FIFO uses older, cheaper costs → higher margin (LIFO when prices fall)."
     },
     {
      "q": "To reduce the balance sheet exposure of Subsidiary B, Atlas should most likely:",
      "options": [
       "convert B's local currency borrowings into equity issued to the parent, reducing its local liabilities",
       "reduce B's assets translated at the current rate, for example by using local cash to pay down local liabilities",
       "increase B's local currency receivables, for example by extending longer credit terms to local customers"
      ],
      "answer": 1,
      "why": "Find the net exposure under the method used, then choose the action that moves it toward zero. B's exposure is net assets (positive), so reduce exposed assets or increase exposed liabilities. Converting debt to equity would increase net assets."
     }
    ]
   },
   {
    "topic": "Financial Statement Analysis",
    "body": "Leah Morgan, a bank analyst, compares two banks. Exhibit 1 shows selected ratios for the last two years.\n\nExhibit 1: Selected Ratios\n# Ratio | Bank X last year | Bank X this year | Bank Y last year | Bank Y this year\nAllowance for loan losses / net charge-offs | 2.8 | 3.4 | 2.6 | 2.1\nProvision for loan losses / net charge-offs | 1.0 | 1.3 | 1.0 | 0.8\nAllowance for loan losses / nonperforming loans | 1.1 | 1.3 | 1.2 | 0.9\nLiquid assets / total assets | 0.18 | 0.21 | 0.20 | 0.17\nLoans / total assets | 0.62 | 0.60 | 0.61 | 0.66\nTrading revenue / total revenue | 0.08 | 0.07 | 0.15 | 0.24\n\nBank X funds itself mainly with long-term consumer deposits; Bank Y relies on short-term interbank borrowing. Morgan expects the yield curve to invert next year.",
    "questions": [
     {
      "q": "Based on the loan loss ratios, which bank is accounting more conservatively and building a larger cushion?",
      "options": [
       "Bank X",
       "Neither, because both provision ratios equal 1 last year",
       "Bank Y"
      ],
      "answer": 0,
      "why": "Allowance/charge-offs rising → bigger cushion. Provision/charge-offs > 1 → conservative; = 1 → flat allowance; < 1 → aggressive. Allowance/NPLs rising → sufficient provisioning. All three improve for Bank X and worsen for Bank Y."
     },
     {
      "q": "Based on asset quality and earnings quality, which statement is most accurate?",
      "options": [
       "Bank X is better: higher liquid assets, lower loans to assets and a smaller share of volatile trading revenue",
       "Bank Y is better, because higher trading revenue means more diversified earnings",
       "Bank Y is better, because a higher loans-to-assets ratio means more interest income"
      ],
      "answer": 0,
      "why": "Liquid assets/total assets ↑ = good; loans/total assets ↑ = more credit risk (bad). Trading revenue is volatile and not sustainable, so a lower share of revenue is better."
     },
     {
      "q": "Which bank has the more stable funding, and what effect would an inverted yield curve most likely have on bank net interest revenue?",
      "options": [
       "Bank X; net interest revenue would rise",
       "Bank Y; net interest revenue would rise",
       "Bank X; net interest revenue would fall"
      ],
      "answer": 2,
      "why": "Stable funding: longer-term and consumer (retail) deposits are stickier than short-term interbank funding.\nBanks borrow short and lend long (maturity transformation). An inverted curve raises short-term funding costs relative to long-term lending rates → lower net interest revenue."
     },
     {
      "q": "Which item is included in Common Equity Tier 1 capital?",
      "options": [
       "Preferred stock with discretionary dividends",
       "Subordinated convertible bonds",
       "Retained earnings"
      ],
      "answer": 2,
      "why": "CET1: common stock, additional paid-in capital, retained earnings, OCI, less intangibles and deferred tax assets.\nOther Tier 1: preferred stock with discretionary dividends. Tier 2: subordinated debt such as convertible bonds."
     }
    ]
   },
   {
    "topic": "Financial Statement Analysis",
    "body": "Morgan also analyses Harbour Mutual, a property and casualty (P&C) insurer, for the year (in $ millions).\n\nExhibit 1: Harbour Mutual Underwriting Data\n# Item | Amount\nNet premiums written | 1,250\nNet premiums earned | 1,200\nClaims paid | 690\nIncrease in loss reserves | 90\nUnderwriting expenses, including commissions | 350\n\nMorgan notes that after several years of intense competition and weak pricing, many P&C insurers have lost capital and some have left the market.",
    "questions": [
     {
      "q": "Harbour's loss ratio and expense ratio are closest to:",
      "options": [
       "57.5% and 29.2%",
       "65.0% and 28.0%",
       "62.4% and 28.0%"
      ],
      "answer": 1,
      "why": "Loss ratio = (claims paid + increase in loss reserves) / net premiums earned = (690 + 90)/1,200 = 65.0% (efficiency of underwriting standards).\nExpense ratio = underwriting expenses incl. commissions / net premiums written = 350/1,250 = 28.0% (efficiency of operations)."
     },
     {
      "q": "Based on Morgan's note, the P&C cycle is most likely moving into a:",
      "options": [
       "hard market, with reduced competition and higher premiums",
       "soft market, with more competition and lower premiums",
       "soft market, because capital is shrinking"
      ],
      "answer": 0,
      "why": "Cycle: soft market (high competition, weak prices) → capital shrinks and firms exit → reduced competition and higher prices (hard market) → higher profits attract new entrants → soft market again."
     }
    ]
   },
   {
    "topic": "Financial Statement Analysis",
    "body": "Nora Lindahl screens companies for earnings quality.\n\nCompany P: revenue growth well above peers; receivables growing faster than revenue; a rising share of revenue booked in the fourth quarter; net income greater than cash flow from operations for three years. Its receivables turnover has fallen, and Lindahl suspects bill-and-hold sales and channel stuffing.\nCompany Q: an Altman Z-score of 3.4 and a Beneish M-score of −2.6.\nCompany R: a Beneish M-score of −1.2 and a high level of accruals. Lindahl separates accruals into normal accruals explained by a regression on business activity, and the residual.\n\nCompany S reports under IFRS and classifies interest paid in financing activities. To compare it with peers, Lindahl reclassifies interest paid into operating activities.",
    "questions": [
     {
      "q": "Company P's pattern is most consistent with:",
      "options": [
       "high-quality earnings that are well supported by operating cash flow",
       "aggressive revenue recognition that inflates receivables",
       "conservative accounting that defers revenue to later periods"
      ],
      "answer": 1,
      "why": "Warning signs: revenue growth above peers, receivables growing faster than revenue, high share of revenue in the final quarter, net income > CFO. Bill-and-hold and channel stuffing raise receivables and lower receivables turnover."
     },
     {
      "q": "Which company is most likely to be manipulating earnings?",
      "options": [
       "Company R",
       "Neither, because both M-scores are negative",
       "Company Q"
      ],
      "answer": 0,
      "why": "M-score above −1.78 → higher probability of manipulation: R (−1.2) is above, Q (−2.6) below. A higher Altman Z-score means lower bankruptcy risk."
     },
     {
      "q": "The residual from Lindahl's accruals regression represents:",
      "options": [
       "non-discretionary accruals, which arise from normal operations",
       "cash earnings",
       "discretionary accruals, which may signal earnings manipulation"
      ],
      "answer": 2,
      "why": "Non-discretionary accruals come from normal business activity (explained by the regression). Discretionary accruals (the residual) come from unusual choices and can signal manipulation; high accruals mean lower earnings quality."
     },
     {
      "q": "After Lindahl's reclassification, Company S's CFO and CFF will be, respectively:",
      "options": [
       "unchanged and lower",
       "lower and higher",
       "higher and lower"
      ],
      "answer": 1,
      "why": "Interest paid is a cash outflow. Moving it from CFF to CFO lowers CFO and raises (makes less negative) CFF."
     }
    ]
   },
   {
    "topic": "Financial Statement Analysis",
    "body": "Jonas Berg compares Norvik AB with its industry. Exhibit 1 gives selected data (in SEK millions).\n\nExhibit 1: Norvik Financial Data\n# Item | Amount\nRevenue | 4,800\nEBIT | 720\nEarnings before tax (EBT) | 600\nNet income | 450\nAverage total assets | 6,000\nAverage equity | 2,500\n\nBerg also notes:\nNote 1: Norvik's ratio of operating cash flow before interest and taxes to operating income is well above 1.\nNote 2: The Nordic segment accounts for 30% of total assets and 45% of total capital expenditures.\nNote 3: Norvik's depreciable lives for PP&E are 20% longer than the industry average.",
    "questions": [
     {
      "q": "Using the five-step DuPont analysis, Norvik's interest burden and ROE are closest to:",
      "options": [
       "0.833 and 18.0%",
       "0.833 and 7.5%",
       "0.750 and 18.0%"
      ],
      "answer": 0,
      "why": "Tax burden = NI/EBT = 450/600 = 0.75\nInterest burden = EBT/EBIT = 600/720 = 0.833\nEBIT margin = 720/4,800 = 0.15\nAsset turnover = 4,800/6,000 = 0.80\nLeverage = 6,000/2,500 = 2.40\nROE = 0.75 × 0.833 × 0.15 × 0.80 × 2.40 = 18.0% (= 450/2,500)"
     },
     {
      "q": "Note 1 most likely indicates that Norvik's earnings:",
      "options": [
       "are backed by cash flow",
       "include large one-time gains",
       "are inflated by accruals"
      ],
      "answer": 0,
      "why": "Operating cash flow before interest and taxes ÷ operating income well above 1 → earnings are supported by cash (higher quality). When computing it, adjust for where interest and taxes paid are classified (IFRS allows CFO or CFF/CFI)."
     },
     {
      "q": "Based on Note 2, the Nordic segment is most likely:",
      "options": [
       "growing, because its capex share is greater than its asset share",
       "shrinking, because it holds only 30% of assets",
       "being run for cash"
      ],
      "answer": 0,
      "why": "Segment capex % ÷ segment asset % = 45/30 = 1.5 > 1 → the company is investing more there: growing. Below 1 → being reduced."
     },
     {
      "q": "If Berg adjusts Norvik's depreciation to the industry's shorter lives, Norvik's debt-to-equity ratio will most likely:",
      "options": [
       "decrease",
       "increase",
       "stay the same"
      ],
      "answer": 1,
      "why": "Shorter lives → higher depreciation → lower net income → lower retained earnings and equity → higher D/E.\n(If a company's figure is above the market's, adjust it down; if below, adjust it up.)"
     }
    ]
   }
  ]
 },
 {
  "id": "ps5",
  "title": "Practice set 5",
  "kind": "practice",
  "minutes": 132,
  "desc": "Portfolio Management",
  "vignettes": [
   {
    "topic": "Portfolio Management",
    "body": "Ingrid Solheim, risk manager at Fjordline Asset Management, estimates parametric VaR for a $50 million equity portfolio. The portfolio's expected annual return is 9% and its annual standard deviation is 18%. She assumes 250 trading days a year and uses the one-tailed z-values in Exhibit 1.\n\nExhibit 1: One-Tailed z-Values\n# Probability in the tail | z\n10% | 1.28\n5% | 1.65\n2.5% | 1.96\n1% | 2.33\n\nSolheim also notes that the portfolio's returns have high kurtosis.",
    "questions": [
     {
      "q": "The 5% annual VaR of the portfolio is closest to:",
      "options": [
       "$19.35 million",
       "$10.35 million",
       "$14.85 million"
      ],
      "answer": 1,
      "why": "Annual VaR = (z × σ_annual − μ_annual) × portfolio value = (1.65 × 0.18 − 0.09) × 50m = 0.207 × 50m = $10.35m\nThe expected return is subtracted, not added."
     },
     {
      "q": "The 1% daily VaR of the portfolio is closest to:",
      "options": [
       "$1.042 million",
       "$0.066 million",
       "$1.308 million"
      ],
      "answer": 2,
      "why": "Daily VaR = (z × σ_annual/√250 − μ_annual/250) × value = (2.33 × 0.18/15.811 − 0.09/250) × 50m = $1.308m\nVolatility scales with √250; the mean scales with 250."
     },
     {
      "q": "Because of the high kurtosis, a VaR based on the normal distribution most likely:",
      "options": [
       "overstates the risk of extreme losses",
       "is unaffected, because VaR uses only the mean and standard deviation",
       "understates the risk of extreme losses"
      ],
      "answer": 2,
      "why": "High kurtosis = fat tails → extreme downside losses are more likely than the normal distribution implies, so normal VaR understates tail risk. Low kurtosis → lower extreme downside risk."
     }
    ]
   },
   {
    "topic": "Portfolio Management",
    "body": "Emil Varga trains analysts at Corvus Partners on multifactor models.\n\nModel 1 uses surprises in GDP growth, inflation and credit spreads as factors.\nModel 2 uses company attributes such as P/E, market capitalisation and leverage as factors.\nModel 3 uses principal components analysis to find the factors that best explain historical return covariances.\n\nVarga notes that arbitrage pricing theory (APT) assumes that returns are generated by a factor model, that asset-specific risk can be diversified away in a portfolio, and that no arbitrage opportunities exist.",
    "questions": [
     {
      "q": "Which statement about APT is most accurate?",
      "options": [
       "APT requires a market portfolio factor, like the CAPM",
       "APT assumes investors hold the market portfolio",
       "APT does not specify the number or the identity of the factors"
      ],
      "answer": 2,
      "why": "APT says returns follow a factor model but does not say how many factors there are or what they are."
     },
     {
      "q": "Which statement about how the models are estimated is most accurate?",
      "options": [
       "In Model 2 the factor sensitivities (standardised attributes) are specified first and factor returns are estimated; in Model 1 the factor surprises are specified first and sensitivities are estimated",
       "In both models the factor sensitivities are estimated first by time-series regression, and the factor returns are then observed directly",
       "In Model 1 the factor sensitivities are specified first from company data; in Model 2 the sensitivities are estimated last by regression"
      ],
      "answer": 0,
      "why": "Fundamental models: sensitivities come first (from attributes), factor returns are estimated by cross-sectional regression.\nMacroeconomic models: factor surprises are observed first, sensitivities are estimated by time-series regression."
     },
     {
      "q": "Compared with Models 1 and 2, Model 3 most likely:",
      "options": [
       "makes minimal assumptions, but its factors are hard to interpret",
       "is the model most used by active equity managers",
       "has factors that are easy to interpret economically"
      ],
      "answer": 0,
      "why": "Statistical factor models: advantage = minimal assumptions; disadvantage = factors (principal components) are hard to interpret, harder than fundamental or macro factors.\nActive equity managers mostly use fundamental models."
     }
    ]
   },
   {
    "topic": "Portfolio Management",
    "body": "Varga gives the class a two-factor model for Stock K:\nR(K) = a(K) + b1 F1 + b2 F2 + e(K)\nwhere F1 and F2 are surprises in the two factors (expected value zero).\n\nHe also gives an APT-type equation for Portfolio M: the risk-free rate is 3%, the portfolio's sensitivities to factors 1 and 2 are 1.2 and −0.4, and the factor risk premiums are 4% and 2%.",
    "questions": [
     {
      "q": "The expected return of Stock K equals:",
      "options": [
       "a(K) + b1 + b2",
       "b1 F1 + b2 F2",
       "a(K) only"
      ],
      "answer": 2,
      "why": "With factors measured as surprises, E(F1) = E(F2) = 0, so E(R) = a(K). a(K) is the expected return only because the other terms have zero expected value."
     },
     {
      "q": "The expected return of Portfolio M is closest to:",
      "options": [
       "5.4%",
       "8.6%",
       "7.0%"
      ],
      "answer": 2,
      "why": "E(R) = Rf + β1 λ1 + β2 λ2 = 3% + 1.2 × 4% + (−0.4) × 2% = 3% + 4.8% − 0.8% = 7.0%"
     }
    ]
   },
   {
    "topic": "Portfolio Management",
    "body": "Ravi Kapoor evaluates the Orion Equity Fund against its benchmark using a three-factor model. Last year the fund returned 11.2% and the benchmark returned 8.1%.\n\nExhibit 1: Factor Sensitivities and Factor Returns\n# Factor | Fund sensitivity | Benchmark sensitivity | Factor return\nMarket | 1.15 | 1.00 | 6.0%\nSize | 0.40 | 0.10 | 2.0%\nValue | -0.10 | 0.20 | 4.0%",
    "questions": [
     {
      "q": "The fund's return from factor tilts is closest to:",
      "options": [
       "0.30%",
       "3.10%",
       "7.30%"
      ],
      "answer": 0,
      "why": "Factor tilt = Σ (fund sensitivity − benchmark sensitivity) × factor return\nMarket: 0.15 × 6% = 0.90%\nSize: 0.30 × 2% = 0.60%\nValue: −0.30 × 4% = -1.20%\nTotal = 0.30%"
     },
     {
      "q": "The fund's return from security selection is closest to:",
      "options": [
       "3.40%",
       "2.80%",
       "3.10%"
      ],
      "answer": 1,
      "why": "Active return = 11.2% − 8.1% = 3.1%\nSecurity selection = active return − factor tilt = 3.1% − (0.30%) = 2.80%"
     },
     {
      "q": "Which factor tilt added the most to the fund's active return?",
      "options": [
       "Market",
       "Value",
       "Size"
      ],
      "answer": 0,
      "why": "Compare the tilt contributions: market 0.90%, size 0.60%, value -1.20%. Market is the largest; value detracted."
     },
     {
      "q": "Based on its sensitivities, the fund's style relative to the benchmark is best described as:",
      "options": [
       "low beta, large-cap and value",
       "high beta, small-cap and growth",
       "high beta, large-cap and value"
      ],
      "answer": 1,
      "why": "Positive active market sensitivity → beta > benchmark; positive size → small-cap tilt; negative value → growth tilt. (Momentum: positive = momentum, negative = contrarian.)"
     }
    ]
   },
   {
    "topic": "Portfolio Management",
    "body": "Kapoor decomposes Orion's active risk. Orion's active risk (tracking error) is 4.0%, so active risk squared is 16.0 (%²). Exhibit 1 shows the active factor risk attributed to each factor and the active specific risk.\n\nExhibit 1: Active Risk Decomposition (%²)\n# Source | Contribution\nMarket | 3.2\nSize | 5.6\nValue | 2.4\nActive specific risk | 4.8\nTotal | 16.0",
    "questions": [
     {
      "q": "The size factor's share of active risk squared is closest to:",
      "options": [
       "5.6%",
       "47%",
       "35%"
      ],
      "answer": 2,
      "why": "Contribution to active risk squared = factor's active risk (%²) / active risk squared = 5.6 / 16.0 = 35%."
     },
     {
      "q": "Active factor risk as a share of active risk squared is closest to:",
      "options": [
       "30%",
       "80%",
       "70%"
      ],
      "answer": 2,
      "why": "Active factor risk = 3.2 + 5.6 + 2.4 = 11.2 → 11.2/16.0 = 70%. Active specific risk = 4.8/16 = 30%."
     }
    ]
   },
   {
    "topic": "Portfolio Management",
    "body": "Mei Tanaka analyses the record of a quantitative manager who makes 100 independent-looking stock decisions a year.\n\nFact 1: The manager's forecasts of whether stocks outperform are correct 56% of the time.\nFact 2: The decisions are not truly independent: the average correlation between decisions is 0.05 because of cross-sectional and time-series dependency.\nFact 3: Each decision has an active risk of 3%.\n\nTanaka also analyses a sector rotation strategy that switches between two sectors X and Y each month. The monthly standard deviations are 5.0% for X and 4.0% for Y, and their correlation is 0.80.",
    "questions": [
     {
      "q": "The manager's information coefficient is closest to:",
      "options": [
       "0.12",
       "0.56",
       "0.44"
      ],
      "answer": 0,
      "why": "IC = 2 × (% correct) − 1 = 2 × 0.56 − 1 = 0.12"
     },
     {
      "q": "The manager's effective breadth is closest to:",
      "options": [
       "95.0",
       "100",
       "16.8"
      ],
      "answer": 2,
      "why": "With correlated decisions: BR = N / [1 + (N − 1) r] = 100 / (1 + 99 × 0.05) = 100 / 5.95 = 16.8"
     },
     {
      "q": "Using the effective breadth, the manager's expected annual active return is closest to:",
      "options": [
       "36.00%",
       "6.05%",
       "1.48%"
      ],
      "answer": 1,
      "why": "Annualised active risk σA = σ per decision × √BR = 3% × √16.81 = 12.30%\nE(RA) = IC × √BR × σA = 0.12 × 4.100 × 12.30% = 6.05%"
     },
     {
      "q": "The monthly active risk of the sector rotation strategy is closest to:",
      "options": [
       "6.40%",
       "3.00%",
       "1.00%"
      ],
      "answer": 1,
      "why": "σC = [σX² − 2 σX σY r + σY²]^½ = [0.0025 − 2 × 0.05 × 0.04 × 0.80 + 0.0016]^½ = 3.00%"
     }
    ]
   },
   {
    "topic": "Portfolio Management",
    "body": "Tanaka compares unconstrained and constrained versions of a strategy. The unconstrained information ratio is 0.40. Long-only constraints give a transfer coefficient of 0.6. The benchmark has a Sharpe ratio of 0.35 and a standard deviation of 16%.",
    "questions": [
     {
      "q": "The optimal amount of active risk for the constrained portfolio is closest to:",
      "options": [
       "10.97%",
       "6.58%",
       "18.29%"
      ],
      "answer": 0,
      "why": "Unconstrained: σA* = IR/SR_B × σ_B. Constrained: σA* = TC × (IR/SR_B) × σ_B (IR here = IC√BR)\n= 0.6 × (0.40/0.35) × 16% = 10.97%"
     },
     {
      "q": "The maximum Sharpe ratio of the constrained portfolio is closest to:",
      "options": [
       "0.590",
       "0.532",
       "0.424"
      ],
      "answer": 2,
      "why": "Constrained: SR_P = √[SR_B² + TC² × IR²] = √[0.35² + 0.6² × 0.40²] = 0.424\nUnconstrained would be √(SR_B² + IR²) = 0.532."
     },
     {
      "q": "If the optimal active risk is 9.6% and the active portfolio's active risk is 12%, the weight in the active portfolio (the rest in the benchmark) is:",
      "options": [
       "20%, with 80% in the benchmark",
       "80%, with 20% in the benchmark",
       "125%, borrowing 25% from the benchmark"
      ],
      "answer": 1,
      "why": "Optimal weight in active portfolio = optimal active risk / active risk of the portfolio = 9.6/12 = 0.80; benchmark weight = 1 − 0.80 = 0.20."
     },
     {
      "q": "The transfer coefficient best measures:",
      "options": [
       "how well the manager's anticipated risk-adjusted returns are translated into risk-adjusted active weights",
       "the number of independent active decisions the manager makes per year on different securities",
       "the manager's ability to forecast returns, measured as the correlation between forecast and actual active returns"
      ],
      "answer": 0,
      "why": "TC = correlation between forecast (risk-adjusted) returns and risk-weighted active weights; constraints lower it. IC = forecasting skill; BR = number of independent decisions."
     }
    ]
   },
   {
    "topic": "Portfolio Management",
    "body": "Felix Arnaud reviews three managers for Sienne Pension Fund.\n\nExhibit 1: Manager Results\n# Manager | Portfolio return | Benchmark return | Active risk\nA | 8.80% | 8.75% | 3.06%\nB | 9.40% | 8.75% | 3.32%\nC | 10.50% | 8.75% | 9.46%\n\nManager D runs a balanced fund: 70% fixed income (return 10%, benchmark 8%) and 30% equity (return 12%, benchmark 10.5%). The benchmark weights are 60% fixed income and 40% equity.\n\nArnaud adds: (1) \"Manager A has very low active risk, a Sharpe ratio close to the benchmark's and an indeterminate information ratio, like a closet index fund.\" (2) \"If Manager B doubled all active weights, its information ratio would not change.\" (3) \"Changing the benchmark would change the managers' Sharpe ratios.\"",
    "questions": [
     {
      "q": "Which manager has the highest information ratio?",
      "options": [
       "Manager C",
       "Manager A",
       "Manager B"
      ],
      "answer": 2,
      "why": "IR = active return / active risk.\nA: 0.05/3.06 = 0.016; B: 0.65/3.32 = 0.196; C: 1.75/9.46 = 0.185 → B."
     },
     {
      "q": "Manager D's return from security selection is closest to:",
      "options": [
       "0.50%",
       "1.85%",
       "2.15%"
      ],
      "answer": 1,
      "why": "Security selection = Σ portfolio weight × (portfolio return − benchmark return) = 0.7 × (10 − 8) + 0.3 × (12 − 10.5) = 1.40 + 0.45 = 1.85%.\n(Asset allocation = Σ benchmark return × (portfolio weight − benchmark weight) = 8 × 0.10 + 10.5 × (−0.10) = −0.25%.)"
     },
     {
      "q": "Which of Arnaud's statements is incorrect?",
      "options": [
       "Statement 3",
       "Statement 2",
       "Statement 1"
      ],
      "answer": 0,
      "why": "The Sharpe ratio (Rp − Rf)/σp does not involve the benchmark, so the benchmark choice affects the IR but not the Sharpe ratio.\nScaling active weights (aggressiveness) does not change the IR. Closet index funds have low active risk, Sharpe near the benchmark and an indeterminate IR."
     },
     {
      "q": "Active return is most accurately described as:",
      "options": [
       "the portfolio return minus the benchmark return, which is not the same as alpha",
       "the return from security selection only, after removing the effect of asset allocation",
       "the same as alpha in all cases, because both measure the return above the benchmark"
      ],
      "answer": 0,
      "why": "Active return = Rp − RB. Alpha is the return beyond what the portfolio's risk exposures explain (for example, beyond beta × market premium), so the two are not the same unless the portfolio's beta equals the benchmark's."
     }
    ]
   },
   {
    "topic": "Portfolio Management",
    "body": "Arnaud lists limitations of the fundamental law of active management:\n\nLimitation 1: If decisions are correlated (for example in fixed-income portfolios driven by a few rate factors), the number of decisions overstates breadth.\nLimitation 2: An ex ante IC that turns out to be poor gives poor ex post results.\n\nHe also notes that adding cash to an active portfolio leaves its Sharpe ratio unchanged.",
    "questions": [
     {
      "q": "Adding cash to an active portfolio most likely:",
      "options": [
       "changes neither ratio",
       "leaves the Sharpe ratio unchanged but changes the information ratio",
       "changes the Sharpe ratio but leaves the information ratio unchanged"
      ],
      "answer": 1,
      "why": "Mixing with cash scales excess return and risk equally → Sharpe ratio unchanged. But the cash creates active weights against the benchmark, changing active return and active risk, so the IR changes (falls)."
     }
    ]
   },
   {
    "topic": "Portfolio Management",
    "body": "Hana Novak explains exchange-traded funds (ETFs) to clients of Tatra Wealth.\n\nPoint 1: The Tatra Europe ETF has a NAV of €24.80 per share and trades at €25.10.\nPoint 2: Novak measures the ETF's tracking error as the standard deviation of the differences between the daily returns of the ETF and its index.\nPoint 3: Compared with mutual funds, ETFs distribute fewer capital gains, because creation and redemption in kind are not taxable, and ETFs can be sold short.\nPoint 4: Novak lists components of an ETF's bid–ask spread: creation/redemption fees and other direct costs; the bid–ask spread of the underlying securities; compensation for the risk of hedging or carrying positions for the rest of the day; the market maker's desired profit; and a discount for the chance of receiving an offsetting order soon.\nPoint 5: A client plans to buy €100,000 of the ETF and hold it for 9 months. The round-trip commission is 0.10%, the bid–ask spread is 0.12% and the annual management fee is 0.20%.",
    "questions": [
     {
      "q": "Based on Point 1, authorised participants are most likely to:",
      "options": [
       "do nothing, because the difference is within the ETF's bid–ask spread and cannot be arbitraged",
       "create ETF shares by delivering the underlying securities, then sell the ETF shares",
       "buy ETF shares in the market and redeem them for the underlying securities, then sell those securities"
      ],
      "answer": 1,
      "why": "ETF price > NAV → premium → authorised participants (market makers) buy the basket, create ETF shares and sell them, pushing the price down. Price < NAV → redemption."
     },
     {
      "q": "For a highly liquid ETF, which components of the spread in Point 4 matter least?",
      "options": [
       "The market maker's profit and the offsetting-order discount",
       "All components matter equally",
       "The first three: direct costs, the underlying spread and hedging compensation"
      ],
      "answer": 2,
      "why": "For very liquid ETFs, market makers rarely need to create/redeem or hedge, so the first three components hardly affect the spread; it reflects mainly the market maker's profit less the discount for offsetting orders. The ETF spread is at most the sum of these components."
     },
     {
      "q": "The client's total expected holding cost in Point 5 is closest to:",
      "options": [
       "0.42%",
       "0.22%",
       "0.37%"
      ],
      "answer": 2,
      "why": "Total cost = round-trip commission + spread + management fee × (months/12) = 0.10% + 0.12% + 0.20% × 9/12 = 0.10 + 0.12 + 0.15 = 0.37%."
     },
     {
      "q": "Which statement about ETF types and risks is most accurate?",
      "options": [
       "Synthetic ETFs and ETNs carry counterparty risk; leveraged and inverse ETFs aim to deliver their multiple only over very short periods",
       "ETNs have no counterparty risk because they hold physical assets; synthetic ETFs carry only settlement risk",
       "Synthetic ETFs carry no counterparty risk; leveraged and inverse ETFs deliver their stated multiple over any holding period"
      ],
      "answer": 0,
      "why": "Synthetic ETFs use swaps → counterparty risk. ETNs are unsecured notes of the issuer → counterparty risk (no settlement/tracking of a basket). Leveraged/inverse funds reset daily, so long-horizon returns differ from the multiple. Other risks: expectation-related risk (investors misunderstanding the ETF) and fund closure risk (regulation, competition, corporate actions)."
     },
     {
      "q": "A manager uses an ETF to keep market exposure while a new sub-manager is being hired for an asset class. This use is best described as:",
      "options": [
       "portfolio liquidity management",
       "portfolio completion",
       "portfolio rebalancing"
      ],
      "answer": 1,
      "why": "Liquidity management: equitise cash quickly. Rebalancing: move back to target asset-class weights cost-efficiently (ETFs can also be shorted). Completion: fill temporary gaps in allocation, such as during a manager transition."
     }
    ]
   },
   {
    "topic": "Portfolio Management",
    "body": "Lucia Ferrante, an economist at Banca Orsini, explains the links between the economy and asset prices.\n\nPoint 1: The price of an asset equals E(CF) / (1 + Rf + π + θ + φ), where π is expected inflation, θ is the premium for inflation uncertainty and φ is the premium for other risks such as default and illiquidity.\nPoint 2: A one-year default-free zero-coupon bond with par of 100 trades at 95.77. The real risk-free rate is 1.5% and expected inflation over the next year is 2.5%.\nPoint 3: Country 1 has nominal GDP growth of 8.5% and inflation of 3.0%, with low volatility of growth. Country 2 has nominal GDP growth of 6.0% and inflation of 0.5%, with high volatility of growth.\nPoint 4: The inter-temporal rate of substitution (ITRS) is the marginal utility of consuming one unit in the future divided by the marginal utility of consuming one unit now.",
    "questions": [
     {
      "q": "Based on Point 2, the inflation uncertainty premium is closest to:",
      "options": [
       "0.42%",
       "0.00%",
       "4.42%"
      ],
      "answer": 0,
      "why": "θ = E(CF)/Price − 1 − Rf − π = 100/95.77 − 1 − 0.015 − 0.025 = 0.42%"
     },
     {
      "q": "Based on Point 3, real interest rates are most likely higher in:",
      "options": [
       "Country 1, because nominal growth is higher",
       "neither country, because real growth is the same",
       "Country 2, because real growth is the same but growth is more volatile"
      ],
      "answer": 2,
      "why": "Real GDP growth = nominal − inflation: Country 1 = 8.5 − 3.0 = 5.5%; Country 2 = 6.0 − 0.5 = 5.5%. Equal real growth, so compare volatility: higher volatility → investors demand higher real rates."
     },
     {
      "q": "If investors expect to be much better off in the future, the ITRS and real interest rates most likely:",
      "options": [
       "both rise",
       "rise and fall, respectively",
       "fall and rise, respectively"
      ],
      "answer": 2,
      "why": "Better off later → future consumption worth less at the margin (numerator falls) → ITRS falls → investors save less → real rates rise. If they expect to be worse off, ITRS rises and real rates fall."
     }
    ]
   },
   {
    "topic": "Portfolio Management",
    "body": "Ferrante adds further observations.\n\nObservation 1: The economy has a positive output gap.\nObservation 2: In the last recession, prices of AAA corporate bonds fell less than equity prices, because equity investors demand a higher equity risk premium in recessions.\nObservation 3: Credit spreads between government and corporate bonds, and between higher- and lower-rated corporate bonds, are narrowing.\nObservation 4: The bond spreads of cyclical businesses are more sensitive to the business cycle, and makers of durable goods have more volatile earnings.\nObservation 5: Corporate profitability is a leading indicator of the business cycle, and understanding the cycle matters most for short-term earnings forecasts.\nObservation 6: An investor compares a building leased to a government agency with a similar building leased to commercial tenants.",
    "questions": [
     {
      "q": "Observation 1 most likely means that:",
      "options": [
       "actual GDP is below potential GDP, with high unemployment",
       "actual GDP is above potential GDP, with rising inflation pressure and low unemployment",
       "the economy is growing at its sustainable rate"
      ],
      "answer": 1,
      "why": "Positive output gap: producing beyond sustainable capacity → high inflation and low unemployment."
     },
     {
      "q": "Based on Observation 3, which is most likely to perform best?",
      "options": [
       "Lower-rated corporate bonds",
       "Government bonds",
       "Higher-rated corporate bonds"
      ],
      "answer": 0,
      "why": "Narrowing spreads: corporate bonds beat government bonds, and lower-rated bonds beat higher-rated bonds (their spreads fall most)."
     },
     {
      "q": "For Observation 6, the commercial building's rental income should most likely be discounted at:",
      "options": [
       "a higher rate, because it includes a credit risk premium for the tenants",
       "a lower rate, because commercial rents rise faster",
       "the same rate, because both include inflation and inflation uncertainty premiums"
      ],
      "answer": 0,
      "why": "Value = net rental income / (1 + r)^t, where net rental income = rental payments − rental expenses. Both rates include inflation (π) and inflation uncertainty (θ); the commercial lease also includes a credit risk premium (φ), so its discount rate is higher."
     }
    ]
   },
   {
    "topic": "Portfolio Management",
    "body": "Kapoor finishes with three notes for the investment committee.\n\nNote 1: Orion's active specific risk has risen sharply this year.\nNote 2: A comparison table of macroeconomic and fundamental factor models.\nNote 3: The risk team's VaR model, and a backtest that needs a covariance matrix for 12 factors.",
    "questions": [
     {
      "q": "Note 1 most likely indicates that:",
      "options": [
       "Orion has become more diversified across individual securities",
       "a larger share of Orion's active risk now comes from stock selection",
       "Orion's factor tilts relative to the benchmark have grown"
      ],
      "answer": 1,
      "why": "Active specific risk = security-specific risk. Higher → more active risk from stock selection; low active specific risk suggests a well-diversified portfolio."
     },
     {
      "q": "Which statement in Note 2 is most accurate?",
      "options": [
       "In a macroeconomic model the intercept is the stock's expected return when all factor surprises are zero; in a fundamental model the intercept has no economic meaning",
       "In a fundamental model the sensitivities are regression slope estimates, and the intercept is the expected return when factors are zero",
       "In a macroeconomic model the factors are estimated from cross-sectional regressions, and the intercept has no economic meaning"
      ],
      "answer": 0,
      "why": "Macroeconomic: sensitivities = regression slopes; factors = surprises in macro variables; intercept = expected return.\nFundamental: sensitivities calculated directly from data (standardised attributes); factor returns estimated from multiple regression; intercept has no meaning."
     },
     {
      "q": "Regarding Note 3, which statement is most accurate?",
      "options": [
       "VaR does not capture liquidity risk, and the covariance matrix has 132 distinct covariances",
       "VaR fully captures liquidity risk, and the covariance matrix has 144 distinct covariances",
       "VaR does not capture liquidity risk, and the covariance matrix has 66 distinct covariances"
      ],
      "answer": 2,
      "why": "VaR ignores liquidity risk (it assumes positions can be sold at market prices).\nDistinct covariances = n(n − 1)/2 = 12 × 11/2 = 66."
     }
    ]
   },
   {
    "topic": "Portfolio Management",
    "body": "Arnaud gives the committee three final points on active management.\n\nPoint 1: An index fund that meets its objective exactly.\nPoint 2: A manager with a very low information coefficient.\nPoint 3: An increase in the volatility of a manager's portfolio returns.",
    "questions": [
     {
      "q": "The information ratio of the index fund in Point 1 is most likely:",
      "options": [
       "indeterminate but positive",
       "zero",
       "equal to its Sharpe ratio"
      ],
      "answer": 1,
      "why": "An index fund that tracks its benchmark exactly has zero active return, so its IR is zero."
     },
     {
      "q": "For the manager in Point 2, it will most likely be:",
      "options": [
       "irrelevant, because IR depends only on breadth",
       "hard to add value, even with many independent decisions or a high transfer coefficient",
       "easy to add value if the manager overweights the securities with the best forecasts"
      ],
      "answer": 1,
      "why": "IR = TC × IC × √BR: a low IC (poor forecasting) makes it hard to add value. Managers should overweight securities with the best forecast relative returns, but this helps only if the forecasts are good."
     },
     {
      "q": "The change in Point 3 most likely affects:",
      "options": [
       "both the Sharpe ratio and the information ratio",
       "the information ratio only, because the Sharpe ratio uses the benchmark",
       "the Sharpe ratio only, because active risk does not change"
      ],
      "answer": 0,
      "why": "Total portfolio volatility enters the Sharpe ratio (σp) and, through active risk, the information ratio, so both are affected. (The benchmark choice, in contrast, affects only the IR.)"
     }
    ]
   }
  ]
 },
 {
  "id": "ps6",
  "title": "Practice set 6",
  "kind": "practice",
  "minutes": 132,
  "desc": "Corporate Issuers, Equity Valuation, Economics, Alternative Investments",
  "vignettes": [
   {
    "topic": "Corporate Issuers",
    "body": "Petra Lindgren, CFO of Halvard Industries, reviews payout policy. Halvard's net income is SEK 900 million, its share price is SEK 120 and its EPS is SEK 9. It has 100 million shares and total equity of SEK 4,800 million.\n\nProposal 1: Borrow SEK 1,200 million at an after-tax cost of 5% and use it to repurchase shares at the market price.\nProposal 2: Pay a 10% stock dividend instead of cash.\nProposal 3: Raise the cash dividend from SEK 3.00 to SEK 3.60 per share.\n\nA board member says Halvard's payout ratio is low because the company has high growth prospects, high flotation costs on new equity and shareholders face high tax rates on dividends.",
    "questions": [
     {
      "q": "Based on Proposal 1, the debt-financed repurchase will most likely:",
      "options": [
       "increase EPS, because the earnings yield is higher than the after-tax cost of debt",
       "leave EPS unchanged, because shareholder wealth is unchanged",
       "decrease EPS, because the earnings yield is lower than the after-tax cost of debt"
      ],
      "answer": 0,
      "why": "Earnings yield = E/P = 9/120 = 7.5% (or 1 ÷ P/E). 7.5% > 5% after-tax cost of debt → EPS rises.\nCheck: new EPS = (900 − 0.05 × 1,200)/90 = 840/90 = 9.33 > 9.00. If earnings yield < cost of debt, EPS falls."
     },
     {
      "q": "After the repurchase in Proposal 1, Halvard's book value per share is closest to:",
      "options": [
       "SEK 54.55",
       "SEK 40.00",
       "SEK 48.00"
      ],
      "answer": 1,
      "why": "Shares bought = 1,200/120 = 10 million → 90 million left.\nEquity = 4,800 − 1,200 = 3,600\nBVPS = equity ÷ shares = 3,600/90 = SEK 40.00 (it falls because the price paid, 120, is above BVPS of 48)."
     },
     {
      "q": "After the stock dividend in Proposal 2, Halvard's share price is most likely closest to:",
      "options": [
       "SEK 109.09",
       "SEK 120.00",
       "SEK 108.00"
      ],
      "answer": 0,
      "why": "New price = old price / (1 + stock dividend %) = 120/1.10 = SEK 109.09. A scrip (stock) dividend does not change shareholder wealth."
     },
     {
      "q": "The market will most likely interpret Proposal 3 as:",
      "options": [
       "no signal, because dividend policy is irrelevant to firm value",
       "a positive signal, because managers raise dividends only when they expect to sustain them",
       "a negative signal, because cash leaves the company instead of funding growth"
      ],
      "answer": 1,
      "why": "Initiating or increasing a dividend → positive signal; cutting or omitting → negative signal. Firms avoid raising dividends they cannot maintain."
     },
     {
      "q": "Which of the board member's reasons is consistent with a low payout ratio?",
      "options": [
       "All three",
       "High growth prospects only",
       "High tax rates on dividends only"
      ],
      "answer": 0,
      "why": "Low payout is consistent with high growth opportunities, high flotation costs of new issues and high taxes on dividends."
     }
    ]
   },
   {
    "topic": "Corporate Issuers",
    "body": "Lindgren compares dividend policies and repurchase methods.\n\nCompany A pays a dividend of SEK 2.00 per share every year, whatever its earnings.\nCompany B pays out 40% of earnings every year.\n\nMethod 1: Buy shares in the open market over time.\nMethod 2: A fixed-price tender offer or Dutch auction.\nMethod 3: A direct negotiation with a large shareholder.\n\nA hedge fund has bought a large stake in Halvard and threatens a takeover unless Halvard buys its shares back at a premium.",
    "questions": [
     {
      "q": "The dividend policies of Companies A and B are, respectively:",
      "options": [
       "residual and stable",
       "stable and constant payout",
       "constant payout and stable"
      ],
      "answer": 1,
      "why": "Stable dividend: the amount stays the same (or grows smoothly). Constant payout: the percentage of earnings stays the same (sometimes a target range)."
     },
     {
      "q": "Which statement about the repurchase methods is most accurate?",
      "options": [
       "Method 1 usually buys at a premium; Method 2 is the most flexible; Method 3 is always done at a premium",
       "Method 1 is the least flexible; Method 2 always buys at a discount; Method 3 is done at the market price",
       "Method 1 is the most flexible; Methods 2 usually buy at a premium; Method 3 may be done at a discount"
      ],
      "answer": 2,
      "why": "Open market = flexible. Fixed-price tender / Dutch auction → premium to market. Negotiated (direct) → can be at a discount, or at a premium in greenmail."
     },
     {
      "q": "The hedge fund's demand is best described as:",
      "options": [
       "a liquidating dividend",
       "a Dutch auction",
       "greenmail"
      ],
      "answer": 2,
      "why": "Greenmail = buying back a hostile bidder's shares at a premium to stop a takeover."
     },
     {
      "q": "Compared with paying the same amount as a cash dividend, a share repurchase leaves shareholder wealth:",
      "options": [
       "lower, because the shares are bought at market price",
       "higher, because the share count falls",
       "the same, unless taxes or signalling differ"
      ],
      "answer": 2,
      "why": "With equal amounts and no taxes or signalling effects, shareholders' wealth is the same under a repurchase and a cash dividend."
     }
    ]
   },
   {
    "topic": "Corporate Issuers",
    "body": "Oskar Brandt reviews governance and ESG for Fennica Group.\n\nFact 1: Fennica and Saarinen Oy each own 10% of the other's shares.\nFact 2: Fennica's parent controls it through a chain of majority holdings.\nFact 3: Fennica's CEO sits on Saarinen's board, and Saarinen's CEO sits on Fennica's board.\nFact 4: Fennica's controlling family owns 25% of the shares but holds 60% of the votes through dual-class shares.\nFact 5: Brandt uses ESG ratings from a data vendor and Fennica's own sustainability report.\nFact 6: Fennica's green bond trades at a lower spread than a conventional Fennica bond with the same rating and maturity.",
    "questions": [
     {
      "q": "Facts 1, 2 and 3 describe, respectively:",
      "options": [
       "a vertical structure, a horizontal structure and a voting cap",
       "a horizontal (cross-holding) structure, a vertical structure and interlocking directorships",
       "interlocking directorships, a pyramid and a cross-holding"
      ],
      "answer": 1,
      "why": "Cross-holdings between companies → horizontal structure. One company controlling another down a chain → vertical (pyramid) structure. Executives on each other's boards → interlocking directorships (a governance issue)."
     },
     {
      "q": "Fact 4 most likely creates which governance problem, and what is one remedy?",
      "options": [
       "A principal–principal conflict between controlling and minority shareholders; a voting cap",
       "A principal–agent conflict; more independent directors only",
       "A principal–agent conflict between managers and shareholders; a voting cap"
      ],
      "answer": 0,
      "why": "Dispersed ownership and voting → principal–agent problem. Concentrated voting power (votes > ownership) → principal–principal problem. A voting cap limits how much any holder can vote."
     },
     {
      "q": "Regarding Fact 5, which statement is most accurate?",
      "options": [
       "Company-reported data are audited and standardised across firms; vendor data are based only on public filings",
       "Vendor data are objective and fully comparable across vendors; company-reported data are mandatory",
       "Vendor data involve subjective analysis of sources and rankings; company-reported data can be inconsistent and voluntary"
      ],
      "answer": 2,
      "why": "ESG data vendors: subjective methods and rankings. Company-reported data (10-K, annual and sustainability reports, proprietary methods): inconsistent and voluntary."
     },
     {
      "q": "The tighter spread on the green bond in Fact 6 is best explained by:",
      "options": [
       "lower credit risk, because green projects never default",
       "shorter duration",
       "strong investor demand, which raises the price and lowers the yield"
      ],
      "answer": 2,
      "why": "Same issuer, rating and maturity → the difference comes from demand: more buyers → higher price → lower yield → tighter spread."
     }
    ]
   },
   {
    "topic": "Corporate Issuers",
    "body": "Mara Kovacs, an analyst at Danubia Capital, estimates the cost of capital for several projects.\n\nProject 1: A private domestic company. Kovacs uses an expanded CAPM with size and company-specific premiums.\nProject 2: A subsidiary in an emerging market. She adds a country risk premium using an extended CAPM with global and country factors.\nProject 3: She needs a pre-tax cost of debt for a company with no traded bonds, rated BBB, and with debt maturing in 7 years. Comparable BBB bonds yield 4.2% at 5 years and 5.1% at 10 years.\nProject 4: A multinational. Kovacs uses an international CAPM: risk-free rate 2.5%, global market premium 5.0%, global beta 1.1, foreign currency risk premium 1.5% and currency beta 0.4.\n\nKovacs also notes that the equity risk premium is higher in developing countries and in recessions.",
    "questions": [
     {
      "q": "For Project 3, the interpolated pre-tax cost of debt is closest to:",
      "options": [
       "5.10%",
       "4.56%",
       "4.65%"
      ],
      "answer": 1,
      "why": "YTM = YTM_S + (YTM_L − YTM_S)/(M_L − M_S) × (M_i − M_S) = 4.2% + (5.1% − 4.2%)/5 × 2 = 4.56%"
     },
     {
      "q": "For Project 4, the cost of equity is closest to:",
      "options": [
       "8.6%",
       "8.0%",
       "9.1%"
      ],
      "answer": 0,
      "why": "ICAPM: E(Re) = Rf + βG[E(RGM) − Rf] + βC[E(RC) − Rf] = 2.5% + 1.1 × 5.0% + 0.4 × 1.5% = 2.5 + 5.5 + 0.6 = 8.6%"
     },
     {
      "q": "Which matching of models to projects is most appropriate?",
      "options": [
       "International CAPM for Project 1; expanded CAPM for Project 4",
       "Expanded CAPM for Project 1; extended CAPM with a country risk premium for Project 2",
       "Extended CAPM for Project 1; expanded CAPM for Project 2"
      ],
      "answer": 1,
      "why": "Expanded CAPM (size and company-specific premiums) → domestic private companies. Country risk premium / extended CAPM (global and country) → foreign operations in riskier countries."
     }
    ]
   },
   {
    "topic": "Corporate Issuers",
    "body": "Kovacs evaluates a merger between Danubia's client Velkor and a competitor. Velkor expects (1) revenue gains from cross-selling, (2) cost savings from closing duplicate offices, (3) some customers leaving because of overlap and (4) one-time integration costs.\n\nTo value the competitor she gathers the P/E ratios of five comparable companies: 14, 16, 18, 21 and 31. The competitor's EPS is €2.50.",
    "questions": [
     {
      "q": "Which items increase the combined company's operating income?",
      "options": [
       "Items 3 and 4 only",
       "Items 1, 2 and 3",
       "Items 1 and 2 only"
      ],
      "answer": 2,
      "why": "Revenue synergies and cost synergies raise operating income. Revenue dis-synergies (lost customers), cost dis-synergies and one-time integration costs reduce it. Think of where each hits operating income."
     },
     {
      "q": "Using comparable companies, the competitor's value per share is closest to:",
      "options": [
       "€52.50",
       "€45.00",
       "€50.00"
      ],
      "answer": 1,
      "why": "Use the median P/E, not the mean: median of 14, 16, 18, 21, 31 = 18. Value = 18 × 2.50 = €45.00. (Mean = 20 → €50; the outlier 31 distorts it.)"
     }
    ]
   },
   {
    "topic": "Equity Valuation",
    "body": "Tobias Weller values Grünwald AG with free cash flow models. Exhibit 1 shows data for the year (in € millions).\n\nExhibit 1: Grünwald AG Data\n# Item | Amount\nNet income | 420\nDepreciation | 150\nFixed capital investment | 310\nIncrease in current assets (including a €30 million increase in cash) | 110\nIncrease in current liabilities | 40\nTarget debt ratio | 40%\n\nGrünwald pays dividends that are far below its FCFE, and its dividends have little relation to its ability to pay.",
    "questions": [
     {
      "q": "The investment in working capital used to calculate FCFE is closest to:",
      "options": [
       "€150 million",
       "€70 million",
       "€40 million"
      ],
      "answer": 2,
      "why": "ΔWC = Δ current assets (excluding cash and cash equivalents) − Δ current liabilities = (110 − 30) − 40 = €40m."
     },
     {
      "q": "Grünwald's FCFE, assuming investment is financed at the target debt ratio, is closest to:",
      "options": [
       "€236 million",
       "€300 million",
       "€260 million"
      ],
      "answer": 1,
      "why": "FCFE = NI − (1 − DR)(FCInv − Dep) − (1 − DR)(WCInv)\n= 420 − 0.60 × (310 − 150) − 0.60 × 40 = 420 − 96 − 24 = €300m"
     },
     {
      "q": "Weller should most likely value Grünwald with:",
      "options": [
       "an FCFE model, because dividends differ greatly from the capacity to pay them",
       "a residual income model, because FCFE is positive",
       "a dividend discount model, because Grünwald pays dividends"
      ],
      "answer": 0,
      "why": "Use FCFE instead of DDM when dividends differ significantly from FCFE (dividend-paying capacity), when the company pays no dividends, or when an investor takes a control perspective."
     }
    ]
   },
   {
    "topic": "Equity Valuation",
    "body": "Weller also values the preferred shares and estimates growth for Ostmark AG.\n\nOstmark's non-callable, non-convertible perpetual preferred shares pay €4.50 a year. The risk-free rate is 3.0% and the equity risk premium applicable to the preferred shares is 4.5%.\n\nOstmark expects EPS of €6.00 next year with a target payout of 45%. Its most recent dividend was €2.40, and it expects to move to the target payout over three years in equal annual steps.\n\nOstmark's ROE is 12% and its retention ratio is 55%.",
    "questions": [
     {
      "q": "The value of Ostmark's preferred shares is closest to:",
      "options": [
       "€60.00",
       "€100.00",
       "€150.00"
      ],
      "answer": 0,
      "why": "Preferred value = D / r, with r = Rf + ERP = 3.0% + 4.5% = 7.5% (check whether you are given r or only the ERP).\nValue = 4.50 / 0.075 = €60.00. (€100 uses only the ERP; €150 uses only Rf.)"
     },
     {
      "q": "Next year's expected dividend is closest to:",
      "options": [
       "€2.50",
       "€2.70",
       "€2.40"
      ],
      "answer": 0,
      "why": "Expected growth in dividend = [(expected EPS × target payout) − previous dividend] / n = (6.00 × 0.45 − 2.40)/3 = (2.70 − 2.40)/3 = 0.10\nNext dividend = 2.40 + 0.10 = €2.50"
     },
     {
      "q": "Ostmark's sustainable growth rate is closest to:",
      "options": [
       "5.4%",
       "12.0%",
       "6.6%"
      ],
      "answer": 2,
      "why": "g = b × ROE = 0.55 × 12% = 6.6%, where b = retention ratio = 1 − payout ratio (payout = DPS/EPS)."
     }
    ]
   },
   {
    "topic": "Equity Valuation",
    "body": "Weller values a small private company, Hallberg GmbH, for a minority investor. A controlling interest would command a control premium of 25%, and the discount for lack of marketability is 20%.\n\nWeller also computes the residual income for a public company with net income of €80 million, beginning equity of €600 million, ending equity of €640 million and a cost of equity of 10%.",
    "questions": [
     {
      "q": "The total discount applied to a controlling value to value Hallberg's minority, non-marketable stake is closest to:",
      "options": [
       "45%",
       "36%",
       "40%"
      ],
      "answer": 1,
      "why": "DLOC = 1 − 1/(1 + control premium) = 1 − 1/1.25 = 20%.\nTotal discount = 1 − (1 − DLOC)(1 − DLOM) = 1 − 0.80 × 0.80 = 36% (the discounts multiply, they are not added)."
     },
     {
      "q": "Residual income for the year is closest to:",
      "options": [
       "€20 million",
       "€16 million",
       "€18 million"
      ],
      "answer": 0,
      "why": "RI = NI − r × beginning book value of equity = 80 − 0.10 × 600 = €20m. Use beginning equity, not ending or average."
     }
    ]
   },
   {
    "topic": "Economics",
    "body": "Sofia Marin, a currency strategist at Iberia Capital, reviews FX positions.\n\nPosition 1: Three months ago Iberia sold EUR 10 million forward against USD for six months at USD 1.1050/EUR. Today the three-month forward rate is USD 1.0950/EUR and the three-month USD interest rate is 4.0% (annualised).\nPosition 2: A client wants a one-year forward on USD/MXN. Spot is 17.20 MXN/USD and the dealer quotes forward points of +850 (in units of 0.0001).\n\nMarin notes that interbank FX liquidity is highest when the London and New York trading hours overlap.",
    "questions": [
     {
      "q": "The mark-to-market value of Position 1 to Iberia is closest to:",
      "options": [
       "USD 99,010 gain",
       "USD 100,000 gain",
       "USD 99,010 loss"
      ],
      "answer": 0,
      "why": "Iberia sold EUR forward at 1.1050. To close, it buys EUR forward at 1.0950: gain = (1.1050 − 1.0950) × 10m = USD 100,000 at settlement.\nDiscount for 3 months: 100,000 / (1 + 0.04 × 90/360) = 100,000 / 1.01 = USD 99,010."
     },
     {
      "q": "The all-in one-year forward rate for Position 2 is closest to:",
      "options": [
       "17.2850 MXN/USD",
       "18.0500 MXN/USD",
       "17.1150 MXN/USD"
      ],
      "answer": 0,
      "why": "All-in forward = spot + forward points/10,000 = 17.2000 + 0.0850 = 17.2850 MXN/USD."
     }
    ]
   },
   {
    "topic": "Economics",
    "body": "Marin explains growth theory to junior staff.\n\nCountry A: real GDP growth 4.5%, labour force growth 1.2%, capital deepening slowing.\nStatement 1: \"In the neoclassical model, in the steady state, growth of output per worker equals the rate of technological progress divided by labour's share, and total output grows at that rate plus labour force growth.\"\nStatement 2: \"In the steady state, the marginal product of capital equals the real interest rate, and MPK = α × Y/K.\"\nStatement 3: \"Capital deepening raises output per worker but runs into diminishing returns, so it cannot raise growth permanently.\"\nStatement 4: \"In the neoclassical model, capital flows from rich to poor countries, helping convergence.\"",
    "questions": [
     {
      "q": "Which of Marin's statements are correct?",
      "options": [
       "Statements 2 and 4 only",
       "Statements 1 and 3 only",
       "All four"
      ],
      "answer": 2,
      "why": "Neoclassical steady state: growth per capita = θ/(1 − α); total output growth = θ/(1 − α) + labour force growth. Steady state: MPK = r = αY/K. Capital deepening has diminishing returns. Open-economy neoclassical model: capital flows to poorer, capital-scarce countries with higher returns → convergence."
     }
    ]
   },
   {
    "topic": "Economics",
    "body": "Marin turns to exchange rates and capital flows.\n\nFact 1: The Canadian dollar has depreciated against the US dollar.\nFact 2: Over the past decade, inflation in Country X averaged 6% and in Country Y 2%. Over the past quarter, the X/Y exchange rate barely moved.\nFact 3: New Zealand's one-year rate is 5.5% and the euro area's is 3.0%. Spot is 0.5500 EUR/NZD.\nFact 4: A fund borrows in yen at 0.2% and invests in euro deposits at 3.0%.\nFact 5: Country Z has a large current account deficit, falling foreign reserves, a sharply appreciated real exchange rate, rapid credit growth and rising M2 relative to reserves.",
    "questions": [
     {
      "q": "Based on Fact 1, the USD/CAD quote (USD per CAD) has most likely:",
      "options": [
       "risen",
       "fallen",
       "not changed"
      ],
      "answer": 1,
      "why": "USD/CAD = USD per 1 CAD. If CAD depreciates, one CAD buys fewer USD → USD/CAD falls."
     },
     {
      "q": "Fact 2 is most consistent with:",
      "options": [
       "relative PPP failing in the long run but holding in the short run",
       "absolute PPP holding in the short run but not in the long run",
       "relative PPP holding in the long run but not in the short run"
      ],
      "answer": 2,
      "why": "Relative PPP: currency of the higher-inflation country depreciates by the inflation difference. It works poorly in the short run but reasonably over long periods."
     },
     {
      "q": "Under uncovered interest rate parity, the expected EUR/NZD spot rate in one year is closest to:",
      "options": [
       "0.5370",
       "0.5634",
       "0.5500"
      ],
      "answer": 0,
      "why": "Expected spot (EUR per NZD) = 0.5500 × (1 + i_EUR)/(1 + i_NZD) = 0.5500 × 1.030/1.055 = 0.5370. The high-yield currency (NZD) is expected to depreciate by the rate difference."
     },
     {
      "q": "The strategy in Fact 4 is best described as a:",
      "options": [
       "carry trade, which profits only if the yen appreciates against the euro",
       "carry trade, which profits if the yen does not appreciate by more than the rate difference",
       "covered interest arbitrage, which locks in a riskless profit from the rate difference"
      ],
      "answer": 1,
      "why": "Carry trade: borrow the low-yield currency (JPY), invest in the high-yield currency (EUR). It earns the rate difference unless the funding currency appreciates enough, i.e. it bets that UIRP fails."
     },
     {
      "q": "Fact 5 most likely signals:",
      "options": [
       "a low risk of crisis, because credit growth supports the economy",
       "a current account surplus",
       "a high risk of a currency crisis"
      ],
      "answer": 2,
      "why": "Warning signs of currency crises: large current account deficit, falling reserves, overvalued (appreciated) real exchange rate, rapid credit growth, rising M2 relative to reserves, and capital inflows that reverse."
     }
    ]
   },
   {
    "topic": "Economics",
    "body": "Marin compares exchange rate models and policy mixes.\n\nModel 1: The pure monetary approach, in which PPP holds at all times.\nModel 2: The Dornbusch model, in which prices are sticky in the short run.\nModel 3: The portfolio balance approach, which focuses on long-run fiscal policy and government debt.\n\nCountry H has high capital mobility and adopts an expansionary monetary policy with a restrictive fiscal policy.",
    "questions": [
     {
      "q": "After an unexpected monetary expansion, which model predicts that the domestic currency first depreciates by more than its long-run amount?",
      "options": [
       "Model 1",
       "Model 3",
       "Model 2"
      ],
      "answer": 2,
      "why": "Dornbusch overshooting: with sticky prices, the currency initially depreciates more than PPP implies, then partly recovers. In the pure monetary approach, it depreciates in line with prices at once."
     },
     {
      "q": "Under the Mundell–Fleming model, Country H's currency will most likely:",
      "options": [
       "appreciate",
       "be unaffected",
       "depreciate"
      ],
      "answer": 2,
      "why": "High capital mobility: expansionary monetary policy → lower rates → depreciation; restrictive fiscal policy → lower rates → depreciation. Both push the same way."
     },
     {
      "q": "Under Model 3, sustained fiscal deficits financed by rising government debt most likely cause the currency to:",
      "options": [
       "depreciate in the long run, as investors demand a lower price or a higher return to hold more of the country's debt",
       "stay unchanged, because in the long run only monetary policy affects the exchange rate",
       "appreciate permanently, because higher interest rates keep attracting foreign capital"
      ],
      "answer": 0,
      "why": "Portfolio balance: short run, fiscal expansion may raise rates and the currency (Mundell–Fleming); long run, continuous deficits raise the supply of the country's bonds and investors require compensation → currency depreciates."
     }
    ]
   },
   {
    "topic": "Alternative Investments",
    "body": "Rhea Castell, an alternatives analyst at Lucerne Advisors, reviews three strategies.\n\nStrategy 1: A fund that is always net short, with little or no long exposure.\nStrategy 2: A fund that has a short bias but holds some long positions, usually 30–60% net short.\nStrategy 3: A fund that buys life insurance policies from policyholders (life settlements).",
    "questions": [
     {
      "q": "Strategies 1 and 2 are best described as, respectively:",
      "options": [
       "equity market neutral and short-biased",
       "dedicated short bias and short-biased",
       "short-biased and dedicated short bias"
      ],
      "answer": 1,
      "why": "Dedicated short: mostly 60–120% short, little long exposure. Short-biased: net short but with some long positions (roughly 30–60% net short)."
     },
     {
      "q": "Strategy 3 is most attractive when the policy has:",
      "options": [
       "a high surrender value, low ongoing premiums and an insured person likely to live longer than expected",
       "a low surrender value, low ongoing premiums and an insured person likely to die sooner than the insurer expects",
       "a high surrender value, high ongoing premiums and an insured person likely to live longer than expected"
      ],
      "answer": 1,
      "why": "The fund pays the premiums and receives the death benefit. It looks for low surrender value (cheap to buy), low premiums and earlier-than-expected death."
     }
    ]
   },
   {
    "topic": "Alternative Investments",
    "body": "Castell values Alpenhaus REIT. Next year's net operating income is CHF 32 million and the market capitalisation rate for similar properties is 6.4%. Alpenhaus also holds CHF 18 million of cash and other tangible assets, and has CHF 290 million of debt. It has 10 million shares.\n\nCastell notes that Alpenhaus is highly leveraged and trades at a large discount to NAVPS, and that its debt matures next year.",
    "questions": [
     {
      "q": "Alpenhaus's NAVPS is closest to:",
      "options": [
       "CHF 51.80",
       "CHF 50.00",
       "CHF 22.80"
      ],
      "answer": 2,
      "why": "Property value by direct capitalisation (not depreciated book cost) = NOI / cap rate = 32.0/0.064 = CHF 500.0m\nNAV = 500.0 + 18 − 290 = 228.0m\nNAVPS = 228.0/10 = CHF 22.80"
     },
     {
      "q": "Castell's concern about Alpenhaus most likely relates to:",
      "options": [
       "refinancing risk, because a highly leveraged REIT trading below NAVPS may struggle to raise new capital",
       "an advantage, because the discount to NAVPS makes it cheap to issue new equity",
       "inflation risk, because its long leases have fixed rents that do not rise with prices"
      ],
      "answer": 0,
      "why": "High leverage plus a deep discount to NAVPS signals market concern; issuing equity below NAV is dilutive and lenders are cautious, so refinancing maturing debt is hard."
     }
    ]
   },
   {
    "topic": "Alternative Investments",
    "body": "Castell analyses commodity futures. The spot price of crude oil is $82.00 per barrel. Storage costs are $2.50 per barrel for the period, and the convenience yield is $4.00 per barrel (expressed in the same terms). Ignore financing costs.",
    "questions": [
     {
      "q": "The futures price is closest to:",
      "options": [
       "$83.50",
       "$88.50",
       "$80.50"
      ],
      "answer": 2,
      "why": "Futures price = spot + storage costs − convenience yield = 82.0 + 2.5 − 4.0 = $80.50"
     },
     {
      "q": "The oil futures market is most likely in:",
      "options": [
       "backwardation, because the convenience yield exceeds storage costs",
       "contango, because storage costs are positive",
       "contango, because the convenience yield is high"
      ],
      "answer": 0,
      "why": "Convenience yield > storage cost (low inventories) → futures below spot → backwardation. Storage costs > convenience yield (ample inventories) → contango."
     }
    ]
   },
   {
    "topic": "Alternative Investments",
    "body": "Castell compares a REIT with a real estate operating company (REOC) for a client.",
    "questions": [
     {
      "q": "Compared with a REOC, a REIT most likely:",
      "options": [
       "can freely reinvest earnings and develop properties for sale, but pays corporate tax",
       "must distribute most of its taxable income and is exempt from corporate income tax, which limits its ability to reinvest",
       "has more flexible capital structure and lower dividend yields"
      ],
      "answer": 1,
      "why": "REIT: tax exempt if it distributes most income → high dividend yield, less retained capital, limits on development. REOC: ordinary taxable company, more freedom to reinvest, develop and use leverage; lower yield."
     }
    ]
   }
  ]
 },
 {
  "id": "mock7",
  "title": "Mock 7",
  "kind": "mock",
  "minutes": 132,
  "desc": "8 new vignettes + 3 re-done (names and numbers changed); scored separately",
  "vignettes": [
   {
    "topic": "Ethical and Professional Standards",
    "group": "new",
    "body": "Marisa Cheng, CFA, is a portfolio manager with a large full-service investment advisory firm. She has been invited to speak on a podcast with a target audience of recent university graduates entering the investment industry. Cheng decided to focus her talk on her favorite topic: “How to Advance Your Career.” During the podcast, she mentions that most portfolio managers start in the Research Department. She then shares her philosophy that when entering the industry as an entry-level research analyst, you should create a research report at least once a week to prove yourself. This is particularly easy if you are an equity analyst, as the research analysis process should be the same regardless of the security being analyzed.\n\nCheng then offers advice to the audience about the benefits of changing employers, which she believes allows a person to move into higher positions with greater responsibilities. She explains “Based on my experience, younger employees get overlooked when employers are filling middle to senior management positions. By moving to a different firm every three to five years, you can typically join at a more senior level with higher pay. However, when you move to a new firm, you need to be cautious so your employer and client relationships are not harmed.”\n\nCheng recommends the following actions:\n\nAction 1: Utilize your own viewpoints based on your skills and experiences.\nAction 2: Share policies and processes utilized in past positions.\nAction 3: Notify clients of your new role before changing employers.\nThe podcast interviewer asks, “I know this is a bit off today’s topic, but I was wondering, as a CFA® charterholder, how do you ensure you are serving your clients’ interests as required by the CFA Code of Ethics and Standards of Professional Conduct? For instance, what would you do if you learned in a meeting with your client that due to a change in their circumstances, the investment product they have invested in no longer meets their investment goals and constraints outlined in their investment policy statement?”\n\nCheng responds, “Let’s consider three options.”\n\nOption 1: I could advise them to add some of our other investment products to their existing investment portfolio, so their new overall investment return objectives and risk profile could be met given their new circumstances.\nOption 2: I could immediately reassure them their existing product is still suitable even under their changing circumstances.\nOption 3: I could advise them to shop around to determine whether other investment management firms had a more appropriate product to meet their investment goals and give them a list of questions to ask so they could compare services.\nAfter thanking the interviewer for the opportunity to speak, Cheng makes the following final statement:\n\n“I would like to encourage all the listeners who are interested in advancing their careers in the investment industry to become CFA charterholders. The three sequential exams are very tough, as you can be tested on a wide array of curriculum topics, including financial analysis, economics, and derivatives. Becoming a charterholder also demonstrates you are more professional than those without the CFA® charter. By upholding the CFA Code of Ethics and Standards of Professional Conduct, you send a message to the industry that you really care about the interests of your clients and the integrity of the capital markets.”",
    "questions": [
     {
      "q": "Is Cheng’s philosophy regarding an entry-level research analyst role most likely consistent with guidance for Standard V(A) Diligence and Reasonable Basis?",
      "options": [
       "Yes, with regard to the equity analysis process.",
       "No.",
       "Yes, with regard to weekly research reports."
      ],
      "answer": 1,
      "why": "A. Incorrect. Cheng’s philosophy regarding an entry-level research analyst’s role is inconsistent with the guidance for Standard V(A) Diligence and Reasonable Basis. Standard V(A) requires members and candidates to exercise diligence, independence, and thoroughness in analyzing investment, making investment recommendations, and taking investment action. It also requires members and candidates to have a reasonable and adequate basis, supported by appropriate research and investigations for any investment analysis, recommendation, or action. Members and candidates must put forth the necessary effort to support the recommendations they are making. At times, one week may not be enough time to undertake a thorough analysis of an investment, make a recommendation, and determine the suitability of the investment for the clients. When determining the suitability of an investment for the client, the necessary level of research and analysis will differ with the security under review, even if all are equity securities. Each security can vary in its complexity, particularly if the underlying assets are vastly different, are in different geographic locations, and have different business models. In providing an investment service, members and candidates typically use a variety of resources, including company reports, third-party research, and results from quantitative models.\nB. Correct. Cheng’s philosophy regarding an entry-level research analyst’s role – that is, you should create a research report at least once a week and it is particularly easy if you are an equity analyst as the research process is the same regardless of the security – is inconsistent with the guidance for Standard V(A) Diligence and Reasonable Basis. Standard V(A) requires members and candidates to exercise diligence, independence, and thoroughness in analyzing investment, making investment recommendations, and taking investment action. It also requires members and candidates to have a reasonable and adequate basis, supported by appropriate research and investigations for any investment analysis, recommendation, or action. Members and candidates must put forth the necessary effort to support the recommendations they are making. At times, one week may not be enough time to undertake a thorough analysis of an investment, make a recommendation, and determine the suitability of the investment for the clients. When determining the suitability of an investment for the client, the necessary level of research and analysis will differ with the security under review, even if all are equity securities. Each security can vary in its complexity, particularly if the underlying assets are vastly different, are in different geographic locations, and have different business models. In providing an investment service, members and candidates typically use a variety of resources, including company reports, third-party research, and results from quantitative models.\nC. Incorrect. Cheng’s philosophy regarding an entry-level research analyst’s role is inconsistent with the guidance for Standard V(A) Diligence and Reasonable Basis. Standard V(A) requires members and candidates to exercise diligence, independence, and thoroughness in analyzing investment, making investment recommendations, and taking investment action. It also requires members and candidates to have a reasonable and adequate basis, supported by appropriate research and investigations for any investment analysis, recommendation, or action. Members and candidates must put forth the necessary effort to support the recommendations they are making. At times, one week may not be enough time to undertake a thorough analysis of an investment, make a recommendation, and determine the suitability of the investment for the clients. When determining the suitability of an investment for the client, the necessary level of research and analysis will differ with the security under review, even if all are equity securities. Each security can vary in its complexity, particularly if the underlying assets are vastly different, are in different geographic locations, and have different business models. In providing an investment service, members and candidates typically use a variety of resources, including company reports, third-party research, and results from quantitative models."
     },
     {
      "q": "Given Cheng’s advice regarding changing jobs, which recommended action should an employee most likely take to avoid violating the CFA Standards of Professional Conduct?",
      "options": [
       "Action 1",
       "Action 2",
       "Action 3"
      ],
      "answer": 0,
      "why": "A. Correct. A member or candidate is allowed to utilize their viewpoints based on their skills and the experiences gained from their former employment without violating Standard IV(A) Loyalty. By doing so, they would not potentially harm their former employer. Standard IV(A) Loyalty requires members and candidates to act for the benefit of their employer and not deprive their employer the advantage of their skills and abilities, divulge confidential information, or otherwise cause harm to their employer. By informing their old employer’s clients of their new role before changing employers and sharing policies and processes used at the old employers, they likely would harm their old employer and thus violate Standard IV(A).\nB. Incorrect. Action 1, Share policies and processes utilized in past positions, would violate Standard IV(A) Loyalty. Standard IV(A) requires members and candidates to act for the benefit of their employer and not deprive their employer of the advantage of their skills and abilities, divulge confidential information, or otherwise cause harm to their employer.\nC. Incorrect. Action 3, Notify clients of your new role before changing employers, would violate Standard IV(A) Loyalty. Standard IV(A) requires members and candidates to act for the benefit of their employer and not deprive their employer of the advantage of their skills and abilities, divulge confidential information, or otherwise cause harm to their employer."
     },
     {
      "q": "To avoid violating CFA Standards of Professional Conduct, which of Cheng’s options in response to the interviewer’s question is least appropriate?",
      "options": [
       "Option 1",
       "Option 2",
       "Option 3"
      ],
      "answer": 1,
      "why": "A. Incorrect. Option 1, I could advise them to add some of our other investment products to their existing investment portfolio, so their new overall investment return objectives and risk profile could be met given their new circumstances, could be considered appropriate action if adding some of the firm’s other investment products to the client’s portfolio would result in a better match of the client’s investment objectives and risk profile as required under Standard III(C) Suitability.\nB. Correct. Option 2, I could immediately reassure them their existing product is still suitable even under their changing circumstances, would not be appropriate. Before giving any investment advice, Cheng should better understand the changing circumstances of the client and determine whether the existing product is still suitable rather than immediately state that it is. By failing to understand their changing circumstances and to reassess their current portfolio, Cheng would be in violation of Standard III(C) Suitability. This standard requires members and candidates to determine whether an investment is suitable for the client’s financial situation and consistent with the client’s written objectives, mandates, and constraints before making an investment recommendation or taking investment action. The steps outlined in Options 2 and 3 would comply with Standard III(C) Suitability – that is, both consider the change in the client’s circumstances.\nC. Incorrect. Option 3, I could advise them to shop around to determine whether other investment management firms had a more appropriate product to meet their investment goals and give them a list of questions to ask so they could compare services, would not violate CFA Standards of Professional Conduct. By doing so, Cheng would be helping the client to determine which investment product is best for them in accordance with Standard III(C) Suitability. Cheng also would be putting the interests of the client before hers or her firms as required by Standard III(A) Loyalty, Prudence, and Care."
     },
     {
      "q": "Which component of Cheng’s final statement most likely causes her to violate CFA Standards of Professional Conduct?",
      "options": [
       "Comment on testing and curriculum",
       "A CFA charterholder’s level of professionalism",
       "The message to the industry"
      ],
      "answer": 1,
      "why": "A. Incorrect. Cheng does not violate Standard VII(A) Responsibilities as a CFA Institute member or CFA candidate when making the statement that the test is hard and you can be tested on a wide array of curriculum topics (she is not stating what was tested on a specific exam) or examples of the core curriculum covered in the CFA Program. She stated, “While the three sequential exams are very tough, the core curriculum covers a wide array of topics, including financial analysis, economics, and derivatives.” This is not confidential program or exam information in that it is publicly available on the Internet as a part of the CFA Program descriptions. Standard VII(A) Responsibilities as a CFA Institute member or CFA candidate requires members and candidates to not engage in any conduct that compromises the reputation or integrity of CFA Institute or the CFA designation or the integrity, validity, or security of CFA Institute programs. Cheng did not violate the standard when she stated, “By upholding the CFA Code of Ethics and Standards of Professional Conduct you send a message to the industry that you really care about the interests of your clients and the integrity of the capital markets,” as she did not misrepresent or exaggerate the meaning of the CFA charter.\nB. Correct. Cheng’s comment, “Becoming a charterholder also demonstrates you are more professional than those without the CFA charter, violates Standard VII(B) Reference to CFA Institute, the CFA® designation, and the CFA® Program. By making such a claim, she is exaggerating the meaning of the charter. Standard VII(B) requires members and candidates when referring to CFA Institute, CFA Institute memberships, the CFA designation, or candidacy in the CFA Program to not misrepresent or exaggerate the meaning or implications of membership in CFA Institute, holding the CFA designation, or candidacy in the CFA Program. Cheng does not violate Standard VII(A) Responsibilities as a CFA Institute member or CFA candidate when making the statement about what could be tested (she is not stating what was tested on a specific exam), giving curriculum specifics or examples of the core curriculum covered in the CFA Program. This information is publicly available on the CFA Institute website. Cheng does not misrepresent or exaggerate the meaning of the CFA charter when stating, “By upholding the CFA Code of Ethics and Standards of Professional Conduct you send a message to the industry that you really care about the interests of your clients and the integrity of the capital markets.” Therefore, she does not violate Standard VIII(B).\nC. Incorrect. Cheng does not misrepresent or exaggerate the meaning of the CFA charter when stating, “By upholding the CFA Code of Ethics and Standards of Professional Conduct you send a message to the industry that you really care about the interests of your clients and the integrity of the capital markets.” Therefore, she did not violate Standard VII(B) Reference to CFA Institute, the CFA designation, and the CFA® Program. Standard VII(B), which requires members and candidates when referring to CFA Institute, CFA Institute memberships, the CFA designation, or candidacy in the CFA Program to not misrepresent or exaggerate the meaning or implications of membership in CFA Institute, holding the CFA designation, or candidacy in the CFA Program."
     }
    ]
   },
   {
    "topic": "Alternative Investments",
    "group": "new",
    "body": "Tim Wang is a financial adviser specializing in commercial real estate investing. He is meeting with Mark Caudill, a new client who is looking to diversify his investment portfolio by adding real estate investments. Caudill has heard about various investment vehicles related to real estate from his friends and is seeking a more in-depth understanding of these investments from Wang.\n\nWang begins the meeting by advising Caudill of four options that are available when investing in real estate, including the following:\n\nOption 1. Publicly traded real estate investment trusts\n\nOption 2. Publicly traded real estate operating companies\n\nOption 3. Direct ownership in real estate\n\nOption 4. Publicly traded residential mortgage-backed securities\n\nWang next asks Caudill about his investment preferences. Caudill responds by telling Wang that he prefers to invest in equity securities that are highly liquid, provide high income, and are not subject to double taxation.\n\nCaudill asks Wang how the economic performance of REITs and REOCs is evaluated and how their shares are valued. Wang advises Caudill there are multiple measures of economic performance for REITs and REOCs, including the following:\n\nMeasure 1. Adjusted funds from operations\n\nMeasure 2. Net operating income\n\nMeasure 3. Funds from operations\n\nIn response, Caudill asks Wang,\n\n“Which of the three measures is the best measure of a REIT’s current economic return to shareholders?”\n\nTo help Caudill’s understanding of valuation, Wang presents Caudill with data on Baldwin, a health care REIT that primarily invests in independent and assisted senior housing communities in large cities across the United States. Selected financial data on Baldwin for the past two years are provided in Exhibit 1.\n\nExhibit 1\nBaldwin REIT Summarized Income Statement (USD thousands, except per-share data)\n#   | Year Ending 31 December\n  | 2019 |   | 2018\nRental income | 339,009 |   | 296,777\nOther property income | 6,112 |   | 4,033\nTotal income | 345,121 |   | 300,810\nRental expenses |  \nProperty operating expenses | 19,195 |   | 14,273\nProperty taxes | 3,610 |   | 3,327\nTotal property expenses | 22,805 |   | 17,600\nNet operating income | 322,316 |   | 283,210\nOther income (gains on sale of properties) | 2,162 |   | 1,003\nGeneral and administrative expenses | 21,865 |   | 19,899\nDepreciation and amortization | 90,409 |   | 78,583\nNet interest expenses | 70,017 |   | 56,404\nNet income | 142,187 |   | 129,327\nWeighted average shares outstanding | 121,944 |   | 121,863\nEarnings per share | 1.17 |   | 1.06\nDividend per share | 0.93 |   | 0.85\nPrice/FFO, based on year-end stock price | 11.5× |   | 12.7×\nBefore the meeting, Wang had put together some valuation assumptions for Baldwin in anticipation of discussing valuation with Caudill. Wang explains the process of valuing a REIT share using discounted cash flow analysis, and he proceeds to estimate the value of Baldwin on a per-share basis using a two-step dividend discount model using the data provided in Exhibit 2.\n\nExhibit 2\nBaldwin Valuation Projections and Assumptions\nCurrent risk-free rate | 4.0%\nBaldwin beta | 0.90\nMarket risk premium | 5.0%\nAppropriate discount rate (CAPM) | 8.5%\n\nExpected dividend per share, 1 year from today | $1.00\nExpected dividend per share, 2 years from today | $1.06\nLong-term growth rate in dividends, starting in Year 3 | 5.0%",
    "questions": [
     {
      "q": "Relative to Option 1 and Option 2, a disadvantage of investing in Option 3 is most likely:",
      "options": [
       "exposure to double taxation of dividends.",
       "lower liquidity and larger investment requirements.",
       "less control over property-level investment decisions."
      ],
      "answer": 1,
      "why": "A. Incorrect. Direct ownership pays no corporate-level tax on the property income, so there is no double taxation (that is a REOC issue; REITs avoid it).\nB. Correct. Direct ownership is illiquid and needs a large amount of capital per property, while publicly traded REITs and REOCs can be bought in small amounts and sold quickly.\nC. Incorrect. Direct ownership gives MORE control over property-level decisions than holding REIT or REOC shares; that is its main advantage."
     },
     {
      "q": "The most appropriate response to Caudill’s question is:",
      "options": [
       "Measure 1.",
       "Measure 2.",
       "Measure 3."
      ],
      "answer": 0,
      "why": "A is correct. Measure 1, adjusted funds from operations, is a refinement of FFO that is designed to be a more accurate measure of current economic income. In essence, FFO is adjusted to remove any non-cash rent and to include a provision for maintenance-type capital expenditures and leasing costs. Maintenance expenses are required for a business to continue as a going concern."
     },
     {
      "q": "Based on Exhibit 1, the 2019 year-end share price of Baldwin was closest to:",
      "options": [
       "$13.23.",
       "$21.73.",
       "$30.36."
      ],
      "answer": 1,
      "why": "B is correct. Baldwin’s FFO per share in 2019 was $1.89, and the resulting share price was $21.73. First, calculate FFO per share in 2019, and then apply the year-end P/FFO multiple of 11.5×.\n\nFFO = accounting net earnings, excluding (a) depreciation charges on real estate, (b) deferred tax charges, and (c) gains or losses from sales of property and debt restructuring.\n2019 accounting net income: $142,187\n2019 depreciation charges: $90,409\n2019 deferred tax charges: na\n2019 gains on sale of properties (other income): $2,162\n2019 shares outstanding: 121,944\n2019 year-end price/FFO = 11.5×.\n2019 Baldwin FFO per share = ($142,187 + $90,409 – $2,162)/121,944 shares = $1.89. At the given 2019 year-end price/FFO multiple of 11.5×, this results in a share price for Baldwin of $1.89 × 11.5 = $21.73."
     },
     {
      "q": "Based on Exhibit 2, the intrinsic value of the Baldwin REIT on a per share basis using the two-step dividend discount model is closest to:",
      "options": [
       "$26.72.",
       "$27.59.",
       "$28.76."
      ],
      "answer": 2,
      "why": "C is correct. The estimated value per share for the Baldwin REIT using a two-step dividend discount model is $28.76, calculated as follows:\n\n \tStep 1\t\tStep 2\n \tYear 1\tYear 2\t\tYear 3\nDividends per share\t$1.00\t$1.06\t \t$1.11\nValue of stock at end of Year 2a\t \t$31.71\t \t \n \t \t$32.77\t \t \nDiscount rate: 8.50%\n            Net present value of all dividends:b $28.76\naCalculated as $1.11/(0.085 – 0.05) = $31.71.\nbCalculated as $1.00/(1.085) + $32.77/(1.085)2 = $28.76."
     }
    ]
   },
   {
    "topic": "Equity Valuation",
    "group": "new",
    "body": "Elena Castovan is a junior analyst with Contralith Capital, a long-only equity investment manager. She has been asked to value three stocks on Contralith’s watch list: Portous, Inc. (PTU), SSX Financial (SSX), and Tantechi Ltd. (TTCI).\n\nDuring their weekly meeting, Castovan and her supervisor, Ariana Beckworth, discuss characteristics of residual income models. Castovan tells Beckworth the following.\n\nStatement 1:\nThe RI model’s use of accounting income assumes that the cost of debt capital is appropriately reflected by interest expense.\n\nStatement 2:\nRI models cannot be readily applied to companies that do not have positive expected near-term free cash flows.\n\nStatement 3:\nThe present value of the terminal value in RI models is often a larger portion of the total intrinsic value than it is in other DCF valuation models.\n\nBeckworth asks Castovan why an RI model may be more appropriate for valuing PTU than the dividend discount model or a free cash flow model. Castovan tells Beckworth that, over her five-year forecast horizon, she expects PTU to perform the following actions.\n\nReason 1:\nReport significant amounts of other comprehensive income\n\nReason 2:\nPay dividends that are unpredictable\n\nReason 3:\nGeneratepositiveand fairly predictable free cash flows\n\nAt the conclusion of their meeting, Beckworth asks Castovan to value SSX using RI models. Selected financial information on SSX is presented in Exhibit 1.\n\nExhibit 1\nSSX Financial (SSX) Selected Financial Data\nTotal assets (millions) | €4,000.00\nCapital structure | 60% debt/40% equity\nEBIT (millions) | €700.00\nTax rate | 35.00%\nReturn on equity (ROE) | 23.37%\nPretax cost of debta | 5.20%\nCost of equity | 15.00%\nMarket price per share | €48.80\nPrice-to-book ratio | 2.10\na Interest expense is tax-deductible.\nCastovan’s final assignment is to determine the intrinsic value of TTCI using both a single-stage and a multistage RI model. Selected data and assumptions for TTCI are presented in Exhibit 2.\n\nExhibit 2\nTantechi Ltd. (TTCI) Selected Financial Data and Assumptions\nBook value per share | €45.25\nMarket price per share | €126.05\nConstant long-term ROE | 12.00%\nConstant long-term earnings growth rate | 4.50%\nCost of equity | 8.70%\nFor the multistage model, Castovan forecasts TTCI’s ROE to be higher than its long-term ROE for the first three years. Forecasted earnings per share and dividends per share for TTCI are presented in Exhibit 3. Starting in Year 4, Castovan forecasts TTCI’s ROE to revert to the constant long-term ROE of 12% annually. The terminal value is based on an assumption that residual income per share will be constant from Year 3 into perpetuity.\n\nExhibit 3\nTantechi Ltd. (TTCI) Forecasts of Earnings and Dividends\n#   | Year 1 | Year 2 | Year 3\nEarnings per share (€) | 7.82 | 8.17 | 8.54\nDividends per share (€) | 1.46 | 1.53 | 1.59\nBeckworth questions Castovan’s assumption regarding the implied persistence factor used in the multistage RI valuation. She tells Castovan that she believes that a persistence factor of 0.10 is appropriate for TTCI.",
    "questions": [
     {
      "q": "Which of Castovan’s statements regarding residual income models is correct?",
      "options": [
       "Statement 1",
       "Statement 2",
       "Statement 3"
      ],
      "answer": 0,
      "why": "A is correct. The residual income model’s use of accounting income assumes that the cost of debt capital is reflected appropriately by interest expense."
     },
     {
      "q": "Based on Exhibit 1, residual income for SSX is closest to:",
      "options": [
       "€40.9 million.",
       "€90.2 million.",
       "€133.9 million."
      ],
      "answer": 2,
      "why": "C is correct. The residual income can be calculated using net income and the equity charge or using net operating profit after taxes and the total capital charge.\nResidual income = Net income – Equity charge\nCalculation of Net Income (values in millions):\nEBIT\t€700.0\t\nLess Interest expense\t€124.8\t(= €4,000 × 0.60 × 0.052)\nPretax income\t€575.2\t\nLess Income tax expense\t€201.3\t(= €575.20 × 0.35)\nNet income\t€373.9\t\nEquity charge = Total assets × Equity weighting × Cost of equity\nEquity charge = €4,000 million × 0.40 × 0.15 = €240 million\nTherefore, residual income = €373.9 million – €240 million = €133.9 million.\nAlternatively, residual income can be calculated from NOPAT as follows.\nResidual income = NOPAT – Total capital charge\nNOPAT = EBIT × (1 – Tax rate)\nNOPAT = €700 million × (1 – 0.35) = €455 million\nThe total capital charge is as follows.\nEquity charge = Total assets × Equity weighting × Cost of equity\n= €4,000 million × 0.40 × 0.15\n= €240 million\nDebt charge = Total assets × Debt weighting × Pretax cost of debt × (1 – Tax rate)\n= €4,000 million × 0.60 × 0.052(1 – 0.35)\n= €81.1 million\nTotal capital charge = €240 million + €81.1 million\n= €321.1 million\nTherefore, residual income = €455 million – €321.1 million = €133.9 million."
     },
     {
      "q": "Based on Exhibit 2, the justified price-to-book ratio for TTCI is closest to:",
      "options": [
       "1.79.",
       "2.27.",
       "2.79."
      ],
      "answer": 0,
      "why": "A is correct. The justified price-to-book ratio is calculated as"
     },
     {
      "q": "Based on Exhibits 2 and 3 and the multistage RI model, Castovan should estimate the intrinsic value of TTCI to be closest to:",
      "options": [
       "€54.88.",
       "€83.01.",
       "€85.71."
      ],
      "answer": 2,
      "why": "C is correct. Residual income per share for the next three years is calculated as follows.\n \tYear 1\tYear 2\tYear 3\nBeginning book value per share\t45.25\t51.61\t58.25\nEarnings per share\t7.82\t8.17\t8.54\nLess dividends per share\t1.46\t1.53\t1.59\nChange in retained earnings\t6.36\t6.64\t6.95\nEnding book value per share\t51.61\t58.25\t65.20\nEarnings per share\t7.82\t8.17\t8.54\nLess per share equity charge*\t3.94\t4.49\t5.07\nResidual income\t3.88\t3.68\t3.47\n* Per share equity charge = Beginning book value per share × Cost of equity\nYear 1 per share equity charge = 45.25 × 0.087 = 3.94\nYear 2 per share equity charge = 51.61 × 0.087 = 4.49\nYear 3 per share equity charge = 58.25 × 0.087 = 5.07\nBecause Castovan forecasts that residual income per share will be constant into perpetuity, equal to Year 3 residual income per share, the present value of the terminal value is calculated using a persistence factor of 1.\nPresent value of terminal value = \n = \n \n= 33.78\nSo, the intrinsic value of TTCI is then calculated as follows.\n\n€\n€"
     }
    ]
   },
   {
    "topic": "Corporate Issuers",
    "group": "redo",
    "body": "Ingrid Halvorsen is the CFO of Kestrel Yachts (KY), a Swedish manufacturer of sailing yachts. Halvorsen is reviewing KY's dividend policy before recommending a course of action to the Board of Directors on the current year dividend payment.\n\nKY's business is influenced by many factors, including commodity prices, interest rates and general economic conditions.\n\nExhibit 1\n# | Current Year | Prior Year | Two Years Ago\nPre-tax income (SEK millions) | 585 | 415 | 385\nAfter-tax net income (SEK millions) | 410 | 290 | 270\nDividends paid (SEK millions) | --- | 110 | 100\nNumber of shares outstanding (millions) | 5 | 5 | 5\nKY's shares currently trade at SEK 380.\n\nExhibit 1 shows that KY had a very strong year, generating an additional SEK 120 million of net income over the previous year. Halvorsen considers four options, in addition to the regular dividend, to return part of this additional capital to shareholders in the current year:\n\nOption 1: Issue a stock dividend of 15%.\nOption 2: Increase the annual per share dividend by 15% over the prior year.\nOption 3: Maintain the current annual dividend and pay a special dividend of SEK 9 per share.\nOption 4: Repurchase SEK 150 million of shares at a SEK 30 premium to the current share price.",
    "questions": [
     {
      "q": "For KY, Option 1 would most likely:",
      "options": [
       "affect its capital structure.",
       "increase the value of each shareholder's ownership position in the company.",
       "reduce the volatility of its share price."
      ],
      "answer": 2,
      "why": "A stock dividend has no economic effect on the company, so it does not change the capital structure (a cash dividend would).\nThe increase in shares held is offset by a lower price per share, so each shareholder's ownership value is unchanged.\nCorrect: the stock dividend increases the float, which improves liquidity and dampens share price volatility."
     },
     {
      "q": "Compared to Option 2, Option 3 results in a total current year dividend payment per share that is:",
      "options": [
       "lower by SEK 5.70.",
       "higher by SEK 5.70.",
       "higher by SEK 9.00."
      ],
      "answer": 1,
      "why": "Prior DPS = 110 ÷ 5 = SEK 22.00.\nOption 2 = 22.00 × 1.15 = SEK 25.30.\nOption 3 = 22.00 + 9.00 = SEK 31.00.\nOption 3 − Option 2 = 31.00 − 25.30 = +SEK 5.70 (higher).\n'Lower by 5.70' reverses the options; 'higher by 9.00' looks only at the special dividend."
     },
     {
      "q": "Based on Exhibit 1, the safety of KY's dividend in the prior year compared with two years ago:",
      "options": [
       "decreased.",
       "remained the same.",
       "increased."
      ],
      "answer": 0,
      "why": "Dividend coverage = after-tax net income ÷ dividends paid.\nTwo years ago: 270 ÷ 100 = 2.700.\nPrior year: 290 ÷ 110 = 2.636.\nCoverage fell, so the dividend became less safe: decreased."
     },
     {
      "q": "If Option 4 is implemented using surplus cash, which of the following is most likely to decrease? KY's:",
      "options": [
       "debt-to-assets ratio.",
       "total book value.",
       "debt-to-equity ratio."
      ],
      "answer": 1,
      "why": "A repurchase with surplus cash lowers both assets (cash) and shareholders' equity, so total book value falls.\nDebt is unchanged while assets and equity fall, so debt-to-assets and debt-to-equity both rise.\nWhether book value per share rises or falls depends on the price paid versus BVPS."
     }
    ]
   },
   {
    "topic": "Economics",
    "group": "new",
    "body": "Golden Island is a flourishing country because of tourism. The island is governed by a Governor General, a parliamentary body of elected legislators, and a couple of agencies to regulate the island’s economic and social environment. Recently, prospectors in the mountain range bordering the southern coast of the island discovered large deposits of gold, silver, and platinum. The government is concerned that development of these deposits will harm the tourist trade. Elena Trippi has been asked to participate in a series of fact-finding sessions conducted jointly by the island’s ministries of finance and tourism. This blue-ribbon fact-finding committee has been meeting weekly for the past two months.\nTrippi began a recent meeting of the committee by presenting a summary of Golden Island’s current financial and economic conditions. Comparing Golden Island with other developing nations, she presents these conditions in Exhibit 1.\nExhibit 1 Current Financial and Economic Conditions\nRelative to other developing nations, Golden Island\n1. has a relatively low level of capital per worker.\n2. does not have competitive financial markets. The island’s single commercial bank also acts as the central bank of Golden Island.\n3. has a relatively low rate of savings and investment.\n4. has a low level of literacy (about half the population is illiterate).\n5. has well-established property rights.\n6. tightly regulates capital flows into and out of the economy.\nTrippi states that these conditions do not necessarily cause great harm to the tourist industry. But the mining and processing of gold, silver, and platinum will require re-examination of economic policies and circumstances. In particular, Trippi is concerned about the issue of tariffs because Golden Island has relatively high tariffs on capital goods.\nTrippi states:\n\"Golden Island will benefit from continuing to protect domestic capital goods by maintaining its relatively high tariff on non-domestic capital goods. High tariffs have little impact on foreign direct investment (FDI), and they generate revenue for the government.\"\nRishi Chatterjee is Golden Island’s Interim Deputy Minister for Tourism. He states that he is not very knowledgeable about the gold business but believes that developing the island’s gold deposits will affect the relative value of its currency, the sona (Sn). The current exchange rate of the sona against the US dollar is Sn8.50/USD. Chatterjee states that increased FDI will cause the sona to strengthen against world currencies. Tourism will be harmed because goods and services priced in sonas will appear more expensive to the non-domestic visitors who make up the bulk of the tourist trade.\nTrippi shows the committee Exhibit 2, which contains data from the currency exchange markets relative to the sona. On the basis of this data, Trippi states that markets currently anticipate that the sona will weaken, not strengthen, against both the dollar and the British pound.\nExhibit 2 Exchange Rates, Interest Rates, and Inflation Rates\n#   | Current Spot Rates | One-Year Interest Rate (%) | One-Year Inflation Rate (%)\nGolden Island | Sn8.50/USD | 6.5 | 3\nUnited Kingdom | GBP0.62/USD | 4.05 | 1.6\nUnited States | --- | 3.5 | 1.3\nGolden Island’s Minister of Finance and president of the Central Bank, Rajiv Sengupta, addresses the issues of potential inflation as the island transitions to greater growth. He assures the committee that Golden Island’s central bank stands ready to use monetary tools to prevent such inflation",
    "questions": [
     {
      "q": "How many of the current financial and economic conditions listed in Exhibit 1 at least partially explain why Golden Island faces limited economic growth?",
      "options": [
       "Exactly three of the six are limitations on growth.",
       "All six are limitations on growth.",
       "Exactly five of the six are limitations on growth."
      ],
      "answer": 2,
      "why": "A. Incorrect. All of the factors except 'well-established property rights' represent limitations to growth hence, exactly 5 factors are limitations.\nB. Incorrect. All of the factors except 'well-established property rights' represent limitations to growth hence, exactly 5 factors are limitations.\nC. Correct. All of the factors except 'well-established property rights' represent limitations to growth. Hence, exactly five factors are limitations."
     },
     {
      "q": "Trippi’s statement regarding tariffs is best described as:",
      "options": [
       "incorrect, because high tariffs support increases in FDI.",
       "incorrect, because eliminating high tariffs on manufactured goods will increase Golden Island’s physical capital and contribute to higher productivity.",
       "correct."
      ],
      "answer": 1,
      "why": "A. Incorrect. Developing countries could benefit from policies that encourage investment from abroad, such as eliminating high tariffs on foreign imports (especially capital goods). Such free trade policies serve to increase a nation’s capital stock and increase productivity.\nB. Correct. Developing countries could benefit from policies that encourage investment from abroad, such as eliminating high tariffs on foreign imports (especially capital goods). Such free trade policies serve to increase a nation’s capital stock and increase productivity.\nC. Incorrect. Developing countries could benefit from policies that encourage investment from abroad, such as eliminating high tariffs on foreign imports (especially capital goods). Such free trade policies serve to increase a nation’s capital stock and increase productivity."
     },
     {
      "q": "Based on Exhibit 2, the one-year forward exchange rate of the Sn/GBP is closest to:",
      "options": [
       "Sn8.75/GBP.",
       "Sn13.45/GBP.",
       "Sn14.03/GBP."
      ],
      "answer": 2,
      "why": "A. Incorrect because it uses the Sn/USD spot rate and the sona over US interest rates: 1.065/1.035 × 8.50 = 8.7464.\nB. Incorrect because it uses the incorrect ratio of rates. It uses the Sn/USD spot rate and the sona over US interest rates: 1.0405/1.065 × 13.70968 = 13.4522.\nC. Correct. First, find the current Sn/GBP exchange rate. Then, find the one-year forward Sn/GBP rate. Sn/GBP = Sn/USD × USD/GBP = 8.50 × 1.6129 = Sn 13.70968/GBP. Note that 1.6129 is the inverse of 0.62, which is the GBP/USD exchange rate given in Exhibit 2. The forward rate equals the spot rate multiplied by the ratio of one plus the sona one-year rate divided by one plus the pound one-year rate. In this case, the forward rate = 13.70968 × 1.065/1.0405 = 14.03249. An alternative approach is to convert USD1 into SN and GBP and determine what an investment in each of those currencies would be worth in one year at the Golden Island and UK interest rates, respectively. The one-year forward rate will then be the number of Sn required to purchase GBP 1 at that time. MAX17024-IS-Fb"
     },
     {
      "q": "Which of the following will Sengupta most likely use to address the monetary issues relating to greater growth of the island’s economy? The central bank will:",
      "options": [
       "reduce the interest rate on loans to the private sector.",
       "buy domestic securities from the private sector.",
       "sell domestic securities to the private sector."
      ],
      "answer": 2,
      "why": "A. Incorrect. To reduce the money supply, the central bank would raise rates on loans to the private sector.\nB. Incorrect. The central bank will sell domestic securities to the private sector.\nC. Correct. The threat is inflation. To counter such a threat, the central bank will want to reduce the money supply. The central bank will sell domestic securities to the private sector."
     }
    ]
   },
   {
    "topic": "Derivatives",
    "group": "new",
    "body": "Seo-jun Pak is the CEO of the Nakdong Foundation (“the Foundation”), an organization located in Busan, South Korea, whose mission is to support rural healthcare initiatives. The Foundation has a KRW220 billion portfolio consisting entirely of actively managed South Korean equities. The portfolio manager, Ha-eun Kang, has an excellent 14-year track record of beating the KOSPI 200, an index of the 200 largest firms traded on the Korea Exchange. She is permitted to use derivatives to control risks within the portfolio and to synthetically alter positions without trading the underlying securities, many of which are somewhat illiquid.\n\nKang is meeting with Pak to review a forward position in the portfolio and to discuss two other positions she is considering establishing. Kang explains that six months ago she was concerned the Korean stock market was going to experience a substantial downward price movement in the near term, so she entered into a one-year forward contract to sell KRW180 million times the KOSPI 200, which was at 270.00, at a forward price of 265.07.\n\nPak asks, “Why did you agree to sell the index at a forward price that is less than the price it was trading at that time? Stocks are generally expected to rise in value over time.” Kang responds, “Forward agreements are priced using an arbitrage model that considers the current price of the asset, the level of interest rates, any carry benefits received from owning the asset, and any carry costs associated with owning the asset. Carry benefits can include dividends or coupon payments, while carry costs can include storage, insurance, waste, or interest paid to borrow funds to purchase the asset. The forward price is the future value of the current price plus the future value of the carry costs less the future value of the carry benefits.”\n\nPak notes the KOSPI 200 has risen to 278.50 over the last six months and asks, “How much have we lost on the KRW180 million forward position to date?” Kang responds, “I’ll calculate the loss taking into account the current six-month interest rate of 0.68% and the continuously compounded dividend yield on the KOSPI 200, which is 2.20%.”\n\nKang tells Pak she is considering entering into a currency swap because the Foundation has a number of long-term contracts to purchase supplies and equipment for rural clinics and these contracts are priced in US dollars. She explains, “A fixed-for-fixed currency swap would help reduce the risk from fluctuating USD/KRW exchange rates by providing fixed US dollar payments in exchange for fixed Korean won payments. I’m looking at a five-year swap with annual payments. I’ve done some analysis of this swap based on current Korean and US interest rates and present value factors, which I’m providing to you in Exhibit 1.”\n\nExhibit 1 Korean and US Interest Rates and PV Factors\n# T | Korean Treasury Yield | Present Value KRW1 | US Treasury Yield | Present Value USD1\n1 | 1.82 | 0.9821 | 1.17 | 0.9884\n2 | 2.05 | 0.9602 | 1.23 | 0.9758\n3 | 2.18 | 0.9374 | 1.29 | 0.9623\n4 | 2.26 | 0.9145 | 1.37 | 0.9470\n5 | 2.30 | 0.8925 | 1.55 | 0.9260\nKang also brings up a concern about the portfolio’s 100% allocation to Korean equities. She tells Pak, “The KOSPI 200 has been far more volatile over the past 15 years than other major market indexes. Although I have great confidence in my ability to continue to beat the index, it would be useful to diversify our holdings by using a swap to exchange some of the underlying index return for another return, such as the S&P 500. Assuming no dividends, as is the case for these two indexes, equity-for-equity swaps do not need to be priced. The carry arbitrage model shows that the two parties to the swap must agree to swap the index returns without any adjustment because the swap is equivalent to two equity-for-fixed swaps. The fixed interest payments will be the same and will cancel each other out. The fixed interest rates will also be the same as those for a fixed-for-floating interest rate swap of the same maturity entered into at the same time.”",
    "questions": [
     {
      "q": "Is Kang most likely correct in her description of the pricing of forward contracts?",
      "options": [
       "No, she is incorrect regarding inputs to the arbitrage model",
       "No, she is incorrect regarding her examples of carry costs and carry benefits",
       "Yes"
      ],
      "answer": 1,
      "why": "A. Incorrect. Kang is correct in describing the inputs that are used in the arbitrage model to calculate the forward price.\nB. Correct. Kang is incorrect because she has included borrowing costs in the list of potential carry costs of owning the asset. Under the arbitrage model, the future value calculations (of the current price and the carry costs and carry benefits of ownership) use a discount rate that takes into account the cost of borrowing funds to purchase and hold the asset. Including these costs again in the carry costs would be double counting and therefore inaccurate. Kang is correct in her description of carry benefits.\nC. Incorrect. Kang is incorrect in the list of potential carry costs because she has included borrowing costs."
     },
     {
      "q": "Given the information Kang provided in her response to Pak’s question about the equity forward position, the loss on the position is closest to:",
      "options": [
       "KRW0.38 billion.",
       "KRW1.65 billion.",
       "KRW2.03 billion."
      ],
      "answer": 2,
      "why": "A. Incorrect. This is the loss measured as the present value of the difference between the current spot and the new forward price or V 0 = P V ( F 0.5 − S 0.5 ) = 276.39 − 278.50 e 0.0068 × 0.5 = − 2.10 , multiplied by KRW180 million equals a loss on the equity forward position of KRW0.38 billion.\nB. Incorrect. This is the loss that would be measured if no adjustment was made for the half-year maturity of the new (reversing) forward contract or F 0.5 = S 0.5 e ( r c + C C − C B ) = 278.50 e ( 0.0068 + 0 − 0.022 ) = 274.30 and V 0 = P V ( F 0 − F 0.5 ) = 265.07 − 274.30 e 0.0068 = − 9.17 , multiplied by KRW180 million equals a loss on the equity forward position of KRW1.65 billion.\nC. Correct. Given the current spot index value and six-month interest rate, the forward price for a contract initiated today and maturing in six months would be F 0.5 = S 0.5 e ( r c + C C − C B ) T = 278.50 e ( 0.0068 + 0 − 0.022 ) 0.5 = 276.39 . The value of the short (selling) forward position is the present value of the difference between the new forward price (agree to buy to “cancel” exiting contract) and the original forward price (agree to sell at that price) or V 0 = P V ( F 0 − F 0.5 ) = 265.07 − 276.39 e 0.0068 × 0.5 = − 11.28 . The decline in the forward price is multiplied by the contract size of KRW180 million to give a loss on the equity forward position of KRW2.03 billion."
     },
     {
      "q": "Based on the information in Exhibit 1, the interest rate that the Foundation would receive in the proposed currency swap is closest to:",
      "options": [
       "1.32%.",
       "1.54%.",
       "2.29%."
      ],
      "answer": 1,
      "why": "A. Incorrect. This is the geometric average of the US interest rates.\nB. Correct. The Foundation would receive the US fixed interest rate, which is calculated as [ 1 − P V n , U S ( 1 ) ] [ ∑ i = 1 n P V i , U S ( 1 ) ] = [ 1 − 0.9260 ] [ 0.9884 + 0.9758 + 0.9623 + 0.9470 + 0.9260 ] = 0.074 4.7995 = 0.0154 or 1.54%.\nC. Incorrect. This is the Korean fixed rate, which the Foundation would pay, not receive."
     },
     {
      "q": "Is Kang most likely correct in her description of equity-for-equity swaps?",
      "options": [
       "No, she is incorrect regarding the relationship between the pricing of equity swaps and interest rate swaps.",
       "Yes.",
       "No, she is incorrect regarding the need to price the swap."
      ],
      "answer": 1,
      "why": "A. Incorrect. Kang is correct that the fixed rate for an equity-for-fixed swap would be the same as for a fixed-for-floating interest rate swap of the same maturity entered into at the same time.\nB. Correct. Kang is correct in both descriptions. The carry arbitrage model shows equity-for-equity swaps do not need to be priced because they can be replicated by an equity-for-fixed swap and a fixed-for-equity swap. The fixed rates will be the same for both swaps and will cancel out. Further, the fixed rate will be the same as it would be for a fixed-for-floating interest rate swap with the same maturity entered into at the same time.\nC. Incorrect. Kang is correct that equity-for-equity swaps do not need to be priced."
     }
    ]
   },
   {
    "topic": "Financial Statement Analysis",
    "group": "redo",
    "body": "Henrik Vos is an analyst at Northgate Asset Management, which runs a range of investment funds. He analyses the recent performance of Aurelia Drinks AG (AD), a multinational producer of carbonated soft drinks that recently entered the energy drinks market. As a core holding, AD's strong position in Europe gives Northgate geographic diversification, because its funds are mostly invested in North America.\n\nVos reviews AD's balance sheets for the most recent and previous years and comments: \"AD is continuing to follow a growth-by-acquisition strategy.\" He also adjusts AD's most recent income statement to find the company's net income under the direct control of management, using the information (in EUR millions) in Exhibit 1.\n\nExhibit 1\n# | Most Recent Year\nIncome from operations | 1,920\nIncome from investments in associates | 236\nInterest expense | (731)\nTaxes | (271)\nNet income | 1,154\nOf which: |  \nNet income attributable to non-controlling interests | 102\nNet income attributable to shareholders | 1,052\n\nVos and his team assess the quality of AD's overall performance. The team's view is positive, but Vos disagrees for the following reasons:\nReason 1: Balance-sheet-based accruals are trending down relative to total assets.\nReason 2: Income from operations is consistently higher than cash generated from operations.\nReason 3: The cash-flow-based accruals ratio has fluctuated very little over the last five years.\n\nVos and his team note from AD's annual report that the company has four segments. They analyse the segments using the information (in EUR millions) in Exhibit 2.\n\nExhibit 2\n# Segment | Sales (recent) | EBIT (recent) | Assets (recent) | Sales (previous)\nCarbonated drinks – Europe | 3,010 | 1,021 | 13,120 | 2,905\nCarbonated drinks – North America | 2,040 | 586 | 6,240 | 1,850\nCarbonated drinks – Asia Pacific | 590 | 181 | 2,880 | 560\nEnergy drinks | 318 | 19 | 1,330 | 231\nTotal | 5,958 | 1,807 | 23,570 | 5,546\n\nAfter the segment analysis, the team concludes:\nStatement 1: The sales growth rate of carbonated drinks – North America is stronger than that of energy drinks.\nStatement 2: The EBIT margin of carbonated drinks – Europe is higher than that of carbonated drinks – North America.\nStatement 3: The asset turnover of carbonated drinks – Europe is better than that of AD overall.",
    "questions": [
     {
      "q": "Which balance sheet line item is most appropriate to justify Vos's comment about AD's growth strategy?",
      "options": [
       "Long-term debt",
       "Property, plant and equipment",
       "Goodwill"
      ],
      "answer": 2,
      "why": "Goodwill arises only when a company acquires another business, so a rising goodwill balance is the hallmark of growth by acquisition.\nLong-term debt and PP&E may also rise after acquisitions, but they can change for many other reasons (capital structure changes, organic capital spending)."
     },
     {
      "q": "After Vos's adjustment, AD's net income (in EUR millions) under management's direct control is:",
      "options": [
       "918.",
       "816.",
       "1,052."
      ],
      "answer": 0,
      "why": "Management controls the subsidiaries in full (including the non-controlling interest share) but not the associates.\nStart from total net income: 1,154.\nRemove income from associates: 1,154 − 236 = 918.\n816 = 1,052 − 236 wrongly also removes the non-controlling interest; 1,052 still includes the associates and excludes the NCI."
     },
     {
      "q": "Which reason best supports Vos's disagreement with his team about AD's overall performance?",
      "options": [
       "Reason 1",
       "Reason 2",
       "Reason 3"
      ],
      "answer": 1,
      "why": "Downward-trending balance-sheet accruals give less room for manipulation: not a concern.\nCorrect: operating income persistently above operating cash flow means earnings are not backed by cash, a warning sign of low earnings quality.\nA steady, low-fluctuation accruals ratio is not a concern; an erratic or rising one would be."
     },
     {
      "q": "With respect to the segment analysis, which statement is correct?",
      "options": [
       "Statement 1",
       "Statement 2",
       "Statement 3"
      ],
      "answer": 1,
      "why": "Statement 1: growth North America = 2,040/1,850 − 1 = 10.3%; energy drinks = 318/231 − 1 = 37.7%. North America is weaker: false.\nStatement 2: EBIT margin Europe = 1,021/3,010 = 33.9%; North America = 586/2,040 = 28.7%. Europe is higher: true.\nStatement 3: asset turnover Europe = 3,010/13,120 = 0.229; AD overall = 5,958/23,570 = 0.253. Europe is lower: false."
     }
    ]
   },
   {
    "topic": "Fixed Income",
    "group": "new",
    "body": "Anna Lebedeva is a fixed-income portfolio manager. Paulina Kowalski, a junior analyst, and Lebedeva meet to review several positions in Lebedeva’s portfolio.\n\nLebedeva begins the meeting by discussing credit rating migration. Kowalski asks Lebedeva about the typical impact of credit rating migration on the expected return on a bond. Lebedeva asks Kowalski to estimate the expected return over the next year on a bond issued by Entre Corp. The BBB rated bond has a yield to maturity of 5.50% and a modified duration of 7.54. Kowalski calculates the expected return on the bond over the next year given the partial credit transition and credit spread data in Exhibit 1. She assumes that market spreads and yields will remain stable over the year.\n\nExhibit 1 One-Year Transition Matrix for BBB Rated Bonds and Credit Spreads\n# Rating | AAA | AA | A | BBB | BB | B | CCC, CC, C\nProbability (%) | 0.02 | 0.30 | 4.80 | 85.73 | 6.95 | 1.75 | 0.45\nCredit spread | 0.60% | 0.90% | 1.10% | 1.50% | 3.40% | 6.50% | 9.50%\n\nLebedeva next asks Kowalski to analyze a three-year bond, issued by VraiRive S.A., using an arbitrage-free framework. The bond’s coupon rate is 5%, with interest paid annually and a par value of 100. In her analysis, she makes the following three assumptions:\nThe annual interest rate volatility is 10%.\nThe recovery rate is one-third of the exposure each period.\nThe annual probability of default each year is 2.00%.\n\nSelected information on benchmark government bonds for the VraiRive bond is presented in Exhibit 2, and the relevant binomial interest rate tree is presented in Exhibit 3.\n\nExhibit 2 Par Curve Rates for Annual Payment Benchmark Government Bonds\n# Maturity | Coupon Rate | Price | Discount Factor | Spot Rate | Forward Rate\n1 | 3.00% | 100 | 0.970874 | 3.0000% | 3.0000%\n2 | 4.20% | 100 | 0.920560 | 4.2255% | 5.4656%\n3 | 5.00% | 100 | 0.862314 | 5.0618% | 6.7547%\n\nExhibit 3 One-Year Binomial Interest Rate Tree for 10% Volatility (risk-neutral probabilities in parentheses)\nDate 0 rate: 3.00%. Date 1 rates (top to bottom): 6.0139%, 4.9238%. Date 2 rates (top to bottom): 8.1823%, 6.6991%, 5.4848%.\n\nKowalski estimates the value of the VraiRive bond assuming no default (VND) as well as the fair value of the bond. She then estimates the bond’s yield to maturity and the bond’s credit spread over the benchmark in Exhibit 2. Kowalski asks Lebedeva, “What might cause the bond’s credit spread to decrease?”\n\nLebedeva and Kowalski next discuss the drivers of the term structure of credit spreads. Kowalski tells Lebedeva the following:\nStatement 1: The credit term structure for lower-rated securities is often steeper, and credit spreads widen with expectations of strong economic growth.\nStatement 2: The credit term structure for the most highly rated securities tends to be either flat or slightly upward sloping.\n\nNext, Kowalski analyzes the outstanding bonds of DLL Corporation, a high-quality issuer with a strong, competitive position. Her focus is to determine the rationale for a positive-sloped credit spread term structure.\n\nLebedeva ends the meeting by asking Kowalski to recommend a credit analysis approach for a securitized asset-backed security (ABS) held in the portfolio. This non-static asset pool is made up of many medium-term auto loans that are homogeneous, and each loan is small relative to the total value of the pool.",
    "questions": [
     {
      "q": "The most appropriate response to Kowalski’s question regarding credit rating migration is that it has:",
      "options": [
       "no impact.",
       "a positive impact.",
       "a negative impact."
      ],
      "answer": 2,
      "why": "C is correct. Credit spread migration typically reduces the expected return: rating-change probabilities are skewed toward downgrade, and the spread increase on downgrades is much larger than the spread decrease on upgrades."
     },
     {
      "q": "Based on Exhibit 1, the one-year expected return on the Entre Corp. bond is closest to:",
      "options": [
       "3.73%.",
       "5.50%.",
       "7.27%."
      ],
      "answer": 0,
      "why": "A is correct. Expected return = YTM + expected % price change from migration. Each transition: −7.54 × (new spread − 1.50%) × probability. Sum = −1.76715%. Expected return = 5.50% − 1.77% = 3.73%."
     },
     {
      "q": "Based on Kowalski’s assumptions and Exhibit 2 and Exhibit 3, the credit spread on the VraiRive bond is closest to:",
      "options": [
       "0.6949%.",
       "0.9388%.",
       "1.4082%."
      ],
      "answer": 2,
      "why": "C is correct. Step 1: VND from the tree (discount at tree forward rates, risk-neutral probs 0.5) = 100.0000. Step 2: CVA = sum of PV(expected exposure × LGD fraction × POD): exposures 103.0000, 103.3535, 105.0000; LGD = 2/3 of exposure; POD 2%, 1.96%, 1.9208%; discounted at benchmark spot discount factors 0.970874, 0.920560, 0.862314 → 1.3333 + 1.2432 + 1.1594 = 3.7360. Fair value = 100 − 3.7360 = 96.2640. Step 3: YTM from 96.2640 = 6.4082%; spread = 6.4082% − 5.0000% = 1.4082%."
     },
     {
      "q": "Suppose instead that the ABS were backed by a static book of many small, homogeneous credit card receivables. Kowalski should then most likely recommend a:",
      "options": [
       "portfolio-based approach.",
       "statistics-based approach.",
       "loan-by-loan approach."
      ],
      "answer": 1,
      "why": "A. Incorrect. A portfolio-based approach suits medium-term, homogeneous and granular pools that change over time (such as the auto loans in the vignette).\nB. Correct. A static book of short-term, homogeneous and granular receivables suits a statistics-based approach built on historical default and loss data.\nC. Incorrect. A loan-by-loan approach suits pools of a small number of large, heterogeneous (non-granular) loans."
     }
    ]
   },
   {
    "topic": "Quantitative Methods",
    "group": "new",
    "body": "Housing industry analyst Elaine Smith has been assigned the task of forecasting housing foreclosures. Specifically, Smith is asked to forecast the percentage of outstanding mortgages that will be foreclosed upon in the coming quarter. Smith decides to employ multiple linear regression and time series analysis.\nBesides constructing a forecast for the foreclosure percentage, Smith wants to address the following two questions:\nResearch Question 1: Is the foreclosure percentage significantly affected by short-term interest rates?\nResearch Question 2: Is the foreclosure percentage significantly affected by government intervention policies?\nSmith contends that adjustable rate mortgages often are used by higher risk borrowers and that their homes are at higher risk of foreclosure. Therefore, Smith decides to use short-term interest rates as one of the independent variables to test Research Question 1.\nTo measure the effects of government intervention in Research Question 2, Smith uses a dummy variable that equals 1 whenever the Federal government intervened with a fiscal policy stimulus package that exceeded 2% of the annual Gross Domestic Product. Smith sets the dummy variable equal to 1 for four quarters starting with the quarter in which the policy is enacted and extending through the following 3 quarters. Otherwise, the dummy variable equals zero.\nSmith uses quarterly data over the past 5 years to derive her regression. Smith's regression equation is provided in Exhibit 1:\nExhibit 1: Foreclosure Share Regression Equation\nforeclosure share = b0 + b1(dINT) + b2(STIM) + b3(CRISIS) + e\nwhere: Foreclosure share = the percentage of all outstanding mortgages foreclosed upon during the quarter; dINT = the quarterly change in the 1-year Treasury bill rate (e.g., dINT = 2 for a two percentage point increase in interest rates); STIM = 1 for quarters in which a Federal fiscal stimulus package was in place; CRISIS = 1 for quarters in which the median house price is one standard deviation below its 5-year moving average.\nThe results of Smith's regression are provided in Exhibit 2:\nExhibit 2: Foreclosure Share Regression Results\n# Variable | Coefficient | t-statistic\nIntercept | 3.00 | 2.40\ndINT | 1.00 | 2.22\nSTIM | -2.50 | -2.10\nCRISIS | 4.00 | 2.35\nThe ANOVA results from Smith's regression are provided in Exhibit 3:\nExhibit 3: Foreclosure Share Regression Equation ANOVA Table\n# Source | Degrees of Freedom | Sum of Squares | Mean Sum of Squares\nRegression | 3 | 15 | 5.0000\nError | 16 | 5 | 0.3125\nTotal | 19 | 20\nSmith expresses the following concerns about the test statistics derived in her regression:\nConcern 1: If my independent variables are correlated with each other, my F-statistic will be overestimated.\nConcern 2: If my regression errors exhibit conditional heteroskedasticity, my t-statistics will be underestimated.\nBefore completing her analysis, Smith runs a regression of the changes in foreclosure share on its lagged value. The following regression results and autocorrelations were derived using quarterly data over the past 5 years (Exhibit 4 and Exhibit 5, respectively):\nExhibit 4: Lagged Regression Results\nd foreclosure share_t = 0.05 + 0.25 (d foreclosure share_t-1)\nExhibit 5: Autocorrelation Analysis\n# Lag | Autocorrelation | t-statistic\n1 | 0.05 | 0.22\n2 | -0.35 | -1.53\n3 | 0.25 | 1.09\n4 | 0.10 | 0.44\nExhibit 6 provides critical values for the Student's t-Distribution\nExhibit 6: Critical Values for Student's t-Distribution. Area in Both Tails Combined\nDegrees of Freedom | 20% | 10% | 5% | 1%\n16 | 1.337 | 1.746 | 2.120 | 2.921\n17 | 1.333 | 1.740 | 2.110 | 2.898\n18 | 1.330 | 1.734 | 2.101 | 2.878\n19 | 1.328 | 1.729 | 2.093 | 2.861\n20 | 1.325 | 1.725 | 2.086 | 2.845",
    "questions": [
     {
      "q": "Based on her regression results in Exhibit 2, using a 5% level of significance, Smith should conclude that:",
      "options": [
       "stimulus packages do not have significant effects on foreclosure percentages, but housing crises do have significant effects on foreclosure percentages.",
       "both stimulus packages and housing crises have significant effects on foreclosure percentages.",
       "stimulus packages have significant effects on foreclosure percentages, but housing crises do not have significant effects on foreclosure percentages."
      ],
      "answer": 0,
      "why": "The t-statistic is -2.10 for STIM and 2.35 for CRISIS. The critical t at the 5% level (16 degrees of freedom) is 2.12. STIM is not significant (|-2.10| < 2.12); CRISIS is significant (2.35 > 2.12)."
     },
     {
      "q": "The standard error of estimate for Smith's regression is closest to:",
      "options": [
       "0.16.",
       "0.56.",
       "0.53."
      ],
      "answer": 1,
      "why": "SEE = sqrt(SSE/(n - k - 1)) = sqrt(5/16) = 0.56. The SEE equals the standard deviation of the regression residuals; a low SEE implies a high R-squared."
     },
     {
      "q": "The most recent change in foreclosure share was +1 percent. Smith decides to base her analysis on the data and methods provided in Exhibit 4 and Exhibit 5, and determines that the two-step ahead forecast for the change in foreclosure share (in percent) is 0.125, and that the mean reverting value for the change in foreclosure share (in percent) is 0.071. Is Smith correct?",
      "options": [
       "Smith is correct on both the forecast and the mean reverting level.",
       "Smith is correct on the two-step ahead forecast for change in foreclosure share only.",
       "Smith is correct on the mean-reverting level for forecast of change in foreclosure share only."
      ],
      "answer": 1,
      "why": "One-step: 0.05 + 0.25(1) = 0.30. Two-step: 0.05 + 0.25(0.30) = 0.125. Mean-reverting level = b0/(1 - b1) = 0.05/(1 - 0.25) = 0.067, not 0.071."
     },
     {
      "q": "Assume for this question that Smith finds that the foreclosure share series does NOT have a unit root. Under these conditions, she can most reliably regress foreclosure share against the change in interest rates (dINT) if:",
      "options": [
       "dINT has a unit root and is cointegrated with foreclosure share.",
       "dINT has a unit root and is not cointegrated with foreclosure share.",
       "dINT does not have a unit root."
      ],
      "answer": 2,
      "why": "A. Incorrect. Cointegration needs both series to have a unit root; here the foreclosure share series does not, so one series has a unit root and the other does not, and the regression is not reliable.\nB. Incorrect. One series with a unit root and one without gives unreliable results.\nC. Correct. If neither series has a unit root, both are covariance stationary and linear regression can be used."
     }
    ]
   },
   {
    "topic": "Equity Valuation",
    "group": "redo",
    "body": "The Brookline Club is a small US investment club formed by a group of friends who recently graduated from university. At today's regular bimonthly meeting, two members present new companies for the club to analyse. The club uses a combination of comparables and forecasted fundamentals to make its investment decisions.\n\nNadia Ferro has done preliminary research on Ostler Ltd. (Ostler), a small Ohio-based manufacturer of products, supplies and food for pets. Ferro starts by showing the club a recent news release from Ostler's website (Exhibit 1).\n\nExhibit 1 Ostler Ltd. Press Release: Core EPS Announcement\nWe are pleased to report an increase in Core EPS from $1.09 to $1.44 for the year ended 31 December 2017. The company continues its growth-by-acquisition strategy, acquiring smaller specialty companies in the pet supplies industry. Acquisitions over the past two years have increased our asset base by 22%, and we expect similar opportunities for growth in the next few years.\n# | 31 December 2017 | 31 December 2016\nEPS | $1.12 | $0.95\nCore EPS* | $1.44 | $1.09\n* Core EPS is a non-GAAP measure that excludes acquisition charges of $0.20 and $0.14 in 2017 and 2016, respectively, and $0.12 in 2017 related to the settlement of a lawsuit.\n\nFerro notes that Ostler trades at $12.82. She reminds the club that the company was sued for making pet jackets with the logos of local professional sports teams without permission and settled quickly out of court. Ferro believes the company will not incur such legal costs again, but because its strategy is to grow by acquisition, acquisition costs will continue and are relevant to any analysis. She disagrees with excluding those costs from core EPS and calculates Ostler's trailing P/E on the basis of her beliefs.\n\nUsing NYSE data, Ferro finds the average P/E for the Consumer Goods Index (15.2) and for its Processed and Packaged Goods sector (31.4). She then screens that sector for other small processed and packaged goods producers to build her own index. Partial results are shown in Exhibit 2.\n\nExhibit 2 Partial Results of Market Screen: Ferro's Index\n# Company | Market cap (US$ millions) | P/E\nHale Inc. | 6.40 | 13.4\nRivera Industries Inc. | 24.80 | 11.9\nBooth Brothers Co. | 512.30 | 5.6\nCorbin Foods Ltd. | 735.60 | 20.4\nLinden Delights Inc. | 548.90 | 17.6\n\nFerro observes that Corbin Foods must have both a higher-than-average growth rate and higher-than-average risk to justify its high P/E, and suggests the club look at Corbin at its next meeting.\n\nThe members discuss the wide range of market capitalisations and P/Es in Ferro's index and whether the arithmetic mean is the best value to use. Ferro decides to calculate the weighted harmonic mean of the index and says:\n\n\"The harmonic mean can be used to mitigate the effects of both large and small outliers.\"",
    "questions": [
     {
      "q": "Based on Exhibit 1 and Ferro's beliefs about recurring costs, her trailing P/E for Ostler is closest to:",
      "options": [
       "8.90.",
       "10.34.",
       "11.45."
      ],
      "answer": 1,
      "why": "Acquisition charges recur, so they stay in EPS; the lawsuit cost does not recur, so it is added back.\nRecurring EPS 2017 = 1.12 + 0.12 = $1.24.\nTrailing P/E = 12.82 ÷ 1.24 = 10.34.\n8.90 uses the company's core EPS (1.44), which wrongly excludes acquisition charges; 11.45 uses GAAP EPS (1.12), which keeps the non-recurring lawsuit cost."
     },
     {
      "q": "Ferro's observation about Corbin Foods' high P/E is best described as:",
      "options": [
       "correct.",
       "incorrect with respect to the growth rate.",
       "incorrect with respect to the risk."
      ],
      "answer": 2,
      "why": "Higher expected growth justifies a higher P/E: she is right on growth.\nHigher risk raises the required return and justifies a LOWER P/E: she is wrong on risk."
     },
     {
      "q": "The weighted harmonic mean of the P/Es in Ferro's index (Exhibit 2) is closest to:",
      "options": [
       "11.3.",
       "13.8.",
       "15.3."
      ],
      "answer": 0,
      "why": "Weighted harmonic mean = total market cap ÷ Σ(market cap ÷ P/E).\nTotal cap = 6.40 + 24.80 + 512.30 + 735.60 + 548.90 = 1,828.0.\nΣ(cap ÷ P/E) = 0.48 + 2.08 + 91.48 + 36.06 + 31.19 = 161.29.\n1,828.0 ÷ 161.29 = 11.3.\n13.8 is the simple arithmetic mean; 15.3 is the market-cap weighted arithmetic mean."
     },
     {
      "q": "Ferro's statement supporting the use of the harmonic mean is best described as:",
      "options": [
       "correct.",
       "incorrect with respect to large outliers.",
       "incorrect with respect to small outliers."
      ],
      "answer": 2,
      "why": "The harmonic mean mitigates the effect of LARGE outliers.\nIt can aggravate the effect of SMALL outliers (although these are bounded by zero), so the statement is wrong about small outliers."
     }
    ]
   },
   {
    "topic": "Portfolio Management",
    "group": "new",
    "body": "Hui Cheung, a portfolio manager, asks her assistant, Ronald Lam, to review the macroeconomic factor model currently in use and to consider a fundamental factor model as an alternative.\n\nThe current macroeconomic factor model has four factors:\n\nRi = ai + bi1FGDP + bi2FCAP + bi3FCON + bi4FUNEM + εi,\nWhere FGDP, FCAP, FCON, and FUNEM represent unanticipated changes in four factors: gross domestic product, manufacturing capacity utilization, consumer spending, and the rate of unemployment, respectively. Lam assumes the error term is equal to zero when using this model.\n\nLam estimates the current model using historical monthly returns for three portfolios for the most recent five years. The inputs used in and estimates derived from the macroeconomic factor model are presented in Exhibit 1. The US Treasury bond rate of 2.5% is used as a proxy for the risk-free rate of interest.\n\nExhibit 1\nInputs for and Estimates from the Current Macroeconomic Model\n#   | Factor Sensitivities and Intercept Coefficients | Factor Surprise (%)\nFactor | Portfolio 1 | Portfolio 2 | Portfolio 3 | Benchmark\nIntercept (%) | 2.58 | 3.20 | 4.33\nFGDP | 0.75 | 1.00 | 0.24 | 0.50 | 0.8\nFCAP | −0.23 | 0.00 | −1.45 | −1.00 | 0.5\nFCON | 1.23 | 0.00 | 0.50 | 1.10 | 2.5\nFUNEM | −0.14 | 0.00 | −0.05 | −0.10 | 1.0\nAnnual Returns, Most Recent Year |  \nReturn (%) | 6.00 | 4.00 | 5.00 | 4.50\nLam uses the macroeconomic model to calculate the tracking error and the mean active return for each portfolio. He presents these statistics in Exhibit 2.\n\nExhibit 2\nMacroeconomic Factor Model Tracking Error and Mean Active Return\n# Portfolio | Tracking Error | Mean Active Return\nPortfolio 1 | 1.50% | 1.50%\nPortfolio 2 | 1.30% | −0.50%\nPortfolio 3 | 1.00% | 0.50%\nLam considers a fundamental factor model with four factors:\n\nRi = aj + bj1FLIQ + bj2FLEV + bj3FEGR + bj4FVAR + εj,\nwhere FLIQ, FLEV, FEGR, and FVAR represent liquidity, financial leverage, earnings growth, and the variability of revenues, respectively.\n\nLam and Cheung discuss similarities and differences between macroeconomic factor models and fundamental factor models, and Lam offers a comparison of those models to statistical factor models. Lam makes the following statements.\n\nStatement 1:\nThe factor sensitivities are generally determined first in fundamental factor models, whereas the factor sensitivities are estimated last in macroeconomic factor models.\n\nStatement 2:\nThe factors in fundamental factor models are based on attributes of stocks or companies, whereas the factors in macroeconomic factor models are based on surprises in economic variables.\n\nLam also tells Cheung:\n\nAn advantage of statistical factor models is that they make minimal assumptions, and therefore, statistical factor model estimation lends itself to easier interpretation than macroeconomic and fundamental factor models.\n\nLam tells Cheung that multifactor models can be useful in active portfolio management, but not in passive management. Cheung disagrees; she tells Lam that multifactor models can be useful in both active and passive management.",
    "questions": [
     {
      "q": "Assuming that the information in Exhibit 1 reflects the analyst's view, the expected return for Portfolio 1 is closest to:",
      "options": [
       "2.58%.",
       "3.42%.",
       "6.00%."
      ],
      "answer": 0,
      "why": "A is correct. When using a macroeconomic factor model, the expected return is the intercept (when all model factors take on a value of zero). The intercept coefficient for Portfolio 1 in Exhibit 1 is 2.58."
     },
     {
      "q": "Based on Exhibit 2, which portfolio has the best information ratio?",
      "options": [
       "Portfolio 1",
       "Portfolio 2",
       "Portfolio 3"
      ],
      "answer": 0,
      "why": "A is correct. Portfolio 1 has the highest information ratio, 1.0, and thus has the best mean active return per unit of active risk:\n\nIR = \n = \n = 1.00\nThis information ratio exceeds that of Portfolio 2 (−0.38) or Portfolio 3 (0.50)."
     },
     {
      "q": "Which of Lam’s statements regarding macroeconomic factor models and fundamental factor models is correct?",
      "options": [
       "Only Statement 1",
       "Only Statement 2",
       "Both Statements 1 and 2"
      ],
      "answer": 2,
      "why": "C is correct. In a macroeconomic factor model, the factors are surprises in macroeconomic variables that significantly explain returns. Factor sensitivities are generally specified first in fundamental factor models, whereas factor sensitivities are estimated last in macroeconomic factor models."
     },
     {
      "q": "Whose statement regarding the use of multifactor models in active and passive portfolio management is correct?",
      "options": [
       "Both Lam and Cheung",
       "Lam only",
       "Cheung only"
      ],
      "answer": 2,
      "why": "C is correct. Analysts can use multifactor models in passively managed portfolios to replicate an index fund’s factor exposures."
     }
    ]
   }
  ]
 }
];
