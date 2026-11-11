# Mock 11 + Mock 12 (one exam, 22 vignettes = 88 Q; two sessions of 44 Q). Random draw: mock1112_pick.py. Names and numbers are changed in every vignette,
# all calculations are recomputed below, listed items are renumbered, concept option orders are balanced at the end, text no question uses is cut.
import json,sys,itertools,collections,random,re,copy
sys.path.insert(0,'/home/user/jimin/bank/exam')
from mock7_tweak import perm
def mkq(q,opts,ans,whys,hl,rule,fixed=False):
    why='\n'.join(f"{'ABC'[i]}. {'Correct' if i==ans else 'Incorrect'}. {w}" for i,w in enumerate(whys))
    return dict(q=q,options=opts,answer=ans,why=why,hint=dict(hl=hl,rule=rule),_fixed=fixed)
V=[]
def add(paper,topic,body,qs):
    body=body.strip()
    for q in qs:
        for h in q['hint']['hl']:
            if not h.startswith('@row:'): assert h in body or h in q['q'],(topic,h)
            else: assert any(l.lstrip('# ').split(' | ')[0].strip().lower().startswith(h[5:].lower()) for l in body.split('\n')),(topic,h)
        assert len(set(q['options']))==3,q['options']
    V.append(dict(paper=paper,topic=topic,body=body,questions=qs))
