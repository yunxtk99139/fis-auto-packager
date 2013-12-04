define("place:widget/caterorderlist/caterorderlist.js",function(require,exports,module){require("place:static/lib/template.js");var url=require("common:widget/url/url.js"),util=require("common:static/js/util.js"),popup=require("common:widget/popup/popup.js"),DEF_NUM=10,DISABLED="disabled",DEF_HREF="javascript:;",DEFAULT_ERROR_MSG="网络连接失败",DEF_SEARCH_URL="/mobile/webapp/place/cater/qt=searchorder{{kehuduan}}",DEF_ORDER_LIST_URL="/mobile/webapp/place/cater/qt=orderlist{{kehuduan}}?",DEF_ORDER_DELTAIL_URL="/mobile/webapp/place/cater/qt=orderdetail{{kehuduan}}?",HOST="",DATA_TYPE="json",LIST_AJAX_URL=HOST+"/detail?qt=cater_orderlist",STATUS_MSG={1:"等待确认",2:"下单成功",3:"订单已取消",4:"预订失败"},getStatusDesc=function(e){var t=Math.floor(e/100);return STATUS_MSG[t]||""},getRoomLabel=function(e,t){var a="大厅";return"1"===e&&(t=parseInt(t,10)||0,a="包间"+(t?"（"+t+"人间）":"")),a},defError=function(e){e=e||{},popup.open(e.errorMsg||DEFAULT_ERROR_MSG),8e3===e.errorNo&&url.navigate(DEF_SEARCH_URL,{replace:!0})},CaterOrderList=function(){var urlData=util.urlToJSON(window.location.search.replace("?",""));this.itemTemp=[function(_template_object){var _template_fun_array=[],fn=function(__data__){var _template_varName="";for(var name in __data__)_template_varName+="var "+name+'=__data__["'+name+'"];';eval(_template_varName),_template_fun_array.push('<li data-oid="',"undefined"==typeof order_id?"":baidu.template._encodeHTML(order_id),'" data-href="',"undefined"==typeof order_url?"":baidu.template._encodeHTML(order_url),'">    <div class="item">        <h4> ',"undefined"==typeof shop_name?"":baidu.template._encodeHTML(shop_name),' </h4>        <span class="room right">',"undefined"==typeof room?"":baidu.template._encodeHTML(room),'</span>    </div>    <div class="person">        就餐人数：',"undefined"==typeof person_num?"":baidu.template._encodeHTML(person_num),'位    </div>    <div class="item">        <span>预约入店时间：',"undefined"==typeof order_time?"":baidu.template._encodeHTML(order_time),'</span>        <span class="right">',"undefined"==typeof status_desc?"":baidu.template._encodeHTML(status_desc),'</span>    </div>    <em class="list-arrow"></em></li>'),_template_varName=null}(_template_object);return fn=null,_template_fun_array.join("")}][0],this.curPage=parseInt(urlData.page,10)||1,this.mobile=urlData.mobile,this.$el=$("#place-widget-caterorderlist"),this.$mobile=this.$el.find('[data-node="mobile"]'),this.$list=this.$el.find('[data-node="list"]'),this.$pageNav=this.$el.find('[data-node="pageNav"]'),this.$preBtn=this.$el.find('[data-node="pre"]'),this.$nextBtn=this.$el.find('[data-node="next"]'),this.init()};CaterOrderList.prototype={init:function(){this.getOrderList(),this.bindEvent()},bindEvent:function(){this.onListClickHandle=$.proxy(this.onListClick,this),this.$el.on("click","li",this.onListClickHandle)},unbindEvent:function(){this.$el.off("click","li",this.onListClickHandle)},onListClick:function(e){var t=$(e.currentTarget),a=t.data("href");url.navigate(a),e.stopPropagation(),e.stopImmediatePropagation()},getOrderList:function(){$.ajax({url:LIST_AJAX_URL,type:"GET",dataType:DATA_TYPE,context:this,cache:!1,data:{mobile:this.mobile,page:this.curPage,num:DEF_NUM},success:function(e){return e&&0===e.errorNo?(this.render(e),void 0):defError(e)},error:defError})},formatRs:function(e){var t=e||{},a=parseInt(t.order_time,10);return t.order_time=new Date(1e3*a).format("yyyy-MM-dd hh:mm"),t.status_desc=getStatusDesc(t.status),t.room=getRoomLabel(t.need_room,t.room_size),t},formatPage:function(e,t){var a=1>=t?"hide":"show",r=t>e,i=e>1;this.$pageNav[a](),this.$preBtn[i?"removeClass":"addClass"](DISABLED),this.$nextBtn[r?"removeClass":"addClass"](DISABLED),this.$preBtn.attr("href",i?DEF_ORDER_LIST_URL+util.jsonToUrl({mobile:this.mobile,page:e-1,num:DEF_NUM}):DEF_HREF),this.$nextBtn.attr("href",r?DEF_ORDER_LIST_URL+util.jsonToUrl({mobile:this.mobile,page:e+1,num:DEF_NUM}):DEF_HREF)},render:function(e){this.$mobile.html(this.mobile),this.formatPage(this.curPage,Math.ceil(e.total/DEF_NUM));for(var t,a="",r=e.data||[],i=0;i<r.length;i++)t=this.formatRs(r[i]),t.order_url=DEF_ORDER_DELTAIL_URL+util.jsonToUrl({mobile:this.mobile,orderid:t.order_id}),a+=this.itemTemp(r[i]);this.$list.html(a)},destroy:function(){this.unbindEvent()}},exports.init=function(e){return e=e||{},DEF_SEARCH_URL=DEF_SEARCH_URL.replace("{{kehuduan}}",e.kehuduan?"&kehuduan=1":""),DEF_ORDER_LIST_URL=DEF_ORDER_LIST_URL.replace("{{kehuduan}}",e.kehuduan?"&kehuduan=1":""),DEF_ORDER_DELTAIL_URL=DEF_ORDER_DELTAIL_URL.replace("{{kehuduan}}",e.kehuduan?"&kehuduan=1":""),new CaterOrderList}});