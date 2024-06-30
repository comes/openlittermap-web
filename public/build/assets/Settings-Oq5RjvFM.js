import i from"./Details-DV16ZF9w.js";import e from"./Social-CnfwEVkx.js";import n from"./Account-CDrAvWj-.js";import{n as o}from"./app-D1dsUHZ8.js";import l from"./Payments-6Ztd-8U-.js";import c from"./Privacy-CSwVyY6G.js";import d from"./Littercoin-Dnt1_z-Z.js";import p from"./PickedUp-i7EgSOLt.js";import m from"./Emails-Cd1z864e.js";import u from"./GlobalFlag-DGnEhYkq.js";/* empty css            */import"./vue-loading-B7rzurE_.js";/* empty css                    */const f={name:"Password",data(){return{processing:!1,oldpassword:"",password:"",password_confirmation:"",btn:"button is-medium is-info"}},computed:{button(){return this.processing?this.btn+" is-loading":this.btn},errors(){return this.$store.state.user.errors}},methods:{clearError(r){this.errors[r]&&this.$store.commit("deleteUserError",r)},getFirstError(r){return this.errors[r][0]},errorExists(r){return this.errors.hasOwnProperty(r)},async submit(){this.processing=!0,await this.$store.dispatch("CHANGE_PASSWORD",{oldpassword:this.oldpassword,password:this.password,password_confirmation:this.password_confirmation}),this.processing=!1},translate(r){return this.$t("settings."+r)}}};var _=function(){var s=this,t=s._self._c;return t("div",{staticStyle:{"padding-left":"1em","padding-right":"1em"}},[t("h1",{staticClass:"title is-4"},[s._v(" "+s._s(s.$t("settings.password.change-password")))]),t("hr"),t("br"),t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-one-third is-offset-1"},[t("form",{attrs:{method:"POST"},on:{submit:function(a){return a.preventDefault(),s.submit.apply(null,arguments)},keydown:function(a){return s.clearError(a.target.name)}}},[t("label",{attrs:{for:"oldpassword"}},[s._v(" "+s._s(s.$t("settings.password.enter-old-password")))]),s.errorExists("oldpassword")?t("span",{staticClass:"error",domProps:{textContent:s._s(s.getFirstError("oldpassword"))}}):s._e(),t("div",{staticClass:"field"},[t("div",{staticClass:"control has-icons-left"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.oldpassword,expression:"oldpassword"}],staticClass:"input",attrs:{type:"password",name:"oldpassword",placeholder:"*********",required:""},domProps:{value:s.oldpassword},on:{input:function(a){a.target.composing||(s.oldpassword=a.target.value)}}}),s._m(0)])]),t("label",{attrs:{for:"password"}},[s._v(s._s(s.$t("settings.password.enter-new-password")))]),s.errorExists("password")?t("span",{staticClass:"error",domProps:{textContent:s._s(s.getFirstError("password"))}}):s._e(),t("div",{staticClass:"field"},[t("div",{staticClass:"control has-icons-left"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],staticClass:"input",attrs:{id:"password",type:"password",name:"password",placeholder:s.translate("password.enter-strong-password"),required:""},domProps:{value:s.password},on:{input:function(a){a.target.composing||(s.password=a.target.value)}}}),s._m(1)])]),t("label",{attrs:{for:"password_confirmation"}},[s._v(s._s(s.$t("settings.password.confirm-new-password")))]),s.errorExists("password_confirmation")?t("span",{staticClass:"error",domProps:{textContent:s._s(s.getFirstError("password_confirmation"))}}):s._e(),t("div",{staticClass:"field mb2"},[t("div",{staticClass:"control has-icons-left"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.password_confirmation,expression:"password_confirmation"}],staticClass:"input",attrs:{type:"password",name:"password_confirmation",placeholder:s.translate("password.repeat-strong-password"),required:""},domProps:{value:s.password_confirmation},on:{input:function(a){a.target.composing||(s.password_confirmation=a.target.value)}}}),s._m(2)])]),t("div",{staticClass:"col-md-12",staticStyle:{"text-align":"center"}},[t("button",{class:s.button,attrs:{disabled:s.processing}},[s._v(s._s(s.$t("settings.password.update-password")))])])])])])])},w=[function(){var r=this,s=r._self._c;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fa fa-key"})])},function(){var r=this,s=r._self._c;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fa fa-key"})])},function(){var r=this,s=r._self._c;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fa fa-key"})])}],v=o(f,_,w,!1,null,null);const h=v.exports,g={name:"Settings",components:{Details:i,Social:e,Account:n,Password:h,Payments:l,Privacy:c,Littercoin:d,PickedUp:p,Emails:m,GlobalFlag:u},async created(){window.location.href.split("/")[4]&&(this.link=window.location.href.split("/")[4])},data(){return{links:["details","social","account","password","payments","privacy","littercoin","picked-up","emails","show-flag"],link:"password",types:{details:"Details",social:"Social",account:"Account",password:"Password",payments:"Payments",privacy:"Privacy",littercoin:"Littercoin","picked-up":"PickedUp",emails:"Emails","show-flag":"GlobalFlag"}}},methods:{change(r){this.link=r},translate(r){return this.$t("settings.common."+r)}}};var C=function(){var s=this,t=s._self._c;return t("div",{staticClass:"container mt5"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-2"},[t("aside",{staticClass:"menu",attrs:{id:"panel"}},[t("p",{staticClass:"menu-label"},[s._v(" "+s._s(s.$t("settings.common.general"))+" ")]),t("ul",{staticClass:"menu-list"},s._l(s.links,function(a){return t("li",[t("router-link",{attrs:{to:"/settings/"+a},nativeOn:{click:function(P){return s.change(a)}}},[s._v(" "+s._s(s.translate(a))+" ")])],1)}),0)])]),t("div",{staticClass:"column is-three-quarters is-offset-1"},[t(this.types[this.link],{tag:"component"})],1)])])},y=[],b=o(g,C,y,!1,null,null);const U=b.exports;export{U as default};
