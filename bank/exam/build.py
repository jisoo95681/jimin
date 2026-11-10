import sys,json,random,collections
sys.path.insert(0,'/tmp/gen/exam')
import lib
def load(mod):
    lib.V.clear(); __import__(mod); return [dict(v) for v in lib.V]
import re,mix_practice
MIX=json.load(open('/home/user/jimin/bank/exam/practice_mix.json'))
ALLV=dict(mix_practice.load_all())
ETH={q['id']:q for q in json.load(open('/home/user/jimin/bank/exam/ethics_keyq.json'))}
def maxrun(k):
    m=c=1
    for a,b in zip(k,k[1:]): c=c+1 if a==b else 1; m=max(m,c)
    return m
def assign(vs,seed):
    rng=random.Random(seed); cnt=collections.Counter(); key=[]
    qs=[q for v in vs for q in v['questions']]
    order=list(range(len(qs))); rng.shuffle(order)
    res={}
    for i in order:
        q=qs[i]; cor=q['opts'][0]; wr=q['opts'][1:]; rng.shuffle(wr)
        t=min(range(3),key=lambda L:(cnt[L],rng.random())); new=wr[:]; new.insert(t,cor); res[i]=(new,t); cnt[t]+=1
    return qs,res
def build(vs,setid,title,off):
    for sd in range(off,off+2000):
        qs,res=assign(vs,sd); key=''.join('ABC'[res[i][1]] for i in range(len(qs)))
        if maxrun(key)<=3: break
    i=0; out=[]
    for v in vs:
        qq=[]
        for q in v['questions']:
            new,t=res[i]; i+=1
            assert len(set(new))==3, new
            qq.append(dict(q=q['q'],options=new,answer=t,why=q['why'],**({'hint':q['hint']} if 'hint' in q else {})))
        out.append(dict(topic=v['topic'],body=v['body'],questions=qq))
    print(setid,len(qs),key,collections.Counter(key))
    return dict(id=setid,title=title,kind="practice",minutes=144,desc="",vignettes=out)
def fig_body(html):
    out=[]
    inner=re.sub(r'<summary>.*?</summary>','',html,flags=re.S)
    for blk in re.findall(r'<p>(.*?)</p>|<table.*?</table>',inner,flags=re.S):
        pass
    for m in re.finditer(r'<p>(.*?)</p>|(<table.*?</table>)',inner,flags=re.S):
        if m.group(1) is not None:
            t=re.sub(r'<[^>]+>','',m.group(1)).strip()
            if t: out.append(t)
        else:
            rows=[[re.sub(r'<[^>]+>','',c).strip() for c in re.findall(r'<t[dh][^>]*>(.*?)</t[dh]>',r,flags=re.S)] for r in re.findall(r'<tr.*?</tr>',m.group(2),flags=re.S)]
            out.append('\n'.join(('# ' if i==0 and mix_practice_hdr(r) else '')+' | '.join(r) for i,r in enumerate(rows)))
    import html as H
    return H.unescape('\n\n'.join(out))
def mix_practice_hdr(cells):
    return not any(re.search(r'\d',c) for c in cells[1:])
def ethics_vignette(ids,kind):
    qs=[]
    for i in ids:
        q=ETH[i]; o=[q['o'][q['a']]]+[x for k,x in enumerate(q['o']) if k!=q['a']]
        qs.append(dict(q=q['q'],opts=o,why=q['why'],fixed=False))
    body=fig_body(ETH[ids[0]]['fig']).replace('listed in Question 4.','listed in the last question of this vignette.') if kind=='vig' else "Ethics: Standards of Professional Conduct\nFour independent questions. Each one can be answered on its own."
    return dict(topic="Ethical and Professional Standards",body=body,questions=qs)
