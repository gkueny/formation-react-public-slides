```jsx
import { BrowserRouter, Switch, Route } from "react-router-dom";
```

```jsx
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/blog">
          <MyBlog />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
```

Le composant Switch rend la première route qui match l'URL courante
