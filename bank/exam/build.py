import sys,json,random,collections
sys.path.insert(0,'/tmp/gen/exam')
import lib
def load(mod):
    lib.V.clear(); __import__(mod); return [dict(v) for v in lib.V]
SPECS=[('spec_a','Derivatives, Quantitative Methods'),('spec_b','Quantitative Methods (ML, Big Data), Fixed Income'),('spec_c','Fixed Income (term structure, embedded options, CDS), Credit Analysis Models'),('spec_d','Financial Statement Analysis'),('spec_e','Portfolio Management'),('spec_f','Corporate Issuers, Equity Valuation, Economics, Alternative Investments')]
LOADED=[load(m) for m,_ in SPECS]
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
sets=[]
for k,(vs,(m,d)) in enumerate(zip(LOADED,SPECS)):
    st=build(vs,f'ps{k+1}',f'Practice set {k+1}',1+500*k); st['desc']=d; sets.append(st)
import os
for mf in ["mock7","mock8"]:
    p=f"/home/user/jimin/bank/exam/{mf}.json"
    if os.path.exists(p): sets.append(json.load(open(p)))
for st_ in sets: st_['rev']=st_.get('rev',2)
js="// Exam section data: practice sets built from the notebook key notes (re-skinned vignettes), later mocks.\n// answer = index of the correct option (0 = A). Built by /tmp/gen/exam/build.py.\nconst EXAM_SETS = "+json.dumps(sets,ensure_ascii=False,indent=1)+";\n"
open('/home/user/jimin/exam.js','w').write(js)
json.dump(sets,open('/home/user/jimin/bank/exam/practice_sets.json','w'),ensure_ascii=False,indent=1)
