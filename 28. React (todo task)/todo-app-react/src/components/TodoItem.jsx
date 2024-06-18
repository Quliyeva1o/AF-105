import DeleteToDo from "./DeleteToDo"
import MarkToDo from "./MarkToDo"
import PropTypes from "prop-types"
import moment from "moment"

const TodoItem = ({todo, todos,setTodos}) => {
  return (
    <li>
      <span style={{textDecoration: todo.isDone ? 'line-through' : 'none'}}>{todo.title}, {moment(todo.createdAt).format("MMM Do YY")}</span>
      <MarkToDo id={todo.id} setTodos={setTodos}/>
      <DeleteToDo id={todo.id} setTodos={setTodos}/>
    </li>
  )
}
TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    isDone: PropTypes.bool,
    createdAt: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.instanceOf(Date),
  ])
  })
}
export default TodoItem