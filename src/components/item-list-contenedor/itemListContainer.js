import "./itemListContainer.scss";
export const ItemListContainer = (props) => {
  return (
    <div className="container-greeting">
      <h1 className="insumos">
        {props.name[0]} <span className="medicos">{props.name[1]}</span>
      </h1>
    </div>
  );
};
