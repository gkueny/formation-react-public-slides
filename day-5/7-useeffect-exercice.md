2. Appeler notre API :

   <br/>

- au premier chargement, avec par défaut **3 produits**

- et à chaque fois que l'input **nbproducts** change

```js
fetch(`https://server-ten.now.sh?nbproducts=${NOMBRE}`);
```
