"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[2936],{7942:(t,n,e)=>{e.d(n,{Zo:()=>l,kt:()=>v});var r=e(959);function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){i(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function s(t,n){if(null==t)return{};var e,r,i=function(t,n){if(null==t)return{};var e,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}var c=r.createContext({}),p=function(t){var n=r.useContext(c),e=n;return t&&(e="function"==typeof t?t(n):a(a({},n),t)),e},l=function(t){var n=p(t.components);return r.createElement(c.Provider,{value:n},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},M=r.forwardRef((function(t,n){var e=t.components,i=t.mdxType,o=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),u=p(e),M=i,v=u["".concat(c,".").concat(M)]||u[M]||m[M]||o;return e?r.createElement(v,a(a({ref:n},l),{},{components:e})):r.createElement(v,a({ref:n},l))}));function v(t,n){var e=arguments,i=n&&n.mdxType;if("string"==typeof t||i){var o=e.length,a=new Array(o);a[0]=M;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=t,s[u]="string"==typeof t?t:i,a[1]=s;for(var p=2;p<o;p++)a[p]=e[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,e)}M.displayName="MDXCreateElement"},9232:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=e(1163),i=(e(959),e(7942));const o={title:"Modular Integer Class",sidebar_label:"Integers in Modular Arithmetic"},a=void 0,s={unversionedId:"cp/math/modint",id:"cp/math/modint",title:"Modular Integer Class",description:"- Iterative modular inverse//codeforces.com/blog/entry/64345?#comment-482502",source:"@site/docs/cp/math/modint.mdx",sourceDirName:"cp/math",slug:"/cp/math/modint",permalink:"/zen/cp/math/modint",draft:!1,editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cp/math/modint.mdx",tags:[],version:"current",lastUpdatedAt:1677637965,formattedLastUpdatedAt:"Mar 1, 2023",frontMatter:{title:"Modular Integer Class",sidebar_label:"Integers in Modular Arithmetic"},sidebar:"cp",previous:{title:"M\xf6bius function",permalink:"/zen/cp/math/mobius"},next:{title:"Montgomery Space",permalink:"/zen/cp/math/montgomery"}},c={},p=[],l={toc:p},u="wrapper";function m(t){let{components:n,...e}=t;return(0,i.kt)(u,(0,r.Z)({},l,e,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"reference",type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Iterative modular inverse: ",(0,i.kt)("a",{parentName:"li",href:"https://codeforces.com/blog/entry/64345?#comment-482502"},"https://codeforces.com/blog/entry/64345?#comment-482502")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'namespace Math {\n    template<int32_t MOD_> class Mint {\n        static_assert(MOD_ > 0, "MOD must be positive");\n\n    private:\n        int32_t v;\n\n    public:\n        static constexpr int32_t MOD = MOD_;\n        constexpr Mint() : v(0) {}\n        constexpr Mint(int32_t v_) : v(v_ % MOD) { if (v < 0) v += MOD; }\n        constexpr Mint(int64_t v_) : v(static_cast<int32_t>(v_ % MOD)) { if (v < 0) v += MOD; }\n        explicit operator int() const { return v; }\n        friend std::ostream& operator << (std::ostream& os, const Mint& n) { return os << int(n); }\n        friend std::istream& operator >> (std::istream& is, Mint& n) { int64_t v_; is >> v_; n = Mint(v_); return is; }\n        friend bool operator == (const Mint& a, const Mint& b) { return a.v == b.v; }\n        friend bool operator != (const Mint& a, const Mint& b) { return a.v != b.v; }\n  \n        Mint  operator +  ()    { return Mint(*this); }\n        Mint  operator -  ()    { Mint n; n.v = v ? MOD - v : 0; return n; }\n        Mint& operator ++ ()    { ++v; if (v == MOD) v = 0; return *this; }\n        Mint& operator -- ()    { if (v == 0) v = MOD; --v; return *this; }\n        Mint  operator ++ (int) { Mint n(*this); operator++(); return n; }\n        Mint  operator -- (int) { Mint n(*this); operator--(); return n; }\n  \n        Mint& operator += (const Mint &o) { if ((v += o.v) >= MOD) v -= MOD; return *this; }\n        Mint& operator -= (const Mint &o) { if ((v -= o.v) < 0) v += MOD; return *this; }\n        Mint& operator *= (const Mint &o) { auto r = static_cast<int64_t>(v) * o.v; v = static_cast<int32_t>((r >= MOD) ? r % MOD : r); return *this; }\n        Mint& operator /= (const Mint &o) { return *this *= o.inv(); }\n  \n        friend Mint operator + (Mint a, const Mint &b) { return a += b; }\n        friend Mint operator - (Mint a, const Mint &b) { return a -= b; }\n        friend Mint operator * (Mint a, const Mint &b) { return a *= b; }\n        friend Mint operator / (Mint a, const Mint &b) { return a /= b; }\n  \n        Mint pow(int64_t b) const { Mint a(*this), r; r.v = 1; for (b %= (MOD - 1); b > 0; b >>= 1) { if (b & 1) r *= a; a *= a; } return r; }\n        \n        /**\n         *  @brief: See extended euclid algorithm iterative version to understand this logic below.\n         */\n        Mint inv() const {\n            int32_t a1 = MOD, a2 = v, v1 = 0, v2 = 1;\n            while (a2) {\n                int32_t q = a1 / a2;\n                a1 -= q * a2; swap(a1, a2);\n                v1 -= q * v2; swap(v1, v2);\n            }\n            return Mint(v1);\n        }\n  \n        /**\n         *  @brief: works when MOD is a prime of the form 1+(p*(2^k)), where p is a prime and k > 0. (verification needed?)\n         */\n        static Mint primitiveRoot() {\n            if (MOD == 998244353) return 3;\n            int32_t divisor_2 = 1 << std::countr_zero(static_cast<uint32_t>(MOD - 1));\n            int32_t phi_mod_by_2 = (MOD - 1) / 2;\n            Mint root = 2;\n            while (!(root.pow(divisor_2) != 1 && root.pow(phi_mod_by_2) != 1)) ++root;\n            return root;\n        }\n    };\n}\n\nconstexpr int MOD = 998244353;\nusing Mint = Math::Mint<MOD>;\n')))}m.isMDXComponent=!0}}]);