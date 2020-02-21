import React from "react";

const Me = () => {
  const [txt, setTxt] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch("https://control-server.now.sh/me")
      .then(body => {
        return body.json();
      })
      .then(response => {
        setTxt(response);
        setError(null);
      })
      .catch(() => {
        setError("Une erreur est survenue");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const DisplayText = () => {
    if (error) {
      return <p>Une erreur est survenue.</p>;
    }
    if (isLoading) {
      return <p>Loading...</p>;
    }

    return <p>{txt}</p>;
  };

  return (
    <article>
      <h1>A props de moi</h1>
      <DisplayText />
    </article>
  );
};

export default Me;
