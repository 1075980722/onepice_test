"use strict";(self["webpackChunkonepic"]=self["webpackChunkonepic"]||[]).push([[6247],{16247:function(e,t,l){l.r(t),l.d(t,{default:function(){return h}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"treenode"},[t("el-input",{attrs:{placeholder:"输入河道名称"},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}},[t("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),t("el-tree",{ref:"tree",staticClass:"tree-line",attrs:{data:e.treedata,props:e.defaultProps,"filter-node-method":e.filterNode,"show-checkbox":"","expand-on-click-node":!1,indent:0},on:{check:e.handleCheckChange},scopedSlots:e._u([{key:"default",fn:function({node:l}){return t("span",{staticClass:"slot-t-node"},[[t("span",[e._v(e._s(l.label))])]],2)}}])})],1)},s=[],r=(l(57658),l(39264)),n=l(77335),o={components:{},watch:{filterText(e){this.$refs.tree.filter(e)}},data(){return{filterText:"",treedata:[],defaultProps:{children:"children",label:"label"}}},mounted(){this.handleGetHeliuData()},methods:{filterNode(e,t){return!e||-1!==t.label.indexOf(e)},async handleCheckChange(e,t){if(console.log(e,t),t.checkedNodes.length>0){let e={ids:[]};t.checkedNodes&&null!=t.checkedNodes?t.checkedNodes.forEach((t=>{e.ids.push(t.code)})):e={};let l=await(0,n.KL)(e),a=l.result;a.forEach((e=>{console.log(1111,e);let t=[];t.push(e.children);let l=[];console.log(111,t),t.forEach((e=>{e.forEach((e=>{let t=JSON.parse(e.shape);const a=new r.Z({geometry:{type:"polygon",rings:t.coordinates},symbol:{type:"simple-fill",color:[86,194,249],outline:{color:[5,93,181,.5],width:.5}},attributes:e});l.push(a)}))})),this.$parent.graphicslayer.applyEdits({addFeatures:l}).then((e=>{console.log(`deleteFeatures:${e.deleteFeatureResults.length}`),console.log(`addFeatures:${e.addFeatureResults.length}`)}))}))}else this.$nextTick((()=>{this.$parent.graphicslayer.queryFeatures().then((e=>{const t={deleteFeatures:e.features};this.$parent.graphicslayer.applyEdits(t).then((e=>{e.deleteFeatureResults.length>0&&console.log(e.deleteFeatureResults.length,"features have been removed")}))}))}))},async handleGetHeliuData(){let e=await(0,n.wB)(),t=e.result,l=1;t.forEach((e=>{let t={};t.id=l++,t.label=e.area,t.children=[];let a=8;e.children.forEach((e=>{let l={};l.id=++a,l.label=e.name,l.code=e.id,t.children.push(l)})),this.treedata.push(t)}))}}},c=o,i=l(1001),d=(0,i.Z)(c,a,s,!1,null,null,null),h=d.exports}}]);