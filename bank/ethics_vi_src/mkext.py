import json,html
S=json.load(open('merged.json'))
for s in S:
    s['new']=[r for r in s['new'] if r[1]!='Skills and experience gained at the former employer']
import re
strip=lambda t:re.sub(r' \((?:kq41-[\d/, ]+|kq41-[^)]*)\)','',t)
for s_ in S:
    s_['new']=[[v,strip(a),strip(b)] for v,a,b in s_['new']]
cls={'VIOLATION':'bad','OK':'good','DO / REQUIRED':'req','RULE':'note'}
e=lambda t:html.escape(t,quote=False)
nnew=sum(len(s['new']) for s in S); nold=sum(len(s['rows']) for s in S)
head='''<!doctype html><html><head><meta charset="utf-8"><title>Ethics: violation or not (extended)</title><style>
@page{size:A4 landscape;margin:9mm 10mm}
*{box-sizing:border-box}body{font-family:"Liberation Sans","DejaVu Sans",Arial,sans-serif;font-size:7.8pt;line-height:1.25;color:#1d2329;margin:0}
h1{font-size:15pt;margin:0 0 2px}.sub{color:#5b6670;margin:0 0 6px}
table{border-collapse:collapse;width:100%;table-layout:fixed}th,td{border:1px solid #c9d0d6;padding:2px 5px;text-align:left;vertical-align:top}
th{background:#eef1f4}
tr.hd td{background:#1d2329;color:#fff;font-weight:bold;font-size:8.6pt;padding:3px 6px;border-color:#1d2329}
td.v{font-weight:bold;white-space:nowrap;vertical-align:middle}
td.bad{color:#a3423a;background:#fbefee}td.good{color:#2f6b3e;background:#eef7f0}td.req{color:#1f4e8c;background:#edf3fb}td.note{color:#5b6670;background:#f4f5f6}
tr.new td{background:#fffbe0}
.chip{display:inline-block;background:#fffbe0;border:1px solid #e6d98a;padding:0 5px}
tr{break-inside:avoid}
</style></head><body>
<h1>Ethics: violation or not</h1><p class="sub">CFA Level II Ethical and Professional Standards · red = violation, green = fine, blue = what to do or what is required, grey = rule to know · <span class="chip">pale yellow rows</span> = added from the Ethics question bank (NOLD original rows + NNEW added rows)</p>
<table><colgroup><col style="width:10.5%"><col style="width:44%"><col style="width:45.5%"></colgroup><tr><th>Verdict</th><th>Scenario</th><th>Why / key rule</th></tr>'''.replace('NOLD',str(nold)).replace('NNEW',str(nnew))
h=[head]
for s in S:
    h.append('<tr class="hd"><td colspan="3">%s</td></tr>'%e(s['std']))
    for v,sc,w in s['rows']:
        h.append('<tr><td class="v %s">%s</td><td>%s</td><td>%s</td></tr>'%(cls[v],e(v),e(sc),e(w)))
    for v,sc,w in s['new']:
        h.append('<tr class="new"><td class="v %s">%s</td><td>%s</td><td>%s</td></tr>'%(cls[v],e(v),e(sc),e(w)))
h.append('</table></body></html>')
open('ext.html','w').write('\n'.join(h))
print(nold,nnew)
for s in S: print(s['std'].split()[0],len(s['new']),end='; ')
