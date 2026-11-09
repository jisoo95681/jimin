V=[]
def add(topic,body,qs): V.append(dict(topic=topic,body=body.strip(),questions=qs))
def Q(q,correct,wrong,why,fixed=False): return dict(q=q,opts=[correct]+wrong,why=why,fixed=fixed)
def f2(x): return f"{x:,.2f}"
def f0(x): return f"{x:,.0f}"
def pct(x,d=2): return f"{x*100:.{d}f}%"
