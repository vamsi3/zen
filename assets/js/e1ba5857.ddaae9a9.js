"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[505],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=p(n),m=a,d=f["".concat(o,".").concat(m)]||f[m]||l[m]||i;return n?r.createElement(d,c(c({ref:t},s),{},{components:n})):r.createElement(d,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=f;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,c[1]=u;for(var p=2;p<i;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8950:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return f}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),c=["components"],u={title:"Attribute specifier sequence",sidebar_label:"Attribute specifier sequence"},o=void 0,p={unversionedId:"cpp/language/attribute-specifier-sequence",id:"cpp/language/attribute-specifier-sequence",title:"Attribute specifier sequence",description:"[[maybe_unused]]",source:"@site/docs/cpp/language/attribute-specifier-sequence.mdx",sourceDirName:"cpp/language",slug:"/cpp/language/attribute-specifier-sequence",permalink:"/zen/cpp/language/attribute-specifier-sequence",editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cpp/language/attribute-specifier-sequence.mdx",tags:[],version:"current",lastUpdatedAt:1635063635,formattedLastUpdatedAt:"10/24/2021",frontMatter:{title:"Attribute specifier sequence",sidebar_label:"Attribute specifier sequence"},sidebar:"cpp",previous:{title:"Object Oriented Programming",permalink:"/zen/cpp/oop"},next:{title:"User-defined Literals",permalink:"/zen/cpp/language/user-defined-literal"}},s=[{value:"<code>[[maybe_unused]]</code>",id:"maybe_unused",children:[],level:2}],l={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"maybe_unused"},(0,i.kt)("inlineCode",{parentName:"h2"},"[[maybe_unused]]")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Suppresses warnings on unused entities. Link: ",(0,i.kt)("a",{parentName:"p",href:"https://en.cppreference.com/w/cpp/language/attributes/maybe_unused"},"https://en.cppreference.com/w/cpp/language/attributes/maybe_unused"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"int main() {\n    /* repeat something 10 times */\n    for (int _ [[maybe_unused]] : views::iota(0, 10)) {\n        // ...\n    }\n}\n")))}f.isMDXComponent=!0}}]);