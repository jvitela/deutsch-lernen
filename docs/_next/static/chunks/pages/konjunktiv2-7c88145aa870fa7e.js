(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[137],{4286:function(a){a.exports=function(a){return a.split("")}},4259:function(a){a.exports=function(a,b,c){var d=-1,e=a.length;b<0&&(b=-b>e?0:e+b),(c=c>e?e:c)<0&&(c+=e),e=b>c?0:c-b>>>0,b>>>=0;for(var f=Array(e);++d<e;)f[d]=a[d+b];return f}},531:function(a,b,c){var d=c(2705),e=c(9932),f=c(1469),g=c(3448),h=1/0,i=d?d.prototype:void 0,j=i?i.toString:void 0;function k(a){if("string"==typeof a)return a;if(f(a))return e(a,k)+"";if(g(a))return j?j.call(a):"";var b=a+"";return"0"==b&&1/a== -h?"-0":b}a.exports=k},180:function(a,b,c){var d=c(4259);a.exports=function(a,b,c){var e=a.length;return c=void 0===c?e:c,!b&&c>=e?a:d(a,b,c)}},8805:function(a,b,c){var d=c(180),e=c(2689),f=c(3140),g=c(9833);a.exports=function(a){return function(b){var c=e(b=g(b))?f(b):void 0,h=c?c[0]:b.charAt(0),i=c?d(c,1).join(""):b.slice(1);return h[a]()+i}}},2689:function(a){var b=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");a.exports=function(a){return b.test(a)}},3140:function(a,b,c){var d=c(4286),e=c(2689),f=c(5889);a.exports=function(a){return e(a)?f(a):d(a)}},5889:function(a){var b="\\ud800-\\udfff",c="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",d="\\ud83c[\\udffb-\\udfff]",e="[^"+b+"]",f="(?:\\ud83c[\\udde6-\\uddff]){2}",g="[\\ud800-\\udbff][\\udc00-\\udfff]",h="(?:"+c+"|"+d+")?",i="[\\ufe0e\\ufe0f]?",j="(?:\\u200d(?:"+[e,f,g].join("|")+")"+i+h+")*",k="(?:"+[e+c+"?",c,f,g,"["+b+"]"].join("|")+")",l=RegExp(d+"(?="+d+")|"+k+(i+h+j),"g");a.exports=function(a){return a.match(l)||[]}},9833:function(a,b,c){var d=c(531);a.exports=function(a){return null==a?"":d(a)}},1700:function(a,b,c){var d=c(8805)("toUpperCase");a.exports=d},4712:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/konjunktiv2",function(){return c(8797)}])},570:function(a,b,c){"use strict";c.d(b,{z:function(){return j}});var d=c(5893),e=c(7294);function f(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var g="w-full font-bold py-2 px-4 border rounded focus:outline-none focus:ring transition-colors",h="disabled:text-gray-300 disabled:border-gray-200 disabled:bg-white",i={atoms:{btn:{default:"".concat(g," text-white bg-blue-500 hover:bg-blue-700 ").concat(h),secondary:"".concat(g," text-blue-500 bg-gray-50 border-gray-300 hover:border-blue-500 ").concat(h),success:"".concat(g," text-green-200 bg-green-500 hover:bg-green-700 ").concat(h),warning:"".concat(g," text-yellow bg-yellow-500 hover:bg-yellow-700 ").concat(h),error:"".concat(g," text-red-200 bg-red-500 hover:bg-red-700 ").concat(h)}}};function j(a){var b,c=a.variant,g=a.isSubmit,h=a.onClick,j=a.children,k=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["variant","isSubmit","onClick","children"]),l=(0,e.useRef)(null);return(0,d.jsx)("button",function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){f(a,b,c[b])})}return a}({},k,{type:g?"submit":"button",className:null===(b=i.atoms.btn)|| void 0===b?void 0:b[c||"default"],onClick:h,ref:l,children:j}))}},4297:function(a,b,c){"use strict";c.d(b,{g:function(){return e}});var d=c(5893);function e(){return(0,d.jsx)("p",{children:"Loading..."})}c(7294)},5421:function(a,b,c){"use strict";c.d(b,{a:function(){return h}});var d=c(5893),e=c(7294),f=c(1952),g=c(570);function h(a){var b=a.variant,c=(0,e.useContext)(f.ZX).next;return(0,d.jsx)(g.z,{onClick:function(){return c("success"===b)},variant:b,autoFocus:!0,children:"Next"})}},1063:function(a,b,c){"use strict";c.d(b,{x:function(){return e}});var d=c(5893);function e(a){var b=a.children;return(0,d.jsx)("p",{className:"block text-xl md:text-base leading-10",children:b})}c(7294)},1952:function(a,b,c){"use strict";c.d(b,{ZX:function(){return h},A3:function(){return j},Zo:function(){return k},jv:function(){return l}});var d=c(5893),e=c(7294),f=c(6026),g=c.n(f),h=e.createContext({index:0,next:function(a){}}),i=e.createContext({exercises:[],index:0,total:0,numTries:0,numFailure:0,numSuccess:0,isFinished:!1,next:function(a){}});function j(a){var b=a.exercises,c=a.children,f=(0,e.useState)(0),h=f[0],j=f[1],k=(0,e.useState)(function(){return g()(b.length)}),l=k[0],m=k[1],n=b.length,o=h>=l.length,p=o?n:l[h],q=l.length-n,r=(0,e.useCallback)(function(a){!o&&(j(function(a){return a+1}),a||m(function(a){return a.concat(p)}))},[p,o]);return(0,d.jsx)(i.Provider,{value:{exercises:b,index:p,total:n,isFinished:o,numFailure:q,numSuccess:h-q,numTries:h,next:r},children:c})}var k=function(){return(0,e.useContext)(i)},l=function(){var a=k(),b=a.exercises,c=a.numTries,f=a.index;return(0,d.jsx)(e.Fragment,{children:b[f]},c)}},4225:function(a,b,c){"use strict";c.d(b,{Q:function(){return e}});var d=c(7294);function e(){var a=(0,d.useState)(!1),b=a[0],c=a[1];return(0,d.useEffect)(function(){return c(!0)},[]),b}},8797:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return z}});var d=c(5893),e=c(9008),f=c(7294),g=c(9983),h=c.n(g),i=c(4225),j=c(1952);function k(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var l=function(a){return a.map(function(a,b){return{id:b,isSelected:!1,value:a}})},m=function(a){var b=(0,f.useState)([]),c=b[0],d=b[1],e=(0,f.useState)(function(){return l(a)}),g=e[0],i=e[1],j=function(a,b){var c=function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){k(a,b,c[b])})}return a}({},a,{isSelected:b});i(function(a){return a.map(function(a){return a.id===c.id?c:a})})};return(0,f.useEffect)(function(){i(l(h()(a))),d([])},[a]),{select:function(a){a.isSelected||(d(function(b){return b.concat(a.id)}),j(a,!0))},unselect:function(a){a.isSelected&&(d(function(b){return b.filter(function(b){return b!==a.id})}),j(a,!1))},all:g,selected:c.map(function(a){return g[a]})}};function n(a){var b=a.value,c=a.isDisabled,e=a.onClick;return(0,d.jsx)("button",{className:"inline-block py-2 px-3 mb-2 border-2 bg-white rounded mr-2 ".concat(c?"border-gray-200 text-gray-300":"border-blue-400 text-gray-800 cursor-pointer hover:bg-gray-100 hover:text-blue-500"),onClick:e,children:b})}var o=c(570),p=c(5421),q=c(1700),r=c.n(q);function s(a){var b=a.instructions,c=a.answers,e=a.options,g=(0,f.useState)("ready"),h=g[0],i=g[1],j=m(e);return(0,d.jsxs)("div",{className:"h-full flex flex-col justify-between",children:[(0,d.jsx)("header",{className:"p-4",children:(0,d.jsx)("p",{children:b})}),(0,d.jsxs)("main",{className:"flex flex-col flex-grow",children:[(0,d.jsx)("div",{className:"flex-grow p-4 bg-gray-100",children:j.selected.map(function(a){return(0,d.jsx)(n,{value:a.value,onClick:function(){return j.unselect(a)}},a.id)})}),(0,d.jsx)("div",{className:"p-4 mt-4",children:j.all.map(function(a){return(0,d.jsx)(n,{value:a.value,onClick:function(){return a.isSelected?j.unselect(a):j.select(a)},isDisabled:a.isSelected},a.id)})}),"error"===h&&(0,d.jsx)("p",{className:"text-red-700 p-4",children:c.map(function(a){return(0,d.jsxs)(d.Fragment,{children:[a,(0,d.jsx)("br",{})]})})})]}),(0,d.jsx)("footer",{className:"p-4",children:"ready"===h?(0,d.jsx)(o.z,{onClick:function(){var a=r()(j.selected.map(function(a){return a.value}).join(" "));console.log({result:a in c,input:a,answers:c}),i(c.some(function(b){return b===a})?"success":"error")},children:"Next"}):(0,d.jsx)(p.a,{variant:h})})]})}var t=c(4297),u=c(1063);function v(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=new Array(b);c<b;c++)d[c]=a[c];return d}function w(a){return(function(a){if(Array.isArray(a))return v(a)})(a)||(function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)})(a)||x(a)||(function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")})()}function x(a,b){if(a){if("string"==typeof a)return v(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return v(a,b)}}(0,d.jsxs)(u.x,{children:["Was h\xe4tten Sie an seiner / ihrer Stelle gemacht?",(0,d.jsx)("br",{}),"Was w\xfcrden Sie an seiner / ihrer Stelle tun?"]});var y=w([{instructions:"Meine Kollegin / immer so tun / sie alles wissen (als ob)",answers:["Meine Kollegin tut immer so, als ob sie alles w\xfcsste"],options:["meine Kollegin","tut","tun","immer so,","als ob","sie","alles","w\xfcsste","w\xfcrde","wissen",]},{instructions:"sie / sich so verhalten - die Chefin sein (als)",answers:["Sie verh\xe4lt sich, als w\xe4re sie die Chefin"],options:["sie","verh\xe4lt","verhalten","sich,","als","w\xe4re","sein","sie","die Chefin",]},{instructions:"sie / oft ohne Entschuldigung zu sp\xe4t kommen - das Recht dazu haben (als ob)",answers:["Sie kommt oft ohne Entschuldigung zu sp\xe4t, als ob sie das Recht dazu h\xe4tte",],options:["sie","kommt","kommen","oft","ohne Entschuldigung","zu sp\xe4t,","als ob","sie","das Recht","dazu","h\xe4tte","haben","w\xfcrde",]},{instructions:"sie / sich oft Benehmen - im B\xfcro zu Hause sein (als ob)",answers:["Sie benimmt sich oft so, als ob sie im B\xfcro zu Hause w\xe4re"],options:["sie","benimmt","benehmen","sich","oft so,","als ob","sie","im B\xfcro","ins B\xfcro","zu Hause","w\xe4re","sein","w\xfcrde",]},{instructions:"sie / so oft tun - dir Kritik nicht verstehen k\xf6nnen (als ob)",answers:["Sie tut oft so, als ob sie die Kritik nicht verstehen k\xf6nnte"],options:["sie","tut","oft so,","als ob","sie","die Kritik","der Kritik","nicht verstehen","k\xf6nnte","kann","w\xfcrden",]},{instructions:"sie / f\xfcr die Betriebsfeier so viel zu essen besorgt - eine Fu\xdfballmanschaft kommt zu Gast (als)",answers:["Sie besorgt f\xfcr die Betriebsfeier so viel zu essen, als k\xe4me eine Fu\xdfballmannschaft zu Gast",],options:["sie","besorgt","f\xfcr","die","Betriebsfeier","der","so viel","zu","essen,","als","k\xe4me","w\xe4re","kommen","eine Fu\xdfballmannschaft","zu Gast",]},]).concat(w([{instructions:"Sie hat wenig Sport getrieben",answers:["An ihrer Stelle h\xe4tte ich mehr Sport getrieben"],options:["an","ihrer","seiner","Stelle","h\xe4tte","w\xfcrde","ich","mehr","Sport","getrieben",]},{instructions:"Er rauch in jeder Pause",answers:["An seiner Stelle w\xfcrde ich nicht so viel rauchen"],options:["an","ihrer","seiner","Stelle","h\xe4tte","w\xfcrde","ich","nicht","so","viel","rauchen",]},{instructions:"Er hat die letzten Tage viel gearbeitet",answers:["An seiner Stelle h\xe4tte ich die letzten Tage nich so viel gearbeitet",],options:["an","seiner","ihrer","Stelle","h\xe4tte","w\xe4re","ich","die letzten","der letzte","Tage","nich so viel","gearbeitet","arbeiten",]},{instructions:"Er trinkt morgens viel Kaffee",answers:["An seiner Stelle w\xfcrde ich morgens nicht so viel Kaffee trinken",],options:["an","ihrer","seiner","Stelle","w\xfcrde","h\xe4tte","ich","morgens","Morgens","nicht","so viel","zu viel","Kaffee","trinken","getrunken",]},{instructions:"Trotz Krankheit blieb sie nicht zu Hause",answers:["An ihrer Stelle w\xe4re ich zu Hause geblieben"],options:["an","seiner","ihrer","Stelle","w\xe4re","h\xe4tte","w\xfcrde","ich","zu Hause","geblieben","bleiben",]},{instructions:"Sie nahm ihren Urlaub nicht",answers:["An ihrer Stelle h\xe4tte ich meinen Urlaub genommen"],options:["an","seiner","ihrer","Stelle","h\xe4tte","w\xfcrde","ich","meinen","meinem","Urlaub","genommen","nehmen",]},{instructions:"Er kommt heute nicht ins B\xfcro",answers:["An seiner Stelle w\xfcrde ich heute ins B\xfcro kommen"],options:["an","seiner","ihrer","Stelle","w\xfcrde","w\xe4re","ich","heute","ins","im","B\xfcro","kommen","gekommen",]},{instructions:"Sie hat das Angebot abgelehnt",answers:["An ihrer Stelle h\xe4tte ich das Angebot angenommen","An ihrer Stelle h\xe4tte ich das Angebot nicht abgelehnt",],options:["an","seine","ihrer","Stelle","h\xe4tte","w\xe4re","ich","das","dem","Angebot","angenommen","nicht","abgelehnt","nehmen",]},]));function z(){var a=(0,i.Q)(),b=(0,f.useState)(function(){return h()(y)})[0],c=(0,f.useState)(0),g=c[0],k=c[1],l=g>=b.length;return(0,d.jsxs)(f.Fragment,{children:[(0,d.jsxs)(e.default,{children:[(0,d.jsx)("title",{children:"Create Next App"}),(0,d.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,d.jsx)("div",{className:"container h-full md:max-w-lg mx-auto",children:l?(0,d.jsx)("p",{children:"Finished"}):a?(0,d.jsx)(j.ZX.Provider,{value:{index:g,next:function(){return k(function(a){return a+1})}},children:(0,d.jsx)(s,{instructions:b[g].instructions,answers:b[g].answers,options:b[g].options},g)}):(0,d.jsx)(t.g,{})})]})}}},function(a){a.O(0,[697,774,888,179],function(){return a(a.s=4712)}),_N_E=a.O()}])