def m(x): return f"${x:,.0f}"
# ===================== M11 Corporate Issuers: Dvorak / Karsa Products (payout, reading 13) =====================
sh=80; bv=31.50; px=24.00; eps=1.92; ni=eps*sh; rep=36; kd=8.60
n_rep=rep/px; bv_new=(bv*sh-rep)/(sh-n_rep); bvA=(bv*sh)/(sh)-rep/sh; bvC=(bv*sh-rep)/sh if False else (bv*sh)/(sh-n_rep)
bvA=(bv*sh-rep)/sh; bvC=(bv*sh)/(sh-n_rep)
ey=eps/px*100
assert abs(ni-153.6)<1e-9 and abs(n_rep-1.5)<1e-9 and round(bv_new,2)==31.64 and round(bvA,2)==31.05 and round(bvC,2)==32.10 and round(ey,2)==8.00 and kd>ey
body=f"""Marek Dvorak is an analyst in the research department of an international securities firm. Dvorak is currently analyzing Karsa Products, a publicly traded global consumer goods company located in the United States. Selected data for Karsa are presented in Exhibit 1.

Exhibit 1
Selected Financial Data for Karsa Products
# Item | Value
Earnings per share (most recent fiscal year) | US${eps:.2f}
Shares outstanding | {sh} million
Book value per share | US${bv:.2f}
Share price | US${px:.2f}
Karsa currently does not pay a dividend, and the company operates with a target capital structure of 40% debt and 60% equity. However, on a recent conference call, Karsa's management indicated that they are considering four payout proposals:

Proposal #1: Repurchase US${rep} million in shares using surplus cash.

Proposal #2: Initiate a regular cash dividend.

Proposal #3: Issue a 10% stock dividend.

Proposal #4: Repurchase US${rep} million in shares by borrowing US${rep} million at an after-tax cost of borrowing of {kd:.2f}%."""
add('M11','Corporate Issuers',body,[
 mkq("The implementation of Proposal #3 would generally lead to shareholders:",["having the same proportionate ownership as before implementation.","having to pay tax on the dividend received.","experiencing a decrease in the total cost basis of their shares."],0,
  ["A stock dividend gives every shareholder the same proportionate increase in shares, so proportionate ownership does not change. Stock dividends are generally not taxable and the total cost basis is unchanged (only the cost basis per share falls).","Stock dividends are generally not taxable to shareholders.","The total cost basis does not change; it is merely spread over more shares, so the cost basis per share decreases."],
  ["Proposal #3: Issue a 10% stock dividend."],"Stock dividend: no cash paid, no tax, same proportionate ownership, total cost basis unchanged."),
 mkq("If Karsa's management implemented Proposal #1 at the current share price shown in Exhibit 1, Karsa's book value per share after implementation would be closest to:",[f"US${bvA:.2f}.",f"US${bv_new:.2f}.",f"US${bvC:.2f}."],1,
  [f"This subtracts the repurchase from total book value but divides by the original {sh} million shares: (2,520 − {rep}) ÷ {sh} = US${bvA:.2f}.",f"Total book value = {bv} × {sh} = US$2,520 million. Shares repurchased = {rep} ÷ {px:.0f} = {n_rep:.1f} million, leaving {sh-n_rep:.1f} million shares. Book value after the buyback = (2,520 − {rep}) ÷ {sh-n_rep:.1f} = US${bv_new:.2f}.",f"This reduces the share count but not the book value: 2,520 ÷ {sh-n_rep:.1f} = US${bvC:.2f}."],
  ["Repurchase US$36 million in shares using surplus cash","@row:Book value per share","@row:Share price"],"Buyback: equity falls by the amount paid and shares fall by amount ÷ price; BVPS = (equity − repurchase) ÷ remaining shares.",True),
 mkq("Based on Exhibit 1, if Karsa's management implemented Proposal #4 at the current share price, earnings per share would:",["decrease.","remain unchanged.","increase."],0,
  [f"EPS rises when the earnings yield exceeds the after-tax cost of borrowing. Karsa's earnings yield is {ey:.2f}% (= US${eps:.2f} ÷ US${px:.2f}), which is below the after-tax cost of borrowing of {kd:.2f}%, so EPS decreases.",f"EPS is unchanged only if the earnings yield equals the after-tax cost of borrowing; {ey:.2f}% does not equal {kd:.2f}%.",f"EPS would increase only if the earnings yield ({ey:.2f}%) exceeded the after-tax cost of borrowing ({kd:.2f}%); it does not."],
  ["after-tax cost of borrowing of 8.60%","@row:Earnings per share","@row:Share price"],"Debt-financed repurchase: EPS rises if the earnings yield (EPS ÷ price) > after-tax cost of debt, falls if it is lower."),
 mkq("Based on Karsa's target capital structure, Proposal #2 will most likely:",["increase the default risk of Karsa's debt.","increase the agency conflict between Karsa's shareholders and managers.","decrease the agency conflict between Karsa's shareholders and bondholders."],0,
  ["Karsa is financed by both debt and equity, so paying dividends can increase the agency conflict between shareholders and bondholders: dividends reduce the cash cushion available for the fixed payments to bondholders, and all else equal they increase the default risk of the debt.","Paying out free cash decreases (not increases) the agency conflict between shareholders and managers.","Dividends increase (not decrease) the conflict between shareholders and bondholders."],
  ["target capital structure of 40% debt and 60% equity","Initiate a regular cash dividend"],"Dividends move cash from the company to shareholders: lower cushion for bondholders (more default risk), less free cash for managers to waste."),
])
# ===================== M11 Portfolio Management: Varga / Northbridge (economic cycles and markets, reading 34) =====================
body="""Elias Varga and Noel Fischer are analysts at Northbridge Economic Research (NER), an economic research firm. NER focuses on providing research and investment recommendations to the global asset management community. Varga and Fischer are reviewing Countries A, B, and C for possible investment.

They discuss the role that economic news has in adjusting market valuations. Varga provides the example of economic data that were recently released on Country B's economy. The most recent report showed that quarterly GDP declined at a 1.8% annualized rate. This was relative to market expectations of a 0.9% decline. Varga discusses the immediate impact of the release of Country B's GDP report on the credit spreads of Country B's government bonds.

NER forecasts that Country B and Country C will experience the same long-term real GDP growth rate, which is significantly higher than the growth rate estimate for Country A. NER's expectations are that Country C and Country A will have similar levels of volatility of real GDP growth, with volatility expected to be significantly higher than that of Country B.

Irene Kovac is an equity strategist at NER. Kovac believes it is important to study the relationships between economic cycles and corporate earnings, and she has made the following observations:

Observation 1: Durable goods manufacturers have much more volatile earnings profiles than non-durable goods manufacturers because of the dramatic shifts in economic cycle-related demand.
Observation 2: An understanding of the business cycle is more important for making earnings projections over the long term than the short term.
Observation 3: Corporate profitability tends to be a lagging indicator of the business cycle and improvements are not typically evident until a recovery is well underway.

NER also offers a corporate bond research service designed to identify attractive industries for fixed-income investment based on economic cycles. NER is currently forecasting a period of above-consensus growth."""
add('M11','Portfolio Management',body,[
 mkq("Following the GDP release, the credit spreads of Country B's government bonds are most likely to:",["narrow.","remain unchanged.","widen."],2,
  ["Country B posted a GDP number that was worse than expectations; an unexpected negative surprise widens (not narrows) spreads.","Market news matters when it differs from the consensus, which is already priced in. This was a negative surprise, so spreads do not stay unchanged.","Market news changes valuations only when it differs from consensus expectations. A 1.8% decline against an expected 0.9% decline is an unexpected negative surprise, so spreads should widen, all else being equal."],
  ["declined at a 1.8% annualized rate","market expectations of a 0.9% decline"],"Only the surprise relative to consensus moves prices: better than expected → spreads narrow; worse than expected → spreads widen."),
 mkq("Based on NER's GDP growth forecasts, which country will most likely have the highest short-term interest rates, all else being equal?",["Country A","Country B","Country C"],2,
  ["Country A is expected to have the lowest real GDP growth by a significant amount. Real default-free interest rates are positively correlated with both real GDP growth and its volatility.","Country B has the highest growth (tied with Country C) but the lowest volatility of real GDP growth, so it ranks behind Country C.","Country C has the highest real GDP growth (tied with Country B) and also high volatility of real GDP growth, and real default-free interest rates are positively correlated with both."],
  ["same long-term real GDP growth rate","volatility expected to be significantly higher than that of Country B"],"Real rates rise with expected real growth and with the volatility of real growth: highest growth and highest volatility → highest rates."),
 mkq("Which of Kovac's observations regarding economic cycles and corporate earnings is most accurate?",["Observation 1","Observation 2","Observation 3"],0,
  ["Durable goods manufacturers do have more volatile earnings than non-durable goods manufacturers because of the dramatic shifts in cycle-related demand.","An understanding of the business cycle is crucial for earnings projections, particularly in the short term, not mainly the long term.","Corporate profitability is a leading, not lagging, indicator of the business cycle; improvements are often evident before a recovery is underway."],
  ["Durable goods manufacturers have much more volatile earnings profiles"],"Durable goods: more cyclical, more volatile earnings. Profits lead the cycle; the cycle matters most for short-term earnings forecasts."),
 mkq("Based on NER's global economic forecast, which of the following industries is most appropriate for NER's corporate bond research service to recommend?",["Household products industry","Tobacco industry","Automobile industry"],2,
  ["Household products is a stable consumer staples industry, which tends to lag in times of narrowing spreads.","Tobacco is a stable consumer staples industry, which tends to lag in times of narrowing spreads.","In a period of above-consensus growth, spreads narrow and lower-rated, more economically sensitive bonds outperform bonds in more stable industries. Automobile bonds are more economically sensitive than consumer staples bonds."],
  ["above-consensus growth"],"Growth above consensus → spreads narrow → cyclical, lower-rated bonds outperform stable (staples) bonds."),
])
# ===================== M11 Equity: Kessler (private company valuation, reading 22; re-skin of the Brady vignette) =====================
rev,cogs,sga,dep_,tx=36_000_000,22_600_000,6_100_000,1_820_000,0.30
gp=rev-cogs; ebitda=gp-sga; ebit=ebitda-dep_; taxes=round(ebit*tx); oat=ebit-taxes
adj_comp,adj_ret,adj_air,adj_rent,adj_dep=650_000,45_000,16_000-5_000,420_000*(7.50-6.00),34_000
nebit=ebit+adj_comp+adj_ret+adj_air+adj_rent+adj_dep; noat=nebit*(1-tx)
w1=(nebit-adj_dep)*(1-tx); w2=(nebit-adj_air)*(1-tx)
assert (gp,ebitda,ebit,taxes,oat)==(13_400_000,7_300_000,5_480_000,1_644_000,3_836_000) and nebit==6_850_000 and abs(noat-4_795_000)<1e-6 and round(w1)==4_771_200 and round(w2)==4_787_300
dloc,dlom=0.18,0.22; tot_d=1-(1-dloc)*(1-dlom); add_d=dloc+dlom; comp_d=(1+dloc)*(1+dlom)-1
assert round(tot_d*100,1)==36.0 and round(add_d*100,1)==40.0 and round(comp_d*100,1)==44.0
rf,infl,erp,beta,size,ind,spec=3.5,2.0,5.0,1.1,3.0,0.0,1.5
ecapm=rf+beta*erp+size+ind+spec; bu=rf+erp+size+ind+spec; wrong=ecapm+infl
assert round(ecapm,1)==13.5 and round(bu,1)==13.0 and round(wrong,1)==15.5
body=f"""Owen Kessler is a partner at a firm that facilitates investments and sales of interests in privately-held firms. He is reviewing several firms that are seeking investors or purchasers.

PINECREST COMPANY

Gil Mercer founded Pinecrest Company 24 years ago and wants to retire. Knowing the importance of sound financial practices, Mercer has audited financial statements for Pinecrest for each of the past 10 years. Pinecrest operates in a declining growth segment of its industry. The firm's plant is located in a busy and growing industrial area and may be attractive to nearby businesses seeking to expand. Many of its fixed assets, including machinery and equipment, can be used in other businesses. There are two large multinational publicly-held firms that are in the same industry as Pinecrest and private market transactions of firms in the industry occur once every 1-2 years. After collecting information from Mercer, Kessler considers what method he should use for valuing Pinecrest.

The following month, Mercer contacts Kessler to tell him that his older son is willing to leave his position with a public firm and become CEO of Pinecrest. As part of the arrangement, the son wants Kessler to find minority investors to provide capital for various plant upgrades and for developing new markets. Kessler estimates investors in a private firm such as Pinecrest will require an 18% discount for lack of control and a 22% discount for lack of marketability.

DUNMERE COMPANY

Dunmere is a family-owned firm that the family wishes to sell in order to set up a charitable foundation. The father, mother, and daughter all participate in the business. Kessler reviews their financial statements and comes to these conclusions:

Compensation, which is part of SG&A, was $650,000 higher per year for family members than is typical for firms of comparable size and sales revenue.
The top officers of the firm had annual "strategic planning retreats" at various resort locations with annual expenses (part of SG&A) averaging $45,000. Kessler thought this was unnecessary and excessive for this type of firm.
The firm owns a private plane, book value of $220,000 with annual operating expenses of $16,000 and annual depreciation expense of $34,000. Given their business, owning such an asset is unusual as annual business air travel would cost approximately $5,000.
The parents own a 420,000 square foot warehouse which they rent to Dunmere at a cost of $7.50 a square foot annually. Market-based leases for this type of facility average $6.00 a square foot. This would affect reported SG&A expense.
Exhibit 1 shows selected financial data from Dunmere. Kessler computes the firm's normalized operating income after taxes.

Exhibit 1
# | As reported
Revenues | {m(rev)}
Costs of goods sold | {m(cogs)}
Gross profit | {gp:,}
SG&A expense | {m(sga)}
EBITDA | {ebitda:,}
Depreciation | {m(dep_)}
EBIT | {ebit:,}
Pro forma taxes (30%) | {m(taxes)}
Operating income after taxes | {m(oat)}

Kessler also collects the following estimates to compute a discount rate for Dunmere:

Nominal risk-free rate: {rf:.1f}%
Expected inflation rate: {infl:.1f}%
Equity risk premium: {erp:.1f}%
Beta for similar firms, adjusted for capital structure differences: {beta:.1f}
Small stock premium: {size:.1f}%
Industry risk premium: {ind:.0f}%
Company-specific risk adjustment: {spec:.1f}%"""
add('M11','Equity Valuation',body,[
 mkq("Based on the information initially collected from Mercer about his firm, the appropriate method for valuing Pinecrest is:",["the guideline transactions method.","the asset-based approach.","the guideline public company method."],1,
  ["Private transactions occur only once every 1-2 years, so there are too few recent transactions for the guideline transactions method.","Pinecrest's fixed assets can be used in other businesses and its site is attractive to nearby businesses, so asset value is a meaningful floor and measure of value; with a declining growth segment, income-based measures are less reliable.","Only two large multinational public firms exist in the industry, which is too few (and too different in size) for the guideline public company method."],
  ["Many of its fixed assets, including machinery and equipment, can be used in other businesses","private market transactions of firms in the industry occur once every 1-2 years","declining growth segment"],"Asset-based approach: assets with alternative uses and an attractive site, few comparables and few transactions, low growth."),
 mkq("If Mercer's son becomes Pinecrest's CEO, the valuation discount for the additional equity investors will be closest to:",[f"{add_d*100:.1f}%.",f"{tot_d*100:.1f}%.",f"{comp_d*100:.1f}%."],1,
  [f"This adds the two discounts ({dloc*100:.0f}% + {dlom*100:.0f}%); they do not add.",f"Total discount = 1 − (1 − DLOC)(1 − DLOM) = 1 − (1 − {dloc:.2f})(1 − {dlom:.2f}) = {tot_d*100:.1f}%.",f"This compounds the discounts upward: (1 + {dloc:.2f})(1 + {dlom:.2f}) − 1 = {comp_d*100:.1f}%."],
  ["18% discount for lack of control and a 22% discount for lack of marketability"],"Combine discounts multiplicatively: 1 − (1 − DLOC)(1 − DLOM).",True),
 mkq("The normalized operating income after taxes for Dunmere is closest to:",[f"${w1:,.0f}.",f"${noat:,.0f}.",f"${w2:,.0f}."],1,
  [f"This misses the plane's {adj_dep:,} depreciation: ({nebit:,.0f} − {adj_dep:,}) × (1 − 0.30) = ${w1:,.0f}.",f"Remove excess compensation 650,000, retreats 45,000, excess air travel 11,000 (16,000 − 5,000) and excess warehouse rent 630,000 (420,000 × $1.50); remove the plane's 34,000 depreciation: EBIT {nebit:,.0f}, tax {nebit*tx:,.0f}, after tax ${noat:,.0f}.",f"This misses the 11,000 excess air travel cost: ({nebit:,.0f} − 11,000) × (1 − 0.30) = ${w2:,.0f}."],
  ["was $650,000 higher per year","averaging $45,000","annual operating expenses of $16,000 and annual depreciation expense of $34,000","at a cost of $7.50 a square foot annually","@row:EBIT"],"Normalize EBIT for each non-market item (include the removed plane's depreciation), then tax: normalized EBIT × (1 − t).",True),
 mkq("Kessler's estimate for the required return on equity for Dunmere using the expanded CAPM is closest to:",[f"{bu:.1f}%.",f"{ecapm:.1f}%.",f"{wrong:.1f}%."],1,
  [f"This is the build-up method: {rf:.1f}% + {erp:.1f}% + {size:.1f}% + {ind:.0f}% + {spec:.1f}% = {bu:.1f}%.",f"Expanded CAPM = risk-free rate + beta × equity risk premium + small stock premium + industry premium + company-specific premium = {rf:.1f}% + {beta:.1f} × {erp:.1f}% + {size:.1f}% + {ind:.0f}% + {spec:.1f}% = {ecapm:.1f}%.",f"This wrongly adds the expected inflation rate to the nominal risk-free rate: {ecapm:.1f}% + {infl:.1f}% = {wrong:.1f}%."],
  ["Beta for similar firms, adjusted for capital structure differences","Small stock premium","Nominal risk-free rate"],"Expanded CAPM keeps beta × ERP and adds size, industry and company-specific premiums; the build-up method has no beta. The nominal risk-free rate already includes inflation.",True),
])
# ===================== M11 Derivatives: Fischer / Redstone (reading 28; re-skin of the Stone Ridge vignette) =====================
rf,S0b,cpn=0.018,1087.60,20
pvc=cpn/(1+rf)**(90/360)+cpn/(1+rf)**(270/360); F0=(S0b-pvc)*(1+rf); F_a=(S0b-pvc)*(1+rf)**0.5; F_c=S0b*(1+rf)
assert round(F0)==1067 and round(F_a)==1057 and round(F_c)==1107
NP_f,old_f,r2m,r5m=5_000_000,0.0240,0.015,0.025
fra_new=((1+r5m*150/360)/(1+r2m*60/360)-1)*360/90
v_ok=(fra_new-old_f)*(90/360)*NP_f/(1+r5m*150/360); v_a=(fra_new-old_f)*(90/360)*NP_f; v_b=(fra_new-old_f)*(90/360)*NP_f/(1+r5m*90/360)
assert [round(v_ok),round(v_a),round(v_b)]==[9387,9485,9426]
def pvf(r,d): return round(1/(1+r/100*d/360),4)
dd_=[90,180,270,360]; eur=[0.355,0.405,0.440,0.470]; hk=[0.620,0.780,0.860,0.950]
Ze=[pvf(r,d) for r,d in zip(eur,dd_)]; Zh=[pvf(r,d) for r,d in zip(hk,dd_)]
fe=(1-Ze[3])/sum(Ze)*4*100; fh=(1-Zh[3])/sum(Zh)*4*100; fw=(1-Ze[3])/Ze[3]*4*100
assert [round(fe,2),round(fh,2),round(fw,2)]==[0.47,0.95,1.89],(fe,fh,fw)
NPa,S0i,S1i,fx=60_000_000,2850,3135,0.052
d2=[60,150,240,330]; rr=[0.95,1.12,1.30,1.45]; Zs=[pvf(r,d) for r,d in zip(rr,d2)]
ratio=S1i/S0i; cq=fx/4; FB=cq*sum(Zs)+Zs[3]; MV=NPa*(ratio-FB); MVa=(ratio-1-fx)*NPa; MVb=NPa*(ratio-(cq*sum(Zs)+1))
assert abs(MV-3_687_780)<100 and round(MVa)==2_880_000 and abs(MVb-2_900_000)<5_000,(MV,MVa,MVb)
body=f"""Leon Fischer is a managing director in the Derivatives Group at Redstone Capital Partners (RCP). Fischer specializes in advising clients on the use of derivatives to manage portfolio management strategies. Fischer is preparing to meet with four of the firm's clients: Hana Ito, Dana Wells, Arjun Rao, and Peter Lindqvist.

Three months ago (90 days), Ito purchased a bond with a 4% annual coupon and a maturity date of eight years from the date of purchase. The bond has a face value of US$1,000 and pays interest every 180 days from the date of issue. Ito is concerned about a potential increase in interest rates over the next year and has approached Fischer for advice on how to use forward contracts to manage this risk. Fischer advises Ito to enter into a short position in a fixed-income forward contract expiring in 360 days. The annualized risk-free rate now is 1.8% per year and the price of the bond with accrued interest is US$1,087.60.

One month ago (30 days), Wells entered a pay-fixed 3 × 6 forward rate agreement (FRA) at a rate of 2.40% with a notional amount of US$5,000,000. Now, 30 days after entering the FRA, the two-month MRR is 1.5% and the five-month MRR is 2.5%.

Rao, who is based in Hong Kong SAR, requires a one-year bridge loan in euros to fund operations in Germany. He wants to fund this loan at a competitive rate. Fischer advises Rao to borrow HK dollars domestically and then enter into a one-year foreign currency swap to swap into euros. Exhibit 1 below provides Hong Kong and euro spot interest rates and present value factors.

Exhibit 1: Hong Kong and Euro Spot Interest Rates
# Days to Maturity | HK Dollars Spot Interest Rates (%) | HK Dollars Present Value Factors | Euro Spot Interest Rates (%) | Euro Present Value Factors
""" + "\n".join(f"{d} | {a:.3f} | {zh:.4f} | {b:.3f} | {ze:.4f}" for d,a,zh,b,ze in zip(dd_,hk,Zh,eur,Ze)) + f"""

Peter Lindqvist is based in Australia and entered into a one-year equity swap 30 days ago. Under the terms of the swap, he would receive the return on the S&P/ASX 200 Financials Index and pay a fixed annual interest rate of 5.2% on a notional amount of AUD60,000,000. The swap payments are quarterly. At the time the swap was initiated 30 days ago, the value of the index was 2,850. Today, the value of the index is 3,135. Exhibit 2 provides present value factors based on the current Australian term structure of interest rates.

Exhibit 2: Present Value Factors Based on Current Australian Term Structure
# Days to Maturity | Present Value Factors
""" + "\n".join(f"{d} | {z:.4f}" for d,z in zip(d2,Zs))
add('M11','Derivatives',body,[
 mkq("Based on a 360-day year, the price of the forward contract on the bond purchased by Ito is closest to:",[f"US${F_a:,.0f}.",f"US${F0:,.0f}.",f"US${F_c:,.0f}."],1,
  [f"This compounds the bond price net of coupons for only 180 days: (1,087.60 − {pvc:.3f}) × 1.018^(180/360) = US${F_a:,.0f}.",f"Time 0 is the forward initiation date, 90 days after the purchase, and T is 360 days. PV of coupons = 20 ÷ 1.018^(90/360) + 20 ÷ 1.018^(270/360) = {cpn/(1+rf)**0.25:.3f} + {cpn/(1+rf)**0.75:.3f} = US${pvc:.3f}. F0(T) = (1,087.60 − {pvc:.3f}) × 1.018^(360/360) = US${F0:,.0f}.",f"This does not deduct the PV of the coupons: 1,087.60 × 1.018 = US${F_c:,.0f}."],
  ["pays interest every 180 days","expiring in 360 days","price of the bond with accrued interest is US$1,087.60"],"Forward on a coupon bond = (spot price incl. accrued interest − PV of coupons paid before expiry) × (1 + r)^T.",True),
 mkq("The current value of Wells's FRA is closest to:",[f"US${v_a:,.0f}.",f"US${v_ok:,.0f}.",f"US${v_b:,.0f}."],1,
  [f"This leaves the settlement undiscounted: {fra_new*100:.3f}% − 2.40% = {(fra_new-old_f)*100:.3f}%; × 90/360 × 5,000,000 = US${v_a:,.0f}.",f"The new 2 × 5 rate = [(1 + 0.025 × 150/360) ÷ (1 + 0.015 × 60/360) − 1] × 360/90 = {fra_new*100:.3f}%. For the pay-fixed side, V = (FRA now − FRA contract) × (90/360) × notional ÷ (1 + 0.025 × 150/360) = US${v_ok:,.0f}.",f"This discounts over 90 days instead of the 150 days to the end of the underlying period: US${v_b:,.0f}."],
  ["pay-fixed 3 × 6 forward rate agreement","two-month MRR is 1.5% and the five-month MRR is 2.5%"],"FRA value = (new FRA rate − contract rate) × (m/360) × notional, discounted over the days to the end of the underlying period; the pay-fixed side gains when rates rise.",True),
 mkq("Based on the information in Exhibit 1, the annual fixed swap rate Rao would pay is closest to:",[f"{fe:.2f}%.",f"{fh:.2f}%.",f"{fw:.2f}%."],0,
  [f"The euro fixed rate Rao pays: (1 − {Ze[3]:.4f}) ÷ ({Ze[0]:.4f} + {Ze[1]:.4f} + {Ze[2]:.4f} + {Ze[3]:.4f}) = {(1-Ze[3])/sum(Ze)*100:.4f}% per quarter; annualized × 4 = {fe:.2f}%.",f"This is the fixed rate for HK dollars, which Rao would receive: (1 − {Zh[3]:.4f}) ÷ {sum(Zh):.4f} × 4 = {fh:.2f}%.",f"This divides by the last factor instead of the sum of the factors: (1 − {Ze[3]:.4f}) ÷ {Ze[3]:.4f} × 4 = {fw:.2f}%."],
  ["swap into euros","Euro Present Value Factors"],"Swap fixed rate = (1 − final PV factor) ÷ sum of PV factors for the currency of that leg; annualize with periods per year. Rao pays the euro leg.",True),
 mkq("Based on the information in Exhibit 2, the market value of Lindqvist's equity swap is closest to:",[f"AUD {MVa:,.0f}.",f"AUD {MVb:,.0f}.",f"AUD {MV:,.0f}."],2,
  [f"This multiplies the index return less the fixed rate by the notional: ({ratio-1:.4f} − 0.052) × 60,000,000 = AUD {MVa:,.0f}.",f"This discounts only the coupons and treats the fixed bond's par as 1 (not its present value): AUD {MVb:,.0f}.",f"Receive-equity, pay-fixed swap: MV = notional × [S_t ÷ S_0 − fixed-rate bond value]. S_t ÷ S_0 = 3,135 ÷ 2,850 = {ratio:.4f}. Quarterly coupon = 5.2% ÷ 4 = 1.3%; fixed-rate bond = 0.013 × ({sum(Zs):.4f}) + {Zs[3]:.4f} = {FB:.4f}. MV = 60,000,000 × ({ratio:.4f} − {FB:.4f}) = AUD {MV:,.0f}."],
  ["receive the return on the S&P/ASX 200 Financials Index and pay a fixed annual interest rate of 5.2%","the value of the index was 2,850","Today, the value of the index is 3,135"],"Equity swap value (receive equity, pay fixed) = notional × (S_t ÷ S_0 − PV of the fixed-rate bond per 1 of notional).",True),
])
# ===================== M11 Equity: Alves / Meridian (market-based valuation, reading 20; re-skin of the Silveira vignette) =====================
px_=dict(N=18.60,C=64.80,V=118.30); eps_t=dict(N=0.95,C=3.35,V=-0.12); eps_f=dict(N=1.05,C=2.70,V=2.35); gr=dict(N=15.40,C=24.50,V=28.60)
under=0.95-0.06+0.02; pe_u=px_['N']/under; pe_raw=px_['N']/0.95; pe_adj=px_['N']/(under-0.01)
assert round(under,2)==0.91 and [round(pe_raw,1),round(pe_u,1),round(pe_adj,1)]==[19.6,20.4,20.7]
peg={k:px_[k]/eps_f[k]/gr[k] for k in px_}
assert peg['C']<peg['N']<peg['V'] and [round(peg[k],2) for k in 'NCV']==[1.15,0.98,1.76]
debt,cs,pref,cash,sti,ebitda=1950,7240,310,625,540,640
ev=debt+cs+pref-cash-sti; ev_a=debt+cs+pref-cash; ev_c=debt+cs+pref
assert ev==8335 and [round(ev/ebitda,1),round(ev_a/ebitda,1),round(ev_c/ebitda,1)]==[13.0,13.9,14.8]
body=f"""Rita Alves is a supervisor in the equity research division of Meridian Securities. Alves asks Tiago Ramos, a junior analyst, to complete an analysis of Norte S.A., Costa S.A., and Valle S.A.

Alves directs Ramos to use a valuation metric that would allow for a meaningful ranking of relative value of the three companies' shares. Exhibit 1 provides selected financial information for the three companies.

Exhibit 1: Selected Financial Information for Norte, Costa, and Valle (Mexican Peso, MXN)
# | Norte | Costa | Valle
Stock's current price | {px_['N']:.2f} | {px_['C']:.2f} | {px_['V']:.2f}
Diluted EPS (last four quarters) | {eps_t['N']:.2f} | {eps_t['C']:.2f} | {eps_t['V']:.2f}
Diluted EPS (next four quarters) | {eps_f['N']:.2f} | {eps_f['C']:.2f} | {eps_f['V']:.2f}

Ramos reviews underlying trailing EPS for Norte. Ramos finds the following note in Norte's financial statements:

"On a per share basis, Norte incurred in the last four quarters

i. from a lawsuit, a nonrecurring gain of MXN0.06; and

ii. from a plant restructuring, a nonrecurring cost of MXN0.02 and a recurring cost of MXN0.01 in increased depreciation."

Ramos estimates five-year earnings growth rates for the three companies, which are presented in Exhibit 2.

Exhibit 2: Earnings Growth Rate Estimates over Five Years
# Company | Earnings Growth Rate Estimate (%)
Norte | {gr['N']:.2f}
Costa | {gr['C']:.2f}
Valle | {gr['V']:.2f}

Ramos also analyzes the three companies using the enterprise value (EV)-to-EBITDA multiple. Ramos notes that the EBITDA for Valle for the most recent year is MXN{ebitda} million and gathers other selected information on Valle, which is presented in Exhibit 3.

Exhibit 3: Selected Information on Valle at Year End (MXN Millions)
# Market Value of Debt | Market Value of Common Equity | Market Value of Preferred Equity | Cash | Short-Term Investments
{debt:,} | {cs:,} | {pref} | {cash} | {sti}"""
add('M11','Equity Valuation',body,[
 mkq("Based on Alves's directive and the data from the last four quarters presented in Exhibit 1, the valuation metric that Ramos should use is the:",["price-to-earnings ratio (P/E).","earnings-to-price ratio (E/P).","P/E-to-growth ratio (PEG)."],1,
  ["Valle's negative trailing EPS makes its P/E negative and meaningless for ranking.","The E/P ratio puts Valle's negative EPS in the numerator, so a ranking is still meaningful (a lower or negative E/P ranks as less attractive).","The PEG ratio is built on the P/E, so it has the same problem with negative earnings (and it needs a growth estimate)."],
  ["meaningful ranking of relative value","@row:Diluted EPS (last four quarters)"],"Negative earnings: use E/P (earnings in the numerator), not P/E."),
 mkq("Based on Exhibit 1 and the note to Norte's financial statements, the trailing P/E for Norte using underlying EPS is closest to:",[f"{pe_raw:.1f}.",f"{pe_u:.1f}.",f"{pe_adj:.1f}."],1,
  [f"This uses reported EPS of 0.95 with no adjustment: 18.60 ÷ 0.95 = {pe_raw:.1f}.",f"Underlying EPS = 0.95 − 0.06 (nonrecurring gain) + 0.02 (nonrecurring cost) = MXN{under:.2f}; the recurring 0.01 is not adjusted. P/E = 18.60 ÷ {under:.2f} = {pe_u:.1f}.",f"This also removes the recurring depreciation cost (0.90): 18.60 ÷ 0.90 = {pe_adj:.1f}."],
  ["nonrecurring gain of MXN0.06","nonrecurring cost of MXN0.02 and a recurring cost of MXN0.01","@row:Stock's current price"],"Underlying EPS: remove nonrecurring gains and add back nonrecurring costs; leave recurring items in.",True),
 mkq("Based on Exhibit 1 and Exhibit 2, which company's shares are the most attractively priced based on the five-year forward P/E-to-growth (PEG) ratio?",["Norte","Costa","Valle"],1,
  [f"Forward PEG for Norte = (18.60 ÷ 1.05) ÷ 15.40 = {peg['N']:.2f}, higher than Costa's.",f"Forward PEG: Norte {peg['N']:.2f}; Costa (64.80 ÷ 2.70 = 24.00) ÷ 24.50 = {peg['C']:.2f}; Valle (118.30 ÷ 2.35 = 50.34) ÷ 28.60 = {peg['V']:.2f}. The lowest PEG is the most attractive: Costa.",f"Valle has the highest PEG ({peg['V']:.2f}), the least attractive."],
  ["@row:Diluted EPS (next four quarters)","Earnings Growth Rate Estimate (%)"],"Forward PEG = (price ÷ forward EPS) ÷ growth rate; the lowest PEG is the cheapest per unit of growth.",True),
 mkq("Based on Exhibit 3, Valle's EV/EBITDA multiple is closest to:",[f"{ev/ebitda:.1f}.",f"{ev_a/ebitda:.1f}.",f"{ev_c/ebitda:.1f}."],0,
  [f"EV = debt + common equity + preferred equity − cash − short-term investments = {debt:,} + {cs:,} + {pref} − {cash} − {sti} = {ev:,}; EV ÷ EBITDA = {ev:,} ÷ {ebitda} = {ev/ebitda:.1f}.",f"This subtracts cash but not short-term investments: {ev_a:,} ÷ {ebitda} = {ev_a/ebitda:.1f}.",f"This subtracts neither cash nor short-term investments: {ev_c:,} ÷ {ebitda} = {ev_c/ebitda:.1f}."],
  ["EBITDA for Valle for the most recent year is MXN640 million","Short-Term Investments"],"EV = market value of debt + common + preferred − cash and short-term investments; then divide by EBITDA.",True),
])
# ===================== M11 Fixed Income: Torres (term structure, reading 23; re-skin of the Tyo vignette) =====================
SP=dict(A=[0.55,0.90,1.25,1.55,1.80],B=[1.30,1.05,0.85,0.60,0.50],C=[1.90,2.20,2.60,2.85,3.10])
zc=SP['C']; f32=((1+zc[4]/100)**5/(1+zc[2]/100)**3)**0.5-1; f23=((1+zc[4]/100)**5/(1+zc[1]/100)**2)**(1/3)-1; f41=((1+zc[4]/100)**5/(1+zc[3]/100)**4)-1
assert [round(x*100,2) for x in (f23,f32,f41)]==[3.70,3.85,4.11]
SW=[("1 month ago",-0.12,0.18),("6 months ago",-0.10,0.35),("12 months ago",-0.09,0.02)]
spr=[round(s-g,2) for _,g,s in SW]; assert spr==[0.30,0.45,0.11]
body="""Nina Torres is a fund manager for an actively managed global fixed-income fund that buys bonds issued in Countries A, B, and C. She and her assistant are preparing the quarterly markets update. Torres begins the meeting by distributing the daily rates sheet, which includes the current government spot rates for Countries A, B, and C as shown in Exhibit 1.

Exhibit 1: Today's Government Spot Rates
# Maturity | Country A | Country B | Country C
""" + "\n".join(f"{n} | {SP['A'][i]:.2f}% | {SP['B'][i]:.2f}% | {SP['C'][i]:.2f}%" for i,n in enumerate(["One year","Two years","Three years","Four years","Five years"])) + """

Torres says, "We also look at risk in terms of the swap spread. We considered historical three-year swap spreads for Country B, which reflect that market's credit and liquidity risks, at three different points in time." Torres provides the information in Exhibit 2.

Exhibit 2: Selected Historical Three-Year Rates for Country B
# Period | Government Bond Yield (%) | Fixed-for-Floating MRR Swap (%)
""" + "\n".join(f"{a} | {g:.2f} | {s:.2f}" for a,g,s in SW) + """

She moves on to present her market views on the respective yield curves for a five-year investment horizon.

Country A: "The government yield curve has changed little in terms of its level and shape during the last few years, and I expect this trend to continue."

Country B: "Because of recent economic trends, I expect a reversal in the slope of the current yield curve, so that it will slope upward at all maturities."

Country C: "Because of recent economic trends, I expect a reversal in the slope of the current yield curve, so that it will slope downward at all maturities."

Torres's assistant asks, "Assuming investors require liquidity premiums, how can a yield curve slope downward? What does this imply about forward rates?"

Torres answers, "Even if investors require compensation for holding longer-term bonds, the yield curve can slope downward—for example, if there is an expectation of severe deflation. Regarding forward rates, it can be helpful to understand yield curve dynamics by calculating implied forward rates. To see what I mean, we can use Exhibit 1 to calculate the forward rate for a two-year Country C loan beginning in three years." """
add('M11','Fixed Income',body,[
 mkq("Based on Exhibit 2, the implied credit and liquidity risks as indicated by the historical three-year swap spreads for Country B were the lowest:",["1 month ago.","6 months ago.","12 months ago."],2,
  [f"Swap spread = swap rate − government yield. 1 month ago: 0.18 − (−0.12) = {spr[0]:.2f}%, which is not the lowest.",f"6 months ago: 0.35 − (−0.10) = {spr[1]:.2f}%, the highest of the three.",f"12 months ago: 0.02 − (−0.09) = {spr[2]:.2f}%, the lowest spread, so credit and liquidity risks were lowest then."],
  ["@row:1 month ago","@row:6 months ago","@row:12 months ago"],"Swap spread = swap rate − government bond yield of the same maturity; a lower spread means lower credit and liquidity risk.",True),
 mkq("Based on Exhibit 1 and assuming Torres's market views on yield curve changes are realized, the forward curve of which country will lie below its spot curve?",["Country A","Country B","Country C"],2,
  ["Country A stays upward sloping, so its forward curve lies above its spot curve.","Country B's downward-sloping curve is expected to reverse into an upward slope, so its forward curve will lie above its spot curve.","The forward curve lies below the spot curve when the spot curve slopes downward. Country C's upward-sloping curve is expected to reverse into a downward slope, so its forward curve will lie below its spot curve."],
  ["I expect a reversal in the slope of the current yield curve, so that it will slope downward","@row:Five years"],"Upward-sloping spot curve → forward curve above it; downward-sloping spot curve → forward curve below it. Apply the expected slope AFTER the reversal."),
 mkq("With respect to their discussion of yield curves, Torres and her assistant are most likely discussing which term structure theory?",["Pure expectations theory","Local expectations theory","Liquidity preference theory"],2,
  ["Pure expectations theory has no liquidity premium: forward rates are unbiased predictions of future spot rates.","Local expectations theory says returns over short holding periods are the same for all bonds; it does not describe liquidity premiums that grow with maturity.","Liquidity preference theory says liquidity premiums compensate investors for the added interest rate risk of lending long term and increase with maturity. Torres and her assistant assume investors require liquidity premiums."],
  ["Assuming investors require liquidity premiums","require compensation for holding longer-term bonds"],"Liquidity premium that rises with maturity → liquidity preference theory."),
 mkq("Torres's assistant should calculate a forward rate closest to:",[f"{f23*100:.2f}%.",f"{f32*100:.2f}%.",f"{f41*100:.2f}%."],1,
  [f"This is the three-year rate starting in two years: ((1.031)^5 ÷ (1.022)^2)^(1/3) − 1 = {f23*100:.2f}%.",f"(1 + z5)^5 = (1 + z3)^3 × (1 + f3,2)^2 → (1.0310)^5 = (1.0260)^3 × (1 + f3,2)^2 → f3,2 = {f32*100:.2f}%.",f"This is the one-year rate starting in four years: (1.0310)^5 ÷ (1.0285)^4 − 1 = {f41*100:.2f}%."],
  ["forward rate for a two-year Country C loan beginning in three years","@row:Five years","@row:Three years"],"Forward rate f(j,k): (1 + z_{j+k})^(j+k) = (1 + z_j)^j × (1 + f(j,k))^k; for a two-year loan starting in three years use the 3-year and 5-year spot rates.",True),
])
# ===================== M11 Economics: Vega (FX, reading 5; re-skin of the Lopez vignette) =====================
nzcad_b,nzcad_o=1.1860,1.1898; gbpcad_b,gbpcad_o=0.5862,0.5866
nz_gbp_dealer=(2.0090,2.0161)
cross_bid=nzcad_b/gbpcad_o; cross_off=nzcad_o/gbpcad_b
profit=cross_bid-nz_gbp_dealer[1]; profit_wrong=cross_off-nz_gbp_dealer[1]
assert round(cross_bid,4)==2.0218 and round(cross_off,4)==2.0297 and nz_gbp_dealer[1]<cross_bid and round(profit,4)==0.0057 and round(profit_wrong,4)==0.0136
mid=(nzcad_b+nzcad_o)/2; assert round(mid,4)==1.1879
rn,rc=0.0110,0.0045
prem=mid*((1+rn)/(1+rc)-1); prem_a=mid*0+ (rn-rc); prem_c=mid*((1+rc)/(1+rn)-1)
assert [round(prem,5),round(prem_a,5),round(prem_c,5)]==[0.00769,0.0065,-0.00764],(prem,prem_a,prem_c)
body=f"""Marisol Vega is a director in a firm that specializes in providing foreign currency advisory services. Vega is meeting with analyst Tomas Eriksen to discuss and identify foreign currency strategies and trades to recommend to clients.

Vega begins the meeting by asking Eriksen for his views on factors that affect the bid-offer spread on a currency quotation in the interbank market.

Eriksen responds, "Currency pairings are an important factor, but quotes for well known currency pairs have wider spreads in interbank markets than quotes for lesser known currency pairings. A client's credit risk is the most important factor impacting the spread. Clients with higher credit risk are quoted wider spreads for spot currency rates. The size of the transaction also impacts the spread. The larger the size of the transaction the wider the spread in the interbank markets."

Vega presents information on spot exchange rates and 360-day market reference rates (MRR) in Exhibit 1 and Exhibit 2 below and states, "one of our Canada-based clients has asked for recommendations on currency trades. A dealer has quoted a bid-offer rate of 2.0090/2.0161 in NZD/GBP; can you determine if there is a profitable currency trade? This client also wants to hedge exposure to the New Zealand dollar and wants to know the cost of the hedge, specifically, the forward premium or discount for a 360-day NZD/CAD forward contract."

Exhibit 1: Interbank Spot Exchange Rates
# Currency Pair (Price/Base) | Bid | Offer | Midpoint
NZD/CAD | {nzcad_b:.4f} | {nzcad_o:.4f} | {mid:.4f}
GBP/CAD | {gbpcad_b:.4f} | {gbpcad_o:.4f} | {(gbpcad_b+gbpcad_o)/2:.4f}

Exhibit 2: 360-Day Market Reference Rates
# Country | 360-day MRR
New Zealand | {rn*100:.2f}%
Canada | {rc*100:.2f}%

The discussion then moves to the determination of the equilibrium value of exchange rates and Vega states, "there are a number of international parity conditions that jointly determine long-run movements in exchange rates. One of the parity conditions, purchasing power parity (PPP), can be used to assess the long-run equilibrium value of nominal exchange rates. In particular, one version of PPP states that the equilibrium exchange rate between two countries is determined entirely by the ratio of their national price levels." """
add('M11','Economics',body,[
 mkq("Eriksen's response on factors affecting interbank bid-offer spreads is most likely correct with respect to:",["credit risk.","currency pair.","transaction size."],2,
  ["Given the short settlement cycle of spot foreign currency transactions (typically two business days), credit risk is not the most important factor in determining a client's spread.","Spreads are tighter (not wider) for well known, liquid currency pairs and wider for lesser known pairs.","Larger transactions are quoted wider spreads in the interbank market, because a larger position is harder for the dealer to offset. This part of the response is correct."],
  ["The larger the size of the transaction the wider the spread","well known currency pairs have wider spreads","credit risk is the most important factor"],"Bid-offer spreads: tighter for major, liquid pairs; wider for larger transactions and for higher client credit risk (but credit risk is not the most important factor for spot)."),
 mkq("Based on the dealer quote and the information in Exhibit 1, is it possible to generate a profit with a triangular arbitrage trade?",["No","Yes, for a profit of 0.0057 NZD per GBP",f"Yes, for a profit of {profit_wrong:.4f} NZD per GBP"],1,
  [f"It is possible: buy GBP from the dealer at 2.0161 and sell it in the interbank market at {cross_bid:.4f} for a profit.",f"Interbank cross NZD/GBP = NZD/CAD ÷ GBP/CAD. Bid = {nzcad_b:.4f} ÷ {gbpcad_o:.4f} = {cross_bid:.4f}; offer = {nzcad_o:.4f} ÷ {gbpcad_b:.4f} = {cross_off:.4f}. The dealer sells GBP at 2.0161, below the interbank bid of {cross_bid:.4f}: buy GBP at 2.0161 and sell at {cross_bid:.4f} for a profit of {profit:.4f} NZD per GBP.",f"This sells the GBP at the interbank offer ({cross_off:.4f}), which a seller cannot get: the seller receives the bid ({cross_bid:.4f})."],
  ["bid-offer rate of 2.0090/2.0161 in NZD/GBP","@row:NZD/CAD","@row:GBP/CAD"],"Triangular arbitrage: build the interbank cross (bid = bid ÷ offer of the other pair), then buy where it is cheap (dealer offer) and sell where it is dear (interbank bid).",True),
 mkq("Based on Exhibit 1 and Exhibit 2, the forward premium (discount) for a 360-day NZD/CAD forward contract is closest to:",[f"{prem_c:.5f}.".replace('-','–'),f"{prem_a:.5f}.",f"{prem:.5f}."],2,
  [f"This inverts the interest rate ratio: {mid:.4f} × [(1 + 0.0045) ÷ (1 + 0.0110) − 1] = {prem_c:.5f}, the wrong sign.",f"This is just the interest rate difference (0.0110 − 0.0045 = {prem_a:.4f}); it is not scaled by the spot rate or the base-currency interest factor.",f"CAD is the base currency and NZD is the price currency. F − S = S × [(1 + R_NZD) ÷ (1 + R_CAD) − 1] = {mid:.4f} × [(1.0110) ÷ (1.0045) − 1] = {prem:.5f} (a forward premium)."],
  ["@row:New Zealand","@row:Canada","forward premium or discount for a 360-day NZD/CAD forward contract"],"Forward premium = S × [(1 + R_price) ÷ (1 + R_base) − 1]; use the midpoint spot rate.",True),
 mkq("In her statement about PPP, Vega is most likely referring to the:",["absolute version of PPP.","relative version of PPP.","ex ante version of PPP."],0,
  ["The absolute version of PPP asserts that the equilibrium exchange rate between two countries is determined entirely by the ratio of their national price levels, which is what Vega describes.","The relative version of PPP says the percentage change in the spot rate is determined by the difference between foreign and domestic inflation rates, which Vega does not describe.","The ex ante version of PPP uses expected (not actual) inflation differences to forecast changes in the exchange rate; Vega does not mention expected inflation."],
  ["equilibrium exchange rate between two countries is determined entirely by the ratio of their national price levels"],"Absolute PPP: exchange rate = ratio of price levels. Relative PPP: % change in the exchange rate = inflation differential. Ex ante PPP: expected inflation differential."),
])
# ===================== M11 Quant: Okafor (time series, reading 2; re-skin of the Martinez vignette) =====================
import math
b0l,b1l=0.9800,0.0042
t182=b0l+b1l*182; p182=math.exp(t182); p_no_exp=t182; p_no_trend=math.exp(b0l)
assert [round(p_no_exp,2),round(p_no_trend,2),round(p182,2)]==[1.74,2.66,5.72],(p_no_exp,p_no_trend,p182)
a0,a1,a2=1.2000,1.3200,-0.3800; p_jul,p_aug=4.35,3.92
f_ok=a0+a1*p_aug+a2*p_jul; f_sw=a0+a1*p_jul+a2*p_aug; f_ni=a1*p_aug+a2*p_jul
assert [round(f_ok,2),round(f_sw,2),round(f_ni,2)]==[4.72,5.45,3.52],(f_ok,f_sw,f_ni)
c0,c1=0.2800,0.9100; mrl=c0/(1-c1); f1=c0+c1*p_aug
assert round(mrl,3)==3.111 and f1<p_aug and mrl<p_aug
body=f"""Dara Okafor, an energy sector analyst at an investment bank, is concerned about the future level of natural gas prices and how it might affect portfolio values. She is considering whether to recommend a hedge for the bank portfolio's exposure to changes in natural gas prices. Okafor examines Henry Hub natural gas monthly price data, expressed in US dollars per MMBtu, for the 181-month period from August 2003 through August 2018. The end-of-month price was ${p_jul:.2f} in July 2018 and ${p_aug:.2f} in August 2018 (Month 181).

After reviewing the time-series data, Okafor runs the following regressions using the price data.
* Linear trend model: Pricet = b0 + b1t + et.
* Log-linear trend model: ln Pricet = b0 + b1t + et.
* AR(1) model: Pricet = b0 + b1Pricet−1 + et.
* AR(2) model: Pricet = b0 + b1Pricet−1 + b2Pricet−2 + et.

Exhibit 1 presents selected data from the four regressions. At the 5% significance level, the lower critical value for the Durbin–Watson test statistic is 1.75 for both the linear and log-linear regressions.

Exhibit 1: Natural Gas Price per MMBtu, August 2003–August 2018
# | Linear | Log-Linear | AR(1) | AR(2)
Intercept | – | {b0l:.4f} | {c0:.4f} | {a0:.4f}
t (Trend) | – | {b1l:.4f} | – | –
Pricet−1 | – | – | {c1:.4f} | {a1:.4f}
Pricet−2 | – | – | – | {a2:.4f}
Durbin–Watson | 0.14 | 1.82 | – | –"""
add('M11','Quantitative Methods',body,[
 mkq("Based on Exhibit 1, the predicted natural gas price for September 2018 using the log-linear trend model is closest to:",[f"${p_no_exp:.2f}.",f"${p_no_trend:.2f}.",f"${p182:.2f}."],2,
  [f"This is the predicted value of ln(price), 0.9800 + 0.0042 × 182 = {t182:.4f}, which has not been converted back to a price.",f"This leaves out the trend term: e^0.9800 = ${p_no_trend:.2f}.",f"September 2018 is the first month out of sample, so t = 182. ln(price) = 0.9800 + 0.0042 × 182 = {t182:.4f}; price = e^{t182:.4f} = ${p182:.2f}."],
  ["Log-linear trend model: ln Pricet = b0 + b1t + et.","Month 181","@row:t (Trend)"],"Log-linear trend: ln(price) = b0 + b1·t; use t of the forecast month (first out-of-sample month = last observation + 1) and take e^ of the result.",True),
 mkq("Based on the regression output in Exhibit 1, there is evidence of positive serial correlation in the errors in:",["the linear trend model but not the log-linear trend model.","both the linear trend model and the log-linear trend model.","neither the linear trend model nor the log-linear trend model."],0,
  ["The Durbin–Watson statistic of the linear trend model is 0.14, below the lower critical value of 1.75, so we reject the null of no positive serial correlation. The log-linear model's statistic of 1.82 is above 1.75, so there is no evidence of positive serial correlation there.","The log-linear model's Durbin–Watson statistic (1.82) is above the lower critical value of 1.75, so there is no evidence of positive serial correlation in that model.","The linear trend model's Durbin–Watson statistic (0.14) is far below 1.75, so there is evidence of positive serial correlation in the linear model."],
  ["lower critical value for the Durbin–Watson test statistic is 1.75","@row:Durbin–Watson"],"Durbin–Watson below the lower critical value → reject no positive serial correlation; above it → no evidence of positive serial correlation."),
 mkq("Based on Exhibit 1, the forecasted natural gas price in September 2018 based on the AR(2) model is closest to:",[f"${f_ni:.2f}.",f"${f_ok:.2f}.",f"${f_sw:.2f}."],1,
  [f"This leaves out the intercept: 1.3200 × 3.92 − 0.3800 × 4.35 = ${f_ni:.2f}.",f"September 2018 is a one-period-ahead forecast. The last two observations are July 2018 (${p_jul:.2f}) and August 2018 (${p_aug:.2f}). Forecast = 1.2000 + 1.3200 × 3.92 − 0.3800 × 4.35 = ${f_ok:.2f}.",f"This swaps the lags (the more recent price must carry b1): 1.2000 + 1.3200 × 4.35 − 0.3800 × 3.92 = ${f_sw:.2f}."],
  ["AR(2) model: Pricet = b0 + b1Pricet−1 + b2Pricet−2 + et.","was $4.35 in July 2018 and $3.92 in August 2018"],"AR(2) one-step forecast = b0 + b1 × (latest price) + b2 × (price one month earlier).",True),
 mkq("Based on the mean-reverting level implied by the AR(1) model regression output in Exhibit 1, the forecasted natural gas price for September 2018 is most likely to be:",["less than $3.92.","equal to $3.92.","greater than $3.92."],0,
  [f"Mean-reverting level = b0 ÷ (1 − b1) = 0.2800 ÷ (1 − 0.9100) = ${mrl:.2f}. The August price of $3.92 is above this level, so the model predicts a fall: the AR(1) forecast is 0.2800 + 0.9100 × 3.92 = ${f1:.2f}, less than $3.92.","The price equals its mean-reverting level only if it already sits at $3.11; it does not.","The price would rise only if it were below the mean-reverting level; $3.92 is above $3.11."],
  ["AR(1) model: Pricet = b0 + b1Pricet−1 + et.","@row:Intercept","@row:Pricet−1"],"AR(1): price above the mean-reverting level b0 ÷ (1 − b1) → expected to fall; below it → expected to rise."),
])
# ===================== M11 FSA: Thornton / Veridian (intercorporate investments, reading 7; re-skin of the Thronen vignette) =====================
price,own=620,0.30
bv_na,fv_na,pe_bv,pe_fv,life=1500,1800,3100,3400,10
ni16,div16=400,240
gw=price-own*fv_na; excess=price-own*bv_na; pe_alloc=own*(pe_fv-pe_bv)
assert gw==80 and abs(excess-170)<1e-9 and abs(pe_alloc-90)<1e-9 and abs(gw-(excess-pe_alloc))<1e-9
cv=price+own*ni16-own*div16-pe_alloc/life; cv_a=price+own*ni16-own*div16; cv_c=price+own*ni16-pe_alloc/life
assert [round(cv),round(cv_a),round(cv_c)]==[659,668,731]
cash,ar,oth=30,90,40; cur,nonc,eq=35,45,80; borrow,inv,rec=60,15,75
assert cash+ar+oth==160 and cur+nonc+eq==160 and rec==borrow+inv
cons=(cash-inv+rec)+(ar-rec+rec)+oth; assert cons==220 and 160+borrow==220 and 160+rec==235
carry,recov,fv_ru,ina,gwl=16300,15950,15900,15400,700
ifrs=carry-recov; us=carry-fv_ru; impl=gwl-(fv_ru-ina)
assert ifrs==350 and us==400 and impl==200
body=f"""Alan Thornton is an analyst in the research department of an international securities firm. Thornton is preparing a research report on Veridian, Inc., a publicly-traded company that complies with IFRS. Thornton reviews recent transactions relating to Meridas Co. and Calder Co.

Meridas Co.

Meridas Co. plans to raise $60 million in capital by borrowing against its financial receivables. Meridas plans to create a special purpose entity (SPE), invest $15 million in the SPE, have the SPE borrow $60 million, and then use the total funds to purchase $75 million of receivables from Meridas. Meridas meets the definition of control and plans to consolidate the SPE. Meridas's current balance sheet is presented in Exhibit 1.

Exhibit 1: Meridas Co. Balance Sheet at 31 December 2016 ($ millions)
# Assets | Amount | Liabilities and equity | Amount
Cash | {cash} | Current liabilities | {cur}
Accounts receivable | {ar} | Noncurrent liabilities | {nonc}
Other assets | {oth} | Shareholders' equity | {eq}
Total assets | {cash+ar+oth} | Total liabilities and equity | {cur+nonc+eq}

Investment in Calder Co.

On 1 January 2016, Veridian acquired a 30% equity interest in Calder Co. for ${price} million. Exhibit 2 presents selected financial information for Calder on the acquisition date. Thornton notes that the plant and equipment are depreciated on a straight-line basis and have {life} years of remaining life.

Exhibit 2: Selected Financial Data for Calder Co., 1 January 2016 (Acquisition Date) ($ millions)
# | Book Value | Fair Value
Current assets | 300 | 300
Plant and equipment | {pe_bv:,} | {pe_fv:,}
Total assets | {300+pe_bv:,} | {300+pe_fv:,}
Liabilities | 1,900 | 1,900
Net assets | {bv_na:,} | {fv_na:,}

Thornton notes that, for fiscal year 2016, Calder reported net income of ${ni16} million and paid dividends of ${div16} million.

Thornton is concerned about possible goodwill impairment for Veridian due to expected changes in the industry effective at the end of 2017. He calculates the impairment loss based on selected data from the projected consolidated balance sheet data presented in Exhibit 3, assuming that the cash-generating unit and reporting unit of Veridian are the same.

Exhibit 3: Selected Financial Data for Veridian, Inc., Estimated Year Ending 31 December 2017 ($ millions)
# Item | Amount
Carrying value of cash-generating unit/reporting unit | {carry:,}
Recoverable amount of cash-generating unit/reporting unit | {recov:,}
Fair value of reporting unit | {fv_ru:,}
Identifiable net assets | {ina:,}
Goodwill | {gwl}"""
add('M11','Financial Statement Analysis',body,[
 mkq("Based on Exhibit 1 and Meridas's plans to borrow against its financial receivables, the new consolidated balance sheet will show total assets of:",["$160 million.","$220 million.","$235 million."],1,
  ["This ignores the new borrowing: the consolidated balance sheet grows by the $60 million the SPE borrows from outside the group.","The SPE will hold receivables of $75 million, long-term debt of $60 million and equity of $15 million. On consolidation, Meridas's cash rises by 75 − 15 = $60 million (the $60 million borrowed from outside) while the receivables stay on the balance sheet, and noncurrent liabilities rise by $60 million. Total assets = 160 + 60 = $220 million.","This adds the $75 million of receivables on top of the existing balance sheet, double counting them: the intercompany sale and the $15 million investment are eliminated on consolidation."],
  ["borrow $60 million","@row:Total assets"],"Consolidating an SPE funded by outside debt: assets and liabilities both rise by the amount borrowed from outside; intercompany sales and the parent's investment are eliminated.",True),
 mkq("Based on Exhibit 2, Veridian's investment in Calder resulted in goodwill of:",[f"${pe_alloc:.0f} million.",f"${gw:.0f} million.",f"${excess:.0f} million."],1,
  [f"This is only the part of the excess purchase price attributable to plant and equipment: 30% × (3,400 − 3,100) = ${pe_alloc:.0f} million.",f"Purchase price ${price} million − 30% of book value of net assets (0.30 × 1,500 = 450) = excess purchase price of ${excess:.0f} million. Attributable to plant and equipment: 0.30 × (3,400 − 3,100) = 90. Goodwill (residual) = 170 − 90 = ${gw:.0f} million.",f"This is the whole excess over book value ($170 million), without allocating any of it to the plant and equipment fair value adjustment."],
  ["30% equity interest","@row:Plant and equipment","@row:Net assets"],"Equity-method goodwill = price − share of fair value of identifiable net assets (= excess over book value − share of fair-value adjustments).",True),
 mkq("Using only the information from Exhibit 2 and the 2016 results, the carrying value of Veridian's investment in Calder at the end of 2016 is closest to:",[f"${cv_a:.0f} million.",f"${cv:.0f} million.",f"${cv_c:.0f} million."],1,
  [f"This leaves out the amortization of the excess purchase price attributable to plant and equipment (0.30 × 300 ÷ 10 = 9): ${cv_a:.0f} million.",f"Purchase price 620 + share of net income (0.30 × 400 = 120) − dividends received (0.30 × 240 = 72) − amortization of the excess attributable to plant and equipment (0.30 × (3,400 − 3,100) ÷ 10 = 9) = ${cv:.0f} million.",f"This does not deduct the dividends received (72), which reduce the investment account under the equity method: ${cv_c:.0f} million."],
  ["Calder reported net income of $400 million and paid dividends of $240 million","depreciated on a straight-line basis and have 10 years of remaining life"],"Equity method: cost + share of net income − share of dividends − amortization of the fair value excess.",True),
 mkq("Based on Exhibit 3, Veridian's impairment loss under IFRS is:",[f"${ifrs} million.",f"${us} million.",f"${impl} million."],0,
  [f"Under IFRS the impairment loss is the carrying value of the cash-generating unit minus its recoverable amount: 16,300 − 15,950 = ${ifrs} million (below the goodwill of 700, so it can be fully absorbed by goodwill).",f"This is carrying value minus the fair value of the reporting unit (16,300 − 15,900 = {us}), a US GAAP-style measure.",f"This is goodwill minus implied goodwill (700 − (15,900 − 15,400) = {impl}), also not the IFRS measure."],
  ["@row:Carrying value of cash-generating unit/reporting unit","@row:Recoverable amount of cash-generating unit/reporting unit"],"IFRS: impairment loss = carrying value of the CGU − recoverable amount (allocated first to goodwill).",True),
])
