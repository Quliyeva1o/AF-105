import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// First, create the thunk
export const fetchCategories = createAsyncThunk("categories", async () => {
  let response;
  try {
    response = await axios.get("https://northwind.vercel.app/api/categories");
  } catch (error) {
    return error;
  }
  return response.data;
});
export const fetchCategoryById = createAsyncThunk(
  "categories/id",
  async (id) => {
    let response;
    try {
      response = await axios.get(
        `https://northwind.vercel.app/api/categories/${id}`
      );
    } catch (error) {
      return error;
    }
    return response.data;
  }
);

const categoriesInitialState = {
  data: [],
  detail: null,
  loading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState: categoriesInitialState,
  reducers: {},
  extraReducers: (builder) => {
    //categories get all
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
    //get one category
    builder
      .addCase(fetchCategoryById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategoryById.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchCategoryById.fulfilled, (state, action) => {
        state.detail = action.payload;
        state.loading = false;
      });
  },
});

export default categoriesSlice.reducer;
