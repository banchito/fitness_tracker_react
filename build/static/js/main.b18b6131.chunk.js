(this.webpackJsonpfitness_tracker_react=this.webpackJsonpfitness_tracker_react||[]).push([[0],{44:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var r=n(11),c=n(0),a=n(19),s=n.n(a),i=n(20),o=n(8),u=n(6),l=n.n(u),j=n(9),p=(n(44),n(45),"https://fitnesstrac-kr.herokuapp.com/api"),h=function(){var e=Object(j.a)(l.a.mark((function e(t,n){var r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(p,"/users/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:n})});case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,localStorage.setItem("token",JSON.stringify(c.token)),e.abrupt("return",c);case 11:throw e.prev=11,e.t0=e.catch(0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}(),b=function(){var e=Object(j.a)(l.a.mark((function e(t,n){var r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(p,"/users/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:n})});case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,localStorage.setItem("token",JSON.stringify(c.token)),e.abrupt("return",c);case 11:throw e.prev=11,e.t0=e.catch(0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(p,"/users/").concat(t,"/routines"),{headers:{"Content-Type":"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(p,"/activities"),{headers:{"Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(p,"/routines"),{headers:{"Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r,c,a,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,r=t.goal,c=t.isPublic,e.prev=1,a=JSON.parse(localStorage.getItem("token")),e.next=5,fetch("".concat(p,"/routines"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify({name:n,goal:r,isPublic:c})});case 5:return s=e.sent,e.next=8,s.json();case 8:return i=e.sent,e.abrupt("return",i);case 12:throw e.prev=12,e.t0=e.catch(1),e.t0;case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(j.a)(l.a.mark((function e(t,n,r,c){var a,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a=localStorage.getItem("token")){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,fetch("".concat(p,"/routines/").concat(t),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify({name:n,goal:r,isPublic:c})});case 6:return s=e.sent,e.next=9,s.json();case 9:return i=e.sent,e.abrupt("return",i);case 13:throw e.prev=13,e.t0=e.catch(0),e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n,r,c){return e.apply(this,arguments)}}(),v=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n=localStorage.getItem("token")){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,fetch("".concat(p,"/routines/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 6:return r=e.sent,e.next=9,r.json();case 9:return c=e.sent,e.abrupt("return",c);case 13:throw e.prev=13,e.t0=e.catch(0),e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();var g=n(1),y=function(e){var t=e.currentUser,n=e.setCurrentUser,a=e.setApiMessage,s=Object(c.useState)(""),o=Object(r.a)(s,2),u=o[0],p=o[1],d=Object(c.useState)(""),O=Object(r.a)(d,2),x=O[0],f=O[1],m=Object(c.useState)(),v=Object(r.a)(m,2),y=v[0],k=v[1],C=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),"logout"!==y){e.next=3;break}return e.abrupt("return",w());case 3:if("login"!==y){e.next=14;break}return e.prev=4,e.next=7,b(u,x);case 7:n=e.sent,S(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),console.log(e.t0);case 14:if("register"!==y){e.next=25;break}return e.prev=15,e.next=18,h(u,x);case 18:r=e.sent,S(r),e.next=25;break;case 22:e.prev=22,e.t1=e.catch(15),console.log(e.t1);case 25:case"end":return e.stop()}}),e,null,[[4,11],[15,22]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){localStorage.removeItem("currentUser"),n(null)},S=function(e){var t;a(e.message),t=e.user,localStorage.setItem("currentUser",JSON.stringify(t)),n(e.user),p(""),f("")};return Object(g.jsxs)("header",{children:[Object(g.jsx)("h1",{children:"Welcome to Fitness Tracker"}),Object(g.jsx)("form",{className:"user-select",onSubmit:C,children:t?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(i.b,{to:"/myroutines",activeClassName:"current",children:"My Routines"}),Object(g.jsx)(i.b,{to:"/publicroutines",activeClassName:"current",children:"Public Routines"}),Object(g.jsx)(i.b,{to:"/activities",activeClassName:"current",children:"Activities"}),Object(g.jsxs)("button",{name:"logout",type:"submit",value:"logout",onClick:function(){k("logout")},children:["LOG OUT, ",t.username]})]}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("input",{placeholder:"username",value:u,onChange:function(e){p(e.target.value)}}),Object(g.jsx)("input",{placeholder:"password",type:"password",value:x,onChange:function(e){f(e.target.value)}}),Object(g.jsx)("button",{name:"register",type:"submit",value:"register",onClick:function(){k("register")},children:"REGISTER"}),Object(g.jsx)("button",{name:"login",type:"submit",value:"login",onClick:function(){k("login")},children:"LOG IN"})]})})]})},k=n(21),C=n(28),w=n(16),S=n(17),N=n(15),T=function(e){var t=e.show,n=e.handleChange,r=e.formButton,c=e.handleClose,a=e.handleSubmit,s=e.setFormButton;return Object(g.jsx)("div",{children:Object(g.jsx)(w.a,{show:t,onHide:c,children:Object(g.jsxs)("form",{onSubmit:a,children:["create"===r&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(w.a.Header,{closeButton:!0,children:Object(g.jsx)(w.a.Title,{children:"New Routine"})}),Object(g.jsxs)(w.a.Body,{children:[Object(g.jsx)(N.a.Group,{controlId:"formBasicEmail",children:Object(g.jsx)(N.a.Control,{type:"text",name:"name",placeholder:"Enter routine name",onChange:n})}),Object(g.jsx)(N.a.Group,{controlId:"formBasicPassword",children:Object(g.jsx)(N.a.Control,{type:"text",name:"goal",placeholder:"Enter routine goal",onChange:n})})]}),Object(g.jsxs)(w.a.Footer,{children:[Object(g.jsx)(S.a,{variant:"secondary",type:"submit",onClick:function(){s("close"),c()},children:"Close"}),Object(g.jsx)(S.a,{variant:"primary",type:"submit",onClick:function(){c()},children:"Create"})]})]}),"update"===r&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(w.a.Header,{closeButton:!0,children:Object(g.jsx)(w.a.Title,{children:"Update Routine"})}),Object(g.jsxs)(w.a.Body,{children:[Object(g.jsx)(N.a.Group,{controlId:"formBasicEmail",children:Object(g.jsx)(N.a.Control,{type:"text",name:"name",placeholder:"Update routine name",onChange:n})}),Object(g.jsx)(N.a.Group,{controlId:"formBasicPassword",children:Object(g.jsx)(N.a.Control,{type:"text",name:"goal",placeholder:"Update routine goal",onChange:n})}),Object(g.jsx)(N.a.Group,{controlId:"formBasicCheckbox",children:Object(g.jsx)(N.a.Check,{type:"checkbox",name:"public",label:"Routine public",onChange:n})})]}),Object(g.jsxs)(w.a.Footer,{children:[Object(g.jsx)(S.a,{variant:"secondary",type:"submit",onClick:function(){s("close"),c()},children:"Close"}),Object(g.jsx)(S.a,{variant:"primary",type:"submit",onClick:function(){s("update"),c()},children:"Update"})]})]})]})})})},U=(n(71),function(e){var t=e.currentUser,n=e.userRoutines,a=(e.setUserRoutines,{routineID:"",name:"",goal:"",isPublic:!0}),s=Object(c.useState)(!1),i=Object(r.a)(s,2),o=i[0],u=i[1],p=Object(c.useState)({routineID:"",name:"",goal:"",isPublic:!0}),h=Object(r.a)(p,2),b=h[0],d=h[1],O=Object(c.useState)({routineID:"",name:"",goal:"",isPublic:!0}),x=Object(r.a)(O,2),y=x[0],w=x[1],N=Object(c.useState)(""),U=Object(r.a)(N,2),R=U[0],I=U[1],B=function(){return u(!0)},P=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),"openModal"!==R&&"close"!==R||(D(),I("")),"create"!==R){e.next=17;break}if(b.name&&b.goal){e.next=6;break}return e.abrupt("return");case 6:return e.prev=6,e.next=9,f(b);case 9:e.sent,D(),I(""),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),console.log(e.t0);case 17:if("update"!==R){e.next=29;break}return e.prev=18,e.next=21,m(y);case 21:e.sent,D(),I(""),e.next=29;break;case 26:e.prev=26,e.t1=e.catch(18),console.log(e.t1);case 29:case"end":return e.stop()}}),e,null,[[6,14],[18,26]])})));return function(t){return e.apply(this,arguments)}}(),A=function(e){var t=n.map((function(t){if(e===t.id)return t})),c=Object(r.a)(t,1)[0],a=c.id,s=c.name,i=c.goal,o=c.isPublic;w({id:a,name:s,goal:i,isPublic:o}),"delete"===R&&F(a)},F=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v(t);case 3:e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){d(a)};return Object(g.jsxs)("div",{className:"routines",children:[Object(g.jsxs)("h2",{children:["Hi ",t.username,", Here are your Routines \xa0|\xa0 ",Object(g.jsx)(S.a,{variant:"primary",onClick:function(){I("create"),B()},children:"Create Routine"})]}),Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(T,{show:o,formButton:R,handleClose:function(){return u(!1)},handleShow:B,handleChange:function(e){var t=e.target,n=t.name,r=t.value;d((function(e){return Object(C.a)(Object(C.a)({},e),{},Object(k.a)({},n,r))}))},handleSubmit:P,setFormButton:I})}),Object(g.jsxs)("p",{children:["There is a total of ",n.length," routines."]}),n.map((function(e){var t=e.id,n=e.name,r=e.goal,c=e.creatorName,a=e.activities;return Object(g.jsxs)("div",{className:"post",children:[Object(g.jsxs)("h3",{children:["Routine Name: ",n," \xa0|\xa0 ",Object(g.jsx)(S.a,{variant:"primary",onClick:function(){I("update"),B(),A(t)},children:"Update"}),"\xa0|\xa0 ",Object(g.jsx)(S.a,{variant:"primary",onClick:function(){I("delete"),A(t)},children:"Delete"})]}),Object(g.jsxs)("p",{children:["Routine Goal: ",r]}),Object(g.jsxs)("p",{children:["Creator Name: ",c]}),a.length>0?Object(g.jsxs)(g.Fragment,{children:[a.map((function(e){var t=e.id,n=e.name,r=e.description,c=e.duration,a=e.count;return Object(g.jsxs)("div",{className:"activities",children:[Object(g.jsxs)("h3",{children:["Routine Activity: ",n]}),Object(g.jsxs)("p",{children:["Activity Description: ",r]}),Object(g.jsxs)("p",{children:["Duration: ",c]}),Object(g.jsxs)("p",{children:["Count: ",a]})]},t)}))," "]}):Object(g.jsxs)(g.Fragment,{children:[" ",Object(g.jsxs)("p",{children:["There are ",a.length," Activities"]})," "]})]},t)}))]})}),R=(n(72),function(e){var t=e.currentUser,n=e.activities;return Object(g.jsxs)("div",{className:"activities",children:[Object(g.jsxs)("h2",{children:["Hi ",t.username,", Here are all activities"]}),Object(g.jsxs)("p",{children:["There is a total of ",n.length," activities."]}),n.map((function(e){var t=e.id,n=e.name,r=e.description;return Object(g.jsxs)("div",{className:"post",children:[Object(g.jsxs)("h3",{children:["Activity Name: ",n]}),Object(g.jsxs)("p",{children:["Description: ",r]})]},t)}))]})}),I=(n(73),function(e){var t=e.currentUser,n=e.routines;return Object(g.jsxs)("div",{className:"publicroutines",children:[Object(g.jsxs)("h2",{children:["Hi ",t.username,", Here are all public routines with their activities"]}),Object(g.jsxs)("p",{children:["There is a total of ",n.length," public routines."]}),n.map((function(e){var t=e.id,n=e.name,r=e.goal,c=e.creatorName,a=e.activities;return Object(g.jsxs)("div",{className:"post",children:[Object(g.jsxs)("h3",{children:["Routine Name: ",n]}),Object(g.jsxs)("p",{children:["Routine Goal: ",r]}),Object(g.jsxs)("p",{children:["Creator Name: ",c]}),a.map((function(e){var t=e.id,n=e.name,r=e.description,c=e.duration,a=e.count;return Object(g.jsxs)("div",{className:"activities",children:[Object(g.jsxs)("h3",{children:["Routine Activity: ",n]}),Object(g.jsxs)("p",{children:["Activity Description: ",r]}),Object(g.jsxs)("p",{children:["Duration: ",c]}),Object(g.jsxs)("p",{children:["Count: ",a]})]},t)}))]},t)}))]})}),B=(n(74),function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),u=Object(r.a)(s,2),l=u[0],j=u[1],p=Object(c.useState)([]),h=Object(r.a)(p,2),b=h[0],f=h[1],m=Object(c.useState)([]),v=Object(r.a)(m,2),k=v[0],C=v[1],w=Object(c.useState)(""),S=Object(r.a)(w,2),N=(S[0],S[1]);return Object(c.useEffect)((function(){if(!n)return j([]),f([]),void C([]);d(n.username).then((function(e){j(e)})).catch((function(e){console.log(e)})),O().then((function(e){C(e)})).catch((function(e){console.log(e)})),x().then((function(e){f(e)})).catch((function(e){console.log(e)}))}),[n]),Object(g.jsx)(i.a,{children:Object(g.jsxs)("div",{id:"App",children:[Object(g.jsx)(y,{currentUser:n,setCurrentUser:a,setApiMessage:N}),n?Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(o.d,{children:[Object(g.jsx)(o.b,{path:"/myroutines",children:Object(g.jsx)(U,{currentUser:n,userRoutines:l,setUserRoutines:j})}),Object(g.jsx)(o.b,{path:"/publicroutines",children:Object(g.jsx)(I,{currentUser:n,routines:b})}),Object(g.jsx)(o.b,{path:"/activities",children:Object(g.jsx)(R,{currentUser:n,activities:k})}),Object(g.jsx)(o.b,{exact:!0,path:"/",children:Object(g.jsxs)("h2",{style:{padding:".5em"},children:["Welcome, ",n.username]})}),Object(g.jsx)(o.a,{to:"/"})]})}):Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(o.d,{children:[Object(g.jsx)(o.b,{exact:!0,path:"/",children:Object(g.jsx)("h2",{style:{padding:".5em"},children:"Please register or log in, above."})}),Object(g.jsx)(o.a,{to:"/"})]})})]})})});s.a.render(Object(g.jsx)(B,{}),document.getElementById("app"))}},[[75,1,2]]]);
//# sourceMappingURL=main.b18b6131.chunk.js.map