{%style id="/widget/switchproduct/switchproduct.inline.less"%}.index-widget-switchproduct .product-item{width:25%;height:75px;padding:15px 0 0;float:left;display:inline-block}.index-widget-switchproduct .product-list{padding:5px 15px}.index-widget-switchproduct .product-icon{background-image:url(/static/third/images/products_377ec2c.png)}.index-widget-switchproduct .product-icon{margin:0 auto;width:50px;height:50px;-webkit-background-size:225px 200px;background-repeat:no-repeat}.index-widget-switchproduct .product-title{text-align:center;font:700 14px/26px normal;color:#5b5b5b}.index-widget-switchproduct #footer{display:-webkit-box;-webkit-box-orient:horizontal;box-orient:horizontal;-webkit-box-direction:normal;-webkit-box-pack:justify;-webkit-box-align:center;margin:20px 10px 0;padding-bottom:10px}.index-widget-switchproduct .pad #footer{display:block;margin:0;padding-bottom:0}.index-widget-switchproduct #footer .btn:first-child{margin-left:0}.index-widget-switchproduct #footer .btn{-webkit-box-flex:1;-moz-box-flex:1;box-flex:1;display:block;margin:0 5px}{%/style%}<section class="index-widget-switchproduct">
<div class="product-list clearfix">
{%foreach $data.product as $index=>$doc%}
<a class="product-item ref" target="_blank" href="{%$doc.href|f_escape_xml%}">
<div class="product-icon" style="background-position: {%$doc.bgposition|f_escape_xml%};">
</div>
<div class="product-title">{%$doc.title|f_escape_xml%}</div>
</a>
{%/foreach%}
</div>
</section>