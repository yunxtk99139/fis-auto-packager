define("place:widget/gotomovie/gotomovie.js",function(t,a,o){"use strict";function i(){var t=$("#detail-phone");t.on("click",e)}function e(t){var a=$(".common-widget-nav .title span").text(),o=$(".place-widget-captain").find(".name").text();s.addStat(STAT_CODE.PLACE_DETAIL_TELEPHONE_CLICK,{wd:a,name:o});var i=$(t.target).closest("a");n.isAndroid()&&(i.attr("href","javascript:void(0)"),n.TelBox.showTb(i.attr("data-tel"))),t.stopPropagation(),t.stopImmediatePropagation()}var n=t("common:static/js/util.js"),s=t("common:widget/stat/stat.js");s.addStat(STAT_CODE.PLACE_DETAIL_TELEPHONE_SHOW),o.exports={init:function(){i()}}});