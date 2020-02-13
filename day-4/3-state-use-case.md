#### State

```jsx
import React, { useState } from "react";

function ComponentWithState() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <p>Nombre de clic {count}</p>
      {/* On se branche sur l'événement "click" */}
      <button onClick={() => setCount(count + 1)}>+1</button>
    </section>
  );
}
```
