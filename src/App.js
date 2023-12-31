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
        <Menu text="User Profile" icon="profile"></Menu>
        <Menu text="My Day" icon="sun"></Menu>
        <Menu text="All" icon="pile"></Menu>
        <Menu text="Important" icon="graph"></Menu>
        <Menu text="Others" icon="people"></Menu>
      </div>
      <div className="main-container">
        <SearchBar></SearchBar>
        <TodoList ItemList={todos} toggleTodo={handleToggle} />
        <input ref={newTodoText} type="text" placeholder="new Todo"></input>
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
        <Details text="time" icon="clock"></Details>
        <Details text="assigned" icon="graph"></Details>
        <Details text="todo" icon="task"></Details>
        <Details text="todo" icon="task"></Details>


      </div>
      <Routes>
        <Route path="/"></Route>
        <Route path="/Myday"></Route>
        {/* <Route path="/UserProfile" Component={UserProfile}></Route> */}
        <Route path="/SignUp"></Route>
        <Route path="/Calendar"></Route>
        <Route path="/Settings"></Route>
        <Route path="/Assigned"></Route>
        <Route path="/Important"></Route>
      </Routes>
    </div>
  );
}

export default App;
