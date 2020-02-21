import React from "react";
import { useParams, Redirect } from "react-router-dom";
import Bar from "./Bar";

const BarPage = props => {
  const { barid } = useParams();

  const DisplayBar = () => {
    if (props.error) {
      return <p>Une erreur est survenue.</p>;
    }
    if (props.isLoading) {
      return <p>Loading...</p>;
    }

    const bar = props.bars.find(currentBar => {
      return currentBar.id === barid;
    });

    if (!bar) {
      return <Redirect to="/" />;
    }

    return <Bar addLikes={props.addLikes} bar={bar} />;
  };

  return (
    <section>
      <DisplayBar />
    </section>
  );
};

export default BarPage;
