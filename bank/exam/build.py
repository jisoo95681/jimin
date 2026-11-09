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
            qq.append(dict(q=q['q'],options=new,answer=t,why=q['why']))
        out.append(dict(topic=v['topic'],body=v['body'],questions=qq))
    print(setid,len(qs),key,collections.Counter(key))
    return dict(id=setid,title=title,kind="practice",minutes=132,desc="",vignettes=out)
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
sets=[]
for k,st_ in enumerate(MIX['sets']):
    vs=[dict(ALLV[tuple(x)]) for x in st_['vignettes']]
    vs.insert(st_['ethics_pos'],ethics_vignette(st_['ethics'],st_['ethics_kind']))
    st=build(vs,f'pr{k+1}',f'Practice set {k+1}',1+500*k); st['desc']='Mixed topics from the key notes, with 4 Ethics questions'; sets.append(st)
import os
for mf in ["mock7","mock8"]:
    p=f"/home/user/jimin/bank/exam/{mf}.json"
    if os.path.exists(p): sets.append(json.load(open(p)))
for st_ in sets: st_['rev']=st_.get('rev',2)
js="// Exam section data: practice sets built from the notebook key notes (re-skinned vignettes), later mocks.\n// answer = index of the correct option (0 = A). Built by /tmp/gen/exam/build.py.\nconst EXAM_SETS = "+json.dumps(sets,ensure_ascii=False,indent=1)+";\n"
open('/home/user/jimin/exam.js','w').write(js)
json.dump(sets,open('/home/user/jimin/bank/exam/practice_sets.json','w'),ensure_ascii=False,indent=1)
