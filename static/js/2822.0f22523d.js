"use strict";(self["webpackChunkonepic"]=self["webpackChunkonepic"]||[]).push([[2822],{72822:function(e,a,r){r.r(a),r.d(a,{fromUrl:function(){return d}});var t=r(22130),n=r(8693),s=r(99659),l=r(53317),i=r(49093),u=r(74220),y=r(6175),o=r(40742);const c={FeatureLayer:!0,SceneLayer:!0};async function d(e){const a=e.properties?.customParameters,t=await w(e.url,a),n={...e.properties,url:e.url};if(!t.sublayerIds)return null!=t.layerOrTableId&&(n.layerId=t.layerOrTableId,n.sourceJSON=t.sourceJSON),new t.Constructor(n);const s=new(0,(await r.e(7510).then(r.bind(r,67510))).default)({title:t.parsedUrl.title});return b(s,t,n),s}function f(e,a){return e?e.find((e=>e.id===a)):null}function b(e,a,r){function t(e,t){const s={...r,layerId:e,sublayerTitleMode:"service-name"};return(0,n.pC)(t)&&(s.sourceJSON=t),new a.Constructor(s)}a.sublayerIds.forEach((r=>{const n=t(r,f(a.sublayerInfos,r));e.add(n)})),a.tableIds.forEach((r=>{const n=t(r,f(a.tableInfos,r));e.tables.add(n)}))}async function w(e,a){let r=(0,l.Qc)(e);if((0,n.Wi)(r)&&(r=await h(e,a)),(0,n.Wi)(r))throw new t.Z("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:s,sublayer:i}=r;let y;const d={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(s){case"MapServer":y=null!=i?"FeatureLayer":await S(e,a)?"TileLayer":"MapImageLayer";break;case"ImageServer":{const r=await(0,o.T)(e,{customParameters:a}),{tileInfo:t,cacheType:n}=r;y=t?"LERC"!==t?.format?.toUpperCase()||n&&"elevation"!==n.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const e=await(0,o.T)(r.url.path,{customParameters:a});if(y="SceneLayer",e){const a=e?.layers;if("Voxel"===e?.layerType)y="VoxelLayer";else if(a?.length){const e=a[0]?.layerType;null!=e&&null!=u.fb[e]&&(y=u.fb[e])}}break}default:y=d[s]}const f="FeatureServer"===s,b={parsedUrl:r,Constructor:null,layerOrTableId:f?i:void 0,sublayerIds:null,tableIds:null};if(c[y]&&null==i){const r=await p(e,s,a);f&&(b.sublayerInfos=r.layerInfos,b.tableInfos=r.tableInfos),1!==r.layerIds.length+r.tableIds.length?(b.sublayerIds=r.layerIds,b.tableIds=r.tableIds):f&&(b.layerOrTableId=r.layerIds[0]??r.tableIds[0],b.sourceJSON=r.layerInfos?.[0]??r.tableInfos?.[0])}return b.Constructor=await L(y),b}async function h(e,a){const r=await(0,o.T)(e,{customParameters:a});let t=null,i=null;const u=r.type;if("Feature Layer"===u||"Table"===u?(t="FeatureServer",i=r.id??null):"indexedVector"===u?t="VectorTileServer":r.hasOwnProperty("mapName")?t="MapServer":r.hasOwnProperty("bandCount")&&r.hasOwnProperty("pixelSizeX")?t="ImageServer":r.hasOwnProperty("maxRecordCount")&&r.hasOwnProperty("allowGeometryUpdates")?t="FeatureServer":r.hasOwnProperty("streamUrls")?t="StreamServer":m(r)?(t="SceneServer",i=r.id):r.hasOwnProperty("layers")&&m(r.layers?.[0])&&(t="SceneServer"),!t)return null;const y=null!=i?(0,l.DR)(e):null;return{title:(0,n.pC)(y)&&r.name||(0,s.vt)(e),serverType:t,sublayer:i,url:{path:(0,n.pC)(y)?y.serviceUrl:(0,s.mN)(e).path}}}function m(e){return null!=e&&e.hasOwnProperty("store")&&e.hasOwnProperty("id")&&"number"==typeof e.id}async function p(e,a,r){let t,n=!1;if("FeatureServer"===a){const a=await(0,i.V)(e,{customParameters:r});n=!!a.layersJSON,t=a.layersJSON||a.serviceJSON}else t=await(0,o.T)(e,{customParameters:r});const s=t?.layers,l=t?.tables;return{layerIds:s?.map((e=>e.id)).reverse()||[],tableIds:l?.map((e=>e.id)).reverse()||[],layerInfos:n?s:[],tableInfos:n?l:[]}}async function L(e){return(0,y.T[e])()}async function S(e,a){return(await(0,o.T)(e,{customParameters:a})).tileInfo}},49093:function(e,a,r){r.d(a,{V:function(){return n}});var t=r(40742);async function n(e,a){const r=await(0,t.T)(e,a);r.layers=r.layers.filter(s);const n={serviceJSON:r};if((r.currentVersion??0)<10.5)return n;const l=await(0,t.T)(e+"/layers",a);return n.layersJSON={layers:l.layers.filter(s),tables:l.tables},n}function s(e){return!e.type||"Feature Layer"===e.type}},6175:function(e,a,r){r.d(a,{T:function(){return t}});const t={BingMapsLayer:async()=>(await r.e(3451).then(r.bind(r,3451))).default,BuildingSceneLayer:async()=>(await Promise.all([r.e(5741),r.e(3892),r.e(9018),r.e(5763),r.e(968)]).then(r.bind(r,90968))).default,CSVLayer:async()=>(await r.e(2074).then(r.bind(r,32074))).default,DimensionLayer:async()=>(await r.e(4323).then(r.bind(r,44323))).default,ElevationLayer:async()=>(await r.e(3906).then(r.bind(r,13906))).default,FeatureLayer:async()=>(await Promise.resolve().then(r.bind(r,65380))).default,GeoJSONLayer:async()=>(await r.e(5270).then(r.bind(r,85270))).default,GeoRSSLayer:async()=>(await r.e(7983).then(r.bind(r,67983))).default,GroupLayer:async()=>(await r.e(7510).then(r.bind(r,67510))).default,ImageryLayer:async()=>(await Promise.all([r.e(4143),r.e(4111),r.e(887),r.e(6903)]).then(r.bind(r,46903))).default,ImageryTileLayer:async()=>(await Promise.all([r.e(4143),r.e(3225),r.e(4111),r.e(1490),r.e(887),r.e(620)]).then(r.bind(r,50620))).default,IntegratedMeshLayer:async()=>(await Promise.all([r.e(5741),r.e(1916)]).then(r.bind(r,1916))).default,KMLLayer:async()=>(await r.e(7937).then(r.bind(r,17937))).default,LineOfSightLayer:async()=>(await r.e(4852).then(r.bind(r,54852))).default,MapImageLayer:async()=>(await Promise.resolve().then(r.bind(r,31660))).default,MapNotesLayer:async()=>(await r.e(2601).then(r.bind(r,42601))).default,MediaLayer:async()=>(await r.e(8834).then(r.bind(r,98834))).default,OGCFeatureLayer:async()=>(await r.e(5767).then(r.bind(r,45767))).default,OpenStreetMapLayer:async()=>(await r.e(1748).then(r.bind(r,41748))).default,OrientedImageryLayer:async()=>(await r.e(4842).then(r.bind(r,54842))).default,PointCloudLayer:async()=>(await Promise.all([r.e(5741),r.e(8527)]).then(r.bind(r,88527))).default,RouteLayer:async()=>(await Promise.all([r.e(5016),r.e(4398)]).then(r.bind(r,34398))).default,SceneLayer:async()=>(await Promise.all([r.e(5741),r.e(3892),r.e(9018),r.e(5763),r.e(1746)]).then(r.bind(r,96764))).default,StreamLayer:async()=>(await r.e(2964).then(r.bind(r,62964))).default,SubtypeGroupLayer:async()=>(await r.e(8892).then(r.bind(r,18892))).default,TileLayer:async()=>(await r.e(3832).then(r.bind(r,3832))).default,UnknownLayer:async()=>(await r.e(4837).then(r.bind(r,14837))).default,UnsupportedLayer:async()=>(await r.e(5881).then(r.bind(r,85881))).default,VectorTileLayer:async()=>(await Promise.all([r.e(128),r.e(3114)]).then(r.bind(r,7170))).default,VoxelLayer:async()=>(await Promise.all([r.e(5741),r.e(3177)]).then(r.bind(r,83177))).default,WFSLayer:async()=>(await Promise.all([r.e(9968),r.e(471)]).then(r.bind(r,70471))).default,WMSLayer:async()=>(await Promise.resolve().then(r.bind(r,79190))).default,WMTSLayer:async()=>(await r.e(1717).then(r.bind(r,51717))).default,WebTileLayer:async()=>(await r.e(3313).then(r.bind(r,23313))).default}},40742:function(e,a,r){r.d(a,{T:function(){return n}});var t=r(94848);async function n(e,a){const{data:r}=await(0,t["default"])(e,{responseType:"json",query:{f:"json",...a?.customParameters,token:a?.apiKey}});return r}}}]);