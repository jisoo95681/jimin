import sys,json,random,collections,copy
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
    if st['id']=='pq3': st['rev']=4; st['resetHl']=sorted(set(rv)|{1})  # 11 Nov: Navas roll-down wording
    st['desc']='Mixed topics from the key notes, with 4 Ethics questions (48 questions, 2 h 24 min)'; sets.append(st)
# ---- 11 Nov (user request): the Mock 8 credit-spread vignette (Marangoni / Norvalle, Q9-12) is appended at the END of practice set 3 (pq3 Q49-52; saved progress is keyed by question number, so nothing is reordered) ----
_m8=json.load(open('/home/user/jimin/bank/exam/mock8.json'))
_x=[v for v in _m8['vignettes'] if 'Norvalle' in v['body']][0]
_pq3=[s_ for s_ in sets if s_['id']=='pq3'][0]
from pq3_reskin import build_vignette as _bv
_rv,_=_bv()   # 11 Nov: re-skinned (names, numbers, tree), the original Mock 8 vignette had already been seen
_pq3['vignettes'].append(_rv)
_pq3['rev']=5; _pq3['resetHl']=sorted(set(_pq3.get('resetHl',[]))|{19}); _pq3['resetAns']=[49,50,51,52]
_pq3['minutes']=156
_pq3['desc']=_pq3['desc'].replace('48 questions, 2 h 24 min','52 questions, 2 h 36 min') if '48 questions' in _pq3['desc'] else _pq3['desc']
# ---- 11 Nov (user request): Q49-54 appended to practice set 4: VIM re-skin (residual income) + an unsolved Parker vignette ----
import pq4_extra as _x4
_pq4=[s_ for s_ in sets if s_['id']=='pq4'][0]
_pq4['vignettes'].append(_x4.vim()); _pq4['vignettes'].append(_x4.parker())
_pq4['minutes']=162
_pq4['desc']=_pq4['desc'].replace('48 questions, 2 h 24 min','54 questions, 2 h 42 min') if '48 questions' in _pq4['desc'] else _pq4['desc']
# ---- 11 Nov (user request): Q49-50 appended to practice set 5: American call and American put on a two-period binomial tree ----
import pq5_extra as _x5
_pq5=[s_ for s_ in sets if s_['id']=='pq5'][0]
for _v in _x5.vigs(): _pq5['vignettes'].append(_v)
_pq5['minutes']=162
_pq5['desc']=_pq5['desc'].replace('48 questions, 2 h 24 min','54 questions, 2 h 42 min') if '48 questions' in _pq5['desc'] else _pq5['desc']
# ---- 11 Nov (user request): Q49-52 appended to practice set 6: short vignettes on normalized earnings (private company valuation) ----
import pq6_extra as _x6
_pq6=[s_ for s_ in sets if s_['id']=='pq6'][0]
for _v in _x6.vigs(): _pq6['vignettes'].append(_v)
_pq6['minutes']=156
_pq6['desc']=_pq6['desc'].replace('48 questions, 2 h 24 min','52 questions, 2 h 36 min') if '48 questions' in _pq6['desc'] else _pq6['desc']
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
# ---- Practice set 8 (11 Nov): the wrong questions of Mocks 5-9 as short key-point vignettes (spec_h.py), no Ethics ----
V8_ALL=load('spec_h')
def make_pq8():
    p8='/home/user/jimin/bank/exam/practice8_mix.json'
    if os.path.exists(p8): return json.load(open(p8))
    R=random.SystemRandom(); v=V8_ALL; order=list(range(len(v)))
    for _ in range(5000):
        R.shuffle(order)
        if all(v[a_]['topic']!=v[b_]['topic'] for a_,b_ in zip(order,order[1:])): break
    m=dict(order=order); json.dump(m,open(p8,'w')); return m
M8P=make_pq8()
v8=[V8_ALL[i] for i in M8P['order']]
st8=build(v8,'pq8','Practice set 8',8000)
st8['minutes']=90
st8['desc']='Wrong questions of Mocks 5-9 as short key-point vignettes, no calculations (%d questions, 1 h 30 min)'%sum(len(x['questions']) for x in st8['vignettes'])
sets.append(st8)
HINTS8={}
_n8=0
for v in st8['vignettes']:
    for q in v['questions']:
        _n8+=1
        h=q.pop('hint',None)
        if h:
            for ph in h['hl']:
                if ph.startswith('@row:'): continue
                assert ph in v['body'] or ph in q['q'],(st8['id'],_n8,ph)
            HINTS8[f'pq8:{_n8}']=h
