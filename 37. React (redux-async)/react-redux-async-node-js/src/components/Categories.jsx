import { useSelector, useDispatch } from "react-redux";
import { fetchCategories, fetchCategoryById } from "../services/categorySlice";
import {
  useGetCategoriesQuery,
  useGetCategoryQuery,
  useDeleteCategoryMutation,
  usePostCategoryMutation,
  usePatchCategoryMutation
} from "../services/categoryQuerySlice";
import { useState } from "react";

const Categories = () => {
  const {
    data: categories,
    error,
    isLoading,
    refetch,
  } = useGetCategoriesQuery();
  const { data: category } = useGetCategoryQuery(2);
  const [deleteOne, { isError, isSuccess }] = useDeleteCategoryMutation();
  const [postCategory] = usePostCategoryMutation();
  const [newCategory, setNewCategory] = useState({ name: "", description: "" });
  return (
    <>
      <form
        onSubmit={async(e) => {
          e.preventDefault();
          console.log("new cat: ", newCategory);
          await postCategory(newCategory);
          refetch();
          setNewCategory({name:'',description:''});
        }}
      >
        <input
          value={newCategory.name}
          onChange={(e) =>
            setNewCategory({ ...newCategory, name: e.target.value })
          }
          type="text"
          placeholder="category name"
        />
        <input
          value={newCategory.description}
          onChange={(e) =>
            setNewCategory({ ...newCategory, description: e.target.value })
          }
          type="text"
          placeholder="category desc"
        />
        <button type="submit">add</button>
      </form>
      <hr />
      <h2>Categories</h2>
      <ul>
        {categories &&
          categories.map((cat) => {
            return (
              <li key={cat.id}>
                <span>{cat.name}</span>
                <button
                  onClick={async () => {
                    if (window.confirm("delete?")) {
                      await deleteOne(cat.id);
                      refetch();
                    }
                  }}
                >
                  delete
                </button>
              </li>
            );
          })}
      </ul>
      <hr />
      <h3>detail: {category?.name}</h3>
    </>
  );
};

export default Categories;
