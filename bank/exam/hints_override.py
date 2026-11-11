# 11 Nov (user request): highlight only the words that really carry information for the answer (not the topic words). Applied by build.py
# on top of the hints written in mock9.py / mock10.py. Keys "setId:questionNumber"; rows "@row:Label" shade table rows (first cell starts with Label).
O={
'mock9:1':['@row:Net income','@row:Depreciation expense','@row:Interest expense','@row:Income tax','@row:2012 fixed capital investment','@row:Accounts receivable','@row:Inventories','@row:Other current assets','@row:Current liabilities'],
'mock9:2':['2013 FCFF will be $520 million','FCFF will grow in perpetuity at 3.5% annually',"The market value and book value of Hartwell's long-term debt are approximately equal",'@row:Weighted average cost of capital','@row:Long-term debt','@row:Number of outstanding shares'],
'mock9:3':['2013 earnings per share (EPS) will be $1.65','EPS will grow forever at 5% annually','Net capital expenditures (fixed capital expenditures minus depreciation) will be 35% of EPS','Investments in working capital will be 15% of EPS','65% will be financed with equity and 35% will be financed with debt','@row:Cost of equity'],
'mock9:4':['capital structure seems unstable','If there is a change in control at Hartwell','dividends have been substantially different from its FCFE'],
'mock9:7':['market reference rate (MRR)','calculate the 3-month TED spread'],
'mock9:8':['flight to quality','bullish flattening of the yield curve'],
'mock9:9':['its core business of operating 50,000 square foot stores','retire approximately USD700 million of debt','will enable it to receive an investment-grade credit rating'],
'mock9:10':['25th, 50th, and 75th percentile cap rates','average capitalization rate of 5.40%','4.90%, 5.40%, and 5.90%'],
'mock9:11':['median Upstream, Midstream, and Downstream peers are trading at enterprise value-to-EBITDA multiples of 18, 15, and 12','@row:Upstream','@row:Midstream','@row:Downstream'],
'mock9:14':['@row:EPS','@row:Book value per share','average ROE method','Year 1 through Year 4 (the most recent year) constitutes a full business cycle'],
'mock9:16':['rose from $24.60 to $28.35 per share','the market index rose from 488.30 to 521.90'],
'mock9:17':['gains in per capita GDP are temporary','the resulting population explosion will lower per capita GDP to subsistence real wage levels','until the steady state rate of growth is achieved','extending the abnormal growth period before diminishing marginal returns eventually set in'],
'mock9:25':['Enhancement 1: More stringent capital requirements that prevent banks from taking on excessive financial leverage','Enhancement 2: Increased funding stability by giving preference to interbank deposits over those from consumers','Enhancement 3: Additional measures to ensure sufficient earnings quality'],
'mock9:26':['has been in a “hard” phase for a few years now'],
'mock9:27':['@row:Loss expense and loss adjustment expense','@row:Net premiums earned','@row:Net premiums written','@row:Underwriting expense','calculate KH’s combined ratio'],
'mock9:28':['before investment income','underwriting business'],
'mock9:29':['present value factors presented in Exhibit 1','three-year MRR-based interest rate swap with annual resets'],
'mock9:30':['entered into one year ago as the pay-fixed (receive-floating) party','current equilibrium two-year fixed swap rate is 1.80%','@row:Swap notional amount','@row:Fixed swap rate (since initiation)'],
'mock9:31':['one-year fixed-for-fixed currency swap involving yen and US dollars','with a quarterly reset','@row:90','@row:180','@row:270','@row:360'],
'mock9:32':['a new position in a 2 × 5 FRA','@row:60-day MRR','@row:150-day MRR'],
'mock9:34':['differences between the estimated values for the independent variables and the actual observations for the independent variable'],
'mock9:35':['Expected Sales = 9.8 + 2.1 (Marketing Expenditures) + 0.9 (# of Salespeople)','stated in millions of dollars','marketing expenditures are $2,800,000','six salespeople'],
'mock9:36':['marketing coefficient of 2.1','significantly different from zero'],
'mock9:38':['Valuation Method 2: Net asset value','@row:Estimated 12-month cash net operating income','@row:Cash and equivalents','@row:Accounts receivable','@row:Debt and other liabilities','@row:Shares outstanding','@row:Assumed cap rate'],
'mock9:39':['Valuation Method 1: Relative valuation using property subsector average P/AFFO multiple','@row:Funds from operations','@row:Non-cash rents','@row:Recurring maintenance','@row:Shares outstanding','@row:Property subsector average P/AFFO multiple'],
'mock9:40':['@row:Property subsector','risk factor most likely to adversely affect an investment in REIT B'],
'mock9:41':['(1) provides an estimate of downside exposure during a worst-case scenario','(2) avoids subjectivity','(3) can be used for performance evaluation'],
'mock9:42':['estimate the dollar VaR at the 5% level','@row:Portfolio value','@row:Daily expected return','@row:Daily expected volatility'],
'mock9:44':['We limit fund losses to 2% of assets with a 99% level of confidence','additional measures to limit total losses to 3% over a rolling 30-day period','5-day, 1% VaR limit of $12 million'],
'mock10:1':['trend in its ROE components by using DuPont analysis','@row:Revenue','@row:Total liabilities','@row:Total asset turnover ratio'],
'mock10:2':['assess their ROI and growth during the most recent year','@row:Segment % of total assets','@row:Segment % of total capital expenditures'],
'mock10:4':['@row:Balance-sheet-based accruals ratio','balance-sheet-based accruals ratio'],
'mock10:5':["dealer's bid/offer rate quote of 161.30/161.34 in JPY/EUR",'@row:USD/EUR','@row:JPY/USD'],
'mock10:6':['6-month annualized MRR in the US is 1.20%','6-month annualized MRR in New Zealand is 2.40%','The spot mid-market currency quote for USD/NZD is 0.6214'],
'mock10:7':['Spot mid-market quote for the BRL/USD is 5.0200','1-year MRR in the US is 1.50%','1-year MRR in Brazil is 10.25%','The BRL/USD exchange rate in one year is 5.1000'],
'mock10:8':['Condition 1: A sizable decline in the ratio of foreign exchange (FX) reserve holdings to average daily FX turnover in their domestic currency','Condition 2: A slight decline of foreign investment in its equity market','Condition 3: Broad money growth and a decline in the ratio of M2'],
'mock10:13':['value for b0 is close to zero and the value of b1 is close to 1','@row:Constant (b0)','@row:Lagged P/E (b1)'],
'mock10:15':['@row:Lag 1 (c1)','Regression of Squared Residuals'],
'mock10:16':['Condition 1: both series have a unit root and are not cointegrated','Condition 2: neither the dependent variable series nor the independent variable series has a unit root'],
'mock10:18':['currently pays an annual dividend of £1.80 per share','initially expected to grow at an annual rate of 9%','decline linearly during a 10-year period','final and perpetual annual growth rate of 4%','required return on equity is 8.50%'],
'mock10:19':['dividend payout ratio of 40%','return on assets of 6.00%','equity multiplier of 1.50'],
'mock10:22':['sells 12 call option contracts','delta-hedging the position using Hillcrest shares'],
'mock10:23':['@row:Theta (daily)','@row:BSM call value'],
'mock10:24':['@row:Exercise price of Marlow put option','@row:Risk-free rate','@row:Up factor','@row:Down factor','American-style put option on Marlow Corporation that matures in two years'],
'mock10:25':['@row:EPS','@row:DPS'],
'mock10:26':['the increase in sales is believed to be temporary','because the industry is cyclical'],
'mock10:27':['@row:Net income','@row:Share price at the time of repurchase','@row:Premium over current share price'],
'mock10:28':['limits the company’s debt-to-equity ratio to 35%','@row:Book value of equity','@row:Debt-to-equity ratio','@row:Cash available for repurchase'],
'mock10:29':['@row:Portfolio Construction Approach','@row:Type of Foreign Holdings','@row:Engagement in Securities Lending'],
'mock10:31':['@row:Percentage of Foreign Holdings','@row:Trading Frequency'],
'mock10:32':['Annual management fee of 0.40%','Round-trip trading commissions of 0.16%','Bid–offer spread of 0.08% on purchase and sale','plans to own the ETF for 7 months'],
'mock10:33':['calculate residual income for the year','@row:Book value of total assets','@row:Book value of total debt','@row:EBIT','@row:Corporate tax rate','@row:Pretax cost of debt','@row:Cost of equity'],
'mock10:34':['@row:ROE','@row:Cost of equity','@row:Market price per share','@row:P/B ratio'],
'mock10:36':['@row:Current book value per share','@row:Present value of residual income per share for Year 1','@row:Present value of residual income per share for Year 2','@row:Forecasted book value per share at end of Year 2','@row:Forecasted market price per share at end of Year 2','@row:Cost of equity'],
'mock10:37':['must absorb considerable unreimbursed operating expenses','@row:Expense reimbursement revenue','@row:Effective gross income','@row:Property management fees','@row:Other operating expenses'],
'mock10:43':['@row:Credit spread','@row:Duration','@row:Coupon rate'],
}