HP='/home/user/jimin/bank/exam/hints.json'
HH=json.load(open(HP)) if os.path.exists(HP) else {}
import pq7_extra as _x7
for _v in _x7.vigs(): st7['vignettes'].append(_v)      # 11 Nov: Q49-52 (corridor, real estate cycle); hints in hints_override.O7
st7['minutes']=156
st7['desc']='Relationships from the main tables, theory questions and earlier mistakes (52 questions, 2 h 36 min)'
HH.update(HINTS7); HH.update(HINTS8); json.dump(HH,open(HP,'w'),ensure_ascii=False,indent=1)
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
# ---- Mock 10 (10 Nov): 10 bank vignettes (mock9.py -> mock10_core.json) + 1 Ethics unit from the key notes (random, not used before) ----
def make_m10():
    p='/home/user/jimin/bank/exam/mock10_ethics.json'
    if os.path.exists(p): return json.load(open(p))
    R=random.SystemRandom(); figs=collections.OrderedDict(); stand=[]
    for q in ETH.values(): (figs.setdefault(q['fig'],[]) if q['fig'] else stand).append(q)
    _eu=json.load(open('/home/user/jimin/bank/exam/ethics_used.json')); used=set(_eu['used_in_practice'])|set(_eu.get('used_in_mock9',[]))
    st=stand[:]; R.shuffle(st)
    cand=[('vig',v) for v in figs.values() if len(v)==4]+[('std',st[i:i+4]) for i in range(0,len(st)-3,4)]
    cand=[(k,qs) for k,qs in cand if not any(q['id'] in used for q in qs)]
    kind,qs=R.choice(cand)
    m=dict(pos=R.randrange(1,10),kind=kind,ethics=[q['id'] for q in qs]); json.dump(m,open(p,'w')); return m
M10=make_m10()
_u=json.load(open('/home/user/jimin/bank/exam/ethics_used.json'))
_u.setdefault('used_in_mock10',M10['ethics']); json.dump(_u,open('/home/user/jimin/bank/exam/ethics_used.json','w'),indent=1)
core=json.load(open('/home/user/jimin/bank/exam/mock10_core.json'))
ev=ethics_vignette(M10['ethics'],M10['kind'])
vl=core['vignettes']
before=''.join('ABC'[q['answer']] for v in vl[:M10['pos']] for q in v['questions']); after=''.join('ABC'[q['answer']] for v in vl[M10['pos']:] for q in v['questions'])
for sd in range(100000):
    r=random.Random(sd); ans=[r.randrange(3) for _ in range(4)]
    k=before+''.join('ABC'[a] for a in ans)+after; c=collections.Counter(k)
    if maxrun(k)<=3 and min(c.values())>=11 and max(c.values())<=17: break
else: raise SystemExit('no ethics order')
eq=[]
for q,t in zip(ev['questions'],ans):
    o=q['opts'][1:]; random.Random(sd).shuffle(o); o.insert(t,q['opts'][0]); eq.append(dict(q=q['q'],options=o,answer=t,why=q['why']))
evx=dict(topic=ev['topic'],body=ev['body'],questions=eq)
core['vignettes']=vl[:M10['pos']]+[evx]+vl[M10['pos']:]
HM10={}; n10=0
for v in core['vignettes']:
    for q in v['questions']:
        n10+=1; h=q.pop('hint',None)
        if h:
            for ph in h['hl']:
                if ph.startswith('@row:'): continue
                assert ph in v['body'] or ph in q['q'],('mock10',n10,ph)
            HM10[f'mock10:{n10}']=h
