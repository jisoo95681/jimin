from lib15 import *
# ===== FSA (M15): Frost / Nair, Corvus Life Group and a bank file (insurer investment returns, bank earnings quality) [from fsa4-nanlife] =====
ld=(7900,8300); ds=(128500,120200); ii=(5980,5420); gl=(410,-95)
avg=((ld[0]+ds[0])+(ld[1]+ds[1]))/2; r=(ii[0]+gl[0])/avg; rA=ii[0]/avg; avgD=(ds[0]+ds[1])/2; rC=(ii[0]+gl[0])/avgD
assert (round(r*100,1),round(rA*100,1),round(rC*100,1))==(4.8,4.5,5.1),(r,rA,rC)
yrs=[2018,2017,2016,2015,2014]
inti=[598200,575500,568000,569400,561000]; intx=[212000,217300,231100,244800,246200]
nii=[a-b for a,b in zip(inti,intx)]; trd=[2900,4700,6100,-800,14200]; oth=[126300,117600,109800,110900,93900]
tot=[n+t+o for n,t,o in zip(nii,trd,oth)]
assert nii==[386200,358200,336900,324600,314800] and tot==[515400,480500,452800,434700,422900]
gr=[nii[i]/nii[i+1]-1 for i in range(4)]; assert [round(x*100,1) for x in gr]==[7.8,6.3,3.8,3.1] and gr[0]>gr[1]>gr[2]>gr[3]
pn=[nii[i]/tot[i] for i in range(5)]; assert max(pn)-min(pn)<0.006 and all(0.743<x<0.750 for x in pn),pn
prov=[7900,12600,9300,9700,6600]; ebt=[108900,89400,85700,74100,81300]
dE=ebt[0]-ebt[1]; dP=prov[1]-prov[0]; share=dP/dE
assert (dE,dP,round(share*100,1),round(dP/ebt[0]*100,1),round(prov[0]/ebt[0]*100,1))==(19500,4700,24.1,4.3,7.3)
body="""Daniel Frost and Priya Nair, interns in the financial institutions division of an investment firm, are cleaning up outstanding issues in a few files.

They start by examining the investment allocation and returns on the investment portfolio for Corvus Life Group, a life and health insurance company, using data Frost prepared (Exhibit 1).

Exhibit 1: Investment Allocation and Returns, Corvus Life Group, in $ Millions
# Investment portfolio as of 31 December | 2018 | 2017
Loans and deposits | 7,900 | 8,300
Debt securities | 128,500 | 120,200
Equity securities | 36,400 | 30,900
# Investment returns for the year ending 31 December | 2018 | 2017
Interest income | 5,980 | 5,420
Gains (losses) on fixed-income investments | 410 | (95)

Frost asks, "Why does Corvus have a much larger portion of its investment portfolio in equity securities compared with the property and casualty company we were working on yesterday?"

Nair replies, "Corvus can take greater risks with its investments for two reasons: First, its claims have a shorter duration, and second, its claims are relatively more predictable."

Next, they turn their attention to a commercial bank file that still required some work on the assessment of earnings quality, using summary earnings information prepared by Nair (Exhibit 2).

Exhibit 2: Selected Earnings Information from Bank File, in $ Thousands
# Item | 2018 | 2017 | 2016 | 2015 | 2014
Interest income | 598,200 | 575,500 | 568,000 | 569,400 | 561,000
Interest expense | 212,000 | 217,300 | 231,100 | 244,800 | 246,200
Net interest income | 386,200 | 358,200 | 336,900 | 324,600 | 314,800
Trading income | 2,900 | 4,700 | 6,100 | (800) | 14,200
Other income | 126,300 | 117,600 | 109,800 | 110,900 | 93,900
Total income net of interest expense | 515,400 | 480,500 | 452,800 | 434,700 | 422,900
Provision for credit losses | 7,900 | 12,600 | 9,300 | 9,700 | 6,600
Earnings before taxes | 108,900 | 89,400 | 85,700 | 74,100 | 81,300

Nair states, "We have to finish the CAMELS (capital adequacy, asset quality, management capabilities, earnings sufficiency, liquidity position, and sensitivity to market risk) analysis on this file. In my preliminary review of the bank's earnings information, I assigned a score reflecting high quality of earnings, based on the following points:

Point 1: The proportion of total income from net interest income has been stable in the most recent years.
Point 2: Net interest income has been growing at a constant rate over the period.
Point 3: The trading income is volatile, but it is a small portion of the earnings."

Frost replies, "I think we need to dig a little deeper. We need to look at the estimates that are used to determine earnings and whether the bank is using them to manage earnings before taxes (EBT). The provision for credit losses is an estimate where management can exercise wide discretion. Let's look at what portion of the 2018 increase in EBT comes from the change in that estimate.\""""
add('M15','Financial Statement Analysis',body,[
 q("The average return on fixed-income assets for Corvus in 2018 is closest to:",["4.5%.","4.8%.","5.1%."],1,
  ["This leaves out the gains on fixed-income investments: 5,980 ÷ 132,450 = 4.5%.","Return = (interest income + gains on fixed-income investments) ÷ average fixed-income assets = (5,980 + 410) ÷ [½ (7,900 + 128,500) + ½ (8,300 + 120,200)] = 6,390 ÷ 132,450 = 4.8%.","This leaves out loans and deposits from fixed-income assets: 6,390 ÷ 124,350 = 5.1%."],
  ["@row:Loans and deposits","@row:Debt securities","@row:Interest income","@row:Gains (losses) on fixed-income investments"],"Fixed-income return = (interest income + gains/losses on fixed-income) ÷ AVERAGE (loans and deposits + debt securities).",fixed=True),
 q("Nair's reply to Frost's question concerning the higher portion of equity securities in Corvus's investment portfolio is best described as correct with respect to:",["both reasons.","only the first reason.","only the second reason."],2,
  ["Incorrect. The claims of a life and health insurer have a LONGER duration than those of a P&C company, so the first reason is wrong.","Incorrect. The first reason (shorter duration) is wrong; the second reason is the correct one.","Correct. Corvus is a life and health insurer: its claims are more predictable and have a longer duration than P&C claims. Only the predictability reason is stated correctly."],
  ["its claims have a shorter duration","its claims are relatively more predictable"],"Life and health insurers: claims more predictable AND longer duration than P&C, so they can hold more equities.",fixed=False),
 q("Using Exhibit 2, which of Nair's points in support of the CAMELS score she assigns for earnings quality is least accurate? The point concerning:",["growth in net interest income.","trading income volatility.","net interest income proportion."],0,
  ["Correct. Net interest income growth has been rising (3.1%, 3.8%, 6.3%, 7.8%), not constant.","Incorrect. Trading income is volatile but a small portion of income (about 0.6% in 2018): this supports earnings quality.","Incorrect. Net interest income is about 74-75% of total income net of interest expense in each year: stable, which supports earnings quality."],
  ["Net interest income has been growing at a constant rate over the period.","@row:Net interest income","@row:Trading income"],"Check each point with the table: growth rate (year over year) and portion of total; a 'constant' claim fails when growth changes every year.",fixed=False),
 q("Based on Exhibit 2, the proportion of the increase in the 2018 earnings before taxes that comes from the change in the provision for credit losses is closest to:",["4.3%.","7.3%.","24.1%."],2,
  ["This is the change in the provision (4,700) divided by 2018 EBT: 4,700 ÷ 108,900 = 4.3%.","This is the provision as a proportion of 2018 EBT, ignoring changes: 7,900 ÷ 108,900 = 7.3%.","EBT rose by 108,900 − 89,400 = 19,500 while the provision fell by 12,600 − 7,900 = 4,700: 4,700 ÷ 19,500 = 24.1%."],
  ["@row:Provision for credit losses","@row:Earnings before taxes","the 2018 increase in EBT"],"Share of the EBT increase from the provision = change in provision ÷ change in EBT (both year-over-year).",fixed=True),
])
