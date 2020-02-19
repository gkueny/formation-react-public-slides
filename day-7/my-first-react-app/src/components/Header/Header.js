import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartContext from "../../contexts/cartContext";

const getAvgNotes = array => {
  const allNotes = array.reduce((acc, item) => {
    return acc + item;
  }, 0);
  if (array.length === 0) {
    return 5;
  }
  return allNotes / array.length;
};

const Header = props => {
  // const { productsInCart } = useContext(CartContext);
  return (
    <header>
      <nav>
        <Link to="/">Accueil</Link>
        <br />
        <p>Note du site: {getAvgNotes(props.notes)}</p>
        <br />
        <p>Note du site sans redux: {getAvgNotes(props.notesWithoutRedux)}</p>
      </nav>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    notes: state.noteState
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
