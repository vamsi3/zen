"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[8480],{9613:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,x=u["".concat(i,".").concat(f)]||u[f]||s[f]||a;return r?n.createElement(x,l(l({ref:t},m),{},{components:r})):n.createElement(x,l({ref:t},m))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2531:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(2081),o=(r(9496),r(9613));const a={title:"Fast Fourier Transform (FFT)"},l=void 0,p={unversionedId:"cp/math/fft",id:"cp/math/fft",title:"Fast Fourier Transform (FFT)",description:"",source:"@site/docs/cp/math/fft.mdx",sourceDirName:"cp/math",slug:"/cp/math/fft",permalink:"/zen/cp/math/fft",draft:!1,editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cp/math/fft.mdx",tags:[],version:"current",lastUpdatedAt:1658505721,formattedLastUpdatedAt:"Jul 22, 2022",frontMatter:{title:"Fast Fourier Transform (FFT)"},sidebar:"cp",previous:{title:"Dirichlet Convolution",permalink:"/zen/cp/math/dirichlet-convolution"},next:{title:"Fibonacci Numbers",permalink:"/zen/cp/math/fibonacci"}},i={},c=[],m={toc:c};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"namespace Math {\n    template<typename T> class Complex {\n    public:\n        T real, imag;\n\n        constexpr Complex() = default;\n        constexpr Complex(Complex const&) = default;\n        constexpr Complex(Complex&&) = default;\n        constexpr Complex(const T& r) : real(r), imag(0) {}\n        constexpr Complex(const T& r, const T& i) : real(r), imag(i) {}\n        constexpr ~Complex() = default;\n\n        Complex& operator=(Complex const&) & = default;\n        Complex& operator=(Complex&&) & = default;\n        bool operator==(Complex const&) const = default;\n\n        Complex& operator-() const { return Complex(-real, -imag); }\n        Complex& operator+=(Complex const& o) { real += o.real; imag += o.imag; return *this; }\n        Complex& operator-=(Complex const& o) { real -= o.real; imag -= o.imag; return *this; }\n        Complex& operator*=(Complex const& o) {\n            T r = real * o.real - imag * o.imag, i = real * o.imag + imag * o.real;\n            real = r; imag = i; return *this;\n        }\n        Complex& operator/=(Complex const& o) {\n            T r = real * o.real + imag * o.imag, i = imag * o.real - real * o.imag;\n            auto t = o.magnitudeSquare();\n            real = r / t; imag = i / t; return *this;\n        }\n\n        friend Complex operator+(Complex a, Complex const& b) { return a += b; }\n        friend Complex operator-(Complex a, Complex const& b) { return a -= b; }\n        friend Complex operator*(Complex a, Complex const& b) { return a *= b; }\n        friend Complex operator/(Complex a, Complex const& b) { return a /= b; }\n\n        Complex conjugate() const { return Complex(real, -imag); }\n        T magnitudeSquare() const { return real * real + imag * imag; }\n\n    };\n}\n\nnamespace Math {\n    template<typename Complex> class FFT {\n    public:\n        static void fft(std::span<T>& a, bool inverse) {\n            // TODO\n        }\n    };\n}\n")))}s.isMDXComponent=!0}}]);