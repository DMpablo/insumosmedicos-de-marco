import "./item.scss";
import { FunctioButtons } from "../functioButtons/functioButtons";

export const Item = (props) => {
  return (
    <div className="product-card col s12 m6 xl4">
      <div className="card">
        <div className="card-image">
          <h4>Info</h4>
          <p>{props.address.street}</p>
          <p>{props.address.suite}</p>
          <p>{props.address.city}</p>
          <p>{props.address.zipcode}</p>
          {/*  <img src={props.image} alt="imagen producto" /> */}
        </div>
        <div className="card-content">
          <span className="card-title">{props.username}</span>
          <p>{props.name}</p>
        </div>
          <FunctioButtons
            stock={props.stock}
            setItemsLenght={props.setItemsLenght}
          />
      </div>
    </div>
  );
};
