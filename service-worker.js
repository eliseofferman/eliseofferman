"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","eb15a9504139939109ffdf6c1c467a30"],["/static/css/main.0b4a2224.css","1ee185f63877e973b09b94a195a8535e"],["/static/js/main.544390a1.js","33f9f6b52aea5cd870cb901d473967f9"],["/static/media/app1.58a0cf52.jpg","58a0cf52a17725a4cb52f0e08e0729a3"],["/static/media/app2.cb34c0ed.png","cb34c0ed9a7edeac7beb5f2493f92e55"],["/static/media/easter1.b2eb2337.jpg","b2eb2337a9a6ad6ac810c005839acd62"],["/static/media/easter2.b85576ec.png","b85576ec1fec20e60e6b895eb0fe1f83"],["/static/media/elise.68a7ec97.jpg","68a7ec97ee86a018d541dbc87e2f85fa"],["/static/media/flowers.8280baa4.jpg","8280baa44c2db6619416f0a57e6b18ef"],["/static/media/forum3.b029b686.png","b029b68605a9828acc1d36434b607cc8"],["/static/media/radio2.505c69fa.png","505c69fa5cab40b41cf15ac96a7e64d3"],["/static/media/un-pickyplants1.94f635a0.png","94f635a0f23903148d014cc8cc6f3497"],["/static/media/un-pickyplants2.3772c272.png","3772c27272e6f2fb696be828a4114de9"],["/static/media/webbshop.07f79584.png","07f795840f1d3cb6b41320e3a2a4a6eb"],["/static/media/webbshop2.d96394b8.png","d96394b82c1b7df11c3a03ab56a22341"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});