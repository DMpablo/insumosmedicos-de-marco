import "./index.scss";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import { CartProvider } from "./context/cartContext";



ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
