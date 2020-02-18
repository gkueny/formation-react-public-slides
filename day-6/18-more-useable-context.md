```js
const MyContext = React.createContext({
  count: 0
});
const MyContextComponentProvider = props => {
  const [count, setCount] = React.useState(0);

  return (
    <MyContext.Provider value={{ count, setCount }}>
      {props.children}
    </MyContext.Provider>
  );
};
```

```js
const App = () => {
  return (
    <MyContextComponentProvider>
      <ASubComponent />
    </MyContextComponentProvider>
  );
};
```
