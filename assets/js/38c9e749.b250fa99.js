"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[8880],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,c=new Array(a);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2935:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(9496),i=n(1436);const a=e=>{let{image:t,caption:n}=e;return r.createElement("figure",null,r.createElement("img",{src:(0,i.Z)(t)}),n?r.createElement("figcaption",{align:"center"},n):null)}},4660:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var r=n(2081),i=(n(9496),n(9613)),a=n(2935);const c={title:"Fenwick Tree / BIT"},o=void 0,s={unversionedId:"cp/data-structures/fenwick-tree",id:"cp/data-structures/fenwick-tree",title:"Fenwick Tree / BIT",description:"- Fenwick Tree",source:"@site/docs/cp/data-structures/fenwick-tree.mdx",sourceDirName:"cp/data-structures",slug:"/cp/data-structures/fenwick-tree",permalink:"/zen/cp/data-structures/fenwick-tree",draft:!1,editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cp/data-structures/fenwick-tree.mdx",tags:[],version:"current",lastUpdatedAt:1658505721,formattedLastUpdatedAt:"Jul 22, 2022",frontMatter:{title:"Fenwick Tree / BIT"},sidebar:"cp",previous:{title:"DSU / Union-Find",permalink:"/zen/cp/data-structures/dsu"},next:{title:"Binary Heap",permalink:"/zen/cp/data-structures/heap/binary-heap"}},l={},p=[{value:"Fenwick Tree in n-dimensions",id:"fenwick-tree-in-n-dimensions",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Name Alias",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Fenwick Tree"),(0,i.kt)("li",{parentName:"ul"},"Binary Indexed Tree (BIT)"))),(0,i.kt)("admonition",{title:"Indexing",type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Zero-based indexing: ",(0,i.kt)("inlineCode",{parentName:"li"},"x = (x & (x + 1)) - 1")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"x |= (x + 1)")),(0,i.kt)("li",{parentName:"ul"},"One-based indexing: ",(0,i.kt)("inlineCode",{parentName:"li"},"x -= (x & -x)")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"x += (x & -x)")))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Completely untested code.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"template<typename T> class FenwickTree {\nprivate:\n    std::vector<T> bit;\n\npublic:\n    FenwickTree(int32_t size) { this->reset(size); }\n    void reset(int32_t size) { bit.assign(size, 0); }\n    T sum(int32_t l, int32_t r) const { return sum(r) - sum(l - 1); }\n    \n    T sum(int32_t x) const {\n        T sum = 0;\n        for (; x >= 0; x = (x & (x + 1)) - 1) sum += bit[x];\n        return sum;\n    }\n\n    void add(int32_t x, int32_t value) {\n        int32_t n = static_cast<int32_t>(bit.size());\n        for (; x < n; x |= (x + 1)) bit[x] += value;\n    }\n};\n")),(0,i.kt)("h2",{id:"fenwick-tree-in-n-dimensions"},"Fenwick Tree in n-dimensions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"template<typename T> class FenwickTree2D {\nprivate:\n    std::vector<std::vector<T>> bit;\n\npublic:\n    FenwickTree2D(int32_t size) { this->reset(size); }\n    void reset(int32_t size) { bit.assign(size, 0); }\n    \n    T sum(int32_t a, int32_t b) const {\n        T sum = 0;\n        for (int32_t x = a; x >= 0; x = (x & (x + 1)) - 1)\n            for (int32_t y = b; y >= 0; y = (y & (y + 1)) - 1)\n                sum += bit[x][y];\n        return sum;\n    }\n\n    void add(int32_t a, int32_t b, int32_t value) {\n        int32_t n = static_cast<int32_t>(bit.size());\n        for (int32_t x = a; x < n; x |= (x + 1))\n            for (int32_t y = b; y < n; y |= (y + 1))\n                bit[x][y] += value;\n    }\n};\n")),(0,i.kt)("div",{style:{display:"flex",flexDirection:"row-reverse",float:"right"}},(0,i.kt)(a.Z,{image:"/cp/data-structures/fenwick-tree/fenwick-tree.png",mdxType:"Image"})))}d.isMDXComponent=!0}}]);