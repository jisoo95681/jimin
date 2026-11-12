from lib15 import *
# ===== FI (M15): Aalto / Sierra Wealth Management (CDS credit events, price per 100 par, long/short trades, curve trades) [from cds-6] =====
sp,cp,du=2.07,1.00,4.52
price=100-(sp-cp)*du; pB=100-(sp-cp); pC=100-(cp-sp)*du
assert (round(price,2),round(pB,2),round(pC,2))==(95.16,98.93,104.84),(price,pB,pC)
body="""Katrin Aalto is a portfolio manager in the fixed-income division of Sierra Wealth Management (SWM), based in Denver. Aalto is running a training session for newly hired analysts Diego Ramos, Ivan Petrov, and Arun Mehta to examine the use of Credit Default Swaps (CDSs) in fixed-income portfolio management.

Aalto notes that a payment from the credit protection seller to the credit protection buyer is triggered whenever a credit event occurs. She asks each of the analysts to identify a credit event in the United States that will trigger a payment. The following are the responses of each analyst:

Ramos: "If the reference entity fails to make a scheduled interest or principal payment, it is recognized as a failure-to-pay credit event."
Petrov: "A change in seniority of outstanding obligations is also recognized as a credit event that will trigger a payment by the protection seller."
Mehta: "A declaration of bankruptcy by the reference entity is a credit event that will trigger a payment from the CDS seller."
To facilitate a discussion of CDS pricing and CDS trading strategies, Aalto presents the group with the information in Exhibit 1.

Exhibit 1: Select CDS Information
# CDS | Type | Credit Spread (bps) | Tenor (yrs.) | Coupon (bps) | Duration
CDX NA IG | Index | 62 | 5 | 100 | 4.71
CDX NA HY | Index | 355 | 5 | 500 | 4.30
Company A | Single-Name | 207 | 5 | 100 | 4.52
Company A | Single-Name | 281 | 10 | 100 | 7.31
Company B | Single-Name | 172 | 5 | 500 | 4.50
Company B | Single-Name | 338 | 10 | 500 | 8.05
Note: CDX NA IG is an index of CDSs of investment-grade North American corporations. CDX NA HY is an index of CDSs of high-yield North American corporations.

Aalto states, "I would like you to formulate appropriate CDS trading strategies using the information provided in the following statements:"

Statement 1: "Our economists expect the US economy to weaken over the coming year, with spreads on high-yield CDSs widening by 150 bps and spreads on investment-grade CDSs widening by 10 bps."
Statement 2: "Our analysts expect that the credit curve for Company A will steepen, whereas the credit curve for Company B is expected to flatten."
Only Mehta responds, as follows: "A trade that addresses Statement 2 would be to buy Company A CDSs with a 10-year tenor and sell Company A CDSs with a 5-year tenor. Alternatively, one could buy Company B CDSs with a 10-year tenor and sell Company B CDSs with a 5-year tenor.\""""
add('M15','Fixed Income',body,[
 q("With regard to Aalto's question on credit events, who is least likely correct?",["Mehta","Ramos","Petrov"],2,
  ["Incorrect. Bankruptcy is a credit event in the United States and elsewhere.","Incorrect. Failure to pay is a credit event in the United States and elsewhere.","Correct. In the United States a restructuring (a change in seniority of obligations) is not recognized as a credit event that triggers a payment; it is recognized outside the United States."],
  ["identify a credit event in the United States","A change in seniority of outstanding obligations"],"US credit events: bankruptcy and failure to pay (restructuring is a credit event outside the US only).",fixed=False),
 q("Based on Exhibit 1, the price per 100 par of Company A 5-year CDSs is closest to:",["95.16.","98.93.","104.84."],0,
  ["Upfront premium = (credit spread − coupon) × duration = (2.07% − 1.00%) × 4.52 = 4.84; price = 100 − 4.84 = 95.16.","This leaves out the duration: 100 − (2.07 − 1.00) = 98.93.","This reverses the sign of the spread difference: 100 − (1.00 − 2.07) × 4.52 = 104.84."],
  ["@row:Company A","Credit Spread (bps)"],"CDS price per 100 par = 100 − (credit spread − fixed coupon) × duration.",fixed=True),
 q("Based on the information in Exhibit 1 and Statement 1, an appropriate long/short trade would be to:",["sell CDX NA HY and buy CDX NA IG.","buy CDX NA HY and sell CDX NA IG.","sell Company B CDSs and buy Company A CDSs."],1,
  ["Incorrect. Selling HY protection and buying IG protection is appropriate when the economy is expected to strengthen.","Correct. The economy is expected to weaken, so spreads widen: high-yield spreads (+150 bps) widen by more than investment-grade spreads (+10 bps). Buying CDX NA HY protection gains more than the loss on the sold CDX NA IG.","Incorrect. Company B (500 bps coupon) is high yield and Company A (100 bps) is investment grade; selling B protection and buying A protection loses when spreads widen."],
  ["expect the US economy to weaken","spreads on high-yield CDSs widening by 150 bps","spreads on investment-grade CDSs widening by 10 bps"],"Buy protection = short credit (gains when spreads widen); weaker economy → HY widens more than IG → buy HY protection, sell IG protection.",fixed=False),
 q("Is Mehta's response to Statement 2 by Aalto most likely correct?",["No, he is incorrect about the trade involving Company B CDSs.","Yes.","No, he is incorrect about the trade involving Company A CDSs."],0,
  ["Correct. Company B's curve is expected to flatten, so the appropriate trade is to sell the long-term (10-year) CDS and buy the short-term (5-year) CDS. Mehta proposes the opposite for Company B.","Incorrect. Only the Company A trade is correct.","Incorrect. For Company A (steepening) the right trade is to buy the 10-year and sell the 5-year CDS, which is exactly what Mehta says."],
  ["the credit curve for Company A will steepen, whereas the credit curve for Company B is expected to flatten","buy Company B CDSs with a 10-year tenor and sell Company B CDSs with a 5-year tenor"],"Curve trades: steepening → buy long tenor, sell short tenor; flattening → sell long tenor, buy short tenor.",fixed=False),
])
