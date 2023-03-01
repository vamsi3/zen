"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[6223],{7942:(n,t,e)=>{e.d(t,{Zo:()=>l,kt:()=>v});var i=e(959);function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function a(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,i)}return e}function o(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){r(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function u(n,t){if(null==n)return{};var e,i,r=function(n,t){if(null==n)return{};var e,i,r={},a=Object.keys(n);for(i=0;i<a.length;i++)e=a[i],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)e=a[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var p=i.createContext({}),c=function(n){var t=i.useContext(p),e=t;return n&&(e="function"==typeof n?n(t):o(o({},t),n)),e},l=function(n){var t=c(n.components);return i.createElement(p.Provider,{value:t},n.children)},s="mdxType",f={inlineCode:"code",wrapper:function(n){var t=n.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(n,t){var e=n.components,r=n.mdxType,a=n.originalType,p=n.parentName,l=u(n,["components","mdxType","originalType","parentName"]),s=c(e),d=r,v=s["".concat(p,".").concat(d)]||s[d]||f[d]||a;return e?i.createElement(v,o(o({ref:t},l),{},{components:e})):i.createElement(v,o({ref:t},l))}));function v(n,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof n||r){var a=e.length,o=new Array(a);o[0]=d;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=n,u[s]="string"==typeof n?n:r,o[1]=u;for(var c=2;c<a;c++)o[c]=e[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,e)}d.displayName="MDXCreateElement"},5898:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var i=e(1163),r=(e(959),e(7942));const a={title:"Lowest Common Ancestor",sidebar_label:"Lowest Common Ancestor"},o=void 0,u={unversionedId:"cp/graph/lca",id:"cp/graph/lca",title:"Lowest Common Ancestor",description:"Binary lifting (better way)",source:"@site/docs/cp/graph/lca.md",sourceDirName:"cp/graph",slug:"/cp/graph/lca",permalink:"/zen/cp/graph/lca",draft:!1,editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cp/graph/lca.md",tags:[],version:"current",lastUpdatedAt:1677637965,formattedLastUpdatedAt:"Mar 1, 2023",frontMatter:{title:"Lowest Common Ancestor",sidebar_label:"Lowest Common Ancestor"},sidebar:"cp",previous:{title:"Implication Graph",permalink:"/zen/cp/graph/implication-graph"},next:{title:"Minimum Spanning Tree",permalink:"/zen/cp/graph/minimum-spanning-tree"}},p={},c=[{value:"Binary lifting (better way)",id:"binary-lifting-better-way",level:2},{value:"Brute Force",id:"brute-force",level:2},{value:"Binary Lifting",id:"binary-lifting",level:2}],l={toc:c},s="wrapper";function f(n){let{components:t,...e}=n;return(0,r.kt)(s,(0,i.Z)({},l,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"binary-lifting-better-way"},"Binary lifting (better way)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"const int N = 1e6 + 5;\nconst int LOG_N = 20 + 1;\n\nint in[N], ou[N], TIME = 0;\nint up[N][LOG_N];\nvector<int> g[N];\n\nvoid dfs(int u, int p) {\n  in[u] = ++TIME;\n  up[u][0] = p;\n  for (int i = 1; i < LOG_N; ++i) {\n    up[u][i] = up[up[u][i - 1]][i - 1];\n  }\n  for (auto &v : g[u]) {\n    if (v == p) continue;\n    dfs(v, u);\n  }\n  ou[u] = ++TIME;\n}\n\nint lca(int u, int v) {\n  auto is_ancestor = [&](int u, int v) {\n    return in[u] <= in[v] && ou[v] <= ou[u];\n  };\n  if (is_ancestor(u, v)) return u;\n  if (is_ancestor(v, u)) return v;\n  for (int i = LOG_N - 1; i >= 0; --i) {\n    if (!is_ancestor(up[u][i], v)) {\n      u = up[u][i];\n    }\n  }\n  return up[u][0];\n}\n\ninline void solve() {\n  int n; cin >> n;\n  for (int i = 1; i < n; ++i) {\n    int u, v; cin >> u >> v;\n    g[u].push_back(v);\n    g[v].push_back(u);\n  }\n  dfs(1, 1);\n\n  // Verification\n  for (int i = 1; i <= n; ++i) {\n    for (int j = 1; j < i; ++j) {\n      cout << j << ' ' << i << ' ' << lca(i, j) << '\\n';\n    }\n  }\n}\n\nint main() {\n  ios::sync_with_stdio(false); cin.tie(nullptr);\n  int t = 1;\n  // cin >> t;\n  for (int i = 1; i <= t; ++i) {\n    solve();\n  }\n}\n")),(0,r.kt)("h2",{id:"brute-force"},"Brute Force"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"const int N = 5e5 + 5;\nvector<int> g[N];\nint p[N], h[N];\n\nvoid dfs(int u, int pa = -1) {\n  p[u] = pa;\n  if (pa != -1) { h[u] = h[pa] + 1; }\n  for (auto &v : g[u]) if (v != pa) dfs(v, u);\n}\n\nint lca(int u, int v) {\n  if (u == v) return u;\n  if (h[u] < h[v]) swap(u, v);\n  return lca(p[u], v);\n}\n\nvoid solve() {\n  int n, q; cin >> n >> q;\n  for (int i = 0; i < n; ++i) { g[i].clear(); h[i] = 0; }\n  for (int i = 1; i < n; ++i) { int p; cin >> p; g[p].push_back(i); }\n  dfs(0);\n  while (q--) { int u, v; cin >> u >> v; cout << lca(u, v) << '\\n'; }\n}\n")),(0,r.kt)("h2",{id:"binary-lifting"},"Binary Lifting"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"const int N = 5e5 + 5;\nconst int LOG_N = 19; /* added */\nvector<int> g[N];\n// int p[N], h[N];\nint p[N][LOG_N], h[N];\n\nvoid dfs(int u, int pa = -1) {\n  p[u][0] = pa; /* diff */\n  if (pa != -1) { h[u] = h[pa] + 1; }\n  for (int i = 1; i < LOG_N; ++i) /* added */\n    if (p[u][i - 1] != -1) p[u][i] = p[p[u][i - 1]][i - 1]; /* added */\n  for (auto &v : g[u])\n    if (v != pa) dfs(v, u);\n}\n\nint lca(int u, int v) {\n  if (h[u] < h[v]) swap(u, v);\n  for (int i = LOG_N - 1; i >= 0; --i) /* added */\n    if (p[u][i] != -1 && h[p[u][i]] >= h[v]) u = p[u][i];\n  if (u == v) return u; /* moved */\n  for (int i = LOG_N - 1; i >= 0; --i) /* added */\n    if (p[u][i] != p[v][i]) { u = p[u][i]; v = p[v][i]; }\n  return p[u][0]; /* diff */\n}\n\nvoid solve() {\n  int n, q; cin >> n >> q;\n  for (int i = 0; i < n; ++i) { g[i].clear(); h[i] = 0;\n    for (int j = 0, k = 1; k < n; ++j, k <<= 1) p[i][j] = -1; } /* added */\n  for (int i = 1; i < n; ++i) { int p; cin >> p; g[p].push_back(i); }\n  dfs(0);\n  while (q--) { int u, v; cin >> u >> v; cout << lca(u, v) << '\\n'; }\n}\n\n")))}f.isMDXComponent=!0}}]);