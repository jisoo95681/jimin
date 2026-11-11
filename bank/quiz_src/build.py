import html,collections
from content import Q
esc=html.escape
ABBR={'Ethics':'ETH','FSA':'FSA','Equity':'EQ','Fixed Income':'FI','Derivatives':'DER','Quant':'QNT','Portfolio Management':'PM','Economics':'ECO','Corporate Issuers':'CORP','Alternative Investments':'ALT'}
ORDER=['Ethics','FSA','Equity','Fixed Income','Derivatives','Quant','Portfolio Management','Economics','Corporate Issuers','Alternative Investments']
by=collections.OrderedDict((s,[x for x in Q if x[0]==s]) for s in ORDER)
total=sum(len(v) for v in by.values())
css="""
@page{size:A4;margin:13mm 12mm 14mm 12mm}
*{box-sizing:border-box}
body{font-family:'Liberation Sans',Arial,sans-serif;color:#111;font-size:10.4pt;line-height:1.38;margin:0}
h1{font-size:19pt;margin:0 0 2mm}
.sub{color:#555;font-size:9.5pt;margin:0 0 4mm}
.box{border:1px solid #bbb;border-radius:4px;padding:3mm 4mm;margin:0 0 5mm;font-size:9.6pt;background:#f7f8fa}
.sec{break-inside:avoid-column}
h2{font-size:12.5pt;margin:0 0 2mm;padding:1.2mm 2.5mm;background:#1f4e79;color:#fff;border-radius:3px;break-after:avoid;column-span:none}
.cols{column-count:2;column-gap:9mm}
.q{break-inside:avoid;margin:0 0 3.2mm;display:flex;gap:2mm}
.q .n{font-weight:bold;color:#1f4e79;min-width:12mm;white-space:nowrap}
.q .t{flex:1}
.star{color:#c0392b;font-weight:bold}
.chk{display:inline-block;width:3mm;height:3mm;border:1px solid #777;margin-right:1.5mm;vertical-align:-0.4mm}
.a{break-inside:avoid;margin:0 0 2.4mm;font-size:9.1pt;line-height:1.32}
.a b{color:#1f4e79}
.pb{break-before:page}
"""
def qsec(s,items):
    h=f"<h2>{s} ({len(items)})</h2><div class='cols'>"
    for i,(ss,q,a,st) in enumerate(items,1):
        h+=f"<div class='q'><div class='n'>{ABBR[s]} {i}</div><div class='t'>{'<span class=star>★</span> ' if st else ''}{esc(q)}</div></div>"
    return h+"</div>"
def asec(s,items):
    h=f"<h2>{s}</h2><div class='cols'>"
    for i,(ss,q,a,st) in enumerate(items,1):
        h+=f"<div class='a'><b>{ABBR[s]} {i}</b> {'<span class=star>★</span> ' if st else ''}{esc(a)}</div>"
    return h+"</div>"
stars=sum(x[3] for x in Q)
doc=f"""<!doctype html><html><head><meta charset='utf-8'><title>Concept quiz</title><style>{css}</style></head><body>
<h1>Concept Quiz: Practice Sets 1-8</h1>
<p class="sub">CFA Level II · {total} one-sentence questions · answers are on the last pages</p>
<div class="box"><b>How to use:</b> read a question, answer it in your head, then check the answer pages (cover them while you read). Mark the box if you got it right. <span class="star">★</span> = a concept you missed in practice sets 1-3 or Mock 10 ({stars} questions): review these first.</div>
"""
for s,items in by.items():
    doc+=qsec(s,items)
doc+="<div class='pb'></div><h1>Answers</h1><p class='sub'>Same numbering as the questions. ★ = concept missed before.</p>"
for s,items in by.items():
    doc+=asec(s,items)
doc+="</body></html>"
open('/tmp/gen/sub/quiz.html','w').write(doc); print(total,stars)
