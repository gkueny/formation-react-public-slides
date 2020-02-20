const initialState = {
  counter: 0,
  someParam: ""
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
        someParam: action.payload.someParam
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
};

export default countReducer;
