var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([24],{270:function(t,e,n){n(271),n(272)},271:function(t,e){},272:function(t,e,n){function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),s=n(0),c=function(t){return t&&t.__esModule?t:{default:t}}(s),u=function(){function t(){o(this,t),this.data={show:!1,mask:!0,showClose:!1,headerTitle:"c-dialog",headerDesc:"c-dialog",message:"",type:"alert",iconType:"warn",iconStyle:{width:"60cpx",height:"60cpx"},title:"我是标题",content:"我是内容",custom:!1},this.computed={},this.watch={},this.methods={changeShow:function(t){this.show=t.detail.value},showAlert:function(){this.type="alert",this.title="我是标题",this.content="我是内容",this.iconType="warn",this.showClose=!1,this.show=!0},showConfirm:function(){this.type="confirm",this.title="确定离开吗",this.content="",this.iconType="warn",this.showClose=!1,this.show=!0},showCloseIcon:function(){this.type="alert",this.title="我是标题",this.content="我是内容",this.iconType="warn",this.showClose=!0,this.show=!0},showCustom:function(){var t=this;this.custom=!0,setTimeout(function(){t.custom=!1},1e3)},closeEvent:function(){},confirmEvent:function(){},cancelEvent:function(){}}}return i(t,[{key:"beforeCreate",value:function(){}},{key:"created",value:function(){}},{key:"beforeMount",value:function(){}},{key:"mounted",value:function(){}},{key:"beforeDestroy",value:function(){}},{key:"destroyed",value:function(){}}]),t}();e.default=new u,e.default=c.default.createPage(e.default).getOptions()}},[270]);