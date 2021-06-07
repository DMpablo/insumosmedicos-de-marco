import "./index.scss";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { CartProvider } from "./context/cartContext";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
