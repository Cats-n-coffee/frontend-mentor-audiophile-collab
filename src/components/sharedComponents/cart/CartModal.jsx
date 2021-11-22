import React from "react";
import ItemContainer from "./ItemContainer";

/*
Note: when finishing this component, remove the button inside App.js, remove the positioning
from #App
*/

export default function CartModal() {
  return (
    <section className="cartModal">
      <div className="cartModal__titleWrapper">
        <h2>Cart (num)</h2>
        <button className="cartModal__removeButton">Remove All</button>
      </div>
      <ItemContainer />
      <div className="cartModal__totalWrapper">
        <h3>Total</h3>
        <p className="cartModal__totalAmount">$ 5,342</p>
      </div>
      <button className="btn btn__checkout">Checkout</button>
    </section>
  );
}
