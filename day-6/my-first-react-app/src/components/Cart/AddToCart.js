import React from "react";
import CartContext from "../../contexts/cartContext";

const AddToCart = props => {
  const { addToCart } = React.useContext(CartContext);
  return (
    <button
      onClick={() => {
        addToCart(props.product);
      }}
      className="cart-btn"
    >
      Ajouter au panier
    </button>
  );
};

export default AddToCart;
