"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[1428],{7942:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(959);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=c,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function m(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=r.length,a=new Array(o);a[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:c,a[1]=i;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4780:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(1163),c=(r(959),r(7942));const o={title:"Vector",sidebar_label:"Vector"},a=void 0,i={unversionedId:"cp/data-structures/vector",id:"cp/data-structures/vector",title:"Vector",description:"",source:"@site/docs/cp/data-structures/vector.mdx",sourceDirName:"cp/data-structures",slug:"/cp/data-structures/vector",permalink:"/zen/cp/data-structures/vector",draft:!1,editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cp/data-structures/vector.mdx",tags:[],version:"current",lastUpdatedAt:1677637965,formattedLastUpdatedAt:"Mar 1, 2023",frontMatter:{title:"Vector",sidebar_label:"Vector"},sidebar:"cp",previous:{title:"Tree",permalink:"/zen/cp/data-structures/tree"},next:{title:"Geometry",permalink:"/zen/category/geometry"}},p={},s=[],l={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,c.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},"template<typename T>\nclass Vector {\n  int _size = 0, _cap = 1;\n  T *c = new T[1];\n\npublic:\n  bool empty() const { return _size == 0; }\n  int size() const { return _size; }\n  T& operator[](int idx) { return c[idx]; }\n  void pop_back() { if (_size > 0) --_size; }\n\n  void push_back(T __x) {\n    if (_size == _cap) {\n      T *old_c = c;\n      c = new T[2 * _cap];\n      memcpy(c, old_c, _cap * sizeof(T));\n      _cap *= 2;\n      delete[] old_c;\n    }\n    c[_size++] = __x;\n  }\n};\n")))}d.isMDXComponent=!0}}]);