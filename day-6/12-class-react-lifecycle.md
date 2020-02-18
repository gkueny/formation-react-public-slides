```jsx
class Product extends React.Component {
  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate");
    console.log("    this.props : ", this.props);
    console.log("    nextProps  : ", nextProps);
    console.log("    this.state : ", this.state);
    console.log("    nextState  : ", nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    console.log("    prevProps : ", prevProps);
    console.log("    prevState : ", prevState);
  }
}
```
