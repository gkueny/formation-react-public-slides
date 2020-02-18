import React, { createContext } from "react";

const CartContext = createContext();

const CartContextProvider = props => {
  const [productsInCart, setProductsInCart] = React.useState([]);

  const addToCart = product => {
    if (!productsInCart.includes(product)) {
      setProductsInCart([...productsInCart, product]);
    }
  };

  return (
    <CartContext.Provider value={{ productsInCart, addToCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
export { CartContextProvider };
