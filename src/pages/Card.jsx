import React from "react";
import { useSelector, useDispatch } from "react-redux";
export const Card = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  return <div>Card</div>;
};
export default Card;
