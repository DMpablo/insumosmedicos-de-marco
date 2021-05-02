import "./buttonChangeQuantity.scss";

export const ButtonChangeQuantity = ({ sum, quantity, rest }) => {
  return (
    <div className="container-carrito">
      <button className="btn" onClick={sum}>
        +
      </button>
      <input className='w-25' type="number" placeholder={quantity} />
      <button className="btn" onClick={rest}>
        -
      </button>
      <button className="btn btn_add">Agregar </button>
    </div>
  );
};