# practice set 3, vignette appended 11 Nov (Mock 8 credit-spread vignette): key -> (highlight phrases, rule)
O3={
'pq3:49':(['yield to maturity of 5.10% and a modified duration of 7.25','Kuiper assumes that market spreads and yields will remain stable over the year','@row:Probability (%)','@row:Credit spread'],'Expected return ≈ YTM − Σ probability × modified duration × (new spread − current spread): downgrades cost more than upgrades gain.'),
'pq3:50':(['The recovery rate is one-third of the exposure each period.','The annual probability of default each year is 1.20%.','the relevant binomial interest rate tree is presented in Exhibit 3','@row:Rate'],'Recovery of one-third means LGD = 2/3. Value the bond on the tree (VND), CVA = Σ DF × PD × LGD × expected exposure, fair value = VND − CVA, spread = YTM(fair value) − benchmark yield.'),
'pq3:51':(["What might cause the bond's credit spread to decrease?"],'Spread falls when the CVA falls: lower probability of default or lower loss given default.'),
'pq3:52':(['credit spreads widen with expectations of strong economic growth','tends to be either flat or slightly upward sloping'],'Credit curves: lower ratings steeper, spreads narrow in good times; the most highly rated curves are flat or slightly upward sloping.'),
}

# practice set 4, Q49-54 appended 11 Nov: key -> (highlight phrases, rule)
O4={
'pq4:49':(['financed with three times as much debt capital as equity capital','pretax cost of debt is 7% and its cost of equity capital is 11%','EBIT of $280,000 and was taxed at a rate of 30%'],'Residual income = net income − equity charge. Net income is AFTER interest and tax; equity charge = equity capital × cost of equity.'),
'pq4:50':(['EBIT is expected to continue at $280,000 indefinitely',"book value per share is $15"],'Constant residual income forever = perpetuity: value = book value per share + RI per share ÷ cost of equity.'),
'pq4:51':(['Beginning book value per share is $10.00.','Expected net income per share is $2.00.','Required rate of return on equity is 10%.'],'RI = net income − cost of equity × BEGINNING book value (dividends and retained earnings are not used).'),
'pq4:52':(['Expected long-term ROE is 6.5%.','Expected long-term growth rate is 4%.','Cost of equity is 5%.'],'Single-stage RI: V0 = B0 + B0 × (ROE − r) ÷ (r − g): do not forget to add B0 and to use (r − g).'),
'pq4:53':(['Residual income valuations recognize value later than different present value approaches.'],'RI models recognize value EARLIER (large book value up front); in theory RI and DDM give the same value.'),
'pq4:54':(['Earnings per share will be 32% of beginning book value for the next year.','Cash dividends will be 50% of earnings per share for the next year.',"At the end of the year, the stock's P/B ratio will be 1.1."],'Two-stage RI: V0 = B0 + PV(RI) + PV[(P/B − 1) × ending book value]; compare with the market price.'),
}

