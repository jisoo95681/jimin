from lib15 import *
# ===== Econ (M15, re-skin of the missed vignette eg29-amaral: growth, Mock 6 Q19): Rojas / Hartono / Boateng (institutions, growth channels, per capita GDP strategies, convergence) =====
body="""At an international finance and economics conference in Nairobi, Kenya, Mateo Rojas of Chile and Dewi Hartono of Indonesia are discussing how to spur their countries' economic growth. Rojas believes that growth can be bolstered by removing institutional impediments and suggests several possibilities for Chile: clarifying property rights laws, implementing a new dividend tax on foreign investors, and launching a rural literacy program.

Although Hartono recognizes that Indonesia lacks the significant natural resources that Chile has, she states that Indonesia can overcome this challenge by bolstering long-term growth through three channels:

Channel 1: Maintaining a low rupiah exchange rate
Channel 2: Deepening the capital base
Channel 3: Making investments in technology

Kwame Boateng, a fund manager based in Ghana, is concerned about the low standard of living in Ghana and its large informal sector. To improve per capita GDP, Boateng is considering five specific strategies:

Strategy 1: Build daycare centers to increase women's participation in the workforce.
Strategy 2: Impose high tariffs on imports to protect the country's nascent industries.
Strategy 3: Use economic development bank loans to improve the country's transport and manufacturing infrastructure.
Strategy 4: Lower the country's tax rate.
Strategy 5: Introduce policies that encourage the return of highly educated Ghanaian emigrants."""
add('M15','Economics',body,[
 q("Which of Rojas's initiatives is least likely to achieve his stated growth objective?",["Property rights","Rural literacy","Dividend tax"],2,
  ["Incorrect. Clear property rights remove an institutional impediment and support investment and growth.","Incorrect. Education improves human capital and removes an institutional impediment to growth.","Correct. A dividend tax on foreign investors makes equity investment less attractive and impedes capital inflows, which finance domestic investment and growth."],
  ["implementing a new dividend tax on foreign investors","removing institutional impediments"],"Growth: foreign capital inflows, property rights and education help; taxes or restrictions that deter foreign capital hurt.",fixed=False),
 q("The channel that is least likely to help Indonesia overcome its challenge of lacking significant natural resources is:",["Channel 2.","Channel 3.","Channel 1."],2,
  ["Incorrect. Deepening the capital base raises output per worker and potential growth.","Incorrect. Investment in technology raises total factor productivity and long-term growth.","Correct. A low exchange rate supports export demand but has little direct effect on the growth of aggregate supply; it is less powerful than capital deepening or technology."],
  ["Maintaining a low rupiah exchange rate","lacks the significant natural resources"],"Long-run growth comes from capital deepening and technology (TFP); a cheap currency is not a growth channel.",fixed=False),
 q("The strategy that is least likely to improve per capita GDP in Ghana is:",["Strategy 5.","Strategy 1.","Strategy 4."],2,
  ["Incorrect. Returning highly educated emigrants raises human capital.","Incorrect. Daycare centers raise labor force participation.","Correct. With a low standard of living and a large informal sector, the tax rate is unlikely to be the impediment to growth, so lowering it contributes little."],
  ["low standard of living in Ghana and its large informal sector","Lower the country's tax rate."],"Low-income country with a large informal sector: human capital, labor participation and infrastructure matter more than the tax rate.",fixed=False),
 q("Which of the following strategies being considered by Boateng is most likely to undermine or delay convergence with developed economies?",["Strategy 5","Strategy 2","Strategy 3"],1,
  ["Incorrect. Human capital improvements support convergence.","Correct. High tariffs (trade restrictions) undermine growth: freer trade raises productivity, forces inefficient firms out, allows economies of scale and speeds catch-up through knowledge spillovers.","Incorrect. Infrastructure investment supports growth and convergence."],
  ["Impose high tariffs on imports to protect the country's nascent industries."],"Convergence needs open trade, capital flows and human/physical capital; protectionism delays it.",fixed=False),
])
