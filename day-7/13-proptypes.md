### Les propTypes

"Contrat" passé avec les autres composant, spécifiant les props attendues

```shell
npm install prop-types
```

```js
import PropTypes from "prop-types";

const App = props => {
  //...
};

App.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
  title: PropTypes.string
};
```
