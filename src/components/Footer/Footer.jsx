import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer_container">
      <h3 className="footer_title">Este es el footer 🦶</h3> <br />
      <div>
          <p>Aca van a estar los datos de contacto</p>
        <ul>
          <li>
            <Link to="/">volver al home </Link>
          </li>
          <p>|</p>
          <li>
            <Link to="/contact">contacto</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
