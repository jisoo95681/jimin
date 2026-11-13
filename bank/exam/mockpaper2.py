import json,re
src=[v for v in json.load(open('/home/user/jimin/bank/pasted_vignettes.json')) if v['id'].startswith('m2-')]
def topic(r):
    r=r[0]
    return ('Quant' if r<=4 else 'Econ' if r==5 else 'FSA' if r<=12 else 'Corp' if r<=16 else 'Equity' if r<=22 else 'FI' if r<=27 else 'Deriv' if r<=29 else 'Alt' if r in(30,31,32,33,38,39) else 'Ethics')
TOP={'m2-4':'PM'}
def isnum(s): return bool(re.fullmatch(r'[\s$–\-+]*[\d,\.]+\s*%?',s))
def body(v):
    L=[l for l in v['body'].split('\n') if 'Expand / Collapse Extended Description' not in l]
    if v['id']=='m2-11':
        i=L.index(' \t'); L[i:i+7]=[' | Crude Oil—Brent ($ per barrel) | Cocoa ($ per metric tonne) | Gold ($ per troy ounce)']
        L[i]='# '+L[i]
    out=[];prev_tab=False
    for l in L:
        if '\t' in l:
            c=[x.strip() for x in l.split('\t')]
            hdr=(not prev_tab) and (c[0]=='' or not any(isnum(x) for x in c[1:]))
            if not prev_tab and v['id']=='m2-6' and c[0]=='Interest cost': hdr=False
            out.append(('# ' if hdr else '')+' | '.join(c)); prev_tab=True
        else:
            out.append(l); prev_tab=l.startswith(('# ',)) or ' | ' in l
    return '\n'.join(out)
vig=[];key=''
for v in src:
    qs=[]
    for q in v['questions']:
        a='ABC'.index(q['answer']); key+=q['answer']
        qs.append({'q':q['q'],'options':q['options'],'answer':a,'why':q['why']})
    vig.append({'topic':TOP.get(v['id'],topic(v['readings'])),'body':body(v),'questions':qs})
st={'id':'mockp2','rev':1,'resetHl':[],'title':'CFA Institute Mock Paper 2 (real)','kind':'mock','minutes':132,
 'desc':'The real CFA Institute mock paper 2: vignettes and questions exactly as published (44 questions, 132 minutes).','vignettes':vig}
json.dump({'set':st,'hints':{},'key':key},open('mockpaper2.json','w'),ensure_ascii=False,indent=1)
print(key,len(key))
for v in vig: print(v['topic'])
