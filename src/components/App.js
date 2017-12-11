import React, { Component } from 'react';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import '../stylesheets/style.scss';

class App extends Component {
  render() {
    const { values, addTodo, removeTodo, completeTodo, clearTodos } = this.props;
    return (
      <div className="app">
        <h2 className="title">Todo</h2>
        <AddTodo addTodo={addTodo} />
        <TodoList values={values}
                  removeTodo={removeTodo}
                  completeTodo={completeTodo}
                  clearTodos={clearTodos}
        />
      </div>
    )
  }
}

export default App;