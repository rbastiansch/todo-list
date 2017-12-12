import { COMPLETE_TODO } from '../actions';

const toogle = id => state => {
  const ix = state.indexOf(id);
  if (ix !== -1) {
    state.splice(ix, 1)
  } else {
    state.push(id);
  }
  return state;
}

const completedTodos = (state = [], action) => {
  switch(action.type) {
    case COMPLETE_TODO:
      return toogle(action.id)(state)
    default:
      return state;
  }
}

export default completedTodos;