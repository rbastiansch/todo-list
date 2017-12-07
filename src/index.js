import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import todos from './reducers';
import { addTodo, removeTodo, clearTodos } from "./actions/index";

const store = createStore(todos);

const renderApp = () => {
  ReactDOM.render(
    <AppContainer>
      <App values={store.getState()}
           addTodo={prop => store.dispatch(addTodo(prop))}
           removeTodo={prop => store.dispatch(removeTodo(prop))}
           clearTodos={() => store.dispatch(clearTodos())}
      />
    </AppContainer> , document.getElementById('root')
  );
};

renderApp();
store.subscribe(renderApp);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    const renderApp = () => {
      ReactDOM.render(
        <AppContainer>
          <NextApp values={store.getState()}
               addTodo={prop => store.dispatch(addTodo(prop))}
               removeTodo={prop => store.dispatch(removeTodo(prop))}
               clearTodos={() => store.dispatch(clearTodos())}
          />
        </AppContainer> , document.getElementById('root')
      );
    };
    renderApp();
    store.subscribe(renderApp);
  })
}
