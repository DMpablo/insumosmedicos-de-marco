import "./CategoryContainer.scss";
import { Link } from "react-router-dom";

const CategoryContainer = ({ itemsFirebase }) => {
  return (
    <div className="item_list">
      {itemsFirebase === undefined ? (
        <p> Esperando datos del servidor ⌛</p>
      ) : (
        <div  className="category_container">
          {itemsFirebase.map((i) => (
            <Link key={"index"} to={`/category/${i.category}`}>
              <button className="btn">{i.category}</button>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryContainer;
