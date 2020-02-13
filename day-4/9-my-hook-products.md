Créer le hook **`useProducts`**. Voici comment l'utiliser :

```jsx
const useProducts = products => {
  const [search, setSearch] = React.useState("");

  // Votre code

  return [productsFiltered, setSearch];
};
```

```jsx
import products from "./fixtures";

const MonComposant = () => {
  const [productsFiltered, setSearch] = useProducts(products);

  return (
    //
  )
}
```
