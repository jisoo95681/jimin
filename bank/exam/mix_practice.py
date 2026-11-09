# Practice sets 1-6, rebuilt on 9 Nov: topics mixed (no grouping by subject), 40 notebook questions + 4 Ethics questions per set.
# The arrangement is drawn once with the OS random source and saved in practice_mix.json (build.py reads it).
import json,random,re,sys,os,collections
sys.path.insert(0,'/home/user/jimin/bank/exam')
import lib
R=random.SystemRandom()
SPECS=['spec_a','spec_b','spec_c','spec_d','spec_e','spec_f']
def load_all():
    out=[]
    for si,m in enumerate(SPECS):
        lib.V.clear(); __import__(m)
        for vi,v in enumerate(lib.V): out.append(((si,vi),dict(v)))
    return out
def subset_sum(items,target,rng,tries=2000):
    # items: list of (key,size); random subset with exact sum
    for _ in range(tries):
        L=items[:]; rng.shuffle(L); pick=[]; s=0
        for k,n in L:
            if s+n<=target: pick.append(k); s+=n
            if s==target: return pick
    return None
def partition(items,bins,size,rng,tries=500):
    for _ in range(tries):
        rest=items[:]; rng.shuffle(rest); out=[]
        ok=True
        for b in range(bins):
            if b==bins-1:
                if sum(n for k,n in rest)==size: out.append([k for k,n in rest]); break
                ok=False; break
            p=subset_sum(rest,size,rng,200)
            if not p: ok=False; break
            out.append(p); ps=set(p); rest=[(k,n) for k,n in rest if k not in ps]
        if ok and len(out)==bins: return out
    return None
def ethics_units():
    d=json.load(open('/home/user/jimin/bank/exam/ethics_keyq.json'))
    figs=collections.OrderedDict(); stand=[]
    for q in d:
        (figs.setdefault(q['fig'],[]) if q['fig'] else stand).append(q)
    units=[('vig',v) for v in figs.values() if len(v)==4]
    st=stand[:]; R.shuffle(st)
    units+= [('std',st[i:i+4]) for i in range(0,len(st)-3,4)]
    return units
def make():
    allv=load_all(); size={k:len(v['questions']) for k,v in allv}; topic={k:v['topic'] for k,v in allv}
    big=[(k,size[k]) for k,_ in allv if topic[k] in ('Fixed Income','Financial Statement Analysis','Portfolio Management','Quantitative Methods')]
    drop=subset_sum(big,24,R); assert drop
    keep=[(k,size[k]) for k,_ in allv if k not in set(drop)]
    parts=partition(keep,6,40,R); assert parts
    units=ethics_units(); idx=R.sample(range(len(units)),6)
    sets=[]
    for b,p in enumerate(parts):
        for _ in range(500):
            R.shuffle(p)
            if all(topic[a]!=topic[c] for a,c in zip(p,p[1:])): break
        order=[list(k) for k in p]; pos=R.randrange(len(order)+1)
        kind,qs=units[idx[b]]
        sets.append(dict(vignettes=order,ethics_pos=pos,ethics_kind=kind,ethics=[q['id'] for q in qs]))
    json.dump(dict(dropped=[list(k) for k in drop],sets=sets),open('/home/user/jimin/bank/exam/practice_mix.json','w'))
    return drop
if __name__=='__main__':
    d=make(); print('dropped',d)

def remake48():
    """9 Nov, second version: nothing is dropped, 44 notebook + 4 Ethics = 48 per set (same Ethics units as before)."""
    old=json.load(open('/home/user/jimin/bank/exam/practice_mix.json'))
    allv=load_all(); size={k:len(v['questions']) for k,v in allv}; topic={k:v['topic'] for k,v in allv}
    parts=partition([(k,size[k]) for k,_ in allv],6,44,R); assert parts
    sets=[]
    for b,p in enumerate(parts):
        for _ in range(500):
            R.shuffle(p)
            if all(topic[a]!=topic[c] for a,c in zip(p,p[1:])): break
        o=old['sets'][b]
        sets.append(dict(vignettes=[list(k) for k in p],ethics_pos=R.randrange(len(p)+1),ethics_kind=o['ethics_kind'],ethics=o['ethics']))
    json.dump(dict(dropped=[],sets=sets),open('/home/user/jimin/bank/exam/practice_mix.json','w'))
