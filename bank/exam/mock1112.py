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
# ===================== M12 Fixed Income: Reeves (bonds with embedded options, readings 24-25; re-skin of the Smith vignette) =====================
z1,z2,z3=0.8000,1.1017,1.4057; f12,f23=1.4042,2.0164; cp=1.65
Vs=cp/(1+z1/100)+cp/(1+z2/100)**2+(100+cp)/(1+z3/100)**3; opt=Vs-100
flat=cp/(1+z1/100)+cp/(1+z1/100)**2+(100+cp)/(1+z1/100)**3-100
assert [round(opt,4),round(flat,4)]==[0.7322,2.5097]
body=f"""Paul Reeves, an investment adviser, meets with Helen Fischer to discuss her pending retirement and potential changes to her investment portfolio. Domestic economic activity has been weakening recently, and Reeves's outlook is that equity market values will be lower during the next year. He would like Fischer to consider reducing her equity exposure in favor of adding more fixed-income securities to the portfolio.

Government yields have remained low for an extended period, and Reeves suggests considering investment-grade corporate bonds to provide additional yield above government debt issues. Domestic inflation has accelerated, however, and the consensus forecast among economists is that the central bank, at its next meeting this month, will take actions that will lead to higher interest rates.

Reeves and Fischer review par, spot, and one-year forward rates (Exhibit 1) and four fixed-rate investment-grade bonds issued by Orion Corporation that are being considered for investment (Exhibit 2).

Exhibit 1: Par, Spot, and One-Year Forward Rates (annual coupon payments)
# Maturity (Years) | Par Rate (%) | Spot Rate (%) | One-Year Forward (%)
1 | 0.8000 | {z1:.4f} | {z1:.4f}
2 | 1.1000 | {z2:.4f} | {f12:.4f}
3 | 1.4000 | {z3:.4f} | {f23:.4f}

Exhibit 2: Selected Fixed-Rate Bonds of Orion Corporation
# Bond | Annual Coupon | Type of Bond
Bond 1 | {cp:.4f}% | Straight bond
Bond 2 | {cp:.4f}% | Convertible bond: currently trading out of the money
Bond 3 | {cp:.4f}% | Putable bond: putable at par one year and two years from now
Bond 4 | {cp:.4f}% | Callable bond: callable at par without any protection periods
Note: All bonds in Exhibit 2 have remaining maturities of exactly three years.

Reeves also states that he recently read a report issued by Hale and Company forecasting that the yield curve could invert within the next six months.

Fischer asks Reeves about the possibility of analyzing bonds that have lower credit ratings than the investment-grade Orion bonds. Reeves discusses four other corporate bonds with Fischer. Exhibit 3 presents selected data on the four bonds.

Exhibit 3: Selected Information on Fixed-Rate Bonds for Argon, Boron, Cobalt, and Neon Corporations
# Bond | Issuer | Bond Features | Credit Rating
Bond 5 | Argon Corporation | Coupon 1.70%; Callable in Year 2; OAS of 50 bps | B
Bond 6 | Boron Corporation | Coupon 1.70%; Callable in Year 2; OAS of 75 bps | B
Bond 7 | Cobalt Corporation | Coupon 1.70%; Callable in Year 2; OAS of 100 bps | BB
Bond 8 | Neon Corporation | Coupon 1.70%; Callable in Year 2; OAS of 90 bps | B
Notes: All bonds have remaining maturities of three years. OAS stands for option-adjusted spread."""
add('M12','Fixed Income',body,[
 mkq("Based on Exhibit 2, and assuming that the forecast for interest rates and Reeves's outlook for equity returns are validated, which bond's option is most likely to be exercised?",["Bond 2","Bond 3","Bond 4"],1,
  ["Lower equity values keep the convertible further out of the money, so the conversion option is not exercised.","Higher interest rates push the price of the putable bond below par, so the put (at par, in one or two years) is likely to be exercised.","The call on Bond 4 is valuable when rates fall (the issuer refinances cheaply); with rates rising, the issuer will not call the bond."],
  ["will take actions that will lead to higher interest rates","Putable bond: putable at par one year and two years from now","equity market values will be lower"],"Rates up → putable bond worth less than par → put exercised; rates down → callable bond is called; share price down → convertible stays out of the money."),
 mkq("Based on the information in Exhibit 1 and Exhibit 2, the value of the embedded option in Bond 4 is closest to:",["0.0000.",f"{opt:.4f}.",f"{flat:.4f}."],1,
  ["A callable bond with no call protection can be called immediately; a nil option value would imply the straight bond is worth exactly par, but its coupon (1.65%) exceeds the 3-year par rate (1.40%).",f"Straight bond value using the spot rates = 1.65 ÷ 1.0080 + 1.65 ÷ 1.011017² + 101.65 ÷ 1.014057³ = {Vs:.4f}. A callable bond with no protection cannot be worth more than its call price of 100, so the call value = {Vs:.4f} − 100 = {opt:.4f}.",f"This discounts all the cash flows at the one-year spot rate (0.80%) instead of at the matching spot rates: {flat:.4f}."],
  ["callable at par without any protection periods","@row:3"],"Callable bond value = straight bond value (spot-rate discounting) − call value; with no protection the price is capped at the call price (100), so call value = straight value − 100.",True),
 mkq("If the Hale and Company forecast comes true, which of the following is most likely to occur? The value of the embedded option in:",["Bond 3 decreases.","Bond 4 decreases.","both Bond 3 and Bond 4 increases."],0,
  ["As the yield curve goes from upward sloping to flat to inverted, forward rates fall relative to spot rates: the put option value decreases and the call option value increases.","The call option value increases (not decreases) as the curve flattens and inverts.","The put option value decreases while the call option value increases, so they do not both increase."],
  ["forecasting that the yield curve could invert within the next six months"],"Flatter or inverted curve → call value ↑ and put value ↓ (callable bond falls, putable bond falls too relative to a steep curve)."),
 mkq("Which of the following conclusions regarding the bonds in Exhibit 3 is correct?",["Bond 5 is relatively cheaper than Bond 6.","Bond 6 is relatively cheaper than Bond 5.","Bond 7 is relatively cheaper than Bond 8."],1,
  ["For bonds of similar credit quality, a larger OAS means the bond is cheaper: Bond 5 (50 bps) has a smaller OAS than Bond 6 (75 bps), so it is relatively richer, not cheaper.","Bond 5 and Bond 6 have the same credit rating (B) and the same features, so their OAS can be compared: Bond 6 (75 bps) has the larger OAS, so it is relatively cheaper.","Bond 7 is rated BB and Bond 8 is rated B, so their OAS cannot be compared directly even though Bond 7 has the larger OAS."],
  ["@row:Bond 5","@row:Bond 6","@row:Bond 7"],"OAS comparisons are valid only for bonds of the same credit quality (same tree): the larger OAS is the cheaper bond."),
])
# ===================== M12 Fixed Income: Ashby (credit analysis models, reading 26; re-skin of the Cromwell vignette) =====================
cpn_m,dur_m,s_a,s_bbbp=4.50,5.8,1.00,1.30
er=cpn_m-dur_m*(s_bbbp-s_a); er_nc=-dur_m*(s_bbbp-s_a); er_pos=cpn_m+dur_m*(s_bbbp-s_a)
assert [round(er_nc,2),round(er,2),round(er_pos,2)]==[-1.74,2.76,6.24]
body="""Gordon Ashby is the director of quantitative research at Westmere Asset Advisers, a fixed-income firm located in London. Rhea Vance recently joined Ashby's analyst team supporting credit analysis and credit risk modeling. After a brief orientation on the firm and its investment process, Ashby instructs Vance to develop a model that derives the credit valuation adjustment (CVA). Ashby makes the following comments regarding credit modeling.

Comment 1: The observed credit spread may also be higher than required for credit risk to compensate for a liquidity premium and tax considerations.
Comment 2: The factors to consider in modeling credit risk are the expected exposure to default loss, the risk-neutral probability of default, and the loss given default.
Comment 3: The use of an actual default rate in the model may overstate the observed value for a corporate bond because it includes a default risk premium associated with uncertainty over the timing of possible default loss.

Vance reminds Ashby that her model assumes zero interest rate volatility and a flat government yield curve. Ashby responds that Vance should relax these unrealistic assumptions. Vance outlines the steps to take in valuing risky bonds under this scenario in Exhibit 1.

Exhibit 1: Steps in Valuing Risky Bonds, Arbitrage-Free Framework
Step 1: • Determine the value for the corporate bond assuming no default (VND). • Calculate the CVA. • Calculate the fair value of the bond as the VND minus the CVA.
Step 2: • Build the binomial interest rate tree under the assumption of no arbitrage. • Apply an assumption of interest rate volatility. • Using the spot curve, derive implied zero-coupon rates, discount factors, and forward rates.
Step 3: • Use the risk-neutral probability of default as determined by a credit model. • Assign a recovery rate based on the company's credit rating. • Calculate the present value of the product of the loss given default and the probability of default.

Ashby explains that the migration of a company's ratings can have an impact on the total return of a bond holding. As an example, he selects an 8-year maturity, 4.5% coupon bond currently trading at par and rated A by Standard & Poor's. He asks Vance to calculate the expected total return over a one-year horizon assuming the bond is downgraded by two notches and to determine why the year-end duration for the bond is 5.8. The average G-spread for corporate bonds across the credit spectrum is shown in Exhibit 2.

Exhibit 2: Bond Market G-Spread by Credit Rating
# S&P Rating | G-Spread (%)
AA | 0.60
AA– | 0.70
A+ | 0.85
A | 1.00
A– | 1.10
BBB+ | 1.30
BBB | 1.45
BBB– | 1.60

Ashby and Vance get into a discussion on structural models of credit risk. Ashby is a proponent of these models and tells Vance, "Structural models are dependent on the structure of the company's balance sheet. Equity is analogous to a purchased call option on the assets of the company whereby the strike price equals the face value of the debt. Strengths of these models are that they aim to explain why default occurs and that they use option pricing theory. Weaknesses are that the models assume default comes as a surprise at any time and do not explain the reason for default." """
add('M12','Fixed Income',body,[
 mkq("Ashby is least likely correct with regard to which point regarding credit modeling?",["Comment 1","Comment 2","Comment 3"],2,
  ["Comment 1 is correct: the observed credit spread can include a liquidity premium and tax effects beyond credit risk.","Comment 2 is correct: the factors are the expected exposure, the risk-neutral probability of default and the loss given default.","Comment 3 is wrong. The comment is wrong because an actual default rate does not include the default risk premium for timing uncertainty, so using it overstates the value of the bond (understates the spread); the risk-neutral probability of default includes the premium."],
  ["The use of an actual default rate in the model"],"Actual (historical) default rates exclude the risk premium that the risk-neutral probability of default includes; the observed spread also contains liquidity and tax components."),
 mkq("Which step in Exhibit 1 regarding valuing risky bonds has Vance most likely outlined correctly?",["Step 1","Step 2","Step 3"],0,
  ["Step 1 is correct: VND, then CVA, then fair value = VND − CVA.","In Step 2 the third point is wrong: implied zero-coupon rates, discount factors and forward rates are derived from the par curve (bonds priced at par), not from the spot curve.","In Step 3 the second point is wrong: the recovery rate is not based on the company's credit rating; it should reflect the seniority of the debt issue and the nature of the issuer's assets."],
  ["Using the spot curve, derive implied zero-coupon rates","Assign a recovery rate based on the company's credit rating"],"Risky bond valuation steps: tree from the PAR curve, then PD × LGD × exposure for CVA (recovery by seniority, not rating), then fair value = VND − CVA."),
 mkq("Assuming no change in market conditions and a flat yield curve and using Exhibit 2, the expected return on Ashby's sample bond over a one-year horizon is closest to:",[f"{er_nc:.2f}%.".replace('-','–'),f"{er:.2f}%.",f"{er_pos:.2f}%."],1,
  [f"This omits the coupon: −5.8 × (1.30% − 1.00%) = {er_nc:.2f}%.".replace('-','–',1),f"Downgrade by two notches: A to A– to BBB+, so the G-spread widens from 1.00% to 1.30%. Expected return = coupon − duration × change in spread = 4.50% − 5.8 × (1.30% − 1.00%) = 4.50% − 1.74% = {er:.2f}%.",f"This uses +5.8 instead of −5.8 for the spread widening: 4.50% + 1.74% = {er_pos:.2f}%."],
  ["rated A by Standard & Poor's","downgraded by two notches","@row:A","@row:BBB+"],"Expected return ≈ coupon − duration × Δspread (a downgrade widens the spread and lowers the price). Count the notches along the rating scale in the exhibit.",True),
 mkq("Ashby is least likely correct with regard to which aspect of structural models?",["The strengths","The description","The weaknesses"],2,
  ["The strengths are correct: structural models aim to explain why default occurs and use option pricing theory.","The description is correct: equity is analogous to a purchased call option on the company's assets, with a strike price equal to the face value of the debt.","The weaknesses are wrong. They are weaknesses of reduced-form models (default as a surprise, no explanation of why default occurs). Weaknesses of structural models: they can be burdensome to implement, assets are assumed to trade, and the default barrier is hard to measure."],
  ["Weaknesses are that the models assume default comes as a surprise","Equity is analogous to a purchased call option on the assets of the company"],"Structural: explains WHY default occurs (call option on assets) but is burdensome and needs tradable assets; reduced-form: default is a surprise, no explanation."),
])
# ===================== M12 FSA: Lindgren / Alpina (segment analysis, liquidity, earnings quality, reading 6-12; re-skin of the Rhine vignette) =====================
DV={'KA':dict(rev=(1305.4,1362.0),gp=(312.9,348.1),op=(83.7,131.4),ta=(1402.6,1375.0),cx=(20.0,31.0)),
    'GE':dict(rev=(1121.9,1012.6),gp=(262.4,239.6),op=(95.0,71.3),ta=(1051.3,1036.8),cx=(14.5,12.2)),
    'LI':dict(rev=(704.5,683.8),gp=(96.8,100.3),op=(41.0,44.6),ta=(292.4,309.8),cx=(2.4,4.0))}
