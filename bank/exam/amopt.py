def tree(S0,K,u,d,r,kind):
    q=(1+r-d)/(u-d)
    S=lambda i,j: S0*u**i*d**(j-i)   # i ups in j steps
    ex=lambda s: max(s-K,0) if kind=='call' else max(K-s,0)
    T=[ex(S(i,2)) for i in range(3)]               # i=0 dd,1 ud,2 uu
    cont1=[(q*T[i+1]+(1-q)*T[i])/(1+r) for i in range(2)]   # i=0 down node, 1 up node
    ex1=[ex(S(i,1)) for i in range(2)]
    V1=[max(cont1[i],ex1[i]) for i in range(2)]
    cont0=(q*V1[1]+(1-q)*V1[0])/(1+r); ex0=ex(S0); V0=max(cont0,ex0)
    # European
    E1=cont1; E0=(q*E1[1]+(1-q)*E1[0])/(1+r)
    return dict(q=q,T=T,cont1=cont1,ex1=ex1,V1=V1,cont0=cont0,ex0=ex0,V0=V0,E0=E0,S1=[S(0,1),S(1,1)],S2=[S(0,2),S(1,2),S(2,2)])
if __name__=='__main__':
    # put search
    best=[]
    for S0 in (40,45,50,60,70,75,80):
      for K in (S0+2,S0+4,S0+5,S0+6,S0+8,S0+10):
        for u,d in ((1.20,0.85),(1.25,0.80),(1.15,0.85),(1.20,0.80),(1.30,0.80),(1.10,0.90),(1.18,0.86)):
          for r in (0.02,0.03,0.04,0.05):
            t=tree(S0,K,u,d,r,'put')
            if 0<=t['q']<=1 and t['ex1'][0]>t['cont1'][0]+0.3 and t['V0']-t['E0']>0.3:
                # distractor: p=0.5
                best.append((S0,K,u,d,r,round(t['V0'],4),round(t['E0'],4)))
    print(len(best)); 
    for b in best[:12]: print(b)
