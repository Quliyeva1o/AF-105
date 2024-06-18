import { useEffect, useState } from "react";
import "./App.css";
import Detail from "./Detail";
import AddCategory from "./AddCategory";
import { deleteOne, getAll, getOne, patchOne, post, putOne } from "./API";

function App() {
  // useEffect - hooks
  // const [counter, setCounter] = useState(0);
  // const [categories, setCategories] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const[category, setCategory] = useState(null);
  // //component lifecycle
  // function getCategories() {
  //   setLoading(true);
  //   fetch("https://northwind.vercel.app/api/categories")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCategories(data);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }
  // useEffect(() => {
  //   getCategories();
  // }, []);
  const[products, setProducts] = useState([]);
  return (
    <>
    <button onClick={()=>{
       putOne('products',2,{name: 'Puma updated'}).then((res)=>{
        console.log(res);
      });
    }}>test request get all</button>
      {/* <AddCategory setCategories={setCategories}/>
      <Detail category={category}/>
      <hr />
      <button
        onClick={() => {
          getCategories();
        }}
      >
        get categories
      </button>
      {loading && <h2>loading...</h2>}
      <ul>
        {categories &&
          categories.map((category) => {
            return (
              <li key={category.id}>
                <span>{category.name}</span>
                <button onClick={()=>{
                  setCategory(category);
                }}>detail</button>
                <button
                  onClick={() => {
                    if (window.confirm("are you sure to delete?")) {
                      fetch(
                        `https://northwind.vercel.app/api/categories/${category.id}`,
                        {
                          method: "DELETE",
                        }
                      );
                      setCategories((categories) => {
                        return categories.filter((x) => x.id != category.id);
                      });
                    }
                  }}
                >
                  delete
                </button>
              </li>
            );
          })}
      </ul> */}
    </>
  );
}

export default App;
