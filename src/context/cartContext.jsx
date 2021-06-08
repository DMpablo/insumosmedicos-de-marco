import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const addUnit = (item) => {
    const newCart = [...cart];
    if (item.stock > item.units) {
      newCart[newCart.findIndex((prod) => prod.id === item.id)].units += 1;
      setCart(newCart);
    } else {
      alert(
        `No tenemos mas cantidad de ${item.title}, stock actual es: ${item.stock}`
      );
    }
  };

  const restUnit = (item) => {
    const newCart = [...cart];
    let indexItem = cart.findIndex((e) => e.id === item.id);
    if (newCart[indexItem].units === 1) {
      console.log("no hace nada");
    } else {
      newCart[newCart.findIndex((prod) => prod.id === item.id)].units -= 1;
    }
    setCart(newCart);
  };
  const removeFromCart = (itemId) => {
    const newCart = cart.filter((e) => e.id !== itemId);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  let cartTotal = 0;
  const newCartTotal = cart.map(
    (e) => (cartTotal += Number(e.price * e.units))
  );

  useEffect(() => {
    let newQuantity = 0;
    let sumQuantity = cart.map((e) => (newQuantity += e.units));
    setQuantity(newQuantity);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        quantity,
        clearCart,
        cartTotal,
        addUnit,
        restUnit,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
