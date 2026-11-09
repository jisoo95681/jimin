# Re-skinned vignettes for Mock 7 (names AND numbers changed from the originals the user missed).
def V(topic,body,qs): return dict(topic=topic,group="redo",body=body.strip(),questions=qs)
def Q(q,opts,ans,why): return dict(q=q,options=opts,answer=ans,why=why)
RESKIN={}
RESKIN['larsen']=V("Corporate Issuers","""Ingrid Halvorsen is the CFO of Kestrel Yachts (KY), a Swedish manufacturer of sailing yachts. Halvorsen is reviewing KY's dividend policy before recommending a course of action to the Board of Directors on the current year dividend payment.

KY's business is influenced by many factors, including commodity prices, interest rates and general economic conditions.

Exhibit 1
# | Current Year | Prior Year | Two Years Ago
Pre-tax income (SEK millions) | 585 | 415 | 385
After-tax net income (SEK millions) | 410 | 290 | 270
Dividends paid (SEK millions) | --- | 110 | 100
Number of shares outstanding (millions) | 5 | 5 | 5
KY's shares currently trade at SEK 380.

Exhibit 1 shows that KY had a very strong year, generating an additional SEK 120 million of net income over the previous year. Halvorsen considers four options, in addition to the regular dividend, to return part of this additional capital to shareholders in the current year:

Option 1: Issue a stock dividend of 15%.
Option 2: Increase the annual per share dividend by 15% over the prior year.
Option 3: Maintain the current annual dividend and pay a special dividend of SEK 9 per share.
Option 4: Repurchase SEK 150 million of shares at a SEK 30 premium to the current share price.""",[
 Q("For KY, Option 1 would most likely:",["affect its capital structure.","increase the value of each shareholder's ownership position in the company.","reduce the volatility of its share price."],2,
   "A stock dividend has no economic effect on the company, so it does not change the capital structure (a cash dividend would).\nThe increase in shares held is offset by a lower price per share, so each shareholder's ownership value is unchanged.\nCorrect: the stock dividend increases the float, which improves liquidity and dampens share price volatility."),
 Q("Compared to Option 2, Option 3 results in a total current year dividend payment per share that is:",["lower by SEK 5.70.","higher by SEK 5.70.","higher by SEK 9.00."],1,
   "Prior DPS = 110 ÷ 5 = SEK 22.00.\nOption 2 = 22.00 × 1.15 = SEK 25.30.\nOption 3 = 22.00 + 9.00 = SEK 31.00.\nOption 3 − Option 2 = 31.00 − 25.30 = +SEK 5.70 (higher).\n'Lower by 5.70' reverses the options; 'higher by 9.00' looks only at the special dividend."),
 Q("Based on Exhibit 1, the safety of KY's dividend in the prior year compared with two years ago:",["decreased.","remained the same.","increased."],0,
   "Dividend coverage = after-tax net income ÷ dividends paid.\nTwo years ago: 270 ÷ 100 = 2.700.\nPrior year: 290 ÷ 110 = 2.636.\nCoverage fell, so the dividend became less safe: decreased."),
 Q("If Option 4 is implemented using surplus cash, which of the following is most likely to decrease? KY's:",["debt-to-assets ratio.","total book value.","debt-to-equity ratio."],1,
   "A repurchase with surplus cash lowers both assets (cash) and shareholders' equity, so total book value falls.\nDebt is unchanged while assets and equity fall, so debt-to-assets and debt-to-equity both rise.\nWhether book value per share rises or falls depends on the price paid versus BVPS.")])
