On peux créer un son propre **hook** !

```js
import React from "react";

const useMonHook = () => {
  // on fait des truc, exemple :
  const [state, setState] = useState(0);

  const add = () => {
    setState(state + 1);
  };

  const minus = () => {
    setState(state - 1);
  };
  return [state, add, minus];
};
```
