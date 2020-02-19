5. "Connecter" vos composant

```jsx
import { connect } from "react-redux";
import { increment } from "./actions";
```

```js
const MyComponent = props => {
  //...
};
```

```js
const mapStateToProps = (state, ownProps) => {
  return {
    counter: state.counter
  };
};
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment("some param"))
  };
};
```

```js
export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
```
