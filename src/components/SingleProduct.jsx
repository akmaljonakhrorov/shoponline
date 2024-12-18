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
  discountPercentage,
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
      <div className="mb-3 flex justify-center text-xl">
        <h2>Brand: {brand || "brand is unknown"}</h2>
      </div>
      <figure className="bg-black">
        <img
          src={thumbnail}
          alt="product_image"
          className="h-auto w-full object-cover duration-300 group-hover:scale-110"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-xl">{title}</h2>

        <p className="font-bold">Discount: {discountPercentage}%</p>
        <p>Price: ${price}</p>
        <p>Raiting: {rating}</p>
        <div className="card-actions justify-center">
          <button onClick={handleAddItem} className="btn btn-primary">
            Buy Now
          </button>
        </div>
      </div>
    </Link>
  );
};
export default SingleProduct;
