import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import "../App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import HomePage from "./HomePage/HomePage";
import ProductPage from "./ProductPage/ProductPage";
import store from "./store";

function App() {
  const [productsInCart, setProductsInCart] = React.useState([]);
  const addToCart = product => {
    if (!productsInCart.find(item => item.id === product.id)) {
      setProductsInCart([...productsInCart, product]);
    }
  };

  const [notesWithoutRedux, setNotesWithoutRedux] = React.useState([]);

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
        </Switch>
        <Footer addNoteWithoutRedux={addNoteWithoutRedux} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
