"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[9226],{7942:(a,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>k});var n=t(959);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var l=n.createContext({}),i=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},c=function(a){var e=i(a.components);return n.createElement(l.Provider,{value:e},a.children)},o="mdxType",N={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,l=a.parentName,c=r(a,["components","mdxType","originalType","parentName"]),o=i(t),u=s,k=o["".concat(l,".").concat(u)]||o[u]||N[u]||m;return t?n.createElement(k,p(p({ref:e},c),{},{components:t})):n.createElement(k,p({ref:e},c))}));function k(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,p=new Array(m);p[0]=u;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=a,r[o]="string"==typeof a?a:s,p[1]=r;for(var i=2;i<m;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},714:(a,e,t)=>{t.d(e,{Z:()=>p});var n=t(959),s=t(5924);const m={tabItem:"tabItem_WUOw"};function p(a){let{children:e,hidden:t,className:p}=a;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(m.tabItem,p),hidden:t},e)}},5897:(a,e,t)=>{t.d(e,{Z:()=>v});var n=t(8957),s=t(959),m=t(5924),p=t(5186),r=t(8903),l=t(3078),i=t(2748),c=t(1518);function o(a){return function(a){return s.Children.map(a,(a=>{if(!a||(0,s.isValidElement)(a)&&function(a){const{props:e}=a;return!!e&&"object"==typeof e&&"value"in e}(a))return a;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof a.type?a.type:a.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(a).map((a=>{let{props:{value:e,label:t,attributes:n,default:s}}=a;return{value:e,label:t,attributes:n,default:s}}))}function N(a){const{values:e,children:t}=a;return(0,s.useMemo)((()=>{const a=e??o(t);return function(a){const e=(0,i.l)(a,((a,e)=>a.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((a=>a.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(a),a}),[e,t])}function u(a){let{value:e,tabValues:t}=a;return t.some((a=>a.value===e))}function k(a){let{queryString:e=!1,groupId:t}=a;const n=(0,r.k6)(),m=function(a){let{queryString:e=!1,groupId:t}=a;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,l._X)(m),(0,s.useCallback)((a=>{if(!m)return;const e=new URLSearchParams(n.location.search);e.set(m,a),n.replace({...n.location,search:e.toString()})}),[m,n])]}function h(a){const{defaultValue:e,queryString:t=!1,groupId:n}=a,m=N(a),[p,r]=(0,s.useState)((()=>function(a){let{defaultValue:e,tabValues:t}=a;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!u({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((a=>a.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=t.find((a=>a.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:m}))),[l,i]=k({queryString:t,groupId:n}),[o,h]=function(a){let{groupId:e}=a;const t=function(a){return a?`docusaurus.tab.${a}`:null}(e),[n,m]=(0,c.Nk)(t);return[n,(0,s.useCallback)((a=>{t&&m.set(a)}),[t,m])]}({groupId:n}),d=(()=>{const a=l??o;return u({value:a,tabValues:m})?a:null})();(0,s.useLayoutEffect)((()=>{d&&r(d)}),[d]);return{selectedValue:p,selectValue:(0,s.useCallback)((a=>{if(!u({value:a,tabValues:m}))throw new Error(`Can't select invalid tab value=${a}`);r(a),i(a),h(a)}),[i,h,m]),tabValues:m}}var d=t(7525);const g={tabList:"tabList_oWTd",tabItem:"tabItem_MXaH"};function b(a){let{className:e,block:t,selectedValue:r,selectValue:l,tabValues:i}=a;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,p.o5)(),N=a=>{const e=a.currentTarget,t=c.indexOf(e),n=i[t].value;n!==r&&(o(e),l(n))},u=a=>{let e=null;switch(a.key){case"Enter":N(a);break;case"ArrowRight":{const t=c.indexOf(a.currentTarget)+1;e=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(a.currentTarget)-1;e=c[t]??c[c.length-1];break}}e?.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.Z)("tabs",{"tabs--block":t},e)},i.map((a=>{let{value:e,label:t,attributes:p}=a;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,key:e,ref:a=>c.push(a),onKeyDown:u,onClick:N},p,{className:(0,m.Z)("tabs__item",g.tabItem,p?.className,{"tabs__item--active":r===e})}),t??e)})))}function f(a){let{lazy:e,children:t,selectedValue:n}=a;const m=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const a=m.find((a=>a.props.value===n));return a?(0,s.cloneElement)(a,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},m.map(((a,e)=>(0,s.cloneElement)(a,{key:e,hidden:a.props.value!==n}))))}function y(a){const e=h(a);return s.createElement("div",{className:(0,m.Z)("tabs-container",g.tabList)},s.createElement(b,(0,n.Z)({},a,e)),s.createElement(f,(0,n.Z)({},a,e)))}function v(a){const e=(0,d.Z)();return s.createElement(y,(0,n.Z)({key:String(e)},a))}},1473:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var n=t(8957),s=(t(959),t(7942)),m=t(5897),p=t(714);const r={title:"Greatest Common Divisor (GCD)"},l=void 0,i={unversionedId:"cp/math/gcd",id:"cp/math/gcd",title:"Greatest Common Divisor (GCD)",description:"Euclid's Algorithm",source:"@site/docs/cp/math/gcd.mdx",sourceDirName:"cp/math",slug:"/cp/math/gcd",permalink:"/zen/cp/math/gcd",draft:!1,editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cp/math/gcd.mdx",tags:[],version:"current",lastUpdatedAt:1694358037,formattedLastUpdatedAt:"Sep 10, 2023",frontMatter:{title:"Greatest Common Divisor (GCD)"},sidebar:"cp",previous:{title:"Fibonacci Numbers",permalink:"/zen/cp/math/fibonacci"},next:{title:"M\xf6bius function",permalink:"/zen/cp/math/mobius"}},c={},o=[{value:"Euclid&#39;s Algorithm",id:"euclids-algorithm",level:2},{value:"Proof",id:"proof",level:4},{value:"Binary GCD - An optimization",id:"binary-gcd---an-optimization",level:3},{value:"Extended Euclid Algorithm",id:"extended-euclid-algorithm",level:2},{value:"Recursive",id:"recursive",level:3},{value:"Iterative",id:"iterative",level:3}],N={toc:o},u="wrapper";function k(a){let{components:e,...t}=a;return(0,s.kt)(u,(0,n.Z)({},N,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"euclids-algorithm"},"Euclid's Algorithm"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"uint64_t gcdEuclid(int64_t a, int64_t b) {\n  if (a < 0) a = -a; if (b < 0) b = -b;\n  while (a && b) if (a > b) a %= b; else b %= a;\n  return a | b;\n}\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Worst Case"),": Consecutive Fibonacci numbers are worst-case input to this algorithm."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Time Complexity"),": ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathcal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mop"},"lo",(0,s.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mop"},"max"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")))"))))),". Note that this is not a strict bound, and often runs faster than this."),(0,s.kt)("h4",{id:"proof"},"Proof"),(0,s.kt)("p",null,"Observe that in each step, the product ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"ab")))))," must atleast reduce by half, i.e. ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord"},"%"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"<"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.1901em",verticalAlign:"-0.345em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,s.kt)("span",{parentName:"span",className:"mfrac"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8451em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.22em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.06em"}})),(0,s.kt)("span",{parentName:"span",style:{top:"-3.394em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"1"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.345em"}},(0,s.kt)("span",{parentName:"span"}))))),(0,s.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"ab")))))),(0,s.kt)("p",null,"So, the complexity is ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathcal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mop"},"lo",(0,s.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"ab"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"))"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2261"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathcal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mop"},"lo",(0,s.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a")),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mop"},"lo",(0,s.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b")),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2261"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathcal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mop"},"lo",(0,s.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mop"},"max"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")))")))))),(0,s.kt)("h3",{id:"binary-gcd---an-optimization"},"Binary GCD - An optimization"),(0,s.kt)("p",null,"The Binary GCD algorithm is an optimization to the normal Eulidean algorithm."),(0,s.kt)("p",null,"The slow part of the normal algorithm are the modulo operations. Modulo operations, although we see them as ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),", are a lot slower than simpler operations like addition, subtraction or bitwise operations. So it would be better to avoid those."),(0,s.kt)("p",null,"It turns out, that you can design a fast GCD algorithm that avoids modulo operations. It's based on a few properties:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"If both numbers are even, then we can factor out a two of both and compute the GCD of the remaining numbers: ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mop"},(0,s.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g"),"cd"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mop"},(0,s.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g"),"cd"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,s.kt)("li",{parentName:"ul"},"If one of the numbers is even and the other one is odd, then we can remove the factor 2 from the even one: ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mop"},(0,s.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g"),"cd"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mop"},(0,s.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g"),"cd"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," if ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b")))))," is odd."),(0,s.kt)("li",{parentName:"ul"},"If both numbers are odd, then subtracting one number of the other one will not change the GCD: ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mop"},(0,s.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g"),"cd"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mop"},(0,s.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g"),"cd"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," (this can be proven in the same way as the correctness proof of the normal algorithm)")),(0,s.kt)("p",null,"Using only these properties, and some fast bitwise functions from GCC, we can implement a fast version:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"int64_t binaryGCD(int64_t a, int64_t b) {\n  if (a < 0) a = -a; if (b < 0) b = -b;\n  if (!a || !b) return a | b;\n  uint64_t shift = __builtin_ctz(a | b);\n  auto f = [&](int64_t &x) { x >>= __builtin_ctz(x); };\n  f(a); f(b); while (a && b) { if (a > b) f(a -= b); else f(b -= a); }\n  return (a | b) << shift;\n}\n")),(0,s.kt)("h2",{id:"extended-euclid-algorithm"},"Extended Euclid Algorithm"),(0,s.kt)("h3",{id:"recursive"},"Recursive"),(0,s.kt)(m.Z,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Verify",value:"verify"}],mdxType:"Tabs"},(0,s.kt)(p.Z,{value:"code",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"tuple<int64_t, int64_t> extendedEuclidRecursive(uint64_t a, uint64_t b) {\n  if (!b) return {1, 0};\n  auto [x, y] = extendedEuclidRecursive(b, a % b);\n  return {y, x - y * (a / b)};\n}\n"))),(0,s.kt)(p.Z,{value:"verify",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"void solve() {\n    for (int i = -100; i < 100; ++i) {\n        for (int j = -100; j < 100; ++j) {\n            auto [a, b] = extendedEuclidRecursive(abs(i), abs(j));\n            if (i < 0) a = -a; if (j < 0) b = -b;\n            assert(a * i + b * j == gcd(i, j));\n        }\n    }\n}\n")))),(0,s.kt)("h3",{id:"iterative"},"Iterative"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"namespace Math {\n    /**\n     *  @brief: Integrity constraint is u_i * a1 + v_i * a2 = a_i\n     */\n    tuple<int64_t, int64_t> extendedEuclidIterative(int64_t a1, int64_t a2) {\n        int64_t u1 = 1, u2 = 0, v1 = 0, v2 = 1;\n        while (a2) {\n            int64_t q = a1 / a2;\n            tie(a1, a2) = make_tuple(a2, a1 - q * a2);\n            tie(u1, u2) = make_tuple(u2, u1 - q * u2);\n            tie(v1, v2) = make_tuple(v2, v1 - q * v2);\n        }\n        return {u1, v1};\n    }\n}\n")))}k.isMDXComponent=!0}}]);