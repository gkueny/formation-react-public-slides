import React, { useState, useEffect } from "react";
import "../App.css";
import Header from "./Header/Header";
import HomePage from "./HomePage/HomePage";
import ProductPage from "./ProductPage/ProductPage";

const Count = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Met à jour le titre de la fenêtre
    document.title = ` ${count}`;

    return () => {
      document.title = `mon titre de base`;
    };
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>+1</button>;
};

function App() {
  return (
    <React.Fragment>
      <Count />
      <Header />
      {/* <ProductPage /> */}
      <HomePage />
    </React.Fragment>
  );
}

export default App;
