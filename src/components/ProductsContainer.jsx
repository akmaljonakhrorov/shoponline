import React from "react";
// react-router-dom
import { useLoaderData } from "react-router-dom";
// components
import { SingleProduct } from "./";
export const ProductsContainer = () => {
  const { products } = useLoaderData();
  return (
    <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
      {products.map((value) => {
        const {
          id,
          title,
          brand,
          images,
          price,
          rating,
          thumbnail,
          discountPercentage,
        } = value;
        return (
          <SingleProduct
            key={id}
            id={id}
            title={title}
            brand={brand}
            images={images}
            price={price}
            rating={rating}
            thumbnail={thumbnail}
            value={value}
            discountPercentage={discountPercentage}
          />
        );
      })}
    </div>
  );
};
export default ProductsContainer;
