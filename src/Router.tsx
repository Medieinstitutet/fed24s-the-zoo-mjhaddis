import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/Notfound";
import { Layout } from "./pages/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
