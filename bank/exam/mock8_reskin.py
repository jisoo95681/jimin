# Re-skinned vignettes for Mock 8 (names AND numbers changed from the originals the user missed in Mock 7).
def V(topic,body,qs): return dict(topic=topic,group="redo",body=body.strip(),questions=qs)
def Q(q,opts,ans,why): return dict(q=q,options=opts,answer=ans,why=why)
RESKIN={}
RESKIN['pm']=V("Portfolio Management","""Marta Oyelaran, a portfolio manager, asks her assistant, Pieter Verhoeven, to review the macroeconomic factor model currently in use and to consider a fundamental factor model as an alternative.

The current macroeconomic factor model has four factors:

Ri = ai + bi1FGDP + bi2FCAP + bi3FCON + bi4FUNEM + εi,
Where FGDP, FCAP, FCON, and FUNEM represent unanticipated changes in four factors: gross domestic product, manufacturing capacity utilization, consumer spending, and the rate of unemployment, respectively. Verhoeven assumes the error term is equal to zero when using this model.

Verhoeven estimates the current model using historical monthly returns for three portfolios for the most recent five years. The inputs used in and estimates derived from the macroeconomic factor model are presented in Exhibit 1. The US Treasury bond rate of 3.1% is used as a proxy for the risk-free rate of interest.

Exhibit 1
Inputs for and Estimates from the Current Macroeconomic Model
# Factor | Portfolio 1 | Portfolio 2 | Portfolio 3 | Benchmark | Factor surprise (%)
Intercept (%) | 2.14 | 2.87 | 3.65 | --- | ---
FGDP | 0.62 | 0.90 | 0.31 | 0.45 | 0.6
FCAP | −0.31 | 0.00 | −1.10 | −0.75 | 0.4
FCON | 1.05 | 0.00 | 0.42 | 0.95 | 2.0
FUNEM | −0.18 | 0.00 | −0.07 | −0.12 | 0.8
Annual returns, most recent year |  
Return (%) | 5.20 | 3.60 | 4.70 | 4.10 | ---

Verhoeven uses the macroeconomic model to calculate the tracking error and the mean active return for each portfolio. He presents these statistics in Exhibit 2.

Exhibit 2
Macroeconomic Factor Model Tracking Error and Mean Active Return
# Portfolio | Tracking error | Mean active return
Portfolio 1 | 1.20% | 0.96%
Portfolio 2 | 1.60% | −0.40%
Portfolio 3 | 0.80% | 0.52%

Verhoeven considers a fundamental factor model with four factors:

Ri = aj + bj1FLIQ + bj2FLEV + bj3FEGR + bj4FVAR + εj,
where FLIQ, FLEV, FEGR, and FVAR represent liquidity, financial leverage, earnings growth, and the variability of revenues, respectively.

Verhoeven and Oyelaran discuss similarities and differences between macroeconomic factor models and fundamental factor models. Verhoeven makes the following statements.

Statement 1:
The factor sensitivities are generally determined first in fundamental factor models, whereas the factor sensitivities are estimated last in macroeconomic factor models.

Statement 2:
The factors in fundamental factor models are based on attributes of stocks or companies, whereas the factors in macroeconomic factor models are based on surprises in economic variables.

Verhoeven tells Oyelaran that multifactor models can be useful in active portfolio management, but not in passive management. Oyelaran disagrees; she tells Verhoeven that multifactor models can be useful in both active and passive management.""",[
 Q("Assuming that the information in Exhibit 1 reflects the analyst's view, the expected return for Portfolio 1 is closest to:",["2.14%.","4.34%.","5.20%."],0,
   "A. Correct. In a macroeconomic factor model the expected return is the intercept, i.e. the return when every factor surprise is zero. The intercept for Portfolio 1 in Exhibit 1 is 2.14%.\nB. Incorrect. 4.34% is the return GIVEN the factor surprises: 2.14 + (0.62 × 0.6) + (−0.31 × 0.4) + (1.05 × 2.0) + (−0.18 × 0.8) = 2.14 + 2.204 = 4.34%. That is not the expected return.\nC. Incorrect. 5.20% is the actual return of Portfolio 1 in the most recent year, not the model's expected return."),
 Q("Based on Exhibit 2, which portfolio has the best information ratio?",["Portfolio 1","Portfolio 2","Portfolio 3"],0,
   "A. Correct. Information ratio = mean active return ÷ tracking error. Portfolio 1: 0.96 ÷ 1.20 = 0.80.\nB. Incorrect. Portfolio 2: −0.40 ÷ 1.60 = −0.25.\nC. Incorrect. Portfolio 3: 0.52 ÷ 0.80 = 0.65, below Portfolio 1."),
 Q("Which of Verhoeven's statements regarding macroeconomic factor models and fundamental factor models is correct?",["Only Statement 1","Only Statement 2","Both Statements 1 and 2"],2,
   "C. Correct. In a macroeconomic factor model the factors are surprises in macroeconomic variables, whereas fundamental factors are attributes of stocks or companies (Statement 2 is correct). Factor sensitivities are generally specified first in fundamental factor models, while they are estimated last in macroeconomic factor models (Statement 1 is correct).\nA. Incorrect. Statement 2 is also correct.\nB. Incorrect. Statement 1 is also correct."),
 Q("Whose statement regarding the use of multifactor models in active and passive portfolio management is correct?",["Verhoeven only","Oyelaran only","Both Verhoeven and Oyelaran"],1,
   "B. Correct. Multifactor models are useful in active management and also in passive management, for example to replicate an index fund's factor exposures. Only Oyelaran's statement is correct.\nA. Incorrect. Verhoeven wrongly says the models are not useful in passive management.\nC. Incorrect. Verhoeven's statement is not correct.")])
