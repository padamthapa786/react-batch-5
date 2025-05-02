import axios from "axios";
import { useEffect, useState } from "react";
import { http } from "../config/axios";

const usefetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setErrors] = useState(null);

  useEffect(() => {
    datafetch();
  }, []);

  async function datafetch() {
    try {
      setLoading(true);
      const response = await http.get(url);
      const data = response.data.data;
      setData(data);
    } catch (error) {
      setErrors(error.message);
      console.error("Error fetching data:", error);
    }
    finally{
      setLoading(false);
    }
  }
  return [data, loading, error];
};
export default usefetch;
