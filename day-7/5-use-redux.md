1. Le provider

```jsx
import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={createStore(store)}>
      <App />
    </Provider>
  );
};
```
