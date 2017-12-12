import React, { Component } from 'react';

class TodoItem extends Component {
  removeTodo(id) {
    this.props.removeTodo(id);
  }

  completeTodo(id) {
    this.props.completeTodo(id);
  }

  render() {
    const { value, done } = this.props;
    const textDecoration = value.completed ? 'line-through' : 'none';
    return (
      <div className="todo-item" style={done ? styles.done : {}}>
        <p style={{textDecoration}}>{value.text}</p>
        <button className="button" type="button"
                onClick={() => this.completeTodo(value.id)} >Complete Todo
        </button>
        <button className="button" type="button"
                onClick={() => this.removeTodo(value.id)} >Remove
        </button>
      </div>
    )
  }
}

const styles = {
  done: {
    backgroundColor: '#FF00FF',
  },
};

export default TodoItem;