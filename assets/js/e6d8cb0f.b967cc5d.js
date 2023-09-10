"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[4913],{7942:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(959);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,u=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=i(r),f=a,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||u;return r?n.createElement(d,s(s({ref:t},c),{},{components:r})):n.createElement(d,s({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=r.length,s=new Array(u);s[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var i=2;i<u;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},714:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(959),a=r(5924);const u={tabItem:"tabItem_WUOw"};function s(e){let{children:t,hidden:r,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(u.tabItem,s),hidden:r},t)}},5897:(e,t,r)=>{r.d(t,{Z:()=>_});var n=r(8957),a=r(959),u=r(5924),s=r(5186),o=r(8903),l=r(3078),i=r(2748),c=r(1518);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function m(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:r}=e;const n=(0,o.k6)(),u=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(u),(0,a.useCallback)((e=>{if(!u)return;const t=new URLSearchParams(n.location.search);t.set(u,e),n.replace({...n.location,search:t.toString()})}),[u,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,u=m(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:u}))),[l,i]=d({queryString:r,groupId:n}),[p,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,u]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&u.set(e)}),[r,u])]}({groupId:n}),g=(()=>{const e=l??p;return f({value:e,tabValues:u})?e:null})();(0,a.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:u}))throw new Error(`Can't select invalid tab value=${e}`);o(e),i(e),b(e)}),[i,b,u]),tabValues:u}}var g=r(7525);const y={tabList:"tabList_oWTd",tabItem:"tabItem_MXaH"};function v(e){let{className:t,block:r,selectedValue:o,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),m=e=>{const t=e.currentTarget,r=c.indexOf(t),n=i[r].value;n!==o&&(p(t),l(n))},f=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":r},t)},i.map((e=>{let{value:t,label:r,attributes:s}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:f,onClick:m},s,{className:(0,u.Z)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":o===t})}),r??t)})))}function h(e){let{lazy:t,children:r,selectedValue:n}=e;const u=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=u.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},u.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=b(e);return a.createElement("div",{className:(0,u.Z)("tabs-container",y.tabList)},a.createElement(v,(0,n.Z)({},e,t)),a.createElement(h,(0,n.Z)({},e,t)))}function _(e){const t=(0,g.Z)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}},7722:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(8957),a=(r(959),r(7942)),u=r(5897),s=r(714);const o={title:"Largest sum of contiguous subarray no larger than K"},l=void 0,i={unversionedId:"cp/problems/largest-sum-of-contiguous-subarray-no-larger-than-k",id:"cp/problems/largest-sum-of-contiguous-subarray-no-larger-than-k",title:"Largest sum of contiguous subarray no larger than K",description:"",source:"@site/docs/cp/problems/largest-sum-of-contiguous-subarray-no-larger-than-k.mdx",sourceDirName:"cp/problems",slug:"/cp/problems/largest-sum-of-contiguous-subarray-no-larger-than-k",permalink:"/zen/cp/problems/largest-sum-of-contiguous-subarray-no-larger-than-k",draft:!1,editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cp/problems/largest-sum-of-contiguous-subarray-no-larger-than-k.mdx",tags:[],version:"current",lastUpdatedAt:1694358037,formattedLastUpdatedAt:"Sep 10, 2023",frontMatter:{title:"Largest sum of contiguous subarray no larger than K"},sidebar:"cp",previous:{title:"Largest Rectangle in Histogram",permalink:"/zen/cp/problems/largest-rectangle-in-histogram"},next:{title:"Merge K sorted lists",permalink:"/zen/cp/problems/merge-k-sorted-lists"}},c={},p=[],m={toc:p},f="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(u.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"Code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Problem :: anyMaxSubArraySumLessThanK" {6,12}',title:'"Problem',"::":!0,'anyMaxSubArraySumLessThanK"':!0,"{6,12}":!0},"namespace Problem {\n    /* Returns sub array as [i, j]. If not found, returns {-1, -1} */\n    template<typename T>\n    std::tuple<int32_t, int32_t> anyMaxSubArraySumLessThanK(std::span<T> a, int64_t k) {\n        int32_t n = static_cast<int32_t>(a.size());\n        std::set<std::tuple<int64_t, int32_t>> prefix_sums = {{0, -1}};\n        int64_t prefix_sum_i = 0, maxSubArraySum = std::numeric_limits<int64_t>::min();\n        std::tuple<int32_t, int32_t> maxSubArray = {-1, -1};\n\n        for (int32_t i : std::views::iota(0, n)) {\n            prefix_sum_i += a[i];\n            auto it = prefix_sums.upper_bound({prefix_sum_i - k, n});\n            if (it != prefix_sums.end()) {\n                auto const& [prefix_sum_j, j] = *it;\n                int64_t subArraySum = prefix_sum_i - prefix_sum_j;\n                if (subArraySum > maxSubArraySum) {\n                    maxSubArraySum = subArraySum;\n                    maxSubArray = {j + 1, i};\n                }\n            }\n            prefix_sums.emplace(prefix_sum_i, i);\n        }\n        \n        return maxSubArray;\n    }\n}\n"))),(0,a.kt)(s.Z,{value:"Verify",mdxType:"TabItem"},(0,a.kt)("div",{class:"verify-tab"},(0,a.kt)("div",{class:"verify"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Verification"',title:'"Verification"'},"int main() {\n    int32_t n, k;\n    std::cin >> n >> k;\n    std::vector<int32_t> a(n);\n    for (int32_t i : std::views::iota(0, n)) {\n        std::cin >> a[i];\n    }\n    auto [l, r] = Problem::anyMaxSubArraySumLessThanK<int32_t>(a, k);\n    std::cout << l << ' ' << r << std::endl;\n}\n"))),(0,a.kt)("div",{class:"input"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Input"',title:'"Input"'},"4 3\n3 0 2 -5\n"))),(0,a.kt)("div",{class:"output"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Output"',title:'"Output"'},"1 2\n")))))))}d.isMDXComponent=!0}}]);