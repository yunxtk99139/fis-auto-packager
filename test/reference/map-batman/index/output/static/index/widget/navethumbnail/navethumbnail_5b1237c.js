define("index:widget/navethumbnail/navethumbnail.js",function(t,e,i){var n=t("common:widget/broadcaster/broadcaster.js"),a=t("common:static/js/util.js"),o=(t("common:widget/geolocation/geolocation.js"),t("common:widget/geolocation/location.js")),s=t("common:static/js/searchdata.js"),r=t("common:widget/stat/stat.js"),c={type:"0,2",level:16,height:101,width:window.innerWidth-22,url:null,host:"http://snap.map.baidu.com/?qt=snap&data="},u=window._CURRENT_CITY,h=u.name;a.showLoading($("#poipic-area")),i.exports={init:function(){this.render(),this.bind()},render:function(){this.thumbImage=$("#mapimg"),this.errorCnt=$(".error-cnt"),this.thumbImageA=$("#right-a"),this.subwayBtn=$("#subwayBtn"),this.cityNameCnt=$("#cityNameCnt"),this.nearbus=$("#nb-bus"),this.nearbusspan=$("#busspan"),this.nearsubway=$("#nb-subway"),this.nearsubwayspan=$("#stationspan"),this.imgcon=$("#route-pic")},bind:function(){var t=this;n.subscribe("geolocation.mylocsuc",function(){t.setLocation()},this),n.subscribe("geolocation.fail",function(){t.thumbImageA.hide(),t.errorCnt.show()},this),n.subscribe("sizechange",function(){t._appReSize()},this),t._trafficsubway()},_trafficsubway:function(){var t=this;if("全国"!=h){t.imgcon.show(),t._setThumbUrl();var e=a.ifSupportSubway(o.getCityCode());if(e){var i=e.split(",");t.subwayBtn.attr("href","/mobile/webapp/subway/show/city="+i[0]+"/ref=index"),t.cityNameCnt.html(i[1]+"市地铁线路图"),t.subwayBtn.show(),r.addStat(STAT_CODE.STAT_LINEINDEX_SUBWAYBTN_DISPLAY)}else t.subwayBtn.hide()}},_appReSize:function(){var t=this;a.isAndroid()?setTimeout(function(){c.width=window.innerWidth-22},800):c.width=window.innerWidth-22,t._setThumbUrl()},setLocation:function(){var t=this;o.getMyCityCode()==u.code&&t._getNearbyData()},_setThumbUrl:function(){var t=this,e=t._getThumbUrl();t.thumbImage.attr("src",e),a.hideLoading($("#poipic-area"))},_getThumbUrl:function(){c.level=0==c.type?"全国"==o.getCity()?3:o.hasExactPoi()?16:10:10;var t;u?(JSONdata=u.geo,cityPoint=a.geoToPoint(JSONdata),t={x:0,y:0},t.x=cityPoint.lng,t.y=cityPoint.lat):t=o.getCenterPoi();var e={retype:1,src:"webapp",level:c.level,center:t.x+" "+t.y,height:101,width:c.width,coordtype:"M",pictype:c.type};return c.host+JSON.stringify(e)},_getNearbyData:function(){var t=this,e=$.param(t._getQueryByWd("公交站").query),i=$.param(t._getQueryByWd("地铁站").query);s.fetch(e,$.proxy(t._cbGetBusStation,this)),s.fetch(i,$.proxy(t._cbGetSubwayStation,this))},_getQueryByWd:function(t){var e={qt:"s",wd:t,c:o.getMyCityCode()},i={};return e.center_rank=1,e.nb_x=o.getMyPointX(),e.nb_y=o.getMyPointY(),{query:e,pageState:i}},_cbGetBusStation:function(t){var e=this;if(void 0!=t&&0!=t.content.length){var i=t.content[0]||"";e.nearbusspan.text(i.name+"-公交站"),e.nearbusspan.attr("href","/mobile/webapp/place/detail/qt=inf&uid="+i.uid+"&c="+o.getMyCityCode()+"/tab=line"),e.nearbus.show(),r.addStat(STAT_CODE.STAT_LINEINDEX_BUS_DISPLAY)}},_cbGetSubwayStation:function(t){var e=this;if(void 0!=t&&0!=t.content.length){for(var i=void 0,n=0,a=t.content.length;a>n;n++){var s=t.content[n],c=3==s.poiType,u=s.blinfo&&0!=s.blinfo.length;if(c&&u){i=t.content[n];break}}if(void 0!=i){var h=i||"",b=h.name+"-地铁站";e.nearsubwayspan.text(b),e.nearsubwayspan.attr("href","/mobile/webapp/place/detail/qt=inf&uid="+h.uid+"&c="+o.getMyCityCode()+"/tab=line"),e.nearsubway.show(),r.addStat(STAT_CODE.STAT_LINEINDEX_SUBWAY_DISPLAY)}}}}});