"use strict";(self["webpackChunkonepic"]=self["webpackChunkonepic"]||[]).push([[902],{30902:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"popupchart"},[e("div",{staticClass:"top"},[e("span",[t._v("时间")]),e("el-select",{attrs:{placeholder:"请选择"},on:{change:t.handleChangeData},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}},t._l(t.options,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),e("div",{staticClass:"center"},[e("div",{ref:"shuiwei",staticStyle:{width:"580px",height:"320px"}})]),e("div",{staticClass:"footer"},[e("p",[t._v("备注:"+t._s(t.remark))])])])},s=[],o=(a(57658),a(11117)),l=a(76174),h={name:"popupChart",props:{chartData:{type:Object},query:{type:Object}},data(){return{mychart:"",option:{},remark:"",options:[{value:"6",label:"6小时"},{value:"12",label:"12小时"},{value:"24",label:"一天"},{value:"48",label:"二天"},{value:"72",label:"三天"}],time:"24",chartDatatemp:[],code:this.query.code,type:this.query.type}},watch:{chartData:{handler(t){this.$nextTick((()=>{this.chartDatatemp=t,""!=this.mychart&&(this.mychart.clear(this.option),this.initShuiweiChart())}))},deep:!0,immediate:!0}},created(){},mounted(){this.$nextTick((()=>{this.mychart=o.S1(this.$refs.shuiwei)})),this.initShuiweiChart()},methods:{initShuiweiChart(){this.$nextTick((()=>{this.mychart=o.S1(this.$refs.shuiwei),this.option={backgroundColor:"#fff",tooltip:{trigger:"axis"},grid:{top:"15%",left:"7%",right:"5%",bottom:"8%"},xAxis:[{type:"category",color:"#59588D",axisLine:{show:!0},axisLabel:{color:"#282828"},splitLine:{},axisTick:{show:!0},data:this.chartDatatemp.xData}],yAxis:[{type:"value",name:"水位",min:0,max:8,splitNumber:4,axisLine:{show:!0},axisLabel:{show:!0,textStyle:{color:"#737373"}},axisTick:{show:!0},splitLine:{lineStyle:{color:"rgba(131,101,101,0.2)"}}}],series:[{name:"水位",type:"line",showAllSymbol:!0,symbol:"circle",symbolSize:10,lineStyle:{normal:{color:"#48B3FF"}},label:{show:!1,position:"top",textStyle:{color:"#48B3FF"}},itemStyle:{color:"#FFF",borderColor:"#48B3FF",borderWidth:2},tooltip:{show:!0},areaStyle:{normal:{color:new o.Q.o(0,0,0,1,[{offset:0,color:"rgba(195,230,255,1)"},{offset:1,color:"rgba(195,230,255,0.1)"}],!1),shadowColor:"rgba(195,230,255,0.1)",shadowBlur:20}},data:this.chartDatatemp.yData1}]},this.mychart.setOption(this.option),this.$nextTick((()=>{window.addEventListener("resize",(function(){this.mychart.resize()}))}))}))},handleChangeData(t){this.handleData(t)},async handleData(t){const e=this.formatDateTime(new Date(new Date((new Date).getTime()-60*t*60*1e3))),a=this.formatDateTime(new Date((new Date).getTime()));let i={startTime:e,endTime:a,code:this.code,type:this.type},s=await(0,l._2)(i),o=s.result;this.$store.state.point.tableData=[],this.chartData={xData:[],yData1:[]},o.shuiQingHisInfoVo.shuiQingDataVoList.forEach(((t,e)=>{let a={};a.id=e+1,a.collectTime=null==t.collectTime?"-":t.collectTime,a.shuiWei=null==t.shuiWei?"-":t.shuiWei,this.chartData.xData.push(t.collectTime),this.chartData.yData1.push(t.shuiWei),this.$store.dispatch("updateTableData",a)}))}}},r=h,n=a(1001),c=(0,n.Z)(r,i,s,!1,null,"3e267362",null),p=c.exports}}]);