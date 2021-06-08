import "./Cart.scss";
import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/cartContext";
import { getFirestore } from "../../firebase";
import CartIfElse from "../../components/CartIfElse/CartIfElse";

const Cart = () => {
  const { cart, clearCart, cartTotal } = useContext(CartContext);

  const [dataBuyer, setDataBuyer] = useState({
    name: "",
    phone: 0,
    email: "",
    email2: "",
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
      `${
        dataBuyer.name
      }, gracias por tu compra !!\n\nDescripcion de tu orden:\n${infoCart.map(
        (e) => `${e.quantity} ${e.title}, ($${e.price} x unidad)\n`
      )}
      total: $ ${cartTotal}`
    );
    clearCart();
  };

  const [msjForm, setMsjForm] = useState("");

  useEffect(() => {
    const formValidation = () => {
      if (dataBuyer.email !== dataBuyer.email2) {
        setMsjForm("👮‍♀️ 📢 :  email no coincide 😒 ✉");
      } else if (
        dataBuyer.email === "" ||
        dataBuyer.name === "" ||
        dataBuyer.phone === ""
      ) {
        setMsjForm("👮‍♀️ 📢 :  casilleros sin completar");
      } else {
        setMsjForm(
          <button className="btn buy_finish" onClick={handleFinsh}>
            Finalizar la compra 👌
          </button>
        );
      }
    };
    formValidation();
  }, [dataBuyer]);

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
    <div className='container_cart'>
      <CartIfElse
        dataBuyer={dataBuyer}
        setDataBuyer={setDataBuyer}
        msjForm={msjForm}
        orderId={orderId}
      />
    </div>
  );
};

export default Cart;
