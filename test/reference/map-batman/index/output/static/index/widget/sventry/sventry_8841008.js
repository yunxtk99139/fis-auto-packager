define("index:widget/sventry/sventry.js",function(require,exports,module){var util=require("common:static/js/util.js");module.exports.init=function(){bind()};var bind=function(){$(".index-widget-sventry .city-item").on("click",function(){_onClickCity($(this))})},_onClickCity=function(elem){var dataStr=elem.attr("data");eval("var dataObj = "+dataStr),elem.attr("href",_getSvUrl(dataObj))},_getSvUrl=function(t){var e="/mobile/webapp/index/streetview/ss_id=";return window.egg=t,e+=t.sid+"&ss_heading="+t.heading+"&ss_pitch="+t.pitch}});