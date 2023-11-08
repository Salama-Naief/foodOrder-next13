import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../Store";
import { cartData } from "@/utils/dumyData";

// Define the initial state using that type
const initialState: CartTypes[] = cartData;

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartTypes>) => {
      state.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<CartTypes>) => {
      const items = cartData.filter(
        (i) => i.product.id !== action.payload.product.id
      );
      console.log(items);
      state = items;
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.user;

export default cartSlice.reducer;
