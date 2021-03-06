import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import todoApp from './reducers/index';
import { addTodo, removeTodo, completeTodo, clearTodos, clearCompletedTodos } from "./actions/index";

const store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const renderApp = () => {
  ReactDOM.render(
    <AppContainer>
      <App values={store.getState()}
           addTodo={prop => store.dispatch(addTodo(prop))}
           removeTodo={prop => store.dispatch(removeTodo(prop))}
           completeTodo={prop => store.dispatch(completeTodo(prop))}
           clearTodos={() => store.dispatch(clearTodos())}
           clearCompletedTodos={() => store.dispatch(clearCompletedTodos())}

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
                   completeTodo={prop => store.dispatch(completeTodo(prop))}
                   clearTodos={() => store.dispatch(clearTodos())}
                   clearCompletedTodos={() => store.dispatch(clearCompletedTodos())}
          />
        </AppContainer> , document.getElementById('root')
      );
    };
    renderApp();
    store.subscribe(renderApp);
  })
}
