import { createSlice } from "@reduxjs/toolkit";
import { setUsers } from "./reducers.js";

const initialState = {
  users: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers,
  },
});

export const usersActions = usersSlice.actions;

export default usersSlice;
