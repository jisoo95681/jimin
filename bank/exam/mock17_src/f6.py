from lib17 import *
# ===== PM-A (Mock 17, from Mock 9 Q41, Q43 and Mock 6 Q31): VaR advantages and parametric limitation, ETF completion =====
body="""Part 1
Crestline Investment Partners is a global asset management firm offering a wide variety of mutual funds to both institutional and individual investors. Victor Hallman, Crestline's chief risk officer, is responsible for risk oversight across the firm's many strategies, as well as communication of any risk issues to the portfolio management, compliance, and executive teams. Hallman oversees a team of six analysts who are responsible for the ongoing calculation and assessment of portfolio risk. Crestline uses a variety of methods when estimating risk, including value at risk (VaR), sensitivity risk measures, and scenario risk measures.

Joanna Weiss just joined Crestline as a risk analyst, and Hallman is familiarizing her with how the firm measures portfolio risk. In a conversation with Weiss, Hallman asks her what she has learned regarding the advantages of using VaR as a risk management tool. Weiss responds, "The advantages of VaR are that it (1) provides an estimate of downside exposure during a worst-case scenario, (2) avoids subjectivity, and (3) can be used for performance evaluation."

Later that day, Weiss receives an email from Hallman asking her to estimate the dollar VaR at the 5% level for the firm's emerging market equity fund. Weiss estimates VaR using the parametric method (assuming normal distribution).

Part 2
Prime Advisers is a registered investment advisory firm that uses exchange-traded funds (ETFs) for its clients' investment portfolios. Karl Brandt is CEO and chief investment officer of Prime. Dana Wells, a prospective client, is a high-net-worth individual who is considering transforming her actively managed portfolio of individual stocks and bonds into actively managed and passive ETFs.

Wells wants to maintain the current blended stock and bond benchmark allocations following her portfolio's transition from individual stocks and bonds to active and passive ETFs. Brandt states that whenever active ETF managers implement active views, gaps with respect to desired market exposures may result. For Wells's portfolio, Brandt plans to use passive ETFs to maintain benchmark exposure should any of the active ETF managers implement active views that cause changes in the portfolio's industry sector weightings. Passive ETFs will enable Brandt to maintain benchmark exposure while not necessarily replacing an active ETF manager."""
add('M17','Portfolio Management',body,[
 q("Weiss's comments on the advantages of VaR are most likely correct regarding:",["subjectivity.","downside exposure.","performance evaluation."],2,
  ["Incorrect. VaR relies on subjective inputs: the confidence level, the time horizon and the estimation method.","Incorrect. VaR is not a worst-case scenario; losses can and will exceed VaR.","Correct. VaR can be the basis for risk adjustment of returns, which is needed in performance evaluation."],
  ["can be used for performance evaluation","avoids subjectivity"],"VaR advantages: simple, comparable across assets, usable for risk-adjusted performance; limitations: subjective inputs, not a worst case, tail risk.",fixed=False),
 q("A limitation of the parametric method that Weiss used to estimate VaR is that it:",["requires a large number of random scenarios to be generated.","uses actual past returns, so it cannot capture new risks.","assumes returns are normally distributed, which fits poorly with fat tails and options."],2,
  ["Incorrect. Generating random scenarios describes Monte Carlo simulation.","Incorrect. Using actual past returns describes the historical simulation method.","Correct. The parametric method assumes a normal distribution, which understates tail risk and does not suit portfolios with options."],
  ["parametric method (assuming normal distribution)"],"Parametric VaR = normality (understates fat tails, poor for options); historical = actual past returns; Monte Carlo = random scenarios.",fixed=False),
 q("Brandt's explanation of benchmark exposure most likely describes portfolio:",["rebalancing.","liquidity management.","completion strategies."],2,
  ["Incorrect. Rebalancing uses ETFs to return to target weights when market values drift.","Incorrect. Liquidity management uses ETFs to invest excess cash and reduce cash drag.","Correct. Completion strategies use ETFs to fill temporary gaps in exposure that arise when an active manager moves away from the benchmark exposure, while keeping that manager."],
  ["use passive ETFs to maintain benchmark exposure","gaps with respect to desired market exposures may result"],"ETF uses: completion = fill exposure gaps while keeping the active manager; rebalancing = back to target weights; liquidity = invest cash / meet flows; transition = change managers.",fixed=False),
])
# ===== PM-B (Mock 17, from Mock 7 Q41, Q43, Q44): macro factor model expected return, macro vs fundamental statements, multifactor models in active and passive management =====
ic,b=[3.10],[0.60,-0.30,1.10,-0.20]; sur=[0.7,0.4,2.0,0.9]
ret=ic[0]+sum(x*y for x,y in zip(b,sur)); fac=ret-ic[0]
assert (round(ret,2),round(fac,2))==(5.42,2.32)
body="""Hui Chang, a portfolio manager, asks her assistant, Ronald Lopez, to review the macroeconomic factor model currently in use and to consider a fundamental factor model as an alternative.

The current macroeconomic factor model has four factors:

Ri = ai + bi1FGDP + bi2FCAP + bi3FCON + bi4FUNEM + εi,
where FGDP, FCAP, FCON, and FUNEM represent unanticipated changes in four factors: gross domestic product, manufacturing capacity utilization, consumer spending, and the rate of unemployment, respectively. Lopez assumes the error term is equal to zero when using this model.

Lopez estimates the current model using historical monthly returns for a portfolio for the most recent five years. The inputs used in and estimates derived from the macroeconomic factor model are presented in Exhibit 1.

Exhibit 1: Inputs for and Estimates from the Current Macroeconomic Model
# Factor | Portfolio 1 | Factor surprise (%)
Intercept (%) | 3.10 | ---
FGDP | 0.60 | 0.7
FCAP | −0.30 | 0.4
FCON | 1.10 | 2.0
FUNEM | −0.20 | 0.9

Lopez and Chang discuss similarities and differences between macroeconomic factor models and fundamental factor models, and Lopez offers a comparison of those models to statistical factor models. Lopez makes the following statements.

Statement 1:
The factors in fundamental factor models are based on attributes of stocks or companies, whereas the factors in macroeconomic factor models are based on surprises in economic variables.

Statement 2:
The factor sensitivities are generally determined first in fundamental factor models, whereas the factor sensitivities are estimated last in macroeconomic factor models.

Lopez tells Chang that multifactor models can be useful in active portfolio management, but not in passive management. Chang disagrees; she tells Lopez that multifactor models can be useful in both active and passive management."""
add('M17','Portfolio Management',body,[
 q("Assuming that the information in Exhibit 1 reflects the analyst's view, the expected return for Portfolio 1 is closest to:",["2.32%.","3.10%.","5.42%."],1,
  ["This is only the contribution of the factor surprises: 0.60 × 0.7 − 0.30 × 0.4 + 1.10 × 2.0 − 0.20 × 0.9 = 2.32%.","In a macroeconomic factor model the expected return is the intercept: the value when all factor surprises are zero, because surprises have an expected value of zero. The intercept is 3.10%.","This is the return given the surprises in the table: 3.10 + 2.32 = 5.42%."],
  ["@row:Intercept (%)","@row:FGDP"],"Macro factor model: EXPECTED return = intercept (surprises are zero on average); return given specific surprises = intercept + Σ sensitivity × surprise.",fixed=True),
 q("Which of Lopez's statements regarding macroeconomic factor models and fundamental factor models is correct?",["Only Statement 1","Both Statements 1 and 2","Only Statement 2"],1,
  ["Incorrect. Statement 2 is also correct.","Correct. Fundamental factors are attributes of stocks or companies; macroeconomic factors are surprises in economic variables. Sensitivities are specified first in fundamental models and estimated last in macroeconomic models.","Incorrect. Statement 1 is also correct."],
  ["The factors in fundamental factor models are based on attributes of stocks or companies","the factor sensitivities are estimated last in macroeconomic factor models"],"Macro model: factors = surprises, sensitivities estimated by regression (last); fundamental model: factors = attributes, sensitivities set first.",fixed=False),
 q("Whose statement regarding the use of multifactor models in active and passive portfolio management is correct?",["Lopez only","Both Lopez and Chang","Chang only"],2,
  ["Incorrect. Multifactor models are also useful in passive management.","Incorrect. Lopez is wrong: models are also useful in passively managed portfolios.","Correct. Analysts can use multifactor models in passively managed portfolios to replicate an index fund's factor exposures, as well as in active management."],
  ["multifactor models can be useful in both active and passive management"],"Multifactor models: active (factor tilts, active risk decomposition) and passive (replicate factor exposures of an index).",fixed=False),
])
