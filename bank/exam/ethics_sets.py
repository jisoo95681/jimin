# Ethics sessions for the Exam section (13 Nov): all 276 key-notes Ethics questions (readings 40-42) as 12 exam sessions of 23 questions.
# Vignette-based questions are put back into their vignette (22 vignettes of 4 Q + 1 of 1 Q); stand-alone ones are grouped (3-4 per group) under a one-line intro.
# Session layout: 10 sessions = 2 vignettes + 15 stand-alone, session 11 = 2 vignettes (4 Q + 1 Q) + 18 stand-alone, session 12 = 1 vignette + 19 stand-alone.
import json,re,html as H,random,collections
R=random.SystemRandom()
ETH=json.load(open('/home/user/jimin/bank/exam/ethics_keyq.json'))
def hdr(cells): return not any(re.search(r'\d',c) for c in cells[1:])
def fig_body(html):
    out=[]; inner=re.sub(r'<summary>.*?</summary>','',html,flags=re.S)
    for m in re.finditer(r'<p>(.*?)</p>|(<table.*?</table>)',inner,flags=re.S):
        if m.group(1) is not None:
            t=re.sub(r'<[^>]+>','',m.group(1)).strip()
            if t: out.append(t)
        else:
            rows=[[re.sub(r'<[^>]+>','',c).strip() for c in re.findall(r'<t[dh][^>]*>(.*?)</t[dh]>',r,flags=re.S)] for r in re.findall(r'<tr.*?</tr>',m.group(2),flags=re.S)]
            out.append('\n'.join(('# ' if i==0 and hdr(r) else '')+' | '.join(r) for i,r in enumerate(rows)))
    return H.unescape('\n\n'.join(out)).replace('listed in Question 4.','listed in the last question of this vignette.')

# The key notes' explanations refer to the ORIGINAL answer letters (the key shows the correct option first), so the letters are replaced by the content of the option.
FIX={
'kq41-02':[("Answer C is the correct choice because client brokerage commissions","The statement that commissions may be directed to pay the manager's operating expenses is the one that violates the Standards, because client brokerage commissions")],
'kq41-04':[("The statement in answer C clearly conflicts","The statement that personal transactions and holdings should not be reported to employers unless mandated clearly conflicts")],
'kq41-06':[("Answer C is thus incorrect. Answer A is incorrect because","'Was in full compliance' is thus incorrect. The option about failing to distinguish between facts and opinions is incorrect because")],
'kq41-10':[("The step listed in C will help","Minimizing the time between the decision and the dissemination will help"),("Answer A may have negative effects","Informing all people in the firm in advance may have negative effects")],
'kq41-18':[("Answer C details a course of action in which the conflict would be disclosed","Accepting the trip but disclosing its value details a course of action in which the conflict would be disclosed")],
'kq41-24':[("Answer B gives one of the two primary reasons","Helping the client evaluate possible partiality gives one of the two primary reasons"),("Answer A is incorrect because Standard VI(C)","The option about discounted service fees is incorrect because Standard VI(C)")],
'kq41-25':[("Thus, answer A is incorrect. Answer C is incorrect because","Thus, the claim that Rose cannot sell is incorrect. The claim that Rose can sell only when a client places a buy order is incorrect because")],
'kq41-26':[("Thus, answer A is inconsistent","Thus, the option that the member is eligible if enough current clients switch is inconsistent"),("Answer B is incorrect because the offer","The option that the member may not accept the employment is incorrect because the offer")],
'kq41-27':[("Answer B is incorrect because the accounts","The option to increase trading volume to meet the commission commitment is incorrect because the accounts")],
'kq41-31':[("answer A is incorrect","waiting until the next day is incorrect")],
'kq41-33':[("Answer A is incorrect because the firm","The option that GIPS allows composites to be updated on the date of large external cash flows is incorrect because the firm")],
'kq41-34':[("Thus, answer B is incorrect.","Thus, the claim that she did not violate because the files were created on her own time and computer is incorrect.")],
'kq41-35':[("Thus, answer C is incorrect.","Thus, the claim that he did not violate the Standards is incorrect.")],
'kq41-36':[("Thus, answer B is incorrect.","Thus, the claim that Hart did not violate the Standards is incorrect.")],
'kq41-38':[("Thus, answer A is incorrect. Answer C is incorrect because","Thus, the claim that Paper did not violate the Standards is incorrect. The option about including the results of his prior employer is incorrect because")],
'kq41-39':[("Answer B is incorrect because the notice","The claim that she violated the Standards by soliciting donations through the newsletter is incorrect because the notice")],
}
for q in ETH:
    for a,b in FIX.get(q['id'],[]):
        assert a in q['why'],(q['id'],a); q['why']=q['why'].replace(a,b)
    assert not re.search(r'\b(Answer|answer) [ABC]\b',q['why']),q['id']
