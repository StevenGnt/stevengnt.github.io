!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=[{id:"better-man",colors:{shadow1:"white",shadow2:"white"}},{id:"another",colors:{shadow1:"white",shadow2:"white"}},{id:"wait",colors:{shadow1:"white",shadow2:"white"}},{id:"stolen",colors:{text:"black",shadow1:"black",shadow2:"black"}},{id:"for-you",colors:{shadow1:"white",shadow2:"white"}},{id:"so-good",colors:{text:"black",shadow1:"black",shadow2:"black"}},{id:"by-the-way",colors:{shadow1:"orange",shadow2:"red"}}]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={BACKGROUNDS_PATH:"./backgrounds",REFRESH_INTERVAL:50,SHADOW_1_RATIO:300,SHADOW_2_RATIO:100}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(1)),r=a(n(0));function a(e){return e&&e.__esModule?e:{default:e}}t.default={constants:o.default,tracklist:r.default}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){o.default.tracklist.forEach(function(e){var t=new Image;t.src=d(e)});var r=function(){var n=c();e.style["background-image"]="url('"+d(n)+"')",t.style.color=l(n)};r(),setInterval(function(){var e=c(),r=s(n.volume,o.default.constants.SHADOW_1_RATIO),a=s(n.volume,o.default.constants.SHADOW_2_RATIO),i="0 0 "+r+"px "+e.colors.shadow1,u="0 0 "+a+"px "+e.colors.shadow2;t.style["text-shadow"]="1px 1px 2px "+l(e)+", "+i+", "+u},o.default.constants.REFRESH_INTERVAL),document.addEventListener("keydown",function(e){switch(e.key){case"ArrowRight":i(),r();break;case"ArrowLeft":u(),r()}})};var o=function(e){return e&&e.__esModule?e:{default:e}}(n(2));var r={currentTrackIndex:0},a=function(e){r.currentTrackIndex=Math.min(o.default.tracklist.length-1,Math.max(0,e))},i=function(){return a(r.currentTrackIndex+1)},u=function(){return a(r.currentTrackIndex-1)},c=function(){return o.default.tracklist[r.currentTrackIndex]||o.default.tracklist[0]},s=function(e,t){return e*t},l=function(e){return e.colors.text||"white"},d=function(e){return o.default.constants.BACKGROUNDS_PATH+"/"+e.id+".jpg"}},function(e,t,n){"use strict";function o(e){for(var t,n=e.inputBuffer.getChannelData(0),o=n.length,r=0,a=0;a<o;a++)t=n[a],Math.abs(t)>=this.clipLevel&&(this.clipping=!0,this.lastClip=window.performance.now()),r+=t*t;var i=Math.sqrt(r/o);this.volume=Math.max(i,this.volume*this.averaging)}Object.defineProperty(t,"__esModule",{value:!0}),t.createAudioMeter=function(e,t,n,r){var a=e.createScriptProcessor(512);return a.onaudioprocess=o,a.clipping=!1,a.lastClip=0,a.volume=0,a.clipLevel=t||.98,a.averaging=n||.95,a.clipLag=r||750,a.connect(e.destination),a.checkClipping=function(){return!!this.clipping&&(this.lastClip+this.clipLag<window.performance.now()&&(this.clipping=!1),this.clipping)},a.shutdown=function(){this.disconnect(),this.onaudioprocess=null},a},t.volumeAudioProcess=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4);t.default={getMeter:function(){return new Promise(function(e,t){try{navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia,navigator.getUserMedia({audio:{mandatory:{googEchoCancellation:"false",googAutoGainControl:"false",googNoiseSuppression:"false",googHighpassFilter:"false"},optional:[]}},e,t)}catch(e){t(e)}}).then(function(e){var t=new AudioContext,n=t.createMediaStreamSource(e),r=(0,o.createAudioMeter)(t);return n.connect(r),r}).catch(function(e){console.error("An error occured while creating meter",e)})}}},function(e,t,n){"use strict";var o=a(n(5)),r=a(n(3));function a(e){return e&&e.__esModule?e:{default:e}}window.onload=function(){o.default.getMeter().then(function(e){var t=document.getElementById("bandName"),n=document.getElementsByTagName("body")[0];(0,r.default)(n,t,e)})}}]);