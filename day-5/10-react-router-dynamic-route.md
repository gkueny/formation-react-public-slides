On peux récupérer des paramètres de l'url:

```jsx
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/article/:id">
          <Article />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
```

```jsx
const Article = () => {
  const { id } = useParams();
  return <div>Article: {id}</div>;
};
```
