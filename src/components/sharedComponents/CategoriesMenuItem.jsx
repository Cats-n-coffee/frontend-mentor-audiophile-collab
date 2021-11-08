import React from "react";
import { ArrowRight } from "../icons/Icons";

export default function CategoriesMenuItem(props) {
  const { item } = props;

  return (
    <li className="categoriesMenu__listitem">
      <img
        src={item.img}
        alt={item.name}
        className="categoriesMenu__listitem__img"
      />
      <h3 className="categoriesMenu__listitem__title">{item.name}</h3>
      <a href="/" className="categoriesMenu__listitem__link">
        <span>shop</span>
        <ArrowRight />
      </a>
    </li>
  );
}
