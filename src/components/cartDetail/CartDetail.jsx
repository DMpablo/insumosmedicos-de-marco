import React from "react";
import "./CartDetail.scss";
import { ButtonChangeQuantity } from "../buttonChangeQuantity/ButtonChangeQuantity";

function CartDetail({ picture, title, price, item }) {
  return (
    <div className="cart_detail">
      <img src={picture} alt="" />
      <p className="detail_title">{title}</p>
      <div className="detail_price_button">
        <p className="detail_price">${price}</p>
        <ButtonChangeQuantity item={item} />
      </div>
    </div>
  );
}

export default CartDetail;
