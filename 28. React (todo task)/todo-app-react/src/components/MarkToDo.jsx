import PropTypes from "prop-types"

const MarkToDo = ({id, setTodos}) => {
  return (
    <button onClick={()=>{
      setTodos((currentTodos)=>{
        const updatedTodos = [...currentTodos.map((todo)=>{
          if (todo.id==id) {
            todo = {...todo, isDone: !todo.isDone};
          }
          return todo;
        })];
        return updatedTodos;
      })
    }}>mark</button>
  )
}

MarkToDo.propTypes = {
  id: PropTypes.string,
  setTodos: PropTypes.func
}

export default MarkToDo