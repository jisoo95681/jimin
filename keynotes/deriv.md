# Derivatives: key notes

## Options
- Gamma: long options +, short options –, stock 0. Delta-neutral ≠ gamma-neutral. Short gamma loses on big moves either way.
- New value ≈ old + θ × days (theta already negative).
- Delta hedge: buy N(d1) shares per short call; put delta = N(d1) – 1.
- American put on a tree: at each node take max(exercise value, hold value).
- Binomial no-arbitrage: discount at the **risk-free** rate (a company bond yield is a distractor). Call priced above the model → sell the call, buy Δ shares with borrowing. No dividend → American call = European call.

## Forwards and swaps
- Futures: marked to market daily (value reset to zero). Forward: value accumulates. Both zero at initiation. Pricing = price at initiation; valuation = value after.
- Arbitrage: F above fair → sell forward, buy spot (carry); F below fair → buy forward, short spot (reverse carry). Your forecast of the future price is irrelevant.
- Forward value: V_t = S_t – PV(remaining dividends) – F0 / (1 + r)^(T – t). Discount only F0, over the time remaining.
- Continuous: F_t = S_t × e^((r – δ)(T – t)); V = (F_t – F_0) × e^(–r(T – t)). Dividend yield lowers F.
- Swap after initiation: both legs as bonds including the notional. Contract fixed rate never changes.
- FRA after initiation: new forward rate from the two MRRs for the time left, V = (F_new – F_old) × NA × days/360, discounted at the MRR of the END date. Pay-fixed = long (gains when the forward rises); pay-floating = short (loses: negative). Check the sign on the options.
- Equity swap: V = NA × S_t/S_reset – [coupon × ΣPV + NA × PV_last]; coupon = fixed ÷ payments a year × NA. Cash flow at a reset ≠ value; a negative equity return is paid by the equity receiver.
- Equity swap cash flow at a reset = NA × (equity return – floating rate × days/360); the floating rate is the one set at the START of the period. Quarterly swaps: use per-period rates (annual ÷ 4) with the quarterly PV factors.
- Currency swap: fixed rate for each currency from its own curve; value = foreign-currency bond ÷ spot today – home-currency bond, each with its own PV factors and the original coupons.
- Treasury futures: invoice = futures price × conversion factor + accrued interest; the factor aligns coupons (6% basis), not accrued interest.
- Swap fixed rate = (1 – last PV factor) / Σ PV factors, annualized.
- Swap value = notional × (new fixed – old fixed) × Σ PV factors (all remaining). Pay-fixed gains when the market rate is higher; receive-fixed is the negative. Answer for the side the question names.
- "No-arbitrage / equilibrium / fair price" = the model price. MP (quoted) > FP → overvalued → carry; MP < FP → reverse carry. Treasury futures: compare quoted Q with Q0 = (1/CF) × [FV(B0 + AI0) – AI_T – FV(coupons)]; AI0 counts days SINCE the last coupon, AI_T = days since the last coupon at expiry.
- Interest on borrowed funds is in the FV factor, never a carry cost. Dividends and coupons (benefits) are subtracted; a short forward loses when r or the spot rises.
- Swap value: periodic rates × ΣZ × NA; annualized rates need × days/360 as well. Currency swap quote A/B = A per 1 B (multiply B amounts by it).

## Your traps
- Discounting S_t; subtracting a negative theta; not discounting the notional (swap leg or equity swap); one PV factor instead of the sum; value vs cash flow; annual rates with quarterly PV factors; the wrong curve or exhibit.
