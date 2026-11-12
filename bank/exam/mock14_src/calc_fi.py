import math
# 2-year bond, coupon 3.0% = 2y par yield, par curve 1y 2.0%, 2y 3.0% (annual pay)
z1=0.02; z2=((103)/(100-3/1.02))**0.5-1
df1=1/(1+z1); df2=1/(1+z2)**2
f11=(1+z2)**2/(1+z1)-1
exp1=3+103/(1+f11); exp2=103
h=0.018; pd1=h; pd2=(1-h)*h; rec=0.40; lgd=1-rec
cva=df1*pd1*lgd*exp1+df2*pd2*lgd*exp2
fv=100-cva
# ytm of fv with 3% coupon 2y
lo,hi=0,0.2
for _ in range(100):
    y=(lo+hi)/2; p=3/(1+y)+103/(1+y)**2
    if p>fv: lo=y
    else: hi=y
print(z2,f11,exp1,pd1,pd2,cva,fv,y,(y-0.03)*1e4)
# alt: recovery 40% -> lgd; options traps
cvaB=df1*pd1*rec*exp1+df2*pd2*rec*exp2   # uses recovery instead of LGD
cvaC=df1*pd1*lgd*100+df2*pd2*lgd*100        # flat exposure 100
print(cva,cvaB,cvaC)
