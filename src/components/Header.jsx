import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";
// import cartLogo from "../../utils/images/cart.png";
// import foodLogo from "../../utils/images/food.png";

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  // console.log("Header Rerender");

  const { defaultUser } = useContext(UserContext);

  //selector
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });
  // console.log("cartItems", cartItems);
  //const cartItems = useSelector((store) => store.cart.items);

  // If no dependency array --> useEffect call every component render.
  // If dependency array is empty --> [] --> useEffect call at initial render(just once)
  // If dependency array is [buttonName] then useEffect will be call every time       buttonName is updated
  useEffect(() => {
    // console.log("useEffect is called!");
  }, [buttonName]);
  const isOnline = useOnlineStatus();
  return (
    //header
    <div className="flex justify-between align-middle bg-slate-50 border-2 shadow-md">
      <div>
        <img
          className="w-16 h-16 m-4"
          src={LOGO_URL}

          // src={foodLogo ? foodLogo : LOGO_URL}
        ></img>
      </div>
      <div className="">
        <ul className="flex p-4 m-4">
          <li className="mr-3 text-center ">
            <div className="flex text-center">
              <div
                className="text-xs m-1"
                // className={
                //   isOnline
                //     ? "bg-green-500 w-3 h-3 rounded-xl"
                //     : "bg-red-600 w-3 h-3 rounded-xl"
                // }
                // style={{ backgroundColor: isOnline ? "lightgreen" : "red" }}
              >
                {isOnline ? "🟢" : "🔴"}
              </div>
              <div className="">{defaultUser}</div>
            </div>
          </li>
          {/* <li className="mr-3">
            <Link>{defaultUser}</Link>
          </li> */}
          <li className="mr-3">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="mr-3">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="mr-3">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="mr-3">
            <Link to={"/grocery"}>Grocery</Link>
          </li>

          <button
            className="border-2 shadow-sm px-4 rounded-md  hover:bg-white mr-3"
            onClick={() => {
              buttonName === "Login"
                ? setButtonName("Logout")
                : setButtonName("Login");
              // console.log(buttonName);
            }}
          >
            {buttonName}
          </button>
          <li className=" w-8 h-8  mr-3">
            {/* mr-3 font-bold text-lg */}
            {/* <Link to={"/cart"}>
              Cart:{cartItems.length}
              <div className="absolute font-bold text-white mt-[5] text-sm ml-[15]">
                {cartItems.length}
              </div>
              <div>
                <img src={cartLogo} className="w-8 h-8" />
              </div>
            </Link> */}
            <Link to={"/cart"}>Cart - {cartItems.length}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
