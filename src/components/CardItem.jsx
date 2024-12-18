import React from "react";
// react icons
import { FaTrashCan } from "react-icons/fa6";
// redux
import { useDispatch } from "react-redux";
import {
  decrementAmount,
  incrementAmount,
  removeProducts,
} from "../features/productSlice";
export const CardItem = ({ prod }) => {
  const dispatch = useDispatch();
  const { description, title, brand, thumbnail, id, amount } = prod;
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
            <div className="text-sm opacity-50">Brand: {brand}</div>
          </div>
        </div>
      </td>
      <td>{description}</td>
      <td>
        <div className="flex items-center gap-3">
          <button
            onClick={() => dispatch(incrementAmount(id))}
            className="btn btn-sm"
          >
            &#43;
          </button>
          <span className="text-xl font-bold">{amount}</span>
          <button
            onClick={() => {
              if (prod.amount == 1) {
                dispatch(removeProducts(id));
              }
              dispatch(decrementAmount(id));
            }}
            className="btn btn-sm"
          >
            &#8722;
          </button>
        </div>
      </td>
      <th>
        <button
          onClick={() => dispatch(removeProducts(id))}
          className="btn btn-primary btn-xs"
        >
          <FaTrashCan />
        </button>
      </th>
    </tr>
  );
};

export default CardItem;
