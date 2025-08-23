"use client";
import axios from "axios";
import { useEffect } from "react";

const page = () => {
  const options = {
    method: "GET",
    url: "https://jsearch.p.rapidapi.com/search",
    params: {
      query: "frontend developer in India",
      page: "1",
      num_pages: "1",
    },
    headers: {
      "x-rapidapi-key": "02e7596de9msh621f380bf09169fp156da2jsncdf01bc39b10",
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
  };
  async function fetched() {
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetched();
  }, []);

  return <div>page</div>;
};

export default page;
