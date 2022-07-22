"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[7008],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9367:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(2081),a=(r(9496),r(9613));const l={title:"Tree",sidebar_label:"Tree"},o=void 0,i={unversionedId:"cp/data-structures/tree",id:"cp/data-structures/tree",title:"Tree",description:'Whenever we say a Tree ADT, we usually refer to the "rooted, directed, acyclic" one. [Ref: Wikipedia]',source:"@site/docs/cp/data-structures/tree.mdx",sourceDirName:"cp/data-structures",slug:"/cp/data-structures/tree",permalink:"/zen/cp/data-structures/tree",draft:!1,editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cp/data-structures/tree.mdx",tags:[],version:"current",lastUpdatedAt:1658505721,formattedLastUpdatedAt:"Jul 22, 2022",frontMatter:{title:"Tree",sidebar_label:"Tree"},sidebar:"cp",previous:{title:"Treap",permalink:"/zen/cp/data-structures/treap"},next:{title:"Vector",permalink:"/zen/cp/data-structures/vector"}},s={},c=[{value:"Binary Tree",id:"binary-tree",level:2},{value:"Tree Traversals",id:"tree-traversals",level:2},{value:"Binary Search Tree (BST)",id:"binary-search-tree-bst",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'::: tip NOTE\nWhenever we say a Tree ADT, we usually refer to the "rooted, directed, acyclic" one. ',"[Ref: Wikipedia]","\n:::"),(0,a.kt)("h2",{id:"binary-tree"},"Binary Tree"),(0,a.kt)("p",null,"A tree in which each node has atmost 2 children, ordered and designated as left and right child."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Height"),": Number of ",(0,a.kt)("u",null,"edges")," in longest path from root to leaf."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Full"),": Every node has either 0 or 2 children."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Perfect"),": All interior nodes have 2 children and all leaves are at same level."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Complete"),": Tree is perfect until last-but-one level and all leaf nodes on the last level are pushed to left.")),(0,a.kt)("h2",{id:"tree-traversals"},"Tree Traversals"),(0,a.kt)("p",null,"Pre-order, in-order, post-order, level-order"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Note: A traversal means to  visit every single node whereas a search means searching for a particular node and hence searches need not visit every tree.")),(0,a.kt)("h2",{id:"binary-search-tree-bst"},"Binary Search Tree (BST)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"All nodes in left subtree are < root node, all nodes in right subtree > root node. This order property applies to every subtree in the Binary Search Tree.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Primarily helpful for implementing Dictionary ADT"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Find, Insert, Remove, Empty"),(0,a.kt)("li",{parentName:"ul"},"Nodes in BST essentialy denote keys of the dictionary. Values can be thought of being linked to nodes.")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'template<typename K, typename D>\nconst D& Dictionary<K, D>::find(const K &key) {\n  Node* &node = _find(key, _head);\n  if (node == nullptr) { throw runtime_error("Key not found"); }\n  return node->data;\n}\n\ntemplate<typename K, typename D>\ntypename Dictionary<K, D>::Node*& Dictionary<K, D>::_find(const K &key, Node *& cur) {\n  if (cur == nullptr) { return cur; }\n  if (key == cur->key) { return cur; }\n  auto next = (key < cur->key) ? cur->left : cur->right;\n  _find(key, next);\n}\n\ntemplate<typename K, typename D>\nvoid Dictionary<K, D>::insert(const K &key, const D &data) {\n  auto node = _find(key, head_);\n  node = new Node(key, data);\n}\n\n// remove can be implemented as a case by case basis based on how many children the removed node has.\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Height Balance Factor")," (denoted by ",(0,a.kt)("inlineCode",{parentName:"p"},"b"),") of a node in BST is the difference in height between its to subtrees.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Balanced BST"),": Every node in BST has balance factor of 0 or 1."))))}u.isMDXComponent=!0}}]);