import React from "react";
import { NavLink } from "react-router";
import { Nav as navs } from "../data/data";
const Nav = () => {
  return (
    <nav>
      <ul className="flex justify-center space-x-4">
        {navs.map((value, index) => (
          <li key={index}>
            <NavLink to={value.url} className="hover:text-gray-300">
              {value.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
