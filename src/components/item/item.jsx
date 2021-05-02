import "./item.scss";
import { Link } from "react-router-dom";
import { ButtonSeeMore } from "../ButtonSeeMore/ButtonSeeMore";

export const Item = ({ id, picture, title, price }) => {
  return (
    <div className="product-card col s12 m6 xl4">
      <div className="card">
        <div className="card-image">
          <img src={picture} alt="imagen producto" />
        </div>
        <div className="card-content">
          <span className="card-title">{title}</span>
          <p>{price.amount}</p>
          <p>{id}</p>
        </div>
        <Link to={`/itemDetailContainer/:${id}`}>
          <ButtonSeeMore />
        </Link>
      </div>
    </div>
  );
};
