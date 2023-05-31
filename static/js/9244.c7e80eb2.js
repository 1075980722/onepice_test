"use strict";(self["webpackChunkonepic"]=self["webpackChunkonepic"]||[]).push([[9244],{92514:function(e,t,s){var a;s.d(t,{i:function(){return a}}),function(e){e[e.PROJECT_VERTICES=1]="PROJECT_VERTICES"}(a||(a={}))},64550:function(e,t,s){s.d(t,{g:function(){return a}});const a={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},99244:function(e,t,s){s.r(t),s.d(t,{default:function(){return x}});s(57658),s(92087);var a=s(61445),r=(s(80388),s(39264)),n=s(65677),i=s(94848),o=s(17426),u=s(22130),l=s(81653),d=s(38511),p=s(29924),c=s(8693),y=s(61332),h=s(92454),m=s(99659),f=s(58006),g=(s(94315),s(15055),s(77623)),R=s(50157),F=s(90421),b=s(92514),I=s(65306),q=s(8465),_=s(53317),S=s(80988),w=s(87429);const E=new d.X({originalAndCurrentFeatures:"original-and-current-features",none:"none"});async function O(e){if("string"==typeof e){const t=(0,m.sJ)(e);return t||{data:e}}return new Promise(((t,s)=>{const a=new FileReader;a.readAsDataURL(e),a.onload=()=>t((0,m.sJ)(a.result)),a.onerror=e=>s(e)}))}const T=new Set(["Feature Layer","Table"]),A=new d.X({Started:"published",Publishing:"publishing",Stopped:"unavailable"});let C=class extends p.Z{constructor(){super(...arguments),this.type="feature-layer",this.refresh=(0,h.Ds)((async()=>{await this.load();const e=this.sourceJSON.editingInfo?.lastEditDate;if(null==e)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const t=e!==this.sourceJSON.editingInfo?.lastEditDate;return{dataChanged:t,updates:t?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}}))}load(e){const t=(0,c.pC)(e)?e.signal:null,s=this.layer.sourceJSON;return this.addResolvingPromise(this._fetchService(s,t)),Promise.resolve(this)}get queryTask(){const{capabilities:e,parsedUrl:t,dynamicDataSource:s,infoFor3D:a,gdbVersion:r,spatialReference:n,fieldsIndex:i}=this.layer,o=(0,l.Z)("featurelayer-pbf")&&e?.query.supportsFormatPBF&&(0,c.Wi)(a),u=e?.operations?.supportsQueryAttachments??!1;return new q.Z({url:t.path,pbfSupported:o,fieldsIndex:i,infoFor3D:a,dynamicDataSource:s,gdbVersion:r,sourceSpatialReference:n,queryAttachmentsSupported:u})}async addAttachment(e,t){await this.load();const s=e.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+s+"/addAttachment",r=this._getLayerRequestOptions(),n=this._getFormDataForAttachment(t,r.query);try{const e=await(0,i["default"])(a,{body:n});return this._createFeatureEditResult(e.data.addAttachmentResult)}catch(o){throw this._createAttachmentErrorResult(s,o)}}async updateAttachment(e,t,s){await this.load();const a=e.attributes[this.layer.objectIdField],r=this.layer.parsedUrl.path+"/"+a+"/updateAttachment",n=this._getLayerRequestOptions({query:{attachmentId:t}}),o=this._getFormDataForAttachment(s,n.query);try{const e=await(0,i["default"])(r,{body:o});return this._createFeatureEditResult(e.data.updateAttachmentResult)}catch(u){throw this._createAttachmentErrorResult(a,u)}}async applyEdits(e,t){await this.load();const s=this.layer.infoFor3D,a=(0,c.pC)(s),r=a||(t?.globalIdUsed??!1),o=e.addFeatures?.map((e=>this._serializeFeature(e,s))).filter(c.pC)??[],u=e.updateFeatures?.map((e=>this._serializeFeature(e,s))).filter(c.pC)??[],l=this._getFeatureIds(e.deleteFeatures,r);(0,S.P)(o,u,this.layer.spatialReference);const d=[],p=[],y=[...e.deleteAttachments??[]];for(const n of e.addAttachments??[])d.push(await this._serializeAttachment(n));for(const n of e.updateAttachments??[])p.push(await this._serializeAttachment(n));const h=d.length||p.length||y.length?{adds:d,updates:p,deletes:y}:null;let m,f=null;if(a){f=new Map;const t=[];for(const a of e.addAssets??[])t.push(this._serializeAssetMapEditAndUploadAssets(a,f));const s=await Promise.all(t);m=s.length?{adds:s,updates:[],deletes:[]}:void 0}const g={gdbVersion:t?.gdbVersion||this.layer.gdbVersion,rollbackOnFailure:t?.rollbackOnFailureEnabled,useGlobalIds:r,returnEditMoment:t?.returnEditMoment,usePreviousEditMoment:t?.usePreviousEditMoment,sessionId:t?.sessionId};t?.returnServiceEditsOption?(g.edits=JSON.stringify([{id:this.layer.layerId,adds:o,updates:u,deletes:l,attachments:h,assetMaps:(0,c.Wg)(m)}]),g.returnServiceEditsOption=E.toJSON(t?.returnServiceEditsOption),g.returnServiceEditsInSourceSR=t?.returnServiceEditsInSourceSR):(g.adds=o.length?JSON.stringify(o):null,g.updates=u.length?JSON.stringify(u):null,g.deletes=l.length?r?JSON.stringify(l):l.join(","):null,g.attachments=h&&JSON.stringify(h),g.assetMaps=(0,c.pC)(m)?JSON.stringify(m):void 0);const R=this._getLayerRequestOptions({method:"post",query:g}),F=t?.returnServiceEditsOption?this.layer.url:this.layer.parsedUrl.path,b=await(0,i["default"])(F+"/applyEdits",R);if(!this.layer.capabilities.operations?.supportsEditing&&this.layer.effectiveCapabilities?.operations?.supportsEditing){const e=n.id?.findCredential(this.layer.url);await(e?.refreshToken())}if(a&&null!=b.data&&null!=b.data.assetMaps){const e=b.data,t=this.layer.objectIdField,s=[];for(const n of e.addResults)n.success&&s.push(n.objectId);for(const n of e.updateResults)n.success&&s.push(n.objectId);const a=this._createRequestQueryOptions(),r=await(0,i["default"])(F+"/query",{...a,query:{f:"json",formatOf3DObjects:"3D_glb",where:`OBJECTID IN (${s.join(",")})`,outFields:`${t}`}});if(r&&r.data&&r.data.assetMaps&&(0,c.pC)(f)){const e=r.data.assetMaps;for(const t of e){const e=f.get(t.parentGlobalId).geometry;(0,c.pC)(e)&&"mesh"===e.type&&e.updateExternalSource({source:[{name:t.assetName,source:t.assetName}],extent:e.extent})}}}return this._createEditsResult(b)}async deleteAttachments(e,t){await this.load();const s=e.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+s+"/deleteAttachments";try{return(await(0,i["default"])(a,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(r){throw this._createAttachmentErrorResult(s,r)}}fetchRecomputedExtents(e={}){const t=e.signal;return this.load({signal:t}).then((async()=>{const t=this._getLayerRequestOptions({...e,query:{returnUpdates:!0}}),{layerId:s,url:a}=this.layer,{data:r}=await(0,i["default"])(`${a}/${s}`,t),{id:n,extent:u,fullExtent:l,timeExtent:d}=r,p=u||l;return{id:n,fullExtent:p&&R.Z.fromJSON(p),timeExtent:d&&o.Z.fromJSON({start:d[0],end:d[1]})}}))}async queryAttachments(e,t={}){await this.load();const s=this._getLayerRequestOptions(t);return this.queryTask.executeAttachmentQuery(e,s)}async queryFeatures(e,t){return await this.load(),this.queryTask.execute(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeaturesJSON(e,t){return await this.load(),this.queryTask.executeJSON(e,{...t,query:this._createRequestQueryOptions(t)})}async queryObjectIds(e,t){return await this.load(),this.queryTask.executeForIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeatureCount(e,t){return await this.load(),this.queryTask.executeForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryExtent(e,t){return await this.load(),this.queryTask.executeForExtent(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeatures(e,t){return await this.load(),this.queryTask.executeRelationshipQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeaturesCount(e,t){return await this.load(),this.queryTask.executeRelationshipQueryForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopFeatures(e,t){return await this.load(),this.queryTask.executeTopFeaturesQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopObjectIds(e,t){return await this.load(),this.queryTask.executeForTopIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopExtents(e,t){return await this.load(),this.queryTask.executeForTopExtents(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopCount(e,t){return await this.load(),this.queryTask.executeForTopCount(e,{...t,query:this._createRequestQueryOptions(t)})}async fetchPublishingStatus(){if(!(0,_.M8)(this.layer.url))return"unavailable";const e=(0,m.v_)(this.layer.url,"status"),t=await(0,i["default"])(e,{query:{f:"json"}});return A.fromJSON(t.data.status)}_createRequestQueryOptions(e){const t={...this.layer.customParameters,token:this.layer.apiKey,...e?.query};return this.layer.datesInUnknownTimezone&&(t.timeReferenceUnknownClient=!0),t}async _fetchService(e,t){if(!e){const{data:s}=await(0,i["default"])(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:(0,l.Z)("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:t}));e=s}this.sourceJSON=this._patchServiceJSON(e);const s=e.type;if(!T.has(s))throw new u.Z("feature-layer-source:unsupported-type",`Source type "${s}" is not supported`)}_patchServiceJSON(e){if("Table"!==e.type&&e.geometryType&&!e?.drawingInfo?.renderer&&!e.defaultSymbol){const t=(0,I.bU)(e.geometryType).renderer;(0,y.RB)("drawingInfo.renderer",t,e)}return"esriGeometryMultiPatch"===e.geometryType&&e.infoFor3D&&(e.geometryType="mesh"),e}_serializeFeature(e,t){const{geometry:s,attributes:a}=e;if((0,c.pC)(t)&&(0,c.pC)(e.geometry)&&"mesh"===e.geometry.type){const s={...a},r=e.geometry,n=r.origin,i=r.transform;if(s[t.transformFieldRoles.originX]=n.x,s[t.transformFieldRoles.originY]=n.y,s[t.transformFieldRoles.originZ]=n.z,(0,c.pC)(i)){const e=i.translation,a=i.scale,r=i.rotation;s[t.transformFieldRoles.translationX]=e[0],s[t.transformFieldRoles.translationY]=-e[2],s[t.transformFieldRoles.translationZ]=e[1],s[t.transformFieldRoles.scaleX]=a[0],s[t.transformFieldRoles.scaleY]=a[1],s[t.transformFieldRoles.scaleZ]=a[2],s[t.transformFieldRoles.rotationX]=r[0],s[t.transformFieldRoles.rotationY]=r[2],s[t.transformFieldRoles.rotationZ]=r[1],s[t.transformFieldRoles.rotationDeg]=r[3]}return{geometry:null,attributes:s}}return(0,c.Wi)(s)?{attributes:a}:"mesh"===s.type||"extent"===s.type?null:{geometry:s.toJSON(),attributes:a}}async _serializeAttachment(e){const{feature:t,attachment:s}=e,{globalId:a,name:r,contentType:n,data:i,uploadId:o}=s,u={globalId:a,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null};if(t&&(u.parentGlobalId="attributes"in t?t.attributes&&t.attributes[this.layer.globalIdField]:t.globalId),o)u.uploadId=o;else if(i){const e=await O(i);e&&(u.contentType=e.mediaType,u.data=e.data),i instanceof File&&(u.name=i.name)}return r&&(u.name=r),n&&(u.contentType=n),u}async _serializeAssetMapEditAndUploadAssets(e,t){const s=this.layer.url;let a=null;try{const t=new Blob([e.data],{type:e.mimeType}),r=new FormData;r.append("f","json"),r.append("file",t,`${e.assetName}`);const n={body:r,method:"post",responseType:"json"},{data:o}=await(0,i["default"])(`${s}/uploads/upload`,n);if(!o.success)throw new u.Z("feature-layer-source:upload-failure","Expected upload to be successfull.");a={assetType:e.assetType,assetUploadId:o.item.itemID}}catch(p){a=null}if((0,c.Wi)(a)){const t=await O(new Blob([e.data]));if(!t.isBase64)throw new u.Z("feature-layer-source:uploadAssets-failure","Expected gltf data in base64 format after conversion.");a={assetType:e.assetType,assetData:t.data}}if((0,c.Wi)(a))throw new u.Z("feature-layer-source:uploadAssets-failure","Unable to prepare uploadAsset request options.");const r={method:"post",query:{f:"json",assets:JSON.stringify([a])},responseType:"json"},n=await(0,i["default"])((0,m.v_)(this.layer.parsedUrl.path,"uploadAssets"),r);if(1!==n.data.uploadResults.length||!n.data.uploadResults[0].success)throw new u.Z("feature-layer-source:uploadAssets-failure","Bad response.");const o=n.data.uploadResults[0].assetHash,l=[];e.flags&b.i.PROJECT_VERTICES&&l.push("PROJECT_VERTICES");const d={globalId:e.assetMapGlobalId,parentGlobalId:e.featureGlobalId,assetName:e.assetName,assetHash:o,flags:l};return t.set(e.featureGlobalId,e.feature),d}_getFeatureIds(e,t){const s=e?.[0];return s?this._canUseGlobalIds(t,e)?this._getGlobalIdsFromFeatureIdentifier(e):"objectId"in s?this._getObjectIdsFromFeatureIdentifier(e):this._getIdsFromFeatures(e):[]}_getIdsFromFeatures(e){const t=this.layer.objectIdField;return e.map((e=>e.attributes&&e.attributes[t]))}_canUseGlobalIds(e,t){return e&&"globalId"in t[0]}_getObjectIdsFromFeatureIdentifier(e){return e.map((e=>e.objectId))}_getGlobalIdsFromFeatureIdentifier(e){return e.map((e=>e.globalId))}_createEditsResult(e){const t=e.data,{layerId:s}=this.layer,a=[];let r=null;if(Array.isArray(t))for(const o of t)a.push({id:o.id,editedFeatures:o.editedFeatures}),o.id===s&&(r={addResults:o.addResults??[],updateResults:o.updateResults??[],deleteResults:o.deleteResults??[],attachments:o.attachments,editMoment:o.editMoment});else r=t;const n=r?.attachments,i={addFeatureResults:r?.addResults?.map(this._createFeatureEditResult,this)??[],updateFeatureResults:r?.updateResults?.map(this._createFeatureEditResult,this)??[],deleteFeatureResults:r?.deleteResults?.map(this._createFeatureEditResult,this)??[],addAttachmentResults:n&&n.addResults?n.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:n&&n.updateResults?n.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:n&&n.deleteResults?n.deleteResults.map(this._createFeatureEditResult,this):[]};if(r?.editMoment&&(i.editMoment=r.editMoment),a.length>0){i.editedFeatureResults=[];for(const e of a){const{editedFeatures:t}=e,s=t?.spatialReference?new w.Z(t.spatialReference):null;i.editedFeatureResults.push({layerId:e.id,editedFeatures:{adds:t?.adds?.map((e=>this._createEditedFeature(e,s)))||[],updates:t?.updates?.map((e=>({original:this._createEditedFeature(e[0],s),current:this._createEditedFeature(e[1],s)})))||[],deletes:t?.deletes?.map((e=>this._createEditedFeature(e,s)))||[],spatialReference:s}})}}return i}_createEditedFeature(e,t){return new r.Z({attributes:e.attributes,geometry:(0,F.im)({...e.geometry,spatialReference:t})})}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new u.Z("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_createAttachmentErrorResult(e,t){const s=t.details.messages&&t.details.messages[0]||t.message,a=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new u.Z("feature-layer-source:attachment-failure",s,{code:a})}}_getFormDataForAttachment(e,t){const s=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(s)for(const a in t){const e=t[a];null!=e&&(s.set?s.set(a,e):s.append(a,e))}return s}_getLayerRequestOptions(e={}){const{parsedUrl:t,gdbVersion:s,dynamicDataSource:a}=this.layer;return{...e,query:{gdbVersion:s,layer:a?JSON.stringify({source:a}):void 0,...t.query,f:"json",...this._createRequestQueryOptions(e)},responseType:"json"}}};(0,a._)([(0,f.Cb)()],C.prototype,"type",void 0),(0,a._)([(0,f.Cb)({constructOnly:!0})],C.prototype,"layer",void 0),(0,a._)([(0,f.Cb)({readOnly:!0})],C.prototype,"queryTask",null),C=(0,a._)([(0,g.j)("esri.layers.graphics.sources.FeatureLayerSource")],C);const x=C},65306:function(e,t,s){s.d(t,{Dm:function(){return d},Hq:function(){return p},MS:function(){return c},bU:function(){return o}});var a=s(81653),r=s(86232),n=s(64550),i=s(65902);function o(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?i.I4:"esriGeometryPolyline"===e?i.ET:i.lF}}}const u=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let l=1;function d(e,t){if((0,a.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let s=`this.${t} = null;`;for(const t in e)s+=`this${u.test(t)?`.${t}`:`["${t}"]`} = ${JSON.stringify(e[t])};`;const a=new Function(`\n      return class AttributesClass$${l++} {\n        constructor() {\n          ${s};\n        }\n      }\n    `)();return()=>new a}catch(s){return()=>({[t]:null,...e})}}function p(e={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,r.d9)(e)}}]}function c(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:n.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);