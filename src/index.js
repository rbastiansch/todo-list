import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/App';
import todos from './reducers';
import { addTodo } from "./actions/index";

const store = createStore(todos);

const render = () => ReactDOM.render(
  <App value={store.getState()}
       addTodo={prop => store.dispatch(addTodo(prop))}
  />, document.getElementById('root')
);

render();
store.subscribe(render);