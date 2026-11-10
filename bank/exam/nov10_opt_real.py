# 10 Nov: Module 2 Valuation of Contingent Claims quiz (portal paste), reading 29.
# Already stored and skipped: Sousa, Trident, Princeton (Burr), High Street, Eagle (vignettes.js) and Hamilton/Nevis (oct28_vignettes.json).
# New real vignettes: Athena (Messer) and IST (Weber). The 15 single questions (Q45-59) are grouped into four sets with a one-line intro.
import sys
sys.path.insert(0, '/home/user/jimin/bank/exam')
from nov10_ts_real import tab, Q
SRC = "10 Nov Module 2 Valuation of Contingent Claims quiz (18/59, 31%: wrong answers are mostly unanswered items)"
V = []

V.append(dict(id='opt-athena', source=SRC, readings=[29], title="Options · Athena (Messer): binomial call, replication, arbitrage, BSM assumptions, gamma, implied volatility skew", body=tab("""Athena Advisors Inc. offers portfolio replication services to pension funds and insurance companies through the use of options. Clients are typically able to replicate market exposures with smaller than normal investments of funds. Athena manages exposures for its client Wertfin Insurance Company related to annuities indexed to the German Blue Chip Equity Index. Athena portfolio manager Hannes Messer is meeting with Wertfin's risk manager, Jens Szillat, who has asked to learn more about the principles behind the option strategies being employed.

Szillat tells Messer, "I am somewhat familiar with option valuation models; however, I would like to learn more about Athena's methodologies with respect to the index options you are managing for our portfolio."

Messer replies, "The binomial valuation model can be applied to the two-year European style index call options we purchased one year ago. The applicable underlying instrument is the German Blue Chip Equity price index, which excludes dividends. Exhibit 1 shows the option's characteristics at the time of purchase."

Exhibit 1
Binomial Model Variables
u | 1.15
d | 0.90
π | 0.52
Index price | EUR 720
Strike price | EUR 750
Hedge ratio | .5697
1-year interest rate | 3%
S– | 648
C– | 0

Messer explains, "Of course, with the index moving down 10% in the last 12 months, the payoffs with these options could have been replicated without using options." Szillat responds, "My understanding is that the payoff would have been the same as the call option if you had purchased 0.5697 index units and lent EUR 356.79 at the one-year interest rate."

Messer continues, "Twelve months ago, I noted that two-year puts with a strike price of EUR750 cost EUR38.48. Using the information in Exhibit 1 and today's index value, the binomial valuation model calculates the current price of the put as EUR80.15. It is actually trading now above that price at EUR92."

Szillat responds, "I am curious whether you also use the Black–Scholes–Merton (BSM) model for valuation. I understand the BSM and binomial models both have the following three assumptions in common.

Assumption 1: Trading is possible at every instant.
Assumption 2: Volatility can be predicted with certainty.
Assumption 3: The annualized returns on the underlying follow a normal distribution.

Szillat then asks, "How do you utilize the BSM model?"

Messer answers, "We use the BSM model to calculate estimates on a wide array of comparative option variables, such as how much the option value will change for a change in a particular parameter. For example, we can estimate how the rate of change of an option price speeds up or slows down for a given change in the price of the underlying index."

Messer concludes, "We also use the BSM model to calculate the implied volatility. The implied volatilities of the index options expiring in one year are shown in Exhibit 2."

Exhibit 2
Implied Volatility Curve
# Strike Price | Implied Volatility
700 | 18.7
710 | 17.98
720 | 17.38
730 | 16.69
740 | 15.83
750 | 15.40
760 | 14.50
770 | 14.03
780 | 13.21
790 | 12.11
800 | 11.09"""),
 questions=[
 Q(34, "Using the binomial valuation method and the data in Exhibit 1, the price Messer paid one year ago for the call option with a strike price of EUR750 is closest to:", ["EUR47.57.", "EUR51.54.", "EUR102.08."], 'B',
   "B is correct. S++ = 720 × 1.15² = 952.2, c++ = 202.2; S+− = 745.2, c+− = 0; S−− = 583.2, c−− = 0. c+ = 0.52 × 202.2 ÷ 1.03 = 102.08 (this is A's wrong answer C); c− = 0. c0 = 0.52 × 102.08 ÷ 1.03 = EUR51.54. A reverses the probabilities."),
 Q(35, "With respect to his assessment of replicating the option payoff, Szillat is least likely correct about:", ["lending EUR358.41.", "purchasing 0.5697 index units.", "using the one-year interest rate."], 'A',
   "A is correct. A call is replicated by buying h units of the underlying and BORROWING (not lending) the present value of (h × S− − c−) = (1/1.03) × (0.5697 × 648) = EUR358.41."),
 Q(36, "Does the put option with a strike price of EUR750 currently offer an arbitrage opportunity?", ["Yes", "No, because the put is deep in the money", "No, because the market has bid up the price of the put"], 'A',
   "A is correct. The index has fallen 10% to 648, so the exercise value of the option is 750 − 648 = EUR102. The put trades at EUR92, below its exercise value, so buying and exercising it while buying the underlying gives a net positive cash flow of 10."),
 Q(37, "Which of Szillat's assumptions is least consistent with the BSM model?", ["Assumption 1", "Assumption 2", "Assumption 3"], 'C',
   "C is correct. The BSM model assumes that the continuously compounded (logarithmic) return, not the annualized return, is normally distributed."),
 Q(38, "In describing how call option prices change, Messer is most likely referring to:", ["vega.", "delta.", "gamma."], 'C',
   "C is correct. Gamma is the change in delta, i.e. the rate at which the option's rate of price change speeds up or slows down as the underlying moves. Delta is the price sensitivity itself; vega is the sensitivity to volatility."),
 Q(39, "Which of the following would Messer most likely conclude from the implied volatility data in Exhibit 2 if he excludes the effects of moneyness and time to expiration?", ["Using out-of-the-money call or put options to establish either long or short positions is more expensive than using at-the-money options", "Using out-of-the-money put options to hedge is more expensive than establishing a long position with out-of-the-money call options", "Using out-of-the-money call options to establish a long position is more expensive than establishing a short position using out-of-the-money put options"], 'B',
   "B is correct. Implied volatility is higher at lower strikes than at higher strikes (a downward skew), so out-of-the-money puts are generally more expensive than out-of-the-money calls."),
 ]))

