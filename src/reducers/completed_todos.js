import { COMPLETE_TODO } from '../actions';

const completeTodo = (state = [], id) => {
  console.log(state);
  // const completedTodos = state.filter(todo => todo.id === id ? todo.completed = true : todo);
  return {...state};
}

const completedTodos = (state = [], action) => {
  switch(action.type) {
    case COMPLETE_TODO:
      const completedTodos = completeTodo(state, action.id);
      return completedTodos;
    default:
      return {...state};
  }
}

export default completedTodos;