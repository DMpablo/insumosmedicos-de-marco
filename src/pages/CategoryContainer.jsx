import React from "react";
import './CategoryContainer.scss'
import { Link } from "react-router-dom";

const CategoryContainer = () => {
  const category = [
    { catName: "barbijo" },
    { catName: "ropa medica" },
    { catName: "kit odontologico" },
  ];

  return (
    <div className='category_container'>
      {category.map((i) => (
        <Link to={`/category/${i.catName}`}>
          <button className="btn">{i.catName}</button>
        </Link>
      ))}
    </div>
  );
};

export default CategoryContainer;
