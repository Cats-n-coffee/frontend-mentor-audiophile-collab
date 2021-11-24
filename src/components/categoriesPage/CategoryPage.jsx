import React from "react";
import CategoriesMenu from "../sharedComponents/categoriesMenu/CategoriesMenu";
import BottomBanner from "../sharedComponents/bottomBanner/BottomBanner";

export default function CategoryPage() {
  return (
    <section className="categoryPage">
      <h2 className="categoryPage__title">Headphones</h2>
      <section className="categoryPage__catalogue">catalogue</section>
      <CategoriesMenu />
      <BottomBanner />
    </section>
  );
}
