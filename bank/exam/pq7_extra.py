# 11 Nov (user request): two questions each on the PENSION CORRIDOR and the REAL ESTATE CYCLE, appended at the END of practice set 7 (Q49-52).
def corridor_vig():
    PBO=620.0; PA=560.0; LOSS=95.0; YRS=12
    corr=0.10*max(PBO,PA); exc=LOSS-corr; am=exc/YRS
    assert abs(corr-62)<1e-9 and abs(exc-33)<1e-9 and abs(am-2.75)<1e-9
    wrong1=LOSS/YRS; wrong2=(LOSS-0.10*PA)/YRS
    assert round(wrong1,2)==7.92 and round(wrong2,2)==3.25
    body=("Lena Hartmann, an analyst at Corvin Research, studies the defined benefit pension plan of Valtor Industries, which reports under US GAAP. At the beginning of the year the projected benefit obligation (PBO) was $620 million and the fair value of plan assets was $560 million. "
          "The accumulated unrecognized net actuarial loss at the beginning of the year was $95 million, and the average remaining service life of the active employees is 12 years. "
          "Valtor amortizes actuarial gains and losses with the corridor approach. Hartmann also notes that a peer company reports under IFRS.")
    q1=dict(q="The amortization of the actuarial loss included in Valtor's pension cost for the year is closest to:",options=["$3.25 million.","$2.75 million.","$7.92 million."],answer=1,
        why=("Corridor = 10% × the greater of beginning PBO and beginning plan assets = 10% × 620 = $62 million.\n"
             "The accumulated loss of $95 million exceeds the corridor by 95 − 62 = $33 million; only this excess is amortized.\n"
             "Amortization = 33 ÷ 12 = $2.75 million.\n"
             "$7.92 million = 95 ÷ 12 ignores the corridor. $3.25 million uses plan assets for the corridor (10% × 560 = 56) although the PBO is the greater amount."))
    q2=dict(q="Which statement about the corridor approach and the peer company's IFRS reporting is most accurate?",
        options=["The corridor approach is required under IFRS and optional under US GAAP.","Under IFRS, actuarial gains and losses are recognized in profit or loss immediately.","The corridor approach is a US GAAP method; under IFRS the remeasurements go to OCI and are not amortized into profit or loss."],answer=2,
        why=("The corridor approach (amortizing only the part of the accumulated actuarial gains and losses outside the corridor) is a US GAAP method.\n"
             "Under IFRS, remeasurements of the net defined benefit liability (including actuarial gains and losses) are recognized in OCI and are not amortized into profit or loss later.\n"
             "The other two statements reverse or misstate the treatment."))
    return dict(topic="Financial Statement Analysis",body=body,questions=[q1,q2])
def cycle_vig():
    body=("Priya Rao, a real estate analyst at Norden Capital, compares two office markets with the observations in Exhibit 1.\n\n"
          "Exhibit 1: Office Market Observations\n# Observation | Market A | Market B\nVacancy rate | Rising | Near its cyclical high\nRent growth | Slowing but still positive | Negative\nNew construction | Projects started earlier are still being completed | Halted\nLenders | Still willing to finance projects | Tightening credit\nProperty prices | Flat | Falling")
    q1=dict(q="Based on Exhibit 1, Market A is most likely in the:",options=["expansion phase.","hyper-supply (oversupply) phase.","recession phase."],answer=1,
        why=("Cycle order: recovery → expansion → hyper-supply → recession.\n"
             "Market A: construction started earlier is still delivering new space while vacancy rises and rent growth slows: supply is running ahead of demand, which is the hyper-supply (oversupply) phase.\n"
             "Expansion would show falling vacancy and rising rents. Recession shows negative rent growth, halted construction and falling prices."))
    q2=dict(q="Based on Exhibit 1, Market B is most likely in the:",options=["hyper-supply (oversupply) phase.","recovery phase.","recession phase."],answer=2,
        why=("Market B: vacancy near its cyclical high, negative rent growth, halted construction, tightening credit and falling property prices are the signs of a recession.\n"
             "Hyper-supply still has construction being completed and flat to slowing rents. Recovery follows the recession, with little new construction but stabilizing vacancy and rents, not falling prices."))
    return dict(topic="Alternative Investments",body=body,questions=[q1,q2])
def vigs(): return [corridor_vig(),cycle_vig()]
