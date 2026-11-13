from lib17 import *
# ===== FI (Mock 17, from Mock 7 Q30, Q31, Mock 9 Q6, Mock 8 Q10, Mock 6 Q40): credit migration expected return, CVA and credit spread, what lowers the spread, pure expectations, tree calibration =====
ytm,md=5.20,6.80
prob=[0.03,0.25,5.10,86.00,6.50,1.65,0.47]; spr=[0.60,0.90,1.10,1.50,3.40,6.50,9.50]
assert abs(sum(prob)-100)<1e-9
loss=sum(p/100*md*(s-1.50) for p,s in zip(prob,spr)); er=ytm-loss
assert (round(er,2),round(loss,4))==(3.69,1.5057)
c=4.5; r0,r1u,r1d=0.026,0.049,0.038; r2=[0.071,0.055,0.042]
V2=[104.5/(1+x) for x in r2]
V1u=(0.5*(V2[0]+c)+0.5*(V2[1]+c))/(1+r1u); V1d=(0.5*(V2[1]+c)+0.5*(V2[2]+c))/(1+r1d)
V0=(0.5*(V1u+c)+0.5*(V1d+c))/(1+r0)
E1=0.5*(V1u+V1d)+c; E2=0.25*V2[0]+0.5*V2[1]+0.25*V2[2]+c; E3=104.5
s=[0.026,0.034,0.041]; DF=[1/(1+x)**(i+1) for i,x in enumerate(s)]
par=(1-DF[2])/sum(DF); par2=(1-DF[1])/(DF[0]+DF[1])
f2=(1+s[1])**2/(1+s[0])-1; f3=(1+s[2])**3/(1+s[1])**2-1
def spread(R,pd=0.018):
    cva=sum(e*(1-R)*pd*(1-pd)**t*DF[t] for t,e in enumerate([E1,E2,E3])); fv=V0-cva
    lo,hi=0,0.2
    for _ in range(200):
        mid=(lo+hi)/2; v=sum(c/(1+mid)**t for t in (1,2))+104.5/(1+mid)**3
        if v>fv: lo=mid
        else: hi=mid
    return cva,fv,mid*100,(mid-par)*100
