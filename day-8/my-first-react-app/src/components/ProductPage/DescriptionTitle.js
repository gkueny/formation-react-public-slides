import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions";

const DescriptionTitle = props => {
  // props.increment("other param");
  return (
    <React.Fragment>
      <h1>{props.title}</h1>
      <p>{props.countState.counter}</p>
      <p>{props.countState.someParam}</p>
      <button onClick={() => props.increment("other param")}>+1</button>
      <button onClick={() => props.decrement()}>-1</button>
      <p>{props.description}</p>
    </React.Fragment>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    countState: state.countReducer
  };
};
const mapDispatchToProps = dispatch => {
  return {
    increment: param => dispatch(increment(param)),
    decrement: () => dispatch(decrement)
  };
};

const DescriptionTitleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DescriptionTitle);

export default DescriptionTitleContainer;
