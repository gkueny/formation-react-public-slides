import React from "react";
import Cart from "../Cart/Cart";
import Name from "./Name";

function User(props) {
  /*
  {
    user: {
      name: "tata",
      firstname: "Gaetan"
    }
  }
  */

  return (
    <section>
      <Name user={props.user} />
      <Cart cart={props.cart} />
    </section>
  );
}

export default User;
