import{w as ln,j as Mg}from"./singletons.66338241.js";import{l as ia}from"./scheduler.1f72109c.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y=function(n,e){if(!n)throw Kn(e)},Kn=function(n){return new Error("Firebase Database ("+sd.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Vg=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Za={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),i.push(t[u],t[h],t[d],t[f])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(rd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Vg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw new Lg;const d=r<<2|a>>4;if(i.push(d),c!==64){const f=a<<4&240|c>>2;if(i.push(f),h!==64){const p=c<<6&192|h;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Lg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const od=function(n){const e=rd(n);return Za.encodeByteArray(e,!0)},Xs=function(n){return od(n).replace(/\./g,"")},Js=function(n){try{return Za.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(n){return ad(void 0,n)}function ad(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Ug(t)||(n[t]=ad(n[t],e[t]));return n}function Ug(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=()=>Bg().__FIREBASE_DEFAULTS__,Wg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},jg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Js(n[1]);return e&&JSON.parse(e)},el=()=>{try{return qg()||Wg()||jg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ld=n=>{var e,t;return(t=(e=el())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Lr=n=>{const e=ld(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},cd=()=>{var n;return(n=el())===null||n===void 0?void 0:n.config},ud=n=>{var e;return(e=el())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Xs(JSON.stringify(t)),Xs(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function il(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function $g(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function hd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Hg(){const n=Ie();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function dd(){return sd.NODE_ADMIN===!0}function zg(){try{return typeof indexedDB=="object"}catch{return!1}}function Gg(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg="FirebaseError";class it extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Kg,Object.setPrototypeOf(this,it.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zi.prototype.create)}}class Zi{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Qg(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new it(s,a,i)}}function Qg(n,e){return n.replace(Yg,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Yg=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(n){return JSON.parse(n)}function ae(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=Pi(Js(r[0])||""),t=Pi(Js(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Xg=function(n){const e=fd(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Jg=function(n){const e=fd(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Mn(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function sa(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Zs(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function er(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Kc(r)&&Kc(o)){if(!er(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Kc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)i[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(s<<5|s>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function em(n,e){const t=new tm(n,e);return t.subscribe.bind(t)}class tm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");nm(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=ko),s.error===void 0&&(s.error=ko),s.complete===void 0&&(s.complete=ko);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ko(){}function pd(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,y(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Fr=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(n){return n&&n._delegate?n._delegate:n}class tt{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new tl;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(om(e))try{this.getOrInitializeService({instanceIdentifier:Wt})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Wt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wt){return this.instances.has(e)}getOptions(e=Wt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:rm(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Wt){return this.component?this.component.multipleInstances?e:Wt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rm(n){return n===Wt?void 0:n}function om(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new sm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var x;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(x||(x={}));const lm={debug:x.DEBUG,verbose:x.VERBOSE,info:x.INFO,warn:x.WARN,error:x.ERROR,silent:x.SILENT},cm=x.INFO,um={[x.DEBUG]:"log",[x.VERBOSE]:"log",[x.INFO]:"info",[x.WARN]:"warn",[x.ERROR]:"error"},hm=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=um[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ur{constructor(e){this.name=e,this._logLevel=cm,this._logHandler=hm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in x))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,x.DEBUG,...e),this._logHandler(this,x.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,x.VERBOSE,...e),this._logHandler(this,x.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,x.INFO,...e),this._logHandler(this,x.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,x.WARN,...e),this._logHandler(this,x.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,x.ERROR,...e),this._logHandler(this,x.ERROR,...e)}}const dm=(n,e)=>e.some(t=>n instanceof t);let Qc,Yc;function fm(){return Qc||(Qc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pm(){return Yc||(Yc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _d=new WeakMap,ra=new WeakMap,gd=new WeakMap,No=new WeakMap,sl=new WeakMap;function _m(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(St(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&_d.set(t,n)}).catch(()=>{}),sl.set(e,n),e}function gm(n){if(ra.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});ra.set(n,e)}let oa={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ra.get(n);if(e==="objectStoreNames")return n.objectStoreNames||gd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return St(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function mm(n){oa=n(oa)}function ym(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Do(this),e,...t);return gd.set(i,e.sort?e.sort():[e]),St(i)}:pm().includes(n)?function(...e){return n.apply(Do(this),e),St(_d.get(this))}:function(...e){return St(n.apply(Do(this),e))}}function vm(n){return typeof n=="function"?ym(n):(n instanceof IDBTransaction&&gm(n),dm(n,fm())?new Proxy(n,oa):n)}function St(n){if(n instanceof IDBRequest)return _m(n);if(No.has(n))return No.get(n);const e=vm(n);return e!==n&&(No.set(n,e),sl.set(e,n)),e}const Do=n=>sl.get(n);function Em(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=St(o);return i&&o.addEventListener("upgradeneeded",l=>{i(St(o.result),l.oldVersion,l.newVersion,St(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Tm=["get","getKey","getAll","getAllKeys","count"],Im=["put","add","delete","clear"],Oo=new Map;function Xc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Oo.get(e))return Oo.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Im.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Tm.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return Oo.set(e,r),r}mm(n=>({...n,get:(e,t,i)=>Xc(e,t)||n.get(e,t,i),has:(e,t)=>!!Xc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Cm(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Cm(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const aa="@firebase/app",Jc="0.9.23";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=new Ur("@firebase/app"),Am="@firebase/app-compat",Rm="@firebase/analytics-compat",Sm="@firebase/analytics",Pm="@firebase/app-check-compat",bm="@firebase/app-check",km="@firebase/auth",Nm="@firebase/auth-compat",Dm="@firebase/database",Om="@firebase/database-compat",xm="@firebase/functions",Mm="@firebase/functions-compat",Vm="@firebase/installations",Lm="@firebase/installations-compat",Fm="@firebase/messaging",Um="@firebase/messaging-compat",Bm="@firebase/performance",qm="@firebase/performance-compat",Wm="@firebase/remote-config",jm="@firebase/remote-config-compat",$m="@firebase/storage",Hm="@firebase/storage-compat",zm="@firebase/firestore",Gm="@firebase/firestore-compat",Km="firebase",Qm="10.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la="[DEFAULT]",Ym={[aa]:"fire-core",[Am]:"fire-core-compat",[Sm]:"fire-analytics",[Rm]:"fire-analytics-compat",[bm]:"fire-app-check",[Pm]:"fire-app-check-compat",[km]:"fire-auth",[Nm]:"fire-auth-compat",[Dm]:"fire-rtdb",[Om]:"fire-rtdb-compat",[xm]:"fire-fn",[Mm]:"fire-fn-compat",[Vm]:"fire-iid",[Lm]:"fire-iid-compat",[Fm]:"fire-fcm",[Um]:"fire-fcm-compat",[Bm]:"fire-perf",[qm]:"fire-perf-compat",[Wm]:"fire-rc",[jm]:"fire-rc-compat",[$m]:"fire-gcs",[Hm]:"fire-gcs-compat",[zm]:"fire-fst",[Gm]:"fire-fst-compat","fire-js":"fire-js",[Km]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=new Map,ca=new Map;function Xm(n,e){try{n.container.addComponent(e)}catch(t){Xt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ht(n){const e=n.name;if(ca.has(e))return Xt.debug(`There were multiple attempts to register component ${e}.`),!1;ca.set(e,n);for(const t of tr.values())Xm(t,n);return!0}function Yn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Pt=new Zi("app","Firebase",Jm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new tt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=Qm;function md(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:la,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Pt.create("bad-app-name",{appName:String(s)});if(t||(t=cd()),!t)throw Pt.create("no-options");const r=tr.get(s);if(r){if(er(t,r.options)&&er(i,r.config))return r;throw Pt.create("duplicate-app",{appName:s})}const o=new am(s);for(const l of ca.values())o.addComponent(l);const a=new Zm(t,i,o);return tr.set(s,a),a}function es(n=la){const e=tr.get(n);if(!e&&n===la&&cd())return md();if(!e)throw Pt.create("no-app",{appName:n});return e}function Pe(n,e,t){var i;let s=(i=Ym[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xt.warn(a.join(" "));return}ht(new tt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey="firebase-heartbeat-database",ty=1,bi="firebase-heartbeat-store";let xo=null;function yd(){return xo||(xo=Em(ey,ty,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(bi)}}}).catch(n=>{throw Pt.create("idb-open",{originalErrorMessage:n.message})})),xo}async function ny(n){try{return await(await yd()).transaction(bi).objectStore(bi).get(vd(n))}catch(e){if(e instanceof it)Xt.warn(e.message);else{const t=Pt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xt.warn(t.message)}}}async function Zc(n,e){try{const i=(await yd()).transaction(bi,"readwrite");await i.objectStore(bi).put(e,vd(n)),await i.done}catch(t){if(t instanceof it)Xt.warn(t.message);else{const i=Pt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Xt.warn(i.message)}}}function vd(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy=1024,sy=30*24*60*60*1e3;class ry{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ay(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=eu();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const o=new Date(r.date).valueOf();return Date.now()-o<=sy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=eu(),{heartbeatsToSend:i,unsentEntries:s}=oy(this._heartbeatsCache.heartbeats),r=Xs(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function eu(){return new Date().toISOString().substring(0,10)}function oy(n,e=iy){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),tu(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),tu(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class ay{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zg()?Gg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ny(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Zc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Zc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function tu(n){return Xs(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(n){ht(new tt("platform-logger",e=>new wm(e),"PRIVATE")),ht(new tt("heartbeat",e=>new ry(e),"PRIVATE")),Pe(aa,Jc,n),Pe(aa,Jc,"esm2017"),Pe("fire-js","")}ly("");var cy="firebase",uy="10.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pe(cy,uy,"app");function rl(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function Ed(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hy=Ed,Td=new Zi("auth","Firebase",Ed());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=new Ur("@firebase/auth");function dy(n,...e){nr.logLevel<=x.WARN&&nr.warn(`Auth (${Lt}): ${n}`,...e)}function Ws(n,...e){nr.logLevel<=x.ERROR&&nr.error(`Auth (${Lt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(n,...e){throw ol(n,...e)}function Xe(n,...e){return ol(n,...e)}function fy(n,e,t){const i=Object.assign(Object.assign({},hy()),{[e]:t});return new Zi("auth","Firebase",i).create(e,{appName:n.name})}function ol(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Td.create(n,...e)}function b(n,e,...t){if(!n)throw ol(e,...t)}function rt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ws(e),new Error(e)}function ft(n,e){n||rt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function py(){return nu()==="http:"||nu()==="https:"}function nu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _y(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(py()||$g()||"connection"in navigator)?navigator.onLine:!0}function gy(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t){this.shortDelay=e,this.longDelay=t,ft(t>e,"Short delay should be less than long delay!"),this.isMobile=il()||hd()}get(){return _y()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(n,e){ft(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy=new ts(3e4,6e4);function ll(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Xn(n,e,t,i,s={}){return wd(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Qn(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),Id.fetch()(Cd(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function wd(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},my),e);try{const s=new Ey(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ks(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ks(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ks(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw ks(n,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw fy(n,u,c);dt(n,u)}}catch(s){if(s instanceof it)throw s;dt(n,"network-request-failed",{message:String(s)})}}async function vy(n,e,t,i,s={}){const r=await Xn(n,e,t,i,s);return"mfaPendingCredential"in r&&dt(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Cd(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?al(n.config,s):`${n.config.apiScheme}://${s}`}class Ey{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Xe(this.auth,"network-request-failed")),yy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ks(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=Xe(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ty(n,e){return Xn(n,"POST","/v1/accounts:delete",e)}async function Iy(n,e){return Xn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wy(n,e=!1){const t=Q(n),i=await t.getIdToken(e),s=cl(i);b(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:yi(Mo(s.auth_time)),issuedAtTime:yi(Mo(s.iat)),expirationTime:yi(Mo(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Mo(n){return Number(n)*1e3}function cl(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Ws("JWT malformed, contained fewer than 3 sections"),null;try{const s=Js(t);return s?JSON.parse(s):(Ws("Failed to decode base64 JWT payload"),null)}catch(s){return Ws("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Cy(n){const e=cl(n);return b(e,"internal-error"),b(typeof e.exp<"u","internal-error"),b(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ki(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof it&&Ay(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Ay({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=yi(this.lastLoginAt),this.creationTime=yi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ir(n){var e;const t=n.auth,i=await n.getIdToken(),s=await ki(n,Iy(t,{idToken:i}));b(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?by(r.providerUserInfo):[],a=Py(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Ad(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function Sy(n){const e=Q(n);await ir(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Py(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function by(n){return n.map(e=>{var{providerId:t}=e,i=rl(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ky(n,e){const t=await wd(n,{},async()=>{const i=Qn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=Cd(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Id.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Ny(n,e){return Xn(n,"POST","/v2/accounts:revokeToken",ll(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(typeof e.idToken<"u","internal-error"),b(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Cy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return b(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await ky(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new Ni;return i&&(b(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(b(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(b(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ni,this.toJSON())}_performRefresh(){return rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(n,e){b(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Kt{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=rl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ry(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ad(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await ki(this,this.stsTokenManager.getToken(this.auth,e));return b(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return wy(this,e)}reload(){return Sy(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Kt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await ir(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ki(this,Ty(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,l,c,u;const h=(i=t.displayName)!==null&&i!==void 0?i:void 0,d=(s=t.email)!==null&&s!==void 0?s:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=t.photoURL)!==null&&o!==void 0?o:void 0,v=(a=t.tenantId)!==null&&a!==void 0?a:void 0,m=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,A=(c=t.createdAt)!==null&&c!==void 0?c:void 0,L=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:B,emailVerified:W,isAnonymous:Ne,providerData:De,stsTokenManager:qt}=t;b(B&&qt,e,"internal-error");const gn=Ni.fromJSON(this.name,qt);b(typeof B=="string",e,"internal-error"),Tt(h,e.name),Tt(d,e.name),b(typeof W=="boolean",e,"internal-error"),b(typeof Ne=="boolean",e,"internal-error"),Tt(f,e.name),Tt(p,e.name),Tt(v,e.name),Tt(m,e.name),Tt(A,e.name),Tt(L,e.name);const ri=new Kt({uid:B,auth:e,email:d,emailVerified:W,displayName:h,isAnonymous:Ne,photoURL:p,phoneNumber:f,tenantId:v,stsTokenManager:gn,createdAt:A,lastLoginAt:L});return De&&Array.isArray(De)&&(ri.providerData=De.map(bs=>Object.assign({},bs))),m&&(ri._redirectEventId=m),ri}static async _fromIdTokenResponse(e,t,i=!1){const s=new Ni;s.updateFromServerResponse(t);const r=new Kt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await ir(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu=new Map;function ot(n){ft(n instanceof Function,"Expected a class definition");let e=iu.get(n);return e?(ft(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,iu.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Rd.type="NONE";const su=Rd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(n,e,t){return`firebase:${n}:${e}:${t}`}class Rn{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=js(this.userKey,s.apiKey,r),this.fullPersistenceKey=js("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Rn(ot(su),e,i);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||ot(su);const o=js(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){const h=Kt._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Rn(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Rn(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Sd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Nd(e))return"Blackberry";if(Dd(e))return"Webos";if(ul(e))return"Safari";if((e.includes("chrome/")||Pd(e))&&!e.includes("edge/"))return"Chrome";if(kd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Sd(n=Ie()){return/firefox\//i.test(n)}function ul(n=Ie()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pd(n=Ie()){return/crios\//i.test(n)}function bd(n=Ie()){return/iemobile/i.test(n)}function kd(n=Ie()){return/android/i.test(n)}function Nd(n=Ie()){return/blackberry/i.test(n)}function Dd(n=Ie()){return/webos/i.test(n)}function Br(n=Ie()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Dy(n=Ie()){var e;return Br(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Oy(){return Hg()&&document.documentMode===10}function Od(n=Ie()){return Br(n)||kd(n)||Dd(n)||Nd(n)||/windows phone/i.test(n)||bd(n)}function xy(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(n,e=[]){let t;switch(n){case"Browser":t=ru(Ie());break;case"Worker":t=`${ru(Ie())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Lt}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vy(n,e={}){return Xn(n,"GET","/v2/passwordPolicy",ll(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly=6;class Fy{constructor(e){var t,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Ly,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ou(this),this.idTokenSubscription=new ou(this),this.beforeStateQueue=new My(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Td,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ot(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Rn.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ir(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Q(e):null;return t&&b(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ot(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Vy(this),t=new Fy(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zi("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Ny(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ot(e)||this._popupRedirectResolver;b(t,this,"argument-error"),this.redirectPersistenceManager=await Rn.create(this,[ot(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(b(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&dy(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function hl(n){return Q(n)}class ou{constructor(e){this.auth=e,this.observer=null,this.addObserver=em(t=>this.observer=t)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function qy(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=Xe("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",By().appendChild(i)})}function Wy(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy(n,e){const t=Yn(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(er(r,e??{}))return s;dt(s,"already-initialized")}return t.initialize({options:e})}function $y(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(ot);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Hy(n,e,t){const i=hl(n);b(i._canInitEmulator,i,"emulator-config-failed"),b(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),r=Md(e),{host:o,port:a}=zy(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Gy()}function Md(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function zy(n){const e=Md(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:au(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:au(o)}}}function au(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Gy(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return rt("not implemented")}_getIdTokenResponse(e){return rt("not implemented")}_linkToIdToken(e,t){return rt("not implemented")}_getReauthenticationResolver(e){return rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sn(n,e){return vy(n,"POST","/v1/accounts:signInWithIdp",ll(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky="http://localhost";class Jt extends Vd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Jt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):dt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=rl(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Jt(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Sn(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Sn(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Sn(e,t)}buildRequest(){const e={requestUri:Ky,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Qn(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns extends Ld{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends ns{constructor(){super("facebook.com")}static credential(e){return Jt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return It.credential(e.oauthAccessToken)}catch{return null}}}It.FACEBOOK_SIGN_IN_METHOD="facebook.com";It.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends ns{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Jt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return wt.credential(t,i)}catch{return null}}}wt.GOOGLE_SIGN_IN_METHOD="google.com";wt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends ns{constructor(){super("github.com")}static credential(e){return Jt._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ct.credential(e.oauthAccessToken)}catch{return null}}}Ct.GITHUB_SIGN_IN_METHOD="github.com";Ct.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends ns{constructor(){super("twitter.com")}static credential(e,t){return Jt._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return At.credential(t,i)}catch{return null}}}At.TWITTER_SIGN_IN_METHOD="twitter.com";At.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await Kt._fromIdTokenResponse(e,i,s),o=lu(i);return new Vn({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=lu(i);return new Vn({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function lu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends it{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,sr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new sr(e,t,i,s)}}function Fd(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?sr._fromErrorAndOperation(n,r,e,i):r})}async function Qy(n,e,t=!1){const i=await ki(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Vn._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yy(n,e,t=!1){const{auth:i}=n,s="reauthenticate";try{const r=await ki(n,Fd(i,s,e,n),t);b(r.idToken,i,"internal-error");const o=cl(r.idToken);b(o,i,"internal-error");const{sub:a}=o;return b(n.uid===a,i,"user-mismatch"),Vn._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&dt(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xy(n,e,t=!1){const i="signIn",s=await Fd(n,i,e),r=await Vn._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}function Jy(n,e,t,i){return Q(n).onIdTokenChanged(e,t,i)}function Zy(n,e,t){return Q(n).beforeAuthStateChanged(e,t)}const rr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(rr,"1"),this.storage.removeItem(rr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ev(){const n=Ie();return ul(n)||Br(n)}const tv=1e3,nv=10;class Bd extends Ud{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ev()&&xy(),this.fallbackToPolling=Od(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Oy()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,nv):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},tv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Bd.type="LOCAL";const iv=Bd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd extends Ud{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}qd.type="SESSION";const Wd=qd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new qr(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await sv(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=dl("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return window}function ov(n){Je().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(){return typeof Je().WorkerGlobalScope<"u"&&typeof Je().importScripts=="function"}async function av(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lv(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function cv(){return jd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d="firebaseLocalStorageDb",uv=1,or="firebaseLocalStorage",Hd="fbase_key";class is{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Wr(n,e){return n.transaction([or],e?"readwrite":"readonly").objectStore(or)}function hv(){const n=indexedDB.deleteDatabase($d);return new is(n).toPromise()}function ha(){const n=indexedDB.open($d,uv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(or,{keyPath:Hd})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(or)?e(i):(i.close(),await hv(),e(await ha()))})})}async function cu(n,e,t){const i=Wr(n,!0).put({[Hd]:e,value:t});return new is(i).toPromise()}async function dv(n,e){const t=Wr(n,!1).get(e),i=await new is(t).toPromise();return i===void 0?null:i.value}function uu(n,e){const t=Wr(n,!0).delete(e);return new is(t).toPromise()}const fv=800,pv=3;class zd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ha(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>pv)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qr._getInstance(cv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await av(),!this.activeServiceWorker)return;this.sender=new rv(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ha();return await cu(e,rr,"1"),await uu(e,rr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>cu(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>dv(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>uu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Wr(s,!1).getAll();return new is(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zd.type="LOCAL";const _v=zd;new ts(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(n,e){return e?ot(e):(b(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl extends Vd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Sn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Sn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Sn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function mv(n){return Xy(n.auth,new fl(n),n.bypassAuthState)}function yv(n){const{auth:e,user:t}=n;return b(t,e,"internal-error"),Yy(t,new fl(n),n.bypassAuthState)}async function vv(n){const{auth:e,user:t}=n;return b(t,e,"internal-error"),Qy(t,new fl(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mv;case"linkViaPopup":case"linkViaRedirect":return vv;case"reauthViaPopup":case"reauthViaRedirect":return yv;default:dt(this.auth,"internal-error")}}resolve(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev=new ts(2e3,1e4);class In extends Gd{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,In.currentPopupAction&&In.currentPopupAction.cancel(),In.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){ft(this.filter.length===1,"Popup operations only handle one event");const e=dl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,In.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ev.get())};e()}}In.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv="pendingRedirect",$s=new Map;class Iv extends Gd{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=$s.get(this.auth._key());if(!e){try{const i=await wv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}$s.set(this.auth._key(),e)}return this.bypassAuthState||$s.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wv(n,e){const t=Rv(e),i=Av(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function Cv(n,e){$s.set(n._key(),e)}function Av(n){return ot(n._redirectPersistence)}function Rv(n){return js(Tv,n.config.apiKey,n.name)}async function Sv(n,e,t=!1){const i=hl(n),s=gv(i,e),o=await new Iv(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=10*60*1e3;class bv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Kd(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Xe(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Pv&&this.cachedEventUids.clear(),this.cachedEventUids.has(hu(e))}saveEventToCache(e){this.cachedEventUids.add(hu(e)),this.lastProcessedEventTime=Date.now()}}function hu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Kd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Kd(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nv(n,e={}){return Xn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ov=/^https?/;async function xv(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Nv(n);for(const t of e)try{if(Mv(t))return}catch{}dt(n,"unauthorized-domain")}function Mv(n){const e=ua(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!Ov.test(t))return!1;if(Dv.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv=new ts(3e4,6e4);function du(){const n=Je().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Lv(n){return new Promise((e,t)=>{var i,s,r;function o(){du(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{du(),t(Xe(n,"network-request-failed"))},timeout:Vv.get()})}if(!((s=(i=Je().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Je().gapi)===null||r===void 0)&&r.load)o();else{const a=Wy("iframefcb");return Je()[a]=()=>{gapi.load?o():t(Xe(n,"network-request-failed"))},qy(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Hs=null,e})}let Hs=null;function Fv(n){return Hs=Hs||Lv(n),Hs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv=new ts(5e3,15e3),Bv="__/auth/iframe",qv="emulator/auth/iframe",Wv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $v(n){const e=n.config;b(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?al(e,qv):`https://${n.config.authDomain}/${Bv}`,i={apiKey:e.apiKey,appName:n.name,v:Lt},s=jv.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${Qn(i).slice(1)}`}async function Hv(n){const e=await Fv(n),t=Je().gapi;return b(t,n,"internal-error"),e.open({where:document.body,url:$v(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Wv,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Xe(n,"network-request-failed"),a=Je().setTimeout(()=>{r(o)},Uv.get());function l(){Je().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Gv=500,Kv=600,Qv="_blank",Yv="http://localhost";class fu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Xv(n,e,t,i=Gv,s=Kv){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},zv),{width:i.toString(),height:s.toString(),top:r,left:o}),c=Ie().toLowerCase();t&&(a=Pd(c)?Qv:t),Sd(c)&&(e=e||Yv,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(Dy(c)&&a!=="_self")return Jv(e||"",a),new fu(null);const h=window.open(e||"",a,u);b(h,n,"popup-blocked");try{h.focus()}catch{}return new fu(h)}function Jv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv="__/auth/handler",eE="emulator/auth/handler",tE=encodeURIComponent("fac");async function pu(n,e,t,i,s,r){b(n.config.authDomain,n,"auth-domain-config-required"),b(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Lt,eventId:s};if(e instanceof Ld){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",sa(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof ns){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await n._getAppCheckToken(),c=l?`#${tE}=${encodeURIComponent(l)}`:"";return`${nE(n)}?${Qn(a).slice(1)}${c}`}function nE({config:n}){return n.emulator?al(n,eE):`https://${n.authDomain}/${Zv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo="webStorageSupport";class iE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wd,this._completeRedirectFn=Sv,this._overrideRedirectResult=Cv}async _openPopup(e,t,i,s){var r;ft((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await pu(e,t,i,ua(),s);return Xv(e,o,dl())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await pu(e,t,i,ua(),s);return ov(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(ft(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Hv(e),i=new bv(e);return t.register("authEvent",s=>(b(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Vo,{type:Vo},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Vo];o!==void 0&&t(!!o),dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=xv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Od()||ul()||Br()}}const sE=iE;var _u="@firebase/auth",gu="1.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function aE(n){ht(new tt("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;b(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xd(n)},c=new Uy(i,s,r,l);return $y(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),ht(new tt("auth-internal",e=>{const t=hl(e.getProvider("auth").getImmediate());return(i=>new rE(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pe(_u,gu,oE(n)),Pe(_u,gu,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE=5*60,cE=ud("authIdTokenMaxAge")||lE;let mu=null;const uE=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>cE)return;const s=t==null?void 0:t.token;mu!==s&&(mu=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function hE(n=es()){const e=Yn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=jy(n,{popupRedirectResolver:sE,persistence:[_v,iv,Wd]}),i=ud("authTokenSyncURL");if(i){const r=uE(i);Zy(t,r,()=>r(t.currentUser)),Jy(t,o=>r(o))}const s=ld("auth");return s&&Hy(t,`http://${s}`),t}aE("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e,t,i){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=t.getImmediate({optional:!0}),this.auth||e.get().then(s=>this.auth=s,()=>{}),this.messaging||t.get().then(s=>this.messaging=s,()=>{}),this.appCheck||i.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),i=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:t,messagingToken:i,appCheckToken:s}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da="us-central1";class fE{constructor(e,t,i,s,r=da,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new dE(t,i,s),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(r);this.customDomain=a.origin,this.region=da}catch{this.customDomain=null,this.region=r}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function pE(n,e,t){n.emulatorOrigin=`http://${e}:${t}`}const yu="@firebase/functions",vu="0.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E="auth-internal",gE="app-check-internal",mE="messaging-internal";function yE(n,e){const t=(i,{instanceIdentifier:s})=>{const r=i.getProvider("app").getImmediate(),o=i.getProvider(_E),a=i.getProvider(mE),l=i.getProvider(gE);return new fE(r,o,a,l,s,n)};ht(new tt(Qd,t,"PUBLIC").setMultipleInstances(!0)),Pe(yu,vu,e),Pe(yu,vu,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(n=es(),e=da){const i=Yn(Q(n),Qd).getImmediate({identifier:e}),s=Lr("functions");return s&&EE(i,...s),i}function EE(n,e,t){pE(Q(n),e,t)}yE(fetch.bind(self));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd="firebasestorage.googleapis.com",Xd="storageBucket",TE=2*60*1e3,IE=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze extends it{constructor(e,t,i=0){super(Lo(e),`Firebase Storage: ${t} (${Lo(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ze.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Lo(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var je;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(je||(je={}));function Lo(n){return"storage/"+n}function wE(){const n="An unknown error occurred, please check the error payload for server response.";return new ze(je.UNKNOWN,n)}function CE(){return new ze(je.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function AE(){return new ze(je.CANCELED,"User canceled the upload/download.")}function RE(n){return new ze(je.INVALID_URL,"Invalid URL '"+n+"'.")}function SE(n){return new ze(je.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function PE(){return new ze(je.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Xd+"' property when initializing the app?")}function fa(n){return new ze(je.INVALID_ARGUMENT,n)}function Jd(){return new ze(je.APP_DELETED,"The Firebase app was deleted.")}function bE(n){return new ze(je.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=Le.makeFromUrl(e,t)}catch{return new Le(e,"")}if(i.path==="")return i;throw SE(e)}static makeFromUrl(e,t){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(W){W.path.charAt(W.path.length-1)==="/"&&(W.path_=W.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(W){W.path_=decodeURIComponent(W.path)}const u="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),p={bucket:1,path:3},v=t===Yd?"(?:storage.googleapis.com|storage.cloud.google.com)":t,m="([^?#]*)",A=new RegExp(`^https?://${v}/${s}/${m}`,"i"),B=[{regex:a,indices:l,postModify:r},{regex:f,indices:p,postModify:c},{regex:A,indices:{bucket:1,path:2},postModify:c}];for(let W=0;W<B.length;W++){const Ne=B[W],De=Ne.regex.exec(e);if(De){const qt=De[Ne.indices.bucket];let gn=De[Ne.indices.path];gn||(gn=""),i=new Le(qt,gn),Ne.postModify(i);break}}if(i==null)throw RE(e);return i}}class kE{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NE(n,e,t){let i=1,s=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...m){c||(c=!0,e.apply(null,m))}function h(m){s=setTimeout(()=>{s=null,n(f,l())},m)}function d(){r&&clearTimeout(r)}function f(m,...A){if(c){d();return}if(m){d(),u.call(null,m,...A);return}if(l()||o){d(),u.call(null,m,...A);return}i<64&&(i*=2);let B;a===1?(a=2,B=0):B=(i+Math.random())*1e3,h(B)}let p=!1;function v(m){p||(p=!0,d(),!c&&(s!==null?(m||(a=2),clearTimeout(s),h(0)):m||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,v(!0)},t),v}function DE(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OE(n){return n!==void 0}function Eu(n,e,t,i){if(i<e)throw fa(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw fa(`Invalid value for '${n}'. Expected ${t} or less.`)}function xE(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const s=e(i)+"="+e(n[i]);t=t+s+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ar;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(ar||(ar={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,r=e.indexOf(n)!==-1;return t||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e,t,i,s,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Ns(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===ar.NO_ERROR,l=r.getStatus();if(!a||ME(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===ar.ABORT;i(!1,new Ns(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new Ns(c,r))})},t=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());OE(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=wE();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Jd():AE();o(l)}else{const l=CE();o(l)}};this.canceled_?t(!1,new Ns(!1,null,!0)):this.backoffId_=NE(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&DE(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ns{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function LE(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function FE(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function UE(n,e){e&&(n["X-Firebase-GMPID"]=e)}function BE(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function qE(n,e,t,i,s,r,o=!0){const a=xE(n.urlParams),l=n.url+a,c=Object.assign({},n.headers);return UE(c,e),LE(c,t),FE(c,r),BE(c,i),new VE(l,n.method,c,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WE(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function jE(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function $E(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,t){this._service=e,t instanceof Le?this._location=t:this._location=Le.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Zt(e,t)}get root(){const e=new Le(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return $E(this._location.path)}get storage(){return this._service}get parent(){const e=WE(this._location.path);if(e===null)return null;const t=new Le(this._location.bucket,e);return new Zt(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw bE(e)}}function HE(n,e){const t=jE(n._location.path,e),i=new Le(n._location.bucket,t);return new Zt(n.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(n){return/^[A-Za-z]+:\/\//.test(n)}function GE(n,e){return new Zt(n,e)}function Zd(n,e){if(n instanceof pl){const t=n;if(t._bucket==null)throw PE();const i=new Zt(t,t._bucket);return e!=null?Zd(i,e):i}else return e!==void 0?HE(n,e):n}function KE(n,e){if(e&&zE(e)){if(n instanceof pl)return GE(n,e);throw fa("To use ref(service, url), the first argument must be a Storage instance.")}else return Zd(n,e)}function Tu(n,e){const t=e==null?void 0:e[Xd];return t==null?null:Le.makeFromBucketSpec(t,n)}function QE(n,e,t,i={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=i;s&&(n._overrideAuthToken=typeof s=="string"?s:nl(s,n.app.options.projectId))}class pl{constructor(e,t,i,s,r){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=Yd,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=TE,this._maxUploadRetryTime=IE,this._requests=new Set,s!=null?this._bucket=Le.makeFromBucketSpec(s,this._host):this._bucket=Tu(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Le.makeFromBucketSpec(this._url,e):this._bucket=Tu(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Eu("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Eu("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Zt(this,e)}_makeRequest(e,t,i,s,r=!0){if(this._deleted)return new kE(Jd());{const o=qE(e,this._appId,i,s,t,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,s).getPromise()}}const Iu="@firebase/storage",wu="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef="storage";function YE(n,e){return n=Q(n),KE(n,e)}function XE(n=es(),e){n=Q(n);const i=Yn(n,ef).getImmediate({identifier:e}),s=Lr("storage");return s&&JE(i,...s),i}function JE(n,e,t,i={}){QE(n,e,t,i)}function ZE(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new pl(t,i,s,e,Lt)}function eT(){ht(new tt(ef,ZE,"PUBLIC").setMultipleInstances(!0)),Pe(Iu,wu,""),Pe(Iu,wu,"esm2017")}eT();var tT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},E,_l=_l||{},S=tT||self;function jr(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function ss(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function nT(n){return Object.prototype.hasOwnProperty.call(n,Fo)&&n[Fo]||(n[Fo]=++iT)}var Fo="closure_uid_"+(1e9*Math.random()>>>0),iT=0;function sT(n,e,t){return n.call.apply(n.bind,arguments)}function rT(n,e,t){if(!n)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),n.apply(e,s)}}return function(){return n.apply(e,arguments)}}function ve(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ve=sT:ve=rT,ve.apply(null,arguments)}function Ds(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var i=t.slice();return i.push.apply(i,arguments),n.apply(this,i)}}function ce(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function Ft(){this.s=this.s,this.o=this.o}var oT=0;Ft.prototype.s=!1;Ft.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),oT!=0)&&nT(this)};Ft.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const tf=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function gl(n){const e=n.length;if(0<e){const t=Array(e);for(let i=0;i<e;i++)t[i]=n[i];return t}return[]}function Cu(n,e){for(let t=1;t<arguments.length;t++){const i=arguments[t];if(jr(i)){const s=n.length||0,r=i.length||0;n.length=s+r;for(let o=0;o<r;o++)n[s+o]=i[o]}else n.push(i)}}function Ee(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Ee.prototype.h=function(){this.defaultPrevented=!0};var aT=function(){if(!S.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{S.addEventListener("test",()=>{},e),S.removeEventListener("test",()=>{},e)}catch{}return n}();function Di(n){return/^[\s\xa0]*$/.test(n)}function $r(){var n=S.navigator;return n&&(n=n.userAgent)?n:""}function Ge(n){return $r().indexOf(n)!=-1}function ml(n){return ml[" "](n),n}ml[" "]=function(){};function lT(n,e){var t=eI;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var cT=Ge("Opera"),Ln=Ge("Trident")||Ge("MSIE"),nf=Ge("Edge"),pa=nf||Ln,sf=Ge("Gecko")&&!($r().toLowerCase().indexOf("webkit")!=-1&&!Ge("Edge"))&&!(Ge("Trident")||Ge("MSIE"))&&!Ge("Edge"),uT=$r().toLowerCase().indexOf("webkit")!=-1&&!Ge("Edge");function rf(){var n=S.document;return n?n.documentMode:void 0}var _a;e:{var Uo="",Bo=function(){var n=$r();if(sf)return/rv:([^\);]+)(\)|;)/.exec(n);if(nf)return/Edge\/([\d\.]+)/.exec(n);if(Ln)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(uT)return/WebKit\/(\S+)/.exec(n);if(cT)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Bo&&(Uo=Bo?Bo[1]:""),Ln){var qo=rf();if(qo!=null&&qo>parseFloat(Uo)){_a=String(qo);break e}}_a=Uo}var ga;if(S.document&&Ln){var Au=rf();ga=Au||parseInt(_a,10)||void 0}else ga=void 0;var hT=ga;function Oi(n,e){if(Ee.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,i=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(sf){e:{try{ml(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:dT[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Oi.$.h.call(this)}}ce(Oi,Ee);var dT={2:"touch",3:"pen",4:"mouse"};Oi.prototype.h=function(){Oi.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var rs="closure_listenable_"+(1e6*Math.random()|0),fT=0;function pT(n,e,t,i,s){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!i,this.la=s,this.key=++fT,this.fa=this.ia=!1}function Hr(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function yl(n,e,t){for(const i in n)e.call(t,n[i],i,n)}function _T(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function of(n){const e={};for(const t in n)e[t]=n[t];return e}const Ru="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function af(n,e){let t,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(t in i)n[t]=i[t];for(let r=0;r<Ru.length;r++)t=Ru[r],Object.prototype.hasOwnProperty.call(i,t)&&(n[t]=i[t])}}function zr(n){this.src=n,this.g={},this.h=0}zr.prototype.add=function(n,e,t,i,s){var r=n.toString();n=this.g[r],n||(n=this.g[r]=[],this.h++);var o=ya(n,e,i,s);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new pT(e,this.src,r,!!i,s),e.ia=t,n.push(e)),e};function ma(n,e){var t=e.type;if(t in n.g){var i=n.g[t],s=tf(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Hr(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function ya(n,e,t,i){for(var s=0;s<n.length;++s){var r=n[s];if(!r.fa&&r.listener==e&&r.capture==!!t&&r.la==i)return s}return-1}var vl="closure_lm_"+(1e6*Math.random()|0),Wo={};function lf(n,e,t,i,s){if(i&&i.once)return uf(n,e,t,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)lf(n,e[r],t,i,s);return null}return t=Il(t),n&&n[rs]?n.O(e,t,ss(i)?!!i.capture:!!i,s):cf(n,e,t,!1,i,s)}function cf(n,e,t,i,s,r){if(!e)throw Error("Invalid event type");var o=ss(s)?!!s.capture:!!s,a=Tl(n);if(a||(n[vl]=a=new zr(n)),t=a.add(e,t,i,o,r),t.proxy)return t;if(i=gT(),t.proxy=i,i.src=n,i.listener=t,n.addEventListener)aT||(s=o),s===void 0&&(s=!1),n.addEventListener(e.toString(),i,s);else if(n.attachEvent)n.attachEvent(df(e.toString()),i);else if(n.addListener&&n.removeListener)n.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return t}function gT(){function n(t){return e.call(n.src,n.listener,t)}const e=mT;return n}function uf(n,e,t,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)uf(n,e[r],t,i,s);return null}return t=Il(t),n&&n[rs]?n.P(e,t,ss(i)?!!i.capture:!!i,s):cf(n,e,t,!0,i,s)}function hf(n,e,t,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)hf(n,e[r],t,i,s);else i=ss(i)?!!i.capture:!!i,t=Il(t),n&&n[rs]?(n=n.i,e=String(e).toString(),e in n.g&&(r=n.g[e],t=ya(r,t,i,s),-1<t&&(Hr(r[t]),Array.prototype.splice.call(r,t,1),r.length==0&&(delete n.g[e],n.h--)))):n&&(n=Tl(n))&&(e=n.g[e.toString()],n=-1,e&&(n=ya(e,t,i,s)),(t=-1<n?e[n]:null)&&El(t))}function El(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[rs])ma(e.i,n);else{var t=n.type,i=n.proxy;e.removeEventListener?e.removeEventListener(t,i,n.capture):e.detachEvent?e.detachEvent(df(t),i):e.addListener&&e.removeListener&&e.removeListener(i),(t=Tl(e))?(ma(t,n),t.h==0&&(t.src=null,e[vl]=null)):Hr(n)}}}function df(n){return n in Wo?Wo[n]:Wo[n]="on"+n}function mT(n,e){if(n.fa)n=!0;else{e=new Oi(e,this);var t=n.listener,i=n.la||n.src;n.ia&&El(n),n=t.call(i,e)}return n}function Tl(n){return n=n[vl],n instanceof zr?n:null}var jo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Il(n){return typeof n=="function"?n:(n[jo]||(n[jo]=function(e){return n.handleEvent(e)}),n[jo])}function le(){Ft.call(this),this.i=new zr(this),this.S=this,this.J=null}ce(le,Ft);le.prototype[rs]=!0;le.prototype.removeEventListener=function(n,e,t,i){hf(this,n,e,t,i)};function de(n,e){var t,i=n.J;if(i)for(t=[];i;i=i.J)t.push(i);if(n=n.S,i=e.type||e,typeof e=="string")e=new Ee(e,n);else if(e instanceof Ee)e.target=e.target||n;else{var s=e;e=new Ee(i,n),af(e,s)}if(s=!0,t)for(var r=t.length-1;0<=r;r--){var o=e.g=t[r];s=Os(o,i,!0,e)&&s}if(o=e.g=n,s=Os(o,i,!0,e)&&s,s=Os(o,i,!1,e)&&s,t)for(r=0;r<t.length;r++)o=e.g=t[r],s=Os(o,i,!1,e)&&s}le.prototype.N=function(){if(le.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],i=0;i<t.length;i++)Hr(t[i]);delete n.g[e],n.h--}}this.J=null};le.prototype.O=function(n,e,t,i){return this.i.add(String(n),e,!1,t,i)};le.prototype.P=function(n,e,t,i){return this.i.add(String(n),e,!0,t,i)};function Os(n,e,t,i){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==t){var a=o.listener,l=o.la||o.src;o.ia&&ma(n.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var wl=S.JSON.stringify;class yT{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function vT(){var n=Cl;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class ET{constructor(){this.h=this.g=null}add(e,t){const i=ff.get();i.set(e,t),this.h?this.h.next=i:this.g=i,this.h=i}}var ff=new yT(()=>new TT,n=>n.reset());class TT{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function IT(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function wT(n){S.setTimeout(()=>{throw n},0)}let xi,Mi=!1,Cl=new ET,pf=()=>{const n=S.Promise.resolve(void 0);xi=()=>{n.then(CT)}};var CT=()=>{for(var n;n=vT();){try{n.h.call(n.g)}catch(t){wT(t)}var e=ff;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Mi=!1};function Gr(n,e){le.call(this),this.h=n||1,this.g=e||S,this.j=ve(this.qb,this),this.l=Date.now()}ce(Gr,le);E=Gr.prototype;E.ga=!1;E.T=null;E.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),de(this,"tick"),this.ga&&(Al(this),this.start()))}};E.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Al(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}E.N=function(){Gr.$.N.call(this),Al(this),delete this.g};function Rl(n,e,t){if(typeof n=="function")t&&(n=ve(n,t));else if(n&&typeof n.handleEvent=="function")n=ve(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:S.setTimeout(n,e||0)}function _f(n){n.g=Rl(()=>{n.g=null,n.i&&(n.i=!1,_f(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class AT extends Ft{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:_f(this)}N(){super.N(),this.g&&(S.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vi(n){Ft.call(this),this.h=n,this.g={}}ce(Vi,Ft);var Su=[];function gf(n,e,t,i){Array.isArray(t)||(t&&(Su[0]=t.toString()),t=Su);for(var s=0;s<t.length;s++){var r=lf(e,t[s],i||n.handleEvent,!1,n.h||n);if(!r)break;n.g[r.key]=r}}function mf(n){yl(n.g,function(e,t){this.g.hasOwnProperty(t)&&El(e)},n),n.g={}}Vi.prototype.N=function(){Vi.$.N.call(this),mf(this)};Vi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Kr(){this.g=!0}Kr.prototype.Ea=function(){this.g=!1};function RT(n,e,t,i,s,r){n.info(function(){if(n.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+t+`
`+o})}function ST(n,e,t,i,s,r,o){n.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+t+`
`+r+" "+o})}function wn(n,e,t,i){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+bT(n,t)+(i?" "+i:"")})}function PT(n,e){n.info(function(){return"TIMEOUT: "+e})}Kr.prototype.info=function(){};function bT(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var i=t[n];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return wl(t)}catch{return e}}var cn={},Pu=null;function Qr(){return Pu=Pu||new le}cn.Ta="serverreachability";function yf(n){Ee.call(this,cn.Ta,n)}ce(yf,Ee);function Li(n){const e=Qr();de(e,new yf(e))}cn.STAT_EVENT="statevent";function vf(n,e){Ee.call(this,cn.STAT_EVENT,n),this.stat=e}ce(vf,Ee);function Ce(n){const e=Qr();de(e,new vf(e,n))}cn.Ua="timingevent";function Ef(n,e){Ee.call(this,cn.Ua,n),this.size=e}ce(Ef,Ee);function os(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return S.setTimeout(function(){n()},e)}var Yr={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Tf={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Sl(){}Sl.prototype.h=null;function bu(n){return n.h||(n.h=n.i())}function If(){}var as={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Pl(){Ee.call(this,"d")}ce(Pl,Ee);function bl(){Ee.call(this,"c")}ce(bl,Ee);var va;function Xr(){}ce(Xr,Sl);Xr.prototype.g=function(){return new XMLHttpRequest};Xr.prototype.i=function(){return{}};va=new Xr;function ls(n,e,t,i){this.l=n,this.j=e,this.m=t,this.W=i||1,this.U=new Vi(this),this.P=kT,n=pa?125:void 0,this.V=new Gr(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new wf}function wf(){this.i=null,this.g="",this.h=!1}var kT=45e3,Ea={},lr={};E=ls.prototype;E.setTimeout=function(n){this.P=n};function Ta(n,e,t){n.L=1,n.v=Zr(pt(e)),n.s=t,n.S=!0,Cf(n,null)}function Cf(n,e){n.G=Date.now(),cs(n),n.A=pt(n.v);var t=n.A,i=n.W;Array.isArray(i)||(i=[String(i)]),Df(t.i,"t",i),n.C=0,t=n.l.J,n.h=new wf,n.g=Zf(n.l,t?e:null,!n.s),0<n.O&&(n.M=new AT(ve(n.Pa,n,n.g),n.O)),gf(n.U,n.g,"readystatechange",n.nb),e=n.I?of(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),Li(),RT(n.j,n.u,n.A,n.m,n.W,n.s)}E.nb=function(n){n=n.target;const e=this.M;e&&Ke(n)==3?e.l():this.Pa(n)};E.Pa=function(n){try{if(n==this.g)e:{const u=Ke(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||pa||this.g&&(this.h.h||this.g.ja()||Ou(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Li(3):Li(2)),Jr(this);var t=this.g.da();this.ca=t;t:if(Af(this)){var i=Ou(this.g);n="";var s=i.length,r=Ke(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$t(this),vi(this);var o="";break t}this.h.i=new S.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,n+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,ST(this.j,this.u,this.A,this.m,this.W,u,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Di(a)){var c=a;break t}}c=null}if(t=c)wn(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ia(this,t);else{this.i=!1,this.o=3,Ce(12),$t(this),vi(this);break e}}this.S?(Rf(this,u,o),pa&&this.i&&u==3&&(gf(this.U,this.V,"tick",this.mb),this.V.start())):(wn(this.j,this.m,o,null),Ia(this,o)),u==4&&$t(this),this.i&&!this.J&&(u==4?Qf(this.l,this):(this.i=!1,cs(this)))}else XT(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ce(12)):(this.o=0,Ce(13)),$t(this),vi(this)}}}catch{}finally{}};function Af(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function Rf(n,e,t){let i=!0,s;for(;!n.J&&n.C<t.length;)if(s=NT(n,t),s==lr){e==4&&(n.o=4,Ce(14),i=!1),wn(n.j,n.m,null,"[Incomplete Response]");break}else if(s==Ea){n.o=4,Ce(15),wn(n.j,n.m,t,"[Invalid Chunk]"),i=!1;break}else wn(n.j,n.m,s,null),Ia(n,s);Af(n)&&s!=lr&&s!=Ea&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Ce(16),i=!1),n.i=n.i&&i,i?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),Ml(e),e.M=!0,Ce(11))):(wn(n.j,n.m,t,"[Invalid Chunked Response]"),$t(n),vi(n))}E.mb=function(){if(this.g){var n=Ke(this.g),e=this.g.ja();this.C<e.length&&(Jr(this),Rf(this,n,e),this.i&&n!=4&&cs(this))}};function NT(n,e){var t=n.C,i=e.indexOf(`
`,t);return i==-1?lr:(t=Number(e.substring(t,i)),isNaN(t)?Ea:(i+=1,i+t>e.length?lr:(e=e.slice(i,i+t),n.C=i+t,e)))}E.cancel=function(){this.J=!0,$t(this)};function cs(n){n.Y=Date.now()+n.P,Sf(n,n.P)}function Sf(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=os(ve(n.lb,n),e)}function Jr(n){n.B&&(S.clearTimeout(n.B),n.B=null)}E.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(PT(this.j,this.A),this.L!=2&&(Li(),Ce(17)),$t(this),this.o=2,vi(this)):Sf(this,this.Y-n)};function vi(n){n.l.H==0||n.J||Qf(n.l,n)}function $t(n){Jr(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,Al(n.V),mf(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function Ia(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||wa(t.i,n))){if(!n.K&&wa(t.i,n)&&t.H==3){try{var i=t.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)hr(t),no(t);else break e;xl(t),Ce(18)}}else t.Fa=s[1],0<t.Fa-t.V&&37500>s[2]&&t.G&&t.A==0&&!t.v&&(t.v=os(ve(t.ib,t),6e3));if(1>=Mf(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else Ht(t,11)}else if((n.K||t.g==n)&&hr(t),!Di(e))for(s=t.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(t.V=c[0],c=c[1],t.H==2)if(c[0]=="c"){t.K=c[1],t.pa=c[2];const u=c[3];u!=null&&(t.ra=u,t.l.info("VER="+t.ra));const h=c[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,t.L=i,t.l.info("backChannelRequestTimeoutMs_="+i)),i=t;const f=n.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var r=i.i;r.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(kl(r,r.h),r.h=null))}if(i.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(i.Da=v,z(i.I,i.F,v))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),i=t;var o=n;if(i.wa=Jf(i,i.J?i.pa:null,i.Y),o.K){Vf(i.i,o);var a=o,l=i.L;l&&a.setTimeout(l),a.B&&(Jr(a),cs(a)),i.g=o}else Gf(i);0<t.j.length&&io(t)}else c[0]!="stop"&&c[0]!="close"||Ht(t,7);else t.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ht(t,7):Ol(t):c[0]!="noop"&&t.h&&t.h.Aa(c),t.A=0)}}Li(4)}catch{}}function DT(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(jr(n)){for(var e=[],t=n.length,i=0;i<t;i++)e.push(n[i]);return e}e=[],t=0;for(i in n)e[t++]=n[i];return e}function OT(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(jr(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const i in n)e[t++]=i;return e}}}function Pf(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(jr(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=OT(n),i=DT(n),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],t&&t[r],n)}var bf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xT(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var i=n[t].indexOf("="),s=null;if(0<=i){var r=n[t].substring(0,i);s=n[t].substring(i+1)}else r=n[t];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Qt(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Qt){this.h=n.h,cr(this,n.j),this.s=n.s,this.g=n.g,ur(this,n.m),this.l=n.l;var e=n.i,t=new Fi;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),ku(this,t),this.o=n.o}else n&&(e=String(n).match(bf))?(this.h=!1,cr(this,e[1]||"",!0),this.s=fi(e[2]||""),this.g=fi(e[3]||"",!0),ur(this,e[4]),this.l=fi(e[5]||"",!0),ku(this,e[6]||"",!0),this.o=fi(e[7]||"")):(this.h=!1,this.i=new Fi(null,this.h))}Qt.prototype.toString=function(){var n=[],e=this.j;e&&n.push(pi(e,Nu,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(pi(e,Nu,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(pi(t,t.charAt(0)=="/"?LT:VT,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",pi(t,UT)),n.join("")};function pt(n){return new Qt(n)}function cr(n,e,t){n.j=t?fi(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function ur(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function ku(n,e,t){e instanceof Fi?(n.i=e,BT(n.i,n.h)):(t||(e=pi(e,FT)),n.i=new Fi(e,n.h))}function z(n,e,t){n.i.set(e,t)}function Zr(n){return z(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function fi(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function pi(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,MT),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function MT(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Nu=/[#\/\?@]/g,VT=/[#\?:]/g,LT=/[#\?]/g,FT=/[#\?@]/g,UT=/#/g;function Fi(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function Ut(n){n.g||(n.g=new Map,n.h=0,n.i&&xT(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}E=Fi.prototype;E.add=function(n,e){Ut(this),this.i=null,n=Jn(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function kf(n,e){Ut(n),e=Jn(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function Nf(n,e){return Ut(n),e=Jn(n,e),n.g.has(e)}E.forEach=function(n,e){Ut(this),this.g.forEach(function(t,i){t.forEach(function(s){n.call(e,s,i,this)},this)},this)};E.ta=function(){Ut(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let i=0;i<e.length;i++){const s=n[i];for(let r=0;r<s.length;r++)t.push(e[i])}return t};E.Z=function(n){Ut(this);let e=[];if(typeof n=="string")Nf(this,n)&&(e=e.concat(this.g.get(Jn(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};E.set=function(n,e){return Ut(this),this.i=null,n=Jn(this,n),Nf(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};E.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function Df(n,e,t){kf(n,e),0<t.length&&(n.i=null,n.g.set(Jn(n,e),gl(t)),n.h+=t.length)}E.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var i=e[t];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),n.push(s)}}return this.i=n.join("&")};function Jn(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function BT(n,e){e&&!n.j&&(Ut(n),n.i=null,n.g.forEach(function(t,i){var s=i.toLowerCase();i!=s&&(kf(this,i),Df(this,s,t))},n)),n.j=e}var qT=class{constructor(n,e){this.g=n,this.map=e}};function Of(n){this.l=n||WT,S.PerformanceNavigationTiming?(n=S.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(S.g&&S.g.Ka&&S.g.Ka()&&S.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var WT=10;function xf(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Mf(n){return n.h?1:n.g?n.g.size:0}function wa(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function kl(n,e){n.g?n.g.add(e):n.h=e}function Vf(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Of.prototype.cancel=function(){if(this.i=Lf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Lf(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return gl(n.i)}var jT=class{stringify(n){return S.JSON.stringify(n,void 0)}parse(n){return S.JSON.parse(n,void 0)}};function $T(){this.g=new jT}function HT(n,e,t){const i=t||"";try{Pf(n,function(s,r){let o=s;ss(s)&&(o=wl(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function zT(n,e){const t=new Kr;if(S.Image){const i=new Image;i.onload=Ds(xs,t,i,"TestLoadImage: loaded",!0,e),i.onerror=Ds(xs,t,i,"TestLoadImage: error",!1,e),i.onabort=Ds(xs,t,i,"TestLoadImage: abort",!1,e),i.ontimeout=Ds(xs,t,i,"TestLoadImage: timeout",!1,e),S.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=n}else e(!1)}function xs(n,e,t,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function us(n){this.l=n.ec||null,this.j=n.ob||!1}ce(us,Sl);us.prototype.g=function(){return new eo(this.l,this.j)};us.prototype.i=function(n){return function(){return n}}({});function eo(n,e){le.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=Nl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ce(eo,le);var Nl=0;E=eo.prototype;E.open=function(n,e){if(this.readyState!=Nl)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Ui(this)};E.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||S).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};E.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,hs(this)),this.readyState=Nl};E.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Ui(this)),this.g&&(this.readyState=3,Ui(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof S.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ff(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function Ff(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}E.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?hs(this):Ui(this),this.readyState==3&&Ff(this)}};E.Za=function(n){this.g&&(this.response=this.responseText=n,hs(this))};E.Ya=function(n){this.g&&(this.response=n,hs(this))};E.ka=function(){this.g&&hs(this)};function hs(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Ui(n)}E.setRequestHeader=function(n,e){this.v.append(n,e)};E.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};E.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Ui(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(eo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var GT=S.JSON.parse;function X(n){le.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Uf,this.L=this.M=!1}ce(X,le);var Uf="",KT=/^https?$/i,QT=["POST","PUT"];E=X.prototype;E.Oa=function(n){this.M=n};E.ha=function(n,e,t,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():va.g(),this.C=this.u?bu(this.u):bu(va),this.g.onreadystatechange=ve(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(r){Du(this,r);return}if(n=t||"",t=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)t.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())t.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(t.keys()).find(r=>r.toLowerCase()=="content-type"),s=S.FormData&&n instanceof S.FormData,!(0<=tf(QT,e))||i||s||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of t)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Wf(this),0<this.B&&((this.L=YT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ve(this.ua,this)):this.A=Rl(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(r){Du(this,r)}};function YT(n){return Ln&&typeof n.timeout=="number"&&n.ontimeout!==void 0}E.ua=function(){typeof _l<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,de(this,"timeout"),this.abort(8))};function Du(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Bf(n),to(n)}function Bf(n){n.F||(n.F=!0,de(n,"complete"),de(n,"error"))}E.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,de(this,"complete"),de(this,"abort"),to(this))};E.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),to(this,!0)),X.$.N.call(this)};E.La=function(){this.s||(this.G||this.v||this.l?qf(this):this.kb())};E.kb=function(){qf(this)};function qf(n){if(n.h&&typeof _l<"u"&&(!n.C[1]||Ke(n)!=4||n.da()!=2)){if(n.v&&Ke(n)==4)Rl(n.La,0,n);else if(de(n,"readystatechange"),Ke(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var i;if(i=o===0){var s=String(n.I).match(bf)[1]||null;!s&&S.self&&S.self.location&&(s=S.self.location.protocol.slice(0,-1)),i=!KT.test(s?s.toLowerCase():"")}t=i}if(t)de(n,"complete"),de(n,"success");else{n.m=6;try{var r=2<Ke(n)?n.g.statusText:""}catch{r=""}n.j=r+" ["+n.da()+"]",Bf(n)}}finally{to(n)}}}}function to(n,e){if(n.g){Wf(n);const t=n.g,i=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||de(n,"ready");try{t.onreadystatechange=i}catch{}}}function Wf(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(S.clearTimeout(n.A),n.A=null)}E.isActive=function(){return!!this.g};function Ke(n){return n.g?n.g.readyState:0}E.da=function(){try{return 2<Ke(this)?this.g.status:-1}catch{return-1}};E.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};E.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),GT(e)}};function Ou(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case Uf:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function XT(n){const e={};n=(n.g&&2<=Ke(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<n.length;i++){if(Di(n[i]))continue;var t=IT(n[i]);const s=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const r=e[s]||[];e[s]=r,r.push(t)}_T(e,function(i){return i.join(", ")})}E.Ia=function(){return this.m};E.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function jf(n){let e="";return yl(n,function(t,i){e+=i,e+=":",e+=t,e+=`\r
`}),e}function Dl(n,e,t){e:{for(i in t){var i=!1;break e}i=!0}i||(t=jf(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):z(n,e,t))}function oi(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function $f(n){this.Ga=0,this.j=[],this.l=new Kr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=oi("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=oi("baseRetryDelayMs",5e3,n),this.hb=oi("retryDelaySeedMs",1e4,n),this.eb=oi("forwardChannelMaxRetries",2,n),this.xa=oi("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new Of(n&&n.concurrentRequestLimit),this.Ja=new $T,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}E=$f.prototype;E.ra=8;E.H=1;function Ol(n){if(Hf(n),n.H==3){var e=n.W++,t=pt(n.I);if(z(t,"SID",n.K),z(t,"RID",e),z(t,"TYPE","terminate"),ds(n,t),e=new ls(n,n.l,e),e.L=2,e.v=Zr(pt(t)),t=!1,S.navigator&&S.navigator.sendBeacon)try{t=S.navigator.sendBeacon(e.v.toString(),"")}catch{}!t&&S.Image&&(new Image().src=e.v,t=!0),t||(e.g=Zf(e.l,null),e.g.ha(e.v)),e.G=Date.now(),cs(e)}Xf(n)}function no(n){n.g&&(Ml(n),n.g.cancel(),n.g=null)}function Hf(n){no(n),n.u&&(S.clearTimeout(n.u),n.u=null),hr(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&S.clearTimeout(n.m),n.m=null)}function io(n){if(!xf(n.i)&&!n.m){n.m=!0;var e=n.Na;xi||pf(),Mi||(xi(),Mi=!0),Cl.add(e,n),n.C=0}}function JT(n,e){return Mf(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=os(ve(n.Na,n,e),Yf(n,n.C)),n.C++,!0)}E.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const s=new ls(this,this.l,n);let r=this.s;if(this.U&&(r?(r=of(r),af(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var i=this.j[t];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=zf(this,s,e),t=pt(this.I),z(t,"RID",n),z(t,"CVER",22),this.F&&z(t,"X-HTTP-Session-Id",this.F),ds(this,t),r&&(this.O?e="headers="+encodeURIComponent(String(jf(r)))+"&"+e:this.o&&Dl(t,this.o,r)),kl(this.i,s),this.bb&&z(t,"TYPE","init"),this.P?(z(t,"$req",e),z(t,"SID","null"),s.aa=!0,Ta(s,t,null)):Ta(s,t,e),this.H=2}}else this.H==3&&(n?xu(this,n):this.j.length==0||xf(this.i)||xu(this))};function xu(n,e){var t;e?t=e.m:t=n.W++;const i=pt(n.I);z(i,"SID",n.K),z(i,"RID",t),z(i,"AID",n.V),ds(n,i),n.o&&n.s&&Dl(i,n.o,n.s),t=new ls(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=zf(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),kl(n.i,t),Ta(t,i,e)}function ds(n,e){n.na&&yl(n.na,function(t,i){z(e,i,t)}),n.h&&Pf({},function(t,i){z(e,i,t)})}function zf(n,e,t){t=Math.min(n.j.length,t);var i=n.h?ve(n.h.Va,n.h,n):null;e:{var s=n.j;let r=-1;for(;;){const o=["count="+t];r==-1?0<t?(r=s[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<t;l++){let c=s[l].g;const u=s[l].map;if(c-=r,0>c)r=Math.max(0,s[l].g-100),a=!1;else try{HT(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,i}function Gf(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;xi||pf(),Mi||(xi(),Mi=!0),Cl.add(e,n),n.A=0}}function xl(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=os(ve(n.Ma,n),Yf(n,n.A)),n.A++,!0)}E.Ma=function(){if(this.u=null,Kf(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=os(ve(this.jb,this),n)}};E.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ce(10),no(this),Kf(this))};function Ml(n){n.B!=null&&(S.clearTimeout(n.B),n.B=null)}function Kf(n){n.g=new ls(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=pt(n.wa);z(e,"RID","rpc"),z(e,"SID",n.K),z(e,"AID",n.V),z(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&z(e,"TO",n.qa),z(e,"TYPE","xmlhttp"),ds(n,e),n.o&&n.s&&Dl(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.v=Zr(pt(e)),t.s=null,t.S=!0,Cf(t,n)}E.ib=function(){this.v!=null&&(this.v=null,no(this),xl(this),Ce(19))};function hr(n){n.v!=null&&(S.clearTimeout(n.v),n.v=null)}function Qf(n,e){var t=null;if(n.g==e){hr(n),Ml(n),n.g=null;var i=2}else if(wa(n.i,e))t=e.F,Vf(n.i,e),i=1;else return;if(n.H!=0){if(e.i)if(i==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var s=n.C;i=Qr(),de(i,new Ef(i,t)),io(n)}else Gf(n);else if(s=e.o,s==3||s==0&&0<e.ca||!(i==1&&JT(n,e)||i==2&&xl(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),s){case 1:Ht(n,5);break;case 4:Ht(n,10);break;case 3:Ht(n,6);break;default:Ht(n,2)}}}function Yf(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function Ht(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var i=ve(n.pb,n);t||(t=new Qt("//www.google.com/images/cleardot.gif"),S.location&&S.location.protocol=="http"||cr(t,"https"),Zr(t)),zT(t.toString(),i)}else Ce(2);n.H=0,n.h&&n.h.za(e),Xf(n),Hf(n)}E.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Ce(2)):(this.l.info("Failed to ping google.com"),Ce(1))};function Xf(n){if(n.H=0,n.ma=[],n.h){const e=Lf(n.i);(e.length!=0||n.j.length!=0)&&(Cu(n.ma,e),Cu(n.ma,n.j),n.i.i.length=0,gl(n.j),n.j.length=0),n.h.ya()}}function Jf(n,e,t){var i=t instanceof Qt?pt(t):new Qt(t);if(i.g!="")e&&(i.g=e+"."+i.g),ur(i,i.m);else{var s=S.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new Qt(null);i&&cr(r,i),e&&(r.g=e),s&&ur(r,s),t&&(r.l=t),i=r}return t=n.F,e=n.Da,t&&e&&z(i,t,e),z(i,"VER",n.ra),ds(n,i),i}function Zf(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new X(new us({ob:!0})):new X(n.va),e.Oa(n.J),e}E.isActive=function(){return!!this.h&&this.h.isActive(this)};function ep(){}E=ep.prototype;E.Ba=function(){};E.Aa=function(){};E.za=function(){};E.ya=function(){};E.isActive=function(){return!0};E.Va=function(){};function dr(){if(Ln&&!(10<=Number(hT)))throw Error("Environmental error: no available transport.")}dr.prototype.g=function(n,e){return new Me(n,e)};function Me(n,e){le.call(this),this.g=new $f(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!Di(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Di(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Zn(this)}ce(Me,le);Me.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;Ce(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=Jf(n,null,n.Y),io(n)};Me.prototype.close=function(){Ol(this.g)};Me.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=wl(n),n=t);e.j.push(new qT(e.fb++,n)),e.H==3&&io(e)};Me.prototype.N=function(){this.g.h=null,delete this.j,Ol(this.g),delete this.g,Me.$.N.call(this)};function tp(n){Pl.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}ce(tp,Pl);function np(){bl.call(this),this.status=1}ce(np,bl);function Zn(n){this.g=n}ce(Zn,ep);Zn.prototype.Ba=function(){de(this.g,"a")};Zn.prototype.Aa=function(n){de(this.g,new tp(n))};Zn.prototype.za=function(n){de(this.g,new np)};Zn.prototype.ya=function(){de(this.g,"b")};function ZT(){this.blockSize=-1}function $e(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ce($e,ZT);$e.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function $o(n,e,t){t||(t=0);var i=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)i[s]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(s=0;16>s;++s)i[s]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],s=n.g[2];var r=n.g[3],o=e+(r^t&(s^r))+i[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=r+(s^e&(t^s))+i[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(t^r&(e^t))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=t+(e^s&(r^e))+i[3]+3250441966&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(r^t&(s^r))+i[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=r+(s^e&(t^s))+i[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(t^r&(e^t))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=t+(e^s&(r^e))+i[7]+4249261313&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(r^t&(s^r))+i[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=r+(s^e&(t^s))+i[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(t^r&(e^t))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=t+(e^s&(r^e))+i[11]+2304563134&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(r^t&(s^r))+i[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=r+(s^e&(t^s))+i[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(t^r&(e^t))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=t+(e^s&(r^e))+i[15]+1236535329&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(s^r&(t^s))+i[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^s&(e^t))+i[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(r^e))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(s^r))+i[0]+3921069994&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(t^s))+i[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^s&(e^t))+i[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(r^e))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(s^r))+i[4]+3889429448&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(t^s))+i[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^s&(e^t))+i[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(r^e))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(s^r))+i[8]+1163531501&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(t^s))+i[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^s&(e^t))+i[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(r^e))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(s^r))+i[12]+2368359562&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(t^s^r)+i[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^s)+i[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^t)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=t+(s^r^e)+i[14]+4259657740&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^r)+i[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^s)+i[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^t)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=t+(s^r^e)+i[10]+3200236656&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^r)+i[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^s)+i[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^t)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=t+(s^r^e)+i[6]+76029189&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^r)+i[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^s)+i[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^t)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=t+(s^r^e)+i[2]+3299628645&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(s^(t|~r))+i[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~s))+i[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~t))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=t+(r^(s|~e))+i[5]+4237533241&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~r))+i[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~s))+i[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~t))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=t+(r^(s|~e))+i[1]+2240044497&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~r))+i[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~s))+i[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~t))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=t+(r^(s|~e))+i[13]+1309151649&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~r))+i[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~s))+i[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~t))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=t+(r^(s|~e))+i[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+s&4294967295,n.g[3]=n.g[3]+r&4294967295}$e.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,i=this.m,s=this.h,r=0;r<e;){if(s==0)for(;r<=t;)$o(this,n,r),r+=this.blockSize;if(typeof n=="string"){for(;r<e;)if(i[s++]=n.charCodeAt(r++),s==this.blockSize){$o(this,i),s=0;break}}else for(;r<e;)if(i[s++]=n[r++],s==this.blockSize){$o(this,i),s=0;break}}this.h=s,this.i+=e};$e.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var i=0;32>i;i+=8)n[t++]=this.g[e]>>>i&255;return n};function q(n,e){this.h=e;for(var t=[],i=!0,s=n.length-1;0<=s;s--){var r=n[s]|0;i&&r==e||(t[s]=r,i=!1)}this.g=t}var eI={};function Vl(n){return-128<=n&&128>n?lT(n,function(e){return new q([e|0],0>e?-1:0)}):new q([n|0],0>n?-1:0)}function Qe(n){if(isNaN(n)||!isFinite(n))return Pn;if(0>n)return ue(Qe(-n));for(var e=[],t=1,i=0;n>=t;i++)e[i]=n/t|0,t*=Ca;return new q(e,0)}function ip(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return ue(ip(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=Qe(Math.pow(e,8)),i=Pn,s=0;s<n.length;s+=8){var r=Math.min(8,n.length-s),o=parseInt(n.substring(s,s+r),e);8>r?(r=Qe(Math.pow(e,r)),i=i.R(r).add(Qe(o))):(i=i.R(t),i=i.add(Qe(o)))}return i}var Ca=4294967296,Pn=Vl(0),Aa=Vl(1),Mu=Vl(16777216);E=q.prototype;E.ea=function(){if(Ve(this))return-ue(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var i=this.D(t);n+=(0<=i?i:Ca+i)*e,e*=Ca}return n};E.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(at(this))return"0";if(Ve(this))return"-"+ue(this).toString(n);for(var e=Qe(Math.pow(n,6)),t=this,i="";;){var s=pr(t,e).g;t=fr(t,s.R(e));var r=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=s,at(t))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};E.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function at(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function Ve(n){return n.h==-1}E.X=function(n){return n=fr(this,n),Ve(n)?-1:at(n)?0:1};function ue(n){for(var e=n.g.length,t=[],i=0;i<e;i++)t[i]=~n.g[i];return new q(t,~n.h).add(Aa)}E.abs=function(){return Ve(this)?ue(this):this};E.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0,s=0;s<=e;s++){var r=i+(this.D(s)&65535)+(n.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(n.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,t[s]=o<<16|r}return new q(t,t[t.length-1]&-2147483648?-1:0)};function fr(n,e){return n.add(ue(e))}E.R=function(n){if(at(this)||at(n))return Pn;if(Ve(this))return Ve(n)?ue(this).R(ue(n)):ue(ue(this).R(n));if(Ve(n))return ue(this.R(ue(n)));if(0>this.X(Mu)&&0>n.X(Mu))return Qe(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],i=0;i<2*e;i++)t[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<n.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,a=n.D(s)>>>16,l=n.D(s)&65535;t[2*i+2*s]+=o*l,Ms(t,2*i+2*s),t[2*i+2*s+1]+=r*l,Ms(t,2*i+2*s+1),t[2*i+2*s+1]+=o*a,Ms(t,2*i+2*s+1),t[2*i+2*s+2]+=r*a,Ms(t,2*i+2*s+2)}for(i=0;i<e;i++)t[i]=t[2*i+1]<<16|t[2*i];for(i=e;i<2*e;i++)t[i]=0;return new q(t,0)};function Ms(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function ai(n,e){this.g=n,this.h=e}function pr(n,e){if(at(e))throw Error("division by zero");if(at(n))return new ai(Pn,Pn);if(Ve(n))return e=pr(ue(n),e),new ai(ue(e.g),ue(e.h));if(Ve(e))return e=pr(n,ue(e)),new ai(ue(e.g),e.h);if(30<n.g.length){if(Ve(n)||Ve(e))throw Error("slowDivide_ only works with positive integers.");for(var t=Aa,i=e;0>=i.X(n);)t=Vu(t),i=Vu(i);var s=mn(t,1),r=mn(i,1);for(i=mn(i,2),t=mn(t,2);!at(i);){var o=r.add(i);0>=o.X(n)&&(s=s.add(t),r=o),i=mn(i,1),t=mn(t,1)}return e=fr(n,s.R(e)),new ai(s,e)}for(s=Pn;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),i=Math.ceil(Math.log(t)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=Qe(t),o=r.R(e);Ve(o)||0<o.X(n);)t-=i,r=Qe(t),o=r.R(e);at(r)&&(r=Aa),s=s.add(r),n=fr(n,o)}return new ai(s,n)}E.gb=function(n){return pr(this,n).h};E.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0;i<e;i++)t[i]=this.D(i)&n.D(i);return new q(t,this.h&n.h)};E.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0;i<e;i++)t[i]=this.D(i)|n.D(i);return new q(t,this.h|n.h)};E.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0;i<e;i++)t[i]=this.D(i)^n.D(i);return new q(t,this.h^n.h)};function Vu(n){for(var e=n.g.length+1,t=[],i=0;i<e;i++)t[i]=n.D(i)<<1|n.D(i-1)>>>31;return new q(t,n.h)}function mn(n,e){var t=e>>5;e%=32;for(var i=n.g.length-t,s=[],r=0;r<i;r++)s[r]=0<e?n.D(r+t)>>>e|n.D(r+t+1)<<32-e:n.D(r+t);return new q(s,n.h)}dr.prototype.createWebChannel=dr.prototype.g;Me.prototype.send=Me.prototype.u;Me.prototype.open=Me.prototype.m;Me.prototype.close=Me.prototype.close;Yr.NO_ERROR=0;Yr.TIMEOUT=8;Yr.HTTP_ERROR=6;Tf.COMPLETE="complete";If.EventType=as;as.OPEN="a";as.CLOSE="b";as.ERROR="c";as.MESSAGE="d";le.prototype.listen=le.prototype.O;X.prototype.listenOnce=X.prototype.P;X.prototype.getLastError=X.prototype.Sa;X.prototype.getLastErrorCode=X.prototype.Ia;X.prototype.getStatus=X.prototype.da;X.prototype.getResponseJson=X.prototype.Wa;X.prototype.getResponseText=X.prototype.ja;X.prototype.send=X.prototype.ha;X.prototype.setWithCredentials=X.prototype.Oa;$e.prototype.digest=$e.prototype.l;$e.prototype.reset=$e.prototype.reset;$e.prototype.update=$e.prototype.j;q.prototype.add=q.prototype.add;q.prototype.multiply=q.prototype.R;q.prototype.modulo=q.prototype.gb;q.prototype.compare=q.prototype.X;q.prototype.toNumber=q.prototype.ea;q.prototype.toString=q.prototype.toString;q.prototype.getBits=q.prototype.D;q.fromNumber=Qe;q.fromString=ip;var tI=function(){return new dr},nI=function(){return Qr()},Ho=Yr,iI=Tf,sI=cn,Lu={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},rI=us,Vs=If,oI=X,aI=$e,bn=q;const Fu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_e.UNAUTHENTICATED=new _e(null),_e.GOOGLE_CREDENTIALS=new _e("google-credentials-uid"),_e.FIRST_PARTY=new _e("first-party-uid"),_e.MOCK_USER=new _e("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ei="10.5.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=new Ur("@firebase/firestore");function li(){return en.logLevel}function I(n,...e){if(en.logLevel<=x.DEBUG){const t=e.map(Ll);en.debug(`Firestore (${ei}): ${n}`,...t)}}function _t(n,...e){if(en.logLevel<=x.ERROR){const t=e.map(Ll);en.error(`Firestore (${ei}): ${n}`,...t)}}function Fn(n,...e){if(en.logLevel<=x.WARN){const t=e.map(Ll);en.warn(`Firestore (${ei}): ${n}`,...t)}}function Ll(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(n="Unexpected state"){const e=`FIRESTORE (${ei}) INTERNAL ASSERTION FAILED: `+n;throw _t(e),new Error(e)}function K(n,e){n||R()}function k(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends it{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class lI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(_e.UNAUTHENTICATED))}shutdown(){}}class cI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class uI{constructor(e){this.t=e,this.currentUser=_e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let i=this.i;const s=l=>this.i!==i?(i=this.i,t(l)):Promise.resolve();let r=new ct;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ct,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{I("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(I("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ct)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(I("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(K(typeof i.accessToken=="string"),new sp(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return K(e===null||typeof e=="string"),new _e(e)}}class hI{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=_e.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class dI{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new hI(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(_e.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pI{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const i=r=>{r.error!=null&&I("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,I("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{I("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?s(r):I("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(K(typeof t.token=="string"),this.R=t.token,new fI(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=_I(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<t&&(i+=e.charAt(s[r]%e.length))}return i}}function F(n,e){return n<e?-1:n>e?1:0}function Un(n,e,t){return n.length===e.length&&n.every((i,s)=>t(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new T(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new T(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new T(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new T(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ie.fromMillis(Date.now())}static fromDate(e){return ie.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new ie(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?F(this.nanoseconds,e.nanoseconds):F(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.timestamp=e}static fromTimestamp(e){return new P(e)}static min(){return new P(new ie(0,0))}static max(){return new P(new ie(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,t,i){t===void 0?t=0:t>e.length&&R(),i===void 0?i=e.length-t:i>e.length-t&&R(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return Bi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Bi?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const r=e.get(s),o=t.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class G extends Bi{construct(e,t,i){return new G(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new T(_.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(s=>s.length>0))}return new G(t)}static emptyPath(){return new G([])}}const gI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class he extends Bi{construct(e,t,i){return new he(e,t,i)}static isValidIdentifier(e){return gI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),he.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new he(["__name__"])}static fromServerFormat(e){const t=[];let i="",s=0;const r=()=>{if(i.length===0)throw new T(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new T(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new T(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new T(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new he(t)}static emptyPath(){return new he([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.path=e}static fromPath(e){return new w(G.fromString(e))}static fromName(e){return new w(G.fromString(e).popFirst(5))}static empty(){return new w(G.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&G.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return G.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new w(new G(e.slice()))}}function mI(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=P.fromTimestamp(i===1e9?new ie(t+1,0):new ie(t,i));return new Dt(s,w.empty(),e)}function yI(n){return new Dt(n.readTime,n.key,-1)}class Dt{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Dt(P.min(),w.empty(),-1)}static max(){return new Dt(P.max(),w.empty(),-1)}}function vI(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=w.comparator(n.documentKey,e.documentKey),t!==0?t:F(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class TI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(n){if(n.code!==_.FAILED_PRECONDITION||n.message!==EI)throw n;I("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&R(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new g((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(t,r).next(i,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof g?t:g.resolve(t)}catch(t){return g.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):g.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):g.reject(t)}static resolve(e){return new g((t,i)=>{t(e)})}static reject(e){return new g((t,i)=>{i(e)})}static waitFor(e){return new g((t,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&t()},l=>i(l))}),o=!0,r===s&&t()})}static or(e){let t=g.resolve(!1);for(const i of e)t=t.next(s=>s?g.resolve(s):i());return t}static forEach(e,t){const i=[];return e.forEach((s,r)=>{i.push(t.call(this,s,r))}),this.waitFor(i)}static mapArray(e,t){return new g((i,s)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;t(e[c]).next(u=>{o[c]=u,++a,a===r&&i(o)},u=>s(u))}})}static doWhile(e,t){return new g((i,s)=>{const r=()=>{e()===!0?t().next(()=>{r()},s):i()};r()})}}function ps(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.se(i),this.oe=i=>t.writeSequenceNumber(i))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Fl._e=-1;function so(n){return n==null}function _r(n){return n===0&&1/n==-1/0}function II(n){return typeof n=="number"&&Number.isInteger(n)&&!_r(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function un(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function op(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let te=class Ra{constructor(e,t){this.comparator=e,this.root=t||bt.EMPTY}insert(e,t){return new Ra(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,bt.BLACK,null,null))}remove(e){return new Ra(this.comparator,this.root.remove(e,this.comparator).copy(null,null,bt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ls(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ls(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ls(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ls(this.root,e,this.comparator,!0)}},Ls=class{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},bt=class st{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??st.RED,this.left=s??st.EMPTY,this.right=r??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,r){return new st(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return st.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw R();const e=this.left.check();if(e!==this.right.check())throw R();return e+(this.isRed()?0:1)}};bt.EMPTY=null,bt.RED=!0,bt.BLACK=!1;bt.EMPTY=new class{constructor(){this.size=0}get key(){throw R()}get value(){throw R()}get color(){throw R()}get left(){throw R()}get right(){throw R()}copy(e,t,i,s,r){return this}insert(e,t,i){return new bt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.comparator=e,this.data=new te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Bu(this.data.getIterator())}getIteratorFrom(e){return new Bu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof fe)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new fe(this.comparator);return t.data=e,t}}class Bu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.fields=e,e.sort(he.comparator)}static empty(){return new Oe([])}unionWith(e){let t=new fe(he.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new Oe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Un(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new ap("Invalid base64 string: "+r):r}}(e);return new we(t)}static fromUint8Array(e){const t=function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r}(e);return new we(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return F(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}we.EMPTY_BYTE_STRING=new we("");const wI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ot(n){if(K(!!n),typeof n=="string"){let e=0;const t=wI.exec(n);if(K(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Z(n.seconds),nanos:Z(n.nanos)}}function Z(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function tn(n){return typeof n=="string"?we.fromBase64String(n):we.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Bl(n){const e=n.mapValue.fields.__previous_value__;return Ul(e)?Bl(e):e}function qi(n){const e=Ot(n.mapValue.fields.__local_write_time__.timestampValue);return new ie(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e,t,i,s,r,o,a,l,c){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Wi{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Wi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Wi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function nn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ul(n)?4:AI(n)?9007199254740991:10:R()}function nt(n,e){if(n===e)return!0;const t=nn(n);if(t!==nn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return qi(n).isEqual(qi(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=Ot(s.timestampValue),a=Ot(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,r){return tn(s.bytesValue).isEqual(tn(r.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,r){return Z(s.geoPointValue.latitude)===Z(r.geoPointValue.latitude)&&Z(s.geoPointValue.longitude)===Z(r.geoPointValue.longitude)}(n,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Z(s.integerValue)===Z(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=Z(s.doubleValue),a=Z(r.doubleValue);return o===a?_r(o)===_r(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return Un(n.arrayValue.values||[],e.arrayValue.values||[],nt);case 10:return function(s,r){const o=s.mapValue.fields||{},a=r.mapValue.fields||{};if(Uu(o)!==Uu(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!nt(o[l],a[l])))return!1;return!0}(n,e);default:return R()}}function ji(n,e){return(n.values||[]).find(t=>nt(t,e))!==void 0}function Bn(n,e){if(n===e)return 0;const t=nn(n),i=nn(e);if(t!==i)return F(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return F(n.booleanValue,e.booleanValue);case 2:return function(r,o){const a=Z(r.integerValue||r.doubleValue),l=Z(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(n,e);case 3:return qu(n.timestampValue,e.timestampValue);case 4:return qu(qi(n),qi(e));case 5:return F(n.stringValue,e.stringValue);case 6:return function(r,o){const a=tn(r),l=tn(o);return a.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(r,o){const a=r.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=F(a[c],l[c]);if(u!==0)return u}return F(a.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(r,o){const a=F(Z(r.latitude),Z(o.latitude));return a!==0?a:F(Z(r.longitude),Z(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(r,o){const a=r.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Bn(a[c],l[c]);if(u)return u}return F(a.length,l.length)}(n.arrayValue,e.arrayValue);case 10:return function(r,o){if(r===Fs.mapValue&&o===Fs.mapValue)return 0;if(r===Fs.mapValue)return 1;if(o===Fs.mapValue)return-1;const a=r.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=F(l[h],u[h]);if(d!==0)return d;const f=Bn(a[l[h]],c[u[h]]);if(f!==0)return f}return F(l.length,u.length)}(n.mapValue,e.mapValue);default:throw R()}}function qu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return F(n,e);const t=Ot(n),i=Ot(e),s=F(t.seconds,i.seconds);return s!==0?s:F(t.nanos,i.nanos)}function qn(n){return Sa(n)}function Sa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Ot(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return tn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return w.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",s=!0;for(const r of t.values||[])s?s=!1:i+=",",i+=Sa(r);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${Sa(t.fields[o])}`;return s+"}"}(n.mapValue):R()}function Wu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Pa(n){return!!n&&"integerValue"in n}function ql(n){return!!n&&"arrayValue"in n}function ju(n){return!!n&&"nullValue"in n}function $u(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function zs(n){return!!n&&"mapValue"in n}function Ei(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return un(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Ei(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ei(n.arrayValue.values[t]);return e}return Object.assign({},n)}function AI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.value=e}static empty(){return new Ae({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!zs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ei(t)}setAll(e){let t=he.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,i,s),i={},s=[],t=a.popLast()}o?i[a.lastSegment()]=Ei(o):s.push(a.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,i,s)}delete(e){const t=this.field(e.popLast());zs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return nt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];zs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){un(t,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new Ae(Ei(this.value))}}function lp(n){const e=[];return un(n.fields,(t,i)=>{const s=new he([t]);if(zs(i)){const r=lp(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new Oe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,t,i,s,r,o,a){this.key=e,this.documentType=t,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ge(e,0,P.min(),P.min(),P.min(),Ae.empty(),0)}static newFoundDocument(e,t,i,s){return new ge(e,1,t,P.min(),i,s,0)}static newNoDocument(e,t){return new ge(e,2,t,P.min(),P.min(),Ae.empty(),0)}static newUnknownDocument(e,t){return new ge(e,3,t,P.min(),P.min(),Ae.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(P.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ae.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ae.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=P.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ge&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ge(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,t){this.position=e,this.inclusive=t}}function Hu(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const r=e[s],o=n.position[s];if(r.field.isKeyField()?i=w.comparator(w.fromName(o.referenceValue),t.key):i=Bn(o,t.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function zu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!nt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,t="asc"){this.field=e,this.dir=t}}function RI(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{}class ee extends cp{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new PI(e,t,i):t==="array-contains"?new NI(e,i):t==="in"?new DI(e,i):t==="not-in"?new OI(e,i):t==="array-contains-any"?new xI(e,i):new ee(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new bI(e,i):new kI(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Bn(t,this.value)):t!==null&&nn(this.value)===nn(t)&&this.matchesComparison(Bn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return R()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class He extends cp{constructor(e,t){super(),this.filters=e,this.op=t,this.ue=null}static create(e,t){return new He(e,t)}matches(e){return up(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function up(n){return n.op==="and"}function hp(n){return SI(n)&&up(n)}function SI(n){for(const e of n.filters)if(e instanceof He)return!1;return!0}function ba(n){if(n instanceof ee)return n.field.canonicalString()+n.op.toString()+qn(n.value);if(hp(n))return n.filters.map(e=>ba(e)).join(",");{const e=n.filters.map(t=>ba(t)).join(",");return`${n.op}(${e})`}}function dp(n,e){return n instanceof ee?function(i,s){return s instanceof ee&&i.op===s.op&&i.field.isEqual(s.field)&&nt(i.value,s.value)}(n,e):n instanceof He?function(i,s){return s instanceof He&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((r,o,a)=>r&&dp(o,s.filters[a]),!0):!1}(n,e):void R()}function fp(n){return n instanceof ee?function(t){return`${t.field.canonicalString()} ${t.op} ${qn(t.value)}`}(n):n instanceof He?function(t){return t.op.toString()+" {"+t.getFilters().map(fp).join(" ,")+"}"}(n):"Filter"}class PI extends ee{constructor(e,t,i){super(e,t,i),this.key=w.fromName(i.referenceValue)}matches(e){const t=w.comparator(e.key,this.key);return this.matchesComparison(t)}}class bI extends ee{constructor(e,t){super(e,"in",t),this.keys=pp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class kI extends ee{constructor(e,t){super(e,"not-in",t),this.keys=pp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function pp(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>w.fromName(i.referenceValue))}class NI extends ee{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ql(t)&&ji(t.arrayValue,this.value)}}class DI extends ee{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ji(this.value.arrayValue,t)}}class OI extends ee{constructor(e,t){super(e,"not-in",t)}matches(e){if(ji(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ji(this.value.arrayValue,t)}}class xI extends ee{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ql(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>ji(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e,t=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.ce=null}}function Gu(n,e=null,t=[],i=[],s=null,r=null,o=null){return new MI(n,e,t,i,s,r,o)}function Wl(n){const e=k(n);if(e.ce===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>ba(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),so(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>qn(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>qn(i)).join(",")),e.ce=t}return e.ce}function jl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!RI(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!dp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!zu(n.startAt,e.startAt)&&zu(n.endAt,e.endAt)}function ka(n){return w.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,t=null,i=[],s=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function VI(n,e,t,i,s,r,o,a){return new _s(n,e,t,i,s,r,o,a)}function ro(n){return new _s(n)}function Ku(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function _p(n){return n.collectionGroup!==null}function Ti(n){const e=k(n);if(e.le===null){e.le=[];const t=new Set;for(const r of e.explicitOrderBy)e.le.push(r),t.add(r.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new fe(he.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(r=>{t.has(r.canonicalString())||r.isKeyField()||e.le.push(new mr(r,i))}),t.has(he.keyField().canonicalString())||e.le.push(new mr(he.keyField(),i))}return e.le}function Ze(n){const e=k(n);return e.he||(e.he=LI(e,Ti(n))),e.he}function LI(n,e){if(n.limitType==="F")return Gu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const r=s.dir==="desc"?"asc":"desc";return new mr(s.field,r)});const t=n.endAt?new gr(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new gr(n.startAt.position,n.startAt.inclusive):null;return Gu(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Na(n,e){const t=n.filters.concat([e]);return new _s(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Da(n,e,t){return new _s(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function oo(n,e){return jl(Ze(n),Ze(e))&&n.limitType===e.limitType}function gp(n){return`${Wl(Ze(n))}|lt:${n.limitType}`}function vn(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(s=>fp(s)).join(", ")}]`),so(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(s=>qn(s)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(s=>qn(s)).join(",")),`Target(${i})`}(Ze(n))}; limitType=${n.limitType})`}function ao(n,e){return e.isFoundDocument()&&function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):w.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)}(n,e)&&function(i,s){for(const r of Ti(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(n,e)&&function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0}(n,e)&&function(i,s){return!(i.startAt&&!function(o,a,l){const c=Hu(o,a,l);return o.inclusive?c<=0:c<0}(i.startAt,Ti(i),s)||i.endAt&&!function(o,a,l){const c=Hu(o,a,l);return o.inclusive?c>=0:c>0}(i.endAt,Ti(i),s))}(n,e)}function FI(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function mp(n){return(e,t)=>{let i=!1;for(const s of Ti(n)){const r=UI(s,e,t);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function UI(n,e,t){const i=n.field.isKeyField()?w.comparator(e.key,t.key):function(r,o,a){const l=o.data.field(r),c=a.data.field(r);return l!==null&&c!==null?Bn(l,c):R()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return R()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){un(this.inner,(t,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return op(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=new te(w.comparator);function gt(){return BI}const yp=new te(w.comparator);function _i(...n){let e=yp;for(const t of n)e=e.insert(t.key,t);return e}function vp(n){let e=yp;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function zt(){return Ii()}function Ep(){return Ii()}function Ii(){return new ti(n=>n.toString(),(n,e)=>n.isEqual(e))}const qI=new te(w.comparator),WI=new fe(w.comparator);function M(...n){let e=WI;for(const t of n)e=e.add(t);return e}const jI=new fe(F);function $I(){return jI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_r(e)?"-0":e}}function Ip(n){return{integerValue:""+n}}function HI(n,e){return II(e)?Ip(e):Tp(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(){this._=void 0}}function zI(n,e,t){return n instanceof yr?function(s,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Ul(r)&&(r=Bl(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(t,e):n instanceof $i?Cp(n,e):n instanceof Hi?Ap(n,e):function(s,r){const o=wp(s,r),a=Qu(o)+Qu(s.Ie);return Pa(o)&&Pa(s.Ie)?Ip(a):Tp(s.serializer,a)}(n,e)}function GI(n,e,t){return n instanceof $i?Cp(n,e):n instanceof Hi?Ap(n,e):t}function wp(n,e){return n instanceof vr?function(i){return Pa(i)||function(r){return!!r&&"doubleValue"in r}(i)}(e)?e:{integerValue:0}:null}class yr extends lo{}class $i extends lo{constructor(e){super(),this.elements=e}}function Cp(n,e){const t=Rp(e);for(const i of n.elements)t.some(s=>nt(s,i))||t.push(i);return{arrayValue:{values:t}}}class Hi extends lo{constructor(e){super(),this.elements=e}}function Ap(n,e){let t=Rp(e);for(const i of n.elements)t=t.filter(s=>!nt(s,i));return{arrayValue:{values:t}}}class vr extends lo{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Qu(n){return Z(n.integerValue||n.doubleValue)}function Rp(n){return ql(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function KI(n,e){return n.field.isEqual(e.field)&&function(i,s){return i instanceof $i&&s instanceof $i||i instanceof Hi&&s instanceof Hi?Un(i.elements,s.elements,nt):i instanceof vr&&s instanceof vr?nt(i.Ie,s.Ie):i instanceof yr&&s instanceof yr}(n.transform,e.transform)}class QI{constructor(e,t){this.version=e,this.transformResults=t}}class Fe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Fe}static exists(e){return new Fe(void 0,e)}static updateTime(e){return new Fe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Gs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class co{}function Sp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new $l(n.key,Fe.none()):new gs(n.key,n.data,Fe.none());{const t=n.data,i=Ae.empty();let s=new fe(he.comparator);for(let r of e.fields)if(!s.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new Bt(n.key,i,new Oe(s.toArray()),Fe.none())}}function YI(n,e,t){n instanceof gs?function(s,r,o){const a=s.value.clone(),l=Xu(s.fieldTransforms,r,o.transformResults);a.setAll(l),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof Bt?function(s,r,o){if(!Gs(s.precondition,r))return void r.convertToUnknownDocument(o.version);const a=Xu(s.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(Pp(s)),l.setAll(a),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function wi(n,e,t,i){return n instanceof gs?function(r,o,a,l){if(!Gs(r.precondition,o))return a;const c=r.value.clone(),u=Ju(r.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,e,t,i):n instanceof Bt?function(r,o,a,l){if(!Gs(r.precondition,o))return a;const c=Ju(r.fieldTransforms,l,o),u=o.data;return u.setAll(Pp(r)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(n,e,t,i):function(r,o,a){return Gs(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function XI(n,e){let t=null;for(const i of n.fieldTransforms){const s=e.data.field(i.field),r=wp(i.transform,s||null);r!=null&&(t===null&&(t=Ae.empty()),t.set(i.field,r))}return t||null}function Yu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&Un(i,s,(r,o)=>KI(r,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class gs extends co{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Bt extends co{constructor(e,t,i,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Pp(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function Xu(n,e,t){const i=new Map;K(n.length===t.length);for(let s=0;s<t.length;s++){const r=n[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,GI(o,a,t[s]))}return i}function Ju(n,e,t){const i=new Map;for(const s of n){const r=s.transform,o=t.data.field(s.field);i.set(s.field,zI(r,o,e))}return i}class $l extends co{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class JI extends co{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&YI(r,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=wi(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=wi(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Ep();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=t.has(s.key)?null:a;const l=Sp(o,a);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(P.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),M())}isEqual(e){return this.batchId===e.batchId&&Un(this.mutations,e.mutations,(t,i)=>Yu(t,i))&&Un(this.baseMutations,e.baseMutations,(t,i)=>Yu(t,i))}}class Hl{constructor(e,t,i,s){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=s}static from(e,t,i){K(e.mutations.length===i.length);let s=function(){return qI}();const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new Hl(e,t,i,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J,V;function nw(n){switch(n){default:return R();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function bp(n){if(n===void 0)return _t("GRPC error has no .code"),_.UNKNOWN;switch(n){case J.OK:return _.OK;case J.CANCELLED:return _.CANCELLED;case J.UNKNOWN:return _.UNKNOWN;case J.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case J.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case J.INTERNAL:return _.INTERNAL;case J.UNAVAILABLE:return _.UNAVAILABLE;case J.UNAUTHENTICATED:return _.UNAUTHENTICATED;case J.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case J.NOT_FOUND:return _.NOT_FOUND;case J.ALREADY_EXISTS:return _.ALREADY_EXISTS;case J.PERMISSION_DENIED:return _.PERMISSION_DENIED;case J.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case J.ABORTED:return _.ABORTED;case J.OUT_OF_RANGE:return _.OUT_OF_RANGE;case J.UNIMPLEMENTED:return _.UNIMPLEMENTED;case J.DATA_LOSS:return _.DATA_LOSS;default:return R()}}(V=J||(J={}))[V.OK=0]="OK",V[V.CANCELLED=1]="CANCELLED",V[V.UNKNOWN=2]="UNKNOWN",V[V.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",V[V.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",V[V.NOT_FOUND=5]="NOT_FOUND",V[V.ALREADY_EXISTS=6]="ALREADY_EXISTS",V[V.PERMISSION_DENIED=7]="PERMISSION_DENIED",V[V.UNAUTHENTICATED=16]="UNAUTHENTICATED",V[V.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",V[V.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",V[V.ABORTED=10]="ABORTED",V[V.OUT_OF_RANGE=11]="OUT_OF_RANGE",V[V.UNIMPLEMENTED=12]="UNIMPLEMENTED",V[V.INTERNAL=13]="INTERNAL",V[V.UNAVAILABLE=14]="UNAVAILABLE",V[V.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw=new bn([4294967295,4294967295],0);function Zu(n){const e=iw().encode(n),t=new aI;return t.update(e),new Uint8Array(t.digest())}function eh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new bn([t,i],0),new bn([s,r],0)]}class zl{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new gi(`Invalid padding: ${t}`);if(i<0)throw new gi(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new gi(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new gi(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ee=bn.fromNumber(this.Te)}de(e,t,i){let s=e.add(t.multiply(bn.fromNumber(i)));return s.compare(sw)===1&&(s=new bn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Zu(e),[i,s]=eh(t);for(let r=0;r<this.hashCount;r++){const o=this.de(i,s,r);if(!this.Ae(o))return!1}return!0}static create(e,t,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new zl(r,s,t);return i.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const t=Zu(e),[i,s]=eh(t);for(let r=0;r<this.hashCount;r++){const o=this.de(i,s,r);this.Re(o)}}Re(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class gi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,t,i,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const s=new Map;return s.set(e,ms.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new uo(P.min(),s,new te(F),gt(),M())}}class ms{constructor(e,t,i,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new ms(i,t,M(),M(),M())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,t,i,s){this.Ve=e,this.removedTargetIds=t,this.key=i,this.me=s}}class kp{constructor(e,t){this.targetId=e,this.fe=t}}class Np{constructor(e,t,i=we.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class th{constructor(){this.ge=0,this.pe=ih(),this.ye=we.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=M(),t=M(),i=M();return this.pe.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:R()}}),new ms(this.ye,this.we,e,t,i)}Fe(){this.Se=!1,this.pe=ih()}Me(e,t){this.Se=!0,this.pe=this.pe.insert(e,t)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class rw{constructor(e){this.Le=e,this.ke=new Map,this.qe=gt(),this.Qe=nh(),this.Ke=new te(F)}$e(e){for(const t of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(t,e.me):this.We(t,e.key,e.me);for(const t of e.removedTargetIds)this.We(t,e.key,e.me)}Ge(e){this.forEachTarget(e,t=>{const i=this.ze(t);switch(e.state){case 0:this.je(t)&&i.Ce(e.resumeToken);break;case 1:i.Ne(),i.be||i.Fe(),i.Ce(e.resumeToken);break;case 2:i.Ne(),i.be||this.removeTarget(t);break;case 3:this.je(t)&&(i.Be(),i.Ce(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),i.Ce(e.resumeToken));break;default:R()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ke.forEach((i,s)=>{this.je(s)&&t(s)})}Je(e){const t=e.targetId,i=e.fe.count,s=this.Ye(t);if(s){const r=s.target;if(ka(r))if(i===0){const o=new w(r.path);this.We(t,o,ge.newNoDocument(o,P.min()))}else K(i===1);else{const o=this.Ze(t);if(o!==i){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(t);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,c)}}}}}Xe(e){const t=e.fe.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=t;let o,a;try{o=tn(i).toUint8Array()}catch(l){if(l instanceof ap)return Fn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new zl(o,s,r)}catch(l){return Fn(l instanceof gi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,t,i){return t.fe.count===i-this.rt(e,t.targetId)?0:2}rt(e,t){const i=this.Le.getRemoteKeysForTarget(t);let s=0;return i.forEach(r=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(a)||(this.We(t,r,null),s++)}),s}it(e){const t=new Map;this.ke.forEach((r,o)=>{const a=this.Ye(o);if(a){if(r.current&&ka(a.target)){const l=new w(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,ge.newNoDocument(l,e))}r.De&&(t.set(o,r.ve()),r.Fe())}});let i=M();this.Qe.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(i=i.add(r))}),this.qe.forEach((r,o)=>o.setReadTime(e));const s=new uo(e,t,this.Ke,this.qe,i);return this.qe=gt(),this.Qe=nh(),this.Ke=new te(F),s}Ue(e,t){if(!this.je(e))return;const i=this.st(e,t.key)?2:0;this.ze(e).Me(t.key,i),this.qe=this.qe.insert(t.key,t),this.Qe=this.Qe.insert(t.key,this.ot(t.key).add(e))}We(e,t,i){if(!this.je(e))return;const s=this.ze(e);this.st(e,t)?s.Me(t,1):s.xe(t),this.Qe=this.Qe.insert(t,this.ot(t).delete(e)),i&&(this.qe=this.qe.insert(t,i))}removeTarget(e){this.ke.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let t=this.ke.get(e);return t||(t=new th,this.ke.set(e,t)),t}ot(e){let t=this.Qe.get(e);return t||(t=new fe(F),this.Qe=this.Qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||I("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.ke.get(e);return t&&t.be?null:this.Le._t(e)}He(e){this.ke.set(e,new th),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}st(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function nh(){return new te(w.comparator)}function ih(){return new te(w.comparator)}const ow=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),aw=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),lw=(()=>({and:"AND",or:"OR"}))();class cw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Oa(n,e){return n.useProto3Json||so(e)?e:{value:e}}function Er(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Dp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function uw(n,e){return Er(n,e.toTimestamp())}function et(n){return K(!!n),P.fromTimestamp(function(t){const i=Ot(t);return new ie(i.seconds,i.nanos)}(n))}function Gl(n,e){return function(i){return new G(["projects",i.projectId,"databases",i.database])}(n).child("documents").child(e).canonicalString()}function Op(n){const e=G.fromString(n);return K(Lp(e)),e}function xa(n,e){return Gl(n.databaseId,e.path)}function zo(n,e){const t=Op(e);if(t.get(1)!==n.databaseId.projectId)throw new T(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new T(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new w(xp(t))}function Ma(n,e){return Gl(n.databaseId,e)}function hw(n){const e=Op(n);return e.length===4?G.emptyPath():xp(e)}function Va(n){return new G(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function xp(n){return K(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function sh(n,e,t){return{name:xa(n,e),fields:t.value.mapValue.fields}}function dw(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:R()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(c,u){return c.useProto3Json?(K(u===void 0||typeof u=="string"),we.fromBase64String(u||"")):(K(u===void 0||u instanceof Uint8Array),we.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?_.UNKNOWN:bp(c.code);return new T(u,c.message||"")}(o);t=new Np(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=zo(n,i.document.name),r=et(i.document.updateTime),o=i.document.createTime?et(i.document.createTime):P.min(),a=new Ae({mapValue:{fields:i.document.fields}}),l=ge.newFoundDocument(s,r,o,a),c=i.targetIds||[],u=i.removedTargetIds||[];t=new Ks(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=zo(n,i.document),r=i.readTime?et(i.readTime):P.min(),o=ge.newNoDocument(s,r),a=i.removedTargetIds||[];t=new Ks([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=zo(n,i.document),r=i.removedTargetIds||[];t=new Ks([],r,s,null)}else{if(!("filter"in e))return R();{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new tw(s,r),a=i.targetId;t=new kp(a,o)}}return t}function fw(n,e){let t;if(e instanceof gs)t={update:sh(n,e.key,e.value)};else if(e instanceof $l)t={delete:xa(n,e.key)};else if(e instanceof Bt)t={update:sh(n,e.key,e.data),updateMask:Iw(e.fieldMask)};else{if(!(e instanceof JI))return R();t={verify:xa(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(r,o){const a=o.transform;if(a instanceof yr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof $i)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Hi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof vr)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw R()}(0,i))),e.precondition.isNone||(t.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:uw(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:R()}(n,e.precondition)),t}function pw(n,e){return n&&n.length>0?(K(e!==void 0),n.map(t=>function(s,r){let o=s.updateTime?et(s.updateTime):et(r);return o.isEqual(P.min())&&(o=et(r)),new QI(o,s.transformResults||[])}(t,e))):[]}function _w(n,e){return{documents:[Ma(n,e.path)]}}function gw(n,e){const t={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(t.parent=Ma(n,i),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Ma(n,i.popLast()),t.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(l){if(l.length!==0)return Vp(He.create(l,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const r=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:En(h.field),direction:vw(h.dir)}}(c))}(e.orderBy);r&&(t.structuredQuery.orderBy=r);const o=Oa(n,e.limit);return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),t}function mw(n){let e=hw(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){K(i===1);const u=t.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let r=[];t.where&&(r=function(h){const d=Mp(h);return d instanceof He&&hp(d)?d.getFilters():[d]}(t.where));let o=[];t.orderBy&&(o=function(h){return h.map(d=>function(p){return new mr(Tn(p.field),function(m){switch(m){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(p.direction))}(d))}(t.orderBy));let a=null;t.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,so(d)?null:d}(t.limit));let l=null;t.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new gr(f,d)}(t.startAt));let c=null;return t.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new gr(f,d)}(t.endAt)),VI(e,s,o,r,a,"F",l,c)}function yw(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return R()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Mp(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Tn(t.unaryFilter.field);return ee.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=Tn(t.unaryFilter.field);return ee.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Tn(t.unaryFilter.field);return ee.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Tn(t.unaryFilter.field);return ee.create(o,"!=",{nullValue:"NULL_VALUE"});default:return R()}}(n):n.fieldFilter!==void 0?function(t){return ee.create(Tn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return R()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return He.create(t.compositeFilter.filters.map(i=>Mp(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return R()}}(t.compositeFilter.op))}(n):R()}function vw(n){return ow[n]}function Ew(n){return aw[n]}function Tw(n){return lw[n]}function En(n){return{fieldPath:n.canonicalString()}}function Tn(n){return he.fromServerFormat(n.fieldPath)}function Vp(n){return n instanceof ee?function(t){if(t.op==="=="){if($u(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NAN"}};if(ju(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if($u(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NOT_NAN"}};if(ju(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:En(t.field),op:Ew(t.op),value:t.value}}}(n):n instanceof He?function(t){const i=t.getFilters().map(s=>Vp(s));return i.length===1?i[0]:{compositeFilter:{op:Tw(t.op),filters:i}}}(n):R()}function Iw(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Lp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,t,i,s,r=P.min(),o=P.min(),a=we.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Rt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Rt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Rt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Rt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e){this.ut=e}}function Cw(n){const e=mw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Da(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(){this.on=new Rw}addToCollectionParentIndex(e,t){return this.on.add(t),g.resolve()}getCollectionParents(e,t){return g.resolve(this.on.getEntries(t))}addFieldIndex(e,t){return g.resolve()}deleteFieldIndex(e,t){return g.resolve()}deleteAllFieldIndexes(e){return g.resolve()}createTargetIndexes(e,t){return g.resolve()}getDocumentsMatchingTarget(e,t){return g.resolve(null)}getIndexType(e,t){return g.resolve(0)}getFieldIndexes(e,t){return g.resolve([])}getNextCollectionGroupToUpdate(e){return g.resolve(null)}getMinOffset(e,t){return g.resolve(Dt.min())}getMinOffsetFromCollectionGroup(e,t){return g.resolve(Dt.min())}updateCollectionGroup(e,t,i){return g.resolve()}updateIndexEntries(e,t){return g.resolve()}}class Rw{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new fe(G.comparator),r=!s.has(i);return this.index[t]=s.add(i),r}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new fe(G.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Wn(0)}static Nn(){return new Wn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(){this.changes=new ti(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ge.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?g.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(i!==null&&wi(i.mutation,s,Oe.empty(),ie.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,M()).next(()=>i))}getLocalViewOfDocuments(e,t,i=M()){const s=zt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,i).next(r=>{let o=_i();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const i=zt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,M()))}populateOverlays(e,t,i){const s=[];return i.forEach(r=>{t.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,i,s){let r=gt();const o=Ii(),a=function(){return Ii()}();return t.forEach((l,c)=>{const u=i.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Bt)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),wi(u.mutation,c,u.mutation.getFieldMask(),ie.now())):o.set(c.key,Oe.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),t.forEach((c,u)=>{var h;return a.set(c,new Pw(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const i=Ii();let s=new te((o,a)=>o-a),r=M();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=t.get(l);if(c===null)return;let u=i.get(l)||Oe.empty();u=a.applyToLocalView(c,u),i.set(l,u);const h=(s.get(a.batchId)||M()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=Ep();u.forEach(d=>{if(!r.has(d)){const f=Sp(t.get(d),i.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return g.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,s){return function(o){return w.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):_p(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,s):this.getDocumentsMatchingCollectionQuery(e,t,i,s)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-r.size):g.resolve(zt());let a=-1,l=r;return o.next(c=>g.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?g.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,M())).next(u=>({batchId:a,changes:vp(u)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new w(t)).next(i=>{let s=_i();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,i,s){const r=t.collectionGroup;let o=_i();return this.indexManager.getCollectionParents(e,r).next(a=>g.forEach(a,l=>{const c=function(h,d){return new _s(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(t,l.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,i,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,r,s))).next(o=>{r.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,ge.newInvalidDocument(u)))});let a=_i();return o.forEach((l,c)=>{const u=r.get(l);u!==void 0&&wi(u.mutation,c,Oe.empty(),ie.now()),ao(t,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,t){return g.resolve(this.ur.get(t))}saveBundleMetadata(e,t){return this.ur.set(t.id,function(s){return{id:s.id,version:s.version,createTime:et(s.createTime)}}(t)),g.resolve()}getNamedQuery(e,t){return g.resolve(this.cr.get(t))}saveNamedQuery(e,t){return this.cr.set(t.name,function(s){return{name:s.name,query:Cw(s.bundledQuery),readTime:et(s.readTime)}}(t)),g.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(){this.overlays=new te(w.comparator),this.lr=new Map}getOverlay(e,t){return g.resolve(this.overlays.get(t))}getOverlays(e,t){const i=zt();return g.forEach(t,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((s,r)=>{this.lt(e,t,r)}),g.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.lr.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.lr.delete(i)),g.resolve()}getOverlaysForCollection(e,t,i){const s=zt(),r=t.length+1,o=new w(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return g.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let r=new te((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>i){let u=r.get(c.largestBatchId);u===null&&(u=zt(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=zt(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return g.resolve(a)}lt(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(i.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new ew(t,i));let r=this.lr.get(t);r===void 0&&(r=M(),this.lr.set(t,r)),this.lr.set(t,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(){this.hr=new fe(re.Pr),this.Ir=new fe(re.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,t){const i=new re(e,t);this.hr=this.hr.add(i),this.Ir=this.Ir.add(i)}Er(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.dr(new re(e,t))}Ar(e,t){e.forEach(i=>this.removeReference(i,t))}Rr(e){const t=new w(new G([])),i=new re(t,e),s=new re(t,e+1),r=[];return this.Ir.forEachInRange([i,s],o=>{this.dr(o),r.push(o.key)}),r}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const t=new w(new G([])),i=new re(t,e),s=new re(t,e+1);let r=M();return this.Ir.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const t=new re(e,0),i=this.hr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class re{constructor(e,t){this.key=e,this.gr=t}static Pr(e,t){return w.comparator(e.key,t.key)||F(e.gr,t.gr)}static Tr(e,t){return F(e.gr,t.gr)||w.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.pr=1,this.yr=new fe(re.Pr)}checkEmpty(e){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const r=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ZI(r,t,i,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new re(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(e,t){return g.resolve(this.wr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.Sr(i),r=s<0?0:s;return g.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new re(t,0),s=new re(t,Number.POSITIVE_INFINITY),r=[];return this.yr.forEachInRange([i,s],o=>{const a=this.wr(o.gr);r.push(a)}),g.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new fe(F);return t.forEach(s=>{const r=new re(s,0),o=new re(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([r,o],a=>{i=i.add(a.gr)})}),g.resolve(this.br(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let r=i;w.isDocumentKey(r)||(r=r.child(""));const o=new re(new w(r),0);let a=new fe(F);return this.yr.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.gr)),!0)},o),g.resolve(this.br(a))}br(e){const t=[];return e.forEach(i=>{const s=this.wr(i);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){K(this.Dr(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.yr;return g.forEach(t.mutations,s=>{const r=new re(s.key,t.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=i})}Fn(e){}containsKey(e,t){const i=new re(t,0),s=this.yr.firstAfterOrEqual(i);return g.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,g.resolve()}Dr(e,t){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const t=this.Sr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e){this.Cr=e,this.docs=function(){return new te(w.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),r=s?s.size:0,o=this.Cr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return g.resolve(i?i.document.mutableCopy():ge.newInvalidDocument(t))}getEntries(e,t){let i=gt();return t.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():ge.newInvalidDocument(s))}),g.resolve(i)}getDocumentsMatchingQuery(e,t,i,s){let r=gt();const o=t.path,a=new w(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||vI(yI(u),i)<=0||(s.has(u.key)||ao(t,u))&&(r=r.insert(u.key,u.mutableCopy()))}return g.resolve(r)}getAllFromCollectionGroup(e,t,i,s){R()}vr(e,t){return g.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new xw(this)}getSize(e){return g.resolve(this.size)}}class xw extends Sw{constructor(e){super(),this._r=e}applyChanges(e){const t=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?t.push(this._r.addEntry(e,s)):this._r.removeEntry(i)}),g.waitFor(t)}getFromCache(e,t){return this._r.getEntry(e,t)}getAllFromCache(e,t){return this._r.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e){this.persistence=e,this.Fr=new ti(t=>Wl(t),jl),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Kl,this.targetCount=0,this.Nr=Wn.On()}forEachTarget(e,t){return this.Fr.forEach((i,s)=>t(s)),g.resolve()}getLastRemoteSnapshotVersion(e){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return g.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.Mr&&(this.Mr=t),g.resolve()}kn(e){this.Fr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Nr=new Wn(t),this.highestTargetId=t),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,t){return this.kn(t),this.targetCount+=1,g.resolve()}updateTargetData(e,t){return this.kn(t),g.resolve()}removeTargetData(e,t){return this.Fr.delete(t.target),this.Or.Rr(t.targetId),this.targetCount-=1,g.resolve()}removeTargets(e,t,i){let s=0;const r=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=t&&i.get(a.targetId)===null&&(this.Fr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),g.waitFor(r).next(()=>s)}getTargetCount(e){return g.resolve(this.targetCount)}getTargetData(e,t){const i=this.Fr.get(t)||null;return g.resolve(i)}addMatchingKeys(e,t,i){return this.Or.Er(t,i),g.resolve()}removeMatchingKeys(e,t,i){this.Or.Ar(t,i);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),g.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Or.Rr(t),g.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Or.mr(t);return g.resolve(i)}containsKey(e,t){return g.resolve(this.Or.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e,t){this.Br={},this.overlays={},this.Lr=new Fl(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new Mw(this),this.indexManager=new Aw,this.remoteDocumentCache=function(s){return new Ow(s)}(i=>this.referenceDelegate.Qr(i)),this.serializer=new ww(t),this.Kr=new kw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Nw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Br[e.toKey()];return i||(i=new Dw(t,this.referenceDelegate),this.Br[e.toKey()]=i),i}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,t,i){I("MemoryPersistence","Starting transaction:",e);const s=new Lw(this.Lr.next());return this.referenceDelegate.$r(),i(s).next(r=>this.referenceDelegate.Ur(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Wr(e,t){return g.or(Object.values(this.Br).map(i=>()=>i.containsKey(e,t)))}}class Lw extends TI{constructor(e){super(),this.currentSequenceNumber=e}}class Ql{constructor(e){this.persistence=e,this.Gr=new Kl,this.zr=null}static jr(e){return new Ql(e)}get Hr(){if(this.zr)return this.zr;throw R()}addReference(e,t,i){return this.Gr.addReference(i,t),this.Hr.delete(i.toString()),g.resolve()}removeReference(e,t,i){return this.Gr.removeReference(i,t),this.Hr.add(i.toString()),g.resolve()}markPotentiallyOrphaned(e,t){return this.Hr.add(t.toString()),g.resolve()}removeTarget(e,t){this.Gr.Rr(t.targetId).forEach(s=>this.Hr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(r=>this.Hr.add(r.toString()))}).next(()=>i.removeTargetData(e,t))}$r(){this.zr=new Set}Ur(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Hr,i=>{const s=w.fromPath(i);return this.Jr(e,s).next(r=>{r||t.removeEntry(s,P.min())})}).next(()=>(this.zr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Jr(e,t).next(i=>{i?this.Hr.delete(t.toString()):this.Hr.add(t.toString())})}Qr(e){return 0}Jr(e,t){return g.or([()=>g.resolve(this.Gr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Wr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.ki=i,this.qi=s}static Qi(e,t){let i=M(),s=M();for(const r of t.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Yl(e,t.fromCache,i,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,t){this.Gi=e,this.indexManager=t,this.Ki=!0}getDocumentsMatchingQuery(e,t,i,s){const r={result:null};return this.zi(e,t).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.ji(e,t,s,i).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new Fw;return this.Hi(e,t,o).next(a=>{if(r.result=a,this.$i)return this.Ji(e,t,o,a.size)})}).next(()=>r.result)}Ji(e,t,i,s){return i.documentReadCount<this.Ui?(li()<=x.DEBUG&&I("QueryEngine","SDK will not create cache indexes for query:",vn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),g.resolve()):(li()<=x.DEBUG&&I("QueryEngine","Query:",vn(t),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Wi*s?(li()<=x.DEBUG&&I("QueryEngine","The SDK decides to create cache indexes for query:",vn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ze(t))):g.resolve())}zi(e,t){if(Ku(t))return g.resolve(null);let i=Ze(t);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Da(t,null,"F"),i=Ze(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=M(...r);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(l=>{const c=this.Yi(t,a);return this.Zi(t,c,o,l.readTime)?this.zi(e,Da(t,null,"F")):this.Xi(e,c,t,l)}))})))}ji(e,t,i,s){return Ku(t)||s.isEqual(P.min())?g.resolve(null):this.Gi.getDocuments(e,i).next(r=>{const o=this.Yi(t,r);return this.Zi(t,o,i,s)?g.resolve(null):(li()<=x.DEBUG&&I("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),vn(t)),this.Xi(e,o,t,mI(s,-1)).next(a=>a))})}Yi(e,t){let i=new fe(mp(e));return t.forEach((s,r)=>{ao(e,r)&&(i=i.add(r))}),i}Zi(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Hi(e,t,i){return li()<=x.DEBUG&&I("QueryEngine","Using full collection scan to execute query:",vn(t)),this.Gi.getDocumentsMatchingQuery(e,t,Dt.min(),i)}Xi(e,t,i,s){return this.Gi.getDocumentsMatchingQuery(e,i,s).next(r=>(t.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e,t,i,s){this.persistence=e,this.es=t,this.serializer=s,this.ts=new te(F),this.ns=new ti(r=>Wl(r),jl),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(i)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bw(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ts))}}function qw(n,e,t,i){return new Bw(n,e,t,i)}async function Fp(n,e){const t=k(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,t.os(e),t.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let l=M();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return t.localDocuments.getDocuments(i,l).next(c=>({_s:c,removedBatchIds:o,addedBatchIds:a}))})})}function Ww(n,e){const t=k(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=t.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let f=g.resolve();return d.forEach(p=>{f=f.next(()=>u.getEntry(l,p)).next(v=>{const m=c.docVersions.get(p);K(m!==null),v.version.compareTo(m)<0&&(h.applyToRemoteDocument(v,c),v.isValidDocument()&&(v.setReadTime(c.commitVersion),u.addEntry(v)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(t,i,e,r).next(()=>r.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(a){let l=M();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>t.localDocuments.getDocuments(i,s))})}function Up(n){const e=k(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.qr.getLastRemoteSnapshotVersion(t))}function jw(n,e){const t=k(n),i=e.snapshotVersion;let s=t.ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=t.ss.newChangeBuffer({trackRemovals:!0});s=t.ts;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(t.qr.removeMatchingKeys(r,u.removedDocuments,h).next(()=>t.qr.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(we.EMPTY_BYTE_STRING,P.min()).withLastLimboFreeSnapshotVersion(P.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,i)),s=s.insert(h,f),function(v,m,A){return v.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(d,f,u)&&a.push(t.qr.updateTargetData(r,f))});let l=gt(),c=M();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push($w(r,o,e.documentUpdates).next(u=>{l=u.us,c=u.cs})),!i.isEqual(P.min())){const u=t.qr.getLastRemoteSnapshotVersion(r).next(h=>t.qr.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(u)}return g.waitFor(a).next(()=>o.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(t.ts=s,r))}function $w(n,e,t){let i=M(),s=M();return t.forEach(r=>i=i.add(r)),e.getEntries(n,i).next(r=>{let o=gt();return t.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(P.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):I("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{us:o,cs:s}})}function Hw(n,e){const t=k(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function zw(n,e){const t=k(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return t.qr.getTargetData(i,e).next(r=>r?(s=r,g.resolve(s)):t.qr.allocateTargetId(i).next(o=>(s=new Rt(e,o,"TargetPurposeListen",i.currentSequenceNumber),t.qr.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=t.ts.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.ts=t.ts.insert(i.targetId,i),t.ns.set(e,i.targetId)),i})}async function La(n,e,t){const i=k(n),s=i.ts.get(e),r=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ps(o))throw o;I("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.ts=i.ts.remove(e),i.ns.delete(s.target)}function rh(n,e,t){const i=k(n);let s=P.min(),r=M();return i.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=k(l),d=h.ns.get(u);return d!==void 0?g.resolve(h.ts.get(d)):h.qr.getTargetData(c,u)}(i,o,Ze(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>i.es.getDocumentsMatchingQuery(o,e,t?s:P.min(),t?r:M())).next(a=>(Gw(i,FI(e),a),{documents:a,ls:r})))}function Gw(n,e,t){let i=n.rs.get(e)||P.min();t.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),n.rs.set(e,i)}class oh{constructor(){this.activeTargetIds=$I()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Kw{constructor(){this.eo=new oh,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,t,i){this.no[e]=t}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new oh,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){I("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){I("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Us=null;function Go(){return Us===null?Us=function(){return 268435456+Math.round(2147483648*Math.random())}():Us++,"0x"+Us.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe="WebChannelConnection";class Jw extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.mo=i+"://"+t.host,this.fo=`projects/${s}/databases/${r}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${r}`}get yo(){return!1}wo(t,i,s,r,o){const a=Go(),l=this.So(t,i);I("RestConnection",`Sending RPC '${t}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(c,r,o),this.Do(t,l,c,s).then(u=>(I("RestConnection",`Received RPC '${t}' ${a}: `,u),u),u=>{throw Fn("RestConnection",`RPC '${t}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}Co(t,i,s,r,o,a){return this.wo(t,i,s,r,o)}bo(t,i,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ei}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((r,o)=>t[o]=r),s&&s.headers.forEach((r,o)=>t[o]=r)}So(t,i){const s=Yw[t];return`${this.mo}/v1/${i}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,t,i,s){const r=Go();return new Promise((o,a)=>{const l=new oI;l.setWithCredentials(!0),l.listenOnce(iI.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ho.NO_ERROR:const u=l.getResponseJson();I(pe,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case Ho.TIMEOUT:I(pe,`RPC '${e}' ${r} timed out`),a(new T(_.DEADLINE_EXCEEDED,"Request time out"));break;case Ho.HTTP_ERROR:const h=l.getStatus();if(I(pe,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const p=function(m){const A=m.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(A)>=0?A:_.UNKNOWN}(f.status);a(new T(p,f.message))}else a(new T(_.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new T(_.UNAVAILABLE,"Connection failed."));break;default:R()}}finally{I(pe,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(s);I(pe,`RPC '${e}' ${r} sending request:`,s),l.send(t,"POST",c,i,15)})}vo(e,t,i){const s=Go(),r=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=tI(),a=nI(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new rI({})),this.bo(l.initMessageHeaders,t,i),l.encodeInitMessageHeaders=!0;const u=r.join("");I(pe,`Creating RPC '${e}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const p=new Xw({co:m=>{f?I(pe,`Not sending because RPC '${e}' stream ${s} is closed:`,m):(d||(I(pe,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),I(pe,`RPC '${e}' stream ${s} sending:`,m),h.send(m))},lo:()=>h.close()}),v=(m,A,L)=>{m.listen(A,B=>{try{L(B)}catch(W){setTimeout(()=>{throw W},0)}})};return v(h,Vs.EventType.OPEN,()=>{f||I(pe,`RPC '${e}' stream ${s} transport opened.`)}),v(h,Vs.EventType.CLOSE,()=>{f||(f=!0,I(pe,`RPC '${e}' stream ${s} transport closed`),p.Ro())}),v(h,Vs.EventType.ERROR,m=>{f||(f=!0,Fn(pe,`RPC '${e}' stream ${s} transport errored:`,m),p.Ro(new T(_.UNAVAILABLE,"The operation could not be completed")))}),v(h,Vs.EventType.MESSAGE,m=>{var A;if(!f){const L=m.data[0];K(!!L);const B=L,W=B.error||((A=B[0])===null||A===void 0?void 0:A.error);if(W){I(pe,`RPC '${e}' stream ${s} received error:`,W);const Ne=W.status;let De=function(ri){const bs=J[ri];if(bs!==void 0)return bp(bs)}(Ne),qt=W.message;De===void 0&&(De=_.INTERNAL,qt="Unknown error status: "+Ne+" with message "+W.message),f=!0,p.Ro(new T(De,qt)),h.close()}else I(pe,`RPC '${e}' stream ${s} received:`,L),p.Vo(L)}}),v(a,sI.STAT_EVENT,m=>{m.stat===Lu.PROXY?I(pe,`RPC '${e}' stream ${s} detected buffering proxy`):m.stat===Lu.NOPROXY&&I(pe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{p.Ao()},0),p}}function Ko(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(n){return new cw(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e,t,i=1e3,s=1.5,r=6e4){this.si=e,this.timerId=t,this.Fo=i,this.Mo=s,this.xo=r,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const t=Math.floor(this.Oo+this.qo()),i=Math.max(0,Date.now()-this.Bo),s=Math.max(0,t-i);s>0&&I("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e,t,i,s,r,o,a,l){this.si=e,this.Ko=i,this.$o=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new Bp(e,t)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,t){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():t&&t.code===_.RESOURCE_EXHAUSTED?(_t(t.toString()),_t("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):t&&t.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(t)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),t=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Uo===t&&this.s_(i,s)},i=>{e(()=>{const s=new T(_.UNKNOWN,"Fetching auth token failed: "+i.message);return this.o_(s)})})}s_(e,t){const i=this.i_(this.Uo);this.stream=this.__(e,t),this.stream.ho(()=>{i(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{i(()=>this.o_(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return I("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return t=>{this.si.enqueueAndForget(()=>this.Uo===e?t():(I("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Zw extends qp{constructor(e,t,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,o),this.serializer=r}__(e,t){return this.connection.vo("Listen",e,t)}onMessage(e){this.zo.reset();const t=dw(this.serializer,e),i=function(r){if(!("targetChange"in r))return P.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?P.min():o.readTime?et(o.readTime):P.min()}(e);return this.listener.a_(t,i)}u_(e){const t={};t.database=Va(this.serializer),t.addTarget=function(r,o){let a;const l=o.target;if(a=ka(l)?{documents:_w(r,l)}:{query:gw(r,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Dp(r,o.resumeToken);const c=Oa(r,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(P.min())>0){a.readTime=Er(r,o.snapshotVersion.toTimestamp());const c=Oa(r,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const i=yw(this.serializer,e);i&&(t.labels=i),this.e_(t)}c_(e){const t={};t.database=Va(this.serializer),t.removeTarget=e,this.e_(t)}}class eC extends qp{constructor(e,t,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,s,o),this.serializer=r,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,t){return this.connection.vo("Write",e,t)}onMessage(e){if(K(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const t=pw(e.writeResults,e.commitTime),i=et(e.commitTime);return this.listener.I_(i,t)}return K(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=Va(this.serializer),this.e_(e)}P_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>fw(this.serializer,i))};this.e_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC extends class{}{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new T(_.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,t,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.wo(e,t,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new T(_.UNKNOWN,s.toString())})}Co(e,t,i,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Co(e,t,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new T(_.UNKNOWN,r.toString())})}terminate(){this.d_=!0}}class nC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(_t(t),this.f_=!1):I("OnlineStateTracker",t)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e,t,i,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=r,this.F_.ro(o=>{i.enqueueAndForget(async()=>{hn(this)&&(I("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=k(l);c.C_.add(4),await ys(c),c.M_.set("Unknown"),c.C_.delete(4),await fo(c)}(this))})}),this.M_=new nC(i,s)}}async function fo(n){if(hn(n))for(const e of n.v_)await e(!0)}async function ys(n){for(const e of n.v_)await e(!1)}function Wp(n,e){const t=k(n);t.D_.has(e.targetId)||(t.D_.set(e.targetId,e),Zl(t)?Jl(t):ni(t).Ho()&&Xl(t,e))}function jp(n,e){const t=k(n),i=ni(t);t.D_.delete(e),i.Ho()&&$p(t,e),t.D_.size===0&&(i.Ho()?i.Zo():hn(t)&&t.M_.set("Unknown"))}function Xl(n,e){if(n.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(P.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ni(n).u_(e)}function $p(n,e){n.x_.Oe(e),ni(n).c_(e)}function Jl(n){n.x_=new rw({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>n.D_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),ni(n).start(),n.M_.g_()}function Zl(n){return hn(n)&&!ni(n).jo()&&n.D_.size>0}function hn(n){return k(n).C_.size===0}function Hp(n){n.x_=void 0}async function sC(n){n.D_.forEach((e,t)=>{Xl(n,e)})}async function rC(n,e){Hp(n),Zl(n)?(n.M_.w_(e),Jl(n)):n.M_.set("Unknown")}async function oC(n,e,t){if(n.M_.set("Online"),e instanceof Np&&e.state===2&&e.cause)try{await async function(s,r){const o=r.cause;for(const a of r.targetIds)s.D_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.D_.delete(a),s.x_.removeTarget(a))}(n,e)}catch(i){I("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Tr(n,i)}else if(e instanceof Ks?n.x_.$e(e):e instanceof kp?n.x_.Je(e):n.x_.Ge(e),!t.isEqual(P.min()))try{const i=await Up(n.localStore);t.compareTo(i)>=0&&await function(r,o){const a=r.x_.it(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=r.D_.get(c);u&&r.D_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=r.D_.get(l);if(!u)return;r.D_.set(l,u.withResumeToken(we.EMPTY_BYTE_STRING,u.snapshotVersion)),$p(r,l);const h=new Rt(u.target,l,c,u.sequenceNumber);Xl(r,h)}),r.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(i){I("RemoteStore","Failed to raise snapshot:",i),await Tr(n,i)}}async function Tr(n,e,t){if(!ps(e))throw e;n.C_.add(1),await ys(n),n.M_.set("Offline"),t||(t=()=>Up(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{I("RemoteStore","Retrying IndexedDB access"),await t(),n.C_.delete(1),await fo(n)})}function zp(n,e){return e().catch(t=>Tr(n,t,e))}async function po(n){const e=k(n),t=xt(e);let i=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;aC(e);)try{const s=await Hw(e.localStore,i);if(s===null){e.b_.length===0&&t.Zo();break}i=s.batchId,lC(e,s)}catch(s){await Tr(e,s)}Gp(e)&&Kp(e)}function aC(n){return hn(n)&&n.b_.length<10}function lC(n,e){n.b_.push(e);const t=xt(n);t.Ho()&&t.h_&&t.P_(e.mutations)}function Gp(n){return hn(n)&&!xt(n).jo()&&n.b_.length>0}function Kp(n){xt(n).start()}async function cC(n){xt(n).E_()}async function uC(n){const e=xt(n);for(const t of n.b_)e.P_(t.mutations)}async function hC(n,e,t){const i=n.b_.shift(),s=Hl.from(i,e,t);await zp(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await po(n)}async function dC(n,e){e&&xt(n).h_&&await async function(i,s){if(function(o){return nw(o)&&o!==_.ABORTED}(s.code)){const r=i.b_.shift();xt(i).Yo(),await zp(i,()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s)),await po(i)}}(n,e),Gp(n)&&Kp(n)}async function lh(n,e){const t=k(n);t.asyncQueue.verifyOperationInProgress(),I("RemoteStore","RemoteStore received new credentials");const i=hn(t);t.C_.add(3),await ys(t),i&&t.M_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.C_.delete(3),await fo(t)}async function fC(n,e){const t=k(n);e?(t.C_.delete(2),await fo(t)):e||(t.C_.add(2),await ys(t),t.M_.set("Unknown"))}function ni(n){return n.O_||(n.O_=function(t,i,s){const r=k(t);return r.A_(),new Zw(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(n.datastore,n.asyncQueue,{ho:sC.bind(null,n),Io:rC.bind(null,n),a_:oC.bind(null,n)}),n.v_.push(async e=>{e?(n.O_.Yo(),Zl(n)?Jl(n):n.M_.set("Unknown")):(await n.O_.stop(),Hp(n))})),n.O_}function xt(n){return n.N_||(n.N_=function(t,i,s){const r=k(t);return r.A_(),new eC(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(n.datastore,n.asyncQueue,{ho:cC.bind(null,n),Io:dC.bind(null,n),T_:uC.bind(null,n),I_:hC.bind(null,n)}),n.v_.push(async e=>{e?(n.N_.Yo(),await po(n)):(await n.N_.stop(),n.b_.length>0&&(I("RemoteStore",`Stopping write stream with ${n.b_.length} pending writes`),n.b_=[]))})),n.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,t,i,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new ct,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,r){const o=Date.now()+i,a=new ec(e,t,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new T(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function tc(n,e){if(_t("AsyncQueue",`${e}: ${n}`),ps(n))return new T(_.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.comparator=e?(t,i)=>e(t,i)||w.comparator(t.key,i.key):(t,i)=>w.comparator(t.key,i.key),this.keyedMap=_i(),this.sortedSet=new te(this.comparator)}static emptySet(e){return new kn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof kn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new kn;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(){this.B_=new te(w.comparator)}track(e){const t=e.doc.key,i=this.B_.get(t);i?e.type!==0&&i.type===3?this.B_=this.B_.insert(t,e):e.type===3&&i.type!==1?this.B_=this.B_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.B_=this.B_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.B_=this.B_.remove(t):e.type===1&&i.type===2?this.B_=this.B_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):R():this.B_=this.B_.insert(t,e)}L_(){const e=[];return this.B_.inorderTraversal((t,i)=>{e.push(i)}),e}}class jn{constructor(e,t,i,s,r,o,a,l,c){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,t,i,s,r){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new jn(e,t,kn.emptySet(t),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&oo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(){this.k_=void 0,this.listeners=[]}}class _C{constructor(){this.queries=new ti(e=>gp(e),oo),this.onlineState="Unknown",this.q_=new Set}}async function nc(n,e){const t=k(n),i=e.query;let s=!1,r=t.queries.get(i);if(r||(s=!0,r=new pC),s)try{r.k_=await t.onListen(i)}catch(o){const a=tc(o,`Initialization of query '${vn(e.query)}' failed`);return void e.onError(a)}t.queries.set(i,r),r.listeners.push(e),e.Q_(t.onlineState),r.k_&&e.K_(r.k_)&&sc(t)}async function ic(n,e){const t=k(n),i=e.query;let s=!1;const r=t.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return t.queries.delete(i),t.onUnlisten(i)}function gC(n,e){const t=k(n);let i=!1;for(const s of e){const r=s.query,o=t.queries.get(r);if(o){for(const a of o.listeners)a.K_(s)&&(i=!0);o.k_=s}}i&&sc(t)}function mC(n,e,t){const i=k(n),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(t);i.queries.delete(e)}function sc(n){n.q_.forEach(e=>{e.next()})}class rc{constructor(e,t,i){this.query=e,this.U_=t,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=i||{}}K_(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new jn(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.W_?this.z_(e)&&(this.U_.next(e),t=!0):this.j_(e,this.onlineState)&&(this.H_(e),t=!0),this.G_=e,t}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let t=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),t=!0),t}j_(e,t){if(!e.fromCache)return!0;const i=t!=="Offline";return(!this.options.J_||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const t=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}H_(e){e=jn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e){this.key=e}}class Yp{constructor(e){this.key=e}}class yC{constructor(e,t){this.query=e,this.ia=t,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=M(),this.mutatedKeys=M(),this._a=mp(e),this.aa=new kn(this._a)}get ua(){return this.ia}ca(e,t){const i=t?t.la:new ch,s=t?t.aa:this.aa;let r=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=ao(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let m=!1;d&&f?d.data.isEqual(f.data)?p!==v&&(i.track({type:3,doc:f}),m=!0):this.ha(d,f)||(i.track({type:2,doc:f}),m=!0,(l&&this._a(f,l)>0||c&&this._a(f,c)<0)&&(a=!0)):!d&&f?(i.track({type:0,doc:f}),m=!0):d&&!f&&(i.track({type:1,doc:d}),m=!0,(l||c)&&(a=!0)),m&&(f?(o=o.add(f),r=v?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),i.track({type:1,doc:u})}return{aa:o,la:i,Zi:a,mutatedKeys:r}}ha(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i){const s=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const r=e.la.L_();r.sort((c,u)=>function(d,f){const p=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return R()}};return p(d)-p(f)}(c.type,u.type)||this._a(c.doc,u.doc)),this.Pa(i);const o=t?this.Ia():[],a=this.oa.size===0&&this.current?1:0,l=a!==this.sa;return this.sa=a,r.length!==0||l?{snapshot:new jn(this.query,e.aa,s,r,e.mutatedKeys,a===0,l,!1,!!i&&i.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new ch,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(t=>this.ia=this.ia.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.ia=this.ia.delete(t)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=M(),this.aa.forEach(i=>{this.Ea(i.key)&&(this.oa=this.oa.add(i.key))});const t=[];return e.forEach(i=>{this.oa.has(i)||t.push(new Yp(i))}),this.oa.forEach(i=>{e.has(i)||t.push(new Qp(i))}),t}da(e){this.ia=e.ls,this.oa=M();const t=this.ca(e.documents);return this.applyChanges(t,!0)}Aa(){return jn.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class vC{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class EC{constructor(e){this.key=e,this.Ra=!1}}class TC{constructor(e,t,i,s,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new ti(a=>gp(a),oo),this.fa=new Map,this.ga=new Set,this.pa=new te(w.comparator),this.ya=new Map,this.wa=new Kl,this.Sa={},this.ba=new Map,this.Da=Wn.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function IC(n,e){const t=DC(n);let i,s;const r=t.ma.get(e);if(r)i=r.targetId,t.sharedClientState.addLocalQueryTarget(i),s=r.view.Aa();else{const o=await zw(t.localStore,Ze(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await wC(t,e,i,a==="current",o.resumeToken),t.isPrimaryClient&&Wp(t.remoteStore,o)}return s}async function wC(n,e,t,i,s){n.va=(h,d,f)=>async function(v,m,A,L){let B=m.view.ca(A);B.Zi&&(B=await rh(v.localStore,m.query,!1).then(({documents:De})=>m.view.ca(De,B)));const W=L&&L.targetChanges.get(m.targetId),Ne=m.view.applyChanges(B,v.isPrimaryClient,W);return hh(v,m.targetId,Ne.Ta),Ne.snapshot}(n,h,d,f);const r=await rh(n.localStore,e,!0),o=new yC(e,r.ls),a=o.ca(r.documents),l=ms.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",s),c=o.applyChanges(a,n.isPrimaryClient,l);hh(n,t,c.Ta);const u=new vC(e,t,o);return n.ma.set(e,u),n.fa.has(t)?n.fa.get(t).push(e):n.fa.set(t,[e]),c.snapshot}async function CC(n,e){const t=k(n),i=t.ma.get(e),s=t.fa.get(i.targetId);if(s.length>1)return t.fa.set(i.targetId,s.filter(r=>!oo(r,e))),void t.ma.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(i.targetId),t.sharedClientState.isActiveQueryTarget(i.targetId)||await La(t.localStore,i.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(i.targetId),jp(t.remoteStore,i.targetId),Fa(t,i.targetId)}).catch(fs)):(Fa(t,i.targetId),await La(t.localStore,i.targetId,!0))}async function AC(n,e,t){const i=OC(n);try{const s=await function(o,a){const l=k(o),c=ie.now(),u=a.reduce((f,p)=>f.add(p.key),M());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let p=gt(),v=M();return l.ss.getEntries(f,u).next(m=>{p=m,p.forEach((A,L)=>{L.isValidDocument()||(v=v.add(A))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,p)).next(m=>{h=m;const A=[];for(const L of a){const B=XI(L,h.get(L.key).overlayedDocument);B!=null&&A.push(new Bt(L.key,B,lp(B.value.mapValue),Fe.exists(!0)))}return l.mutationQueue.addMutationBatch(f,c,A,a)}).next(m=>{d=m;const A=m.applyToLocalDocumentSet(h,v);return l.documentOverlayCache.saveOverlays(f,m.batchId,A)})}).then(()=>({batchId:d.batchId,changes:vp(h)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.Sa[o.currentUser.toKey()];c||(c=new te(F)),c=c.insert(a,l),o.Sa[o.currentUser.toKey()]=c}(i,s.batchId,t),await vs(i,s.changes),await po(i.remoteStore)}catch(s){const r=tc(s,"Failed to persist write");t.reject(r)}}async function Xp(n,e){const t=k(n);try{const i=await jw(t.localStore,e);e.targetChanges.forEach((s,r)=>{const o=t.ya.get(r);o&&(K(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ra=!0:s.modifiedDocuments.size>0?K(o.Ra):s.removedDocuments.size>0&&(K(o.Ra),o.Ra=!1))}),await vs(t,i,e)}catch(i){await fs(i)}}function uh(n,e,t){const i=k(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.ma.forEach((r,o)=>{const a=o.view.Q_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=k(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.Q_(a)&&(c=!0)}),c&&sc(l)}(i.eventManager,e),s.length&&i.Va.a_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function RC(n,e,t){const i=k(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.ya.get(e),r=s&&s.key;if(r){let o=new te(w.comparator);o=o.insert(r,ge.newNoDocument(r,P.min()));const a=M().add(r),l=new uo(P.min(),new Map,new te(F),o,a);await Xp(i,l),i.pa=i.pa.remove(r),i.ya.delete(e),oc(i)}else await La(i.localStore,e,!1).then(()=>Fa(i,e,t)).catch(fs)}async function SC(n,e){const t=k(n),i=e.batch.batchId;try{const s=await Ww(t.localStore,e);Zp(t,i,null),Jp(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await vs(t,s)}catch(s){await fs(s)}}async function PC(n,e,t){const i=k(n);try{const s=await function(o,a){const l=k(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(K(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(i.localStore,e);Zp(i,e,t),Jp(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await vs(i,s)}catch(s){await fs(s)}}function Jp(n,e){(n.ba.get(e)||[]).forEach(t=>{t.resolve()}),n.ba.delete(e)}function Zp(n,e,t){const i=k(n);let s=i.Sa[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(t?r.reject(t):r.resolve(),s=s.remove(e)),i.Sa[i.currentUser.toKey()]=s}}function Fa(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.fa.get(e))n.ma.delete(i),t&&n.Va.Fa(i,t);n.fa.delete(e),n.isPrimaryClient&&n.wa.Rr(e).forEach(i=>{n.wa.containsKey(i)||e_(n,i)})}function e_(n,e){n.ga.delete(e.path.canonicalString());const t=n.pa.get(e);t!==null&&(jp(n.remoteStore,t),n.pa=n.pa.remove(e),n.ya.delete(t),oc(n))}function hh(n,e,t){for(const i of t)i instanceof Qp?(n.wa.addReference(i.key,e),bC(n,i)):i instanceof Yp?(I("SyncEngine","Document no longer in limbo: "+i.key),n.wa.removeReference(i.key,e),n.wa.containsKey(i.key)||e_(n,i.key)):R()}function bC(n,e){const t=e.key,i=t.path.canonicalString();n.pa.get(t)||n.ga.has(i)||(I("SyncEngine","New document in limbo: "+t),n.ga.add(i),oc(n))}function oc(n){for(;n.ga.size>0&&n.pa.size<n.maxConcurrentLimboResolutions;){const e=n.ga.values().next().value;n.ga.delete(e);const t=new w(G.fromString(e)),i=n.Da.next();n.ya.set(i,new EC(t)),n.pa=n.pa.insert(t,i),Wp(n.remoteStore,new Rt(Ze(ro(t.path)),i,"TargetPurposeLimboResolution",Fl._e))}}async function vs(n,e,t){const i=k(n),s=[],r=[],o=[];i.ma.isEmpty()||(i.ma.forEach((a,l)=>{o.push(i.va(l,e,t).then(c=>{if((c||t)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=Yl.Qi(l.targetId,c);r.push(u)}}))}),await Promise.all(o),i.Va.a_(s),await async function(l,c){const u=k(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>g.forEach(c,d=>g.forEach(d.ki,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>g.forEach(d.qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!ps(h))throw h;I("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.ts.get(d),p=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(p);u.ts=u.ts.insert(d,v)}}}(i.localStore,r))}async function kC(n,e){const t=k(n);if(!t.currentUser.isEqual(e)){I("SyncEngine","User change. New user:",e.toKey());const i=await Fp(t.localStore,e);t.currentUser=e,function(r,o){r.ba.forEach(a=>{a.forEach(l=>{l.reject(new T(_.CANCELLED,o))})}),r.ba.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await vs(t,i._s)}}function NC(n,e){const t=k(n),i=t.ya.get(e);if(i&&i.Ra)return M().add(i.key);{let s=M();const r=t.fa.get(e);if(!r)return s;for(const o of r){const a=t.ma.get(o);s=s.unionWith(a.view.ua)}return s}}function DC(n){const e=k(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Xp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=NC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=RC.bind(null,e),e.Va.a_=gC.bind(null,e.eventManager),e.Va.Fa=mC.bind(null,e.eventManager),e}function OC(n){const e=k(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=SC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=PC.bind(null,e),e}class dh{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ho(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return qw(this.persistence,new Uw,e.initialUser,this.serializer)}createPersistence(e){return new Vw(Ql.jr,this.serializer)}createSharedClientState(e){return new Kw}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class xC{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>uh(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=kC.bind(null,this.syncEngine),await fC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new _C}()}createDatastore(e){const t=ho(e.databaseInfo.databaseId),i=function(r){return new Jw(r)}(e.databaseInfo);return function(r,o,a,l){return new tC(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,s,r,o,a){return new iC(i,s,r,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>uh(this.syncEngine,t,0),function(){return ah.D()?new ah:new Qw}())}createSyncEngine(e,t){return function(s,r,o,a,l,c,u){const h=new TC(s,r,o,a,l,c);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(t){const i=k(t);I("RemoteStore","RemoteStore shutting down."),i.C_.add(5),await ys(i),i.F_.shutdown(),i.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):_t("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e,t,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=s,this.user=_e.UNAUTHENTICATED,this.clientId=rp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{I("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(I("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ct;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=tc(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Qo(n,e){n.asyncQueue.verifyOperationInProgress(),I("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await Fp(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function fh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await LC(n);I("FirestoreClient","Initializing OnlineComponentProvider");const i=await n.getConfiguration();await e.initialize(t,i),n.setCredentialChangeListener(s=>lh(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,r)=>lh(e.remoteStore,r)),n._onlineComponents=e}function VC(n){return n.name==="FirebaseError"?n.code===_.FAILED_PRECONDITION||n.code===_.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function LC(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){I("FirestoreClient","Using user provided OfflineComponentProvider");try{await Qo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!VC(t))throw t;Fn("Error using user provided cache. Falling back to memory cache: "+t),await Qo(n,new dh)}}else I("FirestoreClient","Using default OfflineComponentProvider"),await Qo(n,new dh);return n._offlineComponents}async function t_(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(I("FirestoreClient","Using user provided OnlineComponentProvider"),await fh(n,n._uninitializedComponentsProvider._online)):(I("FirestoreClient","Using default OnlineComponentProvider"),await fh(n,new xC))),n._onlineComponents}function FC(n){return t_(n).then(e=>e.syncEngine)}async function Ir(n){const e=await t_(n),t=e.eventManager;return t.onListen=IC.bind(null,e.syncEngine),t.onUnlisten=CC.bind(null,e.syncEngine),t}function UC(n,e,t={}){const i=new ct;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new ac({next:d=>{o.enqueueAndForget(()=>ic(r,h));const f=d.docs.has(a);!f&&d.fromCache?c.reject(new T(_.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?c.reject(new T(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new rc(ro(a.path),u,{includeMetadataChanges:!0,J_:!0});return nc(r,h)}(await Ir(n),n.asyncQueue,e,t,i)),i.promise}function BC(n,e,t={}){const i=new ct;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new ac({next:d=>{o.enqueueAndForget(()=>ic(r,h)),d.fromCache&&l.source==="server"?c.reject(new T(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new rc(a,u,{includeMetadataChanges:!0,J_:!0});return nc(r,h)}(await Ir(n),n.asyncQueue,e,t,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(n,e,t){if(!t)throw new T(_.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function qC(n,e,t,i){if(e===!0&&i===!0)throw new T(_.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function _h(n){if(!w.isDocumentKey(n))throw new T(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function gh(n){if(w.isDocumentKey(n))throw new T(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function _o(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":R()}function be(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new T(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=_o(n);throw new T(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new T(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new T(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=n_((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new T(_.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new T(_.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new T(_.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class go{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new T(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new T(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mh(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new lI;switch(i.type){case"firstParty":return new dI(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new T(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=ph.get(t);i&&(I("ComponentProvider","Removing Datastore"),ph.delete(t),i.terminate())}(this),Promise.resolve()}}function WC(n,e,t,i={}){var s;const r=(n=be(n,go))._getSettings(),o=`${e}:${t}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Fn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let a,l;if(typeof i.mockUserToken=="string")a=i.mockUserToken,l=_e.MOCK_USER;else{a=nl(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new T(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new _e(c)}n._authCredentials=new cI(new sp(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new dn(this.firestore,e,this._query)}}class Te{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Te(this.firestore,e,this._key)}}class kt extends dn{constructor(e,t,i){super(e,t,ro(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Te(this.firestore,null,new w(e))}withConverter(e){return new kt(this.firestore,e,this._path)}}function OS(n,e,...t){if(n=Q(n),i_("collection","path",e),n instanceof go){const i=G.fromString(e,...t);return gh(i),new kt(n,null,i)}{if(!(n instanceof Te||n instanceof kt))throw new T(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(G.fromString(e,...t));return gh(i),new kt(n.firestore,null,i)}}function jC(n,e,...t){if(n=Q(n),arguments.length===1&&(e=rp.newId()),i_("doc","path",e),n instanceof go){const i=G.fromString(e,...t);return _h(i),new Te(n,null,new w(i))}{if(!(n instanceof Te||n instanceof kt))throw new T(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(G.fromString(e,...t));return _h(i),new Te(n.firestore,n instanceof kt?n.converter:null,new w(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new Bp(this,"async_queue_retry"),this.iu=()=>{const t=Ko();t&&I("AsyncQueue","Visibility state changed to "+t.visibilityState),this.zo.Qo()};const e=Ko();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const t=Ko();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const t=new ct;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!ps(e))throw e;I("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const t=this.Ja.then(()=>(this.tu=!0,e().catch(i=>{this.eu=i,this.tu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw _t("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.tu=!1,i))));return this.Ja=t,t}enqueueAfterDelay(e,t,i){this.su(),this.ru.indexOf(e)>-1&&(t=0);const s=ec.createAndSchedule(this,e,t,i,r=>this.au(r));return this.Xa.push(s),s}su(){this.eu&&R()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const t of this.Xa)if(t.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.Xa)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const t=this.Xa.indexOf(e);this.Xa.splice(t,1)}}function yh(n){return function(t,i){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1}(n,["next","error","complete"])}class mt extends go{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=function(){return new $C}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||s_(this),this._firestoreClient.terminate()}}function HC(n,e){const t=typeof n=="object"?n:es(),i=typeof n=="string"?n:e||"(default)",s=Yn(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=Lr("firestore");r&&WC(s,...r)}return s}function mo(n){return n._firestoreClient||s_(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function s_(n){var e,t,i;const s=n._freezeSettings(),r=function(a,l,c,u){return new CI(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,n_(u.experimentalLongPollingOptions),u.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new MC(n._authCredentials,n._appCheckCredentials,n._queue,r),!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $n(we.fromBase64String(e))}catch(t){throw new T(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new $n(we.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new T(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new he(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new T(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new T(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return F(this._lat,e._lat)||F(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC=/^__.*__$/;class GC{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Bt(e,this.data,this.fieldMask,t,this.fieldTransforms):new gs(e,this.data,t,this.fieldTransforms)}}class r_{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Bt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function o_(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw R()}}class uc{constructor(e,t,i,s,r,o){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Pu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new uc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Tu({path:i,du:!1});return s.Au(e),s}Ru(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Tu({path:i,du:!1});return s.Pu(),s}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return wr(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(o_(this.Iu)&&zC.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class KC{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||ho(e)}pu(e,t,i,s=!1){return new uc({Iu:e,methodName:t,gu:i,path:he.emptyPath(),du:!1,fu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vo(n){const e=n._freezeSettings(),t=ho(n._databaseId);return new KC(n._databaseId,!!e.ignoreUndefinedProperties,t)}function a_(n,e,t,i,s,r={}){const o=n.pu(r.merge||r.mergeFields?2:0,e,t,s);hc("Data must be an object, but it was:",o,i);const a=l_(i,o);let l,c;if(r.merge)l=new Oe(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=Ua(e,h,t);if(!o.contains(d))throw new T(_.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);u_(u,d)||u.push(d)}l=new Oe(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new GC(new Ae(a),l,c)}class Eo extends lc{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Eo}}function QC(n,e,t,i){const s=n.pu(1,e,t);hc("Data must be an object, but it was:",s,i);const r=[],o=Ae.empty();un(i,(l,c)=>{const u=dc(e,l,t);c=Q(c);const h=s.Ru(u);if(c instanceof Eo)r.push(u);else{const d=Es(c,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new Oe(r);return new r_(o,a,s.fieldTransforms)}function YC(n,e,t,i,s,r){const o=n.pu(1,e,t),a=[Ua(e,i,t)],l=[s];if(r.length%2!=0)throw new T(_.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(Ua(e,r[d])),l.push(r[d+1]);const c=[],u=Ae.empty();for(let d=a.length-1;d>=0;--d)if(!u_(c,a[d])){const f=a[d];let p=l[d];p=Q(p);const v=o.Ru(f);if(p instanceof Eo)c.push(f);else{const m=Es(p,v);m!=null&&(c.push(f),u.set(f,m))}}const h=new Oe(c);return new r_(u,h,o.fieldTransforms)}function XC(n,e,t,i=!1){return Es(t,n.pu(i?4:3,e))}function Es(n,e){if(c_(n=Q(n)))return hc("Unsupported field value:",e,n),l_(n,e);if(n instanceof lc)return function(i,s){if(!o_(s.Iu))throw s.mu(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.mu(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(i,s){const r=[];let o=0;for(const a of i){let l=Es(a,s.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),o++}return{arrayValue:{values:r}}}(n,e)}return function(i,s){if((i=Q(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return HI(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=ie.fromDate(i);return{timestampValue:Er(s.serializer,r)}}if(i instanceof ie){const r=new ie(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Er(s.serializer,r)}}if(i instanceof cc)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof $n)return{bytesValue:Dp(s.serializer,i._byteString)};if(i instanceof Te){const r=s.databaseId,o=i.firestore._databaseId;if(!o.isEqual(r))throw s.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Gl(i.firestore._databaseId||s.databaseId,i._key.path)}}throw s.mu(`Unsupported field value: ${_o(i)}`)}(n,e)}function l_(n,e){const t={};return op(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):un(n,(i,s)=>{const r=Es(s,e.Eu(i));r!=null&&(t[i]=r)}),{mapValue:{fields:t}}}function c_(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ie||n instanceof cc||n instanceof $n||n instanceof Te||n instanceof lc)}function hc(n,e,t){if(!c_(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const i=_o(t);throw i==="an object"?e.mu(n+" a custom object"):e.mu(n+" "+i)}}function Ua(n,e,t){if((e=Q(e))instanceof yo)return e._internalPath;if(typeof e=="string")return dc(n,e);throw wr("Field path arguments must be of type string or ",n,!1,void 0,t)}const JC=new RegExp("[~\\*/\\[\\]]");function dc(n,e,t){if(e.search(JC)>=0)throw wr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new yo(...e.split("."))._internalPath}catch{throw wr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function wr(n,e,t,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new T(_.INVALID_ARGUMENT,a+n+l)}function u_(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e,t,i,s,r){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Te(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ZC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(fc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ZC extends h_{data(){return super.data()}}function fc(n,e){return typeof e=="string"?dc(n,e):e instanceof yo?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new T(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pc{}class eA extends pc{}function xS(n,e,...t){let i=[];e instanceof pc&&i.push(e),i=i.concat(t),function(r){const o=r.filter(l=>l instanceof _c).length,a=r.filter(l=>l instanceof To).length;if(o>1||o>0&&a>0)throw new T(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const s of i)n=s._apply(n);return n}class To extends eA{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new To(e,t,i)}_apply(e){const t=this._parse(e);return f_(e._query,t),new dn(e.firestore,e.converter,Na(e._query,t))}_parse(e){const t=vo(e.firestore);return function(r,o,a,l,c,u,h){let d;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new T(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Eh(h,u);const f=[];for(const p of h)f.push(vh(l,r,p));d={arrayValue:{values:f}}}else d=vh(l,r,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Eh(h,u),d=XC(a,o,h,u==="in"||u==="not-in");return ee.create(c,u,d)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function MS(n,e,t){const i=e,s=fc("where",n);return To._create(s,i,t)}class _c extends pc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new _c(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:He.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,r){let o=s;const a=r.getFlattenedFilters();for(const l of a)f_(o,l),o=Na(o,l)}(e._query,t),new dn(e.firestore,e.converter,Na(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function vh(n,e,t){if(typeof(t=Q(t))=="string"){if(t==="")throw new T(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!_p(e)&&t.indexOf("/")!==-1)throw new T(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(G.fromString(t));if(!w.isDocumentKey(i))throw new T(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Wu(n,new w(i))}if(t instanceof Te)return Wu(n,t._key);throw new T(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_o(t)}.`)}function Eh(n,e){if(!Array.isArray(n)||n.length===0)throw new T(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function f_(n,e){const t=function(s,r){for(const o of s)for(const a of o.getFlattenedFilters())if(r.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new T(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new T(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class tA{convertValue(e,t="none"){switch(nn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Z(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(tn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw R()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return un(e,(s,r)=>{i[s]=this.convertValue(r,t)}),i}convertGeoPoint(e){return new cc(Z(e.latitude),Z(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Bl(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(qi(e));default:return null}}convertTimestamp(e){const t=Ot(e);return new ie(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=G.fromString(e);K(Lp(i));const s=new Wi(i.get(1),i.get(3)),r=new w(i.popFirst(5));return s.isEqual(t)||_t(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class __ extends h_{constructor(e,t,i,s,r,o){super(e,t,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Qs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(fc("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class Qs extends __{data(e={}){return super.data(e)}}class g_{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new mi(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new Qs(this._firestore,this._userDataWriter,i.key,i,new mi(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new T(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new Qs(s._firestore,s._userDataWriter,a.doc.key,a.doc,new mi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const l=new Qs(s._firestore,s._userDataWriter,a.doc.key,a.doc,new mi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:nA(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function nA(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return R()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VS(n){n=be(n,Te);const e=be(n.firestore,mt);return UC(mo(e),n._key).then(t=>m_(e,n,t))}class gc extends tA{constructor(e){super(),this.firestore=e}convertBytes(e){return new $n(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Te(this.firestore,null,t)}}function LS(n){n=be(n,dn);const e=be(n.firestore,mt),t=mo(e),i=new gc(e);return d_(n._query),BC(t,n._query).then(s=>new g_(e,i,n,s))}function FS(n,e,t){n=be(n,Te);const i=be(n.firestore,mt),s=p_(n.converter,e,t);return Io(i,[a_(vo(i),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Fe.none())])}function US(n,e,t,...i){n=be(n,Te);const s=be(n.firestore,mt),r=vo(s);let o;return o=typeof(e=Q(e))=="string"||e instanceof yo?YC(r,"updateDoc",n._key,e,t,i):QC(r,"updateDoc",n._key,e),Io(s,[o.toMutation(n._key,Fe.exists(!0))])}function BS(n){return Io(be(n.firestore,mt),[new $l(n._key,Fe.none())])}function qS(n,e){const t=be(n.firestore,mt),i=jC(n),s=p_(n.converter,e);return Io(t,[a_(vo(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,Fe.exists(!1))]).then(()=>i)}function WS(n,...e){var t,i,s;n=Q(n);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||yh(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(yh(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,c,u;if(n instanceof Te)c=be(n.firestore,mt),u=ro(n._key.path),l={next:h=>{e[o]&&e[o](m_(c,n,h))},error:e[o+1],complete:e[o+2]};else{const h=be(n,dn);c=be(h.firestore,mt),u=h._query;const d=new gc(c);l={next:f=>{e[o]&&e[o](new g_(c,d,h,f))},error:e[o+1],complete:e[o+2]},d_(n._query)}return function(d,f,p,v){const m=new ac(v),A=new rc(f,m,p);return d.asyncQueue.enqueueAndForget(async()=>nc(await Ir(d),A)),()=>{m.Na(),d.asyncQueue.enqueueAndForget(async()=>ic(await Ir(d),A))}}(mo(c),u,a,l)}function Io(n,e){return function(i,s){const r=new ct;return i.asyncQueue.enqueueAndForget(async()=>AC(await FC(i),s,r)),r.promise}(mo(n),e)}function m_(n,e,t){const i=t.docs.get(e._key),s=new gc(n);return new __(n,s,e._key,i,new mi(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){ei=s})(Lt),ht(new tt("firestore",(i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),a=new mt(new uI(i.getProvider("auth-internal")),new pI(i.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new T(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wi(c.options.projectId,u)}(o,s),o);return r=Object.assign({useFetchStreams:t},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),Pe(Fu,"4.3.2",e),Pe(Fu,"4.3.2","esm2017")})();const Th="@firebase/database",Ih="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let y_="";function iA(n){y_=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ae(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Pi(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return vt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new sA(e)}}catch{}return new rA},Gt=v_("localStorage"),Ba=v_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new Ur("@firebase/database"),oA=function(){let n=1;return function(){return n++}}(),E_=function(n){const e=im(n),t=new Zg;t.update(e);const i=t.digest();return Za.encodeByteArray(i)},Ts=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Ts.apply(null,i):typeof i=="object"?e+=ae(i):e+=i,e+=" "}return e};let Yt=null,wh=!0;const aA=function(n,e){y(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Nn.logLevel=x.VERBOSE,Yt=Nn.log.bind(Nn),e&&Ba.set("logging_enabled",!0)):typeof n=="function"?Yt=n:(Yt=null,Ba.remove("logging_enabled"))},me=function(...n){if(wh===!0&&(wh=!1,Yt===null&&Ba.get("logging_enabled")===!0&&aA(!0)),Yt){const e=Ts.apply(null,n);Yt(e)}},Is=function(n){return function(...e){me(n,...e)}},qa=function(...n){const e="FIREBASE INTERNAL ERROR: "+Ts(...n);Nn.error(e)},yt=function(...n){const e=`FIREBASE FATAL ERROR: ${Ts(...n)}`;throw Nn.error(e),new Error(e)},xe=function(...n){const e="FIREBASE WARNING: "+Ts(...n);Nn.warn(e)},lA=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&xe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},T_=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},cA=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Hn="[MIN_NAME]",sn="[MAX_NAME]",ii=function(n,e){if(n===e)return 0;if(n===Hn||e===sn)return-1;if(e===Hn||n===sn)return 1;{const t=Ch(n),i=Ch(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},uA=function(n,e){return n===e?0:n<e?-1:1},ci=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+ae(e))},mc=function(n){if(typeof n!="object"||n===null)return ae(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=ae(e[i]),t+=":",t+=mc(n[e[i]]);return t+="}",t},I_=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function ke(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const w_=function(n){y(!T_(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},hA=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},dA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function fA(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const pA=new RegExp("^-?(0*)\\d{1,10}$"),_A=-2147483648,gA=2147483647,Ch=function(n){if(pA.test(n)){const e=Number(n);if(e>=_A&&e<=gA)return e}return null},ws=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw xe("Exception was thrown by user callback.",t),e},Math.floor(0))}},mA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ci=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){xe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(me("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',xe(e)}}class Dn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Dn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc="5",C_="v",A_="s",R_="r",S_="f",P_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,b_="ls",k_="p",Wa="ac",N_="websocket",D_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Gt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Gt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function EA(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function x_(n,e,t){y(typeof e=="string","typeof type must == string"),y(typeof t=="object","typeof params must == object");let i;if(e===N_)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===D_)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);EA(n)&&(t.ns=n.namespace);const s=[];return ke(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(){this.counters_={}}incrementCounter(e,t=1){vt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Fg(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo={},Xo={};function vc(n){const e=n.toString();return Yo[e]||(Yo[e]=new TA),Yo[e]}function IA(n,e){const t=n.toString();return Xo[t]||(Xo[t]=e()),Xo[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&ws(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah="start",CA="close",AA="pLPCommand",RA="pRTLPCB",M_="id",V_="pw",L_="ser",SA="cb",PA="seg",bA="ts",kA="d",NA="dframe",F_=1870,U_=30,DA=F_-U_,OA=25e3,xA=3e4;class Cn{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Is(e),this.stats_=vc(t),this.urlFn=l=>(this.appCheckToken&&(l[Wa]=this.appCheckToken),x_(t,D_,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new wA(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(xA)),cA(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ec((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ah)this.id=a,this.password=l;else if(o===CA)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Ah]="t",i[L_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[SA]=this.scriptTagHolder.uniqueCallbackIdentifier),i[C_]=yc,this.transportSessionId&&(i[A_]=this.transportSessionId),this.lastSessionId&&(i[b_]=this.lastSessionId),this.applicationId&&(i[k_]=this.applicationId),this.appCheckToken&&(i[Wa]=this.appCheckToken),typeof location<"u"&&location.hostname&&P_.test(location.hostname)&&(i[R_]=S_);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Cn.forceAllow_=!0}static forceDisallow(){Cn.forceDisallow_=!0}static isAvailable(){return Cn.forceAllow_?!0:!Cn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!hA()&&!dA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ae(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=od(t),s=I_(i,DA);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[NA]="t",i[M_]=e,i[V_]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ae(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ec{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=oA(),window[AA+this.uniqueCallbackIdentifier]=e,window[RA+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ec.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){me("frame writing exception"),a.stack&&me(a.stack),me(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||me("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[M_]=this.myID,e[V_]=this.myPW,e[L_]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+U_+i.length<=F_;){const o=this.pendingSegs.shift();i=i+"&"+PA+s+"="+o.seg+"&"+bA+s+"="+o.ts+"&"+kA+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(OA)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{me("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA=16384,VA=45e3;let Cr=null;typeof MozWebSocket<"u"?Cr=MozWebSocket:typeof WebSocket<"u"&&(Cr=WebSocket);class Ue{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Is(this.connId),this.stats_=vc(t),this.connURL=Ue.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[C_]=yc,typeof location<"u"&&location.hostname&&P_.test(location.hostname)&&(o[R_]=S_),t&&(o[A_]=t),i&&(o[b_]=i),s&&(o[Wa]=s),r&&(o[k_]=r),x_(e,N_,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Gt.set("previous_websocket_failure",!0);try{let i;dd(),this.mySock=new Cr(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Ue.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Cr!==null&&!Ue.forceDisallow_}static previouslyFailed(){return Gt.isInMemoryStorage||Gt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Gt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Pi(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(y(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=ae(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=I_(t,MA);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(VA))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ue.responsesRequiredToBeHealthy=2;Ue.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Cn,Ue]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Ue&&Ue.isAvailable();let i=t&&!Ue.previouslyFailed();if(e.webSocketOnly&&(t||xe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Ue];else{const s=this.transports_=[];for(const r of zi.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);zi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}zi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA=6e4,FA=5e3,UA=10*1024,BA=100*1024,Jo="t",Rh="d",qA="s",Sh="r",WA="e",Ph="o",bh="a",kh="n",Nh="p",jA="h";class $A{constructor(e,t,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Is("c:"+this.id+":"),this.transportManager_=new zi(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ci(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>BA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>UA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Jo in e){const t=e[Jo];t===bh?this.upgradeIfSecondaryHealthy_():t===Sh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Ph&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=ci("t",e),i=ci("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Nh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:bh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:kh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=ci("t",e),i=ci("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=ci(Jo,e);if(Rh in e){const i=e[Rh];if(t===jA){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===kh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===qA?this.onConnectionShutdown_(i):t===Sh?this.onReset_(i):t===WA?qa("Server Error: "+i):t===Ph?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):qa("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),yc!==i&&xe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Ci(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(LA))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ci(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(FA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Nh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Gt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e){this.allowedEvents_=e,this.listeners_={},y(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){y(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends q_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!il()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ar}getInitialEvent(e){return y(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh=32,Oh=768;class j{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function U(){return new j("")}function D(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Mt(n){return n.pieces_.length-n.pieceNum_}function $(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new j(n.pieces_,e)}function W_(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function HA(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function j_(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function $_(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new j(e,0)}function ne(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof j)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new j(t,0)}function O(n){return n.pieceNum_>=n.pieces_.length}function Re(n,e){const t=D(n),i=D(e);if(t===null)return e;if(t===i)return Re($(n),$(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Tc(n,e){if(Mt(n)!==Mt(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function Be(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Mt(n)>Mt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class zA{constructor(e,t){this.errorPrefix_=t,this.parts_=j_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Fr(this.parts_[i]);H_(this)}}function GA(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Fr(e),H_(n)}function KA(n){const e=n.parts_.pop();n.byteLength_-=Fr(e),n.parts_.length>0&&(n.byteLength_-=1)}function H_(n){if(n.byteLength_>Oh)throw new Error(n.errorPrefix_+"has a key path longer than "+Oh+" bytes ("+n.byteLength_+").");if(n.parts_.length>Dh)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Dh+") or object contains a cycle "+jt(n))}function jt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic extends q_{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Ic}getInitialEvent(e){return y(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=1e3,QA=60*5*1e3,xh=30*1e3,YA=1.3,XA=3e4,JA="server_kill",Mh=3;class ut extends B_{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=ut.nextPersistentConnectionId_++,this.log_=Is("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ui,this.maxReconnectDelay_=QA,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!dd())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ic.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ar.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(ae(r)),y(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new tl,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),y(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),y(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;ut.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&vt(e,"w")){const i=Mn(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();xe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Jg(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=xh)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Xg(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),y(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ae(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):qa("Unrecognized action received from server: "+ae(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){y(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ui,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ui,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>XA&&(this.reconnectDelay_=ui),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*YA)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+ut.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){y(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?me("getToken() completed but was canceled"):(me("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new $A(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,f=>{xe(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(JA)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&xe(h),l())}}}interrupt(e){me("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){me("Resuming connection for reason: "+e),delete this.interruptReasons_[e],sa(this.interruptReasons_)&&(this.reconnectDelay_=ui,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>mc(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new j(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){me("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Mh&&(this.reconnectDelay_=xh,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){me("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Mh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+y_.replace(/\./g,"-")]=1,il()?e["framework.cordova"]=1:hd()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ar.getInstance().currentlyOnline();return sa(this.interruptReasons_)&&e}}ut.nextPersistentConnectionId_=0;ut.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new N(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new N(Hn,e),s=new N(Hn,t);return this.compare(i,s)!==0}minPost(){return N.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bs;class z_ extends wo{static get __EMPTY_NODE(){return Bs}static set __EMPTY_NODE(e){Bs=e}compare(e,t){return ii(e.name,t.name)}isDefinedOn(e){throw Kn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return N.MIN}maxPost(){return new N(sn,Bs)}makePost(e,t){return y(typeof e=="string","KeyIndex indexValue must always be a string."),new N(e,Bs)}toString(){return".key"}}const On=new z_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class oe{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??oe.RED,this.left=s??Se.EMPTY_NODE,this.right=r??Se.EMPTY_NODE}copy(e,t,i,s,r){return new oe(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Se.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Se.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}oe.RED=!0;oe.BLACK=!1;class ZA{copy(e,t,i,s,r){return this}insert(e,t,i){return new oe(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Se{constructor(e,t=Se.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Se(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,oe.BLACK,null,null))}remove(e){return new Se(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,oe.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new qs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new qs(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new qs(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new qs(this.root_,null,this.comparator_,!0,e)}}Se.EMPTY_NODE=new ZA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eR(n,e){return ii(n.name,e.name)}function wc(n,e){return ii(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ja;function tR(n){ja=n}const G_=function(n){return typeof n=="number"?"number:"+w_(n):"string:"+n},K_=function(n){if(n.isLeafNode()){const e=n.val();y(typeof e=="string"||typeof e=="number"||typeof e=="object"&&vt(e,".sv"),"Priority must be a string or number.")}else y(n===ja||n.isEmpty(),"priority of unexpected type.");y(n===ja||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vh;class se{constructor(e,t=se.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,y(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),K_(this.priorityNode_)}static set __childrenNodeConstructor(e){Vh=e}static get __childrenNodeConstructor(){return Vh}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new se(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:se.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return O(e)?this:D(e)===".priority"?this.priorityNode_:se.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:se.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=D(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(y(i!==".priority"||Mt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,se.__childrenNodeConstructor.EMPTY_NODE.updateChild($(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+G_(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=w_(this.value_):e+=this.value_,this.lazyHash_=E_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===se.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof se.__childrenNodeConstructor?-1:(y(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=se.VALUE_TYPE_ORDER.indexOf(t),r=se.VALUE_TYPE_ORDER.indexOf(i);return y(s>=0,"Unknown leaf type: "+t),y(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}se.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Q_,Y_;function nR(n){Q_=n}function iR(n){Y_=n}class sR extends wo{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?ii(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return N.MIN}maxPost(){return new N(sn,new se("[PRIORITY-POST]",Y_))}makePost(e,t){const i=Q_(e);return new N(t,new se("[PRIORITY-POST]",i))}toString(){return".priority"}}const Y=new sR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR=Math.log(2);class oR{constructor(e){const t=r=>parseInt(Math.log(r)/rR,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Rr=function(n,e,t,i){n.sort(e);const s=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=n[l],d=t?t(h):h,new oe(d,h.node,oe.BLACK,null,null);{const f=parseInt(u/2,10)+l,p=s(l,f),v=s(f+1,c);return h=n[f],d=t?t(h):h,new oe(d,h.node,oe.BLACK,p,v)}},r=function(l){let c=null,u=null,h=n.length;const d=function(p,v){const m=h-p,A=h;h-=p;const L=s(m+1,A),B=n[m],W=t?t(B):B;f(new oe(W,B.node,v,null,L))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const v=l.nextBitIsOne(),m=Math.pow(2,l.count-(p+1));v?d(m,oe.BLACK):(d(m,oe.BLACK),d(m,oe.RED))}return u},o=new oR(n.length),a=r(o);return new Se(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zo;const yn={};class lt{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return y(yn&&Y,"ChildrenNode.ts has not been loaded"),Zo=Zo||new lt({".priority":yn},{".priority":Y}),Zo}get(e){const t=Mn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Se?t:null}hasIndex(e){return vt(this.indexSet_,e.toString())}addIndex(e,t){y(e!==On,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(N.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Rr(i,e.getCompare()):a=yn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new lt(u,c)}addToIndexes(e,t){const i=Zs(this.indexes_,(s,r)=>{const o=Mn(this.indexSet_,r);if(y(o,"Missing index implementation for "+r),s===yn)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(N.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Rr(a,o.getCompare())}else return yn;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new N(e.name,a))),l.insert(e,e.node)}});return new lt(i,this.indexSet_)}removeFromIndexes(e,t){const i=Zs(this.indexes_,s=>{if(s===yn)return s;{const r=t.get(e.name);return r?s.remove(new N(e.name,r)):s}});return new lt(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hi;class C{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&K_(this.priorityNode_),this.children_.isEmpty()&&y(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return hi||(hi=new C(new Se(wc),null,lt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||hi}updatePriority(e){return this.children_.isEmpty()?this:new C(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?hi:t}}getChild(e){const t=D(e);return t===null?this:this.getImmediateChild(t).getChild($(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(y(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new N(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?hi:this.priorityNode_;return new C(s,o,r)}}updateChild(e,t){const i=D(e);if(i===null)return t;{y(D(e)!==".priority"||Mt(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild($(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(Y,(o,a)=>{t[o]=a.val(e),i++,r&&C.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+G_(this.getPriority().val())+":"),this.forEachChild(Y,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":E_(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new N(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new N(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new N(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,N.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,N.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Cs?-1:0}withIndex(e){if(e===On||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new C(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===On||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(Y),s=t.getIterator(Y);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===On?null:this.indexMap_.get(e.toString())}}C.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class aR extends C{constructor(){super(new Se(wc),C.EMPTY_NODE,lt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return C.EMPTY_NODE}isEmpty(){return!1}}const Cs=new aR;Object.defineProperties(N,{MIN:{value:new N(Hn,C.EMPTY_NODE)},MAX:{value:new N(sn,Cs)}});z_.__EMPTY_NODE=C.EMPTY_NODE;se.__childrenNodeConstructor=C;tR(Cs);iR(Cs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR=!0;function ye(n,e=null){if(n===null)return C.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),y(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new se(t,ye(e))}if(!(n instanceof Array)&&lR){const t=[];let i=!1;if(ke(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=ye(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new N(o,l)))}}),t.length===0)return C.EMPTY_NODE;const r=Rr(t,eR,o=>o.name,wc);if(i){const o=Rr(t,Y.getCompare());return new C(r,ye(e),new lt({".priority":o},{".priority":Y}))}else return new C(r,ye(e),lt.Default)}else{let t=C.EMPTY_NODE;return ke(n,(i,s)=>{if(vt(n,i)&&i.substring(0,1)!=="."){const r=ye(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(ye(e))}}nR(ye);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR extends wo{constructor(e){super(),this.indexPath_=e,y(!O(e)&&D(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?ii(e.name,t.name):r}makePost(e,t){const i=ye(e),s=C.EMPTY_NODE.updateChild(this.indexPath_,i);return new N(t,s)}maxPost(){const e=C.EMPTY_NODE.updateChild(this.indexPath_,Cs);return new N(sn,e)}toString(){return j_(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR extends wo{compare(e,t){const i=e.node.compareTo(t.node);return i===0?ii(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return N.MIN}maxPost(){return N.MAX}makePost(e,t){const i=ye(e);return new N(t,i)}toString(){return".value"}}const hR=new uR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(n){return{type:"value",snapshotNode:n}}function zn(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Gi(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Ki(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function dR(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){y(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(Gi(t,a)):y(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(zn(t,i)):o.trackChildChange(Ki(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(Y,(s,r)=>{t.hasChild(s)||i.trackChildChange(Gi(s,r))}),t.isLeafNode()||t.forEachChild(Y,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Ki(s,r,o))}else i.trackChildChange(zn(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?C.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e){this.indexedFilter_=new Cc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Qi.getStartPost_(e),this.endPost_=Qi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new N(t,i))||(i=C.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=C.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(C.EMPTY_NODE);const r=this;return t.forEachChild(Y,(o,a)=>{r.matches(new N(o,a))||(s=s.updateImmediateChild(o,C.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Qi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new N(t,i))||(i=C.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=C.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=C.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(C.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,C.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;y(a.numChildren()===this.limit_,"");const l=new N(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const h=a.getImmediateChild(t);let d=s.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(u&&!i.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(Ki(t,i,h)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(Gi(t,h));const v=a.updateImmediateChild(t,C.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(zn(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}}else return i.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Gi(c.name,c.node)),r.trackChildChange(zn(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,C.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Y}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return y(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return y(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Hn}hasEnd(){return this.endSet_}getIndexEndValue(){return y(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return y(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:sn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return y(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Y}copy(){const e=new Ac;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function pR(n){return n.loadsAllData()?new Cc(n.getIndex()):n.hasLimit()?new fR(n):new Qi(n)}function Lh(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Y?t="$priority":n.index_===hR?t="$value":n.index_===On?t="$key":(y(n.index_ instanceof cR,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=ae(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=ae(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+ae(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=ae(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+ae(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Fh(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Y&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends B_{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Is("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(y(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Sr.getListenId_(e,i),a={};this.listens_[o]=a;const l=Lh(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),Mn(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,t){const i=Sr.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Lh(e._queryParams),i=e._path.toString(),s=new tl;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Qn(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Pi(a.responseText)}catch{xe("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&xe("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(){this.rootNode_=C.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(){return{value:null,children:new Map}}function J_(n,e,t){if(O(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=D(e);n.children.has(i)||n.children.set(i,Pr());const s=n.children.get(i);e=$(e),J_(s,e,t)}}function $a(n,e,t){n.value!==null?t(e,n.value):gR(n,(i,s)=>{const r=new j(e.toString()+"/"+i);$a(s,r,t)})}function gR(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ke(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh=10*1e3,yR=30*1e3,vR=5*60*1e3;class ER{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new mR(e);const i=Uh+(yR-Uh)*Math.random();Ci(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;ke(e,(s,r)=>{r>0&&vt(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),Ci(this.reportStats_.bind(this),Math.floor(Math.random()*2*vR))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(qe||(qe={}));function Z_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Rc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Sc(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=qe.ACK_USER_WRITE,this.source=Z_()}operationForChild(e){if(O(this.path)){if(this.affectedTree.value!=null)return y(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new j(e));return new br(U(),t,this.revert)}}else return y(D(this.path)===e,"operationForChild called for unrelated child."),new br($(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,t){this.source=e,this.path=t,this.type=qe.LISTEN_COMPLETE}operationForChild(e){return O(this.path)?new Yi(this.source,U()):new Yi(this.source,$(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=qe.OVERWRITE}operationForChild(e){return O(this.path)?new rn(this.source,U(),this.snap.getImmediateChild(e)):new rn(this.source,$(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=qe.MERGE}operationForChild(e){if(O(this.path)){const t=this.children.subtree(new j(e));return t.isEmpty()?null:t.value?new rn(this.source,U(),t.value):new Xi(this.source,U(),t)}else return y(D(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Xi(this.source,$(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(O(e))return this.isFullyInitialized()&&!this.filtered_;const t=D(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function IR(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(dR(o.childName,o.snapshotNode))}),di(n,s,"child_removed",e,i,t),di(n,s,"child_added",e,i,t),di(n,s,"child_moved",r,i,t),di(n,s,"child_changed",e,i,t),di(n,s,"value",e,i,t),s}function di(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>CR(n,a,l)),o.forEach(a=>{const l=wR(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function wR(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function CR(n,e,t){if(e.childName==null||t.childName==null)throw Kn("Should only compare child_ events.");const i=new N(e.childName,e.snapshotNode),s=new N(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(n,e){return{eventCache:n,serverCache:e}}function Ai(n,e,t,i){return Co(new on(e,t,i),n.serverCache)}function eg(n,e,t,i){return Co(n.eventCache,new on(e,t,i))}function Ha(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function an(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ea;const AR=()=>(ea||(ea=new Se(uA)),ea);class H{constructor(e,t=AR()){this.value=e,this.children=t}static fromObject(e){let t=new H(null);return ke(e,(i,s)=>{t=t.set(new j(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:U(),value:this.value};if(O(e))return null;{const i=D(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue($(e),t);return r!=null?{path:ne(new j(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(O(e))return this;{const t=D(e),i=this.children.get(t);return i!==null?i.subtree($(e)):new H(null)}}set(e,t){if(O(e))return new H(t,this.children);{const i=D(e),r=(this.children.get(i)||new H(null)).set($(e),t),o=this.children.insert(i,r);return new H(this.value,o)}}remove(e){if(O(e))return this.children.isEmpty()?new H(null):new H(null,this.children);{const t=D(e),i=this.children.get(t);if(i){const s=i.remove($(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new H(null):new H(this.value,r)}else return this}}get(e){if(O(e))return this.value;{const t=D(e),i=this.children.get(t);return i?i.get($(e)):null}}setTree(e,t){if(O(e))return t;{const i=D(e),r=(this.children.get(i)||new H(null)).setTree($(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new H(this.value,o)}}fold(e){return this.fold_(U(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(ne(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,U(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(O(e))return null;{const r=D(e),o=this.children.get(r);return o?o.findOnPath_($(e),ne(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,U(),t)}foreachOnPath_(e,t,i){if(O(e))return this;{this.value&&i(t,this.value);const s=D(e),r=this.children.get(s);return r?r.foreachOnPath_($(e),ne(t,s),i):new H(null)}}foreach(e){this.foreach_(U(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(ne(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.writeTree_=e}static empty(){return new We(new H(null))}}function Ri(n,e,t){if(O(e))return new We(new H(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Re(s,e);return r=r.updateChild(o,t),new We(n.writeTree_.set(s,r))}else{const s=new H(t),r=n.writeTree_.setTree(e,s);return new We(r)}}}function Bh(n,e,t){let i=n;return ke(t,(s,r)=>{i=Ri(i,ne(e,s),r)}),i}function qh(n,e){if(O(e))return We.empty();{const t=n.writeTree_.setTree(e,new H(null));return new We(t)}}function za(n,e){return fn(n,e)!=null}function fn(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Re(t.path,e)):null}function Wh(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Y,(i,s)=>{e.push(new N(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new N(i,s.value))}),e}function Nt(n,e){if(O(e))return n;{const t=fn(n,e);return t!=null?new We(new H(t)):new We(n.writeTree_.subtree(e))}}function Ga(n){return n.writeTree_.isEmpty()}function Gn(n,e){return tg(U(),n.writeTree_,e)}function tg(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(y(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=tg(ne(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(ne(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(n,e){return rg(e,n)}function RR(n,e,t,i,s){y(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=Ri(n.visibleWrites,e,t)),n.lastWriteId=i}function SR(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function PR(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);y(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&bR(a,i.path)?s=!1:Be(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return kR(n),!0;if(i.snap)n.visibleWrites=qh(n.visibleWrites,i.path);else{const a=i.children;ke(a,l=>{n.visibleWrites=qh(n.visibleWrites,ne(i.path,l))})}return!0}else return!1}function bR(n,e){if(n.snap)return Be(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Be(ne(n.path,t),e))return!0;return!1}function kR(n){n.visibleWrites=ng(n.allWrites,NR,U()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function NR(n){return n.visible}function ng(n,e,t){let i=We.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)Be(t,o)?(a=Re(t,o),i=Ri(i,a,r.snap)):Be(o,t)&&(a=Re(o,t),i=Ri(i,U(),r.snap.getChild(a)));else if(r.children){if(Be(t,o))a=Re(t,o),i=Bh(i,a,r.children);else if(Be(o,t))if(a=Re(o,t),O(a))i=Bh(i,U(),r.children);else{const l=Mn(r.children,D(a));if(l){const c=l.getChild($(a));i=Ri(i,U(),c)}}}else throw Kn("WriteRecord should have .snap or .children")}}return i}function ig(n,e,t,i,s){if(!i&&!s){const r=fn(n.visibleWrites,e);if(r!=null)return r;{const o=Nt(n.visibleWrites,e);if(Ga(o))return t;if(t==null&&!za(o,U()))return null;{const a=t||C.EMPTY_NODE;return Gn(o,a)}}}else{const r=Nt(n.visibleWrites,e);if(!s&&Ga(r))return t;if(!s&&t==null&&!za(r,U()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(Be(c.path,e)||Be(e,c.path))},a=ng(n.allWrites,o,e),l=t||C.EMPTY_NODE;return Gn(a,l)}}}function DR(n,e,t){let i=C.EMPTY_NODE;const s=fn(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Y,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=Nt(n.visibleWrites,e);return t.forEachChild(Y,(o,a)=>{const l=Gn(Nt(r,new j(o)),a);i=i.updateImmediateChild(o,l)}),Wh(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Nt(n.visibleWrites,e);return Wh(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function OR(n,e,t,i,s){y(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=ne(e,t);if(za(n.visibleWrites,r))return null;{const o=Nt(n.visibleWrites,r);return Ga(o)?s.getChild(t):Gn(o,s.getChild(t))}}function xR(n,e,t,i){const s=ne(e,t),r=fn(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=Nt(n.visibleWrites,s);return Gn(o,i.getNode().getImmediateChild(t))}else return null}function MR(n,e){return fn(n.visibleWrites,e)}function VR(n,e,t,i,s,r,o){let a;const l=Nt(n.visibleWrites,e),c=fn(l,U());if(c!=null)a=c;else if(t!=null)a=Gn(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=d.getNext();for(;f&&u.length<s;)h(f,i)!==0&&u.push(f),f=d.getNext();return u}else return[]}function LR(){return{visibleWrites:We.empty(),allWrites:[],lastWriteId:-1}}function kr(n,e,t,i){return ig(n.writeTree,n.treePath,e,t,i)}function bc(n,e){return DR(n.writeTree,n.treePath,e)}function jh(n,e,t,i){return OR(n.writeTree,n.treePath,e,t,i)}function Nr(n,e){return MR(n.writeTree,ne(n.treePath,e))}function FR(n,e,t,i,s,r){return VR(n.writeTree,n.treePath,e,t,i,s,r)}function kc(n,e,t){return xR(n.writeTree,n.treePath,e,t)}function sg(n,e){return rg(ne(n.treePath,e),n.writeTree)}function rg(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;y(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),y(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,Ki(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,Gi(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,zn(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,Ki(i,e.snapshotNode,s.oldSnap));else throw Kn("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const og=new BR;class Nc{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new on(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return kc(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:an(this.viewCache_),r=FR(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qR(n){return{filter:n}}function WR(n,e){y(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),y(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function jR(n,e,t,i,s){const r=new UR;let o,a;if(t.type===qe.OVERWRITE){const c=t;c.source.fromUser?o=Ka(n,e,c.path,c.snap,i,s,r):(y(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!O(c.path),o=Dr(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===qe.MERGE){const c=t;c.source.fromUser?o=HR(n,e,c.path,c.children,i,s,r):(y(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Qa(n,e,c.path,c.children,i,s,a,r))}else if(t.type===qe.ACK_USER_WRITE){const c=t;c.revert?o=KR(n,e,c.path,i,s,r):o=zR(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===qe.LISTEN_COMPLETE)o=GR(n,e,t.path,i,r);else throw Kn("Unknown operation type: "+t.type);const l=r.getChanges();return $R(e,o,l),{viewCache:o,changes:l}}function $R(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Ha(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(X_(Ha(e)))}}function ag(n,e,t,i,s,r){const o=e.eventCache;if(Nr(i,t)!=null)return e;{let a,l;if(O(t))if(y(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=an(e),u=c instanceof C?c:C.EMPTY_NODE,h=bc(i,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=kr(i,an(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=D(t);if(c===".priority"){y(Mt(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=jh(i,t,u,l);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=$(t);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=jh(i,t,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=kc(i,c,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),c,h,u,s,r):a=o.getNode()}}return Ai(e,a,o.isFullyInitialized()||O(t),n.filter.filtersNodes())}}function Dr(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(O(t))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,i);c=u.updateFullNode(l.getNode(),f,null)}else{const f=D(t);if(!l.isCompleteForPath(t)&&Mt(t)>1)return e;const p=$(t),m=l.getNode().getImmediateChild(f).updateChild(p,i);f===".priority"?c=u.updatePriority(l.getNode(),m):c=u.updateChild(l.getNode(),f,m,p,og,null)}const h=eg(e,c,l.isFullyInitialized()||O(t),u.filtersNodes()),d=new Nc(s,h,r);return ag(n,h,t,s,d,a)}function Ka(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const u=new Nc(s,e,r);if(O(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Ai(e,c,!0,n.filter.filtersNodes());else{const h=D(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=Ai(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=$(t),f=a.getNode().getImmediateChild(h);let p;if(O(d))p=i;else{const v=u.getCompleteChild(h);v!=null?W_(d)===".priority"&&v.getChild($_(d)).isEmpty()?p=v:p=v.updateChild(d,i):p=C.EMPTY_NODE}if(f.equals(p))l=e;else{const v=n.filter.updateChild(a.getNode(),h,p,d,u,o);l=Ai(e,v,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function $h(n,e){return n.eventCache.isCompleteForChild(e)}function HR(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=ne(t,l);$h(e,D(u))&&(a=Ka(n,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=ne(t,l);$h(e,D(u))||(a=Ka(n,a,u,c,s,r,o))}),a}function Hh(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Qa(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;O(t)?c=i:c=new H(null).setTree(t,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=Hh(n,f,d);l=Dr(n,l,new j(h),p,s,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),v=Hh(n,p,d);l=Dr(n,l,new j(h),v,s,r,o,a)}}),l}function zR(n,e,t,i,s,r,o){if(Nr(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(O(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Dr(n,e,t,l.getNode().getChild(t),s,r,a,o);if(O(t)){let c=new H(null);return l.getNode().forEachChild(On,(u,h)=>{c=c.set(new j(u),h)}),Qa(n,e,t,c,s,r,a,o)}else return e}else{let c=new H(null);return i.foreach((u,h)=>{const d=ne(t,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Qa(n,e,t,c,s,r,a,o)}}function GR(n,e,t,i,s){const r=e.serverCache,o=eg(e,r.getNode(),r.isFullyInitialized()||O(t),r.isFiltered());return ag(n,o,t,i,og,s)}function KR(n,e,t,i,s,r){let o;if(Nr(i,t)!=null)return e;{const a=new Nc(i,e,s),l=e.eventCache.getNode();let c;if(O(t)||D(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=kr(i,an(e));else{const h=e.serverCache.getNode();y(h instanceof C,"serverChildren would be complete if leaf node"),u=bc(i,h)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=D(t);let h=kc(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=n.filter.updateChild(l,u,h,$(t),a,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,C.EMPTY_NODE,$(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=kr(i,an(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Nr(i,U())!=null,Ai(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Cc(i.getIndex()),r=pR(i);this.processor_=qR(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(C.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(C.EMPTY_NODE,a.getNode(),null),u=new on(l,o.isFullyInitialized(),s.filtersNodes()),h=new on(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Co(h,u),this.eventGenerator_=new TR(this.query_)}get query(){return this.query_}}function YR(n){return n.viewCache_.serverCache.getNode()}function XR(n,e){const t=an(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!O(e)&&!t.getImmediateChild(D(e)).isEmpty())?t.getChild(e):null}function zh(n){return n.eventRegistrations_.length===0}function JR(n,e){n.eventRegistrations_.push(e)}function Gh(n,e,t){const i=[];if(t){y(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function Kh(n,e,t,i){e.type===qe.MERGE&&e.source.queryId!==null&&(y(an(n.viewCache_),"We should always have a full cache before handling merges"),y(Ha(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=jR(n.processor_,s,e,t,i);return WR(n.processor_,r.viewCache),y(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,lg(n,r.changes,r.viewCache.eventCache.getNode(),null)}function ZR(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Y,(r,o)=>{i.push(zn(r,o))}),t.isFullyInitialized()&&i.push(X_(t.getNode())),lg(n,i,t.getNode(),e)}function lg(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return IR(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Or;class e0{constructor(){this.views=new Map}}function t0(n){y(!Or,"__referenceConstructor has already been defined"),Or=n}function n0(){return y(Or,"Reference.ts has not been loaded"),Or}function i0(n){return n.views.size===0}function Dc(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return y(r!=null,"SyncTree gave us an op for an invalid query."),Kh(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(Kh(o,e,t,i));return r}}function s0(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=kr(t,s?i:null),l=!1;a?l=!0:i instanceof C?(a=bc(t,i),l=!1):(a=C.EMPTY_NODE,l=!1);const c=Co(new on(a,l,!1),new on(i,s,!1));return new QR(e,c)}return o}function r0(n,e,t,i,s,r){const o=s0(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),JR(o,t),ZR(o,t)}function o0(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=Vt(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(Gh(c,t,i)),zh(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(Gh(l,t,i)),zh(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Vt(n)&&r.push(new(n0())(e._repo,e._path)),{removed:r,events:o}}function cg(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function xn(n,e){let t=null;for(const i of n.views.values())t=t||XR(i,e);return t}function ug(n,e){if(e._queryParams.loadsAllData())return Ao(n);{const i=e._queryIdentifier;return n.views.get(i)}}function hg(n,e){return ug(n,e)!=null}function Vt(n){return Ao(n)!=null}function Ao(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xr;function a0(n){y(!xr,"__referenceConstructor has already been defined"),xr=n}function l0(){return y(xr,"Reference.ts has not been loaded"),xr}let c0=1;class Qh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new H(null),this.pendingWriteTree_=LR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function u0(n,e,t,i,s){return RR(n.pendingWriteTree_,e,t,i,s),s?As(n,new rn(Z_(),e,t)):[]}function An(n,e,t=!1){const i=SR(n.pendingWriteTree_,e);if(PR(n.pendingWriteTree_,e)){let r=new H(null);return i.snap!=null?r=r.set(U(),!0):ke(i.children,o=>{r=r.set(new j(o),!0)}),As(n,new br(i.path,r,t))}else return[]}function Ro(n,e,t){return As(n,new rn(Rc(),e,t))}function h0(n,e,t){const i=H.fromObject(t);return As(n,new Xi(Rc(),e,i))}function d0(n,e){return As(n,new Yi(Rc(),e))}function f0(n,e,t){const i=Oc(n,t);if(i){const s=xc(i),r=s.path,o=s.queryId,a=Re(r,e),l=new Yi(Sc(o),a);return Mc(n,r,l)}else return[]}function Ya(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||hg(o,e))){const l=o0(o,e,t,i);i0(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(d,f)=>Vt(f));if(u&&!h){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=g0(d);for(let p=0;p<f.length;++p){const v=f[p],m=v.query,A=_g(n,v);n.listenProvider_.startListening(Si(m),Mr(n,m),A.hashFn,A.onComplete)}}}!h&&c.length>0&&!i&&(u?n.listenProvider_.stopListening(Si(e),null):c.forEach(d=>{const f=n.queryToTagMap.get(So(d));n.listenProvider_.stopListening(Si(d),f)}))}m0(n,c)}return a}function p0(n,e,t,i){const s=Oc(n,i);if(s!=null){const r=xc(s),o=r.path,a=r.queryId,l=Re(o,e),c=new rn(Sc(a),l,t);return Mc(n,o,c)}else return[]}function _0(n,e,t,i){const s=Oc(n,i);if(s){const r=xc(s),o=r.path,a=r.queryId,l=Re(o,e),c=H.fromObject(t),u=new Xi(Sc(a),l,c);return Mc(n,o,u)}else return[]}function Yh(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(d,f)=>{const p=Re(d,s);r=r||xn(f,p),o=o||Vt(f)});let a=n.syncPointTree_.get(s);a?(o=o||Vt(a),r=r||xn(a,U())):(a=new e0,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=C.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((f,p)=>{const v=xn(p,U());v&&(r=r.updateImmediateChild(f,v))}));const c=hg(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=So(e);y(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=y0();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const u=Pc(n.pendingWriteTree_,s);let h=r0(a,e,t,u,r,l);if(!c&&!o&&!i){const d=ug(a,e);h=h.concat(v0(n,e,d))}return h}function dg(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=Re(o,e),c=xn(a,l);if(c)return c});return ig(s,e,r,t,!0)}function As(n,e){return fg(e,n.syncPointTree_,null,Pc(n.pendingWriteTree_,U()))}function fg(n,e,t,i){if(O(n.path))return pg(n,e,t,i);{const s=e.get(U());t==null&&s!=null&&(t=xn(s,U()));let r=[];const o=D(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=sg(i,o);r=r.concat(fg(a,l,c,u))}return s&&(r=r.concat(Dc(s,n,i,t))),r}}function pg(n,e,t,i){const s=e.get(U());t==null&&s!=null&&(t=xn(s,U()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=sg(i,o),u=n.operationForChild(o);u&&(r=r.concat(pg(u,a,l,c)))}),s&&(r=r.concat(Dc(s,n,i,t))),r}function _g(n,e){const t=e.query,i=Mr(n,t);return{hashFn:()=>(YR(e)||C.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?f0(n,t._path,i):d0(n,t._path);{const r=fA(s,t);return Ya(n,t,null,r)}}}}function Mr(n,e){const t=So(e);return n.queryToTagMap.get(t)}function So(n){return n._path.toString()+"$"+n._queryIdentifier}function Oc(n,e){return n.tagToQueryMap.get(e)}function xc(n){const e=n.indexOf("$");return y(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new j(n.substr(0,e))}}function Mc(n,e,t){const i=n.syncPointTree_.get(e);y(i,"Missing sync point for query tag that we're tracking");const s=Pc(n.pendingWriteTree_,e);return Dc(i,t,s,null)}function g0(n){return n.fold((e,t,i)=>{if(t&&Vt(t))return[Ao(t)];{let s=[];return t&&(s=cg(t)),ke(i,(r,o)=>{s=s.concat(o)}),s}})}function Si(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(l0())(n._repo,n._path):n}function m0(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=So(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function y0(){return c0++}function v0(n,e,t){const i=e._path,s=Mr(n,e),r=_g(n,t),o=n.listenProvider_.startListening(Si(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)y(!Vt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!O(c)&&u&&Vt(u))return[Ao(u).query];{let d=[];return u&&(d=d.concat(cg(u).map(f=>f.query))),ke(h,(f,p)=>{d=d.concat(p)}),d}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(Si(u),Mr(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Vc(t)}node(){return this.node_}}class Lc{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ne(this.path_,e);return new Lc(this.syncTree_,t)}node(){return dg(this.syncTree_,this.path_)}}const E0=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Xh=function(n,e,t){if(!n||typeof n!="object")return n;if(y(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return T0(n[".sv"],e,t);if(typeof n[".sv"]=="object")return I0(n[".sv"],e);y(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},T0=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:y(!1,"Unexpected server value: "+n)}},I0=function(n,e,t){n.hasOwnProperty("increment")||y(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&y(!1,"Unexpected increment value: "+i);const s=e.node();if(y(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},w0=function(n,e,t,i){return Fc(e,new Lc(t,n),i)},C0=function(n,e,t){return Fc(n,new Vc(e),t)};function Fc(n,e,t){const i=n.getPriority().val(),s=Xh(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Xh(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new se(a,ye(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new se(s))),o.forEachChild(Y,(a,l)=>{const c=Fc(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Bc(n,e){let t=e instanceof j?e:new j(e),i=n,s=D(t);for(;s!==null;){const r=Mn(i.node.children,s)||{children:{},childCount:0};i=new Uc(s,i,r),t=$(t),s=D(t)}return i}function si(n){return n.node.value}function gg(n,e){n.node.value=e,Xa(n)}function mg(n){return n.node.childCount>0}function A0(n){return si(n)===void 0&&!mg(n)}function Po(n,e){ke(n.node.children,(t,i)=>{e(new Uc(t,n,i))})}function yg(n,e,t,i){t&&!i&&e(n),Po(n,s=>{yg(s,e,!0,i)}),t&&i&&e(n)}function R0(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Rs(n){return new j(n.parent===null?n.name:Rs(n.parent)+"/"+n.name)}function Xa(n){n.parent!==null&&S0(n.parent,n.name,n)}function S0(n,e,t){const i=A0(t),s=vt(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,Xa(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Xa(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0=/[\[\].#$\/\u0000-\u001F\u007F]/,b0=/[\[\].#$\u0000-\u001F\u007F]/,ta=10*1024*1024,vg=function(n){return typeof n=="string"&&n.length!==0&&!P0.test(n)},Eg=function(n){return typeof n=="string"&&n.length!==0&&!b0.test(n)},k0=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Eg(n)},Tg=function(n,e,t){const i=t instanceof j?new zA(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+jt(i));if(typeof e=="function")throw new Error(n+"contains a function "+jt(i)+" with contents = "+e.toString());if(T_(e))throw new Error(n+"contains "+e.toString()+" "+jt(i));if(typeof e=="string"&&e.length>ta/3&&Fr(e)>ta)throw new Error(n+"contains a string greater than "+ta+" utf8 bytes "+jt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(ke(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!vg(o)))throw new Error(n+" contains an invalid key ("+o+") "+jt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);GA(i,o),Tg(n,a,i),KA(i)}),s&&r)throw new Error(n+' contains ".value" child '+jt(i)+" in addition to actual children.")}},Ig=function(n,e,t,i){if(!(i&&t===void 0)&&!Eg(t))throw new Error(pd(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},N0=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ig(n,e,t,i)},D0=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!vg(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!k0(t))throw new Error(pd(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function wg(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!Tc(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function Cg(n,e,t){wg(n,t),Ag(n,i=>Tc(i,e))}function pn(n,e,t){wg(n,t),Ag(n,i=>Be(i,e)||Be(e,i))}function Ag(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(x0(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function x0(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Yt&&me("event: "+t.toString()),ws(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0="repo_interrupt",V0=25;class L0{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new O0,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Pr(),this.transactionQueueTree_=new Uc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function F0(n,e,t){if(n.stats_=vc(n.repoInfo_),n.forceRestClient_||mA())n.server_=new Sr(n.repoInfo_,(i,s,r,o)=>{Jh(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Zh(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ae(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new ut(n.repoInfo_,e,(i,s,r,o)=>{Jh(n,i,s,r,o)},i=>{Zh(n,i)},i=>{B0(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=IA(n.repoInfo_,()=>new ER(n.stats_,n.server_)),n.infoData_=new _R,n.infoSyncTree_=new Qh({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=Ro(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),qc(n,"connected",!1),n.serverSyncTree_=new Qh({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);pn(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function U0(n){const t=n.infoData_.getNode(new j(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Rg(n){return E0({timestamp:U0(n)})}function Jh(n,e,t,i,s){n.dataUpdateCount++;const r=new j(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=Zs(t,c=>ye(c));o=_0(n.serverSyncTree_,r,l,s)}else{const l=ye(t);o=p0(n.serverSyncTree_,r,l,s)}else if(i){const l=Zs(t,c=>ye(c));o=h0(n.serverSyncTree_,r,l)}else{const l=ye(t);o=Ro(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=jc(n,r)),pn(n.eventQueue_,a,o)}function Zh(n,e){qc(n,"connected",e),e===!1&&W0(n)}function B0(n,e){ke(e,(t,i)=>{qc(n,t,i)})}function qc(n,e,t){const i=new j("/.info/"+e),s=ye(t);n.infoData_.updateSnapshot(i,s);const r=Ro(n.infoSyncTree_,i,s);pn(n.eventQueue_,i,r)}function q0(n){return n.nextWriteId_++}function W0(n){Sg(n,"onDisconnectEvents");const e=Rg(n),t=Pr();$a(n.onDisconnect_,U(),(s,r)=>{const o=w0(s,r,n.serverSyncTree_,e);J_(t,s,o)});let i=[];$a(t,U(),(s,r)=>{i=i.concat(Ro(n.serverSyncTree_,s,r));const o=G0(n,s);jc(n,o)}),n.onDisconnect_=Pr(),pn(n.eventQueue_,U(),i)}function j0(n,e,t){let i;D(e._path)===".info"?i=Yh(n.infoSyncTree_,e,t):i=Yh(n.serverSyncTree_,e,t),Cg(n.eventQueue_,e._path,i)}function ed(n,e,t){let i;D(e._path)===".info"?i=Ya(n.infoSyncTree_,e,t):i=Ya(n.serverSyncTree_,e,t),Cg(n.eventQueue_,e._path,i)}function $0(n){n.persistentConnection_&&n.persistentConnection_.interrupt(M0)}function Sg(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),me(t,...e)}function Pg(n,e,t){return dg(n.serverSyncTree_,e,t)||C.EMPTY_NODE}function Wc(n,e=n.transactionQueueTree_){if(e||bo(n,e),si(e)){const t=kg(n,e);y(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&H0(n,Rs(e),t)}else mg(e)&&Po(e,t=>{Wc(n,t)})}function H0(n,e,t){const i=t.map(c=>c.currentWriteId),s=Pg(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const u=t[c];y(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Re(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{Sg(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(An(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();bo(n,Bc(n.transactionQueueTree_,e)),Wc(n,n.transactionQueueTree_),pn(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)ws(h[d])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{xe("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}jc(n,e)}},o)}function jc(n,e){const t=bg(n,e),i=Rs(t),s=kg(n,t);return z0(n,s,i),i}function z0(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Re(t,l.path);let u=!1,h;if(y(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(An(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=V0)u=!0,h="maxretry",s=s.concat(An(n.serverSyncTree_,l.currentWriteId,!0));else{const d=Pg(n,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){Tg("transaction failed: Data returned ",f,l.path);let p=ye(f);typeof f=="object"&&f!=null&&vt(f,".priority")||(p=p.updatePriority(d.getPriority()));const m=l.currentWriteId,A=Rg(n),L=C0(p,d,A);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=L,l.currentWriteId=q0(n),o.splice(o.indexOf(m),1),s=s.concat(u0(n.serverSyncTree_,l.path,L,l.currentWriteId,l.applyLocally)),s=s.concat(An(n.serverSyncTree_,m,!0))}else u=!0,h="nodata",s=s.concat(An(n.serverSyncTree_,l.currentWriteId,!0))}pn(n.eventQueue_,t,s),s=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}bo(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)ws(i[a]);Wc(n,n.transactionQueueTree_)}function bg(n,e){let t,i=n.transactionQueueTree_;for(t=D(e);t!==null&&si(i)===void 0;)i=Bc(i,t),e=$(e),t=D(e);return i}function kg(n,e){const t=[];return Ng(n,e,t),t.sort((i,s)=>i.order-s.order),t}function Ng(n,e,t){const i=si(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Po(e,s=>{Ng(n,s,t)})}function bo(n,e){const t=si(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,gg(e,t.length>0?t:void 0)}Po(e,i=>{bo(n,i)})}function G0(n,e){const t=Rs(bg(n,e)),i=Bc(n.transactionQueueTree_,e);return R0(i,s=>{na(n,s)}),na(n,i),yg(i,s=>{na(n,s)}),t}function na(n,e){const t=si(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(y(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(y(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(An(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?gg(e,void 0):t.length=r+1,pn(n.eventQueue_,Rs(e),s);for(let o=0;o<i.length;o++)ws(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K0(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Q0(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):xe(`Invalid query segment '${t}' in query '${n}'`)}return e}const td=function(n,e){const t=Y0(n),i=t.namespace;t.domain==="firebase.com"&&yt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&yt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||lA();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new O_(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new j(t.pathString)}},Y0=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(s=K0(n.substring(u,h)));const d=Q0(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ae(this.snapshot.exportVal())}}class Og{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return y(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return O(this._path)?null:W_(this._path)}get ref(){return new Et(this._repo,this._path)}get _queryIdentifier(){const e=Fh(this._queryParams),t=mc(e);return t==="{}"?"default":t}get _queryObject(){return Fh(this._queryParams)}isEqual(e){if(e=Q(e),!(e instanceof $c))return!1;const t=this._repo===e._repo,i=Tc(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+HA(this._path)}}class Et extends $c{constructor(e,t){super(e,t,new Ac,!1)}get parent(){const e=$_(this._path);return e===null?null:new Et(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ji{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new j(e),i=Vr(this.ref,e);return new Ji(this._node.getChild(t),i,Y)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Ji(s,Vr(this.ref,i),Y)))}hasChild(e){const t=new j(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function jS(n,e){return n=Q(n),n._checkNotDeleted("ref"),e!==void 0?Vr(n._root,e):n._root}function Vr(n,e){return n=Q(n),D(n._path)===null?N0("child","path",e,!1):Ig("child","path",e,!1),new Et(n._repo,ne(n._path,e))}class Hc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new Dg("value",this,new Ji(e.snapshotNode,new Et(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Og(this,e,t):null}matches(e){return e instanceof Hc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class zc{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Og(this,e,t):null}createEvent(e,t){y(e.childName!=null,"Child events should have a childName.");const i=Vr(new Et(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new Dg(e.type,this,new Ji(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof zc?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function J0(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const l=t,c=(u,h)=>{ed(n._repo,n,a),l(u,h)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new X0(t,r||void 0),a=e==="value"?new Hc(o):new zc(e,o);return j0(n._repo,n,a),()=>ed(n._repo,n,a)}function $S(n,e,t,i){return J0(n,"value",e,t,i)}t0(Et);a0(Et);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0="FIREBASE_DATABASE_EMULATOR_HOST",Ja={};let eS=!1;function tS(n,e,t,i){n.repoInfo_=new O_(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function nS(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||yt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),me("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=td(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[Z0]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=td(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new Dn(Dn.OWNER):new vA(n.name,n.options,e);D0("Invalid Firebase Database URL",o),O(o.path)||yt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=sS(a,n,u,new yA(n.name,t));return new rS(h,n)}function iS(n,e){const t=Ja[e];(!t||t[n.key]!==n)&&yt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),$0(n),delete t[n.key]}function sS(n,e,t,i){let s=Ja[e.name];s||(s={},Ja[e.name]=s);let r=s[n.toURLString()];return r&&yt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new L0(n,eS,t,i),s[n.toURLString()]=r,r}class rS{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(F0(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Et(this._repo,U())),this._rootInternal}_delete(){return this._rootInternal!==null&&(iS(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&yt("Cannot call "+e+" on a deleted database.")}}function oS(n=es(),e){const t=Yn(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=Lr("database");i&&aS(t,...i)}return t}function aS(n,e,t,i={}){n=Q(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&yt("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&yt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Dn(Dn.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:nl(i.mockUserToken,n.app.options.projectId);r=new Dn(o)}tS(s,e,t,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(n){iA(Lt),ht(new tt("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return nS(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),Pe(Th,Ih,n),Pe(Th,Ih,"esm2017")}ut.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};ut.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};lS();const cS={apiKey:"AIzaSyAprDEuUOpyd_CXTrlPjqWJPNBLYGHKi0I",authDomain:"mwenzi-d77c4.firebaseapp.com",projectId:"mwenzi-d77c4",storageBucket:"mwenzi-d77c4.appspot.com",messagingSenderId:"771753936157",appId:"1:771753936157:web:6b4573bf364f82461d4df4",databaseURL:"https://mwenzi-d77c4-default-rtdb.asia-southeast1.firebasedatabase.app/"},Ss=md(cS);hE(Ss);vE(Ss,"asia-east1");const uS=XE(Ss);YE(uS);const HS=HC(Ss);oS(Ss);const hS=ln(localStorage.getItem("userId")||"webjeda");hS.subscribe(n=>localStorage.userId=n);const dS=ln(localStorage.getItem("subjectSelected1")||"webjeda"),fS=ln(localStorage.getItem("timeFrom")||"webjeda"),pS=ln(localStorage.getItem("timeTo")||"webjeda"),_S=ln(localStorage.getItem("selectedSubject")||"webjeda");dS.subscribe(n=>localStorage.subjectSelected1=n);fS.subscribe(n=>localStorage.timeFrom=n);pS.subscribe(n=>localStorage.timeTo=n);_S.subscribe(n=>localStorage.selectedSubject=n);function gS(n,e,t,i){var s,r,o=!1,a=t.length>=2,l=(p,v,m)=>{if(s=v,a&&(r=p),!o){let A=e(p,v,m);if(e.length<2)v(A);else return A}o=!1},c=Mg(n,l,i),u=!Array.isArray(n);function h(p){var v=t(p,r);u?(o=!0,n.set(v)):v.forEach((m,A)=>{o=!0,n[A].set(m)}),o=!1}var d=!1;function f(p){var v,m,A,L;if(d){L=p(ia(c)),s(L);return}var B=c.subscribe(W=>{d?v?m=!0:v=!0:A=W});L=p(A),d=!0,s(L),B(),d=!1,m&&(L=ia(c)),v&&h(L)}return{subscribe:c.subscribe,set(p){f(()=>p)},update:f}}const mS=20,_n=ln([]),Gc=ln(null),Ys=new Map,nd=n=>{if(Ys.has(n))return;const e=setTimeout(()=>{Ys.delete(n),xg(n)},1e3);Ys.set(n,e)},yS=n=>{const e=Ys.get(n);e&&clearTimeout(e)};function vS(n){n.id&&yS(n.id),_n.update(e=>e.map(t=>t.id===n.id?{...t,...n}:t))}function ES(n){_n.update(e=>[n,...e].slice(0,mS))}function TS(n){ia(_n).find(e=>e.id===n.id)?vS(n):ES(n)}function IS(n){_n.update(e=>(n?nd(n):e.forEach(t=>{nd(t.id)}),e.map(t=>t.id===n||n===void 0?{...t,visible:!1}:t)))}function xg(n){_n.update(e=>n===void 0?[]:e.filter(t=>t.id!==n))}function zS(n){Gc.set(n)}function GS(n){let e;Gc.update(t=>(e=n-(t||0),null)),_n.update(t=>t.map(i=>({...i,pauseDuration:i.pauseDuration+e})))}const wS={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3};function KS(n={}){return{toasts:gS(_n,t=>t.map(i=>{var s,r;return{...n,...n[i.type],...i,duration:i.duration||((s=n[i.type])==null?void 0:s.duration)||(n==null?void 0:n.duration)||wS[i.type],style:[n.style,(r=n[i.type])==null?void 0:r.style,i.style].join(";")}}),t=>t),pausedAt:Gc}}const CS=n=>typeof n=="function",id=(n,e)=>CS(n)?n(e):n,AS=(()=>{let n=0;return()=>(n+=1,n.toString())})(),QS=(()=>{let n;return()=>{if(n===void 0&&typeof window<"u"){const e=matchMedia("(prefers-reduced-motion: reduce)");n=!e||e.matches}return n}})(),RS=(n,e="blank",t)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:n,pauseDuration:0,...t,id:(t==null?void 0:t.id)||AS()}),Ps=n=>(e,t)=>{const i=RS(e,n,t);return TS(i),i.id},Ye=(n,e)=>Ps("blank")(n,e);Ye.error=Ps("error");Ye.success=Ps("success");Ye.loading=Ps("loading");Ye.custom=Ps("custom");Ye.dismiss=n=>{IS(n)};Ye.remove=n=>xg(n);Ye.promise=(n,e,t)=>{const i=Ye.loading(e.loading,{...t,...t==null?void 0:t.loading});return n.then(s=>(Ye.success(id(e.success,s),{id:i,...t,...t==null?void 0:t.success}),s)).catch(s=>{Ye.error(id(e.error,s),{id:i,...t,...t==null?void 0:t.error})}),n};export{QS as A,pS as a,VS as b,OS as c,jC as d,Ye as e,HS as f,LS as g,FS as h,_S as i,oS as j,$S as k,Vr as l,US as m,BS as n,WS as o,qS as p,xS as q,jS as r,dS as s,fS as t,hS as u,KS as v,MS as w,zS as x,GS as y,vS as z};
