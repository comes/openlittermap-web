import{n as d}from"./app-ByiNnCej.js";/* empty css            */const c={name:"Email",props:["token"],data(){return{email:this.$route.query.email,password:"",passwordConfirmation:"",processing:!1,isPasswordVisible:!1,isPasswordConfirmationVisible:!1}},computed:{errors(){return this.$store.state.user.errors},emailErrors(){return this.errors.email?this.errors.email[0]:null},passwordErrors(){return this.errors.password?this.errors.password[0]:null},passwordConfirmationErrors(){return this.errors.password_confirmation?this.errors.password_confirmation[0]:null}},methods:{async submit(){if(this.password!==this.passwordConfirmation){let t={...this.errors,password:["The password confirmation does not match."]};this.$store.commit("errors",t);return}this.processing=!0,await this.$store.dispatch("RESET_PASSWORD",{email:this.email,password:this.password,password_confirmation:this.passwordConfirmation,token:this.token}),this.processing=!1},clearErrors(){this.$store.commit("errors",[])}}};var p=function(){var s=this,a=s._self._c;return a("section",{staticClass:"hero is-info is-fullheight"},[a("div",{staticClass:"columns centered"},[a("div",{staticClass:"column"}),a("div",{staticClass:"column is-half-tablet is-one-third-desktop is-one-quarter-fullhd"},[a("p",{staticClass:"title is-1 has-text-centered"},[s._v("Reset Your Password")]),a("div",{staticClass:"panel-body"},[a("form",{staticClass:"form-horizontal",attrs:{role:"form"},on:{submit:function(r){return r.preventDefault(),s.submit.apply(null,arguments)}}},[a("div",{staticClass:"field with-x-spacing"},[a("label",{staticClass:"label has-text-white",attrs:{for:"email"}},[s._v(s._s(s.$t("settings.details.email")))]),a("div",{staticClass:"control has-icons-left",class:s.processing?"is-loading":""},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.email,expression:"email"}],staticClass:"input",class:s.emailErrors?"is-danger":"",attrs:{id:"email",type:"email",name:"email",required:"",autofocus:"",placeholder:"you@email.com"},domProps:{value:s.email},on:{input:[function(r){r.target.composing||(s.email=r.target.value)},s.clearErrors]}}),s._m(0),s.emailErrors?a("p",{staticClass:"help has-text-white has-text-weight-bold"},[s._v(s._s(s.emailErrors))]):s._e()])]),a("div",{staticClass:"field with-x-spacing"},[a("label",{staticClass:"label has-text-white",attrs:{for:"password"}},[s._v(s._s(s.$t("settings.password.enter-new-password")))]),a("div",{staticClass:"control has-icons-left has-icons-right",class:s.processing?"is-loading":""},[(s.isPasswordVisible?"text":"password")=="checkbox"?a("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],staticClass:"input",class:s.passwordErrors?"is-danger":"",attrs:{id:"password",name:"password",required:"",placeholder:"********",type:"checkbox"},domProps:{checked:Array.isArray(s.password)?s._i(s.password,null)>-1:s.password},on:{input:s.clearErrors,change:function(r){var i=s.password,e=r.target,l=!!e.checked;if(Array.isArray(i)){var n=null,o=s._i(i,n);e.checked?o<0&&(s.password=i.concat([n])):o>-1&&(s.password=i.slice(0,o).concat(i.slice(o+1)))}else s.password=l}}}):(s.isPasswordVisible?"text":"password")=="radio"?a("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],staticClass:"input",class:s.passwordErrors?"is-danger":"",attrs:{id:"password",name:"password",required:"",placeholder:"********",type:"radio"},domProps:{checked:s._q(s.password,null)},on:{input:s.clearErrors,change:function(r){s.password=null}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],staticClass:"input",class:s.passwordErrors?"is-danger":"",attrs:{id:"password",name:"password",required:"",placeholder:"********",type:s.isPasswordVisible?"text":"password"},domProps:{value:s.password},on:{input:[function(r){r.target.composing||(s.password=r.target.value)},s.clearErrors]}}),s._m(1),a("span",{staticClass:"icon is-small is-right cursor-pointer",staticStyle:{"pointer-events":"all"},on:{click:function(r){s.isPasswordVisible=!s.isPasswordVisible}}},[a("i",{staticClass:"fa",class:s.isPasswordVisible?"fa-eye":"fa-eye-slash"})]),s.passwordErrors?a("p",{staticClass:"help has-text-white has-text-weight-bold"},[s._v(s._s(s.passwordErrors))]):s._e()])]),a("div",{staticClass:"field with-x-spacing"},[a("label",{staticClass:"label has-text-white",attrs:{for:"password_conf"}},[s._v(s._s(s.$t("settings.password.confirm-new-password")))]),a("div",{staticClass:"control has-icons-left has-icons-right",class:s.processing?"is-loading":""},[(s.isPasswordConfirmationVisible?"text":"password")=="checkbox"?a("input",{directives:[{name:"model",rawName:"v-model",value:s.passwordConfirmation,expression:"passwordConfirmation"}],staticClass:"input",class:s.passwordConfirmationErrors?"is-danger":"",attrs:{id:"password_conf",name:"password_conf",required:"",placeholder:"********",type:"checkbox"},domProps:{checked:Array.isArray(s.passwordConfirmation)?s._i(s.passwordConfirmation,null)>-1:s.passwordConfirmation},on:{input:s.clearErrors,change:function(r){var i=s.passwordConfirmation,e=r.target,l=!!e.checked;if(Array.isArray(i)){var n=null,o=s._i(i,n);e.checked?o<0&&(s.passwordConfirmation=i.concat([n])):o>-1&&(s.passwordConfirmation=i.slice(0,o).concat(i.slice(o+1)))}else s.passwordConfirmation=l}}}):(s.isPasswordConfirmationVisible?"text":"password")=="radio"?a("input",{directives:[{name:"model",rawName:"v-model",value:s.passwordConfirmation,expression:"passwordConfirmation"}],staticClass:"input",class:s.passwordConfirmationErrors?"is-danger":"",attrs:{id:"password_conf",name:"password_conf",required:"",placeholder:"********",type:"radio"},domProps:{checked:s._q(s.passwordConfirmation,null)},on:{input:s.clearErrors,change:function(r){s.passwordConfirmation=null}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:s.passwordConfirmation,expression:"passwordConfirmation"}],staticClass:"input",class:s.passwordConfirmationErrors?"is-danger":"",attrs:{id:"password_conf",name:"password_conf",required:"",placeholder:"********",type:s.isPasswordConfirmationVisible?"text":"password"},domProps:{value:s.passwordConfirmation},on:{input:[function(r){r.target.composing||(s.passwordConfirmation=r.target.value)},s.clearErrors]}}),s._m(2),a("div",{staticClass:"icon is-small is-right cursor-pointer",staticStyle:{"pointer-events":"all"},on:{click:function(r){s.isPasswordConfirmationVisible=!s.isPasswordConfirmationVisible}}},[a("i",{staticClass:"fa",class:s.isPasswordConfirmationVisible?"fa-eye":"fa-eye-slash"})]),s.passwordConfirmationErrors?a("p",{staticClass:"help has-text-white has-text-weight-bold"},[s._v(s._s(s.passwordConfirmationErrors))]):s._e()])]),a("div",{staticClass:"field has-text-centered"},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary",class:s.processing?"is-loading":"",attrs:{type:"submit",disabled:s.processing}},[s._v(" Reset Password ")])])])])])]),a("div",{staticClass:"column"})])])},m=[function(){var t=this,s=t._self._c;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fa fa-envelope"})])},function(){var t=this,s=t._self._c;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fa fa-lock"})])},function(){var t=this,s=t._self._c;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fa fa-lock"})])}],w=d(c,p,m,!1,null,"9f4d8a55");const h=w.exports;export{h as default};
