from lib15 import *
# ===== FSA (M15): Lund / Northgate Securities, Rennes Industrie (investment classification IFRS 9, SPE) [from ic1-1] =====
cost=[30000,45000,60000]; m17=[33000,43000,64500]; m18=[31500,41500,66000]
carry=m18[0]+m18[1]+cost[2]; allcost=sum(cost); allmv=sum(m18)
assert (carry,allcost,allmv)==(133000,135000,139000)
gain=m18[2]-m17[2]; assert gain==1500
assert m18[1]<cost[1] and m18[0]>cost[0] and m18[2]>cost[2]
body="""Anders Lund, CFA, is an equity analyst with Northgate Securities. Lund is preparing a research report on Rennes Industrie, SA, a publicly traded company based in France that complies with IFRS 9. As part of his analysis, Lund has assembled data gathered from the financial statement footnotes of Rennes's 2018 Annual Report and from discussions with company management. Lund is concerned about the effect of this information on Rennes's future earnings.

Information about Rennes's investment portfolio for the years ended 31 December 2017 and 2018 is presented in Exhibit 1. As part of his research, Lund is considering the possible effect on reported income of Rennes's accounting classification for fixed income investments.

Exhibit 1: Rennes's Investment Portfolio (€ Thousands)
# Characteristic | Alder AG | Brookes Corp | Corvin SA
Classification | FVPL | FVOCI | Amortized cost
Cost* | €30,000 | €45,000 | €60,000
Market value, 31 December 2017 | 33,000 | 43,000 | 64,500
Market value, 31 December 2018 | 31,500 | 41,500 | 66,000
Note: * All securities were acquired at par value.

In addition, Rennes's annual report discusses a transaction under which receivables were securitized through a special purpose entity (SPE) for Rennes's benefit."""
add('M15','Financial Statement Analysis',body,[
 q("The balance sheet carrying value of Rennes's investment portfolio (in € thousands) at 31 December 2018 is closest to:",["133,000.","135,000.","139,000."],0,
  ["Under IFRS 9, FVPL and FVOCI securities are carried at market value and amortized cost securities at historical cost: 31,500 + 41,500 + 60,000 = €133,000.","This carries all three securities at cost: 30,000 + 45,000 + 60,000 = 135,000.","This carries all three securities at 2018 market value: 31,500 + 41,500 + 66,000 = 139,000."],
  ["@row:Classification","@row:Cost*","@row:Market value, 31 December 2018"],"Carrying value: FVPL and FVOCI at market value, amortized cost at cost (acquired at par, no amortization).",fixed=True),
 q("Compared to Rennes's reported earnings before taxes in 2018, if Corvin had been classified as a FVPL security, the earnings before taxes (in € thousands) would have been:",["the same.","€1,500 lower.","€1,500 higher."],2,
  ["Incorrect. FVPL classification brings the unrealized gain or loss into income, so earnings would change.","Incorrect. There was an unrealized gain, not a loss, so earnings would be higher.","Correct. Unrealized gains and losses are included in income for FVPL securities: during 2018 Corvin's market value rose from 64,500 to 66,000, a gain of €1,500."],
  ["@row:Market value, 31 December 2017","@row:Market value, 31 December 2018","if Corvin had been classified as a FVPL security"],"FVPL: the change in market value over the year goes through net income (use the 2017 and 2018 market values).",fixed=False),
 q("Rennes's reported interest income would be lower if the cost was the same but the par value (in € thousands) of:",["Alder was €31,500.","Brookes was €41,500.","Corvin was €66,000."],1,
  ["Incorrect. Par above cost means a discount, which is amortized upward: interest income would be higher.","Correct. Par (41,500) below the cost (45,000) means a premium; amortizing the premium under the effective interest method makes interest income lower than the coupon received.","Incorrect. Par above cost means a discount: interest income would be higher."],
  ["@row:Cost*","Note: * All securities were acquired at par value."],"Premium (par < cost) → interest income lower than cash coupon; discount (par > cost) → higher.",fixed=False),
 q("Rennes's special purpose entity is most likely to be:",["consolidated on Rennes's financial statements.","held off-balance sheet.","consolidated on Rennes's financial statements only if it is a \"qualifying SPE.\""],0,
  ["Correct. Under IFRS, SPEs conducted for the benefit of the sponsoring entity must be consolidated; IFRS has no qualifying SPE.","Incorrect. Under IFRS the SPE is not kept off-balance sheet.","Incorrect. Qualifying SPEs existed only under US GAAP (now eliminated); IFRS does not allow that classification."],
  ["special purpose entity (SPE) for Rennes's benefit","complies with IFRS 9"],"IFRS: consolidate an SPE run for the sponsor's benefit; no qualifying SPE exception.",fixed=False),
])
