import "./App.css";
import React, { useState, useRef } from "react";
import TodoList from "./TodoList";
import { Routes, Route } from "react-router-dom";

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
      <div className="left-side-nav"></div>
      <div className="main-container">
        <TodoList ItemList={todos} toggleTodo={handleToggle} />
        <input ref={newTodoText} type="text" placeholder="New Todo"></input>
        <button className="big-screen" onClick={handleSave}>
          Save Todo
        </button>
        <button className="small-screen" onClick={handleSave}>
          +
        </button>
      </div>
      <div className="right-side-nav"></div>
      <Routes>
        <Route path="/"></Route>
        <Route path="/Myday"></Route>
        <Route path="/UserProfile"></Route>
        <Route path="/SignUp"></Route>
        <Route path="/Calendar"></Route>
        <Route path="/Settings"></Route>
      </Routes>
    </div>
  );
}

export default App;
