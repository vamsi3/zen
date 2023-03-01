"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[1517],{7942:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(959);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4327:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(1163),o=(r(959),r(7942));const a={title:"std::merge",sidebar_label:"std::merge"},i=void 0,c={unversionedId:"cp/algorithms/merge",id:"cp/algorithms/merge",title:"std::merge",description:"Code",source:"@site/docs/cp/algorithms/merge.mdx",sourceDirName:"cp/algorithms",slug:"/cp/algorithms/merge",permalink:"/zen/cp/algorithms/merge",draft:!1,editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cp/algorithms/merge.mdx",tags:[],version:"current",lastUpdatedAt:1677637965,formattedLastUpdatedAt:"Mar 1, 2023",frontMatter:{title:"std::merge",sidebar_label:"std::merge"},sidebar:"cp",previous:{title:"Hamming Code",permalink:"/zen/cp/algorithms/hamming-code"},next:{title:"Sorting",permalink:"/zen/cp/algorithms/sort"}},l={},p=[{value:"Code",id:"code",level:2}],s={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"namespace STL {\n    vector<int> merge(vector<int> a, vector<int> b) {\n        vector<int> c(a.size() + b.size());\n        auto x = a.begin(), y = b.begin(), z = c.begin();\n        while (z != c.end()) {\n            if (x == a.end()) { *z++ = *y++; continue; }\n            if (y == b.end()) { *z++ = *x++; continue; }\n            *z++ = (*x > *y) ? *y++ : *x++;\n        }\n        return c;\n    }\n}\n\n")))}u.isMDXComponent=!0}}]);