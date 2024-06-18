import ACTIONS from "./counter.actions";

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.increment:
      return { counter: state.counter + 1 };
    case ACTIONS.decrement:
      if (state.counter >= 1) {
        return { counter: state.counter - 1 };
      }
      else{
        return { counter: state.counter }
      }
    case ACTIONS.reset:
      return { counter: 0 };
    default:
      return { counter: state.counter };
  }
}

export default reducer;
