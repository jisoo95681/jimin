import html,collections
from content import N
esc=html.escape
ORDER=['Ethics','FSA','Equity','Fixed Income','Derivatives','Quant','Portfolio Management','Economics','Corporate Issuers','Alternative Investments']
by=collections.OrderedDict((s,[x for x in N if x[0]==s]) for s in ORDER)
def mockkey(x): return (int(x[1].split()[1]),int(x[1].split('Q')[1]))
for s in by: by[s].sort(key=mockkey)
cnt=collections.Counter(x[1].split(' Q')[0] for x in N)
css="""
@page{size:A4;margin:13mm 12mm 14mm 12mm}
*{box-sizing:border-box}
body{font-family:'Liberation Sans',Arial,sans-serif;color:#111;font-size:9.6pt;line-height:1.36;margin:0}
h1{font-size:19pt;margin:0 0 2mm}
.sub{color:#555;font-size:9.5pt;margin:0 0 4mm}
.box{border:1px solid #bbb;border-radius:4px;padding:3mm 4mm;margin:0 0 5mm;font-size:9.4pt;background:#f7f8fa}
h2{font-size:14pt;margin:0 0 2.5mm;padding:1.2mm 2.5mm;background:#1f4e79;color:#fff;border-radius:3px;break-after:avoid}
.sec{margin:0 0 5mm}
.cols{column-count:2;column-gap:8mm}
.n{break-inside:avoid;margin:0 0 3mm;padding:1.8mm 2.6mm;border:1px solid #d3d9de;border-left:3px solid #c0392b;border-radius:3px}
.n.ok{border-left-color:#d9a400}
.h{font-weight:bold;color:#1f4e79;font-size:9.4pt}
.h .p{color:#c0392b}.h .k{color:#2e7d32}
.h .u{color:#8a6500;font-weight:normal;font-size:8.4pt}
.m{margin-top:.8mm}.m b{color:#c0392b}
.f{margin-top:.6mm}.f b{color:#2e7d32}
.fx{margin-top:.8mm;padding:1mm 2mm;background:#eef3f7;border-radius:2px;font-family:'Liberation Mono',monospace;font-size:8.4pt;line-height:1.3;white-space:pre-wrap}
"""
def card(x):
    s,tag,pick,key,mis,fix,fx=x
    ok=pick==key
    head=f"<div class='h'>{tag} · " + (f"you <span class='k'>{pick}</span> (right) <span class='u'>unsure</span>" if ok else f"you <span class='p'>{pick}</span> → answer <span class='k'>{key}</span>")+"</div>"
    return f"<div class='n {'ok' if ok else ''}'>{head}<div class='m'><b>{'Unsure' if ok else 'Mistake'}:</b> {esc(mis)}</div><div class='f'><b>Fix:</b> {esc(fix)}</div>"+(f"<div class='fx'>{esc(fx)}</div>" if fx else "")+"</div>"
secs=""
for i,(s,items) in enumerate(by.items()):
    secs+=f"<div class='sec' style='{'break-before:page' if i else ''}'><h2>{s} ({len(items)})</h2><div class='cols'>"+"".join(card(x) for x in items)+"</div></div>"
wrong=sum(x[2]!=x[3] for x in N)
doc=f"""<!doctype html><html><head><meta charset='utf-8'><title>Mock 6-10 error notes</title><style>{css}</style></head><body>
<h1>Mock 6-10: Error Notes</h1>
<p class="sub">CFA Level II · {len(N)} notes ({wrong} wrong, {len(N)-wrong} right but unsure) · grouped by subject · mistake → fix, with the formula for calculation questions</p>
<div class="box"><b>How to read:</b> red border = wrong answer (your pick → correct answer); yellow border = right but unsure. Each note gives the mistake, the fix, and a formula box where the question was a calculation. Count by mock: {', '.join(f'{k} {v}' for k,v in sorted(cnt.items()))}. Mock 8 notes follow the version you sat.</div>
{secs}</body></html>"""
open('notes.html','w').write(doc)
