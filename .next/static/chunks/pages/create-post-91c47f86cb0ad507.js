(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[25],{99697:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create-post",function(){return t(41216)}])},41216:function(n,e,t){"use strict";t.r(e);var r=t(34051),u=t.n(r),o=t(85893),a=t(67294),i=t(11163),c=t(5152),s=t(20294),f=t(241),l=t(77294),p=t(14400),h=t(83346),v=t(73326);function d(n,e,t,r,u,o,a){try{var i=n[o](a),c=i.value}catch(s){return void t(s)}i.done?e(c):Promise.resolve(c).then(r,u)}function b(n){return function(){var e=this,t=arguments;return new Promise((function(r,u){var o=n.apply(e,t);function a(n){d(o,r,u,a,i,"next",n)}function i(n){d(o,r,u,a,i,"throw",n)}a(void 0)}))}}function x(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function g(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){x(n,e,t[e])}))}return n}function m(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function w(){var n=m(["\n  display: none;\n"]);return w=function(){return n},n}function y(){var n=m(["\n  max-width: 800px;\n"]);return y=function(){return n},n}function k(){var n=m(["\n  margin-top: 40px;\n"]);return k=function(){return n},n}function j(){var n=m(["\n  margin-top: 40px;\n  border: none;\n  outline: none;\n  background-color: inherit;\n  font-size: 44px;\n  font-weight: 600;\n  &::placeholder {\n    color: #999999;\n  }\n"]);return j=function(){return n},n}function O(){var n=m(["\n  width: 800px;\n  margin: 0 auto;\n"]);return O=function(){return n},n}function N(){var n=m(["\n  background-color: #fafafa;\n  outline: none;\n  border: none;\n  border-radius: 15px;\n  cursor: pointer;\n  margin-right: 10px;\n  font-size: 18px;\n  padding: 16px 70px;\n  box-shadow: 7px 7px rgba(0, 0, 0, 0.1);\n"]);return N=function(){return n},n}var P=(0,p.Ue)("https://ipfs.infura.io:5001/api/v0"),_=(0,c.default)((function(){return Promise.all([t.e(126),t.e(634),t.e(562)]).then(t.bind(t,81634))}),{loadableGenerated:{webpack:function(){return[81634]}},ssr:!1}),C={title:"",content:""};var E=(0,s.iv)(w()),S=(0,s.iv)(y()),z=(0,s.iv)(k()),R=(0,s.iv)(j()),T=(0,s.iv)(O()),U=(0,s.iv)(N());e.default=function(){var n=(0,a.useState)(C),e=n[0],t=n[1],r=(0,a.useState)(null),c=r[0],s=r[1],p=(0,a.useState)(!1),d=p[0],m=p[1],w=(0,a.useRef)(null),y=e.title,k=e.content,j=(0,i.useRouter)();function O(){return(O=b(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(y&&k){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,N();case 4:return e=n.sent,console.log("hash",e),n.next=8,I(e);case 8:j.push("/");case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function N(){return G.apply(this,arguments)}function G(){return(G=b(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,P.add(JSON.stringify(e));case 3:return t=n.sent,n.abrupt("return",t.path);case 7:n.prev=7,n.t0=n.catch(0),console.log("error: ",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function I(n){return L.apply(this,arguments)}function L(){return(L=b(u().mark((function n(t){var r,o,a,i;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("undefined"===typeof window.ethereum){n.next=15;break}return r=new f.Q(window.ethereum),o=r.getSigner(),a=new l.CH(h.i,v.Mt,o),console.log("contract: ",a),n.prev=5,n.next=8,a.createPost(e.title,t);case 8:i=n.sent,console.log("val: ",i),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(5),console.log("Error: ",n.t0);case 15:case"end":return n.stop()}}),n,null,[[5,12]])})))).apply(this,arguments)}function X(){return(X=b(u().mark((function n(e){var r,o;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=e.target.files[0]){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,P.add(r);case 5:o=n.sent,t((function(n){return g({},n,{coverImage:o.path})})),s(r);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return(0,a.useEffect)((function(){setTimeout((function(){m(!0)}),500)}),[]),(0,o.jsxs)("div",{className:T,children:[c&&(0,o.jsx)("img",{className:S,src:URL.createObjectURL(c)}),(0,o.jsx)("input",{onChange:function(n){t((function(){return g({},e,x({},n.target.name,n.target.value))}))},name:"title",placeholder:"Give it a title ...",value:e.title,className:R}),(0,o.jsx)(_,{className:z,placeholder:"What's on your mind?",value:e.content,onChange:function(n){return t(g({},e,{content:n}))}}),d&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("button",{className:U,type:"button",onClick:function(){return O.apply(this,arguments)},children:"Publish"}),(0,o.jsx)("button",{onClick:function(){w.current.click()},className:U,children:"Add cover image"})]}),(0,o.jsx)("input",{id:"selectImage",className:E,type:"file",onChange:function(n){return X.apply(this,arguments)},ref:w})]})}}},function(n){n.O(0,[622,983,774,888,179],(function(){return e=99697,n(n.s=e);var e}));var e=n.O();_N_E=e}]);