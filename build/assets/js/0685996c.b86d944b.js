(self.webpackChunkosmicsx=self.webpackChunkosmicsx||[]).push([[9622],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,y=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1e3:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},p="Hooks",s={unversionedId:"api/hooks",id:"api/hooks",isDocsHomePage:!1,title:"Hooks",description:"OsmiCSX provide custom hooks to make styling more easier inside functional component.",source:"@site/docs/api/hooks.md",sourceDirName:"api",slug:"/api/hooks",permalink:"/docs/next/api/hooks",editUrl:"https://github.com/OsmiCSX/docs-v2/docs/api/hooks.md",version:"current",lastUpdatedAt:1658373924,formattedLastUpdatedAt:"7/21/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/next/getting-started/configuration"},next:{title:"HoC",permalink:"/docs/next/api/hoc"}},u=[{value:"useStyles",id:"usestyles",children:[]},{value:"Return Type",id:"return-type",children:[]}],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hooks"},"Hooks"),(0,o.kt)("p",null,"OsmiCSX provide custom hooks to make styling more easier inside functional component."),(0,o.kt)("h2",{id:"usestyles"},"useStyles"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"harmony",harmony:!0},'import { useStyles } from "osmicsx";\n\nexport const Button = () => {\n  const { apply } = useStyles();\n\n  return (\n    <TouchableOpacity\n      activeOpacity={0.8}\n      style={apply("py-2 px-5 rounded-lg bg-blue-500")}\n    >\n      <Text style={apply("text-sm font-semibold text-white")}>Click Me</Text>\n    </TouchableOpacity>\n  );\n};\n')),(0,o.kt)("h2",{id:"return-type"},"Return Type"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"apply"),(0,o.kt)("td",{parentName:"tr",align:null},"(...args: string[]) => any"),(0,o.kt)("td",{parentName:"tr",align:null},"return an object styles or string (if only apply ",(0,o.kt)("inlineCode",{parentName:"td"},"color-name"),")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"switchTheme"),(0,o.kt)("td",{parentName:"tr",align:null},"(mode: keyof typeof ThemeMode) => void"),(0,o.kt)("td",{parentName:"tr",align:null},"mode can be ",(0,o.kt)("inlineCode",{parentName:"td"},"dark"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"light"),", or ",(0,o.kt)("inlineCode",{parentName:"td"},"system"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"scaleWidth"),(0,o.kt)("td",{parentName:"tr",align:null},"(width: number) => number"),(0,o.kt)("td",{parentName:"tr",align:null},"return width in number depends on screen resolution")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"scaleHeight"),(0,o.kt)("td",{parentName:"tr",align:null},"(height: number) => number"),(0,o.kt)("td",{parentName:"tr",align:null},"return height in number depends on screen resolution")))))}m.isMDXComponent=!0}}]);