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
       "LASSO",
       "simple linear regression",
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
       "decreases, so the conversion price rises",
       "stays the same, but the straight value rises",
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
       "correct, because each node gives the most likely rate at that date",
       "correct, because the tree is calibrated to expected future rates"
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
 }
];
