import React from "react";
import "./App.css";
import Todo from "./Todo";

function TodoList({ ItemList, toggleTodo, removeTodo,importantTodo }) {

  return (
    <div className="saveContainer">
      <ul>
        {ItemList.map((todo, index) => (
          <Todo item={todo} iterationKey={index} toggle={toggleTodo} remove={removeTodo} important={importantTodo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
