"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[9805],{7942:(t,n,e)=>{e.d(n,{Zo:()=>s,kt:()=>d});var r=e(959);function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){o(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function u(t,n){if(null==t)return{};var e,r,o=function(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var m=r.createContext({}),c=function(t){var n=r.useContext(m),e=n;return t&&(e="function"==typeof t?t(n):a(a({},n),t)),e},s=function(t){var n=c(t.components);return r.createElement(m.Provider,{value:n},t.children)},l="mdxType",p={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(t,n){var e=t.components,o=t.mdxType,i=t.originalType,m=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),l=c(e),y=o,d=l["".concat(m,".").concat(y)]||l[y]||p[y]||i;return e?r.createElement(d,a(a({ref:n},s),{},{components:e})):r.createElement(d,a({ref:n},s))}));function d(t,n){var e=arguments,o=n&&n.mdxType;if("string"==typeof t||o){var i=e.length,a=new Array(i);a[0]=y;var u={};for(var m in n)hasOwnProperty.call(n,m)&&(u[m]=n[m]);u.originalType=t,u[l]="string"==typeof t?t:o,a[1]=u;for(var c=2;c<i;c++)a[c]=e[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,e)}y.displayName="MDXCreateElement"},9382:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>m,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var r=e(1163),o=(e(959),e(7942));const i={title:"Montgomery Space",sidebar_label:"Montgomery Space"},a=void 0,u={unversionedId:"cp/math/montgomery",id:"cp/math/montgomery",title:"Montgomery Space",description:"",source:"@site/docs/cp/math/montgomery.mdx",sourceDirName:"cp/math",slug:"/cp/math/montgomery",permalink:"/zen/cp/math/montgomery",draft:!1,editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cp/math/montgomery.mdx",tags:[],version:"current",lastUpdatedAt:1677637965,formattedLastUpdatedAt:"Mar 1, 2023",frontMatter:{title:"Montgomery Space",sidebar_label:"Montgomery Space"},sidebar:"cp",previous:{title:"Integers in Modular Arithmetic",permalink:"/zen/cp/math/modint"},next:{title:"Number Theoretic Transform (NTT)",permalink:"/zen/cp/math/ntt"}},m={},c=[],s={toc:c},l="wrapper";function p(t){let{components:n,...e}=t;return(0,o.kt)(l,(0,r.Z)({},s,e,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <iostream>\n#include <ranges>\n\nnamespace Montgomery {\n\n    static constinit const uint64_t MOD = 1e9 + 7;\n\n    static std::tuple<uint64_t, uint64_t> mult(uint64_t x, uint64_t y) {\n        uint32_t a = x >> 32, b = x, c = y >> 32, d = y;\n        uint64_t ac = uint64_t(a) * c;\n        uint64_t ad = uint64_t(a) * d;\n        uint64_t bc = uint64_t(b) * c;\n        uint64_t bd = uint64_t(b) * d;\n        uint64_t lo = bd + (ad << 32) + (bc << 32);\n        uint64_t hi = (((bd >> 32) + uint32_t(ad) + uint32_t(bc)) >> 32)\n                        + (ad >> 32) + (bc >> 32) + ac;\n        return {hi, lo};\n    }\n\n    uint64_t to_montogomery(uint64_t);\n    uint64_t from_montogomery(uint64_t);\n    uint64_t mult_montogomery(uint64_t, uint64_t);\n\n    static constinit const uint64_t INV = [] {\n        uint64_t inv = 1;\n        for (auto _ : std::views::iota(0, 6)) inv *= 2 - MOD * inv;\n        return inv;\n    }();\n\n    static const uint64_t R_SQ = [] {\n        uint64_t r_sq = -MOD % MOD;\n        for (auto _ : std::views::iota(0, 4)) {\n            r_sq <<= 1;\n            if (r_sq >= MOD) r_sq -= MOD;\n        }\n        for (auto _ : std::views::iota(0, 4)) r_sq = mult_montogomery(r_sq, r_sq);\n        return r_sq;\n    }();\n\n    uint64_t to_montogomery(uint64_t x) {\n        return mult_montogomery(x, R_SQ);\n    }\n\n    uint64_t from_montogomery(uint64_t x) {\n        return MOD - std::get<0>(mult(x * INV, MOD));\n    }\n\n    uint64_t mult_montogomery(uint64_t x, uint64_t y) {\n        auto [hi, lo] = mult(x, y);\n        int64_t v = int64_t(hi) - std::get<0>(mult(lo * INV, MOD));\n        return (v >= 0) ? v : v + MOD;\n    }\n\n}\n\nint main() {\n    auto a = Montgomery::to_montogomery(31);\n    auto b = Montgomery::to_montogomery(17);\n    auto an = Montgomery::mult_montogomery(a, b);\n    an = Montgomery::from_montogomery(an);\n    std::cout << an << std::endl;\n}\n")))}p.isMDXComponent=!0}}]);