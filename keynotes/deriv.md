# Derivatives: key notes

## Options
- Gamma: long options +, short options –, stock 0. Delta-neutral ≠ gamma-neutral. Short gamma loses on big moves either way.
- New value ≈ old + θ × days (theta already negative).
- Delta hedge: buy N(d1) shares per short call; put delta = N(d1) – 1.
- American put on a tree: at each node take max(exercise value, hold value).

## Forwards and swaps
- Futures: marked to market daily (value reset to zero). Forward: value accumulates. Both zero at initiation. Pricing = price at initiation; valuation = value after.
- Arbitrage: F above fair → sell forward, buy spot (carry); F below fair → buy forward, short spot (reverse carry). Your forecast of the future price is irrelevant.
- Forward value: V_t = S_t – PV(remaining dividends) – F0 / (1 + r)^(T – t). Discount only F0, over the time remaining.
- Continuous: F_t = S_t × e^((r – δ)(T – t)); V = (F_t – F_0) × e^(–r(T – t)). Dividend yield lowers F.
- Swap after initiation: both legs as bonds including the notional. Contract fixed rate never changes.
- FRA after initiation: new forward rate from the two MRRs for the time left, V = (F_new – F_old) × NA × days/360, discounted at the MRR of the END date. Pay-fixed = long (gains when the forward rises); pay-floating = short (loses: negative). Check the sign on the options.
- Equity swap: V = NA × S_t/S_reset – [coupon × ΣPV + NA × PV_last]; coupon = fixed ÷ payments a year × NA. Cash flow at a reset ≠ value; a negative equity return is paid by the equity receiver.
- Treasury futures: invoice = futures price × conversion factor + accrued interest; the factor aligns coupons (6% basis), not accrued interest.
- Swap fixed rate = (1 – last PV factor) / Σ PV factors, annualized.
- Swap value = notional × (new fixed – old fixed) × Σ PV factors (all remaining). Pay-fixed gains when the market rate is higher; receive-fixed is the negative. Answer for the side the question names.

## Your traps
- Discounting S_t; subtracting a negative theta; not discounting the notional (swap leg or equity swap); one PV factor instead of the sum; value vs cash flow.
