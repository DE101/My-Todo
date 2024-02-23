import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TodoList from "./TodoList";
import "./App.css";

function TodoMaker() {
  const [todos, setTodos] = useState(() => {
    if (localStorage.getItem("lists")) {
      return JSON.parse(localStorage.getItem("lists"));
    } else {
      return [];
    }
  });
  // hook in react
  const newTodoText = useRef();
  const importantTo = useRef();
  const [selectedDate, setselectedDate] = useState(new Date());

  function handleSave() {
    const todoText = newTodoText.current.value;
    if (todoText === "") return;
    const newTodo = [
      ...todos,
      { todoText, done: false, important: importantTo.current, selectedDate },
    ];

    setTodos(newTodo);
    newTodoText.current.value = "";
  }

  function handleDelete(index) {
    const newTodos = todos.filter((todo, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  }

  function handleToggle(index) {
    console.log(index);
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  }

  function handleImportant(index) {
    const newTodos = [...todos];
    newTodos[index].important = !newTodos[index].important;
    setTodos(newTodos);
  }

  // const handleDateChange = (date) => {
  //   setselectedDate(date);
  // };

  function handleDateChange(index, date) {
    setselectedDate(date);
    const newTodos = [...todos];
    newTodos[index].selectedDate = date;
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
      <TodoList
        ItemList={todos}
        toggleTodo={handleToggle}
        removeTodo={handleDelete}
        importantTodo={handleImportant}
        todoDate={handleDateChange}
        selectedDate={selectedDate}
      />
      <div className="todoInputContainer">
        <input
          className="inputText"
          ref={newTodoText}
          type="text"
          placeholder="new Todo"
        >
        </input>
        <DatePicker
          className="datentime"
          selected={selectedDate}
          onChange={(date) => handleDateChange(date)}
          dateFormat="D/MM/YYYY - hh:mm"
          showTimeSelect
          timeIntervals={5}
          timeFormat="hh:mm"
        />
      </div>
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
