```jsx
class Product extends React.Component {
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
    console.log("    this.props : ", this.props);
    console.log("    nextProps  : ", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    console.log("    this.props : ", this.props);
    console.log("    nextProps  : ", nextProps);
    console.log("    this.state : ", this.state);
    console.log("    nextState  : ", nextState);

    return true;
  }
}
```
