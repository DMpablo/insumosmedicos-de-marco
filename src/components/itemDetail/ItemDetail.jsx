import "../itemDetail/ItemDetail.scss";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";

export const ItemDetail = ({ ItemID, onAdd }) => {
  const { cart } = useContext(CartContext);
  return (
    <div className="item_detail_container">
      <div className="container_img">
        <img src={ItemID.imageId} alt={ItemID.title} />
      </div>
      <div className="item_detail">
        <p className="title_detail">{ItemID.title}</p>
        <p className="description_detail">{ItemID.description}</p>
        <p className="price_detail">$ {ItemID.price}</p>
        <div className="function_buttons">
          {cart.find((e) => e.id === ItemID.id) ? (
            <Link to="/cart">
              <button className="btn btn_add">ver en carrito</button>
            </Link>
          ) : (
            <button className="btn btn_add" onClick={onAdd}>
              Agregar al carrito
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
