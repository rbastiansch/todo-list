import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  clearTodos() {
    this.props.clearTodos();
  }

  render() {
    const { values, removeTodo } = this.props;
    const checkObject = !(Object.keys(values).length === 0 && values.constructor === Object);
    return (
      <div className="todo-list">
        {
          checkObject ? 
            values.map((value, key) => {
              return (
                <TodoItem key={key}
                          value={value}
                          removeTodo={removeTodo}
                />
              )
            })
          : null
        }
        <button className="button" type="button"
                onClick={() => this.clearTodos()}>Clear all
        </button>       
      </div>
    )
  }
}

export default TodoList;