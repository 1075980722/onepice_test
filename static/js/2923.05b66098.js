"use strict";(self["webpackChunkonepic"]=self["webpackChunkonepic"]||[]).push([[2923],{32923:function(t,e,a){a.r(e),a.d(e,{default:function(){return h}});var i=function(){var t=this,e=t._self._c;return e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableDatatemp,"header-cell-style":{padding:0,height:"40px",background:"#f0f2f5",color:"#606266",fontSize:"14px"},height:t.tableHeight,"row-style":{height:".36px"},"cell-style":{padding:"0rem"},border:"",stripe:""}},[t._l(t.columns,(function(t,a){return[e("el-table-column",{key:a,attrs:{fixed:t.fixed,prop:t.data,label:t.title,width:t.width,align:"center"}})]}))],2)},l=[],n={data(){return{tableHeight:"100%",tableDatatemp:this.$store.state.point.tableData,columns:[{title:"序号",width:"80",data:"id"},{title:"时间",width:"160",data:"collectTime"},{title:"雨量(mm)",width:"100",data:"shiDuanYuLiang"}]}},created(){this.$store.watch((t=>t.point.tableData),(()=>{this.tableDatatemp=this.$store.state.point.tableData}))}},r=n,d=a(1001),s=(0,d.Z)(r,i,l,!1,null,"38d2fad6",null),h=s.exports}}]);