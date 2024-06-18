import { useReducer } from "react";
import AddTodo from "../AddTodo";
import reducer from "../../reducer/todo/index.reducer";
import ACTIONS from "../../reducer/todo/index.actions";

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, {todos: []});
  return (
    <>
      <h2>Todo App w/useReducer hook</h2>
      <AddTodo dispatch={dispatch} type={ACTIONS.ADD} />
      <hr />
      <ul>
        {state.todos &&
          state.todos.map((todo) => {
            return (
              <li
                style={{
                  textDecoration: todo.isDone ? "line-through" : "none",
                }}
                key={todo.id}
              >
                <span onClick={()=>dispatch({type: ACTIONS.MARK, id: todo.id})} style={{cursor:'pointer'}}>{todo.id}, {todo.title}</span>
                <button onClick={()=>dispatch({type:ACTIONS.DELETE, id: todo.id})}>delete</button>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Todo;
