from lib15 import *
# ===== PM (M15): Valeri / Public Educators Retirement Fund, Danube Investment Advisers (value added, information ratio, Sharpe vs IR) [from ap-robbin] =====
R,B,ar=17.62,17.05,1.90; sdF,sdB=11.4,10.1
ir=(R-B)/ar; irB=(R-B)/(sdF-sdB); irC=(R-B)/sdB
assert (round(ir,2),round(irB,2),round(irC,2))==(0.30,0.44,0.06),(ir,irB,irC)
body="""Corinne Valeri is the new chief investment officer at Public Educators Retirement Fund (PERF), which oversees 18 funds from 9 different firms. She plans to implement new performance measurement tools for selecting and evaluating PERF's managers.

Valeri is meeting with her staff to gauge what they know about manager selection and evaluation. She starts by asking her staff to share with her their understanding of the term "value added." She notes the following responses from three analysts, Owen Brandt, Lena Sorg, and Tara Quill.

Quill: Value added can come from multiple sources, including asset allocation and security selection.
Brandt: A manager adds value when the portfolio return is greater than that of its benchmark.
Sorg: A manager adds value when he produces a positive rate of return.
Valeri reviews data compiled by Brandt for Danube Investment Advisers for the meeting. After reviewing Brandt's work, Valeri requests that the analysts include the information ratio in all future exhibits.

Exhibit 1: Danube Investment Advisers: Selected Statistics
# Item | Value
Fund average annual return (%) | 17.62
Fund standard deviation | 11.4
Benchmark average annual return (%) | 17.05
Benchmark standard deviation | 10.1
Active risk | 1.90

Because the analysts are unfamiliar with the use of the information ratio, Valeri explains how it might be useful in investment manager selection and in choosing the level of active portfolio risk. She asks each analyst to make an observation about his or her understanding of the information ratio.

Sorg: The information ratio appears to be the best criterion to evaluate the past performance of our active managers.
Quill: The information ratio will change as the active weights deviate from the benchmark weights.
Brandt: Because PERF's investment policy prohibits short positions, PERF would be unable to take advantage of any optimized portfolios with increased active risk.
Valeri points out that the Sharpe ratio and the information ratio are both useful tools in evaluating portfolio managers and asks Brandt to explain some of the important differences between the two.

Brandt notes, "The information ratio is a measure of relative expected or realized reward to risk, whereas the Sharpe ratio measures the absolute risk–return trade-off of a portfolio. Sharpe ratios help investors focus on the relative value added by active management. Although the information ratio is not affected by the addition of cash or leverage, the Sharpe ratio is affected by the addition of either.\""""
add('M15','Portfolio Management',body,[
 q("Which statement regarding the measurement of value added is least likely to be correct?",["The statement made by Quill","The statement made by Sorg","The statement made by Brandt"],1,
  ["Incorrect. Value added can come from several sources, including asset allocation and security selection: this statement is correct.","Correct. A positive return alone is not value added; value added is the portfolio return minus the benchmark return (RA = RP − RB).","Incorrect. Value added is the portfolio return above the benchmark return: this statement is correct."],
  ["A manager adds value when he produces a positive rate of return.","least likely to be correct"],"Value added (active return) = portfolio return − benchmark return, not just a positive return.",fixed=False),
 q("Based on the information presented in Exhibit 1, the information ratio for Danube is closest to:",["0.06.","0.30.","0.44."],1,
  ["This divides the active return by the benchmark standard deviation: 0.57 ÷ 10.1 = 0.06.","IR = active return ÷ active risk = (17.62 − 17.05) ÷ 1.90 = 0.30.","This uses the difference in standard deviations as active risk: 0.57 ÷ (11.4 − 10.1) = 0.44."],
  ["@row:Fund average annual return (%)","@row:Benchmark average annual return (%)","@row:Active risk"],"IR = (portfolio return − benchmark return) ÷ active risk (standard deviation of the difference), not the difference of standard deviations.",fixed=True),
 q("With respect to the information ratio, which analyst's observation is least likely correct?",["The observation made by Brandt","The observation made by Sorg","The observation made by Quill"],2,
  ["Incorrect. To increase active risk one would need to short the benchmark (short positions), so Brandt's statement is correct.","Incorrect. The information ratio is the best criterion to evaluate past performance of active managers: correct.","Correct. The information ratio is unaffected by the aggressiveness of the active weights, because active return and active risk rise proportionally."],
  ["The information ratio will change as the active weights deviate from the benchmark weights.","least likely correct"],"IR does not change with the aggressiveness of the active weights (active return and active risk scale together).",fixed=False),
 q("In his statement regarding the information and Sharpe ratios, Brandt is most likely correct with regard to:",["the Sharpe ratio and relative value.","absolute versus relative return measures.","the impact of cash and leverage."],1,
  ["Incorrect. It is the information ratio, not the Sharpe ratio, that focuses on relative value added.","Correct. The information ratio measures relative reward to risk; the Sharpe ratio measures the absolute risk-return trade-off.","Incorrect. The Sharpe ratio is unaffected by cash or leverage, while the information ratio is affected."],
  ["The information ratio is a measure of relative expected or realized reward to risk","the Sharpe ratio measures the absolute risk–return trade-off"],"Sharpe = absolute (unaffected by cash and leverage); information ratio = relative to the benchmark.",fixed=False),
])
