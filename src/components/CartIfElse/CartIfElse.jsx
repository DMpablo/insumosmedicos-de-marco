import CartDetail from "../cartDetail/CartDetail";
import { CartContext } from "../../context/cartContext";
import React, { useContext } from "react";
import Form from "../form/Form";
import "./CartIfElse.scss";

const CartIfElse = ({ dataBuyer, setDataBuyer, msjForm, orderId }) => {
  const { cart, clearCart, cartTotal } = useContext(CartContext);

  return (
    <div className="container_if_else">
      {cart.length > 0 ? (
        <div className="cart_container_if row">
          <div className="container_cart col s12 m6">
            <h5 className="title">Descripcion del carrito 🛒</h5>
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
            <div className="cart_buttons ">
              <button className="btn clear_cart " onClick={clearCart}>
                vaciar carrito ✖
              </button>
            </div>
          </div>

          <div className="container_form col s12 m6">
            <Form dataBuyer={dataBuyer} setDataBuyer={setDataBuyer} />
            <b>Total: {cartTotal}</b>
            <div className="container-msj-form">
              <p className="msj-form">{msjForm}</p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {orderId.length > 0 ? (
            <div>
              <h4>{dataBuyer.name}, Gracias por su compra!</h4>
              <p>Detalle de su orden</p>
              <p>Orden ID: {orderId}</p>
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
      )}
    </div>
  );
};

export default CartIfElse;
