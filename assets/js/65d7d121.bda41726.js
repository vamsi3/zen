"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[7689],{9613:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>m});var r=n(9496);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},l=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},y=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),y=p(n),m=o,P=y["".concat(c,".").concat(m)]||y[m]||u[m]||i;return n?r.createElement(P,a(a({ref:e},l),{},{components:n})):r.createElement(P,a({ref:e},l))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=y;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},1204:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(2081),o=(n(9496),n(9613));const i={title:"Point Class",sidebar_label:"Point [Class]"},a=void 0,s={unversionedId:"cp/geometry/point-class",id:"cp/geometry/point-class",title:"Point Class",description:"",source:"@site/docs/cp/geometry/point-class.mdx",sourceDirName:"cp/geometry",slug:"/cp/geometry/point-class",permalink:"/zen/cp/geometry/point-class",draft:!1,editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cp/geometry/point-class.mdx",tags:[],version:"current",lastUpdatedAt:1658505721,formattedLastUpdatedAt:"Jul 22, 2022",frontMatter:{title:"Point Class",sidebar_label:"Point [Class]"},sidebar:"cp",previous:{title:"Convex Hull",permalink:"/zen/cp/geometry/convex-hull"},next:{title:"Graph",permalink:"/zen/category/graph"}},c={},p=[],l={toc:p};function u(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"namespace Point {\n  template<typename T> class Point {\n  public:\n    T x, y;\n    Point() : x(0), y(0) {}\n    explicit Point(T x_, T y_) : x(x_), y(y_) {}\n    template<typename U> explicit Point(const Point<U>& p) : x(p.x), y(p.y) {}\n\n    friend std::istream& operator>>(std::istream& is, Point& p) { is >> p.x >> p.y; return is; }\n    friend std::ostream& operator<<(std::ostream& os, const Point& p) { os << '(' << p.x << ',' << p.y << ')'; return os; }\n    friend bool operator==(const Point& a, const Point& b) { return a.x == b.x && a.y == b.y; }\n    friend bool operator!=(const Point& a, const Point& b) { return a.x != b.x || a.y != b.y; }\n\n    Point& operator+=(const Point &p) { x += p.x, y += p.y; return *this; }\n    Point& operator-=(const Point &p) { x -= p.x, y -= p.y; return *this; }\n    Point& operator*=(const T& t) { x *= t, y *= t; return *this; }\n    Point& operator/=(const T& t) { x /= t, y /= t; return *this; }\n\n    friend Point operator+(const Point& a, const Point& b) { return Point(a.x + b.x, a.y + b.y); }\n    friend Point operator-(const Point& a, const Point& b) { return Point(a.x - b.x, a.y - b.y); }\n    friend Point operator*(const Point& a, const T& t) { return Point(a.x * t, a.y * t); }\n    friend Point operator*(const T& t, const Point& a) { return Point(a.x * t, a.y * t); }\n    friend Point operator/(const Point& a, const T& t) { return Point(a.x / t, a.y / t); }\n\n    friend T dot(const Point& a, const Point& b) { return a.x * b.x + a.y * b.y; }\n    T cross(const Point& o) const { return x * o.y - y * o.x; }\n    T cross(const Point& a, const Point& b) const { return (a - *this).cross(b - *this); }\n    T l2norm() const { return x * x + y * y; }\n  };\n}\n\nusing P = Point::Point<int64_t>;\n")))}u.isMDXComponent=!0}}]);