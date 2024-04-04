import RestCard, { RestCardWithPromotedLabel } from "./RestCard";
import mockData from "../../utils/mockData";
import {
  // DOM_IMG,
  MC_D_IMG,
  IMG_URL,
  VRU_IMG,
  ML_IMG,
  RES_URL,
} from "../../utils/constants";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";

const Body = () => {
  const [resData, setResData] = useState([]);
  const [filterResData, setFilterResData] = useState([]);

  const [searchText, setSearchText] = useState("");
  const { defaultUser, setUserName } = useContext(UserContext);

  //HOC
  const RestWithPromotedLabel = RestCardWithPromotedLabel(RestCard);

  // If no dependency array --> useEffect call every component render.
  // If dependency array is empty --> [] --> useEffect call at initial render(just once)
  // If dependency array is [searchText] then useEffect will be call every time       searchText is updated
  useEffect(() => {
    // console.log("useEffect is called!");
    fetchRestaurants();
  }, []);

  const isOnline = useOnlineStatus();

  const fetchRestaurants = async () => {
    const data = await fetch(RES_URL);

    const json = await data.json();
    //  console.log(
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );
    setResData(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilterResData(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  // };
  // let  mockData = [
  //     {
  //       resId: 1,
  //       resName: "Domino's",
  //       cuisine: "Pizzas, Pasta, Italian",
  //       ratings: "4.4",
  //       img: DOM_IMG,
  //       time: "30 MINS",
  //       price: "$300 FOR ONE",
  //     },
  //     {
  //       resId: 2,
  //       resName: "McDonald's",
  //       cuisine: "Pasta, FrenchFries, ",
  //       ratings: "3.2",
  //       img: MC_D_IMG,
  //       time: "45 MINS",
  //       price: "$400 FOR ONE",
  //     },
  //     {
  //       resId: 3,
  //       resName: "Mahalaxmi Sweets",
  //       cuisine: "Samosa, Dhokala, Kajuktli",
  //       ratings: "3.1",
  //       img: ML_IMG,
  //       time: "40 MINS",
  //       price: "$200 FOR ONE",
  //     },
  //     {
  //       resId: 4,
  //       resName: "Vrudheshwar Pure Veg",
  //       cuisine: "Burger, Samosa, Dhokala, Kajuktli",
  //       ratings: "4.1",
  //       img: VRU_IMG,
  //       time: "20 MINS",
  //       price: "$200 FOR ONE",
  //     },
  //   ];

  // if (resData.length === 0) {
  //   return <Shimmer />;
  // }
  if (isOnline === false) {
    return (
      <h1>
        Looks like you are offline. Please check your internet connection!!!
      </h1>
    );
  }

  return resData.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex justify-between">
        <div>
          <input
            data-testid={"searchInput"}
            // testid={"searchInput"}
            className="m-3 p-1 pr-5 border rounded-sm  border-black focus-within:shadow-lg hover:shadow-lg"
            type="text"
            placeholder="Search.."
            value={searchText}
            onChange={(e) => {
              // console.log(e);
              const searchTerm = e.target.value;
              setSearchText(searchTerm.toLowerCase());
            }}
          ></input>
          <button
            className="border-2 shadow-sm px-4 rounded-md  hover:bg-white"
            onClick={() => {
              const searchData = resData.filter((res) => {
                // console.log("SearchData", res?.info.name);
                const name = res?.info.name;
                return name.toLowerCase().includes(searchText);
              });
              setFilterResData(searchData);
              setSearchText("");
            }}
          >
            Search
          </button>
        </div>
        <div>
          <label>User Name-</label>
          <input
            data-testid={"activeUser"}
            className="m-3 p-1 pr-5 border border-black rounded-sm focus-within:shadow-lg hover:shadow-lg"
            type="text"
            placeholder=""
            value={defaultUser}
            onChange={(e) => {
              // console.log(e);
              const userName = e.target.value;
              setUserName(userName);
            }}
          ></input>
        </div>
        <div className="m-3 mr-8">
          <button
            onClick={() => {
              // console.log(resData);
              // const sortByRating = resData.sort((a, b) => {
              //   // const { name } = resData?.resData?.info;
              //   // console.log(a);
              //   if (a?.info?.name < b?.info?.name) {
              //     return -1;
              //   } else if (a?.info?.name > b?.info?.name) {
              //     return 1;
              //   } else {
              //     return 0;
              //   }
              // });
              // setResData(sortByRating);
              // console.log(sortByRating);

              const filteredMockData = resData.filter((res) => {
                // console.log(res?.info?.avgRating);
                const { avgRating } = res?.info;
                // console.log(Math.floor(avgRating));
                return avgRating > 4;
              });
              // console.log(filteredMockData);
              setFilterResData(filteredMockData);
            }}
            className=" ml-10 border-2 shadow-sm px-4 rounded-md  hover:bg-white"
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {/* {console.log(mockData)} */}
        {filterResData.map((res) => {
          // console.log("MAP", res.info.id);
          return (
            <Link to={"/restaurant/" + res.info.id} key={res.info.id}>
              {/* //check if the res is promoted if yes - Create a HOC to enhance RestCard component to display the promoted label  */}
              {/* {console.log(res.info.totalRatingsString >= "10K+")} */}
              {res?.info?.totalRatingsString > "10K+" ? (
                <RestWithPromotedLabel resData={res?.info} />
              ) : (
                <RestCard resData={res?.info} />
              )}
            </Link>
          );
        })}
        {/* <RestCard /> */}
        {/* <RestCard resName="Domino's" cuisine="Pizzas, Pasta, Italian" />
          <RestCard resName="McDonald's" cuisine="Pasta, FrenchFries, " />
          <RestCard
            resName="Mahalaxmi Sweets"
            cuisine="Samosa, Dhokala, Kajuktli"
          />
          <RestCard resName="Domino's" cuisine="Pizzas, Pasta, Italian" />
          <RestCard resName="McDonald's" cuisine="Pasta, FrenchFries, " />
          <RestCard
            resName="Mahalaxmi Sweets"
            cuisine="Samosa, Dhokala, Kajuktli"
          /> */}
      </div>
    </div>
  );
};

export default Body;
