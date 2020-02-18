import React from "react";

const Cart = props => {
  const cartToJsx = props.cart.map((item, i) => {
    return <li key={i}>{item.title}</li>;
  });

  return <ul>{cartToJsx}</ul>;
};

export default Cart;
