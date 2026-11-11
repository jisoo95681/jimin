# 11 Nov (user request): two American option binomial questions (one call, one put) appended at the END of practice set 5 (Q49-50).
# Every number is computed here (amopt.py) and asserted; explanations are written from the computed values.
from amopt import tree
def _r(x,n=2): return f"{x:.{n}f}"
def call_vig():
    S0,K,u,d,r=50,48,1.20,0.90,0.03
    t=tree(S0,K,u,d,r,'call'); q=t['q']
    assert abs(q-0.43333333)<1e-6 and [round(x,2) for x in t['S2']]==[40.5,54.0,72.0] and [round(x,2) for x in t['T']]==[0,6.0,24.0]
    assert abs(t['cont1'][1]-13.3981)<1e-3 and t['ex1'][1]==12.0 and abs(t['cont1'][0]-2.5243)<1e-3
    assert t['V1'][1]==t['cont1'][1] and t['V1'][0]==t['cont1'][0]      # no early exercise at any node
    assert abs(t['V0']-7.0255)<1e-3 and abs(t['E0']-t['V0'])<1e-12 and abs(t['cont0']-t['ex0'])>1
    wrong_ex=(q*12.0+(1-q)*t['cont1'][0])/(1+r)                          # exercises at the up node
    # p = 0.5
    c1=[(0.5*t['T'][i+1]+0.5*t['T'][i])/(1+r) for i in range(2)]; v05=(0.5*max(c1[1],12.0)+0.5*max(c1[0],0))/(1+r)
    assert [round(wrong_ex,2),round(t['V0'],2),round(v05,2)]==[6.44,7.03,8.48],(wrong_ex,t['V0'],v05)
    body=("Mattias Holm, a derivatives analyst at Selwyn Capital, values an American-style call option on Selwyn Group shares with a two-period binomial model. The shares pay no dividends. The option matures at the end of the second period. Exhibit 1 shows the inputs.\n\n"
          "Exhibit 1: Binomial Inputs\n# Item | Value\nCurrent share price | $50\nExercise price of the call option | $48\nRisk-free rate per period | 3%\nUp factor (u) | 1.20\nDown factor (d) | 0.90")
    why=(f"Risk-neutral probability of an up move q = (1 + r − d) ÷ (u − d) = (1.03 − 0.90) ÷ (1.20 − 0.90) = {_r(q,4)}.\n"
         f"Prices at the end of period 2: 72.00, 54.00 and 40.50. Call values there: 24.00, 6.00 and 0.\n"
         f"Up node (S = 60): continuation value = (0.4333 × 24.00 + 0.5667 × 6.00) ÷ 1.03 = {_r(t['cont1'][1])}; exercise value = 60 − 48 = 12.00. The larger value is {_r(t['cont1'][1])} (do not exercise).\n"
         f"Down node (S = 45): continuation value = (0.4333 × 6.00 + 0.5667 × 0) ÷ 1.03 = {_r(t['cont1'][0])}; exercise value = 0, so the node value is {_r(t['cont1'][0])}.\n"
         f"Today: (0.4333 × {_r(t['cont1'][1])} + 0.5667 × {_r(t['cont1'][0])}) ÷ 1.03 = ${_r(t['V0'])}; exercising now is worth only 50 − 48 = 2.00.\n"
         f"Early exercise is never optimal for a call on a non-dividend-paying stock, so the American call equals the European call.\n"
         f"$6.44 wrongly assumes exercise at the up node (12.00). $8.48 uses a probability of 0.5 instead of {_r(q,4)}.")
    return dict(topic="Derivatives",body=body,questions=[dict(q="The value of the American call option on Selwyn Group is closest to:",options=["$6.44.","$7.03.","$8.48."],answer=1,why=why)])
