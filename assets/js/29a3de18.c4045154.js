"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[8480],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=c(r),f=o,d=s["".concat(i,".").concat(f)]||s[f]||u[f]||a;return r?n.createElement(d,l(l({ref:t},m),{},{components:r})):n.createElement(d,l({ref:t},m))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3969:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return m},default:function(){return s}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),l=["components"],p={title:"Fast Fourier Transform (FFT)",sidebar_label:"FFT"},i=void 0,c={unversionedId:"cp/math/fft",id:"cp/math/fft",isDocsHomePage:!1,title:"Fast Fourier Transform (FFT)",description:"",source:"@site/docs/cp/math/fft.mdx",sourceDirName:"cp/math",slug:"/cp/math/fft",permalink:"/zen/cp/math/fft",editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cp/math/fft.mdx",tags:[],version:"current",lastUpdatedAt:1635580456,formattedLastUpdatedAt:"10/30/2021",frontMatter:{title:"Fast Fourier Transform (FFT)",sidebar_label:"FFT"},sidebar:"cp",previous:{title:"Chinese Remainder Theorem",permalink:"/zen/cp/math/chinese-remainder-theorem"},next:{title:"Fibonacci Numbers",permalink:"/zen/cp/math/fibonacci"}},m=[],u={toc:m};function s(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"namespace Math {\n    template<typename T> class Complex {\n    public:\n        T real, imag;\n\n        constexpr Complex() = default;\n        constexpr Complex(Complex const&) = default;\n        constexpr Complex(Complex&&) = default;\n        constexpr Complex(const T& r) : real(r), imag(0) {}\n        constexpr Complex(const T& r, const T& i) : real(r), imag(i) {}\n        constexpr ~Complex() = default;\n\n        Complex& operator=(Complex const&) & = default;\n        Complex& operator=(Complex&&) & = default;\n        bool operator==(Complex const&) const = default;\n\n        Complex& operator-() const { return Complex(-real, -imag); }\n        Complex& operator+=(Complex const& o) { real += o.real; imag += o.imag; return *this; }\n        Complex& operator-=(Complex const& o) { real -= o.real; imag -= o.imag; return *this; }\n        Complex& operator*=(Complex const& o) {\n            T r = real * o.real - imag * o.imag, i = real * o.imag + imag * o.real;\n            real = r; imag = i; return *this;\n        }\n        Complex& operator/=(Complex const& o) {\n            T r = real * o.real + imag * o.imag, i = imag * o.real - real * o.imag;\n            auto t = o.magnitudeSquare();\n            real = r / t; imag = i / t; return *this;\n        }\n\n        friend Complex operator+(Complex a, Complex const& b) { return a += b; }\n        friend Complex operator-(Complex a, Complex const& b) { return a -= b; }\n        friend Complex operator*(Complex a, Complex const& b) { return a *= b; }\n        friend Complex operator/(Complex a, Complex const& b) { return a /= b; }\n\n        Complex conjugate() const { return Complex(real, -imag); }\n        T magnitudeSquare() const { return real * real + imag * imag; }\n\n    };\n}\n\nnamespace Math {\n    template<typename Complex> class FFT {\n    public:\n        static void fft(std::span<T>& a, bool inverse) {\n            // TODO\n        }\n    };\n}\n")))}s.isMDXComponent=!0}}]);