"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[4854],{7942:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(959);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(n),m=i,f=c["".concat(u,".").concat(m)]||c[m]||s[m]||a;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[c]="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1478:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(1163),i=(n(959),n(7942));const a={title:"Pairing Heap"},o=void 0,p={unversionedId:"cp/data-structures/heap/pairing-heap",id:"cp/data-structures/heap/pairing-heap",title:"Pairing Heap",description:"- https://brilliant.org/wiki/pairing-heap/",source:"@site/docs/cp/data-structures/heap/pairing-heap.mdx",sourceDirName:"cp/data-structures/heap",slug:"/cp/data-structures/heap/pairing-heap",permalink:"/zen/cp/data-structures/heap/pairing-heap",draft:!1,editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cp/data-structures/heap/pairing-heap.mdx",tags:[],version:"current",lastUpdatedAt:1677637965,formattedLastUpdatedAt:"Mar 1, 2023",frontMatter:{title:"Pairing Heap"},sidebar:"cp",previous:{title:"MinMax Heap",permalink:"/zen/cp/data-structures/heap/minmax-heap"},next:{title:"Singly Linked List",permalink:"/zen/cp/data-structures/linked-list"}},u={},l=[],d={toc:l},c="wrapper";function s(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Resources",type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://brilliant.org/wiki/pairing-heap/"},"https://brilliant.org/wiki/pairing-heap/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Pairing_heap"},"https://en.wikipedia.org/wiki/Pairing_heap")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://users.cs.fiu.edu/~weiss/dsaa_c++/code/PairingHeap.cpp"},"https://users.cs.fiu.edu/~weiss/dsaa_c++/code/PairingHeap.cpp")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Double-ended_priority_queue"},"https://en.wikipedia.org/wiki/Double-ended_priority_queue")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <iostream>\n\ntemplate<typename T>\nclass DoubleEndedPriorityQueue {\npublic:\n    DoubleEndedPriorityQueue() = default;\n    DoubleEndedPriorityQueue(DoubleEndedPriorityQueue const&) = default;\n    DoubleEndedPriorityQueue(DoubleEndedPriorityQueue&&) noexcept = default;\n    DoubleEndedPriorityQueue& operator=(DoubleEndedPriorityQueue const&) & = default;\n    DoubleEndedPriorityQueue& operator=(DoubleEndedPriorityQueue&&) & noexcept = default;\n    virtual ~DoubleEndedPriorityQueue() = default;\n\n    virtual bool isEmpty() const = 0;\n    virtual size_t size() const = 0;\n    virtual T getMin() const = 0;\n    virtual T getMax() const = 0;\n    virtual void put(T const&) = 0;\n    virtual void removeMin() = 0;\n    virtual void removeMax() = 0;\n};\n\ntemplate<typename T>\nclass PairingHeap : public DoubleEndedPriorityQueue<T> {\nprivate:\n    class Node {\n    public:\n        Node* nextSibling = nullptr;\n        Node* leftmostChild = nullptr;\n        T value;\n\n        explicit Node(T value) : value(value) {}\n        ~Node() { delete nextSibling; delete leftmostChild; }\n    };\n\n    Node* root = nullptr;\n\n    void compareAndLink(Node* otherNode) {\n        if (root == nullptr || otherNode == nullptr) return;\n        if (otherNode->value < root->value) std::swap(root, otherNode);\n        // ...\n    }\n\npublic:\n\n\n    [[nodiscard]] bool isEmpty() const override { return root == nullptr; }\n    [[nodiscard]] size_t size() const override { return 1; }\n\n    [[nodiscard]] T getMin() const override {\n        if (root == nullptr) return 0;\n        return root->value;\n    }\n\n    friend void merge(PairingHeap heap1, PairingHeap heap2) {\n        heap1.compareAndLink(heap2.root);\n    }\n\n    void put(T const& value) override {\n        Node* newNode = new Node(value);\n        if (root == nullptr) {\n            root = newNode;\n        } else {\n            this->compareAndLink(newNode);\n        }\n    }\n};\n")))}s.isMDXComponent=!0}}]);