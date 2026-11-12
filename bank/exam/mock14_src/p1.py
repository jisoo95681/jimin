from lib14 import *
# ================= 1 Ethics =================
body="""Lena Marchetti, CFA, is a senior research analyst at Delmar Securities, a regional brokerage firm whose clients include pension funds, mutual funds and retail investors.

On Monday morning Marchetti changes her recommendation on Orrin Industries from "buy" to "sell". At 3:00 p.m. she telephones three large institutional clients to tell them about the change. The recommendation is posted to Delmar's website for all other clients at 4:00 p.m.

Marchetti's research note states: "Orrin's earnings will fall by 30% next year and the shares will decline to 40 by June." The note does not mention that the forecast rests on her assumption of a 20% rise in raw material prices, which she considers likely but which is not based on any company disclosure.

Gantry Corporation, a company that Marchetti covers, invites her to its investor day at an overseas plant. Gantry offers to pay for her business-class airfare and hotel. Delmar's gift policy allows modest gifts but does not mention travel. At the event, Gantry gives every attendee a pen set worth about US$15. Marchetti accepts both the trip and the pen set.

Aaron Pike, CFA, a Delmar portfolio manager, regularly refers clients who need tax advice to a local tax attorney. The attorney pays Pike a fee for each referral. Pike has told Delmar's compliance department about the arrangement but has not told his clients."""
add('Ethical and Professional Standards',body,[
 q("Marchetti's handling of the change in her recommendation on Orrin most likely violated Standard III(B):",["Fair Dealing.","Loyalty, Prudence, and Care.","Priority of Transactions."][:0] or ["Priority of Transactions.","Fair Dealing.","Loyalty, Prudence, and Care."],1,
  ["Priority of Transactions governs the order in which client and personal trades are executed; it is not about when clients are told about a recommendation.","Standard III(B) requires members to give all clients a fair opportunity to act on a recommendation. Marchetti informed three institutional clients an hour before the other clients, so she disseminated the change unfairly.","Loyalty, Prudence, and Care concerns the duty to act in clients' best interests and to preserve confidentiality; the problem here is the unequal timing of the dissemination."],
  ["telephones three large institutional clients","The recommendation is posted to Delmar's website for all other clients at 4:00 p.m."],"Fair Dealing: communicate a recommendation or a change to all affected clients at the same time (or give all a fair chance to act)."),
 q("With respect to the research note on Orrin, Marchetti most likely violated Standard V(B):",["Communication with Clients and Prospective Clients.","Diligence and Reasonable Basis.","Material Nonpublic Information."][:0] or ["Diligence and Reasonable Basis.","Communication with Clients and Prospective Clients.","Material Nonpublic Information."],1,
  ["Diligence and reasonable basis is not the issue: she has an assumption that she considers likely, but the problem is how the forecast is communicated.","Marchetti presented a forecast as certain and left out the key assumption behind it. Standard V(B) requires members to separate fact from opinion and to include the important factors of the analysis.","Her information is her own assumption, not material nonpublic information obtained from the company."],
  ["The note does not mention that the forecast rests on her assumption","earnings will fall by 30% next year"],"V(B): separate fact from opinion; state the key assumptions and the limitations of the analysis."),
 q("Does Marchetti violate the Standards by accepting the Gantry trip and the pen set?",["No.","Yes, by accepting the trip only.","Yes, by accepting both the trip and the pen set."],1,
  ["Accepting paid travel from a company she covers compromises, or appears to compromise, her independence and objectivity, so \"no\" is incorrect.","Under Standard I(B), analysts should use commercial transportation at their own or their firm's expense. The business-class trip paid by Gantry is a violation; a pen set of about US$15 is a modest token gift and is acceptable.","A pen set of this value is a token gift that does not by itself impair independence."],
  ["offers to pay for her business-class airfare and hotel","pen set worth about US$15"],"I(B): no paid travel from covered companies (use your own or your firm's expense); modest token gifts are acceptable.",fixed=True),
 q("Which of the following actions is Pike most likely required to take to comply with Standard VI(C): Referral Fees?",["Disclose the referral fee arrangement to clients and prospective clients before they use the attorney's services.","Refuse all fees from the tax attorney.","Pay the referral fees to Delmar."],0,
  ["Standard VI(C) requires members to disclose referral compensation to their employer, clients and prospective clients so that they can evaluate the objectivity of the recommendation. Pike has informed only his employer, so he must also inform clients and prospects before the services are provided (and update them periodically).","Referral fees are allowed if they are disclosed; refusing all fees is not required.","The fee does not have to be paid over to the employer; the requirement is disclosure."],
  ["has not told his clients","pays Pike a fee for each referral"],"VI(C): disclose referral fees to the employer, clients and prospects BEFORE the services are provided.",fixed=False),
])
# ================= 2 FSA-A: pension and RSUs =================
sv,pbo,dr,pa,er,pscam,alam=1950,62000,0.055,55000,0.068,120,80
us=sv+dr*pbo-er*pa+pscam+alam; usA=sv+dr*pbo-0.0+0  # placeholder
actual=4100
usB=sv+dr*pbo-er*pa; usC=sv+dr*pbo-actual+pscam+alam
ifrs=sv+dr*(pbo-pa)
assert round(us)==1820 and round(usB)==1620 and round(usC)==1460 and round(ifrs)==2335
n_v,gfv,vp,n_f,ffv,tax=40000,18.0,23.0,3000,16.0,0.25
exp=n_v*gfv-n_f*ffv; expB=n_v*vp-n_f*ffv; expC=n_v*gfv
wind=(vp-gfv)*n_v*tax
assert (exp,expB,expC,wind)==(672000,872000,720000,50000)
body="""Marco Esposito, CFA, analyzes the financial statements of Halvern Industries Inc. (Halvern), a manufacturer that reports under US GAAP and is taxed at 25%. Halvern sponsors a defined benefit pension plan and grants restricted stock units (RSUs) to its managers.

Exhibit 1 shows data for the plan for the most recent fiscal year (US$ thousands).

Exhibit 1: Halvern Defined Benefit Plan, Most Recent Fiscal Year
# Item | Amount
Current service cost | 1,950
Discount rate | 5.5%
Projected benefit obligation, beginning of year | 62,000
Fair value of plan assets, beginning of year | 55,000
Expected rate of return on plan assets | 6.8%
Actual return on plan assets | 4,100
Amortization of prior service cost | 120
Amortization of actuarial losses | 80

Esposito wants to compare Halvern with a peer that reports under IFRS. No plan amendments occurred in the year, so no past service cost arises under IFRS.

During the year 40,000 RSUs vested. They were granted at the start of the year with a grant-date fair value of $18 per RSU, and Halvern's share price on the vesting date was $23. In the same year 3,000 unvested RSUs from an earlier grant (grant-date fair value $16) were forfeited, and the compensation expense previously recognized for them is reversed."""
add('Financial Statement Analysis',body,[
 q("The periodic pension cost that Halvern reports in its income statement under US GAAP is closest to:",["US$1,460 thousand.","US$1,620 thousand.","US$1,820 thousand."],2,
  ["This uses the actual return on plan assets (4,100) instead of the expected return and is therefore wrong: 1,950 + 3,410 − 4,100 + 120 + 80 = 1,460.","This leaves out the amortization of prior service cost and of actuarial losses (120 + 80): 1,950 + 3,410 − 3,740 = 1,620.","US GAAP periodic pension cost = service cost + interest cost on the beginning obligation − EXPECTED return on assets + amortization of prior service cost + amortization of actuarial losses = 1,950 + (5.5% × 62,000 = 3,410) − (6.8% × 55,000 = 3,740) + 120 + 80 = 1,820."],
  ["@row:Expected rate of return on plan assets","@row:Amortization of prior service cost","@row:Amortization of actuarial losses"],"US GAAP: service + interest − EXPECTED return + amortization of prior service cost and of actuarial losses."),
 q("If Halvern reported under IFRS, the pension expense recognized in profit or loss would be closest to:",["US$1,620 thousand.","US$2,335 thousand.","US$1,820 thousand."],1,
  ["This is the US GAAP cost without the amortization items, not the IFRS figure.","Under IFRS, profit or loss includes the current service cost and the net interest on the net defined benefit liability: 1,950 + 5.5% × (62,000 − 55,000) = 1,950 + 385 = 2,335. Remeasurements go to OCI and nothing is amortized.","This is the US GAAP figure, which includes expected return and amortization; IFRS uses net interest."],
  ["No plan amendments occurred in the year, so no past service cost arises under IFRS","@row:Fair value of plan assets, beginning of year"],"IFRS: P&L = service cost + net interest (discount rate × net liability); remeasurements in OCI, no amortization.",fixed=True),
 q("The compensation expense that Halvern recognizes for the RSUs in the year is closest to:",["$672,000.","$720,000.","$872,000."],0,
  ["Expense uses the grant-date fair value for the RSUs that vested and reverses the expense recognized for the forfeited ones: 40,000 × $18 − 3,000 × $16 = $672,000.","This leaves out the reversal for the forfeitures: 40,000 × $18 = $720,000.","This uses the share price on the vesting date ($23) instead of the grant-date fair value: 40,000 × $23 − $48,000 = $872,000."],
  ["grant-date fair value of $18 per RSU","the compensation expense previously recognized for them is reversed"],"RSU expense = vested × GRANT-DATE fair value − reversal for forfeitures (at their own grant-date value); the vesting-date price only matters for the tax effect."),
 q("The tax effect of the RSUs vesting, under US GAAP, is closest to:",["a $50,000 shortfall that increases income tax expense.","a $50,000 windfall recorded in equity.","a $50,000 windfall that reduces income tax expense."],2,
  ["The vesting-date price ($23) is above the grant-date fair value ($18), so the tax deduction exceeds the expense: it is a windfall, not a shortfall.","Under current US GAAP the windfall is recognized in income tax expense, not in equity.","Windfall = (23 − 18) × 40,000 × 25% = $50,000, recognized as a reduction of income tax expense."],
  ["share price on the vesting date was $23","taxed at 25%"],"Windfall or shortfall = (vesting-date price − grant-date fair value) × RSUs vested × tax rate; under US GAAP it goes through income tax expense.",fixed=False),
])
# ================= 3 FSA-B: equity method and translation =================
pct,cost,bv,fv,life=0.30,520.0,1400.0,1550.0,10
ni,div=300.0,120.0
excess_ppe=pct*150.0; amort=excess_ppe/life
carry=cost+pct*ni-pct*div-amort; carryA=cost+pct*ni-pct*div; carryC=cost+pct*ni-amort
assert (round(carry,1),round(carryA,1),round(carryC,1))==(569.5,574.0,605.5)
body="""Anneli Berg, CFA, reviews the consolidated statements of Nordic Harvest AB (Nordic), a Swedish food group that reports in US dollars under US GAAP.

On 1 January 20X1, Nordic paid $520 million for 30% of Pelham Foods, which it accounts for with the equity method. On that date Pelham's net assets had a book value of $1,400 million and a fair value of $1,550 million. The entire difference between fair value and book value relates to plant and equipment, which has 10 years of remaining life and is depreciated on a straight-line basis. In 20X1 Pelham reported net income of $300 million and paid dividends of $120 million.

Nordic also owns two foreign subsidiaries.

Subsidiary N operates in Norway. Its functional currency is the Norwegian krone (NOK). Its balance sheet at year end shows positive net assets, and the NOK appreciated against the US dollar during the year. Nordic translates Subsidiary N with the current rate method.

Subsidiary D operates in Denmark. Its functional currency is the US dollar, and Nordic remeasures it with the temporal method. Subsidiary D has net monetary liabilities, and the Danish krone (DKK), in which it holds them, appreciated against the US dollar during the year."""
add('Financial Statement Analysis',body,[
 q("At the end of 20X1, the carrying value of Nordic's investment in Pelham is closest to:",["$569.5 million.","$574.0 million.","$605.5 million."],0,
  ["Carrying value = cost + share of net income − dividends received − amortization of the excess attributable to plant and equipment = 520 + (0.30 × 300 = 90) − (0.30 × 120 = 36) − (0.30 × (1,550 − 1,400) ÷ 10 = 4.5) = $569.5 million.","This leaves out the amortization of the fair value excess on plant and equipment (4.5): 520 + 90 − 36 = $574.0 million.","This does not deduct the dividends received (36), which reduce the investment account under the equity method: 520 + 90 − 4.5 = $605.5 million."],
  ["paid $520 million for 30% of Pelham Foods","has 10 years of remaining life","paid dividends of $120 million"],"Equity method: cost + share of net income − share of dividends − amortization of the fair value excess on depreciable assets."),
 q("The translation of Subsidiary N's financial statements most likely results in a:",["negative cumulative translation adjustment in equity.","positive cumulative translation adjustment in equity.","gain in net income."],1,
  ["A negative adjustment would arise if the NOK had depreciated against the US dollar.","With the current rate method, positive net assets are exposed; when the foreign (local) currency appreciates, their value in dollars rises and a positive translation adjustment is recorded in equity (OCI).","Under the current rate method the translation adjustment goes to equity, not to net income."],
  ["positive net assets","NOK appreciated against the US dollar","current rate method"],"Current rate method: exposed item = net assets; local currency appreciation → positive CTA (equity); depreciation → negative CTA.",fixed=False),
 q("The remeasurement of Subsidiary D most likely results in a:",["gain in net income.","loss in net income.","positive cumulative translation adjustment in equity."],1,
  ["A gain would arise if the DKK had depreciated: the net monetary liabilities would then be worth fewer dollars.","Under the temporal method, net monetary liabilities are exposed. The DKK appreciated, so the liabilities are worth more dollars and a remeasurement LOSS is recognized in net income.","The temporal method puts the remeasurement result in net income, not in a translation adjustment in equity."],
  ["remeasures it with the temporal method","net monetary liabilities"],"Temporal method: net monetary liabilities + foreign currency appreciation → loss in net income (depreciation → gain).",fixed=False),
])
