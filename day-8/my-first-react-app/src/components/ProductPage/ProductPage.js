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
  const [color, setColor] = React.useState("black");

  React.useEffect(() => {
    if (product && product.id) {
      document.title = `${product.title} | ${color}`;
    } else {
      document.title = `Loading...`;
    }
  }, [color, product]);

  if (!product || !product.id) {
    return <div>Loading...</div>;
  }

  let img = product.img;
  if (color === "red") {
    img = product.img2;
  } else if (color === "blue") {
    img = product.img3;
  }

  return (
    <main className="product">
      <div className="left-column">
        <Image src={img} alt={"produit 1"} />
      </div>
      <div className="right-column">
        <Infos
          setColor={setColor}
          product={product}
          addToCart={props.addToCart}
        />
      </div>
    </main>
  );
};

export default ProductPage;
