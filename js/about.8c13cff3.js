(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"35fd":function(t,e,o){"use strict";var n=o("48e5"),a=o.n(n);a.a},4864:function(t,e,o){"use strict";var n=o("c1a9"),a=o.n(n);a.a},"48e5":function(t,e,o){},"75cf":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.loaded?o("div",[o("h3",[t._v("Todos")]),t._m(0),o("AddTodo"),o("FilterTodos"),o("div",{staticClass:"todos"},t._l(t.allTodos,(function(e,n){return o("div",{key:n,staticClass:"todo",class:{"is-complete":e.completed},on:{click:function(o){return t.onDblClick(e)}}},[t._v(" "+t._s(e.title)+" "),o("i",{staticClass:"fas fa-trash-alt",on:{click:function(o){return t.deleteTodo(e.id)}}})])})),0)],1):t._e(),t.loaded?t._e():o("div",[t._v(" Loading todos... ")])])},a=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"legend"},[o("span",[t._v("Click to mark as complete")]),o("span",[o("span",{staticClass:"incomplete-box"}),t._v(" = Incomplete ")]),o("span",[o("span",{staticClass:"complete-box"}),t._v(" = Complete ")])])}],i=o("5530"),s=o("2f62"),l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._v(" Filter Todos: "),o("select",{on:{change:function(e){return t.filterTodos(e)}}},[o("option",{attrs:{value:"200"}},[t._v("200")]),o("option",{attrs:{value:"100"}},[t._v("100")]),o("option",{attrs:{value:"50"}},[t._v("50")]),o("option",{attrs:{value:"20"}},[t._v("20")]),o("option",{attrs:{value:"10"}},[t._v("10")]),o("option",{attrs:{value:"5"}},[t._v("5")])])])},d=[],c={name:"FilterTodos",methods:Object(s["b"])(["filterTodos"])},r=c,u=(o("4864"),o("2877")),v=Object(u["a"])(r,l,d,!1,null,null,null),f=v.exports,p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h3",[t._v("Add Todo")]),o("div",{staticClass:"add"},[o("form",{on:{submit:t.onSubmit}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"Add Todo..."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("input",{attrs:{type:"submit",value:"Submit"}})])])])},m=[],b={name:"AddTodo",data:function(){return{title:""}},methods:Object(i["a"])(Object(i["a"])({},Object(s["b"])(["addTodo"])),{},{onSubmit:function(t){t.preventDefault(),this.addTodo(this.title)}})},_=b,T=(o("fd42"),Object(u["a"])(_,p,m,!1,null,"01301998",null)),h=T.exports,j={data:function(){return{name:"Todos",loading:!0,loaded:!1}},components:{FilterTodos:f,AddTodo:h},methods:Object(i["a"])(Object(i["a"])({},Object(s["b"])(["fetchTodos","deleteTodo","updateTodo"])),{},{onDblClick:function(t){var e={id:t.id,title:t.title,completed:!t.completed};this.updateTodo(e)}}),computed:Object(s["c"])(["allTodos"]),created:function(){this.fetchTodos().then(this.loaded=!0)}},C=j,O=(o("35fd"),Object(u["a"])(C,n,a,!1,null,"2baca789",null));e["default"]=O.exports},c1a9:function(t,e,o){},ef99:function(t,e,o){},fd42:function(t,e,o){"use strict";var n=o("ef99"),a=o.n(n);a.a}}]);
//# sourceMappingURL=about.8c13cff3.js.map