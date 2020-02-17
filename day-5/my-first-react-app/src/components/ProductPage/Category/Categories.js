import React from "react";

const Categories = props => {
  return props.categories.map(category => {
    return <span>{category} </span>;
  });
};

export default Categories;
