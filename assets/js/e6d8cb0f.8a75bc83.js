"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[4913],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||u;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,o=new Array(u);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<u;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7462),a=n(7294),u=n(2389),o=n(9443);var i=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(9521),l=n(6010),c="tabItem_1uMI";function p(e){var t,n,r,u=e.lazy,o=e.block,p=e.defaultValue,m=e.values,f=e.groupId,d=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:b.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),y=(0,s.lx)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=b[0])?void 0:r.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=i(),k=h.tabGroupChoices,x=h.setTabGroupChoices,_=(0,a.useState)(g),O=_[0],T=_[1],w=[],S=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var E=k[f];null!=E&&E!==O&&v.some((function(e){return e.value===E}))&&T(E)}var j=function(e){var t=e.currentTarget,n=w.indexOf(t),r=v[n].value;r!==O&&(S(t),T(r),null!=f&&x(f,r))},N=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=w.indexOf(e.currentTarget)+1;n=w[r]||w[0];break;case"ArrowLeft":var a=w.indexOf(e.currentTarget)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},d)},v.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,className:(0,l.Z)("tabs__item",c,{"tabs__item--active":O===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:N,onFocus:j,onClick:j},null!=n?n:t)}))),u?(0,a.cloneElement)(b.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function m(e){var t=(0,u.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},2481:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var r=n(7462),a=n(3366),u=(n(7294),n(3905)),o=n(6396),i=n(8215),s=["components"],l={title:"Largest sum of contiguous subarray no larger than K",sidebar_label:"Largest sum of contiguous subarray no larger than K"},c=void 0,p={unversionedId:"cp/problems/largest-sum-of-contiguous-subarray-no-larger-than-k",id:"cp/problems/largest-sum-of-contiguous-subarray-no-larger-than-k",isDocsHomePage:!1,title:"Largest sum of contiguous subarray no larger than K",description:"",source:"@site/docs/cp/problems/largest-sum-of-contiguous-subarray-no-larger-than-k.mdx",sourceDirName:"cp/problems",slug:"/cp/problems/largest-sum-of-contiguous-subarray-no-larger-than-k",permalink:"/zen/cp/problems/largest-sum-of-contiguous-subarray-no-larger-than-k",editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cp/problems/largest-sum-of-contiguous-subarray-no-larger-than-k.mdx",tags:[],version:"current",lastUpdatedAt:1636813074,formattedLastUpdatedAt:"11/13/2021",frontMatter:{title:"Largest sum of contiguous subarray no larger than K",sidebar_label:"Largest sum of contiguous subarray no larger than K"},sidebar:"cp",previous:{title:"Select Links",permalink:"/zen/cp/problems/interesting"},next:{title:"Number Of Divisors",permalink:"/zen/cp/problems/number-of-divisors"}},m=[],f={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,u.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)(o.Z,{mdxType:"Tabs"},(0,u.kt)(i.Z,{value:"Code",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Problem :: anyMaxSubArraySumLessThanK"',title:'"Problem',"::":!0,'anyMaxSubArraySumLessThanK"':!0},"namespace Problem {\n    /* Returns sub array as [i, j]. If not found, returns {-1, -1} */\n    template<typename T>\n    std::tuple<int32_t, int32_t> anyMaxSubArraySumLessThanK(std::span<T> a, int64_t k) {\n        int32_t n = static_cast<int32_t>(a.size());\n        std::set<std::tuple<int64_t, int32_t>> prefix_sums = {{0, -1}};\n        int64_t prefix_sum_i = 0, maxSubArraySum = std::numeric_limits<int64_t>::min();\n        std::tuple<int32_t, int32_t> maxSubArray = {-1, -1};\n\n        for (int32_t i : std::views::iota(0, n)) {\n            prefix_sum_i += a[i];\n            auto it = prefix_sums.upper_bound({prefix_sum_i - k, n});\n            if (it != prefix_sums.end()) {\n                auto const& [prefix_sum_j, j] = *it;\n                int64_t subArraySum = prefix_sum_i - prefix_sum_j;\n                if (subArraySum > maxSubArraySum) {\n                    maxSubArraySum = subArraySum;\n                    maxSubArray = {j + 1, i};\n                }\n            }\n            prefix_sums.emplace(prefix_sum_i, i);\n        }\n        \n        return maxSubArray;\n    }\n}\n"))),(0,u.kt)(i.Z,{value:"Verify",mdxType:"TabItem"},(0,u.kt)("div",{class:"verify-tab"},(0,u.kt)("div",{class:"verify"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Verification"',title:'"Verification"'},"int main() {\n    int32_t n, k;\n    std::cin >> n >> k;\n    std::vector<int32_t> a(n);\n    for (int32_t i : std::views::iota(0, n)) {\n        std::cin >> a[i];\n    }\n    auto [l, r] = Problem::anyMaxSubArraySumLessThanK<int32_t>(a, k);\n    std::cout << l << ' ' << r << std::endl;\n}\n"))),(0,u.kt)("div",{class:"input"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Input"',title:'"Input"'},"4 3\n3 0 2 -5\n"))),(0,u.kt)("div",{class:"output"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Output"',title:'"Output"'},"1 2\n")))))))}d.isMDXComponent=!0}}]);