V.append(dict(id='opt-ist', source=SRC, readings=[29], title="Options · IST (Weber): expectations approach, interest rate option binomial, swaption, delta hedge, Greeks near expiry", body=tab("""IST Risk Solutions provides institutional financial risk management advisory and brokerage services. Clients seek IST's services when evaluating whether to hedge interest rate, currency, or equity market risks. Simon Weber, senior adviser at IST, is discussing a new client with analyst Noel Franco.

Weber states: "Newport State College plans a $10 million laboratory renovation for its science center and has engaged IST to implement options strategies in order to manage the risk of rising interest rates. The renovation is to be completed in 12 months, in time for the start of the school year. To minimize disruption to its academic schedule, however, Newport will not begin the work until six months from now. State funding will not be received until the beginning of the next school year, so a six-month variable interest rate loan will finance the renovation."

Franco comments: "I think six-month call options on the six-month forward rate would probably be the cheapest solution. The price of the European-style option can be evaluated as the present value of the expected terminal option's payoffs using the risk-adjusted periodic rate. Because Newport has indicated that its goal is to pay a maximum interest rate of 1.25% on the loan, we could also use interest rate put and call options. I believe the binomial model can be used to value interest rate options. Exhibit 1 shows the current interest rate information."

Exhibit 1
Current six-month MRR | 1.00%
Six-month forward rate in six months | 1.15%

Weber comments: "We can also consider options on swaps, which the Black model views as having a bond component and a swap component. The swaption, used to hedge against rising interest rates, can be evaluated as the swap component minus the bond component."

Newport has an endowment that helps support the school financially. The school has learned the endowment will be receiving a gift of 100,000 shares of Global Industries (GI) stock in one month. IST recommends the use of a one-month options position to hedge against a material price decline on the stock during this period. Exhibit 2 lists the relevant GI stock and option characteristics.

Exhibit 2
GI Stock and Option Information
Stock price | $77
Call and put options strike price | $75
Delta call | 0.5952
Delta put | –0.4010"""),
 questions=[
 Q(40, "Franco's understanding of the valuation of the European style six-month call option is most likely:", ["correct with respect to the payoffs and the discount rate.", "correct with respect to the payoffs but incorrect about the discount rate.", "incorrect with respect to the payoffs but correct about the discount rate."], 'B',
   "B is correct. In the expectations approach the option value is the present value of the expected terminal payoffs (using risk-neutral probabilities) discounted at the risk-free rate, not at a risk-adjusted periodic rate."),
 Q(41, "Based on the information shown in Exhibit 1 and using a two-step binomial model to value the current at-the-money interest rate call option, the value of the underlying instrument at Node 0 would most likely be:", ["1.00%.", "1.15%.", "1.25%."], 'A',
   "A is correct. In a two-period binomial model for an interest rate option the underlying at Node 0 is the spot rate. The spot rate (and the at-the-money strike) is the current MRR of 1.00%, not the forward rate, and 1.25% is the client's upper bound."),
 Q(42, "Is Weber's description of the swaption used for the hedge most likely correct?", ["Yes", "No, because he is describing a receiver swaption", "No, because it would be correctly evaluated as the bond component minus the swap component"], 'A',
   "A is correct. A payer swaption hedges against rising rates; by the Black model its value is the swap component minus the bond component. A receiver swaption hedges against falling rates and is the bond component minus the swap component."),
 Q(43, "Assuming one option per share, an appropriate delta hedge for the GI stock would most likely be to:", ["buy 40,100 puts.", "sell 148,428 calls.", "sell 168,010 calls."], 'C',
   "C is correct. The stock position has delta +1 per share, so the calls needed are 100,000 ÷ 0.5952 = 168,010 sold. Using puts: 1 ÷ 0.4010 = 249,376 bought. 148,428 uses DeltaH = −0.4010/0.5952, which is for a short put position."),
 Q(44, "If the price of GI stock approaches $75 over the next 30 days, which of the following changes in option parameter measures will most likely be observed?", ["Decreases in vega and the absolute value of theta", "Increases in vega and the absolute value of theta", "A decrease in vega and an increase in the absolute value of theta"], 'B',
   "B is correct. Vega is highest when the option is at or near the money (the stock approaches the $75 strike), and theta (time decay) gets larger in absolute value as expiration approaches."),
 ]))

