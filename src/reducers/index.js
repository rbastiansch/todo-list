import { combineReducers } from 'redux';

import todos from './todos';
import completedTodos from './completed_todos';

const todoApp = combineReducers({
  todos,
  completedTodos
});

export default todoApp;