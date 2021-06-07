import React from "react";
import { Link } from "react-router-dom";
import "./PagesUndefined.scss";

export const PagesUndefined = () => {
  return (
    <div className="container_pageUndefined">
      <div className='container-msj'>
        <h4 className="title">👮‍ 📢 :  <br/> sitio no existente</h4>
        <p className="undefined">404</p>

        <Link className="back-home" to="/insumosmedicos-de-marco">
          <p> 🔙 volver al home</p>
        </Link>
      </div>
    </div>
  );
};
