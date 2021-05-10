import "./Cart.scss";
import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import CartDetail from "../../components/cartDetail/CartDetail";
const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

  return (
    <div className="container_if_else">
      {cart.length > 0 ? (
        <div className="cart_container_if">
          <div className="title">
            <h5>Descripcion del carrito 🛒</h5>
          </div>
          {cart.map((e) => (
            <div className="cart_detail_container">
              <CartDetail
                title={e.title}
                picture={e.picture}
                price={e.price.amount}
                item={e}
              />
            </div>
          ))}
          <div className="cart_buttons">
            <button className="btn" onClick={clearCart}>
              vaciar carrito ❎
            </button>
            <button className="btn">Finalizar la compra 👌</button>
          </div>
        </div>
      ) : (
        <div className="cart_container_else">
          <p>
            <strong>Carrito vacio!</strong><br />
            Cuando agregues algo va a estar en este sitio 🛒
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