# ---- single questions grouped into four sets (names only added, questions unchanged except Q50: the exhibit image was missing and is rebuilt from the answer) ----
INTRO1 = "Rafael Moreno, a derivatives analyst, works through four questions on binomial option valuation and replication."
INTRO2 = "Priya Anand, a trader, reviews four questions on option Greeks and delta and gamma hedging."
INTRO3 = "Lena Kowalski, a quantitative analyst, answers four questions on the Black–Scholes–Merton model and the Black model."
INTRO4 = "Tomas Berg, a rates strategist, answers three questions on interest rate options and implied volatility."
V.append(dict(id='opt-set1', source=SRC + " · single questions Q45, 46, 47, 54 grouped by the assistant", readings=[29], created=True, title="Options · Moreno: American put (two steps), replication of a call, dynamic replication, expectations approach", body=INTRO1,
 questions=[
 Q(45, "An analyst gathers the following information about a put option on a non-dividend-paying stock:\nStrike price 50.00; underlying stock price at Time 0: 52.00; at Time 1 when an up move occurs: 76.24; at Time 1 when a down move occurs: 34.12; European-style put value at Time 1 when an up move occurs: 0.00; European-style put value at Time 1 when a down move occurs: 14.88; time steps: 2; risk-free interest rate per period: 2.05%.\nThe American-style put option value at Time 0 is closest to:", ["8.02.", "8.56.", "9.32."], 'B',
   "B is correct. u = 76.24/52.00 = 1.4662, d = 34.12/52.00 = 0.6562, π = (1.0205 − 0.6562)/(1.4662 − 0.6562) = 0.4498. At Time 1 after a down move the put is exercised early: 50.00 − 34.12 = 15.88 (more than 14.88). p = (1/1.0205) × [0.4498 × 0 + 0.5502 × 15.88] = 8.56. A uses the European value 14.88; C uses the strike instead of the stock price to get u and d."),
 Q(46, "An investor seeks to replicate the payoff of a long position in a 1-year European-style call option. The hedge ratio is h. The call values and stock values are: c+ (call value if the price of the underlying goes up), c− (call value if it goes down), S+ (stock value if up), S− (stock value if down). Within a single-period binomial framework, the investor should:", ["buy h = (c+ − c−)/(S+ − S−) units of the underlying and borrow the present value of (−hS− + c−).", "buy h = (c+ + c−)/(S+ + S−) units of the underlying and borrow the present value of (−hS− + c−).", "short sell h = (c+ − c−)/(S+ − S−) units of the underlying and lend the present value of (−hS− + c−)."], 'A',
   "A is correct. c = hS + PV(−hS− + c−): a long call is h shares partly financed by borrowing, with h = (c+ − c−)/(S+ − S−) ≥ 0. B has the wrong hedge ratio (plus signs). C shorts the stock and lends, which is the opposite."),
 Q(47, "In the two-period binomial option valuation model, dynamic replication:", ["is intended to exactly match the exercise value of the option at each time node.", "results in the value of options at Time 1 driven by arbitrage transactions at Time 0.", "computes the value of options at Time 2 based on the option values at Time 1 using the no-arbitrage approach."], 'A',
   "A is correct. Dynamic replication rebalances the stock and bond so the portfolio matches the option's possible values at each node. B and C reverse the direction of the backward induction: Time 1 values come from Time 2 values, and Time 0 from Time 1."),
 Q(54, "The expectations approach to the valuation of European options assumes that:", ["the discount rate is risk-adjusted.", "investors' beliefs about the future course of the underlying are irrelevant.", "the probability of an up or down move in the underlying is subjectively determined."], 'B',
   "B is correct. The expectations approach uses risk-neutral probabilities (objectively determined, not the investor's view) and discounts at the risk-free rate, so beliefs about the future course of the underlying are irrelevant."),
 ]))
