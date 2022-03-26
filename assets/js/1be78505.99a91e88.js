"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[9514,4608],{3254:function(e,t,n){n.r(t),n.d(t,{default:function(){return le}});var a=n(7294),r=n(3905),l=n(8790),i=n(2773),o=n(6010),c=n(9553),s=n(5537),d=n(3117);function u(e){return a.createElement("svg",(0,d.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var m=n(5999),p=n(102),h=n(9960),b=n(3919),f=n(541),v="menuHtmlItem_fVIQ",E=n(2389),g=["item"],Z=["item","onItemClick","activePath","level","index"],k=["item","onItemClick","activePath","level","index"];function _(e){var t=e.item,n=(0,p.Z)(e,g);switch(t.type){case"category":return a.createElement(C,(0,d.Z)({item:t},n));case"html":return a.createElement(S,(0,d.Z)({item:t},n));default:return a.createElement(N,(0,d.Z)({item:t},n))}}function C(e){var t=e.item,n=e.onItemClick,r=e.activePath,l=e.level,i=e.index,s=(0,p.Z)(e,Z),u=t.items,b=t.label,f=t.collapsible,v=t.className,g=t.href,k=function(e){var t=(0,E.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0}),[e,t])}(t),_=(0,c._F)(t,r),C=(0,c.Mg)(g,r),S=(0,c.uR)({initialState:function(){return!!f&&(!_&&t.collapsed)}}),N=S.collapsed,T=S.setCollapsed;!function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,l=(0,c.D9)(t);(0,a.useEffect)((function(){t&&!l&&n&&r(!1)}),[t,l,n,r])}({isActive:_,collapsed:N,setCollapsed:T});var I=(0,c.fP)(),M=I.expandedItem,x=I.setExpandedItem;function L(e){void 0===e&&(e=!N),x(e?null:i),T(e)}var A=(0,c.LU)().autoCollapseSidebarCategories;return(0,a.useEffect)((function(){f&&M&&M!==i&&A&&T(!0)}),[f,M,i,T,A]),a.createElement("li",{className:(0,o.Z)(c.kM.docs.docSidebarItemCategory,c.kM.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":N},v)},a.createElement("div",{className:(0,o.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":C})},a.createElement(h.Z,(0,d.Z)({className:(0,o.Z)("menu__link",{"menu__link--sublist":f&&!g,"menu__link--active":_}),onClick:f?function(e){null==n||n(t),g?L(!1):(e.preventDefault(),L())}:function(){null==n||n(t)},"aria-current":C?"page":void 0,href:f?null!=k?k:"#":k},s),b),g&&f&&a.createElement("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:b}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),L()}})),a.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:N},a.createElement(y,{items:u,tabIndex:N?-1:0,onItemClick:n,activePath:r,level:l+1})))}function S(e){var t=e.item,n=e.level,r=e.index,l=t.value,i=t.defaultStyle,s=t.className;return a.createElement("li",{className:(0,o.Z)(c.kM.docs.docSidebarItemLink,c.kM.docs.docSidebarItemLinkLevel(n),i&&v+" menu__list-item",s),key:r,dangerouslySetInnerHTML:{__html:l}})}function N(e){var t=e.item,n=e.onItemClick,r=e.activePath,l=e.level,i=(e.index,(0,p.Z)(e,k)),s=t.href,u=t.label,m=t.className,v=(0,c._F)(t,r);return a.createElement("li",{className:(0,o.Z)(c.kM.docs.docSidebarItemLink,c.kM.docs.docSidebarItemLinkLevel(l),"menu__list-item",m),key:u},a.createElement(h.Z,(0,d.Z)({className:(0,o.Z)("menu__link",{"menu__link--active":v}),"aria-current":v?"page":void 0,to:s},(0,b.Z)(s)&&{onClick:n?function(){return n(t)}:void 0},i),(0,b.Z)(s)?u:a.createElement("span",null,u,a.createElement(f.Z,null))))}var T=["items"];function I(e){var t=e.items,n=(0,p.Z)(e,T);return a.createElement(c.D_,null,t.map((function(e,t){return a.createElement(_,(0,d.Z)({key:t,item:e,index:t},n))})))}var y=(0,a.memo)(I),M="sidebar_CW9Y",x="sidebarWithHideableNavbar_FoYL",L="sidebarHidden_D64r",A="sidebarLogo_FJUI",P="menu_SkdO",w="menuWithAnnouncementBar_x19h",F="collapseSidebarButton_cwdi",B="collapseSidebarButtonIcon_xORG";function D(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",F),onClick:t},a.createElement(u,{className:B}))}function H(e){var t,n,r=e.path,l=e.sidebar,i=e.onCollapse,d=e.isHidden,u=function(){var e=(0,c.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,c.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}(),m=(0,c.LU)(),p=m.navbar.hideOnScroll,h=m.hideableSidebar;return a.createElement("div",{className:(0,o.Z)(M,(t={},t[x]=p,t[L]=d,t))},p&&a.createElement(s.Z,{tabIndex:-1,className:A}),a.createElement("nav",{className:(0,o.Z)("menu thin-scrollbar",P,(n={},n[w]=u,n))},a.createElement("ul",{className:(0,o.Z)(c.kM.docs.docSidebarMenu,"menu__list")},a.createElement(y,{items:l,activePath:r,level:1}))),h&&a.createElement(D,{onClick:i}))}var R=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:(0,o.Z)(c.kM.docs.docSidebarMenu,"menu__list")},a.createElement(y,{items:n,activePath:r,onItemClick:function(e){"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function W(e){return a.createElement(c.Cv,{component:R,props:e})}var O=a.memo(H),V=a.memo(W);function z(e){var t=(0,c.iP)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(O,e),r&&a.createElement(V,e))}var Y=n(5742),U=n(1736),q=n(9649),j="details_BAp3";function G(e){var t=Object.assign({},e);return a.createElement(c.PO,(0,d.Z)({},t,{className:(0,o.Z)("alert alert--info",j,t.className)}))}var K=["mdxType","originalType"];var Q={head:function(e){var t=a.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var r=e.props,l=(r.mdxType,r.originalType,(0,p.Z)(r,K));return a.createElement(e.props.originalType,l)}return e}(e)}));return a.createElement(Y.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||a.isValidElement(e)&&t.includes(e.props.mdxType)}))?a.createElement("code",e):a.createElement(U.Z,e)},a:function(e){return a.createElement(h.Z,e)},pre:function(e){var t;return a.createElement(U.Z,(0,a.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement(G,(0,d.Z)({},e,{summary:n}),r)},h1:function(e){return a.createElement(q.Z,(0,d.Z)({as:"h1"},e))},h2:function(e){return a.createElement(q.Z,(0,d.Z)({as:"h2"},e))},h3:function(e){return a.createElement(q.Z,(0,d.Z)({as:"h3"},e))},h4:function(e){return a.createElement(q.Z,(0,d.Z)({as:"h4"},e))},h5:function(e){return a.createElement(q.Z,(0,d.Z)({as:"h5"},e))},h6:function(e){return a.createElement(q.Z,(0,d.Z)({as:"h6"},e))}},X=n(4608),J="backToTopButton_RiI4",$="backToTopButtonShow_ssHd";function ee(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}function te(){var e,t=(0,a.useState)(!1),n=t[0],r=t[1],l=(0,a.useRef)(!1),i=ee(),s=i.smoothScrollTop,d=i.cancelScrollToTop;return(0,c.RF)((function(e,t){var n=e.scrollY,a=null==t?void 0:t.scrollY;if(a)if(l.current)l.current=!1;else{var i=n<a;if(i||d(),n<300)r(!1);else if(i){var o=document.documentElement.scrollHeight;n+window.innerHeight<o&&r(!0)}else r(!1)}})),(0,c.SL)((function(e){e.location.hash&&(l.current=!0,r(!1))})),a.createElement("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",c.kM.common.backToTopButton,J,(e={},e[$]=n,e)),type:"button",onClick:function(){return s()}})}var ne=n(6775),ae={docPage:"docPage_P2Lg",docMainContainer:"docMainContainer_TCnq",docSidebarContainer:"docSidebarContainer_rKC_",docMainContainerEnhanced:"docMainContainerEnhanced_WDCb",docSidebarContainerHidden:"docSidebarContainerHidden_nvlY",collapsedDocSidebar:"collapsedDocSidebar_Xgr6",expandSidebarButtonIcon:"expandSidebarButtonIcon_AV8S",docItemWrapperEnhanced:"docItemWrapperEnhanced_r_WG"};function re(e){var t,n,l,s=e.currentDocRoute,d=e.versionMetadata,p=e.children,h=e.sidebarName,b=(0,c.Vq)(),f=d.pluginId,v=d.version,E=(0,a.useState)(!1),g=E[0],Z=E[1],k=(0,a.useState)(!1),_=k[0],C=k[1],S=(0,a.useCallback)((function(){_&&C(!1),Z((function(e){return!e}))}),[_]);return a.createElement(i.Z,{wrapperClassName:c.kM.wrapper.docsPages,pageClassName:c.kM.page.docsDocPage,searchMetadata:{version:v,tag:(0,c.os)(f,v)}},a.createElement("div",{className:ae.docPage},a.createElement(te,null),b&&a.createElement("aside",{className:(0,o.Z)(c.kM.docs.docSidebarContainer,ae.docSidebarContainer,(t={},t[ae.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(ae.docSidebarContainer)&&g&&C(!0)}},a.createElement(z,{key:h,sidebar:b,path:s.path,onCollapse:S,isHidden:_}),_&&a.createElement("div",{className:ae.collapsedDocSidebar,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:S,onClick:S},a.createElement(u,{className:ae.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,o.Z)(ae.docMainContainer,(n={},n[ae.docMainContainerEnhanced]=g||!b,n))},a.createElement("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",ae.docItemWrapper,(l={},l[ae.docItemWrapperEnhanced]=g,l))},a.createElement(r.Zo,{components:Q},p)))))}function le(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,i=t.find((function(e){return(0,ne.LX)(r.pathname,e)}));if(!i)return a.createElement(X.default,null);var o=i.sidebar,s=o?n.docsSidebars[o]:null;return a.createElement(a.Fragment,null,a.createElement(Y.Z,null,a.createElement("html",{className:n.className})),a.createElement(c.qu,{version:n},a.createElement(c.bT,{sidebar:s},a.createElement(re,{currentDocRoute:i,versionMetadata:n,sidebarName:o},(0,l.H)(t,{versionMetadata:n})))))}},9649:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(3117),r=n(102),l=n(7294),i=n(6010),o=n(5999),c=n(9553),s="anchorWithStickyNavbar_mojV",d="anchorWithHideOnScrollNavbar_R0VQ",u=["as","id"],m=["as"];function p(e){var t,n=e.as,m=e.id,p=(0,r.Z)(e,u),h=(0,c.LU)().navbar.hideOnScroll;return m?l.createElement(n,(0,a.Z)({},p,{className:(0,i.Z)("anchor",(t={},t[d]=h,t[s]=!h,t)),id:m}),p.children,l.createElement("a",{className:"hash-link",href:"#"+m,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(n,p)}function h(e){var t=e.as,n=(0,r.Z)(e,m);return"h1"===t?l.createElement("h1",(0,a.Z)({},n,{id:void 0}),n.children):l.createElement(p,(0,a.Z)({as:t},n))}},4608:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var a=n(7294),r=n(2773),l=n(5999);function i(){return a.createElement(r.Z,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);