import "./App.css";
import React, { useState, useRef } from "react";
import TodoList from "./TodoList";
import { Routes, Route } from "react-router-dom";
import SearchBar from "./Search";
import Menu from "./Menu";
import Details from "./Details";
import Settings from "./Settings";
// import { UserProfile } from "./UserProfile";

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
      <div className="left-side-nav">
        <Menu text="User Profile" icon="Account_circle"></Menu>
        <Menu text="My Day" icon="sunny"></Menu>
        <Menu text="All" icon="Database"></Menu>
        <Menu text="Important" icon="Monitoring"></Menu>
        <Menu text="Others" icon="people"></Menu>
      </div>
      <div className="main-container">
        <SearchBar></SearchBar>

        <Routes>
          <Route path="/All" element={TodoList}></Route>
        </Routes>

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
        
        <Settings></Settings>
      </div>
      <div className="right-side-nav">
        <Details text="todo" icon="task"></Details>
        <Details text="time" icon="Schedule"></Details>
        <Details text="assigned" icon="person_raised_hand"></Details>
        <Details text="todo" icon="task"></Details>
        <Details text="todo" icon="task"></Details>
      </div>
    </div>
  );
}

export default App;
