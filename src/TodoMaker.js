import React, { useState, useRef, useEffect } from "react";

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
    newTodoText.current.value = '';
  }

  function handleDelete(index) {
    const newTodos = todos.filter((todo) => todo.index !== index);
    setTodos(newTodos);
  }

  function handleToggle(index) {
    console.log(index);
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  }
  useEffect (()=> {
    const keyDownHandler = event => {
      console.log('User pressed', event.key);
      if (event.key === 'Enter') {
        event.preventDefault();
        handleSave();
      }
    };
    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };

    
  })

  useEffect (()=> {
    localStorage.setItem('lists', JSON.stringify(todos));
  }, [todos])

  return (
    <div>
      <TodoList ItemList={todos} toggleTodo={handleToggle} removeTodo={handleDelete} />
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
