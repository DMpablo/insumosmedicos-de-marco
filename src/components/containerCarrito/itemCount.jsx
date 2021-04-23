import { useState, useEffect } from "react";
import "./itemCount.scss";

export const ContainerCarrito = (props) => {
  //console.log(props.stock);
  const [quantity, setQuantity] = useState(1);
  const stock = props.stock;

  const sum = () => {
    quantity < stock ? setQuantity(quantity + 1) : alert("no hay mas stock")
  };


  const rest = () => {
    quantity > 0 ? setQuantity(quantity - 1) : alert("no resta mas")
  };

  useEffect(() => {
    if (quantity < 0) {
      console.log("ya no se puede restar");
    }
  }, [quantity]);

  return (
    <div className="container-carrito">
      <div className="container_add_poduct">
        <button className="add_product btn" onClick={sum}>
          agregar al carrito
        </button>
      </div>

      <div className="container_quantity">
        <a className="btn" onClick={sum}>
          <i className="material-icons">+</i>
        </a>
        <p>{quantity}</p>
        <a className="btn" onClick={rest}>
          <i className="material-icons">-</i>
        </a>
      </div>
    </div>
  );
};
