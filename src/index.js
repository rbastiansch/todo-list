import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/App';
import todos from './reducers';
import { addTodo, removeTodo, clearTodos } from "./actions/index";

const store = createStore(todos);

const render = () => ReactDOM.render(
  <App values={store.getState()}
       addTodo={prop => store.dispatch(addTodo(prop))}
       removeTodo={prop => store.dispatch(removeTodo(prop))}
       clearTodos={() => store.dispatch(clearTodos())}
  />, document.getElementById('root')
);

render();
store.subscribe(render);