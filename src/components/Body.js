import { resList } from "../../utils/mockData";
import RestaurentCard from "./RestaurentCard";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurents, setListofRestaurents] = useState(resList);
  return (
    <div className="body">
      <div className="search">Search</div>

      <div className="filer">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredListOfRestaurents = resList.filter(
              (res) => res.info.avgRating > 4
            );
            setListofRestaurents(filteredListOfRestaurents);
            console.log(filteredListOfRestaurents);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {/* <RestaurentCard resData={resList[0]} /> */}
        {listOfRestaurents.map((restaurent) => (
          <RestaurentCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
