import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./features/account/accountSlice";
import citiesSlice from "./features/cities/citiesSlice";

const store = configureStore({
  reducer: {
    account: accountSlice,
    cities: citiesSlice,
  },
});

export default store;
