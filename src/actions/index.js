export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const CLEAR_TODOS = 'CLEAR_TODOS';
export const CLEAR_COMPLETED_TODOS = 'CLEAR_COMPLETED_TODOS';
export const COMPLETE_TODO = 'COMPLETE_TODO';

let nextTodoId = 0;
let nextCompletedTodoId = 0;
export const addTodo = (text) => {
  const action = {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  }
  return action;
}

export const removeTodo = (id) => {
  const action = {
    type: REMOVE_TODO,
    id
  }
  return action;
}

export const completeTodo = (text) => {
  const action = {
    type: COMPLETE_TODO,
    id: nextCompletedTodoId++,
    text
  }
  return action;
}

export const clearTodos = () => {
  const action = {
    type: CLEAR_TODOS
  }
  return action;
}

export const clearCompletedTodos = () => {
  const action = {
    type: CLEAR_COMPLETED_TODOS
  }
  return action;
}