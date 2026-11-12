from lib15 import *
# ===== FSA (M16): Reyes / Corvara S.A. (earnings quality ratios, cash flow classification, risk information sources) [from libra] =====
body="""Tomas Reyes is an equity analyst studying the earnings quality of Corvara S.A., a Peruvian publicly-traded company that reports under IFRS. Reyes computes some financial ratios for Corvara in Exhibit 1.

Exhibit 1: Selected Ratios
# Ratio | Most Recent Year | Previous Year | Two Years Ago
Receivables turnover ratio | 8.4 | 5.9 | 5.8
Inventory turnover ratio | 2.6 | 3.8 | 3.9

Corvara competes in a very mature industry with a 4% annual rate of revenue growth. In the last three years, Corvara's revenue growth was the same as the industry's average, which allowed the company to maintain its market share. Corvara had no significant change in its sales, collection, purchases or inventory policies.

Reyes realizes that most of Corvara's competitors are US companies, which report under US GAAP. When reviewing Corvara's cash flow statement, he notices that the only difference in cash flow classification relates to interest paid. To improve comparability with those competitors, Reyes reclassifies interest paid in Corvara's cash flow statement.

Reyes believes that Corvara's management significantly underestimates the environmental risks of its business. To investigate the issue, Reyes refers to different information sources."""
add('M16','Financial Statement Analysis',body,[
 q("The trend in the receivables turnover ratio most likely indicates that, in the most recent year, Corvara engaged in:",["the sale of receivables.","channel stuffing.","bill-and-hold revenue practices."],0,
  ["Correct. Receivables turnover jumped, so receivables fell as a percentage of revenue. With no change in sales or collection policies, this points to selling receivables to third parties (removing them from the balance sheet).","Incorrect. Channel stuffing raises revenue and receivables together, so the turnover ratio would have decreased.","Incorrect. Bill-and-hold raises revenue and receivables by the same amount, so the turnover ratio would have decreased."],
  ["@row:Receivables turnover ratio","no significant change in its sales, collection, purchases or inventory policies"],"Receivables turnover UP with no policy change → receivables sold or removed; channel stuffing and bill-and-hold push the ratio DOWN.",fixed=False),
 q("The trend in the inventory turnover ratio most likely indicates that, in the most recent year, Corvara has aggressively:",["liquidated inventory.","reduced the obsolescence allowance.","delayed payments to suppliers."],1,
  ["Incorrect. Liquidating inventory lowers inventory and raises COGS, so the turnover ratio would have increased.","Correct. The ratio fell significantly, so inventory rose relative to COGS; with no change in purchase or inventory policies this suggests a reduced obsolescence allowance (reserves used to manage earnings).","Incorrect. Delaying payments to suppliers affects neither inventory nor COGS, so the ratio is not affected."],
  ["@row:Inventory turnover ratio","no significant change in its sales, collection, purchases or inventory policies"],"Inventory turnover DOWN with no policy change → inventory not written down (obsolescence allowance cut).",fixed=False),
 q("Reyes's adjustment to Corvara's cash flow statement will result in a higher cash flow from:",["investing activities.","operating activities.","financing activities."],2,
  ["Incorrect. Investing cash flow is not affected by moving interest paid.","Incorrect. Interest paid moves INTO operating activities, so operating cash flow becomes lower.","Correct. IFRS allows interest paid in operating or financing; US GAAP requires operating. Reyes moves interest paid from financing to operating: financing higher, operating lower, investing unchanged."],
  ["the only difference in cash flow classification relates to interest paid","most of Corvara's competitors are US companies, which report under US GAAP"],"US GAAP: interest paid is operating. Converting an IFRS financing classification to US GAAP raises CFF and lowers CFO.",fixed=False),
 q("Which of the following information sources is least useful for Reyes's investigation?",["Auditor's report","Financial press","Management commentary"],0,
  ["Correct. The auditor's report says whether the statements fairly present the financial position; it does not list or explain environmental risks.","Incorrect. The financial press can uncover risk issues not yet recognized.","Incorrect. Management commentary helps users understand risk exposures and risk management."],
  ["environmental risks of its business","least useful"],"For risk investigation: financial press, management commentary and notes help; the audit opinion does not describe specific risks.",fixed=False),
])
