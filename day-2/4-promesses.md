### Les promesses

Gérer le code asynchrone

```js
const promise = new Promise((resolve, reject) => {
  // Ici mon code à exécuter en asychrone
  // resolve() : appel le .then
  // reject() : appel le .catch
});

// Utilisation
promise
  .then(resultSuccess => {
    // no-op
  })
  .catch(resultError => {
    // no-op
  })
  .finally(() => {
    // Code exécuté quoi qu'il arrive
  });
```

Note:

- Avant, parler de `setTimeout`
