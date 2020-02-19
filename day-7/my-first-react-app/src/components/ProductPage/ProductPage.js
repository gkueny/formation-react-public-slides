import React from "react";
import { useParams } from "react-router-dom";
import Image from "./Image";
import Infos from "./Infos";

const useProduct = () => {
  const [products, setProducts] = React.useState([]);
  const { id } = useParams();

  React.useEffect(() => {
    fetch(`https://server-ten.now.sh`)
      .then(body => body.json())
      .then(response => {
        setProducts(response);
      });
  }, []);

  const product = products.find(item => {
    return item.id === id;
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
  return [productWithAllInfos];
};

const ProductPage = props => {
  const [product] = useProduct();

  if (!product || !product.id) {
    return <div>Loading...</div>;
  }
  return (
    <main className="product">
      <div className="left-column">
        <Image src={product.img} alt={"produit 1"} />
      </div>
      <div className="right-column">
        <Infos product={product} addToCart={props.addToCart} />
      </div>
    </main>
  );
};

export default ProductPage;