def put_vig():
    S0,K,u,d,r=60,65,1.20,0.85,0.03
    t=tree(S0,K,u,d,r,'put'); q=t['q']
    assert abs(q-0.5142857)<1e-6 and [round(x,2) for x in t['S2']]==[43.35,61.2,86.4] and [round(x,2) for x in t['T']]==[21.65,3.8,0]
    assert abs(t['cont1'][1]-1.792)<1e-3 and t['ex1'][1]==0 and abs(t['cont1'][0]-12.1068)<1e-3 and abs(t['ex1'][0]-14.0)<1e-12
    assert t['V1'][0]==14.0 and abs(t['V1'][1]-t['cont1'][1])<1e-12                     # early exercise at the down node only
    assert abs(t['V0']-7.49668)<1e-4 and abs(t['E0']-6.60390)<1e-4 and t['ex0']==5 and t['cont0']>t['ex0']
    qs=1-q; ex=lambda s: max(K-s,0); S=lambda i,j: S0*u**i*d**(j-i)
    T=[ex(S(i,2)) for i in range(3)]; c1=[(qs*T[i+1]+(1-qs)*T[i])/(1+r) for i in range(2)]
    V1=[max(c1[i],ex(S(i,1))) for i in range(2)]; vsw=(qs*V1[1]+(1-qs)*V1[0])/(1+r)
    assert [round(t['V0'],2),round(t['E0'],2),round(vsw,2)]==[7.50,6.60,7.89],(t['V0'],t['E0'],vsw)
    body=("Elena Varga, a derivatives analyst at Norden Bank, values an American-style put option on Calder Industries shares with a two-period binomial model. Calder pays no dividends. The put matures at the end of the second period. Exhibit 1 shows the inputs.\n\n"
          "Exhibit 1: Binomial Inputs\n# Item | Value\nCurrent share price | $60\nExercise price of the put option | $65\nRisk-free rate per period | 3%\nUp factor (u) | 1.20\nDown factor (d) | 0.85")
    why=(f"Risk-neutral probability of an up move q = (1 + r − d) ÷ (u − d) = (1.03 − 0.85) ÷ (1.20 − 0.85) = {_r(q,4)}.\n"
         f"Prices at the end of period 2: 86.40, 61.20 and 43.35. Put values there: 0, 3.80 and 21.65.\n"
         f"Up node (S = 72): continuation value = (0.4857 × 3.80) ÷ 1.03 = {_r(t['cont1'][1])}; exercise value = 0. The node value is {_r(t['cont1'][1])}.\n"
         f"Down node (S = 51): continuation value = (0.5143 × 3.80 + 0.4857 × 21.65) ÷ 1.03 = {_r(t['cont1'][0])}; exercise value = 65 − 51 = 14.00. The larger value is 14.00: early exercise.\n"
         f"Today: (0.5143 × {_r(t['cont1'][1])} + 0.4857 × 14.00) ÷ 1.03 = ${_r(t['V0'])}; exercising now is worth only 65 − 60 = 5.00.\n"
         f"$6.60 is the European put value (no early exercise at the down node). $7.89 reverses the probabilities (uses 0.4857 for the up move).")
    return dict(topic="Derivatives",body=body,questions=[dict(q="The value of the American put option on Calder Industries is closest to:",options=["$7.50.","$6.60.","$7.89."],answer=0,why=why)])

