import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "../App.css";
import { CartContextProvider } from "../contexts/cartContext";
import Header from "./Header/Header";
import HomePage from "./HomePage/HomePage";
import ProductPage from "./ProductPage/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/product/:id">
            <ProductPage />
          </Route>
        </Switch>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
