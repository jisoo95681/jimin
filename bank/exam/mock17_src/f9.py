from lib17 import *
# ===== Alt (Mock 17, from Mock 6 Q2, Mock 9 Q40, Mock 10 Q37, Q38): REIT vs REOC, REIT risk factor, unreimbursed operating expenses, real estate cycle statements =====
def prop(gpr,ltl,vac_pct,reimb,other,fee_pct,opex):
    gri=gpr-ltl; vac=gri*vac_pct; nri=gri-vac; egi=nri+reimb+other; fee=egi*fee_pct; tot=fee+opex
    return dict(gri=gri,vac=vac,nri=nri,egi=egi,fee=fee,tot=tot,noi=egi-tot,unr=(tot-reimb)/egi)
p1=prop(3600000,180000,0.15,240000,300000,0.035,1480000); p2=prop(2800000,140000,0.04,0,45000,0.035,900000)
assert (round(p1['unr']*100,1),round(p2['unr']*100,1))==(39.5,38.1)
assert (round(p1['noi']),round(p2['noi']),round(p1['egi']),round(p2['egi']),round(p1['fee']),round(p2['fee']))==(1846355,1607649,3447000,2598600,120645,90951)
body="""Part 1
Gianni Moretti is a financial adviser specializing in commercial real estate investing. He meets with Karen Doyle, a new client, who wants to diversify her portfolio by adding real estate investments to it.

Using data from an appraisal-based index, Moretti discusses real estate return and risk statistics with Doyle and compares them to the return and risk of Doyle's current portfolio of stocks and bonds. Based on Doyle's investment objectives, Moretti recommends the following types of investments:

Investment 1: An equity real estate investment trust (REIT);
Investment 2: A real estate operating company (REOC).

Part 2
Daniel Park, CFA, is an investment manager looking to diversify his portfolio by adding equity real estate investments. Park and his investment analyst, Elena Marsh, are discussing whether they should invest in publicly traded real estate investment trusts or public real estate operating companies. Marsh gathers data on two specific REITs shown in Exhibit 1.

Exhibit 1: Select REIT Information
# Item | REIT A | REIT B
Property subsector | Retail (shopping centers) | Storage

Part 3
Sofia Martins is an alternative investment analyst for a US investment management firm, Orion Brothers. Orion's chief investment officer, Daniel Cho, has informed Martins that he wants to reduce the amount invested in traditional asset classes and gain exposure to the real estate sector by acquiring commercial property in the United States. Martins is asked to analyze potential commercial real estate investments for Orion Brothers. Selected data on two commercial real estate properties are shown in Exhibit 2.

Exhibit 2: Selected Property Data
# Item | Property 1 | Property 2
Property type | Downtown Office | Multi-Family Building
Location | Chicago | Denver
Occupancy | 85.00% | 96.00%
Gross potential rental income | $3,600,000 | $2,800,000
Loss to lease | ($180,000) | ($140,000)
Gross rental income | $3,420,000 | $2,660,000
Vacancy loss | ($513,000) | ($106,400)
Net rental income | $2,907,000 | $2,553,600
Expense reimbursement revenue | $240,000 | $0
Other income (includes % rent) | $300,000 | $45,000
Effective gross income | $3,447,000 | $2,598,600
Property management fees | ($120,645) | ($90,951)
Other operating expenses | ($1,480,000) | ($900,000)
Net operating income | $1,846,355 | $1,607,649

Cho explains that the multi-family property in Denver and the office property in Chicago have to absorb their operating expenses: only the office property is partly reimbursed by its tenants.

Cho comments to Martins that these properties may be in different phases of the real estate cycle. He specifically cites the differences between gross potential rental income and gross rental income in making his argument. In response to Cho's comments, Martins makes the two following statements about the office building in Chicago:

Statement 1:
I believe that the office market in Chicago is likely to enter the recovery stage of the real estate cycle within two years.

Statement 2:
I believe that the high vacancy rates indicate that the net operating income of the office building has the potential to improve within two years."""
add('M17','Alternative Investments',body,[
 q("Compared to Investment 2 recommended by Moretti, Investment 1 most likely:",["requires less expertise in real estate investing.","is better able to hold properties under development.","avoids double taxation on dividends received by investors."],2,
  ["Incorrect. Both public REITs and public REOCs are professionally managed, so both require much less expertise than private real estate investing.","Incorrect. REITs have limits on non-qualifying activities such as merchant development; REOCs are the vehicle for development of for-sale properties.","Correct. A REIT passes income through, avoiding corporate income tax, so only the investor pays tax on the dividends; a REOC is an ordinary taxable company, so dividends are taxed twice."],
  ["Investment 1: An equity real estate investment trust (REIT)","Investment 2: A real estate operating company (REOC)"],"REIT vs REOC: REIT = pass-through, high payout, no double taxation, limited development; REOC = taxable, retains earnings, can develop and offer non-qualifying services.",fixed=False),
 q("The risk factor most likely to adversely affect an investment in REIT A is:",["new competitive facilities.","obsolescence of existing space.","tenants' sales per square foot."],2,
  ["Incorrect. New competing facilities (easy entry, overbuilding) are the main risk for storage REITs.","Incorrect. Obsolescence of existing space is a typical concern for office REITs.","Correct. REIT A owns shopping centers; tenants' sales per square foot is the risk measure for retail REITs."],
  ["@row:Property subsector"],"REIT risk factors by sector: retail → tenants' sales per square foot; office → obsolescence of space; storage → new competing facilities (easy entry).",fixed=False),
 q("Which of the following statements is most accurate regarding the effect of unreimbursed operating expenses on the NOI of the Chicago and Denver properties?",["The NOI of the multi-family property in Denver is more negatively affected by unreimbursed operating expenses than is the NOI of the office property in Chicago.","The NOIs of both properties are affected similarly by unreimbursed operating expenses.","The NOI of the office property in Chicago is more negatively affected by unreimbursed operating expenses than is the NOI of the multi-family property in Denver."],2,
  ["Incorrect. Denver's unreimbursed expenses are 990,951 ÷ 2,598,600 = 38.1% of effective gross income, lower than Chicago's.","Incorrect. The two ratios (39.5% and 38.1%) differ.","Correct. Unreimbursed operating expenses as a share of effective gross income: Chicago (120,645 + 1,480,000 − 240,000) ÷ 3,447,000 = 39.5%; Denver (90,951 + 900,000 − 0) ÷ 2,598,600 = 38.1%. Chicago is affected more."],
  ["@row:Expense reimbursement revenue","@row:Effective gross income","@row:Other operating expenses"],"Unreimbursed operating expenses ÷ effective gross income (include management fees; subtract reimbursements); compare ratios, not dollars.",fixed=False),
 q("Which of the following responses is most accurate regarding Martins's Statement 1 and Statement 2?",["Statement 2 is more accurate than Statement 1.","Statement 1 is more accurate than Statement 2.","Statements 1 and 2 are both accurate statements."],1,
  ["Incorrect. Statement 2 implies NOI is already improving (expansion), which skips the recovery stage.","Correct. High vacancy likely means the office market is in the oversupply or recession phase; recovery within two years (Statement 1) is consistent with that, while NOI improving soon (Statement 2) describes expansion.","Incorrect. The statements imply different cycle phases, so both cannot be accurate."],
  ["the office market in Chicago is likely to enter the recovery stage of the real estate cycle within two years","high vacancy rates indicate"],"Real estate cycle: recovery → expansion → hyper-supply → recession; high vacancy = oversupply/recession, so next is recovery, not expansion.",fixed=False),
])
