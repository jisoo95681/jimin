from lib15 import *
import math
# ===== Deriv (M15): Wirth / ArbiCore Partners (arbitrage rules, index forward arbitrage, FRA, Treasury futures) [from d28-megaarb] =====
S,r,gm,F=2150,0.006,0.022,2138
fair=S*math.exp((r-gm)*1)
assert round(fair,2)==2115.87 and F>fair,fair
body="""Anton Wirth is chief investment officer of ArbiCore Partners (ACP), a multi-asset-class arbitrage hedge fund he recently launched. He has hired Jonas Pell, an analyst with a deep and broad background in security analysis but no experience in arbitrage investing. At their first research meeting, Wirth, who is mentoring Pell, makes the following comments regarding arbitrage using derivative contracts.

Comment 1: The two fundamental rules of arbitrage are that one does not use any of one's own money in a transaction, and one does not take any price risk.
Comment 2: A forward commitment is a derivative instrument in the form of a contract that provides the ability to lock in a price or rate at which one can buy or sell the underlying instrument at some future date or exchange an agreed-on amount of money on a series of dates.
Comment 3: There is a difference between the pricing and the valuation of forward commitments. Pricing involves determining the appropriate forward commitment price or rate, typically after it has been initiated. Valuation involves determining the appropriate rate of the forward commitment when initiating the contract.

Wirth asks Pell to evaluate a carry arbitrage trade for an equity index forward contract. He believes the contract may be mispriced. The index is currently trading at 2,150, and the forward contract expiring in one year is priced at 2,138. The index has a continuously compounded dividend yield of 2.20%, and the one-year continuously compounded interest rate is 0.60%. Wirth believes that at the time of the contract's expiration, the index will be trading at 2,160.

Pell sets out to evaluate arbitrage opportunities using forward rate agreements (FRAs). Wirth makes the following comments to Pell regarding FRAs: "An FRA has two counterparties, a fixed-rate receiver that is short Euribor and a floating-rate receiver that is long Euribor. The party that is long a 2 × 8 FRA must make a Euribor deposit in two months and earns the Euribor rate for the subsequent six months."

Pell also analyzes a US Treasury futures contract that he plans to use to hedge a corporate bond's interest rate risk. He researches the characteristics of Treasury futures and observes the following characteristics.

Characteristic 1: Long and short positions are marked to market each day. Therefore, the contract's market value at the end of each day is zero.
Characteristic 2: Eligible deliverable bonds can have various maturities and coupon rates, and the seller will receive the futures price adjusted by a conversion factor to account for any accrued interest.
Characteristic 3: The underlying deliverable bond in a US Treasury futures contract consists of a basket of bonds from which the short position can deliver the cheapest bond."""
add('M15','Derivatives',body,[
 q("Which of the comments made by Wirth regarding arbitrage is least likely correct?",["Comment 3","Comment 1","Comment 2"],0,
  ["Correct. Comment 3 reverses pricing and valuation: pricing determines the forward price or rate when the contract is initiated; valuation determines its value after initiation.","Incorrect. Comment 1 states the two arbitrage rules correctly.","Incorrect. Comment 2 defines a forward commitment correctly."],
  ["Pricing involves determining the appropriate forward commitment price or rate, typically after it has been initiated.","least likely correct"],"Pricing = set the forward price/rate at initiation; valuation = value of the contract after initiation.",fixed=False),
 q("Does Pell's stock index evaluation most likely identify an arbitrage opportunity?",["Yes, there is a reverse carry arbitrage opportunity","No, the forward is fairly priced","Yes, there is a carry arbitrage opportunity"],2,
  ["Incorrect. Reverse carry applies when the forward is priced below FV(S0), but here the forward is priced above it.","Incorrect. Fair forward price = 2,150 × e^(0.006 − 0.022) = 2,115.87, not 2,138.","Correct. The forward (2,138) is above the fair price of 2,115.87, so sell the forward, buy the index with borrowed money (carry arbitrage). The expected future index level of 2,160 has no effect on the analysis."],
  ["the forward contract expiring in one year is priced at 2,138","continuously compounded dividend yield of 2.20%","one-year continuously compounded interest rate is 0.60%"],"Fair forward = S0 × e^((r − dividend yield)T); forward above fair → carry arbitrage (sell forward, buy underlying); below → reverse carry.",fixed=False),
 q("Wirth's comments to Pell regarding FRAs are most likely:",["incorrect regarding counterparties and incorrect regarding their transactions.","correct regarding counterparties and incorrect regarding their transactions.","correct regarding counterparties and correct regarding their transactions."],1,
  ["Incorrect. Wirth describes the counterparties correctly.","Correct. The fixed-rate receiver is short Euribor and the floating-rate receiver is long Euribor, and the timing of a 2 × 8 FRA is described correctly; but an FRA does not require a Euribor deposit (it can be done with one, but it is not required).","Incorrect. The statement that the long party must make a Euribor deposit is wrong."],
  ["must make a Euribor deposit in two months","a fixed-rate receiver that is short Euribor and a floating-rate receiver that is long Euribor"],"FRA long = floating-rate receiver = long Euribor; the deposit is a way to hedge/replicate, not a requirement.",fixed=False),
 q("Which characteristic observed by Pell regarding Treasury futures is least likely correct?",["Characteristic 1","Characteristic 3","Characteristic 2"],2,
  ["Incorrect. Futures are marked to market daily, so the contract value at the end of each day is zero.","Incorrect. The short position can deliver the cheapest-to-deliver bond from the basket.","Correct. The conversion factor does not apply to accrued interest: it adjusts each eligible bond to an equivalent bond (for example a 6% coupon bond)."],
  ["to account for any accrued interest","least likely correct"],"Conversion factor equalizes deliverable bonds with different coupons and maturities (to a standard coupon); it does not account for accrued interest.",fixed=False),
])
