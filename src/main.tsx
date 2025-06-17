import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Router";
import { AnimalProvider } from "./context/AnimalContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AnimalProvider>
      <RouterProvider router={router} />
    </AnimalProvider>
  </StrictMode>
);
