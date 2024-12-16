import React from "react";
// react-router-dom
import { Link } from "react-router-dom";

const SingleProduct = ({
  id,
  title,
  brand,
  images,
  price,
  rating,
  thumbnail,
}) => {
  const handleAddItem = (e) => {
    e.preventDefault();
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
