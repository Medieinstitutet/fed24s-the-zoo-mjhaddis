import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/Notfound";
import { Layout } from "./pages/Layout";
import { Animals } from "./pages/Animals";
import { Suspense } from "react";
import { animalsLoader } from "./loaders/animalsLoader";
import { AnimalPage } from "./pages/AnimalPage";

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
      {
        path: "/animals",
        element: (
          <Suspense fallback={<h1>Laddar...</h1>}>
            <Animals />
          </Suspense>
        ),
        loader: animalsLoader,
      },
      {
        path: "/animals:id",
        element: <AnimalPage />,
      },
    ],
  },
]);
