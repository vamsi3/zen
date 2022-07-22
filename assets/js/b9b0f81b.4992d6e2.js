"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[7559],{9613:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>m});var n=r(9496);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||l;return r?n.createElement(f,i(i({ref:e},u),{},{components:r})):n.createElement(f,i({ref:e},u))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1548:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(2081),a=(r(9496),r(9613));const l={title:"Treap",sidebar_label:"Treap"},i=void 0,o={unversionedId:"cp/data-structures/treap",id:"cp/data-structures/treap",title:"Treap",description:"Treap with Implicit Key",source:"@site/docs/cp/data-structures/treap.mdx",sourceDirName:"cp/data-structures",slug:"/cp/data-structures/treap",permalink:"/zen/cp/data-structures/treap",draft:!1,editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cp/data-structures/treap.mdx",tags:[],version:"current",lastUpdatedAt:1658505721,formattedLastUpdatedAt:"Jul 22, 2022",frontMatter:{title:"Treap",sidebar_label:"Treap"},sidebar:"cp",previous:{title:"Tournament Tree",permalink:"/zen/cp/data-structures/tournament-tree"},next:{title:"Tree",permalink:"/zen/cp/data-structures/tree"}},p={},c=[{value:"Treap with Implicit Key",id:"treap-with-implicit-key",level:2}],u={toc:c};function s(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"namespace Treap {\n  std::mt19937 gen(std::chrono::steady_clock::now().time_since_epoch().count());\n  std::uniform_int_distribution<uint32_t> dis;\n\n  class Node {\n  public:\n    int32_t k; uint32_t p;\n    Node *l = nullptr, *r = nullptr;\n    ~Node() { delete l; delete r; }\n  };\n\n  std::tuple<Node*, Node*> split(Node* t, int32_t k) {\n    if (!t)             return {nullptr, nullptr};\n    if (k < t->k)       { auto [tl, tr] = split(t->l, k); t->l = tr; return {tl, t}; }\n    else                { auto [tl, tr] = split(t->r, k); t->r = tl; return {t, tr}; }\n  }\n\n  Node* merge(Node* tl, Node* tr) {\n    if (!tl)            return tr;\n    if (!tr)            return tl;\n    if (tl->p > tr->p)  { tl->r = merge(tl->r, tr); return tl; }\n    else                { tr->l = merge(tr->l, tl); return tr; }\n  }\n\n  void insert(Node* &t, int32_t k) {\n    uint32_t p = dis(gen);\n    if (!t)             { t = new Node {k, p}; return; }\n    if (p > t->p)       { auto [tl, tr] = split(t, k); t = new Node {k, p, tl, tr}; }\n    else                { insert(k < t->k ? t->l : t->r, k); }\n  }\n\n  void erase(Node* &t, int32_t k) {\n    if (t->k == k)      { t = merge(t->l, t->r); return; }\n    else                { erase(k < t->k ? t->l : t->r, k); }\n  }\n};\n")),(0,a.kt)("h2",{id:"treap-with-implicit-key"},"Treap with Implicit Key"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"namespace TreapImplicitKey {\n  std::mt19937 gen(std::chrono::steady_clock::now().time_since_epoch().count());\n  std::uniform_int_distribution<uint32_t> dis;\n\n  class Node {\n  public:\n    uint32_t p;\n    Node *l = nullptr, *r = nullptr;\n    ~Node() { delete l; delete r; }\n  };\n\n  std::tuple<Node*, Node*> split(Node* t, uint32_t k) {\n    if (!t) return {nullptr, nullptr};\n    // TODO:\n  }\n}\n")))}s.isMDXComponent=!0}}]);