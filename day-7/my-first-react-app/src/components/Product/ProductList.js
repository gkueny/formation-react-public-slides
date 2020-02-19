import React from "react";
// import { connect } from "react-redux";
import { increment } from "../actions";
import Product from "./Product";

const ProductList = props => {
  return (
    <React.Fragment>
      {/* counter: {props.counter}
      <button onClick={() => props.increment()}>+1</button> */}
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
    </React.Fragment>
  );
};

// const mapStateToProps = (state, ownProps) => {
//   return {
//     counter: state.counter
//   };
// };
// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch(increment("some param"))
//   };
// };

export default ProductList;
// export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
