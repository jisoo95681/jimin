# 11 Nov: the credit-spread vignette appended to practice set 3 was a Mock 8 vignette the user had already seen.
# Re-skinned: names, numbers, tree and all answers recomputed (credit_tree.py reproduces the original numbers exactly), list items and options reordered.
from credit_tree import *
C=(.022,.029,.035); SIG=.12; REC=1/3; H=.012; CPN=.035
YTM0=.051; MD=7.25
NAMES=['AAA','AA','A','BBB','BB','B','CCC, CC, C']
PROB=[0.05,0.55,6.20,83.45,7.40,2.00,0.35]
SPR=[0.45,0.70,0.95,1.30,3.00,5.80,8.60]
def build_vignette():
    # Q49
    parts=[]; tot=0
    for n,p,s in zip(NAMES,PROB,SPR):
        ch=-MD*(s-1.30)*p/100   # in % of price (spread in %, prob in %)
        parts.append((n,s,p,ch)); tot+=ch
    er=YTM0*100+tot
    # Q50
    r=vnd_cva(*C,SIG,CPN,REC,H); d=r['d']
    fv=r['vnd']-r['cva']; y=ytm(fv,CPN); sp=(y-CPN)*100
    sp50=(ytm(*[vnd_cva(*C,SIG,CPN,0.5,H)[k] for k in ('vnd',)][:1],CPN) if False else None)
    def spread(lgd):
        rr=vnd_cva(*C,SIG,CPN,1-lgd,H); return (ytm(rr['vnd']-rr['cva'],CPN)-CPN)*100
    lo,hi=spread(.5),spread(1.0)
    spot=[(1/x)**(1/(i+1))-1 for i,x in enumerate(d)]
    fwd=[spot[0],d[0]/d[1]-1,d[1]/d[2]-1]
    t=r['tree']
    body=f"""Helena Dvorak is a fixed-income portfolio manager. Pavel Kuiper, a junior analyst, and Dvorak meet to review several positions in Dvorak's portfolio.

Dvorak begins the meeting by discussing credit rating migration. Dvorak asks Kuiper to estimate the expected return over the next year on a bond issued by Halden Group. The BBB rated bond has a yield to maturity of {YTM0*100:.2f}% and a modified duration of {MD:.2f}. Kuiper calculates the expected return on the bond over the next year given the partial credit transition and credit spread data in Exhibit 1. Kuiper assumes that market spreads and yields will remain stable over the year.

Exhibit 1
One-Year Transition Matrix for BBB Rated Bonds and Credit Spreads
# Rating | {' | '.join(NAMES)}
Probability (%) | {' | '.join(f'{p:.2f}' for p in PROB)}
Credit spread | {' | '.join(f'{s:.2f}%' for s in SPR)}

Dvorak next asks Kuiper to analyze a three-year bond, issued by Estrava S.A., using an arbitrage-free framework. The bond's coupon rate is {CPN*100:.1f}%, with interest paid annually and a par value of 100. In the analysis, Kuiper makes the following three assumptions:
The annual interest rate volatility is {SIG*100:.0f}%.
The recovery rate is one-third of the exposure each period.
The annual probability of default each year is {H*100:.2f}%.

Selected information on benchmark government bonds for the Estrava bond is presented in Exhibit 2, and the relevant binomial interest rate tree is presented in Exhibit 3.

Exhibit 2
Par Curve Rates for Annual Payment Benchmark Government Bonds
# Maturity | Coupon rate | Price | Discount factor | Spot rate | Forward rate
""" + "\n".join(f"{i+1} | {C[i]*100:.2f}% | 100 | {d[i]:.6f} | {spot[i]*100:.4f}% | {fwd[i]*100:.4f}%" for i in range(3)) + f"""

Exhibit 3
One-Year Binomial Interest Rate Tree for {SIG*100:.0f}% Volatility (risk-neutral probability of 50% on each branch)
# Date | 0 | 1 (top) | 1 (bottom) | 2 (top) | 2 (middle) | 2 (bottom)
Rate | {t[0]*100:.4f}% | {t[1]*100:.4f}% | {t[2]*100:.4f}% | {t[3]*100:.4f}% | {t[4]*100:.4f}% | {t[5]*100:.4f}%

Kuiper estimates the value of the Estrava bond assuming no default (VND) as well as the fair value of the bond. Kuiper then estimates the bond's yield to maturity and the bond's credit spread over the benchmark in Exhibit 2. Kuiper asks Dvorak, "What might cause the bond's credit spread to decrease?"

Dvorak and Kuiper next discuss the drivers of the term structure of credit spreads. Kuiper tells Dvorak the following:

Statement 1:
The credit term structure for the most highly rated securities tends to be either flat or slightly upward sloping.

Statement 2:
The credit term structure for lower-rated securities is often steeper, and credit spreads widen with expectations of strong economic growth."""
    lines="\n".join(f"{n}: −{MD:.2f} × ({s:.2f}% − 1.30%) × {p:.2f}% = {ch:+.4f}%" for n,s,p,ch in parts if n!='BBB')
    why1=(f"A. Correct. Expected return = YTM + expected percentage price change from migration. For each rating the price change = −modified duration × (new spread − 1.30%) × probability:\n{lines}\nBBB: no change = 0\nSum = {tot:.4f}%. Expected return = {YTM0*100:.2f}% − {abs(tot):.2f}% = {er:.2f}%.\n"
          f"B. Incorrect. {YTM0*100:.2f}% is the yield to maturity only; it ignores the negative effect of migration.\n"
          f"C. Incorrect. {YTM0*100+abs(tot):.2f}% adds the absolute size of the migration effect ({YTM0*100:.2f}% + {abs(tot):.2f}%), treating it as a gain; downgrades have a larger price effect than upgrades, so migration lowers the expected return.")
    e=r['e']; pd=r['pd']
    cv=[d[i]*pd[i]*(1-REC)*e[i] for i in range(3)]
    why2=(f"B. Correct. Step 1: VND from the tree (discount at the tree rates, probability 0.5 on each branch, coupon {CPN*100:.1f}) = {r['vnd']:.4f}.\n"
          f"Step 2: CVA = sum of DF × probability of default × LGD × expected exposure. Expected exposures {e[0]:.4f}, {e[1]:.4f}, {e[2]:.4f}; LGD = 2/3 of exposure (recovery one-third); probabilities of default in each year {pd[0]*100:.4f}%, {pd[1]*100:.4f}%, {pd[2]*100:.4f}%; benchmark discount factors {d[0]:.6f}, {d[1]:.6f}, {d[2]:.6f}. CVA = {cv[0]:.4f} + {cv[1]:.4f} + {cv[2]:.4f} = {r['cva']:.4f}.\n"
          f"Step 3: Fair value = {r['vnd']:.4f} − {r['cva']:.4f} = {fv:.4f}. The yield to maturity that prices the bond at {fv:.4f} is {y*100:.4f}%.\n"
          f"Step 4: Credit spread = {y*100:.4f}% − {CPN*100:.4f}% (3-year benchmark coupon) = {sp:.4f}%.\n"
          f"A. Incorrect. {lo:.4f}% results from using a loss given default of 50% of exposure instead of 2/3.\n"
          f"C. Incorrect. {hi:.4f}% results from assuming no recovery (loss given default of 100%).")
    q=[dict(q="Based on Exhibit 1, the one-year expected return on the Halden Group bond is closest to:",options=[f"{er:.2f}%.",f"{YTM0*100:.2f}%.",f"{YTM0*100+abs(tot):.2f}%."],answer=0,why=why1),
       dict(q="Based on Kuiper's assumptions and Exhibits 2 and 3, the credit spread on the Estrava bond is closest to:",options=[f"{lo:.4f}%.",f"{sp:.4f}%.",f"{hi:.4f}%."],answer=1,why=why2),
       dict(q="The most appropriate response to Kuiper's question relating to the credit spread is:",options=["a decrease in the risk-neutral probability of default.","an increase in the loss given default.","an increase in the probability of default."],answer=0,
            why="A. Correct. A lower risk-neutral probability of default lowers the CVA, raises the fair value and lowers the yield and the credit spread.\nB. Incorrect. A higher loss given default raises the CVA and widens the credit spread.\nC. Incorrect. A higher probability of default raises the CVA, lowers the fair value and widens the credit spread."),
       dict(q="Which of Kuiper's statements regarding the term structure of credit spreads is correct?",options=["Only Statement 1","Only Statement 2","Both Statements 1 and 2"],answer=0,
            why="A. Correct. For the highest-rated issuers spreads are very low (with a floor at zero), so the credit term structure is flat or slightly upward sloping (Statement 1 is correct).\nB. Incorrect. Lower-rated issuers are more sensitive to the credit cycle, but their credit spreads narrow (not widen) with expectations of strong economic growth, so Statement 2 is incorrect.\nC. Incorrect. Statement 2 is incorrect.")]
    return dict(topic="Fixed Income",body=body,questions=q),dict(er=er,sp=sp,lo=lo,hi=hi,tot=tot)
if __name__=='__main__':
    v,i=build_vignette(); print(v['body']); print(i)
    for x in v['questions']: print(x['why'][:900],'\n')
