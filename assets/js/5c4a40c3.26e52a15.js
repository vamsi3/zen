"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[7838],{9613:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},152:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(2081),o=(r(9496),r(9613));const a={title:"Cloud",slug:"/cloud",sidebar_label:"Home",sidebar_position:1},i=void 0,c={unversionedId:"cloud/home",id:"cloud/home",title:"Cloud",description:"Docker",source:"@site/docs/cloud/home.mdx",sourceDirName:"cloud",slug:"/cloud",permalink:"/zen/cloud",draft:!1,editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cloud/home.mdx",tags:[],version:"current",lastUpdatedAt:1658505721,formattedLastUpdatedAt:"Jul 22, 2022",sidebarPosition:1,frontMatter:{title:"Cloud",slug:"/cloud",sidebar_label:"Home",sidebar_position:1},sidebar:"cloud"},l={},s=[{value:"Docker",id:"docker",level:2},{value:"Basics",id:"basics",level:3},{value:"Dockerfile - Creating Images",id:"dockerfile---creating-images",level:3}],d={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"docker"},"Docker"),(0,o.kt)("h3",{id:"basics"},"Basics"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Shell"',title:'"Shell"'},"docker create [IMAGE] # Creates a container with image\n\ndocker start [CONTAINER ID]\ndocker start -a [IMAGE] # for our purpose for now, -a to show output on console\n\ndocker run [IMAGE] # Creates a container with image, and starts it\n\ndocker ps --all # List containers\n\ndocker system prune\n\ndocker logs [CONTAINER ID]\n\ndocker stop [CONTAINER ID] # Sends SIGTERM to process in container. If container doesn't stop in 10 seconds, docker sends a KILL signal.\ndocker kill [CONTAINER ID] # Sends SIGKILL to process in container\n\ndocker exec -it [CONTAINER ID] [COMMAND] # Execute an additional command in a container\ndocker exec -it [CONTAINER ID] sh # Specific example very useful in real life, opens up a shell\n\ndocker run -it [CONTAINER ID] sh\n")),(0,o.kt)("h3",{id:"dockerfile---creating-images"},"Dockerfile - Creating Images"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker",metastring:'title="Dockerfile"',title:'"Dockerfile"'},'FROM alpine\nRUN apk add --update redis\nCMD ["redis-server"]\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Shell"',title:'"Shell"'},"docker build . # from directory containing dockerfile\n")))}u.isMDXComponent=!0}}]);