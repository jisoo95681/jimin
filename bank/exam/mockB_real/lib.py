def Q(q,o,a,w):
    assert len(o)==3 and len(w)==3 and a in 'ABC'
    return dict(q=q,options=list(o),answer='ABC'.index(a),why='\n'.join(f"{L}. {'Correct' if L==a else 'Incorrect'}. {t.strip()}" for L,t in zip('ABC',w)))
def V(topic,body,qs):
    assert len(qs)==4
    return dict(topic=topic,body=body.strip(),questions=qs)
