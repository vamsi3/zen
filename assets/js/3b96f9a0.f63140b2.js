"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[190],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=n.createContext({}),p=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),d=o,f=s["".concat(m,".").concat(d)]||s[d]||l[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},2746:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={title:"Number Theory",sidebar_label:"Number Theory"},m=void 0,p={unversionedId:"cp/math/number-theory",id:"cp/math/number-theory",isDocsHomePage:!1,title:"Number Theory",description:"Euclid's lemma \u2014 If a prime p divides the product ab of two integers a and b, then p must divide at least one of those integers a and b.",source:"@site/docs/cp/math/number-theory.mdx",sourceDirName:"cp/math",slug:"/cp/math/number-theory",permalink:"/zen/cp/math/number-theory",editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cp/math/number-theory.mdx",tags:[],version:"current",lastUpdatedAt:1631813047,formattedLastUpdatedAt:"9/16/2021",frontMatter:{title:"Number Theory",sidebar_label:"Number Theory"},sidebar:"cp",previous:{title:"NTT",permalink:"/zen/cp/math/ntt"},next:{title:"Poly [Class]",permalink:"/zen/cp/math/polynomial"}},u=[{value:"Euler Theorem",id:"euler-theorem",children:[],level:2}],l={toc:u};function s(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Euclid's lemma")," \u2014 If a prime ",(0,a.kt)("em",{parentName:"p"},"p")," divides the product ",(0,a.kt)("em",{parentName:"p"},"ab")," of two integers ",(0,a.kt)("em",{parentName:"p"},"a")," and ",(0,a.kt)("em",{parentName:"p"},"b"),", then ",(0,a.kt)("em",{parentName:"p"},"p")," must divide at least one of those integers ",(0,a.kt)("em",{parentName:"p"},"a")," and ",(0,a.kt)("em",{parentName:"p"},"b"),"."),(0,a.kt)("h2",{id:"euler-theorem"},"Euler Theorem"),(0,a.kt)("p",null,"Proof \u2014 An interesting proof comes from the direction of Group Theory. Assume we start from 1 and keep multiplying a. For some k, a^k = 1 mod n, and thus a cycle is formed. Now, start with some other value b, and keep multiplying a. Finally b",(0,a.kt)("em",{parentName:"p"},"a^k = 1 mod n. So, again we get a cycle of length k. One we no more have co-prime remainders modulo n, we can see that there are maybe some c such cycles each with length k which are completely disjoint. So, we conclude c ")," k = phi(n). But since a^k = 1 mod n, we get a ^ phi(n) = 1 mod n. QED."))}s.isMDXComponent=!0}}]);