(self.webpackChunkosmicsx=self.webpackChunkosmicsx||[]).push([[1500],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),f=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=f(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=f(n),m=o,y=s["".concat(p,".").concat(m)]||s[m]||l[m]||i;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var f=2;f<i;f++)a[f]=n[f];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5532:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return f},toc:function(){return u},default:function(){return s}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],c={sidebar_position:1},p="Font Family",f={unversionedId:"typography/font-family",id:"typography/font-family",isDocsHomePage:!1,title:"Font Family",description:"For font family, you need to import your custom font family and register it using react-native.config.js. After that open your CustomTheme.js that used for OsmiProvider, make the pre-defined style like this:",source:"@site/docs/typography/font-family.md",sourceDirName:"typography",slug:"/typography/font-family",permalink:"/docs/next/typography/font-family",editUrl:"https://github.com/OsmiCSX/docs-v2/docs/typography/font-family.md",version:"current",lastUpdatedAt:1625388521,formattedLastUpdatedAt:"7/4/2021",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Custom Spacing",permalink:"/docs/next/spacing/custom-spacing"},next:{title:"Font Size",permalink:"/docs/next/typography/font-size"}},u=[],l={toc:u};function s(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"font-family"},"Font Family"),(0,i.kt)("p",null,"For font family, you need to import your custom font family and register it using ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native.config.js"),". After that open your ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomTheme.js")," that used for OsmiProvider, make the pre-defined style like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"harmony",harmony:!0},'export default {\n  // font family\n  font: {\n    family: {\n      "font-regular": { fontFamily: "Roboto-Regular" },\n      "font-medium": { fontFamily: "Roboto-Medium" },\n      "font-bold": { fontFamily: "Roboto-Bold" },\n    }\n  }\n}\n')))}s.isMDXComponent=!0}}]);