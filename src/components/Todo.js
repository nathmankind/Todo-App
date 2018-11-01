import React, { Component } from "react";
import ListItems from "./ListItems";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      text: ""
    };
  }

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const todoItem = { title: this.state.text };
    //this.setState({ todos: [...todos, todoItem] });
    this.setState(prevState => ({
      todos: [...prevState.todos, todoItem],
      text: ""
    }));
    console.log(this.state.todos);
  };

  removeItem = i => {
    const todoItems = [...this.state.todos];
    todoItems.splice(i, 1);

    this.setState({
      todos: todoItems
    });
  };

  todoIndex = i => {
    console.log(i);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Enter Todo"
        />
        <button tpye="button" onClick={this.handleSubmit}>
          Add Todo
        </button>
        <hr />
        {/* {this.state.todos.length === 0 ? "No Todos" : <ul> {todoList} </ul>} */}
        {this.state.todos.length === 0 ? (
          "You have zero todos"
        ) : (
          <ListItems
            todos={this.state.todos}
            removeItem={this.removeItem}
            todoIndex={this.todoIndex}
          />
        )}
      </div>
    );
  }
}

export default Todo;
