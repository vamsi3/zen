"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[1355],{3905:function(e,a,t){t.d(a,{Zo:function(){return l},kt:function(){return h}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),m=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},l=function(e){var a=m(e.components);return n.createElement(i.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),g=m(t),h=r,d=g["".concat(i,".").concat(h)]||g[h]||c[h]||s;return t?n.createElement(d,p(p({ref:a},l),{},{components:t})):n.createElement(d,p({ref:a},l))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,p=new Array(s);p[0]=g;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var m=2;m<s;m++)p[m]=t[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},9696:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return m},toc:function(){return l},default:function(){return g}});var n=t(7462),r=t(3366),s=(t(7294),t(3905)),p=["components"],o={title:"Edge Coloring of Graph",sidebar_label:"Edge Coloring"},i=void 0,m={unversionedId:"cp/graph/edge-coloring",id:"cp/graph/edge-coloring",title:"Edge Coloring of Graph",description:"1. https://codeforces.com/blog/entry/75431",source:"@site/docs/cp/graph/edge-coloring.mdx",sourceDirName:"cp/graph",slug:"/cp/graph/edge-coloring",permalink:"/zen/cp/graph/edge-coloring",editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cp/graph/edge-coloring.mdx",tags:[],version:"current",lastUpdatedAt:1631896143,formattedLastUpdatedAt:"9/17/2021",frontMatter:{title:"Edge Coloring of Graph",sidebar_label:"Edge Coloring"},sidebar:"cp",previous:{title:"Dual Graphs of Planar Graphs",permalink:"/zen/cp/graph/dual-graphs"},next:{title:"Euler Tour",permalink:"/zen/cp/graph/euler-tour"}},l=[{value:"Misra &amp; Gries Edge Coloring Algorithm",id:"misra--gries-edge-coloring-algorithm",children:[],level:2}],c={toc:l};function g(e){var a=e.components,t=(0,r.Z)(e,p);return(0,s.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"RESOURCES")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("ol",{parentName:"div"},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://codeforces.com/blog/entry/75431"},"https://codeforces.com/blog/entry/75431"))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Vizing's theorem")," states that every simple undirected graph may be edge colored using a number of colors that is at most one larger than the maximum degree ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u0394"))))),' of the graph. At least \u0394 colors are always necessary, so the undirected graphs may be partitioned into two classes: "class 1" graphs for which \u0394 colors suffice, and "class 2" graphs for which ',(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.76666em",verticalAlign:"-0.08333em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u0394"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1")))))," colors are necessary."),(0,s.kt)("p",null,"In general, optimal edge coloring is NP-complete, so it is very unlikely that a polynomial time algorithm exists."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Planar_graph"},"Planar graphs")," of maximum degree at least 7 are of class 1. Maximum degree 6 is also conjectured to be of class 1 but is yet unproved."),(0,s.kt)("h2",{id:"misra--gries-edge-coloring-algorithm"},"Misra & Gries Edge Coloring Algorithm"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Paper: ",(0,s.kt)("a",{parentName:"p",href:"https://www.cs.utexas.edu/users/misra/psp.dir/vizing.pdf"},"https://www.cs.utexas.edu/users/misra/psp.dir/vizing.pdf")),(0,s.kt)("p",{parentName:"blockquote"},"Code:"),(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/koosaga/olympiad/blob/master/Library/codes/graph_etc/edgecolor_vizing.cpp"},"https://github.com/koosaga/olympiad/blob/master/Library/codes/graph_etc/edgecolor_vizing.cpp")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.boost.org/doc/libs/1_67_0/boost/graph/edge_coloring.hpp"},"https://www.boost.org/doc/libs/1_67_0/boost/graph/edge_coloring.hpp"))),(0,s.kt)("p",{parentName:"blockquote"},"Test: ",(0,s.kt)("a",{parentName:"p",href:"https://www.acmicpc.net/problem/10446"},"https://www.acmicpc.net/problem/10446"))),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Misra_%26_Gries_edge_coloring_algorithm"},"Misra & Gries edge coloring algorithm")," finds an ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Edge_coloring"},"edge coloring")," of any graph. The coloring produces uses at most ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.76666em",verticalAlign:"-0.08333em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u0394"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1")))))," colors, where ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u0394")))))," is the maximum degree of the graph. This is optimal for some graphs, and by ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Vizing's_theorem"},"Vizing's theorem")," it uses at most one color more than the optimal for all others."),(0,s.kt)("p",null,"Time Complexity: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathcal",style:{marginRight:"0.02778em"}},"O")),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"V"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"")))}g.isMDXComponent=!0}}]);