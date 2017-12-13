import React, { Component } from 'react';

class TodoItem extends Component {
  removeTodo(id) {
    this.props.removeTodo(id);
  }

  completeTodo(value) {
    const { text, id } = value;
    this.props.removeTodo(id)
    this.props.completeTodo(text);
  }

  render() {
    const { value } = this.props;
    return (
      <div className="todo-item">
        <p>{value.text}</p>
        <button className="button" type="button"
                onClick={() => this.completeTodo(value)} >Complete Todo
        </button>
        <button className="button" type="button"
                onClick={() => this.removeTodo(value.id)} >Remove
        </button>
      </div>
    )
  }
}

export default TodoItem;