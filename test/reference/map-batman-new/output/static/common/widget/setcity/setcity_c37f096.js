define("common:widget/setcity/setcity.js",function(e,t,o){var a=e("common:widget/cookie/cookie.js"),i=e("common:widget/url/url.js"),c=(e("common:widget/pagemgr/pagemgr.js"),e("common:static/js/util.js"));e("common:widget/geolocation/location.js");var r={path:"/mobile/",expires:86400},n="     ",d={cityName:"",cityId:""},u=function(e,t){d.cityName=e,d.cityId=t},s=function(e,t,o){return"string"==typeof e?("setsubwaycity"==window._APP_HASH.page?g(o):(u(e,t),a.set("setCityName",e,r),m()),e):void 0},m=function(){var e,t,o=i.get(),a=(o.query,o.pageState);a.refer_query?(e=c.urlToJSON(a.refer_query),referPageState=c.urlToJSON(a.refer_pagestate),e.wd&&e.wd.split(n)[1]&&(e.wd=e.wd.split(n)[1]),t="wm"===e.qt||"takeout"==referPageState.search?l(e,referPageState):y(e,referPageState),p(t)):i.toIndex({cache:!1})},y=function(e){var t=e||{};return t.c=d.cityId||t.c,delete t.nb_x,delete t.nb_y,opts={module:"place",action:"list",query:t,pageState:{dist_name:d.cityName}}},l=function(e,t){var o=e||{},a=t||{};return o.cityId=d.cityId||o.c,o.c=o.cityId,o.pageNum=1,o.m="searchBrands",delete o.nb_x,delete o.nb_y,delete o.pointX1,delete o.pointY1,delete o.radius,delete o.sortType,delete o.orderType,a=$.extend(a,{citysearch:1,center_name:d.cityName}),opts={module:"place",action:"takeout",query:o,pageState:a}},p=function(e){e&&e.module&&e.action?i.update(e):i.toIndex()},g=function(e){i.update({module:"subway",action:"show",query:{city:e}})};o.exports.setAndRedirect=s});