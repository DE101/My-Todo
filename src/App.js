import "./App.css";
import React, { useState, useRef } from "react";
import TodoList from "./TodoList";

function App() {
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
    <div className="container">
      <div className="main-container">
        <TodoList ItemList={todos} toggleTodo={handleToggle} />
        <input ref={newTodoText} type="text" placeholder="New Todo"></input>
        <button onClick={handleSave}>Save Todo</button>
      </div>
      <div className="left-side-nav"></div>
      <div className="right-side-nav"></div>
    </div>
  );
}

export default App;
