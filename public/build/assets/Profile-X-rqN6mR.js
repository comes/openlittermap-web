import{h as p}from"./moment-zH0z38ay.js";import{n as r,a as _}from"./app-LvxnoPA3.js";import{_ as m,a as u}from"./phone-lg_u1nSM.js";import{R as f,L as h}from"./BaseCharts-CMncEZtz.js";import{L as i,h as c}from"./mapHelpers-MvTYUUt9.js";import"./leaflet.timedimension.control-B29IfFRy.js";import{F as d}from"./FunctionalCalendar-A94GQ4o1.js";/* empty css            */const v={name:"ProfileWelcome",computed:{name(){return this.user.user.name},totalUsers(){return this.user.totalUsers},usersPosition(){return p.localeData().ordinal(this.user.position)},user(){return this.$store.state.user}}};var g=function(){var e=this,t=e._self._c;return t("div",{staticClass:"profile-card"},[t("p",{staticClass:"mb1"},[e._v(" "+e._s(e.$t("profile.dashboard.welcome"))+", "+e._s(e.name)+" ")]),t("p",{staticClass:"mb1"},[e._v(" "+e._s(e.$t("profile.dashboard.out-of",{total:e.totalUsers}))+" ")]),t("p",{staticClass:"mb1 is-secondary"},[e._v(" "+e._s(e.$t("profile.dashboard.rank",{rank:e.usersPosition}))+" ")]),t("p",{staticClass:"mb1"},[e._v(" Next Littercoin: "+e._s(this.user.user.littercoin_progress)+"% ")]),t("p",[e._v(" Total Littercoin: "+e._s(this.user.user.total_littercoin)+" ")])])},$=[],b=r(v,g,$,!1,null,"f145dc52");const C=b.exports,y={name:"ProfileStats",computed:{photoPercent(){return this.user.photoPercent},tagPercent(){return this.user.tagPercent},userTagsCount(){return this.user.user.total_tags},userPhotoCount(){return this.user.user.total_images},user(){return this.$store.state.user}}};var P=function(){var e=this,t=e._self._c;return t("div",{staticClass:"profile-card"},[t("p",{staticClass:"mb1"},[e._v(e._s(e.$t("profile.dashboard.have-uploaded")))]),t("div",{staticClass:"flex"},[t("div",{staticClass:"profile-stat-card"},[t("img",{attrs:{src:m}}),t("div",[t("p",{staticClass:"profile-stat"},[e._v(e._s(e.userPhotoCount))]),t("p",{staticClass:"profile-text"},[e._v(e._s(e.$t("profile.dashboard.photos")))])])]),t("div",{staticClass:"profile-stat-card"},[t("img",{attrs:{src:u}}),t("div",[t("p",{staticClass:"profile-stat"},[e._v(e._s(e.userTagsCount))]),t("p",{staticClass:"profile-text"},[e._v(e._s(e.$t("profile.dashboard.tags")))])])]),t("div",{staticClass:"profile-stat-card"},[t("p",{staticClass:"profile-percent"},[e._v("%")]),t("div",[t("p",{staticClass:"profile-stat"},[e._v(e._s(e.photoPercent))]),t("p",{staticClass:"profile-text"},[e._v(e._s(e.$t("profile.dashboard.all-photos")))])])]),t("div",{staticClass:"profile-stat-card"},[t("p",{staticClass:"profile-percent"},[e._v("%")]),t("div",[t("p",{staticClass:"profile-stat"},[e._v(e._s(e.tagPercent))]),t("p",{staticClass:"profile-text"},[e._v(e._s(e.$t("profile.dashboard.all-tags")))])])])])])},D=[],x=r(y,P,D,!1,null,"97e77d3c");const L=x.exports,w={name:"ProfileNextTarget",computed:{currentLevel(){return this.user.level},currentXp(){return this.user.xp_redis},neededXp(){return this.$store.state.user.requiredXp},user(){return this.$store.state.user.user}}};var R=function(){var e=this,t=e._self._c;return t("div",{staticClass:"profile-card"},[t("p",{staticClass:"mb1"},[e._v(" "+e._s(e.$t("profile.dashboard.your-level"))+" ")]),t("p",{staticClass:"is-secondary"},[e._v(" "+e._s(e.$t("profile.dashboard.reached-level"))+" "),t("strong",{staticClass:"is-white"},[e._v(" "+e._s(e.currentLevel)+" ")])]),t("p",{staticClass:"is-secondary mb1"},[e._v(" "+e._s(e.$t("profile.dashboard.have-xp"))+" "),t("strong",{staticClass:"is-white"},[e._v(" "+e._s(e.currentXp)+" xp ")])]),t("p",{staticClass:"is-secondary mb2"},[e._v(" "+e._s(e.$t("profile.dashboard.need-xp"))+" "),t("strong",{staticClass:"is-white"},[e._v(" "+e._s(e.neededXp)+" xp ")]),e._v(" "+e._s(e.$t("profile.dashboard.to-reach-level"))+" ")])])},T=[],k=r(w,R,T,!1,null,"68e020ba");const S=k.exports,F={extends:f,name:"Radar",props:["categories"],mounted(){let s=[];_.filter(e=>e!=="art"&&e!=="dogshit").map(e=>{s.push(this.$t("litter.categories."+e))}),this.renderChart({labels:s,datasets:[{label:this.$t("profile.dashboard.total-categories"),backgroundColor:"#1DD3B0",data:this.categories,fill:!0,borderColor:"#1DD3B0",maxBarThickness:"10"}]},{responsive:!0,maintainAspectRatio:!1,legend:{labels:{fontColor:"#1DD3B0"}},scale:{pointLabels:{fontColor:"white"}},tooltips:{callbacks:{title:(e,t)=>t.labels[e[0].index]}}})}},A=null,O=null;var B=r(F,A,O,!1,null,null);const E=B.exports,M={name:"ProfileCategories",components:{Radar:E},computed:{categories(){return[this.user.total_categories.alcohol,this.user.total_brands_redis,this.user.total_categories.coastal,this.user.total_categories.coffee,this.user.total_categories.dumping,this.user.total_categories.food,this.user.total_categories.industrial,this.user.total_categories.other,this.user.total_categories.sanitary,this.user.total_categories.softdrinks,this.user.total_categories.smoking]},user(){return this.$store.state.user.user}}};var N=function(){var e=this,t=e._self._c;return t("div",{staticClass:"profile-card"},[t("Radar",{key:e.user.total_tags,attrs:{categories:e.categories}})],1)},U=[],W=r(M,N,U,!1,null,"3a36a1f8");const X=W.exports,z={name:"ProfileMap",data(){return{map:null,loading:!0,fullscreen:!1,pointsLayer:null,timeLayer:null,player:null}},async mounted(){this.map=i.map("hexmap",{center:[0,0],zoom:2,scrollWheelZoom:!1,smoothWheelZoom:!0,smoothSensitivity:1});const e=new Date().getFullYear();i.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"Map data &copy; "+'<a href="https://openstreetmap.org">OpenStreetMap</a>'+" & Contributors",maxZoom:20,minZoom:1}).addTo(this.map),this.map.attributionControl.addAttribution("Litter data &copy; OpenLitterMap & Contributors "+e);let a=new i.TimeDimension({});this.map.timeDimension=a,this.player=new i.TimeDimension.Player({transitionTime:1e3,loop:!0},a),this.player.on("play",()=>{var n;(n=this.map)!=null&&n.hasLayer(this.pointsLayer)&&this.map.removeLayer(this.pointsLayer)}),this.map.addControl(new i.Control.TimeDimension({player:this.player,timeDimension:a,timeSliderDragUpdate:!0,loopButton:!0,autoPlay:!1,minSpeed:5,maxSpeed:100})),this.loading=!1},computed:{geojson(){return this.$store.state.user.geojson.features}},watch:{geojson(s){this.pointsLayer&&this.pointsLayer.remove(),this.timeLayer&&this.timeLayer.remove(),this.player&&this.player.stop(),this.pointsLayer=i.geoJSON(s,{pointToLayer:(e,t)=>i.marker([t.lng,t.lat]),onEachFeature:(e,t)=>{t.on("click",a=>{i.popup(c.popupOptions).setLatLng(e.geometry.coordinates).setContent(c.getMapImagePopupContent(e.properties)).openOn(this.map)})}}),this.timeLayer=i.timeDimension.layer.geoJson(this.pointsLayer,{updateTimeDimension:!0,updateTimeDimensionMode:"replace"}),this.pointsLayer.addTo(this.map),this.timeLayer.addTo(this.map)}},methods:{fullscreenChange(s){this.fullscreen=s},toggle(){this.$refs.fullscreen.toggle()}}};var I=function(){var e=this,t=e._self._c;return t("div",{staticClass:"profile-card",staticStyle:{padding:"0 !important"}},[t("fullscreen",{ref:"fullscreen",staticClass:"profile-map-container",on:{change:e.fullscreenChange}},[t("button",{staticClass:"btn-map-fullscreen",on:{click:e.toggle}},[t("i",{staticClass:"fa fa-expand"})]),t("div",{ref:"hexmap",attrs:{id:"hexmap"}})])],1)},Z=[],j=r(z,I,Z,!1,null,null);const q=j.exports,G={name:"ProfileCalendar",components:{FunctionalCalendar:d},data(){return{btn:"button is-primary is-fullwidth",calendarData:{},period:"created_at",periods:["created_at","datetime"]}},computed:{button(){return this.processing?this.btn+" is-loading":this.btn},disabled(){return!!(this.processing||!this.calendarData.hasOwnProperty("dateRange")||!this.calendarData.dateRange.hasOwnProperty("start")&&!this.calendarData.dateRange.hasOwnProperty("end"))}},methods:{async changePeriod(){this.disabled||await this.$store.dispatch("GET_USERS_PROFILE_MAP_DATA",{period:this.period,start:this.calendarData.dateRange.start,end:this.calendarData.dateRange.end})},getPeriod(s){return s||(s=this.period),this.$t("teams.dashboard.times."+s)}}};var J=function(){var e=this,t=e._self._c;return t("div",{staticClass:"profile-card"},[t("FunctionalCalendar",{attrs:{"day-names":e.$t("common.day-names"),"month-names":e.$t("common.month-names"),"short-month-names":e.$t("common.short-month-names"),sundayStart:!1,"date-format":"yyyy-mm-dd","is-date-range":!0,"is-date-picker":!1,"change-month-function":!0,"change-year-function":!0},model:{value:e.calendarData,callback:function(a){e.calendarData=a},expression:"calendarData"}}),t("select",{directives:[{name:"model",rawName:"v-model",value:e.period,expression:"period"}],staticClass:"input mt1 mb1",on:{change:function(a){var n=Array.prototype.filter.call(a.target.options,function(o){return o.selected}).map(function(o){var l="_value"in o?o._value:o.value;return l});e.period=a.target.multiple?n:n[0]}}},e._l(e.periods,function(a){return t("option",{domProps:{value:a}},[e._v(e._s(e.getPeriod(a)))])}),0),t("button",{class:e.button,attrs:{disabled:e.disabled},on:{click:e.changePeriod}},[e._v(e._s(e.$t("profile.dashboard.calendar-load-data")))])],1)},V=[],Y=r(G,J,V,!1,null,"310729d1");const H=Y.exports,K={name:"ProfileDownload",components:{FunctionalCalendar:d},data(){return{btn:"button tooltip is-primary",processing:!1,calendarData:{},period:"created_at",periods:["created_at","datetime"]}},computed:{button(){return this.processing?this.btn+" is-loading":this.btn}},methods:{async download(){var s,e,t,a;this.processing=!0,await this.$store.dispatch("DOWNLOAD_MY_DATA",{dateField:this.period,fromDate:(e=(s=this.calendarData)==null?void 0:s.dateRange)==null?void 0:e.start,toDate:(a=(t=this.calendarData)==null?void 0:t.dateRange)==null?void 0:a.end}),this.processing=!1}}};var Q=function(){var e=this,t=e._self._c;return t("div",{staticClass:"profile-card"},[t("p",{staticClass:"profile-dl-title"},[e._v(e._s(e.$t("profile.dashboard.download-data")))]),t("FunctionalCalendar",{attrs:{"day-names":e.$t("common.day-names"),"month-names":e.$t("common.month-names"),"short-month-names":e.$t("common.short-month-names"),sundayStart:!1,"date-format":"yyyy-mm-dd","is-date-range":!0,"is-date-picker":!1,"change-month-function":!0,"change-year-function":!0},model:{value:e.calendarData,callback:function(a){e.calendarData=a},expression:"calendarData"}}),t("div",{staticClass:"inputs-wrapper"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.period,expression:"period"}],staticClass:"input mt1 mb1",on:{change:function(a){var n=Array.prototype.filter.call(a.target.options,function(o){return o.selected}).map(function(o){var l="_value"in o?o._value:o.value;return l});e.period=a.target.multiple?n:n[0]}}},e._l(e.periods,function(a){return t("option",{domProps:{value:a}},[e._v(e._s(e.$t("teams.dashboard.times."+a)))])}),0),t("button",{class:e.button,attrs:{disabled:e.processing},on:{click:e.download}},[t("span",{staticClass:"tooltip-text is-size-6"},[e._v(e._s(e.$t("profile.dashboard.email-send-msg")))]),e._v(" "+e._s(e.$t("common.download"))+" ")])])],1)},ee=[],te=r(K,Q,ee,!1,null,"324f02ec");const se=te.exports,ae={extends:h,name:"TimeSeriesLine",props:["ppm"],data(){return{months:this.$t("common.short-month-names")}},mounted(){let s=JSON.parse(this.ppm),e=[],t=[];for(let a in s)e.push(this.months[parseInt(a.substring(0,2))-1]+a.substring(2,5)),t.push(s[a]);this.renderChart({labels:e,datasets:[{label:this.$t("profile.dashboard.timeseries-verified-photos"),backgroundColor:"#1DD3B0",data:t,fill:!1,borderColor:"#1DD3B0",maxBarThickness:"50"}]},{responsive:!0,maintainAspectRatio:!1,legend:{labels:{fontColor:"#1DD3B0"}},scales:{xAxes:[{gridLines:{color:"rgba(255,255,255,0.5)",display:!0,drawBorder:!0,drawOnChartArea:!1},ticks:{fontColor:"#1DD3B0"}}],yAxes:[{gridLines:{color:"rgba(255,255,255,0.5)",display:!0,drawBorder:!0,drawOnChartArea:!1},ticks:{fontColor:"#1DD3B0"}}]}})}},re=null,oe=null;var ie=r(ae,re,oe,!1,null,null);const ne=ie.exports,le={name:"ProfileTimeSeries",components:{TimeSeriesLine:ne},computed:{ppm(){return this.$store.state.user.user.photos_per_month}}};var ce=function(){var e=this,t=e._self._c;return t("div",{staticClass:"profile-card"},[t("TimeSeriesLine",{attrs:{ppm:e.ppm}})],1)},de=[],pe=r(le,ce,de,!1,null,"0a4093f8");const _e=pe.exports,me={name:"ProfilePhotos"};var ue=function(){var e=this,t=e._self._c;return t("div",{staticClass:"profile-card"},[t("p",{staticClass:"mb1"},[e._v(e._s(e.$t("profile.dashboard.manage-my-photos")))]),t("router-link",{attrs:{to:"/bulk-tag"}},[t("button",{staticClass:"button is-medium is-primary"},[e._v(e._s(e.$t("profile.dashboard.view-my-photos")))])])],1)},fe=[],he=r(me,ue,fe,!1,null,"8c86183f");const ve=he.exports,ge={name:"Profile",components:{ProfileWelcome:C,ProfileTimeSeries:_e,ProfileStats:L,ProfileNextTarget:S,ProfileCategories:X,ProfileMap:q,ProfileCalendar:H,ProfileDownload:se,ProfilePhotos:ve},async mounted(){await this.$store.dispatch("GET_CURRENT_USER"),await this.$store.dispatch("GET_USERS_PROFILE_DATA")}};var $e=function(){var e=this,t=e._self._c;return t("section",{staticClass:"profile-container"},[t("ProfileWelcome"),t("ProfileStats"),t("ProfileNextTarget"),t("ProfileCategories"),t("ProfileMap"),t("ProfileCalendar"),t("ProfileDownload"),t("ProfileTimeSeries"),t("ProfilePhotos")],1)},be=[],Ce=r(ge,$e,be,!1,null,null);const ke=Ce.exports;export{ke as default};
