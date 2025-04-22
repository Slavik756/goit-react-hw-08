import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    name: "",
  },
  reducers: {
    contactFilter: (state, action) => {
      state.name = action.payload.toLowerCase();
    },
  },
});
export const { contactFilter } = filterSlice.actions;
export default filterSlice.reducer;