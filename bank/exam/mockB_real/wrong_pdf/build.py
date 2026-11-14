import json,re,html as _h,runpy,sys
from collections import defaultdict
esc=_h.escape
exec(open('/tmp/gen/m13w/helpers_pq3.py').read())
css=runpy.run_path('/tmp/gen/m4q/build_m45.py')['css']
exec(open('/tmp/gen/m13w/css_add.py').read())
exec(open('/tmp/gen/mb/data.py').read())
D=json.load(open('/home/user/jimin/bank/exam/mockB_real/mockB.json'))['sets']
ANS={1:"BABCCABACCBBBCAABACCACBCBBBACCCBAAAABCACBABB",2:"AAAACBCBABCBBCBBCCCACBCACCCCCABABBCAAABBACCC"}
SUBJ={'Corp':'Corp','FSA':'FSA','PM':'PM','Equity':'Equity','FI':'FI','Alt':'Alt','Quant':'Quant','Ethics':'Ethics','Econ':'Econ','Deriv':'Deriv'}
CL=lambda t: re.sub(r'^[ABC]\. (Correct|Incorrect)\.? ?','',t)
def pick(body,items):
    L=body.split('\n'); idx=[]
    for it in items:
        if it.startswith('@'):
            i=next((k for k,l in enumerate(L) if l.startswith(it[1:])),None); assert i is not None,it
            idx.append(i); j=i+1
            while j<len(L) and (' | ' in L[j] or L[j].startswith('# ')): idx.append(j); j+=1
            if j<len(L) and L[j].startswith('Note:'): idx.append(j)
        else:
            i=next((k for k,l in enumerate(L) if it in l),None); assert i is not None,it
            idx.append(i)
            if L[i].startswith('Exhibit') or L[i].startswith('Note: Exhibit'): pass
    out=[]
    for i in sorted(set(idx)): out.append(L[i]); out.append('')
    return out
FAIL=[]
def build(p):
    S=D[p-1]; u=ANS[p]; flat={};n=0
    for v in S['vignettes']:
        for q in v['questions']:
            n+=1; flat[n]=dict(v=v,q=q,key='ABC'[q['answer']])
    wrong=[k for k in flat if u[k-1]!=flat[k]['key']]
    assert set(wrong)==set(k for (pp,k) in W if pp==p),(p,sorted(wrong),sorted(k for (pp,k) in W if pp==p))
    cards=[]
    for k in wrong:
        x=flat[k]; dd=W[(p,k)]; q=x['q']; me='ABC'.index(u[k-1]); an=q['answer']
        lines=pick(x['v']['body'],dd['sel']); sel_txt='\n'.join(lines)
        for t in dd['trig']:
            if not (t in sel_txt or t in q['q']): FAIL.append((p,k,t))
        vh=vig_html(lines)
        wl=[l for l in q['why'].split('\n')]
        rows="".join(f"<tr class='{'right' if i==an else ('mine' if i==me else '')}'><td class='l'>{'ABC'[i]}</td><td class='v'>{esc(o)}</td><td class='t'>{'✓ Correct' if i==an else ('✗ Your pick' if i==me else '')}</td><td>{esc(CL(wl[i]))}</td></tr>" for i,o in enumerate(q['options']))
        trig="<br>".join('“'+esc(t)+'”' for t in dd['trig'])
        cards.append(f"""<section class='q'><div class='qhead'><span class='qn'>Mock B · Paper {p} · Q{k}</span><div class='rt'><span class='res'>You <b class='x'>{'ABC'[me]}</b> · Answer <b class='ok'>{'ABC'[an]}</b></span><span class='subj'>{SUBJ[x['v']['topic']]}</span></div></div>
<h4>Vignette (relevant part, unedited)</h4><div class='vig'>{vh}</div><p class='ask'><b>Question {k}.</b> {esc(q['q'])}</p>
<h4>Options</h4><table class='opts'>{rows}</table>
<div class='trigger'><b>Trigger</b> {trig}<div class='rule'>Rule next time: {esc(dd['rule'])}</div></div>
<div class='formula'><b>Key line:</b> {esc(dd['formula'])}</div></section>""")
    ts=defaultdict(lambda:[0,0])
    for k,x in flat.items(): a=ts[x['v']['topic']]; a[1]+=1; a[0]+=(u[k-1]==x['key'])
    tot=sum(a[0] for a in ts.values())
    trows="".join(f"<tr><td>{t}</td><td>{a}/{b}</td><td>{a/b*100:.0f}%</td></tr>" for t,(a,b) in sorted(ts.items(),key=lambda kv:kv[1][0]/kv[1][1]))
    glance="".join(f"<tr><td>Q{k}</td><td>{flat[k]['v']['topic']}</td><td>{u[k-1]}</td><td>{flat[k]['key']}</td></tr>" for k in wrong)
    html=f"""<!doctype html><html><head><meta charset='utf-8'><title>Mock B Paper {p} wrong-answer notes</title>{css}</head><body>
<h1>Mock B · Paper {p}: Wrong-Answer Notes</h1><p class="sub">CFA Level II · {len(wrong)} wrong answers, one per page</p>
<div class="kpis"><div class="kpi"><b>{tot} / 44</b><span>Paper {p} ({tot/44*100:.0f}%)</span></div></div>
<h3>Score by topic</h3><table class="mini"><tr><th>Topic</th><th>Score</th><th>%</th></tr>{trows}</table>
<h3>Questions at a glance</h3><table class="mini"><tr><th>Q</th><th>Topic</th><th>You</th><th>Ans</th></tr>{glance}</table>
{''.join(cards)}</body></html>"""
    open(f'/tmp/gen/mb/p{p}.html','w').write(html); print('ok',p,tot,len(wrong))
for p in (1,2): build(p)
print(FAIL)
