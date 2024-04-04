import { useDispatch, useSelector } from "react-redux";
import { IMG_URL } from "../../utils/constants";
import { addItem, removeItem } from "../../utils/store/cartSlice";
import { useEffect, useState } from "react";

const ItemLists = ({ items, from }) => {
  // console.log("ItemLists", items);
  const [fromComponent, setFromComponent] = useState(null);
  // console.log("Navigating From", from);

  useEffect(() => {
    setFromComponent(from);
  }, []);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    // console.log("handleAdd Item", item);
    dispatch(addItem(item));
    alert("item added to cart");
  };

  const handleRemove = (item) => {
    // console.log("handleRemove", item?.card?.info?.id);
    dispatch(removeItem(item?.card?.info?.id));
  };

  return (
    <div className="text-left ">
      {items.map((item) => {
        // console.log("Item", item?.card?.info?.imageId);

        return (
          <div
            data-testid={"itemList"}
            className="p-2 m-2 border-gray-100 border-b-2 flex justify-between"
            key={item?.card?.info?.id}
          >
            <div className="w-9/12 mr-2">
              <div className="py-2">
                <span>{item?.card?.info?.name}</span>
                <span>
                  {" "}
                  - ₹{" "}
                  {item?.card?.info?.price
                    ? item?.card?.info?.price / 100
                    : item?.card?.info?.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs mb-4 text-wrap">
                {item?.card?.info?.description}
              </p>
            </div>
            <div className="w-3/12">
              {fromComponent === "RestaurantCategory" ? (
                <div className="absolute">
                  <button
                    className="p-2 ml-9 mt-14 bg-white rounded shadow-xl text-xs "
                    onClick={() => handleAdd(item)}
                  >
                    Add +
                  </button>
                </div>
              ) : (
                <div className="absolute">
                  <button
                    className="p-2 ml-7 mt-14 bg-white rounded shadow-xl text-xs "
                    onClick={() => handleRemove(item)}
                  >
                    Remove
                  </button>
                </div>
              )}
              <img
                className="w-full h-20 rounded-lg"
                src={IMG_URL + item?.card?.info?.imageId}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemLists;
