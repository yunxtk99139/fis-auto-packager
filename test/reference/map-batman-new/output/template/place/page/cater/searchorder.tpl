{%extends file="common/page/layout.tpl"%} 
{%block name="main"%}
{%* 头部导航 *%}
{%widget name="common:widget/nav/nav.tpl" title='订单详情'%}
{%widget name="place:widget/catersearchorder/catersearchorder.tpl"%}
{%require name='place:page/cater/searchorder.tpl'%}{%/block%}