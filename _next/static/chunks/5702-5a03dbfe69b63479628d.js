(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5702],{36386:function(e){function t(e,t,n){var r,o,u,i,c;function s(){var l=Date.now()-i;l<t&&l>=0?r=setTimeout(s,t-l):(r=null,n||(c=e.apply(u,o),u=o=null))}null==t&&(t=100);var l=function(){u=this,o=arguments,i=Date.now();var l=n&&!r;return r||(r=setTimeout(s,t)),l&&(c=e.apply(u,o),u=o=null),c};return l.clear=function(){r&&(clearTimeout(r),r=null)},l.flush=function(){r&&(c=e.apply(u,o),u=o=null,clearTimeout(r),r=null)},l}t.debounce=t,e.exports=t},731:function(e,t,n){"use strict";var r=n(2784),o=n(36386);function u(e){const t=[];if(!e||e===document.body)return t;const{overflow:n,overflowX:r,overflowY:o}=window.getComputedStyle(e);return[n,r,o].some((e=>"auto"===e||"scroll"===e))&&t.push(e),[...t,...u(e.parentElement)]}const i=["x","y","top","bottom","left","right","width","height"],c=(e,t)=>i.every((n=>e[n]===t[n]));t.Z=function({debounce:e,scroll:t,polyfill:n}={debounce:0,scroll:!1}){const i=n||("undefined"===typeof window?class{}:window.ResizeObserver);if(!i)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[s,l]=(0,r.useState)({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),f=(0,r.useRef)({element:null,scrollContainers:null,resizeObserver:null,lastBounds:s}),a=e?"number"===typeof e?e:e.scroll:null,v=e?"number"===typeof e?e:e.resize:null,p=(0,r.useRef)(!1);(0,r.useEffect)((()=>(p.current=!0,()=>{p.current=!1})));const[d,b,m]=(0,r.useMemo)((()=>{const e=()=>{if(!f.current.element)return;const{left:e,top:t,width:n,height:r,bottom:o,right:u,x:i,y:s}=f.current.element.getBoundingClientRect(),a={left:e,top:t,width:n,height:r,bottom:o,right:u,x:i,y:s};Object.freeze(a),p.current&&!c(f.current.lastBounds,a)&&l(f.current.lastBounds=a)};return[e,v?(0,o.debounce)(e,v):e,a?(0,o.debounce)(e,a):e]}),[l,a,v]);function h(){f.current.scrollContainers&&(f.current.scrollContainers.forEach((e=>e.removeEventListener("scroll",m,!0))),f.current.scrollContainers=null),f.current.resizeObserver&&(f.current.resizeObserver.disconnect(),f.current.resizeObserver=null)}function w(){f.current.element&&(f.current.resizeObserver=new i(m),f.current.resizeObserver.observe(f.current.element),t&&f.current.scrollContainers&&f.current.scrollContainers.forEach((e=>e.addEventListener("scroll",m,{capture:!0,passive:!0}))))}var y,g,x;return y=m,g=Boolean(t),(0,r.useEffect)((()=>{if(g){const e=y;return window.addEventListener("scroll",e,{capture:!0,passive:!0}),()=>{window.removeEventListener("scroll",e,!0)}}}),[y,g]),x=b,(0,r.useEffect)((()=>{const e=x;return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[x]),(0,r.useEffect)((()=>{h(),w()}),[t,m,b]),(0,r.useEffect)((()=>h),[]),[e=>{e&&e!==f.current.element&&(h(),f.current.element=e,f.current.scrollContainers=u(e),w())},s,d]}},29215:function(e,t,n){var r=n(82394).Symbol;e.exports=r},63634:function(e,t,n){var r=n(29215),o=n(91671),u=n(86492),i=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?o(e):u(e)}},79639:function(e,t,n){var r=n(49947),o=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(o,""):e}},5581:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},91671:function(e,t,n){var r=n(29215),o=Object.prototype,u=o.hasOwnProperty,i=o.toString,c=r?r.toStringTag:void 0;e.exports=function(e){var t=u.call(e,c),n=e[c];try{e[c]=void 0;var r=!0}catch(s){}var o=i.call(e);return r&&(t?e[c]=n:delete e[c]),o}},86492:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},82394:function(e,t,n){var r=n(5581),o="object"==typeof self&&self&&self.Object===Object&&self,u=r||o||Function("return this")();e.exports=u},49947:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},99788:function(e,t,n){var r=n(77950),o=n(40439),u=n(94562),i=Math.max,c=Math.min;e.exports=function(e,t,n){var s,l,f,a,v,p,d=0,b=!1,m=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function w(t){var n=s,r=l;return s=l=void 0,d=t,a=e.apply(r,n)}function y(e){return d=e,v=setTimeout(x,t),b?w(e):a}function g(e){var n=e-p;return void 0===p||n>=t||n<0||m&&e-d>=f}function x(){var e=o();if(g(e))return E(e);v=setTimeout(x,function(e){var n=t-(e-p);return m?c(n,f-(e-d)):n}(e))}function E(e){return v=void 0,h&&s?w(e):(s=l=void 0,a)}function O(){var e=o(),n=g(e);if(s=arguments,l=this,p=e,n){if(void 0===v)return y(p);if(m)return clearTimeout(v),v=setTimeout(x,t),w(p)}return void 0===v&&(v=setTimeout(x,t)),a}return t=u(t)||0,r(n)&&(b=!!n.leading,f=(m="maxWait"in n)?i(u(n.maxWait)||0,t):f,h="trailing"in n?!!n.trailing:h),O.cancel=function(){void 0!==v&&clearTimeout(v),d=0,s=p=l=v=void 0},O.flush=function(){return void 0===v?a:E(o())},O}},77950:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},24594:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},44048:function(e,t,n){var r=n(63634),o=n(24594);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},40439:function(e,t,n){var r=n(82394);e.exports=function(){return r.Date.now()}},94562:function(e,t,n){var r=n(79639),o=n(77950),u=n(44048),i=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(u(e))return NaN;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=c.test(e);return n||s.test(e)?l(e.slice(2),n?2:8):i.test(e)?NaN:+e}}}]);