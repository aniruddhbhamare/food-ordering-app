import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Vanilla (older) Redux --> DON"T MUTATE STATE
      // const newState = [...state];
      // newState.items.push(action.payload);
      // return newState;

      // Redux Toolkit
      // We HAVE to mutate the state

      // Redux Toolkit uses immer BTS Behind the seance
      // Mutating the state here
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex((i) => {
        return i?.card?.info?.id === action.payload;
        // console.log("handle remove", item?.card?.info?.id);
      });
      if (index > -1) {
        state.items.splice(index, 1);
      }
      console.log(index);
      // state.items.pop();
    },
    clearCart: (state) => {
      // state.items = [];

      // RTK - either Mutate the existing state or return a new State

      console.log(current(state));

      state.items.length = 0;
      // Or

      // return {items:[]};  //This new[] will be replaced inside originalState = {items:[]}
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
