2. Le state

```jsx
class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      otherState: "un state"
    };
  }

```

```jsx
  render() {
    return (
      <div>
        <b>{this.state.count}</b>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}
```
