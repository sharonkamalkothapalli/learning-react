import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestarurentMenu from "../../utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);

  const resInfo = useRestarurentMenu(resId);

  if (resInfo == null) return <Shimmer />;

  const { id, name, cuisines, costForTwoMessage } =
    resInfo?.cards[2].card.card.info;

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards || [];

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="menu text-center p-4 m-4">
      <h1 className="font-bold p-4 text-3xl">{name}</h1>
      <p className="font-bold text-xl px-2">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* Iterate over each category and pass it to a restaurentcategory component. this component is responsible to create category wise accordian */}
      <div>
        {categories.map((category, index) => (
          <RestaurentCategory
            key={category?.card?.card?.categoryId}
            data={category?.card?.card}
            showItems={index == showIndex}
            setShowIndex={setShowIndex}
            index={index}
            currentIndex={showIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
