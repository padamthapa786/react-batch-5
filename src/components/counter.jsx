import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handlechange = ()=>{
    setCount(count + 1)
  }
  const resetButton = ()=>{
    setCount((prev)=> prev  + 1)
  }
  return <div>
    <p className=" text-4xl mt-10">{count}</p>
    <button onClick={handlechange} className=" mt-4  bg-white px-4 py-3 rounded-lg shadow-md ">Submit</button>
  </div>;
};

export default Counter;
