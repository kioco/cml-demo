var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([63],{422:function(t,e,l){l(423),l(424)},423:function(t,e){},424:function(t,e,l){function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=l(0),u=function(t){return t&&t.__esModule?t:{default:t}}(n),a=function t(){i(this,t),this.props={value:{type:String,default:""},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},maxlength:{type:Number,default:140},returnKeyType:{type:String,default:"done"},placerHolderColor:{type:String,default:"#666"},cStyle:{type:String,default:""},rows:{type:Number,default:2}},this.data={defaultStyle:"font-size: 40cpx; height: 150cpx; line-height: 50cpx; padding-left:20cpx; padding-right:20cpx; color: #000; text-align: left; background-color: #fff; width:auto; border: 1px solid #999; border-radius: 8cpx;"},this.computed={wxPlaceHolderStyle:function(){return"color: "+this.placerHolderColor},wxStyle:function(){return this.defaultStyle+this.cStyle}},this.watch={focus:function(t,e){}},this.methods={inputEvent:function(t){this.$cmlEmit("input",{value:t.detail.value||""}),this.$cmlEmit("inputevent",{value:t.detail.value||""})},blurEvent:function(t){this.$cmlEmit("blur",{value:t.detail.value||""}),this.$cmlEmit("blurevent",{value:t.detail.value||""})},focusEvent:function(t){this.$cmlEmit("focus",{value:t.detail.value||""}),this.$cmlEmit("focusevent",{value:t.detail.value||""})},confirmEvent:function(t){this.$cmlEmit("confirm",{value:t.detail.value||""}),this.$cmlEmit("confirmevent",{value:t.detail.value||""})}}};e.default=new a,e.default=u.default.createComponent(e.default).getOptions()}},[422]);