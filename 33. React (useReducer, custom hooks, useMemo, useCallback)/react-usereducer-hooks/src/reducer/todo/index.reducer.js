import ACTIONS from "./index.actions";

function reducer(state, action) {
  let foundTodo;
  switch (action.type) {
    case ACTIONS.ADD:
      return { todos: [...state.todos, action.payload] };
    case ACTIONS.DELETE:
      return { todos: [...state.todos.filter((x) => x.id != action.id)] };
    case ACTIONS.MARK:
      foundTodo = state.todos.find((x) => x.id == action.id);
      foundTodo.isDone = foundTodo.isDone ? false : true;
      return { todos: [...state.todos] };
    default:
      return { todos: state.todos };
  }
}

export default reducer;
