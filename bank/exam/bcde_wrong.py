# Sets rq3_* (16-17 Nov): every question the user got wrong or asked about in the real Mocks B, C, D, E, F (171 questions), grouped by subject,
# one block per source vignette with only the relevant vignette parts (word for word). Questions, options and explanations unchanged.
import json,re,collections
B='/home/user/jimin/bank/exam/'
WR={('B',1):[3,4,6,8,9,10,12,15,16,17,19,20,22,24,25,26,27,28,31,35,38,40,44],('B',2):[1,3,5,6,10,11,12,15,16,18,20,21,25,26,32,38,41,42,43],
 ('C',1):[1,5,7,9,11,13,19,25,29,30,31,32,34,35,39,43],('C',2):[2,3,6,7,8,9,10,11,19,29,30,32,34,35,36,43,44],
 ('D',1):[5,7,11,12,21,25,27,35,36,38,39],('D',2):[17,19,20,22,25,26,30,33,34,35,40,41,42,44],
 ('E',1):[8,9,14,17,18,20,24,26,37,43],('E',2):[1,2,8,16,18,20,21,25,26,27,28,34,35,37,40,41],
 ('F',1):[3,7,8,14,26,28,31,36,37,38,41,42],('F',2):[4,5,15,16,18,20,24,25,31,33,37,38,41]}
EXTRA={('C',1):[4,15,27],('D',1):[15,16,22,32],('D',2):[15],('E',1):[4,6,7,36,38],('E',2):[10,13,23,31],('F',2):[9,11,21]}
# sel for the extras that have no PDF data file
XSEL={('C',1,4):["Finally, Kuspa analyzes the risks related to the currencies","@Exhibit 3"],
 ('C',1,15):["John Smith, an advisor at Godel Securities","In Country 2, there is uncertainty about how the government","@Exhibit 2","Smith computes the percentage change"],
 ('C',1,27):["Blythe evaluates three bonds just issued by Y Corporation","@Exhibit 2"],
 ('D',1,15):["Wyman and Becker discuss the current market prices","@Exhibit 1","Becker provides additional information about Commodity 3","Wyman takes a fully collateralized long futures position"],
 ('D',1,16):["Wyman also considers investing in a commodity index","trending commodity markets","no changes in the shapes of forward curves"],
 ('D',1,22):["Kriser is concerned that recent industry changes","Carrying value of cash-generating unit","Recoverable amount of cash-generating unit","Goodwill allocated to cash-generating unit"],
 ('D',1,32):["Finally, Granger evaluates the multifactor models","Conclusion 1","Conclusion 2"],
 ('D',2,15):["To improve sales in a new product segment","@Exhibit 2"]}
DATA={}
for (g,p),f in {('C',1):'data.py',('C',2):'data2.py',('D',1):'data_D1.py',('D',2):'data_D2.py',('E',1):'data_E1.py',('E',2):'data_E2.py',('F',1):'data_F1.py',('F',2):'data_F2.py'}.items():
    ns={}; exec(open(B+'mockC_real/wrong_pdf/'+f).read(),ns)
    for n,d in ns['W'].items(): DATA[(g,p,n)]=d
nsB={}; exec(open(B+'mockB_real/wrong_pdf/data.py').read(),nsB)
for (p,n),d in nsB['W'].items(): DATA[('B',p,n)]=d
def pick_idx(body,items,style):
    L=body.split('\n'); idx=[]
    for it in items:
        if it.startswith('@'):
            i=next((k for k,l in enumerate(L) if l.startswith(it[1:])),None); assert i is not None,it
            idx.append(i); j=i+1
            if style=='B':
                while j<len(L) and (' | ' in L[j] or L[j].startswith('# ')): idx.append(j); j+=1
                if j<len(L) and L[j].startswith('Note:'): idx.append(j)
            else:
                while j<len(L) and (' | ' in L[j] or L[j].startswith('# ') or (len(L[j])<70 and not L[j].endswith('.') and not L[j].startswith('Exhibit')) or L[j].startswith('Note:')):
                    idx.append(j); j+=1
        else:
            i=next((k for k,l in enumerate(L) if it in l),None); assert i is not None,it
            idx.append(i)
    return idx
