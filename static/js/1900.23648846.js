"use strict";(self["webpackChunkonepic"]=self["webpackChunkonepic"]||[]).push([[1900],{51900:function(t,n,e){e.r(n),e.d(n,{b:function(){return c}});e(23767),e(8585),e(68696),e(30541),e(57658);var r=e(49682);function i(t,n){for(var e=0;e<n.length;e++){const r=n[e];if("string"!=typeof r&&!Array.isArray(r))for(const n in r)if("default"!==n&&!(n in t)){const e=Object.getOwnPropertyDescriptor(r,n);e&&Object.defineProperty(t,n,e.get?e:{enumerable:!0,get:()=>r[n]})}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var o,a,u,s={};o={get exports(){return s},set exports(t){s=t}},a="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,"undefined"!=typeof __filename&&(a=a||__filename),u=function(t){var n,e,i=void 0!==(t=t||{})?t:{};i.ready=new Promise((function(t,r){n=t,e=r}));var o,u={};for(o in i)i.hasOwnProperty(o)&&(u[o]=i[o]);var s=!1,c=!1,l=!1,f=!1;s="object"==typeof window,c="function"==typeof importScripts,l="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,f=!s&&!l&&!c;var p,d,y,h,v="";function m(t){return i.locateFile?i.locateFile(t,v):v+t}l?(v=c?require("path").dirname(v)+"/":__dirname+"/",p=function(t,n){return y||(y=require("fs")),h||(h=require("path")),t=h.normalize(t),y.readFileSync(t,n?null:"utf8")},d=function(t){var n=p(t,!0);return n.buffer||(n=new Uint8Array(n)),_(n.buffer),n},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",(function(t){if(!(t instanceof Qe))throw t})),process.on("unhandledRejection",vt),i.inspect=function(){return"[Emscripten Module object]"}):f?("undefined"!=typeof read&&(p=function(t){return read(t)}),d=function(t){var n;return"function"==typeof readbuffer?new Uint8Array(readbuffer(t)):(_("object"==typeof(n=read(t,"binary"))),n)},"undefined"!=typeof scriptArgs&&scriptArgs,"undefined"!=typeof print&&("undefined"==typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!=typeof printErr?printErr:print)):(s||c)&&(c?v=self.location.href:document.currentScript&&(v=document.currentScript.src),a&&(v=a),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",p=function(t){var n=new XMLHttpRequest;return n.open("GET",t,!1),n.send(null),n.responseText},c&&(d=function(t){var n=new XMLHttpRequest;return n.open("GET",t,!1),n.responseType="arraybuffer",n.send(null),new Uint8Array(n.response)}));var g,b,$=i.print||console.log.bind(console),C=i.printErr||console.warn.bind(console);for(o in u)u.hasOwnProperty(o)&&(i[o]=u[o]);u=null,i.arguments&&i.arguments,i.thisProgram&&i.thisProgram,i.quit&&i.quit,i.wasmBinary&&(g=i.wasmBinary),i.noExitRuntime&&i.noExitRuntime,"object"!=typeof WebAssembly&&vt("no native wasm support detected");var w=new WebAssembly.Table({initial:157,maximum:157,element:"anyfunc"}),T=!1;function _(t,n){t||vt("Assertion failed: "+n)}var P="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function A(t,n,e){for(var r=n+e,i=n;t[i]&&!(i>=r);)++i;if(i-n>16&&t.subarray&&P)return P.decode(t.subarray(n,i));for(var o="";n<i;){var a=t[n++];if(128&a){var u=63&t[n++];if(192!=(224&a)){var s=63&t[n++];if((a=224==(240&a)?(15&a)<<12|u<<6|s:(7&a)<<18|u<<12|s<<6|63&t[n++])<65536)o+=String.fromCharCode(a);else{var c=a-65536;o+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else o+=String.fromCharCode((31&a)<<6|u)}else o+=String.fromCharCode(a)}return o}function W(t,n){return t?A(V,t,n):""}function E(t,n,e,r){if(!(r>0))return 0;for(var i=e,o=e+r-1,a=0;a<t.length;++a){var u=t.charCodeAt(a);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&t.charCodeAt(++a)),u<=127){if(e>=o)break;n[e++]=u}else if(u<=2047){if(e+1>=o)break;n[e++]=192|u>>6,n[e++]=128|63&u}else if(u<=65535){if(e+2>=o)break;n[e++]=224|u>>12,n[e++]=128|u>>6&63,n[e++]=128|63&u}else{if(e+3>=o)break;n[e++]=240|u>>18,n[e++]=128|u>>12&63,n[e++]=128|u>>6&63,n[e++]=128|63&u}}return n[e]=0,e-i}function S(t,n,e){return E(t,V,n,e)}function k(t){for(var n=0,e=0;e<t.length;++e){var r=t.charCodeAt(e);r>=55296&&r<=57343&&(r=65536+((1023&r)<<10)|1023&t.charCodeAt(++e)),r<=127?++n:n+=r<=2047?2:r<=65535?3:4}return n}var O="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function j(t,n){for(var e=t,r=e>>1,i=r+n/2;!(r>=i)&&z[r];)++r;if((e=r<<1)-t>32&&O)return O.decode(V.subarray(t,e));for(var o=0,a="";;){var u=H[t+2*o>>1];if(0==u||o==n/2)return a;++o,a+=String.fromCharCode(u)}}function F(t,n,e){if(void 0===e&&(e=2147483647),e<2)return 0;for(var r=n,i=(e-=2)<2*t.length?e/2:t.length,o=0;o<i;++o){var a=t.charCodeAt(o);H[n>>1]=a,n+=2}return H[n>>1]=0,n-r}function R(t){return 2*t.length}function x(t,n){for(var e=0,r="";!(e>=n/4);){var i=q[t+4*e>>2];if(0==i)break;if(++e,i>=65536){var o=i-65536;r+=String.fromCharCode(55296|o>>10,56320|1023&o)}else r+=String.fromCharCode(i)}return r}function D(t,n,e){if(void 0===e&&(e=2147483647),e<4)return 0;for(var r=n,i=r+e-4,o=0;o<t.length;++o){var a=t.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++o)),q[n>>2]=a,(n+=4)+4>i)break}return q[n>>2]=0,n-r}function I(t){for(var n=0,e=0;e<t.length;++e){var r=t.charCodeAt(e);r>=55296&&r<=57343&&++e,n+=4}return n}var U,M,V,H,z,q,B,N,G,L=65536;function X(t,n){return t%n>0&&(t+=n-t%n),t}function J(t){U=t,i.HEAP8=M=new Int8Array(t),i.HEAP16=H=new Int16Array(t),i.HEAP32=q=new Int32Array(t),i.HEAPU8=V=new Uint8Array(t),i.HEAPU16=z=new Uint16Array(t),i.HEAPU32=B=new Uint32Array(t),i.HEAPF32=N=new Float32Array(t),i.HEAPF64=G=new Float64Array(t)}var Y=5565536,Z=322496,K=i.INITIAL_MEMORY||16777216;function Q(t){for(;t.length>0;){var n=t.shift();if("function"!=typeof n){var e=n.func;"number"==typeof e?void 0===n.arg?i.dynCall_v(e):i.dynCall_vi(e,n.arg):e(void 0===n.arg?null:n.arg)}else n(i)}}(b=i.wasmMemory?i.wasmMemory:new WebAssembly.Memory({initial:K/L,maximum:2147483648/L}))&&(U=b.buffer),K=U.byteLength,J(U),q[Z>>2]=Y;var tt=[],nt=[],et=[],rt=[];function it(){if(i.preRun)for("function"==typeof i.preRun&&(i.preRun=[i.preRun]);i.preRun.length;)st(i.preRun.shift());Q(tt)}function ot(){Q(nt)}function at(){Q(et)}function ut(){if(i.postRun)for("function"==typeof i.postRun&&(i.postRun=[i.postRun]);i.postRun.length;)ct(i.postRun.shift());Q(rt)}function st(t){tt.unshift(t)}function ct(t){rt.unshift(t)}var lt=Math.ceil,ft=Math.floor,pt=0,dt=null;function yt(t){pt++,i.monitorRunDependencies&&i.monitorRunDependencies(pt)}function ht(t){if(pt--,i.monitorRunDependencies&&i.monitorRunDependencies(pt),0==pt&&dt){var n=dt;dt=null,n()}}function vt(t){i.onAbort&&i.onAbort(t),C(t+=""),T=!0,t="abort("+t+"). Build with -s ASSERTIONS=1 for more info.";var n=new WebAssembly.RuntimeError(t);throw e(n),n}function mt(t,n){return String.prototype.startsWith?t.startsWith(n):0===t.indexOf(n)}i.preloadedImages={},i.preloadedAudios={};var gt="data:application/octet-stream;base64,";function bt(t){return mt(t,gt)}var $t="file://";function Ct(t){return mt(t,$t)}var wt="basis_transcoder.wasm";function Tt(){try{if(g)return new Uint8Array(g);if(d)return d(wt);throw"both async and sync fetching of the wasm failed"}catch(C){vt(C)}}function _t(){return g||!s&&!c||"function"!=typeof fetch||Ct(wt)?new Promise((function(t,n){t(Tt())})):fetch(wt,{credentials:"same-origin"}).then((function(t){if(!t.ok)throw"failed to load wasm binary file at '"+wt+"'";return t.arrayBuffer()})).catch((function(){return Tt()}))}function Pt(){var t={a:Le};function n(t,n){var e=t.exports;i.asm=e,ht()}function e(t){n(t.instance)}function r(n){return _t().then((function(n){return WebAssembly.instantiate(n,t)})).then(n,(function(t){C("failed to asynchronously prepare wasm: "+t),vt(t)}))}function a(){if(g||"function"!=typeof WebAssembly.instantiateStreaming||bt(wt)||Ct(wt)||"function"!=typeof fetch)return r(e);fetch(wt,{credentials:"same-origin"}).then((function(n){return WebAssembly.instantiateStreaming(n,t).then(e,(function(t){return C("wasm streaming compile failed: "+t),C("falling back to ArrayBuffer instantiation"),r(e)}))}))}if(yt(),i.instantiateWasm)try{return i.instantiateWasm(t,n)}catch(o){return C("Module.instantiateWasm callback failed with error: "+o),!1}return a(),{}}bt(wt)||(wt=m(wt)),nt.push({func:function(){Je()}});var At={};function Wt(t){for(;t.length;){var n=t.pop();t.pop()(n)}}function Et(t){return this.fromWireType(B[t>>2])}var St={},kt={},Ot={},jt=48,Ft=57;function Rt(t){if(void 0===t)return"_unknown";var n=(t=t.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return n>=jt&&n<=Ft?"_"+t:t}function xt(t,n){return t=Rt(t),function(){return n.apply(this,arguments)}}function Dt(t,n){var e=xt(n,(function(t){this.name=n,this.message=t;var e=new Error(t).stack;void 0!==e&&(this.stack=this.toString()+"\n"+e.replace(/^Error(:[^\n]*)?\n/,""))}));return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},e}var It=void 0;function Ut(t){throw new It(t)}function Mt(t,n,e){function r(n){var r=e(n);r.length!==t.length&&Ut("Mismatched type converter count");for(var i=0;i<t.length;++i)Lt(t[i],r[i])}t.forEach((function(t){Ot[t]=n}));var i=new Array(n.length),o=[],a=0;n.forEach((function(t,n){kt.hasOwnProperty(t)?i[n]=kt[t]:(o.push(t),St.hasOwnProperty(t)||(St[t]=[]),St[t].push((function(){i[n]=kt[t],++a===o.length&&r(i)})))})),0===o.length&&r(i)}function Vt(t){var n=At[t];delete At[t];var e=n.rawConstructor,r=n.rawDestructor,i=n.fields;Mt([t],i.map((function(t){return t.getterReturnType})).concat(i.map((function(t){return t.setterArgumentType}))),(function(t){var o={};return i.forEach((function(n,e){var r=n.fieldName,a=t[e],u=n.getter,s=n.getterContext,c=t[e+i.length],l=n.setter,f=n.setterContext;o[r]={read:function(t){return a.fromWireType(u(s,t))},write:function(t,n){var e=[];l(f,t,c.toWireType(e,n)),Wt(e)}}})),[{name:n.name,fromWireType:function(t){var n={};for(var e in o)n[e]=o[e].read(t);return r(t),n},toWireType:function(t,n){for(var i in o)if(!(i in n))throw new TypeError('Missing field:  "'+i+'"');var a=e();for(i in o)o[i].write(a,n[i]);return null!==t&&t.push(r,a),a},argPackAdvance:8,readValueFromPointer:Et,destructorFunction:r}]}))}function Ht(t){switch(t){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+t)}}function zt(){for(var t=new Array(256),n=0;n<256;++n)t[n]=String.fromCharCode(n);qt=t}var qt=void 0;function Bt(t){for(var n="",e=t;V[e];)n+=qt[V[e++]];return n}var Nt=void 0;function Gt(t){throw new Nt(t)}function Lt(t,n,e){if(e=e||{},!("argPackAdvance"in n))throw new TypeError("registerType registeredInstance requires argPackAdvance");var r=n.name;if(t||Gt('type "'+r+'" must have a positive integer typeid pointer'),kt.hasOwnProperty(t)){if(e.ignoreDuplicateRegistrations)return;Gt("Cannot register type '"+r+"' twice")}if(kt[t]=n,delete Ot[t],St.hasOwnProperty(t)){var i=St[t];delete St[t],i.forEach((function(t){t()}))}}function Xt(t,n,e,r,i){var o=Ht(e);Lt(t,{name:n=Bt(n),fromWireType:function(t){return!!t},toWireType:function(t,n){return n?r:i},argPackAdvance:8,readValueFromPointer:function(t){var r;if(1===e)r=M;else if(2===e)r=H;else{if(4!==e)throw new TypeError("Unknown boolean type size: "+n);r=q}return this.fromWireType(r[t>>o])},destructorFunction:null})}function Jt(t){if(!(this instanceof pn))return!1;if(!(t instanceof pn))return!1;for(var n=this.$$.ptrType.registeredClass,e=this.$$.ptr,r=t.$$.ptrType.registeredClass,i=t.$$.ptr;n.baseClass;)e=n.upcast(e),n=n.baseClass;for(;r.baseClass;)i=r.upcast(i),r=r.baseClass;return n===r&&e===i}function Yt(t){return{count:t.count,deleteScheduled:t.deleteScheduled,preservePointerOnDelete:t.preservePointerOnDelete,ptr:t.ptr,ptrType:t.ptrType,smartPtr:t.smartPtr,smartPtrType:t.smartPtrType}}function Zt(t){function n(t){return t.$$.ptrType.registeredClass.name}Gt(n(t)+" instance already deleted")}var Kt=!1;function Qt(t){}function tn(t){t.smartPtr?t.smartPtrType.rawDestructor(t.smartPtr):t.ptrType.registeredClass.rawDestructor(t.ptr)}function nn(t){t.count.value-=1,0===t.count.value&&tn(t)}function en(t){return"undefined"==typeof FinalizationGroup?(en=function(t){return t},t):(Kt=new FinalizationGroup((function(t){for(var n=t.next();!n.done;n=t.next()){var e=n.value;e.ptr?nn(e):console.warn("object already deleted: "+e.ptr)}})),en=function(t){return Kt.register(t,t.$$,t.$$),t},Qt=function(t){Kt.unregister(t.$$)},en(t))}function rn(){if(this.$$.ptr||Zt(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var t=en(Object.create(Object.getPrototypeOf(this),{$$:{value:Yt(this.$$)}}));return t.$$.count.value+=1,t.$$.deleteScheduled=!1,t}function on(){this.$$.ptr||Zt(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Gt("Object already scheduled for deletion"),Qt(this),nn(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function an(){return!this.$$.ptr}var un=void 0,sn=[];function cn(){for(;sn.length;){var t=sn.pop();t.$$.deleteScheduled=!1,t.delete()}}function ln(){return this.$$.ptr||Zt(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Gt("Object already scheduled for deletion"),sn.push(this),1===sn.length&&un&&un(cn),this.$$.deleteScheduled=!0,this}function fn(){pn.prototype.isAliasOf=Jt,pn.prototype.clone=rn,pn.prototype.delete=on,pn.prototype.isDeleted=an,pn.prototype.deleteLater=ln}function pn(){}var dn={};function yn(t,n,e){if(void 0===t[n].overloadTable){var r=t[n];t[n]=function(){return t[n].overloadTable.hasOwnProperty(arguments.length)||Gt("Function '"+e+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+t[n].overloadTable+")!"),t[n].overloadTable[arguments.length].apply(this,arguments)},t[n].overloadTable=[],t[n].overloadTable[r.argCount]=r}}function hn(t,n,e){i.hasOwnProperty(t)?((void 0===e||void 0!==i[t].overloadTable&&void 0!==i[t].overloadTable[e])&&Gt("Cannot register public name '"+t+"' twice"),yn(i,t,t),i.hasOwnProperty(e)&&Gt("Cannot register multiple overloads of a function with the same number of arguments ("+e+")!"),i[t].overloadTable[e]=n):(i[t]=n,void 0!==e&&(i[t].numArguments=e))}function vn(t,n,e,r,i,o,a,u){this.name=t,this.constructor=n,this.instancePrototype=e,this.rawDestructor=r,this.baseClass=i,this.getActualType=o,this.upcast=a,this.downcast=u,this.pureVirtualFunctions=[]}function mn(t,n,e){for(;n!==e;)n.upcast||Gt("Expected null or instance of "+e.name+", got an instance of "+n.name),t=n.upcast(t),n=n.baseClass;return t}function gn(t,n){if(null===n)return this.isReference&&Gt("null is not a valid "+this.name),0;n.$$||Gt('Cannot pass "'+oe(n)+'" as a '+this.name),n.$$.ptr||Gt("Cannot pass deleted object as a pointer of type "+this.name);var e=n.$$.ptrType.registeredClass;return mn(n.$$.ptr,e,this.registeredClass)}function bn(t,n){var e;if(null===n)return this.isReference&&Gt("null is not a valid "+this.name),this.isSmartPointer?(e=this.rawConstructor(),null!==t&&t.push(this.rawDestructor,e),e):0;n.$$||Gt('Cannot pass "'+oe(n)+'" as a '+this.name),n.$$.ptr||Gt("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&n.$$.ptrType.isConst&&Gt("Cannot convert argument of type "+(n.$$.smartPtrType?n.$$.smartPtrType.name:n.$$.ptrType.name)+" to parameter type "+this.name);var r=n.$$.ptrType.registeredClass;if(e=mn(n.$$.ptr,r,this.registeredClass),this.isSmartPointer)switch(void 0===n.$$.smartPtr&&Gt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:n.$$.smartPtrType===this?e=n.$$.smartPtr:Gt("Cannot convert argument of type "+(n.$$.smartPtrType?n.$$.smartPtrType.name:n.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:e=n.$$.smartPtr;break;case 2:if(n.$$.smartPtrType===this)e=n.$$.smartPtr;else{var i=n.clone();e=this.rawShare(e,Qn((function(){i.delete()}))),null!==t&&t.push(this.rawDestructor,e)}break;default:Gt("Unsupporting sharing policy")}return e}function $n(t,n){if(null===n)return this.isReference&&Gt("null is not a valid "+this.name),0;n.$$||Gt('Cannot pass "'+oe(n)+'" as a '+this.name),n.$$.ptr||Gt("Cannot pass deleted object as a pointer of type "+this.name),n.$$.ptrType.isConst&&Gt("Cannot convert argument of type "+n.$$.ptrType.name+" to parameter type "+this.name);var e=n.$$.ptrType.registeredClass;return mn(n.$$.ptr,e,this.registeredClass)}function Cn(t){return this.rawGetPointee&&(t=this.rawGetPointee(t)),t}function wn(t){this.rawDestructor&&this.rawDestructor(t)}function Tn(t){null!==t&&t.delete()}function _n(t,n,e){if(n===e)return t;if(void 0===e.baseClass)return null;var r=_n(t,n,e.baseClass);return null===r?null:e.downcast(r)}function Pn(){return Object.keys(Sn).length}function An(){var t=[];for(var n in Sn)Sn.hasOwnProperty(n)&&t.push(Sn[n]);return t}function Wn(t){un=t,sn.length&&un&&un(cn)}function En(){i.getInheritedInstanceCount=Pn,i.getLiveInheritedInstances=An,i.flushPendingDeletes=cn,i.setDelayFunction=Wn}var Sn={};function kn(t,n){for(void 0===n&&Gt("ptr should not be undefined");t.baseClass;)n=t.upcast(n),t=t.baseClass;return n}function On(t,n){return n=kn(t,n),Sn[n]}function jn(t,n){return n.ptrType&&n.ptr||Ut("makeClassHandle requires ptr and ptrType"),!!n.smartPtrType!=!!n.smartPtr&&Ut("Both smartPtrType and smartPtr must be specified"),n.count={value:1},en(Object.create(t,{$$:{value:n}}))}function Fn(t){var n=this.getPointee(t);if(!n)return this.destructor(t),null;var e=On(this.registeredClass,n);if(void 0!==e){if(0===e.$$.count.value)return e.$$.ptr=n,e.$$.smartPtr=t,e.clone();var r=e.clone();return this.destructor(t),r}function i(){return this.isSmartPointer?jn(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:n,smartPtrType:this,smartPtr:t}):jn(this.registeredClass.instancePrototype,{ptrType:this,ptr:t})}var o,a=this.registeredClass.getActualType(n),u=dn[a];if(!u)return i.call(this);o=this.isConst?u.constPointerType:u.pointerType;var s=_n(n,this.registeredClass,o.registeredClass);return null===s?i.call(this):this.isSmartPointer?jn(o.registeredClass.instancePrototype,{ptrType:o,ptr:s,smartPtrType:this,smartPtr:t}):jn(o.registeredClass.instancePrototype,{ptrType:o,ptr:s})}function Rn(){xn.prototype.getPointee=Cn,xn.prototype.destructor=wn,xn.prototype.argPackAdvance=8,xn.prototype.readValueFromPointer=Et,xn.prototype.deleteObject=Tn,xn.prototype.fromWireType=Fn}function xn(t,n,e,r,i,o,a,u,s,c,l){this.name=t,this.registeredClass=n,this.isReference=e,this.isConst=r,this.isSmartPointer=i,this.pointeeType=o,this.sharingPolicy=a,this.rawGetPointee=u,this.rawConstructor=s,this.rawShare=c,this.rawDestructor=l,i||void 0!==n.baseClass?this.toWireType=bn:r?(this.toWireType=gn,this.destructorFunction=null):(this.toWireType=$n,this.destructorFunction=null)}function Dn(t,n,e){i.hasOwnProperty(t)||Ut("Replacing nonexistant public symbol"),void 0!==i[t].overloadTable&&void 0!==e?i[t].overloadTable[e]=n:(i[t]=n,i[t].argCount=e)}function In(t,n){function e(t){var e=[n];return function(){e.length=arguments.length+1;for(var n=0;n<arguments.length;n++)e[n+1]=arguments[n];return t.apply(null,e)}}t=Bt(t);var r=e(i["dynCall_"+t]);return"function"!=typeof r&&Gt("unknown function pointer with signature "+t+": "+n),r}var Un=void 0;function Mn(t){var n=Ke(t),e=Bt(n);return Ze(n),e}function Vn(t,n){var e=[],r={};function i(t){r[t]||kt[t]||(Ot[t]?Ot[t].forEach(i):(e.push(t),r[t]=!0))}throw n.forEach(i),new Un(t+": "+e.map(Mn).join([", "]))}function Hn(t,n,e,r,i,o,a,u,s,c,l,f,p){l=Bt(l),o=In(i,o),u&&(u=In(a,u)),c&&(c=In(s,c)),p=In(f,p);var d=Rt(l);hn(d,(function(){Vn("Cannot construct "+l+" due to unbound types",[r])})),Mt([t,n,e],r?[r]:[],(function(n){var e,i;n=n[0],i=r?(e=n.registeredClass).instancePrototype:pn.prototype;var a=xt(d,(function(){if(Object.getPrototypeOf(this)!==s)throw new Nt("Use 'new' to construct "+l);if(void 0===f.constructor_body)throw new Nt(l+" has no accessible constructor");var t=f.constructor_body[arguments.length];if(void 0===t)throw new Nt("Tried to invoke ctor of "+l+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(f.constructor_body).toString()+") parameters instead!");return t.apply(this,arguments)})),s=Object.create(i,{constructor:{value:a}});a.prototype=s;var f=new vn(l,a,s,p,e,o,u,c),y=new xn(l,f,!0,!1,!1),h=new xn(l+"*",f,!1,!1,!1),v=new xn(l+" const*",f,!1,!0,!1);return dn[t]={pointerType:h,constPointerType:v},Dn(d,a),[y,h,v]}))}function zn(t,n){for(var e=[],r=0;r<t;r++)e.push(q[(n>>2)+r]);return e}function qn(t,n,e,r,i,o){_(n>0);var a=zn(n,e);i=In(r,i);var u=[o],s=[];Mt([],[t],(function(t){var e="constructor "+(t=t[0]).name;if(void 0===t.registeredClass.constructor_body&&(t.registeredClass.constructor_body=[]),void 0!==t.registeredClass.constructor_body[n-1])throw new Nt("Cannot register multiple constructors with identical number of parameters ("+(n-1)+") for class '"+t.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return t.registeredClass.constructor_body[n-1]=function(){Vn("Cannot construct "+t.name+" due to unbound types",a)},Mt([],a,(function(r){return t.registeredClass.constructor_body[n-1]=function(){arguments.length!==n-1&&Gt(e+" called with "+arguments.length+" arguments, expected "+(n-1)),s.length=0,u.length=n;for(var t=1;t<n;++t)u[t]=r[t].toWireType(s,arguments[t-1]);var o=i.apply(null,u);return Wt(s),r[0].fromWireType(o)},[]})),[]}))}function Bn(t,n,e,r,i){var o=n.length;o<2&&Gt("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=null!==n[1]&&null!==e,u=!1,s=1;s<n.length;++s)if(null!==n[s]&&void 0===n[s].destructorFunction){u=!0;break}var c="void"!==n[0].name,l=o-2,f=new Array(l),p=[],d=[];return function(){var e;arguments.length!==l&&Gt("function "+t+" called with "+arguments.length+" arguments, expected "+l+" args!"),d.length=0,p.length=a?2:1,p[0]=i,a&&(e=n[1].toWireType(d,this),p[1]=e);for(var o=0;o<l;++o)f[o]=n[o+2].toWireType(d,arguments[o]),p.push(f[o]);var s=r.apply(null,p);if(u)Wt(d);else for(o=a?1:2;o<n.length;o++){var y=1===o?e:f[o-2];null!==n[o].destructorFunction&&n[o].destructorFunction(y)}if(c)return n[0].fromWireType(s)}}function Nn(t,n,e,r,i,o,a,u){var s=zn(e,r);n=Bt(n),o=In(i,o),Mt([],[t],(function(t){var r=(t=t[0]).name+"."+n;function i(){Vn("Cannot call "+r+" due to unbound types",s)}u&&t.registeredClass.pureVirtualFunctions.push(n);var c=t.registeredClass.instancePrototype,l=c[n];return void 0===l||void 0===l.overloadTable&&l.className!==t.name&&l.argCount===e-2?(i.argCount=e-2,i.className=t.name,c[n]=i):(yn(c,n,r),c[n].overloadTable[e-2]=i),Mt([],s,(function(i){var u=Bn(r,i,t,o,a);return void 0===c[n].overloadTable?(u.argCount=e-2,c[n]=u):c[n].overloadTable[e-2]=u,[]})),[]}))}function Gn(t,n,e){t=Bt(t),Mt([],[n],(function(n){return n=n[0],i[t]=n.fromWireType(e),[]}))}var Ln=[],Xn=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Jn(t){t>4&&0==--Xn[t].refcount&&(Xn[t]=void 0,Ln.push(t))}function Yn(){for(var t=0,n=5;n<Xn.length;++n)void 0!==Xn[n]&&++t;return t}function Zn(){for(var t=5;t<Xn.length;++t)if(void 0!==Xn[t])return Xn[t];return null}function Kn(){i.count_emval_handles=Yn,i.get_first_emval=Zn}function Qn(t){switch(t){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var n=Ln.length?Ln.pop():Xn.length;return Xn[n]={refcount:1,value:t},n}}function te(t,n){Lt(t,{name:n=Bt(n),fromWireType:function(t){var n=Xn[t].value;return Jn(t),n},toWireType:function(t,n){return Qn(n)},argPackAdvance:8,readValueFromPointer:Et,destructorFunction:null})}function ne(t,n,e){switch(n){case 0:return function(t){var n=e?M:V;return this.fromWireType(n[t])};case 1:return function(t){var n=e?H:z;return this.fromWireType(n[t>>1])};case 2:return function(t){var n=e?q:B;return this.fromWireType(n[t>>2])};default:throw new TypeError("Unknown integer type: "+t)}}function ee(t,n,e,r){var i=Ht(e);function o(){}n=Bt(n),o.values={},Lt(t,{name:n,constructor:o,fromWireType:function(t){return this.constructor.values[t]},toWireType:function(t,n){return n.value},argPackAdvance:8,readValueFromPointer:ne(n,i,r),destructorFunction:null}),hn(n,o)}function re(t,n){var e=kt[t];return void 0===e&&Gt(n+" has unknown type "+Mn(t)),e}function ie(t,n,e){var r=re(t,"enum");n=Bt(n);var i=r.constructor,o=Object.create(r.constructor.prototype,{value:{value:e},constructor:{value:xt(r.name+"_"+n,(function(){}))}});i.values[e]=o,i[n]=o}function oe(t){if(null===t)return"null";var n=typeof t;return"object"===n||"array"===n||"function"===n?t.toString():""+t}function ae(t,n){switch(n){case 2:return function(t){return this.fromWireType(N[t>>2])};case 3:return function(t){return this.fromWireType(G[t>>3])};default:throw new TypeError("Unknown float type: "+t)}}function ue(t,n,e){var r=Ht(e);Lt(t,{name:n=Bt(n),fromWireType:function(t){return t},toWireType:function(t,n){if("number"!=typeof n&&"boolean"!=typeof n)throw new TypeError('Cannot convert "'+oe(n)+'" to '+this.name);return n},argPackAdvance:8,readValueFromPointer:ae(n,r),destructorFunction:null})}function se(t,n,e,r,i,o){var a=zn(n,e);t=Bt(t),i=In(r,i),hn(t,(function(){Vn("Cannot call "+t+" due to unbound types",a)}),n-1),Mt([],a,(function(e){var r=[e[0],null].concat(e.slice(1));return Dn(t,Bn(t,r,null,i,o),n-1),[]}))}function ce(t,n,e){switch(n){case 0:return e?function(t){return M[t]}:function(t){return V[t]};case 1:return e?function(t){return H[t>>1]}:function(t){return z[t>>1]};case 2:return e?function(t){return q[t>>2]}:function(t){return B[t>>2]};default:throw new TypeError("Unknown integer type: "+t)}}function le(t,n,e,r,i){n=Bt(n),-1===i&&(i=4294967295);var o=Ht(e),a=function(t){return t};if(0===r){var u=32-8*e;a=function(t){return t<<u>>>u}}var s=-1!=n.indexOf("unsigned");Lt(t,{name:n,fromWireType:a,toWireType:function(t,e){if("number"!=typeof e&&"boolean"!=typeof e)throw new TypeError('Cannot convert "'+oe(e)+'" to '+this.name);if(e<r||e>i)throw new TypeError('Passing a number "'+oe(e)+'" from JS side to C/C++ side to an argument of type "'+n+'", which is outside the valid range ['+r+", "+i+"]!");return s?e>>>0:0|e},argPackAdvance:8,readValueFromPointer:ce(n,o,0!==r),destructorFunction:null})}function fe(t,n,e){var r=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][n];function i(t){var n=B,e=n[t>>=2],i=n[t+1];return new r(U,i,e)}Lt(t,{name:e=Bt(e),fromWireType:i,argPackAdvance:8,readValueFromPointer:i},{ignoreDuplicateRegistrations:!0})}function pe(t,n){var e="std::string"===(n=Bt(n));Lt(t,{name:n,fromWireType:function(t){var n,r=B[t>>2];if(e)for(var i=t+4,o=0;o<=r;++o){var a=t+4+o;if(o==r||0==V[a]){var u=W(i,a-i);void 0===n?n=u:(n+=String.fromCharCode(0),n+=u),i=a+1}}else{var s=new Array(r);for(o=0;o<r;++o)s[o]=String.fromCharCode(V[t+4+o]);n=s.join("")}return Ze(t),n},toWireType:function(t,n){n instanceof ArrayBuffer&&(n=new Uint8Array(n));var r="string"==typeof n;r||n instanceof Uint8Array||n instanceof Uint8ClampedArray||n instanceof Int8Array||Gt("Cannot pass non-string to std::string");var i=(e&&r?function(){return k(n)}:function(){return n.length})(),o=Ye(4+i+1);if(B[o>>2]=i,e&&r)S(n,o+4,i+1);else if(r)for(var a=0;a<i;++a){var u=n.charCodeAt(a);u>255&&(Ze(o),Gt("String has UTF-16 code units that do not fit in 8 bits")),V[o+4+a]=u}else for(a=0;a<i;++a)V[o+4+a]=n[a];return null!==t&&t.push(Ze,o),o},argPackAdvance:8,readValueFromPointer:Et,destructorFunction:function(t){Ze(t)}})}function de(t,n,e){var r,i,o,a,u;e=Bt(e),2===n?(r=j,i=F,a=R,o=function(){return z},u=1):4===n&&(r=x,i=D,a=I,o=function(){return B},u=2),Lt(t,{name:e,fromWireType:function(t){for(var e,i=B[t>>2],a=o(),s=t+4,c=0;c<=i;++c){var l=t+4+c*n;if(c==i||0==a[l>>u]){var f=r(s,l-s);void 0===e?e=f:(e+=String.fromCharCode(0),e+=f),s=l+n}}return Ze(t),e},toWireType:function(t,r){"string"!=typeof r&&Gt("Cannot pass non-string to C++ string type "+e);var o=a(r),s=Ye(4+o+n);return B[s>>2]=o>>u,i(r,s+4,o+n),null!==t&&t.push(Ze,s),s},argPackAdvance:8,readValueFromPointer:Et,destructorFunction:function(t){Ze(t)}})}function ye(t,n,e,r,i,o){At[t]={name:Bt(n),rawConstructor:In(e,r),rawDestructor:In(i,o),fields:[]}}function he(t,n,e,r,i,o,a,u,s,c){At[t].fields.push({fieldName:Bt(n),getterReturnType:e,getter:In(r,i),getterContext:o,setterArgumentType:a,setter:In(u,s),setterContext:c})}function ve(t,n){Lt(t,{isVoid:!0,name:n=Bt(n),argPackAdvance:0,fromWireType:function(){},toWireType:function(t,n){}})}function me(t){return t||Gt("Cannot use deleted val. handle = "+t),Xn[t].value}function ge(t,n,e){t=me(t),n=re(n,"emval::as");var r=[],i=Qn(r);return q[e>>2]=i,n.toWireType(r,t)}var be={};function $e(t){var n=be[t];return void 0===n?Bt(t):n}var Ce=[];function we(t,n,e,r){(t=Ce[t])(n=me(n),e=$e(e),null,r)}function Te(){if("object"==typeof globalThis)return globalThis;function t(t){t.$$$embind_global$$$=t;var n="object"==typeof $$$embind_global$$$&&t.$$$embind_global$$$===t;return n||delete t.$$$embind_global$$$,n}if("object"==typeof $$$embind_global$$$)return $$$embind_global$$$;if("object"==typeof r.c&&t(r.c)?$$$embind_global$$$=r.c:"object"==typeof self&&t(self)&&($$$embind_global$$$=self),"object"==typeof $$$embind_global$$$)return $$$embind_global$$$;throw Error("unable to get global object.")}function _e(t){return 0===t?Qn(Te()):(t=$e(t),Qn(Te()[t]))}function Pe(t){var n=Ce.length;return Ce.push(t),n}function Ae(t,n){for(var e=new Array(t),r=0;r<t;++r)e[r]=re(q[(n>>2)+r],"parameter "+r);return e}function We(t,n){var e=Ae(t,n),r=e[0],i=new Array(t-1);return Pe((function(n,o,a,u){for(var s=0,c=0;c<t-1;++c)i[c]=e[c+1].readValueFromPointer(u+s),s+=e[c+1].argPackAdvance;var l=n[o].apply(n,i);for(c=0;c<t-1;++c)e[c+1].deleteObject&&e[c+1].deleteObject(i[c]);if(!r.isVoid)return r.toWireType(a,l)}))}function Ee(t){return t=$e(t),Qn(i[t])}function Se(t,n){return Qn((t=me(t))[n=me(n)])}function ke(t){t>4&&(Xn[t].refcount+=1)}function Oe(t){var n=new Array(t+1);return function(e,r,i){n[0]=e;for(var o=0;o<t;++o){var a=re(q[(r>>2)+o],"parameter "+o);n[o+1]=a.readValueFromPointer(i),i+=a.argPackAdvance}return Qn(new(e.bind.apply(e,n)))}}var je={};function Fe(t,n,e,r){t=me(t);var i=je[n];return i||(i=Oe(n),je[n]=i),i(t,e,r)}function Re(t){return Qn($e(t))}function xe(t){Wt(Xn[t].value),Jn(t)}function De(){vt()}function Ie(t,n,e){V.copyWithin(t,n,n+e)}function Ue(){return V.length}function Me(n){try{return b.grow(n-U.byteLength+65535>>>16),J(b.buffer),1}catch(t){}}function Ve(t){t>>>=0;var n=Ue(),e=65536,r=2147483648;if(t>r)return!1;for(var i=16777216,o=1;o<=4;o*=2){var a=n*(1+.2/o);if(a=Math.min(a,t+100663296),Me(Math.min(r,X(Math.max(i,t,a),e))))return!0}return!1}var He={mappings:{},buffers:[null,[],[]],printChar:function(t,n){var e=He.buffers[t];0===n||10===n?((1===t?$:C)(A(e,0)),e.length=0):e.push(n)},varargs:void 0,get:function(){return He.varargs+=4,q[He.varargs-4>>2]},getStr:function(t){return W(t)},get64:function(t,n){return t}};function ze(t){return 0}function qe(t,n,e,r,i){}function Be(t,n,e,r){for(var i=0,o=0;o<e;o++){for(var a=q[n+8*o>>2],u=q[n+(8*o+4)>>2],s=0;s<u;s++)He.printChar(t,V[a+s]);i+=u}return q[r>>2]=i,0}function Ne(t){return(t=+t)>=0?+ft(t+.5):+lt(t-.5)}function Ge(t){}It=i.InternalError=Dt(Error,"InternalError"),zt(),Nt=i.BindingError=Dt(Error,"BindingError"),fn(),Rn(),En(),Un=i.UnboundTypeError=Dt(Error,"UnboundTypeError"),Kn();var Le={u:Vt,J:Xt,y:Hn,x:qn,d:Nn,k:Gn,I:te,n:ee,a:ie,B:ue,i:se,j:le,h:fe,C:pe,w:de,v:ye,c:he,K:ve,m:ge,s:we,b:Jn,z:_e,t:We,r:Ee,e:Se,g:ke,q:Fe,f:Re,l:xe,p:De,F:Ie,G:Ve,H:ze,D:qe,A:Be,memory:b,o:Ne,E:Ge,table:w};Pt();var Xe,Je=i.___wasm_call_ctors=function(){return(Je=i.___wasm_call_ctors=i.asm.L).apply(null,arguments)},Ye=i._malloc=function(){return(Ye=i._malloc=i.asm.M).apply(null,arguments)},Ze=i._free=function(){return(Ze=i._free=i.asm.N).apply(null,arguments)},Ke=i.___getTypeName=function(){return(Ke=i.___getTypeName=i.asm.O).apply(null,arguments)};function Qe(t){this.name="ExitStatus",this.message="Program terminated with exit("+t+")",this.status=t}function tr(t){function e(){Xe||(Xe=!0,i.calledRun=!0,T||(ot(),at(),n(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),ut()))}pt>0||(it(),pt>0||(i.setStatus?(i.setStatus("Running..."),setTimeout((function(){setTimeout((function(){i.setStatus("")}),1),e()}),1)):e()))}if(i.___embind_register_native_and_builtin_types=function(){return(i.___embind_register_native_and_builtin_types=i.asm.P).apply(null,arguments)},i.dynCall_viii=function(){return(i.dynCall_viii=i.asm.Q).apply(null,arguments)},i.dynCall_vi=function(){return(i.dynCall_vi=i.asm.R).apply(null,arguments)},i.dynCall_v=function(){return(i.dynCall_v=i.asm.S).apply(null,arguments)},i.dynCall_i=function(){return(i.dynCall_i=i.asm.T).apply(null,arguments)},i.dynCall_iii=function(){return(i.dynCall_iii=i.asm.U).apply(null,arguments)},i.dynCall_ii=function(){return(i.dynCall_ii=i.asm.V).apply(null,arguments)},i.dynCall_vii=function(){return(i.dynCall_vii=i.asm.W).apply(null,arguments)},i.dynCall_iiii=function(){return(i.dynCall_iiii=i.asm.X).apply(null,arguments)},i.dynCall_iiiii=function(){return(i.dynCall_iiiii=i.asm.Y).apply(null,arguments)},i.dynCall_iiiiii=function(){return(i.dynCall_iiiiii=i.asm.Z).apply(null,arguments)},i.dynCall_iiiiiiii=function(){return(i.dynCall_iiiiiiii=i.asm._).apply(null,arguments)},i.dynCall_iiiiiiiii=function(){return(i.dynCall_iiiiiiiii=i.asm.$).apply(null,arguments)},i.dynCall_viiii=function(){return(i.dynCall_viiii=i.asm.aa).apply(null,arguments)},i.dynCall_iiiiiii=function(){return(i.dynCall_iiiiiii=i.asm.ba).apply(null,arguments)},i.dynCall_iiiiiiiiiiiiiiiiiiii=function(){return(i.dynCall_iiiiiiiiiiiiiiiiiiii=i.asm.ca).apply(null,arguments)},i.dynCall_iiiiiiiiiiiiiiiiiiiii=function(){return(i.dynCall_iiiiiiiiiiiiiiiiiiiii=i.asm.da).apply(null,arguments)},i.dynCall_iiiiiiiiiiiiiiiiiii=function(){return(i.dynCall_iiiiiiiiiiiiiiiiiii=i.asm.ea).apply(null,arguments)},i.dynCall_viiiii=function(){return(i.dynCall_viiiii=i.asm.fa).apply(null,arguments)},i.dynCall_iiiiiiiiii=function(){return(i.dynCall_iiiiiiiiii=i.asm.ga).apply(null,arguments)},i.dynCall_iiiiiiiiiii=function(){return(i.dynCall_iiiiiiiiiii=i.asm.ha).apply(null,arguments)},i.dynCall_jiji=function(){return(i.dynCall_jiji=i.asm.ia).apply(null,arguments)},i.dynCall_viiiiii=function(){return(i.dynCall_viiiiii=i.asm.ja).apply(null,arguments)},dt=function t(){Xe||tr(),Xe||(dt=t)},i.run=tr,i.preInit)for("function"==typeof i.preInit&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return tr(),t.ready},o.exports=u;const c=i({__proto__:null,default:s},[s])}}]);