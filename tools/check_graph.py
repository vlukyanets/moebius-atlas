"""Ad-hoc content check: ids resolve, relation is acyclic, transitively reduced,
and prerequisites never sit in a later grade than the topic that needs them."""
import os,re,sys,collections
D='src/content/en'
T={}
for f in sorted(os.listdir(D)):
    s=open(os.path.join(D,f),encoding='utf-8').read()
    fm=s.split('---')[1]
    m=dict(re.findall(r'^(\w+):\s*(.*)$',fm,re.M))
    req=[]
    r=re.search(r'requires: \[([^\]]*)\]',fm)
    if r: req=[x.strip() for x in r.group(1).split(',') if x.strip()]
    T[f[:-3]]=dict(track=m.get('track','other'),grade=m.get('grade'),
                   subject=m.get('subject','geometry'),tag=m.get('tag'),req=req,
                   title=m.get('title',''))
err=[]
for i,t in T.items():
    for p in t['req']:
        if p not in T: err.append(f'{i}: unknown prereq {p}')
        elif p==i: err.append(f'{i}: self-loop')
# uk files without en
for f in os.listdir('src/content/uk'):
    if f[:-3] not in T: err.append(f'uk/{f}: no English counterpart')
# cycles
color={}
def dfs(u,stack):
    color[u]=1
    for v in T[u]['req']:
        if v not in T: continue
        if color.get(v)==1: err.append('cycle: '+' -> '.join(stack+[u,v]))
        elif not color.get(v): dfs(v,stack+[u])
    color[u]=2
for i in T:
    if not color.get(i): dfs(i,[])
# transitive reduction: edge i->p redundant if p reachable from another prereq
reach={}
def R(u):
    if u in reach: return reach[u]
    reach[u]=set()
    s=set()
    for v in T[u]['req']:
        if v in T: s|={v}|R(v)
    reach[u]=s
    return s
for i,t in T.items():
    for p in t['req']:
        others=set()
        for q in t['req']:
            if q!=p and q in T: others|=R(q)
        if p in others: err.append(f'redundant edge {i} -> {p}')
# grade order
gr=lambda x: int(T[x]['grade']) if T[x]['grade'] else None
for i,t in T.items():
    a=gr(i)
    for p in t['req']:
        if p not in T: continue
        b=gr(p)
        if a and b and b>a: err.append(f'grade inversion: {i} (g{a}) requires {p} (g{b})')
    if t['track']=='school':
        for p in t['req']:
            if p in T and T[p]['track']!='school':
                err.append(f'track inversion: school {i} requires {T[p]["track"]} {p}')
    if t['track']=='school' and not t['grade']: err.append(f'{i}: school topic without grade')
    if t['track']!='school' and t['grade']: err.append(f'{i}: non-school topic with grade')
# orphans (no prereqs) report only
roots=[i for i,t in T.items() if not t['req']]
print(f'{len(T)} topics, {sum(len(t["req"]) for t in T.values())} edges, {len(roots)} roots')
for e in err: print('ERR', e)
print('errors:', len(err))
sys.exit(1 if err else 0)
