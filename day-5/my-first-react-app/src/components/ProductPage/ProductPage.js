import React from "react";
import Image from "./Image";
import Info from "./Infos";

const useProduct = () => {
  const [search, setSearch] = React.useState("");
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://server-ten.now.sh`)
      .then(body => body.json())
      .then(response => {
        setProducts(response);
      });
  }, []);

  const product = products.find(item => {
    return item.id === search;
  });
  const productWithAllInfos = {
    ...product,
    price: 180,
    configTitle: "Couleur",
    configs: [
      { id: "blue", value: "blue", dataImage: "blue" },
      { id: "black", value: "black", dataImage: "black" },
      { id: "red", value: "red", dataImage: "red" }
    ],
    categories: ["product", "spa"]
  };
  return [productWithAllInfos, setSearch];
};

const ProductPage = () => {
  const [product, setSearch] = useProduct();

  if (!product || !product.id) {
    return (
      <div>
        <input
          name="search"
          onChange={e => {
            setSearch(e.target.value);
          }}
        />
        Loading...
      </div>
    );
  }
  return (
    <main className="product">
      <input
        name="search"
        onChange={e => {
          setSearch(e.target.value);
        }}
      />
      <div className="left-column">
        <Image src={product.img} alt={"produit 1"} />
      </div>
      <div className="right-column">
        <Info product={product} />
      </div>
    </main>
  );
};

export default ProductPage;
