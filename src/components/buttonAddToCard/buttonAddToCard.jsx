import "./buttonAddToCard.scss";


const addToPay = ()=>{
  return(
    console.log('se agrego al carito de compras')
  )
}

export const ButtonAddToCard = ({ sum }) => {
  return (
    <div className="container_add_poduct">
      <button className="add_product btn" onClick={sum, addToPay}>
        agregar al carrito
      </button>
    </div>
  );
};
