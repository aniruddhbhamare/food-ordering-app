import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { IMG_URL, MENU_API } from "../../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const Restaurant = () => {
  const [showIndex, setShowIndex] = useState(null);
  const params = useParams();
  // console.log("resId", params.id);

  const resInfo = useRestaurantMenu(params.id);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { areaName, name, cloudinaryImageId, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[0]?.card?.card?.info;
  // console.log(resInfo?.data?.cards[0]?.card?.card?.info);

  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  // console.log(
  //   resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
  //     ?.card?.itemCards
  // );
  // console.log(
  //   resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
  // );
  // console.log(
  //   "Menu",
  //   resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // );

  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) => {
        return (
          category?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );
  // console.log("category", categories);
  // @type: "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory

  return (
    <div className="text-center">
      <div className="p-4 m-4 border-2 rounded-md">
        <h1 className="font-bold text-xl">{name}</h1>
        <h3 className="font-bold text-md">{areaName}</h3>
        <h3 className="font-bold text-md">
          {cuisines.join(", ")} - {costForTwoMessage}
        </h3>
        <img className="w-[100%]" src={`${IMG_URL}${cloudinaryImageId}`} />
      </div>
      <h1 className="font-bold text-xl m-4">Menu</h1>

      {categories.map((category, index) => {
        // console.log(category?.card?.card);
        return (
          <RestaurantCategory
            key={category?.card?.card?.id}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default Restaurant;
