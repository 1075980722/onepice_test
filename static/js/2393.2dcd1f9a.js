"use strict";(self["webpackChunkonepic"]=self["webpackChunkonepic"]||[]).push([[2393],{82393:function(t,e,a){a.r(e),a.d(e,{default:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableDatatemp,"header-cell-style":{padding:0,height:".5rem",background:"#f0f2f5",color:"#606266"},height:t.tableHeight,"row-style":{height:".36000px"},"cell-style":{padding:"0rem"},border:"",stripe:""}},[t._l(t.columns,(function(t,a){return[e("el-table-column",{key:a,attrs:{fixed:t.fixed,prop:t.data,label:t.title,width:t.width,align:"center"}})]}))],2)},l=[],d={props:{tableData:{type:Array}},data(){return{tableHeight:"100%",tableDatatemp:this.$store.state.point.tableData,columns:[{fixed:"fixed",title:"序号",width:"80",data:"id"},{title:"时间",width:"150",data:"collectTime"},{title:"氨氮(mg/L)",width:"100",data:"nh3n"},{title:"总磷(mg/L)",width:"100",data:"tp"},{title:"高猛酸钾指数",width:"110",data:"codmn"},{title:"溶解氧(mg/L)",width:"110",data:"dox"},{title:"化学需氧量(mg/L)",width:"140",data:"codcr"}]}},created(){this.$store.watch((t=>t.point.tableData),(()=>{this.tableDatatemp=this.$store.state.point.tableData}))}},r=d,n=a(1001),h=(0,n.Z)(r,i,l,!1,null,"2f7a6d0c",null),c=h.exports}}]);