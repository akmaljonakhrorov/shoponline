import React from "react";
import { useSelector, useDispatch } from "react-redux";

// components
import { CardItem } from "../components";
export const Card = () => {
  const { products } = useSelector((state) => state.products);
  return (
    <div className="align-elements">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Product name: </th>
              <th>Description:</th>
              <th>Amount:</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod) => {
              return <CardItem key={prod.id} prod={prod} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Card;
