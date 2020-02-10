## Spread operator

```js
const add = (...params) => {
  return params.reduce((acc, param) => {
    return acc + param;
  }, 0);
};

add(1);
add(1, 2);
add(3, 4, 7, 1);

const first = [1, 2];
const second = [4, 5];

const all = [...first, 3, ...second];

const object = { name: "Gaëtan", age: 23, single: false };
const { single, ...theRest } = object;
```

Note:

- Si qu'un seul argument, pas besoins de parenthèse
- Si pas d'opération, juste un return, _implicit return_
