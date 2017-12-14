import React, { Component } from 'react';

import AddTodo from './AddTodo';
import Todos from './Todos';
import '../stylesheets/style.scss';

class App extends Component {
  render() {
    const { values, addTodo, removeTodo, completeTodo, clearTodos, clearCompletedTodos } = this.props;
    return (
      <div className="app">
        <h2 className="title">Todo</h2>
        <AddTodo addTodo={addTodo} />
        <Todos values={values}
               removeTodo={removeTodo}
               completeTodo={completeTodo}
               clearTodos={clearTodos} 
               clearCompletedTodos={clearCompletedTodos}
        />
      </div>
    )
  }
}

export default App;