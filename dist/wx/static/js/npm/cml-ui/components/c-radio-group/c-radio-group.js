var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([55],{359:function(e,t,n){n(360),n(361)},360:function(e,t){},361:function(e,t,n){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(r),u=function(){function e(){i(this,e),this.props={option:{type:Array,default:[]},position:{type:String,default:"left"},horizontal:{type:Boolean,default:!1}},this.data={radioList:[]},this.computed={horizontalStyle:function(){return this.horizontal?"display:inline-flex;flex-direction:row;align-items:center;flex-wrap:wrap;flex:1;":""},subPosition:function(){return"right"!==this.position||this.horizontal?"left":"right"}},this.watch={},this.methods={valueChange:function(e){this.radioList=this.radioList.map(function(t,n){return n==e.detail.index?t.checked=!0:t.checked=!1,t}),this.$cmlEmit("groupchange",{value:this.radioList,index:e.detail.index})}}}return o(e,[{key:"beforeCreate",value:function(){}},{key:"created",value:function(){}},{key:"beforeMount",value:function(){}},{key:"mounted",value:function(){this.radioList=JSON.parse(JSON.stringify(this.option))}},{key:"beforeDestroy",value:function(){}},{key:"destroyed",value:function(){}}]),e}();t.default=new u,t.default=a.default.createComponent(t.default).getOptions()}},[359]);