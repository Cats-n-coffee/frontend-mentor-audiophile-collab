import React from "react";
import CategoriesMenu from "../sharedComponents/categoriesMenu/CategoriesMenu";
import BottomBanner from "../sharedComponents/bottomBanner/BottomBanner";
import CategoryItem from "./CategoryItem";
import jsonData from "../../data.json";

export default function CategoryPage(props) {
  const { category } = props;
  const [selectedItems, setSelectedItems] = React.useState([]);

  React.useEffect(() => {
    const filterItems = jsonData.filter((item) => item.category === category);
    setSelectedItems(filterItems);
  }, [category]);

  return (
    <section className="categoryPage">
      <h2 className="categoryPage__title">Headphones</h2>
      <ul className="categoryPage__catalogue">
        {selectedItems.length &&
          selectedItems.map((item) => (
            <CategoryItem key={item.id} item={item} />
          ))}
      </ul>
      <CategoriesMenu />
      <BottomBanner />
    </section>
  );
}
