import React, { Component } from 'react';
import _ from 'lodash';
import TodoItem from './TodoItem';

class TodoList extends Component {
  clearTodos() {
    this.props.clearTodos();
  }

  render() {
    const { values, removeTodo, completeTodo } = this.props;
    const todos = values.todos || [];
    const completedTodos = values.completedTodos || [];
    return (
      <div className="todo-list">
        {_.map(todos, (value, key) => (
            <TodoItem key={key}
                      value={value}
                      removeTodo={removeTodo}
                      completeTodo={completeTodo}
                      done={completedTodos.indexOf(value.id) !== -1}
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