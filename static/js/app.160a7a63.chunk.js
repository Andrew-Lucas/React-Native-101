(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{67:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return E}));var r=n(17),o=n.n(r),i=n(2),c=n.n(i),l=n(36),a=n.n(l),s=(n(96),n(0)),u=n(39),d=n(3),f=n(34),p=n(5),y=n(65),b=n(21),j=n(27),h=n(4);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=function(e){var t=e.styles,n=e.work,r=e.activeTab,o=e.travel;return Object(h.jsxs)(p.default,{style:t.header,children:[Object(h.jsx)(j.default,{onPress:n,children:Object(h.jsx)(b.default,{style:g(g({},t.tabsText),{},{color:r("white","gray"),textDecorationLine:r("underline","none")}),children:"Work"})}),Object(h.jsx)(j.default,{onPress:o,children:Object(h.jsx)(b.default,{style:g(g({},t.tabsText),{},{color:r("gray","white"),textDecorationLine:r("none","underline")}),children:"Travel"})})]})},x=n(37),v=n(66),P=n(19),k=n(68);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=function(e){var t=e.styles,n=e.todos,r=e.setTodos,i=e.saveTodos,c=e.working;function l(){return(l=o()((function*(e){var t=D({},n);t[e].done=!t[e].done,yield i(t)}))).apply(this,arguments)}function a(){return(a=o()((function*(e){if("web"===P.default.OS){if(confirm("Are you sure you want to edit?","lalo")){var t=D({},n),r=prompt("Edit",""+t[e].text);t[e].text=r,yield i(t)}}else x.default.alert("Edit Todo","Are you sure you want to edit?",[{text:"Cancel",style:"cancel"},{text:"Edit",onPress:function(){var t=o()((function*(){var t=D({},n);x.default.prompt(c?"Edit this task":"Edit location","",[{text:"Cancel",style:"cancel"},{text:"Save",onPress:function(){var n=o()((function*(n){""!==n&&(t[e].text=n,yield i(t))}));return function(e){return n.apply(this,arguments)}}()}],"plain-text",""+t[e].text)}));return function(){return t.apply(this,arguments)}}()}])}))).apply(this,arguments)}var s=function(){var e=o()((function*(e){if("web"===P.default.OS){var t=confirm("Do you want to delete this todo?");if(console.log("lalo"),t){console.log("lola");var c=D({},n);delete c[e],console.log(c),yield i(c)}}else x.default.alert("Delete Todo","Are you sure?",[{text:"Cancel"},{text:"Delete",style:"destructive",onPress:function(){var t=o()((function*(){var t=D({},n);delete t[e],r(t),yield i(t)}));return function(){return t.apply(this,arguments)}}()}])}));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(v.default,{contentContainerStyle:t.scrollView,children:Object.keys(n).map((function(e){return n[e].work===c?Object(h.jsxs)(p.default,{style:D(D({},t.todoHolder),{},{backgroundColor:n[e].done?"royalblue":"#202020"}),children:[Object(h.jsx)(k.default,{style:t.checkbox,value:n[e].done,onValueChange:function(){!function(e){l.apply(this,arguments)}(e)},color:n[e].done?"rgb(37, 76, 193)":void 0}),Object(h.jsx)(b.default,{style:{textDecorationLine:n[e].done?"line-through":null,color:n[e].done?"gray":"white"},children:n[e].text}),Object(h.jsxs)(p.default,{style:{flexDirection:"row"},children:[Object(h.jsx)(j.default,{style:{marginRight:"10%"},onPress:function(){return function(e){return a.apply(this,arguments)}(e)},children:Object(h.jsx)(b.default,{style:{color:n[e].done?"gray":"white"},children:"Edit"})}),Object(h.jsx)(j.default,{activeOpacity:"0.5",children:Object(h.jsx)(b.default,{onPress:function(){return s(e)},style:{color:n[e].done?"gray":"white"},children:"Delete"})})]})]},e):null}))})},T=f.default.get("window").width;function E(){var e=Object(s.useState)(!0),t=a()(e,2),n=t[0],r=t[1],i=Object(s.useState)(""),l=a()(i,2),d=l[0],f=l[1];var b,j=Object(s.useState)({}),O=a()(j,2),g=O[0],x=O[1],v=function(){var e=o()((function*(e){yield u.default.setItem("todos",JSON.stringify(e))}));return function(t){return e.apply(this,arguments)}}();function P(){return(P=o()((function*(){var e=yield u.default.getItem("todos");e&&(b=JSON.parse(e),x(b))}))).apply(this,arguments)}return Object(s.useEffect)((function(){!function(){P.apply(this,arguments)}()}),[g]),Object(h.jsxs)(p.default,{style:C.container,children:[Object(h.jsx)(w,{styles:C,work:function(){r(!0),f("")},activeTab:function(e,t){return n?e:t},travel:function(){r(!1),f("")}}),Object(h.jsx)(y.default,{returnKeyType:"done",onSubmitEditing:function(){if(""!==d){var e=Object.assign({},g,c()({},Date.now(),{text:d,work:n,done:!1}));v(e),f("")}},value:d,onChangeText:function(e){f(e)},style:C.textInput,placeholder:n?"Write your work list":"Write your travel list"}),Object(h.jsx)(S,{styles:C,todos:g,setTodos:x,working:n,saveTodos:v})]})}var C=d.default.create({container:{flex:1,backgroundColor:"black",alignItems:"center"},header:{flexDirection:"row",paddingHorizontal:30,paddingTop:100,width:T,justifyContent:"space-between"},tabsText:{color:"white",fontSize:30,fontWeight:"500"},textInput:{width:"95%",backgroundColor:"white",borderRadius:25,marginVertical:15,paddingVertical:10,paddingHorizontal:15,fontSize:17},scrollView:{alignItems:"center",width:T,paddingHorizontal:15,gap:50},todoHolder:{width:"100%",flexDirection:"row",justifyContent:"space-between",paddingVertical:17,paddingHorizontal:10,borderRadius:10,marginTop:10},checkbox:{height:20,width:20,borderRadius:5}})},69:function(e,t,n){e.exports=n(97)}},[[69,1,2]]]);
//# sourceMappingURL=app.160a7a63.chunk.js.map