import React from "react";
import {
  //   BrowserRouter as Router,
  //   Routes,
  //   Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from "./Login";
import Browse from "./Browse";
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
  ]);
  return <RouterProvider router={appRouter} />;
  //   return (
  //     <Router>
  //       <Routes>
  //         <Route excat path="/" element={<Login />} />
  //         <Route excat path="/browse" element={<Browse />} />
  //       </Routes>
  //     </Router>
  //   );
};

export default Body;
