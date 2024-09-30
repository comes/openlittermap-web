import{L as g}from"./vue-loading-DEWPBzjq.js";/* empty css                    */import{M as d,a as u,C as h,Z as v,b,L as y}from"./index-Dxbj43yt.js";import{L as n,h as _}from"./mapHelpers-MvTYUUt9.js";import{g as w}from"./glify-browser-CzHmZjkE.js";import{n as c}from"./app-LvxnoPA3.js";import{h as f}from"./moment-zH0z38ay.js";/* empty css            */const $={name:"ClusterMap",props:["clustersUrl","pointsUrl"],data(){return{map:null,clusters:[],points:[],prevZoom:d,pointsLayerController:null,pointsControllerShowing:!1,grey_dot:null,green_dot:null}},async mounted(){await this.setup()},watch:{async clustersUrl(){var a;this.map.remove(),this.map=null,this.prevZoom=d,(a=this.points)!=null&&a.remove&&(this.points.resetVertices(),this.points.remove()),this.clusters.clearLayers(),this.clusters=null,this.points=null,this.pointsLayerController=null,this.pointsControllerShowing=!1,await this.setup()}},methods:{async setup(){this.map=n.map("map",{center:[0,0],zoom:d,scrollWheelZoom:!1,smoothWheelZoom:!0,smoothSensitivity:1}),this.map.scrollWheelZoom=!0;const a=new Date().getFullYear();n.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"Map data &copy; "+'<a href="https://openstreetmap.org">OpenStreetMap</a>'+" & Contributors",maxZoom:u,minZoom:d}).addTo(this.map),this.map.attributionControl.addAttribution("Litter data &copy OpenLitterMap & Contributors "+a+" Clustering @ MapBox"),this.clusters=n.geoJSON(null,{pointToLayer:this.createClusterIcon,onEachFeature:this.onEachFeature}).addTo(this.map),await this.getClusters(2,null),this.map.on("moveend",this.update),this.map.on("overlayadd",this.update),this.map.on("overlayremove",this.update),this.map.on("popupopen",_.scrollPopupToBottom),this.map.on("zoom",()=>{var t;(t=this.points)!=null&&t.remove&&this.points.remove()}),this.green_dot=n.icon({iconUrl:"./images/vendor/leaflet/dist/dot.png",iconSize:[10,10]}),this.grey_dot=n.icon({iconUrl:"./images/vendor/leaflet/dist/grey-dot.jpg",iconSize:[13,10]})},async getClusters(a,e){await axios.get(this.clustersUrl,{params:{zoom:a,bbox:e}}).then(t=>{console.log("get_map_clusters",t),this.clusters.clearLayers(),this.clusters.addData(t.data)}).catch(t=>{console.error("get_map_clusters",t)}).finally(()=>this.$emit("loading-complete"))},async getPoints(a,e,t){await axios.get(this.pointsUrl,{params:{zoom:a,bbox:e,layers:t}}).then(s=>{console.log("get_map_points",s),this.prevZoom<h&&this.clusters.clearLayers();const i=s.data.features.map(r=>[r.geometry.coordinates[0],r.geometry.coordinates[1]]);this.points=w.points({map:this.map,data:i,size:10,color:{r:.054,g:.819,b:.27,a:1},click:(r,o,l)=>{const m=s.data.features.find(p=>p.geometry.coordinates[0]===o[0]&&p.geometry.coordinates[1]===o[1]);if(m)return this.renderLeafletPopup(m,r.latlng)}})}).catch(s=>{console.error("get_map_points",s)})},async update(){var s;const a=this.map.getBounds(),e={left:a.getWest(),bottom:a.getSouth(),right:a.getEast(),top:a.getNorth()},t=Math.round(this.map.getZoom());if(!(t===this.prevZoom&&[2,3,4,5].indexOf(t)>=0)){if((s=this.points)!=null&&s.remove&&(this.clusters.clearLayers(),this.points.remove()),t<h)await this.getClusters(t,e);else{this.createPointGroups();const i=this.getActiveLayers();await this.getPoints(t,e,i)}this.prevZoom=t}},createClusterIcon(a,e){if(!a.properties.cluster)return a.properties.verified===2?n.marker(e,{icon:this.green_dot}):n.marker(e,{icon:this.grey_dot});const t=a.properties.point_count,s=t<b?"small":t<y?"medium":"large",i=n.divIcon({html:'<div class="mi"><span class="ma">'+a.properties.point_count_abbreviated+"</span></div>",className:"marker-cluster-"+s,iconSize:n.point(40,40)});return n.marker(e,{icon:i})},createPointGroups(){if(!this.pointsControllerShowing){const a={Alcohol:new n.LayerGroup,Brands:new n.LayerGroup,Coastal:new n.LayerGroup,Coffee:new n.LayerGroup,Dumping:new n.LayerGroup,Food:new n.LayerGroup,Industrial:new n.LayerGroup,Other:new n.LayerGroup,PetSurprise:new n.LayerGroup,Sanitary:new n.LayerGroup,Smoking:new n.LayerGroup,SoftDrinks:new n.LayerGroup};this.pointsLayerController=n.control.layers(null,a).addTo(this.map),this.pointsControllerShowing=!0}},onEachFeature(a,e){if(a.properties.cluster){const t=this;e.on("click",function(s){const i=t.map.getZoom()+v>u?u:t.map.getZoom()+v;t.map.flyTo(s.latlng,i,{animate:!0,duration:2})})}},getActiveLayers(){let a=[];return this.pointsLayerController._layerControlInputs.forEach((e,t)=>{if(e.checked){const s=this.pointsLayerController._layers[t].name.toLowerCase()==="petsurprise"?"dogshit":this.pointsLayerController._layers[t].name.toLowerCase();a.push(s)}}),a.length>0?a:null},renderLeafletPopup(a,e){n.popup(_.popupOptions).setLatLng(e).setContent(_.getMapImagePopupContent(a.properties)).openOn(this.map)}}};var T=function(){var e=this,t=e._self._c;return t("div",{staticClass:"h100"},[t("div",{ref:"map",attrs:{id:"map"}})])},C=[],S=c($,T,C,!1,null,"ae8e3771");const E=S.exports,x={name:"TeamMap",props:["teamId"],components:{Loading:g,ClusterMap:E},data(){return{loading:!0}},watch:{teamId(a){a>0&&(this.loading=!0)}},methods:{fullscreenChange(a){this.fullscreen=a},toggle(){this.$refs.fullscreen.toggle()}}};var A=function(){var e=this,t=e._self._c;return t("div",{staticClass:"team-map-container"},[e.loading&&e.teamId>0?t("loading",{attrs:{active:e.loading,"is-full-page":!1},on:{"update:active":function(s){e.loading=s}}}):e._e(),e.teamId>0?t("fullscreen",{ref:"fullscreen",staticClass:"profile-map-container",on:{change:e.fullscreenChange}},[t("button",{staticClass:"btn-map-fullscreen",on:{click:e.toggle}},[t("i",{staticClass:"fa fa-expand"})]),t("cluster-map",{attrs:{"clusters-url":`/teams/clusters/${e.teamId}`,"points-url":`/teams/points/${e.teamId}`},on:{"loading-complete":function(s){e.loading=!1}}})],1):e._e()],1)},L=[],P=c(x,A,L,!1,null,"fb1186a6");const k=P.exports,I={name:"TeamsDashboard",components:{TeamMap:k},async created(){await this.changeTeamOrTime()},data(){return{period:"all",timePeriods:["today","week","month","year","all"],viewTeam:0}},computed:{litter_count(){return this.$store.state.teams.allTeams.litter_count??0},photos_count(){return this.$store.state.teams.allTeams.photos_count??0},members_count(){return this.$store.state.teams.allTeams.members_count??0},teams(){return this.$store.state.teams.teams}},methods:{async changeTeamOrTime(){await this.$store.dispatch("GET_TEAM_DASHBOARD_DATA",{period:this.period,team_id:this.viewTeam})},getPeriod(a){return a||(a=this.period),this.$t("teams.dashboard.times."+a)}}};var M=function(){var e=this,t=e._self._c;return t("section",{staticClass:"tdc"},[t("p",{staticClass:"subtitle is-centered is-3"},[e._v(e._s(e.$t("teams.dashboard.teams-dashboard")))]),t("div",{staticClass:"columns"},[t("div",{staticClass:"column teams-card"},[t("span",{staticClass:"title is-2",staticStyle:{color:"#7b848e"}},[e._v(e._s(e.photos_count))]),t("br"),e._v(" "+e._s(e.$t("teams.dashboard.photos-uploaded"))+" "+e._s(this.getPeriod())+" ")]),t("div",{staticClass:"column teams-card"},[t("span",{staticClass:"title is-2",staticStyle:{color:"#7b848e"}},[e._v(e._s(e.litter_count))]),t("br"),e._v(" "+e._s(e.$t("teams.dashboard.litter-tagged"))+" "+e._s(this.getPeriod())+" ")]),t("div",{staticClass:"column teams-card"},[t("span",{staticClass:"title is-2",staticStyle:{color:"#7b848e"}},[e._v(e._s(e.members_count))]),t("br"),e._v(" "+e._s(e.$t("teams.dashboard.members-uploaded"))+" "+e._s(this.getPeriod())+" ")])]),t("div",{staticClass:"mobile-teams-select"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.period,expression:"period"}],staticClass:"input dash-time",on:{change:[function(s){var i=Array.prototype.filter.call(s.target.options,function(r){return r.selected}).map(function(r){var o="_value"in r?r._value:r.value;return o});e.period=s.target.multiple?i:i[0]},e.changeTeamOrTime]}},e._l(e.timePeriods,function(s){return t("option",{domProps:{value:s}},[e._v(e._s(e.getPeriod(s)))])}),0),t("div",{staticStyle:{flex:"0.1"}}),t("select",{directives:[{name:"model",rawName:"v-model",value:e.viewTeam,expression:"viewTeam"}],staticClass:"input dash-time",on:{change:[function(s){var i=Array.prototype.filter.call(s.target.options,function(r){return r.selected}).map(function(r){var o="_value"in r?r._value:r.value;return o});e.viewTeam=s.target.multiple?i:i[0]},e.changeTeamOrTime]}},[t("option",{attrs:{value:"0",selected:""}},[e._v(e._s(e.$t("teams.dashboard.all-teams")))]),e._l(e.teams,function(s){return t("option",{domProps:{value:s.id}},[e._v(e._s(s.name))])})],2)]),t("TeamMap",{attrs:{"team-id":e.viewTeam}})],1)},N=[],O=c(I,M,N,!1,null,"96580220");const R=O.exports,G={name:"CreateTeam",data(){return{btn:"button is-medium is-primary",processing:!1,identifier:"",name:"",teamType:1}},computed:{button(){return this.processing?this.btn+" is-loading":this.btn},errors(){return this.$store.state.teams.errors},remaining(){return this.user.remaining_teams},teamTypes(){return this.$store.state.teams.types},user(){return this.$store.state.user.user}},methods:{clearErrors(){this.$store.commit("teamErrors",[])},clearError(a){this.errors[a]&&this.$store.commit("clearTeamsError",a)},async create(){this.processing=!0,await this.$store.dispatch("CREATE_NEW_TEAM",{name:this.name,identifier:this.identifier,teamType:this.teamType}),this.processing=!1,this.name="",this.identifier=""},errorExists(a){return this.errors.hasOwnProperty(a)},getFirstError(a){return this.errors[a][0]}},mounted(){this.clearErrors()}};var D=function(){var e=this,t=e._self._c;return t("div",{staticClass:"ctc"},[t("h1",{staticClass:"title is-2"},[e._v(e._s(e.$t("teams.dashboard.create-a-team")))]),t("p",{staticClass:"mb2"},[e._v(e._s(e.$t("teams.create.allowed-to-create",{teams:this.remaining}))+".")]),e.remaining?t("div",{staticClass:"columns mt3"},[t("div",{staticClass:"column is-one-third"},[t("p",{staticClass:"mb1"},[e._v(e._s(e.$t("teams.create.what-kind-of-team")))])]),t("div",{staticClass:"column is-half card p2"},[t("form",{attrs:{method:"post"},on:{submit:function(s){return s.preventDefault(),e.create.apply(null,arguments)}}},[t("div",{staticClass:"control pb2"},[t("p",[e._v(e._s(e.$t("teams.create.team-type")))]),t("div",{staticClass:"select"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.teamType,expression:"teamType"}],on:{change:function(s){var i=Array.prototype.filter.call(s.target.options,function(r){return r.selected}).map(function(r){var o="_value"in r?r._value:r.value;return o});e.teamType=s.target.multiple?i:i[0]}}},e._l(e.teamTypes,function(s){return t("option",{domProps:{value:s.id}},[e._v(e._s(s.team))])}),0)])]),t("div",{staticClass:"control pb2"},[t("label",{attrs:{for:"name"}},[e._v(e._s(e.$t("teams.create.team-name")))]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"input",attrs:{name:"name",placeholder:e.$t("teams.create.my-awesome-team-placeholder"),type:"text",required:""},domProps:{value:e.name},on:{keydown:function(s){return e.clearError("name")},input:function(s){s.target.composing||(e.name=s.target.value)}}}),e.errorExists("name")?t("p",{staticClass:"is-danger",domProps:{textContent:e._s(e.getFirstError("name"))}}):e._e()]),t("div",{staticClass:"control pb2"},[t("label",{attrs:{for:"identifier"}},[e._v(e._s(e.$t("teams.create.unique-team-id")))]),t("br"),t("small",[e._v(e._s(e.$t("teams.create.id-to-join-team")))]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.identifier,expression:"identifier"}],staticClass:"input",attrs:{name:"identifier",placeholder:"Awesome2021",required:""},domProps:{value:e.identifier},on:{keydown:function(s){return e.clearError("identifier")},input:function(s){s.target.composing||(e.identifier=s.target.value)}}}),e.errorExists("identifier")?t("p",{staticClass:"is-danger",domProps:{textContent:e._s(e.getFirstError("identifier"))}}):e._e()]),t("div",[t("button",{class:e.button,attrs:{disabled:e.processing}},[e._v(e._s(e.$t("teams.create.create-team")))])])])])]):e._e()])},F=[],U=c(G,D,F,!1,null,"8767c0cc");const B=U.exports,j={name:"JoinTeam",data(){return{btn:"button is-medium is-primary",identifier:"",processing:!1}},computed:{button(){return this.processing?this.btn+" is-loading":this.btn},errors(){return this.$store.state.teams.errors}},methods:{clearErrors(){this.$store.commit("teamErrors",[])},clearError(a){this.errors[a]&&this.$store.commit("clearTeamsError",a)},errorExists(a){return this.errors.hasOwnProperty(a)},getFirstError(a){return this.errors[a][0]},async submit(){this.processing=!0,await this.$store.dispatch("JOIN_TEAM",this.identifier),this.processing=!1}},mounted(){this.clearErrors()}};var Z=function(){var e=this,t=e._self._c;return t("div",{staticClass:"jtc"},[t("h1",{staticClass:"title is-2"},[e._v(e._s(e.$t("teams.dashboard.join-a-team")))]),t("div",{staticClass:"columns mt3"},[t("div",{staticClass:"column is-one-third"},[t("p",{staticClass:"mb1"},[e._v(e._s(e.$t("teams.join.enter-team-identifier")))])]),t("div",{staticClass:"column is-half card p2"},[t("form",{on:{submit:function(s){return s.preventDefault(),e.submit.apply(null,arguments)}}},[t("div",{staticClass:"control mb2"},[t("label",{attrs:{for:"join"}},[e._v(e._s(e.$t("teams.join.team-identifier")))]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.identifier,expression:"identifier"}],staticClass:"input",attrs:{name:"join",id:"join",placeholder:e.$t("teams.join.enter-id-to-join-placeholder"),required:"",autofocus:""},domProps:{value:e.identifier},on:{input:[function(s){s.target.composing||(e.identifier=s.target.value)},e.clearError]}}),e.errorExists("identifier")?t("p",{staticClass:"is-danger",domProps:{textContent:e._s(e.getFirstError("identifier"))}}):e._e()]),t("div",{staticClass:"has-text-right"},[t("button",{class:e.button,attrs:{disabled:e.processing}},[e._v(e._s(e.$t("teams.join.join-team")))])])])])])])},V=[],z=c(j,Z,V,!1,null,"c7229e4a");const q=z.exports,W={name:"MyTeams",data(){return{loading:!1,processing:!1,changing:!1,viewTeam:null,dlProcessing:!1}},computed:{activeTeam(){return this.user.active_team},current_page(){return this.members.current_page},isLeader(){const a=this.teams.find(e=>e.id===this.viewTeam);return a&&a.leader===this.user.id},members(){return this.$store.state.teams.members},show_current_page(){return this.members.current_page>1},show_next_page(){return this.members.next_page_url},teams(){return this.$store.state.teams.teams},user(){return this.$store.state.user.user}},async mounted(){this.loading=!0,await this.getUserTeams(),this.loading=!1},methods:{async changeActiveTeam(a){this.processing=!0,await this.$store.dispatch("CHANGE_ACTIVE_TEAM",a),this.processing=!1},async inactivateTeam(){var a;this.processing=!0,await this.$store.dispatch("INACTIVATE_TEAM"),this.viewTeam=(a=this.teams[0])==null?void 0:a.id,await this.changeViewedTeam(),this.processing=!1},async getUserTeams(){var e;await this.$store.dispatch("GET_USERS_TEAMS");let a=this.activeTeam||((e=this.teams[0])==null?void 0:e.id);a&&(this.viewTeam=a,await this.$store.dispatch("GET_TEAM_MEMBERS",this.viewTeam))},async leaveTeam(a){confirm(this.$t("teams.myteams.confirm-leave-team"))&&(this.loading=!0,await this.$store.dispatch("LEAVE_TEAM",a),await this.getUserTeams(),this.loading=!1)},async changeViewedTeam(){this.changing=!0,await this.$store.dispatch("GET_TEAM_MEMBERS",this.viewTeam),this.changing=!1},checkActiveTeam(a){return a===this.viewTeam?"team-active":"team-inactive"},checkActiveTeamText(a){return this.changing?"...":a===this.viewTeam?this.$t("common.active"):this.$t("common.inactive")},async download(a){this.dlProcessing=!0,await this.$store.dispatch("DOWNLOAD_DATA_FOR_TEAM",a),this.dlProcessing=!1},getRank(a){return this.members.current_page===1?a+1:a+1+(this.members.current_page-1)*10},icon(a){return a===this.viewTeam?"fa fa-check":"fa fa-ban"},medal(a){if(this.members.current_page===1){if(a===0)return"/assets/icons/gold-medal.png";if(a===1)return"/assets/icons/silver-medal.png";if(a===2)return"/assets/icons/bronze-medal.svg"}return""},previousPage(){this.$store.dispatch("PREVIOUS_MEMBERS_PAGE",this.viewTeam)},nextPage(){this.$store.dispatch("NEXT_MEMBERS_PAGE",this.viewTeam)},async toggleLeaderboardVis(a){await this.$store.dispatch("TOGGLE_LEADERBOARD_VISIBILITY",a)},formatDate(a){return f(a).format("LLL")}}};var H=function(){var e=this,t=e._self._c;return t("section",[t("div",{staticClass:"my-teams-container"},[t("h1",{staticClass:"title is-2"},[e._v(" "+e._s(e.$t("teams.myteams.title"))+" ")]),e.loading?t("p",[e._v(" "+e._s(e.$t("common.loading"))+" ")]):t("div",[t("div",{staticClass:"active-team-indicator"},[t("div",[e.user.active_team?t("div",{staticClass:"mb1"},[t("p",[e._v(" "+e._s(e.$t("teams.myteams.currently-joined-team"))+" "),t("strong",[e._v(e._s(e.user.team.name))]),e._v(". "),t("br"),e._v(" "+e._s(e.$t("teams.myteams.enabled-contributions"))+" ")])]):e.teams&&e.teams.length?t("p",{staticClass:"mb1",domProps:{innerHTML:e._s(e.$t("teams.myteams.disabled-contributions"))}}):t("p",{staticClass:"mb1"},[e._v(" "+e._s(e.$t("teams.myteams.no-joined-team"))+". ")])]),e.user.active_team?t("div",{staticClass:"button is-warning tooltip",on:{click:e.inactivateTeam}},[t("span",{staticClass:"tooltip-text disable-teams-tooltip"},[e._v(" "+e._s(e.$t("teams.myteams.disable-contributions-tooltip"))+" ")]),e._v(" "+e._s(e.$t("common.inactivate"))+" ")]):e._e()]),e.teams&&e.teams.length?t("div",{staticClass:"mb1"},[t("div",{staticClass:"is-size-3"},[e._v(" "+e._s(e.$t("teams.myteams.team-details"))+" ")]),e.isLeader?t("div",[t("p",[e._v(e._s(e.$t("teams.myteams.leader-of-team"))+".")])]):e._e()]):e._e(),e.teams&&e.teams.length?t("div",{staticStyle:{"overflow-x":"scroll"}},[t("div",{staticClass:"flex mb1"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.viewTeam,expression:"viewTeam"}],staticClass:"input mtba",staticStyle:{"max-width":"20em","min-width":"5em"},on:{change:[function(s){var i=Array.prototype.filter.call(s.target.options,function(r){return r.selected}).map(function(r){var o="_value"in r?r._value:r.value;return o});e.viewTeam=s.target.multiple?i:i[0]},e.changeViewedTeam]}},[t("option",{attrs:{disabled:""},domProps:{selected:!e.viewTeam,value:null}},[e._v(" "+e._s(e.$t("teams.myteams.join-team"))+" ")]),e._l(e.teams,function(s){return t("option",{key:s.id,domProps:{value:s.id}},[e._v(" "+e._s(s.name)+" ")])})],2)]),t("table",{staticClass:"table is-fullwidth is-hoverable has-text-centered"},[t("thead",[t("th",[e._v(e._s(e.$t("teams.myteams.position-header")))]),t("th",[e._v(e._s(e.$t("teams.myteams.name-header")))]),t("th",[e._v(e._s(e.$t("teams.myteams.username-header")))]),t("th",[e._v(e._s(e.$t("teams.myteams.status-header")))]),t("th",[e._v(e._s(e.$t("teams.myteams.photos-header")))]),t("th",[e._v(e._s(e.$t("teams.myteams.litter-header")))]),t("th",[e._v(e._s(e.$t("teams.myteams.last-activity-header")))])]),t("tbody",e._l(e.members.data,function(s,i){return t("tr",{key:s.id},[t("td",[t("div",{staticClass:"medal-container"},[t("img",{directives:[{name:"show",rawName:"v-show",value:i<3,expression:"index < 3"}],staticClass:"medal",attrs:{src:e.medal(i)}}),t("span",[e._v(e._s(e.getRank(i)))])])]),t("td",[e._v(e._s(s.name?s.name:"-"))]),t("td",[e._v(e._s(s.username?s.username:"-"))]),t("td",{staticStyle:{width:"9em","white-space":"nowrap"}},[t("span",{class:e.checkActiveTeam(s.active_team)},[t("i",{class:e.icon(s.active_team)}),e._v(" "+e._s(e.checkActiveTeamText(s.active_team))+" ")])]),t("td",[e._v(e._s(s.pivot.total_photos))]),t("td",[e._v(e._s(s.pivot.total_litter))]),t("td",{staticStyle:{"max-width":"100px"}},[e._v(" "+e._s(s.pivot.updated_at?e.formatDate(s.pivot.updated_at):"-")+" ")])])}),0)]),t("div",{staticClass:"has-text-centered"},[t("a",{directives:[{name:"show",rawName:"v-show",value:this.current_page>1,expression:"this.current_page > 1"}],staticClass:"pagination-previous",on:{click:e.previousPage}},[e._v(e._s(e.$t("common.previous")))]),t("a",{directives:[{name:"show",rawName:"v-show",value:this.show_next_page,expression:"this.show_next_page"}],staticClass:"pagination-next",on:{click:e.nextPage}},[e._v(e._s(e.$t("common.next-page")))])])]):e._e(),e.teams&&e.teams.length?t("div",{staticStyle:{"overflow-x":"scroll"}},[t("div",{staticClass:"is-size-3 mb1"},[e._v(" "+e._s(e.$t("teams.myteams.all-my-teams"))+" ")]),t("table",{staticClass:"table is-fullwidth is-hoverable"},[t("thead",[t("th",[e._v(e._s(e.$t("teams.myteams.name-header")))]),t("th",[e._v(e._s(e.$t("teams.myteams.identifier-header")))]),t("th",[e._v(e._s(e.$t("teams.myteams.members-header")))]),t("th",[e._v(e._s(e.$t("teams.myteams.photos-header")))]),t("th",[e._v(e._s(e.$t("teams.myteams.litter-header")))]),t("th",[e._v(e._s(e.$t("common.actions")))])]),t("tbody",e._l(e.teams,function(s){return t("tr",{key:s.id,class:s.id===e.activeTeam?"is-primary-row":""},[t("td",[e._v(e._s(s.name))]),t("td",[e._v(e._s(s.identifier))]),t("td",[e._v(e._s(s.members))]),t("td",[e._v(e._s(s.total_images))]),t("td",[e._v(e._s(s.total_litter))]),t("td",{staticStyle:{"min-width":"120px","max-width":"150px"}},[t("button",{staticClass:"button is-small is-primary team-action tooltip",class:e.processing?"is-loading":"",attrs:{disabled:s.id===e.activeTeam},on:{click:function(i){return e.changeActiveTeam(s.id)}}},[t("span",{staticClass:"tooltip-text"},[e._v(" "+e._s(s.id===e.activeTeam?e.$t("teams.myteams.this-is-active-team"):e.$t("teams.myteams.set-as-active-team"))+" ")]),t("i",{staticClass:"fa fa-star"})]),t("button",{staticClass:"button is-small is-info team-action tooltip",class:e.dlProcessing?"is-loading":"",on:{click:function(i){return e.download(s.id)}}},[t("span",{staticClass:"tooltip-text"},[e._v(e._s(e.$t("teams.myteams.download-team-data")))]),t("i",{staticClass:"fa fa-download"})]),t("button",{staticClass:"button is-small is-danger team-action tooltip",attrs:{disabled:s.members<=1},on:{click:function(i){return e.leaveTeam(s.id)}}},[t("span",{staticClass:"tooltip-text"},[e._v(" "+e._s(s.members>1?e.$t("teams.myteams.leave-team"):e.$t("teams.myteams.cant-leave-team"))+" ")]),t("i",{staticClass:"fa fa-sign-out"})]),s.leader===e.user.id?t("button",{staticClass:"button is-small is-warning team-action tooltip",on:{click:function(i){return e.toggleLeaderboardVis(s.id)}}},[t("span",{staticClass:"tooltip-text"},[e._v(" "+e._s(s.leaderboards?e.$t("teams.myteams.hide-from-leaderboards"):e.$t("teams.myteams.show-on-leaderboards"))+" ")]),t("i",{staticClass:"fa",class:s.leaderboards?"fa-eye-slash":"fa-eye"})]):e._e()])])}),0)])]):e._e()])])])},J=[],Y=c(W,H,J,!1,null,"8042d205");const X=Y.exports,K={name:"TeamSettings",data(){return{loading:!0,privacySectionSelectedTeamId:0,attributesSectionSelectedTeamId:0,privacyAllProcessing:!1,privacySubmitProcessing:!1,attributesProcessing:!1,attributesTeamName:"",attributesTeamIdentifier:"",btnAll:"button is-medium is-primary mt1",btn:"button is-medium is-warning mt1 mr1"}},async created(){var a,e;this.loading=!0,this.teams.length===0&&await this.$store.dispatch("GET_USERS_TEAMS"),this.privacySectionSelectedTeamId=(a=this.teams[0])==null?void 0:a.id,this.attributesSectionSelectedTeamId=(e=this.teamsLedByUser[0])==null?void 0:e.id,this.clearErrors(),this.loading=!1},watch:{attributesSectionSelectedTeam(){this.attributesTeamName=this.attributesSectionSelectedTeam.name,this.attributesTeamIdentifier=this.attributesSectionSelectedTeam.identifier}},computed:{allButton(){return this.privacyAllProcessing?this.btnAll+" is-loading":this.btnAll},disabled(){return this.privacyAllProcessing||this.privacySubmitProcessing},submitButton(){return this.privacySubmitProcessing?this.btn+" is-loading":this.btn},show_name_leaderboards:{get(){return this.team.pivot.show_name_leaderboards},set(a){this.$store.commit("team_settings",{team_id:this.privacySectionSelectedTeamId,key:"show_name_leaderboards",v:a})}},show_username_leaderboards:{get(){return this.team.pivot.show_username_leaderboards},set(a){this.$store.commit("team_settings",{team_id:this.privacySectionSelectedTeamId,key:"show_username_leaderboards",v:a})}},show_name_maps:{get(){return this.team.pivot.show_name_maps},set(a){this.$store.commit("team_settings",{team_id:this.privacySectionSelectedTeamId,key:"show_name_maps",v:a})}},show_username_maps:{get(){return this.team.pivot.show_username_maps},set(a){this.$store.commit("team_settings",{team_id:this.privacySectionSelectedTeamId,key:"show_username_maps",v:a})}},team(){return this.teams.find(a=>a.id===this.privacySectionSelectedTeamId)},attributesSectionSelectedTeam(){return this.teamsLedByUser.find(a=>a.id===this.attributesSectionSelectedTeamId)},teams(){return this.$store.state.teams.teams},user(){return this.$store.state.user.user},teamsLedByUser(){return this.teams.filter(a=>a.leader===this.user.id)},errors(){return this.$store.state.teams.errors}},methods:{async submit(a){a?this.privacyAllProcessing=!0:this.privacySubmitProcessing=!0,await this.$store.dispatch("SAVE_TEAM_SETTINGS",{all:a,team_id:this.privacySectionSelectedTeamId}),this.privacySubmitProcessing=!1,this.privacyAllProcessing=!1},async updateTeam(){if(this.attributesProcessing=!0,await this.$store.dispatch("UPDATE_TEAM",{teamId:this.attributesSectionSelectedTeamId,name:this.attributesTeamName,identifier:this.attributesTeamIdentifier}),this.attributesProcessing=!1,!Object.keys(this.errors).length&&(await this.$store.dispatch("GET_USERS_TEAMS"),this.user.active_team===this.attributesSectionSelectedTeamId)){let a=this.teams.find(e=>e.id===this.attributesSectionSelectedTeamId);this.$store.commit("usersTeam",a)}},clearErrors(){this.$store.commit("teamErrors",[])},clearError(a){this.errors[a]&&this.$store.commit("clearTeamsError",a)},getFirstError(a){return this.errors[a]?this.errors[a][0]:null}}};var Q=function(){var e=this,t=e._self._c;return t("div",{staticClass:"tsc"},[t("h1",{staticClass:"title is-2"},[e._v(e._s(e.$t("teams.dashboard.settings")))]),!e.loading&&!e.teams.length?t("p",{staticClass:"mb1"},[e._v(e._s(e.$t("teams.myteams.no-joined-team"))+".")]):e._e(),e.teams.length?t("div",{staticClass:"columns mt3 mb3"},[t("div",{staticClass:"column is-one-third pt0"},[t("h1",{staticClass:"title"},[e._v(e._s(e.$t("teams.settings.privacy-title")))]),t("p",{staticClass:"mb1"},[e._v(e._s(e.$t("teams.settings.privacy-text")))])]),t("div",{staticClass:"column is-half card p2"},[e.loading?t("p",[e._v(e._s(e.$t("common.loading")))]):t("div",[t("select",{directives:[{name:"model",rawName:"v-model",value:e.privacySectionSelectedTeamId,expression:"privacySectionSelectedTeamId"}],staticClass:"input mb2",on:{change:function(s){var i=Array.prototype.filter.call(s.target.options,function(r){return r.selected}).map(function(r){var o="_value"in r?r._value:r.value;return o});e.privacySectionSelectedTeamId=s.target.multiple?i:i[0]}}},e._l(e.teams,function(s){return t("option",{domProps:{value:s.id}},[e._v(" "+e._s(s.name)+" ")])}),0),t("h1",{staticClass:"title is-4"},[e._v(e._s(e.$t("teams.settings.maps.team-map"))+":")]),t("label",{staticClass:"checkbox mb1"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.show_name_maps,expression:"show_name_maps"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.show_name_maps)?e._i(e.show_name_maps,null)>-1:e.show_name_maps},on:{change:function(s){var i=e.show_name_maps,r=s.target,o=!!r.checked;if(Array.isArray(i)){var l=null,m=e._i(i,l);r.checked?m<0&&(e.show_name_maps=i.concat([l])):m>-1&&(e.show_name_maps=i.slice(0,m).concat(i.slice(m+1)))}else e.show_name_maps=o}}}),e._v(" "+e._s(e.$t("settings.privacy.credit-name"))+" ")]),t("br"),t("label",{staticClass:"checkbox mb1"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.show_username_maps,expression:"show_username_maps"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.show_username_maps)?e._i(e.show_username_maps,null)>-1:e.show_username_maps},on:{change:function(s){var i=e.show_username_maps,r=s.target,o=!!r.checked;if(Array.isArray(i)){var l=null,m=e._i(i,l);r.checked?m<0&&(e.show_username_maps=i.concat([l])):m>-1&&(e.show_username_maps=i.slice(0,m).concat(i.slice(m+1)))}else e.show_username_maps=o}}}),e._v(" "+e._s(e.$t("settings.privacy.credit-username"))+" ")]),t("p",{directives:[{name:"show",rawName:"v-show",value:e.show_name_maps,expression:"show_name_maps"}],staticClass:"is-green"},[e._v(e._s(e.$t("teams.settings.maps.name-will-appear")))]),t("p",{directives:[{name:"show",rawName:"v-show",value:e.show_username_maps,expression:"show_username_maps"}],staticClass:"is-green"},[e._v(e._s(e.$t("teams.settings.maps.username-will-appear")))]),t("p",{directives:[{name:"show",rawName:"v-show",value:!e.show_name_maps&&!e.show_username_maps,expression:"! show_name_maps && ! show_username_maps"}],staticClass:"is-red"},[e._v(e._s(e.$t("teams.settings.maps.will-not-appear")))]),t("h1",{staticClass:"title is-4 mt1"},[e._v(e._s(e.$t("teams.settings.leaderboards.team-leaderboard"))+":")]),t("label",{staticClass:"checkbox mb1"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.show_name_leaderboards,expression:"show_name_leaderboards"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.show_name_leaderboards)?e._i(e.show_name_leaderboards,null)>-1:e.show_name_leaderboards},on:{change:function(s){var i=e.show_name_leaderboards,r=s.target,o=!!r.checked;if(Array.isArray(i)){var l=null,m=e._i(i,l);r.checked?m<0&&(e.show_name_leaderboards=i.concat([l])):m>-1&&(e.show_name_leaderboards=i.slice(0,m).concat(i.slice(m+1)))}else e.show_name_leaderboards=o}}}),e._v(" "+e._s(e.$t("settings.privacy.credit-name"))+" ")]),t("br"),t("label",{staticClass:"checkbox mb1"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.show_username_leaderboards,expression:"show_username_leaderboards"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.show_username_leaderboards)?e._i(e.show_username_leaderboards,null)>-1:e.show_username_leaderboards},on:{change:function(s){var i=e.show_username_leaderboards,r=s.target,o=!!r.checked;if(Array.isArray(i)){var l=null,m=e._i(i,l);r.checked?m<0&&(e.show_username_leaderboards=i.concat([l])):m>-1&&(e.show_username_leaderboards=i.slice(0,m).concat(i.slice(m+1)))}else e.show_username_leaderboards=o}}}),e._v(" "+e._s(e.$t("settings.privacy.credit-username"))+" ")]),t("p",{directives:[{name:"show",rawName:"v-show",value:e.show_name_leaderboards,expression:"show_name_leaderboards"}],staticClass:"is-green"},[e._v(e._s(e.$t("teams.settings.leaderboards.name-will-appear")))]),t("p",{directives:[{name:"show",rawName:"v-show",value:e.show_username_leaderboards,expression:"show_username_leaderboards"}],staticClass:"is-green"},[e._v(e._s(e.$t("teams.settings.leaderboards.username-will-appear")))]),t("p",{directives:[{name:"show",rawName:"v-show",value:!e.show_name_leaderboards&&!e.show_username_leaderboards,expression:"! show_name_leaderboards && ! show_username_leaderboards"}],staticClass:"is-red"},[e._v(e._s(e.$t("teams.settings.leaderboards.will-not-appear")))]),t("div",{staticClass:"flex"},[t("button",{class:e.submitButton,attrs:{disabled:e.disabled},on:{click:function(s){return e.submit(!1)}}},[e._v(e._s(e.$t("teams.settings.submit-one-team")))]),t("button",{class:e.allButton,attrs:{disabled:e.disabled},on:{click:function(s){return e.submit(!0)}}},[e._v(e._s(e.$t("teams.settings.apply-all-teams")))])])])])]):e._e(),e.teamsLedByUser.length?t("div",{staticClass:"columns mb3"},[t("div",{staticClass:"column is-one-third pt0"},[t("h1",{staticClass:"title"},[e._v(e._s(e.$t("teams.settings.team-update-title")))]),t("p",{staticClass:"mb1"},[e._v(e._s(e.$t("teams.settings.team-update-text")))])]),t("div",{staticClass:"column is-half card p2"},[e.loading?t("p",[e._v(e._s(e.$t("common.loading")))]):t("div",[t("form",{attrs:{method:"post"},on:{submit:function(s){return s.preventDefault(),e.updateTeam.apply(null,arguments)}}},[t("div",{staticClass:"control pb2"},[t("p",[e._v(e._s(e.$t("teams.create.select-team")))]),t("div",{staticClass:"select"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.attributesSectionSelectedTeamId,expression:"attributesSectionSelectedTeamId"}],on:{change:function(s){var i=Array.prototype.filter.call(s.target.options,function(r){return r.selected}).map(function(r){var o="_value"in r?r._value:r.value;return o});e.attributesSectionSelectedTeamId=s.target.multiple?i:i[0]}}},e._l(e.teamsLedByUser,function(s){return t("option",{domProps:{value:s.id}},[e._v(" "+e._s(s.name)+" ")])}),0)])]),t("div",{staticClass:"control pb2"},[t("label",{attrs:{for:"name"}},[e._v(e._s(e.$t("teams.create.team-name")))]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.attributesTeamName,expression:"attributesTeamName"}],staticClass:"input",attrs:{name:"name",placeholder:e.$t("teams.create.my-awesome-team-placeholder"),type:"text",required:""},domProps:{value:e.attributesTeamName},on:{keydown:function(s){return e.clearError("name")},input:function(s){s.target.composing||(e.attributesTeamName=s.target.value)}}}),e.getFirstError("name")?t("p",{staticClass:"is-danger",domProps:{textContent:e._s(e.getFirstError("name"))}}):e._e()]),t("div",{staticClass:"control pb2"},[t("label",{attrs:{for:"identifier"}},[e._v(e._s(e.$t("teams.create.unique-team-id")))]),t("br"),t("small",[e._v(e._s(e.$t("teams.create.id-to-join-team")))]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.attributesTeamIdentifier,expression:"attributesTeamIdentifier"}],staticClass:"input",attrs:{id:"identifier",name:"identifier",placeholder:"Awesome2021",required:""},domProps:{value:e.attributesTeamIdentifier},on:{keydown:function(s){return e.clearError("identifier")},input:function(s){s.target.composing||(e.attributesTeamIdentifier=s.target.value)}}}),e.getFirstError("identifier")?t("p",{staticClass:"is-danger",domProps:{textContent:e._s(e.getFirstError("identifier"))}}):e._e()]),t("div",[t("button",{class:e.btnAll,attrs:{disabled:e.attributesProcessing}},[e._v(e._s(e.$t("teams.create.update-team")))])])])])])]):e._e()])},ee=[],te=c(K,Q,ee,!1,null,"1189eacc");const se=te.exports,ae={name:"TeamsLeaderboard",data(){return{loading:!0}},async created(){await this.$store.dispatch("GET_TEAMS_LEADERBOARD"),this.loading=!1},computed:{teams(){return this.$store.state.teams.leaderboard}},methods:{getDate(a){return f(a).format("LL")},medal(a){return a===0?"/assets/icons/gold-medal.png":a===1?"/assets/icons/silver-medal.png":a===2?"/assets/icons/bronze-medal.svg":""}}};var ie=function(){var e=this,t=e._self._c;return t("section",[t("div",{staticClass:"my-teams-container"},[t("h1",{staticClass:"title is-2"},[e._v(e._s(e.$t("teams.leaderboard.title")))]),e.loading?t("p",[e._v(e._s(e.$t("common.loading")))]):t("table",{staticClass:"table is-fullwidth is-hoverable has-text-centered"},[t("thead",[t("th",[e._v(e._s(e.$t("teams.leaderboard.position-header")))]),t("th",[e._v(e._s(e.$t("teams.leaderboard.name-header")))]),t("th",[e._v(e._s(e.$t("teams.leaderboard.litter-header")))]),t("th",[e._v(e._s(e.$t("teams.leaderboard.photos-header")))]),t("th",[e._v(e._s(e.$t("teams.leaderboard.created-at-header")))])]),t("tbody",e._l(e.teams,function(s,i){return t("tr",[t("td",[t("div",{staticClass:"medal-container"},[t("img",{directives:[{name:"show",rawName:"v-show",value:i<3,expression:"index < 3"}],staticClass:"medal",attrs:{src:e.medal(i)}}),t("span",[e._v(e._s(i+1))])])]),t("td",[e._v(e._s(s.name))]),t("td",[e._v(e._s(s.total_litter))]),t("td",[e._v(e._s(s.total_images))]),t("td",[e._v(e._s(e.getDate(s.created_at)))])])}),0)])])])},re=[],ne=c(ae,ie,re,!1,null,"f92a40f4");const oe=ne.exports,me={name:"Teams",components:{TeamsDashboard:R,CreateTeam:B,JoinTeam:q,MyTeams:X,TeamSettings:se,TeamsLeaderboard:oe},async created(){this.loading=!0,await this.$store.dispatch("GET_TEAM_TYPES"),this.teams.length===0&&await this.$store.dispatch("GET_USERS_TEAMS"),this.loading=!1},data(){return{loading:!0,items:[{name:this.$t("teams.dashboard.dashboard"),icon:"fa fa-home teams-icon",component:"TeamsDashboard"},{name:this.$t("teams.dashboard.join-a-team"),icon:"fa fa-sign-in teams-icon",component:"JoinTeam"},{name:this.$t("teams.dashboard.create-a-team"),icon:"fa fa-plus teams-icon",component:"CreateTeam"},{name:this.$t("teams.myteams.title"),icon:"fa fa-users teams-icon",component:"MyTeams"},{name:this.$t("teams.dashboard.leaderboard"),icon:"fa fa-trophy teams-icon",component:"TeamsLeaderboard"},{name:this.$t("teams.dashboard.settings"),icon:"fa fa-gear teams-icon",component:"TeamSettings"}]}},computed:{teams(){return this.$store.state.teams.teams},type(){return this.$store.state.teams.component_type}},methods:{goto(a){this.$store.commit("teamComponent",a)}}};var le=function(){var e=this,t=e._self._c;return t("section",[t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-one-fifth teams-left-col"},[t("p",{staticClass:"teams-title"},[e._v(e._s(e.$t("teams.dashboard.olm-teams")))]),e._l(e.items,function(s){return t("div",{staticClass:"team-flex",on:{click:function(i){return e.goto(s.component)}}},[t("i",{class:s.icon}),t("p",{staticClass:"mtba"},[e._v(e._s(s.name))])])})],2),t("div",{staticClass:"column pt3 mobile-teams-padding",staticStyle:{"background-color":"#edf1f4"}},[e.loading?t("p",[e._v(e._s(e.$t("common.loading")))]):t(e.type,{tag:"component"})],1)])])},ce=[],de=c(me,le,ce,!1,null,"e7bd35ae");const ye=de.exports;export{ye as default};
