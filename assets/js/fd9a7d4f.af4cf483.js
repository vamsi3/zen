"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[6859],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7471:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(9496),a=n(5924);const i="tabItem_FTZG";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,l),hidden:n},t)}},9890:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(2081),a=n(9496),i=n(5924),l=n(506),o=n(741),s=n(3802),c=n(2075);const u="tabList_m6Et",p="tabItem_b767";function m(e){var t,n;const{lazy:l,block:m,defaultValue:d,values:f,groupId:b,className:v}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:g.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),h=(0,o.l)(y,((e,t)=>e.value===t.value));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===d?d:null!=(t=null!=d?d:null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)?t:g[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:z,setTabGroupChoices:O}=(0,s.U)(),[T,w]=(0,a.useState)(k),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=b){const e=z[b];null!=e&&e!==T&&y.some((t=>t.value===e))&&w(e)}const Z=e=>{const t=e.currentTarget,n=x.indexOf(t),r=y[n].value;r!==T&&(E(t),w(r),null!=b&&O(b,String(r)))},_=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=x.indexOf(e.currentTarget)+1;n=null!=(r=x[t])?r:x[0];break}case"ArrowLeft":{var a;const t=x.indexOf(e.currentTarget)-1;n=null!=(a=x[t])?a:x[x.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},v)},y.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>x.push(e),onKeyDown:_,onFocus:Z,onClick:Z},l,{className:(0,i.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(g.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,l.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},6693:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(2081),a=(n(9496),n(9613)),i=n(9890),l=n(7471);const o={title:"Z-function & Z-algorithm",sidebar_label:"Z-function"},s=void 0,c={unversionedId:"cp/string/z-function",id:"cp/string/z-function",title:"Z-function & Z-algorithm",description:"",source:"@site/docs/cp/string/z-function.mdx",sourceDirName:"cp/string",slug:"/cp/string/z-function",permalink:"/zen/cp/string/z-function",draft:!1,editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cp/string/z-function.mdx",tags:[],version:"current",lastUpdatedAt:1658505721,formattedLastUpdatedAt:"Jul 22, 2022",frontMatter:{title:"Z-function & Z-algorithm",sidebar_label:"Z-function"},sidebar:"cp",previous:{title:"Suffix Automaton",permalink:"/zen/cp/string/suffix-automaton"}},u={},p=[],m={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Algorithm :: z_function | String :: z_function"',title:'"Algorithm',"::":!0,z_function:!0,"|":!0,String:!0,'z_function"':!0},"namespace Algorithm {\n    template<typename T>\n    std::vector<int32_t> z_function(std::span<T> const& s) {\n        int32_t n = static_cast<int32_t>(s.size());\n        std::vector<int32_t> z(n, 0);\n        for (int32_t i = 1, l = 0, r = 0; i < n; ++i) {\n            if (i <= r) z[i] = std::min(r - i + 1, z[i - l]);\n            while (i + z[i] < n && s[i + z[i]] == s[z[i]]) ++z[i];\n            if (i + z[i] - 1 > r) l = i, r = i + z[i] - 1;\n        }\n        return z;\n    }\n}\n\nnamespace String {\n    std::vector<int> z_function(std::string const& s) {\n        return Algorithm::z_function<char const>({s.begin(), s.length()});\n    }\n}\n"))),(0,a.kt)(l.Z,{value:"Verify",mdxType:"TabItem"},(0,a.kt)("div",{class:"verify-tab"},(0,a.kt)("div",{class:"verify"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Verification"',title:'"Verification"'},"int main() {\n    std::string s; std::cin >> s;\n    auto z = String::z_function(s);\n    for (auto const& x : z) std::cout << x << ' ';\n}\n"))),(0,a.kt)("div",{class:"input"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Input"',title:'"Input"'},"abacaba\n"))),(0,a.kt)("div",{class:"output"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Output"',title:'"Output"'},"0 0 1 0 3 0 1 \n")))))))}d.isMDXComponent=!0}}]);