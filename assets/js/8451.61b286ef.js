"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[8451],{2219:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(9496),l=t(5384),i=t(2635),r=t(2081),o=t(5924);const c="iconEdit_vIk7";function s(e){let{className:n,...t}=e;return a.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(c,n),"aria-hidden":"true"},t),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function m(e){let{editUrl:n}=e;return a.createElement("a",{href:n,target:"_blank",rel:"noreferrer noopener",className:i.k.common.editThisPage},a.createElement(s,null),a.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},9274:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(2081),l=t(9496),i=t(5924),r=t(5384),o=t(1322);const c="anchorWithStickyNavbar_ktGG",s="anchorWithHideOnScrollNavbar_Umhj";function m(e){let{as:n,id:t,...m}=e;const{navbar:{hideOnScroll:d}}=(0,o.L)();return"h1"!==n&&t?l.createElement(n,(0,a.Z)({},m,{className:(0,i.Z)("anchor",d?s:c),id:t}),m.children,l.createElement("a",{className:"hash-link",href:"#"+t,title:(0,r.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(n,(0,a.Z)({},m,{id:void 0}))}},1467:(e,n,t)=>{t.d(n,{Z:()=>I});var a=t(9496),l=t(9613),i=t(2081),r=t(7728);var o=t(805);var c=t(4406);var s=t(5924),m=t(506),d=t(3858);const u="details_pYlW",p="isBrowser_p1fM",h="collapsibleContent_pOGs";function f(e){return!!e&&("SUMMARY"===e.tagName||f(e.parentElement))}function v(e,n){return!!e&&(e===n||v(e.parentElement,n))}function E(e){let{summary:n,children:t,...l}=e;const r=(0,m.Z)(),o=(0,a.useRef)(null),{collapsed:c,setCollapsed:E}=(0,d.u)({initialState:!l.open}),[g,Z]=(0,a.useState)(l.open);return a.createElement("details",(0,i.Z)({},l,{ref:o,open:g,"data-collapsed":c,className:(0,s.Z)(u,r&&p,l.className),onMouseDown:e=>{f(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;f(n)&&v(n,o.current)&&(e.preventDefault(),c?(E(!1),Z(!0)):E(!0))}}),null!=n?n:a.createElement("summary",null,"Details"),a.createElement(d.z,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{E(e),Z(!e)}},a.createElement("div",{className:h},t)))}const g="details_DUvu";function Z(e){let{...n}=e;return a.createElement(E,(0,i.Z)({},n,{className:(0,s.Z)("alert alert--info",g,n.className)}))}var b=t(9274);function N(e){return a.createElement(b.Z,e)}const C="containsTaskList_zhds";const y="img_cZzF";var T=t(2635),_=t(5384);const k="admonition_I1qO",z="admonitionHeading_abNt",x="admonitionIcon_aOo6",w="admonitionContent_EHcI";const M={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(_.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(_.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(_.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(_.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(_.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},A={secondary:"note",important:"info",success:"tip",warning:"danger"};function H(e){var n;const{mdxAdmonitionTitle:t,rest:l}=function(e){const n=a.Children.toArray(e),t=n.find((e=>{var n;return a.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(n=e.props)?void 0:n.mdxType)})),l=a.createElement(a.Fragment,null,n.filter((e=>e!==t)));return{mdxAdmonitionTitle:t,rest:l}}(e.children);return{...e,title:null!=(n=e.title)?n:t,children:l}}const R={head:function(e){const n=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){var n;if(null!=(n=e.props)&&n.mdxType&&e.props.originalType){const{mdxType:n,originalType:t,...l}=e.props;return a.createElement(e.props.originalType,l)}return e}(e):e));return a.createElement(r.Z,e,n)},code:function(e){const n=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((e=>{var t;return"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&n.includes(null==(t=e.props)?void 0:t.mdxType)}))?a.createElement("code",e):a.createElement(o.Z,e)},a:function(e){return a.createElement(c.Z,e)},pre:function(e){var n;return a.createElement(o.Z,(0,a.isValidElement)(e.children)&&"code"===(null==(n=e.children.props)?void 0:n.originalType)?e.children.props:{...e})},details:function(e){const n=a.Children.toArray(e.children),t=n.find((e=>{var n;return a.isValidElement(e)&&"summary"===(null==(n=e.props)?void 0:n.mdxType)})),l=a.createElement(a.Fragment,null,n.filter((e=>e!==t)));return a.createElement(Z,(0,i.Z)({},e,{summary:t}),l)},ul:function(e){return a.createElement("ul",(0,i.Z)({},e,{className:(n=e.className,(0,s.Z)(n,(null==n?void 0:n.includes("contains-task-list"))&&C))}));var n},img:function(e){return a.createElement("img",(0,i.Z)({loading:"lazy"},e,{className:(n=e.className,(0,s.Z)(n,y))}));var n},h1:e=>a.createElement(N,(0,i.Z)({as:"h1"},e)),h2:e=>a.createElement(N,(0,i.Z)({as:"h2"},e)),h3:e=>a.createElement(N,(0,i.Z)({as:"h3"},e)),h4:e=>a.createElement(N,(0,i.Z)({as:"h4"},e)),h5:e=>a.createElement(N,(0,i.Z)({as:"h5"},e)),h6:e=>a.createElement(N,(0,i.Z)({as:"h6"},e)),admonition:function(e){const{children:n,type:t,title:l,icon:i}=H(e),r=function(e){var n;const t=null!=(n=A[e])?n:e;return M[t]||(console.warn('No admonition config found for admonition type "'+t+'". Using Info as fallback.'),M.info)}(t),o=null!=l?l:r.label,{iconComponent:c}=r,m=null!=i?i:a.createElement(c,null);return a.createElement("div",{className:(0,s.Z)(T.k.common.admonition,T.k.common.admonitionType(e.type),"alert","alert--"+r.infimaClassName,k)},a.createElement("div",{className:z},a.createElement("span",{className:x},m),o),a.createElement("div",{className:w},n))}};function I(e){let{children:n}=e;return a.createElement(l.Zo,{components:R},n)}},954:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(9496),l=t(5924),i=t(4406);function r(e){const{permalink:n,title:t,subLabel:r,isNext:o}=e;return a.createElement(i.Z,{className:(0,l.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:n},r&&a.createElement("div",{className:"pagination-nav__sublabel"},r),a.createElement("div",{className:"pagination-nav__label"},t))}},5462:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(9496),l=t(5924),i=t(4406);const r="tag_yRbd",o="tagRegular_E7Ae",c="tagWithCount_vnAT";function s(e){let{permalink:n,label:t,count:s}=e;return a.createElement(i.Z,{href:n,className:(0,l.Z)(r,s?c:o)},t,s&&a.createElement("span",null,s))}},1465:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(9496),l=t(5924),i=t(5384),r=t(5462);const o="tags_IoFA",c="tag_AsI2";function s(e){let{tags:n}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,l.Z)(o,"padding--none","margin-left--sm")},n.map((e=>{let{label:n,permalink:t}=e;return a.createElement("li",{key:t,className:c},a.createElement(r.Z,{label:n,permalink:t}))}))))}}}]);