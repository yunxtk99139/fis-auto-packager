define("common:widget/topbanner/topbanner.js",function(n,t,o){var a=n("common:widget/cookie/cookie.js"),e=n("common:static/js/util.js"),i=n("common:widget/stat/stat.js"),d=n("common:widget/url/url.js");o.exports={init:function(n){this.bannerHide=n||!1,this.bind(),this.render()},bind:function(){var n=this;n.closeBtn=$("#banner_close_button"),n.bannerCon=$("#common-widget-top-banner"),n.appbutton=$("#banner_install_button")},render:function(){var n=this,t=d.get();n.os=e.isAndroid()?"android":e.isIPhone()?"iphone":e.isIPad()?"ipad":"unknown",n.action=t.action,n.module=t.module,n.pageState=t.pageState,n.a=window.a,$(window).on("pageshow",function(){$("#downBox").length>0&&$("#downBox").hide(),clearTimeout(window.a)}),n.closeBtn.on("click",$.proxy(n._onClose,this)),n.displayBanner()},displayBanner:function(){var n=this,t=navigator.userAgent,o="点击下载手机地图，省90%流量";return a.get("hdBanner")||n.isHideBanner()?(n.hideBanner(),void 0):(n.showBanner(),e.isIPhone()&&t.indexOf("Safari")>0?(n.appbutton.html("点击打开手机地图，省90%流量"),e.bindHrefStat(n.appbutton,function(){return alert("将打开百度地图客户端"),$(document.body).append("<iframe src= 'baidumap://map/' id='callapp' width='0' height='0' style='border: 0;display: none;'/>"),window.a=setTimeout(function(){e.DownBox.showTb(),i.addStat(COM_STAT_CODE.TOP_BANNER_APP_ERROR_OPEN)},1500),!1})):(n.appbutton.attr("data",e.getClientUrl("download")),e.isInstalledClient(function(t){n.appbutton.html("点击打开手机地图，省90%流量").attr("data",t),n.appbutton.addClass("open"),e.bindHrefStat(n.appbutton,function(){i.addStat(COM_STAT_CODE.TOP_BANNER_APP_OPEN,{os:n.os})})},function(t){n.appbutton.html(o).attr("data",t),e.bindHrefStat(n.appbutton,function(){i.addStat(COM_STAT_CODE.TOP_BANNER_APP_DOWNLOAD,{os:n.os})})},n.appbutton.attr("uid"))),void 0)},_onClose:function(){var n=this;n.hideBanner();var t={domain:location.hostname,path:"/mobile",expires:2592e5};a.set("hdBanner","true",t),i.addStat(COM_STAT_CODE.INDEX_TOP_BANNER_CLICK)},hideBanner:function(){var n=this;n.bannerCon.hide()},showBanner:function(){var n=this;n.bannerCon.show(),i.addStat(COM_STAT_CODE.INDEX_TOP_BANNER_SHOW)},isHideBanner:function(){return this.bannerHide?(localStorage.hbt=Date.now(),!0):localStorage.hbt?Date.now()>Number(localStorage.hbt)+9e5?(localStorage.removeItem("hbt"),!1):!0:!1}}});