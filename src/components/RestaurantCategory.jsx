import { useState } from "react";
import ItemLists from "./ItemLists";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // console.log("RestaurantCategory", data);
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-white shadow-2xl p-3">
        <div
          className=" flex justify-between hover:cursor-pointer"
          onClick={() => {
            setShowIndex();
            // console.log("index form Restaurant Cat", data);
          }}
        >
          <span className="font-bold text-md">
            {data?.title} ({data?.itemCards.length})
          </span>
          <span>{!showItems ? "⬇️" : "⬆️"}</span>
        </div>
        {showItems && (
          <ItemLists items={data?.itemCards} from="RestaurantCategory" />
        )}
      </div>
      {/* //Accordian Header*/}
      {/* //Acording Body */}
    </div>
  );
};

export default RestaurantCategory;
