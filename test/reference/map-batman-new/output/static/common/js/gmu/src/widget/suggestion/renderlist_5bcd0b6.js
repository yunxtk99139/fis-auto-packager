define("common:static/js/gmu/src/widget/suggestion/renderlist.js",function(t){t("common:static/js/gmu/src/widget/suggestion/suggestion.js"),t("common:static/js/gmu/src/extend/highlight.js");var n=t("common:widget/stat/stat.js");!function(t){t.extend(gmu.Suggestion.options,{isHistory:!0,usePlus:!1,listCount:5,renderlist:null}),gmu.Suggestion.option("renderlist",function(){return"function"!==t.type(this._options.renderlist)},function(){var i=this,s=t("<div></div>"),e=function(t){return s.text(t).html()},o=function(n,s){var o=i._options,r=[];return s&&s.length?(s=s.slice(0,o.listCount),n=e(n||""),t.each(s,function(i,s){t.trim(s),s=s.split("$"),n?r.push('<li><div class="ui-suggestion-result">'+(s[3]?'<span class="query-icon"></span><span>'+(n&&t.trim(s[3]).replace(n,"<font>"+n+"</font>"))+"</span>":"")+"<span>"+s[0]+(n&&s[1])+"</span></div></li>"):r.push('<li><div class="ui-suggestion-result">'+(s[3]?"<span>"+(n&&t.trim(s[3]).replace(n,"<font>"+n+"</font>"))+"</span>":"")+'<span class="history-icon"></span><span>'+s[0]+(n&&s[1])+"</span></div></li>")}),r):(i.hide(),r)};i.on("ready",function(){var i=this,s=i.eventNs,e=t(i._options.form||i.getEl().closest("form"));e.size()&&(i.$form=e.on("submit"+s,function(t){var n=gmu.Event("submit");i._options.isHistory&&i._localStorage(i.value()),i.trigger(n),n.isDefaultPrevented()&&t.preventDefault()})),i.$content.on("click"+s,function(s){var o=i.getEl(),r=t(s.target);r.hasClass("ui-suggestion-plus")?o.val(r.attr("data-item")):t.contains(i.$content.get(0),r.get(0))&&(""===o.val()?(n.addStat(COM_STAT_CODE.SUG_HISTORY_SEARCH,{from:o.attr("id")}),n.addCookieStat(COM_STAT_CODE.SUG_HISTORY_SEARCH,{from:o.attr("id")})):(n.addStat(COM_STAT_CODE.SUG_ONLINE_SEARCH,{from:o.attr("id")}),n.addCookieStat(COM_STAT_CODE.SUG_ONLINE_SEARCH,{from:o.attr("id")})),setTimeout(function(){o.val(r.parent().find("span:nth-child(2)").text()),i.trigger("select",r).hide(),e.length&&e.submit()},400))}).highlight("ui-suggestion-highlight"),i.on("destroy",function(){e.size()&&e.off(s),i.$content.off()})}),i.on("renderlist",function(t,n,i,s){var e=o(i,n);return s(e.length?"<ul>"+e.join(" ")+"</ul>":"")})})}(gmu.$)});