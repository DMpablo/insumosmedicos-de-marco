import "./item.scss";
import { Link } from "react-router-dom";
import { ButtonSeeMore } from "../ButtonSeeMore/ButtonSeeMore";


export const Item = ({ id, picture, title, price, catName }) => {

  

  return (
    <div className="product-card">
      <div className="card">
        <div className="card-image">
          <img src={picture} alt="imagen producto" />
        </div>
        <div className="card-content">
          <span className="card-title">{title}</span>
          <p>{price.amount}</p>
        </div>
        <Link to={`/itemDetailContainer/${catName}/${id}`}>
          <ButtonSeeMore />
        </Link>
      </div>
    </div>
  );
};
