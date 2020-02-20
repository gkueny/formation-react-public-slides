import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import "../App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import HomePage from "./HomePage/HomePage";
import ProductPage from "./ProductPage/ProductPage";
import CartPage from "./Cart/CartPage";
import store from "./store";

function App() {
  const [productsInCart, setProductsInCart] = React.useState([]);
  const [notesWithoutRedux, setNotesWithoutRedux] = React.useState([]);

  const addToCart = product => {
    const isInArray = productsInCart.find(item => item.id === product.id);

    if (!isInArray) {
      setProductsInCart([...productsInCart, { ...product, quantity: 1 }]);
    } else {
      const newProductsInCart = productsInCart.map(item => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1
          };
        } else {
          return item;
        }
      });

      setProductsInCart(newProductsInCart);
    }
  };

  const removeProduct = id => {
    const newProductsInCart = productsInCart.filter(item => {
      return item.id !== id;
    });
    setProductsInCart(newProductsInCart);
  };

  const addNoteWithoutRedux = note => {
    setNotesWithoutRedux([...notesWithoutRedux, note]);
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header
          productsInCart={productsInCart}
          notesWithoutRedux={notesWithoutRedux}
        />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/product/:id">
            <ProductPage addToCart={addToCart} />
          </Route>
          <Route exact path="/cart">
            <CartPage products={productsInCart} removeProduct={removeProduct} />
          </Route>
        </Switch>
        <Footer addNoteWithoutRedux={addNoteWithoutRedux} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
