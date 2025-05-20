import React from "react";
import { Link, NavLink } from "react-router";
import { Nav as navs } from "../data/data";
import { CiShoppingCart } from "react-icons/ci";
import { useCart } from "../store/store";

const Nav = () => {
  const count = useCart((state) => state.cartCount);
  return (
    <nav>
      <ul className="flex justify-center items-center space-x-4">
        {navs.map((value, index) => (
          <li key={index}>
            <NavLink to={value.url} className="hover:text-gray-300">
              {value.title}
            </NavLink>
          </li>
        ))}
        <div className="  px-4 py-4 relative">
          <div className=" absolute right-1 top-2 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <p>{count}</p>
          </div>
          <Link to={'/cart'}>
          <CiShoppingCart size={34} color="white" />
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
