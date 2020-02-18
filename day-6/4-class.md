#### Une class JS

```js
class Product {
  constructor(someInfo) {
    this.someInfo = someInfo;
  }

  updateSomeInfo(newSomeInfo) {
    this.someInfo = newSomeInfo;
  }
}
```

```js
const product = new Product("some info");
product.updateSomeInfo("new some info");
```
