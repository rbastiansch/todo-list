import React, { Component } from 'react';

import AddTodo from './AddTodo';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Todos</h2>
        <AddTodo value={this.props.value} addTodo={this.props.addTodo} />
      </div>
    )
  }
}

export default App;