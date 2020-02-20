import React from "react";

const Item = props => {
  return (
    <div>
      <input
        data-image={props.dataImage}
        type="radio"
        id={props.id}
        name="color"
        value={props.value}
      />
      <label htmlFor={props.id}>
        <span></span>
      </label>
    </div>
  );
};

export default Item;
