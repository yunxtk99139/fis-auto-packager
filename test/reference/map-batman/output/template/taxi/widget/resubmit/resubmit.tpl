{%style id="/widget/resubmit/resubmit.inline.less"%}.taxi-widget-resubmit {
  position: relative;
  overflow: hidden;
  height: 100%;
  box-sizing: border-box;
}
.taxi-widget-resubmit .addprice-wrapper {
  position: absolute;
  box-sizing: border-box;
  padding-top: 11px;
  width: 100%;
  height: 72px;
  background: rgba(204, 204, 204, 0.3);
  bottom: 60px;
  margin-bottom: 0px;
}
.taxi-widget-resubmit .info {
  position: absolute;
  left: 0px;
  top: 50px;
  width: 100%;
  color: #999;
  font-size: 14px;
  text-align: center;
  height: 38px;
  line-height: 38px;
  z-index: 999;
}
.taxi-widget-resubmit .bottom-bar {
  position: absolute;
  box-sizing: border-box;
  padding-top: 10px;
  width: 100%;
  height: 60px;
  background: #fafafa;
  box-shadow: 0px 1px 9px 0px rgba(0, 0, 0, 0.22);
  bottom: 0px;
}
.taxi-widget-resubmit .btn-resubmit {
  display: block;
  border: none;
  padding: 0;
  margin: 0px auto;
  width: 150px;
  height: 40px;
  line-height: 40px;
  background: url(/static/taxi/widget/resubmit/images/bg-btn-resubmit_e9145db.png) no-repeat center center;
  background-size: 150px 40px;
  font-size: 16px;
  color: white;
  text-align: center;
}
{%/style%}<div class="taxi-widget-resubmit">
    {%widget name="taxi:widget/common/nav/nav.tpl" title="重发订单" btnBack=true back=home%}
    <p class="info">没有司机应答，重新发送？</p>
    {%widget name="taxi:widget/common/radar/radar.tpl"%}
    <form>
        <div class="addprice-wrapper">
            {%widget name="taxi:widget/common/addprice/addprice.tpl"%}
        </div>
        <input type="hidden" name="city_code"/>
        <input type="hidden" name="order_id"/>
        <input type="hidden" name="add_price" value="0"/>

        <div class="bottom-bar">
            <input type="button" class="btn-resubmit" value="重新发送"/>
        </div>
    </form>
</div>
{%script%}
require('taxi:widget/resubmit/resubmit.js').init();
{%/script%}