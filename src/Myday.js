// import App from "./App";
import { useState, useEffect, useRef } from "react";
import TodoList from "./TodoList";

function MyDay() {
  const [todos, setTodos] = useState(() => {
    if (localStorage.getItem("lists")) {
      return JSON.parse(localStorage.getItem("lists"));
    } else {
      return [];
    }
  });

  const newTodoText = useRef();

  const date = new Date();
const today = date.toISOString().split('T')[0]; // get the date in 'yyyy-mm-dd' format
const todaysTodos = todos.filter((todo) => todo.date === today);
  // const importantTo = useRef();

  function handleSave() {
    const todoText = newTodoText.current.value;
    if (todoText === "") return;
    const newTodo = [...todos, { todoText, done: false, important: true }];
    setTodos(newTodo);
    newTodoText.current.value = "";
    console.log(newTodo);
  }

  // Filter the todos to only include the important ones
  // const importantTodos = todos.filter((todo) => todo.important);

  function handleToggle(index) {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  }

  function handleDelete(index) {
    const newTodos = todos.filter((todo, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  }

  function handleImportant(index) {
    const newTodos = [...todos];
    newTodos[index].important = !newTodos[index].important;
    setTodos(newTodos);
  }

  useEffect(() => {
    const keyDownHandler = (event) => {
      console.log("User pressed", event.key);
      if (event.key === "Enter") {
        event.preventDefault();
        handleSave();
      }
    };
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  });

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(todos));
  }, [todos]);


  return (
    <div>
      <h1>Tasks of the day</h1>
      <TodoList
        ItemList={todaysTodos}
        toggleTodo={handleToggle}
        removeTodo={handleDelete}
        importantTodo={handleImportant}
      />
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
      <div className="details">
        <span className="material-symbols-outlined icon">task</span>
        <span className="description-text">todo</span>
      </div>
      <div className="details">
        <span className="material-symbols-outlined icon">task</span>
        <span className="description-text">todo</span>
      </div>
      <div className="details">
        <span className="material-symbols-outlined icon">task</span>
        <span className="description-text">todo</span>
      </div>
      <div className="details">
        <span className="material-symbols-outlined icon">task</span>
        <span className="description-text">todo</span>
      </div>
      <div className="details">
        <span className="material-symbols-outlined icon">task</span>
        <span className="description-text">todo</span>
      </div>
    </div>
  );
}

export default  MyDay; 
