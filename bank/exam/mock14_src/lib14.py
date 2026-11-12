import json,sys,itertools,collections,random,re,copy,math
sys.path.insert(0,'/home/user/jimin/bank/exam')
from mock7_tweak import perm
V=[]
def q(stem,opts,ans,whys,hl,rule,fixed=True):
    # opts in display order; ans = index of the correct option; whys = one explanation per option (same order)
    assert len(opts)==3 and len(set(opts))==3 and len(whys)==3
    why='\n'.join(f"{'ABC'[i]}. {'Correct' if i==ans else 'Incorrect'}. {w}" for i,w in enumerate(whys))
    return dict(q=stem,options=list(opts),answer=ans,why=why,hint=dict(hl=hl,rule=rule),_fixed=fixed)
def add(topic,body,qs):
    body=body.strip()
    for x in qs:
        for h in x['hint']['hl']:
            if h.startswith('@row:'): assert any(l.lstrip('# ').split(' | ')[0].strip().lower().startswith(h[5:].lower()) for l in body.split('\n')),(topic,h)
            else: assert h in body or h in x['q'],(topic,h)
    V.append(dict(topic=topic,body=body,questions=qs))
