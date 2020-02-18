https://github.com/donavon/use-persisted-state

```shell
npm i use-persisted-state
```

```jsx
import createPersistedState from "use-persisted-state";
const useCounterState = createPersistedState("count");

const Counter = () => {
  const [count, setCount] = useCounterState(0);

  return (
    <div>
      <b>{count}</b>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
};
```
