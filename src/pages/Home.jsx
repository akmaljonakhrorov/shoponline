import React from "react";
import { request } from "../utils/request.js";
// components
import { ProductsContainer } from "../components";
// loader react router dom
export const loader = async () => {
  const req = await request.get("/products");
  return req.data;
};
const Home = () => {
  return (
    <div className="align-elements mt-10">
      <h2 className="mb-5 text-3xl font-bold">All Products:</h2>
      <ProductsContainer />
    </div>
  );
};
export default Home;
