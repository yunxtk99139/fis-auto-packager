define("common:static/js/gmu/src/widget/suggestion/suggestion.js",function(t){t("common:static/js/gmu/src/core/widget.js"),t("common:static/js/gmu/src/extend/highlight.js");var i=t("common:widget/stat/stat.js");!function(t,e){var n=0;gmu.define("Suggestion",{options:{historyShare:!0,confirmClearHistory:!0,autoClose:!1,appendContanier:document.body},template:{wrapper:'<div class="ui-suggestion"><div class="ui-suggestion-content"></div><div class="ui-suggestion-button"><span class="ui-suggestion-clear">清除历史记录</span><span class="ui-suggestion-close"></span></div></div>'},_initDom:function(){var i=this,e=i.getEl().attr("autocomplete","off"),o=e.parent(".ui-suggestion-mask");return o.length?i.$mask=o:e.wrap(i.$mask=t('<div class="ui-suggestion-mask"></div>')),i.$wrapper=t(i.tpl2html("wrapper")),i._options.appendContanier?t(i._options.appendContanier).append(i.$wrapper):i.$mask.append(i.$wrapper),i.$wrapper.prop("id","ui-suggestion-"+n++),i.$content=i.$wrapper.css("top",e.height()+(i.wrapperTop=parseInt(i.$wrapper.css("top"),10)||0)).find(".ui-suggestion-content"),i.$btn=i.$wrapper.find(".ui-suggestion-button"),i.$clearBtn=i.$btn.find(".ui-suggestion-clear"),i.$closeBtn=i.$btn.find(".ui-suggestion-close"),i.trigger("initdom")},_bindEvent:function(){var i=this,e=i.getEl(),n=i.eventNs;return i._options.autoClose&&t(document).on("click"+n,function(e){!t.contains(i.$mask.get(0),e.target)&&i.hide()}),e.on("focus"+n,function(){!i.isShow&&i._showList().trigger("open")}),e.on("input"+n,function(){i._showList()}),i.$clearBtn.on("click"+n,function(){i.history(null)}).highlight("ui-suggestion-highlight"),i.$closeBtn.on("click"+n,function(){i.getEl().blur(),i.hide().trigger("close")}).highlight("ui-suggestion-highlight"),i},_create:function(){var i=this,e=i._options,o=e.historyShare;return e.container&&(i.$el=t(e.container)),i.key=o?("boolean"===t.type(o)?"":o+"-")+"SUG-Sharing-History":i.getEl().attr("id")||"ui-suggestion-"+n++,i.separator=encodeURIComponent(","),i._initDom()._bindEvent(),i},_showList:function(){var i,e=this,n=e.value();if(n){if("我的位置"==n)return e;e.trigger("sendrequest",n,t.proxy(e._render,e),t.proxy(e._cacheData,e))}else(i=e._localStorage())?e._render(n,i.split(e.separator)):e.hide();return e},_render:function(i,e){this.trigger("renderlist",e,i,t.proxy(this._fillWrapper,this))},_fillWrapper:function(t){return this.$clearBtn[this.value()?"hide":"show"](),t?(this.$content.html(t),this.show()):this.hide(),this},_localStorage:function(i){var n,o,s=this,r=s.key,a=s.separator;try{if(n=e.localStorage,void 0===i)return n[r];null===i?n[r]="":i&&(o=n[r]?n[r].split(a):[],~t.inArray(i,o)&&(index=o.indexOf(i),o.splice(index,1)),o.unshift(i),window.localStorage[r]=o.join(a))}catch(c){console.log(c.message)}return s},_cacheData:function(t,i){return this.cacheData||(this.cacheData={}),void 0!==i?this.cacheData[t]=i:this.cacheData[t]},value:function(){return this.getEl().val()},history:function(t){var n=this,o=null!==t||function(){return i.addStat(COM_STAT_CODE.SUG_CLEAR_HISTORY_BTN),n._localStorage(null).hide()};return null===t?n._options.confirmClearHistory?e.confirm("清除全部查询历史记录？")&&o():o():n._localStorage(t)},show:function(){return this.isShow?this:(this.$wrapper.show(),this.isShow=!0,i.addStat(COM_STAT_CODE.SUG_ONLINE_SHOW),this.trigger("show"))},hide:function(){return this.isShow?(this.$wrapper.hide(),this.isShow=!1,i.addStat(COM_STAT_CODE.SUG_HISTORY_SHUTUP),this.trigger("hide")):this},destroy:function(){var i=this,e=i.getEl(),n=i.ns;return i.trigger("destroy"),e.off(n),i.$mask.replaceWith(e),i.$clearBtn.off(n),i.$closeBtn.off(n),i.$wrapper.children().off().remove(),i.$wrapper.remove(),i._options.autoClose&&t(document).off(n),this.destroyed=!0,i}})}(gmu.$,window)});