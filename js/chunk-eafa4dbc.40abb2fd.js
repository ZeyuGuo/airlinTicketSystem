(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eafa4dbc"],{"0653":function(t,n,e){"use strict";e("68ef"),e("5c56")},"18f8":function(t,n,e){"use strict";var r=e("c6ca"),a=e.n(r);a.a},"1a04":function(t,n,e){},2638:function(t,n,e){"use strict";function r(){return r=Object.assign||function(t){for(var n,e=1;e<arguments.length;e++)for(var r in n=arguments[e],n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},r.apply(this,arguments)}var a=["attrs","props","domProps"],i=["class","style","directives"],c=["on","nativeOn"],o=function(t){return t.reduce((function(t,n){for(var e in n)if(t[e])if(-1!==a.indexOf(e))t[e]=r({},t[e],n[e]);else if(-1!==i.indexOf(e)){var o=t[e]instanceof Array?t[e]:[t[e]],u=n[e]instanceof Array?n[e]:[n[e]];t[e]=o.concat(u)}else if(-1!==c.indexOf(e))for(var s in n[e])if(t[e][s]){var f=t[e][s]instanceof Array?t[e][s]:[t[e][s]],d=n[e][s]instanceof Array?n[e][s]:[n[e][s]];t[e][s]=f.concat(d)}else t[e][s]=n[e][s];else if("hook"==e)for(var v in n[e])t[e][v]=t[e][v]?l(t[e][v],n[e][v]):n[e][v];else t[e]=n[e];else t[e]=n[e];return t}),{})},l=function(t,n){return function(){t&&t.apply(this,arguments),n&&n.apply(this,arguments)}};t.exports=o},"34e9":function(t,n,e){"use strict";var r=e("2638"),a=e.n(r),i=e("d282"),c=e("ba31"),o=e("b1d2"),l=Object(i["a"])("cell-group"),u=l[0],s=l[1];function f(t,n,e,r){var i,l=t("div",a()([{class:[s(),(i={},i[o["f"]]=n.border,i)]},Object(c["b"])(r,!0)]),[null==e.default?void 0:e.default()]);return n.title||e.title?t("div",[t("div",{class:s("title")},[e.title?e.title():n.title]),l]):l}f.props={title:String,border:{type:Boolean,default:!0}},n["a"]=u(f)},"35cf":function(t,n,e){},3743:function(t,n,e){},"3b423":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{attrs:{id:"profile"}},[r("nav-bar",{staticClass:"profile-nav"},[r("div",{attrs:{slot:"center"},slot:"center"},[t._v("我的")])]),r("div",{staticClass:"profile-title"},[r("img",{attrs:{src:e("fadf")}}),r("van-cell",{staticClass:"cell",attrs:{title:"点击登录/注册"},on:{click:t.clickToLogin}})],1),r("div",[r("van-cell-group",{staticClass:"profile-cell-group"},[r("van-cell",{staticClass:"item-cell",attrs:{title:"我的订单",icon:"cart","is-link":""}}),r("van-cell",{staticClass:"item-cell",attrs:{title:"我的行程",icon:"todo-list","is-link":""}}),r("van-cell",{staticClass:"item-cell",attrs:{title:"我的账户",icon:"manager","is-link":""}})],1)],1),r("div",[r("van-cell-group",{staticClass:"profile-cell-group"},[r("van-cell",{staticClass:"item-cell",attrs:{title:"常用乘机人",icon:"card","is-link":""}})],1)],1),r("div",[r("van-cell-group",{staticClass:"profile-cell-group"},[r("van-cell",{staticClass:"item-cell",attrs:{title:"优惠券",icon:"coupon","is-link":""}})],1)],1)],1)},a=[],i=(e("0653"),e("34e9")),c=(e("c194"),e("7744")),o=e("a7ac"),l=e("2b0e");l["a"].use(c["a"]),l["a"].use(i["a"]);var u={name:"Profile",components:{NavBar:o["a"]},data:function(){return{}},computed:{},methods:{clickToLogin:function(){console.log("click login"),this.$router.push("/login")}}},s=u,f=(e("8632"),e("2877")),d=Object(f["a"])(s,r,a,!1,null,"6230408f",null);n["default"]=d.exports},"48f4":function(t,n,e){"use strict";function r(t,n){var e=n.to,r=n.url,a=n.replace;if(e&&t){var i=t[a?"replace":"push"](e);i&&i.catch&&i.catch((function(t){if(t&&"NavigationDuplicated"!==t.name)throw t}))}else r&&(a?location.replace(r):location.href=r)}function a(t){r(t.parent&&t.parent.$router,t.props)}e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return i}));var i={url:String,replace:Boolean,to:[String,Object]}},"5c56":function(t,n,e){},"68ef":function(t,n,e){},7744:function(t,n,e){"use strict";var r=e("c31d"),a=e("2638"),i=e.n(a),c=e("d282"),o=e("a142"),l=e("ba31"),u=e("48f4"),s=e("dfaf"),f=e("ad06"),d=Object(c["a"])("cell"),v=d[0],p=d[1];function b(t,n,e,r){var a=n.icon,c=n.size,s=n.title,d=n.label,v=n.value,b=n.isLink,m=e.title||Object(o["b"])(s);function g(){var r=e.label||Object(o["b"])(d);if(r)return t("div",{class:[p("label"),n.labelClass]},[e.label?e.label():d])}function h(){if(m)return t("div",{class:[p("title"),n.titleClass],style:n.titleStyle},[e.title?e.title():t("span",[s]),g()])}function y(){var r=e.default||Object(o["b"])(v);if(r)return t("div",{class:[p("value",{alone:!m}),n.valueClass]},[e.default?e.default():t("span",[v])])}function O(){return e.icon?e.icon():a?t(f["a"],{class:p("left-icon"),attrs:{name:a}}):void 0}function j(){var r=e["right-icon"];if(r)return r();if(b){var a=n.arrowDirection;return t(f["a"],{class:p("right-icon"),attrs:{name:a?"arrow-"+a:"arrow"}})}}function C(t){Object(l["a"])(r,"click",t),Object(u["a"])(r)}var S=b||n.clickable,k={clickable:S,center:n.center,required:n.required,borderless:!n.border};return c&&(k[c]=c),t("div",i()([{class:p(k),attrs:{role:S?"button":null,tabindex:S?0:null},on:{click:C}},Object(l["b"])(r)]),[O(),h(),y(),j(),null==e.extra?void 0:e.extra()])}b.props=Object(r["a"])({},s["a"],{},u["b"]),n["a"]=v(b)},8632:function(t,n,e){"use strict";var r=e("35cf"),a=e.n(r);a.a},"90c6":function(t,n,e){"use strict";function r(t){return/^\d+(\.\d+)?$/.test(t)}function a(t){return Number.isNaN?Number.isNaN(t):t!==t}e.d(n,"b",(function(){return r})),e.d(n,"a",(function(){return a}))},"9d70":function(t,n,e){},a142:function(t,n,e){"use strict";e.d(n,"e",(function(){return a})),e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return c})),e.d(n,"d",(function(){return o})),e.d(n,"a",(function(){return l}));var r=e("2b0e"),a=r["a"].prototype.$isServer;function i(t){return void 0!==t&&null!==t}function c(t){return"function"===typeof t}function o(t){return null!==t&&"object"===typeof t}function l(t,n){var e=n.split("."),r=t;return e.forEach((function(t){r=i(r[t])?r[t]:""})),r}},a7ac:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"nav-bar"},[e("div",{staticClass:"left"},[t._t("left")],2),e("div",{staticClass:"center"},[t._t("center")],2),e("div",{staticClass:"right"},[t._t("right")],2)])},a=[],i={name:"NavBar"},c=i,o=(e("18f8"),e("2877")),l=Object(o["a"])(c,r,a,!1,null,"3b6fbf75",null);n["a"]=l.exports},ad06:function(t,n,e){"use strict";var r=e("2638"),a=e.n(r),i=e("d282"),c=e("ea8e"),o=e("ba31"),l=e("a142"),u=Object(i["a"])("info"),s=u[0],f=u[1];function d(t,n,e,r){var i=n.dot,c=n.info,u=Object(l["b"])(c)&&""!==c;if(i||u)return t("div",a()([{class:f({dot:i})},Object(o["b"])(r,!0)]),[i?"":n.info])}d.props={dot:Boolean,info:[Number,String]};var v=s(d),p=Object(i["a"])("icon"),b=p[0],m=p[1];function g(t){return!!t&&-1!==t.indexOf("/")}var h={medel:"medal","medel-o":"medal-o"};function y(t){return t&&h[t]||t}function O(t,n,e,r){var i=y(n.name),l=g(i);return t(n.tag,a()([{class:[n.classPrefix,l?"":n.classPrefix+"-"+i],style:{color:n.color,fontSize:Object(c["a"])(n.size)}},Object(o["b"])(r,!0)]),[e.default&&e.default(),l&&t("img",{class:m("image"),attrs:{src:i}}),t(v,{attrs:{dot:n.dot,info:n.info}})])}O.props={dot:Boolean,name:String,size:[Number,String],info:[Number,String],color:String,tag:{type:String,default:"i"},classPrefix:{type:String,default:m()}};n["a"]=b(O)},b1d2:function(t,n,e){"use strict";e.d(n,"g",(function(){return r})),e.d(n,"a",(function(){return a})),e.d(n,"h",(function(){return i})),e.d(n,"e",(function(){return o})),e.d(n,"c",(function(){return l})),e.d(n,"b",(function(){return u})),e.d(n,"d",(function(){return s})),e.d(n,"f",(function(){return f}));var r="#ee0a24",a="#1989fa",i="#fff",c="van-hairline",o=c+"--top",l=c+"--left",u=c+"--bottom",s=c+"--surround",f=c+"--top-bottom"},ba31:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"a",(function(){return l})),e.d(n,"c",(function(){return u}));var r=e("c31d"),a=e("2b0e"),i=["ref","style","class","attrs","nativeOn","directives","staticClass","staticStyle"],c={nativeOn:"on"};function o(t,n){var e=i.reduce((function(n,e){return t.data[e]&&(n[c[e]||e]=t.data[e]),n}),{});return n&&(e.on=e.on||{},Object(r["a"])(e.on,t.data.on)),e}function l(t,n){for(var e=arguments.length,r=new Array(e>2?e-2:0),a=2;a<e;a++)r[a-2]=arguments[a];var i=t.listeners[n];i&&(Array.isArray(i)?i.forEach((function(t){t.apply(void 0,r)})):i.apply(void 0,r))}function u(t,n){var e=new a["a"]({el:document.createElement("div"),props:t.props,render:function(e){return e(t,Object(r["a"])({props:this.$props},n))}});return document.body.appendChild(e.$el),e}},c194:function(t,n,e){"use strict";e("68ef"),e("9d70"),e("3743"),e("1a04")},c31d:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));e("cca6");function r(){return r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},r.apply(this,arguments)}},c6ca:function(t,n,e){},d282:function(t,n,e){"use strict";var r="__",a="--";function i(t,n,e){return n?t+e+n:t}function c(t,n){if("string"===typeof n)return i(t,n,a);if(Array.isArray(n))return n.map((function(n){return c(t,n)}));var e={};return n&&Object.keys(n).forEach((function(r){e[t+a+r]=n[r]})),e}function o(t){return function(n,e){return n&&"string"!==typeof n&&(e=n,n=""),n=i(t,n,r),e?[n,c(n,e)]:n}}var l=e("a142"),u=/-(\w)/g;function s(t){return t.replace(u,(function(t,n){return n.toUpperCase()}))}var f=e("2b0e"),d=f["a"].extend({methods:{slots:function(t,n){void 0===t&&(t="default");var e=this.$slots,r=this.$scopedSlots,a=r[t];return a?a(n):e[t]}}});function v(t){var n=this.name;t.component(n,this),t.component(s("-"+n),this)}function p(t){var n=t.scopedSlots||t.data.scopedSlots||{},e=t.slots();return Object.keys(e).forEach((function(t){n[t]||(n[t]=function(){return e[t]})})),n}function b(t){return{functional:!0,props:t.props,model:t.model,render:function(n,e){return t(n,e.props,p(e),e)}}}function m(t){return function(n){return Object(l["c"])(n)&&(n=b(n)),n.functional||(n.mixins=n.mixins||[],n.mixins.push(d)),n.name=t,n.install=v,n}}var g=Object.prototype.hasOwnProperty;function h(t,n,e){var r=n[e];Object(l["b"])(r)&&(g.call(t,e)&&Object(l["d"])(r)?t[e]=y(Object(t[e]),n[e]):t[e]=r)}function y(t,n){return Object.keys(n).forEach((function(e){h(t,n,e)})),t}var O={name:"姓名",tel:"电话",save:"保存",confirm:"确认",cancel:"取消",delete:"删除",complete:"完成",loading:"加载中...",telEmpty:"请填写电话",nameEmpty:"请填写姓名",nameInvalid:"请输入正确的姓名",confirmDelete:"确定要删除吗",telInvalid:"请输入正确的手机号",vanCalendar:{end:"结束",start:"开始",title:"日期选择",confirm:"确定",weekdays:["日","一","二","三","四","五","六"],monthTitle:function(t,n){return t+"年"+n+"月"},rangePrompt:function(t){return"选择天数不能超过 "+t+" 天"}},vanContactCard:{addText:"添加联系人"},vanContactList:{addText:"新建联系人"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计："},vanCoupon:{unlimited:"无使用门槛",discount:function(t){return t+"折"},condition:function(t){return"满"+t+"元可用"}},vanCouponCell:{title:"优惠券",tips:"暂无可用",count:function(t){return t+"张可用"}},vanCouponList:{empty:"暂无优惠券",exchange:"兑换",close:"不使用优惠券",enable:"可用",disabled:"不可用",placeholder:"请输入优惠码"},vanAddressEdit:{area:"地区",postal:"邮政编码",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",postalEmpty:"邮政编码格式不正确",defaultAddress:"设为默认收货地址",telPlaceholder:"收货人手机号",namePlaceholder:"收货人姓名",areaPlaceholder:"选择省 / 市 / 区"},vanAddressEditDetail:{label:"详细地址",placeholder:"街道门牌、楼层房间号等信息"},vanAddressList:{add:"新增地址"}},j=f["a"].prototype,C=f["a"].util.defineReactive;C(j,"$vantLang","zh-CN"),C(j,"$vantMessages",{"zh-CN":O});var S={messages:function(){return j.$vantMessages[j.$vantLang]},use:function(t,n){var e;j.$vantLang=t,this.add((e={},e[t]=n,e))},add:function(t){void 0===t&&(t={}),y(j.$vantMessages,t)}};function k(t){var n=s(t)+".";return function(t){for(var e=S.messages(),r=Object(l["a"])(e,n+t)||Object(l["a"])(e,t),a=arguments.length,i=new Array(a>1?a-1:0),c=1;c<a;c++)i[c-1]=arguments[c];return Object(l["c"])(r)?r.apply(void 0,i):r}}function x(t){return t="van-"+t,[m(t),o(t),k(t)]}e.d(n,"a",(function(){return x}))},dfaf:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var r={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[Number,String],value:[Number,String],label:[Number,String],arrowDirection:String,border:{type:Boolean,default:!0}}},ea8e:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e("a142"),a=e("90c6");function i(t){if(Object(r["b"])(t))return t=String(t),Object(a["b"])(t)?t+"px":t}},fadf:function(t,n,e){t.exports=e.p+"img/s1.34f6b3fc.jpg"}}]);
//# sourceMappingURL=chunk-eafa4dbc.40abb2fd.js.map