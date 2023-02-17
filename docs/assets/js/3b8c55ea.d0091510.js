"use strict";(self.webpackChunkrubylang_docs=self.webpackChunkrubylang_docs||[]).push([[3217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),y=a,b=u["".concat(s,".").concat(y)]||u[y]||d[y]||o;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},9803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},i="Prerequisite",l={unversionedId:"installation",id:"installation",title:"Prerequisite",description:"Ruby is not needed for rubylang python package.",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/rubylang-docs/docs/installation",draft:!1,editUrl:"https://github.com/insumanth/rubylang-docs/docs/installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"RubyLang Docs",permalink:"/rubylang-docs/docs/intro"},next:{title:"Tutorial - Basics",permalink:"/rubylang-docs/docs/category/tutorial---basics"}},s={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"prerequisite"},"Prerequisite"),(0,a.kt)("p",null,"Ruby is not needed for rubylang python package. "),(0,a.kt)("p",null,"Make sure the below Prerequisite are satisfied."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Python 3.7 +"),(0,a.kt)("li",{parentName:"ol"},"Pip")),(0,a.kt)("admonition",{title:"No Dependencies",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Rubylang does not have any pip dependencies as of now and i like to keep it that way \ud83e\udd70. ")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"rubylang is in active development and thus, the requirements could change at any time.\nIt is better to have latest Python release Python 3.7 and above should work.")),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("p",null,"You can install rubylang using pip"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install rubylang\n")))}d.isMDXComponent=!0}}]);