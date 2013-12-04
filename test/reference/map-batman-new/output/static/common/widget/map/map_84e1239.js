define("common:widget/map/map.js",function(e,t,i){var o=e("common:static/js/mapconst.js"),n=e("common:widget/pagemgr/pagemgr.js"),a=e("common:static/js/util.js"),r=e("common:widget/url/url.js"),s=e("common:widget/appresize/appresize.js"),l=e("common:widget/geolocation/location.js"),c=e("common:widget/map/iwcontroller.js"),d=e("common:widget/stat/stat.js");i.exports={MARKERS_PATH:"/mobile/simple/static/common/images/markers_d2cfab5.png",DEST_MKR_PATH:"/mobile/simple/static/common/images/dest_mkr_4dfb043.png",NAVI_MKR_PATH:"/mobile/simple/static/common/images/navigation_d11feb4.png",DRV_DIRECTION_PATH:"/mobile/simple/static/common/images/drv_dest_a021ac0.png",DRV_KEY_POI_PATH:"/mobile/simple/static/common/images/drv_pin_c99bbd5.png",BUS_DIRECTION_PATH:"/mobile/simple/static/common/images/bus_direction_d783d51.png",_initialized:!1,driveRoutes:[],destPois:[],init:function(t){var i=this;i._initialized?(i.show(),t&&t(i._BMap),i.trafficControl.update()):(e("common:widget/monitor/maplog.js").init(),listener.trigger("common.map","start"),i.getAsyncWidget(function(){var e=i._BMap=arguments[0];listener.trigger("common.map","jsloaded"),$.each(arguments,function(e,t){t._className_&&(/InfoWindow/.test(t._className_)?c[t._className_]=t:i[t._className_]=t)}),i._initMap(),t&&t(e),i._initialized=!0}))},setVector:function(){this.map.config.vectorMapLevel=12},setTiles:function(){this.config.vectorMapLevel=99,window._WISE_INFO&&window._WISE_INFO.netspeed<=300&&this.map.enableHighResolution()},setViewport:function(e,t){var i=this._map.getViewport(e,t),o=i.center,n=i.zoom;this._centerAndZoom(o,n)},_centerAndZoom:function(e,t){e&&t||(e=new BMap.Point(l.getPointX(),l.getPointY()),t=l.getLevel()),this._map.enableLoadTiles=!0,this._map.centerAndZoom(e,t)},_initMap:function(){this.DEST_MARKER_SIZE=new this._BMap.Size(29,35),this.DEST_MARKER_ANCHOR=new this._BMap.Size(15,34),this.DEST_DRIVER_DIR_SIZE=new this._BMap.Size(18,18),this.show();var e=this._map=new this._BMap.Map("map-holder",{maxZoom:18,minZoom:3,drawMargin:0,enableFulltimeSpotClick:!0,enableHigholution:!1,vectorMapLevel:12});e.enableLoadTiles=!1,e.enableInertialDragging(),this._bind(),this._initControl(),this._mapClick(),listener.trigger("common.map","init",e)},hide:function(){$(".common-widget-map").css("visibility","hidden")},show:function(){s.update(),$(".common-widget-map").css("visibility","visible"),this._fixCenterPos()},_bind:function(){var e=this,t=this._map,i=this._BMap;listener.on("common.geolocation","success",function(t,o){var s=r.get(),c=s.module,d=s.action,m=s.pageState||{},_=n.isLandingPage(),h=new i.Point(o.point.x,o.point.y);o.isExactPoi&&null!=o.type&&(o.isInitGeo===!1||1==m.showmygeo||"index"==c&&"index"==d&&_)&&!l.isUserInput()?e.addGLCenter(h):null==o.type&&void 0!=e.geolocationMarker&&l.isUserInput()&&(e._map.removeOverlay(e.geolocationMarker),e.geolocationMarker=void 0);var p=o.addr.accuracy;null!==p&&e.addGLCircle(h,p),(o.isInitGeo===!1||1==m.showmygeo||"index"==c&&"index"==d&&_)&&e._map.centerAndZoom(h,l.getLevel()),a.isIPad()&&(o.isExactPoi&&null!=o.type&&"index"==c&&"index"==d?e.addGLCenter(h):e.iwController.get().hide(),"index"==c&&"index"==d&&e._map.centerAndZoom(h,l.getLevel()))},this),t.addEventListener("ontilesloaded",function(){e._addLazyControl(),t.removeEventListener("ontilesloaded",arguments.callee)}),t.addEventListener("onvectorloaded",function(){e._addLazyControl(),t.removeEventListener("onvectorloaded",arguments.callee)}),e.addControlTimer=window.setTimeout(function(){e._addLazyControl()},3e3),listener.on("common.page","switchend",function(){}),listener.on("common.page","pageloaded",function(){/map/.test(window._APP_HASH.page)||e.hide()})},_mapClick:function(){var e=this,t=this._map;listener.on("infowindow."+o.IW_VCT,"click",function(e,t){var i=t.id,o=t.data,n=t.instance;switch(i){case"iw-l":n.nbSearch(o.name,o.geo);break;case"iw-c":n.detailSearch(o.uid);break;case"iw-r":n.lineSearch(o.name,o.geo)}}),t.addEventListener("onvectorclick",function(i){var n=e.iwController.get();if(!n||!n.skipClickHandler){var a=i.iconInfo;if(a.uid&&a.name&&a.point){d.addStat(COM_STAT_CODE.MAP_VECTOR_MARKER_CLICK);var r=t.pixelToPoint(a.point);n=e.iwController.get(o.IW_VCT),n.setData(o.IW_VCT,{json:[{uid:a.uid,name:a.name,geo:"1|"+r.lng+","+r.lat}]}).switchTo(0)}}}),t.addEventListener("click",function(){var t=e.iwController.get();t&&(t.handled?(t.handled=!1,t.skipClickHandler=!0):(t.skipClickHandler=!1,t.hide()))}),t.addEventListener("touchstart",function(){e.menuControl&&e.menuControl.hideMenuDrop(),e.geoControl&&e.geoControl.hideInfoBar()})},_addSyncControl:function(){var e=this._BMap,t=this._map;if(this.isMyCenter()){var i=l.getCenterPoi(),o=new e.Point(i.x,i.y),n=l.getAccuracy();this.addGLOverlay(o,n)}this.lineStepControl=new this.LineStepControl,t.addControl(this.lineStepControl),this.lineStepControl.hide(),this.iwController=c.init(t),t.addOverlay(this.iwController.get())},_addLazyControl:function(){if(!this._isAddControl){this._isAddControl=!0;var e=this._map;e.addControl(this.trafficControl),e.addControl(this.zoomControl),!a.isIPad()&&e.addControl(this.menuControl),e.addControl(this.geoControl),e.addControl(this.scaleControl),listener.trigger("common.map","addlazycontrol")}},_initControl:function(){var e=this,t=(this._map,this._BMap);this.trafficControl=new this.TrafficControl,this.trafficControl.addEventListener("click",function(t){d.addStat(COM_STAT_CODE.MAP_TRAFFIC_MARKER_CLICK);var i=e.iwController.get(o.IW_TFC);i.setData(o.IW_TFC,{json:[t.data]}).switchTo(0),e._singleMarker&&e._singleMarker.hide(),e.grMarker&&e.grMarker.hide()}),this.trafficControl.addEventListener("removelayer",function(){e.iwController.get(o.IW_TFC).hide()}),this.zoomControl=new this.ZoomControl,a.isIPad()||(this.menuControl=new this.MenuControl),this.geoControl=new this.GeoControl;var i=BMAP_ANCHOR_BOTTOM_LEFT,n=new t.Size(52,22);a.isIPad()&&(i=BMAP_ANCHOR_BOTTOM_RIGHT,n=new t.Size(16,16)),this.scaleControl=new t.ScaleControl({anchor:i,offset:n}),this._addSyncControl()},getAsyncWidget:function(t){e.async(["common:widget/api/api.js","common:widget/api/ext/circleoverlay.js","common:widget/api/ext/basecontrol.js","common:widget/api/ext/custommarker.js","common:widget/api/ext/geocontrol.js","common:widget/api/ext/linestepcontrol.js","common:widget/api/ext/menucontrol.js","common:widget/api/ext/zoomcontrol.js","common:widget/api/ext/trafficcontrol.js","common:widget/api/ext/userheading.js","common:widget/api/ext/poiinfowindow.js","common:widget/api/ext/trsinfowindow.js","common:widget/api/ext/tfcinfowindow.js"],t)},isMyCenter:function(){var e=l.getCenterPoi(),t=l.getMyCenterPoi();return l.hasExactPoi()&&!l.isUserInput()&&t&&t.x==e.x&&t.y==e.y?!0:!1},getBMap:function(){return this._BMap},getMap:function(){return this._map},getInfoWindow:function(e){return this.iwController.get(e)},getLineStepControl:function(){return this.lineStepControl},openGeoIw:function(){var e=l.getMyCenterPoi(),t=this.iwController.get(o.IW_CNT);t.setData(o.IW_CNT,{json:[{name:o.MY_GEO,html:"<b>{0}</b><p>{1}</p>".format(o.MY_GEO,l.getAddress()),geo:"1|"+e.x+","+e.y}]}).switchTo(0)},_bindGeoIWEvent:function(){listener.on("infowindow."+o.IW_CNT,"click",function(e,t){var i=t.id,o=t.data,n=t.instance;switch(i){case"iw-l":n.nbSearch(o.name,o.geo);break;case"iw-c":r.update({module:"index",action:"mylocation"},{trigger:!0,queryReplace:!0,pageStateReplace:!0});break;case"iw-r":n.lineSearch(o.name,o.geo)}})},_fixCenterPos:function(){var e=this;setTimeout(function(){e.geolocationMarker&&e.geolocationMarker.draw()},100)},addGLCenter:function(e){var t=this,i=this._map,o=this._BMap;if(this.geolocationMarker)this.geolocationMarker.setPoint(e);else{var n=new o.Icon(this.DEST_MKR_PATH,new o.Size(14,14),{anchor:new o.Size(7,7),imageOffset:new o.Size(80,0)}),a=new this.CustomMarker(n,e,{className:"dest_mkr",click:function(){d.addStat(COM_STAT_CODE.MAP_GEOLOCATION_MARKER_CLICK),t.openGeoIw()}});a.enableMassClear=!1,i.addOverlay(a),this.geolocationMarker=a,this.addUserHeading(a),this._bindGeoIWEvent(),this._fixCenterPos()}return listener.trigger("common.map","addcenter"),this.geolocationMarker},addUserHeading:function(e){e&&this.UserHeading.isSupport()&&!l.isUserInput()&&(e.setIcon(new BMap.Icon(this.NAVI_MKR_PATH,new BMap.Size(38,40),{anchor:new BMap.Size(19,20)})),e.setClassName("navi_mkr"),this.UserHeading.start(e.getContainer()))},addGLCircle:function(e,t){if(this.geolocationCircle)this.geolocationCircle.setInfo(e,t);else{var i=new this.CircleOverlay(e,t);this._map.addOverlay(i),this.geolocationCircle=i}return this.geolocationCircle},addGLOverlay:function(e,t){var i,o=this.addGLCenter(e);return null!==t&&this.addGLCircle(e,t),{center:o,circle:i}},clearOverlays:function(){this.grControl&&this.grControl.clearCache();var e=this.iwController.get();e&&e.hide(),this.lineStepControl&&this.lineStepControl.hide(),this._map.clearOverlays()},removeOverlayInArray:function(e){for(var t=0;t<e.length;t++)this._map.removeOverlay(e[t]);e=[]},addRoute:function(e,t){var i=o.ROUTE_DICT;if("undefined"==typeof t&&(t=0),i[t]){var n=i[t];e.length;var a={strokeWeight:n.stroke,strokeColor:n.color,strokeOpacity:n.opacity,strokeStyle:n.strokeStyle},r=new this._BMap.Polyline(e,a);if(this._map.addOverlay(r),r._routeType=t,t==o.ROUTE_TYPE_BUS){var s=new this._BMap.Polyline(e,{strokeWeight:n.stroke-2,strokeColor:"#fff",strokeOpacity:.3});r._p=s,this._map.addOverlay(s)}return r}},addDriveRoute:function(e){var t=this.addRoute(e,o.ROUTE_TYPE_DRIVE);return this.driveRoutes.push(t),t},removeDriveRoute:function(){this.removeOverlayInArray(this.driveRoutes)},removeRoute:function(e){e&&e._p instanceof this._BMap.Polyline&&(this._map.removeOverlay(e._p),e._p=null),this._map.removeOverlay(e),e=null},selectRoute:function(e){if(e instanceof this._BMap.Polyline){var t=["#ff0103","#ff0103","#ff0103","#ff0103","#ff0103","#ff0103","#ff0103"];t[e._routeType]&&(e.setStrokeColor(t[e._routeType]),e.draw())}},unselectRoute:function(e){if(e instanceof this._BMap.Polyline){var t=["#3a6bdb","#3a6bdb","#30a208","#3a6bdb","#3a6bdb","#30a208","#575757"];t[e._routeType]&&(e.setStrokeColor(t[e._routeType]),e.draw())}},addKeyPoiMarker:function(e,t,i){var o=a.getPoiPoint(e);if(o){var n=i?0:22,r=new this._BMap.Icon(this.DRV_KEY_POI_PATH,new this._BMap.Size(24,22),{anchor:new this._BMap.Size(12,22),imageOffset:new this._BMap.Size(0,n)}),s=new this.CustomMarker(r,o),l=document.createElement("div");return l.className="nplb",l.style.width=t.length+"em",l.innerHTML=t,this._map.addOverlay(s),s._div.appendChild(l),s}},addDirectionMarker:function(e,t){var i=a.getPoiPoint(e);if(i){(0>t||t>12)&&(t=0);var o=18*t,n=new this._BMap.Icon(this.DRV_DIRECTION_PATH,this.DEST_DRIVER_DIR_SIZE,{anchor:new this._BMap.Size(9,9),imageOffset:new this._BMap.Size(o,0)}),r=new this.CustomMarker(n,i,{className:"drv_dest"});return this._map.addOverlay(r),r}},addDestPoi:function(e,t){if(e=a.getPoiPoint(e)){var i=new this._BMap.Icon(this.DEST_MKR_PATH,this.DEST_MARKER_SIZE,{anchor:this.DEST_MARKER_ANCHOR,imageOffset:new this._BMap.Size(29*t,0)}),o=new this.CustomMarker(i,e,{className:"dest_mkr"});return this._map.addOverlay(o),o.setZIndex(400),this.destPois.push(o),o}},removeDestPoi:function(){this.removeOverlayInArray(this.destPois)}}});