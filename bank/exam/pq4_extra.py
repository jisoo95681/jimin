# 11 Nov (user request): appended at the END of practice set 4 (Q49-54; saved progress is keyed by question number, nothing is reordered).
#  1) VIM residual income vignette (Module 5 Q1 + Q27), re-skinned: names and numbers changed, answers recomputed.
#  2) Parker vignette from the Module 5 quiz (user had not answered it), unchanged except the Company C paragraph, whose question is not in the bank, is cut.
import json
def vim():
    TA=2_400_000; D_X=3; r_d=.07; ke=.11; ebit=280_000; t=.30; sh=40_000
    eq=TA/(1+D_X); debt=TA-eq; intr=debt*r_d; ni=(ebit-intr)*(1-t); chg=eq*ke; ri=ni-chg
    bvps=eq/sh; ri_ps=ri/sh; v=bvps+ri_ps/ke
    assert abs(eq-600_000)<1e-6 and abs(ni-107_800)<1e-6 and abs(ri-41_800)<1e-6 and abs(v-24.5)<1e-9 and abs(bvps-15)<1e-9
    body=("Orchard Packaging Group (OPG) had total assets of $2,400,000, financed with three times as much debt capital as equity capital.\n\n"
          "OPG's pretax cost of debt is 7% and its cost of equity capital is 11%.\n\n"
          "OPG had EBIT of $280,000 and was taxed at a rate of 30%. EBIT is expected to continue at $280,000 indefinitely.\n\n"
          "OPG's book value per share is $15 and it has 40,000 shares of common stock outstanding.")
    qs=[dict(q="Using the method that deducts an equity charge, OPG's residual income is closest to:",
             options=["$107,800.","$41,800.","$130,000."],answer=1,
             why=("Debt = 3/4 × $2,400,000 = $1,800,000 and equity = $600,000. Interest = $1,800,000 × 7% = $126,000.\n"
                  "Pretax income = 280,000 − 126,000 = $154,000; tax = 30% = $46,200; net income = $107,800.\n"
                  "Equity charge = $600,000 × 11% = $66,000.\nResidual income = 107,800 − 66,000 = $41,800.\n"
                  "$107,800 is net income (no equity charge deducted). $130,000 = EBIT × (1 − 30%) − 66,000 ignores the interest on the debt.")),
        dict(q="Using the residual income model, with the residual income expected to continue indefinitely, OPG's intrinsic value per share is closest to:",
             options=["$9.50.","$16.05.","$24.50."],answer=2,
             why=("Residual income per share = 41,800 / 40,000 = $1.045.\nBecause EBIT stays at $280,000 indefinitely, the residual income is a perpetuity: PV = 1.045 / 0.11 = $9.50.\n"
                  "Intrinsic value = book value per share + PV of residual income = 15.00 + 9.50 = $24.50.\n"
                  "$9.50 leaves out the book value. $16.05 = 15.00 + 1.045 counts only one year of residual income instead of the perpetuity."))]
    return dict(topic="Equity Valuation",body=body,questions=qs)
def parker():
    v=[x for x in json.load(open('/home/user/jimin/bank/nov10_equity_m5.json')) if x['id']=='eq5-parker'][0]
    b=v['body']; i=b.index("Stark asks Parker to calculate the intrinsic value of Company C"); j=b.index("Stark asks Parker to compare residual income models")
    b=b[:i]+b[j:]
    b=b.replace('\nStark asks','\n\nStark asks')
    qs=[dict(q=q['q'],options=list(q['options']),answer='ABC'.index(q['answer']),why=q['why']) for q in v['questions']]
    return dict(topic="Equity Valuation",body=b,questions=qs)
