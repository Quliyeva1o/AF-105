import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = "https://northwind.vercel.app/api/";

export const categoryAPI = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    //get all
    getCategories: builder.query({
      query: () => `categories`,
      // onQueryStarted: ()=>{

      //   }
    }),
    getCategory: builder.query({
      query: (id) => `categories/${id}`,
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `categories/${id}`,
        method: "DELETE",
      }),
    }),
    postCategory: builder.mutation({
      query: (newCategory) => ({
        url: "categories",
        body: newCategory,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    patchCategory: builder.mutation({
        query: (id, updatedCategory) => ({
          url: `categories/${id}`,
          body: updatedCategory,
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        }),
      }),
  }),
});

//RTK - hooks auto generate
export const {
  useGetCategoriesQuery,
  useGetCategoryQuery,
  useDeleteCategoryMutation,
  usePostCategoryMutation,
  usePatchCategoryMutation
} = categoryAPI;
