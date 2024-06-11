import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getdivinglist } from "../services/ApiService.js"


export const fetchListing = createAsyncThunk(
  "filters/fetchListing",
  async () => {
  
    const data = await getdivinglist();
        return data.data;
      }
    );
const list = createSlice({
  name: "list",
  initialState: {
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchListing.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchListing.fulfilled, (state, action) => {
        state.divelist=action.payload;
        state.loading = false;
      })
      .addCase(fetchListing.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { 
 } = list.actions;

export default list.reducer;