"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[3523],{7942:(a,e,t)=>{t.d(e,{Zo:()=>o,kt:()=>d});var n=t(959);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function m(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var l=n.createContext({}),i=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):m(m({},e),a)),t},o=function(a){var e=i(a.components);return n.createElement(l.Provider,{value:e},a.children)},c="mdxType",h={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,r=a.originalType,l=a.parentName,o=p(a,["components","mdxType","originalType","parentName"]),c=i(t),N=s,d=c["".concat(l,".").concat(N)]||c[N]||h[N]||r;return t?n.createElement(d,m(m({ref:e},o),{},{components:t})):n.createElement(d,m({ref:e},o))}));function d(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var r=t.length,m=new Array(r);m[0]=N;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=a,p[c]="string"==typeof a?a:s,m[1]=p;for(var i=2;i<r;i++)m[i]=t[i];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},5697:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>m,default:()=>h,frontMatter:()=>r,metadata:()=>p,toc:()=>i});var n=t(1163),s=(t(959),t(7942));const r={title:"Cycle Detection in Iterated Function Values",sidebar_label:"Cycle Detection"},m=void 0,p={unversionedId:"cp/algorithms/cycle-detection",id:"cp/algorithms/cycle-detection",title:"Cycle Detection in Iterated Function Values",description:"Theory",source:"@site/docs/cp/algorithms/cycle-detection.mdx",sourceDirName:"cp/algorithms",slug:"/cp/algorithms/cycle-detection",permalink:"/zen/cp/algorithms/cycle-detection",draft:!1,editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cp/algorithms/cycle-detection.mdx",tags:[],version:"current",lastUpdatedAt:1677637965,formattedLastUpdatedAt:"Mar 1, 2023",frontMatter:{title:"Cycle Detection in Iterated Function Values",sidebar_label:"Cycle Detection"},sidebar:"cp",previous:{title:"Coordinate Compression",permalink:"/zen/cp/algorithms/coordinate-compression"},next:{title:"Hamming Code",permalink:"/zen/cp/algorithms/hamming-code"}},l={},i=[{value:"Theory",id:"theory",level:2},{value:"Floyd&#39;s algorithm",id:"floyds-algorithm",level:3},{value:"Brent&#39;s algorithm",id:"brents-algorithm",level:3},{value:"Code",id:"code",level:2}],o={toc:i},c="wrapper";function h(a){let{components:e,...t}=a;return(0,s.kt)(c,(0,n.Z)({},o,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"theory"},"Theory"),(0,s.kt)("h3",{id:"floyds-algorithm"},"Floyd's algorithm"),(0,s.kt)("p",null,"Floyd's algorithm (also called tortoise and hare algorithm) only accesses the sequence by storing and copying pointers, function evaluations, and equality tests; therefore, it qualifies as a pointer algorithm. It uses ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"\u03bb"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"\u03bc"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," operations of these types, and ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," storage space."),(0,s.kt)("h3",{id:"brents-algorithm"},"Brent's algorithm"),(0,s.kt)("p",null,"Brent's algorithm is also a pointer algorithm that uses ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"\u03bb"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"\u03bc"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," tests and function evaluations and ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," storage space. It has two advantages compared to the Floyd's algorithm: it finds the correct length ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"\u03bb")))))," of the cycle directly, rather than needing to search for it in a subsequent stage, and its steps involve only one evaluation of ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f")))))," rather than three. The number of function evaluations can never be higher than for Floyd's algorithm. Brent claims that, on average, his cycle finding algorithm runs around ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8056em",verticalAlign:"-0.0556em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"36%")))))," more quickly than Floyd's and that it speeds up the Pollard's rho algorithm by around ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8056em",verticalAlign:"-0.0556em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"24%"))))),"."),(0,s.kt)("h2",{id:"code"},"Code"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <functional>\n\nnamespace CycleDetection {\n    std::tuple<int, int> floyd(int start, std::function<int (int)> f) {\n        int a = f(start), b = f(a);\n        while (a != b) { a = f(a); b = f(f(b)); }\n\n        int mu = 0;\n        a = start;\n        while (a != b) { a = f(a); b = f(b); ++mu; }\n\n        int lambda = 0;\n        do { b = f(b); ++lambda; } while (a != b);\n\n        return {lambda, mu};\n    }\n\n    std::tuple<int, int> brent(int start, std::function<int (int)> f) {\n        int lambda = 1, power = 1;\n        int a = start, b = f(a);\n        while (a != b) {\n            if (lambda == power) { a = b; power *= 2; lambda = 0; }\n            b = f(b); ++lambda;\n        }\n\n        a = b = start;\n        for (int i = 0; i < lambda; ++i) b = f(b);\n\n        int mu = 0;\n        while (a != b) { a = f(a); b = f(b); ++mu; }\n\n        return {lambda, mu};\n    }\n}\n\n#include <iostream>\n\nint f(int x) {\n    if (x == 10) return 3;\n    return x + 1;\n}\n\nint main() {\n    auto [x, y] = CycleDetection::brent(0, f);\n    std::cout << x << ' ' << y << '\\n';\n}\n")))}h.isMDXComponent=!0}}]);