import { ADD_TODO, REMOVE_TODO, CLEAR_TODOS } from '../actions';

const removeById = (state = [], id) => {
  const todos = state.filter(todo => todo.id !== id);
  return todos;
}

const todos = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO:
      return [ ...state, { text: action.text, id: action.id } ]
    case REMOVE_TODO:
      const todos = removeById(state, action.id);
      return todos;
    case CLEAR_TODOS:
      return {};
    default:
      return state;
  }
}

export default todos;