"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[3013],{9613:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>d});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},o=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||l[d]||i;return n?a.createElement(h,m(m({ref:t},o),{},{components:n})):a.createElement(h,m({ref:t},o))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,m=new Array(i);m[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,m[1]=p;for(var c=2;c<i;c++)m[c]=n[c];return a.createElement.apply(null,m)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8693:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>m,default:()=>l,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=n(2081),r=(n(9496),n(9613));const i={title:"Arithmetic",sidebar_label:"Arithmetic"},m=void 0,p={unversionedId:"cp/math/arithmetic",id:"cp/math/arithmetic",title:"Arithmetic",description:"Operators",source:"@site/docs/cp/math/arithmetic.mdx",sourceDirName:"cp/math",slug:"/cp/math/arithmetic",permalink:"/zen/cp/math/arithmetic",draft:!1,editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cp/math/arithmetic.mdx",tags:[],version:"current",lastUpdatedAt:1658505721,formattedLastUpdatedAt:"Jul 22, 2022",frontMatter:{title:"Arithmetic",sidebar_label:"Arithmetic"},sidebar:"cp",previous:{title:"Mathematics",permalink:"/zen/category/mathematics"},next:{title:"Chinese Remainder Theorem",permalink:"/zen/cp/math/chinese-remainder-theorem"}},s={},c=[{value:"Operators",id:"operators",level:2},{value:"Power",id:"power",level:2},{value:"Inverse",id:"inverse",level:2},{value:"Recursive",id:"recursive",level:3},{value:"Iterative",id:"iterative",level:2},{value:"Linear for range [1, n]",id:"linear-for-range-1-n",level:3}],o={toc:c};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"operators"},"Operators"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"namespace Math {\n  inline int32_t madd(int32_t a, int32_t b, int32_t m) { a += b; return (a >= m) ? (a - m) : a; }\n  inline int32_t msub(int32_t a, int32_t b, int32_t m) { a -= b; return (a >= 0) ? a : (a + m); }\n  inline int32_t mmul(int32_t a, int32_t b, int32_t m) { return static_cast<int64_t>(a) * b % m; }\n\n  inline void maddi(int32_t &a, int32_t b, int32_t m) { a += b; if (a >= m) a -= m; }\n  inline void msubi(int32_t &a, int32_t b, int32_t m) { a -= b; if (a <  0) a += m; }\n  inline void mmuli(int32_t &a, int32_t b, int32_t m) { a = static_cast<int64_t>(a) * b % m; }\n}\n")),(0,r.kt)("h2",{id:"power"},"Power"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"namespace Math {\n  int64_t pow(int64_t a, int64_t b) {\n    int64_t r = 1;\n    for (; b > 0; b >>= 1) if (b & 1) r *= a; a *= a;\n    return r;\n  }\n}\n\nnamespace Math {\n  int32_t mpow(int32_t a, int64_t b, int32_t m) {\n    int32_t r = 1;\n    for (b %= (m - 1); b > 0; b >>= 1) if (b & 1) mmuli(r, a, m); mmuli(a, a, m);\n    return r;\n  }\n}\n")),(0,r.kt)("h2",{id:"inverse"},"Inverse"),(0,r.kt)("h3",{id:"recursive"},"Recursive"),(0,r.kt)("admonition",{title:"REFERENCES",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://codeforces.com/blog/entry/23365"},"Short modular inverse - Codeforces")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"namespace Math {\n    int32_t minv(int32_t a, int32_t m) {\n        if (a <= 1) return 1;\n        return static_cast<int32_t>(m - static_cast<int64_t>(minv(m % a, a)) * m / a);\n    }\n}\n")),(0,r.kt)("h2",{id:"iterative"},"Iterative"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"namespace Math {\n  int32_t minv_iterative(int32_t a, int32_t m = MOD) {\n    int32_t g = m, r = a, x = 0, y = 1;\n    while (r != 0) {\n      int32_t q = g / r;\n      g %= r; swap(g, r);\n      x -= q * y; swap(x, y);\n    }\n    return x < 0 ? x + m : x;\n  }\n}\n")),(0,r.kt)("h3",{id:"linear-for-range-1-n"},"Linear for range ",(0,r.kt)("span",{parentName:"h3",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mopen"},"["),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},"]")))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"int main {\n  int inv[n], mod = 1000000007;\n  inv[1] = 1;\n  for (int i = 2; i <= n; ++i) {\n    inv[i] = ((mod - mod / i) * inv[mod % i]) % mod;\n  }\n}\n")))}l.isMDXComponent=!0}}]);