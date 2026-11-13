# Audit fixes for Mock 13 (13 Nov): (1) six explanations whose A/B/C letters followed the ORIGINAL option order, not the shuffled order (Q7, 24, 30, 31, 40, 46); (2) unused DB-plan rows cut from V3.
import json
p='/home/user/jimin/bank/exam/mock13.json'
d=json.load(open(p)); st=d['set']
Q={}; n=0
for v in st['vignettes']:
    for q in v['questions']:
        n+=1; Q[n]=q
def L(*lines): return '\n'.join(lines)
Q[7]['why']=L("A. Incorrect. Policy 1 (\"Significant changes in risk characteristics for either a security or asset strategy should be communicated to all clients.\") is consistent with Standard V(B): Communication with Clients and Prospective Clients.",
 "B. Incorrect. Policy 2 (\"When discussing earnings estimates, caution should be exercised to avoid overconfidence regarding the accuracy of the earnings model.\") is consistent with Standard V(B).",
 "C. Correct. Policy 3 (a capsule or condensed form of a recommendation on social media, notifying all clients about the post) is not fully compliant with Standard V(B): when a condensed form of communication is used, clients should be told that additional information and analyses are available from the producer of the report; notifying clients that a post was made does not meet that requirement.")
Q[24]['why']=L("A. Incorrect. The credit spread curve is inverted (near-term spreads are higher than longer-term spreads). Strong current cash flow and high profit margins are characteristic of a high-quality issuer and are consistent with an upward sloping credit term structure.",
 "B. Correct. A downward sloping (inverted) credit term structure can follow a significant increase in leverage (for example a leveraged buyout or restructuring) and can indicate investor expectations that increased efficiencies will lead to improved future cash flow and profitability, benefiting debt investors.",
 "C. Incorrect. A flat credit term structure indicates a relatively stable expectation of default over time (a constant hazard rate flattens the curve); the curve here is inverted, not flat.")
Q[30]['why']=L("A. Incorrect. This is based on the portfolio balance channel but misrepresents it: that channel says countries with trade DEFICITS finance them with increased borrowing, which may shift global asset preferences and influence exchange rates.",
 "B. Correct. The flow supply/demand channel asserts that countries with persistent current account surpluses should see their currencies appreciate over time, and countries with persistent deficits should see their currencies depreciate.",
 "C. Incorrect. This is based on the debt sustainability channel but misrepresents it: the upper limit on borrowing applies to persistently large current account DEFICITS, not surpluses.")
Q[31]['why']=L("A. Incorrect. The portfolio balance channel assumes that current account imbalances shift financial wealth from deficit nations to surplus nations; deficit countries finance trade with more borrowing, which may shift global asset preferences and influence the path of exchange rates.",
 "B. Incorrect. The flow supply/demand channel focuses on the currency purchases and sales needed to pay for traded goods and services; they put upward pressure on the surplus nation's currency and downward pressure on the deficit nation's currency.",
 "C. Correct. Lindgren prefers the debt sustainability channel for the long-run equilibrium value: there should be an upper limit on the ability of countries to run persistently large current account deficits. If external debt rises to unsustainable levels, investors expect a major depreciation of the deficit country's currency so that the deficit narrows and the external debt stabilizes.")
Q[40]['why']=L("A. Incorrect. Ibáñez is correct that the carry arbitrage model assumes funds can be borrowed and lent at the same risk-free rate.",
 "B. Correct. Ibáñez is incorrect regarding short-sale proceeds: the carry arbitrage approach assumes the proceeds from a short sale are immediately available and can be used to purchase other securities (not only when the short is covered).",
 "C. Incorrect. Ibáñez is correct that the carry arbitrage model assumes no market frictions such as transaction costs.")
Q[46]['why']=L("A. Correct. Transition management refers to hiring and firing managers or changing allocations with existing managers, which is not Lambert's situation. She has inflows and outflows in her corporate bond fund, so liquidity management and completion fit her objectives.",
 "B. Incorrect. Portfolio liquidity management is easily achieved with ETFs: Lambert can invest inflows or meet redemptions while keeping her exposure to the market, buying and selling ETFs as flows occur.",
 "C. Incorrect. ETFs used for portfolio completion fill temporary gaps in exposure while she finds individual bonds to trade; the liquidity of ETFs relative to individual bonds lets her invest inflows or meet redemptions quickly.")

# Q3 and Q5: explanation lines were in the original order (letters duplicated); rewrite them in A/B/C display order
w=Q[3]['why']
if w.startswith('B. Correct'):
    ps=[x.strip() for x in w.split(' | ')]
    Q[3]['why']=L('A. Incorrect'+ps[1][len('B. Incorrect'):], ps[0], ps[2])
w=Q[5]['why']
if w.startswith('C. Correct'):
    ps=[x.strip() for x in w.split(' | ')]
    Q[5]['why']=L('A. Incorrect'+ps[1][len('B. Incorrect'):], 'B. Incorrect'+ps[2][len('C. Incorrect'):], ps[0])
# unused DB-plan rows (V3, Part 2): the questions use service cost, past service cost, discount rate, opening obligation and assets, expected return, actuarial loss
v=st['vignettes'][2]; b=v['body']
for row in ("Employer contributions | 1,150\n","Benefit obligation at end of year | 47,700\n","Plan assets at end of year | 43,500\n","Actual return on plan assets | 2,700\n"):
    if row in b: b=b.replace(row,"")
v['body']=b
st['rev']=3
json.dump(d,open(p,'w'),ensure_ascii=False,indent=1); print('fixed')
