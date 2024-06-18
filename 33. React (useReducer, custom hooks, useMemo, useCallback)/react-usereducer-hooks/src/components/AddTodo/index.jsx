import { useState } from "react";
import TodoItem from "../../classes/todo.class";

const AddTodo = ({ dispatch, type }) => {
  const [title, setTitle] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: type, payload: new TodoItem(title) });
        setTitle("");
      }}
    >
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="todo title"
      />
      <button type="submit">add</button>
    </form>
  );
};

export default AddTodo;
