```js
const MyContext = React.createContext({
  count: 0
});
```

```js
const App = () => {
  return (
    <MyContext.Provider value={{ count: 0 }}>
      <ASubComponent />
    </MyContext.Provider>
  );
};
```

```js
const ASubComponent = () => {
  const { count } = React.useContext(MyContext);

  return <b>count {count} </b>;
};
```
