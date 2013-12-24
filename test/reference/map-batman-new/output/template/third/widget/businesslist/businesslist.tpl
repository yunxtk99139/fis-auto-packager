{%style id="/widget/businesslist/businesslist.inline.less"%}.index-widget-bussinesslist{}.index-widget-bussinesslist .list{color:#3b3b3b;font-size:1em;background-color:#fff;border-top:1px solid #ddd;border-bottom:1px solid #fff}.index-widget-bussinesslist .list li .opt_btn{height:11px;width:16px;background:url(/static/third/images/setmyplace_icon_76e5911.png) -85px 0 no-repeat;-webkit-background-size:76px 59px}.index-widget-bussinesslist .list li em.opt_close{top:4px;right:-4px;background-position:-42px 0}.index-widget-bussinesslist .list li .opt_open{background-position:-58px 0;top:4px;right:-4px}.index-widget-bussinesslist .list li.sub_list{height:auto;padding:0;overflow:hidden}.index-widget-bussinesslist .list ul.sub_wrapper li{padding-left:0;background:#ebebeb;border-top:1px solid #f5f5f5}.index-widget-bussinesslist .list ul.sub_wrapper .opt{display:none}.index-widget-bussinesslist .list li{padding:0;background:#f7f7f7;border-bottom:1px solid #d9d9d9;color:#3b3b3b}.index-widget-bussinesslist .list h4{padding:16px 0 0 30px}.index-widget-bussinesslist .list ul h4{padding-left:44px}.index-widget-bussinesslist .list ul ul h4{padding-left:58px}.index-widget-bussinesslist .list ul.sub_wrapper li:first-child{border-top:1px solid #e2e2e2;-webkit-box-shadow:inset 0 3px 3px #C9C8C8;margin-top:-3px}.index-widget-bussinesslist .list ul.sub_wrapper li:last-child{-webkit-box-shadow:inset 0 -2px 3px #c9c8c8;border-bottom:0}.index-widget-bussinesslist .list .sub_list{border-top:0!important}.index-widget-bussinesslist ul.sub_wrapper .sub_wrapper li{background:#e2e2e2;border-top-color:#ececec;border-bottom-color:#dcdcdc;padding-bottom:0}.index-widget-bussinesslist ul.sub_wrapper .sub_wrapper li:first-child{border-top:1px solid #cacaca;-webkit-box-shadow:inset 0 3px 3px #C9C8C8;margin-top:-3px}.index-widget-bussinesslist .wrapper{padding-bottom:8px;background:#F7F7F7}.index-widget-bussinesslist .list{color:#3b3b3b;font-size:1em;background-color:#fff;border-top:1px solid #ddd;border-bottom:1px solid #fff}.index-widget-bussinesslist .list h4,.index-widget-bussinesslist .list p{-webkit-margin-before:0;-webkit-margin-after:0}.index-widget-bussinesslist .list li{min-height:34px;border-bottom:1px solid #ddd;background-color:#f7f7f7;position:relative;padding-bottom:11px}.index-widget-bussinesslist .list h4{padding:16px 0 0 30px}.index-widget-bussinesslist .list li.li_on{background-color:#D9D8D8}.index-widget-bussinesslist .list h4{font-size:15px;color:#3b3b3b;font-weight:700}.index-widget-bussinesslist .list li .opt{position:absolute;height:1.32em;right:20px;top:57%;margin-top:-.714em;padding-right:1.43em;text-align:right}.index-widget-bussinesslist .list li .opt2{position:absolute;height:1.32em;right:25px;top:22px;margin-top:-.714em;padding-right:8px;text-align:right;font-size:14px}.index-widget-bussinesslist .list li p,.index-widget-bussinesslist .list li h4{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.index-widget-bussinesslist .list li .opt em{position:absolute}.index-widget-bussinesslist .list li .opt .go_dtl{top:.143em;right:17px}.index-widget-bussinesslist .hide{display:none}{%/style%}{%* 商圈筛选页 *%}
{%$list = $data.content.sub%}
<div class="index-widget-bussinesslist">
<ul class="list">
<li class="top-title">
<h4>{%$data.content.area_name|f_escape_xml%}</h4>
<span class="opt"><em class="opt_btn opt_close"></em></span>
</li>
<li class="sub_list">
<ul class="sub_wrapper">
<li data-areacode = "{%$data.content.area_code|f_escape_xml%}" jsaction="complete">
<h4>
全市</h4>
</li>
{%foreach $list as $childindex=>$childitem%}
<li data-areacode = "{%$childitem.area_code|f_escape_xml%}" jsaction="{%if $childitem.sup_business_area == 1%}listsub{%else%}complete{%/if%}">
<h4>
{%$childitem.area_name|f_escape_xml%}
</h4>
</li>
{%/foreach%}
</ul>
</li>
</ul>
</div>
</div>
{%script%}
var listData = {%$data.content|json_encode|escape:"none"%}
require("third:widget/businesslist/businesslist.js").init(listData);
{%/script%}