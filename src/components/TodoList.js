import React, { Component } from 'react';
import _ from 'lodash';
import TodoItem from './TodoItem';

class TodoList extends Component {
  clearTodos() {
    this.props.clearTodos();
  }

  render() {
    const { todos, removeTodo, completeTodo } = this.props;
    return (
      <div className="todo-list">
        <hr className="hr"/>
        {_.map(todos, (value, key) => (
            <TodoItem key={key}
                      value={value}
                      removeTodo={removeTodo}
                      completeTodo={completeTodo}
            />)
        )}
        <button className="button" type="button"
                onClick={() => this.clearTodos()}>Clear all
        </button>       
      </div>
    )
  }
}

export default TodoList;