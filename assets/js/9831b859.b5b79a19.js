"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[1626],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,f=m["".concat(c,".").concat(p)]||m[p]||u[p]||o;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7471:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(9496),r=n(5924);const o="tabItem_FTZG";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},9890:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(2081),r=n(9496),o=n(5924),l=n(506),i=n(741),c=n(3802),s=n(2075);const d="tabList_m6Et",u="tabItem_b767";function m(e){var t,n;const{lazy:l,block:m,defaultValue:p,values:f,groupId:b,className:g}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,i.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===p?p:null!=(t=null!=p?p:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:_,setTabGroupChoices:O}=(0,c.U)(),[E,x]=(0,r.useState)(k),T=[],{blockElementScrollPositionUntilNextRender:w}=(0,s.o5)();if(null!=b){const e=_[b];null!=e&&e!==E&&h.some((t=>t.value===e))&&x(e)}const C=e=>{const t=e.currentTarget,n=T.indexOf(t),a=h[n].value;a!==E&&(w(t),x(a),null!=b&&O(b,String(a)))},N=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=T.indexOf(e.currentTarget)+1;n=null!=(a=T[t])?a:T[0];break}case"ArrowLeft":{var r;const t=T.indexOf(e.currentTarget)-1;n=null!=(r=T[t])?r:T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},g)},h.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>T.push(e),onKeyDown:N,onFocus:C,onClick:C},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(v.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function p(e){const t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},8115:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(2081),r=(n(9496),n(9613)),o=n(9890),l=n(7471);const i={title:"Hamming Code",sidebar_label:"Hamming Code"},c=void 0,s={unversionedId:"cp/algorithms/hamming-code",id:"cp/algorithms/hamming-code",title:"Hamming Code",description:"",source:"@site/docs/cp/algorithms/hamming-code.mdx",sourceDirName:"cp/algorithms",slug:"/cp/algorithms/hamming-code",permalink:"/zen/cp/algorithms/hamming-code",draft:!1,editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cp/algorithms/hamming-code.mdx",tags:[],version:"current",lastUpdatedAt:1658505721,formattedLastUpdatedAt:"Jul 22, 2022",frontMatter:{title:"Hamming Code",sidebar_label:"Hamming Code"},sidebar:"cp",previous:{title:"Cycle Detection",permalink:"/zen/cp/algorithms/cycle-detection"},next:{title:"std::merge",permalink:"/zen/cp/algorithms/merge"}},d={},u=[],m={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="HammingCodeExtended"',title:'"HammingCodeExtended"'},"template<int32_t LOG_2_BLOCK_LENGTH>\nclass HammingCodeExtended {\npublic:\n    static std::vector<bool> encode(std::vector<bool> const& data) {\n        constexpr int32_t message_length = (1 << LOG_2_BLOCK_LENGTH) - LOG_2_BLOCK_LENGTH - 1;\n        constexpr int32_t block_length = (1 << LOG_2_BLOCK_LENGTH);\n        std::vector<bool> encoded_data;\n        for (int i = 0; i < data.size(); i += message_length) {\n            int n = encoded_data.size();\n            encoded_data.resize(n + block_length, 0);\n            int k = 2, p = 0;\n            for (int j = i; j < i + message_length; ++j) {\n                ++k; if (!(k & (k  - 1))) ++k;\n                encoded_data[n + k] = data[j];\n                if (encoded_data[n + k]) p ^= k, encoded_data[0] = !encoded_data[0];\n            }\n            for (k = 1; k < LOG_2_BLOCK_LENGTH; ++k) {\n                encoded_data[n + (1 << k)] = p & (1 << k);\n                if (encoded_data[n + (1 << k)]) encoded_data[0] = !encoded_data[0];\n            }\n        }\n        return encoded_data;\n    }\n\n    static std::vector<bool> decode(std::vector<bool> const& data) {\n        // TODO\n    }\n};\n"))),(0,r.kt)(l.Z,{value:"Verify",mdxType:"TabItem"},(0,r.kt)("div",{class:"verify-tab"},(0,r.kt)("div",{class:"verify"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Verification"',title:'"Verification"'},"int main() {\n    std::vector<bool> data;\n    for (int x; std::cin >> x; ) data.push_back(x);\n    auto encoded_data = HammingCodeExtended<4>::encode(data);\n    for (auto x : encoded_data) std::cout << x << ' ';\n}\n"))),(0,r.kt)("div",{class:"input"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Input"',title:'"Input"'},"1 0 1 0 0 1 0 1 0 0 1\n"))),(0,r.kt)("div",{class:"output"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Output"',title:'"Output"'},"1 0 0 1 1 0 1 0 1 0 1 0 1 0 0 1 \n")))))))}p.isMDXComponent=!0}}]);