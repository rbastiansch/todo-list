import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/App';
import todos from './reducers';

const store = createStore(todos);

const render = () => ReactDOM.render(
  <App value={store.getState()}
       addTodo={() => store.dispatch({ type: 'ADD_TODO'})}
  />, document.getElementById('root')
);

render();
store.subscribe(render);