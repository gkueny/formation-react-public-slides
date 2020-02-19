4. Définir votre store à partir de vos reducers

```js
// store.js
import { combineReducers } from "redux";
import countReducer from "./count-reducer";

const allReducers = combineReducers({
  counter: countReducer
});

export default allReducers;
```
