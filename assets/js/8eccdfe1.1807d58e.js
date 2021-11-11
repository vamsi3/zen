"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[5400],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=c(n),m=a,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||i;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(7462),a=n(7294),i=n(2389),o=n(9443);var u=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(9521),c=n(6010),s="tabItem_1uMI";function p(e){var t,n,r,i=e.lazy,o=e.block,p=e.defaultValue,f=e.values,m=e.groupId,d=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,l.lx)(g,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=v[0])?void 0:r.props.value;if(null!==h&&!g.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=u(),k=y.tabGroupChoices,x=y.setTabGroupChoices,O=(0,a.useState)(h),w=O[0],T=O[1],j=[],E=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var P=k[m];null!=P&&P!==w&&g.some((function(e){return e.value===P}))&&T(P)}var N=function(e){var t=e.currentTarget,n=j.indexOf(t),r=g[n].value;r!==w&&(E(t),T(r),null!=m&&x(m,r))},_=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=j.indexOf(e.currentTarget)+1;n=j[r]||j[0];break;case"ArrowLeft":var a=j.indexOf(e.currentTarget)-1;n=j[a]||j[j.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":o},d)},g.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,c.Z)("tabs__item",s,{"tabs__item--active":w===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:_,onFocus:N,onClick:N},null!=n?n:t)}))),i?(0,a.cloneElement)(v.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function f(e){var t=(0,i.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},4619:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return f},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(6396),u=n(8215),l=["components"],c={title:"Knuth\u2013Morris\u2013Pratt algorithm",sidebar_label:"KMP Algorithm"},s=void 0,p={unversionedId:"cp/string/kmp",id:"cp/string/kmp",isDocsHomePage:!1,title:"Knuth\u2013Morris\u2013Pratt algorithm",description:"",source:"@site/docs/cp/string/kmp.mdx",sourceDirName:"cp/string",slug:"/cp/string/kmp",permalink:"/zen/cp/string/kmp",editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cp/string/kmp.mdx",tags:[],version:"current",lastUpdatedAt:1636597146,formattedLastUpdatedAt:"11/11/2021",frontMatter:{title:"Knuth\u2013Morris\u2013Pratt algorithm",sidebar_label:"KMP Algorithm"},sidebar:"cp",previous:{title:"Sieve",permalink:"/zen/cp/math/sieve"},next:{title:"Suffix Automaton",permalink:"/zen/cp/string/suffix-automaton"}},f=[],m={toc:f};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(u.Z,{value:"Code",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Algorithm::prefix_function | String::prefix_function"',title:'"Algorithm::prefix_function',"|":!0,'String::prefix_function"':!0},"namespace Algorithm {\n    template<typename T>\n    std::vector<int32_t> prefix_function(std::span<T> const& s) {\n        int32_t n = static_cast<int32_t>(s.size());\n        std::vector<int32_t> p(n); p[0] = 0;\n        for (int i = 1; i < n; ++i) {\n            int32_t j = p[i - 1];\n            while (j > 0 && s[j] != s[i]) j = p[j - 1];\n            p[i] = (s[i] == s[j]) ? j + 1 : j;\n        }\n        return p;\n    }\n}\n\nnamespace String {\n    /* Part of the KMP algorithm */\n    std::vector<int> prefix_function(std::string const& s) {\n        return Algorithm::prefix_function<char const>({s.begin(), s.length()});\n    }\n}\n"))),(0,i.kt)(u.Z,{value:"Verify",mdxType:"TabItem"},(0,i.kt)("div",{class:"verify-tab"},(0,i.kt)("div",{class:"verify"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Verification code"',title:'"Verification','code"':!0},"int main() {\n    std::string s; std::cin >> s;\n    auto pi = String::prefix_function(s);\n    for (auto const& x : pi) std::cout << x << ' ';\n}\n"))),(0,i.kt)("div",{class:"input"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Input"',title:'"Input"'},"aabaaab\n"))),(0,i.kt)("div",{class:"output"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Output"',title:'"Output"'},"0 1 0 1 2 2 3 \n")))))))}d.isMDXComponent=!0}}]);