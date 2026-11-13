from lib17 import *
# ===== Corp (Mock 17, from Mock 9 Q9, Mock 6 Q16, Mock 8 Q34): sale-leaseback motivations, ESG and credit spread (now a STRONG-ESG issuer: spread falls), governance scoring =====
body="""Part 1
Helen Brandt is an analyst at Cedar Fund covering the real estate and energy sectors. She and her colleague are analyzing two companies that are currently held by the fund.

The first company is Kestrel Corp., a publicly traded, national retail grocery store chain that has 2,400 physical stores. Kestrel leases most of its grocery stores and all of its office locations that help the company achieve its core business of operating grocery stores in all markets of the United States. Kestrel also owns the real estate (land and building) associated with 95 physical store locations. Kestrel recently announced that its board of directors approved a strategic real estate plan to pursue a separation of all its owned assets. The company currently has a speculative-grade credit rating.

The separation would be achieved through a series of sale-leaseback transactions with real estate investment trusts (REITs) that specialize in owning retail properties. Under the plan, Kestrel will sell its 95 owned grocery stores and lease them for 20-year terms with a combined annual rent expense of USD41 million. Kestrel expects to receive cash proceeds of approximately USD780 million from the property sales, which will be used to retire approximately USD560 million of debt and repurchase 4 million common shares. Kestrel believes the pro forma capital structure following the transactions will enable it to receive an investment-grade credit rating.

Part 2
Daniel Reyes, CFA, is a fixed-income analyst for the Alpine Funds. His supervisor asks him to identify ESG factors and value the corporate bonds of GreenLeaf Hotels, a publicly traded boutique hotel company. Reyes notes that GreenLeaf is a "green hotel" company that prioritizes sustainability and has successfully reduced water and energy usage at its hotels. Its widely held shares each carry equal voting rights. The board of directors of GreenLeaf consists of 12 members, with independent CEO and chairperson roles. Nine of the board members are independent, five are women, and seven have experience in the hotel industry.

GreenLeaf has a low labor turnover rate. Most of its workforce are paid above the local living wage, and the company offers health benefits. Reyes and his supervisor discuss how GreenLeaf will be affected by the expected passage of legislation raising the minimum wage and growing pressure to offer benefits. Reyes integrates ESG factors in the investment valuation of GreenLeaf's corporate bonds.

Part 3
Sofia Tanaka is a chemical industry analyst for a global investment firm. Tanaka is researching the impact of environment, social, and governance (ESG) issues as they relate to Verdana Chem LLC (Verdana) and Polymex Corp (Polymex). She summarizes the companies' ownership and governance structures in Exhibit 1.

Exhibit 1: Ownership and Governance Structures
# Item | Verdana | Polymex
Total number of directors | 15 | 10
Number of independent directors | 10 | 5
Two-tiered board | No | Yes
CEO duality | No | Yes
Average board tenure | 11 years | 9 years
Independent committees: | |
Audit | Yes | No
Compensation | Yes | Yes
Director selection | Yes | Yes

To evaluate the corporate governance policies and procedures of the two companies, Tanaka considers the rankings provided by an independent ESG data analysis firm specializing in board and governance structure.

The ESG data analysis firm uses a scoring system awarding one point for favorable characteristics among the following:

CEO duality is absent.
Average board tenure is below ten years.
For board independence, a two-tiered board is considered favorable. A simple majority of independent directors is generally favorable. However, in a one-tiered board which is considered unfavorable, a 60% majority of independent directors is the favorable threshold.
Independent committees for audit, compensation and director selection are present (1 point for the presence of each independent committee)."""
add('M17','Corporate Issuers',body,[
 q("Which of the following statements about Kestrel's motivations for the strategic real estate plan is incorrect?",["The transactions will enable Kestrel to sell a non-core business.","The expected change in Kestrel's credit rating after the transactions will increase the firm's costs of capital.","The transactions will allow Kestrel to unlock the value of its real estate assets."],1,
  ["Incorrect. Owning real estate is not Kestrel's core business (operating grocery stores), so this statement is correct.","Correct. Retiring debt should improve the credit rating, which lowers (not raises) the cost of capital, so this statement is incorrect.","Incorrect. Sale-leasebacks unlock the value in the real estate: Kestrel receives cash and records a lease liability."],
  ["used to retire approximately USD560 million of debt","enable it to receive an investment-grade credit rating","incorrect"],"Sale-leaseback: unlocks real estate value, finances debt reduction/buybacks; better credit rating → LOWER cost of capital.",fixed=False),
 q("After integrating the ESG factors, the credit spread on GreenLeaf's bonds is most likely to:",["increase.","decrease.","remain unchanged."],1,
  ["Incorrect. The ESG factors here are favorable, not adverse.","Correct. GreenLeaf has strong governance (nine of 12 directors independent, separate CEO and chair, diversity, industry experience) and low social risk (low turnover, living wage, health benefits). Lower ESG risk lowers investors' perception of risk, so the credit spread is likely to decrease.","Incorrect. Strong ESG factors affect the valuation: the spread does not stay unchanged."],
  ["Nine of the board members are independent","Most of its workforce are paid above the local living wage"],"Weak ESG (few independent directors, low pay, no benefits) → spread up; strong ESG → spread down.",fixed=False),
 q("Based on the ESG data analysis firm's scoring system and Exhibit 1, compared to Polymex, Verdana most likely ranks:",["lower.","higher.","the same."],1,
  ["Incorrect. Verdana scores 5 points and Polymex 4.","Correct. Verdana: independent 10 ÷ 15 = 67% ≥ 60% for a one-tier board (1), two-tiered board (0), CEO duality absent (1), tenure 11 years (0), audit (1), compensation (1), director selection (1) = 5. Polymex: independent 5 ÷ 10 = 50% is not a majority (0), two-tiered (1), CEO duality present (0), tenure 9 years (1), audit (0), compensation (1), director selection (1) = 4.","Incorrect. The totals differ: 5 versus 4 points."],
  ["@row:Number of independent directors","@row:Two-tiered board","@row:CEO duality","@row:Average board tenure","@row:Audit"],"Score each feature separately for each company (one-tier board needs 60% independents, two-tier needs a simple majority) and add the points.",fixed=False),
])
