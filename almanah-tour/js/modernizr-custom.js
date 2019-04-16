/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-audio-inlinesvg-svg-video-addtest-setclasses-testallprops-testprop-teststyles !*/
!function(e,n,t){function o(e,n){return typeof e===n}function r(){var e,n,t,r,a,i,s;for(var l in T)if(T.hasOwnProperty(l)){if(e=[],n=T[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],s=i.split("."),1===s.length?Modernizr[s[0]]=r:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=r),w.push((r?"":"no-")+s.join("-"))}}function a(e){var n=C.className,t=Modernizr._config.classPrefix||"";if(S&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),S?C.className.baseVal=n:C.className=n)}function i(e,n){if("object"==typeof e)for(var t in e)P(e,t)&&i(t,e[t]);else{e=e.toLowerCase();var o=e.split("."),r=Modernizr[o[0]];if(2==o.length&&(r=r[o[1]]),"undefined"!=typeof r)return Modernizr;n="function"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),a([(n&&0!=n?"":"no-")+o.join("-")]),Modernizr._trigger(e,n)}return Modernizr}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):S?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(e,n){return!!~(""+e).indexOf(n)}function c(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function u(){var e=n.body;return e||(e=s(S?"svg":"body"),e.fake=!0),e}function f(e,t,o,r){var a,i,l,c,f="modernizr",p=s("div"),d=u();if(parseInt(o,10))for(;o--;)l=s("div"),l.id=r?r[o]:f+(o+1),p.appendChild(l);return a=s("style"),a.type="text/css",a.id="s"+f,(d.fake?d:p).appendChild(a),d.appendChild(p),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),p.id=f,d.fake&&(d.style.background="",d.style.overflow="hidden",c=C.style.overflow,C.style.overflow="hidden",C.appendChild(d)),i=t(p,e),d.fake?(d.parentNode.removeChild(d),C.style.overflow=c,C.offsetHeight):p.parentNode.removeChild(p),!!i}function p(e,n){return function(){return e.apply(n,arguments)}}function d(e,n,t){var r;for(var a in e)if(e[a]in n)return t===!1?e[a]:(r=n[e[a]],o(r,"function")?p(r,t||n):r);return!1}function y(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function v(n,o){var r=n.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(y(n[r]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var a=[];r--;)a.push("("+y(n[r])+":"+o+")");return a=a.join(" or "),f("@supports ("+a+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function m(e,n,r,a){function i(){f&&(delete N.style,delete N.modElem)}if(a=o(a,"undefined")?!1:a,!o(r,"undefined")){var u=v(e,r);if(!o(u,"undefined"))return u}for(var f,p,d,y,m,g=["modernizr","tspan","samp"];!N.style&&g.length;)f=!0,N.modElem=s(g.shift()),N.style=N.modElem.style;for(d=e.length,p=0;d>p;p++)if(y=e[p],m=N.style[y],l(y,"-")&&(y=c(y)),N.style[y]!==t){if(a||o(r,"undefined"))return i(),"pfx"==n?y:!0;try{N.style[y]=r}catch(h){}if(N.style[y]!=m)return i(),"pfx"==n?y:!0}return i(),!1}function g(e,n,t,r,a){var i=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+x.join(i+" ")+i).split(" ");return o(n,"string")||o(n,"undefined")?m(s,n,r,a):(s=(e+" "+E.join(i+" ")+i).split(" "),d(s,n,t))}function h(e,n,o){return g(e,t,t,n,o)}var w=[],T=[],_={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){T.push({name:e,fn:n,options:t})},addAsyncTest:function(e){T.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=_,Modernizr=new Modernizr,Modernizr.addTest("svg",!!n.createElementNS&&!!n.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var P,C=n.documentElement,S="svg"===C.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;P=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),_._l={},_.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},_._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,o;for(e=0;e<t.length;e++)(o=t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){_.addTest=i}),Modernizr.addTest("audio",function(){var e=s("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),n.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(t){}return n}),Modernizr.addTest("video",function(){var e=s("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),n.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),n.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(t){}return n}),Modernizr.addTest("inlinesvg",function(){var e=s("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var b=(_.testStyles=f,"Moz O ms Webkit"),x=_._config.usePrefixes?b.split(" "):[];_._cssomPrefixes=x;var E=_._config.usePrefixes?b.toLowerCase().split(" "):[];_._domPrefixes=E;var $={elem:s("modernizr")};Modernizr._q.push(function(){delete $.elem});var N={style:$.elem.style};Modernizr._q.unshift(function(){delete N.style});_.testProp=function(e,n,o){return m([e],t,n,o)};_.testAllProps=g,_.testAllProps=h,r(),a(w),delete _.addTest,delete _.addAsyncTest;for(var j=0;j<Modernizr._q.length;j++)Modernizr._q[j]();e.Modernizr=Modernizr}(window,document);