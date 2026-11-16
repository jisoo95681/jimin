import json,re,html as _h,runpy
from collections import defaultdict
esc=_h.escape
exec(open('/tmp/gen/m13w/helpers_pq3.py').read())
css=runpy.run_path('/tmp/gen/m4q/build_m45.py')['css']
exec(open('/tmp/gen/m13w/css_add.py').read())
css=css.replace("</style>",".ln{margin:3px 0;line-height:1.4}.ln.calc{font-family:'DejaVu Sans Mono','Liberation Mono',monospace;font-size:8.8pt;background:#eef3f7;padding:2px 8px;border-left:3px solid #1f4e79}.ln.fml{font-weight:700;color:#1f4e79;background:#fff7e0;padding:2px 8px;border-left:3px solid #d9a400}.expl{margin-top:8px}.expl h4{margin:0 0 4px}</style>")
import sys
P=int(sys.argv[1]) if len(sys.argv)>1 else 1
G=sys.argv[2] if len(sys.argv)>2 else 'C'
exec(open(('data.py' if P==1 else 'data2.py') if G=='C' else f'data_{G}{P}.py').read())
D=json.load(open(f'/home/user/jimin/bank/exam/mock{G}_real/mock{G}.json'))['sets'][P-1]
U={("C",1):"CCABABAACACBCBCACBCCCAABBBCBCCCBCABCBBCCCCBA",("C",2):"BABBCBBCBBABCCACCBACBBCCCCBACABBBCCCBAABAACA",("D",1):"CABCBABBABBCABBCBCBBACCCCAABAACBABBCABCBABBA",("D",2):"CCCBBCACABACBBBABAACBABCAAAAAABBCACCABBACACA",("E",1):"AACBCABACCCCBAACAAAABBBCBBAABACABBABCAACAAAB",("E",2):"CCBAABCBCAACABBAABACCBCCBABABBACABCABCBAACCC"}[(G,P)]
def pick(body,items):
    L=body.split('\n'); idx=[]
    for it in items:
        if it.startswith('@'):
            i=next((k for k,l in enumerate(L) if l.startswith(it[1:])),None); assert i is not None,it
            idx.append(i); j=i+1
            while j<len(L) and (' | ' in L[j] or L[j].startswith('# ') or (len(L[j])<70 and not L[j].endswith('.') and not L[j].startswith('Exhibit')) or L[j].startswith('Note:')):
                idx.append(j); j+=1
        else:
            i=next((k for k,l in enumerate(L) if it in l),None); assert i is not None,it
            idx.append(i)
    out=[]; S=sorted(set(idx))
    for p,i in enumerate(S):
        out.append(L[i])
        if p+1==len(S) or S[p+1]!=i+1: out.append('')
    return out
def split_why(why,n=3):
    seg={}; cur=None
    for l in why.split('\n'):
        m=re.match(r'^([ABC])\. (Correct|Incorrect)',l)
        if m: cur='ABC'.index(m.group(1)); seg[cur]=[re.sub(r'^[ABC]\. (Correct|Incorrect)\.? ?(Incorrect (because)?)?','',l).strip()]
        elif l.startswith('Correct answer') or l.startswith('Practice Topics'): continue
        elif cur is not None and l.strip(): seg[cur].append(l.strip())
    return {k:('<br>'.join(esc(x) for x in v[:1] if x)+' <i>(portal text shortened; see the steps below)</i>' if sum(len(x) for x in v)>450 else '<br>'.join(esc(x) for x in v if x)) for k,v in seg.items()}
flat={};n=0
for v in D['vignettes']:
    for q in v['questions']:
        n+=1; flat[n]=dict(v=v,q=q,key='ABC'[q['answer']])
