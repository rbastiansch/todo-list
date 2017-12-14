import React, { Component } from 'react';
import TodoList from './TodoList';
import CompletedTodoList from './CompletedTodoList';

class Todos extends Component {
  render() {
    const { values, removeTodo, completeTodo, clearTodos, clearCompletedTodos } = this.props;
    const { todos, completedTodos } = values;

    return (
      <div>
        {
          todos.length > 0 ? 
            <TodoList todos={todos}
                      removeTodo={removeTodo}
                      completeTodo={completeTodo}
                      clearTodos={clearTodos}
            />
          : null
        }
        {
          completedTodos.length > 0 ?
            <CompletedTodoList completedTodos={completedTodos}
                               removeTodo={removeTodo}
                               clearCompletedTodos={clearCompletedTodos}
            />
          : null
        }
      </div>
    )
  }
}

export default Todos;