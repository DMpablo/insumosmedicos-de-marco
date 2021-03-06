import "./CategoryContainer.scss";
import { Link } from "react-router-dom";

const CategoryContainer = ({ itemsFirebase }) => {
  let categoryFilt = [];
  if (itemsFirebase !== undefined) {
    const mySet = new Set(itemsFirebase.map((e) => e.category));
    categoryFilt = Array.from(mySet);
  }
  return (
    <div className="item_list">
      {itemsFirebase === undefined ? (
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      ) : (
        <div className="category_container">
          {categoryFilt.map((i, index) => (
            <Link key={index} to={`/category/${i}`}>
              <button className="btn-flat button">{i}</button>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryContainer;
