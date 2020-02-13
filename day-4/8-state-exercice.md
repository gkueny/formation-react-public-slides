1. Appeler l'API suivante https://server-ten.now.sh afin de récupérer les produits

```js
fetch("https://server-ten.now.sh")
  .then(body => body.json())
  .then(response => {
    // votre code en utilisant response
  });
```

2. Stocker ces produits dans le state

3. Afficher ces produits
