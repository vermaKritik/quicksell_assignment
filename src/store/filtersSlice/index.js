import { createSlice } from "@reduxjs/toolkit";
import { setGrouping, setOrdering } from "./reducers";

const initialState = {
  grouping: null,
  ordering: null,
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setGrouping,
    setOrdering,
  },
});

export const filtersActions = filtersSlice.actions;

export default filtersSlice;
