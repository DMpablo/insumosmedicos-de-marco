import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <footer className="footer_container">
      <h3 className="footer_title">Nos podes encontrar facil!</h3> <br />
      
      <div className="container_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d521.9223426577071!2d-130.09883589030153!3d-25.06992331553356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1623004350074!5m2!1ses-419!2sar"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
      <ul>
        <li>
          <Link to="/insumosmedicos-de-marco">Home </Link>
        </li>
        <p>|</p>
        <li>
          <Link to="/category">productos</Link>
        </li>
        <p>|</p>
        <li>
          <Link to="/cart">carrito 🛒</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
