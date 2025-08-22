import { CDN_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    dispatch(addItem(item));
    console.log(item);
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <div
            key={item?.card?.info?.id}
            className="p-2 m-2 border-b-2 border-b-gray-300 text-left flex justify-between items-start"
          >
            <div className="flex-1 pr-4">
              <div>
                <h2 className="text-xl">{item?.card?.info?.name}</h2>
                <h3 className="text-lg">
                  ₹
                  {item?.card?.info?.price
                    ? item?.card?.info?.price / 100
                    : item?.card?.info?.defaultPrice / 100}
                </h3>
              </div>
              <p className="text-sm py-3">{item.card?.info.description}</p>
            </div>

            <div className="relative w-36 h-36 flex-shrink-0">
              <img
                src={
                  item?.card?.info?.imageId &&
                  CDN_URL + item?.card?.info?.imageId
                }
                className="w-full h-full rounded-2xl object-cover"
                alt={item?.card?.info?.name}
              />
              <button
                className="absolute bottom-2 right-2 bg-white text-black px-3 py-1 rounded-md shadow cursor-pointer"
                onClick={() => handleAddItems(item)}
              >
                Add +
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
