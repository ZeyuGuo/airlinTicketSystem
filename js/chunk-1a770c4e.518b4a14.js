(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a770c4e"],{"0de1":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var n=i("1bab");function r(t,e){return Object(n["a"])({method:"post",url:"/loginCheck",data:{username:t,password:e}})}},"0f9e":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"register"}},[n("div",{staticClass:"main"},[n("nav-bar",{staticClass:"reg-nav"},[n("div",{attrs:{slot:"left"},on:{click:t.backClick},slot:"left"},[n("img",{attrs:{src:i("a2b2")}})]),n("div",{attrs:{slot:"center"},slot:"center"},[n("span",[t._v("注册")])]),n("div",{attrs:{slot:"right"},on:{click:t.homeClick},slot:"right"},[n("img",{attrs:{src:i("bcec")}})])]),t._m(0),n("div",{staticClass:"form"},[n("van-field",{attrs:{name:"用户名",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),n("van-field",{attrs:{type:"password",name:"密码",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),n("p",{staticStyle:{"text-align":"right","font-size":"14px",color:"#ffc24a"},on:{click:t.toLogin}},[t._v("已有账号，点击登录")]),n("div",{staticStyle:{margin:"16px"}},[n("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"},on:{click:t.onSubmit}},[t._v(" 注册 ")])],1)],1)],1)])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"head"},[n("img",{attrs:{src:i("fadf")}}),n("p",[t._v("用户注册")])])}],a=(i("ac1f"),i("5319"),i("be7f"),i("565f")),s=(i("66b9"),i("b650")),o=i("2b0e"),l=i("a7ac");i("0de1");o["a"].use(s["a"]),o["a"].use(a["a"]);var c={name:"Register",components:{NavBar:l["a"]},data:function(){return{username:"",password:"",result:""}},methods:{toLogin:function(){this.$router.replace("/login")},onSubmit:function(){},backClick:function(){this.$router.back()},homeClick:function(){this.$router.replace("/home")}}},u=c,f=(i("e586"),i("2877")),h=Object(f["a"])(u,n,r,!1,null,"196b15c9",null);e["default"]=h.exports},1146:function(t,e,i){},"1a04":function(t,e,i){},"48f4":function(t,e,i){"use strict";function n(t,e){var i=e.to,n=e.url,r=e.replace;if(i&&t){var a=t[r?"replace":"push"](i);a&&a.catch&&a.catch((function(t){if(t&&"NavigationDuplicated"!==t.name)throw t}))}else n&&(r?location.replace(n):location.href=n)}function r(t){n(t.parent&&t.parent.$router,t.props)}i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return a}));var a={url:String,replace:Boolean,to:[String,Object]}},"49a6":function(t,e,i){},"565f":function(t,e,i){"use strict";var n=i("2638"),r=i.n(n),a=i("c31d");function s(t,e){if(e){var i=t.indexOf(".");i>-1&&(t=t.slice(0,i+1)+t.slice(i).replace(/\./g,""))}var n=e?/[^0-9.]/g:/\D/g;return t.replace(n,"")}var o=i("a142");function l(){return!o["e"]&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}var c=i("1325"),u=i("a8c1"),f=l();function h(){f&&Object(u["e"])(Object(u["b"])())}var d=i("d282"),b=i("ea8e"),g=i("ad06"),p=i("7744"),v=i("dfaf"),m=Object(d["a"])("field"),k=m[0],y=m[1];e["a"]=k({inheritAttrs:!1,props:Object(a["a"])({},v["a"],{error:Boolean,disabled:Boolean,readonly:Boolean,autosize:[Boolean,Object],leftIcon:String,rightIcon:String,clearable:Boolean,formatter:Function,maxlength:[Number,String],labelWidth:[Number,String],labelClass:null,labelAlign:String,inputAlign:String,placeholder:String,errorMessage:String,errorMessageAlign:String,showWordLimit:Boolean,type:{type:String,default:"text"}}),data:function(){return{focused:!1}},watch:{value:function(){this.$nextTick(this.adjustSize)}},mounted:function(){this.format(),this.$nextTick(this.adjustSize)},computed:{showClear:function(){return this.clearable&&this.focused&&""!==this.value&&Object(o["b"])(this.value)&&!this.readonly},listeners:function(){var t=Object(a["a"])({},this.$listeners,{input:this.onInput,keypress:this.onKeypress,focus:this.onFocus,blur:this.onBlur});return delete t.click,t},labelStyle:function(){var t=this.labelWidth;if(t)return{width:Object(b["a"])(t)}}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},format:function(t){if(void 0===t&&(t=this.$refs.input),t){var e=t,i=e.value,n=this.maxlength;if(Object(o["b"])(n)&&i.length>n&&(i=i.slice(0,n),t.value=i),"number"===this.type||"digit"===this.type){var r=i,a="number"===this.type;i=s(i,a),i!==r&&(t.value=i)}if(this.formatter){var l=i;i=this.formatter(i),i!==l&&(t.value=i)}return i}},onInput:function(t){t.target.composing||this.$emit("input",this.format(t.target))},onFocus:function(t){this.focused=!0,this.$emit("focus",t),this.readonly&&this.blur()},onBlur:function(t){this.focused=!1,this.$emit("blur",t),h()},onClick:function(t){this.$emit("click",t)},onClickLeftIcon:function(t){this.$emit("click-left-icon",t)},onClickRightIcon:function(t){this.$emit("click-right-icon",t)},onClear:function(t){Object(c["c"])(t),this.$emit("input",""),this.$emit("clear",t)},onKeypress:function(t){"search"===this.type&&13===t.keyCode&&this.blur(),this.$emit("keypress",t)},adjustSize:function(){var t=this.$refs.input;if("textarea"===this.type&&this.autosize&&t){t.style.height="auto";var e=t.scrollHeight;if(Object(o["d"])(this.autosize)){var i=this.autosize,n=i.maxHeight,r=i.minHeight;n&&(e=Math.min(e,n)),r&&(e=Math.max(e,r))}e&&(t.style.height=e+"px")}},genInput:function(){var t=this.$createElement,e=this.type,i=this.slots("input");if(i)return t("div",{class:y("control",this.inputAlign)},[i]);var n={ref:"input",class:y("control",this.inputAlign),domProps:{value:this.value},attrs:Object(a["a"])({},this.$attrs,{disabled:this.disabled,readonly:this.readonly,placeholder:this.placeholder}),on:this.listeners,directives:[{name:"model",value:this.value}]};if("textarea"===e)return t("textarea",r()([{},n]));var s=e;return"number"===e&&(s="text"),"digit"===e&&(l()?(s="number",n.attrs.pattern="\\d*"):s="tel"),t("input",r()([{attrs:{type:s}},n]))},genLeftIcon:function(){var t=this.$createElement,e=this.slots("left-icon")||this.leftIcon;if(e)return t("div",{class:y("left-icon"),on:{click:this.onClickLeftIcon}},[this.slots("left-icon")||t(g["a"],{attrs:{name:this.leftIcon}})])},genRightIcon:function(){var t=this.$createElement,e=this.slots,i=e("right-icon")||this.rightIcon;if(i)return t("div",{class:y("right-icon"),on:{click:this.onClickRightIcon}},[e("right-icon")||t(g["a"],{attrs:{name:this.rightIcon}})])},genWordLimit:function(){var t=this.$createElement;if(this.showWordLimit&&this.maxlength){var e=this.value.length,i=e>=this.maxlength;return t("div",{class:y("word-limit")},[t("span",{class:y("word-num",{full:i})},[e]),"/",this.maxlength])}}},render:function(){var t,e=arguments[0],i=this.slots,n=this.labelAlign,r={icon:this.genLeftIcon};return i("label")&&(r.title=function(){return i("label")}),e(p["a"],{attrs:{icon:this.leftIcon,size:this.size,title:this.label,center:this.center,border:this.border,isLink:this.isLink,required:this.required,clickable:this.clickable,titleStyle:this.labelStyle,titleClass:[y("label",n),this.labelClass],arrowDirection:this.arrowDirection},class:y((t={error:this.error},t["label-"+n]=n,t["min-height"]="textarea"===this.type&&!this.autosize,t)),scopedSlots:r,on:{click:this.onClick}},[e("div",{class:y("body")},[this.genInput(),this.showClear&&e(g["a"],{attrs:{name:"clear"},class:y("clear"),on:{touchstart:this.onClear}}),this.genRightIcon(),i("button")&&e("div",{class:y("button")},[i("button")])]),this.genWordLimit(),this.errorMessage&&e("div",{class:y("error-message",this.errorMessageAlign)},[this.errorMessage])])}})},"66b9":function(t,e,i){"use strict";i("68ef"),i("9d70"),i("3743"),i("e3b3"),i("bc1b")},7744:function(t,e,i){"use strict";var n=i("c31d"),r=i("2638"),a=i.n(r),s=i("d282"),o=i("a142"),l=i("ba31"),c=i("48f4"),u=i("dfaf"),f=i("ad06"),h=Object(s["a"])("cell"),d=h[0],b=h[1];function g(t,e,i,n){var r=e.icon,s=e.size,u=e.title,h=e.label,d=e.value,g=e.isLink,p=i.title||Object(o["b"])(u);function v(){var n=i.label||Object(o["b"])(h);if(n)return t("div",{class:[b("label"),e.labelClass]},[i.label?i.label():h])}function m(){if(p)return t("div",{class:[b("title"),e.titleClass],style:e.titleStyle},[i.title?i.title():t("span",[u]),v()])}function k(){var n=i.default||Object(o["b"])(d);if(n)return t("div",{class:[b("value",{alone:!p}),e.valueClass]},[i.default?i.default():t("span",[d])])}function y(){return i.icon?i.icon():r?t(f["a"],{class:b("left-icon"),attrs:{name:r}}):void 0}function S(){var n=i["right-icon"];if(n)return n();if(g){var r=e.arrowDirection;return t(f["a"],{class:b("right-icon"),attrs:{name:r?"arrow-"+r:"arrow"}})}}function x(t){Object(l["a"])(n,"click",t),Object(c["a"])(n)}var j=g||e.clickable,C={clickable:j,center:e.center,required:e.required,borderless:!e.border};return s&&(C[s]=s),t("div",a()([{class:b(C),attrs:{role:j?"button":null,tabindex:j?0:null},on:{click:x}},Object(l["b"])(n)]),[y(),m(),k(),S(),null==i.extra?void 0:i.extra()])}g.props=Object(n["a"])({},u["a"],{},c["b"]),e["a"]=d(g)},b1d2:function(t,e,i){"use strict";i.d(e,"g",(function(){return n})),i.d(e,"a",(function(){return r})),i.d(e,"h",(function(){return a})),i.d(e,"e",(function(){return o})),i.d(e,"c",(function(){return l})),i.d(e,"b",(function(){return c})),i.d(e,"d",(function(){return u})),i.d(e,"f",(function(){return f}));var n="#ee0a24",r="#1989fa",a="#fff",s="van-hairline",o=s+"--top",l=s+"--left",c=s+"--bottom",u=s+"--surround",f=s+"--top-bottom"},b650:function(t,e,i){"use strict";var n=i("c31d"),r=i("2638"),a=i.n(r),s=i("d282"),o=i("ba31"),l=i("b1d2"),c=i("48f4"),u=i("ad06"),f=i("543e"),h=Object(s["a"])("button"),d=h[0],b=h[1];function g(t,e,i,n){var r,s=e.tag,h=e.icon,d=e.type,g=e.color,p=e.plain,v=e.disabled,m=e.loading,k=e.hairline,y=e.loadingText,S={};function x(t){m||v||(Object(o["a"])(n,"click",t),Object(c["a"])(n))}function j(t){Object(o["a"])(n,"touchstart",t)}g&&(S.color=p?g:l["h"],p||(S.background=g),-1!==g.indexOf("gradient")?S.border=0:S.borderColor=g);var C=[b([d,e.size,{plain:p,loading:m,disabled:v,hairline:k,block:e.block,round:e.round,square:e.square}]),(r={},r[l["d"]]=k,r)];function O(){var n,r=[];return m?r.push(t(f["a"],{class:b("loading"),attrs:{size:e.loadingSize,type:e.loadingType,color:"currentColor"}})):h&&r.push(t(u["a"],{attrs:{name:h},class:b("icon")})),n=m?y:i.default?i.default():e.text,n&&r.push(t("span",{class:b("text")},[n])),r}return t(s,a()([{style:S,class:C,attrs:{type:e.nativeType,disabled:v},on:{click:x,touchstart:j}},Object(o["b"])(n)]),[O()])}g.props=Object(n["a"])({},c["b"],{text:String,icon:String,color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,nativeType:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"}}),e["a"]=d(g)},bc1b:function(t,e,i){},be7f:function(t,e,i){"use strict";i("68ef"),i("9d70"),i("3743"),i("1a04"),i("1146")},dfaf:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var n={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[Number,String],value:[Number,String],label:[Number,String],arrowDirection:String,border:{type:Boolean,default:!0}}},e586:function(t,e,i){"use strict";var n=i("49a6"),r=i.n(n);r.a},fadf:function(t,e,i){t.exports=i.p+"img/s1.34f6b3fc.jpg"}}]);
//# sourceMappingURL=chunk-1a770c4e.518b4a14.js.map