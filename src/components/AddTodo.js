import React, { Component } from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  addTodo() {
    const { text } = this.state;
    this.props.addTodo(text);
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="add todo"
               onChange={event => this.setState({text: event.target.value})} />
        <button type="button"
                onClick={() => this.addTodo()} >Add Todo
        </button>
      </div>
    )
  }
}

export default AddTodo;