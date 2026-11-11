# 11 Nov (user request): short vignettes on NORMALIZED earnings (private company valuation) appended at the END of practice set 6 (Q49-52).
# Re-skinned from Equity Module 6: Q3 (definition), LPE Q11 (normalized EBITDA), Aaron Q17 (which item needs no adjustment), Brady Q22 (normalized operating income after taxes).
def vigs():
    out=[]
    out.append(dict(topic="Equity Valuation",
      body="Marta Osei, an analyst at Corvin Partners, values a small private manufacturer by comparing it with listed companies. Before she applies public company multiples to the private company's earnings, she normalizes them.",
      questions=[dict(q="In private company valuation, normalizing earnings most likely means:",
        options=["adjusting for the cyclicality of the company's revenues and costs.","adjusting revenues and costs so that the private company's results can be compared with those of public companies.","adjusting the earnings for the lack of marketability of the shares."],answer=1,
        why="Normalizing removes distortions in revenues and costs (non-market owner pay, personal expenses, non-recurring items) so that the private company's results are comparable with public companies. Cyclicality is a separate issue and the lack of marketability is handled by a discount (DLOM), not by changing earnings.")]))
    out.append(dict(topic="Equity Valuation",
      body="Tolland Joinery is a private furniture maker. Its reported EBITDA is EUR 5.20 million. Its founder and CEO, Anselm Tolland, is paid EUR 250,000 a year, while CEOs of similar companies earn EUR 520,000 on average.",
      questions=[dict(q="Tolland's normalized EBITDA is closest to:",
        options=["EUR 5.47 million.","EUR 5.20 million.","EUR 4.93 million."],answer=2,
        why="The CEO is paid EUR 0.27 million LESS than the market rate, so reported costs are too low. Normalized EBITDA = 5.20 − (0.52 − 0.25) = EUR 4.93 million. Overpaid owners work the other way (costs are added back). 5.47 adds the difference instead of subtracting it.")]))
    out.append(dict(topic="Equity Valuation",
      body="Hana Brandt is valuing a family-owned bakery. Her client points out the following about the business.\n\nItem 1: The bakery's employees are paid about the same as employees of other bakeries in the area.\nItem 2: The owner's spouse works full time in the bakery and takes no salary.\nItem 3: The shop is rented from the owner's brother at a rent well below market rates.",
      questions=[dict(q="Which item would least likely require an adjustment to normalize the bakery's earnings?",
        options=["Item 1","Item 2","Item 3"],answer=0,
        why="Employees paid at market level need no adjustment. The unpaid spouse (Item 2) makes the costs too low, and the below-market related-party rent (Item 3) does too: both must be adjusted to market levels.")]))
    out.append(dict(topic="Equity Valuation",
      body="Ravi Menon is valuing Karstad Foods, a family-owned company that is for sale. Menon reviews its statements and finds the following.\n\nFamily members' compensation, included in SG&A, is $600,000 a year higher than is typical for companies of its size.\nAn annual management retreat costs $40,000 (included in SG&A) and is considered unnecessary.\nThe company owns a boat with annual operating expenses of $12,000 and annual depreciation of $25,000. A business purpose would justify costs of only $3,000 a year.\nThe owners own a 300,000 square foot warehouse which they rent to Karstad at $9 a square foot a year. Market rents for similar space are $7 a square foot. The rent is included in SG&A.\n\nExhibit 1: Karstad Foods, As Reported\n# Item | Amount\nEBIT | $4,200,000\nPro forma taxes (30%) | $1,260,000\nOperating income after taxes | $2,940,000",
      questions=[dict(q="Karstad's normalized operating income after taxes is closest to:",
        options=["$3,814,300.","$3,831,800.","$3,825,500."],answer=1,
        why=("Adjust EBIT first, then tax it. Add back the excess compensation 600,000, the retreat 40,000, the excess boat operating cost 12,000 − 3,000 = 9,000, the excess rent 300,000 × (9 − 7) = 600,000 and the boat depreciation 25,000 (the boat is removed).\n"
             "Normalized EBIT = 4,200,000 + 600,000 + 40,000 + 9,000 + 600,000 + 25,000 = 5,474,000.\nTax at 30% = 1,642,200; operating income after taxes = $3,831,800.\n"
             "$3,814,300 leaves out the boat depreciation; $3,825,500 leaves out the 9,000 boat cost."))]))
    return out
