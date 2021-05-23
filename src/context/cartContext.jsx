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
    newCart[newCart.findIndex((prod) => prod.id === item.id)].units += 1;
    setCart(newCart);
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
        addUnit,
        restUnit,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
