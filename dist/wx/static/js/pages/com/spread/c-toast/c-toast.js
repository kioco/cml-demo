var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([17],{286:function(t,e,n){n(287),n(288)},287:function(t,e){},288:function(t,e,n){function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}(),o=n(0),a=function(t){return t&&t.__esModule?t:{default:t}}(o),u=function(){function t(){s(this,t),this.data={show:!1,message:"",type:"loading",mask:!1,duration:1e3,needIcon:!0},this.computed={},this.watch={},this.methods={changeShow:function(t){this.show=t.detail.value},showLoading:function(){this.message="loading",this.type="loading",this.mask=!1,this.duration=1e3,this.needIcon=!0,this.show=!0},showMask:function(){this.message="mask toast",this.type="loading",this.mask=!0,this.duration=1e3,this.needIcon=!0,this.show=!0},showSuccess:function(){this.message="success toast",this.type="success",this.mask=!0,this.duration=1e3,this.needIcon=!0,this.show=!0},showWarn:function(){this.message="warn toast",this.type="warn",this.duration=1e3,this.mask=!0,this.needIcon=!0,this.show=!0},showWithout:function(){this.message="toast without icon",this.duration=1e3,this.mask=!1,this.needIcon=!1,this.show=!0}}}return i(t,[{key:"beforeCreate",value:function(){}},{key:"created",value:function(){}},{key:"beforeMount",value:function(){}},{key:"mounted",value:function(){}},{key:"beforeDestroy",value:function(){}},{key:"destroyed",value:function(){}}]),t}();e.default=new u,e.default=a.default.createPage(e.default).getOptions()}},[286]);