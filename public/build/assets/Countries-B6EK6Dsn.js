import{L as r}from"./vue-loading-B7rzurE_.js";/* empty css                    */import{n as a}from"./app-D1dsUHZ8.js";import{L as i}from"./LeaderboardList-D_WkP8A4.js";import{S as l}from"./SortLocations-bdu_qtPu.js";/* empty css            */import"./moment-zH0z38ay.js";import"./BaseCharts-DI9iM9BY.js";const n={name:"TotalGlobalCounts",props:["loading"],computed:{previous_littercoin(){let e=0;return this.$localStorage.get("littercoin_owed")&&(e=this.$localStorage.get("littercoin_owed")),this.$localStorage.set("littercoin_owed",this.littercoin),e},previous_total_litter(){let e=0;return this.$localStorage.get("total_litter")&&(e=this.$localStorage.get("total_litter")),this.$localStorage.set("total_litter",this.total_litter),e},previous_total_photos(){let e=0;return this.$localStorage.get("total_photos")&&(e=this.$localStorage.get("total_photos")),this.$localStorage.set("total_photos",this.total_photos),e},total_litter(){return this.$store.state.locations.total_litter},total_photos(){return this.$store.state.locations.total_photos},total_littercoin(){return this.$store.state.locations.littercoin}},methods:{commas(e){return parseInt(e).toLocaleString()}}};var c=function(){var t=this,s=t._self._c;return s("div",{staticClass:"stats"},[s("div",{staticClass:"stat"},[s("h1",{staticClass:"subtitle is-5 has-text-centered"},[s("strong",{staticClass:"has-text-black font-800"},[t._v(" "+t._s(t.$t("location.total-verified-litter"))+" ")])]),s("h1",{staticClass:"title is-2 has-text-centered has-text-white"},[s("strong",[t.loading?s("span",[t._v("...")]):s("number",{attrs:{from:t.previous_total_litter,to:t.total_litter,duration:3,delay:1,easing:"Power1.easeOut",format:t.commas}})],1)])]),s("div",{staticClass:"stat"},[s("h1",{staticClass:"subtitle is-5 has-text-centered"},[s("strong",{staticClass:"has-text-black font-800"},[t._v(" "+t._s(t.$t("location.total-verified-photos"))+" ")])]),s("h1",{staticClass:"title is-2 has-text-centered has-text-white"},[s("strong",[t.loading?s("span",[t._v("...")]):s("number",{attrs:{from:t.previous_total_photos,to:t.total_photos,duration:3,delay:1,easing:"Power1.easeOut",format:t.commas}})],1)])]),s("div",{staticClass:"stat"},[s("h1",{staticClass:"subtitle is-5 has-text-centered"},[s("strong",{staticClass:"has-text-black font-800"},[t._v(" "+t._s(t.$t("location.total-littercoin-issued"))+" ")])]),s("h1",{staticClass:"title is-2 has-text-centered has-text-white"},[s("strong",[t.loading?s("span",[t._v("...")]):s("number",{attrs:{from:t.previous_littercoin,to:t.total_littercoin,duration:3,delay:1,easing:"Power1.easeOut",format:t.commas}})],1)])])])},_=[],d=a(n,c,_,!1,null,"c7421a37");const p=d.exports,h={name:"ProgressBar",props:["currentxp","xpneeded","startingxp"],computed:{currentValue(){let e=this.xpneeded-this.startingxp;return(this.currentxp-this.startingxp)*100/e}}};var m=function(){var t=this,s=t._self._c;return s("progress",{staticClass:"progress is-large is-success",attrs:{max:100},domProps:{value:t.currentValue}})},u=[],g=a(h,m,u,!1,null,null);const v=g.exports,f={name:"Progress",props:["loading"],components:{ProgressBar:v},methods:{commas(e){return parseInt(e).toLocaleString()}},computed:{littercoin(){return this.$store.state.locations.littercoin},previousXp(){return this.$store.state.locations.level.previousXp},nextXp(){return this.$store.state.locations.level.nextXp},total_litter(){return this.$store.state.locations.total_litter},progress(){let e=this.nextXp-this.previousXp;return((this.total_litter-this.previousXp)*100/e).toFixed(2)},total_photos(){return this.$store.state.locations.total_photos}}};var x=function(){var t=this,s=t._self._c;return s("div",{staticClass:"container mt4 progress-bar"},[s("div",[s("div",{staticClass:"flex mb1"},[s("h4",{staticClass:"flex-1 has-text-white"},[t._v(" "+t._s(t.$t("location.previous-target"))+": "),s("br"),s("strong",{staticClass:"has-text-white"},[t._v(" "+t._s(t._f("commas")(this.previousXp))+" "+t._s(t.$t("location.litter"))+" ")])]),s("h4",{staticClass:"has-text-white"},[t._v(t._s(t.$t("location.next-target"))+": "),s("br"),s("strong",{staticClass:"has-text-white"},[t._v(" "+t._s(t._f("commas")(this.nextXp))+" "+t._s(t.$t("location.litter"))+" ")])])]),s("ProgressBar",{staticClass:"mb1em",attrs:{currentxp:t.total_litter,startingxp:t.previousXp,xpneeded:t.nextXp}}),t.loading?s("p",{staticClass:"has-text-centered has-text-white mb2"},[t._v("...%")]):s("p",{staticClass:"has-text-centered has-text-white mb2"},[t._v(t._s(this.progress)+"%")])],1)])},$=[],C=a(f,x,$,!1,null,"fdd75015");const b=C.exports,w={name:"GlobalMetaData",props:["loading"],components:{LeaderboardList:i,Progress:b,TotalGlobalCounts:p},channel:"main",echo:{ImageUploaded:(e,t)=>{e.isUserVerified&&t.$store.commit("incrementTotalPhotos")},ImageDeleted:(e,t)=>{e.isUserVerified&&t.$store.commit("decrementTotalPhotos")},TagsVerifiedByAdmin:(e,t)=>{t.$store.commit("incrementTotalLitter",e.total_litter_all_categories),e.isUserVerified||t.$store.commit("incrementTotalPhotos")}},computed:{leaders(){return this.$store.state.locations.globalLeaders}},methods:{openLeaderboard(e){this.$router.push({path:"/leaderboard"})}}};var L=function(){var t=this,s=t._self._c;return s("section",{staticClass:"is-link hero is-bold"},[s("section",{staticClass:"wrapper is-link is-bold"},[s("div",{staticClass:"container"},[s("div",{staticClass:"typed-container"},[s("vue-typed-js",{attrs:{strings:["Community ^2000","Impact ^3000","Progress ^4000"],loop:!0,typespeed:5,startDelay:1e3,backSpeed:10,showCursor:!1}},[s("h1",{staticClass:"worldcup-title"},[t._v("Our Global "),s("span",{staticClass:"typing"})])])],1),s("TotalGlobalCounts",{attrs:{loading:t.loading}}),s("div",{staticClass:"leaderboard-heading",on:{click:t.openLeaderboard}},[s("h3",{staticClass:"title is-2 has-text-centered"},[t._v(" "+t._s(t.$t("location.global-leaderboard"))+" ")]),s("i",{staticClass:"fa fa-arrow-right"})]),s("LeaderboardList",{attrs:{leaders:t.leaders}})],1),s("Progress",{attrs:{loading:t.loading}})],1)])},P=[],S=a(w,L,P,!1,null,"bd523968");const y=S.exports,T={name:"Countries",components:{Loading:r,GlobalMetaData:y,SortLocations:l},async created(){this.loading=!0,await this.$store.dispatch("GET_WORLD_CUP_DATA"),this.loading=!1},data(){return{loading:!0}}};var X=function(){var t=this,s=t._self._c;return s("div",[s("loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{active:t.loading,"is-full-page":!0},on:{"update:active":function(o){t.loading=o}}}),s("GlobalMetaData",{attrs:{loading:t.loading}}),s("SortLocations",{attrs:{locationType:"country"}})],1)},V=[],G=a(T,X,V,!1,null,null);const A=G.exports;export{A as default};
