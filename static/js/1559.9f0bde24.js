"use strict";(self["webpackChunkonepic"]=self["webpackChunkonepic"]||[]).push([[1559],{72102:function(e,t,a){a.d(t,{Z:function(){return ve}});var s=a(61445),i=a(39264),r=a(92698),n=a(18105),o=a(58006),l=(a(94315),a(15055),a(77623)),c=a(8693),d=(a(57658),a(30524));function h(e){const t=u(f(e)),a=t,s=!0,i=Math.max(t/2,5),r=Math.round((0,d.F2)(e.maxPathLength)/i)+1,n=10,{density:o}=e;return{smoothing:(0,d.F2)(e.smoothing),interpolate:!0,velocityScale:"flow-from"===e.flowRepresentation?1:-1,verticesPerLine:r,minSpeedThreshold:.001,segmentLength:i,maxTurnAngle:1,collisions:s,lineCollisionWidth:a,lineSpacing:n,density:o}}function u(e){return"constant"===e.kind?e.value[0]:e.values[e.values.length-1]}function p(e){const t=e.toRgba();return[t[0]/255,t[1]/255,t[2]/255,t[3]]}function m(e){return{kind:"constant",value:[.1,.1,.1,1]}}function f(e){if(!e.hasVisualVariables("size"))return{kind:"constant",value:[(0,d.F2)(e.trailWidth)]};const t=e.getVisualVariablesForType("size")[0],a=[],s=[];let i;if(t.stops){for(const e of t.stops)a.push(e.value),s.push((0,d.F2)(e.size));i=t.stops.length}else a.push(t.minDataValue,t.maxDataValue),s.push((0,d.F2)(t.minSize),(0,d.F2)(t.maxSize)),i=2;return{kind:"ramp",stops:a,values:s,count:i}}function _(e){if(!e.hasVisualVariables("color"))return{kind:"constant",value:p(e.color)};const t=e.getVisualVariablesForType("color")[0],a=[],s=[];for(const i of t.stops)a.push(i.value),Array.prototype.push.apply(s,p(i.color));return{kind:"ramp",stops:a,values:s,count:t.stops.length}}function y(e){if(!e.hasVisualVariables("opacity"))return{kind:"constant",value:[1]};const t=e.getVisualVariablesForType("opacity")[0],a=[],s=[];for(const i of t.stops)a.push(i.value),s.push(i.opacity);return{kind:"ramp",stops:a,values:s,count:t.stops.length}}function g(e,t,a,s){switch(t){case"int":e.setUniform1iv(a,s);break;case"float":e.setUniform1fv(a,s);break;case"vec2":e.setUniform2fv(a,s);break;case"vec3":e.setUniform3fv(a,s);break;case"vec4":e.setUniform4fv(a,s)}}function v(e,t,a,s){"constant"===s.kind?g(e,a,`u_${t}`,s.value):(g(e,"float",`u_${t}_stops`,s.stops),g(e,a,`u_${t}_values`,s.values),e.setUniform1i(`u_${t}_count`,s.count))}function w(e,t){let a=!0;return a=a&&e.collisions===t.collisions,a=a&&e.density===t.density,a=a&&e.interpolate===t.interpolate,a=a&&e.lineCollisionWidth===t.lineCollisionWidth,a=a&&e.lineSpacing===t.lineSpacing,a=a&&e.maxTurnAngle===t.maxTurnAngle,a=a&&e.minSpeedThreshold===t.minSpeedThreshold,a=a&&e.segmentLength===t.segmentLength,a=a&&e.smoothing===t.smoothing,a=a&&e.velocityScale===t.velocityScale,a=a&&e.verticesPerLine===t.verticesPerLine,a}function x(e,t){return e===t||!(!(0,c.pC)(e)||!(0,c.pC)(t))&&e.equals(t)}function S(e,t){if(!w(e.simulationSettings,t.simulationSettings))return!1;if(!x(e.timeExtent,t.timeExtent))return!1;let a=!0;return a=a&&e.loadImagery===t.loadImagery,a=a&&e.createFlowMesh===t.createFlowMesh,a=a&&e.color.kind===t.color.kind,a=a&&e.opacity.kind===t.opacity.kind,a=a&&e.size.kind===t.size.kind,a}a(23767),a(8585),a(68696);var b=a(92454),D=a(15625),A=a(17923),R=a(29964),C=a(50659),M=a(64816);class z{constructor(e){this._params=e,this.animated=!1}isCompatible(e){if(!(e instanceof z))return!1;if(!x(this._params.timeExtent,e._params.timeExtent))return!1;let t=!0;return t=t&&this._params.loadImagery===e._params.loadImagery,t=t&&this._params.color.kind===e._params.color.kind,t=t&&this._params.opacity.kind===e._params.opacity.kind,t}async load(e,t){const{extent:a,size:s}=e;(0,b.k_)(t);const i=await this._params.loadImagery(a,s[0],s[1],this._params.timeExtent,t);return new F(i,{color:this._params.color,opacity:this._params.opacity})}render(e,t,a){const{context:s}=e,{program:i}=a;s.setFaceCullingEnabled(!1),s.setBlendingEnabled(!0),s.setBlendFunction(A.zi.ONE,A.zi.ONE_MINUS_SRC_ALPHA),s.useProgram(i),i.setUniformMatrix3fv("u_dvsMat3",t.dvsMat3),s.bindTexture(a.texture,0),i.setUniform1i("u_texture",0),i.setUniform1f("u_Min",a.min),i.setUniform1f("u_Max",a.max),v(i,"color","vec4",this._params.color),v(i,"opacity","float",this._params.opacity),s.bindVAO(a.vertexArray),s.drawArrays(A.MX.TRIANGLE_STRIP,0,4)}}const I=new Map;I.set("a_position",0),I.set("a_texcoord",1);const P={geometry:[new M.G("a_position",2,A.g.UNSIGNED_SHORT,0,8),new M.G("a_texcoord",2,A.g.UNSIGNED_SHORT,4,8)]},T={vsPath:"raster/flow/imagery",fsPath:"raster/flow/imagery",attributes:I};class F{constructor(e,t){this._flowData=e,this._values=t}attach(e){const{context:t}=e,{width:a,height:s}=this._flowData,i=D.f.createVertex(t,A.l1.STATIC_DRAW,new Uint16Array([0,0,0,1,a,0,1,1,0,s,0,0,a,s,1,0])),r=new C.U(t,I,P,{geometry:i}),n=[];"ramp"===this._values.color.kind&&n.push("vvColor"),"ramp"===this._values.opacity.kind&&n.push("vvOpacity");const o=e.painter.materialManager.getProgram(T,n);let l=1e6,c=-1e6;for(let u=0;u<s;u++)for(let e=0;e<a;e++)if(0!==this._flowData.mask[u*a+e]){const t=this._flowData.data[2*(u*a+e)+0],s=this._flowData.data[2*(u*a+e)+1],i=Math.sqrt(t*t+s*s);l=Math.min(l,i),c=Math.max(c,i)}const d=new Uint8Array(4*a*s);for(let u=0;u<s;u++)for(let e=0;e<a;e++)if(0!==this._flowData.mask[u*a+e]){const t=this._flowData.data[2*(u*a+e)+0],s=this._flowData.data[2*(u*a+e)+1],i=(Math.sqrt(t*t+s*s)-l)/(c-l);d[4*(u*a+e)+0]=255*i,d[4*(u*a+e)+1]=0,d[4*(u*a+e)+2]=0,d[4*(u*a+e)+3]=255}else d[4*(u*a+e)+0]=0,d[4*(u*a+e)+1]=0,d[4*(u*a+e)+2]=0,d[4*(u*a+e)+3]=0;const h=new R.x(t,{pixelFormat:A.VI.RGBA,internalFormat:A.VI.RGBA,samplingMode:A.cw.LINEAR,dataType:A.Br.UNSIGNED_BYTE,wrapMode:A.e8.CLAMP_TO_EDGE,flipped:!0,width:a,height:s},d);this.vertexArray=r,this.program=o,this.texture=h,this.min=l,this.max=c,this._flowData=null}detach(){this.vertexArray.dispose(),this.texture.dispose()}get ready(){return this.program.compiled}}class k{constructor(e){this._params=e}get animated(){return this._params.flowSpeed>0}isCompatible(e){return e instanceof k&&S(this._params,e._params)}async load(e,t){const{extent:a,size:s}=e;(0,b.k_)(t);const i=await this._params.loadImagery(a,s[0],s[1],this._params.timeExtent,t),{vertexData:r,indexData:n}=await this._params.createFlowMesh("Particles",this._params.simulationSettings,i,t);return new O(r,n,{color:this._params.color,opacity:this._params.opacity,size:this._params.size})}render(e,t,a){const{context:s}=e,{program:i}=a;s.setFaceCullingEnabled(!1),s.setBlendingEnabled(!0),s.setBlendFunction(A.zi.ONE,A.zi.ONE_MINUS_SRC_ALPHA),s.useProgram(i),i.setUniform1f("u_time",t.time),i.setUniform1f("u_trailLength",this._params.trailLength),i.setUniform1f("u_flowSpeed",this._params.flowSpeed),i.setUniform1f("u_featheringSize",this._params.featheringSize),i.setUniform1f("u_featheringOffset",this._params.featheringOffset),i.setUniform1f("u_introFade",this._params.introFade?1:0),i.setUniform1f("u_fadeToZero",this._params.fadeToZero?1:0),i.setUniform1f("u_decayRate",this._params.decayRate),i.setUniformMatrix3fv("u_dvsMat3",t.dvsMat3),i.setUniformMatrix3fv("u_displayViewMat3",t.displayViewMat3),v(i,"color","vec4",this._params.color),v(i,"opacity","float",this._params.opacity),v(i,"size","float",this._params.size),s.bindVAO(a.vertexArray),s.drawElements(A.MX.TRIANGLES,a.indexCount,A.g.UNSIGNED_INT,0)}}const E=new Map;E.set("a_xyts0",0),E.set("a_xyts1",1),E.set("a_typeIdDurationSeed",2),E.set("a_extrudeInfo",3);const U={geometry:[new M.G("a_xyts0",4,A.g.FLOAT,0,64),new M.G("a_xyts1",4,A.g.FLOAT,16,64),new M.G("a_typeIdDurationSeed",4,A.g.FLOAT,32,64),new M.G("a_extrudeInfo",4,A.g.FLOAT,48,64)]},V={vsPath:"raster/flow/particles",fsPath:"raster/flow/particles",attributes:E};class O{constructor(e,t,a){this._vertexData=e,this._indexData=t,this._values=a}attach(e){const{context:t}=e,a=D.f.createVertex(t,A.l1.STATIC_DRAW,this._vertexData),s=D.f.createIndex(t,A.l1.STATIC_DRAW,this._indexData),i=new C.U(t,E,U,{geometry:a},s),r=[];"ramp"===this._values.color.kind&&r.push("vvColor"),"ramp"===this._values.opacity.kind&&r.push("vvOpacity"),"ramp"===this._values.size.kind&&r.push("vvSize");const n=e.painter.materialManager.getProgram(V,r);this.vertexArray=i,this.program=n,this.indexCount=this._indexData.length,this._vertexData=null,this._indexData=null}detach(){this.vertexArray.dispose()}get ready(){return this.program.compiled}}class L{constructor(e){this._styles=e}get animated(){return this._styles.reduce(((e,t)=>e||t.animated),!1)}isCompatible(e){if(!(e instanceof L))return!1;if(this._styles.length!==e._styles.length)return!1;const t=this._styles.length;for(let a=0;a<t;a++)if(!this._styles[a].isCompatible(e._styles[a]))return!1;return!0}async load(e,t){const a=await Promise.all(this._styles.map((a=>a.load(e,t))));return new N(a)}render(e,t,a){for(let s=0;s<this._styles.length;s++)this._styles[s].render(e,t,a.resources[s])}}class N{constructor(e){this.resources=e}attach(e){for(const t of this.resources)t.attach(e)}detach(){for(const e of this.resources)e.detach()}get ready(){return this.resources.reduce(((e,t)=>e&&t.ready),!0)}}class G{constructor(e){this._params=e}get animated(){return this._params.flowSpeed>0}isCompatible(e){return e instanceof G&&S(this._params,e._params)}async load(e,t){const{extent:a,size:s}=e;(0,b.k_)(t);const i=await this._params.loadImagery(a,s[0],s[1],this._params.timeExtent,t),{vertexData:r,indexData:n}=await this._params.createFlowMesh("Streamlines",this._params.simulationSettings,i,t);return new q(r,n,{color:this._params.color,opacity:this._params.opacity,size:this._params.size})}render(e,t,a){const{context:s}=e,{program:i}=a;s.setFaceCullingEnabled(!1),s.setBlendingEnabled(!0),s.setBlendFunction(A.zi.ONE,A.zi.ONE_MINUS_SRC_ALPHA),s.useProgram(i),i.setUniform1f("u_time",t.time),i.setUniform1f("u_trailLength",this._params.trailLength),i.setUniform1f("u_flowSpeed",this._params.flowSpeed),i.setUniform1f("u_featheringSize",this._params.featheringSize),i.setUniform1f("u_featheringOffset",this._params.featheringOffset),i.setUniform1f("u_introFade",this._params.introFade?1:0),i.setUniform1f("u_fadeToZero",this._params.fadeToZero?1:0),i.setUniform1f("u_decayRate",this._params.decayRate),i.setUniformMatrix3fv("u_dvsMat3",t.dvsMat3),i.setUniformMatrix3fv("u_displayViewMat3",t.displayViewMat3),v(i,"color","vec4",this._params.color),v(i,"opacity","float",this._params.opacity),v(i,"size","float",this._params.size),s.bindVAO(a.vertexArray),s.drawElements(A.MX.TRIANGLES,a.indexCount,A.g.UNSIGNED_INT,0)}}const Z=new Map;Z.set("a_positionAndSide",0),Z.set("a_timeInfo",1),Z.set("a_extrude",2),Z.set("a_speed",3);const W={geometry:[new M.G("a_positionAndSide",3,A.g.FLOAT,0,36),new M.G("a_timeInfo",3,A.g.FLOAT,12,36),new M.G("a_extrude",2,A.g.FLOAT,24,36),new M.G("a_speed",1,A.g.FLOAT,32,36)]},j={vsPath:"raster/flow/streamlines",fsPath:"raster/flow/streamlines",attributes:Z};class q{constructor(e,t,a){this._vertexData=e,this._indexData=t,this._values=a}attach(e){const{context:t}=e,a=D.f.createVertex(t,A.l1.STATIC_DRAW,this._vertexData),s=D.f.createIndex(t,A.l1.STATIC_DRAW,this._indexData),i=new C.U(t,Z,W,{geometry:a},s),r=[];"ramp"===this._values.color.kind&&r.push("vvColor"),"ramp"===this._values.opacity.kind&&r.push("vvOpacity"),"ramp"===this._values.size.kind&&r.push("vvSize");const n=e.painter.materialManager.getProgram(j,r);this.vertexArray=i,this.program=n,this.indexCount=this._indexData.length,this._vertexData=null,this._indexData=null}detach(){this.vertexArray.dispose()}get ready(){return this.program.compiled}}const B=4,H=1,K=.5,X=!0,Y=!0,$=2.3;function Q(e,t){const{flowSpeed:a,trailLength:s}=e,i=h(e);let r=null;const n={opacity:y(e),size:f(e)};let o=_(e);if("none"===e.background)n.color=o;else{"constant"===o.kind&&(o={kind:"ramp",stops:[0,1],values:[0,0,0,1,o.value[0],o.value[1],o.value[2],o.value[3]],count:2});const e={loadImagery:t.loadImagery,timeExtent:t.timeExtent,color:o,opacity:{kind:"constant",value:[1]}};r=new z(e),n.color=m()}const l={loadImagery:t.loadImagery,createFlowMesh:t.createFlowMesh,simulationSettings:i,timeExtent:t.timeExtent,trailLength:s,flowSpeed:a,featheringSize:H,featheringOffset:K,introFade:X,fadeToZero:Y,decayRate:$,color:n.color,opacity:n.opacity,size:n.size},d="butt"===e.trailCap||u(f(e))<=B?new G(l):new k(l);return(0,c.pC)(r)?new L([r,d]):d}var J=a(66224),ee=a(57409),te=a(17674);class ae extends te.Z{constructor(){super(...arguments),this._visualState={time:0,dvsMat3:(0,ee.c)(),displayViewMat3:(0,ee.c)()}}dispose(){}prepareState(e){const{context:t}=e;t.setColorMask(!0,!0,!0,!0),t.setStencilFunction(A.wb.EQUAL,0,255)}draw(e,t){const{requestRender:a,allowDelayedRender:s}=e,{displayData:i}=t;if((0,c.Wi)(i))return;if("loaded"===i.state.name&&i.attach(e),"attached"!==i.state.name)return;const r=i.state.resources;s&&!r.ready&&(0,c.pC)(a)?a():(this._visualState.time=e.time/1e3,this._visualState.dvsMat3=t.transforms.dvs,this._visualState.displayViewMat3=e.state.displayViewMat3,i.flowStyle.render(e,this._visualState,r),i.flowStyle.animated&&(0,c.pC)(a)&&a())}}var se=a(34150),ie=a(92162);class re extends ie.Z{constructor(){super(...arguments),this.flowStyle=null}get requiresDedicatedFBO(){return!1}doRender(e){super.doRender(e)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"flow",brushes:[ae],target:()=>this.children,drawPhase:se.jx.MAP});return[...super.prepareRenderPasses(e),t]}}a(80388);var ne=a(93622),oe=a(67752),le=a(12218);class ce{constructor(e,t,a,s){this.state={name:"created"},this.flowStyle=e,this.extent=t,this.size=a,this.pixelRatio=s}async load(){const e=new AbortController;this.state={name:"loading",abortController:e};const t={extent:this.extent,size:this.size,pixelRatio:this.pixelRatio},a=await this.flowStyle.load(t,e.signal);this.state={name:"loaded",resources:a}}attach(e){if("loaded"!==this.state.name)return void ne.Z.getLogger("esri.views.2d.engine.flow.FlowDisplayData").error("Only loaded resources can be attached.");const t=this.state.resources;t.attach(e),this.state={name:"attached",resources:t}}detach(){if("loading"===this.state.name)return this.state.abortController.abort(),void(this.state={name:"detached"});"attached"===this.state.name&&(this.state.resources.detach(),this.state={name:"detached"})}update(e){return!!this.flowStyle.isCompatible(e.flowStyle)&&(!(!this.extent.equals(e.extent)||this.size[0]!==e.size[0]||this.size[1]!==e.size[1]||this.pixelRatio!==e.pixelRatio)&&(this.flowStyle=e.flowStyle,!0))}}var de=a(18037),he=a(75393);class ue extends he.s{constructor(){super(...arguments),this._displayData=null}get displayData(){return this._displayData}set displayData(e){this._displayData=e,this.requestRender()}clear(){(0,c.pC)(this._displayData)&&(this._displayData.detach(),this._displayData=null,this.requestRender())}setTransform(e){const{displayData:t}=this;if((0,c.Wi)(t))return;const a=t.extent.xmin,s=t.extent.ymax,i=[0,0];e.toScreen(i,[a,s]);const r=(t.extent.xmax-t.extent.xmin)/t.size[0]/e.resolution,n=(0,oe.Vl)(e.rotation),{dvs:o}=this.transforms;(0,de.j)(o,[-1,1,0]),(0,de.d)(o,o,[2/(e.size[0]*e.pixelRatio),-2/(e.size[1]*e.pixelRatio),1]),(0,de.h)(o,o,[i[0],i[1],0]),(0,de.r)(o,o,n),(0,de.d)(o,o,[r*e.pixelRatio,r*e.pixelRatio,1])}_createTransforms(){return{dvs:(0,ee.c)()}}}var pe=a(50157);const me=1.15;let fe=class extends r.Z{constructor(e){super(e),this._flowDisplayObject=new ue,this._loading=null}initialize(){this.flowContainer.addChild(this._flowDisplayObject)}destroy(){this._clear(),this.flowContainer.removeAllChildren()}get updating(){return null!=this._loading}update(e){const{flowStyle:t}=this.flowContainer;if((0,c.Wi)(t))return void this._clear();const{extent:a,rotation:s,resolution:i,pixelRatio:r}=e.state,n=ye(a,s);n.expand(me);const o=[Math.round((n.xmax-n.xmin)/i),Math.round((n.ymax-n.ymin)/i)],l=new ce(t,n,o,r);if((0,c.pC)(this._loading)){if(this._loading.update(l))return;this._loading.detach(),this._loading=null}!(0,c.Wi)(this._flowDisplayObject.displayData)&&this._flowDisplayObject.displayData.update(l)||(l.load().then((()=>{this._flowDisplayObject.clear(),this._flowDisplayObject.displayData=this._loading,this._loading=null}),(e=>{(0,b.D_)(e)||(ne.Z.getLogger(this.declaredClass).error("A resource failed to load.",e),this._loading=null)})),this._loading=l)}_clear(){this._flowDisplayObject.clear(),(0,c.pC)(this._loading)&&(this._loading.detach(),this._loading=null)}};(0,s._)([(0,o.Cb)()],fe.prototype,"_loading",void 0),(0,s._)([(0,o.Cb)()],fe.prototype,"flowContainer",void 0),(0,s._)([(0,o.Cb)()],fe.prototype,"updating",null),fe=(0,s._)([(0,l.j)("esri.views.2d.engine.flow.FlowStrategy")],fe);const _e=fe;function ye(e,t){const a=new le.Z({x:(e.xmax+e.xmin)/2,y:(e.ymax+e.ymin)/2,spatialReference:e.spatialReference}),s=e.xmax-e.xmin,i=e.ymax-e.ymin,r=Math.abs(Math.cos((0,oe.Vl)(t))),n=Math.abs(Math.sin((0,oe.Vl)(t))),o=r*s+n*i,l=n*s+r*i,c=new pe.Z({xmin:a.x-o/2,ymin:a.y-l/2,xmax:a.x+o/2,ymax:a.y+l/2,spatialReference:e.spatialReference});return c.centerAt(a),c}let ge=class extends r.Z{constructor(){super(...arguments),this._loadImagery=(e,t,a,s,i)=>(0,J.KK)(this.layer,e,t,a,s,i),this._createFlowMesh=(e,t,a,s)=>this.layer.createFlowMesh({meshType:e,flowData:a,simulationSettings:t},{signal:s}),this.attached=!1,this.type="flow",this.timeExtent=null,this.redrawOrRefetch=async()=>{this._updateVisualization()}}get updating(){return!this.attached||this._strategy.updating}attach(){const{layer:e}=this,t=()=>{this._loadImagery=(t,a,s,i,r)=>(0,J.KK)(e,t,a,s,i,r),this._updateVisualization()};"multidimensionalDefinition"in e?this.addHandles((0,n.YP)((()=>e.multidimensionalDefinition),t)):this.addHandles([(0,n.YP)((()=>e.mosaicRule),t),(0,n.YP)((()=>e.renderingRule),t),(0,n.YP)((()=>e.definitionExpression),t)]),this.container=new re,this._strategy=new _e({flowContainer:this.container}),this._updateVisualization()}detach(){this._strategy.destroy(),this.container?.removeAllChildren(),this.container=null,this.removeHandles()}update(e){e.stationary?this._strategy.update(e):this.layerView.requestUpdate()}hitTest(e){return new i.Z({attributes:{},geometry:e.clone(),layer:this.layer})}moveEnd(){}async doRefresh(){}_updateVisualization(){const e=this.layer.renderer;if(null==e||"flow"!==e.type)return;const t=Q(e,{loadImagery:this._loadImagery,createFlowMesh:this._createFlowMesh,timeExtent:this.timeExtent});this.container.flowStyle=t,this.layerView.requestUpdate()}};(0,s._)([(0,o.Cb)()],ge.prototype,"_strategy",void 0),(0,s._)([(0,o.Cb)()],ge.prototype,"attached",void 0),(0,s._)([(0,o.Cb)()],ge.prototype,"container",void 0),(0,s._)([(0,o.Cb)()],ge.prototype,"layer",void 0),(0,s._)([(0,o.Cb)()],ge.prototype,"layerView",void 0),(0,s._)([(0,o.Cb)()],ge.prototype,"type",void 0),(0,s._)([(0,o.Cb)()],ge.prototype,"updating",null),(0,s._)([(0,o.Cb)()],ge.prototype,"timeExtent",void 0),ge=(0,s._)([(0,l.j)("esri.views.2d.engine.flow.FlowView2D")],ge);const ve=ge},76417:function(e,t,a){a.d(t,{Z:function(){return c}});a(23767),a(8585),a(68696),a(57658);var s=a(8693),i=a(17674),r=a(17923);const n=new Float32Array([.27058823529411763,.4588235294117647,.7098039215686275,1,.396078431372549,.5372549019607843,.7215686274509804,1,.5176470588235295,.6196078431372549,.7294117647058823,1,.6352941176470588,.7058823529411765,.7411764705882353,1,.7529411764705882,.8,.7450980392156863,1,.8705882352941177,.8901960784313725,.7490196078431373,1,1,1,.7490196078431373,1,1,.8627450980392157,.6313725490196078,1,.9803921568627451,.7254901960784313,.5176470588235295,1,.9607843137254902,.596078431372549,.4117647058823529,1,.9294117647058824,.4588235294117647,.3176470588235294,1,.9098039215686274,.08235294117647059,.08235294117647059,1]),o={beaufort_ft:n,beaufort_m:n,beaufort_km:n,beaufort_mi:n,beaufort_kn:new Float32Array([.1568627450980392,.5725490196078431,.7803921568627451,1,.34901960784313724,.6352941176470588,.7294117647058823,1,.5058823529411764,.7019607843137254,.6705882352941176,1,.6274509803921569,.7607843137254902,.6078431372549019,1,.7490196078431373,.8313725490196079,.5411764705882353,1,.8549019607843137,.9019607843137255,.4666666666666667,1,.9803921568627451,.9803921568627451,.39215686274509803,1,.9882352941176471,.8352941176470589,.3254901960784314,1,.9882352941176471,.7019607843137254,.4,1,.9803921568627451,.5529411764705883,.20392156862745098,1,.9686274509803922,.43137254901960786,.16470588235294117,1,.9411764705882353,.2784313725490196,.11372549019607843,1]),classified_arrow:new Float32Array([.2196078431372549,.6588235294117647,0,1,.5450980392156862,1.2117647058823529,0,1,1,1,0,1,1,.5019607843137255,0,1,1,0,0,1]),ocean_current_m:new Float32Array([.3058823529411765,.10196078431372549,.6,1,.7019607843137254,.10588235294117647,.10196078431372549,1,.792156862745098,.5019607843137255,.10196078431372549,1,.6941176470588235,.6941176470588235,.6941176470588235,1]),ocean_current_kn:new Float32Array([0,0,0,1,0,.1450980392156863,.39215686274509803,1,.3058823529411765,.10196078431372549,.6,1,.592156862745098,0,.39215686274509803,1,.7019607843137254,.10588235294117647,.10196078431372549,1,.6941176470588235,.3058823529411765,.10196078431372549,1,.792156862745098,.5019607843137255,.10196078431372549,1,.6941176470588235,.7019607843137254,.20392156862745098,1,.6941176470588235,.6941176470588235,.6941176470588235,1]),single_arrow:new Float32Array([0,92/255,230/255,1]),wind_speed:new Float32Array([0,0,0,1])},l=[0,20];class c extends i.Z{constructor(){super(...arguments),this._desc={magdir:{vsPath:"raster/magdir",fsPath:"raster/magdir",attributes:new Map([["a_pos",0],["a_offset",1],["a_vv",2]])},scalar:{vsPath:"raster/scalar",fsPath:"raster/scalar",attributes:new Map([["a_pos",0],["a_offset",1],["a_vv",2]])}}}dispose(){}prepareState({context:e}){e.setBlendingEnabled(!0),e.setBlendFunctionSeparate(r.zi.ONE,r.zi.ONE_MINUS_SRC_ALPHA,r.zi.ONE,r.zi.ONE_MINUS_SRC_ALPHA),e.setColorMask(!0,!0,!0,!0),e.setStencilWriteMask(0),e.setStencilTestEnabled(!0),e.setStencilOp(r.xS.KEEP,r.xS.KEEP,r.xS.REPLACE)}draw(e,t){if((0,s.Wi)(t.source)||0===t.source.validPixelCount)return;const{context:a,timeline:i}=e;if(i.begin(this.name),a.setStencilFunction(r.wb.EQUAL,t.stencilRef,255),t.updateVectorFieldVAO(e),"scalar"===e.renderPass){const a=t.vaoData.scalar;a&&this._drawScalars(e,t,a.vao,a.elementCount)}else{const a=t.vaoData.magdir;a&&this._drawTriangles(e,t,a.vao,a.elementCount)}i.end(this.name)}_drawTriangles(e,t,a,i){const{context:n,painter:c,requestRender:d,allowDelayedRender:h}=e,{symbolizerParameters:u}=t,p=u.dataRange?["dataRange"]:[];"geographic"===u.rotationType&&p.push("rotationGeographic");const m=c.materialManager.getProgram(this._desc.magdir,p);if(h&&(0,s.pC)(d)&&!m.compiled)return void d();n.useProgram(m);const{coordScale:f,opacity:_,transforms:y}=t;m.setUniform2fv("u_coordScale",f),m.setUniform1f("u_opacity",_),m.setUniformMatrix3fv("u_dvsMat3",y.dvs);const{style:g,dataRange:v,rotation:w,symbolPercentRange:x}=u;m.setUniform4fv("u_colors",o[g]||o.single_arrow),m.setUniform2fv("u_dataRange",v||l),m.setUniform1f("u_rotation",w),m.setUniform2fv("u_symbolPercentRange",x);const S=this._getSymbolSize(e,t);m.setUniform2fv("u_symbolSize",S),n.bindVAO(a),n.drawElements(r.MX.TRIANGLES,i,r.g.UNSIGNED_INT,0)}_drawScalars(e,t,a,i){const{context:n,painter:o,requestRender:c,allowDelayedRender:d}=e,{symbolizerParameters:h}=t,u=[];"wind_speed"===h.style?u.push("innerCircle"):h.dataRange&&u.push("dataRange"),"geographic"===h.rotationType&&u.push("rotationGeographic");const p=o.materialManager.getProgram(this._desc.scalar,u);if(d&&(0,s.pC)(c)&&!p.compiled)return void c();n.useProgram(p);const{coordScale:m,opacity:f,transforms:_}=t;p.setUniform2fv("u_coordScale",m),p.setUniform1f("u_opacity",f),p.setUniformMatrix3fv("u_dvsMat3",_.dvs);const{dataRange:y,symbolPercentRange:g}=h;p.setUniform2fv("u_dataRange",y||l),p.setUniform2fv("u_symbolPercentRange",g);const v=this._getSymbolSize(e,t);p.setUniform2fv("u_symbolSize",v),n.bindVAO(a),n.drawElements(r.MX.TRIANGLES,i,r.g.UNSIGNED_INT,0)}_getSymbolSize(e,t){const a=t.key?2**(e.displayLevel-t.key.level):t.resolution/e.state.resolution,{symbolTileSize:s}=t.symbolizerParameters;return[s/(Math.round((t.width-t.offset[0])/s)*s)/a,s/(Math.round((t.height-t.offset[1])/s)*s)/a]}}},37501:function(e,t,a){a.d(t,{F:function(){return p}});a(23767),a(8585),a(68696),a(81653);var s=a(8693),i=a(18037),r=a(57409),n=a(20282),o=a(45982),l=a(75393),c=a(35981),d=a(15625),h=a(17923),u=a(50659);class p extends l.s{constructor(e=null){super(),this._source=null,this._symbolizerParameters=null,this._vaoInvalidated=!0,this.coordScale=[1,1],this.height=null,this.key=null,this.offset=null,this.stencilRef=0,this.resolution=null,this.pixelRatio=1,this.x=0,this.y=0,this.rotation=0,this.rawPixelData=null,this.vaoData=null,this.width=null,this.source=e}destroy(){(0,s.pC)(this.vaoData)&&(this.vaoData.magdir?.vao.dispose(),this.vaoData.scalar?.vao.dispose(),this.vaoData=null)}get symbolizerParameters(){return this._symbolizerParameters}set symbolizerParameters(e){JSON.stringify(this._symbolizerParameters)!==JSON.stringify(e)&&(this._symbolizerParameters=e,this.invalidateVAO())}get source(){return this._source}set source(e){this._source=e,this.invalidateVAO()}invalidateVAO(){!this._vaoInvalidated&&(0,s.pC)(this.vaoData)&&(this.vaoData.magdir?.vao.dispose(),this.vaoData.scalar?.vao.dispose(),this.vaoData=null,this._vaoInvalidated=!0,this.requestRender())}updateVectorFieldVAO(e){if(this._vaoInvalidated){if(this._vaoInvalidated=!1,(0,s.pC)(this.source)&&(0,s.Wi)(this.vaoData)){const{style:t}=this.symbolizerParameters;switch(t){case"beaufort_ft":case"beaufort_km":case"beaufort_kn":case"beaufort_m":case"beaufort_mi":case"classified_arrow":case"ocean_current_kn":case"ocean_current_m":case"single_arrow":{const t=(0,o.wF)(this.source,this.symbolizerParameters),a=this._createVectorFieldVAO(e.context,t);this.vaoData={magdir:a}}break;case"simple_scalar":{const t=(0,o.K)(this.source,this.symbolizerParameters),a=this._createVectorFieldVAO(e.context,t);this.vaoData={scalar:a}}break;case"wind_speed":{const t=(0,o.wF)(this.source,this.symbolizerParameters),a=this._createVectorFieldVAO(e.context,t),s=(0,o.K)(this.source,this.symbolizerParameters),i=this._createVectorFieldVAO(e.context,s);this.vaoData={magdir:a,scalar:i}}}}this.ready(),this.requestRender()}}_createTransforms(){return{dvs:(0,r.c)()}}setTransform(e){const t=(0,i.g)(this.transforms.dvs),[a,s]=e.toScreenNoRotation([0,0],[this.x,this.y]),r=this.resolution/this.pixelRatio/e.resolution,o=r*this.width,l=r*this.height,c=Math.PI*this.rotation/180;(0,i.h)(t,t,(0,n.f)(a,s)),(0,i.h)(t,t,(0,n.f)(o/2,l/2)),(0,i.r)(t,t,-c),(0,i.h)(t,t,(0,n.f)(-o/2,-l/2)),(0,i.k)(t,t,(0,n.f)(o,l)),(0,i.m)(this.transforms.dvs,e.displayViewMat3,t)}onAttach(){this.invalidateVAO()}onDetach(){this.invalidateVAO()}_createVectorFieldVAO(e,t){const{vertexData:a,indexData:s}=t,i=d.f.createVertex(e,h.l1.STATIC_DRAW,new Float32Array(a)),r=d.f.createIndex(e,h.l1.STATIC_DRAW,new Uint32Array(s)),n=(0,c.cM)("vector-field",{geometry:[{location:0,name:"a_pos",count:2,type:h.g.FLOAT,normalized:!1},{location:1,name:"a_offset",count:2,type:h.g.FLOAT,normalized:!1},{location:2,name:"a_vv",count:2,type:h.g.FLOAT,normalized:!1}]});return{vao:new u.U(e,n.attributes,n.bufferLayouts,{geometry:i},r),elementCount:s.length}}}},61723:function(e,t,a){a.d(t,{Z:function(){return c}});a(57658);var s=a(81653),i=a(34150),r=a(92162),n=a(15026),o=a(49355);const l=(e,t)=>e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col;class c extends r.Z{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(l),this.setStencilReference(e),super.renderChildren(e)}createRenderParams(e){const{state:t}=e,a=super.createRenderParams(e);return a.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,a.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),a}prepareRenderPasses(e){const t=super.prepareRenderPasses(e);return t.push(e.registerRenderPass({name:"stencil",brushes:[o.Z],drawPhase:i.jx.DEBUG|i.jx.MAP|i.jx.HIGHLIGHT,target:()=>this.getStencilTarget()})),(0,s.Z)("esri-tiles-debug")&&t.push(e.registerRenderPass({name:"tileInfo",brushes:[n.Z],drawPhase:i.jx.DEBUG,target:()=>this.children})),t}getStencilTarget(){return this.children}setStencilReference(e){let t=1;for(const a of this.children)a.stencilRef=t++}}},42769:function(e,t,a){a.d(t,{Z:function(){return c}});var s=a(61445),i=a(93622),r=a(92454),n=a(18105),o=a(58006),l=(a(94315),a(15055),a(77623));const c=e=>{let t=class extends e{initialize(){this.handles.add((0,n.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,r.D_)(e)||i.Z.getLogger(this.declaredClass).error(e)}))})),"RefreshableLayerView")}};return(0,s._)([(0,o.Cb)()],t.prototype,"layer",void 0),t=(0,s._)([(0,l.j)("esri.layers.mixins.RefreshableLayerView")],t),t}},23319:function(e,t,a){a.d(t,{V:function(){return n},e:function(){return r}});a(57658);var s=a(8693),i=a(71062);async function r(e,t=e.popupTemplate){if((0,s.Wi)(t))return[];const a=await t.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:r}=t,{objectIdField:n,typeIdField:o,globalIdField:l,relationships:c}=e;if(a.includes("*"))return["*"];const d=r?await(0,i.CH)(e):[],h=(0,i.Q0)(e.fieldsIndex,[...a,...d]);return o&&h.push(o),h&&n&&e.fieldsIndex?.has(n)&&!h.includes(n)&&h.push(n),h&&l&&e.fieldsIndex?.has(l)&&!h.includes(l)&&h.push(l),c&&c.forEach((t=>{const{keyField:a}=t;h&&a&&e.fieldsIndex?.has(a)&&!h.includes(a)&&h.push(a)})),h}function n(e,t){return e.popupTemplate?e.popupTemplate:(0,s.pC)(t)&&t.defaultPopupTemplateEnabled&&(0,s.pC)(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}}}]);