import "./Cart.scss";
import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import CartDetail from "../../components/cartDetail/CartDetail";
import { getFirestore } from "../../firebase";
const Cart = () => {
  const { cart, clearCart, cartTotal } = useContext(CartContext);

  const handleFinsh = () => {
    const db = getFirestore();
    const batch = db.batch();

    cart.forEach((item) => {
      const itemRef = db.collection("items").doc(item.id);
      batch.update(itemRef, { stock: item.stock - item.units });
      alert(`Gracias por tu compra!!`);
      clearCart();
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
            <button className="btn" onClick={clearCart}>
              vaciar carrito ❎
            </button>
            <p>Total {cartTotal}</p>
            <button className="btn" onClick={handleFinsh}>
              Finalizar la compra 👌
            </button>
          </div>
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
