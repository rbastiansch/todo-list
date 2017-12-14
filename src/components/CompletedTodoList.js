import React, { Component } from 'react';
import _ from 'lodash';
import TodoItem from './TodoItem';

class CompletedTodoList extends Component {
  clearCompletedTodos() {
    this.props.clearCompletedTodos();
  }

  render() {
    const { completedTodos, removeTodo } = this.props;
    const isCompleted = true;
    return (
      <div className="todo-list">
        {_.map(completedTodos, (value, key) => (
            <TodoItem key={key}
                      value={value}
                      removeTodo={removeTodo}
                      isCompleted={isCompleted}
            />
          )
        )}
        <button className="button" type="button"
                onClick={() => this.clearCompletedTodos()}>Clear all
        </button> 
      </div>
    )
  }
}

export default CompletedTodoList;