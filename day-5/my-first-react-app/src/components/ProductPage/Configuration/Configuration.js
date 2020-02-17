import React from "react";
import Item from "./Item";

const Configuration = props => {
  return (
    <div className="product-configuration">
      <div className="product-color">
        <span>{props.title}</span>
        <div className="color-choose">
          {props.items.map(item => {
            return (
              <Item
                id={item.id}
                value={item.value}
                dataImage={item.dataImage}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Configuration;
