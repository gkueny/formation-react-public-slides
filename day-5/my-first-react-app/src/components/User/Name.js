import React from "react";

const Name = props => {
  return (
    <div>
      {props.user.firstname} {props.user.name}
    </div>
  );
};

export default Name;
