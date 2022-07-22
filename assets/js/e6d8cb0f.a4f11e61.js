"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[4913],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=i(r),d=a,b=m["".concat(u,".").concat(d)]||m[d]||p[d]||s;return r?n.createElement(b,l(l({ref:t},c),{},{components:r})):n.createElement(b,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var i=2;i<s;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7471:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(9496),a=r(5924);const s="tabItem_FTZG";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,l),hidden:r},t)}},9890:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(2081),a=r(9496),s=r(5924),l=r(506),o=r(741),u=r(3802),i=r(2075);const c="tabList_m6Et",p="tabItem_b767";function m(e){var t,r;const{lazy:l,block:m,defaultValue:d,values:b,groupId:f,className:y}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=b?b:g.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),h=(0,o.l)(v,((e,t)=>e.value===t.value));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===d?d:null!=(t=null!=d?d:null==(r=g.find((e=>e.props.default)))?void 0:r.props.value)?t:g[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:_,setTabGroupChoices:x}=(0,u.U)(),[O,T]=(0,a.useState)(k),w=[],{blockElementScrollPositionUntilNextRender:S}=(0,i.o5)();if(null!=f){const e=_[f];null!=e&&e!==O&&v.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,r=w.indexOf(t),n=v[r].value;n!==O&&(S(t),T(n),null!=f&&x(f,String(n)))},j=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{var n;const t=w.indexOf(e.currentTarget)+1;r=null!=(n=w[t])?n:w[0];break}case"ArrowLeft":{var a;const t=w.indexOf(e.currentTarget)-1;r=null!=(a=w[t])?a:w[w.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":m},y)},v.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>w.push(e),onKeyDown:j,onFocus:E,onClick:E},l,{className:(0,s.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=r?r:t)}))),l?(0,a.cloneElement)(g.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function d(e){const t=(0,l.Z)();return a.createElement(m,(0,n.Z)({key:String(t)},e))}},6013:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(2081),a=(r(9496),r(9613)),s=r(9890),l=r(7471);const o={title:"Largest sum of contiguous subarray no larger than K"},u=void 0,i={unversionedId:"cp/problems/largest-sum-of-contiguous-subarray-no-larger-than-k",id:"cp/problems/largest-sum-of-contiguous-subarray-no-larger-than-k",title:"Largest sum of contiguous subarray no larger than K",description:"",source:"@site/docs/cp/problems/largest-sum-of-contiguous-subarray-no-larger-than-k.mdx",sourceDirName:"cp/problems",slug:"/cp/problems/largest-sum-of-contiguous-subarray-no-larger-than-k",permalink:"/zen/cp/problems/largest-sum-of-contiguous-subarray-no-larger-than-k",draft:!1,editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cp/problems/largest-sum-of-contiguous-subarray-no-larger-than-k.mdx",tags:[],version:"current",lastUpdatedAt:1658505721,formattedLastUpdatedAt:"Jul 22, 2022",frontMatter:{title:"Largest sum of contiguous subarray no larger than K"},sidebar:"cp",previous:{title:"Largest Rectangle in Histogram",permalink:"/zen/cp/problems/largest-rectangle-in-histogram"},next:{title:"Number Of Divisors",permalink:"/zen/cp/problems/number-of-divisors"}},c={},p=[],m={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Problem :: anyMaxSubArraySumLessThanK" {6,12}',title:'"Problem',"::":!0,'anyMaxSubArraySumLessThanK"':!0,"{6,12}":!0},"namespace Problem {\n    /* Returns sub array as [i, j]. If not found, returns {-1, -1} */\n    template<typename T>\n    std::tuple<int32_t, int32_t> anyMaxSubArraySumLessThanK(std::span<T> a, int64_t k) {\n        int32_t n = static_cast<int32_t>(a.size());\n        std::set<std::tuple<int64_t, int32_t>> prefix_sums = {{0, -1}};\n        int64_t prefix_sum_i = 0, maxSubArraySum = std::numeric_limits<int64_t>::min();\n        std::tuple<int32_t, int32_t> maxSubArray = {-1, -1};\n\n        for (int32_t i : std::views::iota(0, n)) {\n            prefix_sum_i += a[i];\n            auto it = prefix_sums.upper_bound({prefix_sum_i - k, n});\n            if (it != prefix_sums.end()) {\n                auto const& [prefix_sum_j, j] = *it;\n                int64_t subArraySum = prefix_sum_i - prefix_sum_j;\n                if (subArraySum > maxSubArraySum) {\n                    maxSubArraySum = subArraySum;\n                    maxSubArray = {j + 1, i};\n                }\n            }\n            prefix_sums.emplace(prefix_sum_i, i);\n        }\n        \n        return maxSubArray;\n    }\n}\n"))),(0,a.kt)(l.Z,{value:"Verify",mdxType:"TabItem"},(0,a.kt)("div",{class:"verify-tab"},(0,a.kt)("div",{class:"verify"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Verification"',title:'"Verification"'},"int main() {\n    int32_t n, k;\n    std::cin >> n >> k;\n    std::vector<int32_t> a(n);\n    for (int32_t i : std::views::iota(0, n)) {\n        std::cin >> a[i];\n    }\n    auto [l, r] = Problem::anyMaxSubArraySumLessThanK<int32_t>(a, k);\n    std::cout << l << ' ' << r << std::endl;\n}\n"))),(0,a.kt)("div",{class:"input"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Input"',title:'"Input"'},"4 3\n3 0 2 -5\n"))),(0,a.kt)("div",{class:"output"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Output"',title:'"Output"'},"1 2\n")))))))}d.isMDXComponent=!0}}]);