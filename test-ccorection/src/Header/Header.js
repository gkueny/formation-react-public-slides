import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/me">Me</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
