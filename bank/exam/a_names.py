import json,re,io,contextlib,importlib.util as iu,collections
o=json.load(open('/home/user/jimin/bank/exam/mockA_pick.json'))
sp=iu.spec_from_file_location('p','/home/user/jimin/bank/exam/mock1112_pick.py'); p=iu.module_from_spec(sp)
with contextlib.redirect_stdout(io.StringIO()): sp.loader.exec_module(p)
BANK=p.BANK
def fulltext(v): return v['body']+'\n'+'\n'.join(q['q']+'\n'+'\n'.join(q['options'])+'\n'+q['why'] for q in v['questions'])
LOW=set()
for v in BANK.values():
    LOW|=set(re.findall(r'\b[a-z]{3,}\b',fulltext(v)))
STOP=set('Exhibit Exhibits Statement Statements Reason Option Year Years Note Notes Panel Tier Basel Gordon Sharpe Solow Porter Monte Carlo Treasury Treasuries December January February March April May June July August September October November Monday Tuesday Wednesday Thursday Friday United States Europe European Canada Canadian France Italy Brazil Japan Australia Australian Euros Euro British China Chinese Germany German Switzerland Swiss India Indian Mexico Spanish Spain Korea Korean Africa Asia Asian Eurozone Federal Reserve Black Scholes Markowitz Fama French Carhart Lorenz Jensen Treynor Cobb Douglas Dornbusch Mundell Taylor Fisher Hotelling Ricardo Monetary Fund Bank Central US UK EU GAAP IFRS CFA Level CAPM'.split())
def cands(v):
    t=fulltext(v); c=collections.Counter()
    for m in re.finditer(r"(?<![\.\n\?\!:] )(?<!^)\b([A-Z][a-z]{2,}(?:[ -][A-Z][a-z]+){0,3})\b",t):
        w=m.group(1)
        first=w.split()[0]
        if first in STOP or first.lower() in LOW and len(w.split())==1: continue
        c[w]+=1
    return c
if __name__=='__main__':
    import sys
    for m in range(int(sys.argv[1]),int(sys.argv[2])):
        print('=== A%d'%(m+1))
        for x in o[m]:
            if x['id']: print(x['id'],dict(cands(BANK[x['id']])))
