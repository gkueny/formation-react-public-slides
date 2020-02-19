2. Définir nos actions

```js
//action.js
const increment = someParam => ({
  type: "INCREMENT",
  payload: {
    someParam
  }
});

export { increment };
```
