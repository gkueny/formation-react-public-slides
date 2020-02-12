### Rappel Import export

```js
// Fichier test.js
const a = "a";
const b = "b";

// Export par défaut
export default a;

// Export nommé
export { b };
```

```js
// Fichier index.js

// import d'un export par défaut
import a from "./test";

// import d'un export nommé
import { b } from "./test";
```
