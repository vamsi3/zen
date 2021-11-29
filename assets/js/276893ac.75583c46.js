"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[6125],{3905:function(a,e,t){t.d(e,{Zo:function(){return N},kt:function(){return k}});var s=t(7294);function n(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function p(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,s)}return t}function m(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){n(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,s,n=function(a,e){if(null==a)return{};var t,s,n={},p=Object.keys(a);for(s=0;s<p.length;s++)t=p[s],e.indexOf(t)>=0||(n[t]=a[t]);return n}(a,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(a);for(s=0;s<p.length;s++)t=p[s],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(n[t]=a[t])}return n}var i=s.createContext({}),l=function(a){var e=s.useContext(i),t=e;return a&&(t="function"==typeof a?a(e):m(m({},e),a)),t},N=function(a){var e=l(a.components);return s.createElement(i.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return s.createElement(s.Fragment,{},e)}},o=s.forwardRef((function(a,e){var t=a.components,n=a.mdxType,p=a.originalType,i=a.parentName,N=r(a,["components","mdxType","originalType","parentName"]),o=l(t),k=n,h=o["".concat(i,".").concat(k)]||o[k]||c[k]||p;return t?s.createElement(h,m(m({ref:e},N),{},{components:t})):s.createElement(h,m({ref:e},N))}));function k(a,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var p=t.length,m=new Array(p);m[0]=o;var r={};for(var i in e)hasOwnProperty.call(e,i)&&(r[i]=e[i]);r.originalType=a,r.mdxType="string"==typeof a?a:n,m[1]=r;for(var l=2;l<p;l++)m[l]=t[l];return s.createElement.apply(null,m)}return s.createElement.apply(null,t)}o.displayName="MDXCreateElement"},373:function(a,e,t){t.r(e),t.d(e,{frontMatter:function(){return r},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return N},default:function(){return o}});var s=t(7462),n=t(3366),p=(t(7294),t(3905)),m=["components"],r={title:"Prime Sieve",sidebar_label:"Sieve"},i=void 0,l={unversionedId:"cp/math/sieve",id:"cp/math/sieve",isDocsHomePage:!1,title:"Prime Sieve",description:"Sieve of Eratosthenes",source:"@site/docs/cp/math/sieve.mdx",sourceDirName:"cp/math",slug:"/cp/math/sieve",permalink:"/zen/cp/math/sieve",editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cp/math/sieve.mdx",tags:[],version:"current",lastUpdatedAt:1638204530,formattedLastUpdatedAt:"11/29/2021",frontMatter:{title:"Prime Sieve",sidebar_label:"Sieve"},sidebar:"cp",previous:{title:"Prime Factorization",permalink:"/zen/cp/math/prime-factorization"},next:{title:"KMP Algorithm",permalink:"/zen/cp/string/kmp"}},N=[{value:"Sieve of Eratosthenes",id:"sieve-of-eratosthenes",children:[],level:2},{value:"Linear Sieve",id:"linear-sieve",children:[],level:2},{value:"Segmented Sieve",id:"segmented-sieve",children:[],level:2}],c={toc:N};function o(a){var e=a.components,t=(0,n.Z)(a,m);return(0,p.kt)("wrapper",(0,s.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"sieve-of-eratosthenes"},"Sieve of Eratosthenes"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"{7}","{7}":!0},"void sieve(int32_t n) {\n    std::vector<bool> is_prime(n, true);\n    std::vector<int32_t> primes;\n    for (int64_t i = 2; i < n; ++i) {\n        if (!is_prime[i]) continue;\n        primes.push_back(i);\n        for (auto j = i * i; j < n; j += i) is_prime[j] = false;\n    }\n}\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Time Complexity:")," ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,p.kt)("span",{parentName:"span",className:"mopen"},"("),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,p.kt)("span",{parentName:"span",className:"mop"},"ln"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,p.kt)("span",{parentName:"span",className:"mop"},"ln"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,p.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,p.kt)("p",null,"The below analysis is for the case when the highlighted line above starts with ",(0,p.kt)("inlineCode",{parentName:"p"},"j = 2 * i"),"."),(0,p.kt)("p",null,"To prove this, notice that the number of iterations are something like ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,p.kt)("span",{parentName:"span",className:"mopen"},"("),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,p.kt)("span",{parentName:"span",className:"mclose"},")"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,p.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"1.2311079999999999em",verticalAlign:"-0.481108em"}}),(0,p.kt)("span",{parentName:"span",className:"mop"},(0,p.kt)("span",{parentName:"span",className:"mop op-symbol small-op",style:{position:"relative",top:"-0.0000050000000000050004em"}},"\u2211"),(0,p.kt)("span",{parentName:"span",className:"msupsub"},(0,p.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.14546899999999996em"}},(0,p.kt)("span",{parentName:"span",style:{top:"-2.40029em",marginLeft:"0em",marginRight:"0.05em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,p.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"p"),(0,p.kt)("span",{parentName:"span",className:"mrel mtight"},"\u2264"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"))))),(0,p.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.43581800000000004em"}},(0,p.kt)("span",{parentName:"span"})))))),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},(0,p.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,p.kt)("span",{parentName:"span",className:"mfrac"},(0,p.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.695392em"}},(0,p.kt)("span",{parentName:"span",style:{top:"-2.6550000000000002em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,p.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"p")))),(0,p.kt)("span",{parentName:"span",style:{top:"-3.2199999999999998em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,p.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.06em"}})),(0,p.kt)("span",{parentName:"span",style:{top:"-3.394em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,p.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"))))),(0,p.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.481108em"}},(0,p.kt)("span",{parentName:"span"}))))),(0,p.kt)("span",{parentName:"span",className:"mclose nulldelimiter"}))))))," where ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.19444em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"p")))))," is a prime. Well, Merten's Second Theorem states that ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"1.326216em",verticalAlign:"-0.481108em"}}),(0,p.kt)("span",{parentName:"span",className:"mop"},(0,p.kt)("span",{parentName:"span",className:"mop op-symbol small-op",style:{position:"relative",top:"-0.0000050000000000050004em"}},"\u2211"),(0,p.kt)("span",{parentName:"span",className:"msupsub"},(0,p.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.14546899999999996em"}},(0,p.kt)("span",{parentName:"span",style:{top:"-2.40029em",marginLeft:"0em",marginRight:"0.05em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,p.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"p"),(0,p.kt)("span",{parentName:"span",className:"mrel mtight"},"\u2264"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"))))),(0,p.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.43581800000000004em"}},(0,p.kt)("span",{parentName:"span"})))))),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},(0,p.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,p.kt)("span",{parentName:"span",className:"mfrac"},(0,p.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.845108em"}},(0,p.kt)("span",{parentName:"span",style:{top:"-2.6550000000000002em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,p.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"p")))),(0,p.kt)("span",{parentName:"span",style:{top:"-3.2199999999999998em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,p.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.06em"}})),(0,p.kt)("span",{parentName:"span",style:{top:"-3.394em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,p.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mtight"},"1"))))),(0,p.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.481108em"}},(0,p.kt)("span",{parentName:"span"}))))),(0,p.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,p.kt)("span",{parentName:"span",className:"mrel"},"="),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.77777em",verticalAlign:"-0.08333em"}}),(0,p.kt)("span",{parentName:"span",className:"mop"},"ln"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,p.kt)("span",{parentName:"span",className:"mop"},"ln"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,p.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,p.kt)("span",{parentName:"span",className:"mopen"},"("),(0,p.kt)("span",{parentName:"span",className:"mord"},"1"),(0,p.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,p.kt)("h2",{id:"linear-sieve"},"Linear Sieve"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"std::vector<int32_t> linear_sieve(int32_t n) {\n    std::vector<int32_t> primes;\n    std::vector<int32_t> lowest_prime(n, 0);\n    for (int64_t i = 2; i < n; ++i) {\n        if (lowest_prime[i] == 0) {\n            primes.push_back(i);\n            lowest_prime[i] = i;\n        }\n        for (auto const& p : primes) {\n            if (p > lowest_prime[i]) break;\n            if (auto j = i * p; j < n) {\n                lowest_prime[j] = p;\n            }\n        }\n    }\n    return lowest_prime;\n}\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Time Complexity:")," ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,p.kt)("span",{parentName:"span",className:"mopen"},"("),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,p.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,p.kt)("h2",{id:"segmented-sieve"},"Segmented Sieve"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"vector<int> prime_divisors[N];\n\n/* assume sieve(N) is already called. */\nvoid segmentedSieve(int a, int b) {\n  for (ll x = a; x <= b; ++x) prime_divisors[x - a].clear();\n  for (const auto& p: primes) {\n    for (ll x = ((a + p - 1) / p) * p; x <= b; x += p) {\n      /* p is a prime divisor of x. Do anything with this fact. */\n      prime_divisors[x - a].push_back(p);\n    }\n  }\n}\n\n/* If a prime greater than sqrt(N) divides x then that prime will be missing from prime_divisors[x].\n * You can find that by the expressions x / (product of all p in prime_divisors[x])\n */\n")))}o.isMDXComponent=!0}}]);