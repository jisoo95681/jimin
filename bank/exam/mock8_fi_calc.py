import math
def bis(f,a,b):
    fa=f(a)
    for _ in range(200):
        m=(a+b)/2; fm=f(m)
        if (fa<0)==(fm<0): a,fa=m,fm
        else: b=m
    return (a+b)/2
p=[0.03,0.45,5.60,84.87,6.80,1.90,0.35]; sp=[0.50,0.80,1.00,1.35,3.10,6.00,9.00]
md=6.92; ytm=4.80
tot=sum(pi/100*(-md*(si-1.35)/100) for pi,si in zip(p,sp))*100
print('sum%',sum(p),'price chg',tot,'exp ret',ytm+tot,'abs',ytm+abs(tot))
par=[0.025,0.033,0.040]; df=[]
for n,c in enumerate(par,1):
    df.append((1-c*sum(df))/(1+c))
spot=[d**(-1/(i+1))-1 for i,d in enumerate(df)]
print('df',[round(x,6) for x in df],'spot',[round(x*100,4) for x in spot],'fwd',df[0]/df[1]-1,df[1]/df[2]-1)
s=0.15; r0=par[0]; k=math.exp(2*s)
def z2(r1d): return 0.5*(1/(1+r1d*k)+1/(1+r1d))/(1+r0)
r1d=bis(lambda x:z2(x)-df[1],1e-4,0.2); r1=[r1d*k,r1d]
def z3(r2dd):
    r2=[r2dd*k*k,r2dd*k,r2dd]; v2=[1/(1+r) for r in r2]
    a=0.5*(v2[0]+v2[1])/(1+r1[0]); b=0.5*(v2[1]+v2[2])/(1+r1[1]); return 0.5*(a+b)/(1+r0)
r2dd=bis(lambda x:z3(x)-df[2],1e-4,0.3); r2=[r2dd*k*k,r2dd*k,r2dd]
print('tree r1',[round(x*100,4) for x in r1],'r2',[round(x*100,4) for x in r2])
cpn=4.0
v2=[(100+cpn)/(1+r)+cpn for r in r2]
v1=[0.5*(v2[0]+v2[1])/(1+r1[0])+cpn, 0.5*(v2[1]+v2[2])/(1+r1[1])+cpn]
v0=0.5*(v1[0]+v1[1])/(1+r0)
print('v2',v2,'v1',v1,'VND',v0)
E1=0.5*(v1[0]+v1[1]); E2=0.25*v2[0]+0.5*v2[1]+0.25*v2[2]; E3=100+cpn
pod=0.015; lgd=0.75
pods=[pod*(1-pod)**t for t in range(3)]
cva=sum(df[i]*pods[i]*lgd*e for i,e in enumerate([E1,E2,E3]))
print('exposures',E1,E2,E3,'pods',pods,'cva',cva)
fv=v0-cva
print('FV',fv)
def pr(y): return cpn/(1+y)+cpn/(1+y)**2+(100+cpn)/(1+y)**3
y=bis(lambda x:pr(x)-fv,0.0,0.3)
print('ytm',y*100,'spread',(y-0.04)*100)
for lg in (1,0.5):
    cv=sum(df[i]*pods[i]*lg*e for i,e in enumerate([E1,E2,E3])); fv2=v0-cv
    y2=bis(lambda x:pr(x)-fv2,0.0,0.3); print('lgd',lg,(y2-0.04)*100)
