import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/Notfound";
import { Layout } from "./pages/Layout";
import { Animals } from "./pages/Animals";
import { AnimalPage } from "./pages/AnimalPage";
import { Suspense } from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<h1>Laddar...</h1>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/animals",
        element: (
          <Suspense fallback={<h1>Laddar...</h1>}>
            <Animals />
          </Suspense>
        ),
      },
      {
        path: "/animals/:id",
        element: (
          <Suspense fallback={<h1>Laddar...</h1>}>
            <AnimalPage />
          </Suspense>
        ),
      },
    ],
  },
]);
