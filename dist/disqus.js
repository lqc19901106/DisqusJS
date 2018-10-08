"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*! baiduTemplate | Verison 1.0.6 | BSD License */!function(o){var e="undefined"==typeof module?o.baidu=o.baidu||{}:module.exports;e.template=function(s,e){var t=function(){if(!o.document)return r._compile(s);var e=document.getElementById(s);if(e){if(r.cache[s])return r.cache[s];var t=/^(textarea|input)$/i.test(e.nodeName)?e.value:e.innerHTML;return r._compile(t)}return r._compile(s)}(),n=r._isObject(e)?t(e):t;return t=null,n};var r=e.template;r.versions=r.versions||[],r.versions.push("1.0.6"),r.cache={},r.LEFT_DELIMITER=r.LEFT_DELIMITER||"<%",r.RIGHT_DELIMITER=r.RIGHT_DELIMITER||"%>",r.ESCAPE=!0,r._encodeHTML=function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\\/g,"&#92;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")},r._encodeReg=function(e){return String(e).replace(/([.*+?^=!:${}()|[\]/\\])/g,"\\$1")},r._encodeEventHTML=function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/\\\\/g,"\\").replace(/\\\//g,"/").replace(/\\n/g,"\n").replace(/\\r/g,"\r")},r._compile=function(e){var t="var _template_fun_array=[];\nvar fn=(function(__data__){\nvar _template_varName='';\nfor(name in __data__){\n_template_varName+=('var '+name+'=__data__[\"'+name+'\"];');\n};\neval(_template_varName);\n_template_fun_array.push('"+r._analysisStr(e)+"');\n_template_varName=null;\n})(_template_object);\nfn = null;\nreturn _template_fun_array.join('');\n";return new Function("_template_object",t)},r._isObject=function(e){return"function"==typeof e||!(!e||"object"!==_typeof(e))},r._analysisStr=function(e){var t=r.LEFT_DELIMITER,s=r.RIGHT_DELIMITER,n=r._encodeReg(t),o=r._encodeReg(s);return e=(e=String(e).replace(new RegExp("("+n+"[^"+o+"]*)//.*\n","g"),"$1").replace(new RegExp("\x3c!--.*?--\x3e","g"),"").replace(new RegExp(n+"\\*.*?\\*"+o,"g"),"").replace(new RegExp("[\\r\\t\\n]","g"),"").replace(new RegExp(n+"(?:(?!"+o+")[\\s\\S])*"+o+"|((?:(?!"+n+")[\\s\\S])+)","g"),function(e,t){var s="";if(t)for(s=t.replace(/\\/g,"&#92;").replace(/'/g,"&#39;");/<[^<]*?&#39;[^<]*?>/g.test(s);)s=s.replace(/(<[^<]*?)&#39;([^<]*?>)/g,"$1\r$2");else s=e;return s})).replace(new RegExp("("+n+"[\\s]*?var[\\s]*?.*?[\\s]*?[^;])[\\s]*?"+o,"g"),"$1;"+s).replace(new RegExp("("+n+":?[hvu]?[\\s]*?=[\\s]*?[^;|"+o+"]*?);[\\s]*?"+o,"g"),"$1"+s).split(t).join("\t"),e=(e=r.ESCAPE?e.replace(new RegExp("\\t=(.*?)"+o,"g"),"',typeof($1) === 'undefined'?'':baidu.template._encodeHTML($1),'"):e.replace(new RegExp("\\t=(.*?)"+o,"g"),"',typeof($1) === 'undefined'?'':$1,'")).replace(new RegExp("\\t:h=(.*?)"+o,"g"),"',typeof($1) === 'undefined'?'':baidu.template._encodeHTML($1),'").replace(new RegExp("\\t(?::=|-)(.*?)"+o,"g"),"',typeof($1)==='undefined'?'':$1,'").replace(new RegExp("\\t:u=(.*?)"+o,"g"),"',typeof($1)==='undefined'?'':encodeURIComponent($1),'").replace(new RegExp("\\t:v=(.*?)"+o,"g"),"',typeof($1)==='undefined'?'':baidu.template._encodeEventHTML($1),'").split("\t").join("');").split(s).join("_template_fun_array.push('").split("\r").join("\\'")}}(window),
/*!
 * DisqusJS | v0.1.0
 * Author: SukkaW
 * Link: https://github.com/SukkaW/DisqusJS
 * License: GPL-3.0
 */
