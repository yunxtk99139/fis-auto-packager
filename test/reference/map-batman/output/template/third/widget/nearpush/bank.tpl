{%style id="/widget/nearpush/bank.inline.less"%}.index-widget-bank {
  padding: 13px 13px 6px 13px;
}
.index-widget-bank button {
  border: none;
  background: transparent;
  margin: 0;
  padding: 0;
}
.index-widget-bank .hd {
  position: relative;
}
.index-widget-bank .hd h2 {
  font-size: 14px;
  height: 36px;
  line-height: 38px;
  font-weight: 400;
  padding-left: 36px;
  background: url(/static/third/images/npush-icon_41fdc4d.png) 0 -59px no-repeat;
  background-size: 32px 315px;
}
.index-widget-bank .hd button {
  float: right;
  width: 71px;
  height: 30px;
  line-height: 28px;
  border: 1px solid #adadad;
  text-align: center;
  margin-top: 4px;
  color: #444D62;
  border-radius: 2px;
  box-shadow: 1px 2px 0px #f4f4f4;
  background-color: #F9F9F9;
  font-size: 13px;
}
.index-widget-bank .list {
  display: -webkit-box;
}
.index-widget-bank .list li {
  width: 20%;
  margin: 12px 0 16px;
}
.index-widget-bank .list li p {
  text-align: center;
  margin-top: 13px;
}
.index-widget-bank .icon {
  width: 29px;
  height: 29px;
  margin: 0 auto;
  background: url(/static/third/images/npush-icon-new_0c82978.png) no-repeat;
  background-size: 32px 340px;
  display: block;
}
.index-widget-bank .icbc {
  background-position: 1px -157px;
}
.index-widget-bank .abc {
  background-position: 1px -187px;
}
.index-widget-bank .cbc {
  background-position: 1px -248px;
}
.index-widget-bank .bc {
  background-position: 1px -220px;
}
.index-widget-bank .atm {
  background-position: 2px -278px;
}
{%/style%}<!-- @fileOverview 周边推荐美食widget容器 by jican -->
<div class="index-widget-bank"></div>
{%script%}
    (require("third:widget/nearpush/bank.js")).init("{%$pagename%}");
{%/script%}