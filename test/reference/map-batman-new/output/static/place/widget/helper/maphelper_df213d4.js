define("place:widget/helper/maphelper.js",function(e,t,i){var s=e("common:static/js/mapconst.js"),n=e("common:widget/url/url.js"),a=e("common:static/js/util.js"),r=(e("common:widget/geolocation/location.js"),e("common:static/js/searchdata.js")),o=e("place:widget/genericre/genericre.js").init(),l=e("common:widget/stat/stat.js");i.exports={_selectedIndex:-999,polylineStyles:[{stroke:6,color:"#3a6bdb",opacity:.65},{stroke:6,color:"#3a6bdb",opacity:.75},{stroke:4,color:"#30a208",opacity:.65},{stroke:5,color:"#3a6bdb",opacity:.65},{stroke:6,color:"#3a6bdb",opacity:.5},{stroke:4,color:"#30a208",opacity:.5,strokeStyle:"dashed"},{stroke:4,color:"#575757",opacity:.65,strokeStyle:"dashed"}],poiMarkers:[],transitLines:[],roadPolylines:[],transitPolylines:[],stationPoints:[],stationMarkers:[],init:function(t,i,s,a){this.mapView=t||e("common:widget/map/map.js"),this.BMap=i||e("common:widget/map/map.js"),this.map=this.mapView.getMap(),this.data=a&&a.content?a:s,this._selectedIndex=-999;var r=n.get(),o=r.query,l=r.pageState,c=l.i||0;delete l.vt,delete l.i;{var p=$.param(o)+"|"+$.param(l);this.mapView.displayId}this.mapView.clearOverlays(),this.addPoiOverlays(this.data,r),this.mapView.displayId=p,"string"==typeof c&&"uid"==c.split(",")[0]?this.selectHotspotMarker(c.split(",")[1]):this.selectPoiMarker(c)},addPoiOverlays:function(e,t){var i=this,n=this.BMap,a=this.map,r=this.mapView,o=t.query,l=(t.pageState,e.listInfo?e.listInfo.isShowAll:void 0),c=this.processMapData(e,t.pageState,l),p=c.currentCity?c.currentCity.code:1,h=[36,38,39];!c.isSharePoint&&c.points.length>0?(this.addPoiMarkers(c.points),r.iwController.get(s.IW_POI).setData(s.IW_POI,{json:c.content,cityCode:p}).switchTo(0),listener.on("infowindow."+s.IW_POI,"click",function(e,t){var i=t.id,s=t.data,n=t.instance;switch(i){case"iw-l":n.nbSearch(s.name,s.geo);break;case"iw-c":n.detailSearch(s.uid);break;case"iw-r":n.lineSearch(s.name,s.geo)}}),h.indexOf(c.resultType)>-1&&1==o.center_rank&&o.nb_x&&o.nb_y&&this.addCenterPoiMarker(new n.Point(o.nb_x,o.nb_y))):(i.poiMarkers=[],i.mapView.poiMarkers=[]),c.isSharePoint&&c.points.length>0&&(this.addSingleMarker(c.points[0],c.content[0]),r.iwController.get(s.IW_SHR).setData(s.IW_SHR,{json:c.content}).switchTo(0),listener.on("infowindow."+s.IW_SHR,"click",function(){})),c.isSingle||this.addGRHotspotsLayer(this.data),this.transitLines=c.transitLines,this.transitLines.length>0?this.addTransitPolyline(this.transitLines[0],function(e){r.setViewport(e.stationPoints.concat(c.points))}):r.setViewport(c.points),a.addEventListener("onvectorclick",function(e){var t=e.iconInfo;t.uid&&t.name&&t.point&&i.switchSelectedMarker(-999)})},processMapData:function(e,t,i){if(e){var n,r={points:[],content:[],transitLines:[],isSingle:!1,resultType:e.result.type,currentCity:e.current_city};n="undefined"!=typeof i?i||!(!t||1!=t.showall):!(!t||1!=t.showall),11!=r.resultType&&(n=!0);var o=e.content;if(o instanceof Array)for(var l=0;l<o.length;l++){var c=o[l];if(n||1==c.acc_flag)if(c.poiType!=s.POI_TYPE_BUSLINE&&c.poiType!=s.POI_TYPE_SUBLINE){var p=a.parseGeo(c.geo);r.points.push(a.getPointByStr(p.points)),r.content.push(c)}else r.transitLines.push(c)}else{if(!o.geo&&o.point){var h=o.point.replace("|",",");o.geo="1|"+h+";"+h+"|"+h,o.poiType=s.POI_TYPE_NORMAL,o.name=o.title,r.isSharePoint=!0}var p=a.parseGeo(o.geo);o.poiType!=s.POI_TYPE_BUSLINE&&o.poiType!=s.POI_TYPE_SUBLINE?(r.points.push(a.getPointByStr(p.points)),r.content.push(o)):r.transitLines.push(o),r.isSingle=!0}return r}},addPoiMarkers:function(e){for(var t=this,i=this.BMap,n=this.map,a=this.mapView,r=[],o=0,c=e.length;c>o;o++)!function(){var c=o,p=new i.Icon(s.MARKERS_PATH,new i.Size(21,30),{anchor:new i.Size(11,30),imageOffset:new i.Size(0,32*c)}),h=new a.CustomMarker(p,e[c],{className:"mkr_trans",isAnimation:!1,click:function(){l.addStat(COM_STAT_CODE.MAP_POI_MARKER_CLICK),t.selectPoiMarker(c+t.transitLines.length)}});n.addOverlay(h),r.push(h)}();return t.poiMarkers=r,t.mapView.poiMarkers=r,r},addGRHotspotsLayer:function(e){var t=this,i=this.mapView;e&&e.result&&e.result.type&&11!=e.result.type&&(t.grControl=i.grControl=o,o.setMapView(i),o.setGRData(e),o.onGRHotspotClick=function(){l.addStat(COM_STAT_CODE.MAP_GR_MARKER_CLICK),t.switchSelectedMarker(-999)})},addCenterPoiMarker:function(e){var t=this,i=this.BMap,n=this.map,a=this.mapView,r=new i.Icon(s.MARKERS_PATH,new i.Size(22,30),{anchor:new i.Size(11,30),imageOffset:new i.Size(29,320)}),o=new a.CustomMarker(r,e,{className:"mkr_trans",click:function(){l.addStat(COM_STAT_CODE.MAP_POI_MARKER_CLICK),t.setCenterMarker(-999)}});return n.addOverlay(o),o.setZIndex(250),this.centerPoiMarker=o,o},removeNbCenterMarker:function(){this.centerPoiMarker&&(this.map.removeOverlay(this.centerPoiMarker),this.centerPoiMarker=null)},addSingleMarker:function(e,t){var i=this.BMap,n=this.map,a=this.mapView,r=new i.Icon(s.MARKERS_PATH,new i.Size(23,32),{anchor:new i.Size(12,32),imageOffset:new i.Size(29,352)}),o=new a.CustomMarker(r,e,{className:"fix_gr_mk",click:function(){l.addStat(COM_STAT_CODE.MAP_POI_MARKER_CLICK),a.iwController.get(s.IW_POI).setData(s.IW_POI,{json:t}).switchTo(0)}});return n.addOverlay(o),o},addTransitPolyline:function(e,t){var i=this,n={qt:"bsl",uid:e.uid,c:e.area};r.fetch(a.jsonToUrl(n),function(e){for(var n=0;n<i.stationMarkers.length;n++)i.removePoiOverlay(i.stationMarkers[n]);for(var r=0;r<i.transitPolylines.length;r++)i.removeTransitPolyline(i.transitPolylines[r]);firstLine=e.content[0];var o=a.parseGeo(firstLine.geo);if(o&&2==o.type){var l=i.addPolyline(o.points,s.ROUTE_TYPE_BUS);i.transitPolylines.push(l)}if(firstLine&&firstLine.stations){i.stationPoints=[],i.stationMarkers=[];for(var c=firstLine.stations,p=0,h=c.length;h>p;p++){var d=a.parseGeo(c[p].geo);if(1==d.type){var f=a.getPoiPoint(d.points);i.stationPoints.push(f);var y=i.addStationMarker(f);i.stationMarkers.push(y)}}}t&&t({firstLine:firstLine,stationPoints:i.stationPoints})})},removePoiOverlay:function(e){{var t=(this.BMap,this.map);this.mapView}t.removeOverlay(e),e=null},removeTransitPolyline:function(e){var t=this.BMap,i=this.map,s=(this.mapView,$.inArray(e,this.transitPolylines));s>-1&&this.transitPolylines.splice(s,1),e&&e._decorativePolyline&&e._decorativePolyline instanceof t.Polyline&&(i.removeOverlay(e._decorativePolyline),e._decorativePolyline=null),i.removeOverlay(e),e=null},addPolyline:function(e,t){{var i=this.BMap,n=this.map;this.mapView}"undefined"==typeof t&&(t=0);var a=this.polylineStyles[t];if(a){var r={strokeWeight:a.stroke,strokeColor:a.color,strokeOpacity:a.opacity,strokeStyle:a.strokeStyle},o=new i.Polyline(e,r);if(o._routeType=t,n.addOverlay(o),t==s.ROUTE_TYPE_BUS){var l=new i.Polyline(e,{strokeWeight:a.stroke-2,strokeColor:"#fff",strokeOpacity:.3});o._decorativePolyline=l,n.addOverlay(l)}return o}},addStationMarker:function(e){var t=this.BMap,i=this.map,n=this.mapView,a=new t.Icon(s.DEST_MKR_PATH,new t.Size(11,11),{anchor:new t.Size(5,5),imageOffset:new t.Size(80,15)}),r=new n.CustomMarker(a,e,{className:"dest_mkr"});return i.addOverlay(r),r},selectHotspotMarker:function(e){var t=(this.BMap,this.map,this.mapView);o.setMapView(t),o.sendInfRequest(e)},selectPoiMarker:function(e){if(e=parseInt(e,10),!isNaN(e)){var t=(this.BMap,this.map,this.mapView);if(e-=this.transitLines.length,e=Math.min(e,this.poiMarkers.length-1),this._selectedIndex!=e){if(this.clearRoadPolylines(),this.grControl&&this.grControl.marker&&this.grControl.marker.hide(),e>-1){var i=t.iwController.get(s.IW_POI);i.switchTo(e),this.switchSelectedMarker(e);var r=i.getPoiData();r&&r.ty==s.GEO_TYPE_LINE&&this.addRoadPolylines(r),this.setCenterMarker(e)}else{var o=e+this.transitLines.length;this.transitLines[o]&&this.addTransitPolyline(this.transitLines[o],function(e){t.setViewport(e.stationPoints);var i=e.firstLine,r=i.stations[0],o=a.geoToPoint(r.geo);t.iwController.get(s.IW_BSL).setData(s.IW_BSL,{json:[{content:"<b>{0}</b>".format(i.name),uid:r.uid}],points:[{p:o.lng+","+o.lat}]}).switchTo(0),listener.on("infowindow."+s.IW_BSL,"click",function(e,t){var i=t.instance;l.addStat(COM_STAT_CODE.MAP_IW_BSL_DETAIL),n.update({module:"place",action:"detail",query:{foo:"bar"},pageState:{vt:"list",i:i.index}},{trigger:!0,queryReplace:!1,pageStateReplace:!0})})})}this._selectedIndex=e}}},setCenterMarker:function(e){if(this.centerPoiMarker)for(var t=0,i=this.poiMarkers.length;i>t;t++){var s=this.poiMarkers[t]._point,n=this.centerPoiMarker._point,a=s.lat.toString().slice(0,-1),r=s.lng.toString().slice(0,-1),o=n.lat.toString().slice(0,-1),l=n.lng.toString().slice(0,-1);if(a==o&&r==l)return void 0==e||e>-1&&e!=t?(this.centerPoiMarker.setZIndex(200),this.poiMarkers[t].setZIndex(150)):(this.centerPoiMarker.setZIndex(150),this.poiMarkers[t].setZIndex(200)),void 0}},switchSelectedMarker:function(e){if(this.poiMarkers){if(this._selectedIndex>=0){var t=new BMap.Icon(s.MARKERS_PATH,new BMap.Size(21,30),{anchor:new BMap.Size(11,30),imageOffset:new BMap.Size(0,32*this._selectedIndex)});this.poiMarkers[this._selectedIndex]&&(this.poiMarkers[this._selectedIndex]._div.className="",this.poiMarkers[this._selectedIndex].setIcon(t),this.poiMarkers[this._selectedIndex].setZIndex(200))}if(0>e||e>=this.poiMarkers.length)this._selectedIndex=-999;else{var t=new BMap.Icon(s.MARKERS_PATH,new BMap.Size(26,36),{anchor:new BMap.Size(13,36),imageOffset:new BMap.Size(58,40*e)});this.poiMarkers[e]._div.className="mkr_trans",this.poiMarkers[e].setIcon(t),this.poiMarkers[e].setZIndex(300),this._selectedIndex=e}for(var i=0,n=this.poiMarkers.length;n>i;i++)this.poiMarkers[i]._div.className="mkr_trans"}},addRoadPolylines:function(e){var t=this,i=(this.BMap,this.map,this.mapView,{qt:"ext",uid:e.uid,c:e.area,l:18});r.fetch(a.jsonToUrl(i),function(e){if(e&&e.content&&e.content.geo){var i=a.parseGeo(e.content.geo);if(2==i.type)if("string"==typeof i.points)t.roadPolylines.push(t.addPolyline(i.points));else for(var s=0,n=i.points.length;n>s;s++)i.points[s]&&t.roadPolylines.push(t.addPolyline(i.points[s]))}})},clearRoadPolylines:function(){if(this.roadPolylines){for(var e=0,t=this.roadPolylines.length;t>e;e++)this.removeTransitPolyline(this.roadPolylines[e]),this.roadPolylines[e]=null;this.roadPolylines=[]}}}});