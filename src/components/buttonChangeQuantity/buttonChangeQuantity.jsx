import "./buttonChangeQuantity.scss"
import { ButtonAddToCard } from "../buttonAddToCard/buttonAddToCard";


export const ButtonChangeQuantity = ({sum, quantity, rest}) => {
  return (
    <div className="container-carrito">
    
      <ButtonAddToCard sum={sum}/>

      {/* <div className="container_quantity">
        <a className="btn" onClick={sum}>
          <i className="material-icons">+</i>
        </a>
        <p>{quantity}</p>
        <a className="btn" onClick={rest}>
          <i className="material-icons">-</i>
        </a>
      </div> */}

    </div>
  );
};