assert n10==44
HH.update(HM10); json.dump(HH,open(HP,'w'),ensure_ascii=False,indent=1)
open('/home/user/jimin/exam_hints.js','w').write('// Trigger phrases for the exam review screen, keyed "setId:questionNumber". hl = exact words in the vignette or question ("@row:Label" shades a table row); rule = what to apply next time.\n// Source: bank/exam/hints.json (generated by bank/exam/build.py; edit hints in spec files or hints.json).\nconst EXAM_HINTS = '+json.dumps(HH,ensure_ascii=False,indent=1)+';\n')
sets.append(core); print('mock10',''.join('ABC'[q['answer']] for v in core['vignettes'] for q in v['questions']))
# ---- Mock 11 + Mock 12 (one exam, 12 Nov): core vignettes from mock1112.py (mock11_core.json, mock12_core.json) + 3 Ethics units (2 in Mock 11, 1 in Mock 12) from the key notes ----
def make_m1112():
    p='/home/user/jimin/bank/exam/mock1112_ethics.json'
    if os.path.exists(p): return json.load(open(p))
    R=random.SystemRandom(); figs=collections.OrderedDict()
    for q in ETH.values():
        if q['fig']: figs.setdefault(q['fig'],[]).append(q)
    _eu=json.load(open('/home/user/jimin/bank/exam/ethics_used.json')); used=set()
    for _k,_v in _eu.items():
        if isinstance(_v,list): used.update(_v)
    cand=[v for v in figs.values() if len(v)==4 and not any(q['id'] in used for q in v)]
    pick=R.sample(cand,3)
    m=dict(m11=[[q['id'] for q in u] for u in pick[:2]],m12=[[q['id'] for q in pick[2]]],pos11=sorted(R.sample(range(1,9),2)),pos12=R.randrange(1,10)); json.dump(m,open(p,'w')); return m
M1112=make_m1112()
_u=json.load(open('/home/user/jimin/bank/exam/ethics_used.json'))
_u.setdefault('used_in_mock11',[i for u in M1112['m11'] for i in u]); _u.setdefault('used_in_mock12',[i for u in M1112['m12'] for i in u]); json.dump(_u,open('/home/user/jimin/bank/exam/ethics_used.json','w'),indent=1)
def make_m1112_set(setid,n,title,units,positions,desc):
    core=json.load(open(f'/home/user/jimin/bank/exam/mock{n}_core.json')); vl=core['vignettes']
    evs=[ethics_vignette(u,'vig') for u in units]
    for sd in range(200000):
        r=random.Random(sd); ans=[[r.randrange(3) for _ in range(4)] for _ in evs]
        vv=list(vl)
        for pos,e,a in sorted(zip(positions,evs,ans),key=lambda t:t[0],reverse=True): vv.insert(pos,dict(questions=[dict(answer=x) for x in a]))
        k=''.join('ABC'[q['answer']] for v in vv for q in v['questions']); c=collections.Counter(k)
        if maxrun(k)<=3 and all(12<=c[x]<=17 for x in 'ABC'): break
    else: raise SystemExit('no ethics order '+setid)
    out=list(vl); ins=sorted(zip(positions,evs,ans),key=lambda t:t[0],reverse=True)
    for pos,ev,a in ins:
        eq=[]
        for q,t in zip(ev['questions'],a):
            o=q['opts'][1:]; random.Random(sd).shuffle(o); o.insert(t,q['opts'][0]); eq.append(dict(q=q['q'],options=o,answer=t,why=q['why']))
        out.insert(pos,dict(topic=ev['topic'],body=ev['body'],questions=eq))
    hm={}; nq=0
    for v in out:
        for q in v['questions']:
            nq+=1; h=q.pop('hint',None)
            if h:
                for ph in h['hl']:
                    if ph.startswith('@row:'): continue
                    assert ph in v['body'] or ph in q['q'],(setid,nq,ph)
                hm[f'{setid}:{nq}']=h
    assert nq==44,(setid,nq)
    HH.update(hm)
    st=dict(id=setid,rev=2,resetHl=[],title=title,kind="mock",minutes=132,desc=desc,vignettes=out)
    print(setid,''.join('ABC'[q['answer']] for v in out for q in v['questions']),collections.Counter(v['topic'] for v in out))
    return st
sets.append(make_m1112_set('mock11',11,'Mock 11',M1112['m11'],M1112['pos11'],'First half of the 88-question exam (Mock 11 + Mock 12, taken back to back): 11 vignettes, 44 questions, 2 h 12 min'))
sets.append(make_m1112_set('mock12',12,'Mock 12',M1112['m12'],[M1112['pos12']],'Second half of the 88-question exam (Mock 11 + Mock 12): 11 vignettes, 44 questions, 2 h 12 min'))
# ---- Mock 13 (12 Nov): questions the user got wrong in Mocks 1-5, names and numbers changed (built in /tmp/gen/m13, copied to bank/exam/mock13_src/) ----
_d=json.load(open('/home/user/jimin/bank/exam/mock13.json')); _st=_d['set']; _n=0
for _v in _st['vignettes']:
    for _q in _v['questions']:
        _n+=1; _h=_d['hints'][f'mock13:{_n}']
        for _ph in _h['hl']:
            if _ph.startswith('@row:'): continue
            assert _ph in _v['body'] or _ph in _q['q'],('mock13',_n,_ph)
        assert len(set(_q['options']))==3 and 0<=_q['answer']<3,('mock13',_n)
