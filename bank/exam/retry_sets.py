# Incorrect-question practice sets (12 Nov): every question the user got wrong in Mock 6-10 and Practice sets 1-4, with the relevant part of its vignette
# copied word for word, grouped by topic into vignettes of 3-5 questions (parts from different cases under "Part 1/2" headings).
import json,re,sys,random,copy,collections,itertools
sys.path.insert(0,'/tmp/gen/retry'); sys.path.insert(0,'/home/user/jimin/bank/exam')
from extract import REC,SETS
from mock7_tweak import perm
def R(*a):
    out=[]
    for x in a:
        if isinstance(x,tuple): out+=list(range(x[0],x[1]+1))
        else: out.append(x)
    return out
SEL={('mock6',0):R(0,2,4,5),('mock6',3):R(0,2),('mock6',4):R(0,2,8,10,11,12),('mock6',5):R(0,12,13,14,15),('mock6',6):R(0,(2,11),13,14),('mock6',7):R(0,6),('mock6',8):R(0,30),('mock6',9):R(0,(23,31)),('mock6',10):R(0,2,4,6,8,10),
('mock7',2):R(0,38,(40,53)),('mock7',4):R(0,20),('mock7',5):R(0,8,(10,16)),('mock7',7):R(0,2,(4,7),(9,14),(16,23),25),('mock7',8):R(0,3,(5,22),(35,42)),('mock7',9):R(0,13,(15,21),23,25,27),('mock7',10):R(0,2,4,5,7,(9,16),32,(34,38),44),
('mock8',0):R(0,2,(4,14)),('mock8',1):R(0,9,(11,14),(16,25)),('mock8',2):R(0,(10,13),15,(17,22),(24,27),29),('mock8',7):R(0,7),('mock8',8):R(0,(2,15),17,19,(21,24)),('mock8',9):R(0,1,3),
('mock9',1):R(0,2,(4,7)),('mock9',2):R(0,2,4,6),('mock9',3):R(0,7,8),('mock9',6):R(0,2,(4,7),9,(11,16)),('mock9',8):R(0,2,3,4),('mock9',9):R(0,2,4,6,(13,24)),('mock9',10):R(0,2,4,(6,9)),
('mock10',0):R((0,5)),('mock10',2):R(0),('mock10',3):R(0,(2,8),10,12),('mock10',5):R(0,12,(14,21)),('mock10',9):R(0,(2,20),22,24,25,27,28),
('pq1',5):R((0,11)),('pq1',6):[],('pq1',9):R(0),('pq1',10):R(0,4),('pq1',11):R(0),('pq1',12):R(0),('pq1',14):R(0),
('pq2',2):R((0,6)),('pq2',3):R(0,2,3),('pq2',4):R(0,2),('pq2',5):R(0,2),('pq2',7):R(0,6),('pq2',10):R(0,2),('pq2',13):R((0,5),7),
('pq3',3):[],('pq3',8):R(0),('pq3',14):R(0,4),('pq3',15):R(0,10),('pq3',16):R(4),
('pq4',1):R(11),('pq4',4):R(0),('pq4',5):R(0),('pq4',7):R(0,2),('pq4',8):R(0,3),('pq4',13):R(0,2,3,5),('pq4',15):R((0,6)),('pq4',16):R(0,2,4),('pq4',17):R(14,16,18)}
TRIM={('mock8',7):' To begin her analysis, Thorsell observes the following:',('pq3',15):' Exhibit 1 shows the ANOVA results.'}
def clean_line(l):
    if '\t' in l:
        c=[x.strip() for x in l.split('\t')]
        return ' | '.join(c)
    return l
def render(vsrc,idx):
    L=vsrc.split('\n'); idx=sorted(set(i for i in idx if L[i].strip())); out=''; prev=None; tabrows=[]
    lines=[]
    for i in idx:
        l=L[i]
        lines.append((i,clean_line(l),'\t' in l))
    # header marks for converted tab tables
    res=[]; k=0
    while k<len(lines):
        i,l,tab=lines[k]
        if tab and (k==0 or not lines[k-1][2] or lines[k-1][0]!=i-1):
            cells=[x.strip() for x in l.split('|')]
            if not cells[0] or not any(re.search(r'\d',c) for c in cells): l='# '+l
        res.append((i,l)); k+=1
    for n,(i,l) in enumerate(res):
        if prev is None: out=l
        else: out+=('\n' if i==prev+1 else '\n\n')+l
        prev=i
    return out
