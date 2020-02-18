```js
const ASubComponent = () => {
  const { count, setCount } = React.useContext(MyContext);

  return (
    <div>
      <b>count {count} </b>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
};
```
