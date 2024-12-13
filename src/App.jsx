import React from "react";
// react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// pages
import { Home, Card, Product } from "./pages";
// layouts
import MainLayout from "./layouts/MainLayout";
// css
export const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
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
