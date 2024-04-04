import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../utils/store/cartSlice";
import ItemLists from "./ItemLists";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    // console.log("handleClearCart pressed");
    dispatch(clearCart());
  };

  //selector
  const items = useSelector((store) => store?.cart?.items);
  // console.log("cartItems", items);
  return (
    <div className="text-center m-2 p-2">
      <h1 className="text-xl font-bold">Cart</h1>
      {items.length > 0 && (
        <button
          className="bg-black text-white text-xs p-2 m-2 border border-black rounded"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      )}
      <div className="w-6/12 text-center m-auto border ">
        {items.length > 0 ? (
          <>
            <ItemLists items={items} from="Cart" />
          </>
        ) : (
          <>
            <h1>Cart is empty ..!</h1>
            <div className="border bg-slate-50 font-bold p-2">
              <Link to="/">Go to Home</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
