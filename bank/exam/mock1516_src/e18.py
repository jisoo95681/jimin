from lib15 import *
# ===== Econ (M16, re-skin of the missed vignette golden-island: tariffs and FDI, FDI and currency, forward rate, monetary policy, Mock 7 Q20) : Silver Cove =====
spot_usd=6.40; gbp_per_usd=0.64; rs,ruk,rus=0.072,0.039,0.031
kgbp=spot_usd/gbp_per_usd; fwd=kgbp*(1+rs)/(1+ruk); wA=spot_usd*(1+rs)/(1+rus); wB=kgbp*(1+ruk)/(1+rs)
assert (round(kgbp,2),round(fwd,2),round(wA,2),round(wB,2))==(10.00,10.32,6.65,9.69),(kgbp,fwd,wA,wB)
body="""Silver Cove is a flourishing country because of tourism. The island is governed by a Governor General, a parliamentary body of elected legislators, and a couple of agencies to regulate the island's economic and social environment. Recently, prospectors in the mountain range bordering the northern coast of the island discovered large deposits of silver, copper, and nickel. The government is concerned that development of these deposits will harm the tourist trade. Marta Valdis has been asked to participate in a series of fact-finding sessions conducted jointly by the island's ministries of finance and tourism. This blue-ribbon fact-finding committee has been meeting weekly for the past two months.

Valdis is concerned about the issue of tariffs because Silver Cove has relatively high tariffs on capital goods. Valdis states:

"Silver Cove will benefit from continuing to protect domestic capital goods by maintaining its relatively high tariff on non-domestic capital goods. High tariffs have little impact on foreign direct investment (FDI), and they generate revenue for the government."

Paolo Ferrante is Silver Cove's Interim Deputy Minister for Tourism. He states that he is not very knowledgeable about the mining business but believes that developing the island's deposits will affect the relative value of its currency, the kora (Kr). The current exchange rate of the kora against the US dollar is Kr6.40/USD. Ferrante states that increased FDI will cause the kora to strengthen against world currencies. Tourism will be harmed because goods and services priced in koras will appear more expensive to the non-domestic visitors who make up the bulk of the tourist trade.

Valdis shows the committee Exhibit 1, which contains data from the currency exchange markets relative to the kora.

Exhibit 1: Exchange Rates and Interest Rates
# Country | Current Spot Rates | One-Year Interest Rate (%)
Silver Cove | Kr6.40/USD | 7.2
United Kingdom | GBP0.64/USD | 3.9
United States | --- | 3.1

Silver Cove's Minister of Finance and president of the Central Bank, Samir Haddad, addresses the issues of potential inflation as the island transitions to greater growth. He assures the committee that Silver Cove's central bank stands ready to use monetary tools to prevent such inflation."""
add('M16','Economics',body,[
 q("Valdis's statement regarding tariffs is best described as:",["correct.","incorrect, because high tariffs support increases in FDI.","incorrect, because eliminating high tariffs on capital goods will increase Silver Cove's physical capital and contribute to higher productivity."],2,
  ["Incorrect. Developing countries benefit from policies that encourage investment from abroad, such as removing high tariffs on imported capital goods.","Incorrect. High tariffs do not support FDI; they discourage it.","Correct. Eliminating high tariffs on imported capital goods raises the capital stock and productivity."],
  ["relatively high tariff on non-domestic capital goods","High tariffs have little impact on foreign direct investment (FDI)"],"Growth policy: free trade and openness to FDI (low tariffs on capital goods) raise capital and productivity; protection does not.",fixed=False),
 q("Ferrante's statement about tourism and the currency exchange rate of the kora is best described as:",["incorrect, because increased FDI will likely lead to a weakening of the kora.","correct.","incorrect, because a stronger kora will make Silver Cove appear to be a less expensive tourist destination for non-domestic visitors."],1,
  ["Incorrect. Other things equal, increased FDI strengthens the currency.","Correct. Increased FDI strengthens the currency, and a stronger currency makes goods and services priced in it look more expensive to foreign visitors, at least in the short run.","Incorrect. A stronger kora makes the destination more, not less, expensive for foreign visitors."],
  ["increased FDI will cause the kora to strengthen against world currencies"],"FDI inflow → currency appreciates → domestic goods look more expensive to foreigners (tourism hurt).",fixed=False),
 q("Based on Exhibit 1, the one-year forward exchange rate of the Kr/GBP is closest to:",["Kr6.65/GBP.","Kr9.69/GBP.","Kr10.32/GBP."],2,
  ["This applies the interest rate ratio (kora over US rates) to the Kr/USD spot rate: 6.40 × 1.072 ÷ 1.031 = 6.65.","This inverts the ratio of the interest rates: 10.00 × 1.039 ÷ 1.072 = 9.69.","Kr/GBP spot = 6.40 ÷ 0.64 = 10.00; forward = spot × (1 + kora rate) ÷ (1 + pound rate) = 10.00 × 1.072 ÷ 1.039 = Kr10.32/GBP."],
  ["@row:Silver Cove","@row:United Kingdom","The current exchange rate of the kora against the US dollar is Kr6.40/USD"],"Forward (price/base) = spot × (1 + rate of the PRICE currency) ÷ (1 + rate of the BASE currency); build the cross rate first.",fixed=True),
 q("Which of the following will Haddad most likely use to address the monetary issues relating to greater growth of the island's economy? The central bank will:",["buy domestic securities from the private sector.","reduce the interest rate on loans to the private sector.","sell domestic securities to the private sector."],2,
  ["Incorrect. Buying securities increases the money supply.","Incorrect. A lower rate on loans increases the money supply; to restrain it the central bank would raise the rate.","Correct. The threat is inflation, so the central bank reduces the money supply by selling domestic securities."],
  ["potential inflation","stands ready to use monetary tools to prevent such inflation"],"Inflation threat → contractionary policy: sell securities, raise the policy rate (reduce the money supply).",fixed=False),
])
