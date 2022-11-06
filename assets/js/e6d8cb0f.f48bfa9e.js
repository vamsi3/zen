"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[4913],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,b=m["".concat(i,".").concat(d)]||m[d]||p[d]||s;return r?n.createElement(b,o(o({ref:t},c),{},{components:r})):n.createElement(b,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<s;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1978:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(9496),a=r(5924);const s="tabItem_IPoj";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,o),hidden:r},t)}},2356:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(4250),a=r(9496),s=r(5924),o=r(9298),l=r(1461),i=r(3903),u=r(4539);const c="tabList_xr86",p="tabItem_r4_W";function m(e){var t;const{lazy:r,block:o,defaultValue:m,values:d,groupId:b,className:f}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??y.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),v=(0,l.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===m?m:m??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==h&&!g.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:_}=(0,i.U)(),[x,O]=(0,a.useState)(h),T=[],{blockElementScrollPositionUntilNextRender:w}=(0,u.o5)();if(null!=b){const e=k[b];null!=e&&e!==x&&g.some((t=>t.value===e))&&O(e)}const S=e=>{const t=e.currentTarget,r=T.indexOf(t),n=g[r].value;n!==x&&(w(t),O(n),null!=b&&_(b,String(n)))},E=e=>{var t;let r=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;r=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;r=T[t]??T[T.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},f)},g.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>T.push(e),onKeyDown:E,onClick:S},o,{className:(0,s.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":x===t})}),r??t)}))),r?(0,a.cloneElement)(y.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function d(e){const t=(0,o.Z)();return a.createElement(m,(0,n.Z)({key:String(t)},e))}},1120:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=r(4250),a=(r(9496),r(9613)),s=r(2356),o=r(1978);const l={title:"Largest sum of contiguous subarray no larger than K"},i=void 0,u={unversionedId:"cp/problems/largest-sum-of-contiguous-subarray-no-larger-than-k",id:"cp/problems/largest-sum-of-contiguous-subarray-no-larger-than-k",title:"Largest sum of contiguous subarray no larger than K",description:"",source:"@site/docs/cp/problems/largest-sum-of-contiguous-subarray-no-larger-than-k.mdx",sourceDirName:"cp/problems",slug:"/cp/problems/largest-sum-of-contiguous-subarray-no-larger-than-k",permalink:"/zen/cp/problems/largest-sum-of-contiguous-subarray-no-larger-than-k",draft:!1,editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cp/problems/largest-sum-of-contiguous-subarray-no-larger-than-k.mdx",tags:[],version:"current",lastUpdatedAt:1667746530,formattedLastUpdatedAt:"Nov 6, 2022",frontMatter:{title:"Largest sum of contiguous subarray no larger than K"},sidebar:"cp",previous:{title:"Largest Rectangle in Histogram",permalink:"/zen/cp/problems/largest-rectangle-in-histogram"},next:{title:"Number Of Divisors",permalink:"/zen/cp/problems/number-of-divisors"}},c={},p=[],m={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Problem :: anyMaxSubArraySumLessThanK" {6,12}',title:'"Problem',"::":!0,'anyMaxSubArraySumLessThanK"':!0,"{6,12}":!0},"namespace Problem {\n    /* Returns sub array as [i, j]. If not found, returns {-1, -1} */\n    template<typename T>\n    std::tuple<int32_t, int32_t> anyMaxSubArraySumLessThanK(std::span<T> a, int64_t k) {\n        int32_t n = static_cast<int32_t>(a.size());\n        std::set<std::tuple<int64_t, int32_t>> prefix_sums = {{0, -1}};\n        int64_t prefix_sum_i = 0, maxSubArraySum = std::numeric_limits<int64_t>::min();\n        std::tuple<int32_t, int32_t> maxSubArray = {-1, -1};\n\n        for (int32_t i : std::views::iota(0, n)) {\n            prefix_sum_i += a[i];\n            auto it = prefix_sums.upper_bound({prefix_sum_i - k, n});\n            if (it != prefix_sums.end()) {\n                auto const& [prefix_sum_j, j] = *it;\n                int64_t subArraySum = prefix_sum_i - prefix_sum_j;\n                if (subArraySum > maxSubArraySum) {\n                    maxSubArraySum = subArraySum;\n                    maxSubArray = {j + 1, i};\n                }\n            }\n            prefix_sums.emplace(prefix_sum_i, i);\n        }\n        \n        return maxSubArray;\n    }\n}\n"))),(0,a.kt)(o.Z,{value:"Verify",mdxType:"TabItem"},(0,a.kt)("div",{class:"verify-tab"},(0,a.kt)("div",{class:"verify"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Verification"',title:'"Verification"'},"int main() {\n    int32_t n, k;\n    std::cin >> n >> k;\n    std::vector<int32_t> a(n);\n    for (int32_t i : std::views::iota(0, n)) {\n        std::cin >> a[i];\n    }\n    auto [l, r] = Problem::anyMaxSubArraySumLessThanK<int32_t>(a, k);\n    std::cout << l << ' ' << r << std::endl;\n}\n"))),(0,a.kt)("div",{class:"input"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Input"',title:'"Input"'},"4 3\n3 0 2 -5\n"))),(0,a.kt)("div",{class:"output"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Output"',title:'"Output"'},"1 2\n")))))))}d.isMDXComponent=!0}}]);