import{c as ot,g as er,n as xt}from"./app-DuS6KM7M.js";import{h as nr}from"./moment-zH0z38ay.js";var st={exports:{}};st.exports;(function(l,r){var s=200,_="Expected a function",w="__lodash_hash_undefined__",h=1,C=2,ct=1/0,At=9007199254740991,W="[object Arguments]",lt="[object Array]",Lt="[object Boolean]",$t="[object Date]",St="[object Error]",Ot="[object Function]",ie="[object GeneratorFunction]",X="[object Map]",Et="[object Number]",M="[object Object]",Pt="[object Promise]",Bt="[object RegExp]",Y="[object Set]",Nt="[object String]",Ft="[object Symbol]",ut="[object WeakMap]",Mt="[object ArrayBuffer]",q="[object DataView]",oe="[object Float32Array]",se="[object Float64Array]",ce="[object Int8Array]",le="[object Int16Array]",ue="[object Int32Array]",fe="[object Uint8Array]",de="[object Uint8ClampedArray]",pe="[object Uint16Array]",_e="[object Uint32Array]",he=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ge=/^\w*$/,ye=/^\./,ve=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,me=/[\\^$.*+?()[\]{}|]/g,be=/\\(\\)?/g,Ce=/^\[object .+?Constructor\]$/,we=/^(?:0|[1-9]\d*)$/,d={};d[oe]=d[se]=d[ce]=d[le]=d[ue]=d[fe]=d[de]=d[pe]=d[_e]=!0,d[W]=d[lt]=d[Mt]=d[Lt]=d[q]=d[$t]=d[St]=d[Ot]=d[X]=d[Et]=d[M]=d[Bt]=d[Y]=d[Nt]=d[ut]=!1;var Dt=typeof ot=="object"&&ot&&ot.Object===Object&&ot,Te=typeof self=="object"&&self&&self.Object===Object&&self,S=Dt||Te||Function("return this")(),Rt=r&&!r.nodeType&&r,It=Rt&&!0&&l&&!l.nodeType&&l,xe=It&&It.exports===Rt,Ut=xe&&Dt.process,Gt=function(){try{return Ut&&Ut.binding("util")}catch{}}(),Ht=Gt&&Gt.isTypedArray;function Ae(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function Kt(t,e){for(var n=-1,a=t?t.length:0,o=Array(a);++n<a;)o[n]=e(t[n],n,t);return o}function Le(t,e){for(var n=-1,a=e.length,o=t.length;++n<a;)t[o+n]=e[n];return t}function $e(t,e){for(var n=-1,a=t?t.length:0;++n<a;)if(e(t[n],n,t))return!0;return!1}function Se(t){return function(e){return e==null?void 0:e[t]}}function Oe(t,e){var n=t.length;for(t.sort(e);n--;)t[n]=t[n].value;return t}function Ee(t,e){for(var n=-1,a=Array(t);++n<t;)a[n]=e(n);return a}function Zt(t){return function(e){return t(e)}}function Pe(t,e){return t==null?void 0:t[e]}function ft(t){var e=!1;if(t!=null&&typeof t.toString!="function")try{e=!!(t+"")}catch{}return e}function Be(t){var e=-1,n=Array(t.size);return t.forEach(function(a,o){n[++e]=[o,a]}),n}function Ne(t,e){return function(n){return t(e(n))}}function Fe(t){var e=-1,n=Array(t.size);return t.forEach(function(a){n[++e]=a}),n}var Me=Array.prototype,De=Function.prototype,J=Object.prototype,dt=S["__core-js_shared__"],Wt=function(){var t=/[^.]+$/.exec(dt&&dt.keys&&dt.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Xt=De.toString,T=J.hasOwnProperty,D=J.toString,Re=RegExp("^"+Xt.call(T).replace(me,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Q=S.Symbol,Yt=S.Uint8Array,Ie=J.propertyIsEnumerable,Ue=Me.splice,qt=Q?Q.isConcatSpreadable:void 0,Ge=Ne(Object.keys,Object),Jt=Math.max,pt=R(S,"DataView"),U=R(S,"Map"),_t=R(S,"Promise"),ht=R(S,"Set"),gt=R(S,"WeakMap"),G=R(Object,"create"),He=N(pt),Ke=N(U),Ze=N(_t),We=N(ht),Xe=N(gt),z=Q?Q.prototype:void 0,yt=z?z.valueOf:void 0,Qt=z?z.toString:void 0;function B(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var a=t[e];this.set(a[0],a[1])}}function Ye(){this.__data__=G?G(null):{}}function qe(t){return this.has(t)&&delete this.__data__[t]}function Je(t){var e=this.__data__;if(G){var n=e[t];return n===w?void 0:n}return T.call(e,t)?e[t]:void 0}function Qe(t){var e=this.__data__;return G?e[t]!==void 0:T.call(e,t)}function ze(t,e){var n=this.__data__;return n[t]=G&&e===void 0?w:e,this}B.prototype.clear=Ye,B.prototype.delete=qe,B.prototype.get=Je,B.prototype.has=Qe,B.prototype.set=ze;function x(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var a=t[e];this.set(a[0],a[1])}}function Ve(){this.__data__=[]}function je(t){var e=this.__data__,n=j(e,t);if(n<0)return!1;var a=e.length-1;return n==a?e.pop():Ue.call(e,n,1),!0}function ke(t){var e=this.__data__,n=j(e,t);return n<0?void 0:e[n][1]}function tn(t){return j(this.__data__,t)>-1}function en(t,e){var n=this.__data__,a=j(n,t);return a<0?n.push([t,e]):n[a][1]=e,this}x.prototype.clear=Ve,x.prototype.delete=je,x.prototype.get=ke,x.prototype.has=tn,x.prototype.set=en;function A(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var a=t[e];this.set(a[0],a[1])}}function nn(){this.__data__={hash:new B,map:new(U||x),string:new B}}function rn(t){return k(this,t).delete(t)}function an(t){return k(this,t).get(t)}function on(t){return k(this,t).has(t)}function sn(t,e){return k(this,t).set(t,e),this}A.prototype.clear=nn,A.prototype.delete=rn,A.prototype.get=an,A.prototype.has=on,A.prototype.set=sn;function V(t){var e=-1,n=t?t.length:0;for(this.__data__=new A;++e<n;)this.add(t[e])}function cn(t){return this.__data__.set(t,w),this}function ln(t){return this.__data__.has(t)}V.prototype.add=V.prototype.push=cn,V.prototype.has=ln;function L(t){this.__data__=new x(t)}function un(){this.__data__=new x}function fn(t){return this.__data__.delete(t)}function dn(t){return this.__data__.get(t)}function pn(t){return this.__data__.has(t)}function _n(t,e){var n=this.__data__;if(n instanceof x){var a=n.__data__;if(!U||a.length<s-1)return a.push([t,e]),this;n=this.__data__=new A(a)}return n.set(t,e),this}L.prototype.clear=un,L.prototype.delete=fn,L.prototype.get=dn,L.prototype.has=pn,L.prototype.set=_n;function hn(t,e){var n=E(t)||wt(t)?Ee(t.length,String):[],a=n.length,o=!!a;for(var i in t)T.call(t,i)&&!(o&&(i=="length"||mt(i,a)))&&n.push(i);return n}function j(t,e){for(var n=t.length;n--;)if(Ct(t[n][0],e))return n;return-1}var gn=Rn(mn);function yn(t,e,n,a,o){var i=-1,c=t.length;for(n||(n=Zn),o||(o=[]);++i<c;){var f=t[i];n(f)?Le(o,f):o[o.length]=f}return o}var vn=In();function mn(t,e){return t&&vn(t,e,rt)}function zt(t,e){e=tt(e,t)?[e]:Vt(e);for(var n=0,a=e.length;t!=null&&n<a;)t=t[et(e[n++])];return n&&n==a?t:void 0}function bn(t){return D.call(t)}function Cn(t,e){return t!=null&&e in Object(t)}function vt(t,e,n,a,o){return t===e?!0:t==null||e==null||!K(t)&&!nt(e)?t!==t&&e!==e:wn(t,e,vt,n,a,o)}function wn(t,e,n,a,o,i){var c=E(t),f=E(e),u=lt,p=lt;c||(u=O(t),u=u==W?M:u),f||(p=O(e),p=p==W?M:p);var y=u==M&&!ft(t),v=p==M&&!ft(e),g=u==p;if(g&&!y)return i||(i=new L),c||zn(t)?jt(t,e,n,a,o,i):Un(t,e,u,n,a,o,i);if(!(o&C)){var m=y&&T.call(t,"__wrapped__"),b=v&&T.call(e,"__wrapped__");if(m||b){var P=m?t.value():t,$=b?e.value():e;return i||(i=new L),n(P,$,a,o,i)}}return g?(i||(i=new L),Gn(t,e,n,a,o,i)):!1}function Tn(t,e,n,a){var o=n.length,i=o;if(t==null)return!i;for(t=Object(t);o--;){var c=n[o];if(c[2]?c[1]!==t[c[0]]:!(c[0]in t))return!1}for(;++o<i;){c=n[o];var f=c[0],u=t[f],p=c[1];if(c[2]){if(u===void 0&&!(f in t))return!1}else{var y=new L,v;if(!(v===void 0?vt(p,u,a,h|C,y):v))return!1}}return!0}function xn(t){if(!K(t)||Xn(t))return!1;var e=ne(t)||ft(t)?Re:Ce;return e.test(N(t))}function An(t){return nt(t)&&Tt(t.length)&&!!d[D.call(t)]}function Ln(t){return typeof t=="function"?t:t==null?re:typeof t=="object"?E(t)?En(t[0],t[1]):On(t):tr(t)}function $n(t){if(!Yn(t))return Ge(t);var e=[];for(var n in Object(t))T.call(t,n)&&n!="constructor"&&e.push(n);return e}function Sn(t,e){var n=-1,a=H(t)?Array(t.length):[];return gn(t,function(o,i,c){a[++n]=e(o,i,c)}),a}function On(t){var e=Hn(t);return e.length==1&&e[0][2]?ee(e[0][0],e[0][1]):function(n){return n===t||Tn(n,t,e)}}function En(t,e){return tt(t)&&te(e)?ee(et(t),e):function(n){var a=jn(n,t);return a===void 0&&a===e?kn(n,t):vt(e,a,void 0,h|C)}}function Pn(t,e,n){var a=-1;e=Kt(e.length?e:[re],Zt(Ln));var o=Sn(t,function(i,c,f){var u=Kt(e,function(p){return p(i)});return{criteria:u,index:++a,value:i}});return Oe(o,function(i,c){return Dn(i,c,n)})}function Bn(t){return function(e){return zt(e,t)}}function Nn(t,e){return e=Jt(e===void 0?t.length-1:e,0),function(){for(var n=arguments,a=-1,o=Jt(n.length-e,0),i=Array(o);++a<o;)i[a]=n[e+a];a=-1;for(var c=Array(e+1);++a<e;)c[a]=n[a];return c[e]=i,Ae(t,this,c)}}function Fn(t){if(typeof t=="string")return t;if(Z(t))return Qt?Qt.call(t):"";var e=t+"";return e=="0"&&1/t==-ct?"-0":e}function Vt(t){return E(t)?t:qn(t)}function Mn(t,e){if(t!==e){var n=t!==void 0,a=t===null,o=t===t,i=Z(t),c=e!==void 0,f=e===null,u=e===e,p=Z(e);if(!f&&!p&&!i&&t>e||i&&c&&u&&!f&&!p||a&&c&&u||!n&&u||!o)return 1;if(!a&&!i&&!p&&t<e||p&&n&&o&&!a&&!i||f&&n&&o||!c&&o||!u)return-1}return 0}function Dn(t,e,n){for(var a=-1,o=t.criteria,i=e.criteria,c=o.length,f=n.length;++a<c;){var u=Mn(o[a],i[a]);if(u){if(a>=f)return u;var p=n[a];return u*(p=="desc"?-1:1)}}return t.index-e.index}function Rn(t,e){return function(n,a){if(n==null)return n;if(!H(n))return t(n,a);for(var o=n.length,i=-1,c=Object(n);++i<o&&a(c[i],i,c)!==!1;);return n}}function In(t){return function(e,n,a){for(var o=-1,i=Object(e),c=a(e),f=c.length;f--;){var u=c[++o];if(n(i[u],u,i)===!1)break}return e}}function jt(t,e,n,a,o,i){var c=o&C,f=t.length,u=e.length;if(f!=u&&!(c&&u>f))return!1;var p=i.get(t);if(p&&i.get(e))return p==e;var y=-1,v=!0,g=o&h?new V:void 0;for(i.set(t,e),i.set(e,t);++y<f;){var m=t[y],b=e[y];if(a)var P=c?a(b,m,y,e,t,i):a(m,b,y,t,e,i);if(P!==void 0){if(P)continue;v=!1;break}if(g){if(!$e(e,function($,F){if(!g.has(F)&&(m===$||n(m,$,a,o,i)))return g.add(F)})){v=!1;break}}else if(!(m===b||n(m,b,a,o,i))){v=!1;break}}return i.delete(t),i.delete(e),v}function Un(t,e,n,a,o,i,c){switch(n){case q:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case Mt:return!(t.byteLength!=e.byteLength||!a(new Yt(t),new Yt(e)));case Lt:case $t:case Et:return Ct(+t,+e);case St:return t.name==e.name&&t.message==e.message;case Bt:case Nt:return t==e+"";case X:var f=Be;case Y:var u=i&C;if(f||(f=Fe),t.size!=e.size&&!u)return!1;var p=c.get(t);if(p)return p==e;i|=h,c.set(t,e);var y=jt(f(t),f(e),a,o,i,c);return c.delete(t),y;case Ft:if(yt)return yt.call(t)==yt.call(e)}return!1}function Gn(t,e,n,a,o,i){var c=o&C,f=rt(t),u=f.length,p=rt(e),y=p.length;if(u!=y&&!c)return!1;for(var v=u;v--;){var g=f[v];if(!(c?g in e:T.call(e,g)))return!1}var m=i.get(t);if(m&&i.get(e))return m==e;var b=!0;i.set(t,e),i.set(e,t);for(var P=c;++v<u;){g=f[v];var $=t[g],F=e[g];if(a)var ae=c?a(F,$,g,e,t,i):a($,F,g,t,e,i);if(!(ae===void 0?$===F||n($,F,a,o,i):ae)){b=!1;break}P||(P=g=="constructor")}if(b&&!P){var at=t.constructor,it=e.constructor;at!=it&&"constructor"in t&&"constructor"in e&&!(typeof at=="function"&&at instanceof at&&typeof it=="function"&&it instanceof it)&&(b=!1)}return i.delete(t),i.delete(e),b}function k(t,e){var n=t.__data__;return Wn(e)?n[typeof e=="string"?"string":"hash"]:n.map}function Hn(t){for(var e=rt(t),n=e.length;n--;){var a=e[n],o=t[a];e[n]=[a,o,te(o)]}return e}function R(t,e){var n=Pe(t,e);return xn(n)?n:void 0}var O=bn;(pt&&O(new pt(new ArrayBuffer(1)))!=q||U&&O(new U)!=X||_t&&O(_t.resolve())!=Pt||ht&&O(new ht)!=Y||gt&&O(new gt)!=ut)&&(O=function(t){var e=D.call(t),n=e==M?t.constructor:void 0,a=n?N(n):void 0;if(a)switch(a){case He:return q;case Ke:return X;case Ze:return Pt;case We:return Y;case Xe:return ut}return e});function Kn(t,e,n){e=tt(e,t)?[e]:Vt(e);for(var a,o=-1,c=e.length;++o<c;){var i=et(e[o]);if(!(a=t!=null&&n(t,i)))break;t=t[i]}if(a)return a;var c=t?t.length:0;return!!c&&Tt(c)&&mt(i,c)&&(E(t)||wt(t))}function Zn(t){return E(t)||wt(t)||!!(qt&&t&&t[qt])}function mt(t,e){return e=e??At,!!e&&(typeof t=="number"||we.test(t))&&t>-1&&t%1==0&&t<e}function kt(t,e,n){if(!K(n))return!1;var a=typeof e;return(a=="number"?H(n)&&mt(e,n.length):a=="string"&&e in n)?Ct(n[e],t):!1}function tt(t,e){if(E(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||Z(t)?!0:ge.test(t)||!he.test(t)||e!=null&&t in Object(e)}function Wn(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function Xn(t){return!!Wt&&Wt in t}function Yn(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||J;return t===n}function te(t){return t===t&&!K(t)}function ee(t,e){return function(n){return n==null?!1:n[t]===e&&(e!==void 0||t in Object(n))}}var qn=bt(function(t){t=Vn(t);var e=[];return ye.test(t)&&e.push(""),t.replace(ve,function(n,a,o,i){e.push(o?i.replace(be,"$1"):a||n)}),e});function et(t){if(typeof t=="string"||Z(t))return t;var e=t+"";return e=="0"&&1/t==-ct?"-0":e}function N(t){if(t!=null){try{return Xt.call(t)}catch{}try{return t+""}catch{}}return""}var Jn=Nn(function(t,e){if(t==null)return[];var n=e.length;return n>1&&kt(t,e[0],e[1])?e=[]:n>2&&kt(e[0],e[1],e[2])&&(e=[e[0]]),Pn(t,yn(e),[])});function bt(t,e){if(typeof t!="function"||e&&typeof e!="function")throw new TypeError(_);var n=function(){var a=arguments,o=e?e.apply(this,a):a[0],i=n.cache;if(i.has(o))return i.get(o);var c=t.apply(this,a);return n.cache=i.set(o,c),c};return n.cache=new(bt.Cache||A),n}bt.Cache=A;function Ct(t,e){return t===e||t!==t&&e!==e}function wt(t){return Qn(t)&&T.call(t,"callee")&&(!Ie.call(t,"callee")||D.call(t)==W)}var E=Array.isArray;function H(t){return t!=null&&Tt(t.length)&&!ne(t)}function Qn(t){return nt(t)&&H(t)}function ne(t){var e=K(t)?D.call(t):"";return e==Ot||e==ie}function Tt(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=At}function K(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function nt(t){return!!t&&typeof t=="object"}function Z(t){return typeof t=="symbol"||nt(t)&&D.call(t)==Ft}var zn=Ht?Zt(Ht):An;function Vn(t){return t==null?"":Fn(t)}function jn(t,e,n){var a=t==null?void 0:zt(t,e);return a===void 0?n:a}function kn(t,e){return t!=null&&Kn(t,e,Cn)}function rt(t){return H(t)?hn(t):$n(t)}function re(t){return t}function tr(t){return tt(t)?Se(et(t)):Bn(t)}l.exports=Jn})(st,st.exports);var rr=st.exports;const I=er(rr),ar={name:"LocationNavbar",data(){return{options:[{text:"A-Z",value:"alphabetical"},{text:this.$t("location.most-data"),value:"most-data"},{text:this.$t("location.most-data-person"),value:"most-data-per-person"},{text:"Total Contributors",value:"total-contributors"},{text:"First Created",value:"first-created"},{text:"Most Recently Created",value:"most-recently-created"},{text:"Most Recently Updated",value:"most-recently-updated"}]}},computed:{sortLocationsBy:{get(){return this.$store.state.locations.sortLocationsBy},set(l){this.$store.commit("setSortLocationsBy",l)}}}};var ir=function(){var r=this,s=r._self._c;return s("div",{staticClass:"container w100"},[s("br"),s("div",{staticClass:"control locations-control"},[s("div",{staticClass:"select"},[s("select",{directives:[{name:"model",rawName:"v-model",value:r.sortLocationsBy,expression:"sortLocationsBy"}],on:{change:function(_){var w=Array.prototype.filter.call(_.target.options,function(h){return h.selected}).map(function(h){var C="_value"in h?h._value:h.value;return C});r.sortLocationsBy=_.target.multiple?w:w[0]}}},r._l(r.options,function(_){return s("option",{key:_.value,domProps:{value:_.value}},[r._v(r._s(_.text))])}),0)])])])},or=[],sr=xt(ar,ir,or,!1,null,"d74a7dec");const cr=sr.exports,lr={name:"LocationMetadata",props:["index","location","locationType","category"],data(){return{dir:"/assets/icons/flags/"}},computed:{country(){return this.$store.state.locations.country},countryName(){return this.$store.state.locations.countryName},stateName(){return this.$store.state.locations.stateName},state(){return this.$store.state.locations.state},textSize(){return this.category==="A-Z"?"title is-1 flex-1 ma":"title is-3 flex-1 ma"}},methods:{getCountryFlag(l){if(l)return l=l.toLowerCase(),this.dir+l+".png"},getDataForLocation(l){if(this.$store.commit("setLocations",[]),this.locationType==="country"){const r=l.country;this.$store.commit("countryName",r),this.$router.push({path:"/world/"+r})}else if(this.locationType==="state"){const r=this.countryName,s=l.state;this.$store.commit("stateName",s),this.$router.push({path:"/world/"+r+"/"+s})}else if(this.locationType==="city"){const r=this.countryName,s=this.stateName,_=l.city;l.hasOwnProperty("hex")&&this.$router.push({path:"/world/"+r+"/"+s+"/"+_+"/map/"}),this.$router.push({path:"/world/"+r+"/"+s+"/"+_+"/map"})}},getLocationName(l){return l[this.locationType]},positions(l){return nr.localeData().ordinal(l+1)}}};var ur=function(){var r=this,s=r._self._c;return s("div",{staticClass:"column is-3"},[s("div",{staticClass:"flex pb1"},[r.locationType==="country"?s("img",{staticClass:"img-flag",attrs:{height:"15",src:r.getCountryFlag(r.location.shortcode)}}):r._e(),s("h2",{class:r.textSize},[s("a",{staticClass:"is-link has-text-centered location-title",attrs:{id:r.location[r.locationType]},on:{click:function(_){return r.getDataForLocation(r.location)}}},[s("span",{directives:[{name:"show",rawName:"v-show",value:r.category!=="A-Z"&&r.index<100,expression:"category !== 'A-Z' && index < 100"}]},[r._v(r._s(r.positions(r.index))+" -")]),s("span",[r._v(r._s(r.getLocationName(r.location)))])])])]),s("div",{staticClass:"panel"},[s("div",{staticClass:"panel-block"},[r._v(r._s(r.$t("location.total-verified-litter"))+": "),s("strong",{staticClass:"green flex-1"},[r._v("  "+r._s(r.location.total_litter_redis.toLocaleString())+" ")]),r.locationType==="country"?s("p",{staticClass:"total-photos-percentage"},[r._v(" "+r._s((r.location.total_litter_redis/this.$store.state.locations.total_litter*100).toFixed(2)+"% Total")+" ")]):r._e()]),s("div",{staticClass:"panel-block"},[r._v(" "+r._s(r.$t("location.total-verified-photos"))+": "),s("strong",{staticClass:"green flex-1"},[r._v("  "+r._s(r.location.total_photos_redis.toLocaleString())+" ")]),r.locationType==="country"?s("p",{staticClass:"total-photos-percentage"},[r._v(" "+r._s((r.location.total_photos_redis/this.$store.state.locations.total_photos*100).toFixed(2)+"% Total")+" ")]):r._e()]),s("div",{staticClass:"panel-block"},[r._v(r._s(r.$t("common.created"))+": "),s("strong",{staticClass:"green"},[r._v("  "+r._s(r.location.diffForHumans))])]),s("div",{staticClass:"panel-block"},[r._v(r._s(r.$t("location.number-of-contributors"))+": "),s("strong",{staticClass:"green"},[r._v("  "+r._s(r.location.total_contributors_redis.toLocaleString()))])]),s("div",{staticClass:"panel-block"},[r._v(r._s(r.$t("location.avg-img-per-person"))+": "),s("strong",{staticClass:"green"},[r._v("  "+r._s(r.location.avg_photo_per_user.toLocaleString()))])]),s("div",{staticClass:"panel-block"},[r._v(r._s(r.$t("location.avg-litter-per-person"))+": "),s("strong",{staticClass:"green"},[r._v("  "+r._s(r.location.avg_litter_per_user.toLocaleString()))])]),s("div",{staticClass:"panel-block"},[r._v(r._s(r.$t("common.created-by"))+": "),s("strong",{staticClass:"green"},[r._v("  "+r._s(r.location.created_by_name)+" "+r._s(r.location.created_by_username))])]),s("div",{staticClass:"panel-block-without-flex"},[r._v(" Last Updated: "),s("strong",{staticClass:"green"},[r._v("  "+r._s(r.location.updatedAtDiffForHumans))]),s("p",[r._v("by "),s("strong",{staticClass:"is-green"},[r._v(" "+r._s(r.location.last_uploader_name)+" "+r._s(r.location.last_uploader_username)+" ")])])])])])},fr=[],dr=xt(lr,ur,fr,!1,null,"f276ecc3");const pr=dr.exports,_r={name:"SortLocations",props:["locationType"],components:{LocationNavbar:cr,LocationMetadata:pr},data(){return{selectedTab:"LeaderboardList",tabs:[{title:this.$t("location.litter"),component:"ChartsContainer",in_location:"all"},{title:this.$t("location.time-series"),component:"TimeSeriesContainer",in_location:"all"},{title:this.$t("location.leaderboard"),component:"LeaderboardList",in_location:"all"},{title:this.$t("location.options"),component:"Options",in_location:"city"},{title:this.$t("common.download"),component:"Download",in_location:"all"}]}},computed:{container(){return this.orderedBy.length===0?"vh65":""},getUsersForLocationLeaderboard(){return this.$store.state.locations.locationTabKey,this.$store.state.leaderboard[this.locationType][this.selectedLocationId]??[]},isAuth(){return this.$store.state.user.auth},orderedBy(){return this.sortedBy==="alphabetical"?this.locations:this.sortedBy==="most-data"?I(this.locations,"total_litter_redis").reverse():this.sortedBy==="most-data-per-person"?I(this.locations,"avg_litter_per_user").reverse():this.sortedBy==="most-recently-updated"?I(this.locations,"updated_at").reverse():this.sortedBy==="total-contributors"?I(this.locations,"total_contributors_redis").reverse():this.sortedBy==="first-created"?I(this.locations,"created_at"):this.sortedBy==="most-recently-created"?I(this.locations,"created_at").reverse():[]},locations(){return this.$store.state.locations.locations},selectedLocationId(){return this.$store.state.locations.selectedLocationId},sortedBy(){return this.$store.state.locations.sortLocationsBy}},methods:{async loadTab(l,r){await this.$store.dispatch("GET_USERS_FOR_LOCATION_LEADERBOARD",{timeFilter:"today",locationType:this.locationType,locationId:r}),this.selectedTab=l},showOnlySelectedComponent(l){return this.selectedLocationId===l},showTab(l){return l==="all"||this.locationType===l},updateUrl(l){console.log({url:l})}}};var hr=function(){var r=this,s=r._self._c;return s("section",{staticClass:"inner-locations-container",class:r.container},[s("location-navbar"),r._l(r.orderedBy,function(_,w){return s("section",{key:w},[s("br"),s("h1",{staticClass:"title is-1 has-text-centered world-cup-title"},[r._v(" #LitterWorldCup ")]),s("div",{staticClass:"hero-body location-container"},[s("div",{staticClass:"columns"},[s("LocationMetadata",{attrs:{index:w,location:_,locationType:r.locationType,category:r.sortedBy}}),s("div",{staticClass:"column is-half is-offset-1"},[s("p",{staticClass:"show-mobile"},[r._v("Drag these across for more options")]),s("div",{staticClass:"tabs is-center"},r._l(r.tabs,function(h,C){return s("p",{directives:[{name:"show",rawName:"v-show",value:r.showTab(h.in_location),expression:"showTab(tab.in_location)"}],key:C,staticClass:"location-tab",class:h.component===r.selectedTab?"location-tab-is-active":"",on:{click:function(ct){return r.loadTab(h.component,_.id)}}},[r._v(" "+r._s(h.title)+" ")])}),0)])],1)])])})],2)},gr=[],yr=xt(_r,hr,gr,!1,null,"98128dff");const br=yr.exports;export{br as S};