SETS={}
for g in 'BCDEF':
    for p,s in enumerate(json.load(open(B+f'mock{g}_real/mock{g}.json'))['sets']): SETS[(g,p+1)]=s
ORDER=['Ethics','Quant','Econ','FSA','Corp','Equity','FI','Deriv','Alt','PM']
blocks=collections.OrderedDict(); n_in=0
for (g,p),s in SETS.items():
    n=0
    for vi,v in enumerate(s['vignettes']):
        for q in v['questions']:
            n+=1
            if n in WR[(g,p)] or n in EXTRA.get((g,p),[]):
                key=(g,p,vi); b=blocks.setdefault(key,dict(v=v,qs=[],idx=set(),hl=[])); b['qs'].append((n,q)); n_in+=1
                items=DATA[(g,p,n)]['sel'] if (g,p,n) in DATA else XSEL[(g,p,n)]
                b['idx']|=set(pick_idx(v['body'],items,'B' if g=='B' else 'C'))
assert n_in==171,n_in
SETIDS={'Ethics':'rq3_eth','Quant':'rq3_qua','Econ':'rq3_eco','FSA':'rq3_fsa','Corp':'rq3_cor','Equity':'rq3_equ','FI':'rq3_fi','Deriv':'rq3_der','Alt':'rq3_alt','PM':'rq3_pm'}
NAMES={'Ethics':'Ethics','Quant':'Quantitative Methods','Econ':'Economics','FSA':'Financial Statement Analysis','Corp':'Corporate Issuers','Equity':'Equity Valuation','FI':'Fixed Income','Deriv':'Derivatives','Alt':'Alternative Investments','PM':'Portfolio Management'}
sets=[];hints={};allk=''
for top in ORDER:
    vigs=[];nq=0;sid=SETIDS[top]
    for key in sorted([k for k in blocks if blocks[k]['v']['topic']==top],key=lambda k:('BCDEF'.index(k[0]),k[1],k[2])):
        g,p,vi=key; b=blocks[key]; L=b['v']['body'].split('\n'); idx=sorted(b['idx']); out=[]; prev=None
        for i in idx:
            if not L[i].strip(): continue
            if prev is not None: out.append('' if i!=prev+1 else None)
            out.append(L[i]); prev=i
        body='\n'.join(x if x is not None else '' for x in out)
        body=re.sub(r'\n{3,}','\n\n',body)
        body=f'Source: Mock {g} · Paper {p} · Vignette {vi+1}\n\n'+body
        qs=[]
        for n,q in b['qs']:
            nq+=1; qs.append(dict(q=q['q'],options=q['options'],answer=q['answer'],why=q['why']))
            d=DATA.get((g,p,n))
            if d:
                hl=[]
                for t in d['trig']:
                    h=('@row:'+t.split(' | ')[0].strip()) if ' | ' in t else t
                    if h.startswith('@row:'):
                        ok=any(l.lstrip('# ').split(' | ')[0].strip().lower().startswith(h[5:].lower()) for l in body.split('\n'))
                    else: ok=t in body or t in q['q']
                    if ok and h not in hl: hl.append(h)
                if hl: hints[f'{sid}:{nq}']=dict(hl=hl,rule=d['rule'])
        vigs.append(dict(topic=top,body=body,questions=qs))
    desc=f'{NAMES[top]}: the questions you got wrong or asked about in the real Mocks B, C, D, E and F ({nq} questions), one block per original vignette with only the parts the questions use (word for word). Questions, options and explanations are unchanged.'
    sets.append(dict(id=sid,rev=1,feedback=True,resetHl=[],title=f'Incorrect: {NAMES[top]}',kind='practice',minutes=3*nq,desc=desc,vignettes=vigs))
    allk+=''.join('ABC'[q['answer']] for v in vigs for q in v['questions'])
    print(sid,nq,len(vigs))
assert sum(len(v['questions']) for s_ in sets for v in s_['vignettes'])==171
json.dump(dict(sets=sets,hints=hints),open(B+'rq3.json','w'),ensure_ascii=False,indent=1)
print(len(hints),collections.Counter(allk))
