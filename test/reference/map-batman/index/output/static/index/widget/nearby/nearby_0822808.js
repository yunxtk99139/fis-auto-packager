define("index:widget/nearby/nearby.js",function(require,exports,module){var util=require("common:static/js/util.js"),url=require("common:widget/url/url.js"),helper=require("index:widget/helper/helper.js"),stat=require("common:widget/stat/stat.js"),locator=require("common:widget/geolocation/location.js");module.exports={init:function(t){this.bind(),this.page=t},bind:function(){var t=this;$(".index-widget-nearby [jsaction]").on("click",function(e){var o=$(e.currentTarget);o.find(".ui3-taxi").length>0?location.href="http://taxi.map.baidu.com":t.search(o)})},search:function(target){if(eval("var hash = "+target.attr("userdata")),stat.addCookieStat(STAT_CODE.STAT_NEARBY_CLICK,{id:hash.id}),"团购"==hash.wd)setTimeout(function(){var t;try{if(locator.hasExactPoi()){var e=locator.getCenterPoi();t="http://mtuan.baidu.com/t/locat?from=map_webapp&x="+e.x+"&y="+e.y+"&to_url="+encodeURIComponent(location.href)}else t="http://mtuan.baidu.com/t/locat?from=map_webapp&to_url="+encodeURIComponent(location.href)}catch(o){t="http://mtuan.baidu.com/t/locat?from=map_webapp&to_url="+encodeURIComponent(location.href)}window.location=t},500);else if("地铁图"==hash.wd){var supportCityInfo=util.ifSupportSubway(locator.getCityCode());if(supportCityInfo){var sarr=supportCityInfo.split(",");target.attr("href","/mobile/webapp/subway/show/city="+sarr[0]+"/ref=index")}else target.attr("href","/mobile/webapp/index/setsubwaycity/force=simple")}else"全景"==hash.wd?target.attr("href","/mobile/webapp/index/sventry/force=simple"):url.update(helper.getHash(hash))}}});