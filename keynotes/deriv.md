# Derivatives: key notes

## Options
- Gamma: long options +, short options –, stock 0. Delta-neutral ≠ gamma-neutral. Short gamma loses on big moves either way.
- New value ≈ old + θ × days (theta already negative).
- Delta hedge: buy N(d1) shares per short call; put delta = N(d1) – 1.
- American put on a tree: at each node take max(exercise value, hold value).

## Forwards and swaps
- Forward value: V_t = S_t – PV(remaining dividends) – F0 / (1 + r)^(T – t). Discount only F0, over the time remaining.
- Continuous: F_t = S_t × e^((r – δ)(T – t)); V = (F_t – F_0) × e^(–r(T – t)). Dividend yield lowers F.
- Market forward above no-arbitrage → carry arbitrage (sell forward, borrow, buy spot); below → reverse carry.
- Swap after initiation: both legs as bonds including the notional. Contract fixed rate never changes.
- Swap fixed rate = (1 – last PV factor) / Σ PV factors, annualized.
- Swap value = notional × (new fixed – old fixed) × Σ PV factors (all remaining). Pay-fixed gains when the market rate is higher; receive-fixed is the negative. Answer for the side the question names.

## Your traps
- Discounting S_t; subtracting a negative theta; not discounting the notional; one PV factor instead of the sum.
