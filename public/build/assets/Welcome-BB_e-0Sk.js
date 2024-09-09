import{n as i}from"./app-ByiNnCej.js";import{_ as o,a as r}from"./android-BlaF6v8Z.js";import{_ as n,a as c}from"./phone-lg_u1nSM.js";import{_ as l}from"./twitter2-DydKAWYR.js";/* empty css            */const m={name:"Footer",data(){return{email:"",socials:[{icon:"facebook2.png",url:"https://facebook.com/openlittermap"},{icon:"ig2.png",url:"https://instagram.com/openlittermap"},{icon:"twitter2.png",url:"https://twitter.com/openlittermap"},{icon:"reddit.png",url:"https://reddit.com/r/openlittermap"},{icon:"tumblr.png",url:"https://tumblr.com/openlittermap"}],version:"v3.3.3"}},computed:{errors(){return this.$store.state.subscriber.errors},hasErrors(){return Object.keys(this.errors).length>0},subscribed(){return this.$store.state.subscriber.just_subscribed}},methods:{clearErrors(){this.$store.commit("clearSubscriberErrors")},getError(s){return this.errors[s][0]},icon(s){return"/assets/icons/"+s},open(s){window.open(s,"_blank")},async subscribe(){await this.$store.dispatch("SUBSCRIBE",this.email)}}};var _=function(){var t=this,e=t._self._c;return e("footer",{staticClass:"foot"},[e("div",{staticClass:"container"},[e("div",{staticClass:"inner-footer-container has-text-centered"},[e("p",{staticClass:"top-footer-title"},[t._v(t._s(t.$t("home.footer.email-you"))+"?")]),t.hasErrors?e("div",{staticClass:"notification is-danger mb1em"},t._l(Object.keys(this.errors),function(a){return e("div",{key:a},[e("p",[t._v(t._s(t.getError(a)))])])}),0):t._e(),e("form",{attrs:{method:"post"},on:{submit:function(a){return a.preventDefault(),t.subscribe.apply(null,arguments)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input f-input",attrs:{placeholder:t.$t("home.footer.enter-email"),required:"",type:"email"},domProps:{value:t.email},on:{input:[function(a){a.target.composing||(t.email=a.target.value)},t.clearErrors]}}),e("br"),e("button",{staticClass:"button is-medium is-primary hov mb2"},[t._v(t._s(t.$t("home.footer.subscribe")))]),e("p",{directives:[{name:"show",rawName:"v-show",value:t.subscribed,expression:"subscribed"}],staticClass:"footer-success"},[t._v(" "+t._s(t.$t("home.footer.subscribed-success-msg"))+". ")])])]),e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-half foot-container-left"},[e("p",{staticClass:"olm-title"},[t._v("#OpenLitterMap")]),e("p",{staticClass:"footer-text mb1"},[t._v(t._s(t.$t("home.footer.need-your-help"))+".")]),t._l(t.socials,function(a){return e("img",{staticClass:"footer-icon",attrs:{src:t.icon(a.icon)},on:{click:function(S){return t.open(a.url)}}})}),e("br"),e("p",{staticClass:"footer-text mt1"},[t._v(" "+t._s(this.version)+" ")])],2),e("div",{staticClass:"column is-2"},[e("p",{staticClass:"olm-subtitle"},[t._v(t._s(t.$t("home.footer.read")))]),e("p",{staticClass:"footer-link",on:{click:function(a){return t.open("https://openlittermap.medium.com/")}}},[t._v(t._s(t.$t("home.footer.blog")))]),e("p",{staticClass:"footer-link",on:{click:function(a){return t.open("https://opengeospatialdata.springeropen.com/articles/10.1186/s40965-018-0050-y")}}},[t._v(t._s(t.$t("home.footer.research-paper")))]),e("router-link",{staticClass:"footer-link",attrs:{tag:"p",to:"/references"}},[t._v(t._s(t.$t("home.footer.references")))]),e("router-link",{staticClass:"footer-link",attrs:{tag:"p",to:"/credits"}},[t._v(t._s(t.$t("home.footer.credits")))]),e("router-link",{staticClass:"footer-link",attrs:{tag:"p",to:"/faq"}},[t._v(t._s(t.$t("common.faq")))])],1),e("div",{staticClass:"column is-2"},[e("p",{staticClass:"olm-subtitle"},[t._v(t._s(t.$t("home.footer.watch")))]),e("p",{staticClass:"footer-link",on:{click:function(a){return t.open("https://www.youtube.com/watch?v=my7Cx-kZhT4")}}},[t._v("TEDx 2017")]),e("p",{staticClass:"footer-link",on:{click:function(a){return t.open("https://www.youtube.com/watch?v=E_qhEhHwUGM")}}},[t._v("State of the Map 2019")]),e("p",{staticClass:"footer-link",on:{click:function(a){return t.open("https://www.youtube.com/watch?v=T8rGf1ScR1I")}}},[t._v("Datapub 2020")]),e("p",{staticClass:"footer-link",on:{click:function(a){return t.open("https://www.youtube.com/watch?v=5HuaQNeHuZ8")}}},[t._v("ESA PhiWeek 2020")]),e("p",{staticClass:"footer-link",on:{click:function(a){return t.open("https://www.youtube.com/watch?v=QhLsA0WIfTA")}}},[t._v("Geneva Forum, UN 2020")]),e("p",{staticClass:"footer-link",on:{click:function(a){return t.open("https://www.youtube.com/watch?v=Pe4nHdoAlu4")}}},[t._v("Cardano4Climate Meetup 2021")]),e("p",{staticClass:"footer-link",on:{click:function(a){return t.open("https://www.youtube.com/watch?v=f2UGAxRwrQk")}}},[t._v("CardanoSummit 2022")])]),e("div",{staticClass:"column is-2"},[e("p",{staticClass:"olm-subtitle"},[t._v(t._s(t.$t("home.footer.help")))]),e("router-link",{attrs:{to:"/contact-us"}},[e("p",{staticClass:"footer-link"},[t._v(t._s(t.$t("home.footer.contact-us")))])]),e("p",{staticClass:"footer-link"},[t._v(t._s(t.$t("home.footer.create-account")))]),e("p",{staticClass:"footer-link",on:{click:function(a){return t.open("https://angel.co/openlittermap/jobs")}}},[t._v(t._s(t.$t("home.footer.join-the-team")))]),e("p",{staticClass:"footer-link",on:{click:function(a){return t.open("https://join.slack.com/t/openlittermap/shared_invite/zt-fdctasud-mu~OBQKReRdC9Ai9KgGROw")}}},[t._v(t._s(t.$t("home.footer.join-slack")))]),e("p",{staticClass:"footer-link",on:{click:function(a){return t.open("https://github.com/openlittermap")}}},[t._v("GitHub")]),e("p",{staticClass:"footer-link",on:{click:function(a){return t.open("https://www.facebook.com/pg/openlittermap/groups/")}}},[t._v(t._s(t.$t("home.footer.fb-group")))]),e("router-link",{staticClass:"footer-link",attrs:{to:"/donate"}},[t._v(t._s(t.$t("home.footer.single-donation")))]),e("router-link",{staticClass:"footer-link",attrs:{to:"/signup"}},[t._v(t._s(t.$t("home.footer.crowdfunding")))])],1)])]),e("div",{staticClass:"footer-bottom"},[e("p",{staticClass:"footer-text"},[t._v(t._s(t.$t("home.footer.olm-is-flagship")))])])])},u=[],p=i(m,_,u,!1,null,"164499f6");const d=p.exports,h="/build/assets/cardano-BjKjjQeP.svg",v="/build/assets/engine-lease-finance-logo-CfF72bGp.png",f="/build/assets/plastic_raiders-BEOTwJ_1.png",g="/build/assets/science-foundation-ireland-Cs5Mx-ee.png",b="/build/assets/dpga-CsamMBXL.png",C="/build/assets/c4clogo-BQ46TDw_.jpeg",w={name:"Partners"};var $=function(){var t=this;return t._self._c,t._m(0)},k=[function(){var s=this,t=s._self._c;return t("div",{staticClass:"partners-list"},[t("div",{staticClass:"partner has-text-centered"},[t("a",{attrs:{href:"https://cardano.org/",target:"_blank"}},[t("img",{attrs:{loading:"lazy",src:h,alt:"Partner"}})])]),t("div",{staticClass:"partner has-text-centered"},[t("a",{attrs:{href:"https://elfc.com/",target:"_blank"}},[t("img",{attrs:{loading:"lazy",src:v,alt:"Partner"}})])]),t("div",{staticClass:"partner has-text-centered"},[t("a",{attrs:{href:"https://twitter.com/PlasticRaiders?s=20",target:"_blank"}},[t("img",{attrs:{loading:"lazy",src:f,alt:"Partner"}})])]),t("div",{staticClass:"partner has-text-centered"},[t("a",{attrs:{href:"https://www.sfi.ie/",target:"_blank"}},[t("img",{attrs:{loading:"lazy",src:g,alt:"Partner"}})])]),t("div",{staticClass:"partner has-text-centered"},[t("a",{attrs:{href:"https://www.digitalpublicgoods.net/",target:"_blank"}},[t("img",{attrs:{loading:"lazy",src:b,alt:"Partner"}})])]),t("div",{staticClass:"partner has-text-centered"},[t("a",{attrs:{href:"https://www.cardano4climate.com/",target:"_blank"}},[t("img",{attrs:{loading:"lazy",src:C,alt:"Partner"}})])])])}],y=i(w,$,k,!1,null,"65eba873");const x=y.exports,q="/build/assets/world-BpJiS2Th.png",H="/build/assets/microscope-BxV7iasq.png",P="/build/assets/tree-BQ8u605e.png",j={name:"Welcome",components:{Partners:x,Footer:d},mounted(){this.startHeadingsAnimation()},data(){return{headings:[{title:this.$t("home.welcome.plastic-pollution-out-of-control"),img:"/assets/plastic_bottles.jpg"},{title:this.$t("home.welcome.fires-out-of-control"),img:"/assets/forest_fire.jpg"},{title:this.$t("home.welcome.glass-hurts-pets"),img:"/assets/dog.jpeg"}],activeHeadingIndex:0}},computed:{activeHeading(){return this.headings[this.activeHeadingIndex]},modal(){return this.$store.state.modal.show}},methods:{android(){window.open("https://play.google.com/store/apps/details?id=com.geotech.openlittermap","_blank")},ios(){window.open("https://apps.apple.com/us/app/openlittermap/id1475982147","_blank")},startHeadingsAnimation(){let s=this,t=null;function e(){if(document.hidden){t&&clearInterval(t);return}t=setInterval(()=>{s.activeHeadingIndex=(s.activeHeadingIndex+1)%s.headings.length},5e3)}e(),document.addEventListener("visibilitychange",e)}}};var E=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"container home-container"},[e("div",{staticClass:"columns c-1"},[e("div",{staticClass:"column is-half",staticStyle:{"padding-right":"1em !important"}},[e("transition",{attrs:{name:"slide-fade-left",mode:"out-in"}},[e("h1",{key:t.activeHeading.title,staticClass:"main-title variable-height",domProps:{innerHTML:t._s(t.activeHeading.title)}})]),e("h2",{staticClass:"subtitle is-3 home-img-padding"},[t._v(" "+t._s(t.$t("home.welcome.help-us"))+". ")]),e("div",{staticClass:"flex"},[e("img",{staticClass:"app-icon",staticStyle:{"margin-right":"1em"},attrs:{src:o},on:{click:t.ios}}),e("img",{staticClass:"app-icon",attrs:{src:r},on:{click:t.android}})])],1),e("div",{staticClass:"column is-half"},[e("div",{staticClass:"top-image"},[e("transition",{attrs:{name:"slide-fade-right",mode:"out-in"}},[e("img",{key:t.activeHeading.title,attrs:{src:t.activeHeading.img,alt:t.activeHeading.title}})])],1)])]),e("div",{staticClass:"why-container"},[e("h1",{staticClass:"main-title"},[t._v(" "+t._s(t.$t("home.welcome.why-collect-data"))+"? ")]),e("div",{staticClass:"columns welcome-mb"},[t._m(0),e("div",{staticClass:"column ma"},[e("h2",{staticClass:"main-subtitle"},[t._v(" 1. "+t._s(t.$t("home.welcome.visibility"))+" ")]),e("h3",{staticClass:"welcome-subtitle mb1em"},[t._v(" "+t._s(t.$t("home.welcome.our-maps-reveal-litter-normality"))+". ")])])]),e("div",{staticClass:"columns welcome-mb"},[t._m(1),e("div",{staticClass:"column ma"},[e("h2",{staticClass:"main-subtitle"},[t._v(" 2. "+t._s(t.$t("home.welcome.science"))+" ")]),e("h3",{staticClass:"welcome-subtitle mb1em"},[t._v(" "+t._s(t.$t("home.welcome.our-data-open-source"))+". ")])])]),e("div",{staticClass:"columns welcome-mb"},[t._m(2),e("div",{staticClass:"column ma"},[e("h2",{staticClass:"main-subtitle"},[t._v(" 3. "+t._s(t.$t("home.welcome.community"))+" ")]),e("h3",{staticClass:"welcome-subtitle"},[t._v(" "+t._s(t.$t("home.welcome.must-work-together"))+". ")])])])]),e("div",[e("h1",{staticClass:"main-title"},[t._v(" "+t._s(t.$t("home.welcome.how-does-it-work"))+"? ")]),e("div",{staticClass:"columns welcome-mb"},[t._m(3),e("div",{staticClass:"column ma"},[e("h2",{staticClass:"main-subtitle"},[t._v(" 1. "+t._s(t.$t("home.welcome.take-a-photo"))+" ")]),e("h3",{staticClass:"welcome-subtitle mb1em"},[t._v(" "+t._s(t.$t("home.welcome.device-captures-info"))+" ")])])]),e("div",{staticClass:"columns welcome-mb"},[t._m(4),e("div",{staticClass:"column ma"},[e("h2",{staticClass:"main-subtitle"},[t._v(" 2. "+t._s(t.$t("home.welcome.tag-the-litter"))+" ")]),e("h3",{staticClass:"welcome-subtitle mb1em"},[t._v(" "+t._s(t.$t("home.welcome.tag-litter-you-see"))+"! ")])])]),e("div",{staticClass:"columns welcome-mb"},[t._m(5),e("div",{staticClass:"column ma"},[e("h2",{staticClass:"main-subtitle"},[t._v(" 3. "+t._s(t.$t("home.welcome.share-results"))+" ")]),e("h3",{staticClass:"welcome-subtitle"},[t._v(" "+t._s(t.$t("home.welcome.share"))+"! ")])])])]),e("div",{staticClass:"partners-container container is-max-desktop"},[e("p",{staticClass:"has-text-centered main-title"},[t._v(t._s(t.$t("home.welcome.our-partners")))]),e("Partners")],1)]),e("Footer")],1)},B=[function(){var s=this,t=s._self._c;return t("div",{staticClass:"column is-one-quarter icon-center has-text-centered"},[t("img",{staticClass:"about-icon",attrs:{src:q}})])},function(){var s=this,t=s._self._c;return t("div",{staticClass:"column is-one-quarter icon-center has-text-centered"},[t("img",{staticClass:"about-icon",attrs:{src:H}})])},function(){var s=this,t=s._self._c;return t("div",{staticClass:"column is-one-quarter icon-center has-text-centered"},[t("img",{staticClass:"about-icon",attrs:{src:P}})])},function(){var s=this,t=s._self._c;return t("div",{staticClass:"column is-one-quarter icon-center has-text-centered"},[t("img",{staticClass:"about-icon",attrs:{src:n}})])},function(){var s=this,t=s._self._c;return t("div",{staticClass:"column is-one-quarter icon-center has-text-centered"},[t("img",{staticClass:"about-icon",attrs:{src:c}})])},function(){var s=this,t=s._self._c;return t("div",{staticClass:"column is-one-quarter icon-center has-text-centered"},[t("img",{staticClass:"about-icon",attrs:{src:l}})])}],R=i(j,E,B,!1,null,"e98c7fd5");const G=R.exports;export{G as default};
