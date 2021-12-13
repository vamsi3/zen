"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[2228],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},990:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={title:"Object Oriented Programming"},s=void 0,l={unversionedId:"cpp/oop",id:"cpp/oop",title:"Object Oriented Programming",description:"A derived class must specify the class(es) from which it intends to inherit. It does so in a class derivation list, which is a colon followed by a comma-separated list of base classes each of which may have an optional access specifier.",source:"@site/docs/cpp/oop.mdx",sourceDirName:"cpp",slug:"/cpp/oop",permalink:"/zen/cpp/oop",editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cpp/oop.mdx",tags:[],version:"current",lastUpdatedAt:1639367548,formattedLastUpdatedAt:"12/13/2021",frontMatter:{title:"Object Oriented Programming"},sidebar:"cpp",previous:{title:"lvalues & rvalues + Move Semantics & rvalue References",permalink:"/zen/cpp/lvalue-rvalue"},next:{title:"Attribute specifier sequence",permalink:"/zen/cpp/language/attribute-specifier-sequence"}},p=[],u={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A derived class must specify the class(es) from which it intends to inherit. It does so in a class derivation list, which is a colon followed by a comma-separated list of base classes each of which may have an optional access specifier."),(0,a.kt)("p",null,"In C++, dynamic binding (sometimes known as run-time binding) happens when a virtual function is called through a reference (or a pointer) to a base class."),(0,a.kt)("p",null,"Any non",(0,a.kt)("inlineCode",{parentName:"p"},"static")," member function, other than a constructor, may be virtual."),(0,a.kt)("p",null,"The virtual keyword appears only on the declaration inside the class and may not be used on a function definition that appears outside the class body."),(0,a.kt)("p",null,"A function that is declared as virtual in the base class is implicitly virtual in the derived classes as well."))}f.isMDXComponent=!0}}]);