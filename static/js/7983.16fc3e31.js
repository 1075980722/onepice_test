"use strict";(self["webpackChunkonepic"]=self["webpackChunkonepic"]||[]).push([[7983],{67983:function(e,t,o){o.r(t),o.d(t,{default:function(){return E}});var r=o(61445),i=o(21383),s=o(94848),l=(o(75430),o(8693)),n=o(74823),a=o(92454),y=o(99659),p=o(58006),u=(o(94315),o(15055),o(62269)),c=o(77623),d=o(50157),h=o(54597),S=o(36421),m=o(18678),f=o(35894),v=o(44283),b=o(82232),C=o(23706),g=o(12799),_=o(40483),k=o(10395),G=o(81082),w=o(65261),R=o(46078);const Z=["atom","xml"],P={base:_.Z,key:"type",typeMap:{"simple-line":k.Z},errorContext:"symbol"},x={base:_.Z,key:"type",typeMap:{"picture-marker":G.Z,"simple-marker":w.Z},errorContext:"symbol"},j={base:_.Z,key:"type",typeMap:{"simple-fill":R.Z},errorContext:"symbol"};let F=class extends((0,m.h)((0,b.Q)((0,f.q)((0,v.I)((0,C.M)((0,n.R)(S.Z))))))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readFeatureCollections(e,t){return t.featureCollection.layers.forEach((e=>{const t=e.layerDefinition.drawingInfo.renderer.symbol;t&&"esriSFS"===t.type&&t.outline?.style.includes("esriSFS")&&(t.outline.style="esriSLSSolid")})),t.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?(0,y.vt)(this.url,Z)||"GeoRSS":e||""}set title(e){this._set("title",e)}load(e){const t=(0,l.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(a.r9).then((()=>this._fetchService(t))).then((e=>{this.read(e,{origin:"service"})}))),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){const t=this.spatialReference,{data:o}=await(0,s["default"])(i.Z.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:(0,h.oR)(t)?void 0:t.wkid??JSON.stringify(t)},signal:e});return o}_hasGeometry(e){return this.featureCollections?.some((t=>t.featureSet?.geometryType===e&&t.featureSet.features?.length>0))??!1}};(0,r._)([(0,p.Cb)()],F.prototype,"description",void 0),(0,r._)([(0,p.Cb)()],F.prototype,"featureCollections",void 0),(0,r._)([(0,u.r)("service","featureCollections",["featureCollection.layers"])],F.prototype,"readFeatureCollections",null),(0,r._)([(0,p.Cb)({type:d.Z,json:{name:"lookAtExtent"}})],F.prototype,"fullExtent",void 0),(0,r._)([(0,p.Cb)(g.id)],F.prototype,"id",void 0),(0,r._)([(0,p.Cb)(g.rn)],F.prototype,"legendEnabled",void 0),(0,r._)([(0,p.Cb)({types:P,json:{write:!0}})],F.prototype,"lineSymbol",void 0),(0,r._)([(0,p.Cb)({type:["show","hide"]})],F.prototype,"listMode",void 0),(0,r._)([(0,p.Cb)({types:x,json:{write:!0}})],F.prototype,"pointSymbol",void 0),(0,r._)([(0,p.Cb)({types:j,json:{write:!0}})],F.prototype,"polygonSymbol",void 0),(0,r._)([(0,p.Cb)({type:["GeoRSS"]})],F.prototype,"operationalLayerType",void 0),(0,r._)([(0,p.Cb)(g.HQ)],F.prototype,"url",void 0),(0,r._)([(0,p.Cb)({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],F.prototype,"title",null),(0,r._)([(0,p.Cb)({readOnly:!0,json:{read:!1},value:"geo-rss"})],F.prototype,"type",void 0),F=(0,r._)([(0,c.j)("esri.layers.GeoRSSLayer")],F);const E=F}}]);