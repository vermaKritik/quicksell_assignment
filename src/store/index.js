import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "./restaurantSlice";

const store = configureStore({
  reducer: {
    filtersSlice: filtersSlice.reducer,
  },
});
export default store;
