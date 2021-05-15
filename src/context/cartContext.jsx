import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemId) => {
    const newCart = cart.filter((item) => item.id !== itemId);
    setCart(newCart);
  };
  const clearCart = () => {
    setCart([]);
  };

  let cartTotal = 0;
  const sumTotal = cart.map((e) => (cartTotal += Number(e.price.amount)));

  useEffect(() => {
    setQuantity(cart.length);
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
