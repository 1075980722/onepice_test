"use strict";(self["webpackChunkonepic"]=self["webpackChunkonepic"]||[]).push([[408],{50405:function(t,e,i){i.d(e,{AM:function(){return p}});i(57658);var s=i(61445),n=i(92698),r=i(81653),o=i(86232),h=i(93622),l=i(58006),a=(i(94315),i(77623)),u=i(42484),c=i(60289);const d=-1;let p=class extends n.Z{constructor(t){super(t),this._from=null,this._to=null,this._final=null,this._current=[],this._time=0,this.duration=(0,r.Z)("mapview-transitions-duration"),this.effects=[]}set effect(t){if(this._get("effect")!==(t=t||"")){this._set("effect",t);try{this._transitionTo(f(t))}catch(e){this._transitionTo([]),h.Z.getLogger(this.declaredClass).warn("Invalid Effect",{effect:t,error:e})}}}get hasEffects(){return this.transitioning||!!this.effects.length}set scale(t){this._updateForScale(t)}get transitioning(){return null!==this._to}canTransitionTo(t){try{return this.scale>0&&g(this._current,f(t),this.scale)}catch{return!1}}transitionStep(t,e){this._applyTimeTransition(t),this._updateForScale(e)}endTransitions(){this._applyTimeTransition(this.duration)}_transitionTo(t){this.scale>0&&g(this._current,t,this.scale)?(this._final=t,this._to=(0,o.d9)(t),_(this._current,this._to,this.scale),this._from=(0,o.d9)(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=t),this._set("effects",this._current[0]?(0,o.d9)(this._current[0].effects):[])}_applyTimeTransition(t){if(!(this._to&&this._from&&this._current&&this._final))return;this._time+=t;const e=Math.min(1,this._time/this.duration);for(let i=0;i<this._current.length;i++){const t=this._current[i],s=this._from[i],n=this._to[i];t.scale=y(s.scale,n.scale,e);for(let i=0;i<t.effects.length;i++){const r=t.effects[i],o=s.effects[i],h=n.effects[i];r.interpolate(o,h,e)}}1===e&&(this._current=this._final,this._set("effects",this._current[0]?(0,o.d9)(this._current[0].effects):[]),this._from=this._to=this._final=null)}_updateForScale(t){if(this._set("scale",t),0===this._current.length)return;const e=this._current,i=this._current.length-1;let s,n,r=1;if(1===e.length||t>=e[0].scale)n=s=e[0].effects;else if(t<=e[i].scale)n=s=e[i].effects;else for(let o=0;o<i;o++){const i=e[o],h=e[o+1];if(i.scale>=t&&h.scale<=t){r=(t-i.scale)/(h.scale-i.scale),s=i.effects,n=h.effects;break}}for(let o=0;o<this.effects.length;o++)this.effects[o].interpolate(s[o],n[o],r)}};function f(t){const e=(0,u.Q)(t)||[];return v(e)?[{scale:d,effects:e}]:e}function g(t,e,i){return!t[0]?.effects||!e[0]?.effects||!((t[0]?.scale===d||e[0]?.scale===d)&&(t.length>1||e.length>1)&&i<=0)&&(0,c.AS)(t[0].effects,e[0].effects)}function _(t,e,i){const s=t.length>e.length?t:e,n=t.length>e.length?e:t,r=n[n.length-1],o=r?.scale??i,h=r?.effects??[];for(let l=n.length;l<s.length;l++)n.push({scale:o,effects:[...h]});for(let l=0;l<s.length;l++)n[l].scale=n[l].scale===d?i:n[l].scale,s[l].scale=s[l].scale===d?i:s[l].scale,(0,c.uF)(n[l].effects,s[l].effects)}function y(t,e,i){return t+(e-t)*i}function v(t){const e=t[0];return!!e&&"type"in e}(0,s._)([(0,l.Cb)()],p.prototype,"_to",void 0),(0,s._)([(0,l.Cb)()],p.prototype,"duration",void 0),(0,s._)([(0,l.Cb)({value:""})],p.prototype,"effect",null),(0,s._)([(0,l.Cb)({readOnly:!0})],p.prototype,"effects",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],p.prototype,"hasEffects",null),(0,s._)([(0,l.Cb)({value:0})],p.prototype,"scale",null),(0,s._)([(0,l.Cb)({readOnly:!0})],p.prototype,"transitioning",null),p=(0,s._)([(0,a.j)("esri.layers.effects.EffectView")],p)},32988:function(t,e,i){i.d(e,{W:function(){return h}});i(57658);var s=i(57409),n=i(50405),r=i(75393),o=i(41417);class h extends r.s{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this.children=[],this._effectView=null,this._highlightOptions=null,this._highlightGradient=null}get blendMode(){return this._blendMode}set blendMode(t){this._blendMode=t,this.requestRender()}get clips(){return this._clips}set clips(t){this._clips=t,this.children.forEach((e=>e.clips=t))}get computedEffects(){return this._effectView?.effects??null}get effect(){return this._effectView?.effect??""}set effect(t){(this._effectView||t)&&(this._effectView||(this._effectView=new n.AM),this._effectView.effect=t,this.requestRender())}get highlightOptions(){return this._highlightOptions}set highlightOptions(t){if(!t)return this._highlightOptions=null,void(this._highlightGradient&&(this._highlightGradient.destroy(),this._highlightGradient=null,this.requestRender()));this._highlightOptions&&this._highlightOptions.equals(t)||(this._highlightOptions=t,this._highlightGradient||(this._highlightGradient=new o.Z),this._highlightGradient.setHighlightOptions(t),this.requestRender())}updateTransitionProperties(t,e){super.updateTransitionProperties(t,e),this._effectView&&(this._effectView.transitionStep(t,e),this._effectView.transitioning&&this.requestRender())}doRender(t){const e=this.createRenderParams(t);this.renderChildren(e)}addChild(t){return this.addChildAt(t,this.children.length)}addChildAt(t,e=this.children.length){if(!t)return t;if(this.contains(t))return t;this._needsSort=!0;const i=t.parent;return i&&i!==this&&i.removeChild(t),e>=this.children.length?this.children.push(t):this.children.splice(e,0,t),this._childrenSet.add(t),t.parent=this,t.stage=this.stage,this!==this.stage&&(t.clips=this.clips),this.requestRender(),t}contains(t){return this._childrenSet.has(t)}endTransitions(){super.endTransitions(),this._effectView&&(this._effectView.endTransitions(),this.requestRender())}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const t of this.children)this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null;this.children.length=0}removeChild(t){return this.contains(t)?this.removeChildAt(this.children.indexOf(t)):t}removeChildAt(t){if(t<0||t>=this.children.length)return null;this._needsSort=!0;const e=this.children.splice(t,1)[0];return this._childrenSet.delete(e),this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null,e}sortChildren(t){this._needsSort&&(this.children.sort(t),this._needsSort=!1)}beforeRender(t){super.beforeRender(t);for(const e of this.children)e.beforeRender(t)}afterRender(t){super.afterRender(t);for(const e of this.children)e.afterRender(t)}_createTransforms(){return{dvs:(0,s.c)()}}onAttach(){super.onAttach();const t=this.stage;for(const e of this.children)e.stage=t}onDetach(){super.onDetach();for(const t of this.children)t.stage=null}renderChildren(t){for(const e of this.children)e.processRender(t)}createRenderParams(t){return{...t,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:t.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition,highlightGradient:this._highlightGradient||t.highlightGradient}}}},75393:function(t,e,i){i.d(e,{s:function(){return l}});var s=i(96545),n=i(81653),r=i(8693),o=i(92454);const h=1/(0,n.Z)("mapview-transitions-duration");class l extends s.Z{constructor(){super(...arguments),this._fadeOutResolver=null,this._fadeInResolver=null,this._clips=null,this.computedVisible=!0,this.computedOpacity=1,this.fadeTransitionEnabled=!1,this.inFadeTransition=!1,this._isReady=!1,this._opacity=1,this.parent=null,this._stage=null,this._visible=!0}get clips(){return this._clips}set clips(t){this._clips=t,this.requestRender()}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(t){this._opacity!==t&&(this._opacity=Math.min(1,Math.max(t,0)),this.requestRender())}get stage(){return this._stage}set stage(t){if(this._stage===t)return;const e=this._stage;this._stage=t,t?this._stage?.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):e?.trashDisplayObject(this)}get transforms(){return this._getTransforms()}_getTransforms(){return(0,r.Wi)(this._transforms)&&(this._transforms=this._createTransforms()),this._transforms}get visible(){return this._visible}set visible(t){this._visible!==t&&(this._visible=t,this.requestRender())}fadeIn(){return this._fadeInResolver||(this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.opacity=1,this.computedOpacity=0,this.fadeTransitionEnabled=!0,this._fadeInResolver=(0,o.hh)(),this.requestRender()),this._fadeInResolver.promise}fadeOut(){return this._fadeOutResolver||(this.opacity=0,this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this.fadeTransitionEnabled=!0,this._fadeOutResolver=(0,o.hh)(),this.requestRender()),this._fadeOutResolver.promise}endTransitions(){this._fadeInResolver?.(),this._fadeInResolver=null,this._fadeOutResolver?.(),this._fadeOutResolver=null,this.computedOpacity=this.visible?this.opacity:0,this.requestRender()}beforeRender(t){this.updateTransitionProperties(t.deltaTime,t.state.scale)}afterRender(t){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&0===this.computedOpacity&&(this._fadeOutResolver(),this._fadeOutResolver=null)}remove(){this.parent?.removeChild(this)}setTransform(t){}processRender(t){this.stage&&this.computedVisible&&this.doRender(t)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.onDetach(),this.emit("detach")}updateTransitionProperties(t,e){if(this.fadeTransitionEnabled){const e=this._fadeOutResolver||!this.visible?0:this.opacity,i=this.computedOpacity;if(i===e)this.computedVisible=this.visible;else{const s=t*h;this.computedOpacity=i>e?Math.max(e,i-s):Math.min(e,i+s),this.computedVisible=this.computedOpacity>0;const n=e===this.computedOpacity;this.inFadeTransition=!n,n||this.requestRender()}}else this.computedOpacity=this.opacity,this.computedVisible=this.visible}onAttach(){}onDetach(){}doRender(t){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}}},19440:function(t,e,i){i.d(e,{$0:function(){return o},AI:function(){return s},Al:function(){return p},By:function(){return m},C1:function(){return L},CQ:function(){return X},CU:function(){return Z},D3:function(){return d},Ex:function(){return a},I_:function(){return r},Ic:function(){return f},Ij:function(){return y},Ip:function(){return U},Iv:function(){return J},Iw:function(){return u},Jw:function(){return w},MI:function(){return Q},QU:function(){return R},SD:function(){return z},Tz:function(){return k},Uh:function(){return N},V4:function(){return W},XD:function(){return st},XJ:function(){return G},Xj:function(){return C},Zd:function(){return A},_5:function(){return S},_6:function(){return K},a:function(){return j},aK:function(){return V},dn:function(){return H},e0:function(){return B},eF:function(){return c},eV:function(){return h},f2:function(){return v},fL:function(){return F},iJ:function(){return g},iV:function(){return D},jk:function(){return $},kF:function(){return O},lK:function(){return I},m4:function(){return M},mx:function(){return b},nM:function(){return _},nb:function(){return it},oK:function(){return Y},pU:function(){return x},ru:function(){return n},tQ:function(){return E},u4:function(){return et},uG:function(){return q},vw:function(){return tt},xl:function(){return P},xm:function(){return l},yP:function(){return T}});const s=1e-30,n=4294967295,r=512,o=8,h=10,l=29,a=24,u=8,c={metrics:{width:15,height:17,left:0,top:-7,advance:14}},d=0,p=0,f=0,g=1,_=2,y=3,v=4,m=5,b=6,C=12,R=5,w=6,O=5,T=6,S=0,P=1,x=2,V=3,I=4,M=2,q=1,A=2,D=4,E=1.05,H=3,W=5,Z=6,j=1.15,F=2,G=8,U=500,Q=10,L=1024,N=2,X=0,k=1,Y=4,B=8,J=16,K=4,z=1,$=4,tt=8,et=128,it=4,st=2},41417:function(t,e,i){i.d(e,{Z:function(){return c}});i(23767),i(8585),i(68696);var s=i(93622),n=i(19440),r=i(47799),o=i(17923),h=i(29964);const l=s.Z.getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient");function a(t,e){e.fillColor[0]=t.color.r/255,e.fillColor[1]=t.color.g/255,e.fillColor[2]=t.color.b/255,e.fillColor[3]=t.color.a,t.haloColor?(e.outlineColor[0]=t.haloColor.r/255,e.outlineColor[1]=t.haloColor.g/255,e.outlineColor[2]=t.haloColor.b/255,e.outlineColor[3]=t.haloColor.a):(e.outlineColor[0]=e.fillColor[0],e.outlineColor[1]=e.fillColor[1],e.outlineColor[2]=e.fillColor[2],e.outlineColor[3]=e.fillColor[3]),e.fillColor[3]*=t.fillOpacity,e.outlineColor[3]*=t.haloOpacity,e.fillColor[0]*=e.fillColor[3],e.fillColor[1]*=e.fillColor[3],e.fillColor[2]*=e.fillColor[3],e.outlineColor[0]*=e.outlineColor[3],e.outlineColor[1]*=e.outlineColor[3],e.outlineColor[2]*=e.outlineColor[3],e.outlineWidth=r.OQ.outlineWidth,e.outerHaloWidth=r.OQ.outerHaloWidth,e.innerHaloWidth=r.OQ.innerHaloWidth,e.outlinePosition=r.OQ.outlinePosition}const u=[0,0,0,0];class c{constructor(){this._convertedHighlightOptions={fillColor:[.2*.75,.6*.75,.675,.75],outlineColor:[.2*.9,.54,.81,.9],outlinePosition:r.OQ.outlinePosition,outlineWidth:r.OQ.outlineWidth,innerHaloWidth:r.OQ.innerHaloWidth,outerHaloWidth:r.OQ.outerHaloWidth},this._shadeTexChanged=!0,this._texelData=new Uint8Array(4*r.Ft),this._minMaxDistance=[0,0]}setHighlightOptions(t){const e=this._convertedHighlightOptions;a(t,e);const i=e.outlinePosition-e.outlineWidth/2-e.outerHaloWidth,s=e.outlinePosition-e.outlineWidth/2,n=e.outlinePosition+e.outlineWidth/2,o=e.outlinePosition+e.outlineWidth/2+e.innerHaloWidth,h=Math.sqrt(Math.PI/2)*r.tM,c=Math.abs(i)>h?Math.round(10*(Math.abs(i)-h))/10:0,d=Math.abs(o)>h?Math.round(10*(Math.abs(o)-h))/10:0;let p;c&&!d?l.error("The outer rim of the highlight is "+c+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards)."):!c&&d?l.error("The inner rim of the highlight is "+d+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards)."):c&&d&&l.error("The highlight is "+Math.max(c,d)+"px away from the edge of the feature; consider reducing some width values.");const f=[void 0,void 0,void 0,void 0];function g(t,e,i){f[0]=(1-i)*t[0]+i*e[0],f[1]=(1-i)*t[1]+i*e[1],f[2]=(1-i)*t[2]+i*e[2],f[3]=(1-i)*t[3]+i*e[3]}const{_texelData:_}=this;for(let l=0;l<r.Ft;++l)p=i+l/(r.Ft-1)*(o-i),p<i?(f[4*l+0]=0,f[4*l+1]=0,f[4*l+2]=0,f[4*l+3]=0):p<s?g(u,e.outlineColor,(p-i)/(s-i)):p<n?[f[0],f[1],f[2],f[3]]=e.outlineColor:p<o?g(e.outlineColor,e.fillColor,(p-n)/(o-n)):[f[4*l+0],f[4*l+1],f[4*l+2],f[4*l+3]]=e.fillColor,_[4*l+0]=255*f[0],_[4*l+1]=255*f[1],_[4*l+2]=255*f[2],_[4*l+3]=255*f[3];this._minMaxDistance[0]=i,this._minMaxDistance[1]=o,this._shadeTexChanged=!0}applyHighlightOptions(t,e){this._shadeTex||(this._shadeTex=new h.x(t,{target:o.No.TEXTURE_2D,pixelFormat:o.VI.RGBA,dataType:o.Br.UNSIGNED_BYTE,wrapMode:o.e8.CLAMP_TO_EDGE,width:r.Ft,height:1,samplingMode:o.cw.LINEAR})),this._shadeTexChanged&&(this._shadeTex.updateData(0,0,0,r.Ft,1,this._texelData),this._shadeTexChanged=!1),t.bindTexture(this._shadeTex,n.Jw),e.setUniform2fv("u_minMaxDistance",this._minMaxDistance)}destroy(){this._shadeTex?.dispose(),this._shadeTex=null}}},47799:function(t,e,i){i.d(e,{Ft:function(){return o},OQ:function(){return h},QU:function(){return r},n5:function(){return n},tM:function(){return s}});const s=1,n=[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],r=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],o=256,h={outlineWidth:1.3,outerHaloWidth:.4,innerHaloWidth:.4,outlinePosition:0}},40408:function(t,e,i){i.r(e),i.d(e,{default:function(){return c}});var s=i(61445),n=i(30040),r=i(95822),o=i(58006),h=(i(94315),i(15055),i(77623)),l=i(54572),a=i(31698);let u=class extends((0,l.y)(a.Z)){constructor(t){super(t),this.layerViews=new n.Z}set layerViews(t){this._set("layerViews",(0,r.Z)(t,this._get("layerViews")))}get updatingProgress(){return 0===this.layerViews.length?1:this.layerViews.reduce(((t,e)=>t+e.updatingProgress),0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",(()=>this._updateStageChildren())))}detach(){this.container.removeAllChildren()}update(t){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((t,e)=>this.container.addChildAt(t.container,e)))}};(0,s._)([(0,o.Cb)({cast:r.R})],u.prototype,"layerViews",null),(0,s._)([(0,o.Cb)({readOnly:!0})],u.prototype,"updatingProgress",null),u=(0,s._)([(0,h.j)("esri.views.2d.layers.KnowledgeGraphLayerView2D")],u);const c=u},54572:function(t,e,i){i.d(e,{y:function(){return V}});var s=i(61445),n=i(30040),r=i(95822),o=i(22130),h=i(18105),l=i(58006),a=(i(94315),i(15055),i(77623)),u=i(32988),c=i(71862),d=i(60931);let p=class extends d.wq{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,s._)([(0,l.Cb)({readOnly:!0})],p.prototype,"version",null),p=(0,s._)([(0,a.j)("esri.views.layers.support.ClipArea")],p);const f=p;var g;let _=g=class extends f{constructor(t){super(t),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new g({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,s._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],_.prototype,"left",void 0),(0,s._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],_.prototype,"right",void 0),(0,s._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],_.prototype,"top",void 0),(0,s._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],_.prototype,"bottom",void 0),_=g=(0,s._)([(0,a.j)("esri.views.layers.support.ClipRect")],_);const y=_;i(80388);var v,m=i(92489),b=i(90421),C=i(50157),R=i(91407);const w={base:m.Z,key:"type",typeMap:{extent:C.Z,polygon:R.Z}};let O=v=class extends f{constructor(t){super(t),this.type="geometry",this.geometry=null}clone(){return new v({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,s._)([(0,l.Cb)({types:w,json:{read:b.im,write:!0}})],O.prototype,"geometry",void 0),O=v=(0,s._)([(0,a.j)("esri.views.layers.support.Geometry")],O);const T=O;let S=class extends f{constructor(t){super(t),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,s._)([(0,l.Cb)({type:[[[Number]]],json:{write:!0}})],S.prototype,"path",void 0),S=(0,s._)([(0,a.j)("esri.views.layers.support.Path")],S);const P=S,x=n.Z.ofType({key:"type",base:null,typeMap:{rect:y,path:P,geometry:T}}),V=t=>{let e=class extends t{constructor(){super(...arguments),this.attached=!1,this.clips=new x,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){const t=this.view?.spatialReferenceLocked??!0,e=this.view?.spatialReference;e&&t&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new o.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new u.W),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,h.YP)((()=>this.suspended),(t=>{this.container&&(this.container.visible=!t),this.view&&!t&&this.updateRequested&&this.view.requestUpdate()}),h.tX),(0,h.YP)((()=>this.layer?.opacity??1),(t=>{this.container&&(this.container.opacity=t)}),h.tX),(0,h.YP)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(t=>{this.container&&(this.container.blendMode=t)}),h.tX),(0,h.YP)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(t=>{this.container&&(this.container.effect=t)}),h.tX),(0,h.YP)((()=>this.highlightOptions),(t=>this.container.highlightOptions=t),h.tX),(0,h.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),h.tX),(0,h.YP)((()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null})),(({scale:t})=>{const e=null!=t&&this.isVisibleAtScale(t);e!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",e)}),h.tX)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then((t=>{t===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){const t=this.view?.spatialReference;return null==t||this.supportsSpatialReference(t)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this.updatingHandles?.updating)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(t){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!e)return!0;const{minScale:i,maxScale:s}=e;return(0===i||t<=i)&&(0===s||t>=s)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(t){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",t),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(t))):this.updateRequested=!1}hitTest(t,e){return Promise.resolve(null)}supportsSpatialReference(t){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const t=super.getSuspendInfo(),e=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale;return e&&(t.spatialReferenceNotSupported=e),i&&(t.outsideScaleRange=i),t}addAttachHandles(t){this.addHandles(t,"attach")}};return(0,s._)([(0,l.Cb)()],e.prototype,"attached",void 0),(0,s._)([(0,l.Cb)({type:x,set(t){const e=(0,r.Z)(t,this._get("clips"),x);this._set("clips",e)}})],e.prototype,"clips",void 0),(0,s._)([(0,l.Cb)()],e.prototype,"container",void 0),(0,s._)([(0,l.Cb)()],e.prototype,"moving",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],e.prototype,"spatialReferenceSupported",null),(0,s._)([(0,l.Cb)({readOnly:!0})],e.prototype,"updateParameters",void 0),(0,s._)([(0,l.Cb)()],e.prototype,"updateRequested",void 0),(0,s._)([(0,l.Cb)()],e.prototype,"updating",null),(0,s._)([(0,l.Cb)()],e.prototype,"view",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],e.prototype,"visibleAtCurrentScale",void 0),(0,s._)([(0,l.Cb)({type:c.Z})],e.prototype,"highlightOptions",void 0),e=(0,s._)([(0,a.j)("esri.views.2d.layers.LayerView2D")],e),e}},31698:function(t,e,i){i.d(e,{Z:function(){return f}});var s=i(61445),n=i(92698),r=i(96545),o=i(30374),h=i(68650),l=i(93622),a=i(8693),u=i(66144),c=i(58006),d=(i(94315),i(15055),i(77623));let p=class extends((0,o.p)((0,h.IG)((0,u.v)(r.Z.EventedMixin(n.Z))))){constructor(t){super(t),this.layer=null,this.parent=null}initialize(){this.when().catch((t=>{if("layerview:create-error"!==t.name){const e=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";l.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${e}')`,t)}}))}get fullOpacity(){return(0,a.Pt)(this.get("layer.opacity"),1)*(0,a.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(t){this._overrideIfSome("visible",t)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const t=this.parent&&this.parent.suspended?this.parent.suspendInfo:{},e=this;return e.view&&e.view.ready||(t.viewNotReady=!0),this.layer&&this.layer.loaded||(t.layerNotLoaded=!0),this.visible||(t.layerInvisible=!0),t}isUpdating(){return!1}};(0,s._)([(0,c.Cb)()],p.prototype,"fullOpacity",null),(0,s._)([(0,c.Cb)()],p.prototype,"layer",void 0),(0,s._)([(0,c.Cb)()],p.prototype,"parent",void 0),(0,s._)([(0,c.Cb)({readOnly:!0})],p.prototype,"suspended",null),(0,s._)([(0,c.Cb)({readOnly:!0})],p.prototype,"suspendInfo",null),(0,s._)([(0,c.Cb)({readOnly:!0})],p.prototype,"legendEnabled",null),(0,s._)([(0,c.Cb)({type:Boolean,readOnly:!0})],p.prototype,"updating",null),(0,s._)([(0,c.Cb)({readOnly:!0})],p.prototype,"updatingProgress",null),(0,s._)([(0,c.Cb)()],p.prototype,"visible",null),(0,s._)([(0,c.Cb)()],p.prototype,"view",void 0),p=(0,s._)([(0,d.j)("esri.views.layers.LayerView")],p);const f=p}}]);