RESKIN['dorado']=V("Financial Statement Analysis","""Henrik Vos is an analyst at Northgate Asset Management, which runs a range of investment funds. He analyses the recent performance of Aurelia Drinks AG (AD), a multinational producer of carbonated soft drinks that recently entered the energy drinks market. As a core holding, AD's strong position in Europe gives Northgate geographic diversification, because its funds are mostly invested in North America.

Vos reviews AD's balance sheets for the most recent and previous years and comments: "AD is continuing to follow a growth-by-acquisition strategy." He also adjusts AD's most recent income statement to find the company's net income under the direct control of management, using the information (in EUR millions) in Exhibit 1.

Exhibit 1
# | Most Recent Year
Income from operations | 1,920
Income from investments in associates | 236
Interest expense | (731)
Taxes | (271)
Net income | 1,154
Of which: |  
Net income attributable to non-controlling interests | 102
Net income attributable to shareholders | 1,052

Vos and his team assess the quality of AD's overall performance. The team's view is positive, but Vos disagrees for the following reasons:
Reason 1: Balance-sheet-based accruals are trending down relative to total assets.
Reason 2: Income from operations is consistently higher than cash generated from operations.
Reason 3: The cash-flow-based accruals ratio has fluctuated very little over the last five years.

Vos and his team note from AD's annual report that the company has four segments. They analyse the segments using the information (in EUR millions) in Exhibit 2.

Exhibit 2
# Segment | Sales (recent) | EBIT (recent) | Assets (recent) | Sales (previous)
Carbonated drinks – Europe | 3,010 | 1,021 | 13,120 | 2,905
Carbonated drinks – North America | 2,040 | 586 | 6,240 | 1,850
Carbonated drinks – Asia Pacific | 590 | 181 | 2,880 | 560
Energy drinks | 318 | 19 | 1,330 | 231
Total | 5,958 | 1,807 | 23,570 | 5,546

After the segment analysis, the team concludes:
Statement 1: The sales growth rate of carbonated drinks – North America is stronger than that of energy drinks.
Statement 2: The EBIT margin of carbonated drinks – Europe is higher than that of carbonated drinks – North America.
Statement 3: The asset turnover of carbonated drinks – Europe is better than that of AD overall.""",[
 Q("Which balance sheet line item is most appropriate to justify Vos's comment about AD's growth strategy?",["Long-term debt","Property, plant and equipment","Goodwill"],2,
   "Goodwill arises only when a company acquires another business, so a rising goodwill balance is the hallmark of growth by acquisition.\nLong-term debt and PP&E may also rise after acquisitions, but they can change for many other reasons (capital structure changes, organic capital spending)."),
 Q("After Vos's adjustment, AD's net income (in EUR millions) under management's direct control is:",["816.","918.","1,052."],1,
   "Management controls the subsidiaries in full (including the non-controlling interest share) but not the associates.\nStart from total net income: 1,154.\nRemove income from associates: 1,154 − 236 = 918.\n816 = 1,052 − 236 wrongly also removes the non-controlling interest; 1,052 still includes the associates and excludes the NCI."),
 Q("Which reason best supports Vos's disagreement with his team about AD's overall performance?",["Reason 1","Reason 2","Reason 3"],1,
   "Downward-trending balance-sheet accruals give less room for manipulation: not a concern.\nCorrect: operating income persistently above operating cash flow means earnings are not backed by cash, a warning sign of low earnings quality.\nA steady, low-fluctuation accruals ratio is not a concern; an erratic or rising one would be."),
 Q("With respect to the segment analysis, which statement is correct?",["Statement 1","Statement 2","Statement 3"],1,
   "Statement 1: growth North America = 2,040/1,850 − 1 = 10.3%; energy drinks = 318/231 − 1 = 37.7%. North America is weaker: false.\nStatement 2: EBIT margin Europe = 1,021/3,010 = 33.9%; North America = 586/2,040 = 28.7%. Europe is higher: true.\nStatement 3: asset turnover Europe = 3,010/13,120 = 0.229; AD overall = 5,958/23,570 = 0.253. Europe is lower: false.")])
