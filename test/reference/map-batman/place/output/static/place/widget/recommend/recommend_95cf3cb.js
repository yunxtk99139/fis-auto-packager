define("place:widget/recommend/recommend.js",function(t,e,i){function a(){"use strict";o.on("click",n)}function n(t){"use strict";var e,i,a,n=$(t.target).closest("li"),o=location.href,s=n.attr("data-uid"),r=$(".place-widget-captain .name").text(),d=(n.find("p").eq(0).text().substr(2),o.lastIndexOf("/"));i=o.slice(0,d).replace(/qt=[A-Za-z]*/g,"qt=inf"),a=o.slice(d),e=i+"&uid="+s+a,c.addCookieStat(STAT_CODE.PLACE_CATER_DETAIL_RECOMMEND_CLICK,{name:r},function(){location.href=e}),t.stopPropagation(),t.stopImmediatePropagation()}var o=$(".place-widget-recommend ul li"),c=t("common:widget/stat/stat.js");i.exports={init:function(){"use strict";a()}}});