(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d238446"],{ff3c:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:{width:t.width}},[a("el-form",{ref:"formData",staticStyle:{width:"100%","text-align":"left"},attrs:{"label-position":"top"},model:{value:t.formData,callback:function(e){t.formData=e},expression:"formData"}},[a("el-form-item",{attrs:{label:"请输入地下城体力家具数量:"}},[a("el-input",{attrs:{type:"number",max:3,min:0},model:{value:t.formData.underNum,callback:function(e){t.$set(t.formData,"underNum",e)},expression:"formData.underNum"}})],1),a("el-form-item",{attrs:{label:"请输入宿舍体力桌等级:"}},[a("el-input",{attrs:{type:"number",max:9,min:1},model:{value:t.formData.houseLevel,callback:function(e){t.$set(t.formData,"houseLevel",e)},expression:"formData.houseLevel"}})],1),a("el-form-item",{attrs:{label:"请选择下线时间:"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:t.formData.offTime,callback:function(e){t.$set(t.formData,"offTime",e)},expression:"formData.offTime"}})],1),a("el-form-item",{attrs:{label:"请选择上线时间:"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:t.formData.onTime,callback:function(e){t.$set(t.formData,"onTime",e)},expression:"formData.onTime"}})],1),t.formData.info?a("el-form-item",{staticStyle:{"text-align":"left"},domProps:{innerHTML:t._s(t.formData.info)}}):t._e(),a("el-form-item",{staticStyle:{"text-align":"right"}},[a("el-button",{attrs:{type:"primary"},on:{click:t.calculate}},[t._v(" 计算 ")])],1)],1)],1)},n=[],o=(a("99af"),10),l={unit:12,size:360,max:48,emailbale:!0},r={unit:1,size:6},s={name:"Tango",data:function(){return{formData:{houseLevel:6,underNum:3,charLevel:50,offTime:new Date(2020,3,30,23,0,0),onTime:new Date(2020,4,1,8,0,0),ifLevelUp:!1,info:""},width:"400px"}},created:function(){/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)&&(this.width="100%")},computed:{table:function(){var t=22+2*this.formData.houseLevel;return{unit:t,max:24*t,size:360,emailbale:!0}}},methods:{calculateAuto:function(t){return r.unit*parseInt(t/r.size)},calculateHouse:function(t){var e=parseInt(t/l.size);return e=e>=4?4:e,l.unit*e*this.formData.underNum+this.table.unit*e},getMinutes:function(t){return t.getTime()/6e4},getDateString:function(t,e){var a=t.getFullYear(),i=t.getMonth()+1,n=t.getDate(),o=t.getHours(),l=t.getMinutes(),r=t.getSeconds();if(e)return t=new Date(a,i-1,n+e,o,l,r),this.getDateString(t);function s(t){return t>9?t:"0"+t}return"".concat(s(i),"月").concat(s(n),"日").concat(s(o),":").concat(s(l))},calculate:function(){var t=this.getMinutes(this.formData.onTime)-this.getMinutes(this.formData.offTime);if(console.log(t),t<=0)alert("日期错误");else{var e=this.calculateHouse(t),a=this.calculateHouse(1440);this.formData.info="<p>建议：</p><ul style='line-height:30px'>\n        <li>".concat(this.getDateString(this.formData.offTime,-1)," 领完宿舍体力，已经过时则不领取，会少一部分体力。</li>\n        <li>").concat(this.getDateString(this.formData.offTime)," 前清完每日并调整体力至79（请确保能在跳80之前完成购买和领取操作）。</li>\n        <li>购买6管体力，领取任务体力200，体力到达999</li>\n        <li>领取宿舍体力").concat(a,",工会点赞").concat(o,"体力。</li>\n        <li>").concat(a+o,"体力会存入邮件</li>\n        <li>").concat(this.getDateString(this.formData.onTime)," 上线时领取宿舍体力，总共获得").concat(a+o+e+999,"体力</li>\n        </ul>")}}}},c=s,u=a("2877"),m=Object(u["a"])(c,i,n,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d238446.615d5237.js.map
