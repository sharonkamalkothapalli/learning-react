import { CDN_URL } from "../../utils/constants";

const RestaurentCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info;

  return (
    <div className="res-card m-4 p-4 w-64 h-[380px] rounded-lg bg-gray-100 hover:bg-amber-100 flex flex-col">
      <img
        className="w-full h-40 object-cover rounded-xl"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <h3 className="py-2 text-lg font-bold truncate">{name}</h3>
      <h4 className="text-sm text-gray-700 line-clamp-2">
        {cuisines.join(", ")}
      </h4>
      <div className="mt-auto">
        <h4 className="font-semibold">{avgRating} ⭐</h4>
        <h4>{sla.deliveryTime} mins</h4>
      </div>
    </div>
  );
};

export default RestaurentCard;
