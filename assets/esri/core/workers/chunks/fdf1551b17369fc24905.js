"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9296],{16453:(t,e,r)=>{r.d(e,{R:()=>_,w:()=>I});var s=r(43697),i=r(15923),o=r(70586),n=r(41103),a=r(22974),l=r(31263);class u{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(l.kk),this._values=new Map,this.multipleOriginsSupported=!0}clone(t){const e=new u,r=this._originStores[l.s3.DEFAULTS];r&&r.forEach(((t,r)=>{e.set(r,(0,a.d9)(t),l.s3.DEFAULTS)}));for(let r=l.s3.SERVICE;r<l.kk;r++){const s=this._originStores[r];s&&s.forEach(((s,i)=>{t&&t.has(i)||e.set(i,(0,a.d9)(s),r)}))}return e}get(t,e){const r=void 0===e?this._values:this._originStores[e];return r?r.get(t):void 0}keys(t){const e=null==t?this._values:this._originStores[t];return e?[...e.keys()]:[]}set(t,e,r=l.s3.USER){let s=this._originStores[r];if(s||(s=new Map,this._originStores[r]=s),s.set(t,e),!this._values.has(t)||(0,o.j0)(this._propertyOriginMap.get(t))<=r){const s=this._values.get(t);return this._values.set(t,e),this._propertyOriginMap.set(t,r),s!==e}return!1}delete(t,e=l.s3.USER){const r=this._originStores[e];if(!r)return;const s=r.get(t);if(r.delete(t),this._values.has(t)&&this._propertyOriginMap.get(t)===e){this._values.delete(t);for(let r=e-1;r>=0;r--){const e=this._originStores[r];if(e&&e.has(t)){this._values.set(t,e.get(t)),this._propertyOriginMap.set(t,r);break}}}return s}has(t,e){const r=void 0===e?this._values:this._originStores[e];return!!r&&r.has(t)}revert(t,e){for(;e>0&&!this.has(t,e);)--e;const r=this._originStores[e],s=r&&r.get(t),i=this._values.get(t);return this._values.set(t,s),this._propertyOriginMap.set(t,e),i!==s}originOf(t){return this._propertyOriginMap.get(t)||l.s3.DEFAULTS}forEach(t){this._values.forEach(t)}}var p=r(50549),h=r(1153),d=r(52011);const c=t=>{let e=class extends t{constructor(...t){super(...t);const e=(0,o.j0)((0,h.vw)(this)),r=e.store,s=new u;e.store=s,(0,n.M)(e,r,s)}read(t,e){(0,p.i)(this,t,e)}getAtOrigin(t,e){const r=g(this),s=(0,l.M9)(e);if("string"==typeof t)return r.get(t,s);const i={};return t.forEach((t=>{i[t]=r.get(t,s)})),i}originOf(t){return(0,l.x3)(this.originIdOf(t))}originIdOf(t){return g(this).originOf(t)}revert(t,e){const r=g(this),s=(0,l.M9)(e),i=(0,h.vw)(this);let o;o="string"==typeof t?"*"===t?r.keys(s):[t]:t,o.forEach((t=>{i.invalidate(t),r.revert(t,s),i.commit(t)}))}};return e=(0,s._)([(0,d.j)("esri.core.ReadOnlyMultiOriginJSONSupport")],e),e};function g(t){return(0,h.vw)(t).store}let y=class extends(c(i.Z)){};y=(0,s._)([(0,d.j)("esri.core.ReadOnlyMultiOriginJSONSupport")],y);var f=r(76169);const m=t=>{let e=class extends t{constructor(...t){super(...t)}clear(t,e="user"){return v(this).delete(t,(0,l.M9)(e))}write(t={},e){return(0,f.c)(this,t=t||{},e),t}setAtOrigin(t,e,r){(0,h.vw)(this).setAtOrigin(t,e,(0,l.M9)(r))}removeOrigin(t){const e=v(this),r=(0,l.M9)(t),s=e.keys(r);for(const t of s)e.originOf(t)===r&&e.set(t,e.get(t,r),l.s3.USER)}updateOrigin(t,e){const r=v(this),s=(0,l.M9)(e),i=this.get(t);for(let e=s+1;e<l.kk;++e)r.delete(t,e);r.set(t,i,s)}toJSON(t){return this.write({},t)}};return e=(0,s._)([(0,d.j)("esri.core.WriteableMultiOriginJSONSupport")],e),e.prototype.toJSON.isDefaultToJSON=!0,e};function v(t){return(0,h.vw)(t).store}const _=t=>{let e=class extends(m(c(t))){constructor(...t){super(...t)}};return e=(0,s._)([(0,d.j)("esri.core.MultiOriginJSONSupport")],e),e};let I=class extends(_(i.Z)){};I=(0,s._)([(0,d.j)("esri.core.MultiOriginJSONSupport")],I)},39296:(t,e,r)=>{r.r(e),r.d(e,{default:()=>d});var s=r(43697),i=r(20102),o=r(16453),n=r(1654),a=r(5600),l=(r(67676),r(75215),r(52011)),u=r(87085),p=r(16859);let h=class extends((0,p.I)((0,o.R)(u.Z))){constructor(t){super(t),this.resourceInfo=null,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise(((t,e)=>{(0,n.Os)((()=>{const t=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let r="Unsupported layer type";t&&(r+=" "+t),e(new i.Z("layer:unsupported-layer-type",r,{layerType:t}))}))})))}read(t,e){const r={resourceInfo:t};null!=t.id&&(r.id=t.id),null!=t.title&&(r.title=t.title),super.read(r,e)}write(t){return Object.assign(t||{},this.resourceInfo,{id:this.id})}};(0,s._)([(0,a.Cb)({readOnly:!0})],h.prototype,"resourceInfo",void 0),(0,s._)([(0,a.Cb)({type:["show","hide"]})],h.prototype,"listMode",void 0),(0,s._)([(0,a.Cb)({json:{read:!1},readOnly:!0,value:"unsupported"})],h.prototype,"type",void 0),h=(0,s._)([(0,l.j)("esri.layers.UnsupportedLayer")],h);const d=h},16859:(t,e,r)=>{r.d(e,{I:()=>_});var s=r(43697),i=r(40330),o=r(3172),n=r(66643),a=r(20102),l=r(92604),u=r(70586),p=r(95330),h=r(17452),d=r(5600),c=(r(67676),r(75215),r(71715)),g=r(52011),y=r(30556),f=r(65587),m=r(15235),v=r(86082);const _=t=>{let e=class extends t{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0}destroy(){this.portalItem=(0,u.SC)(this.portalItem)}set portalItem(t){t!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",t))}readPortalItem(t,e,r){if(e.itemId)return new m.default({id:e.itemId,portal:r&&r.portal})}writePortalItem(t,e){t&&t.id&&(e.itemId=t.id)}async loadFromPortal(t,e){if(this.portalItem&&this.portalItem.id)try{const s=await Promise.all([r.e(4547),r.e(9300),r.e(661)]).then(r.bind(r,18062));return(0,p.k_)(e),await s.load({instance:this,supportedTypes:t.supportedTypes,validateItem:t.validateItem,supportsData:t.supportsData,layerModuleTypeMap:t.layerModuleTypeMap},e)}catch(t){throw(0,p.D_)(t)||l.Z.getLogger(this.declaredClass).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${t}`),t}}async finishLoadEditablePortalLayer(t){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(t).catch((t=>((0,p.r9)(t),!0))))}async _fetchUserHasEditingPrivileges(t){const e=this.url?i.id?.findCredential(this.url):null;if(!e)return!0;const r=I.credential===e?I.user:await this._fetchEditingUser(t);return I.credential=e,I.user=r,(0,u.Wi)(r)||null==r.privileges||r.privileges.includes("features:user:edit")}async _fetchEditingUser(t){const e=this.portalItem?.portal?.user;if(e)return e;const r=i.id.findServerInfo(this.url??"");if(!r?.owningSystemUrl)return null;const s=`${r.owningSystemUrl}/sharing/rest`,a=f.Z.getDefault();if(a&&a.loaded&&(0,h.Fv)(a.restUrl)===(0,h.Fv)(s))return a.user;const l=`${s}/community/self`,p=(0,u.pC)(t)?t.signal:null,d=await(0,n.q6)((0,o.default)(l,{authMode:"no-prompt",query:{f:"json"},signal:p}));return d.ok?v.default.fromJSON(d.value.data):null}read(t,e){e&&(e.layer=this),super.read(t,e)}write(t,e){const r=e&&e.portal,s=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||f.Z.getDefault());return r&&s&&!(0,h.tm)(s.restUrl,r.restUrl)?(e.messages&&e.messages.push(new a.Z("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(t,{...e,layer:this})}};return(0,s._)([(0,d.Cb)({type:m.default})],e.prototype,"portalItem",null),(0,s._)([(0,c.r)("web-document","portalItem",["itemId"])],e.prototype,"readPortalItem",null),(0,s._)([(0,y.c)("web-document","portalItem",{itemId:{type:String}})],e.prototype,"writePortalItem",null),(0,s._)([(0,d.Cb)({clonable:!1})],e.prototype,"resourceReferences",void 0),(0,s._)([(0,d.Cb)({readOnly:!0})],e.prototype,"userHasEditingPrivileges",void 0),e=(0,s._)([(0,g.j)("esri.layers.mixins.PortalLayer")],e),e},I={credential:null,user:null}}}]);