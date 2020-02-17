Lorsque le composant est "démonté" du DOM (on ne l'affiche plus) on peux "cleaner" notre side effect

Utilisation:

```jsx
useEffect(() => {
  // On fait des side-effect
  console.log("do something");
  return () => {
    // On clean notre side effect
    // lorsque le composant est enlevé le DOM
    console.log("cleanup");
  };
}, []);
```
