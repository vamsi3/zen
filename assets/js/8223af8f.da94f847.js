"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[2228],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2014:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(2081),a=(n(9496),n(9613));const o={title:"Object Oriented Programming"},i=void 0,c={unversionedId:"cpp/oop",id:"cpp/oop",title:"Object Oriented Programming",description:"A derived class must specify the class(es) from which it intends to inherit. It does so in a class derivation list, which is a colon followed by a comma-separated list of base classes each of which may have an optional access specifier.",source:"@site/docs/cpp/oop.mdx",sourceDirName:"cpp",slug:"/cpp/oop",permalink:"/zen/cpp/oop",draft:!1,editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cpp/oop.mdx",tags:[],version:"current",lastUpdatedAt:1658505721,formattedLastUpdatedAt:"Jul 22, 2022",frontMatter:{title:"Object Oriented Programming"},sidebar:"cpp",previous:{title:"lvalues & rvalues + Move Semantics & rvalue References",permalink:"/zen/cpp/lvalue-rvalue"}},s={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A derived class must specify the class(es) from which it intends to inherit. It does so in a class derivation list, which is a colon followed by a comma-separated list of base classes each of which may have an optional access specifier."),(0,a.kt)("p",null,"In C++, dynamic binding (sometimes known as run-time binding) happens when a virtual function is called through a reference (or a pointer) to a base class."),(0,a.kt)("p",null,"Any non",(0,a.kt)("inlineCode",{parentName:"p"},"static")," member function, other than a constructor, may be virtual."),(0,a.kt)("p",null,"The virtual keyword appears only on the declaration inside the class and may not be used on a function definition that appears outside the class body."),(0,a.kt)("p",null,"A function that is declared as virtual in the base class is implicitly virtual in the derived classes as well."))}u.isMDXComponent=!0}}]);