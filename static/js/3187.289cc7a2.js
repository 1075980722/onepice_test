"use strict";(self["webpackChunkonepic"]=self["webpackChunkonepic"]||[]).push([[3187],{93187:function(t,e,n){n.r(e),n.d(e,{executeTopFeaturesQuery:function(){return s}});var r=n(16829),o=n(48306),i=n(48169),u=n(4536);async function s(t,e,n,s){const l=(0,r.en)(t),y={...s},{data:c}=await(0,o.IJ)(l,u.Z.from(e),n,y);return i.Z.fromJSON(c)}},48306:function(t,e,n){n.d(e,{IJ:function(){return a},m5:function(){return f},vB:function(){return m},w7:function(){return p}});var r=n(94848),o=n(8693),i=n(99659),u=n(90421),s=n(11289),l=n(53922),y=n(80062);const c="Layer does not support extent calculation.";function d(t,e){const n=t.geometry,r=t.toJSON(),i=r;if((0,o.pC)(n)&&(i.geometry=JSON.stringify(n),i.geometryType=(0,u.Ji)(n),i.inSR=n.spatialReference.wkid||JSON.stringify(n.spatialReference)),r.topFilter?.groupByFields&&(i.topFilter.groupByFields=r.topFilter.groupByFields.join(",")),r.topFilter?.orderByFields&&(i.topFilter.orderByFields=r.topFilter.orderByFields.join(",")),r.topFilter&&(i.topFilter=JSON.stringify(i.topFilter)),r.objectIds&&(i.objectIds=r.objectIds.join(",")),r.orderByFields&&(i.orderByFields=r.orderByFields.join(",")),r.outFields&&!(e?.returnCountOnly||e?.returnExtentOnly||e?.returnIdsOnly)?r.outFields.includes("*")?i.outFields="*":i.outFields=r.outFields.join(","):delete i.outFields,r.outSR?i.outSR=r.outSR.wkid||JSON.stringify(r.outSR):n&&r.returnGeometry&&(i.outSR=i.inSR),r.returnGeometry&&delete r.returnGeometry,r.timeExtent){const t=r.timeExtent,{start:e,end:n}=t;null==e&&null==n||(i.time=e===n?e:`${e??"null"},${n??"null"}`),delete r.timeExtent}return i}async function a(t,e,n,r){const o=await F(t,e,"json",r);return(0,y.p)(e,n,o.data),o}async function p(t,e,n){return(0,o.pC)(e.timeExtent)&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:F(t,e,"json",n,{returnIdsOnly:!0})}async function f(t,e,n){return(0,o.pC)(e.timeExtent)&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:F(t,e,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(c);if(e.hasOwnProperty("count"))throw new Error(c);return t}))}function m(t,e,n){return(0,o.pC)(e.timeExtent)&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):F(t,e,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}function F(t,e,n,u={},y={}){const c="string"==typeof t?(0,i.mN)(t):t,a=e.geometry?[e.geometry]:[];return u.responseType="pbf"===n?"array-buffer":"json",(0,s.aX)(a,null,u).then((t=>{const s=t&&t[0];(0,o.pC)(s)&&((e=e.clone()).geometry=s);const a=(0,l.A)({...c.query,f:n,...y,...d(e,y)});return(0,r["default"])((0,i.v_)(c.path,"queryTopFeatures"),{...u,query:{...a,...u.query}})}))}}}]);