"use strict";(self["webpackChunkonepic"]=self["webpackChunkonepic"]||[]).push([[5881],{85881:function(e,t,r){r.r(t),r.d(t,{default:function(){return c}});var s=r(61445),o=r(22130),n=r(74823),i=r(3047),p=r(58006),u=(r(94315),r(15055),r(77623)),l=r(36421),d=r(44283);let a=class extends((0,d.I)((0,n.R)(l.Z))){constructor(e){super(e),this.resourceInfo=null,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise(((e,t)=>{(0,i.Os)((()=>{const e=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let r="Unsupported layer type";e&&(r+=" "+e),t(new o.Z("layer:unsupported-layer-type",r,{layerType:e}))}))})))}read(e,t){const r={resourceInfo:e};null!=e.id&&(r.id=e.id),null!=e.title&&(r.title=e.title),super.read(r,t)}write(e){return Object.assign(e||{},this.resourceInfo,{id:this.id})}};(0,s._)([(0,p.Cb)({readOnly:!0})],a.prototype,"resourceInfo",void 0),(0,s._)([(0,p.Cb)({type:["show","hide"]})],a.prototype,"listMode",void 0),(0,s._)([(0,p.Cb)({json:{read:!1},readOnly:!0,value:"unsupported"})],a.prototype,"type",void 0),a=(0,s._)([(0,u.j)("esri.layers.UnsupportedLayer")],a);const c=a}}]);