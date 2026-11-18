import re,json
from collections import defaultdict
t=open('bbox.html').read()
pages=re.split(r'<page ',t)[1:]
words=[]
for pi,p in enumerate(pages):
    for m in re.finditer(r'<word xMin="([\d.]+)" yMin="([\d.]+)" xMax="([\d.]+)" yMax="([\d.]+)">(.*?)</word>',p):
        x0,y0,x1,y1=map(float,m.groups()[:4]);import html
        words.append((pi,y0,x0,x1,html.unescape(m.group(5))))
# x histogram of word starts for column detection
import collections
xs=collections.Counter(round(w[2]) for w in words if w[0]>0)
print(sorted(xs.items(),key=lambda a:-a[1])[:25])
rows=[];sections=[];cur=None
bypage=defaultdict(list)
for w in words: bypage[w[0]].append(w)
for pi in sorted(bypage):
    ws=sorted(bypage[pi],key=lambda w:(round(w[1]),w[2]))
    # group into lines by y
    lines=[];
    for w in ws:
        if lines and abs(lines[-1][0]-w[1])<3: lines[-1][1].append(w)
        else: lines.append([w[1],[w]])
    for y,l in lines:
        l.sort(key=lambda w:w[2])
        txt=' '.join(w[4] for w in l)
        if pi==0 and (y<80): continue
        if re.match(r'^(I|II|III|IV|V|VI|VII)\([A-E]\) ',txt) and l[0][2]<60 and len(l)>1 and not any(w[2]>115 for w in l[:1]) and l[0][2]<50:
            cur=dict(std=txt,rows=[]);sections.append(cur);continue
        if cur is None: continue
        v=' '.join(w[4] for w in l if w[2]<118)
        s=' '.join(w[4] for w in l if 118<=w[2]<468)
        c=' '.join(w[4] for w in l if w[2]>=468)
        if v:
            cur['rows'].append([v,s,c])
        elif cur['rows']:
            r=cur['rows'][-1]; r[1]=(r[1]+' '+s).strip(); r[2]=(r[2]+' '+c).strip()
json.dump(sections,open('src_rows.json','w'),ensure_ascii=False,indent=0)
for s in sections: print(s['std'],len(s['rows']))
print(sum(len(s['rows']) for s in sections))
