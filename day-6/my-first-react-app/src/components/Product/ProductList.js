import React from "react";
import Product from "./Product";

const ProductList = props => {
  return (
    <ul>
      {props.products.map(item => {
        return (
          <Product
            id={item.id}
            title={item.title}
            description={item.description}
            src={item.img}
          />
        );
      })}
    </ul>
  );
};

export default ProductList;
