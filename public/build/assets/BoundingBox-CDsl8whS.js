import{L as H}from"./vue-loading-D6L8oTn8.js";/* empty css                    */import{n as I,g as j,T as P,A as W,C as V}from"./app-DVgw5rzq.js";/* empty css            */const G={name:"BrandsBox",computed:{brands:{get(){return this.$store.state.bbox.brands},set(h){this.$store.commit("setBrandsBox",h)}},selectedBrandIndex(){return this.$store.state.bbox.selectedBrandIndex}},methods:{brandClass(h){return this.selectedBrandIndex===h?"is-brand-card selected":"is-brand-card"},isSelected(h){return this.selectedBrandIndex===h?" - selected":""},select(h){this.$store.commit("selectBrandBoxIndex",h)}}};var F=function(){var e=this,r=e._self._c;return r("div",{staticClass:"fit-content",on:{click:function(o){o.stopPropagation()}}},[r("p",{directives:[{name:"show",rawName:"v-show",value:e.brands.length>0,expression:"brands.length > 0"}]},[e._v("Select a brand to add to a box")]),r("p",{directives:[{name:"show",rawName:"v-show",value:e.selectedBrandIndex!==null,expression:"selectedBrandIndex !== null"}],staticClass:"mb1"},[e._v("When a box is selected, click a box to add the brand")]),e._l(e.brands,function(o,v){return r("div",{key:o+v,class:e.brandClass(v),on:{mousedown:function(f){return e.select(v)}}},[e._v(e._s(o)+" "+e._s(e.isSelected(v)))])})],2)},q=[],J=I(G,F,q,!1,null,"420638e6");const O=J.exports,K={name:"Boxes",components:{BrandsBox:O},computed:{boxes(){return this.$store.state.bbox.boxes},boxHidden(){return this.$store.state.bbox.boxes.find(h=>h.hidden)},manyBoxes(){return this.$store.state.bbox.boxes.length>1}},methods:{activateAndCheckBox(h){this.$store.commit("activateBox",h),this.$store.state.bbox.selectedBrandIndex!==null&&this.$store.commit("addSelectedBrandToBox",h)},boxClass(h){return h?"is-box is-active":"is-box"},duplicate(h){this.$store.commit("duplicateBox",h)},getCategories(h){let e=[];return Object.entries(h).map(r=>{Object.keys(r[1]).length>0&&e.push({category:r[0],tags:r[1]})}),e},getCategory(h){return this.$i18n.t("litter.categories."+h)},getTags(h,e){return this.$i18n.t("litter."+h+"."+e)+": 1"},hideInactive(){this.$store.commit("toggleHiddenBoxes")},removeTag(h,e){this.$store.commit("removeBboxTag",{category:h,tag_key:e})},rotate(h){this.$store.commit("rotateBox",h)},showAll(){this.$store.commit("showAllBoxes")},toggleLabel(h){this.$store.commit("toggleBoxLabel",h)}}};var Q=function(){var e=this,r=e._self._c;return r("div",{staticClass:"column is-one-third pl3 pt7"},[r("BrandsBox"),r("button",{directives:[{name:"show",rawName:"v-show",value:e.manyBoxes,expression:"manyBoxes"}],staticClass:"button is-small is-primary mb1",on:{click:function(o){return o.stopPropagation(),e.hideInactive.apply(null,arguments)}}},[e._v("Hide boxes")]),r("button",{directives:[{name:"show",rawName:"v-show",value:e.boxHidden,expression:"boxHidden"}],staticClass:"button is-small is-info mb1",on:{click:e.showAll}},[e._v("Show boxes")]),e._l(e.boxes,function(o,v){return r("div",{key:o.id,class:e.boxClass(o.active),on:{click:function(f){return f.stopPropagation(),e.activateAndCheckBox(o.id)}}},[r("p",{staticClass:"ma"},[e._v("Box: "),r("span",{staticClass:"is-bold"},[e._v(e._s(o.id))])]),r("button",{staticClass:"button is-small duplicate-box",attrs:{disabled:""},on:{click:function(f){return e.duplicate(o.id)}}},[e._v("Todo - Duplicate Box")]),r("button",{staticClass:"button is-small toggle-box",on:{click:function(f){return e.toggleLabel(o.id)}}},[e._v("Toggle Label")]),r("button",{staticClass:"button is-small is-dark rotate-box",on:{click:function(f){return e.rotate(o.id)}}},[e._v("Rotate")]),r("p",[e._v("Left: "+e._s(o.left))]),r("p",[e._v("Top: "+e._s(o.top))]),r("p",[e._v("Width: "+e._s(o.width))]),r("p",{staticClass:"mb1"},[e._v("Height: "+e._s(o.height))]),r("div",{staticClass:"container"},[r("div",{staticClass:"box-categories"},[r("span",{staticClass:"box-category"},[e._v(e._s(e.getCategory(o.category)))]),r("span",{staticClass:"tag is-medium is-info box-label",domProps:{innerHTML:e._s(e.getTags(o.category,o.tag))},on:{click:function(f){return e.removeTag(o.category,o.tag)}}}),o.brand?r("div",[r("p",{staticClass:"box-category"},[e._v("Brand")]),r("span",{staticClass:"tag is-medium is-info box-label w100",domProps:{innerHTML:e._s(e.getTags("brands",o.brand))},on:{click:function(f){return e.removeTag("brands",o.brand)}}})]):e._e()])])])})],2)},Z=[],tt=I(K,Q,Z,!1,null,"754c37be");const et=tt.exports;var Y={exports:{}};(function(h,e){(function(r,o){h.exports=o()})(window,function(){return function(r){function o(f){if(v[f])return v[f].exports;var b=v[f]={i:f,l:!1,exports:{}};return r[f].call(b.exports,b,b.exports,o),b.l=!0,b.exports}var v={};return o.m=r,o.c=v,o.d=function(f,b,_){o.o(f,b)||Object.defineProperty(f,b,{configurable:!1,enumerable:!0,get:_})},o.r=function(f){Object.defineProperty(f,"__esModule",{value:!0})},o.n=function(f){var b=f&&f.__esModule?function(){return f.default}:function(){return f};return o.d(b,"a",b),b},o.o=function(f,b){return Object.prototype.hasOwnProperty.call(f,b)},o.p="",o(o.s=25)}([function(r,o,v){var f=v(11);typeof f=="string"&&(f=[[r.i,f,""]]);var b={};b.transform=void 0,v(3)(f,b),f.locals&&(r.exports=f.locals)},function(r,o,v){function f(b,_,w,x,y,B,T,k){var $=typeof b=="function"?b.options:b;_&&($.render=_,$.staticRenderFns=w,$._compiled=!0),x&&($.functional=!0),B&&($._scopeId="data-v-"+B);var M;if(T?(M=function(S){S=S||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,S||typeof __VUE_SSR_CONTEXT__>"u"||(S=__VUE_SSR_CONTEXT__),y&&y.call(this,S),S&&S._registeredComponents&&S._registeredComponents.add(T)},$._ssrRegister=M):y&&(M=k?function(){y.call(this,this.$root.$options.shadowRoot)}:y),M)if($.functional){$._injectStyles=M;var D=$.render;$.render=function(S,A){return M.call(A),D(S,A)}}else{var z=$.beforeCreate;$.beforeCreate=z?[].concat(z,M):[M]}return{exports:b,options:$}}v.d(o,"a",function(){return f})},function(r,o,v){function f(t){return x(t)||w(t)||_(t)||b()}function b(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(t,s){if(t){if(typeof t=="string")return y(t,s);var a=Object.prototype.toString.call(t).slice(8,-1);return a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set"?Array.from(t):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?y(t,s):void 0}}function w(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function x(t){if(Array.isArray(t))return y(t)}function y(t,s){(s==null||s>t.length)&&(s=t.length);for(var a=0,u=new Array(s);a<s;a++)u[a]=t[a];return u}function B(t){t.forEach(function(s,a){document.documentElement.addEventListener(a,s)})}function T(t){t.forEach(function(s,a){document.documentElement.removeEventListener(a,s)})}var k=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"vdr",class:(t.active||t.isActive?"active":"inactive")+" "+(t.contentClass?t.contentClass:""),style:t.positionStyle,on:{mousedown:function(u){t.bodyDown(u)},touchstart:function(u){t.bodyDown(u)},touchend:function(u){t.up(u)}}},[a("div",{ref:"container",staticClass:"content-container",style:t.sizeStyle},[t._t("default")],2),t._v(" "),t._l(t.sticks,function(u){return a("div",{staticClass:"vdr-stick",class:["vdr-stick-"+u,t.isResizable?"":"not-resizable"],style:t.vdrStick(u),on:{mousedown:function(i){i.stopPropagation(),i.preventDefault(),t.stickDown(u,i)},touchstart:function(i){i.stopPropagation(),i.preventDefault(),t.stickDown(u,i)}}})})],2)},$=[];k._withStripped=!0;var M={y:{t:"top",m:"marginTop",b:"bottom"},x:{l:"left",m:"marginLeft",r:"right"}},D={name:"vue-drag-resize",emits:["clicked","dragging","dragstop","resizing","resizestop","activated","deactivated"],props:{stickSize:{type:Number,default:8},parentScaleX:{type:Number,default:1},parentScaleY:{type:Number,default:1},isActive:{type:Boolean,default:!1},preventActiveBehavior:{type:Boolean,default:!1},isDraggable:{type:Boolean,default:!0},isResizable:{type:Boolean,default:!0},aspectRatio:{type:Boolean,default:!1},parentLimitation:{type:Boolean,default:!1},snapToGrid:{type:Boolean,default:!1},gridX:{type:Number,default:50,validator:function(t){return t>=0}},gridY:{type:Number,default:50,validator:function(t){return t>=0}},parentW:{type:Number,default:0,validator:function(t){return t>=0}},parentH:{type:Number,default:0,validator:function(t){return t>=0}},w:{type:[String,Number],default:200,validator:function(t){return typeof t=="string"?t==="auto":t>=0}},h:{type:[String,Number],default:200,validator:function(t){return typeof t=="string"?t==="auto":t>=0}},minw:{type:Number,default:50,validator:function(t){return t>=0}},minh:{type:Number,default:50,validator:function(t){return t>=0}},x:{type:Number,default:0,validator:function(t){return typeof t=="number"}},y:{type:Number,default:0,validator:function(t){return typeof t=="number"}},z:{type:[String,Number],default:"auto",validator:function(t){return typeof t=="string"?t==="auto":t>=0}},dragHandle:{type:String,default:null},dragCancel:{type:String,default:null},sticks:{type:Array,default:function(){return["tl","tm","tr","mr","br","bm","bl","ml"]}},axis:{type:String,default:"both",validator:function(t){return["x","y","both","none"].indexOf(t)!==-1}},contentClass:{type:String,required:!1,default:""}},data:function(){return{fixAspectRatio:null,active:null,zIndex:null,parentWidth:null,parentHeight:null,left:null,top:null,right:null,bottom:null,minHeight:null}},beforeCreate:function(){this.stickDrag=!1,this.bodyDrag=!1,this.dimensionsBeforeMove={pointerX:0,pointerY:0,x:0,y:0,w:0,h:0},this.limits={left:{min:null,max:null},right:{min:null,max:null},top:{min:null,max:null},bottom:{min:null,max:null}},this.currentStick=null},mounted:function(){var t=this;this.parentElement=this.$el.parentNode,this.parentWidth=this.parentW?this.parentW:this.parentElement.clientWidth,this.parentHeight=this.parentH?this.parentH:this.parentElement.clientHeight,this.left=this.x,this.top=this.y,this.right=this.parentWidth-(this.w==="auto"?this.$refs.container.scrollWidth:this.w)-this.left,this.bottom=this.parentHeight-(this.h==="auto"?this.$refs.container.scrollHeight:this.h)-this.top,this.domEvents=new Map([["mousemove",this.move],["mouseup",this.up],["mouseleave",this.up],["mousedown",this.deselect],["touchmove",this.move],["touchend",this.up],["touchcancel",this.up],["touchstart",this.up]]),B(this.domEvents),this.dragHandle&&f(this.$el.querySelectorAll(this.dragHandle)).forEach(function(s){s.setAttribute("data-drag-handle",t._uid)}),this.dragCancel&&f(this.$el.querySelectorAll(this.dragCancel)).forEach(function(s){s.setAttribute("data-drag-cancel",t._uid)})},beforeDestroy:function(){T(this.domEvents)},methods:{deselect:function(){this.preventActiveBehavior||(this.active=!1)},move:function(t){if(this.stickDrag||this.bodyDrag){t.stopPropagation();var s=t.pageX!==void 0?t.pageX:t.touches[0].pageX,a=t.pageY!==void 0?t.pageY:t.touches[0].pageY,u=this.dimensionsBeforeMove,i={x:(u.pointerX-s)/this.parentScaleX,y:(u.pointerY-a)/this.parentScaleY};if(this.stickDrag&&this.stickMove(i),this.bodyDrag){if(this.axis==="x")i.y=0;else if(this.axis==="y")i.x=0;else if(this.axis==="none")return;this.bodyMove(i)}}},up:function(t){this.stickDrag?this.stickUp(t):this.bodyDrag&&this.bodyUp(t)},bodyDown:function(t){var s=t.target,a=t.button;if(this.preventActiveBehavior||(this.active=!0),(!a||a===0)&&(this.$emit("clicked",t),this.active&&!(this.dragHandle&&s.getAttribute("data-drag-handle")!==this._uid.toString()||this.dragCancel&&s.getAttribute("data-drag-cancel")===this._uid.toString()))){t.stopPropagation!==void 0&&t.stopPropagation(),t.preventDefault!==void 0&&t.preventDefault(),this.isDraggable&&(this.bodyDrag=!0);var u=t.pageX!==void 0?t.pageX:t.touches[0].pageX,i=t.pageY!==void 0?t.pageY:t.touches[0].pageY;this.saveDimensionsBeforeMove({pointerX:u,pointerY:i}),this.parentLimitation&&(this.limits=this.calcDragLimitation())}},bodyMove:function(t){var s=this.dimensionsBeforeMove,a=this.parentWidth,u=this.parentHeight,i=this.gridX,n=this.gridY,c=this.width,m=this.height,l=s.top-t.y,d=s.bottom+t.y,p=s.left-t.x,g=s.right+t.x;if(this.snapToGrid){var C=!0,L=!0,R=l-Math.floor(l/n)*n,E=u-d-Math.floor((u-d)/n)*n,X=p-Math.floor(p/i)*i,U=a-g-Math.floor((a-g)/i)*i;R>n/2&&(R-=n),E>n/2&&(E-=n),X>i/2&&(X-=i),U>i/2&&(U-=i),Math.abs(E)<Math.abs(R)&&(C=!1),Math.abs(U)<Math.abs(X)&&(L=!1),l-=C?R:E,d=u-m-l,p-=L?X:U,g=a-c-p}var N=this.rectCorrectionByLimit({newLeft:p,newRight:g,newTop:l,newBottom:d});this.left=N.newLeft,this.right=N.newRight,this.top=N.newTop,this.bottom=N.newBottom,this.$emit("dragging",this.rect)},bodyUp:function(){this.bodyDrag=!1,this.$emit("dragging",this.rect),this.$emit("dragstop",this.rect),this.dimensionsBeforeMove={pointerX:0,pointerY:0,x:0,y:0,w:0,h:0},this.limits={left:{min:null,max:null},right:{min:null,max:null},top:{min:null,max:null},bottom:{min:null,max:null}}},stickDown:function(t,s){var a=arguments.length>2&&arguments[2]!==void 0&&arguments[2];if(this.isResizable&&this.active||a){this.stickDrag=!0;var u=s.pageX!==void 0?s.pageX:s.touches[0].pageX,i=s.pageY!==void 0?s.pageY:s.touches[0].pageY;this.saveDimensionsBeforeMove({pointerX:u,pointerY:i}),this.currentStick=t,this.limits=this.calcResizeLimits()}},saveDimensionsBeforeMove:function(t){var s=t.pointerX,a=t.pointerY;this.dimensionsBeforeMove.pointerX=s,this.dimensionsBeforeMove.pointerY=a,this.dimensionsBeforeMove.left=this.left,this.dimensionsBeforeMove.right=this.right,this.dimensionsBeforeMove.top=this.top,this.dimensionsBeforeMove.bottom=this.bottom,this.dimensionsBeforeMove.width=this.width,this.dimensionsBeforeMove.height=this.height,this.aspectFactor=this.width/this.height},stickMove:function(t){var s=this.currentStick,a=this.dimensionsBeforeMove,u=this.gridY,i=this.gridX,n=this.snapToGrid,c=this.parentHeight,m=this.parentWidth,l=a.top,d=a.bottom,p=a.left,g=a.right;switch(s[0]){case"b":d=a.bottom+t.y,n&&(d=c-Math.round((c-d)/u)*u);break;case"t":l=a.top-t.y,n&&(l=Math.round(l/u)*u)}switch(s[1]){case"r":g=a.right+t.x,n&&(g=m-Math.round((m-g)/i)*i);break;case"l":p=a.left-t.x,n&&(p=Math.round(p/i)*i)}var C=this.rectCorrectionByLimit({newLeft:p,newRight:g,newTop:l,newBottom:d});if(p=C.newLeft,g=C.newRight,l=C.newTop,d=C.newBottom,this.aspectRatio){var L=this.rectCorrectionByAspectRatio({newLeft:p,newRight:g,newTop:l,newBottom:d});p=L.newLeft,g=L.newRight,l=L.newTop,d=L.newBottom}this.left=p,this.right=g,this.top=l,this.bottom=d,this.$emit("resizing",this.rect)},stickUp:function(){this.stickDrag=!1,this.dimensionsBeforeMove={pointerX:0,pointerY:0,x:0,y:0,w:0,h:0},this.limits={left:{min:null,max:null},right:{min:null,max:null},top:{min:null,max:null},bottom:{min:null,max:null}},this.$emit("resizing",this.rect),this.$emit("resizestop",this.rect)},calcDragLimitation:function(){var t=this.parentWidth,s=this.parentHeight;return{left:{min:0,max:t-this.width},right:{min:0,max:t-this.width},top:{min:0,max:s-this.height},bottom:{min:0,max:s-this.height}}},calcResizeLimits:function(){var t=this.aspectFactor,s=this.width,a=this.height,u=this.bottom,i=this.top,n=this.left,c=this.right,m=this.minh,l=this.minw,d=this.parentLimitation?0:null;this.aspectRatio&&(l/m>t?m=l/t:l=t*m);var p={left:{min:d,max:n+(s-l)},right:{min:d,max:c+(s-l)},top:{min:d,max:i+(a-m)},bottom:{min:d,max:u+(a-m)}};if(this.aspectRatio){var g={left:{min:n-Math.min(i,u)*t*2,max:n+(a-m)/2*t*2},right:{min:c-Math.min(i,u)*t*2,max:c+(a-m)/2*t*2},top:{min:i-Math.min(n,c)/t*2,max:i+(s-l)/2/t*2},bottom:{min:u-Math.min(n,c)/t*2,max:u+(s-l)/2/t*2}};this.currentStick[0]==="m"?(p.left={min:Math.max(p.left.min,g.left.min),max:Math.min(p.left.max,g.left.max)},p.right={min:Math.max(p.right.min,g.right.min),max:Math.min(p.right.max,g.right.max)}):this.currentStick[1]==="m"&&(p.top={min:Math.max(p.top.min,g.top.min),max:Math.min(p.top.max,g.top.max)},p.bottom={min:Math.max(p.bottom.min,g.bottom.min),max:Math.min(p.bottom.max,g.bottom.max)})}return p},sideCorrectionByLimit:function(t,s){var a=s;return t.min!==null&&s<t.min?a=t.min:t.max!==null&&t.max<s&&(a=t.max),a},rectCorrectionByLimit:function(t){var s=this.limits,a=t.newRight,u=t.newLeft,i=t.newBottom,n=t.newTop;return u=this.sideCorrectionByLimit(s.left,u),a=this.sideCorrectionByLimit(s.right,a),n=this.sideCorrectionByLimit(s.top,n),i=this.sideCorrectionByLimit(s.bottom,i),{newLeft:u,newRight:a,newTop:n,newBottom:i}},rectCorrectionByAspectRatio:function(t){var s=t.newLeft,a=t.newRight,u=t.newTop,i=t.newBottom,n=this.parentWidth,c=this.parentHeight,m=this.currentStick,l=this.aspectFactor,d=this.dimensionsBeforeMove,p=n-s-a,g=c-u-i;if(m[1]==="m"){var C=g-d.height;s-=C*l/2,a-=C*l/2}else if(m[0]==="m"){var L=p-d.width;u-=L/l/2,i-=L/l/2}else p/g>l?(p=l*g,m[1]==="l"?s=n-a-p:a=n-s-p):(g=p/l,m[0]==="t"?u=c-i-g:i=c-u-g);return{newLeft:s,newRight:a,newTop:u,newBottom:i}}},computed:{positionStyle:function(){return{top:this.top+"px",left:this.left+"px",zIndex:this.zIndex}},sizeStyle:function(){return{width:this.w=="auto"?"auto":this.width+"px",height:this.h=="auto"?"auto":this.height+"px"}},vdrStick:function(){var t=this;return function(s){var a={width:"".concat(t.stickSize/t.parentScaleX,"px"),height:"".concat(t.stickSize/t.parentScaleY,"px")};return a[M.y[s[0]]]="".concat(t.stickSize/t.parentScaleX/-2,"px"),a[M.x[s[1]]]="".concat(t.stickSize/t.parentScaleX/-2,"px"),a}},width:function(){return this.parentWidth-this.left-this.right},height:function(){return this.parentHeight-this.top-this.bottom},rect:function(){return{left:Math.round(this.left),top:Math.round(this.top),width:Math.round(this.width),height:Math.round(this.height)}}},watch:{active:function(t){t?this.$emit("activated"):this.$emit("deactivated")},isActive:{immediate:!0,handler:function(t){this.active=t}},z:{immediate:!0,handler:function(t){(t>=0||t==="auto")&&(this.zIndex=t)}},x:{handler:function(t,s){var a=this;if(!this.stickDrag&&!this.bodyDrag&&t!==this.left){var u=s-t;this.bodyDown({pageX:this.left,pageY:this.top}),this.bodyMove({x:u,y:0}),this.$nextTick(function(){a.bodyUp()})}}},y:{handler:function(t,s){var a=this;if(!this.stickDrag&&!this.bodyDrag&&t!==this.top){var u=s-t;this.bodyDown({pageX:this.left,pageY:this.top}),this.bodyMove({x:0,y:u}),this.$nextTick(function(){a.bodyUp()})}}},w:{handler:function(t,s){var a=this;if(!this.stickDrag&&!this.bodyDrag&&t!==this.width){var u=s-t;this.stickDown("mr",{pageX:this.right,pageY:this.top+this.height/2},!0),this.stickMove({x:u,y:0}),this.$nextTick(function(){a.stickUp()})}}},h:{handler:function(t,s){var a=this;if(!this.stickDrag&&!this.bodyDrag&&t!==this.height){var u=s-t;this.stickDown("bm",{pageX:this.left+this.width/2,pageY:this.bottom},!0),this.stickMove({x:0,y:u}),this.$nextTick(function(){a.stickUp()})}}},parentW:function(t){this.right=t-this.width-this.left,this.parentWidth=t},parentH:function(t){this.bottom=t-this.height-this.top,this.parentHeight=t}}},z=D,S=(v(12),v(1)),A=Object(S.a)(z,k,$,!1,null,null,null);A.options.__file="src/components/vue-drag-resize.vue",o.a=A.exports},function(r,o,v){function f(i,n){for(var c=0;c<i.length;c++){var m=i[c],l=D[m.id];if(l){l.refs++;for(var d=0;d<l.parts.length;d++)l.parts[d](m.parts[d]);for(;d<m.parts.length;d++)l.parts.push(T(m.parts[d],n))}else{for(var p=[],d=0;d<m.parts.length;d++)p.push(T(m.parts[d],n));D[m.id]={id:m.id,refs:1,parts:p}}}}function b(i,n){for(var c=[],m={},l=0;l<i.length;l++){var d=i[l],p=n.base?d[0]+n.base:d[0],g=d[1],C=d[2],L=d[3],R={css:g,media:C,sourceMap:L};m[p]?m[p].parts.push(R):c.push(m[p]={id:p,parts:[R]})}return c}function _(i,n){var c=S(i.insertInto);if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var m=s[s.length-1];if(i.insertAt==="top")m?m.nextSibling?c.insertBefore(n,m.nextSibling):c.appendChild(n):c.insertBefore(n,c.firstChild),s.push(n);else{if(i.insertAt!=="bottom")throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");c.appendChild(n)}}function w(i){if(i.parentNode===null)return!1;i.parentNode.removeChild(i);var n=s.indexOf(i);n>=0&&s.splice(n,1)}function x(i){var n=document.createElement("style");return i.attrs.type="text/css",B(n,i.attrs),_(i,n),n}function y(i){var n=document.createElement("link");return i.attrs.type="text/css",i.attrs.rel="stylesheet",B(n,i.attrs),_(i,n),n}function B(i,n){Object.keys(n).forEach(function(c){i.setAttribute(c,n[c])})}function T(i,n){var c,m,l,d;if(n.transform&&i.css){if(!(d=n.transform(i.css)))return function(){};i.css=d}if(n.singleton){var p=t++;c=A||(A=x(n)),m=k.bind(null,c,p,!1),l=k.bind(null,c,p,!0)}else i.sourceMap&&typeof URL=="function"&&typeof URL.createObjectURL=="function"&&typeof URL.revokeObjectURL=="function"&&typeof Blob=="function"&&typeof btoa=="function"?(c=y(n),m=M.bind(null,c,n),l=function(){w(c),c.href&&URL.revokeObjectURL(c.href)}):(c=x(n),m=$.bind(null,c),l=function(){w(c)});return m(i),function(g){if(g){if(g.css===i.css&&g.media===i.media&&g.sourceMap===i.sourceMap)return;m(i=g)}else l()}}function k(i,n,c,m){var l=c?"":m.css;if(i.styleSheet)i.styleSheet.cssText=u(n,l);else{var d=document.createTextNode(l),p=i.childNodes;p[n]&&i.removeChild(p[n]),p.length?i.insertBefore(d,p[n]):i.appendChild(d)}}function $(i,n){var c=n.css,m=n.media;if(m&&i.setAttribute("media",m),i.styleSheet)i.styleSheet.cssText=c;else{for(;i.firstChild;)i.removeChild(i.firstChild);i.appendChild(document.createTextNode(c))}}function M(i,n,c){var m=c.css,l=c.sourceMap,d=n.convertToAbsoluteUrls===void 0&&l;(n.convertToAbsoluteUrls||d)&&(m=a(m)),l&&(m+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */");var p=new Blob([m],{type:"text/css"}),g=i.href;i.href=URL.createObjectURL(p),g&&URL.revokeObjectURL(g)}var D={},z=function(i){var n;return function(){return n===void 0&&(n=i.apply(this,arguments)),n}}(function(){return window&&document&&document.all&&!window.atob}),S=function(i){var n={};return function(c){return n[c]===void 0&&(n[c]=i.call(this,c)),n[c]}}(function(i){return document.querySelector(i)}),A=null,t=0,s=[],a=v(10);r.exports=function(i,n){if(typeof DEBUG<"u"&&DEBUG&&typeof document!="object")throw new Error("The style-loader cannot be used in a non-browser environment");n=n||{},n.attrs=typeof n.attrs=="object"?n.attrs:{},n.singleton||(n.singleton=z()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var c=b(i,n);return f(c,n),function(m){for(var l=[],d=0;d<c.length;d++){var p=c[d],g=D[p.id];g.refs--,l.push(g)}m&&f(b(m,n),n);for(var d=0;d<l.length;d++){var g=l[d];if(g.refs===0){for(var C=0;C<g.parts.length;C++)g.parts[C]();delete D[g.id]}}}};var u=function(){var i=[];return function(n,c){return i[n]=c,i.filter(Boolean).join(`
`)}}()},function(r,o){function v(b,_){var w=b[1]||"",x=b[3];if(!x)return w;if(_&&typeof btoa=="function"){var y=f(x);return[w].concat(x.sources.map(function(B){return"/*# sourceURL="+x.sourceRoot+B+" */"})).concat([y]).join(`
`)}return[w].join(`
`)}function f(b){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(b))))+" */"}r.exports=function(b){var _=[];return _.toString=function(){return this.map(function(w){var x=v(w,b);return w[2]?"@media "+w[2]+"{"+x+"}":x}).join("")},_.i=function(w,x){typeof w=="string"&&(w=[[null,w,""]]);for(var y={},B=0;B<this.length;B++){var T=this[B][0];typeof T=="number"&&(y[T]=!0)}for(B=0;B<w.length;B++){var k=w[B];typeof k[0]=="number"&&y[k[0]]||(x&&!k[2]?k[2]=x:x&&(k[2]="("+k[2]+") and ("+x+")"),_.push(k))}},_}},function(r,o){var v;v=function(){return this}();try{v=v||Function("return this")()||(0,eval)("this")}catch{typeof window=="object"&&(v=window)}r.exports=v},,,,,function(r,o){r.exports=function(v){var f=typeof window<"u"&&window.location;if(!f)throw new Error("fixUrls requires window.location");if(!v||typeof v!="string")return v;var b=f.protocol+"//"+f.host,_=b+f.pathname.replace(/\/[^\/]*$/,"/");return v.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(w,x){var y=x.trim().replace(/^"(.*)"$/,function(T,k){return k}).replace(/^'(.*)'$/,function(T,k){return k});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(y))return w;var B;return B=y.indexOf("//")===0?y:y.indexOf("/")===0?b+y:_+y.replace(/^\.\//,""),"url("+JSON.stringify(B)+")"})}},function(r,o,v){o=r.exports=v(4)(!1),o.push([r.i,`
.vdr,.vdr.active:before{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box
}
.vdr.active:before{content:"";width:100%;height:100%;top:0;left:0;outline:1px dashed #d6d6d6
}
.vdr-stick{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;font-size:1px;background:#fff;border:1px solid #6c6c6c;-webkit-box-shadow:0 0 2px #bbb;box-shadow:0 0 2px #bbb
}
.inactive .vdr-stick{display:none
}
.vdr-stick-br,.vdr-stick-tl{cursor:nwse-resize
}
.vdr-stick-bm,.vdr-stick-tm{left:50%;cursor:ns-resize
}
.vdr-stick-bl,.vdr-stick-tr{cursor:nesw-resize
}
.vdr-stick-ml,.vdr-stick-mr{top:50%;cursor:ew-resize
}
.vdr-stick.not-resizable{display:none
}
.content-container{display:block;position:relative
}`,""])},function(r,o,v){var f=v(0),b=v.n(f);b.a},,,,,,,,,,,,,function(r,o,v){v.r(o),(function(f){function b(y){b.installed||(b.installed=!0,y.component("vue-drag-resize",_.a))}v.d(o,"install",function(){return b});var _=v(2),w={install:b},x=null;typeof window<"u"?x=window.Vue:f!==void 0&&(x=f.Vue),x&&x.use(w),o.default=_.a}).call(this,v(5))}])})})(Y);var it=Y.exports;const nt=j(it),st={name:"BoundingBox",components:{Loading:H,Tags:P,AddTags:W,Boxes:et,VueDragResize:nt,BrandsBox:O},directives:{ClickOutside:V},async created(){window.innerWidth<1e3&&(this.isMobile=!0,this.stickSize=30),window.location.href.includes("verify")?(this.isVerifying=!0,this.$store.dispatch("GET_NEXT_BOXES_TO_VERIFY")):this.$store.dispatch("GET_NEXT_BBOX")},data(){return{stickSize:6,skip_processing:!1,update_processing:!1,wrong_tags_processing:!1,isMobile:!1,isVerifying:!1}},mounted(){document.addEventListener("keydown",h=>{const e=h.key;e==="ArrowUp"?(h.preventDefault(),this.$store.commit("moveBoxUp")):e==="ArrowRight"?(h.preventDefault(),this.$store.commit("moveBoxRight")):e==="ArrowDown"?(h.preventDefault(),this.$store.commit("moveBoxDown")):e==="ArrowLeft"&&(h.preventDefault(),this.$store.commit("moveBoxLeft"))})},computed:{boxes(){return this.$store.state.bbox.boxes},disabled(){return this.skip_processing||this.update_processing||this.wrong_tags_processing},getTitle(){return this.isVerifying?`Verify boxes for image # ${this.imageId}`:`Add bounding box to image # ${this.imageId}`},image(){return"backgroundImage: url("+this.$store.state.admin.filename+")"},imageId(){return this.$store.state.admin.id},isAdmin(){return this.$store.state.user.admin||this.$store.state.user.helper},littercoinEarned(){return this.$store.state.user.user.littercoin_owed+this.$store.state.user.user.littercoin_allowance},littercoinProgress(){return this.$store.state.user.user.bbox_verification_count+"%"},loading(){return this.$store.state.admin.loading},skipButton(){let h="button is-medium is-warning mt1 ";return this.skip_processing?h+" is-loading":h},totalBoxCount(){return this.$store.state.bbox.totalBoxCount},usersBoxCount(){return this.$store.state.bbox.usersBoxCount},updateButton(){let h="button is-medium is-primary mt1 ";return this.update_processing?h+"is-loading":h},wrongTagsButton(){let h="button is-medium is-primary mt1 ";return this.wrong_tags_processing?h+"is-loading":h}},methods:{activated(h){this.$store.commit("activateBox",h)},boxText(h,e,r,o){return e?this.$t(`litter.${r}.${o}`):h},deactivate(){this.$store.commit("deactivateBoxes")},dragging(h){this.$store.commit("updateBoxPosition",h)},resize(h){this.stickSize=1,this.$store.commit("updateBoxPosition",h)},resizestop(){this.stickSize=this.isMobile?30:6},async skip(){this.skip_processing=!0,await this.$store.dispatch("BBOX_SKIP_IMAGE",this.isVerifying),this.skip_processing=!1},async update(){this.update_processing=!0,await this.$store.dispatch("BBOX_UPDATE_TAGS"),this.update_processing=!1},wrongTags(){this.wrong_tags_processing=!0,this.$store.dispatch("BBOX_WRONG_TAGS"),this.wrong_tags_processing=!1}}};var ot=function(){var e=this,r=e._self._c;return r("div",{staticClass:"relative h100",on:{click:e.deactivate}},[e.loading?r("loading",{attrs:{active:e.loading,"is-full-page":!0},on:{"update:active":function(o){e.loading=o}}}):r("div",{staticClass:"columns mt1"},[r("Boxes"),r("div",{staticClass:"column is-one-third"},[r("h1",{staticClass:"title is-2 has-text-centered"},[e._v(e._s(e.getTitle))]),r("div",{staticClass:"display-inline-grid",on:{click:function(o){o.stopPropagation()}}},[r("div",{ref:"img",style:e.image,attrs:{id:"image-wrapper"}},e._l(e.boxes,function(o){return r("VueDragResize",{directives:[{name:"show",rawName:"v-show",value:!o.hidden,expression:"! box.hidden"}],key:o.id,attrs:{w:o.width,h:o.height,x:o.left,y:o.top,isActive:o.active,minw:5,minh:5,stickSize:e.stickSize,parentLimitation:!0,z:o.id},on:{clicked:function(v){return e.activated(o.id)},dragging:e.dragging,resizing:e.resize,resizestop:e.resizestop}},[r("p",{staticClass:"box-tag"},[e._v(e._s(e.boxText(o.id,o.showLabel,o.category,o.tag)))])])}),1),r("add-tags",{directives:[{name:"show",rawName:"v-show",value:e.isAdmin,expression:"isAdmin"}],attrs:{id:e.imageId,annotations:!0,isVerifying:e.isVerifying,"show-custom-tags":!1}})],1)]),r("div",{staticClass:"column is-2 is-offset-1 has-text-centered"},[r("Tags",{attrs:{admin:e.isAdmin}}),e.isAdmin?r("button",{class:e.updateButton,attrs:{disabled:e.disabled},on:{click:e.update}},[e._v("Update Tags")]):r("button",{class:e.wrongTagsButton,attrs:{disabled:e.disabled},on:{click:e.wrongTags}},[e._v("Wrong Tags")]),r("button",{class:e.skipButton,attrs:{disabled:e.disabled},on:{click:e.skip}},[e._v("Cannot use this image")])],1)],1),r("div",{staticClass:"littercoin-pos"},[r("p",[e._v("Your boxes: "+e._s(this.usersBoxCount))]),r("p",[e._v("Total Boxes: "+e._s(this.totalBoxCount))]),r("p",[e._v("Littercoin earned: "+e._s(this.littercoinEarned))]),r("p",[e._v("Next Littercoin: "+e._s(this.littercoinProgress))])])],1)},rt=[],at=I(st,ot,rt,!1,null,null);const dt=at.exports;export{dt as default};
