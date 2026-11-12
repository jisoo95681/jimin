from lib15 import *
# ===== Corp (M15): Kovacs / Valdor Partners, Brenta Corporation (payout policy, target payout adjustment, leveraged buyback, board) [from m2-3] =====
tp,af,d0,E1,E2=0.60,0.20,0.40,2.10,2.30
d1=d0+(E1*tp-d0)*af; inc2=(E2*tp-d1)*af; inc1=(E1*tp-d0)*af
dd1=d0+(E1-d0)*af; inc2b=(E2-dd1)*af
assert (round(inc2,2),round(inc1,2),round(inc2b,2))==(0.16,0.17,0.31),(inc2,inc1,inc2b)
eps,sh,px,kd,rep=2.40,3_150_000,48.0,0.038,300_000
earn=eps*sh; cost=px*rep*kd; new=sh-rep
e_ok=(earn-cost)/new; e_a=(earn-cost)/sh; e_c=earn/new
assert (round(e_ok,2),round(e_a,2),round(e_c,2))==(2.46,2.23,2.65),(e_ok,e_a,e_c)
body="""Nadia Kovacs is an activist investor with Valdor Partners. Valdor recently acquired a 9.9% equity position in Brenta Corporation and is seeking two board seats.
Brenta is a mature company that has maintained a constant dividend payout ratio and does not currently have a share repurchase program. In public comments, Kovacs recommends a material increase in Brenta's dividend payout ratio and benchmarking the payout to Brenta's competitors.
Kovacs tells Brenta's management that Torvik, one of Brenta's competitors, has a 60% target payout ratio with an adjustment period of five years. Torvik's most recent annual dividend was $0.40 per share. Torvik's EPS is expected to be $2.10 in Year 1 and $2.30 in Year 2 of the adjustment period.
As an alternative to Brenta increasing dividends, Kovacs proposes a one-time share repurchase using borrowed funds. Kovacs's current EPS forecast for Brenta for the next year is $2.40. The company currently has 3,150,000 shares outstanding, its current share price is $48, and its after-tax cost of borrowing is 3.80%. Kovacs calculates the revised EPS forecast for Brenta, assuming that 300,000 shares are repurchased immediately at the current share price.
Mark Ellis, an analyst, oversees the integration of ESG factors into Valdor's investment analysis. Ellis analyzes current policies and practices related to Brenta's board and recommends changes that would increase governance effectiveness. Brenta's board has 12 members, seven of whom are independent, and is chaired by the company's CEO. The board has audit, compensation, nomination, risk and compliance, and governance committees."""
add('M15','Corporate Issuers',body,[
 q("The implementation of Kovacs's recommendation regarding Brenta's dividend payout ratio would most likely:",["increase the agency conflict between Brenta's managers and shareholders.","reduce management's ability to invest in negative NPV projects.","reduce the agency conflict between Brenta's bondholders and shareholders."],1,
  ["Incorrect. A higher payout reduces, not increases, the manager-shareholder conflict in a mature company.","Correct. A higher payout ratio constrains management's access to capital, so they cannot overinvest in negative NPV projects (manager-shareholder conflict falls).","Incorrect. A higher payout increases the shareholder-bondholder conflict: dividends reduce the cash cushion for the fixed payments to bondholders."],
  ["a material increase in Brenta's dividend payout ratio","mature company"],"Higher payout: less free cash for overinvestment (manager-shareholder conflict falls) but less cushion for creditors (shareholder-bondholder conflict rises).",fixed=False),
 q("Using a target payout adjustment model, the expected increase in Torvik's dividend per share in Year 2 of the adjustment period is closest to:",["$0.16.","$0.17.","$0.31."],0,
  ["Increase = (expected earnings × target payout − previous dividend) × adjustment factor. Year 1: (2.10 × 0.60 − 0.40) × 0.20 = $0.172 (dividend $0.572). Year 2: (2.30 × 0.60 − 0.572) × 0.20 = $0.16.","This is the Year 1 increase ($0.172), not the Year 2 increase.","This uses a 100% target payout instead of 60%: Year 1 (2.10 − 0.40) × 0.20 = 0.34; Year 2 (2.30 − 0.74) × 0.20 = $0.31."],
  ["60% target payout ratio with an adjustment period of five years","most recent annual dividend was $0.40 per share","$2.10 in Year 1 and $2.30 in Year 2"],"Target payout adjustment: increase = (EPS × target payout − last dividend) × (1 ÷ adjustment years); update the dividend each year before Year 2.",fixed=True),
 q("If the proposed share repurchase is implemented immediately, Kovacs's revised EPS forecast for Brenta for the next year would be closest to:",["$2.23.","$2.46.","$2.65."],1,
  ["This does not adjust for the new share count: (7,560,000 − 547,200) ÷ 3,150,000 = $2.23.","Earnings = 2.40 × 3,150,000 = 7,560,000; borrowing cost = 3.80% × (48 × 300,000) = 547,200; shares after = 2,850,000; EPS = (7,560,000 − 547,200) ÷ 2,850,000 = $2.46.","This ignores the cost of borrowing: 7,560,000 ÷ 2,850,000 = $2.65."],
  ["its current share price is $48","after-tax cost of borrowing is 3.80%","300,000 shares are repurchased immediately"],"Debt-financed buyback: EPS = (earnings − after-tax interest on the borrowed funds) ÷ (shares − shares repurchased).",fixed=True),
 q("Which of the following characteristics of Brenta's board is most likely to pose the greatest potential governance concern?",["Number and type of committees","Roles of the CEO","Number of independent directors"],1,
  ["Incorrect. Brenta has the usual set of committees (audit, compensation, nomination, risk and compliance, governance).","Correct. The CEO also chairs the board (CEO duality), which may compromise the board's oversight role.","Incorrect. Seven of the 12 directors (58%) are independent, a majority."],
  ["is chaired by the company's CEO","seven of whom are independent"],"Check each board feature: CEO as chair (duality) is a governance weakness; a majority of independent directors and full committees are strengths.",fixed=False),
])
