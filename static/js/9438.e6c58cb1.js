"use strict";(self["webpackChunkonepic"]=self["webpackChunkonepic"]||[]).push([[9438],{9438:function(t,a,e){e.r(a),e.d(a,{default:function(){return h}});var r=function(){var t=this,a=t._self._c;return a("div",{staticClass:"popupDialog"},["雨情监测"===t.showsitetable?a("RaininfoPopup",{attrs:{columndata:t.columndata,header:t.header,chartData:t.chartData,query:t.query}}):"蒸发监测"===t.showsitetable?a("EvaorationPopup",{attrs:{columndata:t.columndata,header:t.header,chartData:t.chartData,query:t.query}}):"水质监测"===t.showsitetable?a("WaterqualityPopup",{attrs:{columndata:t.columndata,header:t.header,chartData:t.chartData,query:t.query}}):"水情监测"===t.showsitetable?a("WaterinfoPopup",{attrs:{columndata:t.columndata,header:t.header,chartData:t.chartData,query:t.query,isPopup:t.isPopup}}):"工情"===t.showsitetable?a("EngineerPopup",{attrs:{columndata:t.columndata,header:t.header,chartData:t.chartData}}):t._e()],1)},o=[],n={props:{columndata:{type:Array},header:{type:Object},chartData:{type:Object},query:{type:Object},isPopup:{type:String}},components:{RaininfoPopup:()=>e.e(3829).then(e.bind(e,83829)),EvaorationPopup:()=>e.e(5114).then(e.bind(e,65114)),WaterqualityPopup:()=>e.e(1762).then(e.bind(e,11762)),WaterinfoPopup:()=>e.e(2928).then(e.bind(e,92928)),EngineerPopup:()=>e.e(232).then(e.bind(e,80232))},data(){return{showsitetable:this.$store.state.point.showasidetable}},created(){this.$store.watch((t=>t.point.showasidetable),(()=>{this.showsitetable=this.$store.state.point.showasidetable}))},mounted(){},methods:{}},s=n,u=e(1001),i=(0,u.Z)(s,r,o,!1,null,"75d58922",null),h=i.exports}}]);