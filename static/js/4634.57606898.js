"use strict";(self["webpackChunkonepic"]=self["webpackChunkonepic"]||[]).push([[4634],{49669:function(n,t,e){e.d(t,{A:function(){return D},B:function(){return T},C:function(){return b},D:function(){return A},E:function(){return L},F:function(){return I},G:function(){return V},H:function(){return j},I:function(){return k},J:function(){return C},K:function(){return H},L:function(){return O},M:function(){return _},N:function(){return q},a:function(){return c},b:function(){return s},c:function(){return o},d:function(){return f},e:function(){return u},f:function(){return a},g:function(){return B},h:function(){return l},i:function(){return h},j:function(){return d},k:function(){return N},l:function(){return v},m:function(){return M},n:function(){return y},o:function(){return g},p:function(){return w},q:function(){return P},r:function(){return m},s:function(){return x},t:function(){return p},u:function(){return R},v:function(){return Z},w:function(){return G},x:function(){return z},y:function(){return E},z:function(){return S}});var r=e(4174),i=e(5312);function u(n){return r.G.extendedSpatialReferenceInfo(n)}function o(n,t,e){return r.G.clip(i.N,n,t,e)}function c(n,t,e){return r.G.cut(i.N,n,t,e)}function s(n,t,e){return r.G.contains(i.N,n,t,e)}function f(n,t,e){return r.G.crosses(i.N,n,t,e)}function a(n,t,e,u){return r.G.distance(i.N,n,t,e,u)}function l(n,t,e){return r.G.equals(i.N,n,t,e)}function h(n,t,e){return r.G.intersects(i.N,n,t,e)}function p(n,t,e){return r.G.touches(i.N,n,t,e)}function G(n,t,e){return r.G.within(i.N,n,t,e)}function d(n,t,e){return r.G.disjoint(i.N,n,t,e)}function g(n,t,e){return r.G.overlaps(i.N,n,t,e)}function m(n,t,e,u){return r.G.relate(i.N,n,t,e,u)}function N(n,t){return r.G.isSimple(i.N,n,t)}function x(n,t){return r.G.simplify(i.N,n,t)}function v(n,t,e=!1){return r.G.convexHull(i.N,n,t,e)}function M(n,t,e){return r.G.difference(i.N,n,t,e)}function y(n,t,e){return r.G.symmetricDifference(i.N,n,t,e)}function w(n,t,e){return r.G.intersect(i.N,n,t,e)}function R(n,t,e=null){return r.G.union(i.N,n,t,e)}function P(n,t,e,u,o,c,s){return r.G.offset(i.N,n,t,e,u,o,c,s)}function Z(n,t,e,u,o=!1){return r.G.buffer(i.N,n,t,e,u,o)}function z(n,t,e,u,o,c,s){return r.G.geodesicBuffer(i.N,n,t,e,u,o,c,s)}function E(n,t,e,u=!0){return r.G.nearestCoordinate(i.N,n,t,e,u)}function S(n,t,e){return r.G.nearestVertex(i.N,n,t,e)}function D(n,t,e,u,o){return r.G.nearestVertices(i.N,n,t,e,u,o)}function T(n,t,e,i){if(null==t||null==i)throw new Error("Illegal Argument Exception");const u=r.G.rotate(t,e,i);return u.spatialReference=n,u}function b(n,t,e){if(null==t||null==e)throw new Error("Illegal Argument Exception");const i=r.G.flipHorizontal(t,e);return i.spatialReference=n,i}function A(n,t,e){if(null==t||null==e)throw new Error("Illegal Argument Exception");const i=r.G.flipVertical(t,e);return i.spatialReference=n,i}function L(n,t,e,u,o){return r.G.generalize(i.N,n,t,e,u,o)}function I(n,t,e,u){return r.G.densify(i.N,n,t,e,u)}function V(n,t,e,u,o=0){return r.G.geodesicDensify(i.N,n,t,e,u,o)}function j(n,t,e){return r.G.planarArea(i.N,n,t,e)}function k(n,t,e){return r.G.planarLength(i.N,n,t,e)}function C(n,t,e,u){return r.G.geodesicArea(i.N,n,t,e,u)}function H(n,t,e,u){return r.G.geodesicLength(i.N,n,t,e,u)}function O(n,t,e){return null==t||null==e?[]:r.G.intersectLinesToPoints(i.N,n,t,e)}function _(n,t){r.G.changeDefaultSpatialReferenceTolerance(n,t)}function q(n){r.G.clearDefaultSpatialReferenceTolerance(n)}const B=Object.freeze(Object.defineProperty({__proto__:null,buffer:Z,changeDefaultSpatialReferenceTolerance:_,clearDefaultSpatialReferenceTolerance:q,clip:o,contains:s,convexHull:v,crosses:f,cut:c,densify:I,difference:M,disjoint:d,distance:a,equals:l,extendedSpatialReferenceInfo:u,flipHorizontal:b,flipVertical:A,generalize:L,geodesicArea:C,geodesicBuffer:z,geodesicDensify:V,geodesicLength:H,intersect:w,intersectLinesToPoints:O,intersects:h,isSimple:N,nearestCoordinate:E,nearestVertex:S,nearestVertices:D,offset:P,overlaps:g,planarArea:j,planarLength:k,relate:m,rotate:T,simplify:x,symmetricDifference:y,touches:p,union:R,within:G},Symbol.toStringTag,{value:"Module"}))},5312:function(n,t,e){e.d(t,{N:function(){return r}});const r={convertToGEGeometry:i,exportPoint:o,exportPolygon:s,exportPolyline:a,exportMultipoint:h,exportExtent:G};function i(n,t){return null==t?null:n.convertJSONToGeometry(t)}class u{constructor(n,t,e){this.x=n,this.y=t,this.spatialReference=e,this.z=void 0,this.m=void 0}}function o(n,t,e){const r=new u(n.getPointX(t),n.getPointY(t),e),i=n.hasZ(t),o=n.hasM(t);return i&&(r.z=n.getPointZ(t)),o&&(r.m=n.getPointM(t)),r}class c{constructor(n,t,e,r){this.rings=n,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,e&&(this.hasZ=e),r&&(this.hasM=r)}}function s(n,t,e){return new c(n.exportPaths(t),e,n.hasZ(t),n.hasM(t))}class f{constructor(n,t,e,r){this.paths=n,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,e&&(this.hasZ=e),r&&(this.hasM=r)}}function a(n,t,e){return new f(n.exportPaths(t),e,n.hasZ(t),n.hasM(t))}class l{constructor(n,t,e,r){this.points=n,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,e&&(this.hasZ=e),r&&(this.hasM=r)}}function h(n,t,e){return new l(n.exportPoints(t),e,n.hasZ(t),n.hasM(t))}class p{constructor(n,t,e,r,i){this.xmin=n,this.ymin=t,this.xmax=e,this.ymax=r,this.spatialReference=i,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}function G(n,t,e){const r=n.hasZ(t),i=n.hasM(t),u=new p(n.getXMin(t),n.getYMin(t),n.getXMax(t),n.getYMax(t),e);if(r){const e=n.getZExtent(t);u.zmin=e.vmin,u.zmax=e.vmax}if(i){const e=n.getMExtent(t);u.mmin=e.vmin,u.mmax=e.vmax}return u}},74634:function(n,t,e){e.r(t),e.d(t,{executeGEOperation:function(){return i}});var r=e(49669);function i(n){return(0,r.g[n.operation])(...n.parameters)}}}]);