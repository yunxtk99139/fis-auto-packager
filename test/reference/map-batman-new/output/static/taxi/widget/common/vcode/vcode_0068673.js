define("taxi:widget/common/vcode/vcode.js",function(t,e,i){"use strict";var o="http://map.baidu.com/maps/services/captcha?cb=?",c="http://map.baidu.com/maps/services/captcha/image";i.exports={create:function(){var t=$(".taxi-widget-common-vcode"),e=t.find(".image-code"),i=t.find(".input-vcode"),o=t.find(".input-code"),c=t.find(".btn-refresh");c.on("click",$.proxy(this.fetchVCode,this)),this.$imageCode=e,this.$inputVCode=i,this.$inputCode=o},fetchVCode:function(){var t,e=this;$.ajax({url:o+"&t="+(new Date).getTime(),dataType:"jsonp",success:function(i){0===i.result.error&&(t=i.content.vcode,e.$imageCode.attr("src",c+"?vcode="+t),e.$inputVCode.val(t))}})},getCode:function(){return this.$inputCode.val()},getVCode:function(){return this.$inputVCode.val()},init:function(){this.create(),this.fetchVCode()}}});