import{w as Nn,j as bg,k as kg}from"./singletons.7695d49e.js";import{r as Ud,j as Pa,k as Ng,s as rn,n as pt,l as ro,c as Bd,u as qd,g as $d,d as jd,o as Dg,b as Og,e as Mg}from"./scheduler.542a8b70.js";import{t as B,d as U,S as on,i as an,g as yt,h as vt,j as Et,f as H,k as be,l as Z,a as Te,e as _t,p as Tt,b as It,r as Oe,s as Wd,u as Ge,c as Hd,v as Me,x as zd,w as Ve,q as ii,m as Gd,n as Kd,o as Qd,E as Tu,F as Bi,A as Iu}from"./index.def341b4.js";function wu(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Vg(n,e){B(n,1,1,()=>{e.delete(n.key)})}function xg(n,e,t,i,s,r,o,a,l,c,u,h){let d=n.length,f=r.length,p=d;const y={};for(;p--;)y[n[p].key]=p;const m=[],w=new Map,N=new Map,F=[];for(p=f;p--;){const G=h(s,r,p),me=t(G);let we=o.get(me);we?i&&F.push(()=>we.p(G,e)):(we=c(me,G),we.c()),w.set(me,m[p]=we),me in y&&N.set(me,Math.abs(p-y[me]))}const q=new Set,Ie=new Set;function _e(G){U(G,1),G.m(a,u),o.set(G.key,G),u=G.first,f--}for(;d&&f;){const G=m[f-1],me=n[d-1],we=G.key,Ct=me.key;G===me?(u=G.first,d--,f--):w.has(Ct)?!o.has(we)||q.has(we)?_e(G):Ie.has(Ct)?d--:N.get(we)>N.get(Ct)?(Ie.add(we),_e(G)):(q.add(Ct),d--):(l(me,o),d--)}for(;d--;){const G=n[d];w.has(G.key)||l(G,o)}for(;f;)_e(m[f-1]);return Ud(F),m}function oo(n,e){const t={},i={},s={$$scope:1};let r=n.length;for(;r--;){const o=n[r],a=e[r];if(a){for(const l in o)l in a||(i[l]=1);for(const l in a)s[l]||(t[l]=a[l],s[l]=1);n[r]=a}else for(const l in o)s[l]=1}for(const o in i)o in t||(t[o]=void 0);return t}function Cl(n){return typeof n=="object"&&n!==null?n:{}}/**
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
 */const Yd={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const v=function(n,e){if(!n)throw gi(e)},gi=function(n){return new Error("Firebase Database ("+Yd.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Xd=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Lg=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Al={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),i.push(t[u],t[h],t[d],t[f])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Xd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Lg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw new Fg;const d=r<<2|a>>4;if(i.push(d),c!==64){const f=a<<4&240|c>>2;if(i.push(f),h!==64){const p=c<<6&192|h;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Fg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jd=function(n){const e=Xd(n);return Al.encodeByteArray(e,!0)},vr=function(n){return Jd(n).replace(/\./g,"")},Er=function(n){try{return Al.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ug(n){return Zd(void 0,n)}function Zd(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Bg(t)||(n[t]=Zd(n[t],e[t]));return n}function Bg(n){return n!=="__proto__"}/**
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
 */function qg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $g=()=>qg().__FIREBASE_DEFAULTS__,jg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Wg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Er(n[1]);return e&&JSON.parse(e)},Rl=()=>{try{return $g()||jg()||Wg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ef=n=>{var e,t;return(t=(e=Rl())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},ao=n=>{const e=ef(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},tf=()=>{var n;return(n=Rl())===null||n===void 0?void 0:n.config},nf=n=>{var e;return(e=Rl())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Sl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Pl(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[vr(JSON.stringify(t)),vr(JSON.stringify(o)),a].join(".")}/**
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
 */function xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function Hg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function sf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zg(){const n=xe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function rf(){return Yd.NODE_ADMIN===!0}function Gg(){try{return typeof indexedDB=="object"}catch{return!1}}function Kg(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const Qg="FirebaseError";class wt extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Qg,Object.setPrototypeOf(this,wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Is.prototype.create)}}class Is{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Yg(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new wt(s,a,i)}}function Yg(n,e){return n.replace(Xg,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Xg=/\{\$([^}]+)}/g;/**
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
 */function Xi(n){return JSON.parse(n)}function de(n){return JSON.stringify(n)}/**
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
 */const of=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=Xi(Er(r[0])||""),t=Xi(Er(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Jg=function(n){const e=of(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Zg=function(n){const e=of(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Bt(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function si(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function ba(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Tr(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Ir(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Cu(r)&&Cu(o)){if(!Ir(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Cu(n){return n!==null&&typeof n=="object"}/**
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
 */function yi(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class ey{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)i[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(s<<5|s>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function ty(n,e){const t=new ny(n,e);return t.subscribe.bind(t)}class ny{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");iy(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=ta),s.error===void 0&&(s.error=ta),s.complete===void 0&&(s.complete=ta);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iy(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ta(){}function af(n,e){return`${n} failed: ${e} argument `}/**
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
 */const sy=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,v(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},lo=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function ee(n){return n&&n._delegate?n._delegate:n}class mt{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const dn="[DEFAULT]";/**
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
 */class ry{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Sl;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ay(e))try{this.getOrInitializeService({instanceIdentifier:dn})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=dn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=dn){return this.instances.has(e)}getOptions(e=dn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:oy(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=dn){return this.component?this.component.multipleInstances?e:dn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oy(n){return n===dn?void 0:n}function ay(n){return n.instantiationMode==="EAGER"}/**
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
 */class ly{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ry(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var V;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(V||(V={}));const cy={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},uy=V.INFO,hy={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},dy=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=hy[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class co{constructor(e){this.name=e,this._logLevel=uy,this._logHandler=dy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const fy=(n,e)=>e.some(t=>n instanceof t);let Au,Ru;function py(){return Au||(Au=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _y(){return Ru||(Ru=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lf=new WeakMap,ka=new WeakMap,cf=new WeakMap,na=new WeakMap,kl=new WeakMap;function my(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Kt(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&lf.set(t,n)}).catch(()=>{}),kl.set(e,n),e}function gy(n){if(ka.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});ka.set(n,e)}let Na={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ka.get(n);if(e==="objectStoreNames")return n.objectStoreNames||cf.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Kt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function yy(n){Na=n(Na)}function vy(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(ia(this),e,...t);return cf.set(i,e.sort?e.sort():[e]),Kt(i)}:_y().includes(n)?function(...e){return n.apply(ia(this),e),Kt(lf.get(this))}:function(...e){return Kt(n.apply(ia(this),e))}}function Ey(n){return typeof n=="function"?vy(n):(n instanceof IDBTransaction&&gy(n),fy(n,py())?new Proxy(n,Na):n)}function Kt(n){if(n instanceof IDBRequest)return my(n);if(na.has(n))return na.get(n);const e=Ey(n);return e!==n&&(na.set(n,e),kl.set(e,n)),e}const ia=n=>kl.get(n);function Ty(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=Kt(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Kt(o.result),l.oldVersion,l.newVersion,Kt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Iy=["get","getKey","getAll","getAllKeys","count"],wy=["put","add","delete","clear"],sa=new Map;function Su(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(sa.get(e))return sa.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=wy.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Iy.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return sa.set(e,r),r}yy(n=>({...n,get:(e,t,i)=>Su(e,t)||n.get(e,t,i),has:(e,t)=>!!Su(e,t)||n.has(e,t)}));/**
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
 */class Cy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ay(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Ay(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Da="@firebase/app",Pu="0.9.23";/**
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
 */const Tn=new co("@firebase/app"),Ry="@firebase/app-compat",Sy="@firebase/analytics-compat",Py="@firebase/analytics",by="@firebase/app-check-compat",ky="@firebase/app-check",Ny="@firebase/auth",Dy="@firebase/auth-compat",Oy="@firebase/database",My="@firebase/database-compat",Vy="@firebase/functions",xy="@firebase/functions-compat",Ly="@firebase/installations",Fy="@firebase/installations-compat",Uy="@firebase/messaging",By="@firebase/messaging-compat",qy="@firebase/performance",$y="@firebase/performance-compat",jy="@firebase/remote-config",Wy="@firebase/remote-config-compat",Hy="@firebase/storage",zy="@firebase/storage-compat",Gy="@firebase/firestore",Ky="@firebase/firestore-compat",Qy="firebase",Yy="10.6.0";/**
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
 */const Oa="[DEFAULT]",Xy={[Da]:"fire-core",[Ry]:"fire-core-compat",[Py]:"fire-analytics",[Sy]:"fire-analytics-compat",[ky]:"fire-app-check",[by]:"fire-app-check-compat",[Ny]:"fire-auth",[Dy]:"fire-auth-compat",[Oy]:"fire-rtdb",[My]:"fire-rtdb-compat",[Vy]:"fire-fn",[xy]:"fire-fn-compat",[Ly]:"fire-iid",[Fy]:"fire-iid-compat",[Uy]:"fire-fcm",[By]:"fire-fcm-compat",[qy]:"fire-perf",[$y]:"fire-perf-compat",[jy]:"fire-rc",[Wy]:"fire-rc-compat",[Hy]:"fire-gcs",[zy]:"fire-gcs-compat",[Gy]:"fire-fst",[Ky]:"fire-fst-compat","fire-js":"fire-js",[Qy]:"fire-js-all"};/**
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
 */const wr=new Map,Ma=new Map;function Jy(n,e){try{n.container.addComponent(e)}catch(t){Tn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Dt(n){const e=n.name;if(Ma.has(e))return Tn.debug(`There were multiple attempts to register component ${e}.`),!1;Ma.set(e,n);for(const t of wr.values())Jy(t,n);return!0}function vi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Zy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Qt=new Is("app","Firebase",Zy);/**
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
 */class ev{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new mt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qt.create("app-deleted",{appName:this._name})}}/**
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
 */const ln=Yy;function uf(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Oa,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Qt.create("bad-app-name",{appName:String(s)});if(t||(t=tf()),!t)throw Qt.create("no-options");const r=wr.get(s);if(r){if(Ir(t,r.options)&&Ir(i,r.config))return r;throw Qt.create("duplicate-app",{appName:s})}const o=new ly(s);for(const l of Ma.values())o.addComponent(l);const a=new ev(t,i,o);return wr.set(s,a),a}function ws(n=Oa){const e=wr.get(n);if(!e&&n===Oa&&tf())return uf();if(!e)throw Qt.create("no-app",{appName:n});return e}function $e(n,e,t){var i;let s=(i=Xy[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tn.warn(a.join(" "));return}Dt(new mt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const tv="firebase-heartbeat-database",nv=1,Ji="firebase-heartbeat-store";let ra=null;function hf(){return ra||(ra=Ty(tv,nv,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ji)}}}).catch(n=>{throw Qt.create("idb-open",{originalErrorMessage:n.message})})),ra}async function iv(n){try{return await(await hf()).transaction(Ji).objectStore(Ji).get(df(n))}catch(e){if(e instanceof wt)Tn.warn(e.message);else{const t=Qt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tn.warn(t.message)}}}async function bu(n,e){try{const i=(await hf()).transaction(Ji,"readwrite");await i.objectStore(Ji).put(e,df(n)),await i.done}catch(t){if(t instanceof wt)Tn.warn(t.message);else{const i=Qt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Tn.warn(i.message)}}}function df(n){return`${n.name}!${n.options.appId}`}/**
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
 */const sv=1024,rv=30*24*60*60*1e3;class ov{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new lv(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ku();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const o=new Date(r.date).valueOf();return Date.now()-o<=rv}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ku(),{heartbeatsToSend:i,unsentEntries:s}=av(this._heartbeatsCache.heartbeats),r=vr(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ku(){return new Date().toISOString().substring(0,10)}function av(n,e=sv){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Nu(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Nu(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class lv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gg()?Kg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await iv(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return bu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return bu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Nu(n){return vr(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function cv(n){Dt(new mt("platform-logger",e=>new Cy(e),"PRIVATE")),Dt(new mt("heartbeat",e=>new ov(e),"PRIVATE")),$e(Da,Pu,n),$e(Da,Pu,"esm2017"),$e("fire-js","")}cv("");var uv="firebase",hv="10.6.0";/**
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
 */$e(uv,hv,"app");function Nl(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function ff(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dv=ff,pf=new Is("auth","Firebase",ff());/**
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
 */const Cr=new co("@firebase/auth");function fv(n,...e){Cr.logLevel<=V.WARN&&Cr.warn(`Auth (${ln}): ${n}`,...e)}function ur(n,...e){Cr.logLevel<=V.ERROR&&Cr.error(`Auth (${ln}): ${n}`,...e)}/**
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
 */function Ot(n,...e){throw Dl(n,...e)}function ut(n,...e){return Dl(n,...e)}function pv(n,e,t){const i=Object.assign(Object.assign({},dv()),{[e]:t});return new Is("auth","Firebase",i).create(e,{appName:n.name})}function Dl(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return pf.create(n,...e)}function b(n,e,...t){if(!n)throw Dl(e,...t)}function Rt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ur(e),new Error(e)}function Mt(n,e){n||Rt(e)}/**
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
 */function Va(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function _v(){return Du()==="http:"||Du()==="https:"}function Du(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function mv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_v()||Hg()||"connection"in navigator)?navigator.onLine:!0}function gv(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Cs{constructor(e,t){this.shortDelay=e,this.longDelay=t,Mt(t>e,"Short delay should be less than long delay!"),this.isMobile=bl()||sf()}get(){return mv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ol(n,e){Mt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class _f{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const yv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const vv=new Cs(3e4,6e4);function Ml(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ei(n,e,t,i,s={}){return mf(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=yi(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),_f.fetch()(gf(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function mf(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},yv),e);try{const s=new Tv(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Js(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Js(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Js(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Js(n,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw pv(n,u,c);Ot(n,u)}}catch(s){if(s instanceof wt)throw s;Ot(n,"network-request-failed",{message:String(s)})}}async function Ev(n,e,t,i,s={}){const r=await Ei(n,e,t,i,s);return"mfaPendingCredential"in r&&Ot(n,"multi-factor-auth-required",{_serverResponse:r}),r}function gf(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?Ol(n.config,s):`${n.config.apiScheme}://${s}`}class Tv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(ut(this.auth,"network-request-failed")),vv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Js(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=ut(n,e,i);return s.customData._tokenResponse=t,s}/**
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
 */async function Iv(n,e){return Ei(n,"POST","/v1/accounts:delete",e)}async function wv(n,e){return Ei(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function qi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Cv(n,e=!1){const t=ee(n),i=await t.getIdToken(e),s=Vl(i);b(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:qi(oa(s.auth_time)),issuedAtTime:qi(oa(s.iat)),expirationTime:qi(oa(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function oa(n){return Number(n)*1e3}function Vl(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return ur("JWT malformed, contained fewer than 3 sections"),null;try{const s=Er(t);return s?JSON.parse(s):(ur("Failed to decode base64 JWT payload"),null)}catch(s){return ur("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Av(n){const e=Vl(n);return b(e,"internal-error"),b(typeof e.exp<"u","internal-error"),b(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Zi(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof wt&&Rv(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Rv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Sv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class yf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=qi(this.lastLoginAt),this.creationTime=qi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ar(n){var e;const t=n.auth,i=await n.getIdToken(),s=await Zi(n,wv(t,{idToken:i}));b(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?kv(r.providerUserInfo):[],a=bv(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new yf(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function Pv(n){const e=ee(n);await Ar(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bv(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function kv(n){return n.map(e=>{var{providerId:t}=e,i=Nl(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function Nv(n,e){const t=await mf(n,{},async()=>{const i=yi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=gf(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",_f.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Dv(n,e){return Ei(n,"POST","/v2/accounts:revokeToken",Ml(n,e))}/**
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
 */class es{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(typeof e.idToken<"u","internal-error"),b(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Av(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return b(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Nv(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new es;return i&&(b(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(b(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(b(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new es,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
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
 */function $t(n,e){b(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class yn{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=Nl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Sv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new yf(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Zi(this,this.stsTokenManager.getToken(this.auth,e));return b(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Cv(this,e)}reload(){return Pv(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new yn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Ar(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Zi(this,Iv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,l,c,u;const h=(i=t.displayName)!==null&&i!==void 0?i:void 0,d=(s=t.email)!==null&&s!==void 0?s:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=t.photoURL)!==null&&o!==void 0?o:void 0,y=(a=t.tenantId)!==null&&a!==void 0?a:void 0,m=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,w=(c=t.createdAt)!==null&&c!==void 0?c:void 0,N=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:F,emailVerified:q,isAnonymous:Ie,providerData:_e,stsTokenManager:G}=t;b(F&&G,e,"internal-error");const me=es.fromJSON(this.name,G);b(typeof F=="string",e,"internal-error"),$t(h,e.name),$t(d,e.name),b(typeof q=="boolean",e,"internal-error"),b(typeof Ie=="boolean",e,"internal-error"),$t(f,e.name),$t(p,e.name),$t(y,e.name),$t(m,e.name),$t(w,e.name),$t(N,e.name);const we=new yn({uid:F,auth:e,email:d,emailVerified:q,displayName:h,isAnonymous:Ie,photoURL:p,phoneNumber:f,tenantId:y,stsTokenManager:me,createdAt:w,lastLoginAt:N});return _e&&Array.isArray(_e)&&(we.providerData=_e.map(Ct=>Object.assign({},Ct))),m&&(we._redirectEventId=m),we}static async _fromIdTokenResponse(e,t,i=!1){const s=new es;s.updateFromServerResponse(t);const r=new yn({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Ar(r),r}}/**
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
 */const Ou=new Map;function St(n){Mt(n instanceof Function,"Expected a class definition");let e=Ou.get(n);return e?(Mt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ou.set(n,e),e)}/**
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
 */class vf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}vf.type="NONE";const Mu=vf;/**
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
 */function hr(n,e,t){return`firebase:${n}:${e}:${t}`}class Kn{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=hr(this.userKey,s.apiKey,r),this.fullPersistenceKey=hr("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?yn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Kn(St(Mu),e,i);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||St(Mu);const o=hr(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){const h=yn._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Kn(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Kn(r,e,i))}}/**
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
 */function Vu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(If(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ef(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cf(e))return"Blackberry";if(Af(e))return"Webos";if(xl(e))return"Safari";if((e.includes("chrome/")||Tf(e))&&!e.includes("edge/"))return"Chrome";if(wf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Ef(n=xe()){return/firefox\//i.test(n)}function xl(n=xe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Tf(n=xe()){return/crios\//i.test(n)}function If(n=xe()){return/iemobile/i.test(n)}function wf(n=xe()){return/android/i.test(n)}function Cf(n=xe()){return/blackberry/i.test(n)}function Af(n=xe()){return/webos/i.test(n)}function uo(n=xe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Ov(n=xe()){var e;return uo(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Mv(){return zg()&&document.documentMode===10}function Rf(n=xe()){return uo(n)||wf(n)||Af(n)||Cf(n)||/windows phone/i.test(n)||If(n)}function Vv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Sf(n,e=[]){let t;switch(n){case"Browser":t=Vu(xe());break;case"Worker":t=`${Vu(xe())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ln}/${i}`}/**
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
 */class xv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function Lv(n,e={}){return Ei(n,"GET","/v2/passwordPolicy",Ml(n,e))}/**
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
 */const Fv=6;class Uv{constructor(e){var t,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Fv,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class Bv{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xu(this),this.idTokenSubscription=new xu(this),this.beforeStateQueue=new xv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=St(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Kn.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ar(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ee(e):null;return t&&b(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(St(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Lv(this),t=new Uv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Is("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Dv(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&St(e)||this._popupRedirectResolver;b(t,this,"argument-error"),this.redirectPersistenceManager=await Kn.create(this,[St(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(b(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&fv(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ll(n){return ee(n)}class xu{constructor(e){this.auth=e,this.observer=null,this.addObserver=ty(t=>this.observer=t)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function qv(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function $v(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=ut("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",qv().appendChild(i)})}function jv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Wv(n,e){const t=vi(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(Ir(r,e??{}))return s;Ot(s,"already-initialized")}return t.initialize({options:e})}function Hv(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(St);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function zv(n,e,t){const i=Ll(n);b(i._canInitEmulator,i,"emulator-config-failed"),b(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),r=Pf(e),{host:o,port:a}=Gv(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Kv()}function Pf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Gv(n){const e=Pf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Lu(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Lu(o)}}}function Lu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Kv(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class bf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Rt("not implemented")}_getIdTokenResponse(e){return Rt("not implemented")}_linkToIdToken(e,t){return Rt("not implemented")}_getReauthenticationResolver(e){return Rt("not implemented")}}/**
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
 */async function Qn(n,e){return Ev(n,"POST","/v1/accounts:signInWithIdp",Ml(n,e))}/**
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
 */const Qv="http://localhost";class In extends bf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new In(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ot("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=Nl(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new In(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Qn(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Qn(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qn(e,t)}buildRequest(){const e={requestUri:Qv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=yi(t)}return e}}/**
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
 */class kf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class As extends kf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class jt extends As{constructor(){super("facebook.com")}static credential(e){return In._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jt.credential(e.oauthAccessToken)}catch{return null}}}jt.FACEBOOK_SIGN_IN_METHOD="facebook.com";jt.PROVIDER_ID="facebook.com";/**
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
 */class Wt extends As{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return In._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Wt.credential(t,i)}catch{return null}}}Wt.GOOGLE_SIGN_IN_METHOD="google.com";Wt.PROVIDER_ID="google.com";/**
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
 */class Ht extends As{constructor(){super("github.com")}static credential(e){return In._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ht.credential(e.oauthAccessToken)}catch{return null}}}Ht.GITHUB_SIGN_IN_METHOD="github.com";Ht.PROVIDER_ID="github.com";/**
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
 */class zt extends As{constructor(){super("twitter.com")}static credential(e,t){return In._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return zt.credential(t,i)}catch{return null}}}zt.TWITTER_SIGN_IN_METHOD="twitter.com";zt.PROVIDER_ID="twitter.com";/**
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
 */class ri{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await yn._fromIdTokenResponse(e,i,s),o=Fu(i);return new ri({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Fu(i);return new ri({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Fu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Rr extends wt{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Rr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new Rr(e,t,i,s)}}function Nf(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Rr._fromErrorAndOperation(n,r,e,i):r})}async function Yv(n,e,t=!1){const i=await Zi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ri._forOperation(n,"link",i)}/**
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
 */async function Xv(n,e,t=!1){const{auth:i}=n,s="reauthenticate";try{const r=await Zi(n,Nf(i,s,e,n),t);b(r.idToken,i,"internal-error");const o=Vl(r.idToken);b(o,i,"internal-error");const{sub:a}=o;return b(n.uid===a,i,"user-mismatch"),ri._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ot(i,"user-mismatch"),r}}/**
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
 */async function Jv(n,e,t=!1){const i="signIn",s=await Nf(n,i,e),r=await ri._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}function Zv(n,e,t,i){return ee(n).onIdTokenChanged(e,t,i)}function eE(n,e,t){return ee(n).beforeAuthStateChanged(e,t)}const Sr="__sak";/**
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
 */class Df{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Sr,"1"),this.storage.removeItem(Sr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function tE(){const n=xe();return xl(n)||uo(n)}const nE=1e3,iE=10;class Of extends Df{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=tE()&&Vv(),this.fallbackToPolling=Rf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Mv()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,iE):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},nE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Of.type="LOCAL";const sE=Of;/**
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
 */class Mf extends Df{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Mf.type="SESSION";const Vf=Mf;/**
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
 */function rE(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ho{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new ho(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await rE(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ho.receivers=[];/**
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
 */function Fl(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class oE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Fl("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ht(){return window}function aE(n){ht().location.href=n}/**
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
 */function xf(){return typeof ht().WorkerGlobalScope<"u"&&typeof ht().importScripts=="function"}async function lE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cE(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function uE(){return xf()?self:null}/**
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
 */const Lf="firebaseLocalStorageDb",hE=1,Pr="firebaseLocalStorage",Ff="fbase_key";class Rs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function fo(n,e){return n.transaction([Pr],e?"readwrite":"readonly").objectStore(Pr)}function dE(){const n=indexedDB.deleteDatabase(Lf);return new Rs(n).toPromise()}function xa(){const n=indexedDB.open(Lf,hE);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Pr,{keyPath:Ff})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Pr)?e(i):(i.close(),await dE(),e(await xa()))})})}async function Uu(n,e,t){const i=fo(n,!0).put({[Ff]:e,value:t});return new Rs(i).toPromise()}async function fE(n,e){const t=fo(n,!1).get(e),i=await new Rs(t).toPromise();return i===void 0?null:i.value}function Bu(n,e){const t=fo(n,!0).delete(e);return new Rs(t).toPromise()}const pE=800,_E=3;class Uf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>_E)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ho._getInstance(uE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await lE(),!this.activeServiceWorker)return;this.sender=new oE(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xa();return await Uu(e,Sr,"1"),await Bu(e,Sr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Uu(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>fE(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Bu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=fo(s,!1).getAll();return new Rs(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Uf.type="LOCAL";const mE=Uf;new Cs(3e4,6e4);/**
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
 */function gE(n,e){return e?St(e):(b(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ul extends bf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Qn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Qn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function yE(n){return Jv(n.auth,new Ul(n),n.bypassAuthState)}function vE(n){const{auth:e,user:t}=n;return b(t,e,"internal-error"),Xv(t,new Ul(n),n.bypassAuthState)}async function EE(n){const{auth:e,user:t}=n;return b(t,e,"internal-error"),Yv(t,new Ul(n),n.bypassAuthState)}/**
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
 */class Bf{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yE;case"linkViaPopup":case"linkViaRedirect":return EE;case"reauthViaPopup":case"reauthViaRedirect":return vE;default:Ot(this.auth,"internal-error")}}resolve(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const TE=new Cs(2e3,1e4);class Wn extends Bf{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Wn.currentPopupAction&&Wn.currentPopupAction.cancel(),Wn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){Mt(this.filter.length===1,"Popup operations only handle one event");const e=Fl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ut(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ut(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,TE.get())};e()}}Wn.currentPopupAction=null;/**
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
 */const IE="pendingRedirect",dr=new Map;class wE extends Bf{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=dr.get(this.auth._key());if(!e){try{const i=await CE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}dr.set(this.auth._key(),e)}return this.bypassAuthState||dr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function CE(n,e){const t=SE(e),i=RE(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function AE(n,e){dr.set(n._key(),e)}function RE(n){return St(n._redirectPersistence)}function SE(n){return hr(IE,n.config.apiKey,n.name)}async function PE(n,e,t=!1){const i=Ll(n),s=gE(i,e),o=await new wE(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const bE=10*60*1e3;class kE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!NE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!qf(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(ut(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bE&&this.cachedEventUids.clear(),this.cachedEventUids.has(qu(e))}saveEventToCache(e){this.cachedEventUids.add(qu(e)),this.lastProcessedEventTime=Date.now()}}function qu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function qf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function NE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qf(n);default:return!1}}/**
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
 */async function DE(n,e={}){return Ei(n,"GET","/v1/projects",e)}/**
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
 */const OE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ME=/^https?/;async function VE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await DE(n);for(const t of e)try{if(xE(t))return}catch{}Ot(n,"unauthorized-domain")}function xE(n){const e=Va(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!ME.test(t))return!1;if(OE.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const LE=new Cs(3e4,6e4);function $u(){const n=ht().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function FE(n){return new Promise((e,t)=>{var i,s,r;function o(){$u(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$u(),t(ut(n,"network-request-failed"))},timeout:LE.get()})}if(!((s=(i=ht().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=ht().gapi)===null||r===void 0)&&r.load)o();else{const a=jv("iframefcb");return ht()[a]=()=>{gapi.load?o():t(ut(n,"network-request-failed"))},$v(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw fr=null,e})}let fr=null;function UE(n){return fr=fr||FE(n),fr}/**
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
 */const BE=new Cs(5e3,15e3),qE="__/auth/iframe",$E="emulator/auth/iframe",jE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function HE(n){const e=n.config;b(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ol(e,$E):`https://${n.config.authDomain}/${qE}`,i={apiKey:e.apiKey,appName:n.name,v:ln},s=WE.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${yi(i).slice(1)}`}async function zE(n){const e=await UE(n),t=ht().gapi;return b(t,n,"internal-error"),e.open({where:document.body,url:HE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jE,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=ut(n,"network-request-failed"),a=ht().setTimeout(()=>{r(o)},BE.get());function l(){ht().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const GE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},KE=500,QE=600,YE="_blank",XE="http://localhost";class ju{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function JE(n,e,t,i=KE,s=QE){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},GE),{width:i.toString(),height:s.toString(),top:r,left:o}),c=xe().toLowerCase();t&&(a=Tf(c)?YE:t),Ef(c)&&(e=e||XE,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(Ov(c)&&a!=="_self")return ZE(e||"",a),new ju(null);const h=window.open(e||"",a,u);b(h,n,"popup-blocked");try{h.focus()}catch{}return new ju(h)}function ZE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const eT="__/auth/handler",tT="emulator/auth/handler",nT=encodeURIComponent("fac");async function Wu(n,e,t,i,s,r){b(n.config.authDomain,n,"auth-domain-config-required"),b(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:ln,eventId:s};if(e instanceof kf){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",ba(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof As){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await n._getAppCheckToken(),c=l?`#${nT}=${encodeURIComponent(l)}`:"";return`${iT(n)}?${yi(a).slice(1)}${c}`}function iT({config:n}){return n.emulator?Ol(n,tT):`https://${n.authDomain}/${eT}`}/**
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
 */const aa="webStorageSupport";class sT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vf,this._completeRedirectFn=PE,this._overrideRedirectResult=AE}async _openPopup(e,t,i,s){var r;Mt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Wu(e,t,i,Va(),s);return JE(e,o,Fl())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await Wu(e,t,i,Va(),s);return aE(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(Mt(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await zE(e),i=new kE(e);return t.register("authEvent",s=>(b(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(aa,{type:aa},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[aa];o!==void 0&&t(!!o),Ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=VE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Rf()||xl()||uo()}}const rT=sT;var Hu="@firebase/auth",zu="1.4.0";/**
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
 */class oT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function aT(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function lT(n){Dt(new mt("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;b(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sf(n)},c=new Bv(i,s,r,l);return Hv(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Dt(new mt("auth-internal",e=>{const t=Ll(e.getProvider("auth").getImmediate());return(i=>new oT(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),$e(Hu,zu,aT(n)),$e(Hu,zu,"esm2017")}/**
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
 */const cT=5*60,uT=nf("authIdTokenMaxAge")||cT;let Gu=null;const hT=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>uT)return;const s=t==null?void 0:t.token;Gu!==s&&(Gu=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function dT(n=ws()){const e=vi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Wv(n,{popupRedirectResolver:rT,persistence:[mE,sE,Vf]}),i=nf("authTokenSyncURL");if(i){const r=hT(i);eE(t,r,()=>r(t.currentUser)),Zv(t,o=>r(o))}const s=ef("auth");return s&&zv(t,`http://${s}`),t}lT("Browser");/**
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
 */const $f="functions";/**
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
 */class fT{constructor(e,t,i){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=t.getImmediate({optional:!0}),this.auth||e.get().then(s=>this.auth=s,()=>{}),this.messaging||t.get().then(s=>this.messaging=s,()=>{}),this.appCheck||i.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),i=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:t,messagingToken:i,appCheckToken:s}}}/**
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
 */const La="us-central1";class pT{constructor(e,t,i,s,r=La,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new fT(t,i,s),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(r);this.customDomain=a.origin,this.region=La}catch{this.customDomain=null,this.region=r}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function _T(n,e,t){n.emulatorOrigin=`http://${e}:${t}`}const Ku="@firebase/functions",Qu="0.10.0";/**
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
 */const mT="auth-internal",gT="app-check-internal",yT="messaging-internal";function vT(n,e){const t=(i,{instanceIdentifier:s})=>{const r=i.getProvider("app").getImmediate(),o=i.getProvider(mT),a=i.getProvider(yT),l=i.getProvider(gT);return new pT(r,o,a,l,s,n)};Dt(new mt($f,t,"PUBLIC").setMultipleInstances(!0)),$e(Ku,Qu,e),$e(Ku,Qu,"esm2017")}/**
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
 */function ET(n=ws(),e=La){const i=vi(ee(n),$f).getImmediate({identifier:e}),s=ao("functions");return s&&TT(i,...s),i}function TT(n,e,t){_T(ee(n),e,t)}vT(fetch.bind(self));/**
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
 */const jf="firebasestorage.googleapis.com",Wf="storageBucket",IT=2*60*1e3,wT=10*60*1e3;/**
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
 */class ot extends wt{constructor(e,t,i=0){super(la(e),`Firebase Storage: ${t} (${la(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ot.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return la(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var it;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(it||(it={}));function la(n){return"storage/"+n}function CT(){const n="An unknown error occurred, please check the error payload for server response.";return new ot(it.UNKNOWN,n)}function AT(){return new ot(it.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function RT(){return new ot(it.CANCELED,"User canceled the upload/download.")}function ST(n){return new ot(it.INVALID_URL,"Invalid URL '"+n+"'.")}function PT(n){return new ot(it.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function bT(){return new ot(it.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Wf+"' property when initializing the app?")}function Fa(n){return new ot(it.INVALID_ARGUMENT,n)}function Hf(){return new ot(it.APP_DELETED,"The Firebase app was deleted.")}function kT(n){return new ot(it.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Ye{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=Ye.makeFromUrl(e,t)}catch{return new Ye(e,"")}if(i.path==="")return i;throw PT(e)}static makeFromUrl(e,t){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(q){q.path.charAt(q.path.length-1)==="/"&&(q.path_=q.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(q){q.path_=decodeURIComponent(q.path)}const u="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),p={bucket:1,path:3},y=t===jf?"(?:storage.googleapis.com|storage.cloud.google.com)":t,m="([^?#]*)",w=new RegExp(`^https?://${y}/${s}/${m}`,"i"),F=[{regex:a,indices:l,postModify:r},{regex:f,indices:p,postModify:c},{regex:w,indices:{bucket:1,path:2},postModify:c}];for(let q=0;q<F.length;q++){const Ie=F[q],_e=Ie.regex.exec(e);if(_e){const G=_e[Ie.indices.bucket];let me=_e[Ie.indices.path];me||(me=""),i=new Ye(G,me),Ie.postModify(i);break}}if(i==null)throw ST(e);return i}}class NT{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function DT(n,e,t){let i=1,s=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...m){c||(c=!0,e.apply(null,m))}function h(m){s=setTimeout(()=>{s=null,n(f,l())},m)}function d(){r&&clearTimeout(r)}function f(m,...w){if(c){d();return}if(m){d(),u.call(null,m,...w);return}if(l()||o){d(),u.call(null,m,...w);return}i<64&&(i*=2);let F;a===1?(a=2,F=0):F=(i+Math.random())*1e3,h(F)}let p=!1;function y(m){p||(p=!0,d(),!c&&(s!==null?(m||(a=2),clearTimeout(s),h(0)):m||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,y(!0)},t),y}function OT(n){n(!1)}/**
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
 */function MT(n){return n!==void 0}function Yu(n,e,t,i){if(i<e)throw Fa(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw Fa(`Invalid value for '${n}'. Expected ${t} or less.`)}function VT(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const s=e(i)+"="+e(n[i]);t=t+s+"&"}return t=t.slice(0,-1),t}/**
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
 */var br;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(br||(br={}));/**
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
 */function xT(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,r=e.indexOf(n)!==-1;return t||s||r}/**
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
 */class LT{constructor(e,t,i,s,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Zs(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===br.NO_ERROR,l=r.getStatus();if(!a||xT(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===br.ABORT;i(!1,new Zs(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new Zs(c,r))})},t=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());MT(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=CT();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Hf():RT();o(l)}else{const l=AT();o(l)}};this.canceled_?t(!1,new Zs(!1,null,!0)):this.backoffId_=DT(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&OT(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Zs{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function FT(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function UT(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function BT(n,e){e&&(n["X-Firebase-GMPID"]=e)}function qT(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function $T(n,e,t,i,s,r,o=!0){const a=VT(n.urlParams),l=n.url+a,c=Object.assign({},n.headers);return BT(c,e),FT(c,t),UT(c,r),qT(c,i),new LT(l,n.method,c,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o)}/**
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
 */function jT(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function WT(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function HT(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */class wn{constructor(e,t){this._service=e,t instanceof Ye?this._location=t:this._location=Ye.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new wn(e,t)}get root(){const e=new Ye(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return HT(this._location.path)}get storage(){return this._service}get parent(){const e=jT(this._location.path);if(e===null)return null;const t=new Ye(this._location.bucket,e);return new wn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw kT(e)}}function zT(n,e){const t=WT(n._location.path,e),i=new Ye(n._location.bucket,t);return new wn(n.storage,i)}/**
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
 */function GT(n){return/^[A-Za-z]+:\/\//.test(n)}function KT(n,e){return new wn(n,e)}function zf(n,e){if(n instanceof Bl){const t=n;if(t._bucket==null)throw bT();const i=new wn(t,t._bucket);return e!=null?zf(i,e):i}else return e!==void 0?zT(n,e):n}function QT(n,e){if(e&&GT(e)){if(n instanceof Bl)return KT(n,e);throw Fa("To use ref(service, url), the first argument must be a Storage instance.")}else return zf(n,e)}function Xu(n,e){const t=e==null?void 0:e[Wf];return t==null?null:Ye.makeFromBucketSpec(t,n)}function YT(n,e,t,i={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=i;s&&(n._overrideAuthToken=typeof s=="string"?s:Pl(s,n.app.options.projectId))}class Bl{constructor(e,t,i,s,r){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=jf,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=IT,this._maxUploadRetryTime=wT,this._requests=new Set,s!=null?this._bucket=Ye.makeFromBucketSpec(s,this._host):this._bucket=Xu(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ye.makeFromBucketSpec(this._url,e):this._bucket=Xu(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Yu("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Yu("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new wn(this,e)}_makeRequest(e,t,i,s,r=!0){if(this._deleted)return new NT(Hf());{const o=$T(e,this._appId,i,s,t,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,s).getPromise()}}const Ju="@firebase/storage",Zu="0.11.2";/**
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
 */const Gf="storage";function XT(n,e){return n=ee(n),QT(n,e)}function JT(n=ws(),e){n=ee(n);const i=vi(n,Gf).getImmediate({identifier:e}),s=ao("storage");return s&&ZT(i,...s),i}function ZT(n,e,t,i={}){YT(n,e,t,i)}function eI(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Bl(t,i,s,e,ln)}function tI(){Dt(new mt(Gf,eI,"PUBLIC").setMultipleInstances(!0)),$e(Ju,Zu,""),$e(Ju,Zu,"esm2017")}tI();var nI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},E,ql=ql||{},S=nI||self;function po(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Ss(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function iI(n){return Object.prototype.hasOwnProperty.call(n,ca)&&n[ca]||(n[ca]=++sI)}var ca="closure_uid_"+(1e9*Math.random()>>>0),sI=0;function rI(n,e,t){return n.call.apply(n.bind,arguments)}function oI(n,e,t){if(!n)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),n.apply(e,s)}}return function(){return n.apply(e,arguments)}}function ke(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ke=rI:ke=oI,ke.apply(null,arguments)}function er(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var i=t.slice();return i.push.apply(i,arguments),n.apply(this,i)}}function pe(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function cn(){this.s=this.s,this.o=this.o}var aI=0;cn.prototype.s=!1;cn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),aI!=0)&&iI(this)};cn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Kf=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function $l(n){const e=n.length;if(0<e){const t=Array(e);for(let i=0;i<e;i++)t[i]=n[i];return t}return[]}function eh(n,e){for(let t=1;t<arguments.length;t++){const i=arguments[t];if(po(i)){const s=n.length||0,r=i.length||0;n.length=s+r;for(let o=0;o<r;o++)n[s+o]=i[o]}else n.push(i)}}function Ne(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Ne.prototype.h=function(){this.defaultPrevented=!0};var lI=function(){if(!S.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{S.addEventListener("test",()=>{},e),S.removeEventListener("test",()=>{},e)}catch{}return n}();function ts(n){return/^[\s\xa0]*$/.test(n)}function _o(){var n=S.navigator;return n&&(n=n.userAgent)?n:""}function at(n){return _o().indexOf(n)!=-1}function jl(n){return jl[" "](n),n}jl[" "]=function(){};function cI(n,e){var t=tw;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var uI=at("Opera"),oi=at("Trident")||at("MSIE"),Qf=at("Edge"),Ua=Qf||oi,Yf=at("Gecko")&&!(_o().toLowerCase().indexOf("webkit")!=-1&&!at("Edge"))&&!(at("Trident")||at("MSIE"))&&!at("Edge"),hI=_o().toLowerCase().indexOf("webkit")!=-1&&!at("Edge");function Xf(){var n=S.document;return n?n.documentMode:void 0}var Ba;e:{var ua="",ha=function(){var n=_o();if(Yf)return/rv:([^\);]+)(\)|;)/.exec(n);if(Qf)return/Edge\/([\d\.]+)/.exec(n);if(oi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(hI)return/WebKit\/(\S+)/.exec(n);if(uI)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(ha&&(ua=ha?ha[1]:""),oi){var da=Xf();if(da!=null&&da>parseFloat(ua)){Ba=String(da);break e}}Ba=ua}var qa;if(S.document&&oi){var th=Xf();qa=th||parseInt(Ba,10)||void 0}else qa=void 0;var dI=qa;function ns(n,e){if(Ne.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,i=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Yf){e:{try{jl(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:fI[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&ns.$.h.call(this)}}pe(ns,Ne);var fI={2:"touch",3:"pen",4:"mouse"};ns.prototype.h=function(){ns.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Ps="closure_listenable_"+(1e6*Math.random()|0),pI=0;function _I(n,e,t,i,s){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!i,this.la=s,this.key=++pI,this.fa=this.ia=!1}function mo(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function Wl(n,e,t){for(const i in n)e.call(t,n[i],i,n)}function mI(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function Jf(n){const e={};for(const t in n)e[t]=n[t];return e}const nh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Zf(n,e){let t,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(t in i)n[t]=i[t];for(let r=0;r<nh.length;r++)t=nh[r],Object.prototype.hasOwnProperty.call(i,t)&&(n[t]=i[t])}}function go(n){this.src=n,this.g={},this.h=0}go.prototype.add=function(n,e,t,i,s){var r=n.toString();n=this.g[r],n||(n=this.g[r]=[],this.h++);var o=ja(n,e,i,s);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new _I(e,this.src,r,!!i,s),e.ia=t,n.push(e)),e};function $a(n,e){var t=e.type;if(t in n.g){var i=n.g[t],s=Kf(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(mo(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function ja(n,e,t,i){for(var s=0;s<n.length;++s){var r=n[s];if(!r.fa&&r.listener==e&&r.capture==!!t&&r.la==i)return s}return-1}var Hl="closure_lm_"+(1e6*Math.random()|0),fa={};function ep(n,e,t,i,s){if(i&&i.once)return np(n,e,t,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)ep(n,e[r],t,i,s);return null}return t=Kl(t),n&&n[Ps]?n.O(e,t,Ss(i)?!!i.capture:!!i,s):tp(n,e,t,!1,i,s)}function tp(n,e,t,i,s,r){if(!e)throw Error("Invalid event type");var o=Ss(s)?!!s.capture:!!s,a=Gl(n);if(a||(n[Hl]=a=new go(n)),t=a.add(e,t,i,o,r),t.proxy)return t;if(i=gI(),t.proxy=i,i.src=n,i.listener=t,n.addEventListener)lI||(s=o),s===void 0&&(s=!1),n.addEventListener(e.toString(),i,s);else if(n.attachEvent)n.attachEvent(sp(e.toString()),i);else if(n.addListener&&n.removeListener)n.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return t}function gI(){function n(t){return e.call(n.src,n.listener,t)}const e=yI;return n}function np(n,e,t,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)np(n,e[r],t,i,s);return null}return t=Kl(t),n&&n[Ps]?n.P(e,t,Ss(i)?!!i.capture:!!i,s):tp(n,e,t,!0,i,s)}function ip(n,e,t,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)ip(n,e[r],t,i,s);else i=Ss(i)?!!i.capture:!!i,t=Kl(t),n&&n[Ps]?(n=n.i,e=String(e).toString(),e in n.g&&(r=n.g[e],t=ja(r,t,i,s),-1<t&&(mo(r[t]),Array.prototype.splice.call(r,t,1),r.length==0&&(delete n.g[e],n.h--)))):n&&(n=Gl(n))&&(e=n.g[e.toString()],n=-1,e&&(n=ja(e,t,i,s)),(t=-1<n?e[n]:null)&&zl(t))}function zl(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[Ps])$a(e.i,n);else{var t=n.type,i=n.proxy;e.removeEventListener?e.removeEventListener(t,i,n.capture):e.detachEvent?e.detachEvent(sp(t),i):e.addListener&&e.removeListener&&e.removeListener(i),(t=Gl(e))?($a(t,n),t.h==0&&(t.src=null,e[Hl]=null)):mo(n)}}}function sp(n){return n in fa?fa[n]:fa[n]="on"+n}function yI(n,e){if(n.fa)n=!0;else{e=new ns(e,this);var t=n.listener,i=n.la||n.src;n.ia&&zl(n),n=t.call(i,e)}return n}function Gl(n){return n=n[Hl],n instanceof go?n:null}var pa="__closure_events_fn_"+(1e9*Math.random()>>>0);function Kl(n){return typeof n=="function"?n:(n[pa]||(n[pa]=function(e){return n.handleEvent(e)}),n[pa])}function fe(){cn.call(this),this.i=new go(this),this.S=this,this.J=null}pe(fe,cn);fe.prototype[Ps]=!0;fe.prototype.removeEventListener=function(n,e,t,i){ip(this,n,e,t,i)};function ve(n,e){var t,i=n.J;if(i)for(t=[];i;i=i.J)t.push(i);if(n=n.S,i=e.type||e,typeof e=="string")e=new Ne(e,n);else if(e instanceof Ne)e.target=e.target||n;else{var s=e;e=new Ne(i,n),Zf(e,s)}if(s=!0,t)for(var r=t.length-1;0<=r;r--){var o=e.g=t[r];s=tr(o,i,!0,e)&&s}if(o=e.g=n,s=tr(o,i,!0,e)&&s,s=tr(o,i,!1,e)&&s,t)for(r=0;r<t.length;r++)o=e.g=t[r],s=tr(o,i,!1,e)&&s}fe.prototype.N=function(){if(fe.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],i=0;i<t.length;i++)mo(t[i]);delete n.g[e],n.h--}}this.J=null};fe.prototype.O=function(n,e,t,i){return this.i.add(String(n),e,!1,t,i)};fe.prototype.P=function(n,e,t,i){return this.i.add(String(n),e,!0,t,i)};function tr(n,e,t,i){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==t){var a=o.listener,l=o.la||o.src;o.ia&&$a(n.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var Ql=S.JSON.stringify;class vI{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function EI(){var n=Yl;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class TI{constructor(){this.h=this.g=null}add(e,t){const i=rp.get();i.set(e,t),this.h?this.h.next=i:this.g=i,this.h=i}}var rp=new vI(()=>new II,n=>n.reset());class II{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function wI(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function CI(n){S.setTimeout(()=>{throw n},0)}let is,ss=!1,Yl=new TI,op=()=>{const n=S.Promise.resolve(void 0);is=()=>{n.then(AI)}};var AI=()=>{for(var n;n=EI();){try{n.h.call(n.g)}catch(t){CI(t)}var e=rp;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}ss=!1};function yo(n,e){fe.call(this),this.h=n||1,this.g=e||S,this.j=ke(this.qb,this),this.l=Date.now()}pe(yo,fe);E=yo.prototype;E.ga=!1;E.T=null;E.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ve(this,"tick"),this.ga&&(Xl(this),this.start()))}};E.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Xl(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}E.N=function(){yo.$.N.call(this),Xl(this),delete this.g};function Jl(n,e,t){if(typeof n=="function")t&&(n=ke(n,t));else if(n&&typeof n.handleEvent=="function")n=ke(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:S.setTimeout(n,e||0)}function ap(n){n.g=Jl(()=>{n.g=null,n.i&&(n.i=!1,ap(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class RI extends cn{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ap(this)}N(){super.N(),this.g&&(S.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function rs(n){cn.call(this),this.h=n,this.g={}}pe(rs,cn);var ih=[];function lp(n,e,t,i){Array.isArray(t)||(t&&(ih[0]=t.toString()),t=ih);for(var s=0;s<t.length;s++){var r=ep(e,t[s],i||n.handleEvent,!1,n.h||n);if(!r)break;n.g[r.key]=r}}function cp(n){Wl(n.g,function(e,t){this.g.hasOwnProperty(t)&&zl(e)},n),n.g={}}rs.prototype.N=function(){rs.$.N.call(this),cp(this)};rs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function vo(){this.g=!0}vo.prototype.Ea=function(){this.g=!1};function SI(n,e,t,i,s,r){n.info(function(){if(n.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+t+`
`+o})}function PI(n,e,t,i,s,r,o){n.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+t+`
`+r+" "+o})}function Hn(n,e,t,i){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+kI(n,t)+(i?" "+i:"")})}function bI(n,e){n.info(function(){return"TIMEOUT: "+e})}vo.prototype.info=function(){};function kI(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var i=t[n];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Ql(t)}catch{return e}}var Dn={},sh=null;function Eo(){return sh=sh||new fe}Dn.Ta="serverreachability";function up(n){Ne.call(this,Dn.Ta,n)}pe(up,Ne);function os(n){const e=Eo();ve(e,new up(e))}Dn.STAT_EVENT="statevent";function hp(n,e){Ne.call(this,Dn.STAT_EVENT,n),this.stat=e}pe(hp,Ne);function Fe(n){const e=Eo();ve(e,new hp(e,n))}Dn.Ua="timingevent";function dp(n,e){Ne.call(this,Dn.Ua,n),this.size=e}pe(dp,Ne);function bs(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return S.setTimeout(function(){n()},e)}var To={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},fp={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Zl(){}Zl.prototype.h=null;function rh(n){return n.h||(n.h=n.i())}function pp(){}var ks={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ec(){Ne.call(this,"d")}pe(ec,Ne);function tc(){Ne.call(this,"c")}pe(tc,Ne);var Wa;function Io(){}pe(Io,Zl);Io.prototype.g=function(){return new XMLHttpRequest};Io.prototype.i=function(){return{}};Wa=new Io;function Ns(n,e,t,i){this.l=n,this.j=e,this.m=t,this.W=i||1,this.U=new rs(this),this.P=NI,n=Ua?125:void 0,this.V=new yo(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new _p}function _p(){this.i=null,this.g="",this.h=!1}var NI=45e3,Ha={},kr={};E=Ns.prototype;E.setTimeout=function(n){this.P=n};function za(n,e,t){n.L=1,n.v=Co(Vt(e)),n.s=t,n.S=!0,mp(n,null)}function mp(n,e){n.G=Date.now(),Ds(n),n.A=Vt(n.v);var t=n.A,i=n.W;Array.isArray(i)||(i=[String(i)]),Cp(t.i,"t",i),n.C=0,t=n.l.J,n.h=new _p,n.g=Hp(n.l,t?e:null,!n.s),0<n.O&&(n.M=new RI(ke(n.Pa,n,n.g),n.O)),lp(n.U,n.g,"readystatechange",n.nb),e=n.I?Jf(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),os(),SI(n.j,n.u,n.A,n.m,n.W,n.s)}E.nb=function(n){n=n.target;const e=this.M;e&&lt(n)==3?e.l():this.Pa(n)};E.Pa=function(n){try{if(n==this.g)e:{const u=lt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Ua||this.g&&(this.h.h||this.g.ja()||ch(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?os(3):os(2)),wo(this);var t=this.g.da();this.ca=t;t:if(gp(this)){var i=ch(this.g);n="";var s=i.length,r=lt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pn(this),$i(this);var o="";break t}this.h.i=new S.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,n+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,PI(this.j,this.u,this.A,this.m,this.W,u,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ts(a)){var c=a;break t}}c=null}if(t=c)Hn(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ga(this,t);else{this.i=!1,this.o=3,Fe(12),pn(this),$i(this);break e}}this.S?(yp(this,u,o),Ua&&this.i&&u==3&&(lp(this.U,this.V,"tick",this.mb),this.V.start())):(Hn(this.j,this.m,o,null),Ga(this,o)),u==4&&pn(this),this.i&&!this.J&&(u==4?qp(this.l,this):(this.i=!1,Ds(this)))}else JI(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Fe(12)):(this.o=0,Fe(13)),pn(this),$i(this)}}}catch{}finally{}};function gp(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function yp(n,e,t){let i=!0,s;for(;!n.J&&n.C<t.length;)if(s=DI(n,t),s==kr){e==4&&(n.o=4,Fe(14),i=!1),Hn(n.j,n.m,null,"[Incomplete Response]");break}else if(s==Ha){n.o=4,Fe(15),Hn(n.j,n.m,t,"[Invalid Chunk]"),i=!1;break}else Hn(n.j,n.m,s,null),Ga(n,s);gp(n)&&s!=kr&&s!=Ha&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Fe(16),i=!1),n.i=n.i&&i,i?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),ac(e),e.M=!0,Fe(11))):(Hn(n.j,n.m,t,"[Invalid Chunked Response]"),pn(n),$i(n))}E.mb=function(){if(this.g){var n=lt(this.g),e=this.g.ja();this.C<e.length&&(wo(this),yp(this,n,e),this.i&&n!=4&&Ds(this))}};function DI(n,e){var t=n.C,i=e.indexOf(`
`,t);return i==-1?kr:(t=Number(e.substring(t,i)),isNaN(t)?Ha:(i+=1,i+t>e.length?kr:(e=e.slice(i,i+t),n.C=i+t,e)))}E.cancel=function(){this.J=!0,pn(this)};function Ds(n){n.Y=Date.now()+n.P,vp(n,n.P)}function vp(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=bs(ke(n.lb,n),e)}function wo(n){n.B&&(S.clearTimeout(n.B),n.B=null)}E.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(bI(this.j,this.A),this.L!=2&&(os(),Fe(17)),pn(this),this.o=2,$i(this)):vp(this,this.Y-n)};function $i(n){n.l.H==0||n.J||qp(n.l,n)}function pn(n){wo(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,Xl(n.V),cp(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function Ga(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||Ka(t.i,n))){if(!n.K&&Ka(t.i,n)&&t.H==3){try{var i=t.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)Or(t),So(t);else break e;oc(t),Fe(18)}}else t.Fa=s[1],0<t.Fa-t.V&&37500>s[2]&&t.G&&t.A==0&&!t.v&&(t.v=bs(ke(t.ib,t),6e3));if(1>=Sp(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else _n(t,11)}else if((n.K||t.g==n)&&Or(t),!ts(e))for(s=t.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(t.V=c[0],c=c[1],t.H==2)if(c[0]=="c"){t.K=c[1],t.pa=c[2];const u=c[3];u!=null&&(t.ra=u,t.l.info("VER="+t.ra));const h=c[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,t.L=i,t.l.info("backChannelRequestTimeoutMs_="+i)),i=t;const f=n.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var r=i.i;r.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(nc(r,r.h),r.h=null))}if(i.F){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(i.Da=y,Y(i.I,i.F,y))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),i=t;var o=n;if(i.wa=Wp(i,i.J?i.pa:null,i.Y),o.K){Pp(i.i,o);var a=o,l=i.L;l&&a.setTimeout(l),a.B&&(wo(a),Ds(a)),i.g=o}else Up(i);0<t.j.length&&Po(t)}else c[0]!="stop"&&c[0]!="close"||_n(t,7);else t.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?_n(t,7):rc(t):c[0]!="noop"&&t.h&&t.h.Aa(c),t.A=0)}}os(4)}catch{}}function OI(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(po(n)){for(var e=[],t=n.length,i=0;i<t;i++)e.push(n[i]);return e}e=[],t=0;for(i in n)e[t++]=n[i];return e}function MI(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(po(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const i in n)e[t++]=i;return e}}}function Ep(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(po(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=MI(n),i=OI(n),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],t&&t[r],n)}var Tp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function VI(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var i=n[t].indexOf("="),s=null;if(0<=i){var r=n[t].substring(0,i);s=n[t].substring(i+1)}else r=n[t];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function vn(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof vn){this.h=n.h,Nr(this,n.j),this.s=n.s,this.g=n.g,Dr(this,n.m),this.l=n.l;var e=n.i,t=new as;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),oh(this,t),this.o=n.o}else n&&(e=String(n).match(Tp))?(this.h=!1,Nr(this,e[1]||"",!0),this.s=Vi(e[2]||""),this.g=Vi(e[3]||"",!0),Dr(this,e[4]),this.l=Vi(e[5]||"",!0),oh(this,e[6]||"",!0),this.o=Vi(e[7]||"")):(this.h=!1,this.i=new as(null,this.h))}vn.prototype.toString=function(){var n=[],e=this.j;e&&n.push(xi(e,ah,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(xi(e,ah,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(xi(t,t.charAt(0)=="/"?FI:LI,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",xi(t,BI)),n.join("")};function Vt(n){return new vn(n)}function Nr(n,e,t){n.j=t?Vi(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Dr(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function oh(n,e,t){e instanceof as?(n.i=e,qI(n.i,n.h)):(t||(e=xi(e,UI)),n.i=new as(e,n.h))}function Y(n,e,t){n.i.set(e,t)}function Co(n){return Y(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Vi(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function xi(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,xI),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function xI(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var ah=/[#\/\?@]/g,LI=/[#\?:]/g,FI=/[#\?]/g,UI=/[#\?@]/g,BI=/#/g;function as(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function un(n){n.g||(n.g=new Map,n.h=0,n.i&&VI(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}E=as.prototype;E.add=function(n,e){un(this),this.i=null,n=Ti(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Ip(n,e){un(n),e=Ti(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function wp(n,e){return un(n),e=Ti(n,e),n.g.has(e)}E.forEach=function(n,e){un(this),this.g.forEach(function(t,i){t.forEach(function(s){n.call(e,s,i,this)},this)},this)};E.ta=function(){un(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let i=0;i<e.length;i++){const s=n[i];for(let r=0;r<s.length;r++)t.push(e[i])}return t};E.Z=function(n){un(this);let e=[];if(typeof n=="string")wp(this,n)&&(e=e.concat(this.g.get(Ti(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};E.set=function(n,e){return un(this),this.i=null,n=Ti(this,n),wp(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};E.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function Cp(n,e,t){Ip(n,e),0<t.length&&(n.i=null,n.g.set(Ti(n,e),$l(t)),n.h+=t.length)}E.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var i=e[t];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),n.push(s)}}return this.i=n.join("&")};function Ti(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function qI(n,e){e&&!n.j&&(un(n),n.i=null,n.g.forEach(function(t,i){var s=i.toLowerCase();i!=s&&(Ip(this,i),Cp(this,s,t))},n)),n.j=e}var $I=class{constructor(n,e){this.g=n,this.map=e}};function Ap(n){this.l=n||jI,S.PerformanceNavigationTiming?(n=S.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(S.g&&S.g.Ka&&S.g.Ka()&&S.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var jI=10;function Rp(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Sp(n){return n.h?1:n.g?n.g.size:0}function Ka(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function nc(n,e){n.g?n.g.add(e):n.h=e}function Pp(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Ap.prototype.cancel=function(){if(this.i=bp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function bp(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return $l(n.i)}var WI=class{stringify(n){return S.JSON.stringify(n,void 0)}parse(n){return S.JSON.parse(n,void 0)}};function HI(){this.g=new WI}function zI(n,e,t){const i=t||"";try{Ep(n,function(s,r){let o=s;Ss(s)&&(o=Ql(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function GI(n,e){const t=new vo;if(S.Image){const i=new Image;i.onload=er(nr,t,i,"TestLoadImage: loaded",!0,e),i.onerror=er(nr,t,i,"TestLoadImage: error",!1,e),i.onabort=er(nr,t,i,"TestLoadImage: abort",!1,e),i.ontimeout=er(nr,t,i,"TestLoadImage: timeout",!1,e),S.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=n}else e(!1)}function nr(n,e,t,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function Os(n){this.l=n.ec||null,this.j=n.ob||!1}pe(Os,Zl);Os.prototype.g=function(){return new Ao(this.l,this.j)};Os.prototype.i=function(n){return function(){return n}}({});function Ao(n,e){fe.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=ic,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}pe(Ao,fe);var ic=0;E=Ao.prototype;E.open=function(n,e){if(this.readyState!=ic)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,ls(this)};E.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||S).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};E.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ms(this)),this.readyState=ic};E.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,ls(this)),this.g&&(this.readyState=3,ls(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof S.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;kp(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function kp(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}E.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Ms(this):ls(this),this.readyState==3&&kp(this)}};E.Za=function(n){this.g&&(this.response=this.responseText=n,Ms(this))};E.Ya=function(n){this.g&&(this.response=n,Ms(this))};E.ka=function(){this.g&&Ms(this)};function Ms(n){n.readyState=4,n.l=null,n.j=null,n.A=null,ls(n)}E.setRequestHeader=function(n,e){this.v.append(n,e)};E.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};E.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function ls(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Ao.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var KI=S.JSON.parse;function ne(n){fe.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Np,this.L=this.M=!1}pe(ne,fe);var Np="",QI=/^https?$/i,YI=["POST","PUT"];E=ne.prototype;E.Oa=function(n){this.M=n};E.ha=function(n,e,t,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Wa.g(),this.C=this.u?rh(this.u):rh(Wa),this.g.onreadystatechange=ke(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(r){lh(this,r);return}if(n=t||"",t=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)t.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())t.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(t.keys()).find(r=>r.toLowerCase()=="content-type"),s=S.FormData&&n instanceof S.FormData,!(0<=Kf(YI,e))||i||s||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of t)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Mp(this),0<this.B&&((this.L=XI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ke(this.ua,this)):this.A=Jl(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(r){lh(this,r)}};function XI(n){return oi&&typeof n.timeout=="number"&&n.ontimeout!==void 0}E.ua=function(){typeof ql<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ve(this,"timeout"),this.abort(8))};function lh(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Dp(n),Ro(n)}function Dp(n){n.F||(n.F=!0,ve(n,"complete"),ve(n,"error"))}E.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,ve(this,"complete"),ve(this,"abort"),Ro(this))};E.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ro(this,!0)),ne.$.N.call(this)};E.La=function(){this.s||(this.G||this.v||this.l?Op(this):this.kb())};E.kb=function(){Op(this)};function Op(n){if(n.h&&typeof ql<"u"&&(!n.C[1]||lt(n)!=4||n.da()!=2)){if(n.v&&lt(n)==4)Jl(n.La,0,n);else if(ve(n,"readystatechange"),lt(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var i;if(i=o===0){var s=String(n.I).match(Tp)[1]||null;!s&&S.self&&S.self.location&&(s=S.self.location.protocol.slice(0,-1)),i=!QI.test(s?s.toLowerCase():"")}t=i}if(t)ve(n,"complete"),ve(n,"success");else{n.m=6;try{var r=2<lt(n)?n.g.statusText:""}catch{r=""}n.j=r+" ["+n.da()+"]",Dp(n)}}finally{Ro(n)}}}}function Ro(n,e){if(n.g){Mp(n);const t=n.g,i=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||ve(n,"ready");try{t.onreadystatechange=i}catch{}}}function Mp(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(S.clearTimeout(n.A),n.A=null)}E.isActive=function(){return!!this.g};function lt(n){return n.g?n.g.readyState:0}E.da=function(){try{return 2<lt(this)?this.g.status:-1}catch{return-1}};E.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};E.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),KI(e)}};function ch(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case Np:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function JI(n){const e={};n=(n.g&&2<=lt(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<n.length;i++){if(ts(n[i]))continue;var t=wI(n[i]);const s=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const r=e[s]||[];e[s]=r,r.push(t)}mI(e,function(i){return i.join(", ")})}E.Ia=function(){return this.m};E.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Vp(n){let e="";return Wl(n,function(t,i){e+=i,e+=":",e+=t,e+=`\r
`}),e}function sc(n,e,t){e:{for(i in t){var i=!1;break e}i=!0}i||(t=Vp(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):Y(n,e,t))}function Pi(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function xp(n){this.Ga=0,this.j=[],this.l=new vo,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Pi("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Pi("baseRetryDelayMs",5e3,n),this.hb=Pi("retryDelaySeedMs",1e4,n),this.eb=Pi("forwardChannelMaxRetries",2,n),this.xa=Pi("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new Ap(n&&n.concurrentRequestLimit),this.Ja=new HI,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}E=xp.prototype;E.ra=8;E.H=1;function rc(n){if(Lp(n),n.H==3){var e=n.W++,t=Vt(n.I);if(Y(t,"SID",n.K),Y(t,"RID",e),Y(t,"TYPE","terminate"),Vs(n,t),e=new Ns(n,n.l,e),e.L=2,e.v=Co(Vt(t)),t=!1,S.navigator&&S.navigator.sendBeacon)try{t=S.navigator.sendBeacon(e.v.toString(),"")}catch{}!t&&S.Image&&(new Image().src=e.v,t=!0),t||(e.g=Hp(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ds(e)}jp(n)}function So(n){n.g&&(ac(n),n.g.cancel(),n.g=null)}function Lp(n){So(n),n.u&&(S.clearTimeout(n.u),n.u=null),Or(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&S.clearTimeout(n.m),n.m=null)}function Po(n){if(!Rp(n.i)&&!n.m){n.m=!0;var e=n.Na;is||op(),ss||(is(),ss=!0),Yl.add(e,n),n.C=0}}function ZI(n,e){return Sp(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=bs(ke(n.Na,n,e),$p(n,n.C)),n.C++,!0)}E.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const s=new Ns(this,this.l,n);let r=this.s;if(this.U&&(r?(r=Jf(r),Zf(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var i=this.j[t];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Fp(this,s,e),t=Vt(this.I),Y(t,"RID",n),Y(t,"CVER",22),this.F&&Y(t,"X-HTTP-Session-Id",this.F),Vs(this,t),r&&(this.O?e="headers="+encodeURIComponent(String(Vp(r)))+"&"+e:this.o&&sc(t,this.o,r)),nc(this.i,s),this.bb&&Y(t,"TYPE","init"),this.P?(Y(t,"$req",e),Y(t,"SID","null"),s.aa=!0,za(s,t,null)):za(s,t,e),this.H=2}}else this.H==3&&(n?uh(this,n):this.j.length==0||Rp(this.i)||uh(this))};function uh(n,e){var t;e?t=e.m:t=n.W++;const i=Vt(n.I);Y(i,"SID",n.K),Y(i,"RID",t),Y(i,"AID",n.V),Vs(n,i),n.o&&n.s&&sc(i,n.o,n.s),t=new Ns(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=Fp(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),nc(n.i,t),za(t,i,e)}function Vs(n,e){n.na&&Wl(n.na,function(t,i){Y(e,i,t)}),n.h&&Ep({},function(t,i){Y(e,i,t)})}function Fp(n,e,t){t=Math.min(n.j.length,t);var i=n.h?ke(n.h.Va,n.h,n):null;e:{var s=n.j;let r=-1;for(;;){const o=["count="+t];r==-1?0<t?(r=s[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<t;l++){let c=s[l].g;const u=s[l].map;if(c-=r,0>c)r=Math.max(0,s[l].g-100),a=!1;else try{zI(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,i}function Up(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;is||op(),ss||(is(),ss=!0),Yl.add(e,n),n.A=0}}function oc(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=bs(ke(n.Ma,n),$p(n,n.A)),n.A++,!0)}E.Ma=function(){if(this.u=null,Bp(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=bs(ke(this.jb,this),n)}};E.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Fe(10),So(this),Bp(this))};function ac(n){n.B!=null&&(S.clearTimeout(n.B),n.B=null)}function Bp(n){n.g=new Ns(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=Vt(n.wa);Y(e,"RID","rpc"),Y(e,"SID",n.K),Y(e,"AID",n.V),Y(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&Y(e,"TO",n.qa),Y(e,"TYPE","xmlhttp"),Vs(n,e),n.o&&n.s&&sc(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.v=Co(Vt(e)),t.s=null,t.S=!0,mp(t,n)}E.ib=function(){this.v!=null&&(this.v=null,So(this),oc(this),Fe(19))};function Or(n){n.v!=null&&(S.clearTimeout(n.v),n.v=null)}function qp(n,e){var t=null;if(n.g==e){Or(n),ac(n),n.g=null;var i=2}else if(Ka(n.i,e))t=e.F,Pp(n.i,e),i=1;else return;if(n.H!=0){if(e.i)if(i==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var s=n.C;i=Eo(),ve(i,new dp(i,t)),Po(n)}else Up(n);else if(s=e.o,s==3||s==0&&0<e.ca||!(i==1&&ZI(n,e)||i==2&&oc(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),s){case 1:_n(n,5);break;case 4:_n(n,10);break;case 3:_n(n,6);break;default:_n(n,2)}}}function $p(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function _n(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var i=ke(n.pb,n);t||(t=new vn("//www.google.com/images/cleardot.gif"),S.location&&S.location.protocol=="http"||Nr(t,"https"),Co(t)),GI(t.toString(),i)}else Fe(2);n.H=0,n.h&&n.h.za(e),jp(n),Lp(n)}E.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Fe(2)):(this.l.info("Failed to ping google.com"),Fe(1))};function jp(n){if(n.H=0,n.ma=[],n.h){const e=bp(n.i);(e.length!=0||n.j.length!=0)&&(eh(n.ma,e),eh(n.ma,n.j),n.i.i.length=0,$l(n.j),n.j.length=0),n.h.ya()}}function Wp(n,e,t){var i=t instanceof vn?Vt(t):new vn(t);if(i.g!="")e&&(i.g=e+"."+i.g),Dr(i,i.m);else{var s=S.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new vn(null);i&&Nr(r,i),e&&(r.g=e),s&&Dr(r,s),t&&(r.l=t),i=r}return t=n.F,e=n.Da,t&&e&&Y(i,t,e),Y(i,"VER",n.ra),Vs(n,i),i}function Hp(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new ne(new Os({ob:!0})):new ne(n.va),e.Oa(n.J),e}E.isActive=function(){return!!this.h&&this.h.isActive(this)};function zp(){}E=zp.prototype;E.Ba=function(){};E.Aa=function(){};E.za=function(){};E.ya=function(){};E.isActive=function(){return!0};E.Va=function(){};function Mr(){if(oi&&!(10<=Number(dI)))throw Error("Environmental error: no available transport.")}Mr.prototype.g=function(n,e){return new Ke(n,e)};function Ke(n,e){fe.call(this),this.g=new xp(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!ts(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ts(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Ii(this)}pe(Ke,fe);Ke.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;Fe(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=Wp(n,null,n.Y),Po(n)};Ke.prototype.close=function(){rc(this.g)};Ke.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=Ql(n),n=t);e.j.push(new $I(e.fb++,n)),e.H==3&&Po(e)};Ke.prototype.N=function(){this.g.h=null,delete this.j,rc(this.g),delete this.g,Ke.$.N.call(this)};function Gp(n){ec.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}pe(Gp,ec);function Kp(){tc.call(this),this.status=1}pe(Kp,tc);function Ii(n){this.g=n}pe(Ii,zp);Ii.prototype.Ba=function(){ve(this.g,"a")};Ii.prototype.Aa=function(n){ve(this.g,new Gp(n))};Ii.prototype.za=function(n){ve(this.g,new Kp)};Ii.prototype.ya=function(){ve(this.g,"b")};function ew(){this.blockSize=-1}function st(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}pe(st,ew);st.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function _a(n,e,t){t||(t=0);var i=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)i[s]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(s=0;16>s;++s)i[s]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],s=n.g[2];var r=n.g[3],o=e+(r^t&(s^r))+i[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=r+(s^e&(t^s))+i[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(t^r&(e^t))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=t+(e^s&(r^e))+i[3]+3250441966&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(r^t&(s^r))+i[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=r+(s^e&(t^s))+i[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(t^r&(e^t))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=t+(e^s&(r^e))+i[7]+4249261313&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(r^t&(s^r))+i[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=r+(s^e&(t^s))+i[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(t^r&(e^t))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=t+(e^s&(r^e))+i[11]+2304563134&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(r^t&(s^r))+i[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=r+(s^e&(t^s))+i[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(t^r&(e^t))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=t+(e^s&(r^e))+i[15]+1236535329&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(s^r&(t^s))+i[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^s&(e^t))+i[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(r^e))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(s^r))+i[0]+3921069994&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(t^s))+i[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^s&(e^t))+i[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(r^e))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(s^r))+i[4]+3889429448&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(t^s))+i[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^s&(e^t))+i[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(r^e))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(s^r))+i[8]+1163531501&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(t^s))+i[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^s&(e^t))+i[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(r^e))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(s^r))+i[12]+2368359562&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(t^s^r)+i[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^s)+i[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^t)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=t+(s^r^e)+i[14]+4259657740&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^r)+i[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^s)+i[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^t)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=t+(s^r^e)+i[10]+3200236656&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^r)+i[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^s)+i[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^t)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=t+(s^r^e)+i[6]+76029189&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^r)+i[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^s)+i[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^t)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=t+(s^r^e)+i[2]+3299628645&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(s^(t|~r))+i[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~s))+i[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~t))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=t+(r^(s|~e))+i[5]+4237533241&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~r))+i[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~s))+i[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~t))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=t+(r^(s|~e))+i[1]+2240044497&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~r))+i[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~s))+i[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~t))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=t+(r^(s|~e))+i[13]+1309151649&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~r))+i[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~s))+i[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~t))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=t+(r^(s|~e))+i[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+s&4294967295,n.g[3]=n.g[3]+r&4294967295}st.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,i=this.m,s=this.h,r=0;r<e;){if(s==0)for(;r<=t;)_a(this,n,r),r+=this.blockSize;if(typeof n=="string"){for(;r<e;)if(i[s++]=n.charCodeAt(r++),s==this.blockSize){_a(this,i),s=0;break}}else for(;r<e;)if(i[s++]=n[r++],s==this.blockSize){_a(this,i),s=0;break}}this.h=s,this.i+=e};st.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var i=0;32>i;i+=8)n[t++]=this.g[e]>>>i&255;return n};function W(n,e){this.h=e;for(var t=[],i=!0,s=n.length-1;0<=s;s--){var r=n[s]|0;i&&r==e||(t[s]=r,i=!1)}this.g=t}var tw={};function lc(n){return-128<=n&&128>n?cI(n,function(e){return new W([e|0],0>e?-1:0)}):new W([n|0],0>n?-1:0)}function ct(n){if(isNaN(n)||!isFinite(n))return Yn;if(0>n)return ge(ct(-n));for(var e=[],t=1,i=0;n>=t;i++)e[i]=n/t|0,t*=Qa;return new W(e,0)}function Qp(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return ge(Qp(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=ct(Math.pow(e,8)),i=Yn,s=0;s<n.length;s+=8){var r=Math.min(8,n.length-s),o=parseInt(n.substring(s,s+r),e);8>r?(r=ct(Math.pow(e,r)),i=i.R(r).add(ct(o))):(i=i.R(t),i=i.add(ct(o)))}return i}var Qa=4294967296,Yn=lc(0),Ya=lc(1),hh=lc(16777216);E=W.prototype;E.ea=function(){if(Qe(this))return-ge(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var i=this.D(t);n+=(0<=i?i:Qa+i)*e,e*=Qa}return n};E.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(Pt(this))return"0";if(Qe(this))return"-"+ge(this).toString(n);for(var e=ct(Math.pow(n,6)),t=this,i="";;){var s=xr(t,e).g;t=Vr(t,s.R(e));var r=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=s,Pt(t))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};E.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function Pt(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function Qe(n){return n.h==-1}E.X=function(n){return n=Vr(this,n),Qe(n)?-1:Pt(n)?0:1};function ge(n){for(var e=n.g.length,t=[],i=0;i<e;i++)t[i]=~n.g[i];return new W(t,~n.h).add(Ya)}E.abs=function(){return Qe(this)?ge(this):this};E.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0,s=0;s<=e;s++){var r=i+(this.D(s)&65535)+(n.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(n.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,t[s]=o<<16|r}return new W(t,t[t.length-1]&-2147483648?-1:0)};function Vr(n,e){return n.add(ge(e))}E.R=function(n){if(Pt(this)||Pt(n))return Yn;if(Qe(this))return Qe(n)?ge(this).R(ge(n)):ge(ge(this).R(n));if(Qe(n))return ge(this.R(ge(n)));if(0>this.X(hh)&&0>n.X(hh))return ct(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],i=0;i<2*e;i++)t[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<n.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,a=n.D(s)>>>16,l=n.D(s)&65535;t[2*i+2*s]+=o*l,ir(t,2*i+2*s),t[2*i+2*s+1]+=r*l,ir(t,2*i+2*s+1),t[2*i+2*s+1]+=o*a,ir(t,2*i+2*s+1),t[2*i+2*s+2]+=r*a,ir(t,2*i+2*s+2)}for(i=0;i<e;i++)t[i]=t[2*i+1]<<16|t[2*i];for(i=e;i<2*e;i++)t[i]=0;return new W(t,0)};function ir(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function bi(n,e){this.g=n,this.h=e}function xr(n,e){if(Pt(e))throw Error("division by zero");if(Pt(n))return new bi(Yn,Yn);if(Qe(n))return e=xr(ge(n),e),new bi(ge(e.g),ge(e.h));if(Qe(e))return e=xr(n,ge(e)),new bi(ge(e.g),e.h);if(30<n.g.length){if(Qe(n)||Qe(e))throw Error("slowDivide_ only works with positive integers.");for(var t=Ya,i=e;0>=i.X(n);)t=dh(t),i=dh(i);var s=Un(t,1),r=Un(i,1);for(i=Un(i,2),t=Un(t,2);!Pt(i);){var o=r.add(i);0>=o.X(n)&&(s=s.add(t),r=o),i=Un(i,1),t=Un(t,1)}return e=Vr(n,s.R(e)),new bi(s,e)}for(s=Yn;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),i=Math.ceil(Math.log(t)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=ct(t),o=r.R(e);Qe(o)||0<o.X(n);)t-=i,r=ct(t),o=r.R(e);Pt(r)&&(r=Ya),s=s.add(r),n=Vr(n,o)}return new bi(s,n)}E.gb=function(n){return xr(this,n).h};E.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0;i<e;i++)t[i]=this.D(i)&n.D(i);return new W(t,this.h&n.h)};E.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0;i<e;i++)t[i]=this.D(i)|n.D(i);return new W(t,this.h|n.h)};E.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0;i<e;i++)t[i]=this.D(i)^n.D(i);return new W(t,this.h^n.h)};function dh(n){for(var e=n.g.length+1,t=[],i=0;i<e;i++)t[i]=n.D(i)<<1|n.D(i-1)>>>31;return new W(t,n.h)}function Un(n,e){var t=e>>5;e%=32;for(var i=n.g.length-t,s=[],r=0;r<i;r++)s[r]=0<e?n.D(r+t)>>>e|n.D(r+t+1)<<32-e:n.D(r+t);return new W(s,n.h)}Mr.prototype.createWebChannel=Mr.prototype.g;Ke.prototype.send=Ke.prototype.u;Ke.prototype.open=Ke.prototype.m;Ke.prototype.close=Ke.prototype.close;To.NO_ERROR=0;To.TIMEOUT=8;To.HTTP_ERROR=6;fp.COMPLETE="complete";pp.EventType=ks;ks.OPEN="a";ks.CLOSE="b";ks.ERROR="c";ks.MESSAGE="d";fe.prototype.listen=fe.prototype.O;ne.prototype.listenOnce=ne.prototype.P;ne.prototype.getLastError=ne.prototype.Sa;ne.prototype.getLastErrorCode=ne.prototype.Ia;ne.prototype.getStatus=ne.prototype.da;ne.prototype.getResponseJson=ne.prototype.Wa;ne.prototype.getResponseText=ne.prototype.ja;ne.prototype.send=ne.prototype.ha;ne.prototype.setWithCredentials=ne.prototype.Oa;st.prototype.digest=st.prototype.l;st.prototype.reset=st.prototype.reset;st.prototype.update=st.prototype.j;W.prototype.add=W.prototype.add;W.prototype.multiply=W.prototype.R;W.prototype.modulo=W.prototype.gb;W.prototype.compare=W.prototype.X;W.prototype.toNumber=W.prototype.ea;W.prototype.toString=W.prototype.toString;W.prototype.getBits=W.prototype.D;W.fromNumber=ct;W.fromString=Qp;var nw=function(){return new Mr},iw=function(){return Eo()},ma=To,sw=fp,rw=Dn,fh={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ow=Os,sr=pp,aw=ne,lw=st,Xn=W;const ph="@firebase/firestore";/**
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
 */class Ae{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ae.UNAUTHENTICATED=new Ae(null),Ae.GOOGLE_CREDENTIALS=new Ae("google-credentials-uid"),Ae.FIRST_PARTY=new Ae("first-party-uid"),Ae.MOCK_USER=new Ae("mock-user");/**
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
 */let wi="10.5.2";/**
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
 */const Cn=new co("@firebase/firestore");function ki(){return Cn.logLevel}function I(n,...e){if(Cn.logLevel<=V.DEBUG){const t=e.map(cc);Cn.debug(`Firestore (${wi}): ${n}`,...t)}}function xt(n,...e){if(Cn.logLevel<=V.ERROR){const t=e.map(cc);Cn.error(`Firestore (${wi}): ${n}`,...t)}}function ai(n,...e){if(Cn.logLevel<=V.WARN){const t=e.map(cc);Cn.warn(`Firestore (${wi}): ${n}`,...t)}}function cc(n){if(typeof n=="string")return n;try{/**
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
 */function R(n="Unexpected state"){const e=`FIRESTORE (${wi}) INTERNAL ASSERTION FAILED: `+n;throw xt(e),new Error(e)}function J(n,e){n||R()}function k(n,e){return n}/**
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
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends wt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class kt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Yp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ae.UNAUTHENTICATED))}shutdown(){}}class uw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class hw{constructor(e){this.t=e,this.currentUser=Ae.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let i=this.i;const s=l=>this.i!==i?(i=this.i,t(l)):Promise.resolve();let r=new kt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new kt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{I("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(I("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new kt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(I("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(J(typeof i.accessToken=="string"),new Yp(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string"),new Ae(e)}}class dw{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=Ae.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class fw{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new dw(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ae.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _w{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const i=r=>{r.error!=null&&I("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,I("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{I("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?s(r):I("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(J(typeof t.token=="string"),this.R=t.token,new pw(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function mw(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class Xp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=mw(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<t&&(i+=e.charAt(s[r]%e.length))}return i}}function $(n,e){return n<e?-1:n>e?1:0}function li(n,e,t){return n.length===e.length&&n.every((i,s)=>t(i,e[s]))}/**
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
 */class le{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new T(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new T(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new T(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new T(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return le.fromMillis(Date.now())}static fromDate(e){return le.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new le(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?$(this.nanoseconds,e.nanoseconds):$(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class P{constructor(e){this.timestamp=e}static fromTimestamp(e){return new P(e)}static min(){return new P(new le(0,0))}static max(){return new P(new le(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class cs{constructor(e,t,i){t===void 0?t=0:t>e.length&&R(),i===void 0?i=e.length-t:i>e.length-t&&R(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return cs.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof cs?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const r=e.get(s),o=t.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class X extends cs{construct(e,t,i){return new X(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new T(_.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(s=>s.length>0))}return new X(t)}static emptyPath(){return new X([])}}const gw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ye extends cs{construct(e,t,i){return new ye(e,t,i)}static isValidIdentifier(e){return gw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ye(["__name__"])}static fromServerFormat(e){const t=[];let i="",s=0;const r=()=>{if(i.length===0)throw new T(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new T(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new T(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new T(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ye(t)}static emptyPath(){return new ye([])}}/**
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
 */class C{constructor(e){this.path=e}static fromPath(e){return new C(X.fromString(e))}static fromName(e){return new C(X.fromString(e).popFirst(5))}static empty(){return new C(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&X.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return X.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new C(new X(e.slice()))}}function yw(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=P.fromTimestamp(i===1e9?new le(t+1,0):new le(t,i));return new Zt(s,C.empty(),e)}function vw(n){return new Zt(n.readTime,n.key,-1)}class Zt{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Zt(P.min(),C.empty(),-1)}static max(){return new Zt(P.max(),C.empty(),-1)}}function Ew(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=C.comparator(n.documentKey,e.documentKey),t!==0?t:$(n.largestBatchId,e.largestBatchId))}/**
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
 */const Tw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Iw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function xs(n){if(n.code!==_.FAILED_PRECONDITION||n.message!==Tw)throw n;I("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class g{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&R(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new g((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(t,r).next(i,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof g?t:g.resolve(t)}catch(t){return g.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):g.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):g.reject(t)}static resolve(e){return new g((t,i)=>{t(e)})}static reject(e){return new g((t,i)=>{i(e)})}static waitFor(e){return new g((t,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&t()},l=>i(l))}),o=!0,r===s&&t()})}static or(e){let t=g.resolve(!1);for(const i of e)t=t.next(s=>s?g.resolve(s):i());return t}static forEach(e,t){const i=[];return e.forEach((s,r)=>{i.push(t.call(this,s,r))}),this.waitFor(i)}static mapArray(e,t){return new g((i,s)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;t(e[c]).next(u=>{o[c]=u,++a,a===r&&i(o)},u=>s(u))}})}static doWhile(e,t){return new g((i,s)=>{const r=()=>{e()===!0?t().next(()=>{r()},s):i()};r()})}}function Ls(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class uc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.se(i),this.oe=i=>t.writeSequenceNumber(i))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}uc._e=-1;function bo(n){return n==null}function Lr(n){return n===0&&1/n==-1/0}function ww(n){return typeof n=="number"&&Number.isInteger(n)&&!Lr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function _h(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function On(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Jp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */let oe=class Xa{constructor(e,t){this.comparator=e,this.root=t||Yt.EMPTY}insert(e,t){return new Xa(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Yt.BLACK,null,null))}remove(e){return new Xa(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Yt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new rr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new rr(this.root,e,this.comparator,!1)}getReverseIterator(){return new rr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new rr(this.root,e,this.comparator,!0)}},rr=class{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Yt=class At{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??At.RED,this.left=s??At.EMPTY,this.right=r??At.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,r){return new At(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return At.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return At.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,At.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,At.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw R();const e=this.left.check();if(e!==this.right.check())throw R();return e+(this.isRed()?0:1)}};Yt.EMPTY=null,Yt.RED=!0,Yt.BLACK=!1;Yt.EMPTY=new class{constructor(){this.size=0}get key(){throw R()}get value(){throw R()}get color(){throw R()}get left(){throw R()}get right(){throw R()}copy(e,t,i,s,r){return this}insert(e,t,i){return new Yt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ee{constructor(e){this.comparator=e,this.data=new oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new mh(this.data.getIterator())}getIteratorFrom(e){return new mh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof Ee)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ee(this.comparator);return t.data=e,t}}class mh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class He{constructor(e){this.fields=e,e.sort(ye.comparator)}static empty(){return new He([])}unionWith(e){let t=new Ee(ye.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new He(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return li(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
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
 */class Zp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Le{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Zp("Invalid base64 string: "+r):r}}(e);return new Le(t)}static fromUint8Array(e){const t=function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r}(e);return new Le(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return $(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Le.EMPTY_BYTE_STRING=new Le("");const Cw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function en(n){if(J(!!n),typeof n=="string"){let e=0;const t=Cw.exec(n);if(J(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:se(n.seconds),nanos:se(n.nanos)}}function se(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function An(n){return typeof n=="string"?Le.fromBase64String(n):Le.fromUint8Array(n)}/**
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
 */function hc(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function dc(n){const e=n.mapValue.fields.__previous_value__;return hc(e)?dc(e):e}function us(n){const e=en(n.mapValue.fields.__local_write_time__.timestampValue);return new le(e.seconds,e.nanos)}/**
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
 */class Aw{constructor(e,t,i,s,r,o,a,l,c){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class hs{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new hs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof hs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const or={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Rn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?hc(n)?4:Rw(n)?9007199254740991:10:R()}function gt(n,e){if(n===e)return!0;const t=Rn(n);if(t!==Rn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return us(n).isEqual(us(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=en(s.timestampValue),a=en(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,r){return An(s.bytesValue).isEqual(An(r.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,r){return se(s.geoPointValue.latitude)===se(r.geoPointValue.latitude)&&se(s.geoPointValue.longitude)===se(r.geoPointValue.longitude)}(n,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return se(s.integerValue)===se(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=se(s.doubleValue),a=se(r.doubleValue);return o===a?Lr(o)===Lr(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return li(n.arrayValue.values||[],e.arrayValue.values||[],gt);case 10:return function(s,r){const o=s.mapValue.fields||{},a=r.mapValue.fields||{};if(_h(o)!==_h(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!gt(o[l],a[l])))return!1;return!0}(n,e);default:return R()}}function ds(n,e){return(n.values||[]).find(t=>gt(t,e))!==void 0}function ci(n,e){if(n===e)return 0;const t=Rn(n),i=Rn(e);if(t!==i)return $(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return $(n.booleanValue,e.booleanValue);case 2:return function(r,o){const a=se(r.integerValue||r.doubleValue),l=se(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(n,e);case 3:return gh(n.timestampValue,e.timestampValue);case 4:return gh(us(n),us(e));case 5:return $(n.stringValue,e.stringValue);case 6:return function(r,o){const a=An(r),l=An(o);return a.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(r,o){const a=r.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=$(a[c],l[c]);if(u!==0)return u}return $(a.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(r,o){const a=$(se(r.latitude),se(o.latitude));return a!==0?a:$(se(r.longitude),se(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(r,o){const a=r.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=ci(a[c],l[c]);if(u)return u}return $(a.length,l.length)}(n.arrayValue,e.arrayValue);case 10:return function(r,o){if(r===or.mapValue&&o===or.mapValue)return 0;if(r===or.mapValue)return 1;if(o===or.mapValue)return-1;const a=r.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=$(l[h],u[h]);if(d!==0)return d;const f=ci(a[l[h]],c[u[h]]);if(f!==0)return f}return $(l.length,u.length)}(n.mapValue,e.mapValue);default:throw R()}}function gh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return $(n,e);const t=en(n),i=en(e),s=$(t.seconds,i.seconds);return s!==0?s:$(t.nanos,i.nanos)}function ui(n){return Ja(n)}function Ja(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=en(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return An(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return C.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",s=!0;for(const r of t.values||[])s?s=!1:i+=",",i+=Ja(r);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${Ja(t.fields[o])}`;return s+"}"}(n.mapValue):R()}function yh(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Za(n){return!!n&&"integerValue"in n}function fc(n){return!!n&&"arrayValue"in n}function vh(n){return!!n&&"nullValue"in n}function Eh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function pr(n){return!!n&&"mapValue"in n}function ji(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return On(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=ji(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ji(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Rw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ue{constructor(e){this.value=e}static empty(){return new Ue({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!pr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ji(t)}setAll(e){let t=ye.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,i,s),i={},s=[],t=a.popLast()}o?i[a.lastSegment()]=ji(o):s.push(a.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,i,s)}delete(e){const t=this.field(e.popLast());pr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return gt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];pr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){On(t,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new Ue(ji(this.value))}}function e_(n){const e=[];return On(n.fields,(t,i)=>{const s=new ye([t]);if(pr(i)){const r=e_(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new He(e)}/**
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
 */class Re{constructor(e,t,i,s,r,o,a){this.key=e,this.documentType=t,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Re(e,0,P.min(),P.min(),P.min(),Ue.empty(),0)}static newFoundDocument(e,t,i,s){return new Re(e,1,t,P.min(),i,s,0)}static newNoDocument(e,t){return new Re(e,2,t,P.min(),P.min(),Ue.empty(),0)}static newUnknownDocument(e,t){return new Re(e,3,t,P.min(),P.min(),Ue.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(P.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ue.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=P.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Fr{constructor(e,t){this.position=e,this.inclusive=t}}function Th(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const r=e[s],o=n.position[s];if(r.field.isKeyField()?i=C.comparator(C.fromName(o.referenceValue),t.key):i=ci(o,t.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Ih(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!gt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ur{constructor(e,t="asc"){this.field=e,this.dir=t}}function Sw(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class t_{}class re extends t_{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new bw(e,t,i):t==="array-contains"?new Dw(e,i):t==="in"?new Ow(e,i):t==="not-in"?new Mw(e,i):t==="array-contains-any"?new Vw(e,i):new re(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new kw(e,i):new Nw(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ci(t,this.value)):t!==null&&Rn(this.value)===Rn(t)&&this.matchesComparison(ci(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return R()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rt extends t_{constructor(e,t){super(),this.filters=e,this.op=t,this.ue=null}static create(e,t){return new rt(e,t)}matches(e){return n_(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function n_(n){return n.op==="and"}function i_(n){return Pw(n)&&n_(n)}function Pw(n){for(const e of n.filters)if(e instanceof rt)return!1;return!0}function el(n){if(n instanceof re)return n.field.canonicalString()+n.op.toString()+ui(n.value);if(i_(n))return n.filters.map(e=>el(e)).join(",");{const e=n.filters.map(t=>el(t)).join(",");return`${n.op}(${e})`}}function s_(n,e){return n instanceof re?function(i,s){return s instanceof re&&i.op===s.op&&i.field.isEqual(s.field)&&gt(i.value,s.value)}(n,e):n instanceof rt?function(i,s){return s instanceof rt&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((r,o,a)=>r&&s_(o,s.filters[a]),!0):!1}(n,e):void R()}function r_(n){return n instanceof re?function(t){return`${t.field.canonicalString()} ${t.op} ${ui(t.value)}`}(n):n instanceof rt?function(t){return t.op.toString()+" {"+t.getFilters().map(r_).join(" ,")+"}"}(n):"Filter"}class bw extends re{constructor(e,t,i){super(e,t,i),this.key=C.fromName(i.referenceValue)}matches(e){const t=C.comparator(e.key,this.key);return this.matchesComparison(t)}}class kw extends re{constructor(e,t){super(e,"in",t),this.keys=o_("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Nw extends re{constructor(e,t){super(e,"not-in",t),this.keys=o_("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function o_(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>C.fromName(i.referenceValue))}class Dw extends re{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return fc(t)&&ds(t.arrayValue,this.value)}}class Ow extends re{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ds(this.value.arrayValue,t)}}class Mw extends re{constructor(e,t){super(e,"not-in",t)}matches(e){if(ds(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ds(this.value.arrayValue,t)}}class Vw extends re{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!fc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>ds(this.value.arrayValue,i))}}/**
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
 */class xw{constructor(e,t=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.ce=null}}function wh(n,e=null,t=[],i=[],s=null,r=null,o=null){return new xw(n,e,t,i,s,r,o)}function pc(n){const e=k(n);if(e.ce===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>el(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),bo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>ui(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>ui(i)).join(",")),e.ce=t}return e.ce}function _c(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Sw(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!s_(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ih(n.startAt,e.startAt)&&Ih(n.endAt,e.endAt)}function tl(n){return C.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Fs{constructor(e,t=null,i=[],s=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Lw(n,e,t,i,s,r,o,a){return new Fs(n,e,t,i,s,r,o,a)}function ko(n){return new Fs(n)}function Ch(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function a_(n){return n.collectionGroup!==null}function Wi(n){const e=k(n);if(e.le===null){e.le=[];const t=new Set;for(const r of e.explicitOrderBy)e.le.push(r),t.add(r.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ee(ye.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(r=>{t.has(r.canonicalString())||r.isKeyField()||e.le.push(new Ur(r,i))}),t.has(ye.keyField().canonicalString())||e.le.push(new Ur(ye.keyField(),i))}return e.le}function dt(n){const e=k(n);return e.he||(e.he=Fw(e,Wi(n))),e.he}function Fw(n,e){if(n.limitType==="F")return wh(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const r=s.dir==="desc"?"asc":"desc";return new Ur(s.field,r)});const t=n.endAt?new Fr(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Fr(n.startAt.position,n.startAt.inclusive):null;return wh(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function nl(n,e){const t=n.filters.concat([e]);return new Fs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function il(n,e,t){return new Fs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function No(n,e){return _c(dt(n),dt(e))&&n.limitType===e.limitType}function l_(n){return`${pc(dt(n))}|lt:${n.limitType}`}function qn(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(s=>r_(s)).join(", ")}]`),bo(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(s=>ui(s)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(s=>ui(s)).join(",")),`Target(${i})`}(dt(n))}; limitType=${n.limitType})`}function Do(n,e){return e.isFoundDocument()&&function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):C.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)}(n,e)&&function(i,s){for(const r of Wi(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(n,e)&&function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0}(n,e)&&function(i,s){return!(i.startAt&&!function(o,a,l){const c=Th(o,a,l);return o.inclusive?c<=0:c<0}(i.startAt,Wi(i),s)||i.endAt&&!function(o,a,l){const c=Th(o,a,l);return o.inclusive?c>=0:c>0}(i.endAt,Wi(i),s))}(n,e)}function Uw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function c_(n){return(e,t)=>{let i=!1;for(const s of Wi(n)){const r=Bw(s,e,t);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function Bw(n,e,t){const i=n.field.isKeyField()?C.comparator(e.key,t.key):function(r,o,a){const l=o.data.field(r),c=a.data.field(r);return l!==null&&c!==null?ci(l,c):R()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return R()}}/**
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
 */class Ci{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){On(this.inner,(t,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return Jp(this.inner)}size(){return this.innerSize}}/**
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
 */const qw=new oe(C.comparator);function Lt(){return qw}const u_=new oe(C.comparator);function Li(...n){let e=u_;for(const t of n)e=e.insert(t.key,t);return e}function h_(n){let e=u_;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function mn(){return Hi()}function d_(){return Hi()}function Hi(){return new Ci(n=>n.toString(),(n,e)=>n.isEqual(e))}const $w=new oe(C.comparator),jw=new Ee(C.comparator);function x(...n){let e=jw;for(const t of n)e=e.add(t);return e}const Ww=new Ee($);function Hw(){return Ww}/**
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
 */function f_(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Lr(e)?"-0":e}}function p_(n){return{integerValue:""+n}}function zw(n,e){return ww(e)?p_(e):f_(n,e)}/**
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
 */class Oo{constructor(){this._=void 0}}function Gw(n,e,t){return n instanceof Br?function(s,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&hc(r)&&(r=dc(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(t,e):n instanceof fs?m_(n,e):n instanceof ps?g_(n,e):function(s,r){const o=__(s,r),a=Ah(o)+Ah(s.Ie);return Za(o)&&Za(s.Ie)?p_(a):f_(s.serializer,a)}(n,e)}function Kw(n,e,t){return n instanceof fs?m_(n,e):n instanceof ps?g_(n,e):t}function __(n,e){return n instanceof qr?function(i){return Za(i)||function(r){return!!r&&"doubleValue"in r}(i)}(e)?e:{integerValue:0}:null}class Br extends Oo{}class fs extends Oo{constructor(e){super(),this.elements=e}}function m_(n,e){const t=y_(e);for(const i of n.elements)t.some(s=>gt(s,i))||t.push(i);return{arrayValue:{values:t}}}class ps extends Oo{constructor(e){super(),this.elements=e}}function g_(n,e){let t=y_(e);for(const i of n.elements)t=t.filter(s=>!gt(s,i));return{arrayValue:{values:t}}}class qr extends Oo{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Ah(n){return se(n.integerValue||n.doubleValue)}function y_(n){return fc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Qw(n,e){return n.field.isEqual(e.field)&&function(i,s){return i instanceof fs&&s instanceof fs||i instanceof ps&&s instanceof ps?li(i.elements,s.elements,gt):i instanceof qr&&s instanceof qr?gt(i.Ie,s.Ie):i instanceof Br&&s instanceof Br}(n.transform,e.transform)}class Yw{constructor(e,t){this.version=e,this.transformResults=t}}class Je{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Je}static exists(e){return new Je(void 0,e)}static updateTime(e){return new Je(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _r(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Mo{}function v_(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new mc(n.key,Je.none()):new Us(n.key,n.data,Je.none());{const t=n.data,i=Ue.empty();let s=new Ee(ye.comparator);for(let r of e.fields)if(!s.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new hn(n.key,i,new He(s.toArray()),Je.none())}}function Xw(n,e,t){n instanceof Us?function(s,r,o){const a=s.value.clone(),l=Sh(s.fieldTransforms,r,o.transformResults);a.setAll(l),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof hn?function(s,r,o){if(!_r(s.precondition,r))return void r.convertToUnknownDocument(o.version);const a=Sh(s.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(E_(s)),l.setAll(a),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function zi(n,e,t,i){return n instanceof Us?function(r,o,a,l){if(!_r(r.precondition,o))return a;const c=r.value.clone(),u=Ph(r.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,e,t,i):n instanceof hn?function(r,o,a,l){if(!_r(r.precondition,o))return a;const c=Ph(r.fieldTransforms,l,o),u=o.data;return u.setAll(E_(r)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(n,e,t,i):function(r,o,a){return _r(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function Jw(n,e){let t=null;for(const i of n.fieldTransforms){const s=e.data.field(i.field),r=__(i.transform,s||null);r!=null&&(t===null&&(t=Ue.empty()),t.set(i.field,r))}return t||null}function Rh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&li(i,s,(r,o)=>Qw(r,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Us extends Mo{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class hn extends Mo{constructor(e,t,i,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function E_(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function Sh(n,e,t){const i=new Map;J(n.length===t.length);for(let s=0;s<t.length;s++){const r=n[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,Kw(o,a,t[s]))}return i}function Ph(n,e,t){const i=new Map;for(const s of n){const r=s.transform,o=t.data.field(s.field);i.set(s.field,Gw(r,o,e))}return i}class mc extends Mo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Zw extends Mo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class eC{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&Xw(r,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=zi(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=zi(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=d_();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=t.has(s.key)?null:a;const l=v_(o,a);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(P.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),x())}isEqual(e){return this.batchId===e.batchId&&li(this.mutations,e.mutations,(t,i)=>Rh(t,i))&&li(this.baseMutations,e.baseMutations,(t,i)=>Rh(t,i))}}class gc{constructor(e,t,i,s){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=s}static from(e,t,i){J(e.mutations.length===i.length);let s=function(){return $w}();const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new gc(e,t,i,s)}}/**
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
 */class tC{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class nC{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ie,L;function iC(n){switch(n){default:return R();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function T_(n){if(n===void 0)return xt("GRPC error has no .code"),_.UNKNOWN;switch(n){case ie.OK:return _.OK;case ie.CANCELLED:return _.CANCELLED;case ie.UNKNOWN:return _.UNKNOWN;case ie.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case ie.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case ie.INTERNAL:return _.INTERNAL;case ie.UNAVAILABLE:return _.UNAVAILABLE;case ie.UNAUTHENTICATED:return _.UNAUTHENTICATED;case ie.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case ie.NOT_FOUND:return _.NOT_FOUND;case ie.ALREADY_EXISTS:return _.ALREADY_EXISTS;case ie.PERMISSION_DENIED:return _.PERMISSION_DENIED;case ie.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case ie.ABORTED:return _.ABORTED;case ie.OUT_OF_RANGE:return _.OUT_OF_RANGE;case ie.UNIMPLEMENTED:return _.UNIMPLEMENTED;case ie.DATA_LOSS:return _.DATA_LOSS;default:return R()}}(L=ie||(ie={}))[L.OK=0]="OK",L[L.CANCELLED=1]="CANCELLED",L[L.UNKNOWN=2]="UNKNOWN",L[L.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",L[L.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",L[L.NOT_FOUND=5]="NOT_FOUND",L[L.ALREADY_EXISTS=6]="ALREADY_EXISTS",L[L.PERMISSION_DENIED=7]="PERMISSION_DENIED",L[L.UNAUTHENTICATED=16]="UNAUTHENTICATED",L[L.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",L[L.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",L[L.ABORTED=10]="ABORTED",L[L.OUT_OF_RANGE=11]="OUT_OF_RANGE",L[L.UNIMPLEMENTED=12]="UNIMPLEMENTED",L[L.INTERNAL=13]="INTERNAL",L[L.UNAVAILABLE=14]="UNAVAILABLE",L[L.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function sC(){return new TextEncoder}/**
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
 */const rC=new Xn([4294967295,4294967295],0);function bh(n){const e=sC().encode(n),t=new lw;return t.update(e),new Uint8Array(t.digest())}function kh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Xn([t,i],0),new Xn([s,r],0)]}class yc{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Fi(`Invalid padding: ${t}`);if(i<0)throw new Fi(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Fi(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Fi(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ee=Xn.fromNumber(this.Te)}de(e,t,i){let s=e.add(t.multiply(Xn.fromNumber(i)));return s.compare(rC)===1&&(s=new Xn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=bh(e),[i,s]=kh(t);for(let r=0;r<this.hashCount;r++){const o=this.de(i,s,r);if(!this.Ae(o))return!1}return!0}static create(e,t,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new yc(r,s,t);return i.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const t=bh(e),[i,s]=kh(t);for(let r=0;r<this.hashCount;r++){const o=this.de(i,s,r);this.Re(o)}}Re(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Fi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Vo{constructor(e,t,i,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const s=new Map;return s.set(e,Bs.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Vo(P.min(),s,new oe($),Lt(),x())}}class Bs{constructor(e,t,i,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Bs(i,t,x(),x(),x())}}/**
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
 */class mr{constructor(e,t,i,s){this.Ve=e,this.removedTargetIds=t,this.key=i,this.me=s}}class I_{constructor(e,t){this.targetId=e,this.fe=t}}class w_{constructor(e,t,i=Le.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class Nh{constructor(){this.ge=0,this.pe=Oh(),this.ye=Le.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=x(),t=x(),i=x();return this.pe.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:R()}}),new Bs(this.ye,this.we,e,t,i)}Fe(){this.Se=!1,this.pe=Oh()}Me(e,t){this.Se=!0,this.pe=this.pe.insert(e,t)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class oC{constructor(e){this.Le=e,this.ke=new Map,this.qe=Lt(),this.Qe=Dh(),this.Ke=new oe($)}$e(e){for(const t of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(t,e.me):this.We(t,e.key,e.me);for(const t of e.removedTargetIds)this.We(t,e.key,e.me)}Ge(e){this.forEachTarget(e,t=>{const i=this.ze(t);switch(e.state){case 0:this.je(t)&&i.Ce(e.resumeToken);break;case 1:i.Ne(),i.be||i.Fe(),i.Ce(e.resumeToken);break;case 2:i.Ne(),i.be||this.removeTarget(t);break;case 3:this.je(t)&&(i.Be(),i.Ce(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),i.Ce(e.resumeToken));break;default:R()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ke.forEach((i,s)=>{this.je(s)&&t(s)})}Je(e){const t=e.targetId,i=e.fe.count,s=this.Ye(t);if(s){const r=s.target;if(tl(r))if(i===0){const o=new C(r.path);this.We(t,o,Re.newNoDocument(o,P.min()))}else J(i===1);else{const o=this.Ze(t);if(o!==i){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(t);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,c)}}}}}Xe(e){const t=e.fe.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=t;let o,a;try{o=An(i).toUint8Array()}catch(l){if(l instanceof Zp)return ai("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new yc(o,s,r)}catch(l){return ai(l instanceof Fi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,t,i){return t.fe.count===i-this.rt(e,t.targetId)?0:2}rt(e,t){const i=this.Le.getRemoteKeysForTarget(t);let s=0;return i.forEach(r=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(a)||(this.We(t,r,null),s++)}),s}it(e){const t=new Map;this.ke.forEach((r,o)=>{const a=this.Ye(o);if(a){if(r.current&&tl(a.target)){const l=new C(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,Re.newNoDocument(l,e))}r.De&&(t.set(o,r.ve()),r.Fe())}});let i=x();this.Qe.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(i=i.add(r))}),this.qe.forEach((r,o)=>o.setReadTime(e));const s=new Vo(e,t,this.Ke,this.qe,i);return this.qe=Lt(),this.Qe=Dh(),this.Ke=new oe($),s}Ue(e,t){if(!this.je(e))return;const i=this.st(e,t.key)?2:0;this.ze(e).Me(t.key,i),this.qe=this.qe.insert(t.key,t),this.Qe=this.Qe.insert(t.key,this.ot(t.key).add(e))}We(e,t,i){if(!this.je(e))return;const s=this.ze(e);this.st(e,t)?s.Me(t,1):s.xe(t),this.Qe=this.Qe.insert(t,this.ot(t).delete(e)),i&&(this.qe=this.qe.insert(t,i))}removeTarget(e){this.ke.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let t=this.ke.get(e);return t||(t=new Nh,this.ke.set(e,t)),t}ot(e){let t=this.Qe.get(e);return t||(t=new Ee($),this.Qe=this.Qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||I("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.ke.get(e);return t&&t.be?null:this.Le._t(e)}He(e){this.ke.set(e,new Nh),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}st(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Dh(){return new oe(C.comparator)}function Oh(){return new oe(C.comparator)}const aC=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),lC=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),cC=(()=>({and:"AND",or:"OR"}))();class uC{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function sl(n,e){return n.useProto3Json||bo(e)?e:{value:e}}function $r(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function C_(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function hC(n,e){return $r(n,e.toTimestamp())}function ft(n){return J(!!n),P.fromTimestamp(function(t){const i=en(t);return new le(i.seconds,i.nanos)}(n))}function vc(n,e){return function(i){return new X(["projects",i.projectId,"databases",i.database])}(n).child("documents").child(e).canonicalString()}function A_(n){const e=X.fromString(n);return J(b_(e)),e}function rl(n,e){return vc(n.databaseId,e.path)}function ga(n,e){const t=A_(e);if(t.get(1)!==n.databaseId.projectId)throw new T(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new T(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new C(R_(t))}function ol(n,e){return vc(n.databaseId,e)}function dC(n){const e=A_(n);return e.length===4?X.emptyPath():R_(e)}function al(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function R_(n){return J(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Mh(n,e,t){return{name:rl(n,e),fields:t.value.mapValue.fields}}function fC(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:R()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(c,u){return c.useProto3Json?(J(u===void 0||typeof u=="string"),Le.fromBase64String(u||"")):(J(u===void 0||u instanceof Uint8Array),Le.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?_.UNKNOWN:T_(c.code);return new T(u,c.message||"")}(o);t=new w_(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=ga(n,i.document.name),r=ft(i.document.updateTime),o=i.document.createTime?ft(i.document.createTime):P.min(),a=new Ue({mapValue:{fields:i.document.fields}}),l=Re.newFoundDocument(s,r,o,a),c=i.targetIds||[],u=i.removedTargetIds||[];t=new mr(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=ga(n,i.document),r=i.readTime?ft(i.readTime):P.min(),o=Re.newNoDocument(s,r),a=i.removedTargetIds||[];t=new mr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=ga(n,i.document),r=i.removedTargetIds||[];t=new mr([],r,s,null)}else{if(!("filter"in e))return R();{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new nC(s,r),a=i.targetId;t=new I_(a,o)}}return t}function pC(n,e){let t;if(e instanceof Us)t={update:Mh(n,e.key,e.value)};else if(e instanceof mc)t={delete:rl(n,e.key)};else if(e instanceof hn)t={update:Mh(n,e.key,e.data),updateMask:wC(e.fieldMask)};else{if(!(e instanceof Zw))return R();t={verify:rl(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(r,o){const a=o.transform;if(a instanceof Br)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof fs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ps)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof qr)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw R()}(0,i))),e.precondition.isNone||(t.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:hC(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:R()}(n,e.precondition)),t}function _C(n,e){return n&&n.length>0?(J(e!==void 0),n.map(t=>function(s,r){let o=s.updateTime?ft(s.updateTime):ft(r);return o.isEqual(P.min())&&(o=ft(r)),new Yw(o,s.transformResults||[])}(t,e))):[]}function mC(n,e){return{documents:[ol(n,e.path)]}}function gC(n,e){const t={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(t.parent=ol(n,i),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=ol(n,i.popLast()),t.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(l){if(l.length!==0)return P_(rt.create(l,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const r=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:$n(h.field),direction:EC(h.dir)}}(c))}(e.orderBy);r&&(t.structuredQuery.orderBy=r);const o=sl(n,e.limit);return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),t}function yC(n){let e=dC(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){J(i===1);const u=t.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let r=[];t.where&&(r=function(h){const d=S_(h);return d instanceof rt&&i_(d)?d.getFilters():[d]}(t.where));let o=[];t.orderBy&&(o=function(h){return h.map(d=>function(p){return new Ur(jn(p.field),function(m){switch(m){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(p.direction))}(d))}(t.orderBy));let a=null;t.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,bo(d)?null:d}(t.limit));let l=null;t.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new Fr(f,d)}(t.startAt));let c=null;return t.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new Fr(f,d)}(t.endAt)),Lw(e,s,o,r,a,"F",l,c)}function vC(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return R()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function S_(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=jn(t.unaryFilter.field);return re.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=jn(t.unaryFilter.field);return re.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=jn(t.unaryFilter.field);return re.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=jn(t.unaryFilter.field);return re.create(o,"!=",{nullValue:"NULL_VALUE"});default:return R()}}(n):n.fieldFilter!==void 0?function(t){return re.create(jn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return R()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return rt.create(t.compositeFilter.filters.map(i=>S_(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return R()}}(t.compositeFilter.op))}(n):R()}function EC(n){return aC[n]}function TC(n){return lC[n]}function IC(n){return cC[n]}function $n(n){return{fieldPath:n.canonicalString()}}function jn(n){return ye.fromServerFormat(n.fieldPath)}function P_(n){return n instanceof re?function(t){if(t.op==="=="){if(Eh(t.value))return{unaryFilter:{field:$n(t.field),op:"IS_NAN"}};if(vh(t.value))return{unaryFilter:{field:$n(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Eh(t.value))return{unaryFilter:{field:$n(t.field),op:"IS_NOT_NAN"}};if(vh(t.value))return{unaryFilter:{field:$n(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$n(t.field),op:TC(t.op),value:t.value}}}(n):n instanceof rt?function(t){const i=t.getFilters().map(s=>P_(s));return i.length===1?i[0]:{compositeFilter:{op:IC(t.op),filters:i}}}(n):R()}function wC(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function b_(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Gt{constructor(e,t,i,s,r=P.min(),o=P.min(),a=Le.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Gt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class CC{constructor(e){this.ut=e}}function AC(n){const e=yC({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?il(e,e.limit,"L"):e}/**
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
 */class RC{constructor(){this.on=new SC}addToCollectionParentIndex(e,t){return this.on.add(t),g.resolve()}getCollectionParents(e,t){return g.resolve(this.on.getEntries(t))}addFieldIndex(e,t){return g.resolve()}deleteFieldIndex(e,t){return g.resolve()}deleteAllFieldIndexes(e){return g.resolve()}createTargetIndexes(e,t){return g.resolve()}getDocumentsMatchingTarget(e,t){return g.resolve(null)}getIndexType(e,t){return g.resolve(0)}getFieldIndexes(e,t){return g.resolve([])}getNextCollectionGroupToUpdate(e){return g.resolve(null)}getMinOffset(e,t){return g.resolve(Zt.min())}getMinOffsetFromCollectionGroup(e,t){return g.resolve(Zt.min())}updateCollectionGroup(e,t,i){return g.resolve()}updateIndexEntries(e,t){return g.resolve()}}class SC{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new Ee(X.comparator),r=!s.has(i);return this.index[t]=s.add(i),r}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Ee(X.comparator)).toArray()}}/**
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
 */class hi{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new hi(0)}static Nn(){return new hi(-1)}}/**
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
 */class PC{constructor(){this.changes=new Ci(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Re.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?g.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class bC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class kC{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(i!==null&&zi(i.mutation,s,He.empty(),le.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,x()).next(()=>i))}getLocalViewOfDocuments(e,t,i=x()){const s=mn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,i).next(r=>{let o=Li();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const i=mn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,x()))}populateOverlays(e,t,i){const s=[];return i.forEach(r=>{t.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,i,s){let r=Lt();const o=Hi(),a=function(){return Hi()}();return t.forEach((l,c)=>{const u=i.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof hn)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),zi(u.mutation,c,u.mutation.getFieldMask(),le.now())):o.set(c.key,He.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),t.forEach((c,u)=>{var h;return a.set(c,new bC(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const i=Hi();let s=new oe((o,a)=>o-a),r=x();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=t.get(l);if(c===null)return;let u=i.get(l)||He.empty();u=a.applyToLocalView(c,u),i.set(l,u);const h=(s.get(a.batchId)||x()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=d_();u.forEach(d=>{if(!r.has(d)){const f=v_(t.get(d),i.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return g.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,s){return function(o){return C.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):a_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,s):this.getDocumentsMatchingCollectionQuery(e,t,i,s)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-r.size):g.resolve(mn());let a=-1,l=r;return o.next(c=>g.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?g.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,x())).next(u=>({batchId:a,changes:h_(u)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new C(t)).next(i=>{let s=Li();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,i,s){const r=t.collectionGroup;let o=Li();return this.indexManager.getCollectionParents(e,r).next(a=>g.forEach(a,l=>{const c=function(h,d){return new Fs(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(t,l.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,i,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,r,s))).next(o=>{r.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,Re.newInvalidDocument(u)))});let a=Li();return o.forEach((l,c)=>{const u=r.get(l);u!==void 0&&zi(u.mutation,c,He.empty(),le.now()),Do(t,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class NC{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,t){return g.resolve(this.ur.get(t))}saveBundleMetadata(e,t){return this.ur.set(t.id,function(s){return{id:s.id,version:s.version,createTime:ft(s.createTime)}}(t)),g.resolve()}getNamedQuery(e,t){return g.resolve(this.cr.get(t))}saveNamedQuery(e,t){return this.cr.set(t.name,function(s){return{name:s.name,query:AC(s.bundledQuery),readTime:ft(s.readTime)}}(t)),g.resolve()}}/**
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
 */class DC{constructor(){this.overlays=new oe(C.comparator),this.lr=new Map}getOverlay(e,t){return g.resolve(this.overlays.get(t))}getOverlays(e,t){const i=mn();return g.forEach(t,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((s,r)=>{this.lt(e,t,r)}),g.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.lr.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.lr.delete(i)),g.resolve()}getOverlaysForCollection(e,t,i){const s=mn(),r=t.length+1,o=new C(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return g.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let r=new oe((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>i){let u=r.get(c.largestBatchId);u===null&&(u=mn(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=mn(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return g.resolve(a)}lt(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(i.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new tC(t,i));let r=this.lr.get(t);r===void 0&&(r=x(),this.lr.set(t,r)),this.lr.set(t,r.add(i.key))}}/**
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
 */class Ec{constructor(){this.hr=new Ee(ue.Pr),this.Ir=new Ee(ue.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,t){const i=new ue(e,t);this.hr=this.hr.add(i),this.Ir=this.Ir.add(i)}Er(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.dr(new ue(e,t))}Ar(e,t){e.forEach(i=>this.removeReference(i,t))}Rr(e){const t=new C(new X([])),i=new ue(t,e),s=new ue(t,e+1),r=[];return this.Ir.forEachInRange([i,s],o=>{this.dr(o),r.push(o.key)}),r}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const t=new C(new X([])),i=new ue(t,e),s=new ue(t,e+1);let r=x();return this.Ir.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const t=new ue(e,0),i=this.hr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class ue{constructor(e,t){this.key=e,this.gr=t}static Pr(e,t){return C.comparator(e.key,t.key)||$(e.gr,t.gr)}static Tr(e,t){return $(e.gr,t.gr)||C.comparator(e.key,t.key)}}/**
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
 */class OC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.pr=1,this.yr=new Ee(ue.Pr)}checkEmpty(e){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const r=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new eC(r,t,i,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new ue(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(e,t){return g.resolve(this.wr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.Sr(i),r=s<0?0:s;return g.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new ue(t,0),s=new ue(t,Number.POSITIVE_INFINITY),r=[];return this.yr.forEachInRange([i,s],o=>{const a=this.wr(o.gr);r.push(a)}),g.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Ee($);return t.forEach(s=>{const r=new ue(s,0),o=new ue(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([r,o],a=>{i=i.add(a.gr)})}),g.resolve(this.br(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let r=i;C.isDocumentKey(r)||(r=r.child(""));const o=new ue(new C(r),0);let a=new Ee($);return this.yr.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.gr)),!0)},o),g.resolve(this.br(a))}br(e){const t=[];return e.forEach(i=>{const s=this.wr(i);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){J(this.Dr(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.yr;return g.forEach(t.mutations,s=>{const r=new ue(s.key,t.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=i})}Fn(e){}containsKey(e,t){const i=new ue(t,0),s=this.yr.firstAfterOrEqual(i);return g.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,g.resolve()}Dr(e,t){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const t=this.Sr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class MC{constructor(e){this.Cr=e,this.docs=function(){return new oe(C.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),r=s?s.size:0,o=this.Cr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return g.resolve(i?i.document.mutableCopy():Re.newInvalidDocument(t))}getEntries(e,t){let i=Lt();return t.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():Re.newInvalidDocument(s))}),g.resolve(i)}getDocumentsMatchingQuery(e,t,i,s){let r=Lt();const o=t.path,a=new C(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Ew(vw(u),i)<=0||(s.has(u.key)||Do(t,u))&&(r=r.insert(u.key,u.mutableCopy()))}return g.resolve(r)}getAllFromCollectionGroup(e,t,i,s){R()}vr(e,t){return g.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new VC(this)}getSize(e){return g.resolve(this.size)}}class VC extends PC{constructor(e){super(),this._r=e}applyChanges(e){const t=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?t.push(this._r.addEntry(e,s)):this._r.removeEntry(i)}),g.waitFor(t)}getFromCache(e,t){return this._r.getEntry(e,t)}getAllFromCache(e,t){return this._r.getEntries(e,t)}}/**
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
 */class xC{constructor(e){this.persistence=e,this.Fr=new Ci(t=>pc(t),_c),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Ec,this.targetCount=0,this.Nr=hi.On()}forEachTarget(e,t){return this.Fr.forEach((i,s)=>t(s)),g.resolve()}getLastRemoteSnapshotVersion(e){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return g.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.Mr&&(this.Mr=t),g.resolve()}kn(e){this.Fr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Nr=new hi(t),this.highestTargetId=t),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,t){return this.kn(t),this.targetCount+=1,g.resolve()}updateTargetData(e,t){return this.kn(t),g.resolve()}removeTargetData(e,t){return this.Fr.delete(t.target),this.Or.Rr(t.targetId),this.targetCount-=1,g.resolve()}removeTargets(e,t,i){let s=0;const r=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=t&&i.get(a.targetId)===null&&(this.Fr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),g.waitFor(r).next(()=>s)}getTargetCount(e){return g.resolve(this.targetCount)}getTargetData(e,t){const i=this.Fr.get(t)||null;return g.resolve(i)}addMatchingKeys(e,t,i){return this.Or.Er(t,i),g.resolve()}removeMatchingKeys(e,t,i){this.Or.Ar(t,i);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),g.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Or.Rr(t),g.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Or.mr(t);return g.resolve(i)}containsKey(e,t){return g.resolve(this.Or.containsKey(t))}}/**
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
 */class LC{constructor(e,t){this.Br={},this.overlays={},this.Lr=new uc(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new xC(this),this.indexManager=new RC,this.remoteDocumentCache=function(s){return new MC(s)}(i=>this.referenceDelegate.Qr(i)),this.serializer=new CC(t),this.Kr=new NC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new DC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Br[e.toKey()];return i||(i=new OC(t,this.referenceDelegate),this.Br[e.toKey()]=i),i}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,t,i){I("MemoryPersistence","Starting transaction:",e);const s=new FC(this.Lr.next());return this.referenceDelegate.$r(),i(s).next(r=>this.referenceDelegate.Ur(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Wr(e,t){return g.or(Object.values(this.Br).map(i=>()=>i.containsKey(e,t)))}}class FC extends Iw{constructor(e){super(),this.currentSequenceNumber=e}}class Tc{constructor(e){this.persistence=e,this.Gr=new Ec,this.zr=null}static jr(e){return new Tc(e)}get Hr(){if(this.zr)return this.zr;throw R()}addReference(e,t,i){return this.Gr.addReference(i,t),this.Hr.delete(i.toString()),g.resolve()}removeReference(e,t,i){return this.Gr.removeReference(i,t),this.Hr.add(i.toString()),g.resolve()}markPotentiallyOrphaned(e,t){return this.Hr.add(t.toString()),g.resolve()}removeTarget(e,t){this.Gr.Rr(t.targetId).forEach(s=>this.Hr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(r=>this.Hr.add(r.toString()))}).next(()=>i.removeTargetData(e,t))}$r(){this.zr=new Set}Ur(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Hr,i=>{const s=C.fromPath(i);return this.Jr(e,s).next(r=>{r||t.removeEntry(s,P.min())})}).next(()=>(this.zr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Jr(e,t).next(i=>{i?this.Hr.delete(t.toString()):this.Hr.add(t.toString())})}Qr(e){return 0}Jr(e,t){return g.or([()=>g.resolve(this.Gr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Wr(e,t)])}}/**
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
 */class Ic{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.ki=i,this.qi=s}static Qi(e,t){let i=x(),s=x();for(const r of t.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Ic(e,t.fromCache,i,s)}}/**
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
 */class UC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class BC{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,t){this.Gi=e,this.indexManager=t,this.Ki=!0}getDocumentsMatchingQuery(e,t,i,s){const r={result:null};return this.zi(e,t).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.ji(e,t,s,i).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new UC;return this.Hi(e,t,o).next(a=>{if(r.result=a,this.$i)return this.Ji(e,t,o,a.size)})}).next(()=>r.result)}Ji(e,t,i,s){return i.documentReadCount<this.Ui?(ki()<=V.DEBUG&&I("QueryEngine","SDK will not create cache indexes for query:",qn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),g.resolve()):(ki()<=V.DEBUG&&I("QueryEngine","Query:",qn(t),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Wi*s?(ki()<=V.DEBUG&&I("QueryEngine","The SDK decides to create cache indexes for query:",qn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,dt(t))):g.resolve())}zi(e,t){if(Ch(t))return g.resolve(null);let i=dt(t);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=il(t,null,"F"),i=dt(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=x(...r);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(l=>{const c=this.Yi(t,a);return this.Zi(t,c,o,l.readTime)?this.zi(e,il(t,null,"F")):this.Xi(e,c,t,l)}))})))}ji(e,t,i,s){return Ch(t)||s.isEqual(P.min())?g.resolve(null):this.Gi.getDocuments(e,i).next(r=>{const o=this.Yi(t,r);return this.Zi(t,o,i,s)?g.resolve(null):(ki()<=V.DEBUG&&I("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),qn(t)),this.Xi(e,o,t,yw(s,-1)).next(a=>a))})}Yi(e,t){let i=new Ee(c_(e));return t.forEach((s,r)=>{Do(e,r)&&(i=i.add(r))}),i}Zi(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Hi(e,t,i){return ki()<=V.DEBUG&&I("QueryEngine","Using full collection scan to execute query:",qn(t)),this.Gi.getDocumentsMatchingQuery(e,t,Zt.min(),i)}Xi(e,t,i,s){return this.Gi.getDocumentsMatchingQuery(e,i,s).next(r=>(t.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class qC{constructor(e,t,i,s){this.persistence=e,this.es=t,this.serializer=s,this.ts=new oe($),this.ns=new Ci(r=>pc(r),_c),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(i)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kC(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ts))}}function $C(n,e,t,i){return new qC(n,e,t,i)}async function k_(n,e){const t=k(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,t.os(e),t.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let l=x();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return t.localDocuments.getDocuments(i,l).next(c=>({_s:c,removedBatchIds:o,addedBatchIds:a}))})})}function jC(n,e){const t=k(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=t.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let f=g.resolve();return d.forEach(p=>{f=f.next(()=>u.getEntry(l,p)).next(y=>{const m=c.docVersions.get(p);J(m!==null),y.version.compareTo(m)<0&&(h.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(t,i,e,r).next(()=>r.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(a){let l=x();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>t.localDocuments.getDocuments(i,s))})}function N_(n){const e=k(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.qr.getLastRemoteSnapshotVersion(t))}function WC(n,e){const t=k(n),i=e.snapshotVersion;let s=t.ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=t.ss.newChangeBuffer({trackRemovals:!0});s=t.ts;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(t.qr.removeMatchingKeys(r,u.removedDocuments,h).next(()=>t.qr.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(Le.EMPTY_BYTE_STRING,P.min()).withLastLimboFreeSnapshotVersion(P.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,i)),s=s.insert(h,f),function(y,m,w){return y.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,f,u)&&a.push(t.qr.updateTargetData(r,f))});let l=Lt(),c=x();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(HC(r,o,e.documentUpdates).next(u=>{l=u.us,c=u.cs})),!i.isEqual(P.min())){const u=t.qr.getLastRemoteSnapshotVersion(r).next(h=>t.qr.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(u)}return g.waitFor(a).next(()=>o.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(t.ts=s,r))}function HC(n,e,t){let i=x(),s=x();return t.forEach(r=>i=i.add(r)),e.getEntries(n,i).next(r=>{let o=Lt();return t.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(P.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):I("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{us:o,cs:s}})}function zC(n,e){const t=k(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function GC(n,e){const t=k(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return t.qr.getTargetData(i,e).next(r=>r?(s=r,g.resolve(s)):t.qr.allocateTargetId(i).next(o=>(s=new Gt(e,o,"TargetPurposeListen",i.currentSequenceNumber),t.qr.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=t.ts.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.ts=t.ts.insert(i.targetId,i),t.ns.set(e,i.targetId)),i})}async function ll(n,e,t){const i=k(n),s=i.ts.get(e),r=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ls(o))throw o;I("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.ts=i.ts.remove(e),i.ns.delete(s.target)}function Vh(n,e,t){const i=k(n);let s=P.min(),r=x();return i.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=k(l),d=h.ns.get(u);return d!==void 0?g.resolve(h.ts.get(d)):h.qr.getTargetData(c,u)}(i,o,dt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>i.es.getDocumentsMatchingQuery(o,e,t?s:P.min(),t?r:x())).next(a=>(KC(i,Uw(e),a),{documents:a,ls:r})))}function KC(n,e,t){let i=n.rs.get(e)||P.min();t.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),n.rs.set(e,i)}class xh{constructor(){this.activeTargetIds=Hw()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class QC{constructor(){this.eo=new xh,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,t,i){this.no[e]=t}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new xh,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class YC{ro(e){}shutdown(){}}/**
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
 */class Lh{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){I("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){I("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ar=null;function ya(){return ar===null?ar=function(){return 268435456+Math.round(2147483648*Math.random())}():ar++,"0x"+ar.toString(16)}/**
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
 */const XC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class JC{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
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
 */const Ce="WebChannelConnection";class ZC extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.mo=i+"://"+t.host,this.fo=`projects/${s}/databases/${r}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${r}`}get yo(){return!1}wo(t,i,s,r,o){const a=ya(),l=this.So(t,i);I("RestConnection",`Sending RPC '${t}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(c,r,o),this.Do(t,l,c,s).then(u=>(I("RestConnection",`Received RPC '${t}' ${a}: `,u),u),u=>{throw ai("RestConnection",`RPC '${t}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}Co(t,i,s,r,o,a){return this.wo(t,i,s,r,o)}bo(t,i,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+wi}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((r,o)=>t[o]=r),s&&s.headers.forEach((r,o)=>t[o]=r)}So(t,i){const s=XC[t];return`${this.mo}/v1/${i}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,t,i,s){const r=ya();return new Promise((o,a)=>{const l=new aw;l.setWithCredentials(!0),l.listenOnce(sw.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ma.NO_ERROR:const u=l.getResponseJson();I(Ce,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case ma.TIMEOUT:I(Ce,`RPC '${e}' ${r} timed out`),a(new T(_.DEADLINE_EXCEEDED,"Request time out"));break;case ma.HTTP_ERROR:const h=l.getStatus();if(I(Ce,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const p=function(m){const w=m.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(w)>=0?w:_.UNKNOWN}(f.status);a(new T(p,f.message))}else a(new T(_.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new T(_.UNAVAILABLE,"Connection failed."));break;default:R()}}finally{I(Ce,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(s);I(Ce,`RPC '${e}' ${r} sending request:`,s),l.send(t,"POST",c,i,15)})}vo(e,t,i){const s=ya(),r=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=nw(),a=iw(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new ow({})),this.bo(l.initMessageHeaders,t,i),l.encodeInitMessageHeaders=!0;const u=r.join("");I(Ce,`Creating RPC '${e}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const p=new JC({co:m=>{f?I(Ce,`Not sending because RPC '${e}' stream ${s} is closed:`,m):(d||(I(Ce,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),I(Ce,`RPC '${e}' stream ${s} sending:`,m),h.send(m))},lo:()=>h.close()}),y=(m,w,N)=>{m.listen(w,F=>{try{N(F)}catch(q){setTimeout(()=>{throw q},0)}})};return y(h,sr.EventType.OPEN,()=>{f||I(Ce,`RPC '${e}' stream ${s} transport opened.`)}),y(h,sr.EventType.CLOSE,()=>{f||(f=!0,I(Ce,`RPC '${e}' stream ${s} transport closed`),p.Ro())}),y(h,sr.EventType.ERROR,m=>{f||(f=!0,ai(Ce,`RPC '${e}' stream ${s} transport errored:`,m),p.Ro(new T(_.UNAVAILABLE,"The operation could not be completed")))}),y(h,sr.EventType.MESSAGE,m=>{var w;if(!f){const N=m.data[0];J(!!N);const F=N,q=F.error||((w=F[0])===null||w===void 0?void 0:w.error);if(q){I(Ce,`RPC '${e}' stream ${s} received error:`,q);const Ie=q.status;let _e=function(we){const Ct=ie[we];if(Ct!==void 0)return T_(Ct)}(Ie),G=q.message;_e===void 0&&(_e=_.INTERNAL,G="Unknown error status: "+Ie+" with message "+q.message),f=!0,p.Ro(new T(_e,G)),h.close()}else I(Ce,`RPC '${e}' stream ${s} received:`,N),p.Vo(N)}}),y(a,rw.STAT_EVENT,m=>{m.stat===fh.PROXY?I(Ce,`RPC '${e}' stream ${s} detected buffering proxy`):m.stat===fh.NOPROXY&&I(Ce,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{p.Ao()},0),p}}function va(){return typeof document<"u"?document:null}/**
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
 */function xo(n){return new uC(n,!0)}/**
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
 */class D_{constructor(e,t,i=1e3,s=1.5,r=6e4){this.si=e,this.timerId=t,this.Fo=i,this.Mo=s,this.xo=r,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const t=Math.floor(this.Oo+this.qo()),i=Math.max(0,Date.now()-this.Bo),s=Math.max(0,t-i);s>0&&I("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
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
 */class O_{constructor(e,t,i,s,r,o,a,l){this.si=e,this.Ko=i,this.$o=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new D_(e,t)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,t){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():t&&t.code===_.RESOURCE_EXHAUSTED?(xt(t.toString()),xt("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):t&&t.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(t)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),t=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Uo===t&&this.s_(i,s)},i=>{e(()=>{const s=new T(_.UNKNOWN,"Fetching auth token failed: "+i.message);return this.o_(s)})})}s_(e,t){const i=this.i_(this.Uo);this.stream=this.__(e,t),this.stream.ho(()=>{i(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{i(()=>this.o_(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return I("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return t=>{this.si.enqueueAndForget(()=>this.Uo===e?t():(I("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eA extends O_{constructor(e,t,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,o),this.serializer=r}__(e,t){return this.connection.vo("Listen",e,t)}onMessage(e){this.zo.reset();const t=fC(this.serializer,e),i=function(r){if(!("targetChange"in r))return P.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?P.min():o.readTime?ft(o.readTime):P.min()}(e);return this.listener.a_(t,i)}u_(e){const t={};t.database=al(this.serializer),t.addTarget=function(r,o){let a;const l=o.target;if(a=tl(l)?{documents:mC(r,l)}:{query:gC(r,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=C_(r,o.resumeToken);const c=sl(r,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(P.min())>0){a.readTime=$r(r,o.snapshotVersion.toTimestamp());const c=sl(r,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const i=vC(this.serializer,e);i&&(t.labels=i),this.e_(t)}c_(e){const t={};t.database=al(this.serializer),t.removeTarget=e,this.e_(t)}}class tA extends O_{constructor(e,t,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,s,o),this.serializer=r,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,t){return this.connection.vo("Write",e,t)}onMessage(e){if(J(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const t=_C(e.writeResults,e.commitTime),i=ft(e.commitTime);return this.listener.I_(i,t)}return J(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=al(this.serializer),this.e_(e)}P_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>pC(this.serializer,i))};this.e_(t)}}/**
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
 */class nA extends class{}{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new T(_.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,t,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.wo(e,t,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new T(_.UNKNOWN,s.toString())})}Co(e,t,i,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Co(e,t,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new T(_.UNKNOWN,r.toString())})}terminate(){this.d_=!0}}class iA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(xt(t),this.f_=!1):I("OnlineStateTracker",t)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
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
 */class sA{constructor(e,t,i,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=r,this.F_.ro(o=>{i.enqueueAndForget(async()=>{Mn(this)&&(I("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=k(l);c.C_.add(4),await qs(c),c.M_.set("Unknown"),c.C_.delete(4),await Lo(c)}(this))})}),this.M_=new iA(i,s)}}async function Lo(n){if(Mn(n))for(const e of n.v_)await e(!0)}async function qs(n){for(const e of n.v_)await e(!1)}function M_(n,e){const t=k(n);t.D_.has(e.targetId)||(t.D_.set(e.targetId,e),Ac(t)?Cc(t):Ai(t).Ho()&&wc(t,e))}function V_(n,e){const t=k(n),i=Ai(t);t.D_.delete(e),i.Ho()&&x_(t,e),t.D_.size===0&&(i.Ho()?i.Zo():Mn(t)&&t.M_.set("Unknown"))}function wc(n,e){if(n.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(P.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ai(n).u_(e)}function x_(n,e){n.x_.Oe(e),Ai(n).c_(e)}function Cc(n){n.x_=new oC({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>n.D_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),Ai(n).start(),n.M_.g_()}function Ac(n){return Mn(n)&&!Ai(n).jo()&&n.D_.size>0}function Mn(n){return k(n).C_.size===0}function L_(n){n.x_=void 0}async function rA(n){n.D_.forEach((e,t)=>{wc(n,e)})}async function oA(n,e){L_(n),Ac(n)?(n.M_.w_(e),Cc(n)):n.M_.set("Unknown")}async function aA(n,e,t){if(n.M_.set("Online"),e instanceof w_&&e.state===2&&e.cause)try{await async function(s,r){const o=r.cause;for(const a of r.targetIds)s.D_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.D_.delete(a),s.x_.removeTarget(a))}(n,e)}catch(i){I("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await jr(n,i)}else if(e instanceof mr?n.x_.$e(e):e instanceof I_?n.x_.Je(e):n.x_.Ge(e),!t.isEqual(P.min()))try{const i=await N_(n.localStore);t.compareTo(i)>=0&&await function(r,o){const a=r.x_.it(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=r.D_.get(c);u&&r.D_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=r.D_.get(l);if(!u)return;r.D_.set(l,u.withResumeToken(Le.EMPTY_BYTE_STRING,u.snapshotVersion)),x_(r,l);const h=new Gt(u.target,l,c,u.sequenceNumber);wc(r,h)}),r.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(i){I("RemoteStore","Failed to raise snapshot:",i),await jr(n,i)}}async function jr(n,e,t){if(!Ls(e))throw e;n.C_.add(1),await qs(n),n.M_.set("Offline"),t||(t=()=>N_(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{I("RemoteStore","Retrying IndexedDB access"),await t(),n.C_.delete(1),await Lo(n)})}function F_(n,e){return e().catch(t=>jr(n,t,e))}async function Fo(n){const e=k(n),t=tn(e);let i=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;lA(e);)try{const s=await zC(e.localStore,i);if(s===null){e.b_.length===0&&t.Zo();break}i=s.batchId,cA(e,s)}catch(s){await jr(e,s)}U_(e)&&B_(e)}function lA(n){return Mn(n)&&n.b_.length<10}function cA(n,e){n.b_.push(e);const t=tn(n);t.Ho()&&t.h_&&t.P_(e.mutations)}function U_(n){return Mn(n)&&!tn(n).jo()&&n.b_.length>0}function B_(n){tn(n).start()}async function uA(n){tn(n).E_()}async function hA(n){const e=tn(n);for(const t of n.b_)e.P_(t.mutations)}async function dA(n,e,t){const i=n.b_.shift(),s=gc.from(i,e,t);await F_(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Fo(n)}async function fA(n,e){e&&tn(n).h_&&await async function(i,s){if(function(o){return iC(o)&&o!==_.ABORTED}(s.code)){const r=i.b_.shift();tn(i).Yo(),await F_(i,()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Fo(i)}}(n,e),U_(n)&&B_(n)}async function Fh(n,e){const t=k(n);t.asyncQueue.verifyOperationInProgress(),I("RemoteStore","RemoteStore received new credentials");const i=Mn(t);t.C_.add(3),await qs(t),i&&t.M_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.C_.delete(3),await Lo(t)}async function pA(n,e){const t=k(n);e?(t.C_.delete(2),await Lo(t)):e||(t.C_.add(2),await qs(t),t.M_.set("Unknown"))}function Ai(n){return n.O_||(n.O_=function(t,i,s){const r=k(t);return r.A_(),new eA(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(n.datastore,n.asyncQueue,{ho:rA.bind(null,n),Io:oA.bind(null,n),a_:aA.bind(null,n)}),n.v_.push(async e=>{e?(n.O_.Yo(),Ac(n)?Cc(n):n.M_.set("Unknown")):(await n.O_.stop(),L_(n))})),n.O_}function tn(n){return n.N_||(n.N_=function(t,i,s){const r=k(t);return r.A_(),new tA(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(n.datastore,n.asyncQueue,{ho:uA.bind(null,n),Io:fA.bind(null,n),T_:hA.bind(null,n),I_:dA.bind(null,n)}),n.v_.push(async e=>{e?(n.N_.Yo(),await Fo(n)):(await n.N_.stop(),n.b_.length>0&&(I("RemoteStore",`Stopping write stream with ${n.b_.length} pending writes`),n.b_=[]))})),n.N_}/**
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
 */class Rc{constructor(e,t,i,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,r){const o=Date.now()+i,a=new Rc(e,t,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new T(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sc(n,e){if(xt("AsyncQueue",`${e}: ${n}`),Ls(n))return new T(_.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Jn{constructor(e){this.comparator=e?(t,i)=>e(t,i)||C.comparator(t.key,i.key):(t,i)=>C.comparator(t.key,i.key),this.keyedMap=Li(),this.sortedSet=new oe(this.comparator)}static emptySet(e){return new Jn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Jn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Jn;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class Uh{constructor(){this.B_=new oe(C.comparator)}track(e){const t=e.doc.key,i=this.B_.get(t);i?e.type!==0&&i.type===3?this.B_=this.B_.insert(t,e):e.type===3&&i.type!==1?this.B_=this.B_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.B_=this.B_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.B_=this.B_.remove(t):e.type===1&&i.type===2?this.B_=this.B_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):R():this.B_=this.B_.insert(t,e)}L_(){const e=[];return this.B_.inorderTraversal((t,i)=>{e.push(i)}),e}}class di{constructor(e,t,i,s,r,o,a,l,c){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,t,i,s,r){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new di(e,t,Jn.emptySet(t),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&No(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
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
 */class _A{constructor(){this.k_=void 0,this.listeners=[]}}class mA{constructor(){this.queries=new Ci(e=>l_(e),No),this.onlineState="Unknown",this.q_=new Set}}async function Pc(n,e){const t=k(n),i=e.query;let s=!1,r=t.queries.get(i);if(r||(s=!0,r=new _A),s)try{r.k_=await t.onListen(i)}catch(o){const a=Sc(o,`Initialization of query '${qn(e.query)}' failed`);return void e.onError(a)}t.queries.set(i,r),r.listeners.push(e),e.Q_(t.onlineState),r.k_&&e.K_(r.k_)&&kc(t)}async function bc(n,e){const t=k(n),i=e.query;let s=!1;const r=t.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return t.queries.delete(i),t.onUnlisten(i)}function gA(n,e){const t=k(n);let i=!1;for(const s of e){const r=s.query,o=t.queries.get(r);if(o){for(const a of o.listeners)a.K_(s)&&(i=!0);o.k_=s}}i&&kc(t)}function yA(n,e,t){const i=k(n),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(t);i.queries.delete(e)}function kc(n){n.q_.forEach(e=>{e.next()})}class Nc{constructor(e,t,i){this.query=e,this.U_=t,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=i||{}}K_(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new di(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.W_?this.z_(e)&&(this.U_.next(e),t=!0):this.j_(e,this.onlineState)&&(this.H_(e),t=!0),this.G_=e,t}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let t=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),t=!0),t}j_(e,t){if(!e.fromCache)return!0;const i=t!=="Offline";return(!this.options.J_||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const t=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}H_(e){e=di.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
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
 */class q_{constructor(e){this.key=e}}class $_{constructor(e){this.key=e}}class vA{constructor(e,t){this.query=e,this.ia=t,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=x(),this.mutatedKeys=x(),this._a=c_(e),this.aa=new Jn(this._a)}get ua(){return this.ia}ca(e,t){const i=t?t.la:new Uh,s=t?t.aa:this.aa;let r=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=Do(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let m=!1;d&&f?d.data.isEqual(f.data)?p!==y&&(i.track({type:3,doc:f}),m=!0):this.ha(d,f)||(i.track({type:2,doc:f}),m=!0,(l&&this._a(f,l)>0||c&&this._a(f,c)<0)&&(a=!0)):!d&&f?(i.track({type:0,doc:f}),m=!0):d&&!f&&(i.track({type:1,doc:d}),m=!0,(l||c)&&(a=!0)),m&&(f?(o=o.add(f),r=y?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),i.track({type:1,doc:u})}return{aa:o,la:i,Zi:a,mutatedKeys:r}}ha(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i){const s=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const r=e.la.L_();r.sort((c,u)=>function(d,f){const p=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return R()}};return p(d)-p(f)}(c.type,u.type)||this._a(c.doc,u.doc)),this.Pa(i);const o=t?this.Ia():[],a=this.oa.size===0&&this.current?1:0,l=a!==this.sa;return this.sa=a,r.length!==0||l?{snapshot:new di(this.query,e.aa,s,r,e.mutatedKeys,a===0,l,!1,!!i&&i.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Uh,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(t=>this.ia=this.ia.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.ia=this.ia.delete(t)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=x(),this.aa.forEach(i=>{this.Ea(i.key)&&(this.oa=this.oa.add(i.key))});const t=[];return e.forEach(i=>{this.oa.has(i)||t.push(new $_(i))}),this.oa.forEach(i=>{e.has(i)||t.push(new q_(i))}),t}da(e){this.ia=e.ls,this.oa=x();const t=this.ca(e.documents);return this.applyChanges(t,!0)}Aa(){return di.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class EA{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class TA{constructor(e){this.key=e,this.Ra=!1}}class IA{constructor(e,t,i,s,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Ci(a=>l_(a),No),this.fa=new Map,this.ga=new Set,this.pa=new oe(C.comparator),this.ya=new Map,this.wa=new Ec,this.Sa={},this.ba=new Map,this.Da=hi.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function wA(n,e){const t=OA(n);let i,s;const r=t.ma.get(e);if(r)i=r.targetId,t.sharedClientState.addLocalQueryTarget(i),s=r.view.Aa();else{const o=await GC(t.localStore,dt(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await CA(t,e,i,a==="current",o.resumeToken),t.isPrimaryClient&&M_(t.remoteStore,o)}return s}async function CA(n,e,t,i,s){n.va=(h,d,f)=>async function(y,m,w,N){let F=m.view.ca(w);F.Zi&&(F=await Vh(y.localStore,m.query,!1).then(({documents:_e})=>m.view.ca(_e,F)));const q=N&&N.targetChanges.get(m.targetId),Ie=m.view.applyChanges(F,y.isPrimaryClient,q);return qh(y,m.targetId,Ie.Ta),Ie.snapshot}(n,h,d,f);const r=await Vh(n.localStore,e,!0),o=new vA(e,r.ls),a=o.ca(r.documents),l=Bs.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",s),c=o.applyChanges(a,n.isPrimaryClient,l);qh(n,t,c.Ta);const u=new EA(e,t,o);return n.ma.set(e,u),n.fa.has(t)?n.fa.get(t).push(e):n.fa.set(t,[e]),c.snapshot}async function AA(n,e){const t=k(n),i=t.ma.get(e),s=t.fa.get(i.targetId);if(s.length>1)return t.fa.set(i.targetId,s.filter(r=>!No(r,e))),void t.ma.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(i.targetId),t.sharedClientState.isActiveQueryTarget(i.targetId)||await ll(t.localStore,i.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(i.targetId),V_(t.remoteStore,i.targetId),cl(t,i.targetId)}).catch(xs)):(cl(t,i.targetId),await ll(t.localStore,i.targetId,!0))}async function RA(n,e,t){const i=MA(n);try{const s=await function(o,a){const l=k(o),c=le.now(),u=a.reduce((f,p)=>f.add(p.key),x());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let p=Lt(),y=x();return l.ss.getEntries(f,u).next(m=>{p=m,p.forEach((w,N)=>{N.isValidDocument()||(y=y.add(w))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,p)).next(m=>{h=m;const w=[];for(const N of a){const F=Jw(N,h.get(N.key).overlayedDocument);F!=null&&w.push(new hn(N.key,F,e_(F.value.mapValue),Je.exists(!0)))}return l.mutationQueue.addMutationBatch(f,c,w,a)}).next(m=>{d=m;const w=m.applyToLocalDocumentSet(h,y);return l.documentOverlayCache.saveOverlays(f,m.batchId,w)})}).then(()=>({batchId:d.batchId,changes:h_(h)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.Sa[o.currentUser.toKey()];c||(c=new oe($)),c=c.insert(a,l),o.Sa[o.currentUser.toKey()]=c}(i,s.batchId,t),await $s(i,s.changes),await Fo(i.remoteStore)}catch(s){const r=Sc(s,"Failed to persist write");t.reject(r)}}async function j_(n,e){const t=k(n);try{const i=await WC(t.localStore,e);e.targetChanges.forEach((s,r)=>{const o=t.ya.get(r);o&&(J(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ra=!0:s.modifiedDocuments.size>0?J(o.Ra):s.removedDocuments.size>0&&(J(o.Ra),o.Ra=!1))}),await $s(t,i,e)}catch(i){await xs(i)}}function Bh(n,e,t){const i=k(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.ma.forEach((r,o)=>{const a=o.view.Q_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=k(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.Q_(a)&&(c=!0)}),c&&kc(l)}(i.eventManager,e),s.length&&i.Va.a_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function SA(n,e,t){const i=k(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.ya.get(e),r=s&&s.key;if(r){let o=new oe(C.comparator);o=o.insert(r,Re.newNoDocument(r,P.min()));const a=x().add(r),l=new Vo(P.min(),new Map,new oe($),o,a);await j_(i,l),i.pa=i.pa.remove(r),i.ya.delete(e),Dc(i)}else await ll(i.localStore,e,!1).then(()=>cl(i,e,t)).catch(xs)}async function PA(n,e){const t=k(n),i=e.batch.batchId;try{const s=await jC(t.localStore,e);H_(t,i,null),W_(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await $s(t,s)}catch(s){await xs(s)}}async function bA(n,e,t){const i=k(n);try{const s=await function(o,a){const l=k(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(J(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(i.localStore,e);H_(i,e,t),W_(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await $s(i,s)}catch(s){await xs(s)}}function W_(n,e){(n.ba.get(e)||[]).forEach(t=>{t.resolve()}),n.ba.delete(e)}function H_(n,e,t){const i=k(n);let s=i.Sa[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(t?r.reject(t):r.resolve(),s=s.remove(e)),i.Sa[i.currentUser.toKey()]=s}}function cl(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.fa.get(e))n.ma.delete(i),t&&n.Va.Fa(i,t);n.fa.delete(e),n.isPrimaryClient&&n.wa.Rr(e).forEach(i=>{n.wa.containsKey(i)||z_(n,i)})}function z_(n,e){n.ga.delete(e.path.canonicalString());const t=n.pa.get(e);t!==null&&(V_(n.remoteStore,t),n.pa=n.pa.remove(e),n.ya.delete(t),Dc(n))}function qh(n,e,t){for(const i of t)i instanceof q_?(n.wa.addReference(i.key,e),kA(n,i)):i instanceof $_?(I("SyncEngine","Document no longer in limbo: "+i.key),n.wa.removeReference(i.key,e),n.wa.containsKey(i.key)||z_(n,i.key)):R()}function kA(n,e){const t=e.key,i=t.path.canonicalString();n.pa.get(t)||n.ga.has(i)||(I("SyncEngine","New document in limbo: "+t),n.ga.add(i),Dc(n))}function Dc(n){for(;n.ga.size>0&&n.pa.size<n.maxConcurrentLimboResolutions;){const e=n.ga.values().next().value;n.ga.delete(e);const t=new C(X.fromString(e)),i=n.Da.next();n.ya.set(i,new TA(t)),n.pa=n.pa.insert(t,i),M_(n.remoteStore,new Gt(dt(ko(t.path)),i,"TargetPurposeLimboResolution",uc._e))}}async function $s(n,e,t){const i=k(n),s=[],r=[],o=[];i.ma.isEmpty()||(i.ma.forEach((a,l)=>{o.push(i.va(l,e,t).then(c=>{if((c||t)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=Ic.Qi(l.targetId,c);r.push(u)}}))}),await Promise.all(o),i.Va.a_(s),await async function(l,c){const u=k(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>g.forEach(c,d=>g.forEach(d.ki,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>g.forEach(d.qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Ls(h))throw h;I("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.ts.get(d),p=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(p);u.ts=u.ts.insert(d,y)}}}(i.localStore,r))}async function NA(n,e){const t=k(n);if(!t.currentUser.isEqual(e)){I("SyncEngine","User change. New user:",e.toKey());const i=await k_(t.localStore,e);t.currentUser=e,function(r,o){r.ba.forEach(a=>{a.forEach(l=>{l.reject(new T(_.CANCELLED,o))})}),r.ba.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await $s(t,i._s)}}function DA(n,e){const t=k(n),i=t.ya.get(e);if(i&&i.Ra)return x().add(i.key);{let s=x();const r=t.fa.get(e);if(!r)return s;for(const o of r){const a=t.ma.get(o);s=s.unionWith(a.view.ua)}return s}}function OA(n){const e=k(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=j_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=DA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=SA.bind(null,e),e.Va.a_=gA.bind(null,e.eventManager),e.Va.Fa=yA.bind(null,e.eventManager),e}function MA(n){const e=k(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=PA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bA.bind(null,e),e}class $h{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=xo(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return $C(this.persistence,new BC,e.initialUser,this.serializer)}createPersistence(e){return new LC(Tc.jr,this.serializer)}createSharedClientState(e){return new QC}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class VA{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Bh(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=NA.bind(null,this.syncEngine),await pA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new mA}()}createDatastore(e){const t=xo(e.databaseInfo.databaseId),i=function(r){return new ZC(r)}(e.databaseInfo);return function(r,o,a,l){return new nA(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,s,r,o,a){return new sA(i,s,r,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>Bh(this.syncEngine,t,0),function(){return Lh.D()?new Lh:new YC}())}createSyncEngine(e,t){return function(s,r,o,a,l,c,u){const h=new IA(s,r,o,a,l,c);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(t){const i=k(t);I("RemoteStore","RemoteStore shutting down."),i.C_.add(5),await qs(i),i.F_.shutdown(),i.M_.set("Unknown")}(this.remoteStore)}}/**
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
 */class Oc{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):xt("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class xA{constructor(e,t,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=s,this.user=Ae.UNAUTHENTICATED,this.clientId=Xp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{I("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(I("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Sc(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Ea(n,e){n.asyncQueue.verifyOperationInProgress(),I("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await k_(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function jh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await FA(n);I("FirestoreClient","Initializing OnlineComponentProvider");const i=await n.getConfiguration();await e.initialize(t,i),n.setCredentialChangeListener(s=>Fh(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,r)=>Fh(e.remoteStore,r)),n._onlineComponents=e}function LA(n){return n.name==="FirebaseError"?n.code===_.FAILED_PRECONDITION||n.code===_.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function FA(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){I("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ea(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!LA(t))throw t;ai("Error using user provided cache. Falling back to memory cache: "+t),await Ea(n,new $h)}}else I("FirestoreClient","Using default OfflineComponentProvider"),await Ea(n,new $h);return n._offlineComponents}async function G_(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(I("FirestoreClient","Using user provided OnlineComponentProvider"),await jh(n,n._uninitializedComponentsProvider._online)):(I("FirestoreClient","Using default OnlineComponentProvider"),await jh(n,new VA))),n._onlineComponents}function UA(n){return G_(n).then(e=>e.syncEngine)}async function Wr(n){const e=await G_(n),t=e.eventManager;return t.onListen=wA.bind(null,e.syncEngine),t.onUnlisten=AA.bind(null,e.syncEngine),t}function BA(n,e,t={}){const i=new kt;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new Oc({next:d=>{o.enqueueAndForget(()=>bc(r,h));const f=d.docs.has(a);!f&&d.fromCache?c.reject(new T(_.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?c.reject(new T(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new Nc(ko(a.path),u,{includeMetadataChanges:!0,J_:!0});return Pc(r,h)}(await Wr(n),n.asyncQueue,e,t,i)),i.promise}function qA(n,e,t={}){const i=new kt;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new Oc({next:d=>{o.enqueueAndForget(()=>bc(r,h)),d.fromCache&&l.source==="server"?c.reject(new T(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new Nc(a,u,{includeMetadataChanges:!0,J_:!0});return Pc(r,h)}(await Wr(n),n.asyncQueue,e,t,i)),i.promise}/**
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
 */function K_(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Wh=new Map;/**
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
 */function Q_(n,e,t){if(!t)throw new T(_.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function $A(n,e,t,i){if(e===!0&&i===!0)throw new T(_.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Hh(n){if(!C.isDocumentKey(n))throw new T(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function zh(n){if(C.isDocumentKey(n))throw new T(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Uo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":R()}function je(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new T(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Uo(n);throw new T(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class Gh{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new T(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new T(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$A("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=K_((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new T(_.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new T(_.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new T(_.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Bo{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new T(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new T(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gh(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new cw;switch(i.type){case"firstParty":return new fw(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new T(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=Wh.get(t);i&&(I("ComponentProvider","Removing Datastore"),Wh.delete(t),i.terminate())}(this),Promise.resolve()}}function jA(n,e,t,i={}){var s;const r=(n=je(n,Bo))._getSettings(),o=`${e}:${t}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&ai("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let a,l;if(typeof i.mockUserToken=="string")a=i.mockUserToken,l=Ae.MOCK_USER;else{a=Pl(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new T(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ae(c)}n._authCredentials=new uw(new Yp(a,l))}}/**
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
 */class Vn{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Vn(this.firestore,e,this._query)}}class De{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new De(this.firestore,e,this._key)}}class Xt extends Vn{constructor(e,t,i){super(e,t,ko(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new De(this.firestore,null,new C(e))}withConverter(e){return new Xt(this.firestore,e,this._path)}}function Cb(n,e,...t){if(n=ee(n),Q_("collection","path",e),n instanceof Bo){const i=X.fromString(e,...t);return zh(i),new Xt(n,null,i)}{if(!(n instanceof De||n instanceof Xt))throw new T(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(X.fromString(e,...t));return zh(i),new Xt(n.firestore,null,i)}}function WA(n,e,...t){if(n=ee(n),arguments.length===1&&(e=Xp.newId()),Q_("doc","path",e),n instanceof Bo){const i=X.fromString(e,...t);return Hh(i),new De(n,null,new C(i))}{if(!(n instanceof De||n instanceof Xt))throw new T(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(X.fromString(e,...t));return Hh(i),new De(n.firestore,n instanceof Xt?n.converter:null,new C(i))}}/**
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
 */class HA{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new D_(this,"async_queue_retry"),this.iu=()=>{const t=va();t&&I("AsyncQueue","Visibility state changed to "+t.visibilityState),this.zo.Qo()};const e=va();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const t=va();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const t=new kt;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Ls(e))throw e;I("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const t=this.Ja.then(()=>(this.tu=!0,e().catch(i=>{this.eu=i,this.tu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw xt("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.tu=!1,i))));return this.Ja=t,t}enqueueAfterDelay(e,t,i){this.su(),this.ru.indexOf(e)>-1&&(t=0);const s=Rc.createAndSchedule(this,e,t,i,r=>this.au(r));return this.Xa.push(s),s}su(){this.eu&&R()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const t of this.Xa)if(t.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.Xa)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const t=this.Xa.indexOf(e);this.Xa.splice(t,1)}}function Kh(n){return function(t,i){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1}(n,["next","error","complete"])}class Ft extends Bo{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=function(){return new HA}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Y_(this),this._firestoreClient.terminate()}}function zA(n,e){const t=typeof n=="object"?n:ws(),i=typeof n=="string"?n:e||"(default)",s=vi(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=ao("firestore");r&&jA(s,...r)}return s}function qo(n){return n._firestoreClient||Y_(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Y_(n){var e,t,i;const s=n._freezeSettings(),r=function(a,l,c,u){return new Aw(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,K_(u.experimentalLongPollingOptions),u.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new xA(n._authCredentials,n._appCheckCredentials,n._queue,r),!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class fi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fi(Le.fromBase64String(e))}catch(t){throw new T(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new fi(Le.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class $o{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new T(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Mc{constructor(e){this._methodName=e}}/**
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
 */class Vc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new T(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new T(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return $(this._lat,e._lat)||$(this._long,e._long)}}/**
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
 */const GA=/^__.*__$/;class KA{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new hn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Us(e,this.data,t,this.fieldTransforms)}}class X_{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new hn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function J_(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw R()}}class xc{constructor(e,t,i,s,r,o){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Pu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new xc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Tu({path:i,du:!1});return s.Au(e),s}Ru(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Tu({path:i,du:!1});return s.Pu(),s}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return Hr(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(J_(this.Iu)&&GA.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class QA{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||xo(e)}pu(e,t,i,s=!1){return new xc({Iu:e,methodName:t,gu:i,path:ye.emptyPath(),du:!1,fu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jo(n){const e=n._freezeSettings(),t=xo(n._databaseId);return new QA(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Z_(n,e,t,i,s,r={}){const o=n.pu(r.merge||r.mergeFields?2:0,e,t,s);Lc("Data must be an object, but it was:",o,i);const a=em(i,o);let l,c;if(r.merge)l=new He(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=ul(e,h,t);if(!o.contains(d))throw new T(_.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);nm(u,d)||u.push(d)}l=new He(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new KA(new Ue(a),l,c)}class Wo extends Mc{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Wo}}function YA(n,e,t,i){const s=n.pu(1,e,t);Lc("Data must be an object, but it was:",s,i);const r=[],o=Ue.empty();On(i,(l,c)=>{const u=Fc(e,l,t);c=ee(c);const h=s.Ru(u);if(c instanceof Wo)r.push(u);else{const d=js(c,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new He(r);return new X_(o,a,s.fieldTransforms)}function XA(n,e,t,i,s,r){const o=n.pu(1,e,t),a=[ul(e,i,t)],l=[s];if(r.length%2!=0)throw new T(_.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(ul(e,r[d])),l.push(r[d+1]);const c=[],u=Ue.empty();for(let d=a.length-1;d>=0;--d)if(!nm(c,a[d])){const f=a[d];let p=l[d];p=ee(p);const y=o.Ru(f);if(p instanceof Wo)c.push(f);else{const m=js(p,y);m!=null&&(c.push(f),u.set(f,m))}}const h=new He(c);return new X_(u,h,o.fieldTransforms)}function JA(n,e,t,i=!1){return js(t,n.pu(i?4:3,e))}function js(n,e){if(tm(n=ee(n)))return Lc("Unsupported field value:",e,n),em(n,e);if(n instanceof Mc)return function(i,s){if(!J_(s.Iu))throw s.mu(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.mu(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(i,s){const r=[];let o=0;for(const a of i){let l=js(a,s.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),o++}return{arrayValue:{values:r}}}(n,e)}return function(i,s){if((i=ee(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return zw(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=le.fromDate(i);return{timestampValue:$r(s.serializer,r)}}if(i instanceof le){const r=new le(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:$r(s.serializer,r)}}if(i instanceof Vc)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof fi)return{bytesValue:C_(s.serializer,i._byteString)};if(i instanceof De){const r=s.databaseId,o=i.firestore._databaseId;if(!o.isEqual(r))throw s.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:vc(i.firestore._databaseId||s.databaseId,i._key.path)}}throw s.mu(`Unsupported field value: ${Uo(i)}`)}(n,e)}function em(n,e){const t={};return Jp(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):On(n,(i,s)=>{const r=js(s,e.Eu(i));r!=null&&(t[i]=r)}),{mapValue:{fields:t}}}function tm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof le||n instanceof Vc||n instanceof fi||n instanceof De||n instanceof Mc)}function Lc(n,e,t){if(!tm(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const i=Uo(t);throw i==="an object"?e.mu(n+" a custom object"):e.mu(n+" "+i)}}function ul(n,e,t){if((e=ee(e))instanceof $o)return e._internalPath;if(typeof e=="string")return Fc(n,e);throw Hr("Field path arguments must be of type string or ",n,!1,void 0,t)}const ZA=new RegExp("[~\\*/\\[\\]]");function Fc(n,e,t){if(e.search(ZA)>=0)throw Hr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new $o(...e.split("."))._internalPath}catch{throw Hr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Hr(n,e,t,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new T(_.INVALID_ARGUMENT,a+n+l)}function nm(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class im{constructor(e,t,i,s,r){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new De(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new e0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Uc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class e0 extends im{data(){return super.data()}}function Uc(n,e){return typeof e=="string"?Fc(n,e):e instanceof $o?e._internalPath:e._delegate._internalPath}/**
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
 */function sm(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new T(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bc{}class t0 extends Bc{}function Ab(n,e,...t){let i=[];e instanceof Bc&&i.push(e),i=i.concat(t),function(r){const o=r.filter(l=>l instanceof qc).length,a=r.filter(l=>l instanceof Ho).length;if(o>1||o>0&&a>0)throw new T(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const s of i)n=s._apply(n);return n}class Ho extends t0{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new Ho(e,t,i)}_apply(e){const t=this._parse(e);return rm(e._query,t),new Vn(e.firestore,e.converter,nl(e._query,t))}_parse(e){const t=jo(e.firestore);return function(r,o,a,l,c,u,h){let d;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new T(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Yh(h,u);const f=[];for(const p of h)f.push(Qh(l,r,p));d={arrayValue:{values:f}}}else d=Qh(l,r,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Yh(h,u),d=JA(a,o,h,u==="in"||u==="not-in");return re.create(c,u,d)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Rb(n,e,t){const i=e,s=Uc("where",n);return Ho._create(s,i,t)}class qc extends Bc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new qc(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:rt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,r){let o=s;const a=r.getFlattenedFilters();for(const l of a)rm(o,l),o=nl(o,l)}(e._query,t),new Vn(e.firestore,e.converter,nl(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Qh(n,e,t){if(typeof(t=ee(t))=="string"){if(t==="")throw new T(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!a_(e)&&t.indexOf("/")!==-1)throw new T(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(X.fromString(t));if(!C.isDocumentKey(i))throw new T(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return yh(n,new C(i))}if(t instanceof De)return yh(n,t._key);throw new T(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Uo(t)}.`)}function Yh(n,e){if(!Array.isArray(n)||n.length===0)throw new T(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function rm(n,e){const t=function(s,r){for(const o of s)for(const a of o.getFlattenedFilters())if(r.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new T(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new T(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class n0{convertValue(e,t="none"){switch(Rn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(An(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw R()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return On(e,(s,r)=>{i[s]=this.convertValue(r,t)}),i}convertGeoPoint(e){return new Vc(se(e.latitude),se(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=dc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(us(e));default:return null}}convertTimestamp(e){const t=en(e);return new le(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=X.fromString(e);J(b_(i));const s=new hs(i.get(1),i.get(3)),r=new C(i.popFirst(5));return s.isEqual(t)||xt(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 */function om(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}/**
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
 */class Ui{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class am extends im{constructor(e,t,i,s,r,o){super(e,t,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new gr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Uc("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class gr extends am{data(e={}){return super.data(e)}}class lm{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Ui(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new gr(this._firestore,this._userDataWriter,i.key,i,new Ui(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new T(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new gr(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ui(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const l=new gr(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ui(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:i0(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function i0(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return R()}}/**
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
 */function Sb(n){n=je(n,De);const e=je(n.firestore,Ft);return BA(qo(e),n._key).then(t=>cm(e,n,t))}class $c extends n0{constructor(e){super(),this.firestore=e}convertBytes(e){return new fi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new De(this.firestore,null,t)}}function Pb(n){n=je(n,Vn);const e=je(n.firestore,Ft),t=qo(e),i=new $c(e);return sm(n._query),qA(t,n._query).then(s=>new lm(e,i,n,s))}function bb(n,e,t){n=je(n,De);const i=je(n.firestore,Ft),s=om(n.converter,e,t);return zo(i,[Z_(jo(i),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Je.none())])}function kb(n,e,t,...i){n=je(n,De);const s=je(n.firestore,Ft),r=jo(s);let o;return o=typeof(e=ee(e))=="string"||e instanceof $o?XA(r,"updateDoc",n._key,e,t,i):YA(r,"updateDoc",n._key,e),zo(s,[o.toMutation(n._key,Je.exists(!0))])}function Nb(n){return zo(je(n.firestore,Ft),[new mc(n._key,Je.none())])}function Db(n,e){const t=je(n.firestore,Ft),i=WA(n),s=om(n.converter,e);return zo(t,[Z_(jo(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,Je.exists(!1))]).then(()=>i)}function Ob(n,...e){var t,i,s;n=ee(n);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Kh(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Kh(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,c,u;if(n instanceof De)c=je(n.firestore,Ft),u=ko(n._key.path),l={next:h=>{e[o]&&e[o](cm(c,n,h))},error:e[o+1],complete:e[o+2]};else{const h=je(n,Vn);c=je(h.firestore,Ft),u=h._query;const d=new $c(c);l={next:f=>{e[o]&&e[o](new lm(c,d,h,f))},error:e[o+1],complete:e[o+2]},sm(n._query)}return function(d,f,p,y){const m=new Oc(y),w=new Nc(f,m,p);return d.asyncQueue.enqueueAndForget(async()=>Pc(await Wr(d),w)),()=>{m.Na(),d.asyncQueue.enqueueAndForget(async()=>bc(await Wr(d),w))}}(qo(c),u,a,l)}function zo(n,e){return function(i,s){const r=new kt;return i.asyncQueue.enqueueAndForget(async()=>RA(await UA(i),s,r)),r.promise}(qo(n),e)}function cm(n,e,t){const i=t.docs.get(e._key),s=new $c(n);return new am(n,s,e._key,i,new Ui(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){wi=s})(ln),Dt(new mt("firestore",(i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),a=new Ft(new hw(i.getProvider("auth-internal")),new _w(i.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new T(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hs(c.options.projectId,u)}(o,s),o);return r=Object.assign({useFetchStreams:t},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),$e(ph,"4.3.2",e),$e(ph,"4.3.2","esm2017")})();const Xh="@firebase/database",Jh="1.0.1";/**
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
 */let um="";function s0(n){um=n}/**
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
 */class r0{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),de(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Xi(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class o0{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Bt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const hm=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new r0(e)}}catch{}return new o0},gn=hm("localStorage"),hl=hm("sessionStorage");/**
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
 */const Zn=new co("@firebase/database"),a0=function(){let n=1;return function(){return n++}}(),dm=function(n){const e=sy(n),t=new ey;t.update(e);const i=t.digest();return Al.encodeByteArray(i)},Ws=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Ws.apply(null,i):typeof i=="object"?e+=de(i):e+=i,e+=" "}return e};let En=null,Zh=!0;const l0=function(n,e){v(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Zn.logLevel=V.VERBOSE,En=Zn.log.bind(Zn),e&&hl.set("logging_enabled",!0)):typeof n=="function"?En=n:(En=null,hl.remove("logging_enabled"))},Se=function(...n){if(Zh===!0&&(Zh=!1,En===null&&hl.get("logging_enabled")===!0&&l0(!0)),En){const e=Ws.apply(null,n);En(e)}},Hs=function(n){return function(...e){Se(n,...e)}},dl=function(...n){const e="FIREBASE INTERNAL ERROR: "+Ws(...n);Zn.error(e)},Ut=function(...n){const e=`FIREBASE FATAL ERROR: ${Ws(...n)}`;throw Zn.error(e),new Error(e)},ze=function(...n){const e="FIREBASE WARNING: "+Ws(...n);Zn.warn(e)},c0=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ze("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},fm=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},u0=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},pi="[MIN_NAME]",Sn="[MAX_NAME]",Ri=function(n,e){if(n===e)return 0;if(n===pi||e===Sn)return-1;if(e===pi||n===Sn)return 1;{const t=ed(n),i=ed(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},h0=function(n,e){return n===e?0:n<e?-1:1},Ni=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+de(e))},jc=function(n){if(typeof n!="object"||n===null)return de(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=de(e[i]),t+=":",t+=jc(n[e[i]]);return t+="}",t},pm=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function We(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const _m=function(n){v(!fm(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},d0=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},f0=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function p0(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const _0=new RegExp("^-?(0*)\\d{1,10}$"),m0=-2147483648,g0=2147483647,ed=function(n){if(_0.test(n)){const e=Number(n);if(e>=m0&&e<=g0)return e}return null},zs=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ze("Exception was thrown by user callback.",t),e},Math.floor(0))}},y0=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Gi=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class v0{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){ze(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class E0{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Se("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ze(e)}}class ei{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ei.OWNER="owner";/**
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
 */const Wc="5",mm="v",gm="s",ym="r",vm="f",Em=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Tm="ls",Im="p",fl="ac",wm="websocket",Cm="long_polling";/**
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
 */class Am{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=gn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&gn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function T0(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Rm(n,e,t){v(typeof e=="string","typeof type must == string"),v(typeof t=="object","typeof params must == object");let i;if(e===wm)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Cm)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);T0(n)&&(t.ns=n.namespace);const s=[];return We(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class I0{constructor(){this.counters_={}}incrementCounter(e,t=1){Bt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Ug(this.counters_)}}/**
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
 */const Ta={},Ia={};function Hc(n){const e=n.toString();return Ta[e]||(Ta[e]=new I0),Ta[e]}function w0(n,e){const t=n.toString();return Ia[t]||(Ia[t]=e()),Ia[t]}/**
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
 */class C0{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&zs(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const td="start",A0="close",R0="pLPCommand",S0="pRTLPCB",Sm="id",Pm="pw",bm="ser",P0="cb",b0="seg",k0="ts",N0="d",D0="dframe",km=1870,Nm=30,O0=km-Nm,M0=25e3,V0=3e4;class zn{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Hs(e),this.stats_=Hc(t),this.urlFn=l=>(this.appCheckToken&&(l[fl]=this.appCheckToken),Rm(t,Cm,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new C0(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(V0)),u0(()=>{if(this.isClosed_)return;this.scriptTagHolder=new zc((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===td)this.id=a,this.password=l;else if(o===A0)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[td]="t",i[bm]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[P0]=this.scriptTagHolder.uniqueCallbackIdentifier),i[mm]=Wc,this.transportSessionId&&(i[gm]=this.transportSessionId),this.lastSessionId&&(i[Tm]=this.lastSessionId),this.applicationId&&(i[Im]=this.applicationId),this.appCheckToken&&(i[fl]=this.appCheckToken),typeof location<"u"&&location.hostname&&Em.test(location.hostname)&&(i[ym]=vm);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){zn.forceAllow_=!0}static forceDisallow(){zn.forceDisallow_=!0}static isAvailable(){return zn.forceAllow_?!0:!zn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!d0()&&!f0()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=de(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Jd(t),s=pm(i,O0);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[D0]="t",i[Sm]=e,i[Pm]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=de(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class zc{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=a0(),window[R0+this.uniqueCallbackIdentifier]=e,window[S0+this.uniqueCallbackIdentifier]=t,this.myIFrame=zc.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Se("frame writing exception"),a.stack&&Se(a.stack),Se(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Se("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Sm]=this.myID,e[Pm]=this.myPW,e[bm]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Nm+i.length<=km;){const o=this.pendingSegs.shift();i=i+"&"+b0+s+"="+o.seg+"&"+k0+s+"="+o.ts+"&"+N0+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(M0)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{Se("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const x0=16384,L0=45e3;let zr=null;typeof MozWebSocket<"u"?zr=MozWebSocket:typeof WebSocket<"u"&&(zr=WebSocket);class Ze{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Hs(this.connId),this.stats_=Hc(t),this.connURL=Ze.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[mm]=Wc,typeof location<"u"&&location.hostname&&Em.test(location.hostname)&&(o[ym]=vm),t&&(o[gm]=t),i&&(o[Tm]=i),s&&(o[fl]=s),r&&(o[Im]=r),Rm(e,wm,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,gn.set("previous_websocket_failure",!0);try{let i;rf(),this.mySock=new zr(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Ze.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&zr!==null&&!Ze.forceDisallow_}static previouslyFailed(){return gn.isInMemoryStorage||gn.get("previous_websocket_failure")===!0}markConnectionHealthy(){gn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Xi(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(v(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=de(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=pm(t,x0);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(L0))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ze.responsesRequiredToBeHealthy=2;Ze.healthyTimeout=3e4;/**
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
 */class _s{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[zn,Ze]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Ze&&Ze.isAvailable();let i=t&&!Ze.previouslyFailed();if(e.webSocketOnly&&(t||ze("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Ze];else{const s=this.transports_=[];for(const r of _s.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);_s.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}_s.globalTransportInitialized_=!1;/**
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
 */const F0=6e4,U0=5e3,B0=10*1024,q0=100*1024,wa="t",nd="d",$0="s",id="r",j0="e",sd="o",rd="a",od="n",ad="p",W0="h";class H0{constructor(e,t,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Hs("c:"+this.id+":"),this.transportManager_=new _s(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Gi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>q0?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>B0?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(wa in e){const t=e[wa];t===rd?this.upgradeIfSecondaryHealthy_():t===id?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===sd&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ni("t",e),i=Ni("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ad,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:rd,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:od,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ni("t",e),i=Ni("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ni(wa,e);if(nd in e){const i=e[nd];if(t===W0){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===od){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===$0?this.onConnectionShutdown_(i):t===id?this.onReset_(i):t===j0?dl("Server Error: "+i):t===sd?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):dl("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Wc!==i&&ze("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Gi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(F0))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Gi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(U0))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ad,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(gn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Dm{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Om{constructor(e){this.allowedEvents_=e,this.listeners_={},v(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){v(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Gr extends Om{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!bl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Gr}getInitialEvent(e){return v(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const ld=32,cd=768;class z{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function j(){return new z("")}function O(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function nn(n){return n.pieces_.length-n.pieceNum_}function K(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new z(n.pieces_,e)}function Mm(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function z0(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Vm(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function xm(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new z(e,0)}function ae(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof z)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new z(t,0)}function M(n){return n.pieceNum_>=n.pieces_.length}function Be(n,e){const t=O(n),i=O(e);if(t===null)return e;if(t===i)return Be(K(n),K(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Gc(n,e){if(nn(n)!==nn(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function et(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(nn(n)>nn(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class G0{constructor(e,t){this.errorPrefix_=t,this.parts_=Vm(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=lo(this.parts_[i]);Lm(this)}}function K0(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=lo(e),Lm(n)}function Q0(n){const e=n.parts_.pop();n.byteLength_-=lo(e),n.parts_.length>0&&(n.byteLength_-=1)}function Lm(n){if(n.byteLength_>cd)throw new Error(n.errorPrefix_+"has a key path longer than "+cd+" bytes ("+n.byteLength_+").");if(n.parts_.length>ld)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ld+") or object contains a cycle "+fn(n))}function fn(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Kc extends Om{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Kc}getInitialEvent(e){return v(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Di=1e3,Y0=60*5*1e3,ud=30*1e3,X0=1.3,J0=3e4,Z0="server_kill",hd=3;class Nt extends Dm{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Nt.nextPersistentConnectionId_++,this.log_=Hs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Di,this.maxReconnectDelay_=Y0,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!rf())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Kc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Gr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(de(r)),v(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new Sl,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),v(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),v(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Nt.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Bt(e,"w")){const i=si(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ze(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Zg(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ud)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Jg(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),v(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+de(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):dl("Unrecognized action received from server: "+de(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){v(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Di,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Di,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>J0&&(this.reconnectDelay_=Di),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*X0)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Nt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){v(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Se("getToken() completed but was canceled"):(Se("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new H0(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,f=>{ze(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(Z0)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&ze(h),l())}}}interrupt(e){Se("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Se("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ba(this.interruptReasons_)&&(this.reconnectDelay_=Di,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>jc(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new z(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){Se("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=hd&&(this.reconnectDelay_=ud,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Se("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=hd&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+um.replace(/\./g,"-")]=1,bl()?e["framework.cordova"]=1:sf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Gr.getInstance().currentlyOnline();return ba(this.interruptReasons_)&&e}}Nt.nextPersistentConnectionId_=0;Nt.nextConnectionId_=0;/**
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
 */class D{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new D(e,t)}}/**
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
 */class Go{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new D(pi,e),s=new D(pi,t);return this.compare(i,s)!==0}minPost(){return D.MIN}}/**
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
 */let lr;class Fm extends Go{static get __EMPTY_NODE(){return lr}static set __EMPTY_NODE(e){lr=e}compare(e,t){return Ri(e.name,t.name)}isDefinedOn(e){throw gi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return D.MIN}maxPost(){return new D(Sn,lr)}makePost(e,t){return v(typeof e=="string","KeyIndex indexValue must always be a string."),new D(e,lr)}toString(){return".key"}}const ti=new Fm;/**
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
 */class cr{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class he{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??he.RED,this.left=s??qe.EMPTY_NODE,this.right=r??qe.EMPTY_NODE}copy(e,t,i,s,r){return new he(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return qe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return qe.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,he.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,he.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}he.RED=!0;he.BLACK=!1;class eR{copy(e,t,i,s,r){return this}insert(e,t,i){return new he(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class qe{constructor(e,t=qe.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new qe(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,he.BLACK,null,null))}remove(e){return new qe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,he.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new cr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new cr(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new cr(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new cr(this.root_,null,this.comparator_,!0,e)}}qe.EMPTY_NODE=new eR;/**
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
 */function tR(n,e){return Ri(n.name,e.name)}function Qc(n,e){return Ri(n,e)}/**
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
 */let pl;function nR(n){pl=n}const Um=function(n){return typeof n=="number"?"number:"+_m(n):"string:"+n},Bm=function(n){if(n.isLeafNode()){const e=n.val();v(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Bt(e,".sv"),"Priority must be a string or number.")}else v(n===pl||n.isEmpty(),"priority of unexpected type.");v(n===pl||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let dd;class ce{constructor(e,t=ce.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,v(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Bm(this.priorityNode_)}static set __childrenNodeConstructor(e){dd=e}static get __childrenNodeConstructor(){return dd}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ce(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ce.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return M(e)?this:O(e)===".priority"?this.priorityNode_:ce.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ce.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=O(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(v(i!==".priority"||nn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ce.__childrenNodeConstructor.EMPTY_NODE.updateChild(K(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Um(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=_m(this.value_):e+=this.value_,this.lazyHash_=dm(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ce.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ce.__childrenNodeConstructor?-1:(v(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=ce.VALUE_TYPE_ORDER.indexOf(t),r=ce.VALUE_TYPE_ORDER.indexOf(i);return v(s>=0,"Unknown leaf type: "+t),v(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ce.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let qm,$m;function iR(n){qm=n}function sR(n){$m=n}class rR extends Go{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?Ri(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return D.MIN}maxPost(){return new D(Sn,new ce("[PRIORITY-POST]",$m))}makePost(e,t){const i=qm(e);return new D(t,new ce("[PRIORITY-POST]",i))}toString(){return".priority"}}const te=new rR;/**
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
 */const oR=Math.log(2);class aR{constructor(e){const t=r=>parseInt(Math.log(r)/oR,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Kr=function(n,e,t,i){n.sort(e);const s=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=n[l],d=t?t(h):h,new he(d,h.node,he.BLACK,null,null);{const f=parseInt(u/2,10)+l,p=s(l,f),y=s(f+1,c);return h=n[f],d=t?t(h):h,new he(d,h.node,he.BLACK,p,y)}},r=function(l){let c=null,u=null,h=n.length;const d=function(p,y){const m=h-p,w=h;h-=p;const N=s(m+1,w),F=n[m],q=t?t(F):F;f(new he(q,F.node,y,null,N))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const y=l.nextBitIsOne(),m=Math.pow(2,l.count-(p+1));y?d(m,he.BLACK):(d(m,he.BLACK),d(m,he.RED))}return u},o=new aR(n.length),a=r(o);return new qe(i||e,a)};/**
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
 */let Ca;const Bn={};class bt{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return v(Bn&&te,"ChildrenNode.ts has not been loaded"),Ca=Ca||new bt({".priority":Bn},{".priority":te}),Ca}get(e){const t=si(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof qe?t:null}hasIndex(e){return Bt(this.indexSet_,e.toString())}addIndex(e,t){v(e!==ti,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(D.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Kr(i,e.getCompare()):a=Bn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new bt(u,c)}addToIndexes(e,t){const i=Tr(this.indexes_,(s,r)=>{const o=si(this.indexSet_,r);if(v(o,"Missing index implementation for "+r),s===Bn)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(D.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Kr(a,o.getCompare())}else return Bn;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new D(e.name,a))),l.insert(e,e.node)}});return new bt(i,this.indexSet_)}removeFromIndexes(e,t){const i=Tr(this.indexes_,s=>{if(s===Bn)return s;{const r=t.get(e.name);return r?s.remove(new D(e.name,r)):s}});return new bt(i,this.indexSet_)}}/**
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
 */let Oi;class A{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Bm(this.priorityNode_),this.children_.isEmpty()&&v(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Oi||(Oi=new A(new qe(Qc),null,bt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Oi}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Oi:t}}getChild(e){const t=O(e);return t===null?this:this.getImmediateChild(t).getChild(K(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(v(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new D(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Oi:this.priorityNode_;return new A(s,o,r)}}updateChild(e,t){const i=O(e);if(i===null)return t;{v(O(e)!==".priority"||nn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(K(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(te,(o,a)=>{t[o]=a.val(e),i++,r&&A.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Um(this.getPriority().val())+":"),this.forEachChild(te,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":dm(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new D(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new D(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new D(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,D.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,D.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Gs?-1:0}withIndex(e){if(e===ti||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ti||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(te),s=t.getIterator(te);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ti?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class lR extends A{constructor(){super(new qe(Qc),A.EMPTY_NODE,bt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const Gs=new lR;Object.defineProperties(D,{MIN:{value:new D(pi,A.EMPTY_NODE)},MAX:{value:new D(Sn,Gs)}});Fm.__EMPTY_NODE=A.EMPTY_NODE;ce.__childrenNodeConstructor=A;nR(Gs);sR(Gs);/**
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
 */const cR=!0;function Pe(n,e=null){if(n===null)return A.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),v(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ce(t,Pe(e))}if(!(n instanceof Array)&&cR){const t=[];let i=!1;if(We(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=Pe(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new D(o,l)))}}),t.length===0)return A.EMPTY_NODE;const r=Kr(t,tR,o=>o.name,Qc);if(i){const o=Kr(t,te.getCompare());return new A(r,Pe(e),new bt({".priority":o},{".priority":te}))}else return new A(r,Pe(e),bt.Default)}else{let t=A.EMPTY_NODE;return We(n,(i,s)=>{if(Bt(n,i)&&i.substring(0,1)!=="."){const r=Pe(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(Pe(e))}}iR(Pe);/**
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
 */class uR extends Go{constructor(e){super(),this.indexPath_=e,v(!M(e)&&O(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?Ri(e.name,t.name):r}makePost(e,t){const i=Pe(e),s=A.EMPTY_NODE.updateChild(this.indexPath_,i);return new D(t,s)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,Gs);return new D(Sn,e)}toString(){return Vm(this.indexPath_,0).join("/")}}/**
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
 */class hR extends Go{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Ri(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return D.MIN}maxPost(){return D.MAX}makePost(e,t){const i=Pe(e);return new D(t,i)}toString(){return".value"}}const dR=new hR;/**
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
 */function jm(n){return{type:"value",snapshotNode:n}}function _i(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function ms(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function gs(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function fR(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Yc{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){v(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(ms(t,a)):v(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(_i(t,i)):o.trackChildChange(gs(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(te,(s,r)=>{t.hasChild(s)||i.trackChildChange(ms(s,r))}),t.isLeafNode()||t.forEachChild(te,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(gs(s,r,o))}else i.trackChildChange(_i(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ys{constructor(e){this.indexedFilter_=new Yc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ys.getStartPost_(e),this.endPost_=ys.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new D(t,i))||(i=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=A.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(A.EMPTY_NODE);const r=this;return t.forEachChild(te,(o,a)=>{r.matches(new D(o,a))||(s=s.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class pR{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new ys(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new D(t,i))||(i=A.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=A.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(A.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;v(a.numChildren()===this.limit_,"");const l=new D(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const h=a.getImmediateChild(t);let d=s.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(u&&!i.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(gs(t,i,h)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(ms(t,h));const y=a.updateImmediateChild(t,A.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(_i(d.name,d.node)),y.updateImmediateChild(d.name,d.node)):y}}else return i.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(ms(c.name,c.node)),r.trackChildChange(_i(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,A.EMPTY_NODE)):e}}/**
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
 */class Xc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=te}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return v(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return v(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:pi}hasEnd(){return this.endSet_}getIndexEndValue(){return v(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return v(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Sn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return v(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===te}copy(){const e=new Xc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function _R(n){return n.loadsAllData()?new Yc(n.getIndex()):n.hasLimit()?new pR(n):new ys(n)}function fd(n){const e={};if(n.isDefault())return e;let t;if(n.index_===te?t="$priority":n.index_===dR?t="$value":n.index_===ti?t="$key":(v(n.index_ instanceof uR,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=de(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=de(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+de(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=de(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+de(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function pd(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==te&&(e.i=n.index_.toString()),e}/**
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
 */class Qr extends Dm{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Hs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(v(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Qr.getListenId_(e,i),a={};this.listens_[o]=a;const l=fd(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),si(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,t){const i=Qr.getListenId_(e,t);delete this.listens_[i]}get(e){const t=fd(e._queryParams),i=e._path.toString(),s=new Sl;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+yi(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Xi(a.responseText)}catch{ze("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&ze("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class mR{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Yr(){return{value:null,children:new Map}}function Wm(n,e,t){if(M(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=O(e);n.children.has(i)||n.children.set(i,Yr());const s=n.children.get(i);e=K(e),Wm(s,e,t)}}function _l(n,e,t){n.value!==null?t(e,n.value):gR(n,(i,s)=>{const r=new z(e.toString()+"/"+i);_l(s,r,t)})}function gR(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class yR{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&We(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
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
 */const _d=10*1e3,vR=30*1e3,ER=5*60*1e3;class TR{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new yR(e);const i=_d+(vR-_d)*Math.random();Gi(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;We(e,(s,r)=>{r>0&&Bt(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),Gi(this.reportStats_.bind(this),Math.floor(Math.random()*2*ER))}}/**
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
 */var tt;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(tt||(tt={}));function Hm(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Jc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Zc(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Xr{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=tt.ACK_USER_WRITE,this.source=Hm()}operationForChild(e){if(M(this.path)){if(this.affectedTree.value!=null)return v(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new z(e));return new Xr(j(),t,this.revert)}}else return v(O(this.path)===e,"operationForChild called for unrelated child."),new Xr(K(this.path),this.affectedTree,this.revert)}}/**
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
 */class vs{constructor(e,t){this.source=e,this.path=t,this.type=tt.LISTEN_COMPLETE}operationForChild(e){return M(this.path)?new vs(this.source,j()):new vs(this.source,K(this.path))}}/**
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
 */class Pn{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=tt.OVERWRITE}operationForChild(e){return M(this.path)?new Pn(this.source,j(),this.snap.getImmediateChild(e)):new Pn(this.source,K(this.path),this.snap)}}/**
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
 */class Es{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=tt.MERGE}operationForChild(e){if(M(this.path)){const t=this.children.subtree(new z(e));return t.isEmpty()?null:t.value?new Pn(this.source,j(),t.value):new Es(this.source,j(),t)}else return v(O(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Es(this.source,K(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class bn{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(M(e))return this.isFullyInitialized()&&!this.filtered_;const t=O(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class IR{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function wR(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(fR(o.childName,o.snapshotNode))}),Mi(n,s,"child_removed",e,i,t),Mi(n,s,"child_added",e,i,t),Mi(n,s,"child_moved",r,i,t),Mi(n,s,"child_changed",e,i,t),Mi(n,s,"value",e,i,t),s}function Mi(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>AR(n,a,l)),o.forEach(a=>{const l=CR(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function CR(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function AR(n,e,t){if(e.childName==null||t.childName==null)throw gi("Should only compare child_ events.");const i=new D(e.childName,e.snapshotNode),s=new D(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
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
 */function Ko(n,e){return{eventCache:n,serverCache:e}}function Ki(n,e,t,i){return Ko(new bn(e,t,i),n.serverCache)}function zm(n,e,t,i){return Ko(n.eventCache,new bn(e,t,i))}function ml(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function kn(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Aa;const RR=()=>(Aa||(Aa=new qe(h0)),Aa);class Q{constructor(e,t=RR()){this.value=e,this.children=t}static fromObject(e){let t=new Q(null);return We(e,(i,s)=>{t=t.set(new z(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:j(),value:this.value};if(M(e))return null;{const i=O(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(K(e),t);return r!=null?{path:ae(new z(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(M(e))return this;{const t=O(e),i=this.children.get(t);return i!==null?i.subtree(K(e)):new Q(null)}}set(e,t){if(M(e))return new Q(t,this.children);{const i=O(e),r=(this.children.get(i)||new Q(null)).set(K(e),t),o=this.children.insert(i,r);return new Q(this.value,o)}}remove(e){if(M(e))return this.children.isEmpty()?new Q(null):new Q(null,this.children);{const t=O(e),i=this.children.get(t);if(i){const s=i.remove(K(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new Q(null):new Q(this.value,r)}else return this}}get(e){if(M(e))return this.value;{const t=O(e),i=this.children.get(t);return i?i.get(K(e)):null}}setTree(e,t){if(M(e))return t;{const i=O(e),r=(this.children.get(i)||new Q(null)).setTree(K(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new Q(this.value,o)}}fold(e){return this.fold_(j(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(ae(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,j(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(M(e))return null;{const r=O(e),o=this.children.get(r);return o?o.findOnPath_(K(e),ae(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,j(),t)}foreachOnPath_(e,t,i){if(M(e))return this;{this.value&&i(t,this.value);const s=O(e),r=this.children.get(s);return r?r.foreachOnPath_(K(e),ae(t,s),i):new Q(null)}}foreach(e){this.foreach_(j(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(ae(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class nt{constructor(e){this.writeTree_=e}static empty(){return new nt(new Q(null))}}function Qi(n,e,t){if(M(e))return new nt(new Q(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Be(s,e);return r=r.updateChild(o,t),new nt(n.writeTree_.set(s,r))}else{const s=new Q(t),r=n.writeTree_.setTree(e,s);return new nt(r)}}}function md(n,e,t){let i=n;return We(t,(s,r)=>{i=Qi(i,ae(e,s),r)}),i}function gd(n,e){if(M(e))return nt.empty();{const t=n.writeTree_.setTree(e,new Q(null));return new nt(t)}}function gl(n,e){return xn(n,e)!=null}function xn(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Be(t.path,e)):null}function yd(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(te,(i,s)=>{e.push(new D(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new D(i,s.value))}),e}function Jt(n,e){if(M(e))return n;{const t=xn(n,e);return t!=null?new nt(new Q(t)):new nt(n.writeTree_.subtree(e))}}function yl(n){return n.writeTree_.isEmpty()}function mi(n,e){return Gm(j(),n.writeTree_,e)}function Gm(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(v(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Gm(ae(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(ae(n,".priority"),i)),t}}/**
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
 */function eu(n,e){return Xm(e,n)}function SR(n,e,t,i,s){v(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=Qi(n.visibleWrites,e,t)),n.lastWriteId=i}function PR(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function bR(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);v(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&kR(a,i.path)?s=!1:et(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return NR(n),!0;if(i.snap)n.visibleWrites=gd(n.visibleWrites,i.path);else{const a=i.children;We(a,l=>{n.visibleWrites=gd(n.visibleWrites,ae(i.path,l))})}return!0}else return!1}function kR(n,e){if(n.snap)return et(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&et(ae(n.path,t),e))return!0;return!1}function NR(n){n.visibleWrites=Km(n.allWrites,DR,j()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function DR(n){return n.visible}function Km(n,e,t){let i=nt.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)et(t,o)?(a=Be(t,o),i=Qi(i,a,r.snap)):et(o,t)&&(a=Be(o,t),i=Qi(i,j(),r.snap.getChild(a)));else if(r.children){if(et(t,o))a=Be(t,o),i=md(i,a,r.children);else if(et(o,t))if(a=Be(o,t),M(a))i=md(i,j(),r.children);else{const l=si(r.children,O(a));if(l){const c=l.getChild(K(a));i=Qi(i,j(),c)}}}else throw gi("WriteRecord should have .snap or .children")}}return i}function Qm(n,e,t,i,s){if(!i&&!s){const r=xn(n.visibleWrites,e);if(r!=null)return r;{const o=Jt(n.visibleWrites,e);if(yl(o))return t;if(t==null&&!gl(o,j()))return null;{const a=t||A.EMPTY_NODE;return mi(o,a)}}}else{const r=Jt(n.visibleWrites,e);if(!s&&yl(r))return t;if(!s&&t==null&&!gl(r,j()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(et(c.path,e)||et(e,c.path))},a=Km(n.allWrites,o,e),l=t||A.EMPTY_NODE;return mi(a,l)}}}function OR(n,e,t){let i=A.EMPTY_NODE;const s=xn(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(te,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=Jt(n.visibleWrites,e);return t.forEachChild(te,(o,a)=>{const l=mi(Jt(r,new z(o)),a);i=i.updateImmediateChild(o,l)}),yd(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Jt(n.visibleWrites,e);return yd(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function MR(n,e,t,i,s){v(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=ae(e,t);if(gl(n.visibleWrites,r))return null;{const o=Jt(n.visibleWrites,r);return yl(o)?s.getChild(t):mi(o,s.getChild(t))}}function VR(n,e,t,i){const s=ae(e,t),r=xn(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=Jt(n.visibleWrites,s);return mi(o,i.getNode().getImmediateChild(t))}else return null}function xR(n,e){return xn(n.visibleWrites,e)}function LR(n,e,t,i,s,r,o){let a;const l=Jt(n.visibleWrites,e),c=xn(l,j());if(c!=null)a=c;else if(t!=null)a=mi(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=d.getNext();for(;f&&u.length<s;)h(f,i)!==0&&u.push(f),f=d.getNext();return u}else return[]}function FR(){return{visibleWrites:nt.empty(),allWrites:[],lastWriteId:-1}}function Jr(n,e,t,i){return Qm(n.writeTree,n.treePath,e,t,i)}function tu(n,e){return OR(n.writeTree,n.treePath,e)}function vd(n,e,t,i){return MR(n.writeTree,n.treePath,e,t,i)}function Zr(n,e){return xR(n.writeTree,ae(n.treePath,e))}function UR(n,e,t,i,s,r){return LR(n.writeTree,n.treePath,e,t,i,s,r)}function nu(n,e,t){return VR(n.writeTree,n.treePath,e,t)}function Ym(n,e){return Xm(ae(n.treePath,e),n.writeTree)}function Xm(n,e){return{treePath:n,writeTree:e}}/**
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
 */class BR{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;v(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),v(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,gs(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,ms(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,_i(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,gs(i,e.snapshotNode,s.oldSnap));else throw gi("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class qR{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Jm=new qR;class iu{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new bn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return nu(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:kn(this.viewCache_),r=UR(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function $R(n){return{filter:n}}function jR(n,e){v(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),v(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function WR(n,e,t,i,s){const r=new BR;let o,a;if(t.type===tt.OVERWRITE){const c=t;c.source.fromUser?o=vl(n,e,c.path,c.snap,i,s,r):(v(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!M(c.path),o=eo(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===tt.MERGE){const c=t;c.source.fromUser?o=zR(n,e,c.path,c.children,i,s,r):(v(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=El(n,e,c.path,c.children,i,s,a,r))}else if(t.type===tt.ACK_USER_WRITE){const c=t;c.revert?o=QR(n,e,c.path,i,s,r):o=GR(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===tt.LISTEN_COMPLETE)o=KR(n,e,t.path,i,r);else throw gi("Unknown operation type: "+t.type);const l=r.getChanges();return HR(e,o,l),{viewCache:o,changes:l}}function HR(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=ml(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(jm(ml(e)))}}function Zm(n,e,t,i,s,r){const o=e.eventCache;if(Zr(i,t)!=null)return e;{let a,l;if(M(t))if(v(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=kn(e),u=c instanceof A?c:A.EMPTY_NODE,h=tu(i,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Jr(i,kn(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=O(t);if(c===".priority"){v(nn(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=vd(i,t,u,l);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=K(t);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=vd(i,t,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=nu(i,c,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),c,h,u,s,r):a=o.getNode()}}return Ki(e,a,o.isFullyInitialized()||M(t),n.filter.filtersNodes())}}function eo(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(M(t))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,i);c=u.updateFullNode(l.getNode(),f,null)}else{const f=O(t);if(!l.isCompleteForPath(t)&&nn(t)>1)return e;const p=K(t),m=l.getNode().getImmediateChild(f).updateChild(p,i);f===".priority"?c=u.updatePriority(l.getNode(),m):c=u.updateChild(l.getNode(),f,m,p,Jm,null)}const h=zm(e,c,l.isFullyInitialized()||M(t),u.filtersNodes()),d=new iu(s,h,r);return Zm(n,h,t,s,d,a)}function vl(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const u=new iu(s,e,r);if(M(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Ki(e,c,!0,n.filter.filtersNodes());else{const h=O(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=Ki(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=K(t),f=a.getNode().getImmediateChild(h);let p;if(M(d))p=i;else{const y=u.getCompleteChild(h);y!=null?Mm(d)===".priority"&&y.getChild(xm(d)).isEmpty()?p=y:p=y.updateChild(d,i):p=A.EMPTY_NODE}if(f.equals(p))l=e;else{const y=n.filter.updateChild(a.getNode(),h,p,d,u,o);l=Ki(e,y,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Ed(n,e){return n.eventCache.isCompleteForChild(e)}function zR(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=ae(t,l);Ed(e,O(u))&&(a=vl(n,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=ae(t,l);Ed(e,O(u))||(a=vl(n,a,u,c,s,r,o))}),a}function Td(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function El(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;M(t)?c=i:c=new Q(null).setTree(t,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=Td(n,f,d);l=eo(n,l,new z(h),p,s,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),y=Td(n,p,d);l=eo(n,l,new z(h),y,s,r,o,a)}}),l}function GR(n,e,t,i,s,r,o){if(Zr(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(M(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return eo(n,e,t,l.getNode().getChild(t),s,r,a,o);if(M(t)){let c=new Q(null);return l.getNode().forEachChild(ti,(u,h)=>{c=c.set(new z(u),h)}),El(n,e,t,c,s,r,a,o)}else return e}else{let c=new Q(null);return i.foreach((u,h)=>{const d=ae(t,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),El(n,e,t,c,s,r,a,o)}}function KR(n,e,t,i,s){const r=e.serverCache,o=zm(e,r.getNode(),r.isFullyInitialized()||M(t),r.isFiltered());return Zm(n,o,t,i,Jm,s)}function QR(n,e,t,i,s,r){let o;if(Zr(i,t)!=null)return e;{const a=new iu(i,e,s),l=e.eventCache.getNode();let c;if(M(t)||O(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Jr(i,kn(e));else{const h=e.serverCache.getNode();v(h instanceof A,"serverChildren would be complete if leaf node"),u=tu(i,h)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=O(t);let h=nu(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=n.filter.updateChild(l,u,h,K(t),a,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,A.EMPTY_NODE,K(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Jr(i,kn(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Zr(i,j())!=null,Ki(e,c,o,n.filter.filtersNodes())}}/**
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
 */class YR{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Yc(i.getIndex()),r=_R(i);this.processor_=$R(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(A.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(A.EMPTY_NODE,a.getNode(),null),u=new bn(l,o.isFullyInitialized(),s.filtersNodes()),h=new bn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ko(h,u),this.eventGenerator_=new IR(this.query_)}get query(){return this.query_}}function XR(n){return n.viewCache_.serverCache.getNode()}function JR(n,e){const t=kn(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!M(e)&&!t.getImmediateChild(O(e)).isEmpty())?t.getChild(e):null}function Id(n){return n.eventRegistrations_.length===0}function ZR(n,e){n.eventRegistrations_.push(e)}function wd(n,e,t){const i=[];if(t){v(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function Cd(n,e,t,i){e.type===tt.MERGE&&e.source.queryId!==null&&(v(kn(n.viewCache_),"We should always have a full cache before handling merges"),v(ml(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=WR(n.processor_,s,e,t,i);return jR(n.processor_,r.viewCache),v(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,eg(n,r.changes,r.viewCache.eventCache.getNode(),null)}function eS(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(te,(r,o)=>{i.push(_i(r,o))}),t.isFullyInitialized()&&i.push(jm(t.getNode())),eg(n,i,t.getNode(),e)}function eg(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return wR(n.eventGenerator_,e,t,s)}/**
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
 */let to;class tS{constructor(){this.views=new Map}}function nS(n){v(!to,"__referenceConstructor has already been defined"),to=n}function iS(){return v(to,"Reference.ts has not been loaded"),to}function sS(n){return n.views.size===0}function su(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return v(r!=null,"SyncTree gave us an op for an invalid query."),Cd(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(Cd(o,e,t,i));return r}}function rS(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Jr(t,s?i:null),l=!1;a?l=!0:i instanceof A?(a=tu(t,i),l=!1):(a=A.EMPTY_NODE,l=!1);const c=Ko(new bn(a,l,!1),new bn(i,s,!1));return new YR(e,c)}return o}function oS(n,e,t,i,s,r){const o=rS(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),ZR(o,t),eS(o,t)}function aS(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=sn(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(wd(c,t,i)),Id(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(wd(l,t,i)),Id(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!sn(n)&&r.push(new(iS())(e._repo,e._path)),{removed:r,events:o}}function tg(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function ni(n,e){let t=null;for(const i of n.views.values())t=t||JR(i,e);return t}function ng(n,e){if(e._queryParams.loadsAllData())return Qo(n);{const i=e._queryIdentifier;return n.views.get(i)}}function ig(n,e){return ng(n,e)!=null}function sn(n){return Qo(n)!=null}function Qo(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let no;function lS(n){v(!no,"__referenceConstructor has already been defined"),no=n}function cS(){return v(no,"Reference.ts has not been loaded"),no}let uS=1;class Ad{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Q(null),this.pendingWriteTree_=FR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function hS(n,e,t,i,s){return SR(n.pendingWriteTree_,e,t,i,s),s?Ks(n,new Pn(Hm(),e,t)):[]}function Gn(n,e,t=!1){const i=PR(n.pendingWriteTree_,e);if(bR(n.pendingWriteTree_,e)){let r=new Q(null);return i.snap!=null?r=r.set(j(),!0):We(i.children,o=>{r=r.set(new z(o),!0)}),Ks(n,new Xr(i.path,r,t))}else return[]}function Yo(n,e,t){return Ks(n,new Pn(Jc(),e,t))}function dS(n,e,t){const i=Q.fromObject(t);return Ks(n,new Es(Jc(),e,i))}function fS(n,e){return Ks(n,new vs(Jc(),e))}function pS(n,e,t){const i=ru(n,t);if(i){const s=ou(i),r=s.path,o=s.queryId,a=Be(r,e),l=new vs(Zc(o),a);return au(n,r,l)}else return[]}function Tl(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||ig(o,e))){const l=aS(o,e,t,i);sS(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(d,f)=>sn(f));if(u&&!h){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=gS(d);for(let p=0;p<f.length;++p){const y=f[p],m=y.query,w=ag(n,y);n.listenProvider_.startListening(Yi(m),io(n,m),w.hashFn,w.onComplete)}}}!h&&c.length>0&&!i&&(u?n.listenProvider_.stopListening(Yi(e),null):c.forEach(d=>{const f=n.queryToTagMap.get(Xo(d));n.listenProvider_.stopListening(Yi(d),f)}))}yS(n,c)}return a}function _S(n,e,t,i){const s=ru(n,i);if(s!=null){const r=ou(s),o=r.path,a=r.queryId,l=Be(o,e),c=new Pn(Zc(a),l,t);return au(n,o,c)}else return[]}function mS(n,e,t,i){const s=ru(n,i);if(s){const r=ou(s),o=r.path,a=r.queryId,l=Be(o,e),c=Q.fromObject(t),u=new Es(Zc(a),l,c);return au(n,o,u)}else return[]}function Rd(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(d,f)=>{const p=Be(d,s);r=r||ni(f,p),o=o||sn(f)});let a=n.syncPointTree_.get(s);a?(o=o||sn(a),r=r||ni(a,j())):(a=new tS,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=A.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((f,p)=>{const y=ni(p,j());y&&(r=r.updateImmediateChild(f,y))}));const c=ig(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Xo(e);v(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=vS();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const u=eu(n.pendingWriteTree_,s);let h=oS(a,e,t,u,r,l);if(!c&&!o&&!i){const d=ng(a,e);h=h.concat(ES(n,e,d))}return h}function sg(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=Be(o,e),c=ni(a,l);if(c)return c});return Qm(s,e,r,t,!0)}function Ks(n,e){return rg(e,n.syncPointTree_,null,eu(n.pendingWriteTree_,j()))}function rg(n,e,t,i){if(M(n.path))return og(n,e,t,i);{const s=e.get(j());t==null&&s!=null&&(t=ni(s,j()));let r=[];const o=O(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=Ym(i,o);r=r.concat(rg(a,l,c,u))}return s&&(r=r.concat(su(s,n,i,t))),r}}function og(n,e,t,i){const s=e.get(j());t==null&&s!=null&&(t=ni(s,j()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=Ym(i,o),u=n.operationForChild(o);u&&(r=r.concat(og(u,a,l,c)))}),s&&(r=r.concat(su(s,n,i,t))),r}function ag(n,e){const t=e.query,i=io(n,t);return{hashFn:()=>(XR(e)||A.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?pS(n,t._path,i):fS(n,t._path);{const r=p0(s,t);return Tl(n,t,null,r)}}}}function io(n,e){const t=Xo(e);return n.queryToTagMap.get(t)}function Xo(n){return n._path.toString()+"$"+n._queryIdentifier}function ru(n,e){return n.tagToQueryMap.get(e)}function ou(n){const e=n.indexOf("$");return v(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new z(n.substr(0,e))}}function au(n,e,t){const i=n.syncPointTree_.get(e);v(i,"Missing sync point for query tag that we're tracking");const s=eu(n.pendingWriteTree_,e);return su(i,t,s,null)}function gS(n){return n.fold((e,t,i)=>{if(t&&sn(t))return[Qo(t)];{let s=[];return t&&(s=tg(t)),We(i,(r,o)=>{s=s.concat(o)}),s}})}function Yi(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(cS())(n._repo,n._path):n}function yS(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=Xo(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function vS(){return uS++}function ES(n,e,t){const i=e._path,s=io(n,e),r=ag(n,t),o=n.listenProvider_.startListening(Yi(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)v(!sn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!M(c)&&u&&sn(u))return[Qo(u).query];{let d=[];return u&&(d=d.concat(tg(u).map(f=>f.query))),We(h,(f,p)=>{d=d.concat(p)}),d}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(Yi(u),io(n,u))}}return o}/**
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
 */class lu{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new lu(t)}node(){return this.node_}}class cu{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ae(this.path_,e);return new cu(this.syncTree_,t)}node(){return sg(this.syncTree_,this.path_)}}const TS=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Sd=function(n,e,t){if(!n||typeof n!="object")return n;if(v(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return IS(n[".sv"],e,t);if(typeof n[".sv"]=="object")return wS(n[".sv"],e);v(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},IS=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:v(!1,"Unexpected server value: "+n)}},wS=function(n,e,t){n.hasOwnProperty("increment")||v(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&v(!1,"Unexpected increment value: "+i);const s=e.node();if(v(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},CS=function(n,e,t,i){return uu(e,new cu(t,n),i)},AS=function(n,e,t){return uu(n,new lu(e),t)};function uu(n,e,t){const i=n.getPriority().val(),s=Sd(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Sd(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new ce(a,Pe(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new ce(s))),o.forEachChild(te,(a,l)=>{const c=uu(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class hu{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function du(n,e){let t=e instanceof z?e:new z(e),i=n,s=O(t);for(;s!==null;){const r=si(i.node.children,s)||{children:{},childCount:0};i=new hu(s,i,r),t=K(t),s=O(t)}return i}function Si(n){return n.node.value}function lg(n,e){n.node.value=e,Il(n)}function cg(n){return n.node.childCount>0}function RS(n){return Si(n)===void 0&&!cg(n)}function Jo(n,e){We(n.node.children,(t,i)=>{e(new hu(t,n,i))})}function ug(n,e,t,i){t&&!i&&e(n),Jo(n,s=>{ug(s,e,!0,i)}),t&&i&&e(n)}function SS(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Qs(n){return new z(n.parent===null?n.name:Qs(n.parent)+"/"+n.name)}function Il(n){n.parent!==null&&PS(n.parent,n.name,n)}function PS(n,e,t){const i=RS(t),s=Bt(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,Il(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Il(n))}/**
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
 */const bS=/[\[\].#$\/\u0000-\u001F\u007F]/,kS=/[\[\].#$\u0000-\u001F\u007F]/,Ra=10*1024*1024,hg=function(n){return typeof n=="string"&&n.length!==0&&!bS.test(n)},dg=function(n){return typeof n=="string"&&n.length!==0&&!kS.test(n)},NS=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),dg(n)},fg=function(n,e,t){const i=t instanceof z?new G0(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+fn(i));if(typeof e=="function")throw new Error(n+"contains a function "+fn(i)+" with contents = "+e.toString());if(fm(e))throw new Error(n+"contains "+e.toString()+" "+fn(i));if(typeof e=="string"&&e.length>Ra/3&&lo(e)>Ra)throw new Error(n+"contains a string greater than "+Ra+" utf8 bytes "+fn(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(We(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!hg(o)))throw new Error(n+" contains an invalid key ("+o+") "+fn(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);K0(i,o),fg(n,a,i),Q0(i)}),s&&r)throw new Error(n+' contains ".value" child '+fn(i)+" in addition to actual children.")}},pg=function(n,e,t,i){if(!(i&&t===void 0)&&!dg(t))throw new Error(af(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},DS=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),pg(n,e,t,i)},OS=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!hg(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!NS(t))throw new Error(af(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class MS{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function _g(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!Gc(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function mg(n,e,t){_g(n,t),gg(n,i=>Gc(i,e))}function Ln(n,e,t){_g(n,t),gg(n,i=>et(i,e)||et(e,i))}function gg(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(VS(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function VS(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();En&&Se("event: "+t.toString()),zs(i)}}}/**
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
 */const xS="repo_interrupt",LS=25;class FS{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new MS,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Yr(),this.transactionQueueTree_=new hu,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function US(n,e,t){if(n.stats_=Hc(n.repoInfo_),n.forceRestClient_||y0())n.server_=new Qr(n.repoInfo_,(i,s,r,o)=>{Pd(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>bd(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{de(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Nt(n.repoInfo_,e,(i,s,r,o)=>{Pd(n,i,s,r,o)},i=>{bd(n,i)},i=>{qS(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=w0(n.repoInfo_,()=>new TR(n.stats_,n.server_)),n.infoData_=new mR,n.infoSyncTree_=new Ad({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=Yo(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),fu(n,"connected",!1),n.serverSyncTree_=new Ad({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);Ln(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function BS(n){const t=n.infoData_.getNode(new z(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function yg(n){return TS({timestamp:BS(n)})}function Pd(n,e,t,i,s){n.dataUpdateCount++;const r=new z(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=Tr(t,c=>Pe(c));o=mS(n.serverSyncTree_,r,l,s)}else{const l=Pe(t);o=_S(n.serverSyncTree_,r,l,s)}else if(i){const l=Tr(t,c=>Pe(c));o=dS(n.serverSyncTree_,r,l)}else{const l=Pe(t);o=Yo(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=_u(n,r)),Ln(n.eventQueue_,a,o)}function bd(n,e){fu(n,"connected",e),e===!1&&jS(n)}function qS(n,e){We(e,(t,i)=>{fu(n,t,i)})}function fu(n,e,t){const i=new z("/.info/"+e),s=Pe(t);n.infoData_.updateSnapshot(i,s);const r=Yo(n.infoSyncTree_,i,s);Ln(n.eventQueue_,i,r)}function $S(n){return n.nextWriteId_++}function jS(n){vg(n,"onDisconnectEvents");const e=yg(n),t=Yr();_l(n.onDisconnect_,j(),(s,r)=>{const o=CS(s,r,n.serverSyncTree_,e);Wm(t,s,o)});let i=[];_l(t,j(),(s,r)=>{i=i.concat(Yo(n.serverSyncTree_,s,r));const o=KS(n,s);_u(n,o)}),n.onDisconnect_=Yr(),Ln(n.eventQueue_,j(),i)}function WS(n,e,t){let i;O(e._path)===".info"?i=Rd(n.infoSyncTree_,e,t):i=Rd(n.serverSyncTree_,e,t),mg(n.eventQueue_,e._path,i)}function kd(n,e,t){let i;O(e._path)===".info"?i=Tl(n.infoSyncTree_,e,t):i=Tl(n.serverSyncTree_,e,t),mg(n.eventQueue_,e._path,i)}function HS(n){n.persistentConnection_&&n.persistentConnection_.interrupt(xS)}function vg(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Se(t,...e)}function Eg(n,e,t){return sg(n.serverSyncTree_,e,t)||A.EMPTY_NODE}function pu(n,e=n.transactionQueueTree_){if(e||Zo(n,e),Si(e)){const t=Ig(n,e);v(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&zS(n,Qs(e),t)}else cg(e)&&Jo(e,t=>{pu(n,t)})}function zS(n,e,t){const i=t.map(c=>c.currentWriteId),s=Eg(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const u=t[c];v(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Be(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{vg(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(Gn(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Zo(n,du(n.transactionQueueTree_,e)),pu(n,n.transactionQueueTree_),Ln(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)zs(h[d])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{ze("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}_u(n,e)}},o)}function _u(n,e){const t=Tg(n,e),i=Qs(t),s=Ig(n,t);return GS(n,s,i),i}function GS(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Be(t,l.path);let u=!1,h;if(v(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(Gn(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=LS)u=!0,h="maxretry",s=s.concat(Gn(n.serverSyncTree_,l.currentWriteId,!0));else{const d=Eg(n,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){fg("transaction failed: Data returned ",f,l.path);let p=Pe(f);typeof f=="object"&&f!=null&&Bt(f,".priority")||(p=p.updatePriority(d.getPriority()));const m=l.currentWriteId,w=yg(n),N=AS(p,d,w);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=N,l.currentWriteId=$S(n),o.splice(o.indexOf(m),1),s=s.concat(hS(n.serverSyncTree_,l.path,N,l.currentWriteId,l.applyLocally)),s=s.concat(Gn(n.serverSyncTree_,m,!0))}else u=!0,h="nodata",s=s.concat(Gn(n.serverSyncTree_,l.currentWriteId,!0))}Ln(n.eventQueue_,t,s),s=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}Zo(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)zs(i[a]);pu(n,n.transactionQueueTree_)}function Tg(n,e){let t,i=n.transactionQueueTree_;for(t=O(e);t!==null&&Si(i)===void 0;)i=du(i,t),e=K(e),t=O(e);return i}function Ig(n,e){const t=[];return wg(n,e,t),t.sort((i,s)=>i.order-s.order),t}function wg(n,e,t){const i=Si(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Jo(e,s=>{wg(n,s,t)})}function Zo(n,e){const t=Si(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,lg(e,t.length>0?t:void 0)}Jo(e,i=>{Zo(n,i)})}function KS(n,e){const t=Qs(Tg(n,e)),i=du(n.transactionQueueTree_,e);return SS(i,s=>{Sa(n,s)}),Sa(n,i),ug(i,s=>{Sa(n,s)}),t}function Sa(n,e){const t=Si(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(v(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(v(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Gn(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?lg(e,void 0):t.length=r+1,Ln(n.eventQueue_,Qs(e),s);for(let o=0;o<i.length;o++)zs(i[o])}}/**
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
 */function QS(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function YS(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ze(`Invalid query segment '${t}' in query '${n}'`)}return e}const Nd=function(n,e){const t=XS(n),i=t.namespace;t.domain==="firebase.com"&&Ut(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Ut("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||c0();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Am(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new z(t.pathString)}},XS=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(s=QS(n.substring(u,h)));const d=YS(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */class Cg{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+de(this.snapshot.exportVal())}}class Ag{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class JS{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return v(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class mu{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return M(this._path)?null:Mm(this._path)}get ref(){return new qt(this._repo,this._path)}get _queryIdentifier(){const e=pd(this._queryParams),t=jc(e);return t==="{}"?"default":t}get _queryObject(){return pd(this._queryParams)}isEqual(e){if(e=ee(e),!(e instanceof mu))return!1;const t=this._repo===e._repo,i=Gc(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+z0(this._path)}}class qt extends mu{constructor(e,t){super(e,t,new Xc,!1)}get parent(){const e=xm(this._path);return e===null?null:new qt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ts{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new z(e),i=so(this.ref,e);return new Ts(this._node.getChild(t),i,te)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Ts(s,so(this.ref,i),te)))}hasChild(e){const t=new z(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Mb(n,e){return n=ee(n),n._checkNotDeleted("ref"),e!==void 0?so(n._root,e):n._root}function so(n,e){return n=ee(n),O(n._path)===null?DS("child","path",e,!1):pg("child","path",e,!1),new qt(n._repo,ae(n._path,e))}class gu{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new Cg("value",this,new Ts(e.snapshotNode,new qt(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ag(this,e,t):null}matches(e){return e instanceof gu?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class yu{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ag(this,e,t):null}createEvent(e,t){v(e.childName!=null,"Child events should have a childName.");const i=so(new qt(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new Cg(e.type,this,new Ts(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof yu?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function ZS(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const l=t,c=(u,h)=>{kd(n._repo,n,a),l(u,h)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new JS(t,r||void 0),a=e==="value"?new gu(o):new yu(e,o);return WS(n._repo,n,a),()=>kd(n._repo,n,a)}function Vb(n,e,t,i){return ZS(n,"value",e,t,i)}nS(qt);lS(qt);/**
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
 */const eP="FIREBASE_DATABASE_EMULATOR_HOST",wl={};let tP=!1;function nP(n,e,t,i){n.repoInfo_=new Am(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function iP(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||Ut("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Se("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Nd(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[eP]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Nd(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new ei(ei.OWNER):new E0(n.name,n.options,e);OS("Invalid Firebase Database URL",o),M(o.path)||Ut("Database URL must point to the root of a Firebase Database (not including a child path).");const h=rP(a,n,u,new v0(n.name,t));return new oP(h,n)}function sP(n,e){const t=wl[e];(!t||t[n.key]!==n)&&Ut(`Database ${e}(${n.repoInfo_}) has already been deleted.`),HS(n),delete t[n.key]}function rP(n,e,t,i){let s=wl[e.name];s||(s={},wl[e.name]=s);let r=s[n.toURLString()];return r&&Ut("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new FS(n,tP,t,i),s[n.toURLString()]=r,r}class oP{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(US(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new qt(this._repo,j())),this._rootInternal}_delete(){return this._rootInternal!==null&&(sP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ut("Cannot call "+e+" on a deleted database.")}}function aP(n=ws(),e){const t=vi(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=ao("database");i&&lP(t,...i)}return t}function lP(n,e,t,i={}){n=ee(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Ut("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Ut('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new ei(ei.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:Pl(i.mockUserToken,n.app.options.projectId);r=new ei(o)}nP(s,e,t,r)}/**
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
 */function cP(n){s0(ln),Dt(new mt("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return iP(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),$e(Xh,Jh,n),$e(Xh,Jh,"esm2017")}Nt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Nt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};cP();const uP={apiKey:"AIzaSyAprDEuUOpyd_CXTrlPjqWJPNBLYGHKi0I",authDomain:"mwenzi-d77c4.firebaseapp.com",projectId:"mwenzi-d77c4",storageBucket:"mwenzi-d77c4.appspot.com",messagingSenderId:"771753936157",appId:"1:771753936157:web:6b4573bf364f82461d4df4",databaseURL:"https://mwenzi-d77c4-default-rtdb.asia-southeast1.firebasedatabase.app/"},Ys=uf(uP);dT(Ys);ET(Ys,"asia-east1");const hP=JT(Ys);XT(hP);const xb=zA(Ys);aP(Ys);const dP=Nn(localStorage.getItem("userId")||"webjeda");dP.subscribe(n=>localStorage.userId=n);const fP=Nn(localStorage.getItem("subjectSelected1")||"webjeda"),pP=Nn(localStorage.getItem("timeFrom")||"webjeda"),_P=Nn(localStorage.getItem("timeTo")||"webjeda"),mP=Nn(localStorage.getItem("selectedSubject")||"webjeda");fP.subscribe(n=>localStorage.subjectSelected1=n);pP.subscribe(n=>localStorage.timeFrom=n);_P.subscribe(n=>localStorage.timeTo=n);mP.subscribe(n=>localStorage.selectedSubject=n);function gP(n,e,t,i){var s,r,o=!1,a=t.length>=2,l=(p,y,m)=>{if(s=y,a&&(r=p),!o){let w=e(p,y,m);if(e.length<2)y(w);else return w}o=!1},c=bg(n,l,i),u=!Array.isArray(n);function h(p){var y=t(p,r);u?(o=!0,n.set(y)):y.forEach((m,w)=>{o=!0,n[w].set(m)}),o=!1}var d=!1;function f(p){var y,m,w,N;if(d){N=p(Pa(c)),s(N);return}var F=c.subscribe(q=>{d?y?m=!0:y=!0:w=q});N=p(w),d=!0,s(N),F(),d=!1,m&&(N=Pa(c)),y&&h(N)}return{subscribe:c.subscribe,set(p){f(()=>p)},update:f}}const yP=20,Fn=Nn([]),vu=Nn(null),yr=new Map,Dd=n=>{if(yr.has(n))return;const e=setTimeout(()=>{yr.delete(n),Sg(n)},1e3);yr.set(n,e)},vP=n=>{const e=yr.get(n);e&&clearTimeout(e)};function Rg(n){n.id&&vP(n.id),Fn.update(e=>e.map(t=>t.id===n.id?{...t,...n}:t))}function EP(n){Fn.update(e=>[n,...e].slice(0,yP))}function TP(n){Pa(Fn).find(e=>e.id===n.id)?Rg(n):EP(n)}function IP(n){Fn.update(e=>(n?Dd(n):e.forEach(t=>{Dd(t.id)}),e.map(t=>t.id===n||n===void 0?{...t,visible:!1}:t)))}function Sg(n){Fn.update(e=>n===void 0?[]:e.filter(t=>t.id!==n))}function wP(n){vu.set(n)}function CP(n){let e;vu.update(t=>(e=n-(t||0),null)),Fn.update(t=>t.map(i=>({...i,pauseDuration:i.pauseDuration+e})))}const AP={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3};function RP(n={}){return{toasts:gP(Fn,t=>t.map(i=>{var s,r;return{...n,...n[i.type],...i,duration:i.duration||((s=n[i.type])==null?void 0:s.duration)||(n==null?void 0:n.duration)||AP[i.type],style:[n.style,(r=n[i.type])==null?void 0:r.style,i.style].join(";")}}),t=>t),pausedAt:vu}}const SP=n=>typeof n=="function",Od=(n,e)=>SP(n)?n(e):n,PP=(()=>{let n=0;return()=>(n+=1,n.toString())})(),Pg=(()=>{let n;return()=>{if(n===void 0&&typeof window<"u"){const e=matchMedia("(prefers-reduced-motion: reduce)");n=!e||e.matches}return n}})(),bP=(n,e="blank",t)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:n,pauseDuration:0,...t,id:(t==null?void 0:t.id)||PP()}),Xs=n=>(e,t)=>{const i=bP(e,n,t);return TP(i),i.id},Xe=(n,e)=>Xs("blank")(n,e);Xe.error=Xs("error");Xe.success=Xs("success");Xe.loading=Xs("loading");Xe.custom=Xs("custom");Xe.dismiss=n=>{IP(n)};Xe.remove=n=>Sg(n);Xe.promise=(n,e,t)=>{const i=Xe.loading(e.loading,{...t,...t==null?void 0:t.loading});return n.then(s=>(Xe.success(Od(e.success,s),{id:i,...t,...t==null?void 0:t.success}),s)).catch(s=>{Xe.error(Od(e.error,s),{id:i,...t,...t==null?void 0:t.error})}),n};function kP(n,e,t){const{reverseOrder:i,gutter:s=8,defaultPosition:r}=t||{},o=e.filter(u=>(u.position||r)===(n.position||r)&&u.height),a=o.findIndex(u=>u.id===n.id),l=o.filter((u,h)=>h<a&&u.visible).length;return o.filter(u=>u.visible).slice(...i?[l+1]:[0,l]).reduce((u,h)=>u+(h.height||0)+s,0)}const NP={startPause(){wP(Date.now())},endPause(){CP(Date.now())},updateHeight:(n,e)=>{Rg({id:n,height:e})},calculateOffset:kP};function DP(n){const{toasts:e,pausedAt:t}=RP(n),i=new Map;let s;const r=[t.subscribe(o=>{if(o){for(const[,a]of i)clearTimeout(a);i.clear()}s=o}),e.subscribe(o=>{if(s)return;const a=Date.now();for(const l of o){if(i.has(l.id)||l.duration===1/0)continue;const c=(l.duration||0)+l.pauseDuration-(a-l.createdAt);if(c<0)return l.visible&&Xe.dismiss(l.id),null;i.set(l.id,setTimeout(()=>Xe.dismiss(l.id),c))}})];return Ng(()=>{for(const o of r)o()}),{toasts:e,handlers:NP}}function OP(n){let e;return{c(){e=yt("div"),this.h()},l(t){e=vt(t,"DIV",{class:!0}),Et(e).forEach(H),this.h()},h(){be(e,"class","svelte-11kvm4p"),Z(e,"--primary",n[0]),Z(e,"--secondary",n[1])},m(t,i){Te(t,e,i)},p(t,[i]){i&1&&Z(e,"--primary",t[0]),i&2&&Z(e,"--secondary",t[1])},i:pt,o:pt,d(t){t&&H(e)}}}function MP(n,e,t){let{primary:i="#61d345"}=e,{secondary:s="#fff"}=e;return n.$$set=r=>{"primary"in r&&t(0,i=r.primary),"secondary"in r&&t(1,s=r.secondary)},[i,s]}class VP extends on{constructor(e){super(),an(this,e,MP,OP,rn,{primary:0,secondary:1})}}function xP(n){let e;return{c(){e=yt("div"),this.h()},l(t){e=vt(t,"DIV",{class:!0}),Et(e).forEach(H),this.h()},h(){be(e,"class","svelte-1ee93ns"),Z(e,"--primary",n[0]),Z(e,"--secondary",n[1])},m(t,i){Te(t,e,i)},p(t,[i]){i&1&&Z(e,"--primary",t[0]),i&2&&Z(e,"--secondary",t[1])},i:pt,o:pt,d(t){t&&H(e)}}}function LP(n,e,t){let{primary:i="#ff4b4b"}=e,{secondary:s="#fff"}=e;return n.$$set=r=>{"primary"in r&&t(0,i=r.primary),"secondary"in r&&t(1,s=r.secondary)},[i,s]}class FP extends on{constructor(e){super(),an(this,e,LP,xP,rn,{primary:0,secondary:1})}}function UP(n){let e;return{c(){e=yt("div"),this.h()},l(t){e=vt(t,"DIV",{class:!0}),Et(e).forEach(H),this.h()},h(){be(e,"class","svelte-1j7dflg"),Z(e,"--primary",n[0]),Z(e,"--secondary",n[1])},m(t,i){Te(t,e,i)},p(t,[i]){i&1&&Z(e,"--primary",t[0]),i&2&&Z(e,"--secondary",t[1])},i:pt,o:pt,d(t){t&&H(e)}}}function BP(n,e,t){let{primary:i="#616161"}=e,{secondary:s="#e0e0e0"}=e;return n.$$set=r=>{"primary"in r&&t(0,i=r.primary),"secondary"in r&&t(1,s=r.secondary)},[i,s]}class qP extends on{constructor(e){super(),an(this,e,BP,UP,rn,{primary:0,secondary:1})}}function $P(n){let e,t,i,s;const r=[n[0]];let o={};for(let l=0;l<r.length;l+=1)o=ro(o,r[l]);t=new qP({props:o});let a=n[2]!=="loading"&&Md(n);return{c(){e=yt("div"),Oe(t.$$.fragment),i=Wd(),a&&a.c(),this.h()},l(l){e=vt(l,"DIV",{class:!0});var c=Et(e);Ge(t.$$.fragment,c),i=Hd(c),a&&a.l(c),c.forEach(H),this.h()},h(){be(e,"class","indicator svelte-1kgeier")},m(l,c){Te(l,e,c),Me(t,e,null),zd(e,i),a&&a.m(e,null),s=!0},p(l,c){const u=c&1?oo(r,[Cl(l[0])]):{};t.$set(u),l[2]!=="loading"?a?(a.p(l,c),c&4&&U(a,1)):(a=Md(l),a.c(),U(a,1),a.m(e,null)):a&&(Tt(),B(a,1,1,()=>{a=null}),It())},i(l){s||(U(t.$$.fragment,l),U(a),s=!0)},o(l){B(t.$$.fragment,l),B(a),s=!1},d(l){l&&H(e),Ve(t),a&&a.d()}}}function jP(n){let e,t,i;var s=n[1];function r(o,a){return{}}return s&&(e=ii(s,r())),{c(){e&&Oe(e.$$.fragment),t=_t()},l(o){e&&Ge(e.$$.fragment,o),t=_t()},m(o,a){e&&Me(e,o,a),Te(o,t,a),i=!0},p(o,a){if(a&2&&s!==(s=o[1])){if(e){Tt();const l=e;B(l.$$.fragment,1,0,()=>{Ve(l,1)}),It()}s?(e=ii(s,r()),Oe(e.$$.fragment),U(e.$$.fragment,1),Me(e,t.parentNode,t)):e=null}},i(o){i||(e&&U(e.$$.fragment,o),i=!0)},o(o){e&&B(e.$$.fragment,o),i=!1},d(o){o&&H(t),e&&Ve(e,o)}}}function WP(n){let e,t;return{c(){e=yt("div"),t=Gd(n[1]),this.h()},l(i){e=vt(i,"DIV",{class:!0});var s=Et(e);t=Kd(s,n[1]),s.forEach(H),this.h()},h(){be(e,"class","animated svelte-1kgeier")},m(i,s){Te(i,e,s),zd(e,t)},p(i,s){s&2&&Qd(t,i[1])},i:pt,o:pt,d(i){i&&H(e)}}}function Md(n){let e,t,i,s;const r=[zP,HP],o=[];function a(l,c){return l[2]==="error"?0:1}return t=a(n),i=o[t]=r[t](n),{c(){e=yt("div"),i.c(),this.h()},l(l){e=vt(l,"DIV",{class:!0});var c=Et(e);i.l(c),c.forEach(H),this.h()},h(){be(e,"class","status svelte-1kgeier")},m(l,c){Te(l,e,c),o[t].m(e,null),s=!0},p(l,c){let u=t;t=a(l),t===u?o[t].p(l,c):(Tt(),B(o[u],1,1,()=>{o[u]=null}),It(),i=o[t],i?i.p(l,c):(i=o[t]=r[t](l),i.c()),U(i,1),i.m(e,null))},i(l){s||(U(i),s=!0)},o(l){B(i),s=!1},d(l){l&&H(e),o[t].d()}}}function HP(n){let e,t;const i=[n[0]];let s={};for(let r=0;r<i.length;r+=1)s=ro(s,i[r]);return e=new VP({props:s}),{c(){Oe(e.$$.fragment)},l(r){Ge(e.$$.fragment,r)},m(r,o){Me(e,r,o),t=!0},p(r,o){const a=o&1?oo(i,[Cl(r[0])]):{};e.$set(a)},i(r){t||(U(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){Ve(e,r)}}}function zP(n){let e,t;const i=[n[0]];let s={};for(let r=0;r<i.length;r+=1)s=ro(s,i[r]);return e=new FP({props:s}),{c(){Oe(e.$$.fragment)},l(r){Ge(e.$$.fragment,r)},m(r,o){Me(e,r,o),t=!0},p(r,o){const a=o&1?oo(i,[Cl(r[0])]):{};e.$set(a)},i(r){t||(U(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){Ve(e,r)}}}function GP(n){let e,t,i,s;const r=[WP,jP,$P],o=[];function a(l,c){return typeof l[1]=="string"?0:typeof l[1]<"u"?1:l[2]!=="blank"?2:-1}return~(e=a(n))&&(t=o[e]=r[e](n)),{c(){t&&t.c(),i=_t()},l(l){t&&t.l(l),i=_t()},m(l,c){~e&&o[e].m(l,c),Te(l,i,c),s=!0},p(l,[c]){let u=e;e=a(l),e===u?~e&&o[e].p(l,c):(t&&(Tt(),B(o[u],1,1,()=>{o[u]=null}),It()),~e?(t=o[e],t?t.p(l,c):(t=o[e]=r[e](l),t.c()),U(t,1),t.m(i.parentNode,i)):t=null)},i(l){s||(U(t),s=!0)},o(l){B(t),s=!1},d(l){l&&H(i),~e&&o[e].d(l)}}}function KP(n,e,t){let i,s,r,{toast:o}=e;return n.$$set=a=>{"toast"in a&&t(3,o=a.toast)},n.$$.update=()=>{n.$$.dirty&8&&t(2,{type:i,icon:s,iconTheme:r}=o,i,(t(1,s),t(3,o)),(t(0,r),t(3,o)))},[r,s,i,o]}class Eu extends on{constructor(e){super(),an(this,e,KP,GP,rn,{toast:3})}}function QP(n){let e,t,i;var s=n[0].message;function r(o,a){return{props:{toast:o[0]}}}return s&&(e=ii(s,r(n))),{c(){e&&Oe(e.$$.fragment),t=_t()},l(o){e&&Ge(e.$$.fragment,o),t=_t()},m(o,a){e&&Me(e,o,a),Te(o,t,a),i=!0},p(o,a){if(a&1&&s!==(s=o[0].message)){if(e){Tt();const l=e;B(l.$$.fragment,1,0,()=>{Ve(l,1)}),It()}s?(e=ii(s,r(o)),Oe(e.$$.fragment),U(e.$$.fragment,1),Me(e,t.parentNode,t)):e=null}else if(s){const l={};a&1&&(l.toast=o[0]),e.$set(l)}},i(o){i||(e&&U(e.$$.fragment,o),i=!0)},o(o){e&&B(e.$$.fragment,o),i=!1},d(o){o&&H(t),e&&Ve(e,o)}}}function YP(n){let e=n[0].message+"",t;return{c(){t=Gd(e)},l(i){t=Kd(i,e)},m(i,s){Te(i,t,s)},p(i,s){s&1&&e!==(e=i[0].message+"")&&Qd(t,e)},i:pt,o:pt,d(i){i&&H(t)}}}function XP(n){let e,t,i,s;const r=[YP,QP],o=[];function a(u,h){return typeof u[0].message=="string"?0:1}t=a(n),i=o[t]=r[t](n);let l=[{class:"message"},n[0].ariaProps],c={};for(let u=0;u<l.length;u+=1)c=ro(c,l[u]);return{c(){e=yt("div"),i.c(),this.h()},l(u){e=vt(u,"DIV",{class:!0});var h=Et(e);i.l(h),h.forEach(H),this.h()},h(){Tu(e,c),Bi(e,"svelte-1nauejd",!0)},m(u,h){Te(u,e,h),o[t].m(e,null),s=!0},p(u,[h]){let d=t;t=a(u),t===d?o[t].p(u,h):(Tt(),B(o[d],1,1,()=>{o[d]=null}),It(),i=o[t],i?i.p(u,h):(i=o[t]=r[t](u),i.c()),U(i,1),i.m(e,null)),Tu(e,c=oo(l,[{class:"message"},h&1&&u[0].ariaProps])),Bi(e,"svelte-1nauejd",!0)},i(u){s||(U(i),s=!0)},o(u){B(i),s=!1},d(u){u&&H(e),o[t].d()}}}function JP(n,e,t){let{toast:i}=e;return n.$$set=s=>{"toast"in s&&t(0,i=s.toast)},[i]}class ea extends on{constructor(e){super(),an(this,e,JP,XP,rn,{toast:0})}}const ZP=n=>({toast:n&1}),Vd=n=>({ToastIcon:Eu,ToastMessage:ea,toast:n[0]});function eb(n){let e;const t=n[6].default,i=Bd(t,n,n[7],Vd),s=i||nb(n);return{c(){s&&s.c()},l(r){s&&s.l(r)},m(r,o){s&&s.m(r,o),e=!0},p(r,o){i?i.p&&(!e||o&129)&&qd(i,t,r,r[7],e?jd(t,r[7],o,ZP):$d(r[7]),Vd):s&&s.p&&(!e||o&1)&&s.p(r,e?o:-1)},i(r){e||(U(s,r),e=!0)},o(r){B(s,r),e=!1},d(r){s&&s.d(r)}}}function tb(n){let e,t,i;var s=n[2];function r(o,a){return{props:{$$slots:{message:[sb],icon:[ib]},$$scope:{ctx:o}}}}return s&&(e=ii(s,r(n))),{c(){e&&Oe(e.$$.fragment),t=_t()},l(o){e&&Ge(e.$$.fragment,o),t=_t()},m(o,a){e&&Me(e,o,a),Te(o,t,a),i=!0},p(o,a){if(a&4&&s!==(s=o[2])){if(e){Tt();const l=e;B(l.$$.fragment,1,0,()=>{Ve(l,1)}),It()}s?(e=ii(s,r(o)),Oe(e.$$.fragment),U(e.$$.fragment,1),Me(e,t.parentNode,t)):e=null}else if(s){const l={};a&129&&(l.$$scope={dirty:a,ctx:o}),e.$set(l)}},i(o){i||(e&&U(e.$$.fragment,o),i=!0)},o(o){e&&B(e.$$.fragment,o),i=!1},d(o){o&&H(t),e&&Ve(e,o)}}}function nb(n){let e,t,i,s;return e=new Eu({props:{toast:n[0]}}),i=new ea({props:{toast:n[0]}}),{c(){Oe(e.$$.fragment),t=Wd(),Oe(i.$$.fragment)},l(r){Ge(e.$$.fragment,r),t=Hd(r),Ge(i.$$.fragment,r)},m(r,o){Me(e,r,o),Te(r,t,o),Me(i,r,o),s=!0},p(r,o){const a={};o&1&&(a.toast=r[0]),e.$set(a);const l={};o&1&&(l.toast=r[0]),i.$set(l)},i(r){s||(U(e.$$.fragment,r),U(i.$$.fragment,r),s=!0)},o(r){B(e.$$.fragment,r),B(i.$$.fragment,r),s=!1},d(r){r&&H(t),Ve(e,r),Ve(i,r)}}}function ib(n){let e,t;return e=new Eu({props:{toast:n[0],slot:"icon"}}),{c(){Oe(e.$$.fragment)},l(i){Ge(e.$$.fragment,i)},m(i,s){Me(e,i,s),t=!0},p(i,s){const r={};s&1&&(r.toast=i[0]),e.$set(r)},i(i){t||(U(e.$$.fragment,i),t=!0)},o(i){B(e.$$.fragment,i),t=!1},d(i){Ve(e,i)}}}function sb(n){let e,t;return e=new ea({props:{toast:n[0],slot:"message"}}),{c(){Oe(e.$$.fragment)},l(i){Ge(e.$$.fragment,i)},m(i,s){Me(e,i,s),t=!0},p(i,s){const r={};s&1&&(r.toast=i[0]),e.$set(r)},i(i){t||(U(e.$$.fragment,i),t=!0)},o(i){B(e.$$.fragment,i),t=!1},d(i){Ve(e,i)}}}function rb(n){let e,t,i,s,r,o;const a=[tb,eb],l=[];function c(u,h){return u[2]?0:1}return t=c(n),i=l[t]=a[t](n),{c(){e=yt("div"),i.c(),this.h()},l(u){e=vt(u,"DIV",{class:!0,style:!0});var h=Et(e);i.l(h),h.forEach(H),this.h()},h(){be(e,"class",s="base "+(n[0].height?n[4]:"transparent")+" "+(n[0].className||"")+" svelte-ug60r4"),be(e,"style",r=n[1]+"; "+n[0].style),Z(e,"--factor",n[3])},m(u,h){Te(u,e,h),l[t].m(e,null),o=!0},p(u,[h]){let d=t;t=c(u),t===d?l[t].p(u,h):(Tt(),B(l[d],1,1,()=>{l[d]=null}),It(),i=l[t],i?i.p(u,h):(i=l[t]=a[t](u),i.c()),U(i,1),i.m(e,null)),(!o||h&17&&s!==(s="base "+(u[0].height?u[4]:"transparent")+" "+(u[0].className||"")+" svelte-ug60r4"))&&be(e,"class",s),(!o||h&3&&r!==(r=u[1]+"; "+u[0].style))&&be(e,"style",r);const f=h&3;(h&11||f)&&Z(e,"--factor",u[3])},i(u){o||(U(i),o=!0)},o(u){B(i),o=!1},d(u){u&&H(e),l[t].d()}}}function ob(n,e,t){let{$$slots:i={},$$scope:s}=e,{toast:r}=e,{position:o=void 0}=e,{style:a=""}=e,{Component:l=void 0}=e,c,u;return n.$$set=h=>{"toast"in h&&t(0,r=h.toast),"position"in h&&t(5,o=h.position),"style"in h&&t(1,a=h.style),"Component"in h&&t(2,l=h.Component),"$$scope"in h&&t(7,s=h.$$scope)},n.$$.update=()=>{if(n.$$.dirty&33){const h=(r.position||o||"top-center").includes("top");t(3,c=h?1:-1);const[d,f]=Pg()?["fadeIn","fadeOut"]:["enter","exit"];t(4,u=r.visible?d:f)}},[r,a,l,c,u,o,i,s]}class ab extends on{constructor(e){super(),an(this,e,ob,rb,rn,{toast:0,position:5,style:1,Component:2})}}const lb=n=>({toast:n&1}),xd=n=>({toast:n[0]});function cb(n){let e;const t=n[8].default,i=Bd(t,n,n[7],xd),s=i||hb(n);return{c(){s&&s.c()},l(r){s&&s.l(r)},m(r,o){s&&s.m(r,o),e=!0},p(r,o){i?i.p&&(!e||o&129)&&qd(i,t,r,r[7],e?jd(t,r[7],o,lb):$d(r[7]),xd):s&&s.p&&(!e||o&1)&&s.p(r,e?o:-1)},i(r){e||(U(s,r),e=!0)},o(r){B(s,r),e=!1},d(r){s&&s.d(r)}}}function ub(n){let e,t;return e=new ea({props:{toast:n[0]}}),{c(){Oe(e.$$.fragment)},l(i){Ge(e.$$.fragment,i)},m(i,s){Me(e,i,s),t=!0},p(i,s){const r={};s&1&&(r.toast=i[0]),e.$set(r)},i(i){t||(U(e.$$.fragment,i),t=!0)},o(i){B(e.$$.fragment,i),t=!1},d(i){Ve(e,i)}}}function hb(n){let e,t;return e=new ab({props:{toast:n[0],position:n[0].position}}),{c(){Oe(e.$$.fragment)},l(i){Ge(e.$$.fragment,i)},m(i,s){Me(e,i,s),t=!0},p(i,s){const r={};s&1&&(r.toast=i[0]),s&1&&(r.position=i[0].position),e.$set(r)},i(i){t||(U(e.$$.fragment,i),t=!0)},o(i){B(e.$$.fragment,i),t=!1},d(i){Ve(e,i)}}}function db(n){let e,t,i,s;const r=[ub,cb],o=[];function a(l,c){return l[0].type==="custom"?0:1}return t=a(n),i=o[t]=r[t](n),{c(){e=yt("div"),i.c(),this.h()},l(l){e=vt(l,"DIV",{class:!0});var c=Et(e);i.l(c),c.forEach(H),this.h()},h(){be(e,"class","wrapper svelte-v01oml"),Bi(e,"active",n[0].visible),Bi(e,"transition",!Pg()),Z(e,"--factor",n[3]),Z(e,"--offset",n[0].offset),Z(e,"top",n[5]),Z(e,"bottom",n[4]),Z(e,"justify-content",n[2])},m(l,c){Te(l,e,c),o[t].m(e,null),n[9](e),s=!0},p(l,[c]){let u=t;t=a(l),t===u?o[t].p(l,c):(Tt(),B(o[u],1,1,()=>{o[u]=null}),It(),i=o[t],i?i.p(l,c):(i=o[t]=r[t](l),i.c()),U(i,1),i.m(e,null)),(!s||c&1)&&Bi(e,"active",l[0].visible),c&8&&Z(e,"--factor",l[3]),c&1&&Z(e,"--offset",l[0].offset),c&32&&Z(e,"top",l[5]),c&16&&Z(e,"bottom",l[4]),c&4&&Z(e,"justify-content",l[2])},i(l){s||(U(i),s=!0)},o(l){B(i),s=!1},d(l){l&&H(e),o[t].d(),n[9](null)}}}function fb(n,e,t){let i,s,r,o,{$$slots:a={},$$scope:l}=e,{toast:c}=e,{setHeight:u}=e,h;Dg(()=>{u(h.getBoundingClientRect().height)});function d(f){Og[f?"unshift":"push"](()=>{h=f,t(1,h)})}return n.$$set=f=>{"toast"in f&&t(0,c=f.toast),"setHeight"in f&&t(6,u=f.setHeight),"$$scope"in f&&t(7,l=f.$$scope)},n.$$.update=()=>{var f,p,y,m,w,N;n.$$.dirty&1&&t(5,i=(f=c.position)!=null&&f.includes("top")?0:null),n.$$.dirty&1&&t(4,s=(p=c.position)!=null&&p.includes("bottom")?0:null),n.$$.dirty&1&&t(3,r=(y=c.position)!=null&&y.includes("top")?1:-1),n.$$.dirty&1&&t(2,o=((m=c.position)==null?void 0:m.includes("center"))&&"center"||(((w=c.position)==null?void 0:w.includes("right"))||((N=c.position)==null?void 0:N.includes("end")))&&"flex-end"||null)},[c,h,o,r,s,i,u,l,a,d]}class pb extends on{constructor(e){super(),an(this,e,fb,db,rn,{toast:0,setHeight:6})}}function Ld(n,e,t){const i=n.slice();return i[11]=e[t],i}function Fd(n,e){let t,i,s;function r(...o){return e[10](e[11],...o)}return i=new pb({props:{toast:e[11],setHeight:r}}),{key:n,first:null,c(){t=_t(),Oe(i.$$.fragment),this.h()},l(o){t=_t(),Ge(i.$$.fragment,o),this.h()},h(){this.first=t},m(o,a){Te(o,t,a),Me(i,o,a),s=!0},p(o,a){e=o;const l={};a&4&&(l.toast=e[11]),a&4&&(l.setHeight=r),i.$set(l)},i(o){s||(U(i.$$.fragment,o),s=!0)},o(o){B(i.$$.fragment,o),s=!1},d(o){o&&H(t),Ve(i,o)}}}function _b(n){let e,t=[],i=new Map,s,r,o,a,l=wu(n[2]);const c=u=>u[11].id;for(let u=0;u<l.length;u+=1){let h=Ld(n,l,u),d=c(h);i.set(d,t[u]=Fd(d,h))}return{c(){e=yt("div");for(let u=0;u<t.length;u+=1)t[u].c();this.h()},l(u){e=vt(u,"DIV",{class:!0,style:!0,role:!0});var h=Et(e);for(let d=0;d<t.length;d+=1)t[d].l(h);h.forEach(H),this.h()},h(){be(e,"class",s="toaster "+(n[1]||"")+" svelte-1phplh9"),be(e,"style",n[0]),be(e,"role","alert")},m(u,h){Te(u,e,h);for(let d=0;d<t.length;d+=1)t[d]&&t[d].m(e,null);r=!0,o||(a=[Iu(e,"mouseenter",n[4].startPause),Iu(e,"mouseleave",n[4].endPause)],o=!0)},p(u,[h]){h&20&&(l=wu(u[2]),Tt(),t=xg(t,h,c,1,u,l,i,e,Vg,Fd,null,Ld),It()),(!r||h&2&&s!==(s="toaster "+(u[1]||"")+" svelte-1phplh9"))&&be(e,"class",s),(!r||h&1)&&be(e,"style",u[0])},i(u){if(!r){for(let h=0;h<l.length;h+=1)U(t[h]);r=!0}},o(u){for(let h=0;h<t.length;h+=1)B(t[h]);r=!1},d(u){u&&H(e);for(let h=0;h<t.length;h+=1)t[h].d();o=!1,Ud(a)}}}function mb(n,e,t){let i,{reverseOrder:s=!1}=e,{position:r="top-center"}=e,{toastOptions:o=void 0}=e,{gutter:a=8}=e,{containerStyle:l=void 0}=e,{containerClassName:c=void 0}=e;const{toasts:u,handlers:h}=DP(o);Mg(n,u,p=>t(9,i=p));let d;const f=(p,y)=>h.updateHeight(p.id,y);return n.$$set=p=>{"reverseOrder"in p&&t(5,s=p.reverseOrder),"position"in p&&t(6,r=p.position),"toastOptions"in p&&t(7,o=p.toastOptions),"gutter"in p&&t(8,a=p.gutter),"containerStyle"in p&&t(0,l=p.containerStyle),"containerClassName"in p&&t(1,c=p.containerClassName)},n.$$.update=()=>{n.$$.dirty&864&&t(2,d=i.map(p=>({...p,position:p.position||r,offset:h.calculateOffset(p,i,{reverseOrder:s,gutter:a,defaultPosition:r})})))},[l,c,d,u,h,s,r,o,a,i,f]}class Lb extends on{constructor(e){super(),an(this,e,mb,_b,rn,{reverseOrder:5,position:6,toastOptions:7,gutter:8,containerStyle:0,containerClassName:1})}}const Fb=kg("goto");export{Lb as T,Fb as a,pP as b,Cb as c,_P as d,wu as e,xb as f,Pb as g,WA as h,Sb as i,bb as j,mP as k,aP as l,Vb as m,so as n,Ob as o,kb as p,Ab as q,Mb as r,fP as s,Xe as t,dP as u,Nb as v,Rb as w,Db as x};
