{%style id="/widget/navethumbnail/navethumbnail.inline.less"%}.index-widget-navethumbnail {
  /* 我的位置页面，增加10px上边距，否则会和阴影重叠 -by jz */

  /**
     * 定位点样式
     */

}
.index-widget-navethumbnail .index-widget-thumbnail {
  background-color: #ededed;
}
.index-widget-navethumbnail .thumb {
  padding: 0px 8px 8px 8px;
  border-bottom: 1px solid #cecece;
}
.index-widget-navethumbnail .thumb-inner {
  border: 1px solid #dadada;
  position: relative;
  height: 101px;
  background-color: #ffffff;
  padding: 2px;
}
.index-widget-navethumbnail .pad .thumb-inner {
  display: none;
}
.index-widget-navethumbnail #mylocation-thumb .thumb-inner {
  display: block;
}
.index-widget-navethumbnail #mylocation-thumb .thumb {
  padding-top: 10px;
}
.index-widget-navethumbnail .thumb .map-btn {
  position: absolute;
  right: 0px;
  bottom: 0px;
  height: 31px;
  width: 31px;
  background-color: white;
}
.index-widget-navethumbnail .thumb .map-btn b {
  display: inline-block;
  margin: 7px 0 0 7px;
  height: 17px;
  width: 17px;
  background-position: 0px -52px;
}
.index-widget-navethumbnail .thumb .geo-btn {
  position: absolute;
  left: 6px;
  bottom: 6px;
  height: 36px;
  width: 36px;
  background-color: #f4f4f4;
  border: 1px solid #83837c;
  border-radius: 5px;
  -webkit-box-shadow: 1px 1px 1px #dddddd;
  /*-webkit-box-shadow:inset 0px 0px 4px #157cdb;*/

}
.index-widget-navethumbnail .thumb .geo-btn b {
  display: inline-block;
  margin: 6px 0 0 7px;
  height: 23px;
  width: 23px;
  background-position: 0px 0px;
}
.index-widget-navethumbnail .thumb .geo-fail {
  background-color: #f4f4f4;
}
.index-widget-navethumbnail .thumb .geo-fail b {
  background-position: 0px 0px;
}
.index-widget-navethumbnail .thumb .geo-btn.active {
  background-color: #eeeeee;
}
.index-widget-navethumbnail .thumb .geo-btn.active b {
  background-position: 0px 0px;
}
.index-widget-navethumbnail .thumb .view-map-btn {
  padding-top: 41px;
  color: #4197d3;
  font-size: 14px;
  margin: 0 auto;
}
.index-widget-navethumbnail .locbar {
  position: relative;
  padding: 6px 8px;
  border-bottom: 1px solid #a7a7a7;
}
.index-widget-navethumbnail .locbar-area {
  height: 28px;
  line-height: 28px;
  width: 100%;
}
.index-widget-navethumbnail .locbar-area .loc-icon {
  position: absolute;
  top: 13px;
  left: 15px;
  display: inline-block;
  width: 11px;
  height: 15px;
  background-position: 0px -73px;
}
.index-widget-navethumbnail .locbar .in-btn {
  position: absolute;
  top: 6px;
  right: 8px;
  display: inline-block;
  width: 65px;
  height: 27px;
  line-height: 27px;
  text-align: center;
  background-color: #f5f5f5;
  border: 1px solid #b2b2b3;
  font-size: 12px;
  color: #535353;
  border-radius: 2px;
}
.index-widget-navethumbnail .locbar .active {
  background-color: #efeeee;
}
.index-widget-navethumbnail .locbar .mypoi-txt {
  color: #5a5a5a;
  font-size: 12px;
  padding-left: 24px;
}
.index-widget-navethumbnail .error-cnt {
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  text-align: center;
}
.index-widget-navethumbnail .index-loc-pic {
  background: url(/static/index/images/index_loc.png) no-repeat 0 0;
  background-size: 24px 130px;
}
.index-widget-navethumbnail .center-marker {
  position: absolute;
  z-index: 200;
  -webkit-user-select: none;
  left: 50%;
  top: 50%;
}
.index-widget-navethumbnail .center-marker div {
  position: absolute;
  width: 14px;
  height: 14px;
  background-image: url("data:image/png;base64,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");
  background-repeat: no-repeat;
  -webkit-background-size: 13px 14px;
  top: -7px;
  left: -7px;
}
.index-widget-navethumbnail .navi-marker div {
  background-image: url("data:image/png;base64,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");
  -webkit-background-size: 30px 30px;
  background-size: 30px 30px;
  width: 30px;
  height: 30px;
  left: -15px;
  top: -15px;
}
{%/style%}<!-- @fileOverview 路线页缩略图模板(集成nearbystation) by yuanzhijia -->
<div class="index-widget-navethumbnail">
    <div id="route-pic" style="display:none">
        <div class="location-area">
            <div class="poipic-wrapper">
                <div class="poipic-area" style="position: relative; border: 1px solid #dadada;">
                    <div class="poipic routepic">
                        <div class="pic-area" id="poipic-area">
                            <a id="right-a"  href="/mobile/webapp/index/index/foo=bar/vt=map&traffic=on&showmygeo=1&forcesample=old_sample_1309">
                                <img id="mapimg" style="width: 100%; height: 100%;" src="">
                                <div style="text-align: center; position: absolute; right: 1px; bottom: 1px; height: 22px; line-height: 22px; width: 57px; background-color: white; font-size: 12px; color: #4a4a4a;">百度路况</div>
                            </a>
                            <div id="error-cnt" class="error-cnt" style="display:none;width: 100%; height: 100%;">
                                <p style="padding-top: 41px; color: #4197d3; font-size: 14px; margin: 0 auto;">
                                     <a style="color:#515a64" href="/mobile/webapp/index/index/foo=bar/vt=map&traffic=on&showmygeo=1&forcesample=old_sample_1309">
                                    点击查看地图
                                </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id ="nearbystation">
        <div class="route-wrapper">
            <div class="nb-station">
                <div class="nb-bus" id="nb-bus" style="display:none;">
                    <span>附近公交站：</span>
                    <span class="bs">
                        <span class="st station" data-title="bus">
                                <a href="" data-log="{code:{%$STAT_CODE.STAT_LINEINDEX_BUS_CLICK%}}"  id="busspan" style="color: #515a64;">
                                </a>
                        </span>
                    </span>
                </div>
                
                
                <div class="nb-subway" id="nb-subway" style="margin-top:11px;display:none;" >
                    <span>附近地铁站：</span>
                    <span class="ss">
                        <span class="st station" data-title="subway">
                             <a href="" style="color: #515a64;" id="stationspan" data-log="{code:{%$STAT_CODE.STAT_LINEINDEX_SUBWAY_CLICK%}}">
                             </a>
                        </span>
                    </span>
                </div>
                
            <a href="" id="subwayBtn" style="color: #515a64;display:none" data-log="{code:{%$STAT_CODE.STAT_LINEINDEX_SUBWAYBTN_CLICK%}}">
            <div class="sw-btn">
                <em class="route-pic"></em>
                <span>
                    <span class="city-name"></span>
                    <span id="cityNameCnt"></span>
                </span>
            </div>
            </a>
        </div>
    </div>
</div>
</div>
{%script%}
    (require("third:widget/navethumbnail/navethumbnail.js")).init();
{%/script%}