RESKIN['stratton']=V("Equity Valuation","""The Brookline Club is a small US investment club formed by a group of friends who recently graduated from university. At today's regular bimonthly meeting, two members present new companies for the club to analyse. The club uses a combination of comparables and forecasted fundamentals to make its investment decisions.

Nadia Ferro has done preliminary research on Ostler Ltd. (Ostler), a small Ohio-based manufacturer of products, supplies and food for pets. Ferro starts by showing the club a recent news release from Ostler's website (Exhibit 1).

Exhibit 1 Ostler Ltd. Press Release: Core EPS Announcement
We are pleased to report an increase in Core EPS from $1.09 to $1.44 for the year ended 31 December 2017. The company continues its growth-by-acquisition strategy, acquiring smaller specialty companies in the pet supplies industry. Acquisitions over the past two years have increased our asset base by 22%, and we expect similar opportunities for growth in the next few years.
# | 31 December 2017 | 31 December 2016
EPS | $1.12 | $0.95
Core EPS* | $1.44 | $1.09
* Core EPS is a non-GAAP measure that excludes acquisition charges of $0.20 and $0.14 in 2017 and 2016, respectively, and $0.12 in 2017 related to the settlement of a lawsuit.

Ferro notes that Ostler trades at $12.82. She reminds the club that the company was sued for making pet jackets with the logos of local professional sports teams without permission and settled quickly out of court. Ferro believes the company will not incur such legal costs again, but because its strategy is to grow by acquisition, acquisition costs will continue and are relevant to any analysis. She disagrees with excluding those costs from core EPS and calculates Ostler's trailing P/E on the basis of her beliefs.

Using NYSE data, Ferro finds the average P/E for the Consumer Goods Index (15.2) and for its Processed and Packaged Goods sector (31.4). She then screens that sector for other small processed and packaged goods producers to build her own index. Partial results are shown in Exhibit 2.

Exhibit 2 Partial Results of Market Screen: Ferro's Index
# Company | Market cap (US$ millions) | P/E
Hale Inc. | 6.40 | 13.4
Rivera Industries Inc. | 24.80 | 11.9
Booth Brothers Co. | 512.30 | 5.6
Corbin Foods Ltd. | 735.60 | 20.4
Linden Delights Inc. | 548.90 | 17.6

Ferro observes that Corbin Foods must have both a higher-than-average growth rate and higher-than-average risk to justify its high P/E, and suggests the club look at Corbin at its next meeting.

The members discuss the wide range of market capitalisations and P/Es in Ferro's index and whether the arithmetic mean is the best value to use. Ferro decides to calculate the weighted harmonic mean of the index and says:

"The harmonic mean can be used to mitigate the effects of both large and small outliers." """,[
 Q("Based on Exhibit 1 and Ferro's beliefs about recurring costs, her trailing P/E for Ostler is closest to:",["8.90.","10.34.","11.45."],1,
   "Acquisition charges recur, so they stay in EPS; the lawsuit cost does not recur, so it is added back.\nRecurring EPS 2017 = 1.12 + 0.12 = $1.24.\nTrailing P/E = 12.82 ÷ 1.24 = 10.34.\n8.90 uses the company's core EPS (1.44), which wrongly excludes acquisition charges; 11.45 uses GAAP EPS (1.12), which keeps the non-recurring lawsuit cost."),
 Q("Ferro's observation about Corbin Foods' high P/E is best described as:",["correct.","incorrect with respect to the growth rate.","incorrect with respect to the risk."],2,
   "Higher expected growth justifies a higher P/E: she is right on growth.\nHigher risk raises the required return and justifies a LOWER P/E: she is wrong on risk."),
 Q("The weighted harmonic mean of the P/Es in Ferro's index (Exhibit 2) is closest to:",["11.3.","13.8.","15.3."],0,
   "Weighted harmonic mean = total market cap ÷ Σ(market cap ÷ P/E).\nTotal cap = 6.40 + 24.80 + 512.30 + 735.60 + 548.90 = 1,828.0.\nΣ(cap ÷ P/E) = 0.48 + 2.08 + 91.48 + 36.06 + 31.19 = 161.29.\n1,828.0 ÷ 161.29 = 11.3.\n13.8 is the simple arithmetic mean; 15.3 is the market-cap weighted arithmetic mean."),
 Q("Ferro's statement supporting the use of the harmonic mean is best described as:",["correct.","incorrect with respect to large outliers.","incorrect with respect to small outliers."],2,
   "The harmonic mean mitigates the effect of LARGE outliers.\nIt can aggravate the effect of SMALL outliers (although these are bounded by zero), so the statement is wrong about small outliers.")])
