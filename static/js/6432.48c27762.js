"use strict";(self["webpackChunkonepic"]=self["webpackChunkonepic"]||[]).push([[6432],{26114:function(t,n,r){r.d(n,{a:function(){return u},c:function(){return e},f:function(){return i}});r(23767),r(8585),r(68696);function e(){return[1,0,0,0,1,0,0,0,1]}function o(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]}function i(t,n,r,e,o,i,u,c,a){return[t,n,r,e,o,i,u,c,a]}function u(t,n){return new Float64Array(t,n,9)}Object.freeze(Object.defineProperty({__proto__:null,clone:o,create:e,createView:u,fromValues:i},Symbol.toStringTag,{value:"Module"}))},94370:function(t,n,r){r.d(n,{I:function(){return c},a:function(){return u},b:function(){return o},c:function(){return e}});r(23767),r(8585),r(68696);function e(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function o(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]}function i(t,n,r,e,o,i,u,c,a,f,s,l,p,y,h,d){return[t,n,r,e,o,i,u,c,a,f,s,l,p,y,h,d]}function u(t,n){return new Float64Array(t,n,16)}const c=e();Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:c,clone:o,create:e,createView:u,fromValues:i},Symbol.toStringTag,{value:"Module"}))},44420:function(t,n,r){r.d(n,{c:function(){return T},g:function(){return l},j:function(){return z},k:function(){return _},m:function(){return p},s:function(){return s}});var e=r(26114),o=r(45263),i=r(74674),u=r(73288),c=r(65554),a=r(97848);function f(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function s(t,n,r){r*=.5;const e=Math.sin(r);return t[0]=e*n[0],t[1]=e*n[1],t[2]=e*n[2],t[3]=Math.cos(r),t}function l(t,n){const r=2*Math.acos(n[3]),e=Math.sin(r/2);return e>(0,u.g)()?(t[0]=n[0]/e,t[1]=n[1]/e,t[2]=n[2]/e):(t[0]=1,t[1]=0,t[2]=0),r}function p(t,n,r){const e=n[0],o=n[1],i=n[2],u=n[3],c=r[0],a=r[1],f=r[2],s=r[3];return t[0]=e*s+u*c+o*f-i*a,t[1]=o*s+u*a+i*c-e*f,t[2]=i*s+u*f+e*a-o*c,t[3]=u*s-e*c-o*a-i*f,t}function y(t,n,r){r*=.5;const e=n[0],o=n[1],i=n[2],u=n[3],c=Math.sin(r),a=Math.cos(r);return t[0]=e*a+u*c,t[1]=o*a+i*c,t[2]=i*a-o*c,t[3]=u*a-e*c,t}function h(t,n,r){r*=.5;const e=n[0],o=n[1],i=n[2],u=n[3],c=Math.sin(r),a=Math.cos(r);return t[0]=e*a-i*c,t[1]=o*a+u*c,t[2]=i*a+e*c,t[3]=u*a-o*c,t}function d(t,n,r){r*=.5;const e=n[0],o=n[1],i=n[2],u=n[3],c=Math.sin(r),a=Math.cos(r);return t[0]=e*a+o*c,t[1]=o*a-e*c,t[2]=i*a+u*c,t[3]=u*a-i*c,t}function g(t,n){const r=n[0],e=n[1],o=n[2];return t[0]=r,t[1]=e,t[2]=o,t[3]=Math.sqrt(Math.abs(1-r*r-e*e-o*o)),t}function m(t,n,r,e){const o=n[0],i=n[1],c=n[2],a=n[3];let f,s,l,p,y,h=r[0],d=r[1],g=r[2],m=r[3];return s=o*h+i*d+c*g+a*m,s<0&&(s=-s,h=-h,d=-d,g=-g,m=-m),1-s>(0,u.g)()?(f=Math.acos(s),l=Math.sin(f),p=Math.sin((1-e)*f)/l,y=Math.sin(e*f)/l):(p=1-e,y=e),t[0]=p*o+y*h,t[1]=p*i+y*d,t[2]=p*c+y*g,t[3]=p*a+y*m,t}function M(t){const n=u.R,r=n(),e=n(),o=n(),i=Math.sqrt(1-r),c=Math.sqrt(r);return t[0]=i*Math.sin(2*Math.PI*e),t[1]=i*Math.cos(2*Math.PI*e),t[2]=c*Math.sin(2*Math.PI*o),t[3]=c*Math.cos(2*Math.PI*o),t}function P(t,n){const r=n[0],e=n[1],o=n[2],i=n[3],u=r*r+e*e+o*o+i*i,c=u?1/u:0;return t[0]=-r*c,t[1]=-e*c,t[2]=-o*c,t[3]=i*c,t}function T(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t}function A(t,n){const r=n[0]+n[4]+n[8];let e;if(r>0)e=Math.sqrt(r+1),t[3]=.5*e,e=.5/e,t[0]=(n[5]-n[7])*e,t[1]=(n[6]-n[2])*e,t[2]=(n[1]-n[3])*e;else{let r=0;n[4]>n[0]&&(r=1),n[8]>n[3*r+r]&&(r=2);const o=(r+1)%3,i=(r+2)%3;e=Math.sqrt(n[3*r+r]-n[3*o+o]-n[3*i+i]+1),t[r]=.5*e,e=.5/e,t[3]=(n[3*o+i]-n[3*i+o])*e,t[o]=(n[3*o+r]+n[3*r+o])*e,t[i]=(n[3*i+r]+n[3*r+i])*e}return t}function _(t,n,r,e){const o=.5*Math.PI/180;n*=o,r*=o,e*=o;const i=Math.sin(n),u=Math.cos(n),c=Math.sin(r),a=Math.cos(r),f=Math.sin(e),s=Math.cos(e);return t[0]=i*a*s-u*c*f,t[1]=u*c*s+i*a*f,t[2]=u*a*f-i*c*s,t[3]=u*a*s+i*c*f,t}function b(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}const F=a.c,S=a.s,v=a.a,w=p,B=a.b,E=a.d,C=a.l,x=a.e,R=x,O=a.f,I=O,j=a.n,z=a.g,Z=a.h;function N(t,n,r){const e=(0,c.e)(n,r);return e<-.999999?((0,c.f)(V,q,n),(0,c.u)(V)<1e-6&&(0,c.f)(V,W,n),(0,c.n)(V,V),s(t,V,Math.PI),t):e>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):((0,c.f)(V,n,r),t[0]=V[0],t[1]=V[1],t[2]=V[2],t[3]=1+e,j(t,t))}const V=(0,i.c)(),q=(0,i.f)(1,0,0),W=(0,i.f)(0,1,0);function L(t,n,r,e,o,i){return m(Y,n,o,i),m(k,r,e,i),m(t,Y,k,2*i*(1-i)),t}const Y=(0,o.a)(),k=(0,o.a)();function U(t,n,r,e){const o=G;return o[0]=r[0],o[3]=r[1],o[6]=r[2],o[1]=e[0],o[4]=e[1],o[7]=e[2],o[2]=-n[0],o[5]=-n[1],o[8]=-n[2],j(t,A(t,o))}const G=(0,e.c)();Object.freeze(Object.defineProperty({__proto__:null,add:v,calculateW:g,conjugate:T,copy:F,dot:E,equals:Z,exactEquals:z,fromEuler:_,fromMat3:A,getAxisAngle:l,identity:f,invert:P,len:R,length:x,lerp:C,mul:w,multiply:p,normalize:j,random:M,rotateX:y,rotateY:h,rotateZ:d,rotationTo:N,scale:B,set:S,setAxes:U,setAxisAngle:s,slerp:m,sqlerp:L,sqrLen:I,squaredLength:O,str:b},Symbol.toStringTag,{value:"Module"}))},45263:function(t,n,r){r.d(n,{I:function(){return c},a:function(){return e},b:function(){return o},c:function(){return u}});r(23767),r(8585),r(68696);function e(){return[0,0,0,1]}function o(t){return[t[0],t[1],t[2],t[3]]}function i(t,n,r,e){return[t,n,r,e]}function u(t,n){return new Float64Array(t,n,4)}const c=e();Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:c,clone:o,create:e,createView:u,fromValues:i},Symbol.toStringTag,{value:"Module"}))},84121:function(t,n,r){r.d(n,{a:function(){return i},b:function(){return a},n:function(){return c},s:function(){return u},t:function(){return o}});var e=r(49448);function o(t,n,r){if(t.count!==n.count)return void e.c.error("source and destination buffers need to have the same number of elements");const o=t.count,i=r[0],u=r[1],c=r[2],a=r[4],f=r[5],s=r[6],l=r[8],p=r[9],y=r[10],h=r[12],d=r[13],g=r[14],m=t.typedBuffer,M=t.typedBufferStride,P=n.typedBuffer,T=n.typedBufferStride;for(let e=0;e<o;e++){const t=e*M,n=e*T,r=P[n],o=P[n+1],A=P[n+2];m[t]=i*r+a*o+l*A+h,m[t+1]=u*r+f*o+p*A+d,m[t+2]=c*r+s*o+y*A+g}}function i(t,n,r){if(t.count!==n.count)return void e.c.error("source and destination buffers need to have the same number of elements");const o=t.count,i=r[0],u=r[1],c=r[2],a=r[3],f=r[4],s=r[5],l=r[6],p=r[7],y=r[8],h=t.typedBuffer,d=t.typedBufferStride,g=n.typedBuffer,m=n.typedBufferStride;for(let e=0;e<o;e++){const t=e*d,n=e*m,r=g[n],o=g[n+1],M=g[n+2];h[t]=i*r+a*o+l*M,h[t+1]=u*r+f*o+p*M,h[t+2]=c*r+s*o+y*M}}function u(t,n,r){const e=Math.min(t.count,n.count),o=t.typedBuffer,i=t.typedBufferStride,u=n.typedBuffer,c=n.typedBufferStride;for(let a=0;a<e;a++){const t=a*i,n=a*c;o[t]=r*u[n],o[t+1]=r*u[n+1],o[t+2]=r*u[n+2]}}function c(t,n){const r=Math.min(t.count,n.count),e=t.typedBuffer,o=t.typedBufferStride,i=n.typedBuffer,u=n.typedBufferStride;for(let c=0;c<r;c++){const t=c*o,n=c*u,r=i[n],a=i[n+1],f=i[n+2],s=r*r+a*a+f*f;if(s>0){const n=1/Math.sqrt(s);e[t]=n*r,e[t+1]=n*a,e[t+2]=n*f}}}function a(t,n,r){const e=Math.min(t.count,n.count),o=t.typedBuffer,i=t.typedBufferStride,u=n.typedBuffer,c=n.typedBufferStride;for(let a=0;a<e;a++){const t=a*i,n=a*c;o[t]=u[n]>>r,o[t+1]=u[n+1]>>r,o[t+2]=u[n+2]>>r}}Object.freeze(Object.defineProperty({__proto__:null,normalize:c,scale:u,shiftRight:a,transformMat3:i,transformMat4:o},Symbol.toStringTag,{value:"Module"}))},34305:function(t,n,r){function e(t,n,r){const e=t.typedBuffer,o=t.typedBufferStride,i=n.typedBuffer,u=n.typedBufferStride,c=r?r.count:n.count;let a=(r&&r.dstIndex?r.dstIndex:0)*o,f=(r&&r.srcIndex?r.srcIndex:0)*u;for(let s=0;s<c;++s)e[a]=i[f],e[a+1]=i[f+1],e[a+2]=i[f+2],a+=o,f+=u}function o(t,n,r,e,o){const i=t.typedBuffer,u=t.typedBufferStride,c=o?.count??t.count;let a=(o?.dstIndex??0)*u;for(let f=0;f<c;++f)i[a]=n,i[a+1]=r,i[a+2]=e,a+=u}r.d(n,{c:function(){return e},f:function(){return o}});Object.freeze(Object.defineProperty({__proto__:null,copy:e,fill:o},Symbol.toStringTag,{value:"Module"}))},12285:function(t,n,r){r.d(n,{rS:function(){return f}});var e=r(85115),o=r(87429),i=r(54597);const u=new o.Z(e.kU),c=new o.Z(e.JL),a=new o.Z(e.mM);new o.Z(e.pn);function f(t){return t&&((0,i.BZ)(t)||(0,i.fS)(t,c))?c:t&&((0,i.V2)(t)||(0,i.fS)(t,a))?a:u}},45977:function(t,n,r){r.d(n,{Z:function(){return F}});r(23767),r(8585),r(68696);var e,o=r(61445),i=r(60931),u=r(8693),c=r(58006),a=(r(94315),r(15055),r(77623)),f=r(51802),s=r(94370),l=r(44420),p=r(45263),y=r(65554),h=r(74674),d=r(12218),g=r(59053),m=r(12285),M=r(24272),P=r(76180),T=r(84121),A=r(34305);let _=e=class extends i.wq{constructor(t){super(t),this.origin=(0,h.c)(),this.translation=(0,h.c)(),this.rotation=(0,M.Ue)(),this.scale=(0,h.f)(1,1,1),this.geographic=!0}get localMatrix(){const t=(0,s.c)();return(0,l.s)(b,(0,M.ZZ)(this.rotation),(0,M.WH)(this.rotation)),(0,f.g)(t,b,this.translation,this.scale),t}get localMatrixInverse(){return(0,f.a)((0,s.c)(),this.localMatrix)}applyLocal(t,n){return(0,y.m)(n,t,this.localMatrix)}applyLocalInverse(t,n){return(0,y.m)(n,t,this.localMatrixInverse)}project(t,n){const r=new Float64Array(t.length),e=P.fP.fromTypedArray(r),o=P.fP.fromTypedArray(t);if(this.geographic){const t=(0,m.rS)(n),i=(0,s.c)();return(0,g.Bm)(n,this.origin,i,t),(0,f.m)(i,i,this.localMatrix),(0,T.t)(e,o,i),(0,g.CM)(r,t,0,r,n,0,r.length/3),r}const{localMatrix:i,origin:u}=this;(0,f.h)(i,s.I)?(0,A.c)(e,o):(0,T.t)(e,o,i);for(let c=0;c<r.length;c+=3)r[c+0]+=u[0],r[c+1]+=u[1],r[c+2]+=u[2];return r}getOriginPoint(t){const[n,r,e]=this.origin;return new d.Z({x:n,y:r,z:e,spatialReference:t})}equals(t){return(0,u.pC)(t)&&this.geographic===t.geographic&&(0,y.k)(this.origin,t.origin)&&(0,f.j)(this.localMatrix,t.localMatrix)}clone(){const t={origin:(0,h.a)(this.origin),translation:(0,h.a)(this.translation),rotation:(0,M.Ue)(this.rotation),scale:(0,h.a)(this.scale),geographic:this.geographic};return new e(t)}};(0,o._)([(0,c.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],_.prototype,"origin",void 0),(0,o._)([(0,c.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],_.prototype,"translation",void 0),(0,o._)([(0,c.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],_.prototype,"rotation",void 0),(0,o._)([(0,c.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],_.prototype,"scale",void 0),(0,o._)([(0,c.Cb)({type:Boolean,nonNullable:!0,json:{write:!0}})],_.prototype,"geographic",void 0),(0,o._)([(0,c.Cb)()],_.prototype,"localMatrix",null),(0,o._)([(0,c.Cb)()],_.prototype,"localMatrixInverse",null),_=e=(0,o._)([(0,a.j)("esri.geometry.support.MeshTransform")],_);const b=(0,p.a)(),F=_},24272:function(t,n,r){r.d(n,{Ue:function(){return c},WH:function(){return l},ZZ:function(){return s},qC:function(){return f},uT:function(){return a}});var e=r(67752),o=r(44420),i=r(45263),u=r(65554);function c(t=y){return[t[0],t[1],t[2],t[3]]}function a(t,n,r=c()){return(0,u.c)(s(r),t),r[3]=n,r}function f(t,n,r=c()){return(0,o.s)(h,s(t),l(t)),(0,o.s)(d,s(n),l(n)),(0,o.m)(h,d,h),p(r,(0,e.BV)((0,o.g)(s(r),h)))}function s(t){return t}function l(t){return(0,e.Vl)(t[3])}function p(t,n){return t[3]=n,t}const y=[0,0,1,0],h=(0,i.a)(),d=(0,i.a)();c()},49448:function(t,n,r){r.d(n,{c:function(){return o}});var e=r(93622);const o=e.Z.getLogger("esri.views.3d.support.buffer.math")},30958:function(t,n,r){function e(t,n){return t.isGeographic||t.isWebMercator&&(n?.geographic??!0)}r.d(n,{h:function(){return e}})},6432:function(t,n,r){r.d(n,{FF:function(){return P},I5:function(){return m},Yq:function(){return T},iv:function(){return g},w1:function(){return M}});r(23767),r(8585),r(68696);var e=r(8693),o=r(61293),i=r(26114),u=r(51802),c=r(94370),a=r(18037),f=r(59053),s=r(12285),l=r(45977),p=r(76180),y=r(84121),h=r(30958),d=r(3057);function g(t,n,r){return(0,h.h)(n.spatialReference,r)?_(t,n,r):A(t,n,r)}function m(t,n,r){const{position:o,normal:i,tangent:u}=t;if((0,e.Wi)(n))return{position:o,normal:i,tangent:u};const c=n.localMatrix;return g({position:(0,d.zZ)(o,new Float64Array(o.length),c),normal:(0,e.pC)(i)?(0,d.w9)(i,new Float32Array(i.length),c):null,tangent:(0,e.pC)(u)?(0,d.VS)(u,new Float32Array(u.length),c):null},n.getOriginPoint(r),{geographic:n.geographic})}function M(t,n,r){if(r?.useTransform){const{position:e,normal:o,tangent:i}=t;return{vertexAttributes:{position:e,normal:o,tangent:i},transform:new l.Z({origin:[n.x,n.y,n.z??0],geographic:(0,h.h)(n.spatialReference,r)})}}return{vertexAttributes:g(t,n,r),transform:null}}function P(t,n,r){return(0,h.h)(n.spatialReference,r)?w(t,n,r):v(t,n,r)}function T(t,n,r,o){if((0,e.Wi)(n))return P(t,r,o);const i=m(t,n,r.spatialReference);return r.equals(n.getOriginPoint(r.spatialReference))?v(i,r,o):P(i,r,o)}function A(t,n,r){const e=new Float64Array(t.position.length),o=t.position,i=n.x,u=n.y,c=n.z||0,{horizontal:a,vertical:f}=R(r?r.unit:null,n.spatialReference);for(let s=0;s<o.length;s+=3)e[s+0]=o[s+0]*a+i,e[s+1]=o[s+1]*a+u,e[s+2]=o[s+2]*f+c;return{position:e,normal:t.normal,tangent:t.tangent}}function _(t,n,r){const e=n.spatialReference,o=B(n,r,O),i=new Float64Array(t.position.length),u=b(t.position,o,e,i),c=(0,a.b)(j,o);return{position:u,normal:F(u,i,t.normal,c,e),tangent:S(u,i,t.tangent,c,e)}}function b(t,n,r,e){(0,y.t)(p.fP.fromTypedArray(e),p.fP.fromTypedArray(t),n);const o=new Float64Array(t.length);return(0,d.To)(e,o,r)}function F(t,n,r,o,i){if((0,e.Wi)(r))return null;const u=new Float32Array(r.length);return(0,y.a)(p.ct.fromTypedArray(u),p.ct.fromTypedArray(r),o),(0,d.Yk)(u,t,n,i,u),u}function S(t,n,r,o,i){if((0,e.Wi)(r))return null;const u=new Float32Array(r.length);(0,y.a)(p.ct.fromTypedArray(u,4*Float32Array.BYTES_PER_ELEMENT),p.ct.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),o);for(let e=3;e<u.length;e+=4)u[e]=r[e];return(0,d.M2)(u,t,n,i,u),u}function v(t,n,r){const e=new Float64Array(t.position.length),o=t.position,i=n.x,u=n.y,c=n.z||0,{horizontal:a,vertical:f}=R(r?r.unit:null,n.spatialReference);for(let s=0;s<o.length;s+=3)e[s+0]=(o[s+0]-i)/a,e[s+1]=(o[s+1]-u)/a,e[s+2]=(o[s+2]-c)/f;return{position:e,normal:t.normal,tangent:t.tangent}}function w(t,n,r){const e=n.spatialReference;B(n,r,O);const o=(0,u.a)(I,O),i=new Float64Array(t.position.length),c=E(t.position,e,o,i),f=(0,a.b)(j,o);return{position:c,normal:C(t.normal,t.position,i,e,f),tangent:x(t.tangent,t.position,i,e,f)}}function B(t,n,r){(0,f.Bm)(t.spatialReference,[t.x,t.y,t.z||0],r,(0,s.rS)(t.spatialReference));const{horizontal:e,vertical:o}=R(n?n.unit:null,t.spatialReference);return(0,u.k)(r,r,[e,e,o]),r}function E(t,n,r,e){const o=(0,d.XO)(t,n,e),i=p.fP.fromTypedArray(o),u=new Float64Array(o.length),c=p.fP.fromTypedArray(u);return(0,y.t)(c,i,r),u}function C(t,n,r,o,i){if((0,e.Wi)(t))return null;const u=(0,d.Iz)(t,n,r,o,new Float32Array(t.length)),c=p.ct.fromTypedArray(u);return(0,y.a)(c,c,i),u}function x(t,n,r,o,i){if((0,e.Wi)(t))return null;const u=(0,d.wi)(t,n,r,o,new Float32Array(t.length)),c=p.ct.fromTypedArray(u,4*Float32Array.BYTES_PER_ELEMENT);return(0,y.a)(c,c,i),u}function R(t,n){if((0,e.Wi)(t))return z;const r=n.isGeographic?1:(0,o.c9)(n),i=n.isGeographic?1:(0,o._R)(n),u=(0,o.En)(1,t,"meters");return{horizontal:u*r,vertical:u*i}}const O=(0,c.c)(),I=(0,c.c)(),j=(0,i.c)(),z={horizontal:1,vertical:1}},3057:function(t,n,r){r.d(n,{Iz:function(){return m},M2:function(){return S},To:function(){return T},VS:function(){return b},XO:function(){return P},Yk:function(){return M},w9:function(){return _},wi:function(){return F},zZ:function(){return A}});r(23767),r(8585),r(68696);var e=r(93622),o=r(8693),i=r(18037),u=r(26114),c=r(94370),a=r(65554),f=r(74674),s=r(59053),l=r(12285),p=r(54597),y=r(31957),h=r(76180),d=r(84121);const g=e.Z.getLogger("esri.geometry.support.meshUtils.normalProjection");function m(t,n,r,e,o){return w(e)?(v(C.TO_PCPF,h.ct.fromTypedArray(t),h.fP.fromTypedArray(n),h.fP.fromTypedArray(r),e,h.ct.fromTypedArray(o)),o):(g.error("Cannot convert spatial reference to PCPF"),o)}function M(t,n,r,e,o){return w(e)?(v(C.FROM_PCPF,h.ct.fromTypedArray(t),h.fP.fromTypedArray(n),h.fP.fromTypedArray(r),e,h.ct.fromTypedArray(o)),o):(g.error("Cannot convert to spatial reference from PCPF"),o)}function P(t,n,r){return(0,s.CM)(t,n,0,r,(0,l.rS)(n),0,t.length/3),r}function T(t,n,r){return(0,s.CM)(t,(0,l.rS)(r),0,n,r,0,t.length/3),n}function A(t,n,r){if((0,o.Wi)(t))return n;const e=h.fP.fromTypedArray(t),i=h.fP.fromTypedArray(n);return(0,d.t)(i,e,r),n}function _(t,n,r){if((0,o.Wi)(t))return n;(0,i.b)(I,r);const e=h.ct.fromTypedArray(t),u=h.ct.fromTypedArray(n);return(0,d.a)(u,e,I),(0,i.i)(I)||(0,d.n)(u,u),n}function b(t,n,r){if((0,o.Wi)(t))return n;(0,i.b)(I,r);const e=h.ct.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT),u=h.ct.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT);if((0,d.a)(u,e,I),(0,i.i)(I)||(0,d.n)(u,u),t!==n)for(let o=3;o<t.length;o+=4)n[o]=t[o];return n}function F(t,n,r,e,o){if(!w(e))return g.error("Cannot convert spatial reference to PCPF"),o;v(C.TO_PCPF,h.ct.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT),h.fP.fromTypedArray(n),h.fP.fromTypedArray(r),e,h.ct.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT));for(let i=3;i<t.length;i+=4)o[i]=t[i];return o}function S(t,n,r,e,o){if(!w(e))return g.error("Cannot convert to spatial reference from PCPF"),o;v(C.FROM_PCPF,h.ct.fromTypedArray(t,16),h.fP.fromTypedArray(n),h.fP.fromTypedArray(r),e,h.ct.fromTypedArray(o,16));for(let i=3;i<t.length;i+=4)o[i]=t[i];return o}function v(t,n,r,e,o,u){if(!n)return;const c=r.count,f=(0,l.rS)(o);if(B(o))for(let l=0;l<c;l++)e.getVec(l,x),n.getVec(l,R),(0,s.Bm)(f,x,O,f),(0,i.f)(I,O),t===C.FROM_PCPF&&(0,i.t)(I,I),(0,a.t)(R,R,I),u.setVec(l,R);else for(let l=0;l<c;l++){e.getVec(l,x),n.getVec(l,R),(0,s.Bm)(f,x,O,f),(0,i.f)(I,O);const o=(0,y.mZ)(r.get(l,1));let c=Math.cos(o);t===C.TO_PCPF&&(c=1/c),I[0]*=c,I[1]*=c,I[2]*=c,I[3]*=c,I[4]*=c,I[5]*=c,t===C.FROM_PCPF&&(0,i.t)(I,I),(0,a.t)(R,R,I),(0,a.n)(R,R),u.setVec(l,R)}return u}function w(t){return B(t)||E(t)}function B(t){return t.isWGS84||(0,p.yW)(t)||(0,p.BZ)(t)||(0,p.V2)(t)}function E(t){return t.isWebMercator}var C;!function(t){t[t.TO_PCPF=0]="TO_PCPF",t[t.FROM_PCPF=1]="FROM_PCPF"}(C||(C={}));const x=(0,f.c)(),R=(0,f.c)(),O=(0,c.c)(),I=(0,u.c)()}}]);