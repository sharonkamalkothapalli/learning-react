import { useState, useEffect } from "react";
import { RESTAURENT_URL } from "./constants";

const useRestaurents = () => {
  const [restaurents, setRestaurents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURENT_URL);
    const json = await data.json();

    setRestaurents(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return restaurents;
};

export default useRestaurents;
