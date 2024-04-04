import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resData, setResData] = useState(null);
  // console.log("resId", params.id);
  useEffect(() => {
    fetchResMenu(resId);
  }, []);

  const fetchResMenu = async (resId) => {
    const menu = await fetch(MENU_API + resId);
    const res = await menu.json();
    setResData(res);
  };
  return resData;
};

export default useRestaurantMenu;
