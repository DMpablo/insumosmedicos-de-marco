import "./Cart.scss";
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import CartDetail from "../../components/cartDetail/CartDetail";
import { getFirestore } from "../../firebase";
import Form from "../../components/form/Form";
const Cart = () => {
  const { cart, clearCart, cartTotal } = useContext(CartContext);
  const [dataBuyer, setDataBuyer] = useState({
    name: "",
    phone: 0,
    email: "",
  });
  const [orderId, setOrderId] = useState("");

  const infoCart = cart.map((e) => ({
    title: e.title,
    quantity: e.units,
    price: e.price,
  }));

  const buyOrder = () => {
    const db = getFirestore();
    const orders = db.collection("orders");
    const newOrder = {
      buyer: dataBuyer,
      items: infoCart,
      totalPrice: cartTotal,
    };
    orders
      .add(newOrder)
      .then(({ id }) => {
        setOrderId(id);
      })
      .catch((error) => error);
    alert(
      `Gracias por tu compra!! 
      descripcion de tu compra: ${infoCart[0].title}, ${infoCart[0].quantity}, ${infoCart[0].price}, 
      y el total es: ${cartTotal} `
    );
    clearCart();
  };

  const handleFinsh = () => {
    const db = getFirestore();
    const batch = db.batch();
    cart.forEach((item) => {
      const itemRef = db.collection("items").doc(item.id);
      batch.update(itemRef, { stock: item.stock - item.units });
      buyOrder();
    });
  };

  return (
    <div className="container_if_else">
      {cart.length > 0 ? (
        <div className="cart_container_if">
          <div className="title">
            <h5>Descripcion del carrito 🛒</h5>
          </div>
          {cart.map((e, index) => (
            <div key={index} className="cart_detail_container">
              <CartDetail
                title={e.title}
                imageId={e.imageId}
                price={e.price}
                item={e}
                stock={e.stock}
              />
            </div>
          ))}
          <div className="cart_buttons">
            <b>Total: {cartTotal}</b>
            <button className="btn" onClick={clearCart}>
              vaciar carrito ❎
            </button>
          </div>
          <Form dataBuyer={dataBuyer} setDataBuyer={setDataBuyer} />
          <button className="btn" onClick={handleFinsh}>
            Finalizar la compra 👌
          </button>
        </div>
      ) : (
        <div className="cart_container_else">
          <p>
            <strong>Carrito vacio!</strong>
            <br />
            Cuando agregues algo va a estar en este sitio 🛒
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
