(function(e){function t(t){for(var r,a,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-0d1b72d4":"930aa0c4","chunk-2d2138f6":"961cd8f0"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-0d1b72d4":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0d1b72d4":"592591de","chunk-2d2138f6":"31d6cfe0"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3d47":function(e,t,n){},"4e85":function(e,t,n){"use strict";var r=n("91a9"),a=n.n(r);a.a},5201:function(e,t,n){"use strict";var r=n("c35e"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("Header"),n("v-main",[n("router-view")],1),n("Footer")],1)},o=[],i=n("5530"),s=n("2f62"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-app-bar",{attrs:{app:"",color:"black",dark:""}},[n("Login"),n("v-spacer"),n("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}})],1),n("v-navigation-drawer",{attrs:{fixed:"",right:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},e._l(e.$router.options.routes,(function(t){return n("v-list-item",{key:t.path,on:{click:function(n){return e.$router.push(t.path)}}},[n("v-list-item-title",{attrs:{to:t.path}},[e._v(e._s(t.name))])],1)})),1)],1)],1)},u=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-menu",{attrs:{"open-on-hover":"",top:"","offset-y":"","close-on-content-click":!1,background:"white"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,a=t.attrs;return[n("v-btn",e._g(e._b({attrs:{color:"secondary",dark:""}},"v-btn",a,!1),r),[e._v("Login")])]}}])},[n("v-list",[n("v-list-item",[n("v-text-field",{attrs:{label:"Username","prepend-icon":"mdi-account-circle"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),n("v-list-item",[n("v-text-field",{attrs:{label:"Password",type:e.showPassword?"text":"password","prepend-icon":"mdi-lock","append-icon":"mdi-eye-off"},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),n("v-list-item",[n("v-btn",{attrs:{color:"success"}},[e._v("Register")]),n("v-spacer"),n("v-btn",{attrs:{color:"info"},on:{click:function(t){return e.authentication({email:e.username,password:e.password})}}},[e._v("Login")])],1)],1)],1)],1)},d=[],f={name:"Login",data:function(){return{username:null,password:null,showPassword:!1}},methods:Object(i["a"])({},Object(s["b"])(["authentication"])),computed:Object(i["a"])({},Object(s["c"])(["auth"]))},p=f,m=n("2877"),h=n("6544"),g=n.n(h),v=n("8336"),w=n("a523"),b=n("8860"),k=n("da13"),y=n("e449"),O=n("2fa4"),x=n("8654"),j=Object(m["a"])(p,l,d,!1,null,null,null),_=j.exports;g()(j,{VBtn:v["a"],VContainer:w["a"],VList:b["a"],VListItem:k["a"],VMenu:y["a"],VSpacer:O["a"],VTextField:x["a"]});var P={name:"Header",components:{Login:_},data:function(){return{showLogin:!1,username:null,password:null,drawer:!1}},methods:{toggleLogin:function(){this.showLogin=!this.showLogin}}},A=P,V=n("40dc"),C=n("5bc1"),L=n("5d23"),S=n("f774"),E=Object(m["a"])(A,c,u,!1,null,null,null),I=E.exports;g()(E,{VAppBar:V["a"],VAppBarNavIcon:C["a"],VContainer:w["a"],VList:b["a"],VListItem:k["a"],VListItemTitle:L["a"],VNavigationDrawer:S["a"],VSpacer:O["a"]});var R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-footer",{staticClass:"font-weight-small",attrs:{padless:"",relative:""}},[n("v-col",{staticClass:"text-center",attrs:{cols:"6"}},[e._v(" Created by: "),n("p",[e._v("Halvor Nafstad")])]),n("v-col",{staticClass:"text-center"},[e._v(" Contact: "),n("p",[e._v("mrnafstad@gmail.com")])])],1)],1)},U=[],F={name:"Footer"},B=F,N=(n("e736"),n("b0af")),T=n("62ad"),M=n("553a"),D=Object(m["a"])(B,R,U,!1,null,"16030ba6",null),H=D.exports;g()(D,{VCard:N["a"],VCol:T["a"],VFooter:M["a"]});var $={name:"App",components:{Header:I,Footer:H},data:function(){return{}},methods:Object(i["a"])({},Object(s["b"])(["authentication"])),created:function(){this.authentication({email:"halvornafstad@hotmail.com",password:"Smaaen"})}},q=$,J=n("7496"),Q=n("f6c4"),z=Object(m["a"])(q,a,o,!1,null,null,null),K=z.exports;g()(z,{VApp:J["a"],VMain:Q["a"]});var W=n("9483");Object(W["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var X=n("8c4f"),Y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"text-center",attrs:{id:"home"}},[r("img",{attrs:{id:"profilepic",src:n("6416")}}),r("br"),r("h1",[e._v(e._s(e.greeting)+"!")]),r("AboutMe")],1)},G=[],Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-row",e._l(e.Om,(function(t,r){return n("v-col",{key:r,staticClass:"text-start",attrs:{md:"4",sm:"8"}},[n("h3",[e._v(e._s(t.title))]),e._l(t.desc,(function(t,r){return n("v-list",{key:r},[e._v(" "+e._s(t)+" ")])}))],2)})),1)],1)},ee=[],te={data:function(){return{Om:[{id:1,title:"About me",desc:["After finishing my MSc in Astrophysics at UiO I started to play around with HTML and css while looking for a job.","Quite early I knew that this was something I wanted to master and work with, so I reached out to a close friend in the business and asked what I should learn.","He recommended learning a frontend framework, and as a fan he recommended Vuejs.","Thus, last summer I started to learn Vuejs and decided to take an extra year at university taking programming classes to get a more fundamental understanding of programming.","A little info about this site: It's built with Vuejs, using vuex, vue-router and vuetify. In the backend I have Firestore. You need to sign in to use the todo manager and profile view, and this is a feature reserved for myself at the time being. But feel free to have a look around!"]},{id:2,title:"Degrees",desc:["MSc, Astronomy (Cosmology) at UiO","BSc, Physics (Astronomy) at UiO"]},{id:3,title:"The Last Year",desc:["Functional Programming (scheme) - UiO","OOP (Java) - UiO","Databases and data modelling (relational databases, SQL) - UiO","Databasesystems (SQL, MongoDB++) - UiO","High Performance Computing (C) - UiO","Introductory Computertechnology - UiO","Vuejs + libraries","Firebase Firestore"]}]}}},ne=te,re=(n("5201"),n("0fd9")),ae=Object(m["a"])(ne,Z,ee,!1,null,"d72f9144",null),oe=ae.exports;g()(ae,{VCol:T["a"],VContainer:w["a"],VList:b["a"],VRow:re["a"]});var ie={components:{AboutMe:oe},data:function(){return{greeting:"Hello world, it's me"}},methods:Object(i["a"])({},Object(s["b"])(["authentication"])),created:function(){this.authentication({email:"halvornafstad@hotmail.com",password:"Smaaen"})}},se=ie,ce=(n("4e85"),Object(m["a"])(se,Y,G,!1,null,"274924bc",null)),ue=ce.exports;g()(ce,{VContainer:w["a"]}),r["a"].use(X["a"]);var le=[{path:"/",name:"Home",component:ue},{path:"/blog",name:"Blog",component:function(){return n.e("chunk-0d1b72d4").then(n.bind(null,"fd3f"))}},{path:"/projects",name:"Projects",component:function(){return n.e("chunk-2d2138f6").then(n.bind(null,"acca"))}}],de=new X["a"]({routes:le}),fe=de,pe=(n("96cf"),n("1da1")),me=n("8aa5"),he=n.n(me),ge=(n("e71f"),{apiKey:"AIzaSyDo0kCy6vOvX_gR9wmk5eoLBc6DMofgX2g",authDomain:"hsite-3e53a.firebaseapp.com",databaseURL:"https://hsite-3e53a.firebaseio.com",projectId:"hsite-3e53a",storageBucket:"hsite-3e53a.appspot.com",messagingSenderId:"1049810111052",appId:"1:1049810111052:web:9d93b5883ade4f954102e9"});he.a.initializeApp(ge);var ve=he.a.firestore(),we=ve.collection("todos"),be=ve.collection("blog"),ke=he.a.auth(),ye=he.a.firestore.FieldValue.increment(1),Oe={db:ve,auth:ke,todos:we,blog:be,increment:ye},xe={authenticated:!1,user:{}},je={auth:function(e){return e.authenticated},user:function(e){return e.user}},_e={authentication:function(e,t){return Object(pe["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,Oe.auth.signInWithEmailAndPassword(t.email,t.password).then((function(e){console.log("Signed in with: ",t.email),r("authenticate",!0),r("setUser",e)})).catch((function(e){console.error("Error signing in: ",e)}));case 3:case"end":return n.stop()}}),n)})))()},signUp:function(e,t){return Object(pe["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,Oe.auth.createUserWithEmailAndPassword(t.email,t.password).then((function(e){console.log("Signed up with: ",t.email),r("authenticate",!0),r("setUser",e)})).catch((function(e){console.error("Error while signing up: ",e)}));case 3:case"end":return n.stop()}}),n)})))()},logOut:function(e){return Object(pe["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,Oe.auth.signOut().then((function(){console.log("Signout successfull"),n("authenticate",!1)})).catch((function(e){console.error("An error occured while signing out: ",e)}));case 3:case"end":return t.stop()}}),t)})))()},updateDisplayName:function(e){return Object(pe["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Oe.auth.currentUser.updateProfile({displayName:e}).then((function(){console.log("Username set")})).catch((function(e){console.error("An error accured updating displayName: ",e)}));case 2:case"end":return t.stop()}}),t)})))()},deleteAccount:function(e){return Object(pe["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,Oe.auth.currentUser.delete().then((function(){n("authenticate",!1)})).catch((function(e){console.error("An error occured deleting account: ",e)}));case 3:case"end":return t.stop()}}),t)})))()}},Pe={authenticate:function(e,t){return e.authenticated=t},setUser:function(e,t){var n=t.user;return e.user=n}},Ae={state:xe,mutations:Pe,actions:_e,getters:je},Ve=(n("4160"),n("159b"),{posts:[],isFetched:!1}),Ce={allPosts:function(e){return e.posts}},Le={getPosts:function(e){return Object(pe["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.commit,Ve.isFetched){t.next=4;break}return t.next=4,Oe.blog.orderBy("timeOfPost").get().then((function(e){e.forEach((function(e){n("newPost",{id:e.id,title:e.data().title,post:e.data().post,likes:e.data().likes,timeOfPost:e.data().timeOfPost})})),Ve.isFetched=!Ve.isFetched}));case 4:case"end":return t.stop()}}),t)})))()},newLike:function(e){return Object(pe["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,Oe.blog.doc(e).update({likes:Oe.incerement}).then((function(){console.log("like added")})).catch((function(e){console.error("An error occured liking a post: ",e)}));case 3:case"end":return t.stop()}}),t)})))()},commitPost:function(e,t){return Object(pe["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,Oe.blog.add({title:t.title,post:t.postText,likes:0,timeOfPost:new Date}).then((function(e){console.log("Post added"),r("newPost",{id:e.id,title:e.data().title,post:e.data().post,likes:e.data().likes,timeOfPost:e.data().timeOfPost})})).catch((function(e){console.error("An error occured adding the new post: ",e)}));case 3:case"end":return n.stop()}}),n)})))()}},Se={newPost:function(e,t){return e.posts.unshift(t)}},Ee={state:Ve,getters:Ce,actions:Le,mutations:Se};r["a"].use(s["a"]);var Ie=new s["a"].Store({modules:{users:Ae,blog:Ee}}),Re=n("f309");r["a"].use(Re["a"]);var Ue=new Re["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:fe,store:Ie,vuetify:Ue,render:function(e){return e(K)}}).$mount("#app")},6416:function(e,t,n){e.exports=n.p+"img/profilepic.cfab817a.jpg"},"91a9":function(e,t,n){},c35e:function(e,t,n){},e736:function(e,t,n){"use strict";var r=n("3d47"),a=n.n(r);a.a}});
//# sourceMappingURL=app.ec35f2b2.js.map