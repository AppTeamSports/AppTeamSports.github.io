
// Copyright 2012 Google Inc. All rights reserved.
(function(){

var data = {
"resource": {
  "version":"1",
  
  "macros":[{
      "function":"__e"
    },{
      "vtp_signal":0,
      "function":"__c",
      "vtp_value":0
    },{
      "function":"__c",
      "vtp_value":""
    },{
      "function":"__c",
      "vtp_value":false
    },{
      "function":"__aev",
      "vtp_varType":"URL",
      "vtp_component":"IS_OUTBOUND",
      "vtp_affiliatedDomains":""
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"URL",
      "vtp_component":"URL_NO_FRAGMENT"
    },{
      "function":"__aev",
      "vtp_varType":"URL",
      "vtp_component":"HOST",
      "vtp_stripWww":true
    },{
      "function":"__aev",
      "vtp_varType":"URL",
      "vtp_component":"EXTENSION"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__aev",
      "vtp_varType":"URL",
      "vtp_component":"PATH"
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoTitle",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoProvider",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoCurrentTime",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoDuration",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoVisible",
      "vtp_dataLayerVersion":1
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"q,s,search,query,keyword",
      "vtp_multiQueryKeys":true,
      "vtp_ignoreEmptyQueryParam":true,
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrl",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__gct",
      "vtp_trackingId":"G-RPDMZ0YZ8R",
      "vtp_adFeatures":false,
      "vtp_sessionDuration":0,
      "vtp_googleSignals":["macro",1],
      "vtp_foreignTld":["macro",2],
      "vtp_restrictDomain":["macro",3],
      "vtp_eventSettings":["map","ecommerce_purchase",["map","blacklisted",false,"conversion",true],"first_open",["map","blacklisted",false,"conversion",true],"in_app_purchase",["map","blacklisted",false,"conversion",true],"first_visit",["map","blacklisted",false,"conversion",true],"app_remove",["map","blacklisted",false,"conversion",true],"click",["map","blacklisted",false,"conversion",true],"page_view",["map","blacklisted",false,"conversion",true],"screen_view",["map","blacklisted",false,"conversion",true],"scroll",["map","blacklisted",false,"conversion",true],"session_start",["map","blacklisted",false,"conversion",true],"app_store_subscription_convert",["map","blacklisted",false,"conversion",true],"app_store_subscription_renew",["map","blacklisted",false,"conversion",true]],
      "tag_id":7
    },{
      "function":"__get",
      "vtp_eventName":"click",
      "vtp_settings":["map","streamId","G-RPDMZ0YZ8R","eventParameters",["map","link_id",["macro",6],"link_classes",["macro",7],"link_url",["macro",8],"link_domain",["macro",9],"outbound",true]],
      "vtp_deferrable":false,
      "tag_id":17
    },{
      "function":"__get",
      "vtp_eventName":"file_download",
      "vtp_settings":["map","streamId","G-RPDMZ0YZ8R","eventParameters",["map","link_id",["macro",6],"link_text",["macro",11],"link_url",["macro",8],"file_name",["macro",12],"file_extension",["macro",10]]],
      "vtp_deferrable":false,
      "tag_id":25
    },{
      "function":"__get",
      "vtp_eventName":["template","video_",["macro",13]],
      "vtp_settings":["map","streamId","G-RPDMZ0YZ8R","eventParameters",["map","video_url",["macro",14],"video_title",["macro",15],"video_provider",["macro",16],"video_current_time",["macro",17],"video_duration",["macro",18],"video_percent",["macro",19],"visible",["macro",20]]],
      "vtp_deferrable":false,
      "tag_id":29
    },{
      "function":"__get",
      "vtp_eventName":"view_search_results",
      "vtp_settings":["map","streamId","G-RPDMZ0YZ8R","eventParameters",["map","search_term",["macro",21]]],
      "vtp_deferrable":true,
      "tag_id":35
    },{
      "function":"__get",
      "vtp_eventName":"scroll",
      "vtp_settings":["map","streamId","G-RPDMZ0YZ8R","eventParameters",["map","percent_scrolled",["macro",22]]],
      "vtp_deferrable":false,
      "tag_id":39
    },{
      "function":"__get",
      "vtp_eventName":"page_view",
      "vtp_settings":["map","streamId","G-RPDMZ0YZ8R","eventParameters",["map","page_referrer",["macro",24]]],
      "vtp_deferrable":false,
      "tag_id":43
    },{
      "function":"__dlm",
      "vtp_userInput":["list",["map","key","gtm.gtagReferrer.G-RPDMZ0YZ8R","value",["macro",24]]],
      "tag_id":45
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":true,
      "vtp_uniqueTriggerId":"1_15",
      "tag_id":46
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":true,
      "vtp_uniqueTriggerId":"1_23",
      "tag_id":47
    },{
      "function":"__ytl",
      "vtp_captureStart":true,
      "vtp_captureComplete":true,
      "vtp_captureProgress":true,
      "vtp_progressThresholdsPercent":"10,25,50,75",
      "vtp_triggerStartOption":"DOM_READY",
      "vtp_uniqueTriggerId":"1_27",
      "vtp_enableTriggerStartOption":true,
      "tag_id":48
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"90",
      "vtp_verticalThresholdOn":true,
      "vtp_horizontalThresholdOn":false,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_uniqueTriggerId":"1_37",
      "vtp_enableTriggerStartOption":true,
      "tag_id":49
    },{
      "function":"__ehl",
      "vtp_groupEvents":true,
      "vtp_groupEventsInterval":1000,
      "vtp_uniqueTriggerId":"1_41",
      "tag_id":50
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":true
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)1_15($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",10],
      "arg1":"pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)1_23($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.video"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)1_27($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",21],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)1_37($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":["list","pushState","popstate","replaceState"],
      "any_of":true
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":["macro",25]
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.historyChange-v2"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)1_41($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.load"
    }],
  "rules":[
    [["if",0],["add",0,8,9,12]],
    [["if",1,2,3],["add",1]],
    [["if",2,4,5],["add",2]],
    [["if",6,7],["add",3]],
    [["if",0],["unless",8],["add",4]],
    [["if",9,10],["add",5]],
    [["if",11,13,14],["unless",12],["add",6,7]],
    [["if",15],["add",10]],
    [["if",16],["add",11]]]
},
"runtime":[
[],[]
]



};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ca="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},da;if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ha;a:{var ia={Lf:!0},ja={};try{ja.__proto__=ia;ha=ja.Lf;break a}catch(a){}ha=!1}da=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var la=da,ma=this||self,na=/^[\w+/_-]+[=]{0,2}$/,pa=null;var qa=function(){},ra=function(a){return"function"==typeof a},f=function(a){return"string"==typeof a},ua=function(a){return"number"==typeof a&&!isNaN(a)},va=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},r=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},wa=function(a,b){if(a&&va(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},xa=function(a,b){if(!ua(a)||
!ua(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},za=function(a,b){for(var c=new ya,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Aa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Ca=function(a){return Math.round(Number(a))||0},Da=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Ea=function(a){var b=[];if(va(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Fa=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Ga=function(){return(new Date).getTime()},ya=function(){this.prefix="gtm.";this.values={}};ya.prototype.set=function(a,b){this.values[this.prefix+a]=b};ya.prototype.get=function(a){return this.values[this.prefix+a]};ya.prototype.contains=function(a){return void 0!==this.get(a)};
var Ha=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ia=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ja=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ka=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},La=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Ma=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Na=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Oa=function(a){if(null==a)return String(a);var b=Na.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Pa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Qa=function(a){if(!a||"object"!=Oa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Pa(a,"constructor")&&!Pa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Pa(a,b)},C=function(a,b){var c=b||("array"==Oa(a)?[]:{}),d;for(d in a)if(Pa(a,d)){var e=a[d];"array"==Oa(e)?("array"!=Oa(c[d])&&(c[d]=[]),c[d]=C(e,c[d])):Qa(e)?(Qa(c[d])||(c[d]={}),c[d]=C(e,c[d])):c[d]=e}return c};var pb;
var qb=[],rb=[],sb=[],ub=[],vb=[],wb={},xb,yb,zb,Ab=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Bb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=wb[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[void 0!==d?g:g.substr(4)]=a[g]);return void 0!==d?d(e):pb(c,e,b)},Db=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Cb(a[e],b,c));
return d},Fb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=wb[b];return c?c.priorityOverride||0:0},Cb=function(a,b,c){if(va(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Cb(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=qb[g];if(!h||b.Zc(h))return;c[g]=!0;try{var k=Db(h,b,c);k.vtp_gtmEventId=b.id;d=Bb(k,b);zb&&(d=zb.mg(d,k))}catch(y){b.Ae&&b.Ae(y,Number(g)),d=!1}c[g]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Cb(a[l],b,c)]=Cb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var q=Cb(a[n],b,c);yb&&(m=m||q===yb.Gb);d.push(q)}return yb&&m?yb.pg(d):d.join("");case "escape":d=Cb(a[1],b,c);if(yb&&va(a[1])&&"macro"===a[1][0]&&yb.Ug(a))return yb.lh(d);d=String(d);for(var u=2;u<a.length;u++)Ra[a[u]]&&(d=Ra[a[u]](d));return d;case "tag":var p=a[1];if(!ub[p])throw Error("Unable to resolve tag reference "+p+".");return d={oe:a[2],
index:p};case "zb":var t={arg0:a[2],arg1:a[3],ignore_case:a[5]};t["function"]=a[1];var v=Gb(t,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Gb=function(a,b,c){try{return xb(Db(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Hb=function(){var a=function(b){return{toString:function(){return b}}};return{Bd:a("convert_case_to"),Cd:a("convert_false_to"),Dd:a("convert_null_to"),Ed:a("convert_true_to"),Fd:a("convert_undefined_to"),Nh:a("debug_mode_metadata"),na:a("function"),Cf:a("instance_name"),Df:a("live_only"),Ef:a("malware_disabled"),Ff:a("metadata"),Uh:a("original_vendor_template_id"),Gf:a("once_per_event"),$d:a("once_per_load"),ae:a("setup_tags"),be:a("tag_id"),ce:a("teardown_tags")}}();var Ib=null,Lb=function(a){function b(q){for(var u=0;u<q.length;u++)d[q[u]]=!0}var c=[],d=[];Ib=Jb(a);for(var e=0;e<rb.length;e++){var g=rb[e],h=Kb(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],n=0;n<ub.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Kb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Ib(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],g=0;g<e.length;g++){var h=Ib(e[g]);if(2===h)return null;
if(1===h)return!1}return!0},Jb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Gb(sb[c],a));return b[c]}};var Mb=function(a,b){var c=[];Aa(a.W,function(d,e){null!=e&&c.push(encodeURIComponent(d)+"="+encodeURIComponent(e))});this.Ke=c.join("&");this.W=a.W;this.sa=a.sa;this.H=a.H;this.baseUrl=b};var Nb=function(){this.events=[];this.baseUrl=this.W=""};Nb.prototype.add=function(a){return this.ve(a)?(this.events.push(a),this.W=a.Ke,this.baseUrl=a.baseUrl,!0):!1};Nb.prototype.ve=function(a){var b=20>this.events.length,c=this.W===a.Ke&&this.baseUrl===a.baseUrl;return 0==this.events.length||b&&c};
var Ob=function(a,b){Aa(a,function(c,d){null!=d&&b.push(encodeURIComponent(c)+"="+encodeURIComponent(d))})},Pb=function(a,b){var c=[];Ob(a.W,c);b&&c.push("_s="+b);Ob(a.H,c);Ob(a.sa,c);return c.join("&")},Qb=function(a,b){var c=a.events;if(1==c.length)return{De:Pb(c[0],b),body:""};var d=[];a.W&&d.push(a.W);for(var e={},g=0;g<c.length;g++)Aa(c[g].sa,function(p,t){null!=t&&(e[p]=e[p]||{},e[p][String(t)]=e[p][String(t)]+1||1)});var h={};Aa(e,function(p,t){var v,w=-1,y=0;Aa(t,function(x,z){y+=z;var B=
(x.length+p.length+2)*(z-1);B>w&&(v=x,w=B)});y==c.length&&(h[p]=v)});Ob(h,d);b&&d.push("_s="+b);for(var k=d.join("&"),l=[],m={},n=0;n<c.length;m={xb:m.xb},n++){var q=[];m.xb={};Aa(c[n].sa,function(p){return function(t,v){h[t]!=""+v&&(p.xb[t]=v)}}(m));Ob(c[n].H,q);Ob(m.xb,q);l.push(q.join("&"))}var u=l.join("\r\n");return{De:k,body:u}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var D=window,F=document,$b=navigator,ac=F.currentScript&&F.currentScript.src,bc=function(a,b){var c=D[a];D[a]=void 0===c?b:c;return D[a]},cc=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},dc=function(a,b,c){var d=F.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;cc(d,b);c&&(d.onerror=c);var e;if(null===pa)b:{var g=ma.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&na.test(k)){pa=k;break b}}pa=""}e=pa;e&&d.setAttribute("nonce",e);var l=F.getElementsByTagName("script")[0]||F.body||F.head;l.parentNode.insertBefore(d,l);return d},ec=function(){if(ac){var a=ac.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},fc=function(a,b){var c=F.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=F.body&&F.body.lastChild||
F.body||F.head;d.parentNode.insertBefore(c,d);cc(c,b);void 0!==a&&(c.src=a);return c},gc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},G=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},hc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},H=function(a){D.setTimeout(a,0)},ic=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},jc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},kc=function(a){var b=F.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},lc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},mc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var oc=function(a){return nc?F.querySelectorAll(a):null},pc=function(a,b){if(!nc)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!F.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},qc=!1;if(F.querySelectorAll)try{var rc=F.querySelectorAll(":root");rc&&1==rc.length&&rc[0]==F.documentElement&&(qc=!0)}catch(a){}var nc=qc;var I={ma:"_ee",zc:"event_callback",Sa:"event_timeout",w:"gtag.config",O:"allow_ad_personalization_signals",Gc:"restricted_data_processing",U:"cookie_expires",Ra:"cookie_update",Ca:"session_duration",V:"user_properties"};
I.xc="page_view",I.Ye="user_engagement",I.ka="purchase",I.vc="refund",I.yb="begin_checkout",I.sc="add_to_cart",I.uc="remove_from_cart",I.Ph="view_cart",I.Xe="add_to_wishlist",I.wc="view_item",I.Sh="present_offer",I.Rh="click_offer",I.Qh="click_item_list",I.Gd="view_item_list",I.We="add_payment_info",I.Oh="add_shipping_info",I.Ze="allow_custom_scripts",I.$e="allow_display_features",I.af="allow_enhanced_conversions",I.Rd="enhanced_conversions",I.zb="client_id",I.T="cookie_domain",I.Ab="cookie_name",
I.za="cookie_path",I.ca="currency",I.Bb="custom_params",I.df="custom_map",I.Dc="groups",I.Aa="language",I.cf="country",I.Th="non_interaction",I.Wa="page_location",I.Xa="page_referrer",I.Fc="page_title",I.Ya="send_page_view",I.Ba="send_to",I.Hc="session_engaged",I.Eb="session_id",I.Ic="session_number",I.zf="tracking_id",I.la="linker",I.Ta="accept_incoming",I.F="domains",I.Va="url_position",I.Ua="decorate_forms",I.Vd="phone_conversion_number",I.Td="phone_conversion_callback",I.Ud="phone_conversion_css_class",
I.Wd="phone_conversion_options",I.vf="phone_conversion_ids",I.uf="phone_conversion_country_code",I.Hd="aw_remarketing",I.Id="aw_remarketing_only",I.Z="value",I.wf="quantity",I.hf="affiliation",I.nf="tax",I.lf="shipping",I.yc="list_name",I.Qd="checkout_step",I.Pd="checkout_option",I.jf="coupon",I.kf="promotions",I.Za="transaction_id",I.$a="user_id",I.ya="conversion_linker",I.xa="conversion_cookie_prefix",I.P="cookie_prefix",I.Y="items",I.Md="aw_merchant_id",I.Kd="aw_feed_country",I.Ld="aw_feed_language",
I.Jd="discount",I.Od="disable_merchant_reported_purchases",I.Ec="new_customer",I.Nd="customer_lifetime_value",I.ff="dc_natural_search",I.ef="dc_custom_params",I.Af="trip_type",I.Sd="passengers",I.sf="method",I.yf="search_term",I.bf="content_type",I.tf="optimize_id",I.pf="experiments",I.Db="google_signals",I.Cc="google_tld",I.Fb="update",I.Bc="firebase_id",I.Cb="ga_restrict_domain",I.Ac="event_settings",I.xf="screen_name",I.rf="_x_19",I.qf="_x_20",I.da="transport_url",I.Bf=[I.O,I.Gc,I.T,I.U,I.Ab,I.za,
I.P,I.Ra,I.Bb,I.zc,I.Ac,I.Sa,I.Cb,I.Db,I.Cc,I.Dc,I.la,I.Ba,I.Ya,I.Ca,I.Fb,I.V,I.da],I.Yd=[I.Wa,I.Xa,I.Fc,I.Aa,I.xf,I.$a,I.Bc],I.zd=[I.Ba,I.Hd,I.Id,I.Bb,I.Ya,I.Aa,I.Z,I.ca,I.Za,I.$a,I.ya,I.xa,I.P,I.Wa,I.Xa,I.Vd,I.Td,I.Ud,I.Wd,I.Y,I.Md,I.Kd,I.Ld,I.Jd,I.Od,I.Ec,I.Nd,I.O,I.Gc,I.Fb,I.Bc,I.Rd,I.da];var Ic=/[A-Z]+/,Jc=/\s/,Kc=function(a){if(f(a)&&(a=Fa(a),!Jc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Ic.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],h:d}}}}},Mc=function(a){for(var b={},c=0;c<a.length;++c){var d=Kc(a[c]);d&&(b[d.id]=d)}Lc(b);var e=[];Aa(b,function(g,h){e.push(h)});return e};
function Lc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.h[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Nc={},Oc=null,Pc=Math.random();Nc.m="G-RPDMZ0YZ8R";Nc.Kb="121";var Qc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Rc="www.googletagmanager.com/gtm.js";Rc="www.googletagmanager.com/gtag/js";var Sc=Rc,Tc=null,Uc=null,Vc=null,Wc="//www.googletagmanager.com/a?id="+Nc.m+"&cv=1",Xc={},Yc={},Zc=function(){var a=Oc.sequence||0;Oc.sequence=a+1;return a};var $c={},P=function(a,b){$c[a]=$c[a]||[];$c[a][b]=!0},ad=function(a){for(var b=[],c=$c[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var bd=function(){return"&tc="+ub.filter(function(a){return a}).length},fd=function(){dd||(dd=D.setTimeout(ed,500))},ed=function(){dd&&(D.clearTimeout(dd),dd=void 0);void 0===gd||hd[gd]&&!id&&!jd||(kd[gd]||ld.Wg()||0>=md--?(P("GTM",1),kd[gd]=!0):(ld.uh(),gc(nd()),hd[gd]=!0,od=jd=id=""))},nd=function(){var a=gd;if(void 0===a)return"";var b=ad("GTM"),c=ad("TAGGING");return[pd,hd[a]?"":"&es=1",qd[a],b?"&u="+b:"",c?"&ut="+c:"",bd(),id,jd,od,"&z=0"].join("")},rd=function(){return[Wc,"&v=3&t=t","&pid="+
xa(),"&rv="+Nc.Kb].join("")},sd="0.005000">Math.random(),pd=rd(),td=function(){pd=rd()},hd={},id="",jd="",od="",gd=void 0,qd={},kd={},dd=void 0,ld=function(a,b){var c=0,d=0;return{Wg:function(){if(c<a)return!1;Ga()-d>=b&&(c=0);return c>=a},uh:function(){Ga()-d>=b&&(c=0);c++;d=Ga()}}}(2,1E3),md=1E3,ud=function(a,b){if(sd&&!kd[a]&&gd!==a){ed();gd=a;id="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";qd[a]="&e="+c+"&eid="+a;fd()}},vd=function(a,b,c){if(sd&&!kd[a]&&b){a!==gd&&
(ed(),gd=a);var d=String(b[Hb.na]||"").replace(/_/g,"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;id=id?id+"."+e:"&tr="+e;fd();2022<=nd().length&&ed()}},wd=function(a,b,c){if(sd&&!kd[a]){a!==gd&&(ed(),gd=a);var d=c+b;jd=jd?jd+"."+d:"&epr="+d;fd();2022<=nd().length&&ed()}};var xd={},yd=new ya,zd={},Ad={},Dd={name:"dataLayer",set:function(a,b){C(Ma(a,b),zd);Bd()},get:function(a){return Cd(a,2)},reset:function(){yd=new ya;zd={};Bd()}},Cd=function(a,b){if(2!=b){var c=yd.get(a);if(sd){var d=Ed(a);c!==d&&P("GTM",5)}return c}return Ed(a)},Ed=function(a,b,c){var d=a.split("."),e=!1,g=void 0;var h=function(k,l){for(var m=0;void 0!==k&&m<d.length;m++){if(null===k)return!1;k=k[d[m]]}return void 0!==k||1<m?k:l.length?h(Fd(l.pop()),l):Gd(d)};
e=!0;g=h(zd.eventModel,[b,c]);return e?g:Gd(d)},Gd=function(a){for(var b=zd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};var Fd=function(a){if(a){var b=Gd(["gtag","targets",a]);return Qa(b)?b:void 0}},Hd=function(a,b){function c(g){g&&Aa(g,function(h){d[h]=null})}var d={};c(zd);delete d.eventModel;c(Fd(a));c(Fd(b));c(zd.eventModel);var e=[];Aa(d,function(g){e.push(g)});return e};
var Id=function(a,b){Ad.hasOwnProperty(a)||(yd.set(a,b),C(Ma(a,b),zd),Bd())},Bd=function(a){Aa(Ad,function(b,c){yd.set(b,c);C(Ma(b,void 0),zd);C(Ma(b,c),zd);a&&delete Ad[b]})},Jd=function(a,b,c){xd[a]=xd[a]||{};var d=1!==c?Ed(b):yd.get(b);"array"===Oa(d)||"object"===Oa(d)?xd[a][b]=C(d):xd[a][b]=d},Kd=function(a,b){if(xd[a])return xd[a][b]};var Ld=function(){var a=!1;return a};var R=function(a,b,c,d){return(2===Md()||d||"http:"!=D.location.protocol?a:b)+c},Md=function(){var a=ec(),b;if(1===a)a:{var c=Sc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=F.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};
var Od=function(a,b,c){if(D[a.functionName])return b.fd&&H(b.fd),D[a.functionName];var d=Nd();D[a.functionName]=d;if(a.Nb)for(var e=0;e<a.Nb.length;e++)D[a.Nb[e]]=D[a.Nb[e]]||Nd();a.Zb&&void 0===D[a.Zb]&&(D[a.Zb]=c);dc(R("https://","http://",a.qd),b.fd,b.gh);return d},Nd=function(){var a=function(){a.q=a.q||[];a.q.push(arguments)};return a},Pd={functionName:"_googWcmImpl",Zb:"_googWcmAk",qd:"www.gstatic.com/wcm/loader.js"},Qd={functionName:"_gaPhoneImpl",Zb:"ga_wpid",qd:"www.gstatic.com/gaphone/loader.js"},
Rd={Te:"",If:"1"},Sd={functionName:"_googCallTrackingImpl",Nb:[Qd.functionName,Pd.functionName],qd:"www.gstatic.com/call-tracking/call-tracking_"+(Rd.Te||Rd.If)+".js"},Td={},Ud=function(a,b,c,d){P("GTM",22);if(c){d=d||{};var e=Od(Pd,d,a),g={ak:a,cl:b};void 0===d.ba&&(g.autoreplace=c);e(2,d.ba,g,c,0,new Date,d.options)}},Vd=function(a,b,c){P("GTM",23);if(b){c=c||{};var d=Od(Qd,c,a),e={};void 0!==c.ba?e.receiver=c.ba:e.replace=b;e.ga_wpid=a;e.destination=b;d(2,new Date,
e)}},Wd=function(a,b,c,d){P("GTM",21);if(b&&c){d=d||{};for(var e={countryNameCode:c,destinationNumber:b,retrievalTime:new Date},g=0;g<a.length;g++){var h=a[g];Td[h.id]||(h&&"AW"===h.prefix&&!e.adData&&2<=h.h.length?(e.adData={ak:h.h[0],cl:h.h[1]},Td[h.id]=!0):h&&"UA"===h.prefix&&!e.gaData&&(e.gaData={gaWpid:h.containerId},Td[h.id]=!0))}(e.gaData||e.adData)&&Od(Sd,d)(d.ba,e,d.options)}},Xd=function(){var a=!1;
return a},Yd=function(a,b){if(a)if(Ld()){}else{if(f(a)){var c=Kc(a);if(!c)return;a=c}var d=function(x){return b?b.getWithConfig(x):Ed(x,a.containerId,a.id)},e=void 0,g=!1,h=d(I.vf);if(h&&va(h)){e=[];for(var k=0;k<h.length;k++){var l=Kc(h[k]);l&&(e.push(l),(a.id===l.id||a.id===a.containerId&&a.containerId===l.containerId)&&(g=!0))}}if(!e||g){var m=d(I.Vd),n;if(m){n=va(m)?m:[m];var q=d(I.Td),u=d(I.Ud),p=d(I.Wd),t=d(I.uf),
v=q||u,w=1;"UA"!==a.prefix||e||(w=5);for(var y=0;y<n.length;y++)y<w&&(e?Wd(e,n[y],t,{ba:v,options:p}):"AW"===a.prefix&&a.h[1]?Xd()?Wd([a],n[y],t||"US",{ba:v,options:p}):Ud(a.h[0],a.h[1],n[y],{ba:v,options:p}):"UA"===a.prefix&&(Xd()?Wd([a],n[y],t||"US",{ba:v}):Vd(a.containerId,n[y],{ba:v})))}}}};var ae=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),be={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},ce={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},de="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var fe=function(a){Yc.pntr=Yc.pntr||["nonGoogleScripts"];Yc.snppx=Yc.snppx||["nonGoogleScripts"];Yc.qpx=Yc.qpx||["nonGooglePixels"];var b=Cd("gtm.whitelist");b&&P("GTM",9);b="google gtagfl lcl zone oid op".split(" ");
var c=b&&La(Ea(b),be),d=Cd("gtm.blacklist");d||(d=Cd("tagTypeBlacklist"))&&P("GTM",3);d?P("GTM",8):d=[];ee()&&(d=Ea(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=r(Ea(d),"google")&&P("GTM",2);var e=d&&La(Ea(d),ce),g={};return function(h){var k=h&&h[Hb.na];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];
var l=Yc[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>r(c,k))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>r(c,l[q])){P("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var u=!1;if(d){var p=0<=r(e,k);if(p)u=p;else{var t=za(e,l||[]);t&&P("GTM",10);u=t}}var v=!m||u;v||!(0<=r(l,"sandboxedScripts"))||c&&-1!==r(c,"sandboxedScripts")||(v=za(e,de));return g[k]=v}},ee=function(){return ae.test(D.location&&D.location.hostname)};var ge={mg:function(a,b){b[Hb.Bd]&&"string"===typeof a&&(a=1==b[Hb.Bd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Hb.Dd)&&null===a&&(a=b[Hb.Dd]);b.hasOwnProperty(Hb.Fd)&&void 0===a&&(a=b[Hb.Fd]);b.hasOwnProperty(Hb.Ed)&&!0===a&&(a=b[Hb.Ed]);b.hasOwnProperty(Hb.Cd)&&!1===a&&(a=b[Hb.Cd]);return a}};var he={active:!0,isWhitelisted:function(){return!0}},ie=function(a){var b=Oc.zones;!b&&a&&(b=Oc.zones=a());return b};var je=function(){};var ke=!1,le=0,me=[];function ne(a){if(!ke){var b=F.createEventObject,c="complete"==F.readyState,d="interactive"==F.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){ke=!0;for(var e=0;e<me.length;e++)H(me[e])}me.push=function(){for(var g=0;g<arguments.length;g++)H(arguments[g]);return 0}}}function oe(){if(!ke&&140>le){le++;try{F.documentElement.doScroll("left"),ne()}catch(a){D.setTimeout(oe,50)}}}var pe=function(a){ke?a():me.push(a)};var qe={},re={},se=function(a,b,c,d){if(!re[a]||Qc[b]||"__zone"===b)return-1;var e={};Qa(d)&&(e=C(d,e));e.id=c;e.status="timeout";return re[a].tags.push(e)-1},te=function(a,b,c,d){if(re[a]){var e=re[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function ue(a){for(var b=qe[a]||[],c=0;c<b.length;c++)b[c]();qe[a]={push:function(d){d(Nc.m,re[a])}}}
var xe=function(a,b,c){re[a]={tags:[]};ra(b)&&ve(a,b);c&&D.setTimeout(function(){return ue(a)},Number(c));return we(a)},ve=function(a,b){qe[a]=qe[a]||[];qe[a].push(Ia(function(){return H(function(){b(Nc.m,re[a])})}))};function we(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ia(function(){b++;d&&b>=c&&ue(a)})},Xf:function(){d=!0;b>=c&&ue(a)}}};var ye=function(){function a(d){return!ua(d)||0>d?0:d}if(!Oc._li&&D.performance&&D.performance.timing){var b=D.performance.timing.navigationStart,c=ua(Dd.get("gtm.start"))?Dd.get("gtm.start"):0;Oc._li={cst:a(c-b),cbt:a(Uc-b)}}};var Ce=!1,De=function(){return D.GoogleAnalyticsObject&&D[D.GoogleAnalyticsObject]},Ee=!1;
var Fe=function(a){D.GoogleAnalyticsObject||(D.GoogleAnalyticsObject=a||"ga");var b=D.GoogleAnalyticsObject;if(D[b])D.hasOwnProperty(b)||P("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);D[b]=c}ye();return D[b]},Ge=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=De();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Ie=function(){},He=function(){return D.GoogleAnalyticsObject||"ga"};var Ke=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Le=/:[0-9]+$/,Me=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},Pe=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Ne(a.protocol)||Ne(D.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:D.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||D.location.hostname).replace(Le,"").toLowerCase());var g=b,h,k=Ne(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=Oe(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(Le,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||P("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=r(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=Me(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},Ne=function(a){return a?a.replace(":","").toLowerCase():""},Oe=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
Qe=function(a){var b=F.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||P("TAGGING",1),c="/"+c);var d=b.hostname.replace(Le,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};function Ve(a,b,c,d){var e=ub[a],g=We(a,b,c,d);if(!g)return null;var h=Cb(e[Hb.ae],c,[]);if(h&&h.length){var k=h[0];g=Ve(k.index,{s:g,o:1===k.oe?b.terminate:g,terminate:b.terminate},c,d)}return g}
function We(a,b,c,d){function e(){if(g[Hb.Ef])k();else{var w=Db(g,c,[]),y=se(c.id,String(g[Hb.na]),Number(g[Hb.be]),w[Hb.Ff]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var A=Ga()-B;vd(c.id,ub[a],"5");te(c.id,y,"success",A);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var A=Ga()-B;vd(c.id,ub[a],"6");te(c.id,y,"failure",A);k()}};w.vtp_gtmTagId=g.tag_id;
w.vtp_gtmEventId=c.id;vd(c.id,g,"1");var z=function(){var A=Ga()-B;vd(c.id,g,"7");te(c.id,y,"exception",A);x||(x=!0,k())};var B=Ga();try{Bb(w,c)}catch(A){z(A)}}}var g=ub[a],h=b.s,k=b.o,l=b.terminate;if(c.Zc(g))return null;var m=Cb(g[Hb.ce],c,[]);if(m&&m.length){var n=m[0],q=Ve(n.index,{s:h,o:k,terminate:l},c,d);if(!q)return null;h=q;k=2===n.oe?l:q}if(g[Hb.$d]||g[Hb.Gf]){var u=g[Hb.$d]?vb:c.Dh,p=h,t=k;if(!u[a]){e=Ia(e);var v=Xe(a,u,e);h=v.s;k=v.o}return function(){u[a](p,t)}}return e}
function Xe(a,b,c){var d=[],e=[];b[a]=Ye(d,e,c);return{s:function(){b[a]=Ze;for(var g=0;g<d.length;g++)d[g]()},o:function(){b[a]=$e;for(var g=0;g<e.length;g++)e[g]()}}}function Ye(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Ze(a){a()}function $e(a,b){b()};var cf=function(a,b){for(var c=[],d=0;d<ub.length;d++)if(a.ob[d]){var e=ub[d];var g=b.add();try{var h=Ve(d,{s:g,o:g,terminate:g},a,d);h?c.push({Qe:d,Ge:Fb(e),yg:h}):(af(d,a),g())}catch(l){g()}}b.Xf();c.sort(bf);for(var k=0;k<c.length;k++)c[k].yg();return 0<c.length};function bf(a,b){var c,d=b.Ge,e=a.Ge;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.Qe,k=b.Qe;g=h>k?1:h<k?-1:0}return g}
function af(a,b){if(!sd)return;var c=function(d){var e=b.Zc(ub[d])?"3":"4",g=Cb(ub[d][Hb.ae],b,[]);g&&g.length&&c(g[0].index);vd(b.id,ub[d],e);var h=Cb(ub[d][Hb.ce],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var df=!1,ef=function(a,b,c,d,e){if("gtm.js"==b){if(df)return!1;df=!0}ud(a,b);var g=xe(a,d,e);Jd(a,"event",1);Jd(a,"ecommerce",1);Jd(a,"gtm");var h={id:a,name:b,Zc:fe(c),ob:[],Dh:[],Ae:function(){P("GTM",6)}};h.ob=Lb(h);var k=cf(h,g);
if(!k)return k;for(var l=0;l<h.ob.length;l++)if(h.ob[l]){var m=ub[l];if(m&&!Qc[String(m[Hb.na])])return!0}return!1};var ff=function(a,b){var c=Ab(a,b);ub.push(c);return ub.length-1};var gf=/^https?:\/\/www\.googletagmanager\.com/;function hf(){var a;return a}function kf(a,b){}
function jf(a){0!==a.indexOf("http://")&&0!==a.indexOf("https://")&&(a="https://"+a);"/"===a[a.length-1]&&(a=a.substring(0,a.length-1));return a}function lf(){var a=!1;return a};var mf=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.Na={};this.globalConfig={};this.s=function(){};this.o=function(){}},nf=function(a){var b=new mf;b.eventModel=a;return b},of=function(a,b){a.targetConfig=b;return a},pf=function(a,b){a.containerConfig=b;return a},qf=function(a,b){a.Na=b;return a},rf=function(a,b){a.globalConfig=b;return a},sf=function(a,b){a.s=b;return a},tf=function(a,b){a.o=b;return a};
mf.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.Na[a])return this.Na[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var uf=function(a){function b(e){Aa(e,function(g){c[g]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Aa(c,function(e){d.push(e)});return d};var vf={},wf=["G"];vf.Se="";var xf=vf.Se.split(",");function yf(){var a=Oc;return a.gcq=a.gcq||new zf}
var Af=function(a,b,c){yf().register(a,b,c)},Bf=function(a,b,c,d){yf().push("event",[b,a],c,d)},Cf=function(a,b){yf().push("config",[a],b)},Df={},Ef=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.Na={};this.He=null;this.ue=!1},Ff=function(a,b,c,d,e){this.type=a;this.Re=b;this.L=c||"";this.Ob=d;this.defer=e},zf=function(){this.je={};this.te={};this.fb=[]},Gf=function(a,b){var c=Kc(b);return a.je[c.containerId]=a.je[c.containerId]||new Ef},Hf=function(a,b,c,d){if(d.L){var e=
Gf(a,d.L),g=e.He;if(g){var h=C(c),k=C(e.targetConfig[d.L]),l=C(e.containerConfig),m=C(e.Na),n=C(a.te),q=Cd("gtm.uniqueEventId"),u=Kc(d.L).prefix,p=tf(sf(rf(qf(pf(of(nf(h),k),l),m),n),function(){wd(q,u,"2");}),function(){wd(q,u,"3");});try{wd(q,u,"1");3===g.length?g(b,d.Re,p):4===g.length&&
g(d.L,b,d.Re,p)}catch(t){wd(q,u,"4");}}}};
zf.prototype.register=function(a,b,c){if(3!==Gf(this,a).status){Gf(this,a).He=b;Gf(this,a).status=3;c&&(Gf(this,a).Na=c);var d=Kc(a),e=Df[d.containerId];if(void 0!==e){var g=Oc[d.containerId].bootstrap,h=d.prefix.toUpperCase();Oc[d.containerId]._spx&&(h=h.toLowerCase());var k=Cd("gtm.uniqueEventId"),l=h,m=Ga()-g;if(sd&&!kd[k]){k!==gd&&(ed(),gd=k);var n=l+"."+Math.floor(g-e)+"."+Math.floor(m);od=od?od+","+n:"&cl="+n}delete Df[d.containerId]}this.flush()}};
zf.prototype.push=function(a,b,c,d){var e=Math.floor(Ga()/1E3);if(c){var g=Kc(c),h;if(h=g){var k;if(k=1===Gf(this,c).status)a:{var l=g.prefix;k=!0}h=k}if(h&&(Gf(this,c).status=2,this.push("require",[],g.containerId),Df[g.containerId]=Ga(),!Ld())){var m=encodeURIComponent(g.containerId),n=("http:"!=D.location.protocol?"https:":"http:")+
"//www.googletagmanager.com";dc(n+"/gtag/js?id="+m+"&l=dataLayer&cx=c")}}this.fb.push(new Ff(a,e,c,b,d));d||this.flush()};
zf.prototype.flush=function(a){for(var b=this;this.fb.length;){var c=this.fb[0];if(c.defer)c.defer=!1,this.fb.push(c);else switch(c.type){case "require":if(3!==Gf(this,c.L).status&&!a)return;break;case "set":Aa(c.Ob[0],function(l,m){C(Ma(l,m),b.te)});break;case "config":var d=c.Ob[0],e=!!d[I.Fb];delete d[I.Fb];var g=Gf(this,c.L),h=Kc(c.L),k=h.containerId===h.id;e||(k?g.containerConfig={}:g.targetConfig[c.L]={});g.ue&&e||Hf(this,I.w,d,c);g.ue=!0;delete d[I.ma];k?C(d,g.containerConfig):C(d,g.targetConfig[c.L]);
break;case "event":Hf(this,c.Ob[1],c.Ob[0],c)}this.fb.shift()}};var If=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},Lf=function(a,b,c,d){var e=Jf(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Kf(e,function(g){return g.Tb},b);if(1===e.length)return e[0].id;e=Kf(e,function(g){return g.pb},c);return e[0]?e[0].id:void 0}};
function Mf(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=If(b,e).indexOf(c)}
var Pf=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var q=void 0,u=void 0,p;for(p in h)if(h.hasOwnProperty(p)){var t=h[p];if(null!=t)switch(p){case "secure":t&&(m+="; secure");break;case "domain":q=t;break;default:"path"==p&&(u=t),"expires"==p&&t instanceof Date&&(t=
t.toUTCString()),m+="; "+p+"="+t}}if("auto"===q){for(var v=Nf(),w=0;w<v.length;++w){var y="none"!=v[w]?v[w]:void 0;if(!Of(y,u)&&Mf(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else q&&"none"!=q&&(m+="; domain="+q),k=!Of(q,u)&&Mf(m,a,l)}return k};function Kf(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function Jf(a,b){for(var c=[],d=If(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),Tb:1*k[0]||1,pb:1*k[1]||1}))}}return c}
var Qf=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Rf=/(^|\.)doubleclick\.net$/i,Of=function(a,b){return Rf.test(document.location.hostname)||"/"===b&&Qf.test(a)},Nf=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Rf.test(e)||Qf.test(e)||a.push("none");return a};var Tf="".split(/,/),Uf=!1;var Vf=null,Wf={},Xf={},Yf;function Zf(a,b){var c={event:a};b&&(c.eventModel=C(b),b[I.zc]&&(c.eventCallback=b[I.zc]),b[I.Sa]&&(c.eventTimeout=b[I.Sa]));return c}
var $f=function(){Vf=Vf||!Oc.gtagRegistered;Oc.gtagRegistered=!0;return Vf},ag=function(a){if(void 0===Xf[a.id]){var b;switch(a.prefix){case "UA":b=ff("gtagua",{trackingId:a.id});break;case "AW":b=ff("gtagaw",{conversionId:a});break;case "DC":b=ff("gtagfl",{targetId:a.id});break;case "GF":b=ff("gtaggf",{conversionId:a});break;case "G":b=ff("get",{trackingId:a.id,isAutoTag:!0});break;case "HA":b=ff("gtagha",{conversionId:a});break;case "GP":b=ff("gtaggp",{conversionId:a.id});break;default:return}if(!Yf){var c=
Ab("v",{name:"send_to",dataLayerVersion:2});qb.push(c);Yf=["macro",qb.length-1]}var d={arg0:Yf,arg1:a.id,ignore_case:!1};d[Hb.na]="_lc";sb.push(d);var e={"if":[sb.length-1],add:[b]};e["if"]&&(e.add||e.block)&&rb.push(e);Xf[a.id]=b}},bg=function(a){Aa(Wf,function(b,c){var d=r(c,a);0<=d&&c.splice(d,1)})},cg=Ia(function(){}),dg=function(a){if(a.containerId!==Nc.m&&"G"!==a.prefix){var b;switch(a.prefix){case "UA":b=14;break;case "AW":b=15;break;case "DC":b=16;break;default:b=17}P("GTM",b)}};
var eg={config:function(a){var b=a[2]||{};if(2>a.length||!f(a[1])||!Qa(b))return;var c=Kc(a[1]);if(!c)return;bg(c.id);var d=c.id,e=b[I.Dc]||"default";e=e.toString().split(",");for(var g=0;g<e.length;g++)Wf[e[g]]=Wf[e[g]]||[],Wf[e[g]].push(d);delete b[I.Dc];C(b);if($f()){if(Uf&&-1!==r(Tf,c.prefix)){"G"===c.prefix&&(b[I.ma]=!0);Cf(b,c.id);return}ag(c);dg(c)}else cg();Id("gtag.targets."+c.id,void 0);Id("gtag.targets."+c.id,C(b));var h={};h[I.Ba]=c.id;return Zf(I.w,h);},
event:function(a){var b=a[1];if(f(b)&&!(3<a.length)){var c;if(2<a.length){if(!Qa(a[2])&&void 0!=a[2])return;c=a[2]}var d=Zf(b,c);var e;var g=c,h=Cd("gtag.fields.send_to",2);f(h)?P("GTM",37):h=I.Ba;var k=g&&g[h];void 0===k&&(k=Cd(h,2),void 0===k&&(k="default"));if(f(k)||va(k)){for(var l=k.toString().replace(/\s+/g,"").split(","),m=[],n=0;n<l.length;n++)0<=l[n].indexOf("-")?m.push(l[n]):m=m.concat(Wf[l[n]]||[]);e=Mc(m)}else e=void 0;var q=e;if(!q)return;var u=$f();u||
cg();for(var p=[],t=0;u&&t<q.length;t++){var v=q[t];dg(v);if(Uf&&-1!==r(Tf,v.prefix)){var w=C(c);"G"===v.prefix&&(w[I.ma]=!0);Bf(b,w,v.id)}else ag(v);p.push(v.id)}C(c,{event:b});d.eventModel=d.eventModel||{};0<q.length?d.eventModel[I.Ba]=p.join():delete d.eventModel[I.Ba];return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){3===a.length&&(void 0).fi().Yh(a[1],a[2])},set:function(a){var b;2==a.length&&
Qa(a[1])?b=C(a[1]):3==a.length&&f(a[1])&&(b={},Qa(a[2])||va(a[2])?b[a[1]]=C(a[2]):b[a[1]]=a[2]);if(b){if($f()){var c=C(b);yf().push("set",[c])}C(b);b._clear=!0;return b}}},fg={policy:!0};var gg=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},ig=function(a){var b=hg(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var vg=function(a){if(ug(a))return a;this.Ih=a};vg.prototype.Eg=function(){return this.Ih};var ug=function(a){return!a||"object"!==Oa(a)||Qa(a)?!1:"getUntrustedUpdateValue"in a};vg.prototype.getUntrustedUpdateValue=vg.prototype.Eg;var wg=!1,xg=[];function yg(){if(!wg){wg=!0;for(var a=0;a<xg.length;a++)H(xg[a])}}var zg=function(a){wg?H(a):xg.push(a)};var Ag=[],Bg=!1,Cg=function(a){return D["dataLayer"].push(a)},Dg=function(a){var b=Oc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Eg(a){var b=a._clear;Aa(a,function(g,h){"_clear"!==g&&(b&&Id(g,void 0),Id(g,h))});Tc||(Tc=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Zc(),a["gtm.uniqueEventId"]=d,Id("gtm.uniqueEventId",d));Vc=c;var e=Fg(a);Vc=
null;switch(c){case "gtm.init":P("GTM",19),e&&P("GTM",20)}return e}function Fg(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Oc.zones;d=e?e.checkState(Nc.m,c):he;return d.active?ef(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function Gg(){for(var a=!1;!Bg&&0<Ag.length;){Bg=!0;delete zd.eventModel;Bd();var b=Ag.shift();if(null!=b){var c=ug(b);if(c){var d=b;b=ug(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=Cd(h,1);if(va(k)||Qa(k))k=C(k);Ad[h]=k}}try{if(ra(b))try{b.call(Dd)}catch(v){}else if(va(b)){var l=b;if(f(l[0])){var m=
l[0].split("."),n=m.pop(),q=l.slice(1),u=Cd(m.join("."),2);if(void 0!==u&&null!==u)try{u[n].apply(u,q)}catch(v){}}}else{var p=b;if(p&&("[object Arguments]"==Object.prototype.toString.call(p)||Object.prototype.hasOwnProperty.call(p,"callee"))){a:{if(b.length&&f(b[0])){var t=eg[b[0]];if(t&&(!c||!fg[b[0]])){b=t(b);break a}}b=void 0}if(!b){Bg=!1;continue}}a=Eg(b)||a}}finally{c&&Bd(!0)}}Bg=!1}
return!a}function Hg(){var a=Gg();try{gg(D["dataLayer"],Nc.m)}catch(b){}return a}
var Jg=function(){var a=bc("dataLayer",[]),b=bc("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};pe(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});zg(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<Oc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new vg(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);Ag.push.apply(Ag,d);if(300<
this.length)for(P("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Gg()&&h};Ag.push.apply(Ag,a.slice(0));Ig()&&H(Hg)},Ig=function(){var a=!0;return a};var Kg={};Kg.Gb=new String("undefined");
var Lg=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Kg.Gb?b:a[d]);return c.join("")}};Lg.prototype.toString=function(){return this.resolve("undefined")};Lg.prototype.valueOf=Lg.prototype.toString;Kg.Jf=Lg;Kg.Lc={};Kg.pg=function(a){return new Lg(a)};var Mg={};Kg.vh=function(a,b){var c=Zc();Mg[c]=[a,b];return c};Kg.ke=function(a){var b=a?0:1;return function(c){var d=Mg[c];if(d&&"function"===typeof d[b])d[b]();Mg[c]=void 0}};Kg.Ug=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};Kg.lh=function(a){if(a===Kg.Gb)return a;var b=Zc();Kg.Lc[b]=a;return'google_tag_manager["'+Nc.m+'"].macro('+b+")"};Kg.eh=function(a,b,c){a instanceof Kg.Jf&&(a=a.resolve(Kg.vh(b,c)),b=qa);return{Xc:a,s:b}};var Ng=function(a,b,c){function d(g,h){var k=g[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||ic(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Og=function(a){Oc.hasOwnProperty("autoEventsSettings")||(Oc.autoEventsSettings={});var b=Oc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Pg=function(a,b,c){Og(a)[b]=c},Qg=function(a,b,c,d){var e=Og(a),g=Ha(e,b,d);e[b]=c(g)},Rg=function(a,b,c){var d=Og(a);return Ha(d,b,c)};var Sg=function(){for(var a=$b.userAgent+(F.cookie||"")+(F.referrer||""),b=a.length,c=D.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ga()/1E3)].join(".")},Vg=function(a,b,c,d){var e=Tg(b);return Lf(a,e,Ug(c),d)},Wg=function(a,b,c,d){var e=""+Tg(c),g=Ug(d);1<g&&(e+="-"+g);return[b,e,a].join(".")},Tg=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Ug=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var Xg=["1"],Yg={},bh=function(a,b,c,d){var e=Zg(a);Yg[e]||$g(e,b,c)||(ah(e,Sg(),b,c,d),$g(e,b,c))};function ah(a,b,c,d,e){var g=Wg(b,"1",d,c);Pf(a,g,c,d,0==e?void 0:new Date(Ga()+1E3*(void 0==e?7776E3:e)))}function $g(a,b,c){var d=Vg(a,b,c,Xg);d&&(Yg[a]=d);return d}function Zg(a){return(a||"_gcl")+"_au"};var ch=function(){for(var a=[],b=F.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({td:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].td]||(g[a[h].td]=[]),g[a[h].td].push({timestamp:k[1],Bg:k[2]}))}return g};function dh(){for(var a=eh,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function fh(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var eh,gh;function hh(a){eh=eh||fh();gh=gh||dh();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,q=k&63;e||(q=64,d||(n=64));b.push(eh[l],eh[m],eh[n],eh[q])}return b.join("")}
function ih(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=gh[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}eh=eh||fh();gh=gh||dh();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var jh;function kh(a,b){if(!a||b===F.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var oh=function(){var a=lh,b=mh,c=nh(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){G(F,"mousedown",d);G(F,"keyup",d);G(F,"submit",e);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);g.call(this)};c.init=!0}},nh=function(){var a=bc("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var ph=/(.*?)\*(.*?)\*(.*)/,qh=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,rh=/^(?:www\.|m\.|amp\.)+/,sh=/([^?#]+)(\?[^#]*)?(#.*)?/,th=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,vh=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(hh(String(d))))}var e=b.join("*");return["1",uh(e),e].join("*")},uh=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=jh)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}jh=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^jh[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},xh=function(){return function(a){var b=Qe(D.location.href),c=b.search.replace("?",""),d=Me(c,"_gl",!0)||"";a.query=wh(d)||{};var e=Pe(b,"fragment").match(th);a.fragment=wh(e&&e[3]||
"")||{}}},yh=function(){var a=xh(),b=nh();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ja(c,d.query),Ja(c,d.fragment));return c},wh=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=ph.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===uh(k,n)){l=!0;break a}l=!1}if(l){for(var q={},u=k?k.split("*"):[],p=0;p<u.length;p+=2)q[u[p]]=ih(u[p+1]);return q}}}}catch(t){}};
function zh(a,b,c){function d(m){var n=m,q=th.exec(n),u=n;if(q){var p=q[2],t=q[4];u=q[1];t&&(u=u+p+t)}m=u;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=sh.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function Ah(a,b,c){for(var d={},e={},g=nh().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&kh(k.domains,b)&&(k.fragment?Ja(e,k.callback()):Ja(d,k.callback()))}if(Ka(d)){var l=vh(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],q=!1,u=0;u<n.length;u++){var p=n[u];if("_gl"===p.name){p.setAttribute("value",l);q=!0;break}}if(!q){var t=F.createElement("input");t.setAttribute("type","hidden");t.setAttribute("name","_gl");t.setAttribute("value",
l);a.appendChild(t)}}else if("post"===m){var v=zh(l,a.action);Ke.test(v)&&(a.action=v)}}}else Bh(l,a,!1)}if(!c&&Ka(e)){var w=vh(e);Bh(w,a,!0)}}function Bh(a,b,c){if(b.href){var d=zh(a,b.href,void 0===c?!1:c);Ke.test(d)&&(b.href=d)}}
var lh=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||Ah(e,e.hostname,!1)}}catch(h){}},mh=function(a){try{if(a.action){var b=Pe(Qe(a.action),"host");Ah(a,b,!0)}}catch(c){}},Ch=function(a,b,c,d){oh();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};nh().decorators.push(e)},Dh=function(){var a=F.location.hostname,b=qh.exec(F.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(rh,""),l=e.replace(rh,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},Eh=function(a,b){return!1===a?!1:a||b||Dh()};var Fh={};var Gh=/^\w+$/,Hh=/^[\w-]+$/,Ih=/^~?[\w-]+$/,Jh={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"};function Kh(a){return a&&"string"==typeof a&&a.match(Gh)?a:"_gcl"}var Mh=function(){var a=Qe(D.location.href),b=Pe(a,"query",!1,void 0,"gclid"),c=Pe(a,"query",!1,void 0,"gclsrc"),d=Pe(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Me(e,"gclid",void 0);c=c||Me(e,"gclsrc",void 0)}return Lh(b,c,d)};
function Lh(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(Hh))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==Fh.gtm_3pds?0:Fh.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d}var Oh=function(a){var b=Mh();Nh(b,a)};
function Nh(a,b,c){function d(q,u){var p=Ph(q,e);p&&Pf(p,u,h,g,l,!0)}b=b||{};var e=Kh(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Ka?7776E3:b.Ka;c=c||Ga();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(q){return["GCL",m,q].join(".")};a.aw&&(!0===b.yi?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]));a.gp&&d("gp",n(a.gp[0]))}
var Rh=function(a,b,c,d,e){for(var g=yh(),h=Kh(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==Jh[l]){var m=Ph(l,h),n=g[m];if(n){var q=Math.min(Qh(n),Ga()),u;b:{for(var p=q,t=If(m,F.cookie),v=0;v<t.length;++v)if(Qh(t[v])>p){u=!0;break b}u=!1}u||Pf(m,n,c,d,0==e?void 0:new Date(q+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};Nh(Lh(g.gclid,g.gclsrc),w)},Ph=function(a,b){var c=Jh[a];if(void 0!==c)return b+c},Qh=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Sh(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Th=function(a,b,c,d,e){if(va(b)){var g=Kh(e);Ch(function(){for(var h={},k=0;k<a.length;++k){var l=Ph(a[k],g);if(l){var m=If(l,F.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},Uh=function(a){return a.filter(function(b){return Ih.test(b)})},Vh=function(a,b){for(var c=Kh(b&&b.prefix),d={},e=0;e<a.length;e++)Jh[a[e]]&&(d[a[e]]=Jh[a[e]]);Aa(d,function(g,h){var k=If(c+h,F.cookie);if(k.length){var l=k[0],m=Qh(l),n={};n[g]=[Sh(l)];Nh(n,b,m)}})};var Wh=/^\d+\.fls\.doubleclick\.net$/;function Xh(a){var b=Qe(D.location.href),c=Pe(b,"host",!1);if(c&&c.match(Wh)){var d=Pe(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Yh(a,b){if("aw"==a||"dc"==a){var c=Xh("gcl"+a);if(c)return c.split(".")}var d=Kh(b);if("_gcl"==d){var e;e=Mh()[a]||[];if(0<e.length)return e}var g=Ph(a,d),h;if(g){var k=[];if(F.cookie){var l=If(g,F.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=Sh(l[m]);n&&-1===r(k,n)&&k.push(n)}h=Uh(k)}else h=k}else h=k}else h=[];return h}
var Zh=function(){var a=Xh("gac");if(a)return decodeURIComponent(a);var b=ch(),c=[];Aa(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].Bg);g=Uh(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},$h=function(a,b,c,d,e){bh(b,c,d,e);var g=Yg[Zg(b)],h=Mh().dc||[],k=!1;if(g&&0<h.length){var l=Oc.joined_au=Oc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var q="https://adservice.google.com/ddm/regclk",u=q=q+"?gclid="+h[n]+"&auiddc="+g;$b.sendBeacon&&$b.sendBeacon(u)||gc(u);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var p=Zg(b),t=Yg[p];t&&ah(p,t,c,d,e)}};var ai;if(3===Nc.Kb.length)ai="g";else{var bi="G";bi="g";ai=bi}
var ci={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:ai,OPT:"o"},di=function(a){var b=Nc.m.split("-"),c=b[0].toUpperCase(),d=ci[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",g;if(3===Nc.Kb.length){var h=void 0;h=h||(Ld()?"s":"o");g="2"+(h||"w")}else g=
"";return g+d+Nc.Kb+e};
var ei=function(a){return!(void 0===a||null===a||0===(a+"").length)},fi=function(a,b){var c;if(2===b.S)return a("ord",xa(1E11,1E13)),!0;if(3===b.S)return a("ord","1"),a("num",xa(1E11,1E13)),!0;if(4===b.S)return ei(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.S)c="1";else if(6===b.S)c=b.nd;else return!1;ei(c)&&a("qty",c);ei(b.Qb)&&a("cost",b.Qb);ei(b.transactionId)&&a("ord",b.transactionId);return!0},gi=encodeURIComponent,hi=function(a,b){function c(n,q,u){g.hasOwnProperty(n)||(q+="",e+=";"+n+"="+
(u?q:gi(q)))}var d=a.Tc,e=a.protocol;e+=a.gc?"//"+d+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";e+=";src="+gi(d)+(";type="+gi(a.Vc))+(";cat="+gi(a.eb));var g=a.rg||{};Aa(g,function(n,q){e+=";"+gi(n)+"="+gi(q+"")});if(fi(c,a)){ei(a.qc)&&c("u",a.qc);ei(a.oc)&&c("tran",a.oc);c("gtm",di());!1===a.Tf&&c("npa","1");if(a.Rc){var h=Yh("dc",a.Fa);h&&h.length&&c("gcldc",h.join("."));var k=Yh("aw",a.Fa);k&&k.length&&c("gclaw",k.join("."));var l=Zh();l&&c("gac",l);bh(a.Fa,void 0,a.ng,a.og);
var m=Yg[Zg(a.Fa)];m&&c("auiddc",m)}ei(a.jd)&&c("prd",a.jd,!0);Aa(a.vd,function(n,q){c(n,q)});e+=b||"";ei(a.ac)&&c("~oref",a.ac);a.gc?fc(e+"?",a.s):gc(e+"?",a.s,a.o)}else H(a.o)};var ii=["input","select","textarea"],ji=["button","hidden","image","reset","submit"],ki=function(a){var b=a.tagName.toLowerCase();return!wa(ii,function(c){return c===b})||"input"===b&&wa(ji,function(c){return c===a.type.toLowerCase()})?!1:!0},li=function(a){return a.form?a.form.tagName?a.form:F.getElementById(a.form):lc(a,["form"],100)},mi=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,g=1;e<a.elements.length;e++){var h=a.elements[e];if(ki(h)){if(h.getAttribute(c)===d)return g;
g++}}return 0};
var oi=function(a){var b;if(a.hasOwnProperty("conversion_data"))b="conversion_data";else if(a.hasOwnProperty("price"))b="price";else return;var c=b,d="/pagead/conversion/"+ni(a.conversion_id)+"/?",e=ni(JSON.stringify(a[c])),g="https://www.googletraveladservices.com/travel/flights/clk"+d+c+"="+e;if(a.conversionLinkerEnabled){var h=Yh("gf",a.cookiePrefix);if(h&&h.length)for(var k=0;k<h.length;k++)g+="&gclgf="+ni(h[k])}gc(g,a.onSuccess,a.onFailure)},ni=function(a){return null===a||void 0===a||0===String(a).length?
"":encodeURIComponent(String(a))};var pi=!!D.MutationObserver,qi=void 0,ri=function(a){if(!qi){var b=function(){var c=F.body;if(c)if(pi)(new MutationObserver(function(){for(var e=0;e<qi.length;e++)H(qi[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;G(c,"DOMNodeInserted",function(){d||(d=!0,H(function(){d=!1;for(var e=0;e<qi.length;e++)H(qi[e])}))})}};qi=[];F.body?b():H(b)}qi.push(a)};
var Ci=function(){var a=F.body,b=F.documentElement||a&&a.parentElement,c,d;if(F.compatMode&&"BackCompat"!==F.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(g,h){return g&&h?Math.min(g,h):Math.max(g,h)};P("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Di=function(a){var b=Ci(),c=b.height,d=b.width,e=a.getBoundingClientRect(),g=e.bottom-e.top,h=e.right-e.left;return g&&h?(1-Math.min((Math.max(0-e.left,0)+
Math.max(e.right-d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/g,1)):0},Ei=function(a){if(F.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!D.getComputedStyle)return!0;var c=D.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var g=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-
1)),g=Math.min(h,g))}if(void 0!==g&&0>=g)return!0;(d=d.parentElement)&&(e=D.getComputedStyle(d,null))}return!1};
var Mi=function(a,b,c){function d(){var h=a();g+=e?(Ga()-e)*h.playbackRate/1E3:0;e=Ga()}var e=0,g=0;return{Ub:function(h,k,l){var m=a(),n=m.me,q=void 0!==l?Math.round(l):void 0!==k?Math.round(m.me*k):Math.round(m.qg),u=void 0!==k?Math.round(100*k):0>=n?0:Math.round(q/n*100),p=F.hidden?!1:.5<=Di(c);d();var t=Ng(c,"gtm.video",[b]);t["gtm.videoProvider"]="youtube";t["gtm.videoStatus"]=h;t["gtm.videoUrl"]=m.url;t["gtm.videoTitle"]=m.title;t["gtm.videoDuration"]=Math.round(n);t["gtm.videoCurrentTime"]=
Math.round(q);t["gtm.videoElapsedTime"]=Math.round(g);t["gtm.videoPercent"]=u;t["gtm.videoVisible"]=p;Cg(t)},xh:function(){e=Ga()},Mc:function(){d()}}};var Ni=D.clearTimeout,Oi=D.setTimeout,V=function(a,b,c){if(Ld()){b&&H(b)}else return dc(a,b,c)},Pi=function(){return D.location.href},Qi=function(a){return Pe(Qe(a),"fragment")},Ri=function(a){return Oe(Qe(a))},W=function(a,b){return Cd(a,b||2)},Si=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return Cg(a)},Ti=function(a,b){D[a]=b},X=function(a,b,c){b&&(void 0===D[a]||c&&!D[a])&&(D[a]=b);return D[a]},
Ui=function(a,b,c){return If(a,b,void 0===c?!0:!!c)},Vi=function(a,b){if(Ld()){b&&H(b)}else fc(a,b)},Wi=function(a){return!!Rg(a,"init",!1)},Xi=function(a){Pg(a,"init",!0)},Yi=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Sc;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";V(R("https://","http://",c))},Zi=function(a,b){var c=a[b];return c};
var $i=Kg.eh;var aj;var xj=new ya;function yj(a,b){function c(h){var k=Qe(h),l=Pe(k,"protocol"),m=Pe(k,"host",!0),n=Pe(k,"port"),q=Pe(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,q]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0}
function zj(a){return Aj(a)?1:0}
function Aj(a){var b=a.arg0,c=a.arg1;if(a.any_of&&va(c)){for(var d=0;d<c.length;d++)if(zj({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=r(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var q;var u=a.ignore_case?"i":void 0;try{var p=String(c)+u,t=xj.get(p);t||(t=new RegExp(c,u),xj.set(p,t));q=t.test(b)}catch(v){q=!1}return q;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return yj(b,
c)}return!1};var Bj=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Cj={},Dj=encodeURI,Y=encodeURIComponent,Ej=gc;var Fj=function(a,b){if(!a)return!1;var c=Pe(Qe(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var Gj=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};Cj.Vg=function(){var a=!1;return a};
var vk={};vk[I.Ab]="";vk[I.P]="";vk[I.T]="auto";vk[I.za]="/";vk[I.U]=63072E3;vk[I.Ca]=30;vk[I.Ya]=!0;var wk=function(a,b,c,d,e){this.kc=a;this.aa=b;this.Ia=c;this.H=d.eventModel;this.kg=d.containerConfig;this.ne=d;this.qb=e;this.Rb=this.Sc=this.ye=this.nb=this.we=this.xe=this.$b=!1;this.qa=0;this.$c=!1;this.pd=void 0;this.Vb=0};wk.prototype.oa=function(a,b){void 0===this.i(a)&&(this.H[a]=b)};wk.prototype.i=function(a){return void 0!==this.H[a]?this.H[a]:void 0!==this.ne.getWithConfig(a)?this.ne.getWithConfig(a):
void 0!==this.qb[a]?this.qb[a]:vk[a]};wk.prototype.Yb=function(a){var b=this.qb[I.Ac];if(b&&void 0!==b[a||this.aa])return b[a||this.aa]};var xk=!1;
var Bk=function(){var a=0,b=0;return{start:function(){a=Ga()},stop:function(){b=this.get()},get:function(){var c=0;yk&&zk&&Ak&&(c=Ga()-a);return c+b}}},Fk=function(){Ck+=Dk();Ek=Bk();yk&&zk&&Ak&&Ek.start()},Ek=void 0,Ck=0,yk=!1,zk=!1,Ak=!1,Gk=void 0,Hk=function(){if(!Ek){yk=F.hasFocus();zk=!F.hidden;Ak=!0;var a=function(b,c,d){G(b,c,function(){Ek.stop();d();yk&&zk&&Ak&&Ek.start()})};a(D,"focus",function(){yk=!0});a(D,"blur",function(){yk=!1});a(D,"pageshow",function(){Ak=!0});a(D,"pagehide",function(){Ak=
!1;Gk&&Gk()});a(F,"visibilitychange",function(){zk=!F.hidden});Fk();Ck=0}},Dk=function(){return Ek&&Ek.get()||0};var Ik=function(a){return String(a.i(I.P))+"_ga"},Jk=["GA1"],Kk=function(a){var b=Ik(a),c=String(a.i(I.T)),d=String(a.i(I.za)),e=Vg(b,c,d,Jk);if(!e){var g=String(a.i(I.Ab));g&&g!=b&&(e=Vg(g,c,d,Jk))}return e},Lk=function(a,b){var c=Ik(b),d=String(b.i(I.T)),e=String(b.i(I.za)),g=Number(b.i(I.U));if(!1===b.i(I.Ra)&&Kk(b)===a)return!0;var h=new Date(Ga()+1E3*g),k=Wg(a,Jk[0],d,e);return Pf(c,k,e,d,h)};var Ok=function(a,b){var c=Mk(b),d=String(b.i(I.T)),e=String(b.i(I.za)),g=Number(b.i(I.U)),h=Wg(a,Nk[0],d,e);return Pf(c,h,e,d,new Date(Ga()+1E3*g))},Pk=function(a){var b=Mk(a),c=String(a.i(I.T)),d=String(a.i(I.za));return Vg(b,c,d,Nk)},Nk=["GS1"],Mk=function(a){return String(a.i(I.P))+"_ga_"+a.kc.substr(2)};var Qk=!1;var Rk=function(a){if(Qk){var b=a.i(I.la)||{},c=Ik(a),d=Mk(a);if(Eh(b[I.Ta],!!b[I.F])){var e=yh(),g=e[c];g&&Lk(g,a);var h=e[d];h&&Ok(h,a)}b[I.F]&&Ch(function(){var k={},l=Kk(a);l&&(k[c]=l);var m=Pk(a);m&&(k[d]=m);return k},b[I.F],b[I.Va],!!b[I.Ua])}};var Sk=function(){var a=Ga(),b=a+864E5,c=20,d=5E3;return function(){var e=Ga();e>=b&&(b=e+864E5,d=5E3);if(1>d)return!1;c=Math.min(c+(e-a)/1E3*5,20);a=e;if(1>c)return!1;d--;c--;return!0}};var Tk=function(){var a=D.gaGlobal=D.gaGlobal||{};a.hid=a.hid||xa();return a.hid};
var Uk=function(a){var b="https://www.google-analytics.com/g/collect";return b},Vk={};Vk[I.zf]="tid";Vk[I.zb]="cid";Vk[I.Aa]="ul";Vk[I.Bc]="_fid";var Wk={};Wk[I.Eb]="sid";Wk[I.Ic]="sct";Wk[I.Hc]=
"seg";Wk[I.Wa]="dl";Wk[I.Xa]="dr";Wk[I.Fc]="dt";Wk[I.ca]="cu";Wk[I.$a]="uid";var Xk=function(a,b){function c(m,n){if(void 0!==n&&-1==I.Bf.indexOf(m)){null===n&&(n="");var q;if("_"===m.charAt(0))d[m]=n;else if(Vk[m])q=Vk[m],d[q]=n;else if(Wk[m])q=Wk[m],g[q]=n;else{var u="ep."+m,p="epn."+m;q=ua(n)?p:u;var t=ua(n)?u:p;e.hasOwnProperty(t)&&delete e[t];e[q]=n}}}var d={},e={},g={};d.v="2";d.tid=a.kc;d.gtm=di();d._p=Tk();a.pd&&(d.sr=a.pd);
e.en=a.aa;if(a.$b){e._fv=1;}a.we&&(e._nsi=1);if(a.nb){e._ss=1;}a.$c&&(e._c=1);0<a.Vb&&(e._et=a.Vb);for(var h=0;h<I.Yd.length;++h){var k=I.Yd[h];c(k,a.i(k))}Aa(a.kg,c);Aa(a.H,c);var l=a.i(I.V)||{};Aa(l,function(m,n){b[m]!==n&&(m!==I.$a||
g.uid?e[(ua(n)?"upn.":"up.")+m]=n:g.uid=n,b[m]=n)});return Mb.call(this,{W:d,sa:g,H:e},Uk(a))||this};Xk.prototype=ca(Mb.prototype);Xk.prototype.constructor=Xk;if(la)la(Xk,Mb);else for(var Yk in Mb)if("prototype"!=Yk)if(Object.defineProperties){var Zk=Object.getOwnPropertyDescriptor(Mb,Yk);Zk&&Object.defineProperty(Xk,Yk,Zk)}else Xk[Yk]=Mb[Yk];
var $k=function(a){return a&&0===a.indexOf("google.")&&"google.com"!=a?"https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&".replace("%",a):void 0},al=function(){this.Je=1;this.Uf={};this.Ea=new Nb;this.ib=-1};al.prototype.add=function(a){var b=this,c=new Xk(a,this.Uf),d=!(!$b.sendBeacon||a.$c||a.nb||a.Sc||a.Rb||xk);d&&this.Ea.ve(c)||this.flush();if(d&&this.Ea.add(c))0>this.ib&&(this.ib=D.setTimeout(function(){return b.flush()},5E3));else{var e=Pb(c,this.Je++);bl(c.baseUrl,e);cl(c,a.Sc,a.Rb,String(a.i(I.Cc)))}};
al.prototype.flush=function(){if(this.Ea.events.length){var a=Qb(this.Ea,this.Je++);bl(this.Ea.baseUrl,a.De,a.body);this.Ea=new Nb;0<=this.ib&&(D.clearTimeout(this.ib),this.ib=-1)}};var cl=function(a,b,c,d){function e(k){g.push(k+"="+encodeURIComponent(""+a.W[k]))}if(b||c){var g=[];e("tid");e("cid");e("gtm");g.push("aip=1");a.sa.uid&&g.push("uid="+encodeURIComponent(""+a.sa.uid));b&&(bl("https://stats.g.doubleclick.net/g/collect","v=2&"+g.join("&")),je("https://stats.g.doubleclick.net/g/collect?v=2&"+
g.join("&")));}},bl=function(a,b,c){var d=a+"?"+b;c?$b.sendBeacon&&$b.sendBeacon(d,c):$b.sendBeacon&&$b.sendBeacon(d)||gc(d)};var dl=window,el=document,fl=function(a){var b=dl._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===dl["ga-disable-"+a])return!0;try{var c=dl.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=If("AMP_TOKEN",el.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return el.getElementById("__gaOptOutExtension")?!0:!1};
var gl=function(a){var b=Cd("gtm.gtagReferrer."+a.kc);return b?""+b:F.referrer},hl=function(a,b){this.Ch=a;this.qb=b;this.Le=new al;this.Ne=!1};hl.prototype.mh=function(a,b,c){this.Ne||(this.Ne=!0,a!==I.w&&P("GTM",24));if(c.eventModel[I.ma]){if(il(a))return;delete c.eventModel[I.ma];if(a!==I.w){var d=c.getWithConfig(I.Bb);if(va(d)){P("GTM",26);for(var e={},g=0;g<d.length;g++){var h=d[g],k=c.getWithConfig(h);void 0!==k&&(e[h]=k)}c.eventModel=e}}jl(c.eventModel)}var l=new wk(this.Ch,a,b,c,this.qb);
try{if(fl(l.kc))throw P("GTM",28),"ABORT";if(0<=r("".replace(/\s+/g,"").split(","),l.aa))throw P("GTM",33),"ABORT";var m=l.Yb();if(m&&m.blacklisted)throw P("GTM",34),"ABORT";var n=F.location.protocol;if("http:"!=n&&"https:"!=n)throw P("GTM",29),"ABORT";if($b&&"preview"==$b.loadPurpose)throw P("GTM",30),"ABORT";var q=Oc.grl;q||(q=Sk(),Oc.grl=q);if(!q())throw P("GTM",35),"ABORT";l.Vb=Dk();if(l.aa==I.w){Hk();Rk(l);if(!l.i(I.Ya))throw"ABORT";l.aa=I.xc}var u=l.H[I.zb];u||(u=
Kk(l));u?u=""+u:(l.$b=l.we=!0,u=Sg());l.H[I.zb]=u;var p=Pk(l),t=Ca(l.i(I.Ca)),v;a:{if(p){var w=p.split(".");if(!(4>w.length||5<w.length)){v={sessionId:w[0],rd:Number(w[1]),hc:!!Number(w[2]),ad:Number(w[3]),qa:Number(w[4]||0)};break a}}v=void 0}v&&v.qa&&(l.qa=Math.max(0,v.qa-Math.max(0,l.Ia-v.ad)));var y=!1;v||(y=l.$b=!0,v={sessionId:String(l.Ia),rd:1,hc:!1,ad:l.Ia});l.Ia>v.ad+60*t&&(y=!0,v.sessionId=String(l.Ia),v.rd++,v.hc=!1);if(y)l.nb=!0,l.Vb=0,Fk(),Ck=0;else if(1E4<Ck+Dk()||l.aa==I.xc)v.hc=!0;
l.oa(I.Eb,v.sessionId);l.oa(I.Ic,v.rd);l.oa(I.Hc,v.hc?1:0);var x="",z=F.location;if(z){var B=z.pathname||"";"/"!=B.charAt(0)&&(B="/"+B);x=z.protocol+"//"+z.hostname+B+z.search}l.oa(I.Wa,x);l.oa(I.Xa,gl(l));l.oa(I.Fc,F.title);l.oa(I.Aa,($b.language||"").toLowerCase());var A=D.screen,E=A?A.width:0,J=A?A.height:0;l.pd=E+"x"+J;if(!1===l.i(I.O))P("GTM",27);else{var M=l.i(I.Db),U=l.i(I.Cb);l.nb&&(l.Sc=!!M);M&&!U&&0===l.qa&&(l.qa=60,l.Rb=!0)}kl(l);var ea=l.H[I.zb];if(ea){if(!Lk(""+ea,l))throw P("GTM",31),
"ABORT";}else throw P("GTM",32),"ABORT";var T;var ba=l.H[I.Eb],fa=l.H[I.Ic];T=ba&&fa?[ba,fa,Ca(l.H[I.Hc]),l.Ia,l.qa].join("."):void 0;if(T&&!Ok(T,l)){P("GTM",25);throw"ABORT";}Fk();this.Le.add(l)}catch(N){c.o()}};hl.prototype.flush=function(){this.Le.flush()};var kl=function(a){var b=function(c){return!!c&&c.conversion};a.$c=b(a.Yb());};function il(a){return"_"===a.charAt(0)}var jl=function(a){Aa(a,function(c){il(c)&&delete a[c]});var b=a[I.V]||{};Aa(b,function(c){il(c)&&delete b[c]})};var ll=function(a){if("prerender"==F.visibilityState)return!1;a();return!0},ml=function(a){if(!ll(a)){var b=!1,c=function(){!b&&ll(a)&&(b=!0,hc(F,"visibilitychange",c))};G(F,"visibilitychange",c)}};var nl=function(a,b,c){Bf(b,c,a)},ol=function(a,b,c){Bf(b,c,a,!0)},ql=function(a,b){var c=new hl(a,b);ml(function(){pl(a,c)});};
function pl(a,b){Af(a,function(c,d,e,g){b.mh(d,e,g)}),Gk=function(){yf().flush();1E3<=Dk()&&$b.sendBeacon&&Bf(I.Ye,{},a);b.flush();};}
var rl=function(a){var b=kf(a,"/2");return b?b:-1===navigator.userAgent.toLowerCase().indexOf("firefox")?R("https://","http://","www.googleadservices.com/pagead/conversion_async.js"):"https://www.google.com/pagead/conversion_async.js"},sl=!1,tl=[],ul=["aw","dc"],vl=function(a){var b=D.google_trackConversion,c=a.gtm_onFailure;"function"==typeof b?b(a)||c():c()},wl=function(){for(;0<tl.length;)vl(tl.shift())},xl=function(a){if(!sl){sl=!0;ye();var b=function(){wl();tl={push:vl}};Ld()?b():dc(a,b,function(){wl();
sl=!1})}},yl=function(a){if(a){for(var b=[],c=0;c<a.length;++c){var d=a[c];d&&b.push({item_id:d.id,quantity:d.quantity,value:d.price,start_date:d.start_date,end_date:d.end_date})}return b}},zl=!1;var Al=function(a,b,c,d){var e=Kc(a),g=b==I.w,h=e.h[0],k=e.h[1],l=void 0!==k,m=function(T){return d.getWithConfig(T)},n=!1!==m(I.ya),q=m(I.xa)||m(I.P),u=m(I.T),
p=m(I.U),t=rl(m(I.da));if(g){var v=m(I.la)||{};if(n){Eh(v[I.Ta],!!v[I.F])&&Rh(ul,q,void 0,u,p);var w={prefix:q,domain:u,Ka:p};Oh(w);Vh(["aw","dc"],w)}v[I.F]&&Th(ul,v[I.F],v[I.Va],!!v[I.Ua],q);var y=!1;y?Yd(e,d):Yd(e)}var x=!1===m(I.Hd)||!1===m(I.Ya);if(!g||!l&&!x)if(!0===m(I.Id)&&(l=!1),!1!==m(I.O)||l){var z={google_conversion_id:h,google_remarketing_only:!l,onload_callback:d.s,
gtm_onFailure:d.o,google_conversion_format:"3",google_conversion_color:"ffffff",google_conversion_domain:"",google_conversion_label:k,google_conversion_language:m(I.Aa),google_conversion_value:m(I.Z),google_conversion_currency:m(I.ca),google_conversion_order_id:m(I.Za),google_user_id:m(I.$a),google_conversion_page_url:m(I.Wa),google_conversion_referrer_url:m(I.Xa),google_gtm:di(),google_transport_url:kf(m(I.da),"/")};Ld()&&(z.opt_image_generator=function(){return new Image},z.google_enable_display_cookie_match=!1);!1===m(I.O)&&(z.google_allow_ad_personalization_signals=!1);z.google_read_gcl_cookie_opt_out=!n;n&&q&&(z.google_gcl_cookie_prefix=q);var B=function(){var T=m(I.Bb),ba={event:b};if(va(T)){P("GTM",26);for(var fa=0;fa<T.length;++fa){var N=T[fa],L=m(N);void 0!==L&&(ba[N]=L)}return ba}var Q=d.eventModel;if(!Q)return null;C(Q,ba);for(var S=0;S<I.zd.length;++S)delete ba[I.zd[S]];
return ba}();B&&(z.google_custom_params=B);!l&&m(I.Y)&&(z.google_gtag_event_data={items:m(I.Y),value:m(I.Z)});if(l&&b==I.ka){z.google_conversion_merchant_id=m(I.Md);z.google_basket_feed_country=m(I.Kd);z.google_basket_feed_language=m(I.Ld);z.google_basket_discount=m(I.Jd);z.google_basket_transaction_type=b;z.google_disable_merchant_reported_conversions=!0===m(I.Od);Ld()&&(z.google_disable_merchant_reported_conversions=!0);var A=yl(m(I.Y));A&&(z.google_conversion_items=A)}var E=function(T,ba){void 0!=
ba&&""!==ba&&(z.google_additional_conversion_params=z.google_additional_conversion_params||{},z.google_additional_conversion_params[T]=ba)};l&&("boolean"===typeof m(I.Ec)&&E("vdnc",m(I.Ec)),E("vdltv",m(I.Nd)));var J=!0;J&&tl.push(z)}xl(t)};
var Bl=function(a,b,c,d,e,g){var h={config:a,gtm:di()};c&&(bh(d,void 0,e,g),h.auiddc=Yg[Zg(d)]);b&&(h.loadInsecure=b);void 0===D.__dc_ns_processor&&(D.__dc_ns_processor=[]);D.__dc_ns_processor.push(h);dc((b?"http":"https")+"://www.googletagmanager.com/dclk/ns/v1.js")},Cl=function(a,b,c){var d=/^u([1-9]\d?|100)$/,e=a.getWithConfig(I.df)||{},g=Hd(b,c);var h={},k={};if(Qa(e))for(var l in e)if(e.hasOwnProperty(l)&&
d.test(l)){var m=e[l];f(m)&&(h[l]=m)}for(var n=0;n<g.length;n++){var q=g[n];d.test(q)&&(h[q]=q)}for(var u in h)h.hasOwnProperty(u)&&(k[u]=a.getWithConfig(h[u]));return k},Dl=function(a){function b(l,m,n){void 0!==n&&0!==(n+"").length&&d.push(l+m+":"+c(n+""))}var c=encodeURIComponent,d=[],e=a(I.Y)||[];if(va(e))for(var g=0;g<e.length;g++){var h=e[g],k=g+1;b("i",k,h.id);b("p",k,h.price);b("q",k,h.quantity);b("c",k,a(I.cf));b("l",k,a(I.Aa))}return d.join("|")},El=function(a){var b=/^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(a);
if(b){var c={standard:2,unique:3,per_session:4,transactions:5,items_sold:6,"":1}[(b[5]||"").toLowerCase()];if(c)return{containerId:"DC-"+b[1],L:b[3]?a:"",Nf:b[1],Mf:b[3]||"",eb:b[4]||"",S:c}}},Gl=function(a,b,c,d){var e=El(a);if(e){var g=function(M){return d.getWithConfig(M)},h=!1!==g(I.ya),k=g(I.xa)||g(I.P),l=g(I.T),m=g(I.U),n=g(I.ff),q=3===Md();if(b===I.w){var u=g(I.la)||{},p=g(I.Ra),t=void 0===p?!0:!!p;if(h){if(Eh(u[I.Ta],!!u[I.F])){Rh(Fl,k,void 0,l,
m);}var v={prefix:k,domain:l,Ka:m};Oh(v);Vh(Fl,v);$h(t,k,void 0,l,m)}if(u[I.F]){Th(Fl,u[I.F],u[I.Va],!!u[I.Ua],k);}if(n&&n.exclusion_parameters&&n.engines)if(Ld()){}else Bl(n,q,h,k,l,m);H(d.s)}else{var w={},y=g(I.ef);if(Qa(y))for(var x in y)if(y.hasOwnProperty(x)){var z=y[x];void 0!==z&&null!==
z&&(w[x]=z)}var B="";if(5===e.S||6===e.S)B=Dl(g);var A=Cl(d,e.containerId,e.L),E=!0===g(I.Ze);if(Ld()&&E){E=!1}var J={eb:e.eb,Rc:h,ng:l,og:m,Fa:k,Qb:g(I.Z),S:e.S,rg:w,Tc:e.Nf,Vc:e.Mf,o:d.o,s:d.s,ac:Oe(Qe(D.location.href)),jd:B,protocol:q?"http:":"https:",nd:g(I.wf),gc:E,sessionId:g(I.Eb),oc:void 0,transactionId:g(I.Za),qc:void 0,vd:A,Tf:!1!==g(I.O)};hi(J)}}else H(d.o)},Fl=["aw","dc"];
var Hl=/.*\.google\.com(:\d+)?\/booking\/flights.*/,Jl=function(a,b,c,d){var e=function(w){return d.getWithConfig(w)},g=Kc(a).h[0],h=!1!==e(I.ya),k=e(I.xa)||e(I.P),l=e(I.T),m=e(I.U);if(b===I.w){if(h){var n={prefix:k,domain:l,Ka:m};Oh(n);Vh(["aw","dc"],n)}H(d.s)}else{var q={conversion_id:g,onFailure:d.o,onSuccess:d.s,conversionLinkerEnabled:h,cookiePrefix:k},u=Hl.test(D.location.href);if(b!==I.ka)H(d.o);else{var t={partner_id:g,trip_type:e(I.Af),total_price:e(I.Z),currency:e(I.ca),is_direct_booking:u,flight_segment:Il(e(I.Y))},v=e(I.Sd);v&&"object"===typeof v&&(t.passengers_total=v.total,t.passengers_adult=v.adult,t.passengers_child=v.child,t.passengers_infant_in_seat=v.infant_in_seat,t.passengers_infant_in_lap=v.infant_in_lap);q.conversion_data=t;oi(q)}}},Il=function(a){if(a){for(var b=
[],c=0,d=0;d<a.length;++d){var e=a[d];!e||void 0!==e.category&&""!==e.category&&"FlightSegment"!==e.category||(b[c]={cabin:e.travel_class,fare_product:e.fare_product,booking_code:e.booking_code,flight_number:e.flight_number,origin:e.origin,destination:e.destination,departure_date:e.start_date},c++)}return b}};
var Ml=function(a,b,c,d){var e=Kc(a),g=!1!==d.getWithConfig(I.ya),h=d.getWithConfig(I.xa)||d.getWithConfig(I.P),k=d.getWithConfig(I.T),l=d.getWithConfig(I.U);if(b===I.w){var m=d.getWithConfig(I.la)||{};if(g){Eh(m[I.Ta],!!m[I.F])&&Rh(Kl,h,void 0,k,l);var n={prefix:h,domain:k,Ka:l};Oh(n);Vh(["aw","dc"],n)}if(m[I.F]){Th(Kl,m[I.F],m[I.Va],!!m[I.Ua],h);}H(d.s)}else if(b===I.ka){var q=d.getWithConfig(I.Za),u=d.getWithConfig(I.Z),
p=d.getWithConfig(I.ca),t=d.getWithConfig(I.Y),v={};if(f(q)||"number"===typeof q)v.Ig=String(q);f(p)&&(v.Lg=p);if(f(u)||"number"===typeof u)v.Ng=v.Hg=String(u);if(va(t)&&0!==t.length){var w=t[0];if(Qa(w)){if(f(w.id)||"number"===typeof w.id)v.Mg=String(w.id);f(w.start_date)&&(v.Jg=w.start_date);f(w.end_date)&&(v.Kg=w.end_date)}}var y=e.h[0],x=d.s,z=d.o;/^\d+$/.test(y)?gc(Ll(y,v,g,h),x,z):H(z)}else H(d.o)},Ll=function(a,b,c,d){var e=encodeURIComponent(a),g=encodeURIComponent(Nl(b)),h="https://www.googletraveladservices.com/travel/clk/pagead/conversion/"+
e+"/?data="+g;c&&(h+=Yh("ha",d).map(function(k){return"&gclha="+encodeURIComponent(k)}).join(""));return h},Nl=function(a){function b(d,e){void 0!==e&&c.push(d+"="+e)}var c=[];b("hct_base_price",a.Hg);b("hct_booking_xref",a.Ig);b("hct_checkin_date",a.Jg);b("hct_checkout_date",a.Kg);b("hct_currency_code",a.Lg);b("hct_partner_hotel_id",a.Mg);b("hct_total_price",a.Ng);return c.join(";")},Kl=["ha"];
var am=function(a,b,c,d){var e="https://www.google-analytics.com/analytics.js",g=Fe();if(ra(g)){var h="gtag_"+a.split("-").join("_"),k=function(x){var z=[].slice.call(arguments,0);z[0]=h+"."+z[0];g.apply(window,z)},l=function(){var x=function(E,J){for(var M=0;J&&M<J.length;M++)k(E,J[M])},z=Sl(b,d);if(z){var B=z.action;if("impressions"===B)x("ec:addImpression",z.Pg);else if("promo_click"===B||"promo_view"===B){var A=z.kd;x("ec:addPromo",z.kd);A&&0<A.length&&"promo_click"===B&&k("ec:setAction",B)}else x("ec:addProduct",
z.Ma),k("ec:setAction",B,z.cb)}},m=function(){if(Ld()){}else{var x=d.getWithConfig(I.tf);x&&(k("require",x,{dataLayer:"dataLayer"}),k("require","render"))}},n=Tl(a,h,b,d);Ul(h,n.Ga)&&(g(function(){De()&&De().remove(h)}),Vl[h]=!1);g("create",a,n.Ga);(function(){var x=d.getWithConfig("custom_map");g(function(){if(Qa(x)){var z=n.ia,B=De().getByName(h),A;for(A in x)if(x.hasOwnProperty(A)&&/^(dimension|metric)\d+$/.test(A)&&void 0!=x[A]){var E=B.get(Wl(x[A]));Xl(z,A,E)}}})})();(function(x){if(x){var z={};if(Qa(x))for(var B in Yl)Yl.hasOwnProperty(B)&&Zl(Yl[B],B,x[B],z);k("require","linkid",z)}})(n.linkAttribution);
var u=n[I.la];if(u&&u[I.F]){var p=u[I.Va];Ge(h+".",u[I.F],void 0===p?!!u.use_anchor:"fragment"===p,!!u[I.Ua])}var t=function(x,z,B){B&&(z=""+z);n.ia[x]=z};if(b===I.xc)m(),k("send","pageview",n.ia);else if(b===I.w){m();var v=!1;v?Yd(a,d):Yd(a);0!=n.sendPageView&&k("send","pageview",n.ia)}else"screen_view"===b?k("send","screenview",n.ia):"timing_complete"===b?(t("timingCategory",
n.eventCategory,!0),t("timingVar",n.name,!0),t("timingValue",Ca(n.value)),void 0!==n.eventLabel&&t("timingLabel",n.eventLabel,!0),k("send","timing",n.ia)):"exception"===b?k("send","exception",n.ia):"optimize.callback"!==b&&(0<=r([I.Gd,"select_content",I.wc,I.sc,I.uc,I.yb,"set_checkout_option",I.ka,I.vc,"view_promotion","checkout_progress"],b)&&(k("require","ec","ec.js"),l()),t("eventCategory",n.eventCategory,!0),t("eventAction",n.eventAction||b,!0),void 0!==n.eventLabel&&t("eventLabel",n.eventLabel,
!0),void 0!==n.value&&t("eventValue",Ca(n.value)),k("send","event",n.ia));if(!$l){$l=!0;ye();var w=d.o,y=function(){De().loaded||w()};Ld()?H(y):dc(e,y,w)}}else H(d.o)},$l,Vl={},bm={client_id:1,client_storage:"storage",cookie_name:1,cookie_domain:1,cookie_expires:1,cookie_path:1,cookie_update:1,sample_rate:1,site_speed_sample_rate:1,use_amp_client_id:1,store_gac:1,conversion_linker:"storeGac"},cm={anonymize_ip:1,app_id:1,app_installer_id:1,app_name:1,app_version:1,campaign:{name:"campaignName",source:"campaignSource",
medium:"campaignMedium",term:"campaignTerm",content:"campaignContent",id:"campaignId"},currency:"currencyCode",description:"exDescription",fatal:"exFatal",language:1,non_interaction:1,page_hostname:"hostname",page_referrer:"referrer",page_path:"page",page_location:"location",page_title:"title",screen_name:1,transport_type:"transport",user_id:1},dm={content_id:1,event_category:1,event_action:1,event_label:1,link_attribution:1,linker:1,method:1,name:1,send_page_view:1,value:1},Yl={cookie_name:1,cookie_expires:"duration",
levels:1},em={anonymize_ip:1,fatal:1,non_interaction:1,use_amp_client_id:1,send_page_view:1,store_gac:1,conversion_linker:1},Zl=function(a,b,c,d){if(void 0!==c)if(em[b]&&(c=Da(c)),"anonymize_ip"!==b||c||(c=void 0),1===a)d[Wl(b)]=c;else if(f(a))d[a]=c;else for(var e in a)a.hasOwnProperty(e)&&void 0!==c[e]&&(d[a[e]]=c[e])},Wl=function(a){return a&&f(a)?a.replace(/(_[a-z])/g,function(b){return b[1].toUpperCase()}):a},fm=function(a){var b="general";0<=r([I.We,I.sc,I.Xe,I.yb,"checkout_progress",I.ka,I.vc,
I.uc,"set_checkout_option"],a)?b="ecommerce":0<=r("generate_lead login search select_content share sign_up view_item view_item_list view_promotion view_search_results".split(" "),a)?b="engagement":"exception"===a&&(b="error");return b},Xl=function(a,b,c){a.hasOwnProperty(b)||(a[b]=c)},gm=function(a){if(va(a)){for(var b=[],c=0;c<a.length;c++){var d=a[c];if(void 0!=d){var e=d.id,g=d.variant;void 0!=e&&void 0!=g&&b.push(String(e)+"."+String(g))}}return 0<b.length?b.join("!"):void 0}},Tl=function(a,b,
c,d){var e=function(B){return d.getWithConfig(B)},g={},h={},k={},l=gm(e(I.pf));l&&Xl(h,"exp",l);var m=e("custom_map");if(Qa(m))for(var n in m)if(m.hasOwnProperty(n)&&/^(dimension|metric)\d+$/.test(n)&&void 0!=m[n]){var q=e(String(m[n]));void 0!==q&&Xl(h,n,q)}var u=Hd(a);for(var p=0;p<u.length;++p){var t=u[p],v=e(t);dm.hasOwnProperty(t)?Zl(dm[t],t,v,g):cm.hasOwnProperty(t)?
Zl(cm[t],t,v,h):bm.hasOwnProperty(t)?Zl(bm[t],t,v,k):/^(dimension|metric|content_group)\d+$/.test(t)?Zl(1,t,v,h):t===I.P&&0>r(u,I.Ab)&&(k.cookieName=v+"_ga")}Xl(k,"cookieDomain","auto");Xl(h,"forceSSL",!0);Xl(g,"eventCategory",fm(c));0<=r(["view_item","view_item_list","view_promotion","view_search_results"],c)&&Xl(h,"nonInteraction",!0);"login"===c||"sign_up"===c||"share"===c?Xl(g,"eventLabel",e(I.sf)):"search"===c||"view_search_results"===c?Xl(g,"eventLabel",e(I.yf)):"select_content"===c&&Xl(g,"eventLabel",
e(I.bf));var w=g[I.la]||{},y=w[I.Ta];y||0!=y&&w[I.F]?k.allowLinker=!0:!1===y&&Xl(k,"useAmpClientId",!1);if(!1===e(I.$e)||!1===e(I.O))h.allowAdFeatures=!1;!1===e(I.O)&&P("GTM",27);k.name=b;h["&gtm"]=di(!0);h.hitCallback=d.s;var x=e(I.rf)||Cd("gtag.remote_config."+a+".url",2),z=e(I.qf)||Cd("gtag.remote_config."+a+".dualId",2);x&&null!=ac&&(k._x_19=x);z&&(k._x_20=z);g.ia=h;g.Ga=k;return g},Sl=function(a,b){function c(v){var w=C(v);w.list=v.list_name;w.listPosition=v.list_position;w.position=v.list_position||
v.creative_slot;w.creative=v.creative_name;return w}function d(v){for(var w=[],y=0;v&&y<v.length;y++)v[y]&&w.push(c(v[y]));return w.length?w:void 0}function e(v){return{id:g(I.Za),affiliation:g(I.hf),revenue:g(I.Z),tax:g(I.nf),shipping:g(I.lf),coupon:g(I.jf),list:g(I.yc)||v}}for(var g=function(v){return b.getWithConfig(v)},h=g(I.Y),k,l=0;h&&l<h.length&&!(k=h[l][I.yc]);l++);var m=g("custom_map");if(Qa(m))for(var n=0;h&&n<h.length;++n){var q=h[n],u;for(u in m)m.hasOwnProperty(u)&&/^(dimension|metric)\d+$/.test(u)&&
void 0!=m[u]&&Xl(q,u,q[m[u]])}var p=null,t=g(I.kf);a===I.ka||a===I.vc?p={action:a,cb:e(),Ma:d(h)}:a===I.sc?p={action:"add",Ma:d(h)}:a===I.uc?p={action:"remove",Ma:d(h)}:a===I.wc?p={action:"detail",cb:e(k),Ma:d(h)}:a===I.Gd?p={action:"impressions",Pg:d(h)}:"view_promotion"===a?p={action:"promo_view",kd:d(t)}:"select_content"===a&&t&&0<t.length?p={action:"promo_click",kd:d(t)}:"select_content"===a?p={action:"click",cb:{list:g(I.yc)||k},Ma:d(h)}:a===I.yb||"checkout_progress"===a?p={action:"checkout",
Ma:d(h),cb:{step:a===I.yb?1:g(I.Qd),option:g(I.Pd)}}:"set_checkout_option"===a&&(p={action:"checkout_option",cb:{step:g(I.Qd),option:g(I.Pd)}});p&&(p.bi=g(I.ca));return p},hm={},Ul=function(a,b){var c=hm[a];hm[a]=C(b);if(!c)return!1;for(var d in b)if(b.hasOwnProperty(d)&&b[d]!==c[d])return!0;for(var e in c)if(c.hasOwnProperty(e)&&c[e]!==b[e])return!0;return!1};var Z={a:{}};

Z.a.ehl=["google"],function(){function a(m){return m.target&&m.target.location&&m.target.location.href?m.target.location.href:Pi()}function b(m,n){G(m,"hashchange",function(q){var u=a(q);n({source:"hashchange",state:null,url:Ri(u),J:Qi(u)})})}function c(m,n){G(m,"popstate",function(q){var u=a(q);n({source:"popstate",state:q.state,url:Ri(u),J:Qi(u)})})}function d(m,n,q){var u=n.history,p=u[m];if(ra(p))try{u[m]=function(t,v,w){p.apply(u,[].slice.call(arguments,0));q({source:m,state:t,url:Ri(Pi()),J:Qi(Pi())})}}catch(t){}}
function e(){var m={source:null,state:X("history").state||null,url:Ri(Pi()),J:Qi(Pi())};return function(n,q){var u=m,p={};p[u.source]=!0;p[n.source]=!0;if(!p.popstate||!p.hashchange||u.J!=n.J){var t={event:"gtm.historyChange-v2","gtm.historyChangeSource":n.source,"gtm.oldUrlFragment":m.J,"gtm.newUrlFragment":n.J,"gtm.oldHistoryState":m.state,"gtm.newHistoryState":n.state,"gtm.triggers":q.join(",")};t["gtm.oldUrl"]=m.url,t["gtm.newUrl"]=n.url;
m=n;Si(t)}}}function g(m,n){var q=""+n;if(h[q])h[q].push(m);else{var u=[m];h[q]=u;var p=e(),t=-1;k.push(function(v){0<=t&&Ni(t);n?t=Oi(function(){p(v,u);t=-1},n):p(v,u)})}}var h={},k=[],l=function(m){var n=X("self"),q=m.vtp_uniqueTriggerId||"0",u=m.vtp_groupEvents?Number(m.vtp_groupEventsInterval):0;if(Wi("ehl")){var p=Rg("ehl","reg");p?(p(q,u),H(m.vtp_gtmOnSuccess)):H(m.vtp_gtmOnFailure)}else{var t=function(v){for(var w=0;w<k.length;w++)k[w](v)};
b(n,t);c(n,t);d("pushState",n,t);d("replaceState",n,t);g(q,u);Pg("ehl","reg",g);Xi("ehl");H(m.vtp_gtmOnSuccess)}};Z.__ehl=l;Z.__ehl.b="ehl";Z.__ehl.g=!0;Z.__ehl.priorityOverride=0}();
Z.a.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(x){for(var z=[],B=x.split(","),A=0;A<B.length;A++){var E=Number(B[A]);if(isNaN(E))return[];n.test(B[A])||z.push(E)}return z}function c(){var x=0,z=0;return function(){var B=Ci(),A=B.height;x=Math.max(v.scrollLeft+B.width,x);z=Math.max(v.scrollTop+A,z);return{sg:x,ug:z}}}function d(){p=X("self");
t=p.document;v=t.scrollingElement||t.body&&t.body.parentNode;y=c()}function e(x,z,B,A){var E=l(z),J={},M;for(M in E){J.wa=M;if(E.hasOwnProperty(J.wa)){var U=Number(J.wa);x<U||(Si({event:"gtm.scrollDepth","gtm.scrollThreshold":U,"gtm.scrollUnits":B.toLowerCase(),"gtm.scrollDirection":A,"gtm.triggers":E[J.wa].join(",")}),Qg("sdl",z,function(ea){return function(T){delete T[ea.wa];return T}}(J),{}))}J={wa:J.wa}}}function g(){var x=y(),z=x.sg,B=x.ug,A=z/v.scrollWidth*100,E=B/v.scrollHeight*100;e(z,"horiz.pix",
q.Ib,u.Zd);e(A,"horiz.pct",q.Hb,u.Zd);e(B,"vert.pix",q.Ib,u.ee);e(E,"vert.pct",q.Hb,u.ee);Pg("sdl","pending",!1)}function h(){var x=250,z=!1;t.scrollingElement&&t.documentElement&&p.addEventListener&&(x=50,z=!0);var B=0,A=!1,E=function(){A?B=Oi(E,x):(B=0,g(),Wi("sdl")&&!a()&&(hc(p,"scroll",J),hc(p,"resize",J),Pg("sdl","init",!1)));A=!1},J=function(){z&&y();B?A=!0:(B=Oi(E,x),Pg("sdl","pending",!0))};return J}function k(x,z,B){if(z){var A=b(String(x));Qg("sdl",B,function(E){for(var J=0;J<A.length;J++){var M=
String(A[J]);E.hasOwnProperty(M)||(E[M]=[]);E[M].push(z)}return E},{})}}function l(x){return Rg("sdl",x,{})}function m(x){H(x.vtp_gtmOnSuccess);var z=x.vtp_uniqueTriggerId,B=x.vtp_horizontalThresholdsPixels,A=x.vtp_horizontalThresholdsPercent,E=x.vtp_verticalThresholdUnits,J=x.vtp_verticalThresholdsPixels,M=x.vtp_verticalThresholdsPercent;switch(x.vtp_horizontalThresholdUnits){case q.Ib:k(B,z,"horiz.pix");break;case q.Hb:k(A,z,"horiz.pct")}switch(E){case q.Ib:k(J,z,"vert.pix");break;case q.Hb:k(M,
z,"vert.pct")}Wi("sdl")?Rg("sdl","pending")||(w||(d(),w=!0),H(function(){return g()})):(d(),w=!0,v&&(Xi("sdl"),Pg("sdl","pending",!0),H(function(){g();if(a()){var U=h();G(p,"scroll",U);G(p,"resize",U)}else Pg("sdl","init",!1)})))}var n=/^\s*$/,q={Hb:"PERCENT",Ib:"PIXELS"},u={ee:"vertical",Zd:"horizontal"},p,t,v,w=!1,y;(function(x){Z.__sdl=x;Z.__sdl.b="sdl";Z.__sdl.g=!0;Z.__sdl.priorityOverride=0})(function(x){x.vtp_triggerStartOption?m(x):zg(function(){m(x)})})}();


Z.a.gtagha=["google"],function(){var a=!1;var b=function(c){var d=c.vtp_conversionId,e=Vc,g=W("eventModel");if(a){Af(d.id,Ml);if(e===I.w){var h=W("gtag.targets."+d.id);Cf(h,d.id)}else Bf(e,g,d.id);H(c.vtp_gtmOnSuccess)}else{var k=tf(sf(nf(g),c.vtp_gtmOnSuccess),c.vtp_gtmOnFailure);k.getWithConfig=function(l){return Ed(l,d.containerId,d.id)};Ml(d.id,e,(new Date).getTime(),
k)}};Z.__gtagha=b;Z.__gtagha.b="gtagha";Z.__gtagha.g=!0;Z.__gtagha.priorityOverride=0;}();
Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.b="c";Z.__c.g=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();
Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(Kd(a.vtp_gtmEventId,"event"))})}();

Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:W("gtm.url",1))||Pi();var d=b[a("vtp_component")];if(!d||"URL"==d)return Ri(String(c));var e=Qe(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?va(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var q=Pe(e,"QUERY",void 0,void 0,m[n]);if(void 0!=q&&(!l||""!==q)){g=q;break a}}g=void 0}else g=Pe(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=W(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();



Z.a.ytl=["google"],function(){function a(){var w=Math.round(1E9*Math.random())+"";return F.getElementById(w)?a():w}function b(w,y){if(!w)return!1;for(var x=0;x<u.length;x++)if(0<=w.indexOf("//"+u[x]+"/"+y))return!0;return!1}function c(w){var y=-1!==w.indexOf("?")?"&":"?";if(-1<w.indexOf("origin="))return w+y+"enablejsapi=1";if(!t){var x=X("document");t=x.location.protocol+"//"+x.location.hostname;x.location.port&&(t+=":"+x.location.port)}return w+y+"enablejsapi=1&origin="+encodeURIComponent(t)}function d(w,
y){var x=w.getAttribute("src");if(b(x,"embed/")){if(0<x.indexOf("enablejsapi=1"))return!0;if(y)return w.setAttribute("src",c(x)),!0}return!1}function e(w,y){if(!w.getAttribute("data-gtm-yt-inspected-"+y.ud)&&(w.setAttribute("data-gtm-yt-inspected-"+y.ud,"true"),d(w,y.qe))){w.id||(w.id=a());var x=X("YT"),z=x.get(w.id);z||(z=new x.Player(w.id));var B=h(z,y),A={},E;for(E in B)A.Qa=E,B.hasOwnProperty(A.Qa)&&z.addEventListener(A.Qa,function(J){return function(M){return B[J.Qa](M.data)}}(A)),A={Qa:A.Qa}}}
function g(w){H(function(){function y(){for(var z=x.getElementsByTagName("iframe"),B=z.length,A=0;A<B;A++)e(z[A],w)}var x=X("document");y();ri(y)})}function h(w,y){var x,z;function B(){fa=Mi(function(){return{url:Q,title:S,me:L,qg:w.getCurrentTime(),playbackRate:oa}},y.ud,w.getIframe());L=0;S=Q="";oa=1;return A}function A(O){switch(O){case p.PLAYING:L=Math.round(w.getDuration());Q=w.getVideoUrl();if(w.getVideoData){var K=w.getVideoData();S=K?K.title:""}oa=w.getPlaybackRate();y.jg?fa.Ub("start"):fa.Mc();
N=m(y.oh,y.nh,w.getDuration());return E(O);default:return A}}function E(){ka=w.getCurrentTime();ta=(new Date).getTime();fa.xh();ba();return J}function J(O){var K;switch(O){case p.ENDED:return U(O);case p.PAUSED:K="pause";case p.BUFFERING:var sa=w.getCurrentTime()-ka;K=1<Math.abs(((new Date).getTime()-ta)/1E3*oa-sa)?"seek":K||"buffering";w.getCurrentTime()&&(y.ig?fa.Ub(K):fa.Mc());T();return M;case p.UNSTARTED:return B(O);default:return J}}function M(O){switch(O){case p.ENDED:return U(O);case p.PLAYING:return E(O);
case p.UNSTARTED:return B(O);default:return M}}function U(){for(;z;){var O=x;Ni(z);O()}y.hg&&fa.Ub("complete",1);return B(p.UNSTARTED)}function ea(){}function T(){z&&(Ni(z),z=0,x=ea)}function ba(){if(N.length&&0!==oa){var O=-1,K;do{K=N[0];if(K.ra>w.getDuration())return;O=(K.ra-w.getCurrentTime())/oa;if(0>O&&(N.shift(),0===N.length))return}while(0>O);x=function(){z=0;x=ea;0<N.length&&N[0].ra===K.ra&&(N.shift(),fa.Ub("progress",K.Fe,K.Me));ba()};z=Oi(x,1E3*O)}}var fa,N=[],L,Q,S,oa,ka,ta,ab=B(p.UNSTARTED);
z=0;x=ea;return{onStateChange:function(O){ab=ab(O)},onPlaybackRateChange:function(O){ka=w.getCurrentTime();ta=(new Date).getTime();fa.Mc();oa=O;T();ba()}}}function k(w){for(var y=w.split(","),x=y.length,z=[],B=0;B<x;B++){var A=parseInt(y[B],10);isNaN(A)||100<A||0>A||z.push(A/100)}z.sort(function(E,J){return E-J});return z}function l(w){for(var y=w.split(","),x=y.length,z=[],B=0;B<x;B++){var A=parseInt(y[B],10);isNaN(A)||0>A||z.push(A)}z.sort(function(E,J){return E-J});return z}function m(w,y,x){var z=
w.map(function(E){return{ra:E,Me:E,Fe:void 0}});if(!y.length)return z;var B=y.map(function(E){return{ra:E*x,Me:void 0,Fe:E}});if(!z.length)return B;var A=z.concat(B);A.sort(function(E,J){return E.ra-J.ra});return A}function n(w){w.vtp_triggerStartOption?q(w):pe(function(){q(w)})}function q(w){var y=!!w.vtp_captureStart,x=!!w.vtp_captureComplete,z=!!w.vtp_capturePause,B=k(w.vtp_progressThresholdsPercent+""),A=l(w.vtp_progressThresholdsTimeInSeconds+""),E=!!w.vtp_fixMissingApi;if(y||x||z||B.length||
A.length){var J={jg:y,hg:x,ig:z,nh:B,oh:A,qe:E,ud:void 0===w.vtp_uniqueTriggerId?"":w.vtp_uniqueTriggerId},M=X("YT"),U=function(){g(J)};H(w.vtp_gtmOnSuccess);if(M)M.ready&&M.ready(U);else{var ea=X("onYouTubeIframeAPIReady");Ti("onYouTubeIframeAPIReady",function(){ea&&ea();U()});H(function(){for(var T=X("document"),ba=T.getElementsByTagName("script"),fa=ba.length,N=0;N<fa;N++){var L=ba[N].getAttribute("src");if(b(L,"iframe_api")||b(L,"player_api"))return}for(var Q=T.getElementsByTagName("iframe"),
S=Q.length,oa=0;oa<S;oa++)if(!v&&d(Q[oa],J.qe)){V("https://www.youtube.com/iframe_api");v=!0;break}})}}else H(w.vtp_gtmOnSuccess)}var u=["www.youtube.com","www.youtube-nocookie.com"],p={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},t,v=!1;Z.__ytl=n;Z.__ytl.b="ytl";Z.__ytl.g=!0;Z.__ytl.priorityOverride=0}();




Z.a.aev=["google"],function(){function a(p,t){var v=Kd(p,"gtm");if(v)return v[t]}function b(p,t,v,w){w||(w="element");var y=p+"."+t,x;if(n.hasOwnProperty(y))x=n[y];else{var z=a(p,w);if(z&&(x=v(z),n[y]=x,q.push(y),35<q.length)){var B=q.shift();delete n[B]}}return x}function c(p,t,v){var w=a(p,u[t]);return void 0!==w?w:v}function d(p,t){if(!p)return!1;var v=e(Pi());va(t)||(t=String(t||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<t.length;y++)if(t[y]instanceof RegExp){if(t[y].test(p))return!1}else{var x=
t[y];if(0!=x.length){if(0<=e(p).indexOf(x))return!1;w.push(e(x))}}return!Fj(p,w)}function e(p){m.test(p)||(p="http://"+p);return Pe(Qe(p),"HOST",!0)}function g(p,t,v){switch(p){case "SUBMIT_TEXT":return b(t,"FORM."+p,h,"formSubmitElement")||v;case "LENGTH":var w=b(t,"FORM."+p,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(t,"id",v);case "INTERACTED_FIELD_NAME":return l(t,"name",v);case "INTERACTED_FIELD_TYPE":return l(t,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(t,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(t,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function h(p){switch(p.tagName.toLowerCase()){case "input":return ic(p,"value");case "button":return jc(p);default:return null}}function k(p){if("form"===p.tagName.toLowerCase()&&p.elements){for(var t=0,v=0;v<p.elements.length;v++)ki(p.elements[v])&&t++;return t}}function l(p,t,v){var w=a(p,"interactedFormField");return w&&ic(w,t)||v}var m=/^https?:\/\//i,n={},q=[],u={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(p){Z.__aev=p;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(p){var t=p.vtp_gtmEventId,v=p.vtp_defaultValue,w=p.vtp_varType;switch(w){case "TAG_NAME":var y=a(t,"element");return y&&y.tagName||
v;case "TEXT":return b(t,w,jc)||v;case "URL":var x;a:{var z=String(a(t,"elementUrl")||v||""),B=Qe(z),A=String(p.vtp_component||"URL");switch(A){case "URL":x=z;break a;case "IS_OUTBOUND":x=d(z,p.vtp_affiliatedDomains);break a;default:x=Pe(B,A,p.vtp_stripWww,p.vtp_defaultPages,p.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===p.vtp_attribute)E=c(t,w,v);else{var J=p.vtp_attribute,M=a(t,"element");E=M&&ic(M,J)||v||""}return E;case "MD":var U=p.vtp_mdValue,ea=b(t,"MD",yi);return U&&ea?Bi(ea,
U)||v:ea||v;case "FORM":return g(String(p.vtp_component||"SUBMIT_TEXT"),t,v);default:return c(t,w,v)}})}();

Z.a.dlm=["google"],function(){(function(a){Z.__dlm=a;Z.__dlm.b="dlm";Z.__dlm.g=!0;Z.__dlm.priorityOverride=0})(function(a){var b=Gj(a.vtp_userInput||[],"key","value")||{};a.vtp_synchronousWrite?Aa(b,function(c,d){Id(c,d)}):Si(b);H(a.vtp_gtmOnSuccess)})}();
Z.a.gct=["google"],function(){(function(a){Z.__gct=a;Z.__gct.b="gct";Z.__gct.g=!0;Z.__gct.priorityOverride=0})(function(a){var b={};0<a.vtp_sessionDuration&&(b[I.Ca]=a.vtp_sessionDuration);b[I.Ac]=a.vtp_eventSettings;b[I.Db]=1===a.vtp_googleSignals;b[I.Cc]=a.vtp_foreignTld;b[I.Cb]=1===a.vtp_restrictDomain;ql(a.vtp_trackingId,b);H(a.vtp_gtmOnSuccess)})}();
Z.a.gtagaw=["google"],function(){var a=!1;a=!0;var b=function(c){var d=c.vtp_conversionId,e=void 0!==d.h[1]?d.id:void 0,g=Vc,h=W("eventModel");if(a){Af(c.vtp_conversionId.id,Al);if(g===I.w){var k=W("gtag.targets."+d.id);Cf(k,c.vtp_conversionId.id)}else Bf(g,h,d.id);H(c.vtp_gtmOnSuccess)}else{var l=tf(sf(nf(h),c.vtp_gtmOnSuccess),c.vtp_gtmOnFailure);l.getWithConfig=function(m){return Ed(m,
d.containerId,e)};Al(c.vtp_conversionId.id,g,(new Date).getTime(),l)}};Z.__gtagaw=b;Z.__gtagaw.b="gtagaw";Z.__gtagaw.g=!0;Z.__gtagaw.priorityOverride=0;}();


Z.a.get=["google"],function(){(function(a){Z.__get=a;Z.__get.b="get";Z.__get.g=!0;Z.__get.priorityOverride=0})(function(a){if(a.vtp_isAutoTag){var b=String(a.vtp_trackingId),c=Vc||"",d={};if(c===I.w){var e=W("gtag.targets."+b);C(e,d);d[I.ma]=!0;Cf(d,b)}else{var g=W("eventModel");C(g,d);d[I.ma]=!0;Bf(c,d,b)}}else{var h=a.vtp_settings,k=h.eventParameters,l=h.userProperties;C(Gj(a.vtp_eventParameters,"name","value"),k);C(Gj(a.vtp_userProperties,"name","value"),l);k[I.V]=l;var m=String(a.vtp_eventName),
n=a.vtp_allowSystemNames;if(!n&&il(m))return;n||jl(k);(a.vtp_deferrable?ol:nl)(String(h.streamId),m,k)}a.vtp_gtmOnSuccess()})}();

Z.a.gtagfl=[],function(){function a(d){var e=/^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(d);if(e)return{containerId:"DC-"+e[1],L:e[3]&&d}}var b=!1;var c=function(d){var e=d.vtp_targetId,g=Vc,h=W("eventModel");if(b){Af(e,Gl);if(g===I.w){var k=W("gtag.targets."+e);Cf(k,e)}else Bf(g,h,e);H(d.vtp_gtmOnSuccess)}else{var l=a(e);if(l){var m=tf(sf(nf(h),d.vtp_gtmOnSuccess),
d.vtp_gtmOnFailure);m.getWithConfig=function(n){return Ed(n,l.containerId,l.L)};Gl(e,g,(new Date).getTime(),m)}else H(d.vtp_gtmOnFailure)}};Z.__gtagfl=c;Z.__gtagfl.b="gtagfl";Z.__gtagfl.g=!0;Z.__gtagfl.priorityOverride=0;}();


Z.a.gtaggf=["google"],function(){var a=!1;var b=function(c){var d=c.vtp_conversionId,e=Vc,g=W("eventModel");if(a){Af(d.id,Jl);if(e===I.w){var h=W("gtag.targets."+d.id);Cf(h,d.id)}else Bf(e,g,d.id);H(c.vtp_gtmOnSuccess)}else{var k=tf(sf(nf(g),c.vtp_gtmOnSuccess),c.vtp_gtmOnFailure);k.getWithConfig=function(l){return Ed(l,d.containerId,d.id)};Jl(d.id,e,
(new Date).getTime(),k)}};Z.__gtaggf=b;Z.__gtaggf.b="gtaggf";Z.__gtaggf.g=!0;Z.__gtaggf.priorityOverride=0;}();




Z.a.gtagua=["google"],function(){var a=!1;var b=function(c){var d=c.vtp_trackingId,e=Vc,g=W("eventModel");if(a){Af(d,am);if(e===I.w){var h=W("gtag.targets."+d);Cf(h,d)}else Bf(e,g,d);H(c.vtp_gtmOnSuccess)}else{var k=tf(sf(nf(g),c.vtp_gtmOnSuccess),c.vtp_gtmOnFailure);k.getWithConfig=function(l){return Ed(l,d,void 0)};am(d,e,(new Date).getTime(),k)}};Z.__gtagua=
b;Z.__gtagua.b="gtagua";Z.__gtagua.g=!0;Z.__gtagua.priorityOverride=0;}();
Z.a.lcl=[],function(){function a(){var e=X("document"),g=0,h=function(k){var l=k.target;if(l&&3!==k.which&&!(k.Tg||k.timeStamp&&k.timeStamp===g)){g=k.timeStamp;l=lc(l,["a","area"],100);if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=Rg("lcl",m?"nv.mwt":"mwt",0),q;q=m?Rg("lcl","nv.ids",[]):Rg("lcl","ids",[]);if(q.length){var u=Ng(l,"gtm.linkClick",q);if(b(k,l,e)&&!m&&n&&l.href){var p=String(Zi(l,"rel")||""),t=!!wa(p.split(" "),function(y){return"noreferrer"===y.toLowerCase()});
t&&P("GTM",36);var v=X((Zi(l,"target")||"_self").substring(1)),w=!0;if(Si(u,Dg(function(){var y;if(y=w&&v){var x;a:if(t&&d){var z;try{z=new MouseEvent(k.type)}catch(B){if(!e.createEvent){x=!1;break a}z=e.createEvent("MouseEvents");z.initEvent(k.type,!0,!0)}z.Tg=!0;k.target.dispatchEvent(z);x=!0}else x=!1;y=!x}y&&(v.location.href=Zi(l,"href"))}),n))w=!1;else return k.preventDefault&&k.preventDefault(),k.returnValue=!1}else Si(u,function(){},n||2E3);return!0}}};G(e,"click",h,!1);G(e,"auxclick",h,!1)}
function b(e,g,h){if(2===e.which||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey)return!1;var k=Zi(g,"href"),l=k.indexOf("#"),m=Zi(g,"target");if(m&&"_self"!==m&&"_parent"!==m&&"_top"!==m||0===l)return!1;if(0<l){var n=Ri(k),q=Ri(h.location);return n!==q}return!0}function c(e){var g=void 0===e.vtp_waitForTags?!0:e.vtp_waitForTags,h=void 0===e.vtp_checkValidation?!0:e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(g){var m=function(q){return Math.max(k,
q)};Qg("lcl","mwt",m,0);h||Qg("lcl","nv.mwt",m,0)}var n=function(q){q.push(l);return q};Qg("lcl","ids",n,[]);h||Qg("lcl","nv.ids",n,[]);Wi("lcl")||(a(),Xi("lcl"));H(e.vtp_gtmOnSuccess)}var d=!1;Z.__lcl=c;Z.__lcl.b="lcl";Z.__lcl.g=!0;Z.__lcl.priorityOverride=0;}();


var im={};im.macro=function(a){if(Kg.Lc.hasOwnProperty(a))return Kg.Lc[a]},im.onHtmlSuccess=Kg.ke(!0),im.onHtmlFailure=Kg.ke(!1);im.dataLayer=Dd;im.callback=function(a){Xc.hasOwnProperty(a)&&ra(Xc[a])&&Xc[a]();delete Xc[a]};function jm(){Oc[Nc.m]=im;Ja(Yc,Z.a);yb=yb||Kg;zb=ge}
function km(){Fh.gtm_3pds=!0;Oc=D.google_tag_manager=D.google_tag_manager||{};if(Oc[Nc.m]){var a=Oc.zones;a&&a.unregisterChild(Nc.m)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)qb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)ub.push(e[g]);for(var h=b.predicates||[],k=0;k<
h.length;k++)sb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},u=0;u<n.length;u++)q[n[u][0]]=Array.prototype.slice.call(n[u],1);rb.push(q)}wb=Z;xb=zj;jm();Jg();ke=!1;le=0;if("interactive"==F.readyState&&!F.createEventObject||"complete"==F.readyState)ne();else{G(F,"DOMContentLoaded",ne);G(F,"readystatechange",ne);if(F.createEventObject&&F.documentElement.doScroll){var p=!0;try{p=!D.frameElement}catch(y){}p&&oe()}G(D,"load",ne)}wg=!1;"complete"===F.readyState?yg():G(D,"load",
yg);a:{if(!sd)break a;D.setInterval(td,864E5);}
Uc=(new Date).getTime();
im.bootstrap=Uc;}}km();

})()
