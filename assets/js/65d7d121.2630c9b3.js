"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[7689],{3905:function(t,n,e){e.d(n,{Zo:function(){return u},kt:function(){return f}});var r=e(7294);function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){o(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function c(t,n){if(null==t)return{};var e,r,o=function(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var s=r.createContext({}),p=function(t){var n=r.useContext(s),e=n;return t&&(e="function"==typeof t?t(n):a(a({},n),t)),e},u=function(t){var n=p(t.components);return r.createElement(s.Provider,{value:n},t.children)},l={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(t,n){var e=t.components,o=t.mdxType,i=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),y=p(e),f=o,m=y["".concat(s,".").concat(f)]||y[f]||l[f]||i;return e?r.createElement(m,a(a({ref:n},u),{},{components:e})):r.createElement(m,a({ref:n},u))}));function f(t,n){var e=arguments,o=n&&n.mdxType;if("string"==typeof t||o){var i=e.length,a=new Array(i);a[0]=y;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=t,c.mdxType="string"==typeof t?t:o,a[1]=c;for(var p=2;p<i;p++)a[p]=e[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,e)}y.displayName="MDXCreateElement"},6011:function(t,n,e){e.r(n),e.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var r=e(3117),o=e(102),i=(e(7294),e(3905)),a=["components"],c={title:"Point Class",sidebar_label:"Point [Class]"},s=void 0,p={unversionedId:"cp/geometry/point-class",id:"cp/geometry/point-class",title:"Point Class",description:"",source:"@site/docs/cp/geometry/point-class.mdx",sourceDirName:"cp/geometry",slug:"/cp/geometry/point-class",permalink:"/zen/cp/geometry/point-class",editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cp/geometry/point-class.mdx",tags:[],version:"current",lastUpdatedAt:1648309952,formattedLastUpdatedAt:"3/26/2022",frontMatter:{title:"Point Class",sidebar_label:"Point [Class]"},sidebar:"cp",previous:{title:"Convex Hull",permalink:"/zen/cp/geometry/convex-hull"},next:{title:"2-SAT",permalink:"/zen/cp/graph/2-sat"}},u={},l=[],y={toc:l};function f(t){var n=t.components,e=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,r.Z)({},y,e,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"namespace Point {\n  template<typename T> class Point {\n  public:\n    T x, y;\n    Point() : x(0), y(0) {}\n    explicit Point(T x_, T y_) : x(x_), y(y_) {}\n    template<typename U> explicit Point(const Point<U>& p) : x(p.x), y(p.y) {}\n\n    friend std::istream& operator>>(std::istream& is, Point& p) { is >> p.x >> p.y; return is; }\n    friend std::ostream& operator<<(std::ostream& os, const Point& p) { os << '(' << p.x << ',' << p.y << ')'; return os; }\n    friend bool operator==(const Point& a, const Point& b) { return a.x == b.x && a.y == b.y; }\n    friend bool operator!=(const Point& a, const Point& b) { return a.x != b.x || a.y != b.y; }\n\n    Point& operator+=(const Point &p) { x += p.x, y += p.y; return *this; }\n    Point& operator-=(const Point &p) { x -= p.x, y -= p.y; return *this; }\n    Point& operator*=(const T& t) { x *= t, y *= t; return *this; }\n    Point& operator/=(const T& t) { x /= t, y /= t; return *this; }\n\n    friend Point operator+(const Point& a, const Point& b) { return Point(a.x + b.x, a.y + b.y); }\n    friend Point operator-(const Point& a, const Point& b) { return Point(a.x - b.x, a.y - b.y); }\n    friend Point operator*(const Point& a, const T& t) { return Point(a.x * t, a.y * t); }\n    friend Point operator*(const T& t, const Point& a) { return Point(a.x * t, a.y * t); }\n    friend Point operator/(const Point& a, const T& t) { return Point(a.x / t, a.y / t); }\n\n    friend T dot(const Point& a, const Point& b) { return a.x * b.x + a.y * b.y; }\n    T cross(const Point& o) const { return x * o.y - y * o.x; }\n    T cross(const Point& a, const Point& b) const { return (a - *this).cross(b - *this); }\n    T l2norm() const { return x * x + y * y; }\n  };\n}\n\nusing P = Point::Point<int64_t>;\n")))}f.isMDXComponent=!0}}]);