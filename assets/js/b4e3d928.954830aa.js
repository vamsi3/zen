"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[6223],{3905:function(n,t,e){e.d(t,{Zo:function(){return l},kt:function(){return v}});var i=e(7294);function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function o(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,i)}return e}function a(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach((function(t){r(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function u(n,t){if(null==n)return{};var e,i,r=function(n,t){if(null==n)return{};var e,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var c=i.createContext({}),p=function(n){var t=i.useContext(c),e=t;return n&&(e="function"==typeof n?n(t):a(a({},t),n)),e},l=function(n){var t=p(n.components);return i.createElement(c.Provider,{value:t},n.children)},f={inlineCode:"code",wrapper:function(n){var t=n.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(n,t){var e=n.components,r=n.mdxType,o=n.originalType,c=n.parentName,l=u(n,["components","mdxType","originalType","parentName"]),s=p(e),v=r,d=s["".concat(c,".").concat(v)]||s[v]||f[v]||o;return e?i.createElement(d,a(a({ref:t},l),{},{components:e})):i.createElement(d,a({ref:t},l))}));function v(n,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof n||r){var o=e.length,a=new Array(o);a[0]=s;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=n,u.mdxType="string"==typeof n?n:r,a[1]=u;for(var p=2;p<o;p++)a[p]=e[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,e)}s.displayName="MDXCreateElement"},5216:function(n,t,e){e.r(t),e.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return f}});var i=e(3117),r=e(102),o=(e(7294),e(3905)),a=["components"],u={title:"Lowest Common Ancestor",sidebar_label:"Lowest Common Ancestor"},c=void 0,p={unversionedId:"cp/graph/lca",id:"cp/graph/lca",title:"Lowest Common Ancestor",description:"Binary lifting (better way)",source:"@site/docs/cp/graph/lca.md",sourceDirName:"cp/graph",slug:"/cp/graph/lca",permalink:"/zen/cp/graph/lca",editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cp/graph/lca.md",tags:[],version:"current",lastUpdatedAt:1648309952,formattedLastUpdatedAt:"3/26/2022",frontMatter:{title:"Lowest Common Ancestor",sidebar_label:"Lowest Common Ancestor"},sidebar:"cp",previous:{title:"Implication Graph",permalink:"/zen/cp/graph/implication-graph"},next:{title:"Minimum Spanning Tree",permalink:"/zen/cp/graph/minimum-spanning-tree"}},l={},f=[{value:"Binary lifting (better way)",id:"binary-lifting-better-way",level:2},{value:"Brute Force",id:"brute-force",level:2},{value:"Binary Lifting",id:"binary-lifting",level:2}],s={toc:f};function v(n){var t=n.components,e=(0,r.Z)(n,a);return(0,o.kt)("wrapper",(0,i.Z)({},s,e,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"binary-lifting-better-way"},"Binary lifting (better way)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"const int N = 1e6 + 5;\nconst int LOG_N = 20 + 1;\n\nint in[N], ou[N], TIME = 0;\nint up[N][LOG_N];\nvector<int> g[N];\n\nvoid dfs(int u, int p) {\n  in[u] = ++TIME;\n  up[u][0] = p;\n  for (int i = 1; i < LOG_N; ++i) {\n    up[u][i] = up[up[u][i - 1]][i - 1];\n  }\n  for (auto &v : g[u]) {\n    if (v == p) continue;\n    dfs(v, u);\n  }\n  ou[u] = ++TIME;\n}\n\nint lca(int u, int v) {\n  auto is_ancestor = [&](int u, int v) {\n    return in[u] <= in[v] && ou[v] <= ou[u];\n  };\n  if (is_ancestor(u, v)) return u;\n  if (is_ancestor(v, u)) return v;\n  for (int i = LOG_N - 1; i >= 0; --i) {\n    if (!is_ancestor(up[u][i], v)) {\n      u = up[u][i];\n    }\n  }\n  return up[u][0];\n}\n\ninline void solve() {\n  int n; cin >> n;\n  for (int i = 1; i < n; ++i) {\n    int u, v; cin >> u >> v;\n    g[u].push_back(v);\n    g[v].push_back(u);\n  }\n  dfs(1, 1);\n\n  // Verification\n  for (int i = 1; i <= n; ++i) {\n    for (int j = 1; j < i; ++j) {\n      cout << j << ' ' << i << ' ' << lca(i, j) << '\\n';\n    }\n  }\n}\n\nint main() {\n  ios::sync_with_stdio(false); cin.tie(nullptr);\n  int t = 1;\n  // cin >> t;\n  for (int i = 1; i <= t; ++i) {\n    solve();\n  }\n}\n")),(0,o.kt)("h2",{id:"brute-force"},"Brute Force"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"const int N = 5e5 + 5;\nvector<int> g[N];\nint p[N], h[N];\n\nvoid dfs(int u, int pa = -1) {\n  p[u] = pa;\n  if (pa != -1) { h[u] = h[pa] + 1; }\n  for (auto &v : g[u]) if (v != pa) dfs(v, u);\n}\n\nint lca(int u, int v) {\n  if (u == v) return u;\n  if (h[u] < h[v]) swap(u, v);\n  return lca(p[u], v);\n}\n\nvoid solve() {\n  int n, q; cin >> n >> q;\n  for (int i = 0; i < n; ++i) { g[i].clear(); h[i] = 0; }\n  for (int i = 1; i < n; ++i) { int p; cin >> p; g[p].push_back(i); }\n  dfs(0);\n  while (q--) { int u, v; cin >> u >> v; cout << lca(u, v) << '\\n'; }\n}\n")),(0,o.kt)("h2",{id:"binary-lifting"},"Binary Lifting"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"const int N = 5e5 + 5;\nconst int LOG_N = 19; /* added */\nvector<int> g[N];\n// int p[N], h[N];\nint p[N][LOG_N], h[N];\n\nvoid dfs(int u, int pa = -1) {\n  p[u][0] = pa; /* diff */\n  if (pa != -1) { h[u] = h[pa] + 1; }\n  for (int i = 1; i < LOG_N; ++i) /* added */\n    if (p[u][i - 1] != -1) p[u][i] = p[p[u][i - 1]][i - 1]; /* added */\n  for (auto &v : g[u])\n    if (v != pa) dfs(v, u);\n}\n\nint lca(int u, int v) {\n  if (h[u] < h[v]) swap(u, v);\n  for (int i = LOG_N - 1; i >= 0; --i) /* added */\n    if (p[u][i] != -1 && h[p[u][i]] >= h[v]) u = p[u][i];\n  if (u == v) return u; /* moved */\n  for (int i = LOG_N - 1; i >= 0; --i) /* added */\n    if (p[u][i] != p[v][i]) { u = p[u][i]; v = p[v][i]; }\n  return p[u][0]; /* diff */\n}\n\nvoid solve() {\n  int n, q; cin >> n >> q;\n  for (int i = 0; i < n; ++i) { g[i].clear(); h[i] = 0;\n    for (int j = 0, k = 1; k < n; ++j, k <<= 1) p[i][j] = -1; } /* added */\n  for (int i = 1; i < n; ++i) { int p; cin >> p; g[p].push_back(i); }\n  dfs(0);\n  while (q--) { int u, v; cin >> u >> v; cout << lca(u, v) << '\\n'; }\n}\n\n")))}v.isMDXComponent=!0}}]);