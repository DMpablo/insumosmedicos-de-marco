(this["webpackJsonpinsumosmed-de-marco"]=this["webpackJsonpinsumosmed-de-marco"]||[]).push([[0],{39:function(e,t,c){},42:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);c(39);var n=c(28),a=c.n(n),i=c(20),r=c(36),s=c(16),o=c(3),j=c.n(o),l=c(9),d=(c(42),c(10)),b=c(25),u=c(2),m=Object(o.createContext)(),O=function(e){var t=e.children,c=Object(o.useState)([]),n=Object(s.a)(c,2),a=n[0],i=n[1],r=Object(o.useState)(0),j=Object(s.a)(r,2),l=j[0],d=j[1],O=0;a.map((function(e){return O+=Number(e.price*e.units)}));return Object(o.useEffect)((function(){d(a.length)}),[a]),Object(u.jsx)(m.Provider,{value:{cart:a,addToCart:function(e){i([].concat(Object(b.a)(a),[e]))},removeFromCart:function(e){var t=a.filter((function(t){return t.id!==e}));i(t)},quantity:l,clearCart:function(){i([])},cartTotal:O,addUnit:function(e){var t=Object(b.a)(a);e.stock>e.units?(t[t.findIndex((function(t){return t.id===e.id}))].units+=1,i(t)):alert("No tenemos mas cantidad de ".concat(e.title,", stock actual es: ").concat(e.stock))},restUnit:function(e){var t=Object(b.a)(a);1===t[a.findIndex((function(t){return t.id===e.id}))].units?console.log("no hace nada"):t[t.findIndex((function(t){return t.id===e.id}))].units-=1,i(t)}},children:t})},x=function(e){var t=e.ItemID,c=e.onAdd,n=Object(o.useContext)(m).cart;return Object(u.jsxs)("div",{className:"item_detail_container",children:[Object(u.jsx)("img",{src:t.imageId,alt:t.title}),Object(u.jsxs)("div",{className:"item_detail",children:[Object(u.jsx)("p",{className:"title_detail",children:t.title}),Object(u.jsx)("p",{className:"title_detail",children:t.description}),Object(u.jsx)("p",{className:"price_detail",children:t.price}),Object(u.jsx)("div",{className:"function_buttons",children:n.find((function(e){return e.id===t.id}))?Object(u.jsx)(d.b,{to:"/cart",children:Object(u.jsx)("button",{className:"btn btn_add",children:"ver en carrito"})}):Object(u.jsx)("button",{className:"btn btn_add",onClick:c,children:"Agregar al carrito"})})]})]})},h=function(e){var t=e.itemsFirebase,c=Object(l.f)().id,n=Object(o.useContext)(m).addToCart,a=t.find((function(e){return e.id===c}));return Object(u.jsx)("div",{children:a?Object(u.jsx)(x,{ItemID:a,onAdd:function(){return n(a)}}):Object(u.jsx)("p",{children:"Cargando datos..."})})},p=(c(48),function(e){return Object(u.jsx)("div",{className:"container-greeting",children:Object(u.jsxs)("h1",{className:"insumos",children:[e.name[0]," ",Object(u.jsx)("span",{className:"medicos",children:e.name[1]})]})})}),f=(c(49),function(e){var t=e.itemsFirebase,c=[];if(void 0!==t){var n=new Set(t.map((function(e){return e.category})));c=Array.from(n)}return Object(u.jsx)("div",{className:"item_list",children:void 0===t?Object(u.jsx)("div",{className:"progress",children:Object(u.jsx)("div",{className:"indeterminate"})}):Object(u.jsx)("div",{className:"category_container",children:c.map((function(e,t){return Object(u.jsx)(d.b,{to:"/category/".concat(e),children:Object(u.jsx)("button",{className:"btn-flat button",children:e})},t)}))})})}),v=function(){return Object(u.jsxs)("div",{className:"item_list_container",children:[Object(u.jsx)("div",{children:Object(u.jsx)(p,{name:["insumos","medicos"]})}),Object(u.jsx)("div",{className:"row",children:Object(u.jsx)(f,{path:"/category"})})]})},N=(c(50),c(51),c(52),function(){return Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:" btn",children:"ver mas"})})}),g=function(e){var t=e.newCat,c=Object(o.useContext)(m).cart;return Object(u.jsx)("div",{className:"product-card",children:Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("div",{className:"card-image",children:Object(u.jsx)("img",{src:t.imageId,alt:"imagen producto"})}),Object(u.jsxs)("div",{className:"card-content",children:[Object(u.jsx)("span",{className:"card-title",children:t.title}),Object(u.jsxs)("b",{children:["$ ",t.price]})]}),c.find((function(e){return e.id===t.id}))?Object(u.jsx)(d.b,{to:"/cart",children:Object(u.jsx)("button",{className:"btn btn_add",children:"ver en carrito"})}):Object(u.jsx)(d.b,{to:"/itemDetailContainer/".concat(t.category,"/").concat(t.id),children:Object(u.jsx)(N,{})})]})})},_=function(e){var t=e.itemsFirebase,c=Object(l.f)().catName,n=t.filter((function(e){return e.category===c}));return Object(u.jsx)("div",{className:"item_list",children:void 0===n?Object(u.jsx)("p",{children:"Cargando datos"}):n.map((function(e,t){return Object(u.jsx)(g,{newCat:e},t)}))})},y=(c(53),c.p+"static/media/basket-outline.aeaef300.svg"),C=function(e){var t=e.quantity;return Object(u.jsx)("p",{className:"quantity_product",children:t})},k=function(e){var t=e.quantity;return Object(u.jsxs)("nav",{className:"navBar",children:[Object(u.jsxs)(d.b,{className:"nombre_logo",to:"/",children:["i",Object(u.jsx)("strong",{children:" m"})," "]}),Object(u.jsxs)("ul",{id:"nav-mobile",className:"right",children:[Object(u.jsx)("li",{children:Object(u.jsx)(d.b,{to:"/category",children:"productos"})},"index"),Object(u.jsx)("p",{children:"|"}),Object(u.jsx)("li",{children:Object(u.jsx)(d.b,{to:"/contact",children:"contacto"})})]}),Object(u.jsx)(d.b,{to:"/cart",children:Object(u.jsxs)("div",{className:"container-avatar",children:[Object(u.jsx)("img",{className:"carrito-svg",src:y,alt:"svg-carrito"}),Object(u.jsx)(C,{quantity:t}),Object(u.jsx)("p",{children:"|"})]})})]})},I=(c(54),function(){return Object(u.jsxs)("footer",{className:"footer_container",children:[Object(u.jsx)("h3",{className:"footer_title",children:"Este es el footer \ud83e\uddb6"})," ",Object(u.jsx)("br",{}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"Aca van a estar los datos de contacto"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(d.b,{to:"/",children:"volver al home "})}),Object(u.jsx)("p",{children:"|"}),Object(u.jsx)("li",{children:Object(u.jsx)(d.b,{to:"/contact",children:"contacto"})})]})]})]})}),F=(c(55),c(56),c(57),function(e){var t=e.item,c=Object(o.useContext)(m),n=c.removeFromCart,a=c.restUnit,i=c.addUnit;return Object(u.jsx)("div",{className:"container-carrito",children:Object(u.jsxs)("div",{className:"container_button_change",children:[Object(u.jsx)("button",{className:"btn",onClick:function(){return i(t)},children:"+"}),Object(u.jsx)("p",{children:t.units}),Object(u.jsx)("button",{className:"btn",onClick:function(){return a(t)},children:"-"}),Object(u.jsx)("button",{className:"btn",onClick:function(){return n(t.id)},children:"\u2716"})]})})});var D=function(e){var t=e.imageId,c=e.title,n=e.price,a=e.item,i=e.stock;return Object(u.jsxs)("div",{className:"cart_detail row",children:[Object(u.jsx)("div",{className:"container_img col  s4",children:Object(u.jsx)("img",{src:t,alt:""})}),Object(u.jsxs)("div",{className:"detail_price_button col s8",children:[Object(u.jsx)("p",{className:"detail_title",children:c}),Object(u.jsxs)("p",{children:["Stock disponible: ",i]}),Object(u.jsxs)("b",{className:"detail_price",children:["$",n]}),Object(u.jsx)(F,{item:a})]})]})},w=c(32),S=(c(63),w.a.initializeApp({apiKey:"AIzaSyDYz4gAYQarZNs6KYRUeYDBqGKr5tz2C7k",authDomain:"insumos-medicos-53864.firebaseapp.com",projectId:"insumos-medicos-53864",storageBucket:"insumos-medicos-53864.appspot.com",messagingSenderId:"294292958958",appId:"1:294292958958:web:9b61adadeae9d5aaeb8dff",measurementId:"G-GW13JM6GEG"})),q=function(){return w.a.firestore(S)},E=c(23);c(64);var z=function(e){var t=e.dataBuyer,c=e.setDataBuyer;return Object(u.jsxs)(o.Fragment,{children:[Object(u.jsx)("h2",{className:"title_form",children:"Carga tus datos para finalizar la compra!"}),Object(u.jsx)("form",{children:[{id:"name",type:"text",placeholder:"escribe tu nombre / apodo"},{id:"phone",type:"Number",placeholder:"Un telefono de contacto"},{id:"email",type:"email",placeholder:"tu email"},{id:"email2",type:"email",placeholder:"otra vez tu email"}].map((function(e){return Object(u.jsx)("div",{children:Object(u.jsxs)("label",{htmlFor:e.id,children:[e.id,":",Object(u.jsx)("input",{id:e.id,type:e.type,onChange:function(n){var a=n.target;return function(e,n){var a=Object(i.a)(Object(i.a)({},t),{},Object(E.a)({},e,n));c(a)}(e.id,a.value)},placeholder:e.placeholder})]})},e.id)}))})]})},A=function(){var e=Object(o.useContext)(m),t=e.cart,c=e.clearCart,n=e.cartTotal,a=Object(o.useState)({name:"",phone:0,email:"",email2:""}),i=Object(s.a)(a,2),r=i[0],j=i[1],l=Object(o.useState)(""),d=Object(s.a)(l,2),b=d[0],O=d[1],x=t.map((function(e){return{title:e.title,quantity:e.units,price:e.price}})),h=Object(o.useState)(""),p=Object(s.a)(h,2),f=p[0],v=p[1];Object(o.useEffect)((function(){r.email!==r.email2?v("\ud83d\udc6e\u200d\u2640\ufe0f\ud83d\udce2 : email no coinside \ud83d\ude12\u2709"):""===r.email||""===r.name||""===r.phone?v("\ud83d\udc6e\u200d\u2640\ufe0f\ud83d\udce2 : tenes casilleros sin completar"):v(Object(u.jsx)("button",{className:"btn buy_finish",onClick:N,children:"Finalizar la compra \ud83d\udc4c"}))}),[r]);var N=function(){var e=q(),a=e.batch();t.forEach((function(t){var i=e.collection("items").doc(t.id);a.update(i,{stock:t.stock-t.units}),function(){var e=q().collection("orders"),t={buyer:r,items:x,totalPrice:n};e.add(t).then((function(e){var t=e.id;O(t)})).catch((function(e){return e})),alert("".concat(r.name,", gracias por tu compra !!\n\nDescripcion de tu orden:\n").concat(x.map((function(e){return"".concat(e.quantity," ").concat(e.title,", ($").concat(e.price," x unidad)\n")})),"\n      total: $ ").concat(n)),c()}()}))};return Object(u.jsx)("div",{className:"container_if_else",children:t.length>0?Object(u.jsxs)("div",{className:"cart_container_if row",children:[Object(u.jsxs)("div",{className:"container_cart col s12 m6",children:[Object(u.jsx)("h5",{className:"title",children:"Descripcion del carrito \ud83d\uded2"}),t.map((function(e,t){return Object(u.jsx)("div",{className:"cart_detail_container",children:Object(u.jsx)(D,{title:e.title,imageId:e.imageId,price:e.price,item:e,stock:e.stock})},t)})),Object(u.jsx)("div",{className:"cart_buttons ",children:Object(u.jsx)("button",{className:"btn clear_cart ",onClick:c,children:"vaciar carrito \u2716"})})]}),Object(u.jsxs)("div",{className:"container_form col s12 m6",children:[Object(u.jsx)(z,{dataBuyer:r,setDataBuyer:j}),Object(u.jsxs)("b",{children:["Total: ",n]}),Object(u.jsx)("p",{children:f})]})]}):Object(u.jsx)("div",{children:b.length>0?Object(u.jsxs)("div",{children:[Object(u.jsxs)("h4",{children:[r.name,", Gracias por su compra!"]}),Object(u.jsx)("p",{children:"Detalle de su orden"}),Object(u.jsxs)("p",{children:["Orden ID: ",b]})]}):Object(u.jsx)("div",{className:"cart_container_else",children:Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Carrito vacio!"}),Object(u.jsx)("br",{}),"Cuando agregues algo va a estar en este sitio \ud83d\uded2"]})})})})};c(65);var B=function(){var e=Object(o.useState)([]),t=Object(s.a)(e,2),c=t[0],n=t[1];Object(o.useEffect)((function(){(function(){var e=Object(r.a)(a.a.mark((function e(){var t,c,r,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=q(),c=t.collection("items"),e.next=5,c.get();case 5:0===(r=e.sent).size?console.log("probando si pasa x aca"):(s=[],r.docs.forEach((function(e){return s.push(Object(i.a)({id:e.id},e.data()))})),n(s)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("Firestore error: ",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var j=Object(o.useContext)(m).quantity;return Object(u.jsxs)(d.a,{children:[Object(u.jsx)(k,{quantity:j}),Object(u.jsxs)(l.c,{children:[Object(u.jsxs)(l.a,{path:"/itemDetailContainer/:catName/:id",children:[Object(u.jsx)(f,{itemsFirebase:c}),Object(u.jsx)(h,{itemsFirebase:c}),Object(u.jsx)(l.a,{component:I})]}),Object(u.jsxs)(l.a,{path:"/category/:catName",children:[Object(u.jsx)(f,{itemsFirebase:c}),Object(u.jsx)(_,{itemsFirebase:c}),Object(u.jsx)(l.a,{component:I})]}),Object(u.jsx)(l.a,{path:"/cart",component:A}),Object(u.jsxs)(l.a,{path:"/category",children:[Object(u.jsx)(f,{itemsFirebase:c}),Object(u.jsx)("h3",{children:"Eleg\xed una categoria!\ud83d\udd0d"}),Object(u.jsx)(l.a,{component:I})]}),Object(u.jsx)(l.a,{path:"/contact",component:I}),Object(u.jsx)(l.a,{exact:!0,path:"/",component:v})]})]})},G=c(38),U=c.n(G);c(69);U.a.render(Object(u.jsx)(j.a.StrictMode,{children:Object(u.jsx)(O,{children:Object(u.jsx)(B,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.4c7601b2.chunk.js.map