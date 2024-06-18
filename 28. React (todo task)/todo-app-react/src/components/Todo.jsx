import { useState, useEffect } from "react"
import AddToDo from "./AddToDo"
import SearchToDo from "./SearchToDo"
import SortByName from "./SortByName"
import TodoItem from "./TodoItem"
import TodoList from "./TodoList"
import axios from "axios"


const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [query, setQuery] = useState("");
  const[categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://northwind.vercel.app/api/categories')
      .then((res) => {
        setCategories(res.data);
      })
  }, [])


  const filteredTodos = todos.filter((todo) => {
    return todo.title.toLowerCase().trim().includes(query.toLowerCase().trim());
  })

  return (
    <>
      <h2>Todo React App</h2>
      <AddToDo setTodos={setTodos} todos={todos} />
      <hr />
      <SearchToDo setQuery={setQuery} />
      <SortByName setTodos={setTodos} filteredTodos={filteredTodos} />
      <TodoList>
        {filteredTodos && filteredTodos.map((todo, idx) => {
          return <TodoItem key={idx} todo={todo} todos={todos} setTodos={setTodos} />
        })}
      </TodoList>
      <hr />
     <ul>
     {categories && categories.map((cat)=>{
        return <li key={cat.id}>{cat.name}</li>
      })}
     </ul>
    </>
  )
}

export default Todo