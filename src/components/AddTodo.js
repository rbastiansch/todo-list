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

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  clearTodos() {
    this.props.clearTodos();
  }

  render() {
    const { values } = this.props;
    const checkObject = !(Object.keys(values).length === 0 && values.constructor === Object);
    return (
      <div>
        <input type="text" placeholder="add todo"
               onChange={event => this.setState({text: event.target.value})} />
        <button type="button"
                onClick={() => this.addTodo()} >Add todo
        </button>
        {
          checkObject ? 
            values.map((value, key) => {
              return (
                <div key={key}>
                  <p>{value.text}</p>
                  <button type="button"
                          onClick={() => this.removeTodo(value.id)} >remove Todo
                  </button>
                </div>
              )
            })
          : null
        }
        <div>
          <button type="button"
                  onClick={() => this.clearTodos()}>Clear all todos
          </button>
        </div>
      </div>
    )
  }
}

export default AddTodo;