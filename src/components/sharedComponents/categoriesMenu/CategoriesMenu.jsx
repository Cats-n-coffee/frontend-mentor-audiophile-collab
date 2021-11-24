import React from "react";
import CategoriesMenuItem from "./CategoriesMenuItem";

const categories = [
  {
    id: 1,
    name: "headphones",
    img: "./assets/shared/desktop/image-category-thumbnail-headphones.png",
    path: "",
  },
  {
    id: 2,
    name: "speakers",
    img: "./assets/shared/desktop/image-category-thumbnail-speakers.png",
    path: "",
  },
  {
    id: 3,
    name: "earphones",
    img: "./assets/shared/desktop/image-category-thumbnail-earphones.png",
    path: "",
  },
];

export default function CategoriesMenu() {
  return (
    <section className="categoriesMenu">
      <ul className="categoriesMenu__list">
        {categories.map((item) => (
          <CategoriesMenuItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