HH.update(_d['hints']); sets.append(_st); print('mock13',_n,_d['key'])
# ---- Mock 13 (12 Nov): questions the user got wrong in Mocks 1-5, names and numbers changed (built in /tmp/gen/m13, copied to bank/exam/mock14_src/) ----
_d=json.load(open('/home/user/jimin/bank/exam/mock14.json')); _st=_d['set']; _n=0
for _v in _st['vignettes']:
    for _q in _v['questions']:
        _n+=1; _h=_d['hints'][f'mock14:{_n}']
        for _ph in _h['hl']:
            if _ph.startswith('@row:'): continue
            assert _ph in _v['body'] or _ph in _q['q'],('mock14',_n,_ph)
        assert len(set(_q['options']))==3 and 0<=_q['answer']<3,('mock14',_n)
HH.update(_d['hints']); sets.append(_st); print('mock14',_n,_d['key'])
# ---- Mock 15 + Mock 16 (13 Nov): never-used real vignettes (OS random draw) + 2 re-skins of missed Econ vignettes, names and numbers changed (bank/exam/mock1516_src/, assemble.py); Ethics from the key notes ----
for _mid in ('mock15','mock16'):
    _d=json.load(open(f'/home/user/jimin/bank/exam/{_mid}.json')); _st=_d['set']; _n=0
    for _v in _st['vignettes']:
        for _q in _v['questions']:
            _n+=1; _h=_d['hints'].get(f'{_mid}:{_n}')
            if _h:
                for _ph in _h['hl']:
                    if _ph.startswith('@row:'): continue
                    assert _ph in _v['body'] or _ph in _q['q'],(_mid,_n,_ph)
            assert len(set(_q['options']))==3 and 0<=_q['answer']<3,(_mid,_n)
    HH.update(_d['hints']); sets.append(_st); print(_mid,_n,_d['key'])
# ---- Mock 17 (13 Nov): questions the user got wrong in Mocks 6-10, names and numbers changed (bank/exam/mock17_src/) ----
_d=json.load(open('/home/user/jimin/bank/exam/mock17.json')); _st=_d['set']; _n=0
for _v in _st['vignettes']:
    for _q in _v['questions']:
        _n+=1; _h=_d['hints'][f'mock17:{_n}']
        for _ph in _h['hl']:
            if _ph.startswith('@row:'): continue
            assert _ph in _v['body'] or _ph in _q['q'],('mock17',_n,_ph)
        assert len(set(_q['options']))==3 and 0<=_q['answer']<3,('mock17',_n)
HH.update(_d['hints']); sets.append(_st); print('mock17',_n,_d['key'])
# ---- Real CFA Institute Mock Paper 2 (13 Nov): verbatim, no hints (auto-shading) ----
_d=json.load(open('/home/user/jimin/bank/exam/mockpaper2.json')); _st=_d['set']; _n=0
for _v in _st['vignettes']:
    for _q in _v['questions']:
        _n+=1; assert len(set(_q['options']))==3 and 0<=_q['answer']<3,('mockp2',_n)
sets.append(_st); print('mockp2',_n,_d['key'])
# ---- Ethics sessions eth1-eth12 (13 Nov): all 276 key-notes Ethics questions as exam sessions (built by ethics_sets.py); no hand-written hints (the app shades matching lines automatically) ----
_d=json.load(open('/home/user/jimin/bank/exam/ethics_sets.json')); _n=0
for _st in _d['sets']:
    for _v in _st['vignettes']:
        for _q in _v['questions']:
            _n+=1; assert len(set(_q['options']))==3 and 0<=_q['answer']<3,(_st['id'],_q['q'][:40])
    sets.append(_st)
