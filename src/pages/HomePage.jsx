import React, { createContext, useEffect, useState } from "react";
import Contact from "../components/contact";
import axios from "axios";

//props drilling
export const datacontext = createContext();

const HomePage = () => {
  const [user, setUser] = useState({
    userId: "1",
    title: "padam",
  });
  const data = "i am padam";
  const data2 = "hello world";
  const dataall = {
    data,
    data2,
  };
  useEffect(() => {
    datafetch();
  }, []);

  const datafetch = async () => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/todos/1", data, {
          
        }
      );
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Home Page</h1>
      <p className="text-lg mb-4">Welcome to the Home Page!</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Fetch Data
      </button>

      <div className=" flex  flex-col">
        <strong>User ID: </strong> {user.userId}
        <strong>Title:</strong> {user.title}
        <strong>Completed:</strong> {user.completed ? "true" : "false"}
      </div>
      <datacontext.Provider value={dataall}>
        <Contact />
      </datacontext.Provider>
    </div>
  );
};

export default HomePage;
