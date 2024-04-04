import { useContext } from "react";
import { IMG_URL } from "../../utils/constants";
import UserContext from "../../utils/UserContext";

const RestCard = (props) => {
  // console.log("RestCard", resData);
  const { resData } = props;
  const { defaultUser } = useContext(UserContext);
  const {
    name,
    // areaName,
    id,
    cuisines,
    avgRatingString,
    cloudinaryImageId,
    costForTwo,
    sla,
  } = resData;
  // console.log("RestCard", name);
  // console.log("IMG", IMG_URL + cloudinaryImageId);

  return (
    <div
      className="w-56 m-4 p-2 border-2 rounded-md shadow-2xl hover:bg-white hover:shadow-inner"
      data-testid="resCard"
    >
      <img className=" rounded-md" src={IMG_URL + cloudinaryImageId} />
      <h4>{name}</h4>
      <h5>{cuisines.join(", ")}</h5>
      {/* <div> */}
      <h5>{avgRatingString}</h5>
      <h5>{sla.deliveryTime}</h5>
      <h5>{costForTwo}</h5>
      <h6>User: {defaultUser}</h6>
      {/* </div> */}
    </div>
  );
};

//HOC --> Higher Order Component --> Is a function takes a component as input and return the enhanced Component.

export const RestCardWithPromotedLabel = (RestCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-2 m-2 rounded-lg">
          Promoted
        </label>
        <RestCard {...props} />
      </div>
    );
  };
};
export default RestCard;
