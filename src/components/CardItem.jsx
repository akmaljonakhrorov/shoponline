import React from "react";
// react icons
import { FaTrashCan } from "react-icons/fa6";
export const CardItem = ({ prod }) => {
  const { description, title, brand, thumbnail } = prod;
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={thumbnail} alt="product image" />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">Brnad: {brand}</div>
          </div>
        </div>
      </td>
      <td>{description}</td>
      <td>
        <div className="flex items-center gap-3">
          <button className="btn btn-sm">+</button>
          <span className="text-xl font-bold">2</span>
          <button className="btn btn-sm">-</button>
        </div>
      </td>
      <th>
        <button className="btn btn-primary btn-xs">
          <FaTrashCan />
        </button>
      </th>
    </tr>
  );
};

export default CardItem;
