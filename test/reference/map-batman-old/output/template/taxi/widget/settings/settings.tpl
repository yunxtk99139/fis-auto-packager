{%style id="/widget/settings/settings.inline.less"%}.taxi-widget-settings {
  height: 100%;
  box-sizing: border-box;
  padding-bottom: 65px;
  background: url(/static/taxi/images/bg_7ad6f23.png) no-repeat center bottom;
  background-size: contain;
  background-origin: content;
  -webkit-background-origin: content;
  -moz-background-origin: content;
  -o-background-origin: content;
}
.taxi-widget-settings .input-phone-wrapper {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  background: #f8f8f8;
  border-bottom: 1px solid #dcdcdc;
  padding: 12px 80px 13px 70px;
}
.taxi-widget-settings .input-phone {
  width: 100%;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px 5px;
  height: 35px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
.taxi-widget-settings .text,
.taxi-widget-settings .btn-modify {
  position: absolute;
  top: 12px;
}
.taxi-widget-settings .text {
  left: 10px;
  height: 35px;
  line-height: 35px;
  font-size: 16px;
  color: #333;
}
.taxi-widget-settings .btn-modify {
  right: 6px;
  width: 66px;
}
.taxi-widget-settings .extra-info {
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 10px;
  margin: 10px 8px;
  background: white;
}
.taxi-widget-settings .extra-info button {
  display: block;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  color: #333;
  width: 100%;
  background: white;
  text-align: left;
}
.taxi-widget-settings .extra-info button:first-child {
  border-bottom: 1px solid #ccc;
}
.taxi-widget-settings .partner {
  position: absolute;
  box-sizing: border-box;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 65px;
  padding-top: 5px;
  background: white;
}
.taxi-widget-settings .partner ul {
  overflow: hidden;
  width: 186px;
  margin: 8px auto;
}
.taxi-widget-settings .partner li {
  display: block;
  float: left;
  margin: 0px 5px;
}
.taxi-widget-settings .captain {
  font-size: 12px;
  text-align: center;
}
.taxi-widget-settings .logo {
  display: block;
  width: 20px;
  height: 20px;
  margin: 0 auto;
}
.taxi-widget-settings .name {
  display: block;
  font-size: 8px;
  line-height: 20px;
}
{%/style%}<div class="taxi-widget-settings">
    {%widget name="taxi:widget/common/nav/nav.tpl" title="设置" btnBack=true%}
    <div class="input-phone-wrapper">
        <span class="text">手机号</span>
        <input class="input-phone" type="text" placeholder="输入手机号" />
        <button class="btn-modify btn-h35">修改</button>
    </div>
    <div class="extra-info">
        <button class="btn-help">叫车攻略</button>
        <button class="btn-terms">条款与声明</button>
    </div>
    <div class="partner">
        <div class="captain">打车服务合作方</div>
        <ul>
            <li>
                <img class="logo" src="/static/taxi/widget/settings/images/logo-didi_3abbe2e.png" />
                <span class="name">嘀嘀打车</span>
            </li>
            <li>
                <img class="logo" src="/static/taxi/widget/settings/images/logo-kuaidi_4674e40.png" />
                <span class="name">快的打车</span>
            </li>
            <li>
                <img class="logo" src="/static/taxi/widget/settings/images/logo-dahuangfeng_737d272.png" />
                <span class="name">大黄蜂打车</span>
            </li>
        </ul>
    </div>
</div>
{%script%}
require('taxi:widget/settings/settings.js').init();
{%/script%}