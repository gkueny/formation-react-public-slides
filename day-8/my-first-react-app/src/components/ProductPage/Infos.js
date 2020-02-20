import React from "react";
import DescriptionTitle from "./DescriptionTitle";
import Categories from "./Category/Categories";
import Configuration from "./Configuration/Configuration";
import Price from "./Price";
import AddToCart from "../Cart/AddToCart";

const Infos = props => {
  return (
    <React.Fragment>
      <div className="product-description">
        <Categories categories={props.product.categories} />
        <DescriptionTitle
          title={props.product.title}
          description={props.product.description}
        />
      </div>

      <Configuration
        title={props.product.configTitle}
        items={props.product.configs}
        setColor={props.setColor}
      />

      <div className="product-price">
        <Price price={props.product.price} />
        <AddToCart product={props.product} addToCart={props.addToCart} />
      </div>
    </React.Fragment>
  );
};

export default Infos;
