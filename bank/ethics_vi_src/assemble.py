import json,re,importlib
S=json.load(open('src_rows.json'))
NR=[]
for i in range(1,13):
    m=importlib.import_module('nr%d'%i); NR+=m.NR
print(len(NR))
# dedupe by scenario text
seen=set();out=[]
for r in NR:
    k=r[2][:50].lower()
    if k in seen: print('dup',r[2][:60]);continue
    seen.add(k);out.append(r)
NR=out
RULE_PREF=("Recommended","When does","What ","Whose","Order of","Exceptions","Using the","Why ","Research-process","Recommendation changes","Regulator can","Required","Firm must tell","Orders","Referring to","Staff must","Statement","Compliance manual","Member learns","Firm changes","Firm reviews","Record policy","Records kept","Prospect asks","Brief presentation","Issuer-paid","Using a machine")
def verdict(v,sc):
    if v=='V':return 'VIOLATION'
    if v=='OK':return 'OK'
    if v=='N':return 'RULE'
    return 'RULE' if sc.startswith(RULE_PREF) else 'DO / REQUIRED'
names={s['std'].split()[0]:s['std'] for s in S}
by={}
for std,v,sc,why in NR:
    assert std in names,std
    by.setdefault(std,[]).append([verdict(v,sc),sc,why])
for s in S: s['new']=by.get(s['std'].split()[0],[])
json.dump(S,open('merged.json','w'),ensure_ascii=False,indent=0)
print(sum(len(x) for x in by.values()))
for s in S: print(s['std'].split()[0],len(s['rows']),'+',len(s['new']))
