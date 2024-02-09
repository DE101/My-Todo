import React, { useState, useRef } from "react";
import TodoList from "./TodoList";
import "./App.css";

function TodoMaker() {
  const [todos, setTodos] = useState([]);
  // hook in react
  const newTodoText = useRef();
  function handleSave() {
    const todoText = newTodoText.current.value;
    if (todoText === "") return;
    const newTodo = [...todos, { todoText, done: false }];
    setTodos(newTodo);
  }

  function handleToggle(index) {
    console.log(index);
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  }

  return (
    <div>
      <TodoList ItemList={todos} toggleTodo={handleToggle} />
      <input
        className="inputText"
        ref={newTodoText}
        type="text"
        placeholder="new Todo"
      ></input>
      <button className="big-screen" onClick={handleSave}>
        Save Todo
      </button>
      <button className="small-screen" onClick={handleSave}>
        +
      </button>
    </div>
  );
}

export default TodoMaker;
