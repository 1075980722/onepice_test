"use strict";(self["webpackChunkonepic"]=self["webpackChunkonepic"]||[]).push([[3947],{93947:function(a,t,e){e.r(t),e.d(t,{default:function(){return u}});var l=function(){var a=this,t=a._self._c;return t("div",{staticClass:"gatetable"},[t("el-radio-group",{staticStyle:{"margin-bottom":"30px"},on:{change:a.handleSwitch},model:{value:a.tabPosition,callback:function(t){a.tabPosition=t},expression:"tabPosition"}},[t("el-radio-button",{attrs:{label:"all"}},[a._v("全部")]),t("el-radio-button",{attrs:{label:"1"}},[a._v("河道管理处分控中心")]),t("el-radio-button",{attrs:{label:"2"}},[a._v("瓜洲泵站分控中心")]),t("el-radio-button",{attrs:{label:"3"}},[a._v("广陵区分控中心")]),t("el-radio-button",{attrs:{label:"4"}},[a._v("邗江区分控中心")]),t("el-radio-button",{attrs:{label:"5"}},[a._v("开发区分控中心")]),t("el-radio-button",{attrs:{label:"6"}},[a._v("瘦西湖景区分控中心")])],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:a.loading,expression:"loading"}],attrs:{data:a.tableData,stripe:"",height:"500",align:"center"}},[a._l(a.columns,(function(a,e){return[t("el-table-column",{key:e,attrs:{fixed:a.fixed,prop:a.data,label:a.title,width:a.width,align:"center"}})]}))],2)],1)},i=[],n=(e(57658),e(36964)),o={data(){return{tabPosition:"all",tableData:[],loading:!1,columns:[{fixed:"fixed",title:"水闸名称",data:"name"},{title:"时间",width:105,data:"collectTime"},{title:"闸上水位(m)",data:"shangShuiWei"},{title:"闸下水位(m)",data:"xiaShuiWei"},{title:"过闸流量(m³/s)",data:"zhaGuoLiuLiang"}]}},mounted(){this.handleTableData()},methods:{handleSwitch(a){switch(a){case"all":this.handleTableData();break;case"1":this.handleTableData(a);break;case"2":this.handleTableData(a);break;case"3":this.handleTableData(a);break;case"4":this.handleTableData(a);break;case"5":this.handleTableData(a);break;case"6":this.handleTableData(a);break;default:break}},async handleTableData(a){this.loading=!0,this.tableData=[];let t=await(0,n.Jc)({controlType:a});t.result.forEach((a=>{let t={},{collectTime:e,shangShuiWei:l,xiaShuiWei:i,zhaGuoLiuLiang:n}=a.zhaBengWaterInfoVo,{name:o}=a.zhaBengBaseInfoVo;t.name=null==o?"—":o,t.collectTime=null==e?"—":e,t.shangShuiWei=null==l?"—":l,t.xiaShuiWei=null==i?"—":i,t.zhaGuoLiuLiang=null==n?"—":n,this.tableData.push(t)})),200===t.code&&(this.loading=!1)}}},s=o,h=e(1001),r=(0,h.Z)(s,l,i,!1,null,null,null),u=r.exports}}]);