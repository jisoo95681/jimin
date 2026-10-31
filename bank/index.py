#!/usr/bin/env python3
"""Rebuild bank/INDEX.md from vignettes.js (app bank) and bank/*.json (pasted vignettes)."""
import json,re,subprocess,glob,os,sys
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
js="""const s=require('fs').readFileSync(process.argv[1],'utf8').replace(/^const /gm,'var ');const c={};new Function('c',s+';c.V=VIGNETTES')(c);
console.log(JSON.stringify(c.V.map(v=>({id:v.id,title:v.title,reading:v.reading,topic:v.topic,nq:v.questions.length}))))"""
app=json.loads(subprocess.check_output(['node','-e',js,os.path.join(ROOT,'vignettes.js')]))
nr=json.loads(subprocess.check_output(['node','-e',"""const s=require('fs').readFileSync(process.argv[1],'utf8').replace(/^const /gm,'var ');const c={};new Function('c',s+';c.R=NOTE_READINGS')(c);console.log(JSON.stringify(c.R))""",os.path.join(ROOT,'notes.js')]))
name2num={}
for k,v in nr.items(): name2num[v.lower()]=int(k)
def num_of(reading):
    r=reading.lower()
    for k,v in name2num.items():
        if r==k or r in k or k in r: return v
    alias={'pensions (post-employment benefits)':8,'pensions and share-based compensation':8,'guidance for standards i–vii':41,'forward commitments':28,'valuation of contingent claims':29,'hedge fund strategies':33,'currency exchange rates: understanding equilibrium value':5,'analysis of dividends and share repurchases':13,'economics and investment markets':34,'measuring and managing market risk':38,'the arbitrage-free valuation framework':24,'valuation and analysis of bonds with embedded options':25,'market-based valuation: price and enterprise value multiples':20}
    return alias.get(r,0)
rows={}  # reading -> list of (src,id,title,nq)
for v in app: rows.setdefault(num_of(v['reading']),[]).append(('app',v['id'],v['title'],v['nq']))
bank=[]
stand=len(json.load(open(os.path.join(ROOT,'bank','standalone_questions.json')))) if os.path.exists(os.path.join(ROOT,'bank','standalone_questions.json')) else 0
for f in sorted(glob.glob(os.path.join(ROOT,'bank','*.json'))):
    if os.path.basename(f).startswith(('standalone','mock_')): continue
    for v in json.load(open(f)):
        bank.append(v)
        for r in v['readings']: rows.setdefault(r,[]).append(('bank',v['id'],v['title'],len(v['questions'])))
out=["# Vignette and answer bank","","Two stores: **app** = `vignettes.js` (68 curated vignettes) and **bank** = `bank/*.json` (pasted vignettes with answer keys). Rebuild this file with `python3 bank/index.py`.","",f"Totals: app {len(app)} vignettes · bank {len(bank)} vignettes · {len(app)+len(bank)} in all. Plus {stand} standalone questions (no vignette text) in `bank/standalone_questions.json`.","","| # | Reading | App | Bank | Total |","|---|---|---|---|---|"]
for n in range(1,43):
    a=[x for x in rows.get(n,[]) if x[0]=='app'];b=[x for x in rows.get(n,[]) if x[0]=='bank']
    out.append(f"| {n} | {nr.get(str(n),'')} | {len(a)} | {len(b)} | {len(a)+len(b)} |")
out+=["","## Where each vignette is",""]
for n in range(1,43):
    xs=rows.get(n,[])
    if not xs: continue
    out.append(f"**{n} {nr.get(str(n),'')}**: "+'; '.join(f"{i} ({s}, {q}Q)" for s,i,t,q in xs))
open(os.path.join(ROOT,'bank','INDEX.md'),'w').write('\n'.join(out)+'\n')
print('\n'.join(out[:60]))
