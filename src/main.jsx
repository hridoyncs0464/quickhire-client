import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import HomePage from "./pages/HomePage";
import JobDetailPage from "./pages/JobDetailPage";
import AdminPage from "./pages/AdminPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "jobs/:id",
        element: <JobDetailPage />,
      },
      {
        path: "admin",
        element: <AdminPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

const root = document.getElementById("root");
createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
