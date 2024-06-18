import { useState } from "react";
import TodoItem from "../classes/TodoItem.js";
import PropTypes from "prop-types";

const AddToDo = ({ todos, setTodos }) => {
  const [todoTitle, setTodoTitle] = useState('');
  const [valid, setValid] = useState(true);
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      if (todoTitle.trim() == '') {
        setValid(false);
      }
      else {
        const newTodo = new TodoItem(todoTitle);
        setTodos([...todos, newTodo]);
        setTodoTitle('');
        e.target.add.value = '';
        setValid(true);
      }
    }}>
      <input name="add" onKeyUp={(e) => {
        setTodoTitle(e.target.value);
      }} placeholder="enter new todo" type="text" />
      <p style={{ display: valid ? 'none' : 'block', color: 'red' }}>input is required</p>
      <button type="submit">add</button>
    </form>
  )
}

AddToDo.propTypes = {
  todos: PropTypes.array,
  setTodos: PropTypes.func
}

export default AddToDo