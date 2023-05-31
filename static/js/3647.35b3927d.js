"use strict";(self["webpackChunkonepic"]=self["webpackChunkonepic"]||[]).push([[3647],{47764:function(e,t,r){r.r(t),r.d(t,{createConnection:function(){return R}});r(57658);var s=r(61445),o=(r(80388),r(94848)),n=r(22130),i=r(93622),c=r(8693),a=r(92454),u=r(99659),l=(r(94315),r(15055),r(81653),r(77623)),d=r(58006),h=r(1164),g=r(96545);let f=class extends g.Z.EventedAccessor{destroy(){this.emit("destroy")}get connectionError(){return this.errorString?new n.Z("stream-connection",this.errorString):null}onFeature(e){this.emit("data-received",e)}onMessage(e){this.emit("message-received",e)}};(0,s._)([(0,d.Cb)({readOnly:!0})],f.prototype,"connectionError",null),f=(0,s._)([(0,l.j)("esri.layers.support.StreamConnection")],f);const _=f;var y;!function(e){e[e.CONNECTING=0]="CONNECTING",e[e.OPEN=1]="OPEN",e[e.CLOSING=2]="CLOSING",e[e.CLOSED=3]="CLOSED"}(y||(y={}));let p=class extends _{constructor(e){super(),this._outstandingMessages=[],this.errorString=null;const{geometryType:t,spatialReference:r,sourceSpatialReference:s}=e;this._config=e,this._featureZScaler=(0,h.k)(t,s,r),this._open()}async _open(){await this._tryCreateWebSocket(),this.destroyed||await this._handshake()}destroy(){super.destroy(),(0,c.pC)(this._websocket)&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null}get connectionStatus(){if((0,c.Wi)(this._websocket))return"disconnected";switch(this._websocket.readyState){case y.CONNECTING:case y.OPEN:return"connected";case y.CLOSING:case y.CLOSED:return"disconnected"}}sendMessageToSocket(e){(0,c.Wi)(this._websocket)?this._outstandingMessages.push(e):this._websocket.send(JSON.stringify(e))}sendMessageToClient(e){this._onMessage(e)}updateCustomParameters(e){this._config.customParameters=e,(0,c.pC)(this._websocket)&&this._websocket.close()}async _tryCreateWebSocket(e=this._config.source.path,t=1e3,r=0){try{if(this.destroyed)return;const t=(0,u.fl)(e,this._config.customParameters??{});this._websocket=await this._createWebSocket(t),this.notifyChange("connectionStatus")}catch(f){const o=t/1e3;return this._config.maxReconnectionAttempts&&r>=this._config.maxReconnectionAttempts?(i.Z.getLogger(this.declaredClass).error(new n.Z("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()):(i.Z.getLogger(this.declaredClass).error(new n.Z("websocket-connection",`Failed to connect. Attempting to reconnect in ${o}s`,f)),await(0,a.e4)(t),this._tryCreateWebSocket(e,Math.min(1.5*t,1e3*this._config.maxReconnectionInterval),r+1))}}_setWebSocketJSONParseHandler(e){e.onmessage=e=>{try{const t=JSON.parse(e.data);this._onMessage(t)}catch(t){return void i.Z.getLogger(this.declaredClass).error(new n.Z("websocket-connection","Failed to parse message, invalid JSON",{error:t}))}}}_createWebSocket(e){return new Promise(((t,r)=>{const s=new WebSocket(e);s.onopen=()=>{if(s.onopen=null,this.destroyed)return s.onclose=null,void s.close();s.onclose=e=>this._onClose(e),s.onerror=e=>this._onError(e),this._setWebSocketJSONParseHandler(s),t(s)},s.onclose=e=>{s.onopen=s.onclose=null,r(e)}}))}async _handshake(e=1e4){const t=this._websocket;if((0,c.Wi)(t))return;const r=(0,a.hh)(),s=t.onmessage,{filter:o,outFields:u,spatialReference:l}=this._config;return r.timeout(e),t.onmessage=e=>{let c=null;try{c=JSON.parse(e.data)}catch(f){}c&&"object"==typeof c||(i.Z.getLogger(this.declaredClass).error(new n.Z("websocket-connection","Protocol violation. Handshake failed - malformed message",e.data)),r.reject(),this.destroy()),c.spatialReference?.wkid!==l?.wkid&&(i.Z.getLogger(this.declaredClass).error(new n.Z("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${l.wkid}`,e.data)),r.reject(),this.destroy()),"json"!==c.format&&(i.Z.getLogger(this.declaredClass).error(new n.Z("websocket-connection","Protocol violation. Handshake failed - format is not set",e.data)),r.reject(),this.destroy()),o&&c.filter!==o&&i.Z.getLogger(this.declaredClass).error(new n.Z("websocket-connection","Tried to set filter, but server doesn't support it")),u&&c.outFields!==u&&i.Z.getLogger(this.declaredClass).error(new n.Z("websocket-connection","Tried to set outFields, but server doesn't support it")),t.onmessage=s;for(const r of this._outstandingMessages)t.send(JSON.stringify(r));this._outstandingMessages=[],r.resolve()},t.send(JSON.stringify({filter:o,outFields:u,format:"json",spatialReference:{wkid:l.wkid}})),r.promise}_onMessage(e){if(this.onMessage(e),"type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)(0,c.pC)(this._featureZScaler)&&this._featureZScaler(t.geometry),this.onFeature(t)}}_onError(e){const t="Encountered an error over WebSocket connection";this._set("errorString",t),i.Z.getLogger(this.declaredClass).error("websocket-connection",t)}_onClose(e){this._websocket=null,this.notifyChange("connectionStatus"),1e3!==e.code&&i.Z.getLogger(this.declaredClass).error("websocket-connection",`WebSocket closed unexpectedly with error code ${e.code}`),this.destroyed||this._open()}};(0,s._)([(0,d.Cb)()],p.prototype,"connectionStatus",null),(0,s._)([(0,d.Cb)()],p.prototype,"errorString",void 0),p=(0,s._)([(0,l.j)("esri.layers.graphics.sources.connections.WebSocketConnection")],p);var w=r(61075),m=r(13384),S=r(90421),b=r(87429);const C=1e4,k={maxQueryDepth:5,maxRecordCountFactor:3};let v=class extends p{constructor(e){super({...k,...e}),this._buddyServicesQuery=null,this._relatedFeatures=null}async _open(){const e=await this._fetchServiceDefinition(this._config.source);e.timeInfo.trackIdField||i.Z.getLogger(this.declaredClass).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const t=this._fetchWebSocketUrl(e.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),await this._buddyServicesQuery,await this._tryCreateWebSocket(t);const{filter:r,outFields:s}=this._config;this.destroyed||this._setFilter(r,s)}_onMessage(e){if("attributes"in e){let r;try{r=this._enrich(e),(0,c.pC)(this._featureZScaler)&&this._featureZScaler(r.geometry)}catch(t){return void i.Z.getLogger(this.declaredClass).error(new n.Z("geoevent-connection","Failed to parse message",t))}this.onFeature(r)}else this.onMessage(e)}async _fetchServiceDefinition(e){const t={f:"json",...this._config.customParameters},r=(0,o["default"])(e.path,{query:t,responseType:"json"}),s=(await r).data;return this._serviceDefinition=s,s}_fetchWebSocketUrl(e,t){const r=e[0],{urls:s,token:o}=r,n=this._inferWebSocketBaseUrl(s);return(0,u.fl)(`${n}/subscribe`,{outSR:""+t.wkid,token:o})}_inferWebSocketBaseUrl(e){if(1===e.length)return e[0];for(const t of e)if(t.includes("wss"))return t;return i.Z.getLogger(this.declaredClass).error(new n.Z("geoevent-connection","Unable to infer WebSocket url",e)),null}async _setFilter(e,t){const r=this._websocket;if((0,c.Wi)(r)||(0,c.Wi)(e)&&(0,c.Wi)(t))return;const s=JSON.stringify({filter:this._serializeFilter(e,t)});let o=!1;const u=(0,a.hh)(),l=()=>{o||(this.destroyed||this._websocket!==r||i.Z.getLogger(this.declaredClass).error(new n.Z("geoevent-connection","Server timed out when setting filter")),u.reject())},d=e=>{const t=JSON.parse(e.data);t.filter&&(t.error&&(i.Z.getLogger(this.declaredClass).error(new n.Z("geoevent-connection","Failed to set service filter",t.error)),this._set("errorString",`Could not set service filter - ${t.error}`),u.reject(t.error)),this._setWebSocketJSONParseHandler(r),o=!0,u.resolve())};return r.onmessage=d,r.send(s),setTimeout(l,C),u.promise}_serializeFilter(e,t){const r={};if((0,c.Wi)(e)&&(0,c.Wi)(t))return r;if((0,c.pC)(e)&&e.geometry)try{const t=(0,S.im)(e.geometry);if("extent"!==t.type)throw new n.Z(`Expected extent but found type ${t.type}`);r.geometry=JSON.stringify(t.shiftCentralMeridian())}catch(s){i.Z.getLogger(this.declaredClass).error(new n.Z("geoevent-connection","Encountered an error when setting connection geometryDefinition",s))}return(0,c.pC)(e)&&e.where&&"1 = 1"!==e.where&&"1=1"!==e.where&&(r.where=e.where),(0,c.pC)(t)&&(r.outFields=t.join(",")),r}_enrich(e){if(!this._relatedFeatures)return e;const t=this._serviceDefinition.relatedFeatures.joinField,r=e.attributes[t],s=this._relatedFeatures.get(r);if(!s)return i.Z.getLogger(this.declaredClass).warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:o,geometry:c}=s;for(const n in o)e.attributes[n]=o[n];return c&&(e.geometry=c),e.geometry||e.centroid||i.Z.getLogger(this.declaredClass).error(new n.Z("geoevent-connection","Found malformed feature - no geometry found",e)),e}async _queryBuddyServices(){try{const{relatedFeatures:e,keepLatestArchive:t}=this._serviceDefinition,r=this._queryRelatedFeatures(e),s=this._queryArchive(t);await r;const o=await s;if(!o)return;for(const n of o.features)this.onFeature(this._enrich(n))}catch(e){i.Z.getLogger(this.declaredClass).error(new n.Z("geoevent-connection","Encountered an error when querying buddy services",{error:e}))}}async _queryRelatedFeatures(e){if(!e)return;const t=await this._queryBuddy(e.featuresUrl);this._addRelatedFeatures(t)}async _queryArchive(e){if(e)return this._queryBuddy(e.featuresUrl)}async _queryBuddy(e){const t=new((await Promise.resolve().then(r.bind(r,65380))).default)({url:e}),{capabilities:s}=await t.load(),o=s.query.supportsMaxRecordCountFactor,n=s.query.supportsPagination,i=s.query.supportsCentroid,a=this._config.maxRecordCountFactor,u=t.capabilities.query.maxRecordCount,l=o?u*a:u,d=new m.Z;if(d.outFields=(0,c.Pt)(this._config.outFields,["*"]),d.where=(0,c.Pt)((0,c.U2)(this._config.filter,"where"),"1=1"),d.returnGeometry=!0,d.returnExceededLimitFeatures=!0,d.outSpatialReference=b.Z.fromJSON(this._config.spatialReference),i&&(d.returnCentroid=!0),o&&(d.maxRecordCountFactor=a),n)return d.num=l,t.destroy(),this._queryPages(e,d);const h=await(0,w.JT)(e,d,this._config.sourceSpatialReference);return t.destroy(),h.data}async _queryPages(e,t,r=[],s=0){t.start=(0,c.pC)(t.num)?s*t.num:null;const{data:o}=await(0,w.JT)(e,t,this._config.sourceSpatialReference);return o.exceededTransferLimit&&s<(this._config.maxQueryDepth??0)?(o.features.forEach((e=>r.push(e))),this._queryPages(e,t,r,s+1)):(r.forEach((e=>o.features.push(e))),o)}_addRelatedFeatures(e){const t=new Map,r=e.features,s=this._serviceDefinition.relatedFeatures.joinField;for(const o of r){const e=o.attributes[s];t.set(e,o)}this._relatedFeatures=t}};v=(0,s._)([(0,l.j)("esri.layers.graphics.sources.connections.GeoEventConnection")],v);const Z=v;let F=class extends _{constructor(e){super(),this.connectionStatus="connected",this.errorString=null;const{geometryType:t,spatialReference:r,sourceSpatialReference:s}=e;this._featureZScaler=(0,h.k)(t,s,r)}updateCustomParameters(e){}sendMessageToSocket(e){}sendMessageToClient(e){if("type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)(0,c.pC)(this._featureZScaler)&&this._featureZScaler(t.geometry),this.onFeature(t)}this.onMessage(e)}};function R(e,t,r,s,o,n,i,c){const a={source:e,sourceSpatialReference:t,spatialReference:r,geometryType:s,filter:o,maxReconnectionAttempts:n,maxReconnectionInterval:i,customParameters:c};return e?e.path.startsWith("wss://")||e.path.startsWith("ws://")?new p(a):new Z(a):new F(a)}(0,s._)([(0,d.Cb)()],F.prototype,"connectionStatus",void 0),(0,s._)([(0,d.Cb)()],F.prototype,"errorString",void 0),F=(0,s._)([(0,l.j)("esri.layers.support.ClientSideConnection")],F)}}]);