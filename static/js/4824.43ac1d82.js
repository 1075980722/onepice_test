"use strict";(self["webpackChunkonepic"]=self["webpackChunkonepic"]||[]).push([[4824,4303],{44303:function(e,n,t){var r;t.d(n,{Hy:function(){return p},OF:function(){return a},TD:function(){return h},Tu:function(){return m},VO:function(){return d},aV:function(){return u},kq:function(){return l},rH:function(){return r}}),function(e){e.AsyncNotEnabled="AsyncNotEnabled",e.ModulesNotSupported="ModulesNotSupported",e.CircularModules="CircularModules",e.NeverReach="NeverReach",e.UnsupportedHashType="UnsupportedHashType",e.InvalidParameter="InvalidParameter",e.UnexpectedToken="UnexpectedToken",e.Unrecognised="Unrecognised",e.UnrecognisedType="UnrecognisedType",e.MaximumCallDepth="MaximumCallDepth",e.BooleanConditionRequired="BooleanConditionRequired",e.TypeNotAllowedInFeature="TypeNotAllowedInFeature",e.KeyMustBeString="KeyMustBeString",e.WrongNumberOfParameters="WrongNumberOfParameters",e.CallNonFunction="CallNonFunction",e.NoFunctionInTemplateLiteral="NoFunctionInTemplateLiteral",e.NoFunctionInDictionary="NoFunctionInDictionary",e.NoFunctionInArray="NoFunctionInArray",e.AssignModuleFunction="AssignModuleFunction",e.LogicExpressionOrAnd="LogicExpressionOrAnd",e.LogicalExpressionOnlyBoolean="LogicalExpressionOnlyBoolean",e.FuncionNotFound="FunctionNotFound",e.InvalidMemberAccessKey="InvalidMemberAccessKey",e.UnsupportedUnaryOperator="UnsupportUnaryOperator",e.InvalidIdentifier="InvalidIdentifier",e.MemberOfNull="MemberOfNull",e.UnsupportedOperator="UnsupportedOperator",e.Cancelled="Cancelled",e.ModuleAccessorMustBeString="ModuleAccessorMustBeString",e.ModuleExportNotFound="ModuleExportNotFound",e.Immutable="Immutable",e.OutOfBounds="OutOfBounds",e.IllegalResult="IllegalResult",e.FieldNotFound="FieldNotFound",e.PortalRequired="PortalRequired",e.LogicError="LogicError",e.ArrayAccessorMustBeNumber="ArrayAccessMustBeNumber",e.KeyAccessorMustBeString="KeyAccessorMustBeString",e.WrongSpatialReference="WrongSpatialReference"}(r||(r={}));const o={[r.TypeNotAllowedInFeature]:"Feature attributes only support dates, numbers, strings, guids.",[r.LogicError]:"Logic error - {reason}",[r.NeverReach]:"Encountered unreachable logic",[r.AsyncNotEnabled]:"Async Arcade must be enabled for this script",[r.ModuleAccessorMustBeString]:"Module accessor must be a string",[r.ModuleExportNotFound]:"Module has no export with provided identifier",[r.ModulesNotSupported]:"Current profile does not support modules",[r.ArrayAccessorMustBeNumber]:"Array accessor must be a number",[r.FuncionNotFound]:"Function not found",[r.FieldNotFound]:"Key not found - {key}",[r.CircularModules]:"Circular module dependencies are not allowed",[r.Cancelled]:"Execution cancelled",[r.UnsupportedHashType]:"Type not supported in hash function",[r.IllegalResult]:"Value is not a supported return type",[r.PortalRequired]:"Portal is required",[r.InvalidParameter]:"Invalid parameter",[r.WrongNumberOfParameters]:"Call with wrong number of parameters",[r.Unrecognised]:"Unrecognised code structure",[r.UnrecognisedType]:"Unrecognised type",[r.WrongSpatialReference]:"Cannot work with geometry in this spatial reference. It is different to the execution spatial reference",[r.BooleanConditionRequired]:"Conditions must use booleans",[r.NoFunctionInDictionary]:"Dictionaries cannot contain functions.",[r.NoFunctionInArray]:"Arrays cannot contain functions.",[r.NoFunctionInTemplateLiteral]:"Template Literals do not expect functions by value.",[r.KeyAccessorMustBeString]:"Accessor must be a string",[r.KeyMustBeString]:"Object keys must be a string",[r.Immutable]:"Object is immutable",[r.InvalidParameter]:"Invalid parameter",[r.UnexpectedToken]:"Unexpected token",[r.MemberOfNull]:"Cannot access property of null object",[r.MaximumCallDepth]:"Exceeded maximum function depth",[r.OutOfBounds]:"Out of bounds",[r.InvalidIdentifier]:"Identifier not recognised",[r.FuncionNotFound]:"Function not found",[r.CallNonFunction]:"Expression is not a function",[r.InvalidMemberAccessKey]:"Cannot access value using a key of this type",[r.AssignModuleFunction]:"Cannot assign function to module variable",[r.UnsupportedUnaryOperator]:"Unsupported unary operator",[r.UnsupportedOperator]:"Unsupported operator",[r.LogicalExpressionOnlyBoolean]:"Logical expressions must be boolean",[r.LogicExpressionOrAnd]:"Logical expression can only be combined with || or &&"};class s extends Error{constructor(...e){super(...e)}}class i extends s{constructor(e,n){super(c(n)+e.message,{cause:e}),this.loc=null,Error.captureStackTrace&&Error.captureStackTrace(this,i),n&&n.loc&&(this.loc=n.loc)}}class u extends Error{constructor(e,n,t,r){super("Execution error - "+c(t)+p(o[n],r)),this.loc=null,this.declaredRootClass="esri.arcade.arcadeexecutionerror",Error.captureStackTrace&&Error.captureStackTrace(this,u),t&&t.loc&&(this.loc=t.loc)}}function c(e){return e&&e.loc?`Line : ${e.loc.start?.line}, ${e.loc.start?.column}: `:""}class a extends Error{constructor(e,n,t,r){super("Compilation error - "+c(t)+p(o[n],r)),this.loc=null,this.declaredRootClass="esri.arcade.arcadecompilationerror",Error.captureStackTrace&&Error.captureStackTrace(this,a),t&&t.loc&&(this.loc=t.loc)}}class l extends Error{constructor(){super("Uncompilable code structures"),this.declaredRootClass="esri.arcade.arcadeuncompilableerror",Error.captureStackTrace&&Error.captureStackTrace(this,l)}}function p(e,n){try{if(!n)return e;for(const t in n){let r=n[t];r||(r=""),e=e.replace("{"+t+"}",n[t])}}catch(s){}return e}function d(e,n,t){return"esri.arcade.arcadeexecutionerror"===t.declaredRootClass||"esri.arcade.arcadecompilationerror"===t.declaredRootClass?null===t.loc&&n&&n.loc?new i(t,{cause:t}):t:("esri.arcade.featureset.support.featureseterror"===t.declaredRootClass||"esri.arcade.featureset.support.sqlerror"===t.declaredRootClass||t.declaredRootClass,n&&n.loc?new i(t,{cause:t}):t)}var h;!function(e){e.UnrecognisedUri="UnrecognisedUri",e.UnsupportedUriProtocol="UnsupportedUriProtocol"}(h||(h={}));const f={[h.UnrecognisedUri]:"Unrecognised uri - {uri}",[h.UnsupportedUriProtocol]:"Unrecognised uri protocol"};class m extends Error{constructor(e,n){super(p(f[e],n)),this.declaredRootClass="esri.arcade.arcademoduleerror",Error.captureStackTrace&&Error.captureStackTrace(this,m)}}},5312:function(e,n,t){t.d(n,{N:function(){return r}});const r={convertToGEGeometry:o,exportPoint:i,exportPolygon:c,exportPolyline:l,exportMultipoint:d,exportExtent:f};function o(e,n){return null==n?null:e.convertJSONToGeometry(n)}class s{constructor(e,n,t){this.x=e,this.y=n,this.spatialReference=t,this.z=void 0,this.m=void 0}}function i(e,n,t){const r=new s(e.getPointX(n),e.getPointY(n),t),o=e.hasZ(n),i=e.hasM(n);return o&&(r.z=e.getPointZ(n)),i&&(r.m=e.getPointM(n)),r}class u{constructor(e,n,t,r){this.rings=e,this.spatialReference=n,this.hasZ=void 0,this.hasM=void 0,t&&(this.hasZ=t),r&&(this.hasM=r)}}function c(e,n,t){return new u(e.exportPaths(n),t,e.hasZ(n),e.hasM(n))}class a{constructor(e,n,t,r){this.paths=e,this.spatialReference=n,this.hasZ=void 0,this.hasM=void 0,t&&(this.hasZ=t),r&&(this.hasM=r)}}function l(e,n,t){return new a(e.exportPaths(n),t,e.hasZ(n),e.hasM(n))}class p{constructor(e,n,t,r){this.points=e,this.spatialReference=n,this.hasZ=void 0,this.hasM=void 0,t&&(this.hasZ=t),r&&(this.hasM=r)}}function d(e,n,t){return new p(e.exportPoints(n),t,e.hasZ(n),e.hasM(n))}class h{constructor(e,n,t,r,o){this.xmin=e,this.ymin=n,this.xmax=t,this.ymax=r,this.spatialReference=o,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}function f(e,n,t){const r=e.hasZ(n),o=e.hasM(n),s=new h(e.getXMin(n),e.getYMin(n),e.getXMax(n),e.getYMax(n),t);if(r){const t=e.getZExtent(n);s.zmin=t.vmin,s.zmax=t.vmax}if(o){const t=e.getMExtent(n);s.mmin=t.vmin,s.mmax=t.vmax}return s}},857:function(e,n,t){t.d(n,{G6:function(){return R},Ie:function(){return S},J9:function(){return U},RF:function(){return T},U1:function(){return C},vY:function(){return c},ym:function(){return A}});t(57658);var r=t(8693),o=t(90421);const s=(e,n,t)=>[n,t],i=(e,n,t)=>[n,t,e[2]],u=(e,n,t)=>[n,t,e[2],e[3]];function c(e){return e?{originPosition:"upper-left"===e.originPosition?"upperLeft":"lower-left"===e.originPosition?"lowerLeft":e.originPosition,scale:e.tolerance?[e.tolerance,e.tolerance]:[1,1],translate:(0,r.pC)(e.extent)?[e.extent.xmin,e.extent.ymax]:[0,0]}:null}function a({scale:e,translate:n},t){return Math.round((t-n[0])/e[0])}function l({scale:e,translate:n},t){return Math.round((n[1]-t)/e[1])}function p(e,n,t){const r=[];let o,s,i,u;for(let c=0;c<t.length;c++){const p=t[c];c>0?(i=a(e,p[0]),u=l(e,p[1]),i===o&&u===s||(r.push(n(p,i-o,u-s)),o=i,s=u)):(o=a(e,p[0]),s=l(e,p[1]),r.push(n(p,o,s)))}return r.length>0?r:null}function d(e,n,t,r){return p(e,t?r?u:i:r?i:s,n)}function h(e,n,t,r){const o=[],c=t?r?u:i:r?i:s;for(let s=0;s<n.length;s++){const t=p(e,c,n[s]);t&&t.length>=3&&o.push(t)}return o.length?o:null}function f(e,n,t,r){const o=[],c=t?r?u:i:r?i:s;for(let s=0;s<n.length;s++){const t=p(e,c,n[s]);t&&t.length>=2&&o.push(t)}return o.length?o:null}function m({scale:e,translate:n},t){return t*e[0]+n[0]}function g({scale:e,translate:n},t){return n[1]-t*e[1]}function x(e,n,t){const r=new Array(t.length);if(!t.length)return r;const[o,s]=e.scale;let i=m(e,t[0][0]),u=g(e,t[0][1]);r[0]=n(t[0],i,u);for(let c=1;c<t.length;c++){const e=t[c];i+=e[0]*o,u-=e[1]*s,r[c]=n(e,i,u)}return r}function y(e,n,t){const r=new Array(t.length);for(let o=0;o<t.length;o++)r[o]=x(e,n,t[o]);return r}function N(e,n,t,r){return x(e,t?r?u:i:r?i:s,n)}function I(e,n,t,r){return y(e,t?r?u:i:r?i:s,n)}function M(e,n,t,r){return y(e,t?r?u:i:r?i:s,n)}function b(e,n,t,r,o){return n.xmin=a(e,t.xmin),n.ymin=l(e,t.ymin),n.xmax=a(e,t.xmax),n.ymax=l(e,t.ymax),n!==t&&(r&&(n.zmin=t.zmin,n.zmax=t.zmax),o&&(n.mmin=t.mmin,n.mmax=t.mmax)),n}function E(e,n,t,r,o){return n.points=d(e,t.points,r,o)??[],n}function T(e,n,t,r,o){return n.x=a(e,t.x),n.y=l(e,t.y),n!==t&&(r&&(n.z=t.z),o&&(n.m=t.m)),n}function F(e,n,t,r,o){const s=h(e,t.rings,r,o);return s?(n.rings=s,n):null}function v(e,n,t,r,o){const s=f(e,t.paths,r,o);return s?(n.paths=s,n):null}function A(e,n){return e&&n?(0,o.wp)(n)?T(e,{},n,!1,!1):(0,o.l9)(n)?v(e,{},n,!1,!1):(0,o.oU)(n)?F(e,{},n,!1,!1):(0,o.aW)(n)?E(e,{},n,!1,!1):(0,o.YX)(n)?b(e,{},n,!1,!1):null:null}function U(e,n,t,o,s){return(0,r.pC)(t)&&(n.points=N(e,t.points,o,s)),n}function C(e,n,t,o,s){return(0,r.Wi)(t)||(n.x=m(e,t.x),n.y=g(e,t.y),n!==t&&(o&&(n.z=t.z),s&&(n.m=t.m))),n}function S(e,n,t,o,s){return(0,r.pC)(t)&&(n.rings=M(e,t.rings,o,s)),n}function R(e,n,t,o,s){return(0,r.pC)(t)&&(n.paths=I(e,t.paths,o,s)),n}},6884:function(e,n,t){t.d(n,{Y:function(){return s}});t(57658);var r=t(8693);function o(e,n){return e?n?4:3:n?3:2}function s(e,n,t,s,c){if((0,r.Wi)(n)||!n.lengths.length)return null;const a="upperLeft"===c?.originPosition?-1:1;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);const l=e.coords,p=[],d=t?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:h,coords:f}=n,m=o(t,s);let g=0;for(const r of h){const e=i(d,f,g,r,t,s,a);e&&p.push(e),g+=r*m}if(p.sort(((e,n)=>{let r=a*e[2]-a*n[2];return 0===r&&t&&(r=e[4]-n[4]),r})),p.length){let e=6*p[0][2];l[0]=p[0][0]/e,l[1]=p[0][1]/e,t&&(e=6*p[0][4],l[2]=0!==e?p[0][3]/e:0),(l[0]<d[0]||l[0]>d[1]||l[1]<d[2]||l[1]>d[3]||t&&(l[2]<d[4]||l[2]>d[5]))&&(l.length=0)}if(!l.length){const e=n.lengths[0]?u(f,0,h[0],t,s):null;if(!e)return null;l[0]=e[0],l[1]=e[1],t&&e.length>2&&(l[2]=e[2])}return e}function i(e,n,t,r,s,i,u=1){const c=o(s,i);let a=t,l=t+c,p=0,d=0,h=0,f=0,m=0;for(let o=0,x=r-1;o<x;o++,a+=c,l+=c){const t=n[a],r=n[a+1],o=n[a+2],i=n[l],u=n[l+1],c=n[l+2];let g=t*u-i*r;f+=g,p+=(t+i)*g,d+=(r+u)*g,s&&(g=t*c-i*o,h+=(o+c)*g,m+=g),t<e[0]&&(e[0]=t),t>e[1]&&(e[1]=t),r<e[2]&&(e[2]=r),r>e[3]&&(e[3]=r),s&&(o<e[4]&&(e[4]=o),o>e[5]&&(e[5]=o))}if(f*u>0&&(f*=-1),m*u>0&&(m*=-1),!f)return null;const g=[p,d,.5*f];return s&&(g[3]=h,g[4]=.5*m),g}function u(e,n,t,r,s){const i=o(r,s);let u=n,d=n+i,h=0,f=0,m=0,g=0;for(let o=0,x=t-1;o<x;o++,u+=i,d+=i){const n=e[u],t=e[u+1],o=e[u+2],s=e[d],i=e[d+1],x=e[d+2],y=r?a(n,t,o,s,i,x):c(n,t,s,i);if(y)if(h+=y,r){const e=p(n,t,o,s,i,x);f+=y*e[0],m+=y*e[1],g+=y*e[2]}else{const e=l(n,t,s,i);f+=y*e[0],m+=y*e[1]}}return h>0?r?[f/h,m/h,g/h]:[f/h,m/h]:t>0?r?[e[n],e[n+1],e[n+2]]:[e[n],e[n+1]]:null}function c(e,n,t,r){const o=t-e,s=r-n;return Math.sqrt(o*o+s*s)}function a(e,n,t,r,o,s){const i=r-e,u=o-n,c=s-t;return Math.sqrt(i*i+u*u+c*c)}function l(e,n,t,r){return[e+.5*(t-e),n+.5*(r-n)]}function p(e,n,t,r,o,s){return[e+.5*(r-e),n+.5*(o-n),t+.5*(s-t)]}},65341:function(e,n,t){t.d(n,{_W:function(){return d},iV:function(){return m},oj:function(){return y}});t(57658);var r=t(8693),o=t(59053),s=t(5312),i=t(54597),u=t(31957);const c=[0,0];function a(e,n){if(!n)return null;if("x"in n){const t={x:0,y:0};return[t.x,t.y]=e(n.x,n.y,c),null!=n.z&&(t.z=n.z),null!=n.m&&(t.m=n.m),t}if("xmin"in n){const t={xmin:0,ymin:0,xmax:0,ymax:0};return[t.xmin,t.ymin]=e(n.xmin,n.ymin,c),[t.xmax,t.ymax]=e(n.xmax,n.ymax,c),n.hasZ&&(t.zmin=n.zmin,t.zmax=n.zmax,t.hasZ=!0),n.hasM&&(t.mmin=n.mmin,t.mmax=n.mmax,t.hasM=!0),t}return"rings"in n?{rings:l(n.rings,e),hasM:n.hasM,hasZ:n.hasZ}:"paths"in n?{paths:l(n.paths,e),hasM:n.hasM,hasZ:n.hasZ}:"points"in n?{points:p(n.points,e),hasM:n.hasM,hasZ:n.hasZ}:null}function l(e,n){const t=[];for(const r of e)t.push(p(r,n));return t}function p(e,n){const t=[];for(const r of e){const e=n(r[0],r[1],[0,0]);t.push(e),r.length>2&&e.push(r[2]),r.length>3&&e.push(r[3])}return t}async function d(e,n){if(!e||!n)return;const t=Array.isArray(e)?e.map((e=>(0,r.pC)(e.geometry)?e.geometry.spatialReference:null)).filter(r.pC):[e];await(0,o.iQ)(t.map((e=>({source:e,dest:n}))))}const h=a.bind(null,u.hG),f=a.bind(null,u.R6);function m(e,n,t,r){if(!e)return e;if(t||(t=n,n=e.spatialReference),!(0,i.JY)(n)||!(0,i.JY)(t)||(0,i.fS)(n,t))return e;if((0,u.Q8)(n,t)){const n=(0,i.sS)(t)?h(e):f(e);return n.spatialReference=t,n}return(0,o.oj)(s.N,[e],n,t,null,r)[0]}class g{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(e,n,t){if(!e||!e.length||!n||!t||(0,i.fS)(n,t))return e;const r={geometries:e,inSpatialReference:n,outSpatialReference:t,resolve:null};return this._jobs.push(r),new Promise((e=>{r.resolve=e,null===this._timer&&(this._timer=setTimeout(this._process,10))}))}_process(){this._timer=null;const e=this._jobs.shift();if(!e)return;const{geometries:n,inSpatialReference:t,outSpatialReference:r,resolve:c}=e;(0,u.Q8)(t,r)?(0,i.sS)(r)?c(n.map(h)):c(n.map(f)):c((0,o.oj)(s.N,n,t,r,null,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}const x=new g;function y(e,n,t){return x.push(e,n,t)}}}]);