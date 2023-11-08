import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../Store";

// Define a type for the slice state
interface UserState {
  user: {
    name: string;
    email: string;
    role: string;
    brithDate?: string;
    address?: string;
    phoneNumber?: string;
  } | null;
}

// Define the initial state using that type
const initialState: UserState = {
  user: {
    name: "salama",
    email: "salama@salama.com",
    role: "owner",
    address: "15 bulding strees",
    phoneNumber: "0102356478",
    brithDate: "12/11/2012",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      state = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.user;

export default userSlice.reducer;