LAB=re.compile(r'^(Statement|Reason|Observation|Comment|Point|Enhancement|Concern|Condition|Initiative|Measure|Channel|Scenario|Strategy|Option|Policy|Action|Step|Investment|Valuation Method|Case)\s+\d',re.M)
def labels(text): return set(m.group(1) for m in LAB.finditer(text))
def exnums(text):
    s=set()
    for m in re.finditer(r'Exhibits?\s+(\d+(?:\s*(?:,|and|or|&)\s*\d+)*)',text): s|=set(int(x) for x in re.findall(r'\d+',m.group(1)))
    return s
def shift(text,off):
    return re.sub(r'(Exhibits?\s+)(\d+(?:\s*(?:,|and|or|&)\s*\d+)*)',lambda m:m.group(1)+re.sub(r'\d+',lambda d:str(int(d.group(0))+off),m.group(2)),text)
# ---- parts (one per source vignette)
PARTS=collections.OrderedDict()
for r in REC:
    key=(r['src'],r['vi'])
    p=PARTS.setdefault(key,dict(src=r['src'],vi=r['vi'],topic=r['topic'],body=render(r['body'],SEL[key]) if SEL[key] else '',recs=[]))
    p['recs'].append(r)
for p in PARTS.values():
    p['body']=p['body'].replace(TRIM.get((p['src'],p['vi']),''),'') if (p['src'],p['vi']) in TRIM else p['body']
    p['labels']=labels(p['body']+'\n'+'\n'.join(r['q']['q'] for r in p['recs']))
    p['size']=len(p['recs'])
ORD=['Financial Statement Analysis','Equity Valuation','Ethical and Professional Standards','Corporate Issuers','Economics','Portfolio Management','Derivatives','Fixed Income','Alternative Investments','Quantitative Methods']
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

HINTS=json.load(open('/home/user/jimin/bank/exam/hints.json'))
FIXEDRE=re.compile(r'^(Statement|Comment|Reason|Channel|Enhancement|Point|Observation|Only|Both|Yes|No\b|Neither|[\$€£¥R]?\s?[\d.,]+)')
def is_fixed(opts): return any(FIXEDRE.match(o.strip()) for o in opts)
SET1=['Financial Statement Analysis','Equity Valuation','Ethical and Professional Standards','Corporate Issuers','Economics']
SET2=['Portfolio Management','Derivatives','Fixed Income','Alternative Investments','Quantitative Methods']
def correct_line(q):
    L=q['why'].split('\n'); a='ABC'[q['answer']]
    for l in L:
        m=re.match(r'^'+a+r'(\. Correct\.| is correct\.)\s*(.*)',l)
        if m: return m.group(2)
    return L[0]
def auto_hint(body,q):
    sents=[]
    for para in re.split(r'\n+',body):
        if ' | ' in para: continue
        for s in re.split(r'(?<=[.!?”"])\s+',para):
            s=s.strip()
            if len(s)>25: sents.append(s)
    ref=set(re.findall(r'[A-Za-z]{5,}',(q['q']+' '+q['options'][q['answer']]+' '+correct_line(q)).lower()))
    sc=sorted(sents,key=lambda s:-len(ref&set(re.findall(r'[A-Za-z]{5,}',s.lower()))))
    return dict(hl=sc[:2],rule=correct_line(q)[:200])
sys.path.insert(0,'/home/user/jimin/bank/notes_src')
from content import N as NOTES
FIX={t:f for (_,t,_,_,_,f,_) in NOTES}
def clean_rule(rule,src):
    m=re.match(r'(mock)(\d+):(\d+)',src)
    tag=f'Mock {m.group(2)} Q{m.group(3)}' if m else None
    bad=(not rule) or re.match(r'^(Incorrect Answer Feedback|[ABC]\.|[ABC] is)',rule)
    if bad and tag in FIX: return FIX[tag]
    if bad: return re.sub(r'^(Incorrect Answer Feedback:?\s*|[ABC]\.\s*(Incorrect|Correct)\.?\s*|[ABC] is (in)?correct\.\s*)','',rule)
    return rule
def conv_key(rec):
    return f"{rec['src']}:{rec['n']}"
def build_set(setid,title,topics,seed,desc):
    rng=random.Random(seed); vigs=[]
    for t in topics:
        ps=[p for p in PARTS.values() if p['topic']==t]
        for b in bins_for(ps,1):
            rng.shuffle(b); used=set(); body=[]; qs=[]; k=0
            nonempty=sum(1 for p in b if p['body'])
            for p in b:
                txt=p['body']; E=exnums(txt) | set().union(*[exnums(r['q']['q']+' '+' '.join(r['q']['options'])) for r in p['recs']])
                off=max(used) if (E&used) else 0
                if off: txt=shift(txt,off)
                used|={e+off for e in E}
                if txt:
                    k+=1; body.append(('Part %d\n'%k if nonempty>1 else '')+txt)
                for r in sorted(p['recs'],key=lambda r:r['n']):
                    q=copy.deepcopy(r['q'])
                    if off:
                        q['q']=shift(q['q'],off); q['options']=[shift(o,off) for o in q['options']]; q['why']=shift(q['why'],off)
                    q['_src']=conv_key(r); q['_body']=txt; q['_orig']=(r['src'],r['n'])
                    qs.append(q)
            vigs.append(dict(topic=t,body='\n\n'.join(body),questions=qs))
    return vigs
