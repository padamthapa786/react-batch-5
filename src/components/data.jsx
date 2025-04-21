import React, { useContext } from "react";
import { datacontext } from "../pages/HomePage";

const Data = () => {
  const data = useContext(datacontext)
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Data</h1>
      <p className="text-lg mb-4">{data?.data} </p>
      <p className="text-lg mb-4">{data?.data2} </p>

    </div>
  );
};

export default Data;