sp=spread(0.30)[3]; spA=spread(0.50)[3]; spC=spread(0.0)[3]
assert (f"{sp:.4f}",f"{spA:.4f}",f"{spC:.4f}")==("1.3797","0.9952","1.9670")
assert spread(0.30,0.012)[3]<sp and spread(0.45)[3]<sp
print([round(x,6) for x in DF],round(par*100,4),round(par2*100,4),round(f2*100,4),round(f3*100,4),round(V0,4))
body=f"""Part 1
Elena Vasco is a fixed-income portfolio manager. Daniel Cho, a junior analyst, and Vasco meet to review several positions in Vasco's portfolio.

Vasco begins the meeting by discussing credit rating migration. Cho asks Vasco about the typical impact of credit rating migration on the expected return on a bond. Vasco asks Cho to estimate the expected return over the next year on a bond issued by Calder Corp. The BBB rated bond has a yield to maturity of 5.20% and a modified duration of 6.80. Cho calculates the expected return on the bond over the next year given the partial credit transition and credit spread data in Exhibit 1. He assumes that market spreads and yields will remain stable over the year.

Exhibit 1: One-Year Transition Matrix for BBB Rated Bonds and Credit Spreads
# Rating | AAA | AA | A | BBB | BB | B | CCC, CC, C
Probability (%) | 0.03 | 0.25 | 5.10 | 86.00 | 6.50 | 1.65 | 0.47
Credit spread | 0.60% | 0.90% | 1.10% | 1.50% | 3.40% | 6.50% | 9.50%

Vasco next asks Cho to analyze a three-year bond, issued by Arvento S.A., using an arbitrage-free framework. The bond's coupon rate is 4.5%, with interest paid annually and a par value of 100. In his analysis, Cho makes the following three assumptions:
The annual interest rate volatility is 12%.
The recovery rate is 30% of the exposure each period.
The annual probability of default each year is 1.80%.

Selected information on benchmark government bonds for the Arvento bond is presented in Exhibit 2, and the relevant binomial interest rate tree is presented in Exhibit 3.

Exhibit 2: Par Curve Rates for Annual Payment Benchmark Government Bonds
# Maturity | Coupon Rate | Price | Discount Factor | Spot Rate | Forward Rate
1 | 2.6000% | 100 | {DF[0]:.6f} | 2.6000% | 2.6000%
2 | {par2*100:.4f}% | 100 | {DF[1]:.6f} | 3.4000% | {f2*100:.4f}%
3 | {par*100:.4f}% | 100 | {DF[2]:.6f} | 4.1000% | {f3*100:.4f}%

Exhibit 3: One-Year Binomial Interest Rate Tree for 12% Volatility (risk-neutral probability of 50% on each branch)
# Date | 0 | 1 (top) | 1 (bottom) | 2 (top) | 2 (middle) | 2 (bottom)
Rate | 2.6000% | 4.9000% | 3.8000% | 7.1000% | 5.5000% | 4.2000%

Cho estimates the value of the Arvento bond assuming no default (VND) as well as the fair value of the bond. He then estimates the bond's yield to maturity and the bond's credit spread over the benchmark in Exhibit 2. Cho asks Vasco, "What might cause the bond's credit spread to decrease?"

Part 2
Marcus Dreyer is a fund manager with Atlas Asset Partners, a fixed-income asset management firm. He actively manages his fund's holdings, duration, and yield curve exposure. Dreyer's view is that the spot curve one year from today will reflect the current forward curve.

Part 3
Kevin Hartman is a fixed-income analyst at Meridian Partners, a hedge fund focusing on global macro arbitrage opportunities. Hartman is conducting a training session for a new analyst, Sam Orlov.

Hartman states: "We need to be able to value bonds with embedded options, where expected cash flows change depending on the path of future interest rates. We typically construct an interest rate tree as a visual representation of the paths of future interest rates, with the average of possible future values being centered on the current yield curve. The following three steps can be employed to construct an interest rate tree for valuing a particular bond:

Step 1: Using prices of the benchmark bonds, determine the current par curve.
Step 2: Estimate interest rate volatility, and calculate the potential paths of future rates.
Step 3: Starting with the current market price, calculate each successive node's value.

The interest rate tree must then be calibrated to fit the actual yield curve while being consistent with an underlying interest rate model."

Orlov states: "I believe the iterative process must involve a trial-and-error search to determine the higher and lower rates subsequent to each node in the tree, which branches out from an average yield centered on the forward rate curve. The rates must also be consistent with an assumption of log-normality, the volatility assumption, and the observed market value of the bond being evaluated.\""""
add('M17','Fixed Income',body,[
 q("Based on Exhibit 1, the one-year expected return on the Calder Corp. bond is closest to:",["3.69%.","5.20%.","6.71%."],0,
  ["Expected return = YTM + expected price change from migration. Each transition: −6.80 × (new spread − 1.50%) × probability; the sum is −1.51%. Expected return = 5.20% − 1.51% = 3.69%.","This is the yield to maturity alone; it ignores the expected loss from migration.","This ADDS the expected migration loss to the yield (5.20% + 1.51%) instead of subtracting it."],
  ["@row:Probability (%)","@row:Credit spread","modified duration of 6.80"],"Expected return with migration = YTM − modified duration × Σ [probability × (new spread − current spread)]; a downgrade (wider spread) lowers price.",fixed=True),
 q("Based on Cho's assumptions and Exhibits 2 and 3, the credit spread on the Arvento bond is closest to:",["0.9952%.","1.3797%.","1.9670%."],1,
  ["This uses a loss given default of 50% of exposure (recovery 50%) instead of 70%.","Step 1: VND from the tree = 101.0557. Step 2: expected exposures 103.6831, 103.4911, 104.5000; LGD = 70% of exposure (recovery 30%); probabilities of default 1.8000%, 1.7676%, 1.7364%; discounted at the benchmark spot discount factors: CVA = 3.5965. Step 3: fair value = VND − CVA = 97.4592. Step 4: YTM that prices the bond at 97.4592 = 5.4407%; spread = 5.4407% − 4.0610% (3-year benchmark coupon) = 1.3797%.","This assumes no recovery (loss given default of 100%)."],
  ["The recovery rate is 30% of the exposure each period","The annual probability of default each year is 1.80%","@row:3"],"Credit spread = YTM(fair value) − benchmark yield, with fair value = VND − CVA and CVA = Σ exposure × LGD (1 − recovery) × PD × discount factor.",fixed=True),
 q("Which change is most likely to cause the credit spread on the Arvento bond to decrease?",["A lower recovery rate","A higher recovery rate","A higher probability of default"],1,
  ["Incorrect. A lower recovery rate raises LGD and CVA, so the fair value falls and the spread widens.","Correct. A higher recovery rate lowers LGD and CVA, which raises the fair value and narrows the credit spread.","Incorrect. A higher probability of default raises CVA and widens the spread."],
  ["What might cause the bond's credit spread to decrease?"],"CVA = exposure × (1 − recovery) × PD: lower PD or higher recovery → lower CVA → higher fair value → lower spread.",fixed=False),
 q("Dreyer's view that the spot curve one year from today will reflect the current forward curve is most consistent with:",["the segmented markets theory.","the pure expectations theory.","the liquidity preference theory."],1,
  ["Incorrect. Segmented markets: each maturity is priced by its own supply and demand; forward rates are not forecasts.","Correct. Pure expectations: forward rates are unbiased predictors of future spot rates, so the future spot curve equals today's forward curve.","Incorrect. Liquidity preference adds a premium for longer maturities, so forward rates overstate expected future spot rates."],
  ["the spot curve one year from today will reflect the current forward curve"],"Pure expectations: forward = expected future spot; liquidity preference adds a liquidity premium; segmented markets: no link between maturities.",fixed=False),
 q("When describing calibrating the interest rate tree, Orlov is least likely correct with respect to the:",["assumption of log-normality.","volatility assumption.","value of the bond being evaluated."],2,
  ["Incorrect. The tree rates are consistent with an assumption of log-normality (the interest rate model).","Incorrect. The tree is built on a volatility assumption.","Correct. Calibration uses the observed market values of the benchmark bonds, not the value of the bond being evaluated."],
  ["the observed market value of the bond being evaluated","least likely correct"],"Tree calibration inputs: volatility, interest rate model (log-normality) and the benchmark bond prices/par curve; NOT the price of the bond being valued.",fixed=False),
])
