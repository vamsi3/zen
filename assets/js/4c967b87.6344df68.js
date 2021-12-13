"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[9226],{3905:function(a,e,t){t.d(e,{Zo:function(){return c},kt:function(){return u}});var n=t(7294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var l=n.createContext({}),i=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},c=function(a){var e=i(a.components);return n.createElement(l.Provider,{value:e},a.children)},o={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,l=a.parentName,c=r(a,["components","mdxType","originalType","parentName"]),N=i(t),u=s,k=N["".concat(l,".").concat(u)]||N[u]||o[u]||m;return t?n.createElement(k,p(p({ref:e},c),{},{components:t})):n.createElement(k,p({ref:e},c))}));function u(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,p=new Array(m);p[0]=N;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=a,r.mdxType="string"==typeof a?a:s,p[1]=r;for(var i=2;i<m;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},8215:function(a,e,t){var n=t(7294);e.Z=function(a){var e=a.children,t=a.hidden,s=a.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:s},e)}},6396:function(a,e,t){t.d(e,{Z:function(){return N}});var n=t(7462),s=t(7294),m=t(2389),p=t(9443);var r=function(){var a=(0,s.useContext)(p.Z);if(null==a)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return a},l=t(3616),i=t(6010),c="tabItem_vU9c";function o(a){var e,t,n,m=a.lazy,p=a.block,o=a.defaultValue,N=a.values,u=a.groupId,k=a.className,h=s.Children.map(a.children,(function(a){if((0,s.isValidElement)(a)&&void 0!==a.props.value)return a;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof a.type?a.type:a.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),d=null!=N?N:h.map((function(a){var e=a.props;return{value:e.value,label:e.label}})),g=(0,l.lx)(d,(function(a,e){return a.value===e.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(a){return a.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===o?o:null!=(e=null!=o?o:null==(t=h.find((function(a){return a.props.default})))?void 0:t.props.value)?e:null==(n=h[0])?void 0:n.props.value;if(null!==b&&!d.some((function(a){return a.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+d.map((function(a){return a.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=r(),f=v.tabGroupChoices,y=v.setTabGroupChoices,x=(0,s.useState)(b),R=x[0],w=x[1],E=[],O=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=u){var _=f[u];null!=_&&_!==R&&d.some((function(a){return a.value===_}))&&w(_)}var C=function(a){var e=a.currentTarget,t=E.indexOf(e),n=d[t].value;n!==R&&(O(e),w(n),null!=u&&y(u,n))},A=function(a){var e,t=null;switch(a.key){case"ArrowRight":var n=E.indexOf(a.currentTarget)+1;t=E[n]||E[0];break;case"ArrowLeft":var s=E.indexOf(a.currentTarget)-1;t=E[s]||E[E.length-1]}null==(e=t)||e.focus()};return s.createElement("div",{className:"tabs-container"},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},k)},d.map((function(a){var e=a.value,t=a.label;return s.createElement("li",{role:"tab",tabIndex:R===e?0:-1,"aria-selected":R===e,className:(0,i.Z)("tabs__item",c,{"tabs__item--active":R===e}),key:e,ref:function(a){return E.push(a)},onKeyDown:A,onFocus:C,onClick:C},null!=t?t:e)}))),m?(0,s.cloneElement)(h.filter((function(a){return a.props.value===R}))[0],{className:"margin-vert--md"}):s.createElement("div",{className:"margin-vert--md"},h.map((function(a,e){return(0,s.cloneElement)(a,{key:e,hidden:a.props.value!==R})}))))}function N(a){var e=(0,m.Z)();return s.createElement(o,(0,n.Z)({key:String(e)},a))}},1037:function(a,e,t){t.r(e),t.d(e,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return o},toc:function(){return N},default:function(){return k}});var n=t(7462),s=t(3366),m=(t(7294),t(3905)),p=t(6396),r=t(8215),l=["components"],i={title:"Greatest Common Divisor (GCD)"},c=void 0,o={unversionedId:"cp/math/gcd",id:"cp/math/gcd",title:"Greatest Common Divisor (GCD)",description:"Euclid's Algorithm",source:"@site/docs/cp/math/gcd.mdx",sourceDirName:"cp/math",slug:"/cp/math/gcd",permalink:"/zen/cp/math/gcd",editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cp/math/gcd.mdx",tags:[],version:"current",lastUpdatedAt:1638204530,formattedLastUpdatedAt:"11/29/2021",frontMatter:{title:"Greatest Common Divisor (GCD)"},sidebar:"cp",previous:{title:"Fibonacci Numbers",permalink:"/zen/cp/math/fibonacci"},next:{title:"M\xf6bius function",permalink:"/zen/cp/math/mobius"}},N=[{value:"Euclid&#39;s Algorithm",id:"euclids-algorithm",children:[{value:"Proof",id:"proof",children:[],level:4},{value:"Binary GCD - An optimization",id:"binary-gcd---an-optimization",children:[],level:3}],level:2},{value:"Extended Euclid Algorithm",id:"extended-euclid-algorithm",children:[{value:"Recursive",id:"recursive",children:[],level:3},{value:"Iterative",id:"iterative",children:[],level:3}],level:2}],u={toc:N};function k(a){var e=a.components,t=(0,s.Z)(a,l);return(0,m.kt)("wrapper",(0,n.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("h2",{id:"euclids-algorithm"},"Euclid's Algorithm"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"uint64_t gcdEuclid(int64_t a, int64_t b) {\n  if (a < 0) a = -a; if (b < 0) b = -b;\n  while (a && b) if (a > b) a %= b; else b %= a;\n  return a | b;\n}\n")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Worst Case"),": Consecutive Fibonacci numbers are worst-case input to this algorithm."),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Time Complexity"),": ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathcal",style:{marginRight:"0.02778em"}},"O")),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mop"},"lo",(0,m.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mop"},"max"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"))))),". Note that this is not a strict bound, and often runs faster than this."),(0,m.kt)("h4",{id:"proof"},"Proof"),(0,m.kt)("p",null,"Observe that in each step, the product ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"b")))))," must atleast reduce by half, i.e. ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.77777em",verticalAlign:"-0.08333em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mord"},"%"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"<"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.190108em",verticalAlign:"-0.345em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,m.kt)("span",{parentName:"span",className:"mfrac"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.845108em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.6550000000000002em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,m.kt)("span",{parentName:"span",style:{top:"-3.2199999999999998em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.06em"}})),(0,m.kt)("span",{parentName:"span",style:{top:"-3.394em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"1"))))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.345em"}},(0,m.kt)("span",{parentName:"span"}))))),(0,m.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"b")))))),(0,m.kt)("p",null,"So, the complexity is ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathcal",style:{marginRight:"0.02778em"}},"O")),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mop"},"lo",(0,m.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"\u2261"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathcal",style:{marginRight:"0.02778em"}},"O")),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mop"},"lo",(0,m.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a")),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mop"},"lo",(0,m.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"b")),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"\u2261"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathcal",style:{marginRight:"0.02778em"}},"O")),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mop"},"lo",(0,m.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mop"},"max"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,m.kt)("h3",{id:"binary-gcd---an-optimization"},"Binary GCD - An optimization"),(0,m.kt)("p",null,"The Binary GCD algorithm is an optimization to the normal Eulidean algorithm."),(0,m.kt)("p",null,"The slow part of the normal algorithm are the modulo operations. Modulo operations, although we see them as ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"))))),", are a lot slower than simpler operations like addition, subtraction or bitwise operations. So it would be better to avoid those."),(0,m.kt)("p",null,"It turns out, that you can design a fast GCD algorithm that avoids modulo operations. It's based on a few properties:"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"If both numbers are even, then we can factor out a two of both and compute the GCD of the remaining numbers: ",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mop"},(0,m.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g"),"cd"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,m.kt)("span",{parentName:"span",className:"mop"},(0,m.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g"),"cd"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,m.kt)("li",{parentName:"ul"},"If one of the numbers is even and the other one is odd, then we can remove the factor 2 from the even one: ",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mop"},(0,m.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g"),"cd"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mop"},(0,m.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g"),"cd"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))," if ",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"b")))))," is odd."),(0,m.kt)("li",{parentName:"ul"},"If both numbers are odd, then subtracting one number of the other one will not change the GCD: ",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mop"},(0,m.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g"),"cd"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mop"},(0,m.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g"),"cd"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))," (this can be proven in the same way as the correctness proof of the normal algorithm)")),(0,m.kt)("p",null,"Using only these properties, and some fast bitwise functions from GCC, we can implement a fast version:"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"int64_t binaryGCD(int64_t a, int64_t b) {\n  if (a < 0) a = -a; if (b < 0) b = -b;\n  if (!a || !b) return a | b;\n  uint64_t shift = __builtin_ctz(a | b);\n  auto f = [&](int64_t &x) { x >>= __builtin_ctz(x); };\n  f(a); f(b); while (a && b) { if (a > b) f(a -= b); else f(b -= a); }\n  return (a | b) << shift;\n}\n")),(0,m.kt)("h2",{id:"extended-euclid-algorithm"},"Extended Euclid Algorithm"),(0,m.kt)("h3",{id:"recursive"},"Recursive"),(0,m.kt)(p.Z,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Verify",value:"verify"}],mdxType:"Tabs"},(0,m.kt)(r.Z,{value:"code",mdxType:"TabItem"},(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"tuple<int64_t, int64_t> extendedEuclidRecursive(uint64_t a, uint64_t b) {\n  if (!b) return {1, 0};\n  auto [x, y] = extendedEuclidRecursive(b, a % b);\n  return {y, x - y * (a / b)};\n}\n"))),(0,m.kt)(r.Z,{value:"verify",mdxType:"TabItem"},(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"void solve() {\n    for (int i = -100; i < 100; ++i) {\n        for (int j = -100; j < 100; ++j) {\n            auto [a, b] = extendedEuclidRecursive(abs(i), abs(j));\n            if (i < 0) a = -a; if (j < 0) b = -b;\n            assert(a * i + b * j == gcd(i, j));\n        }\n    }\n}\n")))),(0,m.kt)("h3",{id:"iterative"},"Iterative"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"namespace Math {\n    /**\n     *  @brief: Integrity constraint is u_i * a1 + v_i * a2 = a_i\n     */\n    tuple<int64_t, int64_t> extendedEuclidIterative(int64_t a1, int64_t a2) {\n        int64_t u1 = 1, u2 = 0, v1 = 0, v2 = 1;\n        while (a2) {\n            int64_t q = a1 / a2;\n            tie(a1, a2) = make_tuple(a2, a1 - q * a2);\n            tie(u1, u2) = make_tuple(u2, u1 - q * u2);\n            tie(v1, v2) = make_tuple(v2, v1 - q * v2);\n        }\n        return {u1, v1};\n    }\n}\n")))}k.isMDXComponent=!0}}]);