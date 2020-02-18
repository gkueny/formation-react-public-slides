#### Un composant avec une class

1. Les props et la fonctions Render

```jsx
class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <section>{this.props.someInfo}</section>;
  }
}
```

```jsx
<Product someInfo={"some info"} />
```
