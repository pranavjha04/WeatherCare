import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  userName: "",
  email: "",
  password: "",
  isAuthenticated: false,
  img: `https://i.pravatar.cc/40?u=2323292`,
};

const accountSlice = createSlice({
  name: "account",
  initialState: initalState,
  reducers: {
    login: {
      prepare(email, passowrd) {
        return {
          payload: {
            email,
            passowrd,
          },
        };
      },
      reducer(state, action) {
        state.userName = "Pranav";
        state.email = action.payload.email;
        state.password = action.payload.passowrd;
        state.isAuthenticated = true;
      },
    },
    logout(state) {
      state.email = "";
      state.userName = null;
      state.password = "";
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = accountSlice.actions;
export default accountSlice.reducer;
