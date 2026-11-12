import sys,re,random,copy,collections,itertools,json
sys.path.insert(0,'/tmp/gen/m13')
import lib13
from lib13 import PARTS,perm,is_fixed
import spec1,spec2,spec3,spec4
LABT='Recommendation|Policy|Pledge|Justification|Statement|Option|Reason|Observation|Concern|Comment|Channel|Point|Note|Method'
INL=re.compile(r'^('+LABT+r')\s+(\d)[:.]')
SPL=re.compile(r'^('+LABT+r')\s+(\d)$')
def renum(part,rng):
    lines=part['body'].split('\n'); units=collections.defaultdict(list)
    i=0
    while i<len(lines):
        l=lines[i]; m=INL.match(l)
        if m: units[m.group(1)].append((i,i,int(m.group(2)))); i+=1; continue
        m=SPL.match(l.strip())
        if m:
            j=i+1
            while j<len(lines) and not lines[j].strip(): j+=1
            if j<len(lines): units[m.group(1)].append((i,j,int(m.group(2)))); i=j+1; continue
        i+=1
    maps={}
    for T,us in units.items():
        nums=[u[2] for u in us]
        if len(us)<2 or sorted(nums)!=list(range(1,len(nums)+1)): continue
        n=len(us)
        for _ in range(100):
            p=list(range(1,n+1)); rng.shuffle(p)
            if all(p[k]!=k+1 for k in range(n)): break
        pi={k+1:p[k] for k in range(n)}   # old number -> new number
        maps[T]=pi
        # relabel and reorder units
        blocks=[]
        for (a,b,num) in us:
            blk=lines[a:b+1]; blk[0]=re.sub(r'^('+T+r')\s+\d',lambda m:f"{m.group(1)} {pi[num]}",blk[0].strip()) if True else blk[0]
            blocks.append((pi[num],blk))
        blocks.sort(key=lambda x:x[0])
        # splice back
        out=[];pos=0
        for (a,b,num),(newn,blk) in zip(us,blocks):
            out+=lines[pos:a]; out+=blk; pos=b+1
        out+=lines[pos:]; lines=out
    part['body']='\n'.join(lines)
    def mp(text):
        for T,pi in maps.items():
            text=re.sub(r'\b('+T+r')s?\s+(\d)\b',lambda m:(m.group(0)[:m.start(2)-m.start(0)])+str(pi[int(m.group(2))]),text)
        text=re.sub(r'Both (Statements?) (\d) and (?:Statement )?(\d)',lambda m:'Both Statement %d and Statement %d'%tuple(sorted((int(m.group(2)),int(m.group(3))))),text)
        return text
    for q in part['qs']:
        q['q']=mp(q['q']); q['options']=[mp(o) for o in q['options']]; q['why']=mp(q['why'])
    return maps
EXC=re.compile(r'Exhibits?\s+(\d+(?:\s*(?:,|and|or|&)\s*\d+)*)')
def exnums(t): 
    s=set()
    for m in EXC.finditer(t): s|=set(int(x) for x in re.findall(r'\d+',m.group(1)))
    return s
def shift(t,off): return EXC.sub(lambda m:m.group(0)[:m.start(1)-m.start(0)]+re.sub(r"\d+",lambda d:str(int(d.group(0))+off),m.group(1)),t)
LAB=re.compile(r'^('+LABT+r')\s+\d',re.M)
def labels(t): return set(m.group(1) for m in LAB.finditer(t))
def bins_for(parts,seed):
    rng=random.Random(seed); best=None
    for t in range(4000):
        L=parts[:]; rng.shuffle(L); bins=[]
        for p in L:
            cand=[b for b in bins if sum(x['size'] for x in b)+p['size']<=5 and not any(p['labels']&x['labels'] for x in b)]
            if cand and rng.random()<0.85:
                b=min(cand,key=lambda b:(abs(sum(x['size'] for x in b)+p['size']-4),rng.random())); b.append(p)
            else: bins.append([p])
        sizes=[sum(x['size'] for x in b) for b in bins]
        if min(sizes)<min(3,sum(sizes)): continue
        score=sum(abs(s-4) for s in sizes)+0.01*len(bins)
        if best is None or score<best[0]: best=(score,bins)
    return best[1]
ORD=['Ethical and Professional Standards','Financial Statement Analysis','Equity Valuation','Fixed Income','Quantitative Methods','Economics','Corporate Issuers','Derivatives','Alternative Investments','Portfolio Management']
def optkey(o):
    m=re.search(r'\d',o); return (0 if o.startswith('Yes') else 1 if not o.startswith(('Neither',)) else 3, int(m.group(0)) if m else 9)
def build(seed=13):
    rng=random.Random(seed)
    for p in PARTS:
        p['maps']=renum(p,rng); p['size']=len(p['qs']); p['labels']=labels(p['body']+'\n'+'\n'.join(q['q'] for q in p['qs']))
    # shuffle order of topics for the set: keep topic blocks but interleave? topics grouped (as requested for retry sets) -> mixed order of topic blocks
    vigs=[]
    for t in ORD:
        ps=[p for p in PARTS if p['topic']==t]
        for b in bins_for(ps,1):
            rng.shuffle(b); used=set(); body=[]; qs=[]; k=0; nonempty=sum(1 for p in b if p['body'])
            for p in b:
                txt=p['body']; E=exnums(txt)|set().union(*[exnums(q['q']+' '+' '.join(q['options'])) for q in p['qs']])
                off=max(used) if (E&used) else 0
                if off: txt=shift(txt,off)
                used|={e+off for e in E}
                k+=1; body.append(('Part %d\n'%k if nonempty>1 else '')+txt)
                for q in p['qs']:
                    q=copy.deepcopy(q)
                    if off: q['q']=shift(q['q'],off); q['options']=[shift(o,off) for o in q['options']]; q['why']=shift(q['why'],off)
                    q['_body']=txt; q['_orig']=p['origin']+(' '+q['_src'] if q['_src'] else ''); qs.append(q)
            vigs.append(dict(topic=t,body='\n\n'.join(body),questions=qs))
    return vigs
