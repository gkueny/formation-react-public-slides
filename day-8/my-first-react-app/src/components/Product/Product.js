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
          {props.quantity ? `Quantity : ${props.quantity}` : ""}
          {props.hasRemoveAction ? (
            <button onClick={() => props.removeProduct(props.id)}>
              Supprimer du panier
            </button>
          ) : null}
          <p>{props.description}</p>
        </div>
      </div>
    </li>
  );
};

export default Product;
