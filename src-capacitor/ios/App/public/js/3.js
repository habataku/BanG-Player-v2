(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"2d09":function(t,e,a){},"713b":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[t.started?a("q-page-container",{staticClass:"bg"},[a("router-view"),a("top-menu")],1):t._e(),a("transition",{attrs:{appear:"","appear-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[a("q-page-container",{directives:[{name:"show",rawName:"v-show",value:!t.started,expression:"!started"}],staticClass:"bg cursor-pointer",on:{click:t.onStart}},[a("q-page",{staticClass:"flex flex-center"},[a("div",{staticClass:"container sgm text-center"},[a("div",{staticClass:"text-h3"},[t._v("BanG Player")]),a("div",{staticClass:"text-body1",style:"opacity: "+t.opacity},[t._v("Tap to start")])]),a("div",{staticClass:"container absolute-bottom text-caption text-grey text-center"},[t._v("\n          "+t._s(t.$t("statement"))+"\n        ")])]),a("download-dialog",{model:{value:t.downloadDialogDisplay,callback:function(e){t.downloadDialogDisplay=e},expression:"downloadDialogDisplay"}})],1)],1),a("q-footer",[a("music-controller")],1)],1)},s=[],i=a("c973"),n=a.n(i),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"framework"},[a("div",{staticClass:"q-pa-sm"},[a("div",{staticClass:"row q-col-gutter-md items-center"},[a("div",{staticClass:"col-auto"},[a("q-img",{staticStyle:{width:"36px"},attrs:{ratio:1,src:"string"===typeof t.cover?t.cover:t.cover[0]}})],1),a("div",{staticClass:"col-auto"},[a("q-btn",{attrs:{round:"",color:"white","text-color":"primary",size:"md",icon:t.$audio.paused()?"mdi-play":"mdi-pause"},on:{click:function(e){return t.$audio.toggle()}}})],1),a("div",{staticClass:"col"},[a("div",{staticClass:"row q-col-gutter-sm"},[a("div",{staticClass:"col ellipsis"},[t._v("\n            "+t._s(t.$lang.getInLang(t.$i18n.locale,t.artist)+" - "+t.$lang.getInLang(t.$i18n.locale,t.title))+"\n          ")]),a("div",{staticClass:"col-auto"},[a("q-btn",{ref:"expandController",staticStyle:{margin:"-24px 8px 8px 8px"},attrs:{round:"",color:"white",size:"sm","text-color":"primary",icon:t.show?"mdi-chevron-down":"mdi-chevron-up"},on:{click:t.doExpand}})],1)]),a("div",{staticClass:"row q-col-gutter-sm"},[a("div",{staticClass:"col"},[a("q-slider",{attrs:{dense:"",color:"secondary",min:0,max:this.$audio.getPlayer().duration},model:{value:t.progress,callback:function(e){t.progress=e},expression:"progress"}})],1),a("div",{staticClass:"col-auto"},[t._v("\n            "+t._s(t.toMusicTime(t.progress)+"\\"+t.toMusicTime(this.$audio.getPlayer().duration))+"\n          ")])])])])])])},l=[],c=a("7937");const{pad:d}=c["c"];var u={name:"MusicController",data:function(){return{onUpdate:null,currentTime:0,cover:"img/jacket.png",title:"Unknown Song",artist:"Unknown Artist",show:!0}},computed:{progress:{get(){return this.currentTime},set(t){this.$audio.setCurrentTime(t)}}},methods:{toMusicTime(t){const e=Math.floor(t/3600)||0,a=Math.floor(t/60)||0,o=Math.floor(t%60)||0;return`${d(e,2)}:${d(a,2)}:${d(o,2)}`},doExpand(){this.show?(this.$refs.framework.style.height=0,this.$refs.expandController.style["margin-top"]="-40px",this.show=!1):(this.$refs.framework.style.height="",this.$refs.expandController.style["margin-top"]="-24px",this.show=!0)}},mounted(){this.doExpand(),this.onUpdate=setInterval(()=>{this.currentTime=this.$audio.currentTime(),this.cover=this.$audio.cover?this.$audio.cover:"img/jacket.png",this.title=this.$audio.title?this.$audio.title:"Unknown Song",this.artist=this.$audio.artist?this.$audio.artist:"Unknown Artist"},100)},beforeDestroy(){clearInterval(this.onUpdate)}},p=u,m=a("2877"),g=a("068f"),h=a("9c40"),v=a("c1d0"),f=a("eebe"),w=a.n(f),y=Object(m["a"])(p,r,l,!1,null,"7c2ae94c",null),x=y.exports;w()(y,"components",{QImg:g["a"],QBtn:h["a"],QSlider:v["a"]});var $=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{attrs:{persistent:""},model:{value:t.display_,callback:function(e){t.display_=e},expression:"display_"}},[a("q-card",{staticStyle:{width:"75%","min-width":"300px"}},[a("q-card-section",[a("div",{staticClass:"row"},[t.downloadDialog.title?a("div",{staticClass:"text-h6"},[t._v(t._s(t.downloadDialog.title))]):t._e(),a("q-space"),t.downloadDialog.closeable?a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{round:"",flat:"",icon:"mdi-close"}}):t._e()],1)]),a("q-card-section",[a("div",{staticClass:"row q-col-gutter-md"},[a("div",{staticClass:"col-12"},[t.downloadDialog.message?a("div",{staticClass:"text-body1 text-center"},[t._v(t._s(t.downloadDialog.message))]):t._e()]),a("div",{staticClass:"col-12"},[a("download-progress")],1)])])],1)],1)},C=[],_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row q-col-gutter-sm"},[a("div",{staticClass:"col-12"},[a("q-linear-progress",{attrs:{value:t.downloadInfo.currentSize/t.downloadInfo.totalSize,indeterminate:!(t.downloadInfo.totalSize&&t.downloadInfo.totalSize>0),color:"primary"}})],1),a("div",{staticClass:"col-12 text-center text-body1"},[t._v("\n      "+t._s(t.humanStorageSize(t.downloadInfo.currentSize)+"/"+t.humanStorageSize(t.downloadInfo.totalSize))+"\n    ")]),a("div",{staticClass:"col-12 text-center text-caption text-grey"},[t._v("\n      "+t._s(t.humanStorageSize(t.downloadInfo.downloadSpeed)+"/s")+"\n    ")])])])},b=[];const{humanStorageSize:D}=c["c"];var S={name:"DownloadProgress",data:function(){return{}},computed:{downloadInfo:{get(){return this.$store.state.downloadInfo}}},methods:{humanStorageSize:D},mounted(){}},q=S,k=a("6b1d"),I=Object(m["a"])(q,_,b,!1,null,"43dd340d",null),Q=I.exports;w()(I,"components",{QLinearProgress:k["a"]});var z={name:"DownloadDialog",components:{DownloadProgress:Q},props:{display:{type:Boolean,default:!1},title:{type:String,default:""}},data:function(){return{display_:this.display}},model:{prop:"display",event:"updateDisplay"},watch:{display(t){this.display_=t,t||this.$store.commit("axiosCanceller/doCancel")},display_(t){this.$emit("updateDisplay",t),t||this.$store.commit("axiosCanceller/doCancel")},"downloadDialog.display"(t){this.display_=t}},computed:{downloadDialog:{get(){return this.$store.state.downloadDialog.downloadDialog}}}},M=z,P=a("24e8"),T=a("f09f"),j=a("a370"),E=a("2c91"),U=a("7f67"),L=Object(m["a"])(M,$,C,!1,null,"39e65880",null),O=L.exports;w()(L,"components",{QDialog:P["a"],QCard:T["a"],QCardSection:j["a"],QSpace:E["a"],QBtn:h["a"]}),w()(L,"directives",{ClosePopup:U["a"]});var A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page-sticky",{attrs:{position:"bottom-left",offset:[12,-18]}},[a("q-fab",{attrs:{color:"primary","text-color":"white",direction:"up",icon:"mdi-menu",push:""}},[a("q-fab-action",{attrs:{color:"secondary",icon:t.$q.fullscreen.isActive?"mdi-fullscreen-exit":"mdi-fullscreen"},on:{click:function(e){return t.$q.fullscreen.toggle()}}})],1)],1)},B=[],F={name:"TopMenu"},G=F,J=a("de5e"),N=a("c294"),R=a("72db"),H=Object(m["a"])(G,A,B,!1,null,"cea1c708",null),K=H.exports;w()(H,"components",{QPageSticky:J["a"],QFab:N["a"],QFabAction:R["a"]});var W={name:"MainLayout",components:{TopMenu:K,DownloadDialog:O,MusicController:x},data(){return{opacity:1,step:.04}},computed:{started:{get(){return this.$store.state.started}},downloadDialogDisplay:{get(){return this.$store.state.downloadDialog.downloadDialog.display},set(t){this.$store.commit("downloadDialog/update",{display:t})}}},methods:{onStart(){this.$sound.start(),this.$store.commit("setStarted"),"info"!==this.$route.path&&(this.$audio.setDefaultAudio(),this.$audio.play())}},mounted(){var t=this;return n()((function*(){const e=setInterval(()=>{(t.opacity>=1||t.opacity<=0)&&(t.step=-t.step),t.opacity+=t.step,t.started&&clearInterval(e)},50);t.$store.commit("notification/update",yield t.$github.getRaw("ReiKohaku","BanG_Player_Wiki","/notification.json"))}))()}},V=W,X=(a("fef8"),a("4d5a")),Y=a("09e3"),Z=a("9989"),tt=a("7ff0"),et=Object(m["a"])(V,o,s,!1,null,"55f3638e",null);e["default"]=et.exports;w()(et,"components",{QLayout:X["a"],QPageContainer:Y["a"],QPage:Z["a"],QFooter:tt["a"]})},fef8:function(t,e,a){"use strict";var o=a("2d09"),s=a.n(o);s.a}}]);