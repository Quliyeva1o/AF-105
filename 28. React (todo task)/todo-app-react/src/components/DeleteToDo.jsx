import PropTypes from "prop-types"


const DeleteToDo = ({ id, setTodos }) => {
  return (
    <button onClick={(e) => {
      if (window.confirm('are you sure to delete?')) {
        setTodos((currentTodos) => {
          return currentTodos.filter((x) => x.id != id);
        })
      }
    }}>delete</button>
  )
}

DeleteToDo.propTypes = {
  id: PropTypes.string,
  setTodos: PropTypes.func
}

export default DeleteToDo