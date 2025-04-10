import React from "react";
import {  Outlet } from "react-router";
import Nav from "./nav";

const MainLayout = () => {

  return (
    <>
      <header className="bg-gray-800 text-white p-4 text-center">
        <h1>Welcome to Our Website</h1>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>copyright 2026</footer>
    </>
  );
};

export default MainLayout;
