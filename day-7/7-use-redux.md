3. Définir vos reducers

```js
// count-reducer.js
const initialState = 0;

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    default:
      return state;
  }
};

export default countReducer;
```
