import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../contexts/cartContext";

const Header = () => {
  const { productsInCart } = useContext(CartContext);
  return (
    <header>
      <nav>
        <Link to="/">Accueil</Link>
        <span>Cart: {productsInCart.length}</span>
      </nav>
    </header>
  );
};

export default Header;
