# Mock 7 for the Exam section: 8 vignettes never used in a mock + 3 re-skins of vignettes the user missed.
import json,glob,re,sys
sys.path.insert(0,'/home/user/jimin/bank/exam')
NUMCELL=re.compile(r"^[\(\-–]?\s*[R$€£¥]?\s*[\d,]+(\.\d+)?\s*%?\)?(\s*(million|billion|bps|m|bn))?$")
YEARCELL=re.compile(r"^((19|20)\d\d(\(E\))?|20X\d|FY\s?\d{2,4})$")
def is_header(cells):
    cells=[c.strip() for c in cells[1:]]
    if not any(cells): return True
    return not [c for c in cells if c and NUMCELL.match(c) and not YEARCELL.match(c)]
def convert(body):
    out=[]
    for par in re.split(r'\n\s*\n',body):
        lines=[l.rstrip() for l in par.split('\n') if l.strip()]
        LAB=re.compile(r'^(Action|Option|Statement|Reason|Measure|Comment|Investment)\s*\d+:?$')
        fixed=[]
        for l in lines:
            if '\t' in l:
                cs=[c.strip() for c in l.split('\t') if c.strip()]
                if len(cs)==2 and LAB.match(cs[0]): l=cs[0].rstrip(':')+': '+cs[1]
            elif ' | ' in l:
                cs=[c.strip() for c in l.split(' | ')]
                m=re.match(r'^(.+?:)\s+(\S.*)$',cs[0])
                if m: cs=[m.group(1).rstrip(':'),m.group(2)]+cs[1:]
                l='\t'.join(cs)
            fixed.append(l)
        lines=fixed
        kinds=['t' if '\t' in l else 'x' for l in lines]
        for k in range(1,len(lines)-1):
            if kinds[k]=='x' and kinds[k-1]=='t' and kinds[k+1]=='t' and len(lines[k])<=70: kinds[k]='s'
        res=[];prev='x'
        for l,k in zip(lines,kinds):
            if k=='x': res.append(l.strip()); prev='x'; continue
            cells=[c.strip() for c in l.split('\t')] if k=='t' else [l.strip(),'']
            if k=='t' and cells and cells[0]=='' and len(cells)>1 and prev=='x': pass
            row=' | '.join(c if c else ' ' for c in cells)
            if ' | ' not in row: row+=' |  '
            if prev=='x' and k=='t' and is_header(cells): row='# '+row
            res.append(row); prev='t'
        out.append('\n'.join(res))
    return '\n\n'.join(out)
BANK={}
for f in glob.glob('/home/user/jimin/bank/*.json'):
    try: d=json.load(open(f))
    except Exception: continue
    if isinstance(d,list):
        for v in d:
            if isinstance(v,dict) and 'id' in v and 'questions' in v: BANK[v['id']]=v
def clean_why(w):
    parts=[p.strip() for p in re.split(r'\s\|\s(?=[ABC]\.\s)',w)]
    return '\n'.join(parts)
def real(id_,topic,ns):
    v=BANK[id_]; qs=[]
    for q in v['questions']:
        if q['n'] in ns:
            opts=[re.sub(r'^[ABC][.)]\s*','',o) for o in q['options']]
            qs.append(dict(q=q['q'],options=opts,answer='ABC'.index(q['answer']),why=clean_why(q['why'])))
    assert len(qs)==4,(id_,len(qs))
    return dict(topic=topic,group="new",body=convert(v['body']),questions=qs)
from mock7_reskin import RESKIN
VIG=[
 real('eth6-cheng','Ethical and Professional Standards',[9,10,11,12]),
 real('re-wang','Alternative Investments',[2,4,5,6]),
 real('castovan','Equity Valuation',[17,20,23,24]),
 RESKIN['larsen'],
 real('golden-island','Economics',[30,31,46,47]),
 real('d28-pak','Derivatives',[47,48,49,50]),
 RESKIN['dorado'],
 real('ca-lebedeva','Fixed Income',[24,25,26,30]),
 real('tb1-smith','Quantitative Methods',[27,28,30,31]),
 RESKIN['stratton'],
 real('mf-cheung','Portfolio Management',[9,11,12,14]),
]
MOCK=dict(id="mock7",title="Mock 7",kind="mock",minutes=132,desc="8 new vignettes + 3 re-done (names and numbers changed); scored separately",vignettes=VIG)
if __name__=='__main__':
    json.dump(MOCK,open('/home/user/jimin/bank/exam/mock7.json','w'),ensure_ascii=False,indent=1)
    print(sum(len(v['questions']) for v in VIG), ''.join('ABC'[q['answer']] for v in VIG for q in v['questions']))