RESKIN['fi']=V("Fixed Income","""Sofia Marangoni is a fixed-income portfolio manager. Tomasz Brandt, a junior analyst, and Marangoni meet to review several positions in Marangoni's portfolio.

Marangoni begins the meeting by discussing credit rating migration. Marangoni asks Brandt to estimate the expected return over the next year on a bond issued by Veldor Group. The BBB rated bond has a yield to maturity of 4.80% and a modified duration of 6.92. Brandt calculates the expected return on the bond over the next year given the partial credit transition and credit spread data in Exhibit 1. Brandt assumes that market spreads and yields will remain stable over the year.

Exhibit 1
One-Year Transition Matrix for BBB Rated Bonds and Credit Spreads
# Rating | AAA | AA | A | BBB | BB | B | CCC, CC, C
Probability (%) | 0.03 | 0.45 | 5.60 | 84.87 | 6.80 | 1.90 | 0.35
Credit spread | 0.50% | 0.80% | 1.00% | 1.35% | 3.10% | 6.00% | 9.00%

Marangoni next asks Brandt to analyze a three-year bond, issued by Norvalle S.A., using an arbitrage-free framework. The bond's coupon rate is 4%, with interest paid annually and a par value of 100. In the analysis, Brandt makes the following three assumptions:
The annual interest rate volatility is 15%.
The recovery rate is one-quarter of the exposure each period.
The annual probability of default each year is 1.50%.

Selected information on benchmark government bonds for the Norvalle bond is presented in Exhibit 2, and the relevant binomial interest rate tree is presented in Exhibit 3.

Exhibit 2
Par Curve Rates for Annual Payment Benchmark Government Bonds
# Maturity | Coupon rate | Price | Discount factor | Spot rate | Forward rate
1 | 2.50% | 100 | 0.975610 | 2.5000% | 2.5000%
2 | 3.30% | 100 | 0.936888 | 3.3133% | 4.1331%
3 | 4.00% | 100 | 0.887981 | 4.0396% | 5.5076%

Exhibit 3
One-Year Binomial Interest Rate Tree for 15% Volatility (risk-neutral probability of 50% on each branch)
# Date | 0 | 1 (top) | 1 (bottom) | 2 (top) | 2 (middle) | 2 (bottom)
Rate | 2.5000% | 4.7526% | 3.5208% | 7.2932% | 5.4029% | 4.0026%

Brandt estimates the value of the Norvalle bond assuming no default (VND) as well as the fair value of the bond. Brandt then estimates the bond's yield to maturity and the bond's credit spread over the benchmark in Exhibit 2. Brandt asks Marangoni, "What might cause the bond's credit spread to decrease?"

Marangoni and Brandt next discuss the drivers of the term structure of credit spreads. Brandt tells Marangoni the following:

Statement 1:
The credit term structure for lower-rated securities is often steeper, and credit spreads widen with expectations of strong economic growth.

Statement 2:
The credit term structure for the most highly rated securities tends to be either flat or slightly upward sloping.""",[
 Q("Based on Exhibit 1, the one-year expected return on the Veldor Group bond is closest to:",["3.33%.","4.80%.","6.27%."],0,
   "A. Correct. Expected return = YTM + expected percentage price change from migration. For each rating the price change = −modified duration × (new spread − 1.35%) × probability:\nAAA: −6.92 × (0.50% − 1.35%) × 0.03% = +0.0018%\nAA: −6.92 × (0.80% − 1.35%) × 0.45% = +0.0171%\nA: −6.92 × (1.00% − 1.35%) × 5.60% = +0.1356%\nBBB: no change = 0\nBB: −6.92 × (3.10% − 1.35%) × 6.80% = −0.8235%\nB: −6.92 × (6.00% − 1.35%) × 1.90% = −0.6114%\nCCC, CC, C: −6.92 × (9.00% − 1.35%) × 0.35% = −0.1853%\nSum = −1.4656%. Expected return = 4.80% − 1.47% = 3.33%.\nB. Incorrect. 4.80% is the yield to maturity only; it ignores the negative effect of migration.\nC. Incorrect. 6.27% adds the absolute size of the migration effect (4.80% + 1.47%), treating it as a gain; downgrades have a larger price effect than upgrades, so migration lowers the expected return."),
 Q("Based on Brandt's assumptions and Exhibits 2 and 3, the credit spread on the Norvalle bond is closest to:",["0.7796%.","1.1782%.","1.5828%."],1,
   "B. Correct. Step 1: VND from the tree (discount at the tree rates, probability 0.5 on each branch, coupon 4) = 100.0000.\nStep 2: CVA = sum of DF × probability of default × LGD × expected exposure. Expected exposures 102.5000, 102.5665, 104.0000; LGD = 3/4 of exposure (recovery one-quarter); probabilities of default in each year 1.5000%, 1.4775%, 1.4553%; benchmark discount factors 0.975610, 0.936888, 0.887981. CVA = 1.1250 + 1.0648 + 1.0080 = 3.1978.\nStep 3: Fair value = 100 − 3.1978 = 96.8022. The yield to maturity that prices the bond at 96.8022 is 5.1782%.\nStep 4: Credit spread = 5.1782% − 4.0000% (3-year benchmark coupon) = 1.1782%.\nA. Incorrect. 0.7796% results from using a loss given default of 50% of exposure instead of 75%.\nC. Incorrect. 1.5828% results from assuming no recovery (loss given default of 100%)."),
 Q("The most appropriate response to Brandt's question relating to the credit spread is:",["an increase in the probability of default.","an increase in the loss given default.","a decrease in the risk-neutral probability of default."],2,
   "C. Correct. A lower risk-neutral probability of default lowers the CVA, raises the fair value and lowers the yield and the credit spread.\nA. Incorrect. A higher probability of default raises the CVA, lowers the fair value and widens the credit spread.\nB. Incorrect. A higher loss given default raises the CVA and widens the credit spread."),
 Q("Which of Brandt's statements regarding the term structure of credit spreads is correct?",["Only Statement 1","Only Statement 2","Both Statements 1 and 2"],1,
   "B. Correct. For the highest-rated issuers spreads are very low (with a floor at zero), so the credit term structure is flat or slightly upward sloping (Statement 2 is correct).\nA. Incorrect. Lower-rated issuers are more sensitive to the credit cycle, but their credit spreads narrow (not widen) with expectations of strong economic growth, so Statement 1 is incorrect.\nC. Incorrect. Statement 1 is incorrect.")])
