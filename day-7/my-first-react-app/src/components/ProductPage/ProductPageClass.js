import React from "react";
import Image from "./Image";
import Info from "./Infos";

class ProductPage extends React.Component {
  constructor() {
    super();

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    fetch(`https://server-ten.now.sh`)
      .then(body => body.json())
      .then(response => {
        this.setState({
          products: response
        });
      });
  }

  render() {
    const id = this.props.match.params.id;

    const product = this.state.products.find(item => {
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

    if (!product || !product.id) {
      return <div>Loading...</div>;
    }

    return (
      <main className="product">
        <div className="left-column">
          <Image src={productWithAllInfos.img} alt={"produit 1"} />
        </div>
        <div className="right-column">
          <Info product={productWithAllInfos} />
        </div>
      </main>
    );
  }
}

export default ProductPage;
