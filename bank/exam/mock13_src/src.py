import json
J='/home/user/jimin/bank/'
W={1:[2,4,9,10,17,24,31,32,33,43,44],2:[2,10,14,15,20,23,26,30,32,33,35,37,39],3:[9,12,15,31,35],4:[1,8,12,15,16,17,23,37,38,43,44],5:[1,6,9,29,30,31,32,33,36,38,40,43,44]}
ANS={1:"ABCCBABCBABCBBCABABACACABABBBBCABCABBAABBCAC",2:"BACBCCCABCBACACACCBACABBBACCCACACCBABCCABABA"}
SRC=[]  # (mock, vignette idx, vignette dict, [(n,q)])
for m in range(1,6):
    d=json.load(open(J+f'mock_paper{m}.json')); vs=d['vignettes'] if isinstance(d,dict) else d
    n=0
    for vi,v in enumerate(vs):
        qs=[]
        for q in v['questions']:
            n+=1
            qs.append((n,q))
        w=[(n_,q) for n_,q in qs if n_ in W[m]]
        if w: SRC.append(dict(m=m,vi=vi+1,v=v,w=w,allq=qs))
