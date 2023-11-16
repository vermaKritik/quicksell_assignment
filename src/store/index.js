import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "./filtersSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    filtersSlice: filtersSlice.reducer,
    userSlice: userSlice.reducer,
  },
});
export default store;
