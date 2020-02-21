import React from "react";
import { Link } from "react-router-dom";

const BarList = props => {
  return (
    <ul>
      {props.bars.map(currentBar => {
        return (
          <li key={currentBar.id}>
            <h2>{currentBar.title}</h2>
            <p>{currentBar.description}</p>
            <Link to={`/bar/${currentBar.id}`}>En savoir plus</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default BarList;
