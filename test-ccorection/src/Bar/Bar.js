import React from "react";
import createPersistedState from "use-persisted-state";

const Bar = props => {
  // utilsiation avec state interne
  // persisté selon l'id du bar
  // const useLikesPersisted = createPersistedState(`likes-${props.bar.id}`);
  // const [likes, setLikes] = useLikesPersisted(0);

  return (
    <section>
      <h1>{props.bar.title}</h1>
      <p>{props.bar.address}</p>
      <p>{props.bar.description}</p>
      <p>{props.bar.nbLike} likes</p>
      <button
        onClick={() => {
          // setLikes(likes + 1);
          props.addLikes(props.bar.id);
        }}
      >
        😎
      </button>
    </section>
  );
};

export default Bar;
