"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[5501],{7942:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(959);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=s(n),f=a,m=l["".concat(u,".").concat(f)]||l[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[l]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8330:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(1163),a=(n(959),n(7942));const o={title:"Disjoint-set (DSU) / Union-Find",sidebar_label:"DSU / Union-Find"},i=void 0,p={unversionedId:"cp/data-structures/dsu",id:"cp/data-structures/dsu",title:"Disjoint-set (DSU) / Union-Find",description:"Notes",source:"@site/docs/cp/data-structures/dsu.mdx",sourceDirName:"cp/data-structures",slug:"/cp/data-structures/dsu",permalink:"/zen/cp/data-structures/dsu",draft:!1,editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cp/data-structures/dsu.mdx",tags:[],version:"current",lastUpdatedAt:1677637965,formattedLastUpdatedAt:"Mar 1, 2023",frontMatter:{title:"Disjoint-set (DSU) / Union-Find",sidebar_label:"DSU / Union-Find"},sidebar:"cp",previous:{title:"Data Structures",permalink:"/zen/category/data-structures"},next:{title:"Fenwick Tree / BIT",permalink:"/zen/cp/data-structures/fenwick-tree"}},u={},s=[{value:"Notes",id:"notes",level:2}],c={toc:s},l="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"namespace DSU {\n    /**\n    * @brief: vector `p` contains -(size of tree) if p is a  root else ID of parent in tree.\n    */\n    class DSU {\n    public:\n        vector<int> p;\n\n        DSU(int32_t n) { p.assign(n, -1); }\n\n        int root(int32_t v) { return (p[v] < 0) ? v : p[v] = root(p[v]); }\n        bool same(int32_t u, int32_t v) { return root(u) == root(v); }\n\n        /**\n        * @return: `true` if u, v are not already in same tree.\n        */\n        inline bool join(int32_t u, int32_t v) {\n            if ((u = root(u)) == (v = root(v))) return false;\n            if (p[u] > p[v]) swap(u, v);\n            p[u] += p[v]; p[v] = u; return true;\n        }\n    };\n}\n\n")),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The root node of the Tree contains the ",(0,a.kt)("inlineCode",{parentName:"p"},"-(size of subtree)")," . All other nodes contain ",(0,a.kt)("inlineCode",{parentName:"p"},"Parent ID"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"DSU::root")," function can also be implemented ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("u",null,"iteratively"))," as below"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"int root(int32_t v) {\n  if (p[v] < 0) return v;\n  int r = v; while (p[r] >= 0) r = p[r];\n  while (p[v] >= 0) { auto pa = p[v]; p[v] = r; v = pa; }\n  return r;\n}\n")))}d.isMDXComponent=!0}}]);