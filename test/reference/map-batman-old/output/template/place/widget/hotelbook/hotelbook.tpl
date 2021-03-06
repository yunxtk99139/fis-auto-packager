{%style id="/widget/hotelbook/hotelbook.inline.less"%}/**
*@require place:static/css/detail.less
*@require place:static/css/hotelbook.less
*/
/* 房型预订页样式 */
.place-widget-hotel-book-wraper {
  padding: 10px 8px;
}
/* --start-- 酒店预订房型列表页widget样式 --*/
.place-widget-hotel-book {
  border-radius: 5px;
  border: #838991 solid 1px;
  /* --start--正在获取实时精准房型数据页面样式--  */

  /* --end--正在获取实时精准房型数据页面样式--  */

  /*显示酒店名称和地址*/

  /* 日历 */

  /* --end-- 酒店预订房型列表页widget样式 --*/

}
.place-widget-hotel-book .hb-hd {
  padding: .8em .6em;
  border-bottom: 1px solid #ccced2;
  display: -webkit-box;
  -webkit-box-align: center;
}
.place-widget-hotel-book .tit-text {
  font: bold 15px "微软雅黑", "宋体";
}
.place-widget-hotel-book .hb-hd-tit {
  margin-left: 10px;
}
.place-widget-hotel-book .desc-text {
  font: 14px "微软雅黑", "宋体";
  color: #9f9f9f;
}
.place-widget-hotel-book .hb-des-icon {
  background: url("/static/place/widget/hotelbook/images/icon_guarantee_7881c55.png") no-repeat 0 0;
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
  margin-left: 5px;
  vertical-align: bottom;
}
.place-widget-hotel-book .hb-icon-qunar {
  width: 29px;
  height: 20px;
  background: url("/static/place/widget/hotelbook/images/qunar_logo_a04df26.png") no-repeat 0 0;
  display: inline-block;
  background-size: 29px 20px;
}
.place-widget-hotel-book .search {
  background-color: #f9f9f9;
  padding: 10px;
  -webkit-border-top-left-radius: 5px;
  -webkit-border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;
}
.place-widget-hotel-book .opt-search {
  overflow: hidden;
}
.place-widget-hotel-book .opt-search a {
  display: block;
  width: 100%;
  height: 100%;
  font-size: 16px;
  color: black;
  font-weight: bold;
  text-decoration: none;
}
.place-widget-hotel-book .date {
  position: relative;
  float: left;
  width: 50%;
  padding-right: 5px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.place-widget-hotel-book .arrow {
  content: '';
  position: absolute;
  top: 14px;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 6px solid #818181;
  z-index: 9;
}
.place-widget-hotel-book .text {
  float: left;
  line-height: 35px;
}
.place-widget-hotel-book .sd,
.place-widget-hotel-book .ed {
  background-color: white;
  height: 35px;
  padding: 8px 5px 8px 2px;
  border: solid 1px #ccc;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
}
.place-widget-hotel-book .tip {
  display: none;
  margin: 10px 0 5px;
  text-align: center;
}
.place-widget-hotel-book .date-active {
  border-color: #94bcdf;
}
.place-widget-hotel-book .date-active-arrow {
  border-top: none;
  border-bottom: 6px solid #1E51D6;
}
.place-widget-hotel-book .rooms {
  -webkit-border-bottom-left-radius: 5px;
  -webkit-border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding-bottom: 10px;
}
.place-widget-hotel-book .room-list {
  height: auto;
  overflow: hidden;
  background-color: #efefef;
}
.place-widget-hotel-book .room-item {
  height: 50px;
  line-height: 50px;
  padding: 0 10px;
  border-bottom: solid 1px #ccced2;
  position: relative;
  box-sizing: border-box;
}
.place-widget-hotel-book .hide {
  display: none;
}
.place-widget-hotel-book .room-item .arrow-icon {
  width: 20px;
  height: 21px;
  background: url("/static/place/images/hotelbook_icon_415304a.png") no-repeat 0px 2px;
  background-size: 20px 57px;
  float: left;
  margin-top: 14px;
}
.place-widget-hotel-book .room-item .arrow-icon-open {
  width: 20px;
  height: 21px;
  background: url("/static/place/images/hotelbook_icon_415304a.png") no-repeat 0px -19px;
  background-size: 20px 57px;
  float: left;
  margin-top: 14px;
}
.place-widget-hotel-book .room-item .room-type {
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
  margin-left: 5px;
  font: bold 15px "微软雅黑", "宋体";
  text-overflow: ellipsis;
}
.place-widget-hotel-book .room-item .special-price {
  background: url("/static/place/images/icon_special_price_60fee2a.png") no-repeat 0px 0px;
  background-size: 67px 21px;
  position: absolute;
  top: 14px;
  right: 75px;
  display: inline-block;
  width: 67px;
  height: 21px;
}
.place-widget-hotel-book .room-item .room-price {
  position: absolute;
  right: 30px;
  font-weight: normal;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fe8a01;
}
.place-widget-hotel-book .room-item .price-symbol {
  font-weight: bold;
  font-size: 10px;
  color: #fe8a01;
  vertical-align: top;
}
.place-widget-hotel-book .room-item .room-begin {
  position: absolute;
  right: 10px;
  font-weight: normal;
  font-size: 14px;
  font-family: "微软雅黑", "宋体";
  color: #999999;
}
.place-widget-hotel-book .room-item .room-book-over {
  position: absolute;
  right: 17px;
  font-weight: bold;
  font-size: 15px;
  font-family: "微软雅黑", "宋体";
  color: graytext;
}
.place-widget-hotel-book .show-all-room {
  height: 30px;
  line-height: 30px;
  background-color: #f2f2f2;
  border: solid 1px #adadad;
  border-radius: 4px;
  margin: 5px 5px 0 5px;
  text-align: center;
}
.place-widget-hotel-book .show-all-room > span:first-child {
  font-weight: normal;
  font-size: 15px;
  font-family: "微软雅黑", "宋体";
  text-overflow: ellipsis;
}
.place-widget-hotel-book .show-all-room > span:last-child {
  width: 5px;
  height: 13px;
  background: url("/static/place/images/hotelbook_icon_415304a.png") no-repeat 0 -47px;
  display: inline-block;
  margin-left: 15px;
  background-size: 20px 71px;
}
.place-widget-hotel-book .show-all-room-open {
  height: 30px;
  line-height: 30px;
  background-color: #f2f2f2;
  border: solid 1px #adadad;
  border-radius: 4px;
  margin: 5px 5px 0 5px;
  text-align: center;
}
.place-widget-hotel-book .show-all-room-open > span:first-child {
  font-weight: normal;
  font-size: 15px;
  font-family: "微软雅黑", "宋体";
  text-overflow: ellipsis;
}
.place-widget-hotel-book .show-all-room-open > span:last-child {
  width: 13px;
  height: 8px;
  background: url("/static/place/images/hotelbook_icon_415304a.png") no-repeat -6px -50px;
  display: inline-block;
  margin-left: 15px;
  background-size: 25px 71px;
}
.place-widget-hotel-book .ota-result {
  height: auto;
  background-color: #ffffff;
}
.place-widget-hotel-book .ota-info {
  border-bottom: solid 1px #e4e2dd;
  position: relative;
}
.place-widget-hotel-book .ota-info > div {
  height: 100%;
  max-width: 302px;
  position: relative;
  padding-top: 10px;
  padding-left: 12px;
}
.place-widget-hotel-book .ota-info > div > span {
  width: 130px;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 15px;
  font-weight: normal;
  font-family: Arial;
  color: #888888;
  margin-bottom: 6px;
}
.place-widget-hotel-book .ota-info .room-area span {
  width: 16px;
  height: 17px;
  background: url("/static/place/images/icon_hotel_room_6a7f060.png") no-repeat 0 0;
  display: inline-block;
  background-size: 16px 70px;
}
.place-widget-hotel-book .ota-info .room-bed-type span {
  width: 16px;
  height: 17px;
  background: url("/static/place/images/icon_hotel_room_6a7f060.png") no-repeat 0 -52px;
  display: inline-block;
  background-size: 16px 70px;
}
.place-widget-hotel-book .ota-info .room-floor span {
  width: 16px;
  height: 17px;
  background: url("/static/place/images/icon_hotel_room_6a7f060.png") no-repeat 0 -35px;
  display: inline-block;
  background-size: 16px 70px;
}
.place-widget-hotel-book .ota-info .room-internet span {
  width: 16px;
  height: 17px;
  background: url("/static/place/images/icon_hotel_room_6a7f060.png") no-repeat 0 -18px;
  display: inline-block;
  background-size: 16px 70px;
}
.place-widget-hotel-book .ota-list {
  height: auto;
  overflow: hidden;
}
.place-widget-hotel-book .ota-item {
  height: 70px;
  border-bottom: solid 1px #e4e2dd;
  position: relative;
}
.place-widget-hotel-book .ota-item > span {
  position: absolute;
}
.place-widget-hotel-book .ota-item > table {
  border-collapse: collapse;
  border-spacing: 0;
  position: absolute;
}
.place-widget-hotel-book .ota-item > table td {
  height: 100%;
  vertical-align: middle;
}
.place-widget-hotel-book .ota-item-tf {
  width: 150px;
  height: 100%;
  left: 0px;
  top: 0px;
}
.place-widget-hotel-book .ota-item-tf td {
  padding-left: 10px;
}
.place-widget-hotel-book .ota-item-ts {
  width: auto;
  height: 100%;
  right: 75px;
  top: 0px;
}
.place-widget-hotel-book .ota-item-ts td {
  text-align: right;
}
.place-widget-hotel-book .ota-name {
  width: 150px;
  font-size: 15px;
  font-weight: bold;
  font-family: "微软雅黑", "宋体";
  color: #333333;
}
.place-widget-hotel-book .ota-type {
  width: 150px;
  font-size: 14px;
  font-family: "微软雅黑", "宋体";
  color: #9f9f9f;
}
.place-widget-hotel-book .ota-price {
  right: 80px;
  top: 13px;
  color: #fe8a01;
}
.place-widget-hotel-book .ota-price > span:first-child {
  font-size: 14px;
  font-family: Arial;
}
.place-widget-hotel-book .ota-price > span:last-child {
  font-size: 16px;
  font-family: Arial;
  margin-left: -5px;
}
.place-widget-hotel-book .ota-coupon {
  right: 80px;
  top: 34px;
  height: 22px;
  background-color: #90cc77;
  box-sizing: border-box;
  padding: 3px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
}
.place-widget-hotel-book .ota-coupon > span {
  color: #ffffff;
  font-size: 14px;
}
.place-widget-hotel-book .ota-coupon > span:first-child {
  margin-right: -5px;
}
.place-widget-hotel-book .ota-bookbtn {
  right: 6px;
  top: 20px;
  width: 60px;
  height: 30px;
  background: url("/static/place/images/hotelbook_btn_new_5042bce.png") no-repeat 0 0;
  background-size: 60px;
}
.place-widget-hotel-book .ota-bookbtn-web {
  right: 6px;
  top: 20px;
  width: 60px;
  height: 30px;
  background: url("/static/place/images/hotelbook_btn_new_5042bce.png") no-repeat 0 -30px;
  background-size: 60px;
}
.place-widget-hotel-book .ota-bookbtn-tel {
  position: absolute;
  right: 6px;
  top: 20px;
  width: 60px;
  height: 30px;
  background: url("/static/place/images/hotelbook_btn_new_5042bce.png") no-repeat 0 -62px;
  background-size: 60px;
}
.place-widget-hotel-book .ota-bookbtn-over {
  right: 16px;
  top: 28px;
  font-weight: bold;
  font-size: 15px;
  font-family: "微软雅黑", "宋体";
  color: graytext;
}
.place-widget-hotel-book .show-all-ota {
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.place-widget-hotel-book .show-all-ota > span:first-child {
  font-size: 14px;
  font-family: "微软雅黑", "宋体";
  color: #6b6a6a;
}
.place-widget-hotel-book .show-all-ota > span:last-child {
  width: 10px;
  height: 12px;
  display: inline-block;
  background: url("/static/place/images/hotelbook_icon_415304a.png") no-repeat 3px -66px;
  background-size: 25px 78px;
}
.place-widget-hotel-book .show-all-ota-open {
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.place-widget-hotel-book .show-all-ota-open > span:first-child {
  font-size: 14px;
  font-family: "微软雅黑", "宋体";
  color: #6b6a6a;
}
.place-widget-hotel-book .show-all-ota-open > span:last-child {
  width: 16px;
  height: 10px;
  display: inline-block;
  background: url("/static/place/images/hotelbook_icon_415304a.png") no-repeat -8px -66px;
  background-size: 28px 80px;
}
.place-widget-hotel-book .guarantee {
  white-space: nowrap;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  color: #999999;
  padding-left: 20px;
  box-sizing: border-box;
  width: 265px;
  margin: 10px auto;
  background: url("/static/place/images/icon_guarantee_7881c55.png") no-repeat left center;
  background-size: 20px;
}
.place-widget-hotel-book .room-failed {
  height: 314px;
  padding-top: 142px;
  margin: 8px 0px;
  font-size: 15px;
  font-family: "微软雅黑", "宋体";
  color: #9d9d9d;
  border: solid 1px #838991;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-sizing: border-box;
  text-align: center;
}
.place-widget-hotel-book .room-failed > span:first-child {
  width: 30px;
  height: 30px;
  display: inline-block;
  background: url("/static/place/images/hotelbook_state_icon_0e07930.png") no-repeat 0 -30px;
  background-size: 30px 60px;
}
.place-widget-hotel-book .room-failed-kehuduan {
  height: 452px;
  padding-top: 211px;
  margin: 8px;
  font-size: 15px;
  font-family: "微软雅黑", "宋体";
  color: #9d9d9d;
  border: solid 1px #838991;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-sizing: border-box;
  text-align: center;
}
.place-widget-hotel-book .room-failed-kehuduan > span:first-child {
  width: 30px;
  height: 30px;
  display: inline-block;
  background: url("/static/place/images/hotelbook_state_icon_0e07930.png") no-repeat 0 -30px;
  background-size: 30px 60px;
}
.place-widget-hotel-book .ota-fetching {
  height: 70px;
  background-color: #ffffff;
  font-size: 14px;
  font-family: "微软雅黑", "宋体";
  color: #90cc77;
  box-sizing: border-box;
  padding: 20px 40px;
  text-align: center;
}
.place-widget-hotel-book .ota-fetching > span:first-child {
  width: 15px;
  height: 15px;
  display: inline-block;
  background: url("/static/place/images/hotelbook_state_icon_0e07930.png") no-repeat 0 0;
  background-size: 15px 30px;
}
.place-widget-hotel-book .ota-failed {
  height: 70px;
  background-color: #ffffff;
  font-size: 14px;
  font-family: "微软雅黑", "宋体";
  color: #9d9d9d;
  box-sizing: border-box;
  padding: 20px 0px;
  text-align: center;
}
.place-widget-hotel-book .ota-failed > span:first-child {
  width: 15px;
  height: 15px;
  display: inline-block;
  background: url("/static/place/images/hotelbook_state_icon_0e07930.png") no-repeat 0 -15px;
  background-size: 15px 30px;
}
.place-widget-hotel-book .place-widget-hotel-info {
  font-family: "微软雅黑", "宋体";
  margin-top: 5px;
  margin-left: 10px;
  margin-right: 10px;
}
.place-widget-hotel-book .place-widget-hotel-info p:first-child {
  font-size: 15px;
  font-weight: bold;
  color: #4e4e4e;
}
.place-widget-hotel-book .place-widget-hotel-info p:last-child {
  font-size: 14px;
  color: #747474;
  margin-top: 5px;
}
.place-widget-hotel-book .datepicker-wrap {
  overflow: hidden;
  height: auto;
  -webkit-transition: height 200ms ease-in-out;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.place-widget-hotel-book .datepicker-wrap p {
  padding: 5px 10px;
  font-weight: bold;
}
.place-widget-hotel-book .datepicker-wrap .ui-datepicker-header {
  background-color: #f1f1f1;
  padding: 5px 10px;
  border-bottom: dashed 1px #ccc;
}
.place-widget-hotel-book .datepicker-wrap > div {
  background: #fafafa;
  margin: 5px;
  border: solid 1px #94bcdf;
  display: none;
}
{%/style%}{%* 酒店预订房型列表页 *%}
{%if ($data.widget.hotelbook)%}
{%if $widget_data.errorNoRoom=="0" %}
<div class="place-widget-hotel-book">
    <div class="hb-hd">
        <span class="hb-icon-qunar"></span>
        <h3 class="tit-text hb-hd-tit">去哪儿</h3>
        <a class="des-text qunar-granantee" href="/mobile/webapp/place/guarantee" data-log="{code:{%$STAT_CODE.PLACE_HOTEL_GUARANTEE_CLICK%}, name:'{%$widget_data.content.name%}'}">（去哪儿网为您提供担保<span class="hb-des-icon"></span>）</a>
    </div>
    <div class="main">
        {%widget name="place:widget/hotelbook/roomlist.tpl"%}
        <div id="uid" class="hide">{%$widget_data.uid%}</div>
    </div>
</div>
{%script%}
var hotelbook = require("place:widget/hotelbook/hotelbook.js");
hotelbook.init();
{%/script%}
{%else%}
{%widget name="place:widget/hotelbook/roomlistfailed.tpl"%}
{%/if%}
{%/if%}