def dscr_vig():
    NOI=1_500_000; DSCR_MIN=1.30; LTV_MAX=0.70; V=28_000_000; r=0.065
    ds_max=NOI/DSCR_MIN; loan_dscr=ds_max/r; loan_ltv=LTV_MAX*V
    assert abs(loan_dscr-17_751_479.3)<1 and abs(loan_ltv-19_600_000)<1e-6 and loan_dscr<loan_ltv   # DSCR binds
    noi_only=NOI/r; ds_ltv=loan_ltv*r; dscr_ltv=NOI/ds_ltv
    assert abs(noi_only-23_076_923.08)<1 and abs(ds_ltv-1_274_000)<1e-6 and round(dscr_ltv,2)==1.18 and round(ds_ltv/NOI,2)==0.85 and dscr_ltv<DSCR_MIN
    body=("Rosa Almeida, a real estate analyst at Kestrel Bank, sets the maximum loan on an office building. Almeida's bank requires a minimum debt service coverage ratio (DSCR) of 1.30 and a maximum loan-to-value (LTV) ratio of 70%. The loan would be interest only, with an annual interest rate of 6.5%. Exhibit 1 shows the property data.\n\n"
          "Exhibit 1: Property Data\n# Item | Value\nNet operating income (NOI) | $1,500,000\nAppraised value | $28,000,000")
    q1=dict(q="The maximum loan allowed by the DSCR requirement is closest to:",options=["$19.60 million.","$23.08 million.","$17.75 million."],answer=2,
        why=("DSCR = NOI ÷ debt service, so the maximum debt service = NOI ÷ minimum DSCR = 1,500,000 ÷ 1.30 = $1,153,846.\n"
             "For an interest-only loan, loan amount = debt service ÷ interest rate = 1,153,846 ÷ 0.065 = $17.75 million.\n"
             "$19.60 million is the LTV-based loan (70% × 28,000,000), which ignores the DSCR. $23.08 million = NOI ÷ interest rate leaves out the DSCR requirement. "
             "The maximum loan is the lower of the DSCR-based and LTV-based amounts, here the DSCR-based $17.75 million."))
    q2=dict(q="If the bank instead made the maximum loan allowed by the LTV limit, the DSCR would be closest to:",options=["1.18.","0.85.","1.30."],answer=0,
        why=("Maximum LTV loan = 70% × 28,000,000 = $19,600,000. Interest-only debt service = 19,600,000 × 6.5% = $1,274,000.\n"
             "DSCR = NOI ÷ debt service = 1,500,000 ÷ 1,274,000 = 1.18, which is below the required 1.30. The LTV loan is therefore too large: the DSCR constraint binds.\n"
             "0.85 turns the ratio upside down (debt service ÷ NOI). 1.30 is the lender's minimum, not the result."))
    return dict(topic="Alternative Investments",body=body,questions=[q1,q2])
def impair_vig():
    CA=240; UCF=225; FV=190; COST=5; VIU=210
    assert CA>UCF                                  # US GAAP step 1: impaired
    us=CA-FV; fvlcts=FV-COST; ra=max(fvlcts,VIU); ifrs=CA-ra
    assert us==50 and CA-UCF==15 and fvlcts==185 and ra==210 and ifrs==30 and CA-fvlcts==55
    body=("Karel Novak, an analyst at Brenner Research, reviews a production line that Aldor Packaging holds for use. The production line has a carrying amount of $240 million. "
          "Aldor expects the line to generate undiscounted future cash flows of $225 million, which have a present value (value in use) of $210 million. "
          "The fair value of the line is $190 million, and the costs to sell it would be $5 million. "
          "Novak first computes the impairment loss under US GAAP and then, for comparison, under IFRS.")
    q1=dict(q="The impairment loss under US GAAP is closest to:",options=["$15 million.","$50 million.","$30 million."],answer=1,
        why=("US GAAP step 1 (recoverability): carrying amount $240 million > undiscounted future cash flows $225 million, so the asset is impaired.\n"
             "Step 2: impairment loss = carrying amount − fair value = 240 − 190 = $50 million.\n"
             "$15 million = 240 − 225 uses the undiscounted cash flows as the measure; they are only the test, not the measure. $30 million is the IFRS answer."))
    q2=dict(q="The impairment loss under IFRS is closest to:",options=["$55 million.","$50 million.","$30 million."],answer=2,
        why=("IFRS: recoverable amount = higher of fair value less costs to sell (190 − 5 = 185) and value in use (210) = $210 million.\n"
             "Impairment loss = carrying amount − recoverable amount = 240 − 210 = $30 million (the carrying amount exceeds the recoverable amount).\n"
             "$55 million uses fair value less costs to sell (240 − 185) instead of the higher value in use. $50 million is the US GAAP answer."))
    return dict(topic="Financial Statement Analysis",body=body,questions=[q1,q2])
def vigs(): return [call_vig(),put_vig(),dscr_vig(),impair_vig()]
