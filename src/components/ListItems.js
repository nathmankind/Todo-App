import React from "react";

const ListItems = props => (
  <ul>
    {props.todos.map((todo, i) => (
      <li key={i}>
        {todo.title}{" "}
        <button onClick={() => props.todoIndex(todo, i)}>Show index key</button>
        <button onClick={() => props.removeItem(todo, i)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default ListItems;

// let todoList = this.state.todos.map((e, i) => {
//     return <li key={i}>{e.title}</li>;
//   });
