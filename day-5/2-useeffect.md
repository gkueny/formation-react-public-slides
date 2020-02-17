**useEffect**: Un nouveau hook ! Il Permet de gérer des **"side-effect"**.

```js
useEffect(
  () => {
    // Fonction à executer à chaque "side-effect"
  },
  [] // Array, spécifiant les "dépendances"
);
```

```js
const [count, setCount] = React.useState(0);
useEffect(
  () => {
    // La fonction sera appelé à chaque fois
    // que un des paramètre mis en dépendance est modifié
    //
    // La fonction est également appelée
    // au premier "rendering" du composant
  },
  [count] // Si l'array de dépendance est vide, le useEffect
  // n'est appelé qu'au premier "rendering"
);
```
