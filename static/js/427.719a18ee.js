"use strict";(self["webpackChunkonepic"]=self["webpackChunkonepic"]||[]).push([[427],{60427:function(e,t,i){i.d(t,{q:function(){return b}});i(57658);var s=i(15055),r=i(22130),n=i(86232),a=i(8693),u=i(76395),o=i(92454),l=i(61293),c=i(37740),h=i(74440),p=i(43392),f=i(90421),y=i(11289),d=i(54597),m=i(76338),g=i(47914),S=i(65341),_=i(64550),x=i(94872),w=i(25498),R=i(57149),F=i(1029),Q=i(86622),I=i(21361),C=i(7106);function E(e){return null!=e&&e.every((e=>"exceedslimit"!==e.statisticType))}const v="feature-store:unsupported-query";const A=new u.WJ(2e6);let P=0;class b{constructor(e){this._geometryQueryCache=null,this._changeHandle=null,this.capabilities={query:_.g},this.geometryType=e.geometryType,this.hasM=!!e.hasM,this.hasZ=!!e.hasZ,this.objectIdField=e.objectIdField,this.spatialReference=e.spatialReference,this.definitionExpression=e.definitionExpression,this.featureStore=e.featureStore,this.aggregateAdapter=e.aggregateAdapter,this._changeHandle=this.featureStore.events.on("changed",(()=>this.clearCache())),this.timeInfo=e.timeInfo,e.cacheSpatialQueries&&(this._geometryQueryCache=new u.Xq(P+++"$$",A)),this.fieldsIndex=new Q.Z(e.fields),e.scheduler&&e.priority&&(this._frameTask=e.scheduler.registerTask(e.priority))}destroy(){this._frameTask=(0,a.hw)(this._frameTask),this.clearCache(),(0,a.SC)(this._geometryQueryCache),this._changeHandle=(0,a.hw)(this._changeHandle),(0,a.SC)(this.fieldsIndex)}get featureAdapter(){return this.featureStore.featureAdapter}clearCache(){this._geometryQueryCache?.clear(),this._allFeaturesPromise=null,this._timeExtentPromise=null}async executeQuery(e,t){try{return(await this._executeQuery(e,{},t)).createQueryResponse()}catch(i){if(i!==F.vF)throw i;return new x.y([],e,this).createQueryResponse()}}async executeQueryForCount(e={},t){try{return(await this._executeQuery(e,{returnGeometry:!1,returnCentroid:!1,outSR:null},t)).createQueryResponseForCount()}catch(i){if(i!==F.vF)throw i;return 0}}async executeQueryForExtent(e,t){const i=e.outSR;try{const s=await this._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},t),r=s.size;return r?{count:r,extent:await this._getBounds(s.items,s.spatialReference,i||this.spatialReference)}:{count:0,extent:null}}catch(s){if(s===F.vF)return{count:0,extent:null};throw s}}async executeQueryForIds(e,t){return this.executeQueryForIdSet(e,t).then((e=>Array.from(e)))}async executeQueryForIdSet(e,t){try{const i=await this._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},t),s=i.items,r=new Set;return await this._reschedule((()=>{for(const e of s)r.add(i.featureAdapter.getObjectId(e))}),t),r}catch(i){if(i===F.vF)return new Set;throw i}}async executeQueryForSnapping(e,t){const{point:i,distance:s,types:r}=e;if(r===x.r.NONE)return{candidates:[]};const n=await this._reschedule((()=>this._checkQuerySupport(e.query)),t),u=!(0,d.fS)(i.spatialReference,this.spatialReference);u&&await(0,S._W)(i.spatialReference,this.spatialReference);const o="number"==typeof s?s:s.x,l="number"==typeof s?s:s.y,c={xmin:i.x-o,xmax:i.x+o,ymin:i.y-l,ymax:i.y+l,spatialReference:i.spatialReference},h=u?(0,S.iV)(c,this.spatialReference):c;if(!h)return{candidates:[]};const p=(await(0,y.aX)((0,f.im)(i),null,{signal:t}))[0],m=(await(0,y.aX)((0,f.im)(h),null,{signal:t}))[0];if((0,a.Wi)(p)||(0,a.Wi)(m))return{candidates:[]};const g=new x.y(await this._reschedule((()=>this._searchFeatures(this._getQueryBBoxes(m.toJSON()))),t),n,this);await this._reschedule((()=>this._executeObjectIdsQuery(g)),t),await this._reschedule((()=>this._executeTimeQuery(g)),t),await this._reschedule((()=>this._executeAttributesQuery(g)),t);const _=p.toJSON(),w=u?(0,S.iV)(_,this.spatialReference):_,R=u?Math.max(h.xmax-h.xmin,h.ymax-h.ymin)/2:s;return g.createSnappingResponse({...e,point:w,distance:R},i.spatialReference)}async executeQueryForLatestObservations(e,t){if(!this.timeInfo||!this.timeInfo.trackIdField)throw new r.Z(v,"Missing timeInfo or timeInfo.trackIdField",{query:e,timeInfo:this.timeInfo});try{const i=await this._executeQuery(e,{},t);return await this._reschedule((()=>this._filterLatest(i)),t),i.createQueryResponse()}catch(i){if(i!==F.vF)throw i;return new x.y([],e,this).createQueryResponse()}}async executeQueryForSummaryStatistics(e={},t,i){const{field:s,normalizationField:r,valueExpression:n}=t;return(await this._getQueryEngineResultForStats(e,{field:s,normalizationField:r,valueExpression:n},i)).createSummaryStatisticsResponse(t)}async executeQueryForUniqueValues(e={},t,i){const{field:s,field2:r,field3:n,valueExpression:a}=t;return(await this._getQueryEngineResultForStats(e,{field:s,field2:r,field3:n,valueExpression:a},i)).createUniqueValuesResponse(t)}async executeQueryForClassBreaks(e={},t,i){const{field:s,normalizationField:r,valueExpression:n}=t;return(await this._getQueryEngineResultForStats(e,{field:s,normalizationField:r,valueExpression:n},i)).createClassBreaksResponse(t)}async executeQueryForHistogram(e={},t,i){const{field:s,normalizationField:r,valueExpression:n}=t;return(await this._getQueryEngineResultForStats(e,{field:s,normalizationField:r,valueExpression:n},i)).createHistogramResponse(t)}async fetchRecomputedExtents(e){const[t,i]=await Promise.all(["getFullExtent"in this.featureStore&&this.featureStore.getFullExtent?Promise.resolve(this.featureStore.getFullExtent(this.spatialReference)):this._getBounds(await this._getAllFeatures(),this.spatialReference,this.spatialReference),(0,a.pC)(this._timeExtentPromise)?this._timeExtentPromise:this._timeExtentPromise=(0,R.R)(this.timeInfo,this.featureStore)]);return(0,o.k_)(e),{fullExtent:t,timeExtent:i}}async _getBounds(e,t,i){const s=(0,c.t8)((0,c.Ue)(),c.Gv);await this.featureStore.forEachBounds(e,(e=>(0,c.TC)(s,e)));const r={xmin:s[0],ymin:s[1],xmax:s[3],ymax:s[4],spatialReference:(0,F.S2)(this.spatialReference)};this.hasZ&&isFinite(s[2])&&isFinite(s[5])&&(r.zmin=s[2],r.zmax=s[5]);const n=(0,S.iV)(r,t,i);if(n.spatialReference=(0,F.S2)(i),n.xmax-n.xmin==0){const e=(0,l.c9)(n.spatialReference);n.xmin-=e,n.xmax+=e}if(n.ymax-n.ymin==0){const e=(0,l.c9)(n.spatialReference);n.ymin-=e,n.ymax+=e}if(this.hasZ&&null!=n.zmin&&null!=n.zmax&&n.zmax-n.zmin==0){const e=(0,l.c9)(n.spatialReference);n.zmin-=e,n.zmax+=e}return n}async _schedule(e,t){return(0,a.pC)(this._frameTask)?this._frameTask.schedule(e,t):e(C.G5)}async _reschedule(e,t){return(0,a.pC)(this._frameTask)?this._frameTask.reschedule(e,t):e(C.G5)}async _getAllFeaturesQueryEngineResult(e){return new x.y(await this._getAllFeatures(),e,this)}async _getAllFeatures(){if((0,a.Wi)(this._allFeaturesPromise)){const e=[];this._allFeaturesPromise=(async()=>{await this.featureStore.forEach((t=>e.push(t)))})().then((()=>e))}const e=this._allFeaturesPromise,t=await e;return e===this._allFeaturesPromise?t.slice():this._getAllFeatures()}async _executeQuery(e,t,i){e=(0,n.d9)(e),e=await this._schedule((()=>(0,F.Up)(e,this.definitionExpression,this.spatialReference)),i),e=await this._reschedule((()=>this._checkQuerySupport(e)),i),e={...e,...t};const s=await this._reschedule((()=>this._executeSceneFilterQuery(e,i)),i),r=await this._reschedule((()=>this._executeGeometryQuery(e,s,i)),i);return await this._reschedule((()=>this._executeAggregateIdsQuery(r)),i),await this._reschedule((()=>this._executeObjectIdsQuery(r)),i),await this._reschedule((()=>this._executeTimeQuery(r)),i),await this._reschedule((()=>this._executeAttributesQuery(r)),i),r}async _executeSceneFilterQuery(e,t){if((0,a.Wi)(e.sceneFilter))return null;const{outSR:i,returnGeometry:s,returnCentroid:r}=e,n=this.featureStore.featureSpatialReference,u=e.sceneFilter.geometry,o=(0,a.Wi)(n)||(0,d.fS)(n,u.spatialReference)?u:(0,S.iV)(u,n);if(!o)return null;const l=s||r,c=(0,d.JY)(i)&&!(0,d.fS)(this.spatialReference,i)&&l?async e=>this._project(e,i):e=>e,h=this.featureAdapter,p=await this._reschedule((()=>this._searchFeatures(this._getQueryBBoxes(o))),t);if("disjoint"===e.sceneFilter.spatialRelationship){if(!p.length)return null;const i=new Set;for(const e of p)i.add(h.getObjectId(e));const s=await this._reschedule((()=>this._getAllFeatures()),t),r=await this._reschedule((async()=>{const r=await(0,w.cW)("esriSpatialRelDisjoint",o,this.geometryType,this.hasZ,this.hasM),n=e=>!i.has(h.getObjectId(e))||r(h.getGeometry(e)),a=await this._runSpatialFilter(s,n,t);return new x.y(a,e,this)}),t);return c(r)}if(!p.length)return new x.y([],e,this);if(this._canExecuteSinglePass(o,e))return c(new x.y(p,e,this));const f=await(0,w.cW)("esriSpatialRelContains",o,this.geometryType,this.hasZ,this.hasM),y=await this._runSpatialFilter(p,(e=>f(h.getGeometry(e))),t);return c(new x.y(y,e,this))}async _executeGeometryQuery(e,t,i){if((0,a.pC)(t)&&0===t.items.length)return t;e=(0,a.pC)(t)?t.query:e;const{geometry:r,outSR:n,spatialRel:u,returnGeometry:o,returnCentroid:l}=e,c=this.featureStore.featureSpatialReference,h=!r||(0,a.Wi)(c)||(0,d.fS)(c,r.spatialReference)?r:(0,S.iV)(r,c),p=o||l,f=(0,d.JY)(n)&&!(0,d.fS)(this.spatialReference,n),y=this._geometryQueryCache&&(0,a.Wi)(t)?f&&p?JSON.stringify({originalFilterGeometry:r,spatialRelationship:u,outSpatialReference:n}):JSON.stringify({originalFilterGeometry:r,spatialRelationship:u}):null,m=y?this._geometryQueryCache.get(y):null;if((0,a.pC)(m))return new x.y(m,e,this);const g=async e=>(f&&p&&await this._project(e,n),y&&this._geometryQueryCache.put(y,e.items,e.items.length+1),e);if(!h)return g((0,a.pC)(t)?t:await this._getAllFeaturesQueryEngineResult(e));const _=this.featureAdapter;let R=await this._reschedule((()=>this._searchFeatures(this._getQueryBBoxes(r))),i);if("esriSpatialRelDisjoint"===u){if(!R.length)return g((0,a.pC)(t)?t:await this._getAllFeaturesQueryEngineResult(e));const s=new Set;for(const e of R)s.add(_.getObjectId(e));const r=(0,a.pC)(t)?t.items:await this._reschedule((()=>this._getAllFeatures()),i),n=await this._reschedule((async()=>{const t=await(0,w.cW)(u,h,this.geometryType,this.hasZ,this.hasM),n=e=>!s.has(_.getObjectId(e))||t(_.getGeometry(e)),a=await this._runSpatialFilter(r,n,i);return new x.y(a,e,this)}),i);return g(n)}if((0,a.pC)(t)){const e=new s.SO;R=R.filter((i=>(0,s.cq)(t.items,i,t.items.length,e)>=0))}if(!R.length){const t=new x.y([],e,this);return y&&this._geometryQueryCache.put(y,t.items,1),t}if(this._canExecuteSinglePass(h,e))return g(new x.y(R,e,this));const F=await(0,w.cW)(u,h,this.geometryType,this.hasZ,this.hasM),Q=await this._runSpatialFilter(R,(e=>F(_.getGeometry(e))),i);return g(new x.y(Q,e,this))}_executeAggregateIdsQuery(e){if(0===e.items.length||!e.query.aggregateIds||!e.query.aggregateIds.length||(0,a.Wi)(this.aggregateAdapter))return;const t=new Set;for(const s of e.query.aggregateIds)this.aggregateAdapter.getFeatureObjectIds(s).forEach((e=>t.add(e)));const i=this.featureAdapter.getObjectId;e.items=e.items.filter((e=>t.has(i(e))))}_executeObjectIdsQuery(e){if(0===e.items.length||!e.query.objectIds||!e.query.objectIds.length)return;const t=new Set(e.query.objectIds),i=this.featureAdapter.getObjectId;e.items=e.items.filter((e=>t.has(i(e))))}_executeTimeQuery(e){if(0===e.items.length)return;const t=(0,R.y)(this.timeInfo,e.query.timeExtent,this.featureAdapter);(0,a.Wi)(t)||(e.items=e.items.filter(t))}_executeAttributesQuery(e){if(0===e.items.length)return;const t=(0,g.Jc)(e.query.where,this.fieldsIndex);if(t){if(!t.isStandardized)throw new TypeError("Where clause is not standardized");e.items=e.items.filter((e=>t.testFeature(e,this.featureAdapter)))}}async _runSpatialFilter(e,t,i){if(!t)return e;if((0,a.Wi)(this._frameTask))return e.filter((e=>t(e)));let s=0;const r=new Array,n=async a=>{for(;s<e.length;){const u=e[s++];t(u)&&(r.push(u),a.madeProgress()),a.done&&await this._reschedule((e=>n(e)),i)}};return this._reschedule((e=>n(e)),i).then((()=>r))}_filterLatest(e){const{trackIdField:t,startTimeField:i,endTimeField:s}=this.timeInfo,r=s||i,n=new Map,a=this.featureAdapter.getAttribute;for(const u of e.items){const e=a(u,t),i=a(u,r),s=n.get(e);(!s||i>a(s,r))&&n.set(e,u)}e.items=Array.from(n.values())}_canExecuteSinglePass(e,t){const{spatialRel:i}=t;return(0,w.hN)(e)&&("esriSpatialRelEnvelopeIntersects"===i||"esriGeometryPoint"===this.geometryType&&("esriSpatialRelIntersects"===i||"esriSpatialRelContains"===i||"esriSpatialRelWithin"===i))}async _project(e,t){if(!t||(0,d.fS)(this.spatialReference,t))return e;const i=this.featureAdapter,s=await(0,S.oj)(e.items.map((e=>(0,F.Op)(this.geometryType,this.hasZ,this.hasM,i.getGeometry(e)))),this.spatialReference,t);return e.items=s.map(((t,s)=>i.cloneWithGeometry(e.items[s],(0,m.GH)(t,this.hasZ,this.hasM)))),e}_getQueryBBoxes(e){if((0,w.hN)(e)){if((0,f.YX)(e))return[(0,h.al)(e.xmin,e.ymin,e.xmax,e.ymax)];if((0,f.oU)(e))return e.rings.map((e=>(0,h.al)(Math.min(e[0][0],e[2][0]),Math.min(e[0][1],e[2][1]),Math.max(e[0][0],e[2][0]),Math.max(e[0][1],e[2][1]))))}return[(0,p.$P)((0,h.Ue)(),e)]}async _searchFeatures(e){const t=new Set;await Promise.all(e.map((e=>this.featureStore.forEachInBounds(e,(e=>t.add(e))))));const i=Array.from(t.values());return t.clear(),i}async _checkStatisticsSupport(e,t){if((e.distance??0)<0||null!=e.geometryPrecision||e.multipatchOption||e.pixelSize||e.relationParam||e.text||e.outStatistics||e.groupByFieldsForStatistics||e.having||e.orderByFields)throw new r.Z(v,"Unsupported query options",{query:e});return this._checkAttributesQuerySupport(e),Promise.all([this._checkStatisticsParamsSupport(t),(0,w.P0)(e,this.geometryType,this.spatialReference),(0,S._W)(this.spatialReference,e.outSR)]).then((()=>e))}async _checkStatisticsParamsSupport(e){let t=[];if(e.valueExpression){const{arcadeUtils:i}=await(0,I.LC)();t=i.extractFieldNames(e.valueExpression)}if(e.field&&t.push(e.field),e.field2&&t.push(e.field2),e.field3&&t.push(e.field3),e.normalizationField&&t.push(e.normalizationField),!t.length)throw new r.Z(v,"params should have at least a field or valueExpression",{params:e});(0,g.Of)(this.fieldsIndex,t,"params contains missing fields")}async _checkQuerySupport(e){if((e.distance??0)<0||null!=e.geometryPrecision||e.multipatchOption||e.pixelSize||e.relationParam||e.text)throw new r.Z(v,"Unsupported query options",{query:e});return this._checkAttributesQuerySupport(e),this._checkStatisticsQuerySupport(e),Promise.all([(0,w.P0)(e,this.geometryType,this.spatialReference),(0,S._W)(this.spatialReference,e.outSR)]).then((()=>e))}_checkAttributesQuerySupport(e){const{outFields:t,orderByFields:i,returnDistinctValues:s,outStatistics:n}=e,a=n?n.map((e=>e.outStatisticFieldName&&e.outStatisticFieldName.toLowerCase())).filter(Boolean):[];if(i&&i.length>0){const e=" asc",t=" desc",s=i.map((i=>{const s=i.toLowerCase();return s.includes(e)?s.split(e)[0]:s.includes(t)?s.split(t)[0]:i})).filter((e=>!a.includes(e)));(0,g.Of)(this.fieldsIndex,s,"orderByFields contains missing fields")}if(t&&t.length>0)(0,g.Of)(this.fieldsIndex,t,"outFields contains missing fields");else if(s)throw new r.Z(v,"outFields should be specified for returnDistinctValues",{query:e});(0,g.hO)(this.fieldsIndex,e.where)}_checkStatisticsQuerySupport(e){const{outStatistics:t,groupByFieldsForStatistics:i,having:s}=e,n=i&&i.length,a=t&&t.length;if(s){if(!n||!a)throw new r.Z(v,"outStatistics and groupByFieldsForStatistics should be specified with having",{query:e});(0,g.z4)(this.fieldsIndex,s,t)}if(a){if(!E(t))return;const s=t.map((e=>e.onStatisticField)).filter(Boolean);(0,g.Of)(this.fieldsIndex,s,"onStatisticFields contains missing fields"),n&&(0,g.Of)(this.fieldsIndex,i,"groupByFieldsForStatistics contains missing fields");for(const i of t){const{onStatisticField:t,statisticType:s}=i;if("percentile_disc"!==s&&"percentile_cont"!==s||!("statisticParameters"in i)){if("count"!==s&&t&&(0,g.G3)(t,this.fieldsIndex))throw new r.Z(v,"outStatistics contains non-numeric fields",{definition:i,query:e})}else{const{statisticParameters:t}=i;if(!t)throw new r.Z(v,"statisticParamters should be set for percentile type",{definition:i,query:e})}}}}async _getQueryEngineResultForStats(e,t,i){e=(0,n.d9)(e);try{e=await this._schedule((()=>(0,F.Up)(e,this.definitionExpression,this.spatialReference)),i),e=await this._reschedule((()=>this._checkStatisticsSupport(e,t)),i);const s=await this._reschedule((()=>this._executeSceneFilterQuery(e,i)),i),r=await this._reschedule((()=>this._executeGeometryQuery(e,s,i)),i);return await this._reschedule((()=>this._executeAggregateIdsQuery(r)),i),await this._reschedule((()=>this._executeObjectIdsQuery(r)),i),await this._reschedule((()=>this._executeTimeQuery(r)),i),await this._reschedule((()=>this._executeAttributesQuery(r)),i),r}catch(s){if(s!==F.vF)throw s;return new x.y([],e,this)}}}},64550:function(e,t,i){i.d(t,{g:function(){return s}});const s={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},25498:function(e,t,i){i.d(t,{hN:function(){return E},P0:function(){return C},cW:function(){return I}});var s=i(22130),r=i(32637),n=i(45618);function a(e){return"mesh"===e?n.h_:(0,n.IY)(e)}var u=i(90421),o=i(54597);function l(e,t){return e?t?4:3:t?3:2}function c(e,t,i,s){return p(e,t,i,s.coords[0],s.coords[1])}function h(e,t,i,s,r,n){const a=l(r,n),{coords:u,lengths:o}=s;if(!o)return!1;for(let l=0,c=0;l<o.length;l++,c+=a)if(!p(e,t,i,u[c],u[c+1]))return!1;return!0}function p(e,t,i,s,r){if(!e)return!1;const n=l(t,i),{coords:a,lengths:u}=e;let o=!1,c=0;for(const l of u)o=f(o,a,n,c,l,s,r),c+=l*n;return o}function f(e,t,i,s,r,n,a){let u=e,o=s;for(let l=s,c=s+r*i;l<c;l+=i){o=l+i,o===c&&(o=s);const e=t[l],r=t[l+1],h=t[o],p=t[o+1];(r<a&&p>=a||p<a&&r>=a)&&e+(a-r)/(p-r)*(h-e)<n&&(u=!u)}return u}var y=i(76338),d=i(10297),m=i(65341),g=i(1029);const S="feature-store:unsupported-query",_={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},x={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function w(e){return null!=e&&!0===x.spatialRelationship[e]}function R(e){return null!=e&&!0===x.queryGeometry[(0,u.Ji)(e)]}function F(e){return null!=e&&!0===x.layerGeometry[e]}function Q(){return Promise.all([i.e(4174),i.e(4438)]).then(i.bind(i,21813))}function I(e,t,i,s,n){if((0,u.oU)(t)&&"esriGeometryPoint"===i&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){const e=(0,y.Uy)(new d.Z,t,!1,!1);return Promise.resolve((t=>c(e,!1,!1,t)))}if((0,u.oU)(t)&&"esriGeometryMultipoint"===i){const i=(0,y.Uy)(new d.Z,t,!1,!1);if("esriSpatialRelContains"===e)return Promise.resolve((e=>h(i,!1,!1,e,s,n)))}if((0,u.YX)(t)&&"esriGeometryPoint"===i&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return Promise.resolve((e=>(0,r.aV)(t,(0,g.Op)(i,s,n,e))));if((0,u.YX)(t)&&"esriGeometryMultipoint"===i&&"esriSpatialRelContains"===e)return Promise.resolve((e=>(0,r.lQ)(t,(0,g.Op)(i,s,n,e))));if((0,u.YX)(t)&&"esriSpatialRelIntersects"===e){const e=a(i);return Promise.resolve((r=>e(t,(0,g.Op)(i,s,n,r))))}return Q().then((r=>{const a=r[_[e]].bind(null,t.spatialReference,t);return e=>a((0,g.Op)(i,s,n,e))}))}async function C(e,t,i){const{spatialRel:r,geometry:n}=e;if(n){if(!w(r))throw new s.Z(S,"Unsupported query spatial relationship",{query:e});if((0,o.JY)(n.spatialReference)&&(0,o.JY)(i)){if(!R(n))throw new s.Z(S,"Unsupported query geometry type",{query:e});if(!F(t))throw new s.Z(S,"Unsupported layer geometry type",{query:e});if(e.outSR)return(0,m._W)(e.geometry&&e.geometry.spatialReference,e.outSR)}}}function E(e){if((0,u.YX)(e))return!0;if((0,u.oU)(e)){for(const t of e.rings){if(5!==t.length)return!1;if(t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1}return!0}return!1}},57149:function(e,t,i){async function s(e,t){if(!e)return null;const i=t.featureAdapter,{startTimeField:s,endTimeField:r}=e;let n=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;if(s&&r)await t.forEach((e=>{const t=i.getAttribute(e,s),u=i.getAttribute(e,r);null==t||isNaN(t)||(n=Math.min(n,t)),null==u||isNaN(u)||(a=Math.max(a,u))}));else{const e=s||r;await t.forEach((t=>{const s=i.getAttribute(t,e);null==s||isNaN(s)||(n=Math.min(n,s),a=Math.max(a,s))}))}return{start:n,end:a}}function r(e,t,i){if(!t||!e)return null;const{startTimeField:s,endTimeField:r}=e;if(!s&&!r)return null;const{start:o,end:l}=t;return null===o&&null===l?null:void 0===o&&void 0===l?u():s&&r?n(i,s,r,o,l):a(i,s||r,o,l)}function n(e,t,i,s,r){return null!=s&&null!=r?n=>{const a=e.getAttribute(n,t),u=e.getAttribute(n,i);return(null==a||a<=r)&&(null==u||u>=s)}:null!=s?t=>{const r=e.getAttribute(t,i);return null==r||r>=s}:null!=r?i=>{const s=e.getAttribute(i,t);return null==s||s<=r}:void 0}function a(e,t,i,s){return null!=i&&null!=s&&i===s?s=>e.getAttribute(s,t)===i:null!=i&&null!=s?r=>{const n=e.getAttribute(r,t);return n>=i&&n<=s}:null!=i?s=>e.getAttribute(s,t)>=i:null!=s?i=>e.getAttribute(i,t)<=s:void 0}function u(){return()=>!1}i.d(t,{R:function(){return s},y:function(){return r}})}}]);