wrong=[k for k in flat if U[k-1]!=flat[k]['key']]
EX=globals().get('EXTRA',set())
assert set(wrong)|EX==set(W),(sorted(wrong),sorted(W))
FAIL=[]; cards=[]
for k in sorted(W):
    x=flat[k]; dd=W[k]; q=x['q']; me='ABC'.index(U[k-1]); an=q['answer']
    lines=pick(x['v']['body'],dd['sel']); sel_txt='\n'.join(lines)
    for t in dd['trig']:
        if not (t in sel_txt or t in q['q']): FAIL.append((k,t))
    vh=vig_html(lines); sw=split_why(q['why'])
    rows="".join(f"<tr class='{'right' if i==an else ('mine' if i==me else '')}'><td class='l'>{'ABC'[i]}</td><td class='v'>{esc(o)}</td><td class='t'>{'✓ Correct' if i==an else ('✗ Your pick' if i==me else '')}</td><td>{sw.get(i,'')}</td></tr>" for i,o in enumerate(q['options']))
    trig="<br>".join('“'+esc(t)+'”' for t in dd['trig'])
    ex="".join(f"<div class='ln calc'>{esc(l[3:])}</div>" if l.startswith('C: ') else (f"<div class='ln fml'>{esc(l[3:])}</div>" if l.startswith('F: ') else f"<div class='ln'>{esc(l)}</div>") for l in dd['expl'])
    qtxt=re.sub(r'\s*Correct answer:\s*$','',q['q'])
    cards.append(f"""<section class='q'><div class='qhead'><span class='qn'>Mock {G} · Paper {P} · Q{k}</span><div class='rt'><span class='res'>You <b class='{"ok" if me==an else "x"}'>{'ABC'[me]}</b> · Answer <b class='ok'>{'ABC'[an]}</b>{" · extra explanation (you were right)" if me==an else ""}</span><span class='subj'>{x['v']['topic']}</span></div></div>
<h4>Vignette (relevant part, unedited)</h4><div class='vig'>{vh}</div><p class='ask'><b>Question {k}.</b> {esc(qtxt)}</p>
<h4>Options</h4><table class='opts'>{rows}</table>
<div class='trigger'><b>Trigger</b> {trig}<div class='rule'>Rule next time: {esc(dd['rule'])}</div></div>
<div class='expl'><h4>Step by step</h4>{ex}</div></section>""")
ts=defaultdict(lambda:[0,0])
for k,x in flat.items(): a=ts[x['v']['topic']]; a[1]+=1; a[0]+=(U[k-1]==x['key'])
tot=sum(a[0] for a in ts.values())
trows="".join(f"<tr><td>{t}</td><td>{a}/{b}</td><td>{a/b*100:.0f}%</td></tr>" for t,(a,b) in sorted(ts.items(),key=lambda kv:kv[1][0]/kv[1][1]))
glance="".join(f"<tr><td>Q{k}</td><td>{flat[k]['v']['topic']}</td><td>{U[k-1]}</td><td>{flat[k]['key']}{' (extra)' if k in EX else ''}</td></tr>" for k in sorted(W))
html=f"""<!doctype html><html><head><meta charset='utf-8'><title>Mock {G} Paper {P} wrong-answer notes</title>{css}</head><body>
<h1>Mock {G} · Paper {P}: Wrong-Answer Notes</h1><p class="sub">CFA Level II · {len(wrong)} wrong answers + {len(EX)} extra explanations, one per page</p>
<div class="kpis"><div class="kpi"><b>{tot} / 44</b><span>Paper {P} ({tot/44*100:.0f}%)</span></div></div>
<h3>Score by topic</h3><table class="mini"><tr><th>Topic</th><th>Score</th><th>%</th></tr>{trows}</table>
<h3>Questions at a glance</h3><table class="mini"><tr><th>Q</th><th>Topic</th><th>You</th><th>Ans</th></tr>{glance}</table>
{''.join(cards)}</body></html>"""
open(f'/tmp/gen/mc/p{G}{P}.html','w').write(html); print('ok',tot,len(wrong),FAIL)
