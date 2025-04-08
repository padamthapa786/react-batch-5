import React from "react";
import { BrowserRouter, NavLink, Route, Router, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import Aboutpage from "./pages/Aboutpage";
import Signup from "./pages/Signup";

const App = () => {
  const user = false;
  return (
    <>
      <BrowserRouter>
        <header>
          <nav>
            <ul className=" flex gap-2">
              <li>Home</li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>Contact</li>
              <li> {!user ?  <NavLink to={'/signup'}>Signup</NavLink> : "dashboard"}</li>
            </ul>
          </nav>
        </header>
        {/* react router */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
