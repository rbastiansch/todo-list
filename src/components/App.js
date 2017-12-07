import React, { Component } from 'react';

import AddTodo from './AddTodo';

class App extends Component {
  render() {
    const { values, addTodo, removeTodo, clearTodos } = this.props;
    return (
      <div>
        <h2>Todo</h2>
        <AddTodo values={values}
                 addTodo={addTodo}
                 removeTodo={removeTodo}
                 clearTodos={clearTodos} 
        />
      </div>
    )
  }
}

export default App;