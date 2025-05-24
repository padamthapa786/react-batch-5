import React, { useEffect, useState } from "react";

export const Debounce = () => {

const [value,setValue] = useState("");
const [debouncevalue,setDebouncevalue] = useState("");
  
  const handlechange = (e) => {
    setValue(e.target.value);
  }
  //useeffect

  useEffect(() => {
    //debounce function
    const timerId = setTimeout(() => {
      // setDebouncevalue(value);
      sendapi(value);
    }, 3000);
    //cleanup func
    return () => {
       clearTimeout(timerId);
    }
  }, [value])
  

  function sendapi(value) {
     try {
      console.log("api called");
      // const res = await http.get("/user/user", {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // });
      // console.log(res);  
     } catch (error) {
      
     }
  }

  console.log(debouncevalue)
  return (
    <>
      <input value={value} onChange={handlechange} className=" bg-gray-100 border-2 border-gray-800 "  />
    </>
  );
};
