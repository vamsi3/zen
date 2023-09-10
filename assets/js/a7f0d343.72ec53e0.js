"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[7163],{7942:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(959);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),s=l(n),b=o,d=s["".concat(p,".").concat(b)]||s[b]||u[b]||i;return n?r.createElement(d,a(a({ref:t},m),{},{components:n})):r.createElement(d,a({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[s]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},2754:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(8957),o=(n(959),n(7942));const i={title:"Combination Sum"},a=void 0,c={unversionedId:"cp/problems/combination-sum",id:"cp/problems/combination-sum",title:"Combination Sum",description:"https://leetcode.com/problems/combination-sum/",source:"@site/docs/cp/problems/combination-sum.mdx",sourceDirName:"cp/problems",slug:"/cp/problems/combination-sum",permalink:"/zen/cp/problems/combination-sum",draft:!1,editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cp/problems/combination-sum.mdx",tags:[],version:"current",lastUpdatedAt:1694358037,formattedLastUpdatedAt:"Sep 10, 2023",frontMatter:{title:"Combination Sum"},sidebar:"cp",previous:{title:"Problems",permalink:"/zen/category/problems"},next:{title:"Equal Partition",permalink:"/zen/cp/problems/equal-partition"}},p={},l=[],m={toc:l},s="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"PROBLEM",type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/combination-sum/"},"https://leetcode.com/problems/combination-sum/"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="combinationSum" {7-8}',title:'"combinationSum"',"{7-8}":!0},"class Solution {\npublic:\n    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {\n        vector<vector<int>> validCombinations;\n        vector<int> currentCombination;\n        \n        function<void(vector<int>::iterator const, int)>\n        exploreCombinations = [&](vector<int>::iterator const it, int targetLeftOver) {\n            if (targetLeftOver == 0) {\n                validCombinations.push_back(currentCombination);\n                return;\n            }\n            if (targetLeftOver < 0 || it == candidates.end()) {\n                return;\n            }\n\n            auto const& currentCandidate = *it;\n            currentCombination.push_back(currentCandidate);\n            exploreCombinations(it, targetLeftOver - currentCandidate);\n            currentCombination.pop_back();\n            \n            exploreCombinations(next(it), targetLeftOver);\n        };\n\n        exploreCombinations(candidates.begin(), target);\n        return validCombinations;\n    }\n};\n")),(0,o.kt)("p",null,"Notice how recursive lambdas require explicit type declaration, and how local variables with lambdas mimic global variables with functions."))}u.isMDXComponent=!0}}]);