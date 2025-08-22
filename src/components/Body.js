import RestaurentCard, { withPromotedLabel } from "./RestaurentCard";
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

  const RestaurentCardPromoted = withPromotedLabel(RestaurentCard);
  const defaultPromoted = true;

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
      <div className="filter flex">
        <div className="search m-3 p-3">
          <input
            type="text"
            className="border-1 border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-green-100 px-4 py-2 m-4 rounded-lg cursor-pointer"
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
        <div className="search m-3 p-3">
          <button
            className="bg-blue-100 px-4 py-2 m-4 rounded-lg cursor-pointer"
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
      </div>
      <div className="res-container grid gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {/* <RestaurentCard resData={resList[0]} /> */}
        {filteredRestaurents.map((restaurent) => (
          <Link
            key={restaurent.info.id}
            to={"/restaurents/" + restaurent.info.id}
          >
            {defaultPromoted ? (
              <RestaurentCardPromoted resData={restaurent} />
            ) : (
              <RestaurentCard resData={restaurent} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