disqusjs.page=[],window.disqus_config=function(){this.page.url=disqusjs.config.url,this.page.identifier=disqusjs.config.identifier};var xhr=new XMLHttpRequest;setLS=function(e,t){try{localStorage.setItem(e,t)}catch(e){console.log(e),console.log("Failed to set localStorage item")}},getLS=function(e){return localStorage.getItem(e)},Date.prototype.Format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var s in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),t)new RegExp("("+s+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[s]:("00"+t[s]).substr((""+t[s]).length)));return e},loadDisqus=function(){var e=document;e.getElementById("dsqjs-load-disqus").classList.remove("dsqjs-hide"),e.getElementById("dsqjs-force-dsqjs").addEventListener("click",forceDsqjs);var t=e.createElement("script");t.src="https://"+disqusjs.config.shortname+".disqus.com/embed.js",t.setAttribute("data-timestamp",+new Date),(e.head||e.body).appendChild(t)},checkDisqus=function(){var t=new Image,s=setTimeout(function(){t.onerror=t.onload=null,setLS("disqusjs_mode","dsqjs")},2e3);t.onerror=function(){clearTimeout(s),setLS("disqusjs_mode","dsqjs"),main()},t.onload=function(){clearTimeout(s);var e=setTimeout(function(){t.onerror=t.onload=null,setLS("disqusjs_mode","dsqjs")},2e3);t.onerror=function(){clearTimeout(e),setLS("disqusjs_mode","dsqjs"),main()},t.onload=function(){clearTimeout(e),setLS("disqusjs_mode","disqus"),main()},t.src="https://"+disqusjs.config.shortname+".disqus.com/favicon.ico?"+ +new Date},t.src="https://disqus.com/favicon.ico?"+ +new Date},forceDsqjs=function(){setLS("disqusjs_mode","dsqjs"),main()},forceDisqus=function(){setLS("disqusjs_mode","disqus"),main()},loadError=function(){document.getElementById("dsqjs-load-error").classList.remove("dsqjs-hide"),document.getElementById("dsqjs-loading-dsqjs").classList.add("dsqjs-hide"),document.getElementById("dsqjs-reload").addEventListener("click",getThreadInfo)},getThreadInfo=function(){document.getElementById("dsqjs-loading-dsqjs").classList.remove("dsqjs-hide"),document.getElementById("dsqjs-force-disqus").addEventListener("click",forceDisqus);var e=disqusjs.config.api+"3.0/threads/list.json?forum="+disqusjs.config.shortname+"&thread=ident:"+disqusjs.config.identifier+"&api_key="+disqusjs.config.apikey;xhr.open("GET",e,!0),xhr.timeout=4e3,xhr.send(),xhr.onload=function(){if(200==this.status||304==this.status){var e=JSON.parse(this.responseText).response[0];disqusjs.page={id:e.id,title:e.title,isClosed:e.isClosed,length:e.posts},getComment()}},xhr.ontimeout=function(e){loadError()},xhr.onerror=function(e){loadError()}},getComment=function(){var e=disqusjs.config.api+"3.0/posts/list.json?forum="+disqusjs.config.shortname+"&thread="+disqusjs.page.id+"&api_key="+disqusjs.config.apikey;xhr.open("GET",e,!0),xhr.timeout=4e3,xhr.send(),xhr.onload=function(){if(200==this.status||304==this.status){var e=JSON.parse(this.responseText);0===e.code&&getCommentList(e.response)}},xhr.ontimeout=function(e){console.log(e)},xhr.onerror=function(e){console.log(e)}},getCommentList=function(e){var t=[],r=[];e.forEach(function(e){(e.parent?r:t).push(e)});var s=t.map(function(e){return{comment:e,author:e.author.name,isPrimary:e.author.username===disqusjs.config.admin,children:function e(t){if(0===r.length)return null;var s=[];for(var n=0;n<r.length;n++){var o=r[n];o.parent===t&&s.unshift({comment:o,author:o.author.name,isPrimary:o.author.username===disqusjs.config.admin,children:e(+o.id)})}return s.length?s:null}(+e.id)}});renderComment(s)},renderComment=function(e){var o='<div class="dsqjs-item-container"><div class="dsqjs-avater"><%- avatarEl %></div><div class="dsqjs-body"><header class="dsqjs-header"><span class="dsqjs-author"><%- authorEl %></span><span class="dsqjs-bullet"></span><span class="dsqjs-meta"><time><%- (new Date(createdAt)).Format("yyyy-MM-dd hh:mm:ss") %></time></span></header><div class="dsqjs-content"><%- message %></div></div></div>';e.map(function(e){childrenComments=function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(e){var s=e.nesting,t=e.children||[];if("null"!=typeof t){if(s<4)var n='<ul class="dsqjs-list dsqjs-children">';else n='<ul class="dsqjs-list">';return t.map(function(e){var t=e.comment;t.author.profileUrl?(t.avatarEl='<a href="'.concat(t.author.profileUrl,'" target="_blank" rel="nofollow noopener noreferrer"><img src="').concat(t.author.avatar.cache,'"></a>'),t.authorEl='<a href="'.concat(t.author.profileUrl,'">').concat(t.author.name,"</a>")):(t.avatarEl='<img src="'.concat(t.author.avatar.cache,'">'),t.authorEl="".concat(t.author.name)),e.nesting=s+1,n+='<li class="dsqjs-item" id="comment-'.concat(t.id,'">'),n+=baidu.template(o,t),n+="".concat(childrenComments(e),"</li>")}),0!==(n+="</ul>").length?n:void 0}});var t=e.comment;t.author.profileUrl?(t.avatarEl='<a href="'.concat(t.author.profileUrl,'" target="_blank" rel="nofollow noopener noreferrer"><img src="').concat(t.author.avatar.cache,'"></a>'),t.authorEl='<a href="'.concat(t.author.profileUrl,'">').concat(t.author.name,"</a>")):(t.avatarEl='<img src="'.concat(t.author.avatar.cache,'">'),t.authorEl="".concat(t.author.name)),e.children&&(e.nesting=1);var s='<li class="dsqjs-item" id="comment-'.concat(t.id,'">');s+=baidu.template(o,t),s+="".concat(childrenComments(e),"</li>"),document.getElementById("dsqjs-list").insertAdjacentHTML("beforeend",s)})},main=function(){document.getElementById("disqus_thread").innerHTML='<div id="dsqjs"><section class="dsqjs-action"></section><header></header><section class="dsqjs-info"><p id="dsqjs-load-disqus" class="dsqjs-load-error dsqjs-hide">评论完整模式加载中...如果长时间无法加载，请针对 disq.us | disquscdn.com | disqus.com 启用代理，或使用<a href="#" id="dsqjs-force-dsqjs">评论基础模式</a></p><p id="dsqjs-loading-dsqjs" class="dsqjs-load-error dsqjs-hide">你可能无法访问 Disqus，已启用评论基础模式。如需完整体验请针对 disq.us | disquscdn.com | disqus.com 启用代理并<a href="#" id="dsqjs-force-disqus">切换到完整 Disqus 模式</a>。</p><p id="dsqjs-load-error" class="dsqjs-load-error dsqjs-hide">评论基础模式出现错误，是否<a href="#" id="dsqjs-reload">重载</a>？</p></section><section class="dsqjs-container" id="dsqjs-container"><ul id="dsqjs-list" class="dsqjs-list"></ul></section></div>',disqusjs.mode=getLS("disqusjs_mode"),"disqus"===disqusjs.mode?loadDisqus():"dsqjs"===disqusjs.mode?getThreadInfo():checkDisqus()},main();