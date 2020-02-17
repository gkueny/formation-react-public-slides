Exemple:

```js
import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Met à jour le titre de la fenêtre
    document.title = `nombre de clic : ${count}`;

    return () => {
      document.title = `mon titre de base`;
    };
  }, [count]);
```

```jsx
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
```
