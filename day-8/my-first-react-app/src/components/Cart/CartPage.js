import React from "react";
import ProductList from "../Product/ProductList";

const CartPage = props => {
  // const productsWithQuantity = props.products.reduce()
  // let productsWithQuantity = [];
  // for (let i = 0; i < props.products.length; i++) {
  //   const currentProduct = props.products[i];

  //   const isInArray = productsWithQuantity.find(
  //     item => item.id === currentProduct.id
  //   );

  //   if (!isInArray) {
  //     productsWithQuantity = [
  //       ...productsWithQuantity,
  //       { ...currentProduct, quantity: 1 }
  //     ];
  //   } else {
  //     productsWithQuantity = productsWithQuantity.map(item => {
  //       if (item.id === currentProduct.id) {
  //         return {
  //           ...item,
  //           quantity: item.quantity + 1
  //         };
  //       } else {
  //         return item;
  //       }
  //     });
  //   }
  // }

  return (
    <main className="content">
      <ProductList
        products={props.products}
        hasRemoveAction={true}
        removeProduct={props.removeProduct}
      />
    </main>
  );
};

export default CartPage;