def finalize(vigs,setid,seed0):
    # option shuffles with balanced key
    PERMS=[p for p in itertools.permutations(range(3)) if p!=(0,1,2)]
    qs=[q for v in vigs for q in v['questions']]
    for q in qs: q['_fixed']=is_fixed(q['options'])
    free=[q for q in qs if not q['_fixed']]
    base=[copy.deepcopy(q) for q in free]
    def maxrun(k):
        m_=c=1
        for a,b in zip(k,k[1:]): c=c+1 if a==b else 1; m_=max(m_,c)
        return m_
    n=len(qs); lo,hi=round(n/3)-2,round(n/3)+2
    for t in range(200000):
        r=random.Random(seed0+t); ch=[list(r.choice(PERMS)) for _ in free]
        for q,b0,o in zip(free,base,ch):
            new=copy.deepcopy(b0); perm(new,o); q['options']=new['options']; q['answer']=new['answer']; q['why']=new['why']
        k=''.join('ABC'[q['answer']] for q in qs); c=collections.Counter(k)
        if maxrun(k)<=3 and all(lo<=c[x]<=hi for x in 'ABC'): break
    else: raise SystemExit('no balance')
    # validate why vs answer
    for q in qs:
        L=q['why'].split('\n'); a='ABC'[q['answer']]
        cl=[re.match(r'^([ABC])(\. Correct| is correct)',l) for l in L]; cl=[m.group(1) for m in cl if m]
        if cl: assert cl==[a],(q['_src'],cl,a)
    # hints
    hints={}; nq=0; srcmap={}
    for v in vigs:
        for q in v['questions']:
            nq+=1
            h=HINTS.get(q['_src']) if q['_src']!='mock8:1' else None
            body=q['_body']; ok=[]
            if h:
                for ph in h['hl']:
                    if ph.startswith('@row:'):
                        lab=ph[5:].lower()
                        if any(l.lstrip('# ').split(' | ')[0].strip().lower().startswith(lab) for l in body.split('\n')): ok.append(ph)
                    elif ph in body or ph in q['q']: ok.append(ph)
            if ok: hints[f'{setid}:{nq}']=dict(hl=ok,rule=clean_rule(h['rule'],q['_src']))
            else:
                a=auto_hint(body if body.strip() else q['q'],q)
                a['hl']=[x for x in a['hl'] if x in body or x in q['q']]
                hints[f'{setid}:{nq}']=a
            hints[f'{setid}:{nq}']['rule']=clean_rule(hints[f'{setid}:{nq}']['rule'],q['_src'])
            srcmap[nq]=q['_orig']
    for v in vigs:
        for q in v['questions']:
            for k_ in ('_src','_body','_orig','_fixed'): q.pop(k_,None)
    return hints,srcmap
if __name__=='__main__':
    out={}
    for sid,title,tops,desc in (('rq1','Incorrect questions 1',SET1,'Questions you got wrong in Mocks 6-10 and Practice sets 1-4 (Financial Statement Analysis, Equity, Ethics, Corporate Issuers, Economics), relevant vignette parts only'),
                                ('rq2','Incorrect questions 2',SET2,'Questions you got wrong in Mocks 6-10 and Practice sets 1-4 (Portfolio Management, Derivatives, Fixed Income, Alternatives, Quantitative Methods), relevant vignette parts only')):
        vigs=build_set(sid,title,tops,7,desc)
        hints,srcmap=finalize(vigs,sid,100)
        nq=sum(len(v['questions']) for v in vigs)
        st=dict(id=sid,rev=2,resetHl=[],title=title,kind='practice',minutes=3*nq,desc=desc+' (%d questions)'%nq,vignettes=vigs)
        json.dump(dict(set=st,hints=hints,srcmap={str(k):list(v) for k,v in srcmap.items()}),open(f'/home/user/jimin/bank/exam/{sid}.json','w'),ensure_ascii=False,indent=1)
        k=''.join('ABC'[q['answer']] for v in vigs for q in v['questions'])
        print(sid,nq,k,collections.Counter(k),[(v['topic'][:6],len(v['questions'])) for v in vigs])
