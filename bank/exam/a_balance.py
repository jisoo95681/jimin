# Break runs of the same answer letter (>=4) and rebalance by reordering options of questions whose explanation can be re-lettered safely.
import json,re,random
R=random.SystemRandom()
def relettered(q,perm):
    """return new (options, answer, why) with options reordered by perm (new i = old perm[i]) or None if unsafe"""
    why=q['why']; opts=[q['options'][i] for i in perm]; a=perm.index(q['answer'])
    # style 1: "A. ...\nB. ...\nC. ..." lines
    parts=re.split(r'(?m)^([ABC])\. ',why)
    if len(parts)==7 and parts[1::2]==['A','B','C']:
        body=[x.strip() for x in parts[2::2]]
        if any(re.search(r'\b[ABC]\b(?![\.\w])(?= (is|are|forgets|uses|ignores|wrongly|would|has|does|applies|should))',t) for t in body): return None
        return opts,a,'\n'.join(f"{'ABC'[i]}. {body[perm[i]]}" for i in range(3))
    # style 2: "X is correct. rest" (single letter, no other bare letter refs)
    m=re.match(r'^([ABC]) is correct\.\s*(.*)$',why,re.S)
    if m:
        rest=m.group(2)
        if re.search(r'(?<![A-Za-z$€£\d\.\-])[ABC](?![A-Za-z\d\.\)])',rest) : return None
        return opts,a,f"{'ABC'[a]} is correct. {rest}"
    return None
def run(k):
    f=f'/home/user/jimin/bank/exam/mockA{k}.json'; d=json.load(open(f)); qs=[q for v in d['set']['vignettes'] for q in v['questions']]
    def key(): return ''.join('ABC'[q['answer']] for q in qs)
    def runs(s): return max(len(m.group(0)) for m in re.finditer(r'(.)\1*',s))
    best=None
    for t in range(400):
        trial=[json.loads(json.dumps(q)) for q in qs]
        for i,q in enumerate(trial):
            pass
        s=''.join('ABC'[q['answer']] for q in trial)
        for _ in range(60):
            if runs(s)<=3 and max(s.count(x) for x in 'ABC')<=18: break
            # pick a random candidate index in a long run or over-represented letter
            idx=[i for i in range(len(trial))]
            i=R.choice(idx); q=trial[i]
            perm=list(range(3)); R.shuffle(perm)
            r=relettered(q,perm)
            if r is None: continue
            q['options'],q['answer'],q['why']=r; s=''.join('ABC'[x['answer']] for x in trial)
        score=(runs(s),max(s.count(x) for x in 'ABC'))
        if best is None or score<best[0]: best=(score,trial,s)
        if score[0]<=3 and score[1]<=17: break
    trial=best[1]; n=0
    for v in d['set']['vignettes']:
        for j in range(len(v['questions'])): v['questions'][j]=trial[n]; n+=1
    d['key']=best[2]; json.dump(d,open(f,'w'),ensure_ascii=False,indent=1); print(k,best[2],best[0])
if __name__=='__main__':
    for k in (1,2,3,4): run(k)
