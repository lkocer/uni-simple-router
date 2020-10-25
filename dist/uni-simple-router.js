!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Router=t():e.Router=t()}(self,(function(){return e={779:(e,t,r)=>{var o=r(173);e.exports=function e(t,r,n){return o(r)||(n=r||n,r=[]),n=n||{},t instanceof RegExp?function(e,t){var r=e.source.match(/\((?!\?)/g);if(r)for(var o=0;o<r.length;o++)t.push({name:o,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return c(e,t)}(t,r):o(t)?function(t,r,o){for(var n=[],a=0;a<t.length;a++)n.push(e(t[a],r,o).source);return c(new RegExp("(?:"+n.join("|")+")",p(o)),r)}(t,r,n):function(e,t,r){return f(a(e,r),t,r)}(t,r,n)},e.exports.parse=a,e.exports.compile=function(e,t){return u(a(e,t),t)},e.exports.tokensToFunction=u,e.exports.tokensToRegExp=f;var n=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function a(e,t){for(var r,o=[],a=0,i=0,u="",c=t&&t.delimiter||"/";null!=(r=n.exec(e));){var p=r[0],f=r[1],h=r.index;if(u+=e.slice(i,h),i=h+p.length,f)u+=f[1];else{var g=e[i],v=r[2],y=r[3],d=r[4],b=r[5],O=r[6],m=r[7];u&&(o.push(u),u="");var P=null!=v&&null!=g&&g!==v,j="+"===O||"*"===O,w="?"===O||"*"===O,M=r[2]||c,k=d||b;o.push({name:y||a++,prefix:v||"",delimiter:M,optional:w,repeat:j,partial:P,asterisk:!!m,pattern:k?l(k):m?".*":"[^"+s(M)+"]+?"})}}return i<e.length&&(u+=e.substr(i)),u&&o.push(u),o}function i(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function u(e,t){for(var r=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(r[n]=new RegExp("^(?:"+e[n].pattern+")$",p(t)));return function(t,n){for(var a="",u=t||{},s=(n||{}).pretty?i:encodeURIComponent,l=0;l<e.length;l++){var c=e[l];if("string"!=typeof c){var p,f=u[c.name];if(null==f){if(c.optional){c.partial&&(a+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(o(f)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var h=0;h<f.length;h++){if(p=s(f[h]),!r[l].test(p))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(p)+"`");a+=(0===h?c.prefix:c.delimiter)+p}}else{if(p=c.asterisk?encodeURI(f).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})):s(f),!r[l].test(p))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+p+'"');a+=c.prefix+p}}else a+=c}return a}}function s(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function l(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function c(e,t){return e.keys=t,e}function p(e){return e&&e.sensitive?"":"i"}function f(e,t,r){o(t)||(r=t||r,t=[]);for(var n=(r=r||{}).strict,a=!1!==r.end,i="",u=0;u<e.length;u++){var l=e[u];if("string"==typeof l)i+=s(l);else{var f=s(l.prefix),h="(?:"+l.pattern+")";t.push(l),l.repeat&&(h+="(?:"+f+h+")*"),i+=h=l.optional?l.partial?f+"("+h+")?":"(?:"+f+"("+h+"))?":f+"("+h+")"}}var g=s(r.delimiter||"/"),v=i.slice(-g.length)===g;return n||(i=(v?i.slice(0,-g.length):i)+"(?:"+g+"(?=$))?"),i+=a?"$":n&&v?"":"(?="+g+"|$)",c(new RegExp("^"+i,p(r)),t)}},173:e=>{e.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},844:function(e,t,r){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.buildVueRouter=t.buildVueRoutes=void 0;var n=r(883),a=r(789);t.buildVueRoutes=function(e,t){for(var r=e.routesMap,o=r.pathMap,i=r.finallyPathList,u=Object.keys(t),s=e.options.h5,l=0;l<u.length;l++){var c=u[l],p=o[c],f=t[c];if(p){var h=a.getRoutePath(p),g=h.finallyPath,v=h.alias;if(g instanceof Array)throw new Error("非 vueRouterDev 模式下，alias、aliasPath、path 无法提供数组类型！ "+JSON.stringify(p));null!=p.name&&(f.name=p.name),s.aliasCoverPath?f.path=g:null!=v&&(f.alias=v);var y=p.beforeEnter;y&&(f.beforeEnter=y)}else n.warn(c+" 路由地址在路由表中未找到，确定是否传递漏啦",e,!0)}return i.includes("*")&&(t["*"]=o["*"]),t},t.buildVueRouter=function(e,t,r){var n=Object.values(r),a=new t.constructor(o(o({},e.options.h5),{routes:n}));t.matcher=a.matcher,console.log("实例化完成")}},147:function(e,t){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){function o(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)});Object.defineProperty(t,"__esModule",{value:!0}),t.proxyH5Mount=t.proxyEachHook=t.MyArray=void 0;var n=function(e){function t(r,o,n){var a=e.call(this)||this;return a.router=r,a.vueEachArray=o,a.myEachHook=n,Object.setPrototypeOf(a,t.prototype),a}return o(t,e),t.prototype.push=function(e){var t=this;this.vueEachArray.splice(0,1,e),this[this.length]=function(e,r,o){t.myEachHook(e,r,o,t.router,!0)}},t}(Array);t.MyArray=n,t.proxyEachHook=function(e,t){for(var r=["beforeHooks","afterHooks"],o=0;o<r.length;o++){var a=r[o],i=e.lifeCycle[a][0];if(i){var u=t[a];t[a]=new n(e,u,i)}}},t.proxyH5Mount=function(e,t){var r=t.$route;r.replace(r.currentRoute.fullPath,(function(t){e.$mount()}),(function(e){console.log(e)}))}},282:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.lifeCycle=t.baseConfig=t.mpPlatformReg=void 0;var o=r(883);t.mpPlatformReg=/(^mp-weixin$)|(^mp-baidu$)|(^mp-alipay$)|(^mp-toutiao$)|(^mp-qq$)|(^mp-360$)/g,t.baseConfig={h5:{aliasCoverPath:!1,rewriteFun:!0,paramsToQuery:!1,vueRouterDev:!1,useUniConfig:!0,keepUniIntercept:!1,vueNext:!1,replaceStyle:!1,resetStyle:function(){return JSON.parse("{}")},mode:"hash",base:"/",linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",scrollBehavior:function(e,t,r){return r},fallback:!0},APP:{holdTabbar:!0,loddingPageStyle:function(){return JSON.parse('{"backgroundColor":"#FFF"}')},loddingPageHook:function(e){plus.navigator.closeSplashscreen(),e.show()},animation:{animationType:"pop-in",animationDuration:300}},platform:"h5",keepUniOriginNav:!1,debugger:!1,encodeURI:!0,routerBeforeEach:function(e,t,r){r()},routerAfterEach:function(e,t){},routerErrorEach:function(e,t){o.err(e,t,!0)},routes:[{path:"/choose-location"},{path:"/open-location"},{path:"/preview-image"}]},t.lifeCycle={beforeHooks:[],afterHooks:[],routerBeforeHooks:[],routerAfterHooks:[],routerErrorHooks:[]}},801:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createRouteMap=void 0;var o=r(883),n=r(789);t.createRouteMap=function(e,t){var r={finallyPathList:[],finallyPathMap:Object.create(null),aliasPathMap:Object.create(null),pathMap:Object.create(null),vueRouteMap:Object.create(null),nameMap:Object.create(null)};return t.forEach((function(t){var a=n.getRoutePath(t),i=a.finallyPath,u=a.aliasPath,s=a.path;if(null==s)throw new Error("请提供一个完整的路由对象，包括以绝对路径开始的 ‘path’ 字符串 "+JSON.stringify(t));if(i instanceof Array&&!e.options.h5.vueRouterDev&&"h5"===e.options.platform)throw new Error("非 vueRouterDev 模式下，route.alias 目前无法提供数组类型！ "+JSON.stringify(t));var l=i,c=u;"h5"!==e.options.platform&&0!==l.indexOf("/")&&o.warn("当前路由对象下，route："+t+" 是否缺少了前缀 ‘/’",e,!0),r.finallyPathMap[l]||(r.finallyPathMap[l]=t,r.aliasPathMap[c]=t,r.pathMap[s]=t,r.finallyPathList.push(l),null!=t.name&&(r.nameMap[t.name]=t))})),r}},662:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.registerEachHooks=t.registerRouterHooks=t.registerHook=void 0;var o=r(366),n=r(169);function a(e,t){return e.push(t),function(){var r=e.indexOf(t);r>0&&e.splice(r,1)}}t.registerHook=a,t.registerRouterHooks=function(e,t){return a(e.routerBeforeHooks,(function(e,r,o){t.routerBeforeEach(e,r,o)}))(),a(e.routerAfterHooks,(function(e,r){t.routerAfterEach(e,r)}))(),a(e.routerErrorHooks,(function(e,r){t.routerErrorEach(e,r)}))(),e},t.registerEachHooks=function(e,t,r){a(e.lifeCycle[t],(function(e,a,i,u,s){s?n.onTriggerEachHook(e,a,u,o.hookToggle[t],i):r(e,a,i)}))}},460:function(e,t,r){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.initMixins=t.getMixins=void 0;var n=r(801),a=r(844),i=r(147),u=r(282);function s(e){var t=e.options.platform;return u.mpPlatformReg.test(t)&&(t="app-lets"),{h5:{beforeCreate:function(){if(this.$options.router){e.$route=this.$options.router;var t=n.createRouteMap(e,this.$options.router.options.routes).finallyPathMap;e.routesMap.vueRouteMap=t,a.buildVueRoutes(e,t),a.buildVueRouter(e,this.$options.router,t),i.proxyEachHook(e,this.$options.router)}}},"app-plus":{beforeCreate:function(){console.log("beforeCreate---app")},onLoad:function(){console.log("onLoad---app")}},"app-lets":{onLaunch:function(){console.log("beforeCreate----app-lets")}}}[t]}t.getMixins=s,t.initMixins=function(e,t){var r=n.createRouteMap(t,t.options.routes);t.routesMap=r,e.mixin(o({},s(t)))}},789:function(e,t,r){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},n=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var o=Array(e),n=0;for(t=0;t<r;t++)for(var a=arguments[t],i=0,u=a.length;i<u;i++,n++)o[n]=a[i];return o};Object.defineProperty(t,"__esModule",{value:!0}),t.urlToJson=t.getUniCachePage=t.getDataType=t.routesForMapRoute=t.assertNewOptions=t.getRoutePath=t.mergeConfig=t.voidFun=void 0;var a=r(282),i=r(779);function u(e,t){for(var r=Object.create(null),a=Object.keys(e),i=0;i<a.length;i+=1){var u=a[i];null!=t[u]?t[u].constructor===Object?r[u]=o(o({},e[u]),t[u]):r[u]="routes"===u?n(e[u],t[u]):t[u]:r[u]=e[u]}return r}function s(e){return Object.prototype.toString.call(e)}t.voidFun=function(){},t.mergeConfig=u,t.getRoutePath=function(e){return{finallyPath:e.aliasPath||e.alias||e.path,aliasPath:e.aliasPath||e.path,path:e.path,alias:e.alias}},t.assertNewOptions=function(e){var t=e.platform,r=e.routes;if(null==t)throw new Error("你在实例化路由时必须传递 'platform'");if(null==r||0===r.length)throw new Error("你在实例化路由时必须传递 routes 为空，这是无意义的。");return u(a.baseConfig,e)},t.routesForMapRoute=function(e,t,r){for(var o=e[r],n=0,a=Object.entries(o);n<a.length;n++){var u=a[n],l=u[0],c=u[1],p=l;if("[object Array]"===s(o)&&(p=c),null!=i(p).exec(t))return"[object String]"===s(c)?e.finallyPathMap[c]:c}throw new Error(t+" 路径无法在路由表中找到！检查跳转路径及路由表")},t.getDataType=s,t.getUniCachePage=function(e){var t=getCurrentPages();return null==e?t:t.reverse()[e]},t.urlToJson=function(e){var t={},r=e.split("?"),o=r[0],n=r[1];if(null!=n)for(var a=0,i=n.split("&");a<i.length;a++){var u=i[a].split("=");t[u[0]]=u[1]}return{path:o,query:t}}},883:(e,t)=>{"use strict";function r(e,t,r,o){if(void 0===o&&(o=!1),!o){var n="[object Object]"===t.toString();if(!1===t)return!1;if(n&&!1===t[e])return!1}return console[e](r),!0}Object.defineProperty(t,"__esModule",{value:!0}),t.warnLock=t.log=t.warn=t.err=t.isLog=void 0,t.isLog=r,t.err=function(e,t,o){r("error",t.options.debugger,e,o)},t.warn=function(e,t,o){r("warn",t.options.debugger,e,o)},t.log=function(e,t,o){r("log",t.options.debugger,e,o)},t.warnLock=function(e){console.warn(e)}},607:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createRouter=t.RouterMount=void 0;var o=r(282),n=r(789),a=r(662),i=r(460),u=r(890),s=r(147),l=r(314);t.createRouter=function(e){var t=n.assertNewOptions(e),r={options:t,mount:[],$route:null,routesMap:{},lifeCycle:a.registerRouterHooks(o.lifeCycle,t),push:function(e,t){u.navjump(e,r,"push",t)},replace:function(e,t){u.navjump(e,r,"replace",t)},replaceAll:function(e,t){u.navjump(e,r,"replaceAll",t)},pushTab:function(e,t){u.navjump(e,r,"pushTab",t)},back:function(e,t){void 0===e&&(e=1)},preloadPage:function(e){},beforeEach:function(e){a.registerEachHooks(r,"beforeHooks",e)},afterEach:function(e){a.registerEachHooks(r,"afterHooks",e)},install:function(e){l.rewriteMethod(this),i.initMixins(e,this),Object.defineProperty(e.prototype,"$Router",{get:function(){return r}}),Object.defineProperty(e.prototype,"$Route",{get:function(){return 22}})}};return r},t.RouterMount=function(e,t,r){if(void 0===r&&(r="#app"),"[object Array]"!==n.getDataType(t.mount))throw new Error("挂载路由失败，router.app 应该为数组类型。当前类型："+typeof t.mount);switch(t.mount.push({app:e,el:r}),t.options.platform){case"h5":s.proxyH5Mount(e,t);break;default:console.warn("其他端还没实现")}}},366:(e,t)=>{"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),t.rewriteMethodToggle=t.hookToggle=void 0,(o=t.hookToggle||(t.hookToggle={})).beforeHooks="beforeEach",o.afterHooks="afterEach",(r=t.rewriteMethodToggle||(t.rewriteMethodToggle={})).navigateTo="push",r.redirectTo="replace",r.reLaunch="replaceAll",r.switchTab="pushTab",r.navigateBack="back",r.preloadPage="preloadPage"},169:function(e,t,r){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},n=this&&this.__rest||function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.loopCallHook=t.transitionTo=t.onTriggerEachHook=t.callHook=t.HOOKLIST=t.ERRORHOOK=void 0;var a=r(789);function i(e,t,r,o,n){return void 0===n&&(n=!0),new Promise((function(a){null!=e&&e instanceof Function?!0===n?e(t,r,a,o,!1):(e(t,r,(function(){}),o,!1),a()):a()}))}function u(e,t,r,o,n,a){s(n,0,a,e,t,r,o)}function s(e,r,i,u,l,c,p){var f=a.routesForMapRoute(u.routesMap,l.path,"finallyPathMap");if(e.length-1<r)return i();var h=e[r],g=t.ERRORHOOK[0];h(u,l,c,f).then((function(t){if(!1===t)g({type:0,msg:"管道函数传递 false 导航被终止!",to:l,from:c,nextTo:t},u);else if("string"==typeof t||"object"==typeof t){var f=p,h=t;if("object"==typeof t){var v=t.NAVTYPE;null!=v&&(f=v),h=n(t,["NAVTYPE"])}else{var y=a.urlToJson(t);h={path:y.path,query:y.query}}"h5"===u.options.platform?i(o({replace:"push"!==f},h)):u[p](o(o({},h),{NAVTYPE:f}),c)}else null==t?(r++,s(e,r,i,u,l,c,p)):g({type:1,msg:"管道函数传递未知类型，无法被识别。导航被终止！",to:l,from:c,nextTo:t},u)}))}t.ERRORHOOK=[function(e,t){return t.lifeCycle.routerErrorHooks[0](e,t)}],t.HOOKLIST=[function(e,t,r,o){return i(e.lifeCycle.routerBeforeHooks[0],t,r,e)},function(e,t,r,o){var n,u=getCurrentPages()[0];if(null!=u){var s=u.$options.beforeRouteLeave;"[object Array]"===a.getDataType(s)&&(n=(n=s[0]).bind(u))}return i(n,t,r,e)},function(e,t,r,o){return i(e.lifeCycle.beforeHooks[0],t,r,e)},function(e,t,r,o){return i(o.beforeEnter,t,r,e)},function(e,t,r,o){return i(e.lifeCycle.afterHooks[0],t,r,e,!1)},function(e,t,r,o){return i(e.lifeCycle.routerAfterHooks[0],t,r,e,!1)}],t.callHook=i,t.onTriggerEachHook=function(e,r,o,n,a){u(o,e,r,"push","beforeEach"===n?t.HOOKLIST.slice(0,3):t.HOOKLIST.slice(4),(function(e){"function"==typeof a&&a(e)}))},t.transitionTo=u,t.loopCallHook=s},890:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.navjump=void 0;var o=r(845),n=r(789);t.navjump=function(e,t,r,a){var i=o.queryPageToMap(e,t).rule;"h5"===t.options.platform?("push"!==r&&(r="replace"),t.$route[r](i,i.success||n.voidFun,i.fail||n.voidFun)):console.log("非h5端跳转TODO")}},845:function(e,t,r){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.queryPageToMap=void 0;var n=r(789),a=r(169);t.queryPageToMap=function(e,t){var r={},i="",u=e.success,s=e.fail;if("[object Object]"===n.getDataType(e)){var l=e;if(null!=l.path){var c=n.urlToJson(l.path),p=c.path,f=c.query;i=n.routesForMapRoute(t.routesMap,p,"finallyPathList"),r=o(o({},f),e.query||{})}else null!=l.name?null==(i=t.routesMap.nameMap[l.name])?a.ERRORHOOK[0]({type:2,msg:"命名路由为："+l.name+" 的路由，无法在路由表中找到！",toRule:e},t):r=e.params||{}:a.ERRORHOOK[0]({type:2,msg:e+" 解析失败，请检测当前路由表下是否有包含。",toRule:e},t)}else{var h=n.urlToJson(e);p=h.path,f=h.query,i=n.routesForMapRoute(t.routesMap,p,"finallyPathList"),r=f}if("h5"===t.options.platform){var g=e.complete,v=e.success,y=e.fail;if("[object Function]"===n.getDataType(g)){var d=function(e,t){"[object Function]"===n.getDataType(t)&&t.apply(this,e),g.apply(this,e)};u=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];d.call(this,e,v)},s=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];d.call(this,e,y)}}}else console.log("这是非h端 需要做的 TODO");var b=e;return"[object Function]"===n.getDataType(b.success)&&(b.success=u),"[object Function]"===n.getDataType(b.fail)&&(b.fail=s),{rule:b,route:i,query:r}}},314:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.rewriteMethod=void 0;var o=r(366),n=r(789),a=r(883),i=["navigateTo","redirectTo","reLaunch","switchTab","navigateBack","preloadPage"];t.rewriteMethod=function(e){!1===e.options.keepUniOriginNav&&i.forEach((function(t){uni[t],uni[t]=function(r){!function(e,t,r,i){if(console.log(e),"navigateBack"===r)i.back(1,e);else if("preloadPage"===r)i.preloadPage(e);else{var u=o.rewriteMethodToggle[r],s=e.url;if("switchTab"===r){s="/"+e.detail.pagePath;var l=n.routesForMapRoute(i.routesMap,s,"pathMap"),c=n.getRoutePath(l).finallyPath;"[object Array]"===n.getDataType(c)&&a.warn("uni-app 原生方法跳转路径为："+s+"。此路为是tab页面时，不允许设置 alias 为数组的情况，并且不能为动态路由！当然你可以通过通配符*解决！",i,!0),"*"===c&&a.warn("uni-app 原生方法跳转路径为："+s+"。在路由表中找不到相关路由表！当然你可以通过通配符*解决！",i,!0),s=c}i[u]({path:s})}}(r,0,t,e)}}))}}},t={},function r(o){if(t[o])return t[o].exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,r),n.exports}(607);var e,t}));