import{c as ot,g as er,n as ct}from"./app-LvxnoPA3.js";import{h as nr}from"./moment-zH0z38ay.js";import{L as rr}from"./LeaderboardList-BWkmYwqC.js";var st={exports:{}};st.exports;(function(l,r){var s=200,_="Expected a function",C="__lodash_hash_undefined__",h=1,b=2,lt=1/0,At=9007199254740991,W="[object Arguments]",ut="[object Array]",$t="[object Boolean]",Lt="[object Date]",St="[object Error]",Ot="[object Function]",ie="[object GeneratorFunction]",q="[object Map]",Et="[object Number]",F="[object Object]",Nt="[object Promise]",Pt="[object RegExp]",z="[object Set]",Bt="[object String]",Dt="[object Symbol]",ft="[object WeakMap]",Ft="[object ArrayBuffer]",X="[object DataView]",oe="[object Float32Array]",se="[object Float64Array]",ce="[object Int8Array]",le="[object Int16Array]",ue="[object Int32Array]",fe="[object Uint8Array]",de="[object Uint8ClampedArray]",pe="[object Uint16Array]",_e="[object Uint32Array]",he=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ge=/^\w*$/,ye=/^\./,me=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ve=/[\\^$.*+?()[\]{}|]/g,we=/\\(\\)?/g,be=/^\[object .+?Constructor\]$/,Ce=/^(?:0|[1-9]\d*)$/,d={};d[oe]=d[se]=d[ce]=d[le]=d[ue]=d[fe]=d[de]=d[pe]=d[_e]=!0,d[W]=d[ut]=d[Ft]=d[$t]=d[X]=d[Lt]=d[St]=d[Ot]=d[q]=d[Et]=d[F]=d[Pt]=d[z]=d[Bt]=d[ft]=!1;var Mt=typeof ot=="object"&&ot&&ot.Object===Object&&ot,Te=typeof self=="object"&&self&&self.Object===Object&&self,S=Mt||Te||Function("return this")(),Rt=r&&!r.nodeType&&r,It=Rt&&!0&&l&&!l.nodeType&&l,xe=It&&It.exports===Rt,Ut=xe&&Mt.process,Gt=function(){try{return Ut&&Ut.binding("util")}catch{}}(),Ht=Gt&&Gt.isTypedArray;function Ae(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function Kt(t,e){for(var n=-1,a=t?t.length:0,o=Array(a);++n<a;)o[n]=e(t[n],n,t);return o}function $e(t,e){for(var n=-1,a=e.length,o=t.length;++n<a;)t[o+n]=e[n];return t}function Le(t,e){for(var n=-1,a=t?t.length:0;++n<a;)if(e(t[n],n,t))return!0;return!1}function Se(t){return function(e){return e==null?void 0:e[t]}}function Oe(t,e){var n=t.length;for(t.sort(e);n--;)t[n]=t[n].value;return t}function Ee(t,e){for(var n=-1,a=Array(t);++n<t;)a[n]=e(n);return a}function Zt(t){return function(e){return t(e)}}function Ne(t,e){return t==null?void 0:t[e]}function dt(t){var e=!1;if(t!=null&&typeof t.toString!="function")try{e=!!(t+"")}catch{}return e}function Pe(t){var e=-1,n=Array(t.size);return t.forEach(function(a,o){n[++e]=[o,a]}),n}function Be(t,e){return function(n){return t(e(n))}}function De(t){var e=-1,n=Array(t.size);return t.forEach(function(a){n[++e]=a}),n}var Fe=Array.prototype,Me=Function.prototype,Y=Object.prototype,pt=S["__core-js_shared__"],Wt=function(){var t=/[^.]+$/.exec(pt&&pt.keys&&pt.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),qt=Me.toString,T=Y.hasOwnProperty,M=Y.toString,Re=RegExp("^"+qt.call(T).replace(ve,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),J=S.Symbol,zt=S.Uint8Array,Ie=Y.propertyIsEnumerable,Ue=Fe.splice,Xt=J?J.isConcatSpreadable:void 0,Ge=Be(Object.keys,Object),Yt=Math.max,_t=R(S,"DataView"),U=R(S,"Map"),ht=R(S,"Promise"),gt=R(S,"Set"),yt=R(S,"WeakMap"),G=R(Object,"create"),He=B(_t),Ke=B(U),Ze=B(ht),We=B(gt),qe=B(yt),Q=J?J.prototype:void 0,mt=Q?Q.valueOf:void 0,Jt=Q?Q.toString:void 0;function P(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var a=t[e];this.set(a[0],a[1])}}function ze(){this.__data__=G?G(null):{}}function Xe(t){return this.has(t)&&delete this.__data__[t]}function Ye(t){var e=this.__data__;if(G){var n=e[t];return n===C?void 0:n}return T.call(e,t)?e[t]:void 0}function Je(t){var e=this.__data__;return G?e[t]!==void 0:T.call(e,t)}function Qe(t,e){var n=this.__data__;return n[t]=G&&e===void 0?C:e,this}P.prototype.clear=ze,P.prototype.delete=Xe,P.prototype.get=Ye,P.prototype.has=Je,P.prototype.set=Qe;function x(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var a=t[e];this.set(a[0],a[1])}}function Ve(){this.__data__=[]}function je(t){var e=this.__data__,n=j(e,t);if(n<0)return!1;var a=e.length-1;return n==a?e.pop():Ue.call(e,n,1),!0}function ke(t){var e=this.__data__,n=j(e,t);return n<0?void 0:e[n][1]}function tn(t){return j(this.__data__,t)>-1}function en(t,e){var n=this.__data__,a=j(n,t);return a<0?n.push([t,e]):n[a][1]=e,this}x.prototype.clear=Ve,x.prototype.delete=je,x.prototype.get=ke,x.prototype.has=tn,x.prototype.set=en;function A(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var a=t[e];this.set(a[0],a[1])}}function nn(){this.__data__={hash:new P,map:new(U||x),string:new P}}function rn(t){return k(this,t).delete(t)}function an(t){return k(this,t).get(t)}function on(t){return k(this,t).has(t)}function sn(t,e){return k(this,t).set(t,e),this}A.prototype.clear=nn,A.prototype.delete=rn,A.prototype.get=an,A.prototype.has=on,A.prototype.set=sn;function V(t){var e=-1,n=t?t.length:0;for(this.__data__=new A;++e<n;)this.add(t[e])}function cn(t){return this.__data__.set(t,C),this}function ln(t){return this.__data__.has(t)}V.prototype.add=V.prototype.push=cn,V.prototype.has=ln;function $(t){this.__data__=new x(t)}function un(){this.__data__=new x}function fn(t){return this.__data__.delete(t)}function dn(t){return this.__data__.get(t)}function pn(t){return this.__data__.has(t)}function _n(t,e){var n=this.__data__;if(n instanceof x){var a=n.__data__;if(!U||a.length<s-1)return a.push([t,e]),this;n=this.__data__=new A(a)}return n.set(t,e),this}$.prototype.clear=un,$.prototype.delete=fn,$.prototype.get=dn,$.prototype.has=pn,$.prototype.set=_n;function hn(t,e){var n=E(t)||Tt(t)?Ee(t.length,String):[],a=n.length,o=!!a;for(var i in t)T.call(t,i)&&!(o&&(i=="length"||wt(i,a)))&&n.push(i);return n}function j(t,e){for(var n=t.length;n--;)if(Ct(t[n][0],e))return n;return-1}var gn=Rn(vn);function yn(t,e,n,a,o){var i=-1,c=t.length;for(n||(n=Zn),o||(o=[]);++i<c;){var f=t[i];n(f)?$e(o,f):o[o.length]=f}return o}var mn=In();function vn(t,e){return t&&mn(t,e,rt)}function Qt(t,e){e=tt(e,t)?[e]:Vt(e);for(var n=0,a=e.length;t!=null&&n<a;)t=t[et(e[n++])];return n&&n==a?t:void 0}function wn(t){return M.call(t)}function bn(t,e){return t!=null&&e in Object(t)}function vt(t,e,n,a,o){return t===e?!0:t==null||e==null||!K(t)&&!nt(e)?t!==t&&e!==e:Cn(t,e,vt,n,a,o)}function Cn(t,e,n,a,o,i){var c=E(t),f=E(e),u=ut,p=ut;c||(u=O(t),u=u==W?F:u),f||(p=O(e),p=p==W?F:p);var y=u==F&&!dt(t),m=p==F&&!dt(e),g=u==p;if(g&&!y)return i||(i=new $),c||Qn(t)?jt(t,e,n,a,o,i):Un(t,e,u,n,a,o,i);if(!(o&b)){var v=y&&T.call(t,"__wrapped__"),w=m&&T.call(e,"__wrapped__");if(v||w){var N=v?t.value():t,L=w?e.value():e;return i||(i=new $),n(N,L,a,o,i)}}return g?(i||(i=new $),Gn(t,e,n,a,o,i)):!1}function Tn(t,e,n,a){var o=n.length,i=o;if(t==null)return!i;for(t=Object(t);o--;){var c=n[o];if(c[2]?c[1]!==t[c[0]]:!(c[0]in t))return!1}for(;++o<i;){c=n[o];var f=c[0],u=t[f],p=c[1];if(c[2]){if(u===void 0&&!(f in t))return!1}else{var y=new $,m;if(!(m===void 0?vt(p,u,a,h|b,y):m))return!1}}return!0}function xn(t){if(!K(t)||qn(t))return!1;var e=ne(t)||dt(t)?Re:be;return e.test(B(t))}function An(t){return nt(t)&&xt(t.length)&&!!d[M.call(t)]}function $n(t){return typeof t=="function"?t:t==null?re:typeof t=="object"?E(t)?En(t[0],t[1]):On(t):tr(t)}function Ln(t){if(!zn(t))return Ge(t);var e=[];for(var n in Object(t))T.call(t,n)&&n!="constructor"&&e.push(n);return e}function Sn(t,e){var n=-1,a=H(t)?Array(t.length):[];return gn(t,function(o,i,c){a[++n]=e(o,i,c)}),a}function On(t){var e=Hn(t);return e.length==1&&e[0][2]?ee(e[0][0],e[0][1]):function(n){return n===t||Tn(n,t,e)}}function En(t,e){return tt(t)&&te(e)?ee(et(t),e):function(n){var a=jn(n,t);return a===void 0&&a===e?kn(n,t):vt(e,a,void 0,h|b)}}function Nn(t,e,n){var a=-1;e=Kt(e.length?e:[re],Zt($n));var o=Sn(t,function(i,c,f){var u=Kt(e,function(p){return p(i)});return{criteria:u,index:++a,value:i}});return Oe(o,function(i,c){return Mn(i,c,n)})}function Pn(t){return function(e){return Qt(e,t)}}function Bn(t,e){return e=Yt(e===void 0?t.length-1:e,0),function(){for(var n=arguments,a=-1,o=Yt(n.length-e,0),i=Array(o);++a<o;)i[a]=n[e+a];a=-1;for(var c=Array(e+1);++a<e;)c[a]=n[a];return c[e]=i,Ae(t,this,c)}}function Dn(t){if(typeof t=="string")return t;if(Z(t))return Jt?Jt.call(t):"";var e=t+"";return e=="0"&&1/t==-lt?"-0":e}function Vt(t){return E(t)?t:Xn(t)}function Fn(t,e){if(t!==e){var n=t!==void 0,a=t===null,o=t===t,i=Z(t),c=e!==void 0,f=e===null,u=e===e,p=Z(e);if(!f&&!p&&!i&&t>e||i&&c&&u&&!f&&!p||a&&c&&u||!n&&u||!o)return 1;if(!a&&!i&&!p&&t<e||p&&n&&o&&!a&&!i||f&&n&&o||!c&&o||!u)return-1}return 0}function Mn(t,e,n){for(var a=-1,o=t.criteria,i=e.criteria,c=o.length,f=n.length;++a<c;){var u=Fn(o[a],i[a]);if(u){if(a>=f)return u;var p=n[a];return u*(p=="desc"?-1:1)}}return t.index-e.index}function Rn(t,e){return function(n,a){if(n==null)return n;if(!H(n))return t(n,a);for(var o=n.length,i=-1,c=Object(n);++i<o&&a(c[i],i,c)!==!1;);return n}}function In(t){return function(e,n,a){for(var o=-1,i=Object(e),c=a(e),f=c.length;f--;){var u=c[++o];if(n(i[u],u,i)===!1)break}return e}}function jt(t,e,n,a,o,i){var c=o&b,f=t.length,u=e.length;if(f!=u&&!(c&&u>f))return!1;var p=i.get(t);if(p&&i.get(e))return p==e;var y=-1,m=!0,g=o&h?new V:void 0;for(i.set(t,e),i.set(e,t);++y<f;){var v=t[y],w=e[y];if(a)var N=c?a(w,v,y,e,t,i):a(v,w,y,t,e,i);if(N!==void 0){if(N)continue;m=!1;break}if(g){if(!Le(e,function(L,D){if(!g.has(D)&&(v===L||n(v,L,a,o,i)))return g.add(D)})){m=!1;break}}else if(!(v===w||n(v,w,a,o,i))){m=!1;break}}return i.delete(t),i.delete(e),m}function Un(t,e,n,a,o,i,c){switch(n){case X:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case Ft:return!(t.byteLength!=e.byteLength||!a(new zt(t),new zt(e)));case $t:case Lt:case Et:return Ct(+t,+e);case St:return t.name==e.name&&t.message==e.message;case Pt:case Bt:return t==e+"";case q:var f=Pe;case z:var u=i&b;if(f||(f=De),t.size!=e.size&&!u)return!1;var p=c.get(t);if(p)return p==e;i|=h,c.set(t,e);var y=jt(f(t),f(e),a,o,i,c);return c.delete(t),y;case Dt:if(mt)return mt.call(t)==mt.call(e)}return!1}function Gn(t,e,n,a,o,i){var c=o&b,f=rt(t),u=f.length,p=rt(e),y=p.length;if(u!=y&&!c)return!1;for(var m=u;m--;){var g=f[m];if(!(c?g in e:T.call(e,g)))return!1}var v=i.get(t);if(v&&i.get(e))return v==e;var w=!0;i.set(t,e),i.set(e,t);for(var N=c;++m<u;){g=f[m];var L=t[g],D=e[g];if(a)var ae=c?a(D,L,g,e,t,i):a(L,D,g,t,e,i);if(!(ae===void 0?L===D||n(L,D,a,o,i):ae)){w=!1;break}N||(N=g=="constructor")}if(w&&!N){var at=t.constructor,it=e.constructor;at!=it&&"constructor"in t&&"constructor"in e&&!(typeof at=="function"&&at instanceof at&&typeof it=="function"&&it instanceof it)&&(w=!1)}return i.delete(t),i.delete(e),w}function k(t,e){var n=t.__data__;return Wn(e)?n[typeof e=="string"?"string":"hash"]:n.map}function Hn(t){for(var e=rt(t),n=e.length;n--;){var a=e[n],o=t[a];e[n]=[a,o,te(o)]}return e}function R(t,e){var n=Ne(t,e);return xn(n)?n:void 0}var O=wn;(_t&&O(new _t(new ArrayBuffer(1)))!=X||U&&O(new U)!=q||ht&&O(ht.resolve())!=Nt||gt&&O(new gt)!=z||yt&&O(new yt)!=ft)&&(O=function(t){var e=M.call(t),n=e==F?t.constructor:void 0,a=n?B(n):void 0;if(a)switch(a){case He:return X;case Ke:return q;case Ze:return Nt;case We:return z;case qe:return ft}return e});function Kn(t,e,n){e=tt(e,t)?[e]:Vt(e);for(var a,o=-1,c=e.length;++o<c;){var i=et(e[o]);if(!(a=t!=null&&n(t,i)))break;t=t[i]}if(a)return a;var c=t?t.length:0;return!!c&&xt(c)&&wt(i,c)&&(E(t)||Tt(t))}function Zn(t){return E(t)||Tt(t)||!!(Xt&&t&&t[Xt])}function wt(t,e){return e=e??At,!!e&&(typeof t=="number"||Ce.test(t))&&t>-1&&t%1==0&&t<e}function kt(t,e,n){if(!K(n))return!1;var a=typeof e;return(a=="number"?H(n)&&wt(e,n.length):a=="string"&&e in n)?Ct(n[e],t):!1}function tt(t,e){if(E(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||Z(t)?!0:ge.test(t)||!he.test(t)||e!=null&&t in Object(e)}function Wn(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function qn(t){return!!Wt&&Wt in t}function zn(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||Y;return t===n}function te(t){return t===t&&!K(t)}function ee(t,e){return function(n){return n==null?!1:n[t]===e&&(e!==void 0||t in Object(n))}}var Xn=bt(function(t){t=Vn(t);var e=[];return ye.test(t)&&e.push(""),t.replace(me,function(n,a,o,i){e.push(o?i.replace(we,"$1"):a||n)}),e});function et(t){if(typeof t=="string"||Z(t))return t;var e=t+"";return e=="0"&&1/t==-lt?"-0":e}function B(t){if(t!=null){try{return qt.call(t)}catch{}try{return t+""}catch{}}return""}var Yn=Bn(function(t,e){if(t==null)return[];var n=e.length;return n>1&&kt(t,e[0],e[1])?e=[]:n>2&&kt(e[0],e[1],e[2])&&(e=[e[0]]),Nn(t,yn(e),[])});function bt(t,e){if(typeof t!="function"||e&&typeof e!="function")throw new TypeError(_);var n=function(){var a=arguments,o=e?e.apply(this,a):a[0],i=n.cache;if(i.has(o))return i.get(o);var c=t.apply(this,a);return n.cache=i.set(o,c),c};return n.cache=new(bt.Cache||A),n}bt.Cache=A;function Ct(t,e){return t===e||t!==t&&e!==e}function Tt(t){return Jn(t)&&T.call(t,"callee")&&(!Ie.call(t,"callee")||M.call(t)==W)}var E=Array.isArray;function H(t){return t!=null&&xt(t.length)&&!ne(t)}function Jn(t){return nt(t)&&H(t)}function ne(t){var e=K(t)?M.call(t):"";return e==Ot||e==ie}function xt(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=At}function K(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function nt(t){return!!t&&typeof t=="object"}function Z(t){return typeof t=="symbol"||nt(t)&&M.call(t)==Dt}var Qn=Ht?Zt(Ht):An;function Vn(t){return t==null?"":Dn(t)}function jn(t,e,n){var a=t==null?void 0:Qt(t,e);return a===void 0?n:a}function kn(t,e){return t!=null&&Kn(t,e,bn)}function rt(t){return H(t)?hn(t):Ln(t)}function re(t){return t}function tr(t){return tt(t)?Se(et(t)):Pn(t)}l.exports=Yn})(st,st.exports);var ar=st.exports;const I=er(ar),ir={name:"LocationNavbar",data(){return{options:[{text:"A-Z",value:"alphabetical"},{text:this.$t("location.most-data"),value:"most-data"},{text:this.$t("location.most-data-person"),value:"most-data-per-person"},{text:"Total Contributors",value:"total-contributors"},{text:"First Created",value:"first-created"},{text:"Most Recently Created",value:"most-recently-created"},{text:"Most Recently Updated",value:"most-recently-updated"}]}},computed:{sortLocationsBy:{get(){return this.$store.state.locations.sortLocationsBy},set(l){this.$store.commit("setSortLocationsBy",l)}}}};var or=function(){var r=this,s=r._self._c;return s("div",{staticClass:"container w100"},[s("br"),s("div",{staticClass:"control locations-control"},[s("div",{staticClass:"select"},[s("select",{directives:[{name:"model",rawName:"v-model",value:r.sortLocationsBy,expression:"sortLocationsBy"}],on:{change:function(_){var C=Array.prototype.filter.call(_.target.options,function(h){return h.selected}).map(function(h){var b="_value"in h?h._value:h.value;return b});r.sortLocationsBy=_.target.multiple?C:C[0]}}},r._l(r.options,function(_){return s("option",{key:_.value,domProps:{value:_.value}},[r._v(r._s(_.text))])}),0)])])])},sr=[],cr=ct(ir,or,sr,!1,null,"d74a7dec");const lr=cr.exports,ur={name:"LocationMetadata",props:["index","location","locationType","category"],data(){return{dir:"/assets/icons/flags/"}},computed:{country(){return this.$store.state.locations.country},countryName(){return this.$store.state.locations.countryName},stateName(){return this.$store.state.locations.stateName},state(){return this.$store.state.locations.state},textSize(){return this.category==="A-Z"?"title is-1 flex-1 ma":"title is-3 flex-1 ma"}},methods:{getCountryFlag(l){if(l)return l=l.toLowerCase(),this.dir+l+".png"},getDataForLocation(l){if(this.$store.commit("setLocations",[]),this.locationType==="country"){const r=l.country;this.$store.commit("countryName",r),this.$router.push({path:"/world/"+r})}else if(this.locationType==="state"){const r=this.countryName,s=l.state;this.$store.commit("stateName",s),this.$router.push({path:"/world/"+r+"/"+s})}else if(this.locationType==="city"){const r=this.countryName,s=this.stateName,_=l.city;l.hasOwnProperty("hex")&&this.$router.push({path:"/world/"+r+"/"+s+"/"+_+"/map/"}),this.$router.push({path:"/world/"+r+"/"+s+"/"+_+"/map"})}},getLocationName(l){return l[this.locationType]},positions(l){return nr.localeData().ordinal(l+1)}}};var fr=function(){var r=this,s=r._self._c;return s("div",{staticClass:"column is-3"},[s("div",{staticClass:"flex pb1"},[r.locationType==="country"?s("img",{staticClass:"img-flag",attrs:{height:"15",src:r.getCountryFlag(r.location.shortcode)}}):r._e(),s("h2",{class:r.textSize},[s("a",{staticClass:"is-link has-text-centered location-title",attrs:{id:r.location[r.locationType]},on:{click:function(_){return r.getDataForLocation(r.location)}}},[s("span",{directives:[{name:"show",rawName:"v-show",value:r.category!=="A-Z"&&r.index<100,expression:"category !== 'A-Z' && index < 100"}]},[r._v(r._s(r.positions(r.index))+" -")]),s("span",[r._v(r._s(r.getLocationName(r.location)))])])])]),s("div",{staticClass:"panel"},[s("div",{staticClass:"panel-block"},[r._v(r._s(r.$t("location.total-verified-litter"))+": "),s("strong",{staticClass:"green flex-1"},[r._v("  "+r._s(r.location.total_litter_redis.toLocaleString())+" ")]),r.locationType==="country"?s("p",{staticClass:"total-photos-percentage"},[r._v(" "+r._s((r.location.total_litter_redis/this.$store.state.locations.total_litter*100).toFixed(2)+"% Total")+" ")]):r._e()]),s("div",{staticClass:"panel-block"},[r._v(" "+r._s(r.$t("location.total-verified-photos"))+": "),s("strong",{staticClass:"green flex-1"},[r._v("  "+r._s(r.location.total_photos_redis.toLocaleString())+" ")]),r.locationType==="country"?s("p",{staticClass:"total-photos-percentage"},[r._v(" "+r._s((r.location.total_photos_redis/this.$store.state.locations.total_photos*100).toFixed(2)+"% Total")+" ")]):r._e()]),s("div",{staticClass:"panel-block"},[r._v(r._s(r.$t("common.created"))+": "),s("strong",{staticClass:"green"},[r._v("  "+r._s(r.location.diffForHumans))])]),s("div",{staticClass:"panel-block"},[r._v(r._s(r.$t("location.number-of-contributors"))+": "),s("strong",{staticClass:"green"},[r._v("  "+r._s(r.location.total_contributors_redis.toLocaleString()))])]),s("div",{staticClass:"panel-block"},[r._v(r._s(r.$t("location.avg-img-per-person"))+": "),s("strong",{staticClass:"green"},[r._v("  "+r._s(r.location.avg_photo_per_user.toLocaleString()))])]),s("div",{staticClass:"panel-block"},[r._v(r._s(r.$t("location.avg-litter-per-person"))+": "),s("strong",{staticClass:"green"},[r._v("  "+r._s(r.location.avg_litter_per_user.toLocaleString()))])]),s("div",{staticClass:"panel-block"},[r._v(r._s(r.$t("common.created-by"))+": "),s("strong",{staticClass:"green"},[r._v("  "+r._s(r.location.created_by_name)+" "+r._s(r.location.created_by_username))])]),s("div",{staticClass:"panel-block-without-flex"},[r._v(" Last Updated: "),s("strong",{staticClass:"green"},[r._v("  "+r._s(r.location.updatedAtDiffForHumans))]),s("p",[r._v("by "),s("strong",{staticClass:"is-green"},[r._v(" "+r._s(r.location.last_uploader_name)+" "+r._s(r.location.last_uploader_username)+" ")])])])])])},dr=[],pr=ct(ur,fr,dr,!1,null,"f276ecc3");const _r=pr.exports,hr={name:"Download",props:["locationType","locationId"],data(){return{email:"",emailEntered:!1}},methods:{async download(){await this.$store.dispatch("DOWNLOAD_DATA",{locationType:this.locationType,locationId:this.locationId,email:this.email}),this.email="",this.emailEntered=!1},textEntered(){const l=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;this.emailEntered=!!this.email.match(l)}},computed:{isAuth(){return this.$store.state.user.auth},disableDownloadButton(){return this.isAuth?!1:!this.emailEntered}}};var gr=function(){var r=this,s=r._self._c;return s("div",[s("h1",{staticClass:"title is-3"},[r._v(r._s(r.$t("location.download-open-verified-data")))]),s("h1",{staticClass:"title is-3"},[r._v(r._s(r.$t("location.stop-plastic-ocean")))]),s("p",{directives:[{name:"show",rawName:"v-show",value:!r.isAuth,expression:"!isAuth"}],staticClass:"mb1"},[r._v(r._s(r.$t("location.enter-email-sent-data")))]),s("input",{directives:[{name:"show",rawName:"v-show",value:!r.isAuth,expression:"!isAuth"},{name:"model",rawName:"v-model",value:r.email,expression:"email"}],staticClass:"input mb1em fs125",attrs:{placeholder:r.$t("common.your-email"),type:"email",name:"email",required:"",autocomplete:"email"},domProps:{value:r.email},on:{input:[function(_){_.target.composing||(r.email=_.target.value)},r.textEntered]}}),s("button",{staticClass:"button is-large is-danger mb1",attrs:{disabled:r.disableDownloadButton},on:{click:r.download}},[r._v(r._s(r.$t("common.download")))]),s("p",[r._v("© OpenLitterMap & Contributors.")])])},yr=[],mr=ct(hr,gr,yr,!1,null,null);const vr=mr.exports,wr={name:"SortLocations",props:["locationType"],components:{LocationNavbar:lr,LocationMetadata:_r,LeaderboardList:rr,Download:vr},data(){return{selectedTab:"LeaderboardList",tabs:[{title:this.$t("location.litter"),component:"ChartsContainer",in_location:"all"},{title:this.$t("location.time-series"),component:"TimeSeriesContainer",in_location:"all"},{title:this.$t("location.leaderboard"),component:"LeaderboardList",in_location:"all"},{title:this.$t("location.options"),component:"Options",in_location:"city"},{title:this.$t("common.download"),component:"Download",in_location:"all"}]}},computed:{container(){return this.orderedBy.length===0?"vh65":""},getUsersForLocationLeaderboard(){return this.$store.state.locations.locationTabKey,this.$store.state.leaderboard[this.locationType][this.selectedLocationId]??[]},isAuth(){return this.$store.state.user.auth},orderedBy(){return this.sortedBy==="alphabetical"?this.locations:this.sortedBy==="most-data"?I(this.locations,"total_litter_redis").reverse():this.sortedBy==="most-data-per-person"?I(this.locations,"avg_litter_per_user").reverse():this.sortedBy==="most-recently-updated"?I(this.locations,"updated_at").reverse():this.sortedBy==="total-contributors"?I(this.locations,"total_contributors_redis").reverse():this.sortedBy==="first-created"?I(this.locations,"created_at"):this.sortedBy==="most-recently-created"?I(this.locations,"created_at").reverse():[]},locations(){return this.$store.state.locations.locations},selectedLocationId(){return this.$store.state.locations.selectedLocationId},sortedBy(){return this.$store.state.locations.sortLocationsBy}},methods:{async loadTab(l,r){await this.$store.dispatch("GET_USERS_FOR_LOCATION_LEADERBOARD",{timeFilter:"today",locationType:this.locationType,locationId:r}),this.selectedTab=l},showOnlySelectedComponent(l){return this.selectedLocationId===l},showTab(l){return l==="all"||this.locationType===l},updateUrl(l){console.log({url:l})}}};var br=function(){var r=this,s=r._self._c;return s("section",{staticClass:"inner-locations-container",class:r.container},[s("location-navbar"),r._l(r.orderedBy,function(_,C){return s("section",{key:C},[s("br"),s("h1",{staticClass:"title is-1 has-text-centered world-cup-title"},[r._v(" #LitterWorldCup ")]),s("div",{staticClass:"hero-body location-container"},[s("div",{staticClass:"columns"},[s("LocationMetadata",{attrs:{index:C,location:_,locationType:r.locationType,category:r.sortedBy}}),s("div",{staticClass:"column is-half is-offset-1"},[s("p",{staticClass:"show-mobile"},[r._v("Drag these across for more options")]),s("div",{staticClass:"tabs is-center"},r._l(r.tabs,function(h,b){return s("p",{directives:[{name:"show",rawName:"v-show",value:r.showTab(h.in_location),expression:"showTab(tab.in_location)"}],key:b,staticClass:"location-tab",class:h.component===r.selectedTab?"location-tab-is-active":"",on:{click:function(lt){return r.loadTab(h.component,_.id)}}},[r._v(" "+r._s(h.title)+" ")])}),0)])],1)])])})],2)},Cr=[],Tr=ct(wr,br,Cr,!1,null,"611f516b");const Lr=Tr.exports;export{Lr as S};
