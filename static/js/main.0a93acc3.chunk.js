(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{58:function(t,e,c){},60:function(t,e,c){"use strict";c.r(e);var n=c(24),r=c(6),o=c(26),i=c(10),l=c(12),s="ADD_TODO",a="REMOVE_TODO",d="TOGGLE_TODO",u=Object(r.a)({todos:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case s:return[].concat(Object(l.a)(t),[{id:Date.now(),title:e.title,completed:!1}]);case a:return t.filter((function(t){return t.id!==e.todoId}));case d:return t.map((function(t){return t.id===e.todoId?Object(i.a)(Object(i.a)({},t),{},{completed:!t.completed}):t}));default:return t}}}),j=c(25),b=c.n(j),O=c(7),p=c(8),f=c(1),h=(c(58),c(2)),x=function(){var t=Object(O.b)(),e=Object(f.g)().filter,c=Object(O.c)((function(t){return function(t,e){switch(e){case"active":return t.todos.filter((function(t){return!t.completed}));case"completed":return t.todos.filter((function(t){return t.completed}));default:return t.todos}}(t,e)}));return Object(h.jsx)("ul",{children:c.map((function(e){return Object(h.jsxs)("li",{children:[Object(h.jsx)("input",{type:"checkbox",checked:e.completed,onChange:function(){return t((c=e.id,{type:d,todoId:c}));var c}})," ",e.title," ",Object(h.jsx)("button",{type:"button",onClick:function(){return t((c=e.id,{type:a,todoId:c}));var c},children:"X"})]},e.id)}))})},m=function(){var t=Object(O.b)();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Add todo "}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c,n=e.target;t((c=n.title.value,{type:s,title:c})),e.target.reset()},children:[Object(h.jsx)("input",{type:"text",name:"title",placeholder:"New todo"}),Object(h.jsx)("button",{type:"submit",children:"Add item"})]})]})},v=function(){var t=Object(f.g)().filter,e=void 0===t?"all":t;return Object(h.jsxs)("div",{style:{marginTop:10,display:"flex",gap:10,justifyContent:"center"},children:[Object(h.jsx)(p.b,{to:"all",style:{color:"all"===e?"red":null},name:"button",children:"all"}),Object(h.jsx)(p.b,{to:"active",style:{color:"active"===e?"red":null},type:"button",children:"active"}),Object(h.jsx)(p.b,{to:"completed",style:{color:"completed"===e?"red":null},type:"button",children:"completed"})]})};function y(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(m,{}),Object(h.jsx)(v,{}),Object(h.jsx)(x,{})]})}var g=function(t){var e=t.store;return Object(h.jsx)(O.a,{store:e,children:Object(h.jsx)(p.a,{children:Object(h.jsx)(f.c,{children:Object(h.jsx)(f.a,{path:"/",element:Object(h.jsx)(y,{}),children:Object(h.jsx)(f.a,{path:":filter",element:Object(h.jsx)(y,{})})})})})})},D=function(){var t=function(){try{var t=localStorage.getItem("state");if(null===t)return;return JSON.parse(t)}catch(e){return}}(),e=Object(r.c)(u,t,Object(o.a)());return e.subscribe(b()((function(){!function(t){try{var e=JSON.stringify(t);localStorage.setItem("state",e)}catch(c){console.log(c)}}({todos:e.getState().todos})}),1e3)),e}(),I=document.getElementById("root");Object(n.createRoot)(I).render(Object(h.jsx)(g,{store:D}))}},[[60,1,2]]]);
//# sourceMappingURL=main.0a93acc3.chunk.js.map