print('ethics sessions',len(_d['sets']),_n)
# ---- Incorrect-question sets rq1, rq2 (12 Nov): built by retry_sets.py (wrong questions of Mocks 6-10 and Practice sets 1-4, relevant vignette parts only) ----
for _sid in ('rq1','rq2'):
    _d=json.load(open(f'/home/user/jimin/bank/exam/{_sid}.json')); _st=_d['set']; _n=0
    for _v in _st['vignettes']:
        for _q in _v['questions']:
            _n+=1; _h=_d['hints'][f'{_sid}:{_n}']
            for _ph in _h['hl']:
                if _ph.startswith('@row:'): continue
                assert _ph in _v['body'] or _ph in _q['q'],(_sid,_n,_ph)
            assert len(set(_q['options']))==3 and 0<=_q['answer']<3,(_sid,_n)
    HH.update(_d['hints']); sets.append(_st); print(_sid,_n)
# ---- hint overrides (11 Nov): only decisive words/rows are highlighted; the rule text of the old hint is kept ----
import importlib.util as _iu
_sp=_iu.spec_from_file_location('hints_override','/home/user/jimin/bank/exam/hints_override.py'); _hm=_iu.module_from_spec(_sp); _sp.loader.exec_module(_hm)
_txt={}
for _s in sets:
    if _s['id'] in ('mock9','mock10','pq3','pq4','pq5','pq6','pq7'):
        _k=0
        for _v in _s['vignettes']:
            for _q in _v['questions']:
                _k+=1; _txt[f"{_s['id']}:{_k}"]=(_v['body'],_q['q'])
for _key,_hl in _hm.O.items():
    _b,_qq=_txt[_key]
    for _ph in _hl:
        if _ph.startswith('@row:'): assert any(l.lstrip('# ').split(' | ')[0].strip().lower().startswith(_ph[5:].lower()) for l in _b.split('\n')),(_key,_ph)
        else: assert _ph in _b or _ph in _qq,(_key,_ph)
    HH[_key]=dict(hl=_hl,rule=HH[_key]['rule'])
for _key,(_hl,_rule) in _hm.O3.items():
    _b,_qq=_txt[_key]
    for _ph in _hl:
        if _ph.startswith('@row:'): assert any(l.lstrip('# ').split(' | ')[0].strip().lower().startswith(_ph[5:].lower()) for l in _b.split('\n')),(_key,_ph)
        else: assert _ph in _b or _ph in _qq,(_key,_ph)
    HH[_key]=dict(hl=_hl,rule=_rule)
for _key,(_hl,_rule) in _hm.O5.items():
    _b,_qq=_txt[_key]
    for _ph in _hl: assert _ph in _b or _ph in _qq,(_key,_ph)
    HH[_key]=dict(hl=_hl,rule=_rule)
for _key,(_hl,_rule) in _hm.O7.items():
    _b,_qq=_txt[_key]
    for _ph in _hl:
        if _ph.startswith('@row:'): assert any(l.lstrip('# ').split(' | ')[0].strip().lower().startswith(_ph[5:].lower()) for l in _b.split('\n')),(_key,_ph)
        else: assert _ph in _b or _ph in _qq,(_key,_ph)
    HH[_key]=dict(hl=_hl,rule=_rule)
for _key,(_hl,_rule) in _hm.O6.items():
    _b,_qq=_txt[_key]
    for _ph in _hl: assert _ph in _b or _ph in _qq,(_key,_ph)
    HH[_key]=dict(hl=_hl,rule=_rule)
for _key,(_hl,_rule) in _hm.O4.items():
    _b,_qq=_txt[_key]
    for _ph in _hl: assert _ph in _b or _ph in _qq,(_key,_ph)
    HH[_key]=dict(hl=_hl,rule=_rule)
json.dump(HH,open(HP,'w'),ensure_ascii=False,indent=1)
open('/home/user/jimin/exam_hints.js','w').write('// Trigger phrases for the exam review screen, keyed "setId:questionNumber". hl = exact words in the vignette or question ("@row:Label" shades a table row); rule = what to apply next time.\n// Source: bank/exam/hints.json (generated by bank/exam/build.py; edit hints in spec files, hints_override.py or hints.json).\nconst EXAM_HINTS = '+json.dumps(HH,ensure_ascii=False,indent=1)+';\n')
for st_ in sets: st_['rev']=st_.get('rev',2)
js="// Exam section data: practice sets built from the notebook key notes (re-skinned vignettes), later mocks.\n// answer = index of the correct option (0 = A). Built by /tmp/gen/exam/build.py.\nconst EXAM_SETS = "+json.dumps(sets,ensure_ascii=False,indent=1)+";\n"
open('/home/user/jimin/exam.js','w').write(js)
json.dump(sets,open('/home/user/jimin/bank/exam/practice_sets.json','w'),ensure_ascii=False,indent=1)
