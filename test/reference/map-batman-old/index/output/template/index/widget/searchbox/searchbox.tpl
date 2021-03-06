{%style id="/widget/searchbox/searchbox.inline.less"%}.index-widget-searchbox{background-color:#FFF}.index-widget-searchbox .se-tabs{height:50px;line-height:50px;background-color:#F2F2F2;font-size:15px;display:-webkit-box}.index-widget-searchbox .se-tab{width:2px;color:#D5D5D5;text-align:center;color:#000;background-color:#F2F2F2;border-bottom:1px solid #D4D4D4;display:block;-webkit-box-flex:1}.index-widget-searchbox .se-tab .new-se-tab-icon{background:url(/static/index/images/tabicon_600f854.png) no-repeat;background-size:35px 167px;display:inline-block;margin-right:9px;vertical-align:middle;margin-top:-5px;background-position:0 -18px}.index-widget-searchbox .se-tab .icon-l{height:35px;width:12px;background-position:0 10px}.index-widget-searchbox .se-tab .icon-m{height:30px;width:12px;background-position:0 -18px}.index-widget-searchbox .se-tab .icon-r{height:30px;width:14px;background-position:0 -43px}.index-widget-searchbox .se-tab-poi{background-color:#FFF;color:#000;border-bottom:1px solid #FFF;border-right:1px solid #D4D4D4;border-left:1px solid #D4D4D4}.index-widget-searchbox .se-form{padding:10px;background-color:#FFF;position:relative;top:2px;box-shadow:0 2px 3px -1px rgba(0,0,0,.18);-webkit-box-shadow:0 2px 3px -1px rgba(0,0,0,.18);z-index:11}.index-widget-searchbox .se-wrap{border:1px solid #9a9a9a;background:#fff;position:relative;height:36px;border:1px solid #6BB1F7}.index-widget-searchbox .se-inner{display:-webkit-box}.index-widget-searchbox .se-input{-webkit-box-flex:1;position:relative}.index-widget-searchbox .se-input-poi{color:#333;border:0;background:0;width:100%;padding:8px 5px}.index-widget-searchbox .se-btn{height:36px;width:49px;border-left:1px solid #9A9A9A;background:-webkit-gradient(linear,0 100%,0 0,from(#e7e7e7),to(#f5f5f5));border-left:1px solid #6BB1F7;background:#6BB1F7;color:#FFF;line-height:36px;text-align:center}.index-widget-searchbox .se-city{display:-webkit-box;width:68px;height:36px;-webkit-box-align:center;z-index:10000;line-height:36px;left:0}.index-widget-searchbox .se-city-wd{display:inline-block;height:22px;line-height:22px;white-space:nowrap;max-width:45px;overflow:hidden;text-overflow:ellipsis;font-size:14px;color:#343434;-webkit-border-radius:3px;padding:0 20px 0 5px;position:relative}.index-widget-searchbox .se-city-wd:after{content:"";position:absolute;width:7px;height:4px;top:9px;right:8px;background:url("data:image/gif;base64,R0lGODlhDQAHAIABAJqamv///yH5BAEAAAEALAAAAAANAAcAAAIPhI8XyeGs3GtSpoojrmAXADs=") no-repeat;background-size:7px 4px}{%/style%}
<div class="index-widget-searchbox">
<div class="se-tabs">
<a class="se-tab se-tab-map" href="/mobile/#index/index/foo=bar/vt=map"><span class="new-se-tab-icon icon-l"></span>地图</a>
<a class="se-tab se-tab-poi" href="javascript:void(0);"><span class="new-se-tab-icon icon-m"></span>周边</a>
<a class="se-tab se-tab-nav" href="javascript:void(0);" jsaction="toNavSearch"><span class="new-se-tab-icon icon-r"></span>路线</a>
</div>
<form class="se-form">
<div class="se-wrap">
<div class="se-inner">
<div class="se-input">
<input key="place" type="text" class="se-input-poi" id="se-input-poi" placeholder="搜索地点、公交车、路线"/>
</div>
<div class="se-btn" id="se-btn" user-data="se-btn">搜索</div>
</div>
</div>
</form>
</div>
{%script%}
    (require("index:widget/searchbox/searchbox.js")).init();
{%/script%}