INTRO="Ethics: Standards of Professional Conduct\nIndependent questions. Each question below stands on its own and does not depend on the others."
figs=collections.OrderedDict(); stand=[]
for q in ETH: (figs.setdefault(q['fig'],[]) if q['fig'] else stand).append(q)
vg=list(figs.values()); big=[v for v in vg if len(v)==4]; one=[v for v in vg if len(v)==1]
assert len(big)==22 and len(one)==1 and len(stand)==187
R.shuffle(big); R.shuffle(stand)
layout=[[2,15]]*10+[[2,18],[1,19]]   # [vignette groups, stand-alone]; session 11 gets the 1-question vignette as its second group
sess=[]; bi=0; si=0
for k,(nv,ns) in enumerate(layout):
    g=[]
    for j in range(nv):
        if k==10 and j==1: g.append(one[0])
        else: g.append(big[bi]); bi+=1
    s=stand[si:si+ns]; si+=ns
    sizes=[4]*(ns//4)+([ns%4] if ns%4 else [])
    if ns%4: # make the last group size 3 and keep 4s otherwise (15 = 4,4,4,3; 18 = 4,4,4,3,3; 19 = 4,4,4,4,3)
        pass
    if ns==18: sizes=[4,4,4,3,3]
    st=[]; p=0
    for z in sizes: st.append(s[p:p+z]); p+=z
    units=[('v',x) for x in g]+[('s',x) for x in st]
    R.shuffle(units); sess.append(units)
assert bi==22 and si==187
def mix(units,setno):
    letters='ABC'
    for _ in range(5000):
        qs=[q for _,u in units for q in u]; perms=[R.sample(range(3),3) for _ in qs]
        key=''.join(letters[p.index(q['a'])] for p,q in zip(perms,qs))
        c=collections.Counter(key)
        if min(c.get(l,0) for l in letters)>=6 and max(c.values())<=9 and not any(key[i]==key[i+1]==key[i+2]==key[i+3] for i in range(len(key)-3)): break
    else: raise SystemExit('no balanced key')
    vs=[]; i=0
    for kind,u in units:
        out=[]
        for q in u:
            p=perms[i]; i+=1   # p[j] = new position of original option j
            opts=[None]*3
            for j,np_ in enumerate(p): opts[np_]=q['o'][j]
            why=re.sub(r'\b(Answer|answer) ([ABC])\b',lambda m:m.group(1)+' '+letters[p[letters.index(m.group(2))]],q['why'])
            out.append(dict(q=q['q'],options=opts,answer=p[q['a']],why=why))
        vs.append(dict(topic='Ethical and Professional Standards',body=fig_body(u[0]['fig']) if kind=='v' else INTRO,questions=out))
    return vs,key
sets=[];keys={}
for n,units in enumerate(sess,1):
    vs,key=mix(units,n); nq=sum(len(v['questions']) for v in vs); nv=sum(1 for k,_ in units if k=='v'); ns=nq-sum(len(u) for k,u in units if k=='v')
    sets.append(dict(id=f'eth{n}',title=f'Ethics {n}',kind='ethics',minutes=nq*3,desc=f'{nv} vignette{"s" if nv>1 else ""} + {ns} stand-alone questions from the key notes',vignettes=vs)); keys[f'eth{n}']=key
    print(n,nq,nv,ns,key)
tot=sum(sum(len(v['questions']) for v in s['vignettes']) for s in sets); print('total',tot)
ids=[q['id'] for sess_ in sess for _,u in sess_ for q in u]; assert sorted(ids)==sorted(q['id'] for q in ETH)
json.dump(dict(sets=sets,keys=keys,sessions=[[[k,[q['id'] for q in u]] for k,u in s] for s in sess]),open('/home/user/jimin/bank/exam/ethics_sets.json','w'),ensure_ascii=False,indent=1)
