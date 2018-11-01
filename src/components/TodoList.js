import { React } from "react";

const TodoList = props => {
  <ul>
    {props.todos.map(todo => (
      <li key={todo.id}>Title: {todo.title}</li>
    ))}
  </ul>;
};

export default TodoList;

// When I'm finally tired of trying, I'll just leave. No fight, no arguments and sometimes not even a goodbye
