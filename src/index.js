import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import todos from './reducers';
import { addTodo, removeTodo, clearTodos } from "./actions/index";

const store = createStore(todos);

const render = () => ReactDOM.render(
  <AppContainer>
    <App values={store.getState()}
         addTodo={prop => store.dispatch(addTodo(prop))}
         removeTodo={prop => store.dispatch(removeTodo(prop))}
         clearTodos={() => store.dispatch(clearTodos())}
    />
  </AppContainer>, document.getElementById('root')
);

render();
store.subscribe(render);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const App = require('./components/App').default;
    ReactDOM.render(
      <AppContainer>
        <App values={store.getState()}
             addTodo={prop => store.dispatch(addTodo(prop))}
             removeTodo={prop => store.dispatch(removeTodo(prop))}
             clearTodos={() => store.dispatch(clearTodos())}
        />
      </AppContainer>, document.getElementById('root')
    );
  })
}