import{S as a}from"./SortLocations-bdu_qtPu.js";import{L as i}from"./vue-loading-B7rzurE_.js";/* empty css                    */import{n as e}from"./app-D1dsUHZ8.js";import"./moment-zH0z38ay.js";import"./BaseCharts-DI9iM9BY.js";import"./LeaderboardList-D_WkP8A4.js";/* empty css            */const n={name:"States",async created(){this.loading=!0,window.scroll({top:0,left:0});const o=window.location.href.split("/")[4];await this.$store.dispatch("GET_STATES",o),this.loading=!1},components:{Loading:i,SortLocations:a},data(){return{loading:!0}},computed:{backButtonText(){return this.$store.state.locations.countryName}},methods:{goBack(){this.$store.commit("setLocations",[]),this.$router.push({path:"/world"})}}};var r=function(){var s=this,t=s._self._c;return t("div",{staticClass:"locations-container"},[t("section",{staticClass:"hero is-info is-medium"},[t("div",{staticClass:"hero-body"},[t("div",{staticClass:"container"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-4"},[t("h1",{staticClass:"title is-1 flex pointer",on:{click:s.goBack}},[t("i",{directives:[{name:"show",rawName:"v-show",value:!s.loading,expression:"!loading"}],staticClass:"fa fa-chevron-left country-back"}),s._v(" "+s._s(s.backButtonText)+" ")])])])])])]),t("sort-locations",{attrs:{locationType:"state"}})],1)},c=[],l=e(n,r,c,!1,null,"bac93c77");const w=l.exports;export{w as default};
