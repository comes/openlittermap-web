import{L as o}from"./vue-loading-D6L8oTn8.js";/* empty css                    */import{n as a,e as l}from"./app-DVgw5rzq.js";/* empty css            */const n={name:"GlobalFlag",components:{Loading:o,VueSimpleSuggest:l},async created(){this.loading=!0,await this.$store.dispatch("GET_COUNTRIES_FOR_FLAGS"),this.loading=!1},data(){return{btn:"button mt1 is-primary is-medium",country:"",processing:!1,loading:!0,autoCompleteStyle:{vueSimpleSuggest:"position-relative width-50",inputWrapper:"",defaultInput:"input",suggestions:"position-absolute list-group z-1000 custom-class-overflow width-50",suggestItem:"list-group-item"}}},computed:{button(){return this.processing?this.btn+" is-loading":this.btn},countries(){return this.$store.state.user.countries}},methods:{getCountries(){return Object.values(this.countries)},getSelected(){return this.$store.state.user.user.global_flag?this.countries[this.$store.state.user.user.global_flag]:!1},onFocus(){this.$refs.vss.suggestions=this.$refs.vss.list},onSuggestion(){this.$nextTick(function(){Array.prototype.forEach.call(document.getElementsByClassName("input"),function(i){i.blur()})})},async save(){this.processing=!0;let i=Object.keys(this.countries).find(t=>this.countries[t]===this.country);await this.$store.dispatch("UPDATE_GLOBAL_FLAG",i),this.processing=!1}}};var r=function(){var t=this,s=t._self._c;return s("div",{staticStyle:{"padding-left":"1em","padding-right":"1em"}},[s("h1",{staticClass:"title is-4"},[t._v(t._s(t.$t("settings.globalFlag.show-flag")))]),s("hr"),s("br"),t.loading?s("loading",{attrs:{active:t.loading,"is-full-page":!0},on:{"update:active":function(e){t.loading=e}}}):s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-offset-1"},[s("p",{staticClass:"title is-5 mb20 green"},[t._v(t._s(t.$t("settings.globalFlag.top-10")))]),s("div",{directives:[{name:"show",rawName:"v-show",value:this.$store.state.user.user.global_flag,expression:"this.$store.state.user.user.global_flag"}],staticClass:"mb20"},[s("p",{staticClass:"strong"},[t._v(t._s(t.$t("settings.globalFlag.global-top-10-challenge"))+": "+t._s(this.getSelected()))])]),s("p",{staticClass:"mb20"},[t._v(t._s(t.$t("settings.globalFlag.action-select")))]),s("p",{staticClass:"mb20"},[t._v(t._s(t.$t("settings.globalFlag.select-country")))]),s("vue-simple-suggest",{ref:"vss",attrs:{"filter-by-query":!0,list:t.getCountries(),"min-length":0,"max-suggestions":0,mode:"select",placeholder:t.$t("settings.globalFlag.select-country"),styles:t.autoCompleteStyle},on:{focus:function(e){return t.onFocus()},"suggestion-click":function(e){return t.onSuggestion()}},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}}),s("button",{class:t.button,attrs:{disabled:t.processing},on:{click:t.save}},[t._v(t._s(t.$t("settings.globalFlag.save-flag")))])],1)])],1)},u=[],c=a(n,r,u,!1,null,null);const f=c.exports;export{f as default};
