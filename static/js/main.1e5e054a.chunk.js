(this["webpackJsonpinsumosmed-de-marco"]=this["webpackJsonpinsumosmed-de-marco"]||[]).push([[0],{39:function(e,t,c){},42:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},72:function(e,t,c){"use strict";c.r(t);c(39);var n=c(28),a=c.n(n),i=c(20),s=c(36),r=c(16),o=c(3),d=c.n(o),l=c(9),j=(c(42),c(10)),b=c(25),u=c(2),m=Object(o.createContext)(),O=function(e){var t=e.children,c=Object(o.useState)([]),n=Object(r.a)(c,2),a=n[0],i=n[1],s=Object(o.useState)(0),d=Object(r.a)(s,2),l=d[0],j=d[1],O=0;a.map((function(e){return O+=Number(e.price*e.units)}));return Object(o.useEffect)((function(){var e=0;a.map((function(t){return e+=t.units}));j(e)}),[a]),Object(u.jsx)(m.Provider,{value:{cart:a,addToCart:function(e){i([].concat(Object(b.a)(a),[e]))},removeFromCart:function(e){var t=a.filter((function(t){return t.id!==e}));i(t)},quantity:l,clearCart:function(){i([])},cartTotal:O,addUnit:function(e){var t=Object(b.a)(a);e.stock>e.units?(t[t.findIndex((function(t){return t.id===e.id}))].units+=1,i(t)):alert("No tenemos mas cantidad de ".concat(e.title,", stock actual es: ").concat(e.stock))},restUnit:function(e){var t=Object(b.a)(a);1===t[a.findIndex((function(t){return t.id===e.id}))].units?console.log("no hace nada"):t[t.findIndex((function(t){return t.id===e.id}))].units-=1,i(t)}},children:t})},h=function(e){var t=e.ItemID,c=e.onAdd,n=Object(o.useContext)(m).cart;return Object(u.jsxs)("div",{className:"item_detail_container",children:[Object(u.jsx)("div",{className:"container_img",children:Object(u.jsx)("img",{src:t.imageId,alt:t.title})}),Object(u.jsxs)("div",{className:"item_detail",children:[Object(u.jsx)("p",{className:"title_detail",children:t.title}),Object(u.jsx)("p",{className:"description_detail",children:t.description}),Object(u.jsxs)("p",{className:"price_detail",children:["$ ",t.price]}),Object(u.jsx)("div",{className:"function_buttons",children:n.find((function(e){return e.id===t.id}))?Object(u.jsx)(j.b,{to:"/cart",children:Object(u.jsx)("button",{className:"btn btn_add",children:"ver en carrito"})}):Object(u.jsx)("button",{className:"btn btn_add",onClick:c,children:"Agregar al carrito"})})]})]})},x=function(e){var t=e.itemsFirebase,c=Object(l.f)().id,n=Object(o.useContext)(m).addToCart,a=t.find((function(e){return e.id===c}));return Object(u.jsx)("div",{children:a?Object(u.jsx)(h,{ItemID:a,onAdd:function(){return n(a)}}):Object(u.jsx)("p",{children:"Cargando datos..."})})},f=(c(48),function(){return Object(u.jsx)("div",{className:"container-greeting",children:Object(u.jsxs)("h1",{className:"insumos",children:["insumos ",Object(u.jsx)("span",{className:"medicos",children:" medicos"})]})})}),p=(c(49),c(50),c(51),function(){return Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:" btn",children:"ver mas"})})}),v=function(e){var t=e.newCat,c=Object(o.useContext)(m).cart;return Object(u.jsx)("div",{className:"product-card",children:Object(u.jsxs)("div",{className:"card row",children:[Object(u.jsx)("div",{className:"card-image col m4 s12",children:Object(u.jsx)("img",{src:t.imageId,alt:"imagen producto"})}),Object(u.jsxs)("div",{className:"card-content col m6 s12",children:[Object(u.jsx)("span",{className:"card-title",children:t.title}),Object(u.jsxs)("b",{children:["$ ",t.price]})]}),c.find((function(e){return e.id===t.id}))?Object(u.jsx)("div",{className:"card-button col m2 s12",children:Object(u.jsx)(j.b,{to:"/cart",children:Object(u.jsx)("button",{className:"btn btn_add",children:"ver en carrito"})})}):Object(u.jsx)("div",{className:"card-button col m2 s12",children:Object(u.jsx)(j.b,{to:"/itemDetailContainer/".concat(t.category,"/").concat(t.id),children:Object(u.jsx)(p,{})})})]})})},N=function(e){var t=e.itemsFirebase,c=Object(l.f)().catName,n=t.filter((function(e){return e.category===c}));return Object(u.jsx)("div",{className:"container_item_list",children:void 0===n?Object(u.jsx)("h4",{className:"cargando-datos",children:"Cargando datos"}):Object(u.jsx)("div",{className:"container-items",children:n.map((function(e,t){return Object(u.jsx)(v,{newCat:e},t)}))})})},g=(c(52),c(53),function(e){var t=e.itemsFirebase,c=[];if(void 0!==t){var n=new Set(t.map((function(e){return e.category})));c=Array.from(n)}return Object(u.jsx)("div",{className:"item_list",children:void 0===t?Object(u.jsx)("div",{className:"progress",children:Object(u.jsx)("div",{className:"indeterminate"})}):Object(u.jsx)("div",{className:"category_container",children:c.map((function(e,t){return Object(u.jsx)(j.b,{to:"/category/".concat(e),children:Object(u.jsx)("button",{className:"btn-flat button",children:e})},t)}))})})}),_=function(e){var t=e.quantity,c=e.itemsFirebase;return Object(u.jsxs)("div",{children:[Object(u.jsxs)("nav",{className:"navBar",children:[Object(u.jsxs)(j.b,{className:"nombre_logo",to:"/insumosmedicos-de-marco",children:["i",Object(u.jsx)("strong",{children:" m"})]}),Object(u.jsx)("div",{className:"display",children:Object(u.jsx)(g,{itemsFirebase:c})}),Object(u.jsx)(j.b,{to:"/cart",children:Object(u.jsxs)("div",{className:"container-quantity",children:[Object(u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[Object(u.jsx)("path",{fill:"none",d:"M8.246 11L18.246 11 19.675 6 6.428 6z"}),Object(u.jsx)("path",{d:"M21,4H5H4H2v2h2h0.3l3.282,9.025C8.011,16.206,9.145,17,10.401,17H19v-2h-8.599c-0.419,0-0.797-0.265-0.94-0.658L8.973,13 h9.273c0.89,0,1.68-0.598,1.923-1.451l1.793-6.274c0.086-0.302,0.025-0.626-0.163-0.877C21.609,4.147,21.313,4,21,4z M18.246,11 h-10L6.428,6h13.247L18.246,11z"}),Object(u.jsx)("circle",{cx:"10.5",cy:"19.5",r:"1.5"}),Object(u.jsx)("circle",{cx:"16.5",cy:"19.5",r:"1.5"})]}),Object(u.jsx)("p",{className:"quantity_product",children:t})]})})]}),Object(u.jsx)("div",{className:"display-hidden",children:Object(u.jsx)(g,{itemsFirebase:c})})]})},y=(c(54),c(55),function(){return Object(u.jsxs)("footer",{className:"footer_container",children:[Object(u.jsx)("h3",{className:"footer_title",children:"Nos podes encontrar facil!"})," ",Object(u.jsx)("br",{}),Object(u.jsx)("div",{className:"container_map",children:Object(u.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d521.9223426577071!2d-130.09883589030153!3d-25.06992331553356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1623004350074!5m2!1ses-419!2sar",width:"600",height:"450",loading:"lazy"})}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(j.b,{to:"/insumosmedicos-de-marco",children:"Home "})}),Object(u.jsx)("p",{children:"|"}),Object(u.jsx)("li",{children:Object(u.jsx)(j.b,{to:"/category",children:"productos"})}),Object(u.jsx)("p",{children:"|"}),Object(u.jsx)("li",{children:Object(u.jsx)(j.b,{to:"/cart",children:"carrito \ud83d\uded2"})})]})]})}),C=(c(56),c(57),c(32)),k=(c(63),C.a.initializeApp({apiKey:"AIzaSyDYz4gAYQarZNs6KYRUeYDBqGKr5tz2C7k",authDomain:"insumos-medicos-53864.firebaseapp.com",projectId:"insumos-medicos-53864",storageBucket:"insumos-medicos-53864.appspot.com",messagingSenderId:"294292958958",appId:"1:294292958958:web:9b61adadeae9d5aaeb8dff",measurementId:"G-GW13JM6GEG"})),w=function(){return C.a.firestore(k)},I=(c(64),c(65),function(e){var t=e.item,c=Object(o.useContext)(m),n=c.removeFromCart,a=c.restUnit,i=c.addUnit;return Object(u.jsx)("div",{className:"container-carrito",children:Object(u.jsxs)("div",{className:"container_button_change",children:[Object(u.jsx)("button",{className:"btn",onClick:function(){return i(t)},children:"+"}),Object(u.jsx)("p",{children:t.units}),Object(u.jsx)("button",{className:"btn",onClick:function(){return a(t)},children:"-"}),Object(u.jsx)("button",{className:"btn",onClick:function(){return n(t.id)},children:"\u2716"})]})})});var F=function(e){var t=e.imageId,c=e.title,n=e.price,a=e.item,i=e.stock;return Object(u.jsxs)("div",{className:"cart_detail row",children:[Object(u.jsx)("div",{className:"container_img col s4",children:Object(u.jsx)("img",{src:t,alt:""})}),Object(u.jsxs)("div",{className:"detail_price_button col s8",children:[Object(u.jsx)("p",{className:"detail_title",children:c}),Object(u.jsxs)("b",{className:"detail_price",children:["$",n]}),Object(u.jsx)(I,{item:a}),Object(u.jsxs)("p",{className:"stock",children:["Stock disponible: ",i]})]})]})},D=c(23);c(66);var B=function(e){var t=e.dataBuyer,c=e.setDataBuyer;return Object(u.jsxs)(o.Fragment,{children:[Object(u.jsx)("h2",{className:"title_form",children:"Carga tus datos para finalizar la compra!"}),Object(u.jsx)("form",{children:[{id:"name",type:"text",placeholder:"escribe tu nombre / apodo"},{id:"phone",type:"Number",placeholder:"Un telefono de contacto"},{id:"email",type:"email",placeholder:"tu email"},{id:"email2",type:"email",placeholder:"otra vez tu email"}].map((function(e){return Object(u.jsx)("div",{children:Object(u.jsxs)("label",{htmlFor:e.id,children:[e.id,":",Object(u.jsx)("input",{id:e.id,type:e.type,onChange:function(n){var a=n.target;return function(e,n){var a=Object(i.a)(Object(i.a)({},t),{},Object(D.a)({},e,n));c(a)}(e.id,a.value)},placeholder:e.placeholder})]})},e.id)}))})]})},z=(c(67),function(e){var t=e.dataBuyer,c=e.setDataBuyer,n=e.msjForm,a=e.orderId,i=Object(o.useContext)(m),s=i.cart,r=i.clearCart,d=i.cartTotal;return Object(u.jsx)("div",{className:"container_if_else",children:s.length>0?Object(u.jsxs)("div",{className:"cart_container_if row",children:[Object(u.jsxs)("div",{className:"container_cart col s12 m6",children:[Object(u.jsx)("h5",{className:"title",children:"Descripcion del carrito \ud83d\uded2"}),s.map((function(e,t){return Object(u.jsx)("div",{className:"cart_detail_container",children:Object(u.jsx)(F,{title:e.title,imageId:e.imageId,price:e.price,item:e,stock:e.stock})},t)})),Object(u.jsx)("div",{className:"cart_buttons ",children:Object(u.jsx)("button",{className:"btn clear_cart ",onClick:r,children:"vaciar carrito \u2716"})})]}),Object(u.jsxs)("div",{className:"container_form col s12 m6",children:[Object(u.jsx)(B,{dataBuyer:t,setDataBuyer:c}),Object(u.jsxs)("b",{children:["Total: ",d]}),Object(u.jsx)("p",{children:n})]})]}):Object(u.jsx)("div",{children:a.length>0?Object(u.jsxs)("div",{children:[Object(u.jsxs)("h4",{children:[t.name,", Gracias por su compra!"]}),Object(u.jsx)("p",{children:"Detalle de su orden"}),Object(u.jsxs)("p",{children:["Orden ID: ",a]})]}):Object(u.jsx)("div",{className:"cart_container_else",children:Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Carrito vacio!"}),Object(u.jsx)("br",{}),"Cuando agregues algo va a estar en este sitio \ud83d\uded2"]})})})})}),S=function(){var e=Object(o.useContext)(m),t=e.cart,c=e.clearCart,n=e.cartTotal,a=Object(o.useState)({name:"",phone:0,email:"",email2:""}),i=Object(r.a)(a,2),s=i[0],d=i[1],l=Object(o.useState)(""),j=Object(r.a)(l,2),b=j[0],O=j[1],h=t.map((function(e){return{title:e.title,quantity:e.units,price:e.price}})),x=Object(o.useState)(""),f=Object(r.a)(x,2),p=f[0],v=f[1];Object(o.useEffect)((function(){s.email!==s.email2?v("\ud83d\udc6e\u200d\u2640\ufe0f \ud83d\udce2 :  email no coinCide \ud83d\ude12 \u2709"):""===s.email||""===s.name||""===s.phone?v("\ud83d\udc6e\u200d\u2640\ufe0f \ud83d\udce2 :  tenes casilleros sin completar"):v(Object(u.jsx)("button",{className:"btn buy_finish",onClick:N,children:"Finalizar la compra \ud83d\udc4c"}))}),[s]);var N=function(){var e=w(),a=e.batch();t.forEach((function(t){var i=e.collection("items").doc(t.id);a.update(i,{stock:t.stock-t.units}),function(){var e=w().collection("orders"),t={buyer:s,items:h,totalPrice:n};e.add(t).then((function(e){var t=e.id;O(t)})).catch((function(e){return e})),alert("".concat(s.name,", gracias por tu compra !!\n\nDescripcion de tu orden:\n").concat(h.map((function(e){return"".concat(e.quantity," ").concat(e.title,", ($").concat(e.price," x unidad)\n")})),"\n      total: $ ").concat(n)),c()}()}))};return Object(u.jsx)("div",{className:"container_cart",children:Object(u.jsx)(z,{dataBuyer:s,setDataBuyer:d,msjForm:p,orderId:b})})},q=(c(68),function(){return Object(u.jsx)("div",{className:"container_pageUndefined",children:Object(u.jsxs)("div",{className:"container-msj",children:[Object(u.jsxs)("h4",{className:"title",children:["\ud83d\udc6e\u200d \ud83d\udce2 :  ",Object(u.jsx)("br",{})," sitio no existente"]}),Object(u.jsx)("p",{className:"undefined",children:"404"}),Object(u.jsx)(j.b,{className:"back-home",to:"/insumosmedicos-de-marco",children:Object(u.jsx)("p",{children:" \ud83d\udd19 volver al home"})})]})})});var E=function(){var e=Object(o.useState)([]),t=Object(r.a)(e,2),c=t[0],n=t[1];Object(o.useEffect)((function(){(function(){var e=Object(s.a)(a.a.mark((function e(){var t,c,s,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=w(),c=t.collection("items"),e.next=5,c.get();case 5:0===(s=e.sent).size?console.log("probando si pasa x aca"):(r=[],s.docs.forEach((function(e){return r.push(Object(i.a)({id:e.id},e.data()))})),n(r)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("Firestore error: ",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var d=Object(o.useContext)(m).quantity;return Object(u.jsxs)(j.a,{children:[Object(u.jsx)(_,{quantity:d,itemsFirebase:c}),Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{path:"/itemDetailContainer/:catName/:id",children:Object(u.jsx)(x,{itemsFirebase:c})}),Object(u.jsx)(l.a,{path:"/category/:catName",children:Object(u.jsx)(N,{itemsFirebase:c})}),Object(u.jsx)(l.a,{path:"/cart",component:S}),Object(u.jsx)(l.a,{path:"/category",children:Object(u.jsx)("h3",{children:"Eleg\xed una categoria!\ud83d\udd0d"})}),Object(u.jsx)(l.a,{exact:!0,path:"/insumosmedicos-de-marco",children:Object(u.jsx)(f,{})}),Object(u.jsx)(l.a,{component:q})]}),Object(u.jsx)(y,{})]})},A=c(38);c.n(A).a.render(Object(u.jsx)(d.a.StrictMode,{children:Object(u.jsx)(O,{children:Object(u.jsx)(E,{})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.1e5e054a.chunk.js.map