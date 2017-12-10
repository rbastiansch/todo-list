import React, { Component } from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  checkKey(event) {
    event.key === "Enter" ? this.addTodo() : null;
  }

  addTodo() {
    const { text } = this.state;
    this.props.addTodo(text);
    this.setState({ text: '' });
  }

  render() {
    return (
      <div className="add-todo">
        <input type="text" placeholder="add todo" value={this.state.text}
               onChange={e => this.setState({text: e.target.value})} onKeyPress={e => this.checkKey(e)}  />
        <button className="button" type="button"
                onClick={() => this.addTodo()} >Add todo
        </button>
      </div>
    )
  }
}

export default AddTodo;