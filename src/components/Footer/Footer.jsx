import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer_container">
      <h3 className="footer_title">Este es el footer 🦶</h3> <br />
      <div>
          <p>Aca van a estar los datos de contacto</p>
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <p>|</p>
          <li>
            <Link to="/contact">contacto</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
