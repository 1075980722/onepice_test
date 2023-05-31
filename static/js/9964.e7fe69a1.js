"use strict";(self["webpackChunkonepic"]=self["webpackChunkonepic"]||[]).push([[9964],{29964:function(t,e,_){_.d(e,{x:function(){return o}});_(81653);var E=_(67752),T=_(8693),r=_(58523),R=_(24522),i=_(17923);const A={target:i.No.TEXTURE_2D,samplingMode:i.cw.LINEAR,wrapMode:i.e8.REPEAT,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,isImmutable:!1},n=4;let o=class{constructor(t,e,_=null){this._context=t,this.type="texture",this._glName=null,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,t.instanceCounter.increment(i._g.Texture,this),this._descriptor={...A,...e};for(const E in A)void 0===this._descriptor[E]&&(this._descriptor[E]=A[E]);if(t.type!==R.zO.WEBGL2&&(this._descriptor.isImmutable&&(this._descriptor.isImmutable=!1),u(this._descriptor.target)))throw new Error("3D and array textures are not supported in WebGL1");this._descriptor.target===i.No.TEXTURE_CUBE_MAP?this._setDataCubeMap(_):this.setData(_)}get glName(){return this._glName}get descriptor(){return this._descriptor}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._context.gl&&this._glName&&(this._context.unbindTexture(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(i._g.Texture,this))}release(){this.dispose()}resize(t,e){const _=this._descriptor;if(_.width!==t||_.height!==e){if(this._wasImmutablyAllocated)throw new Error("Immutable textures can't be resized!");_.width=t,_.height=e,this._descriptor.target===i.No.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}_setDataCubeMap(t=null){for(let e=i.No.TEXTURE_CUBE_MAP_POSITIVE_X;e<=i.No.TEXTURE_CUBE_MAP_NEGATIVE_Z;e++)this._setData(t,e)}setData(t){this._setData(t)}_setData(t,e){if(!this._context||!this._context.gl)return;const _=this._context.gl;this._glName||(this._glName=_.createTexture()),void 0===t&&(t=null);const E=this._descriptor,R=e??E.target,i=u(R);null===t&&(E.width=E.width||n,E.height=E.height||n,i&&(E.depth=E.depth??1));const A=this._context.bindTexture(this,o.TEXTURE_UNIT_FOR_UPDATES);this._context.setActiveTexture(o.TEXTURE_UNIT_FOR_UPDATES),o._validateTexture(this._context,E),this._configurePixelStorage(),(0,r.zu)(_);const N=E.pixelFormat;let I=E.internalFormat??this._deriveInternalFormat(N,E.dataType);if(S(t)){let e=t.width,T=t.height;const A=1;t instanceof HTMLVideoElement&&(e=t.videoWidth,T=t.videoHeight),E.width&&E.height,i&&E.depth,E.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(R,I,E.hasMipmap,e,T,A),this._texImage(R,0,I,e,T,A,t),(0,r.zu)(_),E.hasMipmap&&this.generateMipmap(),void 0===E.width&&(E.width=e),void 0===E.height&&(E.height=T),i&&void 0===E.depth&&(E.depth=A)}else{const{width:e,height:A,depth:n}=E;if(null==e||null==A)throw new Error("Width and height must be specified!");if(i&&null==n)throw new Error("Depth must be specified!");if(E.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(R,I,E.hasMipmap,e,A,n),_.DEPTH24_STENCIL8&&I===_.DEPTH_STENCIL&&(I=_.DEPTH24_STENCIL8),s(t)){const r=t.levels,i=C(R,e,A,n),o=Math.min(i-1,r.length-1);(0,T.pC)(this._context.gl2)?_.texParameteri(E.target,this._context.gl2.TEXTURE_MAX_LEVEL,o):E.hasMipmap=E.hasMipmap&&i===r.length;const N=I;if(!a(N))throw new Error("Attempting to use compressed data with an umcompressed format!");this._forEachMipmapLevel(((t,e,_,E)=>{const T=r[Math.min(t,r.length-1)];this._compressedTexImage(R,t,N,e,_,E,T)}),o)}else(0,T.pC)(t)?(this._texImage(R,0,I,e,A,n,t),(0,r.zu)(_),E.hasMipmap&&this.generateMipmap()):this._forEachMipmapLevel(((t,e,E,T)=>{this._texImage(R,t,I,e,E,T,null),(0,r.zu)(_)}))}o._applySamplingMode(_,this._descriptor),o._applyWrapMode(_,this._descriptor),o._applyAnisotropicFilteringParameters(this._context,this._descriptor),(0,r.zu)(_),this._context.bindTexture(A,o.TEXTURE_UNIT_FOR_UPDATES)}updateData(t,e,_,E,r,R,i=0){R||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const A=this._context.gl,n=this._descriptor,{pixelFormat:N,dataType:a,target:I,isImmutable:u}=n,C=n.internalFormat??this._deriveInternalFormat(N,a);if(u&&!this._wasImmutablyAllocated)throw new Error("Cannot update immutable texture before allocation!");const O=this._context.bindTexture(this,o.TEXTURE_UNIT_FOR_UPDATES,!0);if((e<0||_<0||E>n.width||r>n.height||e+E>n.width||_+r>n.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),i){if((0,T.Wi)(this._context.gl2))return void console.error("Webgl2 must be enabled to use dataRowOffset!");A.pixelStorei(this._context.gl2.UNPACK_SKIP_ROWS,i)}if(S(R)?(0,T.pC)(this._context.gl2)?this._context.gl2.texSubImage2D(I,t,e,_,E,r,N,a,R):A.texSubImage2D(I,t,e,_,N,a,R):s(R)?A.compressedTexSubImage2D(I,t,e,_,E,r,C,R.levels[t]):A.texSubImage2D(I,t,e,_,E,r,N,a,R),i){if((0,T.Wi)(this._context.gl2))return void console.error("Webgl2 must be enabled to use dataRowOffset!");A.pixelStorei(this._context.gl2.UNPACK_SKIP_ROWS,0)}this._context.bindTexture(O,o.TEXTURE_UNIT_FOR_UPDATES)}updateData3D(t,e,_,E,r,R,i,A){A||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const n=this._context.gl2;if((0,T.Wi)(n))throw new Error("3D textures are not supported in WebGL1");const N=this._descriptor,{pixelFormat:a,dataType:I,isImmutable:S,target:C}=N,O=N.internalFormat??this._deriveInternalFormat(a,I);if(S&&!this._wasImmutablyAllocated)throw new Error("Cannot update immutable texture before allocation!");u(C)||console.warn("Attempting to set 3D texture data on a non-3D texture");const M=this._context.bindTexture(this,o.TEXTURE_UNIT_FOR_UPDATES);if(this._context.setActiveTexture(o.TEXTURE_UNIT_FOR_UPDATES),(e<0||_<0||E<0||r>N.width||R>N.height||i>N.depth||e+r>N.width||_+R>N.height||E+i>N.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),s(A))A=A.levels[t],n.compressedTexSubImage3D(C,t,e,_,E,r,R,i,O,A);else{const T=A;n.texSubImage3D(C,t,e,_,E,r,R,i,a,I,T)}this._context.bindTexture(M,o.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const t=this._descriptor;if(!t.hasMipmap){if(this._wasImmutablyAllocated)throw new Error("Cannot add mipmaps to immutable texture after allocation");t.hasMipmap=!0,this._samplingModeDirty=!0,o._validateTexture(this._context,t)}t.samplingMode===i.cw.LINEAR?(this._samplingModeDirty=!0,t.samplingMode=i.cw.LINEAR_MIPMAP_NEAREST):t.samplingMode===i.cw.NEAREST&&(this._samplingModeDirty=!0,t.samplingMode=i.cw.NEAREST_MIPMAP_NEAREST);const e=this._context.bindTexture(this,o.TEXTURE_UNIT_FOR_UPDATES);this._context.setActiveTexture(o.TEXTURE_UNIT_FOR_UPDATES),this._context.gl.generateMipmap(t.target),this._context.bindTexture(e,o.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(t){t!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=t,this._samplingModeDirty=!0)}setWrapMode(t){t!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=t,o._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const t=this._context.gl,e=this._descriptor;this._samplingModeDirty&&(o._applySamplingMode(t,e),this._samplingModeDirty=!1),this._wrapModeDirty&&(o._applyWrapMode(t,e),this._wrapModeDirty=!1)}_deriveInternalFormat(t,e){if(this._context.type===R.zO.WEBGL1)return t;switch(e){case i.Br.FLOAT:switch(t){case i.VI.RGBA:return i.lP.RGBA32F;case i.VI.RGB:return i.lP.RGB32F;default:throw new Error("Unable to derive format")}case i.Br.UNSIGNED_BYTE:switch(t){case i.VI.RGBA:return i.lP.RGBA8;case i.VI.RGB:return i.lP.RGB8}default:return t}}_configurePixelStorage(){const t=this._context.gl,{unpackAlignment:e,flipped:_,preMultiplyAlpha:E}=this._descriptor;t.pixelStorei(t.UNPACK_ALIGNMENT,e),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_?1:0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E?1:0)}_texStorage(t,e,_,E,r,R){const i=this._context.gl2;if((0,T.Wi)(i))throw new Error("Immutable textures are not supported in WebGL1");if(!N(e))throw new Error("Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;const A=_?C(t,E,r,R):1;if(u(t)){if(null==R)throw new Error("Missing depth dimension for 3D texture upload");i.texStorage3D(t,A,e,E,r,R)}else i.texStorage2D(t,A,e,E,r);this._wasImmutablyAllocated=!0}_texImage(t,e,_,E,r,i,A){const n=this._context.gl;let o=null;const N=this._context.type===R.zO.WEBGL2,a=u(t),{isImmutable:s,pixelFormat:I,dataType:C}=this._descriptor;if(N&&(o=n),N||!S(A))if(s){if((0,T.pC)(A)){const _=A;if(a){if(null==i)throw new Error("Missing depth dimension for 3D texture upload");o.texSubImage3D(t,e,0,0,0,E,r,i,I,C,_)}else n.texSubImage2D(t,e,0,0,E,r,I,C,_)}}else{const R=(0,T.Wg)(A);if(a){if(null==i)throw new Error("Missing depth dimension for 3D texture upload");o.texImage3D(t,e,_,E,r,i,0,I,C,R)}else n.texImage2D(t,e,_,E,r,0,I,C,R)}else n.texImage2D(t,0,_,I,C,A)}_compressedTexImage(t,e,_,E,r,i,A){const n=this._context.gl;let o=null;const N=u(t),a=this._descriptor.isImmutable;if(N){if(this._context.type!==R.zO.WEBGL2)throw new Error("3D textures are not supported in WebGL1");o=n}if(a){if((0,T.pC)(A))if(N){if(null==i)throw new Error("Missing depth dimension for 3D texture upload");o.compressedTexSubImage3D(t,e,0,0,0,E,r,i,_,A)}else n.compressedTexSubImage2D(t,e,0,0,E,r,_,A)}else if(N){if(null==i)throw new Error("Missing depth dimension for 3D texture upload");o.compressedTexImage3D(t,e,_,E,r,i,0,A)}else n.compressedTexImage2D(t,e,_,E,r,0,A)}_forEachMipmapLevel(t,e=1/0){let{width:_,height:E,depth:T,hasMipmap:r,target:R}=this._descriptor;const A=R===i.No.TEXTURE_3D;if(null==_||null==E||A&&null==T)throw new Error("Missing texture dimensions for mipmap calculation");for(let i=0;t(i,_,E,T),r&&(1!==_||1!==E||A&&1!==T)&&!(i>=e);++i)_=Math.max(1,_>>1),E=Math.max(1,E>>1),A&&(T=Math.max(1,T>>1))}static _validateTexture(t,e){(null!=e.width&&e.width<0||null!=e.height&&e.height<0||null!=e.depth&&e.depth<0)&&console.error("Negative dimension parameters are not allowed!");const _=t.type===R.zO.WEBGL2,T=null!=e.width&&(0,E.wt)(e.width)&&null!=e.height&&(0,E.wt)(e.height);_||!e.isImmutable&&!u(e.target)||console.error("Immutable and 3D-like textures are not supported in WebGL1!"),_||T||("number"==typeof e.wrapMode?e.wrapMode!==i.e8.CLAMP_TO_EDGE&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):e.wrapMode.s===i.e8.CLAMP_TO_EDGE&&e.wrapMode.t===i.e8.CLAMP_TO_EDGE||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),e.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}static _applySamplingMode(t,e){let _=e.samplingMode,E=e.samplingMode;_===i.cw.LINEAR_MIPMAP_NEAREST||_===i.cw.LINEAR_MIPMAP_LINEAR?(_=i.cw.LINEAR,e.hasMipmap||(E=i.cw.LINEAR)):_!==i.cw.NEAREST_MIPMAP_NEAREST&&_!==i.cw.NEAREST_MIPMAP_LINEAR||(_=i.cw.NEAREST,e.hasMipmap||(E=i.cw.NEAREST)),t.texParameteri(e.target,t.TEXTURE_MAG_FILTER,_),t.texParameteri(e.target,t.TEXTURE_MIN_FILTER,E)}static _applyWrapMode(t,e){"number"==typeof e.wrapMode?(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode)):(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode.s),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode.t))}static _applyAnisotropicFilteringParameters(t,e){const _=t.capabilities.textureFilterAnisotropic;_&&t.gl.texParameterf(e.target,_.TEXTURE_MAX_ANISOTROPY,e.maxAnisotropy??1)}};function N(t){return t in i.lP}function a(t){return t in i.q_}function s(t){return(0,T.pC)(t)&&"type"in t&&"compressed"===t.type}function I(t){return(0,T.pC)(t)&&"byteLength"in t}function S(t){return(0,T.pC)(t)&&!s(t)&&!I(t)}function u(t){return t===i.No.TEXTURE_3D||t===i.No.TEXTURE_2D_ARRAY}function C(t,e,_,E=1){let T=Math.max(e,_);return t===i.No.TEXTURE_3D&&(T=Math.max(T,E)),Math.round(Math.log(T)/Math.LN2)+1}o.TEXTURE_UNIT_FOR_UPDATES=0},58523:function(t,e,_){_.d(e,{CG:function(){return o},hZ:function(){return n},zu:function(){return N}});var E=_(22130),T=_(81653),r=_(93622);const R=r.Z.getLogger("esri.views.webgl.checkWebGLError");function i(t,e){switch(e){case t.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case t.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case t.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case t.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case t.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case t.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}const A=!!(0,T.Z)("enable-feature:webgl-debug");function n(){return A}function o(){return A}function N(t){if(n()){const e=t.getError();if(e){const _=i(t,e),T=(new Error).stack;R.error(new E.Z("webgl-error","WebGL error occured",{message:_,stack:T}))}}}},17923:function(t,e,_){var E,T,r,R,i,A,n,o,N,a,s,I,S,u,C,O,M,c,D,l,L,h;_.d(e,{Br:function(){return O},Ho:function(){return D},LR:function(){return A},Ld:function(){return P},Lm:function(){return L},Lu:function(){return d},MX:function(){return T},No:function(){return S},OU:function(){return h},Se:function(){return m},Tg:function(){return M},V7:function(){return g},VI:function(){return u},VY:function(){return p},Wf:function(){return n},Y5:function(){return F},_g:function(){return U},cw:function(){return s},db:function(){return R},e8:function(){return I},g:function(){return o},l1:function(){return c},lP:function(){return C},lk:function(){return E},q_:function(){return G},qi:function(){return l},w0:function(){return i},wb:function(){return N},xS:function(){return a},zi:function(){return r}}),function(t){t[t.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",t[t.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",t[t.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT"}(E||(E={})),function(t){t[t.POINTS=0]="POINTS",t[t.LINES=1]="LINES",t[t.LINE_LOOP=2]="LINE_LOOP",t[t.LINE_STRIP=3]="LINE_STRIP",t[t.TRIANGLES=4]="TRIANGLES",t[t.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",t[t.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(T||(T={})),function(t){t[t.ZERO=0]="ZERO",t[t.ONE=1]="ONE",t[t.SRC_COLOR=768]="SRC_COLOR",t[t.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",t[t.SRC_ALPHA=770]="SRC_ALPHA",t[t.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",t[t.DST_ALPHA=772]="DST_ALPHA",t[t.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",t[t.DST_COLOR=774]="DST_COLOR",t[t.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",t[t.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",t[t.CONSTANT_COLOR=32769]="CONSTANT_COLOR",t[t.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",t[t.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",t[t.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(r||(r={})),function(t){t[t.ADD=32774]="ADD",t[t.SUBTRACT=32778]="SUBTRACT",t[t.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(R||(R={})),function(t){t[t.ARRAY_BUFFER=34962]="ARRAY_BUFFER",t[t.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",t[t.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",t[t.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",t[t.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",t[t.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",t[t.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER"}(i||(i={})),function(t){t[t.FRONT=1028]="FRONT",t[t.BACK=1029]="BACK",t[t.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(A||(A={})),function(t){t[t.CW=2304]="CW",t[t.CCW=2305]="CCW"}(n||(n={})),function(t){t[t.BYTE=5120]="BYTE",t[t.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",t[t.SHORT=5122]="SHORT",t[t.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",t[t.INT=5124]="INT",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.FLOAT=5126]="FLOAT"}(o||(o={})),function(t){t[t.NEVER=512]="NEVER",t[t.LESS=513]="LESS",t[t.EQUAL=514]="EQUAL",t[t.LEQUAL=515]="LEQUAL",t[t.GREATER=516]="GREATER",t[t.NOTEQUAL=517]="NOTEQUAL",t[t.GEQUAL=518]="GEQUAL",t[t.ALWAYS=519]="ALWAYS"}(N||(N={})),function(t){t[t.ZERO=0]="ZERO",t[t.KEEP=7680]="KEEP",t[t.REPLACE=7681]="REPLACE",t[t.INCR=7682]="INCR",t[t.DECR=7683]="DECR",t[t.INVERT=5386]="INVERT",t[t.INCR_WRAP=34055]="INCR_WRAP",t[t.DECR_WRAP=34056]="DECR_WRAP"}(a||(a={})),function(t){t[t.NEAREST=9728]="NEAREST",t[t.LINEAR=9729]="LINEAR",t[t.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",t[t.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",t[t.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",t[t.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(s||(s={})),function(t){t[t.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",t[t.REPEAT=10497]="REPEAT",t[t.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(I||(I={})),function(t){t[t.TEXTURE_2D=3553]="TEXTURE_2D",t[t.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",t[t.TEXTURE_3D=32879]="TEXTURE_3D",t[t.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",t[t.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",t[t.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",t[t.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",t[t.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(S||(S={})),function(t){t[t.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",t[t.DEPTH_STENCIL=34041]="DEPTH_STENCIL",t[t.ALPHA=6406]="ALPHA",t[t.RGB=6407]="RGB",t[t.RGBA=6408]="RGBA",t[t.LUMINANCE=6409]="LUMINANCE",t[t.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",t[t.RED=6403]="RED",t[t.RG=33319]="RG",t[t.RED_INTEGER=36244]="RED_INTEGER",t[t.RG_INTEGER=33320]="RG_INTEGER",t[t.RGB_INTEGER=36248]="RGB_INTEGER",t[t.RGBA_INTEGER=36249]="RGBA_INTEGER"}(u||(u={})),function(t){t[t.RGBA4=32854]="RGBA4",t[t.R16F=33325]="R16F",t[t.RG16F=33327]="RG16F",t[t.RGB32F=34837]="RGB32F",t[t.RGBA16F=34842]="RGBA16F",t[t.R32F=33326]="R32F",t[t.RG32F=33328]="RG32F",t[t.RGBA32F=34836]="RGBA32F",t[t.R11F_G11F_B10F=35898]="R11F_G11F_B10F",t[t.RGB8=32849]="RGB8",t[t.RGBA8=32856]="RGBA8",t[t.RGB5_A1=32855]="RGB5_A1",t[t.R8=33321]="R8",t[t.RG8=33323]="RG8",t[t.R8I=33329]="R8I",t[t.R8UI=33330]="R8UI",t[t.R16I=33331]="R16I",t[t.R16UI=33332]="R16UI",t[t.R32I=33333]="R32I",t[t.R32UI=33334]="R32UI",t[t.RG8I=33335]="RG8I",t[t.RG8UI=33336]="RG8UI",t[t.RG16I=33337]="RG16I",t[t.RG16UI=33338]="RG16UI",t[t.RG32I=33339]="RG32I",t[t.RG32UI=33340]="RG32UI",t[t.RGB16F=34843]="RGB16F",t[t.RGB9_E5=35901]="RGB9_E5",t[t.SRGB8=35905]="SRGB8",t[t.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",t[t.RGB565=36194]="RGB565",t[t.RGBA32UI=36208]="RGBA32UI",t[t.RGB32UI=36209]="RGB32UI",t[t.RGBA16UI=36214]="RGBA16UI",t[t.RGB16UI=36215]="RGB16UI",t[t.RGBA8UI=36220]="RGBA8UI",t[t.RGB8UI=36221]="RGB8UI",t[t.RGBA32I=36226]="RGBA32I",t[t.RGB32I=36227]="RGB32I",t[t.RGBA16I=36232]="RGBA16I",t[t.RGB16I=36233]="RGB16I",t[t.RGBA8I=36238]="RGBA8I",t[t.RGB8I=36239]="RGB8I",t[t.R8_SNORM=36756]="R8_SNORM",t[t.RG8_SNORM=36757]="RG8_SNORM",t[t.RGB8_SNORM=36758]="RGB8_SNORM",t[t.RGBA8_SNORM=36759]="RGBA8_SNORM",t[t.RGB10_A2=32857]="RGB10_A2",t[t.RGB10_A2UI=36975]="RGB10_A2UI"}(C||(C={})),function(t){t[t.FLOAT=5126]="FLOAT",t[t.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",t[t.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",t[t.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",t[t.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",t[t.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",t[t.BYTE=5120]="BYTE",t[t.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",t[t.SHORT=5122]="SHORT",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.INT=5124]="INT",t[t.HALF_FLOAT=5131]="HALF_FLOAT",t[t.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",t[t.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",t[t.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",t[t.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(O||(O={})),function(t){t[t.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",t[t.STENCIL_INDEX8=36168]="STENCIL_INDEX8",t[t.DEPTH_STENCIL=34041]="DEPTH_STENCIL",t[t.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",t[t.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",t[t.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",t[t.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(M||(M={})),function(t){t[t.STATIC_DRAW=35044]="STATIC_DRAW",t[t.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",t[t.STREAM_DRAW=35040]="STREAM_DRAW",t[t.STATIC_READ=35045]="STATIC_READ",t[t.DYNAMIC_READ=35049]="DYNAMIC_READ",t[t.STREAM_READ=35041]="STREAM_READ",t[t.STATIC_COPY=35046]="STATIC_COPY",t[t.DYNAMIC_COPY=35050]="DYNAMIC_COPY",t[t.STREAM_COPY=35042]="STREAM_COPY"}(c||(c={})),function(t){t[t.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",t[t.VERTEX_SHADER=35633]="VERTEX_SHADER"}(D||(D={})),function(t){t[t.FRAMEBUFFER=36160]="FRAMEBUFFER",t[t.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",t[t.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(l||(l={})),function(t){t[t.TEXTURE=0]="TEXTURE",t[t.RENDER_BUFFER=1]="RENDER_BUFFER",t[t.CUBEMAP=2]="CUBEMAP"}(L||(L={})),function(t){t[t.NONE=0]="NONE",t[t.DEPTH_RENDER_BUFFER=1]="DEPTH_RENDER_BUFFER",t[t.STENCIL_RENDER_BUFFER=2]="STENCIL_RENDER_BUFFER",t[t.DEPTH_STENCIL_RENDER_BUFFER=3]="DEPTH_STENCIL_RENDER_BUFFER",t[t.DEPTH_STENCIL_TEXTURE=4]="DEPTH_STENCIL_TEXTURE"}(h||(h={}));const P=33984;var U,p;!function(t){t[t.Texture=0]="Texture",t[t.BufferObject=1]="BufferObject",t[t.VertexArrayObject=2]="VertexArrayObject",t[t.Shader=3]="Shader",t[t.Program=4]="Program",t[t.FramebufferObject=5]="FramebufferObject",t[t.Renderbuffer=6]="Renderbuffer",t[t.Sync=7]="Sync",t[t.COUNT=8]="COUNT"}(U||(U={})),function(t){t[t.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",t[t.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",t[t.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",t[t.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",t[t.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",t[t.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",t[t.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",t[t.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",t[t.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",t[t.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",t[t.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",t[t.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",t[t.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",t[t.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",t[t.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",t[t.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(p||(p={}));const d=33306;var G,m,B,f,F,g,x;!function(t){t[t.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",t[t.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",t[t.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",t[t.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",t[t.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",t[t.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",t[t.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",t[t.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",t[t.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",t[t.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",t[t.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(G||(G={})),function(t){t[t.FLOAT=5126]="FLOAT",t[t.FLOAT_VEC2=35664]="FLOAT_VEC2",t[t.FLOAT_VEC3=35665]="FLOAT_VEC3",t[t.FLOAT_VEC4=35666]="FLOAT_VEC4",t[t.INT=5124]="INT",t[t.INT_VEC2=35667]="INT_VEC2",t[t.INT_VEC3=35668]="INT_VEC3",t[t.INT_VEC4=35669]="INT_VEC4",t[t.BOOL=35670]="BOOL",t[t.BOOL_VEC2=35671]="BOOL_VEC2",t[t.BOOL_VEC3=35672]="BOOL_VEC3",t[t.BOOL_VEC4=35673]="BOOL_VEC4",t[t.FLOAT_MAT2=35674]="FLOAT_MAT2",t[t.FLOAT_MAT3=35675]="FLOAT_MAT3",t[t.FLOAT_MAT4=35676]="FLOAT_MAT4",t[t.SAMPLER_2D=35678]="SAMPLER_2D",t[t.SAMPLER_CUBE=35680]="SAMPLER_CUBE",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",t[t.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",t[t.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",t[t.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",t[t.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",t[t.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",t[t.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",t[t.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",t[t.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",t[t.SAMPLER_3D=35679]="SAMPLER_3D",t[t.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",t[t.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",t[t.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",t[t.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",t[t.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",t[t.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",t[t.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",t[t.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",t[t.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",t[t.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",t[t.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",t[t.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(m||(m={})),function(t){t[t.OBJECT_TYPE=37138]="OBJECT_TYPE",t[t.SYNC_CONDITION=37139]="SYNC_CONDITION",t[t.SYNC_STATUS=37140]="SYNC_STATUS",t[t.SYNC_FLAGS=37141]="SYNC_FLAGS"}(B||(B={})),function(t){t[t.UNSIGNALED=37144]="UNSIGNALED",t[t.SIGNALED=37145]="SIGNALED"}(f||(f={})),function(t){t[t.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",t[t.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",t[t.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",t[t.WAIT_FAILED=37149]="WAIT_FAILED"}(F||(F={})),function(t){t[t.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(g||(g={})),function(t){t[t.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(x||(x={}))}}]);