T={k:[round(sum(DV[d][k][i] for d in DV),1) for i in (0,1)] for k in ('rev','gp','op','ta','cx')}
def pct(d,k,i): return DV[d][k][i]/T[k][i]*100
ratios={d:pct(d,'cx',0)/pct(d,'ta',0) for d in DV}
assert [d for d in DV if ratios[d]<1]==['LI'] and abs(ratios['LI']-0.611)<0.001
pm_prior=DV['KA']['op'][1]/DV['KA']['rev'][1]; op_adj=T['op'][0]-DV['KA']['op'][0]+DV['KA']['rev'][0]*pm_prior
m_adj=op_adj/T['rev'][0]*100; m_prior=T['op'][1]/T['rev'][1]*100; m_cur=T['op'][0]/T['rev'][0]*100
assert round(m_adj,2)==8.36 and round(m_prior,2)==8.09 and m_adj>m_prior and m_cur<m_prior
TO={'cur':(5.00,3.90,5.60),'prior':(5.40,4.00,5.55),'two':(6.10,4.15,5.50)}
def days(k): a,i,p=TO[k]; return 365/a,365/i,365/p
ccc={k:sum(days(k)[:2])-days(k)[2] for k in TO}
dch=[days('cur')[j]-days('two')[j] for j in range(3)]
assert [round(x) for x in ccc.values()]==[101,93,81] and round(dch[0],1)==13.2 and round(dch[1],1)==5.6 and round(dch[2],1)==-1.2
f1=lambda x:f"{x:,.1f}"
rows=[("Revenues",'rev'),("Gross profit",'gp'),("Operating profit",'op'),("Total assets",'ta'),("Capital expenditures",'cx')]
hdr="# | Total for Three Divisions | | Kitchen Appliances | | Garden Equipment | | Lighting |\n | Current Year | Prior Year | Current Year | Prior Year | Current Year | Prior Year | Current Year | Prior Year"
def line(lbl,k): return f"{lbl} | "+" | ".join(f1(x) for x in (T[k][0],T[k][1],DV['KA'][k][0],DV['KA'][k][1],DV['GE'][k][0],DV['GE'][k][1],DV['LI'][k][0],DV['LI'][k][1]))
def pline(lbl,k): return f"{lbl} | 100% | 100% | "+" | ".join(f"{pct(d,k,i):.1f}%" for d in DV for i in (0,1))
body=f"""Anders Lindgren, a pension fund equity analyst, is preparing an analysis of Alpina AG for the upcoming quarterly fund meeting. Alpina is a Switzerland-based manufacturer that operates three distinct divisions: kitchen appliances, garden equipment, and lighting. All three divisions sell through retail outlets around the world.

The company has been pursuing an aggressive growth strategy, achieved through both foreign acquisitions and organic growth. Lindgren is interested in determining how well Alpina is allocating its resources between the three divisions. Exhibit 1 summarizes selected divisional and corporate data for the current year and the prior year.

Exhibit 1: Alpina AG Selected Divisional and Corporate Data (CHF millions)
{hdr}
""" + "\n".join(line(l,k) for l,k in rows) + "\n" + pline("Proportion of capital expenditures",'cx') + "\n" + pline("Proportion of total assets",'ta') + f"""

Lindgren's preferred method to determine which division is becoming less significant over time is to review the relationship between capital expenditures and total assets by operating division. He plans to base his conclusion on the assumption that the current year's investment behavior is representative of future investment patterns.

Lindgren knows that revenues in the kitchen appliances division have suffered because of weaker consumer demand, but he believes that if Alpina can maintain the operating margin for this division then overall company profitability should not be affected.

Lindgren finally examines the company's liquidity ratios, which are shown in Exhibit 2. Even though the company's current and quick ratio have improved, his interpretation of the changes in the company's cash conversion cycle is that the company's liquidity position has deteriorated.

Exhibit 2: Alpina AG Selected Ratios
# Ratio | Current Year | Prior Year | 2 Years Prior
Current ratio | 2.24 | 2.10 | 1.21
Quick ratio | 1.02 | 0.91 | 0.58
Accounts receivable turnover | {TO['cur'][0]:.2f} | {TO['prior'][0]:.2f} | {TO['two'][0]:.2f}
Inventory turnover | {TO['cur'][1]:.2f} | {TO['prior'][1]:.2f} | {TO['two'][1]:.2f}
Accounts payable turnover | {TO['cur'][2]:.2f} | {TO['prior'][2]:.2f} | {TO['two'][2]:.2f}
Cash conversion cycle | {ccc['cur']:.0f} days | {ccc['prior']:.0f} days | {ccc['two']:.0f} days

Worried that the balance sheet-based and cash flow-based accruals ratios (not shown) raise some concerns about the possible use of accruals to manage earnings, Lindgren asks Karin Holm, another analyst with the fund, for advice on what further type of analysis he should do as a follow-up on this issue."""
add('M12','Financial Statement Analysis',body,[
 mkq("Using Lindgren's preferred method and current year divisional data, the best conclusion Lindgren can make about which division will potentially become less significant in the future is that it will be:",["kitchen appliances.","garden equipment.","lighting."],2,
  [f"The ratio of the capital expenditure proportion to the total asset proportion for kitchen appliances is {ratios['KA']:.2f} (54.2% ÷ 51.1%), above 1: it receives more capital expenditure than its share of assets.",f"For garden equipment the ratio is {ratios['GE']:.2f} (39.3% ÷ 38.3%), above 1.",f"Lighting receives {pct('LI','cx',0):.1f}% of capital expenditures against {pct('LI','ta',0):.1f}% of total assets: the ratio is {ratios['LI']:.2f}, below 1. If this pattern continues, lighting will become less significant over time."],
  ["relationship between capital expenditures and total assets by operating division","@row:Proportion of capital expenditures","@row:Proportion of total assets"],"Capex share ÷ asset share: above 1 → the division is being grown; below 1 → it is being run down and will shrink in importance.",True),
 mkq("If the kitchen appliances division had been able to maintain its prior year operating margin in the current year, the company's overall operating margin in the current year, compared with the prior year, would have been:",["lower.","the same.","higher."],2,
  ["Restoring the prior year margin adds about 42.2 to the company's operating profit, enough to lift the overall margin above (not below) the prior year's.","The adjusted margin (8.36%) differs from the prior year's (8.09%).",f"Prior year margin of kitchen appliances = 131.4 ÷ 1,362.0 = {pm_prior*100:.1f}%. Applied to current revenues: 0.0965 × 1,305.4 = {DV['KA']['rev'][0]*pm_prior:.1f}. Adjusted company operating profit = {T['op'][0]:.1f} − 83.7 + {DV['KA']['rev'][0]*pm_prior:.1f} = {op_adj:.1f}; adjusted margin = {op_adj:.1f} ÷ {T['rev'][0]:,.1f} = {m_adj:.2f}%, compared with {m_prior:.2f}% in the prior year (219.7 ÷ 3,131.8 = {m_cur:.2f}% actual): higher."],
  ["maintain the operating margin for this division","@row:Revenues","@row:Operating profit"],"Re-apply the prior year margin to the division's current revenues, recompute the company's operating profit and margin, then compare with the prior year.",True),
 mkq("Compared with 2 years prior, the change in which working capital account most likely had the largest effect on Lindgren's observed deterioration in liquidity?",["Inventory","Accounts payable","Accounts receivable"],2,
  [f"Inventory days rose from {days('two')[1]:.1f} to {days('cur')[1]:.1f} (365 ÷ 4.15 and 365 ÷ 3.90), an increase of {dch[1]:.1f} days, smaller than the receivable change.",f"Payables days fell from {days('two')[2]:.1f} to {days('cur')[2]:.1f} ({dch[2]:.1f} days), which lengthens the cycle by only {abs(dch[2]):.1f} days.",f"The cash conversion cycle rose from {ccc['two']:.0f} to {ccc['cur']:.0f} days. Receivable days rose from {days('two')[0]:.1f} to {days('cur')[0]:.1f} (365 ÷ 6.10 and 365 ÷ 5.00), an increase of {dch[0]:.1f} days, the largest of the three effects."],
  ["@row:Accounts receivable turnover","@row:Inventory turnover","@row:Accounts payable turnover","@row:Cash conversion cycle"],"CCC = days receivable + days inventory − days payable, each = 365 ÷ turnover; compare the change in each account's days."),
 mkq("Holm's best answer to Lindgren's question about further analysis is that he should conduct a:",["DuPont analysis.","cash flow ratio analysis.","discounted cash flow analysis."],1,
  ["DuPont analysis decomposes ROE but would not detect earnings management.","Concerns about earnings manipulation through accruals are best addressed by cash flow ratios, such as operating cash flow before interest and taxes to operating income.","Discounted cash flow analysis values the company; it does not test earnings quality."],
  ["possible use of accruals to manage earnings"],"Accruals-based earnings-quality worries → compare earnings with cash flow (e.g. CFO before interest and taxes ÷ operating income)."),
])
# ===================== M12 FSA: Soto / Brisa (foreign currency, reading 9; re-skin of the Romano / Celeste vignette) =====================
r15,r31,ravg,rinv=905.00,880.00,915.00,930.00; usd=4
tg=usd*(r31-r15); tg_avg=usd*(r31-ravg)
assert tg==-100 and tg_avg==-140
rev,cos=90,52
gp_ok=(rev-cos)*ravg; gp_inv=rev*ravg-cos*rinv; gp_ye=(rev-cos)*r31
assert [gp_ok,gp_inv,gp_ye]==[34770,33990,33440]
body=f"""Valeria Soto is a financial analyst reviewing Brisa S.A., a Chilean corporation. Brisa reports under IFRS, its reporting currency is the Chilean Peso (CLP), and its financial year end is 31 December.

Soto uses the following CLP/USD (number of CLP per 1 USD) exchange rate information for the most recent year.

Exhibit 1: Exchange Rates
# Date | Exchange Rate CLP/USD
15 November | {r15:.2f}
31 December | {r31:.2f}
Average for the year | {ravg:.2f}

On 15 November of the most recent year, Brisa exported goods for USD {usd} million to an unaffiliated US customer on credit. The total amount remained outstanding as of 31 December.

Arica Corp. and Bosque Corp. are two wholly owned subsidiaries of Brisa that are located in the US. There are no intercompany transactions. In both subsidiaries, the only non-monetary assets are inventory and fixed assets, and all liabilities are monetary.

Brisa translates Arica's financial statements using the current rate method. In the most recent year, Arica's revenue was USD {rev} million and cost of sales was USD {cos} million. The average exchange rate for inventory purchases was {rinv:.2f} CLP/USD.

Brisa uses the temporal method to translate Bosque's financial statements. Soto evaluates the effect on Brisa's total shareholders' equity if Bosque's financial statements had been translated using the same method as Arica.

Brisa has recently acquired a new subsidiary that operates in a country with a highly inflationary economy. In compliance with IFRS, the subsidiary prepares financial statements restated for inflation in the local currency. At the end of the current reporting period, Brisa will prepare consolidated financial statements using the new subsidiary's financial statements, and translate them using the average exchange rate for the period."""
add('M12','Financial Statement Analysis',body,[
 mkq("The foreign currency transaction gain or loss (in CLP millions) on exported goods reported by Brisa in the most recent year is closest to:",["a loss of 140.0.","a loss of 100.0.","a gain of 100.0."],1,
  ["This uses the average rate for the year instead of the transaction-date rate: USD 4 million × (880 − 915) = −140. The receivable is remeasured against the rate on the date of the transaction.","Brisa holds a USD receivable and the USD fell against the CLP, so it records a loss: USD 4 million × (880.00 − 905.00) = CLP −100 million.","This has the sign reversed: a foreign currency receivable loses value when the foreign currency depreciates."],
  ["exported goods for USD 4 million","@row:15 November","@row:31 December"],"Foreign currency receivable: gain (loss) = amount × (closing rate − transaction-date rate), in domestic currency per foreign unit; a depreciating foreign currency gives a loss on a receivable.",True),
 mkq("Arica's contribution to Brisa's consolidated gross profit (in CLP millions) in the most recent year is closest to:",[f"{gp_ye:,.0f}.",f"{gp_inv:,.0f}.",f"{gp_ok:,.0f}."],2,
  [f"This translates the gross profit at the year-end rate: (90 − 52) × 880.00 = {gp_ye:,.0f}, the rate for balance sheet items.",f"This translates cost of sales at the average rate for inventory purchases (930.00), as the temporal method would: 90 × 915.00 − 52 × 930.00 = {gp_inv:,.0f}.",f"Brisa uses the current rate method for Arica, so revenues and expenses are translated at the rate when the transaction took place or an average rate. Gross profit = (90 − 52) × 915.00 = {gp_ok:,.0f}."],
  ["translates Arica's financial statements using the current rate method","Average for the year"],"Current rate method: income statement items at the average rate (all of them); temporal method: cost of sales at the historical inventory rate."),
 mkq("If Bosque's results had been translated using the current rate method, its total shareholders' equity would have been:",["lower.","the same.","higher."],0,
  ["Bosque's only non-monetary assets are inventory and fixed assets and all its liabilities are monetary, so under the temporal method it has a net monetary liability exposure. The USD depreciated against the CLP (905.00 to 880.00), so the temporal method produced a remeasurement gain in net income. Under the current rate method all assets are translated at the lower year-end rate, giving a negative translation adjustment: total shareholders' equity would have been lower.","Equity is not the same: the two methods put the exchange effect in different places (net income under the temporal method, OCI under the current rate method) and measure different exposures.","Equity would have been higher only if the USD had appreciated against the CLP."],
  ["only non-monetary assets are inventory and fixed assets, and all liabilities are monetary","@row:31 December"],"Temporal: exposure = net monetary assets (liabilities); current rate: exposure = net assets. Foreign currency depreciates: net liability → gain (temporal), net assets → negative CTA (current rate)."),
 mkq("Is Soto correct about the method that Brisa should use to translate the new subsidiary's financial statements?",["Yes","No, because Brisa should use the temporal method","No, because Brisa should use the exchange rate at the reporting period end"],2,
  ["IFRS does not allow the average exchange rate for a subsidiary in a highly inflationary economy.","IFRS does not call for the temporal method here: the foreign entity's statements are first restated for local inflation (IAS 29).","When a foreign entity operates in a highly inflationary economy, IFRS requires that its financial statements first be restated for local inflation (IAS 29) and then translated into the parent's presentation currency at the exchange rate at the reporting period end (the current rate)."],
  ["highly inflationary economy","translate them using the average exchange rate for the period"],"IFRS, hyperinflationary subsidiary: restate for local inflation (IAS 29), then translate everything at the closing (current) rate."),
])
# ===================== M12 Alternative Investments: Marchetti (commodities, reading 30; re-skin of the Musicale / Apex vignette) =====================
p0,pn,pf=612.0,626.0,632.0; coll=0.0080
pr=(pn-p0)/p0*100; rr=(pn-pf)/pn*100; cr=coll*100*3/12
tot=pr+rr+cr; tot_nr=pr+cr; tot_sw=pr-rr+cr
assert [round(tot,2),round(tot_nr,2),round(tot_sw,2)]==[1.53,2.49,3.45]
NPs=30_000_000; ia,im,ij=3115.60,3189.40,3254.85
pay=(ij/im-1)*NPs; pay_init=(ij/ia-1)*NPs
assert abs(pay-615_633.03)<0.01 and abs(pay_init-1_340_833.23)<0.01,(pay,pay_init)
body=f"""Elio Marchetti is the portfolio manager for a defined benefit pension plan. He meets with Tessa Quinn, market strategist with Corvin Bank, to discuss possible investment opportunities. The investment committee for the pension plan has recently approved expanding the plan's permitted asset mix to include alternative asset classes.

Quinn proposes the Summit Commodity Fund (Summit Fund) offered by Corvin Bank as a potentially suitable investment for the pension plan. Quinn shares selected futures contract data for three markets in which the Summit Fund invests. The futures data are presented in Exhibit 1.

Exhibit 1: Selected Commodity Futures Data*
# Month | Gold Price | Coffee Price | Heating Oil Price
July | 1,274.8 | 0.9850 | 2.4105
September | 1,274.8 | 1.0030 | 2.3552
December | 1,274.8 | 1.0290 | 2.1980
* Gold: US$/troy ounce; coffee: US$/pound; heating oil: US$/gallon.

Corvin Bank recently released a report on the coffee market. Quinn shares the key conclusion from the report with Marchetti: "The coffee market had a global harvest that was greater than expected. Despite the large harvest, coffee futures trading activity is balanced between producers and consumers. This balanced condition is not expected to change over the next year."

Quinn shows Marchetti the total return of a recent trade executed by the Summit Fund. Quinn explains that the Summit Fund took a fully collateralized long futures position in nearby wheat futures contracts at the quoted futures price of {p0:.1f} (US cents/bushel). Three months later, the entire futures position was rolled when the near-term futures price was {pn:.1f} and the farther-term futures price was {pf:.1f}. During the three-month period between the time that the initial long position was taken and the rolling of the contract, the collateral earned an annualized rate of 0.80%.

Quinn tells Marchetti that the pension fund could alternatively gain long exposure to commodities using the swap market. Quinn and Marchetti analyze the performance of a long position in an S&P GSCI total return swap having monthly resets and a notional amount of $30 million. Selected data on the S&P GSCI are presented in Exhibit 2.

Exhibit 2: Selected S&P GSCI Data
# Reference Date | Index Level
April (swap initiation) | {ia:,.2f}
May | {im:,.2f}
June | {ij:,.2f}"""
add('M12','Alternative Investments',body,[
 mkq("Which futures market in Exhibit 1 is in backwardation?",["Gold","Coffee","Heating oil"],2,
  ["Gold's futures prices are equal in July, September and December, so the market is flat, not in backwardation.","Coffee's longer-term futures prices are higher than the near-term price (0.9850 < 1.0030 < 1.0290): contango.","Backwardation means the near-term futures price is higher than the longer-term price. Heating oil is the only market in which the near-term price ($2.4105) is higher than the longer-term prices ($2.3552 and $2.1980)."],
  ["@row:July","@row:December"],"Backwardation: near-term futures price > longer-term price (downward-sloping curve); contango: near-term < longer-term; flat: equal."),
 mkq("Based on the key conclusion from the Corvin Bank coffee market report, the shape of the coffee futures curve in Exhibit 1 is most consistent with the:",["insurance theory.","theory of storage.","hedging pressure hypothesis."],1,
  ["The insurance theory says producers hedge by selling futures at a discount to the expected spot price (backwardation); it does not fit an upward-sloping curve with balanced trading.","The theory of storage focuses on the level of inventories and the state of supply and demand. A large harvest means high inventories, and a regularly stored commodity should have a higher price in the future (contango) to cover storage costs. Coffee's upward-sloping curve is consistent with it.","The hedging pressure hypothesis explains the curve through net hedging positions; the report says trading is balanced between producers and consumers, so there is no hedging pressure."],
  ["global harvest that was greater than expected","balanced between producers and consumers"],"Contango with ample inventories → theory of storage; backwardation with producer hedging pressure → insurance theory; balanced hedgers → no hedging-pressure effect."),
 mkq("The Summit Fund's three-month total return on the wheat futures trade is closest to:",[f"{tot_nr:.2f}%.",f"{tot:.2f}%.",f"{tot_sw:.2f}%."],1,
  [f"This leaves out the roll return: {pr:.3f}% + {cr:.2f}% = {tot_nr:.2f}%.",f"Total return = price return + roll return + collateral return. Price return = (626.0 − 612.0) ÷ 612.0 = {pr:.3f}%. Roll return = (near − farther) ÷ near = (626.0 − 632.0) ÷ 626.0 = {rr:.3f}%. Collateral return = 0.80% × 3/12 = {cr:.2f}%. Total = {pr:.3f}% {rr:.3f}% + {cr:.2f}% = {tot:.2f}%.",f"This adds the roll return with the wrong sign (the market is in contango, so the roll return is negative): {pr:.3f}% + {-rr:.3f}% + {cr:.2f}% = {tot_sw:.2f}%."],
  ["fully collateralized long futures position","near-term futures price was 626.0 and the farther-term futures price was 632.0","collateral earned an annualized rate of 0.80%"],"Commodity futures total return = price return + roll return + collateral return; roll return = (near − far) ÷ near (negative in contango); collateral return = annual rate × months ÷ 12.",True),
 mkq("Based on Exhibit 2, on the June settlement date, the party that is long the S&P GSCI total return swap will:",[f"owe a payment of ${pay:,.2f}.",f"receive a payment of ${pay:,.2f}.",f"receive a payment of ${pay_init:,.2f}."],1,
  [f"This has the sign reversed: the index rose between May and June, so the long party receives a payment.",f"The swap resets monthly, so the June settlement compares June with May: ({ij:,.2f} ÷ {im:,.2f} − 1) × $30,000,000 = {(ij/im-1)*100:.4f}% × $30,000,000 = ${pay:,.2f}. The index increased, so the long position receives the payment.",f"This measures the change from the April initiation level ({ij:,.2f} ÷ {ia:,.2f} − 1), but the swap was reset in May: ${pay_init:,.2f}."],
  ["monthly resets","@row:May","@row:June"],"Total return swap with monthly resets: payment = notional × (index this month ÷ index last month − 1); index up → the long party receives, down → pays.",True),
])
# ===================== M12 Derivatives: Halvorsen / Ridgemont (options, reading 29; re-skin of the IST vignette) =====================
sh_n=150_000; dc,dp=0.6217,-0.3783
calls=sh_n/dc; puts=sh_n/(-dp); w1=sh_n*(-dp); w2=sh_n*dc
assert [round(calls),round(puts),round(w1),round(w2)]==[241_274,396_511,56_745,93_255],(calls,puts,w1,w2)
body="""Delta Risk Advisory (DRA) provides institutional financial risk management advisory and brokerage services. Clients seek DRA's services when evaluating whether to hedge interest rate, currency, or equity market risks. Martin Halvorsen, senior adviser at DRA, is discussing a new client with analyst Lena Ortiz.

Halvorsen states: "Ridgemont University plans a laboratory renovation for its science center and has engaged DRA to implement options strategies in order to manage the risk of rising interest rates. The renovation is to be completed in 12 months, in time for the start of the school year. To minimize disruption to its academic schedule, however, Ridgemont will not begin the work until six months from now. State funding will not be received until the beginning of the next school year, so a six-month variable interest rate loan will finance the renovation."

Ortiz comments: "I think six-month call options on the six-month forward rate would probably be the cheapest solution. The price of the European-style option can be evaluated as the present value of the expected terminal option payoffs, using the true probabilities of the underlying rate moves and discounting at the risk-free periodic rate."

Halvorsen comments: "We can also consider options on swaps, which the Black model views as having a bond component and a swap component. The swaption, used to hedge against rising interest rates, can be evaluated as the bond component minus the swap component."

Ridgemont has an endowment that helps support the university financially. The university has learned the endowment will be receiving a gift of 150,000 shares of Pelham Group (PG) stock in one month. DRA recommends the use of a one-month options position to hedge against a material price decline on the stock during this period. Exhibit 1 lists the relevant PG stock and option characteristics.

Exhibit 1: PG Stock and Option Information
# Item | Value
Stock price | $64
Call and put options strike price | $62
Delta call | 0.6217
Delta put | –0.3783"""
add('M12','Derivatives',body,[
 mkq("Ortiz's understanding of the valuation of the European-style six-month call option is most likely:",["correct with respect to the payoffs and the discount rate.","correct with respect to the payoffs but incorrect about the discount rate.","incorrect with respect to the payoffs but correct about the discount rate."],2,
  ["The expected payoffs must use risk-neutral probabilities, not the true probabilities of the underlying.","The risk-free periodic rate is the correct discount rate, so Ortiz is not wrong about the discount rate.","In the expectations approach the option value is the present value of the expected terminal payoffs computed with risk-neutral probabilities (not the true probabilities), discounted at the risk-free rate. Ortiz uses the wrong probabilities but the right discount rate."],
  ["using the true probabilities of the underlying rate moves","discounting at the risk-free periodic rate"],"Option value = PV (at the risk-free rate) of expected payoffs under RISK-NEUTRAL probabilities."),
 mkq("Is Halvorsen's description of the swaption used for the hedge most likely correct?",["Yes","No, because the swaption used to hedge against rising rates is a receiver swaption.","No, because a swaption used to hedge against rising rates would be evaluated as the swap component minus the bond component."],2,
  ["A swaption that hedges against rising interest rates is a payer swaption, whose Black-model value is the swap component minus the bond component, so the description is not correct.","A swaption that hedges against rising rates is a payer swaption, not a receiver swaption (the receiver swaption hedges against falling rates).","A payer swaption hedges against rising rates and, in the Black model, is evaluated as the swap component minus the bond component. A receiver swaption hedges against falling rates and is evaluated as the bond component minus the swap component. Halvorsen reverses the components."],
  ["The swaption, used to hedge against rising interest rates, can be evaluated as the bond component minus the swap component"],"Payer swaption (hedge rising rates) = swap component − bond component; receiver swaption (hedge falling rates) = bond component − swap component."),
 mkq("Assuming one option per share, an appropriate delta hedge for the PG stock would most likely be to:",[f"buy {w1:,.0f} puts.",f"sell {calls:,.0f} calls.",f"sell {w2:,.0f} calls."],1,
  [f"This multiplies the shares by the absolute put delta (150,000 × 0.3783 = {w1:,.0f}). The number of puts to buy would be shares ÷ the absolute put delta, not shares × the delta.",f"The stock position has delta +1 per share, so the number of calls to sell is 150,000 ÷ 0.6217 = {calls:,.0f}.",f"This multiplies the shares by the call delta (150,000 × 0.6217 = {w2:,.0f}) instead of dividing."],
  ["150,000 shares of Pelham Group (PG) stock","@row:Delta call","@row:Delta put"],"Delta hedge with options: number of options = shares ÷ option delta (sell calls, or buy puts with the put's absolute delta).",True),
 mkq("If the price of PG stock moves farther away from the $62 strike price over the next 30 days, which of the following changes in option parameter measures will most likely be observed?",["Decreases in vega and the absolute value of theta","Increases in vega and the absolute value of theta","A decrease in vega and an increase in the absolute value of theta"],0,
  ["Vega is highest when the option is at or near the money, and theta's absolute value is largest at the money. As the stock moves away from the strike, the option moves in or out of the money, so both decrease.","Vega and the absolute value of theta increase when the stock moves toward the strike (at the money), not away from it.","Theta's absolute value increases only as the option gets closer to the money; moving away reduces it."],
  ["moves farther away from the $62 strike price"],"Vega and |theta| are largest at the money: moving toward the strike raises them, moving away lowers them."),
])
# ===================== M12 Economics: Keller / Veltron (FX, reading 5; re-skin of the Carlisle / Nexran vignette) =====================
sb,so=1.7312,1.7318; mid2=(sb+so)/2; i_sgd,i_gbp=0.0060,0.0145
F_ok=mid2*(1+i_sgd)/(1+i_gbp); F_inv=mid2*(1+i_gbp)/(1+i_sgd); F_base=mid2*(1+i_gbp)
assert [round(F_ok,4),round(F_inv,4),round(F_base,4)]==[1.7170,1.7461,1.7566],(F_ok,F_inv,F_base)
eur=25_000_000; K0=1.1290; spb,spo=1.1305,1.1307; pb,po=0.0042,0.0044; imm=0.0070
off=spo+po; mtm=(K0-off)*eur; mtm_d=mtm/(1+imm*180/360); mtm_nodisc=mtm
bidc=(K0-(spb+pb))*eur/(1+imm*180/360)
assert abs(off-1.1351)<1e-9 and round(mtm)==-152_500 and round(mtm_d)==-151_968 and round(bidc)==-142_003,(mtm,mtm_d,bidc)
body=f"""Cyrus Dalton was recently hired as an associate analyst in the corporate finance department by Veltron Enterprises. Veltron is a US manufacturer of heavy industrial equipment that sells its products globally. Dalton assists finance director Naomi Keller in managing Veltron's foreign currency risk. As part of the training process concerning the complexities of the foreign exchange (FX) markets, Keller provides Dalton with Exhibit 1 and asks him to demonstrate his familiarity with some calculations, such as expected future spot rates. A few days later, Keller and Dalton meet to discuss the results of his work.

Exhibit 1: Interbank Currency Quote and One-Year MRR Rates
# Item | Value
SGD/GBP bid (spot) | {sb:.4f}
SGD/GBP offer (spot) | {so:.4f}
One-year MRR (GBP) | {i_gbp*100:.2f}%
One-year MRR (SGD) | {i_sgd*100:.2f}%

The conversation then moves to a discussion of some recent Veltron transactions. Six months ago, a European customer placed an order for EUR 25 million of oil field construction equipment with delivery and payment scheduled to take place one year later. Veltron hedged all of its exposure to the euro by entering into a forward position at a forward price of USD{K0:.4f}/EUR.

Veltron has just been informed by the customer that because of the collapse in oil prices, it is canceling the order. Keller tells Dalton to mark the forward position to market to facilitate exiting the currency hedge. Exhibit 2 provides information about current FX rates and interest rates.

Exhibit 2: Current Spot, Six-Month Forward Points and MRR
# Item | Value
Spot USD/EUR (bid/offer) | {spb:.4f}/{spo:.4f}
Six-month forward points (USD/EUR) | 42/44
MRR (USD) | 0.70% (annualized)

The next transaction considered is a recently signed multiyear contract with a customer located in the country of Morlundan. Veltron will sell 25 pieces of equipment per year at a fixed price, with the sale priced in the Morlundan pound. Morlundan has a floating exchange rate, and capital flows are highly mobile. Morlundan also has an expansionary monetary policy with an expansionary fiscal policy. Keller asks Dalton to determine the appropriate action Veltron should take to manage its Morlundan currency risk based on that country's economic policies.

As a final item, Keller explains the impact of the balance of payment flows on exchange rates. She notes that the United States has run large and persistent current account deficits for years and that its external debt owed to foreign investors has risen sharply relative to GDP. Veltron's sales to Cardovia are expected to be a major component of the company's future total sales. Consequently, Keller believes Veltron should hedge against a potential decline in the USD relative to the Cardovian currency because she is concerned that foreign investors may soon judge the US external debt to be unsustainable."""
add('M12','Economics',body,[
 mkq("Using the bid–offer quote midpoint in Exhibit 1 as the current spot rate and assuming uncovered interest rate parity holds, the projected one-year spot rate for the SGD/GBP currency pair is closest to:",[f"{F_ok:.4f}.",f"{F_inv:.4f}.",f"{F_base:.4f}."],0,
  [f"If uncovered interest rate parity holds, the expected spot rate in one year equals the one-year forward rate: F = S × (1 + i_price) ÷ (1 + i_base) = {mid2:.4f} × (1.0060 ÷ 1.0145) = {F_ok:.4f}. SGD is the price currency and GBP the base currency.",f"This inverts the interest rate ratio: {mid2:.4f} × (1.0145 ÷ 1.0060) = {F_inv:.4f}.",f"This multiplies the spot rate by the base-currency interest factor only: {mid2:.4f} × 1.0145 = {F_base:.4f}."],
  ["@row:SGD/GBP bid (spot)","@row:One-year MRR (GBP)","@row:One-year MRR (SGD)"],"Forward / expected spot (UIRP) = S × (1 + i_price currency) ÷ (1 + i_base currency); use the midpoint spot.",True),
 mkq("Based on the data in Exhibits 1 and 2, the mark-to-market value for Veltron's forward position related to the oil field construction equipment order is closest to:",[f"a loss of USD{-mtm_nodisc:,.0f}.",f"a loss of USD{-mtm_d:,.0f}.",f"a loss of USD{-bidc:,.0f}."],1,
  [f"This does not discount the gain or loss to the current date: (1.1290 − 1.1351) × 25,000,000 = −USD152,500, which arises at settlement six months from now.",f"Veltron sold EUR 25 million forward at 1.1290. To mark to market it offsets by buying EUR forward, which means paying the offer for both the spot rate and the forward points: 1.1307 + 0.0044 = 1.1351. At settlement the position loses (1.1290 − 1.1351) × 25,000,000 = −USD152,500. Discounting six months at the USD MRR: −152,500 ÷ (1 + 0.0070 × 180/360) = −USD{-mtm_d:,.0f}.",f"This uses the bid for the spot rate and the bid for the points (1.1305 + 0.0042 = 1.1347) instead of the offers, which a buyer of EUR cannot get: −USD{-bidc:,.0f}."],
  ["forward position at a forward price of USD1.1290/EUR","@row:Spot USD/EUR","@row:Six-month forward points"],"Mark to market: take the offsetting forward at today's all-in rate (buying the base currency pays the offer and offer points), find the difference at settlement, discount at the price-currency MRR.",True),
 mkq("Given Morlundan's economic policies, which of the following actions would be most appropriate regarding currency risk on the multiyear contract in Morlundan?",["Veltron should hedge against appreciation of the Morlundan pound.","Veltron should hedge against depreciation of the Morlundan pound.","Veltron should not enter into a hedge because the exchange rate change is ambiguous."],2,
  ["Veltron will be paid in pounds, so appreciation would help it; and in any case the mix of policies does not give a clear direction.","With high capital mobility, an expansionary monetary policy lowers interest rates and pushes the currency down, but an expansionary fiscal policy raises interest rates and pushes it up. The two effects offset each other, so a one-sided hedge is not supported.","In the Mundell–Fleming model with high capital mobility, expansionary monetary policy is bearish for the currency while expansionary fiscal policy is bullish for it. The combination has an ambiguous effect on the exchange rate, so there is no basis for a one-directional hedge."],
  ["Morlundan has a floating exchange rate, and capital flows are highly mobile","an expansionary monetary policy with an expansionary fiscal policy"],"Mundell–Fleming, high capital mobility: expansionary monetary → currency down; expansionary fiscal → currency up; opposite policy directions → ambiguous; same direction → clear."),
 mkq("Keller's belief that Veltron should hedge against a decline in the dollar is best described as being based on which of the following exchange rate adjustment mechanisms?",["Portfolio balance","Debt sustainability","Flow supply/demand"],1,
  ["The portfolio balance channel is about current account imbalances shifting financial wealth and global asset preferences; Keller's concern is that the external debt level itself becomes unsustainable.","The debt sustainability channel says there is an upper limit on how large and persistent a current account deficit can be. If external debt owed to foreign investors rises to unsustainable levels, investors expect a major depreciation of the deficit country's currency to narrow the deficit and stabilize the debt. This is Keller's argument.","The flow supply/demand channel is about the payment flows for traded goods and services: surplus countries' currencies appreciate and deficit countries' currencies depreciate; Keller is not arguing from trade flows."],
  ["external debt owed to foreign investors has risen sharply relative to GDP","judge the US external debt to be unsustainable"],"Upper limit on persistent deficits / unsustainable external debt → debt sustainability; wealth and asset-preference shifts → portfolio balance; trade payment flows → flow supply/demand."),
])
# ===================== M12 Quant: Marsh (multiple regression, reading 1; re-skin of the Williams vignette) =====================
n_obs,kk=25,4; coef=dict(Intercept=4.00,Gas=1.50,Temp=2.00,Snow=6.00,Housing=4.00)
fc=coef['Intercept']+coef['Gas']*0.20+coef['Temp']*4+coef['Snow']*2+coef['Housing']*(-5)
fc_h=coef['Intercept']+coef['Gas']*0.20+coef['Temp']*4+coef['Snow']*2+coef['Housing']*5
fc_t=coef['Intercept']+coef['Gas']*0.20-coef['Temp']*4+coef['Snow']*2+coef['Housing']*(-5)
assert [round(fc,1),round(fc_h,1),round(fc_t,1)]==[4.3,44.3,-11.7]
SSR,SSE=214.0,700.0; SST=SSR+SSE; MSR=SSR/kk; MSE=SSE/(n_obs-kk-1); Fst=MSR/MSE; Fcrit=2.8661
R2=SSR/SST; adj=1-(n_obs-1)/(n_obs-kk-1)*(1-R2)
assert round(MSR,2)==53.50 and round(MSE,2)==35.00 and round(Fst,4)==1.5286 and Fst<Fcrit and round(R2,3)==0.234 and round(adj,3)==0.081
body=f"""Elena Marsh, CFA, has determined that heat pump sales in the Northeast U.S. for Aldrin Company are a function of several factors in each area: the cost of natural gas, the temperature, snowfall, and housing starts. Using data for the most currently available year, she runs a cross-sectional regression where she regresses the deviation of sales from the historical average in each area on the deviation of each explanatory variable from the historical average of that variable for that location. She feels this is the most appropriate method since each geographic area will have different average values for the inputs, and the model can explain how current conditions explain how heat pump sales are higher or lower from the historical average in each area. In summary, she regresses current sales for each area minus its respective historical average on the following variables for each area:
- The difference between the retail price of natural gas and its historical average.
- The mean number of degrees the temperature is below normal in New York City.
- The amount of snowfall above the average.
- The percentage of housing starts above the average.

Marsh used a sample of {n_obs} observations obtained from {n_obs} metropolitan areas in the Northeast U.S. The results are in the tables below. The dependent variable is in sales of heat pumps in millions of dollars.

Coefficient Estimates Table
# Variable | Estimated Coefficient
Intercept | {coef['Intercept']:.2f}
$ Natural Gas | {coef['Gas']:.2f}
Low Temperature | {coef['Temp']:.2f}
Snowfall | {coef['Snow']:.2f}
Housing Starts | {coef['Housing']:.2f}

Analysis of Variance Table (ANOVA)
# Source | Degrees of Freedom | Sum of Squares | Mean Square
Regression | {kk} | {SSR:.2f} | {MSR:.2f}
Error | {n_obs-kk-1} | {SSE:.2f} | {MSE:.2f}
Total | {n_obs-1} | {SST:.2f} |

Table of the F-Distribution. Critical values for right-hand tail area equal to 0.05. Numerator: df1 and Denominator: df2
# df2 \\ df1 | 1 | 2 | 4 | 10 | 20
1 | 161.45 | 199.50 | 224.58 | 241.88 | 248.01
2 | 18.513 | 19.000 | 19.247 | 19.396 | 19.446
4 | 7.7086 | 6.9443 | 6.3882 | 5.9644 | 5.8025
10 | 4.9646 | 4.1028 | 3.4780 | 2.9782 | 2.7740
20 | 4.3512 | 3.4928 | 2.8661 | 2.3479 | 2.1242

One of her goals is to forecast the sales of the New York City metropolitan area next year. For that area and for the upcoming year, Marsh obtains the following projections: natural gas prices will be $0.20 above average, the temperature in New York City will be 4 degrees below normal, snowfall will be 2 inches above average, and housing starts will be 5% below average."""
add('M12','Quantitative Methods',body,[
 mkq("According to the model and the data for the New York City metropolitan area, the forecast of heat pump sales is:",[f"${fc_h:.1f} million above average.",f"${fc:.1f} million above the average.",f"${-fc_t:.1f} million below average."],1,
  [f"This enters housing starts 5% below average as +5 instead of −5: [4 + 1.5 × 0.20 + 2 × 4 + 6 × 2 + 4 × (+5)] = ${fc_h:.1f} million.",f"Forecast = 4.00 + (1.50 × 0.20) + (2.00 × 4) + (6.00 × 2) + (4.00 × (−5)) = 4 + 0.3 + 8 + 12 − 20 = ${fc:.1f} million above the average. The temperature 4 degrees below normal enters as +4 and housing starts 5% below average as −5.",f"This enters the temperature as −4 (it is measured as degrees BELOW normal, so a cold year is +4): ${fc_t:.1f} million."],
  ["temperature in New York City will be 4 degrees below normal","housing starts will be 5% below average","The mean number of degrees the temperature is below normal"],"Plug each variable in with the sign it is DEFINED with (temperature = degrees below normal, so 4 below normal = +4; housing starts below average = negative).",True),
 mkq("Marsh proceeds to test the hypothesis that none of the independent variables has significant explanatory power. Using the joint F-test for the significance of all slope coefficients, at a 5% level of significance:",["all of the independent variables have explanatory power.","at least one of the independent variables has explanatory power.","none of the independent variables has explanatory power."],2,
  ["The F-test cannot show that all variables are significant, only that at least one is.","At least one variable would have explanatory power only if the F-statistic exceeded the critical value; it does not.",f"F = mean square regression ÷ mean square error = {MSR:.2f} ÷ {MSE:.2f} = {Fst:.3f}. The critical F value for 4 numerator and 20 denominator degrees of freedom is 2.8661. Since {Fst:.3f} < 2.8661, we cannot reject the null hypothesis that all slope coefficients are zero: none of the independent variables has significant explanatory power."],
  ["@row:Regression","@row:Error","@row:20"],"Joint F-test: F = MSR ÷ MSE (df = k and n − k − 1); F above the critical value → at least one slope differs from 0; below → none is significant.",True),
 mkq("When Marsh ran the model, the computer said the R-squared is 0.234. She examines the other output and concludes that this is the:",["adjusted R-squared value.","unadjusted R-squared value.","neither the unadjusted nor adjusted R-squared value, nor the coefficient of correlation."],1,
  [f"Adjusted R-squared = 1 − [(25 − 1) ÷ (25 − 4 − 1)] × (1 − 0.234) = {adj:.3f}, not 0.234.",f"Unadjusted R-squared = regression sum of squares ÷ total sum of squares = {SSR:.0f} ÷ {SST:.0f} = {R2:.3f}, so the reported value is the unadjusted R-squared.",f"0.234 matches the unadjusted R-squared ({SSR:.0f} ÷ {SST:.0f}), so it is not 'neither'."],
  ["@row:Regression","@row:Total"],"Unadjusted R² = RSS ÷ SST; adjusted R² = 1 − [(n − 1) ÷ (n − k − 1)] × (1 − R²) is smaller when k > 1.",True),
 mkq("In preparing and using this model, Marsh has least likely relied on which of the following assumptions?",["The disturbance or error term is normally distributed.","The residuals are homoscedastic.","There is a linear relationship between the independent variables."],2,
  ["Normally distributed errors are an assumption of multiple regression.","Homoscedastic residuals (constant error variance) are an assumption of multiple regression.","Multiple regression assumes there is NO exact linear relationship between two or more of the independent variables (no perfect multicollinearity), so Marsh has least likely relied on a linear relationship among them."],
  ["regresses the deviation of sales from the historical average"],"Multiple regression assumptions: linear in the parameters, no exact linear relationship among independent variables, normal and homoscedastic errors, no serial correlation."),
])
# ===================== M12 Equity: Ibarra / Brightleaf (justified P/B, single-stage RI; re-skin of eq5e-thales, readings 21) =====================
bvps,pb=31.20,3.25; px=round(bvps*pb,2); beta,rf,erp=0.80,3.90,5.00; r=rf+beta*erp
g1,roe1=4.50,18.0
pb1=1+(roe1-r)/(r-g1)
roe2=r+(pb-1)*(r-g1)
g3=r-(roe1-r)/(pb-1)
assert px==101.40 and abs(r-7.9)<1e-9 and round(pb1,2)==3.97 and round(roe2,2)==15.55 and round(g3,2)==3.41,(px,r,pb1,roe2,g3)
hb,hp,hroe,hg,hr=24.0,42.0,17.0,9.0,13.0
hv=hb+hb*(hroe-hr)/(hr-hg); assert hv==48.0
body=f"""Ibarra Electronics S.A. (Madrid: IBE.MC) has a current stock price of €{px:.2f}. It also has book value per share of €{bvps:.2f} and a P/B of {pb:.2f}. Assume that the single-stage growth model is appropriate for valuing the company. Ibarra's adjusted beta is {beta:.2f}, the risk-free rate is {rf:.2f}%, and the equity risk premium is {erp:.2f}%.

Retail fund manager Tobias Renner is considering the purchase of shares in upstart retailer Brightleaf Stores (BLS). The current book value of BLS is ${hb:.0f} per share, and its market price is ${hp:.0f}. Renner expects long-term ROE to be {hroe:.0f}%, long-term growth to be {hg:.0f}%, and cost of equity to be {hr:.0f}%."""
add('M12','Equity Valuation',body,[
 mkq(f"If the growth rate is {g1:.2f}% and the ROE is {roe1:.0f}%, the justified P/B for Ibarra is closest to:",[f"{pb1:.2f}.",f"{pb:.2f}.",f"{1+(roe1-r)/(r):.2f}."],0,
  [f"Required return = {rf:.2f}% + {beta:.2f} × {erp:.2f}% = {r:.1f}%. Justified P/B = 1 + (ROE − r) ÷ (r − g) = 1 + ({roe1/100:.3f} − {r/100:.3f}) ÷ ({r/100:.3f} − {g1/100:.3f}) = {pb1:.2f}.",f"{pb:.2f} is the current P/B, not the justified P/B for the new inputs.",f"This divides by r instead of (r − g): 1 + (0.18 − 0.079) ÷ 0.079 = {1+(roe1-r)/(r):.2f}."],
  ["is the single-stage growth model","@x"][:1] and ["the single-stage growth model is appropriate",f"equity risk premium is {erp:.2f}%"],"Justified P/B (single stage) = 1 + (ROE − r) ÷ (r − g), with r = rf + beta × ERP.",True),
 mkq(f"If the growth rate is {g1:.2f}%, the ROE required to yield Ibarra's current P/B of {pb:.2f} is closest to:",[f"{roe1:.1f}%.",f"{roe2:.1f}%.",f"{r:.1f}%."],1,
  [f"{roe1:.0f}% is just the ROE given in the previous question; it gives a justified P/B of {pb1:.2f}, not {pb:.2f}.",f"Solve {pb:.2f} = 1 + (ROE − 0.079) ÷ (0.079 − 0.045): ROE = 0.079 + ({pb:.2f} − 1) × 0.034 = {roe2:.1f}%.",f"At ROE equal to the required return ({r:.1f}%), the justified P/B would be exactly 1.0."],
  [f"current P/B of {pb:.2f}","the ROE required"],"Rearrange P/B = 1 + (ROE − r) ÷ (r − g): ROE = r + (P/B − 1) × (r − g).",True),
 mkq(f"If the ROE is {roe1:.0f}%, the growth rate required for Ibarra to have its current P/B of {pb:.2f} is closest to:",[f"{g1:.1f}%.",f"{r:.1f}%.",f"{g3:.1f}%."],2,
  [f"{g1:.1f}% gives a justified P/B of {pb1:.2f}, not {pb:.2f}.",f"A growth rate equal to the required return makes the single-stage value infinite and is not feasible.",f"Solve {pb:.2f} = 1 + (0.18 − 0.079) ÷ (0.079 − g): 0.079 − g = 0.101 ÷ {pb-1:.2f}, so g = {g3:.1f}%."],
  [f"current P/B of {pb:.2f}","the growth rate required"],"Rearrange P/B = 1 + (ROE − r) ÷ (r − g): g = r − (ROE − r) ÷ (P/B − 1).",True),
 mkq("Using a single-stage residual income model, Renner would most likely conclude that BLS's shares are:",[f"somewhat undervalued (value ${hv:.0f} against a price of ${hp:.0f}).",f"somewhat overvalued (value $36 against a price of ${hp:.0f}).","fairly valued."],0,
  [f"V0 = B0 + B0 × (ROE − r) ÷ (r − g) = {hb:.0f} + {hb:.0f} × ({hroe/100:.2f} − {hr/100:.2f}) ÷ ({hr/100:.2f} − {hg/100:.2f}) = ${hv:.0f}, which is above the market price of ${hp:.0f}.",f"The value is above, not below, the market price, because ROE ({hroe:.0f}%) exceeds the cost of equity ({hr:.0f}%).",f"Value (${hv:.0f}) differs from the market price (${hp:.0f}), so the shares are not fairly valued."],
  [f"long-term ROE to be {hroe:.0f}%",f"cost of equity to be {hr:.0f}%"],"Single-stage RI: V0 = B0 + B0 × (ROE − r) ÷ (r − g); compare with price.",True),
])
# ===================== M12 Corporate Issuers: Halden / ESG and governance (re-skin of esg31-5) =====================
body="""Halden Ltd, based in England, is a private company that produces and retails candles and home fragrances. Marian Pryce and her brother co-founded the company 12 years ago because of their shared interest in developing products from recycled and plant-based materials. Initially the two siblings owned all the shares, but three years ago they implemented performance-based compensation for the top four senior managers, and as part of this process, the managers now own a combined 8% of the equity.

The company is looking to expand its equity base to help fund a new workshop and support growth plans. Pryce, who is responsible for the company's financial management, is meeting with Anil Rao, a financial consultant, to explore Halden's equity financing options. Pryce asks if they were to go public, could they have a share structure similar to a company like Snap, where the co-founders could retain voting control of the company through the issuance of multi-voting ordinary (common) shares. Rao tells her that before Halden considers going public, there are other options available, and suggests they look for private equity investment. He mentions being familiar with a private equity fund that runs a socially responsible investment (SRI) pool that could potentially be interested in Halden.

Pryce is very interested in being associated with an SRI fund and asks how the fund would assess whether Halden qualifies for the investment. Rao explains that the private equity fund he is thinking of uses data provided by the company and looks for other information from industry organizations, news reports, and environmental groups.

Pryce explains to Rao that Halden is implementing a new initiative to reduce the packaging associated with their products. The company will stock the majority of its refill fragrance oils in bulk containers in its retail outlets. Customers will purchase reusable glass bottles, available in two different sizes, to be used for future purchases. This change will attract customers interested in reducing their plastic footprint. The company also expects the change to reduce shipping, packaging, and handling costs, both at the distribution centers and in the retail stores. The numerous individual bottles that would have been packaged for shipping and then unpacked and shelved at the stores will be replaced with larger bulk containers. Rao notes that when announced, analysts will use this information in their valuation of Halden."""
add('M12','Corporate Issuers',body,[
 mkq("The change in ownership structure that occurred three years ago most likely addressed which of the following issues associated with family-owned businesses?",["Poor transparency.","Interlocking directorships.","Ability to attract quality management."],2,
  ["Family-owned businesses often suffer from a lack of transparency, but giving some equity to managers does not improve it while the founders remain the majority owners.","Interlocking directorships arise when a corporate group controls several corporations; nothing in the vignette mentions them.","Granting senior managers an equity stake with performance-based pay helps a family-owned business attract and keep quality management, which is the issue addressed."],
  ["performance-based compensation for the top four senior managers","the managers now own a combined 8% of the equity"],"Family-owned business issues: transparency, interlocking directorships, attracting quality management. Equity or performance pay for managers → attracting quality management."),
 mkq("If Halden were to go public with the share structure similar to Snap that Pryce asked about, which governance issue would most likely arise?",["Voting cap restrictions.","Principal–agent problem.","Principal–principal problem."],2,
  ["Voting caps are legal restrictions on the voting rights of large share positions, usually meant to stop foreign investors from gaining control; they are not what multi-voting shares create.","The principal–agent problem arises when ownership and voting power are both dispersed, which makes shareholders weak and managers strong; here the founders keep control.","With multi-voting shares the founders keep voting control with a small economic stake, so the conflict is between the controlling shareholders and the minority shareholders: a principal–principal problem."],
  ["retain voting control of the company through the issuance of multi-voting ordinary (common) shares"],"Controlling shareholders vs minority shareholders (dual class, cross holdings) → principal–principal; dispersed owners vs managers → principal–agent."),
 mkq("Which of the following approaches to identifying a company's ESG factors best describes the one used by the private equity fund that Rao mentions?",["ESG data providers.","Proprietary methods.","Not-for-profit initiatives."],1,
  ["ESG data providers are independent organizations, such as MSCI or Sustainalytics, from which the fund would purchase ready-made ratings; the fund here collects the information itself.","Proprietary methods mean the analysts use their own judgment on information from corporate reports, industry organizations, news and environmental groups, which is what the fund does.","Not-for-profit initiatives are standards or frameworks created by non-profit bodies (for example the PRI or GRI); none is mentioned."],
  ["uses data provided by the company and looks for other information from industry organizations, news reports, and environmental groups"],"Own analysts + company data + news and NGO sources → proprietary methods; purchased ratings → data providers; frameworks from non-profits → not-for-profit initiatives."),
 mkq("Analysts interested in incorporating ESG factors into their analysis will most likely adjust for the announcement of the changes arising from Halden's new packaging initiative by:",["increasing the risk premium.","increasing the company's fair value.","modifying only the qualitative ESG analysis."],1,
  ["Lower shipping, packaging and handling costs raise margins and cash flows, which, if anything, would reduce, not increase, the risk premium.","The initiative is expected to reduce costs, which increases operating margins and cash flows, and it also appeals to customers. Analysts would therefore raise their cash-flow forecasts and the company's fair value.","The initiative has measurable cost effects, so analysts would change the quantitative valuation inputs too, not only the qualitative ESG assessment."],
  ["expects the change to reduce shipping, packaging, and handling costs"],"ESG integration: quantify the effect on cash flows or the discount rate; lower costs → higher cash flow → higher value."),
])
# ---------------- order, balance, write (core = non-Ethics vignettes; build.py adds the Ethics units, hints and answer balance) ----------------
PERMS=[p for p in itertools.permutations(range(3)) if p!=(0,1,2)]
def maxrun(k):
    m_=c=1
    for a,b in zip(k,k[1:]): c=c+1 if a==b else 1; m_=max(m_,c)
    return m_
