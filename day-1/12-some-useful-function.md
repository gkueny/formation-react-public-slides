## Fonctions utiles

```js
const array = [0, 1, 2, 3];

// map : Transformer les item d'un tableau
array.map(item => {
  return `item is mapped ${item}`;
});

// filter: filtrer les éléments d'un tableau
const matches = array.filter(item => item % 3 === 0);

// find: trouver les éléments d'un tableau
const match = array.find(item => item === 1);

const include = array.includes(2);

const reduce = array.reduce((acc, item) => {
  return acc + item;
}, 0);
```
