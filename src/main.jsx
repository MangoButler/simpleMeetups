import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import FavoritesPage from "./pages/Favorites.jsx";
import NewMeetupPage from "./pages/NewMeetup.jsx";
import RootLayout from "./pages/RootLayout";
import { NotificationContextProvider } from "../store/notification-context";
import { FavoritesContextProvider } from "../store/favorites-context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <AllMeetupsPage />,
        index: true,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
      },
      {
        path: "/new",
        element: <NewMeetupPage />,
      },
    ],
  },
  ,
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FavoritesContextProvider>
      <NotificationContextProvider>
        <RouterProvider router={router} />
      </NotificationContextProvider>
    </FavoritesContextProvider>
  </React.StrictMode>
);
