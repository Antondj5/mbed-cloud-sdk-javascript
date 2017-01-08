!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.mbedCloudSDK=t()}}(function(){return function t(e,r,i){function n(s,a){if(!r[s]){if(!e[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(o)return o(s,!0);var p=new Error("Cannot find module '"+s+"'");throw p.code="MODULE_NOT_FOUND",p}var h=r[s]={exports:{}};e[s][0].call(h.exports,function(t){var r=e[s][1][t];return n(r?r:t)},h,h.exports,t,e,r,i)}return r[s].exports}for(var o="function"==typeof require&&require,s=0;s<i.length;s++)n(i[s]);return n}({1:[function(t,e,r){(function(e){"use strict";function i(t,e){var r=t.uri;r=r.replace(/([:])?\/+/g,function(t,e){return e?t:"/"});var i=a(t.method,r);if(t.auth&&(t.auth.username||t.auth.password)&&i.auth(t.auth.username||"",t.auth.password||""),i.query(n(t.qs)),i.set(n(t.headers)),i.timeout(6e4),t.json&&(i.type("application/json"),i.accept("application/json")),t.form)i.type("application/x-www-form-urlencoded"),i.send(n(t.form));else if(t.formData){i.type("multipart/form-data");var s=n(t.formData);for(var u in s)s.hasOwnProperty(u)&&(o(s[u])?i.attach(u,s[u]):i.field(u,s[u]))}else t.body&&i.send(t.body);return i.end(function(t,r){if(e){var i=null;r&&!t&&(i=r.body||r.text),e(t,i,r)}}),i}function n(t){var e={};for(var r in t)if(t.hasOwnProperty(r)&&void 0!=t[r]&&null!=t[r]){var i=t[r];o(i)||Array.isArray(i)?e[r]=i:e[r]=s(i)}return e}function o(r){return!!("undefined"==typeof window&&"function"==typeof t&&t("fs")&&r instanceof t("fs").ReadStream)||("function"==typeof e&&r instanceof e||("function"==typeof Blob&&r instanceof Blob||"function"==typeof File&&r instanceof File))}function s(t){return void 0==t||null==t?"":t instanceof Date?t.toJSON():t.toString()}var a=t("superagent"),u="https://api.mbedcloud.com";r.request=i,r.normalizeParams=n,r.isFileParam=o,r.paramToString=s;var p=function(){function t(){}return t}();r.Body=p;var h=function(){function t(){}return t}();r.DeveloperCertificate=h;var c=function(){function t(){}return t.prototype.applyToRequest=function(t){t.auth={username:this.username,password:this.password}},t}();r.HttpBasicAuth=c;var f=function(){function t(){}return t.prototype.applyToRequest=function(t){t&&t.headers&&(t.headers.Authorization="Bearer "+this.accessToken)},t}();r.OAuth=f;var l=function(){function t(t,e){this.location=t,this.paramName=e}return t.prototype.applyToRequest=function(t){"query"==this.location?t.qs[this.paramName]=this.apiKey:"header"==this.location&&t&&t.headers&&(t.headers[this.paramName]=this.apiKey)},t}();r.ApiKeyAuth=l;var d=function(){function t(){}return t.prototype.applyToRequest=function(t){},t}();r.VoidAuth=d,function(t){t[t.Bearer=0]="Bearer"}(r.DefaultApiApiKeys||(r.DefaultApiApiKeys={}));var y=r.DefaultApiApiKeys,m=function(){function t(t,e,r){this.basePath=u,this.defaultHeaders={},this._useQuerystring=!1,this.authentications={default:new d,Bearer:new l("header","Authorization")},e?r&&(this.basePath=r):t&&(this.basePath=t)}return Object.defineProperty(t.prototype,"useQuerystring",{set:function(t){this._useQuerystring=t},enumerable:!0,configurable:!0}),t.prototype.setApiKey=function(t,e){this.authentications[y[t]].apiKey=e},t.prototype.extendObj=function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);return t},t.prototype.v3DeveloperCertificateDelete=function(t,e){var r=this.basePath+"/v3/developer-certificate",n={},o=this.extendObj({},this.defaultHeaders),s={};if(null===t||void 0===t)throw new Error("Required parameter authorization was null or undefined when calling v3DeveloperCertificateDelete.");o.Authorization=t;var a=!1,u={method:"DELETE",qs:n,headers:o,uri:r,useQuerystring:this._useQuerystring,json:!0};return this.authentications.Bearer.applyToRequest(u),this.authentications.default.applyToRequest(u),Object.keys(s).length&&(a?u.formData=s:u.form=s),i(u,function(t,r,i){e&&e(t,r,i)})},t.prototype.v3DeveloperCertificateGet=function(t,e){var r=this.basePath+"/v3/developer-certificate",n={},o=this.extendObj({},this.defaultHeaders),s={};if(null===t||void 0===t)throw new Error("Required parameter authorization was null or undefined when calling v3DeveloperCertificateGet.");o.Authorization=t;var a=!1,u={method:"GET",qs:n,headers:o,uri:r,useQuerystring:this._useQuerystring,json:!0};return this.authentications.Bearer.applyToRequest(u),this.authentications.default.applyToRequest(u),Object.keys(s).length&&(a?u.formData=s:u.form=s),i(u,function(t,r,i){e&&e(t,r,i)})},t.prototype.v3DeveloperCertificatePost=function(t,e,r){var n=this.basePath+"/v3/developer-certificate",o={},s=this.extendObj({},this.defaultHeaders),a={};if(null===t||void 0===t)throw new Error("Required parameter authorization was null or undefined when calling v3DeveloperCertificatePost.");if(null===e||void 0===e)throw new Error("Required parameter body was null or undefined when calling v3DeveloperCertificatePost.");s.Authorization=t;var u=!1,p={method:"POST",qs:o,headers:s,uri:n,useQuerystring:this._useQuerystring,json:!0,body:e};return this.authentications.Bearer.applyToRequest(p),this.authentications.default.applyToRequest(p),Object.keys(a).length&&(u?p.formData=a:p.form=a),i(p,function(t,e,i){r&&r(t,e,i)})},t}();r.DefaultApi=m}).call(this,t("buffer").Buffer)},{buffer:4,fs:4,superagent:6}],2:[function(t,e,r){"use strict";var i=t("../_api/developer_certificate"),n=function(){function t(t){this.default=new i.DefaultApi(t.host),this.default.setApiKey(i.DefaultApiApiKeys.Bearer,"Bearer "+t.accessKey)}return t}();r.Api=n},{"../_api/developer_certificate":1}],3:[function(t,e,r){"use strict";/*
* mbed Cloud JavaScript SDK
* Copyright ARM Limited 2017
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var i=t("polygoat"),n=t("./api"),o=function(){function t(t){this._api=new n.Api(t)}return t.prototype.postCertificate=function(t,e){var r=this;return i(function(e){r._api.default.v3DeveloperCertificatePost("authorization",t,function(t,r){return t?e(t):void e(null,r)})},e)},t.prototype.getCertificate=function(t){var e=this;return i(function(t){e._api.default.v3DeveloperCertificateGet("options.authorization",function(e,r){return e?t(e):void t(null,r)})},t)},t.prototype.deleteCertificate=function(t){var e=this;return i(function(t){e._api.default.v3DeveloperCertificateDelete("options.authorization",function(e,r){return e?t(e):void t(null,r)})},t)},t}();r.Development=o},{"./api":2,polygoat:5}],4:[function(t,e,r){},{}],5:[function(t,e,r){(function(t){!function(t){"use strict";function r(e,r,i){if(!r){var n=i||t.Promise;return new n(function(t,r){e(function(e,i){null!==e&&void 0!==e?r(e):t(i)})})}e(r)}"undefined"!=typeof e&&e.exports?e.exports=r:window.polygoat=r}("undefined"!=typeof t?t:this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],6:[function(t,e,r){function i(){}function n(t){if(!y(t))return t;var e=[];for(var r in t)o(e,r,t[r]);return e.join("&")}function o(t,e,r){if(null!=r)if(Array.isArray(r))r.forEach(function(r){o(t,e,r)});else if(y(r))for(var i in r)o(t,e+"["+i+"]",r[i]);else t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));else null===r&&t.push(encodeURIComponent(e))}function s(t){for(var e,r,i={},n=t.split("&"),o=0,s=n.length;o<s;++o)e=n[o],r=e.indexOf("="),r==-1?i[decodeURIComponent(e)]="":i[decodeURIComponent(e.slice(0,r))]=decodeURIComponent(e.slice(r+1));return i}function a(t){var e,r,i,n,o=t.split(/\r?\n/),s={};o.pop();for(var a=0,u=o.length;a<u;++a)r=o[a],e=r.indexOf(":"),i=r.slice(0,e).toLowerCase(),n=w(r.slice(e+1)),s[i]=n;return s}function u(t){return/[\/+]json\b/.test(t)}function p(t,e){e=e||{},this.req=t,this.xhr=this.req.xhr,this.text="HEAD"!=this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||"undefined"==typeof this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText;var r=this.xhr.status;1223===r&&(r=204),this._setStatusProperties(r),this.header=this.headers=a(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this._setHeaderProperties(this.header),null===this.text&&t._responseType?this.body=this.xhr.response:this.body="HEAD"!=this.req.method?this._parseBody(this.text?this.text:this.xhr.response):null}function h(t,e){var r=this;this._query=this._query||[],this.method=t,this.url=e,this.header={},this._header={},this.on("end",function(){var t=null,e=null;try{e=new p(r)}catch(e){return t=new Error("Parser is unable to parse the response"),t.parse=!0,t.original=e,r.xhr?(t.rawResponse="undefined"==typeof r.xhr.responseType?r.xhr.responseText:r.xhr.response,t.status=r.xhr.status?r.xhr.status:null,t.statusCode=t.status):(t.rawResponse=null,t.status=null),r.callback(t)}r.emit("response",e);var i;try{r._isResponseOK(e)||(i=new Error(e.statusText||"Unsuccessful HTTP response"),i.original=t,i.response=e,i.status=e.status)}catch(t){i=t}i?r.callback(i,e):r.callback(null,e)})}function c(t,e){var r=_("DELETE",t);return e&&r.end(e),r}var f;"undefined"!=typeof window?f=window:"undefined"!=typeof self?f=self:(console.warn("Using browser-only version of superagent in non-browser environment"),f=this);var l=t("emitter"),d=t("./request-base"),y=t("./is-object"),m=t("./is-function"),v=t("./response-base"),_=r=e.exports=function(t,e){return"function"==typeof e?new r.Request("GET",t).end(e):1==arguments.length?new r.Request("GET",t):new r.Request(t,e)};r.Request=h,_.getXHR=function(){if(!(!f.XMLHttpRequest||f.location&&"file:"==f.location.protocol&&f.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}throw Error("Browser-only verison of superagent could not find XHR")};var w="".trim?function(t){return t.trim()}:function(t){return t.replace(/(^\s*|\s*$)/g,"")};_.serializeObject=n,_.parseString=s,_.types={html:"text/html",json:"application/json",xml:"application/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},_.serialize={"application/x-www-form-urlencoded":n,"application/json":JSON.stringify},_.parse={"application/x-www-form-urlencoded":s,"application/json":JSON.parse},v(p.prototype),p.prototype._parseBody=function(t){var e=_.parse[this.type];return this.req._parser?this.req._parser(this,t):(!e&&u(this.type)&&(e=_.parse["application/json"]),e&&t&&(t.length||t instanceof Object)?e(t):null)},p.prototype.toError=function(){var t=this.req,e=t.method,r=t.url,i="cannot "+e+" "+r+" ("+this.status+")",n=new Error(i);return n.status=this.status,n.method=e,n.url=r,n},_.Response=p,l(h.prototype),d(h.prototype),h.prototype.type=function(t){return this.set("Content-Type",_.types[t]||t),this},h.prototype.accept=function(t){return this.set("Accept",_.types[t]||t),this},h.prototype.auth=function(t,e,r){switch(r||(r={type:"function"==typeof btoa?"basic":"auto"}),r.type){case"basic":this.set("Authorization","Basic "+btoa(t+":"+e));break;case"auto":this.username=t,this.password=e}return this},h.prototype.query=function(t){return"string"!=typeof t&&(t=n(t)),t&&this._query.push(t),this},h.prototype.attach=function(t,e,r){if(this._data)throw Error("superagent can't mix .send() and .attach()");return this._getFormData().append(t,e,r||e.name),this},h.prototype._getFormData=function(){return this._formData||(this._formData=new f.FormData),this._formData},h.prototype.callback=function(t,e){var r=this._callback;this.clearTimeout(),t&&this.emit("error",t),r(t,e)},h.prototype.crossDomainError=function(){var t=new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");t.crossDomain=!0,t.status=this.status,t.method=this.method,t.url=this.url,this.callback(t)},h.prototype.buffer=h.prototype.ca=h.prototype.agent=function(){return console.warn("This is not supported in browser version of superagent"),this},h.prototype.pipe=h.prototype.write=function(){throw Error("Streaming is not supported in browser version of superagent")},h.prototype._appendQueryString=function(){var t=this._query.join("&");if(t&&(this.url+=(this.url.indexOf("?")>=0?"&":"?")+t),this._sort){var e=this.url.indexOf("?");if(e>=0){var r=this.url.substring(e+1).split("&");m(this._sort)?r.sort(this._sort):r.sort(),this.url=this.url.substring(0,e)+"?"+r.join("&")}}},h.prototype._isHost=function(t){return t&&"object"==typeof t&&!Array.isArray(t)&&"[object Object]"!==Object.prototype.toString.call(t)},h.prototype.end=function(t){var e=this,r=this.xhr=_.getXHR(),n=this._formData||this._data;this._endCalled&&console.warn("Warning: .end() was called twice. This is not supported in superagent"),this._endCalled=!0,this._callback=t||i,r.onreadystatechange=function(){var t=r.readyState;if(t>=2&&e._responseTimeoutTimer&&clearTimeout(e._responseTimeoutTimer),4==t){var i;try{i=r.status}catch(t){i=0}if(!i){if(e.timedout||e._aborted)return;return e.crossDomainError()}e.emit("end")}};var o=function(t,r){r.total>0&&(r.percent=r.loaded/r.total*100),r.direction=t,e.emit("progress",r)};if(this.hasListeners("progress"))try{r.onprogress=o.bind(null,"download"),r.upload&&(r.upload.onprogress=o.bind(null,"upload"))}catch(t){}if(this._appendQueryString(),this._setTimeouts(),this.username&&this.password?r.open(this.method,this.url,!0,this.username,this.password):r.open(this.method,this.url,!0),this._withCredentials&&(r.withCredentials=!0),!this._formData&&"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof n&&!this._isHost(n)){var s=this._header["content-type"],a=this._serializer||_.serialize[s?s.split(";")[0]:""];!a&&u(s)&&(a=_.serialize["application/json"]),a&&(n=a(n))}for(var p in this.header)null!=this.header[p]&&r.setRequestHeader(p,this.header[p]);return this._responseType&&(r.responseType=this._responseType),this.emit("request",this),r.send("undefined"!=typeof n?n:null),this},_.get=function(t,e,r){var i=_("GET",t);return"function"==typeof e&&(r=e,e=null),e&&i.query(e),r&&i.end(r),i},_.head=function(t,e,r){var i=_("HEAD",t);return"function"==typeof e&&(r=e,e=null),e&&i.send(e),r&&i.end(r),i},_.options=function(t,e,r){var i=_("OPTIONS",t);return"function"==typeof e&&(r=e,e=null),e&&i.send(e),r&&i.end(r),i},_.del=c,_.delete=c,_.patch=function(t,e,r){var i=_("PATCH",t);return"function"==typeof e&&(r=e,e=null),e&&i.send(e),r&&i.end(r),i},_.post=function(t,e,r){var i=_("POST",t);return"function"==typeof e&&(r=e,e=null),e&&i.send(e),r&&i.end(r),i},_.put=function(t,e,r){var i=_("PUT",t);return"function"==typeof e&&(r=e,e=null),e&&i.send(e),r&&i.end(r),i}},{"./is-function":7,"./is-object":8,"./request-base":9,"./response-base":10,emitter:12}],7:[function(t,e,r){function i(t){var e=n(t)?Object.prototype.toString.call(t):"";return"[object Function]"===e}var n=t("./is-object");e.exports=i},{"./is-object":8}],8:[function(t,e,r){function i(t){return null!==t&&"object"==typeof t}e.exports=i},{}],9:[function(t,e,r){function i(t){if(t)return n(t)}function n(t){for(var e in i.prototype)t[e]=i.prototype[e];return t}var o=t("./is-object");e.exports=i,i.prototype.clearTimeout=function(){return this._timeout=0,this._responseTimeout=0,clearTimeout(this._timer),clearTimeout(this._responseTimeoutTimer),this},i.prototype.parse=function(t){return this._parser=t,this},i.prototype.responseType=function(t){return this._responseType=t,this},i.prototype.serialize=function(t){return this._serializer=t,this},i.prototype.timeout=function(t){return t&&"object"==typeof t?("undefined"!=typeof t.deadline&&(this._timeout=t.deadline),"undefined"!=typeof t.response&&(this._responseTimeout=t.response),this):(this._timeout=t,this._responseTimeout=0,this)},i.prototype.then=function(t,e){if(!this._fullfilledPromise){var r=this;this._endCalled&&console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"),this._fullfilledPromise=new Promise(function(t,e){r.end(function(r,i){r?e(r):t(i)})})}return this._fullfilledPromise.then(t,e)},i.prototype.catch=function(t){return this.then(void 0,t)},i.prototype.use=function(t){return t(this),this},i.prototype.ok=function(t){if("function"!=typeof t)throw Error("Callback required");return this._okCallback=t,this},i.prototype._isResponseOK=function(t){return!!t&&(this._okCallback?this._okCallback(t):t.status>=200&&t.status<300)},i.prototype.get=function(t){return this._header[t.toLowerCase()]},i.prototype.getHeader=i.prototype.get,i.prototype.set=function(t,e){if(o(t)){for(var r in t)this.set(r,t[r]);return this}return this._header[t.toLowerCase()]=e,this.header[t]=e,this},i.prototype.unset=function(t){return delete this._header[t.toLowerCase()],delete this.header[t],this},i.prototype.field=function(t,e){if(null===t||void 0===t)throw new Error(".field(name, val) name can not be empty");if(o(t)){for(var r in t)this.field(r,t[r]);return this}if(Array.isArray(e)){for(var i in e)this.field(t,e[i]);return this}if(null===e||void 0===e)throw new Error(".field(name, val) val can not be empty");return"boolean"==typeof e&&(e=""+e),this._getFormData().append(t,e),this},i.prototype.abort=function(){return this._aborted?this:(this._aborted=!0,this.xhr&&this.xhr.abort(),this.req&&this.req.abort(),this.clearTimeout(),this.emit("abort"),this)},i.prototype.withCredentials=function(){return this._withCredentials=!0,this},i.prototype.redirects=function(t){return this._maxRedirects=t,this},i.prototype.toJSON=function(){return{method:this.method,url:this.url,data:this._data,headers:this._header}},i.prototype.send=function(t){var e=o(t),r=this._header["content-type"];if(e&&!this._data)Array.isArray(t)?this._data=[]:this._isHost(t)||(this._data={});else if(t&&this._data&&this._isHost(this._data))throw Error("Can't merge these send calls");if(e&&o(this._data))for(var i in t)this._data[i]=t[i];else"string"==typeof t?(r||this.type("form"),r=this._header["content-type"],"application/x-www-form-urlencoded"==r?this._data=this._data?this._data+"&"+t:t:this._data=(this._data||"")+t):this._data=t;return!e||this._isHost(t)?this:(r||this.type("json"),this)},i.prototype.sortQuery=function(t){return this._sort="undefined"==typeof t||t,this},i.prototype._timeoutError=function(t,e){if(!this._aborted){var r=new Error(t+e+"ms exceeded");r.timeout=e,r.code="ECONNABORTED",this.timedout=!0,this.abort(),this.callback(r)}},i.prototype._setTimeouts=function(){var t=this;this._timeout&&!this._timer&&(this._timer=setTimeout(function(){t._timeoutError("Timeout of ",t._timeout)},this._timeout)),this._responseTimeout&&!this._responseTimeoutTimer&&(this._responseTimeoutTimer=setTimeout(function(){t._timeoutError("Response timeout of ",t._responseTimeout)},this._responseTimeout))}},{"./is-object":8}],10:[function(t,e,r){function i(t){if(t)return n(t)}function n(t){for(var e in i.prototype)t[e]=i.prototype[e];return t}var o=t("./utils");e.exports=i,i.prototype.get=function(t){return this.header[t.toLowerCase()]},i.prototype._setHeaderProperties=function(t){var e=t["content-type"]||"";this.type=o.type(e);var r=o.params(e);for(var i in r)this[i]=r[i];this.links={};try{t.link&&(this.links=o.parseLinks(t.link))}catch(t){}},i.prototype._setStatusProperties=function(t){var e=t/100|0;this.status=this.statusCode=t,this.statusType=e,this.info=1==e,this.ok=2==e,this.redirect=3==e,this.clientError=4==e,this.serverError=5==e,this.error=(4==e||5==e)&&this.toError(),this.accepted=202==t,this.noContent=204==t,this.badRequest=400==t,this.unauthorized=401==t,this.notAcceptable=406==t,this.forbidden=403==t,this.notFound=404==t}},{"./utils":11}],11:[function(t,e,r){r.type=function(t){return t.split(/ *; */).shift()},r.params=function(t){return t.split(/ *; */).reduce(function(t,e){var r=e.split(/ *= */),i=r.shift(),n=r.shift();return i&&n&&(t[i]=n),t},{})},r.parseLinks=function(t){return t.split(/ *, */).reduce(function(t,e){var r=e.split(/ *; */),i=r[0].slice(1,-1),n=r[1].split(/ *= */)[1].slice(1,-1);return t[n]=i,t},{})},r.cleanHeader=function(t,e){return delete t["content-type"],delete t["content-length"],delete t["transfer-encoding"],delete t.host,e&&delete t.cookie,t}},{}],12:[function(t,e,r){function i(t){if(t)return n(t)}function n(t){for(var e in i.prototype)t[e]=i.prototype[e];return t}"undefined"!=typeof e&&(e.exports=i),i.prototype.on=i.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},i.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this},i.prototype.off=i.prototype.removeListener=i.prototype.removeAllListeners=i.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r=this._callbacks["$"+t];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var i,n=0;n<r.length;n++)if(i=r[n],i===e||i.fn===e){r.splice(n,1);break}return this},i.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),r=this._callbacks["$"+t];if(r){r=r.slice(0);for(var i=0,n=r.length;i<n;++i)r[i].apply(this,e)}return this},i.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},i.prototype.hasListeners=function(t){return!!this.listeners(t).length}},{}]},{},[3])(3)});
//# sourceMappingURL=development.js.map
