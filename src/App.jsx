import React from "react";
// react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// pages
import { Home, Card, Product } from "./pages";
// layouts
import MainLayout from "./layouts/MainLayout";
// loader
import { loader as HomeLoader } from "./pages/Home";
export const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: HomeLoader,
        },
        {
          path: "/card",
          element: <Card />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default App;
