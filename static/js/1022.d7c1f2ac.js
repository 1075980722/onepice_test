"use strict";(self["webpackChunkonepic"]=self["webpackChunkonepic"]||[]).push([[1022],{3542:function(e,t,i){i.d(t,{T:function(){return v}});i(57658);var s=i(92454),r=i(85737),a=i(95178),n=i(61723),o=(i(23767),i(8585),i(68696),i(8693)),l=i(30524),h=i(61293),d=i(77495),c=i(35981),u=i(17528),p=i(72136),m=i(79134);function y(e,t){const i=t.length;if(e<t[0].value||1===i)return t[0].size;for(let s=1;s<i;s++)if(e<t[s].value){const i=(e-t[s-1].value)/(t[s].value-t[s-1].value);return t[s-1].size+i*(t[s].size-t[s-1].size)}return t[i-1].size}class g{constructor(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.outsideLabelsVisible=!1,this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1},this._technique=u.v}getSizeVVFieldStops(e){const t=this._vvSizeFieldStops;if(t)switch(t.type){case"static":return t;case"level-dependent":return(0,o.Pt)(t.levels[e],(()=>{let i=1/0,s=0;for(const o in t.levels){const t=parseFloat(o),r=Math.abs(e-t);r<i&&(i=r,s=t)}if(i===1/0)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])};const r=2**((e-s)/2),a=(0,o.Wg)(t.levels[s]),n=new Float32Array(a.values);return n[2]*=r,n[3]*=r,{sizes:(0,o.Wg)(a.sizes),values:n}}));default:return}}get vvMaterialParameters(){return this._vvMaterialParameters}update(e){(0,o.pC)(this._vvInfo)&&this._updateVisualVariables(this._vvInfo.vvRanges,e)}setInfo(e,t,i){this._updateEffects(i),this._vvInfo=t,this._technique=(0,p.EJ)(e),this.rendererSchema=this._technique.createOrUpdateRendererSchema(this.rendererSchema,e)}getVariation(){return{...this._technique.getVariation(this.rendererSchema),outsideLabelsVisible:this.outsideLabelsVisible,supportsTextureFloat:(0,m.hc)("2d").supportsTextureFloat}}getVariationHash(){return this._technique.getVariationHash(this.rendererSchema)<<1|(this.outsideLabelsVisible?1:0)}_updateEffects(e){(0,o.pC)(e)?this.outsideLabelsVisible=e.excludedLabelsVisible:this.outsideLabelsVisible=!1}_updateVisualVariables(e,t){const i=this._vvMaterialParameters;if(i.vvOpacityEnabled=!1,i.vvSizeEnabled=!1,i.vvColorEnabled=!1,i.vvRotationEnabled=!1,!e)return;const s=e.size;if(s){if(i.vvSizeEnabled=!0,s.minMaxValue){const e=s.minMaxValue;let i,r;if((0,c.$K)(e.minSize)&&(0,c.$K)(e.maxSize))if((0,c.hj)(e.minSize)&&(0,c.hj)(e.maxSize))i=(0,l.F2)(e.minSize),r=(0,l.F2)(e.maxSize);else{const s=t.scale;i=(0,l.F2)(y(s,e.minSize.stops)),r=(0,l.F2)(y(s,e.maxSize.stops))}this.vvSizeMinMaxValue.set([e.minDataValue,e.maxDataValue,i,r])}if(s.scaleStops&&(this.vvSizeScaleStopsValue=(0,l.F2)(y(t.scale,s.scaleStops.stops))),s.unitValue){const e=(0,h.c9)(t.spatialReference)/d.a[s.unitValue.unit];this.vvSizeUnitValueToPixelsRatio=e/t.resolution}s.fieldStops&&(this._vvSizeFieldStops=s.fieldStops)}const r=e.color;r&&(i.vvColorEnabled=!0,this.vvColorValues.set(r.values),this.vvColors.set(r.colors));const a=e.opacity;a&&(i.vvOpacityEnabled=!0,this.vvOpacityValues.set(a.values),this.vvOpacities.set(a.opacities));const n=e.rotation;n&&(i.vvRotationEnabled=!0,i.vvRotationType=n.type)}}class v extends n.Z{constructor(e){super(e),this._rendererInfo=new g,this._materialItemsRequestQueue=new r.Z,this.attributeView=new a.H((()=>this.onAttributeStoreUpdate()))}destroy(){this.children.forEach((e=>e.destroy())),this.removeAllChildren(),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()}setRendererInfo(e,t,i){this._rendererInfo.setInfo(e,t,i),this.requestRender()}async getMaterialItems(e,t){if(!e||0===e.length)return[];const i=(0,s.hh)();return this._materialItemsRequestQueue.push({items:e,abortOptions:t,resolver:i}),this.requestRender(),i.promise}doRender(e){if(e.context.capabilities.enable("textureFloat"),e.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0){let t=this._materialItemsRequestQueue.pop();for(;t;)this._processMaterialItemRequest(e,t),t=this._materialItemsRequestQueue.pop()}super.doRender(e)}renderChildren(e){for(const t of this.children)t.commit(e);this._rendererInfo.update(e.state),super.renderChildren(e)}updateTransforms(e){if(this.children.some((e=>e.hasData)))for(const t of this.children)t.setTransform(e)}createRenderParams(e){const t=super.createRenderParams(e);return t.rendererInfo=this._rendererInfo,t.attributeView=this.attributeView,t}onAttributeStoreUpdate(){}_processMaterialItemRequest(e,{items:t,abortOptions:i,resolver:s}){const{painter:r,pixelRatio:a}=e,n=t.map((e=>r.textureManager.rasterizeItem(e.symbol,a,e.glyphIds,i)));Promise.all(n).then((e=>{if(!this.stage)return void s.reject();const i=e.map(((e,i)=>({id:t[i].id,mosaicItem:e})));s.resolve(i)}),s.reject)}}},61022:function(e,t,i){i.r(t),i.d(t,{default:function(){return $}});var s=i(61445),r=i(39264),a=i(30040),n=i(18105),o=i(58006),l=(i(94315),i(15055),i(77623)),h=i(85654),d=i(72102),c=i(54572),u=i(31885),p=i(61717),m=i(92698),y=i(93622),g=i(8693),v=i(92454),_=i(46814),f=i(74952),x=i(32988),b=i(63796),w=i(30482);let R=class extends m.Z{constructor(){super(...arguments),this.attached=!1,this.container=new x.W,this.updateRequested=!1,this.type="imagery",this._bitmapView=new f.c}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch((e=>{(0,v.D_)(e)||y.Z.getLogger(this.declaredClass).error(e)}))}hitTest(e){return new r.Z({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new w.Z({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}redraw(){this.strategy.updateExports((async e=>{const{source:t}=e;if(!t||t instanceof ImageBitmap)return;const i=await this.layer.applyRenderer({extent:t.extent,pixelBlock:t.originalPixelBlock??t.pixelBlock});t.filter=e=>this.layer.pixelFilter?this.layer.applyFilter(e):{...i,extent:t.extent}})).catch((e=>{(0,v.D_)(e)||y.Z.getLogger(this.declaredClass).error(e)}))}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(1===e.length&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,i=e.map((e=>e.source)).filter((e=>e.extent&&e.extent.intersects(t))).map((e=>({extent:e.extent,pixelBlock:e.originalPixelBlock}))),s=(0,_.Kh)(i,t);return(0,g.pC)(s)?{extent:s.extent,pixelBlock:s.pixelBlock}:null}return null}async _fetchImage(e,t,i,s){(s=s||{}).timeExtent=this.timeExtent,s.requestAsImageElement=!0,s.returnImageBitmap=!0;const r=await this.layer.fetchImage(e,t,i,s);if(r.imageBitmap)return r.imageBitmap;const a=await this.layer.applyRenderer(r.pixelData,{signal:s.signal}),n=new b.Z(a.pixelBlock,a.extent?.clone(),r.pixelData.pixelBlock);return n.filter=e=>this.layer.applyFilter(e),n}};(0,s._)([(0,o.Cb)()],R.prototype,"attached",void 0),(0,s._)([(0,o.Cb)()],R.prototype,"container",void 0),(0,s._)([(0,o.Cb)()],R.prototype,"layer",void 0),(0,s._)([(0,o.Cb)()],R.prototype,"strategy",void 0),(0,s._)([(0,o.Cb)()],R.prototype,"timeExtent",void 0),(0,s._)([(0,o.Cb)()],R.prototype,"view",void 0),(0,s._)([(0,o.Cb)()],R.prototype,"updateRequested",void 0),(0,s._)([(0,o.Cb)()],R.prototype,"updating",null),(0,s._)([(0,o.Cb)()],R.prototype,"type",void 0),R=(0,s._)([(0,l.j)("esri.views.2d.layers.imagery.ImageryView2D")],R);const S=R;var C=i(94848),P=i(30374),V=i(50157),E=i(3225),M=i(45982),z=i(76417),I=i(34150),q=i(92162);class B extends q.Z{constructor(){super(...arguments),this.symbolTypes=["triangle"]}get requiresDedicatedFBO(){return!1}prepareRenderPasses(e){const t=e.registerRenderPass({name:"imagery (vf)",brushes:[z.Z],target:()=>this.children,drawPhase:I.jx.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===I.jx.MAP&&this.symbolTypes.forEach((t=>{e.renderPass=t,super.doRender(e)}))}}var F=i(37501);let D=class extends m.Z{constructor(e){super(e),this._loading=null,this.update=(0,v.Ds)(((e,t)=>this._update(e,t).catch((e=>{(0,v.D_)(e)||y.Z.getLogger(this.declaredClass).error(e)}))))}get updating(){return!!this._loading}redraw(e){if(!this.container.children.length)return;const t=this.container.children[0];t.symbolizerParameters=e,t.invalidateVAO(),this.container.symbolTypes="wind_speed"===e.style?["scalar","triangle"]:"simple_scalar"===e.style?["scalar"]:["triangle"],this.container.requestRender()}async _update(e,t,i){if(!e.stationary)return;const{extent:s,spatialReference:r}=e.state,a=new V.Z({xmin:s.xmin,ymin:s.ymin,xmax:s.xmax,ymax:s.ymax,spatialReference:r}),[n,o]=e.state.size;this._loading=this.fetchPixels(a,n,o,i);const l=await this._loading;this._addToDisplay(l,t,e.state),this._loading=null}_addToDisplay(e,t,i){if((0,g.Wi)(e.pixelBlock))return this.container.children.forEach((e=>e.destroy())),void this.container.removeAllChildren();const{extent:s,pixelBlock:r}=e,a=new F.F(r);a.offset=[0,0],a.symbolizerParameters=t,a.rawPixelData=e,a.invalidateVAO(),a.x=s.xmin,a.y=s.ymax,a.pixelRatio=i.pixelRatio,a.rotation=i.rotation,a.resolution=i.resolution,a.width=r.width*t.symbolTileSize,a.height=r.height*t.symbolTileSize,this.container.children.forEach((e=>e.destroy())),this.container.removeAllChildren(),this.container.symbolTypes="wind_speed"===t.style?["scalar","triangle"]:"simple_scalar"===t.style?["scalar"]:["triangle"],this.container.addChild(a)}};(0,s._)([(0,o.Cb)()],D.prototype,"fetchPixels",void 0),(0,s._)([(0,o.Cb)()],D.prototype,"container",void 0),(0,s._)([(0,o.Cb)()],D.prototype,"_loading",void 0),(0,s._)([(0,o.Cb)()],D.prototype,"updating",null),D=(0,s._)([(0,l.j)("esri.views.2d.layers.imagery.ImageryVFStrategy")],D);const T=D;let A=class extends P.r{constructor(){super(...arguments),this.attached=!1,this.container=new B,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(e,t,i,s)=>{const r=await this._projectFullExtentPromise,{symbolTileSize:a}=this.layer.renderer,{extent:n,width:o,height:l}=(0,M.BH)(e,t,i,a,r);if((0,g.pC)(r)&&!r.intersects(e))return{extent:n,pixelBlock:null};const h={bbox:`${n.xmin}, ${n.ymin}, ${n.xmax}, ${n.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:a,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(h)){const e=this.getPixelData();if((0,g.pC)(e)&&`${e.extent.xmin}, ${e.extent.ymin}, ${e.extent.xmax}, ${e.extent.ymax}`===h.bbox)return e}const{pixelData:d}=await this.layer.fetchImage(n,o,l,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:s});this._dataParameters=h;const c=d?.pixelBlock;return(0,g.Wi)(c)?{extent:n,pixelBlock:null}:{extent:n,pixelBlock:"vector-uv"===this.layer.rasterInfo.dataType?(0,g.Wg)((0,M.KC)(c,"vector-uv")):c}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new T({container:this.container,fetchPixels:this._fetchpixels}),this.handles.add((0,n.YP)((()=>this.layer.renderer),(e=>this._updateSymbolizerParams(e)),n.tX),"attach")}detach(){this._strategy.destroy(),this.container.children.forEach((e=>e.destroy())),this.container.removeAllChildren(),this.handles.remove("attach"),this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){const e=this.container.children[0]?.rawPixelData;if(this.updating||!e)return null;const{extent:t,pixelBlock:i}=e;return{extent:t,pixelBlock:i}}hitTest(e){return new r.Z({attributes:{},geometry:e.clone(),layer:this.layer})}update(e){this._strategy.update(e,this._symbolizerParams)}redraw(){const{renderer:e}=this.layer;e&&(this._updateSymbolizerParams(e),this._strategy.redraw(this._symbolizerParams))}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,i=this._dataParameters.time===e.time,s=this._dataParameters.symbolTileSize===e.symbolTileSize,r=this._dataParameters.bbox===e.bbox;return t&&i&&s&&r}async _getProjectedFullExtent(e){try{return await(0,E.tB)(this.layer.fullExtent,e)}catch(t){try{const t=(await(0,C["default"])(this.layer.url,{query:{option:"footprints",outSR:e.wkid||JSON.stringify(e.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return t?V.Z.fromJSON(t):null}catch{return null}}}_updateSymbolizerParams(e){"vector-field"===e.type&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};(0,s._)([(0,o.Cb)()],A.prototype,"attached",void 0),(0,s._)([(0,o.Cb)()],A.prototype,"container",void 0),(0,s._)([(0,o.Cb)()],A.prototype,"layer",void 0),(0,s._)([(0,o.Cb)()],A.prototype,"timeExtent",void 0),(0,s._)([(0,o.Cb)()],A.prototype,"type",void 0),(0,s._)([(0,o.Cb)()],A.prototype,"view",void 0),(0,s._)([(0,o.Cb)()],A.prototype,"updating",null),A=(0,s._)([(0,l.j)("esri.views.2d.layers.imagery.VectorFieldView2D")],A);const Z=A;var O=i(22130),k=i(12218),U=i(12799),L=i(13384),H=i(23319);const N=e=>{let t=class extends e{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(e,t){const{layer:i}=this;if(!e)throw new O.Z("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i});const{popupEnabled:s}=i,r=(0,H.V)(i,t);if(!s||(0,g.Wi)(r))throw new O.Z("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:s,popupTemplate:r});const a=await r.getRequiredFields(),n=new L.Z;n.timeExtent=this.timeExtent,n.geometry=e,n.outFields=a,n.outSpatialReference=e.spatialReference;const{resolution:o,spatialReference:l}=this.view,h="2d"===this.view.type?new k.Z(o,o,l):new k.Z(.5*o,.5*o,l),{returnTopmostRaster:d,showNoDataRecords:c}=r.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},u={returnDomainValues:!0,returnTopmostRaster:d,pixelSize:h,showNoDataRecords:c,signal:(0,g.pC)(t)?t.signal:null};return i.queryVisibleRasters(n,u).then((e=>e))}canResume(){return!!super.canResume()&&!this.timeExtent?.isEmpty}};return(0,s._)([(0,o.Cb)()],t.prototype,"layer",void 0),(0,s._)([(0,o.Cb)()],t.prototype,"suspended",void 0),(0,s._)([(0,o.Cb)(U.qG)],t.prototype,"timeExtent",void 0),(0,s._)([(0,o.Cb)()],t.prototype,"view",void 0),t=(0,s._)([(0,l.j)("esri.views.layers.ImageryLayerView")],t),t};var W=i(31698),j=i(42769);let G=class extends(N((0,j.Z)((0,c.y)(W.Z)))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new h.J,this._highlightView=void 0,this.layer=null,this.subview=null}get pixelData(){const{subview:e}=this;return this.updating||!e?null:"getPixelData"in e?e.getPixelData():null}async hitTest(e,t){return this.subview?[{type:"graphic",graphic:this.subview.hitTest(e),layer:this.layer,mapPoint:e}]:null}update(e){this.subview?.update(e)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new u.Z({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new p.Z(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.addAttachHandles([(0,n.YP)((()=>this.layer.blendMode??"normal"),(e=>this.subview&&(this.subview.container.blendMode=e)),n.tX),(0,n.YP)((()=>this.layer.effect??null),(e=>this.subview&&(this.subview.container.effect=e)),n.tX),(0,n.YP)((()=>this.layer.exportImageServiceParameters.version),(e=>{e&&this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())}),n.Z_),(0,n.YP)((()=>this.timeExtent),(e=>{const{subview:t}=this;t&&(t.timeExtent=e,"redraw"in t?this.requestUpdate():t.redrawOrRefetch())}),n.Z_),this.layer.on("redraw",(()=>{const{subview:e}=this;e&&("redraw"in e?e.redraw():e.redrawOrRefetch())})),(0,n.YP)((()=>this.layer.renderer),(()=>this._setSubView()))])}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),this.subview?.destroy(),this.subview=null,this._highlightView?.destroy(),this._exportImageVersion=-1}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,t){if(!((Array.isArray(e)?e[0]:a.Z.isCollection(e)?e.getItemAt(0):e)instanceof r.Z))return{remove:()=>{}};let i=[];return Array.isArray(e)||a.Z.isCollection(e)?i=e.map((e=>e.clone())):e instanceof r.Z&&(i=[e.clone()]),this._highlightGraphics.addMany(i),{remove:()=>{this._highlightGraphics.removeMany(i)}}}async doRefresh(){this.requestUpdate()}isUpdating(){return!this.subview||this.subview.updating}_setSubView(){if(!this.view)return;const e=this.layer.renderer?.type;let t="imagery";if("vector-field"===e?t="imageryVF":"flow"===e&&(t="flow"),this.subview){const{type:e}=this.subview;if(e===t)return this._attachSubview(this.subview),void("flow"===e?this.subview.redrawOrRefetch():"imagery"===e&&"lerc"===this.layer.format?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),this.subview?.destroy()}this.subview="imagery"===t?new S({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):"imageryVF"===t?new Z({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new d.Z({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}_attachSubview(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0),e.container.blendMode=this.layer.blendMode,e.container.effect=this.layer.effect)}_detachSubview(e){e?.attached&&(this.container.removeChild(e.container),e.detach(),e.attached=!1)}};(0,s._)([(0,o.Cb)()],G.prototype,"pixelData",null),(0,s._)([(0,o.Cb)()],G.prototype,"subview",void 0),G=(0,s._)([(0,l.j)("esri.views.2d.layers.ImageryLayerView2D")],G);const $=G},21486:function(e,t,i){i.d(t,{Z:function(){return f}});var s=i(8693),r=i(3542),a=(i(23767),i(8585),i(68696),i(18037)),n=i(57409),o=i(20282),l=i(64680),h=i(11289),d=i(75393),c=i(35981),u=i(15625),p=i(17923),m=i(50659);const y=Math.PI/180,g=4;class v extends d.s{constructor(e){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=(0,n.c)(),this._localOrigin={x:0,y:0},this._getBounds=e}destroy(){this._vao&&(this._vao.dispose(!0),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=(0,s.M2)(this._program)}doRender(e){const{context:t}=e,i=this._getBounds();if(i.length<1)return;this._createShaderProgram(t),this._updateMatricesAndLocalOrigin(e),this._updateBufferData(t,i),t.setBlendingEnabled(!0),t.setDepthTestEnabled(!1),t.setStencilWriteMask(0),t.setStencilTestEnabled(!1),t.setBlendFunction(p.zi.ONE,p.zi.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0);const s=this._program;t.bindVAO(this._vao),t.useProgram(s),s.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),t.gl.lineWidth(1),t.drawElements(p.MX.LINES,8*i.length,p.g.UNSIGNED_INT,0),t.bindVAO()}_createTransforms(){return{dvs:(0,n.c)()}}_createShaderProgram(e){if(this._program)return;const t="precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }",i="precision mediump float;\n      void main() {\n        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);\n      }";this._program=e.programCache.acquire(t,i,_().attributes)}_updateMatricesAndLocalOrigin(e){const{state:t}=e,{displayMat3:i,size:s,resolution:r,pixelRatio:n,rotation:d,viewpoint:c}=t,u=y*d,{x:p,y:m}=c.targetGeometry,g=(0,h.or)(p,t.spatialReference);this._localOrigin.x=g,this._localOrigin.y=m;const v=n*s[0],_=n*s[1],f=r*v,x=r*_,b=(0,a.g)(this._dvsMat3);(0,a.m)(b,b,i),(0,a.h)(b,b,(0,o.f)(v/2,_/2)),(0,a.d)(b,b,(0,l.f)(s[0]/f,-_/x,1)),(0,a.r)(b,b,-u)}_updateBufferData(e,t){const{x:i,y:s}=this._localOrigin,r=2*g*t.length,a=new Float32Array(r),n=new Uint32Array(8*t.length);let o=0,l=0;for(const h of t)h&&(a[2*o+0]=h[0]-i,a[2*o+1]=h[1]-s,a[2*o+2]=h[0]-i,a[2*o+3]=h[3]-s,a[2*o+4]=h[2]-i,a[2*o+5]=h[3]-s,a[2*o+6]=h[2]-i,a[2*o+7]=h[1]-s,n[l+0]=o+0,n[l+1]=o+3,n[l+2]=o+3,n[l+3]=o+2,n[l+4]=o+2,n[l+5]=o+1,n[l+6]=o+1,n[l+7]=o+0,o+=4,l+=8);if(this._vertexBuffer?this._vertexBuffer.setData(a.buffer):this._vertexBuffer=u.f.createVertex(e,p.l1.DYNAMIC_DRAW,a.buffer),this._indexBuffer?this._indexBuffer.setData(n):this._indexBuffer=u.f.createIndex(e,p.l1.DYNAMIC_DRAW,n),!this._vao){const t=_();this._vao=new m.U(e,t.attributes,t.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer)}}}const _=()=>(0,c.cM)("bounds",{geometry:[{location:0,name:"a_position",count:2,type:p.g.FLOAT}]});let f=class extends r.T{constructor(e){super(e),this.hasHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=(0,s.SC)(this._boundsRenderer)}enableRenderingBounds(e){this._boundsRenderer=new v(e),this.requestRender()}get hasLabels(){return!1}onTileData(e,t){e.patch(t),this.contains(e)||this.addChild(e),this.requestRender()}onTileError(e){e.clear(),this.contains(e)||this.addChild(e)}_renderChildren(e,t){for(const i of this.children)i.isReady&&i.hasData&&(i.commit(e),e.context.setStencilFunction(p.wb.EQUAL,i.stencilRef,255),i.getDisplayList().replay(e,i,t))}}},61717:function(e,t,i){i.d(t,{Z:function(){return h}});var s=i(61445),r=(i(93622),i(94315),i(15055),i(22130),i(81653),i(77623)),a=i(34150),n=i(21486),o=i(17923);let l=class extends n.Z{doRender(e){e.drawPhase===a.jx.HIGHLIGHT&&super.doRender(e)}renderChildren(e){if(this.attributeView.update(),!this.children.some((e=>e.hasData)))return;this.attributeView.bindTextures(e.context),super.renderChildren(e);const{painter:t}=e,i=t.effects.highlight;i.bind(e),e.context.setColorMask(!0,!0,!0,!0),e.context.clear(o.lk.COLOR_BUFFER_BIT),this._renderChildren(e,i.defines.concat(["highlightAll"])),i.draw(e),i.unbind()}};l=(0,s._)([(0,r.j)("esri.views.2d.layers.support.HighlightGraphicContainer")],l);const h=l},30482:function(e,t,i){i.d(t,{Z:function(){return R}});i(57658);var s=i(61445),r=i(92698),a=(i(81653),i(92454)),n=i(58006),o=(i(94315),i(15055),i(77623)),l=i(74440),h=i(54597),d=i(86052);const c=Math.PI/180;function u(e){return e*c}function p(e,t){const i=u(t.rotation),s=Math.abs(Math.cos(i)),r=Math.abs(Math.sin(i)),[a,n]=t.size;return e[0]=Math.round(n*r+a*s),e[1]=Math.round(n*s+a*r),e}function m(e,t,i,s){const[r,a]=t,[n,o]=s,l=.5*i;return e[0]=r-l*n,e[1]=a-l*o,e[2]=r+l*n,e[3]=a+l*o,e}var y=i(15347),g=i(86491),v=i(93752);const _=(0,l.Ue)(),f=[0,0],x=new v.Z(0,0,0,0),b={container:null,fetchSource:null,requestUpdate:null,imageMaxWidth:2048,imageMaxHeight:2048,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1};let w=class extends r.Z{constructor(e){super(e),this._imagePromise=null,this.bitmaps=[],this.hidpi=b.hidpi,this.imageMaxWidth=b.imageMaxWidth,this.imageMaxHeight=b.imageMaxHeight,this.imageRotationSupported=b.imageRotationSupported,this.imageNormalizationSupported=b.imageNormalizationSupported,this.update=(0,a.Ds)((async(e,t)=>{if((0,a.k_)(t),!e.stationary||this.destroyed)return;const i=e.state,s=(0,h.C5)(i.spatialReference),r=this.hidpi?e.pixelRatio:1,n=this.imageNormalizationSupported&&i.worldScreenWidth&&i.worldScreenWidth<i.size[0],o=this.imageMaxWidth??0,l=this.imageMaxHeight??0;n?(f[0]=i.worldScreenWidth,f[1]=i.size[1]):this.imageRotationSupported?(f[0]=i.size[0],f[1]=i.size[1]):p(f,i);const d=Math.floor(f[0]*r)>o||Math.floor(f[1]*r)>l,c=s&&(i.extent.xmin<s.valid[0]||i.extent.xmax>s.valid[1]),u=!this.imageNormalizationSupported&&c,m=!d&&!u,y=this.imageRotationSupported?i.rotation:0,g=this.container.children.slice();if(m){const e=n?i.paddedViewState.center:i.center;this._imagePromise&&console.error("Image promise was not defined!"),this._imagePromise=this._singleExport(i,f,e,i.resolution,y,r,t)}else{let e=Math.min(o,l);u&&(e=Math.min(i.worldScreenWidth,e)),this._imagePromise=this._tiledExport(i,e,r,t)}try{const e=await this._imagePromise??[];(0,a.k_)(t);const i=[];if(this._imagePromise=null,this.destroyed)return;this.bitmaps=e;for(const t of g)e.includes(t)||i.push(t.fadeOut().then((()=>{t.remove(),t.destroy()})));for(const t of e)i.push(t.fadeIn());await Promise.all(i)}catch(x){this._imagePromise=null,(0,a.r9)(x)}}),5e3),this.updateExports=(0,a.Ds)((async e=>{const t=[];for(const i of this.container.children){if(!i.visible||!i.stage)return;t.push(e(i).then((()=>{i.invalidateTexture(),i.requestRender()})))}this._imagePromise=(0,a.as)(t).then((()=>this._imagePromise=null)),await this._imagePromise}))}destroy(){this.bitmaps.forEach((e=>e.destroy())),this.bitmaps=[]}get updating(){return!this.destroyed&&null!==this._imagePromise}async _export(e,t,i,s,r,n){const o=await this.fetchSource(e,Math.floor(t*r),Math.floor(i*r),{rotation:s,pixelRatio:r,signal:n});(0,a.k_)(n);const l=new y.eY(null,{immutable:!0,requestRenderOnSourceChangedEnabled:!0});return l.x=e.xmin,l.y=e.ymax,l.resolution=e.width/t,l.rotation=s,l.pixelRatio=r,l.opacity=0,this.container.addChild(l),await l.setSourceAsync(o,n),(0,a.k_)(n),l}async _singleExport(e,t,i,s,r,a,n){m(_,i,s,t);const o=(0,l.HH)(_,e.spatialReference);return[await this._export(o,t[0],t[1],r,a,n)]}_tiledExport(e,t,i,s){const r=d.Z.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),a=new g.Z(r),n=a.getTileCoverage(e);if(!n)return null;const o=[];return n.forEach(((r,n,h,d)=>{x.set(r,n,h,0),a.getTileBounds(_,x);const c=(0,l.HH)(_,e.spatialReference);o.push(this._export(c,t,t,0,i,s).then((e=>(0!==d&&(x.set(r,n,h,d),a.getTileBounds(_,x),e.x=_[0],e.y=_[3]),e))))})),Promise.all(o)}};(0,s._)([(0,n.Cb)()],w.prototype,"_imagePromise",void 0),(0,s._)([(0,n.Cb)()],w.prototype,"bitmaps",void 0),(0,s._)([(0,n.Cb)()],w.prototype,"container",void 0),(0,s._)([(0,n.Cb)()],w.prototype,"fetchSource",void 0),(0,s._)([(0,n.Cb)()],w.prototype,"hidpi",void 0),(0,s._)([(0,n.Cb)()],w.prototype,"imageMaxWidth",void 0),(0,s._)([(0,n.Cb)()],w.prototype,"imageMaxHeight",void 0),(0,s._)([(0,n.Cb)()],w.prototype,"imageRotationSupported",void 0),(0,s._)([(0,n.Cb)()],w.prototype,"imageNormalizationSupported",void 0),(0,s._)([(0,n.Cb)()],w.prototype,"requestUpdate",void 0),(0,s._)([(0,n.Cb)()],w.prototype,"updating",null),w=(0,s._)([(0,o.j)("esri.views.2d.layers.support.ExportStrategy")],w);const R=w}}]);