import os
PREV=json.load(open('/home/user/jimin/bank/exam/practice_rev.json')) if os.path.exists('/home/user/jimin/bank/exam/practice_rev.json') else {}
sets=[]
for k,st_ in enumerate(MIX['sets']):
    vs=[dict(ALLV[tuple(x)]) for x in st_['vignettes']]
    vs.insert(st_['ethics_pos'],ethics_vignette(st_['ethics'],st_['ethics_kind']))
    st=build(vs,f'pq{k+1}',f'Practice set {k+1}',1+500*k)
    rv=PREV.get(f'pq{k+1}')
    if rv: st['rev']=3; st['resetHl']=rv
    st['desc']='Mixed topics from the key notes, with 4 Ethics questions (48 questions, 2 h 24 min)'; sets.append(st)
# ---- Practice set 7 (10 Nov): main-table relationships + theory + earlier wrong theory questions (spec_g.py) + 4 Ethics questions ----
import os,random
def make_pq7():
    p7='/home/user/jimin/bank/exam/practice7_mix.json'
    units=[]
    figs=collections.OrderedDict(); stand=[]
    for q in ETH.values():
        (figs.setdefault(q['fig'],[]) if q['fig'] else stand).append(q)
    used=set(json.load(open('/home/user/jimin/bank/exam/ethics_used.json'))['used_in_practice'])
    if os.path.exists(p7): return json.load(open(p7))
    R=random.SystemRandom()
    st=stand[:]; R.shuffle(st)
    cand=[('vig',v) for v in figs.values() if len(v)==4]+[('std',st[i:i+4]) for i in range(0,len(st)-3,4)]
    cand=[(k,qs) for k,qs in cand if not any(q['id'] in used for q in qs)]
    kind,qs=R.choice(cand)
    order=list(range(12)); R.shuffle(order)
    # topic order of spec_g: 0 Quant,1 Quant,2 Econ,3 Econ,4 FSA,5 FSA,6 FI,7 FI,8 FI,9 Deriv,10 PM,11 Equity: shuffle until no two neighbours share a topic
    top=['Q','Q','E','E','F','F','I','I','I','D','P','V']
    for _ in range(5000):
        R.shuffle(order)
        if all(top[a]!=top[b] for a,b in zip(order,order[1:])): break
    m=dict(order=order,ethics_pos=R.randrange(len(order)+1),ethics_kind=kind,ethics=[q['id'] for q in qs])
    json.dump(m,open(p7,'w')); return m
M7=make_pq7()
v7=load('spec_g'); v7=[v7[i] for i in M7['order']]
v7.insert(M7['ethics_pos'],ethics_vignette(M7['ethics'],M7['ethics_kind']))
st7=build(v7,'pq7','Practice set 7',7000)
st7['desc']='Relationships from the main tables, theory questions and earlier mistakes (48 questions, 2 h 24 min)'
sets.append(st7)
HINTS7={}
_n=0
for v in st7['vignettes']:
    for q in v['questions']:
        _n+=1
        h=q.pop('hint',None)
        if h:
            for ph in h['hl']:
                if ph.startswith('@row:'): continue
                assert ph in v['body'] or ph in q['q'],(st7['id'],_n,ph)
            HINTS7[f'pq7:{_n}']=h
HP='/home/user/jimin/bank/exam/hints.json'
HH=json.load(open(HP)) if os.path.exists(HP) else {}
HH.update(HINTS7); json.dump(HH,open(HP,'w'),ensure_ascii=False,indent=1)
open('/home/user/jimin/exam_hints.js','w').write('// Trigger phrases for the exam review screen, keyed "setId:questionNumber". hl = exact words in the vignette or question ("@row:Label" shades a table row); rule = what to apply next time.\n// Source: bank/exam/hints.json (generated by bank/exam/build.py; edit hints in spec files or hints.json).\nconst EXAM_HINTS = '+json.dumps(HH,ensure_ascii=False,indent=1)+';\n')
import os
for mf in ["mock7","mock8"]:
    p=f"/home/user/jimin/bank/exam/{mf}.json"
    if os.path.exists(p): sets.append(json.load(open(p)))
