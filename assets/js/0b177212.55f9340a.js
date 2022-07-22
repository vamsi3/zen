"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[167],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},80:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(2081),o=(r(9496),r(9613));const i={title:"Sorting",sidebar_label:"Sorting"},a=void 0,s={unversionedId:"cp/algorithms/sort",id:"cp/algorithms/sort",title:"Sorting",description:"- Stable sort means that elements with equal value are not disturbed of their relative positions after sorting.",source:"@site/docs/cp/algorithms/sort.mdx",sourceDirName:"cp/algorithms",slug:"/cp/algorithms/sort",permalink:"/zen/cp/algorithms/sort",draft:!1,editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cp/algorithms/sort.mdx",tags:[],version:"current",lastUpdatedAt:1658505721,formattedLastUpdatedAt:"Jul 22, 2022",frontMatter:{title:"Sorting",sidebar_label:"Sorting"},sidebar:"cp",previous:{title:"std::merge",permalink:"/zen/cp/algorithms/merge"},next:{title:"Subset Transforms (DP)",permalink:"/zen/cp/algorithms/subset-transforms"}},l={},c=[{value:"Insertion Sort",id:"insertion-sort",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("u",null,"Stable sort")," means that elements with equal value are not disturbed of their relative positions after sorting.")),(0,o.kt)("h2",{id:"insertion-sort"},"Insertion Sort"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'namespace Algorithm {\n    void insertion_sort(std::vector<int>& a) {\n        int n = a.size();\n        for (int i = 1; i < n; ++i) {\n            int x = std::move(a[i]);\n            int j = i - 1;\n            while (j >= 0 && a[j] > x) {\n                a[j + 1] = std::move(a[j]);\n                --j;\n            }\n            a[j + 1] = std::move(x);\n        }\n    }\n}\n\nint main() {\n    vector<int> v = {5, 2, 6, 1, 3, 1, 3, 2, 3, 4};\n    Algorithm::insertion_sort(v);\n    std::ranges::copy(v, std::ostream_iterator<int>(std::cout, " "));\n}\n')))}u.isMDXComponent=!0}}]);