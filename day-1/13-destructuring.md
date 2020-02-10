### Destructuring

```js
const object = {
  name: "Gaëtan",
  age: 23
};
const array = ["Gaëtan", 23];

const { name, age } = object;
const [name2, age2] = array;
```

Note:

- Si qu'un seul argument, pas besoins de parenthèse
- Si pas d'opération, juste un return, _implicit return_
