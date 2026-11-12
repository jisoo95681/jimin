from lib15 import *
# ===== Equity (M16): Dahl / Nordvik Bank, Meridian Foods (growth forecasting, top-down vs bottom-up, pairs trading) [from eq1-santos] =====
body="""Henrik Dahl is an equity analyst with a regional investment bank. Dahl reviews the growth prospects and quality of earnings for Meridian Foods, one of the companies he follows. He has developed a stock valuation model for this firm based on its forecasted fundamentals. His revenue growth rate estimate is less than that implied by the market price.

Meridian's financial statements over the past five years show strong performance, with above average growth. Dahl has decided to use a lower forecasted growth rate in his models, reflecting the effect of "regression to the mean" over time. He notes two reasons for his lower growth rate forecast:

Reason 1:
Meridian's brand licences and distribution agreements will be weakening over time.

Reason 2:
Successful companies tend to draw more competition, putting their high profits under pressure.

Dahl meets with Colin Ashby, a newly hired associate in his department. In their conversation, Ashby states, "Security analysts forecast company performance using both top-down and bottom-up analysis. I can think of three examples:

A supermarket chain forecasts next year's sales by assuming that the sales in its newly built stores will have similar sales per square meter to that of its existing stores.

A cement producer forecasts its sales to be its market share times forecast industry sales.

A water utility company forecasts that its sales will grow proportional to increases in GDP."

Ashby is reviewing some possible trades for three stocks in the pharmaceutical industry based on a pairs-trading strategy. Ashby's evaluations are as follows:

Aldane Pharma is 12% overvalued.

Bexley Biotech is 8% overvalued.

Tarrant Labs is 14% undervalued."""
add('M16','Equity Valuation',body,[
 q("Based on Dahl's revenue growth rate estimate, the shares of Meridian are most likely:",["overvalued.","undervalued.","fairly valued."],0,
  ["Correct. The growth rate implied by the market price exceeds the growth rate Dahl expects, so the market price is too high and the firm is overvalued.","Incorrect. Undervalued would require the implied growth to be lower than Dahl's estimate.","Incorrect. The two growth rates differ, so the shares are not fairly valued."],
  ["His revenue growth rate estimate is less than that implied by the market price."],"Market-implied growth > your forecast growth → the price is too high → overvalued.",fixed=False),
 q("Which of the reasons given by Dahl most likely justifies a reduction in Meridian's forecasted growth rate?",["Reason 1 only","Reason 2 only","Both Reason 1 and Reason 2"],2,
  ["Incorrect. Reason 1 is valid, but Reason 2 also supports lower growth.","Incorrect. Reason 2 is valid, but Reason 1 also supports lower growth.","Correct. More competition for successful firms brings regression to the mean, and weakening licences and agreements also reduce potential growth."],
  ["Successful companies tend to draw more competition","brand licences and distribution agreements will be weakening"],"Regression to the mean: competition erodes high profits and weakening protections (IP, franchises, licences) reduce growth."),
 q("Which of Ashby's examples of company performance forecasting best describes an example of bottom-up forecasting?",["Cement producer","Water utility company","Supermarket chain"],2,
  ["Incorrect. Market share times industry sales starts from the industry: top-down.","Incorrect. Sales growing in proportion to GDP starts from the economy: top-down.","Correct. Forecasting from sales per square meter of new stores aggregates micro-level forecasts into the company total: bottom-up."],
  ["sales per square meter","market share times forecast industry sales"],"Top-down starts from the economy or industry and moves to the company; bottom-up builds the company forecast from its units (stores, products).",fixed=False),
 q("Based on his trading strategy, which of the following should Ashby recommend?",["Short Aldane Pharma and Bexley Biotech","Buy Tarrant Labs and Bexley Biotech","Buy Tarrant Labs and short Aldane Pharma"],2,
  ["Incorrect. This shorts two overvalued stocks but does not buy the undervalued one, so it is not a pairs trade.","Incorrect. It buys an overvalued stock, which is the opposite of pairs trading.","Correct. Pairs trading buys an undervalued stock and shorts an overvalued one in the same industry. The most mispriced pair is Tarrant Labs (14% undervalued) and Aldane Pharma (12% overvalued)."],
  ["pairs-trading strategy","Tarrant Labs is 14% undervalued","Aldane Pharma is 12% overvalued"],"Pairs trading: buy the undervalued stock and short the overvalued stock of the same industry; use the largest mispricing on each side.",fixed=False),
])
