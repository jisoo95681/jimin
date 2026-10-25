# Fixed Income: key notes

## Term structure
- A coupon bond's YTM ≈ the maturity spot rate (slightly below if the curve slopes up). Not the coupon.
- Curve unchanged → 1-year return on an N-year zero = f(N – 1, 1) (rolling down). Forwards realized → every bond earns the 1-year spot.
- Theories: segmented (won't move whatever the return) · preferred habitat (moves if paid enough) · liquidity preference (premium rises with maturity) · pure/local expectations.
- Σ key rate durations = effective duration; %ΔP ≈ –Σ KRD × Δr. KRD for non-parallel shifts.

## Embedded options and convertibles
- Tree: add the coupon at each node; putable = max(value, put price), callable = min(value, call price).
- Volatility ↑ → putable value ↑, callable value ↓. Put value = putable – straight.
- Convertible minimum = max(conversion value, straight value).

## CDS
- Payout = notional × (1 – recovery of the cheapest-to-deliver); value your own bond at its own price. Own bond above CTD → prefer cash settlement.
- Covered: obligations ranking equal to the reference obligation. Credit events: bankruptcy, failure to pay (any obligation), restructuring (not in the US).
- Upfront ≈ (spread – coupon) × duration; price per 100 = 100 – upfront. Profit ≈ Δ spread × duration × notional.
- PD over N years = 1 – Π(1 – hazard rate).
- Curve: down-sloping = near-term stress. Flattener = buy short / sell long protection; steepener = the reverse.
- Weak economy: buy HY, sell IG index protection (reverse when strong).
- Basis: bond spread = yield – MRR. Bond > CDS → buy bond + buy protection; bond < CDS → short bond + sell protection.
- LBO of itself: buy stock + buy protection. Debt-funded acquisition: long target shares + buy acquirer protection.
- Index = full hedge of many names; tranche = partial. ISDA master agreement before trading.

## Your traps
- Buy/sell protection direction (8 of 15 CDS misses); coupon as YTM; 1-year spot as the rolling-down return.
