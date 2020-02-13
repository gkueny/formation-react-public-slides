import React from "react";

const Product = props => {
  return (
    <li>
      <div className="product">
        <img src={props.src} alt="produit 3" />
        <div className="product-content">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </li>
  );
};

export default Product;
