!function(t){function e(t,e){return t.toFixed(e.decimals)}t.fn.countTo=function(e){return e=e||{},t(this).each(function(){function n(){u+=l,f++,o(u),"function"==typeof a.onUpdate&&a.onUpdate.call(i,u),f>=r&&(c.removeData("countTo"),clearInterval(d.interval),u=a.to,"function"==typeof a.onComplete&&a.onComplete.call(i,u))}function o(t){var e=a.formatter.call(i,t,a);c.html(e)}var a=t.extend({},t.fn.countTo.defaults,{from:t(this).data("from"),to:t(this).data("to"),speed:t(this).data("speed"),refreshInterval:t(this).data("refresh-interval"),decimals:t(this).data("decimals")},e),r=Math.ceil(a.speed/a.refreshInterval),l=(a.to-a.from)/r,i=this,c=t(this),f=0,u=a.from,d=c.data("countTo")||{};c.data("countTo",d),d.interval&&clearInterval(d.interval),d.interval=setInterval(n,a.refreshInterval),o(u)})},t.fn.countTo.defaults={from:0,to:0,speed:1e3,refreshInterval:100,decimals:0,formatter:e,onUpdate:null,onComplete:null}}(jQuery),jQuery(function(t){function e(e){var n=t(this);e=t.extend({},e||{},n.data("countToOptions")||{}),n.countTo(e)}t(".count-number").data("countToOptions",{formatter:function(t,e){return t.toFixed(e.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g,",")}}),t(".timer").each(e)});