"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[190],{7942:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(959);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,h=u["".concat(p,".").concat(d)]||u[d]||s[d]||o;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m[u]="string"==typeof e?e:a,i[1]=m;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5478:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>m,toc:()=>c});var n=r(1163),a=(r(959),r(7942));const o={title:"Number Theory",sidebar_label:"Number Theory"},i=void 0,m={unversionedId:"cp/math/number-theory",id:"cp/math/number-theory",title:"Number Theory",description:"Euclid's lemma \u2014 If a prime p divides the product ab of two integers a and b, then p must divide at least one of those integers a and b.",source:"@site/docs/cp/math/number-theory.mdx",sourceDirName:"cp/math",slug:"/cp/math/number-theory",permalink:"/zen/cp/math/number-theory",draft:!1,editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cp/math/number-theory.mdx",tags:[],version:"current",lastUpdatedAt:1677637965,formattedLastUpdatedAt:"Mar 1, 2023",frontMatter:{title:"Number Theory",sidebar_label:"Number Theory"},sidebar:"cp",previous:{title:"Number Theoretic Transform (NTT)",permalink:"/zen/cp/math/ntt"},next:{title:"Polynomial Arithmetic",permalink:"/zen/cp/math/polynomial"}},p={},c=[{value:"Euler Theorem",id:"euler-theorem",level:2}],l={toc:c},u="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Euclid's lemma")," \u2014 If a prime ",(0,a.kt)("em",{parentName:"p"},"p")," divides the product ",(0,a.kt)("em",{parentName:"p"},"ab")," of two integers ",(0,a.kt)("em",{parentName:"p"},"a")," and ",(0,a.kt)("em",{parentName:"p"},"b"),", then ",(0,a.kt)("em",{parentName:"p"},"p")," must divide at least one of those integers ",(0,a.kt)("em",{parentName:"p"},"a")," and ",(0,a.kt)("em",{parentName:"p"},"b"),"."),(0,a.kt)("h2",{id:"euler-theorem"},"Euler Theorem"),(0,a.kt)("p",null,"Proof \u2014 An interesting proof comes from the direction of Group Theory. Assume we start from 1 and keep multiplying a. For some k, a^k = 1 mod n, and thus a cycle is formed. Now, start with some other value b, and keep multiplying a. Finally b",(0,a.kt)("em",{parentName:"p"},"a^k = 1 mod n. So, again we get a cycle of length k. One we no more have co-prime remainders modulo n, we can see that there are maybe some c such cycles each with length k which are completely disjoint. So, we conclude c ")," k = phi(n). But since a^k = 1 mod n, we get a ^ phi(n) = 1 mod n. QED."))}s.isMDXComponent=!0}}]);