V.append(dict(id='opt-set2', source=SRC + " · single questions Q48, 49, 51, 59 grouped by the assistant", readings=[29], created=True, title="Options · Anand: gamma of a call and a put, gamma neutral, delta of a deep ITM put, delta-neutral hedge", body=INTRO2,
 questions=[
 Q(48, "A trader has a long position in two options on the same underlying stock: Option 1, a call with 1 month remaining, strike 100, 1,000 shares; Option 2, a put with 1 month remaining, strike 100, 1,000 shares. The gamma of Option 1 is:", ["less than Option 2.", "equal to Option 2.", "greater than Option 2."], 'B',
   "B is correct. The gamma of a call equals the gamma of a put with the same strike and expiry (from put–call parity, c − p = S0 − e^(−rT)X). Gamma is always non-negative."),
 Q(49, "A trader has a long call option on a stock. Which of the following transactions allows the trader to make the position gamma neutral?", ["Sell shares of the stock", "Buy a put option on the stock", "Sell a put option on the stock"], 'C',
   "C is correct. A stock has no gamma, so only option trades change gamma. The long call is long gamma; buying any option (call or put) adds gamma, so the trader must sell an option, whether a call or a put."),
 Q(51, "An investor holds a long put position on a stock. As the option moves deeper in the money and approaches expiration, the closer the option's delta moves toward:", ["–1.", "0.", "+1."], 'A',
   "A is correct. The delta of a long put ranges from −e^(−δT) to 0; the deeper in the money it moves, the more it behaves like short stock and the closer delta moves to −1."),
 Q(59, "An investor is short at-the-money call options with a delta of 0.607 on 500,000 shares of stock. At-the-money put options with the same maturity have a delta of –0.434. Assuming an option contract is for 100 shares, the most appropriate action to achieve a delta neutral position is to:", ["sell 303,500 shares.", "sell 6,993 put option contracts.", "purchase 6,993 put option contracts."], 'B',
   "B is correct. Portfolio delta = 500,000 × (−0.607) = −303,500. NH = −(−303,500 ÷ −0.434) = −699,308 puts: negative, so the puts must be sold, which is 6,993 contracts. A is wrong in direction: shares would have to be bought (303,500), not sold."),
 ]))