def finish(paper,lo,hi,seed):
    Vp=[v for v in V if v.get('paper')==paper]
    rng=random.Random(seed)
    while True:
        rng.shuffle(Vp)
        if all(a['topic']!=b['topic'] for a,b in zip(Vp,Vp[1:])): break
    free=[(vi,i) for vi,v in enumerate(Vp) for i,q in enumerate(v['questions']) if not q['_fixed']]
    base=[copy.deepcopy(Vp[vi]['questions'][i]) for vi,i in free]
    for t in range(60000):
        r=random.Random(t); ch=[list(r.choice(PERMS)) for _ in free]
        for (vi,i),b0,o in zip(free,base,ch):
            q=copy.deepcopy(b0); perm(q,o); Vp[vi]['questions'][i]=q
        k=''.join('ABC'[q['answer']] for v in Vp for q in v['questions']); c=collections.Counter(k)
        if maxrun(k)<=3 and all(lo<=c[x]<=hi for x in 'ABC'): break
    else: raise SystemExit('no balance '+paper)
    for v in Vp:
        v.pop('paper')
        for q in v['questions']: q.pop('_fixed',None)
    return Vp,k
if __name__=='__main__':
    for paper,lo,hi in (('M11',9,15),('M12',10,16)):
        Vp,k=finish(paper,lo,hi,11)
        json.dump(dict(vignettes=Vp),open(f'/home/user/jimin/bank/exam/mock{paper[1:]}_core.json','w'),ensure_ascii=False,indent=1)
        print(paper,len(k),k,collections.Counter(k),[v['topic'][:8] for v in Vp])
