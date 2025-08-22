import ItemList from "./ItemList";
import { useState } from "react";

const RestaurentCategory = ({
  data,
  showItems,
  setShowIndex,
  index,
  currentIndex,
}) => {
  //   const [showItem, setShowItem] = useState(false);

  const handleClick = () => {
    //   showItem ? setShowItem(false) : setShowItem(true);

    if (currentIndex == index) setShowIndex(null);
    else setShowIndex(index);
  };
  return (
    <div className="align-middle">
      <div className="bg-gray-100 w-6/12 mx-auto my-4 p-4 shadow-gray-200 cursor-pointer rounded-xl ">
        <div
          className="flex justify-between font-bold text-xl"
          onClick={handleClick}
        >
          <span>
            {data.title} ({data.itemCards.length})
          </span>
          <span className="px-3">↓</span>
        </div>
        <div>{showItems && <ItemList items={data?.itemCards} />}</div>
      </div>
    </div>
  );
};

export default RestaurentCategory;
