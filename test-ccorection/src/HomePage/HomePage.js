import React from "react";
import BarList from "./BarList";

const HomePage = props => {
  const DisplayBars = () => {
    if (props.error) {
      return <p>Une erreur est survenue.</p>;
    }
    if (props.isLoading) {
      return <p>Loading...</p>;
    }

    return <BarList bars={props.bars} />;
  };

  return (
    <main>
      <h1>Les bars Toulousains</h1>
      <DisplayBars />
    </main>
  );
};

export default HomePage;
