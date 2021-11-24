import React from "react";

export default function CategoryItem(props) {
  const { item } = props;

  return (
    <li className="categoryItem">
      <picture className="categoryItem__image">
        <source media="(max-width:650px)" srcSet={item.categoryImage.mobile} />
        <source media="(max-width:1200px)" srcSet={item.categoryImage.tablet} />
        <source
          media="(min-width:1200px)"
          srcSet={item.categoryImage.desktop}
        />
        <img src={item.categoryImage.mobile} alt={item.name} />
      </picture>

      <div className="categoryItem__info">
        <h3 className="categoryItem__name">{item.name}</h3>
        <p className="categoryItem__description">{item.description}</p>
        <button className="btn">See Product</button>
      </div>
    </li>
  );
}
