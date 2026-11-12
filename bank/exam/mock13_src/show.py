import sys; sys.path.insert(0,'/tmp/gen/m13')
from src import SRC
want=set(sys.argv[1:])
for s in SRC:
    o=s['v'].get('origin')
    if o not in want: continue
    print('=====',s['m'],s['vi'],o,s['v'].get('topic'),len(s['v']['body']))
    for i,l in enumerate(s['v']['body'].split('\n')):
        if l.strip(): print(i,l[:170].replace('\t',' ¦ '))
    for n,q in s['w']:
        print(f"--- Q{n} key {q['answer']}: {q['q'][:300]}"); [print('   ',o_[:110]) for o_ in q['options']]; print('   WHY:',str(q.get('why'))[:420].replace('\n',' | '))
