(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bb20528"],{"2a37":function(e,t,n){"use strict";var a=n("5ccf"),s=n.n(a);s.a},"5ccf":function(e,t,n){},c66d:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.auth?n("div",[n("p",[e._v("Email: "+e._s(e.user.email))]),e.user.displayName?n("p",[e._v("Name: "+e._s(e.user.displayName))]):e._e(),e.user.displayName?e._e():n("div",[e._v("Your username is not set: "),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{placeholder:"Username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),n("button",{attrs:{id:"setname"},on:{click:e.setUsername}},[e._v("Set username")])])]),e.verify?e._e():n("button",{attrs:{id:"delete"},on:{click:e.verifyDelete}},[e._v("Delete account")]),e.verify?n("div",[e._v(" Are you sure you want to delete your account? "),n("p",[n("button",{attrs:{id:"delete"},on:{click:e.deleteAccount}},[e._v("Yes")]),n("button",{attrs:{id:"delete"},on:{click:e.verifyDelete}},[e._v("No, I changed my mind")])])]):e._e()]):e._e(),e.auth?e._e():n("div",[e._v("You need to sign in")])])},s=[],u=n("5530"),i=n("2f62"),r={name:"Profile",data:function(){return{username:"",verify:!1}},methods:Object(u["a"])(Object(u["a"])({},Object(i["b"])(["updateDisplayName","deleteAccount"])),{},{setUsername:function(){this.updateDisplayName(this.username),console.log("usernameset: ",this.username)},verifyDelete:function(){this.verify=!this.verify}}),computed:Object(u["a"])({},Object(i["c"])(["auth","user"]))},c=r,o=(n("2a37"),n("2877")),l=Object(o["a"])(c,a,s,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-7bb20528.af13bfb6.js.map