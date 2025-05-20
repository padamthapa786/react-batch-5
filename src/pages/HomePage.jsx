import React, { createContext, useEffect, useState } from "react";
import Contact from "../components/contact";
import axios from "axios";
import { set } from "react-hook-form";
import { FaTruckLoading } from "react-icons/fa";
import usefetch from "../hook/usefetch";
import VideoList from "./videos";
import { http } from "../config/axios";
import Paginate from "./pagination";
import ShopPage from "../components/shop";

//props drilling
export const datacontext = createContext();

const HomePage = () => {
  const getUserFromLocalstorage = localStorage.getItem("user");
  const dataparse = JSON.parse(getUserFromLocalstorage);
  console.log(dataparse);

  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    usefetch();
  }, []);

  const usefetch = async () => {
    try {
      const res = await http.get("/user/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return <div>Myname is :{dataparse?.username || "data fetching"}
  <div>
    {/* <Paginate/> */}
    <ShopPage/>


  </div>
  </div>;
};

export default HomePage;
