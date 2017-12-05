export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const CLEAR_TODOS = 'CLEAR_TODOS';

let nextTodoId = 0;
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

export const clearTodos = () => {
  const action = {
    type: CLEAR_TODOS
  }
  return action;
}