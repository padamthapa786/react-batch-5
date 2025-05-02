import { createBrowserRouter } from "react-router";
import MainLayout from "./layout/mainlayout";
import HomePage from "./pages/HomePage";
import Aboutpage from "./pages/Aboutpage";
import Signup from "./pages/Signup";
import Login from "./pages/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <Aboutpage />,
      },

      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

