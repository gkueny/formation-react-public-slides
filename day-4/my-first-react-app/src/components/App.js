import React, { useState } from "react";
import "../App.css";
import Header from "./Header/Header";
import Search from "./Search/Search";
import ProductList from "./Product/ProductList";

const useProducts = () => {
  // products
  const [value, setValue] = React.useState("");
  const [products, setProducts] = React.useState([]);

  if (products.length === 0) {
    fetch("https://server-ten.now.sh")
      .then(body => body.json())
      .then(response => {
        // votre code en utilisant response
      });
  }

  const valueUppercase = value.toUpperCase();

  const productFiltered = products.filter(item => {
    const itemTileUppercase = item.title.toUpperCase();
    const itemDescriptionUppercase = item.description.toUpperCase();
    return (
      itemTileUppercase.includes(valueUppercase) ||
      itemDescriptionUppercase.includes(valueUppercase)
    );
  });

  return [productFiltered, setValue];
};

function App() {
  const [products2, setSearchText] = useProducts();

  return (
    <React.Fragment>
      <Header />
      <Search setValue={setSearchText} />
      <main className="content">
        <ProductList products={products2} />
      </main>
    </React.Fragment>
  );
}

export default App;
