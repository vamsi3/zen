"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[5502],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),s=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),f=s(n),m=a,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,i(i({ref:e},u),{},{components:n})):r.createElement(d,i({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4523:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={title:"Suffix Automaton",sidebar_label:"Suffix Automaton"},l=void 0,s={unversionedId:"cp/string/suffix-automaton",id:"cp/string/suffix-automaton",title:"Suffix Automaton",description:"1. https://cp-algorithms.com/string/suffix-automaton.html",source:"@site/docs/cp/string/suffix-automaton.mdx",sourceDirName:"cp/string",slug:"/cp/string/suffix-automaton",permalink:"/zen/cp/string/suffix-automaton",editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cp/string/suffix-automaton.mdx",tags:[],version:"current",lastUpdatedAt:1634484950,formattedLastUpdatedAt:"10/17/2021",frontMatter:{title:"Suffix Automaton",sidebar_label:"Suffix Automaton"},sidebar:"cp",previous:{title:"Suffix Array",permalink:"/zen/cp/string/suffix-array"},next:{title:"Z-function",permalink:"/zen/cp/string/z-function"}},u=[{value:"Code (Algorithm - Blumer <em>et al.</em>)",id:"code-algorithm---blumer-et-al",children:[],level:2}],p={toc:u};function f(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"RESOURCES")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://cp-algorithms.com/string/suffix-automaton.html"},"https://cp-algorithms.com/string/suffix-automaton.html")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://codeforces.com/blog/entry/20861?locale=en"},"https://codeforces.com/blog/entry/20861")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Suffix_automaton"},"https://en.wikipedia.org/wiki/Suffix_automaton"))))),(0,o.kt)("h2",{id:"code-algorithm---blumer-et-al"},"Code (Algorithm - Blumer ",(0,o.kt)("em",{parentName:"h2"},"et al."),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"namespace String {\n    class SuffixAutomaton {\n    public:\n        int last;                                           // node index conrresponding to 'whole string' seen until now\n        std::vector<int> len;                               // length of longest string of node\n        std::vector<int> link;                              // suffix link of node\n        std::vector<std::unordered_map<char, int>> t;       // transitions of node\n\n        SuffixAutomaton() {\n            last = 0; len.resize(1, 0); link.resize(1, -1); t.resize(1);\n        }\n\n        SuffixAutomaton(std::string s) : SuffixAutomaton() {\n            std::for_each(s.cbegin(), s.cend(), std::bind(&SuffixAutomaton::add_char, this, std::placeholders::_1));\n        }\n\n        void add_char(const char& c) {\n            int p = last, q;\n            last = len.size(); len.emplace_back(len[p] + 1); link.emplace_back(0); t.emplace_back();\n\n            while (1) {\n                auto& ed = t[p]; auto it = ed.find(c); if (it != ed.end()) { q = it->second; break; }\n                ed[c] = last; p = link[p]; if (p == -1) return;\n            }\n\n            if (len[q] == len[p] + 1) { link[last] = q; return; }\n\n            int qq = len.size(); len.emplace_back(len[p] + 1); link.emplace_back(link[q]); t.emplace_back(t[q]);\n            link[q] = link[last] = qq;\n            \n            while (1) {\n                auto& r = t[p][c]; if (r != q) return; r = qq;\n                p = link[p]; if (p == -1) return;\n            }\n        }\n    };\n}\n")))}f.isMDXComponent=!0}}]);