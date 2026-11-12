import re,copy,random,itertools,json,sys,collections
sys.path.insert(0,'/tmp/gen/m13'); sys.path.insert(0,'/home/user/jimin/bank/exam')
from src import SRC
from mock7_tweak import perm
PARTS=[]
def S(origin):
    r=[s for s in SRC if s['v'].get('origin')==origin]; assert len(r)==1,(origin,len(r)); return r[0]
def R(*a):
    out=[]
    for x in a:
        if isinstance(x,tuple): out+=list(range(x[0],x[1]+1))
        else: out.append(x)
    return out
def subs(text,pairs=(),edits=()):
    for a,b in sorted(pairs,key=lambda p:-len(p[0])): text=text.replace(a,b)
    for a,b in edits:
        assert a in text,('edit not found',a[:60]); text=text.replace(a,b)
    return text
def render(body,idx):
    L=body.split('\n'); idx=sorted(set(i for i in idx if L[i].strip())); rows=[]
    prev=None; out=''
    for k,i in enumerate(idx):
        l=L[i]; tab='\t' in l
        if tab:
            cells=[x.strip() for x in l.split('\t')]
            if len(cells)==2 and cells[0].endswith(':') and len(cells[1])>60: l=cells[0]+' '+cells[1]; tab=False
            else: l=' | '.join(cells)
            first_of_tab = not (k>0 and idx[k-1]==i-1 and '\t' in L[idx[k-1]])
            if first_of_tab and (not cells[0] or not any(re.search(r'\d',c) for c in cells)): l='# '+l
        out+= l if prev is None else (('\n' if i==prev+1 else '\n\n')+l)
        prev=i
    return out
def Nq(q,right,wrongs,whys,hl=None,rule=None,fixed=True):
    # whys: explanation for [right, wrong1, wrong2]
    return dict(kind='N',q=q,opts=[right]+list(wrongs),whys=list(whys),hl=hl,rule=rule,fixed=fixed)
def K(n,edits=()):
    return dict(kind='K',n=n,edits=list(edits))
def part(topic,origin,sel,pairs,edits,qs,tag=''):
    s=S(origin); body=sel.strip() if isinstance(sel,str) else subs(render(s['v']['body'],sel),pairs,edits); out=[]
    for q in qs:
        if q['kind']=='K':
            src=dict(s['allq'])[q['n']]; PP=list(pairs)+list(q['edits']); opts=[subs(o,PP) for o in src['options']]; why=subs(str(src.get('why','')),PP)
            opts=[o for o in opts]
            ans='ABC'.index(src['answer'])
            out.append(dict(q=subs(src['q'],PP),options=opts,answer=ans,why=why,hl=None,rule=None,fixed=is_fixed(opts),_src=f"Mock {s['m']} Q{q['n']}"))
        else:
            letters='ABC'; items=list(zip(q['opts'],q['whys'],[True,False,False]))
            def num(t):
                m=re.search(r'-?\d[\d,]*\.?\d*',t.replace('−','-')); return float(m.group(0).replace(',','')) if m else 0
            if q['fixed'] and all(re.search(r'\d',o) for o in q['opts']): items.sort(key=lambda it:num(it[0]))
            why='\n'.join(f"{letters[i]}. {'Correct' if it[2] else 'Incorrect'}. {it[1]}" for i,it in enumerate(items))
            out.append(dict(q=q['q'],options=[it[0] for it in items],answer=[it[2] for it in items].index(True),why=why,hl=q['hl'],rule=q['rule'],fixed=q['fixed'],_src=''))
    for q in out:
        assert len(set(q['options']))==3,(origin,q['options'])
    PARTS.append(dict(topic=topic,origin=origin,body=body,qs=out,src=s))
FIXEDRE=re.compile(r'^(Statement|Comment|Reason|Channel|Enhancement|Point|Observation|Concern|Only|Both|Yes|No\b|Neither|Option|Policy|Pledge|Justification|Recommendation|Note|Method|[\$€£¥R]?\s?[\d.,]+)')
def is_fixed(opts): return any(FIXEDRE.match(o.strip()) for o in opts)
