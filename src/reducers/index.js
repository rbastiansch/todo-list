import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO, CLEAR_TODOS } from '../actions';

const removeById = (state = [], id) => {
  const todos = state.filter(todo => todo.id !== id);
  return todos;
}

const completeTodo = (state, id) => {
  const todos = state.filter(todo => todo.id === id ? todo.completed = true : todo);
  return todos;
}

const todos = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: action.id, completed: false }]
    case REMOVE_TODO:
      const todos = removeById(state, action.id);
      return todos;
    case COMPLETE_TODO:
      const completedTodos = completeTodo(state, action.id);
      return completedTodos;
    case CLEAR_TODOS:
      return {}
    default:
      return { ...state }
  }
}

export default todos;