export const ADD_TODO = 'ADD_TODO';

export const addTodo = (text) => {
  const action = {
    type: ADD_TODO,
    text
  }
  console.log('add todo action', action);
  return action;
}