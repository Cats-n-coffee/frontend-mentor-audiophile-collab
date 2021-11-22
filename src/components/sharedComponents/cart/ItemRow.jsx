import React from "react";

export default function ItemRow(props) {
  const { item } = props;

  return (
    <li className="itemRow">
      <div className="itemRow__itemDetails">
        <img src={item.image} alt={item.name} />
        <div>
          <h4>{item.name}</h4>
          <p>{item.price}</p>
        </div>
      </div>
      <div className="itemRow__itemQty">
        <button>+</button>
        <p>2</p>
        <button>-</button>
      </div>
    </li>
  );
}
