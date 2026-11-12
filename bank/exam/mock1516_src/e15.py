from lib15 import *
# ===== FI (M16): Brenner / Allied Fixed Income Partners (arbitrage-free valuation: spot rates, binomial tree, calibration, Monte Carlo vs pathwise) [from af-wenger] =====
s=[0.0120,0.0165,0.0210,0.0255]; cpn=1.5
pv=sum(cpn/(1+s[i])**(i+1) for i in range(3))+(100+cpn)/(1+s[3])**4
fw=[s[0]]+[(1+s[i])**(i+1)/(1+s[i-1])**i-1 for i in range(1,4)]
wA=sum(cpn/(1+fw[i])**(i+1) for i in range(3))+(100+cpn)/(1+fw[3])**4
y=0.0210; wC=sum(cpn/(1+y)**(i+1) for i in range(3))+(100+cpn)/(1+y)**4
assert (round(pv,2),round(wA,2),round(wC,2))==(96.12,91.35,97.72)
assert [round(x*100,3) for x in fw]==[1.2,2.102,3.006,3.912]
body="""Lukas Brenner is a portfolio manager in the fixed-income division of Allied Fixed Income Partners (AFIP), based in Atlanta, Georgia. AFIP seeks to identify and exploit fixed-income market inefficiencies. Brenner is meeting with analysts Mei Tan, Sofia Lenz, and Pavel Novak to evaluate securities for inclusion in AFIP's US Core Bond portfolio.

Brenner asks the group to determine the arbitrage-free value of an option-free bond issued by TFCO Corporation that matures in four years and pays an annual coupon of 1.50% on a face amount of $100. To assist with the analysis, Brenner presents the group with the following interest rate information in Exhibits 1 and 2.

Exhibit 1: Benchmark Spot Rates (Zero-Coupon Yield Curve)
# Maturity (Years) | Spot Rate
1 | 1.200%
2 | 1.650%
3 | 2.100%
4 | 2.550%

Exhibit 2: One-Year Implied Forward Rates
# Maturity (Years) | One-Year Forward Rate
Current one-year rate | 1.200%
One year forward | 2.102%
Two years forward | 3.006%
Three years forward | 3.912%

Tan asks, "Are there other ways to calculate the arbitrage-free value of a bond?" Lenz responds, "Yes, the arbitrage-free value of a bond can also be calculated using a binomial interest rate tree, where the interest rate tree provides a representation of how one-year forward rates evolve based on an interest rate model that identifies factors with predictable paths, an interest rate volatility assumption, and where forward rates on the tree are consistent with the current benchmark yield curve."

Brenner asks the group to use a binomial interest rate tree to calculate the arbitrage-free value of a three-year option-free bond issued by NRB Corporation. Brenner asks, "Would you get the same value for the NRB Corporation bond if you used the spot rates from Exhibit 1?"

Tan responds: "Yes, if the volatility assumed in the one-year implied forward rates in Exhibit 2 matches the volatility assumed in the binomial tree."

Lenz responds: "No, because the binomial interest rate tree provides multiple paths for the evolution of interest rates, whereas the spot rates in Exhibit 1 do not allow for rates to follow multiple paths."

Novak responds: "Yes, but only if the binomial interest rates are calibrated to match the term structure of interest rates in Exhibit 1 so that they produce the correct benchmark bond values."

Novak asks Tan how pathwise valuation compares with the Monte Carlo method. Tan responds with the following statements:

Statement 1: "In pathwise valuation, a constant is added to all interest rate paths so that the resulting present value for each benchmark bond is equal to its market value. No such adjustment is made in the Monte Carlo method."
Statement 2: "Interest rate paths for both the pathwise valuation and the Monte Carlo method are based on an assumption of interest rate volatility and an interest rate model that is calibrated to the current benchmark term structure of interest rates."
Statement 3: "Pathwise valuation calculates the present value of the bond's cash flows for each possible interest rate path, whereas the Monte Carlo method calculates present values for randomly selected interest rate paths.\""""
add('M16','Fixed Income',body,[
 q("The arbitrage-free value of the TFCO Corporation bond is closest to:",["$91.35.","$96.12.","$97.72."],1,
  ["This discounts the cash flows with the one-year forward rates as if they were spot rates: $91.35.","Discount each cash flow at the spot rate for its maturity: 1.5 ÷ 1.012 + 1.5 ÷ 1.0165² + 1.5 ÷ 1.021³ + 101.5 ÷ 1.0255⁴ = $96.12.","This discounts every cash flow at a single yield of 2.10% (a yield to maturity), not at the spot rates: $97.72."],
  ["@row:1","@row:4","matures in four years"],"Arbitrage-free value = each cash flow discounted at the spot rate of its own maturity (not forward rates, not one YTM).",fixed=True),
 q("Lenz's response to Tan's question is least likely correct with respect to:",["the benchmark yield curve.","the interest rate model.","interest rate volatility."],1,
  ["Incorrect. Forward rates on the tree must be consistent with the benchmark yield curve (calibration): correct.","Correct. The factors in an interest rate model are random (stochastic), not predictable.","Incorrect. The tree rests on an interest rate volatility assumption: correct."],
  ["an interest rate model that identifies factors with predictable paths"],"Interest rate model factors are random (stochastic); the tree needs a volatility assumption and calibration to the benchmark curve.",fixed=False),
 q("With respect to Brenner's question on valuing the NRB Corporation bond using the rates from Exhibit 1, who is most likely correct?",["Tan","Lenz","Novak"],2,
  ["Incorrect. Spot-rate valuation does not need a volatility assumption.","Incorrect. Multiple paths do not change the value of an option-free bond when the tree is calibrated.","Correct. A tree calibrated to the benchmark term structure reproduces the benchmark bond values, so for an option-free bond it gives the same value as spot-rate valuation."],
  ["calibrated to match the term structure of interest rates in Exhibit 1","option-free bond"],"Calibrated tree = same value as the spot curve for option-free bonds; paths and volatility matter only for bonds with embedded options.",fixed=False),
 q("Which of Tan's statements to Novak is least likely correct?",["Statement 3","Statement 1","Statement 2"],1,
  ["Incorrect. Pathwise valuation computes the PV along each possible path, Monte Carlo along randomly selected paths: correct.","Correct. The adjustment (a drift term added to the rates on all paths so benchmark bonds equal market values) is made in the Monte Carlo method, not in pathwise valuation on a calibrated tree.","Incorrect. Both methods rest on a volatility assumption and an interest rate model calibrated to the current term structure: correct."],
  ["a constant is added to all interest rate paths","No such adjustment is made in the Monte Carlo method."],"Monte Carlo needs the drift adjustment so benchmark bonds price at market; pathwise valuation uses all paths of a calibrated tree.",fixed=False),
])