V.append(dict(id='opt-set3', source=SRC + " · single questions Q52, 55, 56, 58 grouped by the assistant", readings=[29], created=True, title="Options · Kowalski: dividend yield, BSM put replication, BSM assumptions, Black call model", body=INTRO3,
 questions=[
 Q(52, "Under the Black–Scholes–Merton option valuation model, for equity options with an exercise price equal to the current stock price, an increase in a stock's dividend yield will:", ["lower the value of a call option and lower the value of a put option.", "lower the value of a call option and raise the value of a put option.", "lower the value of a put option and raise the value of a call option."], 'B',
   "B is correct. Carry benefits lower the expected future value of the underlying, which lowers a call and raises a put (stock component Se^(−γT)N(d1) for calls and Se^(−γT)N(−d1) for puts)."),
 Q(55, "According to the Black–Scholes–Merton model, an investor who wishes to replicate the equity option payoff of a long put using zero-coupon bonds and the underlying stock should:", ["short sell the stock and buy bonds.", "buy the stock and short sell bonds.", "short sell the stock and short sell the bonds."], 'A',
   "A is correct. The BSM put value is the bond component minus the stock component, so a put is replicated by shorting the stock and buying zero-coupon bonds. Buying the stock and shorting bonds replicates a call."),
 Q(56, "The Black–Scholes–Merton option valuation model assumes that:", ["both short selling and early exercise are permitted.", "short selling is permitted but early exercise is not permitted.", "early exercise is permitted but short selling is not permitted."], 'B',
   "B is correct. BSM allows short selling of the underlying with full use of the proceeds and assumes European-style options, so early exercise is not allowed."),
 Q(58, "In the Black model for valuing European call options on futures, the call price is the:", ["futures component plus the bond component.", "bond component minus the futures component.", "futures component minus the bond component."], 'C',
   "C is correct. Black's call model is c = e^(−rT)[F0(T)N(d1) − XN(d2)]: the futures component F0(T)e^(−rT)N(d1) minus the bond component e^(−rT)XN(d2)."),
 ]))
EXH50 = """Exhibit 1
One-Year Rates and Zero-Coupon Bond Values for the Interest Rate Lattice (rebuilt from the portal solution; the portal's exhibit was an image that did not copy)
# Node | One-year rate | Zero-coupon bond value
Time 0 | 4.00% | 0.961538
Time 1, up | 5.00% | 0.952381
Time 1, down | 3.00% | 0.970874
Time 2, up-up | 6.00% |
Time 2, up-down | 4.00% |
Time 2, down-down | 2.00% | """
V.append(dict(id='opt-set4', source=SRC + " · single questions Q50, 53, 57 grouped by the assistant (Q50 exhibit rebuilt from the solution)", readings=[29], created=True, title="Options · Berg: two-year call on a one-year rate, implied volatility surface, FRA equivalence of a long call and short put", body=INTRO4 + "\n\n" + tab(EXH50),
 questions=[
 Q(50, "An analyst values a 2-year, European-style call option on a 1-year spot rate. The notional value of the option is $10,000,000, and the exercise rate is 3.50% of par. The risk-neutral probability of an up move is 0.50. The annually compounded 1-year interest rates, along with the corresponding zero-coupon bond values, are in Exhibit 1. The value of the interest rate option is closest to:", ["$34,118.", "$45,343.", "$80,350."], 'C',
   "C is correct. Per 1 of notional, at Time 2: c++ = max(0, 0.060 − 0.035) = 0.0250, c+− = 0.0050, c−− = 0. Time 1: c+ = 0.952381 × [0.5 × 0.0250 + 0.5 × 0.0050] = 0.014286; c− = 0.970874 × [0.5 × 0.0050 + 0] = 0.002427. Time 0: c = 0.961538 × [0.5 × 0.014286 + 0.5 × 0.002427] = 0.008035, times 10,000,000 = 80,350. A subtracts the components; B forgets the maximum at Time 2 (−0.0150)."),
 Q(53, "Implied volatility of an option varies across:", ["exercise prices only.", "time to expiration only.", "both exercise prices and time to expiration."], 'C',
   "C is correct. Across time to expiration it is the term structure of volatility; across exercise prices it is the volatility smile or skew. Together they form the volatility surface."),
 Q(57, "To hedge against a rise in interest rates, a company purchases an interest rate call option and sells short an interest rate put option with exercise rates equal to the current forward rate agreement (FRA) rate. The company's option position is equivalent to a:", ["receive-fixed, pay-floating FRA.", "receive-floating, pay-fixed FRA.", "receive-fixed, pay-floating swap."], 'B',
   "B is correct. With the exercise rate set at the FRA rate, a long interest rate call and a short interest rate put is a receive-floating, pay-fixed FRA (it gains when rates rise). The opposite combination (long put, short call) is receive-fixed, pay-floating. A receive-fixed pay-floating swap would be a long cap and a short floor."),
 ]))
