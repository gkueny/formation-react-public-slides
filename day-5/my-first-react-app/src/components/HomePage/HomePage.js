import React, { useState, useEffect } from "react";
import Search from "../Search/Search";
import ProductList from "../Product/ProductList";

const useProducts = () => {
  const [value, setValue] = React.useState("");
  const [products, setProducts] = React.useState([]);
  const [nbproducts, setNbProduct] = React.useState(3);

  React.useEffect(() => {
    fetch(`https://server-ten.now.sh?nbproducts=${nbproducts}`)
      .then(body => body.json())
      .then(response => {
        setProducts(response);
        // votre code en utilisant response
      });
  }, [nbproducts]);

  const valueUppercase = value.toUpperCase();

  const productFiltered = products.filter(item => {
    const itemTileUppercase = item.title.toUpperCase();
    const itemDescriptionUppercase = item.description.toUpperCase();
    return (
      itemTileUppercase.includes(valueUppercase) ||
      itemDescriptionUppercase.includes(valueUppercase)
    );
  });

  return [productFiltered, setValue, setNbProduct];
};

function HomePage() {
  const [products, setSearchText, setNbProduct] = useProducts();

  return (
    <React.Fragment>
      <Search setValue={setSearchText} />
      <input
        type="number"
        id="nbproducts"
        name="nbproducts"
        onChange={e => {
          setNbProduct(parseInt(e.target.value));
        }}
      />
      <main className="content">
        <ProductList products={products} />
      </main>
    </React.Fragment>
  );
}

export default HomePage;
