var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([32],{221:function(t,e,o){o(222),o(223)},222:function(t,e){},223:function(t,e,o){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),a=o(0),c=function(t){return t&&t.__esModule?t:{default:t}}(a),r=function(){function t(){n(this,t),this.data={bottomOffset:20,scrollDirection:"vertical",panels:[],rows:[],scrollTop:0},this.computed={},this.watch={},this.methods={change:function(t){var e=t.currentTarget,o=e.dataset,n=o.idx,i=this.panels[n];i&&(i.height=200===i.height?400:200,i.width=330===i.width?730:330,i.computedStyle="height:"+i.height+"cpx;width:"+i.width+"cpx;background-color:"+i.bgc+";opacity:"+i.opacity)},randomfn:function(){for(var t=[],e=1;e<=40;e++){var o={label:e,height:200,width:730,bgc:"#69BE96",opacity:1};o.computedStyle="height:"+o.height+"cpx;width:"+o.width+"cpx;background-color:"+o.bgc+";opacity:"+o.opacity+";",t.push(o)}return t},onScroll:function(t){},onBottom:function(t){console.log("onBottom")}}}return i(t,[{key:"created",value:function(t){this.panels=this.randomfn();for(var e=0;e<30;e++)this.rows.push("row "+e);console.log("demo page created:",t)}},{key:"mounted",value:function(){}}]),t}();e.default=new r,e.default=c.default.createPage(e.default).getOptions()}},[221]);