if __name__=='__main__':
    v=build()
    for x in v: print(x['topic'][:10],len(x['questions']),len(x['body']))

def finalize(vigs,seed0=100):
    PERMS=[p for p in itertools.permutations(range(3)) if p!=(0,1,2)]
    qs=[q for v in vigs for q in v['questions']]
    # labelled option sets: sort naturally, keep fixed
    for q in qs:
        if q['fixed'] and all(re.match(r'^(Yes|No|Only|Both|Neither|(?:'+LABT+r')\s+\d)',o) for o in q['options']):
            order=sorted(range(3),key=lambda i:optkey(q['options'][i]))
            if order!=[0,1,2]: perm(q,order)
    free=[q for q in qs if not q['fixed']]
    base=[copy.deepcopy(q) for q in free]
    def maxrun(k):
        m_=c=1
        for a,b in zip(k,k[1:]): c=c+1 if a==b else 1; m_=max(m_,c)
        return m_
    n=len(qs); lo,hi=round(n/3)-2,round(n/3)+2
    for t in range(300000):
        r=random.Random(seed0+t); ch=[list(r.choice(PERMS)) for _ in free]
        for q,b0,o in zip(free,base,ch):
            new=copy.deepcopy(b0); perm(new,o); q['options']=new['options']; q['answer']=new['answer']; q['why']=new['why']
        k=''.join('ABC'[q['answer']] for q in qs); c=collections.Counter(k)
        if maxrun(k)<=3 and all(lo<=c[x]<=hi for x in 'ABC'): break
    else: raise SystemExit('no balance')
    for q in qs:
        L=q['why'].split('\n'); a='ABC'[q['answer']]
        cl=[re.match(r'^([ABC])(\. Correct| is correct)',l) for l in L]; cl=[m.group(1) for m in cl if m]
        assert (not cl) or cl==[a],(q['_orig'],cl,a)
    return k
def correct_line(q):
    a='ABC'[q['answer']]
    for l in q['why'].split('\n'):
        m=re.match(r'^'+a+r'(\. Correct\.| is correct\.)\s*(.*)',l)
        if m: return m.group(2)
    return q['why'].split('\n')[0]
def auto_hint(body,q):
    sents=[]
    for para in re.split(r'\n+',body):
        if ' | ' in para: continue
        for s in re.split(r'(?<=[.!?”"])\s+',para):
            s=s.strip()
            if len(s)>25: sents.append(s)
    ref=set(re.findall(r'[A-Za-z]{5,}',(q['q']+' '+q['options'][q['answer']]+' '+correct_line(q)).lower()))
    sc=sorted(sents,key=lambda s:-len(ref&set(re.findall(r'[A-Za-z]{5,}',s.lower()))))
    return dict(hl=sc[:2],rule=correct_line(q)[:220])
def hints(vigs,setid):
    H={}; n=0
    for v in vigs:
        for q in v['questions']:
            n+=1; body=q['_body']
            if q.get('hl'):
                ok=[]
                for ph in q['hl']:
                    if ph.startswith('@row:'):
                        lab=ph[5:].lower()
                        if any(l.lstrip('# ').split(' | ')[0].strip().lower().startswith(lab) for l in body.split('\n')): ok.append(ph)
                    elif ph in body or ph in q['q']: ok.append(ph)
                assert ok,(q['_orig'],q['hl'])
                H[f'{setid}:{n}']=dict(hl=ok,rule=q['rule'])
            else:
                a=auto_hint(body,q); a['hl']=[x for x in a['hl'] if x in body or x in q['q']]
                assert a['hl'],q['_orig']
                H[f'{setid}:{n}']=a
    return H
if __name__=='__main__':
    key=finalize(v)
    print(key,collections.Counter(key),len(key))
    H=hints(v,'mock13')
    out=[]
    for x in v:
        qq=[]
        for q in x['questions']:
            qq.append(dict(q=q['q'],options=q['options'],answer=q['answer'],why=q['why']))
        out.append(dict(topic=x['topic'],body=x['body'],questions=qq))
    st=dict(id='mock13',rev=2,resetHl=[],title='Mock 13',kind='mock',minutes=3*len(key),desc=f'Built from the questions you got wrong in Mocks 1-5 ({len(key)} questions, {len(out)} vignettes, {3*len(key)//60} h {3*len(key)%60} min); names and numbers changed',vignettes=out)
    srcmap={i+1:q['_orig'] for i,q in enumerate(q for x in v for q in x['questions'])}
    json.dump(dict(set=st,hints=H,srcmap=srcmap,key=key),open('/home/user/jimin/bank/exam/mock13.json','w'),ensure_ascii=False,indent=1)
    print('written')
