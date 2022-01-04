"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[6669],{3905:function(a,e,t){t.d(e,{Zo:function(){return c},kt:function(){return N}});var n=t(7294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function m(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var i=n.createContext({}),l=function(a){var e=n.useContext(i),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},c=function(a){var e=l(a.components);return n.createElement(i.Provider,{value:e},a.children)},o={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,r=a.originalType,i=a.parentName,c=m(a,["components","mdxType","originalType","parentName"]),h=l(t),N=s,k=h["".concat(i,".").concat(N)]||h[N]||o[N]||r;return t?n.createElement(k,p(p({ref:e},c),{},{components:t})):n.createElement(k,p({ref:e},c))}));function N(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var r=t.length,p=new Array(r);p[0]=h;var m={};for(var i in e)hasOwnProperty.call(e,i)&&(m[i]=e[i]);m.originalType=a,m.mdxType="string"==typeof a?a:s,p[1]=m;for(var l=2;l<r;l++)p[l]=t[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},7453:function(a,e,t){t.r(e),t.d(e,{frontMatter:function(){return m},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return h}});var n=t(7462),s=t(3366),r=(t(7294),t(3905)),p=["components"],m={title:"Prime Factorization",sidebar_label:"Prime Factorization"},i=void 0,l={unversionedId:"cp/math/prime-factorization",id:"cp/math/prime-factorization",title:"Prime Factorization",description:"Naive Algorithm",source:"@site/docs/cp/math/prime-factorization.mdx",sourceDirName:"cp/math",slug:"/cp/math/prime-factorization",permalink:"/zen/cp/math/prime-factorization",editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cp/math/prime-factorization.mdx",tags:[],version:"current",lastUpdatedAt:1641309238,formattedLastUpdatedAt:"1/4/2022",frontMatter:{title:"Prime Factorization",sidebar_label:"Prime Factorization"},sidebar:"cp",previous:{title:"Primality Tests",permalink:"/zen/cp/math/primality-test"},next:{title:"Sieve",permalink:"/zen/cp/math/sieve"}},c=[{value:"Naive Algorithm",id:"naive-algorithm",children:[],level:2},{value:"Pollard&#39;s Rho Algorithm",id:"pollards-rho-algorithm",children:[],level:2}],o={toc:c};function h(a){var e=a.components,t=(0,s.Z)(a,p);return(0,r.kt)("wrapper",(0,n.Z)({},o,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"naive-algorithm"},"Naive Algorithm"),(0,r.kt)("p",null,"Assume that we generated prime numbers using the Eratosthenes's Sieve.\nIf ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))))),' is in the "prime-generated" range, we can actually do prime factorization in ',(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mop"},"lo",(0,r.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),'.\nMake another array. While we are doing the Sieve, for composite numbers, put "the first prime that verified that this number is composite" and for prime numbers, put itself. This is easy to implement.'),(0,r.kt)("p",null,"Then we can start with ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))))),", and continue to divide the prime numbers in the array."),(0,r.kt)("p",null,"If not, we can just check through all primes less than ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1.08em",verticalAlign:"-0.23972em"}}),(0,r.kt)("span",{parentName:"span",className:"mord sqrt"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8402800000000001em"}},(0,r.kt)("span",{parentName:"span",className:"svg-align",style:{top:"-3.02em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.02em"}}),(0,r.kt)("span",{parentName:"span",className:"mord",style:{paddingLeft:"0.833em"}},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))),(0,r.kt)("span",{parentName:"span",style:{top:"-2.78028em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.02em"}}),(0,r.kt)("span",{parentName:"span",className:"hide-tail",style:{minWidth:"0.853em",height:"1.1em"}},(0,r.kt)("svg",{parentName:"span",width:"400em",height:"1.1em",viewBox:"0 0 400000 1100",preserveAspectRatio:"xMinYMin slice"},(0,r.kt)("path",{parentName:"svg",d:"M95,722\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl9.638554216867467 -19.999999999999996\nc5.3,-9.3,12,-14,20,-14\nH400000v60H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM854 80h400000v60h-400000z"}))))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.23972em"}},(0,r.kt)("span",{parentName:"span"})))))))))," and divide by those primes until we can't.\nIf all the primes multiply up to ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))))),", we are done. If not, there is exactly one prime more than ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1.08em",verticalAlign:"-0.23972em"}}),(0,r.kt)("span",{parentName:"span",className:"mord sqrt"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8402800000000001em"}},(0,r.kt)("span",{parentName:"span",className:"svg-align",style:{top:"-3.02em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.02em"}}),(0,r.kt)("span",{parentName:"span",className:"mord",style:{paddingLeft:"0.833em"}},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))),(0,r.kt)("span",{parentName:"span",style:{top:"-2.78028em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.02em"}}),(0,r.kt)("span",{parentName:"span",className:"hide-tail",style:{minWidth:"0.853em",height:"1.1em"}},(0,r.kt)("svg",{parentName:"span",width:"400em",height:"1.1em",viewBox:"0 0 400000 1100",preserveAspectRatio:"xMinYMin slice"},(0,r.kt)("path",{parentName:"svg",d:"M95,722\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl9.638554216867467 -19.999999999999996\nc5.3,-9.3,12,-14,20,-14\nH400000v60H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM854 80h400000v60h-400000z"}))))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.23972em"}},(0,r.kt)("span",{parentName:"span"})))))))))," that divides ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))))),"."),(0,r.kt)("h2",{id:"pollards-rho-algorithm"},"Pollard's Rho Algorithm"),(0,r.kt)("p",null,"Another algorithm involving prime factorization is Pollard's rho algorithm - since the pseudocode is simple, I'll leave the wikipedia link. ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Pollard%27s_rho_algorithm#Algorithm"},"https://en.wikipedia.org/wiki/Pollard%27s_rho_algorithm#Algorithm")))}h.isMDXComponent=!0}}]);