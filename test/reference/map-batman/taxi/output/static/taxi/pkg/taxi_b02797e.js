var BigPipe=function(){function ajax(e,t,a){var n=new(window.XMLHttpRequest||ActiveXObject)("Microsoft.XMLHTTP");n.onreadystatechange=function(){4==this.readyState&&t(this.responseText)},n.open(a?"POST":"GET",e+"&t="+~~(1e6*Math.random()),!0),a&&n.setRequestHeader("Content-type","application/x-www-form-urlencoded"),n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.send(a)}function renderPagelet(e,t,a){if(!(e.id in a)){a[e.id]=!0,e.parent_id&&renderPagelet(t[e.parent_id],t,a);var n=document.getElementById(e.id),r=idMaps[e.id];r&&r.html_id&&(n=document.getElementById(r.html_id)),n||(n=document.createElement("div"),n.id=e.id,document.body.appendChild(n)),n.innerHTML=e.html;for(var i=n.getElementsByTagName("script"),o=i.length-1;o>=0;o--)node=i[o],text=node.text||node.textContent||node.innerHTML||"",window.eval.call(window,text)}}function render(e){var t,a=e.length,n={},r={};for(t=0;a>t;t++){var i=e[t];n[i.id]=i}for(t=0;a>t;t++)renderPagelet(e[t],n,r)}function process(e){function t(){if(a.style){var t=document.createElement("style");t.innerHTML=a.style,document.getElementsByTagName("head")[0].appendChild(t)}render(e.pagelets),a.js?LazyLoad.js(a.js,function(){a.script&&window.eval(a.script)}):a.script&&window.eval(a.script)}var a=e.resource_map;a.async&&require.resourceMap(a.async),a.css?LazyLoad.css(a.css,t):t()}function asyncLoad(arg,param,cb){arg instanceof Array||(arg=[arg]);for(var obj,arr=[],i=arg.length-1;i>=0;i--){if(obj=arg[i],!obj.id)throw new Error("missing pagelet id");idMaps[obj.id]=obj,arr.push("pagelets[]="+obj.id)}var url=location.href.split("#")[0].indexOf("mobile/webapp/taxi/index")>-1?location.href.split("#")[0]+"&"+arr.join("&")+"&force_mode=1"+"&"+param:location.href.split("#")[0]+"mobile/webapp/taxi/index"+"&"+arr.join("&")+"&force_mode=1"+"&"+param;ajax(url,function(res){var data=window.JSON?JSON.parse(res):eval("("+res+")");cb&&"[object Function]"===Object.prototype.toString.call(cb)&&cb(),process(data)})}var idMaps={};return{asyncLoad:asyncLoad}}();
;define("taxi:widget/common/addprice/addprice.js",function(e,t,i){"use strict";var t={create:function(e){var t,i,n,a,c,d=$(".taxi-widget-addprice"),o=d.find(".wrapper");$.isArray(e)&&(t=document.createDocumentFragment(),$.each(e,function(e,c){i=$("<div/>").addClass("option"),n=$("<label/>").text(c+"元").appendTo(i),a=$("<input/>").attr({type:"radio",name:"add_price"}).val(c).appendTo(i),i.appendTo(t)}),o.append(t)),c=d.find(".option"),c.on("click",$.proxy(this.onOptionClick,this)),this.$el=d},onOptionClick:function(e){this.setValue($(e.currentTarget).find("input[type=radio]").val())},setValue:function(e){e=parseInt(e,10)||0;var t,i,n=this.$el,a=n.find(".option");a.each(function(n,a){i=$(a),t=i.find("input[type=radio]"),e===parseInt(t.val(),10)?(t.attr("checked","checked"),i.addClass("checked")):(t.removeAttr("checked"),i.removeClass("checked"))})},init:function(e,t){this.create(e),this.setValue(t),this.$el.show()}};i.exports=t});
;define("taxi:widget/home/home.js",function(t,i,n){"use strict";var e=t("common:static/js/util.js"),o=t("common:widget/cookie/cookie.js"),a=t("common:widget/stat/stat.js"),r=t("common:widget/geolocation/geolocation.js"),s=(t("common:widget/geolocation/location.js"),t("common:widget/broadcaster/broadcaster.js")),c=(t("common:widget/suggestion/suggestion.js"),t("common:widget/quickdelete/quickdelete.js"),t("common:widget/popup/popup.js")),d=t("taxi:widget/common/addprice/addprice.js"),i={create:function(){var t=this,i=$(".taxi-widget-home"),n=i.find(".btn-submit"),e=i.find(".nearby-car-info"),o=i.find(".add-price"),a=i.find("input[name=route_start]"),r=i.find("input[name=route_end]"),c=i.find(".form"),d=i.find(".input-panel"),u=(i.find(".poi-input"),i.find(".btn-back")),l=i.find(".btn-back-to-form"),f=i.find(".btn-settings"),p=i.find(".btn-confirm"),m=i.find(".form .input-wrapper");document.referrer&&(u.show(),u.on("click",$.proxy(this.onBtnBackClick,this))),n.on("click",$.proxy(this.onBtnSubmitClick,this)),l.on("click",$.proxy(this.onBtnBackToFormClick,this)),p.on("click",$.proxy(this.onBtnConfirmClick,this)),f.on("click",$.proxy(this.onBtnSettingsClick,this)),m.on("click",$.proxy(this.onFormInputClick,this)),s.subscribe("geolocation.mylocsuc",this.onGeoSuccess,this),s.subscribe("geolocation.fail",this.onGeoFail,this),this.suggestion=$.ui.suggestion({container:".poi-input",mask:".input-panel",source:"http://map.baidu.com/su",listCount:4,posAdapt:!1,isSharing:!0,offset:{x:0,y:0},param:$.param({type:"0",newmap:"1",ie:"utf-8"}),onsubmit:function(){t.onBtnConfirmClick.call(t)}}),this.$el=i,this.$nearbyCarInfo=e,this.$addPrice=o,this.$btnSubmit=n,this.$form=c,this.$inputPanel=d,this.$routeStart=a,this.$routeEnd=r},onBtnSubmitClick:function(){var t=this.$el,i=t.find("form"),n=e.urlToJSON(i.serialize()),r=this.verifyInput();if(!this.geoSuccess)return c.open({text:"定位不成功，不能发起打车请求！",layer:!0}),!1;if(!this.getNearbyCarInfoSuccess)return c.open({text:"获取附近车辆信息失败，请稍后再试！",layer:!0}),!1;if(r>0)c.open({text:"正在提交表单...",layer:!0,autoCloseTime:0}),LoadManager.request({data:n,success:function(t){o.set("BAIDU_TAXI_ORDER_ID",t.info.order_id,{expires:162e6}),o.set("BAIDU_TAXI_ORDER_START_TIME",Date.now()),LoadManager.loadPage("waiting",$.extend({},n,t.info)),a.addStat(STAT_CODE.TAXI_USERREQ,{addPrice:n.add_price})},error:function(t){switch(t.errno){case-121:c.open({text:"发单太频繁，请稍后再试",layer:!0});break;default:c.open({text:"系统错误！",layer:!0})}}});else switch(r){case-1:LoadManager.loadPage("verify",e.urlToJSON(n+"&referrer=home"));break;case-2:c.open({text:"请输入起点!",layer:!0});break;case-3:c.open({text:"请输入终点!",layer:!0})}},onFormInputClick:function(t){var i=$(t.currentTarget).find("input"),n=i.attr("name");this.$form.hide(),this.$inputPanel.show(),this.$inputPanel.attr("data-type",n),this.$inputPanel.find(".poi-input").val(i.val()).focus()},onBtnSettingsClick:function(){var t=o.get("BAIDU_TAXI_PHONE");t?LoadManager.loadPage("settings"):LoadManager.loadPage("verify")},onBtnBackToFormClick:function(){this.backToForm()},onBtnConfirmClick:function(){var t=this.$inputPanel.attr("data-type");this.$el.find("input[name="+t+"]").val(this.$inputPanel.find(".poi-input").val()),this.backToForm()},backToForm:function(){this.$inputPanel.find(".poi-input").val(""),this.$inputPanel.hide(),this.$form.show()},onGeoSuccess:function(t){var i,n=parseInt(t.addr.cityCode,10);this.cityList.indexOf(n)>-1?(this.getNearByCarInfo(t.point.x,t.point.y,n),i=t.addr,i=i.address||i.city+i.district+i.street,this.$routeStart.val(i)):c.open({text:"当前城市不支持打车！",layer:!0}),this.geoSuccess=!0},onGeoFail:function(){c.open({text:"定位失败\n请检查定位服务，以便将打车请求发您周边的司机!",layer:!0}),this.geoFail=!0},verifyInput:function(){var t=o.get("BAIDU_TAXI_PHONE"),i=this.$routeStart.val(),n=this.$routeEnd.val();return i?n?t?!0:-1:-3:-2},getNearByCarInfo:function(t,i,n){var e=this,a=this.$nearbyCarInfo;LoadManager.request({data:{qt:"nearby",lng:t,lat:i,city_code:n},success:function(r){var s,c=e.$el;a.addClass("loaded").find(".count").text(r.info.taxi_num),r.info.is_add_price&&1===r.info.is_add_price.flag&&(s=r.info.is_add_price.price_list)&&(s=s.split(":"),d.init(s),c.find("[type=input][name=add_price]").remove()),c.find("[name=taxi_num]").val(r.info.taxi_num),c.find("[name=lng]").val(t),c.find("[name=lat]").val(i),c.find("[name=city_code]").val(n),c.find("[name=price_list]").val(s),c.find("[name=phone]").val(o.get("BAIDU_TAXI_PHONE")),e.getNearbyCarInfoSuccess=!0},error:function(t){var i="";switch(t.errno){case-105:i="当前城市不支持打车！";break;default:i="系统错误！"}c.open({text:i,layer:!0})}})},getCityList:function(t){var i=this;LoadManager.request({data:{qt:"citylist",city_list:"all"},success:function(n){i.cityList=n.info,t()},error:function(t){var i="";switch(t.errno){case-101:i="参数错误！";break;default:i="系统错误！"}c.open({text:i,layer:!0})}})},onBtnBackClick:function(){window.location.href=document.referrer},destroy:function(){},init:function(){this.create(),this.getCityList($.proxy(r.init,r))}};n.exports=i});
;define("taxi:widget/common/radar/radar.js",function(t,i,e){"use strict";var i={create:function(){this.$el=$(".taxi-widget-radar"),this.$inner=this.$el.find(".inner"),this.currentStep=0,this.maxStep=9,this.timeperframe=150,this.$el.css({height:innerHeight-110+"px",visibility:"visible"})},start:function(){this.interval=setInterval($.proxy(this.oneMove,this),this.timeperframe)},oneMove:function(){var t=this.$inner,i=t.width();t.css("background-position-y",-(++this.currentStep%this.maxStep*i)+"px")},destroy:function(){clearInterval(this.interval),this.interval=-1},init:function(){this.create(),this.start()}};e.exports=i});
;define("taxi:widget/waiting/waiting.js",function(t,e,i){"use strict";var a=(t("common:static/js/util.js"),t("common:widget/cookie/cookie.js")),n=t("common:widget/stat/stat.js"),o=t("taxi:widget/common/radar/radar.js"),e={create:function(){var t=$(".taxi-widget-waiting"),e=t.find(".taxi-info .count"),i=this.options;e.text(i.taxi_num),this.$el=t},countDown:function(){var t,e,i,n=this,o=this.options,s=Math.min(parseInt(o.limit,10),parseInt(o.taxi_num,10)),r=this.$el,d=r.find(".pushed-car .count"),u=r.find(".second"),c=parseInt(a.get("BAIDU_TAXI_ORDER_START_TIME"),10),h=function(){t=parseInt(d.text(),10),e=parseInt(u.text(),10),t=Math.min(t+2,s),e-=1,d.text(t),u.text(e),0>=e?(n.destroy(),LoadManager.loadPage("resubmit",o)):n.timeout.push(setTimeout(h,1e3))};"number"!=typeof c||isNaN(c)||(i=120-Math.ceil((Date.now()-c)/1e3),0>i?(this.destroy(),LoadManager.loadPage("resubmit",o)):u.text(i)),this.timeout.push(setTimeout(h,1e3))},getCarReply:function(){var t,e=this,i=this.options,a=i.order_id;t=setInterval(function(){LoadManager.request({data:{qt:"driverreply",order_id:a},success:function(i){i.info&&(clearInterval(t),t=null,e.destroy(),LoadManager.loadPage("response",i.info),n.addStat(STAT_CODE.TAXI_DRIVERREPLY))},error:function(){}})},5e3),this.interval.push(t)},destroy:function(){var t,e,i=this.interval,a=this.timeout;for(t=0,e=i.length;e>t;t++)clearInterval(i[t]);for(t=0,e=a.length;e>t;t++)clearTimeout(a[t]);o.destroy()},init:function(){var t=this.options=LoadManager.getPageOptions();t||(this.destroy(),LoadManager.loadPage("home")),this.timeout=[],this.interval=[],this.create(),this.countDown(),this.getCarReply()}};i.exports=e});
;define("taxi:widget/resubmit/resubmit.js",function(e,i,t){"use strict";var o=e("common:static/js/util.js"),n=e("common:widget/popup/popup.js"),a=e("common:widget/stat/stat.js"),r=e("common:widget/cookie/cookie.js"),s=e("taxi:widget/common/addprice/addprice.js"),d=e("taxi:widget/common/radar/radar.js"),i={create:function(){var e,i=$(".taxi-widget-resubmit"),t=i.find(".btn-resubmit"),o=i.find(".btn-back"),n=i.find("form"),a=i.find(".addprice-wrapper"),r=this.options;r.price_list?(e=r.price_list.split(","),s.init(e),i.find("[type=input][name=add_price]").remove()):a.hide(),i.find("[name=city_code]").val(r.city_code),i.find("[name=order_id]").val(r.order_id),t.on("click",$.proxy(this.onBtnResubmitClick,this)),o.on("click",$.proxy(this.onBtnBackClick,this)),this.$el=i,this.$form=n},onBtnResubmitClick:function(){var e=$.extend({price_list:this.options.price_list,taxi_num:this.options.taxi_num},o.urlToJSON(this.$form.serialize()));n.open({text:"正在提交表单...",layer:!0,autoCloseTime:0}),LoadManager.request({data:$.extend({},e,{qt:"addpricereq"}),success:function(i){r.set("BAIDU_TAXI_ORDER_ID",i.info.order_id,{expires:162e6}),r.set("BAIDU_TAXI_ORDER_START_TIME",Date.now()),LoadManager.loadPage("waiting",$.extend({},e,i.info)),a.addStat(STAT_CODE.TAXI_ADDPRICEREQ)},error:function(e){var i="";switch(e.errno){case-304:i="订单已过期或结束！";break;case-113:i="请求过于频繁，请稍后再试！";break;default:i="系统错误！"}n.open({text:i,layer:!0,onClose:function(){r.remove("BAIDU_TAXI_ORDER_ID"),LoadManager.loadPage("home")}})}})},onBtnBackClick:function(){r.remove("BAIDU_TAXI_ORDER_ID")},destroy:function(){d.destroy()},init:function(){var e=this.options=LoadManager.getPageOptions(),i=r.get("BAIDU_TAXI_ORDER_ID");e&&i||LoadManager.loadPage("home"),this.create()}};t.exports=i});
;define("taxi:widget/response/response.js",function(e,t,o){"use strict";var i=(e("common:static/js/util.js"),e("common:widget/cookie/cookie.js")),n=e("common:widget/stat/stat.js"),t={create:function(){var e=this.$el=$(".taxi-widget-response"),t=this.$feedbackdialog=e.find(".feedbackdialog"),o=e.find(".btn-on-car"),i=e.find(".btn-not-come"),n=e.find(".btn-agreement"),a=e.find(".btn-end"),r=this.$dialogLayer=$("<div/>").addClass("taxi-widget-response-feedbackdialog-layer").hide().appendTo(document.body);t.appendTo(r),a.on("click",$.proxy(this.onBtnEndClick,this)),o.on("click",$.proxy(this.onBtnOnCarClick,this)),i.on("click",$.proxy(this.onBtnNotComeClick,this)),n.on("click",$.proxy(this.onBtnAgreementClick,this)),this.$responder=e.find(".responder")},showResponder:function(){var e=this.$responder.html(),t=this.options;e=e.replace(/\$\{([a-z_]+)\}/g,function(e,o){return t[o]}),this.$responder.html(e),this.$responder.show()},openDialog:function(){this.$feedbackdialog.show(),this.$dialogLayer.show()},closeDialog:function(){this.$feedbackdialog.hide(),this.$dialogLayer.hide()},onBtnEndClick:function(){this.openDialog()},onBtnOnCarClick:function(){var e=this;LoadManager.request({data:{qt:"ordercomment",order_id:this.orderId,comment_type:4},complete:function(){e.closeDialog(),i.remove("BAIDU_TAXI_ORDER_ID"),LoadManager.loadPage("home"),n.addStat(STAT_CODE.TAXI_ON_CAR)}})},onBtnNotComeClick:function(){var e=this;LoadManager.request({data:{qt:"ordercomment",order_id:this.orderId,comment_type:5},complete:function(){e.closeDialog(),i.remove("BAIDU_TAXI_ORDER_ID"),LoadManager.loadPage("home"),n.addStat(STAT_CODE.TAXI_NOT_COME)}})},onBtnAgreementClick:function(){var e=this;LoadManager.request({data:{qt:"ordercomment",order_id:this.orderId,comment_type:6},complete:function(){e.closeDialog(),i.remove("BAIDU_TAXI_ORDER_ID"),LoadManager.loadPage("home"),n.addStat(STAT_CODE.TAXI_AGREEMENT)}})},resizeFeedbackdialog:function(){this.$feedbackdialog.css({width:"270px",height:"210px",left:(window.innerWidth-270)/2+"px",top:(window.innerHeight-210)/2+"px"})},getTaxiPos:function(){var e,t=this,o=this.$el,i=o.find(".distance .count"),n=o.find(".rest-time .count");e=setInterval(function(){LoadManager.request({data:{qt:"taxipos",order_id:t.orderId},success:function(t){var o=t.info;i.text(o.distance),n.text(o.rest_time),o.is_arrived&&(clearInterval(e),e=-1)},error:function(){}})},5e3),this.interval=e},destroy:function(){clearInterval(this.interval),this.interval=-1},init:function(){var e=this.options=LoadManager.getPageOptions(),t=i.get("BAIDU_TAXI_ORDER_ID");e&&t||LoadManager.loadPage("home"),this.orderId=t,this.create(),this.showResponder(),this.resizeFeedbackdialog(),this.getTaxiPos()}};o.exports=t});
;define("taxi:widget/verify/verify.js",function(e,t,i){"use strict";var n=(e("common:static/js/util.js"),e("common:widget/cookie/cookie.js")),o=e("common:widget/popup/popup.js"),a=e("common:widget/stat/stat.js"),t={create:function(){var e=this.$el=$(".taxi-widget-verify"),t=this.$inputPhone=e.find(".input-phone"),i=this.$inputCode=e.find(".input-code"),n=this.$btnGetCode=e.find(".btn-get-code"),o=this.$btnVerifyPhone=e.find(".btn-verify-phone"),a=this.options;n.on("click",$.proxy(this.onBtnGetCodeClick,this)),o.on("click",$.proxy(this.onBtnVerifyPhoneClick,this)),t.on("keyup",$.proxy(this.onInputPhoneKeyup,this)),i.on("keyup",$.proxy(this.onInputCodeKeyup,this)),t.val(a.phone||""),Taxi.validatePhone(t.val())&&n.removeAttr("disabled"),this.$btnGetCode=n,this.$inputPhone=t},onBtnGetCodeClick:function(){var e,t=this,i=this.$btnGetCode,n=this.$inputPhone,a=60,r=i.text(),s=function(){i.text(a+"秒"),a--};i.attr("disabled","disabled"),n.attr("disabled","disabled"),LoadManager.request({data:{qt:"sendcode",phone:this.$inputPhone.val()},success:function(){s(),e=t.interval=setInterval(function(){0===a?(i.removeAttr("disabled"),n.removeAttr("disabled"),i.text(r),clearInterval(e),e=-1):s()},1e3)},error:function(e){var a="";switch(e.errno){case-201:a="请求太频繁，请60秒后重试！";break;case-101:a="参数错误！";break;default:a="系统错误！"}o.open({text:a,layer:!0,onClose:function(){i.removeAttr("disabled"),n.removeAttr("disabled"),i.text(r),clearInterval(t.interval),t.interval=-1}})}})},onBtnVerifyPhoneClick:function(){var e=this.$inputPhone.val(),t=this.$btnVerifyPhone,i=this.options,r=i.referrer;t.attr("disabled","disabled"),LoadManager.request({data:{qt:"verifycode",phone:e,code:this.$inputCode.val()},success:function(s){if(1===s.info.is_pass)switch(n.set("BAIDU_TAXI_PHONE",e,{expires:31536e6}),delete i.referrer,r){case"home":o.open({text:"正在发送打车请求...",layer:!0,autoCloseTime:0}),LoadManager.request({data:$.extend({},i,{qt:"userreq",phone:e}),success:function(e){n.set("BAIDU_TAXI_ORDER_ID",e.info.order_id,{expires:162e6}),n.set("BAIDU_TAXI_ORDER_START_TIME",Date.now()),LoadManager.loadPage("waiting",$.extend({},i,e.info))},error:function(e){-101===e.errno&&o.open({text:"请求参数错误！",layer:!0,onClose:function(){LoadManager.loadPage("home")}})}});break;case"settings":LoadManager.loadPage("home");break;default:LoadManager.loadPage("home")}else o.open({text:"验证码错误！",layer:!0});t.removeAttr("disabled"),a.addStat(STAT_CODE.TAXI_VERIFYCODE)},error:function(){t.removeAttr("disabled")}})},onInputPhoneKeyup:function(){Taxi.validatePhone(this.$inputPhone.val())?this.$btnGetCode.removeAttr("disabled"):this.$btnGetCode.attr("disabled","disabled")},onInputCodeKeyup:function(){Taxi.validatePhone(this.$inputPhone.val())&&Taxi.validateCode(this.$inputCode.val())?this.$btnVerifyPhone.removeAttr("disabled"):this.$btnVerifyPhone.attr("disabled","disabled")},destroy:function(){clearInterval(this.interval),this.interval=-1},init:function(){this.options=LoadManager.getPageOptions(),this.create()}};i.exports=t});
;define("taxi:widget/settings/settings.js",function(t,i,n){"use strict";var e=t("common:widget/cookie/cookie.js"),i=(t("common:widget/popup/popup.js"),{create:function(){var t=$(".taxi-widget-settings"),i=t.find(".input-phone"),n=t.find(".btn-modify"),o=t.find(".btn-help"),a=t.find(".btn-terms");i.val(e.get("BAIDU_TAXI_PHONE")),Taxi.validatePhone(i.val())||n.attr("disabled","disabled"),n.on("click",$.proxy(this.onBtnModifyClick,this)),i.on("keyup",$.proxy(this.onInputPhoneKeyup,this)),o.on("click",$.proxy(this.onArticleButtonClick,this)),a.on("click",$.proxy(this.onArticleButtonClick,this)),this.$el=t,this.$btnModify=n,this.$inputPhone=i},onArticleButtonClick:function(t){var i=t.currentTarget.className.split("-")[1];LoadManager.loadPage("about",{type:i})},onBtnModifyClick:function(){var t=this.$inputPhone.val();LoadManager.loadPage("verify",{phone:t,referrer:"settings"})},onInputPhoneKeyup:function(){Taxi.validatePhone(this.$inputPhone.val())?this.$btnModify.removeAttr("disabled"):this.$btnModify.attr("disabled","disabled")},init:function(){this.create()}});n.exports=i});
;define("taxi:widget/about/about.js",function(t,e,a){"use strict";var i=t("common:widget/stat/stat.js"),e={create:function(){var t=$(".taxi-widget-about"),e=t.find(".taxi-widget-nav"),a=this.options,o=a&&a.type;e.find(".title").text({help:"打车攻略",terms:"条款与声明"}[o]),t.find("."+o).show(),"help"===o?i.addStat(STAT_CODE.TAXI_HELP):i.addStat(STAT_CODE.TAXI_TERMS)},init:function(){this.options=LoadManager.getPageOptions(),this.options||popup.open({text:"系统异常",layer:!0,onClose:function(){LoadManager.loadPage("home")}}),this.create()}};a.exports=e});
;!function(e,t,a){"use strict";var o=require("common:widget/popup/popup.js"),i=require("common:widget/cookie/cookie.js"),r=require("common:static/js/util.js"),s={pageControllerMap:{home:require("taxi:widget/home/home.js"),waiting:require("taxi:widget/waiting/waiting.js"),resubmit:require("taxi:widget/resubmit/resubmit.js"),response:require("taxi:widget/response/response.js"),verify:require("taxi:widget/verify/verify.js"),settings:require("taxi:widget/settings/settings.js"),about:require("taxi:widget/about/about.js")},getPageOptions:function(){return r.urlToJSON(i.get("BAIDU_TAXI_PAGE_OPTIONS"))||{}},request:function(e){$.ajax({type:"POST",dataType:"json",url:"/mobile/webapp/taxi/api/"+r.jsonToQuery($.extend({},e.data,{api:2,os:"webapp"})),success:function(t){t&&0===t.errno?e.success&&$.isFunction(e.success)&&e.success(t):e.error&&$.isFunction(e.error)&&e.error(t)},error:function(t){o.open({text:"当前网络无法使用，请稍后重试！",layer:!0}),$.isFunction(e.error)&&t&&t.errno>0&&e.error()},complete:e.complete})},loadPage:function(e,a){var s,n,u,g=this,c=$("#wrapper");e=e||g.getPageState("lastPage")||"home",a&&("object"==typeof a&&(a=r.jsonToQuery(a)),i.set("BAIDU_TAXI_PAGE_OPTIONS",a)),s="taxi-pagelet-"+e,t.asyncLoad({id:s},a,function(){o.close(),$("<div/>").attr({id:s}).appendTo(c.html("")),g.getPageState("lastPage")!==e&&(n=g.getPageState("lastPage"),u=g.pageControllerMap[n],u&&u.destroy&&$.isFunction(u.destroy)&&u.destroy(),g.setPageState("lastPage",e))})},route:function(){var e,t=this;e=i.get("BAIDU_TAXI_ORDER_ID"),e?this.request({data:{qt:"orderstatus",order_id:e},success:function(e){var a=e.info&&e.info.status;switch(a){case-1:t.loadPage("resubmit");break;case 2:t.loadPage("response");break;case 1:t.loadPage("waiting");break;case 3:case-2:case 3:case 4:i.remove("BAIDU_TAXI_PAGE_STATE"),t.loadPage("home");break;default:i.remove("BAIDU_TAXI_PAGE_STATE"),t.loadPage("home")}t.setPageState("status",a),t.setPageState("existTime",e.info.exist_time)},error:function(){i.remove("BAIDU_TAXI_PAGE_STATE"),t.loadPage("home")}}):this.loadPage(this.getPageState("lastPage"))},getPageState:function(e){var t=r.urlToJSON(i.get("BAIDU_TAXI_PAGE_STATE"));return t&&t[e]},setPageState:function(e,t){var a=r.urlToJSON(i.get("BAIDU_TAXI_PAGE_STATE"));a[e]=t,i.set("BAIDU_TAXI_PAGE_STATE",r.jsonToQuery(a))},removePageState:function(e){this.setPageState(e,a)},init:function(){o.open({text:"正在加载...",layer:!0,autoCloseTime:0}),this.route()}};s.init(),e.LoadManager=s}(window,BigPipe);
;!function(){"use strict";var e,i=require("common:static/js/util.js");require("common:widget/popup/popup.js"),e={resize:function(){var e=$("#main"),i=$("header");e.height(window.innerHeight-i.height())},validatePhone:function(e){return/^1\d{10}$/g.test(e)},validateCode:function(e){return/^\d{4}$/g.test(e)}},"undefined"!=typeof window.onorientationchange?window.addEventListener("orientationchange",e.resize,!1):window.addEventListener("resize",e.resize,!1),i.isAndroid()&&window.addEventListener("resize",e.resize,!1),window.Taxi=e}();
;define("taxi:widget/common/nav/nav.js",function(a,n,t){var n={create:function(){var a=$(".taxi-widget-nav"),n=a.find(".btn-back");n.on("click",$.proxy(this.onBtnBackClick,this))},onBtnBackClick:function(a){var n=$(a.currentTarget),t=n.attr("data-back");t?LoadManager.loadPage(t):LoadManager.loadPage("home")},init:function(){this.create()}};t.exports=n});