# ---- Mock 9 (10 Nov): 10 bank vignettes (mock9.py -> mock9_core.json) + 1 Ethics unit from the key notes (random, not used before) ----
def make_m9():
    p='/home/user/jimin/bank/exam/mock9_ethics.json'
    if os.path.exists(p): return json.load(open(p))
    R=random.SystemRandom(); figs=collections.OrderedDict(); stand=[]
    for q in ETH.values(): (figs.setdefault(q['fig'],[]) if q['fig'] else stand).append(q)
    used=set(json.load(open('/home/user/jimin/bank/exam/ethics_used.json'))['used_in_practice'])
    st=stand[:]; R.shuffle(st)
    cand=[('vig',v) for v in figs.values() if len(v)==4]+[('std',st[i:i+4]) for i in range(0,len(st)-3,4)]
    cand=[(k,qs) for k,qs in cand if not any(q['id'] in used for q in qs)]
    kind,qs=R.choice(cand)
    m=dict(pos=R.randrange(1,10),kind=kind,ethics=[q['id'] for q in qs]); json.dump(m,open(p,'w')); return m
M9=make_m9()
_u=json.load(open('/home/user/jimin/bank/exam/ethics_used.json'))
_u.setdefault('used_in_mock9',M9['ethics']); json.dump(_u,open('/home/user/jimin/bank/exam/ethics_used.json','w'),indent=1)
core=json.load(open('/home/user/jimin/bank/exam/mock9_core.json'))
ev=ethics_vignette(M9['ethics'],M9['kind'])
vl=core['vignettes']
before=''.join('ABC'[q['answer']] for v in vl[:M9['pos']] for q in v['questions']); after=''.join('ABC'[q['answer']] for v in vl[M9['pos']:] for q in v['questions'])
for sd in range(100000):
    r=random.Random(sd); ans=[r.randrange(3) for _ in range(4)]
    k=before+''.join('ABC'[a] for a in ans)+after; c=collections.Counter(k)
    if maxrun(k)<=3 and min(c.values())>=11 and max(c.values())<=17: break
else: raise SystemExit('no ethics order')
eq=[]
for q,t in zip(ev['questions'],ans):
    o=q['opts'][1:]; random.Random(sd).shuffle(o); o.insert(t,q['opts'][0]); eq.append(dict(q=q['q'],options=o,answer=t,why=q['why']))
evx=dict(topic=ev['topic'],body=ev['body'],questions=eq)
core['vignettes']=vl[:M9['pos']]+[evx]+vl[M9['pos']:]
HM9={}; n9=0
for v in core['vignettes']:
    for q in v['questions']:
        n9+=1; h=q.pop('hint',None)
        if h:
            for ph in h['hl']:
                if ph.startswith('@row:'): continue
                assert ph in v['body'] or ph in q['q'],('mock9',n9,ph)
            HM9[f'mock9:{n9}']=h
assert n9==44
HH.update(HM9); json.dump(HH,open(HP,'w'),ensure_ascii=False,indent=1)
open('/home/user/jimin/exam_hints.js','w').write('// Trigger phrases for the exam review screen, keyed "setId:questionNumber". hl = exact words in the vignette or question ("@row:Label" shades a table row); rule = what to apply next time.\n// Source: bank/exam/hints.json (generated by bank/exam/build.py; edit hints in spec files or hints.json).\nconst EXAM_HINTS = '+json.dumps(HH,ensure_ascii=False,indent=1)+';\n')
sets.append(core); print('mock9',''.join('ABC'[q['answer']] for v in core['vignettes'] for q in v['questions']))
for st_ in sets: st_['rev']=st_.get('rev',2)
js="// Exam section data: practice sets built from the notebook key notes (re-skinned vignettes), later mocks.\n// answer = index of the correct option (0 = A). Built by /tmp/gen/exam/build.py.\nconst EXAM_SETS = "+json.dumps(sets,ensure_ascii=False,indent=1)+";\n"
open('/home/user/jimin/exam.js','w').write(js)
json.dump(sets,open('/home/user/jimin/bank/exam/practice_sets.json','w'),ensure_ascii=False,indent=1)
