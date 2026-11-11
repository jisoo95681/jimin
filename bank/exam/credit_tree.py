import math
def bis(f,a,b):
    for _ in range(200):
        m=(a+b)/2
        if f(a)*f(m)<=0:b=m
        else:a=m
    return (a+b)/2
def par_curve(c1,c2,c3):
    d1=1/(1+c1)
    d2=(1-c2*d1)/(1+c2)
    d3=(1-c3*(d1+d2))/(1+c3)
    return [d1,d2,d3]
def calib(c1,c2,c3,sig):
    d=par_curve(c1,c2,c3); r0=c1
    k=math.exp(2*sig)
    # year-2 par: 100 = c2/(1+r0) + 100+c2 /... via tree values
    def val2(r1l,c):
        r1u=r1l*k
        v=lambda r:(100+c)/(1+r)
        return (c+0.5*(v(r1u)+v(r1l)))/(1+r0)
    r1l=bis(lambda x:val2(x,c2*100)-100,0.0001,0.5)
    def val3(r2l):
        r1u=r1l*k
        r2=[r2l,r2l*k,r2l*k*k]  # bottom, middle, top
        v2=lambda r:(100+c3*100)/(1+r)
        # node t1 lower: successors bottom, middle; upper: middle, top
        v1l=(c3*100+0.5*(v2(r2[0])+v2(r2[1])))/(1+r1l)
        v1u=(c3*100+0.5*(v2(r2[1])+v2(r2[2])))/(1+r1l*k)
        return (c3*100+0.5*(v1l+v1u))/(1+r0)
    r2l=bis(lambda x:val3(x)-100,0.0001,0.5)
    return d,r0,r1l,r1l*k,[r2l,r2l*k,r2l*k*k]
def vnd_cva(c1,c2,c3,sig,cpn,rec,h):
    d,r0,r1l,r1u,r2=calib(c1,c2,c3,sig)
    cp=cpn*100
    v2=lambda r:(100+cp)/(1+r)
    nodes2=[(100+cp)]*3
    v1l=(cp+0.5*(v2(r2[0])+v2(r2[1])))/(1+r1l)  # value at t=1 (ex coupon paid at t=1? this is value after t1 coupon: pv of future)
    v1u=(cp+0.5*(v2(r2[1])+v2(r2[2])))/(1+r1u)
    v0=(cp+0.5*(v1l+v1u))/(1+r0)
    # expected exposures incl. coupon at that date
    e1=0.5*(v1l+v1u)+cp
    e2=0.25*v2(r2[0])+0.5*v2(r2[1])+0.25*v2(r2[2])+cp
    e3=100+cp
    pd=[h,(1-h)*h,(1-h)**2*h]
    lgd=1-rec
    cva=sum(d[i]*pd[i]*lgd*e for i,e in enumerate([e1,e2,e3]))
    return dict(tree=(r0,r1u,r1l,r2[2],r2[1],r2[0]),vnd=v0,e=(e1,e2,e3),pd=pd,d=d,cva=cva)
def ytm(price,cpn):
    return bis(lambda y:cpn*100/(1+y)+cpn*100/(1+y)**2+(100+cpn*100)/(1+y)**3-price,0.0001,0.5)
if __name__=='__main__':
    r=vnd_cva(.025,.033,.04,.15,.04,.25,.015)
    print(r); fv=r['vnd']-r['cva']; print(fv,ytm(fv,.04))
    for lgd in (.5,1.0):
        rr=vnd_cva(.025,.033,.04,.15,.04,1-lgd,.015); print(lgd,ytm(rr['vnd']-rr['cva'],.04)-.04)
