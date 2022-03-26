"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[8713],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(v,o(o({ref:t},c),{},{components:n})):r.createElement(v,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(3117),a=n(7294),i=n(2389),o=n(9553),l=n(6010),s="tabItem_LplD";function u(e){var t,n,i,u=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,v=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,o.lx)(h,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=f[0])?void 0:i.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,o.UB)(),y=k.tabGroupChoices,w=k.setTabGroupChoices,N=(0,a.useState)(b),j=N[0],O=N[1],x=[],E=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=y[m];null!=T&&T!==j&&h.some((function(e){return e.value===T}))&&O(T)}var _=function(e){var t=e.currentTarget,n=x.indexOf(t),r=h[n].value;r!==j&&(E(t),O(r),null!=m&&w(m,r))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},v)},h.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return x.push(e)},onKeyDown:D,onFocus:_,onClick:_},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(f.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function c(e){var t=(0,i.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},9478:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=n(9877),l=n(8215),s=["components"],u={title:"Dijkstra's Algorithm",sidebar_label:"Dijkstra's Algorithm"},c=void 0,p={unversionedId:"cp/graph/dijkstra",id:"cp/graph/dijkstra",title:"Dijkstra's Algorithm",description:"- Graph::WeightedEdge \u279d /cp/graph/graph-class",source:"@site/docs/cp/graph/dijkstra.mdx",sourceDirName:"cp/graph",slug:"/cp/graph/dijkstra",permalink:"/zen/cp/graph/dijkstra",editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cp/graph/dijkstra.mdx",tags:[],version:"current",lastUpdatedAt:1648309952,formattedLastUpdatedAt:"3/26/2022",frontMatter:{title:"Dijkstra's Algorithm",sidebar_label:"Dijkstra's Algorithm"},sidebar:"cp",previous:{title:"Centroid Decomposition",permalink:"/zen/cp/graph/centroid-decomposition"},next:{title:"Dual Graphs of Planar Graphs",permalink:"/zen/cp/graph/dual-graphs"}},d={},m=[{value:"Code",id:"code",level:2}],v={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"INCLUDE")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Graph::Graph"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Graph::WeightedEdge")," \u279d ",(0,i.kt)("a",{parentName:"li",href:"/cp/graph/graph-class"},"/cp/graph/graph-class"))))),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Code",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Graph::dijkstra"',title:'"Graph::dijkstra"'},"namespace Graph {\n    std::vector<int32_t> dijkstra(Graph<WeightedEdge> graph, int32_t source) {\n        std::vector<int32_t> distance(graph.adj.size(), INT_MAX);\n        distance[source] = 0;\n\n        auto cmp_distance = [&distance = std::as_const(distance)](auto const& u, auto const& v) {\n            return distance[u] < distance[v];\n        };\n        std::set<int32_t, decltype(cmp_distance)> leaves({source}, cmp_distance);\n\n        while (!leaves.empty()) {\n            auto u = *leaves.begin();\n            leaves.erase(leaves.begin());\n            \n            for (auto const& ed_idx : graph.adj[u]) {\n                auto const& edge = graph.ed[ed_idx];\n                auto v = edge.other(u);\n                int32_t new_distance = distance[u] + edge.w;\n                if (distance[v] <= new_distance) continue;\n                \n                distance[v] = new_distance;\n                auto node_v = leaves.extract(v);\n                if (node_v) {\n                    leaves.insert(std::move(node_v));\n                } else {\n                    leaves.insert(v);\n                }\n            }\n        }\n\n        return distance;\n    }\n}\n"))),(0,i.kt)(l.Z,{value:"Verify",mdxType:"TabItem"},(0,i.kt)("div",{class:"verify-tab"},(0,i.kt)("div",{class:"verify"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Verification"',title:'"Verification"'},"int main() {\n    int n, m; cin >> n >> m;\n    Graph::Graph<Graph::WeightedEdge> g(n);\n    for (auto _ [[maybe_unused]] : std::views::iota(0, m)) {\n        int u, v, w;\n        std::cin >> u >> v >> w;\n        g.addEdge({--u ,--v, w});\n    }\n    auto d = Graph::dijkstra(g, 0);\n    for (auto& x : d) std::cout << x << ' ';\n    std::cout << std::endl;\n}\n"))),(0,i.kt)("div",{class:"input"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Input"',title:'"Input"'},"6 9\n1 2 7\n1 3 9\n1 6 14\n2 3 10\n2 4 15\n3 4 11\n3 6 2\n4 5 6\n5 6 9\n"))),(0,i.kt)("div",{class:"output"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Output"',title:'"Output"'},"0 7 9 20 20 11\n")))))))}f.isMDXComponent=!0}}]);