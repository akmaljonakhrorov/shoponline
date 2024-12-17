import React from "react";
import { useDispatch } from "react-redux";
// react-router-dom
import { Link } from "react-router-dom";
import { addProducts, removeProducts } from "../features/productSlice";
const SingleProduct = ({
  id,
  title,
  brand,
  images,
  price,
  rating,
  thumbnail,
  value,
}) => {
  const dispatch = useDispatch();
  const handleAddItem = (e) => {
    e.preventDefault();
    dispatch(addProducts({ ...value, amount: 1 }));
  };
  return (
    <Link
      to={`/product/${id}`}
      className="group card w-full bg-base-100 shadow-xl"
    >
      {title}
      <figure className="bg-black">
        <img
          src={thumbnail}
          alt="product_image"
          className="h-auto w-full object-cover duration-300 group-hover:scale-110"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <p>${price}</p>
        <div className="card-actions justify-end">
          <button onClick={handleAddItem} className="btn btn-primary">
            Buy Now
          </button>
        </div>
      </div>
    </Link>
  );
};
export default SingleProduct;
