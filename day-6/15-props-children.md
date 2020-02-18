### La props children

```jsx
const AComponent = props => {
  return <b>{props.children}</b>;
};

const SomeOtherComponent = () => {
  return A children !!!
}
```

```jsx
const App = () => {
  return (
    <div>
      <AComponent>
        <p>
          <SomeOtherComponent />
        </p>
      </AComponent>
    </div>
  );
};
```