# practice set 6, Q49-52 appended 11 Nov (normalized earnings): key -> (highlight phrases, rule)
O6={
'pq6:49':(['normalizes them'],'Normalizing = adjusting revenues and costs (non-market owner pay, personal or non-recurring items) so the private company can be compared with public companies. Not cyclicality, not marketability.'),
'pq6:50':(['reported EBITDA is EUR 5.20 million','is paid EUR 250,000 a year','earn EUR 520,000 on average'],'Owner paid LESS than market: costs are too low, so normalized EBITDA is LOWER by the gap. Owner paid more than market: add the excess back.'),
'pq6:51':(['employees are paid about the same as employees of other bakeries in the area','takes no salary','at a rent well below market rates'],'Adjust only what is not at market level (unpaid family work, below- or above-market related-party rent). Items already at market need no adjustment.'),
'pq6:52':(['is $600,000 a year higher than is typical','costs $40,000','annual operating expenses of $12,000 and annual depreciation of $25,000','at $9 a square foot a year','Market rents for similar space are $7 a square foot'],'Adjust EBIT for each non-market item (include the removed asset\'s depreciation), then apply the tax rate: normalized EBIT × (1 − t).'),
}

# practice set 5, Q49-50 appended 11 Nov (American options on a binomial tree): key -> (highlight phrases, rule)
O5={
'pq5:49':(['American-style call option','The shares pay no dividends','Exercise price of the call option'],'American option: at EVERY node take the larger of the continuation value and the exercise value. A call on a non-dividend-paying stock is never exercised early, so it equals the European call.'),
'pq5:51':(['minimum debt service coverage ratio (DSCR) of 1.30','The loan would be interest only, with an annual interest rate of 6.5%','Net operating income (NOI)'],'Max debt service = NOI ÷ minimum DSCR; interest-only loan = debt service ÷ interest rate. The maximum loan is the LOWER of the DSCR-based and LTV-based amounts.'),
'pq5:52':(['maximum loan-to-value (LTV) ratio of 70%','Appraised value','Net operating income (NOI)'],'LTV loan = LTV × appraised value; DSCR = NOI ÷ debt service. If the DSCR of the LTV loan is below the minimum, the DSCR constraint binds.'),
'pq5:53':(['undiscounted future cash flows of $225 million','The fair value of the line is $190 million','under US GAAP'],'US GAAP: step 1 carrying amount > UNDISCOUNTED cash flows = impaired; step 2 loss = carrying amount − fair value.'),
'pq5:54':(['present value (value in use) of $210 million','the costs to sell it would be $5 million','under IFRS'],'IFRS: recoverable amount = higher of (fair value less costs to sell, value in use); loss = carrying amount − recoverable amount.'),
'pq5:50':(['American-style put option','Exercise price of the put option','Calder pays no dividends'],'American put: at every node take the larger of the continuation value and K − S; early exercise shows up at the low-price (down) node. Do not start from the one-year payoffs: start at maturity and work backwards.'),
}

# practice set 7, Q49-52 appended 11 Nov (pension corridor, real estate cycle): key -> (highlight phrases, rule)
O7={
'pq7:49':(['projected benefit obligation (PBO) was $620 million','accumulated unrecognized net actuarial loss at the beginning of the year was $95 million','average remaining service life of the active employees is 12 years'],'Corridor = 10% × the greater of beginning PBO and beginning plan assets; amortization = (accumulated loss − corridor) ÷ average remaining service life.'),
'pq7:50':(['Valtor amortizes actuarial gains and losses with the corridor approach','a peer company reports under IFRS'],'Corridor approach: US GAAP only. IFRS: remeasurements go to OCI and are never amortized into profit or loss.'),
'pq7:51':(['@row:Vacancy rate','@row:Rent growth','@row:New construction'],'Cycle: recovery → expansion → hyper-supply → recession. Construction still delivering while vacancy rises and rent growth slows = hyper-supply.'),
'pq7:52':(['@row:Vacancy rate','@row:New construction','@row:Lenders','@row:Property prices'],'Vacancy at its high, negative rents, halted construction, tightening credit and falling prices = recession.'),
}
