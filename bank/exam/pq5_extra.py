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
def vigs(): return [call_vig(),put_vig()]
