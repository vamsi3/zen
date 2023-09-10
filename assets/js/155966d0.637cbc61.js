"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[1923],{7942:(t,e,n)=>{n.d(e,{Zo:()=>i,kt:()=>g});var r=n(959);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},s=Object.keys(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},i=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},l="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,s=t.originalType,u=t.parentName,i=c(t,["components","mdxType","originalType","parentName"]),l=p(n),m=a,g=l["".concat(u,".").concat(m)]||l[m]||f[m]||s;return n?r.createElement(g,o(o({ref:e},i),{},{components:n})):r.createElement(g,o({ref:e},i))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var s=n.length,o=new Array(s);o[0]=m;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c[l]="string"==typeof t?t:a,o[1]=c;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7931:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=n(8957),a=(n(959),n(7942));const s={title:"RegEx",sidebar_label:"RegEx"},o=void 0,c={unversionedId:"cp/data-structures/regex",id:"cp/data-structures/regex",title:"RegEx",description:"Thompson's NFA",source:"@site/docs/cp/data-structures/regex.mdx",sourceDirName:"cp/data-structures",slug:"/cp/data-structures/regex",permalink:"/zen/cp/data-structures/regex",draft:!1,editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cp/data-structures/regex.mdx",tags:[],version:"current",lastUpdatedAt:1694358037,formattedLastUpdatedAt:"Sep 10, 2023",frontMatter:{title:"RegEx",sidebar_label:"RegEx"},sidebar:"cp",previous:{title:"Singly Linked List",permalink:"/zen/cp/data-structures/linked-list"},next:{title:"Segment Tree",permalink:"/zen/cp/data-structures/segment-tree"}},u={},p=[{value:"Thompson&#39;s NFA",id:"thompsons-nfa",level:2}],i={toc:p},l="wrapper";function f(t){let{components:e,...n}=t;return(0,a.kt)(l,(0,r.Z)({},i,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"thompsons-nfa"},"Thompson's NFA"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <bits/stdc++.h>\nusing namespace std;\n\nclass State {\npublic:\n    int c;\n    State* out;\n    State* out1;\n\n    State(int c, State* out, State* out1) : c(c), out(out), out1(out1) {}\n};\n\nclass NFAFragment {\npublic:\n    State* start;\n    list<State**> out_list;\n\n    NFAFragment(State* start, list<State**> out_list) : start(start), out_list(out_list) {}\n\n    void join(State* s) { for (auto& out : out_list) *out = s; }\n};\n\nState* post2nfa(string postfix_regex) {\n    const static int SPLIT = 256;\n    const static int MATCH = 257;\n\n    stack<NFAFragment> fragment_stack;\n    for (auto& c : postfix_regex) {\n        switch (c) {\n            case '.': {\n                auto f2 = fragment_stack.top(); fragment_stack.pop();\n                auto f1 = fragment_stack.top(); fragment_stack.pop();\n                f1.join(f2.start);\n                fragment_stack.emplace(f1.start, f2.out_list);\n                break;\n            }\n            case '|': {\n                auto f2 = fragment_stack.top(); fragment_stack.pop();\n                auto f1 = fragment_stack.top(); fragment_stack.pop();\n                auto* s = new State(SPLIT, f1.start, f2.start);\n                f1.out_list.splice(f1.out_list.end(), f2.out_list);\n                fragment_stack.emplace(s, f1.out_list);\n                break;\n            }\n            case '?': {\n                auto f = fragment_stack.top(); fragment_stack.pop();\n                auto* s = new State(SPLIT, f.start, nullptr);\n                f.out_list.push_back(&s->out1);\n                fragment_stack.emplace(s, f.out_list);\n                break;\n            }\n            case '*': {\n                auto f = fragment_stack.top(); fragment_stack.pop();\n                auto* s = new State(SPLIT, f.start, nullptr);\n                f.join(s);\n                fragment_stack.emplace(s, list<State**> {&s->out1});\n                break;\n            }\n            case '+': {\n                auto f = fragment_stack.top(); fragment_stack.pop();\n                auto* s = new State(SPLIT, f.start, nullptr);\n                f.join(s);\n                fragment_stack.emplace(f.start, list<State**> {&s->out1});\n                break;\n            }\n            default: {\n                auto* s = new State(c, nullptr, nullptr);\n                fragment_stack.emplace(s, list<State**> {&s->out});\n            }\n        }\n    }\n    auto f = fragment_stack.top();\n    f.join(new State(MATCH, nullptr, nullptr));\n    return f.start;\n}\n\n// TODO\n\ninline void solve() {\n    // TODO\n}\n")))}f.isMDXComponent=!0}}]);