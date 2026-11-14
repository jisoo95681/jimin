from lib import *
S2C=[]
S2C.append(V('Deriv',"""Ondrej Knizek is a portfolio manager at a European asset management firm. His portfolio includes fixed income and currency derivatives.

Knizek believes that the market is underestimating the potential for interest rate hikes in Hungary. He is considering buying a 2-year European-style call option on the periodically compounded one-year Hungarian forint (HUF) spot interest rate. He uses the binomial model to calculate the value of the desired call option position. Exhibit 1 shows the 1-year discount factor and the fair value of the options for the respective up and down moves at Time Step 1 (c+ and c-), assuming a risk-neutral probability of 50%.

Exhibit 1
c+ fair value (in HUF) | 4,152,800
c- fair value (in HUF) | 214,800
1-year discount factor | 0.99108

Knizek holds US Treasuries which mature in one month. He wants to use a forward rate agreement (FRA) to lock in the 6-month US interest rate at the time the bonds mature. Knizek refers to the US annualized reference interest rates in Exhibit 2 to calculate the no-arbitrage fixed rate of the FRA.

Exhibit 2
1-month rate | 0.60%
6-month rate | 0.81%
7-month rate | 0.87%

Next Knizek observes an arbitrage opportunity in a Polish government bond. He determines that the bond's 6-month forward price is currently below its fair value. For the first step of the arbitrage trade, he establishes a forward position on the government bonds by purchasing 100 bond forward contracts at a price of 109.30 (percentage of par). Each contract has a notional value of 100,000 Polish zloty (PLN).

Three months later, Knizek calculates the fair value of the forward position. The current forward contract bid price is 108.15 and the annualized three-month interest rate is 0.65%.""",[
Q("The value (in HUF) of the interest rate call option position is closest to:",["1,951,000.","2,164,000.","4,330,000."],'B',[
"Incorrect: this subtracts c− instead of adding it.",
"c = PV[π c+ + (1 − π) c−] = 0.99108 × [0.50 × 4,152,800 + 0.50 × 214,800] = HUF 2,164,000.",
"Incorrect: this does not apply the risk-neutral probabilities."]),
Q("The no-arbitrage fixed rate on Knizek's US interest rate FRA is closest to:",["0.71%.","0.91%.","1.12%."],'B',[
"Incorrect: this uses the 6-month rate instead of the 7-month rate (the FRA is 1 × 7).",
"FRA = {[1 + 0.0087 × 210/360]/[1 + 0.0060 × 30/360] − 1}/(180/360) = 0.91%.",
"Incorrect: this multiplies the two factors instead of dividing."]),
Q("To exploit the arbitrage opportunity on the Polish government bond, in addition to the first step, Knizek should:",["borrow at the risk-free rate and buy the underlying bond.","borrow at the risk-free rate and short sell the underlying bond.","short sell the underlying bond and invest the proceeds at the risk-free rate."],'C',[
"Incorrect: that is the cash-and-carry used when the forward price is too high.",
"Incorrect: short selling is right, but the proceeds are invested, not borrowed.",
"The forward price is below its no-arbitrage value, so do a reverse carry arbitrage: buy the forward, sell the underlying short and lend the proceeds."]),
Q("The fair value (in PLN) of Knizek's government bond forward position after three months is closest to:",["–114,800.","–105,200.","+114,800."],'A',[
"Vt = PV[Ft − F0] = (108.15 − 109.30)/(1.0065)^(3/12) = −1.148 per 100; × 100,000 × 100 contracts / 100 = −PLN 114,800.",
"Incorrect: this uses the ratio Ft/F0 − 1.",
"Incorrect: this reverses the sign of the difference."])]))
S2C.append(V('Alt',"""Martina Friso is a portfolio manager at a pension fund. The fund currently invests in domestic equities and bonds. Friso considers adding real estate to the fund's portfolio.

Friso uses mean–variance optimization to determine the appropriate portfolio allocation to real estate. She considers using either a transaction-based or an appraisal-based real estate index to assess the volatility of real estate returns, the estimation of the Sharpe ratio, and the correlation of returns with the existing portfolio. After considering both index types, Friso chooses the appraisal-based index.

Friso compares two publicly traded real estate companies operating in the retail sector, Perpetua Properties, a REIT, and Rainfall Real Estate, a real estate operating company (REOC). Both companies manage portfolios of retail shopping centers and plan to significantly grow their property portfolios by acquiring undervalued assets.

The key objective of Friso's analysis of Perpetua Properties is to evaluate its sustainable dividend-paying capacity. She considers the following measures of income: FFO, adjusted FFO (AFFO), and net income.

Finally, Friso assesses Perpetua Properties' NAV per share based on the data (in $ millions) in Exhibit 1. Perpetua Properties has 100 million shares outstanding.

Exhibit 1
Appraised value of operating properties | 2,850
Cash and equivalents | 120
Land held for development | 350
Total debt | 1,250""",[
Q("Friso's choice of real estate index will most likely result in:",["understated volatility of returns.","an underestimated Sharpe ratio.","higher correlation of returns with the rest of the portfolio."],'A',[
"Appraisal lag smooths an appraisal-based index, so it understates the volatility of real estate returns.",
"Incorrect: lower volatility overstates (not understates) the Sharpe ratio.",
"Incorrect: the lag also lowers the correlation with other asset classes."]),
Q("Compared to Rainfall Real Estate, Perpetua Properties most likely has:",["a higher effective tax rate.","a higher dividend payout ratio.","greater flexibility to retain earnings."],'B',[
"Incorrect: REITs are largely exempt from corporate income tax if they distribute income.",
"A REIT must distribute 90-100% of taxable income, so it has a higher payout ratio than a REOC, which can retain earnings.",
"Incorrect: a REOC, not a REIT, can retain earnings for acquisitions."]),
Q("Which of the following measures of income would best meet Friso's key objective in her analysis of Perpetua Properties?",["FFO","AFFO","Net income"],'B',[
"Incorrect: FFO is not a cash flow measure and ignores the capex needed to sustain income.",
"AFFO (funds available for distribution) is a cash-focused measure of sustainable economic income after maintenance capital expenditures and is the best indicator of dividend-paying ability.",
"Incorrect: net income includes non-cash charges and accounting estimates."]),
Q("The NAV per share of Perpetua Properties is closest to:",["$16.00.","$20.70.","$33.20."],'B',[
"Incorrect: this leaves out cash and land held for development.",
"NAV = 2,850 + 120 + 350 − 1,250 = $2,070 million; per share = 2,070/100 = $20.70.",
"Incorrect: this does not subtract total debt."])]))
S2C.append(V('Ethics',"""Mary Dines, CFA, is a senior portfolio manager at Prism Wealth Management, a private wealth management firm. Dines was recently hired by Jerry Kagan, a successful software entrepreneur, to manage his investment portfolio on a discretionary basis.

During their initial meeting to set up Kagan's account, Dines proposes using Prism's preferred broker to execute trades. Kagan informs Dines that he wishes to trade through another broker that is owned by a friend. Although Dines knows that Prism's preferred broker would provide better execution, without further discussion she agrees to follow Kagan's wishes and use his broker. Additionally, Dines explains that she will not vote any proxies that would not benefit Kagan's account based on a cost-benefit analysis.

At a subsequent meeting, Dines informs Kagan of the premium services offered by her firm at an additional cost, which include direct access to senior research professionals. Kagan decides not to purchase the premium services. A few days later Prism publishes a report changing its recommendation on Cromwell Inc., a cybersecurity company, to a sell. Shortly after publication Dines sets up calls for her premium clients to have detailed discussions with the senior analyst who authored the report, but she does not set up such a call for Kagan. The next day, Kagan calls Dines and asks her to buy Cromwell shares for his account. Dines knows that Kagan is an expert in the cybersecurity sector from their previous interactions. She proceeds to place the order, without informing him of the firm's recent recommendation change.

Several months later, Kagan meets with Dines to discuss how his account has performed relative to other accounts managed with the same strategy. Dines creates a performance presentation that shows the past five years of return data for the top and bottom deciles of all Prism accounts managed with the same strategy. The presentation also includes a disclosure stating that the performance is shown before taxes and gross of fees.

Kagan is pleased with the performance of his account and decides to offer Dines a bonus equal to 1% of any profits above the 12% annual return target. Dines obtains written permission to enter into this arrangement and then accepts the offer. Additionally, to begin their business relationship on a positive note Kagan offers Dines the use of his luxury yacht over the coming weekend. Dines uses the yacht but does not inform her employer as the offer is not related to the return target.""",[
Q("Does Dines violate the Standards in the initial meeting with Kagan?",["No","Yes, regarding her proxy voting policy","Yes, regarding the broker for Kagan's account"],'C',[
"Incorrect: Dines violates Standard III(A) Loyalty, Prudence, and Care by not telling Kagan that his directed broker may not give best execution.",
"Incorrect: a cost-benefit approach to proxy voting that is disclosed to the client is acceptable.",
"In a directed brokerage situation the manager must tell the client he may not be getting best execution; Dines did not, violating Standard III(A)."]),
Q("Does Dines violate the Standards in her actions related to Cromwell?",["No","Yes, because of her actions related to the buy order for Kagan's account","Yes, because of her actions related to setting up calls with the senior analyst"],'B',[
"Incorrect: Dines violated Standard III(B) Fair Dealing by not telling Kagan about the changed recommendation.",
"If a client places an order contrary to a current recommendation, the client should be told of the changed recommendation before the order is accepted. Dines did not tell Kagan the rating had changed to sell.",
"Incorrect: fair dealing means not equally; premium clients pay for the calls and the calls came after publication, so there is no violation."]),
Q("Dines violates the Standards in her performance presentation for Kagan with regard to:",["the account sample only.","the disclosure of taxes and fees only.","both the account sample and the disclosure of taxes and fees."],'A',[
"Showing only the top and bottom deciles is not fair, accurate and complete (Standard III(D)); a weighted composite of similar portfolios should be used.",
"Incorrect: the disclosure that returns are gross of fees and before taxes is adequate.",
"Incorrect: only the account sample is a violation; the disclosure is fine."]),
Q("Does Dines violate the Standards with respect to either Kagan's bonus offer or the use of his yacht?",["No","Yes, with respect to Kagan's bonus offer","Yes, with respect to the use of Kagan's yacht"],'C',[
"Incorrect: the yacht is a benefit that can create a conflict of interest and was not disclosed to the employer.",
"Incorrect: the bonus was disclosed and approved in writing by the employer, so it complies with Standard IV(B).",
"Standard IV(B) Additional Compensation Arrangements: even non-monetary benefits such as using the yacht must be reported and approved by the employer, even if unrelated to the return target."])]))
