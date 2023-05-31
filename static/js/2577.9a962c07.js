"use strict";(self["webpackChunkonepic"]=self["webpackChunkonepic"]||[]).push([[2577],{3542:function(e,t,i){i.d(t,{T:function(){return y}});i(57658);var s=i(92454),r=i(85737),a=i(95178),n=i(61723),o=(i(23767),i(8585),i(68696),i(8693)),l=i(30524),h=i(61293),d=i(77495),c=i(35981),p=i(17528),u=i(72136),g=i(79134);function f(e,t){const i=t.length;if(e<t[0].value||1===i)return t[0].size;for(let s=1;s<i;s++)if(e<t[s].value){const i=(e-t[s-1].value)/(t[s].value-t[s-1].value);return t[s-1].size+i*(t[s].size-t[s-1].size)}return t[i-1].size}class v{constructor(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.outsideLabelsVisible=!1,this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1},this._technique=p.v}getSizeVVFieldStops(e){const t=this._vvSizeFieldStops;if(t)switch(t.type){case"static":return t;case"level-dependent":return(0,o.Pt)(t.levels[e],(()=>{let i=1/0,s=0;for(const o in t.levels){const t=parseFloat(o),r=Math.abs(e-t);r<i&&(i=r,s=t)}if(i===1/0)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])};const r=2**((e-s)/2),a=(0,o.Wg)(t.levels[s]),n=new Float32Array(a.values);return n[2]*=r,n[3]*=r,{sizes:(0,o.Wg)(a.sizes),values:n}}));default:return}}get vvMaterialParameters(){return this._vvMaterialParameters}update(e){(0,o.pC)(this._vvInfo)&&this._updateVisualVariables(this._vvInfo.vvRanges,e)}setInfo(e,t,i){this._updateEffects(i),this._vvInfo=t,this._technique=(0,u.EJ)(e),this.rendererSchema=this._technique.createOrUpdateRendererSchema(this.rendererSchema,e)}getVariation(){return{...this._technique.getVariation(this.rendererSchema),outsideLabelsVisible:this.outsideLabelsVisible,supportsTextureFloat:(0,g.hc)("2d").supportsTextureFloat}}getVariationHash(){return this._technique.getVariationHash(this.rendererSchema)<<1|(this.outsideLabelsVisible?1:0)}_updateEffects(e){(0,o.pC)(e)?this.outsideLabelsVisible=e.excludedLabelsVisible:this.outsideLabelsVisible=!1}_updateVisualVariables(e,t){const i=this._vvMaterialParameters;if(i.vvOpacityEnabled=!1,i.vvSizeEnabled=!1,i.vvColorEnabled=!1,i.vvRotationEnabled=!1,!e)return;const s=e.size;if(s){if(i.vvSizeEnabled=!0,s.minMaxValue){const e=s.minMaxValue;let i,r;if((0,c.$K)(e.minSize)&&(0,c.$K)(e.maxSize))if((0,c.hj)(e.minSize)&&(0,c.hj)(e.maxSize))i=(0,l.F2)(e.minSize),r=(0,l.F2)(e.maxSize);else{const s=t.scale;i=(0,l.F2)(f(s,e.minSize.stops)),r=(0,l.F2)(f(s,e.maxSize.stops))}this.vvSizeMinMaxValue.set([e.minDataValue,e.maxDataValue,i,r])}if(s.scaleStops&&(this.vvSizeScaleStopsValue=(0,l.F2)(f(t.scale,s.scaleStops.stops))),s.unitValue){const e=(0,h.c9)(t.spatialReference)/d.a[s.unitValue.unit];this.vvSizeUnitValueToPixelsRatio=e/t.resolution}s.fieldStops&&(this._vvSizeFieldStops=s.fieldStops)}const r=e.color;r&&(i.vvColorEnabled=!0,this.vvColorValues.set(r.values),this.vvColors.set(r.colors));const a=e.opacity;a&&(i.vvOpacityEnabled=!0,this.vvOpacityValues.set(a.values),this.vvOpacities.set(a.opacities));const n=e.rotation;n&&(i.vvRotationEnabled=!0,i.vvRotationType=n.type)}}class y extends n.Z{constructor(e){super(e),this._rendererInfo=new v,this._materialItemsRequestQueue=new r.Z,this.attributeView=new a.H((()=>this.onAttributeStoreUpdate()))}destroy(){this.children.forEach((e=>e.destroy())),this.removeAllChildren(),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()}setRendererInfo(e,t,i){this._rendererInfo.setInfo(e,t,i),this.requestRender()}async getMaterialItems(e,t){if(!e||0===e.length)return[];const i=(0,s.hh)();return this._materialItemsRequestQueue.push({items:e,abortOptions:t,resolver:i}),this.requestRender(),i.promise}doRender(e){if(e.context.capabilities.enable("textureFloat"),e.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0){let t=this._materialItemsRequestQueue.pop();for(;t;)this._processMaterialItemRequest(e,t),t=this._materialItemsRequestQueue.pop()}super.doRender(e)}renderChildren(e){for(const t of this.children)t.commit(e);this._rendererInfo.update(e.state),super.renderChildren(e)}updateTransforms(e){if(this.children.some((e=>e.hasData)))for(const t of this.children)t.setTransform(e)}createRenderParams(e){const t=super.createRenderParams(e);return t.rendererInfo=this._rendererInfo,t.attributeView=this.attributeView,t}onAttributeStoreUpdate(){}_processMaterialItemRequest(e,{items:t,abortOptions:i,resolver:s}){const{painter:r,pixelRatio:a}=e,n=t.map((e=>r.textureManager.rasterizeItem(e.symbol,a,e.glyphIds,i)));Promise.all(n).then((e=>{if(!this.stage)return void s.reject();const i=e.map(((e,i)=>({id:t[i].id,mosaicItem:e})));s.resolve(i)}),s.reject)}}},90356:function(e,t,i){i.d(t,{G:function(){return a}});var s=i(92162),r=i(17923);class a extends s.Z{constructor(){super(...arguments),this._prevFBO=void 0,this.requiresDedicatedFBO=!1}dispose(){}doRender(e){const t=this.createRenderParams(e),{context:i,painter:s,profiler:a}=t;this._prevFBO=i.getBoundFramebufferObject(),a.recordContainerStart(this.name);const n=this._getFbo(t),o=s.getRenderTarget();i.bindFramebuffer(n),s.setRenderTarget(n),i.setDepthWriteEnabled(!0),i.setColorMask(!0,!0,!0,!0),i.setClearColor(0,0,0,0),i.setClearDepth(1),i.clear(i.gl.COLOR_BUFFER_BIT|i.gl.DEPTH_BUFFER_BIT),i.setDepthWriteEnabled(!1);for(const r of this.children)r.beforeRender(e);for(const r of this.children)r.processRender(t);for(const r of this.children)r.afterRender(e);s.setRenderTarget(o),s.releaseFbo(n),i.bindFramebuffer(this._prevFBO),s.beforeRenderLayer(t,this._clippingInfos?255:0,this.computedOpacity),n.colorTexture&&(i.setStencilTestEnabled(!1),i.setStencilWriteMask(0),s.blitTexture(i,n.colorTexture,r.cw.NEAREST)),s.compositeLayer(t,this.computedOpacity),a.recordContainerEnd()}createRenderParams(e){return{...super.createRenderParams(e),blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:1}}_getFbo(e){const{context:t,painter:i}=e,{width:s,height:r}=t.getViewport();return i.acquireFbo(s,r)}}},61723:function(e,t,i){i.d(t,{Z:function(){return h}});i(57658);var s=i(81653),r=i(34150),a=i(92162),n=i(15026),o=i(49355);const l=(e,t)=>e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col;class h extends a.Z{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(l),this.setStencilReference(e),super.renderChildren(e)}createRenderParams(e){const{state:t}=e,i=super.createRenderParams(e);return i.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,i.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),i}prepareRenderPasses(e){const t=super.prepareRenderPasses(e);return t.push(e.registerRenderPass({name:"stencil",brushes:[o.Z],drawPhase:r.jx.DEBUG|r.jx.MAP|r.jx.HIGHLIGHT,target:()=>this.getStencilTarget()})),(0,s.Z)("esri-tiles-debug")&&t.push(e.registerRenderPass({name:"tileInfo",brushes:[n.Z],drawPhase:r.jx.DEBUG,target:()=>this.children})),t}getStencilTarget(){return this.children}setStencilReference(e){let t=1;for(const i of this.children)i.stencilRef=t++}}},54572:function(e,t,i){i.d(t,{y:function(){return M}});var s=i(61445),r=i(30040),a=i(95822),n=i(22130),o=i(18105),l=i(58006),h=(i(94315),i(15055),i(77623)),d=i(32988),c=i(71862),p=i(60931);let u=class extends p.wq{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,s._)([(0,l.Cb)({readOnly:!0})],u.prototype,"version",null),u=(0,s._)([(0,h.j)("esri.views.layers.support.ClipArea")],u);const g=u;var f;let v=f=class extends g{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new f({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,s._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],v.prototype,"left",void 0),(0,s._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],v.prototype,"right",void 0),(0,s._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],v.prototype,"top",void 0),(0,s._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],v.prototype,"bottom",void 0),v=f=(0,s._)([(0,h.j)("esri.views.layers.support.ClipRect")],v);const y=v;i(80388);var m,_=i(92489),b=i(90421),w=i(50157),R=i(91407);const C={base:_.Z,key:"type",typeMap:{extent:w.Z,polygon:R.Z}};let S=m=class extends g{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){return new m({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,s._)([(0,l.Cb)({types:C,json:{read:b.im,write:!0}})],S.prototype,"geometry",void 0),S=m=(0,s._)([(0,h.j)("esri.views.layers.support.Geometry")],S);const V=S;let x=class extends g{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,s._)([(0,l.Cb)({type:[[[Number]]],json:{write:!0}})],x.prototype,"path",void 0),x=(0,s._)([(0,h.j)("esri.views.layers.support.Path")],x);const I=x,P=r.Z.ofType({key:"type",base:null,typeMap:{rect:y,path:I,geometry:V}}),M=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new P,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){const e=this.view?.spatialReferenceLocked??!0,t=this.view?.spatialReference;t&&e&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new n.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new d.W),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,o.YP)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),o.tX),(0,o.YP)((()=>this.layer?.opacity??1),(e=>{this.container&&(this.container.opacity=e)}),o.tX),(0,o.YP)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),o.tX),(0,o.YP)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),o.tX),(0,o.YP)((()=>this.highlightOptions),(e=>this.container.highlightOptions=e),o.tX),(0,o.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),o.tX),(0,o.YP)((()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null})),(({scale:e})=>{const t=null!=e&&this.isVisibleAtScale(e);t!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",t)}),o.tX)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){const e=this.view?.spatialReference;return null==e||this.supportsSpatialReference(e)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this.updatingHandles?.updating)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:i,maxScale:s}=t;return(0===i||e<=i)&&(0===s||e>=s)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),i&&(e.outsideScaleRange=i),e}addAttachHandles(e){this.addHandles(e,"attach")}};return(0,s._)([(0,l.Cb)()],t.prototype,"attached",void 0),(0,s._)([(0,l.Cb)({type:P,set(e){const t=(0,a.Z)(e,this._get("clips"),P);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,s._)([(0,l.Cb)()],t.prototype,"container",void 0),(0,s._)([(0,l.Cb)()],t.prototype,"moving",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,s._)([(0,l.Cb)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,s._)([(0,l.Cb)()],t.prototype,"updateRequested",void 0),(0,s._)([(0,l.Cb)()],t.prototype,"updating",null),(0,s._)([(0,l.Cb)()],t.prototype,"view",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",void 0),(0,s._)([(0,l.Cb)({type:c.Z})],t.prototype,"highlightOptions",void 0),t=(0,s._)([(0,h.j)("esri.views.2d.layers.LayerView2D")],t),t}},72577:function(e,t,i){i.r(t),i.d(t,{default:function(){return _}});i(57658);var s=i(61445),r=i(39264),a=i(30040),n=i(8693),o=i(18105),l=(i(93622),i(94315),i(15055),i(22130),i(81653),i(77623)),h=i(32988),d=i(90356),c=i(54572),p=i(57914),u=i(31885),g=i(31698);const f="sublayers",v="layerView",y=Object.freeze({remove(){},pause(){},resume(){}});let m=class extends((0,c.y)(g.Z)){constructor(){super(...arguments),this._highlightIds=new Map,this.container=new d.G}async fetchPopupFeatures(e){return Array.from(this.graphicsViews(),(t=>t.hitTest(e).filter((e=>!!e.popupTemplate)))).flat()}*graphicsViews(){(0,n.pC)(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():(0,n.pC)(this._graphicsViews)?yield*this._graphicsViews:yield*[]}async hitTest(e,t){return Array.from(this.graphicsViews(),(t=>{const i=t.hitTest(e);if((0,n.pC)(this._graphicsViewsFeatureCollectionMap)){const e=this._graphicsViewsFeatureCollectionMap.get(t);for(const t of i)!t.popupTemplate&&e.popupTemplate&&(t.popupTemplate=e.popupTemplate),t.sourceLayer=t.layer=this.layer}return i})).flat().map((t=>({type:"graphic",graphic:t,layer:this.layer,mapPoint:e})))}highlight(e){let t;"number"==typeof e?t=[e]:e instanceof r.Z?t=[e.uid]:Array.isArray(e)&&e.length>0?t="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):a.Z.isCollection(e)&&(t=e.map((e=>e&&e.uid)).toArray());const i=t?.filter(n.pC);return i?.length?(this._addHighlight(i),{remove:()=>{this._removeHighlight(i)}}):y}update(e){for(const t of this.graphicsViews())t.processUpdate(e)}attach(){const e=this.view,t=()=>this.requestUpdate(),i=this.layer.featureCollections;if((0,n.pC)(i)&&i.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of i){const i=new p.Z(this.view.featuresTilingScheme),r=new u.Z({view:e,graphics:s.source,renderer:s.renderer,requestUpdateCallback:t,container:i});this._graphicsViewsFeatureCollectionMap.set(r,s),this.container.addChild(r.container),this.addHandles([(0,o.YP)((()=>s.visible),(e=>r.container.visible=e),o.nn),(0,o.YP)((()=>r.updating),(()=>this.notifyChange("updating")),o.nn)],v)}this._updateHighlight()}else(0,n.pC)(this.layer.sublayers)&&this.addHandles((0,o.on)((()=>this.layer.sublayers),"change",(()=>this._createGraphicsViews()),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),f)}detach(){this._destroyGraphicsViews(),this.removeHandles(f)}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews())e.viewChange()}isUpdating(){for(const e of this.graphicsViews())if(e.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(v);for(const e of this.graphicsViews())e.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),(0,n.Wi)(this.layer.sublayers))return;const e=[],t=this.view,i=()=>this.requestUpdate();for(const s of this.layer.sublayers){const r=new h.W,a=new p.Z(this.view.featuresTilingScheme);a.fadeTransitionEnabled=!0;const n=new u.Z({view:t,graphics:s.graphics,requestUpdateCallback:i,container:a});this.addHandles([s.on("graphic-update",n.graphicUpdateHandler),(0,o.YP)((()=>s.visible),(e=>n.container.visible=e),o.nn),(0,o.YP)((()=>n.updating),(()=>this.notifyChange("updating")),o.nn)],v),r.addChild(n.container),this.container.addChild(r),e.push(n)}this._graphicsViews=e,this._updateHighlight()}_addHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;0===e?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const e=Array.from(this._highlightIds.keys());for(const t of this.graphicsViews())t.setHighlight(e)}};m=(0,s._)([(0,l.j)("esri.views.2d.layers.MapNotesLayerView2D")],m);const _=m},21486:function(e,t,i){i.d(t,{Z:function(){return _}});var s=i(8693),r=i(3542),a=(i(23767),i(8585),i(68696),i(18037)),n=i(57409),o=i(20282),l=i(64680),h=i(11289),d=i(75393),c=i(35981),p=i(15625),u=i(17923),g=i(50659);const f=Math.PI/180,v=4;class y extends d.s{constructor(e){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=(0,n.c)(),this._localOrigin={x:0,y:0},this._getBounds=e}destroy(){this._vao&&(this._vao.dispose(!0),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=(0,s.M2)(this._program)}doRender(e){const{context:t}=e,i=this._getBounds();if(i.length<1)return;this._createShaderProgram(t),this._updateMatricesAndLocalOrigin(e),this._updateBufferData(t,i),t.setBlendingEnabled(!0),t.setDepthTestEnabled(!1),t.setStencilWriteMask(0),t.setStencilTestEnabled(!1),t.setBlendFunction(u.zi.ONE,u.zi.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0);const s=this._program;t.bindVAO(this._vao),t.useProgram(s),s.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),t.gl.lineWidth(1),t.drawElements(u.MX.LINES,8*i.length,u.g.UNSIGNED_INT,0),t.bindVAO()}_createTransforms(){return{dvs:(0,n.c)()}}_createShaderProgram(e){if(this._program)return;const t="precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }",i="precision mediump float;\n      void main() {\n        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);\n      }";this._program=e.programCache.acquire(t,i,m().attributes)}_updateMatricesAndLocalOrigin(e){const{state:t}=e,{displayMat3:i,size:s,resolution:r,pixelRatio:n,rotation:d,viewpoint:c}=t,p=f*d,{x:u,y:g}=c.targetGeometry,v=(0,h.or)(u,t.spatialReference);this._localOrigin.x=v,this._localOrigin.y=g;const y=n*s[0],m=n*s[1],_=r*y,b=r*m,w=(0,a.g)(this._dvsMat3);(0,a.m)(w,w,i),(0,a.h)(w,w,(0,o.f)(y/2,m/2)),(0,a.d)(w,w,(0,l.f)(s[0]/_,-m/b,1)),(0,a.r)(w,w,-p)}_updateBufferData(e,t){const{x:i,y:s}=this._localOrigin,r=2*v*t.length,a=new Float32Array(r),n=new Uint32Array(8*t.length);let o=0,l=0;for(const h of t)h&&(a[2*o+0]=h[0]-i,a[2*o+1]=h[1]-s,a[2*o+2]=h[0]-i,a[2*o+3]=h[3]-s,a[2*o+4]=h[2]-i,a[2*o+5]=h[3]-s,a[2*o+6]=h[2]-i,a[2*o+7]=h[1]-s,n[l+0]=o+0,n[l+1]=o+3,n[l+2]=o+3,n[l+3]=o+2,n[l+4]=o+2,n[l+5]=o+1,n[l+6]=o+1,n[l+7]=o+0,o+=4,l+=8);if(this._vertexBuffer?this._vertexBuffer.setData(a.buffer):this._vertexBuffer=p.f.createVertex(e,u.l1.DYNAMIC_DRAW,a.buffer),this._indexBuffer?this._indexBuffer.setData(n):this._indexBuffer=p.f.createIndex(e,u.l1.DYNAMIC_DRAW,n),!this._vao){const t=m();this._vao=new g.U(e,t.attributes,t.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer)}}}const m=()=>(0,c.cM)("bounds",{geometry:[{location:0,name:"a_position",count:2,type:u.g.FLOAT}]});let _=class extends r.T{constructor(e){super(e),this.hasHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=(0,s.SC)(this._boundsRenderer)}enableRenderingBounds(e){this._boundsRenderer=new y(e),this.requestRender()}get hasLabels(){return!1}onTileData(e,t){e.patch(t),this.contains(e)||this.addChild(e),this.requestRender()}onTileError(e){e.clear(),this.contains(e)||this.addChild(e)}_renderChildren(e,t){for(const i of this.children)i.isReady&&i.hasData&&(i.commit(e),e.context.setStencilFunction(u.wb.EQUAL,i.stencilRef,255),i.getDisplayList().replay(e,i,t))}}},57914:function(e,t,i){i.d(t,{Z:function(){return a}});var s=i(34150),r=i(21486);class a extends r.Z{renderChildren(e){this.attributeView.update(),this.children.some((e=>e.hasData))&&(this.attributeView.bindTextures(e.context,!1),super.renderChildren(e),e.drawPhase===s.jx.MAP&&this._renderChildren(e),this.hasHighlight()&&e.drawPhase===s.jx.HIGHLIGHT&&this._renderHighlight(e),this._boundsRenderer&&this._boundsRenderer.doRender(e))}_renderHighlight(e){const{painter:t}=e,i=t.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind()}}},31698:function(e,t,i){i.d(t,{Z:function(){return g}});var s=i(61445),r=i(92698),a=i(96545),n=i(30374),o=i(68650),l=i(93622),h=i(8693),d=i(66144),c=i(58006),p=(i(94315),i(15055),i(77623));let u=class extends((0,n.p)((0,o.IG)((0,d.v)(a.Z.EventedMixin(r.Z))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";l.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e)}}))}get fullOpacity(){return(0,h.Pt)(this.get("layer.opacity"),1)*(0,h.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(e){this._overrideIfSome("visible",e)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{},t=this;return t.view&&t.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,s._)([(0,c.Cb)()],u.prototype,"fullOpacity",null),(0,s._)([(0,c.Cb)()],u.prototype,"layer",void 0),(0,s._)([(0,c.Cb)()],u.prototype,"parent",void 0),(0,s._)([(0,c.Cb)({readOnly:!0})],u.prototype,"suspended",null),(0,s._)([(0,c.Cb)({readOnly:!0})],u.prototype,"suspendInfo",null),(0,s._)([(0,c.Cb)({readOnly:!0})],u.prototype,"legendEnabled",null),(0,s._)([(0,c.Cb)({type:Boolean,readOnly:!0})],u.prototype,"updating",null),(0,s._)([(0,c.Cb)({readOnly:!0})],u.prototype,"updatingProgress",null),(0,s._)([(0,c.Cb)()],u.prototype,"visible",null),(0,s._)([(0,c.Cb)()],u.prototype,"view",void 0),u=(0,s._)([(0,p.j)("esri.views.layers.LayerView")],u);const g=u}}]);