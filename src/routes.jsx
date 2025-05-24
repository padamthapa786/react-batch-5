import { createBrowserRouter } from "react-router";
import MainLayout from "./layout/mainlayout";
import HomePage from "./pages/HomePage";
import Aboutpage from "./pages/Aboutpage";
import Signup from "./pages/Signup";
import Login from "./pages/login";
import PostForm from "./components/postForm";
import Cart from "./pages/Cart";
import OnePerson from "./components/oneperson";

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
        path: "/cart",
        element: <Cart/>
      },

      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path:"product/:id",
        element:<OnePerson/>
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path:"/postform",
        element:<PostForm/>
      }
    ],
  },
]);

