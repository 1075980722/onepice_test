"use strict";(self["webpackChunkonepic"]=self["webpackChunkonepic"]||[]).push([[6496],{55905:function(e,t,r){function n(e,t,r){const n=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,a=t.typedBufferStride,i=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*o,c=(r&&r.srcIndex?r.srcIndex:0)*a;for(let f=0;f<i;++f)n[u]=s[c],u+=o,c+=a}function o(e,t){const r=e.count;t||(t=new e.TypedArrayConstructor(r));for(let n=0;n<r;n++)t[n]=e.get(n);return t}r.d(t,{m:function(){return o}});Object.freeze(Object.defineProperty({__proto__:null,copy:n,makeDense:o},Symbol.toStringTag,{value:"Module"}))},81770:function(e,t,r){r.d(t,{f:function(){return a},n:function(){return s}});var n=r(71946);function o(e,t,r){const n=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,a=t.typedBufferStride,i=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*o,c=(r&&r.srcIndex?r.srcIndex:0)*a;for(let f=0;f<i;++f)n[u]=s[c],n[u+1]=s[c+1],u+=o,c+=a}function s(e,t,r){const s=e.typedBuffer,a=e.typedBufferStride,i=t.typedBuffer,u=t.typedBufferStride,c=r?r.count:t.count;let f=(r&&r.dstIndex?r.dstIndex:0)*a,l=(r&&r.srcIndex?r.srcIndex:0)*u;if((0,n.U)(t.elementType)){const e=(0,n.Op)(t.elementType);if((0,n.B3)(t.elementType))for(let t=0;t<c;++t)s[f]=Math.max(i[l]/e,-1),s[f+1]=Math.max(i[l+1]/e,-1),f+=a,l+=u;else for(let t=0;t<c;++t)s[f]=i[l]/e,s[f+1]=i[l+1]/e,f+=a,l+=u}else o(e,t,r);return e}function a(e,t,r,n){const o=e.typedBuffer,s=e.typedBufferStride,a=n?.count??e.count;let i=(n?.dstIndex??0)*s;for(let u=0;u<a;++u)o[i]=t,o[i+1]=r,i+=s}Object.freeze(Object.defineProperty({__proto__:null,copy:o,fill:a,normalizeIntegerBuffer:s},Symbol.toStringTag,{value:"Module"}))},46510:function(e,t,r){r.d(t,{a:function(){return u},n:function(){return a},s:function(){return i},t:function(){return s}});var n=r(49448);function o(e,t,r){if(e.count!==t.count)return void n.c.error("source and destination buffers need to have the same number of elements");const o=e.count,s=r[0],a=r[1],i=r[2],u=r[3],c=r[4],f=r[5],l=r[6],d=r[7],p=r[8],h=r[9],m=r[10],y=r[11],T=r[12],g=r[13],w=r[14],x=r[15],_=e.typedBuffer,b=e.typedBufferStride,S=t.typedBuffer,O=t.typedBufferStride;for(let n=0;n<o;n++){const e=n*b,t=n*O,r=S[t],o=S[t+1],N=S[t+2],E=S[t+3];_[e]=s*r+c*o+p*N+T*E,_[e+1]=a*r+f*o+h*N+g*E,_[e+2]=i*r+l*o+m*N+w*E,_[e+3]=u*r+d*o+y*N+x*E}}function s(e,t,r){if(e.count!==t.count)return void n.c.error("source and destination buffers need to have the same number of elements");const o=e.count,s=r[0],a=r[1],i=r[2],u=r[3],c=r[4],f=r[5],l=r[6],d=r[7],p=r[8],h=e.typedBuffer,m=e.typedBufferStride,y=t.typedBuffer,T=t.typedBufferStride;for(let n=0;n<o;n++){const e=n*m,t=n*T,r=y[t],o=y[t+1],g=y[t+2],w=y[t+3];h[e]=s*r+u*o+l*g,h[e+1]=a*r+c*o+d*g,h[e+2]=i*r+f*o+p*g,h[e+3]=w}}function a(e,t){const r=Math.min(e.count,t.count),n=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,a=t.typedBufferStride;for(let i=0;i<r;i++){const e=i*o,t=i*a,r=s[t],u=s[t+1],c=s[t+2],f=r*r+u*u+c*c;if(f>0){const t=1/Math.sqrt(f);n[e]=t*r,n[e+1]=t*u,n[e+2]=t*c}}}function i(e,t,r){const n=Math.min(e.count,t.count),o=e.typedBuffer,s=e.typedBufferStride,a=t.typedBuffer,i=t.typedBufferStride;for(let u=0;u<n;u++){const e=u*s,t=u*i;o[e]=r*a[t],o[e+1]=r*a[t+1],o[e+2]=r*a[t+2],o[e+3]=r*a[t+3]}}function u(e,t,r){const n=Math.min(e.count,t.count),o=e.typedBuffer,s=e.typedBufferStride,a=t.typedBuffer,i=t.typedBufferStride;for(let u=0;u<n;u++){const e=u*s,t=u*i;o[e]=a[t]>>r,o[e+1]=a[t+1]>>r,o[e+2]=a[t+2]>>r,o[e+3]=a[t+3]>>r}}Object.freeze(Object.defineProperty({__proto__:null,normalize:a,scale:i,shiftRight:u,transformMat3:s,transformMat4:o},Symbol.toStringTag,{value:"Module"}))},55620:function(e,t,r){function n(e,t,r){const n=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,a=t.typedBufferStride,i=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*o,c=(r&&r.srcIndex?r.srcIndex:0)*a;for(let f=0;f<i;++f)n[u]=s[c],n[u+1]=s[c+1],n[u+2]=s[c+2],n[u+3]=s[c+3],u+=o,c+=a}function o(e,t,r,n,o,s){const a=e.typedBuffer,i=e.typedBufferStride,u=s?.count??e.count;let c=(s?.dstIndex??0)*i;for(let f=0;f<u;++f)a[c]=t,a[c+1]=r,a[c+2]=n,a[c+3]=o,c+=i}r.d(t,{c:function(){return n},f:function(){return o}});Object.freeze(Object.defineProperty({__proto__:null,copy:n,fill:o},Symbol.toStringTag,{value:"Module"}))},71946:function(e,t,r){function n(e){switch(e){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8}}function o(e){switch(e){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0}}function s(e){switch(e){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1}}function a(e){switch(e){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303}}r.d(t,{B3:function(){return o},Op:function(){return a},U:function(){return s},n1:function(){return n}})},5434:function(e,t,r){r.d(t,{gS:function(){return a}});var n=r(71946);function o(e,t,r){const n=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,a=t.typedBufferStride,i=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*o,c=(r&&r.srcIndex?r.srcIndex:0)*a;for(let f=0;f<i;++f){for(let e=0;e<9;++e)n[u+e]=s[c+e];u+=o,c+=a}}Object.freeze(Object.defineProperty({__proto__:null,copy:o},Symbol.toStringTag,{value:"Module"}));function s(e,t,r){const n=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,a=t.typedBufferStride,i=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*o,c=(r&&r.srcIndex?r.srcIndex:0)*a;for(let f=0;f<i;++f){for(let e=0;e<16;++e)n[u+e]=s[c+e];u+=o,c+=a}}Object.freeze(Object.defineProperty({__proto__:null,copy:s},Symbol.toStringTag,{value:"Module"}));r(55905),r(81770),r(34305),r(55620);function a(e,t){return new e(new ArrayBuffer(t*e.ElementCount*(0,n.n1)(e.ElementType)))}},65470:function(e,t,r){r.d(t,{C:function(){return c}});var n=r(94848),o=r(49724),s=r(22130),a=r(8693),i=r(92454),u=r(99659);class c{constructor(e){this._streamDataRequester=e}async loadJSON(e,t){return this._load("json",e,t)}async loadBinary(e,t){return(0,u.HK)(e)?((0,i.k_)(t),(0,u.AH)(e)):this._load("binary",e,t)}async loadImage(e,t){return this._load("image",e,t)}async _load(e,t,r){if((0,a.Wi)(this._streamDataRequester))return(await(0,n["default"])(t,{responseType:f[e]})).data;const u=await(0,o.q6)(this._streamDataRequester.request(t,e,r));if(!0===u.ok)return u.value;throw(0,i.r9)(u.error),new s.Z("",`Request for resource failed: ${u.error}`)}}const f={image:"image",binary:"array-buffer",json:"json"}},52709:function(e,t,r){r.d(t,{DA:function(){return a},jX:function(){return i},nh:function(){return s}});r(23767),r(8585),r(68696);var n=r(928),o=r(66795);function s(e,t=o.p){return"number"==typeof e?t(e):(0,n.Uc)(e)||(0,n.lq)(e)?new Uint32Array(e):e}function a(e){const t="number"==typeof e?e:e.length;if(t<3)return[];const r=t-2,n=(0,o.$z)(r);if("number"==typeof e){let e=0;for(let t=0;t<r;t+=1)t%2==0?(n[e++]=t,n[e++]=t+1,n[e++]=t+2):(n[e++]=t+1,n[e++]=t,n[e++]=t+2)}else{let t=0;for(let o=0;o<r;o+=1)if(o%2==0){const r=e[o],s=e[o+1],a=e[o+2];n[t++]=r,n[t++]=s,n[t++]=a}else{const r=e[o+1],s=e[o],a=e[o+2];n[t++]=r,n[t++]=s,n[t++]=a}}return n}function i(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;++t)n[e++]=0,n[e++]=t+1,n[e++]=t+2;return n}{const t=e[0];let o=e[1],s=0;for(let a=0;a<r;++a){const r=e[a+2];n[s++]=t,n[s++]=o,n[s++]=r,o=r}return n}}},92452:function(e,t,r){r.d(t,{$A:function(){return s},Ml:function(){return i},NM:function(){return o},i$:function(){return a}});var n=r(81789);class o{constructor(e){this.data=e,this.type="encoded-mesh-texture",this.encoding=n.Ti.KTX2_ENCODING}}function s(e){return"encoded-mesh-texture"===e?.type}async function a(e){return new Promise(((t,r)=>{const n=new Blob([e]),o=new FileReader;o.onload=()=>{const e=o.result;t(JSON.parse(e))},o.onerror=e=>{r(e)},o.readAsText(n)}))}async function i(e,t){return t===n.Ti.KTX2_ENCODING?new o(e):new Promise(((r,n)=>{const o=new Blob([e],{type:t}),s=URL.createObjectURL(o),a=new Image,i=()=>{URL.revokeObjectURL(s),"decode"in a?a.decode().then((()=>r(a)),(()=>r(a))).then(c):(r(a),c())},u=e=>{URL.revokeObjectURL(s),n(e),c()},c=()=>{a.removeEventListener("load",i),a.removeEventListener("error",u)};a.addEventListener("load",i),a.addEventListener("error",u),a.src=s}))}},56023:function(e,t,r){r.d(t,{Q:function(){return j}});r(57658);var n=r(93622),o=r(8693),s=r(94370),a=r(17923);function i(e={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,colorTextureTransform:null,normalTextureTransform:null,occlusionTextureTransform:null,emissiveTextureTransform:null,metallicRoughnessTextureTransform:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}function u(e,t={}){return{data:e,parameters:{wrap:{s:a.e8.REPEAT,t:a.e8.REPEAT,...t.wrap},noUnpackFlip:!0,mipmap:!1,...t}}}r(82801),r(23767),r(8585),r(68696);var c,f,l=r(22130),d=r(67322),p=r(92454),h=r(99659),m=r(86201),y=r(51802),T=r(44420),g=r(45263),w=r(76180),x=r(55905);class _{constructor(e){this._data=e,this._offset4=0,this._dataUint32=new Uint32Array(this._data,0,Math.floor(this._data.byteLength/4))}readUint32(){const e=this._offset4;return this._offset4+=1,this._dataUint32[e]}readUint8Array(e){const t=4*this._offset4;return this._offset4+=e/4,new Uint8Array(this._data,t,e)}remainingBytes(){return this._data.byteLength-4*this._offset4}}!function(e){e.SCALAR="SCALAR",e.VEC2="VEC2",e.VEC3="VEC3",e.VEC4="VEC4",e.MAT2="MAT2",e.MAT3="MAT3",e.MAT4="MAT4"}(c||(c={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(f||(f={}));var b=r(56616);const S={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},O={pbrMetallicRoughness:S,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},N={ESRI_externalColorMixMode:"tint"},E=(e={})=>{const t={...S,...e.pbrMetallicRoughness},r=A({...N,...e.extras});return{...O,...e,pbrMetallicRoughness:t,extras:r}};function A(e){switch(e.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:(0,b.Bg)(e.ESRI_externalColorMixMode),e.ESRI_externalColorMixMode="tint"}return e}const C={magFilter:a.cw.LINEAR,minFilter:a.cw.LINEAR_MIPMAP_LINEAR,wrapS:a.e8.REPEAT,wrapT:a.e8.REPEAT},R=e=>({...C,...e});function B(e){let t,r;return e.replace(/^(.*\/)?([^/]*)$/,((e,n,o)=>(t=n||"",r=o||"",""))),{dirPart:t,filePart:r}}var I=r(92452);const M={MAGIC:1179937895,CHUNK_TYPE_JSON:1313821514,CHUNK_TYPE_BIN:5130562,MIN_HEADER_LENGTH:20};class v{constructor(e,t,r,n){if(this._context=e,this.uri=t,this.json=r,this._glbBuffer=n,this._bufferLoaders=new Map,this._textureLoaders=new Map,this._textureCache=new Map,this._materialCache=new Map,this._nodeParentMap=new Map,this._nodeTransformCache=new Map,this._supportedExtensions=["KHR_texture_basisu"],this._baseUri=B(this.uri).dirPart,this._checkVersionSupported(),this._checkRequiredExtensionsSupported(),null==r.scenes)throw new l.Z("gltf-loader-unsupported-feature","Scenes must be defined.");if(null==r.meshes)throw new l.Z("gltf-loader-unsupported-feature","Meshes must be defined");if(null==r.nodes)throw new l.Z("gltf-loader-unsupported-feature","Nodes must be defined.");this._computeNodeParents()}static async load(e,t,r){if((0,h.HK)(t)){const r=(0,h.sJ)(t);if(r&&"model/gltf-binary"!==r.mediaType)try{const n=JSON.parse(r.isBase64?atob(r.data):r.data);return new v(e,t,n)}catch{}const n=(0,h.AH)(t);if(v._isGLBData(n))return this._fromGLBData(e,t,n)}if(t.endsWith(".gltf")){const n=await e.loadJSON(t,r);return new v(e,t,n)}const n=await e.loadBinary(t,r);if(v._isGLBData(n))return this._fromGLBData(e,t,n);const o=await e.loadJSON(t,r);return new v(e,t,o)}static _isGLBData(e){if(null==e)return!1;const t=new _(e);return t.remainingBytes()>=4&&t.readUint32()===M.MAGIC}static async _fromGLBData(e,t,r){const n=await v._parseGLBData(r);return new v(e,t,n.json,n.binaryData)}static async _parseGLBData(e){const t=new _(e);if(t.remainingBytes()<12)throw new l.Z("gltf-loader-error","GLB binary data is insufficiently large.");const r=t.readUint32(),o=t.readUint32(),s=t.readUint32();if(r!==M.MAGIC)throw new l.Z("gltf-loader-error","Magic first 4 bytes do not fit to expected GLB value.");if(e.byteLength<s)throw new l.Z("gltf-loader-error","GLB binary data is smaller than header specifies.");if(2!==o)throw new l.Z("gltf-loader-unsupported-feature","An unsupported GLB container version was detected. Only version 2 is supported.");let a,i,u=0;for(;t.remainingBytes()>=8;){const e=t.readUint32(),r=t.readUint32();if(0===u){if(r!==M.CHUNK_TYPE_JSON)throw new l.Z("gltf-loader-error","First GLB chunk must be JSON.");if(e<0)throw new l.Z("gltf-loader-error","No JSON data found.");a=await(0,I.i$)(t.readUint8Array(e))}else if(1===u){if(r!==M.CHUNK_TYPE_BIN)throw new l.Z("gltf-loader-unsupported-feature","Second GLB chunk expected to be BIN.");i=t.readUint8Array(e)}else n.Z.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] More than 2 GLB chunks detected. Skipping.");u+=1}if(!a)throw new l.Z("gltf-loader-error","No GLB JSON chunk detected.");return{json:a,binaryData:i}}async getBuffer(e,t){const r=this.json.buffers[e];if(null==r.uri){if(null==this._glbBuffer)throw new l.Z("gltf-loader-error","GLB buffer not present");return this._glbBuffer}const n=await this._getBufferLoader(e,t);if(n.byteLength!==r.byteLength)throw new l.Z("gltf-loader-error","Buffer byte lengths should match.");return n}async _getBufferLoader(e,t){const r=this._bufferLoaders.get(e);if(r)return r;const n=this.json.buffers[e].uri,o=this._context.loadBinary(this._resolveUri(n),t).then((e=>new Uint8Array(e)));return this._bufferLoaders.set(e,o),o}async getAccessor(e,t){if(!this.json.accessors)throw new l.Z("gltf-loader-unsupported-feature","Accessors missing.");const r=this.json.accessors[e];if(null==r?.bufferView)throw new l.Z("gltf-loader-unsupported-feature","Some accessor does not specify a bufferView.");if(r.type in[c.MAT2,c.MAT3,c.MAT4])throw new l.Z("gltf-loader-unsupported-feature",`AttributeType ${r.type} is not supported`);const n=this.json.bufferViews[r.bufferView],o=await this.getBuffer(n.buffer,t),s=F[r.type],a=G[r.componentType],i=s*a,u=n.byteStride||i;return{raw:o.buffer,byteStride:u,byteOffset:o.byteOffset+(n.byteOffset||0)+(r.byteOffset||0),entryCount:r.count,isDenselyPacked:u===i,componentCount:s,componentByteSize:a,componentType:r.componentType,min:r.min,max:r.max,normalized:!!r.normalized}}async getIndexData(e,t){if(null==e.indices)return;const r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case a.g.UNSIGNED_BYTE:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case a.g.UNSIGNED_SHORT:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case a.g.UNSIGNED_INT:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case a.g.UNSIGNED_BYTE:return(0,x.m)(this._wrapAccessor(w.D_,r));case a.g.UNSIGNED_SHORT:return(0,x.m)(this._wrapAccessor(w.av,r));case a.g.UNSIGNED_INT:return(0,x.m)(this._wrapAccessor(w.Nu,r))}}async getPositionData(e,t){if(null==e.attributes.POSITION)throw new l.Z("gltf-loader-unsupported-feature","No POSITION vertex data found.");const r=await this.getAccessor(e.attributes.POSITION,t);if(r.componentType!==a.g.FLOAT)throw new l.Z("gltf-loader-unsupported-feature","Expected type FLOAT for POSITION vertex attribute, but found "+a.g[r.componentType]);if(3!==r.componentCount)throw new l.Z("gltf-loader-unsupported-feature","POSITION vertex attribute must have 3 components, but found "+r.componentCount.toFixed());return this._wrapAccessor(w.ct,r)}async getNormalData(e,t){if(null==e.attributes.NORMAL)throw new l.Z("gltf-loader-error","No NORMAL vertex data found.");const r=await this.getAccessor(e.attributes.NORMAL,t);if(r.componentType!==a.g.FLOAT)throw new l.Z("gltf-loader-unsupported-feature","Expected type FLOAT for NORMAL vertex attribute, but found "+a.g[r.componentType]);if(3!==r.componentCount)throw new l.Z("gltf-loader-unsupported-feature","NORMAL vertex attribute must have 3 components, but found "+r.componentCount.toFixed());return this._wrapAccessor(w.ct,r)}async getTangentData(e,t){if(null==e.attributes.TANGENT)throw new l.Z("gltf-loader-error","No TANGENT vertex data found.");const r=await this.getAccessor(e.attributes.TANGENT,t);if(r.componentType!==a.g.FLOAT)throw new l.Z("gltf-loader-unsupported-feature","Expected type FLOAT for TANGENT vertex attribute, but found "+a.g[r.componentType]);if(4!==r.componentCount)throw new l.Z("gltf-loader-unsupported-feature","TANGENT vertex attribute must have 4 components, but found "+r.componentCount.toFixed());return new w.ek(r.raw,r.byteOffset,r.byteStride,r.byteOffset+r.byteStride*r.entryCount)}async getTextureCoordinates(e,t){if(null==e.attributes.TEXCOORD_0)throw new l.Z("gltf-loader-error","No TEXCOORD_0 vertex data found.");const r=await this.getAccessor(e.attributes.TEXCOORD_0,t);if(2!==r.componentCount)throw new l.Z("gltf-loader-unsupported-feature","TEXCOORD_0 vertex attribute must have 2 components, but found "+r.componentCount.toFixed());if(r.componentType===a.g.FLOAT)return this._wrapAccessor(w.Eu,r);if(!r.normalized)throw new l.Z("gltf-loader-unsupported-feature","Integer component types are only supported for a normalized accessor for TEXCOORD_0.");return P(r)}async getVertexColors(e,t){if(null==e.attributes.COLOR_0)throw new l.Z("gltf-loader-error","No COLOR_0 vertex data found.");const r=await this.getAccessor(e.attributes.COLOR_0,t);if(4!==r.componentCount&&3!==r.componentCount)throw new l.Z("gltf-loader-unsupported-feature","COLOR_0 attribute must have 3 or 4 components, but found "+r.componentCount.toFixed());if(4===r.componentCount){if(r.componentType===a.g.FLOAT)return this._wrapAccessor(w.ek,r);if(r.componentType===a.g.UNSIGNED_BYTE)return this._wrapAccessor(w.mc,r);if(r.componentType===a.g.UNSIGNED_SHORT)return this._wrapAccessor(w.v6,r)}else if(3===r.componentCount){if(r.componentType===a.g.FLOAT)return this._wrapAccessor(w.ct,r);if(r.componentType===a.g.UNSIGNED_BYTE)return this._wrapAccessor(w.ne,r);if(r.componentType===a.g.UNSIGNED_SHORT)return this._wrapAccessor(w.mw,r)}throw new l.Z("gltf-loader-unsupported-feature","Unsupported component type for COLOR_0 attribute: "+a.g[r.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t,r){let n=e.material?this._materialCache.get(e.material):void 0;if(!n){const o=null!=e.material?E(this.json.materials[e.material]):E(),s=o.pbrMetallicRoughness,a=this.hasVertexColors(e),i=this.getTexture(s.baseColorTexture,t),u=this.getTexture(o.normalTexture,t),c=r?this.getTexture(o.occlusionTexture,t):void 0,f=r?this.getTexture(o.emissiveTexture,t):void 0,l=r?this.getTexture(s.metallicRoughnessTexture,t):void 0,d=null!=e.material?e.material:-1;n={alphaMode:o.alphaMode,alphaCutoff:o.alphaCutoff,color:s.baseColorFactor,doubleSided:!!o.doubleSided,colorTexture:await i,normalTexture:await u,name:o.name,id:d,occlusionTexture:await c,emissiveTexture:await f,emissiveFactor:o.emissiveFactor,metallicFactor:s.metallicFactor,roughnessFactor:s.roughnessFactor,metallicRoughnessTexture:await l,hasVertexColors:a,ESRI_externalColorMixMode:o.extras.ESRI_externalColorMixMode,colorTextureTransform:s?.baseColorTexture?.extensions?.KHR_texture_transform,normalTextureTransform:o.normalTexture?.extensions?.KHR_texture_transform,occlusionTextureTransform:o.occlusionTexture?.extensions?.KHR_texture_transform,emissiveTextureTransform:o.emissiveTexture?.extensions?.KHR_texture_transform,metallicRoughnessTextureTransform:s?.metallicRoughnessTexture?.extensions?.KHR_texture_transform}}return n}async getTexture(e,t){if(!e)return;if(0!==(e.texCoord||0))throw new l.Z("gltf-loader-unsupported-feature","Only TEXCOORD with index 0 is supported.");const r=e.index,n=this.json.textures[r],o=R(null!=n.sampler?this.json.samplers[n.sampler]:{}),s=this._getTextureSourceId(n),a=this.json.images[s],i=await this._loadTextureImageData(r,n,t);return(0,d.s1)(this._textureCache,r,(()=>{const e=e=>33071===e||33648===e||10497===e,t=e=>{throw new l.Z("gltf-loader-error",`Unexpected TextureSampler WrapMode: ${e}`)};return{data:i,wrapS:e(o.wrapS)?o.wrapS:t(o.wrapS),wrapT:e(o.wrapT)?o.wrapT:t(o.wrapT),minFilter:o.minFilter,name:a.name,id:r}}))}getNodeTransform(e){if(void 0===e)return L;let t=this._nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this._getNodeParent(e)),n=this.json.nodes[e];n.matrix?t=(0,y.m)((0,s.c)(),r,n.matrix):n.translation||n.rotation||n.scale?(t=(0,s.b)(r),n.translation&&(0,y.w)(t,t,n.translation),n.rotation&&(D[3]=(0,T.g)(D,n.rotation),(0,y.e)(t,t,D[3],D)),n.scale&&(0,y.k)(t,t,n.scale)):t=(0,s.b)(r),this._nodeTransformCache.set(e,t)}return t}_wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}_resolveUri(e){return(0,h.hF)(e,this._baseUri)}_getNodeParent(e){return this._nodeParentMap.get(e)}_checkVersionSupported(){const e=m.G.parse(this.json.asset.version,"glTF");U.validate(e)}_checkRequiredExtensionsSupported(){const e=this.json;if(e.extensionsRequired&&!e.extensionsRequired.every((e=>this._supportedExtensions.includes(e))))throw new l.Z("gltf-loader-unsupported-feature","gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}_computeNodeParents(){this.json.nodes.forEach(((e,t)=>{e.children&&e.children.forEach((e=>{this._nodeParentMap.set(e,t)}))}))}async _loadTextureImageData(e,t,r){const n=this._textureLoaders.get(e);if(n)return n;const o=this._createTextureLoader(t,r);return this._textureLoaders.set(e,o),o}_getTextureSourceId(e){if(void 0!==e.extensions&&null!==e.extensions.KHR_texture_basisu)return e.extensions.KHR_texture_basisu.source;if(null!==e.source)return e.source;throw new l.Z("gltf-loader-unsupported-feature","Source is expected to be defined for a texture. It can also be omitted in favour of an KHR_texture_basisu extension tag.")}async _createTextureLoader(e,t){const r=this._getTextureSourceId(e),n=this.json.images[r];if(n.uri){if(n.uri.endsWith(".ktx2")){const e=await this._context.loadBinary(this._resolveUri(n.uri),t);return new I.NM(new Uint8Array(e))}return this._context.loadImage(this._resolveUri(n.uri),t)}if(null==n.bufferView)throw new l.Z("gltf-loader-unsupported-feature","Image bufferView must be defined.");if(null==n.mimeType)throw new l.Z("gltf-loader-unsupported-feature","Image mimeType must be defined.");const o=this.json.bufferViews[n.bufferView],s=await this.getBuffer(o.buffer,t);if(null!=o.byteStride)throw new l.Z("gltf-loader-unsupported-feature","byteStride not supported for image buffer");const a=s.byteOffset+(o.byteOffset||0);return(0,I.Ml)(new Uint8Array(s.buffer,a,o.byteLength),n.mimeType)}async getLoadedBuffersSize(){if(this._glbBuffer)return this._glbBuffer.byteLength;const e=await(0,p.WW)(Array.from(this._bufferLoaders.values())),t=await(0,p.WW)(Array.from(this._textureLoaders.values()));return e.reduce(((e,t)=>e+(t?.byteLength??0)),0)+t.reduce(((e,t)=>e+(t?(0,I.$A)(t)?t.data.byteLength:t.width*t.height*4:0)),0)}}const L=(0,y.A)((0,s.c)(),Math.PI/2),U=new m.G(2,0,"glTF"),D=(0,g.a)(),F={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},G={[a.g.BYTE]:1,[a.g.UNSIGNED_BYTE]:1,[a.g.SHORT]:2,[a.g.UNSIGNED_SHORT]:2,[a.g.FLOAT]:4,[a.g.UNSIGNED_INT]:4};function P(e){switch(e.componentType){case a.g.BYTE:return new w.Vs(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case a.g.UNSIGNED_BYTE:return new w.xA(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case a.g.SHORT:return new w.or(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case a.g.UNSIGNED_SHORT:return new w.TS(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case a.g.UNSIGNED_INT:return new w.qt(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case a.g.FLOAT:return new w.Eu(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount)}}let Z=0;async function j(e,t,r={},i=!0){const u=await v.load(e,t,r),c="gltf_"+Z++,f={lods:[],materials:new Map,textures:new Map,meta:k(u)},l=!(!u.json.asset.extras||"symbolResource"!==u.json.asset.extras.ESRI_type),d=new Map;await H(u,(async(e,t,l,p)=>{const h=d.get(l)??0;d.set(l,h+1);const m=void 0!==e.mode?e.mode:a.MX.TRIANGLES,y=m===a.MX.TRIANGLES||m===a.MX.TRIANGLE_STRIP||m===a.MX.TRIANGLE_FAN?m:null;if((0,o.Wi)(y))return void n.Z.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Unsupported primitive mode ("+a.MX[m]+"). Skipping primitive.");if(!u.hasPositions(e))return void n.Z.getLogger("esri.views.3d.glTF").warn("Skipping primitive without POSITION vertex attribute.");const T=u.getPositionData(e,r),g=u.getMaterial(e,r,i),w=u.hasNormals(e)?u.getNormalData(e,r):null,x=u.hasTangents(e)?u.getTangentData(e,r):null,_=u.hasTextureCoordinates(e)?u.getTextureCoordinates(e,r):null,b=u.hasVertexColors(e)?u.getVertexColors(e,r):null,S=u.getIndexData(e,r),O={transform:(0,s.b)(t),attributes:{position:await T,normal:w?await w:null,texCoord0:_?await _:null,color:b?await b:null,tangent:x?await x:null},indices:await S,primitiveType:y,material:K(f,await g,c)};let N=null;(0,o.pC)(f.meta)&&(0,o.pC)(f.meta.ESRI_lod)&&"screenSpaceRadius"===f.meta.ESRI_lod.metric&&(N=f.meta.ESRI_lod.thresholds[l]),f.lods[l]=f.lods[l]||{parts:[],name:p,lodThreshold:N},f.lods[l].parts[h]=O}));for(const n of f.lods)n.parts=n.parts.filter((e=>!!e));const p=await u.getLoadedBuffersSize();return{model:f,meta:{isEsriSymbolResource:l,uri:u.uri},customMeta:{},size:p}}function k(e){const t=e.json;let r=null;return t.nodes.forEach((e=>{const t=e.extras;(0,o.pC)(t)&&(t.ESRI_proxyEllipsoid||t.ESRI_lod)&&(r=t)})),r}async function H(e,t){const r=e.json,o=r.scenes[r.scene||0].nodes,s=o.length>1,a=[];for(const n of o){const e=r.nodes[n];a.push(i(n,0)),V(e)&&!s&&e.extensions.MSFT_lod.ids.forEach(((e,t)=>i(e,t+1)))}async function i(o,s){const u=r.nodes[o],c=e.getNodeTransform(o);if(null!=u.weights&&n.Z.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Morph targets are not supported."),null!=u.mesh){const e=r.meshes[u.mesh];for(const r of e.primitives)a.push(t(r,c,s,e.name))}for(const e of u.children||[])a.push(i(e,s))}await Promise.all(a)}function V(e){return e.extensions&&e.extensions.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function K(e,t,r){const n=t=>{const n=`${r}_tex_${t&&t.id}${t&&t.name?"_"+t.name:""}`;if(t&&!e.textures.has(n)){const r=u(t.data,{wrap:{s:t.wrapS,t:t.wrapT},mipmap:q.includes(t.minFilter),noUnpackFlip:!0});e.textures.set(n,r)}return n},o=`${r}_mat_${t.id}_${t.name}`;if(!e.materials.has(o)){const r=i({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?n(t.colorTexture):void 0,textureNormal:t.normalTexture?n(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?n(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?n(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?n(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],colorTextureTransform:t.colorTextureTransform,normalTextureTransform:t.normalTextureTransform,occlusionTextureTransform:t.occlusionTextureTransform,emissiveTextureTransform:t.emissiveTextureTransform,metallicRoughnessTextureTransform:t.metallicRoughnessTextureTransform,metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor});e.materials.set(o,r)}return o}const q=[a.cw.LINEAR_MIPMAP_LINEAR,a.cw.LINEAR_MIPMAP_NEAREST]},81789:function(e,t,r){var n,o,s,a,i,u,c,f,l,d,p;r.d(t,{CE:function(){return c},Gv:function(){return o},JJ:function(){return l},Rw:function(){return a},Ti:function(){return p},V_:function(){return u},Vr:function(){return n},hU:function(){return i}}),function(e){e[e.None=0]="None",e[e.Front=1]="Front",e[e.Back=2]="Back",e[e.COUNT=3]="COUNT"}(n||(n={})),function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(o||(o={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(s||(s={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(a||(a={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(i||(i={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee",e[e.COUNT=2]="COUNT"}(u||(u={})),function(e){e[e.STRETCH=1]="STRETCH",e[e.PAD=2]="PAD"}(c||(c={})),function(e){e[e.CHANGED=0]="CHANGED",e[e.UNCHANGED=1]="UNCHANGED"}(f||(f={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(l||(l={})),function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON"}(d||(d={})),function(e){e.DDS_ENCODING="image/vnd-ms.dds",e.KTX2_ENCODING="image/ktx2",e.BASIS_ENCODING="image/x.basis"}(p||(p={}))},27368:function(e,t,r){r.d(t,{K:function(){return n}});const n=2.1}}]);