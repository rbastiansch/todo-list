import { COMPLETE_TODO, REMOVE_TODO, CLEAR_COMPLETED_TODOS } from '../actions';

const completeTodo = action => state => {
  const completedTodos = [
    ...state, {
      text: action.text,
      id: action.id
    }
  ];
  return completedTodos;
}

const removeById = (state, id) => {
  const completedTodos = state.filter(todo => todo.id !== id);
  return completedTodos;
}

const completedTodos = (state = [], action) => {
  switch(action.type) {
    case COMPLETE_TODO:
      return completeTodo(action)(state);
    case REMOVE_TODO:
      const completedTodos = removeById(state, action.id);
      return completedTodos;
    case CLEAR_COMPLETED_TODOS:
      return {};
    default:
      return state;
  }
}

export default completedTodos;