import React from "react";
import { Link } from "react-router-dom";

const Product = props => {
  return (
    <li>
      <div className="product">
        <img src={props.src} alt={props.title} />
        <div className="product-content">
          <h3>
            <Link to={`/product/${props.id}`}>{props.title}</Link>
          </h3>
          <p>{props.description}</p>
        </div>
      </div>
    </li>
  );
};

export default Product;
