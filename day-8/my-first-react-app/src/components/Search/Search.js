import React from "react";

const Search = props => {
  // let value = "tttt"

  return (
    <React.Fragment>
      <input
        type="text"
        id="search"
        placeholder="rechercher"
        onChange={event => {
          //  event.target.value
          props.setValue(event.target.value);
        }}
      />
    </React.Fragment>
  );
};

export default Search;
