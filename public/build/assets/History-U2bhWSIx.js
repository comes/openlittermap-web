import{L as e}from"./vue-loading-B7rzurE_.js";/* empty css                    */import{L as o}from"./LitterTable-Dp9ekJi5.js";import{n as r}from"./app-D1dsUHZ8.js";/* empty css            */const s={name:"History",components:{Loading:e,LitterTable:o},data(){return{loading:!0}},async created(){await this.$store.dispatch("GET_ALL_PHOTOS_PAGINATED"),await this.$store.dispatch("GET_LIST_OF_COUNTRY_NAMES"),this.loading=!1},computed:{paginatedPhotos(){return this.$store.state.alldata.paginated}}};var i=function(){var t=this,a=t._self._c;return a("div",[t.loading?a("loading",{attrs:{active:!0,"is-full-page":!0}}):a("LitterTable",{attrs:{title:"All Uploads",paginatedPhotos:t.paginatedPhotos,action:"GET_ALL_PHOTOS_PAGINATED"}})],1)},n=[],_=r(s,i,n,!1,null,"10e55381");const u=_.exports;export{u as default};
