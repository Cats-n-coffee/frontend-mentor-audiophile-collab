import React from "react";

export default function ItemRow(props) {
  const { item } = props;

  return (
    <li className="itemRow">
      <div className="itemRow__itemDetails">
        <img src={item.image} alt={item.name} />
        <div className="itemRow__itemDetails__info">
          <h4>{item.name}</h4>
          <p>$ {item.price}</p>
        </div>
      </div>
      <div className="itemRow__itemQty">
        <button className="qtyBtn">-</button>
        <p className="qtyDisplay">2</p>
        <button className="qtyBtn">+</button>
      </div>
    </li>
  );
}
