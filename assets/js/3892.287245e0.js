"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[3892],{7214:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(959),i=n(7852),l=n(3886),r=n(8957),o=n(5924);const c={iconEdit:"iconEdit_maoa"};function s(e){let{className:t,...n}=e;return a.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(c.iconEdit,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function m(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:l.k.common.editThisPage},a.createElement(s,null),a.createElement(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},5915:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(8957),i=n(959),l=n(5924),r=n(7852),o=n(3018),c=n(5039);const s={anchorWithStickyNavbar:"anchorWithStickyNavbar_DpJN",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_MPLB"};function m(e){let{as:t,id:n,...m}=e;const{navbar:{hideOnScroll:d}}=(0,o.L)();if("h1"===t||!n)return i.createElement(t,(0,a.Z)({},m,{id:void 0}));const u=(0,r.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof m.children?m.children:n});return i.createElement(t,(0,a.Z)({},m,{className:(0,l.Z)("anchor",d?s.anchorWithHideOnScrollNavbar:s.anchorWithStickyNavbar,m.className),id:n}),m.children,i.createElement(c.Z,{className:"hash-link",to:`#${n}`,"aria-label":u,title:u},"\u200b"))}},8809:(e,t,n)=>{n.d(t,{Z:()=>L});var a=n(959),i=n(7942),l=n(8957),r=n(3636);var o=n(8740);var c=n(5039);var s=n(5924),m=n(7525),d=n(5650);const u={details:"details_gzWJ",isBrowser:"isBrowser_A8N4",collapsibleContent:"collapsibleContent_U087"};function p(e){return!!e&&("SUMMARY"===e.tagName||p(e.parentElement))}function h(e,t){return!!e&&(e===t||h(e.parentElement,t))}function f(e){let{summary:t,children:n,...i}=e;const r=(0,m.Z)(),o=(0,a.useRef)(null),{collapsed:c,setCollapsed:f}=(0,d.u)({initialState:!i.open}),[g,E]=(0,a.useState)(i.open),v=a.isValidElement(t)?t:a.createElement("summary",null,t??"Details");return a.createElement("details",(0,l.Z)({},i,{ref:o,open:g,"data-collapsed":c,className:(0,s.Z)(u.details,r&&u.isBrowser,i.className),onMouseDown:e=>{p(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;p(t)&&h(t,o.current)&&(e.preventDefault(),c?(f(!1),E(!0)):f(!0))}}),v,a.createElement(d.z,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{f(e),E(!e)}},a.createElement("div",{className:u.collapsibleContent},n)))}const g={details:"details_w3qw"},E="alert alert--info";function v(e){let{...t}=e;return a.createElement(f,(0,l.Z)({},t,{className:(0,s.Z)(E,g.details,t.className)}))}var Z=n(5915);function b(e){return a.createElement(Z.Z,e)}const N={containsTaskList:"containsTaskList_Zwm4"};const C={img:"img_IxwU"};var y=n(3886),T=n(7852);const k="admonition_Cf4i",_="admonitionHeading_teC7",z="admonitionIcon_FTmT",w="admonitionContent_qDZA";const x={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(T.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(T.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(T.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(T.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(T.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},M={secondary:"note",important:"info",success:"tip",warning:"danger"};function S(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),i=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:i}}(e.children);return{...e,title:e.title??t,children:n}}const H={head:function(e){const t=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...i}=e.props;return a.createElement(e.props.originalType,i)}return e}(e):e));return a.createElement(r.Z,e,t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props?.mdxType)))?a.createElement("code",e):a.createElement(o.Z,e)},a:function(e){return a.createElement(c.Z,e)},pre:function(e){return a.createElement(o.Z,(0,a.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const t=a.Children.toArray(e.children),n=t.find((e=>a.isValidElement(e)&&"summary"===e.props?.mdxType)),i=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(v,(0,l.Z)({},e,{summary:n}),i)},ul:function(e){return a.createElement("ul",(0,l.Z)({},e,{className:(t=e.className,(0,s.Z)(t,t?.includes("contains-task-list")&&N.containsTaskList))}));var t},img:function(e){return a.createElement("img",(0,l.Z)({loading:"lazy"},e,{className:(t=e.className,(0,s.Z)(t,C.img))}));var t},h1:e=>a.createElement(b,(0,l.Z)({as:"h1"},e)),h2:e=>a.createElement(b,(0,l.Z)({as:"h2"},e)),h3:e=>a.createElement(b,(0,l.Z)({as:"h3"},e)),h4:e=>a.createElement(b,(0,l.Z)({as:"h4"},e)),h5:e=>a.createElement(b,(0,l.Z)({as:"h5"},e)),h6:e=>a.createElement(b,(0,l.Z)({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:i,icon:l}=S(e),r=function(e){const t=M[e]??e,n=x[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),x.info)}(n),o=i??r.label,{iconComponent:c}=r,m=l??a.createElement(c,null);return a.createElement("div",{className:(0,s.Z)(y.k.common.admonition,y.k.common.admonitionType(e.type),"alert",`alert--${r.infimaClassName}`,k)},a.createElement("div",{className:_},a.createElement("span",{className:z},m),o),a.createElement("div",{className:w},t))},mermaid:n(2241).Z};function L(e){let{children:t}=e;return a.createElement(i.Zo,{components:H},t)}},7919:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(959),i=n(5924),l=n(5039);function r(e){const{permalink:t,title:n,subLabel:r,isNext:o}=e;return a.createElement(l.Z,{className:(0,i.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},r&&a.createElement("div",{className:"pagination-nav__sublabel"},r),a.createElement("div",{className:"pagination-nav__label"},n))}},5044:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(959),i=n(5924),l=n(5039);const r={tag:"tag_GiHe",tagRegular:"tagRegular_nECV",tagWithCount:"tagWithCount_JPO0"};function o(e){let{permalink:t,label:n,count:o}=e;return a.createElement(l.Z,{href:t,className:(0,i.Z)(r.tag,o?r.tagWithCount:r.tagRegular)},n,o&&a.createElement("span",null,o))}},7166:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(959),i=n(5924),l=n(7852),r=n(5044);const o={tags:"tags_XFGs",tag:"tag_jcCv"};function c(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,i.Z)(o.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:o.tag},a.createElement(r.Z,{label:t,permalink:n}))}))))}}}]);