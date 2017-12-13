import { COMPLETE_TODO } from '../actions';

const completeTodo = action => state => {
  const completedTodos = [
    ...state, {
      text: action.text,
      id: action.id
    }
  ];
  return completedTodos;
}

const completedTodos = (state = [], action) => {
  switch(action.type) {
    case COMPLETE_TODO:
      return completeTodo(action)(state)
    default:
      return state;
  }
}

export default completedTodos;