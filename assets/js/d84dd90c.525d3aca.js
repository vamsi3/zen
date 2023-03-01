"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[341],{7942:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(959);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9389:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(1163),r=(n(959),n(7942));const o={title:"Median Absolute Deviation (MAD)",sidebar_label:"Median Absolute Deviation"},i=void 0,c={unversionedId:"cp/adhoc/median-absolute-deviation",id:"cp/adhoc/median-absolute-deviation",title:"Median Absolute Deviation (MAD)",description:"1. https://math.stackexchange.com/questions/113270/the-median-minimizes-the-sum-of-absolute-deviations-the-ell-1-norm",source:"@site/docs/cp/adhoc/median-absolute-deviation.mdx",sourceDirName:"cp/adhoc",slug:"/cp/adhoc/median-absolute-deviation",permalink:"/zen/cp/adhoc/median-absolute-deviation",draft:!1,editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cp/adhoc/median-absolute-deviation.mdx",tags:[],version:"current",lastUpdatedAt:1677637965,formattedLastUpdatedAt:"Mar 1, 2023",frontMatter:{title:"Median Absolute Deviation (MAD)",sidebar_label:"Median Absolute Deviation"},sidebar:"cp",previous:{title:"Ad hoc",permalink:"/zen/category/ad-hoc"},next:{title:"Algorithms",permalink:"/zen/category/algorithms"}},l={},s=[{value:"Code",id:"code",level:2}],d={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"references",type:"note"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://math.stackexchange.com/questions/113270/the-median-minimizes-the-sum-of-absolute-deviations-the-ell-1-norm"},"https://math.stackexchange.com/questions/113270/the-median-minimizes-the-sum-of-absolute-deviations-the-ell-1-norm")))),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"int64_t median_absolute_deviation(std::span<int32_t>&& a) {\n    size_t n = a.size();\n    int64_t median = a[n / 2];\n    return accumulate(begin(a), end(a), int64_t(0),\n        [&](const int64_t& x, const int64_t& y) { return x + abs(y - median); });\n}\n")))}u.isMDXComponent=!0}}]);