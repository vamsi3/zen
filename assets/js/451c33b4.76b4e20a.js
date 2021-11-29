"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[86],{3905:function(a,e,t){t.d(e,{Zo:function(){return o},kt:function(){return k}});var s=t(7294);function n(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,s)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){n(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,s,n=function(a,e){if(null==a)return{};var t,s,n={},m=Object.keys(a);for(s=0;s<m.length;s++)t=m[s],e.indexOf(t)>=0||(n[t]=a[t]);return n}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(s=0;s<m.length;s++)t=m[s],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(n[t]=a[t])}return n}var l=s.createContext({}),i=function(a){var e=s.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},o=function(a){var e=i(a.components);return s.createElement(l.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return s.createElement(s.Fragment,{},e)}},N=s.forwardRef((function(a,e){var t=a.components,n=a.mdxType,m=a.originalType,l=a.parentName,o=r(a,["components","mdxType","originalType","parentName"]),N=i(t),k=n,h=N["".concat(l,".").concat(k)]||N[k]||c[k]||m;return t?s.createElement(h,p(p({ref:e},o),{},{components:t})):s.createElement(h,p({ref:e},o))}));function k(a,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var m=t.length,p=new Array(m);p[0]=N;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=a,r.mdxType="string"==typeof a?a:n,p[1]=r;for(var i=2;i<m;i++)p[i]=t[i];return s.createElement.apply(null,p)}return s.createElement.apply(null,t)}N.displayName="MDXCreateElement"},4259:function(a,e,t){t.r(e),t.d(e,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return o},default:function(){return N}});var s=t(7462),n=t(3366),m=(t(7294),t(3905)),p=["components"],r={title:"Subset Transforms (Dynamic Programming)",sidebar_label:"Subset Transforms (DP)"},l=void 0,i={unversionedId:"cp/algorithms/subset-transforms",id:"cp/algorithms/subset-transforms",isDocsHomePage:!1,title:"Subset Transforms (Dynamic Programming)",description:"1. https://codeforces.com/blog/entry/45223",source:"@site/docs/cp/algorithms/subset-transforms.mdx",sourceDirName:"cp/algorithms",slug:"/cp/algorithms/subset-transforms",permalink:"/zen/cp/algorithms/subset-transforms",editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cp/algorithms/subset-transforms.mdx",tags:[],version:"current",lastUpdatedAt:1638204530,formattedLastUpdatedAt:"11/29/2021",frontMatter:{title:"Subset Transforms (Dynamic Programming)",sidebar_label:"Subset Transforms (DP)"},sidebar:"cp",previous:{title:"Sorting",permalink:"/zen/cp/algorithms/sort"},next:{title:"DSU / Union-Find",permalink:"/zen/cp/data-structures/dsu"}},o=[{value:"Zeta Transform &amp; its inverse",id:"zeta-transform--its-inverse",children:[],level:2},{value:"Subset Sum Convolution",id:"subset-sum-convolution",children:[],level:2}],c={toc:o};function N(a){var e=a.components,t=(0,n.Z)(a,p);return(0,m.kt)("wrapper",(0,s.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,m.kt)("div",{parentName:"div",className:"admonition-heading"},(0,m.kt)("h5",{parentName:"div"},(0,m.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,m.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,m.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"references")),(0,m.kt)("div",{parentName:"div",className:"admonition-content"},(0,m.kt)("ol",{parentName:"div"},(0,m.kt)("li",{parentName:"ol"},(0,m.kt)("a",{parentName:"li",href:"https://codeforces.com/blog/entry/45223"},"https://codeforces.com/blog/entry/45223")),(0,m.kt)("li",{parentName:"ol"},(0,m.kt)("a",{parentName:"li",href:"https://codeforces.com/blog/entry/72488"},"https://codeforces.com/blog/entry/72488"))))),(0,m.kt)("h2",{id:"zeta-transform--its-inverse"},"Zeta Transform & its inverse"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},'namespace Algorithm {\n    template<typename T>\n    void zetaTransform(std::span<T> f) {\n        int n = std::countr_zero(f.size());\n        for (int i = 0; i < n; ++i)\n            for (int mask = 0; mask < (1 << n); ++mask)\n                if (mask & (1 << i))\n                    f[mask] += f[mask ^ (1 << i)];\n    }\n\n    /* this is inverse of zetaTransform */\n    template<typename T>\n    void mobiusTransform(std::span<T> f) {\n        int n = std::countr_zero(f.size());\n        for (int i = 0; i < n; ++i)\n            for (int mask = 0; mask < (1 << n); ++mask)\n                if (mask & (1 << i))\n                    f[mask] -= f[mask ^ (1 << i)];\n    }\n}\n\nint main() {\n    std::vector<int> a = {3,7,5,6,1,2,2,1};\n    Algorithm::zetaTransform<int>(a);\n    std::ranges::copy(a, std::ostream_iterator<int>(std::cout, " "));\n}\n')),(0,m.kt)("h2",{id:"subset-sum-convolution"},"Subset Sum Convolution"),(0,m.kt)("div",{className:"math math-display"},(0,m.kt)("span",{parentName:"div",className:"katex-display"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8888799999999999em",verticalAlign:"-0.19444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2218"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"3.800334em",verticalAlign:"-2.750329em"}}),(0,m.kt)("span",{parentName:"span",className:"mop op-limits"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.050005em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-1.283995em",marginLeft:"0em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.142162em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mtable"},(0,m.kt)("span",{parentName:"span",className:"col-align-c"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.6316599999999999em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.68722em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.75em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"a"),(0,m.kt)("span",{parentName:"span",className:"mpunct mtight"},","),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"b"),(0,m.kt)("span",{parentName:"span",className:"mrel mtight"},"\u2286"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"s"))),(0,m.kt)("span",{parentName:"span",style:{top:"-2.79834em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.75em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"a"),(0,m.kt)("span",{parentName:"span",className:"mbin mtight"},"\u222a"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"b"),(0,m.kt)("span",{parentName:"span",className:"mrel mtight"},"="),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"s"))),(0,m.kt)("span",{parentName:"span",style:{top:"-1.8683400000000003em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.75em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2223"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"a"),(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2223"),(0,m.kt)("span",{parentName:"span",className:"mbin mtight"},"+"),(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2223"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"b"),(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2223"),(0,m.kt)("span",{parentName:"span",className:"mrel mtight"},"="),(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2223"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"s"),(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2223")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.1316599999999997em"}},(0,m.kt)("span",{parentName:"span"})))))))))),(0,m.kt)("span",{parentName:"span",style:{top:"-3.1421669999999997em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.142162em"}}),(0,m.kt)("span",{parentName:"span"},(0,m.kt)("span",{parentName:"span",className:"mop op-symbol large-op"},"\u2211")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.750329em"}},(0,m.kt)("span",{parentName:"span"}))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Time Complexity:")," ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.064108em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141079999999999em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.664392em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n")))))))),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))," where ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"\u2223"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mord"},"\u2223"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.664392em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.664392em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"))))))))))))),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"namespace Algorithm {\n    /* unverified */\n    template<typename T>\n    std::vector<T> subsetSumConvolution(std::span<T> f, std::span<T> g) {\n        uint64_t two_power_n = f.size();\n        int n = std::countr_zero(two_power_n);\n\n        std::array<std::vector<T>, 32> f_hat, g_hat, h_hat;\n        std::ranges::fill(f_hat, std::vector<int>(two_power_n, 0));\n        std::ranges::fill(g_hat, std::vector<int>(two_power_n, 0));\n        std::ranges::fill(h_hat, std::vector<int>(two_power_n, 0));\n\n        for (int mask = 0; mask < (1 << n); ++mask) {\n            int set_bit_count = std::popcount((uint64_t) mask);\n            f_hat[set_bit_count][mask] = f[mask];\n            g_hat[set_bit_count][mask] = g[mask];\n        }\n\n        for (int k = 0; k <= n; ++k) zetaTransform<T>(f_hat[k]);\n        for (int k = 0; k <= n; ++k) zetaTransform<T>(g_hat[k]);\n\n        for (int i = 0; i <= n; ++i)\n            for (int j = 0; j <= i; ++j)\n                for (int mask = 0; mask < (1 << n); ++mask)\n                    h_hat[i][mask] += f_hat[j][mask] * g_hat[i - j][mask];\n\n        for (int k = 0; k <= n; ++k) mobiusTransform<T>(h_hat[k]);\n        \n        std::vector<T> fog(two_power_n);\n\n        for (int mask = 0; mask < (1 << n); ++mask)\n            fog[mask] = h_hat[mask][std::popcount((uint64_t) mask)];\n        \n        return fog;\n    }\n}\n")))}N.isMDXComponent=!0}}]);