export const ProductCard = (props) => {
  const handleClick = () =>
    alert(`${props.title} esta en oferta por poco tiempo...`);

  return (
    <div className="row" onClick={handleClick}>
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <img src={props.image} alt="imagen producto" />
          </div>
          <div className="card-content">
            <p>{props.title}</p>
            <span className="card-title">{props.price}</span>
          </div>
          <div className="card-action">
            <a href="/#">see more</a>
          </div>
        </div>
      </div>
    </div>
  );
};
