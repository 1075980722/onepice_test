"use strict";(self["webpackChunkonepic"]=self["webpackChunkonepic"]||[]).push([[4899],{54899:function(t,a,e){e.r(a),e.d(a,{default:function(){return c}});var i=function(){var t=this,a=t._self._c;return a("div",{ref:"yuliang",staticStyle:{width:"360px",height:"300px"}})},r=[],n=e(11117),l={props:{chartarr:{type:Array}},watch:{chartarr:{handler(t,a){console.log(a),this.xdata=t,this.initChart()},immediate:!0,deep:!0}},data(){return{xdata:[],ydata:["当日累计","过去三日累计","过去七日累计"],timer:null,mychart:null}},created(){},mounted(){this.initChart()},methods:{initChart(){this.mychart=n.S1(this.$refs.yuliang);let t={color:["#36c"],grid:{top:"10%",bottom:"10%",left:"15%",right:"1%"},tooltip:{trigger:"axis"},xAxis:{type:"category",axisLine:{show:!1,lineStyle:{color:"#fff"}},axisLabel:{color:"#fff"},data:this.ydata},yAxis:{type:"value",name:"单位：mm",minInterval:.5,axisLine:{show:!1,lineStyle:{color:"#fff"}},axisLabel:{color:"#fff",formatter:"{value} mm"},axisTick:{show:!0,interval:.5}},series:[{type:"bar",data:this.xdata,markPoint:{data:[{type:"max",name:"最大值",symbolSize:2,label:{normal:{position:"top",formatter:function(t){return t.data.value+"mm"}}}}]}}]};this.mychart.setOption(t),this.$nextTick((()=>{window.addEventListener("resize",(function(){this.mychart.resize()}))}))}}},o=l,s=e(1001),h=(0,s.Z)(o,i,r,!1,null,null,null),c=h.exports}}]);