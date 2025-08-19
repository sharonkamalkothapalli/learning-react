import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";
import useRestaurents from "../../utils/useRestaurents";

const Body = () => {
  const restaurents = useRestaurents();
  const [listOfRestaurents, setListofRestaurents] = useState([]);
  const [filteredRestaurents, setfilteredRestaurents] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setListofRestaurents(restaurents);
    setfilteredRestaurents(restaurents);
  }, [restaurents]);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false)
    return (
      <h1>
        Looks like you are offline !! Please check your internet connection
      </h1>
    );

  if (listOfRestaurents.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredListOfRestaurents = listOfRestaurents.filter(
                (res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurents(filteredListOfRestaurents);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredListOfRestaurents = listOfRestaurents.filter(
              (res) => res.info.avgRating > 4
            );
            setfilteredRestaurents(filteredListOfRestaurents);
            console.log(filteredListOfRestaurents);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {/* <RestaurentCard resData={resList[0]} /> */}
        {filteredRestaurents.map((restaurent) => (
          <Link
            key={restaurent.info.id}
            to={"/restaurents/" + restaurent.info.id}
          >
            <RestaurentCard resData={restaurent} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
