define("common:static/js/gmu/src/extend/matchMedia.js",function(){!function(n){n.matchMedia=function(){var i=0,t="gmu-media-detect",e=n.fx.transitionEnd,d=n.fx.cssPrefix,a=n("<style></style>").append("."+t+"{"+d+"transition: width 0.001ms; width: 0; position: absolute; top: -10000px;}\n").appendTo("head");return function(d){var o,c,s=t+i++,r=[];return a.append("@media "+d+" { #"+s+" { width: 1px; } }\n"),"matchMedia"in window?window.matchMedia(d):(o=n('<div class="'+t+'" id="'+s+'"></div>').appendTo("body").on(e,function(){c.matches=1===o.width(),n.each(r,function(i,t){n.isFunction(t)&&t.call(c,c)})}),c={matches:1===o.width(),media:d,addListener:function(n){return r.push(n),this},removeListener:function(n){var i=r.indexOf(n);return~i&&r.splice(i,1),this}})}}()}(Zepto)});