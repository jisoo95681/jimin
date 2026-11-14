from lib import *
S1C=[]
S1C.append(V('Ethics',"""Theodore Silva, CFA, manages equity funds at Tritium Asset Management, which recently adopted the Standards. Silva is reviewing some of the firm's policies and procedures to determine if they are in compliance with the Standards.

Silva has a referral arrangement with Sterling Group, a large brokerage and research firm. In return for referring institutional clients to Silva, Sterling Group is allowed to advertise at Tritium's annual equity conference without paying a fee. Silva does not disclose this arrangement to referred clients because he does not pay Sterling Group for any referrals. Silva directs trade execution to Sterling for the referred clients because Sterling is an approved broker that provides best execution. Silva does not use Sterling's research.

Silva conducts due diligence on a mid-cap packaging company whose stock is actively traded. He determines the company's fundamentals are strong and buys its stock for one of the equity funds he manages. Silva provides commentary on the company's prospects in his monthly client newsletter. Silva has owned the company's stock in his personal portfolio for many years and has disclosed this in the fund's communications to clients. A few weeks after releasing the newsletter, Silva sells some of his personal position in the stock as part of rebalancing his personal portfolio. He earns a substantial profit from this sale.

Silva plays golf with the chief financial officer (CFO) of a small fintech company, RizenPay. During the round of golf, the CFO tells Silva that the last few weeks have been very busy for him. He adds that the company is growing fast and doing well financially. The next day, Silva purchases the latest fintech report prepared by an industry expert. The report is not available publicly and can only be purchased for a fee. The report is well-researched and projects that RizenPay will take market share from its competitors. A day later, Silva buys RizenPay stock for his funds.

Tritium's recommended policy for record retention is to maintain records of investment actions and client communications in electronic format. Silva is accustomed to retaining all of his and his clients' relevant files in hard copy form. He does not store any of the records in electronic format. He saves his records for 5 years, after which they are destroyed. Local regulations require record retention for 5 years.""",[
Q("Does Silva violate the Standards in his dealings with Sterling Group?",["No","Yes, by not disclosing the conference arrangement with Sterling to clients","Yes, by using Sterling's brokerage for trade execution without using its other services"],'B',[
"Incorrect: Silva violates Standard VI(C) Referral Fees by not disclosing the arrangement.",
"Standard VI(C): even without a cash payment, Silva and Tritium benefit from the referrals and give Sterling something of monetary value (free advertising at the conference), so the arrangement must be disclosed to clients.",
"Incorrect: the Standards require best execution but do not require using a broker's research; Sterling is an approved broker with best execution."]),
Q("Did Silva violate the Standards when selling his personal stake in the packaging company?",["No","Yes, because he sold the shares at a profit","Yes, by acting against his own recommendation"],'A',[
"Standard VI(B) Priority of Transactions: client transactions have priority. The fund bought first and selling an actively traded stock from his personal portfolio did not disadvantage clients.",
"Incorrect: a profit is not a violation as long as clients are not disadvantaged.",
"Incorrect: the Standard does not prohibit personal transactions that differ from current recommendations as long as clients are not disadvantaged."]),
Q("Did Silva violate the Standard relating to material nonpublic information by buying RizenPay's stock?",["No","Yes, by trading on the information shared by the CFO","Yes, by trading on the information shared in the industry report"],'A',[
"The CFO's comments were nonpublic but not material, and Silva used the mosaic theory, combining them with a report anyone can buy; no violation of Standard II(A).",
"Incorrect: the CFO's information was not material and Silva did not trade solely on it.",
"Incorrect: the industry report is available to anyone who pays and is not material nonpublic information."]),
Q("Does Silva violate the Standards with respect to record retention?",["No","Yes, because of the format in which the records are kept","Yes, because records must be retained for a minimum period of 7 years"],'A',[
"Standard V(C): records may be kept in hard copy or electronic form, and following the regulatory requirement (5 years) satisfies the Standard; 7 years applies only absent regulation or firm policy.",
"Incorrect: the Standard does not require a specific format.",
"Incorrect: the 7-year recommendation applies only if there is no regulatory requirement; the local rule is 5 years."])]))
S1C.append(V('Ethics',"""Owen Murphy, CFA, is a sell-side analyst covering the technology industry for Crozet Investments, a financial advisory firm. He prepares a research report on Company A and gathers forecasts from multiple external data providers. Murphy combines this information with a quantitative model developed by Jane Jones while she was an analyst at Crozet. Jones is no longer with Crozet.

Sharon Gaskill, CFA, is the CEO of Company B, a small, publicly traded fintech firm. Crozet Investments has recently initiated coverage of Company B, and Murphy has been assigned as the analyst. In an effort to increase attention to Company B, Gaskill participates in several interviews with the local press and accepts speaking engagements at industry conferences. Investors who hear her enthusiasm are convinced that Company B offers promising growth, and they buy shares of it. The increased demand for the shares leads to an increase in Company B's share price.

Crozet Investments is located in a city where many movies are filmed. Several famous actors are clients of James Bass, CFA, one of Crozet's financial advisors. At a family picnic, Bass describes the profile of his current clients as high-net-worth individuals in the movie business. One of the family members recalls a story about an actor who filed for bankruptcy. Bass confirms this actor is a former client.

Murphy's supervisor manages a large research department and, as a result, is not able to personally evaluate the conduct of all the employees in the department. The supervisor hires a deputy manager to oversee several employees and ensures the deputy manager is properly trained. The supervisor establishes the following policies to assist with compliance:
Policy 1: A monetary incentive will be offered as a reward for ethical behavior.
Policy 2: The deputy manager will be responsible for evaluating the ethical conduct of department members.""",[
Q("To comply with the Standards in his research on Company A, Murphy must cite:",["Jones only.","the data providers only.","both Jones and the data providers."],'B',[
"Incorrect: Standard I(C): research and models developed while employed by a firm are the firm's property, so Jones need not be cited.",
"Murphy must cite the data providers (sources of forecasts must be revealed under Standard I(C) Misrepresentation) but need not cite Jones, whose model is Crozet's property.",
"Incorrect: citing Jones is not required because her work belongs to the firm."]),
Q("Does Gaskill violate the Standard relating to market manipulation with her interviews and speaking engagements?",["No","Yes, by engaging in information-based manipulation","Yes, by engaging in transaction-based manipulation"],'A',[
"Standard II(B): there is no evidence that she spreads false information or that trades are intended to distort prices; intent is critical.",
"Incorrect: manipulation requires false or misleading information, and there is no evidence of that.",
"Incorrect: there is no evidence of trades intended to distort market prices."]),
Q("Does Bass violate the Standard relating to preservation of confidentiality at the family picnic?",["No","Yes, in relation to his former client only","Yes, in relation to both his current clients and his former client"],'B',[
"Incorrect: Standard III(E) also protects former clients, so naming the actor who is a former client is a violation.",
"Bass confirmed the identity of a former client, and confidentiality continues after the relationship ends. Describing his current client profile in general terms is not a violation.",
"Incorrect: he did not name current clients or discuss their finances."]),
Q("Does Murphy's supervisor violate the Standards in his oversight of the department?",["No","Yes, by establishing Policy 1","Yes, by establishing Policy 2"],'A',[
"Standard IV(C): incentives (monetary or not) that reward ethical behavior are allowed and delegating supervisory duties in a large department is reasonable.",
"Incorrect: monetary incentives for ethical behavior do not violate the Standard.",
"Incorrect: delegating supervision to a properly trained deputy is not a violation."])]))
