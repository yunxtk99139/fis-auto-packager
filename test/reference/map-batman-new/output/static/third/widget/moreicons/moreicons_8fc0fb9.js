define("third:widget/moreicons/moreicons.js",function(t,e,o){"use strict";var a=t("common:static/js/util.js"),n=t("common:widget/url/url.js"),i=t("common:widget/stat/stat.js"),c=t("common:widget/geolocation/location.js");o.exports={init:function(){this.bind()},bind:function(){var t=this;$(".more-icons a").on("click",function(){t.search(this,t)})},search:function(t,e){var o=$(t),r=o.data("wd"),d=$("#current-city"),s=d.data("city"),u=d.data("code"),m={wd:r,code:u},l={};if(r&&"团购"!==r&&i.addCookieStat(STAT_CODE.STAT_MORE_ICONS_CLICK,{wd:r}),"团购"===r)return i.addStat(STAT_CODE.STAT_MORE_ICONS_CLICK,{wd:r}),setTimeout(function(){var t;try{if(c.hasExactPoi()){var e=c.getCenterPoi();t="http://mtuan.baidu.com/t/locat?from=map_webapp&x="+e.x+"&y="+e.y+"&to_url="+encodeURIComponent(location.href)}else t="http://mtuan.baidu.com/t/locat?from=map_webapp&to_url="+encodeURIComponent(location.href)}catch(o){t="http://mtuan.baidu.com/t/locat?from=map_webapp&to_url="+encodeURIComponent(location.href)}window.location=t},500),void 0;switch(r){case"更多":l.module="index",l.action="more";break;case"地铁图":var y=a.ifSupportSubway(u);if(y){var p=y.split(",");l.module="subway",l.action="show",l.query={city:p[0]}}else l.module="index",l.action="setsubwaycity";break;case"全景":l.module="index",l.action="sventry";break;case"天气":l.module="third",l.action="weather",l.query={city:s,code:u};break;case"公交":l.module="third",l.action="transit",l.query={city:s,code:u};break;default:l=e.getHash(m)}n.update(l)},getHash:function(t){var e=t.module||"search",o=t.action||"search",a=parseInt(t.code)||131,i={qt:"s",wd:"",c:a},r={};t.query?i=$.extend(i,t.query):(i.wd=t.wd||t.word||t.name,i.searchFlag="sort");var d=n.get(),s=(d.query,d.pageState||{}),u=(s.from||"",decodeURIComponent(s.center_name||c.getCity()));return c._mylocation&&c._mylocation.isExactPoi&&parseInt(c.getMyCityCode())===a&&(u="我的位置",i.center_rank=1,i.nb_x=c.getMyPointX(),i.nb_y=c.getMyPointY()),r.center_name=u,{module:e,action:o,query:i,pageState:r}}}});