import React from "react";
import ItemRow from "./ItemRow";

const tempCart = [
  {
    id: 1,
    image: "./assets/cart/image-xx99-mark-two-headphones.jpg",
    name: "XX99 MK II",
    price: 2999,
  },
  {
    id: 2,
    image: "./assets/cart/image-xx59-headphones.jpg",
    name: "XX59",
    price: 899,
  },
  {
    id: 3,
    image: "./assets/cart/image-yx1-earphones.jpg",
    name: "YX1",
    price: 599,
  },
];

export default function ItemContainer() {
  return tempCart.length ? (
    <ul>
      {tempCart.map((item) => (
        <ItemRow key={item.id} item={item} />
      ))}
    </ul>
  ) : (
    "No item in the cart"
  );
}
