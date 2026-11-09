# Light disguise of the 8 real vignettes in Mock 7 (user request, 9 Nov): renumber listed items
# (statements, reasons, options, actions, measures, concerns), reorder answer choices of concept
# questions, and swap a few definition questions for another concept from the same reading.
# Calculation questions are left as they are.
import re
def renum(v,kind,mp):
    def sub(t):
        t=re.sub(rf'\b{kind}s? (\d)\b',lambda m:f"{kind}@{mp.get(int(m.group(1)),int(m.group(1)))}" if m.group(0).startswith(kind+' ') else m.group(0),t)
        return t.replace(kind+'@',kind+' ')
    v['body']=sub(v['body'])
    for q in v['questions']:
        q['q']=sub(q['q']); q['options']=[sub(o) for o in q['options']]; q['why']=sub(q['why'])
    # reorder listed items in the body: single lines inside a paragraph, or whole paragraphs
    pat=re.compile(rf'^{kind} (\d)\b')
    pars=v['body'].split('\n\n')
    for k,p in enumerate(pars):
        L=p.split('\n'); i=0
        while i<len(L):
            if pat.match(L[i]):
                j=i
                while j<len(L) and pat.match(L[j]): j+=1
                L[i:j]=sorted(L[i:j],key=lambda x:int(pat.match(x).group(1))); i=j
            else: i+=1
        pars[k]='\n'.join(L)
    i=0
    while i<len(pars):
        if pat.match(pars[i]):
            j=i
            while j<len(pars) and pat.match(pars[j]): j+=1
            pars[i:j]=sorted(pars[i:j],key=lambda x:int(pat.match(x).group(1))); i=j
        else: i+=1
    v['body']='\n\n'.join(pars)
    # answer choices that are just item labels go back into ascending order
    for q in v['questions']:
        if all(pat.match(o) and len(o)<14 for o in q['options']):
            order=sorted(range(3),key=lambda k:int(pat.match(q['options'][k]).group(1)))
            perm(q,order)
def perm(q,order):
    old=q['options']; q['options']=[old[k] for k in order]
    newpos={o:n for n,o in enumerate(order)}
    q['answer']=newpos[q['answer']]
    L='ABC'
    def fix(m): return L[newpos[L.index(m.group(1))]]+m.group(2)
    w=re.sub(r'(?m)^([ABC])(\. | is correct| is incorrect)',lambda m:'@'+fix(m),q['why'])
    lines=w.split('\n')
    # put lettered feedback lines back in A, B, C order
    if all(l.startswith('@') for l in lines if l.strip()) and len(lines)==3: lines=sorted(lines)
    q['why']='\n'.join(l[1:] if l.startswith('@') else l for l in lines)
def apply(V):
    eth,alt,eq,_,eco,der,_,fi,qm,_,pm=V
    renum(eth,'Action',{1:3,2:1,3:2}); renum(eth,'Option',{1:2,2:3,3:1})
    perm(eth['questions'][0],[2,0,1]); perm(eth['questions'][3],[1,2,0])
    renum(alt,'Option',{1:3,2:1,3:2}); renum(alt,'Measure',{1:2,2:3,3:1})
    q=alt['questions'][0]
    q.update(q="Relative to Option 1 and Option 2, a disadvantage of investing in Option 3 is most likely:",
      options=["exposure to double taxation of dividends.","lower liquidity and larger investment requirements.","less control over property-level investment decisions."],answer=1,
      why="A. Incorrect. Direct ownership pays no corporate-level tax on the property income, so there is no double taxation (that is a REOC issue; REITs avoid it).\nB. Correct. Direct ownership is illiquid and needs a large amount of capital per property, while publicly traded REITs and REOCs can be bought in small amounts and sold quickly.\nC. Incorrect. Direct ownership gives MORE control over property-level decisions than holding REIT or REOC shares; that is its main advantage.")
    renum(eq,'Statement',{1:3,2:1,3:2}); renum(eq,'Reason',{1:2,2:3,3:1})
    perm(eco['questions'][0],[2,0,1]); perm(eco['questions'][1],[1,2,0]); perm(eco['questions'][3],[2,1,0])
    perm(der['questions'][0],[1,2,0]); perm(der['questions'][3],[2,0,1])
    renum(fi,'Statement',{1:2,2:1})
    perm(fi['questions'][0],[1,2,0])
    q=fi['questions'][3]
    q.update(q="Suppose instead that the ABS were backed by a static book of many small, homogeneous credit card receivables. Kowalski should then most likely recommend a:",
      options=["portfolio-based approach.","statistics-based approach.","loan-by-loan approach."],answer=1,
      why="A. Incorrect. A portfolio-based approach suits medium-term, homogeneous and granular pools that change over time (such as the auto loans in the vignette).\nB. Correct. A static book of short-term, homogeneous and granular receivables suits a statistics-based approach built on historical default and loss data.\nC. Incorrect. A loan-by-loan approach suits pools of a small number of large, heterogeneous (non-granular) loans.")
    renum(qm,'Concern',{1:2,2:1})
    perm(qm['questions'][0],[2,0,1])
    q=qm['questions'][3]
    q.update(q="Assume for this question that Smith finds that the foreclosure share series does NOT have a unit root. Under these conditions, she can most reliably regress foreclosure share against the change in interest rates (dINT) if:",
      options=["dINT has a unit root and is cointegrated with foreclosure share.","dINT has a unit root and is not cointegrated with foreclosure share.","dINT does not have a unit root."],answer=2,
      why="A. Incorrect. Cointegration needs both series to have a unit root; here the foreclosure share series does not, so one series has a unit root and the other does not, and the regression is not reliable.\nB. Incorrect. One series with a unit root and one without gives unreliable results.\nC. Correct. If neither series has a unit root, both are covariance stationary and linear regression can be used.")
    renum(pm,'Statement',{1:2,2:1})
    q=pm['questions'][2]; perm(q,[1,0,2])
    q=pm['questions'][3]; q['why']=re.split(r'\n\n\d+Essay',q['why'])[0]
    perm(q,[2,0,1])
