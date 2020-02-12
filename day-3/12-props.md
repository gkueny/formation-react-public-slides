> Comment passer des argument à nos composants ?

Pour cela on utilise des props :

```jsx
const MonComposant = props => {
  console.log(props);
  return "";
};

function App() {
  return (
    <div>
      <MonComposant prop1={"test"} prop2={{ key: "value" }} />
    </div>
  );
}
```
