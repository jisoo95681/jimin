from lib15 import *
# ===== Alt (M16): Norrland / Brightwater Capital, 80,000 sq ft office property (terminal value, cap rates, sales comparison, cost approach) [from re-delphinus2] =====
noi=[2780500,2741300,2775650,2812400,2866900,2945740]
g=noi[5]/noi[4]-1; assert abs(g-0.0275)<1e-6
gi,tc,dr=0.06,0.0575,0.085
tv=noi[5]/tc; tvB=noi[5]/gi; tvC=noi[4]/tc
assert (round(tv/1e6,1),round(tvB/1e6,1),round(tvC/1e6,1))==(51.2,49.1,49.9),(tv,tvB,tvC)
assert abs((dr-tc)-g)<1e-4
cagr=(noi[4]/noi[0])**0.25-1; assert round(cagr*100,2)==0.77 and round((dr-gi)*100,2)==2.5
px,sqft=46_000_000,80000
prices=[520,470,485]; adj=[-0.06,0.15,0.18]
adjp=[p*(1+a) for p,a in zip(prices,adj)]; val=sum(adjp)/3*sqft; valU=sum(prices)/3*sqft
assert [round(x,2) for x in adjp]==[488.8,540.5,572.3] and round(val/1e6,1)==42.7,(adjp,val)
assert round((px/val-1)*100)==8 and round((px/valU-1)*100)==17,((px/val-1),(px/valU-1))
assert 52+6-4==54
body="""Hanna Norrland, the chief investment officer of Brightwater Capital, asks an analyst at the firm, Victor Lund, to focus his analysis on an 80,000 square foot office property in Chicago. Norrland believes the property is underpriced and that Brightwater can purchase it for USD46 million.

Lund begins his analysis by assembling the data shown in Exhibit 1.

Exhibit 1: Six-Year NOI and DCF Assumptions for the Chicago Office Property
# Item | Year 1 | Year 2 | Year 3 | Year 4 | Year 5 | Year 6
NOI | $2,780,500 | $2,741,300 | $2,775,650 | $2,812,400 | $2,866,900 | $2,945,740
DCF Assumptions
Investment holding period | 5 years
Going-in cap rate | 6.00%
Terminal cap rate | 5.75%
Discount rate | 8.50%

Norrland asks Lund to value the property using the sales comparison method, and he compiles the data shown in Exhibit 2.

Exhibit 2: Sales Comparison Data for Comparable Office Properties
# Variable | Chicago Office | Sales Comp A | Sales Comp B | Sales Comp C
Age (years) | 8 | 4 | 11 | 20
Condition | Good | Excellent | Good | Average
Location | Prime | Secondary | Secondary | Prime
Sale price (per ft2) | | $520/ft2 | $470/ft2 | $485/ft2
Adjustments:
Age (years) | | −8% | 3% | 10%
Condition | | −10% | 0% | 8%
Location | | 12% | 12% | 0%
Total adjustments | | −6% | 15% | 18%

To conclude his valuation work on the office property, Lund compiles detailed data on the replacement costs of the office building, its land value, and the total depreciation. He finds that the cost of constructing a building identical to the subject property is USD52 million. The land value is USD6 million, and the total depreciation is USD4 million. From these data, he calculates a value of the property using the cost approach."""
add('M16','Alternative Investments',body,[
 q("Which of the following amounts is closest to the undiscounted terminal value of the Chicago office property at the end of the five-year investment holding period?",["USD49.1 million","USD49.9 million","USD51.2 million"],2,
  ["This divides the sixth-year NOI by the going-in cap rate: 2,945,740 ÷ 0.06 = USD49.1 million.","This divides the fifth-year NOI by the terminal cap rate: 2,866,900 ÷ 0.0575 = USD49.9 million.","Terminal value = NOI of year 6 ÷ terminal cap rate = 2,945,740 ÷ 0.0575 = USD51.2 million."],
  ["@row:NOI","@row:Terminal cap rate","@row:Investment holding period"],"Terminal value at the end of year 5 = NOI of year 6 (the year AFTER the holding period) ÷ terminal cap rate.",fixed=True),
 q("Which of the following statements is most correct about cap rates and discount rates used in the discounted cash flow valuation of the Chicago office property using the data in Exhibit 1?",["The going-in cap rate is used to discount the first-year NOI in the discounted cash flow valuation.","The growth rate of NOI in Years 1 through 5 equals the difference between the discount rate and the going-in cap rate.","The terminal cap rate equals the difference between the discount rate and the constant growth rate of NOI between Years 5 and 6."],2,
  ["Incorrect. Every year of NOI is discounted at the discount rate of 8.50%; cap rates are used to convert NOI to value.","Incorrect. That would imply 2.50% growth (8.50% − 6.00%), but the compound growth of NOI in Years 1 to 5 is only about 0.77%.","Correct. 8.50% − 5.75% = 2.75%, which equals the growth of NOI between Year 5 and Year 6 (2,945,740 ÷ 2,866,900 = 1.0275)."],
  ["@row:Going-in cap rate","@row:Terminal cap rate","@row:Discount rate"],"Cap rate = discount rate − growth rate (constant growth); discounting uses the discount rate, never the cap rate.",fixed=False),
 q("Which of the following statements is consistent with the results of a sales comparison valuation using the information from Exhibit 2?",["The sales comparison approach to valuing the office property is consistent with Norrland's belief that the property is underpriced.","The sales comparison approach to valuing the office property suggests that the property is overpriced by approximately 8%.","The sales comparison approach to valuing the office property suggests that the property is overpriced by approximately 17%."],1,
  ["Incorrect. The sales comparison value (USD42.7 million) is below the USD46 million price, so the property is not underpriced.","Correct. Adjusted prices: 520 × 0.94 = 488.80; 470 × 1.15 = 540.50; 485 × 1.18 = 572.30; the average of 533.87 times 80,000 ft2 gives USD42.7 million; the USD46 million price is about 8% higher.","Incorrect. This uses the unadjusted average price per square foot: 491.67 × 80,000 = USD39.3 million, and 46 ÷ 39.3 = 17%."],
  ["@row:Total adjustments","@row:Sale price (per ft2)","can purchase it for USD46 million"],"Sales comparison: apply the TOTAL adjustment to each comparable's price, average the adjusted prices, multiply by the area, then compare with the price.",fixed=False),
 q("Which of the following statements is most accurate regarding Lund's valuation of the office property using the cost approach?",["Lund's valuation of the office property implies that it is overpriced.","The replacement cost may exceed the market price of the property's building if the real estate cycle for this property is in the oversupply phase.","Replacement costs exclude the real estate developer's profits."],1,
  ["Incorrect. The cost approach value is 52 + 6 − 4 = USD54 million, above the USD46 million price, so it does not imply overpricing.","Correct. In an oversupply phase replacement cost may be higher than the market value of the building, so the cost approach can overstate value.","Incorrect. Replacement cost includes the developer's profit."],
  ["the cost of constructing a building identical to the subject property is USD52 million","The land value is USD6 million, and the total depreciation is USD4 million"],"Cost approach: replacement cost + land − depreciation; it can overstate value in an oversupplied market; replacement cost includes developer's profit.",fixed=False),
])
