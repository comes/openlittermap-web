import{h as d}from"./moment-zH0z38ay.js";import{n as _}from"./app-LvxnoPA3.js";const m={name:"LeaderboardFilters",props:["locationType","locationId"],data(){return{processing:!1,selected:"today",options:["all-time","today","yesterday","this-month","last-month","this-year"]}},methods:{async changeOption(e){this.selected=e,this.processing=!0,this.locationId&&this.locationType?await this.$store.dispatch("GET_USERS_FOR_LOCATION_LEADERBOARD",{timeFilter:e,locationId:this.locationId,locationType:this.locationType}):await this.$store.dispatch("GET_USERS_FOR_GLOBAL_LEADERBOARD",e),this.processing=!1},getNameForOption(e){return e==="today"?"Today":e==="yesterday"?"Yesterday":e==="this-month"?"This Month":e==="last-month"?"Last Month":e==="this-year"?"This Year":e==="all-time"?"All Time":""},async optionChanged(e){const t=e.target.value;this.selected=t,this.processing=!0,await this.$store.dispatch("GET_GLOBAL_LEADERBOARD",t),this.processing=!1}}};var p=function(){var t=this,s=t._self._c;return s("div",[s("div",{staticClass:"leaderboard-filters-container"},t._l(t.options,function(a){return s("p",{staticClass:"leaderboard-option",class:a===t.selected?"is-selected":"",on:{click:function(r){return t.changeOption(a)}}},[t._v(" "+t._s(t.getNameForOption(a))+" ")])}),0),s("div",{staticClass:"mobile-filters-container"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"input mb1",on:{change:[function(a){var r=Array.prototype.filter.call(a.target.options,function(i){return i.selected}).map(function(i){var n="_value"in i?i._value:i.value;return n});t.selected=a.target.multiple?r:r[0]},t.optionChanged]}},t._l(t.options,function(a){return s("option",{domProps:{value:a}},[t._v(" "+t._s(t.getNameForOption(a))+" ")])}),0)])])},f=[],u=_(m,p,f,!1,null,"4aab6639");const v=u.exports,o="/build/assets/gold-medal-2-DT1ucjbO.png",l="/build/assets/silver-medal-2-Dx0QRhyS.png",c="/build/assets/bronze-medal-2-DyRiKOrS.png",g={name:"LeaderboardList",props:["leaders","locationId","locationType"],components:{LeaderboardFilters:v},methods:{getCountryFlag(e){return e?(e=e.toLowerCase(),"/assets/icons/flags/"+e+".png"):""},getPosition(e){return d.localeData().ordinal(e)}}};var h=function(){var t=this,s=t._self._c;return s("div",{staticClass:"global-leaders"},[s("LeaderboardFilters",{attrs:{locationId:t.locationId,locationType:t.locationType}}),t.leaders.length===0?s("div",[s("p",{staticClass:"empty-leaderboard-title"},[t._v("Nobody has uploaded yet!")])]):t._e(),t._l(t.leaders,function(a,r){return s("div",{staticClass:"leader wow slideInLeft"},[a.rank?s("div",{staticClass:"medal"},[a.rank===1?s("img",{attrs:{src:o,alt:"Gold spot"}}):t._e(),a.rank===2?s("img",{attrs:{src:l,alt:"Silver spot"}}):t._e(),a.rank===3?s("img",{attrs:{src:c,alt:"Bronze spot"}}):t._e()]):s("div",{staticClass:"medal"},[r===0?s("img",{attrs:{src:o,alt:"Gold spot"}}):t._e(),r===1?s("img",{attrs:{src:l,alt:"Silver spot"}}):t._e(),r===2?s("img",{attrs:{src:c,alt:"Bronze spot"}}):t._e()]),s("div",{staticClass:"rank"},[a.rank?s("span",[t._v(t._s(t.getPosition(a.rank)))]):s("span",[t._v(t._s(t.getPosition(r+1)))]),s("div",{staticClass:"flag"},[s("img",{directives:[{name:"show",rawName:"v-show",value:a.global_flag,expression:"leader.global_flag"}],attrs:{src:t.getCountryFlag(a.global_flag),alt:a.global_flag}})])]),s("div",{staticClass:"details"},[s("div",{staticClass:"name"},[a.name||a.username?s("span",[t._v(t._s(a.name)+" "+t._s(a.username))]):s("span",[t._v(t._s(t.$t("common.anonymous")))])]),a.team?s("div",{staticClass:"team"},[t._v(" "+t._s(t.$t("common.team"))+" "+t._s(a.team)+" ")]):t._e(),a.social?s("div",{staticClass:"social-container"},t._l(a.social,function(i,n){return s("a",{attrs:{target:"_blank",href:i}},[s("i",{staticClass:"fa",class:n==="personal"?"fa-link":`fa-${n}`})])}),0):t._e()]),a.social?s("div",{staticClass:"social-container"},t._l(a.social,function(i,n){return s("a",{attrs:{target:"_blank",href:i}},[s("i",{staticClass:"fa",class:n==="personal"?"fa-link":`fa-${n}`})])}),0):t._e(),s("div",{staticClass:"xp"},[s("div",{staticClass:"value"},[t._v(t._s(a.xp))]),s("div",{staticClass:"text"},[t._v("XP")])])])})],2)},C=[],b=_(g,h,C,!1,null,"5ae5a51c");const O=b.exports;export{O as L};
