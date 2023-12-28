import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./Login";
import Browse from "./Browse";
import MovieDetails from "./MovieDetails";
const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/browse/:id",
      element: <MovieDetails />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default Body;
