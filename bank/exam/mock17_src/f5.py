from lib17 import *
# ===== Econ (Mock 17, from Mock 7 Q20, Mock 8 Q6, Q8, Mock 6 Q19): central bank tool (now a RECESSION), inflation-linked bond statements, credit spread comments, growth channels =====
body="""Part 1
Palm Reef is a small island economy that depends on tourism and fishing. The island is governed by a Governor General, a parliamentary body of elected legislators, and a couple of agencies to regulate the island's economic and social environment. A series of hurricanes has pushed the economy into a recession, with falling output and rising unemployment. Hana Okafor is the island's Minister of Finance and president of the Central Bank. She assures the committee studying the recovery that the central bank stands ready to use monetary tools to stimulate the economy.

Part 2
Mona Keller is an analyst at Bluestone Fixed-Income Advisors, a fixed-income investment management firm located in Chicago, IL. Bluestone manages a variety of fixed-income strategies, primarily for institutional clients. Keller provides economic research to portfolio managers by analyzing economic data and advising how these data may influence various segments of the fixed-income markets.

At the investment committee meeting, Keller recommends purchasing United Kingdom inflation-linked government bonds. In her discussion, she makes the following statements about inflation-linked bonds:

Statement 1: "The difference between nominal and inflation-linked bond yields reflects the expectations of and uncertainty about the quantity of goods and services investors will be able to consume in the future."
Statement 2: "Increases in uncertainty about future inflation are associated with lower break-even inflation rates."
Statement 3: "The break-even inflation rate incorporates the yield difference between longer dated and shorter dated inflation-linked bonds."

Lloyd Redfield, a portfolio manager on the foreign bond team, asks Keller to review the current business cycle and yield curve in Australia. The Australian economy entered a recession approximately 6 months ago, and the Australian Central Bank has been reducing its policy rate. Keller expects the Australian economy to gradually improve over the next 6-12 months.

Given the ongoing recession in Australia, Redfield is reviewing Australian corporate bonds with the same five-year maturity held in the foreign bond strategy. The three bonds being reviewed are listed in Exhibit 1. Redfield agrees with Keller's assessment of the Australian economy.

Exhibit 1: Australia Corporate Bond Holdings
# Bond | Credit Rating | Sector | Probability of Default | Estimated Recovery Rate | Spread over Government Bonds
A | A | Consumer Staples | 0.4% | 45% | 170 bps
B | BBB– | Consumer Discretionary | 1.8% | 40% | 310 bps
C | BB | Industrial | 3.2% | 50% | 590 bps

Based on this information, Redfield makes the following comments to Keller regarding the Australian bonds:
Comment 1: You can calculate the expected loss by multiplying the probability of default by the recovery rate.
Comment 2: Relative to bond B and bond C, bond A has likely experienced the worst price return over the last 9 months.
Comment 3: Based on your economic forecasts, in 6-12 months overall credit spreads should narrow and the rate of improvement will likely be greatest for bond C.

Part 3
At an international finance and economics conference in Lagos, Nigeria, Diego Paredes of Peru and Linh Tran of Vietnam are discussing how to spur their countries' economic growth. Although Tran recognizes that Vietnam lacks the significant natural resources that Peru has, she states that Vietnam can overcome this challenge by bolstering long-term growth through three channels:

Channel 1: Making investments in technology
Channel 2: Maintaining a low dong exchange rate
Channel 3: Deepening the capital base"""
add('M17','Economics',body,[
 q("Which of the following will Okafor most likely use to address the monetary issues relating to the recession on the island? The central bank will:",["sell domestic securities to the private sector.","buy domestic securities from the private sector.","raise the interest rate on loans to the private sector."],1,
  ["Incorrect. Selling securities reduces the money supply, which is the response to inflation, not recession.","Correct. The threat is recession, so the central bank wants to expand the money supply: it will buy domestic securities from the private sector.","Incorrect. Raising the rate on loans reduces the money supply."],
  ["pushed the economy into a recession","stimulate the economy"],"Recession → expansionary policy: buy securities, cut the policy rate (money supply up); inflation threat → sell securities, raise the rate.",fixed=False),
 q("Which of Keller's statements concerning inflation-linked bonds is most likely correct?",["Statement 3","Statement 2","Statement 1"],2,
  ["Incorrect. The break-even inflation rate is the yield difference between nominal and inflation-linked bonds of the same maturity, not between longer and shorter dated inflation-linked bonds.","Incorrect. More uncertainty about future inflation is associated with HIGHER, not lower, break-even inflation rates.","Correct. The yield difference between nominal and inflation-linked bonds reflects expectations of and uncertainty about future inflation, i.e. about the quantity of goods and services investors can consume in the future."],
  ["The difference between nominal and inflation-linked bond yields reflects the expectations of and uncertainty about"],"Break-even inflation = nominal yield − real (inflation-linked) yield of the same maturity; more inflation uncertainty → higher BEI.",fixed=False),
 q("Which of Redfield's comments regarding the Australian corporate bonds in Exhibit 1 is most likely correct?",["Comment 1","Comment 2","Comment 3"],2,
  ["Incorrect. Expected loss = probability of default × (1 − recovery rate): for bond B, 1.8% × (1 − 40%) = 1.08%.","Incorrect. In a downturn, issuers with good ratings tend to outperform those with lower ratings as spreads between low and high quality widen, so bond A has not had the worst price return.","Correct. When spreads are narrowing, the improvement is greatest for the weakest credits; bond C has the lowest rating, the highest default probability and the widest spread."],
  ["rate of improvement will likely be greatest for bond C","expected loss by multiplying the probability of default by the recovery rate"],"Recession: quality outperforms, spreads widen; recovery: spreads narrow most for the weakest credits. Expected loss = PD × (1 − recovery).",fixed=False),
 q("The channel that is least likely to help Vietnam overcome its challenge of lacking significant natural resources is:",["Channel 1.","Channel 2.","Channel 3."],1,
  ["Incorrect. Investment in technology raises total factor productivity and long-term growth.","Correct. A low exchange rate supports export demand but has little direct effect on the growth of aggregate supply; it is less powerful than capital deepening or technology.","Incorrect. Deepening the capital base raises output per worker and potential growth."],
  ["Maintaining a low dong exchange rate","lacks the significant natural resources"],"Long-run growth: capital deepening and technology (TFP); a cheap currency is not a growth channel.",fixed=False),
])
