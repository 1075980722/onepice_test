"use strict";(self["webpackChunkonepic"]=self["webpackChunkonepic"]||[]).push([[348],{33920:function(e,t,r){r.d(t,{e:function(){return a}});r(57658);var n,i,s,a={},o={get exports(){return a},set exports(e){a=e}};n=o,i=function(){function e(e,r,i){i=i||2;var s,a,o,u,c,h,v,f=r&&r.length,y=f?r[0]*i:e.length,p=t(e,0,y,i,!0),d=[];if(!p||p.next===p.prev)return d;if(f&&(p=l(e,r,p,i)),e.length>80*i){s=o=e[0],a=u=e[1];for(var m=i;m<y;m+=i)(c=e[m])<s&&(s=c),(h=e[m+1])<a&&(a=h),c>o&&(o=c),h>u&&(u=h);v=0!==(v=Math.max(o-s,u-a))?1/v:0}return n(p,d,i,s,a,v),d}function t(e,t,r,n,i){var s,a;if(i===R(e,t,r,n)>0)for(s=t;s<r;s+=n)a=E(s,e[s],e[s+1],a);else for(s=r-n;s>=t;s-=n)a=E(s,e[s],e[s+1],a);if(a&&b(a,a.next)){var o=a.next;I(a),a=o}return a}function r(e,t){if(!e)return e;t||(t=e);var r,n=e;do{if(r=!1,n.steiner||!b(n,n.next)&&0!==S(n.prev,n,n.next))n=n.next;else{var i=n.prev;if(I(n),(n=t=i)===n.next)break;r=!0}}while(r||n!==t);return t}function n(e,t,l,u,c,h,v){if(e){!v&&h&&y(e,u,c,h);for(var f,p,d=e;e.prev!==e.next;)if(f=e.prev,p=e.next,h?s(e,u,c,h):i(e))t.push(f.i/l),t.push(e.i/l),t.push(p.i/l),I(e),e=p.next,d=p.next;else if((e=p)===d){v?1===v?n(e=a(r(e),t,l),t,l,u,c,h,2):2===v&&o(e,t,l,u,c,h):n(r(e),t,l,u,c,h,1);break}}}function i(e){var t=e.prev,r=e,n=e.next;if(S(t,r,n)>=0)return!1;for(var i=e.next.next;i!==e.prev;){if(x(t.x,t.y,r.x,r.y,n.x,n.y,i.x,i.y)&&S(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function s(e,t,r,n){var i=e.prev,s=e,a=e.next;if(S(i,s,a)>=0)return!1;for(var o=i.x<s.x?i.x<a.x?i.x:a.x:s.x<a.x?s.x:a.x,l=i.y<s.y?i.y<a.y?i.y:a.y:s.y<a.y?s.y:a.y,u=i.x>s.x?i.x>a.x?i.x:a.x:s.x>a.x?s.x:a.x,c=i.y>s.y?i.y>a.y?i.y:a.y:s.y>a.y?s.y:a.y,h=d(o,l,t,r,n),v=d(u,c,t,r,n),f=e.prevZ,y=e.nextZ;f&&f.z>=h&&y&&y.z<=v;){if(f!==e.prev&&f!==e.next&&x(i.x,i.y,s.x,s.y,a.x,a.y,f.x,f.y)&&S(f.prev,f,f.next)>=0)return!1;if(f=f.prevZ,y!==e.prev&&y!==e.next&&x(i.x,i.y,s.x,s.y,a.x,a.y,y.x,y.y)&&S(y.prev,y,y.next)>=0)return!1;y=y.nextZ}for(;f&&f.z>=h;){if(f!==e.prev&&f!==e.next&&x(i.x,i.y,s.x,s.y,a.x,a.y,f.x,f.y)&&S(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;y&&y.z<=v;){if(y!==e.prev&&y!==e.next&&x(i.x,i.y,s.x,s.y,a.x,a.y,y.x,y.y)&&S(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function a(e,t,n){var i=e;do{var s=i.prev,a=i.next.next;!b(s,a)&&_(s,i,i.next,a)&&w(s,a)&&w(a,s)&&(t.push(s.i/n),t.push(i.i/n),t.push(a.i/n),I(i),I(i.next),i=e=a),i=i.next}while(i!==e);return r(i)}function o(e,t,i,s,a,o){var l=e;do{for(var u=l.next.next;u!==l.prev;){if(l.i!==u.i&&g(l,u)){var c=z(l,u);return l=r(l,l.next),c=r(c,c.next),n(l,t,i,s,a,o),void n(c,t,i,s,a,o)}u=u.next}l=l.next}while(l!==e)}function l(e,n,i,s){var a,o,l,c=[];for(a=0,o=n.length;a<o;a++)(l=t(e,n[a]*s,a<o-1?n[a+1]*s:e.length,s,!1))===l.next&&(l.steiner=!0),c.push(m(l));for(c.sort(u),a=0;a<c.length;a++)i=r(i=h(c[a],i),i.next);return i}function u(e,t){return e.x-t.x}function c(e){if(e.next.prev===e)return e;let t=e;for(;;){const r=t.next;if(r.prev===t||r===t||r===e)break;t=r}return t}function h(e,t){var n=v(e,t);if(!n)return t;var i=z(n,e),s=r(n,n.next);let a=c(i);return r(a,a.next),s=c(s),c(t===n?s:t)}function v(e,t){var r,n=t,i=e.x,s=e.y,a=-1/0;do{if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){var o=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(o<=i&&o>a){if(a=o,o===i){if(s===n.y)return n;if(s===n.next.y)return n.next}r=n.x<n.next.x?n:n.next}}n=n.next}while(n!==t);if(!r)return null;if(i===a)return r;var l,u=r,c=r.x,h=r.y,v=1/0;n=r;do{i>=n.x&&n.x>=c&&i!==n.x&&x(s<h?i:a,s,c,h,s<h?a:i,s,n.x,n.y)&&(l=Math.abs(s-n.y)/(i-n.x),w(n,e)&&(l<v||l===v&&(n.x>r.x||n.x===r.x&&f(r,n)))&&(r=n,v=l)),n=n.next}while(n!==u);return r}function f(e,t){return S(e.prev,e,t.prev)<0&&S(t.next,e,e.next)<0}function y(e,t,r,n){var i=e;do{null===i.z&&(i.z=d(i.x,i.y,t,r,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next}while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,p(i)}function p(e){var t,r,n,i,s,a,o,l,u=1;do{for(r=e,e=null,s=null,a=0;r;){for(a++,n=r,o=0,t=0;t<u&&(o++,n=n.nextZ);t++);for(l=u;o>0||l>0&&n;)0!==o&&(0===l||!n||r.z<=n.z)?(i=r,r=r.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:e=i,i.prevZ=s,s=i;r=n}s.nextZ=null,u*=2}while(a>1);return e}function d(e,t,r,n,i){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-r)*i)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-n)*i)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function m(e){var t=e,r=e;do{(t.x<r.x||t.x===r.x&&t.y<r.y)&&(r=t),t=t.next}while(t!==e);return r}function x(e,t,r,n,i,s,a,o){return(i-a)*(t-o)-(e-a)*(s-o)>=0&&(e-a)*(n-o)-(r-a)*(t-o)>=0&&(r-a)*(s-o)-(i-a)*(n-o)>=0}function g(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!V(e,t)&&(w(e,t)&&w(t,e)&&M(e,t)&&(S(e.prev,e,t.prev)||S(e,t.prev,t))||b(e,t)&&S(e.prev,e,e.next)>0&&S(t.prev,t,t.next)>0)}function S(e,t,r){return(t.y-e.y)*(r.x-t.x)-(t.x-e.x)*(r.y-t.y)}function b(e,t){return e.x===t.x&&e.y===t.y}function _(e,t,r,n){var i=T(S(e,t,r)),s=T(S(e,t,n)),a=T(S(r,n,e)),o=T(S(r,n,t));return i!==s&&a!==o||!(0!==i||!L(e,r,t))||!(0!==s||!L(e,n,t))||!(0!==a||!L(r,e,n))||!(0!==o||!L(r,t,n))}function L(e,t,r){return t.x<=Math.max(e.x,r.x)&&t.x>=Math.min(e.x,r.x)&&t.y<=Math.max(e.y,r.y)&&t.y>=Math.min(e.y,r.y)}function T(e){return e>0?1:e<0?-1:0}function V(e,t){var r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==t.i&&r.next.i!==t.i&&_(r,r.next,e,t))return!0;r=r.next}while(r!==e);return!1}function w(e,t){return S(e.prev,e,e.next)<0?S(e,t,e.next)>=0&&S(e,e.prev,t)>=0:S(e,t,e.prev)<0||S(e,e.next,t)<0}function M(e,t){var r=e,n=!1,i=(e.x+t.x)/2,s=(e.y+t.y)/2;do{r.y>s!=r.next.y>s&&r.next.y!==r.y&&i<(r.next.x-r.x)*(s-r.y)/(r.next.y-r.y)+r.x&&(n=!n),r=r.next}while(r!==e);return n}function z(e,t){var r=new C(e.i,e.x,e.y),n=new C(t.i,t.x,t.y),i=e.next,s=t.prev;return e.next=t,t.prev=e,r.next=i,i.prev=r,n.next=r,r.prev=n,s.next=n,n.prev=s,n}function E(e,t,r,n){var i=new C(e,t,r);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function I(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function C(e,t,r){this.i=e,this.x=t,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function R(e,t,r,n){for(var i=0,s=t,a=r-n;s<r;s+=n)i+=(e[a]-e[s])*(e[s+1]+e[a+1]),a=s;return i}return e.deviation=function(e,t,r,n){var i=t&&t.length,s=i?t[0]*r:e.length,a=Math.abs(R(e,0,s,r));if(i)for(var o=0,l=t.length;o<l;o++){var u=t[o]*r,c=o<l-1?t[o+1]*r:e.length;a-=Math.abs(R(e,u,c,r))}var h=0;for(o=0;o<n.length;o+=3){var v=n[o]*r,f=n[o+1]*r,y=n[o+2]*r;h+=Math.abs((e[v]-e[y])*(e[f+1]-e[v+1])-(e[v]-e[f])*(e[y+1]-e[v+1]))}return 0===a&&0===h?0:Math.abs((h-a)/a)},e.flatten=function(e){for(var t=e[0][0].length,r={vertices:[],holes:[],dimensions:t},n=0,i=0;i<e.length;i++){for(var s=0;s<e[i].length;s++)for(var a=0;a<t;a++)r.vertices.push(e[i][s][a]);i>0&&(n+=e[i-1].length,r.holes.push(n))}return r},e},void 0!==(s=i())&&(n.exports=s)},72558:function(e,t,r){r.d(t,{k3:function(){return o},s5:function(){return a}});Math.PI;const n=256/360,i=1/Math.LN2;function s(e,t){return(e%=t)>=0?e:e+t}function a(e){return s(e*n,256)}function o(e){return Math.log(e)*i}},17962:function(e,t,r){var n,i;function s(e){switch(e){case"left":return n.Left;case"right":return n.Right;case"center":return n.Center}}function a(e){switch(e){case"top":return i.Top;case"middle":return i.Center;case"baseline":return i.Baseline;case"bottom":return i.Bottom}}function o(e){switch(e){case"above-left":case"esriServerPointLabelPlacementAboveLeft":return[n.Right,i.Bottom];case"above-center":case"above-along":case"esriServerPointLabelPlacementAboveCenter":case"esriServerLinePlacementAboveAlong":return[n.Center,i.Bottom];case"above-right":case"esriServerPointLabelPlacementAboveRight":return[n.Left,i.Bottom];case"center-left":case"esriServerPointLabelPlacementCenterLeft":return[n.Right,i.Center];case"center-center":case"center-along":case"esriServerPointLabelPlacementCenterCenter":case"esriServerLinePlacementCenterAlong":case"always-horizontal":case"esriServerPolygonPlacementAlwaysHorizontal":return[n.Center,i.Center];case"center-right":case"esriServerPointLabelPlacementCenterRight":return[n.Left,i.Center];case"below-left":case"esriServerPointLabelPlacementBelowLeft":return[n.Right,i.Top];case"below-center":case"below-along":case"esriServerPointLabelPlacementBelowCenter":case"esriServerLinePlacementBelowAlong":return[n.Center,i.Top];case"below-right":case"esriServerPointLabelPlacementBelowRight":return[n.Left,i.Top];default:return console.debug(`Found invalid placement type ${e}`),[n.Center,i.Center]}}function l(e){switch(e){case n.Right:return-1;case n.Center:return 0;case n.Left:return 1;default:return console.debug(`Found invalid horizontal alignment ${e}`),0}}function u(e){switch(e){case i.Top:return 1;case i.Center:return 0;case i.Bottom:case i.Baseline:return-1;default:return console.debug(`Found invalid vertical alignment ${e}`),0}}function c(e){switch(e){case"left":return n.Left;case"right":return n.Right;case"center":return n.Center}}function h(e){switch(e){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return!0;default:return!1}}r.d(t,{Hd:function(){return c},M7:function(){return n},NS:function(){return h},TR:function(){return i},b7:function(){return a},g:function(){return l},kH:function(){return s},qv:function(){return o},tf:function(){return u}}),function(e){e[e.Left=-1]="Left",e[e.Center=0]="Center",e[e.Right=1]="Right"}(n||(n={})),function(e){e[e.Top=1]="Top",e[e.Center=0]="Center",e[e.Bottom=-1]="Bottom",e[e.Baseline=2]="Baseline"}(i||(i={}))},62055:function(e,t,r){r.d(t,{CA:function(){return z},Gq:function(){return Z},Xp:function(){return M},a:function(){return k},dk:function(){return P},hF:function(){return I},jj:function(){return E},jy:function(){return w},m2:function(){return C},mE:function(){return B},qr:function(){return D}});var n=r(22130),i=r(17962),s=r(34150);function a(e,t,r){const n=s.X.SIZE_FIELD_STOPS|s.X.SIZE_MINMAX_VALUE|s.X.SIZE_SCALE_STOPS|s.X.SIZE_UNIT_VALUE,i=(t&(s.mf.FIELD_TARGETS_OUTLINE|s.mf.MINMAX_TARGETS_OUTLINE|s.mf.SCALE_TARGETS_OUTLINE|s.mf.UNIT_TARGETS_OUTLINE))>>>4;return e===s.LW.LINE&&r.isOutline||e===s.LW.FILL&&w(r.symbologyType)?n&i:n&~i}const o=0,l=8,u=7,c=8,h=11,v=11,f=12,y=13,p=14,d=15,m=16,x=17,g=18,S=19,b=20,_=21,L=26,T=Object.keys(s.mD).filter((e=>"number"==typeof s.mD[e])).reduce(((e,t)=>({...e,[t]:s.mD[t]})),{});function V(e){return e===s.mD.SIMPLE||e===s.mD.OUTLINE_FILL_SIMPLE}function w(e){return e===s.mD.OUTLINE_FILL||e===s.mD.OUTLINE_FILL_SIMPLE}function M(e){return V(e.symbologyType)}function z(e){return w(e.symbologyType)}function E(e,t){switch(e){case s.LW.FILL:return P.from(t);case s.LW.LINE:return k.from(t);case s.LW.MARKER:return B.from(t);case s.LW.TEXT:return D.from(t);case s.LW.LABEL:return Z.from(t);default:throw new Error(`Unable to createMaterialKey for unknown geometryType ${e}`)}}function I(e){switch(C.load(e).geometryType){case s.LW.MARKER:return new B(e);case s.LW.FILL:return new P(e);case s.LW.LINE:return new k(e);case s.LW.TEXT:return new D(e);case s.LW.LABEL:return new Z(e)}}class C{static load(e){const t=this.shared;return t.data=e,t}constructor(e){this._data=0,this._data=e}set data(e){this._data=e??0}get data(){return this._data}get geometryType(){return this.bits(c,h)}set geometryType(e){this.setBits(e,c,h)}get mapAligned(){return!!this.bit(b)}set mapAligned(e){this.setBit(b,e)}get sdf(){return!!this.bit(v)}set sdf(e){this.setBit(v,e??!1)}get pattern(){return!!this.bit(f)}set pattern(e){this.setBit(f,e)}get textureBinding(){return this.bits(o,l)}set textureBinding(e){this.setBits(e,o,l)}get symbologyType(){return this.bits(_,L)}set symbologyType(e){this.setBits(e,_,L)}get geometryTypeString(){switch(this.geometryType){case s.LW.FILL:return"fill";case s.LW.MARKER:return"marker";case s.LW.LINE:return"line";case s.LW.TEXT:return"text";case s.LW.LABEL:return"label";default:throw new n.Z(`Unable to handle unknown geometryType: ${this.geometryType}`)}}setBit(e,t){const r=1<<e;t?this._data|=r:this._data&=~r}bit(e){return(this._data&1<<e)>>e}setBits(e,t,r){for(let n=t,i=0;n<r;n++,i++)this.setBit(n,0!=(e&1<<i))}bits(e,t){let r=0;for(let n=e,i=0;n<t;n++,i++)r|=this.bit(n)<<i;return r}hasVV(){return!1}setVV(e,t){}getVariation(){return{mapAligned:this.mapAligned,pattern:this.pattern,sdf:this.sdf,symbologyType:{value:s.mD[this.symbologyType],options:T,namespace:"SYMBOLOGY_TYPE"}}}getVariationHash(){return this._data&~(u&this.textureBinding)}}C.shared=new C(0);const R=e=>class extends e{get vvSizeMinMaxValue(){return 0!==this.bit(m)}set vvSizeMinMaxValue(e){this.setBit(m,e)}get vvSizeScaleStops(){return 0!==this.bit(x)}set vvSizeScaleStops(e){this.setBit(x,e)}get vvSizeFieldStops(){return 0!==this.bit(g)}set vvSizeFieldStops(e){this.setBit(g,e)}get vvSizeUnitValue(){return 0!==this.bit(S)}set vvSizeUnitValue(e){this.setBit(S,e)}hasVV(){return super.hasVV()||this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue}setVV(e,t){super.setVV(e,t);const r=a(this.geometryType,e,t)&e;this.vvSizeMinMaxValue=!!(r&s.X.SIZE_MINMAX_VALUE),this.vvSizeFieldStops=!!(r&s.X.SIZE_FIELD_STOPS),this.vvSizeUnitValue=!!(r&s.X.SIZE_UNIT_VALUE),this.vvSizeScaleStops=!!(r&s.X.SIZE_SCALE_STOPS)}},A=e=>class extends e{get vvRotation(){return 0!==this.bit(d)}set vvRotation(e){this.setBit(d,e)}hasVV(){return super.hasVV()||this.vvRotation}setVV(e,t){super.setVV(e,t),this.vvRotation=!t.isOutline&&!!(e&s.X.ROTATION)}},F=e=>class extends e{get vvColor(){return 0!==this.bit(y)}set vvColor(e){this.setBit(y,e)}hasVV(){return super.hasVV()||this.vvColor}setVV(e,t){super.setVV(e,t),this.vvColor=!t.isOutline&&!!(e&s.X.COLOR)}},O=e=>class extends e{get vvOpacity(){return 0!==this.bit(p)}set vvOpacity(e){this.setBit(p,e)}hasVV(){return super.hasVV()||this.vvOpacity}setVV(e,t){super.setVV(e,t),this.vvOpacity=!t.isOutline&&!!(e&s.X.OPACITY)}};class P extends(F(O(R(C)))){static load(e){const t=this.shared;return t.data=e,t}static from(e){const{symbologyType:t,vvFlags:r}=e,n=this.load(0);return n.geometryType=s.LW.FILL,n.symbologyType=t,t!==s.mD.DOT_DENSITY&&n.setVV(r,e),n.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}P.shared=new P(0);class B extends(F(O(A(R(C))))){static load(e){const t=this.shared;return t.data=e,t}static from(e){const{symbologyType:t,vvFlags:r}=e,n=this.load(0);return n.geometryType=s.LW.MARKER,n.symbologyType=t,t!==s.mD.HEATMAP&&n.setVV(r,e),n.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvRotation:this.vvRotation,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}B.shared=new B(0);class k extends(F(O(R(C)))){static load(e){const t=this.shared;return t.data=e,t}static from(e){const t=this.load(0);return t.geometryType=s.LW.LINE,t.symbologyType=e.symbologyType,t.setVV(e.vvFlags,e),t.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}k.shared=new k(0);class D extends(F(O(A(R(C))))){static load(e){const t=this.shared;return t.data=e,t}static from(e){const t=this.load(0);return t.geometryType=s.LW.TEXT,t.symbologyType=e.symbologyType,t.setVV(e.vvFlags,e),t.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvRotation:this.vvRotation,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}D.shared=new D(0);class Z extends(R(C)){static load(e){const t=this.shared;return t.data=e,t}static from(e){const t=this.load(0);return t.geometryType=s.LW.LABEL,t.symbologyType=e.symbologyType,t.setVV(e.vvFlags,e),t.mapAligned=(0,i.NS)(e.placement),t.data}getVariation(){return{...super.getVariation(),vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}Z.shared=new Z(0)},80587:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(61445),i=r(30374),s=r(58006),a=(r(94315),r(15055),r(77623));let o=class extends i.r{initialize(){}destroy(){}get supportsTileUpdates(){return!1}get spatialReference(){const e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}};(0,n._)([(0,s.Cb)({readOnly:!0})],o.prototype,"supportsTileUpdates",null),(0,n._)([(0,s.Cb)({constructOnly:!0})],o.prototype,"remoteClient",void 0),(0,n._)([(0,s.Cb)({constructOnly:!0})],o.prototype,"service",void 0),(0,n._)([(0,s.Cb)()],o.prototype,"spatialReference",null),(0,n._)([(0,s.Cb)({constructOnly:!0})],o.prototype,"tileInfo",void 0),(0,n._)([(0,s.Cb)({constructOnly:!0})],o.prototype,"tileStore",void 0),o=(0,n._)([(0,a.j)("esri.views.2d.layers.features.processors.BaseProcessor")],o);const l=o},3857:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});r(57658);var n=r(61445),i=r(34658),s=(r(22130),r(81653),r(93622),r(8693)),a=r(92454),o=(r(94315),r(15055),r(77623)),l=r(67154),u=r(87429),c=r(605),h=r(34150),v=r(6898),f=r(63865),y=r(48273),p=r(83210),d=r(1626),m=r(80587);class x{constructor(e){this._remoteClient=e,this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null,this.geometryEnginePromise=null}destroy(){}async fetchResource(e,t){const r=this._resourceMap,n=r.get(e);if(n)return n;let i=this._inFlightResourceMap.get(e);if(i)return i;try{i=this._remoteClient.invoke("tileRenderer.fetchResource",{url:e},{...t}),this._inFlightResourceMap.set(e,i),i.then((t=>(this._inFlightResourceMap.delete(e),r.set(e,t),t)))}catch(s){return(0,a.D_)(s)?null:{width:0,height:0}}return i}getResource(e){return this._resourceMap.get(e)??null}}function g(e,t){return(!e.minScale||e.minScale>=t)&&(!e.maxScale||e.maxScale<=t)}function S(e){const t=e.message,r={message:{data:{},tileKey:t.tileKey,tileKeyOrigin:t.tileKeyOrigin,version:t.version},transferList:new Array};for(const n in t.data){const e=t.data[n];if(r.message.data[n]=null,(0,s.pC)(e)){const t=e.stride,i=e.indices.slice(0),a=e.vertices.slice(0),o=e.records.slice(0),l={stride:t,indices:i,vertices:a,records:o,metrics:(0,s.yw)(e.metrics,(e=>e.slice(0)))};r.transferList.push(i,a,o),r.message.data[n]=l}}return r}let b=class extends m.Z{constructor(){super(...arguments),this.type="symbol",this._matchers={feature:null,aggregate:null},this._bufferData=new Map,this._bufferIds=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))]),this._resourceManagerProxy=new x(this.remoteClient)}destroy(){this._resourceManagerProxy.destroy()}get supportsTileUpdates(){return!0}forEachBufferId(e){this._bufferIds.forEach((t=>{t.forEach(e)}))}async update(e,t){const r=t.schema.processors[0];if("symbol"!==r.type)return;const n=(0,l.Hg)(this._schema,r);((0,l.uD)(n,"mesh")||(0,l.uD)(n,"target"))&&(e.mesh=!0,e.why?.mesh.push("Symbology changed"),this._schema=r,this._factory=this._createFactory(r),this._factory.update(r,this.tileStore.tileScheme.tileInfo))}onTileMessage(e,t,r,n){return(0,a.k_)(n),this._onTileData(e,t,r,n)}onTileClear(e){const t={clear:!0};return this._bufferData.delete(e.key.id),this._bufferIds.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t})}onTileError(e,t,r){const n=r.signal,i={tileKey:e.id,error:t};return this.remoteClient.invoke("tileRenderer.onTileError",i,{signal:n})}onTileUpdate(e){for(const t of e.removed)this._bufferData.has(t.key.id)&&this._bufferData.delete(t.key.id),this._bufferIds.has(t.key.id)&&this._bufferIds.delete(t.key.id);for(const t of e.added)this._bufferData.forEach((e=>{for(const r of e)r.message.tileKey===t.id&&this._updateTileMesh("append",t,S(r),[],!1,!1,null)}))}_addBufferData(e,t){this._bufferData.has(e)||this._bufferData.set(e,[]),this._bufferData.get(e)?.push(S(t))}_createFactory(e){const{geometryType:t,objectIdField:r,fields:n}=this.service,i=(e,t)=>this.remoteClient.invoke("tileRenderer.getMaterialItems",e,t),a={geometryType:t,fields:n,spatialReference:u.Z.fromJSON(this.spatialReference)},o=new y.Wr(i,this.tileStore.tileScheme.tileInfo),{matcher:l,aggregateMatcher:c}=e.mesh;return this._store=o,this._matchers.feature=(0,p.fL)(l,o,a,this._resourceManagerProxy),this._matchers.aggregate=(0,s.yw)(c,(e=>(0,p.fL)(e,o,a,this._resourceManagerProxy))),new f.j(t,r,o)}async _onTileData(e,t,r,n){(0,a.k_)(n);const{type:i,addOrUpdate:o,remove:l,clear:u,end:c}=t,h=!!this._schema.mesh.sortKey;if(!o){const t={type:i,addOrUpdate:null,remove:l,clear:u,end:c,sort:h};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},n)}const v=this._processFeatures(e,o,r,n,t.status?.version);try{const r=await v;if((0,s.Wi)(r)){const t={type:i,addOrUpdate:null,remove:l,clear:u,end:c,sort:h};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},n)}const a=[];for(const t of r){let r=!1;const n=t.message.bufferIds,i=e.key.id,o=t.message.tileKey;if(i!==o&&(0,s.pC)(n)){if(!this.tileStore.get(o)){this._addBufferData(i,t),a.push(t);continue}let e=this._bufferIds.get(o);e||(e=new Set,this._bufferIds.set(o,e));const s=Array.from(n);for(const t of s){if(e.has(t)){r=!0;break}e.add(t)}}r||(this._addBufferData(i,t),a.push(t))}await Promise.all(a.map((r=>{const s=e.key.id===r.message.tileKey,a=s?t.remove:[],o=s&&t.end;return this._updateTileMesh(i,e,r,a,o,!!t.clear,n.signal)})))}catch(f){this._handleError(e,f,n)}}async _updateTileMesh(e,t,r,n,i,o,l){const u=e,c=r.message.tileKey,h=!!this._schema.mesh.sortKey;c!==t.key.id&&(i=!1);const v=(0,s.yw)(r,(e=>e.message)),f=(0,s.yw)(r,(e=>e.transferList))||[],y={type:u,addOrUpdate:v,remove:n,clear:o,end:i,sort:h},p={transferList:(0,s.Wg)(f)||[],signal:l};return(0,a.k_)(p),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:c,data:y},p)}async _processFeatures(e,t,r,n,i){if((0,s.Wi)(t)||!t.hasFeatures)return null;const o={transform:e.transform,hasZ:!1,hasM:!1},l=this._factory,u={viewingMode:"",scale:e.scale},c=await this._matchers.feature,h=await this._matchers.aggregate;(0,a.k_)(n);const v=this._getLabelInfos(e,t);return await l.analyze(t.getCursor(),this._resourceManagerProxy,c,h,o,u),(0,a.k_)(n),this._writeFeatureSet(e,t,o,v,l,r,i)}_writeFeatureSet(e,t,r,n,i,a,o){const l=t.getSize(),u=this._schema.mesh.matcher.symbologyType,c=new v._(e.key.id,{features:l,records:l,metrics:0},u,a,u!==h.mD.HEATMAP,o),f={viewingMode:"",scale:e.scale},y=t.getCursor();for(;y.next();)try{const t=y.getDisplayId(),a=(0,s.pC)(n)?n.get(t):null;i.writeCursor(c,y,r,f,e.level,a,this._resourceManagerProxy)}catch(d){}const p=e.tileInfoView.tileInfo.isWrappable;return c.serialize(p)}_handleError(e,t,r){if(!(0,a.D_)(t)){const n={tileKey:e.id,error:t.message};return this.remoteClient.invoke("tileRenderer.onTileError",n,{signal:r.signal})}return Promise.resolve()}_getLabelingSchemaForScale(e){const t=this._schema.mesh.labels;if((0,s.Wi)(t))return null;if("subtype"===t.type){const r={type:"subtype",classes:{}};let n=!1;for(const i in t.classes){const s=t.classes[i].filter((t=>g(t,e.scale)));n=n||!!s.length,r.classes[i]=s}return n?r:null}const r=t.classes.filter((t=>g(t,e.scale)));return r.length?{type:"simple",classes:r}:null}_getLabels(e,t){if("subtype"===t.type){const r=this.service.subtypeField,n=(0,s.s3)(r,"Expected to find subtype Field"),i=e.readAttribute(n);return null==i?[]:t.classes[i]??[]}return t.classes}_getLabelInfos(e,t){const r=this._getLabelingSchemaForScale(e);if((0,s.Wi)(r))return null;const n=new Map,a=t.getCursor();for(;a.next();){const e=a.getDisplayId(),t=[],s=(0,c.nE)(e),o=s&&1!==a.readAttribute("cluster_count")?"aggregate":"feature",l=this._getLabels(a,r);for(const r of l){if(r.target!==o)continue;const n=a.getStorage(),l=s&&"feature"===o?n.getComputedStringAtIndex(a.readAttribute("referenceId"),r.fieldIndex):n.getComputedStringAtIndex(e,r.fieldIndex);if(!l)continue;const u=(0,i.E)(l.toString()),c=u[0],h=u[1];this._store.getMosaicItem(r.symbol,(0,d._)(c)).then((e=>{t[r.index]={glyphs:e.glyphMosaicItems??[],rtl:h,index:r.index}}))}n.set(e,t)}return n}};b=(0,n._)([(0,o.j)("esri.views.2d.layers.features.processors.SymbolProcessor")],b);const _=b},76329:function(e,t,r){r.d(t,{x:function(){return _},B:function(){return b}});var n=r(1770),i=r(34150),s=r(62055);const a={marker:i.LW.MARKER,fill:i.LW.FILL,line:i.LW.LINE,text:i.LW.TEXT};class o{constructor(e,t,r,n){const o={minScale:t?.minScale,maxScale:t?.maxScale},u=l(o);this.layers=e,this.data=t,this.hash=this._createHash()+u,this.rendererKey=r;const c={isOutline:!1,placement:null,symbologyType:i.mD.DEFAULT,vvFlags:r};for(const i of e){const e=a[i.type];c.isOutline="line"===i.type&&i.isOutline,i.materialKey=(0,s.jj)(e,c),i.maxVVSize=n,i.scaleInfo=o,i.templateHash+=u}}get type(){return"expanded-cim"}_createHash(){let e="";for(const t of this.layers)e+=t.templateHash;return e}}function l(e){return e.minScale||e.maxScale?e.minScale+"-"+e.maxScale:""}var u=r(98203),c=r(22130),h=r(8693),v=r(92454),f=r(99659),y=r(53262),p=r(36067),d=r(28995);async function m(e,t,r){if(!e.name)throw new c.Z("style-symbol-reference-name-missing","Missing name in style symbol reference");if(e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName)return x(e,r);try{return g(await(0,d.n2)(e,t,r),e.name,t,r)}catch(a){return(0,v.k_)(a),null}}async function x(e,t){const r=d.wm.replace(/\{SymbolName\}/gi,e.name);try{const e=await(0,d.EJ)(r,t);return(0,d.KV)(e.data)}catch(n){return(0,v.k_)(n),null}}async function g(e,t,r,n){const i=e.data,s={portal:r&&(0,h.pC)(r.portal)?r.portal:y.Z.getDefault(),url:(0,f.mN)(e.baseUrl),origin:"portal-item"},a=i.items.find((e=>e.name===t));if(!a)throw new c.Z("symbolstyleutils:symbol-name-not-found",`The symbol name '${t}' could not be found`,{symbolName:t});let o=(0,p.f)((0,d.v9)(a,"cimRef"),s);(0,u.XO)()&&(o=(0,u.pJ)(o));try{const e=await(0,d.EJ)(o,n);return(0,d.KV)(e.data)}catch(l){return(0,v.k_)(l),null}}const S=async(e,t,r)=>new o(await(0,n.c)(e.data,t,r),e.data,e.rendererKey,e.maxVVSize);async function b(e,t,r,n){if(!e)return null;if("cim"===e.type)return S(e,t,r);if("web-style"===e.type){const i={type:"cim",data:await m(e,null,n)??void 0,rendererKey:e.rendererKey,maxVVSize:e.maxVVSize};return S(i,t,r)}return e}function _(e){if(!e)return null;const{avoidSDFRasterization:t,type:r,cim:n,url:i,materialHash:s}=e,a={cim:n,type:r,mosaicHash:s,url:i,size:null,dashTemplate:null,path:null,text:null,fontName:null,animatedSymbolProperties:null,avoidSDFRasterization:t};switch(r){case"marker":a.size=e.size,a.path=e.path,a.animatedSymbolProperties=e.animatedSymbolProperties;break;case"line":a.dashTemplate=e.dashTemplate;break;case"text":a.text=e.text,a.fontName=e.fontName}return a}}}]);