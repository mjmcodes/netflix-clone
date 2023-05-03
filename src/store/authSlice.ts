import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

export interface CounterState {
   userData: any | undefined;
   isAuth: boolean | null;
}

const initialState: CounterState = {
   userData: undefined,
   isAuth: null,
};

export const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      setUser: (state, action: PayloadAction<User | undefined>) => {
         state.isAuth = !!action.payload ?? false;
         state.userData = action.payload;
      },
      logout: (state) => {
         state.isAuth = false;
         state.userData = undefined;
      },
   },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
