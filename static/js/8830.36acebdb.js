"use strict";(self["webpackChunkonepic"]=self["webpackChunkonepic"]||[]).push([[8830],{78830:function(t,e,a){a.r(e),a.d(e,{default:function(){return s}});var l=function(){var t=this,e=t._self._c;return e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableDatatemp,"header-cell-style":{padding:0,height:".5rem",background:"#f0f2f5",color:"#606266"},height:t.tableHeight,"row-style":{height:".36000px"},"cell-style":{padding:"0rem"},border:""}},[t._l(t.columns,(function(t,a){return[e("el-table-column",{key:a,attrs:{fixed:t.fixed,prop:t.data,label:t.title,width:t.width,align:"center"}})]}))],2)},i=[],n={data(){return{tableHeight:"100%",tableDatatemp:this.$store.state.point.tableData,columns:[{title:"序号",width:"80",data:"id"},{title:"时间",width:"160",data:"collectTime"},{title:"蒸发量(mm)",width:"100",data:"zhengfl"}]}},created(){this.$store.watch((t=>t.point.tableData),(()=>{this.tableDatatemp=this.$store.state.point.tableData}))}},r=n,d=a(1001),h=(0,d.Z)(r,l,i,!1,null,"2a986812",null),s=h.exports}}]);