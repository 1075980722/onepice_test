"use strict";(self["webpackChunkonepic"]=self["webpackChunkonepic"]||[]).push([[1621],{71621:function(e,t,o){o.r(t),o.d(t,{executeRelationshipQuery:function(){return f},executeRelationshipQueryForCount:function(){return y}});var n=o(16829),r=o(94848),a=o(53922);function c(e,t){const o=e.toJSON();return o.objectIds&&(o.objectIds=o.objectIds.join(",")),o.orderByFields&&(o.orderByFields=o.orderByFields.join(",")),o.outFields&&!t?.returnCountOnly?o.outFields.includes("*")?o.outFields="*":o.outFields=o.outFields.join(","):delete o.outFields,o.outSpatialReference&&(o.outSR=o.outSR.wkid||JSON.stringify(o.outSR.toJSON()),delete o.outSpatialReference),o.dynamicDataSource&&(o.layer=JSON.stringify({source:o.dynamicDataSource}),delete o.dynamicDataSource),o}async function u(e,t,o){const n=await d(e,t,o),r=n.data,a=r.geometryType,c=r.spatialReference,u={};for(const s of r.relatedRecordGroups){const e={fields:void 0,objectIdFieldName:void 0,geometryType:a,spatialReference:c,hasZ:!!r.hasZ,hasM:!!r.hasM,features:s.relatedRecords};if(null!=s.objectId)u[s.objectId]=e;else for(const t in s)s.hasOwnProperty(t)&&"relatedRecords"!==t&&(u[s[t]]=e)}return{...n,data:u}}async function s(e,t,o){const n=await d(e,t,o,{returnCountOnly:!0}),r=n.data,a={};for(const c of r.relatedRecordGroups)null!=c.objectId&&(a[c.objectId]=c.count);return{...n,data:a}}async function d(e,t,o={},n){const u=(0,a.A)({...e.query,f:"json",...n,...c(t,n)});return(0,r["default"])(e.path+"/queryRelatedRecords",{...o,query:{...o.query,...u}})}var i=o(48169),l=o(68864);async function f(e,t,o){t=l["default"].from(t);const r=(0,n.en)(e);return u(r,t,o).then((e=>{const t=e.data,o={};return Object.keys(t).forEach((e=>o[e]=i.Z.fromJSON(t[e]))),o}))}async function y(e,t,o){t=l["default"].from(t);const r=(0,n.en)(e);return s(r,t,{...o}).then((e=>e.data))}}}]);